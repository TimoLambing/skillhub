import{_ as w}from"./BaseCheckbox.vue.bbe76764.js";import{_ as B,a as T,b as A,c as $}from"./TairoFlexTable.e92403dd.js";import{_ as C}from"./BaseAvatar.vue.aa11e2f4.js";import{_ as F}from"./BaseTag.vue.97bf410c.js";import{d as N,r as m,o as i,V as d,w as e,e as t,b as o,h as g,C as h,f as s,a as S,F as U,E,t as l,M as H,k as M}from"./entry.a9943f59.js";import"./IconCheck.7b98e61a.js";const P={class:"flex items-center"},R={class:"flex items-center"},D={class:"flex items-center"},j={class:"ms-3 leading-none"},X={class:"font-sans text-sm font-medium"},z={class:"text-muted-400 font-sans text-xs font-normal"},I={class:"font-medium"},Y=N({__name:"straight",setup(J){const _=m([]),u=m(!1),x=[{id:0,src:"/img/avatars/22.svg",name:"Anna Vrinkof",role:"UI/UX designer",expertise:"UX Design",rate:49,status:"Available"},{id:1,src:"/img/avatars/3.svg",name:"John Cambell",role:"Sales manager",expertise:"Management",rate:74,status:"Hired"},{id:2,src:"/img/avatars/9.svg",name:"Beth Delanoe",role:"Product designer",expertise:"Product",rate:43,status:"Available"},{id:3,src:"/img/avatars/14.svg",name:"Andrew Higgs",role:"Project manager",expertise:"Project",rate:69,status:"New"}];return(L,c)=>{const p=w,n=B,r=T,v=C,f=F,y=M,k=A,V=$;return i(),d(V,null,{header:e(()=>[t(n,{type:"shrink"},{default:e(()=>[o("div",P,[t(p,{modelValue:g(u),"onUpdate:modelValue":c[0]||(c[0]=a=>h(u)?u.value=a:null),shape:"straight",class:"text-primary-500"},null,8,["modelValue"])])]),_:1}),t(n,{type:"grow"},{default:e(()=>[s("Member")]),_:1}),t(n,{type:"stable"},{default:e(()=>[s("Expertise")]),_:1}),t(n,{type:"stable"},{default:e(()=>[s("Rate")]),_:1}),t(n,{type:"stable"},{default:e(()=>[s("Status")]),_:1}),t(n,{type:"stable"},{default:e(()=>[s("Actions")]),_:1})]),default:e(()=>[(i(),S(U,null,E(x,a=>t(k,{key:a.id,shape:"straight"},{default:e(()=>[t(r,{type:"shrink","data-content":"Selection"},{default:e(()=>[o("div",R,[t(p,{modelValue:g(_),"onUpdate:modelValue":c[1]||(c[1]=b=>h(_)?_.value=b:null),value:`checkbox-${a.id}`,shape:"straight",class:"text-primary-500"},null,8,["modelValue","value"])])]),_:2},1024),t(r,{type:"grow","data-content":"Member"},{default:e(()=>[o("div",D,[t(v,{src:a.src,size:"sm"},null,8,["src"]),o("div",j,[o("h4",X,l(a.name),1),o("p",z,l(a.role),1)])])]),_:2},1024),t(r,{type:"stable","data-content":"Expertise",light:""},{default:e(()=>[s(l(a.expertise),1)]),_:2},1024),t(r,{type:"stable","data-content":"Rate"},{default:e(()=>[o("span",I,"$"+l(a.rate)+"/hour",1)]),_:2},1024),t(r,{type:"stable","data-content":"Status"},{default:e(()=>[a.status==="Available"?(i(),d(f,{key:0,color:"success",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[s(l(a.status),1)]),_:2},1024)):a.status==="New"?(i(),d(f,{key:1,color:"info",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[s(l(a.status),1)]),_:2},1024)):a.status==="Hired"?(i(),d(f,{key:2,color:"warning",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[s(l(a.status),1)]),_:2},1024)):H("",!0)]),_:2},1024),t(r,{type:"stable","data-content":"Actions"},{default:e(()=>[t(y,{color:"primary",flavor:"outline",shape:"straight",class:"scale-90"},{default:e(()=>[s(" View ")]),_:1})]),_:1})]),_:2},1024)),64))]),_:1})}}});export{Y as default};