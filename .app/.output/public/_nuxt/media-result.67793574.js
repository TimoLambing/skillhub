import{a as d}from"./BaseAutocomplete.vue.8a31f91b.js";import{d as c,x as o,o as p,e as u,g,j as i,H as v}from"./entry.adb22a9c.js";import"./BaseIconBox.vue.4761f716.js";import"./combobox.f93d430e.js";import"./use-tracked-pointer.efb4822b.js";import"./use-resolve-button-type.1fcf5752.js";import"./use-tree-walker.1f1f2539.js";import"./use-controllable.2ba02657.js";const f={class:"grid gap-6 md:max-w-lg md:grid-cols-2"},b=c({__name:"media-result",setup(_){const n=o([{id:1,name:"Clarissa Perez",text:"Sales Manager",media:"/img/avatars/19.svg"},{id:2,name:"Aaron Splatter",text:"Project Manager",media:"/img/avatars/16.svg"},{id:3,name:"Mike Miller",text:"UI/UX Designer",media:"/img/avatars/3.svg"},{id:4,name:"Benedict Kessler",text:"Mobile Developer",media:"/img/avatars/22.svg"},{id:5,name:"Maya Rosselini",text:"Product Manager",media:"/img/avatars/2.svg"}]),r=o();function l(t,e){return!t||!e?e??[]:e.filter(s=>{const a=s?.name?.toLowerCase().includes(t.toLowerCase()),m=s?.text?.toLowerCase().includes(t.toLowerCase());return a||m})}return(t,e)=>{const s=d;return p(),u("div",f,[g(s,{modelValue:i(r),"onUpdate:modelValue":e[0]||(e[0]=a=>v(r)?r.value=a:null),items:i(n),"display-value":a=>a.name,"filter-items":l,icon:"ph:users-three",placeholder:"Search...",label:"Assignee",clearable:""},null,8,["modelValue","items","display-value"])])}}});export{b as default};
