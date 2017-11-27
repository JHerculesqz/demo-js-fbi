(function($){
    $.MarvelDevPanel = function() {
        var self = this;

        //region Const

        //endregion

        //#region Fields

        this.m_oDraw;

        this.m_oOptions = {
            "GK_1000": {
                url: "image/dev1.svg",
                plugin: new $.MarvelDevPanel_1()
            }
        };

        //#endregion

        //region init

        this.init = function (oOptions) {
            $.extend(true, this.m_oOptions, oOptions);
            this.m_oDraw = SVG(this.m_oOptions.id);
        };

        //endregion

        //region event



        //endregion

        //region imsg

        this.initPlugin = function (strDevType) {
            var self = this;

            var oOption = this.m_oOptions[strDevType];
            if(oOption != undefined){
                $("#" + this.m_oOptions.id).load(oOption.url, function(oData){
                    self.m_oDraw.svg(oData);
                    oOption.plugin.init(self.m_oOptions.events);
                });
            }
        };

        this.getPlugin = function (strDevType) {
            var oOption = this.m_oOptions[strDevType];
            if(oOption != undefined){
                return oOption.plugin;
            }
            else{
                return undefined;
            }
        };

        //endregion
    }
})(jQuery);