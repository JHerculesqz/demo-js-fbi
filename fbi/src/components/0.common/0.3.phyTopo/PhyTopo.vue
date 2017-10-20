<template>
  <div class="phyWrapper">
    <topo-panel ref="ref4MainTopo4Phy"
                v-on:onTreeNodeClick="onTreeNodeClick"
                v-on:onToolbarItemClick="onToolbarItemClick"
                v-bind:toolbarItems="toolbarItems"
                :id4Topo="id4Topo"
                theme="dark"></topo-panel>
    <marvel-bottom-ext-panel
      theme="dark"
      height="300"
      show="true"
      canDrag="false">
      <div class="phyContent" slot="content">
        <phy-grid-panel ref="ref4PhyGridPanel"
                        v-on:onClickRow4Ne="onClickRow4Ne"
                        v-on:onClickRow4Fiber="onClickRow4Fiber"
                        v-on:onGridRowIconClick4Fiber="onGridRowIconClick4Fiber"
                        v-on:onGridRowIconClick4Cross="onGridRowIconClick4Cross"></phy-grid-panel>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import TopoPanel from '@/components/0.common/0.2.topo/TopoPanel';
  import PhyGridPanel from "@/components/0.common/0.1.phyGridPanel/PhyGridPanel";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";

  export default {
    components: {
      TopoPanel,
      PhyGridPanel,
      MarvelBottomExtPanel,
    },
    name: "PhyTopo",
    props: ["toolbarItems", "id4Topo"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
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
      onToolbarItemClick: function(oToolbarItem){
        this.$emit("onToolbarItemClick", oToolbarItem);
      },
      onClickRow4Ne: function (oRow) {
        this.$emit("onClickRow4Ne", oRow);
      },
      onClickRow4Fiber: function (oRow) {
        this.$emit("onClickRow4Fiber", oRow);
      },
      onGridRowIconClick4Fiber: function (oRow, oCell) {
        this.$emit("onGridRowIconClick4Fiber", oRow, oCell);
      },
      onGridRowIconClick4Cross: function (oRow, oCell) {
        this.$emit("onGridRowIconClick4Cross", oRow, oCell);
      },
      //#endregion
      //#region 3rd
      setData4LeftArea: function(oData4LeftArea){
        this.$refs.ref4MainTopo4Phy.setData4LeftArea(oData4LeftArea);
      },
      setData4RightArea: function (oData4RightArea) {
        this.$refs.ref4MainTopo4Phy.setData4RightArea(oData4RightArea);
      },
      initTopo: function (oCallback) {
        this.$refs.ref4MainTopo4Phy.initTopo(function () {
          oCallback();
        });
      },
      drawTopo: function (oData4Topo) {
        this.$refs.ref4MainTopo4Phy.drawTopo(oData4Topo);
      },
      selectNe: function (strNeId) {
        this.$refs.ref4MainTopo4Phy.selectNe(strNeId);
      },
      selectLink: function (strLinkId) {
        this.$refs.ref4MainTopo4Phy.selectLink(strLinkId);
      },
      setData4PhyGridPanelNe: function(oData4PhyGridPanelNe){
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelNe(oData4PhyGridPanelNe);
      },
      setData4PhyGridPanelBoard: function(oData4PhyGridPanelBoard){
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelBoard(oData4PhyGridPanelBoard);
      },
      setData4PhyGridPanelFiber: function(oData4PhyGridPanelFiber){
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelFiber(oData4PhyGridPanelFiber);
      },
      setData4PhyGridPanelCross: function(oData4PhyGridPanelCross){
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelCross(oData4PhyGridPanelCross);
      },
      setData4PhyGridPanelSubnet: function(oData4PhyGridPanelSubnet){
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelSubnet(oData4PhyGridPanelSubnet);
      },
      setData4PhyGridPanelSite: function(oData4PhyGridPanelSite){
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelSite(oData4PhyGridPanelSite);
      },
      //#endregion
    }
  }
</script>

<style scoped>
  .phyWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #272743;
  }
  .phyContent{
    height:100%;
  }
</style>
