import{d as q,bc as A,a as N,c as w,x as k,R,be as S,o as c,e as _,g as e,w as s,j as o,H as E,h,f as t,bs as F,K as L,L as G,q as U,m as H,n as J,bt as K,a0 as M,s as m,I as W,y as O}from"./entry.f4bf1c86.js";import{_ as Q,a as X}from"./BaseDropdown.vue.661c836e.js";import{_ as Y}from"./BaseDropdownDivider.c2c35431.js";import{_ as Z}from"./BaseAvatarGroup.vue.e7453227.js";import{_ as ee}from"./BasePagination.vue.467868ac.js";import{_ as te}from"./TairoContentWrapper.vue.079a8c1a.js";import{u as se}from"./fetch.93c508fb.js";import{_ as ae,a as oe}from"./placeholder-search-7-dark.acd16c07.js";import"./menu.91b3c662.js";import"./use-tracked-pointer.abd41ddd.js";import"./use-tree-walker.0ceec143.js";import"./use-resolve-button-type.1e6f4538.js";import"./use-text-value.85bb8387.js";const ne=t("span",null,"Create",-1),le={key:0},ce=t("img",{class:"block dark:hidden",src:ae,alt:"Placeholder image"},null,-1),re=t("img",{class:"hidden dark:block",src:oe,alt:"Placeholder image"},null,-1),ie={key:1},de={class:"ltablet:grid-cols-3 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"},_e={class:"mb-3 flex items-center gap-3"},me={class:"leading-none"},ue={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"},pe={class:"text-muted-400 font-sans text-xs"},he={class:"ms-auto"},fe=["src","alt"],ge={class:"my-4 flex items-center justify-between"},ve={class:"text-muted-800 dark:text-muted-100 font-sans text-base font-medium"},xe={class:"text-muted-400 flex items-center gap-1"},we={class:"font-sans text-sm"},ke={class:"flex items-center gap-2"},ye={class:"mt-6"},Fe=q({__name:"card-grid-2",async setup(be){let r,f;const y=A(),b=N(),g=w(()=>parseInt(y.query.page??"1")),l=k(""),u=k(12);R([l,u],()=>{b.push({query:{page:void 0}})});const B=w(()=>({filter:l.value,perPage:u.value,page:g.value})),{data:p,pending:$,error:Be,refresh:$e}=([r,f]=S(()=>se("/api/company/projects/",{query:B},"$ozJmvajvkj")),r=await r,f(),r);return(je,v)=>{const j=U,i=H,n=J,D=K,P=W,d=Q,x=Y,C=X,V=Z,z=O,I=ee,T=te;return c(),_("div",null,[e(T,null,{left:s(()=>[e(j,{modelValue:o(l),"onUpdate:modelValue":v[0]||(v[0]=a=>E(l)?l.value=a:null),icon:"lucide:search",shape:"full",placeholder:"Filter projects...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:s(()=>[e(i,{shape:"curved",class:"w-full sm:w-32"},{default:s(()=>[h("Settings")]),_:1}),e(i,{shape:"curved",color:"primary",class:"w-full sm:w-32"},{default:s(()=>[e(n,{name:"lucide:plus",class:"h-4 w-4"}),ne]),_:1})]),default:s(()=>[t("div",null,[!o($)&&o(p)?.data.length===0?(c(),_("div",le,[e(D,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:s(()=>[ce,re]),_:1})])):(c(),_("div",ie,[t("div",de,[e(F,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:s(()=>[(c(!0),_(L,null,G(o(p)?.data,a=>(c(),M(z,{key:a.id,shape:"curved",class:"p-4"},{default:s(()=>[t("div",_e,[e(P,{src:a.owner.avatar,text:a.owner.initials,size:"xs",class:"bg-muted-500/20 text-muted-500"},null,8,["src","text"]),t("div",me,[t("h4",ue,m(a.owner.name),1),t("p",pe," Updated "+m(a.updated),1)]),t("div",he,[e(C,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:s(()=>[e(d,{to:"#",title:"Edit",text:"Edit this project"},{start:s(()=>[e(n,{name:"ph:pencil-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(x),e(d,{to:"#",title:"Permissions",text:"Manage permissions"},{start:s(()=>[e(n,{name:"ph:lock-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(d,{to:"#",title:"Share",text:"Share this project"},{start:s(()=>[e(n,{name:"ph:share-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(x),e(d,{to:"#",title:"Delete",text:"Delete this project"},{start:s(()=>[e(n,{name:"ph:trash-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])]),t("div",null,[t("img",{src:a.image,alt:a.name,class:"rounded-lg"},null,8,fe)]),t("div",ge,[t("div",null,[t("h4",ve,m(a.name),1),t("div",xe,[e(n,{name:"ph:calendar-blank-duotone",class:"h-4 w-4"}),t("p",we,m(a.dueDate),1)])]),t("div",null,[e(V,{size:"xs",limit:2,avatars:a.team},null,8,["avatars"])])]),t("div",ke,[e(i,{shape:"curved",class:"w-full"},{default:s(()=>[h("Tasks")]),_:1}),e(i,{shape:"curved",class:"w-full"},{default:s(()=>[h(" Activity ")]),_:1})])]),_:2},1024))),128))]),_:1})]),t("div",ye,[e(I,{"total-items":o(p)?.total??0,"item-per-page":o(u),"current-page":o(g),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])]))])]),_:1})])}}});export{Fe as default};