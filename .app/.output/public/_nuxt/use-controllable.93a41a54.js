import{r as i,c as f}from"./entry.573a177d.js";function p(n={},r=null,e=[]){for(let[u,o]of Object.entries(n))a(e,t(r,u),o);return e}function t(n,r){return n?n+"["+r+"]":r}function a(n,r,e){if(Array.isArray(e))for(let[u,o]of e.entries())a(n,t(r,u.toString()),o);else e instanceof Date?n.push([r,e.toISOString()]):typeof e=="boolean"?n.push([r,e?"1":"0"]):typeof e=="string"?n.push([r,e]):typeof e=="number"?n.push([r,`${e}`]):e==null?n.push([r,""]):p(e,r,n)}function c(n,r,e){let u=i(e?.value),o=f(()=>n.value!==void 0);return[f(()=>o.value?n.value:u.value),function(l){return o.value||(u.value=l),r?.(l)}]}export{c as d,p as e};