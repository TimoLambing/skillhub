import{d as T,be as F,x as v,A as R,c as A,o as r,e as c,f as a,g as s,j as l,H as I,w as o,h as i,J as y,K as S,L as H,q as L,v as D,bt as E,_ as K,y as M,a0 as f,S as B,s as U,I as q,n as J}from"./entry.f4bf1c86.js";import{_ as X}from"./BaseCheckbox.vue.a0502851.js";import{_ as G}from"./BaseTag.vue.17ec5264.js";import{_ as O}from"./BaseButtonIcon.vue.ee8ad51b.js";import{u as Q}from"./fetch.93c508fb.js";import{_ as W,a as Y}from"./placeholder-search-4-dark.adfd8175.js";import"./IconCheck.47ba7fa2.js";const Z={class:"mx-auto w-full max-w-5xl"},ee={class:"mx-auto mt-6 flex w-full max-w-sm items-center justify-center"},se={class:"mb-12 mt-2 text-center"},te={key:0},le=a("img",{class:"block dark:hidden",src:W,alt:"Placeholder image"},null,-1),ae=a("img",{class:"hidden dark:block",src:Y,alt:"Placeholder image"},null,-1),oe={key:1,class:"grid grid-cols-12 gap-6"},ne={class:"col-span-12 sm:col-span-4"},ie={class:"flex flex-col gap-6"},re={class:"space-y-4"},ue={class:"flex items-center justify-between"},de={class:"flex items-center justify-between"},me={class:"flex items-center justify-between"},ce={class:"space-y-4"},pe={class:"flex items-center justify-between"},fe={class:"flex items-center justify-between"},_e={class:"flex items-center justify-between"},be={class:"flex items-center justify-between"},xe={class:"flex items-center justify-between"},ye={class:"space-y-4"},he={class:"flex items-center justify-between"},we={class:"flex items-center justify-between"},ge={class:"flex items-center justify-between"},ve={class:"col-span-12 sm:col-span-8"},Ve={class:"border-muted-200 dark:border-muted-800 flex items-center gap-4 border-b font-sans"},ke={key:0},je={key:1,class:"space-y-4 py-4"},ze={class:"flex w-full items-center gap-4"},Be=["src","alt"],Ue=["src","alt"],$e={class:"ms-auto"},De=T({__name:"search-results",async setup(Ce){let _,V;const{data:k,pending:Pe,error:Ne,refresh:Te}=([_,V]=F(()=>Q("/api/search","$bK0uU6p3Xy")),_=await _,V(),_),h=v("internal projects"),p=v(),n=R({publication:{new:!1,updated:!1,upvoted:!1},topics:{engineering:!1,software:!1,business:!1,management:!1,hr:!1},type:{members:!1,projects:!1,files:!1}});k.value&&(p.value=k.value);const m=v("all"),$=A(()=>m.value==="all"?p.value:p.value.filter(j=>j.type===m.value));return(j,t)=>{const C=L,z=D,P=E,b=K,u=X,d=G,x=M,N=q,w=J,g=O;return r(),c("div",Z,[a("div",ee,[s(C,{modelValue:l(h),"onUpdate:modelValue":t[0]||(t[0]=e=>I(h)?h.value=e:null),icon:"lucide:search",placeholder:"Search...",shape:"full",classes:{wrapper:"w-full",input:"h-12 !ps-12",icon:"h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7"}},null,8,["modelValue"])]),a("div",se,[s(z,{size:"sm",class:"text-muted-400"},{default:o(()=>[i('78 results for "internal projects"')]),_:1})]),l(p)===null?(r(),c("div",te,[s(P,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:o(()=>[le,ae]),_:1})])):(r(),c("div",oe,[a("div",ne,[a("div",ie,[s(x,{class:"p-6"},{default:o(()=>[s(b,{as:"h3",weight:"medium",size:"md",class:"mb-4"},{default:o(()=>[i(" Publication ")]),_:1}),a("ul",re,[a("li",ue,[s(u,{modelValue:l(n).publication.new,"onUpdate:modelValue":t[1]||(t[1]=e=>l(n).publication.new=e),color:"primary",shape:"full",label:"Newly added",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("24")]),_:1})]),a("li",de,[s(u,{modelValue:l(n).publication.updated,"onUpdate:modelValue":t[2]||(t[2]=e=>l(n).publication.updated=e),color:"primary",shape:"full",label:"Recently updated",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("39")]),_:1})]),a("li",me,[s(u,{modelValue:l(n).publication.upvoted,"onUpdate:modelValue":t[3]||(t[3]=e=>l(n).publication.upvoted=e),color:"primary",shape:"full",label:"Upvoted",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("17")]),_:1})])])]),_:1}),s(x,{class:"p-6"},{default:o(()=>[s(b,{as:"h3",weight:"medium",size:"md",class:"mb-4"},{default:o(()=>[i(" Topics ")]),_:1}),a("ul",ce,[a("li",pe,[s(u,{modelValue:l(n).topics.engineering,"onUpdate:modelValue":t[4]||(t[4]=e=>l(n).topics.engineering=e),color:"primary",shape:"full",label:"Engineering",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("62")]),_:1})]),a("li",fe,[s(u,{modelValue:l(n).topics.software,"onUpdate:modelValue":t[5]||(t[5]=e=>l(n).topics.software=e),color:"primary",shape:"full",label:"Software",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("148")]),_:1})]),a("li",_e,[s(u,{modelValue:l(n).topics.business,"onUpdate:modelValue":t[6]||(t[6]=e=>l(n).topics.business=e),color:"primary",shape:"full",label:"Business",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("23")]),_:1})]),a("li",be,[s(u,{modelValue:l(n).topics.management,"onUpdate:modelValue":t[7]||(t[7]=e=>l(n).topics.management=e),color:"primary",shape:"full",label:"Management",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("8")]),_:1})]),a("li",xe,[s(u,{modelValue:l(n).topics.hr,"onUpdate:modelValue":t[8]||(t[8]=e=>l(n).topics.hr=e),color:"primary",shape:"full",label:"Human Resources",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("43")]),_:1})])])]),_:1}),s(x,{class:"p-6"},{default:o(()=>[s(b,{as:"h3",weight:"medium",size:"md",class:"mb-4"},{default:o(()=>[i(" Result type ")]),_:1}),a("ul",ye,[a("li",he,[s(u,{modelValue:l(n).type.members,"onUpdate:modelValue":t[9]||(t[9]=e=>l(n).type.members=e),color:"primary",shape:"full",label:"Members",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("12")]),_:1})]),a("li",we,[s(u,{modelValue:l(n).type.projects,"onUpdate:modelValue":t[10]||(t[10]=e=>l(n).type.projects=e),color:"primary",shape:"full",label:"Projects",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("54")]),_:1})]),a("li",ge,[s(u,{modelValue:l(n).type.files,"onUpdate:modelValue":t[11]||(t[11]=e=>l(n).type.files=e),color:"primary",shape:"full",label:"Files",classes:{label:"text-xs"}},null,8,["modelValue"]),s(d,{shape:"full",size:"sm"},{default:o(()=>[i("31")]),_:1})])])]),_:1})])]),a("div",ve,[a("div",Ve,[a("button",{type:"button",class:y(["border-b-2 px-3 py-4 text-sm",l(m)==="all"?"text-muted-700 dark:text-muted-100 border-primary-500":"border-transparent text-muted-400"]),onClick:t[12]||(t[12]=e=>m.value="all")}," All ",2),a("button",{type:"button",class:y(["border-b-2 px-3 py-4 text-sm",l(m)==="people"?"text-muted-700 dark:text-muted-100 border-primary-500":"border-transparent text-muted-400"]),onClick:t[13]||(t[13]=e=>m.value="people")}," People ",2),a("button",{type:"button",class:y(["border-b-2 px-3 py-4 text-sm",l(m)==="project"?"text-muted-700 dark:text-muted-100 border-primary-500":"border-transparent text-muted-400"]),onClick:t[14]||(t[14]=e=>m.value="project")}," Projects ",2),a("button",{type:"button",class:y(["border-b-2 px-3 py-4 text-sm",l(m)==="file"?"text-muted-700 dark:text-muted-100 border-primary-500":"border-transparent text-muted-400"]),onClick:t[15]||(t[15]=e=>m.value="file")}," Files ",2)]),a("div",null,[l(p).length===0?(r(),c("div",ke)):(r(),c("div",je,[(r(!0),c(S,null,H(l($),e=>(r(),f(x,{key:e.name,class:"p-5"},{default:o(()=>[a("div",ze,[e.type==="people"?(r(),f(N,{key:0,src:e.src},null,8,["src"])):e.type==="project"?(r(),c("img",{key:1,class:"h-10 w-10 shrink-0 rounded-full object-cover object-center",src:e.src,alt:e.name},null,8,Be)):e.type==="file"?(r(),c("img",{key:2,class:"h-10 w-10 shrink-0",src:e.src,alt:e.name},null,8,Ue)):B("",!0),a("div",null,[s(b,{as:"h3",weight:"medium",size:"sm"},{default:o(()=>[i(U(e.name),1)]),_:2},1024),s(z,{size:"xs",class:"text-muted-400"},{default:o(()=>[i(U(e.subtext),1)]),_:2},1024)]),a("div",$e,[e.type==="people"?(r(),f(g,{key:0,to:e.url,shape:"full",size:"sm","data-nui-tooltip":"View profile"},{default:o(()=>[s(w,{name:"lucide:arrow-right"})]),_:2},1032,["to"])):e.type==="project"?(r(),f(g,{key:1,to:e.url,shape:"full",size:"sm","data-nui-tooltip":"View project"},{default:o(()=>[s(w,{name:"lucide:arrow-right"})]),_:2},1032,["to"])):e.type==="file"?(r(),f(g,{key:2,to:e.url,shape:"full",size:"sm","data-nui-tooltip":"Download file"},{default:o(()=>[s(w,{name:"lucide:arrow-down"})]),_:2},1032,["to"])):B("",!0)])])]),_:2},1024))),128))]))])])]))])}}});export{De as default};
