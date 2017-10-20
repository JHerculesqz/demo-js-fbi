<template>
  <marvel-left-ext-panel
    theme="dark"
    width="250"
    show="false"
    canDrag="false">
    <div class="topoLeftAreaZtree" slot="content">
      <marvel-z-tree theme="dark">
        <marvel-z-tree-item :model="data4LeftArea" theme="dark"
                            v-on:onTreeNodeClick="onTreeNodeClick"></marvel-z-tree-item>
      </marvel-z-tree>
    </div>
  </marvel-left-ext-panel>
</template>

<script>
  import MarvelLeftExtPanel from "@/walle/widget/extPanel/MarvelLeftExtPanel";
  import MarvelZTree from "@/walle/widget/tree/MarvelZTree";
  import MarvelZTreeItem from "@/walle/widget/tree/MarvelZTreeItem";

  export default {
    components: {
      MarvelZTreeItem,
      MarvelZTree,
      MarvelLeftExtPanel
    },
    name: "TopoLeftArea",
    data: function () {
      return {
        //#region phyTopo
        data4LeftArea: {}
        //#endregion
      }
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback
      onTreeNodeClick: function (oTreeNode) {
        this.$emit("onTreeNodeClick", oTreeNode);
      },
      //#endregion
      //#region 3rd
      setData4LeftArea: function (oData4LeftArea) {
        this.data4LeftArea = oData4LeftArea;
      },
      //#endregion
    }
  }
</script>

<style scoped>
  .topoLeftAreaZtree {
    color: #fff;
    height: 100%;
  }
</style>
