import l from"./ContentQuery.bd265f1b.js";import{d as p,bj as i,a4 as n}from"./entry.adb22a9c.js";const s=(o,e)=>n("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:o,data:e},null,2)),m=p({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(o){const e=i(),{path:u,query:a}=o,d={...a||{},path:u||a?.path||"/"};return n(l,d,{default:e?.default?({data:t,refresh:r,isPartial:f})=>e.default({list:t,refresh:r,isPartial:f,...this.$attrs}):t=>s("default",t.data),empty:t=>e?.empty?e.empty(t):s("default",t?.data),"not-found":t=>e?.["not-found"]?e?.["not-found"]?.(t):s("not-found",t?.data)})}}),h=m;export{h as default};
