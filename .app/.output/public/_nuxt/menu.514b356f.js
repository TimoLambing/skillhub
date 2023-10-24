import{d as P,r as M,aq as $,c as S,ar as F,as as N,at as p,ab as B,au as K,ap as L,av as x,az as T,aB as w,aC as j,aD as D,H as U,al as _,a3 as q,R as y,ad as H,aG as v,aI as V,aJ as E,aK as O,aE as J}from"./entry.a9943f59.js";import{u as Q,x as z,a as b}from"./use-tracked-pointer.bfe38733.js";import{p as G}from"./use-tree-walker.9361b7cd.js";import{b as W}from"./use-resolve-button-type.e1ace5a8.js";import{p as Y}from"./use-text-value.b297714a.js";var Z=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(Z||{}),X=(a=>(a[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a))(X||{});function ee(a){requestAnimationFrame(()=>requestAnimationFrame(a))}let A=Symbol("MenuContext");function k(a){let g=H(A,null);if(g===null){let R=new Error(`<${a} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,k),R}return g}let oe=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(a,{slots:g,attrs:R}){let f=M(1),e=M(null),d=M(null),s=M([]),I=M(""),i=M(null),u=M(1);function t(l=o=>o){let o=i.value!==null?s.value[i.value]:null,r=J(l(s.value.slice()),m=>p(m.dataRef.domRef)),n=o?r.indexOf(o):null;return n===-1&&(n=null),{items:r,activeItemIndex:n}}let c={menuState:f,buttonRef:e,itemsRef:d,items:s,searchQuery:I,activeItemIndex:i,activationTrigger:u,closeMenu:()=>{f.value=1,i.value=null},openMenu:()=>f.value=0,goToItem(l,o,r){let n=t(),m=z(l===b.Specific?{focus:b.Specific,id:o}:{focus:l},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});I.value="",i.value=m,u.value=r??1,s.value=n.items},search(l){let o=I.value!==""?0:1;I.value+=l.toLowerCase();let r=(i.value!==null?s.value.slice(i.value+o).concat(s.value.slice(0,i.value+o)):s.value).find(m=>m.dataRef.textValue.startsWith(I.value)&&!m.dataRef.disabled),n=r?s.value.indexOf(r):-1;n===-1||n===i.value||(i.value=n,u.value=1)},clearSearch(){I.value=""},registerItem(l,o){let r=t(n=>[...n,{id:l,dataRef:o}]);s.value=r.items,i.value=r.activeItemIndex,u.value=1},unregisterItem(l){let o=t(r=>{let n=r.findIndex(m=>m.id===l);return n!==-1&&r.splice(n,1),r});s.value=o.items,i.value=o.activeItemIndex,u.value=1}};return $([e,d],(l,o)=>{var r;c.closeMenu(),F(o,N.Loose)||(l.preventDefault(),(r=p(e))==null||r.focus())},S(()=>f.value===0)),B(A,c),K(S(()=>L(f.value,{[0]:x.Open,[1]:x.Closed}))),()=>{let l={open:f.value===0,close:c.closeMenu};return T({ourProps:{},theirProps:a,slot:l,slots:g,attrs:R,name:"Menu"})}}}),re=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${w()}`}},setup(a,{attrs:g,slots:R,expose:f}){let e=k("MenuButton");f({el:e.buttonRef,$el:e.buttonRef});function d(u){switch(u.key){case v.Space:case v.Enter:case v.ArrowDown:u.preventDefault(),u.stopPropagation(),e.openMenu(),y(()=>{var t;(t=p(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(b.First)});break;case v.ArrowUp:u.preventDefault(),u.stopPropagation(),e.openMenu(),y(()=>{var t;(t=p(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(b.Last)});break}}function s(u){switch(u.key){case v.Space:u.preventDefault();break}}function I(u){a.disabled||(e.menuState.value===0?(e.closeMenu(),y(()=>{var t;return(t=p(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(u.preventDefault(),e.openMenu(),ee(()=>{var t;return(t=p(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let i=W(S(()=>({as:a.as,type:g.type})),e.buttonRef);return()=>{var u;let t={open:e.menuState.value===0},{id:c,...l}=a,o={ref:e.buttonRef,id:c,type:i.value,"aria-haspopup":"menu","aria-controls":(u=p(e.itemsRef))==null?void 0:u.id,"aria-expanded":e.menuState.value===0,onKeydown:d,onKeyup:s,onClick:I};return T({ourProps:o,theirProps:l,slot:t,attrs:g,slots:R,name:"MenuButton"})}}}),se=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${w()}`}},setup(a,{attrs:g,slots:R,expose:f}){let e=k("MenuItems"),d=M(null);f({el:e.itemsRef,$el:e.itemsRef}),G({container:S(()=>p(e.itemsRef)),enabled:S(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function s(t){var c;switch(d.value&&clearTimeout(d.value),t.key){case v.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case v.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let l=e.items.value[e.activeItemIndex.value];(c=p(l.dataRef.domRef))==null||c.click()}e.closeMenu(),O(p(e.buttonRef));break;case v.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(b.Next);case v.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(b.Previous);case v.Home:case v.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(b.First);case v.End:case v.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(b.Last);case v.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),y(()=>{var l;return(l=p(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case v.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),y(()=>V(p(e.buttonRef),t.shiftKey?E.Previous:E.Next));break;default:t.key.length===1&&(e.search(t.key),d.value=setTimeout(()=>e.clearSearch(),350));break}}function I(t){switch(t.key){case v.Space:t.preventDefault();break}}let i=j(),u=S(()=>i!==null?(i.value&x.Open)===x.Open:e.menuState.value===0);return()=>{var t,c;let l={open:e.menuState.value===0},{id:o,...r}=a,n={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(c=p(e.buttonRef))==null?void 0:c.id,id:o,onKeydown:s,onKeyup:I,role:"menu",tabIndex:0,ref:e.itemsRef};return T({ourProps:n,theirProps:r,slot:l,attrs:g,slots:R,features:D.RenderStrategy|D.Static,visible:u.value,name:"MenuItems"})}}}),ie=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${w()}`}},setup(a,{slots:g,attrs:R,expose:f}){let e=k("MenuItem"),d=M(null);f({el:d,$el:d});let s=S(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===a.id:!1),I=Y(d),i=S(()=>({disabled:a.disabled,get textValue(){return I()},domRef:d}));U(()=>e.registerItem(a.id,i)),_(()=>e.unregisterItem(a.id)),q(()=>{e.menuState.value===0&&s.value&&e.activationTrigger.value!==0&&y(()=>{var n,m;return(m=(n=p(d))==null?void 0:n.scrollIntoView)==null?void 0:m.call(n,{block:"nearest"})})});function u(n){if(a.disabled)return n.preventDefault();e.closeMenu(),O(p(e.buttonRef))}function t(){if(a.disabled)return e.goToItem(b.Nothing);e.goToItem(b.Specific,a.id)}let c=Q();function l(n){c.update(n)}function o(n){c.wasMoved(n)&&(a.disabled||s.value||e.goToItem(b.Specific,a.id,0))}function r(n){c.wasMoved(n)&&(a.disabled||s.value&&e.goToItem(b.Nothing))}return()=>{let{disabled:n}=a,m={active:s.value,disabled:n,close:e.closeMenu},{id:h,...C}=a;return T({ourProps:{id:h,ref:d,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:t,onPointerenter:l,onMouseenter:l,onPointermove:o,onMousemove:o,onPointerleave:r,onMouseleave:r},theirProps:{...R,...C},slot:m,attrs:R,slots:g,name:"MenuItem"})}}});export{oe as M,re as R,se as h,ie as y};
