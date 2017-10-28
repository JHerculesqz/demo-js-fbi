(function($){
    $.MarvelTopoStage = function() {
        var self = this;

        //#region Const

        var ZOOM_SCALE = 1.15;
        var MIN_SCALE = 0.02;
        var BACKGROUND_SHAPE_ID = "oStageBackground";

        this.MODEL_EMPTY='';
        this.MODEL_CREATE_NODE = 'createNode';

        //#endregion

        //#region Fields

        this.model = self.MODEL_EMPTY;

        this.eventOptions = {
            //region node
            callbackOnNodeClick: function(oNode, oEvent){},
            //endregion
            //region nodeGroup
            callbackOnNodeGroupClick: function(oNodeGroup, oEvent){},
            //endregion
            //region linkGroup
            callbackOnLinkGroupClick: function(oLinkGroup, oEvent){},
            callbackOnLinkClick: function(oLink, oEvent){},
            //endregion
            //region stage
            callbackOnRightClick: function(oBuObj, iX, iY, oEvent){}, //oBuObj为background时,表示点击的是背景
            callbackOnPositionUpdate: function(bUpdate){}
            //endregion
        };

        //#endregion

        //#region init

        this.init = function(strId, iWidth, iHeight, oEventOptions, oTopo){
            //#region 1._initContainer

            _initContainer(strId, oTopo);

            //#endregion

            //#region 2.init oStage

            var oStage = new Konva.Stage({
                id: $.MarvelTopoStage.id++,
                container: strId,
                width: iWidth,
                height: iHeight,
                draggable: true
            });

            //init oStageRect
            var oStageLayer = new Konva.Layer({
                draggable: false,
                visible: true
            });
            oStage.add(oStageLayer);
            var oStageRect = new Konva.Rect({
                id: BACKGROUND_SHAPE_ID,
                x: 0,
                y: 0,
                //stroke: "white",
                width: oStage.getWidth(),
                height: oStage.getHeight()
            });
            oStageLayer.add(oStageRect);
            oTopo.Layer.reDraw(oStageLayer);
            oTopo.ins.layerBg = oStageLayer;

            //#endregion

            //#region 3.event

            //滚轮缩放
            _initEventWheel(strId, oStage, oTopo);
            //stage拖动
            _initEventDragend(oStage, oTopo);
            //放大、缩小网元
            _initEventAddMinus(oTopo);
            //点击画布
            _initEventClick(oStageRect, oTopo);
            //快捷键ctrl、esc
            _initEventCtrlPress(oTopo);
            _initEventEscPress(oTopo);
            //鼠标事件
            _initEventMouseDown(oStage, oTopo);
            _initEventMouseUp(oStage, oTopo);
            _initEventMouseMove(oStage, oTopo);
            _initEventMouseOver(oStage, oTopo);
            _initEventMouseOut(oStage, oTopo);
            //右键事件
            _initContextmenu(oStage, oTopo);

            //#endregion

            //region initEventOpions
            $.extend(self.eventOptions, oEventOptions);
            //endregion

            return oStage;
        };

        var _initContainer = function (strId, oTopo) {
            $("#" + strId).css("background-color", oTopo.Resource.getTheme().stage["bgColor"]);
            $("#" + strId).css("background-image", oTopo.Resource.getTheme().stage["bgImg"]);
        };

        //#endregion

        //#region event

        var _initEventWheel = function(strId, oStage, oTopo){
            document.getElementById(strId).addEventListener('wheel', function(e){
                e.preventDefault();
                var oldScale = oStage.scaleX();
                var mousePointTo = {
                    x: oStage.getPointerPosition().x / oldScale - oStage.x() / oldScale,
                    y: oStage.getPointerPosition().y / oldScale - oStage.y() / oldScale
                };
                //往上滚deltaY小于0
                var newScale = e.deltaY < 0 ? oldScale * ZOOM_SCALE : oldScale / ZOOM_SCALE;
                //限制最小的缩放比
                newScale = Math.max(newScale, MIN_SCALE);
                oStage.scale({ x: newScale, y: newScale });
                var newPos = {
                    x: -(mousePointTo.x - oStage.getPointerPosition().x / newScale) * newScale,
                    y: -(mousePointTo.y - oStage.getPointerPosition().y / newScale) * newScale
                };
                oStage.position(newPos);
                //重置backgroundLayer
                self.reSetBackgroundLayer(oTopo);
                oStage.batchDraw();
            });
        };

        var _initEventDragend = function(oStage, oTopo){
            oStage.on("dragend", function(evt){
                var oTarget = evt.target;
                //oStageLayer不移动 确保oStageLayer处于原始位置
                if(oTarget.nodeType === "Stage"){
                    //重置backgroundLayer
                    self.reSetBackgroundLayer(oTopo);
                }
            });
        };

        var _initEventAddMinus = function(oTopo){
            keyboardJS.bind('+', function(e) {
                oTopo.Sprite.NodeGroup.zoomInSelectNodeGroupAndNodes(oTopo);
            });
            keyboardJS.bind('-', function(e) {
                oTopo.Sprite.NodeGroup.zoomOutSelectNodeGroupAndNodes(oTopo);
            });
        };

        var _initEventClick = function(oStageRect, oTopo){
            oStageRect.on("click", function(evt){
                oTopo.Sprite.NodeGroup.unSelectNodeGroupAndNodes(oTopo);
                oTopo.Sprite.LinkGroup.unSelectLinks(oTopo);
            });
        };

        var _initEventCtrlPress = function(oTopo){
            keyboardJS.bind('ctrl', function(e) {
                keyboardJS.isCtrlPress = true;
            }, function(e){
                keyboardJS.isCtrlPress = false;
            });
        };

        var _initEventMouseDown = function(oStage, oTopo){
            oStage.on("contentMousedown", function(e){
                if(self.model === self.MODEL_CREATE_NODE){
                    oTopo.Sprite.Node.stageEventMouseDown(e, oTopo);
                }
            });
        };

        var _initEventMouseUp = function(oStage, oTopo){
            oStage.on("contentMouseup", function(e){
                if(self.model === self.MODEL_CREATE_NODE){

                }
            });
        };

        var _initEventMouseMove = function(oStage, oTopo){
            oStage.on("contentMousemove", function(e){
                if(self.model === self.MODEL_CREATE_NODE){
                    oTopo.Sprite.Node.stageEventMouseMove(e, oTopo);
                }
            });
        };

        var _initEventMouseOver = function(oStage, oTopo){
            oStage.on("contentMouseover", function(e){
                if(self.model === self.MODEL_CREATE_NODE){
                    oTopo.Sprite.Node.stageEventMouseOver(e, oTopo);
                }
            });
        };

        var _initEventMouseOut = function(oStage, oTopo){
            oStage.on("contentMouseout", function(e){
                if(self.model === self.MODEL_CREATE_NODE){
                    oTopo.Sprite.Node.stageEventMouseOut(e, oTopo);
                }
            });
        };

        var _initEventEscPress = function(oTopo){
            keyboardJS.bind('esc', function(e){
                //down
                if(self.model === self.MODEL_CREATE_NODE){
                    oTopo.Sprite.Node.eventEscPress(e, oTopo);
                }
            }, function(e){
                //up
            });
        };

        var _initContextmenu = function(oStage, oTopo){
            //屏蔽默认的右键事件
            oStage.on("contentContextmenu", function(e){
                e.evt.preventDefault();
            });

            oStage.on("click", function(e){
                if(oTopo.Utils.isRightClick(e.evt)){
                    var oBuObj;
                    //点击的是背景画布
                    if(e.target.attrs.id == BACKGROUND_SHAPE_ID){
                        oBuObj = "background";
                    }
                    //点击的是画布上的元素
                    else{
                        oBuObj = self.getBuObjByEventTarget(e.target);
                    }
                    self.eventOptions.callbackOnRightClick(oBuObj, e.evt.clientX, e.evt.clientY, e);
                }
                e.evt.stopPropagation();
            });
        };



        //#endregion

        //#region imsg

        this.getBuObjByEventTarget = function(oEventTarget){
            if(oEventTarget.tag){
                return oEventTarget.tag;
            }
            else{
                return self.getBuObjByEventTarget(oEventTarget.parent);
            }
        };

        this.reSetBackgroundLayer = function(oTopo){
            //1.重置scale
            oTopo.ins.layerBg.scale({
                x: 1 / oTopo.ins.stage.scaleX(),
                y: 1 / oTopo.ins.stage.scaleY()
            });
            //2.重置offset
            oTopo.ins.layerBg.offsetX(oTopo.ins.stage.x());
            oTopo.ins.layerBg.offsetY(oTopo.ins.stage.y());
            //3.绘制
            oTopo.ins.layerBg.batchDraw();
        };

        this.clearAllGroups = function(oTopo){
            var arrGroup = oTopo.ins.stage.find("Group");
            arrGroup.forEach(function(oGroup, index){
                oGroup.destroy();
            });
        };

        this.findOne = function (strId, oTopo) {
            var strWrapperId = self.getIdentityValue(strId, oTopo);
            var oEle = oTopo.ins.stage.findOne("#" + strWrapperId);
            return oEle;
        };

        this.findGroupByTagAttr = function(strAttrKey, oAttrValue, oTopo){
            var arrRes = [];

            var arrGroup = oTopo.ins.stage.find("Group");
            for(var i=0;i<arrGroup.length;i++){
                var oGroup = arrGroup[i];
                if(undefined != oGroup.tag[strAttrKey]){
                    if(oGroup.tag[strAttrKey] == oAttrValue){
                        arrRes.push(oGroup);
                    }
                }
            }

            return arrRes;
        };

        this.getIdentityValue = function(value, oTopo){
            return oTopo.ins.stage.id() + "_" + value;
        };

        //#endregion
    };
    $.MarvelTopoStage.id = 1;
})(jQuery);