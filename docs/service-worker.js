if(!self.define){let u,s={};const e=(e,i)=>(e=new URL(e+".js",i).href,s[e]||new Promise((s=>{if("document"in self){const u=document.createElement("script");u.src=e,u.onload=s,document.head.appendChild(u)}else u=e,importScripts(e),s()})).then((()=>{let u=s[e];if(!u)throw new Error(`Module ${e} didn’t register its module`);return u})));self.define=(i,l)=>{const n=u||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const p=u=>e(u,n),a={module:{uri:n},exports:r,require:p};s[n]=Promise.all(i.map((u=>a[u]||p(u)))).then((u=>(l(...u),r)))}}define(["./workbox-2d118ab0"],(function(u){"use strict";u.setCacheNameDetails({prefix:"app_ui_vue2"}),self.addEventListener("message",(u=>{u.data&&"SKIP_WAITING"===u.data.type&&self.skipWaiting()})),u.precacheAndRoute([{url:"/app_ui_vue2/css/230.931ff42e.css",revision:null},{url:"/app_ui_vue2/css/245.c4aece79.css",revision:null},{url:"/app_ui_vue2/css/364.c6e641ea.css",revision:null},{url:"/app_ui_vue2/css/377.8a4d60db.css",revision:null},{url:"/app_ui_vue2/css/380.7fe8b9d5.css",revision:null},{url:"/app_ui_vue2/css/442.c6e641ea.css",revision:null},{url:"/app_ui_vue2/css/598.9c59542a.css",revision:null},{url:"/app_ui_vue2/css/617.2a4c0cb2.css",revision:null},{url:"/app_ui_vue2/css/805.50bf6c99.css",revision:null},{url:"/app_ui_vue2/css/chunk-vendors.c43af87b.css",revision:null},{url:"/app_ui_vue2/index.html",revision:"d0587382306d36e2839aafee78e76e1f"},{url:"/app_ui_vue2/js/230.d7b76f1e.js",revision:null},{url:"/app_ui_vue2/js/245.5461aae2.js",revision:null},{url:"/app_ui_vue2/js/364.2c1d719d.js",revision:null},{url:"/app_ui_vue2/js/377.d9ef3b58.js",revision:null},{url:"/app_ui_vue2/js/380.1fa77ea4.js",revision:null},{url:"/app_ui_vue2/js/442.003f6770.js",revision:null},{url:"/app_ui_vue2/js/502.9521e6ce.js",revision:null},{url:"/app_ui_vue2/js/545.f60bc221.js",revision:null},{url:"/app_ui_vue2/js/598.065f4faf.js",revision:null},{url:"/app_ui_vue2/js/617.5311426f.js",revision:null},{url:"/app_ui_vue2/js/68.4c5ed229.js",revision:null},{url:"/app_ui_vue2/js/732.87730c02.js",revision:null},{url:"/app_ui_vue2/js/805.188a57ba.js",revision:null},{url:"/app_ui_vue2/js/956.7c2f1350.js",revision:null},{url:"/app_ui_vue2/js/app.babda952.js",revision:null},{url:"/app_ui_vue2/js/chunk-vendors.2a6c1de6.js",revision:null},{url:"/app_ui_vue2/manifest.json",revision:"c294717b3a519e63b00ca5e9b9a801be"},{url:"/app_ui_vue2/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
