import{l as h,Y as A,T as w,G as k,Z as H,p as B,q as i,m as N,v as F,n as O,r as R,c as V,F as q,h as v,_ as z}from"./index.d3dd69d0.js";import{m as P,a as C,b as D,c as G,d as j,e as Y,f as J,g as U,h as W,i as b,j as X}from"./VIcon.41efdd17.js";function s(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",t=arguments.length>2?arguments[2]:void 0;return h()({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:t},origin:{type:String,default:r}},setup(o,l){let{slots:d}=l;return()=>{const n=o.group?A:w;return k(n,{name:e,mode:o.mode,onBeforeEnter(a){a.style.transformOrigin=o.origin},onLeave(a){if(o.leaveAbsolute){const{offsetTop:u,offsetLeft:f,offsetWidth:c,offsetHeight:g}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${u}px`,a.style.left=`${f}px`,a.style.width=`${c}px`,a.style.height=`${g}px`}o.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(o.leaveAbsolute&&(a==null?void 0:a._transitionInitialStyles)){const{position:u,top:f,left:c,width:g,height:m}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=u||"",a.style.top=f||"",a.style.left=c||"",a.style.width=g||"",a.style.height=m||""}}},d.default)}}})}function E(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return h()({name:e,props:{mode:{type:String,default:t}},setup(o,l){let{slots:d}=l;return()=>k(w,{name:e,...r},d.default)}})}function L(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=H(`offset-${t}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[t]:n.style[t]}},onEnter(n){const a=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const u=`${n[o]}px`;n.style[t]="0",n.offsetHeight,n.style.transition=a.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[t]=u})},onAfterEnter:d,onEnterCancelled:d,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[t]:n.style[t]},n.style.overflow="hidden",n.style[t]=`${n[o]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[t]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(n){e&&n._parent&&n._parent.classList.remove(e),d(n)}function d(n){const a=n._initialStyle[t];n.style.overflow=n._initialStyle.overflow,a!=null&&(n.style[t]=a),delete n._initialStyle}}s("fab-transition","center center","out-in");s("dialog-bottom-transition");s("dialog-top-transition");s("fade-transition");s("scale-transition");s("scroll-x-transition");s("scroll-x-reverse-transition");s("scroll-y-transition");s("scroll-y-reverse-transition");s("slide-x-transition");s("slide-x-reverse-transition");const at=s("slide-y-transition");s("slide-y-reverse-transition");const Z=E("expand-transition",L()),ot=E("expand-x-transition",L("",!0)),K=B({text:String,...P()},"v-toolbar-title"),M=h()({name:"VToolbarTitle",props:K(),setup(e,r){let{slots:t}=r;return C(()=>{const o=!!(t.default||t.text||e.text);return i(e.tag,{class:"v-toolbar-title"},{default:()=>{var l;return[o&&i("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),Q=[null,"prominent","default","comfortable","compact"],tt=B({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Q.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...D(),...G(),...j(),...P({tag:"header"}),...N()},"v-toolbar"),x=h()({name:"VToolbar",props:tt(),setup(e,r){var m;let{slots:t}=r;const{backgroundColorClasses:o,backgroundColorStyles:l}=Y(F(e,"color")),{borderClasses:d}=J(e),{elevationClasses:n}=U(e),{roundedClasses:a}=W(e),{themeClasses:u}=O(e),f=R(!!(e.extended||((m=t.extension)==null?void 0:m.call(t)))),c=V(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=V(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return q({VBtn:{variant:"text"}}),C(()=>{var _;const I=!!(e.title||t.title),$=!!(t.image||e.image),p=(_=t.extension)==null?void 0:_.call(t);return f.value=!!(e.extended||p),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,d.value,n.value,a.value,u.value],style:[l.value]},{default:()=>[$&&i("div",{key:"image",class:"v-toolbar__image"},[i(b,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var y;return[t.image?(y=t.image)==null?void 0:y.call(t):i(X,null,null)]}})]),i(b,{defaults:{VTabs:{height:v(c.value)}}},{default:()=>{var y,T,S;return[i("div",{class:"v-toolbar__content",style:{height:v(c.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(y=t.prepend)==null?void 0:y.call(t)]),I&&i(M,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(S=t.append)==null?void 0:S.call(t)])])]}}),i(b,{defaults:{VTabs:{height:v(g.value)}}},{default:()=>[i(Z,null,{default:()=>[f.value&&i("div",{class:"v-toolbar__extension",style:{height:v(g.value)}},[p])]})]})]})}),{contentHeight:c,extensionHeight:g}}});function it(e){var r;return z(e,Object.keys((r=x==null?void 0:x.props)!=null?r:{}))}export{x as V,K as a,M as b,ot as c,at as d,it as f,tt as m};
