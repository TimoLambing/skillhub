import{d as e,o,a as n,b as t}from"./entry.573a177d.js";const s=t("h1",null,"Test error",-1),c=[s],i=e({__name:"test-error",setup(a){try{(function(){throw new Error("Test error!")})()}catch(r){r instanceof Error?console.error("An error occurred:",r.message):console.error("An unknown error occurred:",r)}return(r,l)=>(o(),n("div",null,c))}});export{i as default};