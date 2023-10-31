import{d as te,x as u,A as C,al as y,N as xe,Y as ye,am as Ae,c as pe,R as K,cl as ge,a4 as h,aq as m,K as Te}from"./entry.46c51c2c.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},me={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:d.transition,type:Number},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:d.i18n,type:Object},settings:{default(){return{}},type:Object}};function _e({config:e,slidesCount:a}){const{snapAlign:t,wrapAround:r,itemsToShow:l=1}=e;if(r)return Math.max(a-1,0);let i;switch(t){case"start":i=a-l;break;case"end":i=a-1;break;case"center":case"center-odd":i=a-Math.ceil((l-.5)/2);break;case"center-even":i=a-Math.ceil(l/2);break;default:i=0;break}return Math.max(i,0)}function ke({config:e,slidesCount:a}){const{wrapAround:t,snapAlign:r,itemsToShow:l=1}=e;let i=0;if(t||l>a)return i;switch(r){case"start":i=0;break;case"end":i=l-1;break;case"center":case"center-odd":i=Math.floor((l-1)/2);break;case"center-even":i=Math.floor((l-2)/2);break;default:i=0;break}return i}function J({val:e,max:a,min:t}){return a<t?e:Math.min(Math.max(e,t),a)}function Ce({config:e,currentSlide:a,slidesCount:t}){const{snapAlign:r,wrapAround:l,itemsToShow:i=1}=e;let p=a;switch(r){case"center":case"center-odd":p-=(i-1)/2;break;case"center-even":p-=(i-2)/2;break;case"end":p-=i-1;break}return l?p:J({val:p,max:t-i,min:0})}function he(e){return e?e.reduce((a,t)=>{var r;return t.type===Te?[...a,...he(t.children)]:((r=t.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...a,t]:a},[]):[]}function Q({val:e,max:a,min:t=0}){return e>a?Q({val:e-(a+1),max:a,min:t}):e<t?Q({val:e+(a+1),max:a,min:t}):e}function Me(e,a){let t;return a?function(...r){const l=this;t||(e.apply(l,r),t=!0,setTimeout(()=>t=!1,a))}:e}function Ne(e,a){let t;return function(...r){t&&clearTimeout(t),t=setTimeout(()=>{e(...r),t=null},a)}}function Oe(e="",a={}){return Object.entries(a).reduce((t,[r,l])=>t.replace(`{${r}}`,String(l)),e)}var je=te({name:"ARIA",setup(){const e=m("config",C(Object.assign({},d))),a=m("currentSlide",u(0)),t=m("slidesCount",u(0));return()=>h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Oe(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:t.value}))}}),De=te({name:"Carousel",props:me,setup(e,{slots:a,emit:t,expose:r}){var l;const i=u(null),p=u([]),S=u(0),v=u(0),o=C(Object.assign({},d));let g=Object.assign({},d),b;const s=u((l=e.modelValue)!==null&&l!==void 0?l:0),M=u(0),E=u(0),A=u(0),O=u(0);let N,V;y("config",o),y("slidesCount",v),y("currentSlide",s),y("maxSlide",A),y("minSlide",O),y("slideWidth",S);function X(){b=Object.assign({},e.breakpoints),g=Object.assign(Object.assign(Object.assign({},g),e),{i18n:Object.assign(Object.assign({},g.i18n),e.i18n),breakpoints:void 0}),ne(g)}function I(){if(!b||!Object.keys(b).length)return;const n=Object.keys(b).map(c=>Number(c)).sort((c,x)=>+x-+c);let f=Object.assign({},g);n.some(c=>{const x=window.matchMedia(`(min-width: ${c}px)`).matches;return x&&(f=Object.assign(Object.assign({},f),b[c])),x}),ne(f)}function ne(n){Object.entries(n).forEach(([f,c])=>o[f]=c)}const ae=Ne(()=>{I(),j()},16);function j(){if(!i.value)return;const n=i.value.getBoundingClientRect();S.value=n.width/o.itemsToShow}function $(){v.value<=0||(E.value=Math.ceil((v.value-1)/2),A.value=_e({config:o,slidesCount:v.value}),O.value=ke({config:o,slidesCount:v.value}),o.wrapAround||(s.value=J({val:s.value,max:A.value,min:O.value})))}xe(()=>{ye(()=>j()),setTimeout(()=>j(),1e3),I(),le(),window.addEventListener("resize",ae,{passive:!0}),t("init")}),Ae(()=>{V&&clearTimeout(V),N&&clearInterval(N),window.removeEventListener("resize",ae,{passive:!0})});let w=!1;const D={x:0,y:0},R={x:0,y:0},T=C({x:0,y:0}),P=u(!1),Y=u(!1),Se=()=>{P.value=!0},we=()=>{P.value=!1};function oe(n){["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||(w=n.type==="touchstart",w||n.preventDefault(),!(!w&&n.button!==0||_.value)&&(D.x=w?n.touches[0].clientX:n.clientX,D.y=w?n.touches[0].clientY:n.clientY,document.addEventListener(w?"touchmove":"mousemove",ie,!0),document.addEventListener(w?"touchend":"mouseup",re,!0)))}const ie=Me(n=>{Y.value=!0,R.x=w?n.touches[0].clientX:n.clientX,R.y=w?n.touches[0].clientY:n.clientY;const f=R.x-D.x,c=R.y-D.y;T.y=c,T.x=f},o.throttle);function re(){const n=o.dir==="rtl"?-1:1,f=Math.sign(T.x)*.4,c=Math.round(T.x/S.value+f)*n;if(c&&!w){const x=W=>{W.stopPropagation(),window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}k(s.value-c),T.x=0,T.y=0,Y.value=!1,document.removeEventListener(w?"touchmove":"mousemove",ie,!0),document.removeEventListener(w?"touchend":"mouseup",re,!0)}function le(){!o.autoplay||o.autoplay<=0||(N=setInterval(()=>{o.pauseAutoplayOnHover&&P.value||B()},o.autoplay))}function se(){N&&(clearInterval(N),N=null),le()}const _=u(!1);function k(n){const f=o.wrapAround?n:J({val:n,max:A.value,min:O.value});s.value===f||_.value||(t("slide-start",{slidingToIndex:n,currentSlideIndex:s.value,prevSlideIndex:M.value,slidesCount:v.value}),_.value=!0,M.value=s.value,s.value=f,V=setTimeout(()=>{if(o.wrapAround){const c=Q({val:f,max:A.value,min:0});c!==s.value&&(s.value=c,t("loop",{currentSlideIndex:s.value,slidingToIndex:n}))}t("update:modelValue",s.value),t("slide-end",{currentSlideIndex:s.value,prevSlideIndex:M.value,slidesCount:v.value}),_.value=!1,se()},o.transition))}function B(){k(s.value+o.itemsToScroll)}function z(){k(s.value-o.itemsToScroll)}const ue={slideTo:k,next:B,prev:z};y("nav",ue),y("isSliding",_);const ce=pe(()=>Ce({config:o,currentSlide:s.value,slidesCount:v.value}));y("slidesToScroll",ce);const be=pe(()=>{const n=o.dir==="rtl"?-1:1,f=ce.value*S.value*n;return{transform:`translateX(${T.x-f}px)`,transition:`${_.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${v.value*S.value}px`:"",width:"100%"}});function de(){X(),I(),$(),j(),se()}Object.keys(me).forEach(n=>{["modelValue"].includes(n)||K(()=>e[n],de)}),K(()=>e.modelValue,n=>{n!==s.value&&k(Number(n))}),K(v,$),t("before-init"),X();const ve={config:o,slidesCount:v,slideWidth:S,next:B,prev:z,slideTo:k,currentSlide:s,maxSlide:A,minSlide:O,middleSlide:E};r({updateBreakpointsConfigs:I,updateSlidesData:$,updateSlideWidth:j,initDefaultConfigs:X,restartCarousel:de,slideTo:k,next:B,prev:z,nav:ue,data:ve});const U=a.default||a.slides,H=a.addons,fe=C(ve);return()=>{const n=he(U?.(fe)),f=H?.(fe)||[];n.forEach((G,F)=>G.props.index=F);let c=n;if(o.wrapAround){const G=n.map((q,L)=>ge(q,{index:-n.length+L,isClone:!0,key:`clone-before-${L}`})),F=n.map((q,L)=>ge(q,{index:n.length+L,isClone:!0,key:`clone-after-${L}`}));c=[...G,...n,...F]}p.value=n,v.value=Math.max(n.length,1);const x=h("ol",{class:"carousel__track",style:be.value,onMousedownCapture:o.mouseDrag?oe:null,onTouchstartPassiveCapture:o.touchDrag?oe:null},c),W=h("div",{class:"carousel__viewport"},x);return h("section",{ref:i,class:{carousel:!0,"is-sliding":_.value,"is-dragging":Y.value,"is-hover":P.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Se,onMouseleave:we},[W,f,h(je)])}}}),Z;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(Z||(Z={}));const Le={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Ee(e){return e in Z}const ee=e=>{const a=m("config",C(Object.assign({},d))),t=String(e.name),r=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Ee(t))return;const l=Le[t],i=h("path",{d:l}),p=a.i18n[r]||e.title||t,S=h("title",p);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":p},[S,i])};ee.props={name:String,title:String};const Re=(e,{slots:a,attrs:t})=>{const{next:r,prev:l}=a||{},i=m("config",C(Object.assign({},d))),p=m("maxSlide",u(1)),S=m("minSlide",u(1)),v=m("currentSlide",u(1)),o=m("nav",{}),{dir:g,wrapAround:b,i18n:s}=i,M=g==="rtl",E=h("button",{type:"button",class:["carousel__prev",!b&&v.value<=S.value&&"carousel__prev--disabled",t?.class],"aria-label":s.ariaPreviousSlide,onClick:o.prev},l?.()||h(ee,{name:M?"arrowRight":"arrowLeft"})),A=h("button",{type:"button",class:["carousel__next",!b&&v.value>=p.value&&"carousel__next--disabled",t?.class],"aria-label":s.ariaNextSlide,onClick:o.next},r?.()||h(ee,{name:M?"arrowLeft":"arrowRight"}));return[E,A]};var Pe=te({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=m("config",C(Object.assign({},d))),r=m("currentSlide",u(0)),l=m("slidesToScroll",u(0)),i=m("isSliding",u(!1)),p=()=>e.index===r.value,S=()=>e.index===r.value-1,v=()=>e.index===r.value+1,o=()=>{const g=Math.floor(l.value),b=Math.ceil(l.value+t.itemsToShow-1);return e.index>=g&&e.index<=b};return()=>{var g;return h("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":p(),"carousel__slide--prev":S(),"carousel__slide--next":v(),"carousel__slide--sliding":i.value},"aria-hidden":!o()},(g=a.default)===null||g===void 0?void 0:g.call(a))}}});export{De as C,Re as N,Pe as S};
