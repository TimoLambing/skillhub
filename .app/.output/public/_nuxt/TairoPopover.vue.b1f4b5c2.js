import{d as j,r as h,c as w,aL as R,at as a,aS as W,ap as C,ab as te,au as ce,av as V,aT as pe,aU as fe,a3 as Z,aV as be,aq as me,ar as Pe,as as ge,Z as F,az as q,F as U,aB as _,H as ae,al as le,aW as oe,aw as H,ay as A,aX as x,aJ as E,aC as Se,aD as X,ad as Y,aG as I,aY as k,aZ as K,o as ye,a as he,e as z,w as L,h as G,$ as Q,T as we,D as ee,b as $e}from"./entry.bd70d1e3.js";import{b as Ee}from"./use-resolve-button-type.c42ff2d7.js";var ke=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(ke||{});let ne=Symbol("PopoverContext");function J(s){let c=Y(ne,null);if(c===null){let P=new Error(`<${s} /> is missing a parent <${se.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(P,J),P}return c}let Fe=Symbol("PopoverGroupContext");function re(){return Y(Fe,null)}let ue=Symbol("PopoverPanelContext");function Ie(){return Y(ue,null)}let se=j({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(s,{slots:c,attrs:P,expose:B}){var l;let e=h(null);B({el:e,$el:e});let m=h(1),f=h(null),O=h(null),S=h(null),b=h(null),$=w(()=>R(e)),T=w(()=>{var t,n;if(!a(f)||!a(b))return!1;for(let M of document.querySelectorAll("body > *"))if(Number(M?.contains(a(f)))^Number(M?.contains(a(b))))return!0;let u=W(),g=u.indexOf(a(f)),D=(g+u.length-1)%u.length,ie=(g+1)%u.length,de=u[D],ve=u[ie];return!((t=a(b))!=null&&t.contains(de))&&!((n=a(b))!=null&&n.contains(ve))}),p={popoverState:m,buttonId:h(null),panelId:h(null),panel:b,button:f,isPortalled:T,beforePanelSentinel:O,afterPanelSentinel:S,togglePopover(){m.value=C(m.value,{0:1,1:0})},closePopover(){m.value!==1&&(m.value=1)},close(t){p.closePopover();let n=(()=>t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?a(t):a(p.button):a(p.button))();n?.focus()}};te(ne,p),ce(w(()=>C(m.value,{0:V.Open,1:V.Closed})));let N={buttonId:p.buttonId,panelId:p.panelId,close(){p.closePopover()}},y=re(),i=y?.registerPopover,[v,r]=pe(),o=fe({mainTreeNodeRef:y?.mainTreeNodeRef,portals:v,defaultContainers:[f,b]});function d(){var t,n,u,g;return(g=y?.isFocusWithinPopoverGroup())!=null?g:((t=$.value)==null?void 0:t.activeElement)&&(((n=a(f))==null?void 0:n.contains($.value.activeElement))||((u=a(b))==null?void 0:u.contains($.value.activeElement)))}return Z(()=>i?.(N)),be((l=$.value)==null?void 0:l.defaultView,"focus",t=>{var n,u;t.target!==window&&t.target instanceof HTMLElement&&m.value===0&&(d()||f&&b&&(o.contains(t.target)||(n=a(p.beforePanelSentinel))!=null&&n.contains(t.target)||(u=a(p.afterPanelSentinel))!=null&&u.contains(t.target)||p.closePopover()))},!0),me(o.resolveContainers,(t,n)=>{var u;p.closePopover(),Pe(n,ge.Loose)||(t.preventDefault(),(u=a(f))==null||u.focus())},w(()=>m.value===0)),()=>{let t={open:m.value===0,close:p.close};return F(U,[F(r,{},()=>q({theirProps:{...s,...P},ourProps:{ref:e},slot:t,slots:c,attrs:P,name:"Popover"})),F(o.MainTreeNode)])}}}),xe=j({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${_()}`}},inheritAttrs:!1,setup(s,{attrs:c,slots:P,expose:B}){let l=J("PopoverButton"),e=w(()=>R(l.button));B({el:l.button,$el:l.button}),ae(()=>{l.buttonId.value=s.id}),le(()=>{l.buttonId.value=null});let m=re(),f=m?.closeOthers,O=Ie(),S=w(()=>O===null?!1:O.value===l.panelId.value),b=h(null),$=`headlessui-focus-sentinel-${_()}`;S.value||Z(()=>{l.button.value=b.value});let T=Ee(w(()=>({as:s.as,type:c.type})),b);function p(o){var d,t,n,u,g;if(S.value){if(l.popoverState.value===1)return;switch(o.key){case I.Space:case I.Enter:o.preventDefault(),(t=(d=o.target).click)==null||t.call(d),l.closePopover(),(n=a(l.button))==null||n.focus();break}}else switch(o.key){case I.Space:case I.Enter:o.preventDefault(),o.stopPropagation(),l.popoverState.value===1&&f?.(l.buttonId.value),l.togglePopover();break;case I.Escape:if(l.popoverState.value!==0)return f?.(l.buttonId.value);if(!a(l.button)||(u=e.value)!=null&&u.activeElement&&!((g=a(l.button))!=null&&g.contains(e.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),l.closePopover();break}}function N(o){S.value||o.key===I.Space&&o.preventDefault()}function y(o){var d,t;s.disabled||(S.value?(l.closePopover(),(d=a(l.button))==null||d.focus()):(o.preventDefault(),o.stopPropagation(),l.popoverState.value===1&&f?.(l.buttonId.value),l.togglePopover(),(t=a(l.button))==null||t.focus()))}function i(o){o.preventDefault(),o.stopPropagation()}let v=oe();function r(){let o=a(l.panel);if(!o)return;function d(){C(v.value,{[k.Forwards]:()=>x(o,E.First),[k.Backwards]:()=>x(o,E.Last)})===K.Error&&x(W().filter(t=>t.dataset.headlessuiFocusGuard!=="true"),C(v.value,{[k.Forwards]:E.Next,[k.Backwards]:E.Previous}),{relativeTo:a(l.button)})}d()}return()=>{let o=l.popoverState.value===0,d={open:o},{id:t,...n}=s,u=S.value?{ref:b,type:T.value,onKeydown:p,onClick:y}:{ref:b,id:t,type:T.value,"aria-expanded":l.popoverState.value===0,"aria-controls":a(l.panel)?l.panelId.value:void 0,disabled:s.disabled?!0:void 0,onKeydown:p,onKeyup:N,onClick:y,onMousedown:i};return F(U,[q({ourProps:u,theirProps:{...c,...n},slot:d,attrs:c,slots:P,name:"PopoverButton"}),o&&!S.value&&l.isPortalled.value&&F(H,{id:$,features:A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:r})])}}}),Be=j({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${_()}`}},inheritAttrs:!1,setup(s,{attrs:c,slots:P,expose:B}){let{focus:l}=s,e=J("PopoverPanel"),m=w(()=>R(e.panel)),f=`headlessui-focus-sentinel-before-${_()}`,O=`headlessui-focus-sentinel-after-${_()}`;B({el:e.panel,$el:e.panel}),ae(()=>{e.panelId.value=s.id}),le(()=>{e.panelId.value=null}),te(ue,e.panelId),Z(()=>{var i,v;if(!l||e.popoverState.value!==0||!e.panel)return;let r=(i=m.value)==null?void 0:i.activeElement;(v=a(e.panel))!=null&&v.contains(r)||x(a(e.panel),E.First)});let S=Se(),b=w(()=>S!==null?(S.value&V.Open)===V.Open:e.popoverState.value===0);function $(i){var v,r;switch(i.key){case I.Escape:if(e.popoverState.value!==0||!a(e.panel)||m.value&&!((v=a(e.panel))!=null&&v.contains(m.value.activeElement)))return;i.preventDefault(),i.stopPropagation(),e.closePopover(),(r=a(e.button))==null||r.focus();break}}function T(i){var v,r,o,d,t;let n=i.relatedTarget;n&&a(e.panel)&&((v=a(e.panel))!=null&&v.contains(n)||(e.closePopover(),((o=(r=a(e.beforePanelSentinel))==null?void 0:r.contains)!=null&&o.call(r,n)||(t=(d=a(e.afterPanelSentinel))==null?void 0:d.contains)!=null&&t.call(d,n))&&n.focus({preventScroll:!0})))}let p=oe();function N(){let i=a(e.panel);if(!i)return;function v(){C(p.value,{[k.Forwards]:()=>{var r;x(i,E.First)===K.Error&&((r=a(e.afterPanelSentinel))==null||r.focus())},[k.Backwards]:()=>{var r;(r=a(e.button))==null||r.focus({preventScroll:!0})}})}v()}function y(){let i=a(e.panel);if(!i)return;function v(){C(p.value,{[k.Forwards]:()=>{let r=a(e.button),o=a(e.panel);if(!r)return;let d=W(),t=d.indexOf(r),n=d.slice(0,t+1),u=[...d.slice(t+1),...n];for(let g of u.slice())if(g.dataset.headlessuiFocusGuard==="true"||o!=null&&o.contains(g)){let D=u.indexOf(g);D!==-1&&u.splice(D,1)}x(u,E.First,{sorted:!1})},[k.Backwards]:()=>{var r;x(i,E.Previous)===K.Error&&((r=a(e.button))==null||r.focus())}})}v()}return()=>{let i={open:e.popoverState.value===0,close:e.close},{id:v,focus:r,...o}=s,d={ref:e.panel,id:v,onKeydown:$,onFocusout:l&&e.popoverState.value===0?T:void 0,tabIndex:-1};return q({ourProps:d,theirProps:{...c,...o},attrs:c,slot:i,slots:{...P,default:(...t)=>{var n;return[F(U,[b.value&&e.isPortalled.value&&F(H,{id:f,ref:e.beforePanelSentinel,features:A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}),(n=P.default)==null?void 0:n.call(P,...t),b.value&&e.isPortalled.value&&F(H,{id:O,ref:e.afterPanelSentinel,features:A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:y})])]}},features:X.RenderStrategy|X.Static,visible:b.value,name:"PopoverPanel"})}}});const Oe={class:"relative"},Ne=j({__name:"TairoPopover",props:{shape:{default:"rounded"},size:{default:"md"},orientation:{default:"start"}},setup(s){const c=s;return(P,B)=>(ye(),he("div",Oe,[z(G(se),{class:"relative"},{default:L(()=>[z(G(xe),{class:"group inline-flex cursor-pointer font-sans focus:outline-none",as:"div"},{default:L(()=>[Q(P.$slots,"default")]),_:3}),z(we,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:L(()=>[z(G(Be),{class:ee(["absolute z-10 mt-3 w-screen",[c.size==="sm"&&"max-w-[240px]",c.size==="md"&&"max-w-xs",c.orientation==="start"&&"-start-3",c.orientation==="end"&&"-end-3"]])},{default:L(()=>[$e("div",{class:ee(["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:h-4 after:w-4 after:rotate-[-135deg] after:border-b after:border-r after:bg-white after:content-['']",[c.orientation==="start"&&"after:start-6",c.orientation==="end"&&"after:end-6"]])},[Q(P.$slots,"content")],2)]),_:3},8,["class"])]),_:3})]),_:3})]))}});export{Ne as _};
