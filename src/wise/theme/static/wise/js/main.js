requirejs.config({paths:{slick:["https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min"],jquery:["https://code.jquery.com/jquery-2.2.4.min"]}}),require(["jquery","slick"],function(a,b){function c(b){a(b).removeClass("open"),window.matchMedia("(min-width: 800px)").matches?a(".navmenu-items").animate({opacity:"hide"},{duration:80,complete:function(){a(".header-wave .menu-brand").animate({opacity:"show"},1),a(".menu .menu-brand").animate({opacity:"hide"},30),a(".menu").animate({height:"hide"},200)}}):a(".menu").animate({height:"hide"},200)}function d(b){a(b).addClass("open"),a(".menu").animate({height:"show"},{duration:200,complete:function(){window.matchMedia("(min-width: 800px)").matches&&(a(".navmenu-items").animate({opacity:"show"},30),$bgheight=a("body").height()-a(".menu > img").height(),a(".menu-bg").height($bgheight+3),a(".navmenu-items").css("display","flex"),a(".header-wave .menu-brand").animate({opacity:"hide"},30),a(".menu .menu-brand").animate({opacity:"show"},30))}})}function e(){var b=j.length;j.each(function(c,d){var e=a(d).find(".option"),g=e.find("input[type='checkbox']").length>0;if(g){var h=a(d).attr("id"),i='<span class="controls " style="display: inline-block;background-color: #ddd;padding-top: 2px;padding-bottom: 2px;padding-left: 8px; "><span style="font-size: 0.8em">Select :</span><a class="" data-value="all"><label><span class="label">All</span></label></a>',j='<a class="" data-value="none" ><label><span class="label">Clear all</span></label></a>',k='<a class="" data-value="invert"><label><span class="label">Invert selection</span></label></span>',l=i+j+k;a(d).find("> label.horizontal").after(l),e.length<4&&a(d).find(".controls").hide(),e.each(function(b,c){var d=a(e[b]).text();a(e[b]).attr("title",d.trim())});var m=a(d).find("> span:not(.controls)");m.addClass(h+"-collapse"),m.addClass("collapse");var n=f(a(d).find(".option input[type='checkbox']:checked"));0===n.length?(m.collapse({toggle:!0}),m.collapse({toggle:!0})):(a(d).find(".controls").slideUp("fast"),m.collapse({toggle:!1}));var o=a(d).find(".horizontal");o.attr("data-toggle","collapse"),o.attr("data-target","."+h+"-collapse"),m.on("hidden.bs.collapse",function(b){m.fadeOut("fast"),a(d).find(".controls").slideUp("fast"),console.log(a(d)),a(d).css({"border-bottom":"1px solid #ccc;"})}),m.on("show.bs.collapse",function(b){m.fadeIn("fast"),a(d).find(".controls").slideDown("fast"),a(d).find("> span").css({display:"block"})})}--b||a(".wise-search-form-container").animate({opacity:1},1e3)})}function f(b){return b.filter(function(b,c){return k.indexOf(a(c).val())===-1})}function g(b){b.preventDefault();var c=a(this).parent().parent(),d=f(a(c).find("[type='checkbox']"));a.each(d,function(b,c){"all"!==a(d[b]).val()&&"none"!==a(d[b]).val()&&a(d[b]).prop("checked",!0)})}function h(b){b.preventDefault(),a(this).prop("checked",!1);var c=a(this).parent().parent(),d=f(a(c).find("[type='checkbox']"));a.each(d,function(b,c){a(d[b]).prop("checked",!1)})}function i(b){b.preventDefault(),a(this).prop("checked",!1);var c=a(this).parent().parent(),d=f(a(c).find("[type='checkbox']")),e=d.filter(function(b,c){return a(c).is(":checked")}),g=d.filter(function(b,c){return!a(c).is(":checked")});a.each(e,function(b,c){a(e[b]).prop("checked",!1)}),a.each(g,function(b,c){a(g[b]).prop("checked",!0)})}a(document).ready(function(){var b=a(".menu .navmenu-item > a");b.each(function(b,c){var d=a(this).parent().find(".submenu-item");0===d.length&&a(this).addClass("no-carret")});var e=a(".side-section .portlet-static-relevant-msfd-descriptors .portletItem p");if(e&&a(".side-section .portlet-static-relevant-msfd-descriptors .portletItem p").each(function(b){var c=a(this).find("strong");c.length>0&&(a(this).style.fontWeight="bold")}),window.matchMedia("(min-width: 800px)").matches&&!function(){function b(){c.children().css({display:"block"}),c.slick({autoplay:!0,autoplaySpeed:6e3,speed:1e3,easing:"easeOutQuint",adaptiveHeight:!1,nextArrow:"",prevArrow:"",useCSS:!1});var b,h=function(b,c,d){var e=c-b;0==c&&b==d-1&&(e=1),c==d-1&&0==b&&(e=-1),$currentImg=a(g[b]),$nextImg=a(g[c]),$nextImg.show();var f=100*e+"%";$nextImg.css({display:"block",transform:"translate3d("+f+", 0, 0)"}),a({percent:100*e}).animate({percent:0},{duration:1e3,easing:"easeOutQuint",step:function(a){$nextImg.css({transform:"translate3d("+a+"%, 0, 0)"})},done:function(){$currentImg.removeClass("current").hide(),$nextImg.addClass("current")}})};c.on("beforeChange",function(a,c,e,f){b=(f?f:0)+1,d.text(b+"/"+c.slideCount),h(e,f,c.slideCount)}),f.click(function(){c.slick("slickNext")}),e.click(function(){c.slick("slickPrev")})}jQuery.extend(jQuery.easing,{easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c}});var c=a("#hlslider-slides"),d=a("#hlslider-counter"),e=a("#hlslider-prev"),f=a("#hlslider-next"),g=a(".highlight-photos").children();a(document).ready(function(){var c=a(".highlight-placeholder"),d=a(g[0]);d.css({visibility:"visible"}).addClass("current"),b(),c.css("opacity","0")})}(),a(".login i").on("click",function(){a(this).toggleClass("action-selected"),a(".search i").removeClass("action-selected"),a(".login-container ").animate({height:"toggle"},200),a("#portal-searchbox ").animate({height:"hide"},200)}),a(".search i").on("click",function(){a(this).toggleClass("action-selected"),a(".login i").removeClass("action-selected"),a("#portal-searchbox ").animate({height:"toggle"},200),a(".login-container ").animate({height:"hide"},200)}),window.matchMedia("(max-width: 800px)").matches){var f=a("<span/>",{"class":"mobile_submenu_trigger fa fa-caret-right pull-right"});a(".navmenu-item .submenu .submenu-item").length>0&&a(".navmenu-item .submenu .submenu-item").parent().parent().prepend(f),a("body").on("click",".mobile_submenu_trigger",function(){a(this).toggleClass("rotate"),a(this).parent().find(".submenu").animate({height:"toggle"},200)})}a(".menu-label").click(function(){a(".mobile-menu-trigger i").click()}),a(".mobile-menu-trigger i").on("click",function(){a(this).hasClass("open")?c(this):d(this)}),a(".center-section").prepend('<button class="btn btn-primary pull-right toggle-sidebar">Open sidebar</button>'),a(".side-section").prepend('<button class="btn btn-danger close-sidebar">Close</button>'),a(".toggle-sidebar").on("click",function(){a(".side-section").addClass("show-sidebar")}),a(".close-sidebar").on("click",function(){a(".side-section").removeClass("show-sidebar")})});var j=a(".wise-search-form-container").find("[data-fieldname]"),k=["all","none","invert"];e();var l=a(".wise-search-form-container").find("[data-fieldname]");a(".controls").on("click","a[data-value='all']",g),a(".controls").on("click","a[data-value='none']",h),a(".controls").on("click","a[data-value='invert']",i),l.on("click",".option",function(b){var c=a(this).find("input[type='checkbox']").val();k.indexOf(c)===-1&&a(b.target).find("input[type='checkbox']").trigger("click")}),a(".wise-search-form-container select").each(function(b,c){a(c).addClass("js-example-basic-single");var d=a(c).find("option").length<10,e={placeholder:"Select an option",closeOnSelect:!0,dropdownAutoWidth:!0,width:"100%",theme:"flat"};d&&(e.minimumResultsForSearch=1/0),a(c).select2(e),a(c).on("select2-selecting",function(b){a(this).val()!==b.choice.id&&a(b.target).parent().parent().next().remove()})}),a(".button-field").addClass("btn"),a("#tabs-wrapper ul li:first-child a").trigger("click"),a(".tabs-wrapper ul li:first-child a").trigger("click");var m=a(".center-section [name='form.buttons.prev']"),n=a(".center-section [name='form.buttons.next']");return a(".wise-search-form-container [name='form.buttons.prev']").hide(),a(".wise-search-form-container [name='form.buttons.next']").hide(),m.one("click",function(){a(".wise-search-form-container [name='form.buttons.prev']").trigger("click")}),n.one("click",function(){a(".wise-search-form-container [name='form.buttons.next']").trigger("click")}),jQuery.noConflict()});