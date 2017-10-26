<template>
  <marvel-left-ext-panel
    theme="dark"
    width="250"
    show="false"
    canDrag="false">
    <div class="topoLeftAreaZtree" slot="content">
      <marvel-z-tree ref="tree" theme="dark"
                     :treeData="data4LeftArea.treeData"
                     :options="data4LeftArea.treeOptions"
                     @onCheckboxClick="onCheckboxClick"
                     @onTreeNodeClick="onTreeNodeClick">
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
        data4LeftArea: {
          treeData: [],
          treeOptions: {}
        }
        //#endregion
      }
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback
      onCheckboxClick: function(oTreeNode){
        this.$emit("onCheckboxClick", oTreeNode);
      },
      onTreeNodeClick: function (oTreeNode) {
        this.$emit("onTreeNodeClick", oTreeNode);
      },
      //#endregion
      //#region 3rd
      setData4LeftArea: function (oData4LeftArea) {
        this.data4LeftArea.treeData = oData4LeftArea.treeData;
        this.data4LeftArea.treeOptions = oData4LeftArea.treeOptions;
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
