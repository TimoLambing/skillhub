import{d as i,bg as c,bh as d,c as u,o as p,a0 as l,w as m,h as _,s as f,j as o,J as h,p as g}from"./entry.adb22a9c.js";const y=i({__name:"DocLinker",props:{to:{}},setup(n){const t=n,{pending:a,data:e}=c(`doc-linker-to-${t.to}`,()=>t.to?d().where({components:{$contains:t.to}}).only(["_path"]).findOne():Promise.resolve(null),{watch:[()=>t.to]}),r=u(()=>e.value?._path?`Read ${t.to} docs`:`Documentation for ${t.to} is missing`);return(k,x)=>{const s=g;return p(),l(s,{to:o(e)?._path,class:h(["nui-focus inline-block rounded font-mono text-sm",[o(a)?"bg-muted-100 dark:bg-muted-800/60 text-muted-500 cursor-help no-underline":o(e)?._path?"nui-mark dark:decoration-primary-100/60 decoration-dotted underline-offset-4":"bg-danger-100 dark:bg-danger-800/60 text-danger-500 cursor-help no-underline"]]),"data-nui-tooltip":o(r)},{default:m(()=>[_("<"+f(t.to)+">",1)]),_:1},8,["to","class","data-nui-tooltip"])}}});export{y as default};