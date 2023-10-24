import{d as $,bb as z,o as n,a as c,e,w as s,b as t,f as o,h,F as D,E,_ as P,q as C,k as F,bd as N,j as T,l as I,s as S,t as m}from"./entry.a9943f59.js";import{_ as j}from"./BaseDropdownDivider.911bef6b.js";import{_ as A,a as V}from"./BaseDropdown.vue.66c0804e.js";import{_ as L}from"./BaseButtonIcon.vue.8de8044d.js";import{_ as q}from"./TairoFormGroup.vue.f3946161.js";import{_ as G}from"./TairoFormSave.vue.31d0cfab.js";import{u as H}from"./fetch.45bb61c5.js";import{_ as O,a as W}from"./placeholder-search-2-dark.5a219a99.js";import"./menu.514b356f.js";import"./use-tracked-pointer.bfe38733.js";import"./use-tree-walker.9361b7cd.js";import"./use-resolve-button-type.e1ace5a8.js";import"./use-text-value.b297714a.js";const J={class:"w-full pb-16"},K={class:"flex items-center justify-between p-4"},M={class:"flex items-center gap-2"},Q={class:"p-4"},R={key:0},U=t("img",{class:"block dark:hidden",src:O,alt:"Placeholder image"},null,-1),X=t("img",{class:"hidden dark:block",src:W,alt:"Placeholder image"},null,-1),Y={key:1,class:"mx-auto max-w-lg space-y-12 py-8"},Z={class:"space-y-8"},ee=["src","alt"],se={class:"ms-auto"},te={class:"border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"},oe={class:"bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full"},ae=t("span",null,"Add a new work experience item",-1),ne={class:"ms-auto"},$e=$({__name:"experience",async setup(ce){let i,p;const{data:u,pending:ie,error:re,refresh:le}=([i,p]=z(()=>H("/api/profile","$9D0DOn8fc9")),i=await i,p(),i);return(_e,de)=>{const l=P,x=C,_=F,w=N,d=T,g=j,r=I,f=A,b=V,y=L,k=q,v=S,B=G;return n(),c("form",J,[e(v,null,{default:s(()=>[t("div",K,[t("div",null,[e(l,{tag:"h2",size:"sm",weight:"medium",lead:"normal",class:"uppercase tracking-wider"},{default:s(()=>[o(" Work Experience ")]),_:1}),e(x,{size:"xs",class:"text-muted-400"},{default:s(()=>[o(" Edit your work experience info ")]),_:1})]),t("div",M,[e(_,{class:"w-24",to:"/layouts/profile"},{default:s(()=>[o("Cancel")]),_:1}),e(_,{color:"primary",class:"w-24"},{default:s(()=>[o("Save")]),_:1})])]),t("div",Q,[h(u)?(n(),c("div",Y,[e(k,{label:"Previous Experiences",sublabel:"This will help others assess your experience"},{default:s(()=>[t("div",Z,[(n(!0),c(D,null,E(h(u).personalInfo.experiences,a=>(n(),c("div",{key:a.company,class:"flex w-full items-center gap-2"},[t("img",{src:a.logo,alt:a.company,class:"border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"},null,8,ee),t("div",null,[e(l,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[o(m(a.company),1)]),_:2},1024),e(d,{size:"xs",class:"text-muted-400"},{default:s(()=>[t("span",null,m(a.period),1)]),_:2},1024),e(d,{size:"xs",class:"text-primary-500"},{default:s(()=>[t("span",null,m(a.position),1)]),_:2},1024)]),t("div",se,[e(b,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:s(()=>[e(g),e(f,{to:"#",title:"Edit",text:"Edit this experience"},{start:s(()=>[e(r,{name:"ph:pencil-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(f,{to:"#",title:"Delete",text:"Delete this experience"},{start:s(()=>[e(r,{name:"ph:trash-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])]))),128))]),t("div",te,[t("div",oe,[e(r,{name:"ph:suitcase-duotone",class:"h-5 w-5"})]),t("div",null,[e(l,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[o(" New Experience ")]),_:1}),e(d,{size:"xs",class:"text-muted-400"},{default:s(()=>[ae]),_:1})]),t("div",ne,[e(y,{shape:"full",size:"sm"},{default:s(()=>[e(r,{name:"lucide:plus",class:"h-4 w-4"})]),_:1})])])]),_:1})])):(n(),c("div",R,[e(w,{title:"No experiences",subtitle:"Looks like you didn't add any experience yet. Share your experience to improve your profile.",class:"scale-90"},{image:s(()=>[U,X]),default:s(()=>[e(_,{class:"mt-4 w-40"},{default:s(()=>[o("Add Experience")]),_:1})]),_:1})]))])]),_:1}),e(B)])}}});export{$e as default};
