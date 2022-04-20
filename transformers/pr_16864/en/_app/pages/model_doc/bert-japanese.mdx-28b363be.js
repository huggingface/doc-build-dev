import{S as Ut,i as Ht,s as Ft,e as o,k as u,w as F,t as l,M as Kt,c as s,d as t,m,a as n,x as K,h as i,b as c,F as a,g as p,y as V,L as Vt,q as G,o as Q,B as X,v as Gt}from"../../chunks/vendor-6b77c823.js";import{D as Qt}from"../../chunks/Docstring-1088f2fb.js";import{C as Wt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _t}from"../../chunks/IconCopyLink-7a11ce68.js";function Xt(kt){let h,pe,d,w,Y,y,Me,Z,Ce,ce,_,g,ee,x,Se,te,Le,ue,R,Re,me,I,Ie,fe,z,k,Ne,q,De,Oe,A,We,Ue,He,ae,Fe,he,f,Ke,oe,Ve,Ge,se,Qe,Xe,re,Ye,Ze,de,T,et,B,tt,at,_e,N,ot,ke,J,ve,D,st,be,P,we,O,rt,ge,W,M,nt,U,lt,it,ze,j,pt,C,ct,ut,Te,v,E,ne,S,mt,le,ft,je,b,L,ht,ie,dt,Ee;return y=new _t({}),x=new _t({}),J=new Wt({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bertjapanese = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese")

## Input Japanese Text
line = "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002"

inputs = tokenizer(line, return_tensors="pt")

print(tokenizer.decode(inputs["input_ids"][0]))

outputs = bertjapanese(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bertjapanese = AutoModel.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">## Input Japanese Text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>]))
[CLS] \u543E\u8F29 \u306F \u732B \u3067 \u3042\u308B \u3002 [SEP]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),P=new Wt({props:{code:`bertjapanese = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese-char")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese-char")

## Input Japanese Text
line = "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002"

inputs = tokenizer(line, return_tensors="pt")

print(tokenizer.decode(inputs["input_ids"][0]))

outputs = bertjapanese(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>bertjapanese = AutoModel.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese-char&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese-char&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">## Input Japanese Text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>]))
[CLS] \u543E \u8F29 \u306F \u732B \u3067 \u3042 \u308B \u3002 [SEP]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),S=new _t({}),L=new Qt({props:{name:"class transformers.BertJapaneseTokenizer",anchor:"transformers.BertJapaneseTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"do_word_tokenize",val:" = True"},{name:"do_subword_tokenize",val:" = True"},{name:"word_tokenizer_type",val:" = 'basic'"},{name:"subword_tokenizer_type",val:" = 'wordpiece'"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"mecab_kwargs",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to a one-wordpiece-per-line vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertJapaneseTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lower case the input. Only has an effect when do_basic_tokenize=True.`,name:"do_lower_case"},{anchor:"transformers.BertJapaneseTokenizer.do_word_tokenize",description:`<strong>do_word_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do word tokenization.`,name:"do_word_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.do_subword_tokenize",description:`<strong>do_subword_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do subword tokenization.`,name:"do_subword_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.word_tokenizer_type",description:`<strong>word_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;basic&quot;</code>) &#x2014;
Type of word tokenizer.`,name:"word_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.subword_tokenizer_type",description:`<strong>subword_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wordpiece&quot;</code>) &#x2014;
Type of subword tokenizer.`,name:"subword_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.mecab_kwargs",description:`<strong>mecab_kwargs</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>MecabTokenizer</code> constructor.`,name:"mecab_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16864/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L72"}}),{c(){h=o("meta"),pe=u(),d=o("h1"),w=o("a"),Y=o("span"),F(y.$$.fragment),Me=u(),Z=o("span"),Ce=l("BertJapanese"),ce=u(),_=o("h2"),g=o("a"),ee=o("span"),F(x.$$.fragment),Se=u(),te=o("span"),Le=l("Overview"),ue=u(),R=o("p"),Re=l("The BERT models trained on Japanese text."),me=u(),I=o("p"),Ie=l("There are models with two different tokenization methods:"),fe=u(),z=o("ul"),k=o("li"),Ne=l("Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),q=o("a"),De=l("fugashi"),Oe=l(" which is a wrapper around "),A=o("a"),We=l("MeCab"),Ue=l("."),He=u(),ae=o("li"),Fe=l("Tokenize into characters."),he=u(),f=o("p"),Ke=l("To use "),oe=o("em"),Ve=l("MecabTokenizer"),Ge=l(", you should "),se=o("code"),Qe=l('pip install transformers["ja"]'),Xe=l(" (or "),re=o("code"),Ye=l('pip install -e .["ja"]'),Ze=l(` if you install
from source) to install dependencies.`),de=u(),T=o("p"),et=l("See "),B=o("a"),tt=l("details on cl-tohoku repository"),at=l("."),_e=u(),N=o("p"),ot=l("Example of using a model with MeCab and WordPiece tokenization:"),ke=u(),F(J.$$.fragment),ve=u(),D=o("p"),st=l("Example of using a model with Character tokenization:"),be=u(),F(P.$$.fragment),we=u(),O=o("p"),rt=l("Tips:"),ge=u(),W=o("ul"),M=o("li"),nt=l("This implementation is the same as BERT, except for tokenization method. Refer to the "),U=o("a"),lt=l("documentation of BERT"),it=l(" for more usage examples."),ze=u(),j=o("p"),pt=l("This model was contributed by "),C=o("a"),ct=l("cl-tohoku"),ut=l("."),Te=u(),v=o("h2"),E=o("a"),ne=o("span"),F(S.$$.fragment),mt=u(),le=o("span"),ft=l("BertJapaneseTokenizer"),je=u(),b=o("div"),F(L.$$.fragment),ht=u(),ie=o("p"),dt=l("Construct a BERT tokenizer for Japanese text, based on a MecabTokenizer."),this.h()},l(e){const r=Kt('[data-svelte="svelte-1phssyn"]',document.head);h=s(r,"META",{name:!0,content:!0}),r.forEach(t),pe=m(e),d=s(e,"H1",{class:!0});var $e=n(d);w=s($e,"A",{id:!0,class:!0,href:!0});var vt=n(w);Y=s(vt,"SPAN",{});var bt=n(Y);K(y.$$.fragment,bt),bt.forEach(t),vt.forEach(t),Me=m($e),Z=s($e,"SPAN",{});var wt=n(Z);Ce=i(wt,"BertJapanese"),wt.forEach(t),$e.forEach(t),ce=m(e),_=s(e,"H2",{class:!0});var ye=n(_);g=s(ye,"A",{id:!0,class:!0,href:!0});var gt=n(g);ee=s(gt,"SPAN",{});var zt=n(ee);K(x.$$.fragment,zt),zt.forEach(t),gt.forEach(t),Se=m(ye),te=s(ye,"SPAN",{});var Tt=n(te);Le=i(Tt,"Overview"),Tt.forEach(t),ye.forEach(t),ue=m(e),R=s(e,"P",{});var jt=n(R);Re=i(jt,"The BERT models trained on Japanese text."),jt.forEach(t),me=m(e),I=s(e,"P",{});var Et=n(I);Ie=i(Et,"There are models with two different tokenization methods:"),Et.forEach(t),fe=m(e),z=s(e,"UL",{});var xe=n(z);k=s(xe,"LI",{});var H=n(k);Ne=i(H,"Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),q=s(H,"A",{href:!0,rel:!0});var $t=n(q);De=i($t,"fugashi"),$t.forEach(t),Oe=i(H," which is a wrapper around "),A=s(H,"A",{href:!0,rel:!0});var yt=n(A);We=i(yt,"MeCab"),yt.forEach(t),Ue=i(H,"."),H.forEach(t),He=m(xe),ae=s(xe,"LI",{});var xt=n(ae);Fe=i(xt,"Tokenize into characters."),xt.forEach(t),xe.forEach(t),he=m(e),f=s(e,"P",{});var $=n(f);Ke=i($,"To use "),oe=s($,"EM",{});var qt=n(oe);Ve=i(qt,"MecabTokenizer"),qt.forEach(t),Ge=i($,", you should "),se=s($,"CODE",{});var At=n(se);Qe=i(At,'pip install transformers["ja"]'),At.forEach(t),Xe=i($," (or "),re=s($,"CODE",{});var Bt=n(re);Ye=i(Bt,'pip install -e .["ja"]'),Bt.forEach(t),Ze=i($,` if you install
from source) to install dependencies.`),$.forEach(t),de=m(e),T=s(e,"P",{});var qe=n(T);et=i(qe,"See "),B=s(qe,"A",{href:!0,rel:!0});var Jt=n(B);tt=i(Jt,"details on cl-tohoku repository"),Jt.forEach(t),at=i(qe,"."),qe.forEach(t),_e=m(e),N=s(e,"P",{});var Pt=n(N);ot=i(Pt,"Example of using a model with MeCab and WordPiece tokenization:"),Pt.forEach(t),ke=m(e),K(J.$$.fragment,e),ve=m(e),D=s(e,"P",{});var Mt=n(D);st=i(Mt,"Example of using a model with Character tokenization:"),Mt.forEach(t),be=m(e),K(P.$$.fragment,e),we=m(e),O=s(e,"P",{});var Ct=n(O);rt=i(Ct,"Tips:"),Ct.forEach(t),ge=m(e),W=s(e,"UL",{});var St=n(W);M=s(St,"LI",{});var Ae=n(M);nt=i(Ae,"This implementation is the same as BERT, except for tokenization method. Refer to the "),U=s(Ae,"A",{href:!0});var Lt=n(U);lt=i(Lt,"documentation of BERT"),Lt.forEach(t),it=i(Ae," for more usage examples."),Ae.forEach(t),St.forEach(t),ze=m(e),j=s(e,"P",{});var Be=n(j);pt=i(Be,"This model was contributed by "),C=s(Be,"A",{href:!0,rel:!0});var Rt=n(C);ct=i(Rt,"cl-tohoku"),Rt.forEach(t),ut=i(Be,"."),Be.forEach(t),Te=m(e),v=s(e,"H2",{class:!0});var Je=n(v);E=s(Je,"A",{id:!0,class:!0,href:!0});var It=n(E);ne=s(It,"SPAN",{});var Nt=n(ne);K(S.$$.fragment,Nt),Nt.forEach(t),It.forEach(t),mt=m(Je),le=s(Je,"SPAN",{});var Dt=n(le);ft=i(Dt,"BertJapaneseTokenizer"),Dt.forEach(t),Je.forEach(t),je=m(e),b=s(e,"DIV",{class:!0});var Pe=n(b);K(L.$$.fragment,Pe),ht=m(Pe),ie=s(Pe,"P",{});var Ot=n(ie);dt=i(Ot,"Construct a BERT tokenizer for Japanese text, based on a MecabTokenizer."),Ot.forEach(t),Pe.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Yt)),c(w,"id","bertjapanese"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bertjapanese"),c(d,"class","relative group"),c(g,"id","overview"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#overview"),c(_,"class","relative group"),c(q,"href","https://github.com/polm/fugashi"),c(q,"rel","nofollow"),c(A,"href","https://taku910.github.io/mecab/"),c(A,"rel","nofollow"),c(B,"href","https://github.com/cl-tohoku/bert-japanese"),c(B,"rel","nofollow"),c(U,"href","bert"),c(C,"href","https://huggingface.co/cl-tohoku"),c(C,"rel","nofollow"),c(E,"id","transformers.BertJapaneseTokenizer"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#transformers.BertJapaneseTokenizer"),c(v,"class","relative group"),c(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){a(document.head,h),p(e,pe,r),p(e,d,r),a(d,w),a(w,Y),V(y,Y,null),a(d,Me),a(d,Z),a(Z,Ce),p(e,ce,r),p(e,_,r),a(_,g),a(g,ee),V(x,ee,null),a(_,Se),a(_,te),a(te,Le),p(e,ue,r),p(e,R,r),a(R,Re),p(e,me,r),p(e,I,r),a(I,Ie),p(e,fe,r),p(e,z,r),a(z,k),a(k,Ne),a(k,q),a(q,De),a(k,Oe),a(k,A),a(A,We),a(k,Ue),a(z,He),a(z,ae),a(ae,Fe),p(e,he,r),p(e,f,r),a(f,Ke),a(f,oe),a(oe,Ve),a(f,Ge),a(f,se),a(se,Qe),a(f,Xe),a(f,re),a(re,Ye),a(f,Ze),p(e,de,r),p(e,T,r),a(T,et),a(T,B),a(B,tt),a(T,at),p(e,_e,r),p(e,N,r),a(N,ot),p(e,ke,r),V(J,e,r),p(e,ve,r),p(e,D,r),a(D,st),p(e,be,r),V(P,e,r),p(e,we,r),p(e,O,r),a(O,rt),p(e,ge,r),p(e,W,r),a(W,M),a(M,nt),a(M,U),a(U,lt),a(M,it),p(e,ze,r),p(e,j,r),a(j,pt),a(j,C),a(C,ct),a(j,ut),p(e,Te,r),p(e,v,r),a(v,E),a(E,ne),V(S,ne,null),a(v,mt),a(v,le),a(le,ft),p(e,je,r),p(e,b,r),V(L,b,null),a(b,ht),a(b,ie),a(ie,dt),Ee=!0},p:Vt,i(e){Ee||(G(y.$$.fragment,e),G(x.$$.fragment,e),G(J.$$.fragment,e),G(P.$$.fragment,e),G(S.$$.fragment,e),G(L.$$.fragment,e),Ee=!0)},o(e){Q(y.$$.fragment,e),Q(x.$$.fragment,e),Q(J.$$.fragment,e),Q(P.$$.fragment,e),Q(S.$$.fragment,e),Q(L.$$.fragment,e),Ee=!1},d(e){t(h),e&&t(pe),e&&t(d),X(y),e&&t(ce),e&&t(_),X(x),e&&t(ue),e&&t(R),e&&t(me),e&&t(I),e&&t(fe),e&&t(z),e&&t(he),e&&t(f),e&&t(de),e&&t(T),e&&t(_e),e&&t(N),e&&t(ke),X(J,e),e&&t(ve),e&&t(D),e&&t(be),X(P,e),e&&t(we),e&&t(O),e&&t(ge),e&&t(W),e&&t(ze),e&&t(j),e&&t(Te),e&&t(v),X(S),e&&t(je),e&&t(b),X(L)}}}const Yt={local:"bertjapanese",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertJapaneseTokenizer",title:"BertJapaneseTokenizer"}],title:"BertJapanese"};function Zt(kt){return Gt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Ut{constructor(h){super();Ht(this,h,Zt,Xt,Ft,{})}}export{sa as default,Yt as metadata};
