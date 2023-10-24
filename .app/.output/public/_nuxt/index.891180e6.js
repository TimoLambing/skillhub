import{d as te,bb as ne,c as T,r as $,L as re,bh as ie,o as f,a as v,e,w as r,b as i,f as h,h as o,V as j,M as E,t as L,C as de,g as ue,_ as ce,q as me,k as pe,l as fe,n as _e,s as be}from"./entry.a9943f59.js";import{_ as ve}from"./BaseMessage.vue.fc5364d5.js";import{_ as he}from"./BaseFullscreenDropfile.vue.63a20760.js";import{_ as ge}from"./BaseButtonIcon.vue.8de8044d.js";import{_ as ye}from"./BaseInputFileHeadless.vue.e4dddea9.js";import{_ as Be}from"./TairoFormGroup.vue.f3946161.js";import{_ as Ue}from"./BaseTextarea.vue.02084aa4.js";import{_ as Ve}from"./BaseListbox.vue.7472a821.js";import{_ as Ie}from"./TairoFormSave.vue.31d0cfab.js";import{u as we}from"./fetch.45bb61c5.js";import{u as xe}from"./toaster.2c541037.js";import{z as s,u as Te,a as Ee,F as m,t as Re}from"./vee-validate.esm.ddaabc18.js";import"./file-preview.9cf8f44a.js";import"./BaseIconBox.vue.b471f921.js";import"./BaseAvatar.vue.aa11e2f4.js";import"./use-tracked-pointer.bfe38733.js";import"./use-resolve-button-type.e1ace5a8.js";import"./use-controllable.89f6cb79.js";import"./use-text-value.b297714a.js";const ke={class:"flex items-center justify-between p-4"},Ne={class:"flex items-center gap-2"},Oe={class:"p-4"},Ae={class:"mx-auto max-w-lg space-y-12 py-8"},Fe={class:"relative flex flex-col items-center justify-center gap-4"},Ce={class:"relative h-24 w-24"},Se=["src"],De=["src"],$e={key:2,class:"absolute bottom-0 end-0 z-20"},je={key:3,class:"absolute bottom-0 end-0 z-20"},Le={class:"relative","data-nui-tooltip":"Upload image"},Pe={key:0,class:"text-danger-600 inline-block font-sans text-[.8rem]"},ze={class:"grid grid-cols-12 gap-4"},Qe={class:"col-span-12 sm:col-span-6"},Me={class:"col-span-12 sm:col-span-6"},Ge={class:"col-span-12"},Je={class:"col-span-12"},Ye={class:"col-span-12"},Ze={class:"grid grid-cols-12 gap-4"},He={class:"col-span-12 sm:col-span-6"},We={class:"col-span-12 sm:col-span-6"},qe={class:"col-span-12 sm:col-span-6"},Xe={class:"col-span-12 sm:col-span-6"},Ke={class:"grid grid-cols-12 gap-4"},eo={class:"col-span-12 sm:col-span-6"},oo={class:"col-span-12 sm:col-span-6"},lo={class:"col-span-12 sm:col-span-6"},ao={class:"col-span-12 sm:col-span-6"},so={class:"col-span-12 sm:col-span-6"},to={class:"col-span-12 sm:col-span-6"},no=1e6,Oo=te({__name:"index",async setup(ro){let y,R;const _={FIRST_REQUIRED:"Your first name can't be empty",LASTNAME_REQUIRED:"Your last name can't be empty",OPTION_REQUIRED:"Please select an option",AVATAR_TOO_BIG:"Avatar size must be less than 1MB"},P=s.object({avatar:s.custom(c=>c instanceof File).nullable(),profile:s.object({firstName:s.string().min(1,_.FIRST_REQUIRED),lastName:s.string().min(1,_.LASTNAME_REQUIRED),role:s.string().optional(),location:s.string(),bio:s.string()}),info:s.object({experience:s.union([s.literal("0-2 years"),s.literal("2-5 years"),s.literal("5-10 years"),s.literal("10+ years")]).nullable(),firstJob:s.object({label:s.string(),value:s.boolean()}).nullable(),flexible:s.object({label:s.string(),value:s.boolean()}).nullable(),remote:s.object({label:s.string(),value:s.boolean()}).nullable()}),social:s.object({facebook:s.string(),twitter:s.string(),dribbble:s.string(),instagram:s.string(),github:s.string(),gitlab:s.string()})}).superRefine((c,d)=>{c.info.experience||d.addIssue({code:s.ZodIssueCode.custom,message:_.OPTION_REQUIRED,path:["info.experience"]}),c.info.firstJob||d.addIssue({code:s.ZodIssueCode.custom,message:_.OPTION_REQUIRED,path:["info.firstJob"]}),c.info.flexible||d.addIssue({code:s.ZodIssueCode.custom,message:_.OPTION_REQUIRED,path:["info.flexible"]}),c.info.remote||d.addIssue({code:s.ZodIssueCode.custom,message:_.OPTION_REQUIRED,path:["info.remote"]}),c.avatar&&c.avatar.size>no&&d.addIssue({code:s.ZodIssueCode.custom,message:_.AVATAR_TOO_BIG,path:["avatar"]})}),{data:B,pending:io,error:uo,refresh:z}=([y,R]=ne(()=>we("/api/profile","$6OtAHOQZfD")),y=await y,R(),y),Q=Re(P),M=T(()=>({avatar:null,profile:{firstName:B.value?.personalInfo?.firstName||"",lastName:B.value?.personalInfo?.lastName||"",role:B.value?.personalInfo?.role||"",location:"",bio:""},info:{experience:null,firstJob:null,flexible:null,remote:null},social:{facebook:"",twitter:"",dribbble:"",instagram:"",github:"",gitlab:""}})),G=["0-2 years","2-5 years","5-10 years","10+ years"],w=[{label:"Yes",value:!0},{label:"No",value:!1}],J=T(()=>B.value?.personalInfo?.picture),{handleSubmit:Y,isSubmitting:u,setFieldError:Z,meta:H,values:co,errors:W,resetForm:k,setFieldValue:q,setErrors:X}=Te({validationSchema:Q,initialValues:M}),b=$(!1),N=T(()=>Object.keys(W.value).length),g=$(null),O=Ee("avatar");re(g,c=>{const d=c?.item(0)||null;q("avatar",d)}),ie(()=>{if(H.value.dirty)return confirm("You have unsaved changes. Are you sure you want to leave?")});const U=xe(),A=Y(async c=>{b.value=!1,console.log("profile-edit-success",c);try{await new Promise((d,x)=>{c.profile.firstName==="Maya"&&setTimeout(()=>x(new Error("Fake backend validation error")),2e3),setTimeout(d,4e3)}),U.clearAll(),U.show({title:"Success",message:"Your profile has been updated!",color:"success",icon:"ph:check",closable:!0})}catch(d){d.message==="Fake backend validation error"&&(Z("profile.firstName","This first name is not allowed"),document.documentElement.scrollTo({top:0,behavior:"smooth"}),U.clearAll(),U.show({title:"Oops!",message:"Please review the errors in the form",color:"danger",icon:"lucide:alert-triangle",closable:!0}));return}await z(),k(),document.documentElement.scrollTo({top:0,behavior:"smooth"}),b.value=!0,setTimeout(()=>{b.value=!1},3e3)},c=>{b.value=!1,console.log("profile-edit-error",c),document.documentElement.scrollTo({top:0,behavior:"smooth"})});return(c,d)=>{const x=ce,K=me,F=pe,C=ve,ee=he,S=fe,D=ge,oe=ye,V=Be,p=_e,le=Ue,I=Ve,ae=be,se=Ie;return f(),v("form",{method:"POST",action:"",class:"w-full pb-16",onSubmit:d[4]||(d[4]=ue((...l)=>o(A)&&o(A)(...l),["prevent"]))},[e(ae,null,{default:r(()=>[i("div",ke,[i("div",null,[e(x,{tag:"h2",size:"sm",weight:"medium",lead:"normal",class:"uppercase tracking-wider"},{default:r(()=>[h(" General info ")]),_:1}),e(K,{size:"xs",class:"text-muted-400"},{default:r(()=>[h(" Edit your account's general information ")]),_:1})]),i("div",Ne,[e(F,{class:"w-24",to:"/layouts/profile"},{default:r(()=>[h("Cancel")]),_:1}),e(F,{type:"submit",color:"primary",class:"w-24",disabled:o(u),loading:o(u)},{default:r(()=>[h("Save")]),_:1},8,["disabled","loading"])])]),i("div",Oe,[i("div",Ae,[o(b)?(f(),j(C,{key:0,onClose:d[0]||(d[0]=l=>b.value=!1)},{default:r(()=>[h(" Your profile has been updated! ")]),_:1})):E("",!0),o(N)?(f(),j(C,{key:1,type:"danger",onClose:d[1]||(d[1]=()=>o(X)({}))},{default:r(()=>[h(" This form has "+L(o(N))+" errors, please check them before submitting ",1)]),_:1})):E("",!0),e(V,{label:"Profile picture",sublabel:"This is how others will recognize you"},{default:r(()=>[i("div",Fe,[e(ee,{icon:"ph:image-duotone","filter-file-dropped":l=>l.type.startsWith("image"),onDrop:d[2]||(d[2]=l=>{g.value=l})},null,8,["filter-file-dropped"]),e(oe,{accept:"image/*",modelValue:o(g),"onUpdate:modelValue":d[3]||(d[3]=l=>de(g)?g.value=l:null)},{default:r(({open:l,remove:t,preview:n,files:a})=>[i("div",Ce,[a?.length&&a.item(0)?(f(),v("img",{key:0,src:n(a.item(0)).value,alt:"Upload preview",class:"bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"},null,8,Se)):(f(),v("img",{key:1,src:o(J),alt:"Upload preview",class:"bg-muted-200 dark:bg-muted-700/60 h-24 w-24 rounded-full object-cover object-center"},null,8,De)),a?.length&&a.item(0)?(f(),v("div",$e,[e(D,{size:"sm",shape:"full",onClick:mo=>t(a.item(0)),"data-nui-tooltip":"Remove image"},{default:r(()=>[e(S,{name:"lucide:x",class:"h-4 w-4"})]),_:2},1032,["onClick"])])):(f(),v("div",je,[i("div",Le,[e(D,{size:"sm",shape:"full",onClick:l},{default:r(()=>[e(S,{name:"lucide:plus",class:"h-4 w-4"})]),_:2},1032,["onClick"])])]))])]),_:1},8,["modelValue"]),o(O)?(f(),v("div",Pe,L(o(O)),1)):E("",!0)])]),_:1}),e(V,{label:"Profile Info",sublabel:"Others diserve to know you more"},{default:r(()=>[i("div",ze,[i("div",Qe,[e(o(m),{name:"profile.firstName"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"ph:user-duotone",placeholder:"First name","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",Me,[e(o(m),{name:"profile.lastName"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"ph:user-duotone",placeholder:"Last name","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",Ge,[e(o(m),{name:"profile.role"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"ph:suitcase-duotone",placeholder:"Job title","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",Je,[e(o(m),{name:"profile.location"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"ph:map-pin-duotone",placeholder:"Location","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",Ye,[e(o(m),{name:"profile.bio"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(le,{"model-value":l.value,error:t,disabled:o(u),rows:"4",placeholder:"About you / Short bio...","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])])]),_:1}),e(V,{label:"Professional Info",sublabel:"This can help you to win some opportunities"},{default:r(()=>[i("div",Ze,[i("div",He,[e(o(m),{name:"info.experience"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(I,{"model-value":l.value,error:t,disabled:o(u),items:G,placeholder:"Experience",shape:"rounded","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",We,[e(o(m),{name:"info.firstJob"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(I,{"model-value":l.value,error:t,disabled:o(u),items:w,properties:{label:"label",value:"value"},placeholder:"Is this your first job?",shape:"rounded","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",qe,[e(o(m),{name:"info.flexible"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(I,{"model-value":l.value,error:t,disabled:o(u),items:w,properties:{label:"label",value:"value"},placeholder:"Are you flexible?",shape:"rounded","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",Xe,[e(o(m),{name:"info.remote"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(I,{"model-value":l.value,error:t,disabled:o(u),items:w,properties:{label:"label",value:"value"},placeholder:"Do you work remotely?",shape:"rounded","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])])]),_:1}),e(V,{label:"Social Profiles",sublabel:"This can help others finding you on social media"},{default:r(()=>[i("div",Ke,[i("div",eo,[e(o(m),{name:"social.facebook"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"fa6-brands:facebook-f",placeholder:"Facebook URL","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",oo,[e(o(m),{name:"social.twitter"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"fa6-brands:twitter",placeholder:"Twitter URL","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",lo,[e(o(m),{name:"social.dribbble"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"fa6-brands:dribbble",placeholder:"Dribbble URL","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",ao,[e(o(m),{name:"social.instagram"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"fa6-brands:instagram",placeholder:"Instagram URL","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",so,[e(o(m),{name:"social.github"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"fa6-brands:github",placeholder:"Github URL","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),i("div",to,[e(o(m),{name:"social.gitlab"},{default:r(({field:l,errorMessage:t,handleChange:n,handleBlur:a})=>[e(p,{"model-value":l.value,error:t,disabled:o(u),type:"text",icon:"fa6-brands:gitlab",placeholder:"Gitlab URL","onUpdate:modelValue":n,onBlur:a},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])])]),_:1})])])]),_:1}),e(se,{disabled:o(u),loading:o(u),onReset:o(k)},null,8,["disabled","loading","onReset"])],32)}}});export{Oo as default};
