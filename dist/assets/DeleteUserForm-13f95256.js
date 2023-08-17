import{m as g,r as u,b as tt,e as oe,j as p,W as nt}from"./app-83c9e60f.js";import{T as rt,I as ot}from"./TextInput-ab046267.js";import{I as lt}from"./InputLabel-2bb7520d.js";import{l as Q,s as H,a as M,u as R,b as de,D as x,X as $,o as E,t as fe,y as P,p as at,f as Te,T as it,c as ut,S as Ee,C as st,d as q,$ as te}from"./transition-ddbe9f65.js";var ye;let O=(ye=g.useId)!=null?ye:function(){let e=Q(),[t,n]=g.useState(e?()=>H.nextId():null);return M(()=>{t===null&&n(H.nextId())},[t]),t!=null?""+t:void 0};function Se(e){return H.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),ct=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ct||{});function dt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Le=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Le||{});function ft(e,t=0){var n;return e===((n=Se(e))==null?void 0:n.body)?!1:R(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var mt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(mt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let pt=["textarea","input"].join(",");function gt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,pt))!=null?n:!1}function vt(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),l=t(r);if(a===null||l===null)return 0;let o=a.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?vt(e):e:dt(e);a.length>0&&o.length>1&&(o=o.filter(m=>!a.includes(m))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=o.length,v;do{if(c>=f||c+f<=0)return 0;let m=s+c;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}v=o[m],v==null||v.focus(d),c+=i}while(v!==l.activeElement);return t&6&&gt(v)&&v.select(),2}function K(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return document.addEventListener(e,a,n),()=>document.removeEventListener(e,a,n)},[e,n])}function De(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return window.addEventListener(e,a,n),()=>window.removeEventListener(e,a,n)},[e,n])}function ht(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function a(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let d=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let c of d){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!ft(s,Le.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let l=u.useRef(null);K("pointerdown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),K("mousedown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),K("click",o=>{l.current&&(a(o,()=>l.current),l.current=null)},!0),K("touchend",o=>a(o,()=>o.target instanceof HTMLElement?o.target:null),!0),De("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function wt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Et(n)?!1:r}function Et(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let yt="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function bt(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:a,theirProps:r,slot:{},defaultTag:yt,name:"Hidden"})}let ae=x(bt);var Fe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Fe||{});function me(e,t){let n=u.useRef([]),r=E(e);u.useEffect(()=>{let a=[...n.current];for(let[l,o]of t.entries())if(n.current[l]!==o){let i=r(t,a);return n.current=t,i}},[r,...t])}function xt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var I=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(I||{});function $t(){let e=u.useRef(0);return De("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function B(...e){return u.useMemo(()=>Se(...e),[...e])}function Ce(e,t,n,r){let a=de(n);u.useEffect(()=>{e=e??window;function l(o){a.current(o)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function Tt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ne(e){let t=E(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}function Me(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let St="div";var Ae=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ae||{});function Pt(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:a,containers:l,features:o=30,...i}=e;Q()||(o=1);let s=B(n);Ft({ownerDocument:s},!!(o&16));let d=Ct({ownerDocument:s,container:n,initialFocus:a},!!(o&2));Nt({ownerDocument:s,container:n,containers:l,previousActiveElement:d},!!(o&8));let c=$t(),f=E(h=>{let T=n.current;T&&(L=>L())(()=>{R(c.current,{[I.Forwards]:()=>{X(T,F.First,{skipElements:[h.relatedTarget]})},[I.Backwards]:()=>{X(T,F.Last,{skipElements:[h.relatedTarget]})}})})}),v=at(),m=u.useRef(!1),Z={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,v.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let T=Me(l);n.current instanceof HTMLElement&&T.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Re(T,L)||(m.current?X(n.current,R(c.current,{[I.Forwards]:()=>F.Next,[I.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&N(h.target)))}};return g.createElement(g.Fragment,null,!!(o&4)&&g.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}),$({ourProps:Z,theirProps:i,defaultTag:St,name:"FocusTrap"}),!!(o&4)&&g.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}))}let Lt=x(Pt),k=Object.assign(Lt,{features:Ae}),D=[];Tt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Dt(e=!0){let t=u.useRef(D.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ft({ownerDocument:e},t){let n=Dt(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]),Ne(()=>{t&&N(n())})}function Ct({ownerDocument:e,container:t,initialFocus:n},r){let a=u.useRef(null),l=Te();return me(()=>{if(!r)return;let o=t.current;o&&fe(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){a.current=i;return}}else if(o.contains(i)){a.current=i;return}n!=null&&n.current?N(n.current):X(o,F.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=e==null?void 0:e.activeElement})},[r]),a}function Nt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},a){let l=Te();Ce(e==null?void 0:e.defaultView,"focus",o=>{if(!a||!l.current)return;let i=Me(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Re(i,d)?(r.current=d,N(d)):(o.preventDefault(),o.stopPropagation(),N(s)):N(r.current)},!0)}function Re(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=u.createContext(!1);function Mt(){return u.useContext(Oe)}function ie(e){return g.createElement(Oe.Provider,{value:e.force},e.children)}function At(e){let t=Mt(),n=u.useContext(ke),r=B(e),[a,l]=u.useState(()=>{if(!t&&n!==null||H.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{a!==null&&(r!=null&&r.body.contains(a)||r==null||r.body.appendChild(a))},[a,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),a}let Rt=u.Fragment;function Ot(e,t){let n=e,r=u.useRef(null),a=P(it(c=>{r.current=c}),t),l=B(r),o=At(r),[i]=u.useState(()=>{var c;return H.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),s=u.useContext(ue),d=Q();return M(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),M(()=>{if(i&&s)return s.register(i)},[s,i]),Ne(()=>{var c;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),d?!o||!i?null:tt.createPortal($({ourProps:{ref:a},theirProps:n,defaultTag:Rt,name:"Portal"}),i):null}let kt=u.Fragment,ke=u.createContext(null);function jt(e,t){let{target:n,...r}=e,a={ref:P(t)};return g.createElement(ke.Provider,{value:n},$({ourProps:a,theirProps:r,defaultTag:kt,name:"Popover.Group"}))}let ue=u.createContext(null);function It(){let e=u.useContext(ue),t=u.useRef([]),n=E(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=E(l=>{let o=t.current.indexOf(l);o!==-1&&t.current.splice(o,1),e&&e.unregister(l)}),a=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:l}){return g.createElement(ue.Provider,{value:a},l)},[a])]}let Ht=x(Ot),Bt=x(jt),se=Object.assign(Ht,{Group:Bt}),je=u.createContext(null);function Ie(){let e=u.useContext(je);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ie),t}return e}function Ut(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=E(l=>(t(o=>[...o,l]),()=>t(o=>{let i=o.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),a=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return g.createElement(je.Provider,{value:a},n.children)},[t])]}let Wt="p";function _t(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...a}=e,l=Ie(),o=P(t);M(()=>l.register(r),[r,l.register]);let i={ref:o,...l.props,id:r};return $({ourProps:i,theirProps:a,slot:l.slot||{},defaultTag:Wt,name:l.name||"Description"})}let Vt=x(_t),Yt=Object.assign(Vt,{}),pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function Gt(){return u.useContext(pe)}function qt({children:e,onUpdate:t,type:n,element:r,enabled:a}){let l=Gt(),o=E((...i)=>{t==null||t(...i),l(...i)});return M(()=>{let i=a===void 0||a===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,a]),g.createElement(pe.Provider,{value:o},e)}function Kt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Xt=typeof Object.is=="function"?Object.is:Kt,{useState:zt,useEffect:Jt,useLayoutEffect:Qt,useDebugValue:Zt}=oe;function en(e,t,n){const r=t(),[{inst:a},l]=zt({inst:{value:r,getSnapshot:t}});return Qt(()=>{a.value=r,a.getSnapshot=t,ne(a)&&l({inst:a})},[e,r,t]),Jt(()=>(ne(a)&&l({inst:a}),e(()=>{ne(a)&&l({inst:a})})),[e]),Zt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Xt(n,r)}catch{return!0}}function tn(e,t,n){return t()}const nn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rn=!nn,on=rn?tn:en,ln="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):on;function an(e){return ln(e.subscribe,e.getSnapshot,e.getSnapshot)}function un(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(a){return r.add(a),()=>r.delete(a)},dispatch(a,...l){let o=t[a].call(n,...l);o&&(n=o,r.forEach(i=>i()))}}}function sn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,a=r.clientWidth-r.offsetWidth,l=e-a;n.style(r,"paddingRight",`${l}px`)}}}function cn(){if(!xt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function a(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!a(d)&&(l=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function dn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function fn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=un(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:ut(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:fn(n)},a=[cn(),sn(),dn()];a.forEach(({before:l})=>l==null?void 0:l(r)),a.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!r||!a&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function mn(e,t,n){let r=an(C),a=e?r.get(e):void 0,l=a?a.count>0:!1;return M(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),l}let re=new Map,j=new Map;function be(e,t=!0){M(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function a(){var o;if(!r)return;let i=(o=j.get(r))!=null?o:1;if(i===1?j.delete(r):j.set(r,i-1),i!==1)return;let s=re.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,re.delete(r))}let l=(n=j.get(r))!=null?n:0;return j.set(r,l+1),l!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),a},[e,t])}function pn({defaultContainers:e=[],portals:t}={}){let n=u.useRef(null),r=B(n),a=E(()=>{var l;let o=[];for(let i of e)i!==null&&(i instanceof HTMLElement?o.push(i):"current"in i&&i.current instanceof HTMLElement&&o.push(i.current));if(t!=null&&t.current)for(let i of t.current)o.push(i);for(let i of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(n.current)||o.some(s=>i.contains(s))||o.push(i));return o});return{resolveContainers:a,contains:E(l=>a().some(o=>o.contains(l))),mainTreeNodeRef:n,MainTreeNode:u.useMemo(()=>function(){return g.createElement(ae,{features:z.Hidden,ref:n})},[n])}}var gn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gn||{}),vn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(vn||{});let hn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=u.createContext(null);J.displayName="DialogContext";function U(e){let t=u.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}function wn(e,t,n=()=>[document.body]){mn(e,t,r=>{var a;return{containers:[...(a=r.containers)!=null?a:[],n]}})}function En(e,t){return R(t.type,hn,e,t)}let yn="div",bn=Ee.RenderStrategy|Ee.Static;function xn(e,t){var n;let r=O(),{id:a=`headlessui-dialog-${r}`,open:l,onClose:o,initialFocus:i,__demoMode:s=!1,...d}=e,[c,f]=u.useState(0),v=st();l===void 0&&v!==null&&(l=(v&q.Open)===q.Open);let m=u.useRef(null),Z=P(m,t),h=B(m),T=e.hasOwnProperty("open")||v!==null,L=e.hasOwnProperty("onClose");if(!T&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let y=l?0:1,[W,He]=u.useReducer(En,{titleId:null,descriptionId:null,panelRef:u.createRef()}),A=E(()=>o(!1)),ge=E(w=>He({type:0,id:w})),_=Q()?s?!1:y===0:!1,V=c>1,ve=u.useContext(J)!==null,[Be,Ue]=It(),{resolveContainers:ee,mainTreeNodeRef:Y,MainTreeNode:We}=pn({portals:Be,defaultContainers:[(n=W.panelRef.current)!=null?n:m.current]}),_e=V?"parent":"leaf",he=v!==null?(v&q.Closing)===q.Closing:!1,Ve=(()=>ve||he?!1:_)(),Ye=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(Y.current)&&b instanceof HTMLElement))!=null?S:null},[Y]);be(Ye,Ve);let Ge=(()=>V?!0:_)(),qe=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(b=>b.contains(Y.current)&&b instanceof HTMLElement))!=null?S:null},[Y]);be(qe,Ge);let Ke=(()=>!(!_||V))();ht(ee,A,Ke);let Xe=(()=>!(V||y!==0))();Ce(h==null?void 0:h.defaultView,"keydown",w=>{Xe&&(w.defaultPrevented||w.key===Fe.Escape&&(w.preventDefault(),w.stopPropagation(),A()))});let ze=(()=>!(he||y!==0||ve))();wn(h,ze,ee),u.useEffect(()=>{if(y!==0||!m.current)return;let w=new ResizeObserver(S=>{for(let b of S){let G=b.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&A()}});return w.observe(m.current),()=>w.disconnect()},[y,m,A]);let[Je,Qe]=Ut(),Ze=u.useMemo(()=>[{dialogState:y,close:A,setTitleId:ge},W],[y,W,A,ge]),we=u.useMemo(()=>({open:y===0}),[y]),et={ref:Z,id:a,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":Je};return g.createElement(qt,{type:"Dialog",enabled:y===0,element:m,onUpdate:E((w,S)=>{S==="Dialog"&&R(w,{[ce.Add]:()=>f(b=>b+1),[ce.Remove]:()=>f(b=>b-1)})})},g.createElement(ie,{force:!0},g.createElement(se,null,g.createElement(J.Provider,{value:Ze},g.createElement(se.Group,{target:m},g.createElement(ie,{force:!1},g.createElement(Qe,{slot:we,name:"Dialog.Description"},g.createElement(k,{initialFocus:i,containers:ee,features:_?R(_e,{parent:k.features.RestoreFocus,leaf:k.features.All&~k.features.FocusLock}):k.features.None},g.createElement(Ue,null,$({ourProps:et,theirProps:d,slot:we,defaultTag:yn,features:bn,visible:y===0,name:"Dialog"}))))))))),g.createElement(We,null))}let $n="div";function Tn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...a}=e,[{dialogState:l,close:o}]=U("Dialog.Overlay"),i=P(t),s=E(c=>{if(c.target===c.currentTarget){if(wt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),d=u.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:a,slot:d,defaultTag:$n,name:"Dialog.Overlay"})}let Sn="div";function Pn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...a}=e,[{dialogState:l},o]=U("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:l===0}),[l]);return g.createElement(ie,{force:!0},g.createElement(se,null,$({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:a,slot:s,defaultTag:Sn,name:"Dialog.Backdrop"})))}let Ln="div";function Dn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...a}=e,[{dialogState:l},o]=U("Dialog.Panel"),i=P(t,o.panelRef),s=u.useMemo(()=>({open:l===0}),[l]),d=E(c=>{c.stopPropagation()});return $({ourProps:{ref:i,id:r,onClick:d},theirProps:a,slot:s,defaultTag:Ln,name:"Dialog.Panel"})}let Fn="h2";function Cn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...a}=e,[{dialogState:l,setTitleId:o}]=U("Dialog.Title"),i=P(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:i,id:r},theirProps:a,slot:s,defaultTag:Fn,name:"Dialog.Title"})}let Nn=x(xn),Mn=x(Pn),An=x(Dn),Rn=x(Tn),On=x(Cn),xe=Object.assign(Nn,{Backdrop:Mn,Panel:An,Overlay:Rn,Title:On,Description:Yt});function $e({className:e="",disabled:t,children:n,...r}){return p.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function kn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:a=()=>{}}){const l=()=>{r&&a()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return p.jsx(te,{show:t,as:u.Fragment,leave:"duration-200",children:p.jsxs(xe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[p.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),p.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:p.jsx(xe.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function jn({type:e="button",className:t="",disabled:n,children:r,...a}){return p.jsx("button",{...a,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Wn({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:a,setData:l,delete:o,processing:i,reset:s,errors:d}=nt({password:""}),c=()=>{n(!0)},f=m=>{m.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>r.current.focus(),onFinish:()=>s()})},v=()=>{n(!1),s()};return p.jsxs("section",{className:`space-y-6 ${e}`,children:[p.jsxs("header",{children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),p.jsx($e,{onClick:c,children:"Delete Account"}),p.jsx(kn,{show:t,onClose:v,children:p.jsxs("form",{onSubmit:f,className:"p-6",children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),p.jsxs("div",{className:"mt-6",children:[p.jsx(lt,{htmlFor:"password",value:"Password",className:"sr-only"}),p.jsx(rt,{id:"password",type:"password",name:"password",ref:r,value:a.password,onChange:m=>l("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),p.jsx(ot,{message:d.password,className:"mt-2"})]}),p.jsxs("div",{className:"mt-6 flex justify-end",children:[p.jsx(jn,{onClick:v,children:"Cancel"}),p.jsx($e,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{Wn as default};