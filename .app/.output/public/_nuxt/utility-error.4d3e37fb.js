import{d as T,c as h,ad as E,x as P,U as z,o as s,a0 as i,w as o,h as m,s as d,j as r,g as n,ap as D,C as H,a1 as I,S as u,f as t,H as O,e as g,X as A,bE as L,n as M,m as F,bt as U,$ as R,y as W,bD as X,bF as Y}from"./entry.ce48552a.js";import{_ as q}from"./BaseSwitchBall.vue.bc41c041.js";import{_ as G}from"./BaseTag.vue.ba47322f.js";import{_ as J}from"./BaseIconBox.vue.b814d5d7.js";import"./IconCheck.fb95c298.js";const K={class:"mt-4"},Q={class:"text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"},Z={class:"mt-6 flex items-center justify-center"},ee={key:0},re={class:"mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"},oe={class:"mb-4 flex items-center gap-2"},te={class:"text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]"},se=t("p",{class:"nui-text-500 font-sans text-xs font-medium"}," This is a demo stacktrace, you won't see it in production. ",-1),ne=["innerHTML"],le=T({__name:"utility-error",props:{error:{default:()=>({statusCode:500,message:"An internal test Server Error has occured",url:"/layouts/error-1",stack:["Error","    at default (/home/cssninja/tairo/.demo/pages/layouts/error-1.vue:33:14)","    at resolvePropValue (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3944:63)","    at setFullProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3925:26)","    at initProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3759:5)","    at setupComponent (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7146:5)","    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:628:17)","    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)","    at renderComponentSubTree (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:719:13)","    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:644:16)","    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)"].join(`
`),statusMessage:"Internal Server Error"})}},setup(j){const e=j,y=h(()=>e.error?.statusCode===401?"Not authorized":e.error?.statusCode===404?"Page not found":"Oops... Something went wrong"),x=h(()=>e.error?.statusCode===401?"You are not authorized to access this page.":e.error?.statusCode===404?"We couldn't find the page you were looking for.":"An error has occured. If the problem persists, please contact a system administrator or try again later."),c=E(),C=()=>L({redirect:"/"}),a=P(!1);return(p,l)=>{const _=M,k=F,b=q,w=U,v=G,B=R,N=J,V=W,S=X,$=z("focus");return s(),i(S,null,{"toolbar-title":o(()=>[m(d(r(c).tairo.title),1)]),default:o(()=>[n(w,{title:r(y),subtitle:r(x),"image-size":"md",class:"relative !items-end"},{image:o(()=>[r(c).tairo.error?.logo?.component?(s(),i(D(("resolveComponentOrNative"in p?p.resolveComponentOrNative:r(Y))(r(c).tairo.error.logo.component)),H(I({key:0},r(c).tairo.error.logo.props)),null,16)):u("",!0)]),default:o(()=>[t("div",K,[t("div",Q,[t("span",null,d(e.error?.statusCode),1)]),n(k,{color:"primary",class:"!h-12 w-48 items-center gap-2",shape:"curved",onClick:C},{default:o(()=>[n(_,{name:"feather:arrow-left"}),m(" Take me Back ")]),_:1}),t("div",Z,[n(b,{modelValue:r(a),"onUpdate:modelValue":l[0]||(l[0]=f=>O(a)?a.value=f:null),color:"danger",label:`${r(a)?"Hide":"Show"} Stacktrace (dev)`},null,8,["modelValue","label"])])])]),_:1},8,["title","subtitle"]),r(a)?(s(),g("div",ee,[A((s(),i(V,{shape:"curved",class:"nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid",tabindex:"0"},{default:o(()=>[t("div",re,[e.error.statusCode?(s(),i(v,{key:0,color:"danger",size:"sm"},{default:o(()=>[m(d(e.error.statusCode),1)]),_:1})):u("",!0),e.error.url?(s(),i(v,{key:1,color:"danger",flavor:"outline",size:"sm"},{default:o(()=>[m(d(e.error.url),1)]),_:1})):u("",!0),n(B,{color:"muted",class:"ms-auto",onClick:l[1]||(l[1]=f=>a.value=!1)})]),t("div",oe,[n(N,{color:"danger",shape:"full",size:"md"},{default:o(()=>[n(_,{name:"ph:skull-duotone",class:"h-6 w-6"})]),_:1}),t("div",null,[t("h4",te,d(e.error.message),1),se])]),e.error.stack?(s(),g("div",{key:0,class:"mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100",innerHTML:e.error.stack},null,8,ne)):u("",!0)]),_:1})),[[$]])])):u("",!0)]),_:1})}}});export{le as default};
