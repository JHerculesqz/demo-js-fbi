<template>
  <div :id="id"></div>
</template>

<script>
  export default {
    name: 'MarvelDevPanel',
    props: ["id"],
    data: function() {
        return {
          m_oMarvelDevPanel: undefined
        }
    },
    mounted: function(){

    },
    methods: {
      //#region inner

      //#endregion
      //#region callback
      _onClickBD: function (oBD) {
        this.$emit("onClickBD", oBD);
      },
      //#endregion
      //#region 3rd
      init: function () {
        var self = this;

        this.m_oMarvelDevPanel = new window.$.MarvelDevPanel();

        var oOptions = {
          id: this.id,
          events: {
            click4BD: function (oBD, e) {
              self._onClickBD(oBD);
            }
          },
          "GK_1000": {
            url: "static/devPanel/image/dev1.svg",
          },
        };
        this.m_oMarvelDevPanel.init(oOptions);
      },
      initPlugin: function (strDevType) {
        this.m_oMarvelDevPanel.initPlugin(strDevType);
      },
      getPlugin: function (strDevType) {
        var oPlugin = this.m_oMarvelDevPanel.getPlugin(strDevType);
        return oPlugin;
      },
      //#endregion
    }
  }
</script>

<style scoped>

</style>
