import{d as R,o as c,e as f,f as e,g as s,s as m,I as G,a7 as q,B as Q,x as $,G as g,N as U,a8 as V,a9 as W,R as X,w as h,i as N,j as a,a0 as P,S as C,K as Y,L as ee,J as te,V as se,aa as oe,p as ne,n as ie,_ as ae,Z as le,y as re}from"./entry.46c51c2c.js";import ce from"./TairoLogo.5f5c57f5.js";import{_ as pe}from"./DemoAccountMenu.vue.764f522d.js";import{u as de}from"./composables.5fb122dd.js";const ue={class:"flex flex-col gap-3"},me={class:"relative"},_e={class:"flex items-center gap-2"},ge={class:"font-sans"},ve={class:"text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"},he={class:"text-muted-400 text-xs"},fe={class:"text-muted-500 dark:text-muted-400 font-sans text-xs"},xe=R({__name:"DemoMapMarker",props:{logo:{default:void 0},name:{default:void 0},description:{default:void 0},openingCount:{default:void 0}},setup(L){const p=L;return(z,v)=>{const d=G;return c(),f("div",ue,[e("div",me,[e("div",_e,[s(d,{size:"xs",src:p.logo},null,8,["src"]),e("div",ge,[e("h4",ve,m(p.name),1),e("p",he," Open until "+m(p.openingCount),1)])])]),e("div",fe,[e("p",null,m(p.description),1)])])}}});const ye={class:"relative"},be={class:"bg-muted-100 dark:bg-muted-900 ltablet:flex-row flex min-h-screen flex-col lg:flex-row"},we={class:"ltablet:h-screen ltablet:w-20 ltablet:border-r border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-10 h-16 w-full bg-white lg:h-screen lg:w-20 lg:border-r"},ke={class:"ltablet:flex-col flex h-full justify-between lg:flex-col"},Ce={class:"ltablet:flex-col flex lg:flex-col"},Le={class:"ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"},je={class:"ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"},Me={class:"ltablet:flex-col ltablet:pe-0 flex pe-4 lg:flex-col lg:pe-0"},$e={class:"flex h-16 w-full items-center justify-center"},Pe={class:"flex h-16 w-full items-center justify-center"},ze={class:"ltablet:flex hidden h-16 w-full items-center justify-center lg:flex"},Fe={class:"ltablet:hidden flex h-16 w-full items-center justify-center lg:hidden"},Ee={key:0,class:"ltablet:h-auto relative h-96 grow lg:h-auto"},Te={class:"ltablet:w-96 ltablet:h-screen dark:bg-muted-800 h-[calc(100vh_-_428px)] w-full shrink-0 bg-white lg:h-screen lg:w-96"},Se={class:"relative z-10 flex h-16 w-full items-center justify-between px-6"},Be=e("span",{class:"text-muted-800 dark:text-white"},"Locations",-1),Ae={class:"ltablet:h-[calc(100%_-_64px)] nui-slimscroll h-[calc(100vh_-_492px)] overflow-y-auto p-6 lg:h-[calc(100%_-_64px)]"},De=e("span",{class:"text-muted-400"},"Recent Locations",-1),Ve={class:"ptablet:flex-none ptablet:grid ptablet:grid-cols-2 ptablet:pb-10 flex flex-col gap-4"},Ne={class:"relative"},Re={class:"relative"},Ge={class:"mb-3 flex items-center gap-2"},He={class:"font-sans"},Ie={class:"text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"},Ke={class:"text-muted-400 text-sm"},Oe={class:"text-muted-500 dark:text-muted-400 mb-4 font-sans text-sm"},Je={class:"flex items-center justify-between"},Ze={class:"flex gap-1"},qe={class:"relative"},Qe={class:"text-muted-400 flex items-center gap-1 font-sans text-sm"},Ue={class:"dark-inverted"},We={key:1,class:"ltablet:h-auto relative h-96 grow lg:h-auto"},st=R({__name:"AddonMapboxPanel",props:{reversed:{type:Boolean}},setup(L){const p=L,{open:z}=q(),{primary:v}=Q(),d=de(),i=$(),x=$(),j=$(""),y=g(),b=g(),w=g(),t=g(),M=g(),F=g();let _;const E={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Fast Pizza",logo:"/img/icons/logos/fastpizza.svg",distance:.3,openingCount:"6pm",phone:"+1 555 456-5659",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.038659,38.931567]}},{type:"Feature",properties:{name:"Envato",logo:"/img/icons/logos/envato.svg",distance:.8,openingCount:"5pm",phone:"+1 555 154-4568",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.003168,38.894651]}},{type:"Feature",properties:{name:"Lipflow",logo:"/img/icons/logos/lipflow.svg",distance:1.2,openingCount:"8pm",phone:"+1 555 456-7897",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.090372,38.881189]}},{type:"Feature",properties:{name:"Metamovies",logo:"/img/icons/logos/metamovies.svg",distance:.5,openingCount:"11pm",phone:"+1 555 456-5659",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.111561,38.882342]}},{type:"Feature",properties:{name:"Slicer",logo:"/img/icons/logos/slicer.svg",distance:.2,openingCount:"4:30pm",phone:"+1 555 456-7568",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.052477,38.943951]}},{type:"Feature",properties:{name:"Drop",logo:"/img/icons/logos/drop.svg",distance:2.1,openingCount:"7pm",phone:"+1 555 456-5659",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.043444,38.909664]}},{type:"Feature",properties:{name:"Fresco",logo:"/img/icons/logos/fresco.svg",distance:.6,openingCount:"6pm",phone:"+1 555 456-5659",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.031706,38.914581]}},{type:"Feature",properties:{name:"Hairz",logo:"/img/icons/logos/hairz.svg",distance:.3,openingCount:"6pm",phone:"+1 555 755-3382",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.020945,38.878241]}},{type:"Feature",properties:{name:"Vego LLC",logo:"/img/icons/logos/vego.svg",distance:.3,openingCount:"9pm",phone:"+1 555 456-8984",website:"https://huro.cssninja.io",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam."},geometry:{type:"Point",coordinates:[-77.007481,38.876516]}}]};function H(){t.value&&(t.value.getSource("places")||(t.value.addSource("places",{type:"geojson",data:E}),t.value.addLayer({id:"places",type:"circle",source:"places",paint:{"circle-color":(d.value==="dark",v.value),"circle-radius":6,"circle-stroke-width":2,"circle-stroke-color":(d.value==="dark",v.value)}}),t.value.on("click","places",o=>{i.value=o.features[0],x.value=o.lngLat}),t.value.on("mouseenter","places",()=>{t.value&&(t.value.getCanvas().style.cursor="pointer")}),t.value.on("mouseleave","places",()=>{t.value&&(t.value.getCanvas().style.cursor="")})))}function T(o){i.value=void 0,i.value=o}const S=oe();return U(()=>{S.public.mapboxToken&&Promise.all([V(()=>import("./mapbox-gl.4352513a.js").then(o=>o.m),["./mapbox-gl.4352513a.js","./entry.46c51c2c.js","./entry.724a94ea.css"],import.meta.url).then(o=>o.default),V(()=>import("./mapbox-gl-geocoder.min.06857fbd.js").then(o=>o.m),["./mapbox-gl-geocoder.min.06857fbd.js","./entry.46c51c2c.js","./entry.724a94ea.css"],import.meta.url).then(o=>o.default)]).then(([o,r])=>{_=o,!(!y.value||!b.value)&&(_.accessToken=S.public.mapboxToken,t.value=new _.Map({container:y.value,style:d.value==="dark"?"mapbox://styles/mapbox/dark-v10":"mapbox://styles/mapbox/light-v10",center:[-77.04,38.907],zoom:12}),F.value=new r({accessToken:_.accessToken,mapboxgl:_,marker:!0}),t.value.on("style.load",()=>{function u(){if(!t.value?.isStyleLoaded()){setTimeout(u,1500);return}H()}u()}),b.value.appendChild(F.value.onAdd(t.value)))})}),W(()=>{if(!i.value||!w.value||!t.value)return;const o=i.value,{geometry:r,properties:u}=o,{name:k}=u,n=r.coordinates.slice();if(console.log("zooming at: ",u,n),x.value)for(;Math.abs(x.value.lng-n[0])>180;)n[0]+=x.value.lng>n[0]?360:-360;t.value.flyTo({center:n,zoom:15,bearing:0,essential:!0}),M.value&&M.value.remove(),M.value=new _.Popup().on("open",()=>{j.value=k}).on("close",()=>{j.value=""}).setLngLat(n).setHTML(w.value.innerHTML).addTo(t.value)},{flush:"post"}),X(()=>d.value==="dark",()=>{t.value&&(d.value==="dark"?t.value.setStyle("mapbox://styles/mapbox/dark-v10"):t.value.setStyle("mapbox://styles/mapbox/light-v10"))}),(o,r)=>{const u=ce,k=ne,n=ie,B=pe,A=xe,D=ae,I=le,K=G,O=re;return c(),f("div",ye,[e("div",be,[e("div",we,[e("div",ke,[e("div",Ce,[e("div",Le,[s(k,{to:"#",class:"flex items-center justify-center"},{default:h(()=>[s(u,{class:"text-primary-600 h-10"})]),_:1})]),e("div",je,[e("a",{href:"#",class:"text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",title:"Back",onClick:r[0]||(r[0]=N(l=>o.$router.back(),["prevent"]))},[s(n,{name:"lucide:arrow-left",class:"h-5 w-5"})])])]),e("div",Me,[e("div",$e,[e("button",{type:"button",class:"text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",title:"Search",onClick:r[1]||(r[1]=l=>a(z)("search"))},[s(n,{name:"ph:magnifying-glass-duotone",class:"h-5 w-5"})])]),e("div",Pe,[s(k,{to:"#",class:"text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",title:"Settings"},{default:h(()=>[s(n,{name:"ph:gear-six-duotone",class:"h-5 w-5"})]),_:1})]),e("div",ze,[s(B)]),e("div",Fe,[s(B,{horizontal:""})])])])]),p.reversed?C("",!0):(c(),f("div",Ee,[e("div",{ref_key:"mapElement",ref:y,class:"absolute inset-0 h-full w-full"},null,512),e("div",{ref_key:"geocoderElement",ref:b,class:"geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"},null,512),e("div",{ref_key:"popupElement",ref:w,style:{display:"none",visibility:"hidden"},class:"absolute"},[a(i)?(c(),P(A,{key:0,logo:a(i).properties.logo,name:a(i).properties.name,"opening-count":a(i).properties.openingCount,description:a(i).properties.description},null,8,["logo","name","opening-count","description"])):C("",!0)],512)])),e("div",Te,[e("div",Se,[s(D,{size:"xl",weight:"medium"},{default:h(()=>[Be]),_:1}),s(I)]),e("div",Ae,[s(D,{size:"xs",weight:"medium",class:"mb-4 uppercase tracking-wider"},{default:h(()=>[De]),_:1}),e("div",Ve,[(c(!0),f(Y,null,ee(E.features,(l,J)=>(c(),P(O,{key:J,class:te(["cursor-pointer p-6",[a(j)===l.properties.name&&"border-primary-500"]]),shape:"curved",tabindex:"0",role:"button",onKeydown:se(N(Z=>T(l),["prevent"]),["space"]),onClick:Z=>T(l)},{default:h(()=>[e("div",Ne,[e("div",Re,[e("div",Ge,[s(K,{size:"xs",src:l.properties.logo},null,8,["src"]),e("div",He,[e("h4",Ie,m(l.properties.name),1),e("p",Ke," Open until "+m(l.properties.openingCount),1)])])]),e("div",Oe,[e("p",null,m(l.properties.description),1)]),e("div",Je,[e("div",Ze,[s(n,{name:"uiw:star-on",class:"h-3 w-3 text-yellow-400"}),s(n,{name:"uiw:star-on",class:"h-3 w-3 text-yellow-400"}),s(n,{name:"uiw:star-on",class:"h-3 w-3 text-yellow-400"}),s(n,{name:"uiw:star-on",class:"h-3 w-3 text-yellow-400"}),s(n,{name:"uiw:star-on",class:"h-3 w-3 text-yellow-400"})]),e("div",qe,[e("div",Qe,[s(n,{name:"lucide:flag",class:"h-4 w-4"}),e("span",Ue,m(l.properties.distance)+" mile ",1)])])])])]),_:2},1032,["class","onKeydown","onClick"]))),128))])])]),p.reversed?(c(),f("div",We,[e("div",{ref_key:"mapElement",ref:y,class:"absolute inset-0 h-full w-full"},null,512),e("div",{ref_key:"geocoderElement",ref:b,class:"geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"},null,512),e("div",{ref_key:"popupElement",ref:w,style:{display:"none",visibility:"hidden"},class:"absolute"},[a(i)?(c(),P(A,{key:0,logo:a(i).properties.logo,name:a(i).properties.name,"opening-count":a(i).properties.openingCount,description:a(i).properties.description},null,8,["logo","name","opening-count","description"])):C("",!0)],512)])):C("",!0)])])}}});export{st as _};
