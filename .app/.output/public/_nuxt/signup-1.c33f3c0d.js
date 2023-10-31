import{d as I,z as c,c as L,u as R,a as U,b as V,o as D,e as C,f as a,g as e,w as t,h as l,i as O,j as o,s as H,k as M,_ as $,l as z,m as F,p as W,q as j,v as G,F as f,t as q}from"./entry.ce48552a.js";import Q from"./TairoLogo.9a20cdb9.js";import{_ as Z}from"./BaseThemeToggle.vue.11c4fa3a.js";import"./composables.87989fb1.js";const X={class:"h-screen md:flex"},Y={class:"from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex"},J={class:"mx-auto max-w-xs text-center"},K=M('<div class="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72"></div><div class="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div><div class="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-40"></div><div class="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-72"></div><div class="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div><div class="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40"></div>',6),ee={class:"dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2"},te={class:"mx-auto flex w-full max-w-xs items-center justify-between"},oe={class:"mb-4 space-y-3"},ae={class:"text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"},se=a("span",null,"Have an account?",-1),re={class:"text-center"},ce=I({__name:"signup-1",setup(ne){const p={EMAIL_REQUIRED:"A valid email is required",USERNAME_LENGTH:"Username must be at least 3 characters",PASSWORD_LENGTH:"Password must be at least 8 characters",PASSWORD_CONTAINS_EMAIL:"Password cannot contain your email",PASSWORD_MATCH:"Passwords do not match"},y=c.object({username:c.string().min(3,p.USERNAME_LENGTH),email:c.string().email(p.EMAIL_REQUIRED),password:c.string().min(8,p.PASSWORD_LENGTH),confirmPassword:c.string()}).superRefine((s,r)=>{s.password.includes(s.email)&&r.addIssue({code:c.ZodIssueCode.custom,message:p.PASSWORD_CONTAINS_EMAIL,path:["password"]}),s.password!==s.confirmPassword&&r.addIssue({code:c.ZodIssueCode.custom,message:p.PASSWORD_MATCH,path:["confirmPassword"]})}),S=q(y),A=L(()=>({username:"maya",email:"",password:"",confirmPassword:""})),{handleSubmit:T,isSubmitting:m,setFieldError:E}=R({validationSchema:S,initialValues:A}),B=U(),g=V(),v=T(async s=>{console.log("auth-success",s);try{await new Promise((r,_)=>{s.username==="maya"&&setTimeout(()=>_(new Error("Fake backend validation error")),2e3),setTimeout(r,4e3)}),g.clearAll(),g.show({title:"Success",message:`Account created for ${s.username}`,color:"success",icon:"ph:user-circle-fill",closable:!0}),B.push("/layouts/onboarding-1")}catch(r){r.message==="Fake backend validation error"&&E("username","This username is already taken")}});return(s,r)=>{const _=$,w=z,b=F,P=Q,x=W,N=Z,h=j,k=G;return D(),C("div",X,[a("div",Y,[a("div",J,[e(_,{as:"h2",size:"3xl",weight:"medium",class:"text-white"},{default:t(()=>[l(" Have an Account? ")]),_:1}),e(w,{size:"sm",class:"text-muted-200 mb-3"},{default:t(()=>[l(" No need to waste time on this page, let's take you back to your account ")]),_:1}),e(b,{to:"/auth/login-1",shape:"curved",class:"w-full"},{default:t(()=>[l("Login to Account")]),_:1})]),K]),a("div",ee,[a("div",te,[e(x,{to:"/dashboards",class:"text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"},{default:t(()=>[e(P,{class:"h-10 w-10"})]),_:1}),a("div",null,[e(N)])]),a("form",{method:"POST",action:"",onSubmit:r[0]||(r[0]=O((...n)=>o(v)&&o(v)(...n),["prevent"])),class:"mx-auto w-full max-w-xs",novalidate:""},[e(_,{as:"h2",size:"3xl",weight:"medium"},{default:t(()=>[l(" Welcome to Tairo ")]),_:1}),e(w,{size:"sm",class:"text-muted-400 mb-6"},{default:t(()=>[l(" Let's start by creating you account ")]),_:1}),a("div",oe,[e(o(f),{name:"username"},{default:t(({field:n,errorMessage:d,handleChange:i,handleBlur:u})=>[e(h,{"model-value":n.value,error:d,disabled:o(m),type:"text",shape:"curved",placeholder:"Username",icon:"ph:fingerprint-duotone","onUpdate:modelValue":i,onBlur:u},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),e(o(f),{name:"email"},{default:t(({field:n,errorMessage:d,handleChange:i,handleBlur:u})=>[e(h,{"model-value":n.value,error:d,disabled:o(m),type:"email",shape:"curved",placeholder:"Email Address",icon:"ph:at-duotone","onUpdate:modelValue":i,onBlur:u},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),e(o(f),{name:"password"},{default:t(({field:n,errorMessage:d,handleChange:i,handleBlur:u})=>[e(h,{"model-value":n.value,error:d,disabled:o(m),type:"password",shape:"curved",placeholder:"Password",icon:"ph:lock-duotone","onUpdate:modelValue":i,onBlur:u},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),e(o(f),{name:"confirmPassword"},{default:t(({field:n,errorMessage:d,handleChange:i,handleBlur:u})=>[e(h,{"model-value":n.value,error:d,disabled:o(m),type:"password",shape:"curved",placeholder:"Confirm password",icon:"ph:check","onUpdate:modelValue":i,onBlur:u},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e(b,{disabled:o(m),loading:o(m),type:"submit",shape:"curved",color:"primary",class:"!h-11 w-full"},{default:t(()=>[l(" Create Account ")]),_:1},8,["disabled","loading"]),a("p",ae,[se,e(x,{to:"/auth/login-1",class:"text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none"},{default:t(()=>[l(" Login here ")]),_:1})])],32),a("div",re,[e(k,{size:"sm",class:"text-muted-400"},{default:t(()=>[l(" © "+H(new Date().getFullYear())+" Tairo. All rights reserved. ",1)]),_:1})])])])}}});export{ce as default};
