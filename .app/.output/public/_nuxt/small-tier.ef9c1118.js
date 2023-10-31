import{d as x,x as u,o as _,e as v,f as e,g as a,w as t,h as d,j as f,K as g,m as h,$ as w,bo as k}from"./entry.ce48552a.js";const C={class:"flex gap-x-2"},b={class:"flex items-end gap-4"},$={class:"flex items-end gap-4"},M={class:"flex w-full items-center justify-between p-4 md:p-6"},j=e("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Small dialog ",-1),B=e("div",{class:"p-4 md:p-6"},[e("div",{class:"mx-auto w-full max-w-xs text-center"},[e("div",{class:"relative mx-auto mb-4 flex h-24 w-24"},[e("img",{src:"https://media.cssninja.io/shuriken/avatars/3.svg",class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})]),e("h3",{class:"font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"}," New Invite "),e("p",{class:"font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])],-1),N={class:"p-4 md:p-6"},y={class:"flex gap-x-2"},V={class:"flex w-full items-center justify-between p-4 md:p-6"},z=e("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Medium dialog ",-1),A=e("div",{class:"p-4 md:p-6"},[e("div",{class:"mx-auto w-full max-w-xs text-center"},[e("div",{class:"relative mx-auto mb-4 flex h-24 w-24"},[e("img",{src:"https://media.cssninja.io/shuriken/avatars/7.svg",class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})]),e("h3",{class:"font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"}," New Invite "),e("p",{class:"font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. ")])],-1),D={class:"p-4 md:p-6"},I={class:"flex gap-x-2"},T=x({__name:"small-tier",setup(L){const c=u(!1);function i(){c.value=!1}function p(){c.value=!0}const o=u(!1);return(O,s)=>{const l=h,m=w,r=k;return _(),v(g,null,[e("div",C,[e("div",b,[a(l,{onClick:p},{default:t(()=>[d("Small dialog")]),_:1})]),e("div",$,[a(l,{onClick:s[0]||(s[0]=n=>o.value=!0)},{default:t(()=>[d("Medium dialog")]),_:1})])]),a(r,{open:f(c),size:"sm",onClose:i},{header:t(()=>[e("div",M,[j,a(m,{onClick:i})])]),footer:t(()=>[e("div",N,[e("div",y,[a(l,{onClick:i},{default:t(()=>[d("Decline")]),_:1}),a(l,{color:"primary",flavor:"solid",onClick:i},{default:t(()=>[d("Accept")]),_:1})])])]),default:t(()=>[B]),_:1},8,["open"]),a(r,{open:f(o),size:"md",onClose:s[4]||(s[4]=n=>o.value=!1)},{header:t(()=>[e("div",V,[z,a(m,{onClick:s[1]||(s[1]=n=>o.value=!1)})])]),footer:t(()=>[e("div",D,[e("div",I,[a(l,{onClick:s[2]||(s[2]=n=>o.value=!1)},{default:t(()=>[d("Decline")]),_:1}),a(l,{color:"primary",flavor:"solid",onClick:s[3]||(s[3]=n=>o.value=!1)},{default:t(()=>[d(" Accept ")]),_:1})])])]),default:t(()=>[A]),_:1},8,["open"])],64)}}});export{T as default};
