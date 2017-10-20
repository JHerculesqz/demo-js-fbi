<template>
  <marvel-right-ext-panel
    theme="dark"
    width="250"
    show="false"
    canDrag="false">
    <div class="topoRightAreaGrid" slot="content">
      <marvel-grid theme="dark"
                   :titles="titles4Props"
                   :rows="rows4Props"
                   :limit="limit4Props"></marvel-grid>
    </div>
  </marvel-right-ext-panel>
</template>

<script>
  import MarvelRightExtPanel from "@/walle/widget/extPanel/MarvelRightExtPanel";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";

  export default {
    components: {
      MarvelGrid,
      MarvelRightExtPanel},
    name: "TopoRightArea",
    data: function(){
      return {
        //#region grid4Props
        titles4Props: [{
          label: "属性",
          width: "50%"
        }, {
          label: "值",
          width: "50%"
        }],
        skip4Props: 0,
        limit4Props: 20,
        rows4Props: []
        //#endregion
      }
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback

      //#endregion
      //#region 3rd
      setData4RightArea: function(oData4RightArea){
        this.rows4Props = oData4RightArea;
      }
      //#endregion
    }
  }
</script>

<style scoped>
  .topoRightAreaGrid{
    color: #fff;
    height: 100%;
  }

</style>
