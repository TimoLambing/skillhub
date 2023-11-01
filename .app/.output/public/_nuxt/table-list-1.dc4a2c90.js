import{d as J,bc as W,a as Y,c as k,x as y,R as G,be as M,o as n,e as x,g as s,w as e,j as o,H as w,f as a,h as l,a0 as m,s as c,S as T,K as O,L as Q,q as X,bt as Z,J as ee,I as se}from"./entry.adb22a9c.js";import{_ as te}from"./BaseSelect.vue.3c6f0a28.js";import{_ as ae}from"./BaseCheckbox.vue.681052e7.js";import{_ as oe,b as le,c as ne,a as ce}from"./TairoTable.vue.81072760.js";import{_ as re}from"./BaseTag.vue.4dc10055.js";import{_ as ie}from"./BaseProgressCircle.d08344f6.js";import{_ as de,a as ue}from"./BaseDropdown.vue.b3fc75f6.js";import{_ as _e}from"./BasePagination.vue.633b4ba2.js";import{_ as pe}from"./TairoContentWrapper.vue.3ae99054.js";import{u as me}from"./fetch.b04ce66f.js";import{g as fe}from"./colors.cbccbc0c.js";import{_ as he,a as ge}from"./placeholder-search-4-dark.910fe00c.js";import"./IconChevronDown.90628913.js";import"./IconCheck.512ef9a2.js";import"./menu.8fcc9f2f.js";import"./use-tracked-pointer.efb4822b.js";import"./use-tree-walker.1f1f2539.js";import"./use-resolve-button-type.1fcf5752.js";import"./use-text-value.d40d5d45.js";const ve=a("option",{value:10},"10 per page",-1),xe=a("option",{value:25},"25 per page",-1),be=a("option",{value:50},"50 per page",-1),ke=a("option",{value:100},"100 per page",-1),ye={key:0},we=a("img",{class:"block dark:hidden",src:he,alt:"Placeholder image"},null,-1),Ce=a("img",{class:"hidden dark:block",src:ge,alt:"Placeholder image"},null,-1),Ve={key:1},$e={class:"w-full"},Be={class:"flex items-center"},Te=a("a",{href:"#",class:"outline-none hover:underline focus:underline"},"Click here to everything",-1),ze={class:"flex items-center"},Pe={class:"flex items-center"},Re={class:"ms-3 leading-none"},Se={class:"font-sans text-sm font-medium"},Ae={class:"text-muted-400 font-sans text-xs"},Le={class:"flex items-center"},Ne={class:"relative"},qe={class:"absolute start-1/2 top-1/2 z-10 ms-0.5 rtl:ms-0 rtl:me-0.5 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold"},De=a("span",{class:"text-muted-400 font-sans text-xs"}," Tasks completed ",-1),Fe={class:"flex justify-end"},Ie={class:"mt-6"},rs=J({__name:"table-list-1",async setup(Ue){let h,C;const z=W(),P=Y(),V=k(()=>parseInt(z.query.page??"1")),f=y(""),d=y(10);G([f,d],()=>{P.push({query:{page:void 0}})});const R=k(()=>({filter:f.value,perPage:d.value,page:V.value})),{data:u,pending:S,error:je,refresh:Ee}=([h,C]=M(()=>me("/api/company/members/",{query:R},"$SgL4zKsFeE")),h=await h,C(),h),r=y([]),b=k(()=>r.value.length===u.value?.data.length);function A(){b.value?r.value=[]:r.value=u.value?.data.map(g=>g.id)??[]}return(g,_)=>{const L=X,N=te,q=Z,$=ae,p=oe,i=le,B=ne,D=se,v=re,F=ie,I=de,U=ue,j=ce,E=_e,H=pe;return n(),x("div",null,[s(H,null,{left:e(()=>[s(L,{modelValue:o(f),"onUpdate:modelValue":_[0]||(_[0]=t=>w(f)?f.value=t:null),icon:"lucide:search",placeholder:"Filter users...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:e(()=>[s(N,{modelValue:o(d),"onUpdate:modelValue":_[1]||(_[1]=t=>w(d)?d.value=t:null),label:"",classes:{wrapper:"w-full sm:w-40"}},{default:e(()=>[ve,xe,be,ke]),_:1},8,["modelValue"])]),default:e(()=>[a("div",null,[!o(S)&&o(u)?.data.length===0?(n(),x("div",ye,[s(q,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:e(()=>[we,Ce]),_:1})])):(n(),x("div",Ve,[a("div",$e,[s(j,{shape:"rounded",scrollable:!1},{header:e(()=>[s(p,{uppercase:"",spaced:"",class:"p-4"},{default:e(()=>[a("div",Be,[s($,{"model-value":o(b),indeterminate:o(r).length>0&&!o(b),name:"table-1-main",shape:"rounded",class:"text-primary-500",onClick:A},null,8,["model-value","indeterminate"])])]),_:1}),s(p,{uppercase:"",spaced:""},{default:e(()=>[l(" Collaborator ")]),_:1}),s(p,{uppercase:"",spaced:""},{default:e(()=>[l("Location")]),_:1}),s(p,{uppercase:"",spaced:""},{default:e(()=>[l("Status")]),_:1}),s(p,{uppercase:"",spaced:""},{default:e(()=>[l(" Completed ")]),_:1}),s(p,{uppercase:"",spaced:"",class:"text-end"},{default:e(()=>[l("Action")]),_:1})]),default:e(()=>[o(r).length>0?(n(),m(B,{key:0,hoverable:!1},{default:e(()=>[s(i,{colspan:"6",class:"bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"},{default:e(()=>[l(" You have selected "+c(o(r).length)+" items of the total "+c(o(u)?.total)+" items. ",1),Te]),_:1})]),_:1})):T("",!0),(n(!0),x(O,null,Q(o(u)?.data,t=>(n(),m(B,{key:t.id},{default:e(()=>[s(i,{spaced:""},{default:e(()=>[a("div",ze,[s($,{modelValue:o(r),"onUpdate:modelValue":_[2]||(_[2]=K=>w(r)?r.value=K:null),value:t.id,name:`item-checkbox-${t.id}`,shape:"rounded",class:"text-primary-500"},null,8,["modelValue","value","name"])])]),_:2},1024),s(i,{spaced:""},{default:e(()=>[a("div",Pe,[s(D,{src:t.picture,text:t.initials,class:ee(("getRandomColor"in g?g.getRandomColor:o(fe))())},null,8,["src","text","class"]),a("div",Re,[a("h4",Se,c(t.username),1),a("p",Ae,c(t.position),1)])])]),_:2},1024),s(i,{light:"",spaced:""},{default:e(()=>[l(c(t.location),1)]),_:2},1024),s(i,{spaced:"",class:"capitalize"},{default:e(()=>[t.status==="available"?(n(),m(v,{key:0,color:"success",flavor:"pastel",shape:"full",size:"sm",class:"font-medium"},{default:e(()=>[l(c(t.status),1)]),_:2},1024)):t.status==="new"?(n(),m(v,{key:1,color:"info",flavor:"pastel",shape:"full",size:"sm",class:"font-medium"},{default:e(()=>[l(c(t.status),1)]),_:2},1024)):t.status==="busy"?(n(),m(v,{key:2,color:"warning",flavor:"pastel",shape:"full",size:"sm",class:"font-medium"},{default:e(()=>[l(c(t.status),1)]),_:2},1024)):t.status==="offline"?(n(),m(v,{key:3,color:"muted",flavor:"pastel",shape:"full",size:"sm",class:"font-medium"},{default:e(()=>[l(c(t.status),1)]),_:2},1024)):T("",!0)]),_:2},1024),s(i,{spaced:""},{default:e(()=>[a("div",Le,[a("div",Ne,[s(F,{value:t.completed,thickness:1,size:50,class:"text-success-500"},null,8,["value"]),a("span",qe,c(t.completed)+"% ",1)]),De])]),_:2},1024),s(i,{spaced:""},{default:e(()=>[a("div",Fe,[s(U,{flavor:"context",label:"Dropdown",orientation:"end",shape:"smooth"},{default:e(()=>[s(I,{to:"#",title:"User",text:"View details",shape:"smooth"})]),_:1})])]),_:1})]),_:2},1024))),128))]),_:1})]),a("div",Ie,[s(E,{"total-items":o(u)?.total??0,"item-per-page":o(d),"current-page":o(V),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])]))])]),_:1})])}}});export{rs as default};