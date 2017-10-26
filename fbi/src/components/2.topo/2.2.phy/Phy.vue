<template>
  <phy-topo ref="ref4MainTopo4Phy"
            id4Topo="phyTopo"
            :toolbarItems="toolbarItems"
            v-on:onTreeNodeClick="onTreeNodeClick"
            v-on:onToolbarItemClick="onToolbarItemClick"
            v-on:onClickRow4Ne="onClickRow4Ne"
            v-on:onClickRow4Fiber="onClickRow4Fiber"
            v-on:onGridRowIconClick4Fiber="onGridRowIconClick4Fiber"
            v-on:onGridRowIconClick4Cross="onGridRowIconClick4Cross">
  </phy-topo>
</template>

<script>
  import PhyTopo from "@/components/0.common/0.3.phyTopo/PhyTopo";

  export default {
    components: {
      PhyTopo,
    },
    name: "Phy",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region toolbar
        toolbarItems: [{
          id: 0,
          label: '拓扑还原',
          icon: 'icon-marvelIcon-30'
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
          id: 4,
          label: '导出',
          icon: 'icon-download'
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
          id: 11,
          label: '显示流量',
          icon: 'icon-marvelIcon-42'
        }, {
          id: 12,
          label: '创建光纤',
          icon: 'icon-marvelIcon-44'
        }, {
          id: 13,
          label: '返回上层',
          icon: 'icon-marvelIcon-45'
        }],
        //#endregion
      };
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
              }, {
                id: 'nodeBase2',
                name: 'nodeBase2',
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
        this.$refs.ref4MainTopo4Phy.setData4LeftArea(oData4LeftArea);
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

          //#region 光站点
          var arrNodeGroup = [];
          for (var i = 0; i < 2; i++) {
            var iX = Math.random() * 400;
            var iY = Math.random() * 200;
            var oNodeGroup = {
              id: "nodeGroup" + i,
              x: iX,
              y: iY,
              uiImgKey: "nodeGroup",
              uiImgKey4Expand: "nodeGroupExpand",
              uiLabel: "nodeGroup" + i,
              uiExpandNode: false,
              uiExpandNodeWidth: 200,
              uiExpandNodeHeight: 200,
              uiNode: true,
              children: [{
                id: "node" + i + "_1",
                x: 50,
                y: 50,
                uiImgKey: "node",
                uiLabel: "node" + i + "_1",
                uiNode: true
              }, {
                id: "node" + i + "_2",
                x: 100,
                y: 100,
                uiImgKey: "node",
                uiLabel: "node" + i + "_2",
                uiNode: true
              }]
            };
            arrNodeGroup.push(oNodeGroup);
          }
          oTopoData.nodeGroups = arrNodeGroup;
          //#endregion

          //#region 网元
          var arrNode = [];
          for (var i = 0; i < 2; i++) {
            var iX = Math.random() * 400;
            var iY = Math.random() * 200;
            var oNode = {
              id: "node" + i,
              x: iX,
              y: iY,
              uiImgKey: "node",
              uiLabel: "node" + i,
              uiNode: true
            };
            arrNode.push(oNode);
          }
          for (var i = 0; i < 3; i++) {
            var iX = Math.random() * 400;
            var iY = Math.random() * 200;
            var oNode = {
              id: "nodeBase" + i,
              x: iX,
              y: iY,
              uiImgKey: "node",
              uiLabel: "nodeBase" + i,
              uiNode: true
            };
            arrNode.push(oNode);
          }
          oTopoData.nodes = arrNode;
          //#endregion

          //#endregion
          //#region link
          var arrLink = [];
          //#region 网元与网元之间的单条链路
          for (var i = 0; i < 3; i++) {
            var oLink = {
              id: "link" + i,
              srcNodeId: "nodeBase0",
              dstNodeId: "nodeBase1",
              uiLabelL: "nodeBase0",
              uiLabelM: "link" + i,
              uiLabelR: "nodeBase1",
              uiLink: true,
              uiLinkColorKey: "linkType1",
              uiLinkWidth: 3,
              uiDash: [10, 5]
            };
            arrLink.push(oLink);
          }
          //#endregion

          //#region 网元与网元之间的捆绑链路
          for (var i = 0; i < 2; i++) {
            //oLink1和oLink2为一组
            var oLink1 = {
              id: "gLink" + i + "_" + i,
              srcNodeId: "nodeBase" + i,
              dstNodeId: "nodeBase" + (i + 1),
              uiLinkGroupId: "groupLink" + i + "_" + i,
              uiLink: true,
              uiLinkExpand: false,
              uiLabelL: "nodeBase" + i,
              uiLabelM: "link" + i,
              uiLabelR: "nodeBase" + (i + 1),
              uiLinkColorKey: "linkType2",
              uiLinkWidth: 3
            };
            var oLink2 = {
              id: "gLink" + i + "_" + (i + 1),
              srcNodeId: "nodeBase" + i,
              dstNodeId: "nodeBase" + (i + 1),
              uiLinkGroupId: "groupLink" + i + "_" + i,
              uiLink: true,
              uiLinkExpand: false,
              uiLabelL: "nodeBase" + i,
              uiLabelM: "link" + i,
              uiLabelR: "nodeBase" + (i + 1),
              uiLinkColorKey: "linkType2",
              uiLinkWidth: 3
            };
            //oLink3和oLink4为一组
            var oLink3 = {
              id: "gLink" + i + "_" + (i + 2),
              srcNodeId: "nodeBase" + i,
              dstNodeId: "nodeBase" + (i + 1),
              uiLinkGroupId: "groupLink" + i + "_" + (i + 1),
              uiLink: true,
              uiLinkExpand: false,
              uiLabelL: "nodeBase" + i,
              uiLabelM: "link" + i,
              uiLabelR: "nodeBase" + (i + 1),
              uiLinkColorKey: "linkType3",
              uiLinkWidth: 3
            };

            var oLink4 = {
              id: "gLink" + i + "_" + (i + 3),
              srcNodeId: "nodeBase" + i,
              dstNodeId: "nodeBase" + (i + 1),
              uiLinkGroupId: "groupLink" + i + "_" + (i + 1),
              uiLink: true,
              uiLinkExpand: false,
              uiLabelL: "nodeBase" + i,
              uiLabelM: "link" + i,
              uiLabelR: "nodeBase" + (i + 1),
              uiLinkColorKey: "linkType3",
              uiLinkWidth: 3
            };

            arrLink.push(oLink1);
            arrLink.push(oLink2);
            arrLink.push(oLink3);
            arrLink.push(oLink4);
          }
          //#endregion

          //#region 网元与光设备之间的捆绑链路
          for (var i = 100; i < 101; i++) {
            var oLink1 = {
              id: "gLink" + i + 0,
              srcNodeId: "nodeBase2",
              dstNodeId: "node1_1",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i + 0,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 0,
              uiLinkColorKey: "linkType2",
              uiLinkWidth: 3
            };
            var oLink2 = {
              id: "gLink" + i + 1,
              srcNodeId: "nodeBase2",
              dstNodeId: "node1_1",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i + 1,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 0,
              uiLinkColorKey: "linkType2",
              uiLinkWidth: 3
            };
            var oLink3 = {
              id: "gLink" + i + 2,
              srcNodeId: "nodeBase2",
              dstNodeId: "node1_2",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i + 2,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 1,
              uiLinkColorKey: "linkType3",
              uiLinkWidth: 3
            };
            var oLink4 = {
              id: "gLink" + i + 3,
              srcNodeId: "nodeBase2",
              dstNodeId: "node1_2",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i + 3,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 1,
              uiLinkColorKey: "linkType3",
              uiLinkWidth: 3
            };
            arrLink.push(oLink1);
            arrLink.push(oLink2);
            arrLink.push(oLink3);
            arrLink.push(oLink4);
          }
          //#endregion

          //#region 光设备与光设备之间的捆绑链路
          for (var i = 200; i < 201; i++) {
            var oLink1 = {
              id: "gLink" + i + 0,
              srcNodeId: "node0_1",
              dstNodeId: "node1_1",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 0,
              uiLinkColorKey: "linkType2",
              uiLinkWidth: 3
            };
            var oLink2 = {
              id: "gLink" + i + 1,
              srcNodeId: "node0_1",
              dstNodeId: "node1_1",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 0,
              uiLinkColorKey: "linkType2",
              uiLinkWidth: 3
            };
            var oLink3 = {
              id: "gLink" + i + 2,
              srcNodeId: "node0_2",
              dstNodeId: "node1_2",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 1,
              uiLinkColorKey: "linkType3",
              uiLinkWidth: 3
            };
            var oLink4 = {
              id: "gLink" + i + 3,
              srcNodeId: "node0_2",
              dstNodeId: "node1_2",
              uiLabelL: "nodeBase0",
              uiLabelM: "gLink" + i,
              uiLabelR: "nodeBase1",
              uiLinkExpand: false,
              uiLink: true,
              uiLinkGroupId: "groupLink" + i + 1,
              uiLinkColorKey: "linkType3",
              uiLinkWidth: 3
            };
            arrLink.push(oLink1);
            arrLink.push(oLink2);
            arrLink.push(oLink3);
            arrLink.push(oLink4);
          }
          //#endregion
          oTopoData.links = arrLink;
          //#endregion
          self.$refs.ref4MainTopo4Phy.initTopo(function () {
            self.$refs.ref4MainTopo4Phy.drawTopo(oTopoData);
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
        this.$refs.ref4MainTopo4Phy.setData4RightArea(oData4RightArea);
        this.$refs.ref4MainTopo4Phy.selectNe(strNeId);
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
        this.$refs.ref4MainTopo4Phy.setData4RightArea(oData4RightArea);
        this.$refs.ref4MainTopo4Phy.selectLink(strLinkId);
      },
      _getData4PhyGridPanelNe: function () {
        var oRows4Ne = [];

        if (this.debug) {
          for (var i = 0; i < 3; i++) {
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

        this.$refs.ref4MainTopo4Phy.setData4PhyGridPanelNe(oRows4Ne);
      },
      _getData4PhyGridPanelBoard: function () {
        var oRows4Board = [];

        if (this.debug) {
          for (var i = 0; i < 40; i++) {
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

        this.$refs.ref4MainTopo4Phy.setData4PhyGridPanelBoard(oRows4Board);
      },
      _getData4PhyGridPanelFiber: function () {
        var oRows4Fiber = [];

        if (this.debug) {
          for (var i = 0; i < 100; i++) {
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

        this.$refs.ref4MainTopo4Phy.setData4PhyGridPanelFiber(oRows4Fiber);
      },
      _getData4PhyGridPanelCross: function () {
        var oRows4Cross = [];

        if (this.debug) {
          for (var i = 0; i < 40; i++) {
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

        this.$refs.ref4MainTopo4Phy.setData4PhyGridPanelCross(oRows4Cross);
      },
      _getData4PhyGridPanelSubnet: function () {
        var oRows4SubNet = [];

        if (this.debug) {
          for (var i = 0; i < 100; i++) {
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

        this.$refs.ref4MainTopo4Phy.setData4PhyGridPanelSubnet(oRows4SubNet);
      },
      _getData4PhyGridPanelSite: function () {
        var oRows4Site = [];

        if (this.debug) {
          for (var i = 0; i < 100; i++) {
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

        this.$refs.ref4MainTopo4Phy.setData4PhyGridPanelSite(oRows4Site);
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
