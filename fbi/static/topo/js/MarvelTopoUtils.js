/**
 * Created by destina on 2017/10/19.
 */
(function($){
    $.MarvelTopoUtils = function(){

        this.getVaules4JsonObj = function(oJson){
            var arrRes = [];
            if (Object.values) {
                arrRes = Object.values(oJson);
            }
            else {
                for (var k in oJson) {
                    arrRes.push(oJson[k]);
                }
            }
            return arrRes;
        };

    };
})(jQuery);