import s from"./ContentSlot.605022d6.js";import{d as o,bj as u,c,bT as f}from"./entry.f4bf1c86.js";import"./node.566f6b6d.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=f(),{between:n,default:a}=u(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};