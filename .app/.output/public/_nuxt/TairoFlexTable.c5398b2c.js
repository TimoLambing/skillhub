import{d as l,o as n,e as r,a5 as a,J as d,E as c,f as m}from"./entry.f4bf1c86.js";const h=l({__name:"TairoFlexTableHeading",props:{type:{default:"stable"}},setup(t){const e=t;return(s,o)=>(n(),r("div",{class:d(["text-muted-400 p-4 font-sans text-xs font-medium uppercase",[e.type==="grow"&&"md:grow",e.type==="shrink"&&"md:shrink",e.type==="stable"&&"sm:w-[90px] md:line-clamp-1 md:w-[110px] md:shrink-0"]])},[a(s.$slots,"default")],2))}}),w=l({__name:"TairoFlexTableCell",props:{type:{default:"stable"},light:{type:Boolean},clamp:{type:[Boolean,Number],default:1}},setup(t){const e=t,s={1:"line-clamp-1",2:"line-clamp-2",3:"line-clamp-3",4:"line-clamp-4",5:"line-clamp-5",6:"line-clamp-6"};return(o,x)=>(n(),r("div",{class:d(["font-alt before:text-muted-400 flex items-center justify-between p-5 text-sm before:font-sans before:text-xs before:font-medium before:uppercase before:content-[attr(data-content)] md:justify-start md:p-4 md:before:hidden",[e.type==="grow"&&"md:grow",e.type==="shrink"&&"md:shrink",e.type==="stable"&&"sm:w-[90px] md:w-[110px] md:shrink-0",e.type==="stable"&&e.clamp&&s[e.clamp],e.light?"text-muted-500 dark:text-white":"text-muted-800 dark:text-white"]])},[a(o.$slots,"default")],2))}}),y=l({__name:"TairoFlexTableRow",props:{shape:{}},setup(t){const e=t;return(s,o)=>(n(),r("div",{class:d(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex flex-col border bg-white md:flex-row md:items-center md:justify-between",[e.shape==="rounded"&&"rounded-md",e.shape==="curved"&&"rounded-xl"]])},[a(s.$slots,"default")],2))}}),p={},i={class:"relative"},f={class:"hidden justify-between md:flex md:items-center"},u={class:"flex flex-col gap-y-4"};function _(t,e){return n(),r("div",i,[m("div",f,[a(t.$slots,"header")]),m("div",u,[a(t.$slots,"default")])])}const k=c(p,[["render",_]]);export{h as _,w as a,y as b,k as c};
