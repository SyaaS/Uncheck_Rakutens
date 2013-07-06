// ==UserScript==
// @name           Uncheck_Rakutens
// @version        1.0.0.0
// @description    Rakuten's checkbox removed all check.
// @author         YaaS
// @namespace      YaaS
// @include        https://basket.step.rakuten.co.jp/rms/mall/bs/confirmorderquicknormalize*
// @include        https://delivery.rakuten.co.jp/?module=Default&action=OrderStep*
// ==/UserScript==

(function(){
    // Uncehck checkbox if defined.
    var UncheckSafety = function(checkbox){
        if (checkbox) {
            checkbox.setAttribute("value", "off");
            checkbox.removeAttribute("checked");
        }
    }
    
    // Ichiba
    UncheckSafety(document.getElementById("rmail_check"));
    UncheckSafety(document.getElementById("bookmark_check"));
    UncheckSafety(document.getElementById("shop_rating_check"));
    var newsId_Checks = document.getElementsByName("newsId");
    for (i = 0; i < newsId_Checks.length; i++) {
        UncheckSafety(newsId_Checks[i]);
    }
    
    // Delivery
    UncheckSafety(document.getElementById("groupMagagine"));
    UncheckSafety(document.getElementById("deliveryMagagine"));
})();
