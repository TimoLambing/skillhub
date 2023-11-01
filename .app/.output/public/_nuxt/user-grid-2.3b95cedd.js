import{d as S,bc as U,a as D,c as w,x as k,R as E,be as G,o as l,e as n,g as e,w as s,j as a,H as J,h as f,f as t,bs as K,K as b,L as B,S as M,q as W,m as O,n as Q,bt as X,a0 as C,J as R,s as $,I as Y,_ as Z,l as ee,y as se}from"./entry.adb22a9c.js";import{_ as ae}from"./BasePagination.vue.633b4ba2.js";import{_ as te}from"./TairoContentWrapper.vue.3ae99054.js";import{u as oe}from"./fetch.b04ce66f.js";import{g as P}from"./colors.cbccbc0c.js";import{_ as le,a as ne}from"./placeholder-search-2-dark.22ebb727.js";const re=t("span",null,"Add User",-1),ce={key:0},ie=t("img",{class:"block dark:hidden",src:le,alt:"Placeholder image"},null,-1),ue=t("img",{class:"hidden dark:block",src:ne,alt:"Placeholder image"},null,-1),de={key:1,class:"ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},_e={class:"mb-3 flex w-full items-center justify-center"},me={class:"text-center"},pe={class:"mb-6 mt-4 flex items-center justify-center gap-3"},fe={class:"flex items-center gap-2"},ge=t("span",null,"Profile",-1),he=t("span",null,"Talk",-1),ve={key:2,class:"mt-4"},Pe=S({__name:"user-grid-2",async setup(ye){let c,g;const V=U(),z=D(),h=w(()=>parseInt(V.query.page??"1")),r=k(""),_=k(18);E([r,_],()=>{z.push({query:{page:void 0}})});const N=w(()=>({filter:r.value,perPage:_.value,page:h.value})),{data:i,pending:v,error:xe,refresh:we}=([c,g]=G(()=>oe("/api/company/candidates",{query:N},"$gURvpvHaSx")),c=await c,g(),c);return(u,y)=>{const T=W,d=O,m=Q,q=X,x=Y,I=Z,j=ee,A=se,F=ae,H=te;return l(),n("div",null,[e(H,null,{left:s(()=>[e(T,{modelValue:a(r),"onUpdate:modelValue":y[0]||(y[0]=o=>J(r)?r.value=o:null),icon:"lucide:search",shape:"curved",placeholder:"Filter users...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:s(()=>[e(d,{class:"w-full sm:w-32",shape:"curved"},{default:s(()=>[f("Manage")]),_:1}),e(d,{color:"primary",class:"w-full sm:w-32",shape:"curved"},{default:s(()=>[e(m,{name:"lucide:plus",class:"h-4 w-4"}),re]),_:1})]),default:s(()=>[t("div",null,[!a(v)&&a(i)?.data.length===0?(l(),n("div",ce,[e(q,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:s(()=>[ie,ue]),_:1})])):(l(),n("div",de,[e(K,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:s(()=>[(l(!0),n(b,null,B(a(i)?.data,(o,L)=>(l(),C(A,{key:L,shape:"curved","elevated-hover":"",class:"p-6"},{default:s(()=>[t("div",_e,[e(x,{size:"xl",shape:"curved",src:o.src,"badge-src":o.badge,text:o.initials,class:R(("getRandomColor"in u?u.getRandomColor:a(P))())},null,8,["src","badge-src","text","class"])]),t("div",me,[e(I,{tag:"h3",size:"md",weight:"medium",lead:"none"},{default:s(()=>[f($(o.username),1)]),_:2},1024),e(j,{size:"xs",class:"text-muted-400"},{default:s(()=>[f($(o.position),1)]),_:2},1024)]),t("div",pe,[(l(!0),n(b,null,B(o.relations.slice(0,3),p=>(l(),C(x,{key:p,size:"xs",shape:"curved",src:p.src,text:p.text,class:R(("getRandomColor"in u?u.getRandomColor:a(P))())},null,8,["src","text","class"]))),128))]),t("div",fe,[e(d,{shape:"curved",class:"w-full"},{default:s(()=>[e(m,{name:"ph:user-duotone",class:"h-4 w-4"}),ge]),_:1}),e(d,{shape:"curved",class:"w-full"},{default:s(()=>[e(m,{name:"ph:chat-circle-duotone",class:"h-4 w-4"}),he]),_:1})])]),_:2},1024))),128))]),_:1})])),!a(v)&&a(i)?.data.length!==0?(l(),n("div",ve,[e(F,{"total-items":a(i)?.total??0,"item-per-page":a(_),"current-page":a(h),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])):M("",!0)])]),_:1})])}}});export{Pe as default};
