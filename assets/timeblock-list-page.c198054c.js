import{u as _,m as w,a as $}from"./timeblock.ab3f1eff.js";import{a as v,z as g,n as h,m as L,r as y,o as i,c as l,j as o,t as j,A as B,b,u as k,B as D,D as N,F as M,C as S,l as T,k as I}from"./vendor.7f3c978e.js";import{c as f,C as V}from"./circle-spinner.d8ea7cf9.js";import"./index.07bfcde8.js";import"./plugin-vue_export-helper.21dcd24c.js";const z=o("div",{class:"flex-1 mr-auto"},null,-1),A={class:"flex-1"},F={class:"flex-1 ml-auto row justify-end"},O=["onClick"],P=v({props:{id:null,name:null},setup(m){const e=m;async function a(){N.create({message:`Are you sure you want to delete timeblock ${e.name}? This action is not reversible!`,cancel:!0,focus:"cancel",ok:{label:"Delete",color:"transparent",flat:!0,textColor:"red"}}).onOk(async()=>{await d()})}const u=_();async function d(){await f.mutation("deleteTimeblock",{timeblockId:e.id}),u.deleteTimeblock(e.id)}const s=g();async function c(){await s.push(`/timeblock/${e.id}`)}const t=h(!1),n=L(()=>{if(t.value)return"!bg-red-100 border-red-500"});return(p,r)=>{const x=y("v-icon");return i(),l("button",{class:D(["py-4 px-4 border-2 center row rounded-md border-primary cursor-pointer hover:scale-[1.01] hover:bg-green-100 transition-all",n.value]),onClick:c},[z,o("div",A,j(m.name),1),o("div",F,[o("button",{class:"hover:bg-red-300 rounded-full p-2 transition-all",onMouseover:r[0]||(r[0]=C=>t.value=!0),onMouseout:r[1]||(r[1]=C=>t.value=!1),onClick:B(a,["stop"])},[b(x,{icon:k(w),class:"text-red-600"},null,8,["icon"])],40,O)])],2)}}}),q={class:"column center p-8"},E=o("div",{class:"text-6xl font-bold mb-2"},"Timeblocks",-1),R={key:0,class:"row center p-4"},G=T(" Loading... "),H={key:1,class:"self-stretch column"},J=T(" Create New Timeblock "),K={class:"column self-stretch gap-4"},Z=v({setup(m){const e=_();let a=h(!0);(async()=>{const s=await f.query("listTimeblocks",{limit:10,skip:0});a.value=!1;for(const{id:c,name:t}of s)e.timeblockListings.some(n=>n.timeblockId===c)||e.addTimeblockListing({timeblockId:c,timeblockName:t})})();const u=g();async function d(){const{timeblockId:s}=await f.mutation("createTimeblock",{name:`My Timeblock ${e.timeblockListings.length+1}`});await u.push(`/timeblock/${s}`)}return(s,c)=>{const t=y("v-icon");return i(),l("div",q,[E,a.value===!0?(i(),l("div",R,[b(V,{class:"mr-2"}),G])):(i(),l("div",H,[o("div",{class:"btn btn-primary btn-sm self-center mb-4",onClick:d},[b(t,{icon:k($)},null,8,["icon"]),J]),o("div",K,[(i(!0),l(M,null,S(k(e).timeblockListings,({timeblockId:n,timeblockName:p})=>(i(),I(P,{id:n,key:n,name:p},null,8,["id","name"]))),128))])]))])}}});export{Z as default};