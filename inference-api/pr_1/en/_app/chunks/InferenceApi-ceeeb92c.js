import{S as H,i as V,s as I,O as E,P as x,a as v,d,b as a,g as N,F as y,L as M,e as A,k as j,t as le,c as C,m as B,h as re,f as J,j as ne,w as D,x as U,y as O,Q as R,q as w,o as k,B as S,R as ae,T as ie,D as oe,H as G,I as P,J as Y,K as F,n as T,p as Z,l as q,G as ce,U as ue,V as fe}from"./vendor-7c454903.js";function he(r){const e=document.createElement("textarea");document.body.appendChild(e),e.value=r,e.select(),document.execCommand("copy"),document.body.removeChild(e)}function me(r){let e,l,s,t;return{c(){e=E("svg"),l=E("path"),s=E("path"),t=E("rect"),this.h()},l(n){e=x(n,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var c=v(e);l=x(c,"path",{d:!0,transform:!0}),v(l).forEach(d),s=x(c,"path",{d:!0,transform:!0}),v(s).forEach(d),t=x(c,"rect",{fill:!0,width:!0,height:!0}),v(t).forEach(d),c.forEach(d),this.h()},h(){a(l,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),a(l,"transform","translate(0)"),a(s,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),a(s,"transform","translate(0)"),a(t,"fill","none"),a(t,"width","32"),a(t,"height","32"),a(e,"class",r[0]),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"aria-hidden","true"),a(e,"fill","currentColor"),a(e,"focusable","false"),a(e,"role","img"),a(e,"width","1em"),a(e,"height","1em"),a(e,"preserveAspectRatio","xMidYMid meet"),a(e,"viewBox","0 0 32 32")},m(n,c){N(n,e,c),y(e,l),y(e,s),y(e,t)},p(n,[c]){c&1&&a(e,"class",n[0])},i:M,o:M,d(n){n&&d(e)}}}function de(r,e,l){let{classNames:s=""}=e;return r.$$set=t=>{"classNames"in t&&l(0,s=t.classNames)},[s]}class ge extends H{constructor(e){super();V(this,e,de,me,I,{classNames:0})}}function _e(r){let e,l,s,t,n;return{c(){e=A("div"),l=A("div"),s=j(),t=le(r[1]),this.h()},l(c){e=C(c,"DIV",{class:!0});var h=v(e);l=C(h,"DIV",{class:!0,style:!0}),v(l).forEach(d),s=B(h),t=re(h,r[1]),h.forEach(d),this.h()},h(){a(l,"class","absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-black border-4 border-t-0"),J(l,"border-left-color","transparent"),J(l,"border-right-color","transparent"),a(e,"class",n="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+r[2]+" "+r[0])},m(c,h){N(c,e,h),y(e,l),y(e,s),y(e,t)},p(c,[h]){h&2&&ne(t,c[1]),h&5&&n!==(n="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+c[2]+" "+c[0])&&a(e,"class",n)},i:M,o:M,d(c){c&&d(e)}}}function pe(r,e,l){let{classNames:s=""}=e,{label:t="Copied"}=e,{position:n="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=e;return r.$$set=c=>{"classNames"in c&&l(0,s=c.classNames),"label"in c&&l(1,t=c.label),"position"in c&&l(2,n=c.position)},[s,t,n]}class be extends H{constructor(e){super();V(this,e,pe,_e,I,{classNames:0,label:1,position:2})}}function ve(r){let e,l,s,t,n,c,h,g,u;return l=new ge({}),t=new be({props:{classNames:r[4]?"opacity-100":"opacity-0"}}),{c(){e=A("button"),D(l.$$.fragment),s=j(),D(t.$$.fragment),this.h()},l(f){e=C(f,"BUTTON",{class:!0,title:!0,type:!0});var i=v(e);U(l.$$.fragment,i),s=B(i),U(t.$$.fragment,i),i.forEach(d),this.h()},h(){a(e,"class",n="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+r[0]+" "+(r[2]==="text"?"mx-0.5":"")+" "+(r[2]==="button"?"btn":"")+" "+(r[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!r[4]&&["button-clear","text"].includes(r[2])?"text-gray-600":"")+" "+(r[4]?"text-green-500":"")),a(e,"title",c=r[3]||r[1]||"Copy to clipboard"),a(e,"type","button")},m(f,i){N(f,e,i),O(l,e,null),y(e,s),O(t,e,null),h=!0,g||(u=R(e,"click",r[5]),g=!0)},p(f,[i]){const _={};i&16&&(_.classNames=f[4]?"opacity-100":"opacity-0"),t.$set(_),(!h||i&21&&n!==(n="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+f[0]+" "+(f[2]==="text"?"mx-0.5":"")+" "+(f[2]==="button"?"btn":"")+" "+(f[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!f[4]&&["button-clear","text"].includes(f[2])?"text-gray-600":"")+" "+(f[4]?"text-green-500":"")))&&a(e,"class",n),(!h||i&10&&c!==(c=f[3]||f[1]||"Copy to clipboard"))&&a(e,"title",c)},i(f){h||(w(l.$$.fragment,f),w(t.$$.fragment,f),h=!0)},o(f){k(l.$$.fragment,f),k(t.$$.fragment,f),h=!1},d(f){f&&d(e),S(l),S(t),g=!1,u()}}}function we(r,e,l){let{classNames:s=""}=e,{label:t=""}=e,{style:n="text"}=e,{title:c=""}=e,{value:h}=e,g=!1,u;ae(()=>{u&&clearTimeout(u)});function f(){he(h),l(4,g=!0),u&&clearTimeout(u),u=setTimeout(()=>{l(4,g=!1)},1e3)}return r.$$set=i=>{"classNames"in i&&l(0,s=i.classNames),"label"in i&&l(1,t=i.label),"style"in i&&l(2,n=i.style),"title"in i&&l(3,c=i.title),"value"in i&&l(6,h=i.value)},[s,t,n,c,g,f,h]}class ye extends H{constructor(e){super();V(this,e,we,ve,I,{classNames:0,label:1,style:2,title:3,value:6})}}function ke(r){let e,l,s,t,n,c,h,g;return s=new ye({props:{classNames:"transition duration-200 ease-in-out "+(r[2]&&"opacity-0"),label:"code excerpt",value:r[0]}}),{c(){e=A("div"),l=A("div"),D(s.$$.fragment),t=j(),n=A("pre"),this.h()},l(u){e=C(u,"DIV",{class:!0});var f=v(e);l=C(f,"DIV",{class:!0});var i=v(l);U(s.$$.fragment,i),i.forEach(d),t=B(f),n=C(f,"PRE",{});var _=v(n);_.forEach(d),f.forEach(d),this.h()},h(){a(l,"class","absolute top-2.5 right-4"),a(e,"class","code-block relative")},m(u,f){N(u,e,f),y(e,l),O(s,l,null),y(e,t),y(e,n),n.innerHTML=r[1],c=!0,h||(g=[R(e,"mouseover",r[3]),R(e,"focus",r[3]),R(e,"mouseout",r[4]),R(e,"blur",r[4])],h=!0)},p(u,[f]){const i={};f&4&&(i.classNames="transition duration-200 ease-in-out "+(u[2]&&"opacity-0")),f&1&&(i.value=u[0]),s.$set(i),(!c||f&2)&&(n.innerHTML=u[1])},i(u){c||(w(s.$$.fragment,u),c=!0)},o(u){k(s.$$.fragment,u),c=!1},d(u){u&&d(e),S(s),h=!1,ie(g)}}}function Ne(r,e,l){let s=!0,{code:t=""}=e,{highlighted:n=""}=e;function c(){l(2,s=!1)}function h(){l(2,s=!0)}return r.$$set=g=>{"code"in g&&l(0,t=g.code),"highlighted"in g&&l(1,n=g.highlighted)},[t,n,s,c,h]}class Ue extends H{constructor(e){super();V(this,e,Ne,ke,I,{code:0,highlighted:1})}}const K=oe("python");function Ee(r){let e;const l=r[1].default,s=G(l,r,r[0],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,[n]){s&&s.p&&(!e||n&1)&&P(s,l,t,t[0],e?F(l,t[0],n,null):Y(t[0]),null)},i(t){e||(w(s,t),e=!0)},o(t){k(s,t),e=!1},d(t){s&&s.d(t)}}}function xe(r,e,l){let{$$slots:s={},$$scope:t}=e;return r.$$set=n=>{"$$scope"in n&&l(0,t=n.$$scope)},[t,s]}class Ge extends H{constructor(e){super();V(this,e,xe,Ee,I,{})}}function Me(r){let e,l,s;return{c(){e=E("svg"),l=E("path"),s=E("path"),this.h()},l(t){e=x(t,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=v(e);l=x(n,"path",{d:!0,fill:!0}),v(l).forEach(d),s=x(n,"path",{d:!0,fill:!0}),v(s).forEach(d),n.forEach(d),this.h()},h(){a(l,"d","M15.84.5a16.4,16.4,0,0,0-3.57.32C9.1,1.39,8.53,2.53,8.53,4.64V7.48H16v1H5.77a4.73,4.73,0,0,0-4.7,3.74,14.82,14.82,0,0,0,0,7.54c.57,2.28,1.86,3.82,4,3.82h2.6V20.14a4.73,4.73,0,0,1,4.63-4.63h7.38a3.72,3.72,0,0,0,3.73-3.73V4.64A4.16,4.16,0,0,0,19.65.82,20.49,20.49,0,0,0,15.84.5ZM11.78,2.77a1.39,1.39,0,0,1,1.38,1.46,1.37,1.37,0,0,1-1.38,1.38A1.42,1.42,0,0,1,10.4,4.23,1.44,1.44,0,0,1,11.78,2.77Z"),a(l,"fill","#5a9fd4"),a(s,"d","M16.16,31.5a16.4,16.4,0,0,0,3.57-.32c3.17-.57,3.74-1.71,3.74-3.82V24.52H16v-1H26.23a4.73,4.73,0,0,0,4.7-3.74,14.82,14.82,0,0,0,0-7.54c-.57-2.28-1.86-3.82-4-3.82h-2.6v3.41a4.73,4.73,0,0,1-4.63,4.63H12.35a3.72,3.72,0,0,0-3.73,3.73v7.14a4.16,4.16,0,0,0,3.73,3.82A20.49,20.49,0,0,0,16.16,31.5Zm4.06-2.27a1.39,1.39,0,0,1-1.38-1.46,1.37,1.37,0,0,1,1.38-1.38,1.42,1.42,0,0,1,1.38,1.38A1.44,1.44,0,0,1,20.22,29.23Z"),a(s,"fill","#ffd43b"),a(e,"class",r[0]),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),a(e,"aria-hidden","true"),a(e,"focusable","false"),a(e,"role","img"),a(e,"width","1em"),a(e,"height","1em"),a(e,"preserveAspectRatio","xMidYMid meet"),a(e,"viewBox","0 0 32 32")},m(t,n){N(t,e,n),y(e,l),y(e,s)},p(t,[n]){n&1&&a(e,"class",t[0])},i:M,o:M,d(t){t&&d(e)}}}function Ae(r,e,l){let{classNames:s=""}=e;return r.$$set=t=>{"classNames"in t&&l(0,s=t.classNames)},[s]}class Ce extends H{constructor(e){super();V(this,e,Ae,Me,I,{classNames:0})}}function He(r){let e,l,s;return{c(){e=E("svg"),l=E("rect"),s=E("path"),this.h()},l(t){e=x(t,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=v(e);l=x(n,"rect",{width:!0,height:!0,fill:!0}),v(l).forEach(d),s=x(n,"path",{d:!0}),v(s).forEach(d),n.forEach(d),this.h()},h(){a(l,"width","32"),a(l,"height","32"),a(l,"fill","#f7df1e"),a(s,"d","M21.5,25a3.27,3.27,0,0,0,3,1.83c1.25,0,2-.63,2-1.49,0-1-.81-1.39-2.19-2L23.56,23C21.39,22.1,20,20.94,20,18.49c0-2.25,1.72-4,4.41-4a4.44,4.44,0,0,1,4.27,2.41l-2.34,1.5a2,2,0,0,0-1.93-1.29,1.31,1.31,0,0,0-1.44,1.29c0,.9.56,1.27,1.85,1.83l.75.32c2.55,1.1,4,2.21,4,4.72,0,2.71-2.12,4.19-5,4.19a5.78,5.78,0,0,1-5.48-3.07Zm-10.63.26c.48.84.91,1.55,1.94,1.55s1.61-.39,1.61-1.89V14.69h3V25c0,3.11-1.83,4.53-4.49,4.53a4.66,4.66,0,0,1-4.51-2.75Z"),a(e,"class",r[0]),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),a(e,"aria-hidden","true"),a(e,"focusable","false"),a(e,"role","img"),a(e,"width","1em"),a(e,"height","1em"),a(e,"preserveAspectRatio","xMidYMid meet"),a(e,"viewBox","0 0 32 32")},m(t,n){N(t,e,n),y(e,l),y(e,s)},p(t,[n]){n&1&&a(e,"class",t[0])},i:M,o:M,d(t){t&&d(e)}}}function Ve(r,e,l){let{classNames:s=""}=e;return r.$$set=t=>{"classNames"in t&&l(0,s=t.classNames)},[s]}class Ie extends H{constructor(e){super();V(this,e,Ve,He,I,{classNames:0})}}function je(r){let e,l,s;return{c(){e=E("svg"),l=E("rect"),s=E("path"),this.h()},l(t){e=x(t,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=v(e);l=x(n,"rect",{width:!0,height:!0,rx:!0,fill:!0}),v(l).forEach(d),s=x(n,"path",{d:!0,fill:!0}),v(s).forEach(d),n.forEach(d),this.h()},h(){a(l,"width","32"),a(l,"height","32"),a(l,"rx","4"),a(l,"fill","#1683a5"),a(s,"d","M6.71,14A5,5,0,0,1,8.82,9.29l2.64-2.2c1.67-1.37,2.52-1.41,4.6-1.41H21.7c1.19,0,2.45.27,2.45,1.79s-1.4,1.78-2.45,1.78H15.44a3.31,3.31,0,0,0-2,.89L11.24,12c-.55.44-1,.81-1,1.52v4.41c0,.7.41,1.07,1,1.52l2.16,1.82a3.34,3.34,0,0,0,2,.89H21.7c1.05,0,2.45.23,2.45,1.78s-1.26,1.78-2.45,1.78H16.06c-2.08,0-2.94,0-4.6-1.4L8.82,22.09A5.05,5.05,0,0,1,6.71,17.4Z"),a(s,"fill","#fff"),a(e,"class",r[0]),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),a(e,"aria-hidden","true"),a(e,"focusable","false"),a(e,"role","img"),a(e,"width","1em"),a(e,"height","1em"),a(e,"preserveAspectRatio","xMidYMid meet"),a(e,"viewBox","0 0 32 32")},m(t,n){N(t,e,n),y(e,l),y(e,s)},p(t,[n]){n&1&&a(e,"class",t[0])},i:M,o:M,d(t){t&&d(e)}}}function Be(r,e,l){let{classNames:s=""}=e;return r.$$set=t=>{"classNames"in t&&l(0,s=t.classNames)},[s]}class Le extends H{constructor(e){super();V(this,e,Be,je,I,{classNames:0})}}const Re=r=>({}),Q=r=>({}),Te=r=>({}),z=r=>({}),Ze=r=>({}),W=r=>({});function X(r,e,l){const s=r.slice();return s[8]=e[l],s}function $(r){let e,l,s,t=r[8].label+"",n,c,h,g,u,f;var i=r[8].icon;function _(o){return{props:{classNames:"mr-1.5"}}}i&&(l=new i(_()));function b(){return r[7](r[8])}return{c(){e=A("li"),l&&D(l.$$.fragment),s=j(),n=le(t),c=j(),this.h()},l(o){e=C(o,"LI",{class:!0});var m=v(e);l&&U(l.$$.fragment,m),s=B(m),n=re(m,t),c=B(m),m.forEach(d),this.h()},h(){a(e,"class",h="flex items-center border rounded-lg px-1.5 py-1 leading-none select-none text-smd "+(r[3]===r[8].id?"border-gray-800 bg-black dark:bg-gray-700 text-white":"text-gray-500 cursor-pointer opacity-90 hover:text-gray-700 dark:hover:text-gray-200 hover:shadow-sm"))},m(o,m){N(o,e,m),l&&O(l,e,null),y(e,s),y(e,n),y(e,c),g=!0,u||(f=R(e,"click",b),u=!0)},p(o,m){if(r=o,i!==(i=r[8].icon)){if(l){T();const p=l;k(p.$$.fragment,1,0,()=>{S(p,1)}),Z()}i?(l=new i(_()),D(l.$$.fragment),w(l.$$.fragment,1),O(l,e,s)):l=null}(!g||m&8&&h!==(h="flex items-center border rounded-lg px-1.5 py-1 leading-none select-none text-smd "+(r[3]===r[8].id?"border-gray-800 bg-black dark:bg-gray-700 text-white":"text-gray-500 cursor-pointer opacity-90 hover:text-gray-700 dark:hover:text-gray-200 hover:shadow-sm")))&&a(e,"class",h)},i(o){g||(l&&w(l.$$.fragment,o),g=!0)},o(o){l&&k(l.$$.fragment,o),g=!1},d(o){o&&d(e),l&&S(l),u=!1,f()}}}function ee(r){let e;const l=r[6].python,s=G(l,r,r[5],W);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&32)&&P(s,l,t,t[5],e?F(l,t[5],n,Ze):Y(t[5]),W)},i(t){e||(w(s,t),e=!0)},o(t){k(s,t),e=!1},d(t){s&&s.d(t)}}}function te(r){let e;const l=r[6].js,s=G(l,r,r[5],z);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&32)&&P(s,l,t,t[5],e?F(l,t[5],n,Te):Y(t[5]),z)},i(t){e||(w(s,t),e=!0)},o(t){k(s,t),e=!1},d(t){s&&s.d(t)}}}function se(r){let e;const l=r[6].curl,s=G(l,r,r[5],Q);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&32)&&P(s,l,t,t[5],e?F(l,t[5],n,Re):Y(t[5]),Q)},i(t){e||(w(s,t),e=!0)},o(t){k(s,t),e=!1},d(t){s&&s.d(t)}}}function De(r){let e,l,s,t,n,c,h,g=r[4],u=[];for(let o=0;o<g.length;o+=1)u[o]=$(X(r,g,o));const f=o=>k(u[o],1,1,()=>{u[o]=null});let i=r[0]&&r[3]==="python"&&ee(r),_=r[1]&&r[3]==="js"&&te(r),b=r[2]&&r[3]==="curl"&&se(r);return{c(){e=A("form"),l=A("ul");for(let o=0;o<u.length;o+=1)u[o].c();s=j(),i&&i.c(),t=j(),_&&_.c(),n=j(),b&&b.c(),c=q(),this.h()},l(o){e=C(o,"FORM",{class:!0});var m=v(e);l=C(m,"UL",{class:!0});var p=v(l);for(let L=0;L<u.length;L+=1)u[L].l(p);p.forEach(d),m.forEach(d),s=B(o),i&&i.l(o),t=B(o),_&&_.l(o),n=B(o),b&&b.l(o),c=q(),this.h()},h(){a(l,"class","flex space-x-2 items-center my-1.5 mr-8 h-7 !pl-0"),a(e,"class","px-4 py-1.5 flex flex-wrap items-center justify-between border-b border-gray-100")},m(o,m){N(o,e,m),y(e,l);for(let p=0;p<u.length;p+=1)u[p].m(l,null);N(o,s,m),i&&i.m(o,m),N(o,t,m),_&&_.m(o,m),N(o,n,m),b&&b.m(o,m),N(o,c,m),h=!0},p(o,[m]){if(m&24){g=o[4];let p;for(p=0;p<g.length;p+=1){const L=X(o,g,p);u[p]?(u[p].p(L,m),w(u[p],1)):(u[p]=$(L),u[p].c(),w(u[p],1),u[p].m(l,null))}for(T(),p=g.length;p<u.length;p+=1)f(p);Z()}o[0]&&o[3]==="python"?i?(i.p(o,m),m&9&&w(i,1)):(i=ee(o),i.c(),w(i,1),i.m(t.parentNode,t)):i&&(T(),k(i,1,1,()=>{i=null}),Z()),o[1]&&o[3]==="js"?_?(_.p(o,m),m&10&&w(_,1)):(_=te(o),_.c(),w(_,1),_.m(n.parentNode,n)):_&&(T(),k(_,1,1,()=>{_=null}),Z()),o[2]&&o[3]==="curl"?b?(b.p(o,m),m&12&&w(b,1)):(b=se(o),b.c(),w(b,1),b.m(c.parentNode,c)):b&&(T(),k(b,1,1,()=>{b=null}),Z())},i(o){if(!h){for(let m=0;m<g.length;m+=1)w(u[m]);w(i),w(_),w(b),h=!0}},o(o){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)k(u[m]);k(i),k(_),k(b),h=!1},d(o){o&&d(e),ce(u,o),o&&d(s),i&&i.d(o),o&&d(t),_&&_.d(o),o&&d(n),b&&b.d(o),o&&d(c)}}}function Oe(r,e,l){let s;ue(r,K,i=>l(3,s=i));let{$$slots:t={},$$scope:n}=e;const c=[{id:"python",icon:Ce,label:"Python"},{id:"js",icon:Ie,label:"JavaScript"},{id:"curl",icon:Le,label:"cURL"}];let{python:h=!1}=e,{js:g=!1}=e,{curl:u=!1}=e;const f=i=>fe(K,s=i.id,s);return r.$$set=i=>{"python"in i&&l(0,h=i.python),"js"in i&&l(1,g=i.js),"curl"in i&&l(2,u=i.curl),"$$scope"in i&&l(5,n=i.$$scope)},[h,g,u,s,c,n,t,f]}class Pe extends H{constructor(e){super();V(this,e,Oe,De,I,{python:0,js:1,curl:2})}}export{Ue as C,Pe as I,Ge as M};
