import{_ as u}from"./BaseProgressCircle.d08344f6.js";import{_ as m}from"./BaseButtonAction.vue.69766278.js";import{d,x as _,o as v,e as x,f as p,g as r,j as t,w as o,h as i,J as n}from"./entry.adb22a9c.js";const f={class:"max-w-xs space-y-4"},y={class:"flex items-end gap-2"},g={class:"flex justify-between gap-2"},z=d({__name:"circle",setup(b){const e=_(25);return(C,s)=>{const a=u,l=m;return v(),x("div",f,[p("div",y,[r(a,{title:"Primary circle progress bar",size:45,value:t(e),class:"text-primary-500"},null,8,["value"]),r(a,{title:"Yellow circle progress bar",size:55,value:t(e),class:"text-yellow-500"},null,8,["value"]),r(a,{title:"Pink circle progress bar",size:75,value:t(e),class:"text-pink-500"},null,8,["value"]),r(a,{title:"Indigo circle progress bar",size:85,value:t(e),class:"text-indigo-400"},null,8,["value"])]),p("div",g,[r(l,{class:n(t(e)===25&&"!border-primary-500 !text-primary-500"),onClick:s[0]||(s[0]=c=>e.value=25)},{default:o(()=>[i(" 25% ")]),_:1},8,["class"]),r(l,{class:n(t(e)===50&&"!border-primary-500 !text-primary-500"),onClick:s[1]||(s[1]=c=>e.value=50)},{default:o(()=>[i(" 50% ")]),_:1},8,["class"]),r(l,{class:n(t(e)===75&&"!border-primary-500 !text-primary-500"),onClick:s[2]||(s[2]=c=>e.value=75)},{default:o(()=>[i(" 75% ")]),_:1},8,["class"]),r(l,{class:n(t(e)===100&&"!border-primary-500 !text-primary-500"),onClick:s[3]||(s[3]=c=>e.value=100)},{default:o(()=>[i(" 100% ")]),_:1},8,["class"])])])}}});export{z as default};
