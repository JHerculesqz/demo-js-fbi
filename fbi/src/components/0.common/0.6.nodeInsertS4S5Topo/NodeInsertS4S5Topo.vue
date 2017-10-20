<template>
  <div class="nodeInsertS4">
    <div class="leftTopo">
      <topo-panel ref="ref4MainTopo4S4BeforeInsert"
                  :id4Topo="id4LeftTopo"
                  :showLeftArea="false"
                  :showRightArea="false"
                  v-bind:toolbarItems="leftToolbarItems"
                  v-on:onToolbarItemClick="onLeftToolbarItemClick"
                  theme="dark"></topo-panel>
    </div>
    <div class="rightTopo">
      <topo-panel ref="ref4MainTopo4S4AfterInsert"
                  :id4Topo="id4RightTopo"
                  :showLeftArea="false"
                  :showRightArea="false"
                  v-bind:toolbarItems="rightToolbarItems"
                  v-on:onToolbarItemClick="onRightToolbarItemClick"
                  theme="dark"></topo-panel>
    </div>
    <div>
      <marvel-bottom-ext-panel
        theme="dark"
        height="300"
        show="true"
        canDrag="false">
        <div class="phyContent" slot="content">
          <marvel-tab :tabItems="tabItems" theme="dark">
            <marvel-tab-item :isActive="tabItems[0].isActive">
              <div class="showAreaInner">
                <node-insert-s4-s5-not-inserted ref="ref4S4S5NotInserted"
                                                v-bind:showRelativePort="showRelativePort"
                                                v-on:onClickRow4Traffic="onClickRow4NotInsertTraffic"
                                                v-on:onClick4ExportTraffic="onClick4ExportNotInsertTraffic"
                                                v-on:onClick4OperationLog="onClick4OperationLogNotInsert"
                                                v-on:onClick4SearchTraffic="onClick4SearchNotInsertTraffic"
                                                v-on:onClick4InsertTraffic="onClick4InsertTraffic"
                                                v-on:onClick4ExportRelativePort="onClick4ExportRelativePort"
                                                v-on:onClick4ImportRelativePort="onClick4ImportRelativePort"
                                                v-on:onCheckTrafficRow="onCheckRow4NotInsert"
                                                v-on:onUnCheckTrafficRow="onUnCheckRow4NotInsert"></node-insert-s4-s5-not-inserted>
              </div>
            </marvel-tab-item>
            <marvel-tab-item :isActive="tabItems[1].isActive">
              <div class="showAreaInner">
                <node-insert-s4-s5-inserted ref="ref4S4S5Inserted"
                                            v-on:onClickRow4Traffic="onClickRow4InsertTraffic"
                                            v-on:onClick4Recovery="onClick4Recovery"
                                            v-on:onClick4RecoveryAll="onClick4RecoveryAll"
                                            v-on:onClick4ExportScript="onClick4ExportScript"
                                            v-on:onClick4ExportTraffic="onClick4ExportInsertTraffic"
                                            v-on:onClick4OperationLog="onClick4OperationLogInsert"
                                            v-on:onClick4SearchInsertedTraffic="onClick4SearchInsertTraffic"></node-insert-s4-s5-inserted>
              </div>
            </marvel-tab-item>
          </marvel-tab>
        </div>
      </marvel-bottom-ext-panel>
    </div>
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import MarvelBottomExtPanel from "@/walle/widget/extPanel/MarvelBottomExtPanel";
  import TopoPanel from "@/components/0.common/0.2.topo/TopoPanel";
  import NodeInsertS4S5Inserted from "@/components/0.common/0.6.nodeInsertS4S5Topo/NodeInsertS4S5Inserted";
  import NodeInsertS4S5NotInserted from "@/components/0.common/0.6.nodeInsertS4S5Topo/NodeInsertS4S5NotInserted";

  export default {
    components: {
      NodeInsertS4S5Inserted,
      NodeInsertS4S5NotInserted,
      MarvelBottomExtPanel,
      TopoPanel,
      MarvelTabItem,
      MarvelTab
    },
    name: 'NodeInsertS4S5Topo',
    props: ["id4LeftTopo", "id4RightTopo", "showRelativePort"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region topo
        //#region left
        leftToolbarItems: [],
        //#endregion
        //#region right
        rightToolbarItems: [],
        //#endregion
        //#endregion
        //#region tab
        tabItems: [{
          label: "未割接的业务",
          isActive: true
        }, {
          label: "已割接的业务",
          isActive: false
        }],
        //endregion
      }
    },
    mounted: function () {
    },
    methods: {
      //#region inner
      onLeftToolbarItemClick: function (oToolbarItem) {

      },
      onRightToolbarItemClick: function (oToolbarItem) {

      },
      //#endregion
      //#region callback
      //#region not insert
      onClickRow4NotInsertTraffic: function (oRow) {
        this.$emit("onClickRow4NotInsertTraffic", oRow);
      },
      onClick4ExportNotInsertTraffic: function () {
        this.$emit("onClick4ExportNotInsertTraffic");
      },
      onClick4OperationLogNotInsert: function () {
        this.$emit("onClick4OperationLogNotInsert");
      },
      onClick4SearchNotInsertTraffic: function () {
        this.$emit("onClick4SearchNotInsertTraffic");
      },
      onClick4InsertTraffic: function (arrRow, bScriptCheckStatus) {
        this.$emit("onClick4InsertTraffic", arrRow, bScriptCheckStatus);
      },
      onClick4ExportRelativePort: function () {
        this.$emit("onClick4ExportRelativePort");
      },
      onClick4ImportRelativePort: function () {
        this.$emit("onClick4ImportRelativePort");
      },
      onCheckRow4NotInsert: function (oRow) {
        this.$emit("onCheckRow4NotInsert", oRow);
      },
      onUnCheckRow4NotInsert: function (oRow) {
        this.$emit("onUnCheckRow4NotInsert", oRow);
      },
      //#endregion
      //#region insert
      onClickRow4InsertTraffic: function (oRow) {
        this.$emit("onClickRow4InsertTraffic", oRow);
      },
      onClick4Recovery: function (arrRow) {
        this.$emit("onClick4Recovery", arrRow);
      },
      onClick4RecoveryAll: function () {
        this.$emit("onClick4RecoveryAll");
      },
      onClick4ExportScript: function () {
        this.$emit("onClick4ExportScript");
      },
      onClick4ExportInsertTraffic: function () {
        this.$emit("onClick4ExportInsertTraffic");
      },
      onClick4OperationLogInsert: function () {
        this.$emit("onClick4OperationLogInsert");
      },
      onClick4SearchInsertTraffic: function () {
        this.$emit("onClick4SearchInsertTraffic");
      },
      //#endregion
      //#endregion
      //#region 3rd
      initTopo: function (oAfterCallBack) {
        var self = this;
        this.$refs.ref4MainTopo4S4BeforeInsert.initTopo(function () {
          self.$refs.ref4MainTopo4S4AfterInsert.initTopo(function () {
            oAfterCallBack();
          });
        });
      },
      drawTopo: function (oLeftTopoData, oRightTopoData) {
        this.$refs.ref4MainTopo4S4BeforeInsert.drawTopo(oLeftTopoData);
        this.$refs.ref4MainTopo4S4AfterInsert.drawTopo(oRightTopoData);
      },
      updateTopo: function (oLeftTopoData, oRightTopoData) {
        this.$refs.ref4MainTopo4S4BeforeInsert.updateTopo(oLeftTopoData);
        this.$refs.ref4MainTopo4S4AfterInsert.updateTopo(oRightTopoData);
      },
      setData4InsertTraffic: function (rows4Traffic) {
        this.$refs.ref4S4S5Inserted.setData4InsertTraffic(rows4Traffic);
      },
      setData4InsertTrafficRouter: function (rows4Route) {
        this.$refs.ref4S4S5Inserted.setData4InsertTrafficRouter(rows4Route);
      },
      setData4NotInsertTraffic: function (rows4Traffic) {
        this.$refs.ref4S4S5NotInserted.setData4NotInsertTraffic(rows4Traffic);
      },
      setData4NotInsertTrafficRouter: function (rows4Route) {
        this.$refs.ref4S4S5NotInserted.setData4NotInsertTrafficRouter(rows4Route);
      },
      setData4RelativePort: function (rows4RelativeTraffic) {
        this.$refs.ref4S4S5NotInserted.setData4RelativePort(rows4RelativeTraffic);
      },
      getCheckRow4NotInsert: function () {
        return this.$refs.ref4S4S5NotInserted.getCheckRow4NotInsert();
      },
      //#endregion
    }
  }
</script>

<style scoped>
  .nodeInsertS4 {
    width: 100%;
    height: 100%;
  }

  .showAreaInner {
    height: 100%;
  }

  .phyContent {
    height: 100%;
  }

  .leftTopo {
    float: left;
    height: 100%;
    width: calc(50% - 10px);
  }

  .rightTopo {
    height: 100%;
    float: right;
    width: calc(50% - 10px);
  }
</style>
