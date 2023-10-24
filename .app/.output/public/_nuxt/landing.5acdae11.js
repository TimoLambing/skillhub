import{d as x,bl as v,ah as _,r as j,bu as $,a1 as L,o as g,a as b,b as e,e as t,w as n,D as d,h as a,f as r,t as T,p as C,m as N,l as S,k as B,a_ as O,$ as h,bN as V,A,V as D}from"./entry.a9943f59.js";import{_ as z}from"./BaseThemeToggle.vue.558daedb.js";import"./composables.2c62998a.js";const K={class:"group/nav ltablet:max-w-[1000px] ptablet:max-w-[47rem] fixed inset-x-0 top-0 z-50 mx-auto max-w-[350px] group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 lg:max-w-7xl"},M={class:"group-[&.scrolled]/landing:dark:bg-muted-950/95 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 flex items-center justify-between rounded-2xl border p-4 group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:motion-safe:shadow-xl"},P={class:"flex w-1/2 items-center gap-2 md:w-1/5"},W={class:"px-6"},E={class:"group-[&.scrolled]/landing:dark:bg-muted-800 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-700 group-[&.scrolled]/landing:group-hover:text-muted-600 group-[&.scrolled]/landing:dark:group-hover:text-muted-100 rounded-lg border px-2 py-0.5 group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:bg-white group-[&.scrolled]/landing:shadow motion-safe:transition-colors motion-safe:duration-300"},G={class:"font-sans text-sm tracking-wide"},I={class:"flex w-1/2 items-center justify-end gap-4 md:w-1/5"},R=["aria-label"],q={class:"space-y-1.5"},F=x({__name:"LandingNavbar",setup(u){v();const i=_("search-open",()=>!1),o=j(!1),p=$();return L(),(c,l)=>{const w=C,s=N,f=S,k=z,y=B;return g(),b("div",K,[e("div",M,[e("div",P,[t(s,{to:"/",class:"ms-2 inline-flex","aria-label":"Go to Tairo homepage"},{default:n(()=>[t(w,{class:"text-primary-500 group-[&.scrolled]/landing:h-5 group-[&:not(.scrolled)]/landing:h-6 motion-safe:transition-all motion-safe:duration-200"})]),_:1})]),e("div",{class:d(["ltablet:static ltablet:w-auto ltablet:flex ltablet:flex-row dark:bg-muted-950 ltablet:!bg-transparent ltablet:mx-0 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:!bg-transparent",[a(o)?"shadow-muted-300/30 dark:shadow-muted-900/20 group-[&.scrolled]/landing:ltablet:mt-0 group-[&:not(.scrolled)]/landing:ltablet:mt-0 flex flex-col space-y-4 rounded-xl p-6 shadow-xl group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:lg:mt-0 group-[&:not(.scrolled)]/landing:lg:mt-0":"hidden"]])},[t(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Recruiters ")]),_:1}),t(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Talents ")]),_:1}),t(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" About ")]),_:1}),t(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Contact ")]),_:1}),t(s,{to:"/documentation",class:"inline-flex items-center justify-center px-6"},{default:n(()=>[r(" Articles ")]),_:1}),e("div",W,[e("button",{type:"button",class:"group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-100 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:text-muted-400 group-[&.scrolled]/landing:dark:text-muted-500 group-[&.scrolled]/landing:hover:text-primary-500 group-[&.scrolled]/landing:dark:hover:text-primary-500 group-[&:not(.scrolled)]/landing:text-muted-800 group-[&:not(.scrolled)]/landing:dark:text-muted-200 group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3 group-[&.scrolled]/landing:border",onClick:l[0]||(l[0]=m=>i.value=!0),"aria-label":"Open search"},[t(f,{name:"lucide:search",class:"h-4 w-4 motion-safe:transition-colors motion-safe:duration-300"}),e("span",E,[e("kbd",G,T(a(p))+" + k ",1)])])])],2),e("div",I,[e("button",{type:"button",class:"border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4",onClick:l[1]||(l[1]=()=>{const m=("useState"in c?c.useState:a(_))("switcher-open",()=>!1);m.value=!0})},[t(f,{name:"ph:drop-half-bottom-duotone",class:"text-muted-400 h-5 w-5"})]),t(k,{"aria-label":"Toggle darkmode"}),t(s,{to:"/auth",class:"items-center justify-center ltablet:!flex !hidden lg:!flex"},{default:n(()=>[r(" Login ")]),_:1}),t(y,{shape:"curved",color:"primary",to:"https://go.cssninja.io/buy-tairo",class:"ltablet:!flex !hidden lg:!flex text-nowrap"},{default:n(()=>[r(" Download ")]),_:1}),e("button",{type:"button",class:"ltablet:hidden flex items-center justify-center lg:hidden",onClick:l[2]||(l[2]=m=>o.value=!a(o)),"aria-label":a(o)?"Close menu":"Open menu"},[e("div",q,[e("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",a(o)?"w-2":"w-6"])},null,2),e("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",(a(o),"w-6")])},null,2),e("span",{class:d(["bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300",a(o)?"w-4":"w-6"])},null,2)])],8,R)])])])}}}),H=x({__name:"LandingLayout",setup(u){const{y:i}=O();return(o,p)=>{const c=F,l=V;return g(),b("div",{class:d(["group/landing overflow-hidden",a(i)>60?"scrolled":""])},[t(c),h(o.$slots,"default"),t(l)],2)}}}),J={};function Q(u,i){const o=H;return g(),D(o,null,{default:n(()=>[h(u.$slots,"default")]),_:3})}const Z=A(J,[["render",Q]]);export{Z as default};