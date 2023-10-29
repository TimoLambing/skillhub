import{d as H,z as i,c as T,u as j,x as f,by as M,b as Y,o as q,e as G,g as o,w as r,f as e,h as b,j as t,H as J,a1 as B,a3 as U,i as W,n as X,_ as Z,v as K,q as ee,bz as oe,m as te,y as ae,F as u,t as le}from"./entry.cb41b48b.js";import{a as se}from"./BaseAutocomplete.vue.0278e0d6.js";import{_ as ne}from"./index.d1b3a854.js";/* empty css                  */import"./BaseIconBox.vue.18086c0e.js";import"./combobox.7d1cb905.js";import"./use-tracked-pointer.b02f8424.js";import"./use-resolve-button-type.bbf5902e.js";import"./use-tree-walker.9d4ed7fe.js";import"./use-controllable.2c1079f2.js";const re={class:"mx-auto max-w-md"},ie={class:"flex items-center gap-4"},de={class:"bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"},ce={class:"block text-xl font-semibold text-gray-700"},ue={class:"divide-y divide-gray-200"},me={class:"grid grid-cols-12 gap-4 py-8"},pe={class:"col-span-12"},ve={class:"col-span-12"},he={class:"col-span-12"},_e={class:"flex w-full flex-col gap-4 sm:flex-row"},fe={class:"relative grow"},be={class:"relative grow"},ge={class:"col-span-12"},Ee={class:"col-span-12"},xe={class:"col-span-12 sm:col-span-6"},we=e("datalist",{id:"eventColors"},[e("option",{value:"#84cc16"}),e("option",{value:"#22c55e"}),e("option",{value:"#0ea5e9"}),e("option",{value:"#6366f1"}),e("option",{value:"#8b5cf6"}),e("option",{value:"#d946ef"}),e("option",{value:"#f43f5e"}),e("option",{value:"#facc15"}),e("option",{value:"#fb923c"}),e("option",{value:"#9ca3af"})],-1),ye={class:"col-span-12 sm:col-span-6"},De=e("datalist",{id:"eventCategories"},[e("option",{value:"Chrome"}),e("option",{value:"Firefox"}),e("option",{value:"Opera"}),e("option",{value:"Safari"}),e("option",{value:"Microsoft Edge"})],-1),Te={class:"flex items-center gap-4 pt-4"},Qe=H({__name:"form-4",setup(Be){const v={TITLE_REQUIRED:"Event title is required",SHORTDESC_REQUIRED:"Short description can't be empty",LONGDESC_REQUIRED:"Long description can't be empty",OPTION_REQUIRED:"Please select an option"},V=i.object({event:i.object({title:i.string().min(5,v.TITLE_REQUIRED),shortDesc:i.string().min(10,v.SHORTDESC_REQUIRED),longDesc:i.string().min(40,v.LONGDESC_REQUIRED),startDateTime:i.date().nullable(),endDateTime:i.date().nullable(),participants:i.array(i.string()).optional(),color:i.string(),category:i.string()})}).superRefine((m,d)=>{m.event.participants||d.addIssue({code:i.ZodIssueCode.custom,message:v.OPTION_REQUIRED,path:["event.participants"]})}),R=le(V),S=T(()=>({event:{title:"",shortDesc:"",longDesc:"",startDateTime:null,endDateTime:null,participants:[],color:"",category:""}})),{handleSubmit:k,isSubmitting:c,setFieldError:C,meta:I,values:Ue,errors:O,resetForm:P,setFieldValue:Ve,setErrors:Re}=j({validationSchema:R,initialValues:S}),h=f(!1);T(()=>Object.keys(O.value).length),M(()=>{if(I.value.dirty)return confirm("You have unsaved changes. Are you sure you want to leave?")});const _=Y(),y=k(async m=>{h.value=!1,console.log("event-create-success",m);try{await new Promise((d,E)=>{m.event.title==="Demo event"&&setTimeout(()=>E(new Error("Fake backend validation error")),2e3),setTimeout(d,4e3)}),_.clearAll(),_.show({title:"Success",message:"Record has been created!",color:"success",icon:"ph:check",closable:!0})}catch(d){d.message==="Fake backend validation error"&&(C("event.title","This name is not allowed"),document.documentElement.scrollTo({top:0,behavior:"smooth"}),_.clearAll(),_.show({title:"Oops!",message:"Please review the errors in the form",color:"danger",icon:"lucide:alert-triangle",closable:!0}));return}P(),document.documentElement.scrollTo({top:0,behavior:"smooth"}),h.value=!0,setTimeout(()=>{h.value=!1},3e3)},m=>{h.value=!1,console.log("event-create-error",m),document.documentElement.scrollTo({top:0,behavior:"smooth"})}),g=f({start:new Date,end:new Date}),F=f({input:"YYYY-MM-DD"}),L=f(["John Brown","Anita Smith","Belen Rodriguez","Sammy Lee","Hermann Schmidt","Chloe Varley"]);return(m,d)=>{const E=X,N=Z,A=K,p=ee,Q=oe,$=se,D=te,z=ae;return q(),G("form",{action:"",method:"POST",onSubmit:d[1]||(d[1]=W((...a)=>t(y)&&t(y)(...a),["prevent"])),class:"relative py-3 sm:mx-auto sm:max-w-xl"},[o(z,{shape:"curved",class:"relative px-4 py-10 sm:p-10 md:mx-0"},{default:r(()=>[e("div",re,[e("div",ie,[e("div",de,[o(E,{name:"ph:calendar-blank-duotone",class:"h-5 w-5"})]),e("div",ce,[o(N,{as:"h3",size:"lg",weight:"medium"},{default:r(()=>[b(" Create an Event ")]),_:1}),o(A,{size:"sm",class:"text-muted-400"},{default:r(()=>[b("Create a new upcoming event.")]),_:1})])]),e("div",ue,[e("div",me,[e("div",pe,[o(t(u),{name:"event.title"},{default:r(({field:a,errorMessage:n,handleChange:l,handleBlur:s})=>[o(p,{label:"Event title",shape:"curved",icon:"ph:ticket-duotone",placeholder:"Ex: Next team building party",classes:{input:"!h-11 !ps-11",icon:"!h-11 !w-11"},"model-value":a.value,error:n,disabled:t(c),type:"text","onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",ve,[o(t(u),{name:"event.shortDesc"},{default:r(({field:a,errorMessage:n,handleChange:l,handleBlur:s})=>[o(p,{label:"Short description",shape:"curved",icon:"ph:circles-four-duotone",placeholder:"Ex: We will meet to have fun together",classes:{input:"!h-11 !ps-11",icon:"!h-11 !w-11"},"model-value":a.value,error:n,disabled:t(c),type:"text","onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",he,[o(t(ne),{modelValue:t(g),"onUpdate:modelValue":d[0]||(d[0]=a=>J(g)?g.value=a:null),modelModifiers:{range:!0},masks:t(F),"min-date":new Date,mode:"dateTime","hide-time-header":"","trim-weeks":""},{default:r(({inputValue:a,inputEvents:n})=>[e("div",_e,[e("div",fe,[o(t(u),{name:"event.startDateTime"},{default:r(({field:l,errorMessage:s,handleChange:x,handleBlur:w})=>[o(p,B({shape:"curved",label:"Start date",icon:"ph:calendar-blank-duotone",value:a.start},U(n.start),{classes:{input:"!h-11 !ps-11",icon:"!h-11 !w-11"},"model-value":l.value,error:s,disabled:t(c),type:"text","onUpdate:modelValue":x,onBlur:w}),null,16,["value","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:2},1024)]),e("div",be,[o(t(u),{name:"event.endDateTime"},{default:r(({field:l,errorMessage:s,handleChange:x,handleBlur:w})=>[o(p,B({shape:"curved",label:"End date",icon:"ph:calendar-blank-duotone",value:a.end},U(n.end),{classes:{input:"!h-11 !ps-11",icon:"!h-11 !w-11"},"model-value":l.value,error:s,disabled:t(c),type:"text","onUpdate:modelValue":x,onBlur:w}),null,16,["value","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:2},1024)])])]),_:1},8,["modelValue","masks","min-date"])]),e("div",ge,[o(t(u),{name:"event.longDesc"},{default:r(({field:a,errorMessage:n,handleChange:l,handleBlur:s})=>[o(Q,{label:"Long description",shape:"curved",placeholder:"Ex: Some additional details about the event...",rows:"5","model-value":a.value,error:n,disabled:t(c),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",Ee,[o(t(u),{name:"event.participants"},{default:r(({field:a,errorMessage:n,handleChange:l,handleBlur:s})=>[o($,{items:t(L),shape:"curved",icon:"ph:users-duotone",placeholder:"Add participants...",label:"Participants",multiple:"","model-value":a.value,error:n,disabled:t(c),"onUpdate:modelValue":l,onBlur:s},null,8,["items","model-value","error","disabled","onUpdate:modelValue","onBlur"])]),_:1})]),e("div",xe,[o(t(u),{name:"event.color"},{default:r(({field:a,errorMessage:n,handleChange:l,handleBlur:s})=>[o(p,{type:"color",list:"eventColors",label:"Event color",shape:"curved",icon:"ph:drop-half-duotone",placeholder:"Pick an event color...",classes:{input:"!h-11 !ps-11 appearance-none",icon:"!h-11 !w-11"},"model-value":a.value,error:n,disabled:t(c),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"]),we]),_:1})]),e("div",ye,[o(t(u),{name:"event.category"},{default:r(({field:a,errorMessage:n,handleChange:l,handleBlur:s})=>[o(p,{list:"eventCategories",label:"Event category",shape:"curved",icon:"ph:ticket-duotone",placeholder:"Pick a category...",classes:{input:"!h-11 !ps-11",icon:"!h-11 !w-11"},"model-value":a.value,error:n,disabled:t(c),"onUpdate:modelValue":l,onBlur:s},null,8,["model-value","error","disabled","onUpdate:modelValue","onBlur"]),De]),_:1})])]),e("div",Te,[o(D,{shape:"curved",class:"!h-12 w-full"},{default:r(()=>[b("Cancel")]),_:1}),o(D,{type:"submit",shape:"curved",color:"primary",class:"!h-12 w-full"},{default:r(()=>[b("Create")]),_:1})])])])]),_:1})],32)}}});export{Qe as default};
