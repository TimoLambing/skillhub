import{d as g,o,e as n,K as f,L as h,f as t,g as e,w as s,s as i,S as x,I as v,_ as N,l as k,n as y}from"./entry.46c51c2c.js";import{_ as B}from"./BaseButtonIcon.vue.a7b441ca.js";const C={class:"mb-2 space-y-5"},S={class:"text-muted-400"},w={key:0,class:"ms-auto flex items-center"},T=g({__name:"DemoTeamListCompact",props:{actions:{type:Boolean}},setup(m){const l=m,d=[{id:0,firstName:"Clarke",lastName:"Smith",image:"/img/avatars/3.svg",text:"EC",role:"UI/UX designer"},{id:1,firstName:"Sara",lastName:"Connor",image:void 0,text:"SC",role:"Frontend developer"},{id:2,firstName:"Tara",lastName:"Svenson",image:"/img/avatars/4.svg",text:"TS",role:"Software architect"},{id:3,firstName:"Naomi",lastName:"Liversky",image:void 0,text:"NL",role:"UI/UX designer"}];return(I,L)=>{const _=v,p=N,u=k,r=y,c=B;return o(),n("div",C,[(o(),n(f,null,h(d,a=>t("div",{key:a.id,class:"flex items-center gap-3"},[e(_,{src:a.image,text:a.text,class:"bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"},null,8,["src","text"]),t("div",null,[e(p,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[t("span",null,i(a.firstName)+" "+i(a.lastName.slice(0,1))+".",1)]),_:2},1024),e(u,{size:"xs"},{default:s(()=>[t("span",S,i(a.role),1)]),_:2},1024)]),l.actions?(o(),n("div",w,[e(c,{shape:"curved",muted:"",class:"scale-75"},{default:s(()=>[e(r,{name:"ph:phone-duotone",class:"h-5 w-5"})]),_:1}),e(c,{shape:"curved",muted:"",class:"scale-75"},{default:s(()=>[e(r,{name:"ph:video-camera-duotone",class:"h-5 w-5"})]),_:1})])):x("",!0)])),64))])}}});export{T as _};
