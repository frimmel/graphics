!function(t){function e(e,o,d){var r=t(e).find(" div."+o+"-container");r.find("label").html(d.name);var c="radio"===d.type?"radio":"drop-down";r.append(a[c]);var s=r.find(".image-selector"),u=t(e+" img.image-"+o),l=t(e+" img.image-"+o+"-legend"),f=d.images;"radio"===c?(n(s,u,l,f),s.parent().removeClass("four").addClass("twelve"),r.find(".filler-container").hide()):i(s,u,l,f),1===d.images.length&&r.hide()}function n(e,n,i,a){t.each(a,function(){var n=t("<label />");n.append(t('<input type="radio" name="sl" />').val(this.source).data("legend",this.legend)),n.append(t('<span class="label-body" />').text(this.name)),e.append(n),this["default"]&&(t('input[name=sl][value="'+this.source+'"]').prop("checked",!0),n.addClass("on"),i.attr("src",this.legend)),n.click(function(){t(this).siblings().removeClass("on"),t(this).addClass("on")})}),e.on("change",function(){n.attr("src",t("input[name='sl']:checked").val()),i.attr("src",t("input[name='sl']:checked").data("legend"))})}function i(e,n,i,a){t.each(a,function(){e.append(t("<option />").val(this.source).text(this.name).data("legend",this.legend)),this["default"]&&(e.val(this.source),i.attr("src",this.legend))}),e.on("change",function(){n.attr("src",t(this).val()),i.attr("src",t(this).data("legend"))})}t.widget("nemac.mapCompare",{options:{config:{}},_create:function(){this.element.empty(),this.element.html(o);var e=this,n="#"+t(this.element).attr("id");"string"==typeof this.options.config?t.getJSON(this.options.config,function(t){e._deployApp(t,n)}):this._deployApp(this.options.config,n)},_deployApp:function(n,i){e(i,"left",n.leftSelector),e(i,"right",n.rightSelector),t(i).find(".image-selector").trigger("change"),"fade"===n.type?(t(i).find("img.image-left").on("load",function(){t(i).find("div.twentytwenty-container").height(t(this).height())}),t(i).find(".fader").append('<label>slide to compare</label><br /><input type="range" min="0" max="1" step="0.01" value="'+n.defaultSlidePosition+'" />'),t(i).find(".fader").val("0").on("input change",function(e){t(i).find(".image-left").css("opacity",1-e.target.value)}),t(i).find(".image-left").css("opacity",1-n.defaultSlidePosition)):setTimeout(function(){t(i).find(".image-slider").twentytwenty({default_offset_pct:n.defaultSlidePosition})},300),t(i).find("div.main-container").show()}});var a={radio:'<form class="image-selector"></form>',"drop-down":'<select class="nem-mcw-u-full-width image-selector"></select>'},o='<div class="nem-mcw-container main-container" style="display: none;"><div class="nem-mcw-row"><div class="four nem-mcw-columns left-container"><label>Side Elements</label></div><div class="four nem-mcw-columns filler-container">&nbsp;</div><div class="four nem-mcw-columns right-container"><label>Side Elements</label></div></div><div class="nem-mcw-row"><div class="twelve nem-mcw-columns twentytwenty-container"><div class="image-slider"><img class="image-left twentytwenty-before" /><img class="image-right twentytwenty-after" /><div class="fader"></div></div><img class="image-left-legend twentytwenty-legend" /><img class="image-right-legend twentytwenty-legend" /></div></div></div>';t.fn.twentytwenty=function(e){var e=t.extend({default_offset_pct:.5,orientation:"horizontal"},e);return this.each(function(){var n=e.default_offset_pct,i=t(this),a=e.orientation,o="vertical"===a?"down":"left",d="vertical"===a?"up":"right";i.wrap("<div class='twentytwenty-wrapper twentytwenty-"+a+"'></div>"),i.append("<div class='twentytwenty-overlay'></div>");var r=i.find("img:first"),c=i.find("img:last");i.append("<div class='twentytwenty-handle'></div>");var s=i.find(".twentytwenty-handle");s.append("<span class='twentytwenty-"+o+"-arrow'></span>"),s.append("<span class='twentytwenty-"+d+"-arrow'></span>"),i.addClass("twentytwenty-container"),r.addClass("twentytwenty-before"),c.addClass("twentytwenty-after");var u=i.find(".twentytwenty-overlay");u.append("<div class='twentytwenty-before-label'></div>"),u.append("<div class='twentytwenty-after-label'></div>");var l=function(t){var e=r.width(),n=r.height();return{w:e+"px",h:n+"px",cw:t*e+"px",ch:t*n+"px"}},f=function(t){"vertical"===a?r.css("clip","rect(0,"+t.w+","+t.ch+",0)"):r.css("clip","rect(0,"+t.cw+","+t.h+",0)"),i.css("height",t.h)},m=function(t){var e=l(t);s.css("vertical"===a?"top":"left","vertical"===a?e.ch:e.cw),f(e)};t(window).on("resize.twentytwenty",function(t){m(n)});var p=0,v=0;s.on("movestart",function(t){(t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==a?t.preventDefault():(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===a&&t.preventDefault(),i.addClass("active"),p=i.offset().left,offsetY=i.offset().top,v=r.width(),imgHeight=r.height()}),s.on("moveend",function(t){i.removeClass("active")}),s.on("move",function(t){i.hasClass("active")&&(n="vertical"===a?(t.pageY-offsetY)/imgHeight:(t.pageX-p)/v,0>n&&(n=0),n>1&&(n=1),m(n))}),i.find("img").on("mousedown",function(t){t.preventDefault()}),t(window).trigger("resize.twentytwenty")})},function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t,e){function n(t){function e(t){i?(n(),P(e),a=!0,i=!1):a=!1}var n=t,i=!1,a=!1;this.kick=function(t){i=!0,a||e()},this.end=function(t){var e=n;t&&(a?(n=i?function(){e(),t()}:t,i=!0):t())}}function i(){return!0}function a(){return!1}function o(t){t.preventDefault()}function d(t){E[t.target.tagName.toLowerCase()]||t.preventDefault()}function r(t){return 1===t.which&&!t.ctrlKey&&!t.altKey}function c(t,e){var n,i;if(t.identifiedTouch)return t.identifiedTouch(e);for(n=-1,i=t.length;++n<i;)if(t[n].identifier===e)return t[n]}function s(t,e){var n=c(t.changedTouches,e.identifier);if(n&&(n.pageX!==e.pageX||n.pageY!==e.pageY))return n}function u(t){var e;r(t)&&(e={target:t.target,startX:t.pageX,startY:t.pageY,timeStamp:t.timeStamp},j(document,H.move,l,e),j(document,H.cancel,f,e))}function l(t){var e=t.data;w(t,e,t,m)}function f(t){m()}function m(){N(document,H.move,l),N(document,H.cancel,f)}function p(t){var e,n;E[t.target.tagName.toLowerCase()]||(e=t.changedTouches[0],n={target:e.target,startX:e.pageX,startY:e.pageY,timeStamp:t.timeStamp,identifier:e.identifier},j(document,K.move+"."+e.identifier,v,n),j(document,K.cancel+"."+e.identifier,g,n))}function v(t){var e=t.data,n=s(t,e);n&&w(t,e,n,h)}function g(t){var e=t.data,n=c(t.changedTouches,e.identifier);n&&h(e.identifier)}function h(t){N(document,"."+t,v),N(document,"."+t,g)}function w(t,e,n,i){var a=n.pageX-e.startX,o=n.pageY-e.startY;R*R>a*a+o*o||X(t,e,n,a,o,i)}function y(){return this._handled=i,!1}function Y(t){t._handled()}function X(t,e,n,i,a,o){var d,r;e.target;d=t.targetTouches,r=t.timeStamp-e.timeStamp,e.type="movestart",e.distX=i,e.distY=a,e.deltaX=i,e.deltaY=a,e.pageX=n.pageX,e.pageY=n.pageY,e.velocityX=i/r,e.velocityY=a/r,e.targetTouches=d,e.finger=d?d.length:1,e._handled=y,e._preventTouchmoveDefault=function(){t.preventDefault()},O(e.target,e),o(e.identifier)}function S(t){var e=t.data.timer;t.data.touch=t,t.data.timeStamp=t.timeStamp,e.kick()}function b(t){var e=t.data.event,n=t.data.timer;T(),A(e,n,function(){setTimeout(function(){N(e.target,"click",a)},0)})}function T(t){N(document,H.move,S),N(document,H.end,b)}function _(t){var e=t.data.event,n=t.data.timer,i=s(t,e);i&&(t.preventDefault(),e.targetTouches=t.targetTouches,t.data.touch=i,t.data.timeStamp=t.timeStamp,n.kick())}function C(t){var e=t.data.event,n=t.data.timer,i=c(t.changedTouches,e.identifier);i&&(k(e),A(e,n))}function k(t){N(document,"."+t.identifier,_),N(document,"."+t.identifier,C)}function x(t,e,n,i){var a=n-t.timeStamp;t.type="move",t.distX=e.pageX-t.startX,t.distY=e.pageY-t.startY,t.deltaX=e.pageX-t.pageX,t.deltaY=e.pageY-t.pageY,t.velocityX=.3*t.velocityX+.7*t.deltaX/a,t.velocityY=.3*t.velocityY+.7*t.deltaY/a,t.pageX=e.pageX,t.pageY=e.pageY}function A(t,e,n){e.end(function(){return t.type="moveend",O(t.target,t),n&&n()})}function D(t,e,n){return j(this,"movestart.move",Y),!0}function q(t){return N(this,"dragstart drag",o),N(this,"mousedown touchstart",d),N(this,"movestart",Y),!0}function F(t){"move"!==t.namespace&&"moveend"!==t.namespace&&(j(this,"dragstart."+t.guid+" drag."+t.guid,o,e,t.selector),j(this,"mousedown."+t.guid,d,e,t.selector))}function z(t){"move"!==t.namespace&&"moveend"!==t.namespace&&(N(this,"dragstart."+t.guid+" drag."+t.guid),N(this,"mousedown."+t.guid))}var R=6,j=t.event.add,N=t.event.remove,O=function(e,n,i){t.event.trigger(n,i,e)},P=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){return window.setTimeout(function(){t()},25)}}(),E={textarea:!0,input:!0,select:!0,button:!0},H={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},K={move:"touchmove",cancel:"touchend",end:"touchend"};t.event.special.movestart={setup:D,teardown:q,add:F,remove:z,_default:function(t){function i(e){x(o,d.touch,d.timeStamp),O(t.target,o)}var o,d;t._handled()&&(o={target:t.target,startX:t.startX,startY:t.startY,pageX:t.pageX,pageY:t.pageY,distX:t.distX,distY:t.distY,deltaX:t.deltaX,deltaY:t.deltaY,velocityX:t.velocityX,velocityY:t.velocityY,timeStamp:t.timeStamp,identifier:t.identifier,targetTouches:t.targetTouches,finger:t.finger},d={event:o,timer:new n(i),touch:e,timeStamp:e},t.identifier===e?(j(t.target,"click",a),j(document,H.move,S,d),j(document,H.end,b,d)):(t._preventTouchmoveDefault(),j(document,K.move+"."+t.identifier,_,d),j(document,K.end+"."+t.identifier,C,d)))}},t.event.special.move={setup:function(){j(this,"movestart.move",t.noop)},teardown:function(){N(this,"movestart.move",t.noop)}},t.event.special.moveend={setup:function(){j(this,"movestart.moveend",t.noop)},teardown:function(){N(this,"movestart.moveend",t.noop)}},j(document,"mousedown.move",u),j(document,"touchstart.move",p),"function"==typeof Array.prototype.indexOf&&!function(t,e){for(var n=["changedTouches","targetTouches"],i=n.length;i--;)-1===t.event.props.indexOf(n[i])&&t.event.props.push(n[i])}(t)})}(jQuery);