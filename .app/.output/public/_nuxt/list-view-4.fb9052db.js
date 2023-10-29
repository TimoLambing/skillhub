import{d as C,bc as R,a as V,c as h,x as g,R as q,be as I,o as l,e as i,g as s,w as a,j as r,H as F,f as e,bs as z,K as S,L as U,q as G,bt as H,a0 as D,h as E,s as m,I as K,_ as Q,n as W,m as J,y as M}from"./entry.cb41b48b.js";import{_ as O}from"./BaseAvatarGroup.vue.9a929525.js";import{_ as X}from"./BaseButtonIcon.vue.e7357dfd.js";import{_ as Y}from"./BasePagination.vue.cef4aac2.js";import{_ as Z}from"./TairoContentWrapperTabbed.vue.6770f91f.js";import{u as ee}from"./fetch.10a630f3.js";import{_ as se,a as te}from"./placeholder-search-3-dark.ce8a32c0.js";const ae=""+globalThis.__publicAssetsURL("img/illustrations/placeholders/flat/placeholder-cooking.svg"),oe=""+globalThis.__publicAssetsURL("img/illustrations/placeholders/flat/placeholder-cooking-dark.svg"),le={key:0},ne=e("img",{class:"block dark:hidden",src:se,alt:"Placeholder image"},null,-1),ce=e("img",{class:"hidden dark:block",src:te,alt:"Placeholder image"},null,-1),ie={key:1,class:"space-y-4"},re={class:"flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"},me={class:"w-full sm:w-auto"},de={class:"flex items-center justify-center gap-6 sm:justify-start sm:gap-0"},_e={class:"text-muted-400 mt-3 flex items-center gap-1 text-left text-sm sm:mt-0"},ue=e("div",{class:"hidden px-2 sm:block"},[e("span",null,"·")],-1),pe={class:"text-muted-400 mt-3 flex items-center gap-1 text-left text-sm sm:mt-0"},fe=e("div",{class:"hidden px-2 sm:block"},[e("span",null,"·")],-1),he={class:"text-muted-400 mt-3 flex items-center gap-1 text-left text-sm sm:mt-0"},ge={class:"flex flex-col items-center justify-end gap-2 sm:ms-auto sm:flex-row"},xe={class:"ptablet:hidden flex w-full items-center justify-center gap-1 py-5 sm:w-[160px] sm:justify-end sm:py-0"},ve=e("p",{class:"text-muted-400 font-sans text-xs"},"Like this",-1),ye={class:"flex w-full items-center gap-2 sm:w-auto"},be=e("span",null,"Apply Now",-1),we={class:"mt-6"},ke=e("img",{class:"block dark:hidden",src:ae,alt:"Placeholder image"},null,-1),Be=e("img",{class:"hidden dark:block",src:oe,alt:"Placeholder image"},null,-1),Ie=C({__name:"list-view-4",async setup($e){let n,d;const x=R(),v=V(),y=h(()=>parseInt(x.query.page??"1")),o=g(""),_=g(10);q([o,_],()=>{v.push({query:{page:void 0}})});const b=h(()=>({filter:o.value,perPage:_.value,page:y.value})),{data:u,pending:w,error:Pe,refresh:je}=([n,d]=I(()=>ee("/api/recipes",{query:b},"$ouFQBq0nNd")),n=await n,d(),n);return(Ae,p)=>{const k=G,f=H,B=K,$=Q,c=W,P=O,j=J,A=X,L=M,N=Y,T=Z;return l(),i("div",null,[s(T,{labels:["All","Saved"],shape:"curved"},{left:a(()=>[s(k,{modelValue:r(o),"onUpdate:modelValue":p[0]||(p[0]=t=>F(o)?o.value=t:null),icon:"lucide:search",shape:"curved",placeholder:"Filter recipes...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),"tab-1":a(()=>[e("div",null,[!r(w)&&r(u)?.data.length===0?(l(),i("div",le,[s(f,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[ne,ce]),_:1})])):(l(),i("div",ie,[s(z,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(l(!0),i(S,null,U(r(u)?.data,t=>(l(),D(L,{key:t.id,shape:"curved",class:"flex flex-col p-5 sm:flex-row sm:items-center"},{default:a(()=>[e("div",re,[s(B,{src:t.icon,"badge-src":t.author.avatar,"data-nui-tooltip":`by ${t.author.name}`,size:"lg",class:"bg-muted-100 dark:bg-muted-700/70"},null,8,["src","badge-src","data-nui-tooltip"]),e("div",me,[s($,{tag:"h3",size:"sm",weight:"medium",class:"text-muted-800 dark:text-muted-100"},{default:a(()=>[E(m(t.name),1)]),_:2},1024),e("div",de,[e("div",_e,[s(c,{name:"lucide:archive",class:"h-3 w-3"}),e("span",null,m(t.category),1)]),ue,e("div",pe,[s(c,{name:"lucide:clock",class:"h-3 w-3"}),e("span",null,m(t.duration),1)]),fe,e("div",he,[s(c,{name:"lucide:paperclip",class:"h-3 w-3"}),e("span",null,m(t.attachments),1)])])])]),e("div",ge,[e("div",xe,[s(P,{size:"xs",avatars:t.followers,limit:3},null,8,["avatars"]),ve]),e("div",ye,[s(j,{color:"primary",flavor:"outline",class:"w-full sm:w-28"},{default:a(()=>[be]),_:1}),s(A,{shape:"full",small:"",muted:"","data-nui-tooltip":"Save recipe",class:"hidden sm:inline-flex"},{default:a(()=>[s(c,{name:"ph:heart-duotone",class:"h-4 w-4"})]),_:1})])])]),_:2},1024))),128))]),_:1}),e("div",we,[s(N,{total:100,"item-per-page":10,"total-items":100,current:1,limit:10,shape:"curved"})])]))])]),"tab-2":a(()=>[s(f,{title:"No saved recipes",subtitle:"Looks like you don't have any saved recipes for the moment. Come back when you have some."},{image:a(()=>[ke,Be]),_:1})]),_:1})])}}});export{Ie as default};
