import{d as v,x as b,ae as _,af as h,o as u,e as i,j as s,s as V,S as k,f as n,X as x,ac as y,a1 as g,H as B,a5 as C,C as N,D as S}from"./entry.adb22a9c.js";const R={class:"group/nui-checkbox-headless relative"},D=["for"],P={class:"relative"},j=["id","true-value","false-value"],z=v({inheritAttrs:!1,__name:"BaseCheckboxHeadless",props:{label:{default:void 0},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},modelValue:{default:void 0},id:{default:void 0}},emits:["update:modelValue"],setup(d,{expose:c,emit:f}){const e=d,p=f,t=b(),a=_(e,"modelValue",p,{passive:!0});c({el:t});const l=h(()=>e.id);return(o,r)=>(u(),i("div",R,[e.label?(u(),i("label",{key:0,for:s(l),class:"text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm"},V(e.label),9,D)):k("",!0),n("div",P,[x(n("input",g({id:s(l),ref_key:"inputRef",ref:t,"onUpdate:modelValue":r[0]||(r[0]=m=>B(a)?a.value=m:null),"true-value":e.trueValue,"false-value":e.falseValue},o.$attrs,{class:"peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0",type:"checkbox"}),null,16,j),[[y,s(a)]]),C(o.$slots,"default",N(S({value:s(a)})))])]))}});export{z as _};
