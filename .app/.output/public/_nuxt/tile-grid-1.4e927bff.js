import{d as T,bc as A,a as F,c as w,x,R as L,be as M,o as n,e as c,g as e,w as s,j as t,H as j,h as u,f as o,bs as H,K as U,L as E,S as G,q as K,m as O,n as W,bt as J,a0 as Q,s as k,I as X,_ as Y,l as Z,y as ee}from"./entry.adb22a9c.js";import{_ as se,a as te}from"./BaseDropdown.vue.b3fc75f6.js";import{_ as ae}from"./BaseDropdownDivider.b8bd02f4.js";import{_ as oe}from"./BasePagination.vue.633b4ba2.js";import{_ as ne}from"./TairoContentWrapper.vue.3ae99054.js";import{u as re}from"./fetch.b04ce66f.js";import{_ as le,a as ce}from"./placeholder-search-5-dark.422bec91.js";import"./menu.8fcc9f2f.js";import"./use-tracked-pointer.efb4822b.js";import"./use-tree-walker.1f1f2539.js";import"./use-resolve-button-type.1fcf5752.js";import"./use-text-value.d40d5d45.js";const ie=o("span",null,"Add User",-1),me={key:0},_e=o("img",{class:"block dark:hidden",src:le,alt:"Placeholder image"},null,-1),pe=o("img",{class:"hidden dark:block",src:ce,alt:"Placeholder image"},null,-1),ue={key:1,class:"ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"},de={class:"flex w-full items-center gap-2"},fe={class:"ms-auto"},he={key:2,class:"mt-4"},Ne=T({__name:"tile-grid-1",async setup(ge){let i,d;const b=A(),y=F(),f=w(()=>parseInt(b.query.page??"1")),r=x(""),p=x(18);L([r,p],()=>{y.push({query:{page:void 0}})});const B=w(()=>({filter:r.value,perPage:p.value,page:f.value})),{data:m,pending:h,error:ve,refresh:we}=([i,d]=M(()=>re("/api/company/members",{query:B},"$Ckp3k8Okfj")),i=await i,d(),i);return(xe,g)=>{const $=K,v=O,l=W,P=J,C=X,V=Y,D=Z,_=se,R=ae,z=te,I=ee,N=oe,S=ne;return n(),c("div",null,[e(S,null,{left:s(()=>[e($,{modelValue:t(r),"onUpdate:modelValue":g[0]||(g[0]=a=>j(r)?r.value=a:null),icon:"lucide:search",shape:"full",placeholder:"Filter users...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:s(()=>[e(v,{class:"w-full sm:w-32",shape:"full"},{default:s(()=>[u("Manage")]),_:1}),e(v,{color:"primary",class:"w-full sm:w-32",shape:"full"},{default:s(()=>[e(l,{name:"lucide:plus",class:"h-4 w-4"}),ie]),_:1})]),default:s(()=>[o("div",null,[!t(h)&&t(m)?.data.length===0?(n(),c("div",me,[e(P,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:s(()=>[_e,pe]),_:1})])):(n(),c("div",ue,[e(H,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:s(()=>[(n(!0),c(U,null,E(t(m)?.data,(a,q)=>(n(),Q(I,{key:q,shape:"curved",class:"p-3"},{default:s(()=>[o("div",de,[e(C,{size:"md",src:a.picture,"badge-src":a.badge,text:a.initials,class:"bg-success-100 text-success-400"},null,8,["src","badge-src","text"]),o("div",null,[e(V,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[u(k(a.username),1)]),_:2},1024),e(D,{size:"xs",class:"text-muted-400"},{default:s(()=>[u(k(a.position),1)]),_:2},1024)]),o("div",fe,[e(z,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:s(()=>[e(_,{to:"#",title:"Permissions",text:"Manage permissions"},{start:s(()=>[e(l,{name:"ph:lock-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(_,{to:"#",title:"Message",text:"Send a message"},{start:s(()=>[e(l,{name:"ph:chat-circle-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(_,{to:"#",title:"Share",text:"Share this profile"},{start:s(()=>[e(l,{name:"ph:share-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(R),e(_,{to:"#",title:"Remove",text:"Remove from list"},{start:s(()=>[e(l,{name:"ph:trash-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])])]),_:2},1024))),128))]),_:1})])),!t(h)&&t(m)?.data.length!==0?(n(),c("div",he,[e(N,{"total-items":t(m)?.total??0,"item-per-page":t(p),"current-page":t(f),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])):G("",!0)])]),_:1})])}}});export{Ne as default};
