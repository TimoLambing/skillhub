import{d as $,x as u,bI as j,o as d,e as m,f as e,g as s,j as a,w as t,h as o,s as k,J as w,K as L,L as N,a0 as T,S as y,T as I,I as W,v as D,n as F,q as V,_ as E,m as P,l as O}from"./entry.ce48552a.js";const S={class:"w-full flex items-center gap-3 text-start"},q={key:0,class:"absolute overflow-hidden min-w-[280px] md:min-w-[575px] top-12 end-0 md:start-0 w-full rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"},A={class:"grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-muted-200 md:dark:divide-muted-700"},H={class:"flex items-center border-b border-muted-200 dark:border-muted-700"},J={type:"button",class:"px-2 py-1 rounded-lg border border-muted-200 dark:border-muted-700 ms-auto me-2"},K={class:"p-3 flex flex-col h-[calc(100%_-_2.5rem)]"},G={class:"my-3"},M={class:"space-y-1"},Q=["onClick"],R={class:"mt-auto"},U=e("span",null,"Create Workspace",-1),X={class:"hidden md:block"},Y={class:"flex items-center border-b border-muted-200 dark:border-muted-700"},Z={type:"button",class:"px-2 py-1 rounded-lg border border-muted-200 dark:border-muted-700 ms-auto me-2"},ee={class:"p-3 flex flex-col h-[calc(100%_-_2.5rem)]"},se={class:"my-3"},te={class:"mt-auto"},oe=e("span",null,"Create Project",-1),de=$({__name:"DemoTopnavWorkspaceDropdown",setup(ae){const p=u([{id:1,name:"Nitro Inc.",logo:"/img/icons/logos/nitro.svg"},{id:2,name:"Okano LLC",logo:"/img/icons/logos/okano.svg"},{id:3,name:"Flashlite LLC",logo:"/img/icons/logos/flashlite.svg"}]),r=u(p.value[0]),f=u(null),n=u(!1);function z(){n.value=!0}j(f,()=>n.value=!1);function C(h){r.value=h,n.value=!1}return(h,x)=>{const g=W,c=D,i=F,v=V,_=E,b=P,B=O;return d(),m("div",{ref_key:"target",ref:f,class:"relative w-full z-10 group/workspace max-w-[170px] md:max-w-[240px] ms-auto md:ms-0"},[e("button",{type:"button",class:w(["w-full py-2 ps-2 pe-3 group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 rounded-xl max-w-[170px] md:max-w-[240px] transition-colors duration-300",a(n)&&"bg-muted-100 dark:bg-muted-900/60"]),onClick:x[0]||(x[0]=l=>z())},[e("span",S,[s(g,{size:"xxs",src:a(r).logo},null,8,["src"]),e("div",null,[s(c,{size:"sm",class:"block text-muted-800 dark:text-muted-200 line-clamp-1"},{default:t(()=>[o(k(a(r).name),1)]),_:1})]),s(i,{name:"lucide:chevrons-up-down",class:w(["w-4 h-4 ms-auto text-muted-400 transition-transform duration-300",a(n)&&"rotate-180"])},null,8,["class"])])],2),s(I,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:t(()=>[a(n)?(d(),m("div",q,[e("div",A,[e("div",null,[e("div",H,[s(v,{icon:"lucide:search",placeholder:"Find a team...",classes:{input:"border-none !outline-none !bg-transparent"}}),e("button",J,[s(c,{size:"xs"},{default:t(()=>[o("Esc")]),_:1})])]),e("div",K,[s(_,{as:"h4",size:"sm",weight:"medium",class:"text-muted-400"},{default:t(()=>[o("Workspaces")]),_:1}),e("div",G,[e("ul",M,[(d(!0),m(L,null,N(a(p),l=>(d(),m("li",{key:l.id},[e("button",{type:"button",class:"flex items-center gap-2 py-2 ps-2 pe-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800 w-full transition-colors duration-200",onClick:ne=>C(l)},[s(g,{size:"xxs",src:l.logo},null,8,["src"]),s(c,{size:"sm"},{default:t(()=>[o(k(l.name),1)]),_:2},1024),a(r)===l?(d(),T(i,{key:0,name:"lucide:check",class:"w-4 h-4 text-primary-500 ms-auto"})):y("",!0)],8,Q)]))),128))])]),e("div",R,[s(b,{shape:"smooth",class:"w-full"},{default:t(()=>[s(i,{name:"lucide:plus",class:"w-4 h-4"}),U]),_:1})])])]),e("div",X,[e("div",Y,[s(v,{icon:"lucide:search",placeholder:"Find project...",classes:{input:"border-none !outline-none !bg-transparent"}}),e("button",Z,[s(c,{size:"xs"},{default:t(()=>[o("Esc")]),_:1})])]),e("div",ee,[s(_,{as:"h4",size:"sm",weight:"medium",class:"text-muted-400"},{default:t(()=>[o("Projects")]),_:1}),e("div",se,[e("ul",null,[e("li",null,[e("div",null,[s(_,{size:"sm",weight:"medium"},{default:t(()=>[o("No projects yet")]),_:1}),s(B,{size:"xs",class:"text-muted-400"},{default:t(()=>[o("This workspace has no projects.")]),_:1})])])])]),e("div",te,[s(b,{shape:"smooth",class:"w-full"},{default:t(()=>[s(i,{name:"lucide:plus",class:"w-4 h-4"}),oe]),_:1})])])])])])):y("",!0)]),_:1})],512)}}});export{de as default};
