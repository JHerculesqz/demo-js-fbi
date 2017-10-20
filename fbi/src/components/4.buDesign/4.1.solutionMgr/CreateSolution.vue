<template>
  <marvel-dialog theme="dark" :showDialog="showDialog"
                 title="新建割接方案" width="850" height="650"
                 v-on:onClickDialogClose="onClickDialogClose">
    <div slot="dialogCont" class="dialogContArea">
      <div class="session">
        <div class="sessionName">方案名称:</div>
        <div class="sessionCont">
          <marvel-input ref="ref4SolutionName" placeHolder="请输入方案名称..."
                        errMsg="输入错误..." theme="dark" size=""></marvel-input>
        </div>
      </div>
      <div class="session">
        <div class="sessionName">方案责任人:</div>
        <div class="sessionCont">
          <div class="firstDrop">
            <marvel-drop-down-button ref="ref4UserName" width="100%"></marvel-drop-down-button>
          </div>
        </div>
      </div>
      <div class="session">
        <div class="sessionName">方案类型:</div>
        <div class="sessionCont">
          <div class="secondDrop">
            <marvel-drop-down-button ref="ref4SolutionType" width="100%"></marvel-drop-down-button>
          </div>
        </div>
      </div>
      <div  class="session2">
        <div class="sessionName2">描述:</div>
        <div class="describeArea">
          <marvel-multi-input ref="ref4Description" placeHolder="请输入描述信息..."
                              theme="dark" size="">
          </marvel-multi-input>
        </div>
      </div>
      <div class="session2">
        <div class="sessionName2">方案范围:</div>
        <div class="neSelectArea">
          <div class="neSelectLeft">
            <marvel-grid :titles="titles4Nodes"
                         :rows="rows4Nodes"
                         :limit="limit4Nodes"
                         theme="dark"></marvel-grid>
          </div>
          <div class="neSelectCenter">
            <div class="selectBtn icon-marvelIcon-06" v-on:click="onClickAddNode"></div>
            <div class="selectBtn icon-marvelIcon-08" v-on:click="onClickDelNode"></div>
          </div>
          <div class="neSelectRight">
            <marvel-grid :titles="titles4SelectNodes"
                         :rows="rows4SelectNodes"
                         :limit="limit4SelectNodes"
                         theme="dark"></marvel-grid>
          </div>
        </div>
      </div>
    </div>
    <div slot="dialogFoot">
      <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                              label="确定"
                              icon="icon-upload"
                              theme="dark"
                              v-on:onClick="onClickOk"></marvel-icon-txt-button>
      <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                              label="取消"
                              icon="icon-cancel-circle"
                              theme="dark"
                              v-on:onClick="onClickCancel"></marvel-icon-txt-button>
    </div>
  </marvel-dialog>
</template>

