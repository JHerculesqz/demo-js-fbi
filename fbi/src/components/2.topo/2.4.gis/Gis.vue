<template>
  <gis-topo-panel ref="gisTopoPanel" id="gisTopo"
                  v-bind:linkFilterOptions="linkFilterOptions"
                  v-on:onNodeClick="onNodeClick"
                  v-on:onNodeGroupClick="onNodeGroupClick"
                  v-on:onLinkClick="onLinkClick"
                  v-on:onChange4Site="onChange4Site"
                  v-on:onChange4Node="onChange4Node"
                  v-on:onChange4Link="onChange4Link"
                  v-on:linkBwThresholdChange="linkBwThresholdChange"
                  v-on:onClickRow4Subnet="onClickRow4Subnet"
                  v-on:onClickRow4Ne="onClickRow4Ne"
                  v-on:onClickRow4Fiber="onClickRow4Fiber"
                  v-on:onGridRowIconClick4Fiber="onGridRowIconClick4Fiber"
                  v-on:onGridRowIconClick4Cross="onGridRowIconClick4Cross"></gis-topo-panel>
</template>

<script>
  import GisTopoPanel from "@/components/0.common/0.7.gisTopo/GisTopoPanel";

  export default {
    components: {
      GisTopoPanel
    },
    name: "Gis",
    data: function () {
      return {
        //region const
        debug: true,
        //endregion
        //region linkFilterOptions
        linkFilterOptions: {
          filter: [{
            ref: "linkFilter1",
            color: "#e00000"
          },{
            ref: "linkFilter2",
            color: "#00aaff"
          },{
            ref: "linkFilter3",
            color: "#4ab610"
          }],
          threshold1: 10,
          threshold2: 5
        }
        //endregion
      };
    },
    mounted: function () {
      //region gisTopo
      //1.initGisTopo
      this._initGisTopo();
      //2.drawGisTopo
      this._drawGisTopo();
      //endregion
      //region leftArea
      //3._initSiteData4Filter
      this._initSiteData4Filter();
      //4._initNodeData4Filter
      this._initNodeData4Filter();
      //5._initLinkData4Filter
      this._initLinkData4Filter();
      //6._initSubnetData4Filter
      this._initSubnetData4Filter();
      //endregion
      //region bottomArea
      //7.1._getData4PhyGridPanelNe
      this._getData4PhyGridPanelNe();
      //7.2._getData4PhyGridPanelBoard
      this._getData4PhyGridPanelBoard();
      //7.3._getData4PhyGridPanelFiber
      this._getData4PhyGridPanelFiber();
      //7.4._getData4PhyGridPanelCross
      this._getData4PhyGridPanelCross();
      //7.5._getData4PhyGridPanelSubnet
      this._getData4PhyGridPanelSubnet();
      //7.6._getData4PhyGridPanelSite
      this._getData4PhyGridPanelSite();
      //endregion
    },
    methods: {
      //region inner
      //region gisTopo
      _initGisTopo: function () {
        this.$refs.gisTopoPanel.initGisTopo(51.505, -0.09, 13, {
          mapUrl: "https://api.mapbox.com/styles/v1/jherculesqz/cj99csbwi2bzy2qp3mhtqcrkx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamhlcmN1bGVzcXoiLCJhIjoiY2o4anNybjZqMDZnczMybXZxaHNhMDRlMyJ9.fR2DM7aypSp8q4AxE6uL5w",
          //mapUrl: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}",
          hasZoomCtrl: true,
          export: true,
          mess: true,
          messTmpLine: "#fff",
          messResLine: "#fff",
          pm: true,
        });
      },
      _drawGisTopo: function () {
        var self = this;
        this._getGisTopoData(function (oTopoData) {
          self.$refs.gisTopoPanel.drawGisTopo(oTopoData);
        });
      },
      _getGisTopoData: function (oAfterCallback) {
        if (this.debug) {
          this._getGisTopoDataMock(oAfterCallback);
        }
        else {
          //TODO:
        }
      },
      _getGisTopoDataMock: function (oAfterCallback) {
        var arrNodes = [];
        var arrNodeGroups = [];
        var arrLinks = [];
        //region node
        arrNodes.push({
          id: "marker1",
          name: "node1",
          x: 51.5,
          y: -0.09,
          uiType: "ne",
          deviceType: "ne5000",
          uiImgUrl: "/static/gis/lib/images/node1.svg",
          uiImgWidth: 32,
          uiLabel: "node1",
          uiTips: "<b>node1</b><br>11111",
          uiDraggable: true,
          uiOpacity: 1
        });
        arrNodes.push({
          id: "marker2",
          name: "node2",
          x: 51.50344816877402,
          y: -0.09883403778076173,
          uiType: "ne",
          deviceType: "ne9500",
          uiImgUrl: "/static/gis/lib/images/node1.svg",
          uiImgWidth: 32,
          uiLabel: "node2",
          uiTips: "<b>node2</b><br>11111",
          uiDraggable: true,
          uiOpacity: 1
        });
        arrNodes.push({
          id: "marker3",
          name: "node3",
          x: 51.5,
          y: -0.08,
          uiType: "ne",
          deviceType: "cx600",
          uiImgUrl: "/static/gis/lib/images/node1.svg",
          uiImgWidth: 32,
          uiLabel: "node3",
          uiTips: "<b>node3</b><br>11111",
          uiDraggable: true,
          uiOpacity: 1
        });
        //endregion

        //region nodeGroup
        arrNodeGroups.push({
          uiExpand: false,
          id: "site1",
          name: "site1",
          x: 51.49994457056707,
          y: -0.11597944259643556,
          uiType: "site",
          siteType: "核心站点",
          uiImgUrl: "/static/gis/lib/images/nodeGroup1.svg",
          uiImgWidth: 32,
          uiLabel: "site1",
          uiTips: "<b>site1</b><br>11111",
          uiOpacity: 1,
          r: 30,
          uiColor: "red",
          uiFillColor: "#f03",
          uiFillOpacity: 0.5,
          children: [{
            id: "site1_ne1",
            name: "site1_ne1",
            x: 51.49992987708078,
            y: -0.11618329048156738,
            uiType: "neInSite",
            deviceType: "ne9500",
            uiImgUrl: "/static/gis/lib/images/node1.svg",
            uiImgWidth: 32,
            uiLabel: "site1_ne1",
            uiTips: "<b>site1_ne1</b><br>11111",
            uiDraggable: false,
            uiOpacity: 1
          }, {
            id: "site1_ne2",
            name: "site1_ne2",
            x: 51.49999332628028,
            y: -0.11580241680145265,
            uiType: "neInSite",
            deviceType: "ne9500",
            uiImgUrl: "/static/gis/lib/images/node1.svg",
            uiImgWidth: 32,
            uiLabel: "site1_ne2",
            uiTips: "<b>site1_ne2</b><br>11111",
            uiDraggable: false,
            uiOpacity: 1
          }]
        });
        arrNodeGroups.push({
          uiExpand: false,
          id: "site2",
          name: "site2",
          x: 51.48894457056707,
          y: -0.10597944259643556,
          uiType: "site",
          siteType: "接入站点",
          uiImgUrl: "/static/gis/lib/images/nodeGroup1.svg",
          uiImgWidth: 32,
          uiLabel: "site2",
          uiTips: "<b>site2</b><br>11111",
          uiOpacity: 1,
          r: 30,
          uiColor: "red",
          uiFillColor: "#f03",
          uiFillOpacity: 0.5,
          children: [{
            id: "site2_ne1",
            name: "site2_ne1",
            x: 51.48892987708078,
            y: -0.10618329048156738,
            uiType: "neInSite",
            deviceType: "ne9500",
            uiImgUrl: "/static/gis/lib/images/node1.svg",
            uiImgWidth: 32,
            uiLabel: "site2_ne1",
            uiTips: "<b>site2_ne1</b><br>11111",
            uiDraggable: false,
            uiOpacity: 1
          }, {
            id: "site2_ne2",
            name: "site2_ne2",
            x: 51.48899332628028,
            y: -0.10580241680145265,
            uiType: "neInSite",
            deviceType: "ne9500",
            uiImgUrl: "/static/gis/lib/images/node1.svg",
            uiImgWidth: 32,
            uiLabel: "site2_ne2",
            uiTips: "<b>site2_ne2</b><br>11111",
            uiDraggable: false,
            uiOpacity: 1
          }]
        });
        arrNodeGroups.push({
          uiExpand: false,
          id: "site3",
          name: "site3",
          x: 51.50894457056707,
          y: -0.10597944259643556,
          uiType: "site",
          siteType: "汇聚站点",
          uiImgUrl: "/static/gis/lib/images/nodeGroup1.svg",
          uiImgWidth: 32,
          uiLabel: "site3",
          uiTips: "<b>site3</b><br>11111",
          uiOpacity: 1,
          r: 30,
          uiColor: "red",
          uiFillColor: "#f03",
          uiFillOpacity: 0.5,
          children: [{
            id: "site3_ne1",
            name: "site3_ne1",
            x: 51.50892987708078,
            y: -0.10618329048156738,
            uiType: "neInSite",
            deviceType: "ne9500",
            uiImgUrl: "/static/gis/lib/images/node1.svg",
            uiImgWidth: 32,
            uiLabel: "site3_ne1",
            uiTips: "<b>site3_ne1</b><br>11111",
            uiDraggable: false,
            uiOpacity: 1
          }, {
            id: "site3_ne2",
            name: "site3_ne2",
            x: 51.50899332628028,
            y: -0.10580241680145265,
            uiType: "neInSite",
            deviceType: "ne9500",
            uiImgUrl: "/static/gis/lib/images/node1.svg",
            uiImgWidth: 32,
            uiLabel: "site3_ne2",
            uiTips: "<b>site3_ne2</b><br>11111",
            uiDraggable: false,
            uiOpacity: 1
          }]
        });
        //endregion

        //region link

        //region 网元与网元

        arrLinks.push({
          id: "link1",
          srcNodeId: "marker1",
          dstNodeId: "marker2",
          uiType: "link",
          uiColor: "#e00000",
          uiWeight: 3,
          uiOpacity: 1,
          uiDashArray: "5, 10",
          uiTips: "link1",
          bw: 12,
          uiDirection: 2
        });

        //endregion

        //region 网元与站点之间

        arrLinks.push({
          id: "link2",
          srcNodeId: "marker2",
          dstNodeId: "site1_ne1",
          uiType: "link",
          uiColor: "#00aaff",
          uiWeight: 3,
          uiOpacity: 1,
          uiDashArray: "5, 10",
          uiTips: "link2",
          bw: 8,
          uiDirection: 2
        });
        arrLinks.push({
          id: "link3",
          srcNodeId: "marker2",
          dstNodeId: "site1_ne2",
          uiType: "link",
          uiColor: "#00aaff",
          uiWeight: 3,
          uiOpacity: 1,
          uiDashArray: "5, 10",
          uiTips: "link2",
          bw: 8,
          uiDirection: 2
        });

        //endregion

        //region 站点与站点之间

        arrLinks.push({
          id: "link4",
          srcNodeId: "site2_ne1",
          dstNodeId: "site1_ne1",
          uiType: "link",
          uiColor: "#4ab610",
          uiWeight: 3,
          uiOpacity: 1,
          uiDashArray: "5, 10",
          uiTips: "link2",
          bw: 3,
          uiDirection: 2
        });
        arrLinks.push({
          id: "link5",
          srcNodeId: "site2_ne2",
          dstNodeId: "site1_ne2",
          uiType: "link",
          uiColor: "#4ab610",
          uiWeight: 3,
          uiOpacity: 1,
          uiDashArray: "5, 10",
          uiTips: "link2",
          bw: 3,
          uiDirection: 2
        });

        //endregion

        //endregion
        oAfterCallback({
          nodes: arrNodes,
          nodeGroups: arrNodeGroups,
          links: arrLinks
        });
      },
      onNodeClick: function (e) {
        var self = this;
        var oNode = e.target.buObj;
//        this.getNodeInfo(oNode, function (oNodeInfo) {
//          self.$refs.gisTopoPanel.updateRightAreaData("node", oNodeInfo);
//        });
      },
      getNodeInfo: function (oNode, oAfterCallback) {
        if (this.debug) {
          var oNodeInfo = {
            rows: []
          };
          oNodeInfo.rows.push([{
            value: oNode.name,
            type: "text"
          }, {
            value: "9500",
            type: "text"
          }]);
          oAfterCallback(oNodeInfo);
        }
        else {
          //TODO
        }
      },
      onNodeGroupClick: function (e) {
        var self = this;
        var oSite = e.target.buObj;
//        this.getSiteInfo(oSite, function (oSiteInfo) {
//          self.$refs.gisTopoPanel.updateRightAreaData("site", oSiteInfo);
//        });
      },
      getSiteInfo: function (oSite, oAfterCallback) {
        if (this.debug) {
          var oSiteInfo = {};
          oSiteInfo.siteName = oSite.name;
          oAfterCallback(oSiteInfo);
        }
        else {
          //TODO:
        }
      },
      onLinkClick: function (e) {
        var self = this;
        var oLink = e.target.buObj;
//        this.getLinkInfo(oLink, function (oLinkInfo) {
//          self.$refs.gisTopoPanel.updateRightAreaData("link", oLinkInfo);
//        });
      },
      getLinkInfo: function (oLink, oAfterCallback) {
        if (this.debug) {
          var oLinkInfo = {
            rows: []
          };
          oLinkInfo.rows.push([{
            value: "ne5000",
            type: "text"
          }, {
            value: "ne5001",
            type: "text"
          }, {
            value: "20%",
            type: "text"
          }, {
            value: "SMT1",
            type: "text"
          }]);
          oAfterCallback(oLinkInfo);
        }
        else {
          //TODO:
        }
      },
      //endregion
      //region leftArea
      _initSiteData4Filter: function () {
        var self = this;
        if (this.debug) {
          this._getSiteDataMock(function (oSiteTypeItems) {
            self.$refs.gisTopoPanel.setSiteData(oSiteTypeItems);
          });
        }
        else {
          //TODO:
        }
      },
      _getSiteDataMock: function (oAfterCallback) {
        var oSiteTypeItems = [];
        oSiteTypeItems.push({
          label: "核心站点",
          ref: "site1"
        });
        oSiteTypeItems.push({
          label: "汇聚站点",
          ref: "site2"
        });
        oSiteTypeItems.push({
          label: "接入站点",
          ref: "site3"
        });
        oAfterCallback(oSiteTypeItems);
      },
      _initNodeData4Filter: function () {
        var self = this;
        if (this.debug) {
          this._getNodeDataMock(function (oData4NodeType) {
            self.$refs.gisTopoPanel.setNodeData(oData4NodeType);
          });
        }
        else {
          //TODO:
        }
      },
      _getNodeDataMock: function (oAfterCallback) {
        var oNodeData = [];
        oNodeData.push({
          ref: "nodeType1",
          label: "ne5000"
        });
        oNodeData.push({
          ref: "nodeType2",
          label: "ne9500"
        });
        oNodeData.push({
          ref: "nodeType3",
          label: "cx600"
        });
        oAfterCallback(oNodeData);
      },
      _initLinkData4Filter: function(){
        //TODO
      },
      _initSubnetData4Filter: function(){
        var self = this;
        this._getSubnetData(function(oSubnetData){
          self.$refs.gisTopoPanel.setSubnetData(oSubnetData);
        });
      },
      _getSubnetData: function(oAfterCallback){
        if(this.debug){
          var oSubnetData = {
            rows4Subnet:[]
          };
          for(var i = 0; i < 10; i++){
            var oRow = [];
            oRow.push({
              value: "",
              type: "text"
            });
            oRow.push({
              value: "subnet" + i,
              type: "text"
            });
            oSubnetData.rows4Subnet.push(oRow);
          }
          oAfterCallback(oSubnetData);
        }
        else{
          //TODO
        }
      },
      onChange4Site: function (strOldVal, strNewVal, oItem) {
        var oTopoData = this.$refs.gisTopoPanel.getTopoData();
        var oTargetSites = oTopoData.nodeGroups.filter(function(oNodeGroup, index){
         return oNodeGroup.siteType === oItem.label;
        });
        var iOpacity = 1.0;
        if(strNewVal === false){
          iOpacity = 0.5;
        }
        var self = this;
        oTargetSites.forEach(function(oSite, index){
          self.$refs.gisTopoPanel.setOpacity4Group(oSite.id, iOpacity);
        });
      },
      onChange4Node: function (strOldVal, strNewVal, oItem) {
        var oTopoData = this.$refs.gisTopoPanel.getTopoData();
        var oTargetNodes = oTopoData.nodes.filter(function(oNode, index){
          return oNode.deviceType === oItem.label;
        });
        oTopoData.nodeGroups.forEach(function(oNodeGroup, index){
          oNodeGroup.children.forEach(function(oChilNode, index){
            if(oChilNode.deviceType === oItem.label){
              oTargetNodes.push(oChilNode);
            }
          });
        });
        var iOpacity = 1.0;
        if(strNewVal === false){
          iOpacity = 0.5;
        }
        var self = this;
        oTargetNodes.forEach(function(oNode, index){
          self.$refs.gisTopoPanel.setOpacity4Marker(oNode.id, iOpacity);
        });
      },
      onChange4Link: function(strOldVal, strNewVal, oItem){
        var oTopoData = this.$refs.gisTopoPanel.getTopoData();
        var oTargetLinks = oTopoData.links.filter(function(oLink, index){
            return oLink.uiColor === oItem.color;
        });
        var iOpacity = 1.0;
        if(strNewVal === false){
          iOpacity = 0.4;
        }
        var self = this;
        oTargetLinks.forEach(function(oLink, index){
          self.$refs.gisTopoPanel.setOpacity4Link(oLink.id, iOpacity);
        });
      },
      linkBwThresholdChange: function(iThreshold1, iThreshold2){
        this.linkFilterOptions.threshold1 = iThreshold1;
        this.linkFilterOptions.threshold2 = iThreshold2;
        this._updateLinkColor();
      },
      _updateLinkColor: function(){
        //更新链路的颜色
        var oTopoData = this.$refs.gisTopoPanel.getTopoData();
        var self = this;
        oTopoData.links.forEach(function(oLink, index){
          var oBw = oLink.bw;
          var oColor;
          if(oBw >= self.linkFilterOptions.threshold1){
            oColor = self.linkFilterOptions.filter[0].color;
          }
          else if(oBw < self.linkFilterOptions.threshold1 && oBw > self.linkFilterOptions.threshold2){
            oColor = self.linkFilterOptions.filter[1].color;
          }
          else {
            oColor = self.linkFilterOptions.filter[2].color;
          }
          self.$refs.gisTopoPanel.setColor4Link(oLink.id, oColor);
        });
      },
      onClickRow4Subnet: function(oRow){
        if(this.debug){
          if(oRow[1].value == "subnet0"){
            if(this.polygon1 == undefined){
              this.polygon1 = 1;
            }
            if(this.polygon1 == 1){
              this.$refs.gisTopoPanel.addPolygon("polygon1", [
                [51.51098606917176, -0.12084960937500001],
                [51.493140970308815, -0.12239456176757814],
                [51.495599093467625, -0.09990692138671875],
                [51.50703296721856, -0.08943557739257814],
                [51.51322956905176, -0.10488510131835939],
              ], {
                id: "polygon1",
                points: [
                  [51.51098606917176, -0.12084960937500001],
                  [51.493140970308815, -0.12239456176757814],
                  [51.495599093467625, -0.09990692138671875],
                  [51.50703296721856, -0.08943557739257814],
                  [51.51322956905176, -0.10488510131835939],
                ],
                uiFillColor: "#ffa600",
                uiColor: "#ffffff",
                uiTips: "polygon1"
              });
              this.polygon1 = 0;
            }
            else{
              this.$refs.gisTopoPanel.delPolygon("polygon1");
              this.polygon1 = 1;
            }
          }
          else if(oRow[1].value == "subnet1"){
            if(this.polygon2 == undefined){
              this.polygon2 = 1;
            }
            if(this.polygon2 == 1){
              this.$refs.gisTopoPanel.addPolygon("polygon2", [
                [51.48940009377448, -0.11621475219726564],
                [51.50489601254001, -0.10557174682617189],
                [51.50735350177636, -0.08600234985351564],
                [51.50115610069437, -0.07089614868164064],
                [51.488865657782796, -0.08068084716796876],
                [51.48501753370923, -0.10007858276367189]
              ], {
                id: "polygon2",
                points: [
                  [51.48940009377448, -0.11621475219726564],
                  [51.50489601254001, -0.10557174682617189],
                  [51.50735350177636, -0.08600234985351564],
                  [51.50115610069437, -0.07089614868164064],
                  [51.488865657782796, -0.08068084716796876],
                  [51.48501753370923, -0.10007858276367189]
                ],
                uiFillColor: "#ffa600",
                uiColor: "#ffffff",
                uiTips: "polygon2"
              });
              this.polygon2 = 0;
            }
            else{
              this.$refs.gisTopoPanel.delPolygon("polygon2");
              this.polygon2 = 1;
            }
          }
        }
        else{
          //TODO
        }
      },
      //endregion
      //region bottomArea
      onClickRow4Ne: function (oRow) {
        console.log(oRow[1].value);
      },
      onClickRow4Fiber: function (oRow) {
        console.log(oRow[1].value);
      },
      onGridRowIconClick4Fiber: function (oRow, oCell) {
        console.log(oCell);
      },
      onGridRowIconClick4Cross: function (oRow, oCell) {
        console.log(oCell);
      },
      _getData4PhyGridPanelNe: function(){
        var oRows4Ne = [];

        if(this.debug){
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
        else{
          //TODO:
        }

        this.$refs.gisTopoPanel.setData4PhyGridPanelNe(oRows4Ne);
      },
      _getData4PhyGridPanelBoard: function () {
        var oRows4Board = [];

        if(this.debug){
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
        else{
          //TODO:
        }

        this.$refs.gisTopoPanel.setData4PhyGridPanelBoard(oRows4Board);
      },
      _getData4PhyGridPanelFiber: function () {
        var oRows4Fiber = [];

        if(this.debug){
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
        else{
          //TODO
        }

        this.$refs.gisTopoPanel.setData4PhyGridPanelFiber(oRows4Fiber);
      },
      _getData4PhyGridPanelCross: function () {
        var oRows4Cross = [];

        if(this.debug){
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
        else{
          //TODO:
        }

        this.$refs.gisTopoPanel.setData4PhyGridPanelCross(oRows4Cross);
      },
      _getData4PhyGridPanelSubnet: function () {
        var oRows4SubNet = [];

        if(this.debug){
          for (var i = 0; i < 100; i++) {
            var oRow = [{
              value: i+1,
              type: "text"
            },{
              value: "复用段线性保护1:N_1",
              type: "text"
            },{
              value: "复用段线性保护1:N",
              type: "text"
            },{
              value: "STM16",
              type: "text"
            }];

            oRows4SubNet.push(oRow);
          }
        }
        else{
          //TODO:
        }

        this.$refs.gisTopoPanel.setData4PhyGridPanelSubnet(oRows4SubNet);
      },
      _getData4PhyGridPanelSite: function () {
        var oRows4Site = [];

        if(this.debug){
          for (var i = 0; i < 100; i++) {
            var oRow = [{
              value: i+1,
              type: "text"
            },{
              value: "nodeGroup0",
              type: "text"
            },{
              value: "100.0",
              type: "text"
            },{
              value: "20.0",
              type: "text"
            },{
              value: "nodeBase0,nodeBase1",
              type: "text"
            },{
              value: "SDH",
              type: "text"
            },{
              value: "未知",
              type: "text"
            },{
              value: "-",
              type: "text"
            },{
              value: [{
                value: "icon-pencil"
              }],
              type: "icon"
            }];

            oRows4Site.push(oRow);
          }
        }
        else{
          //TODO:
        }

        this.$refs.gisTopoPanel.setData4PhyGridPanelSite(oRows4Site);
      },
      //endregion
      //endregion

      //region callback

      //endregion

      //region 3rd

      //endregion
    }
  }
</script>

<style scoped>

</style>
