import s from"./ContentSlot.e61f02cc.js";import{d as o,bj as u,c,bT as f}from"./entry.5f1d6f14.js";import"./node.95b7db0a.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=f(),{between:n,default:a}=u(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};