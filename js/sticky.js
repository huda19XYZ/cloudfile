/* jQuery sticky.js by muhammad f huda
Twitter: @f_huda19
Blog: http://cyber4rt.wapsite.me
*/
(function($) {
$.fn.sticky= function(minWidth= 0) {
if($(this).length<1) return this;
var wrapper= $(this).css({
"min-height": "1px",
"min-width": "1px",
"position": "static"
}).wrapInner('<div>');
wrapper.parent().css('position', 'relative');
$(window).on('scroll resize sticky', function() {
if(this.innerWidth<minWidth) {
wrapper.children().removeAttr('class style');
return;
}
var heights= new Array();
wrapper.children().each(function() {
heights.push($(this).outerHeight());
});
var parent= wrapper.parent(),
parHeight= parent.outerHeight(),
parTop= parent.offset().top,
winScroll= $(this).scrollTop(),
winHeight= this.innerHeight,
winWidth= this.innerWidth,
grow= (winHeight+winScroll)-(parTop+parHeight);
wrapper.each(function(index) {
var heightest= Math.max.apply(null, heights),
sticky= $(this).children(),
height= sticky.outerHeight(),
width= $(this).outerWidth(),
kelas= $(this).attr('class'),
left= $(this).offset().left,
top= $(this).offset().top,
pull= left-$(this).parent().offset().left;
if(index==heights.indexOf(heightest)) {
sticky.removeAttr('class style');
return this;
}
sticky.addClass($(this).attr('class'));
if(height+top>=winHeight) {
if(height+top<=winScroll+winHeight) {
if(grow>0) sticky.css({
"position": "absolute",
"bottom": 0,
"width": width,
"left": pull,
"top": "auto"
});
else sticky.css({
"position": "fixed",
"bottom": 0,
"width": width,
"left": left,
"top": "auto"
});
}
else sticky.css({
"position": "absolute",
"bottom": "auto",
"width": width,
"left": pull,
"top": 0
});
}
else {
if(grow>winHeight-height) sticky.css({
"position": "absolute",
"bottom": 0,
"width": width,
"left": pull,
"top": "auto"
});
else sticky.css({
"position": "fixed",
"bottom": "auto",
"width": width,
"left": left,
"top": top,
});
}
});
}).trigger('sticky');
return this;
}
})(jQuery);
