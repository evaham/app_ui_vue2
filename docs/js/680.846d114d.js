"use strict";(self["webpackChunkapp_ui_vue2"]=self["webpackChunkapp_ui_vue2"]||[]).push([[680],{9254:function(t,e,i){var n=i(2109),s=i(4230),r=i(3429);n({target:"String",proto:!0,forced:r("link")},{link:function(t){return s(this,"a","href",t)}})},680:function(t,e,i){i.d(e,{Z:function(){return x}});var n=i(9726),s=i(5200),r=i(4367),o=(i(9253),i(9653),i(1539),i(6699),i(8862),i(5648)),a=(i(2222),i(8083)),l=i(6952),c=i(4589),u=l.Z.extend({name:"v-progress-circular",directives:{intersect:a.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:(0,c.kb)(this.calculatedSize),width:(0,c.kb)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=u,d=i(7352),p=i(2936),v=i(3377),f=i(3536),m=i(6505),b=i(9131),g=i(3325),y=i(1824),_=(0,g.Z)(o.Z,m.Z,f.Z,b.Z,(0,d.d)("btnToggle"),(0,p.d)("inputValue")),x=_.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({"v-btn":!0},m.Z.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return v.Z.options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return(0,r.Z)({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=(0,s.Z)(e,2),n=i[0],r=i[1];t.$attrs.hasOwnProperty(n)&&(0,y.fK)(n,r,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),s=i.tag,r=i.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes((0,n.Z)(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:o(this.color,r),e)}})},3385:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(4367),s=i(6210),r=i(6952),o=i(3377),a=i(2529),l=i(3712),c=i(8085),u=i(3325),h=(0,u.Z)(s.Z,r.Z,o.Z,a.Z,l.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,n.Z)((0,n.Z)((0,n.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var n=i(3385);e["Z"]=n.Z},8083:function(t,e,i){var n=i(9726);i(1539);function s(t,e,i){if("undefined"!==typeof window&&"IntersectionObserver"in window){var s=e.modifiers||{},o=e.value,a="object"===(0,n.Z)(o)?o:{handler:o,options:{}},l=a.handler,c=a.options,u=new IntersectionObserver((function(){var n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,c=null==(n=t._observe)?void 0:n[i.context._uid];if(c){var u=o.some((function(t){return t.isIntersecting}));!l||s.quiet&&!c.init||s.once&&!u&&!c.init||l(o,a,u),u&&s.once?r(t,e,i):c.init=!0}}),c);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:u},u.observe(t)}}function r(t,e,i){var n,s=null==(n=t._observe)?void 0:n[i.context._uid];s&&(s.observer.unobserve(t),delete t._observe[i.context._uid])}var o={inserted:s,unbind:r};e["Z"]=o},6286:function(t,e,i){i.d(e,{Z:function(){return Z}});i(8309),i(2222),i(9653);var n=i(4589),s=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}var l=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,s=0;if(!a(t)){var r=e.getBoundingClientRect(),l=o(t)?t.touches[t.touches.length-1]:t;n=l.clientX-r.left,s=l.clientY-r.top}var c=0,u=.3;e._ripple&&e._ripple.circle?(u=.15,c=e.clientWidth/2,c=i.center?c:c+Math.sqrt(Math.pow(n-c,2)+Math.pow(s-c,2))/4):c=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var h="".concat((e.clientWidth-2*c)/2,"px"),d="".concat((e.clientHeight-2*c)/2,"px"),p=i.center?h:"".concat(n-c,"px"),v=i.center?d:"".concat(s-c,"px");return{radius:c,scale:u,x:p,y:v,centerX:h,centerY:d}},c={show:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var o=l(t,e,i),a=o.radius,c=o.scale,u=o.x,h=o.y,d=o.centerX,p=o.centerY,v="".concat(2*a,"px");s.className="v-ripple__animation",s.style.width=v,s.style.height=v,e.appendChild(n);var f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,"translate(".concat(u,", ").concat(h,") scale3d(").concat(c,",").concat(c,",").concat(c,")")),s.dataset.activated=String(performance.now()),setTimeout((function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,"translate(".concat(d,", ").concat(p,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),s=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),s)}}}}};function u(t){return"undefined"===typeof t||!!t}function h(t){var e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),o(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){c.show(t,i,e)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),s)}else c.show(t,i,e)}}function d(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){d(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function p(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var v=!1;function f(t){v||t.keyCode!==n.Do.enter&&t.keyCode!==n.Do.space||(v=!0,h(t))}function m(t){v=!1,d(t)}function b(t){!0===v&&(v=!1,d(t))}function g(t,e,i){var n=u(e.value);n||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),n&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",f),t.addEventListener("keyup",m),t.addEventListener("blur",b),t.addEventListener("dragstart",d,{passive:!0})):!n&&i&&y(t)}function y(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",f),t.removeEventListener("keyup",m),t.removeEventListener("dragstart",d),t.removeEventListener("blur",b)}function _(t,e,i){g(t,e,!1)}function x(t){delete t._ripple,y(t)}function w(t,e){if(e.value!==e.oldValue){var i=u(e.oldValue);g(t,e,i)}}var C={bind:_,unbind:x,update:w},Z=C},3377:function(t,e,i){var n=i(3796),s=(i(9653),i(144));e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,n.Z)({},"elevation-".concat(this.elevation),!0)}}})},7352:function(t,e,i){i.d(e,{d:function(){return r}});var n=i(3796),s=i(6257);function r(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(0,n.Z)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}r("itemGroup")},2529:function(t,e,i){i(9653);var n=i(4589),s=i(144);e["Z"]=s.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),s=(0,n.kb)(this.minWidth),r=(0,n.kb)(this.maxHeight),o=(0,n.kb)(this.maxWidth),a=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),s&&(t.minWidth=s),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},6257:function(t,e,i){i.d(e,{f:function(){return a}});var n=i(3796),s=(i(2222),i(144)),r=i(1824);function o(t,e){return function(){return(0,r.Kd)("The ".concat(t," component must be used inside a ").concat(e))}}function a(t,e,i){var r=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:(0,n.Z)({},t,{default:r})})}},3712:function(t,e,i){var n=i(3796),s=i(2032),r=(i(4916),i(3123),i(9600),i(144));e["Z"]=r.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var i,r=e.split(" "),o=(0,s.Z)(r);try{for(o.s();!(i=o.n()).done;){var a=i.value;t.push("rounded-".concat(a))}}catch(l){o.e(l)}finally{o.f()}}else e&&t.push("rounded");return t.length>0?(0,n.Z)({},t.join(" "),!0):{}}}})},6505:function(t,e,i){var n=i(3796),s=i(4367),r=(i(9254),i(3210),i(2222),i(4916),i(5306),i(144)),o=i(6286),a=i(4589);e["Z"]=r.Z.extend({name:"routable",directives:{Ripple:o.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,i=this.exact,r=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},(0,n.Z)(t,this.to?"nativeOn":"on",(0,s.Z)((0,s.Z)({},this.$listeners),"click"in this?{click:this.click}:void 0)),(0,n.Z)(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(r.props,{to:this.to,exact:i,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(r.attrs.href=this.href);return this.target&&(r.attrs.target=this.target),{tag:e,data:r}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),i="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,n="_vnode.data.class."+(this.exact?i:e);this.$nextTick((function(){!(0,a.vO)(t.$refs.link,n)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return r}});var n=i(3796),s=i(144);function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return s.Z.extend({name:"toggleable",model:{prop:e,event:i},props:(0,n.Z)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},(0,n.Z)(t,e,(function(t){this.isActive=!!t})),(0,n.Z)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var o=r();e["Z"]=o},2032:function(t,e,i){i.d(e,{Z:function(){return s}});i(2526),i(1817),i(1539),i(2165),i(8783),i(3948),i(1703);var n=i(8936);function s(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.Z)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var s=0,r=function(){};return{s:r,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==i["return"]||i["return"]()}finally{if(l)throw o}}}}}}]);
//# sourceMappingURL=680.846d114d.js.map