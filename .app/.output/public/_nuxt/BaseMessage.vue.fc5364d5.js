import{d as k,a7 as b,c as m,o as a,a as t,h as s,V as B,M as c,b as S,$ as d,f as v,t as C,D as p,e as w,l as V}from"./entry.a9943f59.js";const x={key:0,class:"nui-message-icon-outer"},N={class:"nui-message-inner-text"},D=k({__name:"BaseMessage",props:{type:{default:"success"},shape:{default:void 0},message:{default:""},icon:{type:[Boolean,String],default:!1},closable:{type:Boolean,default:!1},closeIcon:{default:"lucide:x"}},emits:["close"],setup(g,{emit:f}){const e=g,y=b(),n=m(()=>e.shape??y.nui.defaultShapes?.message),i={straight:"",rounded:"nui-message-rounded",smooth:"nui-message-smooth",curved:"nui-message-curved",full:"nui-message-full"},h={default:"nui-message-default",muted:"nui-message-muted",primary:"nui-message-primary",info:"nui-message-info",success:"nui-message-success",warning:"nui-message-warning",danger:"nui-message-danger"},_={info:"akar-icons:info-fill",warning:"ci:warning",danger:"ph:warning-octagon-fill",success:"carbon:checkmark-filled",primary:"",muted:"",default:""},l=m(()=>typeof e.icon=="string"?e.icon:_[e.type]);return(o,u)=>{const r=V;return a(),t("div",{class:p(["nui-message",[s(n)&&i[s(n)],h[e.type]]])},[e.icon?(a(),t("div",x,[s(l)?(a(),B(r,{key:0,name:s(l),class:"nui-message-icon"},null,8,["name"])):c("",!0)])):c("",!0),S("span",N,[d(o.$slots,"default",{},()=>[v(C(e.message),1)])]),e.closable?(a(),t("button",{key:1,type:"button",tabindex:"0",class:p(["nui-message-close",[s(n)&&i[s(n)]]]),onClick:u[0]||(u[0]=$=>f("close"))},[d(o.$slots,"close-button",{},()=>[w(r,{name:o.closeIcon,class:"nui-close-icon"},null,8,["name"])])],2)):c("",!0)],2)}}});export{D as _};