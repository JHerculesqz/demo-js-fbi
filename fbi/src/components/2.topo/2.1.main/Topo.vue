<template>
  <div class="topoWrapper">
    <div class="customTabWrapper">
      <marvel-wizard-tab theme="dark"
                         :wizardTabs="wizardTabs" v-on:onClick="onClickWizardTab"></marvel-wizard-tab>
    </div>
    <div class="topoArea">
      <div class="topoAreaCont">
        <keep-alive>
          <component v-bind:is="moduleName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import {MarvelTab, MarvelTabItem, MarvelTxtButton, MarvelWizardTab} from "marvel-fui2";
  import Phy from "@/components/2.topo/2.2.phy/Phy";
  import Traffic from "@/components/2.topo/2.3.traffic/Traffic";
  import Gis from "@/components/2.topo/2.4.gis/Gis";

  export default {
    components: {
      MarvelWizardTab,
      MarvelTxtButton,
      Traffic,
      MarvelTabItem,
      MarvelTab,
      Phy,
      Gis
    },
    name: 'Topo',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region wizardTab
        wizardTabs: [{
          index: 1,
          label: "拓扑还原",
          isActive: true
        }, {
          index: 2,
          label: "业务还原",
          isActive: false
        }, {
          index: 3,
          label: "GIS还原",
          isActive: false
        }],
        //#endregion
        //#region moduleName
        moduleName: "Phy"
        //#endregion
      }
    },
    mounted: function () {

    },
    methods: {
      //#region inner
      onClickWizardTab: function (oItem) {
        if (oItem.index == 1) {
          this.moduleName = "Phy";
        }
        else if(oItem.index == 2) {
          this.moduleName = "Traffic";
        }
        else {
          this.moduleName = "Gis";
        }
      },
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>

  .topoWrapper {
    height: 100%;
  }

  .customTabWrapper {
    height: 32px;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
  }

  .topoArea {
    height: calc(100% - 32px);
    padding: 10px;
    box-sizing: border-box;
  }

  .topoAreaCont {
    height: 100%;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
  }
</style>
