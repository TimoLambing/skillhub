import{a as d,b as p,_ as f}from"./BaseThemeToggle.vue.71a18a64.js";import{u as h}from"./composables.ed78bd73.js";import{d as x,c as T,o as _,e as r,X as b,ac as v,j as B,f as i,H as g,g as s,E as k}from"./entry.cb41b48b.js";const w={class:"nui-theme-switch"},y={class:"nui-theme-switch-inner"},E=x({__name:"BaseThemeSwitch",props:{disableTransitions:{type:Boolean,default:!1}},setup(o){const t=o,n=h(),e=T({get(){return n.value==="dark"},set(a){t.disableTransitions&&document.documentElement.classList.add("nui-no-transition"),n.preference=a?"dark":"light",t.disableTransitions&&setTimeout(()=>{document.documentElement.classList.remove("nui-no-transition")},0)}});return(a,c)=>{const l=d,m=p;return _(),r("label",w,[b(i("input",{class:"nui-theme-switch-input",type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=u=>g(e)?e.value=u:null)},null,512),[[v,B(e)]]),i("span",y,[s(l,{class:"nui-sun"}),s(m,{class:"nui-moon"})])])}}});const M={},S={class:"flex items-center gap-10"};function C(o,t){const n=f,e=E;return _(),r("div",S,[s(n),s(e)])}const I=k(M,[["render",C]]);export{I as default};
