import{j as o,R as u,bc as f,Y as p,b9 as h,aa as l}from"./entry.f4bf1c86.js";const b=(i,c=f())=>{const a=o(i),r=l();u(()=>o(i),(t=a)=>{if(!c.path||!t)return;const e=Object.assign({},t?.head||{});e.meta=[...e.meta||[]],e.link=[...e.link||[]];const n=e.title||t?.title;n&&(e.title=n),r.public.content.host;const s=e?.description||t?.description;s&&e.meta.filter(m=>m.name==="description").length===0&&e.meta.push({name:"description",content:s}),e?.image||t?.image,p(()=>h(e))},{immediate:!0})};export{b as u};
