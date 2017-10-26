<template>
  <traffic-topo ref="ref4TrafficTopoNetWorkSyn" id4Topo="trafficTopo4NetworkSyn"
                v-bind:toolbarItems="toolbarItems"
                v-on:onTreeNodeClick="onTreeNodeClick"
                v-on:onToolbarItemClick="onToolbarItemClick"
                v-on:onClickAccordionItem="onClickAccordionItem"
                v-on:onClickFullPathRow="onClickFullPathRow"
                v-on:onClickRow4Business="onClickRow4Business"
                v-on:onClick4Business="onClick4Business"
                v-on:onClickPartPathRow="onClickPartPathRow"
                v-on:onClickRow4DiscreteCross="onClickRow4DiscreteCross"></traffic-topo>
</template>

<script>
  import TrafficTopo from "@/components/0.common/0.4.trafficTopo/TrafficTopo";

  export default {
    components: {
      TrafficTopo
    },
    name: "NetWorkSynTrafficRes",
    data: function () {
      return {
        //#region const
        debug: true,
        //endregion
        //#region toolbar
        toolbarItems: [{
          id: 0,
          label: '路径搜索',
          icon: 'icon-target'
        }, {
          id: 1,
          label: '拓扑还原',
          icon: 'icon-target'
        }, {
          id: 2,
          label: '保存',
          icon: 'icon-floppy-disk'
        }, {
          id: 3,
          label: '重置',
          icon: 'icon-target'
        }, {
          id: 4,
          label: '导出',
          icon: 'icon-download'
        }, {
          id: 5,
          label: '布局对齐',
          icon: 'icon-target'
        }, {
          id: 6,
          label: '显示设置',
          icon: 'icon-target'
        }, {
          id: 7,
          label: '平移模式',
          icon: 'icon-target'
        }, {
          id: 8,
          label: '最佳视图',
          icon: 'icon-target'
        }, {
          id: 9,
          label: '过滤',
          icon: 'icon-target'
        }, {
          id: 10,
          label: '全屏',
          icon: 'icon-target'
        }, {
          id: 11,
          label: '显示流量',
          icon: 'icon-target'
        }, {
          id: 12,
          label: '创建光纤',
          icon: 'icon-target'
        }, {
          id: 13,
          label: '返回上层',
          icon: 'icon-cloud-upload'
        }],
        //#endregion
        //#region traffic
        //#region fullPath
        rows4FullPath: [],
        //#endregion
        //#region business
        rows4Business: [],
        //#endregion
        //#region partPath
        rows4PartPath: [],
        //#endregion
        //#region discreteCross
        rows4DiscreteCross: [],
        //#endregion
        //#endregion
      };
    },
    mounted: function () {
      //1. _getData4Tree
      this._getData4Tree();
      //2. _getData4Topo
      this._getData4Topo();
      //3.1 _getData4GridFullPath
      this._getData4GridFullPath();
      //3.2 _getData4GridBusiness
//      this._getData4GridBusiness();
      //3.3 _getData4GridPartPath
      this._getData4GridPartPath();
      //3.4 _getData4GridDiscreteCross
      this._getData4GridDiscreteCross();
    },
    methods: {
      //#region inner
      //#region topo
      onTreeNodeClick: function (oTreeNode) {
        this._getDevPropsByDevId(oTreeNode.id);
        this.$refs.ref4TrafficTopoNetWorkSyn.selectNe(oTreeNode.id);
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
        this.$refs.ref4TrafficTopoNetWorkSyn.setData4RightArea(oData4RightArea);
      },
      onToolbarItemClick: function (oToolbarItem) {
        console.log(oToolbarItem);
      },
      _getData4Tree: function () {
        if (this.debug) {
          var oData4LeftArea = {
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
          this.$refs.ref4TrafficTopoNetWorkSyn.setData4LeftArea(oData4LeftArea);
        }
        else {
          //TODO:
        }
      },
      _getData4Topo: function () {
        var self = this;
        var oTopoData = {
          nodes: [],
          nodeGroups: [],
          links: []
        };
        if (this.debug) {
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
        }
        else {
          //TODO
        }
        this.$refs.ref4TrafficTopoNetWorkSyn.initTopo(function () {
          self.$refs.ref4TrafficTopoNetWorkSyn.drawTopo(oTopoData);
        });
      },
      //#endregion
      //#region traffic
      _getData4GridFullPath: function () {
        this.rows4FullPath = [];
        if (this.debug) {
          for (var i = 0; i < 40; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "0001/E1_/CDMXDFCU/CDMXDFTP_" + i,
              type: "text"
            }, {
              value: "VC12",
              type: "text"
            }, {
              value: "单向",
              type: "text"
            }, {
              value: "TDM",
              type: "text"
            }, {
              value: "nodeBase0",
              type: "text"
            }, {
              value: "8-SL16-" + i,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: "nodeBase2",
              type: "text"
            }, {
              value: "18-JQ16-" + i,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: "-",
              type: "text"
            }, {
              value: "否",
              type: "text"
            }];
            this.rows4FullPath.push(oRow);
          }

          this.$refs.ref4TrafficTopoNetWorkSyn.setFullPathData(this.rows4FullPath);
        }
        else {
          //TODO
        }
      },
      _getData4GridBusiness: function (oAfterCallBack) {
        this.rows4Business = [];
        if (this.debug) {
          var oRow = [{
            value: 1,
            type: "text"
          }, {
            value: "nodeBase0",
            type: "text"
          }, {
            value: "nodeBase2",
            type: "text"
          }, {
            value: "40",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "0",
            type: "text"
          }, {
            value: "40",
            type: "text"
          }, {
            value: "100%",
            type: "text"
          }];
          this.rows4Business.push(oRow);
          oAfterCallBack();
        }
        else {
          //TODO
        }
      },
      _getData4GridPartPath: function () {
        this.rows4PartPath = [];
        if (this.debug) {
          for (var i = 0; i < 10; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "0001/E1_/CDMXDFCU/CDMXDFTP_" + i,
              type: "text"
            }, {
              value: "VC12",
              type: "text"
            }, {
              value: "单向",
              type: "text"
            }, {
              value: "nodeBase0",
              type: "text"
            }, {
              value: "8-SL16-" + i,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: "nodeBase2",
              type: "text"
            }, {
              value: "18-JQ16-" + i,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: i + 1,
              type: "text"
            }, {
              value: "-",
              type: "text"
            }, {
              value: "否",
              type: "text"
            }, {
              value: "路径源或者宿未落地",
              type: "text"
            }, {
              value: "删除路由上的低阶业务",
              type: "text"
            }];
            this.rows4PartPath.push(oRow);
          }
        }
        else {
          //TODO
        }
      },
      _getData4GridDiscreteCross: function () {
        this.rows4DiscreteCross = [];
        if (this.debug) {
          for (var i = 0; i < 100; i++) {
            var oRow = [{
              value: i + 1,
              type: "text"
            }, {
              value: "nodeBase" + i,
              type: "text"
            }, {
              value: "VC12",
              type: "text"
            }, {
              value: "15-SLNO-1",
              type: "text"
            }, {
              value: "1",
              type: "text"
            }, {
              value: "2",
              type: "text"
            }, {
              value: "10-SLNO-1",
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
              value: "-",
              type: "text"
            }];

            this.rows4DiscreteCross.push(oRow);
          }
        }
        else {
          //TODO
        }
      },
      onClickAccordionItem: function (oAccordionItem) {
        if (oAccordionItem.label == "业务详情") {
          this.$refs.ref4TrafficTopoNetWorkSyn.setFullPathData(this.rows4FullPath);
        }
        else if (oAccordionItem.label == "业务局向") {
          this.$refs.ref4TrafficTopoNetWorkSyn.setBusinessData(this.rows4Business);
        }
        else if (oAccordionItem.label == "不完整路径") {
          this.$refs.ref4TrafficTopoNetWorkSyn.setPartPathData(this.rows4PartPath);
        }
        else if (oAccordionItem.label == "离散交叉") {
          this.$refs.ref4TrafficTopoNetWorkSyn.setDiscreteCrossData(this.rows4DiscreteCross);
        }
      },
      onClickFullPathRow: function (oRow) {
        var self = this;
        this._getFullPathRouter(oRow, function (rows4FullRouter) {
          //1.更新路由详情表
          self.$refs.ref4TrafficTopoNetWorkSyn.setData4FullPathRouter(rows4FullRouter);
          //2.更新topo
          var oTopo = self._generateTopoData4FullRouter(rows4FullRouter);
          self.$refs.ref4TrafficTopoNetWorkSyn.updateTopo(oTopo);
        });
      },
      _getFullPathRouter: function (oRow, oAfterCallBack) {
        var rows4FullRouter = [];

        if (this.debug) {
          rows4FullRouter = [[{
            value: 1,
            type: "text"
          }, {
            value: oRow[5].value,
            type: "text"
          }, {
            value: oRow[6].value,
            type: "text"
          }, {
            value: oRow[7].value,
            type: "text"
          }, {
            value: oRow[8].value,
            type: "text"
          }, {
            value: oRow[5].value,
            type: "text"
          }, {
            value: oRow[6].value + 1,
            type: "text"
          }, {
            value: oRow[7].value + 1,
            type: "text"
          }, {
            value: oRow[8].value + 1,
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "1",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 2,
            type: "text"
          }, {
            value: oRow[5].value,
            type: "text"
          }, {
            value: oRow[6].value + 1,
            type: "text"
          }, {
            value: oRow[7].value + 1,
            type: "text"
          }, {
            value: oRow[8].value + 1,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value,
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "Fiber",
            type: "text"
          }, {
            value: "2",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 3,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value,
            type: "text"
          }, {
            value: oRow[11].value,
            type: "text"
          }, {
            value: oRow[12].value,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value + 1,
            type: "text"
          }, {
            value: oRow[11].value + 1,
            type: "text"
          }, {
            value: oRow[12].value + 1,
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "3",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 4,
            type: "text"
          }, {
            value: "nodeBase1",
            type: "text"
          }, {
            value: oRow[10].value + 1,
            type: "text"
          }, {
            value: oRow[11].value + 1,
            type: "text"
          }, {
            value: oRow[12].value + 1,
            type: "text"
          }, {
            value: oRow[9].value,
            type: "text"
          }, {
            value: oRow[10].value + 2,
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "-",
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "Fiber",
            type: "text"
          }, {
            value: "4",
            type: "text"
          }, {
            value: "",
            type: "text"
          }], [{
            value: 5,
            type: "text"
          }, {
            value: oRow[9].value,
            type: "text"
          }, {
            value: oRow[10].value + 1,
            type: "text"
          }, {
            value: oRow[11].value + 1,
            type: "text"
          }, {
            value: oRow[12].value + 1,
            type: "text"
          }, {
            value: oRow[9].value,
            type: "text"
          }, {
            value: oRow[10].value + 2,
            type: "text"
          }, {
            value: oRow[11].value + 2,
            type: "text"
          }, {
            value: oRow[12].value + 2,
            type: "text"
          }, {
            value: "正向工作",
            type: "text"
          }, {
            value: "VC12",
            type: "text"
          }, {
            value: "5",
            type: "text"
          }, {
            value: "",
            type: "text"
          }]];
        }
        else {
          //TODO:
        }

        oAfterCallBack(rows4FullRouter);
      },
      _generateTopoData4FullRouter: function (rows4FullRouter) {
        //TODO:
        var oTopo = {};
        return oTopo;
      },
      onClick4Business: function () {
        var self = this;
        this._getData4GridBusiness(function () {
          self.$refs.ref4TrafficTopoNetWorkSyn.setBusinessData(self.rows4Business);
        });
      },
      onClickRow4Business: function (oRow) {
        var self = this;
        this._generateTopoData4Business(oRow, function (oTopo) {
          self.$refs.ref4TrafficTopoNetWorkSyn.updateTopo(oTopo);
        });
      },
      _generateTopoData4Business: function (oRow, oAfterCallBack) {
        //TODO:
        var oTopo = {};
        oAfterCallBack(oTopo);
      },
      onClickPartPathRow: function (oRow) {
        //TODO:
        var self = this;
        this._getPartPathRouter(oRow, function (rows4PartRouter) {
          //更新路由详情表
          self.$refs.ref4TrafficTopoNetWorkSyn.setData4PartPathRouter(rows4PartRouter);
          //更新topo
          var oTopo = self._generateTopoData4PartRouter(rows4PartRouter);
          self.$refs.ref4TrafficTopoNetWorkSyn.updateTopo(oTopo);
        });
      },
      _getPartPathRouter: function (oRow, oAfterCallback) {
        var rows4PartRouter = [[{
          value: 1,
          type: "text"
        }, {
          value: oRow[5].value,
          type: "text"
        }, {
          value: oRow[6].value,
          type: "text"
        }, {
          value: oRow[7].value,
          type: "text"
        }, {
          value: oRow[8].value,
          type: "text"
        }, {
          value: oRow[5].value,
          type: "text"
        }, {
          value: oRow[6].value + 1,
          type: "text"
        }, {
          value: oRow[7].value + 1,
          type: "text"
        }, {
          value: oRow[8].value + 1,
          type: "text"
        }, {
          value: "正向工作",
          type: "text"
        }, {
          value: "VC12",
          type: "text"
        }, {
          value: "1",
          type: "text"
        }, {
          value: "",
          type: "text"
        }], [{
          value: 2,
          type: "text"
        }, {
          value: oRow[5].value,
          type: "text"
        }, {
          value: oRow[6].value + 1,
          type: "text"
        }, {
          value: oRow[7].value + 1,
          type: "text"
        }, {
          value: oRow[8].value + 1,
          type: "text"
        }, {
          value: "nodeBase1",
          type: "text"
        }, {
          value: oRow[10].value,
          type: "text"
        }, {
          value: "-",
          type: "text"
        }, {
          value: "-",
          type: "text"
        }, {
          value: "正向工作",
          type: "text"
        }, {
          value: "Fiber",
          type: "text"
        }, {
          value: "2",
          type: "text"
        }, {
          value: "",
          type: "text"
        }], [{
          value: 3,
          type: "text"
        }, {
          value: "nodeBase1",
          type: "text"
        }, {
          value: oRow[10].value,
          type: "text"
        }, {
          value: oRow[11].value,
          type: "text"
        }, {
          value: oRow[12].value,
          type: "text"
        }, {
          value: "nodeBase1",
          type: "text"
        }, {
          value: oRow[10].value + 1,
          type: "text"
        }, {
          value: oRow[11].value + 1,
          type: "text"
        }, {
          value: oRow[12].value + 1,
          type: "text"
        }, {
          value: "正向工作",
          type: "text"
        }, {
          value: "VC12",
          type: "text"
        }, {
          value: "3",
          type: "text"
        }, {
          value: "",
          type: "text"
        }], [{
          value: 4,
          type: "text"
        }, {
          value: "nodeBase1",
          type: "text"
        }, {
          value: oRow[10].value + 1,
          type: "text"
        }, {
          value: oRow[11].value + 1,
          type: "text"
        }, {
          value: oRow[12].value + 1,
          type: "text"
        }, {
          value: oRow[9].value,
          type: "text"
        }, {
          value: oRow[10].value + 2,
          type: "text"
        }, {
          value: "-",
          type: "text"
        }, {
          value: "-",
          type: "text"
        }, {
          value: "正向工作",
          type: "text"
        }, {
          value: "Fiber",
          type: "text"
        }, {
          value: "4",
          type: "text"
        }, {
          value: "",
          type: "text"
        }]];

        oAfterCallback(rows4PartRouter);
      },
      _generateTopoData4PartRouter: function (rows4PartRouter) {
        var oTopo = {};
        return oTopo;
      },
      onClickRow4DiscreteCross: function (oRow) {
        this.$refs.ref4TrafficTopoNetWorkSyn.selectNe(oRow.id)
      },
      //#endregion
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
