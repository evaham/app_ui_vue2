if(!self.define){let u,e={};const s=(s,i)=>(s=new URL(s+".js",i).href,e[s]||new Promise((e=>{if("document"in self){const u=document.createElement("script");u.src=s,u.onload=e,document.head.appendChild(u)}else u=s,importScripts(s),e()})).then((()=>{let u=e[s];if(!u)throw new Error(`Module ${s} didn’t register its module`);return u})));self.define=(i,l)=>{const n=u||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const p=u=>s(u,n),v={module:{uri:n},exports:r,require:p};e[n]=Promise.all(i.map((u=>v[u]||p(u)))).then((u=>(l(...u),r)))}}define(["./workbox-2d118ab0"],(function(u){"use strict";u.setCacheNameDetails({prefix:"app_ui_vue2"}),self.addEventListener("message",(u=>{u.data&&"SKIP_WAITING"===u.data.type&&self.skipWaiting()})),u.precacheAndRoute([{url:"/app_ui_vue2/css/162.09cb2105.css",revision:null},{url:"/app_ui_vue2/css/180.ef4e1579.css",revision:null},{url:"/app_ui_vue2/css/209.d0de6c6d.css",revision:null},{url:"/app_ui_vue2/css/211.474c8360.css",revision:null},{url:"/app_ui_vue2/css/480.143ef16d.css",revision:null},{url:"/app_ui_vue2/css/805.88265652.css",revision:null},{url:"/app_ui_vue2/css/806.74768968.css",revision:null},{url:"/app_ui_vue2/css/814.6f4040f4.css",revision:null},{url:"/app_ui_vue2/css/chunk-vendors.cdf66cdd.css",revision:null},{url:"/app_ui_vue2/index.html",revision:"5257733de728ae0ee03ffc5ee6c00d9d"},{url:"/app_ui_vue2/js/118.6a3f34e5.js",revision:null},{url:"/app_ui_vue2/js/162.7bf09e59.js",revision:null},{url:"/app_ui_vue2/js/180.e32aa978.js",revision:null},{url:"/app_ui_vue2/js/209.9c953a69.js",revision:null},{url:"/app_ui_vue2/js/211.bf4928af.js",revision:null},{url:"/app_ui_vue2/js/480.6e715e2c.js",revision:null},{url:"/app_ui_vue2/js/502.9521e6ce.js",revision:null},{url:"/app_ui_vue2/js/545.f60bc221.js",revision:null},{url:"/app_ui_vue2/js/559.20209d11.js",revision:null},{url:"/app_ui_vue2/js/68.4c5ed229.js",revision:null},{url:"/app_ui_vue2/js/805.a421935a.js",revision:null},{url:"/app_ui_vue2/js/806.494843bd.js",revision:null},{url:"/app_ui_vue2/js/814.604265ee.js",revision:null},{url:"/app_ui_vue2/js/956.7c2f1350.js",revision:null},{url:"/app_ui_vue2/js/app.5d111e65.js",revision:null},{url:"/app_ui_vue2/js/chunk-vendors.1f6592e7.js",revision:null},{url:"/app_ui_vue2/manifest.json",revision:"c294717b3a519e63b00ca5e9b9a801be"},{url:"/app_ui_vue2/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
