import{_ as V}from"./BaseBreadcrumb.vue.4c19bfa4.js";import{bb as I,G as y,bc as T,R as w,bd as E,a2 as N,d as S,x as A,c as $,Y as H,o as f,e as x,j as m,f as i,K,L as M,g as _,w as g,h as C,s as D,J as z,S as L,b8 as F,p as G,a as J,be as U,a9 as W,ag as Y,bf as Q,a0 as X,bg as R,n as Z,m as ee,bh as j}from"./entry.cb41b48b.js";import{_ as te}from"./DocComponentDemo.vue.71e992d8.js";import oe from"./ContentRenderer.e495f156.js";import{u as se}from"./head.5dd451bc.js";import"./BaseDropdown.vue.179d4e24.js";import"./menu.78a326bd.js";import"./use-tracked-pointer.b02f8424.js";import"./use-tree-walker.9d4ed7fe.js";import"./use-resolve-button-type.bbf5902e.js";import"./use-text-value.2f2e0b07.js";import"./TairoTocAnchor.vue.2342d28b.js";import"./BaseCheckbox.vue.b5db2210.js";import"./IconCheck.fbbb5974.js";import"./AddonMarkdownRemark.dce79ce8.js";import"./BaseProse.vue.752e11fa.js";import"./composables.ed78bd73.js";import"./index.30ac238c.js";import"./slot.491a3a21.js";import"./node.6b41dbb2.js";import"./ContentRendererMarkdown.vue.ad416c53.js";import"./index.c332151d.js";const ae=(k,u)=>{const h=I(k),l=I(u),p=y(),c=y([]),a=y([]),b=T();let d;const n=r=>{for(const e of r){const o=e.target.id;e.isIntersecting?c.value.push(o):c.value=c.value.filter(s=>s!==o)}},t=r=>{p.value?.disconnect();for(const e of r)p.value?.observe(e)};return w(c,(r,e)=>{a.value=r.length===0?e:r}),E(()=>{p.value=new IntersectionObserver(n,h.value)}),w([()=>b.path,l],()=>{l.value?.length&&(d&&clearTimeout(d),d=setTimeout(()=>{if(l.value){const r=document.querySelectorAll(l.value.join(", "));t([...r])}},300))},{immediate:!0}),N(()=>{d&&clearTimeout(d),p.value?.disconnect()}),{visibleIds:c,activeIds:a,updateElements:t}},ne={class:"fixed flex flex-col justify-between pb-20 pe-1 ps-20 pt-2"},re={key:0,class:"w-52"},ie=i("div",{class:"font-heading text-muted-800 mb-6 text-xs font-semibold uppercase leading-tight dark:text-white"},[i("span",null,"On this page")],-1),ce={class:"nui-slimscroll-opaque relative max-h-[calc(100vh_-_220px)] overflow-y-auto overflow-x-hidden pb-10 font-sans text-[0.8rem] font-medium"},le=i("div",{class:"dark:from-muted-900 from-muted-100 pointer-events-none fixed bottom-10 z-10 h-10 w-[212px] bg-gradient-to-t to-transparent"},null,-1),ue=S({__name:"TairoToc",setup(k){const u=T(),h=A(""),l=A([]),p=$(()=>l.value.map(({id:n})=>`#${n}`)),{activeIds:c}=ae({rootMargin:"0px 0px -90% 0px"},p),a=F();{w(()=>u.hash,()=>{u.hash&&(h.value=u.hash.slice(1))},{immediate:!0});const n=a.hook("page:finish",r=>{d()}),t=a.hook("page:transition:finish",r=>{d()});N(()=>{n(),t()})}function b(n){const t=[];return n.level>2&&t.push("ms-3 text-xs"),h.value===n.id?t.push("border-primary-500 text-primary-500"):c.value.includes(n.id)?t.push("border-primary-400 dark:border-primary-600 text-muted-500 dark:text-muted-400 hover:text-muted-400"):t.push("border-muted-200 dark:border-muted-800 text-muted-500 dark:text-muted-400 hover:text-muted-400"),t}async function d(){await H();const n=document.querySelectorAll(".tairo-toc-anchor");l.value=Array.from(n).map(t=>({id:t.getAttribute("id"),level:("dataset"in t&&t.dataset?.tocLevel)??2,label:"dataset"in t&&t.dataset?.tocLabel}))}return(n,t)=>{const r=G;return f(),x("div",ne,[m(l).length?(f(),x("div",re,[ie,i("nav",ce,[i("ul",null,[(f(!0),x(K,null,M(m(l),e=>(f(),x("li",{key:e.id},[_(r,{to:`#${e.id}`,class:z(["block border-e-2 py-1",b(e)])},{default:g(()=>[C(D(e.label),1)]),_:2},1032,["to","class"])]))),128))]),le])])):L("",!0)])}}}),de={class:"flex items-center justify-between"},me={class:"dark:bg-muted-800 border-muted-200 dark:border-muted-700 group-hover:text-muted-600 dark:group-hover:text-muted-100 rounded-lg border bg-white px-2 py-0.5 shadow transition-colors duration-300"},pe={class:"font-sans text-sm tracking-wide"},he={class:"flex"},_e={class:"w-full lg:w-3/4"},fe=i("p",null,"The page you are looking for does not exist.",-1),be={class:"flex flex-row gap-6"},ve={key:0,class:"relative hidden lg:me-6 lg:block lg:w-1/4 xl:me-0"},Ke=S({__name:"index",async setup(k){let u,h;const l=T(),p=J(),c=$(()=>{const e=l.params?.slug;return!e||e.length===0?"/documentation":`/documentation/${e.join("/")}`}),[{data:a,pending:b},{data:d}]=([u,h]=U(()=>Promise.all([R("page-data",()=>j().where({_path:c.value}).findOne(),{watch:[c]}),R("page-tree",()=>{const e=c.value.split("/");e.shift(),e.pop();const o=[];for(let s=0;s<e.length;s++){const v=`/${e.slice(0,s+1).join("/")}`;o.push(v),o.push(`${v}/_dir`)}return o.push(`${c.value}/_dir`),j().where({_path:{$in:o}}).without(["body"]).find()},{watch:[c]})])),u=await u,h(),u);W(()=>{const e=a.value?.title;b.value||(l.meta.title=e||"Page not found")}),se(a);const n=$(()=>{const e=[],o=p.resolve("/");if(o.meta.breadcrumb!==!1)if(o.meta.breadcrumb){const s=o.meta.breadcrumb;e.push({to:o.path,...s})}else o.meta.title&&e.push({label:o.meta.title,to:o.path});for(const s of d.value||[])e.find(v=>v.to===s._path)||e.push({label:s.title,to:s._path.endsWith("_dir")?s._path.replace("/_dir",""):s._path});return a.value?.title&&e.push({label:a.value?.title}),e}),t=Y("search-open",()=>!1),r=Q();return(e,o)=>{const s=V,v=Z,B=ee,P=te,q=oe,O=ue;return f(),x("div",null,[i("div",de,[_(s,{items:m(n)},null,8,["items"]),i("button",{type:"button",class:"dark:bg-muted-800 border-muted-200 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500 group mb-6 flex items-center gap-2 rounded-xl border bg-white py-1 pe-1 ps-3",onClick:o[0]||(o[0]=xe=>t.value=!0)},[_(v,{name:"lucide:search",class:"h-4 w-4 transition-colors duration-300"}),i("span",me,[i("kbd",pe,D(m(r))+" + k",1)])])]),i("div",he,[i("div",_e,[_(q,{value:m(a)},{empty:g(()=>[_(P,null,{default:g(()=>[i("div",null,[fe,i("div",be,[_(B,{to:"/documentation"},{default:g(()=>[C("Back to Hub")]),_:1}),_(B,{color:"none",to:"/"},{default:g(()=>[C("Back to Home")]),_:1})])])]),_:1})]),_:1},8,["value"])]),!m(b)&&m(a)&&m(a).toc!==!1?(f(),x("div",ve,[(f(),X(O,{key:`toc-${m(a)._path}`}))])):L("",!0)])])}}});export{Ke as default};
