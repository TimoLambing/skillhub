import{_ as y}from"./BaseDropdownDivider.b8bd02f4.js";import{d as k,be as z,o as p,e as x,j as n,f as a,g as e,w as t,h as s,s as u,K as B,L as I,n as D,I as $,_ as j,l as P,v as S,p as C,y as N,a0 as M}from"./entry.adb22a9c.js";import{_ as E,a as T}from"./BaseDropdown.vue.b3fc75f6.js";import{u as L}from"./fetch.b04ce66f.js";import"./menu.8fcc9f2f.js";import"./use-tracked-pointer.efb4822b.js";import"./use-tree-walker.1f1f2539.js";import"./use-resolve-button-type.1fcf5752.js";import"./use-text-value.d40d5d45.js";const V={class:"mx-auto w-full max-w-5xl"},A={key:0},F={key:1,class:"relative w-full"},U={class:"absolute end-0 top-2 z-20"},G={class:"flex w-full flex-col"},H={class:"mx-auto w-full max-w-md text-center"},K={class:"divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x"},R={class:"text-muted-400 flex h-8 items-center gap-1 px-4"},q={class:"text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex"},J={class:"flex h-8 items-center gap-2 px-4"},O={class:"sr-only"},Q={class:"ltablet:grid-cols-5 mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5"},W={class:"text-center"},X={class:"text-center"},Y={class:"text-center"},Z={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},se={class:"text-center"},ae={class:"text-center"},oe={class:"text-center"},re={class:"text-center"},we=k({__name:"profile-settings",async setup(le){let m,v;const{data:c,pending:de,error:ie,refresh:ce}=([m,v]=z(()=>L("/api/profile","$RPxpPd6TEy")),m=await m,v(),m);return(ne,ue)=>{const f=y,o=D,_=E,g=T,b=$,l=j,w=P,r=S,d=C,i=N;return p(),x("div",V,[n(c)?(p(),x("div",F,[a("div",U,[e(g,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:t(()=>[e(f),e(_,{to:"/layouts/profile-edit",title:"Edit",text:"Edit profile"},{start:t(()=>[e(o,{name:"ph:pencil-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(f),e(_,{to:"#",title:"Security",text:"Security settings"},{start:t(()=>[e(o,{name:"ph:lock-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(_,{to:"#",title:"Billing",text:"Manage billing"},{start:t(()=>[e(o,{name:"ph:bank-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(f),e(_,{to:"#",title:"Share",text:"Share profile"},{start:t(()=>[e(o,{name:"ph:link-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})]),a("div",G,[e(b,{src:n(c)?.personalInfo.picture,"badge-src":n(c)?.personalInfo.badge,size:"2xl",class:"mx-auto"},null,8,["src","badge-src"]),a("div",H,[e(l,{tag:"h2",size:"xl",weight:"medium",class:"mt-4"},{default:t(()=>[s(u(n(c)?.personalInfo.firstName)+" "+u(n(c)?.personalInfo.lastName),1)]),_:1}),e(w,{size:"sm",class:"text-muted-400 mb-3 mt-1"},{default:t(()=>[s(u(n(c)?.personalInfo.shortBio),1)]),_:1}),a("div",K,[a("div",R,[e(o,{name:"ph:circles-three-duotone",class:"h-5 w-5"}),e(r,{size:"sm"},{default:t(()=>[s(u(n(c)?.personalInfo.relations)+"+ relations",1)]),_:1})]),a("div",q,[e(o,{name:"ph:check-circle-duotone",class:"h-5 w-5"}),e(r,{size:"sm"},{default:t(()=>[s(u(n(c)?.personalInfo.projects)+" projects",1)]),_:1})]),a("div",J,[(p(!0),x(B,null,I(n(c)?.personalInfo.socials,h=>(p(),M(d,{key:h.name,to:h.url,target:"_blank",rel:"noopener noreferrer",class:"border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"},{default:t(()=>[e(o,{name:h.icon,class:"h-3 w-3"},null,8,["name"]),a("span",O,u(h.name),1)]),_:2},1032,["to"]))),128))])])])]),a("div",Q,[e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",W,[e(o,{name:"ph:buildings-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"sm",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Company ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Manage company ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",X,[e(o,{name:"ph:users-four-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"sm",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Team ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Manage team ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",Y,[e(o,{name:"ph:briefcase-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"sm",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Projects ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Project settings ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",Z,[e(o,{name:"ph:lock-open-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Permissions ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Manage permissions ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",ee,[e(o,{name:"ph:note-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Documents ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Data privacy ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",te,[e(o,{name:"ph:upload-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Upload ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Upload settings ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",se,[e(o,{name:"ph:credit-card-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Billing ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Billing and plans ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",ae,[e(o,{name:"ph:chat-circle-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Messaging ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Chat settings ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",oe,[e(o,{name:"ph:shield-check-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Security ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" Security settings ")]),_:1})])]),_:1})]),_:1}),e(i,{shape:"curved","elevated-hover":"",class:"hover:!border-primary-500 group border-2"},{default:t(()=>[e(d,{to:"#",class:"block p-6"},{default:t(()=>[a("div",re,[e(o,{name:"ph:gear-six-duotone",class:"group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"}),e(l,{tag:"h3",size:"xs",weight:"semibold",class:"mt-2 !text-[0.65rem] uppercase"},{default:t(()=>[s(" Preferences ")]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[s(" General settings ")]),_:1})])]),_:1})]),_:1})])])):(p(),x("div",A))])}}});export{we as default};
