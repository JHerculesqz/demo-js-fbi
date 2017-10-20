<template>
  <div class="main">
    <div class="customTabWrapper">
      单站
    </div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";

  export default {
    components: {

    },
    name: 'SolutionDetails4Single',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region params
        solutionName: "",
        //#endregion
      }
    },
    mounted: function () {
      //1.get solutionName
      this.solutionName = MarvelRouter.getParam(this.$route, "name");
    },
    methods: {
      //#region inner
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>
  .main{
    height: 100%;
  }
  .customTabWrapper {
    height: 32px;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
  }
</style>
