import{d as u,o as i,e as n,K as d,L as p,f as e,g as a,w as r,s,I as g,_,l as f}from"./entry.ce48552a.js";const x={class:"mb-2 space-y-5"},v={class:"text-muted-400"},k=u({__name:"DemoCommentListCompact",setup(h){const m=[{id:0,firstName:"Gary",lastName:"Splitman",image:"/img/avatars/18.svg",text:"GS",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."},{id:1,firstName:"Mark",lastName:"Weinstein",image:"/img/avatars/14.svg",text:"MW",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet."},{id:2,firstName:"Clarissa",lastName:"M",image:"/img/avatars/5.svg",text:"CM",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."},{id:3,firstName:"Eddy",lastName:"Flayer",image:"/img/avatars/8.svg",text:"EF",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit."}];return(N,b)=>{const o=g,c=_,l=f;return i(),n("div",x,[(i(),n(d,null,p(m,t=>e("div",{key:t.id,class:"flex gap-3"},[a(o,{src:t.image,text:t.text,size:"xs",shape:"straight",mask:"blob",class:"bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"},null,8,["src","text"]),e("div",null,[a(c,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:r(()=>[e("span",null,s(t.firstName)+" "+s(t.lastName.slice(0,1))+". ",1)]),_:2},1024),a(l,{size:"xs"},{default:r(()=>[e("span",v,s(t.content),1)]),_:2},1024)])])),64))])}}});export{k as _};
