<template>
  <div class="confirmPathArea">
    <div class="staticArea">
      <div class="titleArea">
        <div class="titleName">待确认业务</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportConfirmPath"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="firstGridArea">
        <marvel-grid ref="ref4ConfirmPathGrid" :titles="titles4ConfirmPath"
                     :rows="rows4ConfirmPath"
                     :limit="limit4ConfirmPath"
                     theme="dark"
                     v-on:onClickRow="onClickConfirmPathRow"></marvel-grid>
      </div>
    </div>
    <div class="dynamicArea" v-show="showRouter">
      <div class="titleArea">
        <div class="titleName">路由详情</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportConfirmPathRouter"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="secondGridArea">
        <marvel-grid :titles="titles4ConfirmRouter"
                     :rows="rows4ConfirmRouter"
                     :limit="limit4ConfirmRouter"
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
      MarvelGrid},
    name: "NodeInsertS3TopoBottom",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region confirmPathGrid
        titles4ConfirmPath: [{
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
        skip4ConfirmPath: 0,
        limit4ConfirmPath: 20,
        rows4ConfirmPath: [],
        //#endregion
        //#region fullRouterGrid
        showRouter: false,
        titles4ConfirmRouter: [{
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
        skip4ConfirmRouter: 0,
        limit4ConfirmRouter: 20,
        rows4ConfirmRouter: [],
        //#endregion
      };
    },
    methods: {
      //#region inner
      onClick4ExportConfirmPathRouter: function () {
        if (this.debug) {
          alert("导出路由详情");
        }
        else {
          //TODO:
        }
      },
      onClick4ExportConfirmPath: function () {
        if (this.debug) {
          alert("导出完整路径信息");
        }
        else {
          //TODO:
        }
      },
      //#endregion
      //#region callback
      onClickConfirmPathRow: function (oRow) {
        this.showRouter = true;
        this.$emit("onClickConfirmPathRow", oRow);
      },
      //#endregion
      //#region 3rd
      setConfirmPathData: function (rows4ConfirmPath) {
        this.rows4ConfirmPath = rows4ConfirmPath;
      },
      setData4ConfirmPathRouter: function (rows4ConfirmRouter) {
        this.rows4ConfirmRouter = rows4ConfirmRouter;
      }
      //#endregion
    }
  }
</script>

<style scoped>
  .confirmPathArea {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .staticArea {
    width: 100%;
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

  .btnArea {
    height: 52px;
    padding: 10px 0;
    box-sizing: border-box;
    float: right;
  }

  .firstGridArea {
    height: calc(100% - 52px);
  }

  .dynamicArea {
    padding-top: 20px;
    height: 100%;
    box-sizing: border-box;
  }

  .secondGridArea {
    height: calc(100% - 52px);
  }

  .classCustom1 {
    margin-left: 20px;
  }

  @media (min-width: 1980px) {
    .staticArea {
      width: calc(50% - 10px);
      float: left;
      margin-right: 20px;
    }

    .dynamicArea {
      width: calc(50% - 10px);
      float: left;
      padding: 0;
    }
  }
</style>
