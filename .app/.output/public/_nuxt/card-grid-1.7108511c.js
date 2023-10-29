import{d as U,bc as z,a as A,c as h,x as g,R as D,be as S,o as r,e as c,g as s,w as a,j as o,H as x,f as e,bs as E,K as v,L as w,q as G,bt as H,a0 as b,s as _,h as K,I as W,n as Y,p as J,m as M,y as O}from"./entry.cb41b48b.js";import{_ as Q}from"./BaseSelect.vue.3855c259.js";import{_ as X}from"./BaseProgress.vue.1ee91cdc.js";import{_ as Z}from"./BasePagination.vue.cef4aac2.js";import{_ as ee}from"./TairoContentWrapper.vue.1b22c5da.js";import{u as te}from"./fetch.10a630f3.js";import{_ as se,a as ae}from"./placeholder-search-6-dark.483c5fff.js";import"./IconChevronDown.3bc3df00.js";const oe=e("option",{value:10},"10 per page",-1),re=e("option",{value:25},"25 per page",-1),ne=e("option",{value:50},"50 per page",-1),le=e("option",{value:100},"100 per page",-1),ce={key:0},ie=e("img",{class:"block dark:hidden",src:se,alt:"Placeholder image"},null,-1),de=e("img",{class:"hidden dark:block",src:ae,alt:"Placeholder image"},null,-1),me={key:1},ue={class:"ltablet:grid-cols-2 grid w-full gap-4 lg:grid-cols-2"},_e={class:"border-muted-200 dark:border-muted-700 flex flex-col items-center border-b p-6 sm:flex-row"},pe={class:"flex flex-col items-center gap-3 sm:flex-row"},fe={class:"text-center leading-none sm:text-left"},he={class:"text-muted-800 dark:text-muted-100 font-sans text-base font-medium"},ge={class:"text-muted-400 font-sans text-sm"},xe={class:"mt-4 flex items-center gap-3 sm:ms-auto sm:mt-0"},ve={class:"flex flex-col items-center justify-between px-6 py-4 sm:flex-row"},we={class:"w-full grow space-y-1 sm:w-auto sm:max-w-[260px]"},be={class:"flex items-center justify-between"},ye=e("h4",{class:"text-muted-700 dark:text-muted-100 font-sans text-sm font-medium"}," Progress ",-1),ke={class:"text-muted-400 font-sans text-sm"},Be={class:"mt-4 w-full sm:mt-0 sm:w-auto"},Pe={class:"mt-6"},ze=U({__name:"card-grid-1",async setup(Ve){let i,p;const y=z(),k=A(),f=h(()=>parseInt(y.query.page??"1")),l=g(""),n=g(10);D([l,n],()=>{k.push({query:{page:void 0}})});const B=h(()=>({filter:l.value,perPage:n.value,page:f.value})),{data:m,pending:P,error:$e,refresh:qe}=([i,p]=S(()=>te("/api/company/members/",{query:B},"$q3hloeDYUs")),i=await i,p(),i);return(Ce,d)=>{const V=G,$=Q,q=H,C=W,I=Y,N=J,j=X,L=M,R=O,T=Z,F=ee;return r(),c("div",null,[s(F,null,{left:a(()=>[s(V,{modelValue:o(l),"onUpdate:modelValue":d[0]||(d[0]=t=>x(l)?l.value=t:null),icon:"lucide:search",placeholder:"Filter users...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:a(()=>[s($,{modelValue:o(n),"onUpdate:modelValue":d[1]||(d[1]=t=>x(n)?n.value=t:null),placeholder:"Items per page",label:"",classes:{wrapper:"w-full sm:w-40"}},{default:a(()=>[oe,re,ne,le]),_:1},8,["modelValue"])]),default:a(()=>[e("div",null,[!o(P)&&o(m)?.data.length===0?(r(),c("div",ce,[s(q,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[ie,de]),_:1})])):(r(),c("div",me,[e("div",ue,[s(E,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(r(!0),c(v,null,w(o(m)?.data,t=>(r(),b(R,{key:t.id},{default:a(()=>[e("div",_e,[e("div",pe,[s(C,{src:t.picture,"badge-src":t.badge,text:t.initials,size:"xl",class:"bg-muted-500/20 text-muted-500"},null,8,["src","badge-src","text"]),e("div",fe,[e("h4",he,_(t.username),1),e("p",ge,_(t.position),1)])]),e("div",xe,[(r(!0),c(v,null,w(t.socialProfiles,u=>(r(),b(N,{key:u.name,to:u.url,target:"_blank",rel:"noopener noreferrer",class:"border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-700/30 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg transition-all duration-300"},{default:a(()=>[s(I,{name:u.icon,class:"h-3 w-3"},null,8,["name"])]),_:2},1032,["to"]))),128))])]),e("div",ve,[e("div",we,[e("div",be,[ye,e("div",null,[e("span",ke,_(t.completed)+"% ",1)])]),s(j,{size:"xs",color:"primary",value:t.completed},null,8,["value"])]),e("div",Be,[s(L,{class:"w-full sm:w-auto"},{default:a(()=>[K(" View profile ")]),_:1})])])]),_:2},1024))),128))]),_:1})]),e("div",Pe,[s(T,{"total-items":o(m)?.total??0,"item-per-page":o(n),"current-page":o(f),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])]))])]),_:1})])}}});export{ze as default};
