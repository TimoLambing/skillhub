import{d as i,c as r,a$ as n,bL as c,a4 as h,b0 as o,o as d,a as l,h as u}from"./entry.f45bc14e.js";const f=["src","alt","width","height"],p=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,a=r(()=>{if(t.src?.startsWith("/")&&!t.src.startsWith("//")){const s=n(c(h().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return o(s,t.src)}return t.src});return(s,g)=>(d(),l("img",{src:u(a),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};