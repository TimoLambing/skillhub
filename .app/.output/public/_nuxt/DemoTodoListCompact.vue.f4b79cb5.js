import{_}from"./BaseCheckboxAnimated.5d23f52c.js";import{d as f,r as h,o as i,a as n,F as g,E as v,b as t,e as o,h as x,C as w,w as l,t as c,_ as B,j as C}from"./entry.f45bc14e.js";const k={class:"mb-2 space-y-6"},y={class:"text-muted-400"},j=f({__name:"DemoTodoListCompact",props:{color:{default:"success"}},setup(V){const d=[{id:0,title:"Call Mr. Markstrom",description:"Review the project initial wireframes",completed:!0},{id:1,title:"Finish wireframes",description:"Make all requested changes and publish",completed:!1},{id:2,title:"Update timesheets",description:"Update all the team timesheets",completed:!1},{id:3,title:"Request payout",description:"Send project invoice to client",completed:!1},{id:4,title:"Approve components",description:"Review complete design system",completed:!0}],s=h(["Option 0","Option 1","Option 2"]);return(b,a)=>{const r=_,p=B,m=C;return i(),n("div",k,[(i(),n(g,null,v(d,e=>t("div",{key:e.id,class:"flex items-center gap-3"},[o(r,{modelValue:x(s),"onUpdate:modelValue":a[0]||(a[0]=u=>w(s)?s.value=u:null),color:"success",value:`Option ${e.id}`},null,8,["modelValue","value"]),t("div",null,[o(p,{as:"h4",size:"sm",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:l(()=>[t("span",null,c(e.title),1)]),_:2},1024),o(m,{size:"xs"},{default:l(()=>[t("span",y,c(e.description),1)]),_:2},1024)])])),64))])}}});export{j as _};