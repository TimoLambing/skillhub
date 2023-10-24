import{d as x,bl as v,ah as b,r as j,bu as $,a1 as L,o as g,a as h,b as t,e,w as n,D as d,h as a,f as r,t as T,p as C,m as N,l as S,a_ as B,$ as w,bN as O,A,V}from"./entry.573a177d.js";import{_ as D}from"./BaseThemeToggle.vue.b4959033.js";import{_ as z}from"./BaseButtonAction.vue.f302cd27.js";import"./composables.221d1862.js";const K={class:"fixed inset-x-0 top-0 z-50 group/nav ltablet:max-w-[1000px] ptablet:max-w-[47rem] mx-auto lg:max-w-full group-[&.scrolled]/landing:mt-0 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200"},M={class:"w-full backdrop-blur-md group-[&.scrolled]/landing:dark:bg-muted-950/30 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 border-b group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:motion-safe:shadow-xl"},P={class:"mx-auto lg:max-w-7xl flex p-4"},W={class:"flex w-1/2 items-center gap-2 md:w-1/5"},E={class:"px-6"},G={class:"group-[&.scrolled]/landing:dark:bg-muted-800 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:group-hover:text-muted-600 group-[&.scrolled]/landing:dark:group-hover:text-muted-100 rounded-lg border px-2 py-0.5 group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white group-[&.scrolled]/landing:shadow motion-safe:transition-colors motion-safe:duration-300"},I={class:"font-sans text-sm tracking-wide"},R={class:"flex-grow flex items-center justify-end gap-4 md:w-1/5"},q=["aria-label"],F={class:"space-y-1.5"},H=x({__name:"LandingNavbar",setup(u){v();const i=b("search-open",()=>!1),o=j(!1),p=$();return L(),(c,l)=>{const k=C,s=N,f=S,y=D,_=z;return g(),h("div",K,[t("div",M,[t("div",P,[t("div",W,[e(s,{to:"/",class:"ms-2 inline-flex","aria-label":"Go to Tairo homepage"},{default:n(()=>[e(k,{class:"text-primary-500 group-[&.scrolled]/landing:h-5 group-[&:not(.scrolled)]/landing:h-5 motion-safe:transition-all motion-safe:duration-200"})]),_:1})]),t("div",{class:d(["ltablet:static ltablet:w-auto ltablet:flex ltablet:flex-row dark:bg-muted-950 ltablet:!bg-transparent ltablet:mx-0 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:!bg-transparent",[a(o)?"shadow-muted-300/30 dark:shadow-muted-900/20 group-[&.scrolled]/landing:ltablet:mt-0 group-[&:not(.scrolled)]/landing:ltablet:mt-0 flex flex-col space-y-4 rounded-xl p-6 shadow-xl group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:lg:mt-0 group-[&:not(.scrolled)]/landing:lg:mt-0":"hidden"]])},[e(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Recruiters ")]),_:1}),e(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Talents ")]),_:1}),e(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" About ")]),_:1}),e(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Contact ")]),_:1}),e(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Articles ")]),_:1}),t("div",E,[t("button",{type:"button",class:"group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-100 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:text-muted-400 group-[&.scrolled]/landing:dark:text-muted-500 group-[&.scrolled]/landing:hover:text-primary-500 group-[&.scrolled]/landing:dark:hover:text-primary-500 group-[&:not(.scrolled)]/landing:text-muted-800 group-[&:not(.scrolled)]/landing:dark:text-muted-200 group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3 group-[&.scrolled]/landing:border",onClick:l[0]||(l[0]=m=>i.value=!0),"aria-label":"Open search"},[e(f,{name:"lucide:search",class:"h-4 w-4 motion-safe:transition-colors motion-safe:duration-300"}),t("span",G,[t("kbd",I,T(a(p))+" + k ",1)])])])],2),t("div",R,[t("button",{type:"button",class:"border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4",onClick:l[1]||(l[1]=()=>{const m=("useState"in c?c.useState:a(b))("switcher-open",()=>!1);m.value=!0})},[e(f,{name:"ph:drop-half-bottom-duotone",class:"text-muted-400 h-5 w-5"})]),e(y,{"aria-label":"Toggle darkmode"}),e(s,{to:"/auth",class:"items-center justify-center ltablet:!flex !hidden lg:!flex"},{default:n(()=>[e(_,{shape:"full",color:"muted"},{default:n(()=>[r("Login")]),_:1})]),_:1}),e(s,{to:"/auth"},{default:n(()=>[e(_,{shape:"curved",color:"primary",class:"ltablet:!flex !hidden lg:!flex text-nowrap"},{default:n(()=>[r(" Download ")]),_:1})]),_:1}),t("button",{type:"button",class:"ltablet:hidden flex items-center justify-center lg:hidden",onClick:l[2]||(l[2]=m=>o.value=!a(o)),"aria-label":a(o)?"Close menu":"Open menu"},[t("div",F,[t("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",a(o)?"w-2":"w-6"])},null,2),t("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",(a(o),"w-6")])},null,2),t("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",a(o)?"w-4":"w-6"])},null,2)])],8,q)])])])])}}}),J=x({__name:"LandingLayout",setup(u){const{y:i}=B();return(o,p)=>{const c=H,l=O;return g(),h("div",{class:d(["group/landing overflow-hidden",a(i)>60?"scrolled":""])},[e(c),w(o.$slots,"default"),e(l)],2)}}}),Q={};function U(u,i){const o=J;return g(),V(o,null,{default:n(()=>[w(u.$slots,"default")]),_:3})}const te=A(Q,[["render",U]]);export{te as default};
