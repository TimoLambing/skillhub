import{d as E,bc as G,a as H,c as z,x as P,R as W,be as D,o,e as n,g as t,w as a,j as r,H as K,f as s,h as i,bs as V,K as h,L as g,q as S,n as U,m as J,_ as M,l as O,bt as Q,a0 as f,s as l,I as X,y as Y,p as Z}from"./entry.f4bf1c86.js";import{_ as ss}from"./BaseAvatarGroup.vue.e7453227.js";import{_ as es}from"./TairoContentWrapper.vue.079a8c1a.js";import{u as ts}from"./fetch.93c508fb.js";import{_ as as,a as os}from"./placeholder-search-4-dark.adfd8175.js";const ls=s("span",null,"New",-1),ns={class:"space-y-10"},cs={key:0},rs={class:"bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6"},is={key:1},ds=s("div",null,[s("h4",{class:"text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"}," Recently Viewed ")],-1),us={class:"ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"},_s={class:"mb-6 flex gap-2"},ms={class:"flex items-center justify-between"},ps={class:"flex items-center gap-2"},hs={class:"text-muted-400 flex items-center gap-4"},gs={class:"flex items-center gap-1 text-sm"},fs={class:"font-sans"},vs={class:"flex items-center gap-1 text-sm"},xs={class:"font-sans"},bs={key:0},ys=s("img",{class:"block dark:hidden",src:as,alt:"Placeholder image"},null,-1),ks=s("img",{class:"hidden dark:block",src:os,alt:"Placeholder image"},null,-1),ws={key:1},Bs=s("div",null,[s("h4",{class:"text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"}," All Projects ")],-1),$s={class:"ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"},js={class:"p-5"},zs={class:"relative mb-4"},Ps=["src","alt"],Vs={class:"mb-6 flex gap-2"},Ns={class:"flex items-center justify-between"},Cs={class:"flex items-center gap-2"},Is={class:"text-muted-400 flex items-center gap-4"},Ls={class:"flex items-center gap-1 text-sm"},Rs={class:"font-sans"},qs={class:"flex items-center gap-1 text-sm"},As={class:"font-sans"},Ts={class:"border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-xl border-t px-5 py-3"},Fs={class:"text-muted-400 font-sans text-sm"},Ms=E({__name:"project-list-2",async setup(Es){let _,y;const N=G(),C=H(),I=z(()=>parseInt(N.query.page??"1")),d=P(""),k=P(25);W([d,k],()=>{C.push({query:{page:void 0}})});const L=z(()=>({filter:d.value,perPage:k.value,page:I.value})),{data:m,pending:w,error:Gs,refresh:Hs}=([_,y]=D(()=>ts("/api/company/projects",{query:L},"$tggh0WBI4v")),_=await _,y(),_);return(Ws,B)=>{const R=S,u=U,q=J,v=M,x=O,p=X,$=Y,j=Z,A=Q,T=ss,F=es;return o(),n("div",null,[t(F,null,{left:a(()=>[t(R,{modelValue:r(d),"onUpdate:modelValue":B[0]||(B[0]=e=>K(d)?d.value=e:null),icon:"lucide:search",shape:"curved",placeholder:"Filter projects...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:a(()=>[t(q,{color:"primary",class:"w-full sm:w-32",shape:"curved"},{default:a(()=>[t(u,{name:"lucide:plus",class:"h-4 w-4"}),ls]),_:1})]),default:a(()=>[s("div",ns,[s("div",null,[!r(w)&&r(m)?.recent.length===0?(o(),n("div",cs,[s("div",rs,[t(v,{tag:"h4",size:"lg",weight:"medium"},{default:a(()=>[i(" Empty history ")]),_:1}),t(x,{size:"sm",class:"text-muted-400"},{default:a(()=>[i(" Looks like you haven't viewed any projects yet. ")]),_:1})])])):(o(),n("div",is,[ds,s("div",us,[t(V,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(o(!0),n(h,null,g(r(m)?.recent.slice(0,4),(e,b)=>(o(),f(j,{key:b,class:"group block",to:`/layouts/projects/details/${e.slug}`},{default:a(()=>[t($,{shape:"curved","elevated-hover":"",class:"group-hover:!border-primary-500 p-5"},{default:a(()=>[s("div",_s,[t(p,{src:e.customer.logo,size:"sm",shape:"straight",mask:"blob","data-nui-tooltip":e.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]),s("div",null,[t(v,{tag:"h5",size:"sm",weight:"medium",class:"line-clamp-1"},{default:a(()=>[i(l(e.name),1)]),_:2},1024),t(x,{size:"xs",class:"text-muted-400"},{default:a(()=>[i(l(e.customer.name)+" | "+l(e.customer.text),1)]),_:2},1024)])]),s("div",ms,[s("div",ps,[(o(!0),n(h,null,g(e.stacks,c=>(o(),f(p,{key:c.name,src:c.icon,size:"xxs",shape:"straight",mask:"blob","data-nui-tooltip":c.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]))),128))]),s("div",hs,[s("div",gs,[t(u,{name:"ph:paperclip-duotone",class:"h-4 w-4"}),s("span",fs,l(e.files.length),1)]),s("div",vs,[t(u,{name:"ph:users-duotone",class:"h-4 w-4"}),s("span",xs,l(e.team.length),1)])])])]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})])]))]),s("div",null,[!r(w)&&r(m)?.data.length===0?(o(),n("div",bs,[t(A,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[ys,ks]),_:1})])):(o(),n("div",ws,[Bs,s("div",$s,[t(V,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(o(!0),n(h,null,g(r(m)?.data,(e,b)=>(o(),f($,{key:b,shape:"curved","elevated-hover":"",class:"hover:!border-primary-500"},{default:a(()=>[t(j,{class:"group",to:`/layouts/projects/details/${e.slug}`},{default:a(()=>[s("div",js,[s("div",zs,[s("img",{src:e.image,alt:e.name,class:"rounded-lg"},null,8,Ps)]),s("div",Vs,[t(p,{src:e.customer.logo,size:"sm",shape:"straight",mask:"blob","data-nui-tooltip":e.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]),s("div",null,[t(v,{tag:"h5",size:"sm",weight:"medium",class:"line-clamp-1"},{default:a(()=>[i(l(e.name),1)]),_:2},1024),t(x,{size:"xs",class:"text-muted-400"},{default:a(()=>[i(l(e.customer.name)+" | "+l(e.customer.text),1)]),_:2},1024)])]),s("div",Ns,[s("div",Cs,[(o(!0),n(h,null,g(e.stacks,c=>(o(),f(p,{key:c.name,src:c.icon,size:"xxs",shape:"straight",mask:"blob","data-nui-tooltip":c.name,class:"bg-muted-100 dark:bg-muted-700"},null,8,["src","data-nui-tooltip"]))),128))]),s("div",Is,[s("div",Ls,[t(u,{name:"ph:paperclip-duotone",class:"h-4 w-4"}),s("span",Rs,l(e.files.length),1)]),s("div",qs,[t(u,{name:"ph:users-duotone",class:"h-4 w-4"}),s("span",As,l(e.team.length),1)])])])]),s("div",Ts,[s("div",null,[s("p",Fs,l(e.tasks.length)+" tasks remaining ",1)]),s("div",null,[t(T,{avatars:e.team,size:"xs",limit:3},null,8,["avatars"])])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]))])])]),_:1})])}}});export{Ms as default};
