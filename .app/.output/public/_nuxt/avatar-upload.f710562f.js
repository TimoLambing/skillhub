import{d as f,c as h,x as g,o as t,e as o,f as c,g as a,w as i,j as r,H as b,i as k,n as w}from"./entry.adb22a9c.js";import{_ as x}from"./BaseButtonIcon.vue.711efff2.js";import{_ as B}from"./BaseInputFileHeadless.vue.cb8e4f01.js";import"./file-preview.b21824d4.js";const C={class:"relative h-20 w-20"},j=["src"],V=["src"],y={key:2,class:"absolute bottom-0 end-0 z-20"},z={key:3,class:"absolute bottom-0 end-0 z-20"},U={class:"relative","data-nui-tooltip":"Upload image"},A=f({__name:"avatar-upload",setup(I){const u=h(()=>"/img/avatars/10.svg"),n=g(null);return($,s)=>{const d=w,m=x,_=B;return t(),o("div",null,[c("form",{action:"",method:"POST",onSubmit:s[1]||(s[1]=k(()=>{},["prevent"]))},[a(_,{accept:"image/*",modelValue:r(n),"onUpdate:modelValue":s[0]||(s[0]=l=>b(n)?n.value=l:null)},{default:i(({open:l,remove:p,preview:v,files:e})=>[c("div",C,[e?.length&&e.item(0)?(t(),o("img",{key:0,src:v(e.item(0)).value,alt:"Upload preview",class:"bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"},null,8,j)):(t(),o("img",{key:1,src:r(u),alt:"Upload preview",class:"bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center dark:invert"},null,8,V)),e?.length&&e.item(0)?(t(),o("div",y,[a(m,{size:"sm",shape:"full",onClick:F=>p(e.item(0)),"data-nui-tooltip":"Remove image",class:"scale-90"},{default:i(()=>[a(d,{name:"lucide:x",class:"h-4 w-4"})]),_:2},1032,["onClick"])])):(t(),o("div",z,[c("div",U,[a(m,{size:"sm",shape:"full",onClick:l},{default:i(()=>[a(d,{name:"lucide:plus",class:"h-4 w-4"})]),_:2},1032,["onClick"])])]))])]),_:1},8,["modelValue"])],32)])}}});export{A as default};
