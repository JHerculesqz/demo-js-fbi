<template>
  <phy-topo ref="refNodeInsertS1"
            :toolbarItems="toolbarItems" id4Topo="nodeInsertS1Topo"
            v-on:onTreeNodeClick="onTreeNodeClick"
            v-on:onToolbarItemClick="onToolbarItemClick"
            v-on:onClickRow4Ne="onClickRow4Ne"
            v-on:onClickRow4Fiber="onClickRow4Fiber">
  </phy-topo>
</template>

<script>
  import PhyTopo from "@/components/0.common/0.3.phyTopo/PhyTopo";

  export default {
    components: {
      PhyTopo,
    },
    name: 'NodeInsertS1',
    props: ["solutionName"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region toolbar
        toolbarItems: [{
          id: 0,
          label: '导入华为网络',
          icon: 'icon-marvelIcon-49'
        }, {
          id: 1,
          label: '添加',
          icon: 'icon-marvelIcon-31'
        }, {
          id: 2,
          label: '保存',
          icon: 'icon-marvelIcon-32'
        }, {
          id: 3,
          label: '重置',
          icon: 'icon-marvelIcon-33'
        }, {
          id: 5,
          label: '布局',
          icon: 'icon-marvelIcon-34'
        }, {
          id: 6,
          label: '设置',
          icon: 'icon-marvelIcon-35'
        }, {
          id: 7,
          label: '选中',
          icon: 'icon-marvelIcon-36'
        }, {
          id: 8,
          label: '最佳视图',
          icon: 'icon-marvelIcon-38'
        }, {
          id: 9,
          label: '过滤',
          icon: 'icon-marvelIcon-39'
        }, {
          id: 10,
          label: '全屏',
          icon: 'icon-marvelIcon-40'
        }, {
          id: 12,
          label: '创建光纤',
          icon: 'icon-marvelIcon-44'
        }],
        //#endregion
      }
    },
    mounted: function () {
      //1._getData4Tree
      this._getData4Tree();
      //2._getData4Topo
      this._getData4Topo();
      //3.1._getData4PhyGridPanelNe
      this._getData4PhyGridPanelNe();
      //3.2._getData4PhyGridPanelBoard
      this._getData4PhyGridPanelBoard();
      //3.3._getData4PhyGridPanelFiber
      this._getData4PhyGridPanelFiber();
      //3.4._getData4PhyGridPanelCross
      this._getData4PhyGridPanelCross();
      //3.5._getData4PhyGridPanelSubnet
      this._getData4PhyGridPanelSubnet();
      //3.6._getData4PhyGridPanelSite
      this._getData4PhyGridPanelSite();
    },
    methods: {
      //#region inner
      onTreeNodeClick: function (oTreeNode) {
        this._getDevPropsByDevId(oTreeNode.id);
      },
      onToolbarItemClick: function (oToolbarItem) {
        console.log(oToolbarItem);
      },
      onClickRow4Ne: function (oRow) {
        this._getDevPropsByDevId(oRow[1].value);
      },
      onClickRow4Fiber: function (oRow) {
        this._getLinkPropsByLinkId(oRow[1].value);
      },
      onGridRowIconClick4Fiber: function (oRow, oCell) {
        console.log(oCell);
      },
      onGridRowIconClick4Cross: function (oRow, oCell) {
        console.log(oCell);
      },
      _getData4Tree: function () {
        var oData4LeftArea = {};

        if (this.debug) {
          oData4LeftArea = {
            treeData: [{
              id: "root",
              name: 'root',
              icon: "icon-address-book",
              children: [{
                id: 'nodeBase0',
                name: 'nodeBase0',
                icon: "icon-address-book",
              }, {
                id: 'nodeBase1',
                name: 'nodeBase1',
                icon: "icon-address-book"
              }]
            }],
            treeOptions: {
              hasActiveStyle: true
            }
          };
        }
        else {
          //TODO:
        }
        this.$refs.refNodeInsertS1.setData4LeftArea(oData4LeftArea);
      },
      _getData4Topo: function () {
        var self = this;
        if (this.debug) {
          var oTopoData = {
            nodes: [],
            nodeGroups: [],
            links: []
          };
          //#region node

          //#region 网元
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
          var oNode4 = {
            id: "VNE2",
            x: Math.random() * 800,
            y: Math.random() * 300,
            uiImgKey: "node",
            uiLabel: "VNE2",
            uiNode: true
          };
          arrNode.push(oNode4);
          oTopoData.nodes = arrNode;
          //#endregion

          //#endregion
          //#region link
          var arrLink = [];
          //#region 网元与网元之间的单条链路
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
          var oLink3 = {
            id: "link3",
            srcNodeId: "nodeBase1",
            dstNodeId: "VNE2",
            uiLabelL: "nodeBase1",
            uiLabelM: "link3",
            uiLabelR: "VNE2",
            uiLink: true,
            uiLinkColorKey: "linkType1",
            uiLinkWidth: 3
          };
          arrLink.push(oLink3);
          //#endregion
          oTopoData.links = arrLink;
          //#endregion
          self.$refs.refNodeInsertS1.initTopo(function () {
            self.$refs.refNodeInsertS1.drawTopo(oTopoData);
          });
        }
        else {
          //TODO:
        }
      },
      _getDevPropsByDevId: function (strNeId) {
        var oData4RightArea = [];
        if (this.debug) {
          oData4RightArea = [
            [{
              value: "搬迁状态",
              type: "text"
            }, {
              value: "未设计",
              type: "text"
            }], [{
              value: "高阶使用容量",
              type: "text"
            }, {
              value: "0.156G",
              type: "text"
            }], [{
              value: "高阶交叉个数",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }], [{
              value: "低阶使用容量",
              type: "text"
            }, {
              value: "0.156G",
              type: "text"
            }], [{
              value: "低阶交叉个数",
              type: "text"
            }, {
              value: "2",
              type: "text"
            }], [{
              value: "低阶等效VC4容量",
              type: "text"
            }, {
              value: "4",
              type: "text"
            }], [{
              value: "低阶等效VC4个数",
              type: "text"
            }, {
              value: "5",
              type: "text"
            }], [{
              value: "网元ID",
              type: "text"
            }, {
              value: strNeId,
              type: "text"
            }], [{
              value: "网元名称",
              type: "text"
            }, {
              value: strNeId,
              type: "text"
            }], [{
              value: "网元类型",
              type: "text"
            }, {
              value: "SDH",
              type: "text"
            }], [{
              value: "设备厂商",
              type: "text"
            }, {
              value: "Huawei",
              type: "text"
            }], [{
              value: "子架类型",
              type: "text"
            }, {
              value: "metro001",
              type: "text"
            }], [{
              value: "时隙模式",
              type: "text"
            }, {
              value: "华为时隙",
              type: "text"
            }], [{
              value: "IP地址",
              type: "text"
            }, {
              value: "-",
              type: "text"
            }], [{
              value: "版本号",
              type: "text"
            }, {
              value: "-",
              type: "text"
            }], [{
              value: "领域",
              type: "text"
            }, {
              value: "SDH",
              type: "text"
            }]
          ];
        }
        else {
          //TODO:
        }
        this.$refs.refNodeInsertS1.setData4RightArea(oData4RightArea);
        this.$refs.refNodeInsertS1.selectNe(strNeId);
      },
      _getLinkPropsByLinkId: function (strLinkId) {
        var oData4RightArea = [];

        if (this.debug) {
          oData4RightArea = [
            [{
              value: "链路利用率",
              type: "text"
            }, {
              value: "52%",
              type: "text"
            }], [{
              value: "光纤名称",
              type: "text"
            }, {
              value: strLinkId,
              type: "text"
            }], [{
              value: "光纤级别",
              type: "text"
            }, {
              value: "STM1",
              type: "text"
            }], [{
              value: "光纤方向",
              type: "text"
            }, {
              value: "单纤单向",
              type: "text"
            }], [{
              value: "光纤长度",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }], [{
              value: "源端网络类型",
              type: "text"
            }, {
              value: "SDH",
              type: "text"
            }], [{
              value: "源网元ID",
              type: "text"
            }, {
              value: "",
              type: "text"
            }], [{
              value: "源网元名称",
              type: "text"
            }, {
              value: "nodeBase0",
              type: "text"
            }], [{
              value: "源网元槽位",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }], [{
              value: "源单板名称",
              type: "text"
            }, {
              value: "SLNO",
              type: "text"
            }], [{
              value: "源端口",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }], [{
              value: "宿端网络类型",
              type: "text"
            }, {
              value: "SDH",
              type: "text"
            }], [{
              value: "宿网元ID",
              type: "text"
            }, {
              value: "nodeBase1",
              type: "text"
            }], [{
              value: "宿网元名称",
              type: "text"
            }, {
              value: "nodeBase1",
              type: "text"
            }], [{
              value: "宿网元槽位",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }], [{
              value: "宿单板名称",
              type: "text"
            }, {
              value: "SLNO",
              type: "text"
            }], [{
              value: "宿端口",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }], [{
              value: "数据来源",
              type: "text"
            }, {
              value: "系统导入",
              type: "text"
            }]
          ];

        }
        else {
          //TODO:
        }
        this.$refs.refNodeInsertS1.setData4RightArea(oData4RightArea);
        this.$refs.refNodeInsertS1.selectLink(strLinkId);
      },
      _getData4PhyGridPanelNe: function () {
        var oRows4Ne = [];

        if (this.debug) {
          for (var i = 0; i < 2; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "nodeBase" + i,
              type: "text"
            }, {
              value: "nodeBase" + i,
              type: "text"
            }, {
              value: "SDH",//Math.random() * 100
              type: "text"
            }, {
              value: "OSN3500",//Math.random() * 100
              type: "text"
            }, {
              value: "Huawei",//Math.random() * 100
              type: "text"
            }, {
              value: "metro001",//Math.random() * 100
              type: "text"
            }, {
              value: "华为模式",//Math.random() * 100
              type: "text"
            }, {
              value: "未设计",//Math.random() * 100
              type: "text"
            }, {
              value: "2.344G",//Math.random() * 100
              type: "text"
            }, {
              value: "2",//Math.random() * 100
              type: "text"
            }, {
              value: "4.160G",//Math.random() * 100
              type: "text"
            }, {
              value: "1",//Math.random() * 100
              type: "text"
            }, {
              value: "-",//Math.random() * 100
              type: "text"
            }, {
              value: "-",//Math.random() * 100
              type: "text"
            }, {
              value: "-",//Math.random() * 100
              type: "text"
            }];

            oRows4Ne.push(oRow);
          }
        }
        else {
          //TODO:
        }

        this.$refs.refNodeInsertS1.setData4PhyGridPanelNe(oRows4Ne);
      },
      _getData4PhyGridPanelBoard: function () {
        var oRows4Board = [];

        if (this.debug) {
          for (var i = 0; i < 4; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "nodeBase" + Math.floor(i / 10),
              type: "text"
            }, {
              value: "nodeBase" + Math.floor(i / 10),
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: "N2PQ1",
              type: "text"
            }, {
              value: "PDH单板",
              type: "text"
            }, {
              value: "SDH",
              type: "text"
            }, {
              value: "-",
              type: "text"
            }, {
              value: "metro001",
              type: "text"
            }];
            oRows4Board.push(oRow);
          }
        }
        else {
          //TODO:
        }

        this.$refs.refNodeInsertS1.setData4PhyGridPanelBoard(oRows4Board);
      },
      _getData4PhyGridPanelFiber: function () {
        var oRows4Fiber = [];

        if (this.debug) {
          for (var i = 0; i < 3; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "link" + i,
              type: "text"
            }, {
              value: "STM1",
              type: "text"
            }, {
              value: "单纤单向",
              type: "text"
            }, {
              value: "nodeBase" + i,
              type: "text"
            }, {
              value: "7-N1SLT1-" + i,
              type: "text"
            }, {
              value: "nodeBase" + (i + 1),
              type: "text"
            }, {
              value: "1-S2L-" + i,
              type: "text"
            }, {
              value: "90%",
              type: "text"
            }, {
              value: "系统导入",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }, {
              value: "-",
              type: "text"
            }, {
              value: [{
                value: "icon-bin"
              }, {
                value: "icon-marvelIcon-30",
              }],
              type: "icon"
            }];
            oRows4Fiber.push(oRow);
          }
        }
        else {
          //TODO
        }

        this.$refs.refNodeInsertS1.setData4PhyGridPanelFiber(oRows4Fiber);
      },
      _getData4PhyGridPanelCross: function () {
        var oRows4Cross = [];

        if (this.debug) {
          for (var i = 0; i < 10; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "nodeBase" + Math.floor(i / 10),
              type: "text"
            }, {
              value: "VC12",
              type: "text"
            }, {
              value: "7-N1SLT1-" + i,
              type: "text"
            }, {
              value: "1",
              type: "text"
            }, {
              value: "2",
              type: "text"
            }, {
              value: "7-N1SLT1-" + i + 1,
              type: "text"
            }, {
              value: "1",
              type: "text"
            }, {
              value: "2",
              type: "text"
            }, {
              value: "工作",
              type: "text"
            }, {
              value: "是",
              type: "text"
            }, {
              value: "-",
              type: "text"
            }, {
              value: "",
              type: "text"
            }, {
              value: [{
                value: "icon-bin"
              }, {
                value: "icon-marvelIcon-30",
              }],
              type: "icon"
            }];

            oRows4Cross.push(oRow);
          }
        }
        else {
          //TODO:
        }

        this.$refs.refNodeInsertS1.setData4PhyGridPanelCross(oRows4Cross);
      },
      _getData4PhyGridPanelSubnet: function () {
        var oRows4SubNet = [];

        if (this.debug) {
          for (var i = 0; i < 2; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "复用段线性保护1:N_1",
              type: "text"
            }, {
              value: "复用段线性保护1:N",
              type: "text"
            }, {
              value: "STM16",
              type: "text"
            }];

            oRows4SubNet.push(oRow);
          }
        }
        else {
          //TODO:
        }

        this.$refs.refNodeInsertS1.setData4PhyGridPanelSubnet(oRows4SubNet);
      },
      _getData4PhyGridPanelSite: function () {
        var oRows4Site = [];

        if (this.debug) {
          for (var i = 0; i < 3; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "nodeGroup0",
              type: "text"
            }, {
              value: "100.0",
              type: "text"
            }, {
              value: "20.0",
              type: "text"
            }, {
              value: "nodeBase0,nodeBase1",
              type: "text"
            }, {
              value: "SDH",
              type: "text"
            }, {
              value: "未知",
              type: "text"
            }, {
              value: "-",
              type: "text"
            }, {
              value: [{
                value: "icon-pencil"
              }],
              type: "icon"
            }];

            oRows4Site.push(oRow);
          }
        }
        else {
          //TODO:
        }

        this.$refs.refNodeInsertS1.setData4PhyGridPanelSite(oRows4Site);
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

</style>
