import{d as f,ae as m,af as w,x as b,o as n,e as a,f as e,a1 as y,j as t,s as l,J as k}from"./entry.ce48552a.js";const g=["for"],v={class:"nui-switch-thin-outer"},B=["id","checked"],V=e("span",{class:"nui-switch-thin-handle"},null,-1),x=e("span",{class:"nui-switch-thin-track"},null,-1),C={key:0,class:"nui-switch-thin-single-label"},S={key:1,class:"nui-switch-thin-dual-label"},j={class:"nui-switch-thin-label"},N={class:"nui-switch-thin-sublabel"},A=f({inheritAttrs:!1,__name:"BaseSwitchThin",props:{id:{default:void 0},modelValue:{type:Boolean,default:void 0},label:{default:void 0},sublabel:{default:void 0},color:{default:"primary"}},emits:["update:modelValue"],setup(h,{expose:r,emit:d}){const s=h,i=m(s,"modelValue",d,{passive:!0}),o=w(()=>s.id),p={primary:"nui-switch-thin-primary",info:"nui-switch-thin-info",success:"nui-switch-thin-success",warning:"nui-switch-thin-warning",danger:"nui-switch-thin-danger"},c=b();return r({el:c}),(_,u)=>(n(),a("label",{for:t(o),class:k(["nui-switch-thin",p[s.color]])},[e("span",v,[e("input",y({id:t(o),ref_key:"inputRef",ref:c,checked:t(i)},_.$attrs,{type:"checkbox",class:"nui-switch-thin-input peer",onChange:u[0]||(u[0]=$=>i.value=!t(i))}),null,16,B),V,x]),s.sublabel?(n(),a("span",S,[e("span",j,l(s.label),1),e("span",N,l(s.sublabel),1)])):(n(),a("span",C,l(s.label),1))],10,g))}});export{A as _};
