import{S as Xs,i as Ys,s as Zs,F as sa,e as o,c as u,a as h,d as a,b as j,g as f,H as aa,I as ta,J as na,q as G,o as V,k as g,w as us,t as c,M as la,m as _,x as cs,h as r,G as t,y as rs,B as is,v as ea}from"../chunks/vendor-hf-doc-builder.js";import{I as pa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ws}from"../chunks/CodeBlock-hf-doc-builder.js";function oa(q){let p,d;const m=q[3].default,l=sa(m,q,q[2],null);return{c(){p=o("div"),l&&l.c(),this.h()},l(n){p=u(n,"DIV",{class:!0});var i=h(p);l&&l.l(i),i.forEach(a),this.h()},h(){j(p,"class","course-tip "+(q[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+q[0]+"-500 dark:before:border-"+q[0]+"-800 from-"+q[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+q[0]+"-50 text-"+q[0]+"-700 dark:text-gray-400")},m(n,i){f(n,p,i),l&&l.m(p,null),d=!0},p(n,[i]){l&&l.p&&(!d||i&4)&&aa(l,m,n,n[2],d?na(m,n[2],i,null):ta(n[2]),null)},i(n){d||(G(l,n),d=!0)},o(n){V(l,n),d=!1},d(n){n&&a(p),l&&l.d(n)}}}function ua(q,p,d){let{$$slots:m={},$$scope:l}=p,{warning:n=!1}=p;const i=n?"orange":"green";return q.$$set=w=>{"warning"in w&&d(1,n=w.warning),"$$scope"in w&&d(2,l=w.$$scope)},[i,n,l,m]}class ca extends Xs{constructor(p){super();Ys(this,p,ua,oa,Zs,{warning:1})}}function ra(q){let p,d,m,l;return{c(){p=c("Currently, the API only returns rows of the "),d=o("a"),m=c('"streamable" datasets'),l=c(". By loading the datasets in streaming mode, the first rows can be extracted without the need to download the whole dataset. In the future, we plan to also support non-streamable datasets."),this.h()},l(n){p=r(n,"Currently, the API only returns rows of the "),d=u(n,"A",{href:!0});var i=h(d);m=r(i,'"streamable" datasets'),i.forEach(a),l=r(n,". By loading the datasets in streaming mode, the first rows can be extracted without the need to download the whole dataset. In the future, we plan to also support non-streamable datasets."),this.h()},h(){j(d,"href","https://huggingface.co/docs/datasets/stream")},m(n,i){f(n,p,i),f(n,d,i),t(d,m),f(n,l,i)},d(n){n&&a(p),n&&a(d),n&&a(l)}}}function ia(q){let p,d,m,l,n,i,w,L,hs,z,$,fs,C,ds,js,W,T,y,ms,N,qs,gs,U,_s,X,E,bs,S,vs,ws,Y,B,H,$s,Z,b,ys,x,Es,ks,P,Cs,Ss,ss,F,xs,as,A,ts,k,ns,v,Ps,R,J,As,Rs,I,Is,ls,D,es;return i=new pa({}),A=new Ws({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset_name}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset_name}'}}),k=new ca({props:{warning:!0,$$slots:{default:[ra]},$$scope:{ctx:q}}}),D=new Ws({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),{c(){p=o("meta"),d=g(),m=o("h1"),l=o("a"),n=o("span"),us(i.$$.fragment),w=g(),L=o("span"),hs=c("Splits"),z=g(),$=o("p"),fs=c("A dataset generally contains multiple "),C=o("a"),ds=c("splits"),js=c(":"),W=g(),T=o("blockquote"),y=o("p"),ms=c("a split is a specific subset of a dataset like "),N=o("code"),qs=c("train"),gs=c(" and "),U=o("code"),_s=c("test"),X=g(),E=o("p"),bs=c("and optionally various "),S=o("a"),vs=c("configurations"),ws=c(":"),Y=g(),B=o("blockquote"),H=o("p"),$s=c("Some datasets contain several sub-datasets. For example, the MInDS-14 dataset has several sub-datasets, each one containing audio data in a different language. These sub-datasets are known as configurations."),Z=g(),b=o("p"),ys=c("See the "),x=o("a"),Es=c("documentation"),ks=c(" of the "),P=o("a"),Cs=c("\u{1F917} Datasets"),Ss=c(" library to read more in depth about the concepts."),ss=g(),F=o("p"),xs=c("To get the list of splits and configurations of a dataset:"),as=g(),us(A.$$.fragment),ts=g(),us(k.$$.fragment),ns=g(),v=o("p"),Ps=c("For example, "),R=o("a"),J=o("code"),As=c("duorc"),Rs=c(" has six splits, within two configurations: "),I=o("a"),Is=c("https://datasets-server.huggingface.co/splits?dataset=duorc"),ls=g(),us(D.$$.fragment),this.h()},l(s){const e=la('[data-svelte="svelte-1phssyn"]',document.head);p=u(e,"META",{name:!0,content:!0}),e.forEach(a),d=_(s),m=u(s,"H1",{class:!0});var O=h(m);l=u(O,"A",{id:!0,class:!0,href:!0});var Ds=h(l);n=u(Ds,"SPAN",{});var Os=h(n);cs(i.$$.fragment,Os),Os.forEach(a),Ds.forEach(a),w=_(O),L=u(O,"SPAN",{});var Ts=h(L);hs=r(Ts,"Splits"),Ts.forEach(a),O.forEach(a),z=_(s),$=u(s,"P",{});var ps=h($);fs=r(ps,"A dataset generally contains multiple "),C=u(ps,"A",{href:!0,rel:!0});var Bs=h(C);ds=r(Bs,"splits"),Bs.forEach(a),js=r(ps,":"),ps.forEach(a),W=_(s),T=u(s,"BLOCKQUOTE",{});var Fs=h(T);y=u(Fs,"P",{});var K=h(y);ms=r(K,"a split is a specific subset of a dataset like "),N=u(K,"CODE",{});var Ms=h(N);qs=r(Ms,"train"),Ms.forEach(a),gs=r(K," and "),U=u(K,"CODE",{});var Ls=h(U);_s=r(Ls,"test"),Ls.forEach(a),K.forEach(a),Fs.forEach(a),X=_(s),E=u(s,"P",{});var os=h(E);bs=r(os,"and optionally various "),S=u(os,"A",{href:!0,rel:!0});var Ns=h(S);vs=r(Ns,"configurations"),Ns.forEach(a),ws=r(os,":"),os.forEach(a),Y=_(s),B=u(s,"BLOCKQUOTE",{});var Us=h(B);H=u(Us,"P",{});var Hs=h(H);$s=r(Hs,"Some datasets contain several sub-datasets. For example, the MInDS-14 dataset has several sub-datasets, each one containing audio data in a different language. These sub-datasets are known as configurations."),Hs.forEach(a),Us.forEach(a),Z=_(s),b=u(s,"P",{});var M=h(b);ys=r(M,"See the "),x=u(M,"A",{href:!0,rel:!0});var Js=h(x);Es=r(Js,"documentation"),Js.forEach(a),ks=r(M," of the "),P=u(M,"A",{href:!0,rel:!0});var Ks=h(P);Cs=r(Ks,"\u{1F917} Datasets"),Ks.forEach(a),Ss=r(M," library to read more in depth about the concepts."),M.forEach(a),ss=_(s),F=u(s,"P",{});var Qs=h(F);xs=r(Qs,"To get the list of splits and configurations of a dataset:"),Qs.forEach(a),as=_(s),cs(A.$$.fragment,s),ts=_(s),cs(k.$$.fragment,s),ns=_(s),v=u(s,"P",{});var Q=h(v);Ps=r(Q,"For example, "),R=u(Q,"A",{href:!0,rel:!0});var Gs=h(R);J=u(Gs,"CODE",{});var Vs=h(J);As=r(Vs,"duorc"),Vs.forEach(a),Gs.forEach(a),Rs=r(Q," has six splits, within two configurations: "),I=u(Q,"A",{href:!0,rel:!0});var zs=h(I);Is=r(zs,"https://datasets-server.huggingface.co/splits?dataset=duorc"),zs.forEach(a),Q.forEach(a),ls=_(s),cs(D.$$.fragment,s),this.h()},h(){j(p,"name","hf:doc:metadata"),j(p,"content",JSON.stringify(ha)),j(l,"id","splits"),j(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(l,"href","#splits"),j(m,"class","relative group"),j(C,"href","https://huggingface.co/docs/datasets/load_hub#splits"),j(C,"rel","nofollow"),j(S,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),j(S,"rel","nofollow"),j(x,"href","https://huggingface.co/docs/datasets"),j(x,"rel","nofollow"),j(P,"href","https://github.com/huggingface/datasets"),j(P,"rel","nofollow"),j(R,"href","https://huggingface.co/datasets/duorc"),j(R,"rel","nofollow"),j(I,"href","https://datasets-server.huggingface.co/splits?dataset=duorc"),j(I,"rel","nofollow")},m(s,e){t(document.head,p),f(s,d,e),f(s,m,e),t(m,l),t(l,n),rs(i,n,null),t(m,w),t(m,L),t(L,hs),f(s,z,e),f(s,$,e),t($,fs),t($,C),t(C,ds),t($,js),f(s,W,e),f(s,T,e),t(T,y),t(y,ms),t(y,N),t(N,qs),t(y,gs),t(y,U),t(U,_s),f(s,X,e),f(s,E,e),t(E,bs),t(E,S),t(S,vs),t(E,ws),f(s,Y,e),f(s,B,e),t(B,H),t(H,$s),f(s,Z,e),f(s,b,e),t(b,ys),t(b,x),t(x,Es),t(b,ks),t(b,P),t(P,Cs),t(b,Ss),f(s,ss,e),f(s,F,e),t(F,xs),f(s,as,e),rs(A,s,e),f(s,ts,e),rs(k,s,e),f(s,ns,e),f(s,v,e),t(v,Ps),t(v,R),t(R,J),t(J,As),t(v,Rs),t(v,I),t(I,Is),f(s,ls,e),rs(D,s,e),es=!0},p(s,[e]){const O={};e&2&&(O.$$scope={dirty:e,ctx:s}),k.$set(O)},i(s){es||(G(i.$$.fragment,s),G(A.$$.fragment,s),G(k.$$.fragment,s),G(D.$$.fragment,s),es=!0)},o(s){V(i.$$.fragment,s),V(A.$$.fragment,s),V(k.$$.fragment,s),V(D.$$.fragment,s),es=!1},d(s){a(p),s&&a(d),s&&a(m),is(i),s&&a(z),s&&a($),s&&a(W),s&&a(T),s&&a(X),s&&a(E),s&&a(Y),s&&a(B),s&&a(Z),s&&a(b),s&&a(ss),s&&a(F),s&&a(as),is(A,s),s&&a(ts),is(k,s),s&&a(ns),s&&a(v),s&&a(ls),is(D,s)}}}const ha={local:"splits",title:"Splits"};function fa(q){return ea(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends Xs{constructor(p){super();Ys(this,p,fa,ia,Zs,{})}}export{qa as default,ha as metadata};
