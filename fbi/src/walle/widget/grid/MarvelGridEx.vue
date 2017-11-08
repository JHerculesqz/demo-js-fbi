<!--
功能说明：
1.props说明
titles：表格的表头
rows：表格列
limit：每页显示的行数
theme: 主题
gridId: 表格控件实例的唯一标识
activeColor：行的激活颜色，默认值#395297
editCellFinished: 可编辑单元格编辑完成后的回调
sortRowsFunc: 自定义排序的回调，不传的话，按照默认的规则排序
2.支持的列的类型
text: 纯文本
input: 可编辑文本
icon: 可点击的图表，一个单元格中可以有多个
textIcon：带文字的可点击图表，一个单元格中只能有一个
dropdown：下拉选项
checkBox：多选框，不能和radioBox同时存在
radioBox: 单选框，不能和checkBox同时存在
3.支持列的排序
在表头列中增加"orderBy: true"表示这一列支持排序
-->
<template>
  <div class="gridWrapper" :class="[theme]">
    <div class="grid" :class="{ empty: 0 == rows.length }">
      <table class="gridCont" cellspacing="0" cellpadding="0" border="0">
        <thead>
        <tr>
          <template v-for="(title,index) in titles">
            <template v-if="title.visible">
              <th class="gridTitle" :style="{ width: title.width }">
                <div v-if="title.type == 'checkBox'" class="checkBoxWrapper">
                  <div class="checkBox">
                    <input type="checkbox" :id="gridId"
                           @change.stop="onTitleCheckboxChange(title, $event)"
                           :checked="titleCheckboxChecked">
                    <label :for="gridId"></label>
                  </div>
                  <label :for="gridId" class="checkBoxLabel" v-html="title.label"></label>
                </div>
                <div v-else-if="title.type == 'radioBox'">
                </div>
                <div v-else :class="{canClick: title.orderBy === true}" @click.stop="onClickTitle(title)">
                  <span v-html="title.label"></span>
                  <span v-if="showOrderBy(title)" :class="orderByClass(title)"></span>
                </div>
              </th>
            </template>
          </template>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row,index) in rowsInPage" @click.stop="onClickRow(row)">
          <template v-for="title in titles">
            <template v-if="title.visible">
              <td v-if="title.type == 'checkBox'" :style="getTdStyle(title, row)">
                <div class="checkBoxWrapper">
                  <div class="checkBox">
                    <input type="checkbox" :id="getCellValueByKey('id', row)"
                           @change="onRowCheckboxChange(row, $event)"
                           :checked="rowCheckboxChecked(row)">
                    <label :for="getCellValueByKey('id', row)"></label>
                  </div>
                  <label :for="getCellValueByKey('id', row)" v-html="getCellValueByKey(title.key, row)"></label>
                </div>
              </td>
              <td v-if="title.type == 'radioBox'" :style="getTdStyle(title, row)">
                <div class="radioWrapper" @click.stop=";">
                  <div class="radio">
                    <input type="radio" :id="getCellValueByKey('id', row)"
                           :value="getCellValueByKey('id', row)"
                           v-model="radioSelect"
                           @change.stop="onRowRadioboxChange(row, $event)"/>
                    <label :for="getCellValueByKey('id', row)"></label>
                  </div>
                </div>
              </td>
              <td v-if="title.type == 'text'" :style="getTdStyle(title, row)">
                <div v-html="getCellValueByKey(title.key, row)" :title="getCellValueByKey(title.key, row)"></div>
              </td>
              <td v-if="title.type == 'input'" :style="getTdStyle(title, row)">
                <div class="inputWrapper">
                  <div class="radio">
                    <input type="text" class="inputDefault"
                           :value="getCellValueByKey(title.key, row)"
                           @click.stop=";"
                           @keyup.enter="editRowFinished(title.key, row, $event)">
                  </div>
                </div>
              </td>
              <td v-if="title.type == 'icon'" :style="getTdStyle(title, row)">
                 <span class="iconOnly"
                       v-for="icon in getCellValueByKey(title.key, row)"
                       :class="[icon.value]"
                       :style="{ color: icon.color }"
                       @click.stop="onIconClick(title.key, row, icon)">
                 </span>
              </td>
              <td v-if="title.type == 'textIcon'" :style="getTdStyle(title, row)">
                <div class="textIcon" @click.stop="onClickTextIcon(title.key, row)">
                  <span class="icon"
                        :class="[getCellValueByKey(title.key, row)]"
                        :style="{ color: _getCell(title.key, row).color }"></span>
                  <span v-html="_getCell(title.key, row).label" :title="_getCell(title.key, row).label"></span>
                </div>
              </td>
              <td v-if="title.type == 'dropdown'" :style="getTdStyle(title, row)">
                <select class="customerSelect"
                        @click.stop=";"
                        @change.stop="onOptionChange(title.key, row, $event)">
                  <option class="customerSelectOption"
                          v-for="item in getCellValueByKey(title.key, row)"
                          :selected="item.selected == true"
                          :value="item.value"
                          v-html="item.value"></option>
                </select>
              </td>
            </template>
          </template>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="footArea">
      <div class="foot">
        <div class="pageSwitch">
          <div class="item icon-marvelIcon-04" @click.stop="onPreClick"></div>
          <div class="item" v-for="item in pagination"
               :class="{ current: curPageIndex == item }"
               @click.stop="onPageItemClick(item)">{{ item }}
          </div>
          <div class="item icon-marvelIcon-02" @click.stop="onNextClick"></div>
        </div>
        <!--<div class="text">跳转</div><input class="pageDrop"><div class="text">页</div>-->
        <div class="text">共{{ rows.length}}条</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'MarvelGridEx',
    props: {
      titles: Array,
      rows: Array,
      limit: Number,
      theme: String,
      gridId: [String, Number],
      activeColor: {
        type: String,
        default: "#395297" //浅色 #c6e3ff
      },
      editCellFinished: Function,
      sortRowsFunc: Function
    },
    data: function () {
      return {
        totalPageCount: 1,
        curPageIndex: 1,
        limitEx: this.limit || 5,
        skip: 0,
        rowsInPage: [],
        selectRowIds: [],
        radioSelect: "",
        activeIds: [],
        orderBy: {
          key: "",
          order: 1 //1表示升序排列，-1表示降序排列
        }
      }
    },
    created() {
      this._preHandleRowData();
    },
    computed: {
      pagination: function () {
        var arrRes = [];

        //0.get this.totalPageCount/curPageIndex
        this.totalPageCount = Math.ceil(this.rows.length / this.limitEx);
        for (var i = 1; i <= this.totalPageCount; i++) {
          arrRes.push(i);
        }

        return arrRes;
      },
      titleCheckboxChecked() {
        return this.selectRowIds.length > 0;
      }
    },
    methods: {
      //region inner
      //region 数据处理
      _preHandleTitleData() {

      },
      _preHandleRowData() {
        //清空checkBox/radioBox缓存
        this.selectRowIds.splice(0);
        this.radioSelect = "";

        //设置checkbox/radio的勾选
        this.titles.forEach((oTitle) => {
          if (oTitle.type == "checkBox") {
            this.rows.forEach((oRow) => {
              let oCheckBoxCell = this._getCell(oTitle.type, oRow);
              if (oCheckBoxCell.checked) {
                let strId = this.getCellValueByKey("id", oRow);
                this.selectRowIds.push(strId);
              }
            });
          }
          if (oTitle.type == "radioBox") {
            this.rows.forEach((oRow) => {
              let oRadioBoxCell = this._getCell(oTitle.type, oRow);
              if (oRadioBoxCell.checked) {
                let strId = this.getCellValueByKey("id", oRow);
                this.radioSelect = strId;
              }
            });
          }
        });
        //计算需要显示的rows
        this._calcRows4Show();
      },
      _calcRows4Show() {
        //1.calc this.skip
        this.skip = (this.curPageIndex - 1) * this.limitEx;

        //2.calc this.rowsInPage
        var iTmpRowCount = this.curPageIndex * this.limitEx;
        if (iTmpRowCount <= this.rows.length) {
          this.rowsInPage = this.rows.slice(this.skip, this.skip + this.limitEx);
        }
        else {
          this.rowsInPage = this.rows.slice(this.skip, this.rows.length);
        }
      },
      //endregion
      //region title
      showOrderBy(oTitle) {
        return this.orderBy.key === oTitle.key;
      },
      orderByClass(oTitle) {
        if (this.orderBy.order === 1) {
          return "icon-marvelIcon-01";
        }
        else {
          return "icon-marvelIcon-03";
        }
      },
      onClickTitle(oTitle) {
        //update
        if (this.orderBy.key === oTitle.key) {
          this.orderBy.order = -this.orderBy.order;
        }
        else {
          this.orderBy.key = oTitle.key;
          this.orderBy.order = 1;
        }
        //sort
        this.sortRows(oTitle.key);
      },
      onTitleCheckboxChange(oTitle, oEvent) {
        let isChecked = oEvent.target.checked;
        if (isChecked) {
          this.rows.forEach((oRow) => {
            let strId = this.getCellValueByKey("id", oRow);
            let index = this.selectRowIds.indexOf(strId);
            if (index == -1) {
              this.selectRowIds.push(strId);
            }
          });
        }
        else {
          this.selectRowIds.splice(0);
        }
        //update selected prop
        this.rows.forEach((oRow) => {
          let oCell = this._getCell("checkBox", oRow);
          oCell.checked = isChecked;
        });
        //event
        this.$emit("onTitleCheckOrUncheck", isChecked);
      },
      //endregion
      //region row
      getCellValueByKey(strKeyValue, oRow) {
        let oCell = this._getCell(strKeyValue, oRow);
        if (oCell) {
          return oCell.value;
        }
      },
      _getCell(strKeyValue, oRow) {
        for (let i = 0, len = oRow.length; i < len; i++) {
          let oCell = oRow[i];
          if (oCell.key == strKeyValue) {
            return oCell;
          }
        }
      },
      sortRows() {
        if (this.sortRowsFunc) {
          this.sortRowsFunc(this.orderBy.key, this.orderBy.order, this.rows);
        }
        else {
          this.rows.sort((oRow1, oRow2) => {
            let strVal1 = this.getCellValueByKey(this.orderBy.key, oRow1);
            let strVal2 = this.getCellValueByKey(this.orderBy.key, oRow2);
            if (strVal1 < strVal2) {
              return -1 * this.orderBy.order;
            }
            else if (strVal1 == strVal2) {
              return 0;
            }
            else {
              return 1 * this.orderBy.order;
            }
          });
        }
      },
      onClickRow(oRow) {
        this.$emit("onClickRow", oRow);
      },
      getTdStyle(oTitle, oRow) {
        let oStyle = {
          width: oTitle.width
        };
        let strId = this.getCellValueByKey("id", oRow);
        if (this.activeIds.indexOf(strId) > -1) {
          Object.assign(oStyle, {
            "background-color": this.activeColor
          });
        }
        return oStyle;
      },
      //region checkbox
      onRowCheckboxChange(oRow, oEvent) {
        let isChecked = oEvent.target.checked;
        let strId = this.getCellValueByKey("id", oRow);
        let index = this.selectRowIds.indexOf(strId);
        if (isChecked) {
          if (index == -1) {
            this.selectRowIds.push(strId);
          }
        }
        else {
          if (index > -1) {
            this.selectRowIds.splice(index, 1);
          }
        }
        //update selected prop
        let oCell = this._getCell("checkBox", oRow);
        oCell.checked = isChecked;
        //event
        this.$emit("onRowCheckOrUnCheck", oRow, isChecked);
      },
      rowCheckboxChecked(oRow) {
        let strId = this.getCellValueByKey("id", oRow);
        return this.selectRowIds.indexOf(strId) > -1;
      },
      //endregion
      //region radioBox
      onRowRadioboxChange(oRow, oEvent) { //该函数在改行的radio被勾选的时候触发
        let strId = this.getCellValueByKey("id", oRow);

        //update selected prop
        this.rows.forEach((oRowEx) => {
          let strIdEx = this.getCellValueByKey("id", oRowEx);
          let oCell = this._getCell("radioBox", oRowEx);
          if (strIdEx === strId) {
            oCell.checked = true;
          }
          else {
            oCell.checked = false;
          }
        });
        //event
        this.$emit("onRowRadioCheck", oRow);
      },
      //endregion
      //region icon
      onIconClick(strKeyValue, oRow, oIcon) {
        let oCell = this._getCell(strKeyValue, oRow);
        this.$emit("onIconClick", oRow, oCell, oIcon);
      },
      //endregion
      //region input
      editRowFinished(strKeyVal, oRow, oEvent) {
        let oCell = this._getCell(strKeyVal, oRow);
        let oOldVal = oCell.value;
        let oNewVal = oEvent.target.value;
        if (this.editCellFinished) {
          this.editCellFinished(oRow, oCell, oOldVal, oNewVal, () => {
            oCell.value = oNewVal; //外界对值进行校验，校验通过调用该回调
          });
        }
      },
      //endregion
      //region dropdown
      onOptionChange(strKeyVal, oRow, oEvent) {
        let oCell = this._getCell(strKeyVal, oRow);
        let oValue = oCell.value;
        let strNewValue = oEvent.target.value;
        let strOldOption = oValue.filter((oOption) => {
          return oOption.selected === true;
        });
        oValue.forEach((oOption) => {
          if (oOption.value == strNewValue) {
            this.$set(oOption, "selected", true);
          }
          else {
            this.$set(oOption, "selected", false);
          }
        });
        this.$emit("onOptionChange", oRow, oCell, strOldOption[0].value, strNewValue);
      },
      //endregion
      //region textIcon
      onClickTextIcon(strKeyVal, oRow) {
        let oCell = this._getCell(strKeyVal, oRow);
        this.$emit("onClickTextIcon", oRow, oCell);
      },
      //endregion
      //endregion
      //region page
      _resetCurPage() {
        this.curPageIndex = 1;
      },
      onPreClick: function () {
        if (this.curPageIndex > 1) {
          this.curPageIndex -= 1;
        }
      },
      onPageItemClick: function (iCurPage) {
        this.curPageIndex = iCurPage;
      },
      onNextClick: function () {
        if (this.curPageIndex < this.totalPageCount) {
          this.curPageIndex += 1;
        }
      },
      //endregion
      //endregion

      //region callback

      //endregion

      //region 3rd
      setRowColor(strRowId, bCancleOtherRowActive) {
        let index = this.activeIds.indexOf(strRowId);
        if (bCancleOtherRowActive) {
          this.activeIds.splice(0);
        }
        if (index == -1) {
          this.activeIds.push(strRowId);
        }
      },
      removeRowColor(strRowId) {
        let index = this.activeIds.indexOf(strRowId);
        if (index > -1) {
          this.activeIds.splice(index, 1);
        }
      },
      getSelectRows4Checkbox() {
        let arrSelectRows = this.rows.filter((oRow) => {
          let oCell = this._getCell("checkBox", oRow);
          return oCell.checked === true;
        });
        return arrSelectRows;
      },
      getSelectRow4Radiobox() {
        let arrSelectRows = this.rows.filter((oRow) => {
          let oCell = this._getCell("radioBox", oRow);
          return oCell.checked === true;
        });
        if (arrSelectRows.length) {
          return arrSelectRows[0];
        }
      },
      getRows() {
        return this.rows;
      },
      removeRow(strRowId) {
        let index = -1;
        for (let i = 0, len = this.rows.length; i < len; i++) {
          let strId = this.getCellValueByKey("id", this.rows[i]);
          if (strRowId === strId) {
            index = i;
            break;
          }
        }
        if (index > -1) {
          this.rows.splice(index, 1);
        }
      }
      //endregion
    },
    watch: {
      rows: {
        handler(oNewRows, oOldRows) {
          this._preHandleRowData();
          this._resetCurPage();
        },
        deep: false
      },
      curPageIndex(iNewVal, iOldVal) {
        this._calcRows4Show();
      }
    }
  }
