import{d as x,bv as v,ah as b,r as $,bb as j,a1 as L,o as p,a as h,b as t,e,w as o,D as d,h as s,f as l,t as T,p as C,m as S,l as B,bk as N,$ as w,bO as O,A,V as D}from"./entry.f45bc14e.js";import{_ as V}from"./BaseButtonAction.vue.e31140d3.js";import{_ as z}from"./BaseThemeToggle.vue.654e66a0.js";import"./composables.7a94344b.js";const K={class:"fixed inset-x-0 top-0 z-50 group/nav ltablet:max-w-[1000px] ptablet:max-w-[47rem] mx-auto lg:max-w-full group-[&.scrolled]/landing:mt-0 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200"},M={class:"w-full backdrop-blur-md group-[&.scrolled]/landing:dark:bg-muted-950/30 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 border-b group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:motion-safe:shadow-xl"},P={class:"mx-auto lg:max-w-7xl flex p-4"},W={class:"flex w-1/2 items-center gap-2 md:w-1/5"},E={class:"flex flex-row"},G={class:"px-6"},I={class:"group-[&.scrolled]/landing:dark:bg-muted-800 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:group-hover:text-muted-600 group-[&.scrolled]/landing:dark:group-hover:text-muted-100 rounded-lg border px-2 py-0.5 group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white group-[&.scrolled]/landing:shadow motion-safe:transition-colors motion-safe:duration-300"},R={class:"font-sans text-sm tracking-wide whitespace-nowrap"},q={class:"flex-grow flex items-center justify-end gap-4 md:w-1/5"},F=["aria-label"],H={class:"space-y-1.5"},J=x({__name:"LandingNavbar",setup(m){v();const i=b("search-open",()=>!1),n=$(!1),f=j();return L(),(c,r)=>{const k=C,a=S,u=V,_=B,y=z;return p(),h("div",K,[t("div",M,[t("div",P,[t("div",W,[e(a,{to:"/",class:"ms-2 inline-flex","aria-label":"Go to Tairo homepage"},{default:o(()=>[e(k,{class:"text-primary-500 group-[&.scrolled]/landing:h-5 group-[&:not(.scrolled)]/landing:h-5 motion-safe:transition-all motion-safe:duration-200"})]),_:1})]),t("div",{class:d(["ltablet:static ltablet:w-auto ltablet:flex ltablet:flex-row dark:bg-muted-950 ltablet:!bg-transparent ltablet:mx-0 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:!bg-transparent",[s(n)?"shadow-muted-300/30 dark:shadow-muted-900/20 group-[&.scrolled]/landing:ltablet:mt-0 group-[&:not(.scrolled)]/landing:ltablet:mt-0 flex flex-col space-y-4 rounded-xl p-6 shadow-xl group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:lg:mt-0 group-[&:not(.scrolled)]/landing:lg:mt-0":"hidden"]])},[e(a,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:o(()=>[l(" Recruiters ")]),_:1}),e(a,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:o(()=>[l(" Talents ")]),_:1}),e(a,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:o(()=>[l(" About ")]),_:1}),e(a,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:o(()=>[l(" Contact ")]),_:1}),e(a,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:o(()=>[l(" Articles ")]),_:1}),t("div",E,[e(a,{to:"/auth",class:"lg:hidden"},{default:o(()=>[e(u,{shape:"full",color:"muted"},{default:o(()=>[l(" Login ")]),_:1})]),_:1}),e(a,{to:"/auth",class:"lg:hidden"},{default:o(()=>[e(u,{shape:"curved",color:"primary"},{default:o(()=>[l(" Download ")]),_:1})]),_:1})]),t("div",G,[t("button",{type:"button",class:"group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-100 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:text-muted-400 group-[&.scrolled]/landing:dark:text-muted-500 group-[&.scrolled]/landing:hover:text-primary-500 group-[&.scrolled]/landing:dark:hover:text-primary-500 group-[&:not(.scrolled)]/landing:text-muted-800 group-[&:not(.scrolled)]/landing:dark:text-muted-200 group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3 group-[&.scrolled]/landing:border",onClick:r[0]||(r[0]=g=>i.value=!0),"aria-label":"Open search"},[e(_,{name:"lucide:search",class:"h-4 w-4 motion-safe:transition-colors motion-safe:duration-300"}),t("span",I,[t("kbd",R,T(s(f))+" + k ",1)])])])],2),t("div",q,[t("button",{type:"button",class:"border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4",onClick:r[1]||(r[1]=()=>{const g=("useState"in c?c.useState:s(b))("switcher-open",()=>!1);g.value=!0})},[e(_,{name:"ph:drop-half-bottom-duotone",class:"text-muted-400 h-5 w-5"})]),e(y,{"aria-label":"Toggle darkmode"}),e(a,{to:"/auth",class:"hidden lg:flex"},{default:o(()=>[e(u,{shape:"full",color:"muted"},{default:o(()=>[l("Login")]),_:1})]),_:1}),e(a,{to:"/auth",class:"hidden lg:flex"},{default:o(()=>[e(u,{shape:"curved",color:"primary"},{default:o(()=>[l(" Download ")]),_:1})]),_:1}),t("button",{type:"button",class:"ltablet:hidden flex items-center justify-center lg:hidden",onClick:r[2]||(r[2]=g=>n.value=!s(n)),"aria-label":s(n)?"Close menu":"Open menu"},[t("div",H,[t("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",s(n)?"w-2":"w-6"])},null,2),t("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",(s(n),"w-6")])},null,2),t("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",s(n)?"w-4":"w-6"])},null,2)])],8,F)])])])])}}}),Q=x({__name:"LandingLayout",setup(m){const{y:i}=N();return(n,f)=>{const c=J,r=O;return p(),h("div",{class:d(["group/landing overflow-hidden",s(i)>60?"scrolled":""])},[e(c),w(n.$slots,"default"),e(r)],2)}}}),U={};function X(m,i){const n=Q;return p(),D(n,null,{default:o(()=>[w(m.$slots,"default")]),_:3})}const oe=A(U,[["render",X]]);export{oe as default};