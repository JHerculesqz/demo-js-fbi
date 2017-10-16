(function($){
    $.MarvelGis = function() {
        var self = this;

        //#region Fields

        this.Stage = new $.MarvelGisStage();
        this.Layer = new $.MarvelGisLayer();
        this.Sprite = new $.MarvelGisSprite();

        this.ins = {
            stage: undefined,
            layerNode: undefined,
            layerLink: undefined
        };

        //#endregion
    }
})(jQuery);