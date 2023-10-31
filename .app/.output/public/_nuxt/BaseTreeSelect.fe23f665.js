import{d as le,ae as se,c as A,x as re,R as ie,be as ae,aq as oe,A as ue,al as ce,o as d,e as b,j as n,a5 as u,f as w,C as c,D as f,a0 as _,J as V,S as C,s as D,K as X,L as fe,a1 as G,H as Q,X as pe,aj as de,W as me,g as ve,w as g,n as he,E as ye}from"./entry.f4bf1c86.js";import{_ as ge}from"./BaseCheckbox.vue.a0502851.js";const ke={class:"treeview relative w-full"},be={key:0},we={class:"text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm"},Ce={class:"text-muted-400 flex h-5 w-5 items-center justify-center"},$e={key:1},_e={class:"text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm"},Se={class:"text-muted-400 flex h-5 w-5 items-center justify-center"},Ve={class:"text-muted-700 dark:text-muted-400 relative z-10 flex items-center gap-1 py-2 font-sans text-sm"},Ie=["onClick"],Me={class:"text-muted-400 me-1 flex h-5 w-5 items-center justify-center"},Ae={key:0,class:"relative"},Be=le({__name:"BaseTreeSelect",props:{children:{type:[Array,Function],default:void 0},modelValue:{default:void 0},icons:{default:()=>({open:"lucide:minus",closed:"lucide:plus",item:"",pending:""})},treeline:{type:[Boolean,Object],default:!1},i18n:{default:()=>({pending:"pending...",empty:"empty"})},classes:{default:()=>({pendingIcon:"",emptyIcon:"",treeIcon:"",itemIcon:"",treeline:"border-muted-300 dark:border-muted-700",checkbox:{wrapper:"text-primary-500 scale-[0.8] me-1"}})},level:{default:1},parent:{default:void 0}},emits:["update:modelValue"],async setup(Y,{expose:Z,emit:x}){let T,L;const i=Y,v=se(i,"modelValue",x,{passive:!0}),P={open:"lucide:minus",closed:"lucide:plus",item:"",empty:"",pending:""},k=A(()=>i.icons?{...P,...i.icons}:P),R={offset:"0.625rem",minLevel:1},U=A(()=>i.treeline===!1?!1:i.treeline===!0?R:{...R,...i.treeline}),E={wrapper:"text-primary-500 scale-[0.8] me-1"},F=A(()=>i.classes?.checkbox?{...E,...i.classes.checkbox}:E),I=ee(),S=A(()=>i.children?I?.treeMap.get(i.children):void 0),p=re(q(i.children)),B=A(()=>S.value?.tree);ie(()=>i.children,W),Z({tree:B,loadTree:H,getChildren:O,getNodeChildren:y,areAllChildSelected:M,areSomeChildSelected:z,selectAllNode:j,unselectAllNode:N,isUndeterminate:J,isNodeLoaded:h,toggleNodeSelection:$,toggleChildrenSelection:K,selectAllChildren:te,unselectAllChildren:ne}),[T,L]=ae(()=>W()),await T,L();async function W(){await H(i.children),p.value=q(i.children)}function ee(){const e=Symbol("tree");let t=oe(e,null);return t||(t=ue({treeMap:new WeakMap}),ce(e,t)),i.children&&!t.treeMap.has(i.children)&&t.treeMap.set(i.children,{tree:[],pending:!1,loaded:!1}),t}function q(e){const t={},r=O(e);if(!r)return t;for(const l in r){const m=r[l];"open"in m&&m.open!==void 0&&(t[l]=m.open)}return t}async function H(e){if(!e)return;const t=I?.treeMap.get(e);if(t){if(typeof e=="function"){t.pending=!0;try{t.tree=await e()}finally{t.pending=!1,t.loaded=!0}return}t.tree=e??[],t.loaded=!0}}function h(e){return e?"children"in e&&typeof e.children=="function"?I?.treeMap.get(e.children)?.loaded??!1:!0:!1}function O(e){if(e)return I?.treeMap.has(e)?I?.treeMap.get(e)?.tree:Array.isArray(e)?e:void 0}function y(e){if(e&&!(!("children"in e)||!e.children))return O(e.children)}function M(e){const t=v.value;if(!t||!e)return!1;const r=y(e);return r?h(e)&&r.every(l=>"children"in l?y(l)&&h(l)?M(l):!1:t.includes(l)):!1}function z(e){const t=v.value;if(!t||!e)return!1;const r=y(e);return r?h(e)&&r.some(l=>"children"in l?y(l)&&h(l)?z(l):!1:t.includes(l)):!1}function J(e){return!e||!h(e)?!1:z(e)&&!M(e)}function j(e){const t=v.value;if(!t||!e)return;if(!("children"in e)||!e.children){t.indexOf(e)===-1&&t.push(e);return}if(!h(e))return;const r=y(e);if(r)for(const l of r)"children"in l?j(l):t.indexOf(l)===-1&&t.push(l)}function te(e){const t=e||B.value;if(t)for(const r of t)j(r)}function N(e){const t=v.value;if(!t||!e)return;if(!("children"in e)||!e.children){const l=t.indexOf(e);l>=0&&t.splice(l,1);return}if(!h(e))return;const r=y(e);if(r)for(const l of r)if("children"in l)N(l);else{const m=t.indexOf(l);m>=0&&t.splice(m,1)}}function ne(e){const t=e||B.value;if(t)for(const r of t)N(r)}function $(e,t){const r=v.value;if(!r||!e)return;if("children"in e){if(!h(e)){t?.preventDefault();return}const m=y(e);if(!m||m.length===0){t?.preventDefault();return}M(e)?N(e):m.length>0&&j(e);return}const l=r.indexOf(e);l>=0?r.splice(l,1):r.push(e)}function K(e,t){const r=e||B.value;if(r)for(const l of r)"children"in l?K(y(l),t):$(l,t)}return(e,t)=>{const r=he,l=ge,m=je;return d(),b("ul",ke,[n(S)?.pending?(d(),b("li",be,[u(e.$slots,"pending",c(f({level:e.level,parent:e.parent})),()=>[w("div",we,[u(e.$slots,"pending-icon",c(f({level:e.level,parent:e.parent})),()=>[w("span",Ce,[n(k).pending?(d(),_(r,{key:0,name:n(k).pending,class:V(["h-4 w-4",i.classes?.pendingIcon])},null,8,["name","class"])):C("",!0)])],!0),u(e.$slots,"pending-label",c(f({level:e.level,parent:e.parent})),()=>[w("span",null,D(i.i18n.pending),1)],!0)])],!0)])):n(S)?.tree?.length?(d(!0),b(X,{key:2},fe(n(S).tree,(a,o)=>(d(),b("li",{key:o},[u(e.$slots,"item",c(f({index:o,level:e.level,child:a,parent:e.parent,toggle:()=>n(p)[o]=!n(p)[o],open:n(p)[o]})),()=>[w("div",Ve,["children"in a?(d(),b("button",{key:0,class:"text-muted-400 nui-focus me-1 flex h-5 w-5 items-center justify-center rounded",onClick:s=>n(p)[o]=!n(p)[o]},[n(p)[o]&&n(k).open?(d(),_(r,{key:0,name:n(k).open,class:V(["h-4 w-4",i.classes?.treeIcon])},null,8,["name","class"])):!n(p)[o]&&n(k).closed?(d(),_(r,{key:1,name:n(k).closed,class:V(["h-4 w-4",i.classes?.treeIcon])},null,8,["name","class"])):C("",!0)],8,Ie)):u(e.$slots,"item-icon",c(G({key:1},{index:o,level:e.level,child:a,parent:e.parent,toggle:s=>{if("children"in a){n(p)[o]=!n(p)[o];return}$(a,s)},open:n(p)[o]})),()=>[w("span",Me,[n(k).item?(d(),_(r,{key:0,name:n(k).item,class:V([i.classes?.itemIcon,"h-4 w-4"])},null,8,["name","class"])):C("",!0)])],!0),n(v)!==void 0?u(e.$slots,"item-select",c(G({key:2},{index:o,level:e.level,child:a,parent:e.parent,toggle:s=>{if("children"in a){n(p)[o]=!n(p)[o];return}$(a,s)},open:n(p)[o]})),()=>["children"in a?(d(),_(l,{key:0,"model-value":h(a)&&y(a)?.length&&M(a),indeterminate:J(a),disabled:n(S).pending||!h(a)||y(a)?.length===0,classes:n(F),onClick:s=>$(a,s)},null,8,["model-value","indeterminate","disabled","classes","onClick"])):(d(),_(l,{key:1,modelValue:n(v),"onUpdate:modelValue":t[0]||(t[0]=s=>Q(v)?v.value=s:null),disabled:n(S).pending,value:a,classes:n(F),onClick:s=>$(a,s)},null,8,["modelValue","disabled","value","classes","onClick"]))],!0):C("",!0),u(e.$slots,"item-label",c(f({index:o,level:e.level,child:a,parent:e.parent,toggle:s=>{if("children"in a){n(p)[o]=!n(p)[o];return}$(a,s)},open:n(p)[o]})),()=>[w("span",null,D(a.item),1)],!0)])],!0),"children"in a?(d(),b(X,{key:0},[o in n(p)?pe((d(),b("div",Ae,[n(U)?(d(),b("div",{key:0,class:V(["absolute top-0 h-full w-[1px] border-l",e.classes?.treeline]),style:me({left:n(U).offset})},null,6)):C("",!0),u(e.$slots,"children",c(f({index:o,level:e.level,child:a,parent:e.parent})),()=>[ve(m,{modelValue:n(v),"onUpdate:modelValue":t[1]||(t[1]=s=>Q(v)?v.value=s:null),level:e.level+1,children:a.children,i18n:i.i18n,parent:a,icons:i.icons,treeline:i.treeline,classes:i.classes},{pending:g(s=>[u(e.$slots,"pending",c(f(s)),void 0,!0)]),"pending-label":g(s=>[u(e.$slots,"pending-label",c(f(s)),void 0,!0)]),"pending-icon":g(s=>[u(e.$slots,"pending-icon",c(f(s)),void 0,!0)]),empty:g(s=>[u(e.$slots,"empty",c(f(s)),void 0,!0)]),"empty-label":g(s=>[u(e.$slots,"empty-label",c(f(s)),void 0,!0)]),"empty-icon":g(s=>[u(e.$slots,"empty-icon",c(f(s)),void 0,!0)]),item:g(s=>[u(e.$slots,"item",c(f(s)),void 0,!0)]),"item-select":g(s=>[u(e.$slots,"item-select",c(f(s)),void 0,!0)]),"item-icon":g(s=>[u(e.$slots,"item-icon",c(f(s)),void 0,!0)]),"item-label":g(s=>[u(e.$slots,"item-label",c(f(s)),void 0,!0)]),children:g(s=>[u(e.$slots,"children",c(f(s)),void 0,!0)]),_:2},1032,["modelValue","level","children","i18n","parent","icons","treeline","classes"])],!0)],512)),[[de,n(p)[o]]]):C("",!0)],64)):C("",!0)]))),128)):(d(),b("li",$e,[u(e.$slots,"empty",c(f({level:e.level,parent:e.parent})),()=>[w("div",_e,[u(e.$slots,"empty-icon",c(f({level:e.level,parent:e.parent})),()=>[w("span",Se,[n(k).empty?(d(),_(r,{key:0,name:n(k).empty,class:V([i.classes?.emptyIcon,"h-4 w-4"])},null,8,["name","class"])):C("",!0)])],!0),u(e.$slots,"empty-label",c(f({level:e.level,parent:e.parent})),()=>[w("span",null,D(i.i18n.empty),1)],!0)])],!0)]))])}}});const je=ye(Be,[["__scopeId","data-v-40c6cb26"]]);export{je as _};
