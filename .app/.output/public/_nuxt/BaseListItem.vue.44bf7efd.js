import{d as b,bj as k,c,o as s,e as u,a5 as a,j as o,a0 as d,w as m,h as _,s as p,S as i,f as $,_ as g,l as S}from"./entry.fcfe2dbb.js";const y={class:"nui-list-item"},w={key:0},x={class:"ms-auto"},V=b({__name:"BaseListItem",props:{title:{},subtitle:{}},setup(h){const t=h,n=k(),l=c(()=>!!(t.title||"title"in n)),r=c(()=>!!(t.subtitle||"subtitle"in n));return(e,C)=>{const f=g,B=S;return s(),u("li",y,[a(e.$slots,"default"),o(l)||o(r)?(s(),u("div",w,[o(l)?(s(),d(f,{key:0,as:"h6",weight:"medium",size:"md",lead:"tight"},{default:m(()=>[a(e.$slots,"title",{},()=>[_(p(t.title),1)])]),_:3})):i("",!0),o(r)?(s(),d(B,{key:1,size:"xs",class:"text-muted-500 dark:text-muted-400"},{default:m(()=>[a(e.$slots,"subtitle",{},()=>[_(p(t.subtitle),1)])]),_:3})):i("",!0)])):i("",!0),$("div",x,[a(e.$slots,"end")])])}}});export{V as _};