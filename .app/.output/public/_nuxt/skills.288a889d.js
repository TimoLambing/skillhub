import{d as P,bb as I,o as a,a as o,e,w as s,b as t,f as d,h as c,F as y,E as v,_ as N,q as S,k as T,bd as A,j as E,l as j,s as L,t as m,V as C}from"./entry.573a177d.js";import{_ as F}from"./BaseProgressCircle.3f9e77bb.js";import{_ as V}from"./BaseDropdownDivider.2e950a8c.js";import{_ as q,a as H}from"./BaseDropdown.vue.8e453734.js";import{_ as G}from"./BaseButtonIcon.vue.9b850d9f.js";import{_ as Q}from"./TairoFormGroup.vue.a225dea0.js";import{_ as X}from"./TairoFormSave.vue.ebb94f50.js";import{u as J}from"./fetch.8f8778dc.js";import{_ as K,a as M}from"./placeholder-search-6-dark.35b304c8.js";import{_ as O,a as R}from"./placeholder-search-3-dark.e508cad6.js";import{_ as U,a as W}from"./placeholder-search-4-dark.e11f9903.js";import{_ as Y,a as Z}from"./placeholder-search-5-dark.48daf758.js";import"./menu.ad80cfd4.js";import"./use-tracked-pointer.ba98a1f0.js";import"./use-tree-walker.bc16d84d.js";import"./use-resolve-button-type.b8f2a593.js";import"./use-text-value.39ef2322.js";const ee={class:"w-full pb-16"},se={class:"flex items-center justify-between p-4"},te={class:"flex items-center gap-2"},le={class:"space-y-8 p-4"},ae={key:0},oe=t("img",{class:"block dark:hidden",src:K,alt:"Placeholder image"},null,-1),ne=t("img",{class:"hidden dark:block",src:M,alt:"Placeholder image"},null,-1),de={key:1,class:"mx-auto max-w-lg space-y-20 py-8"},ie={key:0},re=t("img",{class:"block dark:hidden",src:O,alt:"Placeholder image"},null,-1),ce=t("img",{class:"hidden dark:block",src:R,alt:"Placeholder image"},null,-1),ue={key:1,class:"space-y-8"},_e={class:"border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white"},me=["src","alt"],he={class:"ms-auto"},pe={class:"border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"},fe={class:"bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full"},ge=t("span",null,"Add a new language you speak",-1),ke={class:"ms-auto"},be={key:0},we=t("img",{class:"block dark:hidden",src:U,alt:"Placeholder image"},null,-1),xe=t("img",{class:"hidden dark:block",src:W,alt:"Placeholder image"},null,-1),ye={key:1,class:"space-y-8"},ve={class:"border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white"},ze=["src","alt"],$e={class:"ms-auto"},Be={class:"border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"},De={class:"bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full"},Pe=t("span",null,"Add a new skill you master",-1),Ie={class:"ms-auto"},Ne={key:0},Se=t("img",{class:"block dark:hidden",src:Y,alt:"Placeholder image"},null,-1),Te=t("img",{class:"hidden dark:block",src:Z,alt:"Placeholder image"},null,-1),Ae={key:1,class:"space-y-8"},Ee={class:"border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white"},je=["src","alt"],Le={class:"ms-auto"},Ce={class:"border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"},Fe={class:"bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex h-[50px] w-[50px] items-center justify-center rounded-full"},Ve=t("span",null,"Add a new tool you work with",-1),qe={class:"ms-auto"},cs=P({__name:"skills",async setup(He){let p,z;const{data:i,pending:Ge,error:Qe,refresh:Xe}=([p,z]=I(()=>J("/api/profile","$Iq553g94XQ")),p=await p,z(),p);return(Je,Ke)=>{const r=N,$=S,h=T,f=A,g=F,u=E,k=V,n=j,_=q,b=H,w=G,x=Q,B=L,D=X;return a(),o("form",ee,[e(B,null,{default:s(()=>[t("div",se,[t("div",null,[e(r,{tag:"h2",size:"sm",weight:"medium",lead:"normal",class:"uppercase tracking-wider"},{default:s(()=>[d(" Skills & Tools ")]),_:1}),e($,{size:"xs",class:"text-muted-400"},{default:s(()=>[d(" Edit your skills and related tools ")]),_:1})]),t("div",te,[e(h,{class:"w-24",to:"/layouts/profile"},{default:s(()=>[d("Cancel")]),_:1}),e(h,{color:"primary",class:"w-24"},{default:s(()=>[d("Save")]),_:1})])]),t("div",le,[c(i)?(a(),o("div",de,[e(x,{label:"Languages",sublabel:"How many languages do you speak?"},{default:s(()=>[c(i).personalInfo.languages.length===0?(a(),o("div",ie,[e(f,{title:"No languages",subtitle:"Looks like you didn't add any language yet. Share your skills to improve your profile.",class:"scale-90"},{image:s(()=>[re,ce]),default:s(()=>[e(h,{class:"mt-4 w-40"},{default:s(()=>[d("Add Language")]),_:1})]),_:1})])):(a(),o("div",ue,[(a(!0),o(y,null,v(c(i).personalInfo.languages,l=>(a(),o("div",{key:l.name,class:"flex w-full items-center gap-2"},[t("div",_e,[t("img",{src:l.icon,alt:l.name,class:"h-8 w-8 rounded-full"},null,8,me),e(g,{size:68,thickness:1.5,value:l.level,class:"text-primary-500 absolute -start-2.5 -top-2.5"},null,8,["value"])]),t("div",null,[e(r,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[d(m(l.name),1)]),_:2},1024),e(u,{size:"xs",class:"text-muted-400"},{default:s(()=>[t("span",null,m(l.mastery),1)]),_:2},1024)]),t("div",he,[e(b,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:s(()=>[e(k),e(_,{to:"#",title:"Edit",text:"Edit this experience"},{start:s(()=>[e(n,{name:"ph:pencil-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(_,{to:"#",title:"Delete",text:"Delete this experience"},{start:s(()=>[e(n,{name:"ph:trash-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])]))),128))])),t("div",pe,[t("div",fe,[e(n,{name:"ph:book-open-duotone",class:"h-5 w-5"})]),t("div",null,[e(r,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[d(" New Language ")]),_:1}),e(u,{size:"xs",class:"text-muted-400"},{default:s(()=>[ge]),_:1})]),t("div",ke,[e(w,{shape:"full",size:"sm"},{default:s(()=>[e(n,{name:"lucide:plus",class:"h-4 w-4"})]),_:1})])])]),_:1}),e(x,{label:"Skills",sublabel:"Add your best skills"},{default:s(()=>[c(i).personalInfo.skills.length===0?(a(),o("div",be,[e(f,{title:"No skills",subtitle:"Looks like you didn't add any skill yet. Share your skills to improve your profile.",class:"scale-90"},{image:s(()=>[we,xe]),default:s(()=>[e(h,{class:"mt-4 w-40"},{default:s(()=>[d("Add Skill")]),_:1})]),_:1})])):(a(),o("div",ye,[(a(!0),o(y,null,v(c(i).personalInfo.skills,l=>(a(),o("div",{key:l.name,class:"flex w-full items-center gap-2"},[t("div",ve,["logo"in l?(a(),o("img",{key:0,src:l.logo,alt:l.name,class:"h-8 w-8 rounded-full"},null,8,ze)):(a(),C(n,{key:1,name:l.icon,class:"text-muted-400 h-6 w-6"},null,8,["name"])),e(g,{size:68,thickness:1.5,value:l.level,class:"text-primary-500 absolute -start-2.5 -top-2.5"},null,8,["value"])]),t("div",null,[e(r,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[d(m(l.name),1)]),_:2},1024),e(u,{size:"xs",class:"text-muted-400"},{default:s(()=>[t("span",null,m(l.experience)+" years of experience",1)]),_:2},1024)]),t("div",$e,[e(b,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:s(()=>[e(k),e(_,{to:"#",title:"Edit",text:"Edit this skill"},{start:s(()=>[e(n,{name:"ph:pencil-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(_,{to:"#",title:"Delete",text:"Delete this skill"},{start:s(()=>[e(n,{name:"ph:trash-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])]))),128))])),t("div",Be,[t("div",De,[e(n,{name:"ph:sparkle-duotone",class:"h-5 w-5"})]),t("div",null,[e(r,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[d(" New Skill ")]),_:1}),e(u,{size:"xs",class:"text-muted-400"},{default:s(()=>[Pe]),_:1})]),t("div",Ie,[e(w,{shape:"full",size:"sm"},{default:s(()=>[e(n,{name:"lucide:plus",class:"h-4 w-4"})]),_:1})])])]),_:1}),e(x,{label:"Tools",sublabel:"Add the tools you work with"},{default:s(()=>[c(i).personalInfo.tools.length===0?(a(),o("div",Ne,[e(f,{title:"No tools",subtitle:"Looks like you didn't add any tools yet. Share your skills to improve your profile.",class:"scale-90"},{image:s(()=>[Se,Te]),default:s(()=>[e(h,{class:"mt-4 w-40"},{default:s(()=>[d("Add Tool")]),_:1})]),_:1})])):(a(),o("div",Ae,[(a(!0),o(y,null,v(c(i).personalInfo.tools,l=>(a(),o("div",{key:l.name,class:"flex w-full items-center gap-2"},[t("div",Ee,[t("img",{src:l.logo,alt:l.name,class:"h-8 w-8 rounded-full"},null,8,je),e(g,{size:68,thickness:1.5,value:l.level,class:"text-primary-500 absolute -start-2.5 -top-2.5"},null,8,["value"])]),t("div",null,[e(r,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[d(m(l.name),1)]),_:2},1024),e(u,{size:"xs",class:"text-muted-400"},{default:s(()=>[t("span",null,m(l.mastery),1)]),_:2},1024)]),t("div",Le,[e(b,{flavor:"context",label:"Dropdown",orientation:"end",size:"md",class:"z-20",shape:"curved"},{default:s(()=>[e(k),e(_,{to:"#",title:"Edit",text:"Edit this tool"},{start:s(()=>[e(n,{name:"ph:pencil-duotone",class:"me-2 block h-5 w-5"})]),_:1}),e(_,{to:"#",title:"Delete",text:"Delete this tool"},{start:s(()=>[e(n,{name:"ph:trash-duotone",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])]))),128))])),t("div",Ce,[t("div",Fe,[e(n,{name:"ph:wrench-duotone",class:"h-5 w-5"})]),t("div",null,[e(r,{tag:"h3",size:"sm",weight:"medium"},{default:s(()=>[d(" New Tool ")]),_:1}),e(u,{size:"xs",class:"text-muted-400"},{default:s(()=>[Ve]),_:1})]),t("div",qe,[e(w,{shape:"full",size:"sm"},{default:s(()=>[e(n,{name:"lucide:plus",class:"h-4 w-4"})]),_:1})])])]),_:1})])):(a(),o("div",ae,[e(f,{title:"No data to show",subtitle:"There is currently no data to show. Take the time to go through your profile to fill required information.",class:"scale-90"},{image:s(()=>[oe,ne]),_:1})]))])]),_:1}),e(D)])}}});export{cs as default};