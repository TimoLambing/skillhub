import{_ as p}from"./BaseTreeSelect.c815ceef.js";import{d as h,r as o,o as I,a as C,e as t,h as s,C as g,b as x,w as i,f as c,k}from"./entry.a9943f59.js";import"./BaseCheckbox.vue.bbe76764.js";import"./IconCheck.7b98e61a.js";const v={class:"md:max-w-lg"},B={class:"flex gap-2"},T=h({__name:"exposed",setup(V){const l=o([]),e=o(null);function a(){e.value?.toggleChildrenSelection()}function r(){e.value?.unselectAllChildren()}function u(){e.value?.selectAllChildren()}const d=o([{item:"Item 1",children:[{item:"Item 1.1"},{item:"Item 1.2"}]},{item:"Item 2"},{item:"Item 3",open:!0,children:[{item:"Item 3.0"},{item:"Item 3.1",open:!0,children:[{item:"Item 3.1.1"},{item:"Item 3.1.2",open:!0,children:[]},{item:"Item 3.1.3"}]},{item:"Item 3.2"},{item:"Item 3.3",children:[]}]},{item:"Item 4"}]);return(A,m)=>{const _=p,n=k;return I(),C("div",v,[t(_,{ref_key:"treeSelectRef",ref:e,modelValue:s(l),"onUpdate:modelValue":m[0]||(m[0]=f=>g(l)?l.value=f:null),children:s(d),treeline:""},null,8,["modelValue","children"]),x("div",B,[t(n,{onClick:a},{default:i(()=>[c("toggle selection")]),_:1}),t(n,{onClick:u},{default:i(()=>[c("select all selection")]),_:1}),t(n,{onClick:r},{default:i(()=>[c("unselect all selection")]),_:1})])])}}});export{T as default};