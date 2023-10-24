import{b2 as N,b3 as Y,b4 as W,b5 as Q,b6 as E,b7 as L,b8 as X,a4 as K,aa as R,c as y,d as I,r as D,b1 as ee,H as te,Z as se,o as v,V as j,w as p,b as m,e as h,D as oe,M as O,f as _,t as A,_ as C,q as H,l as ie,s as re,m as q,u as ae,a as b,h as $,C as M,F as z,E as B,j as ne,k as U,A as le,p as ce}from"./entry.573a177d.js";import{_ as de}from"./BaseRadio.vue.9b660d23.js";async function ue(e,t){return await me(t).catch(s=>(console.error("Failed to get image meta for "+t,s+""),{width:0,height:0,ratio:0}))}async function me(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const s=new Image;s.onload=()=>{const i={width:s.width,height:s.height,ratio:s.width/s.height};t(i)},s.onerror=i=>o(i),s.src=e})}function P(e){return t=>t?e[t]||t:e.missingValue}function fe({formatter:e,keyMap:t,joinWith:o="/",valueMap:s}={}){e||(e=(r,c)=>`${r}=${c}`),t&&typeof t!="function"&&(t=P(t));const i=s||{};return Object.keys(i).forEach(r=>{typeof i[r]!="function"&&(i[r]=P(i[r]))}),(r={})=>Object.entries(r).filter(([l,n])=>typeof n<"u").map(([l,n])=>{const a=i[l];return typeof a=="function"&&(n=a(r[l])),l=typeof t=="function"?t(l):l,e(l,n)}).join(o)}function w(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function ge(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const o of e.split(" ")){const s=parseInt(o.replace("x",""));s&&t.add(s)}return Array.from(t)}function he(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function pe(e){const t={};if(typeof e=="string")for(const o of e.split(/[\s,]+/).filter(s=>s)){const s=o.split(":");s.length!==2?t[s[0].trim()]=s[0].trim():t[s[0].trim()]=s[1].trim()}else Object.assign(t,e);return t}function _e(e){const t={options:e},o=(i,r={})=>F(t,i,r),s=(i,r={},c={})=>o(i,{...c,modifiers:E(r,c.modifiers||{})}).url;for(const i in e.presets)s[i]=(r,c,l)=>s(r,c,{...e.presets[i],...l});return s.options=e,s.getImage=o,s.getMeta=(i,r)=>ve(t,i,r),s.getSizes=(i,r)=>we(t,i,r),t.$img=s,s}async function ve(e,t,o){const s=F(e,t,{...o});return typeof s.getMeta=="function"?await s.getMeta():await ue(e,s.url)}function F(e,t,o){if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:s,defaults:i}=xe(e,o.provider||e.options.provider),r=ye(e,o.preset);if(t=N(t)?t:Y(t),!s.supportsAlias)for(const a in e.options.alias)t.startsWith(a)&&(t=W(e.options.alias[a],t.substr(a.length)));if(s.validateDomains&&N(t)){const a=Q(t).host;if(!e.options.domains.find(d=>d===a))return{url:t}}const c=E(o,r,i);c.modifiers={...c.modifiers};const l=c.modifiers.format;c.modifiers?.width&&(c.modifiers.width=w(c.modifiers.width)),c.modifiers?.height&&(c.modifiers.height=w(c.modifiers.height));const n=s.getImage(t,c,e);return n.format=n.format||l||"",n}function xe(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function ye(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function we(e,t,o){const s=w(o.modifiers?.width),i=w(o.modifiers?.height),r=pe(o.sizes),c=o.densities?.trim()?ge(o.densities.trim()):e.options.densities;he(c);const l=s&&i?i/s:0,n=[],a=[];if(Object.keys(r).length>1){for(const f in r){const g=T(f,String(r[f]),i,l,e);if(g!==void 0){n.push({size:g.size,screenMaxWidth:g.screenMaxWidth,media:`(max-width: ${g.screenMaxWidth}px)`});for(const x of c)a.push({width:g._cWidth*x,src:V(e,t,o,g,x)})}}be(n)}else for(const f of c){const g=Object.keys(r)[0];let x=T(g,String(r[g]),i,l,e);x===void 0&&(x={size:"",screenMaxWidth:0,_cWidth:o.modifiers?.width,_cHeight:o.modifiers?.height}),a.push({width:f,src:V(e,t,o,x,f)})}ke(a);const d=a[a.length-1],S=n.length?n.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,k=S?"w":"x",u=a.map(f=>`${f.src} ${f.width}${k}`).join(", ");return{sizes:S,srcset:u,src:d?.src}}function T(e,t,o,s,i){const r=i.options.screens&&i.options.screens[e]||parseInt(e),c=t.endsWith("vw");if(!c&&/^\d+$/.test(t)&&(t=t+"px"),!c&&!t.endsWith("px"))return;let l=parseInt(t);if(!r||!l)return;c&&(l=Math.round(l/100*r));const n=s?Math.round(l*s):o;return{size:t,screenMaxWidth:r,_cWidth:l,_cHeight:n}}function V(e,t,o,s,i){return e.$img(t,{...o.modifiers,width:s._cWidth?s._cWidth*i:void 0,height:s._cHeight?s._cHeight*i:void 0},o)}function be(e){e.sort((o,s)=>o.screenMaxWidth-s.screenMaxWidth),e[e.length-1]&&(e[e.length-1].media="");let t=null;for(let o=e.length-1;o>=0;o--){const s=e[o];s.media===t&&e.splice(o,1),t=s.media}}function ke(e){e.sort((o,s)=>o.width-s.width);let t=null;for(let o=e.length-1;o>=0;o--){const s=e[o];s.width===t&&e.splice(o,1),t=s.width}}const $e=fe({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>L(e)+"_"+L(t)}),Se=(e,{modifiers:t={},baseURL:o}={},s)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const i=$e(t)||"_";return o||(o=W(s.options.nuxt.baseURL,"/_ipx")),{url:W(o,i,X(e))}},ze=!0,je=!0,Ae=Object.freeze(Object.defineProperty({__proto__:null,getImage:Se,supportsAlias:je,validateDomains:ze},Symbol.toStringTag,{value:"Module"})),G={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};G.providers={ipx:{provider:Ae,defaults:void 0}};const Z=()=>{const e=K(),t=R();return t.$img||t._img||(t._img=_e({...G,nuxt:{baseURL:e.app.baseURL}}))},Ie={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},Be=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),o=y(()=>({width:w(e.width),height:w(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),s=Z(),i=y(()=>({...e.modifiers,width:w(e.width),height:w(e.height),format:e.format,quality:e.quality||s.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:i}},We={...Ie,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},J=I({name:"NuxtImg",props:We,emits:["load","error"],setup:(e,t)=>{const o=Z(),s=Be(e),i=D(!1),r=y(()=>o.getSizes(e.src,{...s.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...s.modifiers.value,width:w(e.width),height:w(e.height)}})),c=y(()=>{const u={...s.attrs.value,"data-nuxt-img":""};return(!e.placeholder||i.value)&&(u.sizes=r.value.sizes,u.srcset=r.value.srcset),u}),l=y(()=>{let u=e.placeholder;if(u===""&&(u=!0),!u||i.value)return!1;if(typeof u=="string")return u;const f=Array.isArray(u)?u:typeof u=="number"?[u,u]:[10,10];return o(e.src,{...s.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},s.options.value)}),n=y(()=>e.sizes?r.value.src:o(e.src,s.modifiers.value,s.options.value)),a=y(()=>l.value?l.value:n.value);if(e.preload){const u=Object.values(r.value).every(f=>f);ee({link:[{rel:"preload",as:"image",...u?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:a.value}}]})}const d=D(),k=R().isHydrating;return te(()=>{if(l.value){const u=new Image;u.src=n.value,e.sizes&&(u.sizes=r.value.sizes||"",u.srcset=r.value.srcset),u.onload=f=>{i.value=!0,t.emit("load",f)};return}d.value&&(d.value.complete&&k&&(d.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),d.value.onload=u=>{t.emit("load",u)},d.value.onerror=u=>{t.emit("error",u)})}),()=>se("img",{ref:d,src:a.value,...c.value,...t.attrs})}}),De={class:"absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]"},Ne={class:"bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"},Le=I({__name:"LandingDemoLink",props:{name:{},preview:{}},setup(e){const t=e;return(o,s)=>{const i=J,r=C,c=H,l=ie,n=re,a=q;return v(),j(a,{to:{name:t.name,params:t.preview?.params},class:"group relative block"},{default:p(()=>[m("div",null,[h(i,{class:oe(["border-muted-200 block rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75",t.preview?.srcDark?"dark:hidden":""]),src:t.preview?.src,alt:`Tairo - ${t.preview?.title}`,height:"271",width:"487",sizes:"sm:100vw md:50vw lg:974px",format:"webp",loading:"lazy",decoding:"async"},null,8,["class","src","alt"]),t.preview?.srcDark?(v(),j(i,{key:0,class:"border-muted-800 hidden rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block",src:t.preview?.srcDark,alt:`Tairo - ${t.preview?.title}`,height:"271",width:"487",sizes:"sm:100vw md:50vw lg:974px",format:"webp",loading:"lazy",decoding:"async"},null,8,["src","alt"])):O("",!0),m("div",De,[h(n,{shape:"curved",class:"flex items-center p-4",elevated:""},{default:p(()=>[m("div",null,[h(r,{as:"h3",size:"sm",weight:"medium",lead:"none",class:"text-muted-800 mx-auto dark:text-white"},{default:p(()=>[_(A(t.preview?.title),1)]),_:1}),h(c,{size:"xs",class:"text-muted-500 dark:text-muted-400"},{default:p(()=>[_(A(t.preview?.description),1)]),_:1})]),m("div",Ne,[h(l,{name:"lucide:arrow-right",class:"h-4 w-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"})])]),_:1})])])]),_:1},8,["to"])}}}),Me={class:"dark:bg-muted-900 bg-white py-24"},Pe={class:"mx-auto w-full max-w-7xl px-4"},Te={class:"mb-16 max-w-2xl"},Ve={class:"grid grid-cols-12 gap-6"},Ee={class:"ltablet:col-span-2 ltablet:block relative col-span-12 hidden lg:col-span-2 lg:block"},Re={class:"space-y-3 lg:sticky lg:top-28"},Oe={class:"capitalize"},Ce={class:"ltablet:col-span-10 col-span-12 lg:col-span-10"},He={class:"grid gap-8 sm:grid-cols-2"},qe={key:0,class:"mt-24 flex items-center justify-center"},ut=I({__name:"LandingDemos",props:{limit:{default:void 0},cta:{type:Boolean,default:!0}},setup(e){const t=e,o=D(""),s=ae(),i=y(()=>{const l=[];function n(a){for(const d of a)d.children?n(d.children):(d.path.includes(":")&&Array.isArray(d.meta?.preview)||!d.path.includes(":")&&d.meta?.preview)&&l.push(d)}return n(s.options.routes),l.sort((a,d)=>a.meta?.preview?.order===void 0||d.meta?.preview?.order===void 0?0:a.meta.preview?.order<d.meta.preview?.order?-1:a.meta.preview?.order>d.meta.preview?.order?1:0)}),r=y(()=>{const l=new Set;function n(a){if(a){if(Array.isArray(a)){for(const d of a)n(d);return}if(a.categories&&Array.isArray(a.categories))for(const d of a.categories)l.add(d)}}for(const a of i.value)n(a.meta?.preview);return Array.from(l).sort((a,d)=>a.localeCompare(d))}),c=y(()=>{if(o.value.length===0)return i.value;function l(n){if(!n)return!1;if(Array.isArray(n)){for(const a of n)if(l(a))return!0;return!1}return!n.categories||!Array.isArray(n.categories)?!1:n.categories.some(a=>o.value.includes(a))}return i.value.filter(n=>l(n.meta?.preview))});return(l,n)=>{const a=H,d=C,S=ne,k=de,u=Le,f=U;return v(),b("div",Me,[m("div",Pe,[m("div",Te,[h(a,{class:"text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"},{default:p(()=>[_("Platform specifics")]),_:1}),h(d,{as:"h2",size:"4xl",weight:"light",lead:"tight",class:"text-muted-800 mx-auto mb-4 dark:text-white"},{default:p(()=>[_(" All the amazing features ")]),_:1}),h(S,{size:"lg",class:"text-muted-500 dark:text-muted-100 mx-auto mb-4"},{default:p(()=>[_(" SkillHub is your comprehensive hiring solution. Access a real-time database of workers with verified skills, available immediately. Our AI-enhanced team ensures the best matches for you. Track tasks, approve work hours, issue invoices, and formalize contracts—all within our platform. ")]),_:1})]),m("div",Ve,[m("div",Ee,[m("ul",Re,[m("li",Oe,[h(k,{modelValue:$(o),"onUpdate:modelValue":n[0]||(n[0]=g=>M(o)?o.value=g:null),value:"",color:"primary",label:"All"},null,8,["modelValue"])]),(v(!0),b(z,null,B($(r),g=>(v(),b("li",{key:g,class:"capitalize"},[h(k,{modelValue:$(o),"onUpdate:modelValue":n[1]||(n[1]=x=>M(o)?o.value=x:null),value:g,color:"primary",label:g},null,8,["modelValue","value","label"])]))),128))])]),m("div",Ce,[m("div",He,[(v(!0),b(z,null,B($(c).slice(0,t.limit),g=>(v(),b(z,{key:g.name},[Array.isArray(g.meta?.preview)?(v(!0),b(z,{key:1},B(g.meta?.preview,x=>(v(),j(u,{key:x.title,name:g.name,preview:x},null,8,["name","preview"]))),128)):(v(),j(u,{key:0,name:g.name,preview:g.meta?.preview},null,8,["name","preview"]))],64))),128))]),t.cta?(v(),b("div",qe,[h(f,{shape:"curved",color:"primary",flavor:"outline",to:"/demos"},{default:p(()=>[_("View All "+A($(i).length)+" Demos",1)]),_:1})])):O("",!0)])])])])}}}),Ue={},Fe={class:"dark:bg-muted-900 bg-white py-24"},Ge={class:"mx-auto w-full max-w-7xl px-4"},Ze={class:"mx-auto w-full max-w-6xl"},Je={class:"bg-primary-900 dark:bg-primary-900/40 ltablet:grid ltablet:grid-cols-2 ltablet:gap-4 overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"},Ye={class:"ltablet:py-28 ltablet:pr-0 flex items-center px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-28 lg:pr-0 xl:px-20"},Qe={class:"ltablet:self-center font-sans lg:self-center"},Xe=m("h2",{class:"text-3xl font-medium text-white sm:text-4xl"},[m("span",{class:"block"},"Ready to dive in?"),m("span",{class:"block"},"Explore all available components.")],-1),Ke=m("p",{class:"mt-4 text-lg leading-6 text-white"}," We built a great documentation to help you get started. Each component has a demo page and code snippets showing how to use them. ",-1),et={class:"mt-8 flex items-center gap-2"},tt={class:"aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6"};function st(e,t){const o=U,s=J;return v(),b("div",Fe,[m("div",Ge,[m("div",Ze,[m("div",Je,[m("div",Ye,[m("div",Qe,[Xe,Ke,m("div",et,[h(o,{to:"/documentation",shape:"curved",class:"!h-11"},{default:p(()=>[_("Open Documentation")]),_:1})])])]),m("div",tt,[h(s,{class:"ltablet:translate-y-20 block translate-x-6 translate-y-6 rounded-md object-cover object-left-top dark:hidden sm:translate-x-16 lg:translate-y-20",src:"/img/apps/tairo-screen-full.png",alt:"Tairo demo screenshot lightmode",format:"webp",width:"568",height:"532",loading:"lazy",decoding:"async"}),h(s,{class:"ltablet:translate-y-20 hidden translate-x-6 translate-y-6 rounded-md object-cover object-left-top dark:block sm:translate-x-16 lg:translate-y-20",src:"/img/apps/tairo-screen-full-dark.png",alt:"Tairo demo screenshot darkmode",format:"webp",width:"568",height:"532",loading:"lazy",decoding:"async"})])])])])])}const mt=le(Ue,[["render",st]]),ot=""+globalThis.__publicAssetsURL("img/logos/cssninja-logo-icon.svg"),it={class:"dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white"},rt=m("img",{class:"h-7 w-7",src:ot,alt:"Css Ninja logo",height:"28",width:"28",loading:"lazy",decoding:"async"},null,-1),at={class:"ltablet:flex-row mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row"},nt={class:"ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"},lt={class:"text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"},ft=I({__name:"LandingFooter",setup(e){const t=new Date().getFullYear();return(o,s)=>{const i=q,r=ce;return v(),b("footer",it,[h(i,{to:"https://cssninja.io",class:"dark:bg-muted-900 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center bg-white"},{default:p(()=>[rt]),_:1}),m("div",at,[h(i,{to:"/","aria-label":"Go to Tairo homepage",class:"ltablet:w-1/5 block w-full lg:w-1/5"},{default:p(()=>[h(r,{class:"text-muted-300 ltablet:mx-0 mx-auto h-6 transition-all duration-200 lg:mx-0"})]),_:1}),m("div",nt,[h(i,{to:"/demos",class:"text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"},{default:p(()=>[_(" Demo pages ")]),_:1}),h(i,{to:"/documentation",class:"text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"},{default:p(()=>[_(" Documentation ")]),_:1}),h(i,{to:"https://github.com/shuriken-ui",target:"_blank",rel:"noopener",class:"text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"},{default:p(()=>[_(" Shuriken UI ")]),_:1}),h(i,{to:"https://cssninja.io/faq/support",target:"_blank",rel:"noopener",class:"text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"},{default:p(()=>[_(" Support ")]),_:1})]),m("div",lt,[m("span",null,[_(" © "),h(i,{to:"https://cssninja.io",target:"_blank",rel:"noopener",class:"text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"},{default:p(()=>[_(" Css Ninja ")]),_:1}),_(" 2018-"+A($(t))+". ",1)])])])])}}});export{ut as _,mt as a,ft as b};