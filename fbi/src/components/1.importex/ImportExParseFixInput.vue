<template>
  <div>
    <div>
      <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                              label="导出待人工修复数据"
                              icon="icon-download"
                              theme="dark"
                              v-on:onClick="onClick4Download"></marvel-icon-txt-button>
    </div>
  </div>
</template>

<script>
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelFrame},
    name: 'ImportExParseFixInput',
    data: function() {
      return {

      }
    },
    mounted: function(){

    },
    destroyed: function(){

    },
    methods: {
      //#region inner
      onClick4Download:function(){
        alert("downloadClick");
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

</style>
