import{E as b,o as s,e as c,f as i,d as z,ad as L,c as O,x as j,a0 as k,w as u,K as A,L as D,J as E,j as _,a5 as p,i as F,g as d,h as g,s as x,S as M,_ as P,l as H,bu as J}from"./entry.46c51c2c.js";import{_ as K}from"./IconChevronDown.026c076c.js";const T={},q={"aria-hidden":"true",viewBox:"0 0 24 24"},y=i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v14m-7-7h14"},null,-1),G=[y];function Q(m,h){return s(),c("svg",q,G)}const R=b(T,[["render",Q]]),U=["open"],W=["onClick"],X={class:"nui-accordion-header"},Y={key:0,class:"nui-accordion-dot"},Z={key:1,class:"nui-icon-outer"},oo={key:2,class:"nui-icon-outer"},no={class:"nui-accordion-content"},to=z({__name:"BaseAccordion",props:{items:{},openItems:{default:()=>[]},exclusive:{type:Boolean,default:!1},shape:{default:void 0},action:{default:"dot"}},emits:["open"],setup(m,{emit:h}){const n=m,f=h,B=L(),v=O(()=>n.shape??B.nui.defaultShapes?.accordion),C={straight:"",rounded:"nui-accordion-rounded",smooth:"nui-accordion-smooth",curved:"nui-accordion-curved"},$={dot:"nui-accordion-dot",chevron:"nui-accordion-chevron",plus:"nui-accordion-plus"},e=j(n.openItems),r=o=>{const l=e.value.includes(o);if(n.exclusive){e.value.splice(0,e.value.length),l||(f("open",n.items[o]),e.value.push(o));return}l?e.value.splice(e.value.indexOf(o),1):(f("open",n.items[o]),e.value.push(o))};return(o,l)=>{const w=P,S=K,I=R,N=H,V=J;return s(),k(V,null,{default:u(()=>[(s(!0),c(A,null,D(o.items,(a,t)=>(s(),c("div",{key:t,class:E(["nui-accordion",[$[n.action],_(v)&&C[_(v)]]])},[i("details",{open:_(e)?.includes(t)??void 0,class:"nui-accordion-detail"},[p(o.$slots,"accordion-item",{item:a,index:t,toggle:r},()=>[i("summary",{class:"nui-accordion-summary",tabindex:"0",onClick:F(()=>r(t),["prevent"])},[p(o.$slots,"accordion-item-summary",{item:a,index:t,toggle:r},()=>[i("div",X,[d(w,{as:"h4",size:"sm",weight:"semibold",lead:"none",class:"nui-accordion-header-inner"},{default:u(()=>[g(x(a.title),1)]),_:2},1024),n.action==="dot"?(s(),c("div",Y)):n.action==="chevron"?(s(),c("div",Z,[d(S,{class:"nui-chevron-icon"})])):n.action==="plus"?(s(),c("div",oo,[d(I,{class:"nui-plus-icon"})])):M("",!0)])])],8,W),i("div",no,[p(o.$slots,"accordion-item-content",{item:a,index:t,toggle:r},()=>[d(N,{size:"md",lead:"tight"},{default:u(()=>[g(x(a.content),1)]),_:2},1024)])])])],8,U)],2))),128))]),_:3})}}});export{to as _};
