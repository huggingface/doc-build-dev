function h(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(D)}function P(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function dt(t,n,e,i){if(t){const r=z(t,n,e,i);return t[0](r)}}function z(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,u){if(r){const c=z(n,e,i,u);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){return t&&P(t.destroy)?t.destroy:h}let E=!1;function V(){E=!0}function X(){E=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&o.push(a)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const l=n[o].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:Y(1,r,x=>n[e[x]].claim_order,l))-1;i[o]=e[a]+1;const f=a+1;e[f]=o,r=Math.max(f,r)}const u=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(u.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(c[o],a)}}function tt(t,n){if(E){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){E&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function T(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function gt(){return j(" ")}function xt(){return j("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function wt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $t(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function Tt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function rt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){G(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function I(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return I(t,n,e,O)}function At(t,n,e){return I(t,n,e,it)}function ot(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Nt(t){return ot(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function St(t){const n=H(t,"HTML_TAG_START",0),e=H(t,"HTML_TAG_END",n);if(n===e)return new L;G(t);const i=t.splice(n,e-n+1);T(i[0]),T(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(r)}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class ct{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=O(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(T)}}class L extends ct{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let y;function p(t){y=t}function A(){if(!y)throw new Error("Function called outside component initialization");return y}function vt(t){A().$$.on_mount.push(t)}function Ct(t){A().$$.after_update.push(t)}function Ht(t){A().$$.on_destroy.push(t)}function Lt(t,n){A().$$.context.set(t,n)}const m=[],q=[],w=[],B=[],R=Promise.resolve();let S=!1;function W(){S||(S=!0,R.then(J))}function qt(){return W(),R}function k(t){w.push(t)}const N=new Set;let b=0;function J(){const t=y;do{for(;b<m.length;){const n=m[b];b++,p(n),st(n.$$)}for(p(null),m.length=0,b=0;q.length;)q.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];N.has(e)||(N.add(e),e())}w.length=0}while(m.length);for(;B.length;)B.pop()();S=!1,N.clear(),p(t)}function st(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const $=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Dt(){d.r||g(d.c),d=d.p}function lt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const zt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ot(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[u]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Gt(t){return typeof t=="object"&&t!==null?t:{}}function Ft(t){t&&t.c()}function It(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||k(()=>{const o=u.map(D).filter(P);c?c.push(...o):g(o),t.$$.on_mount=[]}),s.forEach(k)}function ft(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(m.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,r,u,c,s=[-1]){const o=y;p(t);const l=t.$$={fragment:null,ctx:null,props:u,update:h,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,x,...M)=>{const v=M.length?M[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),a&&at(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){V();const f=rt(n.target);l.fragment&&l.fragment.l(f),f.forEach(T)}else l.fragment&&l.fragment.c();n.intro&&lt(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),X(),J()}p(o)}class Wt{$destroy(){ft(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Jt(t,n=h){let e;const i=new Set;function r(s){if(Q(t,s)&&(t=s,e)){const o=!_.length;for(const l of i)l[1](),_.push(l,t);if(o){for(let l=0;l<_.length;l+=2)_[l][0](_[l+1]);_.length=0}}}function u(s){r(s(t))}function c(s,o=h){const l=[s,o];return i.add(l),i.size===1&&(e=n(r)||h),s(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:c}}export{Gt as A,ft as B,K as C,Jt as D,qt as E,tt as F,yt as G,dt as H,ht as I,mt as J,_t as K,h as L,Mt as M,it as N,At as O,bt as P,Ht as Q,g as R,Wt as S,pt as T,P as U,$t as V,wt as W,L as X,St as Y,zt as Z,q as _,rt as a,Tt as b,Et as c,T as d,O as e,jt as f,et as g,ot as h,Rt as i,kt as j,gt as k,xt as l,Nt as m,Bt as n,Pt as o,Dt as p,lt as q,Lt as r,Q as s,j as t,Ct as u,vt as v,Ft as w,It as x,ut as y,Ot as z};
