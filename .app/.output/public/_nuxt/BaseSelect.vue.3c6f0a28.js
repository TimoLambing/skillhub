import{d as D,ad as I,c as h,x as R,ae as j,af as x,o as a,e as t,J as o,j as l,a5 as c,h as v,s as i,S as n,f as u,X as A,aK as M,a1 as P,H as E,g as p,ab as H,n as J}from"./entry.adb22a9c.js";import{_ as K}from"./IconChevronDown.90628913.js";const T=["for"],U={class:"nui-select-outer"},X=["id","disabled","readonly"],q={key:0,value:"",disabled:"",hidden:""},G=["for"],L={key:1,class:"nui-select-placeload"},W=D({inheritAttrs:!1,__name:"BaseSelect",props:{modelValue:{default:void 0},id:{default:void 0},shape:{default:void 0},label:{default:""},placeholder:{default:""},labelFloat:{type:Boolean},icon:{default:void 0},loading:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:[String,Boolean],default:!1},size:{default:"md"},contrast:{default:"default"},classes:{default:()=>({})}},emits:["update:modelValue"],setup(y,{expose:g,emit:B}){const e=y,S=B,k=I(),f=h(()=>e.shape??k.nui.defaultShapes?.input),V={straight:"",rounded:"nui-select-rounded",smooth:"nui-select-smooth",curved:"nui-select-curved",full:"nui-select-full"},$={sm:"nui-select-sm",md:"nui-select-md",lg:"nui-select-lg"},F={default:"nui-select-default","default-contrast":"nui-select-default-contrast",muted:"nui-select-muted","muted-contrast":"nui-select-muted-contrast"},m=R(),r=j(e,"modelValue",S,{passive:!0});g({el:m});const d=x(()=>e.id),b=h(()=>{if(!e.loading)return e.labelFloat?e.label:e.placeholder});return(s,_)=>{const C=H,N=J,w=K;return a(),t("div",{class:o(["nui-select-wrapper",[F[e.contrast],$[e.size],l(f)&&V[l(f)],e.error&&!e.loading&&"nui-select-error",e.loading&&"nui-select-loading",e.labelFloat&&"nui-select-label-float",e.icon&&"nui-has-icon",e.classes?.wrapper]])},["label"in s.$slots&&!e.labelFloat||e.label&&!e.labelFloat?(a(),t("label",{key:0,class:o(["nui-select-label",e.classes.label]),for:l(d)},[c(s.$slots,"label",{},()=>[v(i(e.label),1)])],10,T)):n("",!0),u("div",U,[A(u("select",P({id:l(d),ref_key:"selectRef",ref:m,"onUpdate:modelValue":_[0]||(_[0]=z=>E(r)?r.value=z:null)},s.$attrs,{disabled:e.disabled,readonly:e.readonly,class:["nui-select",e.classes.select]}),[l(b)?(a(),t("option",q,i(l(b)),1)):n("",!0),c(s.$slots,"default")],16,X),[[M,l(r)]]),"label"in s.$slots&&e.labelFloat||e.label&&e.labelFloat?(a(),t("label",{key:0,for:l(d),class:o(["nui-label-float",e.classes.label])},[c(s.$slots,"label",{},()=>[v(i(e.label),1)])],10,G)):n("",!0),e.loading?(a(),t("div",L,[p(C,{class:"nui-placeload"})])):n("",!0),e.icon?(a(),t("div",{key:2,class:o(["nui-select-icon",e.classes.icon])},[c(s.$slots,"icon",{},()=>[p(N,{class:"nui-select-icon-inner",name:e.icon},null,8,["name"])])],2)):n("",!0),u("div",{class:o(["nui-select-chevron",e.classes?.chevron])},[p(w,{class:"nui-select-chevron-inner"})],2),e.error&&typeof e.error=="string"?(a(),t("span",{key:3,class:o(["nui-select-error-text",e.classes?.error])},i(e.error),3)):n("",!0)])],2)}}});export{W as _};
