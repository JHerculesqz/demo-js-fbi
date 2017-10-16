<template>
  <marvel-left-ext-panel
    theme="dark"
    width="250"
    show="false"
    canDrag="false">
    <div class="gisLeftArea" slot="content">
      <div>
        <div class="title">站点</div>
        <div v-for="item in siteTypeItems">
          <marvel-check-box v-bind:ref="item.ref"
                            v-bind:id="item.ref"
                            v-bind:check="true"
                            v-bind:item="item"
                            v-bind:label="item.label"
                            showLabel="true"
                            v-on:onChange="onChange4Site"></marvel-check-box>
        </div>
      </div>
      <div>
        <div class="title">网元</div>
        <div v-for="item in nodeTypeItems">
          <marvel-check-box v-bind:ref="item.ref"
                            v-bind:id="item.ref"
                            v-bind:check="true"
                            v-bind:item="item"
                            v-bind:label="item.label"
                            showLabel="true"
                            v-on:onChange="onChange4Node"></marvel-check-box>
        </div>
      </div>
      <div>
        <div class="title">链路</div>
        <div>链路带宽(bit/s)</div>
        <div class="linkBandWidthItem">
          <marvel-check-box v-bind:ref="linkCheckItems[0].ref"
                            v-bind:id="linkCheckItems[0].ref"
                            v-bind:check="true"
                            v-bind:item="linkCheckItems[0]"
                            showLabel="false"
                            v-on:onChange="onChange4Link"></marvel-check-box>
          <label>大于等于</label>
          <input class="linkBandWidthInput" type="text" v-model="threshold1"/>
        </div>
        <div class="linkBandWidthItem">
          <marvel-check-box v-bind:ref="linkCheckItems[1]"
                            v-bind:id="linkCheckItems[1]"
                            v-bind:check="true"
                            v-bind:item="linkCheckItems[1]"
                            showLabel="false"
                            v-on:onChange="onChange4Link"></marvel-check-box>
          <label>大于</label>
          <input class="linkBandWidthInput" type="text" v-model="threshold2"/>
          <label>且小于</label>
          <input class="linkBandWidthInput" type="text" v-model="threshold1"/>
        </div>
        <div class="linkBandWidthItem">
          <marvel-check-box v-bind:ref="linkCheckItems[2]"
                            v-bind:id="linkCheckItems[2]"
                            v-bind:check="true"
                            v-bind:item="linkCheckItems[2]"
                            showLabel="false"
                            v-on:onChange="onChange4Link"></marvel-check-box>
          <label>小于等于</label>
          <input class="linkBandWidthInput" type="text" v-model="threshold2"/>
        </div>
      </div>
      <div>
        <div class="title">子网</div>
        <marvel-grid theme="dark"
                     :titles="titles4Subnet"
                     :rows="rows4Subnet"
                     :limit="limit4Subnet"></marvel-grid>
      </div>
    </div>
  </marvel-left-ext-panel>
</template>

<script>
  import {MarvelLeftExtPanel, MarvelZTree,
    MarvelZTreeItem, MarvelCheckBox, MarvelGrid} from "marvel-fui2";

  export default {
    components: {
      MarvelLeftExtPanel,
      MarvelZTree,
      MarvelZTreeItem,
      MarvelCheckBox,
      MarvelGrid
    },
    name: "GisLeftArea",
    data: function () {
      return {
        //region site
        siteTypeItems: [],
        //endregion
        //region node
        nodeTypeItems: [],
        //endregion
        //region link
        linkCheckItems: [{
          ref: "linkBWThreshold1"
        },{
          ref: "linkBWThreshold2"
        },{
          ref: "linkBWThreshold3"
        }],
        threshold1: 10,
        threshold2: 5,
        //endregion
        //region subNet
        titles4Subnet: [{
          label: "",
          width: "10%"
        },{
          label: "子网名称",
          width: "10%"
        }],
        skip4Subnet: 0,
        limit4Subnet: 20,
        rows4Subnet: []
        //endregion
      };
    },
    mounted: function () {

    },
    methods: {
      //region inner

      //endregion

      //region callback
      onChange4Site: function (strOldVal, strNewVal, oItem) {
        this.$emit("onChange4Site", strOldVal, strNewVal, oItem);
      },
      onChange4Node: function (strOldVal, strNewVal, oItem) {
        this.$emit("onChange4Node", strOldVal, strNewVal, oItem);
      },
      onChange4Link: function(strOldVal, strNewVal, oItem){
        this.$emit("onChange4Link", strOldVal, strNewVal, oItem);
      },
      //endregion

      //region 3rd
      setSiteData: function (oSiteTypeItems) {
        this.siteTypeItems = oSiteTypeItems;
      },
      setNodeData: function (oNodeTypeItems) {
        this.nodeTypeItems = oNodeTypeItems;
      },
      setLinkData: function(oLinkData){
        //TODO
      },
      setSubnetData: function(oSubnetData){
        this.rows4Subnet = oSubnetData.rows4Subnet;
      }
      //endregion
    }
  }
</script>

<style scoped>
  .gisLeftArea {
    color: #fff;
    height: 100%;
    overflow-y: scroll;
    overflow-x: scroll;
  }
  .title {
    border-bottom: 1px solid #d5d5d5;
    margin-bottom: 5px;
  }
  .linkBandWidthItem{
    font-size: 14px;
  }
  .linkBandWidthItem .linkBandWidthInput{
    width: 40px;
  }
</style>
