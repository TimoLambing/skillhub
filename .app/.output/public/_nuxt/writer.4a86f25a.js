import{d as f,o as u,e as p,K as C,L as A,f as s,g as t,w as e,s as c,I as v,_ as b,l as w,n as k,x as L,h as r,j as x,m as P,y as j,p as H}from"./entry.ce48552a.js";import{_ as R}from"./BaseButtonIcon.vue.5cf852a6.js";import{_ as T}from"./DemoCommentListCompact.vue.78eae567.js";import{_ as I}from"./BaseButtonAction.vue.d75f6bf2.js";const M={class:"mb-2 space-y-5"},S={class:"text-muted-400"},V={class:"ms-auto flex items-center gap-1"},D={class:"text-muted-400 font-sans text-xs"},K=f({__name:"DemoAuthorsListCompact",setup(y){const n=[{id:0,firstName:"Hermann",lastName:"Mayer",image:"/img/avatars/16.svg",text:"HM",role:"Project manager",articles:39},{id:1,firstName:"Sara",lastName:"Connor",image:"/img/avatars/12.svg",text:"SC",role:"Frontend developer",articles:24},{id:2,firstName:"Kendra",lastName:"Wilson",image:"/img/avatars/10.svg",text:"KW",role:"HR manager",articles:17},{id:3,firstName:"John",lastName:"Baxter",image:"/img/avatars/13.svg",text:"NL",role:"Business analyst",articles:11}];return(z,d)=>{const o=v,l=b,_=w,m=k,i=R;return u(),p("div",M,[(u(),p(C,null,A(n,a=>s("div",{key:a.id,class:"flex items-center gap-3"},[t(o,{src:a.image,text:a.text,shape:"straight",mask:"blob",class:"bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"},null,8,["src","text"]),s("div",null,[t(l,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:e(()=>[s("span",null,c(a.firstName)+" "+c(a.lastName.slice(0,1))+".",1)]),_:2},1024),t(_,{size:"xs"},{default:e(()=>[s("span",S,c(a.role),1)]),_:2},1024)]),s("div",V,[s("span",D,c(a.articles)+" articles ",1),t(i,{shape:"curved",muted:"",class:"scale-75"},{default:e(()=>[t(m,{name:"lucide:arrow-right",class:"h-4 w-4"})]),_:1})])])),64))])}}}),U=""+globalThis.__publicAssetsURL("img/illustrations/dashboards/writer/readers.svg"),F=""+globalThis.__publicAssetsURL("img/illustrations/dashboards/writer/post-1.svg"),J=""+globalThis.__publicAssetsURL("img/illustrations/dashboards/writer/post-2.svg"),W={class:"relative"},E={class:"grid grid-cols-12 gap-6"},q={class:"ltablet:col-span-8 col-span-12 lg:col-span-8"},G={class:"grid grid-cols-12 gap-6"},O={class:"col-span-12"},Q={class:"bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"},X=s("div",{class:"relative h-[150px] w-[320px] shrink-0 sm:h-[175px]"},[s("img",{class:"pointer-events-none absolute start-6 top-0 sm:-start-10",src:U,alt:"Readers illustration"})],-1),Y={class:"mt-6 grow sm:mt-0"},Z={class:"pb-4 text-center sm:pb-0 sm:text-left"},ss=s("span",null,"Hello, Maya",-1),ts=s("span",null," Have any ideas for a new article? If not, you should definitely check the feed for some inspiration. ",-1),es={class:"mt-2"},as=s("span",null,"New Article",-1),os={class:"col-span-12"},ls={class:"grid grid-cols-12 gap-6"},is={class:"col-span-12 sm:col-span-6"},ns={class:"flex flex-col gap-6"},ds={class:"grid grid-cols-12 gap-4"},cs={class:"col-span-4"},rs=s("span",null,"Articles",-1),_s=s("span",{class:"text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"}," 138 ",-1),ms={class:"col-span-4"},us=s("span",null,"Readers",-1),ps=s("span",{class:"text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"}," 921 ",-1),hs={class:"col-span-4"},gs=s("span",null,"Comments",-1),xs=s("span",{class:"text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"}," 279 ",-1),fs={class:"mb-8 flex items-center justify-between"},vs=s("span",null,"Popular authors",-1),bs={class:"col-span-12 sm:col-span-6"},ws={class:"mb-8 flex items-center justify-between"},ks=s("span",null,"Latest comments",-1),ys={class:"ltablet:col-span-4 col-span-12 lg:col-span-4"},zs={class:"bg-muted-200 dark:bg-muted-800/70 rounded-2xl p-6"},Bs={class:"mb-8 flex items-center justify-between"},Ns=s("span",null,"New articles",-1),$s={class:"flex scale-90 gap-2 sm:justify-end"},Cs={class:"ptablet:grid ptablet:grid-cols-2 flex flex-col gap-6"},As=s("img",{src:F,alt:"Post image",class:"bg-muted-200 rounded-xl"},null,-1),Ls={class:"mb-3"},Ps=s("span",null,"Learning the modern novel",-1),js=s("span",{class:"text-muted-400"}," Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ",-1),Hs={class:"flex gap-3"},Rs=s("span",null,"Mike Janovski",-1),Ts=s("span",{class:"text-muted-400"},"Novel writer",-1),Is=s("img",{src:J,alt:"Post image",class:"bg-muted-200 rounded-xl"},null,-1),Ms={class:"mb-3"},Ss=s("span",null,"5 writing tips just for you",-1),Vs=s("span",{class:"text-muted-400"}," Some article content and lorem ipsum sit dolor amet as a nice dummy subtitle ",-1),Ds={class:"flex gap-3"},Ks=s("span",null,"Clarissa Miller",-1),Us=s("span",{class:"text-muted-400"},"Novel writer",-1),qs=f({__name:"writer",setup(y){const n=L("recent");return(z,d)=>{const o=b,l=w,_=k,m=P,i=j,a=H,B=K,N=T,h=I,g=v;return u(),p("div",W,[s("div",E,[s("div",q,[s("div",G,[s("div",O,[s("div",Q,[X,s("div",Y,[s("div",Z,[t(o,{tag:"h1",class:"text-white opacity-90"},{default:e(()=>[ss]),_:1}),t(l,{size:"sm",class:"max-w-xs text-white opacity-70"},{default:e(()=>[ts]),_:1}),s("div",es,[t(m,{size:"sm",color:"light",flavor:"outline",class:"w-full sm:w-auto"},{default:e(()=>[t(_,{name:"lucide:plus",class:"h-4 w-4"}),as]),_:1})])])])])]),s("div",os,[s("div",ls,[s("div",is,[s("div",ns,[s("div",ds,[s("div",cs,[t(i,{shape:"curved",class:"p-4"},{default:e(()=>[t(l,{size:"xs",weight:"medium",class:"text-muted-400 uppercase"},{default:e(()=>[rs]),_:1}),_s]),_:1})]),s("div",ms,[t(i,{shape:"curved",class:"p-4"},{default:e(()=>[t(l,{size:"xs",weight:"medium",class:"text-muted-400 uppercase"},{default:e(()=>[us]),_:1}),ps]),_:1})]),s("div",hs,[t(i,{shape:"curved",class:"p-4"},{default:e(()=>[t(l,{size:"xs",weight:"medium",class:"text-muted-400 uppercase"},{default:e(()=>[gs]),_:1}),xs]),_:1})])]),t(i,{class:"p-6",shape:"curved"},{default:e(()=>[s("div",fs,[t(o,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:e(()=>[vs]),_:1}),t(a,{to:"#",class:"bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:e(()=>[r(" View All ")]),_:1})]),t(B)]),_:1})])]),s("div",bs,[t(i,{class:"p-6",shape:"curved"},{default:e(()=>[s("div",ws,[t(o,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:e(()=>[ks]),_:1}),t(a,{to:"#",class:"bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:e(()=>[r(" View All ")]),_:1})]),t(N)]),_:1})])])])])]),s("div",ys,[s("div",zs,[s("div",Bs,[t(o,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:e(()=>[Ns]),_:1}),s("div",$s,[t(h,{small:"",color:x(n)==="recent"?"primary":"default",onClick:d[0]||(d[0]=$=>n.value="recent")},{default:e(()=>[r(" Recent ")]),_:1},8,["color"]),t(h,{small:"",color:x(n)==="popular"?"primary":"default",onClick:d[1]||(d[1]=$=>n.value="popular")},{default:e(()=>[r(" Popular ")]),_:1},8,["color"])])]),s("div",Cs,[t(a,{to:"#",class:"flex flex-col"},{default:e(()=>[As,t(i,{class:"shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl"},{default:e(()=>[s("div",Ls,[t(o,{as:"h4",size:"md",weight:"light",lead:"tight",class:"text-muted-800 mb-1 dark:text-white"},{default:e(()=>[Ps]),_:1}),t(l,{size:"xs"},{default:e(()=>[js]),_:1})]),s("div",Hs,[t(g,{src:"/img/avatars/6.svg",text:"BT",size:"xs",class:"bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"}),s("div",null,[t(o,{as:"h4",size:"xs",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:e(()=>[Rs]),_:1}),t(l,{size:"xs"},{default:e(()=>[Ts]),_:1})])])]),_:1})]),_:1}),t(a,{to:"#",class:"flex flex-col"},{default:e(()=>[Is,t(i,{class:"shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl"},{default:e(()=>[s("div",Ms,[t(o,{as:"h4",size:"md",weight:"light",lead:"tight",class:"text-muted-800 mb-1 dark:text-white"},{default:e(()=>[Ss]),_:1}),t(l,{size:"xs"},{default:e(()=>[Vs]),_:1})]),s("div",Ds,[t(g,{src:"/img/avatars/5.svg",text:"BT",size:"xs",class:"bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"}),s("div",null,[t(o,{as:"h4",size:"xs",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:e(()=>[Ks]),_:1}),t(l,{size:"xs"},{default:e(()=>[Us]),_:1})])])]),_:1})]),_:1})])])])])])}}});export{qs as default};
