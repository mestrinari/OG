(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function yx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uc={exports:{}},ui={},Wc={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function vx(){if(rm)return ve;rm=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=b&&z[b]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,$={};function A(z,L,se){this.props=z,this.context=L,this.refs=$,this.updater=se||E}A.prototype.isReactComponent={},A.prototype.setState=function(z,L){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,L,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=A.prototype;function R(z,L,se){this.props=z,this.context=L,this.refs=$,this.updater=se||E}var V=R.prototype=new N;V.constructor=R,O(V,A.prototype),V.isPureReactComponent=!0;var J=Array.isArray,Q=Object.prototype.hasOwnProperty,H={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function X(z,L,se){var ae,ue={},ye=null,we=null;if(L!=null)for(ae in L.ref!==void 0&&(we=L.ref),L.key!==void 0&&(ye=""+L.key),L)Q.call(L,ae)&&!W.hasOwnProperty(ae)&&(ue[ae]=L[ae]);var be=arguments.length-2;if(be===1)ue.children=se;else if(1<be){for(var ze=Array(be),Ze=0;Ze<be;Ze++)ze[Ze]=arguments[Ze+2];ue.children=ze}if(z&&z.defaultProps)for(ae in be=z.defaultProps,be)ue[ae]===void 0&&(ue[ae]=be[ae]);return{$$typeof:e,type:z,key:ye,ref:we,props:ue,_owner:H.current}}function te(z,L){return{$$typeof:e,type:z.type,key:L,ref:z.ref,props:z.props,_owner:z._owner}}function I(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function me(z){var L={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(se){return L[se]})}var Ee=/\/+/g;function xe(z,L){return typeof z=="object"&&z!==null&&z.key!=null?me(""+z.key):L.toString(36)}function _e(z,L,se,ae,ue){var ye=typeof z;(ye==="undefined"||ye==="boolean")&&(z=null);var we=!1;if(z===null)we=!0;else switch(ye){case"string":case"number":we=!0;break;case"object":switch(z.$$typeof){case e:case r:we=!0}}if(we)return we=z,ue=ue(we),z=ae===""?"."+xe(we,0):ae,J(ue)?(se="",z!=null&&(se=z.replace(Ee,"$&/")+"/"),_e(ue,L,se,"",function(Ze){return Ze})):ue!=null&&(I(ue)&&(ue=te(ue,se+(!ue.key||we&&we.key===ue.key?"":(""+ue.key).replace(Ee,"$&/")+"/")+z)),L.push(ue)),1;if(we=0,ae=ae===""?".":ae+":",J(z))for(var be=0;be<z.length;be++){ye=z[be];var ze=ae+xe(ye,be);we+=_e(ye,L,se,ze,ue)}else if(ze=S(z),typeof ze=="function")for(z=ze.call(z),be=0;!(ye=z.next()).done;)ye=ye.value,ze=ae+xe(ye,be++),we+=_e(ye,L,se,ze,ue);else if(ye==="object")throw L=String(z),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return we}function $e(z,L,se){if(z==null)return z;var ae=[],ue=0;return _e(z,ae,"","",function(ye){return L.call(se,ye,ue++)}),ae}function He(z){if(z._status===-1){var L=z._result;L=L(),L.then(function(se){(z._status===0||z._status===-1)&&(z._status=1,z._result=se)},function(se){(z._status===0||z._status===-1)&&(z._status=2,z._result=se)}),z._status===-1&&(z._status=0,z._result=L)}if(z._status===1)return z._result.default;throw z._result}var Te={current:null},q={transition:null},oe={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:q,ReactCurrentOwner:H};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:$e,forEach:function(z,L,se){$e(z,function(){L.apply(this,arguments)},se)},count:function(z){var L=0;return $e(z,function(){L++}),L},toArray:function(z){return $e(z,function(L){return L})||[]},only:function(z){if(!I(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ve.Component=A,ve.Fragment=i,ve.Profiler=c,ve.PureComponent=R,ve.StrictMode=a,ve.Suspense=x,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ve.act=Z,ve.cloneElement=function(z,L,se){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ae=O({},z.props),ue=z.key,ye=z.ref,we=z._owner;if(L!=null){if(L.ref!==void 0&&(ye=L.ref,we=H.current),L.key!==void 0&&(ue=""+L.key),z.type&&z.type.defaultProps)var be=z.type.defaultProps;for(ze in L)Q.call(L,ze)&&!W.hasOwnProperty(ze)&&(ae[ze]=L[ze]===void 0&&be!==void 0?be[ze]:L[ze])}var ze=arguments.length-2;if(ze===1)ae.children=se;else if(1<ze){be=Array(ze);for(var Ze=0;Ze<ze;Ze++)be[Ze]=arguments[Ze+2];ae.children=be}return{$$typeof:e,type:z.type,key:ue,ref:ye,props:ae,_owner:we}},ve.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:d,_context:z},z.Consumer=z},ve.createElement=X,ve.createFactory=function(z){var L=X.bind(null,z);return L.type=z,L},ve.createRef=function(){return{current:null}},ve.forwardRef=function(z){return{$$typeof:h,render:z}},ve.isValidElement=I,ve.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:He}},ve.memo=function(z,L){return{$$typeof:y,type:z,compare:L===void 0?null:L}},ve.startTransition=function(z){var L=q.transition;q.transition={};try{z()}finally{q.transition=L}},ve.unstable_act=Z,ve.useCallback=function(z,L){return Te.current.useCallback(z,L)},ve.useContext=function(z){return Te.current.useContext(z)},ve.useDebugValue=function(){},ve.useDeferredValue=function(z){return Te.current.useDeferredValue(z)},ve.useEffect=function(z,L){return Te.current.useEffect(z,L)},ve.useId=function(){return Te.current.useId()},ve.useImperativeHandle=function(z,L,se){return Te.current.useImperativeHandle(z,L,se)},ve.useInsertionEffect=function(z,L){return Te.current.useInsertionEffect(z,L)},ve.useLayoutEffect=function(z,L){return Te.current.useLayoutEffect(z,L)},ve.useMemo=function(z,L){return Te.current.useMemo(z,L)},ve.useReducer=function(z,L,se){return Te.current.useReducer(z,L,se)},ve.useRef=function(z){return Te.current.useRef(z)},ve.useState=function(z){return Te.current.useState(z)},ve.useSyncExternalStore=function(z,L,se){return Te.current.useSyncExternalStore(z,L,se)},ve.useTransition=function(){return Te.current.useTransition()},ve.version="18.3.1",ve}var om;function Tu(){return om||(om=1,Wc.exports=vx()),Wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function wx(){if(im)return ui;im=1;var e=Tu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(h,x,y){var v,b={},S=null,E=null;y!==void 0&&(S=""+y),x.key!==void 0&&(S=""+x.key),x.ref!==void 0&&(E=x.ref);for(v in x)a.call(x,v)&&!d.hasOwnProperty(v)&&(b[v]=x[v]);if(h&&h.defaultProps)for(v in x=h.defaultProps,x)b[v]===void 0&&(b[v]=x[v]);return{$$typeof:r,type:h,key:S,ref:E,props:b,_owner:c.current}}return ui.Fragment=i,ui.jsx=f,ui.jsxs=f,ui}var sm;function bx(){return sm||(sm=1,Uc.exports=wx()),Uc.exports}var s=bx(),_=Tu();const dt=yx(_);var Qs={},Zc={exports:{}},At={},qc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function kx(){return am||(am=1,(function(e){function r(q,oe){var Z=q.length;q.push(oe);e:for(;0<Z;){var z=Z-1>>>1,L=q[z];if(0<c(L,oe))q[z]=oe,q[Z]=L,Z=z;else break e}}function i(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var oe=q[0],Z=q.pop();if(Z!==oe){q[0]=Z;e:for(var z=0,L=q.length,se=L>>>1;z<se;){var ae=2*(z+1)-1,ue=q[ae],ye=ae+1,we=q[ye];if(0>c(ue,Z))ye<L&&0>c(we,ue)?(q[z]=we,q[ye]=Z,z=ye):(q[z]=ue,q[ae]=Z,z=ae);else if(ye<L&&0>c(we,Z))q[z]=we,q[ye]=Z,z=ye;else break e}}return oe}function c(q,oe){var Z=q.sortIndex-oe.sortIndex;return Z!==0?Z:q.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();e.unstable_now=function(){return f.now()-h}}var x=[],y=[],v=1,b=null,S=3,E=!1,O=!1,$=!1,A=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(q){for(var oe=i(y);oe!==null;){if(oe.callback===null)a(y);else if(oe.startTime<=q)a(y),oe.sortIndex=oe.expirationTime,r(x,oe);else break;oe=i(y)}}function J(q){if($=!1,V(q),!O)if(i(x)!==null)O=!0,He(Q);else{var oe=i(y);oe!==null&&Te(J,oe.startTime-q)}}function Q(q,oe){O=!1,$&&($=!1,N(X),X=-1),E=!0;var Z=S;try{for(V(oe),b=i(x);b!==null&&(!(b.expirationTime>oe)||q&&!me());){var z=b.callback;if(typeof z=="function"){b.callback=null,S=b.priorityLevel;var L=z(b.expirationTime<=oe);oe=e.unstable_now(),typeof L=="function"?b.callback=L:b===i(x)&&a(x),V(oe)}else a(x);b=i(x)}if(b!==null)var se=!0;else{var ae=i(y);ae!==null&&Te(J,ae.startTime-oe),se=!1}return se}finally{b=null,S=Z,E=!1}}var H=!1,W=null,X=-1,te=5,I=-1;function me(){return!(e.unstable_now()-I<te)}function Ee(){if(W!==null){var q=e.unstable_now();I=q;var oe=!0;try{oe=W(!0,q)}finally{oe?xe():(H=!1,W=null)}}else H=!1}var xe;if(typeof R=="function")xe=function(){R(Ee)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,$e=_e.port2;_e.port1.onmessage=Ee,xe=function(){$e.postMessage(null)}}else xe=function(){A(Ee,0)};function He(q){W=q,H||(H=!0,xe())}function Te(q,oe){X=A(function(){q(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){O||E||(O=!0,He(Q))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return i(x)},e.unstable_next=function(q){switch(S){case 1:case 2:case 3:var oe=3;break;default:oe=S}var Z=S;S=oe;try{return q()}finally{S=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,oe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=S;S=q;try{return oe()}finally{S=Z}},e.unstable_scheduleCallback=function(q,oe,Z){var z=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?z+Z:z):Z=z,q){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,q={id:v++,callback:oe,priorityLevel:q,startTime:Z,expirationTime:L,sortIndex:-1},Z>z?(q.sortIndex=Z,r(y,q),i(x)===null&&q===i(y)&&($?(N(X),X=-1):$=!0,Te(J,Z-z))):(q.sortIndex=L,r(x,q),O||E||(O=!0,He(Q))),q},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(q){var oe=S;return function(){var Z=S;S=oe;try{return q.apply(this,arguments)}finally{S=Z}}}})(Hc)),Hc}var lm;function Sx(){return lm||(lm=1,qc.exports=kx()),qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function jx(){if(cm)return At;cm=1;var e=Tu(),r=Sx();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function d(t,n){f(t,n),f(t+"Capture",n)}function f(t,n){for(c[t]=n,t=0;t<n.length;t++)a.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},b={};function S(t){return x.call(b,t)?!0:x.call(v,t)?!1:y.test(t)?b[t]=!0:(v[t]=!0,!1)}function E(t,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O(t,n,o,l){if(n===null||typeof n>"u"||E(t,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function $(t,n,o,l,u,p,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];A[n]=new $(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(N,R);A[n]=new $(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(N,R);A[n]=new $(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(N,R);A[n]=new $(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function V(t,n,o,l){var u=A.hasOwnProperty(n)?A[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(O(n,o,u,l)&&(o=null),l||u===null?S(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,n,o):t.setAttribute(n,o))))}var J=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),H=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),me=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),q=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,z;function L(t){if(z===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+t}var se=!1;function ae(t,n){if(!t||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(T){var l=T}Reflect.construct(t,[],n)}else{try{n.call()}catch(T){l=T}t.call(n.prototype)}else{try{throw Error()}catch(T){l=T}t()}}catch(T){if(T&&l&&typeof T.stack=="string"){for(var u=T.stack.split(`
`),p=l.stack.split(`
`),g=u.length-1,w=p.length-1;1<=g&&0<=w&&u[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(u[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||u[g]!==p[w]){var k=`
`+u[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=w);break}}}finally{se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function ue(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case H:return"Portal";case te:return"Profiler";case X:return"StrictMode";case xe:return"Suspense";case _e:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case me:return(t.displayName||"Context")+".Consumer";case I:return(t._context.displayName||"Context")+".Provider";case Ee:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $e:return n=t.displayName||null,n!==null?n:ye(t.type)||"Memo";case He:n=t._payload,t=t._init;try{return ye(t(n))}catch{}}return null}function we(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(n);case 8:return n===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t){var n=ze(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,p.call(this,g)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Bi(t){t._valueTracker||(t._valueTracker=Ze(t))}function ld(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return t&&(l=ze(t)?t.checked?"true":"false":t.value),t=l,t!==o?(n.setValue(t),!0):!1}function Fi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ga(t,n){var o=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function cd(t,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=be(n.value!=null?n.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ud(t,n){n=n.checked,n!=null&&V(t,"checked",n,!1)}function Qa(t,n){ud(t,n);var o=be(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Ya(t,n.type,o):n.hasOwnProperty("defaultValue")&&Ya(t,n.type,be(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function dd(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ya(t,n,o){(n!=="number"||Fi(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var $o=Array.isArray;function Tr(t,n,o,l){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ka(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fd(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if($o(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:be(o)}}function pd(t,n){var o=be(n.value),l=be(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function md(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function hd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xa(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?hd(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ui,gd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,l,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ui.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function zo(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){k0.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Co[n]=Co[t]})});function xd(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Co.hasOwnProperty(t)&&Co[t]?(""+n).trim():n+"px"}function yd(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=xd(o,n[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var S0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(t,n){if(n){if(S0[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function tl(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function rl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ol=null,Ir=null,Rr=null;function vd(t){if(t=Go(t)){if(typeof ol!="function")throw Error(i(280));var n=t.stateNode;n&&(n=ds(n),ol(t.stateNode,t.type,n))}}function wd(t){Ir?Rr?Rr.push(t):Rr=[t]:Ir=t}function bd(){if(Ir){var t=Ir,n=Rr;if(Rr=Ir=null,vd(t),n)for(t=0;t<n.length;t++)vd(n[t])}}function kd(t,n){return t(n)}function Sd(){}var il=!1;function jd(t,n,o){if(il)return t(n,o);il=!0;try{return kd(t,n,o)}finally{il=!1,(Ir!==null||Rr!==null)&&(Sd(),bd())}}function _o(t,n){var o=t.stateNode;if(o===null)return null;var l=ds(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var sl=!1;if(h)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{sl=!1}function j0(t,n,o,l,u,p,g,w,k){var T=Array.prototype.slice.call(arguments,3);try{n.apply(o,T)}catch(B){this.onError(B)}}var Eo=!1,Wi=null,Zi=!1,al=null,$0={onError:function(t){Eo=!0,Wi=t}};function z0(t,n,o,l,u,p,g,w,k){Eo=!1,Wi=null,j0.apply($0,arguments)}function C0(t,n,o,l,u,p,g,w,k){if(z0.apply(this,arguments),Eo){if(Eo){var T=Wi;Eo=!1,Wi=null}else throw Error(i(198));Zi||(Zi=!0,al=T)}}function cr(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function $d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function zd(t){if(cr(t)!==t)throw Error(i(188))}function _0(t){var n=t.alternate;if(!n){if(n=cr(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,l=n;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return zd(u),t;if(p===l)return zd(u),n;p=p.sibling}throw Error(i(188))}if(o.return!==l.return)o=u,l=p;else{for(var g=!1,w=u.child;w;){if(w===o){g=!0,o=u,l=p;break}if(w===l){g=!0,l=u,o=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===o){g=!0,o=p,l=u;break}if(w===l){g=!0,l=p,o=u;break}w=w.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function Cd(t){return t=_0(t),t!==null?_d(t):null}function _d(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=_d(t);if(n!==null)return n;t=t.sibling}return null}var Pd=r.unstable_scheduleCallback,Ed=r.unstable_cancelCallback,P0=r.unstable_shouldYield,E0=r.unstable_requestPaint,Ve=r.unstable_now,T0=r.unstable_getCurrentPriorityLevel,ll=r.unstable_ImmediatePriority,Td=r.unstable_UserBlockingPriority,qi=r.unstable_NormalPriority,I0=r.unstable_LowPriority,Id=r.unstable_IdlePriority,Hi=null,gn=null;function R0(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Hi,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:N0,A0=Math.log,O0=Math.LN2;function N0(t){return t>>>=0,t===0?32:31-(A0(t)/O0|0)|0}var Vi=64,Ji=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gi(t,n){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,g=o&268435455;if(g!==0){var w=g&~u;w!==0?l=To(w):(p&=g,p!==0&&(l=To(p)))}else g=o&~u,g!==0?l=To(g):p!==0&&(l=To(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)o=31-tn(n),u=1<<o,l|=t[o],n&=~u;return l}function L0(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(t,n){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var g=31-tn(p),w=1<<g,k=u[g];k===-1?((w&o)===0||(w&l)!==0)&&(u[g]=L0(w,n)):k<=n&&(t.expiredLanes|=w),p&=~w}}function cl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rd(){var t=Vi;return Vi<<=1,(Vi&4194240)===0&&(Vi=64),t}function ul(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function Io(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-tn(n),t[n]=o}function D0(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-tn(o),p=1<<u;n[u]=0,l[u]=-1,t[u]=-1,o&=~p}}function dl(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var l=31-tn(o),u=1<<l;u&n|t[l]&n&&(t[l]|=n),o&=~u}}var Ce=0;function Ad(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Od,fl,Nd,Ld,Md,pl=!1,Qi=[],Ln=null,Mn=null,Dn=null,Ro=new Map,Ao=new Map,Bn=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(t,n){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Oo(t,n,o,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Go(n),n!==null&&fl(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function F0(t,n,o,l,u){switch(n){case"focusin":return Ln=Oo(Ln,t,n,o,l,u),!0;case"dragenter":return Mn=Oo(Mn,t,n,o,l,u),!0;case"mouseover":return Dn=Oo(Dn,t,n,o,l,u),!0;case"pointerover":var p=u.pointerId;return Ro.set(p,Oo(Ro.get(p)||null,t,n,o,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Ao.set(p,Oo(Ao.get(p)||null,t,n,o,l,u)),!0}return!1}function Bd(t){var n=ur(t.target);if(n!==null){var o=cr(n);if(o!==null){if(n=o.tag,n===13){if(n=$d(o),n!==null){t.blockedOn=n,Md(t.priority,function(){Nd(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yi(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=hl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);nl=l,o.target.dispatchEvent(l),nl=null}else return n=Go(o),n!==null&&fl(n),t.blockedOn=o,!1;n.shift()}return!0}function Fd(t,n,o){Yi(t)&&o.delete(n)}function U0(){pl=!1,Ln!==null&&Yi(Ln)&&(Ln=null),Mn!==null&&Yi(Mn)&&(Mn=null),Dn!==null&&Yi(Dn)&&(Dn=null),Ro.forEach(Fd),Ao.forEach(Fd)}function No(t,n){t.blockedOn===n&&(t.blockedOn=null,pl||(pl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,U0)))}function Lo(t){function n(u){return No(u,t)}if(0<Qi.length){No(Qi[0],t);for(var o=1;o<Qi.length;o++){var l=Qi[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Ln!==null&&No(Ln,t),Mn!==null&&No(Mn,t),Dn!==null&&No(Dn,t),Ro.forEach(n),Ao.forEach(n),o=0;o<Bn.length;o++)l=Bn[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Bn.length&&(o=Bn[0],o.blockedOn===null);)Bd(o),o.blockedOn===null&&Bn.shift()}var Ar=J.ReactCurrentBatchConfig,Ki=!0;function W0(t,n,o,l){var u=Ce,p=Ar.transition;Ar.transition=null;try{Ce=1,ml(t,n,o,l)}finally{Ce=u,Ar.transition=p}}function Z0(t,n,o,l){var u=Ce,p=Ar.transition;Ar.transition=null;try{Ce=4,ml(t,n,o,l)}finally{Ce=u,Ar.transition=p}}function ml(t,n,o,l){if(Ki){var u=hl(t,n,o,l);if(u===null)Il(t,n,l,Xi,o),Dd(t,l);else if(F0(u,t,n,o,l))l.stopPropagation();else if(Dd(t,l),n&4&&-1<B0.indexOf(t)){for(;u!==null;){var p=Go(u);if(p!==null&&Od(p),p=hl(t,n,o,l),p===null&&Il(t,n,l,Xi,o),p===u)break;u=p}u!==null&&l.stopPropagation()}else Il(t,n,l,null,o)}}var Xi=null;function hl(t,n,o,l){if(Xi=null,t=rl(l),t=ur(t),t!==null)if(n=cr(t),n===null)t=null;else if(o=n.tag,o===13){if(t=$d(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Xi=t,null}function Ud(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T0()){case ll:return 1;case Td:return 4;case qi:case I0:return 16;case Id:return 536870912;default:return 16}default:return 16}}var Fn=null,gl=null,es=null;function Wd(){if(es)return es;var t,n=gl,o=n.length,l,u="value"in Fn?Fn.value:Fn.textContent,p=u.length;for(t=0;t<o&&n[t]===u[t];t++);var g=o-t;for(l=1;l<=g&&n[o-l]===u[p-l];l++);return es=u.slice(t,1<l?1-l:void 0)}function ts(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ns(){return!0}function Zd(){return!1}function Lt(t){function n(o,l,u,p,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ns:Zd,this.isPropagationStopped=Zd,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),n}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Lt(Or),Mo=Z({},Or,{view:0,detail:0}),q0=Lt(Mo),yl,vl,Do,rs=Z({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(yl=t.screenX-Do.screenX,vl=t.screenY-Do.screenY):vl=yl=0,Do=t),yl)},movementY:function(t){return"movementY"in t?t.movementY:vl}}),qd=Lt(rs),H0=Z({},rs,{dataTransfer:0}),V0=Lt(H0),J0=Z({},Mo,{relatedTarget:0}),wl=Lt(J0),G0=Z({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Lt(G0),Y0=Z({},Or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K0=Lt(Y0),X0=Z({},Or,{data:0}),Hd=Lt(X0),e1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=n1[t])?!!n[t]:!1}function bl(){return r1}var o1=Z({},Mo,{key:function(t){if(t.key){var n=e1[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ts(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(t){return t.type==="keypress"?ts(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ts(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i1=Lt(o1),s1=Z({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Lt(s1),a1=Z({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),l1=Lt(a1),c1=Z({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),u1=Lt(c1),d1=Z({},rs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=Lt(d1),p1=[9,13,27,32],kl=h&&"CompositionEvent"in window,Bo=null;h&&"documentMode"in document&&(Bo=document.documentMode);var m1=h&&"TextEvent"in window&&!Bo,Jd=h&&(!kl||Bo&&8<Bo&&11>=Bo),Gd=" ",Qd=!1;function Yd(t,n){switch(t){case"keyup":return p1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function h1(t,n){switch(t){case"compositionend":return Kd(n);case"keypress":return n.which!==32?null:(Qd=!0,Gd);case"textInput":return t=n.data,t===Gd&&Qd?null:t;default:return null}}function g1(t,n){if(Nr)return t==="compositionend"||!kl&&Yd(t,n)?(t=Wd(),es=gl=Fn=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!x1[t.type]:n==="textarea"}function ef(t,n,o,l){wd(l),n=ls(n,"onChange"),0<n.length&&(o=new xl("onChange","change",null,o,l),t.push({event:o,listeners:n}))}var Fo=null,Uo=null;function y1(t){vf(t,0)}function os(t){var n=Fr(t);if(ld(n))return t}function v1(t,n){if(t==="change")return n}var tf=!1;if(h){var Sl;if(h){var jl="oninput"in document;if(!jl){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),jl=typeof nf.oninput=="function"}Sl=jl}else Sl=!1;tf=Sl&&(!document.documentMode||9<document.documentMode)}function rf(){Fo&&(Fo.detachEvent("onpropertychange",of),Uo=Fo=null)}function of(t){if(t.propertyName==="value"&&os(Uo)){var n=[];ef(n,Uo,t,rl(t)),jd(y1,n)}}function w1(t,n,o){t==="focusin"?(rf(),Fo=n,Uo=o,Fo.attachEvent("onpropertychange",of)):t==="focusout"&&rf()}function b1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return os(Uo)}function k1(t,n){if(t==="click")return os(n)}function S1(t,n){if(t==="input"||t==="change")return os(n)}function j1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var nn=typeof Object.is=="function"?Object.is:j1;function Wo(t,n){if(nn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!x.call(n,u)||!nn(t[u],n[u]))return!1}return!0}function sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function af(t,n){var o=sf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=n&&l>=n)return{node:o,offset:n-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=sf(o)}}function lf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?lf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cf(){for(var t=window,n=Fi();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=Fi(t.document)}return n}function $l(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function $1(t){var n=cf(),o=t.focusedElem,l=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&lf(o.ownerDocument.documentElement,o)){if(l!==null&&$l(o)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=af(o,p);var g=af(o,l);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(n),t.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z1=h&&"documentMode"in document&&11>=document.documentMode,Lr=null,zl=null,Zo=null,Cl=!1;function uf(t,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Cl||Lr==null||Lr!==Fi(l)||(l=Lr,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zo&&Wo(Zo,l)||(Zo=l,l=ls(zl,"onSelect"),0<l.length&&(n=new xl("onSelect","select",null,n,o),t.push({event:n,listeners:l}),n.target=Lr)))}function is(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var Mr={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionend:is("Transition","TransitionEnd")},_l={},df={};h&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function ss(t){if(_l[t])return _l[t];if(!Mr[t])return t;var n=Mr[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in df)return _l[t]=n[o];return t}var ff=ss("animationend"),pf=ss("animationiteration"),mf=ss("animationstart"),hf=ss("transitionend"),gf=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,n){gf.set(t,n),d(n,[t])}for(var Pl=0;Pl<xf.length;Pl++){var El=xf[Pl],C1=El.toLowerCase(),_1=El[0].toUpperCase()+El.slice(1);Un(C1,"on"+_1)}Un(ff,"onAnimationEnd"),Un(pf,"onAnimationIteration"),Un(mf,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(hf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P1=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function yf(t,n,o){var l=t.type||"unknown-event";t.currentTarget=o,C0(l,n,void 0,t),t.currentTarget=null}function vf(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var g=l.length-1;0<=g;g--){var w=l[g],k=w.instance,T=w.currentTarget;if(w=w.listener,k!==p&&u.isPropagationStopped())break e;yf(u,w,T),p=k}else for(g=0;g<l.length;g++){if(w=l[g],k=w.instance,T=w.currentTarget,w=w.listener,k!==p&&u.isPropagationStopped())break e;yf(u,w,T),p=k}}}if(Zi)throw t=al,Zi=!1,al=null,t}function Ae(t,n){var o=n[Ml];o===void 0&&(o=n[Ml]=new Set);var l=t+"__bubble";o.has(l)||(wf(n,t,2,!1),o.add(l))}function Tl(t,n,o){var l=0;n&&(l|=4),wf(o,t,l,n)}var as="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[as]){t[as]=!0,a.forEach(function(o){o!=="selectionchange"&&(P1.has(o)||Tl(o,!1,t),Tl(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[as]||(n[as]=!0,Tl("selectionchange",!1,n))}}function wf(t,n,o,l){switch(Ud(n)){case 1:var u=W0;break;case 4:u=Z0;break;default:u=ml}o=u.bind(null,n,o,t),u=void 0,!sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function Il(t,n,o,l,u){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;w!==null;){if(g=ur(w),g===null)return;if(k=g.tag,k===5||k===6){l=p=g;continue e}w=w.parentNode}}l=l.return}jd(function(){var T=p,B=rl(o),F=[];e:{var D=gf.get(t);if(D!==void 0){var G=xl,K=t;switch(t){case"keypress":if(ts(o)===0)break e;case"keydown":case"keyup":G=i1;break;case"focusin":K="focus",G=wl;break;case"focusout":K="blur",G=wl;break;case"beforeblur":case"afterblur":G=wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=l1;break;case ff:case pf:case mf:G=Q0;break;case hf:G=u1;break;case"scroll":G=q0;break;case"wheel":G=f1;break;case"copy":case"cut":case"paste":G=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Vd}var ee=(n&4)!==0,Je=!ee&&t==="scroll",C=ee?D!==null?D+"Capture":null:D;ee=[];for(var j=T,P;j!==null;){P=j;var U=P.stateNode;if(P.tag===5&&U!==null&&(P=U,C!==null&&(U=_o(j,C),U!=null&&ee.push(Vo(j,U,P)))),Je)break;j=j.return}0<ee.length&&(D=new G(D,K,null,o,B),F.push({event:D,listeners:ee}))}}if((n&7)===0){e:{if(D=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",D&&o!==nl&&(K=o.relatedTarget||o.fromElement)&&(ur(K)||K[$n]))break e;if((G||D)&&(D=B.window===B?B:(D=B.ownerDocument)?D.defaultView||D.parentWindow:window,G?(K=o.relatedTarget||o.toElement,G=T,K=K?ur(K):null,K!==null&&(Je=cr(K),K!==Je||K.tag!==5&&K.tag!==6)&&(K=null)):(G=null,K=T),G!==K)){if(ee=qd,U="onMouseLeave",C="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ee=Vd,U="onPointerLeave",C="onPointerEnter",j="pointer"),Je=G==null?D:Fr(G),P=K==null?D:Fr(K),D=new ee(U,j+"leave",G,o,B),D.target=Je,D.relatedTarget=P,U=null,ur(B)===T&&(ee=new ee(C,j+"enter",K,o,B),ee.target=P,ee.relatedTarget=Je,U=ee),Je=U,G&&K)t:{for(ee=G,C=K,j=0,P=ee;P;P=Dr(P))j++;for(P=0,U=C;U;U=Dr(U))P++;for(;0<j-P;)ee=Dr(ee),j--;for(;0<P-j;)C=Dr(C),P--;for(;j--;){if(ee===C||C!==null&&ee===C.alternate)break t;ee=Dr(ee),C=Dr(C)}ee=null}else ee=null;G!==null&&bf(F,D,G,ee,!1),K!==null&&Je!==null&&bf(F,Je,K,ee,!0)}}e:{if(D=T?Fr(T):window,G=D.nodeName&&D.nodeName.toLowerCase(),G==="select"||G==="input"&&D.type==="file")var ne=v1;else if(Xd(D))if(tf)ne=S1;else{ne=b1;var le=w1}else(G=D.nodeName)&&G.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(ne=k1);if(ne&&(ne=ne(t,T))){ef(F,ne,o,B);break e}le&&le(t,D,T),t==="focusout"&&(le=D._wrapperState)&&le.controlled&&D.type==="number"&&Ya(D,"number",D.value)}switch(le=T?Fr(T):window,t){case"focusin":(Xd(le)||le.contentEditable==="true")&&(Lr=le,zl=T,Zo=null);break;case"focusout":Zo=zl=Lr=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,uf(F,o,B);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":uf(F,o,B)}var ce;if(kl)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Nr?Yd(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Jd&&o.locale!=="ko"&&(Nr||de!=="onCompositionStart"?de==="onCompositionEnd"&&Nr&&(ce=Wd()):(Fn=B,gl="value"in Fn?Fn.value:Fn.textContent,Nr=!0)),le=ls(T,de),0<le.length&&(de=new Hd(de,t,null,o,B),F.push({event:de,listeners:le}),ce?de.data=ce:(ce=Kd(o),ce!==null&&(de.data=ce)))),(ce=m1?h1(t,o):g1(t,o))&&(T=ls(T,"onBeforeInput"),0<T.length&&(B=new Hd("onBeforeInput","beforeinput",null,o,B),F.push({event:B,listeners:T}),B.data=ce))}vf(F,n)})}function Vo(t,n,o){return{instance:t,listener:n,currentTarget:o}}function ls(t,n){for(var o=n+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=_o(t,o),p!=null&&l.unshift(Vo(t,p,u)),p=_o(t,n),p!=null&&l.push(Vo(t,p,u))),t=t.return}return l}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bf(t,n,o,l,u){for(var p=n._reactName,g=[];o!==null&&o!==l;){var w=o,k=w.alternate,T=w.stateNode;if(k!==null&&k===l)break;w.tag===5&&T!==null&&(w=T,u?(k=_o(o,p),k!=null&&g.unshift(Vo(o,k,w))):u||(k=_o(o,p),k!=null&&g.push(Vo(o,k,w)))),o=o.return}g.length!==0&&t.push({event:n,listeners:g})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function kf(t){return(typeof t=="string"?t:""+t).replace(E1,`
`).replace(T1,"")}function cs(t,n,o){if(n=kf(n),kf(t)!==n&&o)throw Error(i(425))}function us(){}var Rl=null,Al=null;function Ol(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(A1)}:Nl;function A1(t){setTimeout(function(){throw t})}function Ll(t,n){var o=n,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Lo(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Lo(n)}function Wn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),xn="__reactFiber$"+Br,Jo="__reactProps$"+Br,$n="__reactContainer$"+Br,Ml="__reactEvents$"+Br,O1="__reactListeners$"+Br,N1="__reactHandles$"+Br;function ur(t){var n=t[xn];if(n)return n;for(var o=t.parentNode;o;){if(n=o[$n]||o[xn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=jf(t);t!==null;){if(o=t[xn])return o;t=jf(t)}return n}t=o,o=t.parentNode}return null}function Go(t){return t=t[xn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function ds(t){return t[Jo]||null}var Dl=[],Ur=-1;function Zn(t){return{current:t}}function Oe(t){0>Ur||(t.current=Dl[Ur],Dl[Ur]=null,Ur--)}function Ie(t,n){Ur++,Dl[Ur]=t.current,t.current=n}var qn={},vt=Zn(qn),Pt=Zn(!1),dr=qn;function Wr(t,n){var o=t.type.contextTypes;if(!o)return qn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=n[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function Et(t){return t=t.childContextTypes,t!=null}function fs(){Oe(Pt),Oe(vt)}function $f(t,n,o){if(vt.current!==qn)throw Error(i(168));Ie(vt,n),Ie(Pt,o)}function zf(t,n,o){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(i(108,we(t)||"Unknown",u));return Z({},o,l)}function ps(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qn,dr=vt.current,Ie(vt,t),Ie(Pt,Pt.current),!0}function Cf(t,n,o){var l=t.stateNode;if(!l)throw Error(i(169));o?(t=zf(t,n,dr),l.__reactInternalMemoizedMergedChildContext=t,Oe(Pt),Oe(vt),Ie(vt,t)):Oe(Pt),Ie(Pt,o)}var zn=null,ms=!1,Bl=!1;function _f(t){zn===null?zn=[t]:zn.push(t)}function L1(t){ms=!0,_f(t)}function Hn(){if(!Bl&&zn!==null){Bl=!0;var t=0,n=Ce;try{var o=zn;for(Ce=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}zn=null,ms=!1}catch(u){throw zn!==null&&(zn=zn.slice(t+1)),Pd(ll,Hn),u}finally{Ce=n,Bl=!1}}return null}var Zr=[],qr=0,hs=null,gs=0,Ft=[],Ut=0,fr=null,Cn=1,_n="";function pr(t,n){Zr[qr++]=gs,Zr[qr++]=hs,hs=t,gs=n}function Pf(t,n,o){Ft[Ut++]=Cn,Ft[Ut++]=_n,Ft[Ut++]=fr,fr=t;var l=Cn;t=_n;var u=32-tn(l)-1;l&=~(1<<u),o+=1;var p=32-tn(n)+u;if(30<p){var g=u-u%5;p=(l&(1<<g)-1).toString(32),l>>=g,u-=g,Cn=1<<32-tn(n)+u|o<<u|l,_n=p+t}else Cn=1<<p|o<<u|l,_n=t}function Fl(t){t.return!==null&&(pr(t,1),Pf(t,1,0))}function Ul(t){for(;t===hs;)hs=Zr[--qr],Zr[qr]=null,gs=Zr[--qr],Zr[qr]=null;for(;t===fr;)fr=Ft[--Ut],Ft[Ut]=null,_n=Ft[--Ut],Ft[Ut]=null,Cn=Ft[--Ut],Ft[Ut]=null}var Mt=null,Dt=null,Me=!1,rn=null;function Ef(t,n){var o=Ht(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function Tf(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Mt=t,Dt=Wn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Mt=t,Dt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=fr!==null?{id:Cn,overflow:_n}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Ht(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,Mt=t,Dt=null,!0):!1;default:return!1}}function Wl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zl(t){if(Me){var n=Dt;if(n){var o=n;if(!Tf(t,n)){if(Wl(t))throw Error(i(418));n=Wn(o.nextSibling);var l=Mt;n&&Tf(t,n)?Ef(l,o):(t.flags=t.flags&-4097|2,Me=!1,Mt=t)}}else{if(Wl(t))throw Error(i(418));t.flags=t.flags&-4097|2,Me=!1,Mt=t}}}function If(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function xs(t){if(t!==Mt)return!1;if(!Me)return If(t),Me=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Ol(t.type,t.memoizedProps)),n&&(n=Dt)){if(Wl(t))throw Rf(),Error(i(418));for(;n;)Ef(t,n),n=Wn(n.nextSibling)}if(If(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){Dt=Wn(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}Dt=null}}else Dt=Mt?Wn(t.stateNode.nextSibling):null;return!0}function Rf(){for(var t=Dt;t;)t=Wn(t.nextSibling)}function Hr(){Dt=Mt=null,Me=!1}function ql(t){rn===null?rn=[t]:rn.push(t)}var M1=J.ReactCurrentBatchConfig;function Qo(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var l=o.stateNode}if(!l)throw Error(i(147,t));var u=l,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(g){var w=u.refs;g===null?delete w[p]:w[p]=g},n._stringRef=p,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function ys(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Af(t){var n=t._init;return n(t._payload)}function Of(t){function n(C,j){if(t){var P=C.deletions;P===null?(C.deletions=[j],C.flags|=16):P.push(j)}}function o(C,j){if(!t)return null;for(;j!==null;)n(C,j),j=j.sibling;return null}function l(C,j){for(C=new Map;j!==null;)j.key!==null?C.set(j.key,j):C.set(j.index,j),j=j.sibling;return C}function u(C,j){return C=er(C,j),C.index=0,C.sibling=null,C}function p(C,j,P){return C.index=P,t?(P=C.alternate,P!==null?(P=P.index,P<j?(C.flags|=2,j):P):(C.flags|=2,j)):(C.flags|=1048576,j)}function g(C){return t&&C.alternate===null&&(C.flags|=2),C}function w(C,j,P,U){return j===null||j.tag!==6?(j=Nc(P,C.mode,U),j.return=C,j):(j=u(j,P),j.return=C,j)}function k(C,j,P,U){var ne=P.type;return ne===W?B(C,j,P.props.children,U,P.key):j!==null&&(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===He&&Af(ne)===j.type)?(U=u(j,P.props),U.ref=Qo(C,j,P),U.return=C,U):(U=Us(P.type,P.key,P.props,null,C.mode,U),U.ref=Qo(C,j,P),U.return=C,U)}function T(C,j,P,U){return j===null||j.tag!==4||j.stateNode.containerInfo!==P.containerInfo||j.stateNode.implementation!==P.implementation?(j=Lc(P,C.mode,U),j.return=C,j):(j=u(j,P.children||[]),j.return=C,j)}function B(C,j,P,U,ne){return j===null||j.tag!==7?(j=br(P,C.mode,U,ne),j.return=C,j):(j=u(j,P),j.return=C,j)}function F(C,j,P){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Nc(""+j,C.mode,P),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return P=Us(j.type,j.key,j.props,null,C.mode,P),P.ref=Qo(C,null,j),P.return=C,P;case H:return j=Lc(j,C.mode,P),j.return=C,j;case He:var U=j._init;return F(C,U(j._payload),P)}if($o(j)||oe(j))return j=br(j,C.mode,P,null),j.return=C,j;ys(C,j)}return null}function D(C,j,P,U){var ne=j!==null?j.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ne!==null?null:w(C,j,""+P,U);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Q:return P.key===ne?k(C,j,P,U):null;case H:return P.key===ne?T(C,j,P,U):null;case He:return ne=P._init,D(C,j,ne(P._payload),U)}if($o(P)||oe(P))return ne!==null?null:B(C,j,P,U,null);ys(C,P)}return null}function G(C,j,P,U,ne){if(typeof U=="string"&&U!==""||typeof U=="number")return C=C.get(P)||null,w(j,C,""+U,ne);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Q:return C=C.get(U.key===null?P:U.key)||null,k(j,C,U,ne);case H:return C=C.get(U.key===null?P:U.key)||null,T(j,C,U,ne);case He:var le=U._init;return G(C,j,P,le(U._payload),ne)}if($o(U)||oe(U))return C=C.get(P)||null,B(j,C,U,ne,null);ys(j,U)}return null}function K(C,j,P,U){for(var ne=null,le=null,ce=j,de=j=0,ct=null;ce!==null&&de<P.length;de++){ce.index>de?(ct=ce,ce=null):ct=ce.sibling;var Se=D(C,ce,P[de],U);if(Se===null){ce===null&&(ce=ct);break}t&&ce&&Se.alternate===null&&n(C,ce),j=p(Se,j,de),le===null?ne=Se:le.sibling=Se,le=Se,ce=ct}if(de===P.length)return o(C,ce),Me&&pr(C,de),ne;if(ce===null){for(;de<P.length;de++)ce=F(C,P[de],U),ce!==null&&(j=p(ce,j,de),le===null?ne=ce:le.sibling=ce,le=ce);return Me&&pr(C,de),ne}for(ce=l(C,ce);de<P.length;de++)ct=G(ce,C,de,P[de],U),ct!==null&&(t&&ct.alternate!==null&&ce.delete(ct.key===null?de:ct.key),j=p(ct,j,de),le===null?ne=ct:le.sibling=ct,le=ct);return t&&ce.forEach(function(tr){return n(C,tr)}),Me&&pr(C,de),ne}function ee(C,j,P,U){var ne=oe(P);if(typeof ne!="function")throw Error(i(150));if(P=ne.call(P),P==null)throw Error(i(151));for(var le=ne=null,ce=j,de=j=0,ct=null,Se=P.next();ce!==null&&!Se.done;de++,Se=P.next()){ce.index>de?(ct=ce,ce=null):ct=ce.sibling;var tr=D(C,ce,Se.value,U);if(tr===null){ce===null&&(ce=ct);break}t&&ce&&tr.alternate===null&&n(C,ce),j=p(tr,j,de),le===null?ne=tr:le.sibling=tr,le=tr,ce=ct}if(Se.done)return o(C,ce),Me&&pr(C,de),ne;if(ce===null){for(;!Se.done;de++,Se=P.next())Se=F(C,Se.value,U),Se!==null&&(j=p(Se,j,de),le===null?ne=Se:le.sibling=Se,le=Se);return Me&&pr(C,de),ne}for(ce=l(C,ce);!Se.done;de++,Se=P.next())Se=G(ce,C,de,Se.value,U),Se!==null&&(t&&Se.alternate!==null&&ce.delete(Se.key===null?de:Se.key),j=p(Se,j,de),le===null?ne=Se:le.sibling=Se,le=Se);return t&&ce.forEach(function(xx){return n(C,xx)}),Me&&pr(C,de),ne}function Je(C,j,P,U){if(typeof P=="object"&&P!==null&&P.type===W&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case Q:e:{for(var ne=P.key,le=j;le!==null;){if(le.key===ne){if(ne=P.type,ne===W){if(le.tag===7){o(C,le.sibling),j=u(le,P.props.children),j.return=C,C=j;break e}}else if(le.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===He&&Af(ne)===le.type){o(C,le.sibling),j=u(le,P.props),j.ref=Qo(C,le,P),j.return=C,C=j;break e}o(C,le);break}else n(C,le);le=le.sibling}P.type===W?(j=br(P.props.children,C.mode,U,P.key),j.return=C,C=j):(U=Us(P.type,P.key,P.props,null,C.mode,U),U.ref=Qo(C,j,P),U.return=C,C=U)}return g(C);case H:e:{for(le=P.key;j!==null;){if(j.key===le)if(j.tag===4&&j.stateNode.containerInfo===P.containerInfo&&j.stateNode.implementation===P.implementation){o(C,j.sibling),j=u(j,P.children||[]),j.return=C,C=j;break e}else{o(C,j);break}else n(C,j);j=j.sibling}j=Lc(P,C.mode,U),j.return=C,C=j}return g(C);case He:return le=P._init,Je(C,j,le(P._payload),U)}if($o(P))return K(C,j,P,U);if(oe(P))return ee(C,j,P,U);ys(C,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,j!==null&&j.tag===6?(o(C,j.sibling),j=u(j,P),j.return=C,C=j):(o(C,j),j=Nc(P,C.mode,U),j.return=C,C=j),g(C)):o(C,j)}return Je}var Vr=Of(!0),Nf=Of(!1),vs=Zn(null),ws=null,Jr=null,Hl=null;function Vl(){Hl=Jr=ws=null}function Jl(t){var n=vs.current;Oe(vs),t._currentValue=n}function Gl(t,n,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===o)break;t=t.return}}function Gr(t,n){ws=t,Hl=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Tt=!0),t.firstContext=null)}function Wt(t){var n=t._currentValue;if(Hl!==t)if(t={context:t,memoizedValue:n,next:null},Jr===null){if(ws===null)throw Error(i(308));Jr=t,ws.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return n}var mr=null;function Ql(t){mr===null?mr=[t]:mr.push(t)}function Lf(t,n,o,l){var u=n.interleaved;return u===null?(o.next=o,Ql(n)):(o.next=u.next,u.next=o),n.interleaved=o,Pn(t,l)}function Pn(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Vn=!1;function Yl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(t,n,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ke&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Pn(t,o)}return u=l.interleaved,u===null?(n.next=n,Ql(l)):(n.next=u.next,u.next=n),l.interleaved=n,Pn(t,o)}function bs(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,o|=l,n.lanes=o,dl(t,o)}}function Df(t,n){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=g:p=p.next=g,o=o.next}while(o!==null);p===null?u=p=n:p=p.next=n}else u=p=n;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function ks(t,n,o,l){var u=t.updateQueue;Vn=!1;var p=u.firstBaseUpdate,g=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,T=k.next;k.next=null,g===null?p=T:g.next=T,g=k;var B=t.alternate;B!==null&&(B=B.updateQueue,w=B.lastBaseUpdate,w!==g&&(w===null?B.firstBaseUpdate=T:w.next=T,B.lastBaseUpdate=k))}if(p!==null){var F=u.baseState;g=0,B=T=k=null,w=p;do{var D=w.lane,G=w.eventTime;if((l&D)===D){B!==null&&(B=B.next={eventTime:G,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var K=t,ee=w;switch(D=n,G=o,ee.tag){case 1:if(K=ee.payload,typeof K=="function"){F=K.call(G,F,D);break e}F=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ee.payload,D=typeof K=="function"?K.call(G,F,D):K,D==null)break e;F=Z({},F,D);break e;case 2:Vn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,D=u.effects,D===null?u.effects=[w]:D.push(w))}else G={eventTime:G,lane:D,tag:w.tag,payload:w.payload,callback:w.callback,next:null},B===null?(T=B=G,k=F):B=B.next=G,g|=D;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;D=w,w=D.next,D.next=null,u.lastBaseUpdate=D,u.shared.pending=null}}while(!0);if(B===null&&(k=F),u.baseState=k,u.firstBaseUpdate=T,u.lastBaseUpdate=B,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);xr|=g,t.lanes=g,t.memoizedState=F}}function Bf(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(i(191,u));u.call(l)}}}var Yo={},yn=Zn(Yo),Ko=Zn(Yo),Xo=Zn(Yo);function hr(t){if(t===Yo)throw Error(i(174));return t}function Kl(t,n){switch(Ie(Xo,n),Ie(Ko,t),Ie(yn,Yo),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Xa(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Xa(n,t)}Oe(yn),Ie(yn,n)}function Qr(){Oe(yn),Oe(Ko),Oe(Xo)}function Ff(t){hr(Xo.current);var n=hr(yn.current),o=Xa(n,t.type);n!==o&&(Ie(Ko,t),Ie(yn,o))}function Xl(t){Ko.current===t&&(Oe(yn),Oe(Ko))}var Be=Zn(0);function Ss(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ec=[];function tc(){for(var t=0;t<ec.length;t++)ec[t]._workInProgressVersionPrimary=null;ec.length=0}var js=J.ReactCurrentDispatcher,nc=J.ReactCurrentBatchConfig,gr=0,Fe=null,tt=null,at=null,$s=!1,ei=!1,ti=0,D1=0;function wt(){throw Error(i(321))}function rc(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!nn(t[o],n[o]))return!1;return!0}function oc(t,n,o,l,u,p){if(gr=p,Fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,js.current=t===null||t.memoizedState===null?W1:Z1,t=o(l,u),ei){p=0;do{if(ei=!1,ti=0,25<=p)throw Error(i(301));p+=1,at=tt=null,n.updateQueue=null,js.current=q1,t=o(l,u)}while(ei)}if(js.current=_s,n=tt!==null&&tt.next!==null,gr=0,at=tt=Fe=null,$s=!1,n)throw Error(i(300));return t}function ic(){var t=ti!==0;return ti=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function Zt(){if(tt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var n=at===null?Fe.memoizedState:at.next;if(n!==null)at=n,tt=t;else{if(t===null)throw Error(i(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function ni(t,n){return typeof n=="function"?n(t):n}function sc(t){var n=Zt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var l=tt,u=l.baseQueue,p=o.pending;if(p!==null){if(u!==null){var g=u.next;u.next=p.next,p.next=g}l.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,l=l.baseState;var w=g=null,k=null,T=p;do{var B=T.lane;if((gr&B)===B)k!==null&&(k=k.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),l=T.hasEagerState?T.eagerState:t(l,T.action);else{var F={lane:B,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};k===null?(w=k=F,g=l):k=k.next=F,Fe.lanes|=B,xr|=B}T=T.next}while(T!==null&&T!==p);k===null?g=l:k.next=w,nn(l,n.memoizedState)||(Tt=!0),n.memoizedState=l,n.baseState=g,n.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do p=u.lane,Fe.lanes|=p,xr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function ac(t){var n=Zt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,p=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do p=t(p,g.action),g=g.next;while(g!==u);nn(p,n.memoizedState)||(Tt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,l]}function Uf(){}function Wf(t,n){var o=Fe,l=Zt(),u=n(),p=!nn(l.memoizedState,u);if(p&&(l.memoizedState=u,Tt=!0),l=l.queue,lc(Hf.bind(null,o,l,t),[t]),l.getSnapshot!==n||p||at!==null&&at.memoizedState.tag&1){if(o.flags|=2048,ri(9,qf.bind(null,o,l,u,n),void 0,null),lt===null)throw Error(i(349));(gr&30)!==0||Zf(o,n,u)}return u}function Zf(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=Fe.updateQueue,n===null?(n={lastEffect:null,stores:null},Fe.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function qf(t,n,o,l){n.value=o,n.getSnapshot=l,Vf(n)&&Jf(t)}function Hf(t,n,o){return o(function(){Vf(n)&&Jf(t)})}function Vf(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!nn(t,o)}catch{return!0}}function Jf(t){var n=Pn(t,1);n!==null&&ln(n,t,1,-1)}function Gf(t){var n=vn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:t},n.queue=t,t=t.dispatch=U1.bind(null,Fe,t),[n.memoizedState,t]}function ri(t,n,o,l){return t={tag:t,create:n,destroy:o,deps:l,next:null},n=Fe.updateQueue,n===null?(n={lastEffect:null,stores:null},Fe.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,n.lastEffect=t)),t}function Qf(){return Zt().memoizedState}function zs(t,n,o,l){var u=vn();Fe.flags|=t,u.memoizedState=ri(1|n,o,void 0,l===void 0?null:l)}function Cs(t,n,o,l){var u=Zt();l=l===void 0?null:l;var p=void 0;if(tt!==null){var g=tt.memoizedState;if(p=g.destroy,l!==null&&rc(l,g.deps)){u.memoizedState=ri(n,o,p,l);return}}Fe.flags|=t,u.memoizedState=ri(1|n,o,p,l)}function Yf(t,n){return zs(8390656,8,t,n)}function lc(t,n){return Cs(2048,8,t,n)}function Kf(t,n){return Cs(4,2,t,n)}function Xf(t,n){return Cs(4,4,t,n)}function ep(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function tp(t,n,o){return o=o!=null?o.concat([t]):null,Cs(4,4,ep.bind(null,n,t),o)}function cc(){}function np(t,n){var o=Zt();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&rc(n,l[1])?l[0]:(o.memoizedState=[t,n],t)}function rp(t,n){var o=Zt();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&rc(n,l[1])?l[0]:(t=t(),o.memoizedState=[t,n],t)}function op(t,n,o){return(gr&21)===0?(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=o):(nn(o,n)||(o=Rd(),Fe.lanes|=o,xr|=o,t.baseState=!0),n)}function B1(t,n){var o=Ce;Ce=o!==0&&4>o?o:4,t(!0);var l=nc.transition;nc.transition={};try{t(!1),n()}finally{Ce=o,nc.transition=l}}function ip(){return Zt().memoizedState}function F1(t,n,o){var l=Kn(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},sp(t))ap(n,o);else if(o=Lf(t,n,o,l),o!==null){var u=zt();ln(o,t,l,u),lp(o,n,l)}}function U1(t,n,o){var l=Kn(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(sp(t))ap(n,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var g=n.lastRenderedState,w=p(g,o);if(u.hasEagerState=!0,u.eagerState=w,nn(w,g)){var k=n.interleaved;k===null?(u.next=u,Ql(n)):(u.next=k.next,k.next=u),n.interleaved=u;return}}catch{}finally{}o=Lf(t,n,u,l),o!==null&&(u=zt(),ln(o,t,l,u),lp(o,n,l))}}function sp(t){var n=t.alternate;return t===Fe||n!==null&&n===Fe}function ap(t,n){ei=$s=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function lp(t,n,o){if((o&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,o|=l,n.lanes=o,dl(t,o)}}var _s={readContext:Wt,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},W1={readContext:Wt,useCallback:function(t,n){return vn().memoizedState=[t,n===void 0?null:n],t},useContext:Wt,useEffect:Yf,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,zs(4194308,4,ep.bind(null,n,t),o)},useLayoutEffect:function(t,n){return zs(4194308,4,t,n)},useInsertionEffect:function(t,n){return zs(4,2,t,n)},useMemo:function(t,n){var o=vn();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var l=vn();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=F1.bind(null,Fe,t),[l.memoizedState,t]},useRef:function(t){var n=vn();return t={current:t},n.memoizedState=t},useState:Gf,useDebugValue:cc,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=Gf(!1),n=t[0];return t=B1.bind(null,t[1]),vn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var l=Fe,u=vn();if(Me){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),lt===null)throw Error(i(349));(gr&30)!==0||Zf(l,n,o)}u.memoizedState=o;var p={value:o,getSnapshot:n};return u.queue=p,Yf(Hf.bind(null,l,p,t),[t]),l.flags|=2048,ri(9,qf.bind(null,l,p,o,n),void 0,null),o},useId:function(){var t=vn(),n=lt.identifierPrefix;if(Me){var o=_n,l=Cn;o=(l&~(1<<32-tn(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=ti++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=D1++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Z1={readContext:Wt,useCallback:np,useContext:Wt,useEffect:lc,useImperativeHandle:tp,useInsertionEffect:Kf,useLayoutEffect:Xf,useMemo:rp,useReducer:sc,useRef:Qf,useState:function(){return sc(ni)},useDebugValue:cc,useDeferredValue:function(t){var n=Zt();return op(n,tt.memoizedState,t)},useTransition:function(){var t=sc(ni)[0],n=Zt().memoizedState;return[t,n]},useMutableSource:Uf,useSyncExternalStore:Wf,useId:ip,unstable_isNewReconciler:!1},q1={readContext:Wt,useCallback:np,useContext:Wt,useEffect:lc,useImperativeHandle:tp,useInsertionEffect:Kf,useLayoutEffect:Xf,useMemo:rp,useReducer:ac,useRef:Qf,useState:function(){return ac(ni)},useDebugValue:cc,useDeferredValue:function(t){var n=Zt();return tt===null?n.memoizedState=t:op(n,tt.memoizedState,t)},useTransition:function(){var t=ac(ni)[0],n=Zt().memoizedState;return[t,n]},useMutableSource:Uf,useSyncExternalStore:Wf,useId:ip,unstable_isNewReconciler:!1};function on(t,n){if(t&&t.defaultProps){n=Z({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function uc(t,n,o,l){n=t.memoizedState,o=o(l,n),o=o==null?n:Z({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ps={isMounted:function(t){return(t=t._reactInternals)?cr(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var l=zt(),u=Kn(t),p=En(l,u);p.payload=n,o!=null&&(p.callback=o),n=Jn(t,p,u),n!==null&&(ln(n,t,u,l),bs(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var l=zt(),u=Kn(t),p=En(l,u);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=Jn(t,p,u),n!==null&&(ln(n,t,u,l),bs(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=zt(),l=Kn(t),u=En(o,l);u.tag=2,n!=null&&(u.callback=n),n=Jn(t,u,l),n!==null&&(ln(n,t,l,o),bs(n,t,l))}};function cp(t,n,o,l,u,p,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,g):n.prototype&&n.prototype.isPureReactComponent?!Wo(o,l)||!Wo(u,p):!0}function up(t,n,o){var l=!1,u=qn,p=n.contextType;return typeof p=="object"&&p!==null?p=Wt(p):(u=Et(n)?dr:vt.current,l=n.contextTypes,p=(l=l!=null)?Wr(t,u):qn),n=new n(o,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ps,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),n}function dp(t,n,o,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==t&&Ps.enqueueReplaceState(n,n.state,null)}function dc(t,n,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Yl(t);var p=n.contextType;typeof p=="object"&&p!==null?u.context=Wt(p):(p=Et(n)?dr:vt.current,u.context=Wr(t,p)),u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(uc(t,n,p,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ps.enqueueReplaceState(u,u.state,null),ks(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Yr(t,n){try{var o="",l=n;do o+=ue(l),l=l.return;while(l);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:u,digest:null}}function fc(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function pc(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function fp(t,n,o){o=En(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){Ns||(Ns=!0,_c=l),pc(t,n)},o}function pp(t,n,o){o=En(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;o.payload=function(){return l(u)},o.callback=function(){pc(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){pc(t,n),typeof l!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function mp(t,n,o){var l=t.pingCache;if(l===null){l=t.pingCache=new H1;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(o)||(u.add(o),t=sx.bind(null,t,n,o),n.then(t,t))}function hp(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function gp(t,n,o,l,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=En(-1,1),n.tag=2,Jn(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var V1=J.ReactCurrentOwner,Tt=!1;function $t(t,n,o,l){n.child=t===null?Nf(n,null,o,l):Vr(n,t.child,o,l)}function xp(t,n,o,l,u){o=o.render;var p=n.ref;return Gr(n,u),l=oc(t,n,o,l,p,u),o=ic(),t!==null&&!Tt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,Tn(t,n,u)):(Me&&o&&Fl(n),n.flags|=1,$t(t,n,l,u),n.child)}function yp(t,n,o,l,u){if(t===null){var p=o.type;return typeof p=="function"&&!Oc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,vp(t,n,p,l,u)):(t=Us(o.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&u)===0){var g=p.memoizedProps;if(o=o.compare,o=o!==null?o:Wo,o(g,l)&&t.ref===n.ref)return Tn(t,n,u)}return n.flags|=1,t=er(p,l),t.ref=n.ref,t.return=n,n.child=t}function vp(t,n,o,l,u){if(t!==null){var p=t.memoizedProps;if(Wo(p,l)&&t.ref===n.ref)if(Tt=!1,n.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Tt=!0);else return n.lanes=t.lanes,Tn(t,n,u)}return mc(t,n,o,l,u)}function wp(t,n,o){var l=n.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Xr,Bt),Bt|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Ie(Xr,Bt),Bt|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ie(Xr,Bt),Bt|=l}else p!==null?(l=p.baseLanes|o,n.memoizedState=null):l=o,Ie(Xr,Bt),Bt|=l;return $t(t,n,u,o),n.child}function bp(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function mc(t,n,o,l,u){var p=Et(o)?dr:vt.current;return p=Wr(n,p),Gr(n,u),o=oc(t,n,o,l,p,u),l=ic(),t!==null&&!Tt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,Tn(t,n,u)):(Me&&l&&Fl(n),n.flags|=1,$t(t,n,o,u),n.child)}function kp(t,n,o,l,u){if(Et(o)){var p=!0;ps(n)}else p=!1;if(Gr(n,u),n.stateNode===null)Ts(t,n),up(n,o,l),dc(n,o,l,u),l=!0;else if(t===null){var g=n.stateNode,w=n.memoizedProps;g.props=w;var k=g.context,T=o.contextType;typeof T=="object"&&T!==null?T=Wt(T):(T=Et(o)?dr:vt.current,T=Wr(n,T));var B=o.getDerivedStateFromProps,F=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==l||k!==T)&&dp(n,g,l,T),Vn=!1;var D=n.memoizedState;g.state=D,ks(n,l,g,u),k=n.memoizedState,w!==l||D!==k||Pt.current||Vn?(typeof B=="function"&&(uc(n,o,B,l),k=n.memoizedState),(w=Vn||cp(n,o,w,l,D,k,T))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=k),g.props=l,g.state=k,g.context=T,l=w):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,Mf(t,n),w=n.memoizedProps,T=n.type===n.elementType?w:on(n.type,w),g.props=T,F=n.pendingProps,D=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=Wt(k):(k=Et(o)?dr:vt.current,k=Wr(n,k));var G=o.getDerivedStateFromProps;(B=typeof G=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||D!==k)&&dp(n,g,l,k),Vn=!1,D=n.memoizedState,g.state=D,ks(n,l,g,u);var K=n.memoizedState;w!==F||D!==K||Pt.current||Vn?(typeof G=="function"&&(uc(n,o,G,l),K=n.memoizedState),(T=Vn||cp(n,o,T,l,D,K,k)||!1)?(B||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,K,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,K,k)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=K),g.props=l,g.state=K,g.context=k,l=T):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&D===t.memoizedState||(n.flags|=1024),l=!1)}return hc(t,n,o,l,p,u)}function hc(t,n,o,l,u,p){bp(t,n);var g=(n.flags&128)!==0;if(!l&&!g)return u&&Cf(n,o,!1),Tn(t,n,p);l=n.stateNode,V1.current=n;var w=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&g?(n.child=Vr(n,t.child,null,p),n.child=Vr(n,null,w,p)):$t(t,n,w,p),n.memoizedState=l.state,u&&Cf(n,o,!0),n.child}function Sp(t){var n=t.stateNode;n.pendingContext?$f(t,n.pendingContext,n.pendingContext!==n.context):n.context&&$f(t,n.context,!1),Kl(t,n.containerInfo)}function jp(t,n,o,l,u){return Hr(),ql(u),n.flags|=256,$t(t,n,o,l),n.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function $p(t,n,o){var l=n.pendingProps,u=Be.current,p=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(u&2)!==0),w?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ie(Be,u&1),t===null)return Zl(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(g=l.children,t=l.fallback,p?(l=n.mode,p=n.child,g={mode:"hidden",children:g},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=g):p=Ws(g,l,0,null),t=br(t,l,o,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=xc(o),n.memoizedState=gc,t):yc(n,g));if(u=t.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return J1(t,n,g,l,w,u,o);if(p){p=l.fallback,g=n.mode,u=t.child,w=u.sibling;var k={mode:"hidden",children:l.children};return(g&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=k,n.deletions=null):(l=er(u,k),l.subtreeFlags=u.subtreeFlags&14680064),w!==null?p=er(w,p):(p=br(p,g,o,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,g=t.child.memoizedState,g=g===null?xc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=t.childLanes&~o,n.memoizedState=gc,l}return p=t.child,t=p.sibling,l=er(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=o),l.return=n,l.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=l,n.memoizedState=null,l}function yc(t,n){return n=Ws({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Es(t,n,o,l){return l!==null&&ql(l),Vr(n,t.child,null,o),t=yc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function J1(t,n,o,l,u,p,g){if(o)return n.flags&256?(n.flags&=-257,l=fc(Error(i(422))),Es(t,n,g,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=l.fallback,u=n.mode,l=Ws({mode:"visible",children:l.children},u,0,null),p=br(p,u,g,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&Vr(n,t.child,null,g),n.child.memoizedState=xc(g),n.memoizedState=gc,p);if((n.mode&1)===0)return Es(t,n,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var w=l.dgst;return l=w,p=Error(i(419)),l=fc(p,l,void 0),Es(t,n,g,l)}if(w=(g&t.childLanes)!==0,Tt||w){if(l=lt,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Pn(t,u),ln(l,t,u,-1))}return Ac(),l=fc(Error(i(421))),Es(t,n,g,l)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=ax.bind(null,t),u._reactRetry=n,null):(t=p.treeContext,Dt=Wn(u.nextSibling),Mt=n,Me=!0,rn=null,t!==null&&(Ft[Ut++]=Cn,Ft[Ut++]=_n,Ft[Ut++]=fr,Cn=t.id,_n=t.overflow,fr=n),n=yc(n,l.children),n.flags|=4096,n)}function zp(t,n,o){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Gl(t.return,n,o)}function vc(t,n,o,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=u)}function Cp(t,n,o){var l=n.pendingProps,u=l.revealOrder,p=l.tail;if($t(t,n,l.children,o),l=Be.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,o,n);else if(t.tag===19)zp(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ie(Be,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&Ss(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),vc(n,!1,u,o,p);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ss(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}vc(n,!0,o,null,p);break;case"together":vc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ts(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Tn(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),xr|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=er(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=er(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function G1(t,n,o){switch(n.tag){case 3:Sp(n),Hr();break;case 5:Ff(n);break;case 1:Et(n.type)&&ps(n);break;case 4:Kl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;Ie(vs,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Ie(Be,Be.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?$p(t,n,o):(Ie(Be,Be.current&1),t=Tn(t,n,o),t!==null?t.sibling:null);Ie(Be,Be.current&1);break;case 19:if(l=(o&n.childLanes)!==0,(t.flags&128)!==0){if(l)return Cp(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ie(Be,Be.current),l)break;return null;case 22:case 23:return n.lanes=0,wp(t,n,o)}return Tn(t,n,o)}var _p,wc,Pp,Ep;_p=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wc=function(){},Pp=function(t,n,o,l){var u=t.memoizedProps;if(u!==l){t=n.stateNode,hr(yn.current);var p=null;switch(o){case"input":u=Ga(t,u),l=Ga(t,l),p=[];break;case"select":u=Z({},u,{value:void 0}),l=Z({},l,{value:void 0}),p=[];break;case"textarea":u=Ka(t,u),l=Ka(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=us)}el(o,l);var g;o=null;for(T in u)if(!l.hasOwnProperty(T)&&u.hasOwnProperty(T)&&u[T]!=null)if(T==="style"){var w=u[T];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(c.hasOwnProperty(T)?p||(p=[]):(p=p||[]).push(T,null));for(T in l){var k=l[T];if(w=u!=null?u[T]:void 0,l.hasOwnProperty(T)&&k!==w&&(k!=null||w!=null))if(T==="style")if(w){for(g in w)!w.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&w[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(p||(p=[]),p.push(T,o)),o=k;else T==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(p=p||[]).push(T,k)):T==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(T,""+k):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(c.hasOwnProperty(T)?(k!=null&&T==="onScroll"&&Ae("scroll",t),p||w===k||(p=[])):(p=p||[]).push(T,k))}o&&(p=p||[]).push("style",o);var T=p;(n.updateQueue=T)&&(n.flags|=4)}},Ep=function(t,n,o,l){o!==l&&(n.flags|=4)};function oi(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function bt(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,n}function Q1(t,n,o){var l=n.pendingProps;switch(Ul(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(n),null;case 1:return Et(n.type)&&fs(),bt(n),null;case 3:return l=n.stateNode,Qr(),Oe(Pt),Oe(vt),tc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xs(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rn!==null&&(Tc(rn),rn=null))),wc(t,n),bt(n),null;case 5:Xl(n);var u=hr(Xo.current);if(o=n.type,t!==null&&n.stateNode!=null)Pp(t,n,o,l,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return bt(n),null}if(t=hr(yn.current),xs(n)){l=n.stateNode,o=n.type;var p=n.memoizedProps;switch(l[xn]=n,l[Jo]=p,t=(n.mode&1)!==0,o){case"dialog":Ae("cancel",l),Ae("close",l);break;case"iframe":case"object":case"embed":Ae("load",l);break;case"video":case"audio":for(u=0;u<qo.length;u++)Ae(qo[u],l);break;case"source":Ae("error",l);break;case"img":case"image":case"link":Ae("error",l),Ae("load",l);break;case"details":Ae("toggle",l);break;case"input":cd(l,p),Ae("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ae("invalid",l);break;case"textarea":fd(l,p),Ae("invalid",l)}el(o,p),u=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?l.textContent!==w&&(p.suppressHydrationWarning!==!0&&cs(l.textContent,w,t),u=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&cs(l.textContent,w,t),u=["children",""+w]):c.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Ae("scroll",l)}switch(o){case"input":Bi(l),dd(l,p,!0);break;case"textarea":Bi(l),md(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=us)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=g.createElement(o,{is:l.is}):(t=g.createElement(o),o==="select"&&(g=t,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):t=g.createElementNS(t,o),t[xn]=n,t[Jo]=l,_p(t,n,!1,!1),n.stateNode=t;e:{switch(g=tl(o,l),o){case"dialog":Ae("cancel",t),Ae("close",t),u=l;break;case"iframe":case"object":case"embed":Ae("load",t),u=l;break;case"video":case"audio":for(u=0;u<qo.length;u++)Ae(qo[u],t);u=l;break;case"source":Ae("error",t),u=l;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),u=l;break;case"details":Ae("toggle",t),u=l;break;case"input":cd(t,l),u=Ga(t,l),Ae("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=Z({},l,{value:void 0}),Ae("invalid",t);break;case"textarea":fd(t,l),u=Ka(t,l),Ae("invalid",t);break;default:u=l}el(o,u),w=u;for(p in w)if(w.hasOwnProperty(p)){var k=w[p];p==="style"?yd(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&gd(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&zo(t,k):typeof k=="number"&&zo(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(c.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ae("scroll",t):k!=null&&V(t,p,k,g))}switch(o){case"input":Bi(t),dd(t,l,!1);break;case"textarea":Bi(t),md(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?Tr(t,!!l.multiple,p,!1):l.defaultValue!=null&&Tr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=us)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return bt(n),null;case 6:if(t&&n.stateNode!=null)Ep(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(o=hr(Xo.current),hr(yn.current),xs(n)){if(l=n.stateNode,o=n.memoizedProps,l[xn]=n,(p=l.nodeValue!==o)&&(t=Mt,t!==null))switch(t.tag){case 3:cs(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cs(l.nodeValue,o,(t.mode&1)!==0)}p&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[xn]=n,n.stateNode=l}return bt(n),null;case 13:if(Oe(Be),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&Dt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Rf(),Hr(),n.flags|=98560,p=!1;else if(p=xs(n),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[xn]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;bt(n),p=!1}else rn!==null&&(Tc(rn),rn=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Be.current&1)!==0?nt===0&&(nt=3):Ac())),n.updateQueue!==null&&(n.flags|=4),bt(n),null);case 4:return Qr(),wc(t,n),t===null&&Ho(n.stateNode.containerInfo),bt(n),null;case 10:return Jl(n.type._context),bt(n),null;case 17:return Et(n.type)&&fs(),bt(n),null;case 19:if(Oe(Be),p=n.memoizedState,p===null)return bt(n),null;if(l=(n.flags&128)!==0,g=p.rendering,g===null)if(l)oi(p,!1);else{if(nt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=Ss(t),g!==null){for(n.flags|=128,oi(p,!1),l=g.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)p=o,t=l,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,t=g.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(Be,Be.current&1|2),n.child}t=t.sibling}p.tail!==null&&Ve()>eo&&(n.flags|=128,l=!0,oi(p,!1),n.lanes=4194304)}else{if(!l)if(t=Ss(g),t!==null){if(n.flags|=128,l=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),oi(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Me)return bt(n),null}else 2*Ve()-p.renderingStartTime>eo&&o!==1073741824&&(n.flags|=128,l=!0,oi(p,!1),n.lanes=4194304);p.isBackwards?(g.sibling=n.child,n.child=g):(o=p.last,o!==null?o.sibling=g:n.child=g,p.last=g)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Ve(),n.sibling=null,o=Be.current,Ie(Be,l?o&1|2:o&1),n):(bt(n),null);case 22:case 23:return Rc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Bt&1073741824)!==0&&(bt(n),n.subtreeFlags&6&&(n.flags|=8192)):bt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function Y1(t,n){switch(Ul(n),n.tag){case 1:return Et(n.type)&&fs(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qr(),Oe(Pt),Oe(vt),tc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Xl(n),null;case 13:if(Oe(Be),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Oe(Be),null;case 4:return Qr(),null;case 10:return Jl(n.type._context),null;case 22:case 23:return Rc(),null;case 24:return null;default:return null}}var Is=!1,kt=!1,K1=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Kr(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){qe(t,n,l)}else o.current=null}function bc(t,n,o){try{o()}catch(l){qe(t,n,l)}}var Tp=!1;function X1(t,n){if(Rl=Ki,t=cf(),$l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var g=0,w=-1,k=-1,T=0,B=0,F=t,D=null;t:for(;;){for(var G;F!==o||u!==0&&F.nodeType!==3||(w=g+u),F!==p||l!==0&&F.nodeType!==3||(k=g+l),F.nodeType===3&&(g+=F.nodeValue.length),(G=F.firstChild)!==null;)D=F,F=G;for(;;){if(F===t)break t;if(D===o&&++T===u&&(w=g),D===p&&++B===l&&(k=g),(G=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=G}o=w===-1||k===-1?null:{start:w,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Al={focusedElem:t,selectionRange:o},Ki=!1,Y=n;Y!==null;)if(n=Y,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Y=t;else for(;Y!==null;){n=Y;try{var K=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var ee=K.memoizedProps,Je=K.memoizedState,C=n.stateNode,j=C.getSnapshotBeforeUpdate(n.elementType===n.type?ee:on(n.type,ee),Je);C.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var P=n.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(U){qe(n,n.return,U)}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}return K=Tp,Tp=!1,K}function ii(t,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&bc(n,o,p)}u=u.next}while(u!==l)}}function Rs(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function kc(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function Ip(t){var n=t.alternate;n!==null&&(t.alternate=null,Ip(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[xn],delete n[Jo],delete n[Ml],delete n[O1],delete n[N1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,n,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=us));else if(l!==4&&(t=t.child,t!==null))for(Sc(t,n,o),t=t.sibling;t!==null;)Sc(t,n,o),t=t.sibling}function jc(t,n,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(jc(t,n,o),t=t.sibling;t!==null;)jc(t,n,o),t=t.sibling}var ft=null,sn=!1;function Gn(t,n,o){for(o=o.child;o!==null;)Op(t,n,o),o=o.sibling}function Op(t,n,o){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Hi,o)}catch{}switch(o.tag){case 5:kt||Kr(o,n);case 6:var l=ft,u=sn;ft=null,Gn(t,n,o),ft=l,sn=u,ft!==null&&(sn?(t=ft,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):ft.removeChild(o.stateNode));break;case 18:ft!==null&&(sn?(t=ft,o=o.stateNode,t.nodeType===8?Ll(t.parentNode,o):t.nodeType===1&&Ll(t,o),Lo(t)):Ll(ft,o.stateNode));break;case 4:l=ft,u=sn,ft=o.stateNode.containerInfo,sn=!0,Gn(t,n,o),ft=l,sn=u;break;case 0:case 11:case 14:case 15:if(!kt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,g=p.destroy;p=p.tag,g!==void 0&&((p&2)!==0||(p&4)!==0)&&bc(o,n,g),u=u.next}while(u!==l)}Gn(t,n,o);break;case 1:if(!kt&&(Kr(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(w){qe(o,n,w)}Gn(t,n,o);break;case 21:Gn(t,n,o);break;case 22:o.mode&1?(kt=(l=kt)||o.memoizedState!==null,Gn(t,n,o),kt=l):Gn(t,n,o);break;default:Gn(t,n,o)}}function Np(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new K1),n.forEach(function(l){var u=lx.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function an(t,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var p=t,g=n,w=g;e:for(;w!==null;){switch(w.tag){case 5:ft=w.stateNode,sn=!1;break e;case 3:ft=w.stateNode.containerInfo,sn=!0;break e;case 4:ft=w.stateNode.containerInfo,sn=!0;break e}w=w.return}if(ft===null)throw Error(i(160));Op(p,g,u),ft=null,sn=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(T){qe(u,n,T)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lp(n,t),n=n.sibling}function Lp(t,n){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(n,t),wn(t),l&4){try{ii(3,t,t.return),Rs(3,t)}catch(ee){qe(t,t.return,ee)}try{ii(5,t,t.return)}catch(ee){qe(t,t.return,ee)}}break;case 1:an(n,t),wn(t),l&512&&o!==null&&Kr(o,o.return);break;case 5:if(an(n,t),wn(t),l&512&&o!==null&&Kr(o,o.return),t.flags&32){var u=t.stateNode;try{zo(u,"")}catch(ee){qe(t,t.return,ee)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,g=o!==null?o.memoizedProps:p,w=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&ud(u,p),tl(w,g);var T=tl(w,p);for(g=0;g<k.length;g+=2){var B=k[g],F=k[g+1];B==="style"?yd(u,F):B==="dangerouslySetInnerHTML"?gd(u,F):B==="children"?zo(u,F):V(u,B,F,T)}switch(w){case"input":Qa(u,p);break;case"textarea":pd(u,p);break;case"select":var D=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var G=p.value;G!=null?Tr(u,!!p.multiple,G,!1):D!==!!p.multiple&&(p.defaultValue!=null?Tr(u,!!p.multiple,p.defaultValue,!0):Tr(u,!!p.multiple,p.multiple?[]:"",!1))}u[Jo]=p}catch(ee){qe(t,t.return,ee)}}break;case 6:if(an(n,t),wn(t),l&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(ee){qe(t,t.return,ee)}}break;case 3:if(an(n,t),wn(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ee){qe(t,t.return,ee)}break;case 4:an(n,t),wn(t);break;case 13:an(n,t),wn(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Cc=Ve())),l&4&&Np(t);break;case 22:if(B=o!==null&&o.memoizedState!==null,t.mode&1?(kt=(T=kt)||B,an(n,t),kt=T):an(n,t),wn(t),l&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!B&&(t.mode&1)!==0)for(Y=t,B=t.child;B!==null;){for(F=Y=B;Y!==null;){switch(D=Y,G=D.child,D.tag){case 0:case 11:case 14:case 15:ii(4,D,D.return);break;case 1:Kr(D,D.return);var K=D.stateNode;if(typeof K.componentWillUnmount=="function"){l=D,o=D.return;try{n=l,K.props=n.memoizedProps,K.state=n.memoizedState,K.componentWillUnmount()}catch(ee){qe(l,o,ee)}}break;case 5:Kr(D,D.return);break;case 22:if(D.memoizedState!==null){Bp(F);continue}}G!==null?(G.return=D,Y=G):Bp(F)}B=B.sibling}e:for(B=null,F=t;;){if(F.tag===5){if(B===null){B=F;try{u=F.stateNode,T?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=F.stateNode,k=F.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=xd("display",g))}catch(ee){qe(t,t.return,ee)}}}else if(F.tag===6){if(B===null)try{F.stateNode.nodeValue=T?"":F.memoizedProps}catch(ee){qe(t,t.return,ee)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break e;for(;F.sibling===null;){if(F.return===null||F.return===t)break e;B===F&&(B=null),F=F.return}B===F&&(B=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:an(n,t),wn(t),l&4&&Np(t);break;case 21:break;default:an(n,t),wn(t)}}function wn(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(Rp(o)){var l=o;break e}o=o.return}throw Error(i(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(zo(u,""),l.flags&=-33);var p=Ap(t);jc(t,p,u);break;case 3:case 4:var g=l.stateNode.containerInfo,w=Ap(t);Sc(t,w,g);break;default:throw Error(i(161))}}catch(k){qe(t,t.return,k)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ex(t,n,o){Y=t,Mp(t)}function Mp(t,n,o){for(var l=(t.mode&1)!==0;Y!==null;){var u=Y,p=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Is;if(!g){var w=u.alternate,k=w!==null&&w.memoizedState!==null||kt;w=Is;var T=kt;if(Is=g,(kt=k)&&!T)for(Y=u;Y!==null;)g=Y,k=g.child,g.tag===22&&g.memoizedState!==null?Fp(u):k!==null?(k.return=g,Y=k):Fp(u);for(;p!==null;)Y=p,Mp(p),p=p.sibling;Y=u,Is=w,kt=T}Dp(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Y=p):Dp(t)}}function Dp(t){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:kt||Rs(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!kt)if(o===null)l.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:on(n.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Bf(n,p,l);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Bf(n,g,o)}break;case 5:var w=n.stateNode;if(o===null&&n.flags&4){o=w;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var T=n.alternate;if(T!==null){var B=T.memoizedState;if(B!==null){var F=B.dehydrated;F!==null&&Lo(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}kt||n.flags&512&&kc(n)}catch(D){qe(n,n.return,D)}}if(n===t){Y=null;break}if(o=n.sibling,o!==null){o.return=n.return,Y=o;break}Y=n.return}}function Bp(t){for(;Y!==null;){var n=Y;if(n===t){Y=null;break}var o=n.sibling;if(o!==null){o.return=n.return,Y=o;break}Y=n.return}}function Fp(t){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Rs(4,n)}catch(k){qe(n,o,k)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(k){qe(n,u,k)}}var p=n.return;try{kc(n)}catch(k){qe(n,p,k)}break;case 5:var g=n.return;try{kc(n)}catch(k){qe(n,g,k)}}}catch(k){qe(n,n.return,k)}if(n===t){Y=null;break}var w=n.sibling;if(w!==null){w.return=n.return,Y=w;break}Y=n.return}}var tx=Math.ceil,As=J.ReactCurrentDispatcher,$c=J.ReactCurrentOwner,qt=J.ReactCurrentBatchConfig,ke=0,lt=null,Qe=null,pt=0,Bt=0,Xr=Zn(0),nt=0,si=null,xr=0,Os=0,zc=0,ai=null,It=null,Cc=0,eo=1/0,In=null,Ns=!1,_c=null,Qn=null,Ls=!1,Yn=null,Ms=0,li=0,Pc=null,Ds=-1,Bs=0;function zt(){return(ke&6)!==0?Ve():Ds!==-1?Ds:Ds=Ve()}function Kn(t){return(t.mode&1)===0?1:(ke&2)!==0&&pt!==0?pt&-pt:M1.transition!==null?(Bs===0&&(Bs=Rd()),Bs):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:Ud(t.type)),t)}function ln(t,n,o,l){if(50<li)throw li=0,Pc=null,Error(i(185));Io(t,o,l),((ke&2)===0||t!==lt)&&(t===lt&&((ke&2)===0&&(Os|=o),nt===4&&Xn(t,pt)),Rt(t,l),o===1&&ke===0&&(n.mode&1)===0&&(eo=Ve()+500,ms&&Hn()))}function Rt(t,n){var o=t.callbackNode;M0(t,n);var l=Gi(t,t===lt?pt:0);if(l===0)o!==null&&Ed(o),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(o!=null&&Ed(o),n===1)t.tag===0?L1(Wp.bind(null,t)):_f(Wp.bind(null,t)),R1(function(){(ke&6)===0&&Hn()}),o=null;else{switch(Ad(l)){case 1:o=ll;break;case 4:o=Td;break;case 16:o=qi;break;case 536870912:o=Id;break;default:o=qi}o=Yp(o,Up.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function Up(t,n){if(Ds=-1,Bs=0,(ke&6)!==0)throw Error(i(327));var o=t.callbackNode;if(to()&&t.callbackNode!==o)return null;var l=Gi(t,t===lt?pt:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=Fs(t,l);else{n=l;var u=ke;ke|=2;var p=qp();(lt!==t||pt!==n)&&(In=null,eo=Ve()+500,vr(t,n));do try{ox();break}catch(w){Zp(t,w)}while(!0);Vl(),As.current=p,ke=u,Qe!==null?n=0:(lt=null,pt=0,n=nt)}if(n!==0){if(n===2&&(u=cl(t),u!==0&&(l=u,n=Ec(t,u))),n===1)throw o=si,vr(t,0),Xn(t,l),Rt(t,Ve()),o;if(n===6)Xn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!nx(u)&&(n=Fs(t,l),n===2&&(p=cl(t),p!==0&&(l=p,n=Ec(t,p))),n===1))throw o=si,vr(t,0),Xn(t,l),Rt(t,Ve()),o;switch(t.finishedWork=u,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:wr(t,It,In);break;case 3:if(Xn(t,l),(l&130023424)===l&&(n=Cc+500-Ve(),10<n)){if(Gi(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){zt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Nl(wr.bind(null,t,It,In),n);break}wr(t,It,In);break;case 4:if(Xn(t,l),(l&4194240)===l)break;for(n=t.eventTimes,u=-1;0<l;){var g=31-tn(l);p=1<<g,g=n[g],g>u&&(u=g),l&=~p}if(l=u,l=Ve()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*tx(l/1960))-l,10<l){t.timeoutHandle=Nl(wr.bind(null,t,It,In),l);break}wr(t,It,In);break;case 5:wr(t,It,In);break;default:throw Error(i(329))}}}return Rt(t,Ve()),t.callbackNode===o?Up.bind(null,t):null}function Ec(t,n){var o=ai;return t.current.memoizedState.isDehydrated&&(vr(t,n).flags|=256),t=Fs(t,n),t!==2&&(n=It,It=o,n!==null&&Tc(n)),t}function Tc(t){It===null?It=t:It.push.apply(It,t)}function nx(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],p=u.getSnapshot;u=u.value;try{if(!nn(p(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xn(t,n){for(n&=~zc,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-tn(n),l=1<<o;t[o]=-1,n&=~l}}function Wp(t){if((ke&6)!==0)throw Error(i(327));to();var n=Gi(t,0);if((n&1)===0)return Rt(t,Ve()),null;var o=Fs(t,n);if(t.tag!==0&&o===2){var l=cl(t);l!==0&&(n=l,o=Ec(t,l))}if(o===1)throw o=si,vr(t,0),Xn(t,n),Rt(t,Ve()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,wr(t,It,In),Rt(t,Ve()),null}function Ic(t,n){var o=ke;ke|=1;try{return t(n)}finally{ke=o,ke===0&&(eo=Ve()+500,ms&&Hn())}}function yr(t){Yn!==null&&Yn.tag===0&&(ke&6)===0&&to();var n=ke;ke|=1;var o=qt.transition,l=Ce;try{if(qt.transition=null,Ce=1,t)return t()}finally{Ce=l,qt.transition=o,ke=n,(ke&6)===0&&Hn()}}function Rc(){Bt=Xr.current,Oe(Xr)}function vr(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,I1(o)),Qe!==null)for(o=Qe.return;o!==null;){var l=o;switch(Ul(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fs();break;case 3:Qr(),Oe(Pt),Oe(vt),tc();break;case 5:Xl(l);break;case 4:Qr();break;case 13:Oe(Be);break;case 19:Oe(Be);break;case 10:Jl(l.type._context);break;case 22:case 23:Rc()}o=o.return}if(lt=t,Qe=t=er(t.current,null),pt=Bt=n,nt=0,si=null,zc=Os=xr=0,It=ai=null,mr!==null){for(n=0;n<mr.length;n++)if(o=mr[n],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,p=o.pending;if(p!==null){var g=p.next;p.next=u,l.next=g}o.pending=l}mr=null}return t}function Zp(t,n){do{var o=Qe;try{if(Vl(),js.current=_s,$s){for(var l=Fe.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}$s=!1}if(gr=0,at=tt=Fe=null,ei=!1,ti=0,$c.current=null,o===null||o.return===null){nt=1,si=n,Qe=null;break}e:{var p=t,g=o.return,w=o,k=n;if(n=pt,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var T=k,B=w,F=B.tag;if((B.mode&1)===0&&(F===0||F===11||F===15)){var D=B.alternate;D?(B.updateQueue=D.updateQueue,B.memoizedState=D.memoizedState,B.lanes=D.lanes):(B.updateQueue=null,B.memoizedState=null)}var G=hp(g);if(G!==null){G.flags&=-257,gp(G,g,w,p,n),G.mode&1&&mp(p,T,n),n=G,k=T;var K=n.updateQueue;if(K===null){var ee=new Set;ee.add(k),n.updateQueue=ee}else K.add(k);break e}else{if((n&1)===0){mp(p,T,n),Ac();break e}k=Error(i(426))}}else if(Me&&w.mode&1){var Je=hp(g);if(Je!==null){(Je.flags&65536)===0&&(Je.flags|=256),gp(Je,g,w,p,n),ql(Yr(k,w));break e}}p=k=Yr(k,w),nt!==4&&(nt=2),ai===null?ai=[p]:ai.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var C=fp(p,k,n);Df(p,C);break e;case 1:w=k;var j=p.type,P=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(Qn===null||!Qn.has(P)))){p.flags|=65536,n&=-n,p.lanes|=n;var U=pp(p,w,n);Df(p,U);break e}}p=p.return}while(p!==null)}Vp(o)}catch(ne){n=ne,Qe===o&&o!==null&&(Qe=o=o.return);continue}break}while(!0)}function qp(){var t=As.current;return As.current=_s,t===null?_s:t}function Ac(){(nt===0||nt===3||nt===2)&&(nt=4),lt===null||(xr&268435455)===0&&(Os&268435455)===0||Xn(lt,pt)}function Fs(t,n){var o=ke;ke|=2;var l=qp();(lt!==t||pt!==n)&&(In=null,vr(t,n));do try{rx();break}catch(u){Zp(t,u)}while(!0);if(Vl(),ke=o,As.current=l,Qe!==null)throw Error(i(261));return lt=null,pt=0,nt}function rx(){for(;Qe!==null;)Hp(Qe)}function ox(){for(;Qe!==null&&!P0();)Hp(Qe)}function Hp(t){var n=Qp(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,n===null?Vp(t):Qe=n,$c.current=null}function Vp(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=Q1(o,n,Bt),o!==null){Qe=o;return}}else{if(o=Y1(o,n),o!==null){o.flags&=32767,Qe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Qe=null;return}}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=t}while(n!==null);nt===0&&(nt=5)}function wr(t,n,o){var l=Ce,u=qt.transition;try{qt.transition=null,Ce=1,ix(t,n,o,l)}finally{qt.transition=u,Ce=l}return null}function ix(t,n,o,l){do to();while(Yn!==null);if((ke&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(D0(t,p),t===lt&&(Qe=lt=null,pt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ls||(Ls=!0,Yp(qi,function(){return to(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=qt.transition,qt.transition=null;var g=Ce;Ce=1;var w=ke;ke|=4,$c.current=null,X1(t,o),Lp(o,t),$1(Al),Ki=!!Rl,Al=Rl=null,t.current=o,ex(o),E0(),ke=w,Ce=g,qt.transition=p}else t.current=o;if(Ls&&(Ls=!1,Yn=t,Ms=u),p=t.pendingLanes,p===0&&(Qn=null),R0(o.stateNode),Rt(t,Ve()),n!==null)for(l=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ns)throw Ns=!1,t=_c,_c=null,t;return(Ms&1)!==0&&t.tag!==0&&to(),p=t.pendingLanes,(p&1)!==0?t===Pc?li++:(li=0,Pc=t):li=0,Hn(),null}function to(){if(Yn!==null){var t=Ad(Ms),n=qt.transition,o=Ce;try{if(qt.transition=null,Ce=16>t?16:t,Yn===null)var l=!1;else{if(t=Yn,Yn=null,Ms=0,(ke&6)!==0)throw Error(i(331));var u=ke;for(ke|=4,Y=t.current;Y!==null;){var p=Y,g=p.child;if((Y.flags&16)!==0){var w=p.deletions;if(w!==null){for(var k=0;k<w.length;k++){var T=w[k];for(Y=T;Y!==null;){var B=Y;switch(B.tag){case 0:case 11:case 15:ii(8,B,p)}var F=B.child;if(F!==null)F.return=B,Y=F;else for(;Y!==null;){B=Y;var D=B.sibling,G=B.return;if(Ip(B),B===T){Y=null;break}if(D!==null){D.return=G,Y=D;break}Y=G}}}var K=p.alternate;if(K!==null){var ee=K.child;if(ee!==null){K.child=null;do{var Je=ee.sibling;ee.sibling=null,ee=Je}while(ee!==null)}}Y=p}}if((p.subtreeFlags&2064)!==0&&g!==null)g.return=p,Y=g;else e:for(;Y!==null;){if(p=Y,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ii(9,p,p.return)}var C=p.sibling;if(C!==null){C.return=p.return,Y=C;break e}Y=p.return}}var j=t.current;for(Y=j;Y!==null;){g=Y;var P=g.child;if((g.subtreeFlags&2064)!==0&&P!==null)P.return=g,Y=P;else e:for(g=j;Y!==null;){if(w=Y,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Rs(9,w)}}catch(ne){qe(w,w.return,ne)}if(w===g){Y=null;break e}var U=w.sibling;if(U!==null){U.return=w.return,Y=U;break e}Y=w.return}}if(ke=u,Hn(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Hi,t)}catch{}l=!0}return l}finally{Ce=o,qt.transition=n}}return!1}function Jp(t,n,o){n=Yr(o,n),n=fp(t,n,1),t=Jn(t,n,1),n=zt(),t!==null&&(Io(t,1,n),Rt(t,n))}function qe(t,n,o){if(t.tag===3)Jp(t,t,o);else for(;n!==null;){if(n.tag===3){Jp(n,t,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qn===null||!Qn.has(l))){t=Yr(o,t),t=pp(n,t,1),n=Jn(n,t,1),t=zt(),n!==null&&(Io(n,1,t),Rt(n,t));break}}n=n.return}}function sx(t,n,o){var l=t.pingCache;l!==null&&l.delete(n),n=zt(),t.pingedLanes|=t.suspendedLanes&o,lt===t&&(pt&o)===o&&(nt===4||nt===3&&(pt&130023424)===pt&&500>Ve()-Cc?vr(t,0):zc|=o),Rt(t,n)}function Gp(t,n){n===0&&((t.mode&1)===0?n=1:(n=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var o=zt();t=Pn(t,n),t!==null&&(Io(t,n,o),Rt(t,o))}function ax(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),Gp(t,o)}function lx(t,n){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),Gp(t,o)}var Qp;Qp=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||Pt.current)Tt=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return Tt=!1,G1(t,n,o);Tt=(t.flags&131072)!==0}else Tt=!1,Me&&(n.flags&1048576)!==0&&Pf(n,gs,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ts(t,n),t=n.pendingProps;var u=Wr(n,vt.current);Gr(n,o),u=oc(null,n,l,t,u,o);var p=ic();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Et(l)?(p=!0,ps(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Yl(n),u.updater=Ps,n.stateNode=u,u._reactInternals=n,dc(n,l,t,o),n=hc(null,n,l,!0,p,o)):(n.tag=0,Me&&p&&Fl(n),$t(null,n,u,o),n=n.child),n;case 16:l=n.elementType;e:{switch(Ts(t,n),t=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=ux(l),t=on(l,t),u){case 0:n=mc(null,n,l,t,o);break e;case 1:n=kp(null,n,l,t,o);break e;case 11:n=xp(null,n,l,t,o);break e;case 14:n=yp(null,n,l,on(l.type,t),o);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:on(l,u),mc(t,n,l,u,o);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:on(l,u),kp(t,n,l,u,o);case 3:e:{if(Sp(n),t===null)throw Error(i(387));l=n.pendingProps,p=n.memoizedState,u=p.element,Mf(t,n),ks(n,l,null,o);var g=n.memoizedState;if(l=g.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=Yr(Error(i(423)),n),n=jp(t,n,l,o,u);break e}else if(l!==u){u=Yr(Error(i(424)),n),n=jp(t,n,l,o,u);break e}else for(Dt=Wn(n.stateNode.containerInfo.firstChild),Mt=n,Me=!0,rn=null,o=Nf(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hr(),l===u){n=Tn(t,n,o);break e}$t(t,n,l,o)}n=n.child}return n;case 5:return Ff(n),t===null&&Zl(n),l=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,g=u.children,Ol(l,u)?g=null:p!==null&&Ol(l,p)&&(n.flags|=32),bp(t,n),$t(t,n,g,o),n.child;case 6:return t===null&&Zl(n),null;case 13:return $p(t,n,o);case 4:return Kl(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Vr(n,null,l,o):$t(t,n,l,o),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:on(l,u),xp(t,n,l,u,o);case 7:return $t(t,n,n.pendingProps,o),n.child;case 8:return $t(t,n,n.pendingProps.children,o),n.child;case 12:return $t(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,p=n.memoizedProps,g=u.value,Ie(vs,l._currentValue),l._currentValue=g,p!==null)if(nn(p.value,g)){if(p.children===u.children&&!Pt.current){n=Tn(t,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var k=w.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=En(-1,o&-o),k.tag=2;var T=p.updateQueue;if(T!==null){T=T.shared;var B=T.pending;B===null?k.next=k:(k.next=B.next,B.next=k),T.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Gl(p.return,o,n),w.lanes|=o;break}k=k.next}}else if(p.tag===10)g=p.type===n.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(i(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Gl(g,o,n),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===n){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}$t(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Gr(n,o),u=Wt(u),l=l(u),n.flags|=1,$t(t,n,l,o),n.child;case 14:return l=n.type,u=on(l,n.pendingProps),u=on(l.type,u),yp(t,n,l,u,o);case 15:return vp(t,n,n.type,n.pendingProps,o);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:on(l,u),Ts(t,n),n.tag=1,Et(l)?(t=!0,ps(n)):t=!1,Gr(n,o),up(n,l,u),dc(n,l,u,o),hc(null,n,l,!0,t,o);case 19:return Cp(t,n,o);case 22:return wp(t,n,o)}throw Error(i(156,n.tag))};function Yp(t,n){return Pd(t,n)}function cx(t,n,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,n,o,l){return new cx(t,n,o,l)}function Oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ux(t){if(typeof t=="function")return Oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ee)return 11;if(t===$e)return 14}return 2}function er(t,n){var o=t.alternate;return o===null?(o=Ht(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Us(t,n,o,l,u,p){var g=2;if(l=t,typeof t=="function")Oc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case W:return br(o.children,u,p,n);case X:g=8,u|=8;break;case te:return t=Ht(12,o,n,u|2),t.elementType=te,t.lanes=p,t;case xe:return t=Ht(13,o,n,u),t.elementType=xe,t.lanes=p,t;case _e:return t=Ht(19,o,n,u),t.elementType=_e,t.lanes=p,t;case Te:return Ws(o,u,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:g=10;break e;case me:g=9;break e;case Ee:g=11;break e;case $e:g=14;break e;case He:g=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=Ht(g,o,n,u),n.elementType=t,n.type=l,n.lanes=p,n}function br(t,n,o,l){return t=Ht(7,t,l,n),t.lanes=o,t}function Ws(t,n,o,l){return t=Ht(22,t,l,n),t.elementType=Te,t.lanes=o,t.stateNode={isHidden:!1},t}function Nc(t,n,o){return t=Ht(6,t,null,n),t.lanes=o,t}function Lc(t,n,o){return n=Ht(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function dx(t,n,o,l,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Mc(t,n,o,l,u,p,g,w,k){return t=new dx(t,n,o,w,k),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Ht(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(p),t}function fx(t,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:n,implementation:o}}function Kp(t){if(!t)return qn;t=t._reactInternals;e:{if(cr(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Et(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(Et(o))return zf(t,o,n)}return n}function Xp(t,n,o,l,u,p,g,w,k){return t=Mc(o,l,!0,t,u,p,g,w,k),t.context=Kp(null),o=t.current,l=zt(),u=Kn(o),p=En(l,u),p.callback=n??null,Jn(o,p,u),t.current.lanes=u,Io(t,u,l),Rt(t,l),t}function Zs(t,n,o,l){var u=n.current,p=zt(),g=Kn(u);return o=Kp(o),n.context===null?n.context=o:n.pendingContext=o,n=En(p,g),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Jn(u,n,g),t!==null&&(ln(t,u,g,p),bs(t,u,g)),g}function qs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function em(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function Dc(t,n){em(t,n),(t=t.alternate)&&em(t,n)}function px(){return null}var tm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bc(t){this._internalRoot=t}Hs.prototype.render=Bc.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));Zs(t,n,null,null)},Hs.prototype.unmount=Bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yr(function(){Zs(null,t,null,null)}),n[$n]=null}};function Hs(t){this._internalRoot=t}Hs.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ld();t={blockedOn:null,target:t,priority:n};for(var o=0;o<Bn.length&&n!==0&&n<Bn[o].priority;o++);Bn.splice(o,0,t),o===0&&Bd(t)}};function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nm(){}function mx(t,n,o,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var T=qs(g);p.call(T)}}var g=Xp(n,l,t,0,null,!1,!1,"",nm);return t._reactRootContainer=g,t[$n]=g.current,Ho(t.nodeType===8?t.parentNode:t),yr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var w=l;l=function(){var T=qs(k);w.call(T)}}var k=Mc(t,0,!1,null,null,!1,!1,"",nm);return t._reactRootContainer=k,t[$n]=k.current,Ho(t.nodeType===8?t.parentNode:t),yr(function(){Zs(n,k,o,l)}),k}function Js(t,n,o,l,u){var p=o._reactRootContainer;if(p){var g=p;if(typeof u=="function"){var w=u;u=function(){var k=qs(g);w.call(k)}}Zs(n,g,t,u)}else g=mx(o,n,t,u,l);return qs(g)}Od=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=To(n.pendingLanes);o!==0&&(dl(n,o|1),Rt(n,Ve()),(ke&6)===0&&(eo=Ve()+500,Hn()))}break;case 13:yr(function(){var l=Pn(t,1);if(l!==null){var u=zt();ln(l,t,1,u)}}),Dc(t,1)}},fl=function(t){if(t.tag===13){var n=Pn(t,134217728);if(n!==null){var o=zt();ln(n,t,134217728,o)}Dc(t,134217728)}},Nd=function(t){if(t.tag===13){var n=Kn(t),o=Pn(t,n);if(o!==null){var l=zt();ln(o,t,n,l)}Dc(t,n)}},Ld=function(){return Ce},Md=function(t,n){var o=Ce;try{return Ce=t,n()}finally{Ce=o}},ol=function(t,n,o){switch(n){case"input":if(Qa(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==t&&l.form===t.form){var u=ds(l);if(!u)throw Error(i(90));ld(l),Qa(l,u)}}}break;case"textarea":pd(t,o);break;case"select":n=o.value,n!=null&&Tr(t,!!o.multiple,n,!1)}},kd=Ic,Sd=yr;var hx={usingClientEntryPoint:!1,Events:[Go,Fr,ds,wd,bd,Ic]},ci={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gx={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cd(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{Hi=Gs.inject(gx),gn=Gs}catch{}}return At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hx,At.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(n))throw Error(i(200));return fx(t,n,null,o)},At.createRoot=function(t,n){if(!Fc(t))throw Error(i(299));var o=!1,l="",u=tm;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Mc(t,1,!1,null,null,o,!1,l,u),t[$n]=n.current,Ho(t.nodeType===8?t.parentNode:t),new Bc(n)},At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Cd(n),t=t===null?null:t.stateNode,t},At.flushSync=function(t){return yr(t)},At.hydrate=function(t,n,o){if(!Vs(n))throw Error(i(200));return Js(null,t,n,!0,o)},At.hydrateRoot=function(t,n,o){if(!Fc(t))throw Error(i(405));var l=o!=null&&o.hydratedSources||null,u=!1,p="",g=tm;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=Xp(n,null,t,1,o??null,u,!1,p,g),t[$n]=n.current,Ho(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Hs(n)},At.render=function(t,n,o){if(!Vs(n))throw Error(i(200));return Js(null,t,n,!1,o)},At.unmountComponentAtNode=function(t){if(!Vs(t))throw Error(i(40));return t._reactRootContainer?(yr(function(){Js(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1},At.unstable_batchedUpdates=Ic,At.unstable_renderSubtreeIntoContainer=function(t,n,o,l){if(!Vs(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Js(t,n,o,!1,l)},At.version="18.3.1-next-f1338f8080-20240426",At}var um;function $x(){if(um)return Zc.exports;um=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Zc.exports=jx(),Zc.exports}var dm;function zx(){if(dm)return Qs;dm=1;var e=$x();return Qs.createRoot=e.createRoot,Qs.hydrateRoot=e.hydrateRoot,Qs}var Cx=zx();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Iu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ih=/^[\\/]{2}/;function _x(e,r){return r+e.replace(/\\/g,"/")}var fm="popstate";function pm(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Px(e={}){function r(a,c){var y;let d=(y=c.state)==null?void 0:y.masked,{pathname:f,search:h,hash:x}=d||a.location;return xu("",{pathname:f,search:h,hash:x},c.state&&c.state.usr||null,c.state&&c.state.key||"default",d?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function i(a,c){return typeof c=="string"?c:ji(c)}return Tx(r,i,null,e)}function Ue(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Sn(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ex(){return Math.random().toString(36).substring(2,10)}function mm(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function xu(e,r,i=null,a,c){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?wo(r):r,state:i,key:r&&r.key||a||Ex(),mask:c}}function ji({pathname:e="/",search:r="",hash:i=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function wo(e){let r={};if(e){let i=e.indexOf("#");i>=0&&(r.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(r.search=e.substring(a),e=e.substring(0,a)),e&&(r.pathname=e)}return r}function Tx(e,r,i,a={}){let{window:c=document.defaultView,v5Compat:d=!1}=a,f=c.history,h="POP",x=null,y=v();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function v(){return(f.state||{idx:null}).idx}function b(){h="POP";let A=v(),N=A==null?null:A-y;y=A,x&&x({action:h,location:$.location,delta:N})}function S(A,N){h="PUSH";let R=pm(A)?A:xu($.location,A,N);y=v()+1;let V=mm(R,y),J=$.createHref(R.mask||R);try{f.pushState(V,"",J)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;c.location.assign(J)}d&&x&&x({action:h,location:$.location,delta:1})}function E(A,N){h="REPLACE";let R=pm(A)?A:xu($.location,A,N);y=v();let V=mm(R,y),J=$.createHref(R.mask||R);f.replaceState(V,"",J),d&&x&&x({action:h,location:$.location,delta:0})}function O(A){return Ix(c,A)}let $={get action(){return h},get location(){return e(c,f)},listen(A){if(x)throw new Error("A history only accepts one active listener");return c.addEventListener(fm,b),x=A,()=>{c.removeEventListener(fm,b),x=null}},createHref(A){return r(c,A)},createURL:O,encodeLocation(A){let N=O(A);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:S,replace:E,go(A){return f.go(A)}};return $}function Ix(e,r,i=!1){let a="http://localhost";e&&(a=e.location.origin!=="null"?e.location.origin:e.location.href),Ue(a,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:ji(r);return c=c.replace(/ $/,"%20"),!i&&Ih.test(c)&&(c=a+c),new URL(c,a)}function Rh(e,r,i="/"){return Rx(e,r,i,!1)}function Rx(e,r,i,a,c){let d=typeof r=="string"?wo(r):r,f=An(d.pathname||"/",i);if(f==null)return null;let h=Ax(e),x=null,y=qx(f);for(let v=0;x==null&&v<h.length;++v)x=Zx(h[v],y,a);return x}function Ax(e){let r=Ah(e);return Ox(r),r}function Ah(e,r=[],i=[],a="",c=!1){let d=(f,h,x=c,y)=>{let v={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&x)return;Ue(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let b=fn([a,v.relativePath]),S=i.concat(v);f.children&&f.children.length>0&&(Ue(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Ah(f.children,r,S,b,x)),!(f.path==null&&!f.index)&&r.push({path:b,score:Ux(b,f.index),routesMeta:S.map((E,O)=>{let[$,A]=Lh(E.relativePath,E.caseSensitive,O===S.length-1);return{...E,matcher:$,compiledParams:A}})})};return e.forEach((f,h)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,h);else for(let y of Oh(f.path))d(f,h,!0,y)}),r}function Oh(e){let r=e.split("/");if(r.length===0)return[];let[i,...a]=r,c=i.endsWith("?"),d=i.replace(/\?$/,"");if(a.length===0)return c?[d,""]:[d];let f=Oh(a.join("/")),h=[];return h.push(...f.map(x=>x===""?d:[d,x].join("/"))),c&&h.push(...f),h.map(x=>e.startsWith("/")&&x===""?"/":x)}function Ox(e){e.sort((r,i)=>r.score!==i.score?i.score-r.score:Wx(r.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Nx=/^:[\w-]+$/,Lx=3,Mx=2,Dx=1,Bx=10,Fx=-2,hm=e=>e==="*";function Ux(e,r){let i=e.split("/"),a=i.length;return i.some(hm)&&(a+=Fx),r&&(a+=Mx),i.filter(c=>!hm(c)).reduce((c,d)=>c+(Nx.test(d)?Lx:d===""?Dx:Bx),a)}function Wx(e,r){return e.length===r.length&&e.slice(0,-1).every((a,c)=>a===r[c])?e[e.length-1]-r[r.length-1]:0}function Zx(e,r,i=!1){let{routesMeta:a}=e,c={},d="/",f=[];for(let h=0;h<a.length;++h){let x=a[h],y=h===a.length-1,v=d==="/"?r:r.slice(d.length)||"/",b={path:x.relativePath,caseSensitive:x.caseSensitive,end:y},S=x.matcher&&x.compiledParams?Nh(b,v,x.matcher,x.compiledParams):ba(b,v),E=x.route;if(!S&&y&&i&&!a[a.length-1].route.index&&(S=ba({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},v)),!S)return null;Object.assign(c,S.params),f.push({params:c,pathname:fn([d,S.pathname]),pathnameBase:Jx(fn([d,S.pathnameBase])),route:E}),S.pathnameBase!=="/"&&(d=fn([d,S.pathnameBase]))}return f}function ba(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=Lh(e.path,e.caseSensitive,e.end);return Nh(e,r,i,a)}function Nh(e,r,i,a){let c=r.match(i);if(!c)return null;let d=c[0],f=d.replace(/(.)\/+$/,"$1"),h=c.slice(1);return{params:a.reduce((y,{paramName:v,isOptional:b},S)=>{if(v==="*"){let O=h[S]||"";f=d.slice(0,d.length-O.length).replace(/(.)\/+$/,"$1")}const E=h[S];return b&&!E?y[v]=void 0:y[v]=(E||"").replace(/%2F/g,"/"),y},{}),pathname:d,pathnameBase:f,pattern:e}}function Lh(e,r=!1,i=!0){Sn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,x,y,v)=>{if(a.push({paramName:h,isOptional:x!=null}),x){let b=v.charAt(y+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),a]}function qx(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Sn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function An(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function Hx(e,r="/"){let{pathname:i,search:a="",hash:c=""}=typeof e=="string"?wo(e):e,d;return i?(i=Dh(i),i.startsWith("/")?d=gm(i.substring(1),"/"):d=gm(i,r)):d=r,{pathname:d,search:Gx(a),hash:Qx(c)}}function gm(e,r){let i=ka(r).split("/");return e.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Vc(e,r,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vx(e){return e.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Mh(e){let r=Vx(e);return r.map((i,a)=>a===r.length-1?i.pathname:i.pathnameBase)}function Ru(e,r,i,a=!1){let c;typeof e=="string"?c=wo(e):(c={...e},Ue(!c.pathname||!c.pathname.includes("?"),Vc("?","pathname","search",c)),Ue(!c.pathname||!c.pathname.includes("#"),Vc("#","pathname","hash",c)),Ue(!c.search||!c.search.includes("#"),Vc("#","search","hash",c)));let d=e===""||c.pathname==="",f=d?"/":c.pathname,h;if(f==null)h=i;else{let b=r.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;c.pathname=S.join("/")}h=b>=0?r[b]:"/"}let x=Hx(c,h),y=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&i.endsWith("/");return!x.pathname.endsWith("/")&&(y||v)&&(x.pathname+="/"),x}var Dh=e=>e.replace(/[\\/]{2,}/g,"/"),fn=e=>Dh(e.join("/")),ka=e=>e.replace(/\/+$/,""),Jx=e=>ka(e).replace(/^\/*/,"/"),Gx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Yx=class{constructor(e,r,i,a=!1){this.status=e,this.statusText=r||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Kx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Xx(e){let r=e.map(i=>i.route.path).filter(Boolean);return fn(r)||"/"}var Bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Fh(e,r){let i=e;if(typeof i!="string"||!Iu.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,c=!1;if(Bh)try{let d=new URL(window.location.href),f=Ih.test(i)?new URL(_x(i,d.protocol)):new URL(i),h=An(f.pathname,r);f.origin===d.origin&&h!=null?i=h+f.search+f.hash:c=!0}catch{Sn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:c,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uh=["POST","PUT","PATCH","DELETE"];new Set(Uh);var ey=["GET",...Uh];new Set(ey);var ty=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ny(e){try{return ty.includes(new URL(e).protocol)}catch{return!1}}var bo=_.createContext(null);bo.displayName="DataRouter";var Ia=_.createContext(null);Ia.displayName="DataRouterState";var Wh=_.createContext(!1);function ry(){return _.useContext(Wh)}var Zh=_.createContext({isTransitioning:!1});Zh.displayName="ViewTransition";var oy=_.createContext(new Map);oy.displayName="Fetchers";var iy=_.createContext(null);iy.displayName="Await";var Xt=_.createContext(null);Xt.displayName="Navigation";var Ti=_.createContext(null);Ti.displayName="Location";var Nn=_.createContext({outlet:null,matches:[],isDataRoute:!1});Nn.displayName="Route";var Au=_.createContext(null);Au.displayName="RouteError";var qh="REACT_ROUTER_ERROR",sy="REDIRECT",ay="ROUTE_ERROR_RESPONSE";function ly(e){if(e.startsWith(`${qh}:${sy}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function cy(e){if(e.startsWith(`${qh}:${ay}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Yx(r.status,r.statusText,r.data)}catch{}}function uy(e,{relative:r}={}){Ue(Ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=_.useContext(Xt),{hash:c,pathname:d,search:f}=Ri(e,{relative:r}),h=d;return i!=="/"&&(h=d==="/"?i:fn([i,d])),a.createHref({pathname:h,search:f,hash:c})}function Ii(){return _.useContext(Ti)!=null}function mn(){return Ue(Ii(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Ti).location}var Hh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vh(e){_.useContext(Xt).static||_.useLayoutEffect(e)}function dy(){let{isDataRoute:e}=_.useContext(Nn);return e?jy():fy()}function fy(){Ue(Ii(),"useNavigate() may be used only in the context of a <Router> component.");let e=_.useContext(bo),{basename:r,navigator:i}=_.useContext(Xt),{matches:a}=_.useContext(Nn),{pathname:c}=mn(),d=JSON.stringify(Mh(a)),f=_.useRef(!1);return Vh(()=>{f.current=!0}),_.useCallback((x,y={})=>{if(Sn(f.current,Hh),!f.current)return;if(typeof x=="number"){i.go(x);return}let v=Ru(x,JSON.parse(d),c,y.relative==="path");e==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:fn([r,v.pathname])),(y.replace?i.replace:i.push)(v,y.state,y)},[r,i,d,c,e])}_.createContext(null);function Ri(e,{relative:r}={}){let{matches:i}=_.useContext(Nn),{pathname:a}=mn(),c=JSON.stringify(Mh(i));return _.useMemo(()=>Ru(e,JSON.parse(c),a,r==="path"),[e,c,a,r])}function py(e,r){return Jh(e,r)}function Jh(e,r,i){var A;Ue(Ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=_.useContext(Xt),{matches:c}=_.useContext(Nn),d=c[c.length-1],f=d?d.params:{},h=d?d.pathname:"/",x=d?d.pathnameBase:"/",y=d&&d.route;{let N=y&&y.path||"";Qh(h,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let v=mn(),b;if(r){let N=typeof r=="string"?wo(r):r;Ue(x==="/"||((A=N.pathname)==null?void 0:A.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${N.pathname}" was given in the \`location\` prop.`),b=N}else b=v;let S=b.pathname||"/",E=S;if(x!=="/"){let N=x.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let O=i&&i.state.matches.length?i.state.matches.map(N=>Object.assign(N,{route:i.manifest[N.route.id]||N.route})):Rh(e,{pathname:E});Sn(y||O!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Sn(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=yy(O&&O.map(N=>Object.assign({},N,{params:Object.assign({},f,N.params),pathname:fn([x,a.encodeLocation?a.encodeLocation(N.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?x:fn([x,a.encodeLocation?a.encodeLocation(N.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),c,i);return r&&$?_.createElement(Ti.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},$):$}function my(){let e=Sy(),r=Kx(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:a},d={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:d},"ErrorBoundary")," or"," ",_.createElement("code",{style:d},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},r),i?_.createElement("pre",{style:c},i):null,f)}var hy=_.createElement(my,null),Gh=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=cy(e.digest);i&&(e=i)}let r=e!==void 0?_.createElement(Nn.Provider,{value:this.props.routeContext},_.createElement(Au.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?_.createElement(gy,{error:e},r):r}};Gh.contextType=Wh;var Jc=new WeakMap;function gy({children:e,error:r}){let{basename:i}=_.useContext(Xt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let a=ly(r.digest);if(a){let c=Jc.get(r);if(c)throw c;let d=Fh(a.location,i),f=d.absoluteURL||d.to;if(ny(f))throw new Error("Invalid redirect location");if(Bh&&!Jc.get(r))if(d.isExternal||a.reloadDocument)window.location.href=f;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:a.replace}));throw Jc.set(r,h),h}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return e}function xy({routeContext:e,match:r,children:i}){let a=_.useContext(bo);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),_.createElement(Nn.Provider,{value:e},i)}function yy(e,r=[],i){let a=i==null?void 0:i.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(r.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let c=e,d=a==null?void 0:a.errors;if(d!=null){let v=c.findIndex(b=>b.route.id&&(d==null?void 0:d[b.route.id])!==void 0);Ue(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let f=!1,h=-1;if(i&&a){f=a.renderFallback;for(let v=0;v<c.length;v++){let b=c[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(h=v),b.route.id){let{loaderData:S,errors:E}=a,O=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||O){i.isStatic&&(f=!0),h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}}let x=i==null?void 0:i.onError,y=a&&x?(v,b)=>{var S,E;x(v,{location:a.location,params:((E=(S=a.matches)==null?void 0:S[0])==null?void 0:E.params)??{},pattern:Xx(a.matches),errorInfo:b})}:void 0;return c.reduceRight((v,b,S)=>{let E,O=!1,$=null,A=null;a&&(E=d&&b.route.id?d[b.route.id]:void 0,$=b.route.errorElement||hy,f&&(h<0&&S===0?(Qh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,A=null):h===S&&(O=!0,A=b.route.hydrateFallbackElement||null)));let N=r.concat(c.slice(0,S+1)),R=()=>{let V;return E?V=$:O?V=A:b.route.Component?V=_.createElement(b.route.Component,null):b.route.element?V=b.route.element:V=v,_.createElement(xy,{match:b,routeContext:{outlet:v,matches:N,isDataRoute:a!=null},children:V})};return a&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?_.createElement(Gh,{location:a.location,revalidation:a.revalidation,component:$,error:E,children:R(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:y}):R()},null)}function Ou(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vy(e){let r=_.useContext(bo);return Ue(r,Ou(e)),r}function wy(e){let r=_.useContext(Ia);return Ue(r,Ou(e)),r}function by(e){let r=_.useContext(Nn);return Ue(r,Ou(e)),r}function Nu(e){let r=by(e),i=r.matches[r.matches.length-1];return Ue(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function ky(){return Nu("useRouteId")}function Sy(){var a;let e=_.useContext(Au),r=wy("useRouteError"),i=Nu("useRouteError");return e!==void 0?e:(a=r.errors)==null?void 0:a[i]}function jy(){let{router:e}=vy("useNavigate"),r=Nu("useNavigate"),i=_.useRef(!1);return Vh(()=>{i.current=!0}),_.useCallback(async(c,d={})=>{Sn(i.current,Hh),i.current&&(typeof c=="number"?await e.navigate(c):await e.navigate(c,{fromRouteId:r,...d}))},[e,r])}var xm={};function Qh(e,r,i){!r&&!xm[e]&&(xm[e]=!0,Sn(!1,i))}_.memo($y);function $y({routes:e,manifest:r,future:i,state:a,isStatic:c,onError:d}){return Jh(e,void 0,{manifest:r,state:a,isStatic:c,onError:d})}function Sr(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zy({basename:e="/",children:r=null,location:i,navigationType:a="POP",navigator:c,static:d=!1,useTransitions:f}){Ue(!Ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),x=_.useMemo(()=>({basename:h,navigator:c,static:d,useTransitions:f,future:{}}),[h,c,d,f]);typeof i=="string"&&(i=wo(i));let{pathname:y="/",search:v="",hash:b="",state:S=null,key:E="default",mask:O}=i,$=_.useMemo(()=>{let A=An(y,h);return A==null?null:{location:{pathname:A,search:v,hash:b,state:S,key:E,mask:O},navigationType:a}},[h,y,v,b,S,E,a,O]);return Sn($!=null,`<Router basename="${h}"> is not able to match the URL "${y}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:_.createElement(Xt.Provider,{value:x},_.createElement(Ti.Provider,{children:r,value:$}))}function Cy({children:e,location:r}){return py(yu(e),r)}function yu(e,r=[]){let i=[];return _.Children.forEach(e,(a,c)=>{if(!_.isValidElement(a))return;let d=[...r,c];if(a.type===_.Fragment){i.push.apply(i,yu(a.props.children,d));return}Ue(a.type===Sr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||d.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=yu(a.props.children,d)),i.push(f)}),i}var da="get",fa="application/x-www-form-urlencoded";function Ra(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function _y(e){return Ra(e)&&e.tagName.toLowerCase()==="button"}function Py(e){return Ra(e)&&e.tagName.toLowerCase()==="form"}function Ey(e){return Ra(e)&&e.tagName.toLowerCase()==="input"}function Ty(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Iy(e,r){return e.button===0&&(!r||r==="_self")&&!Ty(e)}var Ys=null;function Ry(){if(Ys===null)try{new FormData(document.createElement("form"),0),Ys=!1}catch{Ys=!0}return Ys}var Ay=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gc(e){return e!=null&&!Ay.has(e)?(Sn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fa}"`),null):e}function Oy(e,r){let i,a,c,d,f;if(Py(e)){let h=e.getAttribute("action");a=h?An(h,r):null,i=e.getAttribute("method")||da,c=Gc(e.getAttribute("enctype"))||fa,d=new FormData(e)}else if(_y(e)||Ey(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=e.getAttribute("formaction")||h.getAttribute("action");if(a=x?An(x,r):null,i=e.getAttribute("formmethod")||h.getAttribute("method")||da,c=Gc(e.getAttribute("formenctype"))||Gc(h.getAttribute("enctype"))||fa,d=new FormData(h,e),!Ry()){let{name:y,type:v,value:b}=e;if(v==="image"){let S=y?`${y}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else y&&d.append(y,b)}}else{if(Ra(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=da,a=null,c=fa,f=e}return d&&c==="text/plain"&&(f=d,d=void 0),{action:a,method:i.toLowerCase(),encType:c,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lu(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Yh(e,r,i,a){let c=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${a}`:c.pathname=`${c.pathname}.${a}`:c.pathname==="/"?c.pathname=`_root.${a}`:r&&An(c.pathname,r)==="/"?c.pathname=`${ka(r)}/_root.${a}`:c.pathname=`${ka(c.pathname)}.${a}`,c}async function Ny(e,r){if(e.id in r)return r[e.id];try{let i=await import(e.module);return r[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ly(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function My(e,r,i){let a=await Promise.all(e.map(async c=>{let d=r.routes[c.route.id];if(d){let f=await Ny(d,i);return f.links?f.links():[]}return[]}));return Uy(a.flat(1).filter(Ly).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function ym(e,r,i,a,c,d){let f=(x,y)=>i[y]?x.route.id!==i[y].route.id:!0,h=(x,y)=>{var v;return i[y].pathname!==x.pathname||((v=i[y].route.path)==null?void 0:v.endsWith("*"))&&i[y].params["*"]!==x.params["*"]};return d==="assets"?r.filter((x,y)=>f(x,y)||h(x,y)):d==="data"?r.filter((x,y)=>{var b;let v=a.routes[x.route.id];if(!v||!v.hasLoader)return!1;if(f(x,y)||h(x,y))return!0;if(x.route.shouldRevalidate){let S=x.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Dy(e,r,{includeHydrateFallback:i}={}){return By(e.map(a=>{let c=r.routes[a.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function By(e){return[...new Set(e)]}function Fy(e){let r={},i=Object.keys(e).sort();for(let a of i)r[a]=e[a];return r}function Uy(e,r){let i=new Set;return new Set(r),e.reduce((a,c)=>{let d=JSON.stringify(Fy(c));return i.has(d)||(i.add(d),a.push({key:d,link:c})),a},[])}function Mu(){let e=_.useContext(bo);return Lu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Wy(){let e=_.useContext(Ia);return Lu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Du=_.createContext(void 0);Du.displayName="FrameworkContext";function Aa(){let e=_.useContext(Du);return Lu(e,"You must render this element inside a <HydratedRouter> element"),e}function Zy(e,r){let i=_.useContext(Du),[a,c]=_.useState(!1),[d,f]=_.useState(!1),{onFocus:h,onBlur:x,onMouseEnter:y,onMouseLeave:v,onTouchStart:b}=r,S=_.useRef(null);_.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let $=N=>{N.forEach(R=>{f(R.isIntersecting)})},A=new IntersectionObserver($,{threshold:.5});return S.current&&A.observe(S.current),()=>{A.disconnect()}}},[e]),_.useEffect(()=>{if(a){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[a]);let E=()=>{c(!0)},O=()=>{c(!1),f(!1)};return i?e!=="intent"?[d,S,{}]:[d,S,{onFocus:di(h,E),onBlur:di(x,O),onMouseEnter:di(y,E),onMouseLeave:di(v,O),onTouchStart:di(b,E)}]:[!1,S,{}]}function di(e,r){return i=>{e&&e(i),i.defaultPrevented||r(i)}}function qy({page:e,...r}){let i=ry(),{nonce:a}=Aa(),{router:c}=Mu(),d=_.useMemo(()=>Rh(c.routes,e,c.basename),[c.routes,e,c.basename]);return d?(r.nonce==null&&a&&(r={...r,nonce:a}),i?_.createElement(Vy,{page:e,matches:d,...r}):_.createElement(Jy,{page:e,matches:d,...r})):null}function Hy(e){let{manifest:r,routeModules:i}=Aa(),[a,c]=_.useState([]);return _.useEffect(()=>{let d=!1;return My(e,r,i).then(f=>{d||c(f)}),()=>{d=!0}},[e,r,i]),a}function Vy({page:e,matches:r,...i}){let a=mn(),{future:c}=Aa(),{basename:d}=Mu(),f=_.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let h=Yh(e,d,c.v8_trailingSlashAwareDataRequests,"rsc"),x=!1,y=[];for(let v of r)typeof v.route.shouldRevalidate=="function"?x=!0:y.push(v.route.id);return x&&y.length>0&&h.searchParams.set("_routes",y.join(",")),[h.pathname+h.search]},[d,c.v8_trailingSlashAwareDataRequests,e,a,r]);return _.createElement(_.Fragment,null,f.map(h=>_.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function Jy({page:e,matches:r,...i}){let a=mn(),{future:c,manifest:d,routeModules:f}=Aa(),{basename:h}=Mu(),{loaderData:x,matches:y}=Wy(),v=_.useMemo(()=>ym(e,r,y,d,a,"data"),[e,r,y,d,a]),b=_.useMemo(()=>ym(e,r,y,d,a,"assets"),[e,r,y,d,a]),S=_.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let $=new Set,A=!1;if(r.forEach(R=>{var J;let V=d.routes[R.route.id];!V||!V.hasLoader||(!v.some(Q=>Q.route.id===R.route.id)&&R.route.id in x&&((J=f[R.route.id])!=null&&J.shouldRevalidate)||V.hasClientLoader?A=!0:$.add(R.route.id))}),$.size===0)return[];let N=Yh(e,h,c.v8_trailingSlashAwareDataRequests,"data");return A&&$.size>0&&N.searchParams.set("_routes",r.filter(R=>$.has(R.route.id)).map(R=>R.route.id).join(",")),[N.pathname+N.search]},[h,c.v8_trailingSlashAwareDataRequests,x,a,d,v,r,e,f]),E=_.useMemo(()=>Dy(b,d),[b,d]),O=Hy(b);return _.createElement(_.Fragment,null,S.map($=>_.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...i})),E.map($=>_.createElement("link",{key:$,rel:"modulepreload",href:$,...i})),O.map(({key:$,link:A})=>_.createElement("link",{key:$,nonce:i.nonce,...A,crossOrigin:A.crossOrigin??i.crossOrigin})))}function Gy(...e){return r=>{e.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Qy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qy&&(window.__reactRouterVersion="7.18.1")}catch{}function Yy({basename:e,children:r,useTransitions:i,window:a}){let c=_.useRef();c.current==null&&(c.current=Px({window:a,v5Compat:!0}));let d=c.current,[f,h]=_.useState({action:d.action,location:d.location}),x=_.useCallback(y=>{i===!1?h(y):_.startTransition(()=>h(y))},[i]);return _.useLayoutEffect(()=>d.listen(x),[d,x]),_.createElement(zy,{basename:e,children:r,location:f.location,navigationType:f.action,navigator:d,useTransitions:i})}var sr=_.forwardRef(function({onClick:r,discover:i="render",prefetch:a="none",relative:c,reloadDocument:d,replace:f,mask:h,state:x,target:y,to:v,preventScrollReset:b,viewTransition:S,defaultShouldRevalidate:E,...O},$){let{basename:A,navigator:N,useTransitions:R}=_.useContext(Xt),V=typeof v=="string"&&Iu.test(v),J=Fh(v,A);v=J.to;let Q=uy(v,{relative:c}),H=mn(),W=null;if(h){let $e=Ru(h,[],H.mask?H.mask.pathname:"/",!0);A!=="/"&&($e.pathname=$e.pathname==="/"?A:fn([A,$e.pathname])),W=N.createHref($e)}let[X,te,I]=Zy(a,O),me=ev(v,{replace:f,mask:h,state:x,target:y,preventScrollReset:b,relative:c,viewTransition:S,defaultShouldRevalidate:E,useTransitions:R});function Ee($e){r&&r($e),$e.defaultPrevented||me($e)}let xe=!(J.isExternal||d),_e=_.createElement("a",{...O,...I,href:(xe?W:void 0)||J.absoluteURL||Q,onClick:xe?Ee:r,ref:Gy($,te),target:y,"data-discover":!V&&i==="render"?"true":void 0});return X&&!V?_.createElement(_.Fragment,null,_e,_.createElement(qy,{page:Q})):_e});sr.displayName="Link";var Bu=_.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:a="",end:c=!1,style:d,to:f,viewTransition:h,children:x,...y},v){let b=Ri(f,{relative:y.relative}),S=mn(),E=_.useContext(Ia),{navigator:O,basename:$}=_.useContext(Xt),A=E!=null&&iv(b)&&h===!0,N=O.encodeLocation?O.encodeLocation(b).pathname:b.pathname,R=S.pathname,V=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(R=R.toLowerCase(),V=V?V.toLowerCase():null,N=N.toLowerCase()),V&&$&&(V=An(V,$)||V);const J=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let Q=R===N||!c&&R.startsWith(N)&&R.charAt(J)==="/",H=V!=null&&(V===N||!c&&V.startsWith(N)&&V.charAt(N.length)==="/"),W={isActive:Q,isPending:H,isTransitioning:A},X=Q?r:void 0,te;typeof a=="function"?te=a(W):te=[a,Q?"active":null,H?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let I=typeof d=="function"?d(W):d;return _.createElement(sr,{...y,"aria-current":X,className:te,ref:v,style:I,to:f,viewTransition:h},typeof x=="function"?x(W):x)});Bu.displayName="NavLink";var Ky=_.forwardRef(({discover:e="render",fetcherKey:r,navigate:i,reloadDocument:a,replace:c,state:d,method:f=da,action:h,onSubmit:x,relative:y,preventScrollReset:v,viewTransition:b,defaultShouldRevalidate:S,...E},O)=>{let{useTransitions:$}=_.useContext(Xt),A=rv(),N=ov(h,{relative:y}),R=f.toLowerCase()==="get"?"get":"post",V=typeof h=="string"&&Iu.test(h),J=Q=>{if(x&&x(Q),Q.defaultPrevented)return;Q.preventDefault();let H=Q.nativeEvent.submitter,W=(H==null?void 0:H.getAttribute("formmethod"))||f,X=()=>A(H||Q.currentTarget,{fetcherKey:r,method:W,navigate:i,replace:c,state:d,relative:y,preventScrollReset:v,viewTransition:b,defaultShouldRevalidate:S});$&&i!==!1?_.startTransition(()=>X()):X()};return _.createElement("form",{ref:O,method:R,action:N,onSubmit:a?x:J,...E,"data-discover":!V&&e==="render"?"true":void 0})});Ky.displayName="Form";function Xy(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kh(e){let r=_.useContext(bo);return Ue(r,Xy(e)),r}function ev(e,{target:r,replace:i,mask:a,state:c,preventScrollReset:d,relative:f,viewTransition:h,defaultShouldRevalidate:x,useTransitions:y}={}){let v=dy(),b=mn(),S=Ri(e,{relative:f});return _.useCallback(E=>{if(Iy(E,r)){E.preventDefault();let O=i!==void 0?i:ji(b)===ji(S),$=()=>v(e,{replace:O,mask:a,state:c,preventScrollReset:d,relative:f,viewTransition:h,defaultShouldRevalidate:x});y?_.startTransition(()=>$()):$()}},[b,v,S,i,a,c,r,e,d,f,h,x,y])}var tv=0,nv=()=>`__${String(++tv)}__`;function rv(){let{router:e}=Kh("useSubmit"),{basename:r}=_.useContext(Xt),i=ky(),a=e.fetch,c=e.navigate;return _.useCallback(async(d,f={})=>{let{action:h,method:x,encType:y,formData:v,body:b}=Oy(d,r);if(f.navigate===!1){let S=f.fetcherKey||nv();await a(S,i,f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:b,formMethod:f.method||x,formEncType:f.encType||y,flushSync:f.flushSync})}else await c(f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:b,formMethod:f.method||x,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,c,r,i])}function ov(e,{relative:r}={}){let{basename:i}=_.useContext(Xt),a=_.useContext(Nn);Ue(a,"useFormAction must be used inside a RouteContext");let[c]=a.matches.slice(-1),d={...Ri(e||".",{relative:r})},f=mn();if(e==null){d.search=f.search;let h=new URLSearchParams(d.search),x=h.getAll("index");if(x.some(v=>v==="")){h.delete("index"),x.filter(b=>b).forEach(b=>h.append("index",b));let v=h.toString();d.search=v?`?${v}`:""}}return(!e||e===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:fn([i,d.pathname])),ji(d)}function iv(e,{relative:r}={}){let i=_.useContext(Zh);Ue(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Kh("useViewTransitionState"),c=Ri(e,{relative:r});if(!i.isTransitioning)return!1;let d=An(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=An(i.nextLocation.pathname,a)||i.nextLocation.pathname;return ba(c.pathname,f)!=null||ba(c.pathname,d)!=null}var Le="-ms-",bi="-moz-",je="-webkit-",Xh="comm",Oa="rule",Fu="decl",sv="@import",av="@namespace",eg="@keyframes",lv="@layer",tg=Math.abs,Uu=String.fromCharCode,vu=Object.assign;function cv(e,r){return rt(e,0)^45?(((r<<2^rt(e,0))<<2^rt(e,1))<<2^rt(e,2))<<2^rt(e,3):0}function ng(e){return e.trim()}function Rn(e,r){return(e=r.exec(e))?e[0]:e}function ge(e,r,i){return e.replace(r,i)}function pa(e,r,i){return e.indexOf(r,i)}function rt(e,r){return e.charCodeAt(r)|0}function zr(e,r,i){return e.slice(r,i)}function dn(e){return e.length}function rg(e){return e.length}function xi(e,r){return r.push(e),e}function uv(e,r){return e.map(r).join("")}function vm(e,r){return e.filter(function(i){return!Rn(i,r)})}var Na=1,ho=1,og=0,Kt=0,et=0,ko="";function La(e,r,i,a,c,d,f,h){return{value:e,root:r,parent:i,type:a,props:c,children:d,line:Na,column:ho,length:f,return:"",siblings:h}}function nr(e,r){return vu(La("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function no(e){for(;e.root;)e=nr(e.root,{children:[e]});xi(e,e.siblings)}function dv(){return et}function fv(){return et=Kt>0?rt(ko,--Kt):0,ho--,et===10&&(ho=1,Na--),et}function pn(){return et=Kt<og?rt(ko,Kt++):0,ho++,et===10&&(ho=1,Na++),et}function rr(){return rt(ko,Kt)}function ma(){return Kt}function Ma(e,r){return zr(ko,e,r)}function $i(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pv(e){return Na=ho=1,og=dn(ko=e),Kt=0,[]}function mv(e){return ko="",e}function Qc(e){return ng(Ma(Kt-1,wu(e===91?e+2:e===40?e+1:e)))}function hv(e){for(;(et=rr())&&et<33;)pn();return $i(e)>2||$i(et)>3?"":" "}function gv(e,r){for(;--r&&pn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Ma(e,ma()+(r<6&&rr()==32&&pn()==32))}function wu(e){for(;pn();)switch(et){case e:return Kt;case 34:case 39:e!==34&&e!==39&&wu(et);break;case 40:e===41&&wu(e);break;case 92:pn();break}return Kt}function xv(e,r){for(;pn()&&e+et!==57;)if(e+et===84&&rr()===47)break;return"/*"+Ma(r,Kt-1)+"*"+Uu(e===47?e:pn())}function yv(e){for(;!$i(rr());)pn();return Ma(e,Kt)}function vv(e){return mv(ha("",null,null,null,[""],e=pv(e),0,[0],e))}function ha(e,r,i,a,c,d,f,h,x){for(var y=0,v=0,b=f,S=0,E=0,O=0,$=1,A=1,N=1,R=0,V="",J=c,Q=d,H=a,W=V;A;)switch(O=R,R=pn()){case 40:if(O!=108&&rt(W,b-1)==58){pa(W+=ge(Qc(R),"&","&\f"),"&\f",tg(y?h[y-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:W+=Qc(R);break;case 9:case 10:case 13:case 32:W+=hv(O);break;case 92:W+=gv(ma()-1,7);continue;case 47:switch(rr()){case 42:case 47:xi(wv(xv(pn(),ma()),r,i,x),x),($i(O||1)==5||$i(rr()||1)==5)&&dn(W)&&zr(W,-1,void 0)!==" "&&(W+=" ");break;default:W+="/"}break;case 123*$:h[y++]=dn(W)*N;case 125*$:case 59:case 0:switch(R){case 0:case 125:A=0;case 59+v:N==-1&&(W=ge(W,/\f/g,"")),E>0&&(dn(W)-b||$===0&&O===47)&&xi(E>32?bm(W+";",a,i,b-1,x):bm(ge(W," ","")+";",a,i,b-2,x),x);break;case 59:W+=";";default:if(xi(H=wm(W,r,i,y,v,c,h,V,J=[],Q=[],b,d),d),R===123)if(v===0)ha(W,r,H,H,J,d,b,h,Q);else{switch(S){case 99:if(rt(W,3)===110)break;case 108:if(rt(W,2)===97)break;default:v=0;case 100:case 109:case 115:}v?ha(e,H,H,a&&xi(wm(e,H,H,0,0,c,h,V,c,J=[],b,Q),Q),c,Q,b,h,a?J:Q):ha(W,H,H,H,[""],Q,0,h,Q)}}y=v=E=0,$=N=1,V=W="",b=f;break;case 58:b=1+dn(W),E=O;default:if($<1){if(R==123)--$;else if(R==125&&$++==0&&fv()==125)continue}switch(W+=Uu(R),R*$){case 38:N=v>0?1:(W+="\f",-1);break;case 44:h[y++]=(dn(W)-1)*N,N=1;break;case 64:rr()===45&&(W+=Qc(pn())),S=rr(),v=b=dn(V=W+=yv(ma())),R++;break;case 45:O===45&&dn(W)==2&&($=0)}}return d}function wm(e,r,i,a,c,d,f,h,x,y,v,b){for(var S=c-1,E=c===0?d:[""],O=rg(E),$=0,A=0,N=0;$<a;++$)for(var R=0,V=zr(e,S+1,S=tg(A=f[$])),J=e;R<O;++R)(J=ng(A>0?E[R]+" "+V:ge(V,/&\f/g,E[R])))&&(x[N++]=J);return La(e,r,i,c===0?Oa:h,x,y,v,b)}function wv(e,r,i,a){return La(e,r,i,Xh,Uu(dv()),zr(e,2,-2),0,a)}function bm(e,r,i,a,c){return La(e,r,i,Fu,zr(e,0,a),zr(e,a+1,-1),a,c)}function ig(e,r,i){switch(cv(e,r)){case 5103:return je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return je+e+e;case 4855:return je+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return je+e+bi+e+Le+e+e;case 5936:switch(rt(e,r+11)){case 114:return je+e+Le+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return je+e+Le+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return je+e+Le+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return je+e+Le+e+e;case 6165:return je+e+Le+"flex-"+e+e;case 5187:return je+e+ge(e,/(\w+).+(:[^]+)/,je+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return je+e+Le+"flex-item-"+ge(e,/flex-|-self/g,"")+(Rn(e,/flex-|baseline/)?"":Le+"grid-row-"+ge(e,/flex-|-self/g,""))+e;case 4675:return je+e+Le+"flex-line-pack"+ge(e,/align-content|flex-|-self/g,"")+e;case 5548:return je+e+Le+ge(e,"shrink","negative")+e;case 5292:return je+e+Le+ge(e,"basis","preferred-size")+e;case 6060:return je+"box-"+ge(e,"-grow","")+je+e+Le+ge(e,"grow","positive")+e;case 4554:return je+ge(e,/([^-])(transform)/g,"$1"+je+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Le+"flex-pack:$3"),/space-between/,"justify")+je+e+e;case 4200:if(!Rn(e,/flex-|baseline/))return Le+"grid-column-align"+zr(e,r)+e;break;case 2592:case 3360:return Le+ge(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,c){return r=c,Rn(a.props,/grid-\w+-end/)})?~pa(e+(i=i[r].value),"span",0)?e:Le+ge(e,"-start","")+e+Le+"grid-row-span:"+(~pa(i,"span",0)?Rn(i,/\d+/):+Rn(i,/\d+/)-+Rn(e,/\d+/))+";":Le+ge(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Rn(a.props,/grid-\w+-start/)})?e:Le+ge(ge(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(e)-1-r>6)switch(rt(e,r+1)){case 109:if(rt(e,r+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+bi+(rt(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~pa(e,"stretch",0)?ig(ge(e,"stretch","fill-available"),r,i)+e:e}break;case 5152:case 5920:return ge(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,c,d,f,h,x,y){return Le+c+":"+d+y+(f?Le+c+"-span:"+(h?x:+x-+d)+y:"")+e});case 4949:if(rt(e,r+6)===121)return ge(e,":",":"+je)+e;break;case 6444:switch(rt(e,rt(e,14)===45?18:11)){case 120:return ge(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(rt(e,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Le+"$2box$3")+e;case 100:return ge(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(e,"scroll-","scroll-snap-")+e}return e}function Sa(e,r){for(var i="",a=0;a<e.length;a++)i+=r(e[a],a,e,r)||"";return i}function bv(e,r,i,a){switch(e.type){case lv:if(e.children.length)break;case sv:case av:case Fu:return e.return=e.return||e.value;case Xh:return"";case eg:return e.return=e.value+"{"+Sa(e.children,a)+"}";case Oa:if(!dn(e.value=e.props.join(",")))return""}return dn(i=Sa(e.children,a))?e.return=e.value+"{"+i+"}":""}function kv(e){var r=rg(e);return function(i,a,c,d){for(var f="",h=0;h<r;h++)f+=e[h](i,a,c,d)||"";return f}}function Sv(e){return function(r){r.root||(r=r.return)&&e(r)}}function jv(e,r,i,a){if(e.length>-1&&!e.return)switch(e.type){case Fu:e.return=ig(e.value,e.length,i);return;case eg:return Sa([nr(e,{value:ge(e.value,"@","@"+je)})],a);case Oa:if(e.length)return uv(i=e.props,function(c){switch(Rn(c,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":no(nr(e,{props:[ge(c,/:(read-\w+)/,":"+bi+"$1")]})),no(nr(e,{props:[c]})),vu(e,{props:vm(i,a)});break;case"::placeholder":no(nr(e,{props:[ge(c,/:(plac\w+)/,":"+je+"input-$1")]})),no(nr(e,{props:[ge(c,/:(plac\w+)/,":"+bi+"$1")]})),no(nr(e,{props:[ge(c,/:(plac\w+)/,Le+"input-$1")]})),no(nr(e,{props:[c]})),vu(e,{props:vm(i,a)});break}return""})}}var fo={},Yc,Kc;const go=typeof process<"u"&&fo!==void 0&&(fo.REACT_APP_SC_ATTR||fo.SC_ATTR)||"data-styled",sg="active",ag="data-styled-version",Da="6.4.3",Wu=`/*!sc*/
`,ki=typeof window<"u"&&typeof document<"u";function km(e){if(typeof process<"u"&&fo!==void 0){const r=fo[e];if(r!==void 0&&r!=="")return r!=="false"}}const $v=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Kc=(Yc=km("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Yc!==void 0?Yc:km("SC_DISABLE_SPEEDY"))!==null&&Kc!==void 0?Kc:typeof process<"u"&&fo!==void 0&&!1),lg="sc-keyframes-",zv={};function Ai(e,...r){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${r.length>0?` Args: ${r.join(", ")}`:""}`)}let ga=new Map,ja=new Map,xa=1;const yi=e=>{if(ga.has(e))return ga.get(e);for(;ja.has(xa);)xa++;const r=xa++;return ga.set(e,r),ja.set(r,e),r},Cv=e=>ja.get(e),_v=(e,r)=>{xa=r+1,ga.set(e,r),ja.set(r,e)},Zu=Object.freeze([]),xo=Object.freeze({});function cg(e,r,i=xo){return e.theme!==i.theme&&e.theme||r||i.theme}const Pv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ev=/(^-|-$)/g;function ug(e){return e.replace(Pv,"-").replace(Ev,"")}const Tv=/(a)(d)/gi,Sm=e=>String.fromCharCode(e+(e>25?39:97));function qu(e){let r,i="";for(r=Math.abs(e);r>52;r=r/52|0)i=Sm(r%52)+i;return(Sm(r%52)+i).replace(Tv,"$1-$2")}const bu=5381,$r=(e,r)=>{let i=r.length;for(;i;)e=33*e^r.charCodeAt(--i);return e},dg=e=>$r(bu,e);function Hu(e){return qu(dg(e)>>>0)}function Iv(e){return e.displayName||e.name||"Component"}function ku(e){return typeof e=="string"&&!0}function Rv(e){return ku(e)?`styled.${e}`:`Styled(${Iv(e)})`}const fg=Symbol.for("react.memo"),Av=Symbol.for("react.forward_ref"),Ov={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Nv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lv={[Av]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[fg]:pg};function jm(e){return("type"in(r=e)&&r.type.$$typeof)===fg?pg:"$$typeof"in e?Lv[e.$$typeof]:Ov;var r}const Mv=Object.defineProperty,Dv=Object.getOwnPropertyNames,Bv=Object.getOwnPropertySymbols,Fv=Object.getOwnPropertyDescriptor,Uv=Object.getPrototypeOf,Wv=Object.prototype;function mg(e,r,i){if(typeof r!="string"){const a=Uv(r);a&&a!==Wv&&mg(e,a,i);const c=Dv(r).concat(Bv(r)),d=jm(e),f=jm(r);for(let h=0;h<c.length;++h){const x=c[h];if(!(x in Nv||i&&i[x]||f&&x in f||d&&x in d)){const y=Fv(r,x);try{Mv(e,x,y)}catch{}}}}return e}function Oi(e){return typeof e=="function"}const Zv=Symbol.for("react.forward_ref");function Vu(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Zv&&"styledComponentId"in e}function vi(e,r){return e&&r?e+" "+r:e||r||""}function $a(e,r){return e.join("")}function zi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Su(e,r,i=!1){if(!i&&!zi(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(let a=0;a<r.length;a++)e[a]=Su(e[a],r[a]);else if(zi(r))for(const a in r)e[a]=Su(e[a],r[a]);return e}function Ju(e,r){Object.defineProperty(e,"toString",{value:r})}const qv=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let r=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)r+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)r-=this.groupSizes[i];return this._cGroup=e,this._cIndex=r,r}insertRules(e,r){if(e>=this.groupSizes.length){const c=this.groupSizes,d=c.length;let f=d;for(;e>=f;)if(f<<=1,f<0)throw Ai(16,`${e}`);this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(let h=d;h<f;h++)this.groupSizes[h]=0}let i=this.indexOfGroup(e+1),a=0;for(let c=0,d=r.length;c<d;c++)this.tag.insertRule(i,r[c])&&(this.groupSizes[e]++,i++,a++);a>0&&this._cGroup>e&&(this._cIndex+=a)}clearGroup(e){if(e<this.length){const r=this.groupSizes[e],i=this.indexOfGroup(e),a=i+r;this.groupSizes[e]=0;for(let c=i;c<a;c++)this.tag.deleteRule(i);r>0&&this._cGroup>e&&(this._cIndex-=r)}}getGroup(e){let r="";if(e>=this.length||this.groupSizes[e]===0)return r;const i=this.groupSizes[e],a=this.indexOfGroup(e),c=a+i;for(let d=a;d<c;d++)r+=this.tag.getRule(d)+Wu;return r}},Hv=`style[${go}][${ag}="${Da}"]`,Vv=new RegExp(`^${go}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),$m=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ju=e=>{if(!e)return document;if($m(e))return e;if("getRootNode"in e){const r=e.getRootNode();if($m(r))return r}return document},Jv=(e,r,i)=>{const a=i.split(",");let c;for(let d=0,f=a.length;d<f;d++)(c=a[d])&&e.registerName(r,c)},Gv=(e,r)=>{var i;const a=((i=r.textContent)!==null&&i!==void 0?i:"").split(Wu),c=[];for(let d=0,f=a.length;d<f;d++){const h=a[d].trim();if(!h)continue;const x=h.match(Vv);if(x){const y=0|parseInt(x[1],10),v=x[2];y!==0&&(_v(v,y),Jv(e,v,x[3]),e.getTag().insertRules(y,c)),c.length=0}else c.push(h)}},Xc=e=>{const r=ju(e.options.target).querySelectorAll(Hv);for(let i=0,a=r.length;i<a;i++){const c=r[i];c&&c.getAttribute(go)!==sg&&(Gv(e,c),c.parentNode&&c.parentNode.removeChild(c))}};let fi=!1;function Qv(){if(fi!==!1)return fi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return fi=e.nonce||e.getAttribute("content")||void 0;const r=document.head.querySelector('meta[name="sc-nonce"]');if(r)return fi=r.getAttribute("content")||void 0}return fi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const hg=(e,r)=>{const i=document.head,a=e||i,c=document.createElement("style"),d=(x=>{const y=Array.from(x.querySelectorAll(`style[${go}]`));return y[y.length-1]})(a),f=d!==void 0?d.nextSibling:null;c.setAttribute(go,sg),c.setAttribute(ag,Da);const h=r||Qv();return h&&c.setAttribute("nonce",h),a.insertBefore(c,f),c},Yv=class{constructor(e,r){this.element=hg(e,r),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var a;if(i.sheet)return i.sheet;const c=(a=i.getRootNode().styleSheets)!==null&&a!==void 0?a:document.styleSheets;for(let d=0,f=c.length;d<f;d++){const h=c[d];if(h.ownerNode===i)return h}throw Ai(17)})(this.element),this.length=0}insertRule(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""}},Kv=class{constructor(e,r){this.element=hg(e,r),this.nodes=this.element.childNodes,this.length=0}insertRule(e,r){if(e<=this.length&&e>=0){const i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let zm=ki;const Xv={isServer:!ki,useCSSOMInjection:!$v};class Ni{static registerId(r){return yi(r)}constructor(r=xo,i={},a){this.options=Object.assign(Object.assign({},Xv),r),this.gs=i,this.keyframeIds=new Set,this.names=new Map(a),this.server=!!r.isServer,!this.server&&ki&&zm&&(zm=!1,Xc(this)),Ju(this,()=>(c=>{const d=c.getTag(),{length:f}=d;let h="";for(let x=0;x<f;x++){const y=Cv(x);if(y===void 0)continue;const v=c.names.get(y);if(v===void 0||!v.size)continue;const b=d.getGroup(x);if(b.length===0)continue;const S=go+".g"+x+'[id="'+y+'"]';let E="";for(const O of v)O.length>0&&(E+=O+",");h+=b+S+'{content:"'+E+'"}'+Wu}return h})(this))}rehydrate(){!this.server&&ki&&Xc(this)}reconstructWithOptions(r,i=!0){const a=new Ni(Object.assign(Object.assign({},this.options),r),this.gs,i&&this.names||void 0);return a.keyframeIds=new Set(this.keyframeIds),!this.server&&ki&&r.target!==this.options.target&&ju(this.options.target)!==ju(r.target)&&Xc(a),a}allocateGSInstance(r){return this.gs[r]=(this.gs[r]||0)+1}getTag(){return this.tag||(this.tag=(r=(({useCSSOMInjection:i,target:a,nonce:c})=>i?new Yv(a,c):new Kv(a,c))(this.options),new qv(r)));var r}hasNameForId(r,i){var a,c;return(c=(a=this.names.get(r))===null||a===void 0?void 0:a.has(i))!==null&&c!==void 0&&c}registerName(r,i){yi(r),r.startsWith(lg)&&this.keyframeIds.add(r);const a=this.names.get(r);a?a.add(i):this.names.set(r,new Set([i]))}insertRules(r,i,a){this.registerName(r,i),this.getTag().insertRules(yi(r),a)}clearNames(r){this.names.has(r)&&this.names.get(r).clear()}clearRules(r){this.getTag().clearGroup(yi(r)),this.clearNames(r)}clearTag(){this.tag=void 0}}const gg=new WeakSet,e2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function t2(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in e2||e.startsWith("--")?String(r).trim():r+"px"}const jr=47;function Cm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let r="";for(let i=0;i<e.length;i++){const a=e.charCodeAt(i);r+=a>=65&&a<=90?"-"+String.fromCharCode(a+32):e[i]}return r.startsWith("ms-")?"-"+r:r}const xg=Symbol.for("sc-keyframes");function n2(e){return typeof e=="object"&&e!==null&&xg in e}function yg(e){return Oi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const vg=e=>e==null||e===!1||e==="",r2=Symbol.for("react.client.reference");function _m(e){return e.$$typeof===r2}function wg(e,r){for(const i in e){const a=e[i];e.hasOwnProperty(i)&&!vg(a)&&(Array.isArray(a)&&gg.has(a)||Oi(a)?r.push(Cm(i)+":",a,";"):zi(a)?(r.push(i+" {"),wg(a,r),r.push("}")):r.push(Cm(i)+": "+t2(i,a)+";"))}}function or(e,r,i,a,c=[]){if(vg(e))return c;const d=typeof e;if(d==="string")return c.push(e),c;if(d==="function"){if(_m(e))return c;if(yg(e)&&r){const f=e(r);return or(f,r,i,a,c)}return c.push(e),c}if(Array.isArray(e)){for(let f=0;f<e.length;f++)or(e[f],r,i,a,c);return c}return Vu(e)?(c.push(`.${e.styledComponentId}`),c):n2(e)?(i?(e.inject(i,a),c.push(e.getName(a))):c.push(e),c):_m(e)?c:zi(e)?e.toString!==Object.prototype.toString?(c.push(e.toString()),c):(wg(e,c),c):(c.push(e.toString()),c)}const o2=dg(Da);class i2{constructor(r,i,a){this.rules=r,this.componentId=i,this.baseHash=$r(o2,i),this.baseStyle=a,Ni.registerId(i)}generateAndInjectStyles(r,i,a){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,a):"";{let d="";for(let f=0;f<this.rules.length;f++){const h=this.rules[f];if(typeof h=="string")d+=h;else if(h)if(yg(h)){const x=h(r);typeof x=="string"?d+=x:x!=null&&x!==!1&&(d+=$a(or(x,r,i,a)))}else d+=$a(or(h,r,i,a))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const f=a.hash?a.hash+d:d;let h=this.dynamicNameCache.get(f);if(!h){if(h=qu($r($r(this.baseHash,a.hash),d)>>>0),this.dynamicNameCache.size>=200){const x=this.dynamicNameCache.keys().next().value;x!==void 0&&this.dynamicNameCache.delete(x)}this.dynamicNameCache.set(f,h)}if(!i.hasNameForId(this.componentId,h)){const x=a(d,"."+h,void 0,this.componentId);i.insertRules(this.componentId,h,x)}c=vi(c,h)}}return c}}const s2=/&/g;function bg(e,r){let i=0;for(;--r>=0&&e.charCodeAt(r)===92;)i++;return!(1&~i)}function eu(e){const r=e.length;let i="",a=0,c=0,d=0,f=!1,h=!1;for(let x=0;x<r;x++){const y=e.charCodeAt(x);if(d!==0||f||y!==jr||e.charCodeAt(x+1)!==42)if(f)y===42&&e.charCodeAt(x+1)===jr&&(f=!1,x++);else if(y!==34&&y!==39||bg(e,x)){if(d===0)if(y===123)c++;else if(y===125){if(c--,c<0){h=!0;let v=x+1;for(;v<r;){const b=e.charCodeAt(v);if(b===59||b===10)break;v++}v<r&&e.charCodeAt(v)===59&&v++,c=0,x=v-1,a=v;continue}c===0&&(i+=e.substring(a,x+1),a=x+1)}else y===59&&c===0&&(i+=e.substring(a,x+1),a=x+1)}else d===0?d=y:d===y&&(d=0);else f=!0,x++}return h||c!==0||d!==0?(a<r&&c===0&&d===0&&(i+=e.substring(a)),i):e}function kg(e,r){const i=r+" ",a=","+i;for(let c=0;c<e.length;c++){const d=e[c];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",a);const f=d.props,h=[];for(let x=0;x<f.length;x++)h[x]=i+f[x];d.props=h}Array.isArray(d.children)&&d.type!=="@keyframes"&&kg(d.children,r)}return e}function a2({options:e=xo,plugins:r=Zu}=xo){let i,a,c;const d=(S,E,O)=>O.startsWith(a)&&O.endsWith(a)&&O.replaceAll(a,"").length>0?`.${i}`:S,f=r.slice();f.push(S=>{S.type===Oa&&S.value.includes("&")&&(c||(c=new RegExp(`\\${a}\\b`,"g")),S.props[0]=S.props[0].replace(s2,a).replace(c,d))}),e.prefix&&f.push(jv),f.push(bv);let h=[];const x=kv(f.concat(Sv(S=>h.push(S)))),y=(S,E="",O="",$="&")=>{i=$,a=E,c=void 0;const A=(function(R){const V=R.indexOf("//")!==-1,J=R.indexOf("}")!==-1;if(!V&&!J)return R;if(!V)return eu(R);const Q=R.length;let H="",W=0,X=0,te=0,I=0,me=0,Ee=!1;for(;X<Q;){const xe=R.charCodeAt(X);if(xe!==34&&xe!==39||bg(R,X))if(te===0)if(xe===jr&&X+1<Q&&R.charCodeAt(X+1)===42){for(X+=2;X+1<Q&&(R.charCodeAt(X)!==42||R.charCodeAt(X+1)!==jr);)X++;X+=2}else if(xe!==40)if(xe!==41)if(I>0)X++;else if(xe===42&&X+1<Q&&R.charCodeAt(X+1)===jr)H+=R.substring(W,X),X+=2,W=X,Ee=!0;else if(xe===jr&&X+1<Q&&R.charCodeAt(X+1)===jr){for(H+=R.substring(W,X);X<Q&&R.charCodeAt(X)!==10;)X++;W=X,Ee=!0}else xe===123?me++:xe===125&&me--,X++;else I>0&&I--,X++;else I++,X++;else X++;else te===0?te=xe:te===xe&&(te=0),X++}return Ee?(W<Q&&(H+=R.substring(W)),me===0?H:eu(H)):me===0?R:eu(R)})(S);let N=vv(O||E?O+" "+E+" { "+A+" }":A);return e.namespace&&(N=kg(N,e.namespace)),h=[],Sa(N,x),h},v=e;let b=bu;for(let S=0;S<r.length;S++)r[S].name||Ai(15),b=$r(b,r[S].name);return v!=null&&v.namespace&&(b=$r(b,v.namespace)),v!=null&&v.prefix&&(b=$r(b,"p")),y.hash=b!==bu?b.toString():"",y}const l2=new Ni,$u=a2(),Sg=dt.createContext({shouldForwardProp:void 0,styleSheet:l2,stylis:$u,stylisPlugins:void 0});Sg.Consumer;function jg(){return dt.useContext(Sg)}const Gu=dt.createContext(void 0);Gu.Consumer;const Pm=Object.prototype.hasOwnProperty,tu={};function c2(e,r){const i=typeof e!="string"?"sc":ug(e);tu[i]=(tu[i]||0)+1;const a=i+"-"+Hu(Da+i+tu[i]);return r?r+"-"+a:a}function u2(e,r,i){const a=Vu(e),c=e,d=!ku(e),{attrs:f=Zu,componentId:h=c2(r.displayName,r.parentComponentId),displayName:x=Rv(e)}=r,y=r.displayName&&r.componentId?ug(r.displayName)+"-"+r.componentId:r.componentId||h,v=a&&c.attrs?c.attrs.concat(f).filter(Boolean):f;let{shouldForwardProp:b}=r;if(a&&c.shouldForwardProp){const $=c.shouldForwardProp;if(r.shouldForwardProp){const A=r.shouldForwardProp;b=(N,R)=>$(N,R)&&A(N,R)}else b=$}const S=new i2(i,y,a?c.componentStyle:void 0);function E($,A){return(function(N,R,V){const{attrs:J,componentStyle:Q,defaultProps:H,foldedComponentIds:W,styledComponentId:X,target:te}=N,I=dt.useContext(Gu),me=jg(),Ee=N.shouldForwardProp||me.shouldForwardProp,xe=cg(R,I,H)||xo;let _e,$e;{const oe=dt.useRef(null),Z=oe.current;if(Z!==null&&Z[1]===xe&&Z[2]===me.styleSheet&&Z[3]===me.stylis&&Z[7]===Q&&(function(z,L,se){const ae=z,ue=L;let ye=0;for(const we in ue)if(Pm.call(ue,we)&&(ye++,ae[we]!==ue[we]))return!1;return ye===se})(Z[0],R,Z[4]))_e=Z[5],$e=Z[6];else{_e=(function(L,se,ae){const ue=Object.assign(Object.assign({},se),{className:void 0,theme:ae}),ye=L.length>1;for(let we=0;we<L.length;we++){const be=L[we],ze=Oi(be)?be(ye?Object.assign({},ue):ue):be;for(const Ze in ze)Ze==="className"?ue.className=vi(ue.className,ze[Ze]):Ze==="style"?ue.style=Object.assign(Object.assign({},ue.style),ze[Ze]):Ze in se&&se[Ze]===void 0||(ue[Ze]=ze[Ze])}return"className"in se&&typeof se.className=="string"&&(ue.className=vi(ue.className,se.className)),ue})(J,R,xe),$e=(function(L,se,ae,ue){return L.generateAndInjectStyles(se,ae,ue)})(Q,_e,me.styleSheet,me.stylis);let z=0;for(const L in R)Pm.call(R,L)&&z++;oe.current=[R,xe,me.styleSheet,me.stylis,z,_e,$e,Q]}}const He=_e.as||te,Te=(function(oe,Z,z,L){const se={};for(const ae in oe)oe[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&oe.theme===z||(ae==="forwardedAs"?se.as=oe.forwardedAs:L&&!L(ae,Z)||(se[ae]=oe[ae]));return se})(_e,He,xe,Ee);let q=vi(W,X);return $e&&(q+=" "+$e),_e.className&&(q+=" "+_e.className),Te[ku(He)&&He.includes("-")?"class":"className"]=q,V&&(Te.ref=V),_.createElement(He,Te)})(O,$,A)}E.displayName=x;let O=dt.forwardRef(E);return O.attrs=v,O.componentStyle=S,O.displayName=x,O.shouldForwardProp=b,O.foldedComponentIds=a?vi(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=y,O.target=a?c.target:e,Object.defineProperty(O,"defaultProps",{get(){return this._foldedDefaultProps},set($){this._foldedDefaultProps=a?(function(A,...N){for(const R of N)Su(A,R,!0);return A})({},c.defaultProps,$):$}}),Ju(O,()=>`.${O.styledComponentId}`),d&&mg(O,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}var d2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Em(e,r){const i=[e[0]];for(let a=0,c=r.length;a<c;a+=1)i.push(r[a],e[a+1]);return i}const Tm=e=>(gg.add(e),e);function ie(e,...r){if(Oi(e)||zi(e))return Tm(or(Em(Zu,[e,...r])));const i=e;return r.length===0&&i.length===1&&typeof i[0]=="string"?or(i):Tm(or(Em(i,r)))}function zu(e,r,i=xo){if(!r)throw Ai(1,r);const a=(c,...d)=>e(r,i,ie(c,...d));return a.attrs=c=>zu(e,r,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)})),a.withConfig=c=>zu(e,r,Object.assign(Object.assign({},i),c)),a}const $g=e=>zu(u2,e),m=$g;d2.forEach(e=>{m[e]=$g(e)});class f2{constructor(r,i){this.instanceRules=new Map,this.rules=r,this.componentId=i,this.isStatic=(function(a){for(let c=0;c<a.length;c+=1){const d=a[c];if(Oi(d)&&!Vu(d))return!1}return!0})(r),Ni.registerId(this.componentId)}removeStyles(r,i){this.instanceRules.delete(r),this.rebuildGroup(i)}renderStyles(r,i,a,c){const d=this.componentId;if(this.isStatic){if(a.hasNameForId(d,d+r))this.instanceRules.has(r)||this.computeRules(r,i,a,c);else{const h=this.computeRules(r,i,a,c);a.insertRules(d,h.name,h.rules)}return}const f=this.instanceRules.get(r);if(this.computeRules(r,i,a,c),!a.server&&f){const h=f.rules,x=this.instanceRules.get(r).rules;if(h.length===x.length){let y=!0;for(let v=0;v<h.length;v++)if(h[v]!==x[v]){y=!1;break}if(y)return}}this.rebuildGroup(a)}computeRules(r,i,a,c){const d=$a(or(this.rules,i,a,c)),f={name:this.componentId+r,rules:c(d,"")};return this.instanceRules.set(r,f),f}rebuildGroup(r){const i=this.componentId;r.clearRules(i);for(const a of this.instanceRules.values())r.insertRules(i,a.name,a.rules)}}function p2(e,...r){const i=ie(e,...r),a=`sc-global-${Hu(JSON.stringify(i))}`,c=new f2(i,a),d=h=>{const x=jg(),y=dt.useContext(Gu);let v;{const b=dt.useRef(null);b.current===null&&(b.current=x.styleSheet.allocateGSInstance(a)),v=b.current}x.styleSheet.server&&f(v,h,x.styleSheet,y,x.stylis);{const b=c.isStatic?[v,x.styleSheet,c]:[v,h,x.styleSheet,y,x.stylis,c],S=dt.useRef(c);dt.useLayoutEffect(()=>{x.styleSheet.server||(S.current!==c&&(x.styleSheet.clearRules(a),S.current=c),f(v,h,x.styleSheet,y,x.stylis))},b),dt.useLayoutEffect(()=>()=>{x.styleSheet.server||c.removeStyles(v,x.styleSheet)},[v,x.styleSheet,c])}return x.styleSheet.server&&c.instanceRules.delete(v),null};function f(h,x,y,v,b){if(c.isStatic)c.renderStyles(h,zv,y,b);else{const S=Object.assign(Object.assign({},x),{theme:cg(x,v,d.defaultProps)});c.renderStyles(h,S,y,b)}}return dt.memo(d)}var zg;class m2{constructor(r,i){this[zg]=!0,this.inject=(a,c=$u)=>{const d=this.getName(c);if(!a.hasNameForId(this.id,d)){const f=c(this.rules,d,"@keyframes");a.insertRules(this.id,d,f)}},this.name=r,this.id=lg+r,this.rules=i,yi(this.id),Ju(this,()=>{throw Ai(12,String(this.name))})}getName(r=$u){return r.hash?this.name+qu(+r.hash>>>0):this.name}}function ot(e,...r){const i=$a(ie(e,...r)),a=Hu(i);return new m2(a,i)}zg=xg;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g2=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,a)=>a?a.toUpperCase():i.toLowerCase()),Im=e=>{const r=g2(e);return r.charAt(0).toUpperCase()+r.slice(1)},Cg=(...e)=>e.filter((r,i,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=_.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:f,...h},x)=>_.createElement("svg",{ref:x,...x2,width:r,height:r,stroke:e,strokeWidth:a?Number(i)*24/Number(r):i,className:Cg("lucide",c),...h},[...f.map(([y,v])=>_.createElement(y,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(e,r)=>{const i=_.forwardRef(({className:a,...c},d)=>_.createElement(y2,{ref:d,iconNode:r,className:Cg(`lucide-${h2(Im(e))}`,`lucide-${e}`,a),...c}));return i.displayName=Im(e),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Rm=re("activity",v2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]],_g=re("apple",w2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],k2=re("arrow-left",b2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],j2=re("arrow-right-to-line",S2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xt=re("arrow-right",$2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],So=re("bell",z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Pg=re("bot",C2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],P2=re("calculator",_2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],T2=re("camera",E2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],R2=re("chart-column",I2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Li=re("check",A2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],N2=re("chevron-down",O2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],M2=re("chevron-up",L2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Qu=re("circle-alert",D2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],On=re("circle-check",B2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]],Eg=re("cloud-lightning",F2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ci=re("code-xml",U2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],yo=re("database",W2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],q2=re("eye",Z2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],V2=re("file-text",H2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],vo=re("globe",J2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Tg=re("hard-drive",G2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ig=re("info",Q2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],K2=re("instagram",Y2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],e5=re("key",X2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],n5=re("laptop",t5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],o5=re("layout-template",r5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],s5=re("loader-circle",i5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],l5=re("lock",a5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],u5=re("log-in",c5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],f5=re("log-out",d5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],za=re("mail",p5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],h5=re("map-pin",m5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Rg=re("menu",g5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],y5=re("message-circle",x5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Ag=re("message-square",v5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=[["path",{d:"M5 12h14",key:"1ays0h"}]],Og=re("minus",w5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],_i=re("monitor",b5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ng=re("network",k5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],j5=re("package",S5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Ca=re("phone",$5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],C5=re("plus",z5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],P5=re("printer",_5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],T5=re("rotate-ccw",E5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Lg=re("search",I5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Ba=re("server",R5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],O5=re("settings",A5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Cr=re("shield",N5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],M5=re("shopping-bag",L5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],B5=re("shopping-cart",D5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ir=re("smartphone",F5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],W5=re("star",U5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],q5=re("triangle-alert",Z5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],V5=re("upload",H5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],G5=re("user",J5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Fa=re("users",Q5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ua=re("wifi-off",Y5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Yu=re("wifi",K5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mi=re("x",X5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Di=re("zap",ew),Am=e=>{let r;const i=new Set,a=(y,v)=>{const b=typeof y=="function"?y(r):y;if(!Object.is(b,r)){const S=r;r=v??(typeof b!="object"||b===null)?b:Object.assign({},r,b),i.forEach(E=>E(r,S))}},c=()=>r,h={setState:a,getState:c,getInitialState:()=>x,subscribe:y=>(i.add(y),()=>i.delete(y))},x=r=e(a,c,h);return h},tw=(e=>e?Am(e):Am),nw=e=>e;function rw(e,r=nw){const i=dt.useSyncExternalStore(e.subscribe,dt.useCallback(()=>r(e.getState()),[e,r]),dt.useCallback(()=>r(e.getInitialState()),[e,r]));return dt.useDebugValue(i),i}const Om=e=>{const r=tw(e),i=a=>rw(r,a);return Object.assign(i,r),i},ow=(e=>e?Om(e):Om);var Nm;function M(e,r,i){function a(h,x){if(h._zod||Object.defineProperty(h,"_zod",{value:{def:x,constr:f,traits:new Set},enumerable:!1}),h._zod.traits.has(e))return;h._zod.traits.add(e),r(h,x);const y=f.prototype,v=Object.keys(y);for(let b=0;b<v.length;b++){const S=v[b];S in h||(h[S]=y[S].bind(h))}}const c=(i==null?void 0:i.Parent)??Object;class d extends c{}Object.defineProperty(d,"name",{value:e});function f(h){var x;const y=i!=null&&i.Parent?new d:this;a(y,h),(x=y._zod).deferred??(x.deferred=[]);for(const v of y._zod.deferred)v();return y}return Object.defineProperty(f,"init",{value:a}),Object.defineProperty(f,Symbol.hasInstance,{value:h=>{var x,y;return i!=null&&i.Parent&&h instanceof i.Parent?!0:(y=(x=h==null?void 0:h._zod)==null?void 0:x.traits)==null?void 0:y.has(e)}}),Object.defineProperty(f,"name",{value:e}),f}class po extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Mg extends Error{constructor(r){super(`Encountered unidirectional transform during encode: ${r}`),this.name="ZodEncodeError"}}(Nm=globalThis).__zod_globalConfig??(Nm.__zod_globalConfig={});const Ku=globalThis.__zod_globalConfig;function _r(e){return Ku}function Dg(e){const r=Object.values(e).filter(a=>typeof a=="number");return Object.entries(e).filter(([a,c])=>r.indexOf(+a)===-1).map(([a,c])=>c)}function Cu(e,r){return typeof r=="bigint"?r.toString():r}function Xu(e){return{get value(){{const r=e();return Object.defineProperty(this,"value",{value:r}),r}}}}function ed(e){return e==null}function td(e){const r=e.startsWith("^")?1:0,i=e.endsWith("$")?e.length-1:e.length;return e.slice(r,i)}const Lm=Symbol("evaluating");function Pe(e,r,i){let a;Object.defineProperty(e,r,{get(){if(a!==Lm)return a===void 0&&(a=Lm,a=i()),a},set(c){Object.defineProperty(e,r,{value:c})},configurable:!0})}function Er(e,r,i){Object.defineProperty(e,r,{value:i,writable:!0,enumerable:!0,configurable:!0})}function ar(...e){const r={};for(const i of e){const a=Object.getOwnPropertyDescriptors(i);Object.assign(r,a)}return Object.defineProperties({},r)}function Mm(e){return JSON.stringify(e)}function iw(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Bg="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function _a(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const sw=Xu(()=>{var e;if(Ku.jitless||typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)!=null&&e.includes("Cloudflare")))return!1;try{const r=Function;return new r(""),!0}catch{return!1}});function Pi(e){if(_a(e)===!1)return!1;const r=e.constructor;if(r===void 0||typeof r!="function")return!0;const i=r.prototype;return!(_a(i)===!1||Object.prototype.hasOwnProperty.call(i,"isPrototypeOf")===!1)}function Fg(e){return Pi(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}const aw=new Set(["string","number","symbol"]);function Wa(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function lr(e,r,i){const a=new e._zod.constr(r??e._zod.def);return(!r||i!=null&&i.parent)&&(a._zod.parent=e),a}function fe(e){const r=e;if(!r)return{};if(typeof r=="string")return{error:()=>r};if((r==null?void 0:r.message)!==void 0){if((r==null?void 0:r.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");r.error=r.message}return delete r.message,typeof r.error=="string"?{...r,error:()=>r.error}:r}function lw(e){return Object.keys(e).filter(r=>e[r]._zod.optin==="optional"&&e[r]._zod.optout==="optional")}function cw(e,r){const i=e._zod.def,a=i.checks;if(a&&a.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const d=ar(e._zod.def,{get shape(){const f={};for(const h in r){if(!(h in i.shape))throw new Error(`Unrecognized key: "${h}"`);r[h]&&(f[h]=i.shape[h])}return Er(this,"shape",f),f},checks:[]});return lr(e,d)}function uw(e,r){const i=e._zod.def,a=i.checks;if(a&&a.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const d=ar(e._zod.def,{get shape(){const f={...e._zod.def.shape};for(const h in r){if(!(h in i.shape))throw new Error(`Unrecognized key: "${h}"`);r[h]&&delete f[h]}return Er(this,"shape",f),f},checks:[]});return lr(e,d)}function dw(e,r){if(!Pi(r))throw new Error("Invalid input to extend: expected a plain object");const i=e._zod.def.checks;if(i&&i.length>0){const d=e._zod.def.shape;for(const f in r)if(Object.getOwnPropertyDescriptor(d,f)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const c=ar(e._zod.def,{get shape(){const d={...e._zod.def.shape,...r};return Er(this,"shape",d),d}});return lr(e,c)}function fw(e,r){if(!Pi(r))throw new Error("Invalid input to safeExtend: expected a plain object");const i=ar(e._zod.def,{get shape(){const a={...e._zod.def.shape,...r};return Er(this,"shape",a),a}});return lr(e,i)}function pw(e,r){var a;if((a=e._zod.def.checks)!=null&&a.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const i=ar(e._zod.def,{get shape(){const c={...e._zod.def.shape,...r._zod.def.shape};return Er(this,"shape",c),c},get catchall(){return r._zod.def.catchall},checks:r._zod.def.checks??[]});return lr(e,i)}function mw(e,r,i){const c=r._zod.def.checks;if(c&&c.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const f=ar(r._zod.def,{get shape(){const h=r._zod.def.shape,x={...h};if(i)for(const y in i){if(!(y in h))throw new Error(`Unrecognized key: "${y}"`);i[y]&&(x[y]=e?new e({type:"optional",innerType:h[y]}):h[y])}else for(const y in h)x[y]=e?new e({type:"optional",innerType:h[y]}):h[y];return Er(this,"shape",x),x},checks:[]});return lr(r,f)}function hw(e,r,i){const a=ar(r._zod.def,{get shape(){const c=r._zod.def.shape,d={...c};if(i)for(const f in i){if(!(f in d))throw new Error(`Unrecognized key: "${f}"`);i[f]&&(d[f]=new e({type:"nonoptional",innerType:c[f]}))}else for(const f in c)d[f]=new e({type:"nonoptional",innerType:c[f]});return Er(this,"shape",d),d}});return lr(r,a)}function uo(e,r=0){var i;if(e.aborted===!0)return!0;for(let a=r;a<e.issues.length;a++)if(((i=e.issues[a])==null?void 0:i.continue)!==!0)return!0;return!1}function gw(e,r=0){var i;if(e.aborted===!0)return!0;for(let a=r;a<e.issues.length;a++)if(((i=e.issues[a])==null?void 0:i.continue)===!1)return!0;return!1}function Ug(e,r){return r.map(i=>{var a;return(a=i).path??(a.path=[]),i.path.unshift(e),i})}function Ks(e){return typeof e=="string"?e:e==null?void 0:e.message}function Pr(e,r,i){var x,y,v,b,S,E;const a=e.message?e.message:Ks((v=(y=(x=e.inst)==null?void 0:x._zod.def)==null?void 0:y.error)==null?void 0:v.call(y,e))??Ks((b=r==null?void 0:r.error)==null?void 0:b.call(r,e))??Ks((S=i.customError)==null?void 0:S.call(i,e))??Ks((E=i.localeError)==null?void 0:E.call(i,e))??"Invalid input",{inst:c,continue:d,input:f,...h}=e;return h.path??(h.path=[]),h.message=a,r!=null&&r.reportInput&&(h.input=f),h}function nd(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function Ei(...e){const[r,i,a]=e;return typeof r=="string"?{message:r,code:"custom",input:i,inst:a}:{...r}}const Wg=(e,r)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:r,enumerable:!1}),e.message=JSON.stringify(r,Cu,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Zg=M("$ZodError",Wg),qg=M("$ZodError",Wg,{Parent:Error});function xw(e,r=i=>i.message){const i={},a=[];for(const c of e.issues)c.path.length>0?(i[c.path[0]]=i[c.path[0]]||[],i[c.path[0]].push(r(c))):a.push(r(c));return{formErrors:a,fieldErrors:i}}function yw(e,r=i=>i.message){const i={_errors:[]},a=(c,d=[])=>{for(const f of c.issues)if(f.code==="invalid_union"&&f.errors.length)f.errors.map(h=>a({issues:h},[...d,...f.path]));else if(f.code==="invalid_key")a({issues:f.issues},[...d,...f.path]);else if(f.code==="invalid_element")a({issues:f.issues},[...d,...f.path]);else{const h=[...d,...f.path];if(h.length===0)i._errors.push(r(f));else{let x=i,y=0;for(;y<h.length;){const v=h[y];y===h.length-1?(x[v]=x[v]||{_errors:[]},x[v]._errors.push(r(f))):x[v]=x[v]||{_errors:[]},x=x[v],y++}}}};return a(e),i}const rd=e=>(r,i,a,c)=>{const d=a?{...a,async:!1}:{async:!1},f=r._zod.run({value:i,issues:[]},d);if(f instanceof Promise)throw new po;if(f.issues.length){const h=new((c==null?void 0:c.Err)??e)(f.issues.map(x=>Pr(x,d,_r())));throw Bg(h,c==null?void 0:c.callee),h}return f.value},od=e=>async(r,i,a,c)=>{const d=a?{...a,async:!0}:{async:!0};let f=r._zod.run({value:i,issues:[]},d);if(f instanceof Promise&&(f=await f),f.issues.length){const h=new((c==null?void 0:c.Err)??e)(f.issues.map(x=>Pr(x,d,_r())));throw Bg(h,c==null?void 0:c.callee),h}return f.value},Za=e=>(r,i,a)=>{const c=a?{...a,async:!1}:{async:!1},d=r._zod.run({value:i,issues:[]},c);if(d instanceof Promise)throw new po;return d.issues.length?{success:!1,error:new(e??Zg)(d.issues.map(f=>Pr(f,c,_r())))}:{success:!0,data:d.value}},vw=Za(qg),qa=e=>async(r,i,a)=>{const c=a?{...a,async:!0}:{async:!0};let d=r._zod.run({value:i,issues:[]},c);return d instanceof Promise&&(d=await d),d.issues.length?{success:!1,error:new e(d.issues.map(f=>Pr(f,c,_r())))}:{success:!0,data:d.value}},ww=qa(qg),bw=e=>(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return rd(e)(r,i,c)},kw=e=>(r,i,a)=>rd(e)(r,i,a),Sw=e=>async(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return od(e)(r,i,c)},jw=e=>async(r,i,a)=>od(e)(r,i,a),$w=e=>(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return Za(e)(r,i,c)},zw=e=>(r,i,a)=>Za(e)(r,i,a),Cw=e=>async(r,i,a)=>{const c=a?{...a,direction:"backward"}:{direction:"backward"};return qa(e)(r,i,c)},_w=e=>async(r,i,a)=>qa(e)(r,i,a),Pw=/^[cC][0-9a-z]{6,}$/,Ew=/^[0-9a-z]+$/,Tw=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Iw=/^[0-9a-vA-V]{20}$/,Rw=/^[A-Za-z0-9]{27}$/,Aw=/^[a-zA-Z0-9_-]{21}$/,Ow=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Nw=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Dm=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Lw=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Mw="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Dw(){return new RegExp(Mw,"u")}const Bw=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Fw=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Uw=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Ww=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Zw=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Hg=/^[A-Za-z0-9_-]*$/,qw=/^https?$/,Hw=/^\+[1-9]\d{6,14}$/,Vg="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Vw=new RegExp(`^${Vg}$`);function Jg(e){const r="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${r}`:e.precision===0?`${r}:[0-5]\\d`:`${r}:[0-5]\\d\\.\\d{${e.precision}}`:`${r}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Jw(e){return new RegExp(`^${Jg(e)}$`)}function Gw(e){const r=Jg({precision:e.precision}),i=["Z"];e.local&&i.push(""),e.offset&&i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const a=`${r}(?:${i.join("|")})`;return new RegExp(`^${Vg}T(?:${a})$`)}const Qw=e=>{const r=e?`[\\s\\S]{${(e==null?void 0:e.minimum)??0},${(e==null?void 0:e.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${r}$`)},Yw=/^[^A-Z]*$/,Kw=/^[^a-z]*$/,jn=M("$ZodCheck",(e,r)=>{var i;e._zod??(e._zod={}),e._zod.def=r,(i=e._zod).onattach??(i.onattach=[])}),Xw=M("$ZodCheckMaxLength",(e,r)=>{var i;jn.init(e,r),(i=e._zod.def).when??(i.when=a=>{const c=a.value;return!ed(c)&&c.length!==void 0}),e._zod.onattach.push(a=>{const c=a._zod.bag.maximum??Number.POSITIVE_INFINITY;r.maximum<c&&(a._zod.bag.maximum=r.maximum)}),e._zod.check=a=>{const c=a.value;if(c.length<=r.maximum)return;const f=nd(c);a.issues.push({origin:f,code:"too_big",maximum:r.maximum,inclusive:!0,input:c,inst:e,continue:!r.abort})}}),eb=M("$ZodCheckMinLength",(e,r)=>{var i;jn.init(e,r),(i=e._zod.def).when??(i.when=a=>{const c=a.value;return!ed(c)&&c.length!==void 0}),e._zod.onattach.push(a=>{const c=a._zod.bag.minimum??Number.NEGATIVE_INFINITY;r.minimum>c&&(a._zod.bag.minimum=r.minimum)}),e._zod.check=a=>{const c=a.value;if(c.length>=r.minimum)return;const f=nd(c);a.issues.push({origin:f,code:"too_small",minimum:r.minimum,inclusive:!0,input:c,inst:e,continue:!r.abort})}}),tb=M("$ZodCheckLengthEquals",(e,r)=>{var i;jn.init(e,r),(i=e._zod.def).when??(i.when=a=>{const c=a.value;return!ed(c)&&c.length!==void 0}),e._zod.onattach.push(a=>{const c=a._zod.bag;c.minimum=r.length,c.maximum=r.length,c.length=r.length}),e._zod.check=a=>{const c=a.value,d=c.length;if(d===r.length)return;const f=nd(c),h=d>r.length;a.issues.push({origin:f,...h?{code:"too_big",maximum:r.length}:{code:"too_small",minimum:r.length},inclusive:!0,exact:!0,input:a.value,inst:e,continue:!r.abort})}}),Ha=M("$ZodCheckStringFormat",(e,r)=>{var i,a;jn.init(e,r),e._zod.onattach.push(c=>{const d=c._zod.bag;d.format=r.format,r.pattern&&(d.patterns??(d.patterns=new Set),d.patterns.add(r.pattern))}),r.pattern?(i=e._zod).check??(i.check=c=>{r.pattern.lastIndex=0,!r.pattern.test(c.value)&&c.issues.push({origin:"string",code:"invalid_format",format:r.format,input:c.value,...r.pattern?{pattern:r.pattern.toString()}:{},inst:e,continue:!r.abort})}):(a=e._zod).check??(a.check=()=>{})}),nb=M("$ZodCheckRegex",(e,r)=>{Ha.init(e,r),e._zod.check=i=>{r.pattern.lastIndex=0,!r.pattern.test(i.value)&&i.issues.push({origin:"string",code:"invalid_format",format:"regex",input:i.value,pattern:r.pattern.toString(),inst:e,continue:!r.abort})}}),rb=M("$ZodCheckLowerCase",(e,r)=>{r.pattern??(r.pattern=Yw),Ha.init(e,r)}),ob=M("$ZodCheckUpperCase",(e,r)=>{r.pattern??(r.pattern=Kw),Ha.init(e,r)}),ib=M("$ZodCheckIncludes",(e,r)=>{jn.init(e,r);const i=Wa(r.includes),a=new RegExp(typeof r.position=="number"?`^.{${r.position}}${i}`:i);r.pattern=a,e._zod.onattach.push(c=>{const d=c._zod.bag;d.patterns??(d.patterns=new Set),d.patterns.add(a)}),e._zod.check=c=>{c.value.includes(r.includes,r.position)||c.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:r.includes,input:c.value,inst:e,continue:!r.abort})}}),sb=M("$ZodCheckStartsWith",(e,r)=>{jn.init(e,r);const i=new RegExp(`^${Wa(r.prefix)}.*`);r.pattern??(r.pattern=i),e._zod.onattach.push(a=>{const c=a._zod.bag;c.patterns??(c.patterns=new Set),c.patterns.add(i)}),e._zod.check=a=>{a.value.startsWith(r.prefix)||a.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:r.prefix,input:a.value,inst:e,continue:!r.abort})}}),ab=M("$ZodCheckEndsWith",(e,r)=>{jn.init(e,r);const i=new RegExp(`.*${Wa(r.suffix)}$`);r.pattern??(r.pattern=i),e._zod.onattach.push(a=>{const c=a._zod.bag;c.patterns??(c.patterns=new Set),c.patterns.add(i)}),e._zod.check=a=>{a.value.endsWith(r.suffix)||a.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:r.suffix,input:a.value,inst:e,continue:!r.abort})}}),lb=M("$ZodCheckOverwrite",(e,r)=>{jn.init(e,r),e._zod.check=i=>{i.value=r.tx(i.value)}});class cb{constructor(r=[]){this.content=[],this.indent=0,this&&(this.args=r)}indented(r){this.indent+=1,r(this),this.indent-=1}write(r){if(typeof r=="function"){r(this,{execution:"sync"}),r(this,{execution:"async"});return}const a=r.split(`
`).filter(f=>f),c=Math.min(...a.map(f=>f.length-f.trimStart().length)),d=a.map(f=>f.slice(c)).map(f=>" ".repeat(this.indent*2)+f);for(const f of d)this.content.push(f)}compile(){const r=Function,i=this==null?void 0:this.args,c=[...((this==null?void 0:this.content)??[""]).map(d=>`  ${d}`)];return new r(...i,c.join(`
`))}}const ub={major:4,minor:4,patch:3},it=M("$ZodType",(e,r)=>{var c;var i;e??(e={}),e._zod.def=r,e._zod.bag=e._zod.bag||{},e._zod.version=ub;const a=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&a.unshift(e);for(const d of a)for(const f of d._zod.onattach)f(e);if(a.length===0)(i=e._zod).deferred??(i.deferred=[]),(c=e._zod.deferred)==null||c.push(()=>{e._zod.run=e._zod.parse});else{const d=(h,x,y)=>{let v=uo(h),b;for(const S of x){if(S._zod.def.when){if(gw(h)||!S._zod.def.when(h))continue}else if(v)continue;const E=h.issues.length,O=S._zod.check(h);if(O instanceof Promise&&(y==null?void 0:y.async)===!1)throw new po;if(b||O instanceof Promise)b=(b??Promise.resolve()).then(async()=>{await O,h.issues.length!==E&&(v||(v=uo(h,E)))});else{if(h.issues.length===E)continue;v||(v=uo(h,E))}}return b?b.then(()=>h):h},f=(h,x,y)=>{if(uo(h))return h.aborted=!0,h;const v=d(x,a,y);if(v instanceof Promise){if(y.async===!1)throw new po;return v.then(b=>e._zod.parse(b,y))}return e._zod.parse(v,y)};e._zod.run=(h,x)=>{if(x.skipChecks)return e._zod.parse(h,x);if(x.direction==="backward"){const v=e._zod.parse({value:h.value,issues:[]},{...x,skipChecks:!0});return v instanceof Promise?v.then(b=>f(b,h,x)):f(v,h,x)}const y=e._zod.parse(h,x);if(y instanceof Promise){if(x.async===!1)throw new po;return y.then(v=>d(v,a,x))}return d(y,a,x)}}Pe(e,"~standard",()=>({validate:d=>{var f;try{const h=vw(e,d);return h.success?{value:h.data}:{issues:(f=h.error)==null?void 0:f.issues}}catch{return ww(e,d).then(x=>{var y;return x.success?{value:x.data}:{issues:(y=x.error)==null?void 0:y.issues}})}},vendor:"zod",version:1}))}),id=M("$ZodString",(e,r)=>{var i;it.init(e,r),e._zod.pattern=[...((i=e==null?void 0:e._zod.bag)==null?void 0:i.patterns)??[]].pop()??Qw(e._zod.bag),e._zod.parse=(a,c)=>{if(r.coerce)try{a.value=String(a.value)}catch{}return typeof a.value=="string"||a.issues.push({expected:"string",code:"invalid_type",input:a.value,inst:e}),a}}),De=M("$ZodStringFormat",(e,r)=>{Ha.init(e,r),id.init(e,r)}),db=M("$ZodGUID",(e,r)=>{r.pattern??(r.pattern=Nw),De.init(e,r)}),fb=M("$ZodUUID",(e,r)=>{if(r.version){const a={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[r.version];if(a===void 0)throw new Error(`Invalid UUID version: "${r.version}"`);r.pattern??(r.pattern=Dm(a))}else r.pattern??(r.pattern=Dm());De.init(e,r)}),pb=M("$ZodEmail",(e,r)=>{r.pattern??(r.pattern=Lw),De.init(e,r)}),mb=M("$ZodURL",(e,r)=>{De.init(e,r),e._zod.check=i=>{var a;try{const c=i.value.trim();if(!r.normalize&&((a=r.protocol)==null?void 0:a.source)===qw.source&&!/^https?:\/\//i.test(c)){i.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:i.value,inst:e,continue:!r.abort});return}const d=new URL(c);r.hostname&&(r.hostname.lastIndex=0,r.hostname.test(d.hostname)||i.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:r.hostname.source,input:i.value,inst:e,continue:!r.abort})),r.protocol&&(r.protocol.lastIndex=0,r.protocol.test(d.protocol.endsWith(":")?d.protocol.slice(0,-1):d.protocol)||i.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:r.protocol.source,input:i.value,inst:e,continue:!r.abort})),r.normalize?i.value=d.href:i.value=c;return}catch{i.issues.push({code:"invalid_format",format:"url",input:i.value,inst:e,continue:!r.abort})}}}),hb=M("$ZodEmoji",(e,r)=>{r.pattern??(r.pattern=Dw()),De.init(e,r)}),gb=M("$ZodNanoID",(e,r)=>{r.pattern??(r.pattern=Aw),De.init(e,r)}),xb=M("$ZodCUID",(e,r)=>{r.pattern??(r.pattern=Pw),De.init(e,r)}),yb=M("$ZodCUID2",(e,r)=>{r.pattern??(r.pattern=Ew),De.init(e,r)}),vb=M("$ZodULID",(e,r)=>{r.pattern??(r.pattern=Tw),De.init(e,r)}),wb=M("$ZodXID",(e,r)=>{r.pattern??(r.pattern=Iw),De.init(e,r)}),bb=M("$ZodKSUID",(e,r)=>{r.pattern??(r.pattern=Rw),De.init(e,r)}),kb=M("$ZodISODateTime",(e,r)=>{r.pattern??(r.pattern=Gw(r)),De.init(e,r)}),Sb=M("$ZodISODate",(e,r)=>{r.pattern??(r.pattern=Vw),De.init(e,r)}),jb=M("$ZodISOTime",(e,r)=>{r.pattern??(r.pattern=Jw(r)),De.init(e,r)}),$b=M("$ZodISODuration",(e,r)=>{r.pattern??(r.pattern=Ow),De.init(e,r)}),zb=M("$ZodIPv4",(e,r)=>{r.pattern??(r.pattern=Bw),De.init(e,r),e._zod.bag.format="ipv4"}),Cb=M("$ZodIPv6",(e,r)=>{r.pattern??(r.pattern=Fw),De.init(e,r),e._zod.bag.format="ipv6",e._zod.check=i=>{try{new URL(`http://[${i.value}]`)}catch{i.issues.push({code:"invalid_format",format:"ipv6",input:i.value,inst:e,continue:!r.abort})}}}),_b=M("$ZodCIDRv4",(e,r)=>{r.pattern??(r.pattern=Uw),De.init(e,r)}),Pb=M("$ZodCIDRv6",(e,r)=>{r.pattern??(r.pattern=Ww),De.init(e,r),e._zod.check=i=>{const a=i.value.split("/");try{if(a.length!==2)throw new Error;const[c,d]=a;if(!d)throw new Error;const f=Number(d);if(`${f}`!==d)throw new Error;if(f<0||f>128)throw new Error;new URL(`http://[${c}]`)}catch{i.issues.push({code:"invalid_format",format:"cidrv6",input:i.value,inst:e,continue:!r.abort})}}});function Gg(e){if(e==="")return!0;if(/\s/.test(e)||e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}const Eb=M("$ZodBase64",(e,r)=>{r.pattern??(r.pattern=Zw),De.init(e,r),e._zod.bag.contentEncoding="base64",e._zod.check=i=>{Gg(i.value)||i.issues.push({code:"invalid_format",format:"base64",input:i.value,inst:e,continue:!r.abort})}});function Tb(e){if(!Hg.test(e))return!1;const r=e.replace(/[-_]/g,a=>a==="-"?"+":"/"),i=r.padEnd(Math.ceil(r.length/4)*4,"=");return Gg(i)}const Ib=M("$ZodBase64URL",(e,r)=>{r.pattern??(r.pattern=Hg),De.init(e,r),e._zod.bag.contentEncoding="base64url",e._zod.check=i=>{Tb(i.value)||i.issues.push({code:"invalid_format",format:"base64url",input:i.value,inst:e,continue:!r.abort})}}),Rb=M("$ZodE164",(e,r)=>{r.pattern??(r.pattern=Hw),De.init(e,r)});function Ab(e,r=null){try{const i=e.split(".");if(i.length!==3)return!1;const[a]=i;if(!a)return!1;const c=JSON.parse(atob(a));return!("typ"in c&&(c==null?void 0:c.typ)!=="JWT"||!c.alg||r&&(!("alg"in c)||c.alg!==r))}catch{return!1}}const Ob=M("$ZodJWT",(e,r)=>{De.init(e,r),e._zod.check=i=>{Ab(i.value,r.alg)||i.issues.push({code:"invalid_format",format:"jwt",input:i.value,inst:e,continue:!r.abort})}}),Nb=M("$ZodUnknown",(e,r)=>{it.init(e,r),e._zod.parse=i=>i}),Lb=M("$ZodNever",(e,r)=>{it.init(e,r),e._zod.parse=(i,a)=>(i.issues.push({expected:"never",code:"invalid_type",input:i.value,inst:e}),i)});function Bm(e,r,i){e.issues.length&&r.issues.push(...Ug(i,e.issues)),r.value[i]=e.value}const Mb=M("$ZodArray",(e,r)=>{it.init(e,r),e._zod.parse=(i,a)=>{const c=i.value;if(!Array.isArray(c))return i.issues.push({expected:"array",code:"invalid_type",input:c,inst:e}),i;i.value=Array(c.length);const d=[];for(let f=0;f<c.length;f++){const h=c[f],x=r.element._zod.run({value:h,issues:[]},a);x instanceof Promise?d.push(x.then(y=>Bm(y,i,f))):Bm(x,i,f)}return d.length?Promise.all(d).then(()=>i):i}});function Pa(e,r,i,a,c,d){const f=i in a;if(e.issues.length){if(c&&d&&!f)return;r.issues.push(...Ug(i,e.issues))}if(!f&&!c){e.issues.length||r.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[i]});return}e.value===void 0?f&&(r.value[i]=void 0):r.value[i]=e.value}function Qg(e){var a,c,d,f;const r=Object.keys(e.shape);for(const h of r)if(!((f=(d=(c=(a=e.shape)==null?void 0:a[h])==null?void 0:c._zod)==null?void 0:d.traits)!=null&&f.has("$ZodType")))throw new Error(`Invalid element at key "${h}": expected a Zod schema`);const i=lw(e.shape);return{...e,keys:r,keySet:new Set(r),numKeys:r.length,optionalKeys:new Set(i)}}function Yg(e,r,i,a,c,d){const f=[],h=c.keySet,x=c.catchall._zod,y=x.def.type,v=x.optin==="optional",b=x.optout==="optional";for(const S in r){if(S==="__proto__"||h.has(S))continue;if(y==="never"){f.push(S);continue}const E=x.run({value:r[S],issues:[]},a);E instanceof Promise?e.push(E.then(O=>Pa(O,i,S,r,v,b))):Pa(E,i,S,r,v,b)}return f.length&&i.issues.push({code:"unrecognized_keys",keys:f,input:r,inst:d}),e.length?Promise.all(e).then(()=>i):i}const Db=M("$ZodObject",(e,r)=>{it.init(e,r);const i=Object.getOwnPropertyDescriptor(r,"shape");if(!(i!=null&&i.get)){const h=r.shape;Object.defineProperty(r,"shape",{get:()=>{const x={...h};return Object.defineProperty(r,"shape",{value:x}),x}})}const a=Xu(()=>Qg(r));Pe(e._zod,"propValues",()=>{const h=r.shape,x={};for(const y in h){const v=h[y]._zod;if(v.values){x[y]??(x[y]=new Set);for(const b of v.values)x[y].add(b)}}return x});const c=_a,d=r.catchall;let f;e._zod.parse=(h,x)=>{f??(f=a.value);const y=h.value;if(!c(y))return h.issues.push({expected:"object",code:"invalid_type",input:y,inst:e}),h;h.value={};const v=[],b=f.shape;for(const S of f.keys){const E=b[S],O=E._zod.optin==="optional",$=E._zod.optout==="optional",A=E._zod.run({value:y[S],issues:[]},x);A instanceof Promise?v.push(A.then(N=>Pa(N,h,S,y,O,$))):Pa(A,h,S,y,O,$)}return d?Yg(v,y,h,x,a.value,e):v.length?Promise.all(v).then(()=>h):h}}),Bb=M("$ZodObjectJIT",(e,r)=>{Db.init(e,r);const i=e._zod.parse,a=Xu(()=>Qg(r)),c=S=>{var V,J;const E=new cb(["shape","payload","ctx"]),O=a.value,$=Q=>{const H=Mm(Q);return`shape[${H}]._zod.run({ value: input[${H}], issues: [] }, ctx)`};E.write("const input = payload.value;");const A=Object.create(null);let N=0;for(const Q of O.keys)A[Q]=`key_${N++}`;E.write("const newResult = {};");for(const Q of O.keys){const H=A[Q],W=Mm(Q),X=S[Q],te=((V=X==null?void 0:X._zod)==null?void 0:V.optin)==="optional",I=((J=X==null?void 0:X._zod)==null?void 0:J.optout)==="optional";E.write(`const ${H} = ${$(Q)};`),te&&I?E.write(`
        if (${H}.issues.length) {
          if (${W} in input) {
            payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${W}, ...iss.path] : [${W}]
            })));
          }
        }
        
        if (${H}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${H}.value;
        }
        
      `):te?E.write(`
        if (${H}.issues.length) {
          payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        
        if (${H}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${H}.value;
        }
        
      `):E.write(`
        const ${H}_present = ${W} in input;
        if (${H}.issues.length) {
          payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        if (!${H}_present && !${H}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${W}]
          });
        }

        if (${H}_present) {
          if (${H}.value === undefined) {
            newResult[${W}] = undefined;
          } else {
            newResult[${W}] = ${H}.value;
          }
        }

      `)}E.write("payload.value = newResult;"),E.write("return payload;");const R=E.compile();return(Q,H)=>R(S,Q,H)};let d;const f=_a,h=!Ku.jitless,y=h&&sw.value,v=r.catchall;let b;e._zod.parse=(S,E)=>{b??(b=a.value);const O=S.value;return f(O)?h&&y&&(E==null?void 0:E.async)===!1&&E.jitless!==!0?(d||(d=c(r.shape)),S=d(S,E),v?Yg([],O,S,E,b,e):S):i(S,E):(S.issues.push({expected:"object",code:"invalid_type",input:O,inst:e}),S)}});function Fm(e,r,i,a){for(const d of e)if(d.issues.length===0)return r.value=d.value,r;const c=e.filter(d=>!uo(d));return c.length===1?(r.value=c[0].value,c[0]):(r.issues.push({code:"invalid_union",input:r.value,inst:i,errors:e.map(d=>d.issues.map(f=>Pr(f,a,_r())))}),r)}const Fb=M("$ZodUnion",(e,r)=>{it.init(e,r),Pe(e._zod,"optin",()=>r.options.some(a=>a._zod.optin==="optional")?"optional":void 0),Pe(e._zod,"optout",()=>r.options.some(a=>a._zod.optout==="optional")?"optional":void 0),Pe(e._zod,"values",()=>{if(r.options.every(a=>a._zod.values))return new Set(r.options.flatMap(a=>Array.from(a._zod.values)))}),Pe(e._zod,"pattern",()=>{if(r.options.every(a=>a._zod.pattern)){const a=r.options.map(c=>c._zod.pattern);return new RegExp(`^(${a.map(c=>td(c.source)).join("|")})$`)}});const i=r.options.length===1?r.options[0]._zod.run:null;e._zod.parse=(a,c)=>{if(i)return i(a,c);let d=!1;const f=[];for(const h of r.options){const x=h._zod.run({value:a.value,issues:[]},c);if(x instanceof Promise)f.push(x),d=!0;else{if(x.issues.length===0)return x;f.push(x)}}return d?Promise.all(f).then(h=>Fm(h,a,e,c)):Fm(f,a,e,c)}}),Ub=M("$ZodIntersection",(e,r)=>{it.init(e,r),e._zod.parse=(i,a)=>{const c=i.value,d=r.left._zod.run({value:c,issues:[]},a),f=r.right._zod.run({value:c,issues:[]},a);return d instanceof Promise||f instanceof Promise?Promise.all([d,f]).then(([x,y])=>Um(i,x,y)):Um(i,d,f)}});function _u(e,r){if(e===r)return{valid:!0,data:e};if(e instanceof Date&&r instanceof Date&&+e==+r)return{valid:!0,data:e};if(Pi(e)&&Pi(r)){const i=Object.keys(r),a=Object.keys(e).filter(d=>i.indexOf(d)!==-1),c={...e,...r};for(const d of a){const f=_u(e[d],r[d]);if(!f.valid)return{valid:!1,mergeErrorPath:[d,...f.mergeErrorPath]};c[d]=f.data}return{valid:!0,data:c}}if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return{valid:!1,mergeErrorPath:[]};const i=[];for(let a=0;a<e.length;a++){const c=e[a],d=r[a],f=_u(c,d);if(!f.valid)return{valid:!1,mergeErrorPath:[a,...f.mergeErrorPath]};i.push(f.data)}return{valid:!0,data:i}}return{valid:!1,mergeErrorPath:[]}}function Um(e,r,i){const a=new Map;let c;for(const h of r.issues)if(h.code==="unrecognized_keys"){c??(c=h);for(const x of h.keys)a.has(x)||a.set(x,{}),a.get(x).l=!0}else e.issues.push(h);for(const h of i.issues)if(h.code==="unrecognized_keys")for(const x of h.keys)a.has(x)||a.set(x,{}),a.get(x).r=!0;else e.issues.push(h);const d=[...a].filter(([,h])=>h.l&&h.r).map(([h])=>h);if(d.length&&c&&e.issues.push({...c,keys:d}),uo(e))return e;const f=_u(r.value,i.value);if(!f.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);return e.value=f.data,e}const Wb=M("$ZodEnum",(e,r)=>{it.init(e,r);const i=Dg(r.entries),a=new Set(i);e._zod.values=a,e._zod.pattern=new RegExp(`^(${i.filter(c=>aw.has(typeof c)).map(c=>typeof c=="string"?Wa(c):c.toString()).join("|")})$`),e._zod.parse=(c,d)=>{const f=c.value;return a.has(f)||c.issues.push({code:"invalid_value",values:i,input:f,inst:e}),c}}),Zb=M("$ZodTransform",(e,r)=>{it.init(e,r),e._zod.optin="optional",e._zod.parse=(i,a)=>{if(a.direction==="backward")throw new Mg(e.constructor.name);const c=r.transform(i.value,i);if(a.async)return(c instanceof Promise?c:Promise.resolve(c)).then(f=>(i.value=f,i.fallback=!0,i));if(c instanceof Promise)throw new po;return i.value=c,i.fallback=!0,i}});function Wm(e,r){return r===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}const Kg=M("$ZodOptional",(e,r)=>{it.init(e,r),e._zod.optin="optional",e._zod.optout="optional",Pe(e._zod,"values",()=>r.innerType._zod.values?new Set([...r.innerType._zod.values,void 0]):void 0),Pe(e._zod,"pattern",()=>{const i=r.innerType._zod.pattern;return i?new RegExp(`^(${td(i.source)})?$`):void 0}),e._zod.parse=(i,a)=>{if(r.innerType._zod.optin==="optional"){const c=i.value,d=r.innerType._zod.run(i,a);return d instanceof Promise?d.then(f=>Wm(f,c)):Wm(d,c)}return i.value===void 0?i:r.innerType._zod.run(i,a)}}),qb=M("$ZodExactOptional",(e,r)=>{Kg.init(e,r),Pe(e._zod,"values",()=>r.innerType._zod.values),Pe(e._zod,"pattern",()=>r.innerType._zod.pattern),e._zod.parse=(i,a)=>r.innerType._zod.run(i,a)}),Hb=M("$ZodNullable",(e,r)=>{it.init(e,r),Pe(e._zod,"optin",()=>r.innerType._zod.optin),Pe(e._zod,"optout",()=>r.innerType._zod.optout),Pe(e._zod,"pattern",()=>{const i=r.innerType._zod.pattern;return i?new RegExp(`^(${td(i.source)}|null)$`):void 0}),Pe(e._zod,"values",()=>r.innerType._zod.values?new Set([...r.innerType._zod.values,null]):void 0),e._zod.parse=(i,a)=>i.value===null?i:r.innerType._zod.run(i,a)}),Vb=M("$ZodDefault",(e,r)=>{it.init(e,r),e._zod.optin="optional",Pe(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(i,a)=>{if(a.direction==="backward")return r.innerType._zod.run(i,a);if(i.value===void 0)return i.value=r.defaultValue,i;const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(d=>Zm(d,r)):Zm(c,r)}});function Zm(e,r){return e.value===void 0&&(e.value=r.defaultValue),e}const Jb=M("$ZodPrefault",(e,r)=>{it.init(e,r),e._zod.optin="optional",Pe(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(i,a)=>(a.direction==="backward"||i.value===void 0&&(i.value=r.defaultValue),r.innerType._zod.run(i,a))}),Gb=M("$ZodNonOptional",(e,r)=>{it.init(e,r),Pe(e._zod,"values",()=>{const i=r.innerType._zod.values;return i?new Set([...i].filter(a=>a!==void 0)):void 0}),e._zod.parse=(i,a)=>{const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(d=>qm(d,e)):qm(c,e)}});function qm(e,r){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:r}),e}const Qb=M("$ZodCatch",(e,r)=>{it.init(e,r),e._zod.optin="optional",Pe(e._zod,"optout",()=>r.innerType._zod.optout),Pe(e._zod,"values",()=>r.innerType._zod.values),e._zod.parse=(i,a)=>{if(a.direction==="backward")return r.innerType._zod.run(i,a);const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(d=>(i.value=d.value,d.issues.length&&(i.value=r.catchValue({...i,error:{issues:d.issues.map(f=>Pr(f,a,_r()))},input:i.value}),i.issues=[],i.fallback=!0),i)):(i.value=c.value,c.issues.length&&(i.value=r.catchValue({...i,error:{issues:c.issues.map(d=>Pr(d,a,_r()))},input:i.value}),i.issues=[],i.fallback=!0),i)}}),Yb=M("$ZodPipe",(e,r)=>{it.init(e,r),Pe(e._zod,"values",()=>r.in._zod.values),Pe(e._zod,"optin",()=>r.in._zod.optin),Pe(e._zod,"optout",()=>r.out._zod.optout),Pe(e._zod,"propValues",()=>r.in._zod.propValues),e._zod.parse=(i,a)=>{if(a.direction==="backward"){const d=r.out._zod.run(i,a);return d instanceof Promise?d.then(f=>Xs(f,r.in,a)):Xs(d,r.in,a)}const c=r.in._zod.run(i,a);return c instanceof Promise?c.then(d=>Xs(d,r.out,a)):Xs(c,r.out,a)}});function Xs(e,r,i){return e.issues.length?(e.aborted=!0,e):r._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},i)}const Kb=M("$ZodReadonly",(e,r)=>{it.init(e,r),Pe(e._zod,"propValues",()=>r.innerType._zod.propValues),Pe(e._zod,"values",()=>r.innerType._zod.values),Pe(e._zod,"optin",()=>{var i,a;return(a=(i=r.innerType)==null?void 0:i._zod)==null?void 0:a.optin}),Pe(e._zod,"optout",()=>{var i,a;return(a=(i=r.innerType)==null?void 0:i._zod)==null?void 0:a.optout}),e._zod.parse=(i,a)=>{if(a.direction==="backward")return r.innerType._zod.run(i,a);const c=r.innerType._zod.run(i,a);return c instanceof Promise?c.then(Hm):Hm(c)}});function Hm(e){return e.value=Object.freeze(e.value),e}const Xb=M("$ZodCustom",(e,r)=>{jn.init(e,r),it.init(e,r),e._zod.parse=(i,a)=>i,e._zod.check=i=>{const a=i.value,c=r.fn(a);if(c instanceof Promise)return c.then(d=>Vm(d,i,a,e));Vm(c,i,a,e)}});function Vm(e,r,i,a){if(!e){const c={code:"custom",input:i,inst:a,path:[...a._zod.def.path??[]],continue:!a._zod.def.abort};a._zod.def.params&&(c.params=a._zod.def.params),r.issues.push(Ei(c))}}var Jm;class ek{constructor(){this._map=new WeakMap,this._idmap=new Map}add(r,...i){const a=i[0];return this._map.set(r,a),a&&typeof a=="object"&&"id"in a&&this._idmap.set(a.id,r),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(r){const i=this._map.get(r);return i&&typeof i=="object"&&"id"in i&&this._idmap.delete(i.id),this._map.delete(r),this}get(r){const i=r._zod.parent;if(i){const a={...this.get(i)??{}};delete a.id;const c={...a,...this._map.get(r)};return Object.keys(c).length?c:void 0}return this._map.get(r)}has(r){return this._map.has(r)}}function tk(){return new ek}(Jm=globalThis).__zod_globalRegistry??(Jm.__zod_globalRegistry=tk());const wi=globalThis.__zod_globalRegistry;function nk(e,r){return new e({type:"string",...fe(r)})}function rk(e,r){return new e({type:"string",format:"email",check:"string_format",abort:!1,...fe(r)})}function Gm(e,r){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...fe(r)})}function ok(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...fe(r)})}function ik(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...fe(r)})}function sk(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...fe(r)})}function ak(e,r){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...fe(r)})}function lk(e,r){return new e({type:"string",format:"url",check:"string_format",abort:!1,...fe(r)})}function ck(e,r){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...fe(r)})}function uk(e,r){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...fe(r)})}function dk(e,r){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...fe(r)})}function fk(e,r){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...fe(r)})}function pk(e,r){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...fe(r)})}function mk(e,r){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...fe(r)})}function hk(e,r){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...fe(r)})}function gk(e,r){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...fe(r)})}function xk(e,r){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...fe(r)})}function yk(e,r){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...fe(r)})}function vk(e,r){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...fe(r)})}function wk(e,r){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...fe(r)})}function bk(e,r){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...fe(r)})}function kk(e,r){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...fe(r)})}function Sk(e,r){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...fe(r)})}function jk(e,r){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...fe(r)})}function $k(e,r){return new e({type:"string",format:"date",check:"string_format",...fe(r)})}function zk(e,r){return new e({type:"string",format:"time",check:"string_format",precision:null,...fe(r)})}function Ck(e,r){return new e({type:"string",format:"duration",check:"string_format",...fe(r)})}function _k(e){return new e({type:"unknown"})}function Pk(e,r){return new e({type:"never",...fe(r)})}function Xg(e,r){return new Xw({check:"max_length",...fe(r),maximum:e})}function Ea(e,r){return new eb({check:"min_length",...fe(r),minimum:e})}function e0(e,r){return new tb({check:"length_equals",...fe(r),length:e})}function Ek(e,r){return new nb({check:"string_format",format:"regex",...fe(r),pattern:e})}function Tk(e){return new rb({check:"string_format",format:"lowercase",...fe(e)})}function Ik(e){return new ob({check:"string_format",format:"uppercase",...fe(e)})}function Rk(e,r){return new ib({check:"string_format",format:"includes",...fe(r),includes:e})}function Ak(e,r){return new sb({check:"string_format",format:"starts_with",...fe(r),prefix:e})}function Ok(e,r){return new ab({check:"string_format",format:"ends_with",...fe(r),suffix:e})}function jo(e){return new lb({check:"overwrite",tx:e})}function Nk(e){return jo(r=>r.normalize(e))}function Lk(){return jo(e=>e.trim())}function Mk(){return jo(e=>e.toLowerCase())}function Dk(){return jo(e=>e.toUpperCase())}function Bk(){return jo(e=>iw(e))}function Fk(e,r,i){return new e({type:"array",element:r,...fe(i)})}function Uk(e,r,i){return new e({type:"custom",check:"custom",fn:r,...fe(i)})}function Wk(e,r){const i=Zk(a=>(a.addIssue=c=>{if(typeof c=="string")a.issues.push(Ei(c,a.value,i._zod.def));else{const d=c;d.fatal&&(d.continue=!1),d.code??(d.code="custom"),d.input??(d.input=a.value),d.inst??(d.inst=i),d.continue??(d.continue=!i._zod.def.abort),a.issues.push(Ei(d))}},e(a.value,a)),r);return i}function Zk(e,r){const i=new jn({check:"custom",...fe(r)});return i._zod.check=e,i}function t0(e){let r=(e==null?void 0:e.target)??"draft-2020-12";return r==="draft-4"&&(r="draft-04"),r==="draft-7"&&(r="draft-07"),{processors:e.processors??{},metadataRegistry:(e==null?void 0:e.metadata)??wi,target:r,unrepresentable:(e==null?void 0:e.unrepresentable)??"throw",override:(e==null?void 0:e.override)??(()=>{}),io:(e==null?void 0:e.io)??"output",counter:0,seen:new Map,cycles:(e==null?void 0:e.cycles)??"ref",reused:(e==null?void 0:e.reused)??"inline",external:(e==null?void 0:e.external)??void 0}}function yt(e,r,i={path:[],schemaPath:[]}){var v,b;var a;const c=e._zod.def,d=r.seen.get(e);if(d)return d.count++,i.schemaPath.includes(e)&&(d.cycle=i.path),d.schema;const f={schema:{},count:1,cycle:void 0,path:i.path};r.seen.set(e,f);const h=(b=(v=e._zod).toJSONSchema)==null?void 0:b.call(v);if(h)f.schema=h;else{const S={...i,schemaPath:[...i.schemaPath,e],path:i.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(r,f.schema,S);else{const O=f.schema,$=r.processors[c.type];if(!$)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);$(e,r,O,S)}const E=e._zod.parent;E&&(f.ref||(f.ref=E),yt(E,r,S),r.seen.get(E).isParent=!0)}const x=r.metadataRegistry.get(e);return x&&Object.assign(f.schema,x),r.io==="input"&&_t(e)&&(delete f.schema.examples,delete f.schema.default),r.io==="input"&&"_prefault"in f.schema&&((a=f.schema).default??(a.default=f.schema._prefault)),delete f.schema._prefault,r.seen.get(e).schema}function n0(e,r){var f,h,x,y;const i=e.seen.get(r);if(!i)throw new Error("Unprocessed schema. This is a bug in Zod.");const a=new Map;for(const v of e.seen.entries()){const b=(f=e.metadataRegistry.get(v[0]))==null?void 0:f.id;if(b){const S=a.get(b);if(S&&S!==v[0])throw new Error(`Duplicate schema id "${b}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);a.set(b,v[0])}}const c=v=>{var $;const b=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){const A=($=e.external.registry.get(v[0]))==null?void 0:$.id,N=e.external.uri??(V=>V);if(A)return{ref:N(A)};const R=v[1].defId??v[1].schema.id??`schema${e.counter++}`;return v[1].defId=R,{defId:R,ref:`${N("__shared")}#/${b}/${R}`}}if(v[1]===i)return{ref:"#"};const E=`#/${b}/`,O=v[1].schema.id??`__schema${e.counter++}`;return{defId:O,ref:E+O}},d=v=>{if(v[1].schema.$ref)return;const b=v[1],{ref:S,defId:E}=c(v);b.def={...b.schema},E&&(b.defId=E);const O=b.schema;for(const $ in O)delete O[$];O.$ref=S};if(e.cycles==="throw")for(const v of e.seen.entries()){const b=v[1];if(b.cycle)throw new Error(`Cycle detected: #/${(h=b.cycle)==null?void 0:h.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const v of e.seen.entries()){const b=v[1];if(r===v[0]){d(v);continue}if(e.external){const E=(x=e.external.registry.get(v[0]))==null?void 0:x.id;if(r!==v[0]&&E){d(v);continue}}if((y=e.metadataRegistry.get(v[0]))==null?void 0:y.id){d(v);continue}if(b.cycle){d(v);continue}if(b.count>1&&e.reused==="ref"){d(v);continue}}}function r0(e,r){var h,x,y,v;const i=e.seen.get(r);if(!i)throw new Error("Unprocessed schema. This is a bug in Zod.");const a=b=>{const S=e.seen.get(b);if(S.ref===null)return;const E=S.def??S.schema,O={...E},$=S.ref;if(S.ref=null,$){a($);const N=e.seen.get($),R=N.schema;if(R.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0")?(E.allOf=E.allOf??[],E.allOf.push(R)):Object.assign(E,R),Object.assign(E,O),b._zod.parent===$)for(const J in E)J==="$ref"||J==="allOf"||J in O||delete E[J];if(R.$ref&&N.def)for(const J in E)J==="$ref"||J==="allOf"||J in N.def&&JSON.stringify(E[J])===JSON.stringify(N.def[J])&&delete E[J]}const A=b._zod.parent;if(A&&A!==$){a(A);const N=e.seen.get(A);if(N!=null&&N.schema.$ref&&(E.$ref=N.schema.$ref,N.def))for(const R in E)R==="$ref"||R==="allOf"||R in N.def&&JSON.stringify(E[R])===JSON.stringify(N.def[R])&&delete E[R]}e.override({zodSchema:b,jsonSchema:E,path:S.path??[]})};for(const b of[...e.seen.entries()].reverse())a(b[0]);const c={};if(e.target==="draft-2020-12"?c.$schema="https://json-schema.org/draft/2020-12/schema":e.target==="draft-07"?c.$schema="http://json-schema.org/draft-07/schema#":e.target==="draft-04"?c.$schema="http://json-schema.org/draft-04/schema#":e.target,(h=e.external)!=null&&h.uri){const b=(x=e.external.registry.get(r))==null?void 0:x.id;if(!b)throw new Error("Schema is missing an `id` property");c.$id=e.external.uri(b)}Object.assign(c,i.def??i.schema);const d=(y=e.metadataRegistry.get(r))==null?void 0:y.id;d!==void 0&&c.id===d&&delete c.id;const f=((v=e.external)==null?void 0:v.defs)??{};for(const b of e.seen.entries()){const S=b[1];S.def&&S.defId&&(S.def.id===S.defId&&delete S.def.id,f[S.defId]=S.def)}e.external||Object.keys(f).length>0&&(e.target==="draft-2020-12"?c.$defs=f:c.definitions=f);try{const b=JSON.parse(JSON.stringify(c));return Object.defineProperty(b,"~standard",{value:{...r["~standard"],jsonSchema:{input:Ta(r,"input",e.processors),output:Ta(r,"output",e.processors)}},enumerable:!1,writable:!1}),b}catch{throw new Error("Error converting schema to JSON.")}}function _t(e,r){const i=r??{seen:new Set};if(i.seen.has(e))return!1;i.seen.add(e);const a=e._zod.def;if(a.type==="transform")return!0;if(a.type==="array")return _t(a.element,i);if(a.type==="set")return _t(a.valueType,i);if(a.type==="lazy")return _t(a.getter(),i);if(a.type==="promise"||a.type==="optional"||a.type==="nonoptional"||a.type==="nullable"||a.type==="readonly"||a.type==="default"||a.type==="prefault")return _t(a.innerType,i);if(a.type==="intersection")return _t(a.left,i)||_t(a.right,i);if(a.type==="record"||a.type==="map")return _t(a.keyType,i)||_t(a.valueType,i);if(a.type==="pipe")return e._zod.traits.has("$ZodCodec")?!0:_t(a.in,i)||_t(a.out,i);if(a.type==="object"){for(const c in a.shape)if(_t(a.shape[c],i))return!0;return!1}if(a.type==="union"){for(const c of a.options)if(_t(c,i))return!0;return!1}if(a.type==="tuple"){for(const c of a.items)if(_t(c,i))return!0;return!!(a.rest&&_t(a.rest,i))}return!1}const qk=(e,r={})=>i=>{const a=t0({...i,processors:r});return yt(e,a),n0(a,e),r0(a,e)},Ta=(e,r,i={})=>a=>{const{libraryOptions:c,target:d}=a??{},f=t0({...c??{},target:d,io:r,processors:i});return yt(e,f),n0(f,e),r0(f,e)},Hk={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Vk=(e,r,i,a)=>{const c=i;c.type="string";const{minimum:d,maximum:f,format:h,patterns:x,contentEncoding:y}=e._zod.bag;if(typeof d=="number"&&(c.minLength=d),typeof f=="number"&&(c.maxLength=f),h&&(c.format=Hk[h]??h,c.format===""&&delete c.format,h==="time"&&delete c.format),y&&(c.contentEncoding=y),x&&x.size>0){const v=[...x];v.length===1?c.pattern=v[0].source:v.length>1&&(c.allOf=[...v.map(b=>({...r.target==="draft-07"||r.target==="draft-04"||r.target==="openapi-3.0"?{type:"string"}:{},pattern:b.source}))])}},Jk=(e,r,i,a)=>{i.not={}},Gk=(e,r,i,a)=>{},Qk=(e,r,i,a)=>{const c=e._zod.def,d=Dg(c.entries);d.every(f=>typeof f=="number")&&(i.type="number"),d.every(f=>typeof f=="string")&&(i.type="string"),i.enum=d},Yk=(e,r,i,a)=>{if(r.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},Kk=(e,r,i,a)=>{if(r.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},Xk=(e,r,i,a)=>{const c=i,d=e._zod.def,{minimum:f,maximum:h}=e._zod.bag;typeof f=="number"&&(c.minItems=f),typeof h=="number"&&(c.maxItems=h),c.type="array",c.items=yt(d.element,r,{...a,path:[...a.path,"items"]})},eS=(e,r,i,a)=>{var y;const c=i,d=e._zod.def;c.type="object",c.properties={};const f=d.shape;for(const v in f)c.properties[v]=yt(f[v],r,{...a,path:[...a.path,"properties",v]});const h=new Set(Object.keys(f)),x=new Set([...h].filter(v=>{const b=d.shape[v]._zod;return r.io==="input"?b.optin===void 0:b.optout===void 0}));x.size>0&&(c.required=Array.from(x)),((y=d.catchall)==null?void 0:y._zod.def.type)==="never"?c.additionalProperties=!1:d.catchall?d.catchall&&(c.additionalProperties=yt(d.catchall,r,{...a,path:[...a.path,"additionalProperties"]})):r.io==="output"&&(c.additionalProperties=!1)},tS=(e,r,i,a)=>{const c=e._zod.def,d=c.inclusive===!1,f=c.options.map((h,x)=>yt(h,r,{...a,path:[...a.path,d?"oneOf":"anyOf",x]}));d?i.oneOf=f:i.anyOf=f},nS=(e,r,i,a)=>{const c=e._zod.def,d=yt(c.left,r,{...a,path:[...a.path,"allOf",0]}),f=yt(c.right,r,{...a,path:[...a.path,"allOf",1]}),h=y=>"allOf"in y&&Object.keys(y).length===1,x=[...h(d)?d.allOf:[d],...h(f)?f.allOf:[f]];i.allOf=x},rS=(e,r,i,a)=>{const c=e._zod.def,d=yt(c.innerType,r,a),f=r.seen.get(e);r.target==="openapi-3.0"?(f.ref=c.innerType,i.nullable=!0):i.anyOf=[d,{type:"null"}]},oS=(e,r,i,a)=>{const c=e._zod.def;yt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType},iS=(e,r,i,a)=>{const c=e._zod.def;yt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType,i.default=JSON.parse(JSON.stringify(c.defaultValue))},sS=(e,r,i,a)=>{const c=e._zod.def;yt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType,r.io==="input"&&(i._prefault=JSON.parse(JSON.stringify(c.defaultValue)))},aS=(e,r,i,a)=>{const c=e._zod.def;yt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType;let f;try{f=c.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}i.default=f},lS=(e,r,i,a)=>{const c=e._zod.def,d=c.in._zod.traits.has("$ZodTransform"),f=r.io==="input"?d?c.out:c.in:c.out;yt(f,r,a);const h=r.seen.get(e);h.ref=f},cS=(e,r,i,a)=>{const c=e._zod.def;yt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType,i.readOnly=!0},o0=(e,r,i,a)=>{const c=e._zod.def;yt(c.innerType,r,a);const d=r.seen.get(e);d.ref=c.innerType},uS=M("ZodISODateTime",(e,r)=>{kb.init(e,r),We.init(e,r)});function dS(e){return jk(uS,e)}const fS=M("ZodISODate",(e,r)=>{Sb.init(e,r),We.init(e,r)});function pS(e){return $k(fS,e)}const mS=M("ZodISOTime",(e,r)=>{jb.init(e,r),We.init(e,r)});function hS(e){return zk(mS,e)}const gS=M("ZodISODuration",(e,r)=>{$b.init(e,r),We.init(e,r)});function xS(e){return Ck(gS,e)}const yS=(e,r)=>{Zg.init(e,r),e.name="ZodError",Object.defineProperties(e,{format:{value:i=>yw(e,i)},flatten:{value:i=>xw(e,i)},addIssue:{value:i=>{e.issues.push(i),e.message=JSON.stringify(e.issues,Cu,2)}},addIssues:{value:i=>{e.issues.push(...i),e.message=JSON.stringify(e.issues,Cu,2)}},isEmpty:{get(){return e.issues.length===0}}})},en=M("ZodError",yS,{Parent:Error}),vS=rd(en),wS=od(en),bS=Za(en),kS=qa(en),SS=bw(en),jS=kw(en),$S=Sw(en),zS=jw(en),CS=$w(en),_S=zw(en),PS=Cw(en),ES=_w(en),Qm=new WeakMap;function Va(e,r,i){const a=Object.getPrototypeOf(e);let c=Qm.get(a);if(c||(c=new Set,Qm.set(a,c)),!c.has(r)){c.add(r);for(const d in i){const f=i[d];Object.defineProperty(a,d,{configurable:!0,enumerable:!1,get(){const h=f.bind(this);return Object.defineProperty(this,d,{configurable:!0,writable:!0,enumerable:!0,value:h}),h},set(h){Object.defineProperty(this,d,{configurable:!0,writable:!0,enumerable:!0,value:h})}})}}}const st=M("ZodType",(e,r)=>(it.init(e,r),Object.assign(e["~standard"],{jsonSchema:{input:Ta(e,"input"),output:Ta(e,"output")}}),e.toJSONSchema=qk(e,{}),e.def=r,e.type=r.type,Object.defineProperty(e,"_def",{value:r}),e.parse=(i,a)=>vS(e,i,a,{callee:e.parse}),e.safeParse=(i,a)=>bS(e,i,a),e.parseAsync=async(i,a)=>wS(e,i,a,{callee:e.parseAsync}),e.safeParseAsync=async(i,a)=>kS(e,i,a),e.spa=e.safeParseAsync,e.encode=(i,a)=>SS(e,i,a),e.decode=(i,a)=>jS(e,i,a),e.encodeAsync=async(i,a)=>$S(e,i,a),e.decodeAsync=async(i,a)=>zS(e,i,a),e.safeEncode=(i,a)=>CS(e,i,a),e.safeDecode=(i,a)=>_S(e,i,a),e.safeEncodeAsync=async(i,a)=>PS(e,i,a),e.safeDecodeAsync=async(i,a)=>ES(e,i,a),Va(e,"ZodType",{check(...i){const a=this.def;return this.clone(ar(a,{checks:[...a.checks??[],...i.map(c=>typeof c=="function"?{_zod:{check:c,def:{check:"custom"},onattach:[]}}:c)]}),{parent:!0})},with(...i){return this.check(...i)},clone(i,a){return lr(this,i,a)},brand(){return this},register(i,a){return i.add(this,a),this},refine(i,a){return this.check(Sj(i,a))},superRefine(i,a){return this.check(jj(i,a))},overwrite(i){return this.check(jo(i))},optional(){return Xm(this)},exactOptional(){return uj(this)},nullable(){return eh(this)},nullish(){return Xm(eh(this))},nonoptional(i){return gj(this,i)},array(){return XS(this)},or(i){return rj([this,i])},and(i){return ij(this,i)},transform(i){return th(this,lj(i))},default(i){return pj(this,i)},prefault(i){return hj(this,i)},catch(i){return yj(this,i)},pipe(i){return th(this,i)},readonly(){return bj(this)},describe(i){const a=this.clone();return wi.add(a,{description:i}),a},meta(...i){if(i.length===0)return wi.get(this);const a=this.clone();return wi.add(a,i[0]),a},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(i){return i(this)}}),Object.defineProperty(e,"description",{get(){var i;return(i=wi.get(e))==null?void 0:i.description},configurable:!0}),e)),i0=M("_ZodString",(e,r)=>{id.init(e,r),st.init(e,r),e._zod.processJSONSchema=(a,c,d)=>Vk(e,a,c);const i=e._zod.bag;e.format=i.format??null,e.minLength=i.minimum??null,e.maxLength=i.maximum??null,Va(e,"_ZodString",{regex(...a){return this.check(Ek(...a))},includes(...a){return this.check(Rk(...a))},startsWith(...a){return this.check(Ak(...a))},endsWith(...a){return this.check(Ok(...a))},min(...a){return this.check(Ea(...a))},max(...a){return this.check(Xg(...a))},length(...a){return this.check(e0(...a))},nonempty(...a){return this.check(Ea(1,...a))},lowercase(a){return this.check(Tk(a))},uppercase(a){return this.check(Ik(a))},trim(){return this.check(Lk())},normalize(...a){return this.check(Nk(...a))},toLowerCase(){return this.check(Mk())},toUpperCase(){return this.check(Dk())},slugify(){return this.check(Bk())}})}),TS=M("ZodString",(e,r)=>{id.init(e,r),i0.init(e,r),e.email=i=>e.check(rk(IS,i)),e.url=i=>e.check(lk(RS,i)),e.jwt=i=>e.check(Sk(JS,i)),e.emoji=i=>e.check(ck(AS,i)),e.guid=i=>e.check(Gm(Ym,i)),e.uuid=i=>e.check(ok(ea,i)),e.uuidv4=i=>e.check(ik(ea,i)),e.uuidv6=i=>e.check(sk(ea,i)),e.uuidv7=i=>e.check(ak(ea,i)),e.nanoid=i=>e.check(uk(OS,i)),e.guid=i=>e.check(Gm(Ym,i)),e.cuid=i=>e.check(dk(NS,i)),e.cuid2=i=>e.check(fk(LS,i)),e.ulid=i=>e.check(pk(MS,i)),e.base64=i=>e.check(wk(qS,i)),e.base64url=i=>e.check(bk(HS,i)),e.xid=i=>e.check(mk(DS,i)),e.ksuid=i=>e.check(hk(BS,i)),e.ipv4=i=>e.check(gk(FS,i)),e.ipv6=i=>e.check(xk(US,i)),e.cidrv4=i=>e.check(yk(WS,i)),e.cidrv6=i=>e.check(vk(ZS,i)),e.e164=i=>e.check(kk(VS,i)),e.datetime=i=>e.check(dS(i)),e.date=i=>e.check(pS(i)),e.time=i=>e.check(hS(i)),e.duration=i=>e.check(xS(i))});function nu(e){return nk(TS,e)}const We=M("ZodStringFormat",(e,r)=>{De.init(e,r),i0.init(e,r)}),IS=M("ZodEmail",(e,r)=>{pb.init(e,r),We.init(e,r)}),Ym=M("ZodGUID",(e,r)=>{db.init(e,r),We.init(e,r)}),ea=M("ZodUUID",(e,r)=>{fb.init(e,r),We.init(e,r)}),RS=M("ZodURL",(e,r)=>{mb.init(e,r),We.init(e,r)}),AS=M("ZodEmoji",(e,r)=>{hb.init(e,r),We.init(e,r)}),OS=M("ZodNanoID",(e,r)=>{gb.init(e,r),We.init(e,r)}),NS=M("ZodCUID",(e,r)=>{xb.init(e,r),We.init(e,r)}),LS=M("ZodCUID2",(e,r)=>{yb.init(e,r),We.init(e,r)}),MS=M("ZodULID",(e,r)=>{vb.init(e,r),We.init(e,r)}),DS=M("ZodXID",(e,r)=>{wb.init(e,r),We.init(e,r)}),BS=M("ZodKSUID",(e,r)=>{bb.init(e,r),We.init(e,r)}),FS=M("ZodIPv4",(e,r)=>{zb.init(e,r),We.init(e,r)}),US=M("ZodIPv6",(e,r)=>{Cb.init(e,r),We.init(e,r)}),WS=M("ZodCIDRv4",(e,r)=>{_b.init(e,r),We.init(e,r)}),ZS=M("ZodCIDRv6",(e,r)=>{Pb.init(e,r),We.init(e,r)}),qS=M("ZodBase64",(e,r)=>{Eb.init(e,r),We.init(e,r)}),HS=M("ZodBase64URL",(e,r)=>{Ib.init(e,r),We.init(e,r)}),VS=M("ZodE164",(e,r)=>{Rb.init(e,r),We.init(e,r)}),JS=M("ZodJWT",(e,r)=>{Ob.init(e,r),We.init(e,r)}),GS=M("ZodUnknown",(e,r)=>{Nb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Gk()});function Km(){return _k(GS)}const QS=M("ZodNever",(e,r)=>{Lb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Jk(e,i,a)});function YS(e){return Pk(QS,e)}const KS=M("ZodArray",(e,r)=>{Mb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Xk(e,i,a,c),e.element=r.element,Va(e,"ZodArray",{min(i,a){return this.check(Ea(i,a))},nonempty(i){return this.check(Ea(1,i))},max(i,a){return this.check(Xg(i,a))},length(i,a){return this.check(e0(i,a))},unwrap(){return this.element}})});function XS(e,r){return Fk(KS,e,r)}const ej=M("ZodObject",(e,r)=>{Bb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>eS(e,i,a,c),Pe(e,"shape",()=>r.shape),Va(e,"ZodObject",{keyof(){return sj(Object.keys(this._zod.def.shape))},catchall(i){return this.clone({...this._zod.def,catchall:i})},passthrough(){return this.clone({...this._zod.def,catchall:Km()})},loose(){return this.clone({...this._zod.def,catchall:Km()})},strict(){return this.clone({...this._zod.def,catchall:YS()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(i){return dw(this,i)},safeExtend(i){return fw(this,i)},merge(i){return pw(this,i)},pick(i){return cw(this,i)},omit(i){return uw(this,i)},partial(...i){return mw(s0,this,i[0])},required(...i){return hw(a0,this,i[0])}})});function tj(e,r){const i={type:"object",shape:e??{},...fe(r)};return new ej(i)}const nj=M("ZodUnion",(e,r)=>{Fb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>tS(e,i,a,c),e.options=r.options});function rj(e,r){return new nj({type:"union",options:e,...fe(r)})}const oj=M("ZodIntersection",(e,r)=>{Ub.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>nS(e,i,a,c)});function ij(e,r){return new oj({type:"intersection",left:e,right:r})}const Pu=M("ZodEnum",(e,r)=>{Wb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(a,c,d)=>Qk(e,a,c),e.enum=r.entries,e.options=Object.values(r.entries);const i=new Set(Object.keys(r.entries));e.extract=(a,c)=>{const d={};for(const f of a)if(i.has(f))d[f]=r.entries[f];else throw new Error(`Key ${f} not found in enum`);return new Pu({...r,checks:[],...fe(c),entries:d})},e.exclude=(a,c)=>{const d={...r.entries};for(const f of a)if(i.has(f))delete d[f];else throw new Error(`Key ${f} not found in enum`);return new Pu({...r,checks:[],...fe(c),entries:d})}});function sj(e,r){const i=Array.isArray(e)?Object.fromEntries(e.map(a=>[a,a])):e;return new Pu({type:"enum",entries:i,...fe(r)})}const aj=M("ZodTransform",(e,r)=>{Zb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Kk(e,i),e._zod.parse=(i,a)=>{if(a.direction==="backward")throw new Mg(e.constructor.name);i.addIssue=d=>{if(typeof d=="string")i.issues.push(Ei(d,i.value,r));else{const f=d;f.fatal&&(f.continue=!1),f.code??(f.code="custom"),f.input??(f.input=i.value),f.inst??(f.inst=e),i.issues.push(Ei(f))}};const c=r.transform(i.value,i);return c instanceof Promise?c.then(d=>(i.value=d,i.fallback=!0,i)):(i.value=c,i.fallback=!0,i)}});function lj(e){return new aj({type:"transform",transform:e})}const s0=M("ZodOptional",(e,r)=>{Kg.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>o0(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function Xm(e){return new s0({type:"optional",innerType:e})}const cj=M("ZodExactOptional",(e,r)=>{qb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>o0(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function uj(e){return new cj({type:"optional",innerType:e})}const dj=M("ZodNullable",(e,r)=>{Hb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>rS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function eh(e){return new dj({type:"nullable",innerType:e})}const fj=M("ZodDefault",(e,r)=>{Vb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>iS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function pj(e,r){return new fj({type:"default",innerType:e,get defaultValue(){return typeof r=="function"?r():Fg(r)}})}const mj=M("ZodPrefault",(e,r)=>{Jb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>sS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function hj(e,r){return new mj({type:"prefault",innerType:e,get defaultValue(){return typeof r=="function"?r():Fg(r)}})}const a0=M("ZodNonOptional",(e,r)=>{Gb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>oS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function gj(e,r){return new a0({type:"nonoptional",innerType:e,...fe(r)})}const xj=M("ZodCatch",(e,r)=>{Qb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>aS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function yj(e,r){return new xj({type:"catch",innerType:e,catchValue:typeof r=="function"?r:()=>r})}const vj=M("ZodPipe",(e,r)=>{Yb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>lS(e,i,a,c),e.in=r.in,e.out=r.out});function th(e,r){return new vj({type:"pipe",in:e,out:r})}const wj=M("ZodReadonly",(e,r)=>{Kb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>cS(e,i,a,c),e.unwrap=()=>e._zod.def.innerType});function bj(e){return new wj({type:"readonly",innerType:e})}const kj=M("ZodCustom",(e,r)=>{Xb.init(e,r),st.init(e,r),e._zod.processJSONSchema=(i,a,c)=>Yk(e,i)});function Sj(e,r={}){return Uk(kj,e,r)}function jj(e,r){return Wk(e,r)}tj({name:nu().min(2,"Nome deve ter ao menos 2 caracteres"),phone:nu().min(8,"Telefone inválido"),interest:nu().min(1,"Selecione um interesse")});const sd=ow(e=>({menuOpen:!1,setMenuOpen:r=>e({menuOpen:r}),toggleMenu:()=>e(r=>({menuOpen:!r.menuOpen})),contactInterest:"",setContactInterest:r=>e({contactInterest:r}),quizOpen:!1,openQuiz:()=>e({quizOpen:!0,quizStep:0,quizAnswers:{}}),closeQuiz:()=>e({quizOpen:!1}),quizStep:0,setQuizStep:r=>e({quizStep:r}),quizAnswers:{},setQuizAnswer:(r,i)=>e(a=>({quizAnswers:{...a.quizAnswers,[r]:i}})),resetQuiz:()=>e({quizStep:0,quizAnswers:{}})}));/*! *****************************************************************************
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
***************************************************************************** */var Eu=function(){return Eu=Object.assign||function(r){for(var i,a=1,c=arguments.length;a<c;a++){i=arguments[a];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(r[d]=i[d])}return r},Eu.apply(this,arguments)};function $j(e,r){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(i[a[c]]=e[a[c]]);return i}var mo="",Si=null,ya=null,l0=null;function ad(){mo="",Si!==null&&Si.disconnect(),ya!==null&&(window.clearTimeout(ya),ya=null)}function nh(e){var r=["BUTTON","INPUT","SELECT","TEXTAREA"],i=["A","AREA"];return r.includes(e.tagName)&&!e.hasAttribute("disabled")||i.includes(e.tagName)&&e.hasAttribute("href")}function rh(){var e=null;if(mo==="#")e=document.body;else{var r=mo.replace("#","");e=document.getElementById(r),e===null&&mo==="#top"&&(e=document.body)}if(e!==null){l0(e);var i=e.getAttribute("tabindex");return i===null&&!nh(e)&&e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),i===null&&!nh(e)&&(e.blur(),e.removeAttribute("tabindex")),ad(),!0}return!1}function zj(e){window.setTimeout(function(){rh()===!1&&(Si===null&&(Si=new MutationObserver(rh)),Si.observe(document,{attributes:!0,childList:!0,subtree:!0}),ya=window.setTimeout(function(){ad()},e||1e4))},0)}function c0(e){return dt.forwardRef(function(r,i){var a="";typeof r.to=="string"&&r.to.includes("#")?a="#"+r.to.split("#").slice(1).join("#"):typeof r.to=="object"&&typeof r.to.hash=="string"&&(a=r.to.hash);var c={};e===Bu&&(c.isActive=function(h,x){return h&&h.isExact&&x.hash===a});function d(h){ad(),mo=r.elementId?"#"+r.elementId:a,r.onClick&&r.onClick(h),mo!==""&&!h.defaultPrevented&&h.button===0&&(!r.target||r.target==="_self")&&!(h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)&&(l0=r.scroll||(function(x){return r.smooth?x.scrollIntoView({behavior:"smooth"}):x.scrollIntoView()}),zj(r.timeout))}var f=$j(r,["scroll","smooth","timeout","elementId"]);return dt.createElement(e,Eu({},c,f,{onClick:d,ref:i}),r.children)})}var hn=c0(sr);c0(Bu);const Cj=m.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;
  background: ${e=>e.$scrolled?"rgba(12, 20, 69, 0.97)":`linear-gradient(${e.$navBackground})`};
`,_j=m.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 68px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,Pj=m(sr)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  justify-self: start;
`,Ej=m.span`
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
`,Tj=m.div`
  width: 36px;
  height: 36px;
  background: ${e=>e.$menuComplete?"linear-gradient(135deg, #2563eb, #0891b2)":"linear-gradient(135deg, #e632c824, #e269f87f)"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`,oh=m.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-self: center;

  @media (max-width: 768px) {
    display: none;
  }
`,ih=m(sr)`
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
`,Ij=m.div`
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
`,Rj=m.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  justify-self: end;
`,Aj=m(hn)`
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

  @media (max-width: 768px) {
    display: none;
  }
`,Oj=m.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`,Nj=m.div`
  display: none;

  @media (max-width: 768px) {
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
`,sh=m(hn)`
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
`,Lj=m.div`
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
`,Mj=m.button`
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
`,Dj=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1rem;
  margin-top: 0.25rem;
`,Bj=m(hn)`
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
`,Fj=m.button`
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
`,Uj=m(hn)`
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
`,ta=[{to:"/",label:"Início",id:"home",subItems:[{to:"/#hero",label:"Soluções Digitais Completas"},{to:"/#o-que-fazemos",label:"O que fazemos"},{to:"/#recursos",label:"Recursos disponíveis"},{to:"/#como-funciona",label:"Como funciona"}],color:"160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%"},{label:"Sites & Sistemas Web",id:"web",subItems:[{to:"/web#hero",label:"Sites e Sistemas Web"},{to:"/web#web",label:"Tipos de sistemas web"},{to:"/web#recursos",label:"Recursos extras"}],color:"160deg, #0c1445 0%, #1e3a8a 100%"},{label:"Apps Mobile",id:"mobile",subItems:[{to:"/mobile#hero",label:"Aplicativos Mobile"},{to:"/mobile#mobile",label:"Plataformas disponíveis"},{to:"/mobile#perfis",label:"Perfis de usuário"},{to:"/mobile#exemplos",label:"Exemplos de uso"}],color:"160deg, #0a1930 0%, #0e7490 100%"},{label:"Softwares",id:"software",subItems:[{to:"/software#hero",label:"Softwares para PC"},{to:"/software#Softwares",label:"Sistemas operacionais"},{to:"/software#recursos",label:"Opções e recursos"}],color:"160deg, #1e1040 0%, #5b21b6 100%"},{label:"Sistemas Locais",id:"sistemas-locais",subItems:[{to:"/sistemas-locais#hero",label:"Sistemas Locais"},{to:"/sistemas-locais#Sistemas-Local",label:"O que é um sistema local?"},{to:"/sistemas-locais#Controle-Acesso",label:"Controle Acesso"}],color:"160deg, #042c1e 0%, #059669 100%"}],Wj=[{to:"/",label:"Início",color:"160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%"},{to:"/web",label:"Sites & Sistemas Web",color:"160deg, #0c1445 0%, #1e3a8a 100%"},{to:"/mobile",label:"Apps Mobile",color:"160deg, #0a1930 0%, #0e7490 100%"},{to:"/software",label:"Softwares",color:"160deg, #1e1040 0%, #5b21b6 100%"},{to:"/sistemas-locais",label:"Sistemas Locais",color:"160deg, #042c1e 0%, #059669 100%"}],ah=e=>{const i=e.getBoundingClientRect().top+window.scrollY-68;window.scrollTo({top:i,behavior:"smooth"})};function Zj(){var O;const e=mn(),{menuOpen:r,toggleMenu:i,setMenuOpen:a}=sd(),[c,d]=_.useState(!1),[f,h]=_.useState(!0),[x,y]=_.useState(null);_.useRef(0),_.useEffect(()=>{const $=()=>d(window.scrollY>20);return window.addEventListener("scroll",$),()=>window.removeEventListener("scroll",$)},[]),_.useEffect(()=>{a(!1),y(null)},[e.pathname,a]);const v=$=>{y(x===$?null:$)};let S="160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%";for(const $ of ta){const A=e.pathname===$.to||e.pathname==="/"+$.id,N=(O=$.subItems)==null?void 0:O.some(R=>R.to.split("#")[0]===e.pathname);if(A||N){S=$.color||S;break}}let E=S;if(x){const $=ta.find(A=>A.id===x);$&&$.color&&(E=$.color)}return s.jsxs(s.Fragment,{children:[s.jsx(Cj,{$scrolled:c,$navBackground:E,children:s.jsxs(_j,{children:[s.jsxs(Pj,{to:"/",onClick:$=>{f||($.preventDefault(),h(!0))},children:[s.jsx(Tj,{as:"span",$menuComplete:f,onClick:$=>{$.preventDefault(),h(!f)},children:s.jsx(Ci,{size:18,color:f?"white":"#41ff24"})}),s.jsx(Ej,{children:f?"OG Labs":"OG Dev"})]}),f?s.jsx(oh,{children:Wj.map($=>s.jsx(ih,{$color:$.color,to:$.to,$active:e.pathname===$.to,children:$.label},$.to))}):s.jsx(oh,{children:ta.map(($,A)=>{if($.subItems){const N=e.pathname===$.to||e.pathname==="/"+$.id,R=$.subItems.some(J=>J.to.split("#")[0]===e.pathname),V=N||R;return s.jsxs("div",{style:{position:"relative"},children:[s.jsxs(Fj,{onClick:()=>v($.id),style:{color:V?"#41ff24":"white"},children:[$.label," ",x===$.id?"▲":"▼"]}),x===$.id&&s.jsx(Ij,{$color:$.color,children:$.subItems.map(J=>s.jsx(Uj,{to:J.to,children:J.label},J.to))})]},A)}return s.jsx(ih,{to:$.to,$active:e.pathname===$.to,children:$.label},$.to)})}),s.jsxs(Rj,{children:[s.jsx(Aj,{to:"/#contato",scroll:ah,children:"Falar Conosco"}),s.jsx(Oj,{onClick:i,"aria-label":"Menu",children:r?s.jsx(Mi,{size:24}):s.jsx(Rg,{size:24})})]})]})}),s.jsxs(Nj,{$open:r,children:[ta.map($=>{if($.subItems){const A=x===$.id,N=e.pathname==="/"+$.id||$.subItems.some(R=>R.to.split("#")[0]===e.pathname);return s.jsxs(Lj,{$isOpen:A,$color:$.color,children:[s.jsxs(Mj,{$active:N,$isOpen:A,$color:$.color,onClick:()=>v($.id),children:[$.label,s.jsx("span",{children:A?"▲":"▼"})]}),A&&s.jsx(Dj,{children:$.subItems.map(R=>s.jsx(Bj,{to:R.to,$active:e.pathname===R.to.split("#")[0],onClick:()=>a(!1),children:R.label},R.to))})]},$.id)}return s.jsx(sh,{to:$.to,$active:e.pathname===$.to,onClick:()=>a(!1),children:$.label},$.to)}),s.jsx(sh,{to:"/#contato",scroll:ah,$active:!1,onClick:()=>a(!1),style:{marginTop:"1rem",background:"linear-gradient(135deg, #2563eb, #0891b2)",color:"white",textAlign:"center"},children:"Falar Conosco"})]})]})}const qj=m.footer`
  background: #0c1445;
  color: rgba(255, 255, 255, 0.7);
  padding: 3rem 1.5rem 2rem;
  font-family: 'Inter', sans-serif;
`,Hj=m.div`
  max-width: 1366px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Vj=m.div``,Jj=m(sr)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,Gj=m.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Qj=m.p`
  font-size: 0.875rem;
  line-height: 1.7;
  max-width: 280px;
`,ru=m.a`
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
`,lh=m.div``,ch=m.h4`
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,u0=`
  display: block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #60a5fa;
  }
`,na=m(sr)`${u0}`,ra=m(hn)`${u0}`,Yj=m.div`
  max-width: 1366px;
  margin: 2.5rem auto 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,Kj=m.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;function Xj(){return s.jsxs(qj,{children:[s.jsxs(Hj,{children:[s.jsxs(Vj,{children:[s.jsxs(Jj,{to:"/",children:[s.jsx(Gj,{children:s.jsx(Ci,{size:18,color:"white"})}),"OG Labs"]}),s.jsx(Qj,{children:"Transformamos ideias em soluções digitais completas — do site mais simples ao sistema mais sofisticado, sempre com linguagem clara e suporte real."}),s.jsxs(ru,{href:"mailto:contato@oglabs.com.br",children:[s.jsx(za,{size:15})," contato@oglabs.com.br"]}),s.jsxs(ru,{href:"tel:+5511999999999",children:[s.jsx(Ca,{size:15})," (11) 99999-9999"]}),s.jsxs(ru,{href:"https://instagram.com",target:"_blank",children:[s.jsx(K2,{size:15})," @oglabs"]})]}),s.jsxs(lh,{children:[s.jsx(ch,{children:"Soluções"}),s.jsx(na,{to:"/web",children:"Sites & Sistemas Web"}),s.jsx(na,{to:"/mobile",children:"Apps Mobile"}),s.jsx(na,{to:"/software",children:"Softwares"}),s.jsx(na,{to:"/sistemas-locais",children:"Sistemas Locais"})]}),s.jsxs(lh,{children:[s.jsx(ch,{children:"Recursos"}),s.jsx(ra,{to:"/#o-que-fazemos",children:"O que fazemos"}),s.jsx(ra,{to:"/#como-funciona",children:"Como funciona"}),s.jsx(ra,{to:"/#ia",children:"Inteligência Artificial"}),s.jsx(ra,{to:"/#contato",children:"Contato"})]})]}),s.jsx(Yj,{}),s.jsxs(Kj,{children:[s.jsxs("span",{children:["© ",new Date().getFullYear()," OG Labs. Todos os direitos reservados."]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[s.jsx(sr,{to:"/styleguide",style:{color:"rgba(255,255,255,0.25)",fontSize:"0.75rem",textDecoration:"none",fontFamily:"'Inter',sans-serif"},children:"Design System"}),s.jsx("span",{style:{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"},children:"Feito com cuidado no Brasil 🇧🇷"})]})]})]})}const e$=ot`
  from { opacity: 0; }
  to   { opacity: 1; }
`,t$=ot`
  from { opacity: 0; transform: translateY(32px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,d0=ot`
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
`,f0=ot`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;m.div`
  ${({$active:e})=>e&&ie`
      animation: ${f0} 1s infinite;
    `}
`;const n$=m.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 18, 50, 0.72);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${e$} 0.2s ease;
`,r$=m.div`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 32px 80px rgba(10, 18, 50, 0.35);
  animation: ${t$} 0.3s ease;
  position: relative;

  &::-webkit-scrollbar { width: 0; }
`,o$=m.div`
  padding: 1.75rem 2rem 1.25rem;
  border-bottom: 1px solid #f0f4ff;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  border-radius: 24px 24px 0 0;
`,i$=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.125rem;
`,s$=m.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,a$=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
`,l$=m.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,uh=m.div`
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
${e=>e.$highlight&&ie`
    animation: ${f0} 1.5s ease-in-out infinite;
  `}  
  font-weight: 700;
`,c$=m.button`
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
`,u$=m.button`
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
`,d$=m.button`
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
`,f$=m.div`
  height: 4px;
  background: #e2eaff;
  border-radius: 2px;
  overflow: hidden;
`,p$=m.div`
  height: 100%;
  width: ${e=>e.$pct}%;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  border-radius: 2px;
  transition: width 0.4s ease;
`,m$=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #717182;
  margin-top: 0.5rem;
`,h$=m.div`
  padding: 2rem 2rem 1.5rem;
  animation: ${d0} 0.3s ease;
`,g$=m.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
`,x$=m.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c1445;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`,y$=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #717182;
  line-height: 1.6;
  margin-bottom: 1.75rem;
`,v$=m.div`
  display: grid;
  grid-template-columns: ${e=>e.$cols===2?"1fr 1fr":"1fr"};
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,w$=m.button`
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

  ${e=>e.$selected&&ie`
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    `}
`,b$=m.span`
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 1px;
`,k$=m.div`
  flex: 1;
`,S$=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.$selected?"#1d4ed8":"#0c1445"};
  margin-bottom: 0.2rem;
  line-height: 1.3;
`,j$=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #717182;
  line-height: 1.5;
`,$$=m.span`
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
`,z$=m.div`
  position: absolute;
  top: 0.6rem;
  right: 0.75rem;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s;
  color: #2563eb;
`,C$=m.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,_$=m.button`
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
`,P$=m.button`
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
`,E$=m.div`
  padding: 2rem;
  animation: ${d0} 0.3s ease;
`,T$=m.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`,I$=m.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0c1445;
  text-align: center;
  margin-bottom: 0.5rem;
`,R$=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  text-align: center;
  line-height: 1.65;
  margin-bottom: 1.75rem;
`,A$=m.div`
  background: #f0f4ff;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(37, 99, 235, 0.12);
`,O$=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,N$=m.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,L$=m.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  line-height: 1.5;
`,M$=m.div`
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
`,D$=m.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
`,B$=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
`,F$=m.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: #7dd3fc;
  background: rgba(125, 211, 252, 0.15);
  border: 1px solid rgba(125, 211, 252, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
`,U$=m.a`
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
`,W$=m.button`
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
`,ro=[{key:"goal",emoji:"🤔",question:"Pra começo de conversa — o que você precisa?",hint:"Escolha seu principal objetivo. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🌐",title:"Um lugar meu na internet",prePrice:1,desc:"Só quero que as pessoas me encontrem no Google e saibam o que faço.",value:"presence",badge:"Mais econômico"},{emoji:"📋",title:"Controlar meu negócio",prePrice:4,desc:"Quero organizar clientes, pedidos, estoque, vendas — ficou bagunçado.",value:"management"},{emoji:"📱",title:"Um aplicativo no celular",prePrice:6,desc:"Quero que meus clientes ou equipe usem um app nativo.",value:"mobile"},{emoji:"🤷",title:"Ainda não sei ao certo",prePrice:0,desc:"Tenho uma ideia mas preciso de ajuda para entender o que preciso.",value:"unsure"}]},{key:"content",emoji:"🎯",question:"O que você quer fazer com isso?",hint:"Você pode selecionar mais de uma opção — escolha tudo que se aplica.",cols:1,multi:!0,options:[{emoji:"📣",title:"Só mostrar o que faço e meu contato",prePrice:1,desc:"Uma página bonitinha para as pessoas verem e me chamarem.",value:"showcase",badge:"Super simples"},{emoji:"🛒",title:"Vender coisas pela internet",prePrice:4,desc:"Produtos ou serviços — o cliente escolhe e paga online.",value:"sell"},{emoji:"👥",title:"Organizar clientes e pedidos",prePrice:5,desc:"Quero saber quem comprou o quê, acompanhar pedidos, histórico.",value:"crm"},{emoji:"📊",title:"Controlar estoque e equipe",prePrice:7,desc:"Quantidade de produto, quem vendeu, relatório do dia — esse tipo de coisa.",value:"erp"}]},{key:"login",emoji:"🔐",question:"Vai ter alguém fazendo login no sistema?",hint:"Login = entrar com usuário e senha pra ver a própria área. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🚫",title:"Não, é só vitrine",prePrice:0,desc:"As pessoas só olham — não precisam criar conta nem entrar com senha.",value:"none",badge:"Mais simples"},{emoji:"👤",title:"Só minha equipe entra",prePrice:3,desc:"É um sistema interno — só eu e minha equipe vamos usar.",value:"team"},{emoji:"🏪",title:"Clientes entram também",prePrice:5,desc:"Meu cliente vai ter uma conta para acompanhar pedidos, histórico etc.",value:"clients"},{emoji:"🏢",title:"Clientes E equipe, com telas diferentes",prePrice:8,desc:"O cliente vê os pedidos dele. O vendedor vê tudo. O gerente vê mais ainda.",value:"roles"}]},{key:"platform",emoji:"📲",question:"Onde você quer que isso funcione?",hint:"Você só pode selecionar uma opção — escolha a plataforma principal.",cols:2,multi:!1,options:[{emoji:"💻",title:"No computador",prePrice:3,desc:"Site ou sistema acessado pelo navegador.",value:"web"},{emoji:"📱",title:"No celular",prePrice:6,desc:"App para iPhone e/ou Android.",value:"mobile"},{emoji:"🔄",title:"Nos dois, juntos",prePrice:8,desc:"Site e app sincronizados em tempo real.",value:"both"},{emoji:"🖥️",title:"Programa instalado no PC",prePrice:4,desc:"Software que fica no computador da empresa.",value:"desktop"}]},{key:"database",emoji:"🗃️",question:"Precisa guardar informações?",hint:"Informações = cadastro de clientes, histórico de pedidos, estoque... Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🙅",title:"Não, só quero mostrar o que faço",prePrice:0,desc:"Sem banco de dados — só conteúdo visual mesmo.",value:"none",badge:"Mais barato"},{emoji:"📝",title:"Sim, coisas simples",prePrice:2,desc:"Guardar alguns cadastros, formulários de contato, dados básicos.",value:"basic"},{emoji:"📦",title:"Sim, bastante coisa",prePrice:6,desc:"Clientes, pedidos, produtos, histórico, relatórios — tudo isso.",value:"full"}]},{key:"notifications",emoji:"🔔",question:"Quer avisar as pessoas automaticamente?",hint:"Você pode selecionar mais de uma opção — escolha os canais que faz sentido.",cols:1,multi:!0,options:[{emoji:"🚫",title:"Não preciso disso",prePrice:0,desc:"Sem notificações por enquanto.",value:"none"},{emoji:"📧",title:"Por e-mail está bom",prePrice:2,desc:"Recebem um e-mail quando algo importante acontece.",value:"email"},{emoji:"📲",title:"No celular mesmo",prePrice:5,desc:"Aquela notificação que aparece na tela do celular (push).",value:"push"}]},{key:"chatbot",emoji:"🤖",question:"Quer um robozinho que responda seus clientes?",hint:"Ele responde perguntas comuns, 24 horas por dia. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"🙅",title:"Não preciso disso agora",prePrice:0,desc:"Prefiro responder pessoalmente.",value:"no"},{emoji:"🤔",title:"Seria interessante no futuro",prePrice:0,desc:"Não agora, mas pode ser que eu queira depois.",value:"maybe"},{emoji:"⚡",title:"Sim! Quero atendimento automático 24h",prePrice:6,desc:"Chatbot com IA que responde clientes mesmo quando estou dormindo.",value:"yes"}]},{key:"timeline",emoji:"📅",question:"Quando você precisa disso pronto?",hint:"Saber o prazo ajuda a gente a planejar melhor. Você só pode selecionar uma opção.",cols:2,multi:!1,options:[{emoji:"🐢",title:"Sem pressa",prePrice:0,desc:"Posso esperar, quero fazer certo.",value:"no-rush"},{emoji:"📅",title:"Nos próximos meses",prePrice:1,desc:"Em 2 a 4 meses está ótimo.",value:"months"},{emoji:"⚡",title:"Rápido!",prePrice:3,desc:"Preciso em menos de 1 mês.",value:"fast"},{emoji:"🔥",title:"Urgente!",prePrice:5,desc:"Para ontem — é prioritário.",value:"urgent"}]},{key:"budget",emoji:"💰",question:"Qual é sua ideia de investimento?",hint:"Sem compromisso — é só pra gente te dar a proposta mais adequada. Você só pode selecionar uma opção.",cols:1,multi:!1,options:[{emoji:"💚",title:"Quero o mais econômico possível",prePrice:1,desc:"Meu orçamento é limitado — só o essencial.",value:"low"},{emoji:"💛",title:"Consigo investir no que precisa",prePrice:3,desc:"Quero fazer certo, estou disposto a investir.",value:"mid"},{emoji:"💎",title:"Custo não é o problema principal",prePrice:6,desc:"Quero qualidade — o mais completo possível.",value:"high"}]}];function Z$(e){const{goal:r,content:i,login:a,platform:c,database:d,notifications:f,chatbot:h,timeline:x,budget:y}=e,v=R=>Array.isArray(i)?i.includes(R):i===R,b=R=>Array.isArray(f)?f.includes(R):f===R,S=(r==="presence"||v("showcase"))&&a==="none"&&d==="none",E=c==="mobile"||c==="both"||r==="mobile",O=b("push");b("email");const $=h==="yes",A=a==="roles",N=d==="full";return S?{emoji:"🌐",profile:"Site Simples — One Page",description:"Perfeito! Você precisa de uma página bonita, rápida e otimizada para aparecer no Google.",features:["Uma página completa com seu contato e serviços","Otimizado para SEO — aparece no Google","Funciona perfeitamente no celular e no computador","Formulário de contato direto","Carregamento ultrarrápido"],price:"A partir de R$ 800",tag:"Mais econômico"}:A&&E&&O&&$?{emoji:"🚀",profile:"Sistema Completo — Plano Premium",description:"Você quer o sistema mais robusto: site, app, login por perfil, notificações e IA integrada.",features:["Site responsivo + App para iOS e Android","Login com perfis diferentes (cliente, vendedor, gerente)","Banco de dados completo na nuvem com segurança","Notificações push no celular em tempo real","Chatbot com IA para atendimento 24h","Sincronização em tempo real entre plataformas","Relatórios e dashboards avançados"],price:"Sob consulta",tag:"Plano Premium"}:E&&(A||N)?{emoji:"📱",profile:"App + Sistema Integrado",description:"Você quer um app profissional conectado a um sistema com banco de dados robusto.",features:["App nativo para iOS e/ou Android","Sistema web integrado em tempo real","Banco de dados na nuvem com backup automático",A?"Login com perfis diferentes":"Login de usuário",O?"Notificações push no celular":"",$?"Chatbot com IA para atendimento":"","Sincronização automática entre dispositivos"].filter(Boolean),price:"A partir de R$ 8.000",tag:"Intermediário a avançado"}:N||A||v("erp")||v("crm")?{emoji:"🏢",profile:"Sistema de Gestão Web",description:"Você precisa de um sistema completo para gerenciar seu negócio com eficiência.",features:["Sistema web completo e intuitivo","Banco de dados na nuvem com segurança enterprise",A?"Perfis: cliente, vendedor, gerente com permissões específicas":"Login de usuário","Relatórios e dashboards customizáveis",O?"Notificações automáticas":"",$?"Chatbot com IA para atendimento":"","Backup automático diário"].filter(Boolean),price:"A partir de R$ 5.000",tag:"Intermediário"}:r==="mobile"||c==="mobile"?{emoji:"📱",profile:"Aplicativo Mobile",description:"Um app para iPhone e/ou Android — pode ser simples ou com banco de dados integrado.",features:["App nativo para iOS e/ou Android",d!=="none"?"Banco de dados integrado com sincronização":"Funciona offline com sincronização quando conectado",a!=="none"?"Sistema de login seguro":"Sem necessidade de login",O?"Notificações no celular":"","Interface otimizada para mobile"].filter(Boolean),price:"A partir de R$ 4.000",tag:"Varia conforme recursos"}:{emoji:"💼",profile:"Sistema Web com Login",description:"Um sistema profissional com login, banco de dados e controle de usuários.",features:["Sistema web completo e responsivo","Login e cadastro de usuários com segurança","Banco de dados seguro na nuvem","Acessível em qualquer computador ou navegador",O?"Notificações automáticas":"","Suporte técnico incluído"].filter(Boolean),price:"A partir de R$ 3.500",tag:"Intermediário"}}function q$(e,r){const i=["Olá! Fiz o questionário no site e gostaria de saber mais.",`Perfil identificado: *${r}*`,e.goal?`Objetivo: ${e.goal}`:"",e.platform?`Plataforma: ${e.platform}`:"",e.timeline?`Prazo: ${e.timeline}`:"",e.budget?`Orçamento: ${e.budget}`:""].filter(Boolean).join(`
`);return encodeURIComponent(i)}function H$(){const{quizOpen:e,closeQuiz:r,quizStep:i,setQuizStep:a,quizAnswers:c,setQuizAnswer:d,resetQuiz:f}=sd(),h=ro.length,x=i>=h,y=ro[i],v=y?c[y.key]:void 0,b=x?Z$(c):null;if(_.useEffect(()=>{const te=I=>{I.key==="Escape"&&r()};return e&&(document.addEventListener("keydown",te),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",te),document.body.style.overflow=""}},[e,r]),!e)return null;const S=te=>{if(y.multi){const I=Array.isArray(v)?v:[];if(te==="none"||te==="no")d(y.key,[te]);else{const me=I.filter(Ee=>Ee!=="none"&&Ee!=="no");I.includes(te)?d(y.key,me.filter(Ee=>Ee!==te)):d(y.key,[...me,te])}}else d(y.key,[te])},E=()=>{!v||Array.isArray(v)&&v.length===0||a(i+1)},O=()=>{a(h)},$=()=>{i>0&&a(i-1)},A=()=>{f()},N=()=>{window.confirm("Tem certeza que quer limpar todas as respostas e recomeçar?")&&(f(),a(0))},R=te=>{let I=0;for(let me=0;me<=te&&me<ro.length;me++){const Ee=ro[me],xe=c[Ee.key];if(xe)if(Array.isArray(xe))xe.forEach(_e=>{const $e=Ee.options.find(He=>He.value===_e);$e&&(I+=$e.prePrice)});else{const _e=Ee.options.find($e=>$e.value===xe);_e&&(I+=_e.prePrice)}}return I},V=()=>R(ro.length-1),J=R(i),Q=V(),H=ro.some((te,I)=>I<=i?!1:!!c[te.key]),W=x?100:i/h*100,X=y!=null&&y.multi?Array.isArray(v)&&v.length>0:!!v;return s.jsx(n$,{onClick:te=>{te.target===te.currentTarget&&r()},children:s.jsxs(r$,{onClick:te=>te.stopPropagation(),children:[s.jsxs(o$,{children:[s.jsxs(i$,{children:[s.jsxs(s$,{children:[s.jsx(a$,{children:"Faça seu orçamento"}),s.jsxs(l$,{children:[H&&s.jsxs(uh,{children:[s.jsx(Rm,{size:12}),"Até aqui: ",J]}),s.jsxs(uh,{$highlight:Q>J,children:[s.jsx(Rm,{size:12}),"Total: ",Q]})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[i<h&&s.jsxs(u$,{onClick:O,children:["Pular tudo",s.jsx(j2,{size:12})]}),Q>0&&s.jsxs(c$,{onClick:N,children:[s.jsx(T5,{size:12}),"Limpar"]}),s.jsx(d$,{onClick:r,"aria-label":"Fechar",children:s.jsx(Mi,{size:15})})]})]}),s.jsx(f$,{children:s.jsx(p$,{$pct:W})}),s.jsx(m$,{children:x?"✅ Pronto! Veja o seu perfil abaixo":`Pergunta ${i+1} de ${h}`})]}),!x&&y&&s.jsxs(s.Fragment,{children:[s.jsxs(h$,{children:[s.jsx(g$,{children:y.emoji}),s.jsx(x$,{children:y.question}),s.jsx(y$,{children:y.hint}),s.jsx(v$,{$cols:y.cols,children:y.options.map(te=>{const I=Array.isArray(v)?v.includes(te.value):v===te.value;return s.jsxs(w$,{$selected:I,onClick:()=>S(te.value),children:[s.jsx(b$,{children:te.emoji}),s.jsxs(k$,{children:[s.jsx(S$,{$selected:I,children:te.title}),s.jsx(j$,{children:te.desc})]}),te.badge&&!I&&s.jsx($$,{children:te.badge}),s.jsx(z$,{$visible:I,children:s.jsx(On,{size:16})})]},te.value)})})]}),s.jsxs(C$,{children:[s.jsxs(_$,{onClick:$,disabled:i===0,children:[s.jsx(k2,{size:14})," Voltar"]}),s.jsxs(P$,{onClick:E,disabled:!X,children:[i===h-1?"Ver resultado":"Próxima",s.jsx(xt,{size:14})]})]})]}),x&&b&&s.jsxs(E$,{children:[s.jsx(T$,{children:b.emoji}),s.jsx(I$,{children:b.profile}),s.jsx(R$,{children:b.description}),s.jsxs(A$,{children:[s.jsx(O$,{children:"O que estaria incluído"}),s.jsx(N$,{children:b.features.map(te=>s.jsxs(L$,{children:[s.jsx(On,{size:15,color:"#2563eb",style:{flexShrink:0,marginTop:2}}),te]},te))})]}),s.jsxs(M$,{children:[s.jsxs("div",{children:[s.jsx(D$,{children:"Estimativa de investimento"}),s.jsx(B$,{children:b.price})]}),s.jsx(F$,{children:b.tag})]}),s.jsxs(U$,{href:`https://wa.me/5511999999999?text=${q$(c,b.profile)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(y5,{size:18})," Falar com a gente no WhatsApp"]}),s.jsx(W$,{onClick:A,children:"Recomeçar o questionário"})]})]})})}const V$=ot`
  0%, 100% { box-shadow: 0 4px 24px rgba(245, 158, 11, 0.4), 0 0 0 0 rgba(245, 158, 11, 0.4); }
  50%       { box-shadow: 0 4px 24px rgba(245, 158, 11, 0.4), 0 0 0 8px rgba(245, 158, 11, 0); }
`,J$=m.button`
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
  animation: ${V$} 3s ease-in-out infinite;
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
`;function G$(){const{openQuiz:e}=sd();return s.jsxs(J$,{onClick:e,"aria-label":"Faça um orçamento",children:[s.jsx(P2,{size:17}),"Faça um Orçamento"]})}const Q$=[{to:"/web",icon:s.jsx(vo,{size:24,color:"white"}),cor:"37, 99, 235",color:"linear-gradient(135deg, rgb(37, 99, 235), #1d4ed8)",title:"Sites e Sistemas Web",desc:"Do site simples para aparecer no Google até sistemas completos com login, banco de dados e integração em tempo real."},{to:"/mobile",icon:s.jsx(ir,{size:24,color:"white"}),cor:"8, 145, 178",color:"linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",title:"Aplicativos Mobile",desc:"Apps para iPhone e Android — desde o app simples que funciona sem internet até o sistema completo com login e notificações."},{to:"/software",icon:s.jsx(_i,{size:24,color:"white"}),cor:"124, 58, 237",color:"linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",title:"Softwares para PC",desc:"Programas para Windows, Mac ou Linux — para rodar em um computador ou em toda uma rede de empresa."},{to:"/sistemas-locais",icon:s.jsx(Ba,{size:24,color:"white"}),cor:"5, 150, 105",color:"linear-gradient(135deg, rgb(5, 150, 105), #047857)",title:"Sistemas Locais",desc:"Sistemas que rodam dentro da sua empresa, com banco de dados, acesso por usuário e senha, sem depender da internet."}],Y$=[{icon:s.jsx(Cr,{size:20,color:"#2563eb"}),title:"Segurança Real",desc:"Autenticação com AWS Cognito, criptografia de dados e padrões profissionais de segurança."},{icon:s.jsx(Di,{size:20,color:"#2563eb"}),title:"Tempo Real",desc:"Atualizações instantâneas entre usuários — sem precisar atualizar a página."},{icon:s.jsx(So,{size:20,color:"#2563eb"}),title:"Notificações Push",desc:"Avise seus clientes via Firebase — no celular, mesmo com o app fechado."},{icon:s.jsx(Eg,{size:20,color:"#2563eb"}),title:"Nuvem AWS",desc:"Infraestrutura confiável, escalável e com backup automático na Amazon."},{icon:s.jsx(yo,{size:20,color:"#2563eb"}),title:"Banco de Dados",desc:"Seus dados organizados e seguros — acessíveis de qualquer dispositivo."},{icon:s.jsx(Fa,{size:20,color:"#2563eb"}),title:"Multiusuário",desc:"Perfis de cliente, vendedor, gerente — cada um vê apenas o que precisa."}];m(hn)`
  display: inline-flex;

  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;const K$=m("button")`
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
`;m("div")`
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
`;const dh={PrimaryBtn:K$},X$=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
`,e4=m.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(29, 78, 216, 0.08);
`,t4=m.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,n4=m.div``,r4=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,o4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.6;
`,oo={Grid:X$,Item:e4,IconWrap:t4,Text:n4,Title:r4,Desc:o4},i4=m.div`
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
`,s4=m.div``,a4=m.span`
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
`,l4=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  line-height: 1.25;
  margin-bottom: 0.875rem;
`,c4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 520px;
`,u4=m(hn)`
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
`,io={Banner:i4,Text:s4,Badge:a4,Title:l4,Desc:c4,Button:u4},d4=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
`,f4=m.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,p4=m.div`
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
`,m4=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #0c1445;
`,h4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.65;
`,pi={Grid:d4,Step:f4,Number:p4,Title:m4,Desc:h4},g4=ot`
 from {
    transform: scale(1);
    box-shadow:  0px 4px 30px rgba(76, 127, 239, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px  rgba(12, 20, 69, 0);
  }
`,x4=ot`
  0% {
  background: rgba(15, 1, 86, 0.1);
  }
  100% {
  background: rgba(15, 1, 86, 0);
  }
`,y4=m.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10;

  ${({$visible:e})=>e&&ie`
      z-index: 201;
      animation: ${x4} 2s linear;
    `}

  transition: opacity 300ms ease;
`,v4=m.div`
  max-width: 1366px;
  margin: 0 auto;
`,w4=m.section`
  position: relative;
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 5rem 1.5rem;
  text-align: center;


  ${({$highlight:e})=>e&&ie`
      z-index: 20;
      animation: ${g4} 3s linear;
    `}
`,b4=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`,k4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
`,S4=m.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,so={Section:w4,Container:v4,Title:b4,Subtitle:k4,Actions:S4,PageOverlay:y4},Ja=ot`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,j4=m.section`
  min-height: 100vh;
  background: linear-gradient(160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(37, 99, 235, 0.15) 0%,
      transparent 70%
    );
    top: -150px;
    right: -100px;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(8, 145, 178, 0.12) 0%,
      transparent 70%
    );
    bottom: 50px;
    left: -50px;
    pointer-events: none;
  }
`,$4=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(37, 99, 235, 0.4);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  animation: ${Ja} 0.6s ease both;
`,z4=m.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  max-width: 760px;
  letter-spacing: -0.025em;
  animation: ${Ja} 0.6s 0.1s ease both;

  span {
    background: linear-gradient(90deg, #60a5fa, #0891b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,C4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 580px;
  line-height: 1.75;
  margin-top: 1.5rem;
  animation: ${Ja} 0.6s 0.2s ease both;
`,_4=m.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${Ja} 0.6s 0.3s ease both;
`,mi={Section:j4,Badge:$4,Title:z4,Subtitle:C4,Actions:_4},p0=ot`
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
`;ot`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;const P4=m.section`
  position: relative;
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};

  ${({$highlight:e})=>e&&ie`
      animation: ${p0} 20s ease;
    `}
`,E4=m.div`
  max-width: 1366px;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;

  ${({$highlight:e})=>e&&ie`
      animation: ${p0} 2s ease;
    `}
`,T4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,I4=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 600px;
`,R4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 1rem;
`,Vt={View:P4,Container:E4,Label:T4,Title:I4,Subtitle:R4},A4=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`,m0=m(hn)`
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
`,O4=m.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${e=>e.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`,N4=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.175rem;
  font-weight: 700;
  color: #0c1445;
`,L4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.65;
  flex: 1;
`,M4=m.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  margin-top: 0.5rem;
  transition: gap 0.2s;

  ${m0}:hover & {
    gap: 0.6rem;
  }
`,ao={Grid:A4,View:m0,Icon:O4,Title:N4,Desc:L4,Link:M4},D4=ot`
  0% {
      box-shadow: 7px  8px 70px rgba(76, 127, 239,1);
  }
  100% {
    box-shadow: 7px  8px 70px rgba(76, 127, 239,0.3);
  }
`;ot`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;const B4=m.section`
  position: relative;

  z-index: ${({$highlight:e})=>e?20:0};
  padding: 5rem 1.5rem;
  scroll-margin-top: 250px;

  background: ${e=>e.$bg||"#f7f9ff"};
  ${({$highlight:e})=>e&&ie`
      animation: ${D4} 3s ease;
    `}
`,F4=m.div`
  max-width: 1366px;
  margin: 0 auto;
  // transition: box-shadow 0.3s ease;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 600px;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 1rem;
`;const fh={View:B4,Container:F4},U4=m.a`
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
`,W4=m.a`
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
`;function Z4(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},2e3)},c=f=>{const h=document.getElementById(f);if(!h)return;h.scrollIntoView({behavior:"smooth",block:"start"});const x=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),x.disconnect())});x.observe(h)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsx(so.PageOverlay,{$visible:e!==""}),s.jsxs(mi.Section,{id:"hero",children:[s.jsxs(mi.Badge,{children:[s.jsx(Di,{size:12})," Soluções Digitais Completas"]}),s.jsxs(mi.Title,{children:["Seu negócio no digital —",s.jsx("br",{}),s.jsx("span",{children:"do simples ao completo"})]}),s.jsx(mi.Subtitle,{children:"Site, aplicativo ou sistema — explicamos tudo de forma clara, sem termos técnicos, e entregamos a solução certa para o seu negócio."}),s.jsxs(mi.Actions,{children:[s.jsxs(dh.PrimaryBtn,{onClick:()=>d("como-funciona"),children:["Ver o que fazemos ",s.jsx(xt,{size:16})]}),s.jsx(dh.PrimaryBtn,{onClick:()=>d("contato"),children:"Falar com a gente"})]})]}),s.jsx(Vt.View,{id:"o-que-fazemos",children:s.jsxs(Vt.Container,{children:[s.jsx(Vt.Label,{children:"O que fazemos"}),s.jsx(Vt.Title,{children:"Temos a solução certa para cada necessidade"}),s.jsx(Vt.Subtitle,{children:"Cada negócio é único. Por isso oferecemos desde sites simples até sistemas sofisticados — você escolhe o que faz sentido para você agora."}),s.jsx(ao.Grid,{children:Q$.map(f=>s.jsxs(ao.View,{$color:f.cor,to:f.to,children:[s.jsx(ao.Icon,{$color:f.color,children:f.icon}),s.jsx(ao.Title,{children:f.title}),s.jsx(ao.Desc,{children:f.desc}),s.jsxs(ao.Link,{children:["Saiba mais ",s.jsx(xt,{size:14})]})]},f.to))})]})}),s.jsx(Vt.View,{$bg:"#ffffff",id:"recursos",children:s.jsxs(Vt.Container,{children:[s.jsx(Vt.Label,{children:"Recursos disponíveis"}),s.jsx(Vt.Title,{children:"Tecnologias que podem fazer parte do seu sistema"}),s.jsx(Vt.Subtitle,{children:"Não precisa entender de tecnologia. A gente explica o que cada recurso faz e você decide o que quer no seu projeto."}),s.jsx(oo.Grid,{children:Y$.map(f=>s.jsxs(oo.Item,{children:[s.jsx(oo.IconWrap,{children:f.icon}),s.jsxs(oo.Text,{children:[s.jsx(oo.Title,{children:f.title}),s.jsx(oo.Desc,{children:f.desc})]})]},f.title))}),s.jsxs(io.Banner,{id:"ia",children:[s.jsxs(io.Text,{children:[s.jsx(io.Badge,{children:"Novidade"}),s.jsx(io.Title,{children:"Inteligência Artificial no seu sistema"}),s.jsx(io.Desc,{children:"Criamos chatbots personalizados, automações com IA e integrações com modelos de linguagem — tudo otimizado por um desenvolvedor para gastar menos e funcionar melhor. Um dev que faz os prompts certos custa menos do que aumentar o plano de IA todo mês."})]}),s.jsxs(io.Button,{smooth:!0,to:"/web#IA",children:[s.jsx(Pg,{size:16})," Ver opções de IA"]})]})]})}),s.jsx(fh.View,{id:"como-funciona",$highlight:e==="como-funciona",children:s.jsxs(fh.Container,{children:[s.jsx(Vt.Label,{children:"Como funciona"}),s.jsx(Vt.Title,{children:"Simples do início ao fim"}),s.jsx(pi.Grid,{children:[{n:"1",title:"Conversa inicial",desc:"Você conta o que precisa, a gente escuta e sugere a solução ideal — sem jargão técnico."},{n:"2",title:"Proposta clara",desc:"Enviamos uma proposta simples com o que vai ser feito, prazo e valor. Sem surpresas."},{n:"3",title:"Desenvolvimento",desc:"A equipe constrói o sistema com atualizações regulares para você acompanhar."},{n:"4",title:"Entrega e suporte",desc:"Entregamos, explicamos como usar e ficamos à disposição para o que precisar."}].map(f=>s.jsxs(pi.Step,{children:[s.jsx(pi.Number,{children:f.n}),s.jsx(pi.Title,{children:f.title}),s.jsx(pi.Desc,{children:f.desc})]},f.n))})]})}),s.jsx(so.Section,{$highlight:e==="contato",id:"contato",children:s.jsxs(so.Container,{children:[s.jsx(so.Title,{children:"Pronto para começar?"}),s.jsx(so.Subtitle,{children:"Não precisa saber nada de tecnologia. Basta nos contar o que você precisa e a gente cuida do resto."}),s.jsxs(so.Actions,{children:[s.jsxs(U4,{href:"https://wa.me/5511999999999",children:["Falar pelo WhatsApp",s.jsx(xt,{size:16})]}),s.jsx(W4,{href:"mailto:contato@oglabs.com.br",children:"Enviar e-mail"})]})]})})]})}const q4=m.section`
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`,H4=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(37, 99, 235, 0.4);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #93c5fd;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,V4=m.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  max-width: 700px;
  margin: 0 auto 1.25rem;
`,J4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`,oa={Page:q4,PageBadge:H4,PageTitle:V4,PageSubtitle:J4},G4=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,Q4=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,Y4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,K4=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,X4=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,e3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,t3=m.div`
  background: ${e=>e.$color};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,n3=m.div``,r3=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`,o3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`,i3=m.div`
  padding: 1.5rem 1.75rem;
`,s3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,a3=m.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,l3=m.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`,c3=m.span`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${e=>e.$variant==="green"?"#dcfce7":e.$variant==="orange"?"#ffedd5":e.$variant==="purple"?"#ede9fe":"#dbeafe"};
  color: ${e=>e.$variant==="green"?"#166534":e.$variant==="orange"?"#9a3412":e.$variant==="purple"?"#5b21b6":"#1e40af"};
`,u3=[{id:"One-Page",icon:s.jsx(vo,{size:22,color:"white"}),cor:"37, 99, 235",color:"linear-gradient(135deg, rgb(37, 99, 235), rgb(29, 78, 216))",title:"Site de Uma Página (One Page)",sub:"Ideal para começar",desc:"Um único endereço na internet com tudo o que você faz: seus serviços, contato, redes sociais. Perfeito para quem quer aparecer no Google sem complicação.",checks:["Aparece no Google (SEO)","Sem banco de dados","Funciona no celular e computador","Formulário de contato simples"],tag:{label:"Mais simples",variant:"green"}},{id:"Site",icon:s.jsx(o5,{size:22,color:"white"}),cor:"8, 145, 178",color:"linear-gradient(135deg, rgb(8, 145, 178), rgb(14, 116, 144))",title:"Site com Várias Páginas",sub:"Sobre nós, serviços, portfólio...",desc:"Quando você tem mais conteúdo para mostrar: um menu com páginas separadas para cada assunto — empresa, produtos, blog, contato.",checks:["Páginas organizadas com menu","Blog ou notícias (opcional)","Galeria de fotos ou portfólio","Otimizado para Google"],tag:{label:"Popular",variant:"blue"}},{id:"Login",icon:s.jsx(u5,{size:22,color:"white"}),cor:"124, 58, 237",color:"linear-gradient(135deg, rgb(124, 58, 237), rgb(109, 40, 217))",title:"Sistema com Login",sub:"Cada usuário vê o que é seu",desc:"Quando você precisa que clientes ou funcionários entrem com usuário e senha para acessar uma área privada com seus dados.",checks:["Cadastro e login de usuários","Área privada por perfil","Banco de dados seguro","Recuperação de senha"],tag:{label:"Intermediário",variant:"purple"}},{id:"Loja",icon:s.jsx(B5,{size:22,color:"white"}),cor:"217, 119, 6",color:"linear-gradient(135deg, rgb(217, 119, 6), rgb(180, 83, 9))",title:"Loja Virtual",sub:"Venda pela internet",desc:"Uma loja online completa onde seus clientes podem navegar pelos produtos, colocar no carrinho e pagar — tudo pelo computador ou celular.",checks:["Catálogo de produtos","Carrinho e checkout","Pagamento online (Pix, cartão)","Painel de pedidos para você"],tag:{label:"Intermediário",variant:"orange"}},{id:"Banco",icon:s.jsx(yo,{size:22,color:"white"}),cor:"5, 150, 105",color:"linear-gradient(135deg, rgb(5, 150, 105), rgb(4, 120, 87))",title:"Sistema Completo com Banco",sub:"Profissional e escalável",desc:"Para negócios que precisam de algo mais robusto: controle de clientes, pedidos, estoque, relatórios — tudo centralizado e acessível de qualquer lugar.",checks:["Banco de dados na nuvem (AWS)","Login com perfis diferentes","Atualizações em tempo real","Relatórios e dashboards"],tag:{label:"Avançado",variant:"green"}},{icon:s.jsx(Pg,{size:22,color:"white"}),id:"IA",cor:"8, 145, 178",color:"linear-gradient(135deg, rgb(8, 145, 178), rgb(37, 99, 235))",title:"IA e Chatbot Personalizado",sub:"Atendimento automático inteligente",desc:"Um assistente virtual no seu site que responde perguntas dos clientes, qualifica leads e automatiza atendimentos — treinado para o seu negócio.",checks:["Chatbot com IA treinada","Responde dúvidas 24h","Integra com WhatsApp","Otimizado para gastar menos em tokens"],tag:{label:"Premium",variant:"blue"}}],d3=ot`
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
`,f3=m("div")`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  scroll-margin-top: 250px;
  // border: thin solid ${e=>e.$color};

  ${({$highlight:e,$color:r})=>e?ie`
          --highlight-color: rgba(${r}, 1);
          --highlight-color-soft: rgba(${r}, 0.6);
          animation: ${d3} 4s linear;
        `:ie`
          &:hover {
            box-shadow: 0 1px 16px rgba(${r}, 0.6);
            transform: scale(1.03);
            border: 0px solid rgba(${r}, 0.6);
          }
        `}
`,mt={Section:G4,Container:Q4,SectionLabel:Y4,SectionTitle:K4,SectionSubtitle:X4,CardHeaderText:n3,types:u3,TypeCard:f3,TypeGrid:e3,CardHeader:t3,CardHeaderTitle:r3,CardHeaderSub:o3,CardBody:i3,CardDesc:s3,CheckList:a3,CheckItem:l3,Tag:c3},p3=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,m3=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,h3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`,g3=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,x3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,y3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`,v3=m.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(29, 78, 216, 0.09);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`,w3=m.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,b3=m.div``,k3=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,S3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`,j3=m.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,$3=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,z3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,C3=m.a`
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
`,_3=[{icon:s.jsx(Eg,{size:18,color:"#2563eb"}),title:"Tempo Real",desc:"Dados que se atualizam na tela sem precisar recarregar a página."},{icon:s.jsx(Cr,{size:18,color:"#2563eb"}),title:"AWS Cognito",desc:"Login seguro com autenticação profissional da Amazon."},{icon:s.jsx(So,{size:18,color:"#2563eb"}),title:"Notificações",desc:"Avise usuários por e-mail ou push quando algo importante acontecer."},{icon:s.jsx(Di,{size:18,color:"#2563eb"}),title:"Firebase",desc:"Banco de dados em tempo real, notificações push e autenticação rápida."}];ot`
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
`;const St={Section:p3,Container:m3,SectionLabel:h3,SectionTitle:g3,SectionSubtitle:x3,ExtraDesc:S3,ExtraTitle:k3,ExtraText:b3,ExtraIcon:w3,ExtraCard:v3,ExtraRow:y3,CTABanner:j3,CTATitle:$3,CTASubtitle:z3,CTAButton:C3,extras:_3};function P3(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const h=document.getElementById(f);if(!h)return;h.scrollIntoView({behavior:"smooth",block:"start"});const x=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),x.disconnect())});x.observe(h)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsxs(oa.Page,{id:"hero",children:[s.jsxs(oa.PageBadge,{children:[s.jsx(vo,{size:12})," Sites e Sistemas Web"]}),s.jsx(oa.PageTitle,{children:"Tudo o que existe no mundo web — explicado de forma simples"}),s.jsx(oa.PageSubtitle,{children:"De um site básico para aparecer no Google até um sistema completo com login, banco de dados e inteligência artificial."})]}),s.jsx(mt.Section,{id:"web",children:s.jsxs(mt.Container,{children:[s.jsx(mt.SectionLabel,{children:"Tipos de sistemas web"}),s.jsx(mt.SectionTitle,{children:"Qual é o certo para o seu momento?"}),s.jsx(mt.SectionSubtitle,{children:"Você não precisa começar com tudo. Cada negócio tem uma necessidade diferente — veja as opções e escolha o que faz sentido agora."}),s.jsx(mt.TypeGrid,{children:mt.types.map(f=>s.jsxs(mt.TypeCard,{$color:f.cor,onClick:()=>d(`${f.id}`),$highlight:e===`${f.id}`,id:f.id,children:[s.jsxs(mt.CardHeader,{$color:f.color,children:[f.icon,s.jsxs(mt.CardHeaderText,{children:[s.jsx(mt.CardHeaderTitle,{children:f.title}),s.jsx(mt.CardHeaderSub,{children:f.sub})]})]}),s.jsxs(mt.CardBody,{children:[s.jsx(mt.CardDesc,{children:f.desc}),s.jsx(mt.CheckList,{children:f.checks.map(h=>s.jsxs(mt.CheckItem,{children:[s.jsx(On,{size:15,color:"#2563eb",style:{flexShrink:0,marginTop:2}}),h]},h))}),s.jsx(mt.Tag,{$variant:f.tag.variant,children:f.tag.label})]})]},f.title))})]})}),s.jsx(St.Section,{$bg:"#ffffff",id:"hero",children:s.jsxs(St.Container,{children:[s.jsx(St.SectionLabel,{children:"Recursos extras"}),s.jsx(St.SectionTitle,{children:"Funcionalidades que podem ser adicionadas"}),s.jsx(St.SectionSubtitle,{children:"Qualquer sistema pode ser enriquecido com esses recursos — tudo conforme a sua necessidade."}),s.jsx(St.ExtraRow,{children:St.extras.map(f=>s.jsxs(St.ExtraCard,{children:[s.jsx(St.ExtraIcon,{children:f.icon}),s.jsxs(St.ExtraText,{children:[s.jsx(St.ExtraTitle,{children:f.title}),s.jsx(St.ExtraDesc,{children:f.desc})]})]},f.title))}),s.jsxs(St.CTABanner,{children:[s.jsx(St.CTATitle,{children:"Não sabe qual escolher?"}),s.jsx(St.CTASubtitle,{children:"Explique o seu negócio e a gente indica a melhor opção — sem compromisso."}),s.jsxs(St.CTAButton,{href:"https://wa.me/5511999999999",children:["Falar pelo WhatsApp ",s.jsx(xt,{size:16})]})]})]})})]})}const E3=m.section`
  background: linear-gradient(160deg, #0a1930 0%, #0e7490 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`,T3=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(8, 145, 178, 0.25);
  border: 1px solid rgba(8, 145, 178, 0.45);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #7dd3fc;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,I3=m.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  max-width: 700px;
  margin: 0 auto 1.25rem;
`,R3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`,ia={Page:E3,PageBadge:T3,PageTitle:I3,PageSubtitle:R3},A3=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,O3=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,N3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`,L3=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,M3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,D3=m.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`,B3=m.div`
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
`,F3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`,U3=ot`
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
`,W3=m("div")`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  scroll-margin-top: 250px;
  // border: thin solid ${e=>e.$color};

  ${({$highlight:e,$color:r})=>e?ie`
          --highlight-color: rgba(${r}, 1);
          --highlight-color-soft: rgba(${r}, 0.6);
          animation: ${U3} 4s linear;
        `:ie`
          &:hover {
            box-shadow: 0 1px 16px rgba(${r}, 0.6);
            transform: scale(1.03);
            border: 0px solid rgba(${r}, 0.6);
          }
        `}
`,Z3=m.div`
  background: ${e=>e.$color};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,q3=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`,H3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`,V3=m.div`
  padding: 1.5rem 1.75rem;
`,J3=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,G3=m.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Q3=m.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`,Y3=m.span`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${e=>e.$variant==="green"?"#dcfce7":e.$variant==="orange"?"#ffedd5":e.$variant==="purple"?"#ede9fe":e.$variant==="cyan"?"#cffafe":"#dbeafe"};
  color: ${e=>e.$variant==="green"?"#166534":e.$variant==="orange"?"#9a3412":e.$variant==="purple"?"#5b21b6":e.$variant==="cyan"?"#155e75":"#1e40af"};
`,K3=[{id:"App-Simples",icon:s.jsx(Ua,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(55, 65, 81), #1f2937)",cor:"55, 65, 81",title:"App Simples (offline)",sub:"Funciona sem internet",desc:"O app funciona completamente sem conexão. Ideal para ferramentas de consulta, calculadoras, catálogos ou qualquer uso que não precise de dados externos.",checks:["Funciona sem internet","Dados salvos no celular","Leve e rápido","Sem mensalidade de servidor"],tag:{label:"Mais simples",variant:"green"}},{id:"App-Conectado",cor:"8, 145, 178",icon:s.jsx(Yu,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",title:"App Conectado ao Servidor",sub:"Dados sempre atualizados",desc:"O app se comunica com um servidor na internet. Seus dados ficam na nuvem e são acessíveis de qualquer celular — perfeito para equipes ou múltiplos usuários.",checks:["Dados na nuvem","Sincronização automática","Backup seguro","Múltiplos dispositivos"],tag:{label:"Intermediário",variant:"cyan"}},{id:"App-Login",cor:"124, 58, 237",icon:s.jsx(Fa,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",title:"App com Login e Perfis",sub:"Cada usuário tem o seu espaço",desc:"Sistema completo com cadastro, login, perfil de usuário e controle de acesso. Clientes, vendedores e gerentes veem informações diferentes no mesmo app.",checks:["Login por usuário e senha","Perfis de cliente, gerente, vendas","Histórico por usuário","Segurança profissional"],tag:{label:"Intermediário",variant:"purple"}},{id:"App-Push",cor:"217, 119, 6",icon:s.jsx(So,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(217, 119, 6), #b45309)",title:"App com Notificações Push",sub:"Mensagens mesmo com app fechado",desc:"O app avisa o usuário com notificações no celular — mesmo que esteja fechado. Ideal para pedidos, alertas, promoções ou mensagens importantes.",checks:["Notificações automáticas","Funciona com app fechado","Firebase integrado","Mensagens segmentadas por perfil"],tag:{label:"Popular",variant:"orange"}},{id:"App-Completo",cor:"5, 150, 105",icon:s.jsx(ir,{size:22,color:"white"}),color:"linear-gradient(135deg, rgb(5, 150, 105), #047857)",title:"App Completo com Tempo Real",sub:"Tudo atualizado na hora",desc:"O app mais robusto: login, banco de dados, notificações push e atualizações em tempo real. O que um usuário faz, o outro vê instantaneamente — sem recarregar.",checks:["Tempo real (sem recarregar)","Login e banco de dados","Notificações push","Histórico completo"],tag:{label:"Avançado",variant:"green"}}],Ye={Section:A3,Container:O3,SectionLabel:N3,SectionTitle:L3,SectionSubtitle:M3,TypeGrid:F3,TypeCard:W3,PlatformBadge:B3,PlatformRow:D3,CardHeader:Z3,CardHeaderTitle:q3,CardHeaderSub:H3,CardBody:V3,CardDesc:J3,CheckList:G3,CheckItem:Q3,Tag:Y3,appTypes:K3},X3=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,ez=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,tz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`,nz=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,rz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,oz=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,iz=m.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  padding: 1.5rem 1.25rem;
  text-align: center;
`,sz=m.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`,az=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.5rem;
`,lz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.5;
`;m.div`
  background: linear-gradient(135deg, #0a1930, #0e7490);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`;m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`;m(hn)`
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
`;const bn={Section:X3,Container:ez,SectionLabel:tz,SectionTitle:nz,SectionSubtitle:rz,ProfileGrid:oz,ProfileCard:iz,ProfileIcon:sz,ProfileTitle:az,ProfileDesc:lz},cz=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,uz=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,dz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`,fz=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`;m.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;m.div`
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
`;m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;m(hn)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  overflow: hidden;
  transition:
    box-shadow 0.25s,
    transform 0.25s;
  scroll-margin-top: 250px;

  &:hover {
    box-shadow: 0 10px 36px rgba(8, 145, 178, 0.12);
    transform: translateY(-3px);
  }
`;m.div`
  background: ${e=>e.$color};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`;m.div`
  padding: 1.5rem 1.75rem;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;m.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;m.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`;m.span`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${e=>e.$variant==="green"?"#dcfce7":e.$variant==="orange"?"#ffedd5":e.$variant==="purple"?"#ede9fe":e.$variant==="cyan"?"#cffafe":"#dbeafe"};
  color: ${e=>e.$variant==="green"?"#166534":e.$variant==="orange"?"#9a3412":e.$variant==="purple"?"#5b21b6":e.$variant==="cyan"?"#155e75":"#1e40af"};
`;m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;m.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  padding: 1.5rem 1.25rem;
  text-align: center;
`;m.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.5rem;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.5;
`;const pz=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,mz=m.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.09);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`,hz=m.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,gz=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,xz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`,yz=m.div`
  background: linear-gradient(135deg, #0a1930, #0e7490);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,vz=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,wz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,bz=m.a`
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
`,kz=[{icon:s.jsx(M5,{size:18,color:"#0891b2"}),title:"Delivery / Pedidos",desc:"Cliente faz pedido, vendedor recebe em tempo real."},{icon:s.jsx(h5,{size:18,color:"#0891b2"}),title:"Localização",desc:"Rastreamento de entregadores ou técnicos em campo."},{icon:s.jsx(T2,{size:18,color:"#0891b2"}),title:"Relatório por Foto",desc:"Técnico fotografa e registra no app direto da obra."},{icon:s.jsx(So,{size:18,color:"#0891b2"}),title:"Promoções",desc:"Avise clientes de ofertas com um clique."}],Ot={Section:cz,Container:uz,SectionLabel:dz,SectionTitle:fz,UseCaseGrid:pz,UseCaseCard:mz,UCIcon:hz,UCTitle:gz,UCDesc:xz,CTABanner:yz,CTATitle:vz,CTASubtitle:wz,CTAButton:bz,useCases:kz};function Sz(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const h=document.getElementById(f);if(!h)return;h.scrollIntoView({behavior:"smooth",block:"start"});const x=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),x.disconnect())});x.observe(h)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsxs(ia.Page,{id:"hero",children:[s.jsxs(ia.PageBadge,{children:[s.jsx(ir,{size:12})," Aplicativos Mobile"]}),s.jsx(ia.PageTitle,{children:"Apps para iPhone e Android — do simples ao completo"}),s.jsx(ia.PageSubtitle,{children:"Seja para rodar sem internet ou para conectar equipes em tempo real, temos o app certo para o seu negócio."})]}),s.jsx(Ye.Section,{id:"mobile",children:s.jsxs(Ye.Container,{children:[s.jsx(Ye.SectionLabel,{children:"Plataformas disponíveis"}),s.jsx(Ye.SectionTitle,{children:"iOS, Android ou os dois?"}),s.jsx(Ye.SectionSubtitle,{children:"Desenvolvemos para as duas plataformas mais usadas no Brasil. Você pode lançar nos dois ao mesmo tempo ou começar por um."}),s.jsxs(Ye.PlatformRow,{children:[s.jsxs(Ye.PlatformBadge,{$color:"#1d4ed8",$bg:"#dbeafe",children:[s.jsx(_g,{size:16})," iOS (iPhone / iPad)"]}),s.jsxs(Ye.PlatformBadge,{$color:"#059669",$bg:"#dcfce7",children:[s.jsx(ir,{size:16})," Android"]}),s.jsxs(Ye.PlatformBadge,{$color:"#7c3aed",$bg:"#ede9fe",children:[s.jsx(ir,{size:16})," iOS + Android juntos"]})]}),s.jsx(Ye.TypeGrid,{children:Ye.appTypes.map(f=>s.jsxs(Ye.TypeCard,{$color:f.cor,onClick:()=>d(`${f.id}`),$highlight:e===`${f.id}`,id:f.id,children:[s.jsxs(Ye.CardHeader,{$color:f.color,children:[f.icon,s.jsxs("div",{children:[s.jsx(Ye.CardHeaderTitle,{children:f.title}),s.jsx(Ye.CardHeaderSub,{children:f.sub})]})]}),s.jsxs(Ye.CardBody,{children:[s.jsx(Ye.CardDesc,{children:f.desc}),s.jsx(Ye.CheckList,{children:f.checks.map(h=>s.jsxs(Ye.CheckItem,{children:[s.jsx(On,{size:15,color:"#0891b2",style:{flexShrink:0,marginTop:2}}),h]},h))}),s.jsx(Ye.Tag,{$variant:f.tag.variant,children:f.tag.label})]})]},f.title))})]})}),s.jsx(bn.Section,{$bg:"#ffffff",id:"perfis",children:s.jsxs(bn.Container,{children:[s.jsx(bn.SectionLabel,{children:"Perfis de usuário"}),s.jsx(bn.SectionTitle,{children:"Cada pessoa vê o que é seu"}),s.jsx(bn.SectionSubtitle,{children:"Em sistemas com login, é possível definir quem tem acesso a quê."}),s.jsx(bn.ProfileGrid,{children:[{title:"Cliente",desc:"Faz pedidos, acompanha histórico e recebe notificações."},{title:"Vendedor",desc:"Vê e gerencia os pedidos da sua carteira."},{title:"Gerente",desc:"Visualiza relatórios, equipe e todo o sistema."},{title:"Só um perfil",desc:"Pode ser simples também — um único tipo de usuário."}].map(f=>s.jsxs(bn.ProfileCard,{children:[s.jsx(bn.ProfileIcon,{children:s.jsx(Fa,{size:22,color:"#0891b2"})}),s.jsx(bn.ProfileTitle,{children:f.title}),s.jsx(bn.ProfileDesc,{children:f.desc})]},f.title))})]})}),s.jsx(Ot.Section,{id:"exemplos",children:s.jsxs(Ot.Container,{children:[s.jsx(Ot.SectionLabel,{children:"Exemplos de uso"}),s.jsx(Ot.SectionTitle,{children:"Para que tipo de negócio serve?"}),s.jsx(Ot.UseCaseGrid,{children:Ot.useCases.map(f=>s.jsxs(Ot.UseCaseCard,{children:[s.jsx(Ot.UCIcon,{children:f.icon}),s.jsxs("div",{children:[s.jsx(Ot.UCTitle,{children:f.title}),s.jsx(Ot.UCDesc,{children:f.desc})]})]},f.title))}),s.jsxs(Ot.CTABanner,{children:[s.jsx(Ot.CTATitle,{children:"Tem uma ideia de app?"}),s.jsx(Ot.CTASubtitle,{children:"Conta para a gente o que você precisa e a gente indica o tipo certo."}),s.jsxs(Ot.CTAButton,{href:"https://wa.me/5511999999999",children:["Falar pelo WhatsApp ",s.jsx(xt,{size:16})]})]})]})})]})}const jz=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,$z=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,zz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7c3aed;
  margin-bottom: 0.75rem;
`,Cz=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,_z=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,Pz=m.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`,Ez=m.div`
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
`,Tz=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,Iz=ot`
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
`,Rz=m("div")`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  scroll-margin-top: 250px;

  ${({$highlight:e,$color:r})=>e?ie`
          --highlight-color: rgba(${r}, 1);
          --highlight-color-soft: rgba(${r}, 0.6);
          animation: ${Iz} 4s linear;
        `:ie`
          &:hover {
            box-shadow: 0 1px 16px rgba(${r}, 0.6);
            transform: scale(1.03);
            border: 0px solid rgba(${r}, 0.6);
          }
        `}
`,Az=m.div`
  background: ${e=>e.$color};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,Oz=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`,Nz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`,Lz=m.div`
  padding: 1.5rem 1.75rem;
`,Mz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,Dz=m.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Bz=m.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`,Fz=m.span`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${e=>e.$variant==="green"?"#dcfce7":e.$variant==="orange"?"#ffedd5":e.$variant==="purple"?"#ede9fe":"#dbeafe"};
  color: ${e=>e.$variant==="green"?"#166534":e.$variant==="orange"?"#9a3412":e.$variant==="purple"?"#5b21b6":"#1e40af"};
`,Uz=[{id:"Software",cor:"55, 65, 81",icon:s.jsx(Tg,{size:22,color:"white"}),color:"linear-gradient(135deg, #374151, #1f2937)",title:"Software Local Simples",sub:"Roda em um único computador",desc:"Um programa instalado no seu computador que funciona sem internet. Ideal para uso individual — controle de tarefas, registros ou ferramentas de apoio.",checks:["Roda sem internet","Dados salvos no computador","Rápido e leve","Windows, Mac ou Linux"],tag:{label:"Mais simples",variant:"green"}},{id:"Software-Rede",icon:s.jsx(Ng,{size:22,color:"white"}),cor:"124, 58, 237",color:"linear-gradient(135deg, #7c3aed, #6d28d9)",title:"Software em Rede Local",sub:"Vários computadores, um sistema",desc:"Instalado em um servidor dentro da empresa, acessível por todos os computadores da rede interna. Perfeito para empresas com equipes compartilhando dados.",checks:["Acesso por vários PCs","Dados centralizados na empresa","Sem depender da internet","Login por usuário"],tag:{label:"Intermediário",variant:"purple"}},{id:"Software-Nuvem",icon:s.jsx(Ba,{size:22,color:"white"}),cor:"29, 78, 216",color:"linear-gradient(135deg, #1d4ed8, #1e40af)",title:"Software com Servidor na Nuvem",sub:"Acesse de qualquer lugar",desc:"O sistema roda na nuvem e pode ser acessado de qualquer computador com internet. Dados seguros, backup automático e sem preocupação com máquina local.",checks:["Acesso remoto (home office)","Backup automático","Escalável conforme cresce","Login seguro"],tag:{label:"Intermediário",variant:"blue"}},{id:"Sistema-Completo",icon:s.jsx(R2,{size:22,color:"white"}),cor:"5, 150, 105",color:"linear-gradient(135deg, #059669, #047857)",title:"Sistema de Gestão Completo",sub:"ERP para o seu negócio",desc:"Um sistema robusto que integra vendas, estoque, financeiro, clientes e relatórios — tudo em um só lugar. Feito sob medida para o seu negócio.",checks:["Módulos por área","Relatórios e gráficos","Controle de usuários","Integração com outros sistemas"],tag:{label:"Avançado",variant:"green"}}],Ke={Section:jz,Container:$z,SectionLabel:zz,SectionTitle:Cz,SectionSubtitle:_z,OSBadge:Ez,OSRow:Pz,TypeGrid:Tz,TypeCard:Rz,CardHeader:Az,CardHeaderTitle:Oz,CardHeaderSub:Nz,CardBody:Lz,CardDesc:Mz,CheckList:Dz,CheckItem:Bz,Tag:Fz,softwareTypes:Uz},Wz=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,Zz=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,qz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7c3aed;
  margin-bottom: 0.75rem;
`,Hz=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,Vz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,Jz=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,Gz=m.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`,Qz=m.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
`,Yz=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0c1445;
`,Kz=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.82rem;
  color: #4b5684;
  line-height: 1.6;
`,Xz=m.div`
  background: linear-gradient(135deg, #1e1040, #5b21b6);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,e6=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,t6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,n6=m.a`
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
`,r6=[{icon:s.jsx(Ua,{size:20,color:"#7c3aed"}),title:"Totalmente offline",desc:"Funciona sem internet, dados ficam na máquina ou no servidor local."},{icon:s.jsx(Yu,{size:20,color:"#7c3aed"}),title:"Com conexão",desc:"Acessa dados na nuvem — qualquer computador com internet entra no sistema."},{icon:s.jsx(Fa,{size:20,color:"#7c3aed"}),title:"Multiusuário",desc:"Cada pessoa tem login próprio e permissões diferentes no sistema."},{icon:s.jsx(P5,{size:20,color:"#7c3aed"}),title:"Impressão e relatórios",desc:"Emite relatórios, nota fiscal e integra com impressoras locais."},{icon:s.jsx(j5,{size:20,color:"#7c3aed"}),title:"Estoque e controle",desc:"Controle de produtos, entradas, saídas e alertas de estoque mínimo."},{icon:s.jsx(n5,{size:20,color:"#7c3aed"}),title:"Windows, Mac ou Linux",desc:"Desenvolvemos para qualquer sistema operacional."}],Ct={Section:Wz,Container:Zz,SectionLabel:qz,SectionTitle:Hz,SectionSubtitle:Vz,OptionRow:Jz,OptionCard:Gz,OptionIcon:Qz,OptionTitle:Yz,OptionDesc:Kz,CTABanner:Xz,CTATitle:e6,CTASubtitle:t6,CTAButton:n6,connOptions:r6},o6=m.section`
  background: linear-gradient(160deg, #1e1040 0%, #5b21b6 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`,i6=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.25);
  border: 1px solid rgba(124, 58, 237, 0.45);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #c4b5fd;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,s6=m.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  max-width: 700px;
  margin: 0 auto 1.25rem;
`,a6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`,sa={Page:o6,PageBadge:i6,PageTitle:s6,PageSubtitle:a6};function l6(){const[e,r]=_.useState(""),i=_.useRef(0),a=f=>{r(f),i.current=window.setTimeout(()=>{r(""),clearTimeout(i.current)},5e3)},c=f=>{const h=document.getElementById(f);if(!h)return;h.scrollIntoView({behavior:"smooth",block:"start"});const x=new IntersectionObserver(([y])=>{y.isIntersecting&&(a(f),x.disconnect())});x.observe(h)};function d(f){r(""),clearTimeout(i.current),c(f)}return s.jsxs(s.Fragment,{children:[s.jsxs(sa.Page,{id:"hero",children:[s.jsxs(sa.PageBadge,{children:[s.jsx(_i,{size:12})," Softwares para PC"]}),s.jsx(sa.PageTitle,{children:"Programas para o seu computador — simples ou completos"}),s.jsx(sa.PageSubtitle,{children:"De uma ferramenta para uso individual até um sistema de gestão para toda a empresa — para Windows, Mac ou Linux."})]}),s.jsx(Ke.Section,{id:"Softwares",children:s.jsxs(Ke.Container,{children:[s.jsx(Ke.SectionLabel,{children:"Sistemas operacionais"}),s.jsx(Ke.SectionTitle,{children:"Para qual computador você precisa?"}),s.jsx(Ke.SectionSubtitle,{children:"Desenvolvemos para as três principais plataformas de computador. Pode ser para um, para todos ou para qualquer um."}),s.jsxs(Ke.OSRow,{children:[s.jsxs(Ke.OSBadge,{$bg:"#dbeafe",$color:"#1d4ed8",children:[s.jsx(_i,{size:16})," Windows"]}),s.jsxs(Ke.OSBadge,{$bg:"#f1f0ff",$color:"#6d28d9",children:[s.jsx(_g,{size:16})," Mac (macOS)"]}),s.jsxs(Ke.OSBadge,{$bg:"#dcfce7",$color:"#166534",children:[s.jsx(Ba,{size:16})," Linux"]})]}),s.jsx(Ke.TypeGrid,{children:Ke.softwareTypes.map(f=>s.jsxs(Ke.TypeCard,{$color:f.cor,onClick:()=>d(`${f.id}`),$highlight:e===`${f.id}`,id:f.id,children:[s.jsxs(Ke.CardHeader,{$color:f.color,children:[f.icon,s.jsxs("div",{children:[s.jsx(Ke.CardHeaderTitle,{children:f.title}),s.jsx(Ke.CardHeaderSub,{children:f.sub})]})]}),s.jsxs(Ke.CardBody,{children:[s.jsx(Ke.CardDesc,{children:f.desc}),s.jsx(Ke.CheckList,{children:f.checks.map(h=>s.jsxs(Ke.CheckItem,{children:[s.jsx(On,{size:15,color:"#7c3aed",style:{flexShrink:0,marginTop:2}}),h]},h))}),s.jsx(Ke.Tag,{$variant:f.tag.variant,children:f.tag.label})]})]},f.title))})]})}),s.jsx(Ct.Section,{$bg:"#ffffff",id:"recursos",children:s.jsxs(Ct.Container,{children:[s.jsx(Ct.SectionLabel,{children:"Opções e recursos"}),s.jsx(Ct.SectionTitle,{children:"O que pode ter no seu software"}),s.jsx(Ct.SectionSubtitle,{children:"Cada detalhe é definido conforme a necessidade do seu negócio."}),s.jsx(Ct.OptionRow,{children:Ct.connOptions.map(f=>s.jsxs(Ct.OptionCard,{children:[s.jsx(Ct.OptionIcon,{children:f.icon}),s.jsxs("div",{children:[s.jsx(Ct.OptionTitle,{children:f.title}),s.jsx(Ct.OptionDesc,{children:f.desc})]})]},f.title))}),s.jsxs(Ct.CTABanner,{children:[s.jsx(Ct.CTATitle,{children:"Precisa de um software personalizado?"}),s.jsx(Ct.CTASubtitle,{children:"A gente desenvolve do zero, do jeito que o seu negócio precisa."}),s.jsxs(Ct.CTAButton,{href:"https://wa.me/5511999999999",children:["Falar pelo WhatsApp ",s.jsx(xt,{size:16})]})]})]})})]})}const c6=m.section`
  background: linear-gradient(160deg, #042c1e 0%, #059669 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`,u6=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.25);
  border: 1px solid rgba(5, 150, 105, 0.5);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6ee7b7;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,d6=m.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  max-width: 700px;
  margin: 0 auto 1.25rem;
`,f6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`;m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`;m.div`
  max-width: 1100px;
  margin: 0 auto;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.75rem;
`;m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`;const aa={Page:c6,PageBadge:u6,PageTitle:d6,PageSubtitle:f6},p6=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,m6=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,h6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.75rem;
`,g6=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,x6=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,y6=m.div`
  background: ${e=>e.$highlight?"linear-gradient(135deg, #042c1e, #059669)":"white"};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid
    ${e=>e.$highlight?"transparent":"rgba(5, 150, 105, 0.12)"};
`,v6=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e=>e.$light?"white":"#0c1445"};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,w6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: ${e=>e.$light?"rgba(255,255,255,0.7)":"#4b5684"};
  line-height: 1.75;
`,b6=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 1.5rem;
`,k6=m(hn)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(5, 150, 105, 0.12);
  overflow: hidden;
  transition:
    box-shadow 0.25s,
    transform 0.25s;
  scroll-margin-top: 250px;

  &:hover {
    box-shadow: 0 10px 36px rgba(5, 150, 105, 0.1);
    transform: translateY(-3px);
  }
`,S6=m.div`
  background: ${e=>e.$color};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,j6=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`,$6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`,z6=m.div`
  padding: 1.5rem 1.75rem;
`,C6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,_6=m.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,P6=m.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`,E6=m.span`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${e=>e.$variant==="green"?"#dcfce7":e.$variant==="orange"?"#ffedd5":e.$variant==="purple"?"#ede9fe":"#dbeafe"};
  color: ${e=>e.$variant==="green"?"#166534":e.$variant==="orange"?"#9a3412":e.$variant==="purple"?"#5b21b6":"#1e40af"};
`,Ge={Section:p6,Container:m6,SectionLabel:h6,SectionTitle:g6,ConceptGrid:x6,ConceptCard:y6,ConceptTitle:v6,ConceptDesc:w6,TypeGrid:b6,TypeCard:k6,CardHeader:S6,CardHeaderTitle:j6,CardHeaderSub:$6,CardBody:z6,CardDesc:C6,CheckList:_6,CheckItem:P6,Tag:E6},T6=m.section`
  padding: 5rem 1.5rem;
  background: ${e=>e.$bg||"#f7f9ff"};
`,I6=m.div`
  max-width: 1100px;
  margin: 0 auto;
`,R6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.75rem;
`,A6=m.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`,O6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`,N6=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,L6=m.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(5, 150, 105, 0.1);
  padding: 1.375rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`,M6=m.div`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,D6=m.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`,B6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`,F6=m.div`
  background: linear-gradient(135deg, #042c1e, #059669);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`,U6=m.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`,W6=m.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`,Z6=m.a`
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
`,Nt={Section:T6,Container:I6,SectionLabel:R6,SectionTitle:A6,SectionSubtitle:O6,AuthGrid:N6,AuthCard:L6,AuthIcon:M6,AuthTitle:D6,AuthDesc:B6,CTABanner:F6,CTATitle:U6,CTASubtitle:W6,CTAButton:Z6},q6=[{id:"Sistema-Local",icon:s.jsx(Tg,{size:22,color:"white"}),color:"linear-gradient(135deg, #374151, #1f2937)",title:"Sistema Local sem Internet",sub:"Totalmente offline",desc:"Roda dentro da empresa sem precisar de internet. Os dados ficam no servidor local e só quem está na rede interna acessa. Máxima privacidade.",checks:["Sem dependência de internet","Dados ficam dentro da empresa","Acesso somente na rede interna","Sem risco de invasão externa"],tag:{label:"Mais seguro",variant:"green"}},{id:"Sistema-Rede-Local-Banco",icon:s.jsx(Ng,{size:22,color:"white"}),color:"linear-gradient(135deg, #059669, #047857)",title:"Rede Local com Banco de Dados",sub:"Dados centralizados internamente",desc:"Vários computadores da empresa acessam o mesmo banco de dados. Estoque, clientes, pedidos — tudo compartilhado em tempo real dentro da rede.",checks:["Banco de dados central","Vários PCs conectados","Dados em tempo real","Login por usuário"],tag:{label:"Intermediário",variant:"green"}},{id:"Sistema-Auth",icon:s.jsx(yo,{size:22,color:"white"}),color:"linear-gradient(135deg, #1d4ed8, #1e40af)",title:"Sistema com Autenticação",sub:"Usuário e senha para tudo",desc:"Cada pessoa entra com seu login e vê apenas o que tem permissão. Um vendedor não vê os dados financeiros. Um gerente vê tudo. Simples assim.",checks:["Login individual","Permissões por cargo","Registro de ações (log)","Recuperação de senha"],tag:{label:"Intermediário",variant:"blue"}},{id:"Sistema-Híbrido",icon:s.jsx(Cr,{size:22,color:"white"}),color:"linear-gradient(135deg, #7c3aed, #6d28d9)",title:"Sistema Híbrido",sub:"Local + nuvem quando quiser",desc:"Funciona localmente mas também sincroniza com a nuvem — quando há internet, os dados são salvos online. Quando cai a internet, o sistema continua funcionando.",checks:["Funciona offline e online","Sincroniza automaticamente","Backup na nuvem","Acesso remoto quando necessário"],tag:{label:"Avançado",variant:"purple"}}],H6=[{icon:s.jsx(e5,{size:18,color:"#059669"}),title:"Login por usuário e senha",desc:"Cada pessoa tem acesso único e pessoal ao sistema."},{icon:s.jsx(q2,{size:18,color:"#059669"}),title:"Controle do que cada um vê",desc:"Vendedor, gerente, caixa — cada cargo tem sua visão."},{icon:s.jsx(l5,{size:18,color:"#059669"}),title:"Bloqueio de acesso",desc:"O administrador pode bloquear um usuário com um clique."},{icon:s.jsx(V2,{size:18,color:"#059669"}),title:"Histórico de ações",desc:"Registro de quem fez o quê e quando no sistema."},{icon:s.jsx(Ua,{size:18,color:"#059669"}),title:"Funciona sem internet",desc:"A autenticação pode ser feita localmente, sem nuvem."},{icon:s.jsx(Yu,{size:18,color:"#059669"}),title:"Ou com nuvem segura",desc:"AWS Cognito para autenticação profissional na nuvem."}];function V6(){return s.jsxs(s.Fragment,{children:[s.jsxs(aa.Page,{id:"hero",children:[s.jsxs(aa.PageBadge,{children:[s.jsx(Ba,{size:12})," Sistemas Locais"]}),s.jsx(aa.PageTitle,{children:"Sistemas dentro da sua empresa — seguros e sem depender da internet"}),s.jsx(aa.PageSubtitle,{children:"Tudo roda na sua própria rede, com banco de dados, controle de usuários e segurança profissional — sem expor nada para a internet."})]}),s.jsx(Ge.Section,{id:"Sistemas-Local",children:s.jsxs(Ge.Container,{children:[s.jsx(Ge.SectionLabel,{children:"O que é um sistema local?"}),s.jsx(Ge.SectionTitle,{children:"Simples de entender"}),s.jsxs(Ge.ConceptGrid,{children:[s.jsxs(Ge.ConceptCard,{children:[s.jsxs(Ge.ConceptTitle,{children:[s.jsx(Ua,{size:18,color:"#059669"})," Sistema na rede interna"]}),s.jsx(Ge.ConceptDesc,{children:"Imagine os computadores da sua empresa ligados entre si, como numa teia. Um sistema local fica no centro dessa teia — todos acessam, mas ninguém de fora entra. É como ter um sistema só seu, dentro da sua empresa."})]}),s.jsxs(Ge.ConceptCard,{$highlight:!0,children:[s.jsxs(Ge.ConceptTitle,{$light:!0,children:[s.jsx(Cr,{size:18,color:"#6ee7b7"})," Por que usar?"]}),s.jsx(Ge.ConceptDesc,{$light:!0,children:"Empresas que lidam com dados sensíveis — clínicas, escritórios, indústrias — preferem que os dados fiquem dentro de casa. Sem internet, sem risco de vazamento externo. Controle total sobre quem acessa o quê."})]})]}),s.jsx(Ge.TypeGrid,{children:q6.map(e=>s.jsxs(Ge.TypeCard,{id:e.id,smooth:!0,to:`/sistemas-locais#${e.id}`,children:[s.jsxs(Ge.CardHeader,{$color:e.color,children:[e.icon,s.jsxs("div",{children:[s.jsx(Ge.CardHeaderTitle,{children:e.title}),s.jsx(Ge.CardHeaderSub,{children:e.sub})]})]}),s.jsxs(Ge.CardBody,{children:[s.jsx(Ge.CardDesc,{children:e.desc}),s.jsx(Ge.CheckList,{children:e.checks.map(r=>s.jsxs(Ge.CheckItem,{children:[s.jsx(On,{size:15,color:"#059669",style:{flexShrink:0,marginTop:2}}),r]},r))}),s.jsx(Ge.Tag,{$variant:e.tag.variant,children:e.tag.label})]})]},e.title))})]})}),s.jsx(Nt.Section,{$bg:"#ffffff",id:"Controle-Acesso",children:s.jsxs(Nt.Container,{children:[s.jsx(Nt.SectionLabel,{children:"Controle de acesso"}),s.jsx(Nt.SectionTitle,{children:"Quem pode entrar e o que cada um vê"}),s.jsx(Nt.SectionSubtitle,{children:"Em qualquer sistema local, é possível definir permissões detalhadas. Cada funcionário tem o seu espaço — sem invadir o do outro."}),s.jsx(Nt.AuthGrid,{children:H6.map(e=>s.jsxs(Nt.AuthCard,{children:[s.jsx(Nt.AuthIcon,{children:e.icon}),s.jsxs("div",{children:[s.jsx(Nt.AuthTitle,{children:e.title}),s.jsx(Nt.AuthDesc,{children:e.desc})]})]},e.title))}),s.jsxs(Nt.CTABanner,{children:[s.jsx(Nt.CTATitle,{children:"Quer um sistema dentro da sua empresa?"}),s.jsx(Nt.CTASubtitle,{children:"A gente instala, configura e treina a equipe. Você fica no controle."}),s.jsxs(Nt.CTAButton,{href:"https://wa.me/5511999999999",children:["Falar pelo WhatsApp ",s.jsx(xt,{size:16})]})]})]})})]})}const J6=ot`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`,G6=m(s5)`
  animation: ${J6} 0.75s linear infinite;
  flex-shrink: 0;
`,h0=m.button`
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
  ${e=>e.$size==="sm"&&ie`padding: 0.375rem 0.875rem; font-size: 0.78rem;`}
  ${e=>e.$size==="md"&&ie`padding: 0.625rem 1.25rem; font-size: 0.875rem;`}
  ${e=>e.$size==="lg"&&ie`padding: 0.875rem 1.75rem; font-size: 1rem;`}

  /* variants */
  ${e=>e.$variant==="primary"&&ie`
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;
    box-shadow: 0 2px 8px rgba(37,99,235,0.25);
  `}
  ${e=>e.$variant==="secondary"&&ie`
    background: #eff6ff;
    color: #1e40af;
    border: 1.5px solid #bfdbfe;
  `}
  ${e=>e.$variant==="ghost"&&ie`
    background: transparent;
    color: #4b5684;
    border: 1.5px solid rgba(29,78,216,0.15);
  `}
  ${e=>e.$variant==="danger"&&ie`
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    color: white;
    box-shadow: 0 2px 8px rgba(220,38,38,0.25);
  `}
  ${e=>e.$variant==="amber"&&ie`
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
    box-shadow: 0 2px 8px rgba(245,158,11,0.3);
  `}
  ${e=>e.$variant==="cyan"&&ie`
    background: linear-gradient(135deg, #0891b2, #0e7490);
    color: white;
    box-shadow: 0 2px 8px rgba(8,145,178,0.25);
  `}
  ${e=>e.$variant==="green"&&ie`
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: white;
    box-shadow: 0 2px 8px rgba(22,163,74,0.25);
  `}
  ${e=>e.$variant==="white"&&ie`
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
`,Re=_.forwardRef(({variant:e="primary",size:r="md",loading:i=!1,fullWidth:a=!1,leftIcon:c,rightIcon:d,children:f,disabled:h,...x},y)=>s.jsxs(h0,{ref:y,$variant:e,$size:r,$fullWidth:a,disabled:h||i,...x,children:[i?s.jsx(G6,{size:r==="sm"?13:r==="lg"?17:14}):c,i?f??"Carregando…":f,!i&&d]}));Re.displayName="Button";const ph=m(h0).attrs({$variant:"amber",$size:"md",$fullWidth:!1})`
  border-radius: 100px;
  padding: 0.875rem 1.375rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
`,Q6=m.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${e=>e.$gap||"0.75rem"};
  align-items: center;
`,Y6=m.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.$c};
  flex-shrink: 0;
`,K6=m.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;

  ${e=>e.$size==="md"&&ie`font-size: 0.7rem; padding: 0.22rem 0.65rem;`}
  ${e=>e.$size==="sm"&&ie`font-size: 0.62rem; padding: 0.15rem 0.5rem;`}

  ${e=>e.$variant==="blue"&&ie`background: #dbeafe; color: #1e40af;`}
  ${e=>e.$variant==="green"&&ie`background: #dcfce7; color: #166534;`}
  ${e=>e.$variant==="amber"&&ie`background: #fef3c7; color: #92400e;`}
  ${e=>e.$variant==="red"&&ie`background: #fee2e2; color: #991b1b;`}
  ${e=>e.$variant==="purple"&&ie`background: #ede9fe; color: #5b21b6;`}
  ${e=>e.$variant==="cyan"&&ie`background: #cffafe; color: #155e75;`}
  ${e=>e.$variant==="gray"&&ie`background: #f3f4f6; color: #4b5563;`}
  ${e=>e.$variant==="outline"&&ie`
    background: transparent;
    color: #1d4ed8;
    border: 1.5px solid #bfdbfe;
  `}
`,X6={blue:"#2563eb",green:"#16a34a",amber:"#f59e0b",red:"#dc2626",purple:"#7c3aed",cyan:"#0891b2",gray:"#9ca3af",outline:"#2563eb"};function jt({variant:e="blue",size:r="md",dot:i,dotColor:a,children:c,...d}){return s.jsxs(K6,{$variant:e,$size:r,...d,children:[i&&s.jsx(Y6,{$c:a??X6[e]}),c]})}const mh=e=>s.jsx(jt,{variant:"blue",...e}),hh=e=>s.jsx(jt,{variant:"cyan",...e}),gh=e=>s.jsx(jt,{variant:"purple",...e}),xh=e=>s.jsx(jt,{variant:"green",...e}),eC=e=>s.jsx(jt,{variant:"amber",...e}),tC=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`,nC=m.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #0c1445;
  font-family: 'Plus Jakarta Sans', sans-serif;
`,rC=m.span`
  color: #dc2626;
  margin-left: 0.2rem;
`,oC=m.p`
  font-size: 0.75rem;
  color: ${e=>e.$error?"#dc2626":e.$success?"#16a34a":"#9ca3af"};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
`;function ut({label:e,hint:r,error:i,success:a,required:c,children:d,...f}){const h=i||a||r;return s.jsxs(tC,{...f,children:[e&&s.jsxs(nC,{children:[e,c&&s.jsx(rC,{children:"*"})]}),d,h&&s.jsxs(oC,{$error:!!i,$success:!!a&&!i,children:[i&&s.jsx(Qu,{size:12}),a&&!i&&s.jsx(On,{size:12}),h]})]})}const iC=m.div`
  position: relative;
  display: flex;
  align-items: center;
`,sC=m.div`
  position: absolute;
  left: 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  pointer-events: none;
`,aC=m.div`
  position: absolute;
  right: 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: color 0.2s;
  &:hover { color: ${e=>e.$clickable?"#4b5684":"#9ca3af"}; }
`,lC=m.input`
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

  ${e=>(e.$state==="default"||e.$state==="focus")&&ie`
    border: 1.5px solid ${e.$state==="focus"?"#2563eb":"#e2eaff"};
    box-shadow: ${e.$state==="focus"?"0 0 0 3px rgba(37,99,235,0.1)":"none"};
    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    }
  `}
  ${e=>e.$state==="error"&&ie`
    border: 1.5px solid #dc2626;
    box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
    &:focus { border-color: #dc2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.1); }
  `}
  ${e=>e.$state==="success"&&ie`
    border: 1.5px solid #16a34a;
    box-shadow: 0 0 0 3px rgba(22,163,74,0.08);
  `}
  ${e=>e.$state==="disabled"&&ie`
    border: 1.5px solid #e5e7eb;
    background: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,un=_.forwardRef(({fieldState:e="default",leftIcon:r,rightIcon:i,onRightIconClick:a,disabled:c,...d},f)=>s.jsxs(iC,{children:[r&&s.jsx(sC,{children:r}),s.jsx(lC,{ref:f,$state:c?"disabled":e,$hasLeft:!!r,$hasRight:!!i,disabled:c,...d}),i&&s.jsx(aC,{$clickable:!!a,onClick:a,children:i})]}));un.displayName="Input";const cC=m.select`
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

  ${e=>(e.$state==="default"||e.$state==="focus")&&ie`
    border: 1.5px solid ${e.$state==="focus"?"#2563eb":"#e2eaff"};
    box-shadow: ${e.$state==="focus"?"0 0 0 3px rgba(37,99,235,0.1)":"none"};
    &:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  `}
  ${e=>e.$state==="error"&&ie`
    border: 1.5px solid #dc2626;
    box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
  `}
  ${e=>e.$state==="disabled"&&ie`
    border: 1.5px solid #e5e7eb;
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.65;
  `}
`,co=_.forwardRef(({fieldState:e="default",disabled:r,...i},a)=>s.jsx(cC,{ref:a,$state:r?"disabled":e,disabled:r,...i}));co.displayName="Select";const uC=m.textarea`
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

  ${e=>(e.$state==="default"||e.$state==="focus")&&ie`
    border: 1.5px solid ${e.$state==="focus"?"#2563eb":"#e2eaff"};
    box-shadow: ${e.$state==="focus"?"0 0 0 3px rgba(37,99,235,0.1)":"none"};
    &:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  `}
  ${e=>e.$state==="error"&&ie`border: 1.5px solid #dc2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.08);`}
  ${e=>e.$state==="success"&&ie`border: 1.5px solid #16a34a;`}
  ${e=>e.$state==="disabled"&&ie`
    border: 1.5px solid #e5e7eb;
    background: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,va=_.forwardRef(({fieldState:e="default",disabled:r,...i},a)=>s.jsx(uC,{ref:a,$state:r?"disabled":e,disabled:r,...i}));va.displayName="Textarea";const dC=m.div`
  width: 44px;
  height: 26px;
  border-radius: 100px;
  background: ${e=>e.$on?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#d1d5db"};
  position: relative;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.45:1};
  transition: background 0.2s;
  flex-shrink: 0;
`,fC=m.div`
  position: absolute;
  top: 3px;
  left: ${e=>e.$on?"21px":"3px"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: left 0.2s;
`,pC=m.span`
  font-size: 0.875rem;
  color: #0c1445;
`,mC=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
`;function ou({checked:e,onChange:r,disabled:i=!1,label:a}){return s.jsxs(mC,{children:[s.jsx(dC,{$on:e,$disabled:i,onClick:()=>!i&&r(!e),role:"switch","aria-checked":e,children:s.jsx(fC,{$on:e})}),a&&s.jsx(pC,{children:a})]})}const hC=m.div`
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
`,gC=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
`,xC=m.span`
  font-size: 0.875rem;
  color: #0c1445;
`;function la({checked:e,onChange:r,indeterminate:i=!1,disabled:a=!1,label:c}){return s.jsxs(gC,{onClick:()=>!a&&r(!e),role:"checkbox","aria-checked":i?"mixed":e,children:[s.jsxs(hC,{$checked:e,$indeterminate:i,$disabled:a,children:[i&&!e&&s.jsx(Og,{size:11,color:"white",strokeWidth:3}),e&&s.jsx(Li,{size:11,color:"white",strokeWidth:3})]}),c&&s.jsx(xC,{children:c})]})}const yC=m.div`
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
`,vC=m.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2563eb;
`,wC=m.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  user-select: none;
`,bC=m.span`
  font-size: 0.875rem;
  color: ${e=>e.$checked?"#0c1445":"#4b5684"};
  font-weight: ${e=>e.$checked?600:400};
  transition: all 0.15s;
`,kC=m.div`
  display: flex;
  flex-direction: ${e=>e.$direction};
  flex-wrap: ${e=>e.$direction==="row"?"wrap":"nowrap"};
  gap: ${e=>e.$gap};
`;function SC({value:e,onChange:r,options:i,direction:a="row",gap:c="1.25rem"}){return s.jsx(kC,{$direction:a,$gap:c,children:i.map(d=>s.jsxs(wC,{onClick:()=>!d.disabled&&r(d.value),role:"radio","aria-checked":e===d.value,children:[s.jsx(yC,{$checked:e===d.value,$disabled:!!d.disabled,children:e===d.value&&s.jsx(vC,{})}),s.jsx(bC,{$checked:e===d.value,children:d.label})]},d.value))})}const iu=m.div`
  width: 100%;
  height: ${e=>e.$h}px;
  background: rgba(29,78,216,0.1);
  border-radius: 100px;
  overflow: hidden;
  position: relative;
`,su=m.div`
  height: 100%;
  width: ${e=>e.$pct}%;
  background: ${e=>e.$gradient};
  border-radius: 100px;
  ${e=>e.$animate&&ie`transition: width 0.5s cubic-bezier(0.4,0,0.2,1);`}
`,yh=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,jC=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,vh=m.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #2563eb;
  font-family: 'Inter', sans-serif;
`,$C="linear-gradient(90deg, #2563eb, #0891b2)";function au({value:e,max:r=100,height:i=6,gradient:a=$C,showLabel:c=!1,labelPosition:d="right",animate:f=!0,className:h}){const x=Math.min(100,Math.max(0,e/r*100));return c&&d==="above"?s.jsxs(yh,{className:h,children:[s.jsxs(jC,{children:[s.jsxs("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:600},children:[e," / ",r]}),s.jsxs(vh,{children:[Math.round(x),"%"]})]}),s.jsx(iu,{$h:i,children:s.jsx(su,{$pct:x,$gradient:a,$animate:f})})]}):c&&d==="right"?s.jsxs(yh,{className:h,style:{flexDirection:"row",alignItems:"center",gap:"0.75rem"},children:[s.jsx(iu,{$h:i,style:{flex:1},children:s.jsx(su,{$pct:x,$gradient:a,$animate:f})}),s.jsxs(vh,{style:{flexShrink:0},children:[Math.round(x),"%"]})]}):s.jsx(iu,{$h:i,className:h,children:s.jsx(su,{$pct:x,$gradient:a,$animate:f})})}const zC=m.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`,CC=m.div`
  width: ${e=>e.$status==="active"?"24px":"8px"};
  height: 8px;
  border-radius: 100px;
  background: ${e=>e.$status==="done"||e.$status==="active"?e.$color:"rgba(29,78,216,0.15)"};
  opacity: ${e=>e.$status==="active"?1:e.$status==="done"?.6:.4};
  transition: all 0.3s;
`;function _C({current:e,total:r,completedColor:i="linear-gradient(90deg,#2563eb,#0891b2)",className:a}){return s.jsx(zC,{className:a,children:Array.from({length:r}).map((c,d)=>s.jsx(CC,{$status:d<e?"done":d===e?"active":"pending",$color:i},d))})}const PC=m.div`
  background: white;
  border-radius: ${e=>e.$radius??16}px;
  border: 1px solid rgba(29,78,216,0.08);
  padding: ${e=>e.$pad??"1.5rem"};
  transition: all 0.22s;

  ${e=>e.$hover&&ie`
    cursor: pointer;
    &:hover {
      border-color: rgba(29,78,216,0.22);
      box-shadow: 0 10px 36px rgba(29,78,216,0.1);
      transform: translateY(-2px);
    }
  `}
`;function wh({hover:e,padding:r,radius:i,children:a,...c}){return s.jsx(PC,{$hover:e,$pad:r,$radius:i,...c,children:a})}const EC=m.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: ${e=>e.$radius}px;
  background: ${e=>e.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,g0=m.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: ${e=>e.$size??"1rem"};
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.4rem;
  line-height: 1.3;
`,x0=m.p`
  font-size: ${e=>e.$size??"0.82rem"};
  color: #4b5684;
  line-height: 1.6;
  margin: 0;
`,TC=m.div`
  background: white;
  border-radius: 16px;
  border: 2px solid ${e=>e.$state==="selected"?e.$accent:"rgba(29,78,216,0.08)"};
  padding: 1.5rem;
  cursor: ${e=>e.$state==="disabled"?"not-allowed":"pointer"};
  transition: all 0.22s;
  position: relative;
  overflow: hidden;

  ${e=>e.$state==="selected"&&ie`
    box-shadow: 0 0 0 4px ${e.$accent}20, 0 12px 40px rgba(29,78,216,0.12);
  `}
  ${e=>e.$state==="disabled"&&ie`opacity: 0.45; pointer-events: none;`}

  &:hover:not([data-disabled="true"]) {
    border-color: rgba(29,78,216,0.25);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(29,78,216,0.1);
  }
`,IC=m.div`
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
`;function RC({state:e="default",accentColor:r="#2563eb",icon:i,iconGradient:a,title:c,text:d,onClick:f,className:h,style:x}){return s.jsxs(TC,{$state:e,$accent:r,onClick:e!=="disabled"?f:void 0,"data-disabled":e==="disabled",className:h,style:x,children:[e==="selected"&&s.jsx(IC,{$color:r,children:s.jsx(Li,{size:11,color:"white"})}),s.jsx(EC,{$bg:a,$size:48,$radius:14,style:{marginBottom:"1rem"},children:i}),s.jsx(g0,{children:c}),s.jsx(x0,{children:d})]})}const AC=m.div`
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
`,OC=m.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 10px;
  background: ${e=>e.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;function NC({icon:e,iconGradient:r="linear-gradient(135deg,#2563eb,#0891b2)",iconSize:i=36,title:a,text:c,...d}){return s.jsxs(AC,{...d,children:[s.jsx(OC,{$bg:r,$size:i,children:e}),s.jsxs("div",{children:[s.jsx(g0,{style:{fontSize:"0.95rem",marginBottom:"0.35rem"},children:a}),s.jsx(x0,{children:c})]})]})}const LC=m.div`
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
`,MC=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.$active?"rgba(255,255,255,0.6)":"#2563eb"};
  margin-bottom: 0.5rem;
`,DC=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${e=>e.$active?"white":"#0c1445"};
  margin-bottom: 0.3rem;
`,BC=m.p`
  font-size: 0.8rem;
  color: ${e=>e.$active?"rgba(255,255,255,0.7)":"#4b5684"};
  line-height: 1.55;
  margin: 0;
`;function FC({step:e,title:r,text:i,state:a="default",onClick:c,...d}){const f=a==="active";return s.jsxs(LC,{$active:f,onClick:c,...d,children:[s.jsx(MC,{$active:f,children:e}),s.jsx(DC,{$active:f,children:r}),s.jsx(BC,{$active:f,children:i})]})}const UC=m.button`
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
  ${e=>!e.$selected&&ie`
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
  ${e=>e.$selected&&ie`
    box-shadow: 0 4px 16px ${e.$color}35;
  `}
`,WC=m.div`
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
`,ZC=m.span`
  font-size: 1.125rem;
  line-height: 1;
  flex-shrink: 0;
`;function qC({id:e,emoji:r,label:i,selected:a=!1,accentColor:c="#2563eb",accentGradient:d="linear-gradient(135deg,#2563eb,#1d4ed8)",onChange:f,className:h}){return s.jsxs(UC,{type:"button",$selected:a,$color:c,$gradient:d,onClick:()=>f(e),"aria-pressed":a,className:h,children:[s.jsx(WC,{$selected:a,$color:c,children:a&&s.jsx(Li,{size:11,color:"white",strokeWidth:3})}),r&&s.jsx(ZC,{children:r}),s.jsx("span",{style:{flex:1},children:i})]})}const HC=m.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$gap};
  width: 100%;
`;function bh({value:e,onChange:r,options:i,accentColor:a,accentGradient:c,gap:d="0.625rem",className:f}){return s.jsx(HC,{$gap:d,className:f,children:i.map(h=>s.jsx(qC,{...h,selected:e===h.id,accentColor:a,accentGradient:c,onChange:r},h.id))})}const wa={info:{bg:"#eff6ff",border:"#2563eb",color:"#1e3a8a",icon:Ig},success:{bg:"#f0fdf4",border:"#16a34a",color:"#14532d",icon:On},warning:{bg:"#fffbeb",border:"#f59e0b",color:"#78350f",icon:q5},error:{bg:"#fef2f2",border:"#dc2626",color:"#7f1d1d",icon:Qu}},VC=m.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border-left: 4px solid;
  background: ${e=>wa[e.$type].bg};
  border-color: ${e=>wa[e.$type].border};
  color: ${e=>wa[e.$type].color};
`,JC=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`,GC=m.p`
  font-size: 0.82rem;
  line-height: 1.55;
  margin: 0;
  opacity: 0.85;
`,QC=m.div`flex: 1;`,YC=m.button`
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
`;function ca({type:e="info",title:r,children:i,onClose:a,className:c}){const{icon:d}=wa[e];return s.jsxs(VC,{$type:e,className:c,children:[s.jsx(d,{size:18,style:{flexShrink:0,marginTop:1}}),s.jsxs(QC,{children:[r&&s.jsx(JC,{children:r}),s.jsx(GC,{children:i})]}),a&&s.jsx(YC,{onClick:a,"aria-label":"Fechar",children:s.jsx(Mi,{size:15})})]})}const KC=ot`
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,y0={info:{bg:"#0c1445",icon:Ig,iconColor:"#60a5fa"},success:{bg:"#0c1445",icon:On,iconColor:"#4ade80"},error:{bg:"#dc2626",icon:Qu,iconColor:"#fca5a5"}},XC=m.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.125rem;
  border-radius: 12px;
  background: ${e=>y0[e.$type].bg};
  box-shadow: 0 8px 32px rgba(12,20,69,0.28);
  min-width: 280px;
  max-width: 400px;
  animation: ${KC} 0.3s ease;
`,e_=m.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
  font-family: 'Inter', sans-serif;
`,t_=m.button`
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
`;function lu({type:e="info",children:r,onClose:i,className:a}){const{icon:c,iconColor:d}=y0[e];return s.jsxs(XC,{$type:e,className:a,children:[s.jsx(c,{size:18,color:d,style:{flexShrink:0}}),s.jsx(e_,{children:r}),i&&s.jsx(t_,{onClick:i,"aria-label":"Fechar",children:s.jsx(Mi,{size:15})})]})}const n_=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 1rem;
`,r_=m.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #2563eb;
`,o_=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.125rem;
  color: #0c1445;
  margin-bottom: 0.5rem;
`,i_=m.p`
  font-size: 0.875rem;
  color: #4b5684;
  margin-bottom: 1.5rem;
  max-width: 320px;
`;function s_({icon:e,title:r,text:i,action:a,className:c}){return s.jsxs(n_,{className:c,children:[s.jsx(r_,{children:e}),s.jsx(o_,{children:r}),i&&s.jsx(i_,{children:i}),a]})}const v0={xs:24,sm:32,md:40,lg:48,xl:64},a_={true:"#22c55e",away:"#f59e0b",busy:"#dc2626",false:"#9ca3af"},w0=m.div`
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
`,l_=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,c_=m.div`
  width: ${e=>Math.max(8,Math.round(e.$size*.22))}px;
  height: ${e=>Math.max(8,Math.round(e.$size*.22))}px;
  border-radius: 50%;
  background: ${e=>a_[e.$status]??"#9ca3af"};
  border: 2px solid white;
  position: absolute;
  bottom: 0;
  right: 0;
`;function kn({initials:e,src:r,size:i="md",gradient:a="linear-gradient(135deg, #2563eb, #0891b2)",online:c,...d}){const f=typeof i=="number"?i:v0[i],h=c===void 0?void 0:String(c);return s.jsxs(w0,{$px:f,$bg:a,...d,children:[r?s.jsx(l_,{src:r,alt:e??""}):e,h!==void 0&&s.jsx(c_,{$status:h,$size:f})]})}const u_=m.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: ${e=>-e.$offset}px;
  }

  & > * {
    outline: 2px solid white;
    border-radius: 50%;
  }
`,d_=m(w0)`
  background: #e2eaff;
  color: #1d4ed8;
  font-size: ${e=>Math.round(e.$px*.3)}px;
  font-weight: 700;
`;function f_({avatars:e,size:r="sm",max:i=4,className:a}){const c=typeof r=="number"?r:v0[r],d=e.slice(0,i),f=e.length-i;return s.jsxs(u_,{$offset:Math.round(c*.3),className:a,children:[d.map((h,x)=>s.jsx(kn,{size:r,...h},x)),f>0&&s.jsxs(d_,{$px:c,$bg:"#e2eaff",children:["+",f]})]})}const p_=m.div`
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
`,m_=m.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
`,h_=m.th`
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
`,g_=m.td`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(29,78,216,0.06);
  color: ${e=>e.$mono?"#1d4ed8":"#374151"};
  font-family: ${e=>e.$mono?"'JetBrains Mono','Fira Code',monospace":"inherit"};
  font-size: ${e=>e.$mono?"0.75rem":"inherit"};
  vertical-align: middle;
  text-align: ${e=>e.$align??"left"};
`,x_=m.tr`
  background: ${e=>e.$selected?"#eff6ff":e.$highlighted?"#fefce8":"transparent"};
  opacity: ${e=>e.$muted?.45:1};
  &:last-child td { border-bottom: none; }
  &:hover td { background: rgba(29,78,216,0.02); }
  cursor: ${e=>e.onClick?"pointer":"default"};
  transition: background 0.15s;
`;function y_({children:e,...r}){return s.jsx(p_,{...r,children:s.jsx(m_,{children:e})})}function hi({children:e,...r}){return s.jsx(h_,{...r,children:e})}function Xe({mono:e,align:r,children:i,...a}){return s.jsx(g_,{$mono:e,$align:r,...a,children:i})}function ua({selected:e,highlighted:r,muted:i,onClick:a,children:c}){return s.jsx(x_,{$selected:e,$highlighted:r,$muted:i,onClick:a,children:c})}const v_=({children:e})=>s.jsx("thead",{children:e}),w_=({children:e})=>s.jsx("tbody",{children:e}),b_=m.div`
  text-align: ${e=>e.$align};
  ${e=>e.$align==="center"&&"display: flex; flex-direction: column; align-items: center;"}
`,k_=m.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.$dark?"#60a5fa":"#2563eb"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`,S_=m.span`
  display: inline-block;
  width: 20px;
  height: 2px;
  background: ${e=>e.$dark?"#60a5fa":"#2563eb"};
  border-radius: 2px;
  flex-shrink: 0;
`,j_=m.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: ${e=>e.$dark?"white":"#0c1445"};
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
  line-height: 1.15;
`,$_=m.p`
  font-size: 1.0625rem;
  color: ${e=>e.$dark?"rgba(255,255,255,0.6)":"#4b5684"};
  line-height: 1.7;
  max-width: ${e=>e.$align==="center"?"600px":"none"};
`;function kh({eyebrow:e,title:r,subtitle:i,align:a="left",dark:c=!1,className:d}){return s.jsxs(b_,{$align:a,className:d,children:[e&&s.jsxs(k_,{$dark:c,children:[s.jsx(S_,{$dark:c}),e]}),s.jsx(j_,{$dark:c,children:r}),i&&s.jsx($_,{$dark:c,$align:a,children:i})]})}m.section`
  background: ${e=>e.$bg??"transparent"};
  padding: ${e=>e.$tight?"3rem 1.5rem":"5rem 1.5rem"};

  @media (max-width: 768px) {
    padding: ${e=>e.$tight?"2rem 1rem":"3.5rem 1rem"};
  }
`;m.div`
  max-width: 1366px;
  margin: 0 auto;
`;const z_=m.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Sh=m.div`
  flex: 1;
  height: 1px;
  background: ${e=>e.$gradient?"linear-gradient(90deg, transparent, rgba(29,78,216,0.25), transparent)":"rgba(29,78,216,0.1)"};
`,C_=m.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
`,__=m.div`
  height: 1px;
  background: rgba(29,78,216,0.1);
  margin: ${e=>e.$my};
`;function cu({my:e="0",gradient:r=!1,label:i,className:a}){return i?s.jsxs(z_,{className:a,style:{margin:e?`${e} 0`:void 0},children:[s.jsx(Sh,{$gradient:r}),s.jsx(C_,{children:i}),s.jsx(Sh,{$gradient:r})]}):s.jsx(__,{$my:e,className:a})}const cn=m.code`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78em;
  background: #f0f4ff;
  color: #1d4ed8;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(29,78,216,0.1);
`,jh=m.pre`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78rem;
  background: #0c1445;
  color: #93c5fd;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  overflow-x: auto;
  line-height: 1.65;
  margin: 0;
`,P_=ot`
  0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
  50%      { box-shadow: 0 0 0 12px rgba(245,158,11,0); }
`,E_=m.div`
  background: #f0f3fb;
  min-height: 100vh;
  padding-bottom: 8rem;
  font-family: 'Inter', sans-serif;
`,T_=m.div`
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 4rem 2rem 0;
`,I_=m.div`
  max-width: 1366px;
  margin: 0 auto;
  padding-bottom: 2rem;
`,R_=m.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60a5fa;
  margin-bottom: 0.75rem;
`,A_=m.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
`,O_=m.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 2rem;
`,N_=m.div`
  background: rgba(0,0,0,0.25);
  border-top: 1px solid rgba(255,255,255,0.07);
  overflow-x: auto;
  &::-webkit-scrollbar { height: 0; }
`,L_=m.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  padding: 0 2rem;
  gap: 0.25rem;
`,M_=m.a`
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
`,D_=m.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`,Jt=m.section``,Gt=m.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(29,78,216,0.12);
`,Qt=m.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: 800;
  color: #0c1445;
  letter-spacing: -0.02em;
`,Yt=m.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #dbeafe;
  color: #1e40af;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
`,pe=m.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #4b5684;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin: 2.5rem 0 1.25rem;
`,kr=m.p`
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`,he=m.div`
  background: ${e=>e.$dark?"#0c1445":e.$bg??"white"};
  border-radius: 16px;
  border: 1px solid ${e=>e.$dark?"rgba(255,255,255,0.07)":"rgba(29,78,216,0.08)"};
  padding: ${e=>e.$pad??"2rem"};
  margin-bottom: 0.75rem;
`,gi=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: ${e=>e.$align??"flex-end"};
`,ht=m.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.$center?"center":"flex-start"};
  gap: 0.5rem;
`,gt=m.span`
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${e=>e.$dark?"rgba(255,255,255,0.35)":"#9ca3af"};
`,Ne=m.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap!==!1?"wrap":"nowrap"};
  gap: ${e=>e.$gap||"1rem"};
  align-items: ${e=>e.$align||"flex-start"};
`,$h=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${e=>e.$gradient||"linear-gradient(160deg,#0c1445,#0f2050)"};
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  flex-wrap: wrap;
`,zh=m.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: white;
  margin-right: auto;
`,Ch=m.div`
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: ${e=>e.$dev?"linear-gradient(135deg,rgba(230,50,200,0.2),rgba(226,105,248,0.5))":"linear-gradient(135deg,#2563eb,#0891b2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,_h=m.button`
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
`,Ph=m.div`
  background: #0c1445;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 200px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
`,lo=m.button`
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
`,B_=m.div`
  background: linear-gradient(${e=>e.$gradient});
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.4rem;
`,F_=m.button`
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
`,U_=m.div`
  max-height: ${e=>e.$open?"200px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${e=>e.$open?"0 1.125rem 0.875rem":"0 1.125rem"};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,W_=m.a`
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;
  text-decoration: none;
  padding: 0.3rem 0;
  &:hover { color: white; }
`,Eh=m.button`
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
  ${e=>e.$pulse&&ie`animation: ${P_} 3s ease-in-out infinite;`}
`,uu=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.875rem;
`,du=m.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(29,78,216,0.08);
  background: white;
`,fu=m.div`
  background: ${e=>e.$c};
  height: ${e=>e.$h!==void 0?e.$h:68}px;
`,pu=m.div`padding: 0.625rem 0.875rem;`,mu=m.p`font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 700; color: #0c1445; margin-bottom: 0.15rem;`,hu=m.p`font-size: 0.68rem; color: #717182;`,gu=m.p`font-size: 0.65rem; color: #2563eb; font-weight: 600; margin-top: 0.2rem; font-family: monospace;`,Z_=m.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 0.875rem;`,q_=m.div`border-radius: 12px; overflow: hidden; border: 1px solid rgba(29,78,216,0.08);`,H_=m.div`background: ${e=>e.$g}; height: 88px;`,V_=m.div`background: white; padding: 0.75rem 1rem;`,J_=m.p`font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 700; color: #0c1445; margin-bottom: 0.25rem;`,G_=m.p`font-size: 0.7rem; color: #2563eb; font-weight: 600; margin-bottom: 0.25rem;`,Q_=m.p`font-size: 0.62rem; color: #9ca3af; word-break: break-all; font-family: monospace;`,Y_=m.div`
  background: white;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.08);
  overflow: hidden;
`,K_=m.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid #f0f4ff;
  flex-wrap: wrap;
  &:last-child { border-bottom: none; }
  &:hover { background: #f8faff; }
`,X_=m.span`font-size: 0.68rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.07em; width: 76px; flex-shrink: 0;`,e8=m.span`font-size: 0.68rem; color: #2563eb; font-weight: 600; font-family: monospace; width: 80px; flex-shrink: 0;`,t8=m.p`
  font-family: ${e=>e.$font};
  font-size: ${e=>e.$sz};
  font-weight: ${e=>e.$w};
  color: #0c1445;
  line-height: 1.25;
  margin: 0;
`,n8=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  min-width: 62px;
`,r8=m.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
`,o8=m.span`font-size: 0.6rem; color: #9ca3af; font-weight: 700; text-align: center;`,i8=[{name:"Navy 950",hex:"#0c1445",token:"--foreground"},{name:"Navy 900",hex:"#0f2050",token:"--sidebar"},{name:"Blue 800",hex:"#1e3a8a",token:"--secondary-foreground"},{name:"Blue 700",hex:"#1d4ed8",token:"--primary"},{name:"Blue 600",hex:"#2563eb",token:"--ring"},{name:"Blue 400",hex:"#60a5fa",token:"--sidebar-primary"}],s8=[{name:"Cyan 600",hex:"#0891b2",token:"--accent"},{name:"Cyan 500",hex:"#06b6d4",token:"cyan-500"},{name:"Amber 500",hex:"#f59e0b",token:"quiz-btn-base"},{name:"Amber 600",hex:"#d97706",token:"quiz-btn-dark"}],a8=[{name:"Success",hex:"#059669",token:"green-600"},{name:"Success BG",hex:"#dcfce7",token:"green-100"},{name:"Purple",hex:"#7c3aed",token:"violet-600"},{name:"Purple BG",hex:"#ede9fe",token:"violet-100"},{name:"Error",hex:"#dc2626",token:"--destructive"},{name:"Error BG",hex:"#fee2e2",token:"red-100"},{name:"Warning",hex:"#d97706",token:"amber-600"},{name:"Warning BG",hex:"#ffedd5",token:"orange-100"}],Th=[{name:"Hero Home",g:"linear-gradient(160deg,#0c1445 0%,#0f2050 50%,#0a1930 100%)",use:"Hero da home, Navbar padrão"},{name:"Navy Dark",g:"linear-gradient(160deg,#0c1445 0%,#1e3a8a 100%)",use:"Hero Web, CTAs, AI banner"},{name:"Blue Action",g:"linear-gradient(135deg,#2563eb,#1d4ed8)",use:"Botão Primary, Navbar ativo"},{name:"Blue-Cyan",g:"linear-gradient(90deg,#2563eb,#0891b2)",use:"ProgressBar, gráficos"},{name:"Cyan Action",g:"linear-gradient(135deg,#0891b2,#0e7490)",use:"Botão Mobile, card Mobile"},{name:"Amber Quiz",g:"linear-gradient(135deg,#f59e0b,#d97706)",use:"Botão Orçamento (3 pontos de entrada)"},{name:"Green WA",g:"linear-gradient(135deg,#16a34a,#15803d)",use:"Botão WhatsApp"},{name:"Green System",g:"linear-gradient(135deg,#059669,#047857)",use:"Cards sistemas locais"},{name:"Purple",g:"linear-gradient(135deg,#7c3aed,#6d28d9)",use:"Cards software"},{name:"Logo Grad",g:"linear-gradient(135deg,#2563eb,#0891b2)",use:"LogoIcon + BrandIcon footer"}],l8=[{token:"Display",sz:"clamp(2.2rem,6vw,4rem)",font:"'Plus Jakarta Sans'",w:800,sample:"Seu negócio no digital"},{token:"H1",sz:"clamp(2rem,5vw,3.5rem)",font:"'Plus Jakarta Sans'",w:800,sample:"Sites e Sistemas Web"},{token:"H2",sz:"clamp(1.6rem,3vw,2.25rem)",font:"'Plus Jakarta Sans'",w:800,sample:"Qual é o certo para você?"},{token:"H3 Card",sz:"1.05rem",font:"'Plus Jakarta Sans'",w:700,sample:"Sistema com Login"},{token:"Body L",sz:"1.125rem",font:"'Inter'",w:400,sample:"Explicamos tudo sem termos técnicos."},{token:"Body",sz:"1rem",font:"'Inter'",w:400,sample:"Cada negócio é único — oferecemos desde sites simples."},{token:"Body S",sz:"0.9rem",font:"'Inter'",w:400,sample:"Aparece no Google, funciona no celular."},{token:"Caption",sz:"0.78rem",font:"'Inter'",w:400,sample:"Login individual · Backup automático · Segurança"},{token:"Label",sz:"0.72rem",font:"'Inter'",w:700,sample:"SOLUÇÕES DIGITAIS · O QUE FAZEMOS"}],c8=[{icon:s.jsx(vo,{size:20}),label:"Globe"},{icon:s.jsx(ir,{size:20}),label:"Smartphone"},{icon:s.jsx(_i,{size:20}),label:"Monitor"},{icon:s.jsx(yo,{size:20}),label:"Database"},{icon:s.jsx(Cr,{size:20}),label:"Shield"},{icon:s.jsx(Di,{size:20}),label:"Zap"},{icon:s.jsx(So,{size:20}),label:"Bell"},{icon:s.jsx(Ag,{size:20}),label:"MessageSquare"},{icon:s.jsx(O5,{size:20}),label:"Settings"},{icon:s.jsx(G5,{size:20}),label:"User"},{icon:s.jsx(f5,{size:20}),label:"LogOut"},{icon:s.jsx(Rg,{size:20}),label:"Menu"},{icon:s.jsx(xt,{size:20}),label:"ArrowRight"},{icon:s.jsx(Li,{size:20}),label:"Check"},{icon:s.jsx(Mi,{size:20}),label:"X"},{icon:s.jsx(Lg,{size:20}),label:"Search"},{icon:s.jsx(V5,{size:20}),label:"Upload"},{icon:s.jsx(W5,{size:20}),label:"Star"},{icon:s.jsx(Ci,{size:20}),label:"Code2 (Logo)"},{icon:s.jsx(za,{size:20}),label:"Mail"},{icon:s.jsx(Ca,{size:20}),label:"Phone"}],u8=[{id:"home",label:"Início",gradient:"160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%",links:["Soluções Digitais","O que fazemos","Recursos","Como funciona"]},{id:"web",label:"Sites & Web",gradient:"160deg, #0c1445 0%, #1e3a8a 100%",links:["Hero","Tipos de site","Recursos extras"]},{id:"mobile",label:"Apps Mobile",gradient:"160deg, #0a1930 0%, #0e7490 100%",links:["Hero","Plataformas","Perfis","Exemplos"]},{id:"software",label:"Softwares",gradient:"160deg, #1e1040 0%, #5b21b6 100%",links:["Hero","Tipos","Recursos"]},{id:"sistemas-locais",label:"Sistemas Locais",gradient:"160deg, #042c1e 0%, #059669 100%",links:["Hero","Sistemas","Controle de Acesso"]}];function d8(){const[e,r]=_.useState(!1),[i,a]=_.useState(!0),[c,d]=_.useState(!1),[f,h]=_.useState(!0),[x,y]=_.useState("web"),[v,b]=_.useState(""),[S,E]=_.useState(!1),[O,$]=_.useState("management"),[A,N]=_.useState({home:!0}),[R,V]=_.useState(44),[J,Q]=_.useState(1),[H,W]=_.useState("web"),X=I=>N(me=>({...me,[I]:!me[I]})),te=[["#botoes","Botões"],["#badges","Badges"],["#inputs","Inputs"],["#cards","Cards"],["#selecoes","Seleções"],["#navegacao","Navegação"],["#feedback","Feedback"],["#tabela","Tabela"],["#tipografia","Tipografia"],["#cores","Cores"],["#gradientes","Gradientes"],["#padroes","Padrões"]];return s.jsxs(E_,{children:[s.jsxs(T_,{children:[s.jsxs(I_,{children:[s.jsx(R_,{children:"OG Labs · Design System · v1.0"}),s.jsx(A_,{children:"Biblioteca de Componentes"}),s.jsx(O_,{children:"Todos os componentes reais e reutilizáveis — com variações e estados interativos."})]}),s.jsx(N_,{children:s.jsx(L_,{children:te.map(([I,me])=>s.jsx(M_,{href:I,children:me},I))})})]}),s.jsxs(D_,{children:[s.jsxs(Jt,{id:"botoes",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Botões"}),s.jsx(Yt,{children:"Button · PillButton · ButtonGroup"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Button, PillButton, ButtonGroup } from '../components/ui'"})]}),s.jsx(pe,{children:"Variantes — todas clicáveis"}),s.jsx(he,{children:s.jsx(gi,{children:["primary","secondary","ghost","danger","amber","cyan","green","white"].map(I=>s.jsxs(ht,{children:[s.jsx(gt,{children:I}),s.jsx(Re,{variant:I,children:I==="primary"?"Continuar":I==="white"?"White":I.charAt(0).toUpperCase()+I.slice(1)})]},I))})}),s.jsx(he,{$dark:!0,children:s.jsxs(gi,{children:[s.jsxs(ht,{children:[s.jsx(gt,{$dark:!0,children:"White em fundo escuro"}),s.jsxs(Re,{variant:"white",children:[s.jsx(xt,{size:14})," Começar"]})]}),s.jsxs(ht,{children:[s.jsx(gt,{$dark:!0,children:"Amber em fundo escuro"}),s.jsx(Re,{variant:"amber",children:"🧮 Orçamento"})]}),s.jsxs(ht,{children:[s.jsx(gt,{$dark:!0,children:"Ghost em fundo escuro"}),s.jsx(Re,{variant:"ghost",style:{color:"rgba(255,255,255,0.7)",borderColor:"rgba(255,255,255,0.2)"},children:"Ver mais"})]})]})}),s.jsx(pe,{children:"Estados"}),s.jsx(he,{children:s.jsxs(gi,{children:[s.jsxs(ht,{children:[s.jsx(gt,{children:"Default"}),s.jsx(Re,{children:"Continuar"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Disabled"}),s.jsx(Re,{disabled:!0,children:"Continuar"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Loading"}),s.jsx(Re,{loading:!0,children:"Continuar"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Com leftIcon"}),s.jsx(Re,{leftIcon:s.jsx(xt,{size:14}),children:"Próxima"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Com rightIcon"}),s.jsx(Re,{rightIcon:s.jsx(xt,{size:14}),children:"Próxima"})]})]})}),s.jsx(pe,{children:"Tamanhos"}),s.jsx(he,{children:s.jsxs(gi,{$align:"center",children:[s.jsxs(ht,{children:[s.jsx(gt,{children:"Large"}),s.jsx(Re,{size:"lg",leftIcon:s.jsx(xt,{size:16}),children:"Começar agora"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Medium (padrão)"}),s.jsx(Re,{size:"md",leftIcon:s.jsx(xt,{size:14}),children:"Continuar"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Small"}),s.jsx(Re,{size:"sm",leftIcon:s.jsx(xt,{size:12}),children:"Ver mais"})]})]})}),s.jsx(pe,{children:"PillButton (FloatingQuizBtn) e fullWidth"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.875rem",maxWidth:400},children:[s.jsx(ph,{onClick:()=>{},children:"🧮 Faça um Orçamento Grátis"}),s.jsx(Re,{variant:"primary",fullWidth:!0,leftIcon:s.jsx(za,{size:15}),children:"Enviar mensagem"}),s.jsx(Re,{variant:"secondary",fullWidth:!0,leftIcon:s.jsx(Ca,{size:15}),children:"Ligar agora"})]})}),s.jsx(pe,{children:"ButtonGroup"}),s.jsx(he,{children:s.jsxs(Q6,{children:[s.jsx(Re,{leftIcon:s.jsx(xt,{size:14}),children:"Quero começar"}),s.jsx(Re,{variant:"ghost",children:"Ver exemplos"})]})})]}),s.jsxs(Jt,{id:"badges",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Badges e Tags"}),s.jsx(Yt,{children:"Badge · aliases semânticos"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Badge, BadgeWeb, BadgeMobile, ... } from '../components/ui'"})]}),s.jsx(pe,{children:"Variantes"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"0.625rem",$wrap:!0,$align:"center",children:["blue","cyan","purple","green","amber","red","gray","outline"].map(I=>s.jsx(jt,{variant:I,children:I},I))})}),s.jsx(pe,{children:"Com ponto de status"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"0.75rem",$wrap:!0,$align:"center",children:[s.jsx(jt,{variant:"green",dot:!0,children:"Online"}),s.jsx(jt,{variant:"amber",dot:!0,children:"Aguardando"}),s.jsx(jt,{variant:"red",dot:!0,children:"Offline"}),s.jsx(jt,{variant:"gray",dot:!0,children:"Inativo"})]})}),s.jsx(pe,{children:"Aliases semânticos por página"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"0.75rem",$wrap:!0,$align:"center",children:[s.jsx(mh,{children:"Sites Web"}),s.jsx(hh,{children:"Apps Mobile"}),s.jsx(gh,{children:"Softwares"}),s.jsx(xh,{children:"Sistemas Locais"}),s.jsx(eC,{children:"Em breve"})]})}),s.jsx(pe,{children:"Tamanhos"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1rem",$wrap:!0,$align:"center",children:[s.jsxs(ht,{children:[s.jsx(gt,{children:"Médio (padrão)"}),s.jsx(jt,{children:"Sites & Sistemas Web"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Pequeno"}),s.jsx(jt,{size:"sm",children:"Sites & Sistemas Web"})]})]})})]}),s.jsxs(Jt,{id:"inputs",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Inputs e Formulário"}),s.jsx(Yt,{children:"Field · Input · Select · Textarea"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Field, Input, Select, Textarea } from '../components/ui'"})]}),s.jsx(pe,{children:"Input — todos os estados"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(ut,{label:"Padrão",hint:"Campo obrigatório",style:{maxWidth:260},children:s.jsx(un,{placeholder:"Seu nome"})}),s.jsx(ut,{label:"Em foco",style:{maxWidth:260},children:s.jsx(un,{fieldState:"focus",defaultValue:"João Silva",readOnly:!0})}),s.jsx(ut,{label:"Sucesso",success:"Nome válido ✓",style:{maxWidth:260},children:s.jsx(un,{fieldState:"success",defaultValue:"João Silva",readOnly:!0,rightIcon:s.jsx(Li,{size:15,color:"#16a34a"})})}),s.jsx(ut,{label:"Erro",error:"Nome deve ter ao menos 2 caracteres",style:{maxWidth:260},children:s.jsx(un,{fieldState:"error",defaultValue:"J",readOnly:!0})}),s.jsx(ut,{label:"Desabilitado",hint:"Não editável",style:{maxWidth:260},children:s.jsx(un,{disabled:!0,defaultValue:"Campo bloqueado"})})]})}),s.jsx(pe,{children:"Input com ícones"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(ut,{label:"Com ícone esquerda",style:{maxWidth:280},children:s.jsx(un,{placeholder:"contato@empresa.com",leftIcon:s.jsx(za,{size:15})})}),s.jsx(ut,{label:"Com ícone busca",style:{maxWidth:280},children:s.jsx(un,{placeholder:"Buscar solução…",leftIcon:s.jsx(Lg,{size:15})})}),s.jsx(ut,{label:"Senha",style:{maxWidth:280},children:s.jsx(un,{type:S?"text":"password",value:v,onChange:I=>b(I.target.value),placeholder:"Senha",rightIcon:S?s.jsxs("svg",{width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[s.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"}),s.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):s.jsxs("svg",{width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),onRightIconClick:()=>E(!S)})})]})}),s.jsx(pe,{children:"Select"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(ut,{label:"Padrão",style:{maxWidth:260},children:s.jsxs(co,{children:[s.jsx("option",{value:"",children:"Selecione uma opção"}),s.jsx("option",{children:"Sites & Sistemas Web"}),s.jsx("option",{children:"Apps Mobile"}),s.jsx("option",{children:"Softwares"})]})}),s.jsx(ut,{label:"Em foco",style:{maxWidth:260},children:s.jsxs(co,{fieldState:"focus",defaultValue:"Sites & Sistemas Web",children:[s.jsx("option",{children:"Sites & Sistemas Web"}),s.jsx("option",{children:"Apps Mobile"})]})}),s.jsx(ut,{label:"Erro",error:"Selecione um interesse",style:{maxWidth:260},children:s.jsx(co,{fieldState:"error",children:s.jsx("option",{value:"",children:"Selecione"})})}),s.jsx(ut,{label:"Desabilitado",style:{maxWidth:260},children:s.jsx(co,{disabled:!0,children:s.jsx("option",{children:"Não disponível"})})})]})}),s.jsx(pe,{children:"Textarea"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,children:[s.jsx(ut,{label:"Padrão",hint:"Opcional",style:{maxWidth:360},children:s.jsx(va,{placeholder:"Descreva sua necessidade…"})}),s.jsx(ut,{label:"Erro",error:"Mínimo de 10 caracteres",style:{maxWidth:360},children:s.jsx(va,{fieldState:"error",defaultValue:"ok",readOnly:!0})})]})}),s.jsx(pe,{children:"Formulário de contato completo"}),s.jsxs(he,{$pad:"2rem",style:{maxWidth:460},children:[s.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"1.125rem",color:"#0c1445",marginBottom:"1.5rem"},children:"Entre em contato"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.125rem"},children:[s.jsx(ut,{label:"Nome completo",required:!0,children:s.jsx(un,{placeholder:"João Silva"})}),s.jsx(ut,{label:"Telefone / WhatsApp",required:!0,children:s.jsx(un,{placeholder:"(11) 99999-9999",leftIcon:s.jsx(Ca,{size:15})})}),s.jsx(ut,{label:"Interesse",required:!0,children:s.jsxs(co,{children:[s.jsx("option",{value:"",children:"Selecione uma opção"}),s.jsx("option",{children:"Sites & Sistemas Web"}),s.jsx("option",{children:"Apps Mobile"}),s.jsx("option",{children:"Softwares"}),s.jsx("option",{children:"Sistemas Locais"})]})}),s.jsx(ut,{label:"Mensagem",children:s.jsx(va,{placeholder:"Descreva o que você precisa…",style:{minHeight:80}})}),s.jsx(Re,{size:"lg",fullWidth:!0,leftIcon:s.jsx(xt,{size:16}),children:"Enviar mensagem"})]})]})]}),s.jsxs(Jt,{id:"cards",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Cards"}),s.jsx(Yt,{children:"Card · ServiceCard · FeatureCard · StepCard"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Card, ServiceCard, FeatureCard, StepCard } from '../components/ui'"})]}),s.jsx(pe,{children:"Card genérico"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1rem",$wrap:!0,children:[s.jsxs(wh,{style:{width:220},children:[s.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#0c1445",marginBottom:"0.5rem"},children:"Card base"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#4b5684"},children:"Sem hover — para painéis e conteúdo estático."})]}),s.jsxs(wh,{hover:!0,style:{width:220},children:[s.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#0c1445",marginBottom:"0.5rem"},children:"Card com hover"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#4b5684"},children:"Passe o mouse para ver o efeito."})]})]})}),s.jsx(pe,{children:"ServiceCard — 4 estados (clique para selecionar)"}),s.jsx(he,{children:s.jsx(gi,{children:[{id:"web",gradient:"linear-gradient(135deg,#2563eb,#0891b2)",accent:"#2563eb",icon:s.jsx(vo,{size:22,color:"white"}),title:"Sites Web",text:"Para quem quer ter presença online."},{id:"mobile",gradient:"linear-gradient(135deg,#0891b2,#0e7490)",accent:"#0891b2",icon:s.jsx(ir,{size:22,color:"white"}),title:"Apps Mobile",text:"App nativo iOS e Android."},{id:"software",gradient:"linear-gradient(135deg,#7c3aed,#6d28d9)",accent:"#7c3aed",icon:s.jsx(_i,{size:22,color:"white"}),title:"Softwares",text:"Programas para Mac e Windows."},{id:"local",gradient:"linear-gradient(135deg,#059669,#047857)",accent:"#059669",icon:s.jsx(yo,{size:22,color:"white"}),title:"Sist. Locais",text:"Bancos de dados locais."}].map(I=>s.jsx(RC,{state:H===I.id?"selected":"default",accentColor:I.accent,icon:I.icon,iconGradient:I.gradient,title:I.title,text:I.text,onClick:()=>W(I.id),style:{width:210}},I.id))})}),s.jsx(pe,{children:"FeatureCard"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"1rem",$wrap:!0,children:[{icon:s.jsx(Di,{size:18,color:"white"}),title:"Rápido e Seguro",text:"SSL incluso e hospedagem em nuvem com uptime de 99.9%."},{icon:s.jsx(Cr,{size:18,color:"white"}),title:"Protegido",text:"Backup diário automático com recuperação em 1 clique."},{icon:s.jsx(So,{size:18,color:"white"}),title:"Notificações",text:"Avise clientes por e-mail ou push no celular."}].map(I=>s.jsx(NC,{icon:I.icon,title:I.title,text:I.text,style:{flex:1,minWidth:220}},I.title))})}),s.jsx(pe,{children:"StepCard — clique para ativar"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"0.875rem",$wrap:!0,children:[{n:0,step:"Passo 01",title:"Conversa inicial",text:"Conta pra gente o que você precisa, sem termos técnicos."},{n:1,step:"Passo 02",title:"Proposta clara",text:"Preço fixo, prazo definido, sem surpresas no final."},{n:2,step:"Passo 03",title:"Desenvolvimento",text:"Acompanhe cada etapa — você vai ver o progresso."},{n:3,step:"Passo 04",title:"Entrega e suporte",text:"Recebe pronto e pode contar com a gente depois."}].map(I=>s.jsx(FC,{step:I.step,title:I.title,text:I.text,state:J===I.n?"active":"default",onClick:()=>Q(I.n),style:{flex:1,minWidth:180}},I.n))})})]}),s.jsxs(Jt,{id:"selecoes",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Seleções e Controles"}),s.jsx(Yt,{children:"Toggle · Checkbox · RadioGroup · ProgressBar · QuizOptionGroup"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Toggle, Checkbox, RadioGroup, ProgressBar, QuizOptionGroup } from '../components/ui'"})]}),s.jsx(pe,{children:"Toggle"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"2rem",$wrap:!0,$align:"center",children:[s.jsx(ou,{checked:e,onChange:r,label:"Notificações"}),s.jsx(ou,{checked:i,onChange:a,label:"Atualizações ativas"}),s.jsx(ou,{checked:!0,onChange:()=>{},label:"Bloqueado",disabled:!0})]})}),s.jsx(pe,{children:"Checkbox"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"2rem",$wrap:!0,$align:"center",children:[s.jsx(la,{checked:c,onChange:d,label:"Aceito os termos"}),s.jsx(la,{checked:f,onChange:h,label:"Receber novidades"}),s.jsx(la,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Selecionar todos"}),s.jsx(la,{checked:!0,onChange:()=>{},label:"Bloqueado",disabled:!0})]})}),s.jsx(pe,{children:"RadioGroup"}),s.jsx(he,{children:s.jsx(SC,{value:x,onChange:y,options:[{value:"web",label:"Site / Sistema Web"},{value:"mobile",label:"App Mobile"},{value:"software",label:"Software"},{value:"local",label:"Sistema Local"}]})}),s.jsx(pe,{children:"ProgressBar — interativa (clique nos botões)"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{children:[s.jsx(au,{value:R,max:100,height:6,showLabel:!0,labelPosition:"above"}),s.jsxs(Ne,{$gap:"0.5rem",style:{marginTop:"0.875rem"},children:[s.jsx(Re,{size:"sm",variant:"ghost",leftIcon:s.jsx(Og,{size:12}),onClick:()=>V(Math.max(0,R-11)),children:"Voltar"}),s.jsx(Re,{size:"sm",leftIcon:s.jsx(C5,{size:12}),onClick:()=>V(Math.min(100,R+11)),children:"Próxima"})]})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Fina (2px)"}),s.jsx(au,{value:R,height:2})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Grossa (10px)"}),s.jsx(au,{value:R,height:10})]})]})}),s.jsx(pe,{children:"StepProgress (indicador de etapas do Quiz)"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"1.5rem",$wrap:!0,$align:"center",children:[0,1,2,3,4,5,6,7,8,9].map(I=>s.jsxs(ht,{$center:!0,children:[s.jsxs(gt,{children:[I,"/9"]}),s.jsx(_C,{current:I,total:9})]},I))})}),s.jsx(pe,{children:"QuizOptionGroup — clique para selecionar"}),s.jsx(he,{children:s.jsx("div",{style:{maxWidth:400},children:s.jsx(bh,{value:O,onChange:$,options:[{id:"presence",emoji:"🌐",label:"Um lugar meu na internet"},{id:"management",emoji:"📋",label:"Controlar meu negócio"},{id:"mobile",emoji:"📱",label:"Um aplicativo no celular"},{id:"unsure",emoji:"🤷",label:"Ainda não sei ao certo"}]})})}),s.jsx(pe,{children:"QuizOptionGroup — variantes por página"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"1.5rem",$wrap:!0,children:[{label:"Web (Blue)",accent:"#2563eb",gradient:"linear-gradient(135deg,#2563eb,#1d4ed8)"},{label:"Mobile (Cyan)",accent:"#0891b2",gradient:"linear-gradient(135deg,#0891b2,#0e7490)"},{label:"Software (Purple)",accent:"#7c3aed",gradient:"linear-gradient(135deg,#7c3aed,#6d28d9)"},{label:"Local (Green)",accent:"#059669",gradient:"linear-gradient(135deg,#059669,#047857)"}].map(I=>s.jsxs("div",{style:{flex:1,minWidth:200},children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.75rem"},children:I.label}),s.jsx(bh,{value:"opcao1",onChange:()=>{},options:[{id:"opcao1",emoji:"✓",label:"Opção selecionada"},{id:"opcao2",emoji:"○",label:"Outra opção"}],accentColor:I.accent,accentGradient:I.gradient})]},I.label))})})]}),s.jsxs(Jt,{id:"navegacao",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Navegação"}),s.jsx(Yt,{children:"Navbar atoms · Accordion · FloatingBtn · Avatar"})]}),s.jsx(pe,{children:"Navbar — modo simples"}),s.jsxs($h,{children:[s.jsx(Ch,{children:s.jsx(Ci,{size:16,color:"white"})}),s.jsx(zh,{children:"OG Labs"}),["Início","Sites & Web","Mobile","Softwares","Locais"].map((I,me)=>s.jsx(_h,{$active:me===0,children:I},I)),s.jsx(Re,{size:"sm",variant:"amber",style:{borderRadius:8},children:"🧮 Orçamento"})]}),s.jsx(pe,{children:"Navbar — modo dropdown (logo verde)"}),s.jsxs($h,{$gradient:"linear-gradient(160deg,#0c1445,#1e3a8a)",children:[s.jsx(Ch,{$dev:!0,children:s.jsx(Ci,{size:16,color:"#41ff24"})}),s.jsx(zh,{children:"OG Labs"}),["Início ▾","Sites ▾","Mobile ▾","Software ▾","Locais ▾"].map((I,me)=>s.jsx(_h,{$active:me===2,style:me===2?{color:"#41ff24"}:void 0,children:I},I))]}),s.jsx(pe,{children:"Dropdown em foco"}),s.jsx(he,{$dark:!0,$pad:"1.5rem",children:s.jsxs(Ne,{$gap:"1.5rem",children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Mobile"}),s.jsxs(Ph,{children:[s.jsxs(lo,{$active:!0,children:[s.jsx(ir,{size:13})," App Nativo (iOS/Android)"]}),s.jsx(lo,{children:"Perfis de Usuário"}),s.jsx(lo,{children:"Exemplos de Uso"})]})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Sites & Web"}),s.jsxs(Ph,{children:[s.jsxs(lo,{$active:!0,children:[s.jsx(vo,{size:13})," Site Institucional"]}),s.jsxs(lo,{children:[s.jsx(Cr,{size:13})," Sistema com Login"]}),s.jsxs(lo,{children:[s.jsx(yo,{size:13})," Recursos Extras"]})]})]})]})}),s.jsx(pe,{children:"Menu mobile — accordion (clique para expandir)"}),s.jsx(he,{$dark:!0,$pad:"1.25rem",children:s.jsxs("div",{style:{maxWidth:360},children:[u8.map(I=>s.jsxs(B_,{$gradient:I.gradient,children:[s.jsxs(F_,{onClick:()=>X(I.id),children:[I.label,A[I.id]?s.jsx(M2,{size:16}):s.jsx(N2,{size:16})]}),s.jsx(U_,{$open:!!A[I.id],children:I.links.map(me=>s.jsx(W_,{href:"#",children:me},me))})]},I.id)),s.jsx(ph,{style:{width:"100%",justifyContent:"center",marginTop:"1rem"},children:"🧮 Faça um Orçamento"})]})}),s.jsx(pe,{children:"FloatingQuizBtn — animação de pulso"}),s.jsx(he,{$bg:"#e8edf7",children:s.jsxs(Ne,{$gap:"2rem",$wrap:!0,$align:"center",children:[s.jsxs(ht,{children:[s.jsx(gt,{children:"Com pulso (loop 3s)"}),s.jsx(Eh,{$pulse:!0,children:"🧮 Faça um Orçamento"})]}),s.jsxs(ht,{children:[s.jsx(gt,{children:"Sem pulso"}),s.jsx(Eh,{children:"🧮 Faça um Orçamento"})]})]})}),s.jsx(pe,{children:"Avatar — tamanhos e status"}),s.jsx(he,{children:s.jsxs(Ne,{$gap:"1.5rem",$wrap:!0,$align:"center",children:[s.jsx(kn,{initials:"JK",size:"xl",gradient:"linear-gradient(135deg,#2563eb,#0891b2)",online:!0}),s.jsx(kn,{initials:"MS",size:"lg",gradient:"linear-gradient(135deg,#7c3aed,#5b21b6)",online:"away"}),s.jsx(kn,{initials:"RT",size:"md",gradient:"linear-gradient(135deg,#059669,#047857)",online:!1}),s.jsx(kn,{initials:"CL",size:"sm",gradient:"linear-gradient(135deg,#f59e0b,#d97706)"}),s.jsx(kn,{initials:"OG",size:"xs",gradient:"linear-gradient(135deg,#dc2626,#b91c1c)"})]})}),s.jsx(pe,{children:"AvatarGroup"}),s.jsx(he,{children:s.jsx(f_,{size:"md",avatars:[{initials:"JK",gradient:"linear-gradient(135deg,#2563eb,#0891b2)"},{initials:"MS",gradient:"linear-gradient(135deg,#7c3aed,#5b21b6)"},{initials:"RT",gradient:"linear-gradient(135deg,#059669,#047857)"},{initials:"CL",gradient:"linear-gradient(135deg,#f59e0b,#d97706)"},{initials:"AA",gradient:"linear-gradient(135deg,#0891b2,#0e7490)"},{initials:"BB",gradient:"linear-gradient(135deg,#dc2626,#b91c1c)"}],max:4})})]}),s.jsxs(Jt,{id:"feedback",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Alertas e Feedback"}),s.jsx(Yt,{children:"Alert · Toast · EmptyState"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Alert, Toast, EmptyState } from '../components/ui'"})]}),s.jsx(pe,{children:"Alert inline — 4 tipos"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.625rem"},children:[s.jsx(ca,{type:"info",title:"Informação",children:"Seu orçamento foi gerado. Entre em contato para confirmar o projeto."}),s.jsx(ca,{type:"success",title:"Mensagem enviada!",children:"Recebemos seu contato e entraremos em até 24 horas no WhatsApp."}),s.jsx(ca,{type:"warning",title:"Atenção",children:"Preencha todos os campos obrigatórios antes de continuar."}),s.jsx(ca,{type:"error",title:"Erro ao enviar",onClose:()=>{},children:"Não foi possível enviar. Tente novamente ou ligue para (11) 99999-9999."})]})}),s.jsx(pe,{children:"Toast — notificações flutuantes"}),s.jsx(he,{$bg:"#e8edf7",$pad:"2rem",children:s.jsxs(Ne,{$gap:"1rem",$wrap:!0,children:[s.jsx(lu,{type:"success",onClose:()=>{},children:"Orçamento enviado com sucesso!"}),s.jsx(lu,{type:"error",onClose:()=>{},children:"Erro ao processar. Tente novamente."}),s.jsx(lu,{type:"info",onClose:()=>{},children:"Atualizando em segundo plano…"})]})}),s.jsx(pe,{children:"EmptyState"}),s.jsx(he,{children:s.jsx(s_,{icon:s.jsx(Ag,{size:30}),title:"Nenhuma mensagem ainda",text:"Quando você enviar um orçamento, ele vai aparecer aqui.",action:s.jsx(Re,{variant:"amber",children:"🧮 Faça seu primeiro orçamento"})})})]}),s.jsxs(Jt,{id:"tabela",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Tabela de Dados"}),s.jsx(Yt,{children:"Table · Thead · Tbody · Th · Td · Tr"})]}),s.jsxs(kr,{children:["Importar: ",s.jsx(cn,{children:"import { Table, Thead, Tbody, Th, Td, Tr } from '../components/ui'"})]}),s.jsxs(y_,{children:[s.jsx(v_,{children:s.jsxs("tr",{children:[s.jsx(hi,{children:"Cliente"}),s.jsx(hi,{children:"Solução"}),s.jsx(hi,{children:"Status"}),s.jsx(hi,{children:"Valor"}),s.jsx(hi,{children:"Ação"})]})}),s.jsxs(w_,{children:[s.jsxs(ua,{selected:!0,children:[s.jsx(Xe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625rem",children:[s.jsx(kn,{initials:"JK",size:"sm"}),s.jsx("strong",{children:"João K."})]})}),s.jsx(Xe,{children:s.jsx(mh,{children:"Sites Web"})}),s.jsx(Xe,{children:s.jsx(jt,{variant:"amber",dot:!0,children:"Em Proposta"})}),s.jsx(Xe,{mono:!0,children:"R$ 3.500"}),s.jsx(Xe,{children:s.jsx(Re,{size:"sm",variant:"ghost",children:"Ver"})})]}),s.jsxs(ua,{highlighted:!0,children:[s.jsx(Xe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625rem",children:[s.jsx(kn,{initials:"MS",size:"sm",gradient:"linear-gradient(135deg,#059669,#047857)"}),s.jsx("strong",{children:"Maria S."})]})}),s.jsx(Xe,{children:s.jsx(hh,{children:"Mobile"})}),s.jsx(Xe,{children:s.jsx(jt,{variant:"blue",dot:!0,children:"Em Progresso"})}),s.jsx(Xe,{mono:!0,children:"R$ 8.000"}),s.jsx(Xe,{children:s.jsx(Re,{size:"sm",variant:"ghost",children:"Ver"})})]}),s.jsxs(ua,{children:[s.jsx(Xe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625rem",children:[s.jsx(kn,{initials:"RT",size:"sm",gradient:"linear-gradient(135deg,#7c3aed,#5b21b6)"}),s.jsx("strong",{children:"Ricardo T."})]})}),s.jsx(Xe,{children:s.jsx(gh,{children:"Software"})}),s.jsx(Xe,{children:s.jsx(jt,{variant:"green",dot:!0,children:"Concluído"})}),s.jsx(Xe,{mono:!0,children:"R$ 12.000"}),s.jsx(Xe,{children:s.jsx(Re,{size:"sm",children:"Ver"})})]}),s.jsxs(ua,{muted:!0,children:[s.jsx(Xe,{children:s.jsxs(Ne,{$align:"center",$gap:"0.625px",children:[s.jsx(kn,{initials:"CL",size:"sm",gradient:"linear-gradient(135deg,#f59e0b,#d97706)"}),s.jsx("strong",{children:"Carla L."})]})}),s.jsx(Xe,{children:s.jsx(xh,{children:"Sistemas Locais"})}),s.jsx(Xe,{children:s.jsx(jt,{variant:"red",dot:!0,children:"Cancelado"})}),s.jsx(Xe,{mono:!0,style:{textDecoration:"line-through",opacity:.5},children:"R$ 5.000"}),s.jsx(Xe,{children:s.jsx(Re,{size:"sm",variant:"ghost",children:"Ver"})})]})]})]})]}),s.jsxs(Jt,{id:"tipografia",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Tipografia"}),s.jsx(Yt,{children:"Plus Jakarta Sans · Inter"})]}),s.jsx(pe,{children:"Escala tipográfica"}),s.jsx(Y_,{children:l8.map(I=>s.jsxs(K_,{children:[s.jsx(X_,{children:I.token}),s.jsx(e8,{children:I.sz}),s.jsx(t8,{$font:`${I.font},sans-serif`,$sz:I.sz,$w:I.w,children:I.sample})]},I.token))}),s.jsx(pe,{children:"SectionHeader — componente de cabeçalho de seção"}),s.jsx(he,{$pad:"3rem",children:s.jsx(kh,{eyebrow:"Soluções Digitais Completas",title:"O certo para o seu negócio",subtitle:"Do site mais simples ao sistema mais completo — sempre com linguagem clara, preço justo e suporte de verdade."})}),s.jsx(he,{$dark:!0,$pad:"3rem",children:s.jsx(kh,{eyebrow:"OG Labs · Soluções",title:"Seu negócio no mundo digital",subtitle:"Criamos sites, sistemas, aplicativos e softwares para quem quer crescer sem complicação.",dark:!0})})]}),s.jsxs(Jt,{id:"cores",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Cores"}),s.jsx(Yt,{children:"Primárias · Accent · Semânticas"})]}),s.jsx(pe,{children:"Primárias — Azul Marinho"}),s.jsx(uu,{children:i8.map(I=>s.jsxs(du,{children:[s.jsx(fu,{$c:I.hex}),s.jsxs(pu,{children:[s.jsx(mu,{children:I.name}),s.jsx(hu,{children:I.hex}),s.jsx(gu,{children:I.token})]})]},I.hex))}),s.jsx(pe,{children:"Accent — Cyan e Amber"}),s.jsx(uu,{children:s8.map(I=>s.jsxs(du,{children:[s.jsx(fu,{$c:I.hex,$h:56}),s.jsxs(pu,{children:[s.jsx(mu,{children:I.name}),s.jsx(hu,{children:I.hex}),s.jsx(gu,{children:I.token})]})]},I.hex))}),s.jsx(pe,{children:"Semânticas"}),s.jsx(uu,{children:a8.map(I=>s.jsxs(du,{children:[s.jsx(fu,{$c:I.hex,$h:52}),s.jsxs(pu,{children:[s.jsx(mu,{children:I.name}),s.jsx(hu,{children:I.hex}),s.jsx(gu,{children:I.token})]})]},I.name))})]}),s.jsxs(Jt,{id:"gradientes",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Gradientes"}),s.jsxs(Yt,{children:[Th.length," em uso no produto"]})]}),s.jsx(Z_,{children:Th.map(I=>s.jsxs(q_,{children:[s.jsx(H_,{$g:I.g}),s.jsxs(V_,{children:[s.jsx(J_,{children:I.name}),s.jsx(G_,{children:I.use}),s.jsx(Q_,{children:I.g})]})]},I.name))})]}),s.jsxs(Jt,{id:"padroes",children:[s.jsxs(Gt,{children:[s.jsx(Qt,{children:"Padrões e Utilitários"}),s.jsx(Yt,{children:"Divider · InlineCode · CodeBlock · Ícones"})]}),s.jsx(pe,{children:"Divider — variantes"}),s.jsx(he,{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.625rem"},children:"Linha simples"}),s.jsx(cu,{})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.625rem"},children:"Com gradiente"}),s.jsx(cu,{gradient:!0})]}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",marginBottom:"0.625rem"},children:"Com label"}),s.jsx(cu,{label:"Ou"})]})]})}),s.jsx(pe,{children:"InlineCode e CodeBlock"}),s.jsxs(he,{children:[s.jsxs("p",{style:{fontSize:"0.875rem",color:"#4b5684",marginBottom:"1rem"},children:["Importe com ",s.jsx(cn,{children:"import { Button } from '../components/ui'"})," e use o componente em qualquer página."]}),s.jsx(jh,{children:`import { Button, Badge, Field, Input } from '../components/ui';

export function Contato() {
  return (
    <Field label="Nome" required>
      <Input placeholder="João Silva" />
    </Field>
    <Button variant="amber" fullWidth>
      🧮 Faça um Orçamento
    </Button>
  );
}`})]}),s.jsx(pe,{children:"Ícones usados (lucide-react)"}),s.jsx(he,{children:s.jsx(Ne,{$gap:"0.875rem",$wrap:!0,children:c8.map(I=>s.jsxs(n8,{children:[s.jsx(r8,{children:I.icon}),s.jsx(o8,{children:I.label})]},I.label))})}),s.jsx(pe,{children:"PageSection — wrapper de seção"}),s.jsxs(he,{children:[s.jsxs("p",{style:{fontSize:"0.85rem",color:"#4b5684",marginBottom:"1rem"},children:[s.jsx(cn,{children:'<PageSection id="hero" bg="#f7f9ff">'})," aplica ",s.jsx(cn,{children:"padding: 5rem 1.5rem"})," com ",s.jsx(cn,{children:"max-width: 1366px"})," automático."]}),s.jsx(jh,{children:`import { PageSection, SectionHeader } from '../components/ui';

<PageSection id="o-que-fazemos">
  <SectionHeader
    eyebrow="Nossas soluções"
    title="O certo para o seu negócio"
    subtitle="Sempre com linguagem clara."
  />
  {/* conteúdo da seção */}
</PageSection>`})]})]})]})]})}const f8=p2`
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
`,p8=m.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,m8=m.main`
  flex: 1;
  padding-top: 68px;
`;function h8(){const{pathname:e}=mn();return _.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null}function g8(){return s.jsxs(Yy,{basename:"/OG/",children:[s.jsx(f8,{}),s.jsx(h8,{}),s.jsxs(p8,{children:[s.jsx(Zj,{}),s.jsx(H$,{}),s.jsx(G$,{}),s.jsx(m8,{children:s.jsxs(Cy,{children:[s.jsx(Sr,{path:"/",element:s.jsx(Z4,{})}),s.jsx(Sr,{path:"/web",element:s.jsx(P3,{})}),s.jsx(Sr,{path:"/mobile",element:s.jsx(Sz,{})}),s.jsx(Sr,{path:"/software",element:s.jsx(l6,{})}),s.jsx(Sr,{path:"/sistemas-locais",element:s.jsx(V6,{})}),s.jsx(Sr,{path:"/styleguide",element:s.jsx(d8,{})})]})}),s.jsx(Xj,{})]})]})}const b0=document.getElementById("root");if(!b0)throw new Error('Elemento raiz "#root" não encontrado.');Cx.createRoot(b0).render(s.jsx(_.StrictMode,{children:s.jsx(g8,{})}));
