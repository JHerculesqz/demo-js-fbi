<template>
  <div class="importExResultWrapper">
    <div class="title">
      <div class="titleArea">
        <div class="titleIcon icon-upload"></div>
        <div class="titleName">脚本解析</div>
        <div class="loadingArea">
          <marvel-loading-mini ref="refMiniLoading" theme="dark"></marvel-loading-mini>
        </div>
      </div>
      <div class="operationArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="解析"
                                icon="icon-rocket"
                                theme="dark"
                                v-on:onClick="onClick4ParseShow"
                                ref="refIconTxtButton4Parse"></marvel-icon-txt-button>
        <marvel-dialog theme="dark" :showDialog="showDialog"
                       title="脚本解析" width="600" height="400"
                       v-on:onClickDialogClose="onClickDialogClose">
          <div class="dialogContent" slot="dialogCont">
            <marvel-grid :titles="titles4FileMgr" :rows="rows4FileMgr"
                         :limit="limit4FileMgr"
                         theme="dark"></marvel-grid>
          </div>
          <div slot="dialogFoot">
            <marvel-icon-txt-button ref="refParseOK"
                                    size="normal" classCustom="classCustom1"
                                    label="解析"
                                    icon="icon-rocket"
                                    theme="dark"
                                    v-on:onClick="onClick4ParseOK"></marvel-icon-txt-button>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="取消"
                                    icon="icon-cancel-circle"
                                    theme="dark"
                                    v-on:onClick="onClick4ParseCancel"></marvel-icon-txt-button>
          </div>
        </marvel-dialog>
      </div>
    </div>
    <div class="tabArea">
      <phy-grid-panel ref="ref4PhyGridPanel"></phy-grid-panel>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelLoadingMini from "@/walle/widget/loading/MarvelLoadingMini";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog";
  import PhyGridPanel from "@/components/0.common/0.1.phyGridPanel/PhyGridPanel";

  export default {
    components: {
      MarvelDialog,
      MarvelIconTxtButton,
      MarvelLoadingMini,
      MarvelGrid,
      MarvelFrame,
      PhyGridPanel,
    },
    name: 'ImportExParseInput',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region parse
        showDialog: false,
        titles4FileMgr: [{
          label: "",
          width: "8%"
        }, {
          label: "文件名",
          width: "32%"
        }, {
          label: "文件类型",
          width: "30%"
        }, {
          label: "时隙模式",
          width: "30%"
        }],
        skip4FileMgr: 0,
        limit4FileMgr: 20,
        rows4FileMgr: []
        //#endregion
      }
    },
    mounted: function () {

    },
    destroyed: function () {

    },
    methods: {
      //#region inner
      //#region mounted
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

        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelNe(oRows4Ne);
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

        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelBoard(oRows4Board);
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

        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelFiber(oRows4Fiber);
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

        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelCross(oRows4Cross);
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

        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelSubnet(oRows4SubNet);
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

        this.$refs.ref4PhyGridPanel.setData4PhyGridPanelSite(oRows4Site);
      },
      //#endregion
      //#region dialog
      onClick4ParseShow: function () {
        this.showDialog = true;
        this.$refs.refParseOK.setBtnDisable(false);
        this._getFileLst(function () {

        });
      },
      _getFileLst: function (oCallback) {
        this.rows4FileMgr = [];

        if (this.debug) {
          for(var i=1;i<10;i++){
            var oRow = [{
              value: i,
              type: "text"
            }, {
              value: "ALU"+i+".zip",
              type: "text"
            }, {
              value: "ALU",
              type: "text"
            }, {
              value: "朗讯模式",
              type: "text"
            }];

            this.rows4FileMgr.push(oRow);
          }
        }
        else {
          //TODO:
        }

        oCallback();
      },
      onClick4ParseOK: function () {
        this._updateMem4DialogOK();
      },
      onClick4ParseCancel: function () {
        this._updateMem4DialogClose();
      },
      onClickDialogClose: function () {
        this._updateMem4DialogClose();
      },
      _updateMem4DialogOK: function () {
        var self = this;

        //TODO:1.获取文件列表选项

        this.showDialog = false;

        this._updateLoadingBar4ParseStart(function () {
          //1.1._getData4PhyGridPanelNe
          self._getData4PhyGridPanelNe();
          //1.2._getData4PhyGridPanelBoard
          self._getData4PhyGridPanelBoard();
          //1.3._getData4PhyGridPanelFiber
          self._getData4PhyGridPanelFiber();
          //1.4._getData4PhyGridPanelCross
          self._getData4PhyGridPanelCross();
          //1.5._getData4PhyGridPanelSubnet
          self._getData4PhyGridPanelSubnet();
          //1.6._getData4PhyGridPanelSite
          self._getData4PhyGridPanelSite();
        });
      },
      _updateMem4DialogClose: function () {
        this.showDialog = false;
      },
      _updateLoadingBar4ParseStart: function (oCallback) {
        var self = this;

        if (this.debug) {
          self.$refs.refMiniLoading.showEx("取消");
          self.$refs.refIconTxtButton4Parse.setBtnDisable(true);
          self.$refs.refMiniLoading.setProgress(10, "解析网元");
          setTimeout(function () {
            self.$refs.refMiniLoading.setProgress(30, "解析单板");
            setTimeout(function () {
              self.$refs.refMiniLoading.setProgress(60, "解析交叉");
              setTimeout(function () {
                self.$refs.refMiniLoading.setProgress(100, "解析完成");
                self.$refs.refMiniLoading.hideEx();
                self.$refs.refIconTxtButton4Parse.setBtnDisable(false);
                oCallback();
              }, 1000);
            }, 1000);
          }, 1000);
        }
        else {
          //TODO:
        }
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
  .importExResultWrapper {
    height: 100%;
  }

  .title {
    height: 62px;
    margin-bottom: 10px;
  }

  .title .titleArea {
    height: 100%;
    float: left;
  }

  .title .titleArea .titleIcon {
    height: 100%;
    float: left;
    line-height: 62px;
    font-size: 34px;
    color: #8b90b3;
    margin-right: 10px;
  }

  .title .titleArea .titleName {
    height: 100%;
    float: left;
    line-height: 62px;
    font-size: 18px;
    color: #fff;
    margin-right: 10px;
  }

  .title .titleArea .loadingArea {
    padding-top: 10px;
    box-sizing: border-box;
    float: left;
    width: 300px;
    height: 100%;
  }

  .title .operationArea {
    height: 100%;
    padding-top: 15px;
    box-sizing: border-box;
    float: right;
  }

  .dialogContent {
    height: 100%;
  }

  .tabArea {
    height: calc(100% - 62px);
  }
</style>
