import{S as e,i as t,s as r,a as n,e as a,c as o,b as s,g as l,t as i,d as c,f as u,h as d,j as p,o as f,k as h,l as m,m as g,n as v,p as y,q as w,r as b,u as $,v as _,w as E,x as k,y as S,z as R}from"./chunks/index-8c7f8a35.js";import{g as L,f as I,s as x,a as P,b as j,i as O}from"./chunks/singletons-955f02ba.js";const U=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),A={},N=function(e,t,r){return t&&0!==t.length?Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,r),e in A)return;A[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":U,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((t,r)=>{a.addEventListener("load",t),a.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()};class T{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class D{constructor(e,t){this.status=e,this.location=t}}function C(e,t){return"/"===e||"ignore"===t?e:"never"===t?e.endsWith("/")?e.slice(0,-1):e:"always"!==t||e.endsWith("/")?e:e+"/"}function V(e){for(const t in e)e[t]=e[t].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return e}const q=["href","pathname","search","searchParams","toString","toJSON"];function B(e,t){const r=new URL(e);for(const n of q){let e=r[n];Object.defineProperty(r,n,{get:()=>(t(),e),enumerable:!0,configurable:!0})}return r[Symbol.for("nodejs.util.inspect.custom")]=(t,r,n)=>n(e,r),function(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}(r),r}const J=window.fetch;window.fetch=(e,t)=>{if("GET"!==(e instanceof Request?e.method:(null==t?void 0:t.method)||"GET")){const t=new URL(e instanceof Request?e.url:e.toString(),document.baseURI).href;G.delete(t)}return J(e,t)};const G=new Map;const K=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function W(e){return!/^\([^)]+\)$/.test(e)}function F(e){let t,r,n;var o=e[0][0];function p(e){return{props:{data:e[2],form:e[1]}}}return o&&(t=new o(p(e))),{c(){t&&_(t.$$.fragment),r=a()},l(e){t&&E(t.$$.fragment,e),r=a()},m(e,a){t&&k(t,e,a),s(e,r,a),n=!0},p(e,n){const a={};if(4&n&&(a.data=e[2]),2&n&&(a.form=e[1]),o!==(o=e[0][0])){if(t){l();const e=t;i(e.$$.fragment,1,0,(()=>{S(e,1)})),c()}o?(t=new o(p(e)),_(t.$$.fragment),u(t.$$.fragment,1),k(t,r.parentNode,r)):t=null}else o&&t.$set(a)},i(e){n||(t&&u(t.$$.fragment,e),n=!0)},o(e){t&&i(t.$$.fragment,e),n=!1},d(e){e&&d(r),t&&S(t,e)}}}function M(e){let t,r,n;var o=e[0][0];function p(e){return{props:{data:e[2],$$slots:{default:[z]},$$scope:{ctx:e}}}}return o&&(t=new o(p(e))),{c(){t&&_(t.$$.fragment),r=a()},l(e){t&&E(t.$$.fragment,e),r=a()},m(e,a){t&&k(t,e,a),s(e,r,a),n=!0},p(e,n){const a={};if(4&n&&(a.data=e[2]),523&n&&(a.$$scope={dirty:n,ctx:e}),o!==(o=e[0][0])){if(t){l();const e=t;i(e.$$.fragment,1,0,(()=>{S(e,1)})),c()}o?(t=new o(p(e)),_(t.$$.fragment),u(t.$$.fragment,1),k(t,r.parentNode,r)):t=null}else o&&t.$set(a)},i(e){n||(t&&u(t.$$.fragment,e),n=!0)},o(e){t&&i(t.$$.fragment,e),n=!1},d(e){e&&d(r),t&&S(t,e)}}}function z(e){let t,r,n;var o=e[0][1];function p(e){return{props:{data:e[3],form:e[1]}}}return o&&(t=new o(p(e))),{c(){t&&_(t.$$.fragment),r=a()},l(e){t&&E(t.$$.fragment,e),r=a()},m(e,a){t&&k(t,e,a),s(e,r,a),n=!0},p(e,n){const a={};if(8&n&&(a.data=e[3]),2&n&&(a.form=e[1]),o!==(o=e[0][1])){if(t){l();const e=t;i(e.$$.fragment,1,0,(()=>{S(e,1)})),c()}o?(t=new o(p(e)),_(t.$$.fragment),u(t.$$.fragment,1),k(t,r.parentNode,r)):t=null}else o&&t.$set(a)},i(e){n||(t&&u(t.$$.fragment,e),n=!0)},o(e){t&&i(t.$$.fragment,e),n=!1},d(e){e&&d(r),t&&S(t,e)}}}function H(e){let t,r=e[5]&&Q(e);return{c(){t=h("div"),r&&r.c(),this.h()},l(e){t=m(e,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var n=g(t);r&&r.l(n),n.forEach(d),this.h()},h(){v(t,"id","svelte-announcer"),v(t,"aria-live","assertive"),v(t,"aria-atomic","true"),y(t,"position","absolute"),y(t,"left","0"),y(t,"top","0"),y(t,"clip","rect(0 0 0 0)"),y(t,"clip-path","inset(50%)"),y(t,"overflow","hidden"),y(t,"white-space","nowrap"),y(t,"width","1px"),y(t,"height","1px")},m(e,n){s(e,t,n),r&&r.m(t,null)},p(e,n){e[5]?r?r.p(e,n):(r=Q(e),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},d(e){e&&d(t),r&&r.d()}}}function Q(e){let t;return{c(){t=w(e[6])},l(r){t=b(r,e[6])},m(e,r){s(e,t,r)},p(e,r){64&r&&$(t,e[6])},d(e){e&&d(t)}}}function X(e){let t,r,p,f,h;const m=[M,F],g=[];function v(e,t){return e[0][1]?0:1}t=v(e),r=g[t]=m[t](e);let y=e[4]&&H(e);return{c(){r.c(),p=n(),y&&y.c(),f=a()},l(e){r.l(e),p=o(e),y&&y.l(e),f=a()},m(e,r){g[t].m(e,r),s(e,p,r),y&&y.m(e,r),s(e,f,r),h=!0},p(e,[n]){let a=t;t=v(e),t===a?g[t].p(e,n):(l(),i(g[a],1,1,(()=>{g[a]=null})),c(),r=g[t],r?r.p(e,n):(r=g[t]=m[t](e),r.c()),u(r,1),r.m(p.parentNode,p)),e[4]?y?y.p(e,n):(y=H(e),y.c(),y.m(f.parentNode,f)):y&&(y.d(1),y=null)},i(e){h||(u(r),h=!0)},o(e){i(r),h=!1},d(e){g[t].d(e),e&&d(p),y&&y.d(e),e&&d(f)}}}function Y(e,t,r){let{stores:n}=t,{page:a}=t,{components:o}=t,{form:s}=t,{data_0:l=null}=t,{data_1:i=null}=t;p(n.page.notify);let c=!1,u=!1,d=null;return f((()=>{const e=n.page.subscribe((()=>{c&&(r(5,u=!0),r(6,d=document.title||"untitled page"))}));return r(4,c=!0),e})),e.$$set=e=>{"stores"in e&&r(7,n=e.stores),"page"in e&&r(8,a=e.page),"components"in e&&r(0,o=e.components),"form"in e&&r(1,s=e.form),"data_0"in e&&r(2,l=e.data_0),"data_1"in e&&r(3,i=e.data_1)},e.$$.update=()=>{384&e.$$.dirty&&n.page.set(a)},[o,s,l,i,c,u,d,n,a]}class Z extends e{constructor(e){super(),t(this,e,Y,X,r,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const ee=[()=>N((()=>import("./chunks/0-df2da682.js")),["chunks\\0-df2da682.js","chunks\\_layout-76035eb1.js","components\\pages\\_layout.svelte-3aa381cd.js","assets\\_layout-dce6a032.css","chunks\\index-8c7f8a35.js"],import.meta.url),()=>N((()=>import("./chunks/1-f9eb1baa.js")),["chunks\\1-f9eb1baa.js","components\\error.svelte-d0b74d87.js","chunks\\index-8c7f8a35.js","chunks\\singletons-955f02ba.js"],import.meta.url),()=>N((()=>import("./chunks/2-589775de.js")),["chunks\\2-589775de.js","components\\pages\\_page.svelte-492b088e.js","chunks\\index-8c7f8a35.js"],import.meta.url)],te=({error:e})=>(console.error(e),{message:"Internal Error"}),re="sveltekit:index",ne=function(e,t,r,n){const a=new Set(t);return Object.entries(r).map((([t,[r,a,l]])=>{const{pattern:i,names:c,types:u}=function(e){const t=[],r=[];let n=!0;return{pattern:""===e?/^\/$/:new RegExp(`^${e.split(/(?:\/|$)/).filter(W).map(((e,a,o)=>{const s=decodeURIComponent(e),l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(l)return t.push(l[1]),r.push(l[2]),"(?:/(.*))?";const i=a===o.length-1;return s&&"/"+s.split(/\[(.+?)\]/).map(((e,a)=>{if(a%2){const n=K.exec(e);if(!n)throw new Error(`Invalid param: ${e}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,a,o,s]=n;return t.push(o),r.push(s),a?"(.*?)":"([^/]+?)"}return i&&e.includes(".")&&(n=!1),e.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})).join("")})).join("")}${n?"/?":""}$`),names:t,types:r}}(t),d={id:t,exec:e=>{const t=i.exec(e);if(t)return function(e,t,r,n){const a={};for(let o=0;o<t.length;o+=1){const s=t[o],l=r[o],i=e[o+1]||"";if(l){const e=n[l];if(!e)throw new Error(`Missing "${l}" param matcher`);if(!e(i))return}a[s]=i}return a}(t,c,u,n)},errors:[1,...l||[]].map((t=>e[t])),layouts:[0,...a||[]].map(s),leaf:o(r)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d}));function o(t){const r=t<0;return r&&(t=~t),[r,e[t]]}function s(t){return void 0===t?t:[a.has(t),e[t]]}}(ee,[],{"":[2]},{}),ae=ee[0],oe=ee[1];ae(),oe();let se={};try{se=JSON.parse(sessionStorage["sveltekit:scroll"])}catch{}function le(e){se[e]=P()}function ie({target:e,base:t,trailing_slash:r}){var n;const a=[],o={id:null,promise:null},s={before_navigate:[],after_navigate:[]};let l,i={branch:[],error:null,session_id:0,url:null},c=!1,u=!0,d=!1,p=null,h=!1,m=null==(n=history.state)?void 0:n[re];m||(m=Date.now(),history.replaceState({...history.state,[re]:m},"",location.href));const g=se[m];g&&(history.scrollRestoration="manual",scrollTo(g.x,g.y));let v,y,w=!1;function b(){if(!p){const e=new URL(location.href);p=Promise.resolve().then((async()=>{const t=q(e,!0);await E(t,e,[]),p=null,h=!1}))}return p}async function $(e,{noscroll:t=!1,replaceState:r=!1,keepfocus:n=!1,state:a={}},o){return"string"==typeof e&&(e=new URL(e,L(document))),W({url:e,scroll:t?P():null,keepfocus:n,redirect_chain:o,details:{state:a,replaceState:r},accepted:()=>{},blocked:()=>{},type:"goto"})}async function _(e){const t=q(e,!1);if(!t)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=A(t),o.id=t.id,o.promise}async function E(e,t,r,n,s){var p,f;const h=y={};let g=e&&await A(e);if(g||t.origin!==location.origin||t.pathname!==location.pathname||(g=await N({status:404,error:new Error(`Not found: ${t.pathname}`),url:t,routeId:null})),!g)return await F(t),!1;if(t=(null==e?void 0:e.url)||t,y!==h)return!1;if(a.length=0,"redirect"===g.type){if(!(r.length>10||r.includes(t.pathname)))return $(new URL(g.location,t).href,{},[...r,t.pathname]),!1;g=await N({status:500,error:new Error("Redirect loop"),url:t,routeId:null})}else if((null==(f=null==(p=g.props)?void 0:p.page)?void 0:f.status)>=400){await x.updated.check()&&await F(t)}if(d=!0,n&&n.details){const{details:e}=n,r=e.replaceState?0:1;e.state[re]=m+=r,history[e.replaceState?"replaceState":"pushState"](e.state,"",t)}if(c){i=g.state,g.props.page&&(g.props.page.url=t);const e=()=>{};l.$set(g.props),e()}else k(g);if(n){const{scroll:e,keepfocus:r}=n;if(!r){const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout((()=>{var e;null==(e=getSelection())||e.removeAllRanges()})),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}if(await R(),u){const r=t.hash&&document.getElementById(t.hash.slice(1));e?scrollTo(e.x,e.y):r?r.scrollIntoView():scrollTo(0,0)}}else await R();o.promise=null,o.id=null,u=!0,g.props.page&&(v=g.props.page),s&&s(),d=!1}function k(t){var r,n;i=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),v=t.props.page;const o=()=>{};l=new Z({target:e,props:{...t.props,stores:x},hydrate:!0}),o();const u={from:null,to:fe("to",{params:i.params,routeId:null!=(n=null==(r=i.route)?void 0:r.id)?n:null,url:new URL(location.href)}),type:"load"};s.after_navigate.forEach((e=>e(u))),c=!0}async function S({url:e,params:t,branch:r,status:n,error:a,route:o,form:s}){var l;const c=r.filter(Boolean),u={type:"loaded",state:{url:e,params:t,branch:r,error:a,route:o,session_id:1},props:{components:c.map((e=>e.node.component))}};void 0!==s&&(u.props.form=s);let d={},p=!v;for(let f=0;f<c.length;f+=1){const e=c[f];d={...d,...e.data},!p&&i.branch.some((t=>t===e))||(u.props[`data_${f}`]=d,p=p||Object.keys(null!=(l=e.data)?l:{}).length>0)}p||(p=Object.keys(v.data).length!==Object.keys(d).length);if(!i.url||e.href!==i.url.href||i.error!==a||p){u.props.page={error:a,params:t,routeId:o&&o.id,status:n,url:e,data:p?d:v.data};const r=(e,t)=>{Object.defineProperty(u.props.page,e,{get:()=>{throw new Error(`$page.${e} has been replaced by $page.url.${t}`)}})};r("origin","origin"),r("path","pathname"),r("query","searchParams")}return u}async function j({loader:e,parent:t,url:r,params:n,routeId:a,server_data_node:o}){var s,l,i,u,d;let p=null;const f={dependencies:new Set,params:new Set,parent:!1,url:!1},h=await e();if(null==(s=h.shared)?void 0:s.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,r);f.dependencies.add(e)}};const s={};for(const t in n)Object.defineProperty(s,t,{get:()=>(f.params.add(t),n[t]),enumerable:!0});const u={routeId:a,params:s,data:null!=(l=null==o?void 0:o.data)?l:null,url:B(r,(()=>{f.url=!0})),async fetch(t,n){let a;"string"==typeof t?a=t:(a=t.url,n={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...n});const o=new URL(a,r).href;return e(o),c?function(e,t){const r=G.get(e);if(r){if(performance.now()<r.ttl)return new Response(r.body,r.init);G.delete(e)}return J(e,t)}(o,n):function(e,t,r){let n=`script[data-sveltekit-fetched][data-url=${JSON.stringify("string"==typeof e?e:e.url)}]`;r&&"string"==typeof r.body&&(n+=`[data-hash="${function(e){let t=5381,r=e.length;if("string"==typeof e)for(;r;)t=33*t^e.charCodeAt(--r);else for(;r;)t=33*t^e[--r];return(t>>>0).toString(36)}(r.body)}"]`);const a=document.querySelector(n);if(null==a?void 0:a.textContent){const{body:e,...r}=JSON.parse(a.textContent),n=a.getAttribute("data-ttl");return n&&G.set(t,{body:e,init:r,ttl:1e3*Number(n)}),Promise.resolve(new Response(e,r))}return J(e,r)}(a,o,n)},setHeaders:()=>{},depends:e,parent:()=>(f.parent=!0,t())};Object.defineProperties(u,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),p=null!=(i=await h.shared.load.call(null,u))?i:null}return{node:h,loader:e,server:o,shared:(null==(u=h.shared)?void 0:u.load)?{type:"data",data:p,uses:f}:null,data:null!=(d=null!=p?p:null==o?void 0:o.data)?d:null}}function O(e,t,r){if(h)return!0;if(!r)return!1;if(r.parent&&t)return!0;if(e.url&&r.url)return!0;for(const n of e.params)if(r.params.has(n))return!0;for(const n of r.dependencies)if(a.some((e=>e(new URL(n)))))return!0;return!1}function U(e,t){var r,n;return"data"===(null==e?void 0:e.type)?{type:"data",data:e.data,uses:{dependencies:new Set(null!=(r=e.uses.dependencies)?r:[]),params:new Set(null!=(n=e.uses.params)?n:[]),parent:!!e.uses.parent,url:!!e.uses.url}}:"skip"===(null==e?void 0:e.type)&&null!=t?t:null}async function A({id:e,invalidating:t,url:r,params:n,route:a}){var s;if(o.id===e&&o.promise)return o.promise;const{errors:l,layouts:c,leaf:u}=a,d=i.url&&{url:e!==i.url.pathname+i.url.search,params:Object.keys(n).filter((e=>i.params[e]!==n[e]))},p=[...c,u];l.forEach((e=>null==e?void 0:e().catch((()=>{})))),p.forEach((e=>null==e?void 0:e[1]().catch((()=>{}))));let f=null;const h=p.reduce(((e,t,r)=>{var n;const a=i.branch[r],o=!!(null==t?void 0:t[0])&&((null==a?void 0:a.loader)!==t[1]||O(d,e.some(Boolean),null==(n=a.server)?void 0:n.uses));return e.push(o),e}),[]);if(h.some(Boolean)){try{f=await ue(r,h)}catch(w){return N({status:500,error:w,url:r,routeId:a.id})}if("redirect"===f.type)return f}const m=null==f?void 0:f.nodes;let g=!1;const v=p.map((async(e,t)=>{var o,s;if(!e)return;const l=i.branch[t],c=null!=(o=null==m?void 0:m[t])?o:null;if((!c||"skip"===c.type)&&e[1]===(null==l?void 0:l.loader)&&!O(d,g,null==(s=l.shared)?void 0:s.uses))return l;if(g=!0,"error"===(null==c?void 0:c.type))throw c;return j({loader:e[1],url:r,params:n,routeId:a.id,parent:async()=>{var e;const r={};for(let n=0;n<t;n+=1)Object.assign(r,null==(e=await v[n])?void 0:e.data);return r},server_data_node:U(c,null==l?void 0:l.server)})}));for(const o of v)o.catch((()=>{}));const y=[];for(let o=0;o<p.length;o+=1)if(p[o])try{y.push(await v[o])}catch(b){if(b instanceof D)return{type:"redirect",location:b.location};let e,t=500;for((null==m?void 0:m.includes(b))?(t=null!=(s=b.status)?s:t,e=b.error):b instanceof T?(t=b.status,e=b.body):e=de(b,{params:n,url:r,routeId:a.id});o--;)if(l[o]){let s,i=o;for(;!y[i];)i-=1;try{return s={node:await l[o](),loader:l[o],data:{},server:null,shared:null},await S({url:r,params:n,branch:y.slice(0,i+1).concat(s),status:t,error:e,route:a})}catch($){continue}}return void(await F(r))}else y.push(void 0);return await S({url:r,params:n,branch:y,status:200,error:null,route:a,form:t?void 0:null})}async function N({status:e,error:t,url:r,routeId:n}){var a;const o={};let s=null;if((await ae()).server)try{const e=await ue(r,[!0]);if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0;s=null!=(a=e.nodes[0])?a:null}catch{return void(await F(r))}const l=await j({loader:ae,url:r,params:o,routeId:n,parent:()=>Promise.resolve({}),server_data_node:U(s)}),i={node:await oe(),loader:oe,shared:null,server:null,data:null};return await S({url:r,params:o,branch:[l,i],status:e,error:t instanceof T?t.body:de(t,{url:r,params:o,routeId:null}),route:null})}function q(e,n){if(K(e))return;const a=decodeURI(e.pathname.slice(t.length)||"/");for(const t of ne){const o=t.exec(a);if(o){const a=new URL(e.origin+C(e.pathname,r)+e.search+e.hash);return{id:a.pathname+a.search,invalidating:n,route:t,params:V(o),url:a}}}}function K(e){return e.origin!==location.origin||!e.pathname.startsWith(t)}async function W({url:e,scroll:t,keepfocus:r,redirect_chain:n,details:a,type:o,delta:l,accepted:u,blocked:d}){var p,f,h,g;let v=!1;const y=q(e,!1),w={from:fe("from",{params:i.params,routeId:null!=(f=null==(p=i.route)?void 0:p.id)?f:null,url:i.url}),to:fe("to",{params:null!=(h=null==y?void 0:y.params)?h:null,routeId:null!=(g=null==y?void 0:y.route.id)?g:null,url:e}),type:o};void 0!==l&&(w.delta=l);const b={...w,cancel:()=>{v=!0}};s.before_navigate.forEach((e=>e(b))),v?d():(le(m),u(),c&&x.navigating.set(w),await E(y,e,n,{scroll:t,keepfocus:r,details:a},(()=>{s.after_navigate.forEach((e=>e(w))),x.navigating.set(null)})))}function F(e){return location.href=e.href,new Promise((()=>{}))}return{after_navigate:e=>{f((()=>(s.after_navigate.push(e),()=>{const t=s.after_navigate.indexOf(e);s.after_navigate.splice(t,1)})))},before_navigate:e=>{f((()=>(s.before_navigate.push(e),()=>{const t=s.before_navigate.indexOf(e);s.before_navigate.splice(t,1)})))},disable_scroll_handling:()=>{!d&&c||(u=!1)},goto:(e,t={})=>$(e,t,[]),invalidate:e=>{if(void 0===e)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if("function"==typeof e)a.push(e);else{const{href:t}=new URL(e,location.href);a.push((e=>e.href===t))}return b()},invalidateAll:()=>(h=!0,b()),prefetch:async e=>{const t=new URL(e,L(document));await _(t)},prefetch_routes:async e=>{const t=(e?ne.filter((t=>e.some((e=>t.exec(e))))):ne).map((e=>Promise.all([...e.layouts,e.leaf].map((e=>null==e?void 0:e[1]())))));await Promise.all(t)},apply_action:async e=>{if("error"===e.type){const r=new URL(location.href),{branch:n,route:a}=i;if(!a)return;let o=i.branch.length;for(;o--;)if(a.errors[o]){let s,c=o;for(;!n[c];)c-=1;try{s={node:await a.errors[o](),loader:a.errors[o],data:{},server:null,shared:null};const t=await S({url:r,params:i.params,branch:n.slice(0,c+1).concat(s),status:500,error:e.error,route:a});i=t.state;const u=()=>{};return l.$set(t.props),void u()}catch(t){continue}}}else if("redirect"===e.type)$(e.location,{},[]);else{const t={form:e.data};e.status!==v.status&&(t.page={...v,status:e.status});const r=()=>{};l.$set(t),r()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{var t,r;let n=!1;const a={from:fe("from",{params:i.params,routeId:null!=(r=null==(t=i.route)?void 0:t.id)?r:null,url:i.url}),to:null,type:"unload",cancel:()=>n=!0};s.before_navigate.forEach((e=>e(a))),n?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{if("hidden"===document.visibilityState){le(m);try{sessionStorage["sveltekit:scroll"]=JSON.stringify(se)}catch{}}}));const e=e=>{const{url:t,options:r}=I(e);if(t&&r.prefetch){if(K(t))return;_(t)}};let t;addEventListener("touchstart",e),addEventListener("mousemove",(e=>{clearTimeout(t),t=setTimeout((()=>{var t;null==(t=e.target)||t.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))}),20)})),addEventListener("sveltekit:trigger_prefetch",e),addEventListener("click",(e=>{if(e.button||1!==e.which)return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const{a:t,url:r,options:n}=I(e);if(!t||!r)return;const a=t instanceof SVGAElement;if(!a&&"https:"!==r.protocol&&"http:"!==r.protocol)return;const o=(t.getAttribute("rel")||"").split(/\s+/);if(t.hasAttribute("download")||o.includes("external")||n.reload)return;if(a?t.target.baseVal:t.target)return;const[s,l]=r.href.split("#");if(void 0!==l&&s===location.href.split("#")[0])return w=!0,le(m),x.page.set({...v,url:r}),void x.page.notify();W({url:r,scroll:n.noscroll?P():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:r.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})})),addEventListener("popstate",(e=>{if(e.state){if(e.state[re]===m)return;const t=e.state[re]-m;W({url:new URL(location.href),scroll:se[e.state[re]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{m=e.state[re]},blocked:()=>{history.go(-t)},type:"popstate",delta:t})}})),addEventListener("hashchange",(()=>{w&&(w=!1,history.replaceState({...history.state,[re]:++m},"",location.href))}));for(const r of document.querySelectorAll("link"))"icon"===r.rel&&(r.href=r.href);addEventListener("pageshow",(e=>{e.persisted&&x.navigating.set(null)}))},_hydrate:async({status:e,error:t,node_ids:r,params:n,routeId:a,data:o,form:s})=>{var l;const i=new URL(location.href);let c;try{const u=r.map((async(e,t)=>{const r=o[t];return j({loader:ee[e],url:i,params:n,routeId:a,parent:async()=>{const e={};for(let r=0;r<t;r+=1)Object.assign(e,(await u[r]).data);return e},server_data_node:U(r)})}));c=await S({url:i,params:n,branch:await Promise.all(u),status:e,error:t,form:s,route:null!=(l=ne.find((e=>e.id===a)))?l:null})}catch(u){const e=u;if(e instanceof D)return void(await F(new URL(u.location,location.href)));c=await N({status:e instanceof T?e.status:500,error:e,url:i,routeId:a})}k(c)}}}let ce=1;async function ue(e,t){const r=new URL(e);r.pathname=e.pathname.replace(/\/$/,"")+"/__data.js",r.searchParams.set("__invalid",t.map((e=>e?"y":"n")).join("")),r.searchParams.set("__id",String(ce++)),await N((()=>import(r.href)),[],import.meta.url);const n=window.__sveltekit_data;return delete window.__sveltekit_data,n}function de(e,t){var r;return null!=(r=te({error:e,event:t}))?r:{message:"Internal Error"}}const pe=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(e,t){for(const r of pe)Object.defineProperty(t,r,{get(){throw new Error(`The navigation shape changed - ${e}.${r} should now be ${e}.url.${r}`)}});return t}async function he({env:e,hydrate:t,paths:r,target:n,trailing_slash:a}){j(r);const o=ie({target:n,base:r.base,trailing_slash:a});O({client:o}),t?await o._hydrate(t):o.goto(location.href,{replaceState:!0}),o._start_router()}export{he as start};
