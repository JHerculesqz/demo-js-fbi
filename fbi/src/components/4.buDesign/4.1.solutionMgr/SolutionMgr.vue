<template>
  <div class="solutionMgrWrapper">
    <div class="topArea">
      <div class="topLeftArea">
        <div class="icon icon-marvelIcon-52"></div>
        <div class="details">
          <div class="en">Network Design</div>
          <div class="zn">网络设计</div>
          <div class="znDetails">用于进行网络割接方案设计，点击右侧新建按钮，进行方案创建</div>
        </div>
      </div>
      <div class="topRightArea">
        <marvel-icon-txt-button classCustom="classCustom1" label="新建方案" theme="dark"
                                icon="icon-marvelIcon-31"
                                v-on:onClick="onClickCreateSolution"></marvel-icon-txt-button>
        <create-solution v-bind:showDialog="showDialog"
                         v-on:onClickDialogClose="onClickCreateSolutionClose"
                         v-on:onClickOk="onClickCreateSolutionOK"
                         v-on:onClickCancel="onClickCreateSolutionCancel"></create-solution>
      </div>
    </div>
    <div class="downArea">
      <div class="downLeftArea">
        <marvel-accordion3 :items="items" title="割接方案列表"
                           v-on:onClickItem="onClickSolutionItem"></marvel-accordion3>
      </div>
      <div class="downRightArea" v-bind:class="{empty: !showSummaryPanel}">
        <solution-summary ref="ref4SolutionSummary"
                          v-bind:showSummaryPanel="showSummaryPanel"
                          v-on:onClickDel="onClickDelSolution"></solution-summary>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelAccordion3 from "@/walle/widget/accordion/MarvelAccordion3";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import CreateSolution from "@/components/4.buDesign/4.1.solutionMgr/CreateSolution.vue";
  import SolutionSummary from "@/components/4.buDesign/4.1.solutionMgr/SolutionSummary.vue";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelAccordion3,
      SolutionSummary,
      CreateSolution,
    },
    name: 'SolutionMgr',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region createSolution
        showDialog: false,
        //#endregion
        //#region solutions
        items: [],
        //#endregion
        //#region summary
        showSummaryPanel: false
        //#endregion
      }
    },
    mounted: function () {
      var self = this;

      this._getSolutions(function () {
        if (self.items.length) {
          var arrItems = self.items.filter(function (oItem, index) {
            return oItem.active == true;
          });
          self.showSummaryPanel = true;
          self.$refs.ref4SolutionSummary.setData(arrItems[0]);
        }
      });
    },
    methods: {
      //#region inner
      _getSolutions: function (oAfterCallBack) {
        this.items = [];

        if (this.debug) {
          var lstNe = [];
          for(var i=0;i<8;i++){
            var oRow = [];
            oRow.push({
              value: "VLD_Optix3500-" + i,
              type: "text"
            });
            lstNe.push(oRow);
          }
          this.items.push({
            active: true,
            label: "墨西哥CT环1-环插",
            solutionName: '墨西哥CT环1-环插',
            solutionUserName: '近平',
            solutionType: '节点式环插',
            solutionDescription: '墨西哥CT环1-搬迁环1时需要的华为设备，完成插入设备动作',
            rows4SelectNodes: lstNe
          });
          this.items.push({
            active: false,
            label: "墨西哥CT环1-业务割接",
            solutionName: '墨西哥CT环1-业务割接',
            solutionUserName: '克强',
            solutionType: '节点式环插',
            solutionDescription: '墨西哥CT环1-完成搬迁环1时需要搬迁环1涉及的业务',
            rows4SelectNodes: lstNe
          });
          this.items.push({
            active: false,
            label: "墨西哥CT链3-环插",
            solutionName: '墨西哥CT链3-环插',
            solutionUserName: '克强',
            solutionType: '节点式环插',
            solutionDescription: '墨西哥CT链3-搬迁链3时需要的华为设备，完成插入设备动作',
            rows4SelectNodes: lstNe
          });
          this.items.push({
            active: false,
            label: "墨西哥CT链3-业务割接",
            solutionName: '墨西哥CT链3-业务割接',
            solutionUserName: '近平',
            solutionType: '节点式环插',
            solutionDescription: '墨西哥CT链3-完成搬迁链3时需要搬迁环1涉及的业务',
            rows4SelectNodes: lstNe
          });
        }
        else{
          //TODO:
        }

        oAfterCallBack();
      },
      onClickCreateSolution: function () {
        this.showDialog = true;
      },
      onClickCreateSolutionClose: function () {
        this.showDialog = false;
      },
      onClickCreateSolutionOK: function (solutionName, solutionUserName, solutionType,
                                         solutionDescription, rows4SelectNodes) {
        this.items.forEach(function (oItem, index) {
          oItem.active = false;
        });
        var oItem = {
          active: true,
          label: solutionName,
          solutionName,
          solutionUserName,
          solutionType,
          solutionDescription,
          rows4SelectNodes
        };
        this.items.push(oItem);
        this.showDialog = false;
        this.showSummaryPanel = true;
        this.$refs.ref4SolutionSummary.setData(oItem);
      },
      onClickCreateSolutionCancel: function () {
        this.showDialog = false;
      },
      onClickSolutionItem: function (oItem) {
        this.$refs.ref4SolutionSummary.setData(oItem);
      },
      onClickDelSolution: function (strSolutionName) {
        var index = -1;
        for (var i = 0, len = this.items.length; i < len; i++) {
          if (this.items[i].solutionName == strSolutionName) {
            index = i;
            break;
          }
        }
        if (index > -1) {
          this.items.splice(index, 1);
        }
        if (this.items.length < 1) {
          this.showSummaryPanel = false;
        }
        else {
          this.items[0].active = true;
          this.$refs.ref4SolutionSummary.setData(this.items[0]);
        }
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
  .solutionMgrWrapper {
    width: 100%;
    height: 100%;
  }

  .topArea {
    height: 138px;
    width: 100%;
    background-color: #080925;
    padding: 0 20px;
    box-sizing: border-box;
    clear: both;
  }

  .topLeftArea {
    height: 100%;
    float: left;
    overflow: hidden;
  }

  .icon {
    float: left;
    height: 100%;
    line-height: 110px;
    font-size: 70px;
    color: #3dcca6;
    margin-right: 20px;
  }

  .details {
    float: left;
    height: 100%;
    padding: 20px 0;
    box-sizing: border-box;
  }

  .details .en {
    line-height: 18px;
    font-size: 14px;
    color: #8b90b3;
  }

  .details .zn {
    line-height: 32px;
    font-size: 18px;
    color: #3dcca6;
  }

  .details .znDetails {
    line-height: 18px;
    font-size: 14px;
    color: #3dcca6;
  }

  .topRightArea {
    height: 100%;
    float: right;
    padding-top: 53px;
    box-sizing: border-box;
  }

  .downArea {
    height: calc(100% - 138px);
    clear: both;
  }

  .downLeftArea {
    width: 200px;
    height: 100%;
    float: left;
    padding-top: 5px;
  }

  .downRightArea {
    float: left;
    height: calc(100% + 30px);
    width: calc(100% - 220px);
    padding: 0 20px;
    background-color: #282746;
    box-sizing: border-box;
    position: relative;
    top: -30px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .empty {
    background-image: url("../../../../static/walle/emptyTip1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10%;
    position: relative;
  }

  .empty:after {
    content: "暂无数据，请新建割接方案";
    position: absolute;
    top: 50%;
    margin-top: 90px;
    left: 50%;
    margin-left: -96px;
    color: #cccccc;
  }
</style>
