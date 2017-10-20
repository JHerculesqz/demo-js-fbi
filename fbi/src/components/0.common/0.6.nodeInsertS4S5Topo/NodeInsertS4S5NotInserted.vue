<template>
  <div class="nodeInsertS4NotInsertedWrapper">
    <div class="session">
      <div class="titleArea">
        <div class="titleName">业务表</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="割接"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4InsertTraffic"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportTraffic"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="操作记录"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4OperationLog"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="筛选"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4SearchTraffic"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4Traffic"
                     :rows="rows4Traffic"
                     :limit="limit4Traffic"
                     v-on:onClickRow="onClickRow4Traffic"
                     theme="dark"
                     v-on:onCheck="onCheckTrafficRow"
                     v-on:onUnCheck="onUnCheckTrafficRow"></marvel-grid>
      </div>
    </div>
    <div class="session" v-show="showRoute">
      <div class="titleArea">
        <div class="titleName">路由详情表</div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4Route"
                     :rows="rows4Route"
                     :limit="limit4Route"
                     theme="dark"></marvel-grid>
      </div>
    </div>
    <div class="session" v-if="showRelativePort">
      <div class="titleArea">
        <div class="titleName">关联端口表</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出关联端口组"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportRelativePort"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导入关联端口组"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ImportRelativePort"></marvel-icon-txt-button>
          <marvel-check-box ref="ref4ScriptCheckBox" id="scriptCheckBox"
                            label="生成网管脚本" showLabel="true"></marvel-check-box>
        </div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4RelativePort"
                     :rows="rows4RelativePort"
                     :limit="limit4RelativePort"
                     theme="dark"></marvel-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelCheckBox from "@/walle/widget/select/MarvelCheckBox";

  export default {
    components: {
      MarvelCheckBox,
      MarvelIconTxtButton,
      MarvelGrid
    },
    name: "NodeInsertS4S5NotInserted",
    props: ["showRelativePort"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region Traffic
        titles4Traffic: [{
          label: "",
          width: "5%"
        }, {
          label: "业务名称",
          width: "13%"
        }, {
          label: "速率级别",
          width: "12%"
        }, {
          label: "方向",
          width: "8%"
        }, {
          label: "业务类型",
          width: "13%"
        }, {
          label: "源网元名称",
          width: "10%"
        }, {
          label: "源槽位/单板/端口",
          width: "13%"
        }, {
          label: "源高阶时隙",
          width: "13%"
        }, {
          label: "源低阶时隙",
          width: "13%"
        }, {
          label: "宿网元名称",
          width: "10%"
        }, {
          label: "宿槽位/单板/端口",
          width: "13%"
        }, {
          label: "宿高阶时隙",
          width: "13%"
        }, {
          label: "宿低阶时隙",
          width: "13%"
        }, {
          label: "路径组Id",
          width: "10%"
        }, {
          label: "是否有保护",
          width: "13%"
        }],
        skip4Traffic: 0,
        limit4Traffic: 20,
        rows4Traffic: [],
        //#endregion
        //#region Route
        showRoute: false,
        titles4Route: [{
          label: "",
          width: "5%"
        }, {
          label: "源网元名称",
          width: "13%"
        }, {
          label: "源槽位/单板/端口",
          width: "12%"
        }, {
          label: "源高阶时隙",
          width: "8%"
        }, {
          label: "源低阶时隙",
          width: "13%"
        }, {
          label: "宿网元名称",
          width: "10%"
        }, {
          label: "宿槽位/单板/端口",
          width: "13%"
        }, {
          label: "宿高阶时隙",
          width: "13%"
        }, {
          label: "宿低阶时隙",
          width: "13%"
        }, {
          label: "路由类型",
          width: "10%"
        }, {
          label: "资源类型",
          width: "13%"
        }, {
          label: "跳数",
          width: "13%"
        }, {
          label: "原业务名称",
          width: "13%"
        }],
        skip4Route: 0,
        limit4Route: 20,
        rows4Route: [],
        //#endregion
        //#region RelativePort
        titles4RelativePort: [{
          label: "",
          width: "5%"
        }, {
          label: "原网元名称",
          width: "13%"
        }, {
          label: "原槽位",
          width: "12%"
        }, {
          label: "原单板名称",
          width: "8%"
        }, {
          label: "原端口号",
          width: "13%"
        }, {
          label: "目标网元名称",
          width: "10%"
        }, {
          label: "目标槽位",
          width: "13%"
        }, {
          label: "目标单板名称",
          width: "13%"
        }, {
          label: "目标端口号",
          width: "13%"
        }, {
          label: "查看",
          width: "10%"
        }],
        skip4RelativePort: 0,
        limit4RelativePort: 20,
        rows4RelativePort: [],
        //#endregion
      };
    },
    mounted: function () {

    },
    methods: {
      //#region inner

      //#endregion

      //#region callback
      onClickRow4Traffic: function (oRow) {
        this.showRoute = true;
        this.$emit("onClickRow4Traffic", oRow);
      },
      onClick4CheckAllTraffic: function () {
        //TODO:勾选表格
        this.$emit("onClick4CheckAllTraffic");
      },
      onClick4UnCheckAll: function () {
        //TODO:去勾选表格
        this.$emit("onClick4UnCheckAll");
      },
      onClick4ExportTraffic: function () {
        this.$emit("onClick4ExportTraffic");
      },
      onClick4OperationLog: function () {
        this.$emit("onClick4OperationLog");
      },
      onClick4SearchTraffic: function () {
        this.$emit("onClick4SearchTraffic");
      },
      onClick4InsertTraffic: function () {
        //TODO:获取check的rows
        var arrCheckedRow = [];
        if (this.showRelativePort) {
          var bScriptCheckStatus = this.$refs.ref4ScriptCheckBox.getCheckItem();
          this.$emit("onClick4InsertTraffic", arrCheckedRow, bScriptCheckStatus);
        }
        else {
          this.$emit("onClick4InsertTraffic", arrCheckedRow);
        }
      },
      onClick4ExportRelativePort: function () {
        this.$emit("onClick4ExportRelativePort");
      },
      onClick4ImportRelativePort: function () {
        this.$emit("onClick4ImportRelativePort");
      },
      onCheckTrafficRow: function (oRow) {
        this.$emit("onCheckTrafficRow", oRow);
      },
      onUnCheckTrafficRow: function (oRow) {
        this.$emit("onUnCheckTrafficRow", oRow);
      },
      //#endregion

      //#region 3rd
      setData4NotInsertTraffic: function (rows4Traffic) {
        this.rows4Traffic = rows4Traffic;
      },
      setData4NotInsertTrafficRouter: function (rows4Route) {
        this.rows4Route = rows4Route;
      },
      setData4RelativePort: function (rows4RelativePort) {
        this.rows4RelativePort = rows4RelativePort;
      },
      getCheckRow4NotInsert: function () {
        //TODO:
        return [];
      },
      //#endregion
    }
  }
</script>

<style scoped>
  .nodeInsertS4NotInsertedWrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .session {
    height: 100%;
    margin-bottom: 20px;
  }

  .session:last-child {
    margin-bottom: 0;
  }

  .titleArea {
    width: 100%;
    height: 52px;
  }

  .titleName {
    float: left;
    height: 52px;
    font-size: 16px;
    color: #FFFFFF;
    /*font-weight: bold;*/
    line-height: 52px;
  }

  .gridArea {
    height: calc(100% - 52px);
  }

  .btnArea {
    height: 52px;
    padding: 10px 0;
    box-sizing: border-box;
    float: right;
  }
</style>
