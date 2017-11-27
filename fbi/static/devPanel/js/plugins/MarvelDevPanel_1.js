(function ($) {
    $.MarvelDevPanel_1 = function () {
        var self = this;

        //region Const

        //endregion

        //#region Fields

        //#endregion

        //region init

        this.init = function (oOptions) {
            //#region setUp

            $("#" + oOptions.id).bind("contextmenu", function () {
                return false;
            });

            //#endregion

            //#region 0
            var oBD0 = SVG.get('0');
            oBD0.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "0"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "0"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 1
            var oBD1 = SVG.get('1');
            oBD1.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "1"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "1"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 2
            var oBD2 = SVG.get('2');
            oBD2.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "2"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "2"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 3
            var oBD3 = SVG.get('3');
            oBD3.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "3"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "3"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 4
            var oBD4 = SVG.get('4');
            oBD4.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "4"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "4"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 5
            var oBD5 = SVG.get('5');
            oBD5.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "5"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "5"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 6
            var oBD6 = SVG.get('6');
            oBD6.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "6"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "6"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 7
            var oBD7 = SVG.get('7');
            oBD7.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "7"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "7"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 8
            var oBD8 = SVG.get('8');
            oBD8.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "8"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "8"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 9
            var oBD9 = SVG.get('9');
            oBD9.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "9"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "9"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 10
            var oBD10 = SVG.get('10');
            oBD10.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "10"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "10"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 11
            var oBD11 = SVG.get('11');
            oBD11.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "11"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "11"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 12
            var oBD12 = SVG.get('12');
            oBD12.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "12"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "12"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 13
            var oBD13 = SVG.get('13');
            oBD13.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "13"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "13"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 14
            var oBD14 = SVG.get('14');
            oBD14.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "14"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "14"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion

            //#region 15
            var oBD15 = SVG.get('15');
            oBD15.mousedown(function (evt) {
                if (evt.button == 0 || evt.which == 1) {
                    oOptions.events.click4BD({id: "15"}, this);
                }
                else if (evt.button == 2 || evt.which == 3) {
                    oOptions.events.contextMenu4BD({id: "15"},
                        evt.clientX, evt.clientY, this);
                }
            });
            //#endregion
        };

        //endregion

        //region event

        //endregion

        //region imsg

        this.setLightColor = function (strId, strColor) {
            var oLightG = SVG.get(strId);
            var oLight = SVG.adopt(oLightG.node.lastElementChild);
            if (oLight != undefined) {
                oLight.fill({color: strColor});
            }
        }

        //endregion
    }
})(jQuery);