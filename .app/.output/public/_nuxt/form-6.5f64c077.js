import{d as ae,z as n,c as z,u as le,x as f,by as se,b as re,o as h,e as g,g as o,w as d,f as e,h as T,i as k,j as a,H as j,a1 as R,a3 as D,V as de,K as ne,L as ie,_ as ce,v as ue,n as me,q as pe,I as _e,bz as ve,y as be,F as c,s as P,J as fe,t as he}from"./entry.5f1d6f14.js";import{_ as ge}from"./BaseButtonAction.vue.9189a5c4.js";import{_ as xe}from"./BaseRadio.vue.4d88d2d4.js";import{_ as ye}from"./BaseListbox.vue.94afb4bc.js";import{_ as ke}from"./BaseProgress.vue.87cf792f.js";import{_ as we}from"./BaseInputFileHeadless.vue.1baacb81.js";import{_ as Be}from"./BaseRadioHeadless.vue.6de9a670.js";import{_ as Ue}from"./BaseCheckbox.vue.c11d1a26.js";import{_ as Ve}from"./TairoFormSave.vue.549ae911.js";import{f as Ee}from"./format-files.fdbceb7e.js";import{_ as Te}from"./placeholder-file.65172104.js";import{_ as q}from"./index.32f9ad18.js";import"./BaseIconBox.vue.684e9cd5.js";import"./use-tracked-pointer.e467de5d.js";import"./use-resolve-button-type.86a646bb.js";import"./use-controllable.5b1639f5.js";import"./use-text-value.66705c46.js";import"./file-preview.5cf4e8b4.js";import"./IconCheck.11467c81.js";const Re={class:"border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5"},De={class:"ms-auto flex items-center gap-2"},Se=e("span",null,"Cancel",-1),Ce=e("span",null,"Save",-1),je={class:"px-10 py-5"},Ae={class:"grid grid-cols-12 gap-4"},Ie={class:"col-span-12"},Me={class:"col-span-12 sm:col-span-6"},Fe={class:"flex w-full flex-col gap-4 sm:flex-row"},$e={class:"relative grow"},ze={class:"relative grow"},Pe={class:"col-span-12 sm:col-span-6"},qe={class:"flex w-full flex-col gap-4 sm:flex-row"},Ne={class:"relative grow"},Qe={class:"relative grow"},Le={class:"col-span-12"},Oe={class:"my-4"},Ye=e("label",{class:"nui-label pb-4 text-[0.825rem]"},"Meeting frequency",-1),He={class:"flex items-center gap-6"},Ke={class:"bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"},We={class:"flex items-center justify-between"},Ge=e("span",null,"Add people",-1),Je={class:"mt-10 grid grid-cols-12 gap-4"},Xe={class:"col-span-12 grid grid-cols-12"},Ze=e("div",{class:"col-span-12 flex flex-col justify-center sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Participants")],-1),eo={class:"col-span-12 sm:col-span-9"},oo={class:"flex items-center gap-3"},to=e("div",{class:"ms-auto"},[e("button",{type:"button",class:"text-primary-500 font-sans text-sm underline underline-offset-4"}," Manage ")],-1),ao={class:"col-span-12 grid grid-cols-12"},lo=e("div",{class:"col-span-12 flex flex-col justify-center sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Meeting location")],-1),so={class:"col-span-12 sm:col-span-9"},ro={class:"col-span-12 grid grid-cols-12"},no=e("div",{class:"col-span-12 flex flex-col justify-center sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Meeting URL")],-1),io={class:"col-span-12 sm:col-span-9"},co={class:"col-span-12 grid grid-cols-12"},uo=e("div",{class:"col-span-12 flex flex-col justify-center sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Calendar")],-1),mo={class:"col-span-12 sm:col-span-9"},po={class:"col-span-12 grid grid-cols-12"},_o=e("div",{class:"col-span-12 flex flex-col justify-start pt-2 sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Description")],-1),vo={class:"col-span-12 sm:col-span-9"},bo={class:"col-span-12 grid grid-cols-12"},fo=e("div",{class:"col-span-12 flex flex-col justify-start pt-4 sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Attachments")],-1),ho={class:"col-span-12 sm:col-span-9"},go={class:"mb-4 flex items-center gap-2"},xo=["onClick"],yo=e("span",{class:"sr-only"},"Select files",-1),ko={type:"button",class:"nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",tooltip:"Start Upload"},wo=e("span",{class:"sr-only"},"Start Upload",-1),Bo=["onDrop"],Uo=["onClick","onKeydown"],Vo={class:"p-5 text-center"},Eo=e("h4",{class:"text-muted-400 font-sans text-sm"}," Drop files to upload ",-1),To=e("div",null,[e("span",{class:"text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"}," Or ")],-1),Ro=e("label",{for:"file",class:"text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"}," Select files ",-1),Do={key:1,class:"mt-6 space-y-2"},So={class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"},Co={class:"flex items-center gap-2"},jo={class:"shrink-0"},Ao=["src"],Io={key:1,class:"h-14 w-14 rounded-xl object-cover object-center",src:Te,alt:"Image preview"},Mo={class:"font-sans"},Fo={class:"text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"},$o={class:"text-muted-400 block text-xs"},zo={class:"flex gap-2"},Po={class:"border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",disabled:"",type:"button",tooltip:"Cancel"},qo=e("span",{class:"sr-only"},"Cancel",-1),No={class:"border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",type:"button",tooltip:"Upload"},Qo=e("span",{class:"sr-only"},"Upload",-1),Lo=["onClick"],Oo=e("span",{class:"sr-only"},"Remove",-1),Yo={class:"bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"},Ho={class:"grid grid-cols-12 gap-8 pb-6"},Ko={class:"col-span-12 grid grid-cols-12"},Wo=e("div",{class:"col-span-12 flex flex-col justify-center sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Color code")],-1),Go={class:"col-span-12 sm:col-span-9"},Jo={class:"flex items-center gap-3"},Xo=e("div",{class:"border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"},null,-1),Zo=e("div",{class:"border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"},null,-1),et=e("div",{class:"border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"},null,-1),ot=e("div",{class:"border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"},null,-1),tt=e("div",{class:"h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500"},null,-1),at=e("div",{class:"h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500"},null,-1),lt={class:"col-span-12 grid grid-cols-12"},st=e("div",{class:"col-span-12 flex flex-col justify-start pt-1 sm:col-span-3"},[e("label",{class:"nui-label text-[0.825rem]"},"Notifications")],-1),rt={class:"col-span-12 sm:col-span-9"},dt={class:"flex flex-col gap-6"},Ct=ae({__name:"form-6",setup(nt){const A={FIRSTNAME_REQUIRED:"First name can't be empty",LASTNAME_REQUIRED:"Last name can't be empty",EMAIL_REQUIRED:"Email address can't be empty",OPTION_REQUIRED:"Please select an option",ADDRESS_REQUIRED:"Please enter an address",CITY_REQUIRED:"Please enter a city",STATE_REQUIRED:"Please enter a state",ZIPCODE_REQUIRED:"Please enter a zipcode",STATUS_REQUIRED:"Pick a status",AVATAR_TOO_BIG:"Avatar size must be less than 1MB"},N=n.object({meeting:n.object({title:n.string().min(5,A.FIRSTNAME_REQUIRED),startDate:n.date().nullable(),endDate:n.date().nullable(),startTime:n.date().nullable(),endTime:n.date().nullable(),frequency:n.string(),participants:n.array(n.object({id:n.string(),name:n.string(),avatar:n.string().optional()})),location:n.string(),url:n.string().optional(),calendar:n.string(),description:n.string().min(40,A.FIRSTNAME_REQUIRED),colorCode:n.string(),notifications:n.object({general:n.boolean(),team:n.boolean(),reminders:n.boolean(),modifications:n.boolean()})})}),Q=he(N),L=z(()=>({meeting:{title:"",startDate:null,endDate:null,startTime:null,endTime:null,frequency:"day",participants:[],location:"",url:"",calendar:"",description:"",colorCode:"",notifications:{general:!1,team:!1,reminders:!1,modifications:!1}}})),{handleSubmit:O,isSubmitting:i,setFieldError:Y,meta:H,values:it,errors:K,resetForm:W,setFieldValue:ct,setErrors:ut}=le({validationSchema:Q,initialValues:L}),w=f(!1);z(()=>Object.keys(K.value).length),se(()=>{if(H.value.dirty)return confirm("You have unsaved changes. Are you sure you want to leave?")});const B=re(),I=O(async v=>{w.value=!1,console.log("meeting-create-success",v);try{await new Promise((u,U)=>{v.meeting.title==="Demo meeting"&&setTimeout(()=>U(new Error("Fake backend validation error")),2e3),setTimeout(u,4e3)}),B.clearAll(),B.show({title:"Success",message:"Record has been created!",color:"success",icon:"ph:check",closable:!0})}catch(u){u.message==="Fake backend validation error"&&(Y("meeting.title","This name is not allowed"),document.documentElement.scrollTo({top:0,behavior:"smooth"}),B.clearAll(),B.show({title:"Oops!",message:"Please review the errors in the form",color:"danger",icon:"lucide:alert-triangle",closable:!0}));return}W(),document.documentElement.scrollTo({top:0,behavior:"smooth"}),w.value=!0,setTimeout(()=>{w.value=!1},3e3)},v=>{w.value=!1,console.log("meeting-create-error",v),document.documentElement.scrollTo({top:0,behavior:"smooth"})}),G=[{id:1,name:"My Calendar",text:"Your personal calendar",icon:"ph:user-duotone"},{id:2,name:"Team Calendar",text:"Your team calendar",icon:"ph:users-duotone"},{id:3,name:"Company calendar",text:"Your company calendar",icon:"ph:buildings-duotone"}],x=f({start:new Date,end:new Date}),M=f({input:"YYYY-MM-DD"});f("day"),f({id:1,name:"My Calendar",text:"Your personal calendar",icon:"ph:user-duotone"});const S=f(null);return f("color_code_1"),(v,u)=>{const U=ce,F=ue,_=me,C=ge,b=pe,$=xe,V=_e,J=ye,X=ve,Z=ke,ee=we,y=Be,E=Ue,oe=be,te=Ve;return h(),g("form",{action:"",method:"POST",onSubmit:u[6]||(u[6]=k((...t)=>a(I)&&a(I)(...t),["prevent"])),class:"mx-auto w-full max-w-3xl"},[o(oe,null,{default:d(()=>[e("div",Re,[e("div",null,[o(U,{as:"h3",size:"md",weight:"medium"},{default:d(()=>[T(" New Meeting ")]),_:1}),o(F,{size:"xs",class:"text-muted-400"},{default:d(()=>[T("Schedule a new meeting")]),_:1})]),e("div",De,[o(C,{onClick:u[0]||(u[0]=k(t=>v.$router.back(),["prevent"]))},{default:d(()=>[o(_,{name:"lucide:arrow-left",class:"h-3 w-3"}),Se]),_:1}),o(C,{type:"submit",color:"primary"},{default:d(()=>[o(_,{name:"lucide:check",class:"h-3 w-3"}),Ce]),_:1})])]),e("div",je,[e("div",Ae,[e("div",Ie,[o(a(c),{name:"meeting.title"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(b,{label:"What is this meeting about?",placeholder:"Ex: Project review with the design team",icon:"lucide:slack","model-value":t.value,error:r,disabled:a(i),type:"text","onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",Me,[o(a(q),{modelValue:a(x),"onUpdate:modelValue":u[1]||(u[1]=t=>j(x)?x.value=t:null),modelModifiers:{range:!0},masks:a(M),"min-date":new Date,mode:"date","hide-time-header":"","trim-weeks":""},{default:d(({inputValue:t,inputEvents:r})=>[e("div",Fe,[e("div",$e,[o(a(c),{name:"meeting.startDate"},{default:d(({field:l,errorMessage:s,handleChange:p,handleBlur:m})=>[o(b,R({label:"Start date",icon:"ph:calendar-blank-duotone",value:t.start},D(r.start),{"model-value":l.value,error:s,disabled:a(i),type:"text","onUpdate:modelValue":p,onBlur:m}),null,16,["value","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:2},1024)]),e("div",ze,[o(a(c),{name:"meeting.endDate"},{default:d(({field:l,errorMessage:s,handleChange:p,handleBlur:m})=>[o(b,R({label:"End date",icon:"ph:calendar-blank-duotone",value:t.end},D(r.end),{"model-value":l.value,error:s,disabled:a(i),type:"text","onUpdate:modelValue":p,onBlur:m}),null,16,["value","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:2},1024)])])]),_:1},8,["modelValue","masks","min-date"])]),e("div",Pe,[o(a(q),{modelValue:a(x),"onUpdate:modelValue":u[2]||(u[2]=t=>j(x)?x.value=t:null),modelModifiers:{range:!0},masks:a(M),"min-date":new Date,mode:"time","hide-time-header":"","trim-weeks":""},{default:d(({inputValue:t,inputEvents:r})=>[e("div",qe,[e("div",Ne,[o(a(c),{name:"meeting.startTime"},{default:d(({field:l,errorMessage:s,handleChange:p,handleBlur:m})=>[o(b,R({label:"Start time",icon:"ph:calendar-blank-duotone",value:t.start},D(r.start),{"model-value":l.value,error:s,disabled:a(i),type:"text","onUpdate:modelValue":p,onBlur:m}),null,16,["value","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:2},1024)]),e("div",Qe,[o(a(c),{name:"meeting.endTime"},{default:d(({field:l,errorMessage:s,handleChange:p,handleBlur:m})=>[o(b,R({label:"End time",icon:"ph:calendar-blank-duotone",value:t.end},D(r.end),{"model-value":l.value,error:s,disabled:a(i),type:"text","onUpdate:modelValue":p,onBlur:m}),null,16,["value","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:2},1024)])])]),_:1},8,["modelValue","masks","min-date"])]),e("div",Le,[e("div",Oe,[Ye,e("div",He,[o(a(c),{name:"meeting.frequency"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o($,{id:"frequency-1",name:"unique_frequency",label:"All day",value:"day",color:"primary",classes:{label:"relative top-0.5 text-xs"},"model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.frequency"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o($,{id:"frequency-2",name:"weekly_frequency",label:"Repeat every week",value:"week",color:"primary",classes:{label:"relative top-0.5 text-xs"},"model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])])])])]),e("div",Ke,[e("div",We,[e("div",null,[o(U,{as:"h3",size:"md",weight:"medium"},{default:d(()=>[T(" Meeting details ")]),_:1}),o(F,{size:"xs",class:"text-muted-400"},{default:d(()=>[T("Add some meeting details")]),_:1})]),e("div",null,[o(C,null,{default:d(()=>[o(_,{name:"lucide:plus",class:"h-3 w-3"}),Ge]),_:1})])]),e("div",Je,[e("div",Xe,[Ze,e("div",eo,[e("div",oo,[o(V,{src:"/img/avatars/24.svg","data-nui-tooltip":"Anna B."}),o(V,{src:"/img/avatars/10.svg","data-nui-tooltip":"Kendra W."}),o(V,{src:"/img/avatars/8.svg","data-nui-tooltip":"John H."}),o(V,{src:"/img/avatars/25.svg","data-nui-tooltip":"Melany L."}),to])])]),e("div",ao,[lo,e("div",so,[o(a(c),{name:"meeting.location"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(b,{type:"text",placeholder:"Ex: meeting room A",icon:"lucide:map-pin","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])]),e("div",ro,[no,e("div",io,[o(a(c),{name:"meeting.url"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(b,{type:"text",placeholder:"https://zoom.us/m/123456789",icon:"lucide:video","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])]),e("div",co,[uo,e("div",mo,[o(a(c),{name:"meeting.calendar"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(J,{items:G,properties:{value:"id",label:"name",sublabel:"text",icon:"icon"},"model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])]),e("div",po,[_o,e("div",vo,[o(a(c),{name:"meeting.description"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(X,{placeholder:"Write some additional details about the meeting...","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])]),e("div",bo,[fo,e("div",ho,[o(ee,{multiple:"",modelValue:a(S),"onUpdate:modelValue":u[5]||(u[5]=t=>j(S)?S.value=t:null)},{default:d(({open:t,remove:r,preview:l,drop:s,files:p})=>[e("div",go,[e("button",{type:"button",class:"nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",tooltip:"Select files",onClick:t},[o(_,{name:"lucide:plus",class:"absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"}),yo],8,xo),e("button",ko,[o(_,{name:"lucide:arrow-up",class:"h-4 w-4"}),wo])]),e("div",{class:"",onDragenter:u[3]||(u[3]=k(()=>{},["stop","prevent"])),onDragover:u[4]||(u[4]=k(()=>{},["stop","prevent"])),onDrop:s},[p?.length?(h(),g("ul",Do,[(h(!0),g(ne,null,ie(p,m=>(h(),g("li",{key:m.name},[e("div",So,[e("div",Co,[e("div",jo,[m.type.startsWith("image")?(h(),g("img",{key:0,class:"h-14 w-14 rounded-xl object-cover object-center",src:l(m).value,alt:"Image preview"},null,8,Ao)):(h(),g("img",Io))]),e("div",Mo,[e("span",Fo,P(m.name),1),e("span",$o,P(("formatFileSize"in v?v.formatFileSize:a(Ee))(m.size)),1)])]),e("div",{class:fe(["ms-auto w-32 px-4 transition-opacity duration-300","opacity-100"])},[o(Z,{value:0,size:"xs",color:"success"})]),e("div",zo,[e("button",Po,[o(_,{name:"lucide:slash",class:"h-4 w-4"}),qo]),e("button",No,[o(_,{name:"lucide:arrow-up",class:"h-4 w-4"}),Qo]),e("button",{class:"border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",type:"button",tooltip:"Remove",onClick:k(mt=>r(m),["prevent"])},[o(_,{name:"lucide:x",class:"h-4 w-4"}),Oo],8,Lo)])])]))),128))])):(h(),g("div",{key:0,class:"nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",tabindex:"0",role:"button",onClick:t,onKeydown:de(k(t,["prevent"]),["enter"])},[e("div",Vo,[o(_,{name:"mdi-light:cloud-upload",class:"text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"}),Eo,To,Ro])],40,Uo))],40,Bo)]),_:1},8,["modelValue"])])])])]),e("div",Yo,[e("div",Ho,[e("div",Ko,[Wo,e("div",Go,[e("div",Jo,[o(a(c),{name:"meeting.colorCode"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(y,{name:"color_code",value:"color_code_1","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},{default:d(()=>[Xo]),_:2},1032,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.colorCode"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(y,{name:"color_code",value:"color_code_2","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},{default:d(()=>[Zo]),_:2},1032,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.colorCode"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(y,{name:"color_code",value:"color_code_3","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},{default:d(()=>[et]),_:2},1032,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.colorCode"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(y,{name:"color_code",value:"color_code_4","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},{default:d(()=>[ot]),_:2},1032,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.colorCode"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(y,{name:"color_code",value:"color_code_5","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},{default:d(()=>[tt]),_:2},1032,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.colorCode"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(y,{name:"color_code",value:"color_code_6","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},{default:d(()=>[at]),_:2},1032,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])])]),e("div",lt,[st,e("div",rt,[e("div",dt,[o(a(c),{name:"meeting.notifications.general"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(E,{color:"primary",label:"General notifications","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.notifications.team"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(E,{color:"primary",label:"Team notifications","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.notifications.reminders"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(E,{color:"primary",label:"Auto reminders","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1}),o(a(c),{name:"meeting.notifications.modifications"},{default:d(({field:t,errorMessage:r,handleChange:l,handleBlur:s})=>[o(E,{color:"primary",label:"Modifications","model-value":t.value,error:r,disabled:a(i),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})])])])])])]),_:1}),o(te)],32)}}});export{Ct as default};