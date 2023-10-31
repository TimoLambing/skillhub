import{d as U,z as u,c as I,u as w,x as V,by as M,b as x,o as F,e as D,g as a,w as i,f as n,i as L,j as e,F as h,h as Q,t as k,q as z,bz as $,m as j,y as C}from"./entry.46c51c2c.js";const O={class:"max-w-lg"},P={class:"grid grid-cols-12 gap-4"},G={class:"col-span-12 sm:col-span-6"},q={class:"col-span-12 sm:col-span-6"},H={class:"col-span-12"},J={class:"col-span-12"},X={class:"col-span-12"},se=U({__name:"validation",setup(Y){const _={FIRSTNAME_REQUIRED:"First name can't be empty",LASTNAME_REQUIRED:"Last name can't be empty",EMAIL_REQUIRED:"Enter a valid email address",MESSAGE_REQUIRED:"Message can't be empty"},f=u.object({firstName:u.string().min(1,_.FIRSTNAME_REQUIRED),lastName:u.string().min(1,_.LASTNAME_REQUIRED),email:u.string().email(_.EMAIL_REQUIRED),message:u.string().min(1,_.MESSAGE_REQUIRED)}),b=k(f),g=I(()=>({firstName:"",lastName:"",email:"",message:""})),{handleSubmit:R,isSubmitting:r,setFieldError:T,meta:N,values:K,errors:W,resetForm:S,setFieldValue:Z,setErrors:ee}=w({validationSchema:b,initialValues:g}),p=V(!1);M(()=>{if(N.value.dirty)return confirm("You have unsaved changes. Are you sure you want to leave?")});const v=x(),E=R(async m=>{p.value=!1,console.log("message-send-success",m);try{await new Promise((d,c)=>{m.firstName==="Hanzo"&&setTimeout(()=>c(new Error("Fake backend validation error")),2e3),setTimeout(d,4e3)}),v.clearAll(),v.show({title:"Success",message:"Message has been sent!",color:"success",icon:"ph:check",closable:!0})}catch(d){d.message==="Fake backend validation error"&&(T("firstName","This name is not allowed"),document.documentElement.scrollTo({top:0,behavior:"smooth"}),v.clearAll(),v.show({title:"Oops!",message:"Please review the errors in the form",color:"danger",icon:"lucide:alert-triangle",closable:!0}));return}S(),document.documentElement.scrollTo({top:0,behavior:"smooth"}),p.value=!0,setTimeout(()=>{p.value=!1},3e3)},m=>{p.value=!1,console.log("message-send-error",m),document.documentElement.scrollTo({top:0,behavior:"smooth"})});return(m,d)=>{const c=z,y=$,B=j,A=C;return F(),D("div",O,[a(A,{class:"p-6"},{default:i(()=>[n("form",{action:"",method:"POST",onSubmit:d[0]||(d[0]=L((...s)=>e(E)&&e(E)(...s),["prevent"])),novalidate:""},[n("div",P,[n("div",G,[a(e(h),{name:"firstName"},{default:i(({field:s,errorMessage:o,handleChange:l,handleBlur:t})=>[a(c,{label:"First Name",placeholder:"ex: John","model-value":s.value,error:o,disabled:e(r),type:"text","onUpdate:modelValue":l,onBlur:t},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),n("div",q,[a(e(h),{name:"lastName"},{default:i(({field:s,errorMessage:o,handleChange:l,handleBlur:t})=>[a(c,{label:"Last Name",placeholder:"ex: Doe","model-value":s.value,error:o,disabled:e(r),type:"text","onUpdate:modelValue":l,onBlur:t},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),n("div",H,[a(e(h),{name:"email"},{default:i(({field:s,errorMessage:o,handleChange:l,handleBlur:t})=>[a(c,{type:"email",label:"Email Address",placeholder:"ex: johndoe@gmail.com","model-value":s.value,error:o,disabled:e(r),"onUpdate:modelValue":l,onBlur:t},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),n("div",J,[a(e(h),{name:"message"},{default:i(({field:s,errorMessage:o,handleChange:l,handleBlur:t})=>[a(y,{label:"Message",placeholder:"write your message...","model-value":s.value,error:o,disabled:e(r),"onUpdate:modelValue":l,onBlur:t},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),n("div",X,[a(B,{type:"submit",class:"w-full",color:"primary",disabled:e(r),loading:e(r)},{default:i(()=>[Q("Send Message")]),_:1},8,["disabled","loading"])])])],32)]),_:1})])}}});export{se as default};