<script>
  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelMultiInput from "@/walle/widget/input/MarvelMultiInput";
  import MarvelDropDownButton from "@/walle/widget/button/MarvelDropDownButton";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelDropDownButton,
      MarvelMultiInput,
      MarvelInput,
      MarvelGrid,
      MarvelPrimaryButton,
      MarvelDialog
    },
    name: "CreateSolution",
    props: ["showDialog"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region createSolution
        solutionName: '',
        solutionUserName: '',
        solutionType: '',
        solutionDescription: '',
        //#endregion
        //#region Nodes
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
        //#region selectNodes
        titles4SelectNodes: [{
          label: "",
          width: "10%"
        }, {
          label: "网元名称",
          width: "90%"
        }],
        skip4SelectNodes: 0,
        limit4SelectNodes: 20,
        rows4SelectNodes: [],
        //#endregion
      };
    },
    mounted: function () {
      var self = this;

      this._getUserNames(function (arrUserNames, strSelectLabel) {
        self.$refs.ref4UserName.init(arrUserNames, strSelectLabel);
      });
      this._getNodes();
      this._initSolutionType();
    },
    methods: {
      //#region inner
      //#region mounted
      _getUserNames: function (oAfterCallBack) {
        var arrUserNames = [];
        arrUserNames.push({
          label: "习主席",
          icon: "icon-user"
        });
        arrUserNames.push({
          label: "李克强总理",
          icon: "icon-user"
        });
        oAfterCallBack(arrUserNames, arrUserNames[0].label);
      },
      _getNodes: function () {
        this.rows4Nodes = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          var oCell1 = {
            value: "",
            type: "text"
          };
          var oCell2 = {
            value: "VLD_Optix3500-" + i,//Math.random() * 100
            type: "text"
          };
          oRow.push(oCell1);
          oRow.push(oCell2);
          this.rows4Nodes.push(oRow);
        }
      },
      _initSolutionType: function () {
        var arrSolutionType = [];
        arrSolutionType.push({
          label: '单站',
          icon: 'icon-marvelIcon-47'
        });
        arrSolutionType.push({
          label: '节点式环插',
          icon: 'icon-marvelIcon-47'
        });
        arrSolutionType.push({
          label: '链路式环插',
          icon: 'icon-marvelIcon-47'
        });
        arrSolutionType.push({
          label: '端到端搬迁',
          icon: 'icon-marvelIcon-47'
        });
        this.$refs.ref4SolutionType.init(arrSolutionType, arrSolutionType[0].label);
      },
      //#endregion
      //#region dialog
      onClickAddNode: function () {
        if (this.debug) {
          var oRow = [];
          var oCell1 = {
            value: "",
            type: "text"
          };
          var oCell2 = {
            value: "VLD_Optix3500-1",
            type: "text"
          };
          oRow.push(oCell1);
          oRow.push(oCell2);
          this.rows4SelectNodes.push(oRow);
        }
        else {
          //TODO:
        }
      },
      onClickDelNode: function () {
        if (this.debug) {
          if (this.rows4SelectNodes.length) {
            this.rows4SelectNodes.splice(0, 1);
          }
        }
        else {
          //TODO:
        }
      },
      //#endregion
      //#endregion
      //#region callback
      onClickOk: function () {
        this.solutionName = this.$refs.ref4SolutionName.getInputMsg();
        this.solutionUserName = this.$refs.ref4UserName.getSelectItem();
        this.solutionType = this.$refs.ref4SolutionType.getSelectItem();
        this.solutionDescription = this.$refs.ref4Description.getInputMsg();
        var arrNodes = [];
        this.rows4SelectNodes.forEach(function(oRow, index){
          arrNodes.push([oRow[1]]);
        });
        this.$emit("onClickOk", this.solutionName, this.solutionUserName, this.solutionType,
          this.solutionDescription, arrNodes);
      },
      onClickDialogClose: function () {
        this.$emit("onClickDialogClose");
      },
      onClickCancel: function () {
        this.$emit("onClickCancel");
      },
      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
.dialogContArea{
  width:100%;
  height:100%;
  padding-top: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
  .session{
    margin-bottom: 20px;
    height: 32px;
    font-size: 14px;
    overflow: visible;
    width: 50%;
    float: left;
  }
  .sessionCont{
    float: left;
    height:100%;
    width: 240px;
    max-width: calc(100% - 100px);
    position: relative;
    overflow: visible;
  }
  .firstDrop{
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 2;
  }
  .secondDrop{
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 1;
  }
  .session2{
    margin-bottom: 20px;
    clear: both;
    font-size: 14px;
    overflow: visible;
  }
  .session2:last-child{
    margin-bottom: 0;
  }
  .sessionName{
    height:32px;
    line-height: 32px;
    float: left;
    color: #FFFFFF;
    width: 100px;
  }
  .sessionName2{
    height:14px;
    line-height: 14px;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  .neSelectArea{
    height:240px;
  }
  .neSelectLeft{
    float: left;
    width:45%;
    height: 100%;
  }
  .neSelectCenter{
    float: left;
    width:10%;
    height: 100%;
    padding: 50px 0;
    box-sizing: border-box;
  }
  .selectBtn{
    width: 30px;
    height:30px;
    border-radius: 100%;
    background-color: #36365b;
    margin: 20px auto;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8b90b3;
    cursor: pointer;
  }
  .selectBtn:hover{
    color: #ffffff;
  }
  .neSelectRight{
    float: left;
    width:45%;
    height: 100%;
  }
  .describeArea{
    height:60px;
  }
</style>
