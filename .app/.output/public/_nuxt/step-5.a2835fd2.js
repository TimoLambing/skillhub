import{_ as j}from"./DemoWizardStepTitle.vue.d9baa7c9.js";import{d as E,b9 as L,x as b,a9 as P,o as r,e as c,g as l,f as e,j as u,a0 as A,w as f,H as D,J as _,K as $,L as z,S as K,bt as F,I as H,q as N,s as B,V as h,i as g,n as U}from"./entry.46c51c2c.js";import{_ as W}from"./BaseButtonIcon.vue.a7b441ca.js";import{_ as q}from"./BaseProgress.vue.2967b7f1.js";import{u as J}from"./multi-step-form.fe2c346f.js";const O=""+globalThis.__publicAssetsURL("img/illustrations/wizard/team.svg"),Y={class:"px-4"},G=e("img",{src:O,class:"mx-auto max-w-[210px] rounded-full",alt:""},null,-1),Q={class:"mt-2 text-center"},X={key:1,class:"relative mx-auto max-w-5xl"},Z={class:"flex w-full flex-col items-center"},ee=e("p",{class:"text-muted-400 my-3 font-sans text-sm"}," You are the project owner ",-1),te={class:"relative w-full max-w-sm"},ae={key:0,class:"nui-slimscroll max-h-[186px] space-y-2 overflow-y-auto"},se={class:"flex flex-col"},oe=e("h3",{class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"}," Invite ",-1),ne={class:"text-muted-500 dark:text-muted-400 font-sans text-xs"},le={class:"ms-auto"},re={class:"mx-auto mt-8 w-full max-w-2xl pb-40"},ie={key:0,class:"w-full space-y-2"},de={class:"flex flex-col"},ce=e("h3",{class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"}," Invited ",-1),ue={class:"text-muted-500 dark:text-muted-400 font-sans text-xs"},me={class:"ms-auto"},ve={class:"relative flex w-48 justify-between"},_e=["onKeydown","onClick"],pe=["onKeydown","onClick"],fe=["onKeydown","onClick"],he=["onKeydown","onClick"],ge={class:"absolute top-1/2 w-full -translate-y-1/2"},xe={class:"ms-8"},ze=E({__name:"step-5",setup(we){const{data:s}=J();L({title:"Team members"});const k=b(!1),I=[{picture:"/img/avatars/16.svg",name:"Hermann Mayer",role:void 0},{picture:"/img/avatars/10.svg",name:"Kendra Wilson",role:void 0},{picture:"/img/avatars/3.svg",name:"Clark Smith",role:void 0},{picture:"/img/avatars/5.svg",name:"Clarissa Miller",role:void 0},{picture:"/img/avatars/8.svg",name:"Eddy Fisher",role:void 0}],m=b(""),p=b([]);function R(a){s.value.team?.push({...a,role:"reader"}),m.value=""}function i(a,o){s.value.team&&s.value.team[a]&&(s.value.team[a].role=o)}function V(a){s.value.team&&s.value.team.splice(a,1)}function v(a){switch(a.role){case"collaborator":return 1;case"manager":return 2;case"owner":return 3;case"reader":default:return 0}}return P(()=>{const a=s.value.team;if(!m.value){p.value=[];return}p.value=I.filter(o=>!a?.find(x=>o.name===x.name)).filter(o=>o.name.match(new RegExp(m.value,"i")))}),(a,o)=>{const x=j,M=F,w=H,S=N,y=U,C=W,T=q;return r(),c("div",null,[l(x),e("div",Y,[u(k)?(r(),c("div",X,[e("div",Z,[l(w,{size:"xl",src:"/img/avatars/2.svg","badge-src":"/img/icons/flags/united-states-of-america.svg"}),ee,e("div",te,[l(S,{modelValue:u(m),"onUpdate:modelValue":o[1]||(o[1]=t=>D(m)?m.value=t:null),icon:"lucide:search",shape:"curved",placeholder:"ex: Clarissa, Kendra, ...",classes:{wrapper:"w-full relative z-10",input:"h-12 text-base !ps-12",icon:"h-12 w-12"}},null,8,["modelValue"]),e("div",{class:_(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 z-20 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300",u(m).length>0?"opacity-100 translate-y-0":"opacity-0 pointer-events-none translate-y-1"])},[u(p).length>0?(r(),c("div",ae,[(r(!0),c($,null,z(u(p),t=>(r(),c("div",{key:t.name,role:"button",class:"hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"},[l(w,{size:"sm",src:t.picture},null,8,["src"]),e("div",se,[oe,e("p",ne,B(t.name),1)]),e("div",le,[l(C,{small:"",shape:"full",onClick:n=>R(t)},{default:f(()=>[l(y,{name:"lucide:plus",class:"h-4 w-4"})]),_:2},1032,["onClick"])])]))),128))])):K("",!0)],2)]),e("div",re,[u(s).team&&u(s).team.length>0?(r(),c("div",ie,[(r(!0),c($,null,z(u(s).team,(t,n)=>(r(),c("div",{key:t.name,class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-4"},[l(w,{size:"sm",src:t.picture},null,8,["src"]),e("div",de,[ce,e("p",ue,B(t.name),1)]),e("div",me,[e("div",ve,[e("div",{class:"relative z-10 shrink-0","data-nui-tooltip":"Reader",tabindex:"0",onKeydown:h(g(d=>i(n,"reader"),["prevent"]),["space"]),onClick:d=>i(n,"reader")},[e("div",{class:_(["h-3 w-3 rounded-full",[v(t)>=0?"bg-primary-500":"bg-muted-300 dark:bg-muted-700"]])},null,2)],40,_e),e("div",{class:"relative z-10 shrink-0","data-nui-tooltip":"Collaborator",tabindex:"0",onKeydown:h(g(d=>i(n,"collaborator"),["prevent"]),["space"]),onClick:d=>i(n,"collaborator")},[e("div",{class:_(["h-3 w-3 rounded-full",[v(t)>=1?"bg-primary-500":"bg-muted-300 dark:bg-muted-700"]])},null,2)],40,pe),e("div",{class:"relative z-10 shrink-0","data-nui-tooltip":"Manager",tabindex:"0",onKeydown:h(g(d=>i(n,"manager"),["prevent"]),["space"]),onClick:d=>i(n,"manager")},[e("div",{class:_(["h-3 w-3 rounded-full",[v(t)>=2?"bg-primary-500":"bg-muted-300 dark:bg-muted-700"]])},null,2)],40,fe),e("div",{class:"relative z-10 shrink-0","data-nui-tooltip":"Owner",tabindex:"0",onKeydown:h(g(d=>i(n,"owner"),["prevent"]),["space"]),onClick:d=>i(n,"owner")},[e("div",{class:_(["h-3 w-3 rounded-full",[v(t)>=3?"bg-primary-500":"bg-muted-300 dark:bg-muted-700"]])},null,2)],40,he),e("div",ge,[l(T,{size:"xs",value:v(t),max:3},null,8,["value"])])])]),e("div",xe,[l(C,{small:"",shape:"full",onClick:d=>V(n)},{default:f(()=>[l(y,{name:"lucide:x",class:"h-4 w-4"})]),_:2},1032,["onClick"])])]))),128))])):K("",!0)])])])):(r(),A(M,{key:0,title:"Invite People",subtitle:"Start collaborating by inviting some team members to this project. Don't worry, you can do it later."},{image:f(()=>[G]),default:f(()=>[e("div",Q,[e("button",{type:"button",class:"text-primary-500 font-sans underline underline-offset-4",onClick:o[0]||(o[0]=t=>k.value=!0)}," Add Members ")])]),_:1}))])])}}});export{ze as default};
