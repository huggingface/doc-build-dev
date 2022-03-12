import{S as jt,i as $t,s as bt,e as a,k as h,w as N,t as i,M as Pt,c as n,d as t,m,a as o,x as B,h as l,b as p,F as r,g as f,y as L,L as Et,q as x,o as O,B as J}from"../chunks/vendor-4833417e.js";import{I as st}from"../chunks/IconCopyLink-4b81c553.js";import{C as $e}from"../chunks/CodeBlock-6a3d1b46.js";import"../chunks/CopyButton-dacfbfaf.js";function St(be){let d,W,k,c,X,$,Pe,Y,Ee,ne,z,Se,C,Ae,qe,b,Fe,Ne,oe,H,Be,ie,P,le,U,Le,fe,_,v,Z,E,xe,ee,Oe,pe,u,Je,K,We,Ce,te,He,Ue,he,S,me,w,Ke,M,Me,Ie,ke,T,y,re,A,De,se,Ge,ce,I,Qe,de,q,ze,g,Re,D,Ve,Xe,ae,Ye,Ze,ue,F,ge,j,et,G,tt,rt,_e;return $=new st({}),P=new $e({props:{code:`from tokenizers import Tokenizer
from tokenizers.models import BPE
from tokenizers.trainers import BpeTrainer
from tokenizers.pre_tokenizers import Whitespace

tokenizer = Tokenizer(BPE(unk_token="[UNK]"))
trainer = BpeTrainer(special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"])

tokenizer.pre_tokenizer = Whitespace()
files = [...]
tokenizer.train(files, trainer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.models <span class="hljs-keyword">import</span> BPE
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.trainers <span class="hljs-keyword">import</span> BpeTrainer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Tokenizer(BPE(unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = BpeTrainer(special_tokens=[<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.pre_tokenizer = Whitespace()
<span class="hljs-meta">&gt;&gt;&gt; </span>files = [...]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.train(files, trainer)`}}),E=new st({}),S=new $e({props:{code:`from transformers import PreTrainedTokenizerFast

fast_tokenizer = PreTrainedTokenizerFast(tokenizer_object=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>fast_tokenizer = PreTrainedTokenizerFast(tokenizer_object=tokenizer)`}}),A=new st({}),q=new $e({props:{code:'tokenizer.save("tokenizer.json")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save(<span class="hljs-string">&quot;tokenizer.json&quot;</span>)'}}),F=new $e({props:{code:`from transformers import PreTrainedTokenizerFast

fast_tokenizer = PreTrainedTokenizerFast(tokenizer_file="tokenizer.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>fast_tokenizer = PreTrainedTokenizerFast(tokenizer_file=<span class="hljs-string">&quot;tokenizer.json&quot;</span>)`}}),{c(){d=a("meta"),W=h(),k=a("h1"),c=a("a"),X=a("span"),N($.$$.fragment),Pe=h(),Y=a("span"),Ee=i("Using tokenizers from \u{1F917} Tokenizers"),ne=h(),z=a("p"),Se=i("The "),C=a("a"),Ae=i("PreTrainedTokenizerFast"),qe=i(" depends on the "),b=a("a"),Fe=i("\u{1F917} Tokenizers"),Ne=i(` library. The tokenizers obtained from the \u{1F917} Tokenizers library can be
loaded very simply into \u{1F917} Transformers.`),oe=h(),H=a("p"),Be=i("Before getting in the specifics, let\u2019s first start by creating a dummy tokenizer in a few lines:"),ie=h(),N(P.$$.fragment),le=h(),U=a("p"),Le=i(`We now have a tokenizer trained on the files we defined. We can either continue using it in that runtime, or save it to
a JSON file for future re-use.`),fe=h(),_=a("h2"),v=a("a"),Z=a("span"),N(E.$$.fragment),xe=h(),ee=a("span"),Oe=i("Loading directly from the tokenizer object"),pe=h(),u=a("p"),Je=i(`Let\u2019s see how to leverage this tokenizer object in the \u{1F917} Transformers library. The
`),K=a("a"),We=i("PreTrainedTokenizerFast"),Ce=i(` class allows for easy instantiation, by accepting the instantiated
`),te=a("em"),He=i("tokenizer"),Ue=i(" object as an argument:"),he=h(),N(S.$$.fragment),me=h(),w=a("p"),Ke=i("This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),M=a("a"),Me=i(`the tokenizer
page`),Ie=i(" for more information."),ke=h(),T=a("h2"),y=a("a"),re=a("span"),N(A.$$.fragment),De=h(),se=a("span"),Ge=i("Loading from a JSON file"),ce=h(),I=a("p"),Qe=i("In order to load a tokenizer from a JSON file, let\u2019s first start by saving our tokenizer:"),de=h(),N(q.$$.fragment),ze=h(),g=a("p"),Re=i("The path to which we saved this file can be passed to the "),D=a("a"),Ve=i("PreTrainedTokenizerFast"),Xe=i(` initialization
method using the `),ae=a("code"),Ye=i("tokenizer_file"),Ze=i(" parameter:"),ue=h(),N(F.$$.fragment),ge=h(),j=a("p"),et=i("This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),G=a("a"),tt=i(`the tokenizer
page`),rt=i(" for more information."),this.h()},l(e){const s=Pt('[data-svelte="svelte-1phssyn"]',document.head);d=n(s,"META",{name:!0,content:!0}),s.forEach(t),W=m(e),k=n(e,"H1",{class:!0});var Te=o(k);c=n(Te,"A",{id:!0,class:!0,href:!0});var at=o(c);X=n(at,"SPAN",{});var nt=o(X);B($.$$.fragment,nt),nt.forEach(t),at.forEach(t),Pe=m(Te),Y=n(Te,"SPAN",{});var ot=o(Y);Ee=l(ot,"Using tokenizers from \u{1F917} Tokenizers"),ot.forEach(t),Te.forEach(t),ne=m(e),z=n(e,"P",{});var Q=o(z);Se=l(Q,"The "),C=n(Q,"A",{href:!0});var it=o(C);Ae=l(it,"PreTrainedTokenizerFast"),it.forEach(t),qe=l(Q," depends on the "),b=n(Q,"A",{href:!0,rel:!0});var lt=o(b);Fe=l(lt,"\u{1F917} Tokenizers"),lt.forEach(t),Ne=l(Q,` library. The tokenizers obtained from the \u{1F917} Tokenizers library can be
loaded very simply into \u{1F917} Transformers.`),Q.forEach(t),oe=m(e),H=n(e,"P",{});var ft=o(H);Be=l(ft,"Before getting in the specifics, let\u2019s first start by creating a dummy tokenizer in a few lines:"),ft.forEach(t),ie=m(e),B(P.$$.fragment,e),le=m(e),U=n(e,"P",{});var pt=o(U);Le=l(pt,`We now have a tokenizer trained on the files we defined. We can either continue using it in that runtime, or save it to
a JSON file for future re-use.`),pt.forEach(t),fe=m(e),_=n(e,"H2",{class:!0});var ve=o(_);v=n(ve,"A",{id:!0,class:!0,href:!0});var ht=o(v);Z=n(ht,"SPAN",{});var mt=o(Z);B(E.$$.fragment,mt),mt.forEach(t),ht.forEach(t),xe=m(ve),ee=n(ve,"SPAN",{});var kt=o(ee);Oe=l(kt,"Loading directly from the tokenizer object"),kt.forEach(t),ve.forEach(t),pe=m(e),u=n(e,"P",{});var R=o(u);Je=l(R,`Let\u2019s see how to leverage this tokenizer object in the \u{1F917} Transformers library. The
`),K=n(R,"A",{href:!0});var ct=o(K);We=l(ct,"PreTrainedTokenizerFast"),ct.forEach(t),Ce=l(R,` class allows for easy instantiation, by accepting the instantiated
`),te=n(R,"EM",{});var dt=o(te);He=l(dt,"tokenizer"),dt.forEach(t),Ue=l(R," object as an argument:"),R.forEach(t),he=m(e),B(S.$$.fragment,e),me=m(e),w=n(e,"P",{});var we=o(w);Ke=l(we,"This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),M=n(we,"A",{href:!0});var zt=o(M);Me=l(zt,`the tokenizer
page`),zt.forEach(t),Ie=l(we," for more information."),we.forEach(t),ke=m(e),T=n(e,"H2",{class:!0});var ye=o(T);y=n(ye,"A",{id:!0,class:!0,href:!0});var ut=o(y);re=n(ut,"SPAN",{});var gt=o(re);B(A.$$.fragment,gt),gt.forEach(t),ut.forEach(t),De=m(ye),se=n(ye,"SPAN",{});var _t=o(se);Ge=l(_t,"Loading from a JSON file"),_t.forEach(t),ye.forEach(t),ce=m(e),I=n(e,"P",{});var Tt=o(I);Qe=l(Tt,"In order to load a tokenizer from a JSON file, let\u2019s first start by saving our tokenizer:"),Tt.forEach(t),de=m(e),B(q.$$.fragment,e),ze=m(e),g=n(e,"P",{});var V=o(g);Re=l(V,"The path to which we saved this file can be passed to the "),D=n(V,"A",{href:!0});var vt=o(D);Ve=l(vt,"PreTrainedTokenizerFast"),vt.forEach(t),Xe=l(V,` initialization
method using the `),ae=n(V,"CODE",{});var wt=o(ae);Ye=l(wt,"tokenizer_file"),wt.forEach(t),Ze=l(V," parameter:"),V.forEach(t),ue=m(e),B(F.$$.fragment,e),ge=m(e),j=n(e,"P",{});var je=o(j);et=l(je,"This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),G=n(je,"A",{href:!0});var yt=o(G);tt=l(yt,`the tokenizer
page`),yt.forEach(t),rt=l(je," for more information."),je.forEach(t),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(At)),p(c,"id","using-tokenizers-from-tokenizers"),p(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(c,"href","#using-tokenizers-from-tokenizers"),p(k,"class","relative group"),p(C,"href","/docs/transformers/pr_16100/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(b,"href","https://huggingface.co/docs/tokenizers"),p(b,"rel","nofollow"),p(v,"id","loading-directly-from-the-tokenizer-object"),p(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(v,"href","#loading-directly-from-the-tokenizer-object"),p(_,"class","relative group"),p(K,"href","/docs/transformers/pr_16100/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(M,"href","main_classes/tokenizer"),p(y,"id","loading-from-a-json-file"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#loading-from-a-json-file"),p(T,"class","relative group"),p(D,"href","/docs/transformers/pr_16100/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(G,"href","main_classes/tokenizer")},m(e,s){r(document.head,d),f(e,W,s),f(e,k,s),r(k,c),r(c,X),L($,X,null),r(k,Pe),r(k,Y),r(Y,Ee),f(e,ne,s),f(e,z,s),r(z,Se),r(z,C),r(C,Ae),r(z,qe),r(z,b),r(b,Fe),r(z,Ne),f(e,oe,s),f(e,H,s),r(H,Be),f(e,ie,s),L(P,e,s),f(e,le,s),f(e,U,s),r(U,Le),f(e,fe,s),f(e,_,s),r(_,v),r(v,Z),L(E,Z,null),r(_,xe),r(_,ee),r(ee,Oe),f(e,pe,s),f(e,u,s),r(u,Je),r(u,K),r(K,We),r(u,Ce),r(u,te),r(te,He),r(u,Ue),f(e,he,s),L(S,e,s),f(e,me,s),f(e,w,s),r(w,Ke),r(w,M),r(M,Me),r(w,Ie),f(e,ke,s),f(e,T,s),r(T,y),r(y,re),L(A,re,null),r(T,De),r(T,se),r(se,Ge),f(e,ce,s),f(e,I,s),r(I,Qe),f(e,de,s),L(q,e,s),f(e,ze,s),f(e,g,s),r(g,Re),r(g,D),r(D,Ve),r(g,Xe),r(g,ae),r(ae,Ye),r(g,Ze),f(e,ue,s),L(F,e,s),f(e,ge,s),f(e,j,s),r(j,et),r(j,G),r(G,tt),r(j,rt),_e=!0},p:Et,i(e){_e||(x($.$$.fragment,e),x(P.$$.fragment,e),x(E.$$.fragment,e),x(S.$$.fragment,e),x(A.$$.fragment,e),x(q.$$.fragment,e),x(F.$$.fragment,e),_e=!0)},o(e){O($.$$.fragment,e),O(P.$$.fragment,e),O(E.$$.fragment,e),O(S.$$.fragment,e),O(A.$$.fragment,e),O(q.$$.fragment,e),O(F.$$.fragment,e),_e=!1},d(e){t(d),e&&t(W),e&&t(k),J($),e&&t(ne),e&&t(z),e&&t(oe),e&&t(H),e&&t(ie),J(P,e),e&&t(le),e&&t(U),e&&t(fe),e&&t(_),J(E),e&&t(pe),e&&t(u),e&&t(he),J(S,e),e&&t(me),e&&t(w),e&&t(ke),e&&t(T),J(A),e&&t(ce),e&&t(I),e&&t(de),J(q,e),e&&t(ze),e&&t(g),e&&t(ue),J(F,e),e&&t(ge),e&&t(j)}}}const At={local:"using-tokenizers-from-tokenizers",sections:[{local:"loading-directly-from-the-tokenizer-object",title:"Loading directly from the tokenizer object"},{local:"loading-from-a-json-file",title:"Loading from a JSON file"}],title:"Using tokenizers from \u{1F917} Tokenizers"};function qt(be,d,W){let{fw:k}=d;return be.$$set=c=>{"fw"in c&&W(0,k=c.fw)},[k]}class xt extends jt{constructor(d){super();$t(this,d,qt,St,bt,{fw:0})}}export{xt as default,At as metadata};
