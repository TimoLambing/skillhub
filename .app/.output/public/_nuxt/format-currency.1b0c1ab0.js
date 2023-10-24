const e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function t(r){return e.format(r??0).replace(".00","")}export{t as f};
