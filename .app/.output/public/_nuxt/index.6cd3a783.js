import{d as k,o as h,e as p,K as A,L,f as t,g as e,w as s,s as v,n as y,_ as z,l as B,A as N,B as Z,x as j,j as w,h as b,C as D,D as J,m as M,y as P,p as V,I as H}from"./entry.f4bf1c86.js";import{_ as U}from"./BaseIconBox.vue.1923e5b0.js";import{_ as R}from"./BaseAvatarGroup.vue.e7453227.js";import{_ as T}from"./BaseButtonIcon.vue.ee8ad51b.js";import{_ as E}from"./AddonApexcharts.vue.2bb86663.js";import{C as K}from"./index.89da1b4c.js";/* empty css                  */import"./client-only.2725b9bd.js";const Y={class:"mb-2 space-y-5"},F={class:"border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border"},X={class:"text-muted-400"},G={class:"ms-auto flex items-center"},O=k({__name:"DemoTrendingSkills",setup(I){const u=[{id:0,name:"Vue JS",count:149,icon:"logos:vue"},{id:1,name:"React JS",count:117,icon:"logos:react"},{id:2,name:"Nuxt",count:94,icon:"logos:nuxt-icon"},{id:4,name:"Tailwind CSS",count:82,icon:"logos:tailwindcss-icon"}];return(f,g)=>{const l=y,r=z,a=B,d=T;return h(),p("div",Y,[(h(),p(A,null,L(u,n=>t("div",{key:n.id,class:"flex items-center gap-3"},[t("div",F,[e(l,{name:n.icon,class:"h-5 w-5"},null,8,["name"])]),t("div",null,[e(r,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[t("span",null,v(n.name),1)]),_:2},1024),e(a,{size:"xs"},{default:s(()=>[t("span",X," Used by "+v(n.count)+" candidates ",1)]),_:2},1024)]),t("div",G,[e(d,{shape:"curved",muted:"",class:"scale-75"},{default:s(()=>[e(l,{name:"lucide:arrow-right",class:"h-5 w-5"})]),_:1})])])),64))])}}}),W={class:"grid grid-cols-1 md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-6"},q={class:"mb-5"},Q=t("span",null,"Hi, Timo L.",-1),ee=t("span",{class:"text-muted-400"}," You have 6 interviews to conduct during this week. Your current progress is great. Check your schedule and don't miss any activity. ",-1),te={class:"mb-4 mt-auto flex items-center gap-2"},se=t("div",{class:"text-4xl"},[t("span",null,"🎉")],-1),ae=t("span",{class:"text-muted-400 mb-2"},"Your Progress",-1),de=t("span",null,"Outstanding",-1),ie=t("span",null,"View Schedule",-1),oe={class:"grid grid-cols-2 gap-4"},ne=t("span",null,"62K",-1),le=t("span",{class:"text-muted-500 dark:text-muted-400"},"Minutes",-1),re=t("span",null,"263",-1),ce=t("span",{class:"text-muted-500 dark:text-muted-400"},"Interviews",-1),ue=t("span",null,"49",-1),me=t("span",{class:"text-muted-500 dark:text-muted-400"},"Approved",-1),_e=t("span",null,"214",-1),he=t("span",{class:"text-muted-500 dark:text-muted-400"},"Rejected",-1),pe={class:"col-span-2"},fe={class:"mt-auto flex h-full items-end justify-between pb-4"},ge=t("span",null,"Total Interviews",-1),xe=t("span",{class:"text-muted-500 dark:text-muted-400"}," 23 interviews this month ",-1),ve={class:"mb-8 flex items-center justify-between"},we=t("span",null,"Trending skills",-1),be={class:"mb-6 flex items-center justify-between"},ke=t("span",null,"Interviews",-1),ye={class:"flex flex-col gap-4"},ze=t("span",null,"Jonathan K.",-1),Be=t("span",{class:"text-muted-400"},"8:00 am — 9:00 am",-1),Te={class:"ms-auto flex items-center"},Ie=t("span",null,"Erwin S.",-1),$e=t("span",{class:"text-muted-400"},"10:30 am — 11:30 am",-1),Se={class:"ms-auto flex items-center"},Ce=t("span",null,"Jennifer M.",-1),Ae=t("span",{class:"text-muted-400"},"2:00 pm — 3:00 pm",-1),Le={class:"ms-auto flex items-center"},He=k({__name:"index",setup(I){const u=N(f());function f(){const{primary:l,info:r,success:a}=Z(),d="area",n=220,i={chart:{height:220,type:"area",toolbar:{show:!1}},colors:[l.value,r.value,a.value],title:{text:void 0,align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},o=j([{name:"Interviews",data:[31,40,28,51,42,109,100]}]);return{type:d,height:n,options:i,series:o}}const g=[{id:0,tooltip:"Adam Wrangler",src:"/img/avatars/15.svg",text:"EC",role:"UI/UX designer"},{id:1,tooltip:"Jennifer Miller",src:"/img/avatars/5.svg",text:"JM",role:"Frontend developer"},{id:2,tooltip:"Tara Svenson",src:"/img/avatars/4.svg",text:"TS",role:"Software architect"},{id:3,tooltip:"Naomi Liversky",src:void 0,text:"NL",role:"UI/UX designer"}];return(l,r)=>{const a=z,d=B,n=M,i=P,o=y,c=U,$=R,x=V,S=O,C=E,m=H,_=T;return h(),p("div",W,[t("div",null,[e(i,{class:"bg-muted-200 flex h-full flex-col border-0 p-8",shape:"curved"},{default:s(()=>[t("div",q,[e(a,{as:"h2",size:"3xl",weight:"light",lead:"tight",class:"text-muted-800 mb-2 dark:text-white"},{default:s(()=>[Q]),_:1}),e(d,{size:"sm"},{default:s(()=>[ee]),_:1})]),t("div",te,[se,t("div",null,[e(d,{size:"xs"},{default:s(()=>[ae]),_:1}),e(a,{as:"h4",size:"md",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[de]),_:1})])]),t("div",null,[e(n,{color:"primary",shape:"curved",class:"h-11 w-full"},{default:s(()=>[ie]),_:1})])]),_:1})]),t("div",oe,[e(i,{shape:"curved",class:"flex items-center gap-2 p-3"},{default:s(()=>[e(c,{size:"sm",class:"bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2",shape:"full"},{default:s(()=>[e(o,{name:"ph:timer-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"sm",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ne]),_:1}),e(d,{size:"xs"},{default:s(()=>[le]),_:1})])]),_:1}),e(i,{shape:"curved",class:"flex items-center gap-2 p-3"},{default:s(()=>[e(c,{size:"sm",class:"bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",shape:"full"},{default:s(()=>[e(o,{name:"ph:broadcast-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"sm",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[re]),_:1}),e(d,{size:"xs"},{default:s(()=>[ce]),_:1})])]),_:1}),e(i,{shape:"curved",class:"flex items-center gap-2 p-3"},{default:s(()=>[e(c,{size:"sm",class:"bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400",shape:"full"},{default:s(()=>[e(o,{name:"ph:user-plus-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"sm",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ue]),_:1}),e(d,{size:"xs"},{default:s(()=>[me]),_:1})])]),_:1}),e(i,{shape:"curved",class:"flex items-center gap-2 p-3"},{default:s(()=>[e(c,{size:"sm",class:"bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",shape:"full"},{default:s(()=>[e(o,{name:"ph:door-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"sm",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[_e]),_:1}),e(d,{size:"xs"},{default:s(()=>[he]),_:1})])]),_:1}),t("div",pe,[t("div",fe,[t("div",null,[e(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ge]),_:1}),e(d,{size:"xs"},{default:s(()=>[xe]),_:1})]),t("div",null,[e($,{avatars:g,size:"sm",limit:2})])])])]),t("div",null,[e(i,{class:"p-4",shape:"curved"},{default:s(()=>[e(w(K),{attributes:[{key:"today",dot:!0,bar:!1,content:"Today",customData:{},event:{},hashcode:"today",highlight:!1,order:0,pinPage:!1,popover:{},dates:[new Date]}],"title-position":"left",expanded:"",borderless:"",transparent:"","trim-weeks":"",class:"max-w-full rounded-xl"},null,8,["attributes"])]),_:1})]),t("div",null,[e(i,{class:"p-6",shape:"curved"},{default:s(()=>[t("div",ve,[e(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[we]),_:1}),e(x,{to:"#",class:"bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:s(()=>[b(" View All ")]),_:1})]),e(S)]),_:1})]),t("div",null,[e(i,{shape:"curved",class:"p-6"},{default:s(()=>[t("div",be,[e(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ke]),_:1}),e(x,{to:"#",class:"bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:s(()=>[b(" Reports ")]),_:1})]),e(C,D(J(w(u))),null,16)]),_:1})]),t("div",ye,[e(i,{shape:"curved",class:"flex items-center gap-3 p-4"},{default:s(()=>[e(m,{src:"/img/avatars/11.svg",size:"md"}),t("div",null,[e(a,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ze]),_:1}),e(d,{size:"xs"},{default:s(()=>[Be]),_:1})]),t("div",Te,[e(_,{shape:"curved",muted:"",class:"scale-75"},{default:s(()=>[e(o,{name:"lucide:arrow-right",class:"h-5 w-5"})]),_:1})])]),_:1}),e(i,{shape:"curved",class:"flex items-center gap-3 p-4"},{default:s(()=>[e(m,{src:"/img/avatars/16.svg",size:"md"}),t("div",null,[e(a,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[Ie]),_:1}),e(d,{size:"xs"},{default:s(()=>[$e]),_:1})]),t("div",Se,[e(_,{shape:"curved",muted:"",class:"scale-75"},{default:s(()=>[e(o,{name:"lucide:arrow-right",class:"h-5 w-5"})]),_:1})])]),_:1}),e(i,{shape:"curved",class:"flex items-center gap-3 p-4"},{default:s(()=>[e(m,{src:"/img/avatars/5.svg",size:"md"}),t("div",null,[e(a,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[Ce]),_:1}),e(d,{size:"xs"},{default:s(()=>[Ae]),_:1})]),t("div",Le,[e(_,{shape:"curved",muted:"",class:"scale-75"},{default:s(()=>[e(o,{name:"lucide:arrow-right",class:"h-5 w-5"})]),_:1})])]),_:1})])])}}});export{He as default};