import{d as t,v as s,o as u,a as r,e as n,h as a,n as m}from"./entry.a9943f59.js";const p={class:"grid gap-6 md:max-w-lg md:grid-cols-2"},h=t({__name:"shapes",setup(i){const e=s({first:"",second:"",third:"",fourth:""});return(f,l)=>{const d=m;return u(),r("div",p,[n(d,{modelValue:a(e).first,"onUpdate:modelValue":l[0]||(l[0]=o=>a(e).first=o),shape:"straight",label:"Straight input",placeholder:"Ex: username"},null,8,["modelValue"]),n(d,{modelValue:a(e).second,"onUpdate:modelValue":l[1]||(l[1]=o=>a(e).second=o),shape:"rounded",label:"Rounded input",placeholder:"Ex: username"},null,8,["modelValue"]),n(d,{modelValue:a(e).third,"onUpdate:modelValue":l[2]||(l[2]=o=>a(e).third=o),shape:"curved",label:"Curved input",placeholder:"Ex: username"},null,8,["modelValue"]),n(d,{modelValue:a(e).fourth,"onUpdate:modelValue":l[3]||(l[3]=o=>a(e).fourth=o),shape:"full",label:"Full input",placeholder:"Ex: username"},null,8,["modelValue"])])}}});export{h as default};