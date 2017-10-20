<template>
  <div v-show="showSummaryPanel" class="solutionSummaryWrapper">
    <div class="topArea">
      <div class="session mini-24 middle-12">
        <div class="sessionName">方案名称: </div>
        <div class="sessionCont"> {{solutionName}} </div>
      </div>
      <div class="session mini-24 middle-12">
        <div class="sessionName">方案责任人: </div>
        <div class="sessionCont"> {{solutionUserName}} </div>
      </div>
      <div class="session mini-24 middle-12">
        <div class="sessionName">方案类型: </div>
        <div class="sessionCont"> {{solutionType}} </div>
      </div>
      <div class="session mini-24 middle-12">
        <div class="sessionName">描述: </div>
        <div class="sessionCont">{{solutionDescription}}</div>
      </div>
      <div class="session mini-24 autoArea">
        <div class="sessionName">方案范围:</div>
        <div class="gridArea">
          <marvel-grid :titles="titles4SelectNodes"
                       :rows="rows4SelectNodes"
                       :limit="limit4SelectNodes"
                       theme="dark"></marvel-grid>
        </div>
      </div>
    </div>
    <div class="downArea">
      <div class="btnArea">
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="查看"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClickView"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="提交"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClickSubmit"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="撤销"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClickRevoke"></marvel-icon-txt-button>
        <marvel-icon-txt-button size="normal" classCustom="classCustom1"
                                label="删除"
                                icon="icon-upload"
                                theme="dark"
                                v-on:onClick="onClickDel"></marvel-icon-txt-button>
      </div>

    </div>
  </div>
</template>

<script>
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid";
  import MarvelFrame from "@/walle/widget/frame/MarvelFrame";
  import MarvelIconTxtButton from "@/walle/widget/button/MarvelIconTxtButton";
  import MarvelRouter from "@/walle/component/router";

  export default {
    components: {
      MarvelIconTxtButton,
      MarvelFrame,
      MarvelGrid,
      MarvelPrimaryButton,
      MarvelRouter
    },
    name: "SolutionSummary",
    props: ["showSummaryPanel"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region solutionSummary
        solutionName: '',
        solutionUserName: '',
        solutionType: '',
        solutionDescription: '',
        //#endregion
        //#region selectNodes
        titles4SelectNodes: [{
          label: "网元名称",
          width: "100%"
        }],
        skip4SelectNodes: 0,
        limit4SelectNodes: 20,
        rows4SelectNodes: [],
        //#endregion
      };
    },
    mounted: function () {

    },
    methods: {
      //#region inner
      onClickView: function(){
          if(this.solutionType == "节点式环插"){
            MarvelRouter.to(this.$router, "SolutionDetails", {name: this.solutionName});
          }
          else if(this.solutionType == "单站"){
            MarvelRouter.to(this.$router, "SolutionDetails4Single", {name: this.solutionName});
          }
          else if(this.solutionType == "链路式环插"){
            MarvelRouter.to(this.$router, "SolutionDetails4LinkInsert", {name: this.solutionName});
          }
          else if(this.solutionType == "端到端搬迁"){
            MarvelRouter.to(this.$router, "SolutionDetails4E2EInsert", {name: this.solutionName});
          }
      },
      onClickSubmit: function(){
        alert("onClickSubmit");
      },
      onClickRevoke: function(){
        alert("onClickSubmit");
      },
      //#endregion
      //#region callback

      //#endregion
      //#region 3rd
      setData: function(oSummary){
        this.solutionName = oSummary.solutionName;
        this.solutionUserName = oSummary.solutionUserName;
        this.solutionType = oSummary.solutionType;
        this.solutionDescription = oSummary.solutionDescription;
        this.rows4SelectNodes = [];
        this.rows4SelectNodes = this.rows4SelectNodes.concat(oSummary.rows4SelectNodes);
      },
      onClickDel: function(){
        this.$emit("onClickDel", this.solutionName);
      },
      //#endregion
    }
  }

</script>

<style scoped>
  .solutionSummaryWrapper{
    width:100%;
    height:100%;
  }

  .topArea{
    height:calc(100% - 62px);
    padding-top: 20px;
    box-sizing: border-box;
  }
  .session{
    margin-bottom: 20px;
    overflow: hidden;
  }
  .sessionName{
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    width:100px;
    color: #bdc1dd;
    float: left;
  }
  .sessionCont{
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    width: calc(100% - 100px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
    color: #bdc1dd;
  }
  .autoArea{
    height:calc(100% - 160px);
  }
  .gridArea{
    width: 100%;
    height:100%;
    padding-top: 30px;
    box-sizing: border-box;
  }

  .downArea{
    height: 62px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .btnArea{
    float: right;
  }
  .classCustom1{
    margin-left: 20px;
  }
</style>
