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
      _afterInitPlugin: function () {
        this.$emit("_afterInitPlugin");
      },
      _onClickBD: function (oBD) {
        this.$emit("onClickBD", oBD);
      },
      _onContextMenuClickBD: function (oBD, iX, iY) {
        this.$emit("onContextMenuClickBD", oBD, iX, iY);
      },
      //#endregion
      //#region 3rd
      init: function () {
        var self = this;

        this.m_oMarvelDevPanel = new window.$.MarvelDevPanel();

        var oOptions = {
          id: this.id,
          events: {
            afterInitPlugin: function () {
              self._afterInitPlugin();
            },
            click4BD: function (oBD, e) {
              self._onClickBD(oBD);
            },
            contextMenu4BD: function (oBD, iX, iY, e) {
              self._onContextMenuClickBD(oBD, iX, iY);
            },
          },
          "GK_1000": {
            url: "static/devPanel/image/dev1.svg",
          },
          "SXL_1": {
            url: "static/devPanel/image/dev2.svg",
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
