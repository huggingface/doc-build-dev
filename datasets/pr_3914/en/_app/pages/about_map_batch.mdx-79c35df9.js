import{S as Ft,i as Ht,s as Mt,e as s,k as h,w as ee,t as n,M as Bt,c as o,d as t,m as u,a as l,x as te,h as r,b as c,F as a,g as p,y as ae,L as Lt,q as se,o as oe,B as ne}from"../chunks/vendor-e67aec41.js";import{I as ft}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as Ot}from"../chunks/CodeBlock-e2bcf023.js";function Gt(Ie){let b,S,f,d,H,A,Ne,M,qe,le,g,De,C,Pe,Se,re,v,_,B,I,Ce,L,Oe,ie,k,Fe,N,He,Me,pe,y,E,G,q,Be,R,Le,he,$,Ge,O,Re,Je,ue,j,J,Ue,Ke,U,Qe,ce,z,Ve,K,We,Xe,me,m,Ye,Q,Ze,et,V,tt,at,W,st,ot,X,nt,lt,fe,x,rt,Y,it,pt,de,T,ht,Z,ut,ct,be,D,we,F,mt,ve,P,ye;return A=new ft({}),I=new ft({}),q=new ft({}),D=new Ot({props:{code:`from datasets import Dataset
dataset = Dataset.from_dict({"a": [0, 1, 2]})
dataset.map(lambda batch: {"b": batch["a"] * 2}, batched=True)  # new column with 6 elements: [0, 1, 2, 0, 1, 2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;a&quot;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> batch: {<span class="hljs-string">&quot;b&quot;</span>: batch[<span class="hljs-string">&quot;a&quot;</span>] * <span class="hljs-number">2</span>}, batched=<span class="hljs-literal">True</span>)  <span class="hljs-comment"># new column with 6 elements: [0, 1, 2, 0, 1, 2]</span>
<span class="hljs-string">&#x27;ArrowInvalid: Column 1 named b expected length 3 but got length 6&#x27;</span>`}}),P=new Ot({props:{code:`from datasets import Dataset
dataset = Dataset.from_dict({"a": [0, 1, 2]})
dataset_with_duplicates = dataset.map(lambda batch: {"b": batch["a"] * 2}, remove_columns=["a"], batched=True)
len(dataset_with_duplicates)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;a&quot;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_with_duplicates = dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> batch: {<span class="hljs-string">&quot;b&quot;</span>: batch[<span class="hljs-string">&quot;a&quot;</span>] * <span class="hljs-number">2</span>}, remove_columns=[<span class="hljs-string">&quot;a&quot;</span>], batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(dataset_with_duplicates)
<span class="hljs-number">6</span>`}}),{c(){b=s("meta"),S=h(),f=s("h1"),d=s("a"),H=s("span"),ee(A.$$.fragment),Ne=h(),M=s("span"),qe=n("Batch mapping"),le=h(),g=s("p"),De=n("Combining the utility of "),C=s("a"),Pe=n("datasets.Dataset.map()"),Se=n(" with batch mode is very powerful. It allows you to speed up processing, and freely control the size of the generated dataset."),re=h(),v=s("h2"),_=s("a"),B=s("span"),ee(I.$$.fragment),Ce=h(),L=s("span"),Oe=n("Need for speed"),ie=h(),k=s("p"),Fe=n("The primary objective of batch mapping is to speed up processing. Often times, it is faster to work with batches of data instead of single examples. Naturally, batch mapping lends itself to tokenization. For example, the \u{1F917} "),N=s("a"),He=n("Tokenizers"),Me=n(" library works faster with batches because it parallelizes the tokenization of all the examples in a batch."),pe=h(),y=s("h2"),E=s("a"),G=s("span"),ee(q.$$.fragment),Be=h(),R=s("span"),Le=n("Input size != output size"),he=h(),$=s("p"),Ge=n("The ability to control the size of the generated dataset can be leveraged for many interesting use-cases. In the How-to "),O=s("a"),Re=n("map"),Je=n(" section, there are examples of using batch mapping to:"),ue=h(),j=s("ul"),J=s("li"),Ue=n("Split long sentences into shorter chunks."),Ke=h(),U=s("li"),Qe=n("Augment a dataset with additional tokens."),ce=h(),z=s("p"),Ve=n("It is helpful to understand how this works, so you can come up with your own ways to use batch mapping. At this point, you may be wondering how you can control the size of the generated dataset. The answer is: "),K=s("strong"),We=n("the mapped function does not have to return an output batch of the same size"),Xe=n("."),me=h(),m=s("p"),Ye=n("In other words, your mapped function input can be a batch of size "),Q=s("code"),Ze=n("N"),et=n(" and return a batch of size "),V=s("code"),tt=n("M"),at=n(". The output "),W=s("code"),st=n("M"),ot=n(" can be greater than or less than "),X=s("code"),nt=n("N"),lt=n(". This means you can concatenate your examples, divide it up, and even add more examples!"),fe=h(),x=s("p"),rt=n("However, remember that all values in the output dictionary must contain the "),Y=s("strong"),it=n("same number of elements"),pt=n(" as the other fields in the output dictionary. Otherwise, it is not possible to define the number of examples in the output returned by the mapped function. The number can vary between successive batches processed by the mapped function. For a single batch though, all values of the output dictionary should have the same length (i.e., the number of elements)."),de=h(),T=s("p"),ht=n("For example, from a dataset of 1 column and 3 rows, if you use "),Z=s("code"),ut=n("map"),ct=n(` to return a new column with twice as many rows, then you will have an error.
In this case, you end up with one column with 3 rows, and one column with 6 rows. As you can see, the table will not be valid:`),be=h(),ee(D.$$.fragment),we=h(),F=s("p"),mt=n("To make it valid, you have to drop one of the columns:"),ve=h(),ee(P.$$.fragment),this.h()},l(e){const i=Bt('[data-svelte="svelte-1phssyn"]',document.head);b=o(i,"META",{name:!0,content:!0}),i.forEach(t),S=u(e),f=o(e,"H1",{class:!0});var ge=l(f);d=o(ge,"A",{id:!0,class:!0,href:!0});var dt=l(d);H=o(dt,"SPAN",{});var bt=l(H);te(A.$$.fragment,bt),bt.forEach(t),dt.forEach(t),Ne=u(ge),M=o(ge,"SPAN",{});var wt=l(M);qe=r(wt,"Batch mapping"),wt.forEach(t),ge.forEach(t),le=u(e),g=o(e,"P",{});var _e=l(g);De=r(_e,"Combining the utility of "),C=o(_e,"A",{href:!0});var vt=l(C);Pe=r(vt,"datasets.Dataset.map()"),vt.forEach(t),Se=r(_e," with batch mode is very powerful. It allows you to speed up processing, and freely control the size of the generated dataset."),_e.forEach(t),re=u(e),v=o(e,"H2",{class:!0});var ke=l(v);_=o(ke,"A",{id:!0,class:!0,href:!0});var yt=l(_);B=o(yt,"SPAN",{});var gt=l(B);te(I.$$.fragment,gt),gt.forEach(t),yt.forEach(t),Ce=u(ke),L=o(ke,"SPAN",{});var _t=l(L);Oe=r(_t,"Need for speed"),_t.forEach(t),ke.forEach(t),ie=u(e),k=o(e,"P",{});var Ee=l(k);Fe=r(Ee,"The primary objective of batch mapping is to speed up processing. Often times, it is faster to work with batches of data instead of single examples. Naturally, batch mapping lends itself to tokenization. For example, the \u{1F917} "),N=o(Ee,"A",{href:!0,rel:!0});var kt=l(N);He=r(kt,"Tokenizers"),kt.forEach(t),Me=r(Ee," library works faster with batches because it parallelizes the tokenization of all the examples in a batch."),Ee.forEach(t),pe=u(e),y=o(e,"H2",{class:!0});var $e=l(y);E=o($e,"A",{id:!0,class:!0,href:!0});var Et=l(E);G=o(Et,"SPAN",{});var $t=l(G);te(q.$$.fragment,$t),$t.forEach(t),Et.forEach(t),Be=u($e),R=o($e,"SPAN",{});var jt=l(R);Le=r(jt,"Input size != output size"),jt.forEach(t),$e.forEach(t),he=u(e),$=o(e,"P",{});var je=l($);Ge=r(je,"The ability to control the size of the generated dataset can be leveraged for many interesting use-cases. In the How-to "),O=o(je,"A",{href:!0});var zt=l(O);Re=r(zt,"map"),zt.forEach(t),Je=r(je," section, there are examples of using batch mapping to:"),je.forEach(t),ue=u(e),j=o(e,"UL",{});var ze=l(j);J=o(ze,"LI",{});var xt=l(J);Ue=r(xt,"Split long sentences into shorter chunks."),xt.forEach(t),Ke=u(ze),U=o(ze,"LI",{});var Tt=l(U);Qe=r(Tt,"Augment a dataset with additional tokens."),Tt.forEach(t),ze.forEach(t),ce=u(e),z=o(e,"P",{});var xe=l(z);Ve=r(xe,"It is helpful to understand how this works, so you can come up with your own ways to use batch mapping. At this point, you may be wondering how you can control the size of the generated dataset. The answer is: "),K=o(xe,"STRONG",{});var At=l(K);We=r(At,"the mapped function does not have to return an output batch of the same size"),At.forEach(t),Xe=r(xe,"."),xe.forEach(t),me=u(e),m=o(e,"P",{});var w=l(m);Ye=r(w,"In other words, your mapped function input can be a batch of size "),Q=o(w,"CODE",{});var It=l(Q);Ze=r(It,"N"),It.forEach(t),et=r(w," and return a batch of size "),V=o(w,"CODE",{});var Nt=l(V);tt=r(Nt,"M"),Nt.forEach(t),at=r(w,". The output "),W=o(w,"CODE",{});var qt=l(W);st=r(qt,"M"),qt.forEach(t),ot=r(w," can be greater than or less than "),X=o(w,"CODE",{});var Dt=l(X);nt=r(Dt,"N"),Dt.forEach(t),lt=r(w,". This means you can concatenate your examples, divide it up, and even add more examples!"),w.forEach(t),fe=u(e),x=o(e,"P",{});var Te=l(x);rt=r(Te,"However, remember that all values in the output dictionary must contain the "),Y=o(Te,"STRONG",{});var Pt=l(Y);it=r(Pt,"same number of elements"),Pt.forEach(t),pt=r(Te," as the other fields in the output dictionary. Otherwise, it is not possible to define the number of examples in the output returned by the mapped function. The number can vary between successive batches processed by the mapped function. For a single batch though, all values of the output dictionary should have the same length (i.e., the number of elements)."),Te.forEach(t),de=u(e),T=o(e,"P",{});var Ae=l(T);ht=r(Ae,"For example, from a dataset of 1 column and 3 rows, if you use "),Z=o(Ae,"CODE",{});var St=l(Z);ut=r(St,"map"),St.forEach(t),ct=r(Ae,` to return a new column with twice as many rows, then you will have an error.
In this case, you end up with one column with 3 rows, and one column with 6 rows. As you can see, the table will not be valid:`),Ae.forEach(t),be=u(e),te(D.$$.fragment,e),we=u(e),F=o(e,"P",{});var Ct=l(F);mt=r(Ct,"To make it valid, you have to drop one of the columns:"),Ct.forEach(t),ve=u(e),te(P.$$.fragment,e),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(Rt)),c(d,"id","batch-mapping"),c(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(d,"href","#batch-mapping"),c(f,"class","relative group"),c(C,"href","/docs/datasets/pr_3914/en/package_reference/main_classes#datasets.Dataset.map"),c(_,"id","need-for-speed"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#need-for-speed"),c(v,"class","relative group"),c(N,"href","https://huggingface.co/docs/tokenizers/python/latest/"),c(N,"rel","nofollow"),c(E,"id","input-size-output-size"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#input-size-output-size"),c(y,"class","relative group"),c(O,"href","#map")},m(e,i){a(document.head,b),p(e,S,i),p(e,f,i),a(f,d),a(d,H),ae(A,H,null),a(f,Ne),a(f,M),a(M,qe),p(e,le,i),p(e,g,i),a(g,De),a(g,C),a(C,Pe),a(g,Se),p(e,re,i),p(e,v,i),a(v,_),a(_,B),ae(I,B,null),a(v,Ce),a(v,L),a(L,Oe),p(e,ie,i),p(e,k,i),a(k,Fe),a(k,N),a(N,He),a(k,Me),p(e,pe,i),p(e,y,i),a(y,E),a(E,G),ae(q,G,null),a(y,Be),a(y,R),a(R,Le),p(e,he,i),p(e,$,i),a($,Ge),a($,O),a(O,Re),a($,Je),p(e,ue,i),p(e,j,i),a(j,J),a(J,Ue),a(j,Ke),a(j,U),a(U,Qe),p(e,ce,i),p(e,z,i),a(z,Ve),a(z,K),a(K,We),a(z,Xe),p(e,me,i),p(e,m,i),a(m,Ye),a(m,Q),a(Q,Ze),a(m,et),a(m,V),a(V,tt),a(m,at),a(m,W),a(W,st),a(m,ot),a(m,X),a(X,nt),a(m,lt),p(e,fe,i),p(e,x,i),a(x,rt),a(x,Y),a(Y,it),a(x,pt),p(e,de,i),p(e,T,i),a(T,ht),a(T,Z),a(Z,ut),a(T,ct),p(e,be,i),ae(D,e,i),p(e,we,i),p(e,F,i),a(F,mt),p(e,ve,i),ae(P,e,i),ye=!0},p:Lt,i(e){ye||(se(A.$$.fragment,e),se(I.$$.fragment,e),se(q.$$.fragment,e),se(D.$$.fragment,e),se(P.$$.fragment,e),ye=!0)},o(e){oe(A.$$.fragment,e),oe(I.$$.fragment,e),oe(q.$$.fragment,e),oe(D.$$.fragment,e),oe(P.$$.fragment,e),ye=!1},d(e){t(b),e&&t(S),e&&t(f),ne(A),e&&t(le),e&&t(g),e&&t(re),e&&t(v),ne(I),e&&t(ie),e&&t(k),e&&t(pe),e&&t(y),ne(q),e&&t(he),e&&t($),e&&t(ue),e&&t(j),e&&t(ce),e&&t(z),e&&t(me),e&&t(m),e&&t(fe),e&&t(x),e&&t(de),e&&t(T),e&&t(be),ne(D,e),e&&t(we),e&&t(F),e&&t(ve),ne(P,e)}}}const Rt={local:"batch-mapping",sections:[{local:"need-for-speed",title:"Need for speed"},{local:"input-size-output-size",title:"Input size != output size"}],title:"Batch mapping"};function Jt(Ie,b,S){let{fw:f}=b;return Ie.$$set=d=>{"fw"in d&&S(0,f=d.fw)},[f]}class Vt extends Ft{constructor(b){super();Ht(this,b,Jt,Gt,Mt,{fw:0})}}export{Vt as default,Rt as metadata};
