import{d as m,ad as g,c as e,ar as _,o as a,a0 as u,w as h,a5 as y,a1 as v,j as n,ap as B,ab as w}from"./entry.adb22a9c.js";const S=m({__name:"BaseButtonAction",props:{type:{default:void 0},to:{default:void 0},href:{default:void 0},disabled:{type:Boolean,default:!1},rel:{default:""},target:{default:""},shape:{default:void 0},loading:{type:Boolean,default:!1},color:{default:"default"}},setup(s){const t=s,l=g(),o=e(()=>t.shape??l.nui.defaultShapes?.buttonAction),d={straight:"",rounded:"nui-button-rounded",smooth:"nui-button-smooth",curved:"nui-button-curved",full:"nui-button-full"},i={default:"nui-button-default",muted:"nui-button-muted",primary:"nui-button-primary",info:"nui-button-info",success:"nui-button-success",warning:"nui-button-warning",danger:"nui-button-danger",none:""},r=e(()=>["nui-button-action",t.loading&&"nui-button-loading",i[t.color],o.value&&d[o.value]]),{attributes:c,is:p}=_(t);return(f,C)=>{const b=w;return a(),u(B(n(p)),v(n(c),{class:n(r)}),{default:h(()=>[t.loading?(a(),u(b,{key:1,class:"h-3 w-8 rounded"})):y(f.$slots,"default",{key:0})]),_:3},16,["class"])}}});export{S as _};
