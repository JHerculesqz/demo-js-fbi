(function($){
    $.MarvelDevPanel_1 = function() {
        var self = this;

        //region Const

        //endregion

        //#region Fields

        //#endregion

        //region init

        this.init = function (oEventOptions) {
            //#region bd1
            var oBD1 = SVG.get('bd1');
            oBD1.click(function () {
                oEventOptions.click4BD({id: "bd1"}, this);
            });
            //#endregion

            //#region bd2
            var oBD2 = SVG.get('bd2');
            oBD2.click(function () {
                oEventOptions.click4BD({id: "bd2"}, this);
            });
            //#endregion

            //#region bd3
            var oBD3 = SVG.get('bd3');
            oBD3.click(function () {
                oEventOptions.click4BD({id: "bd3"}, this);
            });
            //#endregion

            //#region bd4
            var oBD4 = SVG.get('bd4');
            oBD4.click(function () {
                oEventOptions.click4BD({id: "bd4"}, this);
            });
            //#endregion

            //#region bd5
            var oBD5 = SVG.get('bd5');
            oBD5.click(function () {
                oEventOptions.click4BD({id: "bd5"}, this);
            });
            //#endregion

            //#region bd6
            var oBD6 = SVG.get('bd6');
            oBD6.click(function () {
                oEventOptions.click4BD({id: "bd6"}, this);
            });
            //#endregion

            //#region bd7
            var oBD7 = SVG.get('bd7');
            oBD7.click(function () {
                oEventOptions.click4BD({id: "bd7"}, this);
            });
            //#endregion

            //#region bd8
            var oBD8 = SVG.get('bd8');
            oBD8.click(function () {
                oEventOptions.click4BD({id: "bd8"}, this);
            });
            //#endregion

            //#region bd9
            var oBD9 = SVG.get('bd9');
            oBD9.click(function () {
                oEventOptions.click4BD({id: "bd9"}, this);
            });
            //#endregion

            //#region bd10
            var oBD10 = SVG.get('bd10');
            oBD10.click(function () {
                oEventOptions.click4BD({id: "bd10"}, this);
            });
            //#endregion

            //#region bd11
            var oBD11 = SVG.get('bd11');
            oBD11.click(function () {
                oEventOptions.click4BD({id: "bd11"}, this);
            });
            //#endregion

            //#region bd12
            var oBD12 = SVG.get('bd12');
            oBD12.click(function () {
                oEventOptions.click4BD({id: "bd12"}, this);
            });
            //#endregion

            //#region bd13
            var oBD13 = SVG.get('bd13');
            oBD13.click(function () {
                oEventOptions.click4BD({id: "bd13"}, this);
            });
            //#endregion

            //#region bd14
            var oBD14 = SVG.get('bd14');
            oBD14.click(function () {
                oEventOptions.click4BD({id: "bd14"}, this);
            });
            //#endregion

            //#region bd15
            var oBD15 = SVG.get('bd15');
            oBD15.click(function () {
                oEventOptions.click4BD({id: "bd15"}, this);
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
            if(oLight != undefined){
                oLight.fill({color: strColor});
            }
        }

        //endregion
    }
})(jQuery);