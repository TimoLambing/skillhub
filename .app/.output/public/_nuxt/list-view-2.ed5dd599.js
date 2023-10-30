import{d as I,bc as j,a as q,c as w,x as v,R as z,be as A,o as l,e as n,g as s,w as a,j as m,H as F,f as e,bs as H,K as U,L as J,q as K,bt as S,a0 as W,h as y,s as r,J as i,S as _,_ as D,n as E,l as G,m as M,y as O}from"./entry.fcfe2dbb.js";import{_ as Q}from"./BasePagination.vue.8e1ed2e3.js";import{_ as X}from"./TairoContentWrapperTabbed.vue.028220c6.js";import{u as Y}from"./fetch.5bcc4c4b.js";import{_ as Z,a as ee}from"./placeholder-search-2-dark.c9378203.js";const se=""+globalThis.__publicAssetsURL("img/illustrations/placeholders/flat/placeholder-having-coffee.svg"),te=""+globalThis.__publicAssetsURL("img/illustrations/placeholders/flat/placeholder-having-coffee-dark.svg"),ae={key:0},oe=e("img",{class:"block dark:hidden",src:Z,alt:"Placeholder image"},null,-1),le=e("img",{class:"hidden dark:block",src:ee,alt:"Placeholder image"},null,-1),ne={key:1,class:"space-y-4"},ce={class:"flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"},re=["src","alt"],ie={class:"flex flex-col gap-2 text-left sm:flex-row sm:items-center"},de={class:"flex items-center gap-2"},me={class:"text-primary-500 my-2 flex items-center gap-2"},_e={class:"font-sans text-xs"},ue=e("span",{class:"text-muted-400"},"·",-1),pe={class:"font-sans text-xs"},he=e("span",{class:"text-muted-400"},"·",-1),fe={class:"font-sans text-xs"},xe={class:"text-muted-400 mt-auto flex items-center gap-6"},ge={key:0,class:"flex items-center gap-1"},we=e("span",{class:"font-sans text-xs"},"Parking",-1),ve={key:1,class:"flex items-center gap-1"},ye=e("span",{class:"font-sans text-xs"},"Wifi",-1),ke={key:2,class:"flex items-center gap-1"},be=e("span",{class:"font-sans text-xs"},"Heater",-1),Be={key:3,class:"flex items-center gap-1"},Pe=e("span",{class:"font-sans text-xs"},"Cleaning",-1),$e={class:"ptablet:flex-col mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4"},Ce=e("span",null,"Book Now",-1),Te={class:"mt-6"},Re=e("img",{class:"block dark:hidden",src:se,alt:"Placeholder image"},null,-1),Ve=e("img",{class:"hidden dark:block",src:te,alt:"Placeholder image"},null,-1),Ue=I({__name:"list-view-2",async setup(Le){let d,u;const k=j(),b=q(),B=w(()=>parseInt(k.query.page??"1")),c=v(""),p=v(10);z([c,p],()=>{b.push({query:{page:void 0}})});const P=w(()=>({filter:c.value,perPage:p.value,page:B.value})),{data:h,pending:$,error:Ne,refresh:Ie}=([d,u]=A(()=>Y("/api/rentals",{query:P},"$RzJ66B63K3")),d=await d,u(),d);return(je,f)=>{const C=K,x=S,T=D,o=E,R=G,g=M,V=O,L=Q,N=X;return l(),n("div",null,[s(N,{labels:["Active","Inactive"]},{left:a(()=>[s(C,{modelValue:m(c),"onUpdate:modelValue":f[0]||(f[0]=t=>F(c)?c.value=t:null),icon:"lucide:search",placeholder:"Filter properties...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),"tab-1":a(()=>[e("div",null,[!m($)&&m(h)?.data.length===0?(l(),n("div",ae,[s(x,{title:"No matching results",subtitle:"Looks like we couldn't find any matching results for your search terms. Try other search terms."},{image:a(()=>[oe,le]),_:1})])):(l(),n("div",ne,[s(H,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:a(()=>[(l(!0),n(U,null,J(m(h)?.data,t=>(l(),W(V,{key:t.id,shape:"curved",class:"flex flex-col p-5 sm:flex-row sm:items-center"},{default:a(()=>[e("div",ce,[e("img",{class:"bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]",src:t.picture,alt:t.name,height:190,width:130},null,8,re),e("div",null,[e("div",ie,[s(T,{tag:"h3",size:"sm",weight:"medium",class:"text-muted-800 dark:text-muted-100"},{default:a(()=>[y(r(t.name),1)]),_:2},1024),e("div",de,[s(o,{name:"uiw:star-on",class:i(["h-3 w-3",t.rating>0?"text-yellow-400":"text-muted-400"])},null,8,["class"]),s(o,{name:"uiw:star-on",class:i(["h-3 w-3",t.rating>=2?"text-yellow-400":"text-muted-400"])},null,8,["class"]),s(o,{name:"uiw:star-on",class:i(["h-3 w-3",t.rating>=3?"text-yellow-400":"text-muted-400"])},null,8,["class"]),s(o,{name:"uiw:star-on",class:i(["h-3 w-3",t.rating>=4?"text-yellow-400":"text-muted-400"])},null,8,["class"]),s(o,{name:"uiw:star-on",class:i(["h-3 w-3",t.rating===5?"text-yellow-400":"text-muted-400"])},null,8,["class"])])]),s(R,{size:"xs",lead:"none",class:"text-muted-400 mt-3 flex gap-1 text-left text-sm sm:mt-0 sm:items-end"},{default:a(()=>[s(o,{name:"lucide:map-pin",class:"h-3 w-3"}),e("span",null,r(t.location),1)]),_:2},1024),e("div",me,[e("span",_e,r(t.details.rooms)+" rooms ",1),ue,e("span",pe,r(t.details.beds)+" beds ",1),he,e("span",fe,r(t.details.bathrooms)+" bathrooms ",1)]),e("div",xe,[t.amenities.parking?(l(),n("div",ge,[s(o,{name:"ph:car-duotone",class:"h-4 w-4"}),we])):_("",!0),t.amenities.wifi?(l(),n("div",ve,[s(o,{name:"ph:broadcast-duotone",class:"h-4 w-4"}),ye])):_("",!0),t.amenities.heater?(l(),n("div",ke,[s(o,{name:"ph:thermometer-duotone",class:"h-4 w-4"}),be])):_("",!0),t.amenities.cleaning?(l(),n("div",Be,[s(o,{name:"ph:waves-duotone",class:"h-4 w-4"}),Pe])):_("",!0)])])]),e("div",$e,[s(g,{class:"w-full sm:w-28"},{default:a(()=>[y("More Info")]),_:1}),s(g,{color:"primary",class:"w-full sm:w-28"},{default:a(()=>[Ce]),_:1})])]),_:2},1024))),128))]),_:1}),e("div",Te,[s(L,{total:100,"item-per-page":10,"total-items":100,current:1,limit:10,shape:"full"})])]))])]),"tab-2":a(()=>[s(x,{title:"There are no inactive properties.",subtitle:"Looks like there are no inactive properties to display. Please check your property settings."},{image:a(()=>[Re,Ve]),_:1})]),_:1})])}}});export{Ue as default};