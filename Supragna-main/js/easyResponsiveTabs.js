!function(a){a.fn.extend({easyResponsiveTabs:function(b){var c={type:"default",width:"auto",fit:!0},b=a.extend(c,b),d=b,e=d.type,f=d.fit,g=d.width,h="vertical",i="accordion";this.each(function(){function c(){e==h&&b.addClass("resp-vtabs"),1==f&&b.css({width:"100%",margin:"0px"}),e==i&&(b.addClass("resp-easy-accordion"),b.find(".resp-tabs-list").css("display","none"))}var b=a(this);b.find("ul.resp-tabs-list li").addClass("resp-tab-item"),b.css({display:"block",width:g}),b.find(".resp-tabs-container > div").addClass("resp-tab-content"),c();var d;b.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");var j=0;b.find(".resp-accordion").each(function(){d=a(this);var c=b.find(".resp-tab-item:eq("+j+")").text();b.find(".resp-accordion:eq("+j+")").append(c),d.attr("aria-controls","tab_item-"+j),j++});var l,k=0;b.find(".resp-tab-item").each(function(){$tabItem=a(this),$tabItem.attr("aria-controls","tab_item-"+k),$tabItem.attr("role","tab"),b.find(".resp-tab-item").first().addClass("resp-tab-active"),b.find(".resp-accordion").first().addClass("resp-tab-active"),b.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style","display:block");var c=0;b.find(".resp-tab-content").each(function(){l=a(this),l.attr("aria-labelledby","tab_item-"+c),c++}),k++}),b.find("[role=tab]").each(function(){var c=a(this);c.click(function(){var d=c.attr("aria-controls");return c.hasClass("resp-accordion")&&c.hasClass("resp-tab-active")?(b.find(".resp-tab-content-active").slideUp("",function(){a(this).addClass("resp-accordion-closed")}),c.removeClass("resp-tab-active"),!1):void(!c.hasClass("resp-tab-active")&&c.hasClass("resp-accordion")?(b.find(".resp-tab-active").removeClass("resp-tab-active"),b.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),b.find("[aria-controls="+d+"]").addClass("resp-tab-active"),b.find(".resp-tab-content[aria-labelledby = "+d+"]").slideDown().addClass("resp-tab-content-active")):(b.find(".resp-tab-active").removeClass("resp-tab-active"),b.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),b.find("[aria-controls="+d+"]").addClass("resp-tab-active"),b.find(".resp-tab-content[aria-labelledby = "+d+"]").addClass("resp-tab-content-active").attr("style","display:block")))}),a(window).resize(function(){b.find(".resp-accordion-closed").removeAttr("style")})})})}})}(jQuery);