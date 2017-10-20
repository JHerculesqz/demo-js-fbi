<template>
  <marvel-toolbar
    v-bind:items="toolbarItems" theme="dark"
    v-on:onToolbarItemClick="onToolbarItemClick"></marvel-toolbar>
</template>

<script>
  import MarvelToolbar from "@/walle/widget/toolbar/MarvelToolbar";

  export default {
    components: {
      MarvelToolbar
    },
    name: "TopoToolbar",
    props: ["toolbarItems"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
      }
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback

      //#endregion
      //#region 3rd
      onToolbarItemClick: function (oItem) {
        this.$emit("onToolbarItemClick", oItem);
      }
      //#endregion
    }
  }
</script>

<style>


</style>
