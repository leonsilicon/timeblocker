import{a as u,b as o,l as e,F as n,q as p,t as y,r as x,o as i,e as b,v as c,x as _,y as f,z as h}from"./vendor.23f03d93.js";import{u as g}from"./index.77d72341.js";const k=e("div",{class:"mb-2 text-center text-5xl font-bold"},"timeblocker.io",-1),v=e("div",{class:"max-w-2xl px-8 text-center"},' Timeblocking is a way to manage your time more efficiently and effectively by chunking the hours in a day into "blocks," and assigning a single task to each of these blocks. ',-1),w={class:"row mx-auto mb-8 max-w-5xl items-stretch gap-4 px-8"},C={class:"text-bold text-center text-xl"},S={clkss:"text-gray-500 text-sm text-cente"},j=u({setup(T){const s=y(),a=g();async function r(){a.isLoggedIn?await s.push("/timeblocks"):await s.push("/register")}const l=[{title:"Synchronized",description:"Access your timeblocks from any internet-connected device, at any time.",icon:_},{title:"Intuitive UI",description:"The easy drag-and-drop UI makes it effortless to plan out your day.",icon:f},{title:"Multiple Columns",description:"Supports multiple columns so you can restructure your day around interruptions.",icon:h}];return(I,V)=>{const m=x("v-icon");return i(),o(n,null,[e("div",{class:"column items-center py-16"},[k,v,e("button",{class:"btn btn-primary btn-sm mt-4",onClick:r}," Create Timeblock ")]),e("div",w,[(i(),o(n,null,p(l,(t,d)=>e("div",{key:d,class:"column flex-1"},[b(m,{class:"self-center pb-4",size:"70",icon:t.icon},null,8,["icon"]),e("h1",C,c(t.title),1),e("p",S,c(t.description),1)])),64))])],64)}}});export{j as default};