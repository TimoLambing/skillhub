import v from"./TairoLogo.70a67096.js";import{d as y,x as b,o as w,e as k,f as e,g as t,w as s,h as a,j as _,H as p,i as B,p as V,_ as $,l as T,v as z,n as S,y as L,m as U}from"./entry.adb22a9c.js";import{_ as j}from"./BaseThemeToggle.vue.b94c26bd.js";import{_ as A}from"./BaseRadioHeadless.vue.ecf416af.js";import"./composables.ab45a5c6.js";const R=""+globalThis.__publicAssetsURL("img/illustrations/onboarding/pricing-1.svg"),C=""+globalThis.__publicAssetsURL("img/illustrations/onboarding/pricing-2.svg"),M=""+globalThis.__publicAssetsURL("img/illustrations/onboarding/pricing-3.svg"),N={class:"bg-muted-100 dark:bg-muted-900 min-h-screen"},P={class:"mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4"},H={class:"flex items-center gap-4"},F={class:"pt-8 text-center"},E={class:"w-full"},G={class:"mx-auto w-full"},I={class:"w-full"},O={class:"mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-3"},W={class:"flex flex-col text-center"},q=e("img",{src:R,alt:"2 factor authentication with email",class:"mx-auto mb-3 max-w-[160px]"},null,-1),D={class:"flex items-center justify-center gap-2 pt-4"},J=e("span",null,"$0",-1),K=e("span",{class:"text-muted-400 text-xs"}," /per month",-1),Q={class:"child absolute end-2 top-3 opacity-0"},X={class:"flex flex-col text-center"},Y=e("img",{src:C,alt:"2 factor authentication with SMS",class:"mx-auto mb-3 max-w-[160px]"},null,-1),Z={class:"flex items-center justify-center gap-2 pt-4"},ee=e("span",null,"$29",-1),te=e("span",{class:"text-muted-400 text-xs"}," /per month",-1),se={class:"child absolute end-2 top-3 opacity-0"},ae={class:"flex flex-col text-center"},oe=e("img",{src:M,alt:"2 factor authentication with app",class:"mx-auto mb-3 max-w-[160px]"},null,-1),ie={class:"flex items-center justify-center gap-2 pt-4"},le=e("span",null,"$49",-1),ce=e("span",{class:"text-muted-400 text-xs"}," /per month",-1),ne={class:"child absolute end-2 top-3 opacity-0"},re={class:"mx-auto flex flex-col items-center"},xe=y({__name:"onboarding-2",setup(de){const o=b("free");return(me,i)=>{const f=v,h=V,x=j,c=$,n=T,r=z,d=S,m=L,u=A,g=U;return w(),k("div",N,[e("div",P,[t(h,{to:"/",class:"text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"},{default:s(()=>[t(f,{class:"h-10 w-10"})]),_:1}),e("div",H,[t(x)])]),e("form",{action:"",method:"POST",onSubmit:i[3]||(i[3]=B(()=>{},["prevent"])),class:"mx-auto max-w-7xl px-4"},[e("div",null,[e("div",F,[t(c,{tag:"h2",size:"3xl",weight:"medium",class:"mb-2"},{default:s(()=>[a(" Start your Free Trial ")]),_:1}),t(n,{class:"text-muted-500 dark:text-muted-400 mb-8"},{default:s(()=>[a(" We won't bill you before your 14-day free trial period ends. ")]),_:1})]),e("div",null,[e("div",E,[e("div",G,[e("div",I,[e("div",O,[t(u,{modelValue:_(o),"onUpdate:modelValue":i[0]||(i[0]=l=>p(o)?o.value=l:null),name:"radio_custom",value:"free"},{default:s(()=>[t(m,{shape:"curved",class:"peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"},{default:s(()=>[e("div",W,[q,t(c,{size:"md",weight:"medium"},{default:s(()=>[a("Free")]),_:1}),t(n,{size:"xs",lead:"snug",class:"text-muted-500 dark:text-muted-400"},{default:s(()=>[a(" Start for free with most of our features. Get familiar with it and upgrade when you are ready. ")]),_:1}),e("div",D,[t(r,null,{default:s(()=>[J,K]),_:1})])]),e("div",Q,[t(d,{name:"ph:check-circle-duotone",class:"text-primary-500 h-7 w-7"})])]),_:1})]),_:1},8,["modelValue"]),t(u,{modelValue:_(o),"onUpdate:modelValue":i[1]||(i[1]=l=>p(o)?o.value=l:null),name:"radio_custom",value:"starter"},{default:s(()=>[t(m,{shape:"curved",class:"peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"},{default:s(()=>[e("div",X,[Y,t(c,{size:"md",weight:"medium"},{default:s(()=>[a("Starter")]),_:1}),t(n,{size:"xs",lead:"snug",class:"text-muted-500 dark:text-muted-400"},{default:s(()=>[a(" A more advanced plan with more features and additional storage. Perfect to scale your business. ")]),_:1}),e("div",Z,[t(r,null,{default:s(()=>[ee,te]),_:1})])]),e("div",se,[t(d,{name:"ph:check-circle-duotone",class:"text-primary-500 h-7 w-7"})])]),_:1})]),_:1},8,["modelValue"]),t(u,{modelValue:_(o),"onUpdate:modelValue":i[2]||(i[2]=l=>p(o)?o.value=l:null),name:"radio_custom",value:"business"},{default:s(()=>[t(m,{shape:"curved",class:"peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"},{default:s(()=>[e("div",ae,[oe,t(c,{size:"md",weight:"medium"},{default:s(()=>[a("Business")]),_:1}),t(n,{size:"xs",lead:"snug",class:"text-muted-500 dark:text-muted-400"},{default:s(()=>[a(" An all-in-one plan for your business, with everything you need. Perfect for growing at large scale. ")]),_:1}),e("div",ie,[t(r,null,{default:s(()=>[le,ce]),_:1})])]),e("div",ne,[t(d,{name:"ph:check-circle-duotone",class:"text-primary-500 h-7 w-7"})])]),_:1})]),_:1},8,["modelValue"])]),e("div",re,[t(g,{to:"/dashboards",type:"button",shape:"curved",class:"!h-12 w-48",color:"primary"},{default:s(()=>[a("Confirm")]),_:1}),t(h,{to:"#",class:"text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:s(()=>[a("Learn More")]),_:1})])])])])])])],32)])}}});export{xe as default};
