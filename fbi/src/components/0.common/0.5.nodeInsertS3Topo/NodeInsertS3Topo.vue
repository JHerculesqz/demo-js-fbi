<template>
  <div class="trafficWrapper">
    <div class="topoArea">
      <topo-panel ref="ref4MainTopo4Traffic"
                  v-on:onTreeNodeClick="onTreeNodeClick"
                  v-on:onToolbarItemClick="onToolbarItemClick"
                  v-bind:toolbarItems="toolbarItems"
                  :id4Topo="id4Topo"
                  :showLeftArea="showLeftArea"
                  :showRightArea="showRightArea"
                  theme="dark"></topo-panel>
    </div>
    <marvel-bottom-ext-panel
      theme="dark"
      height="300"
      show="true"
      canDrag="false">
      <div slot="content" class="bottomPanelContent">
        <node-insert-s3-topo-bottom ref="ref4BottomPanel"
                                    v-on:onClickConfirmPathRow="onClickConfirmPathRow"></node-insert-s3-topo-bottom>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";
  import NodeInsertS3TopoBottom from "@/components/0.common/0.5.nodeInsertS3Topo/NodeInsertS3TopoBottom";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";

  export default {
    components: {
      NodeInsertS3TopoBottom,
      MarvelBottomExtPanel,
      TopoPanel,
    },
    name: "NodeInsertS3Topo",
    props: ["toolbarItems", "id4Topo", "showLeftArea", "showRightArea"],
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
      onClickConfirmPathRow:function(oRow){
        this.$emit("onClickConfirmPathRow", oRow);
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
      setConfirmPathData: function (rows4ConfirmPath) {
        this.$refs.ref4BottomPanel.setConfirmPathData(rows4ConfirmPath);
      },
      setData4ConfirmPathRouter: function (rows4ConfirmRouter) {
        this.$refs.ref4BottomPanel.setData4ConfirmPathRouter(rows4ConfirmRouter);
      },
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
