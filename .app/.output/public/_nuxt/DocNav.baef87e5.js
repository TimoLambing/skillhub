import{d as g,bb as y,bg as k,c as w,o as l,a as c,h as s,e as i,w as u,b as t,t as x,M as h,bv as f,l as N,m as b}from"./entry.a9943f59.js";const C={class:"flex"},P={key:0},B={class:"inline-flex flex-col gap-1"},D=t("span",{class:"font-sans text-sm leading-tight"},"Previous",-1),V={class:"font-heading text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm font-medium"},A=t("div",{class:"grow"},null,-1),O={key:1},q={class:"inline-flex flex-col gap-1 text-end"},E=t("span",{class:"font-sans text-sm leading-tight"},"Next",-1),I={class:"font-heading text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm font-medium"},M=g({__name:"DocNav",props:{prev:{},next:{}},async setup(v){let n,d;const a=v,{data:p}=([n,d]=y(()=>k("doc-page-nav",async()=>{const o=a.prev?f().where({_partial:!1,_draft:!1,_path:a.prev}).only(["_path","title"]).findOne():Promise.resolve(null),r=a.next?f().where({_partial:!1,_draft:!1,_path:a.next}).only(["_path","title"]).findOne():Promise.resolve(null);return Promise.all([o,r])})),n=await n,d(),n),e=w(()=>{if(!p.value)return{};const[o,r]=p.value;return{prev:o,next:r}});return(o,r)=>{const _=N,m=b;return l(),c("div",C,[s(e).prev?(l(),c("div",P,[i(m,{to:s(e).prev._path,class:"text-muted-400 dark:text-muted-500 hover:text-muted-500 dark:hover:text-muted-400 group inline-flex items-center gap-6 text-sm transition-colors duration-100"},{default:u(()=>[i(_,{name:"lucide:arrow-left",class:"ms-2 h-5 w-5 transition-transform duration-100 group-hover:-translate-x-1"}),t("span",B,[D,t("span",V,x(s(e).prev.title),1)])]),_:1},8,["to"])])):h("",!0),A,s(e).next?(l(),c("div",O,[i(m,{to:s(e).next._path,class:"text-muted-400 dark:text-muted-500 hover:text-muted-500 dark:hover:text-muted-400 group inline-flex items-center gap-6 text-sm transition-colors duration-100"},{default:u(()=>[t("span",q,[E,t("span",I,x(s(e).next.title),1)]),i(_,{name:"lucide:arrow-right",class:"me-2 h-5 w-5 transition-transform duration-100 group-hover:translate-x-1"})]),_:1},8,["to"])])):h("",!0)])}}});export{M as default};
