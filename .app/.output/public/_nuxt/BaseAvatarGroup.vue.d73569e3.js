import{_ as u}from"./BaseAvatar.vue.3b7e44f2.js";import{d as p,o as e,a as r,$ as m,F as c,E as g,e as v,W as d,b as n,t as f,M as _,D as h}from"./entry.f45bc14e.js";const x={key:0,class:"nui-avatar-count"},y={class:"nui-avatar-count-inner"},z={class:"nui-avatar-count-text"},C=p({__name:"BaseAvatarGroup",props:{limit:{default:4},size:{default:"sm"},avatars:{}},setup(i){const t=i,o={xxs:"nui-avatar-group-xxs",xs:"nui-avatar-group-xs",sm:"nui-avatar-group-sm",md:"nui-avatar-group-md",lg:"nui-avatar-group-lg",xl:"nui-avatar-group-lg","2xl":"nui-avatar-group-lg","3xl":"nui-avatar-group-lg","4xl":"nui-avatar-group-lg"};return(a,B)=>{const l=u;return e(),r("div",{class:h(["nui-avatar-group",[o[t.size]]])},[m(a.$slots,"default",{},()=>[(e(!0),r(c,null,g(a.avatars.length<=a.limit?a.avatars:a.avatars.slice(0,t.limit-1),s=>(e(),r("div",{key:typeof s=="string"?s:s.src,class:"nui-avatar-outer"},[v(l,d(typeof s=="string"?{src:s}:s,{size:t.size,shape:"full",tabindex:"0",class:"bg-primary-500/20 text-primary-500 !scale-90"}),null,16,["size"])]))),128)),a.avatars.length>t.limit?(e(),r("div",x,[n("div",y,[n("span",z," +"+f(a.avatars.length-t.limit+1),1)])])):_("",!0)])],2)}}});export{C as _};