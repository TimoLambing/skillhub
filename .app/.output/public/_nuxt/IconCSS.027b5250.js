import{d as r,bU as p,ad as u,c as t,o as l,e as _,W as d,E as f}from"./entry.f4bf1c86.js";const m=r({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(a){p(e=>({ecd622aa:i.value}));const n=u(),s=a,c=t(()=>((n.nuxtIcon?.aliases||{})[s.name]||s.name).replace(/^i-/,"")),i=t(()=>`url('https://api.iconify.design/${c.value.replace(":","/")}.svg')`),o=t(()=>{if(!s.size&&typeof n.nuxtIcon?.size=="boolean"&&!n.nuxtIcon?.size)return;const e=s.size||n.nuxtIcon?.size||"1em";return String(Number(e))===e?`${e}px`:e});return(e,S)=>(l(),_("span",{style:d({width:o.value,height:o.value})},null,4))}});const g=f(m,[["__scopeId","data-v-dc58ffb5"]]);export{g as default};
