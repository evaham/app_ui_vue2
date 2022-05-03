(function(){"use strict";var e={8696:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(144),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view")],1)},i=[],u={name:"App",data:function(){return{}}},a=u,c=t(1001),f=t(3453),s=t.n(f),l=t(7524),d=(0,c.Z)(a,o,i,!1,null,null,null),p=d.exports;s()(d,{VApp:l.Z});var h=t(5205);(0,h.z)("".concat("/app_ui_vue2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t(1539),t(8783),t(3948);var m=t(8345);r.Z.use(m.Z);var v=[{path:"/",name:"DefaultLayout",component:function(){return t.e(956).then(t.bind(t,4956))},redirect:"/mainview",children:[{path:"/mainview",name:"MainView",component:function(){return Promise.all([t.e(545),t.e(895),t.e(339)]).then(t.bind(t,5339))}},{path:"/purchaselist",name:"PurchaseList",component:function(){return Promise.all([t.e(545),t.e(895),t.e(305),t.e(407),t.e(43),t.e(20)]).then(t.bind(t,8020))}},{path:"/purchaselistopt",name:"PurchaseListOpt",component:function(){return Promise.all([t.e(545),t.e(895),t.e(305),t.e(407),t.e(43),t.e(505)]).then(t.bind(t,8505))}},{path:"/purchaseview",name:"PurchaseView",component:function(){return Promise.all([t.e(545),t.e(895),t.e(305),t.e(407),t.e(732)]).then(t.bind(t,9440))}},{path:"/salegrouplist",name:"SaleGroupList",component:function(){return Promise.all([t.e(545),t.e(895),t.e(305),t.e(232)]).then(t.bind(t,246))}}]},{path:"/loading",name:"LoadingLayout",component:function(){return Promise.all([t.e(545),t.e(970)]).then(t.bind(t,2842))}}],g=new m.Z({mode:"history",base:"/app_ui_vue2/",routes:v}),b=g,y=t(629);r.Z.use(y.ZP);var w=new y.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),k=t(858),_=t(1846);r.Z.use(k.Z);var P=new k.Z({theme:{themes:{light:{primary:_.Z.yellow,secondary:_.Z.grey.darken3,accent:_.Z.amber}}}});r.Z.config.productionTip=!1,new r.Z({router:b,store:w,vuetify:P,render:function(e){return e(p)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{20:"e924bb76",43:"09231cf1",232:"6e2d15af",305:"05100808",339:"acc6f663",407:"db6254c6",505:"a1e80dcc",545:"7040094d",732:"eb18fc46",895:"213fa2e3",956:"7c2f1350",970:"e75dc3f8"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{43:"ba11283f",232:"c9d0f776",505:"c66baddc",732:"2efd1d04",895:"c68cbe60",970:"7f3a4a59"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="app_ui_vue2:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/app_ui_vue2/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={43:1,232:1,505:1,732:1,895:1,970:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkapp_ui_vue2"]=self["webpackChunkapp_ui_vue2"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8696)}));r=t.O(r)})();
//# sourceMappingURL=app.b09b603c.js.map