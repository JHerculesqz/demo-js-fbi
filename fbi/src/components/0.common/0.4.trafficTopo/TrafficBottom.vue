<template>
  <div class="trafficBottomWrapper">
    <div class="leftPart">
      <marvel-accordion2 theme="dark"
                         v-bind:items="items"
                         v-on:onClickItem="onClickItem"
                         v-on:onClickSubItem="onClickSubItem"></marvel-accordion2>
    </div>
    <div class="rightPart">
      <keep-alive>
        <component :ref="moduleName"
                   :is="moduleName"
                   v-on:onClickFullPathRow="onClickFullPathRow"
                   v-on:onClickRow4Business="onClickRow4Business"
                   v-on:onClick4Business="onClick4Business"
                   v-on:onClickPartPathRow="onClickPartPathRow"
                   v-on:onClickRow4DiscreteCross="onClickRow4DiscreteCross"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import FullPath from "@/components/0.common/0.4.trafficTopo/FullPath";
  import Business from "@/components/0.common/0.4.trafficTopo/Business";
  import PartPath from "@/components/0.common/0.4.trafficTopo/PartPath";
  import DiscreteCross from "@/components/0.common/0.4.trafficTopo/DiscreteCross";
  import MarvelAccordion2 from "@/walle/widget/accordion/MarvelAccordion2";

  export default {
    components: {
      MarvelAccordion2,
      DiscreteCross,
      PartPath,
      FullPath,
      Business
    },
    name: "TrafficBottom",
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region moduleName
        moduleName: "FullPath",
        //#endregion
        //#region accordion
        items: [{
          label: "完整路径",
          icon: "icon-podcast",
          fold: false,
          children: [{
            label: "业务详情",
            active: true
          }, {
            label: "业务局向"
          }]
        }, {
          label: "不完整路径",
          icon: "icon-feed"
        }, {
          label: "离散交叉",
          icon: "icon-mic"
        }]
        //#endregion
      };
    },
    methods: {
      //#region inner
      onClickItem: function (oItem) {
        if (oItem.label == "不完整路径") {
          this.moduleName = "PartPath";
        }
        else if (oItem.label == "离散交叉") {
          this.moduleName = "DiscreteCross";
        }
        this.$emit("onClickAccordionItem", oItem);
      },
      onClickSubItem: function (oItem, oSubItem) {
        if (oSubItem.label == "业务详情") {
          this.moduleName = "FullPath";
        }
        else if (oSubItem.label == "业务局向") {
          this.moduleName = "Business";
        }
        this.$emit("onClickAccordionItem", oSubItem);
      },
      //#endregion
      //#region callback
      onClickFullPathRow: function (arrRouters) {
        this.$emit("onClickFullPathRow", arrRouters);
      },
      onClickRow4Business: function (oRow) {
        this.$emit("onClickRow4Business", oRow);
      },
      onClick4Business: function(){
        this.$emit("onClick4Business");
      },
      onClickPartPathRow: function (oRow) {
        this.$emit("onClickPartPathRow", oRow);
      },
      onClickRow4DiscreteCross: function (oRow) {
        this.$emit("onClickRow4DiscreteCross", oRow);
      },
      //#endregion
      //#region 3rd
      setFullPathData: function (rows4FullPath) {
        this.$nextTick(function () {
          this.$refs[this.moduleName].setFullPathData(rows4FullPath);
        });
      },
      setBusinessData: function (rows4Business) {
        this.$nextTick(function () {
          this.$refs[this.moduleName].setBusinessData(rows4Business);
        });
      },
      setPartPathData: function (rows4PartPath) {
        this.$nextTick(function () {
          this.$refs[this.moduleName].setPartPathData(rows4PartPath);
        });
      },
      setDiscreteCrossData: function (rows4DiscreteCross) {
        this.$nextTick(function () {
          this.$refs[this.moduleName].setDiscreteCrossData(rows4DiscreteCross);
        });
      },
      setData4FullPathRouter: function (rows4FullRouter) {
        this.$nextTick(function () {
          this.$refs[this.moduleName].setData4FullPathRouter(rows4FullRouter);
        });
      },
      setData4PartPathRouter: function(rows4PartRouter){
        this.$nextTick(function () {
          this.$refs[this.moduleName].setData4PartPathRouter(rows4PartRouter);
        });
      }
      //#endregion
    }
  }
</script>

<style scoped>
  .trafficBottomWrapper {
    height: 100%;
    width: 100%;
  }

  .leftPart {
    height: calc(100% - 10px);
    float: left;
    width: 120px;
    margin-right: 10px;
    margin-top: 10px;
    padding-right: 10px;
    border-right: 1px solid #a7abbe;
    box-sizing: border-box;
  }

  .rightPart {
    float: left;
    width: calc(100% - 130px);
    height: 100%;
  }
</style>
