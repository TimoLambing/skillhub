import{d as q,A as E,a7 as G,bc as K,c as k,be as I,x as z,o as i,a0 as T,w as o,j as l,e as d,f as e,g as t,h as f,s as u,S as g,L as C,K as N,bC as M,I as X,l as J,_ as Q,n as U,bD as W,v as Y}from"./entry.f4bf1c86.js";import{_ as Z}from"./BaseAvatarGroup.vue.e7453227.js";import{_ as R}from"./BaseButtonIcon.vue.ee8ad51b.js";import{_ as ee}from"./BaseTag.vue.17ec5264.js";import{u as te}from"./fetch.93c508fb.js";import{C as se,D as ae}from"./vue3-smooth-dnd.esm.7f1aa900.js";const oe={key:0,class:"flex h-12 items-center justify-between pe-4 xl:pe-10"},ne={class:"flex items-center gap-2"},ie={class:"flex items-center gap-2"},le={class:"flex h-[calc(100vh_-_133px)] grow space-x-6 overflow-auto pt-2"},re={class:"flex h-14 shrink-0 items-center px-2"},ce={class:"block font-sans text-sm font-semibold"},de={class:"text-primary-500 dark:text-sunny ms-2 flex h-5 w-5 items-center justify-center text-sm font-semibold"},ue={class:"text-primary-500 dark:text-sunny hover:bg-primary-500/20 dark:hover:bg-sunny/20 ms-auto flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300"},me={class:"nui-slimscroll overflow-auto pb-10 pe-2"},_e=["onClick"],pe={class:"relative mb-2"},he={class:"mb-2 flex w-full items-center justify-between gap-2"},fe={class:"text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium"},xe={class:"flex items-center gap-2"},ge={class:"text-muted-400 flex items-center gap-3"},ve=["data-nui-tooltip"],ke=["data-nui-tooltip"],be=["data-nui-tooltip"],we={key:1},ye={class:"text-muted-400 mt-10 flex items-center justify-center"},je={class:"mt-2 text-center"},$e=e("span",null,"Nothing to show",-1),Be=e("span",null,"There are no pending tasks to show in here for now.",-1),Ie={class:"text-primary-500 dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"},ze=e("span",null,"New Task",-1),Te={class:"flex w-72 shrink-0 flex-col"},Ce=e("div",{class:"flex h-14 shrink-0 items-center px-2"},[e("span",{class:"block font-sans text-sm font-semibold"},"Customize")],-1),Ne={class:"w-full"},De={class:"text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-sunny border-muted-300 dark:border-muted-600 hover:border-primary-500 dark:hover:border-sunny flex h-12 w-full items-center justify-center gap-x-2 rounded-xl border-2 border-dashed px-6 font-sans transition-colors duration-300 hover:border-solid"},Pe=e("span",{class:"text-sm"},"Manage columns",-1),Ae=e("div",{class:"w-6 shrink-0"},null,-1),Me=q({__name:"[slug]",async setup(He){let h,x;const m=E({new:{title:"New",tasks:[]},inProgress:{title:"In Progress",tasks:[]},blocked:{title:"Blocked",tasks:[]},onHold:{title:"On Hold",tasks:[]},inReview:{title:"In Review",tasks:[]},done:{title:"Done",tasks:[]}}),{open:D}=G(),P=K(),b=k(()=>P.params.slug),A=k(()=>({slug:b.value})),{data:c,pending:Ve,error:Le,refresh:Se}=([h,x]=I(()=>te("/api/company/projects",{query:A},"$PXR3v4Bgc6")),h=await h,x(),h);c.value?.project||([h,x]=I(()=>M("/layouts/projects")),await h,x());const w=z(c.value?.project?.tasks);if(w.value)for(const a of w.value)switch(a.status){case 0:m.new.tasks.push(a);break;case 1:m.inProgress.tasks.push(a);break;case 2:m.blocked.tasks.push(a);break;case 3:m.onHold.tasks.push(a);break;case 4:m.inReview.tasks.push(a);break;case 5:m.done.tasks.push(a);break}const H=k(()=>Object.values(m||{})),y=z();function V(a,n){y.value=n.find(_=>_.id===a),D("task",{task:y})}function L(a,n){if(typeof n?.addedIndex!="number"||typeof n?.removedIndex!="number"||n.addedIndex===n.removedIndex)return;let _;n.removedIndex!==null&&(_=a.tasks.splice(n.removedIndex,1)[0]),n.addedIndex!==null&&a.tasks.splice(n.addedIndex,0,_)}return(a,n)=>{const _=X,j=J,v=Q,S=Z,r=U,$=R,F=ee,B=Y,O=W;return i(),T(O,{"horizontal-scroll":"",class:"bg-muted-100 dark:bg-muted-900 h-screen w-full"},{default:o(()=>[l(c)?.project!==void 0?(i(),d("div",oe,[e("div",ne,[t(_,{src:l(c)?.project.customer.logo,size:"xs"},null,8,["src"]),e("div",null,[t(j,{size:"xs",class:"text-muted-400"},{default:o(()=>[f(u(l(c)?.project.customer.name),1)]),_:1}),t(v,{as:"h2",size:"sm",weight:"medium"},{default:o(()=>[f(u(l(c)?.project.name),1)]),_:1})])]),e("div",ie,[t(S,{avatars:l(c)?.project.team,size:"xs"},null,8,["avatars"]),t($,{to:`/layouts/projects/details/${l(b)}`,shape:"curved","data-nui-tooltip":"Project details"},{default:o(()=>[t(r,{name:"lucide:layout-template",class:"h-4 w-4"})]),_:1},8,["to"]),t($,{shape:"full","data-nui-tooltip":"New task"},{default:o(()=>[t(r,{name:"lucide:plus",class:"h-4 w-4"})]),_:1})])])):g("",!0),e("div",le,[(i(!0),d(N,null,C(l(H),p=>(i(),d("div",{key:p.title,class:"flex h-full w-72 shrink-0 flex-col"},[e("div",re,[e("span",ce,u(p.title),1),e("span",de,u(p.tasks.length),1),e("button",ue,[t(r,{name:"lucide:plus",class:"h-4 w-4"})])]),e("div",me,[t(l(se),{tag:"div",class:"flex flex-col gap-y-4",orientation:"vertical","group-name":p.title,"drag-class":"transform rotate-2 transform-gpu","drop-class":"opacity-40","drop-placeholder":{className:"mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4"},onDrop:s=>L(p,s)},{default:o(()=>[p.tasks.length>0?(i(!0),d(N,{key:0},C(p.tasks,s=>(i(),T(l(ae),{key:s.id},{default:o(()=>[e("div",{class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white",draggable:"true",onClick:()=>V(s.id,l(c)?.project.tasks)},[e("div",pe,[e("div",he,[t(F,{shape:"full",flavor:"pastel",color:"muted",class:"m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"},{default:o(()=>[f("Task #"+u(s.id),1)]),_:2},1024),t(B,{size:"xs",class:"text-muted-400"},{default:o(()=>[f(u(s.created),1)]),_:2},1024)]),t(v,{as:"h4",size:"sm",weight:"medium",class:"line-clamp-2"},{default:o(()=>[e("span",null,u(s.name),1)]),_:2},1024)]),e("div",fe,[e("div",xe,[t(_,{src:s.assignee.src,size:"xxs",class:"shrink-0"},null,8,["src"]),t(B,{size:"xs",class:"text-muted-400"},{default:o(()=>[f(u(s.assignee.tooltip),1)]),_:2},1024)]),e("div",ge,[s.checklist.length>0?(i(),d("div",{key:0,"data-nui-tooltip":`${s.checklist.length} subtask${s.checklist.length>1?"s":""} in checklist`,"data-nui-tooltip-position":"start"},[t(r,{name:"lucide:check-circle",class:"h-4 w-4"})],8,ve)):g("",!0),s.files.length>0?(i(),d("div",{key:1,"data-nui-tooltip":`${s.files.length} file${s.files.length>1?"s":""} uploaded`,"data-nui-tooltip-position":"start"},[t(r,{name:"lucide:file",class:"h-4 w-4"})],8,ke)):g("",!0),s.comments.length>0?(i(),d("div",{key:2,"data-nui-tooltip":`${s.comments.length} comment${s.comments.length>1?"s":""}`,"data-nui-tooltip-position":"start"},[t(r,{name:"lucide:message-circle",class:"h-4 w-4"})],8,be)):g("",!0)])])],8,_e)]),_:2},1024))),128)):(i(),d("div",we,[e("div",ye,[t(r,{name:"ph:kanban-thin",class:"h-12 w-12"})]),e("div",je,[t(v,{as:"h4",size:"md",weight:"light",class:"mb-1"},{default:o(()=>[$e]),_:1}),t(j,{size:"xs",lead:"tight",class:"text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"},{default:o(()=>[Be]),_:1}),e("button",Ie,[t(r,{name:"lucide:plus",class:"h-3 w-3"}),ze])])]))]),_:2},1032,["group-name","onDrop"])])]))),128)),e("div",Te,[Ce,e("div",Ne,[e("button",De,[t(r,{name:"ph:gear-six-duotone",class:"h-4 w-4"}),Pe])])]),Ae])]),_:1})}}});export{Me as default};
