<template>
  <marvel-right-ext-panel
    theme="dark"
    width="250"
    show="false"
    canDrag="false">
    <div class="gisRightArea" slot="content">
      <component v-bind:is="moduleName" ref="dynamicComponent"></component>
    </div>
  </marvel-right-ext-panel>
</template>

<script>
  import {MarvelRightExtPanel, MarvelGrid} from "marvel-fui2";
  import GisRightArea4Node from "@/components/0.common/0.7.gisTopo/GisRightArea4Node";
  import GisRightArea4Site from "@/components/0.common/0.7.gisTopo/GisRightArea4Site";
  import GisRightArea4Link from "@/components/0.common/0.7.gisTopo/GisRightArea4Link";

  const GisRightArea4Empty = {
      template: "<div>在地图上单击网元/站点/链路可以查看属性</div>"
  };

  export default {
    components: {
      MarvelRightExtPanel,
      MarvelGrid,
      GisRightArea4Node,
      GisRightArea4Site,
      GisRightArea4Link,
      GisRightArea4Empty
    },
    name: "GisRightArea",
    data: function () {
      return {
        //#region moduleName
        moduleName: "GisRightArea4Empty"
        //#endregion
      };
    },
    methods: {
      //#region inner

      //#endregion

      //#region callback

      //#endregion

      //#region 3rd
      updateRightAreaData: function(oType, oData){
        if(oType == "node"){
          this.moduleName = "GisRightArea4Node";
          this._setData4Node(oData);
        }
        else if(oType == "site"){
          this.moduleName = "GisRightArea4Site";
          this._setData4Site(oData);
        }
        else if(oType == "link"){
          this.moduleName = "GisRightArea4Link";
          this._setData4Link(oData);
        }
      },
      _setData4Node: function(oData){
        this.$nextTick(function(){
          this.$refs.dynamicComponent.setNodeData(oData);
        });
      },
      _setData4Site: function(oData){
        this.$nextTick(function(){
          this.$refs.dynamicComponent.setSiteData(oData);
        });
      },
      _setData4Link: function(oData){
        this.$nextTick(function(){
          this.$refs.dynamicComponent.setLinkData(oData);
        });
      }
      //#endregion
    }
  }

</script>

<style scoped>
  .gisRightArea {
    color: #fff;
    height: 100%;
  }
</style>
