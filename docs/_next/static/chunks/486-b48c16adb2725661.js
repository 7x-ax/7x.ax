(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(67294))&&o.__esModule?o:{default:o},l=n(76273),i=n(22725),a=n(63462),s=n(21018),c=n(57190),f=n(71210),d=n(98684);var p="undefined"!==typeof u.default.useTransition,v={};function m(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var b=u.default.forwardRef((function(e,t){var n,o=e.href,b=e.as,h=e.children,E=e.prefetch,y=e.passHref,g=e.replace,P=e.soft,w=e.shallow,S=e.scroll,T=e.locale,O=e.onClick,x=e.onMouseEnter,C=e.legacyBehavior,M=void 0===C?!0!==Boolean(!0):C,A=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=h,!M||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var F=!1!==E,R=r(p?u.default.useTransition():[],2)[1],I=u.default.useContext(a.RouterContext),L=u.default.useContext(s.AppRouterContext);L&&(I=L);var N,j=u.default.useMemo((function(){var e=r(l.resolveHref(I,o,!0),2),t=e[0],n=e[1];return{href:t,as:b?l.resolveHref(I,b):n||t}}),[I,o,b]),k=j.href,_=j.as,D=u.default.useRef(k),H=u.default.useRef(_);M&&(N=u.default.Children.only(n));var B=M?N&&"object"===typeof N&&N.ref:t,z=r(c.useIntersection({rootMargin:"200px"}),3),U=z[0],$=z[1],V=z[2],Y=u.default.useCallback((function(e){H.current===_&&D.current===k||(V(),H.current=_,D.current=k),U(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[_,B,k,V,U]);u.default.useEffect((function(){var e=$&&F&&l.isLocalURL(k),t="undefined"!==typeof T?T:I&&I.locale,n=v[k+"%"+_+(t?"%"+t:"")];e&&!n&&m(I,k,_,{locale:t})}),[_,k,$,T,F,I]);var Z={ref:Y,onClick:function(e){M||"function"!==typeof O||O(e),M&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,a,s,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[u?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a})};c?c(f):f()}}(e,I,k,_,g,P,w,S,T,L?R:void 0)},onMouseEnter:function(e){M||"function"!==typeof x||x(e),M&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),l.isLocalURL(k)&&m(I,k,_,{priority:!0})}};if(!M||y||"a"===N.type&&!("href"in N.props)){var G="undefined"!==typeof T?T:I&&I.locale,q=I&&I.isLocaleDomain&&f.getDomainLocale(_,G,I.locales,I.domainLocales);Z.href=q||d.addBasePath(i.addLocale(_,G,I&&I.defaultLocale))}return M?u.default.cloneElement(N,Z):u.default.createElement("a",Object.assign({},A,Z),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!l,c=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],v=r(o.useState(null),2),m=v[0],b=v[1];o.useEffect((function(){if(l){if(c.current&&(c.current(),c.current=void 0),s||d)return;return m&&m.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},a.push(n),i.set(n,t),t}(n),o=r.id,u=r.observer,l=r.elements;return l.set(e,t),u.observe(e),function(){if(l.delete(e),u.unobserve(e),0===l.size){u.disconnect(),i.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[m,s,n,t,d]);var h=o.useCallback((function(){p(!1)}),[]);return[b,d,h]};var o=n(67294),u=n(9311),l="function"===typeof IntersectionObserver;var i=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(67294))&&r.__esModule?r:{default:r};var u=o.default.createContext(null);t.AppRouterContext=u;var l=o.default.createContext(null);t.AppTreeContext=l;var i=o.default.createContext(null);t.FullAppTreeContext=i},9008:function(e,t,n){e.exports=n(5443)},41664:function(e,t,n){e.exports=n(48418)},61363:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},40396:function(e,t,n){"use strict";n.d(t,{J:function(){return z}});var r=n(67294),o=n(32984),u=n(12351),l=n(23784),i=n(19946),a=n(61363);function s(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}var c=n(84575),f=n(16567),d=n(14157),p=n(3855);function v(e,t,n){let o=(0,p.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var m=n(15466);function b(...e){return(0,r.useMemo)((()=>(0,m.r)(...e)),[...e])}var h=n(46045),E=n(73781);var y=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(y||{});function g(){let e=(0,r.useRef)(0);return function(e,t,n){let o=(0,p.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}var P,w,S=((w=S||{})[w.Open=0]="Open",w[w.Closed=1]="Closed",w),T=((P=T||{})[P.TogglePopover=0]="TogglePopover",P[P.ClosePopover=1]="ClosePopover",P[P.SetButton=2]="SetButton",P[P.SetButtonId=3]="SetButtonId",P[P.SetPanel=4]="SetPanel",P[P.SetPanelId=5]="SetPanelId",P);let O={0:e=>({...e,popoverState:(0,o.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},x=(0,r.createContext)(null);function C(e){let t=(0,r.useContext)(x);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}x.displayName="PopoverContext";let M=(0,r.createContext)(null);function A(e){let t=(0,r.useContext)(M);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}M.displayName="PopoverAPIContext";let F=(0,r.createContext)(null);function R(){return(0,r.useContext)(F)}F.displayName="PopoverGroupContext";let I=(0,r.createContext)(null);function L(e,t){return(0,o.E)(t.type,O,e,t)}I.displayName="PopoverPanelContext";let N=(0,u.yV)((function(e,t){var n;let i=(0,r.useRef)(null),a=(0,l.T)(t,(0,l.h)((e=>{i.current=e}))),s=(0,r.useReducer)(L,{popoverState:1,buttons:[],button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,r.createRef)(),afterPanelSentinel:(0,r.createRef)()}),[{popoverState:d,button:m,buttonId:h,panel:y,panelId:g,beforePanelSentinel:P,afterPanelSentinel:w},S]=s,T=b(null!=(n=i.current)?n:m),O=(0,r.useMemo)((()=>{if(!m||!y)return!1;for(let l of document.querySelectorAll("body > *"))if(Number(null==l?void 0:l.contains(m))^Number(null==l?void 0:l.contains(y)))return!0;let e=(0,c.GO)(),t=e.indexOf(m),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],u=e[r];return!y.contains(o)&&!y.contains(u)}),[m,y]),C=(0,p.E)(h),A=(0,p.E)(g),F=(0,r.useMemo)((()=>({buttonId:C,panelId:A,close:()=>S({type:1})})),[C,A,S]),I=R(),N=null==I?void 0:I.registerPopover,j=(0,E.z)((()=>{var e;return null!=(e=null==I?void 0:I.isFocusWithinPopoverGroup())?e:(null==T?void 0:T.activeElement)&&((null==m?void 0:m.contains(T.activeElement))||(null==y?void 0:y.contains(T.activeElement)))}));(0,r.useEffect)((()=>null==N?void 0:N(F)),[N,F]),function(e,t,n,o){let u=(0,p.E)(n);(0,r.useEffect)((()=>{function n(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}(null==T?void 0:T.defaultView,"focus",(e=>{var t,n,r,o;0===d&&(j()||!m||!y||e.target!==window&&(null!=(n=null==(t=P.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=w.current)?void 0:r.contains)&&o.call(r,e.target)||S({type:1})))}),!0),function(e,t,n=!0){let o=(0,r.useRef)(!1);function u(n,r){if(!o.current||n.defaultPrevented)return;let u=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=r(n);if(null!==l&&l.getRootNode().contains(l)){for(let e of u){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l)||n.composed&&n.composedPath().includes(t))return}return!(0,c.sP)(l,c.tJ.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]);let l=(0,r.useRef)(null);v("mousedown",(e=>{var t,n;o.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),v("click",(e=>{!l.current||(u(e,(()=>l.current)),l.current=null)}),!0),v("blur",(e=>u(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([m,y],((e,t)=>{S({type:1}),(0,c.sP)(t,c.tJ.Loose)||(e.preventDefault(),null==m||m.focus())}),0===d);let k=(0,E.z)((e=>{S({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:m:m;null==t||t.focus()})),_=(0,r.useMemo)((()=>({close:k,isPortalled:O})),[k,O]),D=(0,r.useMemo)((()=>({open:0===d,close:k})),[d,k]),H=e,B={ref:a};return r.createElement(x.Provider,{value:s},r.createElement(M.Provider,{value:_},r.createElement(f.up,{value:(0,o.E)(d,{0:f.ZM.Open,1:f.ZM.Closed})},(0,u.sY)({ourProps:B,theirProps:H,slot:D,defaultTag:"div",name:"Popover"}))))})),j=(0,u.yV)((function(e,t){let n=(0,i.M)(),{id:f=`headlessui-popover-button-${n}`,...p}=e,[v,m]=C("Popover.Button"),{isPortalled:P}=A("Popover.Button"),w=(0,r.useRef)(null),S=`headlessui-focus-sentinel-${(0,i.M)()}`,T=R(),O=null==T?void 0:T.closeOthers,x=(0,r.useContext)(I),M=null!==x&&x===v.panelId;(0,r.useEffect)((()=>{if(!M)return m({type:3,buttonId:f}),()=>{m({type:3,buttonId:null})}}),[f,m]);let F=(0,l.T)(w,t,M?null:e=>{if(e)v.buttons.push(f);else{let e=v.buttons.indexOf(f);-1!==e&&v.buttons.splice(e,1)}v.buttons.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&m({type:2,button:e})}),L=(0,l.T)(w,t),N=b(w),j=(0,E.z)((e=>{var t,n,r;if(M){if(1===v.popoverState)return;switch(e.key){case a.R.Space:case a.R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),m({type:1}),null==(r=v.button)||r.focus()}}else switch(e.key){case a.R.Space:case a.R.Enter:e.preventDefault(),e.stopPropagation(),1===v.popoverState&&(null==O||O(v.buttonId)),m({type:0});break;case a.R.Escape:if(0!==v.popoverState)return null==O?void 0:O(v.buttonId);if(!w.current||(null==N?void 0:N.activeElement)&&!w.current.contains(N.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:1})}})),k=(0,E.z)((e=>{M||e.key===a.R.Space&&e.preventDefault()})),_=(0,E.z)((t=>{var n,r;s(t.currentTarget)||e.disabled||(M?(m({type:1}),null==(n=v.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===v.popoverState&&(null==O||O(v.buttonId)),m({type:0}),null==(r=v.button)||r.focus()))})),D=(0,E.z)((e=>{e.preventDefault(),e.stopPropagation()})),H=0===v.popoverState,B=(0,r.useMemo)((()=>({open:H})),[H]),z=(0,d.f)(e,w),U=M?{ref:L,type:z,onKeyDown:j,onClick:_}:{ref:F,id:v.buttonId,type:z,"aria-expanded":e.disabled?void 0:0===v.popoverState,"aria-controls":v.panel?v.panelId:void 0,onKeyDown:j,onKeyUp:k,onClick:_,onMouseDown:D},$=g(),V=(0,E.z)((()=>{let e=v.panel;e&&(0,o.E)($.current,{[y.Forwards]:()=>(0,c.jA)(e,c.TO.First),[y.Backwards]:()=>(0,c.jA)(e,c.TO.Last)})}));return r.createElement(r.Fragment,null,(0,u.sY)({ourProps:U,theirProps:p,slot:B,defaultTag:"button",name:"Popover.Button"}),H&&!M&&P&&r.createElement(h._,{id:S,features:h.A.Focusable,as:"button",type:"button",onFocus:V}))})),k=u.AN.RenderStrategy|u.AN.Static,_=(0,u.yV)((function(e,t){let n=(0,i.M)(),{id:o=`headlessui-popover-overlay-${n}`,...a}=e,[{popoverState:c},d]=C("Popover.Overlay"),p=(0,l.T)(t),v=(0,f.oJ)(),m=null!==v?v===f.ZM.Open:0===c,b=(0,E.z)((e=>{if(s(e.currentTarget))return e.preventDefault();d({type:1})})),h=(0,r.useMemo)((()=>({open:0===c})),[c]);return(0,u.sY)({ourProps:{ref:p,id:o,"aria-hidden":!0,onClick:b},theirProps:a,slot:h,defaultTag:"div",features:k,visible:m,name:"Popover.Overlay"})})),D=u.AN.RenderStrategy|u.AN.Static,H=(0,u.yV)((function(e,t){let n=(0,i.M)(),{id:s=`headlessui-popover-panel-${n}`,focus:d=!1,...p}=e,[v,m]=C("Popover.Panel"),{close:P,isPortalled:w}=A("Popover.Panel"),S=`headlessui-focus-sentinel-before-${(0,i.M)()}`,T=`headlessui-focus-sentinel-after-${(0,i.M)()}`,O=(0,r.useRef)(null),x=(0,l.T)(O,t,(e=>{m({type:4,panel:e})})),M=b(O);(0,r.useEffect)((()=>(m({type:5,panelId:s}),()=>{m({type:5,panelId:null})})),[s,m]);let F=(0,f.oJ)(),R=null!==F?F===f.ZM.Open:0===v.popoverState,L=(0,E.z)((e=>{var t;if(e.key===a.R.Escape){if(0!==v.popoverState||!O.current||(null==M?void 0:M.activeElement)&&!O.current.contains(M.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:1}),null==(t=v.button)||t.focus()}}));(0,r.useEffect)((()=>{var t;e.static||1===v.popoverState&&(null==(t=e.unmount)||t)&&m({type:4,panel:null})}),[v.popoverState,e.unmount,e.static,m]),(0,r.useEffect)((()=>{if(!d||0!==v.popoverState||!O.current)return;let e=null==M?void 0:M.activeElement;O.current.contains(e)||(0,c.jA)(O.current,c.TO.First)}),[d,O,v.popoverState]);let N=(0,r.useMemo)((()=>({open:0===v.popoverState,close:P})),[v,P]),j={ref:x,id:v.panelId,onKeyDown:L,onBlur:d&&0===v.popoverState?e=>{var t,n,r,o,u;let l=e.relatedTarget;!l||!O.current||null!=(t=O.current)&&t.contains(l)||(m({type:1}),((null==(r=null==(n=v.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,l))||(null==(u=null==(o=v.afterPanelSentinel.current)?void 0:o.contains)?void 0:u.call(o,l)))&&l.focus({preventScroll:!0}))}:void 0,tabIndex:-1},k=g(),_=(0,E.z)((()=>{let e=O.current;e&&(0,o.E)(k.current,{[y.Forwards]:()=>{(0,c.jA)(e,c.TO.First)},[y.Backwards]:()=>{var e;null==(e=v.button)||e.focus({preventScroll:!0})}})})),H=(0,E.z)((()=>{let e=O.current;e&&(0,o.E)(k.current,{[y.Forwards]:()=>{var e,t,n;if(!v.button)return;let r=(0,c.GO)(),o=r.indexOf(v.button),u=r.slice(0,o+1),l=[...r.slice(o+1),...u];for(let i of l.slice())if((null==(t=null==(e=null==i?void 0:i.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=v.panel)?void 0:n.contains(i))){let e=l.indexOf(i);-1!==e&&l.splice(e,1)}(0,c.jA)(l,c.TO.First,{sorted:!1})},[y.Backwards]:()=>(0,c.jA)(e,c.TO.Last)})}));return r.createElement(I.Provider,{value:v.panelId},R&&w&&r.createElement(h._,{id:S,ref:v.beforePanelSentinel,features:h.A.Focusable,as:"button",type:"button",onFocus:_}),(0,u.sY)({ourProps:j,theirProps:p,slot:N,defaultTag:"div",features:D,visible:R,name:"Popover.Panel"}),R&&w&&r.createElement(h._,{id:T,ref:v.afterPanelSentinel,features:h.A.Focusable,as:"button",type:"button",onFocus:H}))})),B=(0,u.yV)((function(e,t){let n=(0,r.useRef)(null),o=(0,l.T)(n,t),[i,a]=(0,r.useState)([]),s=(0,E.z)((e=>{a((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),c=(0,E.z)((e=>(a((t=>[...t,e])),()=>s(e)))),f=(0,E.z)((()=>{var e;let t=(0,m.r)(n);if(!t)return!1;let r=t.activeElement;return!(null==(e=n.current)||!e.contains(r))||i.some((e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))}))})),d=(0,E.z)((e=>{for(let t of i)t.buttonId.current!==e&&t.close()})),p=(0,r.useMemo)((()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:f,closeOthers:d})),[c,s,f,d]),v=(0,r.useMemo)((()=>({})),[]),b=e,h={ref:o};return r.createElement(F.Provider,{value:p},(0,u.sY)({ourProps:h,theirProps:b,slot:v,defaultTag:"div",name:"Popover.Group"}))})),z=Object.assign(N,{Button:j,Overlay:_,Panel:H,Group:B})},39897:function(e,t,n){"use strict";n.d(t,{u:function(){return j}});var r=n(67294),o=n(12351),u=n(16567),l=n(32984),i=n(16723);function a(){let e=(0,r.useRef)(!1);return(0,i.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(3855),c=n(82180),f=n(23784);var d=n(81021);function p(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add((()=>e.removeEventListener(t,r,o)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return(0,d.Y)((()=>{t.current&&e[0]()})),n.add((()=>{t.current=!1}))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function b(e,t,n,r){let o=n?"enter":"leave",u=p(),i=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===o&&(e.removeAttribute("hidden"),e.style.display="");let a=(0,l.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,l.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,l.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),v(e,...a,...c),u.nextFrame((()=>{m(e,...c),v(e,...s),function(e,t){let n=p();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[u,l]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(u+l!==0){let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...a),v(e,...t.entered),i())))})),u.dispose}function h(){let[e]=(0,r.useState)(p);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}function E({container:e,direction:t,classes:n,onStart:r,onStop:o}){let u=a(),l=h(),c=(0,s.E)(t);(0,i.e)((()=>{let t=p();l.add(t.dispose);let i=e.current;if(i&&"idle"!==c.current&&u.current)return t.dispose(),r.current(c.current),t.add(b(i,n.current,"enter"===c.current,(()=>{t.dispose(),o.current(c.current)}))),t.dispose}),[t])}var y=n(73781);function g(...e){return e.filter(Boolean).join(" ")}function P(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let w=(0,r.createContext)(null);w.displayName="TransitionContext";var S,T=((S=T||{}).Visible="visible",S.Hidden="hidden",S);let O=(0,r.createContext)(null);function x(e){return"children"in e?x(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function C(e,t){let n=(0,s.E)(e),u=(0,r.useRef)([]),i=a(),c=h(),f=(0,y.z)(((e,t=o.l4.Hidden)=>{let r=u.current.findIndex((({el:t})=>t===e));-1!==r&&((0,l.E)(t,{[o.l4.Unmount](){u.current.splice(r,1)},[o.l4.Hidden](){u.current[r].state="hidden"}}),c.microTask((()=>{var e;!x(u)&&i.current&&(null==(e=n.current)||e.call(n))})))})),d=(0,y.z)((e=>{let t=u.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):u.current.push({el:e,state:"visible"}),()=>f(e,o.l4.Unmount)})),p=(0,r.useRef)([]),v=(0,r.useRef)(Promise.resolve()),m=(0,r.useRef)({enter:[],leave:[],idle:[]}),b=(0,y.z)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(m.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?v.current=v.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),E=(0,y.z)(((e,t,n)=>{Promise.all(m.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:u,register:d,unregister:f,onStart:b,onStop:E,wait:v,chains:m})),[d,f,u,b,E,m,v])}function M(){}O.displayName="NestingContext";let A=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function F(e){var t;let n={};for(let r of A)n[r]=null!=(t=e[r])?t:M;return n}let R=o.AN.RenderStrategy,I=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:i,beforeLeave:a,afterLeave:d,enter:p,enterFrom:v,enterTo:m,entered:b,leave:h,leaveFrom:S,leaveTo:T,...M}=e,A=(0,r.useRef)(null),I=(0,f.T)(A,t),L=M.unmount?o.l4.Unmount:o.l4.Hidden,{show:N,appear:j,initial:k}=function(){let e=(0,r.useContext)(w);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[_,D]=(0,r.useState)(N?"visible":"hidden"),H=function(){let e=(0,r.useContext)(O);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:z}=H,U=(0,r.useRef)(null);(0,r.useEffect)((()=>B(A)),[B,A]),(0,r.useEffect)((()=>{if(L===o.l4.Hidden&&A.current)return N&&"visible"!==_?void D("visible"):(0,l.E)(_,{hidden:()=>z(A),visible:()=>B(A)})}),[_,A,B,z,N,L]);let $=(0,s.E)({enter:P(p),enterFrom:P(v),enterTo:P(m),entered:P(b),leave:P(h),leaveFrom:P(S),leaveTo:P(T)}),V=function(e){let t=(0,r.useRef)(F(e));return(0,r.useEffect)((()=>{t.current=F(e)}),[e]),t}({beforeEnter:n,afterEnter:i,beforeLeave:a,afterLeave:d}),Y=(0,c.H)();(0,r.useEffect)((()=>{if(Y&&"visible"===_&&null===A.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[A,_,Y]);let Z=k&&!j,G=!Y||Z||U.current===N?"idle":N?"enter":"leave",q=(0,y.z)((e=>(0,l.E)(e,{enter:()=>V.current.beforeEnter(),leave:()=>V.current.beforeLeave(),idle:()=>{}}))),J=(0,y.z)((e=>(0,l.E)(e,{enter:()=>V.current.afterEnter(),leave:()=>V.current.afterLeave(),idle:()=>{}}))),K=C((()=>{D("hidden"),z(A)}),H);E({container:A,classes:$,direction:G,onStart:(0,s.E)((e=>{K.onStart(A,e,q)})),onStop:(0,s.E)((e=>{K.onStop(A,e,J),"leave"===e&&!x(K)&&(D("hidden"),z(A))}))}),(0,r.useEffect)((()=>{!Z||(L===o.l4.Hidden?U.current=null:U.current=N)}),[N,Z,_]);let W=M,X={ref:I};return j&&N&&("undefined"==typeof window||"undefined"==typeof document)&&(W={...W,className:g(M.className,...$.current.enter,...$.current.enterFrom)}),r.createElement(O.Provider,{value:K},r.createElement(u.up,{value:(0,l.E)(_,{visible:u.ZM.Open,hidden:u.ZM.Closed})},(0,o.sY)({ourProps:X,theirProps:W,defaultTag:"div",features:R,visible:"visible"===_,name:"Transition.Child"})))})),L=(0,o.yV)((function(e,t){let{show:n,appear:a=!1,unmount:s,...d}=e,p=(0,r.useRef)(null),v=(0,f.T)(p,t);(0,c.H)();let m=(0,u.oJ)();if(void 0===n&&null!==m&&(n=(0,l.E)(m,{[u.ZM.Open]:!0,[u.ZM.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[b,h]=(0,r.useState)(n?"visible":"hidden"),E=C((()=>{h("hidden")})),[y,g]=(0,r.useState)(!0),P=(0,r.useRef)([n]);(0,i.e)((()=>{!1!==y&&P.current[P.current.length-1]!==n&&(P.current.push(n),g(!1))}),[P,n]);let S=(0,r.useMemo)((()=>({show:n,appear:a,initial:y})),[n,a,y]);(0,r.useEffect)((()=>{if(n)h("visible");else if(x(E)){let e=p.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,E]);let T={unmount:s};return r.createElement(O.Provider,{value:E},r.createElement(w.Provider,{value:S},(0,o.sY)({ourProps:{...T,as:r.Fragment,children:r.createElement(I,{ref:v,...T,...d})},theirProps:{},defaultTag:r.Fragment,features:R,visible:"visible"===b,name:"Transition"})))})),N=(0,o.yV)((function(e,t){let n=null!==(0,r.useContext)(w),o=null!==(0,u.oJ)();return r.createElement(r.Fragment,null,!n&&o?r.createElement(L,{ref:t,...e}):r.createElement(I,{ref:t,...e}))})),j=Object.assign(L,{Child:N,Root:L})},73781:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(67294),o=n(3855);let u=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},19946:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r,o=n(67294),u=n(16723),l=n(82180);let i=0;function a(){return++i}let s=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?a:null);return(0,u.e)((()=>{null===t&&n(a())}),[t]),null!=t?""+t:void 0}},16723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(67294);let o=n(43393).s?r.useEffect:r.useLayoutEffect},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(67294),o=n(16723);function u(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},14157:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(67294),o=n(16723);function u(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function l(e,t){let[n,l]=(0,r.useState)((()=>u(e)));return(0,o.e)((()=>{l(u(e))}),[e.type,e.as]),(0,o.e)((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")}),[n,t]),n}},82180:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(67294);let o={serverHandoffComplete:!1};function u(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},23784:function(e,t,n){"use strict";n.d(t,{T:function(){return i},h:function(){return l}});var r=n(67294),o=n(73781);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[u])))?void 0:n}},46045:function(e,t,n){"use strict";n.d(t,{A:function(){return u},_:function(){return l}});var r=n(12351);var o,u=((o=u||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let l=(0,r.yV)((function(e,t){let{features:n=1,...o}=e,u={ref:t,"aria-hidden":2===(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&n)&&2!==(2&n)&&{display:"none"}}};return(0,r.sY)({ourProps:u,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})}))},16567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return l},oJ:function(){return i},up:function(){return a}});var r=n(67294);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var u,l=((u=l||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u);function i(){return(0,r.useContext)(o)}function a({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},84575:function(e,t,n){"use strict";n.d(t,{GO:function(){return d},TO:function(){return s},fE:function(){return c},jA:function(){return h},sP:function(){return v},tJ:function(){return p},z2:function(){return b}});var r=n(32984),o=n(15466);let u=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var l,i,a,s=((a=s||{})[a.First=1]="First",a[a.Previous=2]="Previous",a[a.Next=4]="Next",a[a.Last=8]="Last",a[a.WrapAround=16]="WrapAround",a[a.NoScroll=32]="NoScroll",a),c=((i=c||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),f=((l=f||{})[l.Previous=-1]="Previous",l[l.Next=1]="Next",l);function d(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(u)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var p=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(p||{});function v(e,t=0){var n;return e!==(null==(n=(0,o.r)(e))?void 0:n.body)&&(0,r.E)(t,{0:()=>e.matches(u),1(){let t=e;for(;null!==t;){if(t.matches(u))return!0;t=t.parentElement}return!1}})}let m=["textarea","input"].join(",");function b(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function h(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?b(e):e:d(e);o.length>0&&(l=l.filter((e=>!o.includes(e)))),r=null!=r?r:u.activeElement;let i,a=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(r))-1;if(4&t)return Math.max(0,l.indexOf(r))+1;if(8&t)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},f=0,p=l.length;do{if(f>=p||f+p<=0)return 0;let e=s+f;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}i=l[e],null==i||i.focus(c),f+=a}while(i!==u.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,m))&&n}(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}},32984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},81021:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:function(){return r}})},15466:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(43393);function o(e){return r.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:function(e,t,n){"use strict";n.d(t,{AN:function(){return i},l4:function(){return a},sY:function(){return s},yV:function(){return d}});var r,o,u=n(67294),l=n(32984),i=((o=i||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),a=((r=a||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:i}){let a=f(t,e);if(u)return c(a,n,r,i);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return c(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return c(a,n,r,i)}function c(e,t={},n,r){let{as:o=n,children:l,refName:i="ref",...a}=v(e,["unmount","static"]),s=void 0!==e.ref?{[i]:e.ref}:{},c="function"==typeof l?l(t):l;a.className&&"function"==typeof a.className&&(a.className=a.className(t));let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(o===u.Fragment&&Object.keys(p(a)).length>0){if(!(0,u.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,u.cloneElement)(c,Object.assign({},f(c.props,p(v(a,["ref"]))),d,s,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,u.createElement)(o,Object.assign({},v(a,["ref"]),o!==u.Fragment&&s,o!==u.Fragment&&d),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function d(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},43393:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});const r="undefined"==typeof window||"undefined"==typeof document},99534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);