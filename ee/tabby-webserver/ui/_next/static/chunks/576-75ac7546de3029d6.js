"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{81853:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,o=r.useEffect,l=r.useLayoutEffect,a=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var s="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),u=r[0].inst,s=r[1];return l(function(){u.value=n,u.getSnapshot=t,c(u)&&s({inst:u})},[e,n,t]),o(function(){return c(u)&&s({inst:u}),e(function(){c(u)&&s({inst:u})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:s},26272:function(e,t,n){e.exports=n(81853)},13428:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},85744:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},42210:function(e,t,n){n.d(t,{F:function(){return u},e:function(){return i}});var r=n(2265);function u(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return(0,r.useCallback)(u(...e),e)}},56989:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return u}});var r=n(2265);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,i=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:i},t)}return u.displayName=e+"Provider",[u,function(u){let i=(0,r.useContext)(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let i=(0,r.createContext)(u),o=n.length;function l(t){let{scope:n,children:u,...l}=t,a=(null==n?void 0:n[e][o])||i,c=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(a.Provider,{value:c},u)}return n=[...n,u],l.displayName=t+"Provider",[l,function(n,l){let a=(null==l?void 0:l[e][o])||i,c=(0,r.useContext)(a);if(c)return c;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e),i=u[`__scope${r}`];return{...t,...i}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},20966:function(e,t,n){n.d(t,{M:function(){return a}});var r,u=n(2265),i=n(51030);let o=(r||(r=n.t(u,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,n]=u.useState(o());return(0,i.b)(()=>{e||n(e=>null!=e?e:String(l++))},[e]),e||(t?`radix-${t}`:"")}},85606:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(2265),u=n(54887),i=n(42210),o=n(51030);let l=e=>{let{present:t,children:n}=e,l=function(e){var t;let[n,i]=(0,r.useState)(),l=(0,r.useRef)({}),c=(0,r.useRef)(e),s=(0,r.useRef)("none"),f=e?"mounted":"unmounted",[d,m]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},f));return(0,r.useEffect)(()=>{let e=a(l.current);s.current="mounted"===d?e:"none"},[d]),(0,o.b)(()=>{let t=l.current,n=c.current,r=n!==e;if(r){let r=s.current,u=a(t);e?m("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):n&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),c.current=e}},[e,m]),(0,o.b)(()=>{if(n){let e=e=>{let t=a(l.current),r=t.includes(e.animationName);e.target===n&&r&&(0,u.flushSync)(()=>m("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=a(l.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}m("ANIMATION_END")},[n,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),c="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),s=(0,i.e)(l.ref,c.ref),f="function"==typeof n;return f||l.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},9381:function(e,t,n){n.d(t,{WV:function(){return l},jH:function(){return a}});var r=n(13428),u=n(2265),i=n(54887),o=n(67256);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,u.forwardRef)((e,n)=>{let{asChild:i,...l}=e,a=i?o.g7:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(a,(0,r.Z)({},l,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&(0,i.flushSync)(()=>e.dispatchEvent(t))}},67256:function(e,t,n){n.d(t,{A4:function(){return a},g7:function(){return o}});var r=n(13428),u=n(2265),i=n(42210);let o=(0,u.forwardRef)((e,t)=>{let{children:n,...i}=e,o=u.Children.toArray(n),a=o.find(c);if(a){let e=a.props.children,n=o.map(t=>t!==a?t:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(l,(0,r.Z)({},i,{ref:t}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,n):null)}return(0,u.createElement)(l,(0,r.Z)({},i,{ref:t}),n)});o.displayName="Slot";let l=(0,u.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,u.isValidElement)(n)?(0,u.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let u=e[r],i=t[r],o=/^on[A-Z]/.test(r);o?u&&i?n[r]=(...e)=>{i(...e),u(...e)}:u&&(n[r]=u):"style"===r?n[r]={...u,...i}:"className"===r&&(n[r]=[u,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,i.F)(t,n.ref):n.ref}):u.Children.count(n)>1?u.Children.only(null):null});l.displayName="SlotClone";let a=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function c(e){return(0,u.isValidElement)(e)&&e.type===a}},16459:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},73763:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),u=n(16459);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,o]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[i]=n,o=(0,r.useRef)(i),l=(0,u.W)(t);return(0,r.useEffect)(()=>{o.current!==i&&(l(i),o.current=i)},[i,o,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:i,c=(0,u.W)(n),s=(0,r.useCallback)(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else o(t)},[l,e,o,c]);return[a,s]}},12488:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(2265),u=n(16459);function i(e,t=null==globalThis?void 0:globalThis.document){let n=(0,u.W)(e);(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}},51030:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},44796:function(e,t,n){n.d(t,{$l:function(){return o},BN:function(){return D},DY:function(){return v},J$:function(){return Z},JN:function(){return _},LI:function(){return L},PM:function(){return c},W6:function(){return R},i_:function(){return i},ko:function(){return K},kw:function(){return C},mf:function(){return a},o8:function(){return l},qC:function(){return M},s6:function(){return G},sj:function(){return I},u3:function(){return P},u_:function(){return W},w6:function(){return S},xD:function(){return Q}});var r=n(2265);let u=()=>{},i=u(),o=Object,l=e=>e===i,a=e=>"function"==typeof e,c=(e,t)=>({...e,...t}),s=e=>a(e.then),f=new WeakMap,d=0,m=e=>{let t,n;let r=typeof e,u=e&&e.constructor,i=u==Date;if(o(e)!==e||i||u==RegExp)t=i?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=f.get(e))return t;if(t=++d+"~",f.set(e,t),u==Array){for(n=0,t="@";n<e.length;n++)t+=m(e[n])+",";f.set(e,t)}if(u==o){t="#";let r=o.keys(e).sort();for(;!l(n=r.pop());)l(e[n])||(t+=n+":"+m(e[n])+",");f.set(e,t)}}return t},v=new WeakMap,p={},E={},h="undefined",g=typeof window!=h,y=typeof document!=h,w=()=>g&&typeof window.requestAnimationFrame!=h,_=(e,t)=>{let n=v.get(e);return[()=>!l(t)&&e.get(t)||p,r=>{if(!l(t)){let u=e.get(t);t in E||(E[t]=u),n[5](t,c(u,r),u||p)}},n[6],()=>!l(t)&&t in E?E[t]:!l(t)&&e.get(t)||p]},N=!0,[b,T]=g&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],O={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),b("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),T("focus",e)}),initReconnect:e=>{let t=()=>{N=!0,e()},n=()=>{N=!1};return b("online",t),b("offline",n),()=>{T("online",t),T("offline",n)}}},S=!r.useId,R=!g||"Deno"in window,C=e=>w()?window.requestAnimationFrame(e):setTimeout(e,1),L=R?r.useEffect:r.useLayoutEffect,V="undefined"!=typeof navigator&&navigator.connection,k=!R&&V&&(["slow-2g","2g"].includes(V.effectiveType)||V.saveData),M=e=>{if(a(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",t]},A=0,P=()=>++A;var I={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function D(...e){let[t,n,r,u]=e,o=c({populateCache:!0,throwOnError:!0},"boolean"==typeof u?{revalidate:u}:u||{}),f=o.populateCache,d=o.rollbackOnError,m=o.optimisticData,p=!1!==o.revalidate,E=e=>"function"==typeof d?d(e):!1!==d,h=o.throwOnError;if(a(n)){let e=[],r=t.keys();for(let u of r)!/^\$(inf|sub)\$/.test(u)&&n(t.get(u)._k)&&e.push(u);return Promise.all(e.map(g))}return g(n);async function g(n){let u;let[o]=M(n);if(!o)return;let[c,d]=_(t,o),[g,y,w,N]=v.get(t),b=()=>{let e=g[o];return p&&(delete w[o],delete N[o],e&&e[0])?e[0](2).then(()=>c().data):c().data};if(e.length<3)return b();let T=r,O=P();y[o]=[O,0];let S=!l(m),R=c(),C=R.data,L=R._c,V=l(L)?C:L;if(S&&d({data:m=a(m)?m(V,C):m,_c:V}),a(T))try{T=T(V)}catch(e){u=e}if(T&&s(T)){if(T=await T.catch(e=>{u=e}),O!==y[o][0]){if(u)throw u;return T}u&&S&&E(u)&&(f=!0,d({data:V,_c:i}))}if(f&&!u){if(a(f)){let e=f(T,V);d({data:e,error:i,_c:i})}else d({data:T,error:i,_c:i})}if(y[o][1]=P(),Promise.resolve(b()).then(()=>{d({_c:i})}),u){if(h)throw u;return}return T}}let x=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},j=(e,t)=>{if(!v.has(e)){let n=c(O,t),r={},o=D.bind(i,e),l=u,a={},s=(e,t)=>{let n=a[e]||[];return a[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);let u=a[t];if(u)for(let e of u)e(n,r)},d=()=>{if(!v.has(e)&&(v.set(e,[r,{},{},{},o,f,s]),!R)){let t=n.initFocus(setTimeout.bind(i,x.bind(i,r,0))),u=n.initReconnect(setTimeout.bind(i,x.bind(i,r,1)));l=()=>{t&&t(),u&&u(),v.delete(e)}}};return d(),[e,o,d,l]}return[e,v.get(e)[4]]},[U,$]=j(new Map),W=c({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,n,r,u)=>{let i=n.errorRetryCount,o=u.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;(l(i)||!(o>i))&&setTimeout(r,a,u)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:k?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:k?5e3:3e3,compare:(e,t)=>m(e)==m(t),isPaused:()=>!1,cache:U,mutate:$,fallback:{}},{isOnline:()=>N,isVisible:()=>{let e=y&&document.visibilityState;return l(e)||"hidden"!==e}}),F=(e,t)=>{let n=c(e,t);if(t){let{use:r,fallback:u}=e,{use:i,fallback:o}=t;r&&i&&(n.use=r.concat(i)),u&&o&&(n.fallback=c(u,o))}return n},J=(0,r.createContext)({}),Z=e=>{let{value:t}=e,n=(0,r.useContext)(J),u=a(t),o=(0,r.useMemo)(()=>u?t(n):t,[u,n,t]),l=(0,r.useMemo)(()=>u?o:F(n,o),[u,n,o]),s=o&&o.provider,f=(0,r.useRef)(i);s&&!f.current&&(f.current=j(s(l.cache||U),o));let d=f.current;return d&&(l.cache=d[0],l.mutate=d[1]),L(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,r.createElement)(J.Provider,c(e,{value:l}))},q=g&&window.__SWR_DEVTOOLS_USE__,B=q?window.__SWR_DEVTOOLS_USE__:[],Y=e=>a(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],z=()=>c(W,(0,r.useContext)(J)),H=B.concat(e=>(t,n,r)=>{let u=n&&((...e)=>{let[r]=M(t),[,,,u]=v.get(U);if(r.startsWith("$inf$"))return n(...e);let i=u[r];return l(i)?n(...e):(delete u[r],i)});return e(t,u,r)}),G=e=>function(...t){let n=z(),[r,u,i]=Y(t),o=F(n,i),l=e,{use:a}=o,c=(a||[]).concat(H);for(let e=c.length;e--;)l=c[e](l);return l(r,u||o.fetcher||null,o)},K=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Q=(e,t)=>(...n)=>{let[r,u,i]=Y(n),o=(i.use||[]).concat(t);return e(r,u,{...i,use:o})};q&&(window.__SWR_DEVTOOLS_REACT__=r)},30713:function(e,t,n){n.d(t,{ZP:function(){return a}});var r=n(2265),u=n(26272),i=n(44796);let o=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),l={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});let a=(0,i.s6)((e,t,n)=>{let{cache:a,compare:c,suspense:s,fallbackData:f,revalidateOnMount:d,revalidateIfStale:m,refreshInterval:v,refreshWhenHidden:p,refreshWhenOffline:E,keepPreviousData:h}=n,[g,y,w,_]=i.DY.get(a),[N,b]=(0,i.qC)(e),T=(0,r.useRef)(!1),O=(0,r.useRef)(!1),S=(0,r.useRef)(N),R=(0,r.useRef)(t),C=(0,r.useRef)(n),L=()=>C.current,V=()=>L().isVisible()&&L().isOnline(),[k,M,A,P]=(0,i.JN)(a,N),I=(0,r.useRef)({}).current,D=(0,i.o8)(f)?n.fallback[N]:f,x=(e,t)=>{for(let n in I)if("data"===n){if(!c(e[n],t[n])&&(!(0,i.o8)(e[n])||!c(B,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},j=(0,r.useMemo)(()=>{let e=!!N&&!!t&&((0,i.o8)(d)?!L().isPaused()&&!s&&(!!(0,i.o8)(m)||m):d),n=t=>{let n=(0,i.PM)(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=k(),u=P(),o=n(r),l=r===u?o:n(u),a=o;return[()=>{let e=n(k()),t=x(e,a);return t?(a.data=e.data,a.isLoading=e.isLoading,a.isValidating=e.isValidating,a.error=e.error,a):(a=e,e)},()=>l]},[a,N]),U=(0,u.useSyncExternalStore)((0,r.useCallback)(e=>A(N,(t,n)=>{x(n,t)||e()}),[a,N]),j[0],j[1]),$=!T.current,W=g[N]&&g[N].length>0,F=U.data,J=(0,i.o8)(F)?D:F,Z=U.error,q=(0,r.useRef)(J),B=h?(0,i.o8)(F)?q.current:F:J,Y=(!W||!!(0,i.o8)(Z))&&($&&!(0,i.o8)(d)?d:!L().isPaused()&&(s?!(0,i.o8)(J)&&m:(0,i.o8)(J)||m)),z=!!(N&&t&&$&&Y),H=(0,i.o8)(U.isValidating)?z:U.isValidating,G=(0,i.o8)(U.isLoading)?z:U.isLoading,K=(0,r.useCallback)(async e=>{let t,r;let u=R.current;if(!N||!u||O.current||L().isPaused())return!1;let o=!0,l=e||{},a=!w[N]||!l.dedupe,s=()=>i.w6?!O.current&&N===S.current&&T.current:N===S.current,f={isValidating:!1,isLoading:!1},d=()=>{M(f)},m=()=>{let e=w[N];e&&e[1]===r&&delete w[N]},v={isValidating:!0};(0,i.o8)(k().data)&&(v.isLoading=!0);try{if(a&&(M(v),n.loadingTimeout&&(0,i.o8)(k().data)&&setTimeout(()=>{o&&s()&&L().onLoadingSlow(N,n)},n.loadingTimeout),w[N]=[u(b),(0,i.u3)()]),[t,r]=w[N],t=await t,a&&setTimeout(m,n.dedupingInterval),!w[N]||w[N][1]!==r)return a&&s()&&L().onDiscarded(N),!1;f.error=i.i_;let e=y[N];if(!(0,i.o8)(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return d(),a&&s()&&L().onDiscarded(N),!1;let l=k().data;f.data=c(l,t)?l:t,a&&s()&&L().onSuccess(t,N,n)}catch(n){m();let e=L(),{shouldRetryOnError:t}=e;!e.isPaused()&&(f.error=n,a&&s()&&(e.onError(n,N,e),(!0===t||(0,i.mf)(t)&&t(n))&&V()&&e.onErrorRetry(n,N,e,e=>{let t=g[N];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return o=!1,d(),!0},[N,a]),Q=(0,r.useCallback)((...e)=>(0,i.BN)(a,S.current,...e),[]);if((0,i.LI)(()=>{R.current=t,C.current=n,(0,i.o8)(F)||(q.current=F)}),(0,i.LI)(()=>{if(!N)return;let e=K.bind(i.i_,l),t=0,n=(0,i.ko)(N,g,(n,r={})=>{if(n==i.sj.FOCUS_EVENT){let n=Date.now();L().revalidateOnFocus&&n>t&&V()&&(t=n+L().focusThrottleInterval,e())}else if(n==i.sj.RECONNECT_EVENT)L().revalidateOnReconnect&&V()&&e();else if(n==i.sj.MUTATE_EVENT)return K();else if(n==i.sj.ERROR_REVALIDATE_EVENT)return K(r)});return O.current=!1,S.current=N,T.current=!0,M({_k:b}),Y&&((0,i.o8)(J)||i.W6?e():(0,i.kw)(e)),()=>{O.current=!0,n()}},[N]),(0,i.LI)(()=>{let e;function t(){let t=(0,i.mf)(v)?v(k().data):v;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!k().error&&(p||L().isVisible())&&(E||L().isOnline())?K(l).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[v,p,E,N]),(0,r.useDebugValue)(B),s&&(0,i.o8)(J)&&N){if(!i.w6&&i.W6)throw Error("Fallback data is required when using suspense in SSR.");R.current=t,C.current=n,O.current=!1;let e=_[N];if(!(0,i.o8)(e)){let t=Q(e);o(t)}if((0,i.o8)(Z)){let e=K(l);(0,i.o8)(B)||(e.status="fulfilled",e.value=!0),o(e)}else throw Z}return{mutate:Q,get data(){return I.data=!0,B},get error(){return I.error=!0,Z},get isValidating(){return I.isValidating=!0,H},get isLoading(){return I.isLoading=!0,G}}})}}]);