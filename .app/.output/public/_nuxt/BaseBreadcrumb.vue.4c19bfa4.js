import{_ as w,a as C}from"./BaseDropdown.vue.179d4e24.js";import{d as L,bc as V,a as D,c as R,o,e as l,f as n,g as p,w as i,K as _,L as f,j as m,a0 as h,h as x,s as k,J as d,S as B,a5 as S,n as $,p as j}from"./entry.cb41b48b.js";const z={class:"nui-breadcrumb"},E={class:"nui-breadcrumb-list"},F={class:"nui-breadcrumb-item-mobile"},J={class:"nui-breadcrumb-item"},K={class:"nui-item-inner"},T={key:0,class:"nui-item-text"},G=L({__name:"BaseBreadcrumb",props:{items:{}},setup(g){const b=g,y=V(),I=D(),c=R(()=>{if(b.items)return b.items;const a=[],s=I.resolve("/");if(s.meta.breadcrumb!==!1)if(s.meta.breadcrumb){const e=s.meta.breadcrumb;a.push({to:s.path,...e})}else s.meta.title&&a.push({label:s.meta.title,to:s.path});for(const e of y.matched)if(e.meta.breadcrumb!==!1)if(e.meta.breadcrumb){const u=e.meta.breadcrumb;a.push({to:e.path,...u})}else e.meta.title&&a.push({label:e.meta.title,to:e.path});return a});return(a,s)=>{const e=w,u=C,N=$,v=j;return o(),l("nav",z,[n("ul",E,[n("li",F,[p(u,{flavor:"context",compact:""},{default:i(()=>[(o(!0),l(_,null,f(m(c).slice(0,m(c).length-1),(t,r)=>(o(),h(e,{key:r,to:t.to,class:"flex items-center gap-x-1"},{default:i(()=>[x(k(t.label),1)]),_:2},1032,["to"]))),128))]),_:1})]),(o(!0),l(_,null,f(m(c),(t,r)=>(o(),l(_,{key:r},[n("li",{class:d(["nui-breadcrumb-item",r!==m(c).length-1?"hidden sm:flex":"flex"])},[p(v,{to:t.to,class:d(["nui-item-inner",[t.to&&"nui-has-link"]])},{default:i(()=>[t.icon?(o(),h(N,{key:0,name:t.icon,class:"nui-item-icon"},null,8,["name"])):B("",!0),n("span",{class:d([t.hideLabel&&"sr-only"])},k(t.label),3)]),_:2},1032,["to","class"])],2),n("li",J,[n("div",K,[r<m(c).length-1?(o(),l("span",T,[S(a.$slots,"default",{},()=>[x("·")])])):B("",!0)])])],64))),128))])])}}});export{G as _};
