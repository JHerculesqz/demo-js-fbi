<template>
  <div class="nodeInsertS4InsertedWrapper">
    <div class="session">
      <div class="titleArea">
        <div class="titleName">业务表</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="还原"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4Recovery"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="全部还原"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4RecoveryAll"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出脚本"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportScript"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出业务"
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
                                  v-on:onClick="onClick4SearchInsertedTraffic"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="gridArea">
        <marvel-grid :titles="titles4Traffic"
                     :rows="rows4Traffic"
                     :limit="limit4Traffic"
                     v-on:onClickRow="onClickRow4Traffic"
                     theme="dark"></marvel-grid>
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
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelGrid
    },
    name: "NodeInsertS4S5Inserted",
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
      onClick4Recovery: function () {
        //TODO:获取表格勾选
        var arrRow = [];
        this.$emit("onClick4Recovery", arrRow);
      },
      onClick4RecoveryAll: function () {
        this.$emit("onClick4RecoveryAll");
      },
      onClick4ExportScript: function () {
        this.$emit("onClick4ExportScript");
      },
      onClick4ExportTraffic: function () {
        this.$emit("onClick4ExportTraffic");
      },
      onClick4OperationLog: function () {
        this.$emit("onClick4OperationLog");
      },
      onClick4SearchInsertedTraffic: function () {
        this.$emit("onClick4SearchInsertedTraffic");
      },
      //#endregion

      //#region 3rd
      setData4InsertTraffic: function (rows4Traffic) {
        this.rows4Traffic = rows4Traffic;
      },
      setData4InsertTrafficRouter: function (rows4Route) {
        this.rows4Route = rows4Route;
      },
      //#endregion
    }
  }

</script>

<style scoped>
  .nodeInsertS4InsertedWrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .session {
    height: 100%;
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
