(function ($) {
  $.MarvelRackPanel = function () {
    //region const
    const iXPlaceholder = "iXPlaceholder";
    const iYPlaceholder = "iYPlaceholder";
    const startPos = "startPos";
    //endregion

    //region Fields
    var self = this;

    var m_Draw;

    var m_oOptions = {
      id: "",
      buObjId: "",
      imgUrl: "",
      subBuObjIds: [],
      viewBox: [0, 0, 800, 900] //默认值
    };

    var m_oEventOptions = {
      callbackOnClick: function (strRackId, evt) {
      },
      callbackOnContextmenu: function (strRackId, evt) {
      }
    };
    //endregion

    //region imsg
    this.init = function (options, oEventOptions) {
      $.extend(m_oOptions, options);
      $.extend(m_oEventOptions, oEventOptions);
      $.get(m_oOptions.imgUrl, function (data) {
        //处理id，确保唯一性
        data = _preHandleData(data);
        //init
        _init(data);
        //bindEvent
        _bindEvent();
      });
    };

    var _preHandleData = function (data) {
      m_oOptions.subBuObjIds.forEach(function (strId, index) {
        var strTargetId = _generateId(strId);
        data = data.replace("id=\"" + strId + "\"", "id=\"" + strTargetId + "\"");
      });

      return data;
    };

    var _generateId = function (strId) {
      return m_oOptions.id + "_" + strId;
    };

    var _init = function (data) {
      //清空dom
      if (m_Draw) {
        m_Draw.clear();
      }
      else {
        m_Draw = SVG(m_oOptions.id);
      }
      m_Draw.viewbox(m_oOptions.viewBox);
      m_Draw.svg(data);
    };

    var _bindEvent = function () {
      m_oOptions.subBuObjIds.forEach(function (strSubObjId, index) {
        var strTargetId = _generateId(strSubObjId);
        var oBD = SVG.get(strTargetId);
        oBD.mousedown(function (evt) {
          if (_isLeftClick(evt)) {
            m_oEventOptions.callbackOnClick(m_oOptions.buObjId, strSubObjId, evt);
          }
          else if (_isRightClick(evt)) {
            m_oEventOptions.callbackOnContextmenu(m_oOptions.buObjId, strSubObjId, evt);
          }
        });
      });
    };

    var _isLeftClick = function (evt) {
      return evt.button == 0 || evt.which == 1;
    };

    var _isRightClick = function (evt) {
      return evt.button == 2 || evt.which == 3;
    };

    this.addNode = function (strSubObjId, strNodeImsgUrl, oAfterCallback) {
      $.get(strNodeImsgUrl, function (data) {
        var strTargetId = _generateId(strSubObjId);
        var oBDTarget = SVG.get(strTargetId);
        var oBDTargetChild = oBDTarget.children()[0];
        var iX = oBDTargetChild.x();
        var iY = oBDTargetChild.y();
        data = data.replace(iXPlaceholder, iX).replace(iYPlaceholder, iY);
        var oSvg = oBDTarget.parent().svg(data);
        var oNode = oSvg.last();
        oNode.attr(startPos, strTargetId);
        if (oAfterCallback) {
          oAfterCallback();
        }
      });
    };

    this.removeNode = function (strStartSubObjId) {
      var strTargetId = _generateId(strStartSubObjId);
      var oElement = SVG.select("g[" + startPos + "='" + strTargetId + "']");
      if (oElement.length()) {
        oElement.members[0].remove();
      }
    };
    //endregion
  }
})(jQuery);
