import{a4 as p,bv as m,bG as o,bf as i,bH as g,bI as f,a2 as c,bJ as v,bB as h}from"./entry.a9943f59.js";const b=async a=>{const{content:e}=p().public;typeof a?.params!="function"&&(a=m(a));const t=a.params(),s=e.experimental.stripQueryParameters?o(`/navigation/${`${i(t)}.${e.integrity}`}/${g(t)}.json`):o(`/navigation/${i(t)}.${e.integrity}.json`);if(f())return(await c(()=>import("./client-db.f5f87661.js"),["./client-db.f5f87661.js","./entry.a9943f59.js","./entry.55c1e76c.css","./index.c332151d.js"],import.meta.url).then(r=>r.generateNavigation))(t);const n=await $fetch(s,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:v(t),previewToken:h().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};export{b as f};