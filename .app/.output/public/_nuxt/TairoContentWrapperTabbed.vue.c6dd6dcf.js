import{d as m,r as b,o as d,a as u,b as s,$ as o,D as a,h as r,t as i,M as c}from"./entry.a9943f59.js";const v={class:"w-full sm:w-auto"},h={key:0},x={key:1},y=m({__name:"TairoContentWrapperTabbed",props:{title:{default:void 0},shape:{default:"rounded"},labels:{},reverse:{type:Boolean}},setup(f){const e=f,t=b("tab-1");return(l,n)=>(d(),u("div",null,[s("div",{class:a(["mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row",e.reverse&&"sm:flex-row-reverse"])},[o(l.$slots,"left"),o(l.$slots,"right",{},()=>[s("div",v,[s("div",{class:a(["dark:bg-muted-800 relative flex h-9 w-full bg-white sm:w-40",[e.shape==="rounded"?"rounded-md":"",e.shape==="curved"?"rounded-xl":"",e.shape==="full"?"rounded-full":""]])},[s("button",{type:"button",class:a(["nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300",[r(t)==="tab-1"?"text-white":"text-muted-400",e.shape==="rounded"?"rounded-md":"",e.shape==="curved"?"rounded-xl":"",e.shape==="full"?"rounded-full":""]]),onClick:n[0]||(n[0]=p=>t.value="tab-1")},i(e.labels?.at(0)),3),s("button",{type:"button",class:a(["nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300",[r(t)==="tab-2"?"text-white":"text-muted-400",e.shape==="rounded"?"rounded-md":"",e.shape==="curved"?"rounded-xl":"",e.shape==="full"?"rounded-full":""]]),onClick:n[1]||(n[1]=p=>t.value="tab-2")},i(e.labels?.at(1)),3),s("div",{class:a(["bg-primary-500 absolute start-0 top-0 h-full w-1/2 transition-all duration-300 ease-in-out",[r(t)==="tab-1"?"ms-0":"ms-[50%]",e.shape==="rounded"?"rounded-md":"",e.shape==="curved"?"rounded-xl":"",e.shape==="full"?"rounded-full":""]])},null,2)],2)])])],2),s("div",null,[r(t)==="tab-1"?(d(),u("div",h,[o(l.$slots,"tab-1")])):r(t)==="tab-2"?(d(),u("div",x,[o(l.$slots,"tab-2")])):c("",!0)]),o(l.$slots,"default")]))}});export{y as _};