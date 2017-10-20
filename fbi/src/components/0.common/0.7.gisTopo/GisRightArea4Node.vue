<template>
  <div>
    <marvel-grid theme="dark"
                 :titles="titles4Props"
                 :rows="rows4Props"
                 :limit="limit4Props"></marvel-grid>
  </div>
</template>

<script>
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";

  export default {
    components: {
      MarvelGrid
    },
    name: "GisRightArea4Node",
    data: function(){
      return {
        //region grid
        titles4Props: [{
          label: "网元名称",
          width: "10%"
        }, {
          label: "类型",
          width: "10%"
        }],
        skip4Props: 0,
        limit4Props: 20,
        rows4Props: []
        //endregion
      };
    },
    methods: {
      //region inner

      //endregion
      //region callback

      //endregion
      //region 3rd
      setNodeData: function(oData){
        this.rows4Props = oData.rows;
      }
      //endregion
    }
  };
</script>

<style scoped>

</style>
