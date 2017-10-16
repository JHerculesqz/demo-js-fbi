<template>
  <marvel-leaflet ref="gis" v-bind:id="id"
                  v-on:onNodeClick="onNodeClick"
                  v-on:onNodeGroupClick="onNodeGroupClick"
                  v-on:onLinkClick="onLinkClick"></marvel-leaflet>
</template>

<script>
  import {MarvelLeaflet} from "marvel-fui2";

  export default {
    components: {
      MarvelLeaflet
    },
    name: "GisCenterArea",
    props: ["id"],
    data: function () {
      return {};
    },
    methods: {
      //#region inner

      //#endregion

      //#region callback
      onNodeClick: function (e) {
        this.$emit("onNodeClick", e);
      },
      onNodeGroupClick: function (e) {
        this.$emit("onNodeGroupClick", e);
      },
      onLinkClick: function (e) {
        this.$emit("onLinkClick", e);
      },
      //#endregion

      //#region 3rd
      initGisTopo: function (iX, iY, iZoom4Init, oOptions) {
        this.$refs.gis.init(iX, iY, iZoom4Init, oOptions);
      },
      drawGisTopo: function (oTopoData) {
        this.$refs.gis.draw(oTopoData);
      },
      getTopoData: function(){
        return this.$refs.gis.getTopoData();
      },
      setOpacity4Marker: function(strId, iOpacity){
        this.$refs.gis.setOpacity4Marker(strId, iOpacity);
      },
      setOpacity4Group: function(strId, iOpacity){
        this.$refs.gis.setOpacity4Group(strId, iOpacity);
      },
      //#endregion
    }
  }
</script>

<style scoped>

</style>
