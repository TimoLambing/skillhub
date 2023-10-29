import{d as D,bc as E,a as G,c as C,x as P,R as J,be as K,o as n,e as i,g as e,w as s,j as o,H as M,h as l,f as a,bs as O,K as $,L as z,S as R,q as W,m as X,n as Q,bt as Y,a0 as c,s as u,J as V,_ as Z,l as ee,p as se,I as ae,y as te}from"./entry.cb41b48b.js";import{_ as ne}from"./BasePagination.vue.cef4aac2.js";import{_ as oe}from"./TairoContentWrapper.vue.1b22c5da.js";import{u as le}from"./fetch.10a630f3.js";import{g as N}from"./colors.cbccbc0c.js";import{_ as ce,a as re}from"./placeholder-search-2-dark.061afcf2.js";const ie=a("span",null,"Add User",-1),de={key:0},ue=a("img",{class:"block dark:hidden",src:ce,alt:"Placeholder image"},null,-1),_e=a("img",{class:"hidden dark:block",src:re,alt:"Placeholder image"},null,-1),me={key:1,class:"ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},pe={class:"nui-bg-50 p-6"},he={class:"flex items-center justify-between"},fe={class:"p-6"},ge={class:"mb-3 flex w-full items-center justify-center"},ve={class:"text-center"},xe={class:"mb-6 mt-4 flex items-center justify-center gap-3"},ke={class:"flex items-center gap-2"},ye=a("span",null,"Profile",-1),we=a("span",null,"Talk",-1),be={key:2,class:"mt-4"},Ie=D({__name:"user-grid-4",async setup(Be){let _,x;const q=E(),I=G(),k=C(()=>parseInt(q.query.page??"1")),d=P(""),f=P(18);J([d,f],()=>{I.push({query:{page:void 0}})});const T=C(()=>({filter:d.value,perPage:f.value,page:k.value})),{data:m,pending:y,error:Ce,refresh:Pe}=([_,x]=K(()=>le("/api/company/candidates",{query:T},"$xzCqPP9B6X")),_=await _,x(),_);return(p,w)=>{const j=W,h=X,r=Q,L=Y,g=Z,b=ee,A=se,B=ae,F=te,S=ne,H=oe;return n(),i("div",null,[e(H,null,{left:s(()=>[e(j,{modelValue:o(d),"onUpdate:modelValue":w[0]||(w[0]=t=>M(d)?d.value=t:null),icon:"lucide:search",shape:"curved",placeholder:"Filter users...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:s(()=>[e(h,{class:"w-full sm:w-32",shape:"curved"},{default:s(()=>[l("Manage")]),_:1}),e(h,{color:"primary",class:"w-full sm:w-32",shape:"curved"},{default:s(()=>[e(r,{name:"lucide:plus",class:"h-4 w-4"}),ie]),_:1})]),default:s(()=>[a("div",null,[!o(y)&&o(m)?.data.length===0?(n(),i("div",de,[e(L,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:s(()=>[ue,_e]),_:1})])):(n(),i("div",me,[e(O,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:s(()=>[(n(!0),i($,null,z(o(m)?.data,(t,U)=>(n(),c(F,{key:U,shape:"curved","elevated-hover":"",class:"overflow-hidden"},{default:s(()=>[a("div",pe,[a("div",he,[a("div",null,[t.tasks.status===0?(n(),c(g,{key:0,tag:"h3",size:"md",weight:"medium",lead:"none"},{default:s(()=>[l(" In Sync ")]),_:1})):(n(),c(g,{key:1,tag:"h3",size:"md",weight:"medium",lead:"none"},{default:s(()=>[l(u(t.tasks.status===1?"Overdue":"Blocked"),1)]),_:2},1024)),e(b,{size:"xs",class:"text-muted-400"},{default:s(()=>[l(u(t.tasks.pending)+" tasks remaining ",1)]),_:2},1024)]),a("div",null,[t.tasks.status===0?(n(),c(r,{key:0,name:"ph:check-circle-duotone",class:"text-success-500 h-7 w-7"})):t.tasks.status===1?(n(),c(r,{key:1,name:"ph:warning-circle-duotone",class:"text-warning-500 h-7 w-7"})):t.tasks.status===2?(n(),c(r,{key:2,name:"ph:x-circle-duotone",class:"text-danger-500 h-7 w-7"})):R("",!0)])]),a("div",null,[e(A,{to:"#",class:"text-primary-500 font-sans text-xs underline-offset-4 hover:underline"},{default:s(()=>[l(" View "+u(t.username)+"'s tasks ",1)]),_:2},1024)])]),a("div",fe,[a("div",ge,[e(B,{size:"xl",shape:"curved",src:t.src,"badge-src":t.badge,text:t.initials,class:V(("getRandomColor"in p?p.getRandomColor:o(N))())},null,8,["src","badge-src","text","class"])]),a("div",ve,[e(g,{tag:"h3",size:"md",weight:"medium",lead:"none"},{default:s(()=>[l(u(t.username),1)]),_:2},1024),e(b,{size:"xs",class:"text-muted-400"},{default:s(()=>[l(u(t.position),1)]),_:2},1024)]),a("div",xe,[(n(!0),i($,null,z(t.relations.slice(0,3),v=>(n(),c(B,{key:v,size:"xs",shape:"curved",src:v.src,text:v.text,class:V(("getRandomColor"in p?p.getRandomColor:o(N))())},null,8,["src","text","class"]))),128))]),a("div",ke,[e(h,{shape:"curved",class:"w-full"},{default:s(()=>[e(r,{name:"ph:user-duotone",class:"h-4 w-4"}),ye]),_:1}),e(h,{shape:"curved",class:"w-full"},{default:s(()=>[e(r,{name:"ph:chat-circle-duotone",class:"h-4 w-4"}),we]),_:1})])])]),_:2},1024))),128))]),_:1})])),!o(y)&&o(m)?.data.length!==0?(n(),i("div",be,[e(S,{"total-items":o(m)?.total??0,"item-per-page":o(f),"current-page":o(k),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])):R("",!0)])]),_:1})])}}});export{Ie as default};
