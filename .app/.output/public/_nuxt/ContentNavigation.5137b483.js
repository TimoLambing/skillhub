import{d as l,an as d,c as f,ag as v,bS as p,bg as g,bv as m,bj as h,a4 as i,p as y}from"./entry.f4bf1c86.js";import{f as _}from"./navigation.eadefd5d.js";const b=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:t}=d(r),a=f(()=>typeof t.value?.params=="function"?t.value.params():t.value);if(!a.value&&v("dd-navigation").value){const{navigation:o}=p();return{navigation:o}}const{data:e}=await g(`content-navigation-${m(a.value)}`,()=>_(a.value));return{navigation:e}},render(r){const t=h(),{navigation:a}=r,e=n=>i(y,{to:n._path},()=>n.title),o=(n,u)=>i("ul",u?{"data-level":u}:null,n.map(s=>s.children?i("li",null,[e(s),o(s.children,u+1)]):i("li",null,e(s)))),c=n=>o(n,0);return t?.default?t.default({navigation:a,...this.$attrs}):c(a)}}),N=b;export{N as default};
