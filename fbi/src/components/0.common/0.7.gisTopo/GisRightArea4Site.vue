<template>
  <div>
    站点信息
    {{siteName}}
  </div>
</template>

<script>
  export default {
    name: "GisRightArea4Site",
    data: function(){
      return {
        //region
        siteName: "",
        //endregion
      };
    },
    methods: {
      //region inner

      //endregion
      //region callback

      //endregion
      //region 3rd
      setSiteData: function(oData){
        this.siteName = oData.siteName;
      }
      //endregion
    }
  };
</script>

<style scoped>

</style>
