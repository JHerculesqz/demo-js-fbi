<template>
  <div class="trafficWrapper">
    <div class="topoArea">
      <topo-panel ref="ref4MainTopo4Traffic"
                  v-on:onTreeNodeClick="onTreeNodeClick"
                  v-on:onToolbarItemClick="onToolbarItemClick"
                  v-bind:toolbarItems="toolbarItems"
                  :id4Topo="id4Topo"
                  theme="dark"></topo-panel>
    </div>
    <marvel-bottom-ext-panel
      theme="dark"
      height="300"
      show="true"
      canDrag="false">
      <div slot="content" class="bottomPanelContent">
        <traffic-bottom ref="ref4BottomPanel"
                        v-on:onClickAccordionItem="onClickAccordionItem"
                        v-on:onClickFullPathRow="onClickFullPathRow"
                        v-on:onClickRow4Business="onClickRow4Business"
                        v-on:onClick4Business="onClick4Business"
                        v-on:onClickPartPathRow="onClickPartPathRow"
                        v-on:onClickRow4DiscreteCross="onClickRow4DiscreteCross"></traffic-bottom>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";
  import TrafficBottom from "@/components/0.common/0.4.trafficTopo/TrafficBottom";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";

  export default {
    components: {
      MarvelBottomExtPanel,
      TopoPanel,
      TrafficBottom
    },
    name: "TrafficTopo",
    props: ["toolbarItems", "id4Topo"],
    data: function () {
      return {
        //#region const
        debug: true,
        //endregion
      };
    },
    mounted: function () {

    },
    methods: {
      //#region inner

      //#endregion

      //#region callback
      onTreeNodeClick: function (oTreeNode) {
        this.$emit("onTreeNodeClick", oTreeNode);
      },
      onToolbarItemClick: function (oToolbarItem) {
        this.$emit("onToolbarItemClick", oToolbarItem);
      },
      onClickFullPathRow: function (oRow) {
        this.$emit("onClickFullPathRow", oRow);
      },
      onClickRow4Business: function (oRow) {
        this.$emit("onClickRow4Business", oRow);
      },
      onClick4Business: function(){
          this.$emit("onClick4Business");
      },
      onClickPartPathRow: function (oRow) {
        this.$emit("onClickPartPathRow", oRow);
      },
      onClickRow4DiscreteCross: function (oRow) {
        this.$emit("onClickRow4DiscreteCross", oRow);
      },
      onClickAccordionItem: function (oAccordionItem) {
        this.$emit("onClickAccordionItem", oAccordionItem);
      },
      //#endregion

      //#region 3rd
      //#region topo
      setData4LeftArea: function (oData4LeftArea) {
        this.$refs.ref4MainTopo4Traffic.setData4LeftArea(oData4LeftArea);
      },
      setData4RightArea: function (oData4RightArea) {
        this.$refs.ref4MainTopo4Traffic.setData4RightArea(oData4RightArea);
      },
      initTopo: function (oCallback) {
        this.$refs.ref4MainTopo4Traffic.initTopo(function () {
          oCallback();
        });
      },
      drawTopo: function (oData4Topo) {
        this.$refs.ref4MainTopo4Traffic.drawTopo(oData4Topo);
      },
      selectNe: function (strNeId) {
        this.$refs.ref4MainTopo4Traffic.selectNe(strNeId);
      },
      selectLink: function (strLinkId) {
        this.$refs.ref4MainTopo4Traffic.selectLink(strLinkId);
      },
      updateTopo: function(oTopo){
        this.$refs.ref4MainTopo4Traffic.updateTopo(oTopo);
      },
      //#endregion
      //#region traffic
      setFullPathData: function (rows4FullPath) {
        this.$refs.ref4BottomPanel.setFullPathData(rows4FullPath);
      },
      setBusinessData: function (rows4Business) {
        this.$refs.ref4BottomPanel.setBusinessData(rows4Business);
      },
      setPartPathData: function (rows4PartPath) {
        this.$refs.ref4BottomPanel.setPartPathData(rows4PartPath);
      },
      setDiscreteCrossData: function (rows4DiscreteCross) {
        this.$refs.ref4BottomPanel.setDiscreteCrossData(rows4DiscreteCross);
      },
      setData4FullPathRouter: function (rows4FullRouter) {
        this.$refs.ref4BottomPanel.setData4FullPathRouter(rows4FullRouter);
      },
      setData4PartPathRouter: function(rows4PartRouter){
        this.$refs.ref4BottomPanel.setData4PartPathRouter(rows4PartRouter);
      }
      //#endregion
      //#endregion
    }
  }
</script>

<style scoped>
  .trafficWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #272743;
  }

  .topoArea {
    width: 100%;
    height: 100%;
  }

  .bottomPanelContent {
    height: 100%;
  }
</style>
