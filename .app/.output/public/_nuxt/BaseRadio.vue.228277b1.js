import{d as y,r as b,a8 as h,a9 as V,o as r,a as l,b as a,Q as B,b9 as k,h as t,W as w,C as R,D as s,$ as C,f as D,t as c,M as p}from"./entry.a9943f59.js";const N={class:"nui-radio-outer"},S=["id","value"],$={class:"nui-radio-label-wrapper"},M=["for"],x={key:1,class:"nui-radio-error"},z=y({inheritAttrs:!1,__name:"BaseRadio",props:{id:{default:void 0},value:{default:void 0},modelValue:{default:void 0},label:{default:void 0},error:{type:[String,Boolean],default:void 0},color:{default:void 0},classes:{default:()=>({})}},emits:["update:modelValue"],setup(f,{expose:v,emit:m}){const e=f,d=b(),o=h(e,"modelValue",m,{passive:!0}),_={default:"nui-radio-default",light:"nui-radio-light",muted:"nui-radio-muted",primary:"nui-radio-primary",info:"nui-radio-info",success:"nui-radio-success",warning:"nui-radio-warning",danger:"nui-radio-danger"};v({el:d});const n=V(()=>e.id);return(i,u)=>(r(),l("div",{class:s(["nui-radio",[e.color&&_[e.color],e.classes?.wrapper]])},[a("div",N,[B(a("input",w({id:t(n),ref_key:"inputRef",ref:d,"onUpdate:modelValue":u[0]||(u[0]=g=>R(o)?o.value=g:null)},i.$attrs,{type:"radio",value:e.value,class:"nui-radio-input"}),null,16,S),[[k,t(o)]]),a("div",{class:s([e.classes?.inputBg,"nui-radio-inner"])},null,2),a("div",{class:s([e.classes?.inputDot,"nui-radio-dot"])},null,2)]),a("div",$,[e.label||"default"in i.$slots?(r(),l("label",{key:0,for:t(n),class:s([e.classes?.label,"nui-radio-label-text"])},[C(i.$slots,"default",{},()=>[D(c(e.label),1)])],10,M)):p("",!0),e.error&&typeof e.error=="string"?(r(),l("div",x,c(e.error),1)):p("",!0)])],2))}});export{z as _};