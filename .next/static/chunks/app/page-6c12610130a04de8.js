(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{676:(e,t,l)=>{Promise.resolve().then(l.bind(l,5651))},7711:(e,t,l)=>{"use strict";l.d(t,{default:()=>r.a});var n=l(1956),r=l.n(n)},1956:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=l(306)._(l(580));function r(e,t){var l;let r={};"function"==typeof e&&(r.loader=e);let a={...r,...t};return(0,n.default)({...a,modules:null==(l=a.loadableGenerated)?void 0:l.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9827:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let n=l(3719);function r(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return l}},580:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=l(5155),r=l(2115),a=l(9827),o=l(9214);function u(e){return{default:e&&"default"in e?e.default:e}}let d={loader:()=>Promise.resolve(u(()=>null)),loading:null,ssr:!0},s=function(e){let t={...d,...e},l=(0,r.lazy)(()=>t.loader().then(u)),s=t.loading;function i(e){let u=s?(0,n.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,d=!t.ssr||!!t.loading,i=d?r.Suspense:r.Fragment,f=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(l,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(l,{...e})});return(0,n.jsx)(i,{...d?{fallback:u}:{},children:f})}return i.displayName="LoadableComponent",i}},9214:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return u}});let n=l(5155),r=l(7650),a=l(5861),o=l(8284);function u(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=a.workAsyncStorage.getStore();if(void 0===l)return null;let u=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files;u.push(...t)}}return 0===u.length?null:(0,n.jsx)(n.Fragment,{children:u.map(e=>{let t=l.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},5651:(e,t,l)=>{"use strict";l.d(t,{Contact:()=>o,Homepage:()=>r,NavBar:()=>a,Projects:()=>d,Resume:()=>u});var n=l(7711);let r=(0,n.default)(()=>Promise.all([l.e(688),l.e(842),l.e(712),l.e(295),l.e(565),l.e(607)]).then(l.bind(l,4607)),{loadableGenerated:{webpack:()=>[4607]},ssr:!1}),a=(0,n.default)(()=>Promise.all([l.e(690),l.e(688),l.e(842),l.e(712),l.e(295),l.e(281),l.e(17)]).then(l.bind(l,2017)),{loadableGenerated:{webpack:()=>[2017]},ssr:!1}),o=(0,n.default)(()=>Promise.all([l.e(688),l.e(842),l.e(712),l.e(167),l.e(721)]).then(l.bind(l,721)),{loadableGenerated:{webpack:()=>[721]},ssr:!1}),u=(0,n.default)(()=>Promise.all([l.e(688),l.e(842),l.e(565),l.e(167),l.e(74)]).then(l.bind(l,2074)),{loadableGenerated:{webpack:()=>[2074]},ssr:!1}),d=(0,n.default)(()=>Promise.all([l.e(688),l.e(842),l.e(712),l.e(295),l.e(747)]).then(l.bind(l,747)),{loadableGenerated:{webpack:()=>[747]},ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(676)),_N_E=e.O()}]);