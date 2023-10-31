import{d as G,x as h,c as w,aO as R,aw as a,aV as W,as as T,al as te,ax as ce,ay as V,aW as pe,aX as fe,a9 as q,aY as be,at as me,au as Pe,av as ge,a4 as x,aC as J,K as Y,aE as _,N as ae,am as le,aZ as oe,az as L,aB as A,a_ as I,aM as E,aF as ye,aG as X,aq as Z,aJ as F,a$ as k,b0 as H,o as Se,e as he,g as j,w as z,j as K,a5 as Q,T as we,J as ee,f as $e}from"./entry.ce48552a.js";import{b as Ee}from"./use-resolve-button-type.879369af.js";var ke=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(ke||{});let ne=Symbol("PopoverContext");function U(s){let c=Z(ne,null);if(c===null){let P=new Error(`<${s} /> is missing a parent <${se.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(P,U),P}return c}let xe=Symbol("PopoverGroupContext");function re(){return Z(xe,null)}let ue=Symbol("PopoverPanelContext");function Fe(){return Z(ue,null)}let se=G({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(s,{slots:c,attrs:P,expose:B}){var l;let e=h(null);B({el:e,$el:e});let m=h(1),f=h(null),O=h(null),y=h(null),b=h(null),$=w(()=>R(e)),C=w(()=>{var t,n;if(!a(f)||!a(b))return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D?.contains(a(f)))^Number(D?.contains(a(b))))return!0;let u=W(),g=u.indexOf(a(f)),M=(g+u.length-1)%u.length,ie=(g+1)%u.length,de=u[M],ve=u[ie];return!((t=a(b))!=null&&t.contains(de))&&!((n=a(b))!=null&&n.contains(ve))}),p={popoverState:m,buttonId:h(null),panelId:h(null),panel:b,button:f,isPortalled:C,beforePanelSentinel:O,afterPanelSentinel:y,togglePopover(){m.value=T(m.value,{0:1,1:0})},closePopover(){m.value!==1&&(m.value=1)},close(t){p.closePopover();let n=(()=>t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?a(t):a(p.button):a(p.button))();n?.focus()}};te(ne,p),ce(w(()=>T(m.value,{0:V.Open,1:V.Closed})));let N={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},S=re(),i=S?.registerPopover,[v,r]=pe(),o=fe({mainTreeNodeRef:S?.mainTreeNodeRef,portals:v,defaultContainers:[f,b]});function d(){var t,n,u,g;return(g=S?.isFocusWithinPopoverGroup())!=null?g:((t=$.value)==null?void 0:t.activeElement)&&(((n=a(f))==null?void 0:n.contains($.value.activeElement))||((u=a(b))==null?void 0:u.contains($.value.activeElement)))}return q(()=>i?.(N)),be((l=$.value)==null?void 0:l.defaultView,"focus",t=>{var n,u;t.target!==window&&t.target instanceof HTMLElement&&m.value===0&&(d()||f&&b&&(o.contains(t.target)||(n=a(p.beforePanelSentinel))!=null&&n.contains(t.target)||(u=a(p.afterPanelSentinel))!=null&&u.contains(t.target)||p.closePopover()))},!0),me(o.resolveContainers,(t,n)=>{var u;p.closePopover(),Pe(n,ge.Loose)||(t.preventDefault(),(u=a(f))==null||u.focus())},w(()=>m.value===0)),()=>{let t={open:m.value===0,close:p.close};return x(Y,[x(r,{},()=>J({theirProps:{...s,...P},ourProps:{ref:e},slot:t,slots:c,attrs:P,name:"Popover"})),x(o.MainTreeNode)])}}}),Ie=G({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${_()}`}},inheritAttrs:!1,setup(s,{attrs:c,slots:P,expose:B}){let l=U("PopoverButton"),e=w(()=>R(l.button));B({el:l.button,$el:l.button}),ae(()=>{l.buttonId.value=s.id}),le(()=>{l.buttonId.value=null});let m=re(),f=m?.closeOthers,O=Fe(),y=w(()=>O===null?!1:O.value===l.panelId.value),b=h(null),$=`headlessui-focus-sentinel-${_()}`;y.value||q(()=>{l.button.value=b.value});let C=Ee(w(()=>({as:s.as,type:c.type})),b);function p(o){var d,t,n,u,g;if(y.value){if(l.popoverState.value===1)return;switch(o.key){case F.Space:case F.Enter:o.preventDefault(),(t=(d=o.target).click)==null||t.call(d),l.closePopover(),(n=a(l.button))==null||n.focus();break}}else switch(o.key){case F.Space:case F.Enter:o.preventDefault(),o.stopPropagation(),l.popoverState.value===1&&f?.(l.buttonId.value),l.togglePopover();break;case F.Escape:if(l.popoverState.value!==0)return f?.(l.buttonId.value);if(!a(l.button)||(u=e.value)!=null&&u.activeElement&&!((g=a(l.button))!=null&&g.contains(e.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),l.closePopover();break}}function N(o){y.value||o.key===F.Space&&o.preventDefault()}function S(o){var d,t;s.disabled||(y.value?(l.closePopover(),(d=a(l.button))==null||d.focus()):(o.preventDefault(),o.stopPropagation(),l.popoverState.value===1&&f?.(l.buttonId.value),l.togglePopover(),(t=a(l.button))==null||t.focus()))}function i(o){o.preventDefault(),o.stopPropagation()}let v=oe();function r(){let o=a(l.panel);if(!o)return;function d(){T(v.value,{[k.Forwards]:()=>I(o,E.First),[k.Backwards]:()=>I(o,E.Last)})===H.Error&&I(W().filter(t=>t.dataset.headlessuiFocusGuard!=="true"),T(v.value,{[k.Forwards]:E.Next,[k.Backwards]:E.Previous}),{relativeTo:a(l.button)})}d()}return()=>{let o=l.popoverState.value===0,d={open:o},{id:t,...n}=s,u=y.value?{ref:b,type:C.value,onKeydown:p,onClick:S}:{ref:b,id:t,type:C.value,"aria-expanded":l.popoverState.value===0,"aria-controls":a(l.panel)?l.panelId.value:void 0,disabled:s.disabled?!0:void 0,onKeydown:p,onKeyup:N,onClick:S,onMousedown:i};return x(Y,[J({ourProps:u,theirProps:{...c,...n},slot:d,attrs:c,slots:P,name:"PopoverButton"}),o&&!y.value&&l.isPortalled.value&&x(L,{id:$,features:A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:r})])}}}),Be=G({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${_()}`}},inheritAttrs:!1,setup(s,{attrs:c,slots:P,expose:B}){let{focus:l}=s,e=U("PopoverPanel"),m=w(()=>R(e.panel)),f=`headlessui-focus-sentinel-before-${_()}`,O=`headlessui-focus-sentinel-after-${_()}`;B({el:e.panel,$el:e.panel}),ae(()=>{e.panelId.value=s.id}),le(()=>{e.panelId.value=null}),te(ue,e.panelId),q(()=>{var i,v;if(!l||e.popoverState.value!==0||!e.panel)return;let r=(i=m.value)==null?void 0:i.activeElement;(v=a(e.panel))!=null&&v.contains(r)||I(a(e.panel),E.First)});let y=ye(),b=w(()=>y!==null?(y.value&V.Open)===V.Open:e.popoverState.value===0);function $(i){var v,r;switch(i.key){case F.Escape:if(e.popoverState.value!==0||!a(e.panel)||m.value&&!((v=a(e.panel))!=null&&v.contains(m.value.activeElement)))return;i.preventDefault(),i.stopPropagation(),e.closePopover(),(r=a(e.button))==null||r.focus();break}}function C(i){var v,r,o,d,t;let n=i.relatedTarget;n&&a(e.panel)&&((v=a(e.panel))!=null&&v.contains(n)||(e.closePopover(),((o=(r=a(e.beforePanelSentinel))==null?void 0:r.contains)!=null&&o.call(r,n)||(t=(d=a(e.afterPanelSentinel))==null?void 0:d.contains)!=null&&t.call(d,n))&&n.focus({preventScroll:!0})))}let p=oe();function N(){let i=a(e.panel);if(!i)return;function v(){T(p.value,{[k.Forwards]:()=>{var r;I(i,E.First)===H.Error&&((r=a(e.afterPanelSentinel))==null||r.focus())},[k.Backwards]:()=>{var r;(r=a(e.button))==null||r.focus({preventScroll:!0})}})}v()}function S(){let i=a(e.panel);if(!i)return;function v(){T(p.value,{[k.Forwards]:()=>{let r=a(e.button),o=a(e.panel);if(!r)return;let d=W(),t=d.indexOf(r),n=d.slice(0,t+1),u=[...d.slice(t+1),...n];for(let g of u.slice())if(g.dataset.headlessuiFocusGuard==="true"||o!=null&&o.contains(g)){let M=u.indexOf(g);M!==-1&&u.splice(M,1)}I(u,E.First,{sorted:!1})},[k.Backwards]:()=>{var r;I(i,E.Previous)===H.Error&&((r=a(e.button))==null||r.focus())}})}v()}return()=>{let i={open:e.popoverState.value===0,close:e.close},{id:v,focus:r,...o}=s,d={ref:e.panel,id:v,onKeydown:$,onFocusout:l&&e.popoverState.value===0?C:void 0,tabIndex:-1};return J({ourProps:d,theirProps:{...c,...o},attrs:c,slot:i,slots:{...P,default:(...t)=>{var n;return[x(Y,[b.value&&e.isPortalled.value&&x(L,{id:f,ref:e.beforePanelSentinel,features:A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}),(n=P.default)==null?void 0:n.call(P,...t),b.value&&e.isPortalled.value&&x(L,{id:O,ref:e.afterPanelSentinel,features:A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S})])]}},features:X.RenderStrategy|X.Static,visible:b.value,name:"PopoverPanel"})}}});const Oe={class:"relative"},Ne=G({__name:"TairoPopover",props:{shape:{default:"rounded"},size:{default:"md"},orientation:{default:"start"}},setup(s){const c=s;return(P,B)=>(Se(),he("div",Oe,[j(K(se),{class:"relative"},{default:z(()=>[j(K(Ie),{class:"group inline-flex cursor-pointer font-sans focus:outline-none",as:"div"},{default:z(()=>[Q(P.$slots,"default")]),_:3}),j(we,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:z(()=>[j(K(Be),{class:ee(["absolute z-10 mt-3 w-screen",[c.size==="sm"&&"max-w-[240px]",c.size==="md"&&"max-w-xs",c.orientation==="start"&&"-start-3",c.orientation==="end"&&"-end-3"]])},{default:z(()=>[$e("div",{class:ee(["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:h-4 after:w-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']",[c.orientation==="start"&&"after:start-6",c.orientation==="end"&&"after:end-6"]])},[Q(P.$slots,"content")],2)]),_:3},8,["class"])]),_:3})]),_:3})]))}});export{Ne as _};
