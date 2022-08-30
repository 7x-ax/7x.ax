(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{79361:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},98461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79361).default,a=n(94941).Z,i=n(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,f=void 0!==o&&o,g=e.priority,m=void 0!==g&&g,T=e.loading,P=e.className,E=e.quality,O=e.width,I=e.height,C=e.style,R=e.onLoadingComplete,j=e.placeholder,k=void 0===j?"empty":j,A=e.blurDataURL,_=p(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","style","onLoadingComplete","placeholder","blurDataURL"]);if(!b)throw new Error('The "next/future/image" component is experimental and may be subject to breaking changes. To enable this experiment, please include `experimental: { images: { allowFutureImage: true } }` in your next.config.js file.');var F=l.useContext(c.ImageConfigContext),M=l.useMemo((function(){var e=v||F||u.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return d({},e,{allSizes:t,deviceSizes:n})}),[F]),N=_,L=z;if("loader"in N){if(N.loader){var D=N.loader;L=function(e){e.config;var t=p(e,["config"]);return D(t)}}delete N.loader}var q="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var U=y(t)?t.default:t;if(!U.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(A=A||U.blurDataURL,q=U.src,I=I||U.height,O=O||U.width,!U.height||!U.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)))}var W=!m&&("lazy"===T||"undefined"===typeof T);((t="string"===typeof t?t:q).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,W=!1);h&&(f=!0);var B=a(l.useState(!1),2),G=B[0],V=B[1],$=w(O),Y=w(I),H=w(E);0;var J=Object.assign({},C),Z="url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat($," ").concat(Y,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(A,"'/%3E%3C/svg%3E\")"),K="blur"!==k||G?{}:d({backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"0% 0%"},(null==A?void 0:A.startsWith("data:image"))?{backgroundImage:Z}:{filter:"blur(20px)",backgroundImage:'url("'.concat(A,'")')}),Q=x({config:M,src:t,unoptimized:f,width:$,quality:H,sizes:n,loader:L}),X=t;0;var ee,te="imagesrcset",ne="imagesizes";te="imageSrcSet",ne="imageSizes";var re=(r(ee={},te,Q.srcSet),r(ee,ne,Q.sizes),ee),ae=l.useRef(R);l.useEffect((function(){ae.current=R}),[R]);var ie=d({isLazy:W,imgAttributes:Q,heightInt:Y,widthInt:$,qualityInt:H,className:P,imgStyle:J,blurStyle:K,loading:T,config:M,unoptimized:f,placeholder:k,loader:L,srcString:X,onLoadingCompleteRef:ae,setBlurComplete:V,noscriptSizes:n},N);return l.default.createElement(l.default.Fragment,null,l.default.createElement(S,Object.assign({},ie)),m?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src},re))):null)};var o,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(67294)),s=(o=n(5443))&&o.__esModule?o:{default:o},u=n(99309),c=n(59977);n(63794);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0,experimentalFuture:!0}||{},m=g.experimentalFuture,b=void 0!==m&&m,h=g.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0,experimentalFuture:!0};new Map;function y(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,a=e.width,o=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n){var r=e.deviceSizes,a=e.allSizes;if(n){for(var o,l=/(^|\s)(1?\d?\d)vw/g,s=[];o=l.exec(n);o)s.push(parseInt(o[2]));if(s.length){var u,c=.01*(u=Math).min.apply(u,i(s));return{widths:a.filter((function(e){return e>=r[0]*c})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t?{widths:r,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,l),c=u.widths,d=u.kind,f=c.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:c.map((function(e,r){return"".concat(s({config:t,src:n,quality:o,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:s({config:t,src:n,quality:o,width:c[f]})}}function w(e){return"number"===typeof e||"undefined"===typeof e?e:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function T(e,t,n,r,a){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&("blur"===n&&a(!0),null==r?void 0:r.current)){var t=e.naturalWidth,i=e.naturalHeight;r.current({naturalWidth:t,naturalHeight:i})}})))}var S=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,a=e.qualityInt,i=e.className,o=e.imgStyle,s=e.blurStyle,u=e.isLazy,c=e.placeholder,f=e.loading,g=e.srcString,m=e.config,b=e.unoptimized,h=e.loader,v=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.onLoad,S=e.onError,z=e.noscriptSizes,P=p(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","onLoad","onError","noscriptSizes"]);return f=u?"lazy":f,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},P,t,{width:r,height:n,decoding:"async","data-nimg":"future",className:i,loading:f,style:d({},o,s),ref:l.useCallback((function(e){(null==e?void 0:e.complete)&&T(e,g,c,v,y)}),[g,c,v,y]),onLoad:function(e){T(e.currentTarget,g,c,v,y),w&&w(e)},onError:function(e){"blur"===c&&y(!0),S&&S(e)}})),"blur"===c&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},P,x({config:m,src:g,unoptimized:b,width:r,quality:a,sizes:z,loader:h}),{width:r,height:n,decoding:"async","data-nimg":"future",style:o,className:i,loading:f}))))};function z(e){var t=e.config,n=e.src,r=e.width,a=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61608:function(e,t,n){e.exports=n(98461)},49808:function(e,t,n){"use strict";n.d(t,{O:function(){return A}});var r=n(67294),a=n(12351),i=n(19946),o=n(32984),l=n(61363),s=n(84575),u=n(16723),c=n(23784),d=n(14157),f=n(3855),p=n(46045);function g({onFocus:e}){let[t,n]=(0,r.useState)(!0);return t?r.createElement(p._,{as:"button",type:"button",features:p.A.Focusable,onFocus:t=>{t.preventDefault();let r,a=50;r=requestAnimationFrame((function t(){if(!(a--<=0))return e()?(n(!1),void cancelAnimationFrame(r)):void(r=requestAnimationFrame(t));r&&cancelAnimationFrame(r)}))}}):null}var m,b=n(73781),h=((m=h||{})[m.SetSelectedIndex=0]="SetSelectedIndex",m[m.RegisterTab=1]="RegisterTab",m[m.UnregisterTab=2]="UnregisterTab",m[m.RegisterPanel=3]="RegisterPanel",m[m.UnregisterPanel=4]="UnregisterPanel",m[m.ForceRerender=5]="ForceRerender",m);let v={0(e,t){let n=e.tabs.filter((e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}));if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(n[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(n[n.length-1])};let r=e.tabs.slice(0,t.index),a=[...e.tabs.slice(t.index),...r].find((e=>n.includes(e)));return a?{...e,selectedIndex:e.tabs.indexOf(a)}:e},1:(e,t)=>e.tabs.includes(t.tab)?e:{...e,tabs:(0,s.z2)([...e.tabs,t.tab],(e=>e.current))},2:(e,t)=>({...e,tabs:(0,s.z2)(e.tabs.filter((e=>e!==t.tab)),(e=>e.current))}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:[...e.panels,t.panel]},4:(e,t)=>({...e,panels:e.panels.filter((e=>e!==t.panel))}),5:e=>({...e})},y=(0,r.createContext)(null);function x(e){let t=(0,r.useContext)(y);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}y.displayName="TabsSSRContext";let w=(0,r.createContext)(null);function T(e){let t=(0,r.useContext)(w);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}w.displayName="TabsDataContext";let S=(0,r.createContext)(null);function z(e){let t=(0,r.useContext)(S);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}function P(e,t){return(0,o.E)(t.type,v,e,t)}S.displayName="TabsActionsContext";let E=r.Fragment,O=(0,a.yV)((function(e,t){let{defaultIndex:n=0,vertical:i=!1,manual:o=!1,onChange:l,selectedIndex:s=null,...d}=e;const p=i?"vertical":"horizontal",m=o?"manual":"auto";let b=(0,c.T)(t),[h,v]=(0,r.useReducer)(P,{selectedIndex:null!=s?s:n,tabs:[],panels:[]}),x=(0,r.useMemo)((()=>({selectedIndex:h.selectedIndex})),[h.selectedIndex]),T=(0,f.E)(l||(()=>{})),z=(0,f.E)(h.tabs),O=(0,r.useMemo)((()=>({orientation:p,activation:m,...h})),[p,m,h]),I=(0,f.E)(h.selectedIndex),C=(0,r.useMemo)((()=>({registerTab:e=>(v({type:1,tab:e}),()=>v({type:2,tab:e})),registerPanel:e=>(v({type:3,panel:e}),()=>v({type:4,panel:e})),forceRerender(){v({type:5})},change(e){I.current!==e&&T.current(e),I.current=e,v({type:0,index:e})}})),[v]);(0,u.e)((()=>{v({type:0,index:null!=s?s:n})}),[s]);let R=(0,r.useRef)({tabs:[],panels:[]}),j={ref:b};return r.createElement(y.Provider,{value:R},r.createElement(S.Provider,{value:C},r.createElement(w.Provider,{value:O},O.tabs.length<=0&&r.createElement(g,{onFocus:()=>{var e,t;for(let n of z.current)if(0===(null==(e=n.current)?void 0:e.tabIndex))return null==(t=n.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:j,theirProps:d,slot:x,defaultTag:E,name:"Tabs"}))))})),I=(0,a.yV)((function(e,t){let{orientation:n,selectedIndex:r}=T("Tab.List"),i=(0,c.T)(t);return(0,a.sY)({ourProps:{ref:i,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})})),C=(0,a.yV)((function(e,t){var n,f;let p=`headlessui-tabs-tab-${(0,i.M)()}`,{orientation:g,activation:m,selectedIndex:h,tabs:v,panels:y}=T("Tab"),w=z("Tab"),S=x("Tab"),P=(0,r.useRef)(null),E=(0,c.T)(P,t,(e=>{!e||w.forceRerender()}));(0,u.e)((()=>w.registerTab(P)),[w,P]);let O=S.current.tabs.indexOf(p);-1===O&&(O=S.current.tabs.push(p)-1);let I=v.indexOf(P);-1===I&&(I=O);let C=I===h,R=(0,b.z)((e=>{let t=v.map((e=>e.current)).filter(Boolean);if(e.key===l.R.Space||e.key===l.R.Enter)return e.preventDefault(),e.stopPropagation(),void w.change(I);switch(e.key){case l.R.Home:case l.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,s.jA)(t,s.TO.First);case l.R.End:case l.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,s.jA)(t,s.TO.Last)}return(0,o.E)(g,{vertical:()=>e.key===l.R.ArrowUp?(0,s.jA)(t,s.TO.Previous|s.TO.WrapAround):e.key===l.R.ArrowDown?(0,s.jA)(t,s.TO.Next|s.TO.WrapAround):void 0,horizontal:()=>e.key===l.R.ArrowLeft?(0,s.jA)(t,s.TO.Previous|s.TO.WrapAround):e.key===l.R.ArrowRight?(0,s.jA)(t,s.TO.Next|s.TO.WrapAround):void 0})?e.preventDefault():void 0})),j=(0,b.z)((()=>{var e;null==(e=P.current)||e.focus()})),k=(0,b.z)((()=>{var e;null==(e=P.current)||e.focus(),w.change(I)})),A=(0,b.z)((e=>{e.preventDefault()})),_=(0,r.useMemo)((()=>({selected:C})),[C]),F=e,M={ref:E,onKeyDown:R,onFocus:"manual"===m?j:k,onMouseDown:A,onClick:k,id:p,role:"tab",type:(0,d.f)(e,P),"aria-controls":null==(f=null==(n=y[I])?void 0:n.current)?void 0:f.id,"aria-selected":C,tabIndex:C?0:-1};return(0,a.sY)({ourProps:M,theirProps:F,slot:_,defaultTag:"button",name:"Tabs.Tab"})})),R=(0,a.yV)((function(e,t){let{selectedIndex:n}=T("Tab.Panels"),i=(0,c.T)(t),o=(0,r.useMemo)((()=>({selectedIndex:n})),[n]);return(0,a.sY)({ourProps:{ref:i},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})})),j=a.AN.RenderStrategy|a.AN.Static,k=(0,a.yV)((function(e,t){var n,o;let{selectedIndex:l,tabs:s,panels:d}=T("Tab.Panel"),f=z("Tab.Panel"),p=x("Tab.Panel"),g=`headlessui-tabs-panel-${(0,i.M)()}`,m=(0,r.useRef)(null),b=(0,c.T)(m,t,(e=>{!e||f.forceRerender()}));(0,u.e)((()=>f.registerPanel(m)),[f,m]);let h=p.current.panels.indexOf(g);-1===h&&(h=p.current.panels.push(g)-1);let v=d.indexOf(m);-1===v&&(v=h);let y=v===l,w=(0,r.useMemo)((()=>({selected:y})),[y]),S=e,P={ref:b,id:g,role:"tabpanel","aria-labelledby":null==(o=null==(n=s[v])?void 0:n.current)?void 0:o.id,tabIndex:y?0:-1};return(0,a.sY)({ourProps:P,theirProps:S,slot:w,defaultTag:"div",features:j,visible:y,name:"Tabs.Panel"})})),A=Object.assign(C,{Group:O,List:I,Panels:R,Panel:k})}}]);