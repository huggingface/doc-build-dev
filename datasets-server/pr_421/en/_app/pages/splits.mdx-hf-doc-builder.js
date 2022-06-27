import{S as Xs,i as Ys,s as Zs,F as sa,e as o,c as u,a as c,d as a,b as j,g as h,H as aa,I as ta,J as na,q as G,o as V,k as g,w as us,t as r,M as la,m as _,x as cs,h as i,G as t,y as rs,B as is,v as ea}from"../chunks/vendor-hf-doc-builder.js";import{I as pa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ws}from"../chunks/CodeBlock-hf-doc-builder.js";function oa(m){let p,f;const d=m[3].default,n=sa(d,m,m[2],null);return{c(){p=o("div"),n&&n.c(),this.h()},l(l){p=u(l,"DIV",{class:!0});var q=c(p);n&&n.l(q),q.forEach(a),this.h()},h(){j(p,"class","course-tip "+(m[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+m[0]+"-500 dark:before:border-"+m[0]+"-800 from-"+m[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+m[0]+"-50 text-"+m[0]+"-700 dark:text-gray-400")},m(l,q){h(l,p,q),n&&n.m(p,null),f=!0},p(l,[q]){n&&n.p&&(!f||q&4)&&aa(n,d,l,l[2],f?na(d,l[2],q,null):ta(l[2]),null)},i(l){f||(G(n,l),f=!0)},o(l){V(n,l),f=!1},d(l){l&&a(p),n&&n.d(l)}}}function ua(m,p,f){let{$$slots:d={},$$scope:n}=p,{warning:l=!1}=p;const q=l?"orange":"green";return m.$$set=w=>{"warning"in w&&f(1,l=w.warning),"$$scope"in w&&f(2,n=w.$$scope)},[q,l,n,d]}class ca extends Xs{constructor(p){super();Ys(this,p,ua,oa,Zs,{warning:1})}}function ra(m){let p,f,d;return{c(){p=r(`Currently, the API only returns rows of the ["streamable" datasets](https://huggingface.co/docs/datasets/stream).
`),f=o("p"),d=r("By loading the datasets in streaming mode, the first rows can be extracted without the need to download the whole dataset. In the future, we plan to also support non-streamable datasets.")},l(n){p=i(n,`Currently, the API only returns rows of the ["streamable" datasets](https://huggingface.co/docs/datasets/stream).
`),f=u(n,"P",{});var l=c(f);d=i(l,"By loading the datasets in streaming mode, the first rows can be extracted without the need to download the whole dataset. In the future, we plan to also support non-streamable datasets."),l.forEach(a)},m(n,l){h(n,p,l),h(n,f,l),t(f,d)},d(n){n&&a(p),n&&a(f)}}}function ia(m){let p,f,d,n,l,q,w,L,hs,z,$,fs,C,ds,js,W,B,y,ms,N,qs,gs,U,_s,X,E,bs,S,vs,ws,Y,D,H,$s,Z,b,ys,P,Es,ks,x,Cs,Ss,ss,F,Ps,as,A,ts,k,ns,v,xs,R,J,As,Rs,I,Is,ls,O,es;return q=new pa({}),A=new Ws({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset_name}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset_name}'}}),k=new ca({props:{warning:!0,$$slots:{default:[ra]},$$scope:{ctx:m}}}),O=new Ws({props:{code:`{
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
}`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),{c(){p=o("meta"),f=g(),d=o("h1"),n=o("a"),l=o("span"),us(q.$$.fragment),w=g(),L=o("span"),hs=r("Splits"),z=g(),$=o("p"),fs=r("A dataset generally contains multiple "),C=o("a"),ds=r("splits"),js=r(":"),W=g(),B=o("blockquote"),y=o("p"),ms=r("a split is a specific subset of a dataset like "),N=o("code"),qs=r("train"),gs=r(" and "),U=o("code"),_s=r("test"),X=g(),E=o("p"),bs=r("and optionally various "),S=o("a"),vs=r("configurations"),ws=r(":"),Y=g(),D=o("blockquote"),H=o("p"),$s=r("Some datasets contain several sub-datasets. For example, the MInDS-14 dataset has several sub-datasets, each one containing audio data in a different language. These sub-datasets are known as configurations."),Z=g(),b=o("p"),ys=r("See the "),P=o("a"),Es=r("documentation"),ks=r(" of the "),x=o("a"),Cs=r("\u{1F917} datasets"),Ss=r(" library to read more in depth about the concepts."),ss=g(),F=o("p"),Ps=r("To get the list of splits and configurations of a dataset:"),as=g(),us(A.$$.fragment),ts=g(),us(k.$$.fragment),ns=g(),v=o("p"),xs=r("For example, "),R=o("a"),J=o("code"),As=r("duorc"),Rs=r(" has six splits, within two configurations: "),I=o("a"),Is=r("https://datasets-server.huggingface.co/splits?dataset=duorc"),ls=g(),us(O.$$.fragment),this.h()},l(s){const e=la('[data-svelte="svelte-1phssyn"]',document.head);p=u(e,"META",{name:!0,content:!0}),e.forEach(a),f=_(s),d=u(s,"H1",{class:!0});var T=c(d);n=u(T,"A",{id:!0,class:!0,href:!0});var Os=c(n);l=u(Os,"SPAN",{});var Ts=c(l);cs(q.$$.fragment,Ts),Ts.forEach(a),Os.forEach(a),w=_(T),L=u(T,"SPAN",{});var Bs=c(L);hs=i(Bs,"Splits"),Bs.forEach(a),T.forEach(a),z=_(s),$=u(s,"P",{});var ps=c($);fs=i(ps,"A dataset generally contains multiple "),C=u(ps,"A",{href:!0,rel:!0});var Ds=c(C);ds=i(Ds,"splits"),Ds.forEach(a),js=i(ps,":"),ps.forEach(a),W=_(s),B=u(s,"BLOCKQUOTE",{});var Fs=c(B);y=u(Fs,"P",{});var K=c(y);ms=i(K,"a split is a specific subset of a dataset like "),N=u(K,"CODE",{});var Ms=c(N);qs=i(Ms,"train"),Ms.forEach(a),gs=i(K," and "),U=u(K,"CODE",{});var Ls=c(U);_s=i(Ls,"test"),Ls.forEach(a),K.forEach(a),Fs.forEach(a),X=_(s),E=u(s,"P",{});var os=c(E);bs=i(os,"and optionally various "),S=u(os,"A",{href:!0,rel:!0});var Ns=c(S);vs=i(Ns,"configurations"),Ns.forEach(a),ws=i(os,":"),os.forEach(a),Y=_(s),D=u(s,"BLOCKQUOTE",{});var Us=c(D);H=u(Us,"P",{});var Hs=c(H);$s=i(Hs,"Some datasets contain several sub-datasets. For example, the MInDS-14 dataset has several sub-datasets, each one containing audio data in a different language. These sub-datasets are known as configurations."),Hs.forEach(a),Us.forEach(a),Z=_(s),b=u(s,"P",{});var M=c(b);ys=i(M,"See the "),P=u(M,"A",{href:!0,rel:!0});var Js=c(P);Es=i(Js,"documentation"),Js.forEach(a),ks=i(M," of the "),x=u(M,"A",{href:!0,rel:!0});var Ks=c(x);Cs=i(Ks,"\u{1F917} datasets"),Ks.forEach(a),Ss=i(M," library to read more in depth about the concepts."),M.forEach(a),ss=_(s),F=u(s,"P",{});var Qs=c(F);Ps=i(Qs,"To get the list of splits and configurations of a dataset:"),Qs.forEach(a),as=_(s),cs(A.$$.fragment,s),ts=_(s),cs(k.$$.fragment,s),ns=_(s),v=u(s,"P",{});var Q=c(v);xs=i(Q,"For example, "),R=u(Q,"A",{href:!0,rel:!0});var Gs=c(R);J=u(Gs,"CODE",{});var Vs=c(J);As=i(Vs,"duorc"),Vs.forEach(a),Gs.forEach(a),Rs=i(Q," has six splits, within two configurations: "),I=u(Q,"A",{href:!0,rel:!0});var zs=c(I);Is=i(zs,"https://datasets-server.huggingface.co/splits?dataset=duorc"),zs.forEach(a),Q.forEach(a),ls=_(s),cs(O.$$.fragment,s),this.h()},h(){j(p,"name","hf:doc:metadata"),j(p,"content",JSON.stringify(ha)),j(n,"id","splits"),j(n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(n,"href","#splits"),j(d,"class","relative group"),j(C,"href","https://huggingface.co/docs/datasets/load_hub#splits"),j(C,"rel","nofollow"),j(S,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),j(S,"rel","nofollow"),j(P,"href","https://huggingface.co/docs/datasets"),j(P,"rel","nofollow"),j(x,"href","https://github.com/huggingface/datasets"),j(x,"rel","nofollow"),j(R,"href","https://huggingface.co/datasets/duorc"),j(R,"rel","nofollow"),j(I,"href","https://datasets-server.huggingface.co/splits?dataset=duorc"),j(I,"rel","nofollow")},m(s,e){t(document.head,p),h(s,f,e),h(s,d,e),t(d,n),t(n,l),rs(q,l,null),t(d,w),t(d,L),t(L,hs),h(s,z,e),h(s,$,e),t($,fs),t($,C),t(C,ds),t($,js),h(s,W,e),h(s,B,e),t(B,y),t(y,ms),t(y,N),t(N,qs),t(y,gs),t(y,U),t(U,_s),h(s,X,e),h(s,E,e),t(E,bs),t(E,S),t(S,vs),t(E,ws),h(s,Y,e),h(s,D,e),t(D,H),t(H,$s),h(s,Z,e),h(s,b,e),t(b,ys),t(b,P),t(P,Es),t(b,ks),t(b,x),t(x,Cs),t(b,Ss),h(s,ss,e),h(s,F,e),t(F,Ps),h(s,as,e),rs(A,s,e),h(s,ts,e),rs(k,s,e),h(s,ns,e),h(s,v,e),t(v,xs),t(v,R),t(R,J),t(J,As),t(v,Rs),t(v,I),t(I,Is),h(s,ls,e),rs(O,s,e),es=!0},p(s,[e]){const T={};e&2&&(T.$$scope={dirty:e,ctx:s}),k.$set(T)},i(s){es||(G(q.$$.fragment,s),G(A.$$.fragment,s),G(k.$$.fragment,s),G(O.$$.fragment,s),es=!0)},o(s){V(q.$$.fragment,s),V(A.$$.fragment,s),V(k.$$.fragment,s),V(O.$$.fragment,s),es=!1},d(s){a(p),s&&a(f),s&&a(d),is(q),s&&a(z),s&&a($),s&&a(W),s&&a(B),s&&a(X),s&&a(E),s&&a(Y),s&&a(D),s&&a(Z),s&&a(b),s&&a(ss),s&&a(F),s&&a(as),is(A,s),s&&a(ts),is(k,s),s&&a(ns),s&&a(v),s&&a(ls),is(O,s)}}}const ha={local:"splits",title:"Splits"};function fa(m){return ea(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends Xs{constructor(p){super();Ys(this,p,fa,ia,Zs,{})}}export{qa as default,ha as metadata};
