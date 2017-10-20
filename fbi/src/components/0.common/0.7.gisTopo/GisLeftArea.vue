<template>
  <marvel-left-ext-panel
    theme="dark"
    width="280"
    show="false"
    canDrag="false">
    <div class="gisLeftArea" slot="content">
      <!--region 站点-->
      <fieldset class="gisLeftAreaSession">
        <legend class="title">站点</legend>
        <div v-for="item in siteTypeItems" class="switchArea">
          <div class="switchLabel">{{item.label}}</div>
          <div class="switch">
            <marvel-switch v-bind:ref="item.ref"
                           v-bind:id="item.ref"
                           v-bind:check="true"
                           v-bind:buObj="item"
                           v-bind:label="item.label"
                           showLabel="true"
                           v-on:onChange="onChange4Site"></marvel-switch>
          </div>
        </div>
      </fieldset>
      <!--endregion -->
      <!--region 网元-->
      <fieldset class="gisLeftAreaSession">
        <legend class="title">网元</legend>
        <div class="switchArea" v-for="item in nodeTypeItems">
          <div class="switchLabel">{{item.label}}</div>
          <div class="switch">
            <marvel-switch v-bind:ref="item.ref"
                           v-bind:id="item.ref"
                           v-bind:check="true"
                           v-bind:buObj="item"
                           v-bind:label="item.label"
                           showLabel="true"
                           v-on:onChange="onChange4Node"></marvel-switch>
          </div>
        </div>
      </fieldset>
      <!--endregion -->
      <!--region 链路-->
      <fieldset class="gisLeftAreaSession">
        <legend class="title">链路</legend>
        <div class="subTitle">链路带宽(bit/s)</div>
        <div class="linkBandWidthItem">
          <div class="switchLabel">
            <div class="colorStyle"
                 v-bind:style="{backgroundColor: linkFilterOptions.filter[0].color}"></div>
            <label>大于等于</label>
            <input class="linkBandWidthInput" type="text" v-model.number="threshold1"/>
          </div>
          <div class="switch">
            <marvel-switch v-bind:ref="linkFilterOptions.filter[0].ref"
                           v-bind:id="linkFilterOptions.filter[0].ref"
                           v-bind:check="true"
                           v-bind:buObj="linkFilterOptions.filter[0]"
                           showLabel="false"
                           v-on:onChange="onChange4Link"></marvel-switch>
          </div>
        </div>
        <div class="linkBandWidthItem">
          <div class="switchLabel">
            <div class="colorStyle"
                 v-bind:style="{backgroundColor: linkFilterOptions.filter[1].color}"></div>
            <label>大于</label>
            <input class="linkBandWidthInput" type="text" v-model.number="threshold2"/>
            <label>且小于</label>
            <input class="linkBandWidthInput" type="text" v-model.number="threshold1"/>
          </div>
          <div class="switch">
            <marvel-switch v-bind:ref="linkFilterOptions.filter[1].ref"
                           v-bind:id="linkFilterOptions.filter[1].ref"
                           v-bind:check="true"
                           v-bind:buObj="linkFilterOptions.filter[1]"
                           showLabel="false"
                           v-on:onChange="onChange4Link"></marvel-switch>
          </div>
        </div>
        <div class="linkBandWidthItem">
          <div class="switchLabel">
            <div class="colorStyle"
                 v-bind:style="{backgroundColor: linkFilterOptions.filter[2].color}"></div>
            <label>小于等于</label>
            <input class="linkBandWidthInput" type="text" v-model.number="threshold2"/>
          </div>
          <div class="switch">
            <marvel-switch v-bind:ref="linkFilterOptions.filter[2].ref"
                           v-bind:id="linkFilterOptions.filter[2].ref"
                           v-bind:check="true"
                           v-bind:buObj="linkFilterOptions.filter[2]"
                           showLabel="false"
                           v-on:onChange="onChange4Link"></marvel-switch>
          </div>
        </div>
      </fieldset>
      <!--endregion -->
      <!--region 子网-->
      <fieldset class="gisLeftAreaSession">
        <legend class="title">子网</legend>
        <marvel-grid theme="dark"
                     :titles="titles4Subnet"
                     :rows="rows4Subnet"
                     :limit="limit4Subnet"
                     v-on:onClickRow="onClickRow4Subnet"></marvel-grid>
      </fieldset>
      <!--endregion -->
    </div>
  </marvel-left-ext-panel>
