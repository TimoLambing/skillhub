import{d as h,o as c,e as i,K as f,L as g,g as e,w as t,f as s,s as _,n as k,p as x,J as v,h as j,_ as $,l as D,m as F,A as M,B as W,x as E,a1 as V,j as w,y as Y}from"./entry.cb41b48b.js";import{_ as q}from"./AddonApexcharts.vue.08d6c74b.js";import{_ as H}from"./DemoFollowersCompact.vue.94aa0c48.js";import{_ as G}from"./DemoSearchCompact.vue.2e3dd4f1.js";import{_ as K,a as U}from"./DemoInboxMessage.vue.f9b5151a.js";import{_ as J}from"./BaseTag.vue.0f3bc798.js";import{a as O,_ as Q}from"./DemoIconText.vue.3aa1a64c.js";import{_ as R}from"./DemoNotificationsCompact.d5efaa75.js";import{C as X}from"./index.d1b3a854.js";/* empty css                  */import"./client-only.aa16da7a.js";import"./BaseAvatarGroup.vue.9a929525.js";import"./hobby-3.472675e6.js";import"./BaseProgress.vue.1ee91cdc.js";const Z={class:"flex flex-wrap items-center gap-2"},ee=h({__name:"DemoTagListCompact",props:{shape:{default:"rounded"}},setup(l){const o=l,d=[{id:1,name:"Politics",highlight:!1},{id:2,name:"Economy",highlight:!0},{id:3,name:"Finance",highlight:!1},{id:4,name:"Environment",highlight:!1},{id:5,name:"Food",highlight:!1},{id:6,name:"Technology",highlight:!0}];return(p,u)=>{const r=J;return c(),i("div",Z,[(c(),i(f,null,g(d,a=>e(r,{key:a.id,shape:o.shape,flavor:a.highlight?"solid":"outline",color:"primary",size:"sm"},{default:t(()=>[s("span",null,_(a.name),1)]),_:2},1032,["shape","flavor"])),64))])}}}),te={class:"flex w-full items-center justify-between gap-3"},se=h({__name:"DemoIconLinks",setup(l){const o=[{name:"Activity",url:"/",icon:"lucide:activity"},{name:"Search",url:"/",icon:"lucide:search"},{name:"Files",url:"/",icon:"lucide:file-text"},{name:"Home",url:"/",icon:"lucide:home"}];return(d,p)=>{const u=k,r=x;return c(),i("div",te,[(c(),i(f,null,g(o,a=>e(r,{key:a.name,to:a.url,class:"text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl"},{default:t(()=>[e(u,{name:a.icon,class:"h-4 w-4"},null,8,["name"])]),_:2},1032,["to"])),64))])}}}),ae={class:"grid grid-cols-2 gap-4"},oe={class:"text-center"},ne={class:"text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300"},re={class:"text-muted-400 font-sans text-xs font-medium uppercase"},ce=h({__name:"DemoDaysSquare",props:{shape:{default:"rounded"}},setup(l){const o=l,d=[{name:"Monday",date:22,url:"/"},{name:"Tuesday",date:23,url:"/"},{name:"Wednesday",date:24,url:"/"},{name:"Friday",date:25,url:"/"}];return(p,u)=>{const r=x;return c(),i("div",ae,[(c(),i(f,null,g(d,a=>e(r,{key:a.name,to:a.url,class:v(["dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl",[o.shape==="rounded"?"rounded-md":"",o.shape==="curved"?"rounded-xl":""]])},{default:t(()=>[s("div",oe,[s("span",ne,_(a.date),1),s("p",re,_(a.name),1)])]),_:2},1032,["to","class"])),64))])}}}),ie={class:"flex flex-col gap-4"},le={class:"text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 font-sans text-sm transition-colors duration-300"},de=h({__name:"DemoMenuIconList",props:{shape:{default:"rounded"}},setup(l){const o=l,d=[{name:"Global",url:"/",icon:"lucide:circle"},{name:"Business",url:"/",icon:"lucide:briefcase"},{name:"Entertainment",url:"/",icon:"lucide:play"},{name:"Design",url:"/",icon:"lucide:feather"},{name:"Files",url:"/",icon:"lucide:file"}];return(p,u)=>{const r=k,a=x;return c(),i("div",ie,[(c(),i(f,null,g(d,m=>e(a,{key:m.name,to:m.url,class:"group flex items-center gap-3"},{default:t(()=>[s("div",{class:v(["text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-primary-500/30 flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-xl dark:group-hover:text-white",[o.shape==="rounded"?"rounded-lg":"",o.shape==="curved"?"rounded-xl":""]])},[e(r,{name:m.icon,class:"h-4 w-4"},null,8,["name"])],2),s("span",le,_(m.name),1)]),_:2},1032,["to"])),64))])}}}),ue={class:"mb-6"},me={class:"text-muted-500"},pe=h({__name:"DemoActionText",props:{title:{},text:{},label:{},to:{},shape:{default:"rounded"}},setup(l){const o=l;return(d,p)=>{const u=$,r=D,a=F;return c(),i("div",{class:v(["bg-muted-200 dark:bg-muted-800 p-6",[o.shape==="rounded"?"rounded-md":"",o.shape==="curved"?"rounded-xl":""]])},[s("div",ue,[e(u,{as:"h3",size:"md",weight:"light",lead:"tight",class:"text-muted-800 mb-2 dark:text-white"},{default:t(()=>[s("span",null,_(o.title),1)]),_:1}),e(r,{size:"xs"},{default:t(()=>[s("span",me,_(o.text),1)]),_:1})]),e(a,{to:o.to,shape:o.shape,color:"primary",class:"w-full"},{default:t(()=>[j(_(o.label),1)]),_:1},8,["to","shape"])],2)}}}),_e={class:"ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4"},he={class:"relative flex flex-col gap-4"},fe={class:"mb-6 flex items-center justify-between"},ge=s("span",null,"Personal Score",-1),xe={class:"py-16"},ve={class:"mt-auto text-center"},be=s("span",{class:"text-muted-400"}," Your score has been calculated based on the latest metrics ",-1),ye={class:"flex w-full items-center justify-between"},we={class:"relative flex flex-col gap-4"},ke={class:"relative flex flex-col gap-4"},$e={class:"relative flex flex-col gap-4"},De={class:"mb-6 flex items-center justify-between"},Be=s("span",null,"Popular topics",-1),Ve=h({__name:"index",setup(l){const o=M(d());function d(){const{primary:p}=W(),u="radialBar",r=220,a={title:{text:void 0},chart:{sparkline:{enabled:!0},toolbar:{show:!1}},colors:[p.value],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},hollow:{margin:0,size:"35%"},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},m=E([76]);return{type:u,height:r,options:a,series:m}}return(p,u)=>{const r=$,a=q,m=D,n=Y,B=H,C=G,L=K,b=ee,P=se,T=ce,A=de,y=O,I=Q,z=U,N=R,S=pe;return c(),i("div",_e,[s("div",he,[e(n,{shape:"curved",class:"flex flex-col p-6"},{default:t(()=>[s("div",fe,[e(r,{as:"h3",size:"sm",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:t(()=>[ge]),_:1})]),s("div",xe,[e(a,V(w(o),{class:"-mt-14"}),null,16)]),s("div",ve,[e(m,{size:"sm"},{default:t(()=>[be]),_:1})])]),_:1}),e(n,{shape:"curved",class:"p-6"},{default:t(()=>[e(B)]),_:1}),e(n,{shape:"curved",class:"p-6"},{default:t(()=>[s("div",ye,[e(C,{shape:"curved"})])]),_:1}),e(n,{shape:"curved",class:"p-3"},{default:t(()=>[e(L,{shape:"curved"})]),_:1}),e(n,{shape:"curved",class:"p-6"},{default:t(()=>[e(b,{shape:"curved"})]),_:1})]),s("div",we,[e(n,{shape:"curved",class:"p-4"},{default:t(()=>[e(P,{shape:"curved"})]),_:1}),e(n,{shape:"curved",class:"p-4"},{default:t(()=>[e(T,{shape:"curved"})]),_:1}),e(n,{shape:"curved",class:"p-2"},{default:t(()=>[e(w(X),{attributes:[{key:"today",dot:!0,bar:!1,content:"Today",customData:{},event:{},hashcode:"today",highlight:!1,order:0,pinPage:!1,popover:{},dates:[new Date]}],"title-position":"left",expanded:"",borderless:"",transparent:"","trim-weeks":"",class:"max-w-full rounded-xl"},null,8,["attributes"])]),_:1}),e(n,{shape:"curved",class:"p-4"},{default:t(()=>[e(A,{shape:"curved"})]),_:1})]),s("div",ke,[e(n,{shape:"curved",class:"p-6"},{default:t(()=>[e(y,{title:"Payment",icon:"lucide:bell",text:"You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details.",indicator:""})]),_:1}),e(n,{shape:"curved",class:"p-3"},{default:t(()=>[e(I,{src:"/img/illustrations/widgets/mountain-picture.svg",alt:"Picture widget image description",shape:"curved",height:286,width:212,loading:""})]),_:1}),e(n,{shape:"curved",class:"p-6"},{default:t(()=>[e(z,{picture:"/img/avatars/10.svg",name:"Kendra W.",title:"Design Project",text:"Where are we in terms of design? We need to review the new screens.",time:"28 minutes",shape:"curved"})]),_:1})]),s("div",$e,[e(n,{shape:"curved",class:"p-6"},{default:t(()=>[s("div",De,[e(r,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:t(()=>[Be]),_:1})]),e(b,{shape:"curved"})]),_:1}),e(n,{class:"p-6",shape:"curved"},{default:t(()=>[e(N)]),_:1}),e(S,{title:"Upgrade to Pro",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius.",label:"Upgrade Now",to:"#",shape:"curved"}),e(n,{shape:"curved",class:"p-6"},{default:t(()=>[e(y,{title:"Messages",icon:"lucide:message-square",text:"You currently have more than 10 unread messages in your inbox. It could be a good time to check them out.",indicator:""})]),_:1})])])}}});export{Ve as default};
