import{d as z,x as B,c as D,o as c,e as m,f as t,g as e,w as a,h as l,K as _,L as h,j as f,_ as $,n as q,I,l as V,y as j,s as o,J as C,q as P}from"./entry.f4bf1c86.js";import{_ as T}from"./BaseButtonIcon.vue.ee8ad51b.js";import A from"./TairoLogo.cf38a86a.js";const L={class:"mx-auto max-w-3xl py-10"},N={class:"mb-4 flex items-center justify-between"},S={class:"flex items-center justify-end gap-3"},F={class:"overflow-hidden font-sans"},R={class:"border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"},U={class:"flex items-center gap-3"},E={class:""},H=t("div",{class:"flex gap-12"},[t("div",{class:"text-muted-500 dark:text-muted-400 text-sm font-light"},[t("p",{class:"text-muted-700 dark:text-muted-100 text-xs font-normal"}," Invoice Number "),t("p",null,"INV-48654"),t("p",{class:"text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"}," Date of Issue "),t("p",null,"03.19.2023")]),t("div",{class:"text-muted-500 dark:text-muted-400 text-sm font-light"},[t("p",{class:"text-muted-700 dark:text-muted-100 text-xs font-normal"}," Terms "),t("p",null,"30 Days"),t("p",{class:"text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"}," Due "),t("p",null,"04.19.2023")])],-1),J={class:"border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"},K={class:"flex items-center gap-4"},M={class:""},O=t("div",{class:"flex gap-12"},[t("div",{class:"text-muted-500 dark:text-muted-400 text-sm font-light"},[t("p",{class:"text-muted-700 dark:text-muted-100 text-sm font-normal"}," Address "),t("p",{class:"text-xs"},"43 Church street"),t("p",{class:"text-xs"},"San Jose de la Herida"),t("p",{class:"text-xs"},"CA 91853")])],-1),Q={class:"px-6 py-8 sm:p-8"},W={class:"flex flex-col"},G={class:"divide-muted-200 dark:divide-muted-700 min-w-full divide-y"},X=t("thead",{class:"font-sans"},[t("tr",null,[t("th",{scope:"col",class:"text-muted-400 py-3.5 pe-3 ps-4 text-left text-xs font-medium uppercase sm:ps-6 md:ps-0"}," Description "),t("th",{scope:"col",class:"text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"}," Unit "),t("th",{scope:"col",class:"text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"}," Quantity "),t("th",{scope:"col",class:"text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"}," Rate "),t("th",{scope:"col",class:"text-muted-400 py-3.5 pe-4 ps-3 text-right text-xs font-medium uppercase sm:pe-6 md:pe-0"}," Amount ")])],-1),Y={class:"font-sans"},Z={class:"py-4 pe-3 ps-4 text-sm sm:ps-6 md:ps-0"},tt={class:"text-muted-800 dark:text-muted-100 font-medium"},et={class:"text-muted-400 mt-0.5 text-xs"},st=t("td",{class:"text-muted-500 dark:text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"}," hours ",-1),at={class:"hidden px-3 py-4 text-right text-sm sm:table-cell"},ot={class:"flex justify-end"},dt={class:"text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"},nt={class:"text-muted-800 dark:text-muted-100 py-4 pe-4 ps-3 text-right text-sm sm:pe-6 md:pe-0"},lt={scope:"row",colspan:"4",class:"text-muted-400 hidden pe-3 ps-6 pt-6 text-right text-sm font-light sm:table-cell md:ps-0"},it={scope:"row",class:"text-muted-500 pe-3 ps-4 pt-6 text-left text-sm font-light sm:hidden"},ct={class:"mt-8 p-8"},mt={class:"border-muted-200 dark:border-muted-700 border-t pt-8"},rt={class:"text-muted-400"},ut=.1,ft=z({__name:"utility-invoice",setup(pt){const x=B([{name:"Website Redesign",unit:"hrs",quantity:54,rate:24},{name:"Logo Design",unit:"hrs",quantity:12,rate:24},{name:"Custom Illustrations",unit:"hrs",quantity:7,rate:32}]),b=D(()=>{const r=x.value.reduce((n,d)=>n+d.quantity*d.rate,0),u=r*ut,i=r+u;return[{label:"Subtotal",value:r},{label:"Taxes",value:u},{label:"Total",value:i}]});return(r,u)=>{const i=$,n=q,d=T,v=I,p=V,y=A,g=P,w=j;return c(),m("div",L,[t("div",N,[t("div",null,[e(i,{as:"h2",size:"xl",weight:"medium",lead:"none"},{default:a(()=>[l(" Order #ox-81469 ")]),_:1})]),t("div",S,[e(d,{size:"sm",shape:"full","data-nui-tooltip":"Edit invoice"},{default:a(()=>[e(n,{name:"ph:pencil-duotone",class:"h-4 w-4"})]),_:1}),e(d,{size:"sm",shape:"full","data-nui-tooltip":"Send by email"},{default:a(()=>[e(n,{name:"ph:envelope-duotone",class:"h-4 w-4"})]),_:1}),e(d,{size:"sm",shape:"full","data-nui-tooltip":"Print invoice"},{default:a(()=>[e(n,{name:"ph:printer-duotone",class:"h-4 w-4"})]),_:1}),e(d,{size:"sm",shape:"full","data-nui-tooltip":"Download as PDF"},{default:a(()=>[e(n,{name:"ph:download-duotone",class:"h-4 w-4"})]),_:1})])]),t("div",null,[e(w,null,{default:a(()=>[t("div",F,[t("div",null,[t("div",R,[t("div",U,[e(v,{src:"/img/avatars/24.svg","badge-src":"/img/stacks/reactjs.svg",size:"lg"}),t("div",E,[e(i,{as:"h3",size:"md",weight:"medium",lead:"none"},{default:a(()=>[l(" Betty Lopez ")]),_:1}),e(p,{size:"sm",class:"text-muted-400"},{default:a(()=>[l(" bettylopez@tairo.io ")]),_:1})])]),H]),t("div",J,[t("div",K,[e(y,{class:"text-primary-500 h-12 w-12"}),t("div",M,[e(i,{as:"h3",size:"md",weight:"medium",lead:"none"},{default:a(()=>[l(" Tairo ")]),_:1}),e(p,{size:"xs",class:"text-muted-400"},{default:a(()=>[l(" Software company ")]),_:1})])]),O]),t("div",Q,[t("div",W,[t("table",G,[X,t("tbody",Y,[(c(!0),m(_,null,h(f(x),s=>(c(),m("tr",{key:s.name,class:"border-muted-200 dark:border-muted-700 border-b"},[t("td",Z,[t("div",tt,o(s.name),1),t("div",et,o(s.quantity)+" units at $"+o(s.rate),1)]),st,t("td",at,[t("div",ot,[e(g,{modelValue:s.quantity,"onUpdate:modelValue":k=>s.quantity=k,modelModifiers:{number:!0},type:"number",classes:{wrapper:"w-16"}},null,8,["modelValue","onUpdate:modelValue"])])]),t("td",dt," $"+o(s.rate),1),t("td",nt," $"+o((s.rate*s.quantity).toFixed(2)),1)]))),128))]),t("tfoot",null,[(c(!0),m(_,null,h(f(b),s=>(c(),m("tr",{key:s.label},[t("th",lt,o(s.label),1),t("th",it,o(s.label),1),t("td",{class:C(["pe-4 ps-3 pt-6 text-right sm:pe-6 md:pe-0",s.label==="Total"?"font-semibold text-lg text-muted-800 dark:text-muted-100":"text-sm text-muted-500 dark:text-muted-200/70"])}," $"+o(s.value.toFixed(2)),3)]))),128))])])])]),t("div",ct,[t("div",mt,[t("div",rt,[e(p,{size:"xs"},{default:a(()=>[l(" Payment terms are 14 days. Please be aware that according to the Late Payment of company Debts Acts, freelancers are entitled to claim a 00.00 late fee upon non-payment of debts after this time, at which point a new invoice will be submitted with the addition of this fee. If payment of the revised invoice is not received within a further 14 days, additional interest will be charged to the overdue account and a statutory rate of 8% plus Bank base of 0.5%, totalling 8.5%. Parties cannot contract out of the Act’s provisions. ")]),_:1})])])])])])]),_:1})])])}}});export{ft as default};
