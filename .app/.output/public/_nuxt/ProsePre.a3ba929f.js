import l from"./ProseCode.9be6a74c.js";import{d as n,o,a0 as i,w as r,f as s,J as m,a5 as g}from"./entry.ce48552a.js";import"./AddonMarkdownRemark.fe7a7d15.js";import"./BaseProse.vue.05e7fee6.js";import"./composables.87989fb1.js";import"./index.30ac238c.js";const S=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null}},setup(e){return(t,u)=>{const a=l;return o(),i(a,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:r(()=>[s("pre",{class:m(t.$props.class)},[g(t.$slots,"default")],2)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{S as default};
