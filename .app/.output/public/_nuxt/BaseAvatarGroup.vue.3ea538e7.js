import{d as u,o as t,e as r,a5 as p,K as g,L as c,g as m,a1 as v,f as n,s as d,S as f,J as _,I as h}from"./entry.adb22a9c.js";const x={key:0,class:"nui-avatar-count"},y={class:"nui-avatar-count-inner"},z={class:"nui-avatar-count-text"},S=u({__name:"BaseAvatarGroup",props:{limit:{default:4},size:{default:"sm"},avatars:{}},setup(i){const e=i,o={xxs:"nui-avatar-group-xxs",xs:"nui-avatar-group-xs",sm:"nui-avatar-group-sm",md:"nui-avatar-group-md",lg:"nui-avatar-group-lg",xl:"nui-avatar-group-lg","2xl":"nui-avatar-group-lg","3xl":"nui-avatar-group-lg","4xl":"nui-avatar-group-lg"};return(a,B)=>{const l=h;return t(),r("div",{class:_(["nui-avatar-group",[o[e.size]]])},[p(a.$slots,"default",{},()=>[(t(!0),r(g,null,c(a.avatars.length<=a.limit?a.avatars:a.avatars.slice(0,e.limit-1),s=>(t(),r("div",{key:typeof s=="string"?s:s.src,class:"nui-avatar-outer"},[m(l,v(typeof s=="string"?{src:s}:s,{size:e.size,shape:"full",tabindex:"0",class:"bg-primary-500/20 text-primary-500 !scale-90"}),null,16,["size"])]))),128)),a.avatars.length>e.limit?(t(),r("div",x,[n("div",y,[n("span",z," +"+d(a.avatars.length-e.limit+1),1)])])):f("",!0)])],2)}}});export{S as _};
