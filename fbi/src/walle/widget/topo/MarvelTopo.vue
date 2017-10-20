<template>
  <div v-bind:id="id" class="marvelTopo"></div>
</template>

<script>
  export default {
    name: 'MarvelTopo',
    props: ["theme", "id"],
    data: function () {
      return {
        oTopo: undefined,
      };
    },
    methods: {
      //region event
      _onNodeClick: function(oNode, oEvent){
        this.$emit("onNodeClick", oNode, oEvent);
      },
      _onNodeGroupClick: function(oNodeGroup, oEvent){
        this.$emit("onNodeGroupClick", oNodeGroup, oEvent);
      },
      _onLinkGroupClick: function(oLinkGroup, oEvent){
        this.$emit("onLinkGroupClick", oLinkGroup, oEvent);
      },
      _onLinkClick: function(oLink, oEvent){
        this.$emit("onLinkClick", oLink, oEvent);
      },
      //endregion
      init: function (oAfterCallBack) {
        //#region resources
        var IMG_MAP = {
          nodeGroup: "static/topo/image/" + this.theme + "/nodeGroup1.svg",
          nodeGroupExpand: "static/topo/image/" + this.theme + "/nodeGroupExpand.svg",
          node: "static/topo/image/" + this.theme + "/node1.svg"
        };
        var THEME_DARK = {
          dark: {
            node: {
              labelColor: "#fff",
              selectColor: "rgba(255,255,255,0.25)"
            },
            link: {
              labelColor: "#fff",
              selectColor: 'rgba(255,255,255,0.75)',
              linkColor: {
                linkType1: "#ababb5",
                linkType2: "#FF4c4c",
                linkType3: "#ff8833"
              }
            }
          }
        };
        //#endregion
        //#region Topo
        var self = this;
        var oEventOptions = {
          //region node
          callbackOnNodeClick: function(oNode, oEvent){
            self._onNodeClick(oNode, oEvent);
          },
          //endregion
          //region nodeGroup
          callbackOnNodeGroupClick: function(oNodeGroup, oEvent){
            self._onNodeGroupClick(oNodeGroup, oEvent);
          },
          //endregion
          //region link
          callbackOnLinkGroupClick: function(oLinkGroup, oEvent){
            self._onLinkGroupClick(oLinkGroup, oEvent);
          },
          callbackOnLinkClick: function(oLink, oEvent){
            self._onLinkClick(oLink, oEvent);
          }
          //endregion
        };
        var oTopo = new window.$.MarvelTopo();
        this.oTopo = oTopo;
        //init
        oTopo.Api.init(oTopo, {
          id: this.id,
          themeKey: this.theme,
          imgMap: IMG_MAP,
          themeSetting: THEME_DARK,
          eventOptions: oEventOptions,
        }, function () {
          oAfterCallBack();
        });
      },
      draw: function (oTopoData) {
        this.oTopo.Api.draw(this.oTopo, oTopoData);
      },
      expandAllNodeGroup: function () {
        this.oTopo.Api.expandAllNodeGroup(this.oTopo);
      },
      collapseAllNodeGroup: function () {
        this.oTopo.Api.collapseAllNodeGroup(this.oTopo);
      },
      expandAllLinkGroup: function () {
        this.oTopo.Api.expandAllLinkGroup(this.oTopo);
      },
      collapseAllLinkGroup: function () {
        this.oTopo.Api.collapseAllLinkGroup(this.oTopo);
      },
      selectNodesById: function (arrNodeId) {
        this.oTopo.Api.selectNodesById(this.oTopo, arrNodeId);
      },
      selectLinksById: function (arrLinkId) {
        this.oTopo.Api.selectLinksById(this.oTopo, arrLinkId);
      },
      unSelectAll: function () {
        this.oTopo.Api.unSelectAll(this.oTopo);
      },
      getTopoData: function () {
        return this.oTopo.Api.getTopoData(this.oTopo);
      },
      updateTopo: function (oTopoData) {
        this.oTopo.Api.updateTopo(this.oTopo, oTopoData);
      },
      createNode: function(oBuObj){
        this.oTopo.Api.createNode(oBuObj, this.oTopo);
      }
    }
  }
</script>

<style scoped>
  .marvelTopo {
    width: 100%;
    height: 100%;
  }
</style>
