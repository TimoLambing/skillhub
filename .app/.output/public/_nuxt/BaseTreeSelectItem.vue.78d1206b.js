import{_ as h}from"./BaseAvatar.vue.aa11e2f4.js";import{d as B,a7 as k,c as n,o as t,a as C,$ as y,V as s,w as l,e as w,M as r,b as u,t as i,f as V,W as $,h as a,ag as z,D as I,l as N,q as S}from"./entry.a9943f59.js";import{_ as T}from"./BaseIconBox.vue.b471f921.js";const b={class:"flex flex-col items-start"},D={class:"text-muted-800 font-heading text-sm font-medium leading-none dark:text-white"},F=B({__name:"BaseTreeSelectItem",props:{value:{default:()=>({})},level:{default:1},toggle:{type:Function,default:void 0},shape:{default:void 0}},setup(d){const e=d,m=k(),o=n(()=>e.shape??m.nui?.defaultShapes?.autocompleteItem),p=n(()=>e.toggle?"button":"div"),f=n(()=>e.toggle?{type:"button",onClick:e.toggle,class:"nui-focus"}:{});return(c,A)=>{const _=h,v=N,x=T,g=S;return t(),C("div",{class:I(["flex items-center p-2 ps-0",[a(o)==="rounded"&&"rounded-md",a(o)==="curved"&&"rounded-lg",a(o)==="full"&&"rounded-xl"]])},[y(c.$slots,"default"),(t(),s(z(a(p)),$({class:"flex items-center"},a(f)),{default:l(()=>[e.value.media&&!e.value.icon?(t(),s(_,{key:0,src:e.value.media,size:"xs",class:"me-2"},null,8,["src"])):e.value.icon&&!e.value.media?(t(),s(x,{key:1,size:"xs",shape:"full"},{default:l(()=>[w(v,{name:e.value.icon,class:"h-4 w-4"},null,8,["name"])]),_:1})):r("",!0),u("div",b,[u("div",D,i(e.value.name),1),c.value.text?(t(),s(g,{key:0,size:"xs",class:"text-muted-400"},{default:l(()=>[V(i(e.value.text),1)]),_:1})):r("",!0)])]),_:1},16))],2)}}});export{F as _};