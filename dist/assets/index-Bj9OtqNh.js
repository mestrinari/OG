(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function gx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bc={exports:{}},ui={},Fc={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function xx(){if(tm)return ve;tm=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=b&&z[b]||z["@@iterator"],typeof z=="function"?z:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,$={};function A(z,L,ie){this.props=z,this.context=L,this.refs=$,this.updater=ie||P}A.prototype.isReactComponent={},A.prototype.setState=function(z,L){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,L,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=A.prototype;function R(z,L,ie){this.props=z,this.context=L,this.refs=$,this.updater=ie||P}var H=R.prototype=new N;H.constructor=R,O(H,A.prototype),H.isPureReactComponent=!0;var G=Array.isArray,Q=Object.prototype.hasOwnProperty,V={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function X(z,L,ie){var ae,ue={},ye=null,we=null;if(L!=null)for(ae in L.ref!==void 0&&(we=L.ref),L.key!==void 0&&(ye=""+L.key),L)Q.call(L,ae)&&!W.hasOwnProperty(ae)&&(ue[ae]=L[ae]);var be=arguments.length-2;if(be===1)ue.children=ie;else if(1<be){for(var ze=Array(be),Ze=0;Ze<be;Ze++)ze[Ze]=arguments[Ze+2];ue.children=ze}if(z&&z.defaultProps)for(ae in be=z.defaultProps,be)ue[ae]===void 0&&(ue[ae]=be[ae]);return{$$typeof:e,type:z,key:ye,ref:we,props:ue,_owner:V.current}}function te(z,L){return{$$typeof:e,type:z.type,key:L,ref:z.ref,props:z.props,_owner:z._owner}}function I(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function me(z){var L={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ie){return L[ie]})}var Pe=/\/+/g;function xe(z,L){return typeof z=="object"&&z!==null&&z.key!=null?me(""+z.key):L.toString(36)}function _e(z,L,ie,ae,ue){var ye=typeof z;(ye==="undefined"||ye==="boolean")&&(z=null);var we=!1;if(z===null)we=!0;else switch(ye){case"string":case"number":we=!0;break;case"object":switch(z.$$typeof){case e:case r:we=!0}}if(we)return we=z,ue=ue(we),z=ae===""?"."+xe(we,0):ae,G(ue)?(ie="",z!=null&&(ie=z.replace(Pe,"$&/")+"/"),_e(ue,L,ie,"",function(Ze){return Ze})):ue!=null&&(I(ue)&&(ue=te(ue,ie+(!ue.key||we&&we.key===ue.key?"":(""+ue.key).replace(Pe,"$&/")+"/")+z)),L.push(ue)),1;if(we=0,ae=ae===""?".":ae+":",G(z))for(var be=0;be<z.length;be++){ye=z[be];var ze=ae+xe(ye,be);we+=_e(ye,L,ie,ze,ue)}else if(ze=S(z),typeof ze=="function")for(z=ze.call(z),be=0;!(ye=z.next()).done;)ye=ye.value,ze=ae+xe(ye,be++),we+=_e(ye,L,ie,ze,ue);else if(ye==="object")throw L=String(z),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return we}function $e(z,L,ie){if(z==null)return z;var ae=[],ue=0;return _e(z,ae,"","",function(ye){return L.call(ie,ye,ue++)}),ae}function Ve(z){if(z._status===-1){var L=z._result;L=L(),L.then(function(ie){(z._status===0||z._status===-1)&&(z._status=1,z._result=ie)},function(ie){(z._status===0||z._status===-1)&&(z._status=2,z._result=ie)}),z._status===-1&&(z._status=0,z._result=L)}if(z._status===1)return z._result.default;throw z._result}var Te={current:null},q={transition:null},oe={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:q,ReactCurrentOwner:V};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:$e,forEach:function(z,L,ie){$e(z,function(){L.apply(this,arguments)},ie)},count:function(z){var L=0;return $e(z,function(){L++}),L},toArray:function(z){return $e(z,function(L){return L})||[]},only:function(z){if(!I(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ve.Component=A,ve.Fragment=i,ve.Profiler=c,ve.PureComponent=R,ve.StrictMode=a,ve.Suspense=h,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ve.act=Z,ve.cloneElement=function(z,L,ie){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ae=O({},z.props),ue=z.key,ye=z.ref,we=z._owner;if(L!=null){if(L.ref!==void 0&&(ye=L.ref,we=V.current),L.key!==void 0&&(ue=""+L.key),z.type&&z.type.defaultProps)var be=z.type.defaultProps;for(ze in L)Q.call(L,ze)&&!W.hasOwnProperty(ze)&&(ae[ze]=L[ze]===void 0&&be!==void 0?be[ze]:L[ze])}var ze=arguments.length-2;if(ze===1)ae.children=ie;else if(1<ze){be=Array(ze);for(var Ze=0;Ze<ze;Ze++)be[Ze]=arguments[Ze+2];ae.children=be}return{$$typeof:e,type:z.type,key:ue,ref:ye,props:ae,_owner:we}},ve.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:d,_context:z},z.Consumer=z},ve.createElement=X,ve.createFactory=function(z){var L=X.bind(null,z);return L.type=z,L},ve.createRef=function(){return{current:null}},ve.forwardRef=function(z){return{$$typeof:m,render:z}},ve.isValidElement=I,ve.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:Ve}},ve.memo=function(z,L){return{$$typeof:y,type:z,compare:L===void 0?null:L}},ve.startTransition=function(z){var L=q.transition;q.transition={};try{z()}finally{q.transition=L}},ve.unstable_act=Z,ve.useCallback=function(z,L){return Te.current.useCallback(z,L)},ve.useContext=function(z){return Te.current.useContext(z)},ve.useDebugValue=function(){},ve.useDeferredValue=function(z){return Te.current.useDeferredValue(z)},ve.useEffect=function(z,L){return Te.current.useEffect(z,L)},ve.useId=function(){return Te.current.useId()},ve.useImperativeHandle=function(z,L,ie){return Te.current.useImperativeHandle(z,L,ie)},ve.useInsertionEffect=function(z,L){return Te.current.useInsertionEffect(z,L)},ve.useLayoutEffect=function(z,L){return Te.current.useLayoutEffect(z,L)},ve.useMemo=function(z,L){return Te.current.useMemo(z,L)},ve.useReducer=function(z,L,ie){return Te.current.useReducer(z,L,ie)},ve.useRef=function(z){return Te.current.useRef(z)},ve.useState=function(z){return Te.current.useState(z)},ve.useSyncExternalStore=function(z,L,ie){return Te.current.useSyncExternalStore(z,L,ie)},ve.useTransition=function(){return Te.current.useTransition()},ve.version="18.3.1",ve}var nm;function Eu(){return nm||(nm=1,Fc.exports=xx()),Fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function yx(){if(rm)return ui;rm=1;var e=Eu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,y){var v,b={},S=null,P=null;y!==void 0&&(S=""+y),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(P=h.ref);for(v in h)a.call(h,v)&&!d.hasOwnProperty(v)&&(b[v]=h[v]);if(m&&m.defaultProps)for(v in h=m.defaultProps,h)b[v]===void 0&&(b[v]=h[v]);return{$$typeof:r,type:m,key:S,ref:P,props:b,_owner:c.current}}return ui.Fragment=i,ui.jsx=f,ui.jsxs=f,ui}var om;function vx(){return om||(om=1,Bc.exports=yx()),Bc.exports}var s=vx(),_=Eu();const at=gx(_);var Ys={},Uc={exports:{}},Pt={},Wc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function wx(){return im||(im=1,(function(e){function r(q,oe){var Z=q.length;q.push(oe);e:for(;0<Z;){var z=Z-1>>>1,L=q[z];if(0<c(L,oe))q[z]=oe,q[Z]=L,Z=z;else break e}}function i(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var oe=q[0],Z=q.pop();if(Z!==oe){q[0]=Z;e:for(var z=0,L=q.length,ie=L>>>1;z<ie;){var ae=2*(z+1)-1,ue=q[ae],ye=ae+1,we=q[ye];if(0>c(ue,Z))ye<L&&0>c(we,ue)?(q[z]=we,q[ye]=Z,z=ye):(q[z]=ue,q[ae]=Z,z=ae);else if(ye<L&&0>c(we,Z))q[z]=we,q[ye]=Z,z=ye;else break e}}return oe}function c(q,oe){var Z=q.sortIndex-oe.sortIndex;return Z!==0?Z:q.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();e.unstable_now=function(){return f.now()-m}}var h=[],y=[],v=1,b=null,S=3,P=!1,O=!1,$=!1,A=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(q){for(var oe=i(y);oe!==null;){if(oe.callback===null)a(y);else if(oe.startTime<=q)a(y),oe.sortIndex=oe.expirationTime,r(h,oe);else break;oe=i(y)}}function G(q){if($=!1,H(q),!O)if(i(h)!==null)O=!0,Ve(Q);else{var oe=i(y);oe!==null&&Te(G,oe.startTime-q)}}function Q(q,oe){O=!1,$&&($=!1,N(X),X=-1),P=!0;var Z=S;try{for(H(oe),b=i(h);b!==null&&(!(b.expirationTime>oe)||q&&!me());){var z=b.callback;if(typeof z=="function"){b.callback=null,S=b.priorityLevel;var L=z(b.expirationTime<=oe);oe=e.unstable_now(),typeof L=="function"?b.callback=L:b===i(h)&&a(h),H(oe)}else a(h);b=i(h)}if(b!==null)var ie=!0;else{var ae=i(y);ae!==null&&Te(G,ae.startTime-oe),ie=!1}return ie}finally{b=null,S=Z,P=!1}}var V=!1,W=null,X=-1,te=5,I=-1;function me(){return!(e.unstable_now()-I<te)}function Pe(){if(W!==null){var q=e.unstable_now();I=q;var oe=!0;try{oe=W(!0,q)}finally{oe?xe():(V=!1,W=null)}}else V=!1}var xe;if(typeof R=="function")xe=function(){R(Pe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,$e=_e.port2;_e.port1.onmessage=Pe,xe=function(){$e.postMessage(null)}}else xe=function(){A(Pe,0)};function Ve(q){W=q,V||(V=!0,xe())}function Te(q,oe){X=A(function(){q(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){O||P||(O=!0,Ve(Q))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return i(h)},e.unstable_next=function(q){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var Z=S;S=oe;try{return q()}finally{S=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,oe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=S;S=q;try{return oe()}finally{S=Z}},e.unstable_scheduleCallback=function(q,oe,Z){var z=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?z+Z:z):Z=z,q){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,q={id:v++,callback:oe,priorityLevel:q,startTime:Z,expirationTime:L,sortIndex:-1},Z>z?(q.sortIndex=Z,r(y,q),i(h)===null&&q===i(y)&&($?(N(X),X=-1):$=!0,Te(G,Z-z))):(q.sortIndex=L,r(h,q),O||P||(O=!0,Ve(Q))),q},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(q){var oe=S;return function(){var Z=S;S=oe;try{return q.apply(this,arguments)}finally{S=Z}}}})(Zc)),Zc}var sm;function bx(){return sm||(sm=1,Wc.exports=wx()),Wc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function kx(){if(am)return Pt;am=1;var e=Eu(),r=bx();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function d(t,n){f(t,n),f(t+"Capture",n)}function f(t,n){for(c[t]=n,t=0;t<n.length;t++)a.add(n[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},b={};function S(t){return h.call(b,t)?!0:h.call(v,t)?!1:y.test(t)?b[t]=!0:(v[t]=!0,!1)}function P(t,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O(t,n,o,l){if(n===null||typeof n>"u"||P(t,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function $(t,n,o,l,u,p,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];A[n]=new $(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(N,R);A[n]=new $(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(N,R);A[n]=new $(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(N,R);A[n]=new $(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function H(t,n,o,l){var u=A.hasOwnProperty(n)?A[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(O(n,o,u,l)&&(o=null),l||u===null?S(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,n,o):t.setAttribute(n,o))))}var G=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),V=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),me=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),q=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,z;function L(t){if(z===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+t}var ie=!1;function ae(t,n){if(!t||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(T){var l=T}Reflect.construct(t,[],n)}else{try{n.call()}catch(T){l=T}t.call(n.prototype)}else{try{throw Error()}catch(T){l=T}t()}}catch(T){if(T&&l&&typeof T.stack=="string"){for(var u=T.stack.split(`
`),p=l.stack.split(`
`),g=u.length-1,w=p.length-1;1<=g&&0<=w&&u[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(u[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||u[g]!==p[w]){var k=`
`+u[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=w);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function ue(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case V:return"Portal";case te:return"Profiler";case X:return"StrictMode";case xe:return"Suspense";case _e:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case me:return(t.displayName||"Context")+".Consumer";case I:return(t._context.displayName||"Context")+".Provider";case Pe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $e:return n=t.displayName||null,n!==null?n:ye(t.type)||"Memo";case Ve:n=t._payload,t=t._init;try{return ye(t(n))}catch{}}return null}function we(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(n);case 8:return n===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t){var n=ze(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,p.call(this,g)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Fi(t){t._valueTracker||(t._valueTracker=Ze(t))}function sd(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return t&&(l=ze(t)?t.checked?"true":"false":t.value),t=l,t!==o?(n.setValue(t),!0):!1}function Ui(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ha(t,n){var o=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ad(t,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=be(n.value!=null?n.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ld(t,n){n=n.checked,n!=null&&H(t,"checked",n,!1)}function Ga(t,n){ld(t,n);var o=be(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Ja(t,n.type,o):n.hasOwnProperty("defaultValue")&&Ja(t,n.type,be(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function cd(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ja(t,n,o){(n!=="number"||Ui(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var $o=Array.isArray;function Er(t,n,o,l){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qa(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ud(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if($o(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:be(o)}}function dd(t,n){var o=be(n.value),l=be(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function fd(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function pd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?pd(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wi,md=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,l,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function zo(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){w0.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Co[n]=Co[t]})});function hd(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Co.hasOwnProperty(t)&&Co[t]?(""+n).trim():n+"px"}function gd(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=hd(o,n[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var b0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(t,n){if(n){if(b0[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Xa(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var el=null;function tl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nl=null,Pr=null,Tr=null;function xd(t){if(t=Jo(t)){if(typeof nl!="function")throw Error(i(280));var n=t.stateNode;n&&(n=fs(n),nl(t.stateNode,t.type,n))}}function yd(t){Pr?Tr?Tr.push(t):Tr=[t]:Pr=t}function vd(){if(Pr){var t=Pr,n=Tr;if(Tr=Pr=null,xd(t),n)for(t=0;t<n.length;t++)xd(n[t])}}function wd(t,n){return t(n)}function bd(){}var rl=!1;function kd(t,n,o){if(rl)return t(n,o);rl=!0;try{return wd(t,n,o)}finally{rl=!1,(Pr!==null||Tr!==null)&&(bd(),vd())}}function _o(t,n){var o=t.stateNode;if(o===null)return null;var l=fs(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var ol=!1;if(m)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){ol=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{ol=!1}function k0(t,n,o,l,u,p,g,w,k){var T=Array.prototype.slice.call(arguments,3);try{n.apply(o,T)}catch(B){this.onError(B)}}var Po=!1,Zi=null,qi=!1,il=null,S0={onError:function(t){Po=!0,Zi=t}};function j0(t,n,o,l,u,p,g,w,k){Po=!1,Zi=null,k0.apply(S0,arguments)}function $0(t,n,o,l,u,p,g,w,k){if(j0.apply(this,arguments),Po){if(Po){var T=Zi;Po=!1,Zi=null}else throw Error(i(198));qi||(qi=!0,il=T)}}function ar(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function Sd(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function jd(t){if(ar(t)!==t)throw Error(i(188))}function z0(t){var n=t.alternate;if(!n){if(n=ar(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,l=n;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return jd(u),t;if(p===l)return jd(u),n;p=p.sibling}throw Error(i(188))}if(o.return!==l.return)o=u,l=p;else{for(var g=!1,w=u.child;w;){if(w===o){g=!0,o=u,l=p;break}if(w===l){g=!0,l=u,o=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===o){g=!0,o=p,l=u;break}if(w===l){g=!0,l=p,o=u;break}w=w.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function $d(t){return t=z0(t),t!==null?zd(t):null}function zd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=zd(t);if(n!==null)return n;t=t.sibling}return null}var Cd=r.unstable_scheduleCallback,_d=r.unstable_cancelCallback,C0=r.unstable_shouldYield,_0=r.unstable_requestPaint,He=r.unstable_now,E0=r.unstable_getCurrentPriorityLevel,sl=r.unstable_ImmediatePriority,Ed=r.unstable_UserBlockingPriority,Vi=r.unstable_NormalPriority,P0=r.unstable_LowPriority,Pd=r.unstable_IdlePriority,Hi=null,fn=null;function T0(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Hi,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:A0,I0=Math.log,R0=Math.LN2;function A0(t){return t>>>=0,t===0?32:31-(I0(t)/R0|0)|0}var Gi=64,Ji=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qi(t,n){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,g=o&268435455;if(g!==0){var w=g&~u;w!==0?l=To(w):(p&=g,p!==0&&(l=To(p)))}else g=o&~u,g!==0?l=To(g):p!==0&&(l=To(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)o=31-Kt(n),u=1<<o,l|=t[o],n&=~u;return l}function O0(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(t,n){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var g=31-Kt(p),w=1<<g,k=u[g];k===-1?((w&o)===0||(w&l)!==0)&&(u[g]=O0(w,n)):k<=n&&(t.expiredLanes|=w),p&=~w}}function al(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Td(){var t=Gi;return Gi<<=1,(Gi&4194240)===0&&(Gi=64),t}function ll(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function Io(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Kt(n),t[n]=o}function L0(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Kt(o),p=1<<u;n[u]=0,l[u]=-1,t[u]=-1,o&=~p}}function cl(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var l=31-Kt(o),u=1<<l;u&n|t[l]&n&&(t[l]|=n),o&=~u}}var Ce=0;function Id(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Rd,ul,Ad,Od,Nd,dl=!1,Yi=[],On=null,Nn=null,Ln=null,Ro=new Map,Ao=new Map,Mn=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(t,n){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Oo(t,n,o,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Jo(n),n!==null&&ul(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function D0(t,n,o,l,u){switch(n){case"focusin":return On=Oo(On,t,n,o,l,u),!0;case"dragenter":return Nn=Oo(Nn,t,n,o,l,u),!0;case"mouseover":return Ln=Oo(Ln,t,n,o,l,u),!0;case"pointerover":var p=u.pointerId;return Ro.set(p,Oo(Ro.get(p)||null,t,n,o,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Ao.set(p,Oo(Ao.get(p)||null,t,n,o,l,u)),!0}return!1}function Md(t){var n=lr(t.target);if(n!==null){var o=ar(n);if(o!==null){if(n=o.tag,n===13){if(n=Sd(o),n!==null){t.blockedOn=n,Nd(t.priority,function(){Ad(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ki(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=pl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);el=l,o.target.dispatchEvent(l),el=null}else return n=Jo(o),n!==null&&ul(n),t.blockedOn=o,!1;n.shift()}return!0}function Dd(t,n,o){Ki(t)&&o.delete(n)}function B0(){dl=!1,On!==null&&Ki(On)&&(On=null),Nn!==null&&Ki(Nn)&&(Nn=null),Ln!==null&&Ki(Ln)&&(Ln=null),Ro.forEach(Dd),Ao.forEach(Dd)}function No(t,n){t.blockedOn===n&&(t.blockedOn=null,dl||(dl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,B0)))}function Lo(t){function n(u){return No(u,t)}if(0<Yi.length){No(Yi[0],t);for(var o=1;o<Yi.length;o++){var l=Yi[o];l.blockedOn===t&&(l.blockedOn=null)}}for(On!==null&&No(On,t),Nn!==null&&No(Nn,t),Ln!==null&&No(Ln,t),Ro.forEach(n),Ao.forEach(n),o=0;o<Mn.length;o++)l=Mn[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Mn.length&&(o=Mn[0],o.blockedOn===null);)Md(o),o.blockedOn===null&&Mn.shift()}var Ir=G.ReactCurrentBatchConfig,Xi=!0;function F0(t,n,o,l){var u=Ce,p=Ir.transition;Ir.transition=null;try{Ce=1,fl(t,n,o,l)}finally{Ce=u,Ir.transition=p}}function U0(t,n,o,l){var u=Ce,p=Ir.transition;Ir.transition=null;try{Ce=4,fl(t,n,o,l)}finally{Ce=u,Ir.transition=p}}function fl(t,n,o,l){if(Xi){var u=pl(t,n,o,l);if(u===null)Pl(t,n,l,es,o),Ld(t,l);else if(D0(u,t,n,o,l))l.stopPropagation();else if(Ld(t,l),n&4&&-1<M0.indexOf(t)){for(;u!==null;){var p=Jo(u);if(p!==null&&Rd(p),p=pl(t,n,o,l),p===null&&Pl(t,n,l,es,o),p===u)break;u=p}u!==null&&l.stopPropagation()}else Pl(t,n,l,null,o)}}var es=null;function pl(t,n,o,l){if(es=null,t=tl(l),t=lr(t),t!==null)if(n=ar(t),n===null)t=null;else if(o=n.tag,o===13){if(t=Sd(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return es=t,null}function Bd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case sl:return 1;case Ed:return 4;case Vi:case P0:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var Dn=null,ml=null,ts=null;function Fd(){if(ts)return ts;var t,n=ml,o=n.length,l,u="value"in Dn?Dn.value:Dn.textContent,p=u.length;for(t=0;t<o&&n[t]===u[t];t++);var g=o-t;for(l=1;l<=g&&n[o-l]===u[p-l];l++);return ts=u.slice(t,1<l?1-l:void 0)}function ns(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rs(){return!0}function Ud(){return!1}function Rt(t){function n(o,l,u,p,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?rs:Ud,this.isPropagationStopped=Ud,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),n}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Rt(Rr),Mo=Z({},Rr,{view:0,detail:0}),W0=Rt(Mo),gl,xl,Do,os=Z({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(gl=t.screenX-Do.screenX,xl=t.screenY-Do.screenY):xl=gl=0,Do=t),gl)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),Wd=Rt(os),Z0=Z({},os,{dataTransfer:0}),q0=Rt(Z0),V0=Z({},Mo,{relatedTarget:0}),yl=Rt(V0),H0=Z({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Rt(H0),J0=Z({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q0=Rt(J0),Y0=Z({},Rr,{data:0}),Zd=Rt(Y0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=e1[t])?!!n[t]:!1}function vl(){return t1}var n1=Z({},Mo,{key:function(t){if(t.key){var n=K0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(t){return t.type==="keypress"?ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r1=Rt(n1),o1=Z({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Rt(o1),i1=Z({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),s1=Rt(i1),a1=Z({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),l1=Rt(a1),c1=Z({},os,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u1=Rt(c1),d1=[9,13,27,32],wl=m&&"CompositionEvent"in window,Bo=null;m&&"documentMode"in document&&(Bo=document.documentMode);var f1=m&&"TextEvent"in window&&!Bo,Vd=m&&(!wl||Bo&&8<Bo&&11>=Bo),Hd=" ",Gd=!1;function Jd(t,n){switch(t){case"keyup":return d1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function p1(t,n){switch(t){case"compositionend":return Qd(n);case"keypress":return n.which!==32?null:(Gd=!0,Hd);case"textInput":return t=n.data,t===Hd&&Gd?null:t;default:return null}}function m1(t,n){if(Ar)return t==="compositionend"||!wl&&Jd(t,n)?(t=Fd(),ts=ml=Dn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!h1[t.type]:n==="textarea"}function Kd(t,n,o,l){yd(l),n=cs(n,"onChange"),0<n.length&&(o=new hl("onChange","change",null,o,l),t.push({event:o,listeners:n}))}var Fo=null,Uo=null;function g1(t){xf(t,0)}function is(t){var n=Dr(t);if(sd(n))return t}function x1(t,n){if(t==="change")return n}var Xd=!1;if(m){var bl;if(m){var kl="oninput"in document;if(!kl){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),kl=typeof ef.oninput=="function"}bl=kl}else bl=!1;Xd=bl&&(!document.documentMode||9<document.documentMode)}function tf(){Fo&&(Fo.detachEvent("onpropertychange",nf),Uo=Fo=null)}function nf(t){if(t.propertyName==="value"&&is(Uo)){var n=[];Kd(n,Uo,t,tl(t)),kd(g1,n)}}function y1(t,n,o){t==="focusin"?(tf(),Fo=n,Uo=o,Fo.attachEvent("onpropertychange",nf)):t==="focusout"&&tf()}function v1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return is(Uo)}function w1(t,n){if(t==="click")return is(n)}function b1(t,n){if(t==="input"||t==="change")return is(n)}function k1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xt=typeof Object.is=="function"?Object.is:k1;function Wo(t,n){if(Xt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!h.call(n,u)||!Xt(t[u],n[u]))return!1}return!0}function rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function of(t,n){var o=rf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=n&&l>=n)return{node:o,offset:n-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rf(o)}}function sf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function af(){for(var t=window,n=Ui();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=Ui(t.document)}return n}function Sl(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function S1(t){var n=af(),o=t.focusedElem,l=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&sf(o.ownerDocument.documentElement,o)){if(l!==null&&Sl(o)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=of(o,p);var g=of(o,l);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(n),t.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j1=m&&"documentMode"in document&&11>=document.documentMode,Or=null,jl=null,Zo=null,$l=!1;function lf(t,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$l||Or==null||Or!==Ui(l)||(l=Or,"selectionStart"in l&&Sl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zo&&Wo(Zo,l)||(Zo=l,l=cs(jl,"onSelect"),0<l.length&&(n=new hl("onSelect","select",null,n,o),t.push({event:n,listeners:l}),n.target=Or)))}function ss(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var Nr={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionend:ss("Transition","TransitionEnd")},zl={},cf={};m&&(cf=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function as(t){if(zl[t])return zl[t];if(!Nr[t])return t;var n=Nr[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in cf)return zl[t]=n[o];return t}var uf=as("animationend"),df=as("animationiteration"),ff=as("animationstart"),pf=as("transitionend"),mf=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,n){mf.set(t,n),d(n,[t])}for(var Cl=0;Cl<hf.length;Cl++){var _l=hf[Cl],$1=_l.toLowerCase(),z1=_l[0].toUpperCase()+_l.slice(1);Bn($1,"on"+z1)}Bn(uf,"onAnimationEnd"),Bn(df,"onAnimationIteration"),Bn(ff,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(pf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function gf(t,n,o){var l=t.type||"unknown-event";t.currentTarget=o,$0(l,n,void 0,t),t.currentTarget=null}function xf(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var g=l.length-1;0<=g;g--){var w=l[g],k=w.instance,T=w.currentTarget;if(w=w.listener,k!==p&&u.isPropagationStopped())break e;gf(u,w,T),p=k}else for(g=0;g<l.length;g++){if(w=l[g],k=w.instance,T=w.currentTarget,w=w.listener,k!==p&&u.isPropagationStopped())break e;gf(u,w,T),p=k}}}if(qi)throw t=il,qi=!1,il=null,t}function Ae(t,n){var o=n[Nl];o===void 0&&(o=n[Nl]=new Set);var l=t+"__bubble";o.has(l)||(yf(n,t,2,!1),o.add(l))}function El(t,n,o){var l=0;n&&(l|=4),yf(o,t,l,n)}var ls="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[ls]){t[ls]=!0,a.forEach(function(o){o!=="selectionchange"&&(C1.has(o)||El(o,!1,t),El(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ls]||(n[ls]=!0,El("selectionchange",!1,n))}}function yf(t,n,o,l){switch(Bd(n)){case 1:var u=F0;break;case 4:u=U0;break;default:u=fl}o=u.bind(null,n,o,t),u=void 0,!ol||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function Pl(t,n,o,l,u){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;w!==null;){if(g=lr(w),g===null)return;if(k=g.tag,k===5||k===6){l=p=g;continue e}w=w.parentNode}}l=l.return}kd(function(){var T=p,B=tl(o),F=[];e:{var D=mf.get(t);if(D!==void 0){var J=hl,K=t;switch(t){case"keypress":if(ns(o)===0)break e;case"keydown":case"keyup":J=r1;break;case"focusin":K="focus",J=yl;break;case"focusout":K="blur",J=yl;break;case"beforeblur":case"afterblur":J=yl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=s1;break;case uf:case df:case ff:J=G0;break;case pf:J=l1;break;case"scroll":J=W0;break;case"wheel":J=u1;break;case"copy":case"cut":case"paste":J=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=qd}var ee=(n&4)!==0,Ge=!ee&&t==="scroll",C=ee?D!==null?D+"Capture":null:D;ee=[];for(var j=T,E;j!==null;){E=j;var U=E.stateNode;if(E.tag===5&&U!==null&&(E=U,C!==null&&(U=_o(j,C),U!=null&&ee.push(Ho(j,U,E)))),Ge)break;j=j.return}0<ee.length&&(D=new J(D,K,null,o,B),F.push({event:D,listeners:ee}))}}if((n&7)===0){e:{if(D=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",D&&o!==el&&(K=o.relatedTarget||o.fromElement)&&(lr(K)||K[Sn]))break e;if((J||D)&&(D=B.window===B?B:(D=B.ownerDocument)?D.defaultView||D.parentWindow:window,J?(K=o.relatedTarget||o.toElement,J=T,K=K?lr(K):null,K!==null&&(Ge=ar(K),K!==Ge||K.tag!==5&&K.tag!==6)&&(K=null)):(J=null,K=T),J!==K)){if(ee=Wd,U="onMouseLeave",C="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ee=qd,U="onPointerLeave",C="onPointerEnter",j="pointer"),Ge=J==null?D:Dr(J),E=K==null?D:Dr(K),D=new ee(U,j+"leave",J,o,B),D.target=Ge,D.relatedTarget=E,U=null,lr(B)===T&&(ee=new ee(C,j+"enter",K,o,B),ee.target=E,ee.relatedTarget=Ge,U=ee),Ge=U,J&&K)t:{for(ee=J,C=K,j=0,E=ee;E;E=Lr(E))j++;for(E=0,U=C;U;U=Lr(U))E++;for(;0<j-E;)ee=Lr(ee),j--;for(;0<E-j;)C=Lr(C),E--;for(;j--;){if(ee===C||C!==null&&ee===C.alternate)break t;ee=Lr(ee),C=Lr(C)}ee=null}else ee=null;J!==null&&vf(F,D,J,ee,!1),K!==null&&Ge!==null&&vf(F,Ge,K,ee,!0)}}e:{if(D=T?Dr(T):window,J=D.nodeName&&D.nodeName.toLowerCase(),J==="select"||J==="input"&&D.type==="file")var ne=x1;else if(Yd(D))if(Xd)ne=b1;else{ne=v1;var le=y1}else(J=D.nodeName)&&J.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(ne=w1);if(ne&&(ne=ne(t,T))){Kd(F,ne,o,B);break e}le&&le(t,D,T),t==="focusout"&&(le=D._wrapperState)&&le.controlled&&D.type==="number"&&Ja(D,"number",D.value)}switch(le=T?Dr(T):window,t){case"focusin":(Yd(le)||le.contentEditable==="true")&&(Or=le,jl=T,Zo=null);break;case"focusout":Zo=jl=Or=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,lf(F,o,B);break;case"selectionchange":if(j1)break;case"keydown":case"keyup":lf(F,o,B)}var ce;if(wl)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ar?Jd(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Vd&&o.locale!=="ko"&&(Ar||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ar&&(ce=Fd()):(Dn=B,ml="value"in Dn?Dn.value:Dn.textContent,Ar=!0)),le=cs(T,de),0<le.length&&(de=new Zd(de,t,null,o,B),F.push({event:de,listeners:le}),ce?de.data=ce:(ce=Qd(o),ce!==null&&(de.data=ce)))),(ce=f1?p1(t,o):m1(t,o))&&(T=cs(T,"onBeforeInput"),0<T.length&&(B=new Zd("onBeforeInput","beforeinput",null,o,B),F.push({event:B,listeners:T}),B.data=ce))}xf(F,n)})}function Ho(t,n,o){return{instance:t,listener:n,currentTarget:o}}function cs(t,n){for(var o=n+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=_o(t,o),p!=null&&l.unshift(Ho(t,p,u)),p=_o(t,n),p!=null&&l.push(Ho(t,p,u))),t=t.return}return l}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vf(t,n,o,l,u){for(var p=n._reactName,g=[];o!==null&&o!==l;){var w=o,k=w.alternate,T=w.stateNode;if(k!==null&&k===l)break;w.tag===5&&T!==null&&(w=T,u?(k=_o(o,p),k!=null&&g.unshift(Ho(o,k,w))):u||(k=_o(o,p),k!=null&&g.push(Ho(o,k,w)))),o=o.return}g.length!==0&&t.push({event:n,listeners:g})}var _1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function wf(t){return(typeof t=="string"?t:""+t).replace(_1,`
`).replace(E1,"")}function us(t,n,o){if(n=wf(n),wf(t)!==n&&o)throw Error(i(425))}function ds(){}var Tl=null,Il=null;function Rl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(t){return bf.resolve(null).then(t).catch(I1)}:Al;function I1(t){setTimeout(function(){throw t})}function Ol(t,n){var o=n,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Lo(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Lo(n)}function Fn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),pn="__reactFiber$"+Mr,Go="__reactProps$"+Mr,Sn="__reactContainer$"+Mr,Nl="__reactEvents$"+Mr,R1="__reactListeners$"+Mr,A1="__reactHandles$"+Mr;function lr(t){var n=t[pn];if(n)return n;for(var o=t.parentNode;o;){if(n=o[Sn]||o[pn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=kf(t);t!==null;){if(o=t[pn])return o;t=kf(t)}return n}t=o,o=t.parentNode}return null}function Jo(t){return t=t[pn]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function fs(t){return t[Go]||null}var Ll=[],Br=-1;function Un(t){return{current:t}}function Oe(t){0>Br||(t.current=Ll[Br],Ll[Br]=null,Br--)}function Ie(t,n){Br++,Ll[Br]=t.current,t.current=n}var Wn={},ht=Un(Wn),$t=Un(!1),cr=Wn;function Fr(t,n){var o=t.type.contextTypes;if(!o)return Wn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=n[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function zt(t){return t=t.childContextTypes,t!=null}function ps(){Oe($t),Oe(ht)}function Sf(t,n,o){if(ht.current!==Wn)throw Error(i(168));Ie(ht,n),Ie($t,o)}function jf(t,n,o){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(i(108,we(t)||"Unknown",u));return Z({},o,l)}function ms(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wn,cr=ht.current,Ie(ht,t),Ie($t,$t.current),!0}function $f(t,n,o){var l=t.stateNode;if(!l)throw Error(i(169));o?(t=jf(t,n,cr),l.__reactInternalMemoizedMergedChildContext=t,Oe($t),Oe(ht),Ie(ht,t)):Oe($t),Ie($t,o)}var jn=null,hs=!1,Ml=!1;function zf(t){jn===null?jn=[t]:jn.push(t)}function O1(t){hs=!0,zf(t)}function Zn(){if(!Ml&&jn!==null){Ml=!0;var t=0,n=Ce;try{var o=jn;for(Ce=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}jn=null,hs=!1}catch(u){throw jn!==null&&(jn=jn.slice(t+1)),Cd(sl,Zn),u}finally{Ce=n,Ml=!1}}return null}var Ur=[],Wr=0,gs=null,xs=0,Lt=[],Mt=0,ur=null,$n=1,zn="";function dr(t,n){Ur[Wr++]=xs,Ur[Wr++]=gs,gs=t,xs=n}function Cf(t,n,o){Lt[Mt++]=$n,Lt[Mt++]=zn,Lt[Mt++]=ur,ur=t;var l=$n;t=zn;var u=32-Kt(l)-1;l&=~(1<<u),o+=1;var p=32-Kt(n)+u;if(30<p){var g=u-u%5;p=(l&(1<<g)-1).toString(32),l>>=g,u-=g,$n=1<<32-Kt(n)+u|o<<u|l,zn=p+t}else $n=1<<p|o<<u|l,zn=t}function Dl(t){t.return!==null&&(dr(t,1),Cf(t,1,0))}function Bl(t){for(;t===gs;)gs=Ur[--Wr],Ur[Wr]=null,xs=Ur[--Wr],Ur[Wr]=null;for(;t===ur;)ur=Lt[--Mt],Lt[Mt]=null,zn=Lt[--Mt],Lt[Mt]=null,$n=Lt[--Mt],Lt[Mt]=null}var At=null,Ot=null,Me=!1,en=null;function _f(t,n){var o=Ut(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function Ef(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,At=t,Ot=Fn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,At=t,Ot=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=ur!==null?{id:$n,overflow:zn}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Ut(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,At=t,Ot=null,!0):!1;default:return!1}}function Fl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ul(t){if(Me){var n=Ot;if(n){var o=n;if(!Ef(t,n)){if(Fl(t))throw Error(i(418));n=Fn(o.nextSibling);var l=At;n&&Ef(t,n)?_f(l,o):(t.flags=t.flags&-4097|2,Me=!1,At=t)}}else{if(Fl(t))throw Error(i(418));t.flags=t.flags&-4097|2,Me=!1,At=t}}}function Pf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function ys(t){if(t!==At)return!1;if(!Me)return Pf(t),Me=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Rl(t.type,t.memoizedProps)),n&&(n=Ot)){if(Fl(t))throw Tf(),Error(i(418));for(;n;)_f(t,n),n=Fn(n.nextSibling)}if(Pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){Ot=Fn(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}Ot=null}}else Ot=At?Fn(t.stateNode.nextSibling):null;return!0}function Tf(){for(var t=Ot;t;)t=Fn(t.nextSibling)}function Zr(){Ot=At=null,Me=!1}function Wl(t){en===null?en=[t]:en.push(t)}var N1=G.ReactCurrentBatchConfig;function Qo(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var l=o.stateNode}if(!l)throw Error(i(147,t));var u=l,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(g){var w=u.refs;g===null?delete w[p]:w[p]=g},n._stringRef=p,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function vs(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function If(t){var n=t._init;return n(t._payload)}function Rf(t){function n(C,j){if(t){var E=C.deletions;E===null?(C.deletions=[j],C.flags|=16):E.push(j)}}function o(C,j){if(!t)return null;for(;j!==null;)n(C,j),j=j.sibling;return null}function l(C,j){for(C=new Map;j!==null;)j.key!==null?C.set(j.key,j):C.set(j.index,j),j=j.sibling;return C}function u(C,j){return C=Kn(C,j),C.index=0,C.sibling=null,C}function p(C,j,E){return C.index=E,t?(E=C.alternate,E!==null?(E=E.index,E<j?(C.flags|=2,j):E):(C.flags|=2,j)):(C.flags|=1048576,j)}function g(C){return t&&C.alternate===null&&(C.flags|=2),C}function w(C,j,E,U){return j===null||j.tag!==6?(j=Ac(E,C.mode,U),j.return=C,j):(j=u(j,E),j.return=C,j)}function k(C,j,E,U){var ne=E.type;return ne===W?B(C,j,E.props.children,U,E.key):j!==null&&(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Ve&&If(ne)===j.type)?(U=u(j,E.props),U.ref=Qo(C,j,E),U.return=C,U):(U=Ws(E.type,E.key,E.props,null,C.mode,U),U.ref=Qo(C,j,E),U.return=C,U)}function T(C,j,E,U){return j===null||j.tag!==4||j.stateNode.containerInfo!==E.containerInfo||j.stateNode.implementation!==E.implementation?(j=Oc(E,C.mode,U),j.return=C,j):(j=u(j,E.children||[]),j.return=C,j)}function B(C,j,E,U,ne){return j===null||j.tag!==7?(j=vr(E,C.mode,U,ne),j.return=C,j):(j=u(j,E),j.return=C,j)}function F(C,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ac(""+j,C.mode,E),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return E=Ws(j.type,j.key,j.props,null,C.mode,E),E.ref=Qo(C,null,j),E.return=C,E;case V:return j=Oc(j,C.mode,E),j.return=C,j;case Ve:var U=j._init;return F(C,U(j._payload),E)}if($o(j)||oe(j))return j=vr(j,C.mode,E,null),j.return=C,j;vs(C,j)}return null}function D(C,j,E,U){var ne=j!==null?j.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return ne!==null?null:w(C,j,""+E,U);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Q:return E.key===ne?k(C,j,E,U):null;case V:return E.key===ne?T(C,j,E,U):null;case Ve:return ne=E._init,D(C,j,ne(E._payload),U)}if($o(E)||oe(E))return ne!==null?null:B(C,j,E,U,null);vs(C,E)}return null}function J(C,j,E,U,ne){if(typeof U=="string"&&U!==""||typeof U=="number")return C=C.get(E)||null,w(j,C,""+U,ne);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Q:return C=C.get(U.key===null?E:U.key)||null,k(j,C,U,ne);case V:return C=C.get(U.key===null?E:U.key)||null,T(j,C,U,ne);case Ve:var le=U._init;return J(C,j,E,le(U._payload),ne)}if($o(U)||oe(U))return C=C.get(E)||null,B(j,C,U,ne,null);vs(j,U)}return null}function K(C,j,E,U){for(var ne=null,le=null,ce=j,de=j=0,it=null;ce!==null&&de<E.length;de++){ce.index>de?(it=ce,ce=null):it=ce.sibling;var Se=D(C,ce,E[de],U);if(Se===null){ce===null&&(ce=it);break}t&&ce&&Se.alternate===null&&n(C,ce),j=p(Se,j,de),le===null?ne=Se:le.sibling=Se,le=Se,ce=it}if(de===E.length)return o(C,ce),Me&&dr(C,de),ne;if(ce===null){for(;de<E.length;de++)ce=F(C,E[de],U),ce!==null&&(j=p(ce,j,de),le===null?ne=ce:le.sibling=ce,le=ce);return Me&&dr(C,de),ne}for(ce=l(C,ce);de<E.length;de++)it=J(ce,C,de,E[de],U),it!==null&&(t&&it.alternate!==null&&ce.delete(it.key===null?de:it.key),j=p(it,j,de),le===null?ne=it:le.sibling=it,le=it);return t&&ce.forEach(function(Xn){return n(C,Xn)}),Me&&dr(C,de),ne}function ee(C,j,E,U){var ne=oe(E);if(typeof ne!="function")throw Error(i(150));if(E=ne.call(E),E==null)throw Error(i(151));for(var le=ne=null,ce=j,de=j=0,it=null,Se=E.next();ce!==null&&!Se.done;de++,Se=E.next()){ce.index>de?(it=ce,ce=null):it=ce.sibling;var Xn=D(C,ce,Se.value,U);if(Xn===null){ce===null&&(ce=it);break}t&&ce&&Xn.alternate===null&&n(C,ce),j=p(Xn,j,de),le===null?ne=Xn:le.sibling=Xn,le=Xn,ce=it}if(Se.done)return o(C,ce),Me&&dr(C,de),ne;if(ce===null){for(;!Se.done;de++,Se=E.next())Se=F(C,Se.value,U),Se!==null&&(j=p(Se,j,de),le===null?ne=Se:le.sibling=Se,le=Se);return Me&&dr(C,de),ne}for(ce=l(C,ce);!Se.done;de++,Se=E.next())Se=J(ce,C,de,Se.value,U),Se!==null&&(t&&Se.alternate!==null&&ce.delete(Se.key===null?de:Se.key),j=p(Se,j,de),le===null?ne=Se:le.sibling=Se,le=Se);return t&&ce.forEach(function(hx){return n(C,hx)}),Me&&dr(C,de),ne}function Ge(C,j,E,U){if(typeof E=="object"&&E!==null&&E.type===W&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Q:e:{for(var ne=E.key,le=j;le!==null;){if(le.key===ne){if(ne=E.type,ne===W){if(le.tag===7){o(C,le.sibling),j=u(le,E.props.children),j.return=C,C=j;break e}}else if(le.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Ve&&If(ne)===le.type){o(C,le.sibling),j=u(le,E.props),j.ref=Qo(C,le,E),j.return=C,C=j;break e}o(C,le);break}else n(C,le);le=le.sibling}E.type===W?(j=vr(E.props.children,C.mode,U,E.key),j.return=C,C=j):(U=Ws(E.type,E.key,E.props,null,C.mode,U),U.ref=Qo(C,j,E),U.return=C,C=U)}return g(C);case V:e:{for(le=E.key;j!==null;){if(j.key===le)if(j.tag===4&&j.stateNode.containerInfo===E.containerInfo&&j.stateNode.implementation===E.implementation){o(C,j.sibling),j=u(j,E.children||[]),j.return=C,C=j;break e}else{o(C,j);break}else n(C,j);j=j.sibling}j=Oc(E,C.mode,U),j.return=C,C=j}return g(C);case Ve:return le=E._init,Ge(C,j,le(E._payload),U)}if($o(E))return K(C,j,E,U);if(oe(E))return ee(C,j,E,U);vs(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,j!==null&&j.tag===6?(o(C,j.sibling),j=u(j,E),j.return=C,C=j):(o(C,j),j=Ac(E,C.mode,U),j.return=C,C=j),g(C)):o(C,j)}return Ge}var qr=Rf(!0),Af=Rf(!1),ws=Un(null),bs=null,Vr=null,Zl=null;function ql(){Zl=Vr=bs=null}function Vl(t){var n=ws.current;Oe(ws),t._currentValue=n}function Hl(t,n,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===o)break;t=t.return}}function Hr(t,n){bs=t,Zl=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Ct=!0),t.firstContext=null)}function Dt(t){var n=t._currentValue;if(Zl!==t)if(t={context:t,memoizedValue:n,next:null},Vr===null){if(bs===null)throw Error(i(308));Vr=t,bs.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return n}var fr=null;function Gl(t){fr===null?fr=[t]:fr.push(t)}function Of(t,n,o,l){var u=n.interleaved;return u===null?(o.next=o,Gl(n)):(o.next=u.next,u.next=o),n.interleaved=o,Cn(t,l)}function Cn(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var qn=!1;function Jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Vn(t,n,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ke&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Cn(t,o)}return u=l.interleaved,u===null?(n.next=n,Gl(l)):(n.next=u.next,u.next=n),l.interleaved=n,Cn(t,o)}function ks(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,o|=l,n.lanes=o,cl(t,o)}}function Lf(t,n){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=g:p=p.next=g,o=o.next}while(o!==null);p===null?u=p=n:p=p.next=n}else u=p=n;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function Ss(t,n,o,l){var u=t.updateQueue;qn=!1;var p=u.firstBaseUpdate,g=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,T=k.next;k.next=null,g===null?p=T:g.next=T,g=k;var B=t.alternate;B!==null&&(B=B.updateQueue,w=B.lastBaseUpdate,w!==g&&(w===null?B.firstBaseUpdate=T:w.next=T,B.lastBaseUpdate=k))}if(p!==null){var F=u.baseState;g=0,B=T=k=null,w=p;do{var D=w.lane,J=w.eventTime;if((l&D)===D){B!==null&&(B=B.next={eventTime:J,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var K=t,ee=w;switch(D=n,J=o,ee.tag){case 1:if(K=ee.payload,typeof K=="function"){F=K.call(J,F,D);break e}F=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ee.payload,D=typeof K=="function"?K.call(J,F,D):K,D==null)break e;F=Z({},F,D);break e;case 2:qn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,D=u.effects,D===null?u.effects=[w]:D.push(w))}else J={eventTime:J,lane:D,tag:w.tag,payload:w.payload,callback:w.callback,next:null},B===null?(T=B=J,k=F):B=B.next=J,g|=D;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;D=w,w=D.next,D.next=null,u.lastBaseUpdate=D,u.shared.pending=null}}while(!0);if(B===null&&(k=F),u.baseState=k,u.firstBaseUpdate=T,u.lastBaseUpdate=B,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);hr|=g,t.lanes=g,t.memoizedState=F}}function Mf(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(i(191,u));u.call(l)}}}var Yo={},mn=Un(Yo),Ko=Un(Yo),Xo=Un(Yo);function pr(t){if(t===Yo)throw Error(i(174));return t}function Ql(t,n){switch(Ie(Xo,n),Ie(Ko,t),Ie(mn,Yo),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ya(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Ya(n,t)}Oe(mn),Ie(mn,n)}function Gr(){Oe(mn),Oe(Ko),Oe(Xo)}function Df(t){pr(Xo.current);var n=pr(mn.current),o=Ya(n,t.type);n!==o&&(Ie(Ko,t),Ie(mn,o))}function Yl(t){Ko.current===t&&(Oe(mn),Oe(Ko))}var Be=Un(0);function js(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Kl=[];function Xl(){for(var t=0;t<Kl.length;t++)Kl[t]._workInProgressVersionPrimary=null;Kl.length=0}var $s=G.ReactCurrentDispatcher,ec=G.ReactCurrentBatchConfig,mr=0,Fe=null,Ke=null,rt=null,zs=!1,ei=!1,ti=0,L1=0;function gt(){throw Error(i(321))}function tc(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!Xt(t[o],n[o]))return!1;return!0}function nc(t,n,o,l,u,p){if(mr=p,Fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$s.current=t===null||t.memoizedState===null?F1:U1,t=o(l,u),ei){p=0;do{if(ei=!1,ti=0,25<=p)throw Error(i(301));p+=1,rt=Ke=null,n.updateQueue=null,$s.current=W1,t=o(l,u)}while(ei)}if($s.current=Es,n=Ke!==null&&Ke.next!==null,mr=0,rt=Ke=Fe=null,zs=!1,n)throw Error(i(300));return t}function rc(){var t=ti!==0;return ti=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Fe.memoizedState=rt=t:rt=rt.next=t,rt}function Bt(){if(Ke===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=rt===null?Fe.memoizedState:rt.next;if(n!==null)rt=n,Ke=t;else{if(t===null)throw Error(i(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},rt===null?Fe.memoizedState=rt=t:rt=rt.next=t}return rt}function ni(t,n){return typeof n=="function"?n(t):n}function oc(t){var n=Bt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var l=Ke,u=l.baseQueue,p=o.pending;if(p!==null){if(u!==null){var g=u.next;u.next=p.next,p.next=g}l.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,l=l.baseState;var w=g=null,k=null,T=p;do{var B=T.lane;if((mr&B)===B)k!==null&&(k=k.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),l=T.hasEagerState?T.eagerState:t(l,T.action);else{var F={lane:B,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};k===null?(w=k=F,g=l):k=k.next=F,Fe.lanes|=B,hr|=B}T=T.next}while(T!==null&&T!==p);k===null?g=l:k.next=w,Xt(l,n.memoizedState)||(Ct=!0),n.memoizedState=l,n.baseState=g,n.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do p=u.lane,Fe.lanes|=p,hr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function ic(t){var n=Bt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,p=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do p=t(p,g.action),g=g.next;while(g!==u);Xt(p,n.memoizedState)||(Ct=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,l]}function Bf(){}function Ff(t,n){var o=Fe,l=Bt(),u=n(),p=!Xt(l.memoizedState,u);if(p&&(l.memoizedState=u,Ct=!0),l=l.queue,sc(Zf.bind(null,o,l,t),[t]),l.getSnapshot!==n||p||rt!==null&&rt.memoizedState.tag&1){if(o.flags|=2048,ri(9,Wf.bind(null,o,l,u,n),void 0,null),ot===null)throw Error(i(349));(mr&30)!==0||Uf(o,n,u)}return u}function Uf(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=Fe.updateQueue,n===null?(n={lastEffect:null,stores:null},Fe.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Wf(t,n,o,l){n.value=o,n.getSnapshot=l,qf(n)&&Vf(t)}function Zf(t,n,o){return o(function(){qf(n)&&Vf(t)})}function qf(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!Xt(t,o)}catch{return!0}}function Vf(t){var n=Cn(t,1);n!==null&&on(n,t,1,-1)}function Hf(t){var n=hn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:t},n.queue=t,t=t.dispatch=B1.bind(null,Fe,t),[n.memoizedState,t]}function ri(t,n,o,l){return t={tag:t,create:n,destroy:o,deps:l,next:null},n=Fe.updateQueue,n===null?(n={lastEffect:null,stores:null},Fe.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,n.lastEffect=t)),t}function Gf(){return Bt().memoizedState}function Cs(t,n,o,l){var u=hn();Fe.flags|=t,u.memoizedState=ri(1|n,o,void 0,l===void 0?null:l)}function _s(t,n,o,l){var u=Bt();l=l===void 0?null:l;var p=void 0;if(Ke!==null){var g=Ke.memoizedState;if(p=g.destroy,l!==null&&tc(l,g.deps)){u.memoizedState=ri(n,o,p,l);return}}Fe.flags|=t,u.memoizedState=ri(1|n,o,p,l)}function Jf(t,n){return Cs(8390656,8,t,n)}function sc(t,n){return _s(2048,8,t,n)}function Qf(t,n){return _s(4,2,t,n)}function Yf(t,n){return _s(4,4,t,n)}function Kf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xf(t,n,o){return o=o!=null?o.concat([t]):null,_s(4,4,Kf.bind(null,n,t),o)}function ac(){}function ep(t,n){var o=Bt();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&tc(n,l[1])?l[0]:(o.memoizedState=[t,n],t)}function tp(t,n){var o=Bt();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&tc(n,l[1])?l[0]:(t=t(),o.memoizedState=[t,n],t)}function np(t,n,o){return(mr&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=o):(Xt(o,n)||(o=Td(),Fe.lanes|=o,hr|=o,t.baseState=!0),n)}function M1(t,n){var o=Ce;Ce=o!==0&&4>o?o:4,t(!0);var l=ec.transition;ec.transition={};try{t(!1),n()}finally{Ce=o,ec.transition=l}}function rp(){return Bt().memoizedState}function D1(t,n,o){var l=Qn(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},op(t))ip(n,o);else if(o=Of(t,n,o,l),o!==null){var u=kt();on(o,t,l,u),sp(o,n,l)}}function B1(t,n,o){var l=Qn(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(op(t))ip(n,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var g=n.lastRenderedState,w=p(g,o);if(u.hasEagerState=!0,u.eagerState=w,Xt(w,g)){var k=n.interleaved;k===null?(u.next=u,Gl(n)):(u.next=k.next,k.next=u),n.interleaved=u;return}}catch{}finally{}o=Of(t,n,u,l),o!==null&&(u=kt(),on(o,t,l,u),sp(o,n,l))}}function op(t){var n=t.alternate;return t===Fe||n!==null&&n===Fe}function ip(t,n){ei=zs=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function sp(t,n,o){if((o&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,o|=l,n.lanes=o,cl(t,o)}}var Es={readContext:Dt,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},F1={readContext:Dt,useCallback:function(t,n){return hn().memoizedState=[t,n===void 0?null:n],t},useContext:Dt,useEffect:Jf,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,Cs(4194308,4,Kf.bind(null,n,t),o)},useLayoutEffect:function(t,n){return Cs(4194308,4,t,n)},useInsertionEffect:function(t,n){return Cs(4,2,t,n)},useMemo:function(t,n){var o=hn();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var l=hn();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=D1.bind(null,Fe,t),[l.memoizedState,t]},useRef:function(t){var n=hn();return t={current:t},n.memoizedState=t},useState:Hf,useDebugValue:ac,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Hf(!1),n=t[0];return t=M1.bind(null,t[1]),hn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var l=Fe,u=hn();if(Me){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),ot===null)throw Error(i(349));(mr&30)!==0||Uf(l,n,o)}u.memoizedState=o;var p={value:o,getSnapshot:n};return u.queue=p,Jf(Zf.bind(null,l,p,t),[t]),l.flags|=2048,ri(9,Wf.bind(null,l,p,o,n),void 0,null),o},useId:function(){var t=hn(),n=ot.identifierPrefix;if(Me){var o=zn,l=$n;o=(l&~(1<<32-Kt(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=ti++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=L1++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},U1={readContext:Dt,useCallback:ep,useContext:Dt,useEffect:sc,useImperativeHandle:Xf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:tp,useReducer:oc,useRef:Gf,useState:function(){return oc(ni)},useDebugValue:ac,useDeferredValue:function(t){var n=Bt();return np(n,Ke.memoizedState,t)},useTransition:function(){var t=oc(ni)[0],n=Bt().memoizedState;return[t,n]},useMutableSource:Bf,useSyncExternalStore:Ff,useId:rp,unstable_isNewReconciler:!1},W1={readContext:Dt,useCallback:ep,useContext:Dt,useEffect:sc,useImperativeHandle:Xf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:tp,useReducer:ic,useRef:Gf,useState:function(){return ic(ni)},useDebugValue:ac,useDeferredValue:function(t){var n=Bt();return Ke===null?n.memoizedState=t:np(n,Ke.memoizedState,t)},useTransition:function(){var t=ic(ni)[0],n=Bt().memoizedState;return[t,n]},useMutableSource:Bf,useSyncExternalStore:Ff,useId:rp,unstable_isNewReconciler:!1};function tn(t,n){if(t&&t.defaultProps){n=Z({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function lc(t,n,o,l){n=t.memoizedState,o=o(l,n),o=o==null?n:Z({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ps={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var l=kt(),u=Qn(t),p=_n(l,u);p.payload=n,o!=null&&(p.callback=o),n=Vn(t,p,u),n!==null&&(on(n,t,u,l),ks(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var l=kt(),u=Qn(t),p=_n(l,u);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=Vn(t,p,u),n!==null&&(on(n,t,u,l),ks(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=kt(),l=Qn(t),u=_n(o,l);u.tag=2,n!=null&&(u.callback=n),n=Vn(t,u,l),n!==null&&(on(n,t,l,o),ks(n,t,l))}};function ap(t,n,o,l,u,p,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,g):n.prototype&&n.prototype.isPureReactComponent?!Wo(o,l)||!Wo(u,p):!0}function lp(t,n,o){var l=!1,u=Wn,p=n.contextType;return typeof p=="object"&&p!==null?p=Dt(p):(u=zt(n)?cr:ht.current,l=n.contextTypes,p=(l=l!=null)?Fr(t,u):Wn),n=new n(o,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ps,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),n}function cp(t,n,o,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==t&&Ps.enqueueReplaceState(n,n.state,null)}function cc(t,n,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Jl(t);var p=n.contextType;typeof p=="object"&&p!==null?u.context=Dt(p):(p=zt(n)?cr:ht.current,u.context=Fr(t,p)),u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(lc(t,n,p,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ps.enqueueReplaceState(u,u.state,null),Ss(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Jr(t,n){try{var o="",l=n;do o+=ue(l),l=l.return;while(l);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:u,digest:null}}function uc(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function dc(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var Z1=typeof WeakMap=="function"?WeakMap:Map;function up(t,n,o){o=_n(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){Ls||(Ls=!0,zc=l),dc(t,n)},o}function dp(t,n,o){o=_n(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;o.payload=function(){return l(u)},o.callback=function(){dc(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){dc(t,n),typeof l!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function fp(t,n,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Z1;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(o)||(u.add(o),t=ox.bind(null,t,n,o),n.then(t,t))}function pp(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function mp(t,n,o,l,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=_n(-1,1),n.tag=2,Vn(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var q1=G.ReactCurrentOwner,Ct=!1;function bt(t,n,o,l){n.child=t===null?Af(n,null,o,l):qr(n,t.child,o,l)}function hp(t,n,o,l,u){o=o.render;var p=n.ref;return Hr(n,u),l=nc(t,n,o,l,p,u),o=rc(),t!==null&&!Ct?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,En(t,n,u)):(Me&&o&&Dl(n),n.flags|=1,bt(t,n,l,u),n.child)}function gp(t,n,o,l,u){if(t===null){var p=o.type;return typeof p=="function"&&!Rc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,xp(t,n,p,l,u)):(t=Ws(o.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&u)===0){var g=p.memoizedProps;if(o=o.compare,o=o!==null?o:Wo,o(g,l)&&t.ref===n.ref)return En(t,n,u)}return n.flags|=1,t=Kn(p,l),t.ref=n.ref,t.return=n,n.child=t}function xp(t,n,o,l,u){if(t!==null){var p=t.memoizedProps;if(Wo(p,l)&&t.ref===n.ref)if(Ct=!1,n.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Ct=!0);else return n.lanes=t.lanes,En(t,n,u)}return fc(t,n,o,l,u)}function yp(t,n,o){var l=n.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Yr,Nt),Nt|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Ie(Yr,Nt),Nt|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ie(Yr,Nt),Nt|=l}else p!==null?(l=p.baseLanes|o,n.memoizedState=null):l=o,Ie(Yr,Nt),Nt|=l;return bt(t,n,u,o),n.child}function vp(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function fc(t,n,o,l,u){var p=zt(o)?cr:ht.current;return p=Fr(n,p),Hr(n,u),o=nc(t,n,o,l,p,u),l=rc(),t!==null&&!Ct?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,En(t,n,u)):(Me&&l&&Dl(n),n.flags|=1,bt(t,n,o,u),n.child)}function wp(t,n,o,l,u){if(zt(o)){var p=!0;ms(n)}else p=!1;if(Hr(n,u),n.stateNode===null)Is(t,n),lp(n,o,l),cc(n,o,l,u),l=!0;else if(t===null){var g=n.stateNode,w=n.memoizedProps;g.props=w;var k=g.context,T=o.contextType;typeof T=="object"&&T!==null?T=Dt(T):(T=zt(o)?cr:ht.current,T=Fr(n,T));var B=o.getDerivedStateFromProps,F=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==l||k!==T)&&cp(n,g,l,T),qn=!1;var D=n.memoizedState;g.state=D,Ss(n,l,g,u),k=n.memoizedState,w!==l||D!==k||$t.current||qn?(typeof B=="function"&&(lc(n,o,B,l),k=n.memoizedState),(w=qn||ap(n,o,w,l,D,k,T))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=k),g.props=l,g.state=k,g.context=T,l=w):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,Nf(t,n),w=n.memoizedProps,T=n.type===n.elementType?w:tn(n.type,w),g.props=T,F=n.pendingProps,D=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=Dt(k):(k=zt(o)?cr:ht.current,k=Fr(n,k));var J=o.getDerivedStateFromProps;(B=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||D!==k)&&cp(n,g,l,k),qn=!1,D=n.memoizedState,g.state=D,Ss(n,l,g,u);var K=n.memoizedState;w!==F||D!==K||$t.current||qn?(typeof J=="function"&&(lc(n,o,J,l),K=n.memoizedState),(T=qn||ap(n,o,T,l,D,K,k)||!1)?(B||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,K,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,K,k)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=K),g.props=l,g.state=K,g.context=k,l=T):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=1024),l=!1)}return pc(t,n,o,l,p,u)}function pc(t,n,o,l,u,p){vp(t,n);var g=(n.flags&128)!==0;if(!l&&!g)return u&&$f(n,o,!1),En(t,n,p);l=n.stateNode,q1.current=n;var w=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&g?(n.child=qr(n,t.child,null,p),n.child=qr(n,null,w,p)):bt(t,n,w,p),n.memoizedState=l.state,u&&$f(n,o,!0),n.child}function bp(t){var n=t.stateNode;n.pendingContext?Sf(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Sf(t,n.context,!1),Ql(t,n.containerInfo)}function kp(t,n,o,l,u){return Zr(),Wl(u),n.flags|=256,bt(t,n,o,l),n.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sp(t,n,o){var l=n.pendingProps,u=Be.current,p=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(u&2)!==0),w?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ie(Be,u&1),t===null)return Ul(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(g=l.children,t=l.fallback,p?(l=n.mode,p=n.child,g={mode:"hidden",children:g},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=g):p=Zs(g,l,0,null),t=vr(t,l,o,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=hc(o),n.memoizedState=mc,t):gc(n,g));if(u=t.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return V1(t,n,g,l,w,u,o);if(p){p=l.fallback,g=n.mode,u=t.child,w=u.sibling;var k={mode:"hidden",children:l.children};return(g&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=k,n.deletions=null):(l=Kn(u,k),l.subtreeFlags=u.subtreeFlags&14680064),w!==null?p=Kn(w,p):(p=vr(p,g,o,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,g=t.child.memoizedState,g=g===null?hc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=t.childLanes&~o,n.memoizedState=mc,l}return p=t.child,t=p.sibling,l=Kn(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=o),l.return=n,l.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=l,n.memoizedState=null,l}function gc(t,n){return n=Zs({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Ts(t,n,o,l){return l!==null&&Wl(l),qr(n,t.child,null,o),t=gc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function V1(t,n,o,l,u,p,g){if(o)return n.flags&256?(n.flags&=-257,l=uc(Error(i(422))),Ts(t,n,g,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=l.fallback,u=n.mode,l=Zs({mode:"visible",children:l.children},u,0,null),p=vr(p,u,g,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&qr(n,t.child,null,g),n.child.memoizedState=hc(g),n.memoizedState=mc,p);if((n.mode&1)===0)return Ts(t,n,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var w=l.dgst;return l=w,p=Error(i(419)),l=uc(p,l,void 0),Ts(t,n,g,l)}if(w=(g&t.childLanes)!==0,Ct||w){if(l=ot,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Cn(t,u),on(l,t,u,-1))}return Ic(),l=uc(Error(i(421))),Ts(t,n,g,l)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=ix.bind(null,t),u._reactRetry=n,null):(t=p.treeContext,Ot=Fn(u.nextSibling),At=n,Me=!0,en=null,t!==null&&(Lt[Mt++]=$n,Lt[Mt++]=zn,Lt[Mt++]=ur,$n=t.id,zn=t.overflow,ur=n),n=gc(n,l.children),n.flags|=4096,n)}function jp(t,n,o){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Hl(t.return,n,o)}function xc(t,n,o,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=u)}function $p(t,n,o){var l=n.pendingProps,u=l.revealOrder,p=l.tail;if(bt(t,n,l.children,o),l=Be.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jp(t,o,n);else if(t.tag===19)jp(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ie(Be,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&js(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),xc(n,!1,u,o,p);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&js(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}xc(n,!0,o,null,p);break;case"together":xc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Is(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function En(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),hr|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=Kn(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=Kn(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function H1(t,n,o){switch(n.tag){case 3:bp(n),Zr();break;case 5:Df(n);break;case 1:zt(n.type)&&ms(n);break;case 4:Ql(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;Ie(ws,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Ie(Be,Be.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?Sp(t,n,o):(Ie(Be,Be.current&1),t=En(t,n,o),t!==null?t.sibling:null);Ie(Be,Be.current&1);break;case 19:if(l=(o&n.childLanes)!==0,(t.flags&128)!==0){if(l)return $p(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ie(Be,Be.current),l)break;return null;case 22:case 23:return n.lanes=0,yp(t,n,o)}return En(t,n,o)}var zp,yc,Cp,_p;zp=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},yc=function(){},Cp=function(t,n,o,l){var u=t.memoizedProps;if(u!==l){t=n.stateNode,pr(mn.current);var p=null;switch(o){case"input":u=Ha(t,u),l=Ha(t,l),p=[];break;case"select":u=Z({},u,{value:void 0}),l=Z({},l,{value:void 0}),p=[];break;case"textarea":u=Qa(t,u),l=Qa(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ds)}Ka(o,l);var g;o=null;for(T in u)if(!l.hasOwnProperty(T)&&u.hasOwnProperty(T)&&u[T]!=null)if(T==="style"){var w=u[T];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(c.hasOwnProperty(T)?p||(p=[]):(p=p||[]).push(T,null));for(T in l){var k=l[T];if(w=u!=null?u[T]:void 0,l.hasOwnProperty(T)&&k!==w&&(k!=null||w!=null))if(T==="style")if(w){for(g in w)!w.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&w[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(p||(p=[]),p.push(T,o)),o=k;else T==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(p=p||[]).push(T,k)):T==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(T,""+k):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(c.hasOwnProperty(T)?(k!=null&&T==="onScroll"&&Ae("scroll",t),p||w===k||(p=[])):(p=p||[]).push(T,k))}o&&(p=p||[]).push("style",o);var T=p;(n.updateQueue=T)&&(n.flags|=4)}},_p=function(t,n,o,l){o!==l&&(n.flags|=4)};function oi(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xt(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,n}function G1(t,n,o){var l=n.pendingProps;switch(Bl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(n),null;case 1:return zt(n.type)&&ps(),xt(n),null;case 3:return l=n.stateNode,Gr(),Oe($t),Oe(ht),Xl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ys(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,en!==null&&(Ec(en),en=null))),yc(t,n),xt(n),null;case 5:Yl(n);var u=pr(Xo.current);if(o=n.type,t!==null&&n.stateNode!=null)Cp(t,n,o,l,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return xt(n),null}if(t=pr(mn.current),ys(n)){l=n.stateNode,o=n.type;var p=n.memoizedProps;switch(l[pn]=n,l[Go]=p,t=(n.mode&1)!==0,o){case"dialog":Ae("cancel",l),Ae("close",l);break;case"iframe":case"object":case"embed":Ae("load",l);break;case"video":case"audio":for(u=0;u<qo.length;u++)Ae(qo[u],l);break;case"source":Ae("error",l);break;case"img":case"image":case"link":Ae("error",l),Ae("load",l);break;case"details":Ae("toggle",l);break;case"input":ad(l,p),Ae("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ae("invalid",l);break;case"textarea":ud(l,p),Ae("invalid",l)}Ka(o,p),u=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?l.textContent!==w&&(p.suppressHydrationWarning!==!0&&us(l.textContent,w,t),u=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&us(l.textContent,w,t),u=["children",""+w]):c.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Ae("scroll",l)}switch(o){case"input":Fi(l),cd(l,p,!0);break;case"textarea":Fi(l),fd(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ds)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=g.createElement(o,{is:l.is}):(t=g.createElement(o),o==="select"&&(g=t,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):t=g.createElementNS(t,o),t[pn]=n,t[Go]=l,zp(t,n,!1,!1),n.stateNode=t;e:{switch(g=Xa(o,l),o){case"dialog":Ae("cancel",t),Ae("close",t),u=l;break;case"iframe":case"object":case"embed":Ae("load",t),u=l;break;case"video":case"audio":for(u=0;u<qo.length;u++)Ae(qo[u],t);u=l;break;case"source":Ae("error",t),u=l;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),u=l;break;case"details":Ae("toggle",t),u=l;break;case"input":ad(t,l),u=Ha(t,l),Ae("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=Z({},l,{value:void 0}),Ae("invalid",t);break;case"textarea":ud(t,l),u=Qa(t,l),Ae("invalid",t);break;default:u=l}Ka(o,u),w=u;for(p in w)if(w.hasOwnProperty(p)){var k=w[p];p==="style"?gd(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&md(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&zo(t,k):typeof k=="number"&&zo(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(c.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ae("scroll",t):k!=null&&H(t,p,k,g))}switch(o){case"input":Fi(t),cd(t,l,!1);break;case"textarea":Fi(t),fd(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?Er(t,!!l.multiple,p,!1):l.defaultValue!=null&&Er(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ds)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return xt(n),null;case 6:if(t&&n.stateNode!=null)_p(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(o=pr(Xo.current),pr(mn.current),ys(n)){if(l=n.stateNode,o=n.memoizedProps,l[pn]=n,(p=l.nodeValue!==o)&&(t=At,t!==null))switch(t.tag){case 3:us(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&us(l.nodeValue,o,(t.mode&1)!==0)}p&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pn]=n,n.stateNode=l}return xt(n),null;case 13:if(Oe(Be),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&Ot!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Tf(),Zr(),n.flags|=98560,p=!1;else if(p=ys(n),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[pn]=n}else Zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xt(n),p=!1}else en!==null&&(Ec(en),en=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Be.current&1)!==0?Xe===0&&(Xe=3):Ic())),n.updateQueue!==null&&(n.flags|=4),xt(n),null);case 4:return Gr(),yc(t,n),t===null&&Vo(n.stateNode.containerInfo),xt(n),null;case 10:return Vl(n.type._context),xt(n),null;case 17:return zt(n.type)&&ps(),xt(n),null;case 19:if(Oe(Be),p=n.memoizedState,p===null)return xt(n),null;if(l=(n.flags&128)!==0,g=p.rendering,g===null)if(l)oi(p,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=js(t),g!==null){for(n.flags|=128,oi(p,!1),l=g.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)p=o,t=l,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,t=g.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(Be,Be.current&1|2),n.child}t=t.sibling}p.tail!==null&&He()>Kr&&(n.flags|=128,l=!0,oi(p,!1),n.lanes=4194304)}else{if(!l)if(t=js(g),t!==null){if(n.flags|=128,l=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),oi(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Me)return xt(n),null}else 2*He()-p.renderingStartTime>Kr&&o!==1073741824&&(n.flags|=128,l=!0,oi(p,!1),n.lanes=4194304);p.isBackwards?(g.sibling=n.child,n.child=g):(o=p.last,o!==null?o.sibling=g:n.child=g,p.last=g)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=He(),n.sibling=null,o=Be.current,Ie(Be,l?o&1|2:o&1),n):(xt(n),null);case 22:case 23:return Tc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Nt&1073741824)!==0&&(xt(n),n.subtreeFlags&6&&(n.flags|=8192)):xt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function J1(t,n){switch(Bl(n),n.tag){case 1:return zt(n.type)&&ps(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gr(),Oe($t),Oe(ht),Xl(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Yl(n),null;case 13:if(Oe(Be),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Zr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Oe(Be),null;case 4:return Gr(),null;case 10:return Vl(n.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Rs=!1,yt=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Qr(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){qe(t,n,l)}else o.current=null}function vc(t,n,o){try{o()}catch(l){qe(t,n,l)}}var Ep=!1;function Y1(t,n){if(Tl=Xi,t=af(),Sl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var g=0,w=-1,k=-1,T=0,B=0,F=t,D=null;t:for(;;){for(var J;F!==o||u!==0&&F.nodeType!==3||(w=g+u),F!==p||l!==0&&F.nodeType!==3||(k=g+l),F.nodeType===3&&(g+=F.nodeValue.length),(J=F.firstChild)!==null;)D=F,F=J;for(;;){if(F===t)break t;if(D===o&&++T===u&&(w=g),D===p&&++B===l&&(k=g),(J=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=J}o=w===-1||k===-1?null:{start:w,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Il={focusedElem:t,selectionRange:o},Xi=!1,Y=n;Y!==null;)if(n=Y,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Y=t;else for(;Y!==null;){n=Y;try{var K=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var ee=K.memoizedProps,Ge=K.memoizedState,C=n.stateNode,j=C.getSnapshotBeforeUpdate(n.elementType===n.type?ee:tn(n.type,ee),Ge);C.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var E=n.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){qe(n,n.return,U)}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}return K=Ep,Ep=!1,K}function ii(t,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&vc(n,o,p)}u=u.next}while(u!==l)}}function As(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function wc(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function Pp(t){var n=t.alternate;n!==null&&(t.alternate=null,Pp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[pn],delete n[Go],delete n[Nl],delete n[R1],delete n[A1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bc(t,n,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=ds));else if(l!==4&&(t=t.child,t!==null))for(bc(t,n,o),t=t.sibling;t!==null;)bc(t,n,o),t=t.sibling}function kc(t,n,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(kc(t,n,o),t=t.sibling;t!==null;)kc(t,n,o),t=t.sibling}var lt=null,nn=!1;function Hn(t,n,o){for(o=o.child;o!==null;)Rp(t,n,o),o=o.sibling}function Rp(t,n,o){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Hi,o)}catch{}switch(o.tag){case 5:yt||Qr(o,n);case 6:var l=lt,u=nn;lt=null,Hn(t,n,o),lt=l,nn=u,lt!==null&&(nn?(t=lt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):lt.removeChild(o.stateNode));break;case 18:lt!==null&&(nn?(t=lt,o=o.stateNode,t.nodeType===8?Ol(t.parentNode,o):t.nodeType===1&&Ol(t,o),Lo(t)):Ol(lt,o.stateNode));break;case 4:l=lt,u=nn,lt=o.stateNode.containerInfo,nn=!0,Hn(t,n,o),lt=l,nn=u;break;case 0:case 11:case 14:case 15:if(!yt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,g=p.destroy;p=p.tag,g!==void 0&&((p&2)!==0||(p&4)!==0)&&vc(o,n,g),u=u.next}while(u!==l)}Hn(t,n,o);break;case 1:if(!yt&&(Qr(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(w){qe(o,n,w)}Hn(t,n,o);break;case 21:Hn(t,n,o);break;case 22:o.mode&1?(yt=(l=yt)||o.memoizedState!==null,Hn(t,n,o),yt=l):Hn(t,n,o);break;default:Hn(t,n,o)}}function Ap(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Q1),n.forEach(function(l){var u=sx.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function rn(t,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var p=t,g=n,w=g;e:for(;w!==null;){switch(w.tag){case 5:lt=w.stateNode,nn=!1;break e;case 3:lt=w.stateNode.containerInfo,nn=!0;break e;case 4:lt=w.stateNode.containerInfo,nn=!0;break e}w=w.return}if(lt===null)throw Error(i(160));Rp(p,g,u),lt=null,nn=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(T){qe(u,n,T)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Op(n,t),n=n.sibling}function Op(t,n){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(n,t),gn(t),l&4){try{ii(3,t,t.return),As(3,t)}catch(ee){qe(t,t.return,ee)}try{ii(5,t,t.return)}catch(ee){qe(t,t.return,ee)}}break;case 1:rn(n,t),gn(t),l&512&&o!==null&&Qr(o,o.return);break;case 5:if(rn(n,t),gn(t),l&512&&o!==null&&Qr(o,o.return),t.flags&32){var u=t.stateNode;try{zo(u,"")}catch(ee){qe(t,t.return,ee)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,g=o!==null?o.memoizedProps:p,w=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&ld(u,p),Xa(w,g);var T=Xa(w,p);for(g=0;g<k.length;g+=2){var B=k[g],F=k[g+1];B==="style"?gd(u,F):B==="dangerouslySetInnerHTML"?md(u,F):B==="children"?zo(u,F):H(u,B,F,T)}switch(w){case"input":Ga(u,p);break;case"textarea":dd(u,p);break;case"select":var D=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var J=p.value;J!=null?Er(u,!!p.multiple,J,!1):D!==!!p.multiple&&(p.defaultValue!=null?Er(u,!!p.multiple,p.defaultValue,!0):Er(u,!!p.multiple,p.multiple?[]:"",!1))}u[Go]=p}catch(ee){qe(t,t.return,ee)}}break;case 6:if(rn(n,t),gn(t),l&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(ee){qe(t,t.return,ee)}}break;case 3:if(rn(n,t),gn(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ee){qe(t,t.return,ee)}break;case 4:rn(n,t),gn(t);break;case 13:rn(n,t),gn(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||($c=He())),l&4&&Ap(t);break;case 22:if(B=o!==null&&o.memoizedState!==null,t.mode&1?(yt=(T=yt)||B,rn(n,t),yt=T):rn(n,t),gn(t),l&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!B&&(t.mode&1)!==0)for(Y=t,B=t.child;B!==null;){for(F=Y=B;Y!==null;){switch(D=Y,J=D.child,D.tag){case 0:case 11:case 14:case 15:ii(4,D,D.return);break;case 1:Qr(D,D.return);var K=D.stateNode;if(typeof K.componentWillUnmount=="function"){l=D,o=D.return;try{n=l,K.props=n.memoizedProps,K.state=n.memoizedState,K.componentWillUnmount()}catch(ee){qe(l,o,ee)}}break;case 5:Qr(D,D.return);break;case 22:if(D.memoizedState!==null){Mp(F);continue}}J!==null?(J.return=D,Y=J):Mp(F)}B=B.sibling}e:for(B=null,F=t;;){if(F.tag===5){if(B===null){B=F;try{u=F.stateNode,T?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=F.stateNode,k=F.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=hd("display",g))}catch(ee){qe(t,t.return,ee)}}}else if(F.tag===6){if(B===null)try{F.stateNode.nodeValue=T?"":F.memoizedProps}catch(ee){qe(t,t.return,ee)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break e;for(;F.sibling===null;){if(F.return===null||F.return===t)break e;B===F&&(B=null),F=F.return}B===F&&(B=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:rn(n,t),gn(t),l&4&&Ap(t);break;case 21:break;default:rn(n,t),gn(t)}}function gn(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var l=o;break e}o=o.return}throw Error(i(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(zo(u,""),l.flags&=-33);var p=Ip(t);kc(t,p,u);break;case 3:case 4:var g=l.stateNode.containerInfo,w=Ip(t);bc(t,w,g);break;default:throw Error(i(161))}}catch(k){qe(t,t.return,k)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function K1(t,n,o){Y=t,Np(t)}function Np(t,n,o){for(var l=(t.mode&1)!==0;Y!==null;){var u=Y,p=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Rs;if(!g){var w=u.alternate,k=w!==null&&w.memoizedState!==null||yt;w=Rs;var T=yt;if(Rs=g,(yt=k)&&!T)for(Y=u;Y!==null;)g=Y,k=g.child,g.tag===22&&g.memoizedState!==null?Dp(u):k!==null?(k.return=g,Y=k):Dp(u);for(;p!==null;)Y=p,Np(p),p=p.sibling;Y=u,Rs=w,yt=T}Lp(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Y=p):Lp(t)}}function Lp(t){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:yt||As(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!yt)if(o===null)l.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:tn(n.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Mf(n,p,l);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Mf(n,g,o)}break;case 5:var w=n.stateNode;if(o===null&&n.flags&4){o=w;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var T=n.alternate;if(T!==null){var B=T.memoizedState;if(B!==null){var F=B.dehydrated;F!==null&&Lo(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}yt||n.flags&512&&wc(n)}catch(D){qe(n,n.return,D)}}if(n===t){Y=null;break}if(o=n.sibling,o!==null){o.return=n.return,Y=o;break}Y=n.return}}function Mp(t){for(;Y!==null;){var n=Y;if(n===t){Y=null;break}var o=n.sibling;if(o!==null){o.return=n.return,Y=o;break}Y=n.return}}function Dp(t){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{As(4,n)}catch(k){qe(n,o,k)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(k){qe(n,u,k)}}var p=n.return;try{wc(n)}catch(k){qe(n,p,k)}break;case 5:var g=n.return;try{wc(n)}catch(k){qe(n,g,k)}}}catch(k){qe(n,n.return,k)}if(n===t){Y=null;break}var w=n.sibling;if(w!==null){w.return=n.return,Y=w;break}Y=n.return}}var X1=Math.ceil,Os=G.ReactCurrentDispatcher,Sc=G.ReactCurrentOwner,Ft=G.ReactCurrentBatchConfig,ke=0,ot=null,Je=null,ct=0,Nt=0,Yr=Un(0),Xe=0,si=null,hr=0,Ns=0,jc=0,ai=null,_t=null,$c=0,Kr=1/0,Pn=null,Ls=!1,zc=null,Gn=null,Ms=!1,Jn=null,Ds=0,li=0,Cc=null,Bs=-1,Fs=0;function kt(){return(ke&6)!==0?He():Bs!==-1?Bs:Bs=He()}function Qn(t){return(t.mode&1)===0?1:(ke&2)!==0&&ct!==0?ct&-ct:N1.transition!==null?(Fs===0&&(Fs=Td()),Fs):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:Bd(t.type)),t)}function on(t,n,o,l){if(50<li)throw li=0,Cc=null,Error(i(185));Io(t,o,l),((ke&2)===0||t!==ot)&&(t===ot&&((ke&2)===0&&(Ns|=o),Xe===4&&Yn(t,ct)),Et(t,l),o===1&&ke===0&&(n.mode&1)===0&&(Kr=He()+500,hs&&Zn()))}function Et(t,n){var o=t.callbackNode;N0(t,n);var l=Qi(t,t===ot?ct:0);if(l===0)o!==null&&_d(o),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(o!=null&&_d(o),n===1)t.tag===0?O1(Fp.bind(null,t)):zf(Fp.bind(null,t)),T1(function(){(ke&6)===0&&Zn()}),o=null;else{switch(Id(l)){case 1:o=sl;break;case 4:o=Ed;break;case 16:o=Vi;break;case 536870912:o=Pd;break;default:o=Vi}o=Jp(o,Bp.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function Bp(t,n){if(Bs=-1,Fs=0,(ke&6)!==0)throw Error(i(327));var o=t.callbackNode;if(Xr()&&t.callbackNode!==o)return null;var l=Qi(t,t===ot?ct:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=Us(t,l);else{n=l;var u=ke;ke|=2;var p=Wp();(ot!==t||ct!==n)&&(Pn=null,Kr=He()+500,xr(t,n));do try{nx();break}catch(w){Up(t,w)}while(!0);ql(),Os.current=p,ke=u,Je!==null?n=0:(ot=null,ct=0,n=Xe)}if(n!==0){if(n===2&&(u=al(t),u!==0&&(l=u,n=_c(t,u))),n===1)throw o=si,xr(t,0),Yn(t,l),Et(t,He()),o;if(n===6)Yn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!ex(u)&&(n=Us(t,l),n===2&&(p=al(t),p!==0&&(l=p,n=_c(t,p))),n===1))throw o=si,xr(t,0),Yn(t,l),Et(t,He()),o;switch(t.finishedWork=u,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:yr(t,_t,Pn);break;case 3:if(Yn(t,l),(l&130023424)===l&&(n=$c+500-He(),10<n)){if(Qi(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){kt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Al(yr.bind(null,t,_t,Pn),n);break}yr(t,_t,Pn);break;case 4:if(Yn(t,l),(l&4194240)===l)break;for(n=t.eventTimes,u=-1;0<l;){var g=31-Kt(l);p=1<<g,g=n[g],g>u&&(u=g),l&=~p}if(l=u,l=He()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*X1(l/1960))-l,10<l){t.timeoutHandle=Al(yr.bind(null,t,_t,Pn),l);break}yr(t,_t,Pn);break;case 5:yr(t,_t,Pn);break;default:throw Error(i(329))}}}return Et(t,He()),t.callbackNode===o?Bp.bind(null,t):null}function _c(t,n){var o=ai;return t.current.memoizedState.isDehydrated&&(xr(t,n).flags|=256),t=Us(t,n),t!==2&&(n=_t,_t=o,n!==null&&Ec(n)),t}function Ec(t){_t===null?_t=t:_t.push.apply(_t,t)}function ex(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],p=u.getSnapshot;u=u.value;try{if(!Xt(p(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yn(t,n){for(n&=~jc,n&=~Ns,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-Kt(n),l=1<<o;t[o]=-1,n&=~l}}function Fp(t){if((ke&6)!==0)throw Error(i(327));Xr();var n=Qi(t,0);if((n&1)===0)return Et(t,He()),null;var o=Us(t,n);if(t.tag!==0&&o===2){var l=al(t);l!==0&&(n=l,o=_c(t,l))}if(o===1)throw o=si,xr(t,0),Yn(t,n),Et(t,He()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,yr(t,_t,Pn),Et(t,He()),null}function Pc(t,n){var o=ke;ke|=1;try{return t(n)}finally{ke=o,ke===0&&(Kr=He()+500,hs&&Zn())}}function gr(t){Jn!==null&&Jn.tag===0&&(ke&6)===0&&Xr();var n=ke;ke|=1;var o=Ft.transition,l=Ce;try{if(Ft.transition=null,Ce=1,t)return t()}finally{Ce=l,Ft.transition=o,ke=n,(ke&6)===0&&Zn()}}function Tc(){Nt=Yr.current,Oe(Yr)}function xr(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,P1(o)),Je!==null)for(o=Je.return;o!==null;){var l=o;switch(Bl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ps();break;case 3:Gr(),Oe($t),Oe(ht),Xl();break;case 5:Yl(l);break;case 4:Gr();break;case 13:Oe(Be);break;case 19:Oe(Be);break;case 10:Vl(l.type._context);break;case 22:case 23:Tc()}o=o.return}if(ot=t,Je=t=Kn(t.current,null),ct=Nt=n,Xe=0,si=null,jc=Ns=hr=0,_t=ai=null,fr!==null){for(n=0;n<fr.length;n++)if(o=fr[n],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,p=o.pending;if(p!==null){var g=p.next;p.next=u,l.next=g}o.pending=l}fr=null}return t}function Up(t,n){do{var o=Je;try{if(ql(),$s.current=Es,zs){for(var l=Fe.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}zs=!1}if(mr=0,rt=Ke=Fe=null,ei=!1,ti=0,Sc.current=null,o===null||o.return===null){Xe=1,si=n,Je=null;break}e:{var p=t,g=o.return,w=o,k=n;if(n=ct,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var T=k,B=w,F=B.tag;if((B.mode&1)===0&&(F===0||F===11||F===15)){var D=B.alternate;D?(B.updateQueue=D.updateQueue,B.memoizedState=D.memoizedState,B.lanes=D.lanes):(B.updateQueue=null,B.memoizedState=null)}var J=pp(g);if(J!==null){J.flags&=-257,mp(J,g,w,p,n),J.mode&1&&fp(p,T,n),n=J,k=T;var K=n.updateQueue;if(K===null){var ee=new Set;ee.add(k),n.updateQueue=ee}else K.add(k);break e}else{if((n&1)===0){fp(p,T,n),Ic();break e}k=Error(i(426))}}else if(Me&&w.mode&1){var Ge=pp(g);if(Ge!==null){(Ge.flags&65536)===0&&(Ge.flags|=256),mp(Ge,g,w,p,n),Wl(Jr(k,w));break e}}p=k=Jr(k,w),Xe!==4&&(Xe=2),ai===null?ai=[p]:ai.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var C=up(p,k,n);Lf(p,C);break e;case 1:w=k;var j=p.type,E=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Gn===null||!Gn.has(E)))){p.flags|=65536,n&=-n,p.lanes|=n;var U=dp(p,w,n);Lf(p,U);break e}}p=p.return}while(p!==null)}qp(o)}catch(ne){n=ne,Je===o&&o!==null&&(Je=o=o.return);continue}break}while(!0)}function Wp(){var t=Os.current;return Os.current=Es,t===null?Es:t}function Ic(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),ot===null||(hr&268435455)===0&&(Ns&268435455)===0||Yn(ot,ct)}function Us(t,n){var o=ke;ke|=2;var l=Wp();(ot!==t||ct!==n)&&(Pn=null,xr(t,n));do try{tx();break}catch(u){Up(t,u)}while(!0);if(ql(),ke=o,Os.current=l,Je!==null)throw Error(i(261));return ot=null,ct=0,Xe}function tx(){for(;Je!==null;)Zp(Je)}function nx(){for(;Je!==null&&!C0();)Zp(Je)}function Zp(t){var n=Gp(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,n===null?qp(t):Je=n,Sc.current=null}function qp(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=G1(o,n,Nt),o!==null){Je=o;return}}else{if(o=J1(o,n),o!==null){o.flags&=32767,Je=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Je=null;return}}if(n=n.sibling,n!==null){Je=n;return}Je=n=t}while(n!==null);Xe===0&&(Xe=5)}function yr(t,n,o){var l=Ce,u=Ft.transition;try{Ft.transition=null,Ce=1,rx(t,n,o,l)}finally{Ft.transition=u,Ce=l}return null}function rx(t,n,o,l){do Xr();while(Jn!==null);if((ke&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(L0(t,p),t===ot&&(Je=ot=null,ct=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ms||(Ms=!0,Jp(Vi,function(){return Xr(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Ft.transition,Ft.transition=null;var g=Ce;Ce=1;var w=ke;ke|=4,Sc.current=null,Y1(t,o),Op(o,t),S1(Il),Xi=!!Tl,Il=Tl=null,t.current=o,K1(o),_0(),ke=w,Ce=g,Ft.transition=p}else t.current=o;if(Ms&&(Ms=!1,Jn=t,Ds=u),p=t.pendingLanes,p===0&&(Gn=null),T0(o.stateNode),Et(t,He()),n!==null)for(l=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ls)throw Ls=!1,t=zc,zc=null,t;return(Ds&1)!==0&&t.tag!==0&&Xr(),p=t.pendingLanes,(p&1)!==0?t===Cc?li++:(li=0,Cc=t):li=0,Zn(),null}function Xr(){if(Jn!==null){var t=Id(Ds),n=Ft.transition,o=Ce;try{if(Ft.transition=null,Ce=16>t?16:t,Jn===null)var l=!1;else{if(t=Jn,Jn=null,Ds=0,(ke&6)!==0)throw Error(i(331));var u=ke;for(ke|=4,Y=t.current;Y!==null;){var p=Y,g=p.child;if((Y.flags&16)!==0){var w=p.deletions;if(w!==null){for(var k=0;k<w.length;k++){var T=w[k];for(Y=T;Y!==null;){var B=Y;switch(B.tag){case 0:case 11:case 15:ii(8,B,p)}var F=B.child;if(F!==null)F.return=B,Y=F;else for(;Y!==null;){B=Y;var D=B.sibling,J=B.return;if(Pp(B),B===T){Y=null;break}if(D!==null){D.return=J,Y=D;break}Y=J}}}var K=p.alternate;if(K!==null){var ee=K.child;if(ee!==null){K.child=null;do{var Ge=ee.sibling;ee.sibling=null,ee=Ge}while(ee!==null)}}Y=p}}if((p.subtreeFlags&2064)!==0&&g!==null)g.return=p,Y=g;else e:for(;Y!==null;){if(p=Y,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ii(9,p,p.return)}var C=p.sibling;if(C!==null){C.return=p.return,Y=C;break e}Y=p.return}}var j=t.current;for(Y=j;Y!==null;){g=Y;var E=g.child;if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Y=E;else e:for(g=j;Y!==null;){if(w=Y,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:As(9,w)}}catch(ne){qe(w,w.return,ne)}if(w===g){Y=null;break e}var U=w.sibling;if(U!==null){U.return=w.return,Y=U;break e}Y=w.return}}if(ke=u,Zn(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Hi,t)}catch{}l=!0}return l}finally{Ce=o,Ft.transition=n}}return!1}function Vp(t,n,o){n=Jr(o,n),n=up(t,n,1),t=Vn(t,n,1),n=kt(),t!==null&&(Io(t,1,n),Et(t,n))}function qe(t,n,o){if(t.tag===3)Vp(t,t,o);else for(;n!==null;){if(n.tag===3){Vp(n,t,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Gn===null||!Gn.has(l))){t=Jr(o,t),t=dp(n,t,1),n=Vn(n,t,1),t=kt(),n!==null&&(Io(n,1,t),Et(n,t));break}}n=n.return}}function ox(t,n,o){var l=t.pingCache;l!==null&&l.delete(n),n=kt(),t.pingedLanes|=t.suspendedLanes&o,ot===t&&(ct&o)===o&&(Xe===4||Xe===3&&(ct&130023424)===ct&&500>He()-$c?xr(t,0):jc|=o),Et(t,n)}function Hp(t,n){n===0&&((t.mode&1)===0?n=1:(n=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var o=kt();t=Cn(t,n),t!==null&&(Io(t,n,o),Et(t,o))}function ix(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),Hp(t,o)}function sx(t,n){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),Hp(t,o)}var Gp;Gp=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||$t.current)Ct=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return Ct=!1,H1(t,n,o);Ct=(t.flags&131072)!==0}else Ct=!1,Me&&(n.flags&1048576)!==0&&Cf(n,xs,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Is(t,n),t=n.pendingProps;var u=Fr(n,ht.current);Hr(n,o),u=nc(null,n,l,t,u,o);var p=rc();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,zt(l)?(p=!0,ms(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Jl(n),u.updater=Ps,n.stateNode=u,u._reactInternals=n,cc(n,l,t,o),n=pc(null,n,l,!0,p,o)):(n.tag=0,Me&&p&&Dl(n),bt(null,n,u,o),n=n.child),n;case 16:l=n.elementType;e:{switch(Is(t,n),t=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=lx(l),t=tn(l,t),u){case 0:n=fc(null,n,l,t,o);break e;case 1:n=wp(null,n,l,t,o);break e;case 11:n=hp(null,n,l,t,o);break e;case 14:n=gp(null,n,l,tn(l.type,t),o);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:tn(l,u),fc(t,n,l,u,o);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:tn(l,u),wp(t,n,l,u,o);case 3:e:{if(bp(n),t===null)throw Error(i(387));l=n.pendingProps,p=n.memoizedState,u=p.element,Nf(t,n),Ss(n,l,null,o);var g=n.memoizedState;if(l=g.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=Jr(Error(i(423)),n),n=kp(t,n,l,o,u);break e}else if(l!==u){u=Jr(Error(i(424)),n),n=kp(t,n,l,o,u);break e}else for(Ot=Fn(n.stateNode.containerInfo.firstChild),At=n,Me=!0,en=null,o=Af(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Zr(),l===u){n=En(t,n,o);break e}bt(t,n,l,o)}n=n.child}return n;case 5:return Df(n),t===null&&Ul(n),l=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,g=u.children,Rl(l,u)?g=null:p!==null&&Rl(l,p)&&(n.flags|=32),vp(t,n),bt(t,n,g,o),n.child;case 6:return t===null&&Ul(n),null;case 13:return Sp(t,n,o);case 4:return Ql(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=qr(n,null,l,o):bt(t,n,l,o),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:tn(l,u),hp(t,n,l,u,o);case 7:return bt(t,n,n.pendingProps,o),n.child;case 8:return bt(t,n,n.pendingProps.children,o),n.child;case 12:return bt(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,p=n.memoizedProps,g=u.value,Ie(ws,l._currentValue),l._currentValue=g,p!==null)if(Xt(p.value,g)){if(p.children===u.children&&!$t.current){n=En(t,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var k=w.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=_n(-1,o&-o),k.tag=2;var T=p.updateQueue;if(T!==null){T=T.shared;var B=T.pending;B===null?k.next=k:(k.next=B.next,B.next=k),T.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Hl(p.return,o,n),w.lanes|=o;break}k=k.next}}else if(p.tag===10)g=p.type===n.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(i(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Hl(g,o,n),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===n){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}bt(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Hr(n,o),u=Dt(u),l=l(u),n.flags|=1,bt(t,n,l,o),n.child;case 14:return l=n.type,u=tn(l,n.pendingProps),u=tn(l.type,u),gp(t,n,l,u,o);case 15:return xp(t,n,n.type,n.pendingProps,o);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:tn(l,u),Is(t,n),n.tag=1,zt(l)?(t=!0,ms(n)):t=!1,Hr(n,o),lp(n,l,u),cc(n,l,u,o),pc(null,n,l,!0,t,o);case 19:return $p(t,n,o);case 22:return yp(t,n,o)}throw Error(i(156,n.tag))};function Jp(t,n){return Cd(t,n)}function ax(t,n,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,n,o,l){return new ax(t,n,o,l)}function Rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lx(t){if(typeof t=="function")return Rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pe)return 11;if(t===$e)return 14}return 2}function Kn(t,n){var o=t.alternate;return o===null?(o=Ut(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ws(t,n,o,l,u,p){var g=2;if(l=t,typeof t=="function")Rc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case W:return vr(o.children,u,p,n);case X:g=8,u|=8;break;case te:return t=Ut(12,o,n,u|2),t.elementType=te,t.lanes=p,t;case xe:return t=Ut(13,o,n,u),t.elementType=xe,t.lanes=p,t;case _e:return t=Ut(19,o,n,u),t.elementType=_e,t.lanes=p,t;case Te:return Zs(o,u,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:g=10;break e;case me:g=9;break e;case Pe:g=11;break e;case $e:g=14;break e;case Ve:g=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=Ut(g,o,n,u),n.elementType=t,n.type=l,n.lanes=p,n}function vr(t,n,o,l){return t=Ut(7,t,l,n),t.lanes=o,t}function Zs(t,n,o,l){return t=Ut(22,t,l,n),t.elementType=Te,t.lanes=o,t.stateNode={isHidden:!1},t}function Ac(t,n,o){return t=Ut(6,t,null,n),t.lanes=o,t}function Oc(t,n,o){return n=Ut(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function cx(t,n,o,l,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Nc(t,n,o,l,u,p,g,w,k){return t=new cx(t,n,o,w,k),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Ut(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(p),t}function ux(t,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:l==null?null:""+l,children:t,containerInfo:n,implementation:o}}function Qp(t){if(!t)return Wn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(zt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(zt(o))return jf(t,o,n)}return n}function Yp(t,n,o,l,u,p,g,w,k){return t=Nc(o,l,!0,t,u,p,g,w,k),t.context=Qp(null),o=t.current,l=kt(),u=Qn(o),p=_n(l,u),p.callback=n??null,Vn(o,p,u),t.current.lanes=u,Io(t,u,l),Et(t,l),t}function qs(t,n,o,l){var u=n.current,p=kt(),g=Qn(u);return o=Qp(o),n.context===null?n.context=o:n.pendingContext=o,n=_n(p,g),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Vn(u,n,g),t!==null&&(on(t,u,g,p),ks(t,u,g)),g}function Vs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function Lc(t,n){Kp(t,n),(t=t.alternate)&&Kp(t,n)}function dx(){return null}var Xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mc(t){this._internalRoot=t}Hs.prototype.render=Mc.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));qs(t,n,null,null)},Hs.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;gr(function(){qs(null,t,null,null)}),n[Sn]=null}};function Hs(t){this._internalRoot=t}Hs.prototype.unstable_scheduleHydration=function(t){if(t){var n=Od();t={blockedOn:null,target:t,priority:n};for(var o=0;o<Mn.length&&n!==0&&n<Mn[o].priority;o++);Mn.splice(o,0,t),o===0&&Md(t)}};function Dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function em(){}function fx(t,n,o,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var T=Vs(g);p.call(T)}}var g=Yp(n,l,t,0,null,!1,!1,"",em);return t._reactRootContainer=g,t[Sn]=g.current,Vo(t.nodeType===8?t.parentNode:t),gr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var w=l;l=function(){var T=Vs(k);w.call(T)}}var k=Nc(t,0,!1,null,null,!1,!1,"",em);return t._reactRootContainer=k,t[Sn]=k.current,Vo(t.nodeType===8?t.parentNode:t),gr(function(){qs(n,k,o,l)}),k}function Js(t,n,o,l,u){var p=o._reactRootContainer;if(p){var g=p;if(typeof u=="function"){var w=u;u=function(){var k=Vs(g);w.call(k)}}qs(n,g,t,u)}else g=fx(o,n,t,u,l);return Vs(g)}Rd=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=To(n.pendingLanes);o!==0&&(cl(n,o|1),Et(n,He()),(ke&6)===0&&(Kr=He()+500,Zn()))}break;case 13:gr(function(){var l=Cn(t,1);if(l!==null){var u=kt();on(l,t,1,u)}}),Lc(t,1)}},ul=function(t){if(t.tag===13){var n=Cn(t,134217728);if(n!==null){var o=kt();on(n,t,134217728,o)}Lc(t,134217728)}},Ad=function(t){if(t.tag===13){var n=Qn(t),o=Cn(t,n);if(o!==null){var l=kt();on(o,t,n,l)}Lc(t,n)}},Od=function(){return Ce},Nd=function(t,n){var o=Ce;try{return Ce=t,n()}finally{Ce=o}},nl=function(t,n,o){switch(n){case"input":if(Ga(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==t&&l.form===t.form){var u=fs(l);if(!u)throw Error(i(90));sd(l),Ga(l,u)}}}break;case"textarea":dd(t,o);break;case"select":n=o.value,n!=null&&Er(t,!!o.multiple,n,!1)}},wd=Pc,bd=gr;var px={usingClientEntryPoint:!1,Events:[Jo,Dr,fs,yd,vd,Pc]},ci={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mx={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$d(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{Hi=Qs.inject(mx),fn=Qs}catch{}}return Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px,Pt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(n))throw Error(i(200));return ux(t,n,null,o)},Pt.createRoot=function(t,n){if(!Dc(t))throw Error(i(299));var o=!1,l="",u=Xp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Nc(t,1,!1,null,null,o,!1,l,u),t[Sn]=n.current,Vo(t.nodeType===8?t.parentNode:t),new Mc(n)},Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=$d(n),t=t===null?null:t.stateNode,t},Pt.flushSync=function(t){return gr(t)},Pt.hydrate=function(t,n,o){if(!Gs(n))throw Error(i(200));return Js(null,t,n,!0,o)},Pt.hydrateRoot=function(t,n,o){if(!Dc(t))throw Error(i(405));var l=o!=null&&o.hydratedSources||null,u=!1,p="",g=Xp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=Yp(n,null,t,1,o??null,u,!1,p,g),t[Sn]=n.current,Vo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Hs(n)},Pt.render=function(t,n,o){if(!Gs(n))throw Error(i(200));return Js(null,t,n,!1,o)},Pt.unmountComponentAtNode=function(t){if(!Gs(t))throw Error(i(40));return t._reactRootContainer?(gr(function(){Js(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1},Pt.unstable_batchedUpdates=Pc,Pt.unstable_renderSubtreeIntoContainer=function(t,n,o,l){if(!Gs(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Js(t,n,o,!1,l)},Pt.version="18.3.1-next-f1338f8080-20240426",Pt}var lm;function Sx(){if(lm)return Uc.exports;lm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Uc.exports=kx(),Uc.exports}var cm;function jx(){if(cm)return Ys;cm=1;var e=Sx();return Ys.createRoot=e.createRoot,Ys.hydrateRoot=e.hydrateRoot,Ys}var $x=jx();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ph=/^[\\/]{2}/;function zx(e,r){return r+e.replace(/\\/g,"/")}var um="popstate";function dm(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Cx(e={}){function r(a,c){var y;let d=(y=c.state)==null?void 0:y.masked,{pathname:f,search:m,hash:h}=d||a.location;return hu("",{pathname:f,search:m,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default",d?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function i(a,c){return typeof c=="string"?c:Si(c)}return Ex(r,i,null,e)}function Ue(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function bn(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function _x(){return Math.random().toString(36).substring(2,10)}function fm(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function hu(e,r,i=null,a,c){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?wo(r):r,state:i,key:r&&r.key||a||_x(),mask:c}}function Si({pathname:e="/",search:r="",hash:i=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function wo(e){let r={};if(e){let i=e.indexOf("#");i>=0&&(r.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(r.search=e.substring(a),e=e.substring(0,a)),e&&(r.pathname=e)}return r}function Ex(e,r,i,a={}){let{window:c=document.defaultView,v5Compat:d=!1}=a,f=c.history,m="POP",h=null,y=v();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function v(){return(f.state||{idx:null}).idx}function b(){m="POP";let A=v(),N=A==null?null:A-y;y=A,h&&h({action:m,location:$.location,delta:N})}function S(A,N){m="PUSH";let R=dm(A)?A:hu($.location,A,N);y=v()+1;let H=fm(R,y),G=$.createHref(R.mask||R);try{f.pushState(H,"",G)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;c.location.assign(G)}d&&h&&h({action:m,location:$.location,delta:1})}function P(A,N){m="REPLACE";let R=dm(A)?A:hu($.location,A,N);y=v();let H=fm(R,y),G=$.createHref(R.mask||R);f.replaceState(H,"",G),d&&h&&h({action:m,location:$.location,delta:0})}function O(A){return Px(c,A)}let $={get action(){return m},get location(){return e(c,f)},listen(A){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(um,b),h=A,()=>{c.removeEventListener(um,b),h=null}},createHref(A){return r(c,A)},createURL:O,encodeLocation(A){let N=O(A);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:S,replace:P,go(A){return f.go(A)}};return $}function Px(e,r,i=!1){let a="http://localhost";e&&(a=e.location.origin!=="null"?e.location.origin:e.location.href),Ue(a,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Si(r);return c=c.replace(/ $/,"%20"),!i&&Ph.test(c)&&(c=a+c),new URL(c,a)}function Th(e,r,i="/"){return Tx(e,r,i,!1)}function Tx(e,r,i,a,c){let d=typeof r=="string"?wo(r):r,f=In(d.pathname||"/",i);if(f==null)return null;let m=Ix(e),h=null,y=Wx(f);for(let v=0;h==null&&v<m.length;++v)h=Ux(m[v],y,a);return h}function Ix(e){let r=Ih(e);return Rx(r),r}function Ih(e,r=[],i=[],a="",c=!1){let d=(f,m,h=c,y)=>{let v={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&h)return;Ue(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let b=cn([a,v.relativePath]),S=i.concat(v);f.children&&f.children.length>0&&(Ue(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Ih(f.children,r,S,b,h)),!(f.path==null&&!f.index)&&r.push({path:b,score:Bx(b,f.index),routesMeta:S.map((P,O)=>{let[$,A]=Oh(P.relativePath,P.caseSensitive,O===S.length-1);return{...P,matcher:$,compiledParams:A}})})};return e.forEach((f,m)=>{var h;if(f.path===""||!((h=f.path)!=null&&h.includes("?")))d(f,m);else for(let y of Rh(f.path))d(f,m,!0,y)}),r}function Rh(e){let r=e.split("/");if(r.length===0)return[];let[i,...a]=r,c=i.endsWith("?"),d=i.replace(/\?$/,"");if(a.length===0)return c?[d,""]:[d];let f=Rh(a.join("/")),m=[];return m.push(...f.map(h=>h===""?d:[d,h].join("/"))),c&&m.push(...f),m.map(h=>e.startsWith("/")&&h===""?"/":h)}function Rx(e){e.sort((r,i)=>r.score!==i.score?i.score-r.score:Fx(r.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Ax=/^:[\w-]+$/,Ox=3,Nx=2,Lx=1,Mx=10,Dx=-2,pm=e=>e==="*";function Bx(e,r){let i=e.split("/"),a=i.length;return i.some(pm)&&(a+=Dx),r&&(a+=Nx),i.filter(c=>!pm(c)).reduce((c,d)=>c+(Ax.test(d)?Ox:d===""?Lx:Mx),a)}function Fx(e,r){return e.length===r.length&&e.slice(0,-1).every((a,c)=>a===r[c])?e[e.length-1]-r[r.length-1]:0}function Ux(e,r,i=!1){let{routesMeta:a}=e,c={},d="/",f=[];for(let m=0;m<a.length;++m){let h=a[m],y=m===a.length-1,v=d==="/"?r:r.slice(d.length)||"/",b={path:h.relativePath,caseSensitive:h.caseSensitive,end:y},S=h.matcher&&h.compiledParams?Ah(b,v,h.matcher,h.compiledParams):ya(b,v),P=h.route;if(!S&&y&&i&&!a[a.length-1].route.index&&(S=ya({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!S)return null;Object.assign(c,S.params),f.push({params:c,pathname:cn([d,S.pathname]),pathnameBase:Vx(cn([d,S.pathnameBase])),route:P}),S.pathnameBase!=="/"&&(d=cn([d,S.pathnameBase]))}return f}function ya(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=Oh(e.path,e.caseSensitive,e.end);return Ah(e,r,i,a)}function Ah(e,r,i,a){let c=r.match(i);if(!c)return null;let d=c[0],f=d.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:a.reduce((y,{paramName:v,isOptional:b},S)=>{if(v==="*"){let O=m[S]||"";f=d.slice(0,d.length-O.length).replace(/(.)\/+$/,"$1")}const P=m[S];return b&&!P?y[v]=void 0:y[v]=(P||"").replace(/%2F/g,"/"),y},{}),pathname:d,pathnameBase:f,pattern:e}}function Oh(e,r=!1,i=!0){bn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h,y,v)=>{if(a.push({paramName:m,isOptional:h!=null}),h){let b=v.charAt(y+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),a]}function Wx(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return bn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function In(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function Zx(e,r="/"){let{pathname:i,search:a="",hash:c=""}=typeof e=="string"?wo(e):e,d;return i?(i=Lh(i),i.startsWith("/")?d=mm(i.substring(1),"/"):d=mm(i,r)):d=r,{pathname:d,search:Hx(a),hash:Gx(c)}}function mm(e,r){let i=va(r).split("/");return e.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function qc(e,r,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qx(e){return e.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Nh(e){let r=qx(e);return r.map((i,a)=>a===r.length-1?i.pathname:i.pathnameBase)}function Tu(e,r,i,a=!1){let c;typeof e=="string"?c=wo(e):(c={...e},Ue(!c.pathname||!c.pathname.includes("?"),qc("?","pathname","search",c)),Ue(!c.pathname||!c.pathname.includes("#"),qc("#","pathname","hash",c)),Ue(!c.search||!c.search.includes("#"),qc("#","search","hash",c)));let d=e===""||c.pathname==="",f=d?"/":c.pathname,m;if(f==null)m=i;else{let b=r.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;c.pathname=S.join("/")}m=b>=0?r[b]:"/"}let h=Zx(c,m),y=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(y||v)&&(h.pathname+="/"),h}var Lh=e=>e.replace(/[\\/]{2,}/g,"/"),cn=e=>Lh(e.join("/")),va=e=>e.replace(/\/+$/,""),Vx=e=>va(e).replace(/^\/*/,"/"),Hx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Jx=class{constructor(e,r,i,a=!1){this.status=e,this.statusText=r||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Qx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Yx(e){let r=e.map(i=>i.route.path).filter(Boolean);return cn(r)||"/"}var Mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dh(e,r){let i=e;if(typeof i!="string"||!Pu.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,c=!1;if(Mh)try{let d=new URL(window.location.href),f=Ph.test(i)?new URL(zx(i,d.protocol)):new URL(i),m=In(f.pathname,r);f.origin===d.origin&&m!=null?i=m+f.search+f.hash:c=!0}catch{bn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:c,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Bh=["POST","PUT","PATCH","DELETE"];new Set(Bh);var Kx=["GET",...Bh];new Set(Kx);var Xx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ey(e){try{return Xx.includes(new URL(e).protocol)}catch{return!1}}var bo=_.createContext(null);bo.displayName="DataRouter";var Ea=_.createContext(null);Ea.displayName="DataRouterState";var Fh=_.createContext(!1);function ty(){return _.useContext(Fh)}var Uh=_.createContext({isTransitioning:!1});Uh.displayName="ViewTransition";var ny=_.createContext(new Map);ny.displayName="Fetchers";var ry=_.createContext(null);ry.displayName="Await";var Qt=_.createContext(null);Qt.displayName="Navigation";var Pi=_.createContext(null);Pi.displayName="Location";var Rn=_.createContext({outlet:null,matches:[],isDataRoute:!1});Rn.displayName="Route";var Iu=_.createContext(null);Iu.displayName="RouteError";var Wh="REACT_ROUTER_ERROR",oy="REDIRECT",iy="ROUTE_ERROR_RESPONSE";function sy(e){if(e.startsWith(`${Wh}:${oy}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function ay(e){if(e.startsWith(`${Wh}:${iy}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Jx(r.status,r.statusText,r.data)}catch{}}function ly(e,{relative:r}={}){Ue(Ti(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=_.useContext(Qt),{hash:c,pathname:d,search:f}=Ii(e,{relative:r}),m=d;return i!=="/"&&(m=d==="/"?i:cn([i,d])),a.createHref({pathname:m,search:f,hash:c})}function Ti(){return _.useContext(Pi)!=null}function dn(){return Ue(Ti(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Pi).location}var Zh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qh(e){_.useContext(Qt).static||_.useLayoutEffect(e)}function cy(){let{isDataRoute:e}=_.useContext(Rn);return e?ky():uy()}function uy(){Ue(Ti(),"useNavigate() may be used only in the context of a <Router> component.");let e=_.useContext(bo),{basename:r,navigator:i}=_.useContext(Qt),{matches:a}=_.useContext(Rn),{pathname:c}=dn(),d=JSON.stringify(Nh(a)),f=_.useRef(!1);return qh(()=>{f.current=!0}),_.useCallback((h,y={})=>{if(bn(f.current,Zh),!f.current)return;if(typeof h=="number"){i.go(h);return}let v=Tu(h,JSON.parse(d),c,y.relative==="path");e==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:cn([r,v.pathname])),(y.replace?i.replace:i.push)(v,y.state,y)},[r,i,d,c,e])}_.createContext(null);function Ii(e,{relative:r}={}){let{matches:i}=_.useContext(Rn),{pathname:a}=dn(),c=JSON.stringify(Nh(i));return _.useMemo(()=>Tu(e,JSON.parse(c),a,r==="path"),[e,c,a,r])}function dy(e,r){return Vh(e,r)}function Vh(e,r,i){var A;Ue(Ti(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=_.useContext(Qt),{matches:c}=_.useContext(Rn),d=c[c.length-1],f=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",y=d&&d.route;{let N=y&&y.path||"";Gh(m,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let v=dn(),b;if(r){let N=typeof r=="string"?wo(r):r;Ue(h==="/"||((A=N.pathname)==null?void 0:A.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${N.pathname}" was given in the \`location\` prop.`),b=N}else b=v;let S=b.pathname||"/",P=S;if(h!=="/"){let N=h.replace(/^\//,"").split("/");P="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let O=i&&i.state.matches.length?i.state.matches.map(N=>Object.assign(N,{route:i.manifest[N.route.id]||N.route})):Th(e,{pathname:P});bn(y||O!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),bn(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=gy(O&&O.map(N=>Object.assign({},N,{params:Object.assign({},f,N.params),pathname:cn([h,a.encodeLocation?a.encodeLocation(N.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?h:cn([h,a.encodeLocation?a.encodeLocation(N.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),c,i);return r&&$?_.createElement(Pi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},$):$}function fy(){let e=by(),r=Qx(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:a},d={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:d},"ErrorBoundary")," or"," ",_.createElement("code",{style:d},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},r),i?_.createElement("pre",{style:c},i):null,f)}var py=_.createElement(fy,null),Hh=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=ay(e.digest);i&&(e=i)}let r=e!==void 0?_.createElement(Rn.Provider,{value:this.props.routeContext},_.createElement(Iu.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?_.createElement(my,{error:e},r):r}};Hh.contextType=Fh;var Vc=new WeakMap;function my({children:e,error:r}){let{basename:i}=_.useContext(Qt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let a=sy(r.digest);if(a){let c=Vc.get(r);if(c)throw c;let d=Dh(a.location,i),f=d.absoluteURL||d.to;if(ey(f))throw new Error("Invalid redirect location");if(Mh&&!Vc.get(r))if(d.isExternal||a.reloadDocument)window.location.href=f;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:a.replace}));throw Vc.set(r,m),m}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return e}function hy({routeContext:e,match:r,children:i}){let a=_.useContext(bo);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),_.createElement(Rn.Provider,{value:e},i)}function gy(e,r=[],i){let a=i==null?void 0:i.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(r.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let c=e,d=a==null?void 0:a.errors;if(d!=null){let v=c.findIndex(b=>b.route.id&&(d==null?void 0:d[b.route.id])!==void 0);Ue(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let f=!1,m=-1;if(i&&a){f=a.renderFallback;for(let v=0;v<c.length;v++){let b=c[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=v),b.route.id){let{loaderData:S,errors:P}=a,O=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!P||P[b.route.id]===void 0);if(b.route.lazy||O){i.isStatic&&(f=!0),m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}}let h=i==null?void 0:i.onError,y=a&&h?(v,b)=>{var S,P;h(v,{location:a.location,params:((P=(S=a.matches)==null?void 0:S[0])==null?void 0:P.params)??{},pattern:Yx(a.matches),errorInfo:b})}:void 0;return c.reduceRight((v,b,S)=>{let P,O=!1,$=null,A=null;a&&(P=d&&b.route.id?d[b.route.id]:void 0,$=b.route.errorElement||py,f&&(m<0&&S===0?(Gh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,A=null):m===S&&(O=!0,A=b.route.hydrateFallbackElement||null)));let N=r.concat(c.slice(0,S+1)),R=()=>{let H;return P?H=$:O?H=A:b.route.Component?H=_.createElement(b.route.Component,null):b.route.element?H=b.route.element:H=v,_.createElement(hy,{match:b,routeContext:{outlet:v,matches:N,isDataRoute:a!=null},children:H})};return a&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?_.createElement(Hh,{location:a.location,revalidation:a.revalidation,component:$,error:P,children:R(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:y}):R()},null)}function Ru(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xy(e){let r=_.useContext(bo);return Ue(r,Ru(e)),r}function yy(e){let r=_.useContext(Ea);return Ue(r,Ru(e)),r}function vy(e){let r=_.useContext(Rn);return Ue(r,Ru(e)),r}function Au(e){let r=vy(e),i=r.matches[r.matches.length-1];return Ue(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function wy(){return Au("useRouteId")}function by(){var a;let e=_.useContext(Iu),r=yy("useRouteError"),i=Au("useRouteError");return e!==void 0?e:(a=r.errors)==null?void 0:a[i]}function ky(){let{router:e}=xy("useNavigate"),r=Au("useNavigate"),i=_.useRef(!1);return qh(()=>{i.current=!0}),_.useCallback(async(c,d={})=>{bn(i.current,Zh),i.current&&(typeof c=="number"?await e.navigate(c):await e.navigate(c,{fromRouteId:r,...d}))},[e,r])}var hm={};function Gh(e,r,i){!r&&!hm[e]&&(hm[e]=!0,bn(!1,i))}_.memo(Sy);function Sy({routes:e,manifest:r,future:i,state:a,isStatic:c,onError:d}){return Vh(e,void 0,{manifest:r,state:a,isStatic:c,onError:d})}function br(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jy({basename:e="/",children:r=null,location:i,navigationType:a="POP",navigator:c,static:d=!1,useTransitions:f}){Ue(!Ti(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=e.replace(/^\/*/,"/"),h=_.useMemo(()=>({basename:m,navigator:c,static:d,useTransitions:f,future:{}}),[m,c,d,f]);typeof i=="string"&&(i=wo(i));let{pathname:y="/",search:v="",hash:b="",state:S=null,key:P="default",mask:O}=i,$=_.useMemo(()=>{let A=In(y,m);return A==null?null:{location:{pathname:A,search:v,hash:b,state:S,key:P,mask:O},navigationType:a}},[m,y,v,b,S,P,a,O]);return bn($!=null,`<Router basename="${m}"> is not able to match the URL "${y}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:_.createElement(Qt.Provider,{value:h},_.createElement(Pi.Provider,{children:r,value:$}))}function $y({children:e,location:r}){return dy(gu(e),r)}function gu(e,r=[]){let i=[];return _.Children.forEach(e,(a,c)=>{if(!_.isValidElement(a))return;let d=[...r,c];if(a.type===_.Fragment){i.push.apply(i,gu(a.props.children,d));return}Ue(a.type===br,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||d.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=gu(a.props.children,d)),i.push(f)}),i}var la="get",ca="application/x-www-form-urlencoded";function Pa(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function zy(e){return Pa(e)&&e.tagName.toLowerCase()==="button"}function Cy(e){return Pa(e)&&e.tagName.toLowerCase()==="form"}function _y(e){return Pa(e)&&e.tagName.toLowerCase()==="input"}function Ey(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Py(e,r){return e.button===0&&(!r||r==="_self")&&!Ey(e)}var Ks=null;function Ty(){if(Ks===null)try{new FormData(document.createElement("form"),0),Ks=!1}catch{Ks=!0}return Ks}var Iy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hc(e){return e!=null&&!Iy.has(e)?(bn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ca}"`),null):e}function Ry(e,r){let i,a,c,d,f;if(Cy(e)){let m=e.getAttribute("action");a=m?In(m,r):null,i=e.getAttribute("method")||la,c=Hc(e.getAttribute("enctype"))||ca,d=new FormData(e)}else if(zy(e)||_y(e)&&(e.type==="submit"||e.type==="image")){let m=e.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||m.getAttribute("action");if(a=h?In(h,r):null,i=e.getAttribute("formmethod")||m.getAttribute("method")||la,c=Hc(e.getAttribute("formenctype"))||Hc(m.getAttribute("enctype"))||ca,d=new FormData(m,e),!Ty()){let{name:y,type:v,value:b}=e;if(v==="image"){let S=y?`${y}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else y&&d.append(y,b)}}else{if(Pa(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=la,a=null,c=ca,f=e}return d&&c==="text/plain"&&(f=d,d=void 0),{action:a,method:i.toLowerCase(),encType:c,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ou(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Jh(e,r,i,a){let c=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${a}`:c.pathname=`${c.pathname}.${a}`:c.pathname==="/"?c.pathname=`_root.${a}`:r&&In(c.pathname,r)==="/"?c.pathname=`${va(r)}/_root.${a}`:c.pathname=`${va(c.pathname)}.${a}`,c}async function Ay(e,r){if(e.id in r)return r[e.id];try{let i=await import(e.module);return r[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Oy(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ny(e,r,i){let a=await Promise.all(e.map(async c=>{let d=r.routes[c.route.id];if(d){let f=await Ay(d,i);return f.links?f.links():[]}return[]}));return By(a.flat(1).filter(Oy).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function gm(e,r,i,a,c,d){let f=(h,y)=>i[y]?h.route.id!==i[y].route.id:!0,m=(h,y)=>{var v;return i[y].pathname!==h.pathname||((v=i[y].route.path)==null?void 0:v.endsWith("*"))&&i[y].params["*"]!==h.params["*"]};return d==="assets"?r.filter((h,y)=>f(h,y)||m(h,y)):d==="data"?r.filter((h,y)=>{var b;let v=a.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(f(h,y)||m(h,y))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Ly(e,r,{includeHydrateFallback:i}={}){return My(e.map(a=>{let c=r.routes[a.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function My(e){return[...new Set(e)]}function Dy(e){let r={},i=Object.keys(e).sort();for(let a of i)r[a]=e[a];return r}function By(e,r){let i=new Set;return new Set(r),e.reduce((a,c)=>{let d=JSON.stringify(Dy(c));return i.has(d)||(i.add(d),a.push({key:d,link:c})),a},[])}function Nu(){let e=_.useContext(bo);return Ou(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Fy(){let e=_.useContext(Ea);return Ou(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Lu=_.createContext(void 0);Lu.displayName="FrameworkContext";function Ta(){let e=_.useContext(Lu);return Ou(e,"You must render this element inside a <HydratedRouter> element"),e}function Uy(e,r){let i=_.useContext(Lu),[a,c]=_.useState(!1),[d,f]=_.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:y,onMouseLeave:v,onTouchStart:b}=r,S=_.useRef(null);_.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let $=N=>{N.forEach(R=>{f(R.isIntersecting)})},A=new IntersectionObserver($,{threshold:.5});return S.current&&A.observe(S.current),()=>{A.disconnect()}}},[e]),_.useEffect(()=>{if(a){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[a]);let P=()=>{c(!0)},O=()=>{c(!1),f(!1)};return i?e!=="intent"?[d,S,{}]:[d,S,{onFocus:di(m,P),onBlur:di(h,O),onMouseEnter:di(y,P),onMouseLeave:di(v,O),onTouchStart:di(b,P)}]:[!1,S,{}]}function di(e,r){return i=>{e&&e(i),i.defaultPrevented||r(i)}}function Wy({page:e,...r}){let i=ty(),{nonce:a}=Ta(),{router:c}=Nu(),d=_.useMemo(()=>Th(c.routes,e,c.basename),[c.routes,e,c.basename]);return d?(r.nonce==null&&a&&(r={...r,nonce:a}),i?_.createElement(qy,{page:e,matches:d,...r}):_.createElement(Vy,{page:e,matches:d,...r})):null}function Zy(e){let{manifest:r,routeModules:i}=Ta(),[a,c]=_.useState([]);return _.useEffect(()=>{let d=!1;return Ny(e,r,i).then(f=>{d||c(f)}),()=>{d=!0}},[e,r,i]),a}function qy({page:e,matches:r,...i}){let a=dn(),{future:c}=Ta(),{basename:d}=Nu(),f=_.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let m=Jh(e,d,c.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,y=[];for(let v of r)typeof v.route.shouldRevalidate=="function"?h=!0:y.push(v.route.id);return h&&y.length>0&&m.searchParams.set("_routes",y.join(",")),[m.pathname+m.search]},[d,c.v8_trailingSlashAwareDataRequests,e,a,r]);return _.createElement(_.Fragment,null,f.map(m=>_.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...i})))}function Vy({page:e,matches:r,...i}){let a=dn(),{future:c,manifest:d,routeModules:f}=Ta(),{basename:m}=Nu(),{loaderData:h,matches:y}=Fy(),v=_.useMemo(()=>gm(e,r,y,d,a,"data"),[e,r,y,d,a]),b=_.useMemo(()=>gm(e,r,y,d,a,"assets"),[e,r,y,d,a]),S=_.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let $=new Set,A=!1;if(r.forEach(R=>{var G;let H=d.routes[R.route.id];!H||!H.hasLoader||(!v.some(Q=>Q.route.id===R.route.id)&&R.route.id in h&&((G=f[R.route.id])!=null&&G.shouldRevalidate)||H.hasClientLoader?A=!0:$.add(R.route.id))}),$.size===0)return[];let N=Jh(e,m,c.v8_trailingSlashAwareDataRequests,"data");return A&&$.size>0&&N.searchParams.set("_routes",r.filter(R=>$.has(R.route.id)).map(R=>R.route.id).join(",")),[N.pathname+N.search]},[m,c.v8_trailingSlashAwareDataRequests,h,a,d,v,r,e,f]),P=_.useMemo(()=>Ly(b,d),[b,d]),O=Zy(b);return _.createElement(_.Fragment,null,S.map($=>_.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...i})),P.map($=>_.createElement("link",{key:$,rel:"modulepreload",href:$,...i})),O.map(({key:$,link:A})=>_.createElement("link",{key:$,nonce:i.nonce,...A,crossOrigin:A.crossOrigin??i.crossOrigin})))}function Hy(...e){return r=>{e.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Gy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gy&&(window.__reactRouterVersion="7.18.1")}catch{}function Jy({basename:e,children:r,useTransitions:i,window:a}){let c=_.useRef();c.current==null&&(c.current=Cx({window:a,v5Compat:!0}));let d=c.current,[f,m]=_.useState({action:d.action,location:d.location}),h=_.useCallback(y=>{i===!1?m(y):_.startTransition(()=>m(y))},[i]);return _.useLayoutEffect(()=>d.listen(h),[d,h]),_.createElement(jy,{basename:e,children:r,location:f.location,navigationType:f.action,navigator:d,useTransitions:i})}var or=_.forwardRef(function({onClick:r,discover:i="render",prefetch:a="none",relative:c,reloadDocument:d,replace:f,mask:m,state:h,target:y,to:v,preventScrollReset:b,viewTransition:S,defaultShouldRevalidate:P,...O},$){let{basename:A,navigator:N,useTransitions:R}=_.useContext(Qt),H=typeof v=="string"&&Pu.test(v),G=Dh(v,A);v=G.to;let Q=ly(v,{relative:c}),V=dn(),W=null;if(m){let $e=Tu(m,[],V.mask?V.mask.pathname:"/",!0);A!=="/"&&($e.pathname=$e.pathname==="/"?A:cn([A,$e.pathname])),W=N.createHref($e)}let[X,te,I]=Uy(a,O),me=Ky(v,{replace:f,mask:m,state:h,target:y,preventScrollReset:b,relative:c,viewTransition:S,defaultShouldRevalidate:P,useTransitions:R});function Pe($e){r&&r($e),$e.defaultPrevented||me($e)}let xe=!(G.isExternal||d),_e=_.createElement("a",{...O,...I,href:(xe?W:void 0)||G.absoluteURL||Q,onClick:xe?Pe:r,ref:Hy($,te),target:y,"data-discover":!H&&i==="render"?"true":void 0});return X&&!H?_.createElement(_.Fragment,null,_e,_.createElement(Wy,{page:Q})):_e});or.displayName="Link";var Mu=_.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:a="",end:c=!1,style:d,to:f,viewTransition:m,children:h,...y},v){let b=Ii(f,{relative:y.relative}),S=dn(),P=_.useContext(Ea),{navigator:O,basename:$}=_.useContext(Qt),A=P!=null&&rv(b)&&m===!0,N=O.encodeLocation?O.encodeLocation(b).pathname:b.pathname,R=S.pathname,H=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;i||(R=R.toLowerCase(),H=H?H.toLowerCase():null,N=N.toLowerCase()),H&&$&&(H=In(H,$)||H);const G=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let Q=R===N||!c&&R.startsWith(N)&&R.charAt(G)==="/",V=H!=null&&(H===N||!c&&H.startsWith(N)&&H.charAt(N.length)==="/"),W={isActive:Q,isPending:V,isTransitioning:A},X=Q?r:void 0,te;typeof a=="function"?te=a(W):te=[a,Q?"active":null,V?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let I=typeof d=="function"?d(W):d;return _.createElement(or,{...y,"aria-current":X,className:te,ref:v,style:I,to:f,viewTransition:m},typeof h=="function"?h(W):h)});Mu.displayName="NavLink";var Qy=_.forwardRef(({discover:e="render",fetcherKey:r,navigate:i,reloadDocument:a,replace:c,state:d,method:f=la,action:m,onSubmit:h,relative:y,preventScrollReset:v,viewTransition:b,defaultShouldRevalidate:S,...P},O)=>{let{useTransitions:$}=_.useContext(Qt),A=tv(),N=nv(m,{relative:y}),R=f.toLowerCase()==="get"?"get":"post",H=typeof m=="string"&&Pu.test(m),G=Q=>{if(h&&h(Q),Q.defaultPrevented)return;Q.preventDefault();let V=Q.nativeEvent.submitter,W=(V==null?void 0:V.getAttribute("formmethod"))||f,X=()=>A(V||Q.currentTarget,{fetcherKey:r,method:W,navigate:i,replace:c,state:d,relative:y,preventScrollReset:v,viewTransition:b,defaultShouldRevalidate:S});$&&i!==!1?_.startTransition(()=>X()):X()};return _.createElement("form",{ref:O,method:R,action:N,onSubmit:a?h:G,...P,"data-discover":!H&&e==="render"?"true":void 0})});Qy.displayName="Form";function Yy(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qh(e){let r=_.useContext(bo);return Ue(r,Yy(e)),r}function Ky(e,{target:r,replace:i,mask:a,state:c,preventScrollReset:d,relative:f,viewTransition:m,defaultShouldRevalidate:h,useTransitions:y}={}){let v=cy(),b=dn(),S=Ii(e,{relative:f});return _.useCallback(P=>{if(Py(P,r)){P.preventDefault();let O=i!==void 0?i:Si(b)===Si(S),$=()=>v(e,{replace:O,mask:a,state:c,preventScrollReset:d,relative:f,viewTransition:m,defaultShouldRevalidate:h});y?_.startTransition(()=>$()):$()}},[b,v,S,i,a,c,r,e,d,f,m,h,y])}var Xy=0,ev=()=>`__${String(++Xy)}__`;function tv(){let{router:e}=Qh("useSubmit"),{basename:r}=_.useContext(Qt),i=wy(),a=e.fetch,c=e.navigate;return _.useCallback(async(d,f={})=>{let{action:m,method:h,encType:y,formData:v,body:b}=Ry(d,r);if(f.navigate===!1){let S=f.fetcherKey||ev();await a(S,i,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:b,formMethod:f.method||h,formEncType:f.encType||y,flushSync:f.flushSync})}else await c(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:b,formMethod:f.method||h,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,c,r,i])}function nv(e,{relative:r}={}){let{basename:i}=_.useContext(Qt),a=_.useContext(Rn);Ue(a,"useFormAction must be used inside a RouteContext");let[c]=a.matches.slice(-1),d={...Ii(e||".",{relative:r})},f=dn();if(e==null){d.search=f.search;let m=new URLSearchParams(d.search),h=m.getAll("index");if(h.some(v=>v==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let v=m.toString();d.search=v?`?${v}`:""}}return(!e||e===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:cn([i,d.pathname])),Si(d)}function rv(e,{relative:r}={}){let i=_.useContext(Uh);Ue(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Qh("useViewTransitionState"),c=Ii(e,{relative:r});if(!i.isTransitioning)return!1;let d=In(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=In(i.nextLocation.pathname,a)||i.nextLocation.pathname;return ya(c.pathname,f)!=null||ya(c.pathname,d)!=null}var Le="-ms-",wi="-moz-",je="-webkit-",Yh="comm",Ia="rule",Du="decl",ov="@import",iv="@namespace",Kh="@keyframes",sv="@layer",Xh=Math.abs,Bu=String.fromCharCode,xu=Object.assign;function av(e,r){return et(e,0)^45?(((r<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function eg(e){return e.trim()}function Tn(e,r){return(e=r.exec(e))?e[0]:e}function ge(e,r,i){return e.replace(r,i)}function ua(e,r,i){return e.indexOf(r,i)}function et(e,r){return e.charCodeAt(r)|0}function jr(e,r,i){return e.slice(r,i)}function ln(e){return e.length}function tg(e){return e.length}function gi(e,r){return r.push(e),e}function lv(e,r){return e.map(r).join("")}function xm(e,r){return e.filter(function(i){return!Tn(i,r)})}var Ra=1,mo=1,ng=0,Jt=0,Ye=0,ko="";function Aa(e,r,i,a,c,d,f,m){return{value:e,root:r,parent:i,type:a,props:c,children:d,line:Ra,column:mo,length:f,return:"",siblings:m}}function er(e,r){return xu(Aa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function eo(e){for(;e.root;)e=er(e.root,{children:[e]});gi(e,e.siblings)}function cv(){return Ye}function uv(){return Ye=Jt>0?et(ko,--Jt):0,mo--,Ye===10&&(mo=1,Ra--),Ye}function un(){return Ye=Jt<ng?et(ko,Jt++):0,mo++,Ye===10&&(mo=1,Ra++),Ye}function tr(){return et(ko,Jt)}function da(){return Jt}function Oa(e,r){return jr(ko,e,r)}function ji(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dv(e){return Ra=mo=1,ng=ln(ko=e),Jt=0,[]}function fv(e){return ko="",e}function Gc(e){return eg(Oa(Jt-1,yu(e===91?e+2:e===40?e+1:e)))}function pv(e){for(;(Ye=tr())&&Ye<33;)un();return ji(e)>2||ji(Ye)>3?"":" "}function mv(e,r){for(;--r&&un()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return Oa(e,da()+(r<6&&tr()==32&&un()==32))}function yu(e){for(;un();)switch(Ye){case e:return Jt;case 34:case 39:e!==34&&e!==39&&yu(Ye);break;case 40:e===41&&yu(e);break;case 92:un();break}return Jt}function hv(e,r){for(;un()&&e+Ye!==57;)if(e+Ye===84&&tr()===47)break;return"/*"+Oa(r,Jt-1)+"*"+Bu(e===47?e:un())}function gv(e){for(;!ji(tr());)un();return Oa(e,Jt)}function xv(e){return fv(fa("",null,null,null,[""],e=dv(e),0,[0],e))}function fa(e,r,i,a,c,d,f,m,h){for(var y=0,v=0,b=f,S=0,P=0,O=0,$=1,A=1,N=1,R=0,H="",G=c,Q=d,V=a,W=H;A;)switch(O=R,R=un()){case 40:if(O!=108&&et(W,b-1)==58){ua(W+=ge(Gc(R),"&","&\f"),"&\f",Xh(y?m[y-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:W+=Gc(R);break;case 9:case 10:case 13:case 32:W+=pv(O);break;case 92:W+=mv(da()-1,7);continue;case 47:switch(tr()){case 42:case 47:gi(yv(hv(un(),da()),r,i,h),h),(ji(O||1)==5||ji(tr()||1)==5)&&ln(W)&&jr(W,-1,void 0)!==" "&&(W+=" ");break;default:W+="/"}break;case 123*$:m[y++]=ln(W)*N;case 125*$:case 59:case 0:switch(R){case 0:case 125:A=0;case 59+v:N==-1&&(W=ge(W,/\f/g,"")),P>0&&(ln(W)-b||$===0&&O===47)&&gi(P>32?vm(W+";",a,i,b-1,h):vm(ge(W," ","")+";",a,i,b-2,h),h);break;case 59:W+=";";default:if(gi(V=ym(W,r,i,y,v,c,m,H,G=[],Q=[],b,d),d),R===123)if(v===0)fa(W,r,V,V,G,d,b,m,Q);else{switch(S){case 99:if(et(W,3)===110)break;case 108:if(et(W,2)===97)break;default:v=0;case 100:case 109:case 115:}v?fa(e,V,V,a&&gi(ym(e,V,V,0,0,c,m,H,c,G=[],b,Q),Q),c,Q,b,m,a?G:Q):fa(W,V,V,V,[""],Q,0,m,Q)}}y=v=P=0,$=N=1,H=W="",b=f;break;case 58:b=1+ln(W),P=O;default:if($<1){if(R==123)--$;else if(R==125&&$++==0&&uv()==125)continue}switch(W+=Bu(R),R*$){case 38:N=v>0?1:(W+="\f",-1);break;case 44:m[y++]=(ln(W)-1)*N,N=1;break;case 64:tr()===45&&(W+=Gc(un())),S=tr(),v=b=ln(H=W+=gv(da())),R++;break;case 45:O===45&&ln(W)==2&&($=0)}}return d}function ym(e,r,i,a,c,d,f,m,h,y,v,b){for(var S=c-1,P=c===0?d:[""],O=tg(P),$=0,A=0,N=0;$<a;++$)for(var R=0,H=jr(e,S+1,S=Xh(A=f[$])),G=e;R<O;++R)(G=eg(A>0?P[R]+" "+H:ge(H,/&\f/g,P[R])))&&(h[N++]=G);return Aa(e,r,i,c===0?Ia:m,h,y,v,b)}function yv(e,r,i,a){return Aa(e,r,i,Yh,Bu(cv()),jr(e,2,-2),0,a)}function vm(e,r,i,a,c){return Aa(e,r,i,Du,jr(e,0,a),jr(e,a+1,-1),a,c)}function rg(e,r,i){switch(av(e,r)){case 5103:return je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return je+e+e;case 4855:return je+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return wi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return je+e+wi+e+Le+e+e;case 5936:switch(et(e,r+11)){case 114:return je+e+Le+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return je+e+Le+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return je+e+Le+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return je+e+Le+e+e;case 6165:return je+e+Le+"flex-"+e+e;case 5187:return je+e+ge(e,/(\w+).+(:[^]+)/,je+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return je+e+Le+"flex-item-"+ge(e,/flex-|-self/g,"")+(Tn(e,/flex-|baseline/)?"":Le+"grid-row-"+ge(e,/flex-|-self/g,""))+e;case 4675:return je+e+Le+"flex-line-pack"+ge(e,/align-content|flex-|-self/g,"")+e;case 5548:return je+e+Le+ge(e,"shrink","negative")+e;case 5292:return je+e+Le+ge(e,"basis","preferred-size")+e;case 6060:return je+"box-"+ge(e,"-grow","")+je+e+Le+ge(e,"grow","positive")+e;case 4554:return je+ge(e,/([^-])(transform)/g,"$1"+je+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Le+"flex-pack:$3"),/space-between/,"justify")+je+e+e;case 4200:if(!Tn(e,/flex-|baseline/))return Le+"grid-column-align"+jr(e,r)+e;break;case 2592:case 3360:return Le+ge(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,c){return r=c,Tn(a.props,/grid-\w+-end/)})?~ua(e+(i=i[r].value),"span",0)?e:Le+ge(e,"-start","")+e+Le+"grid-row-span:"+(~ua(i,"span",0)?Tn(i,/\d+/):+Tn(i,/\d+/)-+Tn(e,/\d+/))+";":Le+ge(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Tn(a.props,/grid-\w+-start/)})?e:Le+ge(ge(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(e)-1-r>6)switch(et(e,r+1)){case 109:if(et(e,r+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+wi+(et(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ua(e,"stretch",0)?rg(ge(e,"stretch","fill-available"),r,i)+e:e}break;case 5152:case 5920:return ge(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,c,d,f,m,h,y){return Le+c+":"+d+y+(f?Le+c+"-span:"+(m?h:+h-+d)+y:"")+e});case 4949:if(et(e,r+6)===121)return ge(e,":",":"+je)+e;break;case 6444:switch(et(e,et(e,14)===45?18:11)){case 120:return ge(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(et(e,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Le+"$2box$3")+e;case 100:return ge(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(e,"scroll-","scroll-snap-")+e}return e}function wa(e,r){for(var i="",a=0;a<e.length;a++)i+=r(e[a],a,e,r)||"";return i}function vv(e,r,i,a){switch(e.type){case sv:if(e.children.length)break;case ov:case iv:case Du:return e.return=e.return||e.value;case Yh:return"";case Kh:return e.return=e.value+"{"+wa(e.children,a)+"}";case Ia:if(!ln(e.value=e.props.join(",")))return""}return ln(i=wa(e.children,a))?e.return=e.value+"{"+i+"}":""}function wv(e){var r=tg(e);return function(i,a,c,d){for(var f="",m=0;m<r;m++)f+=e[m](i,a,c,d)||"";return f}}function bv(e){return function(r){r.root||(r=r.return)&&e(r)}}function kv(e,r,i,a){if(e.length>-1&&!e.return)switch(e.type){case Du:e.return=rg(e.value,e.length,i);return;case Kh:return wa([er(e,{value:ge(e.value,"@","@"+je)})],a);case Ia:if(e.length)return lv(i=e.props,function(c){switch(Tn(c,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":eo(er(e,{props:[ge(c,/:(read-\w+)/,":"+wi+"$1")]})),eo(er(e,{props:[c]})),xu(e,{props:xm(i,a)});break;case"::placeholder":eo(er(e,{props:[ge(c,/:(plac\w+)/,":"+je+"input-$1")]})),eo(er(e,{props:[ge(c,/:(plac\w+)/,":"+wi+"$1")]})),eo(er(e,{props:[ge(c,/:(plac\w+)/,Le+"input-$1")]})),eo(er(e,{props:[c]})),xu(e,{props:xm(i,a)});break}return""})}}var uo={},Jc,Qc;const ho=typeof process<"u"&&uo!==void 0&&(uo.REACT_APP_SC_ATTR||uo.SC_ATTR)||"data-styled",og="active",ig="data-styled-version",Na="6.4.3",Fu=`/*!sc*/
`,bi=typeof window<"u"&&typeof document<"u";function wm(e){if(typeof process<"u"&&uo!==void 0){const r=uo[e];if(r!==void 0&&r!=="")return r!=="false"}}const Sv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Qc=(Jc=wm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Jc!==void 0?Jc:wm("SC_DISABLE_SPEEDY"))!==null&&Qc!==void 0?Qc:typeof process<"u"&&uo!==void 0&&!1),sg="sc-keyframes-",jv={};function Ri(e,...r){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${r.length>0?` Args: ${r.join(", ")}`:""}`)}let pa=new Map,ba=new Map,ma=1;const xi=e=>{if(pa.has(e))return pa.get(e);for(;ba.has(ma);)ma++;const r=ma++;return pa.set(e,r),ba.set(r,e),r},$v=e=>ba.get(e),zv=(e,r)=>{ma=r+1,pa.set(e,r),ba.set(r,e)},Uu=Object.freeze([]),go=Object.freeze({});function ag(e,r,i=go){return e.theme!==i.theme&&e.theme||r||i.theme}const Cv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_v=/(^-|-$)/g;function lg(e){return e.replace(Cv,"-").replace(_v,"")}const Ev=/(a)(d)/gi,bm=e=>String.fromCharCode(e+(e>25?39:97));function Wu(e){let r,i="";for(r=Math.abs(e);r>52;r=r/52|0)i=bm(r%52)+i;return(bm(r%52)+i).replace(Ev,"$1-$2")}const vu=5381,Sr=(e,r)=>{let i=r.length;for(;i;)e=33*e^r.charCodeAt(--i);return e},cg=e=>Sr(vu,e);function Zu(e){return Wu(cg(e)>>>0)}function Pv(e){return e.displayName||e.name||"Component"}function wu(e){return typeof e=="string"&&!0}function Tv(e){return wu(e)?`styled.${e}`:`Styled(${Pv(e)})`}const ug=Symbol.for("react.memo"),Iv=Symbol.for("react.forward_ref"),Rv={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Av={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ov={[Iv]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ug]:dg};function km(e){return("type"in(r=e)&&r.type.$$typeof)===ug?dg:"$$typeof"in e?Ov[e.$$typeof]:Rv;var r}const Nv=Object.defineProperty,Lv=Object.getOwnPropertyNames,Mv=Object.getOwnPropertySymbols,Dv=Object.getOwnPropertyDescriptor,Bv=Object.getPrototypeOf,Fv=Object.prototype;function fg(e,r,i){if(typeof r!="string"){const a=Bv(r);a&&a!==Fv&&fg(e,a,i);const c=Lv(r).concat(Mv(r)),d=km(e),f=km(r);for(let m=0;m<c.length;++m){const h=c[m];if(!(h in Av||i&&i[h]||f&&h in f||d&&h in d)){const y=Dv(r,h);try{Nv(e,h,y)}catch{}}}}return e}function Ai(e){return typeof e=="function"}const Uv=Symbol.for("react.forward_ref");function qu(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Uv&&"styledComponentId"in e}function yi(e,r){return e&&r?e+" "+r:e||r||""}function ka(e,r){return e.join("")}function $i(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function bu(e,r,i=!1){if(!i&&!$i(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(let a=0;a<r.length;a++)e[a]=bu(e[a],r[a]);else if($i(r))for(const a in r)e[a]=bu(e[a],r[a]);return e}function Vu(e,r){Object.defineProperty(e,"toString",{value:r})}const Wv=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let r=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)r+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)r-=this.groupSizes[i];return this._cGroup=e,this._cIndex=r,r}insertRules(e,r){if(e>=this.groupSizes.length){const c=this.groupSizes,d=c.length;let f=d;for(;e>=f;)if(f<<=1,f<0)throw Ri(16,`${e}`);this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(let m=d;m<f;m++)this.groupSizes[m]=0}let i=this.indexOfGroup(e+1),a=0;for(let c=0,d=r.length;c<d;c++)this.tag.insertRule(i,r[c])&&(this.groupSizes[e]++,i++,a++);a>0&&this._cGroup>e&&(this._cIndex+=a)}clearGroup(e){if(e<this.length){const r=this.groupSizes[e],i=this.indexOfGroup(e),a=i+r;this.groupSizes[e]=0;for(let c=i;c<a;c++)this.tag.deleteRule(i);r>0&&this._cGroup>e&&(this._cIndex-=r)}}getGroup(e){let r="";if(e>=this.length||this.groupSizes[e]===0)return r;const i=this.groupSizes[e],a=this.indexOfGroup(e),c=a+i;for(let d=a;d<c;d++)r+=this.tag.getRule(d)+Fu;return r}},Zv=`style[${ho}][${ig}="${Na}"]`,qv=new RegExp(`^${ho}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Sm=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ku=e=>{if(!e)return document;if(Sm(e))return e;if("getRootNode"in e){const r=e.getRootNode();if(Sm(r))return r}return document},Vv=(e,r,i)=>{const a=i.split(",");let c;for(let d=0,f=a.length;d<f;d++)(c=a[d])&&e.registerName(r,c)},Hv=(e,r)=>{var i;const a=((i=r.textContent)!==null&&i!==void 0?i:"").split(Fu),c=[];for(let d=0,f=a.length;d<f;d++){const m=a[d].trim();if(!m)continue;const h=m.match(qv);if(h){const y=0|parseInt(h[1],10),v=h[2];y!==0&&(zv(v,y),Vv(e,v,h[3]),e.getTag().insertRules(y,c)),c.length=0}else c.push(m)}},Yc=e=>{const r=ku(e.options.target).querySelectorAll(Zv);for(let i=0,a=r.length;i<a;i++){const c=r[i];c&&c.getAttribute(ho)!==og&&(Hv(e,c),c.parentNode&&c.parentNode.removeChild(c))}};let fi=!1;function Gv(){if(fi!==!1)return fi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return fi=e.nonce||e.getAttribute("content")||void 0;const r=document.head.querySelector('meta[name="sc-nonce"]');if(r)return fi=r.getAttribute("content")||void 0}return fi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const pg=(e,r)=>{const i=document.head,a=e||i,c=document.createElement("style"),d=(h=>{const y=Array.from(h.querySelectorAll(`style[${ho}]`));return y[y.length-1]})(a),f=d!==void 0?d.nextSibling:null;c.setAttribute(ho,og),c.setAttribute(ig,Na);const m=r||Gv();return m&&c.setAttribute("nonce",m),a.insertBefore(c,f),c},Jv=class{constructor(e,r){this.element=pg(e,r),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var a;if(i.sheet)return i.sheet;const c=(a=i.getRootNode().styleSheets)!==null&&a!==void 0?a:document.styleSheets;for(let d=0,f=c.length;d<f;d++){const m=c[d];if(m.ownerNode===i)return m}throw Ri(17)})(this.element),this.length=0}insertRule(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""}},Qv=class{constructor(e,r){this.element=pg(e,r),this.nodes=this.element.childNodes,this.length=0}insertRule(e,r){if(e<=this.length&&e>=0){const i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let jm=bi;const Yv={isServer:!bi,useCSSOMInjection:!Sv};class Oi{static registerId(r){return xi(r)}constructor(r=go,i={},a){this.options=Object.assign(Object.assign({},Yv),r),this.gs=i,this.keyframeIds=new Set,this.names=new Map(a),this.server=!!r.isServer,!this.server&&bi&&jm&&(jm=!1,Yc(this)),Vu(this,()=>(c=>{const d=c.getTag(),{length:f}=d;let m="";for(let h=0;h<f;h++){const y=$v(h);if(y===void 0)continue;const v=c.names.get(y);if(v===void 0||!v.size)continue;const b=d.getGroup(h);if(b.length===0)continue;const S=ho+".g"+h+'[id="'+y+'"]';let P="";for(const O of v)O.length>0&&(P+=O+",");m+=b+S+'{content:"'+P+'"}'+Fu}return m})(this))}rehydrate(){!this.server&&bi&&Yc(this)}reconstructWithOptions(r,i=!0){const a=new Oi(Object.assign(Object.assign({},this.options),r),this.gs,i&&this.names||void 0);return a.keyframeIds=new Set(this.keyframeIds),!this.server&&bi&&r.target!==this.options.target&&ku(this.options.target)!==ku(r.target)&&Yc(a),a}allocateGSInstance(r){return this.gs[r]=(this.gs[r]||0)+1}getTag(){return this.tag||(this.tag=(r=(({useCSSOMInjection:i,target:a,nonce:c})=>i?new Jv(a,c):new Qv(a,c))(this.options),new Wv(r)));var r}hasNameForId(r,i){var a,c;return(c=(a=this.names.get(r))===null||a===void 0?void 0:a.has(i))!==null&&c!==void 0&&c}registerName(r,i){xi(r),r.startsWith(sg)&&this.keyframeIds.add(r);const a=this.names.get(r);a?a.add(i):this.names.set(r,new Set([i]))}insertRules(r,i,a){this.registerName(r,i),this.getTag().insertRules(xi(r),a)}clearNames(r){this.names.has(r)&&this.names.get(r).clear()}clearRules(r){this.getTag().clearGroup(xi(r)),this.clearNames(r)}clearTag(){this.tag=void 0}}const mg=new WeakSet,Kv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xv(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Kv||e.startsWith("--")?String(r).trim():r+"px"}const kr=47;function $m(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let r="";for(let i=0;i<e.length;i++){const a=e.charCodeAt(i);r+=a>=65&&a<=90?"-"+String.fromCharCode(a+32):e[i]}return r.startsWith("ms-")?"-"+r:r}const hg=Symbol.for("sc-keyframes");function e2(e){return typeof e=="object"&&e!==null&&hg in e}function gg(e){return Ai(e)&&!(e.prototype&&e.prototype.isReactComponent)}const xg=e=>e==null||e===!1||e==="",t2=Symbol.for("react.client.reference");function zm(e){return e.$$typeof===t2}function yg(e,r){for(const i in e){const a=e[i];e.hasOwnProperty(i)&&!xg(a)&&(Array.isArray(a)&&mg.has(a)||Ai(a)?r.push($m(i)+":",a,";"):$i(a)?(r.push(i+" {"),yg(a,r),r.push("}")):r.push($m(i)+": "+Xv(i,a)+";"))}}function nr(e,r,i,a,c=[]){if(xg(e))return c;const d=typeof e;if(d==="string")return c.push(e),c;if(d==="function"){if(zm(e))return c;if(gg(e)&&r){const f=e(r);return nr(f,r,i,a,c)}return c.push(e),c}if(Array.isArray(e)){for(let f=0;f<e.length;f++)nr(e[f],r,i,a,c);return c}return qu(e)?(c.push(`.${e.styledComponentId}`),c):e2(e)?(i?(e.inject(i,a),c.push(e.getName(a))):c.push(e),c):zm(e)?c:$i(e)?e.toString!==Object.prototype.toString?(c.push(e.toString()),c):(yg(e,c),c):(c.push(e.toString()),c)}const n2=cg(Na);class r2{constructor(r,i,a){this.rules=r,this.componentId=i,this.baseHash=Sr(n2,i),this.baseStyle=a,Oi.registerId(i)}generateAndInjectStyles(r,i,a){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,a):"";{let d="";for(let f=0;f<this.rules.length;f++){const m=this.rules[f];if(typeof m=="string")d+=m;else if(m)if(gg(m)){const h=m(r);typeof h=="string"?d+=h:h!=null&&h!==!1&&(d+=ka(nr(h,r,i,a)))}else d+=ka(nr(m,r,i,a))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const f=a.hash?a.hash+d:d;let m=this.dynamicNameCache.get(f);if(!m){if(m=Wu(Sr(Sr(this.baseHash,a.hash),d)>>>0),this.dynamicNameCache.size>=200){const h=this.dynamicNameCache.keys().next().value;h!==void 0&&this.dynamicNameCache.delete(h)}this.dynamicNameCache.set(f,m)}if(!i.hasNameForId(this.componentId,m)){const h=a(d,"."+m,void 0,this.componentId);i.insertRules(this.componentId,m,h)}c=yi(c,m)}}return c}}const o2=/&/g;function vg(e,r){let i=0;for(;--r>=0&&e.charCodeAt(r)===92;)i++;return!(1&~i)}function Kc(e){const r=e.length;let i="",a=0,c=0,d=0,f=!1,m=!1;for(let h=0;h<r;h++){const y=e.charCodeAt(h);if(d!==0||f||y!==kr||e.charCodeAt(h+1)!==42)if(f)y===42&&e.charCodeAt(h+1)===kr&&(f=!1,h++);else if(y!==34&&y!==39||vg(e,h)){if(d===0)if(y===123)c++;else if(y===125){if(c--,c<0){m=!0;let v=h+1;for(;v<r;){const b=e.charCodeAt(v);if(b===59||b===10)break;v++}v<r&&e.charCodeAt(v)===59&&v++,c=0,h=v-1,a=v;continue}c===0&&(i+=e.substring(a,h+1),a=h+1)}else y===59&&c===0&&(i+=e.substring(a,h+1),a=h+1)}else d===0?d=y:d===y&&(d=0);else f=!0,h++}return m||c!==0||d!==0?(a<r&&c===0&&d===0&&(i+=e.substring(a)),i):e}function wg(e,r){const i=r+" ",a=","+i;for(let c=0;c<e.length;c++){const d=e[c];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",a);const f=d.props,m=[];for(let h=0;h<f.length;h++)m[h]=i+f[h];d.props=m}Array.isArray(d.children)&&d.type!=="@keyframes"&&wg(d.children,r)}return e}function i2({options:e=go,plugins:r=Uu}=go){let i,a,c;const d=(S,P,O)=>O.startsWith(a)&&O.endsWith(a)&&O.replaceAll(a,"").length>0?`.${i}`:S,f=r.slice();f.push(S=>{S.type===Ia&&S.value.includes("&")&&(c||(c=new RegExp(`\\${a}\\b`,"g")),S.props[0]=S.props[0].replace(o2,a).replace(c,d))}),e.prefix&&f.push(kv),f.push(vv);let m=[];const h=wv(f.concat(bv(S=>m.push(S)))),y=(S,P="",O="",$="&")=>{i=$,a=P,c=void 0;const A=(function(R){const H=R.indexOf("//")!==-1,G=R.indexOf("}")!==-1;if(!H&&!G)return R;if(!H)return Kc(R);const Q=R.length;let V="",W=0,X=0,te=0,I=0,me=0,Pe=!1;for(;X<Q;){const xe=R.charCodeAt(X);if(xe!==34&&xe!==39||vg(R,X))if(te===0)if(xe===kr&&X+1<Q&&R.charCodeAt(X+1)===42){for(X+=2;X+1<Q&&(R.charCodeAt(X)!==42||R.charCodeAt(X+1)!==kr);)X++;X+=2}else if(xe!==40)if(xe!==41)if(I>0)X++;else if(xe===42&&X+1<Q&&R.charCodeAt(X+1)===kr)V+=R.substring(W,X),X+=2,W=X,Pe=!0;else if(xe===kr&&X+1<Q&&R.charCodeAt(X+1)===kr){for(V+=R.substring(W,X);X<Q&&R.charCodeAt(X)!==10;)X++;W=X,Pe=!0}else xe===123?me++:xe===125&&me--,X++;else I>0&&I--,X++;else I++,X++;else X++;else te===0?te=xe:te===xe&&(te=0),X++}return Pe?(W<Q&&(V+=R.substring(W)),me===0?V:Kc(V)):me===0?R:Kc(R)})(S);let N=xv(O||P?O+" "+P+" { "+A+" }":A);return e.namespace&&(N=wg(N,e.namespace)),m=[],wa(N,h),m},v=e;let b=vu;for(let S=0;S<r.length;S++)r[S].name||Ri(15),b=Sr(b,r[S].name);return v!=null&&v.namespace&&(b=Sr(b,v.namespace)),v!=null&&v.prefix&&(b=Sr(b,"p")),y.hash=b!==vu?b.toString():"",y}const s2=new Oi,Su=i2(),bg=at.createContext({shouldForwardProp:void 0,styleSheet:s2,stylis:Su,stylisPlugins:void 0});bg.Consumer;function kg(){return at.useContext(bg)}const Hu=at.createContext(void 0);Hu.Consumer;const Cm=Object.prototype.hasOwnProperty,Xc={};function a2(e,r){const i=typeof e!="string"?"sc":lg(e);Xc[i]=(Xc[i]||0)+1;const a=i+"-"+Zu(Na+i+Xc[i]);return r?r+"-"+a:a}function l2(e,r,i){const a=qu(e),c=e,d=!wu(e),{attrs:f=Uu,componentId:m=a2(r.displayName,r.parentComponentId),displayName:h=Tv(e)}=r,y=r.displayName&&r.componentId?lg(r.displayName)+"-"+r.componentId:r.componentId||m,v=a&&c.attrs?c.attrs.concat(f).filter(Boolean):f;let{shouldForwardProp:b}=r;if(a&&c.shouldForwardProp){const $=c.shouldForwardProp;if(r.shouldForwardProp){const A=r.shouldForwardProp;b=(N,R)=>$(N,R)&&A(N,R)}else b=$}const S=new r2(i,y,a?c.componentStyle:void 0);function P($,A){return(function(N,R,H){const{attrs:G,componentStyle:Q,defaultProps:V,foldedComponentIds:W,styledComponentId:X,target:te}=N,I=at.useContext(Hu),me=kg(),Pe=N.shouldForwardProp||me.shouldForwardProp,xe=ag(R,I,V)||go;let _e,$e;{const oe=at.useRef(null),Z=oe.current;if(Z!==null&&Z[1]===xe&&Z[2]===me.styleSheet&&Z[3]===me.stylis&&Z[7]===Q&&(function(z,L,ie){const ae=z,ue=L;let ye=0;for(const we in ue)if(Cm.call(ue,we)&&(ye++,ae[we]!==ue[we]))return!1;return ye===ie})(Z[0],R,Z[4]))_e=Z[5],$e=Z[6];else{_e=(function(L,ie,ae){const ue=Object.assign(Object.assign({},ie),{className:void 0,theme:ae}),ye=L.length>1;for(let we=0;we<L.length;we++){const be=L[we],ze=Ai(be)?be(ye?Object.assign({},ue):ue):be;for(const Ze in ze)Ze==="className"?ue.className=yi(ue.className,ze[Ze]):Ze==="style"?ue.style=Object.assign(Object.assign({},ue.style),ze[Ze]):Ze in ie&&ie[Ze]===void 0||(ue[Ze]=ze[Ze])}return"className"in ie&&typeof ie.className=="string"&&(ue.className=yi(ue.className,ie.className)),ue})(G,R,xe),$e=(function(L,ie,ae,ue){return L.generateAndInjectStyles(ie,ae,ue)})(Q,_e,me.styleSheet,me.stylis);let z=0;for(const L in R)Cm.call(R,L)&&z++;oe.current=[R,xe,me.styleSheet,me.stylis,z,_e,$e,Q]}}const Ve=_e.as||te,Te=(function(oe,Z,z,L){const ie={};for(const ae in oe)oe[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&oe.theme===z||(ae==="forwardedAs"?ie.as=oe.forwardedAs:L&&!L(ae,Z)||(ie[ae]=oe[ae]));return ie})(_e,Ve,xe,Pe);let q=yi(W,X);return $e&&(q+=" "+$e),_e.className&&(q+=" "+_e.className),Te[wu(Ve)&&Ve.includes("-")?"class":"className"]=q,H&&(Te.ref=H),_.createElement(Ve,Te)})(O,$,A)}P.displayName=h;let O=at.forwardRef(P);return O.attrs=v,O.componentStyle=S,O.displayName=h,O.shouldForwardProp=b,O.foldedComponentIds=a?yi(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=y,O.target=a?c.target:e,Object.defineProperty(O,"defaultProps",{get(){return this._foldedDefaultProps},set($){this._foldedDefaultProps=a?(function(A,...N){for(const R of N)bu(A,R,!0);return A})({},c.defaultProps,$):$}}),Vu(O,()=>`.${O.styledComponentId}`),d&&fg(O,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}var c2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function _m(e,r){const i=[e[0]];for(let a=0,c=r.length;a<c;a+=1)i.push(r[a],e[a+1]);return i}const Em=e=>(mg.add(e),e);function se(e,...r){if(Ai(e)||$i(e))return Em(nr(_m(Uu,[e,...r])));const i=e;return r.length===0&&i.length===1&&typeof i[0]=="string"?nr(i):Em(nr(_m(i,r)))}function ju(e,r,i=go){if(!r)throw Ri(1,r);const a=(c,...d)=>e(r,i,se(c,...d));return a.attrs=c=>ju(e,r,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)})),a.withConfig=c=>ju(e,r,Object.assign(Object.assign({},i),c)),a}const Sg=e=>ju(l2,e),x=Sg;c2.forEach(e=>{x[e]=Sg(e)});class u2{constructor(r,i){this.instanceRules=new Map,this.rules=r,this.componentId=i,this.isStatic=(function(a){for(let c=0;c<a.length;c+=1){const d=a[c];if(Ai(d)&&!qu(d))return!1}return!0})(r),Oi.registerId(this.componentId)}removeStyles(r,i){this.instanceRules.delete(r),this.rebuildGroup(i)}renderStyles(r,i,a,c){const d=this.componentId;if(this.isStatic){if(a.hasNameForId(d,d+r))this.instanceRules.has(r)||this.computeRules(r,i,a,c);else{const m=this.computeRules(r,i,a,c);a.insertRules(d,m.name,m.rules)}return}const f=this.instanceRules.get(r);if(this.computeRules(r,i,a,c),!a.server&&f){const m=f.rules,h=this.instanceRules.get(r).rules;if(m.length===h.length){let y=!0;for(let v=0;v<m.length;v++)if(m[v]!==h[v]){y=!1;break}if(y)return}}this.rebuildGroup(a)}computeRules(r,i,a,c){const d=ka(nr(this.rules,i,a,c)),f={name:this.componentId+r,rules:c(d,"")};return this.instanceRules.set(r,f),f}rebuildGroup(r){const i=this.componentId;r.clearRules(i);for(const a of this.instanceRules.values())r.insertRules(i,a.name,a.rules)}}function d2(e,...r){const i=se(e,...r),a=`sc-global-${Zu(JSON.stringify(i))}`,c=new u2(i,a),d=m=>{const h=kg(),y=at.useContext(Hu);let v;{const b=at.useRef(null);b.current===null&&(b.current=h.styleSheet.allocateGSInstance(a)),v=b.current}h.styleSheet.server&&f(v,m,h.styleSheet,y,h.stylis);{const b=c.isStatic?[v,h.styleSheet,c]:[v,m,h.styleSheet,y,h.stylis,c],S=at.useRef(c);at.useLayoutEffect(()=>{h.styleSheet.server||(S.current!==c&&(h.styleSheet.clearRules(a),S.current=c),f(v,m,h.styleSheet,y,h.stylis))},b),at.useLayoutEffect(()=>()=>{h.styleSheet.server||c.removeStyles(v,h.styleSheet)},[v,h.styleSheet,c])}return h.styleSheet.server&&c.instanceRules.delete(v),null};function f(m,h,y,v,b){if(c.isStatic)c.renderStyles(m,jv,y,b);else{const S=Object.assign(Object.assign({},h),{theme:ag(h,v,d.defaultProps)});c.renderStyles(m,S,y,b)}}return at.memo(d)}var jg;class f2{constructor(r,i){this[jg]=!0,this.inject=(a,c=Su)=>{const d=this.getName(c);if(!a.hasNameForId(this.id,d)){const f=c(this.rules,d,"@keyframes");a.insertRules(this.id,d,f)}},this.name=r,this.id=sg+r,this.rules=i,xi(this.id),Vu(this,()=>{throw Ri(12,String(this.name))})}getName(r=Su){return r.hash?this.name+Wu(+r.hash>>>0):this.name}}function mt(e,...r){const i=ka(se(e,...r)),a=Zu(i);return new f2(a,i)}jg=hg;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m2=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,a)=>a?a.toUpperCase():i.toLowerCase()),Pm=e=>{const r=m2(e);return r.charAt(0).toUpperCase()+r.slice(1)},$g=(...e)=>e.filter((r,i,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=_.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:f,...m},h)=>_.createElement("svg",{ref:h,...h2,width:r,height:r,stroke:e,strokeWidth:a?Number(i)*24/Number(r):i,className:$g("lucide",c),...m},[...f.map(([y,v])=>_.createElement(y,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(e,r)=>{const i=_.forwardRef(({className:a,...c},d)=>_.createElement(g2,{ref:d,iconNode:r,className:$g(`lucide-${p2(Pm(e))}`,`lucide-${e}`,a),...c}));return i.displayName=Pm(e),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Tm=re("activity",x2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]],zg=re("apple",y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],w2=re("arrow-left",v2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],k2=re("arrow-right-to-line",b2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ft=re("arrow-right",S2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],So=re("bell",j2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Cg=re("bot",$2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],C2=re("calculator",z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],E2=re("camera",_2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],T2=re("chart-column",P2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ni=re("check",I2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A2=re("chevron-down",R2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],N2=re("chevron-up",O2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gu=re("circle-alert",L2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xo=re("circle-check",M2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]],_g=re("cloud-lightning",D2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],zi=re("code-xml",B2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],yo=re("database",F2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],W2=re("eye",U2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],q2=re("file-text",Z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],vo=re("globe",V2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Eg=re("hard-drive",H2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Pg=re("info",G2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Q2=re("instagram",J2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],K2=re("key",Y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],e5=re("laptop",X2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],n5=re("layout-template",t5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],o5=re("loader-circle",r5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],s5=re("lock",i5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],l5=re("log-in",a5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],u5=re("log-out",c5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Sa=re("mail",d5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],p5=re("map-pin",f5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Tg=re("menu",m5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],g5=re("message-circle",h5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Ig=re("message-square",x5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=[["path",{d:"M5 12h14",key:"1ays0h"}]],Rg=re("minus",y5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Ci=re("monitor",v5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ag=re("network",w5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],k5=re("package",b5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],ja=re("phone",S5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$5=re("plus",j5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],C5=re("printer",z5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],E5=re("rotate-ccw",_5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Og=re("search",P5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],La=re("server",T5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],R5=re("settings",I5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],$r=re("shield",A5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],N5=re("shopping-bag",O5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],M5=re("shopping-cart",L5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],rr=re("smartphone",D5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],F5=re("star",B5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],W5=re("triangle-alert",U5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],q5=re("upload",Z5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],H5=re("user",V5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Ma=re("users",G5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Da=re("wifi-off",J5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Ju=re("wifi",Q5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Li=re("x",Y5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mi=re("zap",K5),Im=e=>{let r;const i=new Set,a=(y,v)=>{const b=typeof y=="function"?y(r):y;if(!Object.is(b,r)){const S=r;r=v??(typeof b!="object"||b===null)?b:Object.assign({},r,b),i.forEach(P=>P(r,S))}},c=()=>r,m={setState:a,getState:c,getInitialState:()=>h,subscribe:y=>(i.add(y),()=>i.delete(y))},h=r=e(a,c,m);return m},X5=(e=>e?Im(e):Im),ew=e=>e;function tw(e,r=ew){const i=at.useSyncExternalStore(e.subscribe,at.useCallback(()=>r(e.getState()),[e,r]),at.useCallback(()=>r(e.getInitialState()),[e,r]));return at.useDebugValue(i),i}const Rm=e=>{const r=X5(e),i=a=>tw(r,a);return Object.assign(i,r),i},nw=(e=>e?Rm(e):Rm);var Am;function M(e,r,i){function a(m,h){if(m._zod||Object.defineProperty(m,"_zod",{value:{def:h,constr:f,traits:new Set},enumerable:!1}),m._zod.traits.has(e))return;m._zod.traits.add(e),r(m,h);const y=f.prototype,v=Object.keys(y);for(let b=0;b<v.length;b++){const S=v[b];S in m||(m[S]=y[S].bind(m))}}const c=(i==null?void 0:i.Parent)??Object;class d extends c{}Object.defineProperty(d,"name",{value:e});function f(m){var h;const y=i!=null&&i.Parent?new d:this;a(y,m),(h=y._zod).deferred??(h.deferred=[]);for(const v of y._zod.deferred)v();return y}return Object.defineProperty(f,"init",{value:a}),Object.defineProperty(f,Symbol.hasInstance,{value:m=>{var h,y;return i!=null&&i.Parent&&m instanceof i.Parent?!0:(y=(h=m==null?void 0:m._zod)==null?void 0:h.traits)==null?void 0:y.has(e)}}),Object.defineProperty(f,"name",{value:e}),f}class fo extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Ng extends Error{constructor(r){super(`Encountered unidirectional transform during encode: ${r}`),this.name="ZodEncodeError"}}(Am=globalThis).__zod_globalConfig??(Am.__zod_globalConfig={});const Qu=globalThis.__zod_globalConfig;function zr(e){return Qu}function Lg(e){const r=Object.values(e).filter(a=>typeof a=="number");return Object.entries(e).filter(([a,c])=>r.indexOf(+a)===-1).map(([a,c])=>c)}function $u(e,r){return typeof r=="bigint"?r.toString():r}function Yu(e){return{get value(){{const r=e();return Object.defineProperty(this,"value",{value:r}),r}}}}function Ku(e){return e==null}function Xu(e){const r=e.startsWith("^")?1:0,i=e.endsWith("$")?e.length-1:e.length;return e.slice(r,i)}const Om=Symbol("evaluating");function Ee(e,r,i){let a;Object.defineProperty(e,r,{get(){if(a!==Om)return a===void 0&&(a=Om,a=i()),a},set(c){Object.defineProperty(e,r,{value:c})},configurable:!0})}function _r(e,r,i){Object.defineProperty(e,r,{value:i,writable:!0,enumerable:!0,configurable:!0})}function ir(...e){const r={};for(const i of e){const a=Object.getOwnPropertyDescriptors(i);Object.assign(r,a)}return Object.defineProperties({},r)}function Nm(e){return JSON.stringify(e)}function rw(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Mg="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function $a(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const ow=Yu(()=>{var e;if(Qu.jitless||typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)!=null&&e.includes("Cloudflare")))return!1;try{const r=Function;return new r(""),!0}catch{return!1}});function _i(e){if($a(e)===!1)return!1;const r=e.constructor;if(r===void 0||typeof r!="function")return!0;const i=r.prototype;return!($a(i)===!1||Object.prototype.hasOwnProperty.call(i,"isPrototypeOf")===!1)}function Dg(e){return _i(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}const iw=new Set(["string","number","symbol"]);function Ba(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sr(e,r,i){const a=new e._zod.constr(r??e._zod.def);return(!r||i!=null&&i.parent)&&(a._zod.parent=e),a}function fe(e){const r=e;if(!r)return{};if(typeof r=="string")return{error:()=>r};if((r==null?void 0:r.message)!==void 0){if((r==null?void 0:r.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");r.error=r.message}return delete r.message,typeof r.error=="string"?{...r,error:()=>r.error}:r}function sw(e){return Object.keys(e).filter(r=>e[r]._zod.optin==="optional"&&e[r]._zod.optout==="optional")}function aw(e,r){const i=e._zod.def,a=i.checks;if(a&&a.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const d=ir(e._zod.def,{get shape(){const f={};for(const m in r){if(!(m in i.shape))throw new Error(`Unrecognized key: "${m}"`);r[m]&&(f[m]=i.shape[m])}return _r(this,"shape",f),f},checks:[]});return sr(e,d)}function lw(e,r){const i=e._zod.def,a=i.checks;if(a&&a.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const d=ir(e._zod.def,{get shape(){const f={...e._zod.def.shape};for(const m in r){if(!(m in i.shape))throw new Error(`Unrecognized key: "${m}"`);r[m]&&delete f[m]}return _r(this,"shape",f),f},checks:[]});return sr(e,d)}function cw(e,r){if(!_i(r))throw new Error("Invalid input to extend: expected a plain object");const i=e._zod.def.checks;if(i&&i.length>0){const d=e._zod.def.shape;for(const f in r)if(Object.getOwnPropertyDescriptor(d,f)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const c=ir(e._zod.def,{get shape(){const d={...e._zod.def.shape,...r};return _r(this,"shape",d),d}});return sr(e,c)}function uw(e,r){if(!_i(r))throw new Error("Invalid input to safeExtend: expected a plain object");const i=ir(e._zod.def,{get shape(){const a={...e._zod.def.shape,...r};return _r(this,"shape",a),a}});return sr(e,i)}function dw(e,r){var a;if((a=e._zod.def.checks)!=null&&a.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const i=ir(e._zod.def,{get shape(){const c={...e._zod.def.shape,...r._zod.def.shape};return _r(this,"shape",c),c},get catchall(){return r._zod.def.catchall},checks:r._zod.def.checks??[]});return sr(e,i)}function fw(e,r,i){const c=r._zod.def.checks;if(c&&c.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const f=ir(r._zod.def,{get shape(){const m=r._zod.def.shape,h={...m};if(i)for(const y in i){if(!(y in m))throw new Error(`Unrecognized key: "${y}"`);i[y]&&(h[y]=e?new e({type:"optional",innerType:m[y]}):m[y])}else for(const y in m)h[y]=e?new e({type:"optional",innerType:m[y]}):m[y];return _r(this,"shape",h),h},checks:[]});return sr(r,f)}function pw(e,r,i){const a=ir(r._zod.def,{get shape(){const c=r._zod.def.shape,d={...c};if(i)for(const f in i){if(!(f in d))throw new Error(`Unrecognized key: "${f}"`);i[f]&&(d[f]=new e({type:"nonoptional",innerType:c[f]}))}else for(const f in c)d[f]=new e({type:"nonoptional",innerType:c[f]});return _r(this,"shape",d),d}});return sr(r,a)}function co(e,r=0){var i;if(e.aborted===!0)return!0;for(let a=r;a<e.issues.length;a++)if(((i=e.issues[a])==null?void 0:i.continue)!==!0)return!0;return!1}function mw(e,r=0){var i;if(e.aborted===!0)return!0;for(let a=r;a<e.issues.length;a++)if(((i=e.issues[a])==null?void 0:i.continue)===!1)return!0;return!1}function Bg(e,r){return r.map(i=>{var a;return(a=i).path??(a.path=[]),i.path.unshift(e),i})}function Xs(e){return typeof e=="string"?e:e==null?void 0:e.message}function Cr(e,r,i){var h,y,v,b,S,P;const a=e.message?e.message:Xs((v=(y=(h=e.inst)==null?void 0:h._zod.def)==null?void 0:y.error)==null?void 0:v.call(y,e))??Xs((b=r==null?void 0:r.error)==null?void 0:b.call(r,e))??Xs((S=i.customError)==null?void 0:S.call(i,e))??Xs((P=i.localeError)==null?void 0:P.call(i,e))??"Invalid input",{inst:c,continue:d,input:f,...m}=e;return m.path??(m.path=[]),m.message=a,r!=null&&r.reportInput&&(m.input=f),m}function ed(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function Ei(...e){const[r,i,a]=e;return typeof r=="string"?{message:r,code:"custom",input:i,inst:a}:{...r}}const Fg=(e,r)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:r,enumerable:!1}),e.message=JSON.stringify(r,$u,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Ug=M("$ZodError",Fg),Wg=M("$ZodError",Fg,{Parent:Error});function hw(e,r=i=>i.message){const i={},a=[];for(const c of e.issues)c.path.length>0?(i[c.path[0]]=i[c.path[0]]||[],i[c.path[0]].push(r(c))):a.push(r(c));return{formErrors:a,fieldErrors:i}}function gw(e,r=i=>i.message){const i={_errors:[]},a=(c,d=[])=>{for(const f of c.issues)if(f.code==="invalid_union"&&f.errors.length)f.errors.map(m=>a({issues:m},[...d,...f.path]));else if(f.code==="invalid_key")a({issues:f.issues},[...d,...f.path]);else if(f.code==="invalid_element")a({issues:f.issues},[...d,...f.path]);else{const m=[...d,...f.path];if(m.length===0)i._errors.push(r(f));else{let h=i,y=0;for(;y<m.length;){const v=m[y];y===m.length-1?(h[v]=h[v]||{_errors:[]},h[v]._errors.push(r(f))):h[v]=h[v]||{_errors:[]},h=h[v],y++}}}};return a(e),i}const td=e=>(r,i,a,c)=>{const d=a?{...a,async:!1}:{async:!1},f=r._zod.run({value:i,issues:[]},d);if(f instanceof Promise)throw new fo;if(f.issues.length){const m=new((c==null?void 0:c.Err)??e)(f.issues.map(h=>Cr(h,d,zr())));throw Mg(m,c==null?void 0:c.callee),m}return f.value},nd=e=>async(r,i,a,c)=>{const d=a?{...a,async:!0}:{async:!0};let f=r._zod.run({value:i,issues:[]},d);if(f instanceof Promise&&(f=await f),f.issues.length){const m=new((c==null?void 0:c.Err)??e)(f.issues.map(h=>Cr(h,d,zr())));throw Mg(m,c==null?void 0:c.callee),m}return f.value},Fa=e=>(r,i,a)=>{const c=a?{...a,async:!1}:{async:!1},d=r._zod.run({value:i,issues:[]},c);if(d instanceof Promise)throw new fo;return d.issues.length?{success:!1,error:new(e??Ug)(d.issues.map(f=>Cr(f,c,zr())))}:{success:!0,data:d.value}},xw=Fa(Wg),Ua=e=>async(r,i,a)=>{const c=a?{...a,async:!0}:{async:!0};let d=r._zod.run({value:i,issues:[]},c);return d instanceof Promise&&(d=await d),d.issues.length?{success:!1,error:new e(d.issues.map(f=>Cr(f,c,zr())))}:{success:!0,data:d.value}},yw=Ua(Wg),vw=e=>(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return td(e)(r,i,c)},ww=e=>(r,i,a)=>td(e)(r,i,a),bw=e=>async(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return nd(e)(r,i,c)},kw=e=>async(r,i,a)=>nd(e)(r,i,a),Sw=e=>(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return Fa(e)(r,i,c)},jw=e=>(r,i,a)=>Fa(e)(r,i,a),$w=e=>async(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return Ua(e)(r,i,c)},zw=e=>async(r,i,a)=>Ua(e)(r,i,a),Cw=/^[cC][0-9a-z]{6,}$/,_w=/^[0-9a-z]+$/,Ew=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Pw=/^[0-9a-vA-V]{20}$/,Tw=/^[A-Za-z0-9]{27}$/,Iw=/^[a-zA-Z0-9_-]{21}$/,Rw=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Aw=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Lm=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Ow=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Nw="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Lw(){return new RegExp(Nw,"u")}const Mw=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Dw=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Bw=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Fw=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Uw=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Zg=/^[A-Za-z0-9_-]*$/,Ww=/^https?$/,Zw=/^\+[1-9]\d{6,14}$/,qg="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",qw=new RegExp(`^${qg}$`);function Vg(e){const r="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${r}`:e.precision===0?`${r}:[0-5]\\d`:`${r}:[0-5]\\d\\.\\d{${e.precision}}`:`${r}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Vw(e){return new RegExp(`^${Vg(e)}$`)}function Hw(e){const r=Vg({precision:e.precision}),i=["Z"];e.local&&i.push(""),e.offset&&i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const a=`${r}(?:${i.join("|")})`;return new RegExp(`^${qg}T(?:${a})$`)}const Gw=e=>{const r=e?`[\\s\\S]{${(e==null?void 0:e.minimum)??0},${(e==null?void 0:e.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${r}$`)},Jw=/^[^A-Z]*$/,Qw=/^[^a-z]*$/,kn=M("$ZodCheck",(e,r)=>{var i;e._zod??(e._zod={}),e._zod.def=r,(i=e._zod).onattach??(i.onattach=[])}),Yw=M("$ZodCheckMaxLength",(e,r)=>{var i;kn.init(e,r),(i=e._zod.def).when??(i.when=a=>{const c=a.value;return!Ku(c)&&c.length!==void 0}),e._zod.onattach.push(a=>{const c=a._zod.bag.maximum??Number.POSITIVE_INFINITY;r.maximum<c&&(a._zod.bag.maximum=r.maximum)}),e._zod.check=a=>{const c=a.value;if(c.length<=r.maximum)return;const f=ed(c);a.issues.push({origin:f,code:"too_big",maximum:r.maximum,inclusive:!0,input:c,inst:e,continue:!r.abort})}}),Kw=M("$ZodCheckMinLength",(e,r)=>{var i;kn.init(e,r),(i=e._zod.def).when??(i.when=a=>{const c=a.value;return!Ku(c)&&c.length!==void 0}),e._zod.onattach.push(a=>{const c=a._zod.bag.minimum??Number.NEGATIVE_INFINITY;r.minimum>c&&(a._zod.bag.minimum=r.minimum)}),e._zod.check=a=>{const c=a.value;if(c.length>=r.minimum)return;const f=ed(c);a.issues.push({origin:f,code:"too_small",minimum:r.minimum,inclusive:!0,input:c,inst:e,continue:!r.abort})}}),Xw=M("$ZodCheckLengthEquals",(e,r)=>{var i;kn.init(e,r),(i=e._zod.def).when??(i.when=a=>{const c=a.value;return!Ku(c)&&c.length!==void 0}),e._zod.onattach.push(a=>{const c=a._zod.bag;c.minimum=r.length,c.maximum=r.length,c.length=r.length}),e._zod.check=a=>{const c=a.value,d=c.length;if(d===r.length)return;const f=ed(c),m=d>r.length;a.issues.push({origin:f,...m?{code:"too_big",maximum:r.length}:{code:"too_small",minimum:r.length},inclusive:!0,exact:!0,input:a.value,inst:e,continue:!r.abort})}}),Wa=M("$ZodCheckStringFormat",(e,r)=>{var i,a;kn.init(e,r),e._zod.onattach.push(c=>{const d=c._zod.bag;d.format=r.format,r.pattern&&(d.patterns??(d.patterns=new Set),d.patterns.add(r.pattern))}),r.pattern?(i=e._zod).check??(i.check=c=>{r.pattern.lastIndex=0,!r.pattern.test(c.value)&&c.issues.push({origin:"string",code:"invalid_format",format:r.format,input:c.value,...r.pattern?{pattern:r.pattern.toString()}:{},inst:e,continue:!r.abort})}):(a=e._zod).check??(a.check=()=>{})}),eb=M("$ZodCheckRegex",(e,r)=>{Wa.init(e,r),e._zod.check=i=>{r.pattern.lastIndex=0,!r.pattern.test(i.value)&&i.issues.push({origin:"string",code:"invalid_format",format:"regex",input:i.value,pattern:r.pattern.toString(),inst:e,continue:!r.abort})}}),tb=M("$ZodCheckLowerCase",(e,r)=>{r.pattern??(r.pattern=Jw),Wa.init(e,r)}),nb=M("$ZodCheckUpperCase",(e,r)=>{r.pattern??(r.pattern=Qw),Wa.init(e,r)}),rb=M("$ZodCheckIncludes",(e,r)=>{kn.init(e,r);const i=Ba(r.includes),a=new RegExp(typeof r.position=="number"?`^.{${r.position}}${i}`:i);r.pattern=a,e._zod.onattach.push(c=>{const d=c._zod.bag;d.patterns??(d.patterns=new Set),d.patterns.add(a)}),e._zod.check=c=>{c.value.includes(r.includes,r.position)||c.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:r.includes,input:c.value,inst:e,continue:!r.abort})}}),ob=M("$ZodCheckStartsWith",(e,r)=>{kn.init(e,r);const i=new RegExp(`^${Ba(r.prefix)}.*`);r.pattern??(r.pattern=i),e._zod.onattach.push(a=>{const c=a._zod.bag;c.patterns??(c.patterns=new Set),c.patterns.add(i)}),e._zod.check=a=>{a.value.startsWith(r.prefix)||a.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:r.prefix,input:a.value,inst:e,continue:!r.abort})}}),ib=M("$ZodCheckEndsWith",(e,r)=>{kn.init(e,r);const i=new RegExp(`.*${Ba(r.suffix)}$`);r.pattern??(r.pattern=i),e._zod.onattach.push(a=>{const c=a._zod.bag;c.patterns??(c.patterns=new Set),c.patterns.add(i)}),e._zod.check=a=>{a.value.endsWith(r.suffix)||a.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:r.suffix,input:a.value,inst:e,continue:!r.abort})}}),sb=M("$ZodCheckOverwrite",(e,r)=>{kn.init(e,r),e._zod.check=i=>{i.value=r.tx(i.value)}});class ab{constructor(r=[]){this.content=[],this.indent=0,this&&(this.args=r)}indented(r){this.indent+=1,r(this),this.indent-=1}write(r){if(typeof r=="function"){r(this,{execution:"sync"}),r(this,{execution:"async"});return}const a=r.split(`
`).filter(f=>f),c=Math.min(...a.map(f=>f.length-f.trimStart().length)),d=a.map(f=>f.slice(c)).map(f=>" ".repeat(this.indent*2)+f);for(const f of d)this.content.push(f)}compile(){const r=Function,i=this==null?void 0:this.args,c=[...((this==null?void 0:this.content)??[""]).map(d=>`  ${d}`)];return new r(...i,c.join(`
`))}}const lb={major:4,minor:4,patch:3},tt=M("$ZodType",(e,r)=>{var c;var i;e??(e={}),e._zod.def=r,e._zod.bag=e._zod.bag||{},e._zod.version=lb;const a=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&a.unshift(e);for(const d of a)for(const f of d._zod.onattach)f(e);if(a.length===0)(i=e._zod).deferred??(i.deferred=[]),(c=e._zod.deferred)==null||c.push(()=>{e._zod.run=e._zod.parse});else{const d=(m,h,y)=>{let v=co(m),b;for(const S of h){if(S._zod.def.when){if(mw(m)||!S._zod.def.when(m))continue}else if(v)continue;const P=m.issues.length,O=S._zod.check(m);if(O instanceof Promise&&(y==null?void 0:y.async)===!1)throw new fo;if(b||O instanceof Promise)b=(b??Promise.resolve()).then(async()=>{await O,m.issues.length!==P&&(v||(v=co(m,P)))});else{if(m.issues.length===P)continue;v||(v=co(m,P))}}return b?b.then(()=>m):m},f=(m,h,y)=>{if(co(m))return m.aborted=!0,m;const v=d(h,a,y);if(v instanceof Promise){if(y.async===!1)throw new fo;return v.then(b=>e._zod.parse(b,y))}return e._zod.parse(v,y)};e._zod.run=(m,h)=>{if(h.skipChecks)return e._zod.parse(m,h);if(h.direction==="backward"){const v=e._zod.parse({value:m.value,issues:[]},{...h,skipChecks:!0});return v instanceof Promise?v.then(b=>f(b,m,h)):f(v,m,h)}const y=e._zod.parse(m,h);if(y instanceof Promise){if(h.async===!1)throw new fo;return y.then(v=>d(v,a,h))}return d(y,a,h)}}Ee(e,"~standard",()=>({validate:d=>{var f;try{const m=xw(e,d);return m.success?{value:m.data}:{issues:(f=m.error)==null?void 0:f.issues}}catch{return yw(e,d).then(h=>{var y;return h.success?{value:h.data}:{issues:(y=h.error)==null?void 0:y.issues}})}},vendor:"zod",version:1}))}),rd=M("$ZodString",(e,r)=>{var i;tt.init(e,r),e._zod.pattern=[...((i=e==null?void 0:e._zod.bag)==null?void 0:i.patterns)??[]].pop()??Gw(e._zod.bag),e._zod.parse=(a,c)=>{if(r.coerce)try{a.value=String(a.value)}catch{}return typeof a.value=="string"||a.issues.push({expected:"string",code:"invalid_type",input:a.value,inst:e}),a}}),De=M("$ZodStringFormat",(e,r)=>{Wa.init(e,r),rd.init(e,r)}),cb=M("$ZodGUID",(e,r)=>{r.pattern??(r.pattern=Aw),De.init(e,r)}),ub=M("$ZodUUID",(e,r)=>{if(r.version){const a={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[r.version];if(a===void 0)throw new Error(`Invalid UUID version: "${r.version}"`);r.pattern??(r.pattern=Lm(a))}else r.pattern??(r.pattern=Lm());De.init(e,r)}),db=M("$ZodEmail",(e,r)=>{r.pattern??(r.pattern=Ow),De.init(e,r)}),fb=M("$ZodURL",(e,r)=>{De.init(e,r),e._zod.check=i=>{var a;try{const c=i.value.trim();if(!r.normalize&&((a=r.protocol)==null?void 0:a.source)===Ww.source&&!/^https?:\/\//i.test(c)){i.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:i.value,inst:e,continue:!r.abort});return}const d=new URL(c);r.hostname&&(r.hostname.lastIndex=0,r.hostname.test(d.hostname)||i.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:r.hostname.source,input:i.value,inst:e,continue:!r.abort})),r.protocol&&(r.protocol.lastIndex=0,r.protocol.test(d.protocol.endsWith(":")?d.protocol.slice(0,-1):d.protocol)||i.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:r.protocol.source,input:i.value,inst:e,continue:!r.abort})),r.normalize?i.value=d.href:i.value=c;return}catch{i.issues.push({code:"invalid_format",format:"url",input:i.value,inst:e,continue:!r.abort})}}}),pb=M("$ZodEmoji",(e,r)=>{r.pattern??(r.pattern=Lw()),De.init(e,r)}),mb=M("$ZodNanoID",(e,r)=>{r.pattern??(r.pattern=Iw),De.init(e,r)}),hb=M("$ZodCUID",(e,r)=>{r.pattern??(r.pattern=Cw),De.init(e,r)}),gb=M("$ZodCUID2",(e,r)=>{r.pattern??(r.pattern=_w),De.init(e,r)}),xb=M("$ZodULID",(e,r)=>{r.pattern??(r.pattern=Ew),De.init(e,r)}),yb=M("$ZodXID",(e,r)=>{r.pattern??(r.pattern=Pw),De.init(e,r)}),vb=M("$ZodKSUID",(e,r)=>{r.pattern??(r.pattern=Tw),De.init(e,r)}),wb=M("$ZodISODateTime",(e,r)=>{r.pattern??(r.pattern=Hw(r)),De.init(e,r)}),bb=M("$ZodISODate",(e,r)=>{r.pattern??(r.pattern=qw),De.init(e,r)}),kb=M("$ZodISOTime",(e,r)=>{r.pattern??(r.pattern=Vw(r)),De.init(e,r)}),Sb=M("$ZodISODuration",(e,r)=>{r.pattern??(r.pattern=Rw),De.init(e,r)}),jb=M("$ZodIPv4",(e,r)=>{r.pattern??(r.pattern=Mw),De.init(e,r),e._zod.bag.format="ipv4"}),$b=M("$ZodIPv6",(e,r)=>{r.pattern??(r.pattern=Dw),De.init(e,r),e._zod.bag.format="ipv6",e._zod.check=i=>{try{new URL(`http://[${i.value}]`)}catch{i.issues.push({code:"invalid_format",format:"ipv6",input:i.value,inst:e,continue:!r.abort})}}}),zb=M("$ZodCIDRv4",(e,r)=>{r.pattern??(r.pattern=Bw),De.init(e,r)}),Cb=M("$ZodCIDRv6",(e,r)=>{r.pattern??(r.pattern=Fw),De.init(e,r),e._zod.check=i=>{const a=i.value.split("/");try{if(a.length!==2)throw new Error;const[c,d]=a;if(!d)throw new Error;const f=Number(d);if(`${f}`!==d)throw new Error;if(f<0||f>128)throw new Error;new URL(`http://[${c}]`)}catch{i.issues.push({code:"invalid_format",format:"cidrv6",input:i.value,inst:e,continue:!r.abort})}}});function Hg(e){if(e==="")return!0;if(/\s/.test(e)||e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}const _b=M("$ZodBase64",(e,r)=>{r.pattern??(r.pattern=Uw),De.init(e,r),e._zod.bag.contentEncoding="base64",e._zod.check=i=>{Hg(i.value)||i.issues.push({code:"invalid_format",format:"base64",input:i.value,inst:e,continue:!r.abort})}});function Eb(e){if(!Zg.test(e))return!1;const r=e.replace(/[-_]/g,a=>a==="-"?"+":"/"),i=r.padEnd(Math.ceil(r.length/4)*4,"=");return Hg(i)}const Pb=M("$ZodBase64URL",(e,r)=>{r.pattern??(r.pattern=Zg),De.init(e,r),e._zod.bag.contentEncoding="base64url",e._zod.check=i=>{Eb(i.value)||i.issues.push({code:"invalid_format",format:"base64url",input:i.value,inst:e,continue:!r.abort})}}),Tb=M("$ZodE164",(e,r)=>{r.pattern??(r.pattern=Zw),De.init(e,r)});function Ib(e,r=null){try{const i=e.split(".");if(i.length!==3)return!1;const[a]=i;if(!a)return!1;const c=JSON.parse(atob(a));return!("typ"in c&&(c==null?void 0:c.typ)!=="JWT"||!c.alg||r&&(!("alg"in c)||c.alg!==r))}catch{return!1}}const Rb=M("$ZodJWT",(e,r)=>{De.init(e,r),e._zod.check=i=>{Ib(i.value,r.alg)||i.issues.push({code:"invalid_format",format:"jwt",input:i.value,inst:e,continue:!r.abort})}}),Ab=M("$ZodUnknown",(e,r)=>{tt.init(e,r),e._zod.parse=i=>i}),Ob=M("$ZodNever",(e,r)=>{tt.init(e,r),e._zod.parse=(i,a)=>(i.issues.push({expected:"never",code:"invalid_type",input:i.value,inst:e}),i)});function Mm(e,r,i){e.issues.length&&r.issues.push(...Bg(i,e.issues)),r.value[i]=e.value}const Nb=M("$ZodArray",(e,r)=>{tt.init(e,r),e._zod.parse=(i,a)=>{const c=i.value;if(!Array.isArray(c))return i.issues.push({expected:"array",code:"invalid_type",input:c,inst:e}),i;i.value=Array(c.length);const d=[];for(let f=0;f<c.length;f++){const m=c[f],h=r.element._zod.run({value:m,issues:[]},a);h instanceof Promise?d.push(h.then(y=>Mm(y,i,f))):Mm(h,i,f)}return d.length?Promise.all(d).then(()=>i):i}});function za(e,r,i,a,c,d){const f=i in a;if(e.issues.length){if(c&&d&&!f)return;r.issues.push(...Bg(i,e.issues))}if(!f&&!c){e.issues.length||r.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[i]});return}e.value===void 0?f&&(r.value[i]=void 0):r.value[i]=e.value}function Gg(e){var a,c,d,f;const r=Object.keys(e.shape);for(const m of r)if(!((f=(d=(c=(a=e.shape)==null?void 0:a[m])==null?void 0:c._zod)==null?void 0:d.traits)!=null&&f.has("$ZodType")))throw new Error(`Invalid element at key "${m}": expected a Zod schema`);const i=sw(e.shape);return{...e,keys:r,keySet:new Set(r),numKeys:r.length,optionalKeys:new Set(i)}}function Jg(e,r,i,a,c,d){const f=[],m=c.keySet,h=c.catchall._zod,y=h.def.type,v=h.optin==="optional",b=h.optout==="optional";for(const S in r){if(S==="__proto__"||m.has(S))continue;if(y==="never"){f.push(S);continue}const P=h.run({value:r[S],issues:[]},a);P instanceof Promise?e.push(P.then(O=>za(O,i,S,r,v,b))):za(P,i,S,r,v,b)}return f.length&&i.issues.push({code:"unrecognized_keys",keys:f,input:r,inst:d}),e.length?Promise.all(e).then(()=>i):i}const Lb=M("$ZodObject",(e,r)=>{tt.init(e,r);const i=Object.getOwnPropertyDescriptor(r,"shape");if(!(i!=null&&i.get)){const m=r.shape;Object.defineProperty(r,"shape",{get:()=>{const h={...m};return Object.defineProperty(r,"shape",{value:h}),h}})}const a=Yu(()=>Gg(r));Ee(e._zod,"propValues",()=>{const m=r.shape,h={};for(const y in m){const v=m[y]._zod;if(v.values){h[y]??(h[y]=new Set);for(const b of v.values)h[y].add(b)}}return h});const c=$a,d=r.catchall;let f;e._zod.parse=(m,h)=>{f??(f=a.value);const y=m.value;if(!c(y))return m.issues.push({expected:"object",code:"invalid_type",input:y,inst:e}),m;m.value={};const v=[],b=f.shape;for(const S of f.keys){const P=b[S],O=P._zod.optin==="optional",$=P._zod.optout==="optional",A=P._zod.run({value:y[S],issues:[]},h);A instanceof Promise?v.push(A.then(N=>za(N,m,S,y,O,$))):za(A,m,S,y,O,$)}return d?Jg(v,y,m,h,a.value,e):v.length?Promise.all(v).then(()=>m):m}}),Mb=M("$ZodObjectJIT",(e,r)=>{Lb.init(e,r);const i=e._zod.parse,a=Yu(()=>Gg(r)),c=S=>{var H,G;const P=new ab(["shape","payload","ctx"]),O=a.value,$=Q=>{const V=Nm(Q);return`shape[${V}]._zod.run({ value: input[${V}], issues: [] }, ctx)`};P.write("const input = payload.value;");const A=Object.create(null);let N=0;for(const Q of O.keys)A[Q]=`key_${N++}`;P.write("const newResult = {};");for(const Q of O.keys){const V=A[Q],W=Nm(Q),X=S[Q],te=((H=X==null?void 0:X._zod)==null?void 0:H.optin)==="optional",I=((G=X==null?void 0:X._zod)==null?void 0:G.optout)==="optional";P.write(`const ${V} = ${$(Q)};`),te&&I?P.write(`
        if (${V}.issues.length) {
          if (${W} in input) {
            payload.issues = payload.issues.concat(${V}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${W}, ...iss.path] : [${W}]
            })));
          }
        }
        
        if (${V}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${V}.value;
        }
        
      `):te?P.write(`
        if (${V}.issues.length) {
          payload.issues = payload.issues.concat(${V}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        
        if (${V}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${V}.value;
        }
        
      `):P.write(`
        const ${V}_present = ${W} in input;
        if (${V}.issues.length) {
          payload.issues = payload.issues.concat(${V}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        if (!${V}_present && !${V}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${W}]
          });
        }

        if (${V}_present) {
          if (${V}.value === undefined) {
            newResult[${W}] = undefined;
          } else {
            newResult[${W}] = ${V}.value;
          }
        }

      `)}P.write("payload.value = newResult;"),P.write("return payload;");const R=P.compile();return(Q,V)=>R(S,Q,V)};let d;const f=$a,m=!Qu.jitless,y=m&&ow.value,v=r.catchall;let b;e._zod.parse=(S,P)=>{b??(b=a.value);const O=S.value;return f(O)?m&&y&&(P==null?void 0:P.async)===!1&&P.jitless!==!0?(d||(d=c(r.shape)),S=d(S,P),v?Jg([],O,S,P,b,e):S):i(S,P):(S.issues.push({expected:"object",code:"invalid_type",input:O,inst:e}),S)}});function Dm(e,r,i,a){for(const d of e)if(d.issues.length===0)return r.value=d.value,r;const c=e.filter(d=>!co(d));return c.length===1?(r.value=c[0].value,c[0]):(r.issues.push({code:"invalid_union",input:r.value,inst:i,errors:e.map(d=>d.issues.map(f=>Cr(f,a,zr())))}),r)}const Db=M("$ZodUnion",(e,r)=>{tt.init(e,r),Ee(e._zod,"optin",()=>r.options.some(a=>a._zod.optin==="optional")?"optional":void 0),Ee(e._zod,"optout",()=>r.options.some(a=>a._zod.optout==="optional")?"optional":void 0),Ee(e._zod,"values",()=>{if(r.options.every(a=>a._zod.values))return new Set(r.options.flatMap(a=>Array.from(a._zod.values)))}),Ee(e._zod,"pattern",()=>{if(r.options.every(a=>a._zod.pattern)){const a=r.options.map(c=>c._zod.pattern);return new RegExp(`^(${a.map(c=>Xu(c.source)).join("|")})$`)}});const i=r.options.length===1?r.options[0]._zod.run:null;e._zod.parse=(a,c)=>{if(i)return i(a,c);let d=!1;const f=[];for(const m of r.options){const h=m._zod.run({value:a.value,issues:[]},c);if(h instanceof Promise)f.push(h),d=!0;else{if(h.issues.length===0)return h;f.push(h)}}return d?Promise.all(f).then(m=>Dm(m,a,e,c)):Dm(f,a,e,c)}}),Bb=M("$ZodIntersection",(e,r)=>{tt.init(e,r),e._zod.parse=(i,a)=>{const c=i.value,d=r.left._zod.run({value:c,issues:[]},a),f=r.right._zod.run({value:c,issues:[]},a);return d instanceof Promise||f instanceof Promise?Promise.all([d,f]).then(([h,y])=>Bm(i,h,y)):Bm(i,d,f)}});function zu(e,r){if(e===r)return{valid:!0,data:e};if(e instanceof Date&&r instanceof Date&&+e==+r)return{valid:!0,data:e};if(_i(e)&&_i(r)){const i=Object.keys(r),a=Object.keys(e).filter(d=>i.indexOf(d)!==-1),c={...e,...r};for(const d of a){const f=zu(e[d],r[d]);if(!f.valid)return{valid:!1,mergeErrorPath:[d,...f.mergeErrorPath]};c[d]=f.data}return{valid:!0,data:c}}if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return{valid:!1,mergeErrorPath:[]};const i=[];for(let a=0;a<e.length;a++){const c=e[a],d=r[a],f=zu(c,d);if(!f.valid)return{valid:!1,mergeErrorPath:[a,...f.mergeErrorPath]};i.push(f.data)}return{valid:!0,data:i}}return{valid:!1,mergeErrorPath:[]}}function Bm(e,r,i){const a=new Map;let c;for(const m of r.issues)if(m.code==="unrecognized_keys"){c??(c=m);for(const h of m.keys)a.has(h)||a.set(h,{}),a.get(h).l=!0}else e.issues.push(m);for(const m of i.issues)if(m.code==="unrecognized_keys")for(const h of m.keys)a.has(h)||a.set(h,{}),a.get(h).r=!0;else e.issues.push(m);const d=[...a].filter(([,m])=>m.l&&m.r).map(([m])=>m);if(d.length&&c&&e.issues.push({...c,keys:d}),co(e))return e;const f=zu(r.value,i.value);if(!f.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);return e.value=f.data,e}const Fb=M("$ZodEnum",(e,r)=>{tt.init(e,r);const i=Lg(r.entries),a=new Set(i);e._zod.values=a,e._zod.pattern=new RegExp(`^(${i.filter(c=>iw.has(typeof c)).map(c=>typeof c=="string"?Ba(c):c.toString()).join("|")})$`),e._zod.parse=(c,d)=>{const f=c.value;return a.has(f)||c.issues.push({code:"invalid_value",values:i,input:f,inst:e}),c}}),Ub=M("$ZodTransform",(e,r)=>{tt.init(e,r),e._zod.optin="optional",e._zod.parse=(i,a)=>{if(a.direction==="backward")throw new Ng(e.constructor.name);const c=r.transform(i.value,i);if(a.async)return(c instanceof Promise?c:Promise.resolve(c)).then(f=>(i.value=f,i.fallback=!0,i));if(c instanceof Promise)throw new fo;return i.value=c,i.fallback=!0,i}});function Fm(e,r){return r===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}const Qg=M("$ZodOptional",(e,r)=>{tt.init(e,r),e._zod.optin="optional",e._zod.optout="optional",Ee(e._zod,"values",()=>r.innerType._zod.values?new Set([...r.innerType._zod.values,void 0]):void 0),Ee(e._zod,"pattern",()=>{const i=r.innerType._zod.pattern;return i?new RegExp(`^(${Xu(i.source)})?$`):void 0}),e._zod.parse=(i,a)=>{if(r.innerType._zod.optin==="optional"){const c=i.value,d=r.innerType._zod.run(i,a);return d instanceof Promise?d.then(f=>Fm(f,c)):Fm(d,c)}return i.value===void 0?i:r.innerType._zod.run(i,a)}}),Wb=M("$ZodExactOptional",(e,r)=>{Qg.init(e,r),Ee(e._zod,"values",()=>r.innerType._zod.values),Ee(e._zod,"pattern",()=>r.innerType._zod.pattern),e._zod.parse=(i,a)=>r.innerType._zod.run(i,a)}),Zb=M("$ZodNullable",(e,r)=>{tt.init(e,r),Ee(e._zod,"optin",()=>r.innerType._zod.optin),Ee(e._zod,"optout",()=>r.innerType._zod.optout),Ee(e._zod,"pattern",()=>{const i=r.innerType._zod.pattern;return i?new RegExp(`^(${Xu(i.source)}|null)$`):void 0}),Ee(e._zod,"values",()=>r.innerType._zod.values?new Set([...r.innerType._zod.values,null]):void 0),e._zod.parse=(i,a)=>i.value===null?i:r.innerType._zod.run(i,a)}),qb=M("$ZodDefault",(e,r)=>{tt.init(e,r),e._zod.optin="optional",Ee(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(i,a)=>{if(a.direction==="backward")return r.innerType._zod.run(i,a);if(i.value===void 0)return i.value=r.defaultValue,i;const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(d=>Um(d,r)):Um(c,r)}});function Um(e,r){return e.value===void 0&&(e.value=r.defaultValue),e}const Vb=M("$ZodPrefault",(e,r)=>{tt.init(e,r),e._zod.optin="optional",Ee(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(i,a)=>(a.direction==="backward"||i.value===void 0&&(i.value=r.defaultValue),r.innerType._zod.run(i,a))}),Hb=M("$ZodNonOptional",(e,r)=>{tt.init(e,r),Ee(e._zod,"values",()=>{const i=r.innerType._zod.values;return i?new Set([...i].filter(a=>a!==void 0)):void 0}),e._zod.parse=(i,a)=>{const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(d=>Wm(d,e)):Wm(c,e)}});function Wm(e,r){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:r}),e}const Gb=M("$ZodCatch",(e,r)=>{tt.init(e,r),e._zod.optin="optional",Ee(e._zod,"optout",()=>r.innerType._zod.optout),Ee(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(i,a)=>{if(a.direction==="backward")return r.innerType._zod.run(i,a);const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(d=>(i.value=d.value,d.issues.length&&(i.value=r.catchValue({...i,error:{issues:d.issues.map(f=>Cr(f,a,zr()))},input:i.value}),i.issues=[],i.fallback=!0),i)):(i.value=c.value,c.issues.length&&(i.value=r.catchValue({...i,error:{issues:c.issues.map(d=>Cr(d,a,zr()))},input:i.value}),i.issues=[],i.fallback=!0),i)}}),Jb=M("$ZodPipe",(e,r)=>{tt.init(e,r),Ee(e._zod,"values",()=>r.in._zod.values),Ee(e._zod,"optin",()=>r.in._zod.optin),Ee(e._zod,"optout",()=>r.out._zod.optout),Ee(e._zod,"propValues",()=>r.in._zod.propValues),e._zod.parse=(i,a)=>{if(a.direction==="backward"){const d=r.out._zod.run(i,a);return d instanceof Promise?d.then(f=>ea(f,r.in,a)):ea(d,r.in,a)}const c=r.in._zod.run(i,a);return c instanceof Promise?c.then(d=>ea(d,r.out,a)):ea(c,r.out,a)}});function ea(e,r,i){return e.issues.length?(e.aborted=!0,e):r._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},i)}const Qb=M("$ZodReadonly",(e,r)=>{tt.init(e,r),Ee(e._zod,"propValues",()=>r.innerType._zod.propValues),Ee(e._zod,"values",()=>r.innerType._zod.values),Ee(e._zod,"optin",()=>{var i,a;return(a=(i=r.innerType)==null?void 0:i._zod)==null?void 0:a.optin}),Ee(e._zod,"optout",()=>{var i,a;return(a=(i=r.innerType)==null?void 0:i._zod)==null?void 0:a.optout}),e._zod.parse=(i,a)=>{if(a.direction==="backward")return r.innerType._zod.run(i,a);const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(Zm):Zm(c)}});function Zm(e){return e.value=Object.freeze(e.value),e}const Yb=M("$ZodCustom",(e,r)=>{kn.init(e,r),tt.init(e,r),e._zod.parse=(i,a)=>i,e._zod.check=i=>{const a=i.value,c=r.fn(a);if(c instanceof Promise)return c.then(d=>qm(d,i,a,e));qm(c,i,a,e)}});function qm(e,r,i,a){if(!e){const c={code:"custom",input:i,inst:a,path:[...a._zod.def.path??[]],continue:!a._zod.def.abort};a._zod.def.params&&(c.params=a._zod.def.params),r.issues.push(Ei(c))}}var Vm;class Kb{constructor(){this._map=new WeakMap,this._idmap=new Map}add(r,...i){const a=i[0];return this._map.set(r,a),a&&typeof a=="object"&&"id"in a&&this._idmap.set(a.id,r),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(r){const i=this._map.get(r);return i&&typeof i=="object"&&"id"in i&&this._idmap.delete(i.id),this._map.delete(r),this}get(r){const i=r._zod.parent;if(i){const a={...this.get(i)??{}};delete a.id;const c={...a,...this._map.get(r)};return Object.keys(c).length?c:void 0}return this._map.get(r)}has(r){return this._map.has(r)}}function Xb(){return new Kb}(Vm=globalThis).__zod_globalRegistry??(Vm.__zod_globalRegistry=Xb());const vi=globalThis.__zod_globalRegistry;function ek(e,r){return new e({type:"string",...fe(r)})}function tk(e,r){return new e({type:"string",format:"email",check:"string_format",abort:!1,...fe(r)})}function Hm(e,r){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...fe(r)})}function nk(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...fe(r)})}function rk(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...fe(r)})}function ok(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...fe(r)})}function ik(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...fe(r)})}function sk(e,r){return new e({type:"string",format:"url",check:"string_format",abort:!1,...fe(r)})}function ak(e,r){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...fe(r)})}function lk(e,r){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...fe(r)})}function ck(e,r){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...fe(r)})}function uk(e,r){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...fe(r)})}function dk(e,r){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...fe(r)})}function fk(e,r){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...fe(r)})}function pk(e,r){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...fe(r)})}function mk(e,r){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...fe(r)})}function hk(e,r){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...fe(r)})}function gk(e,r){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...fe(r)})}function xk(e,r){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...fe(r)})}function yk(e,r){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...fe(r)})}function vk(e,r){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...fe(r)})}function wk(e,r){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...fe(r)})}function bk(e,r){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...fe(r)})}function kk(e,r){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...fe(r)})}function Sk(e,r){return new e({type:"string",format:"date",check:"string_format",...fe(r)})}function jk(e,r){return new e({type:"string",format:"time",check:"string_format",precision:null,...fe(r)})}function $k(e,r){return new e({type:"string",format:"duration",check:"string_format",...fe(r)})}function zk(e){return new e({type:"unknown"})}function Ck(e,r){return new e({type:"never",...fe(r)})}function Yg(e,r){return new Yw({check:"max_length",...fe(r),maximum:e})}function Ca(e,r){return new Kw({check:"min_length",...fe(r),minimum:e})}function Kg(e,r){return new Xw({check:"length_equals",...fe(r),length:e})}function _k(e,r){return new eb({check:"string_format",format:"regex",...fe(r),pattern:e})}function Ek(e){return new tb({check:"string_format",format:"lowercase",...fe(e)})}function Pk(e){return new nb({check:"string_format",format:"uppercase",...fe(e)})}function Tk(e,r){return new rb({check:"string_format",format:"includes",...fe(r),includes:e})}function Ik(e,r){return new ob({check:"string_format",format:"starts_with",...fe(r),prefix:e})}function Rk(e,r){return new ib({check:"string_format",format:"ends_with",...fe(r),suffix:e})}function jo(e){return new sb({check:"overwrite",tx:e})}function Ak(e){return jo(r=>r.normalize(e))}function Ok(){return jo(e=>e.trim())}function Nk(){return jo(e=>e.toLowerCase())}function Lk(){return jo(e=>e.toUpperCase())}function Mk(){return jo(e=>rw(e))}function Dk(e,r,i){return new e({type:"array",element:r,...fe(i)})}function Bk(e,r,i){return new e({type:"custom",check:"custom",fn:r,...fe(i)})}function Fk(e,r){const i=Uk(a=>(a.addIssue=c=>{if(typeof c=="string")a.issues.push(Ei(c,a.value,i._zod.def));else{const d=c;d.fatal&&(d.continue=!1),d.code??(d.code="custom"),d.input??(d.input=a.value),d.inst??(d.inst=i),d.continue??(d.continue=!i._zod.def.abort),a.issues.push(Ei(d))}},e(a.value,a)),r);return i}function Uk(e,r){const i=new kn({check:"custom",...fe(r)});return i._zod.check=e,i}function Xg(e){let r=(e==null?void 0:e.target)??"draft-2020-12";return r==="draft-4"&&(r="draft-04"),r==="draft-7"&&(r="draft-07"),{processors:e.processors??{},metadataRegistry:(e==null?void 0:e.metadata)??vi,target:r,unrepresentable:(e==null?void 0:e.unrepresentable)??"throw",override:(e==null?void 0:e.override)??(()=>{}),io:(e==null?void 0:e.io)??"output",counter:0,seen:new Map,cycles:(e==null?void 0:e.cycles)??"ref",reused:(e==null?void 0:e.reused)??"inline",external:(e==null?void 0:e.external)??void 0}}function pt(e,r,i={path:[],schemaPath:[]}){var v,b;var a;const c=e._zod.def,d=r.seen.get(e);if(d)return d.count++,i.schemaPath.includes(e)&&(d.cycle=i.path),d.schema;const f={schema:{},count:1,cycle:void 0,path:i.path};r.seen.set(e,f);const m=(b=(v=e._zod).toJSONSchema)==null?void 0:b.call(v);if(m)f.schema=m;else{const S={...i,schemaPath:[...i.schemaPath,e],path:i.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(r,f.schema,S);else{const O=f.schema,$=r.processors[c.type];if(!$)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);$(e,r,O,S)}const P=e._zod.parent;P&&(f.ref||(f.ref=P),pt(P,r,S),r.seen.get(P).isParent=!0)}const h=r.metadataRegistry.get(e);return h&&Object.assign(f.schema,h),r.io==="input"&&jt(e)&&(delete f.schema.examples,delete f.schema.default),r.io==="input"&&"_prefault"in f.schema&&((a=f.schema).default??(a.default=f.schema._prefault)),delete f.schema._prefault,r.seen.get(e).schema}function e0(e,r){var f,m,h,y;const i=e.seen.get(r);if(!i)throw new Error("Unprocessed schema. This is a bug in Zod.");const a=new Map;for(const v of e.seen.entries()){const b=(f=e.metadataRegistry.get(v[0]))==null?void 0:f.id;if(b){const S=a.get(b);if(S&&S!==v[0])throw new Error(`Duplicate schema id "${b}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);a.set(b,v[0])}}const c=v=>{var $;const b=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){const A=($=e.external.registry.get(v[0]))==null?void 0:$.id,N=e.external.uri??(H=>H);if(A)return{ref:N(A)};const R=v[1].defId??v[1].schema.id??`schema${e.counter++}`;return v[1].defId=R,{defId:R,ref:`${N("__shared")}#/${b}/${R}`}}if(v[1]===i)return{ref:"#"};const P=`#/${b}/`,O=v[1].schema.id??`__schema${e.counter++}`;return{defId:O,ref:P+O}},d=v=>{if(v[1].schema.$ref)return;const b=v[1],{ref:S,defId:P}=c(v);b.def={...b.schema},P&&(b.defId=P);const O=b.schema;for(const $ in O)delete O[$];O.$ref=S};if(e.cycles==="throw")for(const v of e.seen.entries()){const b=v[1];if(b.cycle)throw new Error(`Cycle detected: #/${(m=b.cycle)==null?void 0:m.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const v of e.seen.entries()){const b=v[1];if(r===v[0]){d(v);continue}if(e.external){const P=(h=e.external.registry.get(v[0]))==null?void 0:h.id;if(r!==v[0]&&P){d(v);continue}}if((y=e.metadataRegistry.get(v[0]))==null?void 0:y.id){d(v);continue}if(b.cycle){d(v);continue}if(b.count>1&&e.reused==="ref"){d(v);continue}}}function t0(e,r){var m,h,y,v;const i=e.seen.get(r);if(!i)throw new Error("Unprocessed schema. This is a bug in Zod.");const a=b=>{const S=e.seen.get(b);if(S.ref===null)return;const P=S.def??S.schema,O={...P},$=S.ref;if(S.ref=null,$){a($);const N=e.seen.get($),R=N.schema;if(R.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0")?(P.allOf=P.allOf??[],P.allOf.push(R)):Object.assign(P,R),Object.assign(P,O),b._zod.parent===$)for(const G in P)G==="$ref"||G==="allOf"||G in O||delete P[G];if(R.$ref&&N.def)for(const G in P)G==="$ref"||G==="allOf"||G in N.def&&JSON.stringify(P[G])===JSON.stringify(N.def[G])&&delete P[G]}const A=b._zod.parent;if(A&&A!==$){a(A);const N=e.seen.get(A);if(N!=null&&N.schema.$ref&&(P.$ref=N.schema.$ref,N.def))for(const R in P)R==="$ref"||R==="allOf"||R in N.def&&JSON.stringify(P[R])===JSON.stringify(N.def[R])&&delete P[R]}e.override({zodSchema:b,jsonSchema:P,path:S.path??[]})};for(const b of[...e.seen.entries()].reverse())a(b[0]);const c={};if(e.target==="draft-2020-12"?c.$schema="https://json-schema.org/draft/2020-12/schema":e.target==="draft-07"?c.$schema="http://json-schema.org/draft-07/schema#":e.target==="draft-04"?c.$schema="http://json-schema.org/draft-04/schema#":e.target,(m=e.external)!=null&&m.uri){const b=(h=e.external.registry.get(r))==null?void 0:h.id;if(!b)throw new Error("Schema is missing an `id` property");c.$id=e.external.uri(b)}Object.assign(c,i.def??i.schema);const d=(y=e.metadataRegistry.get(r))==null?void 0:y.id;d!==void 0&&c.id===d&&delete c.id;const f=((v=e.external)==null?void 0:v.defs)??{};for(const b of e.seen.entries()){const S=b[1];S.def&&S.defId&&(S.def.id===S.defId&&delete S.def.id,f[S.defId]=S.def)}e.external||Object.keys(f).length>0&&(e.target==="draft-2020-12"?c.$defs=f:c.definitions=f);try{const b=JSON.parse(JSON.stringify(c));return Object.defineProperty(b,"~standard",{value:{...r["~standard"],jsonSchema:{input:_a(r,"input",e.processors),output:_a(r,"output",e.processors)}},enumerable:!1,writable:!1}),b}catch{throw new Error("Error converting schema to JSON.")}}function jt(e,r){const i=r??{seen:new Set};if(i.seen.has(e))return!1;i.seen.add(e);const a=e._zod.def;if(a.type==="transform")return!0;if(a.type==="array")return jt(a.element,i);if(a.type==="set")return jt(a.valueType,i);if(a.type==="lazy")return jt(a.getter(),i);if(a.type==="promise"||a.type==="optional"||a.type==="nonoptional"||a.type==="nullable"||a.type==="readonly"||a.type==="default"||a.type==="prefault")return jt(a.innerType,i);if(a.type==="intersection")return jt(a.left,i)||jt(a.right,i);if(a.type==="record"||a.type==="map")return jt(a.keyType,i)||jt(a.valueType,i);if(a.type==="pipe")return e._zod.traits.has("$ZodCodec")?!0:jt(a.in,i)||jt(a.out,i);if(a.type==="object"){for(const c in a.shape)if(jt(a.shape[c],i))return!0;return!1}if(a.type==="union"){for(const c of a.options)if(jt(c,i))return!0;return!1}if(a.type==="tuple"){for(const c of a.items)if(jt(c,i))return!0;return!!(a.rest&&jt(a.rest,i))}return!1}const Wk=(e,r={})=>i=>{const a=Xg({...i,processors:r});return pt(e,a),e0(a,e),t0(a,e)},_a=(e,r,i={})=>a=>{const{libraryOptions:c,target:d}=a??{},f=Xg({...c??{},target:d,io:r,processors:i});return pt(e,f),e0(f,e),t0(f,e)},Zk={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},qk=(e,r,i,a)=>{const c=i;c.type="string";const{minimum:d,maximum:f,format:m,patterns:h,contentEncoding:y}=e._zod.bag;if(typeof d=="number"&&(c.minLength=d),typeof f=="number"&&(c.maxLength=f),m&&(c.format=Zk[m]??m,c.format===""&&delete c.format,m==="time"&&delete c.format),y&&(c.contentEncoding=y),h&&h.size>0){const v=[...h];v.length===1?c.pattern=v[0].source:v.length>1&&(c.allOf=[...v.map(b=>({...r.target==="draft-07"||r.target==="draft-04"||r.target==="openapi-3.0"?{type:"string"}:{},pattern:b.source}))])}},Vk=(e,r,i,a)=>{i.not={}},Hk=(e,r,i,a)=>{},Gk=(e,r,i,a)=>{const c=e._zod.def,d=Lg(c.entries);d.every(f=>typeof f=="number")&&(i.type="number"),d.every(f=>typeof f=="string")&&(i.type="string"),i.enum=d},Jk=(e,r,i,a)=>{if(r.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},Qk=(e,r,i,a)=>{if(r.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},Yk=(e,r,i,a)=>{const c=i,d=e._zod.def,{minimum:f,maximum:m}=e._zod.bag;typeof f=="number"&&(c.minItems=f),typeof m=="number"&&(c.maxItems=m),c.type="array",c.items=pt(d.element,r,{...a,path:[...a.path,"items"]})},Kk=(e,r,i,a)=>{var y;const c=i,d=e._zod.def;c.type="object",c.properties={};const f=d.shape;for(const v in f)c.properties[v]=pt(f[v],r,{...a,path:[...a.path,"properties",v]});const m=new Set(Object.keys(f)),h=new Set([...m].filter(v=>{const b=d.shape[v]._zod;return r.io==="input"?b.optin===void 0:b.optout===void 0}));h.size>0&&(c.required=Array.from(h)),((y=d.catchall)==null?void 0:y._zod.def.type)==="never"?c.additionalProperties=!1:d.catchall?d.catchall&&(c.additionalProperties=pt(d.catchall,r,{...a,path:[...a.path,"additionalProperties"]})):r.io==="output"&&(c.additionalProperties=!1)},Xk=(e,r,i,a)=>{const c=e._zod.def,d=c.inclusive===!1,f=c.options.map((m,h)=>pt(m,r,{...a,path:[...a.path,d?"oneOf":"anyOf",h]}));d?i.oneOf=f:i.anyOf=f},eS=(e,r,i,a)=>{const c=e._zod.def,d=pt(c.left,r,{...a,path:[...a.path,"allOf",0]}),f=pt(c.right,r,{...a,path:[...a.path,"allOf",1]}),m=y=>"allOf"in y&&Object.keys(y).length===1,h=[...m(d)?d.allOf:[d],...m(f)?f.allOf:[f]];i.allOf=h},tS=(e,r,i,a)=>{const c=e._zod.def,d=pt(c.innerType,r,a),f=r.seen.get(e);r.target==="openapi-3.0"?(f.ref=c.innerType,i.nullable=!0):i.anyOf=[d,{type:"null"}]},nS=(e,r,i,a)=>{const c=e._zod.def;pt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType},rS=(e,r,i,a)=>{const c=e._zod.def;pt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType,i.default=JSON.parse(JSON.stringify(c.defaultValue))},oS=(e,r,i,a)=>{const c=e._zod.def;pt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType,r.io==="input"&&(i._prefault=JSON.parse(JSON.stringify(c.defaultValue)))},iS=(e,r,i,a)=>{const c=e._zod.def;pt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType;let f;try{f=c.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}i.default=f},sS=(e,r,i,a)=>{const c=e._zod.def,d=c.in._zod.traits.has("$ZodTransform"),f=r.io==="input"?d?c.out:c.in:c.out;pt(f,r,a);const m=r.seen.get(e);m.ref=f},aS=(e,r,i,a)=>{const c=e._zod.def;pt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType,i.readOnly=!0},n0=(e,r,i,a)=>{const c=e._zod.def;pt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType},lS=M("ZodISODateTime",(e,r)=>{wb.init(e,r),We.init(e,r)});function cS(e){return kk(lS,e)}const uS=M("ZodISODate",(e,r)=>{bb.init(e,r),We.init(e,r)});function dS(e){return Sk(uS,e)}const fS=M("ZodISOTime",(e,r)=>{kb.init(e,r),We.init(e,r)});function pS(e){return jk(fS,e)}const mS=M("ZodISODuration",(e,r)=>{Sb.init(e,r),We.init(e,r)});function hS(e){return $k(mS,e)}const gS=(e,r)=>{Ug.init(e,r),e.name="ZodError",Object.defineProperties(e,{format:{value:i=>gw(e,i)},flatten:{value:i=>hw(e,i)},addIssue:{value:i=>{e.issues.push(i),e.message=JSON.stringify(e.issues,$u,2)}},addIssues:{value:i=>{e.issues.push(...i),e.message=JSON.stringify(e.issues,$u,2)}},isEmpty:{get(){return e.issues.length===0}}})},Yt=M("ZodError",gS,{Parent:Error}),xS=td(Yt),yS=nd(Yt),vS=Fa(Yt),wS=Ua(Yt),bS=vw(Yt),kS=ww(Yt),SS=bw(Yt),jS=kw(Yt),$S=Sw(Yt),zS=jw(Yt),CS=$w(Yt),_S=zw(Yt),Gm=new WeakMap;function Za(e,r,i){const a=Object.getPrototypeOf(e);let c=Gm.get(a);if(c||(c=new Set,Gm.set(a,c)),!c.has(r)){c.add(r);for(const d in i){const f=i[d];Object.defineProperty(a,d,{configurable:!0,enumerable:!1,get(){const m=f.bind(this);return Object.defineProperty(this,d,{configurable:!0,writable:!0,enumerable:!0,value:m}),m},set(m){Object.defineProperty(this,d,{configurable:!0,writable:!0,enumerable:!0,value:m})}})}}}const nt=M("ZodType",(e,r)=>(tt.init(e,r),Object.assign(e["~standard"],{jsonSchema:{input:_a(e,"input"),output:_a(e,"output")}}),e.toJSONSchema=Wk(e,{}),e.def=r,e.type=r.type,Object.defineProperty(e,"_def",{value:r}),e.parse=(i,a)=>xS(e,i,a,{callee:e.parse}),e.safeParse=(i,a)=>vS(e,i,a),e.parseAsync=async(i,a)=>yS(e,i,a,{callee:e.parseAsync}),e.safeParseAsync=async(i,a)=>wS(e,i,a),e.spa=e.safeParseAsync,e.encode=(i,a)=>bS(e,i,a),e.decode=(i,a)=>kS(e,i,a),e.encodeAsync=async(i,a)=>SS(e,i,a),e.decodeAsync=async(i,a)=>jS(e,i,a),e.safeEncode=(i,a)=>$S(e,i,a),e.safeDecode=(i,a)=>zS(e,i,a),e.safeEncodeAsync=async(i,a)=>CS(e,i,a),e.safeDecodeAsync=async(i,a)=>_S(e,i,a),Za(e,"ZodType",{check(...i){const a=this.def;return this.clone(ir(a,{checks:[...a.checks??[],...i.map(c=>typeof c=="function"?{_zod:{check:c,def:{check:"custom"},onattach:[]}}:c)]}),{parent:!0})},with(...i){return this.check(...i)},clone(i,a){return sr(this,i,a)},brand(){return this},register(i,a){return i.add(this,a),this},refine(i,a){return this.check(bj(i,a))},superRefine(i,a){return this.check(kj(i,a))},overwrite(i){return this.check(jo(i))},optional(){return Ym(this)},exactOptional(){return lj(this)},nullable(){return Km(this)},nullish(){return Ym(Km(this))},nonoptional(i){return mj(this,i)},array(){return YS(this)},or(i){return tj([this,i])},and(i){return rj(this,i)},transform(i){return Xm(this,sj(i))},default(i){return dj(this,i)},prefault(i){return pj(this,i)},catch(i){return gj(this,i)},pipe(i){return Xm(this,i)},readonly(){return vj(this)},describe(i){const a=this.clone();return vi.add(a,{description:i}),a},meta(...i){if(i.length===0)return vi.get(this);const a=this.clone();return vi.add(a,i[0]),a},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(i){return i(this)}}),Object.defineProperty(e,"description",{get(){var i;return(i=vi.get(e))==null?void 0:i.description},configurable:!0}),e)),r0=M("_ZodString",(e,r)=>{rd.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(a,c,d)=>qk(e,a,c);const i=e._zod.bag;e.format=i.format??null,e.minLength=i.minimum??null,e.maxLength=i.maximum??null,Za(e,"_ZodString",{regex(...a){return this.check(_k(...a))},includes(...a){return this.check(Tk(...a))},startsWith(...a){return this.check(Ik(...a))},endsWith(...a){return this.check(Rk(...a))},min(...a){return this.check(Ca(...a))},max(...a){return this.check(Yg(...a))},length(...a){return this.check(Kg(...a))},nonempty(...a){return this.check(Ca(1,...a))},lowercase(a){return this.check(Ek(a))},uppercase(a){return this.check(Pk(a))},trim(){return this.check(Ok())},normalize(...a){return this.check(Ak(...a))},toLowerCase(){return this.check(Nk())},toUpperCase(){return this.check(Lk())},slugify(){return this.check(Mk())}})}),ES=M("ZodString",(e,r)=>{rd.init(e,r),r0.init(e,r),e.email=i=>e.check(tk(PS,i)),e.url=i=>e.check(sk(TS,i)),e.jwt=i=>e.check(bk(VS,i)),e.emoji=i=>e.check(ak(IS,i)),e.guid=i=>e.check(Hm(Jm,i)),e.uuid=i=>e.check(nk(ta,i)),e.uuidv4=i=>e.check(rk(ta,i)),e.uuidv6=i=>e.check(ok(ta,i)),e.uuidv7=i=>e.check(ik(ta,i)),e.nanoid=i=>e.check(lk(RS,i)),e.guid=i=>e.check(Hm(Jm,i)),e.cuid=i=>e.check(ck(AS,i)),e.cuid2=i=>e.check(uk(OS,i)),e.ulid=i=>e.check(dk(NS,i)),e.base64=i=>e.check(yk(WS,i)),e.base64url=i=>e.check(vk(ZS,i)),e.xid=i=>e.check(fk(LS,i)),e.ksuid=i=>e.check(pk(MS,i)),e.ipv4=i=>e.check(mk(DS,i)),e.ipv6=i=>e.check(hk(BS,i)),e.cidrv4=i=>e.check(gk(FS,i)),e.cidrv6=i=>e.check(xk(US,i)),e.e164=i=>e.check(wk(qS,i)),e.datetime=i=>e.check(cS(i)),e.date=i=>e.check(dS(i)),e.time=i=>e.check(pS(i)),e.duration=i=>e.check(hS(i))});function eu(e){return ek(ES,e)}const We=M("ZodStringFormat",(e,r)=>{De.init(e,r),r0.init(e,r)}),PS=M("ZodEmail",(e,r)=>{db.init(e,r),We.init(e,r)}),Jm=M("ZodGUID",(e,r)=>{cb.init(e,r),We.init(e,r)}),ta=M("ZodUUID",(e,r)=>{ub.init(e,r),We.init(e,r)}),TS=M("ZodURL",(e,r)=>{fb.init(e,r),We.init(e,r)}),IS=M("ZodEmoji",(e,r)=>{pb.init(e,r),We.init(e,r)}),RS=M("ZodNanoID",(e,r)=>{mb.init(e,r),We.init(e,r)}),AS=M("ZodCUID",(e,r)=>{hb.init(e,r),We.init(e,r)}),OS=M("ZodCUID2",(e,r)=>{gb.init(e,r),We.init(e,r)}),NS=M("ZodULID",(e,r)=>{xb.init(e,r),We.init(e,r)}),LS=M("ZodXID",(e,r)=>{yb.init(e,r),We.init(e,r)}),MS=M("ZodKSUID",(e,r)=>{vb.init(e,r),We.init(e,r)}),DS=M("ZodIPv4",(e,r)=>{jb.init(e,r),We.init(e,r)}),BS=M("ZodIPv6",(e,r)=>{$b.init(e,r),We.init(e,r)}),FS=M("ZodCIDRv4",(e,r)=>{zb.init(e,r),We.init(e,r)}),US=M("ZodCIDRv6",(e,r)=>{Cb.init(e,r),We.init(e,r)}),WS=M("ZodBase64",(e,r)=>{_b.init(e,r),We.init(e,r)}),ZS=M("ZodBase64URL",(e,r)=>{Pb.init(e,r),We.init(e,r)}),qS=M("ZodE164",(e,r)=>{Tb.init(e,r),We.init(e,r)}),VS=M("ZodJWT",(e,r)=>{Rb.init(e,r),We.init(e,r)}),HS=M("ZodUnknown",(e,r)=>{Ab.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Hk()});function Qm(){return zk(HS)}const GS=M("ZodNever",(e,r)=>{Ob.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Vk(e,i,a)});function JS(e){return Ck(GS,e)}const QS=M("ZodArray",(e,r)=>{Nb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Yk(e,i,a,c),e.element=r.element,Za(e,"ZodArray",{min(i,a){return this.check(Ca(i,a))},nonempty(i){return this.check(Ca(1,i))},max(i,a){return this.check(Yg(i,a))},length(i,a){return this.check(Kg(i,a))},unwrap(){return this.element}})});function YS(e,r){return Dk(QS,e,r)}const KS=M("ZodObject",(e,r)=>{Mb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Kk(e,i,a,c),Ee(e,"shape",()=>r.shape),Za(e,"ZodObject",{keyof(){return oj(Object.keys(this._zod.def.shape))},catchall(i){return this.clone({...this._zod.def,catchall:i})},passthrough(){return this.clone({...this._zod.def,catchall:Qm()})},loose(){return this.clone({...this._zod.def,catchall:Qm()})},strict(){return this.clone({...this._zod.def,catchall:JS()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(i){return cw(this,i)},safeExtend(i){return uw(this,i)},merge(i){return dw(this,i)},pick(i){return aw(this,i)},omit(i){return lw(this,i)},partial(...i){return fw(o0,this,i[0])},required(...i){return pw(i0,this,i[0])}})});function XS(e,r){const i={type:"object",shape:e??{},...fe(r)};return new KS(i)}const ej=M("ZodUnion",(e,r)=>{Db.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Xk(e,i,a,c),e.options=r.options});function tj(e,r){return new ej({type:"union",options:e,...fe(r)})}const nj=M("ZodIntersection",(e,r)=>{Bb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>eS(e,i,a,c)});function rj(e,r){return new nj({type:"intersection",left:e,right:r})}const Cu=M("ZodEnum",(e,r)=>{Fb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(a,c,d)=>Gk(e,a,c),e.enum=r.entries,e.options=Object.values(r.entries);const i=new Set(Object.keys(r.entries));e.extract=(a,c)=>{const d={};for(const f of a)if(i.has(f))d[f]=r.entries[f];else throw new Error(`Key ${f} not found in enum`);return new Cu({...r,checks:[],...fe(c),entries:d})},e.exclude=(a,c)=>{const d={...r.entries};for(const f of a)if(i.has(f))delete d[f];else throw new Error(`Key ${f} not found in enum`);return new Cu({...r,checks:[],...fe(c),entries:d})}});function oj(e,r){const i=Array.isArray(e)?Object.fromEntries(e.map(a=>[a,a])):e;return new Cu({type:"enum",entries:i,...fe(r)})}const ij=M("ZodTransform",(e,r)=>{Ub.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Qk(e,i),e._zod.parse=(i,a)=>{if(a.direction==="backward")throw new Ng(e.constructor.name);i.addIssue=d=>{if(typeof d=="string")i.issues.push(Ei(d,i.value,r));else{const f=d;f.fatal&&(f.continue=!1),f.code??(f.code="custom"),f.input??(f.input=i.value),f.inst??(f.inst=e),i.issues.push(Ei(f))}};const c=r.transform(i.value,i);return c instanceof Promise?c.then(d=>(i.value=d,i.fallback=!0,i)):(i.value=c,i.fallback=!0,i)}});function sj(e){return new ij({type:"transform",transform:e})}const o0=M("ZodOptional",(e,r)=>{Qg.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>n0(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function Ym(e){return new o0({type:"optional",innerType:e})}const aj=M("ZodExactOptional",(e,r)=>{Wb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>n0(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function lj(e){return new aj({type:"optional",innerType:e})}const cj=M("ZodNullable",(e,r)=>{Zb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>tS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function Km(e){return new cj({type:"nullable",innerType:e})}const uj=M("ZodDefault",(e,r)=>{qb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>rS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function dj(e,r){return new uj({type:"default",innerType:e,get defaultValue(){return typeof r=="function"?r():Dg(r)}})}const fj=M("ZodPrefault",(e,r)=>{Vb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>oS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function pj(e,r){return new fj({type:"prefault",innerType:e,get defaultValue(){return typeof r=="function"?r():Dg(r)}})}const i0=M("ZodNonOptional",(e,r)=>{Hb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>nS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function mj(e,r){return new i0({type:"nonoptional",innerType:e,...fe(r)})}const hj=M("ZodCatch",(e,r)=>{Gb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>iS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function gj(e,r){return new hj({type:"catch",innerType:e,catchValue:typeof r=="function"?r:()=>r})}const xj=M("ZodPipe",(e,r)=>{Jb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>sS(e,i,a,c),e.in=r.in,e.out=r.out});function Xm(e,r){return new xj({type:"pipe",in:e,out:r})}const yj=M("ZodReadonly",(e,r)=>{Qb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>aS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function vj(e){return new yj({type:"readonly",innerType:e})}const wj=M("ZodCustom",(e,r)=>{Yb.init(e,r),nt.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Jk(e,i)});function bj(e,r={}){return Bk(wj,e,r)}function kj(e,r){return Fk(e,r)}XS({name:eu().min(2,"Nome deve ter ao menos 2 caracteres"),phone:eu().min(8,"Telefone inválido"),interest:eu().min(1,"Selecione um interesse")});const od=nw(e=>({menuOpen:!1,setMenuOpen:r=>e({menuOpen:r}),toggleMenu:()=>e(r=>({menuOpen:!r.menuOpen})),contactInterest:"",setContactInterest:r=>e({contactInterest:r}),quizOpen:!1,openQuiz:()=>e({quizOpen:!0,quizStep:0,quizAnswers:{}}),closeQuiz:()=>e({quizOpen:!1}),quizStep:0,setQuizStep:r=>e({quizStep:r}),quizAnswers:{},setQuizAnswer:(r,i)=>e(a=>({quizAnswers:{...a.quizAnswers,[r]:i}})),resetQuiz:()=>e({quizStep:0,quizAnswers:{}})}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _u=function(){return _u=Object.assign||function(r){for(var i,a=1,c=arguments.length;a<c;a++){i=arguments[a];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(r[d]=i[d])}return r},_u.apply(this,arguments)};function Sj(e,r){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(i[a[c]]=e[a[c]]);return i}var po="",ki=null,ha=null,s0=null;function id(){po="",ki!==null&&ki.disconnect(),ha!==null&&(window.clearTimeout(ha),ha=null)}function eh(e){var r=["BUTTON","INPUT","SELECT","TEXTAREA"],i=["A","AREA"];return r.includes(e.tagName)&&!e.hasAttribute("disabled")||i.includes(e.tagName)&&e.hasAttribute("href")}function th(){var e=null;if(po==="#")e=document.body;else{var r=po.replace("#","");e=document.getElementById(r),e===null&&po==="#top"&&(e=document.body)}if(e!==null){s0(e);var i=e.getAttribute("tabindex");return i===null&&!eh(e)&&e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),i===null&&!eh(e)&&(e.blur(),e.removeAttribute("tabindex")),id(),!0}return!1}function jj(e){window.setTimeout(function(){th()===!1&&(ki===null&&(ki=new MutationObserver(th)),ki.observe(document,{attributes:!0,childList:!0,subtree:!0}),ha=window.setTimeout(function(){id()},e||1e4))},0)}function a0(e){return at.forwardRef(function(r,i){var a="";typeof r.to=="string"&&r.to.includes("#")?a="#"+r.to.split("#").slice(1).join("#"):typeof r.to=="object"&&typeof r.to.hash=="string"&&(a=r.to.hash);var c={};e===Mu&&(c.isActive=function(m,h){return m&&m.isExact&&h.hash===a});function d(m){id(),po=r.elementId?"#"+r.elementId:a,r.onClick&&r.onClick(m),po!==""&&!m.defaultPrevented&&m.button===0&&(!r.target||r.target==="_self")&&!(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)&&(s0=r.scroll||(function(h){return r.smooth?h.scrollIntoView({behavior:"smooth"}):h.scrollIntoView()}),jj(r.timeout))}var f=Sj(r,["scroll","smooth","timeout","elementId"]);return at.createElement(e,_u({},c,f,{onClick:d,ref:i}),r.children)})}var An=a0(or);a0(Mu);const $j=x.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;
  background: ${e=>e.$scrolled?"rgba(12, 20, 69, 0.97)":`linear-gradient(${e.$navBackground})`};
`,zj=x.div`
  margin: 0 auto;
  padding: 0 4rem;
  height: 68px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`,Cj=x(or)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  justify-self: start;
`,_j=x.span`
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
`,Ej=x.div`
  width: 36px;
  height: 36px;
  background: ${e=>e.$menuComplete?"linear-gradient(135deg, #2563eb, #0891b2)":"linear-gradient(135deg, #e632c824, #e269f87f)"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`,nh=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-self: center;

  @media (max-width: 1280px) {
    display: none;
  }
`,rh=x(or)`
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  color: ${e=>e.$active?"#ffffff":"rgba(255,255,255,0.7)"};
  transition: all 0.2s;

  ${e=>e.$color&&e.$active&&`
    background: linear-gradient(${e.$color});
  `}

  &:hover {
    color: white;
    ${e=>e.$color&&`
      background: linear-gradient(${e.$color});
    `}
  }
`,Pj=x.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: linear-gradient(${e=>e.$color});
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
`,Tj=x.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  justify-self: end;
`,Ij=x(An)`
  padding: 0.5rem 1.125rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 1280px) {
    display: none;
  }
`,Rj=x.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    display: flex;
  }
`,Aj=x.div`
  display: none;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0c1445;
    padding: 1.5rem;
    gap: 0.5rem;
    transform: ${e=>e.$open?"translateX(0)":"translateX(100%)"};
    transition: transform 0.3s ease;
    z-index: 99;
    overflow-y: auto;
  }
`,oh=x(An)`
  padding: 1rem 1.25rem;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${e=>e.$active?"white":"rgba(255,255,255,0.75)"};
  background: ${e=>e.$active?"rgba(37,99,235,0.35)":"transparent"};
  border: 1px solid ${e=>e.$active?"rgba(37,99,235,0.5)":"transparent"};
  transition: all 0.2s;
`,Oj=x.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: ${e=>e.$isOpen?`linear-gradient(${e.$color})`:"transparent"};

  ${e=>e.$isOpen&&`
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 0.5rem;
    box-shadow: 0 8px 20px -5px rgba(0,0,0,0.4);
  `}
`,Nj=x.button`
  padding: 1rem 1.25rem;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.$active||e.$isOpen?"white":"rgba(255,255,255,0.75)"};
  background: ${e=>e.$isOpen?"transparent":e.$active?`linear-gradient(${e.$color})`:"transparent"};
  border: 1px solid ${e=>e.$isOpen?"transparent":e.$active?"rgba(37,99,235,0.5)":"transparent"};
  transition: all 0.2s;
  cursor: pointer;
`,Lj=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1rem;
  margin-top: 0.25rem;
`,Mj=x(An)`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  color: ${e=>e.$active?"white":"rgba(255,255,255,0.75)"};
  background: ${e=>e.$active?"rgba(255,255,255,0.15)":"transparent"};
  transition: all 0.2s;

  &:hover {
    color: white;
    background: rgba(255,255,255,0.1);
  }
`,Dj=x.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Bj=x(An)`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`,na=[{to:"/",label:"Início",id:"home",subItems:[{to:"/#hero",label:"Soluções Digitais Completas"},{to:"/#o-que-fazemos",label:"O que fazemos"},{to:"/#recursos",label:"Recursos disponíveis"},{to:"/#como-funciona",label:"Como funciona"}],color:"160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%"},{label:"Sites & Sistemas Web",id:"web",subItems:[{to:"/web#hero",label:"Sites e Sistemas Web"},{to:"/web#web",label:"Tipos de sistemas web"},{to:"/web#recursos",label:"Recursos extras"}],color:"160deg, #0c1445 0%, #1e3a8a 100%"},{label:"Apps Mobile",id:"mobile",subItems:[{to:"/mobile#hero",label:"Aplicativos Mobile"},{to:"/mobile#mobile",label:"Plataformas disponíveis"},{to:"/mobile#perfis",label:"Perfis de usuário"},{to:"/mobile#exemplos",label:"Exemplos de uso"}],color:"160deg, #0a1930 0%, #0e7490 100%"},{label:"Softwares",id:"software",subItems:[{to:"/software#hero",label:"Softwares para PC"},{to:"/software#Softwares",label:"Sistemas operacionais"},{to:"/software#recursos",label:"Opções e recursos"}],color:"160deg, #1e1040 0%, #5b21b6 100%"},{label:"Sistemas Locais",id:"sistemas-locais",subItems:[{to:"/sistemas-locais#hero",label:"Sistemas Locais"},{to:"/sistemas-locais#Sistemas-Local",label:"O que é um sistema local?"},{to:"/sistemas-locais#Controle-Acesso",label:"Controle Acesso"}],color:"160deg, #042c1e 0%, #059669 100%"}],Fj=[{to:"/",label:"Início",color:"160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%"},{to:"/web",label:"Sites & Sistemas Web",color:"160deg, #0c1445 0%, #1e3a8a 100%"},{to:"/mobile",label:"Apps Mobile",color:"160deg, #0a1930 0%, #0e7490 100%"},{to:"/software",label:"Softwares",color:"160deg, #1e1040 0%, #5b21b6 100%"},{to:"/sistemas-locais",label:"Sistemas Locais",color:"160deg, #042c1e 0%, #059669 100%"}],ih=e=>{const i=e.getBoundingClientRect().top+window.scrollY-68;window.scrollTo({top:i,behavior:"smooth"})};function Uj(){var O;const e=dn(),{menuOpen:r,toggleMenu:i,setMenuOpen:a}=od(),[c,d]=_.useState(!1),[f,m]=_.useState(!0),[h,y]=_.useState(null);_.useRef(0),_.useEffect(()=>{const $=()=>d(window.scrollY>20);return window.addEventListener("scroll",$),()=>window.removeEventListener("scroll",$)},[]),_.useEffect(()=>{a(!1),y(null)},[e.pathname,a]);const v=$=>{y(h===$?null:$)};let S="160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%";for(const $ of na){const A=e.pathname===$.to||e.pathname==="/"+$.id,N=(O=$.subItems)==null?void 0:O.some(R=>R.to.split("#")[0]===e.pathname);if(A||N){S=$.color||S;break}}let P=S;if(h){const $=na.find(A=>A.id===h);$&&$.color&&(P=$.color)}return s.jsxs(s.Fragment,{children:[s.jsx($j,{$scrolled:c,$navBackground:P,children:s.jsxs(zj,{children:[s.jsxs(Cj,{to:"/",onClick:$=>{f||($.preventDefault(),m(!0))},children:[s.jsx(Ej,{as:"span",$menuComplete:f,onClick:$=>{$.preventDefault(),m(!f)},children:s.jsx(zi,{size:18,color:f?"white":"#41ff24"})}),s.jsx(_j,{children:f?"OG Labs":"OG Dev"})]}),f?s.jsx(nh,{children:Fj.map($=>s.jsx(rh,{$color:$.color,to:$.to,$active:e.pathname===$.to,children:$.label},$.to))}):s.jsx(nh,{children:na.map(($,A)=>{if($.subItems){const N=e.pathname===$.to||e.pathname==="/"+$.id,R=$.subItems.some(G=>G.to.split("#")[0]===e.pathname),H=N||R;return s.jsxs("div",{style:{position:"relative"},children:[s.jsxs(Dj,{onClick:()=>v($.id),style:{color:H?"#41ff24":"white"},children:[$.label," ",h===$.id?"▲":"▼"]}),h===$.id&&s.jsx(Pj,{$color:$.color,children:$.subItems.map(G=>s.jsx(Bj,{to:G.to,children:G.label},G.to))})]},A)}return s.jsx(rh,{to:$.to,$active:e.pathname===$.to,children:$.label},$.to)})}),s.jsxs(Tj,{children:[s.jsx(Ij,{to:"/#contato",scroll:ih,children:"Falar Conosco"}),s.jsx(Rj,{onClick:i,"aria-label":"Menu",children:r?s.jsx(Li,{size:24}):s.jsx(Tg,{size:24})})]})]})}),s.jsxs(Aj,{$open:r,children:[na.map($=>{if($.subItems){const A=h===$.id,N=e.pathname==="/"+$.id||$.subItems.some(R=>R.to.split("#")[0]===e.pathname);return s.jsxs(Oj,{$isOpen:A,$color:$.color,children:[s.jsxs(Nj,{$active:N,$isOpen:A,$color:$.color,onClick:()=>v($.id),children:[$.label,s.jsx("span",{children:A?"▲":"▼"})]}),A&&s.jsx(Lj,{children:$.subItems.map(R=>s.jsx(Mj,{to:R.to,$active:e.pathname===R.to.split("#")[0],onClick:()=>a(!1),children:R.label},R.to))})]},$.id)}return s.jsx(oh,{to:$.to,$active:e.pathname===$.to,onClick:()=>a(!1),children:$.label},$.to)}),s.jsx(oh,{to:"/#contato",scroll:ih,$active:!1,onClick:()=>a(!1),style:{marginTop:"1rem",background:"linear-gradient(135deg, #2563eb, #0891b2)",color:"white",textAlign:"center"},children:"Falar Conosco"})]})]})}const Wj=x.footer`
  background: #0c1445;
  color: rgba(255, 255, 255, 0.7);
  padding: 3rem 4rem 2rem;
  font-family: 'Inter', sans-serif;
`,Zj=x.div`
  max-width: 1366px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,qj=x.div``,Vj=x(or)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,Hj=x.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Gj=x.p`
  font-size: 0.875rem;
  line-height: 1.7;
  max-width: 280px;
`,tu=x.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: #60a5fa;
  }
`,sh=x.div``,ah=x.h4`
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,l0=`
  display: block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #60a5fa;
  }
`,ra=x(or)`${l0}`,oa=x(An)`${l0}`,Jj=x.div`
  max-width: 1366px;
  margin: 2.5rem auto 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,Qj=x.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;function Yj(){return s.jsxs(Wj,{children:[s.jsxs(Zj,{children:[s.jsxs(qj,{children:[s.jsxs(Vj,{to:"/",children:[s.jsx(Hj,{children:s.jsx(zi,{size:18,color:"white"})}),"OG Labs"]}),s.jsx(Gj,{children:"Transformamos ideias em soluções digitais completas — do site mais simples ao sistema mais sofisticado, sempre com linguagem clara e suporte real."}),s.jsxs(tu,{href:"mailto:contato@oglabs.com.br",children:[s.jsx(Sa,{size:15})," contato@oglabs.com.br"]}),s.jsxs(tu,{href:"tel:+5511999999999",children:[s.jsx(ja,{size:15})," (11) 99999-9999"]}),s.jsxs(tu,{href:"https://instagram.com",target:"_blank",children:[s.jsx(Q2,{size:15})," @oglabs"]})]}),s.jsxs(sh,{children:[s.jsx(ah,{children:"Soluções"}),s.jsx(ra,{to:"/web",children:"Sites & Sistemas Web"}),s.jsx(ra,{to:"/mobile",children:"Apps Mobile"}),s.jsx(ra,{to:"/software",children:"Softwares"}),s.jsx(ra,{to:"/sistemas-locais",children:"Sistemas Locais"})]}),s.jsxs(sh,{children:[s.jsx(ah,{children:"Recursos"}),s.jsx(oa,{to:"/#o-que-fazemos",children:"O que fazemos"}),s.jsx(oa,{to:"/#como-funciona",children:"Como funciona"}),s.jsx(oa,{to:"/#ia",children:"Inteligência Artificial"}),s.jsx(oa,{to:"/#contato",children:"Contato"})]})]}),s.jsx(Jj,{}),s.jsxs(Qj,{children:[s.jsxs("span",{children:["© ",new Date().getFullYear()," OG Labs. Todos os direitos reservados."]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[s.jsx(or,{to:"/styleguide",style:{color:"rgba(255,255,255,0.25)",fontSize:"0.75rem",textDecoration:"none",fontFamily:"'Inter',sans-serif"},children:"Design System"}),s.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"Feito com cuidado no Brasil 🇧🇷"})]})]})]})}const Kj=mt`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Xj=mt`
  from { opacity: 0; transform: translateY(32px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,c0=mt`
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
`,u0=mt`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;x.div`
  ${({$active:e})=>e&&se`
      animation: ${u0} 1s infinite;
    `}
`;const e$=x.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 18, 50, 0.72);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${Kj} 0.2s ease;
`,t$=x.div`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 32px 80px rgba(10, 18, 50, 0.35);
  animation: ${Xj} 0.3s ease;
  position: relative;

  &::-webkit-scrollbar { width: 0; }
`,n$=x.div`
  padding: 1.75rem 2rem 1.25rem;
  border-bottom: 1px solid #f0f4ff;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  border-radius: 24px 24px 0 0;
`,r$=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.125rem;
`,o$=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,i$=x.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
`,s$=x.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,lh=x.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: ${e=>e.$highlight?"#fef3c7":"#f0fdf4"};
  color: ${e=>e.$highlight?"#b45309":"#16a34a"};
  border: 1px solid ${e=>e.$highlight?"#fcd34d":"#bbf7d0"};
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.75rem;
${e=>e.$highlight&&se`
    animation: ${u0} 1.5s ease-in-out infinite;
  `}  
  font-weight: 700;
`,a$=x.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #fee2e2;
  background: #fef2f2;
  color: #dc2626;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #fecaca;
    border-color: #fca5a5;
    color: #991b1b;
  }

  &:active {
    transform: scale(0.95);
  }
`,l$=x.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  border: 1px solid #e2eaff;
  background: white;
  color: #4b5684;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f4ff;
    color: #0c1445;
  }
`,c$=x.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #f0f4ff;
  color: #4b5684;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover { background: #e2eaff; }
`,u$=x.div`
  height: 4px;
  background: #e2eaff;
  border-radius: 2px;
  overflow: hidden;
`,d$=x.div`
  height: 100%;
  width: ${e=>e.$pct}%;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  border-radius: 2px;
  transition: width 0.4s ease;
`,f$=x.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #717182;
  margin-top: 0.5rem;
`,p$=x.div`
  padding: 2rem 2rem 1.5rem;
  animation: ${c0} 0.3s ease;
`,m$=x.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
`,h$=x.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c1445;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`,g$=x.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #717182;
  line-height: 1.6;
  margin-bottom: 1.75rem;
`,x$=x.div`
  display: grid;
  grid-template-columns: ${e=>e.$cols===2?"1fr 1fr":"1fr"};
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,y$=x.button`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 0.9rem 1.1rem;
  border-radius: 12px;
  border: 2px solid ${e=>e.$selected?"#2563eb":"#e8eef8"};
  background: ${e=>e.$selected?"#eff6ff":"white"};
  cursor: pointer;
  text-align: left;
  transition: all 0.18s;
  position: relative;

  &:hover {
    border-color: ${e=>e.$selected?"#2563eb":"#c7d9f5"};
    background: ${e=>e.$selected?"#eff6ff":"#f8faff"};
    transform: translateY(-1px);
  }

  ${e=>e.$selected&&se`
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    `}
`,v$=x.span`
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 1px;
`,w$=x.div`
  flex: 1;
`,b$=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.$selected?"#1d4ed8":"#0c1445"};
  margin-bottom: 0.2rem;
  line-height: 1.3;
`,k$=x.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #717182;
  line-height: 1.5;
`,S$=x.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 100px;
  background: #dcfce7;
  color: #166534;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 1px;
`,j$=x.div`
  position: absolute;
  top: 0.6rem;
  right: 0.75rem;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s;
  color: #2563eb;
`,$$=x.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,z$=x.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.625rem 1.125rem;
  border-radius: 10px;
  border: 1.5px solid #e2eaff;
  background: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5684;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #c7d9f5;
    color: #0c1445;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,C$=x.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.625rem 1.375rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  flex: 1;
  justify-content: center;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,_$=x.div`
  padding: 2rem;
  animation: ${c0} 0.3s ease;
`,E$=x.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`,P$=x.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0c1445;
  text-align: center;
  margin-bottom: 0.5rem;
`,T$=x.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  text-align: center;
  line-height: 1.65;
  margin-bottom: 1.75rem;
`,I$=x.div`
  background: #f0f4ff;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(37, 99, 235, 0.12);
`,R$=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,A$=x.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,O$=x.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  line-height: 1.5;
`,N$=x.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 12px;
  padding: 1.125rem 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`,L$=x.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
`,M$=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
`,D$=x.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: #7dd3fc;
  background: rgba(125, 211, 252, 0.15);
  border: 1px solid rgba(125, 211, 252, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
`,B$=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #16a34a, #15803d);
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }
`,F$=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.625rem;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #717182;
  cursor: pointer;
  width: 100%;
  margin-top: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: #0c1445;
  }
`,to=[{key:"goal",emoji:"🤔",question:"Pra começo de conversa — o que você precisa?",hint:"Escolha seu principal objetivo. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🌐",title:"Um lugar meu na internet",prePrice:1,desc:"Só quero que as pessoas me encontrem no Google e saibam o que faço.",value:"presence",badge:"Mais econômico"},{emoji:"📋",title:"Controlar meu negócio",prePrice:4,desc:"Quero organizar clientes, pedidos, estoque, vendas — ficou bagunçado.",value:"management"},{emoji:"📱",title:"Um aplicativo no celular",prePrice:6,desc:"Quero que meus clientes ou equipe usem um app nativo.",value:"mobile"},{emoji:"🤷",title:"Ainda não sei ao certo",prePrice:0,desc:"Tenho uma ideia mas preciso de ajuda para entender o que preciso.",value:"unsure"}]},{key:"content",emoji:"🎯",question:"O que você quer fazer com isso?",hint:"Você pode selecionar mais de uma opção — escolha tudo que se aplica.",cols:1,multi:!0,options:[{emoji:"📣",title:"Só mostrar o que faço e meu contato",prePrice:1,desc:"Uma página bonitinha para as pessoas verem e me chamarem.",value:"showcase",badge:"Super simples"},{emoji:"🛒",title:"Vender coisas pela internet",prePrice:4,desc:"Produtos ou serviços — o cliente escolhe e paga online.",value:"sell"},{emoji:"👥",title:"Organizar clientes e pedidos",prePrice:5,desc:"Quero saber quem comprou o quê, acompanhar pedidos, histórico.",value:"crm"},{emoji:"📊",title:"Controlar estoque e equipe",prePrice:7,desc:"Quantidade de produto, quem vendeu, relatório do dia — esse tipo de coisa.",value:"erp"}]},{key:"login",emoji:"🔐",question:"Vai ter alguém fazendo login no sistema?",hint:"Login = entrar com usuário e senha pra ver a própria área. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🚫",title:"Não, é só vitrine",prePrice:0,desc:"As pessoas só olham — não precisam criar conta nem entrar com senha.",value:"none",badge:"Mais simples"},{emoji:"👤",title:"Só minha equipe entra",prePrice:3,desc:"É um sistema interno — só eu e minha equipe vamos usar.",value:"team"},{emoji:"🏪",title:"Clientes entram também",prePrice:5,desc:"Meu cliente vai ter uma conta para acompanhar pedidos, histórico etc.",value:"clients"},{emoji:"🏢",title:"Clientes E equipe, com telas diferentes",prePrice:8,desc:"O cliente vê os pedidos dele. O vendedor vê tudo. O gerente vê mais ainda.",value:"roles"}]},{key:"platform",emoji:"📲",question:"Onde você quer que isso funcione?",hint:"Você só pode selecionar uma opção — escolha a plataforma principal.",cols:2,multi:!1,options:[{emoji:"💻",title:"No computador",prePrice:3,desc:"Site ou sistema acessado pelo navegador.",value:"web"},{emoji:"📱",title:"No celular",prePrice:6,desc:"App para iPhone e/ou Android.",value:"mobile"},{emoji:"🔄",title:"Nos dois, juntos",prePrice:8,desc:"Site e app sincronizados em tempo real.",value:"both"},{emoji:"🖥️",title:"Programa instalado no PC",prePrice:4,desc:"Software que fica no computador da empresa.",value:"desktop"}]},{key:"database",emoji:"🗃️",question:"Precisa guardar informações?",hint:"Informações = cadastro de clientes, histórico de pedidos, estoque... Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🙅",title:"Não, só quero mostrar o que faço",prePrice:0,desc:"Sem banco de dados — só conteúdo visual mesmo.",value:"none",badge:"Mais barato"},{emoji:"📝",title:"Sim, coisas simples",prePrice:2,desc:"Guardar alguns cadastros, formulários de contato, dados básicos.",value:"basic"},{emoji:"📦",title:"Sim, bastante coisa",prePrice:6,desc:"Clientes, pedidos, produtos, histórico, relatórios — tudo isso.",value:"full"}]},{key:"notifications",emoji:"🔔",question:"Quer avisar as pessoas automaticamente?",hint:"Você pode selecionar mais de uma opção — escolha os canais que faz sentido.",cols:1,multi:!0,options:[{emoji:"🚫",title:"Não preciso disso",prePrice:0,desc:"Sem notificações por enquanto.",value:"none"},{emoji:"📧",title:"Por e-mail está bom",prePrice:2,desc:"Recebem um e-mail quando algo importante acontece.",value:"email"},{emoji:"📲",title:"No celular mesmo",prePrice:5,desc:"Aquela notificação que aparece na tela do celular (push).",value:"push"}]},{key:"chatbot",emoji:"🤖",question:"Quer um robozinho que responda seus clientes?",hint:"Ele responde perguntas comuns, 24 horas por dia. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🙅",title:"Não preciso disso agora",prePrice:0,desc:"Prefiro responder pessoalmente.",value:"no"},{emoji:"🤔",title:"Seria interessante no futuro",prePrice:0,desc:"Não agora, mas pode ser que eu queira depois.",value:"maybe"},{emoji:"⚡",title:"Sim! Quero atendimento automático 24h",prePrice:6,desc:"Chatbot com IA que responde clientes mesmo quando estou dormindo.",value:"yes"}]},{key:"timeline",emoji:"📅",question:"Quando você precisa disso pronto?",hint:"Saber o prazo ajuda a gente a planejar melhor. Você só pode selecionar uma opção.",cols:2,multi:!1,options:[{emoji:"🐢",title:"Sem pressa",prePrice:0,desc:"Posso esperar, quero fazer certo.",value:"no-rush"},{emoji:"📅",title:"Nos próximos meses",prePrice:1,desc:"Em 2 a 4 meses está ótimo.",value:"months"},{emoji:"⚡",title:"Rápido!",prePrice:3,desc:"Preciso em menos de 1 mês.",value:"fast"},{emoji:"🔥",title:"Urgente!",prePrice:5,desc:"Para ontem — é prioritário.",value:"urgent"}]},{key:"budget",emoji:"💰",question:"Qual é sua ideia de investimento?",hint:"Sem compromisso — é só pra gente te dar a proposta mais adequada. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"💚",title:"Quero o mais econômico possível",prePrice:1,desc:"Meu orçamento é limitado — só o essencial.",value:"low"},{emoji:"💛",title:"Consigo investir no que precisa",prePrice:3,desc:"Quero fazer certo, estou disposto a investir.",value:"mid"},{emoji:"💎",title:"Custo não é o problema principal",prePrice:6,desc:"Quero qualidade — o mais completo possível.",value:"high"}]}];function U$(e){const{goal:r,content:i,login:a,platform:c,database:d,notifications:f,chatbot:m,timeline:h,budget:y}=e,v=R=>Array.isArray(i)?i.includes(R):i===R,b=R=>Array.isArray(f)?f.includes(R):f===R,S=(r==="presence"||v("showcase"))&&a==="none"&&d==="none",P=c==="mobile"||c==="both"||r==="mobile",O=b("push");b("email");const $=m==="yes",A=a==="roles",N=d==="full";return S?{emoji:"🌐",profile:"Site Simples — One Page",description:"Perfeito! Você precisa de uma página bonita, rápida e otimizada para aparecer no Google.",features:["Uma página completa com seu contato e serviços","Otimizado para SEO — aparece no Google","Funciona perfeitamente no celular e no computador","Formulário de contato direto","Carregamento ultrarrápido"],price:"A partir de R$ 800",tag:"Mais econômico"}:A&&P&&O&&$?{emoji:"🚀",profile:"Sistema Completo — Plano Premium",description:"Você quer o sistema mais robusto: site, app, login por perfil, notificações e IA integrada.",features:["Site responsivo + App para iOS e Android","Login com perfis diferentes (cliente, vendedor, gerente)","Banco de dados completo na nuvem com segurança","Notificações push no celular em tempo real","Chatbot com IA para atendimento 24h","Sincronização em tempo real entre plataformas","Relatórios e dashboards avançados"],price:"Sob consulta",tag:"Plano Premium"}:P&&(A||N)?{emoji:"📱",profile:"App + Sistema Integrado",description:"Você quer um app profissional conectado a um sistema com banco de dados robusto.",features:["App nativo para iOS e/ou Android","Sistema web integrado em tempo real","Banco de dados na nuvem com backup automático",A?"Login com perfis diferentes":"Login de usuário",O?"Notificações push no celular":"",$?"Chatbot com IA para atendimento":"","Sincronização automática entre dispositivos"].filter(Boolean),price:"A partir de R$ 8.000",tag:"Intermediário a avançado"}:N||A||v("erp")||v("crm")?{emoji:"🏢",profile:"Sistema de Gestão Web",description:"Você precisa de um sistema completo para gerenciar seu negócio com eficiência.",features:["Sistema web completo e intuitivo","Banco de dados na nuvem com segurança enterprise",A?"Perfis: cliente, vendedor, gerente com permissões específicas":"Login de usuário","Relatórios e dashboards customizáveis",O?"Notificações automáticas":"",$?"Chatbot com IA para atendimento":"","Backup automático diário"].filter(Boolean),price:"A partir de R$ 5.000",tag:"Intermediário"}:r==="mobile"||c==="mobile"?{emoji:"📱",profile:"Aplicativo Mobile",description:"Um app para iPhone e/ou Android — pode ser simples ou com banco de dados integrado.",features:["App nativo para iOS e/ou Android",d!=="none"?"Banco de dados integrado com sincronização":"Funciona offline com sincronização quando conectado",a!=="none"?"Sistema de login seguro":"Sem necessidade de login",O?"Notificações no celular":"","Interface otimizada para mobile"].filter(Boolean),price:"A partir de R$ 4.000",tag:"Varia conforme recursos"}:{emoji:"💼",profile:"Sistema Web com Login",description:"Um sistema profissional com login, banco de dados e controle de usuários.",features:["Sistema web completo e responsivo","Login e cadastro de usuários com segurança","Banco de dados seguro na nuvem","Acessível em qualquer computador ou navegador",O?"Notificações automáticas":"","Suporte técnico incluído"].filter(Boolean),price:"A partir de R$ 3.500",tag:"Intermediário"}}function W$(e,r){const i=["Olá! Fiz o questionário no site e gostaria de saber mais.",`Perfil identificado: *${r}*`,e.goal?`Objetivo: ${e.goal}`:"",e.platform?`Plataforma: ${e.platform}`:"",e.timeline?`Prazo: ${e.timeline}`:"",e.budget?`Orçamento: ${e.budget}`:""].filter(Boolean).join(`
`);return encodeURIComponent(i)}function Z$(){const{quizOpen:e,closeQuiz:r,quizStep:i,setQuizStep:a,quizAnswers:c,setQuizAnswer:d,resetQuiz:f}=od(),m=to.length,h=i>=m,y=to[i],v=y?c[y.key]:void 0,b=h?U$(c):null;if(_.useEffect(()=>{const te=I=>{I.key==="Escape"&&r()};return e&&(document.addEventListener("keydown",te),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",te),document.body.style.overflow=""}},[e,r]),!e)return null;const S=te=>{if(y.multi){const I=Array.isArray(v)?v:[];if(te==="none"||te==="no")d(y.key,[te]);else{const me=I.filter(Pe=>Pe!=="none"&&Pe!=="no");I.includes(te)?d(y.key,me.filter(Pe=>Pe!==te)):d(y.key,[...me,te])}}else d(y.key,[te])},P=()=>{!v||Array.isArray(v)&&v.length===0||a(i+1)},O=()=>{a(m)},$=()=>{i>0&&a(i-1)},A=()=>{f()},N=()=>{window.confirm("Tem certeza que quer limpar todas as respostas e recomeçar?")&&(f(),a(0))},R=te=>{let I=0;for(let me=0;me<=te&&me<to.length;me++){const Pe=to[me],xe=c[Pe.key];if(xe)if(Array.isArray(xe))xe.forEach(_e=>{const $e=Pe.options.find(Ve=>Ve.value===_e);$e&&(I+=$e.prePrice)});else{const _e=Pe.options.find($e=>$e.value===xe);_e&&(I+=_e.prePrice)}}return I},H=()=>R(to.length-1),G=R(i),Q=H(),V=to.some((te,I)=>I<=i?!1:!!c[te.key]),W=h?100:i/m*100,X=y!=null&&y.multi?Array.isArray(v)&&v.length>0:!!v;return s.jsx(e$,{onClick:te=>{te.target===te.currentTarget&&r()},children:s.jsxs(t$,{onClick:te=>te.stopPropagation(),children:[s.jsxs(n$,{children:[s.jsxs(r$,{children:[s.jsxs(o$,{children:[s.jsx(i$,{children:"Faça seu orçamento"}),s.jsxs(s$,{children:[V&&s.jsxs(lh,{children:[s.jsx(Tm,{size:12}),"Até aqui: ",G]}),s.jsxs(lh,{$highlight:Q>G,children:[s.jsx(Tm,{size:12}),"Total: ",Q]})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[i<m&&s.jsxs(l$,{onClick:O,children:["Pular tudo",s.jsx(k2,{size:12})]}),Q>0&&s.jsxs(a$,{onClick:N,children:[s.jsx(E5,{size:12}),"Limpar"]}),s.jsx(c$,{onClick:r,"aria-label":"Fechar",children:s.jsx(Li,{size:15})})]})]}),s.jsx(u$,{children:s.jsx(d$,{$pct:W})}),s.jsx(f$,{children:h?"✅ Pronto! Veja o seu perfil abaixo":`Pergunta ${i+1} de ${m}`})]}),!h&&y&&s.jsxs(s.Fragment,{children:[s.jsxs(p$,{children:[s.jsx(m$,{children:y.emoji}),s.jsx(h$,{children:y.question}),s.jsx(g$,{children:y.hint}),s.jsx(x$,{$cols:y.cols,children:y.options.map(te=>{const I=Array.isArray(v)?v.includes(te.value):v===te.value;return s.jsxs(y$,{$selected:I,onClick:()=>S(te.value),children:[s.jsx(v$,{children:te.emoji}),s.jsxs(w$,{children:[s.jsx(b$,{$selected:I,children:te.title}),s.jsx(k$,{children:te.desc})]}),te.badge&&!I&&s.jsx(S$,{children:te.badge}),s.jsx(j$,{$visible:I,children:s.jsx(xo,{size:16})})]},te.value)})})]}),s.jsxs($$,{children:[s.jsxs(z$,{onClick:$,disabled:i===0,children:[s.jsx(w2,{size:14})," Voltar"]}),s.jsxs(C$,{onClick:P,disabled:!X,children:[i===m-1?"Ver resultado":"Próxima",s.jsx(ft,{size:14})]})]})]}),h&&b&&s.jsxs(_$,{children:[s.jsx(E$,{children:b.emoji}),s.jsx(P$,{children:b.profile}),s.jsx(T$,{children:b.description}),s.jsxs(I$,{children:[s.jsx(R$,{children:"O que estaria incluído"}),s.jsx(A$,{children:b.features.map(te=>s.jsxs(O$,{children:[s.jsx(xo,{size:15,color:"#2563eb",style:{flexShrink:0,marginTop:2}}),te]},te))})]}),s.jsxs(N$,{children:[s.jsxs("div",{children:[s.jsx(L$,{children:"Estimativa de investimento"}),s.jsx(M$,{children:b.price})]}),s.jsx(D$,{children:b.tag})]}),s.jsxs(B$,{href:`https://wa.me/5511999999999?text=${W$(c,b.profile)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(g5,{size:18})," Falar com a gente no WhatsApp"]}),s.jsx(F$,{onClick:A,children:"Recomeçar o questionário"})]})]})})}const q$=mt`
  0%, 100% { box-shadow: 0 4px 24px rgba(245, 158, 11, 0.4), 0 0 0 0 rgba(245, 158, 11, 0.4); }
  50%       { box-shadow: 0 4px 24px rgba(245, 158, 11, 0.4), 0 0 0 8px rgba(245, 158, 11, 0); }
`,V$=x.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 150;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.875rem 1.375rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  animation: ${q$} 3s ease-in-out infinite;
  transition: transform 0.2s, opacity 0.2s;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35);

  &:hover {
    transform: translateY(-3px) scale(1.03);
    opacity: 0.95;
  }

  &:focus-visible {
    outline: 2px solid #f59e0b;
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    bottom: 1.25rem;
    right: 1.25rem;
    padding: 0.75rem 1.125rem;
    font-size: 0.825rem;
  }
`;function H$(){const{openQuiz:e}=od();return s.jsxs(V$,{onClick:e,"aria-label":"Faça um orçamento",children:[s.jsx(C2,{size:17}),"Faça um Orçamento"]})}const G$=[{to:"/web",icon:s.jsx(vo,{size:24,color:"white"}),cor:"37, 99, 235",color:"linear-gradient(135deg, rgb(37, 99, 235), #1d4ed8)",title:"Sites e Sistemas Web",desc:"Do site simples para aparecer no Google até sistemas completos com login, banco de dados e integração em tempo real."},{to:"/mobile",icon:s.jsx(rr,{size:24,color:"white"}),cor:"8, 145, 178",color:"linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",title:"Aplicativos Mobile",desc:"Apps para iPhone e Android — desde o app simples que funciona sem internet até o sistema completo com login e notificações."},{to:"/software",icon:s.jsx(Ci,{size:24,color:"white"}),cor:"124, 58, 237",color:"linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",title:"Softwares para PC",desc:"Programas para Windows, Mac ou Linux — para rodar em um computador ou em toda uma rede de empresa."},{to:"/sistemas-locais",icon:s.jsx(La,{size:24,color:"white"}),cor:"5, 150, 105",color:"linear-gradient(135deg, rgb(5, 150, 105), #047857)",title:"Sistemas Locais",desc:"Sistemas que rodam dentro da sua empresa, com banco de dados, acesso por usuário e senha, sem depender da internet."}],J$=[{icon:s.jsx($r,{size:20,color:"#2563eb"}),title:"Segurança Real",desc:"Autenticação com AWS Cognito, criptografia de dados e padrões profissionais de segurança."},{icon:s.jsx(Mi,{size:20,color:"#2563eb"}),title:"Tempo Real",desc:"Atualizações instantâneas entre usuários — sem precisar atualizar a página."},{icon:s.jsx(So,{size:20,color:"#2563eb"}),title:"Notificações Push",desc:"Avise seus clientes via Firebase — no celular, mesmo com o app fechado."},{icon:s.jsx(_g,{size:20,color:"#2563eb"}),title:"Nuvem AWS",desc:"Infraestrutura confiável, escalável e com backup automático na Amazon."},{icon:s.jsx(yo,{size:20,color:"#2563eb"}),title:"Banco de Dados",desc:"Seus dados organizados e seguros — acessíveis de qualquer dispositivo."},{icon:s.jsx(Ma,{size:20,color:"#2563eb"}),title:"Multiusuário",desc:"Perfis de cliente, vendedor, gerente — cada um vê apenas o que precisa."}];x(An)`
  display: inline-flex;

  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;const Q$=x("button")`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;x("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;const ch={PrimaryBtn:Q$},Y$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
`,K$=x.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(29, 78, 216, 0.08);
`,X$=x.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,e4=x.div``,t4=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,n4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.6;
`,no={Grid:Y$,Item:K$,IconWrap:X$,Text:e4,Title:t4,Desc:n4},r4=x.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,o4=x.div``,i4=x.span`
  display: inline-block;
  background: rgba(8, 145, 178, 0.2);
  border: 1px solid rgba(8, 145, 178, 0.4);
  color: #7dd3fc;
  font-family: "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
`,s4=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  line-height: 1.25;
  margin-bottom: 0.875rem;
`,a4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 520px;
`,l4=x(An)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #0891b2, #2563eb);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,ro={Banner:r4,Text:o4,Badge:i4,Title:s4,Desc:a4,Button:l4},c4=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
`,u4=x.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,d4=x.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
`,f4=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #0c1445;
`,p4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.65;
`,pi={Grid:c4,Step:u4,Number:d4,Title:f4,Desc:p4},m4=mt`
 from {
    transform: scale(1);
    box-shadow:  0px 4px 30px rgba(76, 127, 239, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px  rgba(12, 20, 69, 0);
  }
`,h4=mt`
  0% {
  background: rgba(15, 1, 86, 0.1);
  }
  100% {
  background: rgba(15, 1, 86, 0);
  }
`,g4=x.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10;

  ${({$visible:e})=>e&&se`
      z-index: 201;
      animation: ${h4} 2s linear;
    `}

  transition: opacity 300ms ease;
`,x4=x.div`
  // max-width: 1366px;
  margin: 0 auto;
`,y4=x.section`
  position: relative;
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 5rem 12rem;
  text-align: center;


  ${({$highlight:e})=>e&&se`
      z-index: 20;
      animation: ${m4} 3s linear;
    `}
`,v4=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`,w4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
`,b4=x.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,oo={Section:y4,Container:x4,Title:v4,Subtitle:w4,Actions:b4,PageOverlay:g4},Di={home:{background:"linear-gradient(160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%)",badgeBackground:"rgba(37, 99, 235, 0.2)",badgeBorder:"rgba(37, 99, 235, 0.4)",badgeColor:"#93c5fd",titleAccent:"linear-gradient(90deg, #60a5fa, #0891b2)",topGlow:"rgba(37, 99, 235, 0.15)",bottomGlow:"rgba(8, 145, 178, 0.12)"},web:{background:"linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%)",badgeBackground:"rgba(37, 99, 235, 0.2)",badgeBorder:"rgba(37, 99, 235, 0.4)",badgeColor:"#93c5fd"},mobile:{background:"linear-gradient(160deg, #0a1930 0%, #0e7490 100%)",badgeBackground:"rgba(8, 145, 178, 0.25)",badgeBorder:"rgba(8, 145, 178, 0.45)",badgeColor:"#7dd3fc"},software:{background:"linear-gradient(160deg, #1e1040 0%, #5b21b6 100%)",badgeBackground:"rgba(124, 58, 237, 0.25)",badgeBorder:"rgba(124, 58, 237, 0.45)",badgeColor:"#c4b5fd"},localSystems:{background:"linear-gradient(160deg, #042c1e 0%, #059669 100%)",badgeBackground:"rgba(5, 150, 105, 0.25)",badgeBorder:"rgba(5, 150, 105, 0.5)",badgeColor:"#6ee7b7"}},k4=mt`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,S4=x.section`
  position: relative;
  display: flex;
  min-height: ${e=>e.$fullHeight?"100vh":"auto"};
  padding: 10rem 12rem 10rem;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$background};
  text-align: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 600px;
    height: 600px;
    top: -150px;
    right: -100px;
    background: radial-gradient(
      circle,
      ${e=>e.$topGlow??"transparent"} 0%,
      transparent 70%
    );
  }

  &::after {
    width: 400px;
    height: 400px;
    bottom: 50px;
    left: -50px;
    background: radial-gradient(
      circle,
      ${e=>e.$bottomGlow??"transparent"} 0%,
      transparent 70%
    );
  }
`,qa=e=>se`
  animation: ${k4} 0.6s ${e}s ease both;
`,j4=x.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: ${e=>e.$fullHeight?"2rem":"1.5rem"};
  padding: 0.375rem 1rem;
  border: 1px solid ${e=>e.$border};
  border-radius: 100px;
  background: ${e=>e.$background};
  color: ${e=>e.$color};
  font-family: "Inter", sans-serif;
  font-size: ${e=>e.$fullHeight?"0.8rem":"0.75rem"};
  font-weight: ${e=>e.$fullHeight?600:700};
  letter-spacing: ${e=>e.$fullHeight?"0.04em":"0.06em"};
  text-transform: uppercase;
  ${e=>e.$animated&&qa(0)}
`,$4=x.h1`
  position: relative;
  z-index: 1;
  max-width: ${e=>e.$maxWidth}px;
  margin: 0 auto 1.45rem;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${e=>e.$fullHeight?"clamp(2.2rem, 6vw, 4rem)":"clamp(2rem, 5vw, 3.5rem)"};
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  ${e=>e.$animated&&qa(.1)}

  span {
    background: ${e=>e.$accent??"currentColor"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${e=>e.$accent?"transparent":"currentColor"};
  }
`,z4=x.p`
  position: relative;
  z-index: 1;
  max-width: ${e=>e.$maxWidth}px;
  margin: ${e=>e.$fullHeight?"0.25rem auto 0":"0 auto"};
  color: rgba(255, 255, 255, 0.65);
  font-family: "Inter", sans-serif;
  font-size: ${e=>e.$fullHeight?"1.125rem":"1.1rem"};
  line-height: 1.75;
  ${e=>e.$animated&&qa(.2)}
`,C4=x.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.6rem;
  ${e=>e.$animated&&qa(.3)}
`;function Bi({actions:e,animated:r=!1,badge:i,fullHeight:a=!1,id:c="hero",subtitle:d,subtitleMaxWidth:f=a?580:560,theme:m,title:h,titleMaxWidth:y=a?760:700}){return s.jsxs(S4,{id:c,$background:m.background,$bottomGlow:m.bottomGlow,$fullHeight:a,$topGlow:m.topGlow,children:[s.jsx(j4,{$animated:r,$background:m.badgeBackground,$border:m.badgeBorder,$color:m.badgeColor,$fullHeight:a,children:i}),s.jsx($4,{$accent:m.titleAccent,$animated:r,$fullHeight:a,$maxWidth:y,children:h}),s.jsx(z4,{$animated:r,$fullHeight:a,$maxWidth:f,children:d}),e&&s.jsx(C4,{$animated:r,children:e})]})}const d0=mt`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(37,99,235,0);
  }

  30% {
    transform: scale(1.01);
    box-shadow:
      0 0 0 4px rgba(37,99,235,0.15),
      0 0 30px rgba(37,99,235,0.45);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(37,99,235,0);
  }
`;mt`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;const _4=x.section`
  position: relative;
  padding: 5rem 4rem;
  background: ${e=>e.$bg||"#f7f9ff"};

  ${({$highlight:e})=>e&&se`
      animation: ${d0} 20s ease;
    `}
`,E4=x.div`
  // max-width: 1366px;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;

  ${({$highlight:e})=>e&&se`
      animation: ${d0} 2s ease;
    `}
`,P4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,T4=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 600px;
`,I4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 1rem;
`,Wt={View:_4,Container:E4,Label:P4,Title:T4,Subtitle:I4},R4=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`,f0=x(An)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(29, 78, 216, 0.1);
  padding: 2rem;
  text-decoration: none;
  transition:
    box-shadow 0.25s,
    transform 0.25s,
    border-color 0.25s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0 1px 16px rgba(${e=>e.$color}, 0.6);
    transform: scale(1.03);
    border: 0px solid rgba(${e=>e.$color}, 0.6);
  }
`,A4=x.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${e=>e.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`,O4=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.175rem;
  font-weight: 700;
  color: #0c1445;
`,N4=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.65;
  flex: 1;
`,L4=x.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  margin-top: 0.5rem;
  transition: gap 0.2s;

  ${f0}:hover & {
    gap: 0.6rem;
  }
`,io={Grid:R4,View:f0,Icon:A4,Title:O4,Desc:N4,Link:L4},M4=mt`
  0% {
      box-shadow: 7px  8px 70px rgba(76, 127, 239,1);
  }
  100% {
    box-shadow: 7px  8px 70px rgba(76, 127, 239,0.3);
  }
`;mt`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;const D4=x.section`
  position: relative;

  z-index: ${({$highlight:e})=>e?20:0};
  padding: 5rem 4rem;
  scroll-margin-top: 250px;

  background: ${e=>e.$bg||"#f7f9ff"};
  ${({$highlight:e})=>e&&se`
      animation: ${M4} 3s ease;
    `}
`,B4=x.div`
  // max-width: 1366px;
  margin: 0 auto;
  // transition: box-shadow 0.3s ease;
`;x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 600px;
`;x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 1rem;
`;const uh={View:D4,Container:B4},F4=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #16a34a, #15803d);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,U4=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;function W4(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},2e3)},c=f=>{const m=document.getElementById(f);if(!m)return;m.scrollIntoView({behavior:"smooth",block:"start"});const h=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),h.disconnect())});h.observe(m)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsx(oo.PageOverlay,{$visible:e!==""}),s.jsx(Bi,{animated:!0,theme:Di.home,badge:s.jsxs(s.Fragment,{children:[s.jsx(Mi,{size:12})," Soluções Digitais Completas"]}),title:s.jsxs(s.Fragment,{children:["Seu negócio no digital -",s.jsx("br",{}),s.jsx("span",{children:"do simples ao completo"})]}),subtitle:"Site, aplicativo ou sistema — explicamos tudo de forma clara, sem termos técnicos, e entregamos a solução certa para o seu negócio.",actions:s.jsxs(s.Fragment,{children:[s.jsxs(ch.PrimaryBtn,{onClick:()=>d("como-funciona"),children:["Ver o que fazemos ",s.jsx(ft,{size:16})]}),s.jsx(ch.PrimaryBtn,{onClick:()=>d("contato"),children:"Falar com a gente"})]})}),s.jsx(Wt.View,{id:"o-que-fazemos",children:s.jsxs(Wt.Container,{children:[s.jsx(Wt.Label,{children:"O que fazemos"}),s.jsx(Wt.Title,{children:"Temos a solução certa para cada necessidade"}),s.jsx(Wt.Subtitle,{children:"Cada negócio é único. Por isso oferecemos desde sites simples até sistemas sofisticados — você escolhe o que faz sentido para você agora."}),s.jsx(io.Grid,{children:G$.map(f=>s.jsxs(io.View,{$color:f.cor,to:f.to,children:[s.jsx(io.Icon,{$color:f.color,children:f.icon}),s.jsx(io.Title,{children:f.title}),s.jsx(io.Desc,{children:f.desc}),s.jsxs(io.Link,{children:["Saiba mais ",s.jsx(ft,{size:14})]})]},f.to))})]})}),s.jsx(Wt.View,{$bg:"#ffffff",id:"recursos",children:s.jsxs(Wt.Container,{children:[s.jsx(Wt.Label,{children:"Recursos disponíveis"}),s.jsx(Wt.Title,{children:"Tecnologias que podem fazer parte do seu sistema"}),s.jsx(Wt.Subtitle,{children:"Não precisa entender de tecnologia. A gente explica o que cada recurso faz e você decide o que quer no seu projeto."}),s.jsx(no.Grid,{children:J$.map(f=>s.jsxs(no.Item,{children:[s.jsx(no.IconWrap,{children:f.icon}),s.jsxs(no.Text,{children:[s.jsx(no.Title,{children:f.title}),s.jsx(no.Desc,{children:f.desc})]})]},f.title))}),s.jsxs(ro.Banner,{id:"ia",children:[s.jsxs(ro.Text,{children:[s.jsx(ro.Badge,{children:"Novidade"}),s.jsx(ro.Title,{children:"Inteligência Artificial no seu sistema"}),s.jsx(ro.Desc,{children:"Criamos chatbots personalizados, automações com IA e integrações com modelos de linguagem — tudo otimizado por um desenvolvedor para gastar menos e funcionar melhor. Um dev que faz os prompts certos custa menos do que aumentar o plano de IA todo mês."})]}),s.jsxs(ro.Button,{smooth:!0,to:"/web#IA",children:[s.jsx(Cg,{size:16})," Ver opções de IA"]})]})]})}),s.jsx(uh.View,{id:"como-funciona",$highlight:e==="como-funciona",children:s.jsxs(uh.Container,{children:[s.jsx(Wt.Label,{children:"Como funciona"}),s.jsx(Wt.Title,{children:"Simples do início ao fim"}),s.jsx(pi.Grid,{children:[{n:"1",title:"Conversa inicial",desc:"Você conta o que precisa, a gente escuta e sugere a solução ideal — sem jargão técnico."},{n:"2",title:"Proposta clara",desc:"Enviamos uma proposta simples com o que vai ser feito, prazo e valor. Sem surpresas."},{n:"3",title:"Desenvolvimento",desc:"A equipe constrói o sistema com atualizações regulares para você acompanhar."},{n:"4",title:"Entrega e suporte",desc:"Entregamos, explicamos como usar e ficamos à disposição para o que precisar."}].map(f=>s.jsxs(pi.Step,{children:[s.jsx(pi.Number,{children:f.n}),s.jsx(pi.Title,{children:f.title}),s.jsx(pi.Desc,{children:f.desc})]},f.n))})]})}),s.jsx(oo.Section,{$highlight:e==="contato",id:"contato",children:s.jsxs(oo.Container,{children:[s.jsx(oo.Title,{children:"Pronto para começar?"}),s.jsx(oo.Subtitle,{children:"Não precisa saber nada de tecnologia. Basta nos contar o que você precisa e a gente cuida do resto."}),s.jsxs(oo.Actions,{children:[s.jsxs(F4,{href:"https://wa.me/5511999999999",target:"_blank",children:["Falar pelo WhatsApp",s.jsx(ft,{size:16})]}),s.jsx(U4,{href:"mailto:contato@oglabs.com.br",target:"_blank",children:"Enviar e-mail"})]})]})})]})}const Z4=mt`
  from {
    transform: scale(1.03);
    box-shadow: 0 0 26px var(--type-card-accent);
    border-color: transparent;
  }

  to {
    transform: scale(1);
    box-shadow: 0 0 0 transparent;
    border-color: var(--type-card-accent);
  }
`,q4=x.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${e=>e.$minCardWidth}px, 100%), 1fr)
  );
  gap: 1.5rem;
`,V4=x.article`
  --type-card-accent: ${e=>e.$accentColor};
  background: white;
  border: 1px solid color-mix(in srgb, var(--type-card-accent) 14%, transparent);
  border-radius: 16px;
  overflow: hidden;
  scroll-margin-top: 84px;
  cursor: ${e=>e.$interactive?"pointer":"default"};
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;

  ${e=>e.$highlighted?se`
          animation: ${Z4} 4s linear;
        `:se`
          &:hover {
            border-color: color-mix(
              in srgb,
              var(--type-card-accent) 45%,
              transparent
            );
            box-shadow: 0 8px 28px
              color-mix(in srgb, var(--type-card-accent) 22%, transparent);
            transform: translateY(-3px);
          }
        `}

  &:focus-visible {
    outline: 3px solid
      color-mix(in srgb, var(--type-card-accent) 45%, transparent);
    outline-offset: 3px;
  }
`,H4=x.div`
  background: ${e=>e.$background};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,G4=x.h3`
  margin: 0;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
`,J4=x.p`
  margin: 0.2rem 0 0;
  color: rgba(255, 255, 255, 0.75);
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
`,Q4=x.div`
  padding: 1.5rem 1.75rem;
`,Y4=x.p`
  margin: 0 0 1.25rem;
  color: #4b5684;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
`,K4=x.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,X4=x.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #374151;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
`,e3={blue:{background:"#dbeafe",color:"#1e40af"},cyan:{background:"#cffafe",color:"#155e75"},green:{background:"#dcfce7",color:"#166534"},orange:{background:"#ffedd5",color:"#9a3412"},purple:{background:"#ede9fe",color:"#5b21b6"}},t3=x.span`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: ${e=>e.$background};
  color: ${e=>e.$color};
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;function Va({items:e,checkColor:r,highlightedId:i,minCardWidth:a=300,onCardClick:c}){const d=(f,m)=>{!c||f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),c(m))};return s.jsx(q4,{$minCardWidth:a,children:e.map(f=>{const m=e3[f.tag.variant],h=f.accentColor??r,y=!!c;return s.jsxs(V4,{id:f.id,$accentColor:h,$highlighted:i===f.id,$interactive:y,onClick:()=>c==null?void 0:c(f.id),onKeyDown:v=>d(v,f.id),role:y?"button":void 0,tabIndex:y?0:void 0,children:[s.jsxs(H4,{$background:f.color,children:[f.icon,s.jsxs("div",{children:[s.jsx(G4,{children:f.title}),s.jsx(J4,{children:f.sub})]})]}),s.jsxs(Q4,{children:[s.jsx(Y4,{children:f.desc}),s.jsx(K4,{children:f.checks.map(v=>s.jsxs(X4,{children:[s.jsx(xo,{size:15,color:r,style:{flexShrink:0,marginTop:2}}),v]},v))}),s.jsx(t3,{$background:m.background,$color:m.color,children:f.tag.label})]})]},f.id)})})}const n3=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,r3=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,o3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,i3=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,s3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,a3=[{id:"One-Page",icon:s.jsx(vo,{size:22,color:"white"}),accentColor:"#2563eb",color:"linear-gradient(135deg, rgb(37, 99, 235), rgb(29, 78, 216))",title:"Site de Uma Página (One Page)",sub:"Ideal para começar",desc:"Um único endereço na internet com tudo o que você faz: seus serviços, contato, redes sociais. Perfeito para quem quer aparecer no Google sem complicação.",checks:["Aparece no Google (SEO)","Sem banco de dados","Funciona no celular e computador","Formulário de contato simples"],tag:{label:"Mais simples",variant:"green"}},{id:"Site",icon:s.jsx(n5,{size:22,color:"white"}),accentColor:"#0891b2",color:"linear-gradient(135deg, rgb(8, 145, 178), rgb(14, 116, 144))",title:"Site com Várias Páginas",sub:"Sobre nós, serviços, portfólio...",desc:"Quando você tem mais conteúdo para mostrar: um menu com páginas separadas para cada assunto — empresa, produtos, blog, contato.",checks:["Páginas organizadas com menu","Blog ou notícias (opcional)","Galeria de fotos ou portfólio","Otimizado para Google"],tag:{label:"Popular",variant:"blue"}},{id:"Login",icon:s.jsx(l5,{size:22,color:"white"}),accentColor:"#7c3aed",color:"linear-gradient(135deg, rgb(124, 58, 237), rgb(109, 40, 217))",title:"Sistema com Login",sub:"Cada usuário vê o que é seu",desc:"Quando você precisa que clientes ou funcionários entrem com usuário e senha para acessar uma área privada com seus dados.",checks:["Cadastro e login de usuários","Área privada por perfil","Banco de dados seguro","Recuperação de senha"],tag:{label:"Intermediário",variant:"purple"}},{id:"Loja",icon:s.jsx(M5,{size:22,color:"white"}),accentColor:"#d97706",color:"linear-gradient(135deg, rgb(217, 119, 6), rgb(180, 83, 9))",title:"Loja Virtual",sub:"Venda pela internet",desc:"Uma loja online completa onde seus clientes podem navegar pelos produtos, colocar no carrinho e pagar — tudo pelo computador ou celular.",checks:["Catálogo de produtos","Carrinho e checkout","Pagamento online (Pix, cartão)","Painel de pedidos para você"],tag:{label:"Intermediário",variant:"orange"}},{id:"Banco",icon:s.jsx(yo,{size:22,color:"white"}),accentColor:"#059669",color:"linear-gradient(135deg, rgb(5, 150, 105), rgb(4, 120, 87))",title:"Sistema Completo com Banco",sub:"Profissional e escalável",desc:"Para negócios que precisam de algo mais robusto: controle de clientes, pedidos, estoque, relatórios — tudo centralizado e acessível de qualquer lugar.",checks:["Banco de dados na nuvem (AWS)","Login com perfis diferentes","Atualizações em tempo real","Relatórios e dashboards"],tag:{label:"Avançado",variant:"green"}},{icon:s.jsx(Cg,{size:22,color:"white"}),id:"IA",accentColor:"#0891b2",color:"linear-gradient(135deg, rgb(8, 145, 178), rgb(37, 99, 235))",title:"IA e Chatbot Personalizado",sub:"Atendimento automático inteligente",desc:"Um assistente virtual no seu site que responde perguntas dos clientes, qualifica leads e automatiza atendimentos — treinado para o seu negócio.",checks:["Chatbot com IA treinada","Responde dúvidas 24h","Integra com WhatsApp","Otimizado para gastar menos em tokens"],tag:{label:"Premium",variant:"blue"}}],so={Section:n3,Container:r3,SectionLabel:o3,SectionTitle:i3,SectionSubtitle:s3,types:a3},l3=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,c3=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,u3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,d3=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,f3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,p3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`,m3=x.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(29, 78, 216, 0.09);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`,h3=x.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,g3=x.div``,x3=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,y3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`,v3=x.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,w3=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,b3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,k3=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,S3=[{icon:s.jsx(_g,{size:18,color:"#2563eb"}),title:"Tempo Real",desc:"Dados que se atualizam na tela sem precisar recarregar a página."},{icon:s.jsx($r,{size:18,color:"#2563eb"}),title:"AWS Cognito",desc:"Login seguro com autenticação profissional da Amazon."},{icon:s.jsx(So,{size:18,color:"#2563eb"}),title:"Notificações",desc:"Avise usuários por e-mail ou push quando algo importante acontecer."},{icon:s.jsx(Mi,{size:18,color:"#2563eb"}),title:"Firebase",desc:"Banco de dados em tempo real, notificações push e autenticação rápida."}];mt`
  from {
       transform: scale(1.03);
       box-shadow: 0 0 26px var(--highlight-color);
       border: 0px none #fff;
      }

  to {
    transform: scale(1);
    border: 1px solid  var(--highlight-color);

   box-shadow: 0 0 0 transparent;
  }
`;const vt={Section:l3,Container:c3,SectionLabel:u3,SectionTitle:d3,SectionSubtitle:f3,ExtraDesc:y3,ExtraTitle:x3,ExtraText:g3,ExtraIcon:h3,ExtraCard:m3,ExtraRow:p3,CTABanner:v3,CTATitle:w3,CTASubtitle:b3,CTAButton:k3,extras:S3};function j3(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const m=document.getElementById(f);if(!m)return;m.scrollIntoView({behavior:"smooth",block:"start"});const h=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),h.disconnect())});h.observe(m)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsx(Bi,{theme:Di.web,badge:s.jsxs(s.Fragment,{children:[s.jsx(vo,{size:12})," Sites e Sistemas Web"]}),title:"Tudo o que existe no mundo web — explicado de forma simples",subtitle:"De um site básico para aparecer no Google até um sistema completo com login, banco de dados e inteligência artificial."}),s.jsx(so.Section,{id:"web",children:s.jsxs(so.Container,{children:[s.jsx(so.SectionLabel,{children:"Tipos de sistemas web"}),s.jsx(so.SectionTitle,{children:"Qual é o certo para o seu momento?"}),s.jsx(so.SectionSubtitle,{children:"Você não precisa começar com tudo. Cada negócio tem uma necessidade diferente — veja as opções e escolha o que faz sentido agora."}),s.jsx(Va,{items:so.types,checkColor:"#2563eb",highlightedId:e,onCardClick:d})]})}),s.jsx(vt.Section,{$bg:"#ffffff",id:"hero",children:s.jsxs(vt.Container,{children:[s.jsx(vt.SectionLabel,{children:"Recursos extras"}),s.jsx(vt.SectionTitle,{children:"Funcionalidades que podem ser adicionadas"}),s.jsx(vt.SectionSubtitle,{children:"Qualquer sistema pode ser enriquecido com esses recursos — tudo conforme a sua necessidade."}),s.jsx(vt.ExtraRow,{children:vt.extras.map(f=>s.jsxs(vt.ExtraCard,{children:[s.jsx(vt.ExtraIcon,{children:f.icon}),s.jsxs(vt.ExtraText,{children:[s.jsx(vt.ExtraTitle,{children:f.title}),s.jsx(vt.ExtraDesc,{children:f.desc})]})]},f.title))}),s.jsxs(vt.CTABanner,{children:[s.jsx(vt.CTATitle,{children:"Não sabe qual escolher?"}),s.jsx(vt.CTASubtitle,{children:"Explique o seu negócio e a gente indica a melhor opção — sem compromisso."}),s.jsxs(vt.CTAButton,{href:"https://wa.me/5511999999999",target:"_blank",children:["Falar pelo WhatsApp ",s.jsx(ft,{size:16})]})]})]})})]})}const $3=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,z3=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,C3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`,_3=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,E3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,P3=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`,T3=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border-radius: 100px;
  background: ${e=>e.$bg};
  border: 1px solid ${e=>e.$color}33;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.$color};
`,I3=[{id:"App-Simples",icon:s.jsx(Da,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(55, 65, 81), #1f2937)",accentColor:"#374151",title:"App Simples (offline)",sub:"Funciona sem internet",desc:"O app funciona completamente sem conexão. Ideal para ferramentas de consulta, calculadoras, catálogos ou qualquer uso que não precise de dados externos.",checks:["Funciona sem internet","Dados salvos no celular","Leve e rápido","Sem mensalidade de servidor"],tag:{label:"Mais simples",variant:"green"}},{id:"App-Conectado",accentColor:"#0891b2",icon:s.jsx(Ju,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",title:"App Conectado ao Servidor",sub:"Dados sempre atualizados",desc:"O app se comunica com um servidor na internet. Seus dados ficam na nuvem e são acessíveis de qualquer celular — perfeito para equipes ou múltiplos usuários.",checks:["Dados na nuvem","Sincronização automática","Backup seguro","Múltiplos dispositivos"],tag:{label:"Intermediário",variant:"cyan"}},{id:"App-Login",accentColor:"#7c3aed",icon:s.jsx(Ma,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",title:"App com Login e Perfis",sub:"Cada usuário tem o seu espaço",desc:"Sistema completo com cadastro, login, perfil de usuário e controle de acesso. Clientes, vendedores e gerentes veem informações diferentes no mesmo app.",checks:["Login por usuário e senha","Perfis de cliente, gerente, vendas","Histórico por usuário","Segurança profissional"],tag:{label:"Intermediário",variant:"purple"}},{id:"App-Push",accentColor:"#d97706",icon:s.jsx(So,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(217, 119, 6), #b45309)",title:"App com Notificações Push",sub:"Mensagens mesmo com app fechado",desc:"O app avisa o usuário com notificações no celular — mesmo que esteja fechado. Ideal para pedidos, alertas, promoções ou mensagens importantes.",checks:["Notificações automáticas","Funciona com app fechado","Firebase integrado","Mensagens segmentadas por perfil"],tag:{label:"Popular",variant:"orange"}},{id:"App-Completo",accentColor:"#059669",icon:s.jsx(rr,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(5, 150, 105), #047857)",title:"App Completo com Tempo Real",sub:"Tudo atualizado na hora",desc:"O app mais robusto: login, banco de dados, notificações push e atualizações em tempo real. O que um usuário faz, o outro vê instantaneamente — sem recarregar.",checks:["Tempo real (sem recarregar)","Login e banco de dados","Notificações push","Histórico completo"],tag:{label:"Avançado",variant:"green"}}],xn={Section:$3,Container:z3,SectionLabel:C3,SectionTitle:_3,SectionSubtitle:E3,PlatformBadge:T3,PlatformRow:P3,appTypes:I3},R3=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,A3=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,O3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`,N3=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,L3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,M3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,D3=x.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  padding: 1.5rem 1.25rem;
  text-align: center;
`,B3=x.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`,F3=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.5rem;
`,U3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.5;
`;x.div`
  background: linear-gradient(135deg, #0a1930, #0e7490);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`;x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`;x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`;x(An)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #0891b2, #0284c7);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;const yn={Section:R3,Container:A3,SectionLabel:O3,SectionTitle:N3,SectionSubtitle:L3,ProfileGrid:M3,ProfileCard:D3,ProfileIcon:B3,ProfileTitle:F3,ProfileDesc:U3},W3=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,Z3=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,q3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`,V3=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`;x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border-radius: 100px;
  background: ${e=>e.$bg};
  border: 1px solid ${e=>e.$color}33;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.$color};
`;x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;x.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  padding: 1.5rem 1.25rem;
  text-align: center;
`;x.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.5rem;
`;x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.5;
`;const H3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,G3=x.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.09);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`,J3=x.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Q3=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,Y3=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`,K3=x.div`
  background: linear-gradient(135deg, #0a1930, #0e7490);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,X3=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,ez=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,tz=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #0891b2, #0284c7);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,nz=[{icon:s.jsx(N5,{size:18,color:"#0891b2"}),title:"Delivery / Pedidos",desc:"Cliente faz pedido, vendedor recebe em tempo real."},{icon:s.jsx(p5,{size:18,color:"#0891b2"}),title:"Localização",desc:"Rastreamento de entregadores ou técnicos em campo."},{icon:s.jsx(E2,{size:18,color:"#0891b2"}),title:"Relatório por Foto",desc:"Técnico fotografa e registra no app direto da obra."},{icon:s.jsx(So,{size:18,color:"#0891b2"}),title:"Promoções",desc:"Avise clientes de ofertas com um clique."}],Tt={Section:W3,Container:Z3,SectionLabel:q3,SectionTitle:V3,UseCaseGrid:H3,UseCaseCard:G3,UCIcon:J3,UCTitle:Q3,UCDesc:Y3,CTABanner:K3,CTATitle:X3,CTASubtitle:ez,CTAButton:tz,useCases:nz};function rz(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const m=document.getElementById(f);if(!m)return;m.scrollIntoView({behavior:"smooth",block:"start"});const h=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),h.disconnect())});h.observe(m)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsx(Bi,{theme:Di.mobile,badge:s.jsxs(s.Fragment,{children:[s.jsx(rr,{size:12})," Aplicativos Mobile"]}),title:"Apps para iPhone e Android — do simples ao completo",subtitle:"Seja para rodar sem internet ou para conectar equipes em tempo real, temos o app certo para o seu negócio."}),s.jsx(xn.Section,{id:"mobile",children:s.jsxs(xn.Container,{children:[s.jsx(xn.SectionLabel,{children:"Plataformas disponíveis"}),s.jsx(xn.SectionTitle,{children:"iOS, Android ou os dois?"}),s.jsx(xn.SectionSubtitle,{children:"Desenvolvemos para as duas plataformas mais usadas no Brasil. Você pode lançar nos dois ao mesmo tempo ou começar por um."}),s.jsxs(xn.PlatformRow,{children:[s.jsxs(xn.PlatformBadge,{$color:"#1d4ed8",$bg:"#dbeafe",children:[s.jsx(zg,{size:16})," iOS (iPhone / iPad)"]}),s.jsxs(xn.PlatformBadge,{$color:"#059669",$bg:"#dcfce7",children:[s.jsx(rr,{size:16})," Android"]}),s.jsxs(xn.PlatformBadge,{$color:"#7c3aed",$bg:"#ede9fe",children:[s.jsx(rr,{size:16})," iOS + Android juntos"]})]}),s.jsx(Va,{items:xn.appTypes,checkColor:"#0891b2",highlightedId:e,minCardWidth:280,onCardClick:d})]})}),s.jsx(yn.Section,{$bg:"#ffffff",id:"perfis",children:s.jsxs(yn.Container,{children:[s.jsx(yn.SectionLabel,{children:"Perfis de usuário"}),s.jsx(yn.SectionTitle,{children:"Cada pessoa vê o que é seu"}),s.jsx(yn.SectionSubtitle,{children:"Em sistemas com login, é possível definir quem tem acesso a quê."}),s.jsx(yn.ProfileGrid,{children:[{title:"Cliente",desc:"Faz pedidos, acompanha histórico e recebe notificações."},{title:"Vendedor",desc:"Vê e gerencia os pedidos da sua carteira."},{title:"Gerente",desc:"Visualiza relatórios, equipe e todo o sistema."},{title:"Só um perfil",desc:"Pode ser simples também — um único tipo de usuário."}].map(f=>s.jsxs(yn.ProfileCard,{children:[s.jsx(yn.ProfileIcon,{children:s.jsx(Ma,{size:22,color:"#0891b2"})}),s.jsx(yn.ProfileTitle,{children:f.title}),s.jsx(yn.ProfileDesc,{children:f.desc})]},f.title))})]})}),s.jsx(Tt.Section,{id:"exemplos",children:s.jsxs(Tt.Container,{children:[s.jsx(Tt.SectionLabel,{children:"Exemplos de uso"}),s.jsx(Tt.SectionTitle,{children:"Para que tipo de negócio serve?"}),s.jsx(Tt.UseCaseGrid,{children:Tt.useCases.map(f=>s.jsxs(Tt.UseCaseCard,{children:[s.jsx(Tt.UCIcon,{children:f.icon}),s.jsxs("div",{children:[s.jsx(Tt.UCTitle,{children:f.title}),s.jsx(Tt.UCDesc,{children:f.desc})]})]},f.title))}),s.jsxs(Tt.CTABanner,{children:[s.jsx(Tt.CTATitle,{children:"Tem uma ideia de app?"}),s.jsx(Tt.CTASubtitle,{children:"Conta para a gente o que você precisa e a gente indica o tipo certo."}),s.jsxs(Tt.CTAButton,{href:"https://wa.me/5511999999999",target:"_blank",children:["Falar pelo WhatsApp ",s.jsx(ft,{size:16})]})]})]})})]})}const oz=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,iz=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,sz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7c3aed;
  margin-bottom: 0.75rem;
`,az=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,lz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,cz=x.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`,uz=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 100px;
  background: ${e=>e.$bg};
  border: 1px solid ${e=>e.$color}40;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.$color};
`,dz=[{id:"Software",accentColor:"#374151",icon:s.jsx(Eg,{size:22,color:"white"}),color:"linear-gradient(135deg, #374151, #1f2937)",title:"Software Local Simples",sub:"Roda em um único computador",desc:"Um programa instalado no seu computador que funciona sem internet. Ideal para uso individual — controle de tarefas, registros ou ferramentas de apoio.",checks:["Roda sem internet","Dados salvos no computador","Rápido e leve","Windows, Mac ou Linux"],tag:{label:"Mais simples",variant:"green"}},{id:"Software-Rede",icon:s.jsx(Ag,{size:22,color:"white"}),accentColor:"#7c3aed",color:"linear-gradient(135deg, #7c3aed, #6d28d9)",title:"Software em Rede Local",sub:"Vários computadores, um sistema",desc:"Instalado em um servidor dentro da empresa, acessível por todos os computadores da rede interna. Perfeito para empresas com equipes compartilhando dados.",checks:["Acesso por vários PCs","Dados centralizados na empresa","Sem depender da internet","Login por usuário"],tag:{label:"Intermediário",variant:"purple"}},{id:"Software-Nuvem",icon:s.jsx(La,{size:22,color:"white"}),accentColor:"#1d4ed8",color:"linear-gradient(135deg, #1d4ed8, #1e40af)",title:"Software com Servidor na Nuvem",sub:"Acesse de qualquer lugar",desc:"O sistema roda na nuvem e pode ser acessado de qualquer computador com internet. Dados seguros, backup automático e sem preocupação com máquina local.",checks:["Acesso remoto (home office)","Backup automático","Escalável conforme cresce","Login seguro"],tag:{label:"Intermediário",variant:"blue"}},{id:"Sistema-Completo",icon:s.jsx(T2,{size:22,color:"white"}),accentColor:"#059669",color:"linear-gradient(135deg, #059669, #047857)",title:"Sistema de Gestão Completo",sub:"ERP para o seu negócio",desc:"Um sistema robusto que integra vendas, estoque, financeiro, clientes e relatórios — tudo em um só lugar. Feito sob medida para o seu negócio.",checks:["Módulos por área","Relatórios e gráficos","Controle de usuários","Integração com outros sistemas"],tag:{label:"Avançado",variant:"green"}}],vn={Section:oz,Container:iz,SectionLabel:sz,SectionTitle:az,SectionSubtitle:lz,OSBadge:uz,OSRow:cz,softwareTypes:dz},fz=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,pz=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,mz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7c3aed;
  margin-bottom: 0.75rem;
`,hz=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,gz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,xz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,yz=x.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`,vz=x.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
`,wz=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0c1445;
`,bz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.82rem;
  color: #4b5684;
  line-height: 1.6;
`,kz=x.div`
  background: linear-gradient(135deg, #1e1040, #5b21b6);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,Sz=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,jz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,$z=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,zz=[{icon:s.jsx(Da,{size:20,color:"#7c3aed"}),title:"Totalmente offline",desc:"Funciona sem internet, dados ficam na máquina ou no servidor local."},{icon:s.jsx(Ju,{size:20,color:"#7c3aed"}),title:"Com conexão",desc:"Acessa dados na nuvem — qualquer computador com internet entra no sistema."},{icon:s.jsx(Ma,{size:20,color:"#7c3aed"}),title:"Multiusuário",desc:"Cada pessoa tem login próprio e permissões diferentes no sistema."},{icon:s.jsx(C5,{size:20,color:"#7c3aed"}),title:"Impressão e relatórios",desc:"Emite relatórios, nota fiscal e integra com impressoras locais."},{icon:s.jsx(k5,{size:20,color:"#7c3aed"}),title:"Estoque e controle",desc:"Controle de produtos, entradas, saídas e alertas de estoque mínimo."},{icon:s.jsx(e5,{size:20,color:"#7c3aed"}),title:"Windows, Mac ou Linux",desc:"Desenvolvemos para qualquer sistema operacional."}],St={Section:fz,Container:pz,SectionLabel:mz,SectionTitle:hz,SectionSubtitle:gz,OptionRow:xz,OptionCard:yz,OptionIcon:vz,OptionTitle:wz,OptionDesc:bz,CTABanner:kz,CTATitle:Sz,CTASubtitle:jz,CTAButton:$z,connOptions:zz};function Cz(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const m=document.getElementById(f);if(!m)return;m.scrollIntoView({behavior:"smooth",block:"start"});const h=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),h.disconnect())});h.observe(m)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsx(Bi,{theme:Di.software,badge:s.jsxs(s.Fragment,{children:[s.jsx(Ci,{size:12})," Softwares para PC"]}),title:"Programas para o seu computador — simples ou completos",subtitle:"De uma ferramenta para uso individual até um sistema de gestão para toda a empresa — para Windows, Mac ou Linux."}),s.jsx(vn.Section,{id:"Softwares",children:s.jsxs(vn.Container,{children:[s.jsx(vn.SectionLabel,{children:"Sistemas operacionais"}),s.jsx(vn.SectionTitle,{children:"Para qual computador você precisa?"}),s.jsx(vn.SectionSubtitle,{children:"Desenvolvemos para as três principais plataformas de computador. Pode ser para um, para todos ou para qualquer um."}),s.jsxs(vn.OSRow,{children:[s.jsxs(vn.OSBadge,{$bg:"#dbeafe",$color:"#1d4ed8",children:[s.jsx(Ci,{size:16})," Windows"]}),s.jsxs(vn.OSBadge,{$bg:"#f1f0ff",$color:"#6d28d9",children:[s.jsx(zg,{size:16})," Mac (macOS)"]}),s.jsxs(vn.OSBadge,{$bg:"#dcfce7",$color:"#166534",children:[s.jsx(La,{size:16})," Linux"]})]}),s.jsx(Va,{items:vn.softwareTypes,checkColor:"#7c3aed",highlightedId:e,onCardClick:d})]})}),s.jsx(St.Section,{$bg:"#ffffff",id:"recursos",children:s.jsxs(St.Container,{children:[s.jsx(St.SectionLabel,{children:"Opções e recursos"}),s.jsx(St.SectionTitle,{children:"O que pode ter no seu software"}),s.jsx(St.SectionSubtitle,{children:"Cada detalhe é definido conforme a necessidade do seu negócio."}),s.jsx(St.OptionRow,{children:St.connOptions.map(f=>s.jsxs(St.OptionCard,{children:[s.jsx(St.OptionIcon,{children:f.icon}),s.jsxs("div",{children:[s.jsx(St.OptionTitle,{children:f.title}),s.jsx(St.OptionDesc,{children:f.desc})]})]},f.title))}),s.jsxs(St.CTABanner,{children:[s.jsx(St.CTATitle,{children:"Precisa de um software personalizado?"}),s.jsx(St.CTASubtitle,{children:"A gente desenvolve do zero, do jeito que o seu negócio precisa."}),s.jsxs(St.CTAButton,{href:"https://wa.me/5511999999999",target:"_blank",children:["Falar pelo WhatsApp ",s.jsx(ft,{size:16})]})]})]})})]})}const _z=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,Ez=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,Pz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.75rem;
`,Tz=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,Iz=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Rz=x.div`
  background: ${e=>e.$highlight?"linear-gradient(135deg, #042c1e, #059669)":"white"};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid
    ${e=>e.$highlight?"transparent":"rgba(5, 150, 105, 0.12)"};
`,Az=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e=>e.$light?"white":"#0c1445"};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Oz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: ${e=>e.$light?"rgba(255,255,255,0.7)":"#4b5684"};
  line-height: 1.75;
`,Nz=[{id:"Sistema-Local",icon:s.jsx(Eg,{size:22,color:"white"}),color:"linear-gradient(135deg, #374151, #1f2937)",title:"Sistema Local sem Internet",sub:"Totalmente offline",desc:"Roda dentro da empresa sem precisar de internet. Os dados ficam no servidor local e só quem está na rede interna acessa. Máxima privacidade.",checks:["Sem dependência de internet","Dados ficam dentro da empresa","Acesso somente na rede interna","Sem risco de invasão externa"],tag:{label:"Mais seguro",variant:"green"}},{id:"Sistema-Rede-Local-Banco",icon:s.jsx(Ag,{size:22,color:"white"}),color:"linear-gradient(135deg, #059669, #047857)",title:"Rede Local com Banco de Dados",sub:"Dados centralizados internamente",desc:"Vários computadores da empresa acessam o mesmo banco de dados. Estoque, clientes, pedidos — tudo compartilhado em tempo real dentro da rede.",checks:["Banco de dados central","Vários PCs conectados","Dados em tempo real","Login por usuário"],tag:{label:"Intermediário",variant:"green"}},{id:"Sistema-Auth",icon:s.jsx(yo,{size:22,color:"white"}),color:"linear-gradient(135deg, #1d4ed8, #1e40af)",title:"Sistema com Autenticação",sub:"Usuário e senha para tudo",desc:"Cada pessoa entra com seu login e vê apenas o que tem permissão. Um vendedor não vê os dados financeiros. Um gerente vê tudo. Simples assim.",checks:["Login individual","Permissões por cargo","Registro de ações (log)","Recuperação de senha"],tag:{label:"Intermediário",variant:"blue"}},{id:"Sistema-Híbrido",icon:s.jsx($r,{size:22,color:"white"}),color:"linear-gradient(135deg, #7c3aed, #6d28d9)",title:"Sistema Híbrido",sub:"Local + nuvem quando quiser",desc:"Funciona localmente mas também sincroniza com a nuvem — quando há internet, os dados são salvos online. Quando cai a internet, o sistema continua funcionando.",checks:["Funciona offline e online","Sincroniza automaticamente","Backup na nuvem","Acesso remoto quando necessário"],tag:{label:"Avançado",variant:"purple"}}],Zt={Section:_z,Container:Ez,SectionLabel:Pz,SectionTitle:Tz,ConceptGrid:Iz,ConceptCard:Rz,ConceptTitle:Az,ConceptDesc:Oz,localTypes:Nz},Lz=x.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,Mz=x.div`
  max-width: 1100px;
  margin: 0 auto;
`,Dz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.75rem;
`,Bz=x.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,Fz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,Uz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,Wz=x.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(5, 150, 105, 0.1);
  padding: 1.375rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`,Zz=x.div`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,qz=x.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,Vz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`,Hz=x.div`
  background: linear-gradient(135deg, #042c1e, #059669);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,Gz=x.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,Jz=x.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,Qz=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`,It={Section:Lz,Container:Mz,SectionLabel:Dz,SectionTitle:Bz,SectionSubtitle:Fz,AuthGrid:Uz,AuthCard:Wz,AuthIcon:Zz,AuthTitle:qz,AuthDesc:Vz,CTABanner:Hz,CTATitle:Gz,CTASubtitle:Jz,CTAButton:Qz},Yz=[{icon:s.jsx(K2,{size:18,color:"#059669"}),title:"Login por usuário e senha",desc:"Cada pessoa tem acesso único e pessoal ao sistema."},{icon:s.jsx(W2,{size:18,color:"#059669"}),title:"Controle do que cada um vê",desc:"Vendedor, gerente, caixa — cada cargo tem sua visão."},{icon:s.jsx(s5,{size:18,color:"#059669"}),title:"Bloqueio de acesso",desc:"O administrador pode bloquear um usuário com um clique."},{icon:s.jsx(q2,{size:18,color:"#059669"}),title:"Histórico de ações",desc:"Registro de quem fez o quê e quando no sistema."},{icon:s.jsx(Da,{size:18,color:"#059669"}),title:"Funciona sem internet",desc:"A autenticação pode ser feita localmente, sem nuvem."},{icon:s.jsx(Ju,{size:18,color:"#059669"}),title:"Ou com nuvem segura",desc:"AWS Cognito para autenticação profissional na nuvem."}];function Kz(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const m=document.getElementById(f);if(!m)return;m.scrollIntoView({behavior:"smooth",block:"start"});const h=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),h.disconnect())});h.observe(m)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsx(Bi,{theme:Di.localSystems,badge:s.jsxs(s.Fragment,{children:[s.jsx(La,{size:12})," Sistemas Locais"]}),title:"Sistemas dentro da sua empresa — seguros e sem depender da internet",subtitle:"Tudo roda na sua própria rede, com banco de dados, controle de usuários e segurança profissional — sem expor nada para a internet."}),s.jsx(Zt.Section,{id:"Sistemas-Local",children:s.jsxs(Zt.Container,{children:[s.jsx(Zt.SectionLabel,{children:"O que é um sistema local?"}),s.jsx(Zt.SectionTitle,{children:"Simples de entender"}),s.jsxs(Zt.ConceptGrid,{children:[s.jsxs(Zt.ConceptCard,{children:[s.jsxs(Zt.ConceptTitle,{children:[s.jsx(Da,{size:18,color:"#059669"})," Sistema na rede interna"]}),s.jsx(Zt.ConceptDesc,{children:"Imagine os computadores da sua empresa ligados entre si, como numa teia. Um sistema local fica no centro dessa teia — todos acessam, mas ninguém de fora entra. É como ter um sistema só seu, dentro da sua empresa."})]}),s.jsxs(Zt.ConceptCard,{$highlight:!0,children:[s.jsxs(Zt.ConceptTitle,{$light:!0,children:[s.jsx($r,{size:18,color:"#6ee7b7"})," Por que usar?"]}),s.jsx(Zt.ConceptDesc,{$light:!0,children:"Empresas que lidam com dados sensíveis — clínicas, escritórios, indústrias — preferem que os dados fiquem dentro de casa. Sem internet, sem risco de vazamento externo. Controle total sobre quem acessa o quê."})]})]}),s.jsx(Va,{items:Zt.localTypes,checkColor:"#059669",minCardWidth:290,highlightedId:e,onCardClick:d})]})}),s.jsx(It.Section,{$bg:"#ffffff",id:"Controle-Acesso",children:s.jsxs(It.Container,{children:[s.jsx(It.SectionLabel,{children:"Controle de acesso"}),s.jsx(It.SectionTitle,{children:"Quem pode entrar e o que cada um vê"}),s.jsx(It.SectionSubtitle,{children:"Em qualquer sistema local, é possível definir permissões detalhadas. Cada funcionário tem o seu espaço — sem invadir o do outro."}),s.jsx(It.AuthGrid,{children:Yz.map(f=>s.jsxs(It.AuthCard,{children:[s.jsx(It.AuthIcon,{children:f.icon}),s.jsxs("div",{children:[s.jsx(It.AuthTitle,{children:f.title}),s.jsx(It.AuthDesc,{children:f.desc})]})]},f.title))}),s.jsxs(It.CTABanner,{children:[s.jsx(It.CTATitle,{children:"Quer um sistema dentro da sua empresa?"}),s.jsx(It.CTASubtitle,{children:"A gente instala, configura e treina a equipe. Você fica no controle."}),s.jsxs(It.CTAButton,{href:"https://wa.me/5511999999999",target:"_blank",children:["Falar pelo WhatsApp ",s.jsx(ft,{size:16})]})]})]})})]})}const Xz=mt`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,e6=x(o5)`
  animation: ${Xz} 0.75s linear infinite;
  flex-shrink: 0;
`,p0=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
  width: ${e=>e.$fullWidth?"100%":"auto"};
  outline: none;
  position: relative;
  white-space: nowrap;
  text-decoration: none;

  /* sizes */
  ${e=>e.$size==="sm"&&se`padding: 0.375rem 0.875rem; font-size: 0.78rem;`}
  ${e=>e.$size==="md"&&se`padding: 0.625rem 1.25rem; font-size: 0.875rem;`}
  ${e=>e.$size==="lg"&&se`padding: 0.875rem 1.75rem; font-size: 1rem;`}

  /* variants */
  ${e=>e.$variant==="primary"&&se`
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;
    box-shadow: 0 2px 8px rgba(37,99,235,0.25);
  `}
  ${e=>e.$variant==="secondary"&&se`
    background: #eff6ff;
    color: #1e40af;
    border: 1.5px solid #bfdbfe;
  `}
  ${e=>e.$variant==="ghost"&&se`
    background: transparent;
    color: #4b5684;
    border: 1.5px solid rgba(29,78,216,0.15);
  `}
  ${e=>e.$variant==="danger"&&se`
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    color: white;
    box-shadow: 0 2px 8px rgba(220,38,38,0.25);
  `}
  ${e=>e.$variant==="amber"&&se`
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
    box-shadow: 0 2px 8px rgba(245,158,11,0.3);
  `}
  ${e=>e.$variant==="cyan"&&se`
    background: linear-gradient(135deg, #0891b2, #0e7490);
    color: white;
    box-shadow: 0 2px 8px rgba(8,145,178,0.25);
  `}
  ${e=>e.$variant==="green"&&se`
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: white;
    box-shadow: 0 2px 8px rgba(22,163,74,0.25);
  `}
  ${e=>e.$variant==="white"&&se`
    background: white;
    color: #0c1445;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `}

  &:hover:not(:disabled) {
    opacity: 0.88;
    transform: translateY(-1px);
  }
  &:active:not(:disabled) {
    transform: scale(0.98);
    opacity: 0.95;
  }
  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`,Re=_.forwardRef(({variant:e="primary",size:r="md",loading:i=!1,fullWidth:a=!1,leftIcon:c,rightIcon:d,children:f,disabled:m,...h},y)=>s.jsxs(p0,{ref:y,$variant:e,$size:r,$fullWidth:a,disabled:m||i,...h,children:[i?s.jsx(e6,{size:r==="sm"?13:r==="lg"?17:14}):c,i?f??"Carregando…":f,!i&&d]}));Re.displayName="Button";const dh=x(p0).attrs({$variant:"amber",$size:"md",$fullWidth:!1})`
  border-radius: 100px;
  padding: 0.875rem 1.375rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
`,t6=x.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${e=>e.$gap||"0.75rem"};
  align-items: center;
`,n6=x.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.$c};
  flex-shrink: 0;
`,r6=x.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;

  ${e=>e.$size==="md"&&se`font-size: 0.7rem; padding: 0.22rem 0.65rem;`}
  ${e=>e.$size==="sm"&&se`font-size: 0.62rem; padding: 0.15rem 0.5rem;`}

  ${e=>e.$variant==="blue"&&se`background: #dbeafe; color: #1e40af;`}
  ${e=>e.$variant==="green"&&se`background: #dcfce7; color: #166534;`}
  ${e=>e.$variant==="amber"&&se`background: #fef3c7; color: #92400e;`}
  ${e=>e.$variant==="red"&&se`background: #fee2e2; color: #991b1b;`}
  ${e=>e.$variant==="purple"&&se`background: #ede9fe; color: #5b21b6;`}
  ${e=>e.$variant==="cyan"&&se`background: #cffafe; color: #155e75;`}
  ${e=>e.$variant==="gray"&&se`background: #f3f4f6; color: #4b5563;`}
  ${e=>e.$variant==="outline"&&se`
    background: transparent;
    color: #1d4ed8;
    border: 1.5px solid #bfdbfe;
  `}
`,o6={blue:"#2563eb",green:"#16a34a",amber:"#f59e0b",red:"#dc2626",purple:"#7c3aed",cyan:"#0891b2",gray:"#9ca3af",outline:"#2563eb"};function wt({variant:e="blue",size:r="md",dot:i,dotColor:a,children:c,...d}){return s.jsxs(r6,{$variant:e,$size:r,...d,children:[i&&s.jsx(n6,{$c:a??o6[e]}),c]})}const fh=e=>s.jsx(wt,{variant:"blue",...e}),ph=e=>s.jsx(wt,{variant:"cyan",...e}),mh=e=>s.jsx(wt,{variant:"purple",...e}),hh=e=>s.jsx(wt,{variant:"green",...e}),i6=e=>s.jsx(wt,{variant:"amber",...e}),s6=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`,a6=x.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #0c1445;
  font-family: 'Plus Jakarta Sans', sans-serif;
`,l6=x.span`
  color: #dc2626;
  margin-left: 0.2rem;
`,c6=x.p`
  font-size: 0.75rem;
  color: ${e=>e.$error?"#dc2626":e.$success?"#16a34a":"#9ca3af"};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
`;function st({label:e,hint:r,error:i,success:a,required:c,children:d,...f}){const m=i||a||r;return s.jsxs(s6,{...f,children:[e&&s.jsxs(a6,{children:[e,c&&s.jsx(l6,{children:"*"})]}),d,m&&s.jsxs(c6,{$error:!!i,$success:!!a&&!i,children:[i&&s.jsx(Gu,{size:12}),a&&!i&&s.jsx(xo,{size:12}),m]})]})}const u6=x.div`
  position: relative;
  display: flex;
  align-items: center;
`,d6=x.div`
  position: absolute;
  left: 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  pointer-events: none;
`,f6=x.div`
  position: absolute;
  right: 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: color 0.2s;
  &:hover { color: ${e=>e.$clickable?"#4b5684":"#9ca3af"}; }
`,p6=x.input`
  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: ${e=>e.$hasLeft?"2.5rem":"0.875rem"};
  padding-right: ${e=>e.$hasRight?"2.5rem":"0.875rem"};
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;

  &::placeholder { color: #9ca3af; }

  ${e=>(e.$state==="default"||e.$state==="focus")&&se`
    border: 1.5px solid ${e.$state==="focus"?"#2563eb":"#e2eaff"};
    box-shadow: ${e.$state==="focus"?"0 0 0 3px rgba(37,99,235,0.1)":"none"};
    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    }
  `}
  ${e=>e.$state==="error"&&se`
    border: 1.5px solid #dc2626;
    box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
    &:focus { border-color: #dc2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.1); }
  `}
  ${e=>e.$state==="success"&&se`
    border: 1.5px solid #16a34a;
    box-shadow: 0 0 0 3px rgba(22,163,74,0.08);
  `}
  ${e=>e.$state==="disabled"&&se`
    border: 1.5px solid #e5e7eb;
    background: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,an=_.forwardRef(({fieldState:e="default",leftIcon:r,rightIcon:i,onRightIconClick:a,disabled:c,...d},f)=>s.jsxs(u6,{children:[r&&s.jsx(d6,{children:r}),s.jsx(p6,{ref:f,$state:c?"disabled":e,$hasLeft:!!r,$hasRight:!!i,disabled:c,...d}),i&&s.jsx(f6,{$clickable:!!a,onClick:a,children:i})]}));an.displayName="Input";const m6=x.select`
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 0.875rem;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.875rem center;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  ${e=>(e.$state==="default"||e.$state==="focus")&&se`
    border: 1.5px solid ${e.$state==="focus"?"#2563eb":"#e2eaff"};
    box-shadow: ${e.$state==="focus"?"0 0 0 3px rgba(37,99,235,0.1)":"none"};
    &:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  `}
  ${e=>e.$state==="error"&&se`
    border: 1.5px solid #dc2626;
    box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
  `}
  ${e=>e.$state==="disabled"&&se`
    border: 1.5px solid #e5e7eb;
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.65;
  `}
`,lo=_.forwardRef(({fieldState:e="default",disabled:r,...i},a)=>s.jsx(m6,{ref:a,$state:r?"disabled":e,disabled:r,...i}));lo.displayName="Select";const h6=x.textarea`
  width: 100%;
  padding: 0.75rem 0.875rem;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  outline: none;
  resize: vertical;
  min-height: 96px;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
  line-height: 1.6;

  &::placeholder { color: #9ca3af; }

  ${e=>(e.$state==="default"||e.$state==="focus")&&se`
    border: 1.5px solid ${e.$state==="focus"?"#2563eb":"#e2eaff"};
    box-shadow: ${e.$state==="focus"?"0 0 0 3px rgba(37,99,235,0.1)":"none"};
    &:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  `}
  ${e=>e.$state==="error"&&se`border: 1.5px solid #dc2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.08);`}
  ${e=>e.$state==="success"&&se`border: 1.5px solid #16a34a;`}
  ${e=>e.$state==="disabled"&&se`
    border: 1.5px solid #e5e7eb;
    background: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,ga=_.forwardRef(({fieldState:e="default",disabled:r,...i},a)=>s.jsx(h6,{ref:a,$state:r?"disabled":e,disabled:r,...i}));ga.displayName="Textarea";const g6=x.div`
  width: 44px;
  height: 26px;
  border-radius: 100px;
  background: ${e=>e.$on?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#d1d5db"};
  position: relative;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.45:1};
  transition: background 0.2s;
  flex-shrink: 0;
`,x6=x.div`
  position: absolute;
  top: 3px;
  left: ${e=>e.$on?"21px":"3px"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: left 0.2s;
`,y6=x.span`
  font-size: 0.875rem;
  color: #0c1445;
`,v6=x.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
`;function nu({checked:e,onChange:r,disabled:i=!1,label:a}){return s.jsxs(v6,{children:[s.jsx(g6,{$on:e,$disabled:i,onClick:()=>!i&&r(!e),role:"switch","aria-checked":e,children:s.jsx(x6,{$on:e})}),a&&s.jsx(y6,{children:a})]})}const w6=x.div`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 2px solid ${e=>e.$checked||e.$indeterminate?"#2563eb":"#d1d5db"};
  background: ${e=>e.$checked||e.$indeterminate?"linear-gradient(135deg,#2563eb,#1d4ed8)":"white"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.45:1};
  transition: all 0.18s;
  flex-shrink: 0;
`,b6=x.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
`,k6=x.span`
  font-size: 0.875rem;
  color: #0c1445;
`;function ia({checked:e,onChange:r,indeterminate:i=!1,disabled:a=!1,label:c}){return s.jsxs(b6,{onClick:()=>!a&&r(!e),role:"checkbox","aria-checked":i?"mixed":e,children:[s.jsxs(w6,{$checked:e,$indeterminate:i,$disabled:a,children:[i&&!e&&s.jsx(Rg,{size:11,color:"white",strokeWidth:3}),e&&s.jsx(Ni,{size:11,color:"white",strokeWidth:3})]}),c&&s.jsx(k6,{children:c})]})}const S6=x.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$checked?"#2563eb":"#d1d5db"};
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.45:1};
  transition: all 0.18s;
  flex-shrink: 0;
`,j6=x.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2563eb;
`,$6=x.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  user-select: none;
`,z6=x.span`
  font-size: 0.875rem;
  color: ${e=>e.$checked?"#0c1445":"#4b5684"};
  font-weight: ${e=>e.$checked?600:400};
  transition: all 0.15s;
`,C6=x.div`
  display: flex;
  flex-direction: ${e=>e.$direction};
  flex-wrap: ${e=>e.$direction==="row"?"wrap":"nowrap"};
  gap: ${e=>e.$gap};
`;function _6({value:e,onChange:r,options:i,direction:a="row",gap:c="1.25rem"}){return s.jsx(C6,{$direction:a,$gap:c,children:i.map(d=>s.jsxs($6,{onClick:()=>!d.disabled&&r(d.value),role:"radio","aria-checked":e===d.value,children:[s.jsx(S6,{$checked:e===d.value,$disabled:!!d.disabled,children:e===d.value&&s.jsx(j6,{})}),s.jsx(z6,{$checked:e===d.value,children:d.label})]},d.value))})}const ru=x.div`
  width: 100%;
  height: ${e=>e.$h}px;
  background: rgba(29,78,216,0.1);
  border-radius: 100px;
  overflow: hidden;
  position: relative;
`,ou=x.div`
  height: 100%;
  width: ${e=>e.$pct}%;
  background: ${e=>e.$gradient};
  border-radius: 100px;
  ${e=>e.$animate&&se`transition: width 0.5s cubic-bezier(0.4,0,0.2,1);`}
`,gh=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,E6=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,xh=x.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #2563eb;
  font-family: 'Inter', sans-serif;
`,P6="linear-gradient(90deg, #2563eb, #0891b2)";function iu({value:e,max:r=100,height:i=6,gradient:a=P6,showLabel:c=!1,labelPosition:d="right",animate:f=!0,className:m}){const h=Math.min(100,Math.max(0,e/r*100));return c&&d==="above"?s.jsxs(gh,{className:m,children:[s.jsxs(E6,{children:[s.jsxs("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:600},children:[e," / ",r]}),s.jsxs(xh,{children:[Math.round(h),"%"]})]}),s.jsx(ru,{$h:i,children:s.jsx(ou,{$pct:h,$gradient:a,$animate:f})})]}):c&&d==="right"?s.jsxs(gh,{className:m,style:{flexDirection:"row",alignItems:"center",gap:"0.75rem"},children:[s.jsx(ru,{$h:i,style:{flex:1},children:s.jsx(ou,{$pct:h,$gradient:a,$animate:f})}),s.jsxs(xh,{style:{flexShrink:0},children:[Math.round(h),"%"]})]}):s.jsx(ru,{$h:i,className:m,children:s.jsx(ou,{$pct:h,$gradient:a,$animate:f})})}const T6=x.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`,I6=x.div`
  width: ${e=>e.$status==="active"?"24px":"8px"};
  height: 8px;
  border-radius: 100px;
  background: ${e=>e.$status==="done"||e.$status==="active"?e.$color:"rgba(29,78,216,0.15)"};
  opacity: ${e=>e.$status==="active"?1:e.$status==="done"?.6:.4};
  transition: all 0.3s;
`;function R6({current:e,total:r,completedColor:i="linear-gradient(90deg,#2563eb,#0891b2)",className:a}){return s.jsx(T6,{className:a,children:Array.from({length:r}).map((c,d)=>s.jsx(I6,{$status:d<e?"done":d===e?"active":"pending",$color:i},d))})}const A6=x.div`
  background: white;
  border-radius: ${e=>e.$radius??16}px;
  border: 1px solid rgba(29,78,216,0.08);
  padding: ${e=>e.$pad??"1.5rem"};
  transition: all 0.22s;

  ${e=>e.$hover&&se`
    cursor: pointer;
    &:hover {
      border-color: rgba(29,78,216,0.22);
      box-shadow: 0 10px 36px rgba(29,78,216,0.1);
      transform: translateY(-2px);
    }
  `}
`;function yh({hover:e,padding:r,radius:i,children:a,...c}){return s.jsx(A6,{$hover:e,$pad:r,$radius:i,...c,children:a})}const O6=x.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: ${e=>e.$radius}px;
  background: ${e=>e.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,m0=x.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: ${e=>e.$size??"1rem"};
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.4rem;
  line-height: 1.3;
`,h0=x.p`
  font-size: ${e=>e.$size??"0.82rem"};
  color: #4b5684;
  line-height: 1.6;
  margin: 0;
`,N6=x.div`
  background: white;
  border-radius: 16px;
  border: 2px solid ${e=>e.$state==="selected"?e.$accent:"rgba(29,78,216,0.08)"};
  padding: 1.5rem;
  cursor: ${e=>e.$state==="disabled"?"not-allowed":"pointer"};
  transition: all 0.22s;
  position: relative;
  overflow: hidden;

  ${e=>e.$state==="selected"&&se`
    box-shadow: 0 0 0 4px ${e.$accent}20, 0 12px 40px rgba(29,78,216,0.12);
  `}
  ${e=>e.$state==="disabled"&&se`opacity: 0.45; pointer-events: none;`}

  &:hover:not([data-disabled="true"]) {
    border-color: rgba(29,78,216,0.25);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(29,78,216,0.1);
  }
`,L6=x.div`
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;function M6({state:e="default",accentColor:r="#2563eb",icon:i,iconGradient:a,title:c,text:d,onClick:f,className:m,style:h}){return s.jsxs(N6,{$state:e,$accent:r,onClick:e!=="disabled"?f:void 0,"data-disabled":e==="disabled",className:m,style:h,children:[e==="selected"&&s.jsx(L6,{$color:r,children:s.jsx(Ni,{size:11,color:"white"})}),s.jsx(O6,{$bg:a,$size:48,$radius:14,style:{marginBottom:"1rem"},children:i}),s.jsx(m0,{children:c}),s.jsx(h0,{children:d})]})}const D6=x.div`
  background: white;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.08);
  padding: 1.375rem 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.22s;

  &:hover {
    border-color: rgba(29,78,216,0.2);
    box-shadow: 0 8px 24px rgba(29,78,216,0.08);
    transform: translateY(-2px);
  }
`,B6=x.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 10px;
  background: ${e=>e.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;function F6({icon:e,iconGradient:r="linear-gradient(135deg,#2563eb,#0891b2)",iconSize:i=36,title:a,text:c,...d}){return s.jsxs(D6,{...d,children:[s.jsx(B6,{$bg:r,$size:i,children:e}),s.jsxs("div",{children:[s.jsx(m0,{style:{fontSize:"0.95rem",marginBottom:"0.35rem"},children:a}),s.jsx(h0,{children:c})]})]})}const U6=x.div`
  background: ${e=>e.$active?"linear-gradient(135deg,#2563eb,#1d4ed8)":"white"};
  border-radius: 16px;
  border: ${e=>e.$active?"none":"1px solid rgba(29,78,216,0.08)"};
  padding: 1.5rem;
  transition: all 0.22s;
  cursor: pointer;

  &:hover {
    box-shadow: ${e=>e.$active?"0 12px 40px rgba(37,99,235,0.3)":"0 8px 24px rgba(29,78,216,0.1)"};
    transform: translateY(-2px);
  }
`,W6=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.$active?"rgba(255,255,255,0.6)":"#2563eb"};
  margin-bottom: 0.5rem;
`,Z6=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${e=>e.$active?"white":"#0c1445"};
  margin-bottom: 0.3rem;
`,q6=x.p`
  font-size: 0.8rem;
  color: ${e=>e.$active?"rgba(255,255,255,0.7)":"#4b5684"};
  line-height: 1.55;
  margin: 0;
`;function V6({step:e,title:r,text:i,state:a="default",onClick:c,...d}){const f=a==="active";return s.jsxs(U6,{$active:f,onClick:c,...d,children:[s.jsx(W6,{$active:f,children:e}),s.jsx(Z6,{$active:f,children:r}),s.jsx(q6,{$active:f,children:i})]})}const H6=x.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  background: ${e=>e.$selected?e.$gradient:"white"};
  border: 2px solid ${e=>e.$selected?"transparent":"rgba(29,78,216,0.12)"};
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: ${e=>e.$selected?700:500};
  color: ${e=>e.$selected?"white":"#0c1445"};
  transition: all 0.18s;
  text-align: left;
  width: 100%;
  outline: none;

  /* when not selected, use solid bg highlight */
  ${e=>!e.$selected&&se`
    &:hover {
      border-color: rgba(29,78,216,0.3);
      background: #f5f8ff;
      transform: translateX(3px);
    }
    &:focus-visible {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
    }
  `}
  ${e=>e.$selected&&se`
    box-shadow: 0 4px 16px ${e.$color}35;
  `}
`,G6=x.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$selected?"rgba(255,255,255,0.6)":"#d1d5db"};
  background: ${e=>e.$selected?"rgba(255,255,255,0.25)":"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.18s;
`,J6=x.span`
  font-size: 1.125rem;
  line-height: 1;
  flex-shrink: 0;
`;function Q6({id:e,emoji:r,label:i,selected:a=!1,accentColor:c="#2563eb",accentGradient:d="linear-gradient(135deg,#2563eb,#1d4ed8)",onChange:f,className:m}){return s.jsxs(H6,{type:"button",$selected:a,$color:c,$gradient:d,onClick:()=>f(e),"aria-pressed":a,className:m,children:[s.jsx(G6,{$selected:a,$color:c,children:a&&s.jsx(Ni,{size:11,color:"white",strokeWidth:3})}),r&&s.jsx(J6,{children:r}),s.jsx("span",{style:{flex:1},children:i})]})}const Y6=x.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$gap};
  width: 100%;
`;function vh({value:e,onChange:r,options:i,accentColor:a,accentGradient:c,gap:d="0.625rem",className:f}){return s.jsx(Y6,{$gap:d,className:f,children:i.map(m=>s.jsx(Q6,{...m,selected:e===m.id,accentColor:a,accentGradient:c,onChange:r},m.id))})}const xa={info:{bg:"#eff6ff",border:"#2563eb",color:"#1e3a8a",icon:Pg},success:{bg:"#f0fdf4",border:"#16a34a",color:"#14532d",icon:xo},warning:{bg:"#fffbeb",border:"#f59e0b",color:"#78350f",icon:W5},error:{bg:"#fef2f2",border:"#dc2626",color:"#7f1d1d",icon:Gu}},K6=x.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border-left: 4px solid;
  background: ${e=>xa[e.$type].bg};
  border-color: ${e=>xa[e.$type].border};
  color: ${e=>xa[e.$type].color};
`,X6=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`,eC=x.p`
  font-size: 0.82rem;
  line-height: 1.55;
  margin: 0;
  opacity: 0.85;
`,tC=x.div`flex: 1;`,nC=x.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.5;
  padding: 0;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
`;function sa({type:e="info",title:r,children:i,onClose:a,className:c}){const{icon:d}=xa[e];return s.jsxs(K6,{$type:e,className:c,children:[s.jsx(d,{size:18,style:{flexShrink:0,marginTop:1}}),s.jsxs(tC,{children:[r&&s.jsx(X6,{children:r}),s.jsx(eC,{children:i})]}),a&&s.jsx(nC,{onClick:a,"aria-label":"Fechar",children:s.jsx(Li,{size:15})})]})}const rC=mt`
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,g0={info:{bg:"#0c1445",icon:Pg,iconColor:"#60a5fa"},success:{bg:"#0c1445",icon:xo,iconColor:"#4ade80"},error:{bg:"#dc2626",icon:Gu,iconColor:"#fca5a5"}},oC=x.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.125rem;
  border-radius: 12px;
  background: ${e=>g0[e.$type].bg};
  box-shadow: 0 8px 32px rgba(12,20,69,0.28);
  min-width: 280px;
  max-width: 400px;
  animation: ${rC} 0.3s ease;
`,iC=x.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
  font-family: 'Inter', sans-serif;
`,sC=x.button`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255,255,255,0.5);
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  flex-shrink: 0;
  &:hover { color: white; }
`;function su({type:e="info",children:r,onClose:i,className:a}){const{icon:c,iconColor:d}=g0[e];return s.jsxs(oC,{$type:e,className:a,children:[s.jsx(c,{size:18,color:d,style:{flexShrink:0}}),s.jsx(iC,{children:r}),i&&s.jsx(sC,{onClick:i,"aria-label":"Fechar",children:s.jsx(Li,{size:15})})]})}const aC=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 1rem;
`,lC=x.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #2563eb;
`,cC=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.125rem;
  color: #0c1445;
  margin-bottom: 0.5rem;
`,uC=x.p`
  font-size: 0.875rem;
  color: #4b5684;
  margin-bottom: 1.5rem;
  max-width: 320px;
`;function dC({icon:e,title:r,text:i,action:a,className:c}){return s.jsxs(aC,{className:c,children:[s.jsx(lC,{children:e}),s.jsx(cC,{children:r}),i&&s.jsx(uC,{children:i}),a]})}const x0={xs:24,sm:32,md:40,lg:48,xl:64},fC={true:"#22c55e",away:"#f59e0b",busy:"#dc2626",false:"#9ca3af"},y0=x.div`
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border-radius: 50%;
  background: ${e=>e.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  color: white;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  font-size: ${e=>Math.round(e.$px*.34)}px;
  user-select: none;
`,pC=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,mC=x.div`
  width: ${e=>Math.max(8,Math.round(e.$size*.22))}px;
  height: ${e=>Math.max(8,Math.round(e.$size*.22))}px;
  border-radius: 50%;
  background: ${e=>fC[e.$status]??"#9ca3af"};
  border: 2px solid white;
  position: absolute;
  bottom: 0;
  right: 0;
`;function wn({initials:e,src:r,size:i="md",gradient:a="linear-gradient(135deg, #2563eb, #0891b2)",online:c,...d}){const f=typeof i=="number"?i:x0[i],m=c===void 0?void 0:String(c);return s.jsxs(y0,{$px:f,$bg:a,...d,children:[r?s.jsx(pC,{src:r,alt:e??""}):e,m!==void 0&&s.jsx(mC,{$status:m,$size:f})]})}const hC=x.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: ${e=>-e.$offset}px;
  }

  & > * {
    outline: 2px solid white;
    border-radius: 50%;
  }
`,gC=x(y0)`
  background: #e2eaff;
  color: #1d4ed8;
  font-size: ${e=>Math.round(e.$px*.3)}px;
  font-weight: 700;
`;function xC({avatars:e,size:r="sm",max:i=4,className:a}){const c=typeof r=="number"?r:x0[r],d=e.slice(0,i),f=e.length-i;return s.jsxs(hC,{$offset:Math.round(c*.3),className:a,children:[d.map((m,h)=>s.jsx(wn,{size:r,...m},h)),f>0&&s.jsxs(gC,{$px:c,$bg:"#e2eaff",children:["+",f]})]})}const yC=x.div`
  overflow-x: auto;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.09);

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(29,78,216,0.2);
    border-radius: 2px;
  }
`,vC=x.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
`,wC=x.th`
  text-align: left;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #717182;
  padding: 0.75rem 1.25rem;
  background: #f8faff;
  border-bottom: 1px solid rgba(29,78,216,0.08);
  white-space: nowrap;
`,bC=x.td`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(29,78,216,0.06);
  color: ${e=>e.$mono?"#1d4ed8":"#374151"};
  font-family: ${e=>e.$mono?"'JetBrains Mono','Fira Code',monospace":"inherit"};
  font-size: ${e=>e.$mono?"0.75rem":"inherit"};
  vertical-align: middle;
  text-align: ${e=>e.$align??"left"};
`,kC=x.tr`
  background: ${e=>e.$selected?"#eff6ff":e.$highlighted?"#fefce8":"transparent"};
  opacity: ${e=>e.$muted?.45:1};
  &:last-child td { border-bottom: none; }
  &:hover td { background: rgba(29,78,216,0.02); }
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: background 0.15s;
`;function SC({children:e,...r}){return s.jsx(yC,{...r,children:s.jsx(vC,{children:e})})}function mi({children:e,...r}){return s.jsx(wC,{...r,children:e})}function Qe({mono:e,align:r,children:i,...a}){return s.jsx(bC,{$mono:e,$align:r,...a,children:i})}function aa({selected:e,highlighted:r,muted:i,onClick:a,children:c}){return s.jsx(kC,{$selected:e,$highlighted:r,$muted:i,onClick:a,children:c})}const jC=({children:e})=>s.jsx("thead",{children:e}),$C=({children:e})=>s.jsx("tbody",{children:e}),zC=x.div`
  text-align: ${e=>e.$align};
  ${e=>e.$align==="center"&&"display: flex; flex-direction: column; align-items: center;"}
`,CC=x.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.$dark?"#60a5fa":"#2563eb"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`,_C=x.span`
  display: inline-block;
  width: 20px;
  height: 2px;
  background: ${e=>e.$dark?"#60a5fa":"#2563eb"};
  border-radius: 2px;
  flex-shrink: 0;
`,EC=x.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: ${e=>e.$dark?"white":"#0c1445"};
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
  line-height: 1.15;
`,PC=x.p`
  font-size: 1.0625rem;
  color: ${e=>e.$dark?"rgba(255,255,255,0.6)":"#4b5684"};
  line-height: 1.7;
  max-width: ${e=>e.$align==="center"?"600px":"none"};
`;function wh({eyebrow:e,title:r,subtitle:i,align:a="left",dark:c=!1,className:d}){return s.jsxs(zC,{$align:a,className:d,children:[e&&s.jsxs(CC,{$dark:c,children:[s.jsx(_C,{$dark:c}),e]}),s.jsx(EC,{$dark:c,children:r}),i&&s.jsx(PC,{$dark:c,$align:a,children:i})]})}x.section`
  background: ${e=>e.$bg??"transparent"};
  padding: ${e=>e.$tight?"3rem 12rem":"5rem 1.5rem"};

  @media (max-width: 1280px) {
    padding: ${e=>e.$tight?"2rem 1rem":"3.5rem 1rem"};
  }
`;x.div`
  // max-width: 1366px;
  margin: 0 auto;
`;const TC=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,bh=x.div`
  flex: 1;
  height: 1px;
  background: ${e=>e.$gradient?"linear-gradient(90deg, transparent, rgba(29,78,216,0.25), transparent)":"rgba(29,78,216,0.1)"};
`,IC=x.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
`,RC=x.div`
  height: 1px;
  background: rgba(29,78,216,0.1);
  margin: ${e=>e.$my};
`;function au({my:e="0",gradient:r=!1,label:i,className:a}){return i?s.jsxs(TC,{className:a,style:{margin:e?`${e} 0`:void 0},children:[s.jsx(bh,{$gradient:r}),s.jsx(IC,{children:i}),s.jsx(bh,{$gradient:r})]}):s.jsx(RC,{$my:e,className:a})}const sn=x.code`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78em;
  background: #f0f4ff;
  color: #1d4ed8;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(29,78,216,0.1);
`,kh=x.pre`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78rem;
  background: #0c1445;
  color: #93c5fd;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  overflow-x: auto;
  line-height: 1.65;
  margin: 0;
`,AC=mt`
  0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
  50%      { box-shadow: 0 0 0 12px rgba(245,158,11,0); }
`,OC=x.div`
  background: #f0f3fb;
  min-height: 100vh;
  padding-bottom: 8rem;
  font-family: 'Inter', sans-serif;
`,NC=x.div`
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 4rem 2rem 0;
`,LC=x.div`
  // max-width: 1366px;
  margin: 0 auto;
  padding-bottom: 2rem;
`,MC=x.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60a5fa;
  margin-bottom: 0.75rem;
`,DC=x.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
`,BC=x.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 2rem;
`,FC=x.div`
  background: rgba(0,0,0,0.25);
  border-top: 1px solid rgba(255,255,255,0.07);
  overflow-x: auto;
  &::-webkit-scrollbar { height: 0; }
`,UC=x.div`
  // max-width: 1366px;
  margin: 0 auto;
  display: flex;
  padding: 0 2rem;
  gap: 0.25rem;
`,WC=x.a`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.45);
  padding: 0.875rem 1rem;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
  &:hover { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.3); }
`,ZC=x.div`
  // max-width: 1366px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`,qt=x.section``,Vt=x.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(29,78,216,0.12);
`,Ht=x.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: 800;
  color: #0c1445;
  letter-spacing: -0.02em;
`,Gt=x.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #dbeafe;
  color: #1e40af;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
`,pe=x.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #4b5684;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin: 2.5rem 0 1.25rem;
`,wr=x.p`
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`,he=x.div`
  background: ${e=>e.$dark?"#0c1445":e.$bg??"white"};
  border-radius: 16px;
  border: 1px solid ${e=>e.$dark?"rgba(255,255,255,0.07)":"rgba(29,78,216,0.08)"};
  padding: ${e=>e.$pad??"2rem"};
  margin-bottom: 0.75rem;
`,hi=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: ${e=>e.$align??"flex-end"};
`,ut=x.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.$center?"center":"flex-start"};
  gap: 0.5rem;
`,dt=x.span`
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${e=>e.$dark?"rgba(255,255,255,0.35)":"#9ca3af"};
`,Ne=x.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap!==!1?"wrap":"nowrap"};
  gap: ${e=>e.$gap||"1rem"};
  align-items: ${e=>e.$align||"flex-start"};
`,Sh=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${e=>e.$gradient||"linear-gradient(160deg,#0c1445,#0f2050)"};
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  flex-wrap: wrap;
`,jh=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: white;
  margin-right: auto;
`,$h=x.div`
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: ${e=>e.$dev?"linear-gradient(135deg,rgba(230,50,200,0.2),rgba(226,105,248,0.5))":"linear-gradient(135deg,#2563eb,#0891b2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,zh=x.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: ${e=>e.$active?"rgba(255,255,255,0.12)":"transparent"};
  color: ${e=>e.$active?"white":"rgba(255,255,255,0.6)"};
  border: none;
  border-radius: 7px;
  padding: 0.375rem 0.625rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.18s;
  &:hover { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.9); }
`,Ch=x.div`
  background: #0c1445;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 200px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
`,ao=x.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.625rem 0.875rem;
  border-radius: 8px;
  background: ${e=>e.$active?"rgba(255,255,255,0.08)":"transparent"};
  color: ${e=>e.$active?"white":"rgba(255,255,255,0.7)"};
  border: none;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  font-family: 'Inter', sans-serif;
`,qC=x.div`
  background: linear-gradient(${e=>e.$gradient});
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.4rem;
`,VC=x.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.875rem 1.125rem;
  background: transparent;
  border: none;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`,HC=x.div`
  max-height: ${e=>e.$open?"200px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${e=>e.$open?"0 1.125rem 0.875rem":"0 1.125rem"};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,GC=x.a`
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;
  text-decoration: none;
  padding: 0.3rem 0;
  &:hover { color: white; }
`,_h=x.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.875rem 1.375rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(245,158,11,0.35);
  ${e=>e.$pulse&&se`animation: ${AC} 3s ease-in-out infinite;`}
`,lu=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.875rem;
`,cu=x.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(29,78,216,0.08);
  background: white;
`,uu=x.div`
  background: ${e=>e.$c};
  height: ${e=>e.$h!==void 0?e.$h:68}px;
`,du=x.div`padding: 0.625rem 0.875rem;`,fu=x.p`font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 700; color: #0c1445; margin-bottom: 0.15rem;`,pu=x.p`font-size: 0.68rem; color: #717182;`,mu=x.p`font-size: 0.65rem; color: #2563eb; font-weight: 600; margin-top: 0.2rem; font-family: monospace;`,JC=x.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 0.875rem;`,QC=x.div`border-radius: 12px; overflow: hidden; border: 1px solid rgba(29,78,216,0.08);`,YC=x.div`background: ${e=>e.$g}; height: 88px;`,KC=x.div`background: white; padding: 0.75rem 1rem;`,XC=x.p`font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 700; color: #0c1445; margin-bottom: 0.25rem;`,e_=x.p`font-size: 0.7rem; color: #2563eb; font-weight: 600; margin-bottom: 0.25rem;`,t_=x.p`font-size: 0.62rem; color: #9ca3af; word-break: break-all; font-family: monospace;`,n_=x.div`
  background: white;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.08);
  overflow: hidden;
`,r_=x.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid #f0f4ff;
  flex-wrap: wrap;
  &:last-child { border-bottom: none; }
  &:hover { background: #f8faff; }
`,o_=x.span`font-size: 0.68rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.07em; width: 76px; flex-shrink: 0;`,i_=x.span`font-size: 0.68rem; color: #2563eb; font-weight: 600; font-family: monospace; width: 80px; flex-shrink: 0;`,s_=x.p`
  font-family: ${e=>e.$font};
  font-size: ${e=>e.$sz};
  font-weight: ${e=>e.$w};
  color: #0c1445;
  line-height: 1.25;
  margin: 0;
`,a_=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  min-width: 62px;
`,l_=x.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
`,c_=x.span`font-size: 0.6rem; color: #9ca3af; font-weight: 700; text-align: center;`,u_=[{name:"Navy 950",hex:"#0c1445",token:"--foreground"},{name:"Navy 900",hex:"#0f2050",token:"--sidebar"},{name:"Blue 800",hex:"#1e3a8a",token:"--secondary-foreground"},{name:"Blue 700",hex:"#1d4ed8",token:"--primary"},{name:"Blue 600",hex:"#2563eb",token:"--ring"},{name:"Blue 400",hex:"#60a5fa",token:"--sidebar-primary"}],d_=[{name:"Cyan 600",hex:"#0891b2",token:"--accent"},{name:"Cyan 500",hex:"#06b6d4",token:"cyan-500"},{name:"Amber 500",hex:"#f59e0b",token:"quiz-btn-base"},{name:"Amber 600",hex:"#d97706",token:"quiz-btn-dark"}],f_=[{name:"Success",hex:"#059669",token:"green-600"},{name:"Success BG",hex:"#dcfce7",token:"green-100"},{name:"Purple",hex:"#7c3aed",token:"violet-600"},{name:"Purple BG",hex:"#ede9fe",token:"violet-100"},{name:"Error",hex:"#dc2626",token:"--destructive"},{name:"Error BG",hex:"#fee2e2",token:"red-100"},{name:"Warning",hex:"#d97706",token:"amber-600"},{name:"Warning BG",hex:"#ffedd5",token:"orange-100"}],Eh=[{name:"Hero Home",g:"linear-gradient(160deg,#0c1445 0%,#0f2050 50%,#0a1930 100%)",use:"Hero da home, Navbar padrão"},{name:"Navy Dark",g:"linear-gradient(160deg,#0c1445 0%,#1e3a8a 100%)",use:"Hero Web, CTAs, AI banner"},{name:"Blue Action",g:"linear-gradient(135deg,#2563eb,#1d4ed8)",use:"Botão Primary, Navbar ativo"},{name:"Blue-Cyan",g:"linear-gradient(90deg,#2563eb,#0891b2)",use:"ProgressBar, gráficos"},{name:"Cyan Action",g:"linear-gradient(135deg,#0891b2,#0e7490)",use:"Botão Mobile, card Mobile"},{name:"Amber Quiz",g:"linear-gradient(135deg,#f59e0b,#d97706)",use:"Botão Orçamento (3 pontos de entrada)"},{name:"Green WA",g:"linear-gradient(135deg,#16a34a,#15803d)",use:"Botão WhatsApp"},{name:"Green System",g:"linear-gradient(135deg,#059669,#047857)",use:"Cards sistemas locais"},{name:"Purple",g:"linear-gradient(135deg,#7c3aed,#6d28d9)",use:"Cards software"},{name:"Logo Grad",g:"linear-gradient(135deg,#2563eb,#0891b2)",use:"LogoIcon + BrandIcon footer"}],p_=[{token:"Display",sz:"clamp(2.2rem,6vw,4rem)",font:"'Plus Jakarta Sans'",w:800,sample:"Seu negócio no digital"},{token:"H1",sz:"clamp(2rem,5vw,3.5rem)",font:"'Plus Jakarta Sans'",w:800,sample:"Sites e Sistemas Web"},{token:"H2",sz:"clamp(1.6rem,3vw,2.25rem)",font:"'Plus Jakarta Sans'",w:800,sample:"Qual é o certo para você?"},{token:"H3 Card",sz:"1.05rem",font:"'Plus Jakarta Sans'",w:700,sample:"Sistema com Login"},{token:"Body L",sz:"1.125rem",font:"'Inter'",w:400,sample:"Explicamos tudo sem termos técnicos."},{token:"Body",sz:"1rem",font:"'Inter'",w:400,sample:"Cada negócio é único — oferecemos desde sites simples."},{token:"Body S",sz:"0.9rem",font:"'Inter'",w:400,sample:"Aparece no Google, funciona no celular."},{token:"Caption",sz:"0.78rem",font:"'Inter'",w:400,sample:"Login individual · Backup automático · Segurança"},{token:"Label",sz:"0.72rem",font:"'Inter'",w:700,sample:"SOLUÇÕES DIGITAIS · O QUE FAZEMOS"}],m_=[{icon:s.jsx(vo,{size:20}),label:"Globe"},{icon:s.jsx(rr,{size:20}),label:"Smartphone"},{icon:s.jsx(Ci,{size:20}),label:"Monitor"},{icon:s.jsx(yo,{size:20}),label:"Database"},{icon:s.jsx($r,{size:20}),label:"Shield"},{icon:s.jsx(Mi,{size:20}),label:"Zap"},{icon:s.jsx(So,{size:20}),label:"Bell"},{icon:s.jsx(Ig,{size:20}),label:"MessageSquare"},{icon:s.jsx(R5,{size:20}),label:"Settings"},{icon:s.jsx(H5,{size:20}),label:"User"},{icon:s.jsx(u5,{size:20}),label:"LogOut"},{icon:s.jsx(Tg,{size:20}),label:"Menu"},{icon:s.jsx(ft,{size:20}),label:"ArrowRight"},{icon:s.jsx(Ni,{size:20}),label:"Check"},{icon:s.jsx(Li,{size:20}),label:"X"},{icon:s.jsx(Og,{size:20}),label:"Search"},{icon:s.jsx(q5,{size:20}),label:"Upload"},{icon:s.jsx(F5,{size:20}),label:"Star"},{icon:s.jsx(zi,{size:20}),label:"Code2 (Logo)"},{icon:s.jsx(Sa,{size:20}),label:"Mail"},{icon:s.jsx(ja,{size:20}),label:"Phone"}],h_=[{id:"home",label:"Início",gradient:"160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%",links:["Soluções Digitais","O que fazemos","Recursos","Como funciona"]},{id:"web",label:"Sites & Web",gradient:"160deg, #0c1445 0%, #1e3a8a 100%",links:["Hero","Tipos de site","Recursos extras"]},{id:"mobile",label:"Apps Mobile",gradient:"160deg, #0a1930 0%, #0e7490 100%",links:["Hero","Plataformas","Perfis","Exemplos"]},{id:"software",label:"Softwares",gradient:"160deg, #1e1040 0%, #5b21b6 100%",links:["Hero","Tipos","Recursos"]},{id:"sistemas-locais",label:"Sistemas Locais",gradient:"160deg, #042c1e 0%, #059669 100%",links:["Hero","Sistemas","Controle de Acesso"]}];function g_(){const[e,r]=_.useState(!1),[i,a]=_.useState(!0),[c,d]=_.useState(!1),[f,m]=_.useState(!0),[h,y]=_.useState("web"),[v,b]=_.useState(""),[S,P]=_.useState(!1),[O,$]=_.useState("management"),[A,N]=_.useState({home:!0}),[R,H]=_.useState(44),[G,Q]=_.useState(1),[V,W]=_.useState("web"),X=I=>N(me=>({...me,[I]:!me[I]})),te=[["#botoes","Botões"],["#badges","Badges"],["#inputs","Inputs"],["#cards","Cards"],["#selecoes","Seleções"],["#navegacao","Navegação"],["#feedback","Feedback"],["#tabela","Tabela"],["#tipografia","Tipografia"],["#cores","Cores"],["#gradientes","Gradientes"],["#padroes","Padrões"]];return s.jsxs(OC,{children:[s.jsxs(NC,{children:[s.jsxs(LC,{children:[s.jsx(MC,{children:"OG Labs · Design System · v1.0"}),s.jsx(DC,{children:"Biblioteca de Componentes"}),s.jsx(BC,{children:"Todos os componentes reais e reutilizáveis — com variações e estados interativos."})]}),s.jsx(FC,{children:s.jsx(UC,{children:te.map(([I,me])=>s.jsx(WC,{href:I,children:me},I))})})]}),s.jsxs(ZC,{children:[s.jsxs(qt,{id:"botoes",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Botões"}),s.jsx(Gt,{children:"Button · PillButton · ButtonGroup"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Button, PillButton, ButtonGroup } from '../components/ui'"})]}),s.jsx(pe,{children:"Variantes — todas clicáveis"}),s.jsx(he,{children:s.jsx(hi,{children:["primary","secondary","ghost","danger","amber","cyan","green","white"].map(I=>s.jsxs(ut,{children:[s.jsx(dt,{children:I}),s.jsx(Re,{variant:I,children:I==="primary"?"Continuar":I==="white"?"White":I.charAt(0).toUpperCase()+I.slice(1)})]},I))})}),s.jsx(he,{$dark:!0,children:s.jsxs(hi,{children:[s.jsxs(ut,{children:[s.jsx(dt,{$dark:!0,children:"White em fundo escuro"}),s.jsxs(Re,{variant:"white",children:[s.jsx(ft,{size:14})," Começar"]})]}),s.jsxs(ut,{children:[s.jsx(dt,{$dark:!0,children:"Amber em fundo escuro"}),s.jsx(Re,{variant:"amber",children:"🧮 Orçamento"})]}),s.jsxs(ut,{children:[s.jsx(dt,{$dark:!0,children:"Ghost em fundo escuro"}),s.jsx(Re,{variant:"ghost",style:{color:"rgba(255,255,255,0.7)",borderColor:"rgba(255,255,255,0.2)"},children:"Ver mais"})]})]})}),s.jsx(pe,{children:"Estados"}),s.jsx(he,{children:s.jsxs(hi,{children:[s.jsxs(ut,{children:[s.jsx(dt,{children:"Default"}),s.jsx(Re,{children:"Continuar"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Disabled"}),s.jsx(Re,{disabled:!0,children:"Continuar"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Loading"}),s.jsx(Re,{loading:!0,children:"Continuar"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Com leftIcon"}),s.jsx(Re,{leftIcon:s.jsx(ft,{size:14}),children:"Próxima"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Com rightIcon"}),s.jsx(Re,{rightIcon:s.jsx(ft,{size:14}),children:"Próxima"})]})]})}),s.jsx(pe,{children:"Tamanhos"}),s.jsx(he,{children:s.jsxs(hi,{$align:"center",children:[s.jsxs(ut,{children:[s.jsx(dt,{children:"Large"}),s.jsx(Re,{size:"lg",leftIcon:s.jsx(ft,{size:16}),children:"Começar agora"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Medium (padrão)"}),s.jsx(Re,{size:"md",leftIcon:s.jsx(ft,{size:14}),children:"Continuar"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Small"}),s.jsx(Re,{size:"sm",leftIcon:s.jsx(ft,{size:12}),children:"Ver mais"})]})]})}),s.jsx(pe,{children:"PillButton (FloatingQuizBtn) e fullWidth"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.875rem",maxWidth:400},children:[s.jsx(dh,{onClick:()=>{},children:"🧮 Faça um Orçamento Grátis"}),s.jsx(Re,{variant:"primary",fullWidth:!0,leftIcon:s.jsx(Sa,{size:15}),children:"Enviar mensagem"}),s.jsx(Re,{variant:"secondary",fullWidth:!0,leftIcon:s.jsx(ja,{size:15}),children:"Ligar agora"})]})}),s.jsx(pe,{children:"ButtonGroup"}),s.jsx(he,{children:s.jsxs(t6,{children:[s.jsx(Re,{leftIcon:s.jsx(ft,{size:14}),children:"Quero começar"}),s.jsx(Re,{variant:"ghost",children:"Ver exemplos"})]})})]}),s.jsxs(qt,{id:"badges",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Badges e Tags"}),s.jsx(Gt,{children:"Badge · aliases semânticos"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Badge, BadgeWeb, BadgeMobile, ... } from '../components/ui'"})]}),s.jsx(pe,{children:"Variantes"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"0.625rem",$wrap:!0,$align:"center",children:["blue","cyan","purple","green","amber","red","gray","outline"].map(I=>s.jsx(wt,{variant:I,children:I},I))})}),s.jsx(pe,{children:"Com ponto de status"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"0.75rem",$wrap:!0,$align:"center",children:[s.jsx(wt,{variant:"green",dot:!0,children:"Online"}),s.jsx(wt,{variant:"amber",dot:!0,children:"Aguardando"}),s.jsx(wt,{variant:"red",dot:!0,children:"Offline"}),s.jsx(wt,{variant:"gray",dot:!0,children:"Inativo"})]})}),s.jsx(pe,{children:"Aliases semânticos por página"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"0.75rem",$wrap:!0,$align:"center",children:[s.jsx(fh,{children:"Sites Web"}),s.jsx(ph,{children:"Apps Mobile"}),s.jsx(mh,{children:"Softwares"}),s.jsx(hh,{children:"Sistemas Locais"}),s.jsx(i6,{children:"Em breve"})]})}),s.jsx(pe,{children:"Tamanhos"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1rem",$wrap:!0,$align:"center",children:[s.jsxs(ut,{children:[s.jsx(dt,{children:"Médio (padrão)"}),s.jsx(wt,{children:"Sites & Sistemas Web"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Pequeno"}),s.jsx(wt,{size:"sm",children:"Sites & Sistemas Web"})]})]})})]}),s.jsxs(qt,{id:"inputs",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Inputs e Formulário"}),s.jsx(Gt,{children:"Field · Input · Select · Textarea"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Field, Input, Select, Textarea } from '../components/ui'"})]}),s.jsx(pe,{children:"Input — todos os estados"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(st,{label:"Padrão",hint:"Campo obrigatório",style:{maxWidth:260},children:s.jsx(an,{placeholder:"Seu nome"})}),s.jsx(st,{label:"Em foco",style:{maxWidth:260},children:s.jsx(an,{fieldState:"focus",defaultValue:"João Silva",readOnly:!0})}),s.jsx(st,{label:"Sucesso",success:"Nome válido ✓",style:{maxWidth:260},children:s.jsx(an,{fieldState:"success",defaultValue:"João Silva",readOnly:!0,rightIcon:s.jsx(Ni,{size:15,color:"#16a34a"})})}),s.jsx(st,{label:"Erro",error:"Nome deve ter ao menos 2 caracteres",style:{maxWidth:260},children:s.jsx(an,{fieldState:"error",defaultValue:"J",readOnly:!0})}),s.jsx(st,{label:"Desabilitado",hint:"Não editável",style:{maxWidth:260},children:s.jsx(an,{disabled:!0,defaultValue:"Campo bloqueado"})})]})}),s.jsx(pe,{children:"Input com ícones"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(st,{label:"Com ícone esquerda",style:{maxWidth:280},children:s.jsx(an,{placeholder:"contato@empresa.com",leftIcon:s.jsx(Sa,{size:15})})}),s.jsx(st,{label:"Com ícone busca",style:{maxWidth:280},children:s.jsx(an,{placeholder:"Buscar solução…",leftIcon:s.jsx(Og,{size:15})})}),s.jsx(st,{label:"Senha",style:{maxWidth:280},children:s.jsx(an,{type:S?"text":"password",value:v,onChange:I=>b(I.target.value),placeholder:"Senha",rightIcon:S?s.jsxs("svg",{width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[s.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"}),s.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):s.jsxs("svg",{width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),onRightIconClick:()=>P(!S)})})]})}),s.jsx(pe,{children:"Select"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(st,{label:"Padrão",style:{maxWidth:260},children:s.jsxs(lo,{children:[s.jsx("option",{value:"",children:"Selecione uma opção"}),s.jsx("option",{children:"Sites & Sistemas Web"}),s.jsx("option",{children:"Apps Mobile"}),s.jsx("option",{children:"Softwares"})]})}),s.jsx(st,{label:"Em foco",style:{maxWidth:260},children:s.jsxs(lo,{fieldState:"focus",defaultValue:"Sites & Sistemas Web",children:[s.jsx("option",{children:"Sites & Sistemas Web"}),s.jsx("option",{children:"Apps Mobile"})]})}),s.jsx(st,{label:"Erro",error:"Selecione um interesse",style:{maxWidth:260},children:s.jsx(lo,{fieldState:"error",children:s.jsx("option",{value:"",children:"Selecione"})})}),s.jsx(st,{label:"Desabilitado",style:{maxWidth:260},children:s.jsx(lo,{disabled:!0,children:s.jsx("option",{children:"Não disponível"})})})]})}),s.jsx(pe,{children:"Textarea"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(st,{label:"Padrão",hint:"Opcional",style:{maxWidth:360},children:s.jsx(ga,{placeholder:"Descreva sua necessidade…"})}),s.jsx(st,{label:"Erro",error:"Mínimo de 10 caracteres",style:{maxWidth:360},children:s.jsx(ga,{fieldState:"error",defaultValue:"ok",readOnly:!0})})]})}),s.jsx(pe,{children:"Formulário de contato completo"}),s.jsxs(he,{$pad:"2rem",style:{maxWidth:460},children:[s.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"1.125rem",color:"#0c1445",marginBottom:"1.5rem"},children:"Entre em contato"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.125rem"},children:[s.jsx(st,{label:"Nome completo",required:!0,children:s.jsx(an,{placeholder:"João Silva"})}),s.jsx(st,{label:"Telefone / WhatsApp",required:!0,children:s.jsx(an,{placeholder:"(11) 99999-9999",leftIcon:s.jsx(ja,{size:15})})}),s.jsx(st,{label:"Interesse",required:!0,children:s.jsxs(lo,{children:[s.jsx("option",{value:"",children:"Selecione uma opção"}),s.jsx("option",{children:"Sites & Sistemas Web"}),s.jsx("option",{children:"Apps Mobile"}),s.jsx("option",{children:"Softwares"}),s.jsx("option",{children:"Sistemas Locais"})]})}),s.jsx(st,{label:"Mensagem",children:s.jsx(ga,{placeholder:"Descreva o que você precisa…",style:{minHeight:80}})}),s.jsx(Re,{size:"lg",fullWidth:!0,leftIcon:s.jsx(ft,{size:16}),children:"Enviar mensagem"})]})]})]}),s.jsxs(qt,{id:"cards",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Cards"}),s.jsx(Gt,{children:"Card · ServiceCard · FeatureCard · StepCard"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Card, ServiceCard, FeatureCard, StepCard } from '../components/ui'"})]}),s.jsx(pe,{children:"Card genérico"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1rem",$wrap:!0,children:[s.jsxs(yh,{style:{width:220},children:[s.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#0c1445",marginBottom:"0.5rem"},children:"Card base"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#4b5684"},children:"Sem hover — para painéis e conteúdo estático."})]}),s.jsxs(yh,{hover:!0,style:{width:220},children:[s.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#0c1445",marginBottom:"0.5rem"},children:"Card com hover"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#4b5684"},children:"Passe o mouse para ver o efeito."})]})]})}),s.jsx(pe,{children:"ServiceCard — 4 estados (clique para selecionar)"}),s.jsx(he,{children:s.jsx(hi,{children:[{id:"web",gradient:"linear-gradient(135deg,#2563eb,#0891b2)",accent:"#2563eb",icon:s.jsx(vo,{size:22,color:"white"}),title:"Sites Web",text:"Para quem quer ter presença online."},{id:"mobile",gradient:"linear-gradient(135deg,#0891b2,#0e7490)",accent:"#0891b2",icon:s.jsx(rr,{size:22,color:"white"}),title:"Apps Mobile",text:"App nativo iOS e Android."},{id:"software",gradient:"linear-gradient(135deg,#7c3aed,#6d28d9)",accent:"#7c3aed",icon:s.jsx(Ci,{size:22,color:"white"}),title:"Softwares",text:"Programas para Mac e Windows."},{id:"local",gradient:"linear-gradient(135deg,#059669,#047857)",accent:"#059669",icon:s.jsx(yo,{size:22,color:"white"}),title:"Sist. Locais",text:"Bancos de dados locais."}].map(I=>s.jsx(M6,{state:V===I.id?"selected":"default",accentColor:I.accent,icon:I.icon,iconGradient:I.gradient,title:I.title,text:I.text,onClick:()=>W(I.id),style:{width:210}},I.id))})}),s.jsx(pe,{children:"FeatureCard"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"1rem",$wrap:!0,children:[{icon:s.jsx(Mi,{size:18,color:"white"}),title:"Rápido e Seguro",text:"SSL incluso e hospedagem em nuvem com uptime de 99.9%."},{icon:s.jsx($r,{size:18,color:"white"}),title:"Protegido",text:"Backup diário automático com recuperação em 1 clique."},{icon:s.jsx(So,{size:18,color:"white"}),title:"Notificações",text:"Avise clientes por e-mail ou push no celular."}].map(I=>s.jsx(F6,{icon:I.icon,title:I.title,text:I.text,style:{flex:1,minWidth:220}},I.title))})}),s.jsx(pe,{children:"StepCard — clique para ativar"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"0.875rem",$wrap:!0,children:[{n:0,step:"Passo 01",title:"Conversa inicial",text:"Conta pra gente o que você precisa, sem termos técnicos."},{n:1,step:"Passo 02",title:"Proposta clara",text:"Preço fixo, prazo definido, sem surpresas no final."},{n:2,step:"Passo 03",title:"Desenvolvimento",text:"Acompanhe cada etapa — você vai ver o progresso."},{n:3,step:"Passo 04",title:"Entrega e suporte",text:"Recebe pronto e pode contar com a gente depois."}].map(I=>s.jsx(V6,{step:I.step,title:I.title,text:I.text,state:G===I.n?"active":"default",onClick:()=>Q(I.n),style:{flex:1,minWidth:180}},I.n))})})]}),s.jsxs(qt,{id:"selecoes",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Seleções e Controles"}),s.jsx(Gt,{children:"Toggle · Checkbox · RadioGroup · ProgressBar · QuizOptionGroup"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Toggle, Checkbox, RadioGroup, ProgressBar, QuizOptionGroup } from '../components/ui'"})]}),s.jsx(pe,{children:"Toggle"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"2rem",$wrap:!0,$align:"center",children:[s.jsx(nu,{checked:e,onChange:r,label:"Notificações"}),s.jsx(nu,{checked:i,onChange:a,label:"Atualizações ativas"}),s.jsx(nu,{checked:!0,onChange:()=>{},label:"Bloqueado",disabled:!0})]})}),s.jsx(pe,{children:"Checkbox"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"2rem",$wrap:!0,$align:"center",children:[s.jsx(ia,{checked:c,onChange:d,label:"Aceito os termos"}),s.jsx(ia,{checked:f,onChange:m,label:"Receber novidades"}),s.jsx(ia,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Selecionar todos"}),s.jsx(ia,{checked:!0,onChange:()=>{},label:"Bloqueado",disabled:!0})]})}),s.jsx(pe,{children:"RadioGroup"}),s.jsx(he,{children:s.jsx(_6,{value:h,onChange:y,options:[{value:"web",label:"Site / Sistema Web"},{value:"mobile",label:"App Mobile"},{value:"software",label:"Software"},{value:"local",label:"Sistema Local"}]})}),s.jsx(pe,{children:"ProgressBar — interativa (clique nos botões)"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{children:[s.jsx(iu,{value:R,max:100,height:6,showLabel:!0,labelPosition:"above"}),s.jsxs(Ne,{$gap:"0.5rem",style:{marginTop:"0.875rem"},children:[s.jsx(Re,{size:"sm",variant:"ghost",leftIcon:s.jsx(Rg,{size:12}),onClick:()=>H(Math.max(0,R-11)),children:"Voltar"}),s.jsx(Re,{size:"sm",leftIcon:s.jsx($5,{size:12}),onClick:()=>H(Math.min(100,R+11)),children:"Próxima"})]})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Fina (2px)"}),s.jsx(iu,{value:R,height:2})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Grossa (10px)"}),s.jsx(iu,{value:R,height:10})]})]})}),s.jsx(pe,{children:"StepProgress (indicador de etapas do Quiz)"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"1.5rem",$wrap:!0,$align:"center",children:[0,1,2,3,4,5,6,7,8,9].map(I=>s.jsxs(ut,{$center:!0,children:[s.jsxs(dt,{children:[I,"/9"]}),s.jsx(R6,{current:I,total:9})]},I))})}),s.jsx(pe,{children:"QuizOptionGroup — clique para selecionar"}),s.jsx(he,{children:s.jsx("div",{style:{maxWidth:400},children:s.jsx(vh,{value:O,onChange:$,options:[{id:"presence",emoji:"🌐",label:"Um lugar meu na internet"},{id:"management",emoji:"📋",label:"Controlar meu negócio"},{id:"mobile",emoji:"📱",label:"Um aplicativo no celular"},{id:"unsure",emoji:"🤷",label:"Ainda não sei ao certo"}]})})}),s.jsx(pe,{children:"QuizOptionGroup — variantes por página"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"1.5rem",$wrap:!0,children:[{label:"Web (Blue)",accent:"#2563eb",gradient:"linear-gradient(135deg,#2563eb,#1d4ed8)"},{label:"Mobile (Cyan)",accent:"#0891b2",gradient:"linear-gradient(135deg,#0891b2,#0e7490)"},{label:"Software (Purple)",accent:"#7c3aed",gradient:"linear-gradient(135deg,#7c3aed,#6d28d9)"},{label:"Local (Green)",accent:"#059669",gradient:"linear-gradient(135deg,#059669,#047857)"}].map(I=>s.jsxs("div",{style:{flex:1,minWidth:200},children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.75rem"},children:I.label}),s.jsx(vh,{value:"opcao1",onChange:()=>{},options:[{id:"opcao1",emoji:"✓",label:"Opção selecionada"},{id:"opcao2",emoji:"○",label:"Outra opção"}],accentColor:I.accent,accentGradient:I.gradient})]},I.label))})})]}),s.jsxs(qt,{id:"navegacao",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Navegação"}),s.jsx(Gt,{children:"Navbar atoms · Accordion · FloatingBtn · Avatar"})]}),s.jsx(pe,{children:"Navbar — modo simples"}),s.jsxs(Sh,{children:[s.jsx($h,{children:s.jsx(zi,{size:16,color:"white"})}),s.jsx(jh,{children:"OG Labs"}),["Início","Sites & Web","Mobile","Softwares","Locais"].map((I,me)=>s.jsx(zh,{$active:me===0,children:I},I)),s.jsx(Re,{size:"sm",variant:"amber",style:{borderRadius:8},children:"🧮 Orçamento"})]}),s.jsx(pe,{children:"Navbar — modo dropdown (logo verde)"}),s.jsxs(Sh,{$gradient:"linear-gradient(160deg,#0c1445,#1e3a8a)",children:[s.jsx($h,{$dev:!0,children:s.jsx(zi,{size:16,color:"#41ff24"})}),s.jsx(jh,{children:"OG Labs"}),["Início ▾","Sites ▾","Mobile ▾","Software ▾","Locais ▾"].map((I,me)=>s.jsx(zh,{$active:me===2,style:me===2?{color:"#41ff24"}:void 0,children:I},I))]}),s.jsx(pe,{children:"Dropdown em foco"}),s.jsx(he,{$dark:!0,$pad:"1.5rem",children:s.jsxs(Ne,{$gap:"1.5rem",children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Mobile"}),s.jsxs(Ch,{children:[s.jsxs(ao,{$active:!0,children:[s.jsx(rr,{size:13})," App Nativo (iOS/Android)"]}),s.jsx(ao,{children:"Perfis de Usuário"}),s.jsx(ao,{children:"Exemplos de Uso"})]})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Sites & Web"}),s.jsxs(Ch,{children:[s.jsxs(ao,{$active:!0,children:[s.jsx(vo,{size:13})," Site Institucional"]}),s.jsxs(ao,{children:[s.jsx($r,{size:13})," Sistema com Login"]}),s.jsxs(ao,{children:[s.jsx(yo,{size:13})," Recursos Extras"]})]})]})]})}),s.jsx(pe,{children:"Menu mobile — accordion (clique para expandir)"}),s.jsx(he,{$dark:!0,$pad:"1.25rem",children:s.jsxs("div",{style:{maxWidth:360},children:[h_.map(I=>s.jsxs(qC,{$gradient:I.gradient,children:[s.jsxs(VC,{onClick:()=>X(I.id),children:[I.label,A[I.id]?s.jsx(N2,{size:16}):s.jsx(A2,{size:16})]}),s.jsx(HC,{$open:!!A[I.id],children:I.links.map(me=>s.jsx(GC,{href:"#",children:me},me))})]},I.id)),s.jsx(dh,{style:{width:"100%",justifyContent:"center",marginTop:"1rem"},children:"🧮 Faça um Orçamento"})]})}),s.jsx(pe,{children:"FloatingQuizBtn — animação de pulso"}),s.jsx(he,{$bg:"#e8edf7",children:s.jsxs(Ne,{$gap:"2rem",$wrap:!0,$align:"center",children:[s.jsxs(ut,{children:[s.jsx(dt,{children:"Com pulso (loop 3s)"}),s.jsx(_h,{$pulse:!0,children:"🧮 Faça um Orçamento"})]}),s.jsxs(ut,{children:[s.jsx(dt,{children:"Sem pulso"}),s.jsx(_h,{children:"🧮 Faça um Orçamento"})]})]})}),s.jsx(pe,{children:"Avatar — tamanhos e status"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,$align:"center",children:[s.jsx(wn,{initials:"JK",size:"xl",gradient:"linear-gradient(135deg,#2563eb,#0891b2)",online:!0}),s.jsx(wn,{initials:"MS",size:"lg",gradient:"linear-gradient(135deg,#7c3aed,#5b21b6)",online:"away"}),s.jsx(wn,{initials:"RT",size:"md",gradient:"linear-gradient(135deg,#059669,#047857)",online:!1}),s.jsx(wn,{initials:"CL",size:"sm",gradient:"linear-gradient(135deg,#f59e0b,#d97706)"}),s.jsx(wn,{initials:"OG",size:"xs",gradient:"linear-gradient(135deg,#dc2626,#b91c1c)"})]})}),s.jsx(pe,{children:"AvatarGroup"}),s.jsx(he,{children:s.jsx(xC,{size:"md",avatars:[{initials:"JK",gradient:"linear-gradient(135deg,#2563eb,#0891b2)"},{initials:"MS",gradient:"linear-gradient(135deg,#7c3aed,#5b21b6)"},{initials:"RT",gradient:"linear-gradient(135deg,#059669,#047857)"},{initials:"CL",gradient:"linear-gradient(135deg,#f59e0b,#d97706)"},{initials:"AA",gradient:"linear-gradient(135deg,#0891b2,#0e7490)"},{initials:"BB",gradient:"linear-gradient(135deg,#dc2626,#b91c1c)"}],max:4})})]}),s.jsxs(qt,{id:"feedback",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Alertas e Feedback"}),s.jsx(Gt,{children:"Alert · Toast · EmptyState"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Alert, Toast, EmptyState } from '../components/ui'"})]}),s.jsx(pe,{children:"Alert inline — 4 tipos"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.625rem"},children:[s.jsx(sa,{type:"info",title:"Informação",children:"Seu orçamento foi gerado. Entre em contato para confirmar o projeto."}),s.jsx(sa,{type:"success",title:"Mensagem enviada!",children:"Recebemos seu contato e entraremos em até 24 horas no WhatsApp."}),s.jsx(sa,{type:"warning",title:"Atenção",children:"Preencha todos os campos obrigatórios antes de continuar."}),s.jsx(sa,{type:"error",title:"Erro ao enviar",onClose:()=>{},children:"Não foi possível enviar. Tente novamente ou ligue para (11) 99999-9999."})]})}),s.jsx(pe,{children:"Toast — notificações flutuantes"}),s.jsx(he,{$bg:"#e8edf7",$pad:"2rem",children:s.jsxs(Ne,{$gap:"1rem",$wrap:!0,children:[s.jsx(su,{type:"success",onClose:()=>{},children:"Orçamento enviado com sucesso!"}),s.jsx(su,{type:"error",onClose:()=>{},children:"Erro ao processar. Tente novamente."}),s.jsx(su,{type:"info",onClose:()=>{},children:"Atualizando em segundo plano…"})]})}),s.jsx(pe,{children:"EmptyState"}),s.jsx(he,{children:s.jsx(dC,{icon:s.jsx(Ig,{size:30}),title:"Nenhuma mensagem ainda",text:"Quando você enviar um orçamento, ele vai aparecer aqui.",action:s.jsx(Re,{variant:"amber",children:"🧮 Faça seu primeiro orçamento"})})})]}),s.jsxs(qt,{id:"tabela",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Tabela de Dados"}),s.jsx(Gt,{children:"Table · Thead · Tbody · Th · Td · Tr"})]}),s.jsxs(wr,{children:["Importar: ",s.jsx(sn,{children:"import { Table, Thead, Tbody, Th, Td, Tr } from '../components/ui'"})]}),s.jsxs(SC,{children:[s.jsx(jC,{children:s.jsxs("tr",{children:[s.jsx(mi,{children:"Cliente"}),s.jsx(mi,{children:"Solução"}),s.jsx(mi,{children:"Status"}),s.jsx(mi,{children:"Valor"}),s.jsx(mi,{children:"Ação"})]})}),s.jsxs($C,{children:[s.jsxs(aa,{selected:!0,children:[s.jsx(Qe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625rem",children:[s.jsx(wn,{initials:"JK",size:"sm"}),s.jsx("strong",{children:"João K."})]})}),s.jsx(Qe,{children:s.jsx(fh,{children:"Sites Web"})}),s.jsx(Qe,{children:s.jsx(wt,{variant:"amber",dot:!0,children:"Em Proposta"})}),s.jsx(Qe,{mono:!0,children:"R$ 3.500"}),s.jsx(Qe,{children:s.jsx(Re,{size:"sm",variant:"ghost",children:"Ver"})})]}),s.jsxs(aa,{highlighted:!0,children:[s.jsx(Qe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625rem",children:[s.jsx(wn,{initials:"MS",size:"sm",gradient:"linear-gradient(135deg,#059669,#047857)"}),s.jsx("strong",{children:"Maria S."})]})}),s.jsx(Qe,{children:s.jsx(ph,{children:"Mobile"})}),s.jsx(Qe,{children:s.jsx(wt,{variant:"blue",dot:!0,children:"Em Progresso"})}),s.jsx(Qe,{mono:!0,children:"R$ 8.000"}),s.jsx(Qe,{children:s.jsx(Re,{size:"sm",variant:"ghost",children:"Ver"})})]}),s.jsxs(aa,{children:[s.jsx(Qe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625rem",children:[s.jsx(wn,{initials:"RT",size:"sm",gradient:"linear-gradient(135deg,#7c3aed,#5b21b6)"}),s.jsx("strong",{children:"Ricardo T."})]})}),s.jsx(Qe,{children:s.jsx(mh,{children:"Software"})}),s.jsx(Qe,{children:s.jsx(wt,{variant:"green",dot:!0,children:"Concluído"})}),s.jsx(Qe,{mono:!0,children:"R$ 12.000"}),s.jsx(Qe,{children:s.jsx(Re,{size:"sm",children:"Ver"})})]}),s.jsxs(aa,{muted:!0,children:[s.jsx(Qe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625px",children:[s.jsx(wn,{initials:"CL",size:"sm",gradient:"linear-gradient(135deg,#f59e0b,#d97706)"}),s.jsx("strong",{children:"Carla L."})]})}),s.jsx(Qe,{children:s.jsx(hh,{children:"Sistemas Locais"})}),s.jsx(Qe,{children:s.jsx(wt,{variant:"red",dot:!0,children:"Cancelado"})}),s.jsx(Qe,{mono:!0,style:{textDecoration:"line-through",opacity:.5},children:"R$ 5.000"}),s.jsx(Qe,{children:s.jsx(Re,{size:"sm",variant:"ghost",children:"Ver"})})]})]})]})]}),s.jsxs(qt,{id:"tipografia",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Tipografia"}),s.jsx(Gt,{children:"Plus Jakarta Sans · Inter"})]}),s.jsx(pe,{children:"Escala tipográfica"}),s.jsx(n_,{children:p_.map(I=>s.jsxs(r_,{children:[s.jsx(o_,{children:I.token}),s.jsx(i_,{children:I.sz}),s.jsx(s_,{$font:`${I.font},sans-serif`,$sz:I.sz,$w:I.w,children:I.sample})]},I.token))}),s.jsx(pe,{children:"SectionHeader — componente de cabeçalho de seção"}),s.jsx(he,{$pad:"3rem",children:s.jsx(wh,{eyebrow:"Soluções Digitais Completas",title:"O certo para o seu negócio",subtitle:"Do site mais simples ao sistema mais completo — sempre com linguagem clara, preço justo e suporte de verdade."})}),s.jsx(he,{$dark:!0,$pad:"3rem",children:s.jsx(wh,{eyebrow:"OG Labs · Soluções",title:"Seu negócio no mundo digital",subtitle:"Criamos sites, sistemas, aplicativos e softwares para quem quer crescer sem complicação.",dark:!0})})]}),s.jsxs(qt,{id:"cores",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Cores"}),s.jsx(Gt,{children:"Primárias · Accent · Semânticas"})]}),s.jsx(pe,{children:"Primárias — Azul Marinho"}),s.jsx(lu,{children:u_.map(I=>s.jsxs(cu,{children:[s.jsx(uu,{$c:I.hex}),s.jsxs(du,{children:[s.jsx(fu,{children:I.name}),s.jsx(pu,{children:I.hex}),s.jsx(mu,{children:I.token})]})]},I.hex))}),s.jsx(pe,{children:"Accent — Cyan e Amber"}),s.jsx(lu,{children:d_.map(I=>s.jsxs(cu,{children:[s.jsx(uu,{$c:I.hex,$h:56}),s.jsxs(du,{children:[s.jsx(fu,{children:I.name}),s.jsx(pu,{children:I.hex}),s.jsx(mu,{children:I.token})]})]},I.hex))}),s.jsx(pe,{children:"Semânticas"}),s.jsx(lu,{children:f_.map(I=>s.jsxs(cu,{children:[s.jsx(uu,{$c:I.hex,$h:52}),s.jsxs(du,{children:[s.jsx(fu,{children:I.name}),s.jsx(pu,{children:I.hex}),s.jsx(mu,{children:I.token})]})]},I.name))})]}),s.jsxs(qt,{id:"gradientes",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Gradientes"}),s.jsxs(Gt,{children:[Eh.length," em uso no produto"]})]}),s.jsx(JC,{children:Eh.map(I=>s.jsxs(QC,{children:[s.jsx(YC,{$g:I.g}),s.jsxs(KC,{children:[s.jsx(XC,{children:I.name}),s.jsx(e_,{children:I.use}),s.jsx(t_,{children:I.g})]})]},I.name))})]}),s.jsxs(qt,{id:"padroes",children:[s.jsxs(Vt,{children:[s.jsx(Ht,{children:"Padrões e Utilitários"}),s.jsx(Gt,{children:"Divider · InlineCode · CodeBlock · Ícones"})]}),s.jsx(pe,{children:"Divider — variantes"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.625rem"},children:"Linha simples"}),s.jsx(au,{})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.625rem"},children:"Com gradiente"}),s.jsx(au,{gradient:!0})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.625rem"},children:"Com label"}),s.jsx(au,{label:"Ou"})]})]})}),s.jsx(pe,{children:"InlineCode e CodeBlock"}),s.jsxs(he,{children:[s.jsxs("p",{style:{fontSize:"0.875rem",color:"#4b5684",marginBottom:"1rem"},children:["Importe com ",s.jsx(sn,{children:"import { Button } from '../components/ui'"})," e use o componente em qualquer página."]}),s.jsx(kh,{children:`import { Button, Badge, Field, Input } from '../components/ui';

export function Contato() {
  return (
    <Field label="Nome" required>
      <Input placeholder="João Silva" />
    </Field>
    <Button variant="amber" fullWidth>
      🧮 Faça um Orçamento
    </Button>
  );
}`})]}),s.jsx(pe,{children:"Ícones usados (lucide-react)"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"0.875rem",$wrap:!0,children:m_.map(I=>s.jsxs(a_,{children:[s.jsx(l_,{children:I.icon}),s.jsx(c_,{children:I.label})]},I.label))})}),s.jsx(pe,{children:"PageSection — wrapper de seção"}),s.jsxs(he,{children:[s.jsxs("p",{style:{fontSize:"0.85rem",color:"#4b5684",marginBottom:"1rem"},children:[s.jsx(sn,{children:'<PageSection id="hero" bg="#f7f9ff">'})," aplica ",s.jsx(sn,{children:"padding: 5rem 1.5rem"})," com ",s.jsx(sn,{children:"max-width: 1366px"})," automático."]}),s.jsx(kh,{children:`import { PageSection, SectionHeader } from '../components/ui';

<PageSection id="o-que-fazemos">
  <SectionHeader
    eyebrow="Nossas soluções"
    title="O certo para o seu negócio"
    subtitle="Sempre com linguagem clara."
  />
  {/* conteúdo da seção */}
</PageSection>`})]})]})]})]})}const x_=d2`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #f7f9ff;
    color: #0c1445;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(29, 78, 216, 0.25);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(29, 78, 216, 0.45);
  }
`,y_=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,v_=x.main`
  flex: 1;
  padding-top: 68px;
`;function w_(){const{pathname:e}=dn();return _.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null}function b_(){return s.jsxs(Jy,{basename:"/OG/",children:[s.jsx(x_,{}),s.jsx(w_,{}),s.jsxs(y_,{children:[s.jsx(Uj,{}),s.jsx(Z$,{}),s.jsx(H$,{}),s.jsx(v_,{children:s.jsxs($y,{children:[s.jsx(br,{path:"/",element:s.jsx(W4,{})}),s.jsx(br,{path:"/web",element:s.jsx(j3,{})}),s.jsx(br,{path:"/mobile",element:s.jsx(rz,{})}),s.jsx(br,{path:"/software",element:s.jsx(Cz,{})}),s.jsx(br,{path:"/sistemas-locais",element:s.jsx(Kz,{})}),s.jsx(br,{path:"/styleguide",element:s.jsx(g_,{})})]})}),s.jsx(Yj,{})]})]})}const v0=document.getElementById("root");if(!v0)throw new Error('Elemento raiz "#root" não encontrado.');$x.createRoot(v0).render(s.jsx(_.StrictMode,{children:s.jsx(b_,{})}));
