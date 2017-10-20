<template>
  <div class="businessArea">
    <div class="titleArea">
      <div class="titleName">业务局向</div>
      <div class="btnArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="业务局向"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClick4Business"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="导出"
                                icon="icon-download"
                                theme="dark"
                                v-on:onClick="onClick4ExportBusiness"></marvel-icon-txt-button>
      </div>
    </div>
    <div class="firstGridArea">
      <marvel-grid :titles="titles4Business"
                   :rows="rows4Business"
                   :limit="limit4Business"
                   theme="dark"
                   v-on:onClickRow="onClickRow4Business"></marvel-grid>
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
    name: "Business",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region businessGrid
        titles4Business: [{
          label: "",
          width: "5%"
        }, {
          label: "源/宿端网元",
          width: "13%"
        }, {
          label: "宿/源端网元",
          width: "12%"
        }, {
          label: "VC12数量",
          width: "8%"
        }, {
          label: "VC3数量",
          width: "13%"
        }, {
          label: "VC4数量",
          width: "10%"
        }, {
          label: "VC4_4C数量",
          width: "13%"
        }, {
          label: "VC4_8C数量",
          width: "13%"
        }, {
          label: "VC4_16C数量",
          width: "13%"
        }, {
          label: "VC4_64C数量",
          width: "13%"
        }, {
          label: "业务量(等效2M)",
          width: "13%"
        }, {
          label: "业务量分布比例",
          width: "13%"
        }],
        skip4Business: 0,
        limit4Business: 20,
        rows4Business: [],
        //#endregion
      };
    },
    mounted: function () {

    },
    methods: {
      //#region inner
      onClick4ExportBusiness: function () {
        if (this.debug) {
          alert("导出");
        }
        else {
          //TODO:
        }
      },
      //#endregion
      //#region callback
      onClickRow4Business: function (oRow) {
        this.$emit("onClickRow4Business", oRow);
      },
      onClick4Business: function () {
        this.$emit("onClick4Business");
      },
      //#endregion
      //#region 3rd
      setBusinessData: function(rows4Business){
        this.rows4Business = rows4Business;
      }
      //#endregion
    }
  }
</script>

<style scoped>
  .businessArea {
    height: 100%;
  }

  .titleArea {
    width: 100%;
    height: 52px;
  }

  .titleName{
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

  @media (min-width: 1280px) {
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
