import{E as f,o as v,e as p,f as l,d as y,ae as b,x as o,c as g,a9 as C,af as w,a1 as B,j as c,g as A,J as _}from"./entry.f4bf1c86.js";const L={},E={"aria-hidden":"true",viewBox:"0 0 52 52"},$=l("circle",{cx:"26",cy:"26",r:"25",fill:"none",stroke:"currentColor"},null,-1),I=l("path",{fill:"none",stroke:"currentColor",d:"m14.1 27.2 7.1 7.2 16.7-16.8"},null,-1),N=[$,I];function j(r,i){return v(),p("svg",E,N)}const q=f(L,[["render",j]]),R=["id","true-value","false-value","checked","value"],T=["for"],z=y({inheritAttrs:!1,__name:"BaseCheckboxAnimated",props:{value:{default:void 0},id:{default:void 0},modelValue:{default:!1},trueValue:{default:!0},falseValue:{default:!1},color:{default:void 0},classes:{default:()=>({wrapper:[],label:[],input:[]})}},emits:["update:modelValue"],setup(r,{emit:i}){const e=r,a=b(e,"modelValue",i,{passive:!0}),s=o(),m=o(),u=o(),n=g(()=>a.value===e.trueValue?!0:a.value===e.falseValue||e.value===void 0?!1:a.value.includes(e.value)),h={primary:"text-primary-500",info:"text-info-500",success:"text-success-500",warning:"text-warning-500",danger:"text-danger-500",light:"text-light-100",muted:"text-muted-400"},x=()=>{s.value&&u.value&&(n.value?(s.value.classList.add("is-checked"),u.value.classList.add("is-opaque"),setTimeout(()=>{s.value?.classList.remove("is-unchecked")},150)):(s.value.classList.add("is-unchecked"),s.value.classList.remove("is-checked"),setTimeout(()=>{u.value?.classList.remove("is-opaque")},150)))};function k(){if(Array.isArray(a.value)){const t=[...a.value];n.value?t.splice(t.indexOf(e.value??e.trueValue),1):t.push(e.value??e.trueValue),a.value=t;return}if(a.value===e.trueValue){a.value=e.falseValue;return}a.value=e.trueValue}C(x);const d=w(()=>e.id);return(t,M)=>{const V=q;return v(),p("div",{ref_key:"element",ref:s,class:_(["nui-focus block focus-within:outline-current",e.classes?.wrapper])},[l("input",B({id:c(d),ref_key:"inputRef",ref:m,type:"checkbox",class:["peer cursor-pointer disabled:cursor-not-allowed",e.classes?.input],"true-value":e.trueValue,"false-value":e.falseValue,checked:c(n),value:e.value},t.$attrs,{onChange:k}),null,16,R),l("label",{class:_(["peer-disabled:opacity-75",[e.color&&h[e.color],e.classes?.label]]),for:c(d)},[l("div",{ref_key:"innerElement",ref:u},null,512),A(V)],10,T)],2)}}});const P=f(z,[["__scopeId","data-v-e7b59dd1"]]);export{P as _};
