(function($){
    $.MarvelTopoNode = function() {
        var self = this;

        //#region Const

        var ICON_WIDTH = 32;
        var ICON_HEIGHT = 32;

        //#endregion

        //region Fields

        //region createNode
        const STATUS_START = 1;
        const STATUS_FREE = 0;
        var createNodeData = {
            status: STATUS_FREE,
            buObj: undefined
        };
        //endregion

        //endregion

        //#region draw

        this.draw = function(oBuObj, oTopo){
            //#region 1.getPos

            var oPos = _getPos(oBuObj);

            //#endregion

            //#region 2.node

            var oGroup = new Konva.Group({
                id: oTopo.Stage.getIdentityValue(oBuObj.id, oTopo),
                x: oPos.x,
                y: oPos.y,
                draggable: true
            });
            oGroup.tag = oBuObj;

            //1.oImage
            var oImage = new Konva.Image({
                x: 0,
                y: 0,
                image: oTopo.Resource.m_mapImage[oBuObj.uiImgKey],
                width: ICON_WIDTH,
                height: ICON_HEIGHT
            });
            oGroup.add(oImage);

            //2.oLabel
            var oLabel = new Konva.Text({
                x: 0,
                y: 0,
                text: oBuObj.uiLabel,
                fill: oTopo.Resource.getTheme().node.labelColor
            });
            oTopo.Sprite.NodeGroup._setLabelCenter(ICON_WIDTH, ICON_HEIGHT, oLabel);
            oGroup.add(oLabel);

            //#endregion

            //#region 3.parent

            oTopo.ins.layerNode.add(oGroup);

            //#endregion

            //#region 4.event

            oGroup.on('mouseover', function(evt) {
                oTopo.Sprite.NodeGroup._onNodeGroupOrNodeMouseOver(oGroup, oTopo);
            });
            oGroup.on('mouseout', function(evt) {
                oTopo.Sprite.NodeGroup._onNodeGroupOrNodeMouseOut(oGroup, oTopo);
            });
            oGroup.on('click', function(evt) {
                oTopo.Sprite.NodeGroup._onNodeGroupOrNodeClick(oGroup, evt, oTopo);
                evt.cancelBubble = true;
                evt.evt.stopPropagation();
            });
            oGroup.on('dragmove', function(evt){
                oTopo.Sprite.NodeGroup.onNodeOrNodeGroupMove(oGroup, oTopo);
            });

            return oGroup;
        };

        this.drawInGroup = function(oBuObj, oExpandGroupExists, oTopo){
            //region 1.getPos

            var oPos = _getPos(oBuObj);

            //#endregion

            //#region 2.node

            var oGroup = new Konva.Group({
                id: oTopo.Stage.getIdentityValue(oBuObj.id, oTopo),
                x: oPos.x,
                y: oPos.y,
                draggable: true,
                dragBoundFunc: function(pos) {
                    var x = oExpandGroupExists.getChildren()[0].x();
                    var y = oExpandGroupExists.getChildren()[0].y();
                    var radius = oExpandGroupExists.tag.uiRadius;
                    var scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
                    if(scale < 1){
                        return {
                            y: Math.round((pos.y - y) * scale + y),
                            x: Math.round((pos.x - x) * scale + x)
                        };
                    }
                    else{
                        return pos;
                    }
                }
            });
            oGroup.tag = oBuObj;

            //1.oImage
            var oImage = new Konva.Image({
                x: 0,
                y: 0,
                image: oTopo.Resource.m_mapImage[oBuObj.uiImgKey],
                width: ICON_WIDTH,
                height: ICON_HEIGHT
            });
            oGroup.add(oImage);

            //2.oLabel
            var oLabel = new Konva.Text({
                x: 0,
                y: 0,
                text: oBuObj.uiLabel,
                fill: oTopo.Resource.getTheme().node.labelColor
            });
            oTopo.Sprite.NodeGroup._setLabelCenter(ICON_WIDTH, ICON_HEIGHT, oLabel);
            oGroup.add(oLabel);

            //#endregion

            //#region 3.parent

            oExpandGroupExists.add(oGroup);

            //#endregion

            //#region 4.event

            oGroup.on('mouseover', function(evt) {
                oTopo.Sprite.NodeGroup._onNodeGroupOrNodeMouseOver(oGroup, oTopo);
            });
            oGroup.on('mouseout', function(evt) {
                oTopo.Sprite.NodeGroup._onNodeGroupOrNodeMouseOut(oGroup, oTopo);
            });
            oGroup.on('click', function(evt) {
                oTopo.Sprite.NodeGroup._onNodeGroupOrNodeClick(oGroup, evt, oTopo);
                evt.evt.cancelBubble = true;
                evt.evt.stopPropagation();
            });
            oGroup.on('dragmove', function(evt){
                oTopo.Sprite.NodeGroup.onNodeOrNodeGroupMove(oGroup, oTopo);
            });

            //#endregion

            return oGroup;
        };

        var _getPos = function(oBuObj){
            return {
                x: oBuObj.x,
                y: oBuObj.y
            };
        };

        //#endregion

        //#region event

        //#endregion

        //#region style

        //#endregion

        //#region imsg

        this.getCenterPos = function(oGroup){
            var width = oGroup.children[0].width();
            var height = oGroup.children[0].height();
            var x = width / 2 + oGroup.x();
            var y = height / 2 + oGroup.y();
            for(;;){
                var oGroup = oGroup.getParent();
                if(oGroup && oGroup.nodeType === "Group"){
                    x = x + oGroup.x();
                    y = y + oGroup.y();
                }
                else{
                    break;
                }
            }
            return {
                x: x,
                y: y,
                width: width,
                height: height
            }
        };

        this.createNode = function(oBuObj, oTopo){
            oTopo.Stage.model = oTopo.Stage.MODEL_CREATE_NODE;
            //save cache
            createNodeData.buObj = oBuObj;
            createNodeData.status = STATUS_START;
        };

        this.stageEventMouseOver = function(oEvent, oTopo){
            //update buObj prop
            var oStage = oEvent.currentTarget;
            createNodeData.buObj.x = oStage.pointerPos.x;
            createNodeData.buObj.y = oStage.pointerPos.y;
            //绘制网元
            self.draw(createNodeData.buObj, oTopo);
            oTopo.Layer.reDraw(oTopo.ins.layerNode);
        };

        this.stageEventMouseMove = function(oEvent, oTopo){
            var oNode = oTopo.Stage.findOne(createNodeData.buObj.id, oTopo);
            if(oNode){
                //更新网元坐标
                oNode.x(oEvent.currentTarget.pointerPos.x);
                oNode.y(oEvent.currentTarget.pointerPos.y);
                oTopo.Layer.reDraw(oTopo.ins.layerNode);
            }
        };

        this.stageEventMouseDown = function(oEvent, oTopo){
            var oNode = oTopo.Stage.findOne(createNodeData.buObj.id, oTopo);
            if(oNode){
                //保存原始坐标
                oNode.tag.oX = oEvent.currentTarget.pointerPos.x;
                oNode.tag.oY = oEvent.currentTarget.pointerPos.y;
                //保存坐标，在网元移动的时候会同步更新
                oNode.tag.x = oEvent.currentTarget.pointerPos.x;
                oNode.tag.y = oEvent.currentTarget.pointerPos.y;
                oNode.x(oEvent.currentTarget.pointerPos.x);
                oNode.y(oEvent.currentTarget.pointerPos.y);
                oTopo.Layer.reDraw(oTopo.ins.layerNode);
            }
            //createNodeEnd
            _createNodeEnd(oTopo);
        };

        var _createNodeEnd = function(oTopo){
            oTopo.Stage.model = oTopo.Stage.MODEL_EMPTY;
            //clear cache
            createNodeData.buObj = undefined;
            createNodeData.status = STATUS_FREE;
        };

        this.stageEventMouseOut = function(oEvent, oTopo){
            var oNode = oTopo.Stage.findOne(createNodeData.buObj.id, oTopo);
            if(oNode){
                oNode.destroy();
                oTopo.Layer.reDraw(oTopo.ins.layerNode);
            }
        };

        this.eventEscPress = function(oEvent, oTopo){
            if(createNodeData.status == STATUS_START){
                var oNode = oTopo.Stage.findOne(createNodeData.buObj.id, oTopo);
                if(oNode){
                    oNode.destroy();
                    oTopo.Layer.reDraw(oTopo.ins.layerNode);
                }
                //取消创建
                _createNodeEnd(oTopo);
            }
        };

        //#endregion
    }
})(jQuery);