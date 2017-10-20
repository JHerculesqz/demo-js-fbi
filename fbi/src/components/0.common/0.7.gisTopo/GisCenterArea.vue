<template>
  <marvel-leaflet ref="gis" v-bind:id="id"
                  v-on:onClick="onClick"
                  v-on:onNodeClick="onNodeClick"
                  v-on:onNodeGroupClick="onNodeGroupClick"
                  v-on:onLinkClick="onLinkClick"></marvel-leaflet>
</template>

<script>
  import MarvelLeaflet from "@/walle/widget/leaflet/MarvelLeaflet";

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
      onClick: function(e){
        console.log(e);
        this.$emit("onClick", e);
      },
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
      setOpacity4Link: function(strId, iOpacity){
        this.$refs.gis.setOpacity4Link(strId, iOpacity);
      },
      setColor4Link: function(strId, oColor){
        this.$refs.gis.setColor4Link(strId, oColor);
      },
      addPolygon: function (strId, arrPoints, oBuObj) {
        this.$refs.gis.addPolygon(strId, arrPoints, oBuObj);
      },
      delPolygon: function(strId){
        this.$refs.gis.delPolygon(strId);
      },
      //#endregion
    }
  }
</script>

<style scoped>

</style>
