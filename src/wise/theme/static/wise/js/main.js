requirejs.config({paths:{slick:["https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min"],jquery:["https://code.jquery.com/jquery-2.2.4.min"]}}),require(["jquery","slick"],function(a,b){function c(b){a(b).removeClass("open"),window.matchMedia("(min-width: 800px)").matches?a(".navmenu-items").animate({opacity:"hide"},{duration:80,complete:function(){a(".header-wave .menu-brand").animate({opacity:"show"},1),a(".menu .menu-brand").animate({opacity:"hide"},30),a(".menu").animate({height:"hide"},200)}}):a(".menu").animate({height:"hide"},200)}function d(b){a(b).addClass("open"),a(".menu").animate({height:"show"},{duration:200,complete:function(){window.matchMedia("(min-width: 800px)").matches&&(a(".navmenu-items").animate({opacity:"show"},30),$bgheight=a("body").height()-a(".menu > img").height(),a(".menu-bg").height($bgheight+3),a(".navmenu-items").css("display","flex"),a(".header-wave .menu-brand").animate({opacity:"hide"},30),a(".menu .menu-brand").animate({opacity:"show"},30))}})}function e(b){var c=b.length;b.each(function(b,d){var e=a(d).find(".option"),f=e.find("input[type='checkbox']").length>0;if(f){var g=a(d).attr("id"),h='<span class="controls" style="display: inline-block;background-color: #ddd;padding-top: 2px;padding-bottom: 2px;padding-left: 0;position: relative;  "><span style="font-size: 0.8em; margin-left: 5px;">Select :</span><a class="" data-value="all"><label><span class="label">All</span></label></a>',i='<a class="" data-value="none" ><label><span class="label">Clear all</span></label></a>',k='<a class="" data-value="invert"><label><span class="label">Invert selection</span></label></a><span class="ui-autocomplete"><span class=" search-icon" ></span><span style="position: relative;"><input class="ui-autocomplete-input" type="text" style="width: 80%;" /><span class="clear-btn"><a class="fa fa-times"></a></span></span></span>';a("#"+g).on("click",".option",function(b){setTimeout(a(".wise-search-form-container .formControls #form-buttons-continue").trigger("click"),300)});var l=h+i+k;if(a(d).find("> label.horizontal").after(l),e.each(function(b,c){var d=a(e[b]).text();a(e[b]).attr("title",d.trim())}),e.length<4)a(d).find(".controls a").hide(),a(d).find(".controls").html("").css("height","1px").css("padding",0);else{a(d).addClass("panel-group");var m=a(d).find("> span:not(.controls)");m.css("border-radius",0),m.addClass(g+"-collapse"),m.addClass("collapse");var n=j(a(d).find(".option input[type='checkbox']:checked"));m.addClass("panel"),m.addClass("panel-default");var o=a(d).find(".horizontal"),p="<a data-toggle='collapse' class='accordion-toggle' >"+o.text()+"</a>";o.html(p),o.addClass("panel-heading").addClass("panel-title"),o.attr("data-toggle","collapse"),o.attr("data-target","."+g+"-collapse"),0===n.length?(m.collapse({toggle:!0}),m.collapse({toggle:!0}),a(d).find(".accordion-toggle").addClass("accordion-after")):(a(d).find(".controls").slideUp("fast"),m.collapse({toggle:!1})),m.on("hidden.bs.collapse",function(b){m.fadeOut("fast"),a(d).find(".controls").slideUp("fast"),a(d).css({"border-bottom":"1px solid #ccc;"})}),m.on("show.bs.collapse",function(b){m.fadeIn("fast"),a(d).find(".controls").slideDown("fast"),a(d).find("> span").css({display:"block"}),a(d).find(".accordion-toggle").addClass("accordion-after")}),m.on("hide.bs.collapse",function(b){setTimeout(function(){a(d).find(".accordion-toggle").removeClass("accordion-after")},600)}),e.length<6?a(d).find(".controls .ui-autocomplete").hide():a(d).find(".ui-autocomplete-input").autocomplete({minLength:0,source:[],search:function(b,c,e){var f=a(d).find(".option .label:not(.horizontal) ");if(""===a(b.target).val())return f.parentsUntil(".option").parent().parent().find(".noresults").remove(),f.parentsUntil(".option").parent().show(),!0;f.parentsUntil(".option").parent().show();var g=a(b.target).val().toLowerCase().replace(/\s/g,"_"),h=(new RegExp("^"+a.ui.autocomplete.escapeRegex(g),"i"),new RegExp(a.ui.autocomplete.escapeRegex(g),"i")),i={},j=(a(d).find(".option .label:not(.horizontal) ").map(function(b,c){return i[a(c).text().toLowerCase()]=a(c).text().toLowerCase().replace(/\s/g,"_"),a(c).text().toLowerCase().replace(/\s/g,"_")}),[]);a.each(i,function(a,b){h.test(b)||j.push(a)});var k=f.filter(function(b,c){return j.indexOf(a(c).text().toLowerCase())!==-1}),l=f.filter(function(b,c){return j.indexOf(a(c).text().toLowerCase())===-1});a.each(l,function(b,c){a(c).parentsUntil(".option").parent().find("[type='checkbox']").prop("checked",!0)}),a.each(k,function(b,c){a(c).parentsUntil(".option").parent().find("[type='checkbox']").prop("checked",!1),a(c).parentsUntil(".option").parent().find("input[type='checkbox']").prop("checked",!1),a(c).parentsUntil(".option").parent().find("input[type='checkbox']").removeAttr("checked"),a(c).parentsUntil(".option").parent().hide()}),k.length===f.length&&f.parentsUntil(".option").parent().parent().append("<span class='noresults'>No results found</span>")},create:function(b,c){var d=this,e=a(this).parentsUntil(".ui-autocomplete").find(".clear-btn ");e.on("click",null,d,function(b){a(this).parentsUntil(".controls").find("input").val(""),a(this).parentsUntil(".controls").find("input").trigger("change"),a(b.data).autocomplete("search","undefined")})}}),a(d).find(".search-icon").on("click",function(b){a(b.target).parent().find("input").trigger("focus")})}}--c||a(".wise-search-form-container, #wise-search-form").animate({opacity:1},1e3)})}function f(b){b.preventDefault();var c=a(this).parent().parent(),d=j(a(c).find("[type='checkbox']"));a.each(d,function(b,c){"all"!==a(d[b]).val()&&"none"!==a(d[b]).val()&&a(d[b]).prop("checked",!0)})}function g(b){b.preventDefault(),a(this).prop("checked",!1);var c=a(this).parent().parent(),d=j(a(c).find("[type='checkbox']"));a.each(d,function(b,c){a(d[b]).prop("checked",!1)})}function h(b){b.preventDefault(),a(this).prop("checked",!1);var c=a(this).parent().parent();console.log(a(this).parentsUntil(".field").parent());var d=j(a(c).find("[type='checkbox']")),e=d.filter(function(b,c){return a(c).is(":checked")}),f=d.filter(function(b,c){return!a(c).is(":checked")});a.each(e,function(b,c){a(e[b]).prop("checked",!1)}),a.each(f,function(b,c){a(f[b]).prop("checked",!0)})}function i(b){a(".controls").on("click","a[data-value='all']",f),a(".controls").on("click","a[data-value='none']",g),a(".controls").on("click","a[data-value='invert']",h)}function j(b){return b.filter(function(b,c){return q.indexOf(a(c).val())===-1})}function k(){var b=a(".wise-search-form-container, #wise-search-form").find("[data-fieldname]");b.on("click",".option",function(b){var c=a(this).find("input[type='checkbox']").val();q.indexOf(c)===-1&&a(b.target).find("input[type='checkbox']").trigger("click")})}function l(){a(".wise-search-form-container select").each(function(b,c){a(c).addClass("js-example-basic-single");var d=a(c).find("option").length<10,e={placeholder:"Select an option",closeOnSelect:!0,dropdownAutoWidth:!0,width:"100%",theme:"flat"};d&&(e.minimumResultsForSearch=1/0),a(c).select2(e),"form-widgets-marine_unit_id"===a(c).attr("id"),a(".wise-search-form-container #s2id_form-widgets-marine_unit_id").hide(),a(c).on("select2-selecting",function(b){"form-widgets-article"===a(this).attr("id"),a(".wise-search-form-container").find("[name='form.buttons.prev']").remove(),a(".wise-search-form-container").find("[name='form.buttons.next']").remove(),a(".wise-search-form-container").find("[name='form.widgets.page']").remove(),setTimeout(function(){a(".wise-search-form-container .formControls #form-buttons-continue").trigger("click")},300)})}),a("#wise-search-form select").each(function(b,c){a(c).addClass("js-example-basic-single");var d={placeholder:"Select an option",closeOnSelect:!0,dropdownAutoWidth:!1,width:"100%",theme:"flat",minimumResultsForSearch:1/0,containerCssClass:"select2-top-override",dropdownCssClass:"select2-top-override-dropdown"};a(c).select2(d),a(c).parentsUntil(".field").parent().prepend("<h4 style='display: block;color: #337ab7;font-weight: 700;font-size: 90%;'> Marine Unit ID: </h4>"),a(c).on("select2-selecting",function(b){a(".wise-search-form-container #form-widgets-marine_unit_id").select2().val(b.val).trigger("change"),a(".wise-search-form-container #s2id_form-widgets-marine_unit_id").hide(),a(".wise-search-form-container .formControls #form-buttons-continue").trigger("click")})})}function m(){var b=a("ul.nav:not(.topnav) > li");if(b.length>1){var c=2===b.length?35:Math.floor(100/b.length)-b.length;b.css("width",c+"%");100-c*b.length;a(b).css({"margin-left":0})}else a(b).css({"margin-left":0});if(0===a("#tabs-wrapper ul").find("li").length){if(0===a("#tabs-wrapper").find("ul").length)return!0;0===a("#tabs-wrapper").find("ul li").length&&a("#tabs-wrapper").hide()}a.each(a(".tabs-wrapper"),function(b,c){return 0===a(c).find("ul").length||void(0===a(c).find("ul li").length&&a(".tabs-wrapper").hide())})}function n(){a("#tabs-wrapper ul li:first-child a").trigger("click"),a(".tabs-wrapper ul li:first-child a").trigger("click")}function o(b){var c=(b.data.direction,a("#wise-search-form select")),d=c.select2("data"),e=a(d.element[0]).next();a(d.element[0]).before();c.val(e.val()).trigger("change"),a("#form-buttons-continue").trigger("click")}function p(){var b=a(".center-section [name='form.buttons.prev']"),c=a(".center-section [name='form.buttons.next']");b.one("click",function(){return!r&&(a(".wise-search-form-container").find("form").append("<input type='hidden' name='form.buttons.prev' value='Prev'>"),void a(".wise-search-form-container").find(".formControls #form-buttons-continue").trigger("click"))}),c.one("click",function(){return!r&&(a(".wise-search-form-container").find("form").append("<input type='hidden' name='form.buttons.next' value='Next'>"),void a(".wise-search-form-container").find(".formControls #form-buttons-continue").trigger("click"))});var d='<button type="submit" id="form-buttons-prev-top" name="marine.buttons.prev" class="submit-widget button-field btn btn-default pagination-prev fa fa-angle-left" value="" button="">          </button>';a("#form-buttons-prev-top").append(d),a("#form-buttons-prev-top").on("click",null,{direction:"prev"},o);var e='<button type="submit" id="form-buttons-next-top" name="marine.buttons.next" class="submit-widget button-field btn btn-default fa fa-angle-right" value="">            </button>';a("#form-buttons-next-top").append(e),a("#form-buttons-next-top").on("click",null,{direction:"next"},o)}a(document).ready(function(){var b=a(".menu .navmenu-item > a");b.each(function(b,c){var d=a(this).parent().find(".submenu-item");0===d.length&&a(this).addClass("no-carret")});var e=a(".side-section .portlet-static-relevant-msfd-descriptors .portletItem p");if(e&&a(".side-section .portlet-static-relevant-msfd-descriptors .portletItem p").each(function(b){var c=a(this).find("strong");c.length>0&&(a(this).style.fontWeight="bold")}),window.matchMedia("(min-width: 800px)").matches&&!function(){function b(){c.children().css({display:"block"}),c.slick({autoplay:!0,autoplaySpeed:6e3,speed:1e3,easing:"easeOutQuint",adaptiveHeight:!1,nextArrow:"",prevArrow:"",useCSS:!1});var b,h=function(b,c,d){var e=c-b;0==c&&b==d-1&&(e=1),c==d-1&&0==b&&(e=-1),$currentImg=a(g[b]),$nextImg=a(g[c]),$nextImg.show();var f=100*e+"%";$nextImg.css({display:"block",transform:"translate3d("+f+", 0, 0)"}),a({percent:100*e}).animate({percent:0},{duration:1e3,easing:"easeOutQuint",step:function(a){$nextImg.css({transform:"translate3d("+a+"%, 0, 0)"})},done:function(){$currentImg.removeClass("current").hide(),$nextImg.addClass("current")}})};c.on("beforeChange",function(a,c,e,f){b=(f?f:0)+1,d.text(b+"/"+c.slideCount),h(e,f,c.slideCount)}),f.click(function(){c.slick("slickNext")}),e.click(function(){c.slick("slickPrev")})}jQuery.extend(jQuery.easing,{easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c}});var c=a("#hlslider-slides"),d=a("#hlslider-counter"),e=a("#hlslider-prev"),f=a("#hlslider-next"),g=a(".highlight-photos").children();a(document).ready(function(){var c=a(".highlight-placeholder"),d=a(g[0]);d.css({visibility:"visible"}).addClass("current"),b(),c.css("opacity","0")})}(),a(".login i").on("click",function(){a(this).toggleClass("action-selected"),a(".search i").removeClass("action-selected"),a(".login-container ").animate({height:"toggle"},200),a("#portal-searchbox ").animate({height:"hide"},200)}),a(".search i").on("click",function(){a(this).toggleClass("action-selected"),a(".login i").removeClass("action-selected"),a("#portal-searchbox ").animate({height:"toggle"},200),a(".login-container ").animate({height:"hide"},200)}),window.matchMedia("(max-width: 800px)").matches){var f=a("<span/>",{"class":"mobile_submenu_trigger fa fa-caret-right pull-right"});a(".navmenu-item .submenu .submenu-item").length>0&&a(".navmenu-item .submenu .submenu-item").parent().parent().prepend(f),a("body").on("click",".mobile_submenu_trigger",function(){a(this).toggleClass("rotate"),a(this).parent().find(".submenu").animate({height:"toggle"},200)})}a(".menu-label").click(function(){a(".mobile-menu-trigger i").click()}),a(".mobile-menu-trigger i").on("click",function(){a(this).hasClass("open")?c(this):d(this)}),a(".center-section").prepend('<button class="btn btn-primary pull-right toggle-sidebar">Open sidebar</button>'),a(".side-section").prepend('<button class="btn btn-danger close-sidebar">Close</button>'),a(".toggle-sidebar").on("click",function(){a(".side-section").addClass("show-sidebar")}),a(".close-sidebar").on("click",function(){a(".side-section").removeClass("show-sidebar")})});var q=["all","none","invert"];a.randomString=function(){for(var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",b=8,c="",d=0;d<b;d++){var e=Math.floor(Math.random()*a.length);c+=a.substring(e,e+1)}return c},a.getMultipartData=function(b){var c=a.randomString(),d="--"+c,e="",f="\r\n",g=(a(b).attr("id"),a(b).serializeArray());return 0!==g.length&&(a.each(g,function(a,b){e+=d+f+'Content-Disposition: form-data; name="'+b.name+'"'+f+f+b.value+f}),e+=d+"--"+f,[c,e])},e(a(".wise-search-form-container, #wise-search-form").find("[data-fieldname]")),i(a(".wise-search-form-container")),k(),l(),m(),n(),a(".button-field").addClass("btn");var r=!1;p(),a(window).on("resize",function(){if(window.matchMedia("(max-width: 1024px)").matches){var b=a("#form-buttons-next-top");b.css("float","right"),a("#form-buttons-prev-top").after(b)}}),a(".wise-search-form-container #s2id_form-widgets-marine_unit_id").parentsUntil(".field").parent().hide();var s=!0;return window.WISE={},window.WISE.formData=a(".wise-search-form-container").clone(!0),a(".wise-search-form-container").unbind("click").on("click",".formControls #form-buttons-continue",function(b){if(!s)return!0;b.preventDefault();var c=a(".wise-search-form-container").find("form"),d=c.attr("action"),f=(c.serialize(),a.getMultipartData("#"+c.attr("id")));a(".wise-search-form-container").clone(!0);a.ajax({type:"POST",contentType:"multipart/form-data; boundary="+f[0],cache:!1,data:f[1],dataType:"html",url:d,beforeSend:function(b,c){a("#ajax-spinner").hide();var d="<div id='wise-search-form-container-preloader' ></div>",e=a("#ajax-spinner").clone().attr("id","ajax-spinner-form").css({position:"absolute",top:"50%",left:"50%",transform:"translate3d(-50%, -50%,0)"}).show();a(".wise-search-form-container").append(d),a("#wise-search-form-container-preloader").append(e),a("#form-widgets-marine_unit_id").prop("disabled",!0),a("[name='form.buttons.prev']").prop("disabled",!0),a("[name='form.buttons.next']").prop("disabled",!0),a("[name='marine.buttons.prev']").prop("disabled",!0),a("[name='marine.buttons.next']").prop("disabled",!0);var f=a("#marine-widget-top").next();f.css("position","relative"),f.prepend("<div id='wise-search-form-preloader' ></div>"),a("#wise-search-form-preloader").append("<span style='position: absolute;    display: block;    left: 50%; top: 10%;'></span>"),a("#wise-search-form-preloader > span").append(a("#ajax-spinner").clone().attr("id","ajax-spinner-center").show()),a("#ajax-spinner-center").css({position:"fixed"}),r=!0},success:function(b,c,d){a("#wise-search-form #wise-search-form-top").siblings().html(""),a("#wise-search-form #wise-search-form-top").siblings().fadeOut("fast"),a("#wise-search-form .topnav").next().remove();var f=a(b);window.WISE.formData=a(b).find(".wise-search-form-container").clone(!0);var g=f.find(".wise-search-form-container"),h=g.html(),j=f.find("#wise-search-form #wise-search-form-top").siblings();a(".wise-search-form-container").html(h),f.find("#wise-search-form .topnav").next().length>0&&a("#wise-search-form .topnav").after(f.find("#wise-search-form .topnav").next()),a("#wise-search-form #wise-search-form-top").siblings().remove(),a("#wise-search-form #wise-search-form-top").after(j),e(a(".wise-search-form-container, #wise-search-form").find("[data-fieldname]")),i(a(".wise-search-form-container")),k(),a(".button-field").addClass("btn"),l(),m(),n(),a(".wise-search-form-container #s2id_form-widgets-marine_unit_id").parentsUntil(".field").parent().hide(),p(),a("[name='form.buttons.prev']").prop("disabled",!1),a("[name='form.buttons.next']").prop("disabled",!1),a("[name='marine.buttons.prev']").prop("disabled",!1),a("[name='marine.buttons.next']").prop("disabled",!1)},complete:function(b,c){"success"===c&&a(".wise-search-form-container").fadeIn("fast",function(){a("#wise-search-form #wise-search-form-top").siblings().fadeIn("fast")}),a(".wise-search-form-container").find("[name='form.buttons.prev']").remove(),a(".wise-search-form-container").find("[name='form.buttons.next']").remove(),a("#wise-search-form #loader-placeholder").remove(),a("#form-widgets-marine_unit_id").prop("disabled",!1),r=!1},error:function(b,c,d){if(window.WISE.formData.length>0){var e=a(a(window.WISE.formData)[0]).find(".field");a.each(e,function(b,c){var d=a(c).find(".option input[type='checkbox']:checked");d.length>0})}a("#wise-search-form-top").find(".alert").remove(),a("#wise-search-form-top").append('<div class="alert alert-danger alert-dismissible show" style="margin-top: 2rem;" role="alert">  <strong>There was a error from the server.</strong> You should check in on some of those fields from the form.  <button type="button" class="close" data-dismiss="alert" aria-label="Close">    <span aria-hidden="true">&times;</span>  </button></div>'),a(".wise-search-form-container").find("[name='form.buttons.prev']").remove(),a(".wise-search-form-container").find("[name='form.buttons.next']").remove(),a("#form-widgets-marine_unit_id").prop("disabled",!1),a("#wise-search-form-container-preloader").remove(),a("#wise-search-form-preloader").remove(),a("#ajax-spinner-form").hide(),a("[name='form.buttons.prev']").prop("disabled",!0),a("[name='form.buttons.next']").prop("disabled",!0),a("[name='marine.buttons.prev']").prop("disabled",!0),a("[name='marine.buttons.next']").prop("disabled",!0),r=!1}})}),a(".wise-search-form-container").find("form").on("submit",function(a){return!s||void a.preventDefault()}),jQuery.noConflict()});