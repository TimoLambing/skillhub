import{d as f,a8 as v,r as _,a9 as b,o as n,a as r,h as s,t as h,M as V,b as d,Q as y,b6 as R,W as k,C as g,$ as B,y as z,z as C}from"./entry.f45bc14e.js";const M={class:"group/nui-radio-headless relative"},N=["for"],P={class:"relative"},$=["id","value","name"],D=f({inheritAttrs:!1,__name:"BaseRadioHeadless",props:{id:{default:void 0},value:{default:void 0},modelValue:{default:void 0},name:{default:void 0},label:{default:void 0}},emits:["update:modelValue"],setup(u,{expose:p,emit:m}){const e=u,a=v(e,"modelValue",m,{passive:!0}),o=_();p({el:o});const l=b(()=>e.id);return(t,i)=>(n(),r("div",M,[t.label?(n(),r("label",{key:0,for:s(l),class:"text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm"},h(e.label),9,N)):V("",!0),d("div",P,[y(d("input",k({id:s(l),ref_key:"inputRef",ref:o,"onUpdate:modelValue":i[0]||(i[0]=c=>g(a)?a.value=c:null)},t.$attrs,{type:"radio",value:e.value,name:e.name,class:"peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"}),null,16,$),[[R,s(a)]]),B(t.$slots,"default",z(C({value:s(a)})))])]))}});export{D as _};