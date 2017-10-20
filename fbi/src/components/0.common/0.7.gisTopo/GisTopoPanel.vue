<template>
  <div class="gisArea">
    <gis-center-area ref="gisCenterArea" :id="id"
                     v-on:onNodeClick="onNodeClick"
                     v-on:onNodeGroupClick="onNodeGroupClick"
                     v-on:onLinkClick="onLinkClick"></gis-center-area>
    <gis-left-area class="panelClass" ref="gisLeftArea"
                   v-bind:linkFilterOptions="linkFilterOptions"
                   v-on:onChange4Site="onChange4Site"
                   v-on:onChange4Node="onChange4Node"
                   v-on:onChange4Link="onChange4Link"
                   v-on:linkBwThresholdChange="linkBwThresholdChange"
                   v-on:onClickRow4Subnet="onClickRow4Subnet"></gis-left-area>
    <!--<gis-right-area class="panelClass" ref="gisRightArea"></gis-right-area>-->
    <marvel-bottom-ext-panel class="panelClass"
                             theme="dark"
                             height="300"
                             show="true"
                             canDrag="false">
      <div slot="content">
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
  import GisLeftArea from "@/components/0.common/0.7.gisTopo/GisLeftArea";
  import GisCenterArea from "@/components/0.common/0.7.gisTopo/GisCenterArea";
  import GisRightArea from "@/components/0.common/0.7.gisTopo/GisRightArea";
  import PhyGridPanel from "@/components/0.common/0.1.phyGridPanel/PhyGridPanel";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";

  export default {
    components: {
      GisLeftArea,
      GisCenterArea,
      GisRightArea,
      PhyGridPanel,
      MarvelBottomExtPanel
    },
    name: "GisTopoPanel",
    props: ["id", "linkFilterOptions"],
    data: function () {
      return {};
    },
    methods: {
      //region inner

      //endregion

      //region callback
      //region gisTopo
      onNodeClick: function (e) {
        this.$emit("onNodeClick", e);
      },
      onNodeGroupClick: function (e) {
        this.$emit("onNodeGroupClick", e);
      },
      onLinkClick: function (e) {
        this.$emit("onLinkClick", e);
      },
      //endregion
      //region leftArea
      onChange4Site: function (strOldVal, strNewVal, oItem) {
        this.$emit("onChange4Site", strOldVal, strNewVal, oItem);
      },
      onChange4Node: function (strOldVal, strNewVal, oItem) {
        this.$emit("onChange4Node", strOldVal, strNewVal, oItem);
      },
      onChange4Link: function (strOldVal, strNewVal, oItem) {
        this.$emit("onChange4Link", strOldVal, strNewVal, oItem);
      },
      linkBwThresholdChange: function (iThreshold1, iThreshold2) {
        this.$emit("linkBwThresholdChange", iThreshold1, iThreshold2);
      },
      onClickRow4Subnet: function(oRow){
        this.$emit("onClickRow4Subnet", oRow);
      },
      //endregion
      //region bottomArea
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
      //endregion
      //endregion

      //region 3rd
      //region CenterArea
      initGisTopo: function (iX, iY, iZoom4Init, oOptions) {
        this.$refs.gisCenterArea.initGisTopo(iX, iY, iZoom4Init, oOptions);
      },
      drawGisTopo: function (oTopoData) {
        this.$refs.gisCenterArea.drawGisTopo(oTopoData);
      },
      getTopoData: function () {
        return this.$refs.gisCenterArea.getTopoData();
      },
      setOpacity4Marker: function (strId, iOpacity) {
        this.$refs.gisCenterArea.setOpacity4Marker(strId, iOpacity);
      },
      setOpacity4Group: function (strId, iOpacity) {
        this.$refs.gisCenterArea.setOpacity4Group(strId, iOpacity);
      },
      setOpacity4Link: function (strId, iOpacity) {
        this.$refs.gisCenterArea.setOpacity4Link(strId, iOpacity);
      },
      setColor4Link: function (strId, oColor) {
        this.$refs.gisCenterArea.setColor4Link(strId, oColor);
      },
      addPolygon: function (strId, arrPoints, oBuObj) {
        this.$refs.gisCenterArea.addPolygon(strId, arrPoints, oBuObj);
      },
      delPolygon: function(strId){
        this.$refs.gisCenterArea.delPolygon(strId);
      },
      //endregion
      //region leftArea
      setSiteData: function (oSiteData) {
        this.$refs.gisLeftArea.setSiteData(oSiteData);
      },
      setNodeData: function (oNodeData) {
        this.$refs.gisLeftArea.setNodeData(oNodeData);
      },
      setLinkData: function (oLinkData) {
        this.$refs.gisLeftArea.setLinkData(oLinkData);
      },
      setSubnetData: function (oSubnetData) {
        this.$refs.gisLeftArea.setSubnetData(oSubnetData);
      },
      //endregion
      //region rightArea
      updateRightAreaData: function (oType, oData) {
        this.$refs.gisRightArea.updateRightAreaData(oType, oData);
      },
      //endregion
      //region bottomPanel
      setData4PhyGridPanelNe: function (oData4PhyGridPanelNe) {
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelNe(oData4PhyGridPanelNe);
      },
      setData4PhyGridPanelBoard: function (oData4PhyGridPanelBoard) {
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelBoard(oData4PhyGridPanelBoard);
      },
      setData4PhyGridPanelFiber: function (oData4PhyGridPanelFiber) {
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelFiber(oData4PhyGridPanelFiber);
      },
      setData4PhyGridPanelCross: function (oData4PhyGridPanelCross) {
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelCross(oData4PhyGridPanelCross);
      },
      setData4PhyGridPanelSubnet: function (oData4PhyGridPanelSubnet) {
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelSubnet(oData4PhyGridPanelSubnet);
      },
      setData4PhyGridPanelSite: function (oData4PhyGridPanelSite) {
        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelSite(oData4PhyGridPanelSite);
      },
      //endregion
      //endregion
    }
  }
</script>

<style scoped>
  .gisArea {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .panelClass {
    z-index: 1001;
  }
</style>
