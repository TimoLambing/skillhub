import{d as h,x as F,ae as g,af as k,al as B,A as D,o as V,e as j,a5 as x,j as l,f as y,a1 as C}from"./entry.f4bf1c86.js";import{u as d}from"./file-preview.5686e07d.js";const I={class:"group/nui-file-headless relative"},M=["id"],T=h({inheritAttrs:!1,__name:"BaseInputFileHeadless",props:{modelValue:{default:void 0},id:{default:void 0},filterFileDropped:{type:Function,default:()=>!0}},emits:["update:modelValue"],setup(v,{expose:m,emit:w}){const r=v,_=w,e=F(),a=g(r,"modelValue",_,{passive:!0}),o=k(()=>r.id),p=new WeakMap;function n(){e.value?.click()}function f(s){s.stopPropagation(),s.preventDefault();const t=s.dataTransfer,i=new DataTransfer;if(e.value&&t){for(const c of t.files)r.filterFileDropped(c)&&i.items.add(c);e.value.files=i.files,a.value=e.value.files}}function u(s){if(!s||!a.value||!e.value)return;const t=new DataTransfer;p.has(s)&&p.delete(s);for(const i of a.value)i!==s&&t.items.add(i);e.value.files=t.files,a.value=e.value.files}return B("BaseInputFileHeadlessContext",D({el:e,id:o,files:a,open:n,remove:u,preview:d,drop:f})),m({el:e,id:o,files:a,open:n,remove:u,preview:d,drop:f}),(s,t)=>(V(),j("div",I,[x(s.$slots,"default",{id:l(o),el:l(e),files:l(a),open:n,remove:u,preview:l(d),drop:f}),y("input",C({id:l(o),ref_key:"inputRef",ref:e,type:"file"},s.$attrs,{class:"hidden",onChange:t[0]||(t[0]=i=>a.value=i.target.files)}),null,16,M)]))}});export{T as _};