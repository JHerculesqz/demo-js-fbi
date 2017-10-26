<template>
  <div id="app">
    <div class="header">
      <div class="logo"></div>
      <ul>
        <li>
          <router-link :to="{name:'ImportEx'}" exact>脚本解析</router-link>
        </li>
        <li>
          <router-link :to="{name:'Topo'}" exact>网络还原</router-link>
        </li>
        <li>
          <router-link :to="{name:'Analysis'}" exact>现网分析</router-link>
        </li>
        <li>
          <router-link :to="{name:'Plan'}" exact>网络规划</router-link>
        </li>
        <li>
          <router-link :to="{name:'SolutionMgr'}" exact>网络设计</router-link>
        </li>
        <!--<li>-->
        <!--<router-link :to="{name:'Test4'}" exact>对比分析</router-link>-->
        <!--</li>-->
        <!--<li>-->
        <!--<router-link :to="{name:'Test5'}" exact>割接分析</router-link>-->
        <!--</li>-->
      </ul>
      <div class="userInfoArea">
        <div class="projectInfo">{{projectInfo}}</div>
        <div class="ban"></div>
        <div class="userInfoDropDown">
          <marvel-menu-drop-down :menus="menus"
                                 height="50px"
                                 v-on:clickSubMenu="clickSubMenu"></marvel-menu-drop-down>
        </div>
        <div class="areaDropDownWrapper">
          <div class="areaDropDown">
            <marvel-drop-down-button ref="refDropDownButton"
                                     disable=""
                                     theme="dark"
                                     width="100%"
                                     v-on:onClick="onClickDropDownButton"></marvel-drop-down-button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import MarvelRouter from "@/walle/component/router";
  import MarvelMenuDropDown from "@/walle/widget/menudropdown/MarvelMenuDropDown";
  import MarvelDropDownButton from "@/walle/widget/button/MarvelDropDownButton";

  export default {
    components: {
      MarvelDropDownButton,
      MarvelMenuDropDown

    },
    name: 'app',
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region rightMenu
        projectInfo: "",
        //#region menuDropdown
        menus: {
          mainMenu: {
            icon: "icon-user",
            label: "s00290253"
          },
          subMenu: [{
            icon: "icon-user",
            label: "我的工作台"
          }, {
            icon: "icon-user",
            label: "日志"
          }, {
            icon: "icon-user",
            label: "上次打开"
          }, {
            icon: "icon-user",
            label: "我的意见"
          }, {
            icon: "icon-user",
            label: "English"
          }, {
            icon: "icon-user",
            label: "注销"
          }]
        },
        //#endregion
        //#region dropDown
        items: [{
          label: "中国",
          icon: ""
        }, {
          label: "罗马尼亚",
          icon: ""
        }, {
          label: "德国",
          icon: ""
        }, {
          label: "俄罗斯",
          icon: ""
        }, {
          label: "墨西哥",
          icon: ""
        }, {
          label: "巴西",
          icon: ""
        }, {
          label: "南非",
          icon: ""
        }],
        //#endregion
        //endregion
      };
    },
    mounted: function () {
      var self = this;
      this._getRightInfo();
    },
    methods: {
      //#region inner
      onClickDropDownButton: function () {
        alert(this.$refs.ref14.getSelectItem());
      },
      clickSubMenu: function (strLabel) {
        alert(strLabel);
      },
      _getRightInfo:function(){
        if(this.debug){
          this.projectInfo = "墨西哥Telmex地震保障项目";
          this.menus.mainMenu.label = "习主席";
        }
        else{
          //TODO：获取projectInfo
          //TODO：获取用户信息；
        }
        this.$refs.refDropDownButton.init(this.items, "中国");
      }
      //#endregion
    },
    watch: {
      '$route' (to, from) {
        var self = this;
        if (this.debug) {

        }
        else {

        }
      }
    }
  }
</script>

<style>
  .dpn {
    display: none;
  }

  body {
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #1e1f37;
  }

  #app {
    width: 100%;
    height: 100%;
    background-color: #1e1f37;
    position: relative;
  }

  .header {
    height: 50px;
    background-color: #1a1827;
  }

  .header .logo {
    width: 240px;
    height: 100%;
    float: left;
    background: url("/static/demo/logo.png") no-repeat center;
    background-size: 70%;
  }

  .header ul {
    margin: 0;
    padding: 0
  }

  .header ul li {
    float: left;
    margin-right: 15px;
    margin-top: 0;
    list-style-type: none;;
  }

  .header ul li a {
    line-height: 50px;
    color: #999;
    font-size: 16px;
    padding: 0 10px;
    text-decoration: none;
  }

  .header ul li .active {
    color: #fff;
  }

  .header .userInfoArea {
    height: 100%;
    float: right;
    margin-right: 20px;
  }

  .header .userInfoArea .userInfoItem {
    float: left;

    margin-right: 20px;
  }

  .header .userInfoArea .userInfoItem .userInfoIcon {
    float: left;
    font-size: 24px;
    line-height: 50px;
    margin-right: 10px;
    color: #FFFFFF;
  }

  .header .userInfoArea .userInfoItem .userInfoName {
    float: left;
    line-height: 50px;
    font-size: 14px;
    color: #ffffff;
  }

  .content {
    height: calc(100% - 50px);
    position: relative;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-430px);
    opacity: 0;
  }

  /*shiling start*/
  .projectInfo {
    color: #ffffff;
    height: 100%;
    line-height: 60px;
    font-size: 12px;
    float: left;
  }

  .ban {
    float: left;
    height: 20px;
    width: 1px;
    margin: 20px 14px;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .userInfoDropDown {
    float: left;
    height: 100%;
    padding-right: 10px;
  }

  .areaDropDownWrapper{
    float: left;
    height: 100%;
    width: 140px;
    position: relative;
  }
  .areaDropDown {
    position: absolute;
    top:0;
    width: 100%;
    padding-top: 9px;
    padding-right: 10px;
    left: 0;
    z-index: 2;
  }
</style>
