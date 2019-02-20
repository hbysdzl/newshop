var TINGYUN=function(e,t,n){function r(e){var t=!!e&&"length"in e&&e.length,n=typeof e;return"function"!==n&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t){var n,i=0;if(e)if(r(e))for(n=e.length;i<n&&!1!==t.call(e[i],e[i],i);i++);else for(i in e)if(!1===t.call(e[i],e[i],i))break;return e}function o(e){return function(t){return"Array"===e&&Array.isArray?Array.isArray(t):Object.prototype.toString.call(t)==="[object "+e+"]"}}function a(e){switch(typeof e){case"object":if(!e)return null;if(e instanceof Array)return i(e,function(t,n){e[n]=a(t)}),"["+e.join(",")+"]";if(e instanceof Date)return e.getTime().toString();var t="";return i(e,function(e,n){Re(e)||(t+=a(n)+":"+a(e)+",")}),t&&(t=t.substr(0,t.length-1)),"{"+t+"}";case"string":return Ce+e.replace(Oe,"\\$1").replace(Le,"\\n")+Ce;case"number":return isNaN(e)?null:e;case"boolean":return e;case"function":return a(e.toString());case"undefined":default:return'"undefined"'}}function u(e){return e&&qe(e)?ke(e):e}function c(e,t,n,r){var i=function(){return Be(e,t,i),n.apply(this,arguments)};return je(e,t,i,r)}function s(e,t){return Function.prototype.apply.apply(e,t)}function f(e,t){return function(){e.apply(t,arguments)}}function l(e){return Me?Me(e):e}function d(e){return arguments.length<2||!e?e:(i(He.call(arguments,1),function(t){i(t,function(t,n){e[n]=t})}),e)}function h(e,t){for(var n=-1,r=0,i=null==e?0:e.length,o=[];++n<i;){var a=e[n];t(a,n,e)&&(o[r++]=a)}return o}function v(e,t){return e?t?e.replace(/\{(\w+.?\w+)\}/g,function(e,n){return t[n]||""}).replace(/\{(\d+)\}/g,function(e,n){return t[n]||""}):e:""}function p(e){return setTimeout(e,0)}function m(){}function g(){return+new Date}function y(e){return function(){if(null!==e){var t=e;e=null,t.apply(this,arguments)}}}function S(e){return e?qe(e)?e.length:t.ArrayBuffer&&e instanceof ArrayBuffer?e.byteLength:t.Blob&&e instanceof Blob?e.size:e.length?e.length:0:0}function _(e){return Fe!==Ue&&/^https/i.test(e&&e.protocol||Fe)?"https:":Ue}function w(e,t,n,r){var o=null;return e&&t&&(o=_(r)+"//"+e+t,n&&(o+="?",i(n,function(e,t){var n=[l(t),"=",l(e),"&"];o+=n.join("")}),o+="__r="+g())),o}function E(){this.events={}}function b(e){return!(e in $e)||$e[e]}function T(e){var t=Xe.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?t[3]:null}function x(e,t,n){var r=e+"="+t;if(n){var i=new Date;i.setTime(i.getTime()+1e3*n),r+=";expires="+i.toGMTString()}Xe.cookie=r}function k(e,t,n){var r=Xe.createElement(e);try{for(var i in t)r[i]=t[i]}catch(a){var o="<"+e;for(var i in t)o+=" "+i+'="'+t[i]+'"';o+=">",n||(o+="</"+e+">"),r=Xe.createElement(o)}return r}function I(e,t,n,r){Re(n)&&(r=n);var i=k("div",{style:gt}),o=k("iframe",{name:"ty_form",width:0,height:0,style:gt}),a=k("form",{style:gt,action:e,enctype:"application/x-www-form-urlencoded",method:"post",target:"ty_form"}),u=k("input",{name:"data",type:"hidden"},!0);u.value=Ie(t),a.appendChild(u),i.appendChild(o),i.appendChild(a),Xe.body.appendChild(i),a.submit(),o.onreadystatechange=function(){o.readyState!==st&&4!==o.readyState||(r(null,o.innerHTML),Xe.body.removeChild(i))}}function q(e,t,n){if(e&&n&&Re(n)){var r=e[t];if(!r||!r._wrapped){var i=n(r);return i&&(i._wrapped=!0),e[t]=i,i}}}function N(e){_t&&e()}function R(e){return function(){_t&&e.apply(this,arguments)}}function A(){_t=!1}function C(){Tt.on(it,y(function(){e();var t=g();N(function(){wt.load=t}),qt.loadEventEnd=t})),i([it,ot,at,ut],function(e){je(t,e,function(t){N(function(){(wt.e[e]||(wt.e[e]=[])).push(g())}),Tt.emit(e,t)})});var e=y(function(){var e=g();N(function(){wt.end=e}),qt.domContentLoadedEventStart=e,Xe.querySelectorAll&&(bt.resources=bt.resources||[],i(Xe.querySelectorAll("head>link,head>script"),function(e){var t;"LINK"==e.tagName?t=e.href:"SCRIPT"!=e.tagName||e.defer||e.async||(t=e.src),t&&bt.resources.push(t)}))});je(Xe,"DOMContentLoaded",e),je(Xe,ct,function(t){Xe.readyState===st&&e()});var n=y(function(){qt.touch=g()});i(["scroll","click","keypress"],function(e){c(Xe,e,n)}),q(t,"requestAnimationFrame",function(e){return function(){if(!qt.firstPaint){var n=g();N(function(){wt.an.count++,wt.an.t=n}),qt.firstPaint=n,t.requestAnimationFrame=e}return e.apply(this,arguments)}})}function O(e){D(e,xt)}function L(e){D(e,kt)}function D(e,t){var n="ok";if(!e)return n=t.length?t.join("\n"):n;t.push(e)}function j(){var e=this;e.xhrs={},e.errs=[],E.call(e)}function B(e,t){this.flags=0,Re(e.create)&&(this.create=e.create,this.flags|=Dt),Re(e.before)&&(this.before=e.before,this.flags|=jt),Re(e.after)&&(this.after=e.after,this.flags|=Bt),Re(e.error)&&(this.error=e.error,this.flags|=Mt),this.data=t}function M(e,t){if(!Pt){if(!Ae(e)||!e)throw new TypeError("callbacks arguments must be an object");return Pt=new B(e,t)}}function H(e){var t=Pt.data;if(0!=(Pt.flags&Dt)){var n=Pt.create(Pt.data);n!==undefined&&(t=n)}return function(){0!=(Pt.flags&jt)&&Pt.before(this,t);try{var n=e.apply(this,arguments)}catch(r){throw 0!=(Pt.flags&Mt)&&Pt.error(t,r),r}return 0!=(Pt.flags&Bt)&&Pt.after(this,t),n}}function P(e){return!Pt||Pt.flags<=0?e:H(e)}function F(){function e(e){return function(t){return Re(t)&&(arguments[0]=P(t)),e.apply?e.apply(this,arguments):s(e,[this,arguments])}}if(t.EventTarget){var n=t.EventTarget.prototype;q(n,"addEventListener",function(e){return function(t,n,r){return Re(n)&&(n.__wrap=P(n),arguments[1]=n.__wrap),e.apply(this,arguments)}}),q(n,"removeEventListener",function(e){return function(t,n){return n&&n.__wrap?e.call(this,t,n.__wrap):e.apply(this,arguments)}})}q(t,"setTimeout",e),q(t,"setInterval",e)}function U(){this.id=null,this.active=null,this._set=[]}function z(){F();var e=new U;return e.id=M({create:function(){return e.active},before:function(t,n){n&&e.enter(n)},after:function(t,n){n&&e.exit(n)},error:function(t,n){if(t){try{n.moduleId=t.moduleId}catch(r){}e.exit(t)}}}),e}function Y(e){Lt&&console.warn(e||"Event key required!")}function X(e){e=e||{},this.key=e.key;var t=e.timeout||6e5;this.i=t?setTimeout(f(this.fail,this),t):null,this.status=1,this.remain=0,this.xhrs=[],this.s=g(),this.e=null,this.called=this.sent=!1}function G(){if(Object.defineProperty){var e=t[ht];Object.defineProperty(t,ht,{get:function(){return $t++>0&&t.console&&console.warn("window.%s is deprecated, use window.%s instead.",ht,vt),e}})}}function J(e){try{return u(e)}catch(t){O(t&&t.message)}return null}function $(){return qt[tn]||qt._end}function K(){return qt.loadEventEnd||qt._end}function V(e){function r(t){return e[t]>0?e[t]-a:0}var o={},a=n;if(e){N(function(){var t=wt.t={};i(e,function(e,n){Re(e)||(t[n]=e)})}),a=e.navigationStart,o={f:r(Qt),qs:r(Wt),rs:r(Zt),re:r(en),os:r(tn),oe:r(nn),oi:r(rn),oc:r(on),ls:r(an),le:r(un),tus:r(cn),tue:r(sn)};var u=r(ln),c=r(dn),s=r(hn),f=r(vn),l=r(pn),d=r(mn);d-l>0&&(o.cs=l,o.ce=d),c-u>0&&(o.ds=u,o.de=c),(f-s>0||f>0)&&(o.es=s,o.ee=f),0==o.le&&(o.ue=K()-a),qt._le=o.ue||o.le;var h,v;if(e.msFirstPaint)h=e.msFirstPaint,N(function(){wt.fp="m_"+h});else if((v=t.chrome)&&v.loadTimes){var p=v.loadTimes();p&&p.firstPaintTime&&(h=1e3*p.firstPaintTime),N(function(){wt.fp="c_"+p.firstPaintTime})}else qt.firstPaint&&(h=qt.firstPaint,N(function(){wt.fp=h}));h&&(o.fp=Math.round(h-a),qt.fp=o.fp),e[gn]&&(o.sl=r(gn))}else o={t:a,os:$()-a,ls:K()-a};return o.je=qt.errs&&qt.errs.length||0,qt.ct&&(o.ct=qt.ct-a),qt.touch&&(o.fi=qt.touch-a),o}function Q(e){var t={tr:!1,tt:l(Xe.title),charset:Xe.characterSet};Et.resources&&d(t,Et.resources),N(function(){t.debug=wt}),A();var n=qt.errs;i(n,function(e,t){n[t]=e.toObject()}),t.err=n;var r="getEntriesByType";return e[r]?(t.tr=!0,t.res=[],i(e[r]("resource"),function(e){function n(t){var n=e[t];return n>0?n:0}var r=e.initiatorType,i=e.name,o={o:n("startTime"),rt:r,n:i,f:n(Qt),ds:n(ln),de:n(dn),cs:n(pn),ce:n(mn),sl:n(gn),qs:n(Wt),rs:n(Zt),re:n(en),ts:e.transferSize||0,es:e.encodedBodySize||0};if("xmlhttprequest"===r){var a=W(i);a&&(o.aid=a.id,o.atd=a.trId,o.an=a.action,o.aq=a.time&&a.time.qu,o.as=a.time&&a.time.duration)}t.res.push(o)})):L(v(At,[r])),t}function W(e){var t;return i(qt.xhrs,function(n,r){if(r&&r.indexOf(e)>-1)return t=n,!1}),t}function Z(e){var t={};return e&&(t.id=e.id,t.a=e.a,t.q=e.q,t.tid=e.tid,t.n=e.n),t}function ee(e){var t=0,n=e.timing;return n?e.getEntriesByName&&(t=n.domLoading,i(bt.resources,function(r){var i=e.getEntriesByName(r);if(1==i.length){var o=i[0].responseEnd+n.navigationStart;o>t&&(t=o)}}),t-=n.navigationStart):L("fp=0"),N(function(){wt._fp=t}),Math.round(t)}function te(e,n,r,o){var a=r||0,u=Et.firstScreenResources;if(u&&u.length&&e.getEntriesByName)return i(u,function(t){var n=e.getEntriesByName(t);if(n.length){var r=n[0].responseEnd;r>a&&(a=r)}}),o.fs_s=1,Math.round(a);if(!Xe.createElement("img").getBoundingClientRect)return N(function(){wt.fs=a}),a;if(e.getEntriesByName){var c=t.innerHeight,s=[];i(Xe.querySelectorAll("img"),function(e){!re(e)&&""!=e.src&&ne(e)<c&&s.push(e.src)});var f=(n.loadEventEnd||qt.loadEventEnd)-n.navigationStart;i(s,function(t){var n=e.getEntriesByName(t);if(n.length){var r=n[0],i=r.responseEnd;r.fetchStart<=f&&i>a&&(a=i)}})}return Math.round(a)}function ne(e){var n;if("undefined"==typeof e.getBoundingClientRect)return undefined;n=e.getBoundingClientRect();var r=t.pageYOffset;return n.top+(0===r?0:r||Xe.scrollTop||0)-(Xe.clientTop||0)}function re(e){var n="none";if(t.getComputedStyle){var r=e.ownerDocument.defaultView;r&&r.opener||(r=t),n=r.getComputedStyle(e).display}else e.currentStyle&&(n=e.currentStyle.display);return n&&"none"==n}function ie(e){var t=n,r=0;return e&&(t=e.navigationStart||t,r=e[tn]||e.domInteractive||e.domLoading||r),(r=qt[tn]||r||qt._end)-t}function oe(e){if(e){var t=e.fetchStart;if(t)return t-e.navigationStart}return undefined}function ae(e){return function(t,n){var r=this;if(!r[mt]){var i=r[ht]={};i.method=t,i.url=n,i.id=Tn++;var o=Ut.get("event");o&&(i.key=o.key,o.remain++)}try{return e.apply(r,arguments)}catch(a){}return s(e,[r,arguments])}}function ue(e){return function(t){var n=this;if(!n[mt]){var r=n[ht];r&&(r.start=g(),r.reqSize=S(t)),ce(n),n.setRequestHeader&&$e.id&&r&&In(r.url)&&(r.r=g()%1e9,n.setRequestHeader("X-Tingyun-Id",$e.id+";r="+r.r))}try{return e.apply(n,arguments)}catch(i){}return s(e,[n,arguments])}}function ce(e){function t(t){return P(function(){se(e);var n;if(Re(t)){var r=e[ht];if(r&&4==e.readyState)var i=g();n=t.apply(this,arguments),r&&4==e.readyState&&(r.cbTime=g()-i,e[ht]=null)}return n})}function n(t){e[ht]&&(e[ht].errorCode=t)}if(e[kn])q(e,kn,t);else try{je(e,ct,P(function(){se(e)})),i(xn,function(t,r){je(e,r,function(){n(t)})})}catch(r){return void p(function(){i(xn,function(t,r){var i="on"+r;e[i]?q(e,i,function(e){if(n(t),Re(e))return e.apply(this,arguments)}):e[i]=function(){n(t)}}),q(e,kn,t)})}p(function(){q(e,kn,t)})}function se(e){var t=e[ht];if(t&&(t.end=g(),t.readyState=e.readyState,4==e.readyState)){t.status=e.status,t.resSize=fe(e);var n=Ut.get("event");p(function(){var r=!1;if(i(bn,function(e){if(e.id===t.id)return r=!0,!1}),!r){var o=le(t,e);n&&n.key==t.key&&(n.xhrs.push(o),0==--n.remain&&n._end()),qt.xhrs&&(En(t),qt.xhrs[t.url]=o),bn.push(o)}})}}function fe(e){var t=0;if(""==e.responseType||"text"==e.responseType)t=S(e.responseText);else if(e.response)t=S(e.response);else try{t=S(e.responseText)}catch(n){}return t}function le(e,t){if(e){var n=e.status,r={id:e.id,req:e.method+" "+e.url,start:e.start,du:n>0?e.end-e.start:0,cb:e.cbTime||0,status:n,err:e.errorCode?e.errorCode:0,rec:e.resSize,send:e.reqSize};if(e.r){var i=he(t,e);i&&(r.s_id=i.id,r.s_name=i.action,i.time&&(r.s_du=i.time.duration,r.s_qu=i.time.qu),r.t_id=i.trId)}return r}}function de(e,t){if(e&&e.getResponseHeader)return e.getResponseHeader(t)}function he(e,t){var n=J(de(e,"X-Tingyun-Tx-Data"));return n&&n.r&&ve(n.r)===ve(t.r)?n:null}function ve(e){return e+""}function pe(){return setInterval(function(){if(bn&&bn.length){var e=[];i(bn,function(t){e.push(t)}),qt.emit("send","/xhr1",null,{xhr:e},function(){bn=h(bn,function(t){return e.indexOf(t)<0})}),Pe()&&!t.XDomainRequest&&(bn=[])}},_n)}function me(){var e=Ge&&Ge.prototype;return e?(q(e,"open",ae),q(e,"send",ue)):Ge&&(t.XMLHttpRequest=function(){var e=new Ge;return q(e,"open",ae),q(e,"send",ue),e}),pe()}function ge(e){this.limit=e,this.reset()}function ye(e,t,n,r){return String(e)+String(t)+String(n)+String(r)}function Se(e,t,n,r,i,o,a){var u=this;u.id=e,u.time=g(),u.msg=t,u.lineno=r,u.colno=i,u.filename=n,u.count=1,u.stack=o&&o.stack||"",u.module=a,u.fix();var c=An[e];u.ep=c?0:1,An[e]=!0}function _e(e){var t=function(e){var t=[];return i(e,function(e){t.push(e.toObject())}),t}(Rn.c);if(!t||!t.length)return null;qt.emit("send","/err1",{fu:Nn||Nn++,os:parseInt((g()-(bt.pfStart||n))/1e3)},{datas:t},f(Rn.reset,Rn))}function we(e,t,n,r,o){if(t||!Qe){var a=!1;if(i(Je.domains,function(e){if(a=e.test(t))return!1}),!a){var u=o&&o.moduleId,c=ye(e,n,r,u),s=Rn.get(c);s?s.increase():(s=new Se(c,e,t,n,r,o,u),Rn.add(c,s),qt.errs&&qt.errs.push(s))}}}function Ee(){var e=t.onerror;t.onerror=function(t,n,r,i,o){if(we(t,n,r,i,o),Re(e))return e.apply(this,arguments)},t.onerror._ty=!0}function be(){var e=t.onerror;e&&e._ty||Ee()}function Te(){var e=Pe();return e?Ee():je(t,rt,function(e){var n,r,i,o,a;g();(e instanceof t.Event||t.ErrorEvent&&e instanceof t.ErrorEvent)&&(n=e.message||e.error&&(e.error.message||e.error.constructor.name)||"",r=e.lineno||0,i=e.colno||0,(o=e.filename||e.error&&e.error.filename||e.target&&e.target.baseURI||"")==Xe.URL&&(o="#"),a=e.error),we(n,o,r,i,a)}),Tt.on([it,ot,at,ut],function(e){_e()}).on(it,function(){e&&p(be)}),setInterval(_e,qn)}function xe(){Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n=this.length>>>0;if((t|=0)<0)t=Math.max(n-t,0);else if(t>=n)return-1;if(e===undefined){do{if(t in this&&this[t]===undefined)return t}while(++t!==n)}else do{if(this[t]===e)return t}while(++t!==n);return-1})}var ke,Ie,qe=o("String"),Ne=o("Array"),Re=o("Function"),Ae=o("Object"),Ce='"',Oe=/([\"\\])/g,Le=/\n/g,De=t.JSON;De&&De.parse&&De.stringify?(ke=function(e){return JSON.parse(e)},Ie=function(e){return JSON.stringify(e)}):(ke=function(e){return new Function("return "+e)()},Ie=a);var je,Be;t.addEventListener?(je=function(e,t,n,r){return e.addEventListener(t,n,r)},Be=function(e,t,n){return e.removeEventListener(t,n)}):(je=function(e,t,n){return e.attachEvent("on"+t,n)},Be=function(e,t,n){return e.detachEvent("on"+t,n)});var Me=t.encodeURIComponent,He=[].slice,Pe=new Function("return!+[1,]"),Fe=t.location.protocol,Ue="http:",ze=function(){function e(e){return e<0?NaN:e<=30?0|Math.random()*(1<<e):e<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<e-30))*(1<<30):NaN}function t(e,t){for(var n=e.toString(16),r=t-n.length,i="0";r>0;r>>>=1,i+=i)1&r&&(n=i+n);return n}return function(){return t(e(32),8)+"-"+t(e(16),4)+"-"+t(16384|e(12),4)+"-"+t(32768|e(14),4)+"-"+t(e(48),12)}}();E.prototype={on:function(e,t){var n=this;return qe(e)?(n.events[e]||(n.events[e]=[])).push(t):Ne(e)&&i(e,function(e){n.on(e,t)}),n},off:function(e,t){var n=arguments.length,r=this;if(0===n)return r.events={},r;var i=r.events[e];if(!i)return r;if(1===n)return r.events[e]=null,r;for(var o=i.length;o--;)if(i[o]===t){i.splice(o,1);break}return r},emit:function(e){var t=[].slice.call(arguments,1),n=this.events[e];return n&&i(n,function(e){return e.apply(this,t)}),this},unshift:function(){var e=this;return(e.events[event]||(e.events[event]=[])).unshift(fn),e}};var Ye=t.Error,Xe=t.document,Ge=t.XMLHttpRequest,Je={};e(Je);var $e=Je.server||{};$e=d({fp_threshold:2e3,fs_threshold:4e3,dr_threshold:4e3},$e);var Ke,Ve,Qe=b("ignore_err"),We=b("debug"),Ze=t.location,et=t.navigator,tt=t.HTMLElement;({localStorage:function(){try{var e=ze();return t.localStorage.setItem(e,e),t.localStorage.removeItem(e),!0}catch(n){return!1}}()}).localStorage?(Ke=function(e){return t.localStorage.getItem(e)},Ve=function(e,n){return t.localStorage.setItem(e,n),n}):(Ke=T,Ve=x);var nt,rt="error",it="load",ot="unload",at="beforeunload",ut="pagehide",ct="readystatechange",st="complete",ft="TY_DISTINCT_ID",lt="TY_SESSION_ID",dt=86400,ht="_ty_rum",vt="TINGYUN",pt=2,mt="__ign",gt="display:none",yt="POST",St=function(e,t){t=t||m;var n=new Image;je(n,ct,function(){"loaded"!=n.readyState&&4!=n.readyState||t(null)},!1),je(n,it,function(){t(null)},!1),je(n,rt,function(){t(rt)},!1),n.src=e};t.XDomainRequest?nt=function(e,t,n,r){Re(n)&&(r=n);var i=new XDomainRequest;i.open(yt,e),i.onload=function(){r(null,i.responseText)},i.onerror=function(e){r(e)},i.send(Ie(t))}:Pe()?nt=I:et.sendBeacon?St=nt=function(e,t,n,r){Re(n)&&(r=n,n=null),et.sendBeacon(e,Ie(t))&&r&&r()}:nt=function(e,t,n,r){Re(n)&&(r=n,n=null);var i=y(r),o=new Ge;o[mt]=!0,o.overrideMimeType&&o.overrideMimeType("text/html"),o.onreadystatechange=function(){4==o.readyState&&200==o.status&&i(null,o.responseText)},o.onerror=i,t=Ie(t);try{o.open(yt,e,!0)}catch(u){return I(e,t,i)}for(var a in n)o.setRequestHeader(a,n[a]);o.send(t)};var _t=We,wt={start:n,e:{},an:{count:0},visible:[]},Et={},bt={};!function(){if(We){var e,t;"undefined"!=typeof Xe.hidden?(e="hidden",t="visibilitychange"):"undefined"!=typeof Xe.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!=typeof Xe.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),"undefined"==typeof Xe.addEventListener||"undefined"==typeof Xe[e]||je(Xe,t,R(function(){wt.visible.push([Xe[e],g()])}))}}();var Tt=new E,xt=[],kt=[],It=j.prototype;It.start=function(){if(!$e.key)return O("missing config, agent disabled!"),!1;var e=t[ht]||t[vt];return e&&e.server?(O("already loaded!"),!1):(C(),this)},d(It,E.prototype);var qt=new j;qt.on("send",function(e,t,n,r){var i=w($e.beacon,e,d({},Nt,t||{}));switch(r=r||m,e){case"/pf":n?nt(i,n,function(){qt.xhrs=qt.errs=null,r()}):St(i,r);break;default:nt(i,n,r)}});var Nt={pvid:ze(),ref:Xe.URL,referrer:Xe.referrer,key:$e.key,v:"1.7.2",av:"1.7.2",did:function(){var e=Ke(ft);return e||Ve(ft,ze(),dt)}(),sid:function(){var e=T(lt);return e||(e=ze(),x(lt,e)),e}()},Rt=tt?function(e){return e instanceof tt}:function(e){e&&"object"==typeof e&&1===e.nodeType&&qe(e.nodeName)},At="{0} not support",Ct="illegal argument",Ot={},Lt="undefined"!=typeof t.console,Dt=1,jt=2,Bt=4,Mt=8,Ht=B.prototype;Ht.create=Ht.before=Ht.after=Ht.error=null;var Pt;U.prototype={createContext:function(){return Object.create?Object.create(this.active):z(this.active)},get:function(e){if(this.active)return this.active[e]},set:function(e,t){if(this.active)return this.active[e]=t},enter:function(e){if(!e)throw new Ye("context required!");this._set.push(this.active),this.active=e},exit:function(e){if(!e)throw new Ye("context required!");if(e!==this.active){var t=this._set.lastIndexOf(e);if(t<0)throw new Ye("context not currently entered!");this._set.splice(t,1)}else this.active=this._set.pop()},bind:function(e,t){t||(t=this.active?this.active:this.createContext());var n=this;return function(){n.enter(t);try{return e.apply(this,arguments)}catch(r){try{r.moduleId=t.moduleId}catch(i){}throw r}finally{n.exit(t)}}}};var Ft=!1,Ut=(Ft||(Ut=z(),Ft=!0),Ut),zt=Y.prototype;zt.fail=zt.end=m;var Yt=X.prototype;Yt.end=Yt.finish=Yt.fail=null,Yt.send=function(e){var t=this;t.sent=!0;var n=e.event&&e.event.xhrs||[];i(n,function(e){e.start=e.start-t.s});var r={key:t.key,duration:t.e-t.s,status:t.status,xhrs:n};qt.emit("send","/spe",null,r,m)};var Xt={},Gt={host:"cshst",url:"csurl"},Jt={version:"1.7.2",config:function(e,t){var n;if(Ae(e))n=e;else{if(!qe(e)||t===undefined)throw new Ye(Ct);(n={})[e]=t}return i(n,function(e,t){t in Gt?Et[Gt[t]]=e:Et[t]=e}),this},DIAGNOSE_HREF:pt,diagnose:function(e){function t(e,t,r){var i=r||"log",o=n[e]||(n[e]={});o[i]=o[i]||"",o[i]+=t}var n={},r=O();if(t("Status",r,"ok"!==r),t("Debug",L()),i(Ot,function(e,n){t("Timeline",n+": "+e.toString())}),!e&&Lt)console.log("[TingYun Agent Diagnosis]\n"),i(n,function(e,t){i(console[t],function(e,t){console[t](e)})});else{if(e!==pt)return Ie(n);Ze.href=Ze.href+"#"+Ie(n)}},createEvent:function(e){var t=(e=e||{}).key;if(!t)return new Y;if(Xt[t])return new Y("event "+t+" is executing");Xt[t]=!0;var n=Ut.createContext();Ut.enter(n);var r=new X(e);return Ut.set("event",r),r._end=function(){var e=this;!e.sent&&0===e.remain&&e.called&&e.finish().send(n)},r.end=function(e){var t=this;t.called?Lt&&console.warn("Event "+this.key+"has ended or failed!"):(t.called=!0,Ut.exit(n),t.status=arguments.length?e:1,t._end())},r.finish=function(e){var t=this;return t.e=g(),t.i&&clearTimeout(t.i),delete Xt[t.key],t},r.fail=function(){this.end(0)},r},logFirstScreen:function(e){if(e){var t=Et.firstScreenResources=Et.firstScreenResources||[];Ne(e)||(e=[e]),i(e,function(e){if(qe(e))t.push(e);else if(Rt(e)){var n=e.src||e.href;n&&t.push(n)}})}},addExcludedDomain:function(e){Ne(e)||(e=[e]),i(e,function(e){if(e){if(!(e instanceof RegExp))throw new Ye("parameter's type requires RegExp");(Je.domains||(Je.domains=[])).push(e)}})}};t[ht]=t[vt]=Jt;var $t=0,Kt={},Vt=t.screen;Vt&&(Kt.sh=Vt.height,Kt.sw=Vt.width);var Qt="fetchStart",Wt="requestStart",Zt="responseStart",en="responseEnd",tn="domContentLoadedEventStart",nn="domContentLoadedEventEnd",rn="domInteractive",on="domComplete",an="loadEventStart",un="loadEventEnd",cn="unloadEventStart",sn="unloadEventEnd",ln="domainLookupStart",dn="domainLookupEnd",hn="redirectStart",vn="redirectEnd",pn="connectStart",mn="connectEnd",gn="secureConnectionStart",yn=function(e){if(!e.agent){var n=t._ty_rum;if(n&&n.agent)e.agent=n.agent;else{var r=T("TINGYUN_DATA");if(r){try{e.agent=J(decodeURIComponent(r))}catch(i){O(i&&i.message)}x("TINGYUN_DATA","",-1e3)}}}return e.agent}(Je),Sn=function(){var e=t.performance,r=!!e;r||L(v(At,["pf"]));var o=y(function(){function t(e){return e?"1":"0"}var o=Z(yn),a=e&&e.timing,u=d(V(a),o,Et),c=d({},Kt);qt.fp?(c.fp=qt.fp,r&&qt.fp>qt._le&&(L("fp>le"),c.fp=ee(e),c.__fp=2)):r?(c.fp=ee(e),c.__fp=1):c.fp=c.__fp=0,c.dr=ie(a),r?c.fs=te(e,a,c.fp,c):c.__fs=0;var s,f="";if(r){var l=Math.max(u.ls,0);l||(l=K()-a.navigationStart||n),c.trace=l;var h=oe(a);i(["fp","fs","dr","trace"],function(e){f+=t((h?c[e]-h:c[e])>=$e[e+"_threshold"])}),delete c.trace,f.indexOf("1")>-1&&(s=Q(e))}c.trflag=f||"0000",bt.pfStart=g(),delete u.firstScreenResources,qt.emit("send","/pf",d(u,c),s,function(){L("pf sent!"),qt.xhrs=qt.errs=null})});return Tt.on(it,function(){p(o)}).on([ot,at,ut],o)},_n=2e3,wn=function(e){var t=[];return i($e.custom_urls,function(e){try{t.push(new RegExp(e))}catch(n){O(n&&n.message)}}),t}(),En=wn.length?function(e){var t=e.url;!qt.ct&&t&&i(wn,function(n){if(t.match(n))return qt.ct=e.end+e.cbTime,!1})}:m,bn=[],Tn=0,xn={error:990,abort:905,timeout:903},kn="on"+ct,In=function(){function e(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var t=/(msie|trident)/i.test(et.userAgent),n=Xe.createElement("a"),r=e(Ze.href);return function(t){var n=e(t);return n.protocol===r.protocol&&n.host===r.host}}(),qn=1e4,Nn=0;ge.prototype={add:function(e,t){this.len>this.limit||this.get(e)||(this.c[e]=t,this.len++)},get:function(e){return this.c[e]},reset:function(){this.c={},this.len=0}};var Rn=new ge(100),An={},Cn=/([a-z]+:\/{2,3}.*):(\d+):(\d+)/;return Se.prototype={increase:function(){this.count++},fix:function(){var e=this,t=e.stack;if(e.module&&t&&qe(t)&&e.filename){t=t.split(/\n/);var n=Cn.exec(t[0])||Cn.exec(t[1]);n&&n[1]!=e.filename&&(e.filename=n[1]||e.filename,e.lineno=n[2]||e.lineno,e.colno=n[3]||e.colno)}},toObject:function(){var e=this;return{o:e.time,e:e.msg,l:e.lineno,c:e.colno,r:e.filename,ec:e.count,s:e.stack,m:e.module,ep:e.ep}}},xe(),qt.start()&&(Sn(),me(),Te()),qt._end=g(),N(function(){wt._end=qt._end}),G(),Jt}(function(ty_rum){ty_rum.server = {id:'JEZ7HInwfsc',ignore_err : true,beacon:'beacon.tingyun.com',beacon_err:'beacon-err.tingyun.com',key:'tNX3riCzFOU',trace_threshold:7000,fp_threshold:2000,fs_threshold:4000,dr_threshold:4000,custom_urls:[],sr:1.0};},window,+new Date);