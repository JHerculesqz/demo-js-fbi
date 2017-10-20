<template>
  <div class="importExFileMgrWrapper">
    <div class="title">
      <div class="titleArea">
        <div class="titleIcon icon-upload"></div>
        <div class="titleName">文件列表</div>
        <div class="loadingArea">
          <marvel-loading-mini ref="refMiniLoading" theme="dark"></marvel-loading-mini>
        </div>
      </div>
      <div class="operationArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="上传"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClick4UploadShow"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="下载模板"
                                icon="icon-download"
                                theme="dark"
                                v-on:onClick="onClick4Download"></marvel-icon-txt-button>
        <marvel-dialog theme="dark" :showDialog="showDialog"
                       title="数据上传" width="500" height="300"
                       v-on:onClickDialogClose="onClickDialogClose">
          <div slot="dialogCont">
            <div class="fileSelectArea">
              <marvel-upload ref="ref4Upload"
                             theme="dark"
                             placeHolder="Please choose a file"
                             v-on:onSelectFileBtnClick="onSelectFileBtnClick"></marvel-upload>
            </div>
            <div>
              <marvel-multi-input ref="ref4Remark" :status="status4Remark"
                                  placeHolder="请输入备注信息..."
                                  height="100"
                                  :inputMsg="inputMsg4Remark" theme="dark">
              </marvel-multi-input>
            </div>
          </div>
          <div slot="dialogFoot">
            <div v-show="showOverride">该文件已存在,点击"上传"将覆盖原来文件</div>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="上传"
                                    icon="icon-upload"
                                    theme="dark"
                                    v-on:onClick="onClick4UploadOK"></marvel-icon-txt-button>
            <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                    label="取消"
                                    icon="icon-cancel-circle"
                                    theme="dark"
                                    v-on:onClick="onClick4UploadCancel"></marvel-icon-txt-button>
          </div>
        </marvel-dialog>
      </div>
    </div>
    <div class="gridArea">
      <marvel-grid
        :titles="titles4FileMgr"
        :rows="rows4FileMgr"
        :limit="limit4FileMgr"
        theme="dark"
        v-on:onIconClick="onGridRowIconClick"></marvel-grid>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog";
  import MarvelLoadingMini from "@/walle/widget/loading/MarvelLoadingMini";
  import MarvelUpload from "@/walle/widget/upload/MarvelUpload";
  import MarvelMultiInput from "@/walle/widget/input/MarvelMultiInput";

  export default {
    components: {
      MarvelMultiInput,
      MarvelUpload,
      MarvelLoadingMini,
      MarvelDialog,
      MarvelIconTxtButton,
      MarvelGrid,
      MarvelFrame
    },
    name: 'ImportExFileMgr',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region fileGrid
        titles4FileMgr: [{
          label: "序号",
          width: "5%"
        }, {
          label: "文件名",
          width: "15%"
        }, {
          label: "文件类型",
          width: "8%"
        }, {
          label: "上传人",
          width: "8%"
        }, {
          label: "上传时间",
          width: "15%"
        }, {
          label: "解析状态",
          width: "8%"
        }, {
          label: "解析时间",
          width: "15%"
        }, {
          label: "备注",
          width: "17%"
        }, {
          label: "操作",
          width: "8%"
        }],
        skip4FileMgr: 0,
        limit4FileMgr: 20,
        rows4FileMgr: [],
        //#endregion
        //#region upload dialog
        showDialog: false,
        showOverride: false,
        file: undefined,
        status4Remark: "",
        inputMsg4Remark: "",
        //#endregion
      }
    },
    mounted: function () {
      this._getFileList();
    },
    destroyed: function () {

    },
    methods: {
      //#region inner
      //#region upload
      onClick4UploadShow: function () {
        this.showDialog = true;
        this.file = undefined;
        this.inputMsg4Remark = "";
      },
      onClick4UploadOK: function () {
        var self = this;

        //1._updateMem4UploadStart
        this._updateMem4UploadStart();
        //2.更新进度条
        this._updateLoadingBar4UploadStart(function () {
          //3.更新文件列表
          self._getFileList();
        });
      },
      _updateMem4UploadStart: function () {
        this.showOverride = false;
        this.showDialog = false;
        this.file = this.$refs.ref4Upload.getFile();
        this.inputMsg4Remark = this.$refs.ref4Remark.getInputMsg();
      },
      _updateLoadingBar4UploadStart: function (oCallback) {
        var self = this;

        if (this.debug) {
          self.$refs.refMiniLoading.showEx("取消");
          self.$refs.refMiniLoading.setProgress(10, "上传ing");
          setTimeout(function () {
            self.$refs.refMiniLoading.setProgress(30, "上传ing");
            setTimeout(function () {
              self.$refs.refMiniLoading.setProgress(60, "上传ing");
              setTimeout(function () {
                self.$refs.refMiniLoading.setProgress(100, "完成");
                self.$refs.refMiniLoading.hideEx();
                oCallback();
              }, 1000);
            }, 1000);
          }, 1000);
        }
        else {
          //TODO:
        }
      },
      _getFileList: function () {
        this.rows4FileMgr = [];

        if (this.debug) {
          for (var i = 1; i < 10; i++) {
            var oRowDefault = [{
              value: i,
              type: "text"
            }, {
              value: "ALU" + i + ".zip",
              type: "text"
            }, {
              value: "ZIP",
              type: "text"
            }, {
              value: "s00290253",
              type: "text"
            }, {
              value: "2017-08-31 09:53:42",
              type: "text"
            }, {
              value: "已解析",
              type: "text"
            }, {
              value: "2017-08-31 09:57:42",
              type: "text"
            }, {
              value: " ",
              type: "text"
            }, {
              value: [{
                value: "icon-bin"
              }, {
                value: "icon-download"
              }],
              type: "icon"
            }];
            this.rows4FileMgr.push(oRowDefault);
          }
        }
        else {
          //TODO:
        }
      },
      onClick4UploadCancel: function () {
        this._updateMem4UploadCancel();
      },
      onClickDialogClose: function () {
        this._updateMem4UploadCancel();
      },
      _updateMem4UploadCancel: function () {
        this.showOverride = false;
        this.showDialog = false;
        this.file = undefined;
        this.inputMsg4Remark = "";
      },
      onGridRowIconClick: function (oRow, oCell) {
        if (this.debug) {
          if (oCell.value == "icon-bin") {
            alert("icon-bin");
          }
          else {
            alert("icon-download");
          }
        }
        else {
          //TODO:
        }
      },
      onSelectFileBtnClick: function (oFile) {
        for (var i = 0; i < this.rows4FileMgr.length; i++) {
          if (oFile.name == this.rows4FileMgr[i][1].value) {
            this.showOverride = true;
            break;
          }
        }
      },
      //#endregion
      //#region download
      onClick4Download: function () {
        if (this.debug) {
          alert("下载成功...");
        }
        else {
          //TODO:
        }
      }
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
  .importExFileMgrWrapper {
    width: 100%;
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

  .fileSelectArea {
    margin-bottom: 20px;
  }

  .gridArea {
    height: calc(100% - 62px);
  }
</style>
