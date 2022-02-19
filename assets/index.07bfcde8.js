import{d as _,a as m,c as f,b as g,r as h,o as y,e as v,f as E,g as L,s as k,h as I,Q as P,N as b,D as A,p as O,i as T}from"./vendor.7f3c978e.js";const S=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};S();function D(){return{isLoggedIn:void 0,accountId:void 0}}const R=_("app",{state:()=>D()});var l;(function(c){c.sessionToken="session-token"})(l||(l={}));const V={class:"h-full w-full","data-theme":"emerald"},j=m({setup(c){const r=R();return window.localStorage.getItem(l.sessionToken)===null?r.isLoggedIn=!1:r.isLoggedIn=!0,(o,e)=>{const t=h("router-view");return y(),f("div",V,[g(t)])}}});const w="modulepreload",u={},N="/",s=function(r,a){return!a||a.length===0?r():Promise.all(a.map(o=>{if(o=`${N}${o}`,o in u)return;u[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":w,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((p,d)=>{n.addEventListener("load",p),n.addEventListener("error",d)})})).then(()=>r())},x=[{path:"/",component:async()=>s(()=>import("./content-layout.d3d5ab8f.js"),["assets/content-layout.d3d5ab8f.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{path:"/",component:async()=>s(()=>import("./landing-page.0ce4dbc4.js"),["assets/landing-page.0ce4dbc4.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css"])},{path:"/login",component:async()=>s(()=>import("./entry-page.00a77716.js"),["assets/entry-page.00a77716.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css","assets/circle-spinner.d8ea7cf9.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/register",component:async()=>s(()=>import("./entry-page.00a77716.js"),["assets/entry-page.00a77716.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css","assets/circle-spinner.d8ea7cf9.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/:catchAll(.*)",component:async()=>s(()=>import("./404-page.efba7d32.js"),["assets/404-page.efba7d32.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css"])}]},{path:"/timeblocks",component:async()=>s(()=>import("./timeblock-list-page.c198054c.js"),["assets/timeblock-list-page.c198054c.js","assets/timeblock.ab3f1eff.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css","assets/circle-spinner.d8ea7cf9.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/timeblock/:id",component:async()=>s(()=>import("./timeblock-page.26219f20.js"),["assets/timeblock-page.26219f20.js","assets/vendor.7f3c978e.js","assets/vendor.41cdac3e.css","assets/timeblock.ab3f1eff.js","assets/circle-spinner.d8ea7cf9.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],C=v({history:E(),routes:x}),i=L(j);i.use(k);i.use(I);i.use(P,{plugins:{Notify:b,Dialog:A}});i.use(O);i.use(T());i.use(C);i.mount("#app");export{l as L,R as u};
