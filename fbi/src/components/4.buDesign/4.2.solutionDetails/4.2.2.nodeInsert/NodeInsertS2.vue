<template>
  <div class="phyWrapper">
    <topo-panel ref="ref4MainTopo4S2"
                id4Topo="nodeInsertS2Topo"
                :showLeftArea="false"
                :showRightArea="false"
                v-bind:toolbarItems="toolbarItems"
                v-on:onToolbarItemClick="onToolbarItemClick"
                theme="dark"></topo-panel>
    <marvel-dialog theme="dark" :showDialog="showDialog"
                   title="选择割接设备" width="450" height="450"
                   v-on:onClickDialogClose="onClickDialogClose">
      <div slot="dialogCont" class="dialogContArea">
        <marvel-grid :titles="titles4Nodes"
                     :rows="rows4Nodes"
                     :limit="limit4Nodes"
                     theme="dark"></marvel-grid>
      </div>
      <div slot="dialogFoot">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="确定"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClickSelectNodeOk"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="取消"
                                icon="icon-cancel-circle"
                                theme="dark"
                                v-on:onClick="onClickSelectNodeCancel"></marvel-icon-txt-button>
      </div>
    </marvel-dialog>
    <marvel-bottom-ext-panel
      theme="dark"
      height="300"
      show="true"
      canDrag="false">
      <div slot="content" class="gridArea">
        <div class="top">
          <marvel-grid :titles="titles4Fiber"
                       :rows="rows4Fiber"
                       :limit="limit4Fiber"
                       theme="dark"></marvel-grid>
        </div>
        <div class="down">
          <div class="gridFootBtn">
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="环插"
                                    icon="icon-checkmark"
                                    theme="dark"
                                    v-on:onClick="onClickInsertOk"></marvel-icon-txt-button>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="查看环插结果"
                                    icon="icon-checkmark"
                                    theme="dark"
                                    v-on:onClick="onClickInsertViewResult"></marvel-icon-txt-button>
          </div>
        </div>
      </div>
    </marvel-bottom-ext-panel>
  </div>
</template>

