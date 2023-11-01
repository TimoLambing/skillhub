import U from"./TairoLogo.70a67096.js";import{d as V,z as m,c as E,u as L,a as N,b as C,o as O,e as $,f as e,g as t,w as o,i as D,h as _,j as s,k as M,p as W,_ as z,l as H,q as F,m as q,n as G,y as Q,F as h,t as Z}from"./entry.adb22a9c.js";import{_ as X}from"./BaseThemeToggle.vue.b94c26bd.js";import{_ as J}from"./BaseCheckbox.vue.681052e7.js";import{_ as K}from"./1.c920dc6a.js";import{_ as Y}from"./9.03b1c31c.js";import{_ as ee,a as te}from"./19.587706f7.js";import{_ as se,a as oe}from"./12.53bbabe4.js";import{_ as ae,a as le}from"./24.32caa991.js";import{_ as re}from"./3.8e30d762.js";import"./composables.ab45a5c6.js";import"./IconCheck.512ef9a2.js";const de=""+globalThis.__publicAssetsURL("img/avatars/20.svg"),ie=""+globalThis.__publicAssetsURL("img/avatars/10.svg"),ne=""+globalThis.__publicAssetsURL("img/avatars/5.svg"),ce={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},me={class:"mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"},ue={class:"flex w-full items-center justify-center"},_e={class:"relative mx-auto w-full max-w-2xl"},he=M('<img class="ltablet:block absolute start-0 top-[30%] hidden h-12 w-12 rounded-full object-cover duration-[cubic-bezier(0.86,0,0.07,1)] lg:block" src="'+K+'" alt="Avatar" width="48" height="48"><img class="ltablet:block absolute -start-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+Y+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -start-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+ee+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -start-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block" src="'+se+'" alt="Avatar" width="96" height="96"><img class="ltablet:block absolute -start-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block" src="'+oe+'" alt="Avatar" width="40" height="40"><img class="ltablet:block absolute -start-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block" src="'+de+'" alt="Avatar" width="80" height="80"><img class="ltablet:block absolute end-0 top-[30%] hidden h-12 w-12 rounded-full object-cover lg:block" src="'+ae+'" alt="Avatar" width="48" height="48"><img class="ltablet:block absolute -end-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+ie+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -end-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block" src="'+te+'" alt="Avatar" width="64" height="64"><img class="ltablet:block absolute -end-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block" src="'+le+'" alt="Avatar" width="96" height="96"><img class="ltablet:block absolute -end-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block" src="'+re+'" alt="Avatar" width="40" height="40"><img class="ltablet:block absolute -end-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block" src="'+ne+'" alt="Avatar" width="80" height="80">',12),be={class:"me-auto ms-auto mt-4 w-full"},pe={class:"text-center"},fe={class:"mb-4 space-y-4"},ge={class:"mb-6"},ve={class:"mt-6 flex items-center justify-between"},we=e("span",null,[e("span",null,"I accept the"),e("a",{href:"#",class:"text-primary-500 hover:underline focus:underline"}," Terms of Service ")],-1),xe={class:"mb-6"},ke=e("div",{class:"mb-6 grid gap-0 sm:grid-cols-3"},[e("hr",{class:"border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"}),e("span",{class:"dark:bg-muted-800 text-muted-400 relative top-0.5 bg-white text-center font-sans text-sm"}," Or continue with "),e("hr",{class:"border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"})],-1),ye={class:"grid grid-cols-3 gap-2"},Ae={type:"button",class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"},Se={type:"button",class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"},je={type:"button",class:"bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"},Te={class:"text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"},Be=e("span",null,"Already have an account?",-1),We=V({__name:"signup-3",setup(Pe){const u={EMAIL_REQUIRED:"A valid email is required",PASSWORD_LENGTH:"Password must be at least 8 characters",PASSWORD_CONTAINS_EMAIL:"Password cannot contain your email",PASSWORD_MATCH:"Passwords do not match"},w=m.object({email:m.string().email(u.EMAIL_REQUIRED),password:m.string().min(8,u.PASSWORD_LENGTH),confirmPassword:m.string()}).superRefine((r,l)=>{r.password.includes(r.email)&&l.addIssue({code:m.ZodIssueCode.custom,message:u.PASSWORD_CONTAINS_EMAIL,path:["password"]}),r.password!==r.confirmPassword&&l.addIssue({code:m.ZodIssueCode.custom,message:u.PASSWORD_MATCH,path:["confirmPassword"]})}),x=Z(w),k=E(()=>({email:"",password:"",confirmPassword:""})),{handleSubmit:y,isSubmitting:c}=L({validationSchema:x,initialValues:k}),A=N(),f=C(),g=y(async r=>{console.log("auth-success",r);try{await new Promise(l=>setTimeout(l,4e3)),f.clearAll(),f.show({title:"Success",message:"Account created!",color:"success",icon:"ph:user-circle-fill",closable:!0})}catch{return}A.push("/layouts/onboarding-1")});return(r,l)=>{const S=U,v=W,j=X,T=z,B=H,b=F,P=J,I=q,p=G,R=Q;return O(),$("div",ce,[e("div",me,[t(v,{to:"/",class:"text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"},{default:o(()=>[t(S,{class:"h-10 w-10"})]),_:1}),e("div",null,[t(j)])]),e("div",ue,[e("div",_e,[he,e("div",be,[e("form",{method:"POST",action:"",onSubmit:l[0]||(l[0]=D((...a)=>s(g)&&s(g)(...a),["prevent"])),class:"me-auto ms-auto mt-4 w-full max-w-md",novalidate:""},[e("div",pe,[t(T,{as:"h2",size:"3xl",weight:"medium"},{default:o(()=>[_(" Welcome to Tairo ")]),_:1}),t(B,{size:"sm",class:"text-muted-400 mb-6"},{default:o(()=>[_(" Let's start by creating you account ")]),_:1})]),t(R,{class:"p-8"},{default:o(()=>[e("div",fe,[t(s(h),{name:"email"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(b,{"model-value":a.value,error:d,disabled:s(c),type:"email",label:"Email address",placeholder:"ex: maya@cssninja.io",icon:"lucide:mail",classes:{input:"h-12 !ps-12",icon:"h-12 w-12"},"onUpdate:modelValue":i,onBlur:n},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),t(s(h),{name:"password"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(b,{"model-value":a.value,error:d,disabled:s(c),type:"password",label:"Password",placeholder:"••••••••••",icon:"lucide:lock",classes:{input:"h-12 !ps-12",icon:"h-12 w-12"},"onUpdate:modelValue":i,onBlur:n},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),t(s(h),{name:"confirmPassword"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(b,{"model-value":a.value,error:d,disabled:s(c),type:"password",label:"Confirm Password",placeholder:"••••••••••",icon:"lucide:lock",classes:{input:"h-12 !ps-12",icon:"h-12 w-12"},"onUpdate:modelValue":i,onBlur:n},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",ge,[e("div",ve,[t(s(h),{name:"terms"},{default:o(({field:a,errorMessage:d,handleChange:i,handleBlur:n})=>[t(P,{"model-value":a.value,disabled:s(c),error:d,shape:"rounded",color:"primary","onUpdate:modelValue":i,onBlur:n},{default:o(()=>[we]),_:2},1032,["model-value","disabled","error","onUpdate:modelValue","onBlur"])]),_:1})])]),e("div",xe,[t(I,{disabled:s(c),loading:s(c),type:"submit",color:"primary",class:"!h-12 w-full"},{default:o(()=>[_(" Sign Up ")]),_:1},8,["disabled","loading"])]),ke,e("div",ye,[e("button",Ae,[t(p,{name:"fa6-brands:google",class:"h-5 w-5"})]),e("button",Se,[t(p,{name:"fa6-brands:twitter",class:"h-5 w-5"})]),e("button",je,[t(p,{name:"fa6-brands:linkedin-in",class:"h-5 w-5"})])]),e("p",Te,[Be,t(v,{to:"/auth/login-3",class:"text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"},{default:o(()=>[_(" Sign in ")]),_:1})])]),_:1})],32)])])])])}}});export{We as default};
