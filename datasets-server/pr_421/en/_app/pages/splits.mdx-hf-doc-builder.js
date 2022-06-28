import{S as Ds,i as Ms,s as Bs,F as Fs,e as i,c as h,a as d,d as a,b as j,g as q,H as Ns,I as Os,J as Hs,q as H,o as J,k as $,w as Y,t as c,M as Js,m as v,x as Z,h as r,G as n,y as ss,B as as,v as Ls}from"../chunks/vendor-hf-doc-builder.js";import{I as Gs}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ts}from"../chunks/CodeBlock-hf-doc-builder.js";function Us(m){let p,o;const f=m[3].default,l=Fs(f,m,m[2],null);return{c(){p=i("div"),l&&l.c(),this.h()},l(t){p=h(t,"DIV",{class:!0});var e=d(p);l&&l.l(e),e.forEach(a),this.h()},h(){j(p,"class","course-tip "+(m[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+m[0]+"-500 dark:before:border-"+m[0]+"-800 from-"+m[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+m[0]+"-50 text-"+m[0]+"-700 dark:text-gray-400")},m(t,e){q(t,p,e),l&&l.m(p,null),o=!0},p(t,[e]){l&&l.p&&(!o||e&4)&&Ns(l,f,t,t[2],o?Hs(f,t[2],e,null):Os(t[2]),null)},i(t){o||(H(l,t),o=!0)},o(t){J(l,t),o=!1},d(t){t&&a(p),l&&l.d(t)}}}function Vs(m,p,o){let{$$slots:f={},$$scope:l}=p,{warning:t=!1}=p;const e=t?"orange":"green";return m.$$set=w=>{"warning"in w&&o(1,t=w.warning),"$$scope"in w&&o(2,l=w.$$scope)},[e,t,l,f]}class zs extends Ds{constructor(p){super();Ms(this,p,Vs,Us,Bs,{warning:1})}}function Ks(m){let p,o,f,l;return{c(){p=c("Currently, the API only returns rows of the "),o=i("a"),f=c('"streamable" datasets'),l=c(". By loading a dataset in streaming mode, the first rows can be extracted without downloading the whole dataset."),this.h()},l(t){p=r(t,"Currently, the API only returns rows of the "),o=h(t,"A",{href:!0});var e=d(o);f=r(e,'"streamable" datasets'),e.forEach(a),l=r(t,". By loading a dataset in streaming mode, the first rows can be extracted without downloading the whole dataset."),this.h()},h(){j(o,"href","https://huggingface.co/docs/datasets/stream")},m(t,e){q(t,p,e),q(t,o,e),n(o,f),q(t,l,e)},d(t){t&&a(p),t&&a(o),t&&a(l)}}}function Qs(m){let p,o,f,l,t,e,w,M,ts,L,g,ns,B,C,ls,ps,F,es,os,N,us,cs,O,x,rs,is,G,_,hs,S,fs,ds,P,js,ms,U,T,qs,V,k,z,y,K,E,gs,A,_s,bs,Q,R,W;return e=new Gs({}),k=new Ts({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset_name}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset_name}'}}),y=new zs({props:{warning:!0,$$slots:{default:[Ks]},$$scope:{ctx:m}}}),R=new Ts({props:{code:`https://datasets-server.huggingface.co/splits?dataset=duorc
{
  "splits": [
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "num_bytes": 239852925,
      "num_examples": 60721
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "validation",
      "num_bytes": 51662575,
      "num_examples": 12961
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "test",
      "num_bytes": 49142766,
      "num_examples": 12559
    },
    {
      "dataset": "duorc",
      "config": "ParaphraseRC",
      "split": "train",
      "num_bytes": 496683105,
      "num_examples": 69524
    },
    {
      "dataset": "duorc",
      "config": "ParaphraseRC",
      "split": "validation",
      "num_bytes": 106510545,
      "num_examples": 15591
    },
    {
      "dataset": "duorc",
      "config": "ParaphraseRC",
      "split": "test",
      "num_bytes": 115215816,
      "num_examples": 15857
    }
  ]
}`,highlighted:`https<span class="hljs-punctuation">:</span><span class="hljs-comment">//datasets-server.huggingface.co/splits?dataset=duorc</span>
<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;splits&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">239852925</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">60721</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;validation&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">51662575</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12961</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">49142766</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12559</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ParaphraseRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">496683105</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">69524</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ParaphraseRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;validation&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">106510545</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">15591</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ParaphraseRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">115215816</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">15857</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>`}}),{c(){p=i("meta"),o=$(),f=i("h1"),l=i("a"),t=i("span"),Y(e.$$.fragment),w=$(),M=i("span"),ts=c("Splits"),L=$(),g=i("p"),ns=c("A dataset generally contains multiple "),B=i("em"),C=i("a"),ls=c("splits"),ps=c(", a specific subset of a dataset like "),F=i("code"),es=c("train"),os=c(" and "),N=i("code"),us=c("test"),cs=c(". The dataset can also contain "),O=i("em"),x=i("a"),rs=c("configurations"),is=c(", a sub-dataset of the larger dataset."),G=$(),_=i("p"),hs=c("See the "),S=i("a"),fs=c("documentation"),ds=c(" of the "),P=i("a"),js=c("\u{1F917} Datasets"),ms=c(" library to read more in depth about the concepts."),U=$(),T=i("p"),qs=c("To get the list of splits and configurations of a dataset:"),V=$(),Y(k.$$.fragment),z=$(),Y(y.$$.fragment),K=$(),E=i("p"),gs=c("For example, the "),A=i("a"),_s=c("duorc"),bs=c(" dataset has six splits and two configurations:"),Q=$(),Y(R.$$.fragment),this.h()},l(s){const u=Js('[data-svelte="svelte-1phssyn"]',document.head);p=h(u,"META",{name:!0,content:!0}),u.forEach(a),o=v(s),f=h(s,"H1",{class:!0});var I=d(f);l=h(I,"A",{id:!0,class:!0,href:!0});var $s=d(l);t=h($s,"SPAN",{});var vs=d(t);Z(e.$$.fragment,vs),vs.forEach(a),$s.forEach(a),w=v(I),M=h(I,"SPAN",{});var ws=d(M);ts=r(ws,"Splits"),ws.forEach(a),I.forEach(a),L=v(s),g=h(s,"P",{});var b=d(g);ns=r(b,"A dataset generally contains multiple "),B=h(b,"EM",{});var ys=d(B);C=h(ys,"A",{href:!0,rel:!0});var Es=d(C);ls=r(Es,"splits"),Es.forEach(a),ys.forEach(a),ps=r(b,", a specific subset of a dataset like "),F=h(b,"CODE",{});var Cs=d(F);es=r(Cs,"train"),Cs.forEach(a),os=r(b," and "),N=h(b,"CODE",{});var xs=d(N);us=r(xs,"test"),xs.forEach(a),cs=r(b,". The dataset can also contain "),O=h(b,"EM",{});var Ss=d(O);x=h(Ss,"A",{href:!0,rel:!0});var Ps=d(x);rs=r(Ps,"configurations"),Ps.forEach(a),Ss.forEach(a),is=r(b,", a sub-dataset of the larger dataset."),b.forEach(a),G=v(s),_=h(s,"P",{});var D=d(_);hs=r(D,"See the "),S=h(D,"A",{href:!0,rel:!0});var ks=d(S);fs=r(ks,"documentation"),ks.forEach(a),ds=r(D," of the "),P=h(D,"A",{href:!0,rel:!0});var As=d(P);js=r(As,"\u{1F917} Datasets"),As.forEach(a),ms=r(D," library to read more in depth about the concepts."),D.forEach(a),U=v(s),T=h(s,"P",{});var Rs=d(T);qs=r(Rs,"To get the list of splits and configurations of a dataset:"),Rs.forEach(a),V=v(s),Z(k.$$.fragment,s),z=v(s),Z(y.$$.fragment,s),K=v(s),E=h(s,"P",{});var X=d(E);gs=r(X,"For example, the "),A=h(X,"A",{href:!0,rel:!0});var Is=d(A);_s=r(Is,"duorc"),Is.forEach(a),bs=r(X," dataset has six splits and two configurations:"),X.forEach(a),Q=v(s),Z(R.$$.fragment,s),this.h()},h(){j(p,"name","hf:doc:metadata"),j(p,"content",JSON.stringify(Ws)),j(l,"id","splits"),j(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(l,"href","#splits"),j(f,"class","relative group"),j(C,"href","https://huggingface.co/docs/datasets/load_hub#splits"),j(C,"rel","nofollow"),j(x,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),j(x,"rel","nofollow"),j(S,"href","https://huggingface.co/docs/datasets"),j(S,"rel","nofollow"),j(P,"href","https://github.com/huggingface/datasets"),j(P,"rel","nofollow"),j(A,"href","https://huggingface.co/datasets/duorc"),j(A,"rel","nofollow")},m(s,u){n(document.head,p),q(s,o,u),q(s,f,u),n(f,l),n(l,t),ss(e,t,null),n(f,w),n(f,M),n(M,ts),q(s,L,u),q(s,g,u),n(g,ns),n(g,B),n(B,C),n(C,ls),n(g,ps),n(g,F),n(F,es),n(g,os),n(g,N),n(N,us),n(g,cs),n(g,O),n(O,x),n(x,rs),n(g,is),q(s,G,u),q(s,_,u),n(_,hs),n(_,S),n(S,fs),n(_,ds),n(_,P),n(P,js),n(_,ms),q(s,U,u),q(s,T,u),n(T,qs),q(s,V,u),ss(k,s,u),q(s,z,u),ss(y,s,u),q(s,K,u),q(s,E,u),n(E,gs),n(E,A),n(A,_s),n(E,bs),q(s,Q,u),ss(R,s,u),W=!0},p(s,[u]){const I={};u&2&&(I.$$scope={dirty:u,ctx:s}),y.$set(I)},i(s){W||(H(e.$$.fragment,s),H(k.$$.fragment,s),H(y.$$.fragment,s),H(R.$$.fragment,s),W=!0)},o(s){J(e.$$.fragment,s),J(k.$$.fragment,s),J(y.$$.fragment,s),J(R.$$.fragment,s),W=!1},d(s){a(p),s&&a(o),s&&a(f),as(e),s&&a(L),s&&a(g),s&&a(G),s&&a(_),s&&a(U),s&&a(T),s&&a(V),as(k,s),s&&a(z),as(y,s),s&&a(K),s&&a(E),s&&a(Q),as(R,s)}}}const Ws={local:"splits",title:"Splits"};function Xs(m){return Ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Ds{constructor(p){super();Ms(this,p,Xs,Qs,Bs,{})}}export{aa as default,Ws as metadata};