</template>

<script>
  import {MarvelLeftExtPanel, MarvelZTree,
    MarvelZTreeItem, MarvelCheckBox, MarvelGrid, MarvelSwitch} from "marvel-fui2";

  export default {
    components: {
      MarvelLeftExtPanel,
      MarvelZTree,
      MarvelZTreeItem,
      MarvelCheckBox,
      MarvelGrid,
      MarvelSwitch
    },
    name: "GisLeftArea",
    props: ["linkFilterOptions"],
    data: function () {
      return {
        //region site
        siteTypeItems: [],
        //endregion
        //region node
        nodeTypeItems: [],
        //endregion
        //region link
        threshold1: this.linkFilterOptions.threshold1,
        threshold2: this.linkFilterOptions.threshold2,
        //endregion
        //region subNet
        titles4Subnet: [{
          label: "",
          width: "10%"
        }, {
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
      onChange4Link: function (strOldVal, strNewVal, oItem) {
        this.$emit("onChange4Link", strOldVal, strNewVal, oItem);
      },
      thresholdChange: _.debounce(function(strErrorMsg){
        if(this.threshold1 <= this.threshold2){
          alert(strErrorMsg);
        }
        else{
          this.$emit("linkBwThresholdChange", this.threshold1, this.threshold2);
        }
      }, 1000),
      onClickRow4Subnet: function(oRow){
        this.$emit("onClickRow4Subnet", oRow);
      },
      //endregion

      //region 3rd
      setSiteData: function (oSiteTypeItems) {
        this.siteTypeItems = oSiteTypeItems;
      },
      setNodeData: function (oNodeTypeItems) {
        this.nodeTypeItems = oNodeTypeItems;
      },
      setLinkData: function (oLinkData) {
        //TODO
      },
      setSubnetData: function (oSubnetData) {
        this.rows4Subnet = oSubnetData.rows4Subnet;
      }
      //endregion
    },
    watch: {
      threshold1: function(iNewVal, iOldVal){
        this.thresholdChange("阈值设置不合理，阈值必须大于" + this.threshold2);
      },
      threshold2: function(iNewVal, iOldVal){
        this.thresholdChange("阈值设置不合理，阈值必须小于" + this.threshold1);
      }
    }
  }
</script>

<style scoped>
  .gisLeftArea {
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
  }

  .gisLeftAreaSession {
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border: 1px solid #8b90b3;
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .gisLeftAreaSession:hover {
    border: 1px solid #3dcca6;
  }

  .title {
    font-size: 16px;
    color: #8b90b3;
  }

  .gisLeftAreaSession:hover .title {
    color: #3dcca6;
  }

  .switchArea {
    margin-bottom: 10px;
    height: 20px;
  }

  .switchLabel {
    float: left;
    font-size: 14px;
    line-height: 20px;
  }

  .switch {
    float: right;
  }

  .subTitle {
    line-height: 14px;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .linkBandWidthItem {
    font-size: 14px;
    margin-bottom: 10px;
    height: 32px;
  }

  .linkBandWidthItem .linkBandWidthInput {
    width: 32px;
    border: 1px solid #8b90b3;
    background-color: transparent;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 2px;
    height: 18px;
    color: #ffffff;
  }

  .colorStyle {
    float: left;
    width: 20px;
    height: 18px;
    margin-right: 5px;
  }
</style>
