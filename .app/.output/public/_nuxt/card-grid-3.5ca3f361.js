import{d as F,bc as T,a as A,c as g,x as v,R as I,be as L,o as l,e as i,g as t,w as a,j as o,H as N,h as _,f as e,bs as R,K as D,L as z,q as G,m as S,n as E,bt as H,a0 as K,s as x,I as U,y as W}from"./entry.adb22a9c.js";import{_ as J}from"./BaseAvatarGroup.vue.3ea538e7.js";import{_ as M}from"./BasePagination.vue.633b4ba2.js";import{_ as O}from"./TairoContentWrapper.vue.3ae99054.js";import{u as Q}from"./fetch.b04ce66f.js";import{_ as X,a as Y}from"./placeholder-search-7-dark.6ddf2b66.js";const Z=e("span",null,"Create",-1),ee={key:0},te=e("img",{class:"block dark:hidden",src:X,alt:"Placeholder image"},null,-1),se=e("img",{class:"hidden dark:block",src:Y,alt:"Placeholder image"},null,-1),ae={key:1},oe={class:"ltablet:grid-cols-3 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},ne={class:"mb-3 flex items-center justify-center"},le={class:"my-4 flex flex-col items-center justify-between"},ce=["data-nui-tooltip"],re={class:"text-muted-800 dark:text-muted-100 line-clamp-1 font-sans text-base font-medium"},ie={class:"text-muted-400 flex items-center justify-center gap-1"},de={class:"font-sans text-sm"},ue={class:"my-4"},_e={class:"flex items-center gap-2"},me={class:"mt-6"},Be=F({__name:"card-grid-3",async setup(pe){let c,m;const y=T(),w=A(),p=g(()=>parseInt(y.query.page??"1")),n=v(""),d=v(12);I([n,d],()=>{w.push({query:{page:void 0}})});const b=g(()=>({filter:n.value,perPage:d.value,page:p.value})),{data:u,pending:k,error:fe,refresh:he}=([c,m]=L(()=>Q("/api/company/projects/",{query:b},"$PDjFF9Lkeq")),c=await c,m(),c);return(ge,f)=>{const B=G,r=S,h=E,$=H,P=U,j=J,C=W,V=M,q=O;return l(),i("div",null,[t(q,null,{left:a(()=>[t(B,{modelValue:o(n),"onUpdate:modelValue":f[0]||(f[0]=s=>N(n)?n.value=s:null),icon:"lucide:search",shape:"curved",placeholder:"Filter projects...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:a(()=>[t(r,{shape:"curved",class:"w-full sm:w-32"},{default:a(()=>[_("Settings")]),_:1}),t(r,{shape:"curved",color:"primary",class:"w-full sm:w-32"},{default:a(()=>[t(h,{name:"lucide:plus",class:"h-4 w-4"}),Z]),_:1})]),default:a(()=>[e("div",null,[!o(k)&&o(u)?.data.length===0?(l(),i("div",ee,[t($,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[te,se]),_:1})])):(l(),i("div",ae,[e("div",oe,[t(R,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(l(!0),i(D,null,z(o(u)?.data,s=>(l(),K(C,{key:s.id,shape:"curved",class:"p-6"},{default:a(()=>[e("div",ne,[t(P,{src:s.owner.avatar,"badge-src":s.image,shape:"curved",size:"lg","data-nui-tooltip":s.owner.name,class:"bg-muted-500/20 text-muted-500"},null,8,["src","badge-src","data-nui-tooltip"])]),e("div",le,[e("div",{class:"text-center","data-nui-tooltip":s.name},[e("h4",re,x(s.name),1),e("div",ie,[t(h,{name:"ph:calendar-blank-duotone",class:"h-4 w-4"}),e("p",de,x(s.dueDate),1)])],8,ce),e("div",ue,[t(j,{size:"xs",limit:2,avatars:s.team},null,8,["avatars"])])]),e("div",_e,[t(r,{shape:"curved",class:"w-full"},{default:a(()=>[_("Tasks")]),_:1}),t(r,{shape:"curved",class:"w-full"},{default:a(()=>[_(" Activity ")]),_:1})])]),_:2},1024))),128))]),_:1})]),e("div",me,[t(V,{"total-items":o(u)?.total??0,"item-per-page":o(d),"current-page":o(p),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])]))])]),_:1})])}}});export{Be as default};
