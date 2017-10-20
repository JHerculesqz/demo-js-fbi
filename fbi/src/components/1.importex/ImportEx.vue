<template>
  <div class="importExWrapper">
    <div class="importEx_head">
      <marvel-wizard ref="refWizard" :items="items"
                     v-on:onWizardClick="onWizardClick"></marvel-wizard>
    </div>
    <div class="importEx_cont">
      <component v-bind:is="downModuleName"></component>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelWizard from "@/walle/widget/wizard/MarvelWizard";
  import ImportExFileMgr from "@/components/1.importex/ImportExFileMgr";
  import ImportExParseFixInput from "@/components/1.importex/ImportExParseFixInput";
  import ImportExParseInput from "@/components/1.importex/ImportExParseInput";

  export default {
    components: {
      MarvelWizard,
      MarvelFrame,
      ImportExFileMgr,
      ImportExParseFixInput,
      ImportExParseInput
    },
    name: 'ImportEx',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region wizard
        items: [{
          id: "ImportExFileMgr",
          label: "数据上传",
          index: 1
        }, {
          id: "ImportExParseInput",
          label: "脚本解析",
          index: 2
        }, {
          id: "ImportExParseFixInput",
          label: "解析修正",
          index: 3
        }],
        //#endregion
        //#region down
        downModuleName: "ImportExFileMgr"
        //#endregion
      }
    },
    mounted: function () {
      //1.初始化向导
      this.$refs.refWizard.setProgress(1);
    },
    methods: {
      //#region inner
      onWizardClick: function (oWizardItem) {
        this.downModuleName = oWizardItem.id;
      }
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
  .importExWrapper {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .importEx_head {
    height: 120px;
    background-color: #282746;
    padding: 20px;
    box-sizing: border-box;
    padding: 20px;
  }

  .importEx_cont {
    height: calc(100% - 120px);
    background-color: #282746;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
  }
</style>
