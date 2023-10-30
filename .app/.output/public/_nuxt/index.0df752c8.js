import{d as L,bc as R,a as D,c as $,x as f,R as E,be as F,o,e as n,j as r,f as s,g as t,w as a,h as c,a0 as x,S as T,H as G,K as B,L as z,bs as K,_ as U,l as Y,n as J,p as M,s as d,ab as O,I as Q,y as W}from"./entry.5f1d6f14.js";import{_ as X,a as Z}from"./BaseAutocomplete.vue.4ef95052.js";import{u as ee}from"./fetch.979d2d45.js";import"./BaseIconBox.vue.684e9cd5.js";import"./combobox.3116a28e.js";import"./use-tracked-pointer.e467de5d.js";import"./use-resolve-button-type.86a646bb.js";import"./use-tree-walker.cf863ddf.js";import"./use-controllable.5b1639f5.js";const te={class:"ltablet:mt-20 mx-auto max-w-4xl lg:mt-20"},se={key:0},ae={class:"bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6"},oe={key:1,class:"grid grid-cols-12 gap-6"},ne={class:"ltablet:col-span-5 col-span-12 mb-6 lg:col-span-5"},ce={class:"ltablet:max-w-sm bg-muted-200 dark:bg-muted-800/60 rounded-xl p-8 lg:max-w-sm"},le={class:"mb-8 max-w-sm"},re={key:1,class:"text-muted-700 dark:text-muted-400 cursor-default select-none"},de={class:"ltablet:col-span-7 col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-7"},me={class:"mb-6 flex gap-2"},ie={class:"flex items-center justify-between"},ue={class:"flex items-center gap-2"},pe={class:"text-muted-400 flex items-center gap-4"},_e={class:"flex items-center gap-1 text-sm"},ge={class:"font-sans"},he={class:"flex items-center gap-1 text-sm"},fe={class:"font-sans"},qe=L({__name:"index",async setup(xe){let m,b;const V=R(),N=D(),S=$(()=>parseInt(V.query.page??"1")),v=f(""),y=f(25);E([v,y],()=>{N.push({query:{page:void 0}})});const q=$(()=>({filter:v.value,perPage:y.value,page:S.value})),{data:i,pending:C,error:be,refresh:ve}=([m,b]=F(()=>ee("/api/company/projects",{query:q},"$qdbzuIDHcS")),m=await m,b(),m),u=f("");return(ye,k)=>{const p=U,_=Y,g=J,I=O,P=X,w=M,A=Z,j=Q,H=W;return o(),n("div",te,[!r(C)&&r(i)?.recent.length===0?(o(),n("div",se,[s("div",ae,[t(p,{tag:"h4",size:"lg",weight:"medium"},{default:a(()=>[c(" No projects ")]),_:1}),t(_,{size:"sm",class:"text-muted-400"},{default:a(()=>[c(" Looks like you don't have any project to view. ")]),_:1})])])):(o(),n("div",oe,[s("div",ne,[s("div",ce,[s("div",le,[t(g,{name:"ph:kanban-duotone",class:"text-primary-500 mb-2 h-10 w-10"}),t(p,{tag:"h4",size:"xl",weight:"medium",class:"mb-2"},{default:a(()=>[c(" Your recent boards ")]),_:1}),t(_,{size:"sm",class:"text-muted-400"},{default:a(()=>[c(" Here are the most recent projects that have been viewed in your team. Search for more by entering the project name below. ")]),_:1})]),t(A,{modelValue:r(u),"onUpdate:modelValue":k[0]||(k[0]=e=>G(u)?u.value=e:null),items:r(i)?.data,"display-value":e=>e.name,shape:"curved",icon:"lucide:search",placeholder:"Search...",label:"Search projects","label-float":"",clearable:""},{empty:a(({pending:e,query:l})=>[e?(o(),x(I,{key:0})):l?T("",!0):(o(),n("span",re," Ex: Delivery app project... "))]),item:a(({item:e,selected:l})=>[t(w,{to:`/layouts/projects/board/${e.slug}`,class:"block"},{default:a(()=>[t(P,{value:{name:e.name,text:`${e.customer.name} | ${e.customer.text}`,media:e.customer.logo},selected:l},null,8,["value","selected"])]),_:2},1032,["to"])]),_:1},8,["modelValue","items","display-value"])])]),s("div",de,[t(K,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(o(!0),n(B,null,z(r(i)?.data.slice(0,6),(e,l)=>(o(),x(w,{key:l,class:"group block",to:`/layouts/projects/board/${e.slug}`},{default:a(()=>[t(H,{shape:"curved","elevated-hover":"",class:"group-hover:!border-primary-500 p-5"},{default:a(()=>[s("div",me,[t(j,{src:e.customer.logo,size:"sm",shape:"straight",mask:"blob","data-nui-tooltip":e.customer.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]),s("div",null,[t(p,{tag:"h5",size:"sm",weight:"medium",class:"line-clamp-1"},{default:a(()=>[c(d(e.name),1)]),_:2},1024),t(_,{size:"xs",class:"text-muted-400"},{default:a(()=>[c(d(e.customer.name)+" | "+d(e.customer.text),1)]),_:2},1024)])]),s("div",ie,[s("div",ue,[(o(!0),n(B,null,z(e.stacks,h=>(o(),x(j,{key:h.name,src:h.icon,size:"xxs",shape:"straight",mask:"blob","data-nui-tooltip":h.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]))),128))]),s("div",pe,[s("div",_e,[t(g,{name:"ph:paperclip-duotone",class:"h-4 w-4"}),s("span",ge,d(e.files.length),1)]),s("div",he,[t(g,{name:"ph:users-duotone",class:"h-4 w-4"}),s("span",fe,d(e.team.length),1)])])])]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})])]))])}}});export{qe as default};