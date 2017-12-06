<template>
  <div class="marvelGridPriorityWrapper" v-bind:class="themeClass">
    <div class="priorityLeftPart">
      <div class="priorityTitle">{{title}}</div>
      <div class="priorityItem"
           v-for="(item, index) in list"
           v-on:click="onClickItem(item, index)"
           v-bind:class="{isSelected:currentSelectItemIndex == index}">
        <div class="priorityItemIndex">{{index}}</div>
        <div class="priorityItemName">{{item.name}}</div>
      </div>
    </div>
    <div class="priorityRightPart">
      <div class="changePriorityBtns">
        <div class="changePriorityBtn icon-marvelIcon-05" v-on:click="onClickToFirst"></div>
        <div class="changePriorityBtn icon-marvelIcon-22" v-on:click="onClickUp"></div>
        <div class="changePriorityBtn icon-marvelIcon-24" v-on:click="onClickDown"></div>
        <div class="changePriorityBtn icon-marvelIcon-07" v-on:click="onClickToLast"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'MarvelGridPriority',
    props: ["title", "list", "theme"],
    data: function () {
      return {
        themeClass:"",
        currentSelectItemIndex:0
      }
    },
    mounted:function(){
      if(this.theme == "dark"){
        this.themeClass = "themeDark"
      }else{
        this.themeClass = "themeNormal"
      }
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback
      onClickItem: function (oItem, index) {
        this.currentSelectItemIndex = index;
      },
      onClickToFirst: function () {
        for(;;){
          if(this.list[this.currentSelectItemIndex-1]){
            this.onClickUp();
          }else{
            break;
          }
        }
      },
      onClickUp: function () {
        if(this.list[this.currentSelectItemIndex-1]){
          var oTemporaryListItemName = this.list[this.currentSelectItemIndex-1].name;
          this.list[this.currentSelectItemIndex-1].name = this.list[this.currentSelectItemIndex].name;
          this.list[this.currentSelectItemIndex].name = oTemporaryListItemName;

          var oTemporaryListItemId = this.list[this.currentSelectItemIndex-1].id;
          this.list[this.currentSelectItemIndex-1].id = this.list[this.currentSelectItemIndex].id;
          this.list[this.currentSelectItemIndex].id = oTemporaryListItemId;

          this.currentSelectItemIndex = this.currentSelectItemIndex - 1;
        }
      },
      onClickDown: function () {
        if(this.list[this.currentSelectItemIndex+1]){
          var oTemporaryListItemName = this.list[this.currentSelectItemIndex+1].name;
          this.list[this.currentSelectItemIndex+1].name = this.list[this.currentSelectItemIndex].name;
          this.list[this.currentSelectItemIndex].name = oTemporaryListItemName;

          var oTemporaryListItemId = this.list[this.currentSelectItemIndex+1].id;
          this.list[this.currentSelectItemIndex+1].id = this.list[this.currentSelectItemIndex].id;
          this.list[this.currentSelectItemIndex].id = oTemporaryListItemId;

          this.currentSelectItemIndex = this.currentSelectItemIndex + 1;
        }
      },
      onClickToLast: function () {
        for(;;){
          if(this.list[this.currentSelectItemIndex+1]){
            this.onClickDown();
          }else{
            break;
          }
        }
      }
      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>

  .themeNormal{
    --MarvelGridPriorityBorderColor:#d5d5d5;
    --MarvelGridPriorityBgColor:#ffffff;
    --MarvelGridPriorityTitleColor:#4d4d4d;
    --MarvelGridPriorityFontColor:#666666;
    --MarvelGridPriorityBtnBgColor:#3399ff;
  }

  .themeDark{
    --MarvelGridPriorityBorderColor:#8b90b3;
    --MarvelGridPriorityBgColor:#1e1f36;
    --MarvelGridPriorityTitleColor:#ffffff;
    --MarvelGridPriorityFontColor:#8b90b3;
    --MarvelGridPriorityBtnBgColor:#3dcca6;
  }

  .marvelGridPriorityWrapper{
    width: 100%;
    height: 100%;
    border: 1px solid var(--MarvelGridPriorityBorderColor);
    background-color: var(--MarvelGridPriorityBgColor);
    box-sizing: border-box;
  }
  .priorityLeftPart{
    width: calc(100% - 46px);
    height: 100%;
    float: left;
    border-right: 1px solid var(--MarvelGridPriorityBorderColor);
    box-sizing: border-box;
    overflow-y: auto;
  }
  .priorityTitle{
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    padding: 0 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 1px dashed var(--MarvelGridPriorityBorderColor);
    color: var(--MarvelGridPriorityTitleColor);
    text-align: center;
  }
  .priorityItem{
    height: 32px;
    border-bottom: 1px dashed var(--MarvelGridPriorityBorderColor);
  }
  .priorityItemIndex{
    width: 40px;
    height: 100%;
    float: left;
    border-right: 1px dashed var(--MarvelGridPriorityBorderColor);
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: var(--MarvelGridPriorityFontColor);
  }
  .priorityItemName{
    width: calc(100% - 42px);
    height: 100%;
    float: left;
    padding: 0 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 32px;
    font-size: 14px;
    color: var(--MarvelGridPriorityFontColor);
  }

  .isSelected{
    background-color: var(--MarvelGridPriorityBtnBgColor);
  }
  .isSelected .priorityItemIndex{color: #ffffff;}
  .isSelected .priorityItemName{color: #ffffff;}

  .priorityRightPart{
    width: 46px;
    float: left;
    height: 100%;
  }

  .changePriorityBtns{
    height: 184px;
    position: relative;
    top: 50%;
    margin-top: -92px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .changePriorityBtn{
    height: 26px;
    text-align: center;
    border-radius: 100%;
    background-color: var(--MarvelGridPriorityBtnBgColor);
    font-size: 12px;
    line-height: 26px;
    color: #ffffff;
    margin: 16px 0;
    cursor: pointer;
  }
</style>
