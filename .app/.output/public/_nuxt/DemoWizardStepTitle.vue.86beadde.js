import{d as l,c as u,o as p,e as d,g as a,w as s,f as n,s as o,j as r,_ as f,l as x}from"./entry.cb41b48b.js";import{u as h}from"./multi-step-form.500e1169.js";const g={class:"mb-10 text-center"},w=l({__name:"DemoWizardStepTitle",setup(B){const{steps:c,currentStep:i}=h(),e=u(()=>c.value.find(t=>t.id===i.value));return(t,S)=>{const m=f,_=x;return p(),d("div",g,[a(m,{tag:"h1",size:"2xl",class:"text-muted-800 dark:text-white"},{default:s(()=>[n("span",null,o(r(e)?.meta?.title),1)]),_:1}),a(_,{size:"sm",class:"text-muted-500 dark:text-muted-400"},{default:s(()=>[n("span",null,o(r(e)?.meta?.subtitle),1)]),_:1})])}}});export{w as _};
