/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
!function(t,e,i){var n=t.L,o={};o.version="0.7.2","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints&&!t.PointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled&&t.navigator.maxTouchPoints||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return s=e&&e.maxZoom?Math.min(e.maxZoom,s):s,this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("viewreset",{hard:!i}),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;
return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;i.width=i.height=e.detectRetina&&o.Browser.retina?2*n:n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i=o.point("shadow"===e?n.shadowAnchor||n.iconAnchor:n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())
},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):"",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&1e3>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!(t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.DomEvent.stopPropagation(t),o.Draggable._disabled||(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),o.DomUtil.addClass(t.target||t.srcElement,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(t){o.DomUtil.removeClass(e.body,"leaflet-dragging"),o.DomUtil.removeClass(t.target||t.srcElement,"leaflet-drag-target");for(var i in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[i],this._onMove).off(e,o.Draggable.END[i],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);
break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a){this._animatingZoom=!0,o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.MAPSPICE=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/senadu/projects/Renderer-Cheetah/node_modules/color-parser/colors.js":[function(require,module,exports){

module.exports = {
    aliceblue: [240, 248, 255]
  , antiquewhite: [250, 235, 215]
  , aqua: [0, 255, 255]
  , aquamarine: [127, 255, 212]
  , azure: [240, 255, 255]
  , beige: [245, 245, 220]
  , bisque: [255, 228, 196]
  , black: [0, 0, 0]
  , blanchedalmond: [255, 235, 205]
  , blue: [0, 0, 255]
  , blueviolet: [138, 43, 226]
  , brown: [165, 42, 42]
  , burlywood: [222, 184, 135]
  , cadetblue: [95, 158, 160]
  , chartreuse: [127, 255, 0]
  , chocolate: [210, 105, 30]
  , coral: [255, 127, 80]
  , cornflowerblue: [100, 149, 237]
  , cornsilk: [255, 248, 220]
  , crimson: [220, 20, 60]
  , cyan: [0, 255, 255]
  , darkblue: [0, 0, 139]
  , darkcyan: [0, 139, 139]
  , darkgoldenrod: [184, 132, 11]
  , darkgray: [169, 169, 169]
  , darkgreen: [0, 100, 0]
  , darkgrey: [169, 169, 169]
  , darkkhaki: [189, 183, 107]
  , darkmagenta: [139, 0, 139]
  , darkolivegreen: [85, 107, 47]
  , darkorange: [255, 140, 0]
  , darkorchid: [153, 50, 204]
  , darkred: [139, 0, 0]
  , darksalmon: [233, 150, 122]
  , darkseagreen: [143, 188, 143]
  , darkslateblue: [72, 61, 139]
  , darkslategray: [47, 79, 79]
  , darkslategrey: [47, 79, 79]
  , darkturquoise: [0, 206, 209]
  , darkviolet: [148, 0, 211]
  , deeppink: [255, 20, 147]
  , deepskyblue: [0, 191, 255]
  , dimgray: [105, 105, 105]
  , dimgrey: [105, 105, 105]
  , dodgerblue: [30, 144, 255]
  , firebrick: [178, 34, 34]
  , floralwhite: [255, 255, 240]
  , forestgreen: [34, 139, 34]
  , fuchsia: [255, 0, 255]
  , gainsboro: [220, 220, 220]
  , ghostwhite: [248, 248, 255]
  , gold: [255, 215, 0]
  , goldenrod: [218, 165, 32]
  , gray: [128, 128, 128]
  , green: [0, 128, 0]
  , greenyellow: [173, 255, 47]
  , grey: [128, 128, 128]
  , honeydew: [240, 255, 240]
  , hotpink: [255, 105, 180]
  , indianred: [205, 92, 92]
  , indigo: [75, 0, 130]
  , ivory: [255, 255, 240]
  , khaki: [240, 230, 140]
  , lavender: [230, 230, 250]
  , lavenderblush: [255, 240, 245]
  , lawngreen: [124, 252, 0]
  , lemonchiffon: [255, 250, 205]
  , lightblue: [173, 216, 230]
  , lightcoral: [240, 128, 128]
  , lightcyan: [224, 255, 255]
  , lightgoldenrodyellow: [250, 250, 210]
  , lightgray: [211, 211, 211]
  , lightgreen: [144, 238, 144]
  , lightgrey: [211, 211, 211]
  , lightpink: [255, 182, 193]
  , lightsalmon: [255, 160, 122]
  , lightseagreen: [32, 178, 170]
  , lightskyblue: [135, 206, 250]
  , lightslategray: [119, 136, 153]
  , lightslategrey: [119, 136, 153]
  , lightsteelblue: [176, 196, 222]
  , lightyellow: [255, 255, 224]
  , lime: [0, 255, 0]
  , limegreen: [50, 205, 50]
  , linen: [250, 240, 230]
  , magenta: [255, 0, 255]
  , maroon: [128, 0, 0]
  , mediumaquamarine: [102, 205, 170]
  , mediumblue: [0, 0, 205]
  , mediumorchid: [186, 85, 211]
  , mediumpurple: [147, 112, 219]
  , mediumseagreen: [60, 179, 113]
  , mediumslateblue: [123, 104, 238]
  , mediumspringgreen: [0, 250, 154]
  , mediumturquoise: [72, 209, 204]
  , mediumvioletred: [199, 21, 133]
  , midnightblue: [25, 25, 112]
  , mintcream: [245, 255, 250]
  , mistyrose: [255, 228, 225]
  , moccasin: [255, 228, 181]
  , navajowhite: [255, 222, 173]
  , navy: [0, 0, 128]
  , oldlace: [253, 245, 230]
  , olive: [128, 128, 0]
  , olivedrab: [107, 142, 35]
  , orange: [255, 165, 0]
  , orangered: [255, 69, 0]
  , orchid: [218, 112, 214]
  , palegoldenrod: [238, 232, 170]
  , palegreen: [152, 251, 152]
  , paleturquoise: [175, 238, 238]
  , palevioletred: [219, 112, 147]
  , papayawhip: [255, 239, 213]
  , peachpuff: [255, 218, 185]
  , peru: [205, 133, 63]
  , pink: [255, 192, 203]
  , plum: [221, 160, 203]
  , powderblue: [176, 224, 230]
  , purple: [128, 0, 128]
  , red: [255, 0, 0]
  , rosybrown: [188, 143, 143]
  , royalblue: [65, 105, 225]
  , saddlebrown: [139, 69, 19]
  , salmon: [250, 128, 114]
  , sandybrown: [244, 164, 96]
  , seagreen: [46, 139, 87]
  , seashell: [255, 245, 238]
  , sienna: [160, 82, 45]
  , silver: [192, 192, 192]
  , skyblue: [135, 206, 235]
  , slateblue: [106, 90, 205]
  , slategray: [119, 128, 144]
  , slategrey: [119, 128, 144]
  , snow: [255, 255, 250]
  , springgreen: [0, 255, 127]
  , steelblue: [70, 130, 180]
  , tan: [210, 180, 140]
  , teal: [0, 128, 128]
  , thistle: [216, 191, 216]
  , tomato: [255, 99, 71]
  , turquoise: [64, 224, 208]
  , violet: [238, 130, 238]
  , wheat: [245, 222, 179]
  , white: [255, 255, 255]
  , whitesmoke: [245, 245, 245]
  , yellow: [255, 255, 0]
  , yellowgreen: [154, 205, 5]
};
},{}],"/home/senadu/projects/Renderer-Cheetah/node_modules/color-parser/index.js":[function(require,module,exports){

/**
 * Module dependencies.
 */

var colors = require('./colors');

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Parse `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

function parse(str) {
  return named(str)
    || hex3(str)
    || hex6(str)
    || rgb(str)
    || rgba(str);
}

/**
 * Parse named css color `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function named(str) {
  var c = colors[str.toLowerCase()];
  if (!c) return;
  return {
    r: c[0],
    g: c[1],
    b: c[2]
  }
}

/**
 * Parse rgb(n, n, n)
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function rgb(str) {
  if (0 == str.indexOf('rgb(')) {
    str = str.match(/rgb\(([^)]+)\)/)[1];
    var parts = str.split(/ *, */).map(Number);
    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: 1
    }
  }
}

/**
 * Parse rgba(n, n, n, n)
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function rgba(str) {
  if (0 == str.indexOf('rgba(')) {
    str = str.match(/rgba\(([^)]+)\)/)[1];
    var parts = str.split(/ *, */).map(Number);
    return {
      r: parts[0],
      g: parts[1],
      b: parts[2],
      a: parts[3]
    }
  }
}

/**
 * Parse #nnnnnn
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function hex6(str) {
  if ('#' == str[0] && 7 == str.length) {
    return {
      r: parseInt(str.slice(1, 3), 16),
      g: parseInt(str.slice(3, 5), 16),
      b: parseInt(str.slice(5, 7), 16),
      a: 1
    }
  }
}

/**
 * Parse #nnn
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function hex3(str) {
  if ('#' == str[0] && 4 == str.length) {
    return {
      r: parseInt(str[1] + str[1], 16),
      g: parseInt(str[2] + str[2], 16),
      b: parseInt(str[3] + str[3], 16),
      a: 1
    }
  }
}


},{"./colors":"/home/senadu/projects/Renderer-Cheetah/node_modules/color-parser/colors.js"}],"/home/senadu/projects/Renderer-Cheetah/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js":[function(require,module,exports){
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

},{}],"/home/senadu/projects/Renderer-Cheetah/node_modules/usertiming/src/usertiming.js":[function(require,module,exports){
//
// usertiming.js
//
// A polyfill for UserTiming (http://www.w3.org/TR/user-timing/)
//
// Copyright 2013 Nic Jansma
// http://nicj.net
//
// https://github.com/nicjansma/usertiming.js
//
// Licensed under the MIT license
//
(function(window) {
    'use strict';

    // allow running in Node.js environment
    if (typeof(window) === 'undefined') {
        window = {};
    }

    // prepare base perf object
    if (typeof(window.performance) === 'undefined') {
        window.performance = {};
    }

    //
    // Note what we shimmed
    //
    window.performance.userTimingJsNow = false;
    window.performance.userTimingJsNowPrefixed = false;
    window.performance.userTimingJsUserTiming = false;
    window.performance.userTimingJsUserTimingPrefixed = false;
    window.performance.userTimingJsPerformanceTimeline = false;
    window.performance.userTimingJsPerformanceTimelinePrefixed = false;

    // for prefixed support
    var prefixes = [];
    var methods = [];
    var methodTest = null;
    var i, j;

    //
    // window.performance.now() shim
    //  http://www.w3.org/TR/hr-time/
    //
    if (typeof(window.performance.now) !== 'function') {
        window.performance.userTimingJsNow = true;

        // copy prefixed version over if it exists
        methods = ['webkitNow', 'msNow', 'mozNow'];

        for (i = 0; i < methods.length; i++) {
            if (typeof(window.performance[methods[i]]) === 'function') {
                window.performance.now = window.performance[methods[i]];

                window.performance.userTimingJsNowPrefixed = true;

                break;
            }
        }

        //
        // now() should be a DOMHighResTimeStamp, which is defined as being a time relative
        // to navigationStart of the PerformanceTiming (PT) interface.  If this browser supports
        // PT, use that as our relative start.  Otherwise, use "now" as the start and all other
        // now() calls will be relative to our initialization.
        //

        var nowOffset = +(new Date());
        if (window.performance.timing && window.performance.timing.navigationStart) {
            nowOffset = window.performance.timing.navigationStart;
        }

        if (typeof(window.performance.now) !== 'function') {
            // No browser support, fall back to Date.now
            if (Date.now) {
                window.performance.now = function() {
                    return Date.now() - nowOffset;
                };
            } else {
                // no Date.now support, get the time from new Date()
                window.performance.now = function() {
                    return +(new Date()) - nowOffset;
                };
            }
        }
    }

    //
    // PerformanceTimeline (PT) shims
    //  http://www.w3.org/TR/performance-timeline/
    //

    /**
     * Adds an object to our internal Performance Timeline array.
     *
     * Will be blank if the environment supports PT.
     */
    var addToPerformanceTimeline = function() {
    };

    /**
     * Clears the specified entry types from our timeline array.
     *
     * Will be blank if the environment supports PT.
     */
    var clearEntriesFromPerformanceTimeline = function() {
    };

    // performance timeline array
    var performanceTimeline = [];

    // whether or not the timeline will require sort on getEntries()
    var performanceTimelineRequiresSort = false;

    //
    // If getEntries() isn't defined, we'll assume
    // we have to shim all of the PT functions.
    //
    if (typeof(window.performance.getEntries) !== 'function') {
        window.performance.userTimingJsPerformanceTimeline = true;

        // copy prefixed version over if it exists
        prefixes = ['webkit', 'moz'];
        methods = ['getEntries', 'getEntriesByName', 'getEntriesByType'];

        for (i = 0; i < methods.length; i++) {
            for (j = 0; j < prefixes.length; j++) {
                // prefixed method will likely have an upper-case first letter
                methodTest = prefixes[j] + methods[i].substr(0, 1).toUpperCase() + methods[i].substr(1);

                if (typeof(window.performance[methodTest]) === 'function') {
                    window.performance[methods[i]] = window.performance[methodTest];

                    window.performance.userTimingJsPerformanceTimelinePrefixed = true;
                }
            }
        }

        /**
         * Adds an object to our internal Performance Timeline array.
         *
         * @param {Object} obj PerformanceEntry
         */
        addToPerformanceTimeline = function(obj) {
            performanceTimeline.push(obj);

            //
            // If we insert a measure, its startTime may be out of order
            // from the rest of the entries because the use can use any
            // mark as the start time.  If so, note we have to sort it before
            // returning getEntries();
            //
            if (obj.entryType === 'measure') {
                performanceTimelineRequiresSort = true;
            }
        };

        /**
         * Ensures our PT array is in the correct sorted order (by startTime)
         */
        var ensurePerformanceTimelineOrder = function() {
            if (!performanceTimelineRequiresSort) {
                return;
            }

            //
            // Measures, which may be in this list, may enter the list in
            // an unsorted order. For example:
            //
            //  1. measure('a')
            //  2. mark('start_mark')
            //  3. measure('b', 'start_mark')
            //  4. measure('c')
            //  5. getEntries()
            //
            // When calling #5, we should return [a,c,b] because technically the start time
            // of c is '0' (navigationStart), which will occur before b's start time due to the mark.
            //
            performanceTimeline.sort(function(a, b) {
                return a.startTime - b.startTime;
            });

            performanceTimelineRequiresSort = false;
        };

        /**
         * Clears the specified entry types from our timeline array.
         *
         * @param {string} entryType Entry type (eg 'mark' or 'measure')
         * @param {string} [name] Entry name (optional)
         */
        clearEntriesFromPerformanceTimeline = function(entryType, name) {
            // clear all entries from the perf timeline
            i = 0;
            while (i < performanceTimeline.length) {
                if (performanceTimeline[i].entryType !== entryType) {
                    // unmatched entry type
                    i++;
                    continue;
                }

                if (typeof(name) !== 'undefined' && performanceTimeline[i].name !== name) {
                    // unmatched name
                    i++;
                    continue;
                }

                // this entry matches our criteria, remove just it
                performanceTimeline.splice(i, 1);
            }
        };

        if (typeof(window.performance.getEntries) !== 'function') {
            /**
             * Gets all entries from the Performance Timeline.
             * http://www.w3.org/TR/performance-timeline/#dom-performance-getentries
             *
             * NOTE: This will only ever return marks and measures.
             *
             * @return {PerformanceEntry[]} Array of PerformanceEntrys
             */
            window.performance.getEntries = function() {
                ensurePerformanceTimelineOrder();

                // get a copy of all of our entries
                return performanceTimeline.slice(0);
            };
        }

        if (typeof(window.performance.getEntriesByType) !== 'function') {
            /**
             * Gets all entries from the Performance Timeline of the specified type.
             * http://www.w3.org/TR/performance-timeline/#dom-performance-getentriesbytype
             *
             * NOTE: This will only work for marks and measures.
             *
             * @param {string} entryType Entry type (eg 'mark' or 'measure')
             *
             * @return {PerformanceEntry[]} Array of PerformanceEntrys
             */
            window.performance.getEntriesByType = function(entryType) {
                // we only support marks/measures
                if (typeof(entryType) === 'undefined' ||
                    (entryType !== 'mark' && entryType !== 'measure')) {
                    return [];
                }

                // see note in ensurePerformanceTimelineOrder() on why this is required
                if (entryType === 'measure') {
                    ensurePerformanceTimelineOrder();
                }

                // find all entries of entryType
                var entries = [];
                for (i = 0; i < performanceTimeline.length; i++) {
                    if (performanceTimeline[i].entryType === entryType) {
                        entries.push(performanceTimeline[i]);
                    }
                }

                return entries;
            };
        }

        if (typeof(window.performance.getEntriesByName) !== 'function') {
            /**
             * Gets all entries from the Performance Timeline of the specified
             * name, and optionally, type.
             * http://www.w3.org/TR/performance-timeline/#dom-performance-getentriesbyname
             *
             * NOTE: This will only work for marks and measures.
             *
             * @param {string} name Entry name
             * @param {string} [entryType] Entry type (eg 'mark' or 'measure')
             *
             * @return {PerformanceEntry[]} Array of PerformanceEntrys
             */
            window.performance.getEntriesByName = function(name, entryType) {
                if (entryType && entryType !== 'mark' && entryType !== 'measure') {
                    return [];
                }

                // see note in ensurePerformanceTimelineOrder() on why this is required
                if (typeof(entryType) !== 'undefined' && entryType === 'measure') {
                    ensurePerformanceTimelineOrder();
                }

                // find all entries of the name and (optionally) type
                var entries = [];
                for (i = 0; i < performanceTimeline.length; i++) {
                    if (typeof(entryType) !== 'undefined' &&
                        performanceTimeline[i].entryType !== entryType) {
                        continue;
                    }

                    if (performanceTimeline[i].name === name) {
                        entries.push(performanceTimeline[i]);
                    }
                }

                return entries;
            };
        }
    }

    //
    // UserTiming support
    //
    if (typeof(window.performance.mark) !== 'function') {
        window.performance.userTimingJsUserTiming = true;

        // copy prefixed version over if it exists
        prefixes = ['webkit', 'moz', 'ms'];
        methods = ['mark', 'measure', 'clearMarks', 'clearMeasures'];

        for (i = 0; i < methods.length; i++) {
            for (j = 0; j < prefixes.length; j++) {
                // prefixed method will likely have an upper-case first letter
                methodTest = prefixes[j] + methods[i].substr(0, 1).toUpperCase() + methods[i].substr(1);

                if (typeof(window.performance[methodTest]) === 'function') {
                    window.performance[methods[i]] = window.performance[methodTest];

                    window.performance.userTimingJsUserTimingPrefixed = true;
                }
            }
        }

        // only used for measure(), to quickly see the latest timestamp of a mark
        var marks = {};

        if (typeof(window.performance.mark) !== 'function') {
            /**
             * UserTiming mark
             * http://www.w3.org/TR/user-timing/#dom-performance-mark
             *
             * @param {string} markName Mark name
             */
            window.performance.mark = function (markName) {
                var now = window.performance.now();

                // mark name is required
                if (typeof(markName) === 'undefined') {
                    throw new SyntaxError('Mark name must be specified');
                }

                // mark name can't be a NT timestamp
                if (window.performance.timing && markName in window.performance.timing) {
                    throw new SyntaxError('Mark name is not allowed');
                }

                if (!marks[markName]) {
                    marks[markName] = [];
                }

                marks[markName].push(now);

                // add to perf timeline as well
                addToPerformanceTimeline({
                    entryType: 'mark',
                    name: markName,
                    startTime: now,
                    duration: 0
                });
            };
        }

        if (typeof(window.performance.clearMarks) !== 'function') {
            /**
             * UserTiming clear marks
             * http://www.w3.org/TR/user-timing/#dom-performance-clearmarks
             *
             * @param {string} markName Mark name
             */
            window.performance.clearMarks = function (markName) {
                if (!markName) {
                    // clear all marks
                    marks = {};
                } else {
                    marks[markName] = [];
                }

                clearEntriesFromPerformanceTimeline('mark', markName);
            };
        }

        if (typeof(window.performance.measure) !== 'function') {
            /**
             * UserTiming measure
             * http://www.w3.org/TR/user-timing/#dom-performance-measure
             *
             * @param {string} measureName Measure name
             * @param {string} [startMark] Start mark name
             * @param {string} [endMark] End mark name
             */
            window.performance.measure = function (measureName, startMark, endMark) {
                var now = window.performance.now();

                if (!measureName) {
                    throw new Error('Measure must be specified');
                }

                // if there isn't a startMark, we measure from navigationStart to now
                if (!startMark) {
                    // add to perf timeline as well
                    addToPerformanceTimeline({
                        entryType: 'measure',
                        name: measureName,
                        startTime: 0,
                        duration: now
                    });

                    return;
                }

                //
                // If there is a startMark, check for it first in the NavigationTiming interface,
                // then check our own marks.
                //
                var startMarkTime = 0;
                if (window.performance.timing && startMark in window.performance.timing) {
                    // mark cannot have a timing of 0
                    if (startMark !== 'navigationStart' && window.performance.timing[startMark] === 0) {
                        throw new Error(startMark + ' has a timing of 0');
                    }

                    // time is the offset of this mark to navigationStart's time
                    startMarkTime = window.performance.timing[startMark] - window.performance.timing.navigationStart;
                } else {
                    if (startMark in marks) {
                        startMarkTime = marks[startMark][marks[startMark].length - 1];
                    } else {
                        throw new Error(startMark + ' mark not found');
                    }
                }

                //
                // If there is a endMark, check for it first in the NavigationTiming interface,
                // then check our own marks.
                //
                var endMarkTime = now;

                if (endMark) {
                    endMarkTime = 0;

                    if (window.performance.timing && endMark in window.performance.timing) {
                        // mark cannot have a timing of 0
                        if (endMark !== 'navigationStart' && window.performance.timing[endMark] === 0) {
                            throw new Error(endMark + ' has a timing of 0');
                        }

                        // time is the offset of this mark to navigationStart's time
                        endMarkTime = window.performance.timing[endMark] - window.performance.timing.navigationStart;
                    } else {
                        if (endMark in marks) {
                            endMarkTime = marks[endMark][marks[endMark].length - 1];
                        } else {
                            throw new Error(endMark + ' mark not found');
                        }
                    }
                }

                // add to our measure array
                var duration = endMarkTime - startMarkTime;

                // add to perf timeline as well
                addToPerformanceTimeline({
                    entryType: 'measure',
                    name: measureName,
                    startTime: startMarkTime,
                    duration: duration
                });
            };
        }

        if (typeof(window.performance.clearMeasures) !== 'function') {
            /**
             * UserTiming clear measures
             * http://www.w3.org/TR/user-timing/#dom-performance-clearmeasures
             *
             * @param {string} measureName Measure name
             */
            window.performance.clearMeasures = function (measureName) {
                clearEntriesFromPerformanceTimeline('measure', measureName);
            };
        }
    }

    //
    // Export UserTiming to the appropriate location.
    //
    // When included directly via a script tag in the browser, we're good as we've been
    // updating the window.performance object.
    //
    if (typeof define !== 'undefined' && define.amd) {
        //
        // AMD / RequireJS
        //
        define([], function () {
            return window.performance;
        });
    } else if (typeof module !== 'undefined' && typeof(module.exports) !== 'undefined') {
        //
        // Node.js
        //
        module.exports = window.performance;
    }
}(typeof(window) !== 'undefined' ? window : undefined));
},{}],"/home/senadu/projects/Renderer-Cheetah/node_modules/wolfy87-eventemitter/EventEmitter.js":[function(require,module,exports){
/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	'use strict';

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define(function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

},{}],"/home/senadu/projects/Renderer-Cheetah/src/attDataProvider.js":[function(require,module,exports){
/*global xmlHttpRequest:true*/
'use strict';

var Class = require('./class');
var Util = require('./util');
var TileReader = require('./tileReader');

var DataColumn = require('./dataColumn');
var isNode = Util.isNode();

/*jshint evil:true*/
if (isNode) {
    xmlHttpRequest = eval('require("xhr2");');
}

var tileReaderWorker;
var callbacks = {};
if (!isNode && !L.Browser.mobile && L.Browser.ie) {
    tileReaderWorker = eval('new Worker("tileReaderWorker.js")');
} else if (!isNode && !L.Browser.mobile) {
    tileReaderWorker = new Worker(window.URL.createObjectURL(new Blob(['(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module \'"+o+"\'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\n/* Simple JavaScript Inheritance\n * By John Resig http://ejohn.org/\n * MIT Licensed.\n */\n// Inspired by base2 and Prototype\n/*jshint strict: false, unused: false, noarg:false */\nvar initializing = false,\n    fnTest = /xyz/.test(function () {\n        var xyz;\n    }) ? /\\b_super\\b/ : /.*/;\n\n// The base Class implementation (does nothing)\nvar Class = function () {};\n\n// Create a new Class that inherits from this class\nClass.extend = function (prop) {\n    var _super = this.prototype;\n\n    // Instantiate a base class (but only create the instance,\n    // don\'t run the init constructor)\n    initializing = true;\n    var prototype = new this();\n    initializing = false;\n\n    var cb = function (name, fn) {\n        return function () {\n            var tmp = this._super;\n\n            // Add a new ._super() method that is the same method\n            // but on the super-class\n            this._super = _super[name];\n\n            // The method only need to be bound temporarily, so we\n            // remove it when we\'re done executing\n            var ret = fn.apply(this, arguments);\n            this._super = tmp;\n\n            return ret;\n        };\n    };\n\n    // Copy the properties over onto the new prototype\n    /*jshint forin:false*/\n    for (var name in prop) {\n        // Check if we\'re overwriting an existing function\n        prototype[name] = typeof prop[name] === \'function\' &&\n            typeof _super[name] === \'function\' && fnTest.test(prop[name]) ?\n            (cb)(name, prop[name]) :\n            prop[name];\n    }\n\n    // The dummy class constructor\n    function Class() {\n        // All construction is actually done in the init method\n        if (!initializing && this.init) {\n            this.init.apply(this, arguments);\n        }\n    }\n\n    // Populate our constructed prototype object\n    Class.prototype = prototype;\n\n    // Enforce the constructor to be what we expect\n    Class.prototype.constructor = Class;\n\n    // And make this class extendable\n    Class.extend = arguments.callee;\n\n    return Class;\n};\n/*jshint strict: true, unused: true, noarg:true */\n\nmodule.exports = Class;\n\n},{}],2:[function(require,module,exports){\n\'use strict\';\n\n/**\n * Centralized place for storing enums\n *\n * @class Enums\n * @static\n */\nvar Enums = {};\n\n/**\n * FeatureType enumerations\n *\n * @class FeatureType\n * @static\n */\nEnums.FeatureType = {\n    /**\n     * Represents polygon feature type\n     *\n     * @property POLYGON\n     */\n    POLYGON: \'Polygon\',\n\n    /**\n     * Represents line feature type\n     *\n     * @property LINE\n     */\n    LINE: \'Line\',\n\n    /**\n     * Represents point feature type\n     *\n     * @property POINT\n     */\n    POINT: \'Point\',\n\n    /**\n     * Represents label feature type\n     *\n     * @property LABEL\n     */\n    LABEL: \'Label\',\n\n    /**\n     * Represents point label feature type\n     *\n     * @property POINT_LABEL\n     */\n    POINT_LABEL: \'PointLabel\',\n\n    /**\n     * Represents line label feature type\n     *\n     * @property LINE_LABEL\n     */\n    LINE_LABEL: \'LineLabel\'\n};\n\n/**\n * DataType enumerations\n *\n * @class DataType\n * @static\n */\nEnums.DataType = {\n    /**\n     * Represents unknown data type\n     *\n     * @property UNKNOWN\n     */\n    UNKNOWN: \'Unknown\',\n\n    /**\n     * Represents integer data type\n     *\n     * @property INT\n     */\n    INT: \'Int\',\n\n    /**\n     * Represents unsigned integer data type\n     *\n     * @property UINT\n     */\n    UINT: \'Uint\',\n\n    /**\n     * Represents number data type\n     *\n     * @property NUMBER\n     */\n    NUMBER: \'Num\',\n\n    /**\n     * Represents string data type\n     *\n     * @property STRING\n     */\n    STRING: \'String\',\n\n    /**\n     * Represents boolean data type\n     *\n     * @property BOOLEAN\n     */\n    BOOLEAN: \'Boolean\',\n\n    /**\n     * Represents object data type\n     *\n     * @property OBJECT\n     */\n    OBJECT: \'Object\'\n};\n\n/**\n * JsonObjectType enumerations\n *\n * @class JsonObjectType\n * @static\n */\nEnums.JsonObjectType = {\n    /**\n     * Represents style object in json\n     * when explicit type is needed\n     *\n     * @property UNKNOWN\n     */\n    STYLE: \'style\'\n};\n\n/**\n * MapElementType enumerations\n *\n * @class MapElementType\n * @static\n */\nEnums.MapElementType = {\n    /**\n     * Represents element that is rendered\n     * using SimpleRenderer\n     *\n     * @property SIMPLE\n     */\n    SIMPLE: \'Simple\',\n    /**\n     * Represents a value element that is\n     * rendered using ValueRenderer\n     *\n     * @property VALUE\n     */\n    VALUE: \'Value\',\n\n    /**\n     * Represents element that is rendered\n     * using BubbleRenderer\n     *\n     * @property BUBBLE\n     */\n    BUBBLE: \'Bubble\',\n\n    /**\n     * Represents element that is rendered\n     * using LabelRenderer\n     *\n     * @property LABEL\n     */\n    LABEL: \'Label\'\n\n};\n\nmodule.exports = Enums;\n\n},{}],3:[function(require,module,exports){\n\'use strict\';\n\nvar Rectangle = require(\'./rectangle\');\n\n/**\n * Represents a single feature\n *\n * @class Feature\n * @constructor\n */\nvar Feature = function () {\n\n    /**\n     * Bounding box for this feature\n     *\n     * @property boundingBox\n     * @type Rectangle\n     */\n    this.boundingBox = new Rectangle();\n\n    /**\n     * Parts of this feature. One part is basically an array of points.\n     *\n     * @property parts\n     * @type Array of arrays\n     */\n    this.parts = [];\n\n    /**\n     * Centroid of this feature\n     *\n     * @property centroid\n     * @type {Object literal with x and y coords}\n     */\n    this.centroid = undefined;\n\n    /**\n     * Id of this feature\n     *\n     * @property featureId\n     * @type Integer\n     */\n    this.featureId = 0;\n\n    /**\n     * Calculates bounding box for this feature\n     *\n     * @method calculateBoundingBox\n     */\n    this.calculateBoundingBox = function () {\n        var nrParts = this.parts.length;\n        for (var k = 0; k < nrParts; k++) {\n            for (var i = 0; i < this.parts[k].length; i += 2) {\n                var ix = this.parts[k][i];\n                var iy = this.parts[k][i + 1];\n\n                if (this.boundingBox.left > ix) {\n                    this.boundingBox.left = ix; //left\n                }\n                if (this.boundingBox.right < ix) {\n                    this.boundingBox.right = ix; //right\n                }\n                if (this.boundingBox.top > iy) {\n                    this.boundingBox.top = iy; //top\n                }\n                if (this.boundingBox.bottom < iy) {\n                    this.boundingBox.bottom = iy; //bottom\n                }\n            }\n        }\n    };\n};\n\nmodule.exports = Feature;\n\n},{"./rectangle":6}],4:[function(require,module,exports){\n\'use strict\';\n\n/**\n * Holds tile information needed for rendering\n * @class GeoTileData\n */\nfunction GeoTileData() {\n    /**\n     * All layers that are present on this tile\n     *\n     * @property layers\n     * @type Array of LayerData\n     * @default Empty array\n     */\n    this.layers = [];\n\n    /**\n     * Canvas that belongs to this tile\n     *\n     * @property canvas\n     * @type HTMLCanvasElement\n     */\n    this.canvas = null;\n\n    /**\n     * Tile index\n     *\n     * @property index\n     * @type String\n     */\n    this.index = \'\';\n\n    /**\n     * Zoom level\n     *\n     * @property zoom\n     * @type Integer\n     */\n    this.zoom = 0;\n\n    /**\n     * List of bounding boxes of all labels placed on this this. This is used\n     * for label collision detection.\n     *\n     * @property labelRects\n     * @type Object literal in form of { left: , top: , right: , bottom: }\n     */\n    this.labelRects = [];\n\n    /**\n     * Used for label placement and collision detection\n     * @type {LabelCollision}\n     */\n    this.labelCollisions = undefined;\n}\n\nmodule.exports = GeoTileData;\n\n},{}],5:[function(require,module,exports){\n\'use strict\';\n/**\n * Holds information for one layer (per tile)\n *\n * @class LayerData\n */\nfunction LayerData() {\n\n    /**\n     * All features present on this tile (for this layer)\n     *\n     * @property features\n     * @type Array\n     */\n    this.features = [];\n\n    /**\n     * Layer type\n     *\n     * @property type\n     * @type {String} One of: MAPSPICE.Enums.FeatureType\n     */\n    this.type = \'\';\n\n    /**\n     * Layer that this LayerData object belongs to\n     *\n     * @property layer\n     * @type Layer\n     */\n    this.layer = undefined;\n\n    /**\n     * Tile that this layer data belongs to\n     *\n     * @property tile\n     * type GeoTileData\n     */\n    this.tile = undefined;\n}\n\nmodule.exports = LayerData;\n\n},{}],6:[function(require,module,exports){\n\'use strict\';\n\n/**\n * Represents a rectangle\n *\n * @class\n */\nvar Rectangle = function () {\n    /**\n     * Left\n     *\n     * @property left\n     * @type Integer\n     */\n    this.left = 1000;\n\n    /**\n     * Right\n     *\n     * @property right\n     * @type Integer\n     */\n    this.right = -1000;\n\n    /**\n     * Top\n     *\n     * @property top\n     * @type Integer\n     */\n    this.top = 1000;\n\n    /**\n     * Bottom\n     *\n     * @property bottom\n     * @type Integer\n     */\n    this.bottom = -1000;\n};\n\nmodule.exports = Rectangle;\n\n},{}],7:[function(require,module,exports){\n\'use strict\';\n/*jshint worker:true*/\n\nvar GeoTileData = require(\'./geoTileData\');\nvar LayerData = require(\'./layerData\');\n// var DataColumn = require(\'./dataColumn\');\nvar Class = require(\'./class\');\nvar Feature = require(\'./feature\');\nvar Util = require(\'./util\');\nvar Enums = require(\'./enums\');\n\nfunction uintToString(uintArray) {\n    // THIS DOES NOT WORK IN WebWorkers, there is a bug in Chrome.\n    //var encodedString = String.fromCharCode.apply(null, uintArray),\n    //decodedString = decodeURIComponent(escape(encodedString));\n    var encodedString = \'\';\n\n    for (var i = 0; i < uintArray.length; i++) {\n        encodedString += String.fromCharCode(uintArray[i]);\n    }\n\n    // since escape method is depricated, we use encodeURIComponent\n    var decodedString = decodeURIComponent(encodeURIComponent(encodedString));\n    return decodedString;\n\n}\n\n/**\n * Class contains methods for creating tiles from the binary stream data.\n *\n * @TileReader\n * @constructor\n */\nvar TileReader = Class.extend({\n    CODE_END_OF_FEATURE: 127,\n    CODE_END_OF_PART: 126,\n    CODE_POSITIVE_OFFSET: -128,\n    CODE_NEGATIVE_OFFSET: -127,\n    init: function () {},\n    readLabelTile: function (inputBuffer, layer) {\n        var labels, charCount;\n\n        var featureCount = inputBuffer.getUint32WithDefaultEncoding();\n        for (var i = 0; i < featureCount; i++) {\n            labels = [];\n            var feature = {};\n            var featureId = inputBuffer.getUint32WithDefaultEncoding();\n\n            var completeFeature = new Feature();\n            completeFeature.featureId = featureId;\n            feature.type = \'LABEL_TYPE_POLYGON\';\n            feature.featureId = featureId;\n            feature.markerCenterX = inputBuffer.getInt16WithDefaultEncoding();\n            feature.markerCenterY = inputBuffer.getInt16WithDefaultEncoding();\n\n            charCount = inputBuffer.getInt16WithDefaultEncoding();\n            var caption = \'\';\n            for (var k = 0; k < charCount; k++) {\n                var sletter = inputBuffer.getUint16WithDefaultEncoding();\n                caption = caption + String.fromCharCode(sletter);\n            }\n\n            feature.caption = caption;\n            labels.push(feature);\n\n            completeFeature.label = feature;\n            layer.features.push(completeFeature);\n        }\n\n    },\n    readPointTile: function (inputBuffer, layer) {\n        // read tileType\n        // 83 = compressed polygon\n        // 79 = compressed line\n        // 71 = compressed point\n        //  0 = empty tile\n        var tileType = inputBuffer.getInt8WithDefaultEncoding();\n        if (!(tileType === 83 || tileType === 79 || tileType === 71)) {\n            if (tileType !== 0) {\n                console.log(\'Unrecognized tile format\');\n            }\n            return;\n        }\n        var nrOfFeatures = inputBuffer.getInt32WithDefaultEncoding();\n        var self = this;\n\n        var getPoint = function (ib) {\n            var byteCode = ib.getInt8WithDefaultEncoding();\n\n            // if needed, move point even more\n            if (byteCode === self.CODE_POSITIVE_OFFSET) {\n                byteCode = ib.getInt8WithDefaultEncoding() + 250;\n            } else if (byteCode === self.CODE_NEGATIVE_OFFSET) {\n                byteCode = ib.getInt8WithDefaultEncoding() - 250;\n            }\n            return byteCode + 128;\n        };\n\n        for (var j = 0; j < nrOfFeatures; j++) {\n            var completeFeature = new Feature();\n            var featureId = inputBuffer.getUint32WithDefaultEncoding();\n            completeFeature.featureId = featureId;\n\n            var x = getPoint(inputBuffer);\n            var y = getPoint(inputBuffer);\n\n            completeFeature.parts.push(x);\n            completeFeature.parts.push(y);\n            completeFeature.centroid = {\n                x: x,\n                y: y\n            };\n\n            layer.features.push(completeFeature);\n        }\n\n    },\n    readPointLabelTile: function (inputBuffer, layer) {\n        var featureCount = inputBuffer.getUint32WithDefaultEncoding();\n        for (var i = 0; i < featureCount; i++) {\n            var featureId = inputBuffer.getUint32WithDefaultEncoding();\n            var label = {};\n            var completeFeature = new Feature();\n            completeFeature.featureId = featureId;\n\n            label.markerCenterX = inputBuffer.getInt16WithDefaultEncoding();\n            label.markerCenterY = inputBuffer.getInt16WithDefaultEncoding();\n\n            label.serverPrefferedPosition = inputBuffer.getUint8WithDefaultEncoding();\n\n            var charCount = inputBuffer.getUint16WithDefaultEncoding();\n            var caption = \'\';\n            for (var k = 0; k < charCount; k++) {\n                var sletter = inputBuffer.getUint16WithDefaultEncoding();\n                caption = caption + String.fromCharCode(sletter);\n            }\n\n            label.caption = caption;\n            completeFeature.label = label;\n            layer.features.push(completeFeature);\n        }\n    },\n    readLineLabelTile: function (inputBuffer, layer) {\n        var featureCount = inputBuffer.getUint32WithDefaultEncoding();\n        for (var i = 0; i < featureCount; i++) {\n            var featureId = inputBuffer.getUint32WithDefaultEncoding();\n            var numberOfChars = inputBuffer.getUint16WithDefaultEncoding();\n\n            var completeFeature = new Feature();\n            completeFeature.featureId = featureId;\n\n            var label = {};\n            label.chars = [];\n\n            for (var k = 0; k < numberOfChars; k++) {\n                var chr = inputBuffer.getUint16WithDefaultEncoding();\n                var letter = String.fromCharCode(chr);\n\n                var angle2 = inputBuffer.getInt16WithDefaultEncoding();\n                var dxp2 = inputBuffer.getInt16WithDefaultEncoding() / 10;\n                var dyp2 = inputBuffer.getInt16WithDefaultEncoding() / 10;\n\n                label.chars.push({\n                    letter: letter,\n                    angle: angle2,\n                    x: dxp2,\n                    y: dyp2\n                });\n            }\n\n            completeFeature.label = label;\n            layer.features.push(completeFeature);\n        }\n    },\n    readPolygonOrLineTile: function (inputBuffer, layer) {\n        // read tileType\n        // 83 = compressed polygon\n        // 79 = compressed line\n        // 71 = compressed point\n        var tileType = inputBuffer.getInt8WithDefaultEncoding();\n        if (!(tileType === 83 || tileType === 79 || tileType === 71)) {\n            console.log(\'Unrecognized tile format\');\n            return;\n        }\n\n        var nrOfFeatures = inputBuffer.getUint32WithDefaultEncoding();\n\n        for (var j = 0; j < nrOfFeatures; j++) {\n            var relativeX = 128;\n            var relativeY = 128;\n            var ptSwitch = false;\n\n            var part = [];\n            var featureId = inputBuffer.getUint32WithDefaultEncoding();\n\n            var completeFeature = new Feature();\n            completeFeature.featureId = featureId;\n\n            var remainInLoop = true;\n            while (remainInLoop) {\n                var byteCode = inputBuffer.getInt8WithDefaultEncoding();\n\n                switch (byteCode) {\n                case this.CODE_END_OF_FEATURE:\n                    completeFeature.parts.push(part);\n                    completeFeature.calculateBoundingBox();\n                    remainInLoop = false;\n                    break;\n                case this.CODE_END_OF_PART:\n                    completeFeature.parts.push(part);\n                    part = [];\n                    relativeX = 128;\n                    relativeY = 128;\n                    break;\n                case this.CODE_POSITIVE_OFFSET:\n                    if (ptSwitch) {\n                        relativeY += 250;\n                    } else {\n                        relativeX += 250;\n                    }\n                    break;\n                case this.CODE_NEGATIVE_OFFSET:\n                    if (ptSwitch) {\n                        relativeY -= 250;\n                    } else {\n                        relativeX -= 250;\n                    }\n                    break;\n                default:\n                    var pointPos = 0;\n                    if (ptSwitch) {\n                        pointPos = byteCode + relativeY;\n                        relativeY = pointPos;\n                    } else {\n                        pointPos = byteCode + relativeX;\n                        relativeX = pointPos;\n                    }\n                    part.push(pointPos);\n                    ptSwitch = !ptSwitch;\n                }\n            }\n            layer.features.push(completeFeature);\n        }\n\n    },\n    /**\n     * Reads {{#crossLink \'GeoTileData\'}}{{/crossLink}} from the passed instance of {{#crossLink \'Util.ByteBufferReader\'}}{{/crossLink}} wrapped around GeoTileData binary stream.\n     *\n     * @method readTile\n     * @param {Util.ByteBufferReader} inputBuffer Instance of {{#crossLink \'Util.ByteBufferReader\'}}{{/crossLink}} wrapped around GeoTileData binary stream.\n     * @param {Array} layersToFetch An array of layers that are present in the tile.\n     * @returns {GeoTileData} New instance of {{#crossLink \'GeoTileData\'}}{{/crossLink}}.\n     */\n    readTile: function (inputBuffer, layersToFetch) {\n        // nrTiles\n        inputBuffer.getInt32WithDefaultEncoding();\n        //var totalPoints = 0;\n\n        var tile = new GeoTileData();\n\n        for (var k = 0; k < layersToFetch.length; k++) {\n            // layerId\n            inputBuffer.getUint32WithDefaultEncoding();\n            // isCentroid\n            inputBuffer.getInt8WithDefaultEncoding();\n            // zoom\n            inputBuffer.getUint16WithDefaultEncoding();\n            // tileIndex\n            inputBuffer.getUint32WithDefaultEncoding();\n            // tileIndex2\n            inputBuffer.getUint32WithDefaultEncoding();\n\n            var tileLen = inputBuffer.getInt32WithDefaultEncoding();\n            if (tileLen === 0) {\n                continue;\n            }\n\n            var layer = new LayerData();\n\n            layer.tile = tile;\n            // call the right method based on feature type\n\n            switch (layersToFetch[k].featureType) {\n            case Enums.FeatureType.POLYGON:\n            case Enums.FeatureType.LINE:\n                this.readPolygonOrLineTile(inputBuffer, layer);\n                break;\n            case Enums.FeatureType.POINT:\n                this.readPointTile(inputBuffer, layer);\n                break;\n            case Enums.FeatureType.LABEL:\n                this.readLabelTile(inputBuffer, layer);\n                break;\n            case Enums.FeatureType.POINT_LABEL:\n                this.readPointLabelTile(inputBuffer, layer);\n                break;\n            case Enums.FeatureType.LINE_LABEL:\n                this.readLineLabelTile(inputBuffer, layer);\n                break;\n            default:\n                console.log(\'Warning: FeatureType not matched!\');\n            }\n\n            layer.featureType = layersToFetch[k].featureType;\n            layer.layer = layersToFetch[k];\n            tile.layers.push(layer);\n\n        }\n        return tile;\n    },\n    /**\n     * Read binary data tile\n     * @param  {Util.ByteBufferReader} inputBuffer\n     * @param  {String} tiles Tiles to request in following format: zoomLevel.tileIndex[,zoomLevel.tileIndex...]\n     * @return {Object}             Columns with processed data\n     */\n    readDataTile: function (inputBuffer, tiles) {\n        var inputBufferLength = inputBuffer.getByteLength();\n        var dt = {};\n        dt.columns = [];\n        dt.tiles = tiles.split(\',\');\n        while (inputBuffer.getOffset() < inputBufferLength) {\n            inputBuffer.skipInt32(); // fileType signature\n            inputBuffer.skipInt32(); // number of rows\n            // var numberOfRows = inputBuffer.getInt32WithDefaultEncoding();\n            var numOfColumns = inputBuffer.getInt32WithDefaultEncoding();\n\n            //var featureIdsColumn = layer.recordset.getColumnByName(\'SEAddedFeatureId\');\n            //var numberOfRowsBeforeUpdate = (featureIdsColumn === undefined ? 0 : featureIdsColumn.rowCount);\n\n            for (var i = 0; i < numOfColumns; i++) {\n                var colType = inputBuffer.getInt8WithDefaultEncoding();\n\n                var colNameLen = inputBuffer.getInt32WithDefaultEncoding();\n                var tmp = [];\n\n                // utf string\n                for (var k = 0; k < colNameLen; k++) {\n                    tmp.push(inputBuffer.getInt8WithDefaultEncoding());\n                }\n\n                var arbuf = new Uint8Array(tmp);\n\n                var colName = uintToString(arbuf);\n                //console.log(\'   COLUMN NAME:  \' + colName);\n\n                var dataColumn; //= layer.recordset.getColumnByName(colName);\n\n                //if (dataColumn === undefined)\n                //{\n                // We don\'t have the column, so let\'s create it...\n                //dataColumn = new DataColumn(colName, colType, colName);\n                dataColumn = {\n                    name: colName,\n                    rowCount: 0\n                };\n                //layer.recordset.addColumn(dataColumn);\n                //}\n\n                var colSize = inputBuffer.getInt32WithDefaultEncoding();\n\n                dataColumn.rowCount += this.readColumnValues(inputBuffer, colSize, colType, dataColumn);\n                dt.columns.push(dataColumn);\n\n                // do this when the record set is available\n                //var featureIdsColumnData = featureIdsColumn.getColumnData();\n                //var featureIndex = layer.recordset.getFeatureIndex();\n\n                //for (var j = numberOfRowsBeforeUpdate; j < featureIdsColumn.rowCount; j++)\n                //{\n                //featureIndex[featureIdsColumnData[j]] = j;\n                //}\n            }\n        }\n        //console.log(\'readDataTile took \',((new Date()).getTime() - s));\n        return dt;\n    },\n    readColumnValues: function (buf, colSize, colType, dataColumn) {\n        var val;\n        var finalOffset = buf.offset + colSize;\n        // first chunk since this is new\n        dataColumn.data = [];\n        var columnData = dataColumn.data; //getColumnData();\n        var insertedRows = 0;\n        switch (colType) {\n        case 1:\n            while (buf.offset < finalOffset) {\n                val = buf.getUint16WithDefaultEncoding();\n                //columnData.push();\n\n                if (val === 65533) {\n                    columnData.push(null);\n                } else {\n                    columnData.push(val);\n                }\n            }\n            insertedRows = colSize / 2;\n\n            break;\n        case 2:\n            while (buf.offset < finalOffset) {\n                val = buf.getInt16WithDefaultEncoding();\n                //columnData.push();\n\n                if (val === 32765) {\n                    columnData.push(null);\n                } else {\n                    columnData.push(val);\n                }\n            }\n            insertedRows = colSize / 2;\n            break;\n        case 3:\n            while (buf.offset < finalOffset) {\n                val = buf.getUint32WithDefaultEncoding();\n                // null value\n                if (val === 4294967293) {\n                    columnData.push(null);\n                } else {\n                    columnData.push(val);\n                }\n            }\n            insertedRows = colSize / 4;\n            break;\n        case 4:\n            while (buf.offset < finalOffset) {\n                val = buf.getInt32WithDefaultEncoding();\n                //columnData.push();\n                if (val === 2147483645) {\n                    columnData.push(null);\n                } else {\n                    columnData.push(val);\n                }\n            }\n            insertedRows = colSize / 4;\n            break;\n        case 5:\n            while (buf.offset < finalOffset) {\n                columnData.push(buf.getFloat32WithDefaultEncoding());\n            }\n            insertedRows = colSize / 4;\n            break;\n        case 6:\n            while (buf.offset < finalOffset) {\n                columnData.push(buf.getFloat64WithDefaultEncoding());\n            }\n\n            insertedRows = colSize / 8;\n            break;\n        case 7: // STRING\n            var tmp = [];\n            var len = (colSize - 1);\n            // utf string\n            for (var k = 0; k < len; k++) {\n                tmp.push(buf.getInt8WithDefaultEncoding());\n            }\n\n            var arbuf = new Uint8Array(tmp);\n\n            var delimiter = uintToString(new Uint8Array([buf.getInt8WithDefaultEncoding()]));\n\n            var strvals = uintToString(arbuf).split(delimiter);\n\n            for (var i = 0; i < strvals.length; i++) {\n                columnData.push(strvals[i]);\n            }\n            insertedRows = strvals.length;\n            break;\n        case 8:\n            //64 bit integer!\n            while (buf.offset < finalOffset) {\n                var lsb = buf.getUint32WithDefaultEncoding();\n                var msb = buf.getUint32WithDefaultEncoding();\n\n                var result = 0;\n                if (msb & 0x80000000) {\n                    //negative number, 2\'s complement:\n                    msb ^= 0xFFFFFFFF;\n                    lsb ^= 0xFFFFFFFF;\n                    result = -(Number(msb) * 4294967296 + Number(lsb) + 1);\n                } else {\n                    result = Number(msb) * 4294967296 + Number(lsb);\n                }\n\n                columnData.push(result);\n            }\n            insertedRows = colSize / 8;\n            break;\n        }\n\n        return insertedRows;\n    }\n\n});\nif (typeof self !== \'undefined\') {\n    var tr = new TileReader();\n\n    var inWorker = self.DedicatedWorkerGlobalScope !== undefined;\n    if (inWorker) {\n        self.onmessage = function (e) {\n            var buf = new Util.ByteBufferReader(e.data.buffer, true);\n            var dt = tr.readDataTile(buf, e.data.tiles);\n            postMessage({\n                callbackKey: e.data.callbackKey,\n                dt: dt\n            });\n        };\n    }\n}\n\nmodule.exports = TileReader;\n\n},{"./class":1,"./enums":2,"./feature":3,"./geoTileData":4,"./layerData":5,"./util":8}],8:[function(require,module,exports){\n\'use strict\';\n\nvar Class = require(\'./class\');\n\n/**\n * Utility class that provides utility classes.\n *\n * @class Util\n * @static\n */\nvar Util = {};\n\nUtil.NamespacedHashtable = function (description, defaultValue) {\n    var data = {};\n    var namespaces = description.split(\'.\');\n\n    if (namespaces.length === 1 && namespaces[0] === \'\') {\n        if (defaultValue !== undefined && Array.isArray(defaultValue)) {\n            data = defaultValue.slice(0);\n        }\n        return data;\n    }\n\n    this[namespaces[0]] = function (value) {\n        if (arguments.length === 0) {\n            return data;\n        }\n\n        if (data[value] === undefined) {\n            data[value] = new Util.NamespacedHashtable(namespaces.slice(1).join(\'.\'), defaultValue);\n        }\n        return data[value];\n    };\n\n    this.get = function () {\n        return data;\n    };\n};\n\n/**\n * Wrapper around DataView class. As opposed to the DataView class, this class tracks\n * the current position in stream when reading data.\n *\n * @class ByteBufferReader\n * @constructor\n * @param {DataView} buffer Instance of DataView wrapped around binary data\n * @param {Boolean} [littleEndian=false] Set little endian as default byte order when reading data from the stream\n */\nUtil.ByteBufferReader = Class.extend({\n    littleEndian: false,\n    stream: null,\n    offset: 0,\n    init: function (buffer, littleEndian) {\n        if (typeof littleEndian === \'boolean\') {\n            this.littleEndian = littleEndian;\n        }\n\n        this.stream = new DataView(buffer);\n    },\n\n    /**\n     * Returns current position in stream\n     *\n     * @return {Number} Current position in stream\n     */\n    getOffset: function () {\n        return this.offset;\n    },\n\n    /**\n     * Returns byte length of the underlying stream\n     *\n     * @return {Number} Byte length of the underlying stream\n     */\n    getByteLength: function () {\n        return this.stream.byteLength;\n    },\n\n    /**\n     * Reads an unsigned 8bit integer from the stream.\n     *\n     * @method getUint8WithDefaultEncoding\n     * @return {Number} Returns an unsigned 8bit integer value.\n     */\n    getUint8WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 1;\n        return this.stream.getUint8(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 16bit integer from the stream.\n     *\n     * @method getUint16WithDefaultEncoding\n     * @return {Number} Returns an unsigned 16bit integer value.\n     */\n    getUint16WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 2;\n        return this.stream.getUint16(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 32bit integer from the stream.\n     *\n     * @method getUint32WithDefaultEncoding\n     * @return {Number} Returns an unsigned 32bit integer value.\n     */\n    getUint32WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 4;\n        return this.stream.getUint32(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads a signed 8bit integer from the stream.\n     *\n     * @method getInt8WithDefaultEncoding\n     * @return {Number} Returns a signed 8bit integer value.\n     */\n    getInt8WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 1;\n        return this.stream.getInt8(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads a signed 16bit integer from the stream.\n     *\n     * @method getInt16WithDefaultEncoding\n     * @return {Number} Returns a signed 16bit integer value.\n     */\n    getInt16WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 2;\n        return this.stream.getInt16(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads a signed 32bit integer from the stream.\n     *\n     * @method getInt32WithDefaultEncoding\n     * @return {Number} Returns a signed 32bit integer value.\n     */\n    getInt32WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 4;\n        return this.stream.getInt32(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads a 32bit floating point number from the stream.\n     *\n     * @method getFloat32WithDefaultEncoding\n     * @return {Number} Returns a 32bit floating point number\n     */\n    getFloat32WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 4;\n        return this.stream.getFloat32(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads a 64bit floating point number from the stream.\n     *\n     * @method getFloat64WithDefaultEncoding\n     * @return {Number} Returns a 64bit floating point number\n     */\n    getFloat64WithDefaultEncoding: function () {\n        var offset = this.offset;\n        this.offset += 8;\n        return this.stream.getFloat64(offset, this.littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 8bit integer from the stream.\n     *\n     * @method getUint8WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns an unsigned 8bit integer value.\n     */\n    getUint8WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 1;\n        return this.stream.getUint8(offset, littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 16bit integer from the stream.\n     *\n     * @method getUint16WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns an unsigned 16bit integer value.\n     */\n    getUint16WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 2;\n        return this.stream.getUint16(offset, littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 32bit integer from the stream.\n     *\n     * @method getUint32WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns an unsigned 32bit integer value.\n     */\n    getUint32WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 4;\n        return this.stream.getUint32(offset, littleEndian);\n    },\n\n    /**\n     * Reads a signed 8bit integer from the stream.\n     *\n     * @method getInt8WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a signed 8bit integer value.\n     */\n    getInt8WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 1;\n        return this.stream.getInt8(offset, littleEndian);\n    },\n\n    /**\n     * Reads a signed 16bit integer from the stream.\n     *\n     * @method getInt16WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a signed 16bit integer value.\n     */\n    getInt16WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 2;\n        return this.stream.getInt16(offset, littleEndian);\n    },\n\n    /**\n     * Reads a signed 32bit integer from the stream.\n     *\n     * @method getInt32WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a signed 32bit integer value.\n     */\n    getInt32WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 4;\n        return this.stream.getInt32(offset, littleEndian);\n    },\n\n    /**\n     * Reads a 32bit floating point number from the stream.\n     *\n     * @method getFloat32WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a 32bit floating point number\n     */\n    getFloat32WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 4;\n        return this.stream.getFloat32(offset, littleEndian);\n    },\n\n    /**\n     * Reads a 64bit floating point number from the stream.\n     *\n     * @method getFloat64WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a 64bit floating point number\n     */\n    getFloat64WithEncoding: function (littleEndian) {\n        var offset = this.offset;\n        this.offset += 8;\n        return this.stream.getFloat64(offset, littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 8bit integer from the stream.\n     *\n     * @method getUint8\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns an unsigned 8bit integer value.\n     */\n    getUint8: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 1;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getUint8(offset, littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 16bit integer from the stream.\n     *\n     * @method getUint16\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns an unsigned 16bit integer value.\n     */\n    getUint16: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 2;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getUint16(offset, littleEndian);\n    },\n\n    /**\n     * Reads an unsigned 32bit integer from the stream.\n     *\n     * @method getUint32\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns an unsigned 32bit integer value.\n     */\n    getUint32: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 4;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getUint32(offset, littleEndian);\n    },\n\n    /**\n     * Reads a signed 8bit integer from the stream.\n     *\n     * @method getInt8\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a signed 8bit integer value.\n     */\n    getInt8: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 1;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getInt8(offset, littleEndian);\n    },\n\n    /**\n     * Reads a signed 16bit integer from the stream.\n     *\n     * @method getInt16\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a signed 16bit integer value.\n     */\n    getInt16: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 2;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getInt16(offset, littleEndian);\n    },\n\n    /**\n     * Reads a signed 32bit integer from the stream.\n     *\n     * @method getInt32\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a signed 32bit integer value.\n     */\n    getInt32: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 4;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getInt32(offset, littleEndian);\n    },\n\n    /**\n     * Reads a 32bit floating point number from the stream.\n     *\n     * @method getFloat32\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a 32bit floating point number\n     */\n    getFloat32: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 4;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getFloat32(offset, littleEndian);\n    },\n\n    /**\n     * Reads a 64bit floating point number from the stream.\n     *\n     * @method getFloat64\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a 64bit floating point number\n     */\n    getFloat64: function (offset, littleEndian) {\n        if (typeof offset !== \'number\') {\n            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n            offset = this.offset;\n            this.offset += 8;\n        } else if (typeof littleEndian !== \'boolean\') {\n            littleEndian = this.littleEndian;\n        }\n\n        return this.stream.getFloat64(offset, littleEndian);\n    },\n\n    /**\n     * Moves the current position in stream\n     *\n     * @method skip\n     * @param {Number} [offset] How many bytes to skip. Negative value will move the position backwards.\n     */\n    skip: function (offset) {\n        this.offset += offset;\n    },\n\n    /**\n     * Moves the current position forward by 8bits (1byte)\n     *\n     * @method skipInt8\n     */\n    skipInt8: function () {\n        this.skip(1);\n    },\n\n    /**\n     * Moves the current position forward by 16bits (2bytes)\n     *\n     * @method skipInt16\n     */\n    skipInt16: function () {\n        this.skip(2);\n    },\n\n    /**\n     * Moves the current position forward by 32bits (4byte)\n     *\n     * @method skipInt32\n     */\n    skipInt32: function () {\n        this.skip(4);\n    }\n});\n\n/**\n * Wrapper around DataView class. As opposed to the DataView class, this class tracks\n * the current position in stream when reading data.\n *\n * @class ByteBufferReader\n * @constructor\n * @param {DataView} buffer Instance of DataView wrapped around binary data\n * @param {Boolean} [littleEndian=false] Set little endian as default byte order when reading data from the stream\n */\nUtil.ByteBufferReaderOld = Class.extend({\n    littleEndian: false,\n    stream: null,\n    offset: 0,\n    init: function (buffer, littleEndian) {\n\n        if (typeof littleEndian === \'boolean\') {\n            this.littleEndian = littleEndian;\n        }\n\n        this.stream = new Uint8Array(buffer);\n    },\n\n    /**\n     * Returns current position in stream\n     *\n     * @return {Number} Current position in stream\n     */\n    getOffset: function () {\n        return this.offset;\n    },\n\n    /**\n     * Returns byte length of the underlying stream\n     *\n     * @return {Number} Byte length of the underlying stream\n     */\n    getByteLength: function () {\n        return this.stream.length;\n    },\n\n    /**\n     * Reads an unsigned 8bit integer from the stream.\n     *\n     * @method getUint8WithDefaultEncoding\n     * @return {Number} Returns an unsigned 8bit integer value.\n     */\n    getUint8WithDefaultEncoding: function () {\n        // var offset = this.offset;\n        // this.offset += 1;\n        //return this.stream.getUint8(offset, this.littleEndian);\n        var offset = this.offset;\n        this.offset++;\n        return this.stream[offset] & 0xFF;\n    },\n\n    /**\n     * Reads an unsigned 16bit integer from the stream.\n     *\n     * @method getUint16WithDefaultEncoding\n     * @return {Number} Returns an unsigned 16bit integer value.\n     */\n    getUint16WithDefaultEncoding: function () {\n        // var offset = this.offset;\n        // this.offset += 2;\n        // return this.stream.getUint16(offset, this.littleEndian);\n\n        var offset = this.offset;\n        this.offset += 2;\n\n        if (this.littleEndian) {\n            return (this.stream[offset] & 0xFF) |\n                ((this.stream[offset + 1] & 0xFF) << 8);\n        } else {\n            return (this.stream[offset + 1] & 0xFF) |\n                ((this.stream[offset] & 0xFF) << 8);\n        }\n    },\n\n    /**\n     * Reads an unsigned 32bit integer from the stream.\n     *\n     * @method getUint32WithDefaultEncoding\n     * @return {Number} Returns an unsigned 32bit integer value.\n     */\n    getUint32WithDefaultEncoding: function () {\n\n        //  var offset = this.offset;\n        //  this.offset += 4;\n        // return this.stream.getUint32(offset, this.littleEndian);\n        var offset = this.offset,\n            r;\n        this.offset += 4;\n\n        if (this.littleEndian) {\n            r = (this.stream[offset + 0] & 0xFF) |\n                ((this.stream[offset + 1] & 0xFF) << 8) |\n                ((this.stream[offset + 2] & 0xFF) << 16) |\n                ((this.stream[offset + 3] & 0xFF) << 24);\n\n        } else {\n            r = (this.stream[offset + 3] & 0xFF) |\n                ((this.stream[offset + 2] & 0xFF) << 8) |\n                ((this.stream[offset + 1] & 0xFF) << 16) |\n                ((this.stream[offset + 0] & 0xFF) << 24);\n        }\n        if (r & 0x80000000) {\n            r = (r & 0x7FFFFFFF) + 0x80000000;\n        }\n\n        return r;\n    },\n\n    /**\n     * Reads a signed 8bit integer from the stream.\n     *\n     * @method getInt8WithDefaultEncoding\n     * @return {Number} Returns a signed 8bit integer value.\n     */\n    getInt8WithDefaultEncoding: function () {\n        //  var offset = this.offset;\n        //  this.offset += 1;\n        //  return this.stream.getInt8(offset, this.littleEndian);\n        var s = this.stream[this.offset] & 0xFF;\n        this.offset++;\n        return (s ^ 0x80) - 0x80;\n    },\n\n    /**\n     * Reads a signed 16bit integer from the stream.\n     *\n     * @method getInt16WithDefaultEncoding\n     * @return {Number} Returns a signed 16bit integer value.\n     */\n    getInt16WithDefaultEncoding: function () {\n        //   var offset = this.offset;\n        //  this.offset += 2;\n        // return this.stream.getInt16(offset, this.littleEndian);\n        var r;\n        var offset = this.offset;\n        this.offset += 2;\n\n        if (this.littleEndian) {\n            r = (this.stream[offset] & 0xFF) |\n                ((this.stream[offset + 1] & 0xFF) << 8);\n        } else {\n            r = (this.stream[offset + 1] & 0xFF) |\n                ((this.stream[offset] & 0xFF) << 8);\n        }\n        return (r ^ 0x8000) - 0x8000;\n    },\n\n    /**\n     * Reads a signed 32bit integer from the stream.\n     *\n     * @method getInt32WithDefaultEncoding\n     * @return {Number} Returns a signed 32bit integer value.\n     */\n    getInt32WithDefaultEncoding: function () {\n        // var offset = this.offset;\n        // this.offset += 4;\n        // return this.stream.getInt32(offset, this.littleEndian);\n\n        var offset = this.offset;\n        this.offset += 4;\n\n        if (this.littleEndian) {\n            return (this.stream[offset + 0] & 0xFF) |\n                ((this.stream[offset + 1] & 0xFF) << 8) |\n                ((this.stream[offset + 2] & 0xFF) << 16) |\n                ((this.stream[offset + 3] & 0xFF) << 24);\n\n        } else {\n            return (this.stream[offset + 3] & 0xFF) |\n                ((this.stream[offset + 2] & 0xFF) << 8) |\n                ((this.stream[offset + 1] & 0xFF) << 16) |\n                ((this.stream[offset + 0] & 0xFF) << 24);\n        }\n    },\n\n    /**\n     * Reads a 32bit floating point number from the stream.\n     *\n     * @method getFloat32WithDefaultEncoding\n     * @return {Number} Returns a 32bit floating point number\n     */\n    getFloat32WithDefaultEncoding: function () {\n        //  var offset = this.offset;\n        // this.offset += 4;\n        // return this.stream.getFloat32(offset, this.littleEndian);\n\n        var s = this.stream; //this.readBytes(8);\n\n        var offset = this.offset;\n        var sn = 1;\n\n        this.offset += 8;\n\n        if (this.littleEndian) {\n            offset += 7;\n            sn = -1;\n        }\n\n        var sign = (s[offset + 0 * sn] & 0x80) >> 7;\n        var exponent = ((s[offset + 0 * sn] & 0x7F) << 1) | ((s[offset + 1 * sn] & 0x80) >> 7);\n        var fraction = ((s[offset + 1 * sn] & 0x7F) << 16) |\n            ((s[offset + 2 * sn] & 0xFF) << 8) |\n            (s[offset + 3 * sn] & 0xFF);\n\n        sign = Math.pow(-1, sign);\n\n        if (exponent === 255) {\n\n            if (fraction !== 0) {\n                return Number.NaN;\n            } else if (sign < 0) {\n                return -Infinity;\n            } else {\n                return Infinity;\n            }\n        } else if (exponent > 0) {\n            return sign * Math.pow(2, exponent - 127) * (fraction / 0x800000 + 1);\n        } else if (fraction !== 0) {\n            return sign * Math.pow(2, -126) * (fraction / 0x800000);\n        } else {\n            return 0;\n        }\n    },\n\n    /**\n     * Reads a 64bit floating point number from the stream.\n     *\n     * @method getFloat64WithDefaultEncoding\n     * @return {Number} Returns a 64bit floating point number\n     */\n    getFloat64WithDefaultEncoding: function () {\n\n        //  var offset = this.offset;\n        //  this.offset += 8;\n        //  return this.stream.getFloat64(offset, this.littleEndian);\n\n        var s = this.stream; //this.readBytes(8);\n        var pow = Math.pow;\n\n        var offset = this.offset;\n        var sn = 1;\n        this.offset += 8;\n\n        if (this.littleEndian) {\n            offset += 7;\n            sn = -1;\n        }\n\n        var sign = (s[offset + 0 * sn] & 0x80) >> 7;\n        var exponent = ((s[offset + 0 * sn] & 0x7F) << 4) | ((s[offset + 1 * sn] & 0xF0) >> 4);\n        var fraction = ((s[offset + 1 * sn] & 0x0F) * pow(2, 48)) +\n            s[offset + 2 * sn] * pow(2, 40) +\n            s[offset + 3 * sn] * pow(2, 32) +\n            ((s[offset + 4 * sn] & 0xFF) << 24) +\n            ((s[offset + 5 * sn] & 0xFF) << 16) +\n            ((s[offset + 6 * sn] & 0xFF) << 8) +\n            s[offset + 7 * sn];\n\n        sign = pow(-1, sign);\n\n        if (exponent === 2047) {\n            if (fraction !== 0) {\n                return Number.NaN;\n            } else if (sign < 0) {\n                return -Infinity;\n            } else {\n                return Infinity;\n            }\n        } else if (exponent > 0) {\n            return sign * Math.pow(2, exponent - 1023) * (fraction / 0x10000000000000 + 1);\n        } else if (fraction !== 0) {\n            return sign * Math.pow(2, -1022) * (fraction / 0x10000000000000);\n        } else {\n            return 0;\n        }\n    },\n\n    /**\n     * Reads an unsigned 8bit integer from the stream.\n     *\n     * @method getUint8WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns an unsigned 8bit integer value.\n     */\n    getUint8WithEncoding: function (littleEndian) {\n        //var offset = this.offset;\n        //this.offset += 1;\n        //return this.stream.getUint8(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getUint8WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads an unsigned 16bit integer from the stream.\n     *\n     * @method getUint16WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns an unsigned 16bit integer value.\n     */\n    getUint16WithEncoding: function (littleEndian) {\n        // var offset = this.offset;\n        // this.offset += 2;\n        // return this.stream.getUint16(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getUint16WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads an unsigned 32bit integer from the stream.\n     *\n     * @method getUint32WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns an unsigned 32bit integer value.\n     */\n    getUint32WithEncoding: function (littleEndian) {\n        // var offset = this.offset;\n        // this.offset += 4;\n        // return this.stream.getUint32(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getUint32WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads a signed 8bit integer from the stream.\n     *\n     * @method getInt8WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a signed 8bit integer value.\n     */\n    getInt8WithEncoding: function (littleEndian) {\n        //  var offset = this.offset;\n        //  this.offset += 1;\n        //  return this.stream.getInt8(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getInt8WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads a signed 16bit integer from the stream.\n     *\n     * @method getInt16WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a signed 16bit integer value.\n     */\n    getInt16WithEncoding: function (littleEndian) {\n        // var offset = this.offset;\n        // this.offset += 2;\n        // return this.stream.getInt16(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getInt16WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads a signed 32bit integer from the stream.\n     *\n     * @method getInt32WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a signed 32bit integer value.\n     */\n    getInt32WithEncoding: function (littleEndian) {\n        // var offset = this.offset;\n        // this.offset += 4;\n        // return this.stream.getInt32(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getInt32WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads a 32bit floating point number from the stream.\n     *\n     * @method getFloat32WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a 32bit floating point number\n     */\n    getFloat32WithEncoding: function (littleEndian) {\n        //  var offset = this.offset;\n        //  this.offset += 4;\n        //  return this.stream.getFloat32(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getFloat32WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads a 64bit floating point number from the stream.\n     *\n     * @method getFloat64WithEncoding\n     * @param {Boolean} [littleEndian] Read data in little endian byte order.\n     * @return {Number} Returns a 64bit floating point number\n     */\n    getFloat64WithEncoding: function (littleEndian) {\n        //  var offset = this.offset;\n        //  this.offset += 8;\n        //  return this.stream.getFloat64(offset, littleEndian);\n        var enc = this.littleEndian;\n        this.littleEndian = littleEndian;\n        var r = this.getFloat64WithDefaultEncoding();\n        this.littleEndian = enc;\n        return r;\n    },\n\n    /**\n     * Reads an unsigned 8bit integer from the stream.\n     *\n     * @method getUint8\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns an unsigned 8bit integer value.\n     */\n    getUint8: function (offset, littleEndian) {\n\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 1;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getUint8(offset, littleEndian);\n\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getUint8WithEncoding(littleEndian);\n        } else {\n            r = this.getUint8WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n\n    },\n\n    /**\n     * Reads an unsigned 16bit integer from the stream.\n     *\n     * @method getUint16\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns an unsigned 16bit integer value.\n     */\n    getUint16: function (offset, littleEndian) {\n\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 2;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getUint16(offset, littleEndian);\n\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getUint16WithEncoding(littleEndian);\n        } else {\n            r = this.getUint16WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n\n    },\n\n    /**\n     * Reads an unsigned 32bit integer from the stream.\n     *\n     * @method getUint32\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns an unsigned 32bit integer value.\n     */\n    getUint32: function (offset, littleEndian) {\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 4;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getUint32(offset, littleEndian);\n\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getUint32WithEncoding(littleEndian);\n        } else {\n            r = this.getUint32WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n    },\n\n    /**\n     * Reads a signed 8bit integer from the stream.\n     *\n     * @method getInt8\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a signed 8bit integer value.\n     */\n    getInt8: function (offset, littleEndian) {\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 1;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getInt8(offset, littleEndian);\n\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getInt8WithEncoding(littleEndian);\n        } else {\n            r = this.getInt8WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n    },\n\n    /**\n     * Reads a signed 16bit integer from the stream.\n     *\n     * @method getInt16\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a signed 16bit integer value.\n     */\n    getInt16: function (offset, littleEndian) {\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 2;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getInt16(offset, littleEndian);\n\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getInt16WithEncoding(littleEndian);\n        } else {\n            r = this.getInt16WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n    },\n\n    /**\n     * Reads a signed 32bit integer from the stream.\n     *\n     * @method getInt32\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a signed 32bit integer value.\n     */\n    getInt32: function (offset, littleEndian) {\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 4;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getInt32(offset, littleEndian);\n\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getInt32WithEncoding(littleEndian);\n        } else {\n            r = this.getInt32WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n    },\n\n    /**\n     * Reads a 32bit floating point number from the stream.\n     *\n     * @method getFloat32\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a 32bit floating point number\n     */\n    getFloat32: function (offset, littleEndian) {\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 4;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getFloat32(offset, littleEndian);\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getFloat32WithEncoding(littleEndian);\n        } else {\n            r = this.getFloat32WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n    },\n\n    /**\n     * Reads a 64bit floating point number from the stream.\n     *\n     * @method getFloat64\n     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.\n     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.\n     * @return {Number} Returns a 64bit floating point number\n     */\n    getFloat64: function (offset, littleEndian) {\n        //        if (typeof offset !== \'number\')\n        //        {\n        //            littleEndian = (typeof offset === \'boolean\' ? offset : this.littleEndian);\n        //            offset = this.offset;\n        //            this.offset += 8;\n        //        }\n        //        else if (typeof littleEndian !== \'boolean\')\n        //        {\n        //            littleEndian = this.littleEndian;\n        //        }\n        //\n        //        return this.stream.getFloat64(offset, littleEndian);\n        var r;\n        var oldOffset = -1;\n\n        if (typeof offset === \'number\') {\n            oldOffset = this.offset;\n            this.offset = offset;\n        }\n\n        if (typeof littleEndian === \'boolean\') {\n            r = this.getFloat64WithEncoding(littleEndian);\n        } else {\n            r = this.getFloat64WithDefaultEncoding();\n        }\n\n        if (oldOffset > 0) {\n            this.offset = oldOffset;\n        }\n\n        return r;\n    },\n\n    /**\n     * Moves the current position in stream\n     *\n     * @method skip\n     * @param {Number} [offset] How many bytes to skip. Negative value will move the position backwards.\n     */\n    skip: function (offset) {\n        this.offset += offset;\n    },\n\n    /**\n     * Moves the current position forward by 8bits (1byte)\n     *\n     * @method skipInt8\n     */\n    skipInt8: function () {\n        this.skip(1);\n    },\n\n    /**\n     * Moves the current position forward by 16bits (2bytes)\n     *\n     * @method skipInt16\n     */\n    skipInt16: function () {\n        this.skip(2);\n    },\n\n    /**\n     * Moves the current position forward by 32bits (4byte)\n     *\n     * @method skipInt32\n     */\n    skipInt32: function () {\n        this.skip(4);\n    }\n});\n\n/**\n * Gets matching tiles based on tile index and zoom level range\n *\n * @method getMatchingTiles\n * @param {Integer} inputTileIndex Input tile index\n * @param {Integer} inputZoomLevel Input zoom level\n * @param {Integer} outputZoomLevel Output zoom level\n * @return {Array of Integers} Returns list of tile indices\n */\nUtil.getMatchingTiles = function (inputTileIndex, inputZoomLevel, outputZoomLevel) {\n\n    var outputIndices = [];\n\n    if (inputZoomLevel < outputZoomLevel) {\n\n        var numberOfTiles = 1 << ((outputZoomLevel - inputZoomLevel) << 1);\n\n        for (var i = 0; i < numberOfTiles; i++) {\n            outputIndices.push((inputTileIndex * numberOfTiles) + i);\n        }\n\n    } else if (inputZoomLevel > outputZoomLevel) {\n\n        //var toAdd = inputTileIndex >> ((inputZoomLevel - outputZoomLevel) << 1);\n        var toAdd = Math.floor(inputTileIndex / Math.pow(4, inputZoomLevel - outputZoomLevel));\n\n        outputIndices.push(toAdd);\n\n    } else {\n\n        outputIndices.push(inputTileIndex);\n    }\n\n    return outputIndices;\n};\n\nUtil.guid = function () {\n    return \'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\'.replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0,\n            v = c === \'x\' ? r : (r & 0x3 | 0x8);\n        return v.toString(16);\n    });\n};\n\nUtil.isNode = function () {\n    return typeof window === \'undefined\';\n};\n\nUtil.geo = {\n    polygonFeatureAt: function (layer, tileX, tileY) {\n        for (var j = 0; j < layer.features.length; j++) {\n            var bbox = layer.features[j].boundingBox;\n\n            if (tileX >= bbox.left && tileX <= bbox.right && tileY >= bbox.top && tileY <= bbox.bottom) {\n                var cuts = 0;\n                for (var k = 0; k < layer.features[j].parts.length; k++) {\n                    cuts += this.pointInPolygon(layer.features[j].parts[k], tileX, tileY);\n                }\n\n                if (cuts > 0 && cuts % 2 !== 0) {\n                    var featureId = layer.features[j].featureId;\n\n                    return featureId;\n                }\n            }\n        }\n    },\n\n    pointInPolygon: function (polyVec, x, y) {\n        var i = 0;\n        var j = 0;\n        var c = 0;\n        var npol = polyVec.length;\n\n        for (i = 0, j = npol - 2; i < npol;) {\n            var ix = polyVec[i];\n            var iy = polyVec[i + 1];\n            var jx = polyVec[j];\n            var jy = polyVec[j + 1];\n\n            if ((((iy <= y) && (y < jy)) || ((jy <= y) && (y < iy))) &&\n                (x < (jx - ix) * (y - iy) / (jy - iy) + ix)) {\n                c++;\n            }\n\n            j = i;\n            i += 2;\n        }\n\n        return c;\n\n    },\n    pointToLineSegmentMinDistance: function (x, y, x1, y1, x2, y2) {\n\n        //http://paulbourke.net/geometry/pointline/\n        //http://www.allegro.cc/forums/thread/589720\n\n        //(x1,y1) and (x2,y2) are any two(non-coinciding) points on the line. There is no order requirement.\n\n        var A = x - x1;\n        var B = y - y1;\n        var C = x2 - x1;\n        var D = y2 - y1;\n\n        var dot = A * C + B * D;\n        var lenSq = C * C + D * D;\n        var param = dot / lenSq;\n\n        var xx;\n        var yy;\n\n        if (param < 0) {\n            xx = x1;\n            yy = y1;\n        } else if (param > 1) {\n            xx = x2;\n            yy = y2;\n        } else {\n            xx = x1 + param * C;\n            yy = y1 + param * D;\n        }\n\n        // distance formula:\n        return Math.sqrt((x - xx) * (x - xx) + (y - yy) * (y - yy));\n\n    },\n\n    lineFeatureAt: function (layer, tileX, tileY) {\n        var j,\n            k,\n            i,\n            bbox,\n            cuts,\n            part;\n\n        for (j = 0; j < layer.features.length; j++) {\n            bbox = layer.features[j].boundingBox;\n            if (tileX >= bbox.left && tileX <= bbox.right && tileY >= bbox.top && tileY <= bbox.bottom) {\n                cuts = 0;\n                for (k = 0; k < layer.features[j].parts.length; k++) {\n                    part = layer.features[j].parts[k];\n\n                    for (i = 0; i < part.length - 3; i += 2) {\n                        if (this.pointToLineSegmentMinDistance(tileX, tileY, part[i], part[i + 1], part[i + 2], part[i + 3]) < 2) {\n                            return layer.features[j].featureId;\n                        }\n                    }\n                }\n            }\n        }\n    }\n};\n\nmodule.exports = Util;\n\n},{"./class":1}]},{},[7])'],{type:"text/javascript"})));
}
/*jshint evil:false*/

if (tileReaderWorker) {
    tileReaderWorker.onmessage = function (e) {
        continueDataTileProcessing(e);
    };
}

var mergeDataTileIntoRecordset = function (layer, dt) {
    var recordset = layer.recordset;
    var feturesColumn = recordset.getFeatureIdsColumn();
    var featureColumnName = feturesColumn.getName();
    var numberOfChunks = feturesColumn._data.length;
    var featureIdsColumns = [];
    var tiles = dt.tiles;
    var i;

    for (i = 0; i < dt.columns.length; i++) {
        var dataColumn = recordset.getColumnByName(dt.columns[i].name);

        if (!dataColumn) {
            // TODO: fix this
            var newColumn = new DataColumn(dt.columns[i].name, 'NOT IMPORTANT', dt.columns[i].name);

            newColumn.rowCount = dt.columns[i].rowCount;
            newColumn._data.push(dt.columns[i].data);
            recordset.addColumn(newColumn);
        } else {
            dataColumn._data.push(dt.columns[i].data);
            dataColumn.rowCount += dt.columns[i].rowCount;
        }

        if (dt.columns[i].name === featureColumnName) {
            featureIdsColumns.push(dt.columns[i].data);
        }
    }

    var featureIndex = recordset.getFeatureIndex();
    var tileIndex = recordset.getTileIndex();

    for (i = 0; i < featureIdsColumns.length; i++) {
        var chunk = numberOfChunks + i;
        var len = featureIdsColumns[i].length;
        tileIndex[tiles[i]] = chunk;
        for (var p = 0; p < len; p++) {
            featureIndex[featureIdsColumns[i][p]] = {
                chunk: chunk,
                index: p
            };
        }
    }
};

var continueDataTileProcessing = function (e) {
    if (e.data.callbackKey) {
        var obj = callbacks[e.data.callbackKey];
        var dt = e.data.dt;

        if (obj === undefined) {
            console.log('obj undefined', e.data.callbackKey);
        }
        mergeDataTileIntoRecordset(obj.layer, dt);

        //console.log('stuff on main thread', (window.performance.now() - s));
        // at the end call callback
        obj.callback(obj.tile);
        delete callbacks[e.data.callbackKey];
    }

};

var AttDataProvider = Class.extend({
    fields: undefined,
    layer: undefined,
    _tileReader: undefined,
    init: function (layer, fields) {
        this.fields = fields;
        this.layer = layer;
        this._tileReader = new TileReader();
        this._currentServer = 0;
        this._uniqueId = Util.guid();
        //this.callbacks = {};
    },
    /**
     * Gets records for a data tile from the server
     *
     * @method getRecords
     * @param {String} tile Tile to request in following format: zoomLevel.tileIndex
     * @param {Function} callback Callback to call once the operation has successfully finished
     */
    getRecords: function (tile, callback, bleedingEdge) {

        // console.log('need to get this ', tiles, 'checkBleeds', checkBleeds);
        var attNames = this.fields.join(',');

        // console.log('continueing with  this:', tiles);
        var datasetParam = '';

        if (this.dataSet) {
            datasetParam = '&DatasetId=' + this.dataSet;
        }

        var baseUrl = '';
        var serversLen = this.layer.map.servers.length;
        if (serversLen > 0) {
            baseUrl = this.layer.map.servers[this._currentServer++ % serversLen];
        }

        var url = baseUrl + '/?att_cmd=GetRecords&GeoLayerId=' + this.layer.geoLayerId + datasetParam + '&TileId=' + tile + '&AttributeNames=' + attNames + '&v2=true&projection=' + this.layer.map.projection;

        if (bleedingEdge === true) {
            //callback(tile);
            //return;
            url = baseUrl + '/?att_bleeding_edge_cmd=GetRecords&GeoLayerId=' + this.layer.geoLayerId + datasetParam + '&TileId=' + tile + '&AttributeNames=' + attNames + '&v2=true&projection=' + this.layer.map.projection;
        }

        // it is important to use different key for callbacks than the url alone,
        // since there can be multiple layers with the same geoLayerId
        var callbackKey = url + this.layer.id + this._uniqueId;

        var req = new XMLHttpRequest();

        req.open('GET', url, true);
        req.responseType = 'arraybuffer';

        req.onload = function () {
            var arrayBuffer = req.response;

            if (arrayBuffer.byteLength === 0) {
                if (callback) {
                    callback(tile);
                }
                return;
            }

            // Don't use web workers in case of nodejs and
            // Don't use web workers in case of mobile device and
            // don't use web workers in case of IE because it does not support
            // transferable objects yet :(
            if (isNode || L.Browser.ie || L.Browser.mobile) {
                var buf = new Util.ByteBufferReader(arrayBuffer, true);
                var dt = this._tileReader.readDataTile(buf, tile);
                mergeDataTileIntoRecordset(this.layer, dt);

                if (callback) {
                    callback(tile);
                }

            } else {
                // seperate thread
                var l = this.layer;
                if (callbacks[callbackKey]) {
                    console.log('Warning: Callback already defined for this url! This is probably a bug!');
                }

                callbacks[callbackKey] = {
                    callback: callback,
                    layer: l,
                    tile: tile
                };

                var obj = {
                    buffer: arrayBuffer,
                    callbackKey: callbackKey,
                    tiles: tile
                };

                tileReaderWorker.postMessage(obj, [obj.buffer]);
            }
        }.bind(this);

        req.onerror = function (e) {
            if (callback) {
                callback(e);
            }
        };

        req.send();
    }
});

module.exports = AttDataProvider;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./dataColumn":"/home/senadu/projects/Renderer-Cheetah/src/dataColumn.js","./tileReader":"/home/senadu/projects/Renderer-Cheetah/src/tileReader.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/class.js":[function(require,module,exports){
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
/*jshint strict: false, unused: false, noarg:false */
var initializing = false,
    fnTest = /xyz/.test(function () {
        var xyz;
    }) ? /\b_super\b/ : /.*/;

// The base Class implementation (does nothing)
var Class = function () {};

// Create a new Class that inherits from this class
Class.extend = function (prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    var cb = function (name, fn) {
        return function () {
            var tmp = this._super;

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);
            this._super = tmp;

            return ret;
        };
    };

    // Copy the properties over onto the new prototype
    /*jshint forin:false*/
    for (var name in prop) {
        // Check if we're overwriting an existing function
        prototype[name] = typeof prop[name] === 'function' &&
            typeof _super[name] === 'function' && fnTest.test(prop[name]) ?
            (cb)(name, prop[name]) :
            prop[name];
    }

    // The dummy class constructor
    function Class() {
        // All construction is actually done in the init method
        if (!initializing && this.init) {
            this.init.apply(this, arguments);
        }
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
};
/*jshint strict: true, unused: true, noarg:true */

module.exports = Class;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/color.js":[function(require,module,exports){
"use strict";

var Class = require("./class");
var parseColor = require("color-parser");

/**
 * Represents color
 *
 * @class Color
 * @constructor
 * @param {String} color String representing color in one of the following formats: #rgb, #rrggbb, rgb(r,g,b), rgba(r,g,b,a)
 */

var Color = Class.extend({
    /**
     * Number representing the given color.
     *
     * @property value
     * @type {Number}
     */
    value: undefined,

    /**
     * Object with red, green, blue and alpha components of the given color.
     *
     * @property components
     * @type {{r: r, g: g, b: b, a: a}}
     */
    components: undefined,

    /**
     * String in #rrggbb format representing the color
     *
     * @property hexCode
     * @type {String}
     */
    hexCode: undefined,

    init: function (color) {
        this.components = parseColor(color);
        if (!this.components) {
            throw "Not valid color provided " + color;
        }
        this.value = ((this.components.r << 16) + (this.components.g << 8) + this.components.b);
        this.hexCode = "#" + ((1 << 24) + (this.components.r << 16) + (this.components.g << 8) + this.components.b).toString(16).slice(1);
    },

    /**
     * Sets color to specified value
     *
     * @method setColor
     * @param {String} color String representing color in one of the following formats: #rgb, #rrggbb, rgb(r,g,b), rgba(r,g,b,a)
     */
    setColor: function (color) {
        this.components = parseColor(color);
        this.value = ((this.components.r << 16) + (this.components.g << 8) + this.components.b);
        this.hexCode = "#" + ((1 << 24) + (this.components.r << 16) + (this.components.g << 8) + this.components.b).toString(16).slice(1);
    },

    /**
     * Set Alpha component of color
     * @param {Number} alpha Alpha value of color. It is trimed to value between 0 and 1
     */
    setAlpha: function (alpha) {
        alpha = Math.max(alpha, 0);
        alpha = Math.min(alpha, 1);
        this.components.a = alpha;
    },

    /**
     * Get color in rgba format
     * @return {String} String representation of color in rgba(r, g, b, a) format
     */
    getRgba: function () {
        return "rgba(" + this.components.r + ", " + this.components.g + ", " + this.components.b + ", " + this.components.a + ")";
    }
});

module.exports = Color;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","color-parser":"/home/senadu/projects/Renderer-Cheetah/node_modules/color-parser/index.js"}],"/home/senadu/projects/Renderer-Cheetah/src/colorPalette.js":[function(require,module,exports){
'use strict';

var Class = require('./class');

/**
 * Class representing color palette
 *
 * @constructor
 */
var ColorPalette = Class.extend({
    _colorRamps: undefined,
    _singleColor: undefined,
    _flipped: false,
    init: function () {
        this._colorRamps = [];
    },

    /**
     * Flips the order of returned colors
     *
     * @method flip
     */
    flip: function () {
        this._flipped = !this._flipped;
    },

    /**
     * Returns true if the order of returned colors is flipped
     *
     * @method isFlipped
     * @return {Boolean} True if the order of returned colors is flipped. False otherwise.
     */
    isFlipped: function () {
        return this._flipped;
    },

    /**
     * Adds ColorRamp to the palette
     *
     * @method addColorRamp
     * @param {ColorRamp} colorRamp ColorRamp object
     */
    addColorRamp: function (colorRamp) {
        this._colorRamps.push(colorRamp);

        if (this._singleColor !== undefined) {
            this._singleColor = undefined;
        }
    },

    /**
     * Sets a single color to be used for this palette.
     *
     * @method setSingleColor
     * @param {Color} color Color object
     */
    setSingleColor: function (color) {
        this._singleColor = color;
        this._colorRamps = [];
    },

    /**
     * Returns array of Color objects
     *
     * @method getColors
     * @param {Number} count Number of colors that should be returned
     * @return {Array} Array of Color objects
     */
    getColors: function (count) {
        var i;
        var colors = [];

        // If it is a single color palette, just return count number of the same color
        if (this._singleColor !== undefined) {
            for (i = 0; i < count; i++) {
                colors.push(this._singleColor);
            }

            return colors;
        }

        // Else, interpolate from color ramps
        var roundingLeftover = 0;

        for (i = 0; i < this._colorRamps.length; i++) {
            var rampColorCount = Math.round(count * this._colorRamps[i].getBias() + roundingLeftover);
            roundingLeftover = (count * this._colorRamps[i].getBias() + roundingLeftover) - Math.round(count * this._colorRamps[i].getBias() + roundingLeftover);
            var rampColors = this._colorRamps[i].interpolateColors(rampColorCount);
            for (var j = 0; j < rampColors.length; j++) {
                colors.push(rampColors[j]);
            }
        }

        return (this.isFlipped() ? colors.reverse() : colors);
    },

    /**
     * Returns total sum of bias values for all color ramps
     *
     * @method getTotalBias
     * @return {Number} Total sum of bias values for all color ramps
     */
    getTotalBias: function () {
        var colorRampsLength = this._colorRamps.length;

        if (colorRampsLength === 0) {
            return 1;
        }

        var biasTotal = 0;

        for (var i = 0; i < colorRampsLength; i++) {
            biasTotal += this._colorRamps[i].getBias();
        }

        return biasTotal;
    },

    /**
     * Returns number of color ramps with zero valued bias

     * @method getRampsWithZeroBiasCount
     * @return {Number} Number of color ramps with zero valued bias
     */
    getRampsWithZeroBiasCount: function () {
        var colorRampsLength = this._colorRamps.length;

        if (colorRampsLength === 0) {
            return 0;
        }

        var count = 0;

        for (var i = 0; i < colorRampsLength; i++) {
            if (this._colorRamps[i].getBias() === 0) {
                count++;
            }
        }

        return count;
    },

    /**
     * Normalizes the total bias so that it's value does not exceede 1
     *
     * @method normalize
     */
    normalize: function () {
        var i;
        var biasTotal = this.getTotalBias();

        if (biasTotal < 1) {
            var colorRampsCount = this._colorRamps.length;
            var rampsWithZeroBias = this.getRampsWithZeroBiasCount();
            var spread = 1 - biasTotal;

            if (rampsWithZeroBias > 0) {
                for (i = 0; i < colorRampsCount; i++) {
                    if (this._colorRamps[i].getBias() === 0) {
                        this._colorRamps[i].setBias(spread / rampsWithZeroBias);
                    }
                }
            } else if (colorRampsCount > 0) {
                for (i = 0; i < colorRampsCount; i++) {
                    this._colorRamps[i].setBias(this._colorRamps[i].getBias() + (spread / colorRampsCount));
                }
            }
        }
    }
});

module.exports = ColorPalette;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js"}],"/home/senadu/projects/Renderer-Cheetah/src/colorRamp.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
var Color = require('./color');

/**
 * Represents color ramp
 *
 * @class ColorRamp
 * @constructor
 * @param {Color} fromColor Instance of {{#crossLink 'Color'}}Color{{/crossLink}} class
 * @param {Color} toColor Instance of {{#crossLink 'Color'}}Color{{/crossLink}} class
 * @param {Number} bias Bias value from the [0, 1] range
 */
var ColorRamp = Class.extend({
    _fromColor: undefined,
    _toColor: undefined,
    _bias: undefined,
    init: function (fromColor, toColor, bias) {
        this._fromColor = new Color(fromColor);
        this._toColor = new Color(toColor);
        this._bias = bias;
    },

    /**
     * Returns instance of {{#crossLink 'Color'}}Color{{/crossLink}} class
     *
     * @method getFromColor
     * @return {Color} Color object.
     */
    getFromColor: function () {
        return this._fromColor;
    },

    /**
     * Returns instance of {{#crossLink 'Color'}}Color{{/crossLink}} class
     *
     * @method getToColor
     * @return {Color} Ending color for the ramp.
     */
    getToColor: function () {
        return this._toColor;
    },

    /**
     * Returns bias for the ramp.
     *
     * @method getBias
     * @return {Number} Bias for the ramp.
     */
    getBias: function () {
        return this._bias;
    },

    /**
     * Sets bias for the ramp.
     *
     * @method setBias
     * @param {Number} Bias for the ramp.
     */
    setBias: function (bias) {
        this._bias = bias;
    },

    /**
     * Returns the count number of colors created using interpolation from the current color ramp
     *
     * @method interpolateColors
     * @param {Number} count Number of colors to create
     * @return {Array} Array of Color objects
     */
    interpolateColors: function (count) {
        var colors = [];

        for (var i = 0; i < count; i++) {
            colors.push(this.interpolateColorsClassic((i + 1) / count));
        }

        return colors;
    },

    /**
     * Returns the interpolated color from the ramp based on the given factor
     *
     * @method interpolateColorsClassic
     * @param {Number} lerp Factor of linear interpolation
     * @return {Color} Color object
     */
    interpolateColorsClassic: function (lerp) {
        var a = this.getFromColor();
        var b = this.getToColor();

        var aRed = a.components.r;
        var aGreen = a.components.g;
        var aBlue = a.components.b;
        var bRed = b.components.r;
        var bGreen = b.components.g;
        var bBlue = b.components.b;

        var f2 = 256 * lerp;
        var f1 = 256 - f2;

        var aveRed = (aRed * f1 + bRed * f2) >> 8;
        var aveGreen = (aGreen * f1 + bGreen * f2) >> 8;
        var aveBlue = (aBlue * f1 + bBlue * f2) >> 8;

        return new Color('rgb(' + aveRed + ',' + aveGreen + ',' + aveBlue + ')');
    }
});

module.exports = ColorRamp;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./color":"/home/senadu/projects/Renderer-Cheetah/src/color.js"}],"/home/senadu/projects/Renderer-Cheetah/src/dataColumn.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
var Enums = require('./enums');

/**
 * Instance of this class describes one data column
 *
 * @class DataColumn
 * @constructor
 * @param {String} columnName Column name
 * @param {DataType} columnType Data type of column
 * @param {String} columnLabel Column label
 */
var DataColumn = Class.extend({
    _columnName: undefined,
    _columnLabel: undefined,
    _columnType: undefined,
    //_columnData: undefined,
    _data: undefined,

    /**
     * Number of rows in recordset
     *
     * @property rowCount
     * @type {Number}
     */
    rowCount: 0,
    init: function (columnName, columnType, columnLabel) {
        this._columnName = columnName;

        if (typeof columnType === 'number') {
            switch (columnType) {
            case 0:
                columnType = Enums.DataType.UNKNOWN;
                break;
            case 1:
            case 3:
                columnType = Enums.DataType.UINT;
                break;
            case 2:
            case 4:
                columnType = Enums.DataType.INT;
                break;
            case 5:
            case 6:
            case 8:
            case 9:
                columnType = Enums.DataType.NUMBER;
                break;
            case 7:
                columnType = Enums.DataType.STRING;
                break;
            case 10:
                columnType = Enums.DataType.OBJECT;
                break;
            }
        }

        this._columnType = columnType;
        this._columnLabel = columnLabel;
        this._data = [];
    },
    /**
     * Returns column name
     *
     * @method getName
     * @returns {String} Column name
     */
    getName: function () {
        return this._columnName;
    }
});

module.exports = DataColumn;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js"}],"/home/senadu/projects/Renderer-Cheetah/src/dataTileIndex.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
/**
 * This class is used as index to store tile indices that contain data for their parent {{#crossLink "Layer"}}{{/crossLink}}.
 * For efficiency reasons, tile indices are stored per zoom level.
 *
 * @class DataTileIndex
 * @constructor
 * @param {ByteBufferReader} [inputBuffer] Instance of {{#crossLink "Util.ByteBufferReader"}}{{/crossLink}} wrapped around a stream of DataTileIndex binary data.
 */
var DataTileIndex = Class.extend({
    _dataTileIndex: undefined,
    _maxZoomLevelWithDataTiles: -1,
    init: function (inputBuffer) {
        this._dataTileIndex = {};
        for (var i = 0; i < 20; i++) {
            this._dataTileIndex[i] = {};
        }

        if (inputBuffer && inputBuffer.getOffset() < inputBuffer.getByteLength()) {

            this.loadFromBinaryStream(inputBuffer);
        }
    },
    /**
     * Returns the highest zoom level that contains tile indices.
     *
     * @method getMaxZoomLevelWithTiles
     * @return {Number} Highest zoom level that contains tile indices.
     */
    getMaxZoomLevelWithTiles: function () {
        if (this._maxZoomLevelWithDataTiles === -1) {
            for (var i = 0; i < 20; i++) {
                var size = Object.keys(this._dataTileIndex[i]).length;

                if (size > 0) {
                    if (this._maxZoomLevelWithDataTiles < i) {

                        this._maxZoomLevelWithDataTiles = i;
                    }
                }
            }

        }

        return this._maxZoomLevelWithDataTiles;
    },

    /**
     * Adds tile index into the index.
     *
     * @method addTile
     * @param {Number} zoom Zoom level for new tile
     * @param {Number} tile Tile index
     */
    addTile: function (zoom, tile) {
        this._dataTileIndex[zoom][tile] = true;
        this._maxZoomLevelWithDataTiles = -1;
    },

    /**
     * Removes tile index from the index.
     *
     * @method removeTile
     * @param {Number} zoom Zoom level for tile
     * @param {Number} tile Tile index
     */
    removeTile: function (zoom, tile) {
        if (this._dataTileIndex[zoom][tile] === true) {
            this._dataTileIndex[zoom][tile] = undefined;
        }

        this._maxZoomLevelWithDataTiles = -1;
    },

    /**
     * Returns true if specified zoom level does not contain any tile indices.
     *
     * @method isZoomEmpty
     * @param {Number} zoom Zoom level
     * @return {Boolean}
     * True if specified zoom level does not contain any tile indices.
     * False otherwise.
     */
    isZoomEmpty: function (zoom) {
        return Object.keys(this._dataTileIndex[zoom]).length === 0;

    },

    /**
     * Returns true if specified zoom level contains specified tile index.
     *
     * @method hasTileAtZoom
     * @param {Number} zoom Zoom level
     * @param {Number} tile Tile index
     * @return {Boolean}
     * True if specified zoom contains tile index.
     * False otherwise.
     */
    hasTileAtZoom: function (zoom, tile) {
        return (this._dataTileIndex[zoom][tile] === true);
    },

    // append: function (dataTileIndex) {

    // },

    /**
     * Populates internal index with the data provided from the passed {{#crossLink "Util.ByteBufferReader"}}{{/crossLink}} instance wrapped around DataTileIndex binary data.
     *
     * @method loadFromBinaryStream
     * @param {Util.ByteBufferReader} inputBuffer {{#crossLink "Util.ByteBufferReader"}}{{/crossLink}} instance wrapped around DataTileIndex binary data.
     */
    loadFromBinaryStream: function (inputBuffer) {
        // input file format documentation can be found here:
        // https://github.com/SocialExplorer/geoservices/blob/master/DataProcessorWorker/src/main/java/com/socialexplorer/geoservices/dataProcessorWorker/dataProcessor/datatiles/README_AIX_FORMAT.txt
        var i, itile, zoomLevel, numOfTiles;

        // load data tiles
        var numOfZoomLevels = inputBuffer.getInt32();

        for (i = 0; i < numOfZoomLevels; i++) {
            //read zoom level:
            zoomLevel = inputBuffer.getInt32();
            numOfTiles = inputBuffer.getInt32();

            for (itile = 0; itile < numOfTiles; itile++) {
                this._dataTileIndex[zoomLevel][inputBuffer.getInt32()] = true;
            }
        }

        // // load empty data tiles
        // numOfZoomLevels = inputBuffer.getInt32();

        // for (i = 0; i < numOfZoomLevels; i++) {
        //     //read zoom level:
        //     zoomLevel = inputBuffer.getInt32();
        //     numOfTiles = inputBuffer.getInt32();

        //     for (itile = 0; itile < numOfTiles; itile++) {
        //         this._dataTileIndex[zoomLevel][inputBuffer.getInt32()] = false;
        //     }
        // }

        this._maxZoomLevelWithDataTiles = -1;
    }
});

module.exports = DataTileIndex;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js"}],"/home/senadu/projects/Renderer-Cheetah/src/enums.js":[function(require,module,exports){
'use strict';

/**
 * Centralized place for storing enums
 *
 * @class Enums
 * @static
 */
var Enums = {};

/**
 * FeatureType enumerations
 *
 * @class FeatureType
 * @static
 */
Enums.FeatureType = {
    /**
     * Represents polygon feature type
     *
     * @property POLYGON
     */
    POLYGON: 'Polygon',

    /**
     * Represents line feature type
     *
     * @property LINE
     */
    LINE: 'Line',

    /**
     * Represents point feature type
     *
     * @property POINT
     */
    POINT: 'Point',

    /**
     * Represents label feature type
     *
     * @property LABEL
     */
    LABEL: 'Label',

    /**
     * Represents point label feature type
     *
     * @property POINT_LABEL
     */
    POINT_LABEL: 'PointLabel',

    /**
     * Represents line label feature type
     *
     * @property LINE_LABEL
     */
    LINE_LABEL: 'LineLabel'
};

/**
 * DataType enumerations
 *
 * @class DataType
 * @static
 */
Enums.DataType = {
    /**
     * Represents unknown data type
     *
     * @property UNKNOWN
     */
    UNKNOWN: 'Unknown',

    /**
     * Represents integer data type
     *
     * @property INT
     */
    INT: 'Int',

    /**
     * Represents unsigned integer data type
     *
     * @property UINT
     */
    UINT: 'Uint',

    /**
     * Represents number data type
     *
     * @property NUMBER
     */
    NUMBER: 'Num',

    /**
     * Represents string data type
     *
     * @property STRING
     */
    STRING: 'String',

    /**
     * Represents boolean data type
     *
     * @property BOOLEAN
     */
    BOOLEAN: 'Boolean',

    /**
     * Represents object data type
     *
     * @property OBJECT
     */
    OBJECT: 'Object'
};

/**
 * JsonObjectType enumerations
 *
 * @class JsonObjectType
 * @static
 */
Enums.JsonObjectType = {
    /**
     * Represents style object in json
     * when explicit type is needed
     *
     * @property UNKNOWN
     */
    STYLE: 'style'
};

/**
 * MapElementType enumerations
 *
 * @class MapElementType
 * @static
 */
Enums.MapElementType = {
    /**
     * Represents element that is rendered
     * using SimpleRenderer
     *
     * @property SIMPLE
     */
    SIMPLE: 'Simple',
    /**
     * Represents a value element that is
     * rendered using ValueRenderer
     *
     * @property VALUE
     */
    VALUE: 'Value',

    /**
     * Represents element that is rendered
     * using BubbleRenderer
     *
     * @property BUBBLE
     */
    BUBBLE: 'Bubble',

    /**
     * Represents element that is rendered
     * using LabelRenderer
     *
     * @property LABEL
     */
    LABEL: 'Label'

};

module.exports = Enums;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/eventedClass.js":[function(require,module,exports){
'use strict';
var Class = require('./class');
var EventEmitter = require('wolfy87-eventemitter');

var EventedClass = Class.extend({
    _eventBus: undefined,
    init: function () {
        this._eventBus = new EventEmitter();
    },
    getListeners: function (evt) {
        return this._eventBus.getListeners(evt);
    },
    flattenListeners: function (listeners) {
        return this._eventBus.flattenListeners(listeners);
    },
    getListenersAsObject: function (evt) {
        return this._eventBus.getListenersAsObject(evt);
    },
    addListener: function (evt, listener) {
        return this._eventBus.addListener(evt, listener);
    },
    on: function (evt, listener) {
        return this._eventBus.on(evt, listener);
    },
    addOnceListener: function (evt, listener) {
        return this._eventBus.addOnceListener(evt, listener);
    },
    once: function (evt, listener) {
        return this._eventBus.once(evt, listener);
    },
    defineEvent: function (evt) {
        return this._eventBus.defineEvent(evt);
    },
    defineEvents: function (evts) {
        return this._eventBus.defineEvents(evts);
    },
    removeListener: function (evt, listener) {
        return this._eventBus.removeListener(evt, listener);
    },
    off: function (evt, listener) {
        return this._eventBus.off(evt, listener);
    },
    addListeners: function (evt, listeners) {
        return this._eventBus.addListeners(evt, listeners);
    },
    removeListeners: function (evt, listeners) {
        if (listeners) {
            return this._eventBus.removeListeners(evt, listeners);
        }
    },
    manipulateListeners: function (remove, evt, listeners) {
        return this._eventBus.manipulateListeners(remove, evt, listeners);
    },
    removeEvent: function (evt) {
        return this._eventBus.removeEvent(evt);
    },
    removeAllListeners: function (evt) {
        return this._eventBus.removeAllListeners(evt);
    },
    emitEvent: function (evt, args) {
        return this._eventBus.emitEvent(evt, args);
    },
    trigger: function (evt, args) {
        return this._eventBus.trigger(evt, args);
    },
    emit: function (evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this._eventBus.emitEvent(evt, args);
    },
    setOnceReturnValue: function (value) {
        return this._eventBus.setOnceReturnValue(value);
    }
});

module.exports = EventedClass;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","wolfy87-eventemitter":"/home/senadu/projects/Renderer-Cheetah/node_modules/wolfy87-eventemitter/EventEmitter.js"}],"/home/senadu/projects/Renderer-Cheetah/src/feature.js":[function(require,module,exports){
'use strict';

var Rectangle = require('./rectangle');

/**
 * Represents a single feature
 *
 * @class Feature
 * @constructor
 */
var Feature = function () {

    /**
     * Bounding box for this feature
     *
     * @property boundingBox
     * @type Rectangle
     */
    this.boundingBox = new Rectangle();

    /**
     * Parts of this feature. One part is basically an array of points.
     *
     * @property parts
     * @type Array of arrays
     */
    this.parts = [];

    /**
     * Centroid of this feature
     *
     * @property centroid
     * @type {Object literal with x and y coords}
     */
    this.centroid = undefined;

    /**
     * Id of this feature
     *
     * @property featureId
     * @type Integer
     */
    this.featureId = 0;

    /**
     * Calculates bounding box for this feature
     *
     * @method calculateBoundingBox
     */
    this.calculateBoundingBox = function () {
        var nrParts = this.parts.length;
        for (var k = 0; k < nrParts; k++) {
            for (var i = 0; i < this.parts[k].length; i += 2) {
                var ix = this.parts[k][i];
                var iy = this.parts[k][i + 1];

                if (this.boundingBox.left > ix) {
                    this.boundingBox.left = ix; //left
                }
                if (this.boundingBox.right < ix) {
                    this.boundingBox.right = ix; //right
                }
                if (this.boundingBox.top > iy) {
                    this.boundingBox.top = iy; //top
                }
                if (this.boundingBox.bottom < iy) {
                    this.boundingBox.bottom = iy; //bottom
                }
            }
        }
    };
};

module.exports = Feature;

},{"./rectangle":"/home/senadu/projects/Renderer-Cheetah/src/rectangle.js"}],"/home/senadu/projects/Renderer-Cheetah/src/featureEvent.js":[function(require,module,exports){
'use strict';

function FeatureEvent() {
    this.mouseEvent = undefined;
    this.layer = undefined;
    this.content = undefined;
    this.featureId = undefined;
}

module.exports = FeatureEvent;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/geoDataProvider.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
var Util = require('./util');
var TileReader = require('./tileReader');
var GeoTileData = require('./geoTileData');

/**
 * Provides geo data from MapSpice platform
 *
 * @class GeoDataProvider
 * @constructor
 */
var GeoDataProvider = Class.extend({
    _tileLoadingMetrics: undefined,
    _geoTileRequestQueue: undefined,
    _tileReader: undefined,
    map: undefined,
    init: function (map) {
        this._tileLoadingMetrics = {};
        this._geoTileRequestQueue = [];
        this._tileReader = new TileReader();
        this.map = map;
        this._currentServer = 0;
    },
    /**
     * Cancels pending requests
     *
     * @method cancelPendingRequests
     */
    cancelPendingRequests: function () {
        var queueLength = this._geoTileRequestQueue.length;
        for (var i = 0; i < queueLength; i++) {
            this._geoTileRequestQueue[i].abort();
            this.map._internal.cancelRenderingRequest();
        }
        this._geoTileRequestQueue = [];
    },
    /**
     * Gets average tile loading time
     *
     * @method getTileLoadingAverage
     * @return {Number} average tile loading time
     */
    getTileLoadTimeAverage: function () {
        var avg = 0;
        var cnt = 0;
        for (var key in this._tileLoadingMetrics) {
            if (this._tileLoadingMetrics[key].duration) {
                avg += this._tileLoadingMetrics[key].duration;
                cnt++;
            }
        }

        return avg / cnt;
    },
    /**
     * Returns list of tile load metrics
     *
     * @method getTileLoadMetrics
     * @return Object
     */
    getTileLoadMetrics: function () {
        return this._tileLoadingMetrics;
    },
    /**
     * Gets (quad tree) tile index from x,y coordinates and zoom level.
     *
     * @method getTileIndex
     * @param {Integer} x x- coordinate of the tile
     * @param {Integer} y y- coordinate of the tile
     * @param {Integer} z zoom level of the tile
     * @return {Integer} tile index
     */
    getTileIndex: function (x, y, z) {
        var tileIndex = 0;
        for (var i = z; i > 0; i--) {
            var digit = 0;
            var mask = 1 << (i - 1);

            if ((x & mask) !== 0) {
                digit++;
            }

            if ((y & mask) !== 0) {
                digit++;
                digit++;
            }

            tileIndex += digit * Math.pow(4, i - 1);
        }
        return tileIndex;

    },
    /**
     * Loads tile from MapSpice platform
     *
     * @method getTile
     * @param {Array of Layer} layers list of layers to fetch
     * @param {LeafletTilePoint} tilePoint leaflet coordinates of this tile
     * @param {Integer} zoom zoom level of the tile
     * @param {Function(GeoTile)} callback Callback to call after tile has been successfully loaded
     */
    getTile: function (layers, tilePoint, zoom, callback) {
        var tileIndex;
        if (typeof tilePoint === 'object') {
            tileIndex = this.getTileIndex(tilePoint.x, tilePoint.y, zoom);
        } else {
            tileIndex = tilePoint;
        }

        if (layers.length > 0) {
            var ids = layers.map(function (l) {
                return l.geoLayerId;
            });

            var req = new XMLHttpRequest();

            var baseUrl = '';
            var serverLen = this.map.servers.length;
            if (serverLen > 0) {
                baseUrl = this.map.servers[this._currentServer++ % serverLen];
            }
            req.open('GET', baseUrl + '?projection=' + this.map.projection + '&zoom=' + zoom + '&tiles=' + tileIndex + '&layers=' + ids.join('.'), true);

            req.responseType = 'arraybuffer';
            req.onload = function () {
                this._tileLoadingMetrics[tileIndex].duration = window.performance.now() - this._tileLoadingMetrics[tileIndex].start;
                var arrayBuffer = req.response;

                var reqIndex = this._geoTileRequestQueue.indexOf(req);
                if (reqIndex > -1) {
                    this._geoTileRequestQueue.splice(reqIndex, 1);
                }

                var buf = new Util.ByteBufferReader(arrayBuffer, true);
                var tile = this._tileReader.readTile(buf, layers);
                tile.tilePoint = tilePoint;
                tile.index = tileIndex;
                tile.zoom = zoom;

                if (callback) {
                    callback(tile);
                }
            }.bind(this);

            req.onerror = function () {
                var reqIndex = this._geoTileRequestQueue.indexOf(req);
                if (reqIndex > -1) {
                    this._geoTileRequestQueue.splice(reqIndex, 1);
                }
            }.bind(this);

            this._geoTileRequestQueue.push(req);

            req.send();
            this._tileLoadingMetrics[tileIndex] = {
                start: window.performance.now()
            };
        } else {
            if (callback) {
                var tile = new GeoTileData();
                tile.index = tileIndex;
                tile.zoom = zoom;
                tile.tilePoint = tilePoint;
                callback(tile);
            }
        }

    }
});

module.exports = GeoDataProvider;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./geoTileData":"/home/senadu/projects/Renderer-Cheetah/src/geoTileData.js","./tileReader":"/home/senadu/projects/Renderer-Cheetah/src/tileReader.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/geoTileData.js":[function(require,module,exports){
'use strict';

/**
 * Holds tile information needed for rendering
 * @class GeoTileData
 */
function GeoTileData() {
    /**
     * All layers that are present on this tile
     *
     * @property layers
     * @type Array of LayerData
     * @default Empty array
     */
    this.layers = [];

    /**
     * Canvas that belongs to this tile
     *
     * @property canvas
     * @type HTMLCanvasElement
     */
    this.canvas = null;

    /**
     * Tile index
     *
     * @property index
     * @type String
     */
    this.index = '';

    /**
     * Zoom level
     *
     * @property zoom
     * @type Integer
     */
    this.zoom = 0;

    /**
     * List of bounding boxes of all labels placed on this this. This is used
     * for label collision detection.
     *
     * @property labelRects
     * @type Object literal in form of { left: , top: , right: , bottom: }
     */
    this.labelRects = [];

    /**
     * Used for label placement and collision detection
     * @type {LabelCollision}
     */
    this.labelCollisions = undefined;
}

module.exports = GeoTileData;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/layer.js":[function(require,module,exports){
(function (global){
/*global global*/
'use strict';

var EventedClass = require('./eventedClass');
var Util = require('./util');
var Recordset = require('./recordset');
var DataTileIndex = require('./dataTileIndex');
var TileReader = require('./tileReader');
var isNode = Util.isNode();
/*jshint evil:true*/
if (isNode) {
    global.XMLHttpRequest = eval('require("xhr2");');
}
/*jshint evil:false*/
/**
 * Represents a MapSpice layer
 *
 * @class Layer
 * @constructor
 */
var Layer = EventedClass.extend({
    id: undefined,
    geoLayerId: undefined,
    isVisible: true,
    dataTileIndex: undefined,
    emptyTileIndex: undefined,
    dataTileIndexLoaded: undefined,
    serverBleedTileIndex: undefined,
    retrievedDataTileIndex: undefined,
    recordset: undefined,
    name: '',
    featureType: '',
    minZoom: 0,
    maxZoom: 0,
    renderer: undefined,
    _tileReader: undefined,
    _waitingQueue: undefined,
    _pendingRequests: undefined,
    _dataTileIndexQueue: undefined,
    _dataTileIndexPending: undefined,
    attDataProvider: undefined,
    rolloverFeatureId: undefined,
    isInteractive: false,
    zIndex: undefined,
    isRolloverFeatureIdForced: false,
    /**
     * Constructor
     *
     * @method init
     * @param {String} id Layer ID
     * @param {String} name Layer name
     * @param {String} featureType Type of feature: LINE, POLYGON, POINT
     * @param {Integer} minZoom Minimal zoom where layer will be visible
     * @param {Integer} maxZoom Maximal zoom where layer will be visible
     */
    init: function (id, geoLayerId, name, featureType, minZoom, maxZoom) {
        // initialize the eventbus
        this._super();

        this.id = id;
        this.geoLayerId = geoLayerId;
        this.name = name;
        this.featureType = featureType;
        this.minZoom = minZoom || this.minZoom;
        this.maxZoom = maxZoom || this.maxZoom;
        this._tileReader = new TileReader();
        this._waitingQueue = {};
        this._pendingRequests = {};
        this.recordset = new Recordset(this);
        this.retrievedDataTileIndex = new DataTileIndex();
        this._dataTileIndexQueue = [];
        this._dataTileIndexPending = false;
        this.dataTileIndex = new DataTileIndex();
        this.emptyTileIndex = new DataTileIndex();
        this.serverBleedTileIndex = new DataTileIndex();
        this.dataTileIndexLoaded = false;
        this.isRolloverFeatureIdForced = false;
        this.attDataLayer = undefined;
        this.map = undefined;
    },

    /**
     * Loads data tile index from server
     *
     * @method loadDataTileIndex
     * @param {Function} callback Callback function to call when the data tile index has been loaded
     */
    loadDataTileIndex: function (callback, errorCallback) {
        var req = new XMLHttpRequest();
        var baseUrl = '';
        var serversLen = this.map.servers.length;

        if (serversLen > 0) {
            baseUrl = this.map.servers[0];
        }
        var url = baseUrl + '/?ATT_INDEX_CMD=cmd&GeoLayerId=' + this.geoLayerId + '&projection=EPSG-3857';
        //if(isNode) {
        //url = 'http://spice.socialexplorer.com' + url;
        //}
        req.open('GET', url);
        req.responseType = 'arraybuffer';
        req.onload = function () {
            var arrayBuffer = req.response;
            var buff = new Util.ByteBufferReader(arrayBuffer, true);

            // skip file type sign (whatever that is...) :-)
            buff.skipInt32();

            this.dataTileIndex = new DataTileIndex(buff);
            this.emptyTileIndex = new DataTileIndex(buff);
            this.serverBleedTileIndex = new DataTileIndex(buff);

            this.retrievedDataTileIndex = this.emptyTileIndex;

            this.dataTileIndexLoaded = true;

            if (callback) {
                callback(this);
            }
        }.bind(this);

        req.onerror = function () {
            if (errorCallback) {
                errorCallback(this);
            }
        }.bind(this);

        req.send();
    },
    /**
     * Registers an interest in a tile at specific zoom level. If tile is already
     * available callback will be called immediately otherwise it will be called
     * once data becomes available
     *
     * @method notifyWhenAvailable
     * @param {Array} tiles Array of {tileIndex: tileIndex, zoom: zoom, callback: callback} objects
     * @param {Function} callback Callback to call when tiles becomes available
     */
    notifyWhenAvailable: function (tiles) {
        var i;
        // we need dataTileIndex to be present, otherwise we need to just load it
        if (this.dataTileIndexLoaded) {
            var tileCount = tiles.length;
            var missingTiles = [];

            for (i = 0; i < tileCount; i++) {
                if (!this.retrievedDataTileIndex.hasTileAtZoom(tiles[i].zoom, tiles[i].tileIndex)) {
                    missingTiles.push(tiles[i]);
                } else {
                    // call the tiles that we already have
                    if (tiles[i].callback) {
                        tiles[i].callback();
                    }
                }
            }

            if (missingTiles.length > 0) {
                // we dont have all of the requested tiles, get the missing tiles and fire the callbacks
                var missingTileCount = missingTiles.length;

                var cb = function (tile) {
                    var parts = tile.split('.');

                    this.retrievedDataTileIndex.addTile(+parts[0], +parts[1]);

                    delete this._pendingRequests[tile];

                    this._notifyWaiting(+parts[0], +parts[1]);
                }.bind(this);

                for (i = 0; i < missingTileCount; i++) {

                    var key = missingTiles[i].zoom + '.' + missingTiles[i].tileIndex;
                    var isPending = this._pendingRequests[key];

                    if (!this._waitingQueue[key]) {
                        this._waitingQueue[key] = [];
                    }

                    if (missingTiles[i].callback) {
                        this._waitingQueue[key].push(missingTiles[i].callback);
                    }
                    if (!isPending) {
                        this._pendingRequests[key] = true;
                        this.attDataProvider.getRecords(key, cb, missingTiles[i].isServerBleed);
                    }
                }
            }
        } else {
            console.log('NO DATATILEINDEX PRESENT!');
        }
    },
    /**
     * Notifies all waiting requests that this tile has arrived
     *
     * @method _notifyWaiting
     * @param {Integer} zoom Zoom level of the tile
     * @param {String} tileIndex Tile index
     */
    _notifyWaiting: function (zoom, tileIndex, err) {
        var key = zoom + '.' + tileIndex;

        // if there is anyone waiting
        if (this._waitingQueue[key]) {
            this._waitingQueue[key].forEach(function (callback) {
                if (callback) {
                    callback(err);
                }
            });

            // at the end clear waiting queue
            delete this._waitingQueue[key];
        }
    },
    notifyWhenDataIndexAvailable: function (callback) {
        // if data tile index is already available just call the callback
        //console.log('somebody wants datatileindex for layer: ', this.id);
        if (this.dataTileIndexLoaded) {
            if (callback) {
                callback();
            }
            return;
        }

        // if data tile index is pending, just queue the callback
        if (this._dataTileIndexPending) {
            this._dataTileIndexQueue.push(callback);
        } else {

            // we don't have data index. get the index and notify ones that wait for it
            this._dataTileIndexPending = true;
            this._dataTileIndexQueue.push(callback);

            this.loadDataTileIndex(function () {
                for (var i = 0; i < this._dataTileIndexQueue.length; i++) {
                    if (this._dataTileIndexQueue[i]) {
                        this._dataTileIndexQueue[i]();
                    }
                }

                this._dataTileIndexPending = false;
                this._dataTileIndexQueue = [];
            }.bind(this));
        }
    },
    resetRecordset: function () {
        this.recordset = new Recordset();
        this.retrievedDataTileIndex = new DataTileIndex();
    },
    getNeededDataTiles: function (zoom, tileIndex) {
        var neededDataTiles = [];

        for (var i = 0; i < zoom; i++) {

            if (!this.dataTileIndex.isZoomEmpty(i)) {

                var tilesOnZoomLevel = Util.getMatchingTiles(tileIndex, zoom, i);

                for (var j = 0; j < tilesOnZoomLevel.length; j++) {

                    if (this.dataTileIndex.hasTileAtZoom(i, tilesOnZoomLevel[j])) {
                        neededDataTiles.push({
                            id: tilesOnZoomLevel[j],
                            zoom: i,
                            isServerBleed: false
                        });
                    }
                }
            }
        }

        // dig deeper
        if (neededDataTiles.length === 0) {

            if (this.serverBleedTileIndex.hasTileAtZoom(zoom, tileIndex)) {
                neededDataTiles.push({
                    id: tileIndex,
                    zoom: zoom,
                    isServerBleed: true
                });
            }

            this._getNeededDataTilesHelper(neededDataTiles, zoom, tileIndex, 0);
        }

        return neededDataTiles;
    },
    _getNeededDataTilesHelper: function (neededDataTiles, zoom, tileIndex, callCount) {

        callCount++;

        if (zoom > this.dataTileIndex.getMaxZoomLevelWithTiles()) {
            return callCount;
        }

        if (this.dataTileIndex.hasTileAtZoom(zoom, tileIndex)) {
            neededDataTiles.push({
                id: tileIndex,
                zoom: zoom
            });

        } else {

            if (this.serverBleedTileIndex.hasTileAtZoom(zoom, tileIndex)) {
                neededDataTiles.push({
                    id: tileIndex,
                    zoom: zoom,
                    isServerBleed: true
                });
            }

            var tilesOnZoomLevel = Util.getMatchingTiles(tileIndex, zoom, zoom + 1);

            for (var i = 0; i < tilesOnZoomLevel.length; i++) {
                callCount = this._getNeededDataTilesHelper(neededDataTiles, zoom + 1, tilesOnZoomLevel[i], callCount);
            }
        }

        return callCount;
    }
});

module.exports = {
    Layer: Layer
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./dataTileIndex":"/home/senadu/projects/Renderer-Cheetah/src/dataTileIndex.js","./eventedClass":"/home/senadu/projects/Renderer-Cheetah/src/eventedClass.js","./recordset":"/home/senadu/projects/Renderer-Cheetah/src/recordset.js","./tileReader":"/home/senadu/projects/Renderer-Cheetah/src/tileReader.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/layerData.js":[function(require,module,exports){
'use strict';
/**
 * Holds information for one layer (per tile)
 *
 * @class LayerData
 */
function LayerData() {

    /**
     * All features present on this tile (for this layer)
     *
     * @property features
     * @type Array
     */
    this.features = [];

    /**
     * Layer type
     *
     * @property type
     * @type {String} One of: MAPSPICE.Enums.FeatureType
     */
    this.type = '';

    /**
     * Layer that this LayerData object belongs to
     *
     * @property layer
     * @type Layer
     */
    this.layer = undefined;

    /**
     * Tile that this layer data belongs to
     *
     * @property tile
     * type GeoTileData
     */
    this.tile = undefined;
}

module.exports = LayerData;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/leafletPatches.js":[function(require,module,exports){
'use strict';

var _ = require('underscore');

var run = function () {

    L.TileLayer.Canvas.addInitHook(function () {
        this.retinaCreateTileFn = function () {
            /*jshint validthis:true */
            var tile = L.DomUtil.create('canvas', 'leaflet-tile');
            tile.width = tile.height = this.options.tileSize;

            // Use of retina tiles on android is slow,
            // so we don't use the retina on android
            var shouldUseRetina = this.options.map.shouldUseRetina();

            if (shouldUseRetina) {
                L.DomUtil.addClass(tile, 'mapspice-tile-256');
                var ctx = tile.getContext('2d');

                var ratio = this.options.devicePixelRatio;
                if (ratio > 1) {
                    var w = ctx.canvas.width;
                    var h = ctx.canvas.height;

                    tile.setAttribute('width', w * ratio);
                    tile.setAttribute('height', h * ratio);

                    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
                }
            }

            tile.onselectstart = tile.onmousemove = L.Util.falseFn;

            return tile;
            /*jshint validthis:false */
        };
    });

    /*
     Monkey patch for leaflet.
     After digging deep into the leaflet source code, I found that it is because of these methods that have been hardcoded to work with IMG tags,
     but were never overridden in the TileLayer.Canvas subclass, the zoom image was being replaced by an image of empty tiles.

     Sadly, for now, this is the only way to go...

     ~ Adnan
     */
    L.TileLayer.Canvas.include({
        // returns percentage of drawn canvas tiles
        _getLoadedTilesPercentage: function (container) {
            var tiles = container.getElementsByTagName('canvas'),
                i, len, count = 0;

            for (i = 0, len = tiles.length; i < len; i++) {
                if (tiles[i].getAttribute('data-tile-drawn') === 'yes') {
                    count++;
                }
            }
            return count / len;
        },

        // stops loading all tiles in the background layer
        _stopLoadingImages: function (container) {
            var tiles = Array.prototype.slice.call(container.getElementsByTagName('canvas')),
                i, len, tile;

            for (i = 0, len = tiles.length; i < len; i++) {
                tile = tiles[i];

                if ((tile.getAttribute('data-tile-drawn') !== 'yes')) {
                    tile.parentNode.removeChild(tile);
                }
            }
        },

        // support for retina tiles
        _createTile: function () {
            return this.retinaCreateTileFn();
        }
    });

    if (!L.Browser.mobile) {
        // add stylesheet for desktops for smooth animations
        var style = document.createElement('style');
        // WekKit hack :(
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        style.sheet.insertRule('.leaflet-zoom-anim ' +
            '.leaflet-zoom-animated ' +
            '{ ' +
            '    -webkit-transition: -webkit-transform 0.25s linear; ' +
            '       -moz-transition:    -moz-transform 0.25s linear; ' +
            '         -o-transition:      -o-transform 0.25s linear; ' +
            '            transition:         transform 0.30s linear; ' +
            '} ', 0);

        L.Map.ScrollWheelZoom.include({
            addHooks: function () {
                this._throttledOnWheelScroll = _.throttle(this._onWheelScroll, 200);
                L.DomEvent.on(this._map._container, 'mousewheel', this._throttledOnWheelScroll, this);
                L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
                this._delta = 0;
            },
            removeHooks: function () {
                L.DomEvent.off(this._map._container, 'mousewheel', this._throttledOnWheelScroll);
                L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
            },
            _onWheelScroll: function (e) {
                var delta = L.DomEvent.getWheelDelta(e);

                this._delta += delta;

                if (this._delta > 2) {
                    this._delta = 1;
                } else if (this._delta < -2) {
                    this._delta = -1;
                }

                this._lastMousePos = this._map.mouseEventToContainerPoint(e);
                this._map._lastMousePos = e;

                if (!this._startTime) {
                    this._startTime = +new Date();
                }

                var left = Math.max(40 - (+new Date() - this._startTime), 0);

                //console.log('DELTA WAS', oldDelta, 'left', left);
                clearTimeout(this._timer);
                this._timer = setTimeout(L.bind(this._performZoom, this), left);

                L.DomEvent.preventDefault(e);
                L.DomEvent.stopPropagation(e);
            }

        });

        L.Map.include({
            _tryAnimatedZoom: function (center, zoom, options) {
                options = options || {};

                // don't animate if disabled, not supported or zoom difference is too large
                if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
                    Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
                    return false;
                }

                // offset is the pixel coords of the zoom origin relative to the current center
                var scale = this.getZoomScale(zoom),
                    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
                    origin = this._getCenterLayerPoint()._add(offset);

                // don't animate if the zoom origin isn't within one screen from the current center, unless forced
                if (options.animate !== true && !this.getSize().contains(offset)) {
                    return false;
                }

                this
                    .fire('movestart')
                    .fire('zoomstart');

                this._animateZoom(center, zoom, origin, scale, null, true);

                return true;
            },
            _animateZoom: function (center, zoom, origin, scale, delta, backwards) {

                this._animatingZoom = true;

                // put transform transition on all layers with leaflet-zoom-animated class
                L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

                // remember what center/zoom to set after animation
                this._animateToCenter = center;
                this._animateToZoom = zoom;

                // disable any dragging during animation
                if (L.Draggable) {
                    L.Draggable._disabled = true;
                }

                this._zoom = zoom;
                this._initialCenter = center;
                this._initialTopLeftPoint = this._getNewTopLeftPoint(center);
                this._initialTopLeftPoint._add(this._getMapPanePos());

                this.fire('zoomanim', {
                    center: center,
                    zoom: zoom,
                    origin: origin,
                    scale: scale,
                    delta: delta,
                    backwards: backwards
                });
            },
            _onZoomTransitionEnd: function () {

                clearTimeout(this.rId);

                this.rId = setTimeout(function () {
                    this._animatingZoom = false;

                    L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');
                    var now = window.performance.now();

                    this._resetView(this._animateToCenter, this._animateToZoom, true, true);
                    this.lastReset = now;
                    if (L.Draggable) {
                        L.Draggable._disabled = false;
                    }

                }.bind(this), 250);

                //var newZoom = this.getZoom() + this._additionalZoom;

                //var scale = this.getZoomScale(newZoom),
                //viewHalf = this.getSize().divideBy(2),
                //containerPoint = this.mouseEventToContainerPoint(this._lastMousePos),
                //centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
                //newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

                ////this._resetView(newCenter, newZoom, true, true);
            }
        });
    }
};

module.exports = {
    run: run
};

},{"underscore":"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js"}],"/home/senadu/projects/Renderer-Cheetah/src/map.js":[function(require,module,exports){
'use strict';
var RenderingEngine = require('./renderingEngine');
var Util = require('./util');
var _ = require('underscore');
var TrackingLayer = require('./trackingLayer');
var FeatureEvent = require('./featureEvent');
var Enums = require('./enums');
var GeoDataProvider = require('./geoDataProvider');
var OverlayApi = require('./overlayApi');
var LeafletPatches = require('./leafletPatches');
var inherits = require('inherits');
var EventEmitter = require('wolfy87-eventemitter');
var LabelCollisions = require('./renderer/labels/labelCollisions');

// Run leaflet patches before defining the Map class
LeafletPatches.run();

/**
 * Map class represents a MapSpice map. This is a visual component.
 *
 * @class Map
 * @constructor
 * @param {String | HTMLElement} container HTML element where the map will be shown
 * @param {Leaflet Map Options} options Leaflet specific options that will be passed to the underlying Leaflet map
 */
function Map(container, options) {
    options = options || {};

    /*
     * Private variables
     */

    // detect the device pixel ratio that will be used for high density screens
    var _retinaRatio = (function () {
        var dummyCanvas = L.DomUtil.create('canvas');
        var dummyCtx = dummyCanvas.getContext('2d');

        var devicePixelRatio = window.devicePixelRatio || 1;
        var backingStoreRatio = dummyCtx.webkitBackingStorePixelRatio ||
            dummyCtx.mozBackingStorePixelRatio ||
            dummyCtx.msBackingStorePixelRatio ||
            dummyCtx.oBackingStorePixelRatio ||
            dummyCtx.backingStorePixelRatio || 1;

        var ratio = devicePixelRatio / backingStoreRatio;
        console.log('calculating retina ratio', ratio);
        return ratio;
    })();

    var theMap = this,
        _retina = 'auto',
        _layers = [],
        _L = L,

        _lMap = L.map(container, options),
        _geoDataProvider = new GeoDataProvider(this),

        // all of the tiles currently on screen (visible)
        _onScreenTiles = {},

        // keeps the time when rendering current screen started
        _startRenderTime = 0,

        _canvasTileLayer = L.tileLayer.canvas({
            async: true,
            devicePixelRatio: _retinaRatio,
            map: this
        }),

        _selectionLayer = new TrackingLayer({
            devicePixelRatio: _retinaRatio,
            map: this
        }),

        _trackingLayer = new TrackingLayer({
            devicePixelRatio: _retinaRatio,
            map: this
        }),

        _serverRenderingEndpoint = options.serverRenderingEndpoint,
        _backgroundColor = options.backgroundColor,
        _initialized = false,
        _svgConfigured = false,
        _svgUsageCount = 0,
        _tilesToRender = 0,

        _tilesByFeatureIndex = new Util.NamespacedHashtable('zoom.layer.feature', []),
        _ignoreServerSideLayers = options.ignoreServerSideLayers || true;

    this.tracking = new OverlayApi(this, _trackingLayer, 'highlightStyle');
    this.selections = new OverlayApi(this, _selectionLayer, 'selectionStyle');

    _trackingLayer.source = this.tracking;
    _selectionLayer.source = this.selections;

    // PRIVATE FUNCTIONS
    var _onLayerAddedOneTime = function () {
        if (!_svgConfigured) {
            var overlayPane = _lMap.getPanes().overlayPane;
            if (overlayPane.childNodes.length > 0) {

                var classList = overlayPane.childNodes[0].classList;
                if (classList) {
                    classList.remove('leaflet-zoom-animated');
                    classList.add('leaflet-zoom-hide');
                    _svgConfigured = true;
                }
            }
        }
    };
    var _onFindFeatureUnderMouse = function (lMouseEvent) {
        checkForFeaturesUnderMouse(lMouseEvent, true);
    };

    /*
     * Public Api
     *
     */
    Object.defineProperty(this, 'retina', {
        get: function () {
            return _retina;
        },
        set: function (value) {
            if (!value) {
                throw '"retina" value cannot be empty.';
            }

            var accValues = ['on', 'off', 'auto'];
            var val = value;
            val = val.toLowerCase();

            if (accValues.indexOf(val) === -1) {
                throw '"retina" value is not valid. Acceptable values are "on","off" and "auto".';
            }
            _retina = val;
        }
    });

    Object.defineProperty(this, 'devicePixelRatio', {
        get: function () {
            return _retinaRatio;
        }
    });

    Object.defineProperty(this, 'projection', {
        value: options.projection || 'EPSG-3857'
    });

    // TODO : internal
    this.shouldUseRetina = function () {
        return _retinaRatio > 1 && (this.retina === 'auto' && !L.Browser.android) || this.retina === 'on';
    };

    Object.defineProperty(this, 'leafletMap', {
        value: _lMap
    });
    this.zoomIn = _lMap.zoomIn.bind(_lMap);
    this.zoomOut = _lMap.zoomOut.bind(_lMap);
    this.panTo = _lMap.panTo.bind(_lMap);
    this.panBy = _lMap.panBy.bind(_lMap);

    /*
     * Map initialization
     *
     */
    // add our MapSpice canvas layer to the underlying leaflet map
    _canvasTileLayer.addTo(_lMap);

    // add the selection canvas
    _selectionLayer.addTo(_lMap);

    // add the tracking canvas
    _trackingLayer.addTo(_lMap);

    this.clearTrackingSelections = function () {
        for (var i = 0; i < _layers.length; i++) {
            _layers[i].rolloverFeatureId = undefined;
            if (_layers[i].renderer && _layers[i].renderer.resetStyles) {
                _layers[i].renderer.resetStyles();
            }
        }

        _trackingLayer.resetDrawnFeatures();
        _trackingLayer.redrawTrackingLayer();
    };

    this.servers = options.servers || [];

    /*
     * Event handlers
     */
    _lMap.on('click', _onFindFeatureUnderMouse);
    _lMap.on('mousemove', _onFindFeatureUnderMouse);
    _lMap.on('mouseout', _onFindFeatureUnderMouse);
    _lMap.on('layeradd', _onLayerAddedOneTime);
    _lMap.on('viewreset', function () {
        _onScreenTiles = {};
        loadedTiles = {};
    });

    _lMap.on('zoomstart', function () {
        //console.log('zoom start');
        _geoDataProvider.cancelPendingRequests();

        // reset featureid under mouse for interactive layers
        var layerCount = _layers.length;
        for (var i = 0; i < layerCount; i++) {
            if (_layers[i].isInteractive) {
                if (_layers[i].rolloverFeatureId !== undefined) {
                    _layers[i].emit('featureRollOut', {
                        layer: _layers[i],
                        featureId: _layers[i].rolloverFeatureId
                    });
                    _layers[i].rolloverFeatureId = undefined;
                }
                // _layers[i].isInteractive = false;
                // tmpDisabledInteractivity[_layers[i].id] = _layers[i];
            }
        }
    });

    _lMap.on('moveend', function () {
        theMap.tracking.refresh();
        theMap.selections.refresh();
    });

    _canvasTileLayer.on('load', function () {
        theMap.emit('load');
        var duration = window.performance.now() - _startRenderTime;
        console.log('rendering complete', '(', duration, 'ms)');

        var currentZoom = _lMap.getZoom();
        var toRemoveKeys = [];
        for (var kzoom in _tilesByFeatureIndex.zoom()) {
            if (_tilesByFeatureIndex.zoom().hasOwnProperty(kzoom)) {

                if (+kzoom !== currentZoom) {
                    toRemoveKeys.push(kzoom);

                    delete _tilesByFeatureIndex.zoom()[kzoom];
                }
            }
        }

        // inspect _tiles and adjust current tiles
        for (var k in _onScreenTiles) {
            if (_onScreenTiles.hasOwnProperty(k)) {
                var found = false;
                for (var i in _canvasTileLayer._tiles) {
                    //_canvasTileLayer._tiles[i]._tilePoint.x
                    if (_onScreenTiles[k].x === _canvasTileLayer._tiles[i]._tilePoint.x &&
                        _onScreenTiles[k].y === _canvasTileLayer._tiles[i]._tilePoint.y) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    delete _onScreenTiles[k];
                }
            }
        }

        theMap.tracking.refresh();
        theMap.selections.refresh();
    });

    _canvasTileLayer.on('loading', function () {
        _startRenderTime = window.performance.now();
    });

    /**
     * Adds a layer to layer list
     *
     * @method addMapSpiceLayer
     * @param {Layer} layer The layer object to add the list
     */
    this.addMapSpiceLayer = function (layer) {
        layer.zIndex = Number.MAX_VALUE - _layers.length;
        layer.map = this;
        _layers.push(layer);
    };

    /**
     * Returns list of all layers
     *
     * @method getLayers
     * @return {List of Layer} list of layers
     */
    this.getLayers = function () {
        return _layers;
    };

    Object.defineProperty(this, 'layers', {
        get: function () {
            // we return a copy of the original layers array
            return _layers.slice(0);
        }
    });

    /**
     * Removes layer from the layer list
     *
     * @method removeMapSpiceLayergetNeighbors
     * @param {String} id Id of the layer to remove
     */
    this.removeMapSpiceLayer = function (id) {
        for (var i = 0; i < _layers.length; i++) {
            if (_layers[i].id === id) {
                _layers[i].removeListeners();
                _layers.splice(i, 1);
                break;
            }
        }
    };

    /**
     * Changes layer visibility.
     *
     * @method setLayerVisibility
     * @param {String} layerId Id of the layer
     * @param {Boolean} isVisible visibility of the layer
     */
    this.setLayerVisibility = function (layerIdOrLayer, isVisible) {
        var layer;

        if (!_.isObject(layerIdOrLayer)) {
            layer = _.find(_layers, function (l) {
                return l.id === layerIdOrLayer;
            }, this);
        } else {
            layer = layerIdOrLayer;
        }

        if (layer) {
            if (isVisible) {
                if (layer.renderer && layer.renderer.onAdded) {
                    layer.renderer.onAdded(this);
                }
            } else {
                if (layer.renderer && layer.renderer.onRemoved) {
                    layer.renderer.onRemoved(this);
                }
            }
        }
    };

    /**
     * Gets layer from layer list
     *
     * @method getLayer
     * @param {String} id Layer Id
     * @return {Layer} returns layer with specified id if found otherwise it returns undefined
     */
    this.getLayer = function (id) {
        return _.find(_layers, function (layer) {
            return layer.id === id;
        });
    };

    /**
     * Refreshes the current map
     * @method refresh
     * @return {void}
     */
    this.refresh = function () {
        _initialized = true;

        _onScreenTiles = {};
        loadedTiles = {};

        _layers.filter(function (layer) {
            return layer.renderer && layer.renderer.removeAllBubbles;
        }).forEach(function (layer) {
            layer.renderer.removeAllBubbles(this);
        }, this);

        if (_canvasTileLayer && _canvasTileLayer._map) {
            // leaflet has a bug when calling layer.redraw(), so we are doing it manually
            // here is the github issue
            // https://github.com/Leaflet/Leaflet/issues/2533
            _canvasTileLayer._reset({
                hard: false
            });
            _canvasTileLayer._update();

            this.tracking.refresh();
            this.selections.refresh();

            _trackingLayer.redraw();
            _selectionLayer.redraw();
        }
    };

    Object.defineProperty(this, 'zoom', {
        get: function () {
            return _lMap.getZoom();
        }
    });

    /**
     * Returns list of layers that are visible at specific zoom level
     *
     * @method getVisibleLayers
     * @param {Integer} zoom Zoom level
     * @return {Array of Layer} returns all zoom levels visible at specific zoom level
     */
    this.getVisibleLayers = function (zoom) {
        if (arguments.length === 0) {
            zoom = _lMap.getZoom();
        }

        return _layers.filter(function (layer) {
            return layer.isVisible && zoom >= layer.minZoom && zoom <= layer.maxZoom;
        });
    };

    // TODO: remove this
    this.getLmap = function () {
        return _lMap;
    };

    Object.defineProperty(this, 'L', {
        value: _L
    });

    // var tmpDisabledInteractivity = {};

    // var trackingLayerNeedsRedraw = false;

    // TODO: refactor this function, it's simply too big
    function checkForFeaturesUnderMouse(lMouseEvent, dispatchEvent) {
        if (!lMouseEvent) {
            return;
        }

        // we ignore mouse events that do not come from the canvas tile
        if (lMouseEvent.originalEvent && lMouseEvent.originalEvent.target) {
            if (lMouseEvent.originalEvent.target._tilePoint === undefined) {
                return;
            }
        }

        var worldX = lMouseEvent.layerPoint.x + _lMap.getPixelOrigin().x;
        var worldY = lMouseEvent.layerPoint.y + _lMap.getPixelOrigin().y;

        var x = (worldX / 256);
        var y = (worldY / 256);

        // find the target tile
        var tile = _onScreenTiles[Math.floor(x) + '.' + Math.floor(y)];

        if (!tile) {
            return;
        }

        var tileX = lMouseEvent.originalEvent.offsetX !== undefined ? lMouseEvent.originalEvent.offsetX : lMouseEvent.originalEvent.layerX;
        var tileY = lMouseEvent.originalEvent.offsetY !== undefined ? lMouseEvent.originalEvent.offsetY : lMouseEvent.originalEvent.layerY;

        // for each layer in tile layer list
        var featureIdUnderMouse;
        for (var i = 0; i < tile.layers.length; i++) {
            if (!tile.layers[i].layer.isInteractive) {
                continue;
            }

            // now check every feature
            featureIdUnderMouse = undefined;

            if (tile.layers[i].layer.featureType === Enums.FeatureType.POLYGON) {
                featureIdUnderMouse = Util.geo.polygonFeatureAt(tile.layers[i], tileX, tileY);
            } else if (tile.layers[i].layer.featureType === Enums.FeatureType.LINE) {
                featureIdUnderMouse = Util.geo.lineFeatureAt(tile.layers[i], tileX, tileY);
            } else {
                return;
            }
            var event;
            // event "featureRollOut" should happen only if some feature is alredy rolled over
            if (tile.layers[i].layer.rolloverFeatureId !== undefined) {
                if (lMouseEvent.type === 'mouseout' || featureIdUnderMouse !== tile.layers[i].layer.rolloverFeatureId) {
                    /* FeatureRollOut event */
                    if (!tile.layers[i].layer.isRolloverFeatureIdForced) {

                        event = new FeatureEvent();
                        event.name = 'featureRollOut';
                        event.mouseEvent = lMouseEvent;
                        event.featureId = tile.layers[i].layer.rolloverFeatureId;
                        event.layer = tile.layers[i].layer;

                        if (dispatchEvent) {
                            tile.layers[i].layer.emit(event.name, event);
                        }

                        tile.layers[i].layer.rolloverFeatureId = undefined;
                    }
                }
            }

            if (featureIdUnderMouse !== undefined && lMouseEvent.type !== 'mouseout') {
                // emit event
                if (lMouseEvent.type === 'click' || tile.layers[i].layer.rolloverFeatureId !== featureIdUnderMouse) {

                    // trackingLayerNeedsRedraw = false;

                    /* FeatureRollOver event */
                    event = new FeatureEvent();
                    if (lMouseEvent.type === 'click') {
                        event.name = 'featureClick';
                    } else {
                        event.name = 'featureRollOver';
                        tile.layers[i].layer.rolloverFeatureId = featureIdUnderMouse;
                    }

                    event.mouseEvent = lMouseEvent;
                    event.featureId = featureIdUnderMouse;
                    event.layer = tile.layers[i].layer;

                    if (dispatchEvent) {
                        tile.layers[i].layer.emit(event.name, event);
                    }
                }
            }
        }
    }

    // Represents interface for other components like RenderingEngine, Renderers to communicate with the map
    // This is a temp solution, since we'll try some other approaches
    this._internal = {
        _trackingLayer: _trackingLayer,
        _selectionLayer: _selectionLayer,
        allRenderedCallbacks: [],
        registerSVGUsage: function () {
            _svgUsageCount++;
            if (_svgUsageCount > 0) {
                var overlayPane = _lMap.getPanes().overlayPane;
                if (overlayPane.childNodes.length > 0) {
                    overlayPane.childNodes[0].style.display = 'block';
                }
            }
        },
        unregisterSVGUsage: function () {
            _svgUsageCount--;

            if (_svgUsageCount < 0) {
                _svgUsageCount = 0;
            }

            if (_svgUsageCount === 0) {
                // do the clean up
                var overlayPane = _lMap.getPanes().overlayPane;
                if (overlayPane.childNodes.length > 0) {
                    overlayPane.childNodes[0].style.display = 'none';
                }
            }
        },
        tilesByFeatureIndex: _tilesByFeatureIndex,

        setOnScreenTileRendered: function (key) {
            if (_onScreenTiles[key]) {
                _onScreenTiles[key].rendered = true;
            }
            _tilesToRender--;

            if (_tilesToRender === 0) {
                // theMap.emit('allrendered');
                while (this.allRenderedCallbacks.length > 0) {
                    var callback = this.allRenderedCallbacks.shift();
                    if (callback) {
                        callback();
                    }
                }
            }
        },

        /**
         * Adds a callback to be executed once all tiles have been rendered.
         * @method addAllRenderedCallback
         * @param {Function} callback callback to be executed
         */
        addAllRenderedCallback: function (callback) {
            if (_tilesToRender === 0) {
                if (callback) {
                    callback();
                }
            } else {
                this.allRenderedCallbacks.push(callback);
            }
        },
        cancelRenderingRequest: function () {
            _tilesToRender--;
        },

        setDebug: function (debug) {
            _engine.debug = debug;
        },

        isDebug: function () {
            return _engine.debug;
        },
        mapspiceCanvasLayer: _canvasTileLayer
    };

    Object.defineProperty(this, 'loadedTiles', {
        get: function () {
            return loadedTiles;
        }
    });

    /**
     * Indicates in we're ready to render tiles
     * @return {Boolean}
     */
    var canRender = function () {
        return _initialized === true;
    };

    /**
     * Returns rendering context for a canvas
     * @param  {[type]} canvas Canvas to get the context for
     * @return {CanvasRenderingContext2d}
     */
    var getContext = function (canvas) {
        return canvas.getContext('2d');
    };

    /**
     * Ensures valid state when starting to render a tile
     * @param  {Canvas2d} canvas Canvas that will be used for rendering
     * @return {Void}
     */
    var tileDrawingStarted = function (canvas) {
        _tilesToRender++;
        canvas.setAttribute('data-tile-drawn', 'no');
        var ctx = getContext(canvas);
        if (_backgroundColor !== undefined) {
            ctx.save();
            ctx.fillStyle = _backgroundColor;
            ctx.fillRect(0, 0, 256 * this.devicePixelRatio, 256 * this.devicePixelRatio);
            ctx.restore();
        }
    };

    /**
     * Adds tile to the list of currently visible tiles
     * @param  {Integer} tileIndex Tile index of the tile to add
     * @param  {LeafletTilePoint} tilePoint Tile point of the tile to add
     * @param  {Integer} zoom      Zoom level of the tile
     * @param  {GeoDataTile} tile      Tile
     * @return {Void}
     */
    var saveTileToOnScreen = function (tileIndex, tilePoint, zoom, tile) {
        if (_onScreenTiles[tilePoint.x + '.' + tilePoint.y] !== undefined) {

            for (var ppp = 0; ppp < tile.layers.length; ppp++) {

                _onScreenTiles[tilePoint.x + '.' + tilePoint.y].layers.push(tile.layers[ppp]);
            }

        } else {
            _onScreenTiles[tilePoint.x + '.' + tilePoint.y] = {
                x: tilePoint.x,
                y: tilePoint.y,
                index: tileIndex,
                layers: tile.layers.slice(0),
                canvas: tile.canvas
            };
        }

        var onScreenTile = _onScreenTiles[tilePoint.x + '.' + tilePoint.y];

        onScreenTile.layers.filter(function (layerData) {
            return layerData.layer.isInteractive;
        }).forEach(function (layer) {
            layer.features.forEach(function (feature) {
                _tilesByFeatureIndex.zoom(zoom).layer(layer.layer.id).feature(feature.featureId).push({
                    canvas: tile.canvas,
                    data: feature,
                    zoom: zoom,
                    tile: tile
                });
            });
        });

    };
    /**
     * In order to draw a tile we need to:
     *   - figure out visible layers (the ones that need to be rendered)
     *   - get the geo data for the tile
     *   - in case the tile contains any layers that have data (attDataProvider)
     *     we need to figure out which data tiles are needed in order to render the tile correctl
     *   - in case some of the layers are marked server-side we need to skip rendering of those but
     *     we need to get both the geo and data tiles for them so that interactivity works for those layers
     *   - in case there are some interactive layers, we need to save the whole geo tile (features) into a
     *     table so that we can access them later
     */
    _canvasTileLayer.drawTile = function (canvas, tilePoint, zoom) {
        if (!canRender()) {
            return false;
        }
        var allVisibleLayers = this.getVisibleLayers(zoom);
        tileDrawingStarted.bind(this)(canvas);

        drawServerSideLayers.bind(this)(allVisibleLayers, canvas, tilePoint, zoom, drawClientSideLayers.bind(this));

    }.bind(this);

    /**
     * Continues rendering of a tile once all the data tile indexes indeed have been loaded
     * @param  {GeoDataTile} tile   Tile that we need to render
     * @param  {Array of {Layer} objects} layers All layers
     * @param  {Integer} zoom   Zoom level that we're rendering
     * @return {Void}
     */
    var onDataTileIndexLoaded = function (tile, layers, zoom) {

        // if we have any data layers we'll first need to get the data for these data layers
        var dataRecordsPending = 0;
        var tilesToGet = [];

        // this is the callback when data is loaded for a single tile
        var dataRecordLoaded = function (err) {
            if (err) {
                console.log('dataRecordLoaded error:', err);
            }
            dataRecordsPending--;

            // in case we have no data tile records pending, we're ready to render the tile
            if (dataRecordsPending === 0) {
                _engine.render(tile);
            }
        };

        // make sure we have all datatile indices for all layers we depend on

        // figure out which data tiles we need to get in order to satisfy all
        // requirements needed to render the current tile
        var j;
        for (var i = 0; i < layers.length; i++) {

            var neededTiles = layers[i].getNeededDataTiles(zoom, tile.index);

            if (neededTiles.length > 0) {
                dataRecordsPending += neededTiles.length;

                for (j = 0; j < neededTiles.length; j++) {
                    tilesToGet.push({
                        layer: layers[i],
                        zoom: neededTiles[j].zoom,
                        id: neededTiles[j].id,
                        isServerBleed: neededTiles[j].isServerBleed
                    });
                }
            }
        }

        // there are no tiles that we need to get, just continue rendering
        if (tilesToGet.length === 0) {
            _engine.render(tile);
            return;

        } else {
            var groupedTilesToGet = _.groupBy(tilesToGet, function (o) {
                return o.layer.id;
            });

            for (var key in groupedTilesToGet) {
                if (groupedTilesToGet.hasOwnProperty(key)) {
                    var tileObjects = [];
                    for (j = 0; j < groupedTilesToGet[key].length; j++) {
                        tileObjects.push({
                            zoom: groupedTilesToGet[key][j].zoom,
                            tileIndex: groupedTilesToGet[key][j].id,
                            isServerBleed: groupedTilesToGet[key][j].isServerBleed,
                            callback: dataRecordLoaded
                        });
                    }

                    groupedTilesToGet[key][0].layer.notifyWhenAvailable(tileObjects);
                }
            }
        }
    };

    var loadedTiles = {};
    /**
     *
     * @param ctx {CanvasRenderingContext2D}
     * @param coords
     * @returns {*}
     */
    function createLabelCollisions(tileIndex, coords, ctx) {

            var lc = loadedTiles[tileIndex];

            if (!lc) {
                lc = new LabelCollisions(coords, ctx);
                loadedTiles[tileIndex] = lc;
            }

            lc.setContext(ctx);

            return lc;
        }
        /**
         * Handles rendering of client side layers.
         * @param  {Array of Layer} allLayers List of all currently visible layers
         * @param  {Canvas2d} canvas    Canvas that will be used for drawing
         * @param  {LeafletTilePoint} tilePoint Tile coordinates of the tile to be rendered
         * @param  {Integer} zoom      Zoom level of the tile to be rendered
         * @return {Void}
         */
    var drawClientSideLayers = function (allLayers, canvas, tilePoint, zoom) {
        var allVisibleLayers = allLayers;
        var csLayers = allVisibleLayers.filter(function (layer) {
            return !layer.isServerSide;
        });

        var tileIndex = _geoDataProvider.getTileIndex(tilePoint.x, tilePoint.y, zoom);

        _geoDataProvider.getTile(csLayers, tilePoint, zoom, function (tile) {
            tile.canvas = canvas;

            var collisions = createLabelCollisions(tileIndex, {
                x: tilePoint.x,
                y: tilePoint.y,
                z: zoom
            }, getContext(canvas));

            tile.labelCollisions = collisions;
            tile.loadedTiles = loadedTiles;

            saveTileToOnScreen(tileIndex, tilePoint, zoom, tile);

            var layersWithMissingDataTileIndex = allVisibleLayers.filter(function (layer) {
                return (!layer.dataTileIndexLoaded && layer.attDataProvider && layer.attDataProvider.fields && layer.attDataProvider.fields.length > 0);
            });

            if (layersWithMissingDataTileIndex.length === 0) {
                onDataTileIndexLoaded(tile, allVisibleLayers, zoom);
            } else {

                var dataTileIndexesPending = layersWithMissingDataTileIndex.length;
                var dataTileIndexArrived = function () {
                    dataTileIndexesPending--;

                    if (dataTileIndexesPending === 0) {
                        onDataTileIndexLoaded(tile, allVisibleLayers, zoom);
                    }

                };

                layersWithMissingDataTileIndex.forEach(function (layer) {
                    layer.notifyWhenDataIndexAvailable(dataTileIndexArrived);
                });
            }

        }.bind(this));

    };
    /**
     * Handles rendering of server-side layers
     * @param  {Canvas2d}   canvas    Canvas that will be used for drawing
     * @param  {LeafletTilePoint}   tilePoint Tile coordinates of the tile that will be drawn
     * @param  {Integer}   zoom      Zoom level of the tile
     * @param  {Function} callback  Callback to be executed once done
     * @return {Void}
     */
    var drawServerSideLayers = function (allLayers, canvas, tilePoint, zoom, callback) {
        var ctx = getContext(canvas);
        var ssLayers = allLayers.filter(function (layer) {
            return layer.isServerSide;
        });

        // in case we're forced to ignore server side layers or
        // there are no any just exit
        if (_ignoreServerSideLayers || ssLayers.length === 0) {
            callback(allLayers, canvas, tilePoint, zoom);
            return;
        }

        // we need to get the geo data for the interactive server side layers
        var interactiveSsLayers = ssLayers.filter(function (layer) {
            return layer.isInteractive;
        });
        var ti = _geoDataProvider.getTileIndex(tilePoint.x, tilePoint.y, zoom);

        _geoDataProvider.getTile(interactiveSsLayers, tilePoint, zoom, function (t) {
            saveTileToOnScreen(ti, tilePoint, zoom, t);
        });

        // go get the server side layers
        var ssUrl = _serverRenderingEndpoint;

        // TODO: this neeeds cleanup
        if (ssUrl === undefined || ssUrl === null) {
            console.log('Warning: there are server-side layers but serverRenderingEndpoint is not defined! Skipping server-side rendering.');
            callback(allLayers, canvas, tilePoint, zoom);
        } else {
            ssUrl += '?z=' + zoom;
            ssUrl += '&x=' + tilePoint.x + '&y=' + tilePoint.y;
            ssUrl += '&layers=' + ssLayers.map(function (l) {
                return l.id;
                /*+ '.' +l.geoLayerId;*/
            }).join('_');
            if (this.shouldUseRetina()) {
                ssUrl += '&devicePixelRatio=' + this.devicePixelRatio;
            }

            var dpr = this.devicePixelRatio;
            var img = new Image();
            //img.crossOrigin = "Anonymous";
            img.onload = function () {
                if (this.shouldUseRetina()) {
                    ctx.drawImage(img, 0, 0, 256 * dpr, 256 * dpr, 0, 0, 256, 256);
                } else {
                    ctx.drawImage(img, 0, 0);
                }

                // now we can continue
                callback(allLayers, canvas, tilePoint, zoom);
            }.bind(this);

            img.onerror = function () {
                console.log('Warning: error occurred while loading image from the server-side rendering endpoint.');
                callback(allLayers, canvas, tilePoint, zoom);
            }.bind(this);

            img.src = ssUrl;
        }

    };

    var _engine = new RenderingEngine(this, {
        pointsLimit: options.pointsLimit || 0,
        timeLimit: 0
    });
}

inherits(Map, EventEmitter);

module.exports = Map;

},{"./enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","./featureEvent":"/home/senadu/projects/Renderer-Cheetah/src/featureEvent.js","./geoDataProvider":"/home/senadu/projects/Renderer-Cheetah/src/geoDataProvider.js","./leafletPatches":"/home/senadu/projects/Renderer-Cheetah/src/leafletPatches.js","./overlayApi":"/home/senadu/projects/Renderer-Cheetah/src/overlayApi.js","./renderer/labels/labelCollisions":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/labelCollisions.js","./renderingEngine":"/home/senadu/projects/Renderer-Cheetah/src/renderingEngine.js","./trackingLayer":"/home/senadu/projects/Renderer-Cheetah/src/trackingLayer.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js","inherits":"/home/senadu/projects/Renderer-Cheetah/node_modules/inherits/inherits_browser.js","underscore":"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js","wolfy87-eventemitter":"/home/senadu/projects/Renderer-Cheetah/node_modules/wolfy87-eventemitter/EventEmitter.js"}],"/home/senadu/projects/Renderer-Cheetah/src/mapspice.js":[function(require,module,exports){
'use strict';

// window.performance polyfill
require('usertiming');

module.exports = {
    Map: require('./map'),
    Layer: require('./layer').Layer,
    LayerStyle: require('./layer').LayerStyle,
    Enums: require('./enums'),
    SimpleRenderer: require('./renderer/simpleRenderer'),
    Style: require('./style'),
    ValueRenderer: require('./renderer/valueRenderer'),
    Rule: require('./rule'),
    Color: require('./color'),
    ColorPalette: require('./colorPalette.js'),
    ColorRamp: require('./colorRamp'),
    AttDataProvider: require('./attDataProvider'),
    BubbleRenderer: require('./renderer/bubbleRenderer'),
    LabelRenderer: require('./renderer/labelRenderer'),
    Util: require('./util'),
    Project: require('./project/project.js')
};

},{"./attDataProvider":"/home/senadu/projects/Renderer-Cheetah/src/attDataProvider.js","./color":"/home/senadu/projects/Renderer-Cheetah/src/color.js","./colorPalette.js":"/home/senadu/projects/Renderer-Cheetah/src/colorPalette.js","./colorRamp":"/home/senadu/projects/Renderer-Cheetah/src/colorRamp.js","./enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","./layer":"/home/senadu/projects/Renderer-Cheetah/src/layer.js","./map":"/home/senadu/projects/Renderer-Cheetah/src/map.js","./project/project.js":"/home/senadu/projects/Renderer-Cheetah/src/project/project.js","./renderer/bubbleRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/bubbleRenderer.js","./renderer/labelRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labelRenderer.js","./renderer/simpleRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/simpleRenderer.js","./renderer/valueRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/valueRenderer.js","./rule":"/home/senadu/projects/Renderer-Cheetah/src/rule.js","./style":"/home/senadu/projects/Renderer-Cheetah/src/style.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js","usertiming":"/home/senadu/projects/Renderer-Cheetah/node_modules/usertiming/src/usertiming.js"}],"/home/senadu/projects/Renderer-Cheetah/src/overlayApi.js":[function(require,module,exports){
'use strict';

var _ = require('underscore');

var OverlayApi = function (map, targetLayer, sProp) {

    var styleProperty = sProp,
        _featuresIndex = {};

    /**
     * Adds feature to the target layer
     * @param {Integer} featureIndex Index of the feature to add
     * @param {Layer} layer        Layer
     */
    this.add = function (featureIndex, layer) {
        var style,
            s,
            i,
            zoom = map.zoom,
            key = featureIndex + '.' + layer.id;

        if (_.isArray(layer[styleProperty])) {
            zoom = map.zoom;
            for (i = 0; i < layer[styleProperty].length; i += 1) {
                s = layer[styleProperty][i];
                if (zoom <= Number(s.zoomMax) && zoom >= Number(s.zoomMin)) {
                    style = s;
                    break;
                }
            }
        } else {
            style = layer[styleProperty];
        }

        // in case we don't have a style, there's nothing to do
        if (!style) {
            return;
        }

        if (_featuresIndex[key] === undefined) {

            _featuresIndex[key] = {
                featureIndex: featureIndex,
                layer: layer,
                style: style
            };

            targetLayer.redrawTrackingLayer();
        }
    };

    /**
     * Removes a feature from a target layer
     * @param  {Integer} featureIndex Index of the feature to remove
     * @param  {Layer} layer        Layer
     * @return {void}
     */
    this.remove = function (featureIndex, layer) {
        var key = featureIndex + '.' + layer.id;

        if (_featuresIndex[key] !== undefined) {
            delete _featuresIndex[key];
            targetLayer.redrawTrackingLayer();
        }
    };

    /**
     * Clears all features
     * @return {void}
     */
    this.clear = function () {
        _featuresIndex = {};
    };

    /**
     * Forces a refresh of the target layer
     * @return {void}
     */
    this.refresh = function () {
        targetLayer.redrawTrackingLayer();
    };

    /**
     * Indicates if feature is present
     * @param  {Integer}  featureIndex Index of the feature
     * @param  {Layer}  layer        Layer
     * @return {Boolean}              true if features is present otherwise false
     */
    this.hasFeature = function (featureIndex, layer) {
        var key = featureIndex + '.' + layer.id;
        return _featuresIndex[key] !== undefined;
    };

    Object.defineProperty(this, 'features', {
        get: function () {
            return Object.keys(_featuresIndex).map(function (key) {
                return _featuresIndex[key];
            }, this);
        }
    });

};

module.exports = OverlayApi;

},{"underscore":"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js"}],"/home/senadu/projects/Renderer-Cheetah/src/project/project.js":[function(require,module,exports){
/* global Map:true */
'use strict';

var Map = require('../map.js');
var Enums = require('../enums.js');
var Layer = require('../layer.js').Layer;
var Style = require('../style.js');
var Rule = require('../rule.js');
var SimpleRenderer = require('../renderer/simpleRenderer');
var LabelRenderer = require('../renderer/labelRenderer');
var ValueRenderer = require('../renderer/valueRenderer');
var BubbleRenderer = require('../renderer/bubbleRenderer');
var AttDataProvider = require('../attDataProvider');

/**
 * Project class represents a MapSpice project.
 *
 * @class Project
 * @constructor
 * @param {Object} jsonProject JSON map object
 * @param {Object} mapOptions MAP options object

 */
function Project(jsonProject, mapOptions) {

    var _container = 'map';

    Object.defineProperty(this, 'container', {
        get: function () {
            return _container;
        },
        set: function (value) {
            _container = value;
        }
    });

    var _defaultView;
    Object.defineProperty(this, 'defaultView', {
        get: function () {
            return _defaultView;
        },
        set: function (value) {
            _defaultView = value;
        }
    });

    var _serverMap;
    Object.defineProperty(this, 'serverMap', {
        get: function () {
            return _serverMap;
        },
        set: function (value) {
            _serverMap = value;
        }
    });

    var _clientMap;
    Object.defineProperty(this, 'clientMap', {
        get: function () {
            return _clientMap;
        },
        set: function (value) {
            _clientMap = value;
        }
    });

    Object.defineProperty(this, 'map', {
        get: function () {
            return _clientMap || _serverMap;
        }
    });

    var _jsonProject = jsonProject;
    Object.defineProperty(this, 'jsonProject', {
        get: function () {
            return _jsonProject;
        },
        set: function (value) {
            _jsonProject = value;
        }
    });

    var _mapOptions = mapOptions;
    Object.defineProperty(this, 'mapOptions', {
        get: function () {
            return _mapOptions;
        },
        set: function (value) {
            _mapOptions = value;
        }
    });

    var _servers;
    Object.defineProperty(this, 'servers', {
        get: function () {
            return _servers;
        },
        set: function (value) {
            _servers = value;
        }
    });

    /*  var _reusables = {};
     var preprocessReusables = function (jsonMap) {

     _reusables = {};
     var jsonReusables = jsonMap.reusables || {};
     for (var key in jsonReusables) {
     if (jsonReusables.hasOwnProperty(key)) {
     var jsonReusable = jsonReusables[key];
     _reusables[key] = mapspiceObjectFromJson(jsonReusable);
     }
     }
     };

     var mapspiceObjectFromJsonReusable = function (jsonReusable, explicitType) {
     var typeOfObject = explicitType || jsonReusable.type;

     if (typeOfObject === Enums.JsonObjectType.STYLE) {
     return new Style(jsonReusable);
     }

     };

     var getFromReusable = function (key) {
     return _reusables[key];
     }; */

    this.createClientSideMap = function () {
        var mapOptions = this.mapOptions || {};
        mapOptions.servers = this.servers || this.mapOptions.servers;
        var map = new Map(this.container, mapOptions);
        map.data = this.jsonProject.data || {};
        var defaultView = this.defaultView || this.jsonProject.defaultView || {};
        map.getLmap().setView([defaultView.lat, defaultView.lng], defaultView.zoomLevel);

        this.serverMap = undefined;
        this.clientMap = map;
    };

    this.createLayers = function () {
        var jsonMap = jsonProject;
        var layers = jsonMap.layers;

        var sortedLayers = layers.sort(function (a, b) {
            return a.ordinal - b.ordinal;
        });
        var resultLayers = [];
        for (var i = 0; i < sortedLayers.length; i++) {
            var jsonLayer = sortedLayers[i];
            var layer = new Layer(jsonLayer.id, jsonLayer.geoLayerId, jsonLayer.name, jsonLayer.layerType, jsonLayer.minZoomLevel, jsonLayer.maxZoomLevel);
            layer.data = {}; // TODO: remove when support is added on engine level
            layer.data.tags = jsonLayer.tags;
            layer.data.variableName = jsonLayer.dataMeasureName;
            layer.data.originalMinZoom = jsonLayer.minZoomLevel;
            layer.data.originalMaxZoom = jsonLayer.maxZoomLevel;
            layer.data.ordinal = jsonLayer.ordinal;

            layer.data.survey = jsonLayer.dataMeasureSurvey;
            layer.data.sizeOffset = 1; // larger bubbles on census tract and

            layer.data.bubbleSizeScale = jsonLayer.dataBubbleSizeScale;
            this.map.addMapSpiceLayer(layer);
            resultLayers.push(layer);

        }

    };

    /* var createArrayFinder = function (jsonLayer) {
        return function (element) {
            return element.id.toString() === jsonLayer.mapElement.dataLayer;
        };
    }; */

    this.processMapElements = function () {
        var jsonMap = this.jsonProject;
        var layers = jsonMap.layers;
        var sortedLayers = layers.sort(function (a, b) {
            return a.ordinal - b.ordinal;
        });

        for (var i = 0; i < sortedLayers.length; i++) {

            var jsonLayer = sortedLayers[i];
            var mapLayers = this.map.getLayers();
            var layer = mapLayers[i];
            switch (jsonLayer.mapElement.type) {
            case Enums.MapElementType.SIMPLE:
                layer.renderer = setupSimpleRenderer(jsonLayer.mapElement);
                break;
            case Enums.MapElementType.VALUE:
                layer.renderer = setupValueRenderer(jsonLayer.mapElement);
                layer.attDataProvider = new AttDataProvider(layer, jsonLayer.mapElement.dataSet.columns);
                layer.attDataProvider.dataSet = jsonLayer.mapElement.dataSet.id;
                layer.data.cutPoints = jsonLayer.mapElement.cutPoints;

                break;
            case Enums.MapElementType.BUBBLE:
                layer.renderer = setupBubbleRenderer.call(this, jsonLayer.mapElement);
                layer.attDataProvider = new AttDataProvider(layer, jsonLayer.mapElement.dataSet.columns);
                layer.attDataProvider.dataSet = jsonLayer.mapElement.dataSet.id;
                layer.data.bubbleSizeFactor = Number(jsonLayer.mapElement.bubbleSizeFactor);

                break;
            case Enums.MapElementType.LABEL:
                layer.renderer = [setupLabelRenderer(jsonLayer.mapElement)];
                if (jsonLayer.mapElement.dataSet) {
                    layer.attDataProvider = new AttDataProvider(layer, jsonLayer.mapElement.dataSet.columns);
                    if (jsonLayer.mapElement.dataSet.id) {
                        layer.attDataProvider.dataSet = jsonLayer.mapElement.dataSet.id;
                    }
                }
                break;
            default:
                layer.renderer = null;
            }

            layer.isVisible = jsonLayer.visible;
        }
    };

    /*    var findInArray = function (ary, cb) {
            for (var i = 0; i < ary.length; i += 1) {
                if (cb(ary[i])) {
                    return ary[i];
                }
            }
        }; */

    this.convertToMapspiceClientSide = function () {
        this.createClientSideMap();
        this.createLayers();
        this.processMapElements();
        return this.map;
    };

    var addStyles = function (renderer, styles) {
        for (var i = 0; i < styles.length; i += 1) {
            renderer.addStyle(new Style(styles[i]));
        }
    };

    var addRules = function (renderer, rules) {
        for (var i = 0; i < rules.length; i += 1) {
            renderer.addRule(getRule(rules[i]));
        }
    };

    var getRule = function (jsonRule, style) {
        // TODO: build real expression parser
        // this one supports just v0 >= from && v0 <= to
        var variable = jsonRule.variables[0];
        if (variable instanceof Array) {
            // first element in array is function name
            var computeFunction = computeMethods[variable[0]].apply(this, variable.slice(1));
            if (typeof computeFunction === 'function') {
                variable = computeFunction;
            }
        }
        if (!style) {
            style = new Style(jsonRule.style);
        }
        return new Rule(variable, jsonRule.code, style);
    };

    var setupSimpleRenderer = function (mapElement) {
        var renderer = new SimpleRenderer();

        for (var i = 0; i < mapElement.styles.length; i++) {
            var jsonStyle = mapElement.styles[i];
            renderer.addStyle(new Style(jsonStyle));
        }
        return renderer;
    };

    var setupValueRenderer = function (mapElement) {
        var renderer = new ValueRenderer(mapElement.dataSet.columns);

        if (mapElement.rules) {

            addRules(renderer, mapElement.rules);

        }
        return renderer;
    };

    var setupBubbleRenderer = function (mapElement) {
        var jsonMap = this.jsonProject;
        var renderer = new BubbleRenderer();
        renderer.setBubbleSizeField(mapElement.bubbleSizeField);
        renderer.setDefaultBubbleStyle(new Style(mapElement.style));
        renderer.setBubbleSize(mapElement.bubbleSizeFactor, jsonMap.defaultView.zoomLevel);

        return renderer;
    };

    var setupLabelRenderer = function (mapElement) {

        var renderer = new LabelRenderer(mapElement.labelColumnName, mapElement.labelCollisionSortColumn, mapElement.labelCollisionSortDescending);

        if (mapElement.styles) {
            addStyles(renderer, mapElement.styles);
        }

        if (mapElement.rules) {
            addRules(renderer, mapElement.rules);
        }

        return renderer;
    };

    var computeMethods = {
        computedValueFunction: function (name, argument1, argument2) {
            if (name === 'percent') {
                return function (v) {
                    var v1 = v[argument1];
                    var v2 = v[argument2];
                    if (v1 === null || v1 === undefined || v2 === null || v2 === undefined) {

                        return null;
                    }

                    var result = Number(v1) / Number(v2) * 100;
                    if (isNaN(result)) {
                        return null;
                    }

                    return result;
                };
            }

            // multiply currently supports only variable as first argument and constant as second argument
            // TODO: create it properly
            if (name === 'multiply') {
                return function (v) {
                    var v1 = v[argument1];
                    var v2 = argument2;
                    if (v1 === null || v1 === undefined || v2 === null || v2 === undefined) {
                        return null;
                    }
                    var result = Number(v1) * Number(v2);
                    if (isNaN(result)) {
                        return null;
                    }

                    return result;
                };
            }
        }
    };

}

module.exports = Project;

},{"../attDataProvider":"/home/senadu/projects/Renderer-Cheetah/src/attDataProvider.js","../enums.js":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","../layer.js":"/home/senadu/projects/Renderer-Cheetah/src/layer.js","../map.js":"/home/senadu/projects/Renderer-Cheetah/src/map.js","../renderer/bubbleRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/bubbleRenderer.js","../renderer/labelRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labelRenderer.js","../renderer/simpleRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/simpleRenderer.js","../renderer/valueRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/valueRenderer.js","../rule.js":"/home/senadu/projects/Renderer-Cheetah/src/rule.js","../style.js":"/home/senadu/projects/Renderer-Cheetah/src/style.js"}],"/home/senadu/projects/Renderer-Cheetah/src/recordset.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
var Enums = require('./enums');
var DataColumn = require('./dataColumn');

/**
 * Provides storage for data
 *
 * @class Recordset
 * @constructor
 */
var Recordset = Class.extend({
    _featureIndex: undefined,
    _tileIndex: undefined,
    _columns: undefined,
    _addedFeaturesColumn: undefined,
    _layer: undefined,
    init: function (layer) {
        this._featureIndex = {};
        this._tileIndex = {};
        this._columns = [];
        this._addedFeaturesColumn = new DataColumn('SEAddedFeatureId', Enums.DataType.INT, 'SEAddedFeatureId');
        this._layer = layer;

        this.addColumn(this._addedFeaturesColumn);
    },

    /**
     * Returns all columns
     * @return {Array of DataColumn} Data columns in this recordset
     */
    getColumns: function () {
        return this._columns;
    },

    /**
     * Returns FeatureId column
     * @return {DataColumn} Data column that contains feature IDs
     */
    getFeatureIdsColumn: function () {
        return this._addedFeaturesColumn;
    },

    /**
     * Returns column by given name
     *
     * @param {String} colName Column name
     * @return {DataColumn} Returns DataColumn object corresponding to the given column name
     */
    getColumnByName: function (colName) {
        var colCount = this._columns.length;
        for (var i = 0; i < colCount; i++) {
            if (this._columns[i]._columnName === colName) {
                return this._columns[i];
            }
        }
        return undefined;
    },

    /**
     * Returns feature index object
     *
     * @method getFeatureIndex
     * @return {Object} Feature index
     */
    getFeatureIndex: function () {
        return this._featureIndex;
    },

    /**
     * Returns tile index object
     *
     * @method getTileIndex
     * @return {Object} Tile index
     */
    getTileIndex: function () {
        return this._tileIndex;
    },

    /**
     * Returns value as is
     *
     * @method getValue
     * @param {Number} featureIndex Feature index
     * @param {Number} colIndex Column index
     * @return {Object} Value
     */
    getValue: function (featureIndex, colIndex) {
        if (!this._columns[colIndex]) {
            return null;
        }
        //return this._columns[colIndex]._columnData[this._featureIndex[featureIndex]];

        var index = this._featureIndex[featureIndex];
        if (index) {
            return this._columns[colIndex]._data[index.chunk][index.index];
        }
    },

    /**
     * Returns column index for given column name
     *
     * @method getColumnIndex
     * @param {String} colName Column name
     * @return {Number} Column index if present. -1 otherwise.
     */
    getColumnIndex: function (colName) {
        if (this._columns.length > 0) {
            for (var i = 0; i < this._columns.length; i++) {
                if (this._columns[i]._columnName.toLowerCase() === colName.toLowerCase()) {
                    return i;
                }
            }
        } else {
            return -1;
        }
    },
    /**
     * Adds column to recordset
     *
     * @method addColumn
     * @param {DataColumn} dataColumn Data column
     */
    addColumn: function (dataColumn) {
        this._columns.push(dataColumn);
    },

    /**
     * Removes column from recordset
     *
     * @method removeColumn
     * @param {Number} index Column index
     * @return {Boolean} True if the column has been removed from recordset. False otherwise.
     */
    removeColumn: function (index) {
        if (this._columns[index] !== undefined) {
            this._columns.splice(index, 1);
            return true;
        } else {
            return false;
        }
    },

    /**
     * Returns feature index for given column index and value
     *
     * @method findFeatureIndex
     * @param {Number} colIndex Column index
     * @param {Number} value Feature value
     * @return {Number} Feature index
     */
    findFeatureIndex: function (colIndex, value) {
        var rows = this.getRowCount();

        for (var i = 0; i < rows; i++) {
            if (this.getValue(i, colIndex) === value) {
                return i;
            }
        }

        return -1;
    },

    /**
     * Gets hash map with columnName/columnValues pairs for particular feature
     *
     * @method getFeatureValues
     * @param  {Number} featureIndex Feature id for what to search
     * @return {Object}              columnName/columnValues pairs
     */
    getFeatureValues: function (featureIndex) {
        var featureValues = {};
        var columns = this.getColumns();
        var colLen = columns.length;
        for (var k = 0; k < colLen; k += 1) {
            featureValues[columns[k]._columnName] =
                this.getValue(featureIndex, k);
        }
        return featureValues;
    },

    /**
     * Gets all features that are present on specified tile. If there is no data for current
     * tile and zoom, it will look for nearest zoom level
     * @param  {String} tile Tile in following format: zoomLevel.tileIndex
     * @return {Array} Array of feature ids is returned
     */
    getFeaturesForTile: function (tile) {
        var zoomLevelTileIndex = tile.split('.');
        var zoomLevel = +zoomLevelTileIndex[0];
        var tileIndex = +zoomLevelTileIndex[1];
        var tileIndexes = this._tileIndex;
        var featuresIdChunks = this._addedFeaturesColumn._data;

        var needed = this._layer.getNeededDataTiles(zoomLevel, tileIndex);

        var ids = [];

        for (var k = 0; k < needed.length; k++) {
            var chunk = tileIndexes[needed[k].zoom + '.' + needed[k].id];
            if (chunk !== undefined) {
                ids = ids.concat(featuresIdChunks[chunk]);
            }
        }

        return ids;
    }
});

module.exports = Recordset;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./dataColumn":"/home/senadu/projects/Renderer-Cheetah/src/dataColumn.js","./enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js"}],"/home/senadu/projects/Renderer-Cheetah/src/rectangle.js":[function(require,module,exports){
'use strict';

/**
 * Represents a rectangle
 *
 * @class
 */
var Rectangle = function () {
    /**
     * Left
     *
     * @property left
     * @type Integer
     */
    this.left = 1000;

    /**
     * Right
     *
     * @property right
     * @type Integer
     */
    this.right = -1000;

    /**
     * Top
     *
     * @property top
     * @type Integer
     */
    this.top = 1000;

    /**
     * Bottom
     *
     * @property bottom
     * @type Integer
     */
    this.bottom = -1000;
};

module.exports = Rectangle;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/renderContext.js":[function(require,module,exports){
'use strict';
/**
 * Holds rendering states. It enables pausing/resuming of rendering process.
 * @class RenderContext
 * @constructor
 */
function RenderContext(featureIndex, pointsRendered, timeLeft) {
    /**
     * Feature index being rendered
     * @property featureIndex
     * @type Integer
     */
    this.featureIndex = featureIndex;

    /**
     * Points rendered until now across all renderers
     * @property pointsRendered
     * @type Integer
     */
    this.pointsRendered = pointsRendered;

    /**
     * Time left for rendering
     * @property timeLeft
     * @type Number
     */
    this.timeLeft = timeLeft;

    /**
     * Indicates whether rendering has been stopped.
     * @property stopped
     * @type Boolean
     */
    this.stopped = false;

    /**
     * Time limit for rendering
     * @property timeLimit
     * @type Number
     */
    this.timeLimit = 0;

    /**
     * Points limit for rendering
     * @property pointsLimit
     * @type Integer
     */
    this.pointsLimit = 0;

    /**
     * Current renderer in case of multiple renderers
     * @property rendererIndex
     * @type Integer
     */
    this.rendererIndex = 0;
}

module.exports = RenderContext;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/baseRenderer.js":[function(require,module,exports){
/*global require,module*/
'use strict';

var Class = require('../class');
var Util = require('../util');

var isNode = Util.isNode();
var PerformanceMeasure = function (renderContext) {
    this.checkTime = renderContext.timeLimit > 0;
    this.pointsLimit = renderContext.pointsLimit;
    this.checkPoints = this.pointsLimit > 0;
    if (!isNode) {
        this.startTime = window.performance.now();
    }

    this.check = function (featureIndex) {
        if (!isNode) {
            var fend = window.performance.now();
            renderContext.timeLeft -= (fend - this.startTime);
        }

        if (this.checkTime && renderContext.timeLeft <= 0) {
            renderContext.stopped = true;
            renderContext.featureIndex = featureIndex + 1;
            // return renderContext;
            return true;
        }

        if (this.checkPoints && renderContext.pointsRendered > this.pointsLimit) {
            renderContext.stopped = true;
            renderContext.featureIndex = featureIndex + 1;
            // return renderContext;
            return true;
        }
        return false;
    };
};

/**
 * Simple renderer
 *
 * @class SimpleRenderer
 */
var BaseRenderer = Class.extend({
    _performanceMeasure: undefined,
    _rules: undefined,
    init: function () {
        this.preventRendering = false;
        // define constants
        Object.defineProperty(this, 'ICON_MAX_WIDTH', {
            value: 20,
            writable: false
        });
        Object.defineProperty(this, 'ICON_MAX_HEIGHT', {
            value: 20,
            writable: false
        });
    },
    /**
     * Adds a rule to the rule list
     *
     * @method addRule
     * @param {Rule} rule Rule to add
     */
    addRule: function (rule) {
        this._rules.push(rule);
    },
    /**
     * Find rule for particular layer data, feature id and zoom level.
     *
     * @method getStyleFromRules
     * @param  {Number} featureId       ID of the feature that is to be drawn
     * @param  {LayerData} layerData    Data for particular tile
     * @param  {Number} zoom            Current zoom level
     * @return {Rule}
     */
    getRule: function (featureId, layerData, zoom) {
        var featureValues, val;

        var rules = this._rules;
        if (!rules) {
            return;
        }

        var recordset = layerData.layer.attDataLayer ? layerData.layer.attDataLayer.recordset : layerData.layer.recordset;

        var nrRules = rules.length;
        for (var i = 0; i < nrRules; i += 1) {
            if (rules[i].isFunc) {
                // calculate this only if at least one rule has fieldName as function
                if (!featureValues) {
                    featureValues = recordset.getFeatureValues(featureId);
                }
                //TODO: rename 'fieldName' to something else or introduce fn variable
                val = rules[i].fieldName(featureValues);

            } else {
                // TODO: optimize to avoid getColumnIndex calls
                val = recordset.getValue(featureId, recordset.getColumnIndex(rules[i].fieldName));
            }

            if (rules[i].evaluate(val, zoom)) {
                return rules[i];
            }
        }
    },
    /**
     * Find rule for particular layer data, feature id and zoom level. (calls getRule method)
     * Than returns {Style} for that rule
     *
     * @method getStyleFromRules
     * @param  {Number} featureId       ID of the feature that is to be drawn
     * @param  {LayerData} layerData    Data for particular tile
     * @param  {Number} zoom            Current zoom level
     * @return {Style}                  Style that this matching rule contains
     */
    getStyleFromRules: function (featureId, layerData, zoom) {
        var rule = this.getRule(featureId, layerData, zoom);
        if (rule) {
            return rule.style;
        }
    },
    /**
     * Draws icon at specified coordinates on cavas
     *
     * @method _drawIcon
     * @param  {CanvasRenderingContext2D} ctx Canvas context on which to draw
     * @param  {Number} dx Destination (on canvas) x coordinate
     * @param  {Number} dy Destination (on canvas) y coordinate
     * @param  {Style} style Style to apply when drawing
     * @param  {Image|String} icon Icon object to be drawn
     * @return {void}
     */
    _drawIcon: function (ctx, dx, dy, style, icon) {
        var self = this;
        var iconDrawer = function () {
            var sx = style.icon.x || 0;
            var sy = style.icon.y || 0;
            var sw = Math.min(style.icon.width || icon.width, self.ICON_MAX_WIDTH);
            var sh = Math.min(style.icon.height || icon.height, self.ICON_MAX_HEIGHT);
            ctx.drawImage(icon, sx, sy, sw, sh, dx - sw / 2, dy - sh / 2, sw, sh);
        };
        if (!icon) {
            icon = style.icon.src;
        }
        if (typeof icon === 'string') {
            var src = icon;
            icon = new Image();
            icon.addEventListener('load', iconDrawer);
            icon.src = src;
        } else if (!icon.complete) {
            icon.addEventListener('load', iconDrawer);
        } else {
            iconDrawer();
        }
    },
    /**
     * Draws full circle on canvas
     * @param  {CanvasRenderingContext2D} ctx Canvas contex on what to draw
     * @param  {Number} x                     Position x on canvas
     * @param  {Number} y                     Position y on canvas
     * @param  {Number} radius                Circle radius
     * @param  {Style} style                  Stroke and fill styles
     * @return {void}
     */
    _drawCircle: function (ctx, x, y, radius, style) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        if (style.hasStroke()) {
            ctx.stroke();
        }
        if (style.hasFill()) {
            ctx.fill();
        }
    },
    /**
     * Draw a line for a particula feature
     * @param  {CanvasRenderingContext2D} ctx Canvas context on which to draw
     * @param  {Array} parts Feature's parts of the line
     * @return {Number} Number of points rendered
     */
    _drawLineForParts: function (ctx, parts) {
        var pointsRendered = 0;
        // for every part in the feature
        var nrParts = parts.length;

        for (var k = 0; k < nrParts; k++) {
            var part = parts[k];

            // part length is too mall
            var partLen = part.length;
            if (partLen <= 1) {
                continue;
            }

            var p = 0;
            ctx.moveTo(part[p], part[p + 1]);
            while (p < partLen - 1) {
                ctx.lineTo(part[p], part[p + 1]);
                p += 2;
                pointsRendered += 1;
            }
        }
        return pointsRendered;
    },
    /**
     * Starts to measure time spent rendering
     *
     * @method _startMeasure
     * @param  {RenderContext} renderContext Holds meta data about rendering process
     * @return {void}
     */
    _startMeasure: function (renderContext) {
        this._performanceMeasure = new PerformanceMeasure(renderContext);
    },
    /**
     * Check if rendering can be continued
     *
     * @method _check
     * @param  {Number} featureIndex What is current index that is rendered
     * @return {Boolean} Can rendering be continued?
     */
    _shouldStopRendering: function (featureIndex) {
        return this._performanceMeasure.check(featureIndex);
    }
});

module.exports = BaseRenderer;

},{"../class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","../util":"/home/senadu/projects/Renderer-Cheetah/src/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/bubbleRenderer.js":[function(require,module,exports){
'use strict';
var BaseRenderer = require('./baseRenderer');
var FeatureEvent = require('../featureEvent');
/*
 * Bubble renderer. Uses centroid to render bubbles.
 */
var BubbleRenderer = BaseRenderer.extend({
    init: function () {
        // no need for this._super() call, because we don't use
        // ICON_MAX_WIDTH and ICON_MAX_HEIGHT
        this._rules = [];
        this._bubbleSizeFactor = 0.1;
        this._pointsAdded = {};
        this._viewResetAttached = false;
        this._bubbleSizeField = undefined;
        this._defaultBubbleStyle = undefined;
        this._highlightStyle = undefined;
    },
    /*
     * Sets bubble size factor
     *
     * @method setBubbleSize
     * @param {Number} factor Bubble size factor
     * @param {Integer} zoom Current map zoom level
     */
    setBubbleSize: function (factor) {
        this._bubbleSizeFactor = factor;
        //var zoom = map.getLmap().getZoom();
        var pointsAdded = this._pointsAdded;
        for (var key in pointsAdded) {
            if (pointsAdded.hasOwnProperty(key)) {
                var bubble = this._pointsAdded[key];
                bubble.setRadius(this._calculateRadius(bubble.originalValue));
            }
        }

    },
    /*
     * Sets highlight style
     *
     * @method setHighlightStyle
     * @param {Style} style Style to use as the highlight style
     */
    setHighlightStyle: function (style) {
        this._highlightStyle = style;
    },
    /*
     * Sets field to be used for determining bubble size.
     *
     * @method setBubbleSizeField
     * @param {String} field Name of the field to use for bubble size
     */
    setBubbleSizeField: function (field) {
        this._bubbleSizeField = field;
    },
    /*
     * Sets default bubble style
     *
     * @method setDefaultBubbleStyle
     * @param {Style} Default bubble style
     */
    setDefaultBubbleStyle: function (style) {
        this._defaultBubbleStyle = style;
    },
    /*
     * Called when a layer with this renderer is added to a map
     *
     * @method onAdded
     * @param {Map} map Target map
     */
    onAdded: function (map) {
        map._internal.registerSVGUsage();
    },
    /*
     * Called when a layer with this renderer is removed from a map
     *
     * @method onRemove
     * @param {Map} map Target map
     */
    onRemoved: function (map) {
        this.removeAllBubbles(map);
        map._internal.unregisterSVGUsage();
    },
    /*
     * Calculates radius based on value
     *
     * @method _calculateRadius
     * @param {Number} val Value
     */
    _calculateRadius: function (val) {
        var radius = val * this._bubbleSizeFactor;
        radius = Math.sqrt(radius / Math.PI);

        return radius / 2;
        /*
        // S is distance represented by one pixel
        var S = function S(C,y,z) {
            return (C*Math.cos(y))/Math.pow(2, z+8);
        };
        var pixelTarget = radius;
        return radius;

        // meters per pixel
        var s = S(40007, 0, zoom) * 1000;
        return pixelTarget * s;
        */
    },
    /*
     * Removes all bubbles from the map
     *
     * @method _removeALlBubbles
     * @param {Map} map Target map
     */
    removeAllBubbles: function (map) {
        var lmap = map.getLmap();
        var pointsAdded = this._pointsAdded;
        for (var key in pointsAdded) {
            if (pointsAdded.hasOwnProperty(key)) {
                lmap.removeLayer(pointsAdded[key]);
                delete pointsAdded[key];
            }
        }
        this._pointsAdded = {};

    },
    resetStyles: function () {
        var pointsAdded = this._pointsAdded;
        for (var key in pointsAdded) {
            if (pointsAdded.hasOwnProperty(key)) {
                var bubble = pointsAdded[key];
                this._applyStyle(bubble, {}, bubble.style);
            }
        }
    },
    /*
     * Adds a bubble to a map
     *
     * @method _addBubble
     * @param {Map} Target map
     * @param {Integer} featureId Feature Id
     * @param {L.LatLng} latLng Lat/Lng of the bubble
     * @param {Number} val Value
     * @param {Integer} zoom Zoom level
     * @param {Style} style Bubble style
     * @param {Layer} layer Layer that the bubble belongs to
     */
    _addBubble: function (map, featureId, latLng, val, zoom, style, layer) {
        var options = {};

        if (style) {
            options.color = style.stroke;
            options.fillColor = style.fill;
            options.stroke = style.hasStroke();
            options.weight = style.strokeWidth;
            options.opacity = style.opacity;
            options.fillOpacity = style.fillOpacity;
        }

        options.radius = this._calculateRadius(val);
        var circle = L.circleMarker(latLng, options);

        circle.featureId = featureId;
        circle.style = style;
        circle.latLng = latLng;
        circle.layer = layer;

        circle.on('mouseout', function (mouseEvent) {

            if (this._highlightStyle) {
                this._applyStyle(mouseEvent.target, mouseEvent.target.style);
            }
            var event = new FeatureEvent();
            event.name = 'featureRollOut';
            event.mouseEvent = mouseEvent;
            event.featureId = mouseEvent.target.featureId;
            event.layer = layer;

            layer.emit(event.name, event);

            layer.rolloverFeatureId = undefined;
            layer.isRolloverFeatureIdForced = false;
        }.bind(this));

        var featureOverEventName = 'mouseover';

        var isTouch = L.Browser.touch;
        if (isTouch) {
            featureOverEventName = 'click';
        }
        circle.on(featureOverEventName, function (mouseEvent) {
            if (this._highlightStyle) {
                this._applyStyle(mouseEvent.target, this._highlightStyle, mouseEvent.target.style);
            }

            if (isTouch && layer.rolloverFeatureId !== undefined) {
                var outEvent = new FeatureEvent();
                outEvent.name = 'featureRollOut';
                outEvent.mouseEvent = mouseEvent;
                outEvent.featureId = layer.rolloverFeatureId;
                outEvent.layer = layer;
                layer.emit(outEvent.name, outEvent);
                layer.isRolloverFeatureIdForced = false;
                layer.rolloverFeatureId = undefined;

                var oldCircle = this._pointsAdded[outEvent.featureId];
                if (oldCircle) {
                    this._applyStyle(oldCircle, {}, oldCircle.style);
                }
            }

            //console.log('mouseover', mouseEvent);
            layer.rolloverFeatureId = mouseEvent.target.featureId;
            var event = new FeatureEvent();
            event.name = 'featureRollOver';
            event.mouseEvent = mouseEvent;
            event.featureId = mouseEvent.target.featureId;
            event.layer = layer;

            layer.isRolloverFeatureIdForced = true;
            layer.emit(event.name, event);
        }.bind(this));
        circle.addTo(map.getLmap());
        circle.originalValue = val;
        this._pointsAdded[featureId] = circle;
    },
    /*
     * Applys a style to a bubble
     * @method _applyStyle
     * @param {L.Circle} bubble Bubble to apply the style to
     * @param {Style} style Style to apply
     * @param {Style} style Default style to use
     */
    _applyStyle: function (bubble, style, defaultStyle) {
        var options = {};
        defaultStyle = defaultStyle || style;

        if (style) {
            options.color = style.stroke || defaultStyle.stroke;
            options.fillColor = style.fill || defaultStyle.fill;
            options.stroke = (style.hasStroke && style.hasStroke()) || defaultStyle.hasStroke();
            options.weight = style.strokeWidth || defaultStyle.strokeWidth;
            options.opacity = style.opacity || defaultStyle.opacity;
            options.fillOpacity = style.fillOpacity || defaultStyle.fillOpacity;
        }

        bubble.setStyle(options);
    },
    /*
     * Renders data on tile
     * @method render
     * @param {RenderContext} renderContext Holds metadata about rendering process
     * @param {CanvasRenderingContext2D} ctx Canvas context used for drawing
     * @param {LayerData} layerData Data for particular tile
     * @param {Integer} zoom Zoom level
     */
    render: function (renderContext, ctx, layerData, zoom) {
        var featureId, val;
        // we need to sort features first
        var map = renderContext.map;

        if (!this._viewResetAttached) {
            map.getLmap().on('viewreset', function () {
                this.removeAllBubbles(map);
            }.bind(this));
            this._viewResetAttached = true;
        }
        // sort the bubbles by size
        var features = [];

        var nrRules = this._rules.length;
        var matchedStyle;

        for (var i = 0; i < layerData.features.length; i++) {
            featureId = layerData.features[i].featureId;

            var colIndex = layerData.layer.recordset.getColumnIndex(this._bubbleSizeField);
            var cenXcolIndex = layerData.layer.recordset.getColumnIndex('__CENX__');
            var cenYcolIndex = layerData.layer.recordset.getColumnIndex('__CENY__');

            val = layerData.layer.recordset.getValue(layerData.features[i].featureId, colIndex);
            var cenX = layerData.layer.recordset.getValue(layerData.features[i].featureId, cenXcolIndex);
            var cenY = layerData.layer.recordset.getValue(layerData.features[i].featureId, cenYcolIndex);

            if (val === null) {
                continue;
            }
            if (nrRules > 0) {
                // if we have any rules, try to match the rule
                matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);

                if (!matchedStyle) {
                    continue;
                }
            } else {
                matchedStyle = this._defaultBubbleStyle;
            }

            features.push({
                feature: layerData.features[i],
                value: val,
                matchedStyle: matchedStyle,
                cenX: cenX,
                cenY: cenY
            });
        }

        if (!matchedStyle) {
            return;
        }

        features.sort(function (a, b) {
            return b.value - a.value;
        });

        var scale = 24 - zoom;

        for (var j = 0; j < features.length; j++) {
            var worldX = renderContext.tile.canvas._tilePoint.x * 256;
            var worldY = renderContext.tile.canvas._tilePoint.y * 256;

            var centroid = {
                x: (features[j].cenX >> scale) - worldX,
                y: (features[j].cenY >> scale) - worldY
            };

            /*jshint camelcase: false */
            // this is leaflet property
            var bubbleCentroid = map.getLmap().layerPointToContainerPoint(renderContext.tile.canvas._leaflet_pos);
            /*jshint camelcase: true */
            featureId = features[j].feature.featureId;

            var style = features[j].matchedStyle;

            if (style) {
                bubbleCentroid.x += centroid.x;
                bubbleCentroid.y += centroid.y;

                if (!this._pointsAdded[featureId]) {
                    val = features[j].value;

                    var latLng = map.getLmap().containerPointToLatLng(bubbleCentroid);

                    if (latLng && !isNaN(latLng.lat) && !isNaN(latLng.lng)) {
                        try {
                            this._addBubble(map, featureId, latLng, val, zoom, style, layerData.layer);
                        } catch (e) {
                            console.log('error', e);
                        }

                    }
                }
            }
        }

        return renderContext;
    }
});

module.exports = BubbleRenderer;

},{"../featureEvent":"/home/senadu/projects/Renderer-Cheetah/src/featureEvent.js","./baseRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/baseRenderer.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labelRenderer.js":[function(require,module,exports){
'use strict';
/*global _typeface_js:false*/

var Util = require('../util'),
    LabelUtil = require('./labels/util'),
    Rectangle = LabelUtil.Rectangle,
    TextRenderer = require('./labels/textRenderer'),
    LabelFeature = require('./labels/labelFeature'),
    LineLabel = require('./labels/lineLabel'),
    LabelUtil = require('./labels/util'),
    isNode = Util.isNode();

var isInTile = function (x, y, margin) {
    return (x >= -margin && x <= (256 + margin)) &&
        (y >= -margin && y <= (256 + margin));
};

var wordWrap = function (str, lineWidth, ctx, face, size) {
    var lines = [];
    var words = str.split(/\s+/);
    var line = '';
    var spaceLeft = lineWidth;
    var spaceWidth = TextRenderer.measureTextWidth(' ', face, size); //ctx.measureText(' ').width;
    var maxWidthLine = 0;
    while (words.length) {
        var word = words.shift();
        var wordWidth = TextRenderer.measureTextWidth(word, face, size); //ctx.measureText(word).width;
        if (wordWidth + spaceWidth > spaceLeft) {
            if (line) {
                lines.push(line);
                maxWidthLine = Math.max(maxWidthLine, lineWidth - spaceLeft);
            }
            line = word;
            spaceLeft = lineWidth - wordWidth;
        } else {
            spaceLeft -= (wordWidth + spaceWidth);
            if (line) {
                line += ' ';
            }
            line += word;
        }
    }
    if (line) {
        lines.push(line);
        maxWidthLine = Math.max(maxWidthLine, lineWidth - spaceLeft);
    }
    return {
        lines: lines,
        maxWidth: maxWidthLine
    };
};

// When using Cairo it's slow do render text with blur so we disable it completely
function configureContextForCairo(ctx) {
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

function calculateTextPosition(ctx, text, x, y, maxLineWidthInPixels, lineHeight, icon, position, margin, face, size) {

    var wrap = wordWrap(text, maxLineWidthInPixels, ctx, face, size),
        maxWidth = wrap.maxWidth,
        height = wrap.lines.length * lineHeight,
        iw,
        ih;

    var base = {
        rect: new Rectangle(x - maxWidth / 2, y - height / 2, maxWidth, height),
        lines: wrap.lines
    };

    if (icon) {
        iw = icon.width;
        ih = icon.height;

        // right alignment is the default
        position = position || 'r';
        position = position.toLowerCase();

        switch (position) {
        case 'l':
            base.rect.x -= base.rect.w / 2;
            base.rect.x -= iw / 2;
            base.rect.w += iw;
            break;
        case 't':
            base.rect.y += -(base.rect.h / 2);
            base.rect.y -= ih / 2;
            base.rect.h += ih;
            break;
        case 'b':
            base.rect.y += base.rect.h / 2;
            base.rect.y -= ih / 2;
            base.rect.h += ih;
            break;
        default: // right
            base.rect.x += base.rect.w / 2;
            base.rect.x -= iw / 2;
            base.rect.w += iw;
        }
    }

    if (margin !== undefined) {
        LabelUtil.Rectangle.addMargin(base.rect, margin);
    }
    return base;
}

var toTitleCase = function () {
    var text = this,
        newString = '',
        prev = ' ',
        curr,
        i;

    // ED: I was in doubt whether to use string concatenation or 
    // Array.join, but it appears that string concatenation is faster.
    // Modern browers are optimized to do fast string concatenation
    for (i = 0; i < text.length; i++) {
        curr = text[i];
        if (prev === ' ') {
            newString += curr.toUpperCase();
        } else {
            newString += curr;
        }
        prev = curr;
    }

    return newString;
};

var adjustLetterCasing = function (label, style) {
    var fn;

    if (style && style.letterCasing) {
        switch (style.letterCasing.toLowerCase()) {
        case 'upper':
            fn = String.prototype.toUpperCase;
            break;
        case 'lower':
            fn = String.prototype.toLowerCase;
            break;
        case 'title':
            fn = toTitleCase;
            break;
        }
    }

    if (fn) {
        return fn.call(label);
    }

    return label;
};

function drawLabels(renderContext, ctx, layerData, zoom, defaultStyle) {
    /*jshint validthis:true */
    var tile = renderContext.tile.zoom + '.' + renderContext.tile.index;
    var featureIds = layerData.layer.recordset.getFeaturesForTile(tile);

    var tileObj = layerData.tile;

    var nrFeatures = featureIds.length;
    var nrRules = this._rules.length;

    var matchedStyle, featureId, label, i;

    this._startMeasure(renderContext);

    var features = [];
    var scale = 24 - zoom;
    var worldX = renderContext.tile.canvas._tilePoint.x * 256;
    var worldY = renderContext.tile.canvas._tilePoint.y * 256;
    var colIndex = layerData.layer.recordset.getColumnIndex(this.labelColumnName);
    var cenXcolIndex = layerData.layer.recordset.getColumnIndex('__CENX__');
    var cenYcolIndex = layerData.layer.recordset.getColumnIndex('__CENY__');

    if (this.sortByColumnName) {
        sortValueIndex = layerData.layer.recordset.getColumnIndex(this.sortByColumnName);
    }

    for (i = 0; i < nrFeatures; i += 1) {
        var sortValue, sortValueIndex;
        featureId = featureIds[i];

        label = layerData.layer.recordset.getValue(featureId, colIndex);
        if (label === null) {
            continue;
        }

        var cenX = layerData.layer.recordset.getValue(featureId, cenXcolIndex);
        var cenY = layerData.layer.recordset.getValue(featureId, cenYcolIndex);

        var x = (cenX >> scale) - worldX;
        var y = (cenY >> scale) - worldY;

        if (this.sortByColumnName) {
            sortValue = layerData.layer.recordset.getValue(featureId, sortValueIndex);
        }

        if (nrRules > 0) {
            // if we have any rules, try to match the rule
            matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);
            if (!matchedStyle) {
                continue;
            }
        } else {
            matchedStyle = defaultStyle;
        }

        features.push({
            label: label,
            sortValue: sortValue,
            matchedStyle: matchedStyle,
            x: x,
            y: y
        });
    }

    if (this.sortByColumnName) {
        var sort;
        if (this.sortByDesc) {
            sort = function (a, b) {
                return b.sortValue - a.sortValue;
            };
        } else {
            sort = function (a, b) {
                return a.sortValue - b.sortValue;
            };
        }
        features.sort(sort);
    }
    ctx.textBaseline = 'top';

    tileObj.labelCollisions.initNeighbors(tileObj.loadedTiles);

    /*jshint camelcase: false*/
    var face = _typeface_js.faces.helvetiker.bold.normal;

    // this will be used once we switch to TextRenderer instead of
    // built-in fillText
    var fontStyle = {
        font: face,
        size: 12,
        color: '#000000'
    };
    for (i = 0; i < features.length; i += 1) {
        var feature = features[i];

        ctx.save();

        feature.matchedStyle.apply(ctx);

        var maxLineWidth = feature.matchedStyle.textLineWidth || 70;

        if (isInTile(feature.x, feature.y, 0)) {

            var textPositionX, textPositionY;

            var height = parseInt(ctx.font, 10);

            textPositionX = feature.x;
            textPositionY = feature.y;

            // try to find an position that can fit
            var tg = tileObj.labelCollisions;

            // default position is 'right'
            var positionsToTry = ['r'];

            if (feature.matchedStyle.positions && feature.matchedStyle.positions.length > 0) {
                positionsToTry = feature.matchedStyle.positions.split('');
            }

            feature.label = adjustLetterCasing(feature.label, feature.matchedStyle);

            for (var k = 0; k < positionsToTry.length; k++) {

                var tempTextPos = calculateTextPosition(ctx,
                    feature.label,
                    textPositionX,
                    textPositionY,
                    maxLineWidth,
                    height,
                    feature.matchedStyle.icon,
                    positionsToTry[k],
                    feature.matchedStyle.margin,
                    face,
                    height);

                if (tg.canAddLabel(tempTextPos.rect, tileObj.loadedTiles)) {

                    feature.matchedStyle.ff = fontStyle;

                    var newLabelFeature = new LabelFeature(tempTextPos.lines, feature.matchedStyle, true);
                    newLabelFeature.position = positionsToTry[k];
                    newLabelFeature.drawIconFn = this._drawIcon.bind(this);

                    // TODO: what is the point of data=null?????
                    tempTextPos.rect.originalX = textPositionX;
                    tempTextPos.rect.originalY = textPositionY;

                    tg.addLabel(newLabelFeature, tempTextPos.rect, null);

                    break;
                }
            }
        }

        tileObj.labelCollisions.rendered = true;
        ctx.restore();
    }

    // tileObj.tileGroup.render(tileObj.loadedTiles);

    // for (i = 0; i < nrFeatures; i += 1) {
    //     var feature = layerData.features[i];
    //     featureId = feature.featureId;

    //     matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);

    //     // use default style if there is no matched style
    //     if (!matchedStyle) {
    //         matchedStyle = defaultStyle;
    //     }

    //     if (matchedStyle && feature.label.caption) {
    //         ctx.save();
    //         matchedStyle.apply(ctx);
    //         if (isNode) {
    //             configureContextForCairo(ctx);
    //         }

    //         ctx.textBaseline = 'top';
    //         var fontSize = matchedStyle.fontSize || this.DEFAULT_FONT_SIZE;

    //         var lines = feature.label.caption.split('\n');
    //         var maxWidth = 0;

    //         for (var p = 0; p < lines.length; p += 1) {
    //             var dimensions = ctx.measureText(lines[p]);
    //             if (dimensions.width > maxWidth) {
    //                 maxWidth = dimensions.width;
    //             }
    //         }

    //         var xpos, ytop;
    //         var labelRect;
    //         var lHeight = parseInt(fontSize, 10) | 1;
    //         var pointCenterX = feature.label.markerCenterX;
    //         var pointCenterY = feature.label.markerCenterY;

    //         var left, topp, right, bottom;
    //         if (layerData.layer.featureType === Enums.FeatureType.POINT_LABEL) {
    //             switch (feature.label.serverPrefferedPosition) {
    //             case 1:
    //                 {
    //                     // left of [ICON] Here goes text
    //                     ctx.textAlign = 'left';

    //                     if (matchedStyle.icon) {
    //                         xpos = pointCenterX + this.ICON_MAX_WIDTH / 2;
    //                         left = pointCenterX - this.ICON_MAX_WIDTH / 2;
    //                         right = left + maxWidth + this.ICON_MAX_WIDTH;
    //                     } else {
    //                         xpos = pointCenterX - maxWidth / 2;
    //                         left = xpos;
    //                         right = left + maxWidth;
    //                     }

    //                     ytop = pointCenterY - ((lHeight * lines.length) / 2) - 1;

    //                     topp = ytop;
    //                     bottom = topp + lHeight * lines.length;

    //                     labelRect = {
    //                         left: left,
    //                         top: topp,
    //                         right: right,
    //                         bottom: bottom
    //                     };
    //                     break;
    //                 }

    //             case 2:
    //                 {
    //                     // Here goes text [ICON]
    //                     ctx.textAlign = 'right';
    //                     if (matchedStyle.icon) {
    //                         xpos = pointCenterX - this.ICON_MAX_WIDTH / 2;
    //                         left = xpos - maxWidth;
    //                         right = left + maxWidth + this.ICON_MAX_WIDTH;
    //                     } else {
    //                         xpos = pointCenterX;
    //                         left = xpos - maxWidth;
    //                         right = left + maxWidth;
    //                     }
    //                     ytop = pointCenterY - ((lHeight * lines.length) / 2) - 1;

    //                     topp = ytop;
    //                     bottom = topp + lHeight * lines.length;
    //                     labelRect = {
    //                         left: left,
    //                         top: topp,
    //                         right: right,
    //                         bottom: bottom
    //                     };
    //                     break;
    //                 }

    //             case 3:
    //                 {
    //                     // Top:
    //                     // Here goes text
    //                     // [ICON]
    //                     xpos = pointCenterX;
    //                     ctx.textAlign = 'center';
    //                     if (matchedStyle.icon) {
    //                         ytop = pointCenterY - (lHeight * lines.length) - this.ICON_MAX_HEIGHT / 2;
    //                         topp = ytop;
    //                         bottom = ytop + (lHeight * lines.length) + this.ICON_MAX_HEIGHT + (this.ICON_MAX_HEIGHT / 2);
    //                     } else {
    //                         ytop = pointCenterY - (lHeight * lines.length);
    //                         topp = ytop;
    //                         bottom = ytop + (lHeight * lines.length);
    //                     }

    //                     left = xpos - maxWidth / 2;
    //                     right = left + maxWidth;

    //                     labelRect = {
    //                         left: left,
    //                         right: right,
    //                         top: topp,
    //                         bottom: bottom
    //                     };
    //                     break;
    //                 }
    //             default:
    //                 {
    //                     // bottom
    //                     // [ICON]
    //                     // Here goes text
    //                     xpos = pointCenterX;
    //                     ctx.textAlign = 'center';
    //                     if (matchedStyle.icon) {
    //                         ytop = pointCenterY + this.ICON_MAX_HEIGHT / 2; //((lHeight * lines.length) / 2);// + (lHeight * lines.length);
    //                         topp = ytop - this.ICON_MAX_HEIGHT;
    //                         bottom = topp + this.ICON_MAX_HEIGHT + (lHeight * lines.length);
    //                     } else {
    //                         ytop = pointCenterY - (lHeight * lines.length);
    //                         topp = ytop;
    //                         bottom = topp + (lHeight * lines.length);
    //                     }

    //                     left = xpos - maxWidth / 2;
    //                     right = left + maxWidth;

    //                     labelRect = {
    //                         left: left,
    //                         right: right,
    //                         top: topp,
    //                         bottom: bottom
    //                     };
    //                 }
    //             }
    //         } else {
    //             ctx.textAlign = 'center';
    //             xpos = pointCenterX;
    //             ytop = pointCenterY - ((lHeight * lines.length) / 2);
    //             ctx.textBaseline = 'top';

    //             labelRect = {
    //                 left: xpos - maxWidth / 2,
    //                 top: ytop,
    //                 right: xpos + maxWidth / 2,
    //                 bottom: ytop + lHeight * lines.length
    //             };

    //             if (matchedStyle.icon) {
    //                 ctx.textAlign = 'left';
    //                 xpos += matchedStyle.icon.width / 2;

    //                 labelRect = {
    //                     left: pointCenterX - (matchedStyle.icon.width / 2),
    //                     top: ytop,
    //                     right: xpos + maxWidth,
    //                     bottom: ytop + lHeight * lines.length
    //                 };
    //             }
    //         }

    //         labelRect.caption = feature.label.caption;
    //         if (!labelIntersects(layerData.tile.labelRects, labelRect)) {

    //             if (matchedStyle.hasStroke() || matchedStyle.hasFill()) {
    //                 layerData.tile.labelRects.push(labelRect);
    //                 // Draw the bounding box for debugging purposes
    //                 if (forceDebugging) {
    //                     ctx.strokeStyle = 'red';
    //                     ctx.strokeRect(labelRect.left, labelRect.top, labelRect.right - labelRect.left, labelRect.bottom - labelRect.top);
    //                 }
    //             }

    //             for (p = 0; p < lines.length; p++) {

    //                 // Draw the center point for debugging purposes
    //                 if (forceDebugging) {
    //                     if (matchedStyle.hasStroke() || matchedStyle.hasFill()) {
    //                         ctx.fillStyle = 'blue';
    //                         ctx.fillRect(pointCenterX, pointCenterY, 5, 5);
    //                     }
    //                 }

    //                 if (matchedStyle.hasStroke()) {
    //                     ctx.strokeText(lines[p], xpos, ytop);
    //                 }
    //                 if (matchedStyle.hasFill()) {
    //                     ctx.fillText(lines[p], xpos, ytop);
    //                 }
    //                 ytop += lHeight;
    //             }

    //             // TODO: fix this. what to do in case of nodejs
    //             if (matchedStyle.icon) {
    //                 if (isNode) {
    //                     if (imageCache) {
    //                         var img = imageCache[matchedStyle.icon.src];
    //                         if (img) {
    //                             this._drawIcon(ctx, pointCenterX, pointCenterY, matchedStyle, img);
    //                         }
    //                     } else {
    //                         console.log('Warning: no image cache present!');
    //                     }
    //                 } else {
    //                     this._drawIcon(ctx, pointCenterX, pointCenterY, matchedStyle, matchedStyle.icon.src);
    //                 }
    //             }
    //         }

    //         ctx.restore();
    //     }

    //     if (this._shouldStopRendering(i)) {
    //         return renderContext;
    //     }
    // }

    renderContext.stopped = false;
    return renderContext;
}

function drawLineLabels(renderContext, ctx, layerData, zoom, defaultStyle) {
    /*jshint validthis:true*/

    var nrFeatures = layerData.features.length;
    var matchedStyle;

    this._startMeasure(renderContext);
    var tileObj = layerData.tile;

    tileObj.labelCollisions.initNeighbors(tileObj.loadedTiles);

    for (var i = 0; i < nrFeatures; i += 1) {
        var feature = layerData.features[i];

        var featureId = feature.featureId;

        matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);

        // use default style if there is no matched style
        if (!matchedStyle) {
            matchedStyle = defaultStyle;
        }

        if (!matchedStyle) {
            continue;
        }

        var colIndex = layerData.layer.recordset.getColumnIndex(this.labelColumnName);
        var labelText = layerData.layer.recordset.getValue(featureId, colIndex);
        labelText = adjustLetterCasing(labelText, matchedStyle);

        ctx.save();

        matchedStyle.apply(ctx);
        if (isNode) {
            configureContextForCairo(ctx);
        }

        /*jshint camelcase: false*/
        var face = _typeface_js.faces.helvetiker.normal.normal;
        var fontStyle = {
            font: face,
            size: 12,
            color: '#FF0000'
        };

        matchedStyle.fontStyle = fontStyle;

        // for each part
        for (var k = 0; k < feature.parts.length; k++) {
            var lineSegment = feature.parts[k];
            LineLabel.placeLabelOnLineFeature(lineSegment, labelText, matchedStyle, layerData.tile.labelCollisions, ctx);
        }

        ctx.restore();

        if (this._shouldStopRendering(i)) {
            return renderContext;
        }
    }
    tileObj.labelCollisions.rendered = true;
    renderContext.stopped = false;

    return renderContext;

}

var SimpleRenderer = require('./simpleRenderer');
var Enums = require('../enums');
/**
 * Default label renderer
 *
 * @class
 */
var LabelRenderer = SimpleRenderer.extend({
    init: function (labelColumnName, sortByColumnName, sortByDesc) {
        this._super();

        Object.defineProperty(this, 'DEFAULT_FONT_SIZE', {
            value: 5,
            writable: false
        });

        this._rules = [];
        this.imageCache = undefined;
        this.forceDebugging = false;
        this.labelColumnName = labelColumnName;
        this.sortByColumnName = sortByColumnName;
        this.sortByDesc = !!sortByDesc;
        this.isLabelRenderer = true;
    },
    /**
     * Renders data on tile
     * @method render
     * @param  {RenderContext} renderContext Holds meta data about rendering process
     * @param  {CanvasRenderingContext2D} ctx Canvas context used for drawing
     * @param  {LayerData} layerData Data for particular tile
     * @param  {Integer} zoom Zoom level
     */
    render: function (renderContext, ctx, layerData, zoom) {
        var style = this.getStyle(zoom);
        switch (layerData.layer.featureType) {

        case Enums.FeatureType.LABEL:
        case Enums.FeatureType.POINT_LABEL:
        case Enums.FeatureType.POINT:
        case Enums.FeatureType.POLYGON:
            drawLabels.call(this, renderContext, ctx, layerData, zoom, style, this.imageCache, this.forceDebugging);
            break;
        case Enums.FeatureType.LINE:
            drawLineLabels.call(this, renderContext, ctx, layerData, zoom, style);
            break;
        default:
            console.log('Warning: Label feature type not recognized!');
        }

        return renderContext;
    }

});

module.exports = LabelRenderer;

},{"../enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","../util":"/home/senadu/projects/Renderer-Cheetah/src/util.js","./labels/labelFeature":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/labelFeature.js","./labels/lineLabel":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/lineLabel.js","./labels/textRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/textRenderer.js","./labels/util":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/util.js","./simpleRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/simpleRenderer.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/hitTest.js":[function(require,module,exports){
'use strict';

var HitTest = function (w, h) {

    this.w = w || 0;
    this.h = h || 0;

    this.precision = 2;

    if (h > 0 && w > 0) {
        this.w /= this.precision;
        this.h /= this.precision;
        this.w &= (-1 << 5); // round it to 32
        this.bw = this.w >>> 5;
        var totalLen = this.h * this.bw;
        this.bits32 = new Int32Array(totalLen);
    }
    //   console.log("" + totalLen );

};

HitTest.prototype = {

    insertRect: function (x, y, w, h) {

        var l = Math.floor(x / this.precision);
        var t = Math.floor(y / this.precision);
        var r = l + Math.ceil(w / this.precision);
        var b = t + Math.ceil(h / this.precision);

        // if overlaps
        if (r <= 0 || l >= this.w || b <= 0 || t > this.h) {
            return false;
        }

        var left = 0;
        var leftMask = -1;

        if (l > 0) {
            left = l >>> 5;
            leftMask <<= l - (left << 5);
        }

        var right = this.bw - 1;
        var rightMask = -1;

        if (r < this.w) {
            right = r >>> 5;
            rightMask >>>= ((right + 1) << 5) - r;
        }

        var kMin = t <= 0 ? 0 : t * this.bw;
        var kMax = b > this.h ? this.h * this.bw : b * this.bw;
        var step = this.bw;
        var tBlocks = this.bits32;

        var k;

        if (left === right) { // inside a single block

            for (k = kMin; k < kMax; k += step) {
                tBlocks[k + left] |= (leftMask & rightMask);
            }

        } else { // multiple blocks

            for (k = kMin; k < kMax; k += step) {

                tBlocks[k + left] |= leftMask;

                for (var n = left + 1; n < right; n++) {
                    tBlocks[k + n] = -1;
                }

                tBlocks[k + right] |= rightMask;
            }
        }
    },

    testRect: function (x, y, w, h) {

        var l = Math.floor(x / this.precision);
        var t = Math.floor(y / this.precision);
        var r = l + Math.ceil(w / this.precision);
        var b = t + Math.ceil(h / this.precision);

        // if overlaps
        if (r <= 0 || l >= this.w || b <= 0 || t > this.h) {
            return false;
        }

        var left = 0;
        var leftMask = -1;

        if (l > 0) {
            left = l >>> 5;
            leftMask <<= l - (left << 5);
        }

        var right = this.bw - 1;
        var rightMask = -1;

        if (r < this.w) {
            right = r >>> 5;
            rightMask >>>= ((right + 1) << 5) - r;
        }

        var kMin = t <= 0 ? 0 : t * this.bw;
        var kMax = b > this.h ? this.h * this.bw : b * this.bw;

        var tBlocks = this.bits32;
        var step = this.bw * 2;
        var k;

        if (left === right) { // inside a single block

            for (k = kMin; k < kMax; k += step) {
                if (this.bits32[k + left] & (leftMask & rightMask)) {
                    return true;
                }
            }

        } else { // multiple blocks

            for (k = kMin; k < kMax; k += step) {

                if (tBlocks[k + left] & leftMask) {
                    return true;
                }

                for (var n = left + 1; n < right; n++) {
                    if (tBlocks[k + n] & -1) {
                        return true;
                    }
                }

                if (tBlocks[k + right] & rightMask) {
                    return true;
                }
            }
        }

        return false;
    },

    draw: function (ctx, posX, posY) {
        var imageData = ctx.createImageData(this.bw * 32, this.h);
        var pos = 0;

        for (var k = 0; k < this.h; k++) {
            for (var n = 0; n < this.bw; n++) {
                // ctx.fillRect(n * 11, k * 11, 10, 10);
                // this.bits.push(0);
                var block = this.bits32[k * this.bw + n];

                for (var b = 0; b < 32; b++) {
                    if ((block >> b) & 1) {
                        imageData.data[pos++] = 255;
                        imageData.data[pos++] = 0;
                        imageData.data[pos++] = 0;
                    } else {
                        // set red, green, blue, and alpha:
                        imageData.data[pos++] = Math.abs(Math.random() * 255);
                        imageData.data[pos++] = Math.abs(Math.random() * 255);
                        imageData.data[pos++] = Math.abs(Math.random() * 255);
                    }
                    imageData.data[pos++] = 255; // opaque alpha
                }

            }
        }

        ctx.putImageData(imageData, posX, posY); // at coords posX,posY
    }
};

module.exports = HitTest;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/labelCollisions.js":[function(require,module,exports){
'use strict';

var Util = require('./util');
var Rectangle = Util.Rectangle;

var HitTest = require('./hitTest');

/**
 *
 * @param coords
 * @constructor
 */
var LabelCollisions = function (coords, ctx) {

    // new method
    this.hitTest = new HitTest(256, 256);
    this.labelsList = [];
    this.labelsRects = [];
    this.labelsAdded = 0;
    this.coords = coords;

    if (ctx !== undefined) {
        this.ctx = ctx;
    }

    this.rendered = false;
    this.tileIndex = LabelCollisions.getTileIndex(coords.x, coords.y, coords.z);
    this.neighbors = this._getNeighbors(coords);
};

/*
-------------------------------- STATIC --------------------------------
 */
LabelCollisions.width = 256;
LabelCollisions.tileRect = new Rectangle(0, 0, LabelCollisions.width, LabelCollisions.width);
LabelCollisions.neighbourRects = [];

for (var y = -LabelCollisions.width, nt = 0; y <= LabelCollisions.width; y += LabelCollisions.width) {
    for (var x = -LabelCollisions.width; x <= LabelCollisions.width; x += LabelCollisions.width) {
        if (x !== 0 || y !== 0) {
            //trace('nt x=' + (x) + ' nt y=' + (y) );
            LabelCollisions.neighbourRects[nt] = new Rectangle(x, y, LabelCollisions.width, LabelCollisions.width);
            nt++;
        }
    }
}
/**
 *
 * @param x {number}
 * @param y {number}
 * @param z {number}
 * @returns {number}
 */
LabelCollisions.getTileIndex = function getTileIndex(x, y, z) {

    var tileIndex = 0;
    for (var i = z; i > 0; i--) {
        var digit = 0;
        var mask = 1 << (i - 1);

        if ((x & mask) !== 0) {
            digit++;
        }

        if ((y & mask) !== 0) {
            digit++;
            digit++;
        }

        tileIndex += digit * Math.pow(4, i - 1);
    }
    return tileIndex;

};

/*
 -------------------------------- PROTOTYPE --------------------------------
 */
LabelCollisions.prototype = {

    setContext: function (ctx) {
        this.ctx = ctx;
    },

    /**
     * @param coords
     * @returns {Array}
     * @private
     */
    _getNeighbors: function (coords) {

        var neighbors = [];

        for (var y = coords.y - 1; y <= coords.y + 1; y++) {
            for (var x = coords.x - 1; x <= coords.x + 1; x++) {
                if (x !== coords.x || y !== coords.y) {
                    neighbors.push({
                        tileIndex: LabelCollisions.getTileIndex(x, y, coords.z),
                        coords: {
                            x: x,
                            y: y,
                            z: coords.z
                        }
                    });
                }
            }
        }

        return neighbors;
    },

    /**
     * @param loadedTiles
     * @private
     */
    initNeighbors: function (loadedTiles) {

        for (var n = 0; n < 8; n++) {
            var neighbor = this.neighbors[n];

            if (!loadedTiles[neighbor.tileIndex]) {
                loadedTiles[neighbor.tileIndex] = new LabelCollisions(neighbor.coords);
            }
            this.neighbors[n] = loadedTiles[neighbor.tileIndex];
        }
    },

    /**
     * @param ctx
     * @param points
     * @private
     */
    _drawLine: function (ctx, points) {

        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.moveTo(points[0].x, points[0].y);

        for (var t = 1; t < points.length; t++) {
            ctx.lineTo(points[t].x, points[t].y);
        }

        ctx.stroke();
    },

    /**
     * @param data {Rectangle}
     * @param loadedTiles
     * @returns {boolean}
     */
    canAddLabel: function (data) {

        //  return this.canAddLabel_OLD(data,loadedTiles);

        var rect = data;

        if (this.hitTest.testRect(data.x, data.y, data.w, data.h)) {
            return false;
        }

        if (!LabelCollisions.tileRect.contains(rect)) {

            for (var n = 0; n < LabelCollisions.neighbourRects.length; n++) {

                var ntr = LabelCollisions.neighbourRects[n];

                if (ntr.intersects(rect)) {

                    if (this.neighbors[n].hitTest.testRect(data.x - ntr.x, data.y - ntr.y, data.w, data.h)) {
                        return false;
                    }
                }
            }
        }

        return true;
    },
    /**
     * @param labelFeature
     * @param data {Rectangle}
     * @param loadedTiles
     * @returns {boolean}
     */
    addLabel: function (labelFeature, rect, data) {

        //  return this.addLabel_OLD(labelFeature, rect, data, loadedTiles);

        // var rect = data;//new Rectangle(data.x, data.y, data.w, data.h);
        //  var newLabelFeature = new LabelFeature("caption");
        var leafData = {
            feature: labelFeature,
            data: data
        };

        //  this.hitTest.insert(rect, leafData);
        if (LabelCollisions.tileRect.intersects(rect)) {
            this.labelsAdded++;
            this.hitTest.insertRect(rect.x, rect.y, rect.w, rect.h);
            this.labelsList.push(leafData);

            this.labelsRects.push(rect.clone());
        }

        if (!LabelCollisions.tileRect.contains(rect)) {

            // draw on rendered neighbors
            for (var n = 0; n < 8; n++) {

                var ntr = LabelCollisions.neighbourRects[n];

                if (ntr.intersects(rect)) {

                    var nTg = this.neighbors[n];
                    var nRect = new Rectangle(rect.x - ntr.x, rect.y - ntr.y, rect.w, rect.h);

                    nRect.originalX = rect.originalX - ntr.x;
                    nRect.originalY = rect.originalY - ntr.y;

                    nTg.hitTest.insertRect(rect.x - ntr.x, rect.y - ntr.y, rect.w, rect.h);
                    nTg.labelsList.push(leafData);
                    nTg.labelsRects.push(nRect);

                    if (nTg.rendered) {
                        labelFeature.draw(nTg.ctx, nRect, data);
                    }
                }
            }
        }
    },
    /**
     * @param node
     * @param level
     * @private
     */
    drawLabels: function () {
        {
            //return this._drawLabels_OLD(node, level);
            var numOfLabels = this.labelsList.length;

            for (var l = 0; l < numOfLabels; l++) {
                this.labelsList[l].feature.draw(this.ctx, this.labelsRects[l], this.labelsList[l].data);
            }
        }
    }
};

module.exports = LabelCollisions;

},{"./hitTest":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/hitTest.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/labelFeature.js":[function(require,module,exports){
'use strict';

var TextRenderer = require('./textRenderer'),
    Util = require('./util');

var LabelFeature = function (text, style, isPlainLabel) {
    this.text = text;
    this.isPlainLabel = isPlainLabel;
    this.style = style;
};

LabelFeature.prototype = {
    /**
     * Draws a label feature onto a canvas
     * @param ctx {CanvasRenderingContext2D}
     * @param data {Rectangle}
     */
    draw: function (ctx, rect, data) {
        var margin,
            posX,
            posY,
            fontSize,
            i,
            iw,
            ih;

        if (this.isPlainLabel) {
            if (this.position) {
                this.position = this.position.toLowerCase();
            }

            ctx.save();
            ctx.fillStyle = this.labelColor;

            if (this.style) {
                this.style.apply(ctx);
            }

            if (this.style.margin !== undefined) {
                margin = parseInt(this.style.margin, 10);
                Util.Rectangle.removeMargin(rect, margin);
            }

            posX = rect.x;
            posY = rect.y;

            if (this.style.icon) {
                iw = this.style.icon.width || 0;
                ih = this.style.icon.height || 0;
            }

            fontSize = parseInt(ctx.font, 10);

            if (this.style.hasFill()) {

                if (this.style.icon) {

                    if (ctx.textAlign === 'center') {
                        posX += rect.w / 2;

                        if (this.position === 'r') {
                            posX += iw / 2;
                        } else if (this.position === 'l') {
                            posX -= iw / 2;
                        }
                    } else if (ctx.textAlign === 'left') {
                        if (this.position === 'r') {
                            posX += iw;
                        }
                    } else if (ctx.textAlign === 'right') {
                        console.log('test');
                        posX += rect.w;
                        if (this.position === 'l') {
                            posX -= iw;
                        }
                    }
                } else {
                    if (ctx.textAlign === 'center') {
                        posX += rect.w / 2;
                    } else if (ctx.textAlign === 'right') {
                        posX += rect.w;
                    }
                }

                if (this.position === 'b') {
                    posY += ih;
                }

                // draw each line
                for (i = 0; i < this.text.length; i++) {
                    //ctx.fillText(this.text[i], posX, posY);
                    TextRenderer.renderText(ctx, this.text[i], this.style.ff.font, fontSize, posX, posY);
                    posY += fontSize;
                }

                if (this.style.icon && this.drawIconFn) {
                    this.drawIconFn(ctx, rect.originalX, rect.originalY, this.style);
                }

                if (this.style.dbgOutline) {
                    // do this with a setTimeout because we want to draw over the image
                    // which will be placed on rect.original[XY]
                    setTimeout(function () {
                        ctx.save();
                        ctx.fillStyle = 'green';
                        ctx.fillRect(rect.originalX - 2, rect.originalY - 2, 4, 4);
                        ctx.restore();
                    }, 1000);

                    ctx.save();
                    ctx.strokeStyle = 'red';
                    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
                    ctx.restore();

                    ctx.save();
                    ctx.strokeStyle = 'blue';
                    ctx.strokeRect(posX - 2, posY - 2, 4, 4);
                    ctx.restore();

                }
            }

            ctx.restore();
        } else {

            if (this.style) {
                this.style.apply(ctx);
            }

            TextRenderer.renderLetter(ctx,
                data.letter,
                this.style.fontStyle.font,
                this.style.fontStyle.size,
                rect.x + rect.w / 2,
                rect.y + rect.h / 2,
                data.angle);
        }
    }
};

module.exports = LabelFeature;

},{"./textRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/textRenderer.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/lineLabel.js":[function(require,module,exports){
'use strict';

var Util = require('./util');
var LabelFeature = require('./labelFeature');
var Rectangle = Util.Rectangle;
var TextRenderer = require('./textRenderer');

module.exports.placeLabelOnLineFeature = function (lineSegment, caption, style, tileGroup, context) {

    var textWidth = TextRenderer.measureTextWidth(caption, style.fontStyle.font, style.fontStyle.size);

    if (Util.estimateLineLength(lineSegment) < textWidth) {
        return;
    }

    var unitWidth = 20;
    var Ax, Ay, Bx, By, Mx, My, Cx = lineSegment[0],
        Cy = lineSegment[1];
    var orient, Px = -1000,
        Py = -1000;
    var numOfPoints = lineSegment.length;
    var data = null;
    var curPlacement = null;
    var intPt = new Util.Point(0, 0);
    var sharpAngle = unitWidth * 1.7;
    var lastN = 0;
    var minUnitWidth = textWidth / unitWidth;

    for (var n = 0; n < numOfPoints - 1; n += 2) {
        Ax = lineSegment[n];
        Ay = lineSegment[n + 1];
        Bx = lineSegment[n + 2];
        By = lineSegment[n + 3];

        while (Util.segmentCircleIntersection(Cx, Cy, unitWidth, Ax, Ay, Bx, By, intPt)) {
            Ax = intPt.x;
            Ay = intPt.y;
            Mx = (Cx + Ax) / 2;
            My = (Cy + Ay) / 2;
            data = new Rectangle(Mx - unitWidth / 2, My - unitWidth / 2, unitWidth, unitWidth);

            if (Util.lineLength(Px, Py, Ax, Ay) > sharpAngle && tileGroup.canAddLabel(data)) {

                if (curPlacement === null) {
                    curPlacement = new Placement(lastN, Cx, Cy, 1);
                } else {
                    curPlacement.length++;
                }
            } else {
                if (curPlacement !== null) {
                    if (curPlacement.length >= minUnitWidth) {
                        orient = curPlacement.x < Cx ? 1 : -1;
                        placeLabelOnLineSegment(lineSegment, caption, textWidth, style, tileGroup, context, curPlacement, orient);
                    }
                    curPlacement = null;
                }
            }

            lastN = n;
            Px = Cx;
            Py = Cy;
            Cx = Ax;
            Cy = Ay;
        }
    }

    // last part
    if (curPlacement !== null) {
        //  placements.push(curPlacement);
        if (curPlacement.length >= minUnitWidth) {
            orient = curPlacement.x < Cx ? 1 : -1;
            placeLabelOnLineSegment(lineSegment, caption, textWidth, style, tileGroup, context, curPlacement, orient);
        }
    }

    // extraLen;
    /*
     //    Mx = (Bx + Ax) / 2;
     //    My = (By + Ay) / 2;

     data = new Rectangle(Math.min(Ax, Bx), Math.min(Ay, By), Math.abs(Ax-Bx), Math.abs(Ay-By));
     return tileGroup.canAddLabel(data, loadedTiles);*/
};

var placeLabelOnLineSegment = function (lineSegment, caption, textWidth, style, tileGroup, context, curPlacement, orient) {

    var unitWidth = 20;

    var newLabelFeature = new LabelFeature(caption, style);
    var Ax, Ay, Bx, By, Mx, My, Cx = curPlacement.x,
        Cy = curPlacement.y;
    var numOfPoints = lineSegment.length;
    var rect;

    var placed = 0;
    var intPt = new Util.Point(0, 0);
    var padding = (curPlacement.length * unitWidth - textWidth) / unitWidth / 2;
    var radius = unitWidth;

    if (padding < 1) {
        radius *= padding;
    }

    for (var n = curPlacement.pos; n < numOfPoints - 1; n += 2) {

        Ax = (n === curPlacement.pos) ? curPlacement.x : lineSegment[n];
        Ay = (n === curPlacement.pos) ? curPlacement.y : lineSegment[n + 1];
        Bx = lineSegment[n + 2];
        By = lineSegment[n + 3];

        while (Util.segmentCircleIntersection(Cx, Cy, radius, Ax, Ay, Bx, By, intPt)) {
            Ax = intPt.x;
            Ay = intPt.y;

            if (--padding < 1) {

                var letter = caption.charAt(orient === 1 ? placed : caption.length - placed - 1);
                radius = TextRenderer.measureTextWidth(letter, style.fontStyle.font, style.fontStyle.size);

                placed++;

                if (placed === 1) // first letter
                {
                    Cx = Ax;
                    Cy = Ay;
                    continue;
                }

                letter = caption.charAt(orient === 1 ? placed - 2 : caption.length - placed + 1);

                if (placed > (caption.length + 1)) { //curPlacement.length)
                    return;
                }

                Mx = (Cx + Ax) / 2;
                My = (Cy + Ay) / 2;

                rect = new Rectangle(Mx - unitWidth / 2, My - unitWidth / 2, unitWidth, unitWidth);

                var angleRad = Math.atan2(orient * (Ay - Cy), orient * (Ax - Cx));

                var data = {
                    letter: letter,
                    angle: angleRad
                };

                tileGroup.addLabel(newLabelFeature, rect, data);
                //   newLabelFeature.draw(context, rect, data); // ?????????????????????????????

            }

            Cx = Ax;
            Cy = Ay;
        }
    }
};

var Placement = function (pos, x, y, length) {

    this.pos = pos || 0;
    this.x = x || 0;
    this.y = y || 0;
    this.length = length || 0;
};

},{"./labelFeature":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/labelFeature.js","./textRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/textRenderer.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/textRenderer.js":[function(require,module,exports){
'use strict';

var TextRenderer = function () {};

/**
 * @param ctx {CanvasRenderingContext2D}
 * @param text {string}
 * @param face {string}
 * @param size {Number}
 */
TextRenderer.renderText = function (ctx, text, face, size, posx, posy) {
    ctx.save();
    ctx.translate(posx, posy);

    var textWidth = 0,
        hOffset = 0,
        vOffset = 0;

    switch (ctx.textAlign) {
        // case "left":// Default.
        // case "start":// Default.

    case 'center':
        textWidth = TextRenderer.measureTextWidth(text, face, size);
        hOffset = -textWidth / 2;
        break;

    case 'right':
    case 'end':
        textWidth = TextRenderer.measureTextWidth(text, face, size);
        hOffset = -textWidth;
        break;
    }

    switch (ctx.textBaseline) {
        // case "alphabetic":  break; // Default.
        //  case "ideographic": break;// Default.

    case 'top':
        vOffset = face.lineHeight + face.descender;
        break;
    case 'hanging':
        vOffset = face.ascender;
        break;
    case 'middle':
        vOffset = (face.ascender / 2);
        break;
    case 'bottom':
        vOffset = face.descender;
        break;
    }

    var sizePix = TextRenderer.pixelsFromPoints(face, size);
    ctx.translate(hOffset, vOffset * sizePix);
    ctx.scale(sizePix, -sizePix);

    var charsLength = text.length;

    ctx.beginPath();

    for (var i = 0; i < charsLength; i++) {
        var glyph = face.glyphs[text.charAt(i)] || face.glyphs['?'];
        fastRenderGlyph(ctx, glyph);
        ctx.translate(glyph.ha, 0);
    }

    ctx.fill();
    ctx.restore();
};

TextRenderer.measureTextWidth = function (text, face, size) {
    var charsLength = text.length;
    var textWidth = 0;

    for (var i = 0; i < charsLength; i++) {
        var glyph = face.glyphs[text.charAt(i)] || face.glyphs['?'];
        textWidth += glyph ? glyph.ha : 0;
    }

    return textWidth * TextRenderer.pixelsFromPoints(face, size);
};

TextRenderer.renderLetter = function (ctx, letter, face, size, posx, posy, angle) {
    ctx.save();
    ctx.translate(posx, posy);
    ctx.rotate(angle);
    var sizePix = TextRenderer.pixelsFromPoints(face, size);
    ctx.scale(sizePix, -sizePix);
    ctx.beginPath();
    var glyph = face.glyphs[letter] || face.glyphs['?'];
    ctx.translate(-glyph.ha / 2, face.descender);
    fastRenderGlyph(ctx, glyph);
    ctx.fill();
    ctx.restore();
};

TextRenderer.pixelsFromPoints = function (face, fontSize) {
    return fontSize * 72 / (face.resolution * 100);
};

function convertToFastPath(outline) {
    var len = outline.length;

    var fastPath = new Int16Array(len);

    for (var n = 0; n < len; n++) {
        var action = outline[n];

        switch (action) {
        case 'm':
            fastPath[n] = 1;
            break;
        case 'l':
            fastPath[n] = 2;
            break;
        case 'q':
            fastPath[n] = 3;
            break;
        case 'b':
            fastPath[n] = 4;
            break;
        default:
            fastPath[n] = parseInt(action, 10);
        }
    }

    return fastPath;
}

function fastRenderGlyph(ctx, glyph) {

    if (glyph && glyph.o) {

        var outline;
        /*jshint camelcase:false*/
        if (glyph.cached_outline) {
            outline = glyph.cached_outline;
        } else {
            outline = convertToFastPath(glyph.o.split(' ')); //glyph.o.split(' ');
            glyph.cached_outline = outline;
        }

        var outlineLength = outline.length;

        for (var i = 0; i < outlineLength;) {

            var action = outline[i++];

            switch (action) {
            case 1:
                ctx.moveTo(outline[i++], outline[i++]);
                break;
            case 2:
                ctx.lineTo(outline[i++], outline[i++]);
                break;

            case 3:
                var cpx = outline[i++];
                var cpy = outline[i++];
                ctx.quadraticCurveTo(outline[i++], outline[i++], cpx, cpy);
                break;

            case 4:
                var x = outline[i++];
                var y = outline[i++];
                ctx.bezierCurveTo(outline[i++], outline[i++], outline[i++], outline[i++], x, y);
                break;
            }
        }
    }
}

module.exports = TextRenderer;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/labels/util.js":[function(require,module,exports){
'use strict';

var Util = {};

Util.Point = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Util.Rectangle = function (x, y, w, h) {

    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 0;
    this.h = h || 0;

    this.originalX = 0;
    this.originalY = 0;

    this.intersects = function (R) {
        return !(this.x > R.x + R.w ||
            this.x + this.w < R.x ||
            this.y > R.y + R.h ||
            this.y + this.h < R.y);
    };

    this.contains = function (R) {
        return (this.x <= R.x &&
            this.y <= R.y &&
            this.x + this.w >= R.x + R.w &&
            this.y + this.h >= R.y + R.h);
    };

    this.clone = function () {
        var newRect = new Util.Rectangle(this.x, this.y, this.w, this.h);
        newRect.originalX = this.originalX;
        newRect.originalY = this.originalY;
        return newRect;
    };
};

Util.Rectangle.addMargin = function (rect, margin) {
    if (margin !== undefined) {
        rect.x -= margin;
        rect.y -= margin;
        rect.w += margin * 2;
        rect.h += margin * 2;
    }
};

Util.Rectangle.removeMargin = function (rect, margin) {
    if (margin !== undefined) {
        rect.x += margin;
        rect.y += margin;
        rect.w -= margin * 2;
        rect.h -= margin * 2;
    }
};

Util.lineLength = function (x, y, x0, y0) {

    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
};

Util.estimateLineLength = function (line) {
    var len = line.length;

    if (len >= 4) {
        var hl = Math.floor(len / 4) * 2;

        return Util.lineLength(line[0], line[1], line[hl], line[hl + 1]) +
            Util.lineLength(line[hl], line[hl + 1], line[len - 2], line[len - 1]);
    }

    return 0;
};

Util.segmentCircleIntersection = function (cx, cy, radius, x1, y1, x2, y2, ipt) {
    var t;
    var dx = x2 - x1;
    var dy = y2 - y1;
    var A = dx * dx + dy * dy;
    var B = 2 * (dx * (x1 - cx) + dy * (y1 - cy));
    var C = (x1 - cx) * (x1 - cx) + (y1 - cy) * (y1 - cy) - radius * radius;
    var det = B * B - 4 * A * C;

    if ((A <= 0.0000001) || (det < 0)) // no real solutions.
    {
        return false;
    } else if (det === 0) // one solution.
    {
        t = -B / (2 * A);
        ipt.x = x1 + t * dx;
        ipt.y = y1 + t * dy;

        return this.isPointBetween(x1, y1, x2, y2, ipt.x, ipt.y);

    } else { // two solutions.

        var sqrtDet = Math.sqrt(det);

        t = (-B + sqrtDet) / (2 * A);
        ipt.x = x1 + t * dx;
        ipt.y = y1 + t * dy;

        if (this.isPointBetween(x1, y1, x2, y2, ipt.x, ipt.y)) {
            return true;
        }

        t = (-B - sqrtDet) / (2 * A);
        ipt.x = x1 + t * dx;
        ipt.y = y1 + t * dy;

        return this.isPointBetween(x1, y1, x2, y2, ipt.x, ipt.y);

    }
};

Util.isPointBetween = function (ax, ay, bx, by, cx, cy) {
    return cx >= Math.min(ax, bx) && cx <= Math.max(ax, bx) &&

        cy >= Math.min(ay, by) && cy <= Math.max(ay, by);
};

Util.drawRectFromCenter = function (context, centerX, centerY, radius) {
    context.beginPath();
    //   context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.strokeRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
    context.fillStyle = 'green';
    // context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';

    context.stroke();
};

Util.drawCircle = function (context, centerX, centerY, radius) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //    context.fillStyle = 'green';
    context.fill();
    //  context.lineWidth = 1;
    //   context.strokeStyle = '#003300';
    context.stroke();
};

module.exports = Util;

},{}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/simpleRenderer.js":[function(require,module,exports){
'use strict';

var Enums = require('../enums');
/**
 * Draws point layer with specified style
 * If style includes icon object, it will load image and display icon
 * Max size of icon is ICON_MAX_WIDTHxICON_MAX_HEIGHT. If icon is bigger it will be croped.
 * Sprite can be provided as icon. In that case x, y coordinates
 * will locate position of icon in sprite.
 * Width and height can be specified to indicate size to crop.
 */
function drawPoint(renderContext, ctx, layerData, style) {
    /*jshint validthis:true */
    // if there is no style specified, there is nothing to draw actually
    if (!style.hasStroke() && !style.hasStrokeFill() && !style.hasFill() && !style.icon) {
        return;
    }

    this._startMeasure(renderContext);

    var radius, icon;

    style.apply(ctx);

    var imageSrc = style.icon && style.icon.src;

    if (imageSrc) {
        // draw image from src
        icon = new Image();
        icon.src = imageSrc;
    } else {
        // draw simple crcle
        radius = Math.max(style.radius || this.DEFAULT_RADIUS, 0);
        radius = Math.min(radius, this.ICON_MAX_WIDTH / 2);
    }

    var nrFeatures = layerData.features.length;

    for (var j = renderContext.featureIndex; j < nrFeatures; j++) {
        var parts = layerData.features[j].parts;
        if (imageSrc) {
            this._drawIcon(ctx, parts[0], parts[1], style, icon);
        } else {
            this._drawCircle(ctx, parts[0], parts[1], radius, style);
        }

        if (this._shouldStopRendering(j)) {
            return renderContext;
        }
    }

    renderContext.stopped = false;
    return renderContext;
}

/**
 * Draws line layer with specified style.
 */
function drawLines(renderContext, ctx, layerData, style) {
    /*jshint validthis:true */

    // check if there is actually anything to draw
    if (!style.hasStroke() && !style.hasStrokeFill()) {
        return;
    }

    style.apply(ctx);

    this._startMeasure(renderContext);

    var draw = function () {
        if (renderContext.featureIndex === 0) {
            ctx.beginPath();
        }

        var hasStrokeFill = style.hasStrokeFill();

        // for every feature in the layerData
        for (var j = renderContext.featureIndex; j < layerData.features.length; j++) {

            // for every part in the feature
            var nrParts = layerData.features[j].parts.length;
            for (var k = 0; k < nrParts; k++) {
                var part = layerData.features[j].parts[k];

                var partLen = part.length;
                // part length is too mall
                if (partLen <= 1) {
                    continue;
                }

                var p = 0;
                ctx.moveTo(part[p], part[p + 1]);
                var cnt = 0;
                while (p < partLen - 1) {
                    ctx.lineTo(part[p], part[p + 1]);
                    p += 2;
                    if (!hasStrokeFill) {
                        renderContext.pointsRendered += 1;
                    } else if (hasStrokeFill && cnt % 2 === 0) {
                        renderContext.pointsRendered += 1;
                    }
                    cnt += 1;
                }
            }

            if (this._shouldStopRendering(j)) {
                return renderContext;
            }
        }
        ctx.stroke();
    };

    if (draw.call(this)) {
        return renderContext;
    }

    // if this style has stroke fill defined as well, we need to draw another line, basically
    // do the same as above
    if (style.hasStrokeFill()) {
        style.applyStrokeFill(ctx);
        draw.call(this);
    }

    return renderContext;
}

/**
 * Draws a polygon layer with specified style
 */
function drawPolygons(renderContext, ctx, layerData, style) {
    /*jshint validthis:true */

    // if there is no style specified, there is nothing to draw actually
    if (!style.hasStroke() && !style.hasStrokeFill() && !style.hasFill()) {
        return;
    }

    // for every feature in the layerData
    var nrFeatures = layerData.features.length;

    style.apply(ctx);

    this._startMeasure(renderContext);

    for (var j = renderContext.featureIndex; j < nrFeatures; j++) {

        // for every part in the feature
        var nrParts = layerData.features[j].parts.length;
        ctx.beginPath();

        for (var k = 0; k < nrParts; k++) {
            var part = layerData.features[j].parts[k];

            // part length is too mall
            if (part.length <= 1) {
                continue;
            }

            var p = 0;
            ctx.moveTo(part[p], part[p + 1]);
            while (p < part.length - 1) {
                ctx.lineTo(part[p], part[p + 1]);
                p += 2;

                renderContext.pointsRendered += 1;
            }

        }

        ctx.closePath();

        // fill it only if style has fill defined
        if (style.hasFill()) {
            ctx.fill();
        }

        // in case we have solid stroke just apply it right now
        if (style.hasStroke() && !style.hasStrokeFill()) {
            ctx.stroke();
        }
        if (this._shouldStopRendering(j)) {
            return renderContext;
        }
    }

    if (style.hasStrokeFill()) {
        drawLines.call(this, renderContext, ctx, layerData, style);
    }

    renderContext.stopped = false;
    return renderContext;
}

var BaseRenderer = require('./baseRenderer');

var SimpleRenderer = BaseRenderer.extend({
    _styles: undefined,
    _fields: undefined,
    init: function (fields) {
        // call constructor of base class
        this._super();

        Object.defineProperty(this, 'DEFAULT_RADIUS', {
            value: 5,
            writable: false
        });

        this._styles = [];
        if (fields) {
            this._fields = fields;
        } else {
            this._fields = [];
        }
    },
    /**
     * Adds a style
     *
     * @method addStyle
     * @param {Style} style Style to add to style list
     */
    addStyle: function (style) {
        this._styles.push(style);
    },
    /**
     * Retrieves a style that will be used for a specified zoom level
     *
     * @method getStyle
     * @param {Integer} zoom Zoom level
     */
    getStyle: function (zoom) {
        for (var i = 0; i < this._styles.length; i++) {
            if (this._styles[i].zoomMin <= zoom && this._styles[i].zoomMax >= zoom) {
                return this._styles[i];
            }
        }
    },
    /**
     * Renders data on tile
     * @method render
     * @param  {RenderContext} renderContext Holds meta data about rendering process
     * @param  {CanvasRenderingContext2D} ctx Canvas context used for drawing
     * @param  {LayerData} layerData Data for particular tile
     * @param  {Integer} zoom Zoom level
     */
    render: function (renderContext, ctx, layerData, zoom) {
        var style = this.getStyle(zoom);
        if (style) {
            switch (layerData.layer.featureType) {
            case Enums.FeatureType.POLYGON:
                return drawPolygons.call(this, renderContext, ctx, layerData, style);
            case Enums.FeatureType.LINE:
                return drawLines.call(this, renderContext, ctx, layerData, style);
            case Enums.FeatureType.POINT:
                return drawPoint.call(this, renderContext, ctx, layerData, style);
            default:
                console.log('Warning: Layer feature not recognized!');
            }
        }
    }
});

module.exports = SimpleRenderer;

},{"../enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","./baseRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/baseRenderer.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderer/valueRenderer.js":[function(require,module,exports){
'use strict';

function drawPoint(renderContext, ctx, layerData, zoom) {
    /*jshint validthis:true */
    this._startMeasure(renderContext);

    // for every feature in the layerData
    var nrFeatures = layerData.features.length;

    // draw feature by feature
    for (var j = renderContext.featureIndex; j < nrFeatures; j += 1) {
        var featureId = layerData.features[j].featureId;

        // get style from matched rule
        var matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);

        // no style, just skip
        if (!matchedStyle) {
            continue;
        }

        // nothing to draw, skip this feature
        if (!matchedStyle.hasStroke() && !matchedStyle.hasStrokeFill() && !matchedStyle.hasFill() && !matchedStyle.icon) {
            continue;
        }

        var parts = layerData.features[j].parts;

        var imageSrc = matchedStyle.icon && matchedStyle.icon.src;

        // apply matched style on canvas
        matchedStyle.apply(ctx);

        if (imageSrc) {
            // draw image from src
            var icon = new Image();
            icon.src = imageSrc;
            this._drawIcon(ctx, parts[0], parts[1], matchedStyle, icon);
        } else {
            // draw simple crcle
            var radius = Math.max(matchedStyle.radius || this.DEFAULT_RADIUS, 0);
            radius = Math.min(radius, this.ICON_MAX_WIDTH / 2);

            this._drawCircle(ctx, parts[0], parts[1], radius, matchedStyle);
        }

        if (this._shouldStopRendering(j)) {
            return renderContext;
        }
    }

    renderContext.stopped = false;
    return renderContext;
}

/**
 * Draws a line layer with specified style based on values
 */
function drawLine(renderContext, ctx, layerData, zoom) {
    var j;
    /*jshint validthis:true */
    this._startMeasure(renderContext);

    // basically we need to group features by style
    var styleGroups = {};
    if (renderContext.featureIndex !== 0) {
        if (renderContext.groups === undefined) {
            console.log('Warning: continuing from groups but renderContext.groups is undefined! This is probably a bug!');
        }
        styleGroups = renderContext.groups;
        renderContext.groups = undefined;
    } else {
        for (j = 0; j < layerData.features.length; j++) {

            var featureId = layerData.features[j].featureId;

            // figure out style based on rules
            var matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);

            // no style, just skip
            if (!matchedStyle) {
                continue;
            }

            // nothing to draw, skip this feature
            if (!matchedStyle.hasStroke() && !matchedStyle.hasStrokeFill()) {
                continue;
            }

            if (!styleGroups[matchedStyle.id]) {
                styleGroups[matchedStyle.id] = {
                    style: matchedStyle,
                    features: []
                };
            }

            // push this feature to this group
            styleGroups[matchedStyle.id].style = matchedStyle;
            styleGroups[matchedStyle.id].features.push(layerData.features[j]);
        }

    }

    var allKeys = Object.keys(styleGroups);

    var start = renderContext.currentGroup || 0;

    for (var key = start; key < allKeys.length; key++) {

        var group = styleGroups[allKeys[key]];

        group.style.apply(ctx);

        if (renderContext.featureIndex === 0) {
            ctx.beginPath();
        }

        var pointsRendered;
        if (!renderContext.stage || renderContext.stage === 1) {
            for (j = renderContext.featureIndex; j < group.features.length; j++) {
                pointsRendered = this._drawLineForParts(ctx, group.features[j].parts);
                renderContext.pointsRendered += pointsRendered;

                if (this._shouldStopRendering(j)) {
                    renderContext.groups = styleGroups;
                    renderContext.stage = 1;
                    renderContext.currentGroup = key;
                    return renderContext;
                }
            }
        }
        ctx.stroke();

        if (group.style.hasStrokeFill()) {
            group.style.applyStrokeFill(ctx);
            if (renderContext.featureIndex === 0) {
                ctx.beginPath();
            }

            if (!renderContext.stage || renderContext.stage === 2) {
                for (j = renderContext.featureIndex; j < group.features.length; j++) {
                    pointsRendered = this._drawLineForParts(ctx, group.features[j].parts);
                    renderContext.pointsRendered += pointsRendered;

                    if (this._shouldStopRendering(j)) {
                        renderContext.groups = styleGroups;
                        renderContext.currentGroup = key;
                        renderContext.stage = 2;
                        return renderContext;
                    }
                }
            }
            ctx.stroke();

        }

        renderContext.stage = undefined;
        renderContext.groups = undefined;
        renderContext.stopped = false;
        renderContext.currentGroup = undefined;
        renderContext.featureIndex = 0;
    }

    renderContext.stage = undefined;
    renderContext.groups = undefined;
    renderContext.stopped = false;
    renderContext.currentGroup = undefined;

    return renderContext;
}

/**
 * Draws a polygon layer based on values
 */
function drawPolygons(renderContext, ctx, layerData, zoom) {
    var j;
    /*jshint validthis:true */
    this._startMeasure(renderContext);

    // we need to group features by style
    var styleGroups = {};
    if (renderContext.featureIndex !== 0) {
        // groups are already sorted
        //console.log('continuing!', renderContext.featureIndex, 'stage', renderContext.stage, 'currentGroup', renderContext.currentGroup);
        if (renderContext.groups === undefined) {
            console.log('Warning: continuing from groups but renderContext.groups is undefined! This is probably a bug!');
        }

        styleGroups = renderContext.groups;
        //renderContext.groups = undefined;
    } else {
        for (j = 0; j < layerData.features.length; j++) {

            var featureId = layerData.features[j].featureId;

            // figure out style based on rules
            var matchedStyle = this.getStyleFromRules(featureId, layerData, zoom);

            // no style, just skip
            if (!matchedStyle) {
                continue;
            }

            // nothing to draw, skip this feature
            if (!matchedStyle.hasFill() && !matchedStyle.hasStroke() && !matchedStyle.hasStrokeFill()) {
                continue;
            }

            if (!styleGroups[matchedStyle.id]) {
                styleGroups[matchedStyle.id] = {
                    style: matchedStyle,
                    features: []
                };
            }

            // push this feature to this group
            styleGroups[matchedStyle.id].style = matchedStyle;
            styleGroups[matchedStyle.id].features.push(layerData.features[j]);
        }
    }

    // now we have style groups
    var allKeys = Object.keys(styleGroups);

    var start = renderContext.currentGroup || 0;

    for (var key = start; key < allKeys.length; key++) {
        var pointsRendered;
        var group = styleGroups[allKeys[key]];

        var doStroke = false;
        group.style.apply(ctx);

        var fi = renderContext.featureIndex;

        if (fi === 0) {
            ctx.beginPath();
        }

        if (!renderContext.stage || renderContext.stage === 1) {
            // IMPORTANT: there is a problem with canvas when polygons share a side. there is a small gap in between
            // so if there is no stroke defined, we'll define one to fill that gap
            if (!group.style.stroke) {
                ctx.strokeStyle = group.style.fill;
                ctx.lineWidth = 1.5;
                doStroke = true;
            }
            for (j = fi; j < group.features.length; j++) {
                pointsRendered = this._drawLineForParts(ctx, group.features[j].parts);
                renderContext.pointsRendered += pointsRendered;

                if (this._shouldStopRendering(j)) {
                    renderContext.groups = styleGroups;
                    renderContext.stage = 1;
                    renderContext.currentGroup = key;
                    return renderContext;
                }
            }
        }
        // fill it only if style has fill defined
        if (group.style.hasFill()) {
            ctx.fill();
        }

        if (doStroke || group.style.hasStroke() && !group.style.hasStrokeFill()) {
            ctx.stroke();
        } else if (group.style.hasStrokeFill()) {
            // first do the stroke
            ctx.stroke();

            // and then draw the stroke fill
            group.style.applyStrokeFill(ctx);

            // basically checking if continued
            if (!renderContext.stage) {
                renderContext.featureIndex = 0;
            }
            fi = renderContext.featureIndex;

            if (fi === 0) {
                ctx.beginPath();
            }

            if (!renderContext.stage || renderContext.stage === 2) {
                for (j = fi; j < group.features.length; j++) {
                    pointsRendered = this._drawLineForParts(ctx, group.features[j].parts);
                    renderContext.pointsRendered += pointsRendered;

                    if (this._shouldStopRendering(j)) {
                        renderContext.groups = styleGroups;
                        renderContext.currentGroup = key;
                        renderContext.stage = 2;
                        return renderContext;
                    }
                }
            }

            ctx.stroke();
        }

        renderContext.stage = undefined;
        renderContext.groups = undefined;
        renderContext.stopped = false;
        renderContext.currentGroup = undefined;
        renderContext.featureIndex = 0;
    }

    renderContext.stage = undefined;
    renderContext.groups = undefined;
    renderContext.stopped = false;
    renderContext.currentGroup = undefined;
    return renderContext;
}

var BaseRenderer = require('./baseRenderer');
var Enums = require('../enums');

var ValueRenderer = BaseRenderer.extend({
    init: function () {
        this._super();
        this._rules = [];
    },
    /**
     * Renders data on tile
     * @method _render
     * @param  {RenderContext} renderContext Holds meta data about rendering process
     * @param  {CanvasRenderingContext2D} ctx Canvas context used for drawing
     * @param  {LayerData} layerData Data for particular tile
     * @param  {Integer} zoom Zoom level
     */
    render: function (renderContext, ctx, layerData, zoom) {
        // figure out which style to use to render this stuff
        switch (layerData.layer.featureType) {
        case Enums.FeatureType.POLYGON:
            return drawPolygons.call(this, renderContext, ctx, layerData, zoom);
        case Enums.FeatureType.LINE:
            return drawLine.call(this, renderContext, ctx, layerData, zoom);
        case Enums.FeatureType.POINT:
            return drawPoint.call(this, renderContext, ctx, layerData, zoom);
        default:
            console.log('Warning: Label feature type not recognized!');
        }
    }
});

module.exports = ValueRenderer;

},{"../enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","./baseRenderer":"/home/senadu/projects/Renderer-Cheetah/src/renderer/baseRenderer.js"}],"/home/senadu/projects/Renderer-Cheetah/src/renderingEngine.js":[function(require,module,exports){
'use strict';
var RenderContext = require('./renderContext');

/**
 * Responsible for controlling rendering process
 *
 * @class RenderingEngine
 */
function RenderingEngine(map, options) {
    // private member variables
    var renderQueue = [];
    var loopId = 0;
    var currentTile;
    var currentLayerIndex = 0;

    options = options || {};
    var timeLimit = options.timeLimit || 0;
    var pointsLimit = options.pointsLimit || 0;

    var DEFAULT_TIME_FOR_RENDERING = 17;

    var renderContext = new RenderContext(0, 0, DEFAULT_TIME_FOR_RENDERING);

    renderContext.timeLimit = timeLimit;
    renderContext.pointsLimit = pointsLimit;
    renderContext.map = map;

    // zoom level changed, clear everything from the queue
    map.getLmap().on('zoomend', function () {
        this.clearQueue();
    }.bind(this));

    function renderLoop() {
        /*jshint validthis:true*/
        if (renderQueue.length === 0 && !currentTile) {
            loopId = 0;
            return;
        }

        if (!currentTile) {
            currentTile = renderQueue.shift();
        }

        var startTime = 0;
        if (this.debug) {
            startTime = window.performance.now();
        }

        // we now need to render
        var ctx = currentTile.canvas.getContext('2d');

        var renderers;

        var isNotLabelRenderer = function (r) {
            return !r.isLabelRenderer;
        };
        var isLabelRenderer = function (r) {
            return r.isLabelRenderer;
        };

        var k;
        var layer;

        // for each layer in the tile
        for (var i = currentLayerIndex; i < currentTile.layers.length; i++) {
            layer = map.getLayer(currentTile.layers[i].layer.id);

            renderContext.tile = currentTile;

            if (layer.renderer) {
                if (Array.isArray(layer.renderer)) {
                    renderers = layer.renderer;
                } else {
                    renderers = [layer.renderer];
                }
            }

            // we filter out label renderers since we want to render the labels at the end
            renderers = renderers.filter(isNotLabelRenderer);

            for (k = renderContext.rendererIndex; k < renderers.length; k++) {
                // layer.renderer.preventRendering is a flag that prevents layer to be rendered on cavas
                if (renderers[k] && !renderers[k].preventRendering) {
                    var result = renderers[k].render(renderContext, ctx, currentTile.layers[i], currentTile.zoom);
                    if (result && result.stopped) {
                        // reset counter
                        currentLayerIndex = i;
                        renderContext.rendererIndex = k;
                        renderContext.pointsRendered = 0;
                        renderContext.timeLeft = timeLimit || DEFAULT_TIME_FOR_RENDERING;
                        renderContext.stopped = false;

                        loopId = setTimeout(renderLoop.bind(this), 0);
                        return;

                    } else if (result) {
                        renderContext.featureIndex = 0;
                        renderContext.rendererIndex = 0;
                    }
                }
            }
        }

        // we go through all the layers and check if there are any label renderers (by using the isLabelRenderer
        // property of the LabelRenderer class). If there are any label renderers attached to the layer we call the 'render'
        // function which positions the labels. Note that the actual drawing will be done when all the labels have been positioned.
        // The actual drawing is done by calling the 'drawLabels' method on the LabelCollisions class
        for (var j = 0; j < currentTile.layers.length; j++) {
            layer = map.getLayer(currentTile.layers[j].layer.id);

            if (layer.renderer) {
                if (Array.isArray(layer.renderer)) {
                    renderers = layer.renderer;
                } else {
                    renderers = [layer.renderer];
                }
            }

            var labelRenderers = renderers.filter(isLabelRenderer);
            for (k = 0; k < labelRenderers.length; k++) {
                if (labelRenderers[k] && !labelRenderers[k].preventRendering) {
                    labelRenderers[k].render(renderContext, ctx, currentTile.layers[j], currentTile.zoom);
                }
            }
        }

        // all labels have been positioned, now we can call the draw labels method
        currentTile.labelCollisions.drawLabels();

        if (this.debug) {
            var time = window.performance.now() - startTime;
            // draw tile border

            ctx.save();
            ctx.beginPath();
            if (ctx.setLineDash) {
                ctx.setLineDash([]);
            }

            ctx.strokeStyle = 'black';

            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, 150, 22);
            ctx.fillStyle = 'blue';
            ctx.font = 'bold 10px sans';
            ctx.rect(0, 0, 256, 256);
            ctx.stroke();
            ctx.fillText('Tile : ' + currentTile.index + '; Lx: ' + currentTile.tilePoint.x + ' Ly: ' + currentTile.tilePoint.y, 10, 10);
            ctx.fillText('Time : ' + time.toFixed(2) + 'ms', 10, 20);

            ctx.restore();
        }

        map._internal.setOnScreenTileRendered(currentTile.tilePoint.x + '.' + currentTile.tilePoint.y);
        currentTile.canvas.setAttribute('data-tile-drawn', 'yes');

        map._internal.mapspiceCanvasLayer.tileDrawn(currentTile.canvas);

        //map.tilesToRender = 123;
        currentTile = null;
        currentLayerIndex = 0;

        if (options.pointsLimit > 0) {
            loopId = -1;
            renderLoop.bind(this)();
        } else {
            loopId = setTimeout(renderLoop.bind(this), 0);
        }
    }

    loopId = setTimeout(renderLoop.bind(this), 0);

    /**
     * Adds an item to render queue
     *
     * @method render
     * @param {GeoTileData} item Item to be added to render queue
     */
    this.render = function (item) {
        renderQueue.push(item);
        if (loopId === 0) {
            //loopId = setTimeout(renderLoop.bind(this), 0);
            //console.log('render loop');
            loopId = -1;
            renderLoop.bind(this)();
        }
    };

    /**
     * Clears rendering queue
     *
     * @method clearQueue
     */
    this.clearQueue = function () {
        renderQueue = [];
    };

    /**
     * Indicates whether debug information (tile border and tile index) will be displayed on the tiles.
     */
    this.debug = false;
}

module.exports = RenderingEngine;

},{"./renderContext":"/home/senadu/projects/Renderer-Cheetah/src/renderContext.js"}],"/home/senadu/projects/Renderer-Cheetah/src/rule.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
var _ = require('underscore');

var Rule = Class.extend({
    fieldName: undefined,
    style: undefined,
    isFunc: false,
    init: function (fieldName, options, style) {
        _.extend(this, options);

        this.fieldName = fieldName;
        this.style = style;
        this.isFunc = _.isFunction(fieldName);
    },
    /**
     * Evaluates rule against a value
     *
     * @method evaluate
     * @param {String | Number etc} value value to evaluate
     * @return {Boolean} indicates whether the value satisfies this rule
     */
    evaluate: function (value, zoom) {
        if (this.zoomMin !== undefined && this.zoomMax !== undefined && zoom !== undefined) {
            if (!(this.zoomMin <= zoom && zoom <= this.zoomMax)) {
                return false;
            }
        }

        if (this.matchNull && (value === undefined || value === null)) {
            return true;
        } else if (this.value !== undefined) { // we're matching against a value
            // Let's first check with strict operator
            if (value === this.value) {
                return true;
            }

            if (value === undefined || value === null) {
                value = '';
            }
            if (value.toString() === this.value.toString()) {
                return true;
            }
        } else if (this.from !== undefined && this.to !== undefined) {
            if (value >= this.from && value <= this.to) {
                return true;
            }
        } else if (this.from !== undefined) {
            if (value >= this.from) {
                return true;
            }
        } else if (this.to !== undefined) {
            if (value <= this.to) {
                return true;
            }
        } else if (this.fn && _.isFunction(this.fn)) {
            return this.fn(value);
        }
        return false;
    }
});

module.exports = Rule;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","underscore":"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js"}],"/home/senadu/projects/Renderer-Cheetah/src/style.js":[function(require,module,exports){
'use strict';

var Class = require('./class');
var _ = require('underscore');
var Util = require('./util');
var Color = require('./color');

/*
 * Holds style information
 *
 * @class Style
 * @constructor
 */
var Style = Class.extend({
    _options: undefined,
    /**
     * Creates new style
     * @param  {object} options Options that will be used for drawing
     *                           * strokeOpacity int Opacity of the stroke (default 1)
     *                           * strokeFillOpacity int Opacity of the stroke fill (default 1)
     *                           * fillOpacity int Opacity of the fill (default 1)
     *                           * fill string Color used for fill
     *                           * stroke string Color used for stroke
     *                           * strokeWidth integer With of stroke
     *                           * strokeLineCap string Type of line cap
     *                           * strokeLineJoin string Type of line joints
     *                           * strokeMiterLimit integer
     *                           * radius integer Radius of point circle. Value has to be between 0 and 20
     *                           * icon object Describes icon to display
     *                                * src String URL parh where icon is located
     *                                * x int position x where image is located
     *                                * y int position y where image is located
     *                                * width int width of image
     *                                * height int of image
     * @return {void}
     */
    init: function (options) {
        var adjustOpacity = function (opacity, styleProperty) {
            var color = new Color(this[styleProperty]);
            color.setAlpha(opacity);
            this[styleProperty] = color.getRgba();
        };
        var setProperty = function (opacityProperty, styleProperty) {
            var value;
            Object.defineProperty(this, opacityProperty, {
                set: function (newValue) {
                    if (!this[styleProperty]) {
                        return;
                    }
                    value = newValue;
                    adjustOpacity.call(this, newValue, styleProperty);
                },
                get: function () {
                    return value === undefined ? 1 : value;
                }
            });
        };

        setProperty.call(this, 'fillOpacity', 'fill');
        setProperty.call(this, 'strokeOpacity', 'stroke');
        setProperty.call(this, 'strokeFillOpacity', 'strokeFill');
        setProperty.call(this, 'shadowAlpha', 'shadowColor');

        // Object.defineProperty(this, 'strokeOpacity', {
        //     set: function (newValue) {
        //         adjustOpacity.call(this, newValue, 'stroke');
        //     }
        // });

        // Object.defineProperty(this, 'strokeFillOpacity', {
        //     set: function (newValue) {
        //         adjustOpacity.call(this, newValue, 'strokeFill');
        //     }
        // });
        this._options = options;
        _.extend(this, options);

        // // defaults for stroke and fill opacity
        // this.strokeOpacity = this.strokeOpacity || 1;
        // this.strokeFillOpacity = this.strokeFillOpacity || 1;
        // this.fillOpacity = this.fillOpacity || 1;
        // // change alpha componet of fill color
        // if (this.fillOpacity !== 1) {
        //     adjustOpacity.call(this, 'fillOpacity', 'fill');
        // }

        // // change alpha componet of stroke color
        // if (this.strokeOpacity !== 1) {
        //     adjustOpacity.call(this, 'strokeOpacity', 'stroke');
        // }

        // // change alpha componet of fill color
        // if (this.strokeFillOpacity !== 1) {
        //     adjustOpacity.call(this, 'strokeFillOpacity', 'strokeFill');
        // }

        this.id = Util.guid();

    },
    /**
     * Apply stroke and fill style definition to a Canvas 2d rendering context
     * @method apply
     * @param {Canvas2DRenderingContext} ctx canvas 2d rendering context
     * @return {void}
     */
    apply: function (ctx) {

        ctx.fillStyle = this.fill || '#000000';
        ctx.strokeStyle = this.stroke || '#000000';
        ctx.lineWidth = this.strokeWidth || 1;
        ctx.lineCap = this.strokeLineCap || 'round';
        ctx.lineJoin = this.strokeLineJoin || 'round';
        ctx.miterLimit = this.strokeMiterLimit || 3;
        this._setLineDash(ctx, this.strokeDashArray);
        this._setLineDashOffset(ctx, this.strokeDashOffset);

        this.applyTextStyle(ctx);
    },

    /**
     * Sets line dash on canvas context
     *
     * @method _setLineDash
     * @param {Canvas2DRenderingContext} ctx canvas 2d rendering context
     * @param {String} Dash array string in format '5,5'
     * @return {void}
     */
    _setLineDash: function (ctx, strokeDashArray) {
        if (ctx.setLineDash) {
            // for some reason cairo-canvas implementation does not support reseting line dash by using [0, 0]
            var dashLine = [];
            if (strokeDashArray) {
                dashLine = strokeDashArray.split(',').map(function (i) {
                    return parseInt(i, 10);
                });
            }
            ctx.setLineDash(dashLine);
        }
    },
    /**
     * Sets line dash offset on canvas context
     *
     * @method _setLineDashOffset
     * @param {Canvas2DRenderingContext} ctx canvas 2d rendering context
     * @param {Integer} strokeDashOffset line dash offset
     * @return {void}
     */
    _setLineDashOffset: function (ctx, strokeDashOffset) {
        if (ctx.lineDashOffset) {
            if (strokeDashOffset) {
                ctx.lineDashOffset = strokeDashOffset;
            } else {
                ctx.lineDashOffset = 0;
            }
        }
    },
    /**
     * Apply text drawing style properties to a Canvas 2D rendering context
     *
     * @method applyTextStyle
     * @param {Canvas2DRenderingContext} ctx canvas 2d rendering context
     * @return {void}
     */
    applyTextStyle: function (ctx) {
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowColor = this.shadowColor;
        ctx.textAlign = this.textAlign;
        //ctx.textBaseline = this.textBaseline;

        if (this.font && (/[\d]+px\s/.test(this.font))) {
            ctx.font = this.font;
            return;
        }

        var font = this.font || 'Arial';
        var fontSize = this.fontSize || '14px';

        ctx.font = fontSize + ' ' + font;
    },
    /**
     * Apply strokeFill style definition to a Canvas 2d rendering context
     *
     * @method applyStrokeFill
     * @param {Canvas2DRenderingContext} ctx canvas 2d rendering context
     * @return {void}
     */
    applyStrokeFill: function (ctx) {
        ctx.strokeStyle = this.strokeFill || '#000000';
        ctx.lineWidth = this.strokeFillWidth || 1;
        ctx.lineCap = this.strokeFillLineCap || 'round';
        ctx.lineJoin = this.strokeFillLineJoin || 'round';
        ctx.miterLimit = this.strokeFillMiterLimit || 3;

        this._setLineDash(ctx, this.strokeFillDashArray);
        this._setLineDashOffset(ctx, this.strokeFillDashOffset);
    },
    /**
     * Indicates whether this style has stroke fill
     *
     * @method hasStrokeFill
     * @return {Boolean} indication if there is a stroke fill specified in this style
     */
    hasStrokeFill: function () {
        return this.strokeFill && this.strokeFillWidth > 0 && this.strokeFillOpacity > 0;
    },
    /**
     * Indicates whether this style has stroke style specified
     *
     * @method hasStroke
     * @return {Boolean} indication if there is a stroke specified in this style
     */
    hasStroke: function () {
        return this.stroke && this.strokeWidth > 0 && this.strokeOpacity > 0;
    },
    /**
     * Indicated whether this style has fill style specified
     *
     * @method hasFill
     * @return {Boolean} indication if there is a fill specified in this style
     */
    hasFill: function () {
        return this.fill && this.fillOpacity > 0;
    }
});

module.exports = Style;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./color":"/home/senadu/projects/Renderer-Cheetah/src/color.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js","underscore":"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js"}],"/home/senadu/projects/Renderer-Cheetah/src/tileReader.js":[function(require,module,exports){
'use strict';
/*jshint worker:true*/

var GeoTileData = require('./geoTileData');
var LayerData = require('./layerData');
// var DataColumn = require('./dataColumn');
var Class = require('./class');
var Feature = require('./feature');
var Util = require('./util');
var Enums = require('./enums');

function uintToString(uintArray) {
    // THIS DOES NOT WORK IN WebWorkers, there is a bug in Chrome.
    //var encodedString = String.fromCharCode.apply(null, uintArray),
    //decodedString = decodeURIComponent(escape(encodedString));
    var encodedString = '';

    for (var i = 0; i < uintArray.length; i++) {
        encodedString += String.fromCharCode(uintArray[i]);
    }

    // since escape method is depricated, we use encodeURIComponent
    var decodedString = decodeURIComponent(encodeURIComponent(encodedString));
    return decodedString;

}

/**
 * Class contains methods for creating tiles from the binary stream data.
 *
 * @TileReader
 * @constructor
 */
var TileReader = Class.extend({
    CODE_END_OF_FEATURE: 127,
    CODE_END_OF_PART: 126,
    CODE_POSITIVE_OFFSET: -128,
    CODE_NEGATIVE_OFFSET: -127,
    init: function () {},
    readLabelTile: function (inputBuffer, layer) {
        var labels, charCount;

        var featureCount = inputBuffer.getUint32WithDefaultEncoding();
        for (var i = 0; i < featureCount; i++) {
            labels = [];
            var feature = {};
            var featureId = inputBuffer.getUint32WithDefaultEncoding();

            var completeFeature = new Feature();
            completeFeature.featureId = featureId;
            feature.type = 'LABEL_TYPE_POLYGON';
            feature.featureId = featureId;
            feature.markerCenterX = inputBuffer.getInt16WithDefaultEncoding();
            feature.markerCenterY = inputBuffer.getInt16WithDefaultEncoding();

            charCount = inputBuffer.getInt16WithDefaultEncoding();
            var caption = '';
            for (var k = 0; k < charCount; k++) {
                var sletter = inputBuffer.getUint16WithDefaultEncoding();
                caption = caption + String.fromCharCode(sletter);
            }

            feature.caption = caption;
            labels.push(feature);

            completeFeature.label = feature;
            layer.features.push(completeFeature);
        }

    },
    readPointTile: function (inputBuffer, layer) {
        // read tileType
        // 83 = compressed polygon
        // 79 = compressed line
        // 71 = compressed point
        //  0 = empty tile
        var tileType = inputBuffer.getInt8WithDefaultEncoding();
        if (!(tileType === 83 || tileType === 79 || tileType === 71)) {
            if (tileType !== 0) {
                console.log('Unrecognized tile format');
            }
            return;
        }
        var nrOfFeatures = inputBuffer.getInt32WithDefaultEncoding();
        var self = this;

        var getPoint = function (ib) {
            var byteCode = ib.getInt8WithDefaultEncoding();

            // if needed, move point even more
            if (byteCode === self.CODE_POSITIVE_OFFSET) {
                byteCode = ib.getInt8WithDefaultEncoding() + 250;
            } else if (byteCode === self.CODE_NEGATIVE_OFFSET) {
                byteCode = ib.getInt8WithDefaultEncoding() - 250;
            }
            return byteCode + 128;
        };

        for (var j = 0; j < nrOfFeatures; j++) {
            var completeFeature = new Feature();
            var featureId = inputBuffer.getUint32WithDefaultEncoding();
            completeFeature.featureId = featureId;

            var x = getPoint(inputBuffer);
            var y = getPoint(inputBuffer);

            completeFeature.parts.push(x);
            completeFeature.parts.push(y);
            completeFeature.centroid = {
                x: x,
                y: y
            };

            layer.features.push(completeFeature);
        }

    },
    readPointLabelTile: function (inputBuffer, layer) {
        var featureCount = inputBuffer.getUint32WithDefaultEncoding();
        for (var i = 0; i < featureCount; i++) {
            var featureId = inputBuffer.getUint32WithDefaultEncoding();
            var label = {};
            var completeFeature = new Feature();
            completeFeature.featureId = featureId;

            label.markerCenterX = inputBuffer.getInt16WithDefaultEncoding();
            label.markerCenterY = inputBuffer.getInt16WithDefaultEncoding();

            label.serverPrefferedPosition = inputBuffer.getUint8WithDefaultEncoding();

            var charCount = inputBuffer.getUint16WithDefaultEncoding();
            var caption = '';
            for (var k = 0; k < charCount; k++) {
                var sletter = inputBuffer.getUint16WithDefaultEncoding();
                caption = caption + String.fromCharCode(sletter);
            }

            label.caption = caption;
            completeFeature.label = label;
            layer.features.push(completeFeature);
        }
    },
    readLineLabelTile: function (inputBuffer, layer) {
        var featureCount = inputBuffer.getUint32WithDefaultEncoding();
        for (var i = 0; i < featureCount; i++) {
            var featureId = inputBuffer.getUint32WithDefaultEncoding();
            var numberOfChars = inputBuffer.getUint16WithDefaultEncoding();

            var completeFeature = new Feature();
            completeFeature.featureId = featureId;

            var label = {};
            label.chars = [];

            for (var k = 0; k < numberOfChars; k++) {
                var chr = inputBuffer.getUint16WithDefaultEncoding();
                var letter = String.fromCharCode(chr);

                var angle2 = inputBuffer.getInt16WithDefaultEncoding();
                var dxp2 = inputBuffer.getInt16WithDefaultEncoding() / 10;
                var dyp2 = inputBuffer.getInt16WithDefaultEncoding() / 10;

                label.chars.push({
                    letter: letter,
                    angle: angle2,
                    x: dxp2,
                    y: dyp2
                });
            }

            completeFeature.label = label;
            layer.features.push(completeFeature);
        }
    },
    readPolygonOrLineTile: function (inputBuffer, layer) {
        // read tileType
        // 83 = compressed polygon
        // 79 = compressed line
        // 71 = compressed point
        var tileType = inputBuffer.getInt8WithDefaultEncoding();
        if (!(tileType === 83 || tileType === 79 || tileType === 71)) {
            console.log('Unrecognized tile format');
            return;
        }

        var nrOfFeatures = inputBuffer.getUint32WithDefaultEncoding();

        for (var j = 0; j < nrOfFeatures; j++) {
            var relativeX = 128;
            var relativeY = 128;
            var ptSwitch = false;

            var part = [];
            var featureId = inputBuffer.getUint32WithDefaultEncoding();

            var completeFeature = new Feature();
            completeFeature.featureId = featureId;

            var remainInLoop = true;
            while (remainInLoop) {
                var byteCode = inputBuffer.getInt8WithDefaultEncoding();

                switch (byteCode) {
                case this.CODE_END_OF_FEATURE:
                    completeFeature.parts.push(part);
                    completeFeature.calculateBoundingBox();
                    remainInLoop = false;
                    break;
                case this.CODE_END_OF_PART:
                    completeFeature.parts.push(part);
                    part = [];
                    relativeX = 128;
                    relativeY = 128;
                    break;
                case this.CODE_POSITIVE_OFFSET:
                    if (ptSwitch) {
                        relativeY += 250;
                    } else {
                        relativeX += 250;
                    }
                    break;
                case this.CODE_NEGATIVE_OFFSET:
                    if (ptSwitch) {
                        relativeY -= 250;
                    } else {
                        relativeX -= 250;
                    }
                    break;
                default:
                    var pointPos = 0;
                    if (ptSwitch) {
                        pointPos = byteCode + relativeY;
                        relativeY = pointPos;
                    } else {
                        pointPos = byteCode + relativeX;
                        relativeX = pointPos;
                    }
                    part.push(pointPos);
                    ptSwitch = !ptSwitch;
                }
            }
            layer.features.push(completeFeature);
        }

    },
    /**
     * Reads {{#crossLink 'GeoTileData'}}{{/crossLink}} from the passed instance of {{#crossLink 'Util.ByteBufferReader'}}{{/crossLink}} wrapped around GeoTileData binary stream.
     *
     * @method readTile
     * @param {Util.ByteBufferReader} inputBuffer Instance of {{#crossLink 'Util.ByteBufferReader'}}{{/crossLink}} wrapped around GeoTileData binary stream.
     * @param {Array} layersToFetch An array of layers that are present in the tile.
     * @returns {GeoTileData} New instance of {{#crossLink 'GeoTileData'}}{{/crossLink}}.
     */
    readTile: function (inputBuffer, layersToFetch) {
        // nrTiles
        inputBuffer.getInt32WithDefaultEncoding();
        //var totalPoints = 0;

        var tile = new GeoTileData();

        for (var k = 0; k < layersToFetch.length; k++) {
            // layerId
            inputBuffer.getUint32WithDefaultEncoding();
            // isCentroid
            inputBuffer.getInt8WithDefaultEncoding();
            // zoom
            inputBuffer.getUint16WithDefaultEncoding();
            // tileIndex
            inputBuffer.getUint32WithDefaultEncoding();
            // tileIndex2
            inputBuffer.getUint32WithDefaultEncoding();

            var tileLen = inputBuffer.getInt32WithDefaultEncoding();
            if (tileLen === 0) {
                continue;
            }

            var layer = new LayerData();

            layer.tile = tile;
            // call the right method based on feature type

            switch (layersToFetch[k].featureType) {
            case Enums.FeatureType.POLYGON:
            case Enums.FeatureType.LINE:
                this.readPolygonOrLineTile(inputBuffer, layer);
                break;
            case Enums.FeatureType.POINT:
                this.readPointTile(inputBuffer, layer);
                break;
            case Enums.FeatureType.LABEL:
                this.readLabelTile(inputBuffer, layer);
                break;
            case Enums.FeatureType.POINT_LABEL:
                this.readPointLabelTile(inputBuffer, layer);
                break;
            case Enums.FeatureType.LINE_LABEL:
                this.readLineLabelTile(inputBuffer, layer);
                break;
            default:
                console.log('Warning: FeatureType not matched!');
            }

            layer.featureType = layersToFetch[k].featureType;
            layer.layer = layersToFetch[k];
            tile.layers.push(layer);

        }
        return tile;
    },
    /**
     * Read binary data tile
     * @param  {Util.ByteBufferReader} inputBuffer
     * @param  {String} tiles Tiles to request in following format: zoomLevel.tileIndex[,zoomLevel.tileIndex...]
     * @return {Object}             Columns with processed data
     */
    readDataTile: function (inputBuffer, tiles) {
        var inputBufferLength = inputBuffer.getByteLength();
        var dt = {};
        dt.columns = [];
        dt.tiles = tiles.split(',');
        while (inputBuffer.getOffset() < inputBufferLength) {
            inputBuffer.skipInt32(); // fileType signature
            inputBuffer.skipInt32(); // number of rows
            // var numberOfRows = inputBuffer.getInt32WithDefaultEncoding();
            var numOfColumns = inputBuffer.getInt32WithDefaultEncoding();

            //var featureIdsColumn = layer.recordset.getColumnByName('SEAddedFeatureId');
            //var numberOfRowsBeforeUpdate = (featureIdsColumn === undefined ? 0 : featureIdsColumn.rowCount);

            for (var i = 0; i < numOfColumns; i++) {
                var colType = inputBuffer.getInt8WithDefaultEncoding();

                var colNameLen = inputBuffer.getInt32WithDefaultEncoding();
                var tmp = [];

                // utf string
                for (var k = 0; k < colNameLen; k++) {
                    tmp.push(inputBuffer.getInt8WithDefaultEncoding());
                }

                var arbuf = new Uint8Array(tmp);

                var colName = uintToString(arbuf);
                //console.log('   COLUMN NAME:  ' + colName);

                var dataColumn; //= layer.recordset.getColumnByName(colName);

                //if (dataColumn === undefined)
                //{
                // We don't have the column, so let's create it...
                //dataColumn = new DataColumn(colName, colType, colName);
                dataColumn = {
                    name: colName,
                    rowCount: 0
                };
                //layer.recordset.addColumn(dataColumn);
                //}

                var colSize = inputBuffer.getInt32WithDefaultEncoding();

                dataColumn.rowCount += this.readColumnValues(inputBuffer, colSize, colType, dataColumn);
                dt.columns.push(dataColumn);

                // do this when the record set is available
                //var featureIdsColumnData = featureIdsColumn.getColumnData();
                //var featureIndex = layer.recordset.getFeatureIndex();

                //for (var j = numberOfRowsBeforeUpdate; j < featureIdsColumn.rowCount; j++)
                //{
                //featureIndex[featureIdsColumnData[j]] = j;
                //}
            }
        }
        //console.log('readDataTile took ',((new Date()).getTime() - s));
        return dt;
    },
    readColumnValues: function (buf, colSize, colType, dataColumn) {
        var val;
        var finalOffset = buf.offset + colSize;
        // first chunk since this is new
        dataColumn.data = [];
        var columnData = dataColumn.data; //getColumnData();
        var insertedRows = 0;
        switch (colType) {
        case 1:
            while (buf.offset < finalOffset) {
                val = buf.getUint16WithDefaultEncoding();
                //columnData.push();

                if (val === 65533) {
                    columnData.push(null);
                } else {
                    columnData.push(val);
                }
            }
            insertedRows = colSize / 2;

            break;
        case 2:
            while (buf.offset < finalOffset) {
                val = buf.getInt16WithDefaultEncoding();
                //columnData.push();

                if (val === 32765) {
                    columnData.push(null);
                } else {
                    columnData.push(val);
                }
            }
            insertedRows = colSize / 2;
            break;
        case 3:
            while (buf.offset < finalOffset) {
                val = buf.getUint32WithDefaultEncoding();
                // null value
                if (val === 4294967293) {
                    columnData.push(null);
                } else {
                    columnData.push(val);
                }
            }
            insertedRows = colSize / 4;
            break;
        case 4:
            while (buf.offset < finalOffset) {
                val = buf.getInt32WithDefaultEncoding();
                //columnData.push();
                if (val === 2147483645) {
                    columnData.push(null);
                } else {
                    columnData.push(val);
                }
            }
            insertedRows = colSize / 4;
            break;
        case 5:
            while (buf.offset < finalOffset) {
                columnData.push(buf.getFloat32WithDefaultEncoding());
            }
            insertedRows = colSize / 4;
            break;
        case 6:
            while (buf.offset < finalOffset) {
                columnData.push(buf.getFloat64WithDefaultEncoding());
            }

            insertedRows = colSize / 8;
            break;
        case 7: // STRING
            var tmp = [];
            var len = (colSize - 1);
            // utf string
            for (var k = 0; k < len; k++) {
                tmp.push(buf.getInt8WithDefaultEncoding());
            }

            var arbuf = new Uint8Array(tmp);

            var delimiter = uintToString(new Uint8Array([buf.getInt8WithDefaultEncoding()]));

            var strvals = uintToString(arbuf).split(delimiter);

            for (var i = 0; i < strvals.length; i++) {
                columnData.push(strvals[i]);
            }
            insertedRows = strvals.length;
            break;
        case 8:
            //64 bit integer!
            while (buf.offset < finalOffset) {
                var lsb = buf.getUint32WithDefaultEncoding();
                var msb = buf.getUint32WithDefaultEncoding();

                var result = 0;
                if (msb & 0x80000000) {
                    //negative number, 2's complement:
                    msb ^= 0xFFFFFFFF;
                    lsb ^= 0xFFFFFFFF;
                    result = -(Number(msb) * 4294967296 + Number(lsb) + 1);
                } else {
                    result = Number(msb) * 4294967296 + Number(lsb);
                }

                columnData.push(result);
            }
            insertedRows = colSize / 8;
            break;
        }

        return insertedRows;
    }

});
if (typeof self !== 'undefined') {
    var tr = new TileReader();

    var inWorker = self.DedicatedWorkerGlobalScope !== undefined;
    if (inWorker) {
        self.onmessage = function (e) {
            var buf = new Util.ByteBufferReader(e.data.buffer, true);
            var dt = tr.readDataTile(buf, e.data.tiles);
            postMessage({
                callbackKey: e.data.callbackKey,
                dt: dt
            });
        };
    }
}

module.exports = TileReader;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js","./enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","./feature":"/home/senadu/projects/Renderer-Cheetah/src/feature.js","./geoTileData":"/home/senadu/projects/Renderer-Cheetah/src/geoTileData.js","./layerData":"/home/senadu/projects/Renderer-Cheetah/src/layerData.js","./util":"/home/senadu/projects/Renderer-Cheetah/src/util.js"}],"/home/senadu/projects/Renderer-Cheetah/src/trackingLayer.js":[function(require,module,exports){
'use strict';

var _ = require('underscore');
var Enums = require('./enums');

var TrackingLayer = L.TileLayer.Canvas.extend({
    options: {
        async: true
    },
    TOP_LAYER_ID: '__overlay__',
    TOP_LAYER_Z_INDEX: 0,
    _dirtyTiles: undefined,
    _drawnFeatures: undefined,

    initialize: function (options) {
        this._dirtyTiles = {};
        this._drawnFeatures = {};
        L.setOptions(this, options);
    },

    onAdd: function (map) {
        this._map = map;
        this._animated = map._zoomAnimated;
        var self = this;
        // create a container div for tiles
        this._initContainer();

        // set up events
        map.on({
            'viewreset': this._reset,
            'moveend': this._update
        }, this);

        map.on({
            'viewreset': function () {
                self._drawnFeatures = {};
            }
        }, this);

        if (this._animated) {
            map.on({
                'zoomanim': this._animateZoom,
                'zoomend': this._endZoomAnim
            }, this);
        }

        if (!this.options.updateWhenIdle) {
            this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
            map.on('move', this._limitedUpdate, this);
        }

        this._reset();
        this._update();

        L.DomUtil.addClass(this.getContainer(), 'no-events');
    },
    _createTile: function () {
        var tile = this.retinaCreateTileFn();

        return tile;
    },
    drawTile: function (canvas, tilePoint, zoom) {
        var ctx = canvas.getContext('2d');

        var self = this;

        var callback = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            this.source.features.filter(function (trackingFeature) {
                    return trackingFeature.layer.isVisible;
                })
                .forEach(function (trackingFeature) {
                    var tiles = this.options.map._internal.tilesByFeatureIndex
                        .zoom(zoom)
                        .layer(trackingFeature.layer.id)
                        .feature(trackingFeature.featureIndex);

                    tiles.filter(function (tile) {
                        return tile.tile.tilePoint.x === tilePoint.x && tile.tile.tilePoint.y === tilePoint.y;
                    }).forEach(function (tile) {
                        if (trackingFeature.layer.featureType === Enums.FeatureType.POLYGON) {
                            this.drawPolygon(ctx, tile.data.parts, trackingFeature.style);
                        } else if (trackingFeature.layer.featureType === Enums.FeatureType.LINE) {
                            this.drawLine(ctx, tile.data.parts, trackingFeature.style);
                        }

                        var key = trackingFeature.featureIndex + '.' + trackingFeature.layer.id;
                        if (this._drawnFeatures[key] === undefined) {
                            this._drawnFeatures[key] = [];
                        }

                        this._drawnFeatures[key].push({
                            trackingFeature: trackingFeature,
                            canvas: canvas,
                            tile: tile,
                            key: key,
                            self: this
                        });
                    }.bind(this));

                }.bind(this));
            this.tileDrawn(canvas);
        }.bind(this);

        self.options.map._internal.addAllRenderedCallback(callback);
    },

    clear: function () {
        this._drawnFeatures = {};
    },

    tileDrawn: function (tile) {
        tile.setAttribute('data-tile-drawn', 'yes');
        this._tileOnLoad.call(tile);
    },

    redrawTrackingLayer: function () {
        var self = this;
        var tilesToRedraw = {};

        var alreadyPresentFeatures = Object.keys(this._drawnFeatures).map(function (fKey) {
            return this._drawnFeatures[fKey];
        }, this);

        this._drawnFeatures = {};
        alreadyPresentFeatures = _.flatten(alreadyPresentFeatures, true);

        var trackingFeatures = self.source.features;

        trackingFeatures.forEach(function (trackingFeature) {

            var tiles = self.options.map._internal.tilesByFeatureIndex
                .zoom(self.options.map.zoom)
                .layer(trackingFeature.layer.id)
                .feature(trackingFeature.featureIndex);

            tiles.forEach(function (tile) {

                var key = tile.tile.tilePoint.x + ':' + tile.tile.tilePoint.y;
                tilesToRedraw[key] = true;
            });

        });

        alreadyPresentFeatures.forEach(function (apf) {
            if (apf) {
                delete self._drawnFeatures[apf.key];
                tilesToRedraw[apf.tile.tile.tilePoint.x + ':' + apf.tile.tile.tilePoint.y] = true;
            }
        });

        for (var k in tilesToRedraw) {
            if (tilesToRedraw.hasOwnProperty(k)) {
                if (self._tiles[k] !== undefined) {
                    self._redrawTile(self._tiles[k]);
                }
            }
        }

    },
    drawPolygon: function (ctx, paths, style) {

        ctx.save();
        style = style || {};
        ctx.fillStyle = style.fill || 'rgba(0,0,0,.6)';
        ctx.strokeStyle = style.stroke || 'rgba(0,0,0,1)';
        ctx.lineWidth = style.strokeWidth || 2;
        ctx.lineCap = style.strokeLineCap || 'round';
        ctx.lineJoin = style.strokeLineJoin || 'round';
        ctx.miterLimit = style.strokeMiterLimit || 3;

        if (ctx.setLineDash) {
            var dashLine = [0, 0];
            if (style.strokeDashArray) {
                dashLine = style.strokeDashArray.split(',').map(function (i) {
                    return parseInt(i, 10);
                });
            }
            ctx.setLineDash(dashLine);
        }

        if (ctx.lineDashOffset) {
            if (style.strokeDashOffset) {
                ctx.lineDashOffset = style.strokeDashOffset;
            } else {
                ctx.lineDashOffset = 0;
            }
        }

        var pathCount = paths.length;
        ctx.beginPath();

        var i;
        for (i = 0; i < pathCount; i++) {
            ctx.moveTo(paths[i][0], paths[i][1]);
            for (var j = 2; j < paths[i].length; j += 2) {
                ctx.lineTo(paths[i][j], paths[i][j + 1]);
            }
        }

        if (style.fill) {
            ctx.fill();
        }
        ctx.stroke();

        // do it once more if it's double solid line
        if (style.strokeFill && style.strokeFillWidth > 0 && style.strokeFillOpacity > 0) {
            ctx.beginPath();

            for (i = 0; i < pathCount; i++) {

                this._drawLine(ctx, paths[i], {
                    stroke: style.strokeFill,
                    strokeWidth: style.strokeFillWidth,
                    strokeLineCap: style.strokeFillLineCap,
                    strokeLineJoin: style.strokeFillLineJoin,
                    strokeMiterLimit: style.strokeFillMiterLimit,
                    strokeDashArray: style.strokeFillDashArray,
                    strokeDashOffset: style.strokeFillDashOffset
                });
            }

            ctx.stroke();
        }
        ctx.restore();
    },
    _drawLine: function (ctx, points, style) {
        style = style || {};

        ctx.strokeStyle = style.stroke || 'rgba(0,0,0,1)';
        ctx.lineWidth = style.strokeWidth || 2;
        ctx.lineCap = style.strokeLineCap || 'round';
        ctx.lineJoin = style.strokeLineJoin || 'round';
        ctx.miterLimit = style.strokeMiterLimit || 3;

        if (ctx.setLineDash) {
            var dashLine = [0, 0];
            if (style.strokeDashArray) {
                dashLine = style.strokeDashArray.split(',').map(function (i) {
                    return parseInt(i, 10);
                });
            }
            ctx.setLineDash(dashLine);
        }

        if (ctx.lineDashOffset) {
            if (style.strokeDashOffset) {
                ctx.lineDashOffset = style.strokeDashOffset;
            } else {
                ctx.lineDashOffset = 0;
            }
        }

        ctx.moveTo(points[0], points[1]);
        for (var i = 2; i < points.length - 1; i += 2) {
            ctx.lineTo(points[i], points[i + 1]);
        }
    },
    drawLine: function (ctx, paths, style) {
        var pathCount = paths.length;

        style = style || {};

        var i;
        ctx.beginPath();
        for (i = 0; i < pathCount; i++) {
            this._drawLine(ctx, paths[i], style);
        }
        ctx.stroke();

        // do it once more if it's double solid line
        if (style.strokeFill && style.strokeFillWidth > 0 && style.strokeFillOpacity > 0) {
            ctx.beginPath();
            for (i = 0; i < pathCount; i++) {

                this._drawLine(ctx, paths[i], {
                    stroke: style.strokeFill,
                    strokeWidth: style.strokeFillWidth,
                    strokeLineCap: style.strokeFillLineCap,
                    strokeLineJoin: style.strokeFillLineJoin,
                    strokeMiterLimit: style.strokeFillMiterLimit,
                    strokeDashArray: style.strokeFillDashArray,
                    strokeDashOffset: style.strokeFillDashOffset
                });
            }
            ctx.stroke();
        }
    }
});

module.exports = TrackingLayer;

},{"./enums":"/home/senadu/projects/Renderer-Cheetah/src/enums.js","underscore":"/home/senadu/projects/Renderer-Cheetah/node_modules/underscore/underscore.js"}],"/home/senadu/projects/Renderer-Cheetah/src/util.js":[function(require,module,exports){
'use strict';

var Class = require('./class');

/**
 * Utility class that provides utility classes.
 *
 * @class Util
 * @static
 */
var Util = {};

Util.NamespacedHashtable = function (description, defaultValue) {
    var data = {};
    var namespaces = description.split('.');

    if (namespaces.length === 1 && namespaces[0] === '') {
        if (defaultValue !== undefined && Array.isArray(defaultValue)) {
            data = defaultValue.slice(0);
        }
        return data;
    }

    this[namespaces[0]] = function (value) {
        if (arguments.length === 0) {
            return data;
        }

        if (data[value] === undefined) {
            data[value] = new Util.NamespacedHashtable(namespaces.slice(1).join('.'), defaultValue);
        }
        return data[value];
    };

    this.get = function () {
        return data;
    };
};

/**
 * Wrapper around DataView class. As opposed to the DataView class, this class tracks
 * the current position in stream when reading data.
 *
 * @class ByteBufferReader
 * @constructor
 * @param {DataView} buffer Instance of DataView wrapped around binary data
 * @param {Boolean} [littleEndian=false] Set little endian as default byte order when reading data from the stream
 */
Util.ByteBufferReader = Class.extend({
    littleEndian: false,
    stream: null,
    offset: 0,
    init: function (buffer, littleEndian) {
        if (typeof littleEndian === 'boolean') {
            this.littleEndian = littleEndian;
        }

        this.stream = new DataView(buffer);
    },

    /**
     * Returns current position in stream
     *
     * @return {Number} Current position in stream
     */
    getOffset: function () {
        return this.offset;
    },

    /**
     * Returns byte length of the underlying stream
     *
     * @return {Number} Byte length of the underlying stream
     */
    getByteLength: function () {
        return this.stream.byteLength;
    },

    /**
     * Reads an unsigned 8bit integer from the stream.
     *
     * @method getUint8WithDefaultEncoding
     * @return {Number} Returns an unsigned 8bit integer value.
     */
    getUint8WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 1;
        return this.stream.getUint8(offset, this.littleEndian);
    },

    /**
     * Reads an unsigned 16bit integer from the stream.
     *
     * @method getUint16WithDefaultEncoding
     * @return {Number} Returns an unsigned 16bit integer value.
     */
    getUint16WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 2;
        return this.stream.getUint16(offset, this.littleEndian);
    },

    /**
     * Reads an unsigned 32bit integer from the stream.
     *
     * @method getUint32WithDefaultEncoding
     * @return {Number} Returns an unsigned 32bit integer value.
     */
    getUint32WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 4;
        return this.stream.getUint32(offset, this.littleEndian);
    },

    /**
     * Reads a signed 8bit integer from the stream.
     *
     * @method getInt8WithDefaultEncoding
     * @return {Number} Returns a signed 8bit integer value.
     */
    getInt8WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 1;
        return this.stream.getInt8(offset, this.littleEndian);
    },

    /**
     * Reads a signed 16bit integer from the stream.
     *
     * @method getInt16WithDefaultEncoding
     * @return {Number} Returns a signed 16bit integer value.
     */
    getInt16WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 2;
        return this.stream.getInt16(offset, this.littleEndian);
    },

    /**
     * Reads a signed 32bit integer from the stream.
     *
     * @method getInt32WithDefaultEncoding
     * @return {Number} Returns a signed 32bit integer value.
     */
    getInt32WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 4;
        return this.stream.getInt32(offset, this.littleEndian);
    },

    /**
     * Reads a 32bit floating point number from the stream.
     *
     * @method getFloat32WithDefaultEncoding
     * @return {Number} Returns a 32bit floating point number
     */
    getFloat32WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 4;
        return this.stream.getFloat32(offset, this.littleEndian);
    },

    /**
     * Reads a 64bit floating point number from the stream.
     *
     * @method getFloat64WithDefaultEncoding
     * @return {Number} Returns a 64bit floating point number
     */
    getFloat64WithDefaultEncoding: function () {
        var offset = this.offset;
        this.offset += 8;
        return this.stream.getFloat64(offset, this.littleEndian);
    },

    /**
     * Reads an unsigned 8bit integer from the stream.
     *
     * @method getUint8WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns an unsigned 8bit integer value.
     */
    getUint8WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 1;
        return this.stream.getUint8(offset, littleEndian);
    },

    /**
     * Reads an unsigned 16bit integer from the stream.
     *
     * @method getUint16WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns an unsigned 16bit integer value.
     */
    getUint16WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 2;
        return this.stream.getUint16(offset, littleEndian);
    },

    /**
     * Reads an unsigned 32bit integer from the stream.
     *
     * @method getUint32WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns an unsigned 32bit integer value.
     */
    getUint32WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 4;
        return this.stream.getUint32(offset, littleEndian);
    },

    /**
     * Reads a signed 8bit integer from the stream.
     *
     * @method getInt8WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a signed 8bit integer value.
     */
    getInt8WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 1;
        return this.stream.getInt8(offset, littleEndian);
    },

    /**
     * Reads a signed 16bit integer from the stream.
     *
     * @method getInt16WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a signed 16bit integer value.
     */
    getInt16WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 2;
        return this.stream.getInt16(offset, littleEndian);
    },

    /**
     * Reads a signed 32bit integer from the stream.
     *
     * @method getInt32WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a signed 32bit integer value.
     */
    getInt32WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 4;
        return this.stream.getInt32(offset, littleEndian);
    },

    /**
     * Reads a 32bit floating point number from the stream.
     *
     * @method getFloat32WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a 32bit floating point number
     */
    getFloat32WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 4;
        return this.stream.getFloat32(offset, littleEndian);
    },

    /**
     * Reads a 64bit floating point number from the stream.
     *
     * @method getFloat64WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a 64bit floating point number
     */
    getFloat64WithEncoding: function (littleEndian) {
        var offset = this.offset;
        this.offset += 8;
        return this.stream.getFloat64(offset, littleEndian);
    },

    /**
     * Reads an unsigned 8bit integer from the stream.
     *
     * @method getUint8
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns an unsigned 8bit integer value.
     */
    getUint8: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 1;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getUint8(offset, littleEndian);
    },

    /**
     * Reads an unsigned 16bit integer from the stream.
     *
     * @method getUint16
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns an unsigned 16bit integer value.
     */
    getUint16: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 2;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getUint16(offset, littleEndian);
    },

    /**
     * Reads an unsigned 32bit integer from the stream.
     *
     * @method getUint32
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns an unsigned 32bit integer value.
     */
    getUint32: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 4;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getUint32(offset, littleEndian);
    },

    /**
     * Reads a signed 8bit integer from the stream.
     *
     * @method getInt8
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a signed 8bit integer value.
     */
    getInt8: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 1;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getInt8(offset, littleEndian);
    },

    /**
     * Reads a signed 16bit integer from the stream.
     *
     * @method getInt16
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a signed 16bit integer value.
     */
    getInt16: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 2;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getInt16(offset, littleEndian);
    },

    /**
     * Reads a signed 32bit integer from the stream.
     *
     * @method getInt32
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a signed 32bit integer value.
     */
    getInt32: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 4;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getInt32(offset, littleEndian);
    },

    /**
     * Reads a 32bit floating point number from the stream.
     *
     * @method getFloat32
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a 32bit floating point number
     */
    getFloat32: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 4;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getFloat32(offset, littleEndian);
    },

    /**
     * Reads a 64bit floating point number from the stream.
     *
     * @method getFloat64
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a 64bit floating point number
     */
    getFloat64: function (offset, littleEndian) {
        if (typeof offset !== 'number') {
            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
            offset = this.offset;
            this.offset += 8;
        } else if (typeof littleEndian !== 'boolean') {
            littleEndian = this.littleEndian;
        }

        return this.stream.getFloat64(offset, littleEndian);
    },

    /**
     * Moves the current position in stream
     *
     * @method skip
     * @param {Number} [offset] How many bytes to skip. Negative value will move the position backwards.
     */
    skip: function (offset) {
        this.offset += offset;
    },

    /**
     * Moves the current position forward by 8bits (1byte)
     *
     * @method skipInt8
     */
    skipInt8: function () {
        this.skip(1);
    },

    /**
     * Moves the current position forward by 16bits (2bytes)
     *
     * @method skipInt16
     */
    skipInt16: function () {
        this.skip(2);
    },

    /**
     * Moves the current position forward by 32bits (4byte)
     *
     * @method skipInt32
     */
    skipInt32: function () {
        this.skip(4);
    }
});

/**
 * Wrapper around DataView class. As opposed to the DataView class, this class tracks
 * the current position in stream when reading data.
 *
 * @class ByteBufferReader
 * @constructor
 * @param {DataView} buffer Instance of DataView wrapped around binary data
 * @param {Boolean} [littleEndian=false] Set little endian as default byte order when reading data from the stream
 */
Util.ByteBufferReaderOld = Class.extend({
    littleEndian: false,
    stream: null,
    offset: 0,
    init: function (buffer, littleEndian) {

        if (typeof littleEndian === 'boolean') {
            this.littleEndian = littleEndian;
        }

        this.stream = new Uint8Array(buffer);
    },

    /**
     * Returns current position in stream
     *
     * @return {Number} Current position in stream
     */
    getOffset: function () {
        return this.offset;
    },

    /**
     * Returns byte length of the underlying stream
     *
     * @return {Number} Byte length of the underlying stream
     */
    getByteLength: function () {
        return this.stream.length;
    },

    /**
     * Reads an unsigned 8bit integer from the stream.
     *
     * @method getUint8WithDefaultEncoding
     * @return {Number} Returns an unsigned 8bit integer value.
     */
    getUint8WithDefaultEncoding: function () {
        // var offset = this.offset;
        // this.offset += 1;
        //return this.stream.getUint8(offset, this.littleEndian);
        var offset = this.offset;
        this.offset++;
        return this.stream[offset] & 0xFF;
    },

    /**
     * Reads an unsigned 16bit integer from the stream.
     *
     * @method getUint16WithDefaultEncoding
     * @return {Number} Returns an unsigned 16bit integer value.
     */
    getUint16WithDefaultEncoding: function () {
        // var offset = this.offset;
        // this.offset += 2;
        // return this.stream.getUint16(offset, this.littleEndian);

        var offset = this.offset;
        this.offset += 2;

        if (this.littleEndian) {
            return (this.stream[offset] & 0xFF) |
                ((this.stream[offset + 1] & 0xFF) << 8);
        } else {
            return (this.stream[offset + 1] & 0xFF) |
                ((this.stream[offset] & 0xFF) << 8);
        }
    },

    /**
     * Reads an unsigned 32bit integer from the stream.
     *
     * @method getUint32WithDefaultEncoding
     * @return {Number} Returns an unsigned 32bit integer value.
     */
    getUint32WithDefaultEncoding: function () {

        //  var offset = this.offset;
        //  this.offset += 4;
        // return this.stream.getUint32(offset, this.littleEndian);
        var offset = this.offset,
            r;
        this.offset += 4;

        if (this.littleEndian) {
            r = (this.stream[offset + 0] & 0xFF) |
                ((this.stream[offset + 1] & 0xFF) << 8) |
                ((this.stream[offset + 2] & 0xFF) << 16) |
                ((this.stream[offset + 3] & 0xFF) << 24);

        } else {
            r = (this.stream[offset + 3] & 0xFF) |
                ((this.stream[offset + 2] & 0xFF) << 8) |
                ((this.stream[offset + 1] & 0xFF) << 16) |
                ((this.stream[offset + 0] & 0xFF) << 24);
        }
        if (r & 0x80000000) {
            r = (r & 0x7FFFFFFF) + 0x80000000;
        }

        return r;
    },

    /**
     * Reads a signed 8bit integer from the stream.
     *
     * @method getInt8WithDefaultEncoding
     * @return {Number} Returns a signed 8bit integer value.
     */
    getInt8WithDefaultEncoding: function () {
        //  var offset = this.offset;
        //  this.offset += 1;
        //  return this.stream.getInt8(offset, this.littleEndian);
        var s = this.stream[this.offset] & 0xFF;
        this.offset++;
        return (s ^ 0x80) - 0x80;
    },

    /**
     * Reads a signed 16bit integer from the stream.
     *
     * @method getInt16WithDefaultEncoding
     * @return {Number} Returns a signed 16bit integer value.
     */
    getInt16WithDefaultEncoding: function () {
        //   var offset = this.offset;
        //  this.offset += 2;
        // return this.stream.getInt16(offset, this.littleEndian);
        var r;
        var offset = this.offset;
        this.offset += 2;

        if (this.littleEndian) {
            r = (this.stream[offset] & 0xFF) |
                ((this.stream[offset + 1] & 0xFF) << 8);
        } else {
            r = (this.stream[offset + 1] & 0xFF) |
                ((this.stream[offset] & 0xFF) << 8);
        }
        return (r ^ 0x8000) - 0x8000;
    },

    /**
     * Reads a signed 32bit integer from the stream.
     *
     * @method getInt32WithDefaultEncoding
     * @return {Number} Returns a signed 32bit integer value.
     */
    getInt32WithDefaultEncoding: function () {
        // var offset = this.offset;
        // this.offset += 4;
        // return this.stream.getInt32(offset, this.littleEndian);

        var offset = this.offset;
        this.offset += 4;

        if (this.littleEndian) {
            return (this.stream[offset + 0] & 0xFF) |
                ((this.stream[offset + 1] & 0xFF) << 8) |
                ((this.stream[offset + 2] & 0xFF) << 16) |
                ((this.stream[offset + 3] & 0xFF) << 24);

        } else {
            return (this.stream[offset + 3] & 0xFF) |
                ((this.stream[offset + 2] & 0xFF) << 8) |
                ((this.stream[offset + 1] & 0xFF) << 16) |
                ((this.stream[offset + 0] & 0xFF) << 24);
        }
    },

    /**
     * Reads a 32bit floating point number from the stream.
     *
     * @method getFloat32WithDefaultEncoding
     * @return {Number} Returns a 32bit floating point number
     */
    getFloat32WithDefaultEncoding: function () {
        //  var offset = this.offset;
        // this.offset += 4;
        // return this.stream.getFloat32(offset, this.littleEndian);

        var s = this.stream; //this.readBytes(8);

        var offset = this.offset;
        var sn = 1;

        this.offset += 8;

        if (this.littleEndian) {
            offset += 7;
            sn = -1;
        }

        var sign = (s[offset + 0 * sn] & 0x80) >> 7;
        var exponent = ((s[offset + 0 * sn] & 0x7F) << 1) | ((s[offset + 1 * sn] & 0x80) >> 7);
        var fraction = ((s[offset + 1 * sn] & 0x7F) << 16) |
            ((s[offset + 2 * sn] & 0xFF) << 8) |
            (s[offset + 3 * sn] & 0xFF);

        sign = Math.pow(-1, sign);

        if (exponent === 255) {

            if (fraction !== 0) {
                return Number.NaN;
            } else if (sign < 0) {
                return -Infinity;
            } else {
                return Infinity;
            }
        } else if (exponent > 0) {
            return sign * Math.pow(2, exponent - 127) * (fraction / 0x800000 + 1);
        } else if (fraction !== 0) {
            return sign * Math.pow(2, -126) * (fraction / 0x800000);
        } else {
            return 0;
        }
    },

    /**
     * Reads a 64bit floating point number from the stream.
     *
     * @method getFloat64WithDefaultEncoding
     * @return {Number} Returns a 64bit floating point number
     */
    getFloat64WithDefaultEncoding: function () {

        //  var offset = this.offset;
        //  this.offset += 8;
        //  return this.stream.getFloat64(offset, this.littleEndian);

        var s = this.stream; //this.readBytes(8);
        var pow = Math.pow;

        var offset = this.offset;
        var sn = 1;
        this.offset += 8;

        if (this.littleEndian) {
            offset += 7;
            sn = -1;
        }

        var sign = (s[offset + 0 * sn] & 0x80) >> 7;
        var exponent = ((s[offset + 0 * sn] & 0x7F) << 4) | ((s[offset + 1 * sn] & 0xF0) >> 4);
        var fraction = ((s[offset + 1 * sn] & 0x0F) * pow(2, 48)) +
            s[offset + 2 * sn] * pow(2, 40) +
            s[offset + 3 * sn] * pow(2, 32) +
            ((s[offset + 4 * sn] & 0xFF) << 24) +
            ((s[offset + 5 * sn] & 0xFF) << 16) +
            ((s[offset + 6 * sn] & 0xFF) << 8) +
            s[offset + 7 * sn];

        sign = pow(-1, sign);

        if (exponent === 2047) {
            if (fraction !== 0) {
                return Number.NaN;
            } else if (sign < 0) {
                return -Infinity;
            } else {
                return Infinity;
            }
        } else if (exponent > 0) {
            return sign * Math.pow(2, exponent - 1023) * (fraction / 0x10000000000000 + 1);
        } else if (fraction !== 0) {
            return sign * Math.pow(2, -1022) * (fraction / 0x10000000000000);
        } else {
            return 0;
        }
    },

    /**
     * Reads an unsigned 8bit integer from the stream.
     *
     * @method getUint8WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns an unsigned 8bit integer value.
     */
    getUint8WithEncoding: function (littleEndian) {
        //var offset = this.offset;
        //this.offset += 1;
        //return this.stream.getUint8(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getUint8WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads an unsigned 16bit integer from the stream.
     *
     * @method getUint16WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns an unsigned 16bit integer value.
     */
    getUint16WithEncoding: function (littleEndian) {
        // var offset = this.offset;
        // this.offset += 2;
        // return this.stream.getUint16(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getUint16WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads an unsigned 32bit integer from the stream.
     *
     * @method getUint32WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns an unsigned 32bit integer value.
     */
    getUint32WithEncoding: function (littleEndian) {
        // var offset = this.offset;
        // this.offset += 4;
        // return this.stream.getUint32(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getUint32WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads a signed 8bit integer from the stream.
     *
     * @method getInt8WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a signed 8bit integer value.
     */
    getInt8WithEncoding: function (littleEndian) {
        //  var offset = this.offset;
        //  this.offset += 1;
        //  return this.stream.getInt8(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getInt8WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads a signed 16bit integer from the stream.
     *
     * @method getInt16WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a signed 16bit integer value.
     */
    getInt16WithEncoding: function (littleEndian) {
        // var offset = this.offset;
        // this.offset += 2;
        // return this.stream.getInt16(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getInt16WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads a signed 32bit integer from the stream.
     *
     * @method getInt32WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a signed 32bit integer value.
     */
    getInt32WithEncoding: function (littleEndian) {
        // var offset = this.offset;
        // this.offset += 4;
        // return this.stream.getInt32(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getInt32WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads a 32bit floating point number from the stream.
     *
     * @method getFloat32WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a 32bit floating point number
     */
    getFloat32WithEncoding: function (littleEndian) {
        //  var offset = this.offset;
        //  this.offset += 4;
        //  return this.stream.getFloat32(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getFloat32WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads a 64bit floating point number from the stream.
     *
     * @method getFloat64WithEncoding
     * @param {Boolean} [littleEndian] Read data in little endian byte order.
     * @return {Number} Returns a 64bit floating point number
     */
    getFloat64WithEncoding: function (littleEndian) {
        //  var offset = this.offset;
        //  this.offset += 8;
        //  return this.stream.getFloat64(offset, littleEndian);
        var enc = this.littleEndian;
        this.littleEndian = littleEndian;
        var r = this.getFloat64WithDefaultEncoding();
        this.littleEndian = enc;
        return r;
    },

    /**
     * Reads an unsigned 8bit integer from the stream.
     *
     * @method getUint8
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns an unsigned 8bit integer value.
     */
    getUint8: function (offset, littleEndian) {

        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 1;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getUint8(offset, littleEndian);

        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getUint8WithEncoding(littleEndian);
        } else {
            r = this.getUint8WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;

    },

    /**
     * Reads an unsigned 16bit integer from the stream.
     *
     * @method getUint16
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns an unsigned 16bit integer value.
     */
    getUint16: function (offset, littleEndian) {

        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 2;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getUint16(offset, littleEndian);

        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getUint16WithEncoding(littleEndian);
        } else {
            r = this.getUint16WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;

    },

    /**
     * Reads an unsigned 32bit integer from the stream.
     *
     * @method getUint32
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns an unsigned 32bit integer value.
     */
    getUint32: function (offset, littleEndian) {
        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 4;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getUint32(offset, littleEndian);

        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getUint32WithEncoding(littleEndian);
        } else {
            r = this.getUint32WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;
    },

    /**
     * Reads a signed 8bit integer from the stream.
     *
     * @method getInt8
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a signed 8bit integer value.
     */
    getInt8: function (offset, littleEndian) {
        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 1;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getInt8(offset, littleEndian);

        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getInt8WithEncoding(littleEndian);
        } else {
            r = this.getInt8WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;
    },

    /**
     * Reads a signed 16bit integer from the stream.
     *
     * @method getInt16
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a signed 16bit integer value.
     */
    getInt16: function (offset, littleEndian) {
        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 2;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getInt16(offset, littleEndian);

        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getInt16WithEncoding(littleEndian);
        } else {
            r = this.getInt16WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;
    },

    /**
     * Reads a signed 32bit integer from the stream.
     *
     * @method getInt32
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a signed 32bit integer value.
     */
    getInt32: function (offset, littleEndian) {
        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 4;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getInt32(offset, littleEndian);

        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getInt32WithEncoding(littleEndian);
        } else {
            r = this.getInt32WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;
    },

    /**
     * Reads a 32bit floating point number from the stream.
     *
     * @method getFloat32
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a 32bit floating point number
     */
    getFloat32: function (offset, littleEndian) {
        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 4;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getFloat32(offset, littleEndian);
        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getFloat32WithEncoding(littleEndian);
        } else {
            r = this.getFloat32WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;
    },

    /**
     * Reads a 64bit floating point number from the stream.
     *
     * @method getFloat64
     * @param {Number|Boolean|Null|Undefined} [offset] Position from which to start reading. If omitted, current position in stream will be used. If you pass Boolean value for this parameter, the passed value will be used for the little endian byte order parameter.
     * @param {Boolean} [littleEndian] Read data in little endian byte order. If omitted, the value used to initialize this class will be used instead.
     * @return {Number} Returns a 64bit floating point number
     */
    getFloat64: function (offset, littleEndian) {
        //        if (typeof offset !== 'number')
        //        {
        //            littleEndian = (typeof offset === 'boolean' ? offset : this.littleEndian);
        //            offset = this.offset;
        //            this.offset += 8;
        //        }
        //        else if (typeof littleEndian !== 'boolean')
        //        {
        //            littleEndian = this.littleEndian;
        //        }
        //
        //        return this.stream.getFloat64(offset, littleEndian);
        var r;
        var oldOffset = -1;

        if (typeof offset === 'number') {
            oldOffset = this.offset;
            this.offset = offset;
        }

        if (typeof littleEndian === 'boolean') {
            r = this.getFloat64WithEncoding(littleEndian);
        } else {
            r = this.getFloat64WithDefaultEncoding();
        }

        if (oldOffset > 0) {
            this.offset = oldOffset;
        }

        return r;
    },

    /**
     * Moves the current position in stream
     *
     * @method skip
     * @param {Number} [offset] How many bytes to skip. Negative value will move the position backwards.
     */
    skip: function (offset) {
        this.offset += offset;
    },

    /**
     * Moves the current position forward by 8bits (1byte)
     *
     * @method skipInt8
     */
    skipInt8: function () {
        this.skip(1);
    },

    /**
     * Moves the current position forward by 16bits (2bytes)
     *
     * @method skipInt16
     */
    skipInt16: function () {
        this.skip(2);
    },

    /**
     * Moves the current position forward by 32bits (4byte)
     *
     * @method skipInt32
     */
    skipInt32: function () {
        this.skip(4);
    }
});

/**
 * Gets matching tiles based on tile index and zoom level range
 *
 * @method getMatchingTiles
 * @param {Integer} inputTileIndex Input tile index
 * @param {Integer} inputZoomLevel Input zoom level
 * @param {Integer} outputZoomLevel Output zoom level
 * @return {Array of Integers} Returns list of tile indices
 */
Util.getMatchingTiles = function (inputTileIndex, inputZoomLevel, outputZoomLevel) {

    var outputIndices = [];

    if (inputZoomLevel < outputZoomLevel) {

        var numberOfTiles = 1 << ((outputZoomLevel - inputZoomLevel) << 1);

        for (var i = 0; i < numberOfTiles; i++) {
            outputIndices.push((inputTileIndex * numberOfTiles) + i);
        }

    } else if (inputZoomLevel > outputZoomLevel) {

        //var toAdd = inputTileIndex >> ((inputZoomLevel - outputZoomLevel) << 1);
        var toAdd = Math.floor(inputTileIndex / Math.pow(4, inputZoomLevel - outputZoomLevel));

        outputIndices.push(toAdd);

    } else {

        outputIndices.push(inputTileIndex);
    }

    return outputIndices;
};

Util.guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

Util.isNode = function () {
    return typeof window === 'undefined';
};

Util.geo = {
    polygonFeatureAt: function (layer, tileX, tileY) {
        for (var j = 0; j < layer.features.length; j++) {
            var bbox = layer.features[j].boundingBox;

            if (tileX >= bbox.left && tileX <= bbox.right && tileY >= bbox.top && tileY <= bbox.bottom) {
                var cuts = 0;
                for (var k = 0; k < layer.features[j].parts.length; k++) {
                    cuts += this.pointInPolygon(layer.features[j].parts[k], tileX, tileY);
                }

                if (cuts > 0 && cuts % 2 !== 0) {
                    var featureId = layer.features[j].featureId;

                    return featureId;
                }
            }
        }
    },

    pointInPolygon: function (polyVec, x, y) {
        var i = 0;
        var j = 0;
        var c = 0;
        var npol = polyVec.length;

        for (i = 0, j = npol - 2; i < npol;) {
            var ix = polyVec[i];
            var iy = polyVec[i + 1];
            var jx = polyVec[j];
            var jy = polyVec[j + 1];

            if ((((iy <= y) && (y < jy)) || ((jy <= y) && (y < iy))) &&
                (x < (jx - ix) * (y - iy) / (jy - iy) + ix)) {
                c++;
            }

            j = i;
            i += 2;
        }

        return c;

    },
    pointToLineSegmentMinDistance: function (x, y, x1, y1, x2, y2) {

        //http://paulbourke.net/geometry/pointline/
        //http://www.allegro.cc/forums/thread/589720

        //(x1,y1) and (x2,y2) are any two(non-coinciding) points on the line. There is no order requirement.

        var A = x - x1;
        var B = y - y1;
        var C = x2 - x1;
        var D = y2 - y1;

        var dot = A * C + B * D;
        var lenSq = C * C + D * D;
        var param = dot / lenSq;

        var xx;
        var yy;

        if (param < 0) {
            xx = x1;
            yy = y1;
        } else if (param > 1) {
            xx = x2;
            yy = y2;
        } else {
            xx = x1 + param * C;
            yy = y1 + param * D;
        }

        // distance formula:
        return Math.sqrt((x - xx) * (x - xx) + (y - yy) * (y - yy));

    },

    lineFeatureAt: function (layer, tileX, tileY) {
        var j,
            k,
            i,
            bbox,
            cuts,
            part;

        for (j = 0; j < layer.features.length; j++) {
            bbox = layer.features[j].boundingBox;
            if (tileX >= bbox.left && tileX <= bbox.right && tileY >= bbox.top && tileY <= bbox.bottom) {
                cuts = 0;
                for (k = 0; k < layer.features[j].parts.length; k++) {
                    part = layer.features[j].parts[k];

                    for (i = 0; i < part.length - 3; i += 2) {
                        if (this.pointToLineSegmentMinDistance(tileX, tileY, part[i], part[i + 1], part[i + 2], part[i + 3]) < 2) {
                            return layer.features[j].featureId;
                        }
                    }
                }
            }
        }
    }
};

module.exports = Util;

},{"./class":"/home/senadu/projects/Renderer-Cheetah/src/class.js"}]},{},["/home/senadu/projects/Renderer-Cheetah/src/mapspice.js"])("/home/senadu/projects/Renderer-Cheetah/src/mapspice.js")
});
//

//# sourceMappingURL=mapspice.js.map