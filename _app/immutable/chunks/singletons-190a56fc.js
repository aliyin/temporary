import{A as e,s as t}from"./index-4a2e58d3.js";const n=[];function s(s,o=e){let a;const c=new Set;function r(e){if(t(s,e)&&(s=e,a)){const e=!n.length;for(const t of c)t[1](),n.push(t,s);if(e){for(let e=0;e<n.length;e+=2)n[e][0](n[e+1]);n.length=0}}}return{set:r,update:function(e){r(e(s))},subscribe:function(t,n=e){const l=[t,n];return c.add(l),1===c.size&&(a=o(r)||e),t(s),()=>{c.delete(l),0===c.size&&(a(),a=null)}}}}let o="",a="";function c(e){o=e.base,a=e.assets||o}function r(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function l(){return{x:pageXOffset,y:pageYOffset}}function u(e){let t,n=null,s=null,o=null;for(const a of e.composedPath())a instanceof Element&&(t||"A"!==a.nodeName.toUpperCase()||(t=a),null===n&&(n=i(a,"data-sveltekit-noscroll")),null===s&&(s=i(a,"data-sveltekit-prefetch")),null===o&&(o=i(a,"data-sveltekit-reload")));return{a:t,url:t&&new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),options:{noscroll:n,prefetch:s,reload:o}}}function i(e,t){const n=e.getAttribute(t);return null===n?n:""===n}function f(e){const t=s(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}function d(e){e.client}const h={url:f({}),page:f({}),navigating:s(null),updated:function(){const{set:e,subscribe:t}=s(!1);let n;return{subscribe:t,check:async function(){clearTimeout(n);const t=await fetch(`${a}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(t.ok){const{version:s}=await t.json(),o="1663157717960"!==s;return o&&(e(!0),clearTimeout(n)),o}throw new Error(`Version check failed: ${t.status}`)}}}()};export{l as a,c as b,u as f,r as g,d as i,h as s};
