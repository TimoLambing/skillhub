import{_ as i}from"./BaseTreeSelect.c815ceef.js";import{d as r,r as l,o as a,a as s,e as c,h as d,C as p}from"./entry.a9943f59.js";import"./BaseCheckbox.vue.bbe76764.js";import"./IconCheck.7b98e61a.js";const u={class:"md:max-w-lg"},v=r({__name:"model",setup(_){const e=l([]),m=[{item:"Item 1",children:[{item:"Item 1.1"},{item:"Item 1.2"}]},{item:"Item 2"},{item:"Item 3",open:!0,children:[{item:"Item 3.0"},{item:"Item 3.1",open:!0,children:[{item:"Item 3.1.1"},{item:"Item 3.1.2",open:!0,children:[]},{item:"Item 3.1.3"}]},{item:"Item 3.2"},{item:"Item 3.3",children:[]}]},{item:"Item 4"}];return(I,t)=>{const n=i;return a(),s("div",u,[c(n,{children:m,treeline:"",modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=o=>p(e)?e.value=o:null)},null,8,["modelValue"])])}}});export{v as default};