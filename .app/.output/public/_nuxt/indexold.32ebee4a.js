import{d as T,A as _,B as p,x as h,o as A,e as C,f as t,g as e,w as s,a1 as $,j as f,h as j,C as g,D as x,I as S,_ as E,l as M,m as P,n as Z,y as H,p as L}from"./entry.ce48552a.js";import{_ as N}from"./BaseIconBox.vue.b814d5d7.js";import{_ as R}from"./AddonApexcharts.vue.9f9dfd35.js";import"./client-only.827b42de.js";const F={class:"mb-8 flex flex-col justify-between md:flex-row md:items-center"},I={class:"ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"},V=t("span",null,"Welcome back, Maya",-1),D=t("span",{class:"text-muted-500"}," Happy to see you again on your dashboard. ",-1),Y={class:"mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"},J=t("span",null,"View Reports",-1),O=t("span",null,"Manage Store",-1),W={class:"grid grid-cols-12 gap-6"},Q={class:"ltablet:col-span-6 col-span-12 lg:col-span-6"},q={class:"mb-6"},G=t("span",null,"Your Quick Stats",-1),K={class:"grid gap-4 md:grid-cols-2"},U={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},X=t("span",null,"2,870",-1),tt=t("span",{class:"text-muted-500 dark:text-muted-400"}," Sales this month ",-1),et={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},st=t("span",null,"159",-1),at=t("span",{class:"text-muted-500 dark:text-muted-400"}," New users ",-1),ot={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},lt=t("span",null,"$429.18",-1),nt=t("span",{class:"text-muted-500 dark:text-muted-400"}," Earned today ",-1),dt={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},it=t("span",null,"$6816.32",-1),rt=t("span",{class:"text-muted-500 dark:text-muted-400"}," Total balance ",-1),ct={class:"ltablet:col-span-6 col-span-12 lg:col-span-6"},mt={class:"mb-6"},ut=t("span",null,"Customers",-1),_t={class:"ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4"},pt={class:"relative z-20 flex flex-col gap-3 py-10 text-center"},ht=t("span",null,"Hey Maya, you're doing great.",-1),ft=t("span",{class:"text-white/80"}," Start using our team and project management tools ",-1),gt={class:"absolute bottom-4 end-4 z-10 flex h-14 w-14 items-center justify-center"},xt={class:"ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4"},bt={class:"mb-6"},wt=t("span",null,"Team Efficiency",-1),vt={class:"absolute inset-x-0 top-24 flex items-center justify-center gap-4"},yt={class:"ltablet:col-span-4 col-span-12 lg:col-span-4"},kt={class:"mb-6"},zt=t("span",null,"Profit Evolution",-1),jt=T({__name:"indexold",setup(Bt){const b=_(y()),w=_(k()),v=_(z());function y(){const{primary:i,info:r,success:l}=p(),a="area",o=258,n={chart:{toolbar:{show:!1}},colors:[i.value,r.value,l.value],title:{show:!1,text:void 0,align:"left"},legend:{show:!0,position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},d=h([{name:"Returning",data:[31,40,28,51,42,109,100]},{name:"Newcomers",data:[11,32,45,32,34,52,41]},{name:"Abandonned",data:[78,53,36,10,14,5,2]}]);return{type:a,height:o,options:n,series:d}}function k(){const{primary:i}=p(),r="radialBar",l=455,a={title:{text:void 0},chart:{sparkline:{enabled:!0},toolbar:{show:!1}},colors:[i.value],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},hollow:{margin:0,size:"40%"},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:80}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},o=h([76]);return{type:r,height:l,options:a,series:o}}function z(){const{primary:i}=p(),r="bar",l=255,a={chart:{toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(n){return n+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["May","Jun","Jul","Aug","Sep"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(n){return n+"%"}}},colors:[i.value],title:{text:void 0,align:"left"}},o=h([{name:"Ratio",data:[2.3,3.1,4,10.1,4]}]);return{type:r,height:l,options:a,series:o}}return(i,r)=>{const l=S,a=E,o=M,n=P,d=Z,m=N,c=H,u=R,B=L;return A(),C("div",null,[t("div",F,[t("div",I,[e(l,{src:"/img/avatars/2.svg",size:"lg"}),t("div",null,[e(a,{as:"h2",size:"xl",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[V]),_:1}),e(o,null,{default:s(()=>[D]),_:1})])]),t("div",Y,[e(n,null,{default:s(()=>[J]),_:1}),e(n,{color:"primary"},{default:s(()=>[O]),_:1})])]),t("div",W,[t("div",Q,[e(c,{class:"p-6"},{default:s(()=>[t("div",q,[e(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[G]),_:1})]),t("div",K,[t("div",U,[e(m,{size:"md",class:"bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",shape:"full"},{default:s(()=>[e(d,{name:"ph:nut-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[X]),_:1}),e(o,{size:"sm"},{default:s(()=>[tt]),_:1})])]),t("div",et,[e(m,{size:"md",class:"bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",shape:"full"},{default:s(()=>[e(d,{name:"ph:handshake-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[st]),_:1}),e(o,{size:"sm"},{default:s(()=>[at]),_:1})])]),t("div",ot,[e(m,{size:"md",class:"bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400",shape:"full"},{default:s(()=>[e(d,{name:"ph:sketch-logo-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[lt]),_:1}),e(o,{size:"sm"},{default:s(()=>[nt]),_:1})])]),t("div",dt,[e(m,{size:"md",class:"bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400",shape:"full"},{default:s(()=>[e(d,{name:"ph:bank-duotone",class:"h-5 w-5"})]),_:1}),t("div",null,[e(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[it]),_:1}),e(o,{size:"sm"},{default:s(()=>[rt]),_:1})])])])]),_:1})]),t("div",ct,[e(c,{class:"p-6"},{default:s(()=>[t("div",mt,[e(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ut]),_:1})]),e(u,$(f(b),{class:"-ms-4"}),null,16)]),_:1})]),t("div",_t,[e(c,{class:"from-primary-600 to-primary-700 relative flex h-full items-center justify-center bg-gradient-to-br p-6"},{default:s(()=>[t("div",pt,[e(a,{as:"h4",size:"lg",weight:"semibold",lead:"tight",class:"text-white"},{default:s(()=>[ht]),_:1}),e(o,{size:"md",class:"mx-auto max-w-[280px]"},{default:s(()=>[ft]),_:1}),e(B,{class:"font-sans text-white underline-offset-4 hover:underline",to:"#"},{default:s(()=>[j(" Learn More ")]),_:1})]),t("div",gt,[e(d,{name:"ph:crown-duotone",class:"text-primary-900/50 h-14 w-14"})])]),_:1})]),t("div",xt,[e(c,{class:"relative p-6"},{default:s(()=>[t("div",bt,[e(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[wt]),_:1})]),t("div",vt,[e(l,{src:"/img/avatars/4.svg"}),e(l,{text:"H",class:"bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"}),e(l,{src:"/img/avatars/3.svg"})]),e(u,g(x(f(w))),null,16)]),_:1})]),t("div",yt,[e(c,{class:"relative p-6"},{default:s(()=>[t("div",kt,[e(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[zt]),_:1})]),e(u,g(x(f(v))),null,16)]),_:1})])])])}}});export{jt as default};
