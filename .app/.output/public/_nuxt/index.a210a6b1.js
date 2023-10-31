import{d as I,z as m,c as A,u as U,a as j,b as F,o as L,e as P,f as e,g as t,w as o,h as a,i as z,j as s,k as N,_ as $,l as O,m as Q,n as W,p as q,q as C,F as f,t as M}from"./entry.ce48552a.js";import{_ as H}from"./BaseThemeToggle.vue.11c4fa3a.js";import{_ as G}from"./BaseCheckbox.vue.dbfe688d.js";import"./composables.87989fb1.js";import"./IconCheck.fb95c298.js";const X={class:"dark:bg-muted-800 flex min-h-screen bg-white"},J={class:"from-primary-900 to-primary-500 i group relative hidden w-3/5 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex"},K={class:"mx-auto max-w-xs text-center"},Y=N('<div class="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72"></div><div class="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div><div class="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-40"></div><div class="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-72"></div><div class="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div><div class="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40"></div>',6),Z={class:"relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none"},ee={class:"dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white"},te={class:"flex w-full items-center justify-between"},oe=e("span",null,"Back to Home",-1),se={class:"flex flex-wrap justify-between gap-4"},ae={class:"dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded-xl border bg-white px-6 py-4 dark:text-white"},re=e("div",null,"Login with Google",-1),de={class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded-xl px-5 py-4 text-center transition-colors duration-300 md:w-auto"},le={class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded-xl px-5 py-4 text-center transition-colors duration-300 md:w-auto"},ne=e("div",{class:"flex-100 mt-8 flex items-center"},[e("hr",{class:"border-muted-200 dark:border-muted-700 flex-auto border-t-2"}),e("span",{class:"text-muted-400 px-4 font-sans font-light"}," OR "),e("hr",{class:"border-muted-200 dark:border-muted-700 flex-auto border-t-2"})],-1),ie={class:"mt-6"},ue={class:"mt-5"},ce={class:"space-y-4"},me={class:"mt-6 flex items-center justify-between"},_e={class:"text-xs leading-5"},he={class:"mt-6"},pe={class:"block w-full rounded-md shadow-sm"},fe={class:"text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5"},be=e("span",null,"Don't have an account?",-1),Te=I({__name:"index",setup(ge){const b={EMAIL_REQUIRED:"A valid email is required",PASSWORD_REQUIRED:"A password is required"},k=m.object({email:m.string().email(b.EMAIL_REQUIRED),password:m.string().min(1,b.PASSWORD_REQUIRED),trustDevice:m.boolean()}),B=M(k),E=A(()=>({email:"",password:"",trustDevice:!1})),{handleSubmit:S,isSubmitting:l,setFieldError:R,meta:ve,values:xe,errors:we,resetForm:ye,setFieldValue:ke,setErrors:Be}=U({validationSchema:B,initialValues:E}),V=j(),g=F(),v=S(async _=>{console.log("auth-success",_);try{await new Promise((d,u)=>{_.password!=="password"&&setTimeout(()=>u(new Error("Fake backend validation error")),2e3),setTimeout(d,4e3)}),g.clearAll(),g.show({title:"Success",message:"Welcome back!",color:"success",icon:"ph:user-circle-fill",closable:!0})}catch(d){d.message==="Fake backend validation error"&&R("password",'Invalid credentials (use "password")');return}V.push("/dashboards")});return(_,d)=>{const u=$,x=O,w=Q,c=W,h=q,D=H,y=C,T=G;return L(),P("div",X,[e("div",J,[e("div",K,[t(u,{as:"h2",size:"3xl",weight:"medium",class:"text-white"},{default:o(()=>[a(" Don't yet have an Account? ")]),_:1}),t(x,{size:"sm",class:"text-muted-200 mb-3"},{default:o(()=>[a(" Let's make you one ")]),_:1}),t(w,{to:"/auth/signup",shape:"curved",class:"w-full"},{default:o(()=>[a("Register")]),_:1})]),Y]),e("div",Z,[e("div",ee,[e("div",te,[t(h,{to:"/dashboards",class:"text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300"},{default:o(()=>[t(c,{name:"gg:arrow-long-left",class:"h-5 w-5"}),oe]),_:1}),t(D)]),e("div",null,[t(u,{as:"h2",size:"3xl",lead:"relaxed",weight:"medium",class:"mt-6"},{default:o(()=>[a(" Welcome back. ")]),_:1}),t(x,{size:"sm",class:"text-muted-400 mb-6"},{default:o(()=>[a(" Login with social media or your credentials ")]),_:1}),e("div",se,[e("button",ae,[t(c,{name:"logos:google-icon",class:"h-5 w-5"}),re]),e("button",de,[t(c,{name:"fa6-brands:twitter",class:"mx-auto h-4 w-4"})]),e("button",le,[t(c,{name:"fa6-brands:linkedin-in",class:"mx-auto h-4 w-4"})])]),ne]),e("div",ie,[e("div",ue,[e("form",{method:"POST",action:"",onSubmit:d[0]||(d[0]=z((...r)=>s(v)&&s(v)(...r),["prevent"])),class:"mt-6",novalidate:""},[e("div",ce,[t(s(f),{name:"email"},{default:o(({field:r,errorMessage:n,handleChange:i,handleBlur:p})=>[t(y,{"model-value":r.value,error:n,disabled:s(l),type:"email",label:"Email address",placeholder:"Email address",shape:"curved",classes:{input:"h-12"},"onUpdate:modelValue":i,onBlur:p},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),t(s(f),{name:"password"},{default:o(({field:r,errorMessage:n,handleChange:i,handleBlur:p})=>[t(y,{"model-value":r.value,error:n,disabled:s(l),type:"password",label:"Password",placeholder:"Password",shape:"curved",classes:{input:"h-12"},"onUpdate:modelValue":i,onBlur:p},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",me,[t(s(f),{name:"trustDevice"},{default:o(({field:r,handleChange:n,handleBlur:i})=>[t(T,{"model-value":r.value,disabled:s(l),shape:"curved",label:"Trust for 60 days",color:"primary","onUpdate:modelValue":n,onBlur:i},null,8,["model-value","disabled","onUpdate:modelValue","onBlur"])]),_:1}),e("div",_e,[t(h,{to:"/auth/recover",class:"text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"},{default:o(()=>[a(" Forgot your password? ")]),_:1})])]),e("div",he,[e("div",pe,[t(w,{disabled:s(l),loading:s(l),type:"submit",color:"primary",shape:"curved",class:"!h-11 w-full",to:"/dashboards"},{default:o(()=>[a(" Sign in ")]),_:1},8,["disabled","loading"])])])],32),e("p",fe,[be,t(h,{to:"/auth/signup-2",class:"text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"},{default:o(()=>[a(" start your 14-day free trial ")]),_:1})])])])])])])}}});export{Te as default};
