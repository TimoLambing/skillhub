import{_ as T}from"./BaseCheckbox.vue.b5db2210.js";import{_ as w,b as $,c as B,a as A}from"./TairoTable.vue.0177f069.js";import{d as C,x as m,o as i,a0 as u,w as e,g as a,f as l,j as g,H as h,h as t,e as N,K as H,L as U,s as o,S as P,I as S}from"./entry.cb41b48b.js";import{_ as j}from"./BaseTag.vue.0f3bc798.js";import"./IconCheck.fbbb5974.js";const D={class:"flex items-center"},R=l("span",{class:"sr-only"},"View",-1),E={class:"flex items-center"},I={class:"flex items-center"},L={class:"ms-3 leading-none"},X={class:"font-sans text-sm font-medium"},z={class:"text-muted-400 font-sans text-xs font-normal"},F=l("a",{href:"#",class:"text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"}," View ",-1),Q=C({__name:"media-straight",setup(J){const d=m([]),_=m(!1),v=[{id:0,src:"/img/avatars/22.svg",name:"Anna Vrinkof",role:"UI/UX designer",expertise:"UX Design",rate:49,status:"Available"},{id:1,src:"/img/avatars/3.svg",name:"John Cambell",role:"Sales manager",expertise:"Management",rate:74,status:"Hired"},{id:2,src:"/img/avatars/9.svg",name:"Beth Delanoe",role:"Product designer",expertise:"Product",rate:43,status:"Available"},{id:3,src:"/img/avatars/14.svg",name:"Andrew Higgs",role:"Project manager",expertise:"Project",rate:69,status:"New"}];return(K,c)=>{const f=T,n=w,r=$,x=S,p=j,V=B,y=A;return i(),u(y,{shape:"straight"},{header:e(()=>[a(n,{uppercase:"",class:"p-4"},{default:e(()=>[l("div",D,[a(f,{modelValue:g(_),"onUpdate:modelValue":c[0]||(c[0]=s=>h(_)?_.value=s:null),shape:"straight",class:"text-primary-500"},null,8,["modelValue"])])]),_:1}),a(n,{uppercase:""},{default:e(()=>[t("Collaborator")]),_:1}),a(n,{uppercase:""},{default:e(()=>[t("Expertise")]),_:1}),a(n,{uppercase:""},{default:e(()=>[t("Rate")]),_:1}),a(n,{uppercase:""},{default:e(()=>[t("Status")]),_:1}),a(n,{uppercase:"",class:"p-4"},{default:e(()=>[R]),_:1})]),default:e(()=>[(i(),N(H,null,U(v,s=>a(V,{key:s.id},{default:e(()=>[a(r,{class:"p-4"},{default:e(()=>[l("div",E,[a(f,{modelValue:g(d),"onUpdate:modelValue":c[1]||(c[1]=k=>h(d)?d.value=k:null),value:`table-3-${s.id}`,shape:"straight",class:"text-primary-500"},null,8,["modelValue","value"])])]),_:2},1024),a(r,null,{default:e(()=>[l("div",I,[a(x,{src:s.src,size:"sm"},null,8,["src"]),l("div",L,[l("h4",X,o(s.name),1),l("p",z,o(s.role),1)])])]),_:2},1024),a(r,{light:""},{default:e(()=>[t(o(s.expertise),1)]),_:2},1024),a(r,null,{default:e(()=>[t("$"+o(s.rate)+"/hour",1)]),_:2},1024),a(r,null,{default:e(()=>[s.status==="Available"?(i(),u(p,{key:0,color:"success",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[t(o(s.status),1)]),_:2},1024)):s.status==="New"?(i(),u(p,{key:1,color:"info",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[t(o(s.status),1)]),_:2},1024)):s.status==="Hired"?(i(),u(p,{key:2,color:"warning",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[t(o(s.status),1)]),_:2},1024)):P("",!0)]),_:2},1024),a(r,null,{default:e(()=>[F]),_:1})]),_:2},1024)),64))]),_:1})}}});export{Q as default};
