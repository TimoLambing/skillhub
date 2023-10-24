import{_ as w}from"./DemoWizardStepTitle.vue.dcebd126.js";import{d as j,b1 as C,r as S,o as t,a as s,e as o,b as e,h as n,V as D,w as u,g as l,O as U,F as z,E as B,bd as F,l as $,t as h,D as V}from"./entry.a9943f59.js";import{_ as I}from"./BaseProgress.vue.6d5cb9e8.js";import{_ as P}from"./BaseInputFileHeadless.vue.e4dddea9.js";import{u as K}from"./multi-step-form.b006e4a2.js";import{f as R}from"./format-files.fdbceb7e.js";import{_ as A}from"./placeholder-file.1519c587.js";import"./file-preview.9cf8f44a.js";const E=""+globalThis.__publicAssetsURL("img/illustrations/wizard/upload.svg"),H={class:"px-4"},L=e("img",{src:E,class:"mx-auto max-w-[210px] rounded-full",alt:"Upload files"},null,-1),M={class:"mt-2 text-center"},N={key:1,class:"relative mx-auto max-w-3xl"},O={class:"mb-4 flex items-center gap-2"},T=["onClick"],W=e("span",{class:"sr-only"},"Select files",-1),q={type:"button",class:"nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",tooltip:"Start Upload"},G=e("span",{class:"sr-only"},"Start Upload",-1),J=["onDrop"],Q=["onClick","onKeydown"],X={class:"p-5 text-center"},Y=e("h4",{class:"text-muted-400 font-sans text-base"}," Drop files to upload ",-1),Z=e("div",null,[e("span",{class:"text-muted-400 font-sans text-xs font-semibold uppercase"}," Or ")],-1),ee=e("label",{for:"file",class:"text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-base underline underline-offset-4 transition-colors duration-300"}," Select files ",-1),te={key:1,class:"mt-6 space-y-2"},oe={class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"},re={class:"flex items-center gap-2"},se={class:"shrink-0"},ae=["src"],de={key:1,class:"h-14 w-14 rounded-xl object-cover object-center",src:A,alt:"Image preview"},ie={class:"font-sans"},ne={class:"text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"},le={class:"text-muted-400 block text-xs"},ce={class:"flex gap-2"},ue={class:"border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",disabled:"",type:"button",tooltip:"Cancel"},me=e("span",{class:"sr-only"},"Cancel",-1),pe={class:"border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",type:"button",tooltip:"Upload"},_e=e("span",{class:"sr-only"},"Upload",-1),he=["onClick"],be=e("span",{class:"sr-only"},"Remove",-1),De=j({__name:"step-4",setup(fe){const{data:c}=K();C({title:"Project files"});const m=S(!!c.value.files?.length);return(p,r)=>{const b=w,f=F,a=$,x=I,v=P;return t(),s("div",null,[o(b),e("div",H,[n(m)?(t(),s("div",N,[o(v,{multiple:"",modelValue:n(c).files,"onUpdate:modelValue":r[3]||(r[3]=d=>n(c).files=d)},{default:u(({open:d,remove:y,preview:k,drop:g,files:_})=>[e("div",O,[e("button",{type:"button",class:"nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",tooltip:"Select files",onClick:d},[o(a,{name:"lucide:plus",class:"h-4 w-4"}),W],8,T),e("button",q,[o(a,{name:"lucide:arrow-up",class:"h-4 w-4"}),G])]),e("div",{class:"",onDragenter:r[1]||(r[1]=l(()=>{},["stop","prevent"])),onDragover:r[2]||(r[2]=l(()=>{},["stop","prevent"])),onDrop:g},[_?.length?(t(),s("ul",te,[(t(!0),s(z,null,B(_,i=>(t(),s("li",{key:i.name},[e("div",oe,[e("div",re,[e("div",se,[i.type.startsWith("image")?(t(),s("img",{key:0,class:"h-14 w-14 rounded-xl object-cover object-center",src:k(i).value,alt:"Image preview"},null,8,ae)):(t(),s("img",de))]),e("div",ie,[e("span",ne,h(i.name),1),e("span",le,h(("formatFileSize"in p?p.formatFileSize:n(R))(i.size)),1)])]),e("div",{class:V(["ms-auto w-32 px-4 transition-opacity duration-300","opacity-100"])},[o(x,{value:0,size:"xs",color:"success"})]),e("div",ce,[e("button",ue,[o(a,{name:"lucide:slash",class:"h-4 w-4"}),me]),e("button",pe,[o(a,{name:"lucide:arrow-up",class:"h-4 w-4"}),_e]),e("button",{class:"border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",type:"button",tooltip:"Remove",onClick:l(xe=>y(i),["prevent"])},[o(a,{name:"lucide:x",class:"h-4 w-4"}),be],8,he)])])]))),128))])):(t(),s("div",{key:0,class:"nui-focus border-muted-300 dark:border-muted-800 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-700 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",tabindex:"0",role:"button",onClick:d,onKeydown:U(l(d,["prevent"]),["enter"])},[e("div",X,[o(a,{name:"mdi-light:cloud-upload",class:"text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-12 w-12 transition-colors duration-300"}),Y,Z,ee])],40,Q))],40,J)]),_:1},8,["modelValue"])])):(t(),D(f,{key:0,title:"Upload project files",subtitle:"Add files to your project if you have them handy. Don't worry, you can also manage files later."},{image:u(()=>[L]),default:u(()=>[e("div",M,[e("button",{type:"button",class:"text-primary-500 font-sans underline underline-offset-4",onClick:r[0]||(r[0]=d=>m.value=!0)}," Upload files ")])]),_:1}))])])}}});export{De as default};
