import $ from"./TairoLogo.cf38a86a.js";import{d as A,z as p,c as R,u as j,x as F,o as c,e as r,f as e,g as s,w as t,h as n,j as a,i as L,T as N,p as P,_ as z,l as M,q as U,m as D,F as q,t as C}from"./entry.f4bf1c86.js";import{_ as O}from"./BaseThemeToggle.vue.14574f81.js";import{_ as Q}from"./BaseMessage.vue.54ec2e93.js";import"./composables.dad65c29.js";const H={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},X={class:"mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"},G={class:"flex w-full items-center justify-center"},J={class:"relative mx-auto w-full max-w-2xl"},K={class:"me-auto ms-auto mt-4 w-full"},W={class:"me-auto ms-auto mt-4 w-full max-w-md"},Y={class:"text-center"},Z={key:0,class:"px-8 py-4"},ee={class:"mb-4 space-y-4"},se=e("p",{class:"text-base"}," An email has been sent to you with instructions on how to reset your password. ",-1),te=e("small",{class:"block pt-2"}," If you don't receive an email, please check your spam folder. If you still don't receive an email, that means you don't have an account ",-1),ae={class:"mb-4 space-y-4"},oe={class:"mb-6"},ne={class:"text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"},le=e("span",null,"False alert?",-1),_e=A({__name:"recover",setup(ie){const f={EMAIL_REQUIRED:"A valid email is required"},h=p.object({email:p.string().email(f.EMAIL_REQUIRED)}),v=C(h),x=R(()=>({email:""})),{handleSubmit:y,isSubmitting:l}=j({validationSchema:v,initialValues:x}),d=F(!1),m=y(async u=>{console.log("recover-success",u);try{await new Promise(o=>setTimeout(o,4e3))}catch{}d.value=!0});return(u,o)=>{const w=$,_=P,b=O,g=z,B=M,T=Q,k=U,E=D;return c(),r("div",H,[e("div",X,[s(_,{to:"/dashboards",class:"text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"},{default:t(()=>[s(w,{class:"h-10 w-10"})]),_:1}),e("div",null,[s(b)])]),e("div",G,[e("div",J,[e("div",K,[e("div",W,[e("div",Y,[s(g,{as:"h2",size:"3xl",weight:"medium"},{default:t(()=>[n(" Recover Password ")]),_:1}),s(B,{size:"sm",class:"text-muted-400 mb-6"},{default:t(()=>[n(" Follow the instuctions sent to your email address ")]),_:1})]),s(N,{mode:"out-in","enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"scale-0 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"transition-all duration-75 ease-in","leave-from-class":"scale-100 opacity-100","leave-to-class":"scale-0 opacity-0"},{default:t(()=>[a(d)?(c(),r("div",Z,[e("div",ee,[s(T,{class:"p-6",closable:!1},{default:t(()=>[se,te]),_:1})])])):(c(),r("form",{key:1,method:"POST",action:"",onSubmit:o[0]||(o[0]=L((...i)=>a(m)&&a(m)(...i),["prevent"])),class:"px-8 py-4",novalidate:""},[e("div",ae,[s(a(q),{name:"email"},{default:t(({field:i,errorMessage:I,handleChange:S,handleBlur:V})=>[s(k,{"model-value":i.value,error:I,disabled:a(l),type:"email",label:"Email address",placeholder:"Email address",autocomplete:"email",classes:{input:"h-12"},"onUpdate:modelValue":S,onBlur:V},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",oe,[s(E,{disabled:a(l),loading:a(l),type:"submit",color:"primary",class:"!h-12 w-full"},{default:t(()=>[n(" Recover Password ")]),_:1},8,["disabled","loading"])]),e("p",ne,[le,s(_,{to:"/auth/login-1",class:"text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"},{default:t(()=>[n(" Sign in ")]),_:1})])],32))]),_:1})])])])])])}}});export{_e as default};
