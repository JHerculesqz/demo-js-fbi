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
    name: "GisRightArea4Link",
    data: function(){
      return {
        //region
        titles4Props: [{
          label: "源网元",
          width: "10%"
        }, {
          label: "宿网元",
          width: "10%"
        }, {
          label: "链路利用率",
          width: "10%"
        }, {
          label: "光纤利用率",
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
      setLinkData: function(oData){
        this.rows4Props = oData.rows;
      }
      //endregion
    }
  };
</script>

<style scoped>

</style>
