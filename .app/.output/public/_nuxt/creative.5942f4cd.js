import{_ as G,a as K,b as N}from"./DemoProgressCircle.vue.290fe5e2.js";import{d as g,o as c,e as d,g as e,f as s,w as t,s as h,_ as f,l as y,K as v,L as x,J as b,n as k,p as w,h as p,m as $,I as T,S as P,y as W}from"./entry.cb41b48b.js";import{_ as H}from"./DemoVcardRight.vue.51beabee.js";import{_ as V,a as q}from"./DemoIconText.vue.3aa1a64c.js";import{_ as Y}from"./DemoTeamListCompact.vue.51ece1d2.js";import{_ as M}from"./BaseTag.vue.0f3bc798.js";import{_ as J}from"./BaseIconBox.vue.18086c0e.js";import"./BaseButtonIcon.vue.e7357dfd.js";import"./BaseProgressCircle.59bdd3c7.js";import"./BaseProgress.vue.1ee91cdc.js";const E={class:"mt-3"},F={class:"text-muted-400"},R=g({__name:"DemoInfoImage",props:{title:{default:void 0},text:{default:void 0},image:{},imageDark:{default:void 0},shape:{default:"rounded"}},setup(l){const a=l;return(u,m)=>{const o=V,i=f,n=y;return c(),d("div",null,[e(o,{src:a.image,"image-dark":a.imageDark,height:300,width:300,shape:a.shape},null,8,["src","image-dark","shape"]),s("div",E,[e(i,{as:"h3",size:"md",weight:"medium",lead:"tight",class:"text-muted-800 mb-1 dark:text-white"},{default:t(()=>[s("span",null,h(a.title),1)]),_:1}),e(n,{size:"xs"},{default:t(()=>[s("span",F,h(a.text),1)]),_:1})])])}}}),O={class:"flex w-full items-center justify-between gap-3"},Q=g({__name:"DemoSocialLinks",setup(l){const a=[{name:"facebook",url:"/",icon:"fa6-brands:facebook-f"},{name:"twitter",url:"/",icon:"fa6-brands:twitter"},{name:"linkedin",url:"/",icon:"fa6-brands:linkedin-in"},{name:"github",url:"/",icon:"fa6-brands:github"}];return(u,m)=>{const o=k,i=w;return c(),d("div",O,[(c(),d(v,null,x(a,n=>e(i,{key:n.name,to:n.url,class:b(["text-muted-400 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 hover:text-white hover:shadow-xl",[n.name==="facebook"&&"hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30",n.name==="twitter"&&"hover:bg-sky-500 hover:shadow-sky-500/30 dark:hover:shadow-sky-800/30",n.name==="linkedin"&&"hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30",n.name==="github"&&"hover:bg-muted-900 dark:hover:bg-muted-700 hover:shadow-muted-500/30 dark:hover:shadow-muted-800/30"]])},{default:t(()=>[e(o,{name:n.icon,class:"h-4 w-4"},null,8,["name"])]),_:2},1032,["to","class"])),64))])}}}),U={class:"mb-6 flex items-center justify-between"},X={class:"space-y-2"},Z=["src"],ee={class:"text-muted-500 dark:text-muted-400 mt-1 font-sans text-xs"},te={class:"font-sans font-semibold"},se={class:"mt-4"},ae=g({__name:"DemoShoppingCartCompact",props:{shape:{default:"rounded"}},setup(l){const a=l,u=[{id:0,name:"Apple — 5th Gen Connected Watch, 256GB",image:"/img/illustrations/widgets/watch-1.svg",price:999,quantity:1},{id:1,name:"Apple — 5th Gen Connected Watch, 128GB",image:"/img/illustrations/widgets/watch-2.svg",price:899,quantity:1},{id:2,name:"Apple — 5th Gen Connected Watch, 64GB",image:"/img/illustrations/widgets/watch-3.svg",price:799,quantity:1}];return(m,o)=>{const i=f,n=M,_=$;return c(),d("div",null,[s("div",U,[e(i,{as:"h3",size:"md",weight:"semibold",lead:"tight"},{default:t(()=>[p(" Shopping cart ")]),_:1}),e(n,{color:"primary",size:"sm",shape:"full"},{default:t(()=>[p("3 items")]),_:1})]),s("div",X,[(c(),d(v,null,x(u,r=>s("div",{key:r.id,class:"flex gap-2"},[s("div",{class:b(["bg-muted-100 dark:bg-muted-700 flex h-16 w-16 shrink-0 items-center justify-center",[a.shape==="rounded"?"rounded":"",a.shape==="curved"?"rounded-xl":"",a.shape==="full"?"rounded-full":""]])},[s("img",{class:"h-12 w-12 object-cover object-center",src:r.image,alt:"Widget image"},null,8,Z)],2),s("div",null,[s("p",ee,h(r.name),1),s("p",te,"$"+h(r.price),1)])])),64))]),s("div",se,[e(_,{color:"primary",shape:a.shape,class:"!h-12 w-full"},{default:t(()=>[p(" Checkout ")]),_:1},8,["shape"])])])}}}),oe={class:"flex w-full items-center justify-between gap-3"},ne=g({__name:"DemoImageLinks",setup(l){const a=[{name:"Kendra W.",url:"/",image:"/img/avatars/10.svg"},{name:"Jake H.",url:"/",image:"/img/avatars/8.svg"},{name:"Hermann M.",url:"/",image:"/img/avatars/16.svg"},{name:"Clarissa M.",url:"/",image:"/img/avatars/5.svg"}];return(u,m)=>{const o=T,i=w;return c(),d("div",oe,[(c(),d(v,null,x(a,n=>e(i,{key:n.name,to:n.url,class:"group flex h-9 w-9 items-center justify-center transition-all duration-300"},{default:t(()=>[e(o,{src:n.image,size:"xs",class:"opacity-60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0","data-nui-tooltip":n.name},null,8,["src","data-nui-tooltip"])]),_:2},1032,["to"])),64))])}}}),ie={class:"group relative"},re={key:0,class:"absolute -start-2 -top-2 flex items-center justify-center"},ce={class:"absolute -top-2 end-0 flex items-center justify-center"},de=s("span",null,"$799",-1),le={class:"py-6"},ue={class:"relative"},me=["src","alt"],_e=s("div",{class:"bg-primary-500/10 absolute start-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 group-hover:scale-150"},null,-1),pe={class:"text-center"},he={class:"text-muted-400"},ge={class:"mt-4"},fe=s("span",null,"Add to Cart",-1),ve=g({__name:"DemoProductCompact",props:{title:{default:void 0},text:{default:void 0},icon:{default:void 0},image:{},value:{default:0},shape:{default:"rounded"}},setup(l){const a=l;return(u,m)=>{const o=k,i=f,n=y,_=$;return c(),d("div",ie,[a.icon?(c(),d("div",re,[e(o,{name:a.icon,class:"text-muted-400 h-6 w-6"},null,8,["name"])])):P("",!0),s("div",ce,[e(i,{as:"h4",size:"lg",weight:"semibold",lead:"loose",class:"text-muted-800 dark:text-white"},{default:t(()=>[de]),_:1})]),s("div",le,[s("div",ue,[s("img",{class:"relative z-10 mx-auto max-w-[100px]",src:a.image,alt:a.title},null,8,me),_e])]),s("div",pe,[e(i,{as:"h3",size:"md",weight:"medium",lead:"tight",class:"text-muted-800 mb-1 dark:text-white"},{default:t(()=>[s("span",null,h(a.title),1)]),_:1}),e(n,{size:"xs"},{default:t(()=>[s("span",he,h(a.text),1)]),_:1})]),s("div",ge,[e(_,{class:"w-full",color:"primary",icon:"lucide:shopping-cart",shape:a.shape},{default:t(()=>[fe]),_:1},8,["shape"])])])}}}),xe={class:"grid grid-cols-2 gap-4"},we={class:"text-center"},be={class:"mb-2"},ke={class:"text-muted-600 dark:text-muted-200 font-sans text-sm font-medium"},ye=g({__name:"DemoIconsSquare",props:{shape:{default:"rounded"}},setup(l){const a=l,u=[{title:"Profile",icon:"ph:user-duotone",url:"/"},{title:"Settings",icon:"ph:gear-six-duotone",url:"/"},{title:"Messages",icon:"ph:chat-circle-duotone",url:"/"},{title:"Tasks",icon:"ph:check-circle-duotone",url:"/"}];return(m,o)=>{const i=k,n=J,_=w;return c(),d("div",xe,[(c(),d(v,null,x(u,r=>e(_,{key:r.title,to:r.url,class:b(["dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-5 transition-all duration-300 hover:shadow-xl",[a.shape==="rounded"?"rounded-md":"",a.shape==="curved"?"rounded-xl":""]])},{default:t(()=>[s("div",we,[s("div",be,[e(n,{class:"bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white"},{default:t(()=>[e(i,{name:r.icon},null,8,["name"])]),_:2},1024)]),s("p",ke,h(r.title),1)])]),_:2},1032,["to","class"])),64))])}}}),$e={class:"ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4"},Ce={class:"relative flex flex-col gap-4"},Be={class:"mb-8 flex items-center justify-between"},De=s("span",null,"My Team",-1),Ie={class:"relative flex flex-col gap-4"},je={class:"relative flex flex-col gap-4"},Ae={class:"text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium"},Se={class:"relative flex flex-col gap-4"},qe=g({__name:"creative",setup(l){return(a,u)=>{const m=G,o=W,i=H,n=R,_=f,r=w,C=Y,B=Q,D=K,I=ae,j=q,A=ne,S=N,z=ve,L=ye;return c(),d("div",$e,[s("div",Ce,[e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(m,{image:"/img/illustrations/widgets/1.svg","badge-small":"/img/illustrations/widgets/3.svg","badge-medium":"/img/illustrations/widgets/2.svg",title:"You've unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!"})]),_:1}),e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(i)]),_:1}),e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(n,{shape:"curved",image:"/img/illustrations/widgets/7.svg",title:"You've unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!"})]),_:1}),e(o,{shape:"curved",class:"p-5"},{default:t(()=>[s("div",Be,[e(_,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:t(()=>[De]),_:1}),e(r,{to:"#",class:"bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:t(()=>[p(" View All ")]),_:1})]),e(C)]),_:1})]),s("div",Ie,[e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(n,{shape:"curved",image:"/img/illustrations/widgets/4.svg",title:"You've unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!"})]),_:1}),e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(B,{shape:"curved"})]),_:1}),e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(D,{shape:"curved"})]),_:1}),e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(I,{shape:"curved"})]),_:1})]),s("div",je,[e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(j,{title:"@cssninjaStudio",icon:"lucide:twitter",text:"Tairo will be released very soon, probably around the end of the year of the Christmas holidays.",indicator:""},{default:t(()=>[s("div",Ae,[e(r,{to:"#"},{default:t(()=>[p("#uikit")]),_:1}),e(r,{to:"#"},{default:t(()=>[p("#dashboards")]),_:1}),e(r,{to:"#"},{default:t(()=>[p("#tailwind")]),_:1})])]),_:1})]),_:1}),e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(n,{shape:"curved",image:"/img/illustrations/widgets/5.svg",title:"You've unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!"})]),_:1}),e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(i,{centered:""})]),_:1}),e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(A,{shape:"curved"})]),_:1}),e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(S,{image:"/img/avatars/6.svg",title:"78% completed!",text:"Congrats, your efforts have been rewarded. Keep up like this!",value:78})]),_:1})]),s("div",Se,[e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(z,{image:"/img/illustrations/widgets/watch-3.svg",title:"Connected Watch",text:"Apple — 5th Gen Connected Watch series, 64GB, 2023 issue",icon:"fa6-brands:apple",shape:"curved"})]),_:1}),e(o,{shape:"curved",class:"p-6"},{default:t(()=>[e(L,{shape:"curved"})]),_:1}),e(o,{shape:"curved",class:"p-4"},{default:t(()=>[e(n,{shape:"curved",image:"/img/illustrations/widgets/8.svg",title:"You've unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!"})]),_:1})])])}}});export{qe as default};
