import{bm as $,bY as z,bZ as K,b_ as E,b$ as W,c0 as b,b3 as B,c1 as R,c2 as M,c3 as T,aS as J,aa as j,c4 as k,bn as N,c5 as H,b8 as q}from"./entry.f4bf1c86.js";import{p as G}from"./index.c332151d.js";const Z="memory",F=()=>{const n=new Map;return{name:Z,options:{},hasItem(r){return n.has(r)},getItem(r){return n.get(r)||null},getItemRaw(r){return n.get(r)||null},setItem(r,t){n.set(r,t)},setItemRaw(r,t){n.set(r,t)},removeItem(r){n.delete(r)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function V(n){return!n||typeof n.then!="function"?Promise.resolve(n):n}function p(n,...r){try{return V(n(...r))}catch(t){return Promise.reject(t)}}function Q(n){const r=typeof n;return n===null||r!=="object"&&r!=="function"}function X(n){const r=Object.getPrototypeOf(n);return!r||r.isPrototypeOf(Object)}function S(n){if(Q(n))return String(n);if(X(n)||Array.isArray(n))return JSON.stringify(n);if(typeof n.toJSON=="function")return S(n.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function U(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const P="base64:";function ee(n){if(typeof n=="string")return n;U();const r=Buffer.from(n).toString("base64");return P+r}function te(n){return typeof n!="string"||!n.startsWith(P)?n:(U(),Buffer.from(n.slice(P.length),"base64"))}const re=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function ne(n,r){if(r=A(r),!r)return n;const t={...n};for(const a of re)t[a]=(l="",...c)=>n[a](r+l,...c);return t.getKeys=(a="",...l)=>n.getKeys(r+a,...l).then(c=>c.map(o=>o.slice(r.length))),t}function d(n){return n?n.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function ie(...n){return d(n.join(":"))}function A(n){return n=d(n),n?n+":":""}const ae="memory",se=()=>{const n=new Map;return{name:ae,options:{},hasItem(r){return n.has(r)},getItem(r){return n.get(r)||null},getItemRaw(r){return n.get(r)||null},setItem(r,t){n.set(r,t)},setItemRaw(r,t){n.set(r,t)},removeItem(r){n.delete(r)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function oe(n={}){const r={mounts:{"":n.driver||se()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},t=e=>{for(const i of r.mountpoints)if(e.startsWith(i))return{base:i,relativeKey:e.slice(i.length),driver:r.mounts[i]};return{base:"",relativeKey:e,driver:r.mounts[""]}},a=(e,i)=>r.mountpoints.filter(s=>s.startsWith(e)||i&&e.startsWith(s)).map(s=>({relativeBase:e.length>s.length?e.slice(s.length):void 0,mountpoint:s,driver:r.mounts[s]})),l=(e,i)=>{if(r.watching){i=d(i);for(const s of r.watchListeners)s(e,i)}},c=async()=>{if(!r.watching){r.watching=!0;for(const e in r.mounts)r.unwatch[e]=await x(r.mounts[e],l,e)}},o=async()=>{if(r.watching){for(const e in r.unwatch)await r.unwatch[e]();r.unwatch={},r.watching=!1}},h=(e,i,s)=>{const u=new Map,f=m=>{let y=u.get(m.base);return y||(y={driver:m.driver,base:m.base,items:[]},u.set(m.base,y)),y};for(const m of e){const y=typeof m=="string",v=d(y?m:m.key),w=y?void 0:m.value,I=y||!m.options?i:{...i,...m.options},O=t(v);f(O).items.push({key:v,value:w,relativeKey:O.relativeKey,options:I})}return Promise.all([...u.values()].map(m=>s(m))).then(m=>m.flat())},g={hasItem(e,i={}){e=d(e);const{relativeKey:s,driver:u}=t(e);return p(u.hasItem,s,i)},getItem(e,i={}){e=d(e);const{relativeKey:s,driver:u}=t(e);return p(u.getItem,s,i).then(f=>$(f))},getItems(e,i){return h(e,i,s=>s.driver.getItems?p(s.driver.getItems,s.items.map(u=>({key:u.relativeKey,options:u.options})),i).then(u=>u.map(f=>({key:ie(s.base,f.key),value:$(f.value)}))):Promise.all(s.items.map(u=>p(s.driver.getItem,u.relativeKey,u.options).then(f=>({key:u.key,value:$(f)})))))},getItemRaw(e,i={}){e=d(e);const{relativeKey:s,driver:u}=t(e);return u.getItemRaw?p(u.getItemRaw,s,i):p(u.getItem,s,i).then(f=>te(f))},async setItem(e,i,s={}){if(i===void 0)return g.removeItem(e);e=d(e);const{relativeKey:u,driver:f}=t(e);f.setItem&&(await p(f.setItem,u,S(i),s),f.watch||l("update",e))},async setItems(e,i){await h(e,i,async s=>{s.driver.setItems&&await p(s.driver.setItems,s.items.map(u=>({key:u.relativeKey,value:S(u.value),options:u.options})),i),s.driver.setItem&&await Promise.all(s.items.map(u=>p(s.driver.setItem,u.relativeKey,S(u.value),u.options)))})},async setItemRaw(e,i,s={}){if(i===void 0)return g.removeItem(e,s);e=d(e);const{relativeKey:u,driver:f}=t(e);if(f.setItemRaw)await p(f.setItemRaw,u,i,s);else if(f.setItem)await p(f.setItem,u,ee(i),s);else return;f.watch||l("update",e)},async removeItem(e,i={}){typeof i=="boolean"&&(i={removeMeta:i}),e=d(e);const{relativeKey:s,driver:u}=t(e);u.removeItem&&(await p(u.removeItem,s,i),(i.removeMeta||i.removeMata)&&await p(u.removeItem,s+"$",i),u.watch||l("remove",e))},async getMeta(e,i={}){typeof i=="boolean"&&(i={nativeOnly:i}),e=d(e);const{relativeKey:s,driver:u}=t(e),f=Object.create(null);if(u.getMeta&&Object.assign(f,await p(u.getMeta,s,i)),!i.nativeOnly){const m=await p(u.getItem,s+"$",i).then(y=>$(y));m&&typeof m=="object"&&(typeof m.atime=="string"&&(m.atime=new Date(m.atime)),typeof m.mtime=="string"&&(m.mtime=new Date(m.mtime)),Object.assign(f,m))}return f},setMeta(e,i,s={}){return this.setItem(e+"$",i,s)},removeMeta(e,i={}){return this.removeItem(e+"$",i)},async getKeys(e,i={}){e=A(e);const s=a(e,!0);let u=[];const f=[];for(const m of s){const v=(await p(m.driver.getKeys,m.relativeBase,i)).map(w=>m.mountpoint+d(w)).filter(w=>!u.some(I=>w.startsWith(I)));f.push(...v),u=[m.mountpoint,...u.filter(w=>!w.startsWith(m.mountpoint))]}return e?f.filter(m=>m.startsWith(e)&&!m.endsWith("$")):f.filter(m=>!m.endsWith("$"))},async clear(e,i={}){e=A(e),await Promise.all(a(e,!1).map(async s=>{if(s.driver.clear)return p(s.driver.clear,s.relativeBase,i);if(s.driver.removeItem){const u=await s.driver.getKeys(s.relativeBase||"",i);return Promise.all(u.map(f=>s.driver.removeItem(f,i)))}}))},async dispose(){await Promise.all(Object.values(r.mounts).map(e=>D(e)))},async watch(e){return await c(),r.watchListeners.push(e),async()=>{r.watchListeners=r.watchListeners.filter(i=>i!==e),r.watchListeners.length===0&&await o()}},async unwatch(){r.watchListeners=[],await o()},mount(e,i){if(e=A(e),e&&r.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(r.mountpoints.push(e),r.mountpoints.sort((s,u)=>u.length-s.length)),r.mounts[e]=i,r.watching&&Promise.resolve(x(i,l,e)).then(s=>{r.unwatch[e]=s}).catch(console.error),g},async unmount(e,i=!0){e=A(e),!(!e||!r.mounts[e])&&(r.watching&&e in r.unwatch&&(r.unwatch[e](),delete r.unwatch[e]),i&&await D(r.mounts[e]),r.mountpoints=r.mountpoints.filter(s=>s!==e),delete r.mounts[e])},getMount(e=""){e=d(e)+":";const i=t(e);return{driver:i.driver,base:i.base}},getMounts(e="",i={}){return e=d(e),a(e,i.parents).map(u=>({driver:u.driver,base:u.mountpoint}))}};return g}function x(n,r,t){return n.watch?n.watch((a,l)=>r(a,t+l)):()=>{}}async function D(n){typeof n.dispose=="function"&&await p(n.dispose)}function ue(n={}){const r=ce(t,n.operators);function t(a,l){return typeof l!="object"||l instanceof RegExp?r.$eq(a,l):Object.keys(l||{}).every(c=>{const o=l[c];if(c.startsWith("$")&&r[c]){const h=r[c];return typeof h=="function"?h(a,o):!1}return t(z(a,c),o)})}return t}function ce(n,r={}){return{$match:(t,a)=>n(t,a),$eq:(t,a)=>a instanceof RegExp?a.test(t):t===a,$ne:(t,a)=>a instanceof RegExp?!a.test(t):t!==a,$not:(t,a)=>!n(t,a),$and:(t,a)=>(K(a,"$and requires an array as condition"),a.every(l=>n(t,l))),$or:(t,a)=>(K(a,"$or requires an array as condition"),a.some(l=>n(t,l))),$in:(t,a)=>E(a).some(l=>Array.isArray(t)?n(t,{$contains:l}):n(t,l)),$contains:(t,a)=>(t=Array.isArray(t)?t:String(t),E(a).every(l=>t.includes(l))),$icontains:(t,a)=>{if(typeof a!="string")throw new TypeError("$icontains requires a string, use $contains instead");return t=String(t).toLocaleLowerCase(),E(a).every(l=>t.includes(l.toLocaleLowerCase()))},$containsAny:(t,a)=>(K(a,"$containsAny requires an array as condition"),t=Array.isArray(t)?t:String(t),a.some(l=>t.includes(l))),$exists:(t,a)=>a?typeof t<"u":typeof t>"u",$type:(t,a)=>typeof t===String(a),$regex:(t,a)=>{if(!(a instanceof RegExp)){const l=String(a).match(/\/(.*)\/([dgimsuy]*)$/);a=l?new RegExp(l[1],l[2]||""):new RegExp(a)}return a.test(String(t||""))},$lt:(t,a)=>t<a,$lte:(t,a)=>t<=a,$gt:(t,a)=>t>a,$gte:(t,a)=>t>=a,...r||{}}}function le(n){const r=ue(),t=(c,{query:o,before:h,after:g})=>{const e=typeof o=="string"?{_path:o}:o,i=c.findIndex(u=>r(u,e));h=h??1,g=g??1;const s=new Array(h+g).fill(null,0);return i===-1?s:s.map((u,f)=>c[i-h+f+ +(f>=h)]||null)},a=[(c,o)=>{const h=c.result.filter(g=>E(o.where).every(e=>r(g,e)));return{...c,result:h,total:h.length}},(c,o)=>E(o.sort).forEach(h=>b(c.result,h)),function(o,h,g){return h.surround&&(o.surround=t(g,h.surround)),o}],l=[(c,o)=>{if(o.skip)return{...c,result:c.result.slice(o.skip),skip:o.skip}},(c,o)=>{if(o.limit)return{...c,result:c.result.slice(0,o.limit),limit:o.limit}},function(o,h,g){if(h.dirConfig){const e=o.result[0]?._path||h.where?.find(s=>s._path)?._path,i=g.find(s=>s._path===B(e,"_dir"));i&&(o.dirConfig={_path:i._path,...R(["_"])(i)})}return o},(c,o)=>({...c,result:M(R(o.without))(c.result)}),(c,o)=>({...c,result:M(T(o.only))(c.result)})];return async c=>{const o=await n(),h=c.params(),g={result:o,limit:0,skip:0,total:o.length},e=a.reduce((s,u)=>u(s,h,o)||s,g);if(h.count)return{result:e.result.length};const i=l.reduce((s,u)=>u(s,h,o)||s,e);return h.first?{...W(["skip","limit","total"])(i),result:i.result[0]}:i}}function L(n){const r=le(n);return async t=>{const a=t.params(),l=await r(t);return a.surround?l?.surround:(l?.dirConfig&&(l.result={_path:l.dirConfig?._path,...l.result,_dir:l.dirConfig}),l?.result)}}var fe={exports:{}};(function(n,r){(function(t,a,l){n.exports=l(),n.exports.default=l()})("slugify",J,function(){var t=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),a=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function l(c,o){if(typeof c!="string")throw new Error("slugify: string argument expected");o=typeof o=="string"?{replacement:o}:o||{};var h=a[o.locale]||{},g=o.replacement===void 0?"-":o.replacement,e=o.trim===void 0?!0:o.trim,i=c.normalize().split("").reduce(function(s,u){var f=h[u];return f===void 0&&(f=t[u]),f===void 0&&(f=u),f===g&&(f=" "),s+f.replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return o.strict&&(i=i.replace(/[^A-Za-z0-9\s]/g,"")),e&&(i=i.trim()),i=i.replace(/\s+/g,g),o.lower&&(i=i.toLowerCase()),i}return l.extend=function(c){Object.assign(t,c)},l})})(fe);const me=n=>n.split(/[\s-]/g).map(G).join(" ");function he(n,r){const{navigation:t}=j().public.content,a=c=>({...pe(["title",...t.fields])(c),...de(c?.navigation)?c.navigation:{}}),l=n.sort((c,o)=>c._path.localeCompare(o._path)).reduce((c,o)=>{const h=o._path.substring(1).split("/"),g=o._id.split(":").slice(1),e=!!g[g.length-1].match(/([1-9][0-9]*\.)?index.md/g),i=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...a(f),...f._draft?{_draft:!0}:{}}),s=i(o);if(e){const f=r[s._path];if(typeof f?.navigation<"u"&&!f?.navigation)return c;if(o._path!=="/"){const m=i(o);s.children.push(m)}Object.assign(s,a(f))}return h.length===1?(c.push(s),c):(h.slice(0,-1).reduce((f,m,y)=>{const v="/"+h.slice(0,y+1).join("/"),w=r[v];if(typeof w?.navigation<"u"&&!w.navigation)return[];let I=f.find(O=>O._path===v);return I||(I={title:me(m),_path:v,_file:o._file,children:[],...a(w)},f.push(I)),I.children},c).push(s),c)},[]);return Y(l)}const ge=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function Y(n){const r=n.sort((t,a)=>ge.compare(t._file,a._file));for(const t of r)t.children?.length?Y(t.children):delete t.children,delete t._file;return n}function pe(n){return r=>(r=r||{},n&&n.length?n.filter(t=>typeof r[t]<"u").reduce((t,a)=>Object.assign(t,{[a]:r[a]}),{}):r)}function de(n){return Object.prototype.toString.call(n)==="[object Object]"}const ye=n=>H(n,j().public.content.api.baseURL),we=ne(oe({driver:F()}),"@content");function ve(n){async function r(){const t=new Set(await n.getKeys("cache:")),a=N().getPreviewToken();if(a){const c=await n.getItem(`${a}$`).then(g=>g||{});if(Array.isArray(c.ignoreSources)){const g=c.ignoreSources.map(e=>`cache:${e.trim()}:`);for(const e of t)g.some(i=>e.startsWith(i))&&t.delete(e)}const o=await n.getKeys(`${a}:`),h=await Promise.all(o.map(g=>n.getItem(g)));for(const g of h)t.delete(`cache:${g._id}`),g.__deleted||t.add(`${a}:${g._id}`)}return await Promise.all(Array.from(t).map(c=>n.getItem(c)))}return{storage:n,fetch:L(r),query:t=>k(L(r),{initialParams:t,legacy:!0})}}let C=null,_=null;async function Ie(){return _?await _:C||(_=Ae(),C=await _),C}async function Ae(){const n=q(),{content:r}=j().public,t=ve(we),a=await t.storage.getItem("integrity");if(r.integrity!==+(a||0)){const{contents:l,navigation:c}=await $fetch(ye(r.integrity?`cache.${r.integrity}.json`:"cache.json"));await Promise.all(l.map(o=>t.storage.setItem(`cache:${o._id}`,o))),await t.storage.setItem("navigation",c),await t.storage.setItem("integrity",r.integrity)}return await n.callHook("content:storage",t.storage),t}async function $e(n){const r=await Ie();if(!N().getPreviewToken()&&Object.keys(n||{}).length===0)return r.storage.getItem("navigation");const t=await r.query(n).where({_partial:!1,navigation:{$ne:!1}}).find(),l=(await r.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((c,o)=>{o.title?.toLowerCase()==="dir"&&(o.title=void 0);const h=o._path.split("/").slice(0,-1).join("/")||"/";return c[h]={...o,...o.body},c},{});return he(t,l)}export{we as contentStorage,ve as createDB,$e as generateNavigation,Ie as useContentDatabase};
