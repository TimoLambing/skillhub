import{d as h,ad as B,c as n,o as t,e as k,a5 as C,a0 as s,w as l,g as y,S as r,f as u,s as d,h as w,a1 as I,j as a,ap as S,J as z,I as N,n as T,v as V}from"./entry.46c51c2c.js";import{_ as $}from"./BaseIconBox.vue.f6c11dd1.js";const b={class:"flex flex-col items-start"},A={class:"text-muted-800 font-heading text-sm font-medium leading-none dark:text-white"},E=h({__name:"BaseTreeSelectItem",props:{value:{default:()=>({})},level:{default:1},toggle:{type:Function,default:void 0},shape:{default:void 0}},setup(i){const e=i,m=B(),o=n(()=>e.shape??m.nui?.defaultShapes?.autocompleteItem),p=n(()=>e.toggle?"button":"div"),f=n(()=>e.toggle?{type:"button",onClick:e.toggle,class:"nui-focus"}:{});return(c,D)=>{const _=N,v=T,x=$,g=V;return t(),k("div",{class:z(["flex items-center p-2 ps-0",[a(o)==="rounded"&&"rounded-md",a(o)==="curved"&&"rounded-lg",a(o)==="full"&&"rounded-xl"]])},[C(c.$slots,"default"),(t(),s(S(a(p)),I({class:"flex items-center"},a(f)),{default:l(()=>[e.value.media&&!e.value.icon?(t(),s(_,{key:0,src:e.value.media,size:"xs",class:"me-2"},null,8,["src"])):e.value.icon&&!e.value.media?(t(),s(x,{key:1,size:"xs",shape:"full"},{default:l(()=>[y(v,{name:e.value.icon,class:"h-4 w-4"},null,8,["name"])]),_:1})):r("",!0),u("div",b,[u("div",A,d(e.value.name),1),c.value.text?(t(),s(g,{key:0,size:"xs",class:"text-muted-400"},{default:l(()=>[w(d(e.value.text),1)]),_:1})):r("",!0)])]),_:1},16))],2)}}});export{E as _};