<script>
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";
  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";

  export default {
    components: {
      MarvelGrid,
      MarvelIconTxtButton,
      MarvelDialog,
      MarvelBottomExtPanel,
      TopoPanel
    },
    name: 'NodeInsertS2',
    props: ["solutionName"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region toolbar
        toolbarItems: [{
          id: 0,
          label: '环插设备',
          icon: 'icon-marvelIcon-30'
        }, {
          id: 1,
          label: '批量环插设备',
          icon: 'icon-marvelIcon-31'
        }],
        //#endregion
        //#region dialog
        showDialog: false,
        //#endregion
        //#region nodes
        titles4Nodes: [{
          label: "",
          width: "10%"
        }, {
          label: "网元名称",
          width: "90%"
        }],
        skip4Nodes: 0,
        limit4Nodes: 20,
        rows4Nodes: [],
        //#endregion
        //#region fiber
        titles4Fiber: [{
          label: "",
          width: "5%"
        }, {
          label: "光纤名称",
          width: "10%"
        }, {
          label: "光纤级别",
          width: "10%"
        }, {
          label: "承载业务",
          width: "10%"
        }, {
          label: "扩展网元设备",
          width: "10%"
        }, {
          label: "源网元/槽位/端口",
          width: "10%"
        }, {
          label: "源网元端口类型",
          width: "10%"
        }, {
          label: "扩展网元西向槽位-单板",
          width: "10%"
        }, {
          label: "扩展网元西向端口",
          width: "10%"
        }, {
          label: "扩展网元西向端口属性",
          width: "10%"
        }, {
          label: "宿网元/槽位/端口",
          width: "10%"
        }, {
          label: "宿网元端口类型",
          width: "10%"
        }, {
          label: "扩展网元东向槽位-单板",
          width: "10%"
        }, {
          label: "扩展网元东向端口",
          width: "10%"
        }, {
          label: "扩展网元东向端口属性",
          width: "10%"
        }],
        skip4Fiber: 0,
        limit4Fiber: 20,
        rows4Fiber: [],
        //#endregion
      }
    },
    mounted: function () {
      this.initTopo();
    },
    methods: {
      //#region inner
      initTopo: function () {
        this.$refs.ref4MainTopo4S2.initTopo(function () {
          //TODO:干掉loading条
        });
      },
      onToolbarItemClick: function (oToolbarItem) {
        if (oToolbarItem.id == 0) {
          var self = this;
          this._getNodes(function () {
            self.showDialog = true;
          });
        }
        else if (oToolbarItem.id == 1) {
          alert("批量环插设备");
        }
      },
      _getNodes: function (oAfterCallBack) {
        if (this.debug) {
          this.rows4Nodes = [];

          for (var i = 0; i < 2; i++) {
            var oRow = [];
            var oCell1 = {
              value: "",
              type: "text"
            };
            var oCell2 = {
              value: "nodeBase-" + i,
              type: "text"
            };
            oRow.push(oCell1);
            oRow.push(oCell2);
            this.rows4Nodes.push(oRow);
          }
          oAfterCallBack();
        }
        else {
          //TODO
        }
      },
      onClickDialogClose: function () {
        this.showDialog = false;
      },
      onClickSelectNodeOk: function () {
        this.showDialog = false;
        //获取选择的网元Id
        var strNodeId = "";
        this._getPhyTopoByNeId(strNodeId);
        this._getFiberData4Insert(strNodeId);
      },
      _getPhyTopoByNeId: function (strNeId) {
        var self = this;
        if (this.debug) {
          this._getTopoDataMock(strNeId, function (oTopoData) {
            setTimeout(function () {
              self.$refs.ref4MainTopo4S2.drawTopo(oTopoData);
            }, 1000);
          });
        }
        else {
          //TODO:
        }
      },
      _getTopoDataMock: function (strNeId, oAfterCallBack) {
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        //#region node

        var arrNode = [];
        var oNode1 = {
          id: "VNE1",
          x: Math.random() * 800,
          y: Math.random() * 300,
          uiImgKey: "node",
          uiLabel: "VNE1",
          uiNode: true
        };
        arrNode.push(oNode1);
        var oNode2 = {
          id: "nodeBase0",
          x: Math.random() * 800,
          y: Math.random() * 300,
          uiImgKey: "node",
          uiLabel: "nodeBase0",
          uiNode: true
        };
        arrNode.push(oNode2);
        var oNode3 = {
          id: "nodeBase1",
          x: Math.random() * 800,
          y: Math.random() * 300,
          uiImgKey: "node",
          uiLabel: "nodeBase1",
          uiNode: true
        };
        arrNode.push(oNode3);
        oTopoData.nodes = arrNode;
        //#endregion

        //#region link
        var arrLink = [];
        var oLink1 = {
          id: "link1",
          srcNodeId: "VNE1",
          dstNodeId: "nodeBase0",
          uiLabelL: "VNE1",
          uiLabelM: "link1",
          uiLabelR: "nodeBase0",
          uiLink: true,
          uiLinkColorKey: "linkType1",
          uiLinkWidth: 3
        };
        arrLink.push(oLink1);
        var oLink2 = {
          id: "link2",
          srcNodeId: "nodeBase0",
          dstNodeId: "nodeBase1",
          uiLabelL: "nodeBase0",
          uiLabelM: "link2",
          uiLabelR: "nodeBase1",
          uiLink: true,
          uiLinkColorKey: "linkType1",
          uiLinkWidth: 3
        };
        arrLink.push(oLink2);
        oTopoData.links = arrLink;
        //#endregion

        oAfterCallBack(oTopoData);
      },
      _getFiberData4Insert: function (strNeId) {
        if (this.debug) {
          this.rows4Fiber = [[{
            value: 1,
            type: "text"
          }, {
            value: "nodeBase0",
            type: "text"
          }, {
            value: "STM1",
            type: "text"
          }, {
            value: "是",
            type: "text"
          }, {
            value: "扩展网元",
            type: "text"
          }, {
            value: "nodeBase0-10-1",
            type: "text"
          }, {
            value: "电端口",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "工作",
            type: "text"
          }, {
            value: "nodeBase1-1-2",
            type: "text"
          }, {
            value: "电端口",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "工作",
            type: "text"
          }], [{
            value: 2,
            type: "text"
          }, {
            value: "nodeBase0",
            type: "text"
          }, {
            value: "STM1",
            type: "text"
          }, {
            value: "是",
            type: "text"
          }, {
            value: "扩展网元",
            type: "text"
          }, {
            value: "nodeBase0-10-1",
            type: "text"
          }, {
            value: "电端口",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "工作",
            type: "text"
          }, {
            value: "VNE1-1-2",
            type: "text"
          }, {
            value: "电端口",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "工作",
            type: "text"
          }]];
        }
        else {
          //TODO:
        }
      },
      onClickSelectNodeCancel: function () {
        this.showDialog = false;
      },
      onClickInsertOk: function () {
        if (this.debug) {
          alert(111);
        }
        else {
          //TODO:
        }
      },
      onClickInsertViewResult: function () {
        this.$parent.moduleName = "NodeInsertS2Res";
      },
      //#endregion

      //#region callback

      //#endregion

      //#region 3rd

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

  .gridArea {
    height: 100%;
  }

  .top {
    height: calc(100% - 42px);
  }

  .down {
    height: 42px;
  }

  .gridFootBtn {
    height: 100%;
    padding-top: 10px;
    box-sizing: border-box;
    float: right;
  }

  .dialogContArea {
    width: 100%;
    height: 100%;
  }
</style>
