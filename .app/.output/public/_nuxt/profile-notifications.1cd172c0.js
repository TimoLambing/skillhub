import{d as w,bb as y,r as C,o as s,a as r,b as e,h as i,F as h,E as x,e as n,w as o,f as g,t as a,D as v,V as z,q as B,m as N,s as V}from"./entry.a9943f59.js";import{_ as $}from"./BaseAvatar.vue.aa11e2f4.js";import{u as D}from"./fetch.45bb61c5.js";import{g as F}from"./colors.cbccbc0c.js";const R={class:"min-h-screen overflow-hidden"},A={class:"mx-auto w-full max-w-4xl pt-12"},E={key:0},K={key:1,class:""},L={class:"ltablet:block hidden w-24 text-right lg:block"},T={class:"dark:bg-muted-800 relative z-10 h-4 w-4 shrink-0 rounded-full bg-white"},q={class:"flex w-full items-center gap-4"},J={class:"text-muted-800 dark:text-muted-100"},S={class:"text-muted-500 dark:text-muted-400"},j={class:"text-muted-500 dark:text-muted-400"},G={class:"ltablet:hidden lg:hidden"},H=e("span",{class:"ltablet:hidden px-2 lg:hidden"},"·",-1),I={class:"ms-auto hidden items-center gap-3 sm:flex"},ee=w({__name:"profile-notifications",async setup(M){let l,u;const{data:_,pending:O,error:P,refresh:Q}=([l,u]=y(()=>D("/api/profile/notifications","$2JDdKh8vK6")),l=await l,u(),l),d=C();return _.value&&(d.value=_.value),(f,U)=>{const c=B,m=$,b=N,k=V;return s(),r("div",R,[e("div",A,[i(d).length===0?(s(),r("div",E)):(s(),r("div",K,[(s(!0),r(h,null,x(i(d),t=>(s(),r("div",{key:t.id,class:"ltablet:after:start-[104px] after:border-muted-300 dark:after:border-muted-800 relative flex items-center gap-4 after:absolute after:start-[8px] after:top-3 after:h-full after:w-px after:border-e-2 after:content-[''] lg:after:start-[104px] [&:not(:first-child)]:pt-3"},[e("div",L,[n(c,{size:"xs",class:"text-muted-400"},{default:o(()=>[g(a(t.date),1)]),_:2},1024)]),e("div",T,[e("div",{class:v(["h-4 w-4 rounded-full border-2 border-current",("getRandomColor"in f?f.getRandomColor:i(F))()])},null,2)]),n(k,{class:"p-4"},{default:o(()=>[e("div",q,[e("div",{class:v(["h-2 w-2 shrink-0 rounded-full",t.status===0?"bg-primary-500":"bg-muted-300 dark:bg-muted-700/50"])},null,2),n(m,{src:t.user.src,size:"sm"},null,8,["src"]),e("div",null,[n(c,{size:"sm",lead:"tight"},{default:o(()=>[e("span",J,a(t.user.name)+" ",1),e("span",S,a(t.target.text)+" ",1),n(b,{to:t.target.url,class:"text-primary-500 underline-offset-4 hover:underline"},{default:o(()=>[g(a(t.target.name),1)]),_:2},1032,["to"]),e("span",j," "+a(t.target.type),1)]),_:2},1024),n(c,{size:"xs",class:"text-muted-400"},{default:o(()=>[e("span",G,a(t.date),1),H,e("span",null,a(t.time),1)]),_:2},1024)]),e("div",I,[(s(!0),r(h,null,x(t.people,p=>(s(),z(m,{key:p.name,src:p.src,size:"xxs"},null,8,["src"]))),128))])])]),_:2},1024)]))),128))]))])])}}});export{ee as default};
