import{bf as _,h as c,c as k,v as F,bg as $}from"./entry.573a177d.js";function A(n,o,h){const[t={},i]=typeof o=="string"?[{},o]:[o,h],e=t.key||_([i,c(t.baseURL),typeof n=="string"?n:"",c(t.params||t.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const l=e===i?"$f"+e:e,s=k(()=>{let a=n;return typeof a=="function"&&(a=a()),c(a)});if(!t.baseURL&&typeof s.value=="string"&&s.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:y,lazy:p,default:b,transform:m,pick:w,watch:f,immediate:g,...v}=t,u=F({...v,cache:typeof t.cache=="boolean"?void 0:t.cache}),d={server:y,lazy:p,default:b,transform:m,pick:w,immediate:g,watch:f===!1?[]:[u,s,...f||[]]};let r;return $(l,()=>(r?.abort?.(),r=typeof AbortController<"u"?new AbortController:{},typeof s.value=="string"&&s.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(s.value,{signal:r.signal,...u})),d)}export{A as u};