</script>

<style scoped>
  .gridWrapper {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .gridWrapper .grid {
    height: calc(100% - 32px);
  }

  .gridWrapper .empty {
    background: url("/static/walle/emptyTip2.png") no-repeat center;
    background-size: 14%;
  }

  .gridWrapper .grid .gridCont {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    border: 1px solid #ffffff;
    box-sizing: border-box;
  }

  table thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  table thead .gridTitle {

  }

  table thead .canClick:hover {
    cursor: pointer;
    color: #3399ff;
  }

  .gridWrapper .grid .gridCont thead {
    padding-right: 8px;
    position: relative;
    box-sizing: border-box;
  }

  .gridWrapper .grid .gridCont thead tr th {
    height: 40px;
    background-color: #e1e4e5;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
    padding: 0 8px;
    position: relative;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  .gridWrapper .grid .gridCont thead tr th:last-child:after {
    content: "";
    height: 40px;
    background-color: #e1e4e5;
    width: 8px;
    display: inline-block;
    position: absolute;
    top: 0;
    right: -8px;
  }

  .gridWrapper .grid .gridCont thead tr .titleIcon {
    float: right;
  }

  .gridWrapper .grid .gridCont tbody {
    width: 100%;
    height: calc(100% - 42px);
    display: block;
    overflow-x: auto;
    overflow-y: scroll;
  }

  .gridWrapper .grid .gridCont tbody tr td {
    color: #666;
    height: 40px;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    font-size: 16px;
  }

  .gridWrapper .grid .gridCont tbody tr .icon {
    margin-right: 8px;
  }

  .gridWrapper .grid .gridCont tbody tr .iconOnly {
    float: left;
    cursor: pointer;
    margin-right: 10px;
  }

  .gridWrapper .grid .gridCont tbody tr .iconOnly:hover {
    color: #3399ff !important;
  }

  .gridWrapper .grid .gridCont tbody tr .textIcon:hover {
    cursor: pointer;
    color: #3399ff !important;
  }

  .gridWrapper .grid .gridCont tbody tr:nth-child(odd) {
    background-color: #f7f7f7;
  }

  .gridWrapper .grid .gridCont tbody tr:hover {
    background-color: #eaf6f9;
  }

  .gridWrapper .grid tr td .customerSelect {
    width: 100%;
    border-radius: 2px;
    border: 1px solid #cccccc;
    color: #666;
    background-color: transparent;
  }

  .gridWrapper .grid tr td .customerSelect:hover {
    border: 1px solid #3399ff;
  }

  .gridWrapper .grid tr td .customerSelectOption {
    color: #666;
    background-color: #ffffff;
  }

  .gridWrapper .grid tr td .customerSelectOption:hover {
    color: #3399ff;
    background-color: #f5f6f7;
  }

  .gridWrapper .footArea {
    height: 32px;
    padding: 4px;
    box-sizing: border-box;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .gridWrapper .footArea .foot {
    display: inline-block;
    overflow: hidden;
    height: 100%;
  }

  .gridWrapper .footArea .foot .pageSwitch {
    float: left;
  }

  .gridWrapper .footArea .foot .pageSwitch .item {
    height: 100%;
    float: left;
    line-height: 26px;
    color: #666;
    padding: 0 4px;
    maring: 0 4px;
    font-size: 12px;
    cursor: pointer;
  }

  .gridWrapper .footArea .foot .pageSwitch .item:hover {
    color: #fff;
    background-color: #60b0ff;
  }

  .gridWrapper .footArea .foot .pageSwitch .current {
    color: #fff;
    background-color: #3399ff !important;
  }

  .gridWrapper .footArea .foot .pageDrop {
    float: left;
    padding: 0 10px;
    height: 22px;
    width: 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    line-height: 22px;
    font-size: 14px;
    color: #333;
    outline: none;
  }

  .gridWrapper .footArea .foot .text {
    height: 100%;
    float: left;
    line-height: 26px;
    color: #666;
    margin: 0 4px;
    padding: 0 4px;
    font-size: 12px;
  }

  .dark {
    background-color: #161C36;
  }

  .dark .grid {
  }

  .dark .empty {
  }

  .dark .grid .gridCont {
    border: 1px solid rgb(128, 128, 128);
  }

  .dark .grid .gridCont thead {
  }

  .dark .grid .gridCont thead tr th {
    background-color: #2a3255;
    color: #ffffff;
    border-bottom: 1px solid rgb(128, 128, 128);
    border-right: 1px solid rgb(128, 128, 128);
  }

  .dark .grid .gridCont thead tr th:last-child:after {
    background-color: #2a3255;
  }

  .dark .grid .gridCont thead tr .titleIcon {
  }

  .dark .grid .gridCont tbody {
  }

  .dark .grid .gridCont thead .canClick:hover {
    color: #3dcca6;
  }

  .dark .grid .gridCont tbody tr td {
    color: #ffffff;
    border-bottom: 1px solid rgb(128, 128, 128);
    border-right: 1px solid rgb(128, 128, 128);
  }

  .dark .grid .gridCont tbody tr td:last-child {
    border-right: none;
  }

  .dark .grid .gridCont tbody tr td:last-child {
    color: #ffffff;
    border-right: none;
  }

  .dark .grid .gridCont tbody tr .icon {
  }

  .dark .grid .gridCont tbody tr .iconOnly {
  }

  .dark .grid .gridCont tbody tr .iconOnly:hover {
    color: #3399ff;
  }

  .dark .grid .gridCont tbody tr:nth-child(odd) {
    background-color: #161C36;
  }

  .dark .grid .gridCont tbody tr:nth-child(even) {
    background-color: #263257;
  }

  .dark .grid .gridCont tbody tr:hover {
    background-color: #1d3b60;
  }

  .dark .grid tr td .customerSelect {
    border: 1px solid #8b90b3;
    color: #ffffff;
    background-color: transparent;
  }

  .dark .grid tr td .customerSelect:hover {
    border: 1px solid #3399ff;
  }

  .dark .grid tr td .customerSelectOption {
    color: #ffffff;
    background-color: #1e1f36;
  }

  .dark .grid tr td .customerSelectOption:hover {
    color: #ffffff;
    background-color: #66b3ff;
  }

  .dark .footArea {
    border-top: none;
    border-bottom: 1px solid rgb(128, 128, 128);
  }

  .dark .footArea .foot {
  }

  .dark .footArea .foot .pageSwitch {
  }

  .dark .footArea .foot .pageSwitch .item {
    color: #ffffff;
  }

  .dark .footArea .foot .pageSwitch .item:hover {
    color: #fff;
    background-color: #60b0ff;
  }

  .dark .footArea .foot .pageSwitch .current {
    color: #fff;
    background-color: #3399ff !important;
  }

  .dark .footArea .foot .pageDrop {
    border: 1px solid #ccc;
    color: #333;
  }

  .dark .footArea .foot .text {
    color: #ffffff;
  }

  /*sl start*/
  /*check start*/
  * {
    box-sizing: border-box
  }

  .checkBoxWrapper {
    display: inline-block;
  }

  .dpn {
    display: none;
  }

  .checkBoxWrapper .checkBox {
    width: 16px;
    height: 16px;
    position: relative;
    float: left;
  }

  .checkBoxWrapper .checkBox input[type=checkbox] {
    /*pos*/
    margin: 0;
    padding: 0;
    /*style*/
    visibility: hidden;
  }

  .checkBoxWrapper .checkBox input[type=checkbox]:checked + label:after {
    /*pos*/
    /*style*/
    opacity: 1;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
  }

  .checkBoxWrapper .checkBox input[type=checkbox]:checked + label {
    /*pos*/
    /*style*/
    background: #3399ff;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .checkBoxWrapper .checkBox input[type=checkbox]:disabled + label:after {
    /*pos*/
    /*style*/
    border: 2px solid #999999;
    border-top: none;
    border-right: none;
  }

  .checkBoxWrapper .checkBox input[type=checkbox]:disabled + label {
    /*pos*/
    /*style*/
    border: 1px solid #999999;
    background-color: #f0f0f0;
    pointer-events: none;
  }

  .checkBoxWrapper .checkBox label {
    /*pos*/
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    /*style*/
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 2px;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
  }

  .checkBoxWrapper .checkBox label:hover {
    border: 1px solid #60b0ff;
  }

  .checkBoxWrapper .checkBox label:after {
    /*pos*/
    position: absolute;
    width: 7px;
    height: 4px;
    top: 3px;
    left: 2px;
    /*style*/
    opacity: 0;
    content: '';
    background: transparent;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .checkBoxWrapper .checkBoxLabel {
    margin: 0 0 0 5px;
    padding: 0;
    float: left;
    font-size: 14px;
    line-height: 16px;
  }

  /*check end*/
  /*radio start*/
  .radioWrapper {
    display: inline-block;
  }

  .dpn {
    display: none;
  }

  .radioWrapper .radio {
    width: 16px;
    height: 16px;
    position: relative;
    float: left;
  }

  .radioWrapper .radio input[type=radio] {
    /*pos*/
    margin: 0;
    padding: 0;
    /*style*/
    visibility: hidden;
  }

  .radioWrapper .radio input[type=radio]:checked + label:after {
    /*pos*/
    /*style*/
    opacity: 1;
    border-top: none;
    border-right: none;
  }

  .radioWrapper .radio input[type=radio]:checked + label {
    /*pos*/
    /*style*/
    background-color: #3399ff;
  }

  .radioWrapper .radio input[type=radio]:disabled + label:after {
    /*pos*/
    /*style*/
    background-color: #aaa;
  }

  .radioWrapper .radio input[type=radio]:disabled + label {
    /*pos*/
    /*style*/
    border: 1px solid #999999;
    background-color: #f0f0f0;
    pointer-events: none;
  }

  .radioWrapper .radio label {
    /*pos*/
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    /*style*/
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 100%;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
  }

  .radioWrapper .radio label:hover {
    border: 1px solid #60b0ff;
  }

  .radioWrapper .radio label:after {
    /*pos*/
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    top: 4px;
    left: 4px;
    /*style*/
    opacity: 0;
    content: '';
    background-color: #fff;
  }

  /*radio end*/
  /*input start*/
  .inputWrapper {
    width: 100%;
  }

  .inputWrapper .inputDefault {
    padding: 0 10px;
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    outline: none;
  }

  .inputWrapper .inputDefault:hover, .inputWrapper .inputDefault:focus {
    border: 1px solid #3399ff;
  }

  .inputWrapper .errorTip {
    color: #ff4c4c;
    line-height: 36px;
    font-size: 14px;
    display: none;
  }

  .inputWrapper .errorTip:before {
    margin-right: 10px;
  }

  .error .inputDefault {
    border: 1px solid #ff4c4c !important;
  }

  .error .errorTip {
    display: block;
  }

  .disable .inputDefault {
    background-color: #f0f0f0;
    pointer-events: none;
  }

  .dark {
    background-color: transparent;
  }

  .dark .inputDefault {
    border: 1px solid #8b90b3;
    font-size: 14px;
    color: #ffffff;
    background-color: transparent;
  }

  .mini .inputDefault {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
  }

  /*input end*/
  /*sl end*/
</style>
