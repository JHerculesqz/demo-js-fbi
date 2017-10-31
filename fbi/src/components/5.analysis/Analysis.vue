<template>
  <div class="analysis">
    <gis-center-area ref="gisTopo" id="gis4Analysis"></gis-center-area>
    <a-gis-right-area></a-gis-right-area>
  </div>
</template>

<script>
  import GisCenterArea from "@/components/0.common/0.7.gisTopo/GisCenterArea"
  import AGisRightArea from "@/components/5.analysis/AGisRightArea"

  export default {
    components: {
      GisCenterArea,
      AGisRightArea
    },
    name: 'Analysis',
    data: function () {
      return {};
    },
    mounted: function(){
      this.$refs.gisTopo.initGisTopo(51.505, -0.09, 13, {
        mapUrl: "https://api.mapbox.com/styles/v1/jherculesqz/cj99csbwi2bzy2qp3mhtqcrkx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamhlcmN1bGVzcXoiLCJhIjoiY2o4anNybjZqMDZnczMybXZxaHNhMDRlMyJ9.fR2DM7aypSp8q4AxE6uL5w",
        //mapUrl: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}",
        hasZoomCtrl: true,
        export: true,
        mess: true,
        messTmpLine: "#fff",
        messResLine: "#fff",
        pm: true,
      });
    }
  }
</script>

<style scoped>
.analysis{
  width: 100%;
  height: 100%;
}
</style>
