import{d as u,o as d,a0 as _,w as l,f as e,J as m,g as s,n as p,_ as h,p as g,e as r,h as v,s as n,I as b}from"./entry.46c51c2c.js";import{_ as w}from"./hobby-3.652f4e40.js";const y={class:"relative shrink-0"},k={class:"absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},$={type:"button",class:"border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"},B={class:"flex flex-col"},j=e("p",{class:"text-primary-500 my-1 font-sans text-xs uppercase"}," Suggested Videos ",-1),I=e("span",null,"How to be efficient in Human Resource management",-1),V={class:"text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs"},C=e("span",null,"3,862 views",-1),K=u({__name:"DemoVideoCompact",props:{shape:{default:"rounded"}},setup(c){const t=c;return(x,f)=>{const o=p,a=h,i=g;return d(),_(i,{to:"#",class:"group flex w-full gap-4"},{default:l(()=>[e("div",y,[e("img",{class:m(["h-24 w-20 object-cover object-top",[t.shape==="rounded"?"rounded":"",t.shape==="curved"?"rounded-lg":""]]),src:w,alt:"Widget image"},null,2),e("div",k,[e("button",$,[s(o,{name:"ic:round-play-arrow",class:"group-hover:text-primary-500 h-5 w-5 text-white"})])])]),e("div",B,[j,s(a,{as:"h3",size:"sm",weight:"medium",lead:"tight"},{default:l(()=>[I]),_:1}),e("div",V,[s(o,{name:"lucide:eye",class:"h-4 w-4"}),C])])]),_:1})}}}),H={class:"mb-6 flex items-center justify-between"},N=e("span",null,"Inbox",-1),z={class:"relative"},D=e("div",{class:"absolute -end-1 top-0.5"},[e("span",{class:"relative flex h-2 w-2"},[e("span",{class:"bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"}),e("span",{class:"bg-primary-500 relative inline-flex h-2 w-2 rounded-full"})])],-1),S={class:"mb-4 flex items-center gap-2"},A={key:1,class:"bg-muted-100 dark:bg-muted-700/80 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"},E={class:"text-muted-500 dark:text-muted-400 font-sans text-sm"},J={class:"text-muted-800 dark:text-muted-100"},L={class:"mb-4 flex items-center gap-2"},M=e("div",{class:"bg-success-500 h-2 w-2 shrink-0 rounded-full"},null,-1),R={class:"text-muted-800 dark:text-muted-100 font-sans text-sm"},T={class:"mb-2"},W={class:"text-muted-500 dark:text-muted-400 font-sans text-xs"},q={class:"text-muted-400 font-sans text-xs"},O=u({__name:"DemoInboxMessage",props:{shape:{default:"rounded"},name:{default:void 0},picture:{default:void 0},title:{default:void 0},text:{default:void 0},time:{default:void 0}},setup(c){const t=c;return(x,f)=>{const o=h,a=p,i=b;return d(),r("div",null,[e("div",H,[s(o,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:l(()=>[N]),_:1}),e("div",z,[s(a,{name:"lucide:mail",class:"text-muted-400 h-4 w-4"}),D])]),e("div",S,[t.picture?(d(),_(i,{key:0,src:t.picture,alt:t.name},null,8,["src","alt"])):(d(),r("div",A,[s(a,{name:"ph:user-duotone",class:"text-muted-400 h-4 w-4"})])),e("span",E,[v(" Sent by "),e("span",J,n(t.name),1)])]),e("div",{class:m(["border-muted-200 dark:border-muted-700 border p-3",[t.shape==="rounded"?"rounded":"",t.shape==="curved"?"rounded-lg":""]])},[e("div",L,[M,e("h3",R,n(t.title),1)]),e("div",T,[e("p",W,n(t.text),1)]),e("p",q,n(t.time)+" ago",1)],2)])}}});export{K as _,O as a};
