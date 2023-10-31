import{d as j,a7 as C,x as N,o as n,e as l,f as e,j as f,g as t,w as a,J as A,s as i,h as d,K as g,L as k,H as P,n as D,_ as I,l as U,I as E,v as F,bz as H}from"./entry.f4bf1c86.js";import{_ as L}from"./BaseButtonIcon.vue.ee8ad51b.js";import{_ as J}from"./BaseTag.vue.17ec5264.js";import{_ as K}from"./BaseProgress.vue.ae04c42a.js";import{_ as M}from"./BaseCheckbox.vue.a0502851.js";import{_ as O}from"./BaseButtonAction.vue.bd077ce3.js";import"./IconCheck.47ba7fa2.js";const R={class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"},S={class:"flex h-16 w-full items-center justify-between px-10"},W=e("h2",{class:"font-heading text-muted-700 text-lg font-semibold dark:text-white"}," Task Details ",-1),q={class:"nui-slimscroll relative h-[calc(100%_-_64px)] w-full overflow-y-auto px-10 py-5"},G={class:"mb-4 flex items-center justify-between"},Q={class:"flex items-center gap-2"},X=e("h4",{class:"text-muted-400 font-sans text-xs font-semibold uppercase"}," Overview ",-1),Y={class:"border-muted-200 dark:border-muted-700 border-b pb-6"},Z={class:"mt-4 flex items-center justify-between"},ee={class:"flex shrink-0 items-center gap-2"},te={class:"max-w-[120px] grow"},se={class:"border-muted-200 dark:border-muted-700 border-b py-6"},ae=e("h4",{class:"text-muted-400 font-sans text-xs font-semibold uppercase"}," Checklist ",-1),oe={key:0},ne={class:"text-muted-400 mt-10 flex items-center justify-center"},le={class:"mb-6 mt-2 text-center"},ie=e("span",null,"Nothing to show",-1),de=e("span",null,"There is no checklist to show in here for now.",-1),ce={key:1,class:"mt-6 space-y-4"},me={class:"flex w-full items-center gap-2"},re={class:"border-muted-200 dark:border-muted-700 border-b py-6"},ue={class:"text-muted-400 font-sans text-xs font-semibold uppercase"},_e={key:0},he={class:"text-muted-400 mt-10 flex items-center justify-center"},pe={class:"mb-6 mt-2 text-center"},xe=e("span",null,"Nothing to show",-1),fe=e("span",null,"There are no attached files to show in here for now.",-1),ge={key:1,class:"mt-6 space-y-4"},ke={class:"flex w-full items-center gap-2"},ve=["src","alt"],be=e("span",{class:"px-1 text-base leading-tight"}," · ",-1),we={class:"ms-auto"},ye={class:"py-6"},ze={class:"text-muted-400 font-sans text-xs font-semibold uppercase"},Be={key:0},Te={class:"text-muted-400 mt-10 flex items-center justify-center"},Ve={class:"mb-6 mt-2 text-center"},$e=e("span",null,"Nothing to show",-1),je=e("span",null,"There are no comments to show in here for now.",-1),Ce={key:1,class:"mt-6 flex flex-col gap-8"},Ne={class:"flex items-center gap-2"},Ae={class:"flex items-center gap-2"},Je=j({__name:"DemoPanelTask",props:{task:{default:void 0},project:{default:void 0}},setup(w){const s=w,{close:v}=C(),h=N("");return(Pe,_)=>{const m=D,b=L,y=J,c=I,r=U,p=E,x=F,z=K,B=M,T=O,V=H;return n(),l("div",R,[e("div",S,[W,e("button",{type:"button",class:"text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white",onClick:_[0]||(_[0]=(...o)=>f(v)&&f(v)(...o))},[t(m,{name:"feather:chevron-right",class:"h-6 w-6"})])]),e("div",q,[e("div",null,[e("div",G,[e("div",Q,[t(b,{shape:"full","data-nui-tooltip":"Edit task",size:"sm"},{default:a(()=>[t(m,{name:"lucide:edit-3"})]),_:1}),X]),t(y,{shape:"full",flavor:"pastel",color:"muted",class:"m-0 -ms-1 inline-flex h-6 scale-90 items-center gap-1 py-0 text-xs font-semibold"},{default:a(()=>[e("span",{class:A(["block h-2 w-2 rounded-full",[s.task?.status===0&&"bg-info-500",s.task?.status===1&&"bg-primary-500",s.task?.status===2&&"bg-danger-500",s.task?.status===3&&"bg-warning-500",s.task?.status===4&&"bg-yellow-400",s.task?.status===5&&"bg-success-500"]])},null,2),e("span",null,"Task #"+i(s.task?.id),1)]),_:1})]),e("div",Y,[t(c,{as:"h3",size:"md",weight:"medium",class:"mb-2"},{default:a(()=>[d(i(s.task?.name),1)]),_:1}),t(r,{size:"xs",class:"text-muted-500 dark:text-muted-400"},{default:a(()=>[d(i(s.task?.description),1)]),_:1}),e("div",Z,[e("div",ee,[t(p,{src:s.task?.assignee.src,size:"xs",class:"shrink-0"},null,8,["src"]),e("div",null,[t(x,{size:"xs",class:"text-muted-400",lead:"none"},{default:a(()=>[d("Assigned to")]),_:1}),t(c,{as:"h4",size:"sm",weight:"medium"},{default:a(()=>[d(i(s.task?.assignee.tooltip),1)]),_:1})])]),e("div",te,[t(x,{size:"xs",class:"text-muted-400 mb-2",lead:"none"},{default:a(()=>[d(i(s.task?.completion)+"% complete",1)]),_:1}),t(z,{value:s.task?.completion,size:"xs",color:s.task?.status===5?"success":"primary"},null,8,["value","color"])])])]),e("div",se,[ae,s.task?.checklist.length===0?(n(),l("div",oe,[e("div",ne,[t(m,{name:"ph:file-thin",class:"h-10 w-10"})]),e("div",le,[t(c,{as:"h4",size:"md",weight:"light",class:"mb-1"},{default:a(()=>[ie]),_:1}),t(r,{size:"xs",lead:"tight",class:"text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"},{default:a(()=>[de]),_:1})])])):(n(),l("div",ce,[(n(!0),l(g,null,k(s.task?.checklist,(o,u)=>(n(),l("div",{key:u,shape:"curved"},[e("div",me,[t(B,{modelValue:o.done,"onUpdate:modelValue":$=>o.done=$,class:"shrink-0",color:"primary",label:o.text,classes:{wrapper:"!items-start max-w-[240px]",label:"text-[0.85rem] text-muted-500 dark:text-muted-300 leading-snug"}},null,8,["modelValue","onUpdate:modelValue","label"])])]))),128))]))]),e("div",re,[e("h4",ue," Attached Files ("+i(s.task?.files.length)+") ",1),s.task?.files.length===0?(n(),l("div",_e,[e("div",he,[t(m,{name:"ph:file-thin",class:"h-10 w-10"})]),e("div",pe,[t(c,{as:"h4",size:"md",weight:"light",class:"mb-1"},{default:a(()=>[xe]),_:1}),t(r,{size:"xs",lead:"tight",class:"text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"},{default:a(()=>[fe]),_:1})])])):(n(),l("div",ge,[(n(!0),l(g,null,k(s.task?.files,(o,u)=>(n(),l("div",{key:u,shape:"curved"},[e("div",ke,[e("img",{src:o.icon,alt:o.name,class:"max-w-[40px]"},null,8,ve),e("div",null,[t(c,{tag:"h3",size:"sm",weight:"medium"},{default:a(()=>[d(i(o.name),1)]),_:2},1024),t(r,{size:"xs",class:"text-muted-400"},{default:a(()=>[e("span",null,i(o.size),1),be,e("span",null,"v"+i(o.version),1)]),_:2},1024)]),e("div",we,[t(b,{shape:"full","data-nui-tooltip":"Download file",size:"sm"},{default:a(()=>[t(m,{name:"lucide:arrow-down"})]),_:1})])])]))),128))]))]),e("div",ye,[e("h4",ze," Comments ("+i(s.task?.comments.length)+") ",1),s.task?.comments.length===0?(n(),l("div",Be,[e("div",Te,[t(m,{name:"ph:chat-circle-thin",class:"h-10 w-10"})]),e("div",Ve,[t(c,{as:"h4",size:"md",weight:"light",class:"mb-1"},{default:a(()=>[$e]),_:1}),t(r,{size:"xs",lead:"tight",class:"text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"},{default:a(()=>[je]),_:1})])])):(n(),l("div",Ce,[(n(!0),l(g,null,k(s.task?.comments,(o,u)=>(n(),l("div",{key:u,class:"flex gap-3"},[t(p,{src:o.author.picture,size:"xs"},null,8,["src"]),e("div",null,[t(c,{as:"h3",size:"sm",weight:"medium"},{default:a(()=>[d(i(o.author.name),1)]),_:2},1024),t(x,{size:"xs",class:"text-muted-400 mb-2",lead:"none"},{default:a(()=>[d(" posted "+i(o.author.posted),1)]),_:2},1024),t(r,{size:"xs",class:"text-muted-500 dark:text-muted-400"},{default:a(()=>[d(i(o.text),1)]),_:2},1024)])]))),128))]))]),e("div",null,[t(V,{modelValue:f(h),"onUpdate:modelValue":_[1]||(_[1]=o=>P(h)?h.value=o:null),shape:"rounded",placeholder:"Write a comment...",rows:4,addon:""},{addon:a(()=>[e("div",Ne,[t(p,{src:"/img/avatars/2.svg",class:"me-1",size:"xs"}),t(c,{as:"h4",size:"sm",weight:"semibold",class:"text-muted-800 dark:text-white"},{default:a(()=>[d(" Maya ")]),_:1})]),e("div",Ae,[t(T,{color:"primary"},{default:a(()=>[d(" Publish ")]),_:1})])]),_:1},8,["modelValue"])])])])])}}});export{Je as default};