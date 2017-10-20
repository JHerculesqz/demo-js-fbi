<template>
  <div class="fullPathArea">
    <div class="staticArea">
      <div class="titleArea">
        <div class="titleName">业务详情</div>
        <div class="btnArea">
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="导出"
                                  icon="icon-download"
                                  theme="dark"
                                  v-on:onClick="onClick4ExportFullPath"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="网络删除"
                                  icon="icon-bin"
                                  theme="dark"
                                  v-on:onClick="onClick4DelFullPath"></marvel-icon-txt-button>
          <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                  label="删除"
                                  icon="icon-bin"
                                  theme="dark"
                                  v-on:onClick="onClick4DelFullPathAndCross"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="firstGridArea">
        <marvel-grid ref="ref4FullPathGrid" :titles="titles4FullPath"
                     :rows="rows4FullPath"
                     :limit="limit4FullPath"
                     theme="dark"
                     v-on:onClickRow="onClickFullPathRow"></marvel-grid>
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
                                  v-on:onClick="onClick4ExportFullPathRouter"></marvel-icon-txt-button>
        </div>
      </div>
      <div class="secondGridArea">
        <marvel-grid :titles="titles4FullRouter"
                     :rows="rows4FullRouter"
                     :limit="limit4FullRouter"
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
    name: "FullPath",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region fullPathGrid
        titles4FullPath: [{
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
        skip4FullPath: 0,
        limit4FullPath: 20,
        rows4FullPath: [],
        //#endregion
        //#region fullRouterGrid
        showRouter: false,
        titles4FullRouter: [{
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
        skip4FullRouter: 0,
        limit4FullRouter: 20,
        rows4FullRouter: [],
        //#endregion
      };
    },
    mounted: function () {

    },
    methods: {
      //#region inner
      onClick4ExportFullPathRouter: function () {
        if (this.debug) {
          alert("导出路由详情");
        }
        else {
          //TODO:
        }
      },
      onClick4ExportFullPath: function () {
        if (this.debug) {
          alert("导出完整路径信息");
        }
        else {
          //TODO:
        }
      },
      onClick4DelFullPath: function () {
        //获取勾选项
//        var arrCheckRows = this.$refs.ref4FullPathGrid.getCheckRows();
        if (this.debug) {
          alert("网络删除完整路径");
        }
        else {
          //TODO:
        }
      },
      onClick4DelFullPathAndCross: function () {
        //获取勾选项
//        var arrCheckRows = this.$refs.ref4FullPathGrid.getCheckRows();
        if (this.debug) {
          alert("删除完整路径及路径经过交叉");
        }
        else {
          //TODO:
        }
      },
      //#endregion
      //#region callback
      onClickFullPathRow: function (oRow) {
        this.showRouter = true;
        this.$emit("onClickFullPathRow", oRow);
      },
      //#endregion
      //#region 3rd
      setFullPathData: function (rows4FullPath) {
        this.rows4FullPath = rows4FullPath;
      },
      setData4FullPathRouter: function (rows4FullRouter) {
        this.rows4FullRouter = rows4FullRouter;
      }
      //#endregion
    }
  }
</script>

<style scoped>
  .fullPathArea {
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
