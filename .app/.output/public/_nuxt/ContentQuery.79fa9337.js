import{d as q,an as b,c as g,aa as C,R as S,bg as _,bh as c,bv as k,bj as A,a4 as N}from"./entry.fcfe2dbb.js";const O=q({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:l,where:i,sort:o,limit:s,skip:d,locale:f,find:h}=b(a),p=g(()=>t.value?.includes("/_")),y=!C().public.content.experimental.advanceQuery;S(()=>a,()=>n(),{deep:!0});const u=e=>y?e?.surround?e.surround:e?._id||Array.isArray(e)?e:e?.result:e.result,{data:v,refresh:n}=await _(`content-query-${k(a)}`,()=>{let e;return t.value?e=c(t.value):e=c(),r.value&&(e=e.only(r.value)),l.value&&(e=e.without(l.value)),i.value&&(e=e.where(i.value)),o.value&&(e=e.sort(o.value)),s.value&&(e=e.limit(s.value)),d.value&&(e=e.skip(d.value)),f.value&&(e=e.where({_locale:f.value})),h.value==="one"?e.findOne().then(u):h.value==="surround"?t.value?y?e.findSurround(t.value):e.withSurround(t.value).findOne().then(u):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(u)):e.find().then(u)});return{isPartial:p,data:v,refresh:n}},render(a){const t=A(),{data:r,refresh:l,isPartial:i,path:o,only:s,without:d,where:f,sort:h,limit:p,skip:y,locale:u,find:v}=a,n={path:o,only:s,without:d,where:f,sort:h,limit:p,skip:y,locale:u,find:v};if(n.find==="one"){if(!r&&t?.["not-found"])return t["not-found"]({props:n,...this.$attrs});if(t?.empty&&r?._type==="markdown"&&!r?.body?.children.length)return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t?.["not-found"])return t["not-found"]({props:n,...this.$attrs});return t?.default?t.default({data:r,refresh:l,isPartial:i,props:n,...this.$attrs}):((m,w)=>N("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:m,data:w},null,2)))("default",{data:r,props:n,isPartial:i})}}),$=O;export{$ as default};