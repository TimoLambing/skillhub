import{_ as l}from"./BaseSelect.vue.296f7435.js";import{d as s,x as r,o as p,e as m,g as u,w as c,j as i,H as d,f as e}from"./entry.fcfe2dbb.js";import"./IconChevronDown.727a7b32.js";const _={class:"grid gap-6 md:max-w-lg md:grid-cols-2"},f=e("option",{value:""},"Select a hero",-1),g=e("optgroup",{label:"Marvel"},[e("option",{value:"Iron man"},"Iron man"),e("option",{value:"Magneto"},"Magneto"),e("option",{value:"Cyclops"},"Cyclops")],-1),v=e("optgroup",{label:"DC Comics"},[e("option",{value:"Superman"},"Superman"),e("option",{value:"Batman"},"Batman")],-1),V=s({__name:"group",setup(h){const o=r("");return(B,a)=>{const t=l;return p(),m("div",_,[u(t,{modelValue:i(o),"onUpdate:modelValue":a[0]||(a[0]=n=>d(o)?o.value=n:null),shape:"rounded",label:"Select a hero"},{default:c(()=>[f,g,v]),_:1},8,["modelValue"])])}}});export{V as default};