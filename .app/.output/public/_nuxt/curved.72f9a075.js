import{_ as k}from"./BaseCheckbox.vue.bbe76764.js";import{_ as T,b as w,c as C,a as $}from"./TairoTable.vue.3d6809f4.js";import{_ as B}from"./BaseTag.vue.97bf410c.js";import{d as A,r as m,o as n,V as i,w as e,e as a,b as c,h as v,C as g,f as t,a as N,F as U,E as H,t as r,M as P}from"./entry.a9943f59.js";import"./IconCheck.7b98e61a.js";const b={class:"flex items-center"},D=c("span",{class:"sr-only"},"View",-1),E={class:"flex items-center"},R=c("a",{href:"#",class:"text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"}," View ",-1),L=A({__name:"curved",setup(S){const d=m([]),p=m(!1),h=[{id:0,src:"/img/avatars/22.svg",name:"Anna Vrinkof",role:"UI/UX designer",expertise:"UX Design",rate:49,status:"Available"},{id:1,src:"/img/avatars/3.svg",name:"John Cambell",role:"Sales manager",expertise:"Management",rate:74,status:"Hired"},{id:2,src:"/img/avatars/9.svg",name:"Beth Delanoe",role:"Product designer",expertise:"Product",rate:43,status:"Available"},{id:3,src:"/img/avatars/14.svg",name:"Andrew Higgs",role:"Project manager",expertise:"Project",rate:69,status:"New"}];return(j,u)=>{const f=k,l=T,o=w,_=B,x=C,V=$;return n(),i(V,{shape:"curved"},{header:e(()=>[a(l,{uppercase:"",class:"p-4"},{default:e(()=>[c("div",b,[a(f,{modelValue:v(p),"onUpdate:modelValue":u[0]||(u[0]=s=>g(p)?p.value=s:null),shape:"curved",class:"text-primary-500"},null,8,["modelValue"])])]),_:1}),a(l,{uppercase:""},{default:e(()=>[t("Collaborator")]),_:1}),a(l,{uppercase:""},{default:e(()=>[t("Expertise")]),_:1}),a(l,{uppercase:""},{default:e(()=>[t("Rate")]),_:1}),a(l,{uppercase:""},{default:e(()=>[t("Status")]),_:1}),a(l,{uppercase:"",class:"p-4"},{default:e(()=>[D]),_:1})]),default:e(()=>[(n(),N(U,null,H(h,s=>a(x,{key:s.id},{default:e(()=>[a(o,{class:"p-4"},{default:e(()=>[c("div",E,[a(f,{modelValue:v(d),"onUpdate:modelValue":u[1]||(u[1]=y=>g(d)?d.value=y:null),value:`table-6-${s.id}`,shape:"curved",class:"text-primary-500"},null,8,["modelValue","value"])])]),_:2},1024),a(o,null,{default:e(()=>[t(r(s.name),1)]),_:2},1024),a(o,{light:""},{default:e(()=>[t(r(s.expertise),1)]),_:2},1024),a(o,null,{default:e(()=>[t("$"+r(s.rate)+"/hour",1)]),_:2},1024),a(o,null,{default:e(()=>[s.status==="Available"?(n(),i(_,{key:0,color:"success",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[t(r(s.status),1)]),_:2},1024)):s.status==="New"?(n(),i(_,{key:1,color:"info",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[t(r(s.status),1)]),_:2},1024)):s.status==="Hired"?(n(),i(_,{key:2,color:"warning",flavor:"pastel",shape:"full",class:"font-medium"},{default:e(()=>[t(r(s.status),1)]),_:2},1024)):P("",!0)]),_:2},1024),a(o,null,{default:e(()=>[R]),_:1})]),_:2},1024)),64))]),_:1})}}});export{L as default};