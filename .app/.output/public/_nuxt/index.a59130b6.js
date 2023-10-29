import{d as G,bc as E,a as H,c as j,x as P,R as D,be as K,o,e as n,g as t,w as a,j as r,H as M,f as e,h as d,bs as V,K as h,L as g,q as Q,n as S,m as U,_ as W,l as X,bt as Y,a0 as f,s as l,I as Z,y as J,p as O}from"./entry.cb41b48b.js";import{_ as ee}from"./BaseAvatarGroup.vue.9a929525.js";import{_ as se}from"./TairoContentWrapper.vue.1b22c5da.js";import{u as te}from"./fetch.10a630f3.js";import{_ as ae,a as oe}from"./placeholder-search-4-dark.991a3b38.js";const le=e("span",null,"New",-1),ne={class:"space-y-10"},ce={key:0},re={class:"bg-muted-200 dark:bg-muted-800/60 rounded-lg p-6"},de={key:1},ie=e("div",null,[e("h4",{class:"text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"}," Recently Viewed ")],-1),ue={class:"ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"},_e={class:"mb-6 flex gap-2"},me={class:"flex items-center justify-between"},pe={class:"flex items-center gap-2"},he={class:"text-muted-400 flex items-center gap-4"},ge={class:"flex items-center gap-1 text-sm"},fe={class:"font-sans"},ve={class:"flex items-center gap-1 text-sm"},xe={class:"font-sans"},ye={key:0},be=e("img",{class:"block dark:hidden",src:ae,alt:"Placeholder image"},null,-1),ke=e("img",{class:"hidden dark:block",src:oe,alt:"Placeholder image"},null,-1),we={key:1},Be=e("div",null,[e("h4",{class:"text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"}," All Projects ")],-1),$e={class:"ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"},ze={class:"p-5"},je={class:"relative mb-4"},Pe=["src","alt"],Ve={class:"mb-6 flex gap-2"},Ne={class:"flex items-center justify-between"},Ce={class:"flex items-center gap-2"},Le={class:"text-muted-400 flex items-center gap-4"},Re={class:"flex items-center gap-1 text-sm"},qe={class:"font-sans"},Ae={class:"flex items-center gap-1 text-sm"},Ie={class:"font-sans"},Te={class:"border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3"},Fe={class:"text-muted-400 font-sans text-sm"},We=G({__name:"index",async setup(Ge){let _,b;const N=E(),C=H(),L=j(()=>parseInt(N.query.page??"1")),i=P(""),k=P(25);D([i,k],()=>{C.push({query:{page:void 0}})});const R=j(()=>({filter:i.value,perPage:k.value,page:L.value})),{data:m,pending:w,error:Ee,refresh:He}=([_,b]=K(()=>te("/api/company/projects",{query:R},"$QMY9pXZGb3")),_=await _,b(),_);return(De,B)=>{const q=Q,u=S,A=U,v=W,x=X,p=Z,$=J,z=O,I=Y,T=ee,F=se;return o(),n("div",null,[t(F,null,{left:a(()=>[t(q,{modelValue:r(i),"onUpdate:modelValue":B[0]||(B[0]=s=>M(i)?i.value=s:null),icon:"lucide:search",shape:"rounded",placeholder:"Filter projects...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:a(()=>[t(A,{color:"primary",class:"w-full sm:w-32",shape:"rounded"},{default:a(()=>[t(u,{name:"lucide:plus",class:"h-4 w-4"}),le]),_:1})]),default:a(()=>[e("div",ne,[e("div",null,[!r(w)&&r(m)?.recent.length===0?(o(),n("div",ce,[e("div",re,[t(v,{tag:"h4",size:"lg",weight:"medium"},{default:a(()=>[d(" Empty history ")]),_:1}),t(x,{size:"sm",class:"text-muted-400"},{default:a(()=>[d(" Looks like you haven't viewed any projects yet. ")]),_:1})])])):(o(),n("div",de,[ie,e("div",ue,[t(V,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(o(!0),n(h,null,g(r(m)?.recent.slice(0,4),(s,y)=>(o(),f(z,{key:y,class:"group block",to:`/layouts/projects/details/${s.slug}`},{default:a(()=>[t($,{shape:"rounded","elevated-hover":"",class:"group-hover:!border-primary-500 p-5"},{default:a(()=>[e("div",_e,[t(p,{src:s.customer.logo,size:"sm","data-nui-tooltip":s.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]),e("div",null,[t(v,{tag:"h5",size:"sm",weight:"medium",class:"line-clamp-1"},{default:a(()=>[d(l(s.name),1)]),_:2},1024),t(x,{size:"xs",class:"text-muted-400"},{default:a(()=>[d(l(s.customer.name)+" | "+l(s.customer.text),1)]),_:2},1024)])]),e("div",me,[e("div",pe,[(o(!0),n(h,null,g(s.stacks,c=>(o(),f(p,{key:c.name,src:c.icon,size:"xxs","data-nui-tooltip":c.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]))),128))]),e("div",he,[e("div",ge,[t(u,{name:"ph:paperclip-duotone",class:"h-4 w-4"}),e("span",fe,l(s.files.length),1)]),e("div",ve,[t(u,{name:"ph:users-duotone",class:"h-4 w-4"}),e("span",xe,l(s.team.length),1)])])])]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})])]))]),e("div",null,[!r(w)&&r(m)?.data.length===0?(o(),n("div",ye,[t(I,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[be,ke]),_:1})])):(o(),n("div",we,[Be,e("div",$e,[t(V,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(o(!0),n(h,null,g(r(m)?.data,(s,y)=>(o(),f($,{key:y,shape:"rounded","elevated-hover":"",class:"hover:!border-primary-500"},{default:a(()=>[t(z,{class:"group",to:`/layouts/projects/details/${s.slug}`},{default:a(()=>[e("div",ze,[e("div",je,[e("img",{src:s.image,alt:s.name,class:"rounded-md"},null,8,Pe)]),e("div",Ve,[t(p,{src:s.customer.logo,size:"sm","data-nui-tooltip":s.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]),e("div",null,[t(v,{tag:"h5",size:"sm",weight:"medium",class:"line-clamp-1"},{default:a(()=>[d(l(s.name),1)]),_:2},1024),t(x,{size:"xs",class:"text-muted-400"},{default:a(()=>[d(l(s.customer.name)+" | "+l(s.customer.text),1)]),_:2},1024)])]),e("div",Ne,[e("div",Ce,[(o(!0),n(h,null,g(s.stacks,c=>(o(),f(p,{key:c.name,src:c.icon,size:"xxs","data-nui-tooltip":c.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]))),128))]),e("div",Le,[e("div",Re,[t(u,{name:"ph:paperclip-duotone",class:"h-4 w-4"}),e("span",qe,l(s.files.length),1)]),e("div",Ae,[t(u,{name:"ph:users-duotone",class:"h-4 w-4"}),e("span",Ie,l(s.team.length),1)])])])]),e("div",Te,[e("div",null,[e("p",Fe,l(s.tasks.length)+" tasks remaining ",1)]),e("div",null,[t(T,{avatars:s.team,size:"xs",limit:3},null,8,["avatars"])])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]))])])]),_:1})])}}});export{We as default};
