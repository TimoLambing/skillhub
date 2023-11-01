import{d as r,o as l,e as n,a5 as d,J as o,f as s}from"./entry.adb22a9c.js";const b=r({__name:"TairoTableHeading",props:{uppercase:{type:Boolean,default:!1},spaced:{type:Boolean,default:!1}},setup(a){const e=a;return(t,u)=>(l(),n("th",{class:o(["text-muted-700 dark:text-muted-400 text-left font-sans font-semibold tracking-wider",[e.uppercase?"text-xs uppercase":"text-sm",e.spaced?"border-muted-200 dark:border-muted-700 last:border-e-none dark:bg-muted-800 border-r bg-white px-4 py-5":"bg-muted-50 dark:bg-muted-800 py-3"]])},[d(t.$slots,"default")],2))}}),_=r({__name:"TairoTableCell",props:{light:{type:Boolean,default:!1},spaced:{type:Boolean,default:!1}},setup(a){const e=a;return(t,u)=>(l(),n("td",{class:o(["font-alt whitespace-nowrap text-sm",[e.light?"text-muted-500 dark:text-white":"text-muted-800 dark:text-white",e.spaced?"p-4":"py-4"]])},[d(t.$slots,"default")],2))}}),h=r({__name:"TairoTableRow",props:{hoverable:{type:Boolean,default:!0}},setup(a){const e=a;return(t,u)=>(l(),n("tr",{class:o([e.hoverable?"hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300":""])},[d(t.$slots,"default")],2))}}),i={class:"flex flex-col"},c={class:"inline-block min-w-full align-middle"},p={class:"divide-muted-200 dark:divide-muted-700 min-w-full table-fixed divide-y"},m={class:"divide-muted-200 dark:divide-muted-700 dark:bg-muted-800 divide-y bg-white"},v=r({__name:"TairoTable",props:{shape:{default:"rounded"},scrollable:{type:Boolean,default:!0}},setup(a){const e=a;return(t,u)=>(l(),n("div",i,[s("div",{class:o(["border-muted-200 dark:border-muted-700 border",[e.scrollable&&"overflow-x-auto nui-slimscroll",e.shape==="rounded"&&"rounded-md",e.shape==="curved"&&"rounded-xl"]])},[s("div",c,[s("div",{class:o(e.scrollable&&"overflow-hidden")},[s("table",p,[s("thead",null,[s("tr",null,[d(t.$slots,"header")])]),s("tbody",m,[d(t.$slots,"default")])])],2)])],2)]))}});export{b as _,v as a,_ as b,h as c};
