import{d as g,x as h,N as y,a2 as L,o as a,e as l,j as i,S as c,X as k,aj as B,f as d,g as w,w as x,a0 as T,s as C,T as F,n as N}from"./entry.f4bf1c86.js";const b={class:"nui-fullscreen-dropfile"},S={key:0,class:"nui-fullscreen-dropfile-outer"},V={class:"nui-fullscreen-dropfile-inner"},j={key:0,class:"nui-fullscreen-dropfile-container"},I={class:"nui-fullscreen-dropfile-content"},M={class:"nui-fullscreen-dropfile-label"},X=g({__name:"BaseFullscreenDropfile",props:{label:{default:"Drop your files"},icon:{default:""},filterFileDropped:{type:Function,default:()=>!0}},emits:["drop"],setup(_,{emit:E}){const o=_,D=E,e=h(!1);let t=0;function u(){t+=1,t===1&&(e.value=!0)}function f(){t-=1,t===0&&(e.value=!1)}function m(n){n.preventDefault()}function p(n){if(n.preventDefault(),e.value=!1,t=0,!n.dataTransfer)return;const r=n.dataTransfer,s=new DataTransfer;if(r){for(const v of r.files)o.filterFileDropped(v)&&s.items.add(v);D("drop",s.files)}}return y(()=>{document.documentElement.addEventListener("dragenter",u,!1),document.documentElement.addEventListener("dragleave",f,!1),document.documentElement.addEventListener("dragover",m,!1),document.documentElement.addEventListener("drop",p)}),L(()=>{document.documentElement.removeEventListener("dragenter",u),document.documentElement.removeEventListener("dragleave",f),document.documentElement.removeEventListener("dragover",m),document.documentElement.removeEventListener("drop",p)}),(n,r)=>{const s=N;return a(),l("div",b,[i(e)?(a(),l("div",S)):c("",!0),k(d("div",V,[w(F,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-0 opacity-0","enter-to-class":"transform scale-1 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-1 opacity-100","leave-to-class":"transform scale-0 opacity-0"},{default:x(()=>[i(e)?(a(),l("div",j,[d("div",I,[o.icon?(a(),T(s,{key:0,name:o.icon,class:"nui-fullscreen-dropfile-icon"},null,8,["name"])):c("",!0),d("div",M,C(o.label),1)])])):c("",!0)]),_:1})],512),[[B,i(e)]])])}}});export{X as _};
