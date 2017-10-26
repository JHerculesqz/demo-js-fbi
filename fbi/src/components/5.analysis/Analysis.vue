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
        hasZoomCtrl: true
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
