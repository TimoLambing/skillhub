import{a as p}from"./BaseAutocomplete.vue.03e4db2f.js";import{d as c,r as l,o as u,a as g,e as i,h as t,C as m}from"./entry.f45bc14e.js";import"./BaseAvatar.vue.3b7e44f2.js";import"./BaseIconBox.vue.8cddffcc.js";import"./combobox.32ecc3f0.js";import"./use-tracked-pointer.98298dc1.js";import"./use-resolve-button-type.5a251a9a.js";import"./use-tree-walker.b10140ed.js";import"./use-controllable.8dee7983.js";const v={class:"grid gap-6 md:max-w-lg md:grid-cols-2"},P=c({__name:"clearable",setup(f){const r=l("Angular"),s=l({id:2,name:"Aaron Splatter",text:"Project Manager",media:"/img/avatars/16.svg"}),n=l(["Javascript","Nuxt","Vue.js","React.js","Angular","Alpine.js"]),d=l([{id:1,name:"Clarissa Perez",text:"Sales Manager",media:"/img/avatars/19.svg"},{id:2,name:"Aaron Splatter",text:"Project Manager",media:"/img/avatars/16.svg"},{id:3,name:"Mike Miller",text:"UI/UX Designer",media:"/img/avatars/3.svg"},{id:4,name:"Benedict Kessler",text:"Mobile Developer",media:"/img/avatars/22.svg"},{id:5,name:"Maya Rosselini",text:"Product Manager",media:"/img/avatars/2.svg"}]);return(x,a)=>{const o=p;return u(),g("div",v,[i(o,{modelValue:t(r),"onUpdate:modelValue":a[0]||(a[0]=e=>m(r)?r.value=e:null),items:t(n),"clear-value":"",icon:"lucide:search",shape:"full",placeholder:"e.g. Nuxt",label:"Framework",clearable:""},null,8,["modelValue","items"]),i(o,{modelValue:t(s),"onUpdate:modelValue":a[1]||(a[1]=e=>m(s)?s.value=e:null),items:t(d),"display-value":e=>e?.name||"",icon:"lucide:search",shape:"full",placeholder:"e.g. Aaron",label:"Manager",clearable:""},null,8,["modelValue","items","display-value"])])}}});export{P as default};