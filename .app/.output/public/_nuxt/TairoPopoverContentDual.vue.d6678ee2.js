import{d as k,o as l,e as d,f as a,K as b,L as w,a0 as u,w as t,g as e,S as x,h as n,s as i,n as v,I as y,_ as z,v as B,p as T}from"./entry.f4bf1c86.js";import{_ as L}from"./BaseIconBox.vue.1923e5b0.js";const N={class:"flex items-center"},C={class:"flex w-1/2 flex-col gap-1 p-2"},V={class:"flex w-1/2 items-center justify-center"},$={class:"flex flex-col items-center gap-2 py-5 text-center"},I={class:"flow-root rounded-md transition duration-150 ease-in-out focus:outline-none"},j={class:"flex items-center"},F=k({__name:"TairoPopoverContentDual",props:{stats:{},image:{},title:{},subtitle:{},footerTitle:{},footerText:{},linkLabel:{},to:{}},setup(f){const s=f;return(D,S)=>{const p=v,g=L,m=y,c=z,r=B,_=T;return l(),d("div",null,[a("div",N,[a("div",C,[(l(!0),d(b,null,w(s.stats.slice(0,2),(o,h)=>(l(),d("div",{key:h,class:"relative flex w-full rounded-lg px-1 py-2"},[o.icon&&!o.image?(l(),u(g,{key:0,size:"xs",class:"bg-primary-100 text-primary-500 dark:bg-primary-600 me-2 dark:text-white"},{default:t(()=>[e(p,{name:o.icon,class:"h-4 w-4"},null,8,["name"])]),_:2},1024)):x("",!0),o.image&&!o.icon?(l(),u(m,{key:1,src:o.image,size:"xs",class:"me-2"},null,8,["src"])):x("",!0),a("div",null,[e(c,{as:"h4",size:"xs",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:t(()=>[n(i(o.title),1)]),_:2},1024),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[n(i(o.subtitle),1)]),_:2},1024)])]))),128))]),a("div",V,[a("div",$,[e(m,{src:s.image,size:"lg",class:"mx-auto !block"},null,8,["src"]),a("div",null,[e(c,{as:"h4",size:"xs",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:t(()=>[n(i(s.title),1)]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[n(i(s.subtitle),1)]),_:1})])])])]),e(_,{to:s.to,class:"bg-muted-100 dark:bg-muted-800 group flex items-center justify-between rounded-b-lg p-4"},{default:t(()=>[a("div",I,[e(c,{as:"h4",size:"xs",weight:"semibold",class:"text-muted-800 dark:text-white",lead:"tight"},{default:t(()=>[n(i(s.footerTitle),1)]),_:1}),e(r,{size:"xs",class:"text-muted-400"},{default:t(()=>[n(i(s.footerText),1)]),_:1})]),a("span",j,[e(_,{to:"#",class:"text-primary-500 me-1 font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"},{default:t(()=>[n(i(s.linkLabel),1)]),_:1})])]),_:1},8,["to"])])}}});export{F as _};
