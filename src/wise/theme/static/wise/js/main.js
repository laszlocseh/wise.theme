requirejs.config({paths:{slick:["https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min"],jquery:["https://code.jquery.com/jquery-2.2.4.min"]}}),require(["jquery","slick"],function(a,b){function c(b){a(b).removeClass("open"),window.matchMedia("(min-width: 800px)").matches?a(".navmenu-items").animate({opacity:"hide"},{duration:80,complete:function(){a(".header-wave .menu-brand").animate({opacity:"show"},1),a(".menu .menu-brand").animate({opacity:"hide"},30),a(".menu").animate({height:"hide"},200)}}):a(".menu").animate({height:"hide"},200)}function d(b){a(b).addClass("open"),a(".menu").animate({height:"show"},{duration:200,complete:function(){window.matchMedia("(min-width: 800px)").matches&&(a(".navmenu-items").animate({opacity:"show"},30),$bgheight=a("body").height()-a(".menu > img").height(),a(".menu-bg").height($bgheight+3),a(".navmenu-items").css("display","flex"),a(".header-wave .menu-brand").animate({opacity:"hide"},30),a(".menu .menu-brand").animate({opacity:"show"},30))}})}function e(){var b=a(this).parent().parent(),c=a(b).find("[type='checkbox']");c=c.filter(function(b){return a(this)!==a(b)}),a(this).is(":checked")?a(this).prop("checked",!1):a(this).prop("checked",!0),a.each(c,function(b,d){a(c[b]).prop("checked",!a(this).is(":checked"))})}a(document).ready(function(){var b=a(".menu .navmenu-item > a");b.each(function(b,c){var d=a(this).parent().find(".submenu-item");0===d.length&&a(this).addClass("no-carret")});var e=a(".side-section .portlet-static-relevant-msfd-descriptors .portletItem p");if(e&&a(".side-section .portlet-static-relevant-msfd-descriptors .portletItem p").each(function(b){var c=a(this).find("strong");c.length>0&&(a(this).style.fontWeight="bold")}),window.matchMedia("(min-width: 800px)").matches&&!function(){function b(){c.children().css({display:"block"}),c.slick({autoplay:!0,autoplaySpeed:6e3,speed:1e3,easing:"easeOutQuint",adaptiveHeight:!1,nextArrow:"",prevArrow:"",useCSS:!1});var b,h=function(b,c,d){var e=c-b;0==c&&b==d-1&&(e=1),c==d-1&&0==b&&(e=-1),$currentImg=a(g[b]),$nextImg=a(g[c]),$nextImg.show();var f=100*e+"%";$nextImg.css({display:"block",transform:"translate3d("+f+", 0, 0)"}),a({percent:100*e}).animate({percent:0},{duration:1e3,easing:"easeOutQuint",step:function(a){$nextImg.css({transform:"translate3d("+a+"%, 0, 0)"})},done:function(){$currentImg.removeClass("current").hide(),$nextImg.addClass("current")}})};c.on("beforeChange",function(a,c,e,f){b=(f?f:0)+1,d.text(b+"/"+c.slideCount),h(e,f,c.slideCount)}),f.click(function(){c.slick("slickNext")}),e.click(function(){c.slick("slickPrev")})}jQuery.extend(jQuery.easing,{easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c}});var c=a("#hlslider-slides"),d=a("#hlslider-counter"),e=a("#hlslider-prev"),f=a("#hlslider-next"),g=a(".highlight-photos").children();a(document).ready(function(){var c=a(".highlight-placeholder"),d=a(g[0]);d.css({visibility:"visible"}).addClass("current"),b(),c.css("opacity","0")})}(),a(".login i").on("click",function(){a(this).toggleClass("action-selected"),a(".search i").removeClass("action-selected"),a(".login-container ").animate({height:"toggle"},200),a("#portal-searchbox ").animate({height:"hide"},200)}),a(".search i").on("click",function(){a(this).toggleClass("action-selected"),a(".login i").removeClass("action-selected"),a("#portal-searchbox ").animate({height:"toggle"},200),a(".login-container ").animate({height:"hide"},200)}),window.matchMedia("(max-width: 800px)").matches){var f=a("<span/>",{"class":"mobile_submenu_trigger fa fa-caret-right pull-right"});a(".navmenu-item .submenu .submenu-item").length>0&&a(".navmenu-item .submenu .submenu-item").parent().parent().prepend(f),a("body").on("click",".mobile_submenu_trigger",function(){a(this).toggleClass("rotate"),a(this).parent().find(".submenu").animate({height:"toggle"},200)})}a(".menu-label").click(function(){a(".mobile-menu-trigger i").click()}),a(".mobile-menu-trigger i").on("click",function(){a(this).hasClass("open")?c(this):d(this)}),a(".center-section").prepend('<button class="btn btn-primary pull-right toggle-sidebar">Open sidebar</button>'),a(".side-section").prepend('<button class="btn btn-danger close-sidebar">Close</button>'),a(".toggle-sidebar").on("click",function(){a(".side-section").addClass("show-sidebar")}),a(".close-sidebar").on("click",function(){a(".side-section").removeClass("show-sidebar")})});var f=a("#wise-search-form").find("[data-fieldname]");f.each(function(b,c){var d=a(c).find("[type='checkbox']"),e=d.length>0;if(e){var f='<span class="option"><input  class="checkbox-widget required list-field" value="all" type="checkbox"><label for="form-widgets-member_states-0"><span class="label">All</span></label></span>',g=a(d[0]).parent().parent();g.prepend(f);var h=a(g).find("input[value='all']");a(h).on("click focus",function(b){a(b.target).is(":checked")?a.each(a(c).find("[type='checkbox']"),function(b,c){"all"!==a(c).val()&&a(c).attr("checked",!1)}):a.each(a(c).find("[type='checkbox']"),function(b,c){"all"!==a(c).val()&&a(c).attr("checked",!0)})})}});var f=a("#wise-search-form").find("[data-fieldname]");f.each(function(b,c){var d=a(c).find("[type='checkbox']"),e=d.length>0;if(e){var f='<span class="option"><input class="checkbox-widget required list-field" value="all" type="checkbox"><label for="form-widgets-member_states-0"><span class="label">All</span></label></span>',g=a(d[0]).parent().parent();g.prepend(f);var h=d.filter(function(b){return!a(d[b]).is(":checked")});0===h.length&&a(c).find("input[value='all']").prop("checked",!0)}});var g=a("#wise-search-form").find("[data-fieldname]");return g.on("change","input[value='all']",e),a.noConflict()});