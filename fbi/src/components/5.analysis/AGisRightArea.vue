<template>
  <marvel-right-ext-panel
    theme="dark"
    width="250"
    show="false"
    canDrag="false">
    <div class="gisRightArea" slot="content">
      <component v-bind:is="moduleName" ref="dynamicComponent"></component>
    </div>
  </marvel-right-ext-panel>
</template>

<script>
  import MarvelRightExtPanel from "@/walle/widget/extPanel/MarvelRightExtPanel";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";

  export default {
    components: {
      MarvelRightExtPanel,
      MarvelGrid
    },
    name: "AGisRightArea",
    data: function () {
      return {
        //#region moduleName
        moduleName: ""
        //#endregion
      };
    },
    methods: {
      //#region inner

      //#endregion

      //#region callback

      //#endregion

      //#region 3rd
      updateRightAreaData: function(oType, oData){

      },
      //#endregion
    }
  }

</script>

<style scoped>
  .gisRightArea {
    color: #fff;
    height: 100%;
  }
</style>
