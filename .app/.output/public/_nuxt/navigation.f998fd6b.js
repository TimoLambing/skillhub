import{a4 as p,bd as m,bH as o,bq as i,bI as g,bJ as c,a2 as f,bK as h,bj as v}from"./entry.f45bc14e.js";const b=async a=>{const{content:e}=p().public;typeof a?.params!="function"&&(a=m(a));const t=a.params(),s=e.experimental.stripQueryParameters?o(`/navigation/${`${i(t)}.${e.integrity}`}/${g(t)}.json`):o(`/navigation/${i(t)}.${e.integrity}.json`);if(c())return(await f(()=>import("./client-db.02bb4e09.js"),["./client-db.02bb4e09.js","./entry.f45bc14e.js","./entry.7040707a.css","./index.c332151d.js"],import.meta.url).then(r=>r.generateNavigation))(t);const n=await $fetch(s,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:h(t),previewToken:v().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};export{b as f};