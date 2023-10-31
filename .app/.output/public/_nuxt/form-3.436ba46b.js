import{d as P,x as u,o as x,e as f,f as e,g as t,w as l,h as d,i as U,J as _,j as o,S as V,H as b,_ as M,v as j,n as Y,l as N,y as T,q as I,m as A}from"./entry.f4bf1c86.js";import{_ as D}from"./BaseButtonAction.vue.bd077ce3.js";import{_ as E}from"./BaseSelect.vue.5ca5db89.js";import{_ as R}from"./DemoCreditCardReal.vue.aa540724.js";import{_ as H}from"./BaseRadio.vue.a459157d.js";import{_ as J}from"./BaseCheckbox.vue.a0502851.js";import"./IconChevronDown.62884c96.js";import"./TairoLogo.cf38a86a.js";import"./IconCheck.47ba7fa2.js";const O={class:"grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3"},q={class:"lg:col-span-2"},F={class:"border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5"},G={class:"ms-auto"},K=e("span",null,"Cancel",-1),L=e("label",{class:"ms-4 text-sm font-medium"},"PayPal",-1),Q={key:0,class:"flex items-center justify-between gap-4 p-8 pt-4"},W={class:"max-w-xs"},X={class:"grow"},Z={class:"border-muted-200 dark:border-muted-700 border-t"},ee=e("label",{class:"ms-4 text-sm font-medium"},"Credit Card",-1),te={key:0,class:"grid grid-cols-2 gap-4 p-8 pt-4"},oe={class:"grid grid-cols-12 gap-4"},se={class:"col-span-12"},le={class:"col-span-12"},ae={class:"col-span-12"},ne={class:"grid gap-4 sm:grid-cols-3"},de=e("option",{value:""},"Month",-1),ie=e("option",{value:"01"},"01",-1),re=e("option",{value:"02"},"02",-1),me=e("option",{value:"03"},"03",-1),ce=e("option",{value:"04"},"04",-1),ue=e("option",{value:"05"},"05",-1),_e=e("option",{value:"06"},"06",-1),pe=e("option",{value:"07"},"07",-1),ve=e("option",{value:"08"},"08",-1),he=e("option",{value:"09"},"09",-1),xe=e("option",{value:"10"},"10",-1),fe=e("option",{value:"11"},"11",-1),be=e("option",{value:"12"},"12",-1),ye=e("option",{value:""},"Year",-1),ge=e("option",{value:"23"},"23",-1),we=e("option",{value:"24"},"24",-1),Ve=e("option",{value:"25"},"25",-1),ke=e("option",{value:"26"},"26",-1),Ce=e("option",{value:"27"},"27",-1),$e=e("option",{value:"28"},"28",-1),Be=e("option",{value:"29"},"29",-1),ze=e("option",{value:"30"},"30",-1),Se={class:"mt-6"},Pe={class:"border-muted-200 dark:border-muted-700 border-b px-8 py-5"},Ue={class:"px-8 pt-5"},Me={class:"mb-6"},je=e("label",{class:"nui-label pb-3 text-[0.825rem]"},"Billing cycle",-1),Ye={class:"flex items-center gap-6"},Ne={class:"flex items-center"},Te={class:"ms-auto"},Ie=e("span",{class:"font-semibold"},"$29.99",-1),Ae=e("span",{class:"text-muted-500 dark:text-muted-400 text-xs"},"/mo",-1),De={class:"mt-4 px-8 pb-5"},Ee={class:"flex items-end justify-between"},Re=e("span",{class:"font-semibold"},"$2.99",-1),He={class:"border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5"},Je={class:"flex items-end justify-between"},Oe=e("span",{class:"font-semibold"},"$0.00",-1),qe={class:"my-4 flex items-center px-8"},Fe={class:"flex flex-col px-8 pt-4"},st=P({__name:"form-3",setup(Ge){const n=u({name:void 0,number:void 0,expiryYear:void 0,expiryMonth:void 0,cvc:void 0}),i=u("cc"),m=u("monthly"),p=u(!1);return(k,s)=>{const c=M,r=j,y=Y,C=D,$=N,v=T,h=I,g=E,B=R,w=H,z=J,S=A;return x(),f("form",O,[e("div",q,[t(v,null,{default:l(()=>[e("div",F,[e("div",null,[t(c,{as:"h3",size:"sm",weight:"medium"},{default:l(()=>[d(" Payment method ")]),_:1}),t(r,{size:"xs",class:"text-muted-400"},{default:l(()=>[d("Select a payment method")]),_:1})]),e("div",G,[t(C,{onClick:s[0]||(s[0]=U(a=>k.$router.back(),["prevent"]))},{default:l(()=>[t(y,{name:"lucide:arrow-left",class:"h-3 w-3"}),K]),_:1})])]),e("div",null,[e("div",{role:"button",class:_(["flex cursor-pointer items-center px-8 py-5",o(i)==="paypal"?"bg-muted-50 dark:bg-muted-900/60":""]),onClick:s[1]||(s[1]=a=>i.value="paypal")},[e("div",{class:_(["dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2 transition-colors",o(i)==="paypal"?"bg-primary-600 ring-primary-600":"ring-muted-400"])},null,2),L],2),o(i)==="paypal"?(x(),f("div",Q,[e("div",W,[t(c,{as:"h3",size:"md",weight:"medium",class:"mb-2"},{default:l(()=>[d(" Pay with PayPal ")]),_:1}),t($,{size:"sm",class:"text-muted-400"},{default:l(()=>[d(' After clicking on "start subscription", you will be redirected to PayPal website to complete your purchase securely. ')]),_:1})]),e("div",X,[t(v,{shape:"curved",elevated:"",class:"mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"},{default:l(()=>[t(y,{name:"logos:paypal",class:"h-12 w-12"})]),_:1})])])):V("",!0)]),e("div",Z,[e("div",{role:"button",class:_(["flex cursor-pointer items-center px-8 py-5",o(i)==="cc"?"bg-muted-50 dark:bg-muted-900/60":""]),onClick:s[2]||(s[2]=a=>i.value="cc")},[e("div",{class:_(["dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2",o(i)==="cc"?"bg-primary-600 ring-primary-600":"ring-muted-400"])},null,2),ee],2),o(i)==="cc"?(x(),f("div",te,[e("div",null,[e("form",null,[e("div",oe,[e("div",se,[t(h,{modelValue:o(n).name,"onUpdate:modelValue":s[3]||(s[3]=a=>o(n).name=a),label:"Name on card",placeholder:"ex: John Doe"},null,8,["modelValue"])]),e("div",le,[t(h,{modelValue:o(n).number,"onUpdate:modelValue":s[4]||(s[4]=a=>o(n).number=a),label:"Card number",placeholder:"ex: 4242 4242 4242 4242"},null,8,["modelValue"])]),e("div",ae,[e("div",ne,[e("div",null,[t(g,{modelValue:o(n).expiryMonth,"onUpdate:modelValue":s[5]||(s[5]=a=>o(n).expiryMonth=a),label:"Exp. month"},{default:l(()=>[de,ie,re,me,ce,ue,_e,pe,ve,he,xe,fe,be]),_:1},8,["modelValue"])]),e("div",null,[t(g,{modelValue:o(n).expiryYear,"onUpdate:modelValue":s[6]||(s[6]=a=>o(n).expiryYear=a),label:"Exp. year"},{default:l(()=>[ye,ge,we,Ve,ke,Ce,$e,Be,ze]),_:1},8,["modelValue"])]),e("div",null,[t(h,{modelValue:o(n).cvc,"onUpdate:modelValue":s[7]||(s[7]=a=>o(n).cvc=a),label:"CVC",placeholder:"ex: 239"},null,8,["modelValue"])])])])])])]),e("div",Se,[t(B,{name:o(n).name,number:o(n).number,"expiry-month":o(n).expiryMonth,"expiry-year":o(n).expiryYear,cvc:o(n).cvc},null,8,["name","number","expiry-month","expiry-year","cvc"])])])):V("",!0)])]),_:1})]),e("div",null,[t(v,{class:"pb-6"},{default:l(()=>[e("div",Pe,[t(c,{as:"h3",size:"sm",weight:"medium"},{default:l(()=>[d(" Order Summary ")]),_:1}),t(r,{size:"xs",class:"text-muted-400"},{default:l(()=>[d("Check your order details")]),_:1})]),e("div",Ue,[e("div",Me,[je,e("div",Ye,[t(w,{id:"demo-cycle-1",modelValue:o(m),"onUpdate:modelValue":s[8]||(s[8]=a=>b(m)?m.value=a:null),name:"monthly_billing",label:"Monthly",value:"monthly",color:"primary",classes:{label:"relative top-0.5 text-xs"}},null,8,["modelValue"]),t(w,{id:"demo-cycle-2",modelValue:o(m),"onUpdate:modelValue":s[9]||(s[9]=a=>b(m)?m.value=a:null),name:"yearly_billing",label:"Yearly",value:"yearly",color:"primary",classes:{label:"relative top-0.5 text-xs"}},null,8,["modelValue"])])]),e("div",Ne,[t(c,{as:"h3",size:"sm",weight:"medium",lead:"none"},{default:l(()=>[d(" Fasterio pro plan ")]),_:1}),e("div",Te,[t(r,{size:"sm",class:"text-muted-800 dark:text-muted-100"},{default:l(()=>[Ie,Ae]),_:1})])]),t(r,{class:"text-muted-500 dark:text-muted-400 mt-2 text-xs"},{default:l(()=>[d("Save 20% with annual billing")]),_:1})]),e("div",De,[e("div",Ee,[t(c,{as:"h3",size:"sm",weight:"medium",lead:"none"},{default:l(()=>[d(" Taxes ")]),_:1}),t(r,{size:"sm",class:"text-muted-800 dark:text-muted-100"},{default:l(()=>[Re]),_:1})])]),e("div",He,[e("div",Je,[t(c,{as:"h3",size:"sm",weight:"medium",lead:"none"},{default:l(()=>[d(" To pay today (USD) ")]),_:1}),t(r,{size:"md",class:"text-muted-800 dark:text-muted-100"},{default:l(()=>[Oe]),_:1})]),t(r,{class:"text-muted-500 dark:text-muted-400 mt-2 text-xs"},{default:l(()=>[d("Starting from next month: $29.99/mo.")]),_:1})]),e("div",qe,[t(z,{modelValue:o(p),"onUpdate:modelValue":s[10]||(s[10]=a=>b(p)?p.value=a:null),color:"primary",shape:"full",label:"I agree to the Terms Of Service",classes:{label:"relative top-0.5 text-xs"}},null,8,["modelValue"])]),e("div",Fe,[t(S,{color:"primary",class:"!h-12 w-full"},{default:l(()=>[d("Start Subscription")]),_:1})])]),_:1})])])}}});export{st as default};