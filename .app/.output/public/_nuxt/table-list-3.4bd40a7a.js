import{d as H,ba as M,u as D,c as v,r as b,L as W,bb as Y,o as p,a as h,e,w as a,h as o,C as x,b as t,f as l,V as B,t as i,M as j,F as G,E as J,n as K,bd as O}from"./entry.a9943f59.js";import{_ as Q}from"./BaseSelect.vue.06a8bdce.js";import{_ as X}from"./BaseCheckbox.vue.bbe76764.js";import{_ as Z,b as ee,c as ae,a as te}from"./TairoTable.vue.3d6809f4.js";import{_ as se}from"./BaseAvatar.vue.aa11e2f4.js";import{_ as oe}from"./BaseButtonAction.vue.a51bc895.js";import{_ as le}from"./BasePagination.vue.1c9a6a5f.js";import{_ as ne}from"./TairoContentWrapper.vue.eb2cd04c.js";import{u as ce}from"./fetch.45bb61c5.js";import{_ as re,a as ie}from"./placeholder-search-4-dark.d6f65177.js";import"./IconChevronDown.0fd8d294.js";import"./IconCheck.7b98e61a.js";const de=t("option",{value:10},"10 per page",-1),ue=t("option",{value:25},"25 per page",-1),_e=t("option",{value:50},"50 per page",-1),pe=t("option",{value:100},"100 per page",-1),me={key:0},fe=t("img",{class:"block dark:hidden",src:re,alt:"Placeholder image"},null,-1),he=t("img",{class:"hidden dark:block",src:ie,alt:"Placeholder image"},null,-1),ge={key:1},ve={class:"w-full"},be={class:"flex items-center"},xe=t("a",{href:"#",class:"outline-none hover:underline focus:underline"},"Click here to everything",-1),ke={class:"flex items-center"},ye=["src","alt"],Ve={class:"font-medium"},we={class:"flex items-center"},$e={class:"ms-3 leading-none"},Be={class:"font-sans text-sm font-medium"},Te={class:"text-muted-400 font-sans text-xs"},Ce={class:"mt-6"},We=H({__name:"table-list-3",async setup(Ne){let f,k;const T=M(),C=D(),y=v(()=>parseInt(T.query.page??"1")),m=b(""),d=b(10);W([m,d],()=>{C.push({query:{page:void 0}})});const N=v(()=>({filter:m.value,perPage:d.value,page:y.value})),{data:u,pending:P,error:Pe,refresh:Ae}=([f,k]=Y(()=>ce("/api/company/documents/",{query:N},"$hNCH3onLct")),f=await f,k(),f),n=b([]),g=v(()=>n.value.length===u.value?.data.length);function A(){g.value?n.value=[]:n.value=u.value?.data.map(V=>V.id)??[]}return(V,_)=>{const L=K,S=Q,F=O,w=X,r=Z,c=ee,$=ae,R=se,U=oe,q=te,z=le,I=ne;return p(),h("div",null,[e(I,null,{left:a(()=>[e(L,{modelValue:o(m),"onUpdate:modelValue":_[0]||(_[0]=s=>x(m)?m.value=s:null),icon:"lucide:search",placeholder:"Filter files...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:a(()=>[e(S,{modelValue:o(d),"onUpdate:modelValue":_[1]||(_[1]=s=>x(d)?d.value=s:null),placeholder:"Items per page",label:"",classes:{wrapper:"w-full sm:w-40"}},{default:a(()=>[de,ue,_e,pe]),_:1},8,["modelValue"])]),default:a(()=>[t("div",null,[!o(P)&&o(u)?.data.length===0?(p(),h("div",me,[e(F,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[fe,he]),_:1})])):(p(),h("div",ge,[t("div",ve,[e(q,{shape:"rounded"},{header:a(()=>[e(r,{uppercase:"",spaced:"",class:"p-4"},{default:a(()=>[t("div",be,[e(w,{"model-value":o(g),indeterminate:o(n).length>0&&!o(g),name:"table-1-main",shape:"full",class:"text-primary-500",onClick:A},null,8,["model-value","indeterminate"])])]),_:1}),e(r,{uppercase:"",spaced:""},{default:a(()=>[l("Type")]),_:1}),e(r,{uppercase:"",spaced:""},{default:a(()=>[l("Name")]),_:1}),e(r,{uppercase:"",spaced:""},{default:a(()=>[l("Size")]),_:1}),e(r,{uppercase:"",spaced:""},{default:a(()=>[l("Version")]),_:1}),e(r,{uppercase:"",spaced:""},{default:a(()=>[l(" Last Updated ")]),_:1}),e(r,{uppercase:"",spaced:""},{default:a(()=>[l("Action")]),_:1})]),default:a(()=>[o(n).length>0?(p(),B($,{key:0,hoverable:!1},{default:a(()=>[e(c,{colspan:"6",class:"bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"},{default:a(()=>[l(" You have selected "+i(o(n).length)+" items of the total "+i(o(u)?.total)+" items. ",1),xe]),_:1})]),_:1})):j("",!0),(p(!0),h(G,null,J(o(u)?.data,s=>(p(),B($,{key:s.id},{default:a(()=>[e(c,{spaced:""},{default:a(()=>[t("div",ke,[e(w,{modelValue:o(n),"onUpdate:modelValue":_[2]||(_[2]=E=>x(n)?n.value=E:null),value:s.id,name:`item-checkbox-${s.id}`,shape:"full",class:"text-primary-500"},null,8,["modelValue","value","name"])])]),_:2},1024),e(c,{light:"",spaced:""},{default:a(()=>[t("img",{src:s.icon,alt:s.name,class:"max-w-[46px]"},null,8,ye)]),_:2},1024),e(c,{spaced:""},{default:a(()=>[t("span",Ve,i(s.name),1)]),_:2},1024),e(c,{light:"",spaced:""},{default:a(()=>[l(i(s.size),1)]),_:2},1024),e(c,{light:"",spaced:""},{default:a(()=>[l(i(s.version),1)]),_:2},1024),e(c,{spaced:""},{default:a(()=>[t("div",we,[e(R,{src:s.author.picture,text:s.initials,size:"xs",class:"bg-muted-500/20 text-muted-500"},null,8,["src","text"]),t("div",$e,[t("h4",Be,i(s.author.name),1),t("p",Te,i(s.uploaded),1)])])]),_:2},1024),e(c,{spaced:""},{default:a(()=>[e(U,{muted:""},{default:a(()=>[l("Manage")]),_:1})]),_:1})]),_:2},1024))),128))]),_:1})]),t("div",Ce,[e(z,{"total-items":o(u)?.total??0,"item-per-page":o(d),"current-page":o(y),shape:"curved"},null,8,["total-items","item-per-page","current-page"])])]))])]),_:1})])}}});export{We as default};
