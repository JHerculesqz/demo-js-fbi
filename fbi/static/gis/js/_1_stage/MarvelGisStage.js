(function($){
    $.MarvelGisStage = function() {
        var self = this;

        //#region Const

        var URL_GIS_MAP = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';

        //#endregion

        //#region Fields

        this.mapObj;

        //#endregion

        //#region init

        this.init = function(strId, iX, iY, iZoom4Init, oOptions,
                             oCallbackOnZoom,
                             oCallbackOnClick,
                             oCallbackOnContextMenu){
            //#region 0.init tileLayer
            var oTileLayer1 = L.tileLayer(URL_GIS_MAP, {
                attribution: "",
                id: 'mapbox.streets',
                token: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            });
            var oTileLayer2 = L.tileLayer(URL_GIS_MAP, {
                attribution: "",
                id: 'mapbox.satellite',
                token: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            });
            //#endregion

            //#region 1.init mapObj
            self.mapObj = L.map(strId, {
                attributionControl: false,
                zoomControl: oOptions.hasZoomCtrl == undefined ? true : oOptions.hasZoomCtrl,
                center: [iX, iY],
                zoom: iZoom4Init,
                worldCopyJump: true,
                doubleClickZoom: false,
                layers:[oTileLayer1, oTileLayer2]
            });
            self.mapObj.doubleClickZoom.disable();
            L.control.scale().addTo(this.mapObj);
            L.control.layers({
                "卫星": oTileLayer2,
                "道路": oTileLayer1,
            }).addTo(this.mapObj);
            //#endregion

            //#region 2.event
            _onZoom(oCallbackOnZoom);
            _onClick(oCallbackOnClick);
            _onContextMenu(oCallbackOnContextMenu);
            //#endregion
        };

        //#endregion

        //#region event

        var _onZoom = function(oCallbackOnZoom){
            self.mapObj.on("zoomend", function(e){
                oCallbackOnZoom(e);
            });
        };
        var _onClick = function(oCallbackOnClick){
            self.mapObj.on('click', function(e){
                oCallbackOnClick(e);
            });
        };
        var _onContextMenu = function (oCallbackOnContextMenu) {
            self.mapObj.on('contextmenu', function(e){
                oCallbackOnContextMenu(e);
            });
        };

        //#endregion

        //#region imsg

        this.setCenter = function(iX, iY, iZoom4Init){
            self.mapObj.setView([iX, iY], iZoom4Init);
        };

        this.showOrHide = function(bIsShow){
            // self.isShow = bIsShow ? "block":"none";
        };

        //#endregion
    }
})(jQuery);