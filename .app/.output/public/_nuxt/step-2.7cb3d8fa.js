import{_ as g}from"./DemoWizardStepTitle.vue.dcebd126.js";import{_ as k}from"./BaseFullscreenDropfile.vue.63a20760.js";import{d as j,b1 as V,r as B,L as y,o as i,a as c,e as o,b as s,w as r,h as a,C,l as U,n as $}from"./entry.a9943f59.js";import{_ as z}from"./BaseButtonIcon.vue.8de8044d.js";import{_ as F}from"./BaseInputFileHeadless.vue.e4dddea9.js";import{_ as D}from"./BaseTextarea.vue.02084aa4.js";import{u as I}from"./multi-step-form.b006e4a2.js";import{u as P}from"./file-preview.9cf8f44a.js";import{_ as N}from"./placeholder-file.1519c587.js";const H={class:"mx-auto flex w-full max-w-5xl flex-col px-4"},M={class:"flex items-center justify-center"},R={class:"relative h-20 w-20"},S=["src"],T={key:1,src:N,alt:"Upload preview",class:"bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"},W={key:2,class:"absolute bottom-0 end-0 z-20"},E={key:3,class:"absolute bottom-0 end-0 z-20"},L={class:"relative",tooltip:"Upload image"},q=s("div",{class:"my-4 text-center font-sans"},[s("p",{class:"text-muted-500 text-sm"},"Upload a project logo"),s("p",{class:"text-muted-400 text-xs"},"File size cannot exceed 2MB")],-1),A={class:"mx-auto flex w-full max-w-sm flex-col gap-3"},se=j({__name:"step-2",setup(G){const{data:l}=I();V({title:"Project info"});const d=P(()=>l.value.avatar),n=B(null);return y(n,u=>{const t=u?.item(0)||null;l.value.avatar=t}),(u,t)=>{const f=g,v=k,p=U,_=z,x=F,h=$,w=D;return i(),c("div",null,[o(f),s("div",H,[s("div",M,[o(v,{icon:"ph:image-duotone","filter-file-dropped":e=>e.type.startsWith("image"),onDrop:t[0]||(t[0]=e=>{n.value=e})},null,8,["filter-file-dropped"]),o(x,{accept:"image/*",modelValue:a(n),"onUpdate:modelValue":t[1]||(t[1]=e=>C(n)?n.value=e:null)},{default:r(({open:e,remove:b,files:m})=>[s("div",R,[a(d)?(i(),c("img",{key:0,src:a(d),alt:"Upload preview",class:"bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"},null,8,S)):(i(),c("img",T)),m?.length&&m.item(0)?(i(),c("div",W,[o(_,{size:"sm",shape:"full",onClick:J=>b(m.item(0)),tooltip:"Remove image"},{default:r(()=>[o(p,{name:"lucide:x",class:"h-4 w-4"})]),_:2},1032,["onClick"])])):(i(),c("div",E,[s("div",L,[o(_,{size:"sm",shape:"full",onClick:e},{default:r(()=>[o(p,{name:"lucide:plus",class:"h-4 w-4"})]),_:2},1032,["onClick"])])]))])]),_:1},8,["modelValue"])]),q,s("div",A,[o(h,{modelValue:a(l).name,"onUpdate:modelValue":t[2]||(t[2]=e=>a(l).name=e),shape:"curved",placeholder:"Project name",classes:{input:"h-12 text-base text-center"}},null,8,["modelValue"]),o(w,{modelValue:a(l).description,"onUpdate:modelValue":t[3]||(t[3]=e=>a(l).description=e),shape:"curved",placeholder:"Describe your project...",autogrow:"",class:"max-h-52"},null,8,["modelValue"])])])])}}});export{se as default};