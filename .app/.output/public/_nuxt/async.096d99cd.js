import{_ as i}from"./BaseTreeSelect.c815ceef.js";import{d as m,o as s,a,e as c}from"./entry.a9943f59.js";import"./BaseCheckbox.vue.bbe76764.js";import"./IconCheck.7b98e61a.js";const l={class:"md:max-w-lg"},w=m({__name:"async",setup(u){const o=async()=>(await new Promise(e=>setTimeout(e,3e3)),[{item:"Item 1",open:!0,children:async()=>(await new Promise(e=>setTimeout(e,8e3)),Array.from({length:100},(e,n)=>({item:`Item 1.${n}`,children:async()=>(await new Promise(t=>setTimeout(t,2e3)),Array.from({length:10},(t,r)=>({item:`Item 1.${n}.${r}`})))})))},{item:"Item 2",children:async()=>(await new Promise(e=>setTimeout(e,8e3)),Array.from({length:100},(e,n)=>({item:`Item 2.${n}`,children:async()=>(await new Promise(t=>setTimeout(t,2e3)),Array.from({length:10},(t,r)=>({item:`Item 2.${n}.${r}`})))})))}]);return(e,n)=>{const t=i;return s(),a("div",l,[c(t,{children:o,treeline:"",icons:{open:"lucide:chevron-up",closed:"lucide:chevron-down",pending:"svg-spinners:270-ring-with-bg"}})])}}});export{w as default};
