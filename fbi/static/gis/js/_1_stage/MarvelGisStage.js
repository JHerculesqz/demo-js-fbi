(function($){
    $.MarvelGisStage = function() {
        var self = this;

        //region Const

        var URL_GIS_MAP = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
        var URL_GIS_MAP2 = "https://api.mapbox.com/styles/v1/jherculesqz/cj99csbwi2bzy2qp3mhtqcrkx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamhlcmN1bGVzcXoiLCJhIjoiY2o4anNybjZqMDZnczMybXZxaHNhMDRlMyJ9.fR2DM7aypSp8q4AxE6uL5w";

        //endregion

        //region Fields

        this.mapObj;
        this.eventHandler = {
            //region Stage
            callbackOnZoom: function(e){},
            callbackOnClick: function(e){},
            callbackOnContextmenu: function(e){},
            //endregion
            //region node
            callbackOnNodeDblClick: function(e){},
            callbackOnNodeDrag: function(e){},
            callbackOnNodeClick: function(e){},
            callbackOnCircleDblclick: function(e){},
            callbackOnNodeContextMenu: function (e) {},
            //endregion
            //region nodeGroup
            callbackOnNodeGroupClick: function(e){},
            //endregion
            //region link
            callbackOnLinkClick: function(e){},
            //endregion
        };
        //endregion

        //region init

        this.init = function(strId, iX, iY, iZoom4Init, oOptions, eventOptions){
            if(oOptions.indoorMap){
                //region 0.init mapObj
                self.mapObj = L.map(strId, {
                    attributionControl: false,
                    zoomControl: oOptions.hasZoomCtrl == undefined ? true : oOptions.hasZoomCtrl,
                    center: [iX, iY],
                    zoom: iZoom4Init,
                    worldCopyJump: true,
                    doubleClickZoom: false
                });
                self.mapObj.doubleClickZoom.disable();
                L.control.scale().addTo(this.mapObj);
                //endregion

                //region 1.init tileLayer
                var oIndoorLayer = L.tileLayer.deepzoom(oOptions.indoorMapUrl, {
                    width: 4020,
                    height: 2680
                }, self.mapObj);
                oIndoorLayer.addTo(self.mapObj);
                self.mapObj.fitBounds(oIndoorLayer.options.bounds);
                //endregion

                //region 2.event
                $.extend(self.eventHandler, eventOptions);
                _onZoom();
                _onClick();
                _onContextMenu();
                //endregion
            }
            else{
                //region 0.init tileLayer
                var oTileLayer1 = L.tileLayer(URL_GIS_MAP2, {
                    attribution: "",
                    id: 'mapbox.streets',
                    token: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                });
                var oTileLayer2 = L.tileLayer(URL_GIS_MAP, {
                    attribution: "",
                    id: 'mapbox.satellite',
                    token: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                });
                //endregion

                //region 1.init mapObj
                self.mapObj = L.map(strId, {
                    attributionControl: false,
                    zoomControl: oOptions.hasZoomCtrl == undefined ? true : oOptions.hasZoomCtrl,
                    center: [iX, iY],
                    zoom: iZoom4Init,
                    worldCopyJump: true,
                    doubleClickZoom: false,
                    layers:[oTileLayer1]
                });
                self.mapObj.doubleClickZoom.disable();
                self._ctrlScale();
                self._ctrlLayerView(oTileLayer1, oTileLayer2);
                self._ctrlPrint(oTileLayer1);
                self._ctrlMessure(oOptions);
                self._ctrlPM(oOptions);
                //endregion

                //region 2.event
                $.extend(self.eventHandler, eventOptions);
                _onZoom();
                _onClick();
                _onContextMenu();
                //endregion
            }
        };

        //#region plugins

        this._ctrlScale = function () {
            L.control.scale().addTo(this.mapObj);
        };
        this._ctrlLayerView = function (oTileLayer1, oTileLayer2) {
            L.control.layers({
                "卫星": oTileLayer2,
                "道路": oTileLayer1,
            }).addTo(this.mapObj);
        };
        this._ctrlPrint = function (oTileLayer) {
            L.easyPrint({
                tileLayer: oTileLayer,
                sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
                filename: 'export',
                exportOnly: true,
                hideControlContainer: true
            }).addTo(this.mapObj);
        };
        this._ctrlMessure = function (oOptions) {
            if(oOptions.mess){
                L.control.polylineMeasure({
                    position: 'topleft',                    // Position to show the control. Possible values are: 'topright', 'topleft', 'bottomright', 'bottomleft'
                    unit: 'metres',                         // Show imperial or metric distances. Values: 'metres', 'landmiles', 'nauticalmiles'
                    measureControlTitleOn: 'Open',   // Title for the control going to be switched on
                    measureControlTitleOff: 'Close', // Title for the control going to be switched off
                    measureControlLabel: '&#8614;',         // HTML to place inside the control
                    measureControlClasses: [],              // Classes to apply to the control
                    backgroundColor: '#ccc',                // Background color for control when selected
                    cursor: 'crosshair',                    // Cursor type to show when creating measurements
                    clearMeasurementsOnStop: true,          // Clear all the measurements when the control is unselected
                    showMeasurementsClearControl: true,    // Show a control to clear all the measurements
                    clearControlTitle: 'Clear',// Title text to show on the clear measurements control button
                    clearControlLabel: '&times',            // Clear control inner html
                    clearControlClasses: [],                // Collection of classes to add to clear control button
                    showUnitControl: true,                 // Show a control to change the units of measurements
                    tempLine: {                             // Styling settings for the temporary dashed line
                        color: oOptions.messTmpLine,                      // Dashed line color
                        weight: 2                           // Dashed line weight
                    },
                    fixedLine: {                            // Styling for the solid line
                        color: oOptions.messResLine,                      // Solid line color
                        weight: 2                           // Solid line weight
                    },
                    startCircle: {                          // Style settings for circle marker indicating the starting point of the polyline
                        color: '#fff',                      // Color of the border of the circle
                        weight: 1,                          // Weight of the circle
                        fillColor: '#0f0',                  // Fill color of the circle
                        fillOpacity: 1,                     // Fill opacity of the circle
                        radius: 3                           // Radius of the circle
                    },
                    intermedCircle: {                       // Style settings for all circle markers between startCircle and endCircle
                        color: '#fff',                      // Color of the border of the circle
                        weight: 1,                          // Weight of the circle
                        fillColor: '#ff0',                  // Fill color of the circle
                        fillOpacity: 1,                     // Fill opacity of the circle
                        radius: 3                           // Radius of the circle
                    },
                    currentCircle: {                        // Style settings for circle marker indicating the latest point of the polyline during drawing a line
                        color: '#fff',                      // Color of the border of the circle
                        weight: 1,                          // Weight of the circle
                        fillColor: '#f0f',                  // Fill color of the circle
                        fillOpacity: 1,                     // Fill opacity of the circle
                        radius: 3                           // Radius of the circle
                    },
                    endCircle: {                            // Style settings for circle marker indicating the last point of the polyline
                        color: '#fff',                      // Color of the border of the circle
                        weight: 1,                          // Weight of the circle
                        fillColor: '#f00',                  // Fill color of the circle
                        fillOpacity: 1,                     // Fill opacity of the circle
                        radius: 3                           // Radius of the circle
                    },
                }).addTo(this.mapObj);
            }
        };
        this._ctrlPM = function (oOptions) {
            if(oOptions.pm){
                this.mapObj.pm.addControls({
                    drawMarker: true,  // adds button to draw markers
                    drawPolyline: true,  // adds button to draw a polyline
                    drawRectangle: true,  // adds button to draw a rectangle
                    drawPolygon: true,  // adds button to draw a polygon
                    drawCircle: true,  // adds button to draw a cricle
                    cutPolygon: true,  // adds button to cut a hole in a polygon
                    editMode: true,  // adds button to toggle edit mode for all layers
                    removalMode: true   // adds a button to remove layers
                });
            }
        };

        //#endregion

        //endregion

        //region event

        var _onZoom = function(){
            self.mapObj.on("zoomend", function(e){
                self.eventHandler.callbackOnZoom(e);
            });
        };
        var _onClick = function(){
            self.mapObj.on('click', function(e) {
                self.eventHandler.callbackOnClick(e);
            });
        };
        var _onContextMenu = function () {
            self.mapObj.on('contextmenu', function(e){
                self.eventHandler.callbackOnContextmenu(e);
            });
        };

        //endregion

        //region imsg

        this.setCenter = function(iX, iY, iZoom4Init){
            self.mapObj.setView([iX, iY], iZoom4Init);
        };

        this.showOrHide = function(bIsShow){
            // self.isShow = bIsShow ? "block":"none";
        };

        //endregion
    }
})(jQuery);