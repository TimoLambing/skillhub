import{aS as gn,d as Ae,a4 as Ie}from"./entry.ce48552a.js";var _t={exports:{}};(function(S,A){(function(O,w){w(A)})(gn,function(O){var w,xt,et="smooth-dnd-container-instance",R="smooth-dnd-draggable-wrapper",Et="animated",_="__smooth_dnd_draggable_translation_value",V="__smooth_dnd_draggable_visibility_value",G="smooth-dnd-ghost",B="smooth-dnd-container",Vt="smooth-dnd-extra-size-for-insertion",Dt="smooth-dnd-stretcher-element",j="smooth-dnd-stretcher-instance",nt="smooth-dnd-disable-touch-action",ot="smooth-dnd-no-user-select",Ht="smooth-dnd-prevent-auto-scroll-class",St="smooth-dnd-drop-preview-default-class",Ct="smooth-dnd-drop-preview-inner-class",rt="smooth-dnd-drop-preview-constant-class",Ot="smooth-dnd-drop-preview-flex-container-class",Te=Object.freeze({containerInstance:et,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:R,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:Et,translationValue:_,visibilityValue:V,ghostClass:G,containerClass:B,extraSizeForInsertion:Vt,stretcherElementClass:Dt,stretcherElementInstance:j,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:nt,noUserSelectClass:ot,preventAutoScrollClass:Ht,dropPlaceholderDefaultClass:St,dropPlaceholderInnerClass:Ct,dropPlaceholderWrapperClass:rt,dropPlaceholderFlexContainerClass:Ot}),Y={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function Rt(t){return(Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xt(t){return function(e){if(Array.isArray(e)){for(var n=0,o=new Array(e.length);n<e.length;n++)o[n]=e[n];return o}}(t)||function(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(xt=w||(w={})).x="x",xt.y="y",xt.xy="xy";function kt(t,e,n){return n==="x"?{left:Math.max(t.left,e.left),top:t.top,right:Math.min(t.right,e.right),bottom:t.bottom}:{left:t.left,top:Math.max(t.top,e.top),right:t.right,bottom:Math.min(t.bottom,e.bottom)}}function ze(t){var e=window.getComputedStyle(t),n=e.overflow;if(n==="auto"||n==="scroll")return w.xy;var o=e["overflow-x"],r=o==="auto"||o==="scroll",a=e["overflow-y"],u=a==="auto"||a==="scroll";return r&&u?w.xy:r?w.x:u?w.y:null}function Gt(t,e){var n=window.getComputedStyle(t),o=n.overflow,r=n["overflow-".concat(e)];return o==="auto"||o==="scroll"||r==="auto"||r==="scroll"}var Ne=function(t,e){return{left:Math.max(t.left,e.left),top:Math.max(t.top,e.top),right:Math.min(t.right,e.right),bottom:Math.min(t.bottom,e.bottom)}},Yt=function(t){var e=t.getBoundingClientRect(),n={left:e.left,right:e.right,top:e.top,bottom:e.bottom};if(at(t,"x")&&!it(t,"x")){var o=n.right-n.left;n.right=n.right+t.scrollWidth-o}if(at(t,"y")&&!it(t,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+t.scrollHeight-r}return n},it=function(t,e){var n=window.getComputedStyle(t),o=n.overflow,r=n["overflow-".concat(e)];return o==="auto"||o==="scroll"||o==="hidden"||r==="auto"||r==="scroll"||r==="hidden"},at=function(t,e){return e==="x"?t.scrollWidth>t.clientWidth:t.scrollHeight>t.clientHeight},Wt=function(t,e){var n=t,o=e||Yt(t);for(n=t.parentElement;n;)at(n,"x")&&it(n,"x")&&(o=kt(o,n.getBoundingClientRect(),"x")),at(n,"y")&&it(n,"y")&&(o=kt(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o},Le=function(t,e){for(var n=t;n;){if(n[et]){var o=function(){var r=n[et];if(e.some(function(a){return a===r}))return{v:r}}();if(Rt(o)==="object")return o.v}n=n.parentElement}return null},W=function(t,e){for(var n=t;n;){if(n.matches(e))return n;n=n.parentElement}return null},At=function(t,e){return-1<t.className.split(" ").map(function(n){return n}).indexOf(e)},T=function(t,e){if(t){var n=t.className.split(" ").filter(function(o){return o});n.indexOf(e)===-1&&(n.unshift(e),t.className=n.join(" "))}},lt=function(t,e){if(t){var n=t.className.split(" ").filter(function(o){return o&&o!==e});t.className=n.join(" ")}},Me=function(t,e){return t.removeChild(t.children[e])},je=function(t,e,n){n>=t.children.length?t.appendChild(e):t.insertBefore(e,t.children[n])},Fe=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty()},qt=function(t){if(t){var e=window.getComputedStyle(t);if(e)return e.cursor}return null};function It(t){return!(t.bottom<=t.top||t.right<=t.left)}function $t(t){var e=t.element,n=t.draggables;return function(o,r){var a=o,u=a.removedIndex,s=a.addedIndex,d=a.droppedElement,i=null;if(u!==null&&(i=Me(e,u),n.splice(u,1)),s!==null){var l=window.document.createElement("div");l.className="".concat(R),l.appendChild(i&&i.firstElementChild?i.firstElementChild:d),je(e,l,s),s>=n.length?n.push(l):n.splice(s,0,l)}r&&r(o)}}var _e=Object.freeze({domDropHandler:$t,reactDropHandler:function(){return{handler:function(){return function(t,e){e&&e(t)}}}}}),Ve={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(t){return"translate3d(".concat(t,"px, 0, 0)")}}},He={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(t){return"translate3d(0,".concat(t,"px, 0)")}}};function Xe(t,e,n){t[Vt]=0;var o=function(i){return{get:function(l,c){return l[i[c]||c]},set:function(l,c,f){l[i[c]]=i.setters[c]?i.setters[c](f):f}}}(e==="horizontal"?Ve:He),r={translation:0};function a(){u(t),function(i){var l=i.getBoundingClientRect();r.scaleX=i.offsetWidth?(l.right-l.left)/i.offsetWidth:1,r.scaleY=i.offsetHeight?(l.bottom-l.top)/i.offsetHeight:1}(t)}function u(i){r.rect=Yt(i);var l=Wt(i,r.rect);It(l)&&(r.lastVisibleRect=r.visibleRect),r.visibleRect=l}function s(i){var l=i;if(l.tagName){var c=l.getBoundingClientRect();return e==="vertical"?c.bottom-c.top:c.right-c.left}return o.get(i,"size")*o.get(r,"scale")}function d(i){return o.get(i,"dragPosition")}return window.addEventListener("resize",function(){u(t)}),setTimeout(function(){a()},10),{getSize:s,getContainerRectangles:function(){return{rect:r.rect,visibleRect:r.visibleRect,lastVisibleRect:r.lastVisibleRect}},getBeginEndOfDOMRect:function(i){return{begin:o.get(i,"begin"),end:o.get(i,"end")}},getBeginEndOfContainer:function(){return{begin:o.get(r.rect,"begin")+r.translation,end:o.get(r.rect,"end")+r.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:o.get(r.visibleRect,"begin")+r.translation,end:o.get(r.visibleRect,"end")+r.translation}},getBeginEnd:function(i){var l=function(c){return(o.get(c,"distanceToParent")+(c[_]||0))*o.get(r,"scale")}(i)+(o.get(r.rect,"begin")+r.translation)-o.get(t,"scrollValue");return{begin:l,end:l+s(i)*o.get(r,"scale")}},getAxisValue:d,setTranslation:function(i,l){l?o.set(i.style,"translate",l):i.style.removeProperty("transform"),i[_]=l},getTranslation:function(i){return i[_]},setVisibility:function(i,l){i[V]!==void 0&&i[V]===l||(l?i.style.removeProperty("visibility"):i.style.visibility="hidden",i[V]=l)},isVisible:function(i){return i[V]===void 0||i[V]},isInVisibleRect:function(i,l){var c=r.visibleRect,f=c.left,g=c.top,p=c.right,y=c.bottom;y-g<2&&(y=g+30);var v=r.rect;return e==="vertical"?i>v.left&&i<v.right&&g<l&&l<y:f<i&&i<p&&l>v.top&&l<v.bottom},setSize:function(i,l){o.set(i,"setSize",l)},getTopLeftOfElementBegin:function(i){var l=0;return{top:e==="horizontal"?(l=i,r.rect.top):(l=r.rect.left,i),left:l}},getScrollSize:function(i){return o.get(i,"scrollSize")},getScrollValue:function(i){return o.get(i,"scrollValue")},setScrollValue:function(i,l){return o.set(i,"scrollValue",l)},invalidate:a,invalidateRects:function(){u(t)},getPosition:function(i){return d(i)},setBegin:function(i,l){o.set(i,"begin",l)}}}function Ut(t,e,n){var o,r,a,u=n.left,s=n.right,d=n.top,i=n.bottom,l=t.x,c=t.y;if(l<u||s<l||c<d||i<c)return null;a=e==="x"?(o=u,r=s,l):(o=d,r=i,c);var f=r-o,g=400<f?100:f/4;return r-a<g?{direction:"end",speedFactor:(g-(r-a))/g}:a-o<g?{direction:"begin",speedFactor:(g-(a-o))/g}:null}function st(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"y",n=null,o=null,r=null,a=null;return{animate:function(u,s){r=u,a=s,function d(){n===null&&(n=requestAnimationFrame(function(i){o===null&&(o=i);var l=i-o;o=i;var c,f,g,p=l/1e3*a;f=e,g=p=r==="begin"?0-p:p,(c=t)&&(c!==window?f==="x"?c.scrollLeft+=g:c.scrollTop+=g:f==="x"?c.scrollBy(g,0):c.scrollBy(0,g)),n=null,d()}))}()},stop:function(){n!==null&&(cancelAnimationFrame(n),n=null),o=null}}}function ke(t){return function(){return Wt(t,t.getBoundingClientRect())}}var N,ut,x,Ge=function(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:1500,n=t.reduce(function(o,r){var a=function(u){for(var s=[],d=u.element;d;){var i=ze(d);if(i&&!At(d,Ht)){var l={};switch(i){case w.xy:l.x={animator:st(d,"x")},l.y={animator:st(d,"y")};break;case w.x:l.x={animator:st(d,"x")};break;case w.y:l.y={animator:st(d,"y")}}s.push({axisAnimations:l,getRect:ke(d),scrollerElement:d})}d=d.parentElement}return s}(r).filter(function(u){return!o.find(function(s){return s.scrollerElement===u.scrollerElement})});return[].concat(Xt(o),Xt(a))},[]);return function(o){var r=o.draggableInfo;if(o.reset)n.forEach(function(s){s.axisAnimations.x&&s.axisAnimations.x.animator.stop(),s.axisAnimations.y&&s.axisAnimations.y.animator.stop()});else if(r){(function(s,d){s.forEach(function(i){var l=i.axisAnimations,c=(0,i.getRect)();l.x&&(l.x.scrollParams=Ut(d,"x",c),i.cachedRect=c),l.y&&(l.y.scrollParams=Ut(d,"y",c),i.cachedRect=c)})})(n,r.mousePosition),n.forEach(function(s){var d=s.axisAnimations,i=d.x,l=d.y;if(i)if(i.scrollParams){var c=i.scrollParams,f=c.direction,g=c.speedFactor;i.animator.animate(f,g*e)}else i.animator.stop();if(l)if(l.scrollParams){var p=l.scrollParams,y=p.direction,v=p.speedFactor;l.animator.animate(y,v*e)}else l.animator.stop()});var a=n.filter(function(s){return s.cachedRect});if(a.length&&1<a.length){var u=function(s,d){for(var i=document.elementFromPoint(d.x,d.y);i;){var l=s.find(function(c){return c.scrollerElement===i});if(l)return l;i=i.parentElement}return null}(a,r.mousePosition);u&&a.forEach(function(s){s!==u&&(s.axisAnimations.x&&s.axisAnimations.x.animator.stop(),s.axisAnimations.y&&s.axisAnimations.y.animator.stop())})}}}};typeof window<"u"&&((N=Element)&&N.prototype&&!N.prototype.matches&&(N.prototype.matches=N.prototype.matchesSelector||N.prototype.mozMatchesSelector||N.prototype.msMatchesSelector||N.prototype.oMatchesSelector||N.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;0<=--n&&e.item(n)!==this;);return-1<n}),(ut=Node||Element)&&ut.prototype&&ut.prototype.firstElementChild==null&&Object.defineProperty(ut.prototype,"firstElementChild",{get:function(){for(var t,e=this.childNodes,n=0;t=e[n++];)if(t.nodeType===1)return t;return null}}),Array.prototype.some||(Array.prototype.some=function(t){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(typeof t!="function")throw new TypeError;for(var e=Object(this),n=e.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in e&&t.call(o,e[r],r,e))return!0;return!1}));var Jt={overflow:"hidden",display:"block"},Kt={height:"100%",display:"table-cell","vertical-align":"top"},Ye=(E(x={},".".concat(B),{position:"relative","min-height":"30px","min-width":"30px"}),E(x,".".concat(B,".horizontal"),{display:"table"}),E(x,".".concat(B,".horizontal > .").concat(Dt),{display:"inline-block"}),E(x,".".concat(B,".horizontal > .").concat(R),Kt),E(x,".".concat(B,".vertical > .").concat(R),Jt),E(x,".".concat(R),{"box-sizing":"border-box"}),E(x,".".concat(R,".horizontal"),Kt),E(x,".".concat(R,".vertical"),Jt),E(x,".".concat(R,".animated"),{transition:"transform ease"}),E(x,".".concat(G),{"box-sizing":"border-box"}),E(x,".".concat(G,".animated"),{transition:"all ease-in-out"}),E(x,".".concat(G," *"),{"pointer-events":"none"}),E(x,".".concat(nt," *"),{"touch-action":"none","-ms-touch-action":"none"}),E(x,".".concat(ot),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),E(x,".".concat(Ct),{flex:"1"}),E(x,".".concat(B,".horizontal > .").concat(rt),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),E(x,".".concat(B,".vertical > .").concat(rt),{overflow:"hidden",display:"block",width:"100%"}),E(x,".".concat(Ot),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),E(x,".".concat(St),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),x);function Pt(t){return Object.keys(t).reduce(function(e,n){var o=t[n];return Rt(o)==="object"?"".concat(e).concat(n,"{").concat(Pt(o),"}"):"".concat(e).concat(n,":").concat(o,";")},"")}function Qt(t){if(t&&typeof window<"u"){var e=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),o=Pt({"body *":{cursor:"".concat(t," !important")}});return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(window.document.createTextNode(o)),e.appendChild(n),n}return null}var H,ct,We=["mousedown","touchstart"],dt=["mousemove","touchmove"],ft=["mouseup","touchend"],D=null,L=null,b=null,m=null,I=[],M=!1,gt=!1,q=!1,pt=!1,X=null,P=null,$=null,U=null,Zt=(H=null,ct=!1,{start:function(){ct||(ct=!0,function t(){H=requestAnimationFrame(function(){D.forEach(function(e){return e.layout.invalidateRects()}),setTimeout(function(){H!==null&&t()},50)})}())},stop:function(){H!==null&&(cancelAnimationFrame(H),H=null),ct=!1}}),qe=typeof window<"u"&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i));function $e(){typeof window<"u"&&We.forEach(function(t){window.document.addEventListener(t,Je,{passive:!1})})}function te(){return m&&m.ghostParent?m.ghostParent:L&&L.parentElement||window.document.body}var J,Bt,ee,mt,Tt,zt,Ue=(mt=null,Tt=1,zt=5,function(t,e,n){J=ht(t),ee=n,(Bt=typeof e=="number"?e:qe?200:0)&&(mt=setTimeout(ie,Bt)),dt.forEach(function(o){return window.document.addEventListener(o,ne)},{passive:!1}),ft.forEach(function(o){return window.document.addEventListener(o,oe)},{passive:!1}),window.document.addEventListener("drag",re,{passive:!1})});function ne(t){var e=ht(t),n=e.clientX,o=e.clientY;if(Bt)(Math.abs(J.clientX-n)>zt||Math.abs(J.clientY-o)>zt)&&vt();else if(Math.abs(J.clientX-n)>Tt||Math.abs(J.clientY-o)>Tt)return ie()}function oe(){vt()}function re(){vt()}function vt(){clearTimeout(mt),dt.forEach(function(t){return window.document.removeEventListener(t,ne)},{passive:!1}),ft.forEach(function(t){return window.document.removeEventListener(t,oe)},{passive:!1}),window.document.removeEventListener("drag",re,{passive:!1})}function ie(){clearTimeout(mt),vt(),ee()}function Je(t){var e=ht(t);if(!M&&(e.button===void 0||e.button===0)&&(L=W(e.target,"."+R))){var n=W(L,"."+B),o=I.filter(function(s){return s.element===n})[0],r=o.getOptions().dragHandleSelector,a=o.getOptions().nonDragAreaSelector,u=!0;r&&!W(e.target,r)&&(u=!1),a&&W(e.target,a)&&(u=!1),u&&(o.layout.invalidate(),T(window.document.body,nt),T(window.document.body,ot),window.document.addEventListener("mouseup",function s(){lt(window.document.body,nt),lt(window.document.body,ot),window.document.removeEventListener("mouseup",s)})),u&&Ue(e,o.getOptions().dragBeginDelay,function(){Fe(),fe(e,qt(t.target)),dt.forEach(function(s){window.document.addEventListener(s,ae,{passive:!1})}),ft.forEach(function(s){window.document.addEventListener(s,Nt,{passive:!1})})})}}function ae(t){t.preventDefault();var e=ht(t);if(m){var n=m.container.getOptions();n.behaviour==="contain"?function(o){var r,a,u,s,d=o.clientX,i=o.clientY,l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"vertical",c=m.container.layout.getBeginEndOfContainerVisibleRect();s=l==="vertical"?(r=i,a="y",u="top",m.size.offsetHeight):(r=d,a="x",u="left",m.size.offsetWidth);var f=c.begin,g=c.end-s,p=Math.max(f,Math.min(g,r+b.positionDelta[u]));b.topLeft[a]=p,m.position[a]=Math.max(c.begin,Math.min(c.end,r+b.centerDelta[a])),m.mousePosition[a]=Math.max(c.begin,Math.min(c.end,r)),m.position[a]<c.begin+s/2&&(m.position[a]=c.begin+2),m.position[a]>c.end-s/2&&(m.position[a]=c.end-2)}(e,n.orientation):$?$==="y"?(b.topLeft.y=e.clientY+b.positionDelta.top,m.position.y=e.clientY+b.centerDelta.y,m.mousePosition.y=e.clientY):$==="x"&&(b.topLeft.x=e.clientX+b.positionDelta.left,m.position.x=e.clientX+b.centerDelta.x,m.mousePosition.x=e.clientX):(b.topLeft.x=e.clientX+b.positionDelta.left,b.topLeft.y=e.clientY+b.positionDelta.top,m.position.x=e.clientX+b.centerDelta.x,m.position.y=e.clientY+b.centerDelta.y,m.mousePosition.x=e.clientX,m.mousePosition.y=e.clientY),jt(),(pt=!X(m))&&Ke()}else fe(e,qt(t.target))}var K,le,se,k,Ke=(K=ue,se=!(le=20),k=null,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];k&&clearTimeout(k),se&&!k?K.call.apply(K,[null].concat(e)):k=setTimeout(function(){k=null,K.call.apply(K,[null].concat(e))},le)});function ue(){pt&&(pt=!1,ce(m,D))}function Nt(){dt.forEach(function(t){window.document.removeEventListener(t,ae,{passive:!1})}),ft.forEach(function(t){window.document.removeEventListener(t,Nt,{passive:!1})}),P({reset:!0}),U&&(function(t){t&&typeof window<"u"&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(t)}(U),U=null),m&&(Zt.stop(),ue(),q=!0,function(t){function e(){try{lt(b.ghost,"animated"),b.ghost.style.transitionDuration=null,te().removeChild(b.ghost)}catch{}finally{t()}}function n(v,h,z){var Ft=v.top,Q=v.left;T(b.ghost,"animated"),z&&T(b.ghost.firstElementChild,z),b.topLeft.x=Q,b.topLeft.y=Ft,jt(h),setTimeout(function(){e()},h+20)}function o(v,h){T(b.ghost,"animated"),jt(v,.9,!0),setTimeout(function(){h()},v+20)}if(m.targetElement){var r=I.filter(function(v){return v.element===m.targetElement})[0];!(y=r.getOptions()).shouldAnimateDrop||y.shouldAnimateDrop(m.container.getOptions(),m.payload)?n(r.getDragResult().shadowBeginEnd.rect,Math.max(150,r.getOptions().animationDuration/2),r.getOptions().dropClass):e()}else{var a=I.filter(function(v){return v===m.container})[0];if(a){var u=a.getOptions(),s=u.behaviour,d=u.removeOnDropOut;if(s!=="move"&&s!=="contain"||!gt&&d||!a.getDragResult())o(a.getOptions().animationDuration,e);else{var i=a.layout.getContainerRectangles();if(!It(i.visibleRect)&&It(i.lastVisibleRect))n({top:i.lastVisibleRect.top,left:i.lastVisibleRect.left},a.getOptions().animationDuration,a.getOptions().dropClass);else{var l=a.getDragResult(),c=l.removedIndex,f=l.elementSize,g=a.layout;a.getTranslateCalculator({dragResult:{removedIndex:c,addedIndex:c,elementSize:f,pos:void 0,shadowBeginEnd:void 0}});var p=0<c?g.getBeginEnd(a.draggables[c-1]).end:g.getBeginEndOfContainer().begin;n(g.getTopLeftOfElementBegin(p),a.getOptions().animationDuration,a.getOptions().dropClass)}}}else o(Y.animationDuration,e)}var y}(function(){de(M=!1);for(var t=D||[],e=t.shift();e!==void 0;)e.handleDrop(m),e=t.shift();X=$=m=b=L=D=null,q=!1}))}function ht(t){return t.touches?t.touches[0]:t}function ce(t,e){var n=!1;e.forEach(function(o){var r=o.handleDrag(t);n=!!r.containerBoxChanged||!1,r.containerBoxChanged=!1}),n&&(n=!1,requestAnimationFrame(function(){I.forEach(function(o){o.layout.invalidateRects(),o.onTranslated()})}))}function Lt(t){var e=t,n=null;return function(o){return!(n!==null||!M||q)&&(n=requestAnimationFrame(function(){M&&!q&&(ce(o,e),P({draggableInfo:o})),n=null}),!0)}}function Mt(t,e){return t.getOptions().autoScrollEnabled?Ge(e,t.getScrollMaxSpeed()):function(n){return null}}function de(t){I.forEach(function(e){var n=t?e.getOptions().onDragStart:e.getOptions().onDragEnd;if(n){var o={isSource:e===m.container,payload:m.payload};e.isDragRelevant(m.container,m.payload)?o.willAcceptDrop=!0:o.willAcceptDrop=!1,n(o)}})}function fe(t,e){if(L!==null){M=!0;var n=I.filter(function(o){return L.parentElement===o.element})[0];n.setDraggables(),$=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,m=function(o){var r=I.filter(function(d){return o.parentElement===d.element})[0],a=r.draggables.indexOf(o),u=r.getOptions().getGhostParent,s=o.getBoundingClientRect();return{container:r,element:o,size:{offsetHeight:s.bottom-s.top,offsetWidth:s.right-s.left},elementIndex:a,payload:r.getOptions().getChildPayload?r.getOptions().getChildPayload(a):void 0,targetElement:null,position:{x:0,y:0},groupName:r.getOptions().groupName,ghostParent:u?u():null,invalidateShadow:null,mousePosition:null,relevantContainers:null}}(L),b=function(o,r,a,u){var s=r.x,d=r.y,i=o.getBoundingClientRect(),l=i.left,c=i.top,f=i.right,g=i.bottom,p=Ne(a.layout.getContainerRectangles().visibleRect,i),y=p.left+(p.right-p.left)/2,v=p.top+(p.bottom-p.top)/2,h=o.cloneNode(!0);return h.style.zIndex="1000",h.style.boxSizing="border-box",h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.transform=null,h.style.removeProperty("transform"),a.shouldUseTransformForGhost()?h.style.transform="translate3d(".concat(l,"px, ").concat(c,"px, 0)"):(h.style.top="".concat(c,"px"),h.style.left="".concat(l,"px")),h.style.width=f-l+"px",h.style.height=g-c+"px",h.style.overflow="visible",h.style.transition=null,h.style.removeProperty("transition"),h.style.pointerEvents="none",h.style.userSelect="none",a.getOptions().dragClass?setTimeout(function(){T(h.firstElementChild,a.getOptions().dragClass);var z=window.getComputedStyle(h.firstElementChild).cursor;U=Qt(z)}):U=Qt(u),T(h,a.getOptions().orientation||"vertical"),T(h,G),{ghost:h,centerDelta:{x:y-s,y:v-d},positionDelta:{left:l-s,top:c-d},topLeft:{x:l,y:c}}}(L,{x:t.clientX,y:t.clientY},m.container,e),m.position={x:t.clientX+b.centerDelta.x,y:t.clientY+b.centerDelta.y},m.mousePosition={x:t.clientX,y:t.clientY},D=I.filter(function(o){return o.isDragRelevant(n,m.payload)}),m.relevantContainers=D,X=Lt(D),P&&P({reset:!0,draggableInfo:void 0}),P=Mt(n,D),D.forEach(function(o){return o.prepareDrag(o,D)}),de(!0),X(m),te().appendChild(b.ghost),Zt.start()}}var yt=null;function jt(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:1,n=2<arguments.length&&arguments[2]!==void 0&&arguments[2],o=b,r=o.ghost,a=o.topLeft,u=a.x,s=a.y,d=!m.container||m.container.shouldUseTransformForGhost(),i=d?"translate3d(".concat(u,"px,").concat(s,"px, 0)"):null;if(e!==1&&(i=i?"".concat(i," scale(").concat(e,")"):"scale(".concat(e,")")),0<t)return b.ghost.style.transitionDuration=t+"ms",void requestAnimationFrame(function(){i&&(r.style.transform=i),d||(r.style.left=u+"px",r.style.top=s+"px"),yt=null,n&&(r.style.opacity="0")});yt===null&&(yt=requestAnimationFrame(function(){i&&(r.style.transform=i),d||(r.style.left=u+"px",r.style.top=s+"px"),yt=null,n&&(r.style.opacity="0")}))}function Qe(){if(M&&!gt&&!q){pt=!(gt=!0);var t=Object.assign({},m,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}});D.forEach(function(e){e.handleDrag(t)}),m.targetElement=null,m.cancelDrop=!0,Nt(),gt=!1}}typeof window<"u"&&function(){if(typeof window<"u"){var t=window.document.head||window.document.getElementsByTagName("head")[0],e=window.document.createElement("style");e.id="smooth-dnd-style-definitions";var n=Pt(Ye);e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(window.document.createTextNode(n)),t.appendChild(e)}}();var bt=($e(),{register:function(t){(function(e){I.push(e),M&&m&&e.isDragRelevant(m.container,m.payload)&&(D.push(e),e.prepareDrag(e,D),P&&P({reset:!0,draggableInfo:void 0}),P=Mt(e,D),X=Lt(D),e.handleDrag(m))})(t)},unregister:function(t){(function(e){if(I.splice(I.indexOf(e),1),M&&m){m.container===e&&e.fireRemoveElement(),m.targetElement===e.element&&(m.targetElement=null);var n=D.indexOf(e);-1<n&&(D.splice(n,1),P&&P({reset:!0,draggableInfo:void 0}),P=Mt(e,D),X=Lt(D))}})(t)},isDragging:function(){return M},cancelDrag:Qe});function ge(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:Y.animationDuration;e?(T(t,Et),t.style.transitionDuration=n+"ms"):(lt(t,Et),t.style.removeProperty("transition-duration"))}function pe(t){var e=[];return Array.prototype.forEach.call(t.children,function(n){if(n.nodeType===Node.ELEMENT_NODE){var o=n;At(n,R)||(o=function(r){if(C.wrapChild){var a=window.document.createElement("div");return a.className="".concat(R),r.parentElement.insertBefore(a,r),a.appendChild(r),a}return r}(n)),o[_]=0,e.push(o)}else t.removeChild(n)}),e}function Ze(t){var e=t.layout;return function(n,o){var r=2<arguments.length&&arguments[2]!==void 0&&arguments[2];return function a(u,s,d,i){var l=4<arguments.length&&arguments[4]!==void 0&&arguments[4];if(i<d)return d;if(d===i){var c=e.getBeginEnd(u[d]),f=c.begin,g=c.end;return l?s<(g+f)/2?d:d+1:d}var p=Math.floor((i+d)/2),y=e.getBeginEnd(u[p]),v=y.begin,h=y.end;return s<v?a(u,s,d,p-1,l):h<s?a(u,s,p+1,i,l):l?s<(h+v)/2?p:p+1:p}(n,o,0,n.length-1,r)}}function tn(t){var e=t.element,n=t.draggables,o=t.layout,r=t.getOptions,a=function(s){var d=s.element,i=s.draggables,l=s.layout;return function(){i.forEach(function(c){ge(c,!1),l.setTranslation(c,0),l.setVisibility(c,!0)}),d[j]&&(d[j].parentNode.removeChild(d[j]),d[j]=null)}}({element:e,draggables:n,layout:o,getOptions:r}),u=(C.dropHandler||$t)({element:e,draggables:n,layout:o,getOptions:r});return function(s,d){var i=d.addedIndex,l=d.removedIndex,c=2<arguments.length&&arguments[2]!==void 0&&arguments[2];if(a(),!s.cancelDrop&&(s.targetElement||r().removeOnDropOut||c)){var f={removedIndex:l,addedIndex:i!==null?l!==null&&l<i?i-1:i:null,payload:s.payload};u(f,r().onDrop)}}}function me(t){var e=t.element,n=t.getOptions,o=null;return function(r){var a=r.draggableInfo,u=o;return o==null&&a.container.element===e&&n().behaviour!=="copy"&&(u=o=a.elementIndex),{removedIndex:u}}}function ve(t){var e=t.draggables,n=t.layout;return function(o){var r=o.dragResult;r.removedIndex!==null&&n.setVisibility(e[r.removedIndex],!1)}}function he(t){var e=t.element,n=t.layout;return function(o){var r=o.draggableInfo,a=document.elementFromPoint(r.position.x,r.position.y);if(a){var u=Le(a,r.relevantContainers);if(u&&u.element===e)return{pos:n.getPosition(r.position)}}return{pos:null}}}function ye(t){var e=t.layout,n=null;return function(o){var r=o.draggableInfo;return o.dragResult.pos===null?n=null:{elementSize:n=n||e.getSize(r.size)}}}function be(t){var e=t.element;return function(n){var o=n.draggableInfo,r=n.dragResult;(function(a,u){var s=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];u&&s?a.targetElement=u:a.targetElement===u&&(a.targetElement=null)})(o,e,!!r.pos)}}function en(){return function(t){return t.dragResult.pos!==null?{addedIndex:0}:{addedIndex:null}}}function nn(t){var e=t.layout,n=null;return function(o){var r=o.dragResult.addedIndex;if(r===n)return null;n=r;var a=e.getBeginEndOfContainer(),u=a.begin;return a.end,{shadowBeginEnd:{rect:e.getTopLeftOfElementBegin(u)}}}}function on(t){var e=t.layout,n=t.element,o=t.getOptions,r=null;return function(a){var u=a.dragResult,s=u.elementSize,d=u.shadowBeginEnd,i=u.addedIndex,l=u.dropPlaceholderContainer,c=o();if(c.dropPlaceholder){var f=typeof c.dropPlaceholder=="boolean"?{}:c.dropPlaceholder,g=f.animationDuration,p=f.className,y=f.showOnTop;if(i===null)return l&&r!==null&&n.removeChild(l),r=null,{dropPlaceholderContainer:void 0};if(!l){var v=document.createElement("div"),h=document.createElement("div");h.className=Ot,v.className="".concat(Ct," ").concat(p||St),(l=document.createElement("div")).className="".concat(rt),l.style.position="absolute",g!==void 0&&(l.style.transition="all ".concat(g,"ms ease")),l.appendChild(h),h.appendChild(v),e.setSize(l.style,s+"px"),l.style.pointerEvents="none",y?n.appendChild(l):n.insertBefore(l,n.firstElementChild)}return r!==i&&d.dropArea&&e.setBegin(l.style,d.dropArea.begin-e.getBeginEndOfContainer().begin+"px"),r=i,{dropPlaceholderContainer:l}}return null}}function rn(t){var e=xe(t);return function(n){var o=n.draggableInfo,r=n.dragResult;return o.invalidateShadow?e({draggableInfo:o,dragResult:r}):null}}function an(t){var e=function(n){var o=n.draggables,r=Ze({layout:n.layout});return function(a){var u=a.dragResult,s=u.shadowBeginEnd,d=u.pos;if(s)return s.begin+s.beginAdjustment<=d&&s.end>=d?null:d<s.begin+s.beginAdjustment?r(o,d):d>s.end?r(o,d)+1:o.length;var i=r(o,d,!0);return i!==null?i:o.length}}(t);return function(n){var o=n.dragResult,r=null;return o.pos!==null&&(r=e({dragResult:o}))===null&&(r=o.addedIndex),{addedIndex:r}}}function ln(){var t=null;return function(e){var n=e.dragResult,o=n.addedIndex,r=n.shadowBeginEnd;o!==t&&t!==null&&r&&(r.beginAdjustment=0),t=o}}function sn(t){var e=t.element,n=t.draggables,o=t.layout,r=t.getOptions,a=null;return function(u){var s=u.dragResult,d=s.addedIndex,i=s.removedIndex,l=s.elementSize;if(i===null){if(d!==null){if(!a){var c=o.getBeginEndOfContainer();c.end=c.begin+o.getSize(e);var f=o.getScrollSize(e)>o.getSize(e)?c.begin+o.getScrollSize(e)-o.getScrollValue(e):c.end,g=0<n.length?o.getBeginEnd(n[n.length-1]).end-n[n.length-1][_]:c.begin;if(f<g+l){(a=window.document.createElement("div")).className=Dt+" "+r().orientation;var p=0<n.length?l+g-f:l;return o.setSize(a.style,"".concat(p,"px")),e.appendChild(a),e[j]=a,{containerBoxChanged:!0}}}}else if(a){o.setTranslation(a,0);var y=a;return a=null,e.removeChild(y),{containerBoxChanged:!(e[j]=null)}}}}}function we(t){var e=t.draggables,n=t.layout,o=null,r=null;return function(a){var u=a.dragResult,s=u.addedIndex,d=u.removedIndex,i=u.elementSize;if(s!==o||d!==r){for(var l=0;l<e.length;l++)if(l!==d){var c=e[l],f=0;d!==null&&d<l&&(f-=i),s!==null&&s<=l&&(f+=i),n.setTranslation(c,f)}return{addedIndex:o=s,removedIndex:r=d}}}}function xe(t){var e=t.draggables,n=t.layout,o=null;return function(r){var a=r.draggableInfo,u=r.dragResult,s=u.addedIndex,d=u.removedIndex,i=u.elementSize,l=u.pos,c=u.shadowBeginEnd;if(l===null)return{shadowBeginEnd:o=null};if(s===null||!a.invalidateShadow&&s===o)return null;var f=s-1,g=Number.MIN_SAFE_INTEGER,p=0,y=0,v=null,h=null;if(f===d&&f--,-1<f){var z=n.getSize(e[f]);if(h=n.getBeginEnd(e[f]),i<z){var Ft=(z-i)/2;g=h.end-Ft}else g=h.end;p=h.end}else h={end:n.getBeginEndOfContainer().begin},p=n.getBeginEndOfContainer().begin;var Q=Number.MAX_SAFE_INTEGER,Z=s;if(Z===d&&Z++,Z<e.length){var Oe=n.getSize(e[Z]);if(v=n.getBeginEnd(e[Z]),i<Oe){var dn=(Oe-i)/2;Q=v.begin+dn}else Q=v.begin;y=v.begin}else v={begin:n.getContainerRectangles().rect.end},y=n.getContainerRectangles().rect.end-n.getContainerRectangles().rect.begin;var fn=h&&v?n.getTopLeftOfElementBegin(h.end):null;return o=s,{shadowBeginEnd:{dropArea:{begin:p,end:y},begin:g,end:Q,rect:fn,beginAdjustment:c?c.beginAdjustment:0}}}}function un(){var t=null;return function(e){var n=e.dragResult,o=n.pos,r=n.addedIndex,a=n.shadowBeginEnd;if(o!==null){if(r!=null&&t===null){if(o<a.begin){var u=o-a.begin-5;a.beginAdjustment=u}t=r}}else t=null}}function Ee(t){var e=t.getOptions,n=!1,o=e();return function(r){var a=!!r.dragResult.pos;a!==n&&((n=a)?o.onDragEnter&&o.onDragEnter():o.onDragLeave&&o.onDragLeave())}}function De(t){var e=t.getOptions,n=null,o=e();return function(r){var a=r.dragResult,u=a.addedIndex,s=a.removedIndex,d=r.draggableInfo,i=d.payload,l=d.element;if(o.onDropReady&&u!==null&&n!==u){var c=n=u;s!==null&&s<u&&c--,o.onDropReady({addedIndex:c,removedIndex:s,payload:i,element:l?l.firstElementChild:void 0})}}}function Se(t){return t.getOptions().behaviour==="drop-zone"?Ce(t)(me,ve,he,ye,be,en,nn,Ee,De):Ce(t)(me,ve,he,ye,be,rn,an,ln,sn,we,xe,on,un,Ee,De)}function Ce(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=n.map(function(u){return u(t)}),a=null;return function(u){return a=r.reduce(function(s,d){return Object.assign(s,d({draggableInfo:u,dragResult:s}))},a||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function cn(t){return function(e){var n=Object.assign({},Y,e),o=null,r=null,a=function(f,g){var p=pe(f),y=g();return T(f,"".concat(B," ").concat(y.orientation)),{element:f,draggables:p,getOptions:g,layout:Xe(f,y.orientation,y.animationDuration)}}(t,c),u=Se(a),s=tn(a),d=function(f,g){var p=[];function y(){p&&(p.forEach(function(v){return v.removeEventListener("scroll",g)}),window.removeEventListener("scroll",g))}return function(){for(var v=f;v;)(Gt(v,"x")||Gt(v,"y"))&&p.push(v),v=v.parentElement}(),{dispose:function(){y(),p=null},start:function(){p&&(p.forEach(function(v){return v.addEventListener("scroll",g)}),window.addEventListener("scroll",g))},stop:y}}(t,function(){a.layout.invalidateRects(),i()});function i(){r!==null&&(r.invalidateShadow=!0,o=u(r),r.invalidateShadow=!1)}function l(f,g){for(var p=pe(g),y=0;y<p.length;y++)f[y]=p[y];for(var v=0;v<f.length-p.length;v++)f.pop()}function c(){return n}return{element:t,draggables:a.draggables,isDragRelevant:function(f){var g=f.element,p=f.getOptions;return function(y,v){var h=p();if(h.shouldAcceptDrop)return h.shouldAcceptDrop(y.getOptions(),v);var z=y.getOptions();return h.behaviour!=="copy"&&W(g,"."+R)!==y.element&&(y.element===g||!(!z.groupName||z.groupName!==h.groupName))}}(a),layout:a.layout,dispose:function(f){d.dispose(),function(g){C.wrapChild&&Array.prototype.forEach.call(g.children,function(p){p.nodeType===Node.ELEMENT_NODE&&At(p,R)&&(g.insertBefore(p.firstElementChild,p),g.removeChild(p))})}(f.element)},prepareDrag:function(f,g){var p=f.element,y=a.draggables;l(y,p),f.layout.invalidateRects(),y.forEach(function(v){return ge(v,!0,c().animationDuration)}),d.start()},handleDrag:function(f){return o=u(r=f)},handleDrop:function(f){d.stop(),o&&o.dropPlaceholderContainer&&t.removeChild(o.dropPlaceholderContainer),r=null,u=Se(a),s(f,o),o=null},fireRemoveElement:function(){s(r,Object.assign({},o,{addedIndex:null}),!0),o=null},getDragResult:function(){return o},getTranslateCalculator:function(f){return we(a)(f)},onTranslated:function(){i()},setDraggables:function(){l(a.draggables,t)},getScrollMaxSpeed:function(){return C.maxScrollSpeed},shouldUseTransformForGhost:function(){return C.useTransformForGhost===!0},getOptions:c,setOptions:function(f){var g=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];n=g===!1?Object.assign({},Y,f):Object.assign({},Y,n,f)}}}}var C=function(t,e){var n=cn(t)(e);return t[et]=n,bt.register(n),{dispose:function(){bt.unregister(n),n.dispose(n)},setOptions:function(o,r){n.setOptions(o,r)}}};function wt(t,e,n){Object.defineProperty(t,n,{set:function(o){e[n]=o},get:function(){return e[n]}})}C.wrapChild=!0,C.cancelDrag=function(){bt.cancelDrag()},C.isDragging=function(){return bt.isDragging()};function F(t,e){return console.warn('default export is deprecated. please use named export "smoothDnD"'),C(t,e)}F.cancelDrag=function(){C.cancelDrag()},F.isDragging=function(){return C.isDragging()},wt(F,C,"useTransformForGhost"),wt(F,C,"maxScrollSpeed"),wt(F,C,"wrapChild"),wt(F,C,"dropHandler"),O.smoothDnD=C,O.constants=Te,O.dropHandlers=_e,O.default=F,Object.defineProperty(O,"__esModule",{value:!0})})})(_t,_t.exports);var tt=_t.exports;function Pe(S){return S?typeof S=="string"||typeof S=="object"&&(typeof S.value=="string"||typeof S.value=="function"||typeof S.value=="object"):!0}function Be(S,A){const O=S.$props.tag;if(O){if(typeof O=="string"){const w={value:O};return A&&(w.props={class:A}),w}else if(typeof O=="object"){const w={value:O.value||"div",props:O.props||{}};return A&&(w.props.class?Array.isArray(w.props.class)?w.props.class.push(A):w.props.class=[A,w.props.class]:w.props.class=A),w}}return{value:"div"}}tt.smoothDnD.dropHandler=tt.dropHandlers.reactDropHandler().handler;tt.smoothDnD.wrapChild=!1;const Re={"drag-start":"onDragStart","drag-end":"onDragEnd",drop:"onDrop","drag-enter":"onDragEnter","drag-leave":"onDragLeave","drop-ready":"onDropReady"};var mn=Ae({name:"Container",mounted(){const S=Object.assign({},this.$props);for(const A in Re)S[Re[A]]=O=>{this.$emit(A,O)};this.containerElement=this.$refs.container||this.$el,this.container=tt.smoothDnD(this.containerElement,S)},unmounted(){if(this.container)try{this.container.dispose()}catch{}},emits:["drop","drag-start","drag-end","drag-enter","drag-leave","drop-ready"],props:{orientation:{type:String,default:"vertical"},removeOnDropOut:{type:Boolean,default:!1},autoScrollEnabled:{type:Boolean,default:!0},animationDuration:{type:Number,default:250},behaviour:String,groupName:String,dragHandleSelector:String,nonDragAreaSelector:String,lockAxis:String,dragClass:String,dropClass:String,dragBeginDelay:Number,getChildPayload:Function,shouldAnimateDrop:Function,shouldAcceptDrop:Function,getGhostParent:Function,dropPlaceholder:[Object,Boolean],tag:{validator:Pe,default:"div"}},render(){const S=Be(this);return Ie(S.value,Object.assign({},{ref:"container"},S.props),this.$slots.default())}}),vn=Ae({name:"Draggable",props:{tag:{validator:Pe,default:"div"}},render:function(){const S=Be(this,tt.constants.wrapperClass);return Ie(S.value,Object.assign({},S.props),this.$slots.default())}});export{mn as C,vn as D};
