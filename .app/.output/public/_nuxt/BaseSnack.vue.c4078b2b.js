import{d as k,o as s,e as n,g as t,f as o,S as f,a5 as p,h as g,s as h,J as v,n as B,$ as S}from"./entry.ce48552a.js";const y={key:0,class:"nui-snack-icon"},C={key:1,class:"nui-snack-image"},x=["src"],z={class:"nui-snack-text"},$=k({__name:"BaseSnack",props:{label:{default:""},icon:{default:void 0},image:{default:void 0},size:{default:"md"},color:{default:"default"}},emits:["delete"],setup(c,{emit:i}){const e=c,l=i,m={sm:"nui-snack-sm",md:"nui-snack-md"},d={default:"nui-snack-default",muted:"nui-snack-muted"};return(u,a)=>{const r=B,_=S;return s(),n("div",{class:v(["nui-snack",[m[e.size],d[e.color],e.icon||e.image?"nui-has-media":""]])},[e.icon&&!e.image?(s(),n("div",y,[t(r,{name:e.icon,class:"nui-snack-icon-inner"},null,8,["name"])])):e.image&&!e.icon?(s(),n("div",C,[o("img",{src:e.image,class:"nui-snack-image-inner",alt:""},null,8,x)])):f("",!0),o("span",z,[p(u.$slots,"default",{},()=>[g(h(e.label),1)])]),t(_,{class:"nui-snack-button",shape:"full",onClick:a[0]||(a[0]=N=>l("delete"))})],2)}}});export{$ as _};
