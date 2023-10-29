import{_ as j}from"./DemoWizardStepTitle.vue.86beadde.js";import{d as S,b9 as F,x as g,c as z,o as r,e as u,g as s,f as e,w as o,j as a,a0 as H,H as m,s as v,J as I,K as E,L as G,S as R,a1 as A,a3 as C,q as Y,I as M,n as N,y as P}from"./entry.cb41b48b.js";import{_ as T}from"./BaseButtonIcon.vue.e7357dfd.js";import{_ as q}from"./BaseButtonAction.vue.4abf9d87.js";import{_ as J}from"./BaseRadioHeadless.vue.f02b9e0e.js";import{u as W}from"./multi-step-form.500e1169.js";import{_ as B}from"./index.d1b3a854.js";/* empty css                  */const O={class:"mx-auto flex w-full max-w-sm flex-col gap-3 px-4"},Q=e("div",{class:"mb-4 text-center"},[e("h3",{class:"text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"}," Customer ")],-1),X={class:"relative"},Z={key:1,class:"flex items-center gap-3"},ee={class:"flex flex-col"},te={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"},se={class:"text-muted-500 dark:text-muted-400 font-sans text-xs"},ae={class:"me-3 ms-auto"},oe={key:0,class:"nui-slimscroll max-h-[248px] space-y-2 overflow-y-auto"},le={class:"flex flex-col"},ne={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"},de={class:"text-muted-500 dark:text-muted-400 font-sans text-xs"},ie={class:"ms-auto"},re=e("div",{class:"mb-4 text-center"},[e("h3",{class:"text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"}," Time Frame ")],-1),ce={class:"divide-muted-200 dark:divide-muted-700 flex w-full justify-between divide-x"},ue={class:"relative pe-4"},me={class:"relative"},pe=["value"],_e={class:"text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"},fe={class:"relative ps-4"},he={class:"relative"},ge=["value"],ve={class:"text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"},xe=e("div",{class:"mb-4 text-center"},[e("h3",{class:"text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"}," Initial budget ")],-1),be={class:"flex w-full justify-center gap-3"},ke=e("span",null,"< 5K",-1),we=e("span",null,"< 30K",-1),ye=e("span",null,"< 100K",-1),Ve=e("span",null,"100K+",-1),Se=S({__name:"step-3",setup(Ae){const{data:n}=W();F({title:"Project details"});const D=[{logo:"/img/logos/brands/airbnb.svg",name:"Airbnb",location:"Los Angeles, CA"},{logo:"/img/logos/brands/facebook.svg",name:"Facebook",location:"Los Angeles, CA"},{logo:"/img/logos/brands/dribbble.svg",name:"Dribbble",location:"Los Angeles, CA"},{logo:"/img/logos/brands/figma.svg",name:"Figma",location:"Los Angeles, CA"},{logo:"/img/logos/brands/google.svg",name:"Google",location:"Los Angeles, CA"},{logo:"/img/logos/brands/github.svg",name:"Github",location:"Los Angeles, CA"},{logo:"/img/logos/brands/gitlab.svg",name:"Gitlab",location:"Los Angeles, CA"},{logo:"/img/logos/brands/hubspot.svg",name:"Hubspot",location:"Los Angeles, CA"},{logo:"/img/logos/brands/slack.svg",name:"Slack",location:"Los Angeles, CA"},{logo:"/img/logos/brands/udemy.svg",name:"Udemy",location:"Los Angeles, CA"}],i=g(""),x=g(!1),k=z(()=>i.value?D.filter(c=>c.name?.match(new RegExp(i.value,"i"))||c.location?.match(new RegExp(i.value,"i"))).splice(0,4):[]);function L(c){n.value.customer=c,x.value=!0,i.value=""}function K(){n.value.customer&&(n.value.customer.name=void 0,n.value.customer.logo=void 0,n.value.customer.location=void 0),x.value=!1,i.value=""}const w=g({input:"YYYY-MM-DD"}),d=g("< 5K");return(c,l)=>{const $=j,U=Y,y=M,p=N,V=T,b=P,_=q,f=J;return r(),u("div",null,[s($),e("div",O,[s(b,{shape:"curved",class:"relative z-10 p-6"},{default:o(()=>[Q,e("div",null,[e("div",X,[a(x)?(r(),u("div",Z,[s(y,{size:"sm",src:a(n).customer?.logo,class:"bg-muted-100 dark:bg-muted-700/60"},null,8,["src"]),e("div",ee,[e("h3",te,v(a(n).customer?.name),1),e("p",se,v(a(n).customer?.location),1)]),e("div",ae,[s(V,{small:"",shape:"full",onClick:K},{default:o(()=>[s(p,{name:"lucide:x",class:"h-4 w-4"})]),_:1})])])):(r(),H(U,{key:0,modelValue:a(i),"onUpdate:modelValue":l[0]||(l[0]=t=>m(i)?i.value=t:null),icon:"lucide:search",shape:"curved",placeholder:"ex: Figma, Github, ...",classes:{input:"h-12 text-base !ps-12",icon:"h-12 w-12"}},null,8,["modelValue"])),e("div",{class:I(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300",a(i).length>0?"opacity-100 translate-y-0":"opacity-0 pointer-events-none translate-y-1"])},[a(k).length>0?(r(),u("div",oe,[(r(!0),u(E,null,G(a(k),t=>(r(),u("div",{key:t.name,role:"button",class:"hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"},[s(y,{size:"sm",src:t.logo},null,8,["src"]),e("div",le,[e("h3",ne,v(t.name),1),e("p",de,v(t.location),1)]),e("div",ie,[s(V,{small:"",shape:"full",onClick:h=>L(t)},{default:o(()=>[s(p,{name:"lucide:plus",class:"h-4 w-4"})]),_:2},1032,["onClick"])])]))),128))])):R("",!0)],2)])])]),_:1}),s(b,{shape:"curved",class:"p-6"},{default:o(()=>[re,e("div",ce,[e("div",ue,[s(a(B),{modelValue:a(n).startDate,"onUpdate:modelValue":l[1]||(l[1]=t=>a(n).startDate=t),masks:a(w),"minute-increment":15,"min-date":new Date,"trim-weeks":""},{default:o(({inputValue:t,inputEvents:h})=>[e("div",me,[e("input",A({class:"text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4",value:t,placeholder:"Start date"},C(h,!0)),null,16,pe),e("div",_e,[s(p,{name:"lucide:map-pin",class:"h-5 w-5"})])])]),_:1},8,["modelValue","masks","min-date"])]),e("div",fe,[s(a(B),{id:"endDate",modelValue:a(n).endDate,"onUpdate:modelValue":l[2]||(l[2]=t=>a(n).endDate=t),masks:a(w),"minute-increment":15,"min-date":a(n).startDate,"trim-weeks":""},{default:o(({inputValue:t,inputEvents:h})=>[e("div",he,[e("input",A({class:"text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4",value:t,placeholder:"End date"},C(h,!0)),null,16,ge),e("div",ve,[s(p,{name:"lucide:flag",class:"h-5 w-5"})])])]),_:1},8,["modelValue","masks","min-date"])])])]),_:1}),s(b,{shape:"curved",class:"p-6"},{default:o(()=>[xe,e("div",be,[s(f,{modelValue:a(d),"onUpdate:modelValue":l[3]||(l[3]=t=>m(d)?d.value=t:null),name:"budget",value:"< 5K"},{default:o(()=>[s(_,{shape:"curved",class:"peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"},{default:o(()=>[ke]),_:1})]),_:1},8,["modelValue"]),s(f,{modelValue:a(d),"onUpdate:modelValue":l[4]||(l[4]=t=>m(d)?d.value=t:null),name:"budget",value:"< 30K"},{default:o(()=>[s(_,{shape:"curved",class:"peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"},{default:o(()=>[we]),_:1})]),_:1},8,["modelValue"]),s(f,{modelValue:a(d),"onUpdate:modelValue":l[5]||(l[5]=t=>m(d)?d.value=t:null),name:"budget",value:"< 100K"},{default:o(()=>[s(_,{shape:"curved",class:"peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"},{default:o(()=>[ye]),_:1})]),_:1},8,["modelValue"]),s(f,{modelValue:a(d),"onUpdate:modelValue":l[6]||(l[6]=t=>m(d)?d.value=t:null),name:"budget",value:"100K+"},{default:o(()=>[s(_,{shape:"curved",class:"peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"},{default:o(()=>[Ve]),_:1})]),_:1},8,["modelValue"])])]),_:1})])])}}});export{Se as default};
