import{d as y,aa as C,bj as g,bR as v,bc as D,a4 as n}from"./entry.f4bf1c86.js";import{u}from"./head.81a0a302.js";import q from"./ContentRenderer.e0fe499b.js";import w from"./ContentQuery.1823e38f.js";import"./ContentRendererMarkdown.vue.9fe2b585.js";import"./index.c332151d.js";import"./index.30ac238c.js";const b=y({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(l){const{contentHead:p}=C().public.content,e=g(),{tag:d,excerpt:s,path:f,query:r,head:i}=l,a=i===void 0?p:i,c={...r||{},path:f||r?.path||v(D().path),find:"one"},m=(t,o)=>n("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:o},null,2));return n(w,c,{default:e?.default?({data:t,refresh:o,isPartial:h})=>(a&&u(t),e.default?.({doc:t,refresh:o,isPartial:h,excerpt:s,...this.$attrs})):({data:t})=>(a&&u(t),n(q,{value:t,excerpt:s,tag:d,...this.$attrs},{empty:o=>e?.empty?e.empty(o):m("default",t)})),empty:t=>e?.empty?.(t)||n("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>."),"not-found":t=>e?.["not-found"]?.(t)||n("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")})}}),B=b;export{B as default};