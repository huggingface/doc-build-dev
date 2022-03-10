import{S as Ht,i as Ut,s as Ft,e as o,k as u,w as K,t as l,M as Kt,c as s,d as t,m as f,a as n,x as V,h as i,b as c,F as a,g as p,y as G,L as Vt,q as Q,o as X,B as Y}from"../../chunks/vendor-4833417e.js";import{D as Gt}from"../../chunks/Docstring-4f315ed9.js";import{C as Wt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as kt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Qt(Me){let _,I,m,d,Z,y,Ce,ee,Se,ce,k,g,te,x,Le,ae,Ie,ue,N,Ne,fe,R,Re,me,z,v,De,q,Oe,We,A,He,Ue,Fe,oe,Ke,he,h,Ve,se,Ge,Qe,re,Xe,Ye,ne,Ze,et,de,T,tt,B,at,ot,_e,D,st,ke,J,ve,O,rt,be,P,we,W,nt,ge,H,M,lt,U,it,pt,ze,j,ct,C,ut,ft,Te,b,E,le,S,mt,ie,ht,je,w,L,dt,pe,_t,Ee;return y=new kt({}),x=new kt({}),J=new Wt({props:{code:`import torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),S=new kt({}),L=new Gt({props:{name:"class transformers.BertJapaneseTokenizer",anchor:"transformers.BertJapaneseTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"do_word_tokenize",val:" = True"},{name:"do_subword_tokenize",val:" = True"},{name:"word_tokenizer_type",val:" = 'basic'"},{name:"subword_tokenizer_type",val:" = 'wordpiece'"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"mecab_kwargs",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16047/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L72",parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to a one-wordpiece-per-line vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertJapaneseTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lower case the input. Only has an effect when do_basic_tokenize=True.`,name:"do_lower_case"},{anchor:"transformers.BertJapaneseTokenizer.do_word_tokenize",description:`<strong>do_word_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do word tokenization.`,name:"do_word_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.do_subword_tokenize",description:`<strong>do_subword_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do subword tokenization.`,name:"do_subword_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.word_tokenizer_type",description:`<strong>word_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;basic&quot;</code>) &#x2014;
Type of word tokenizer.`,name:"word_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.subword_tokenizer_type",description:`<strong>subword_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wordpiece&quot;</code>) &#x2014;
Type of subword tokenizer.`,name:"subword_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.mecab_kwargs",description:`<strong>mecab_kwargs</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>MecabTokenizer</code> constructor.`,name:"mecab_kwargs"}]}}),{c(){_=o("meta"),I=u(),m=o("h1"),d=o("a"),Z=o("span"),K(y.$$.fragment),Ce=u(),ee=o("span"),Se=l("BertJapanese"),ce=u(),k=o("h2"),g=o("a"),te=o("span"),K(x.$$.fragment),Le=u(),ae=o("span"),Ie=l("Overview"),ue=u(),N=o("p"),Ne=l("The BERT models trained on Japanese text."),fe=u(),R=o("p"),Re=l("There are models with two different tokenization methods:"),me=u(),z=o("ul"),v=o("li"),De=l("Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),q=o("a"),Oe=l("fugashi"),We=l(" which is a wrapper around "),A=o("a"),He=l("MeCab"),Ue=l("."),Fe=u(),oe=o("li"),Ke=l("Tokenize into characters."),he=u(),h=o("p"),Ve=l("To use "),se=o("em"),Ge=l("MecabTokenizer"),Qe=l(", you should "),re=o("code"),Xe=l('pip install transformers["ja"]'),Ye=l(" (or "),ne=o("code"),Ze=l('pip install -e .["ja"]'),et=l(` if you install
from source) to install dependencies.`),de=u(),T=o("p"),tt=l("See "),B=o("a"),at=l("details on cl-tohoku repository"),ot=l("."),_e=u(),D=o("p"),st=l("Example of using a model with MeCab and WordPiece tokenization:"),ke=u(),K(J.$$.fragment),ve=u(),O=o("p"),rt=l("Example of using a model with Character tokenization:"),be=u(),K(P.$$.fragment),we=u(),W=o("p"),nt=l("Tips:"),ge=u(),H=o("ul"),M=o("li"),lt=l("This implementation is the same as BERT, except for tokenization method. Refer to the "),U=o("a"),it=l("documentation of BERT"),pt=l(" for more usage examples."),ze=u(),j=o("p"),ct=l("This model was contributed by "),C=o("a"),ut=l("cl-tohoku"),ft=l("."),Te=u(),b=o("h2"),E=o("a"),le=o("span"),K(S.$$.fragment),mt=u(),ie=o("span"),ht=l("BertJapaneseTokenizer"),je=u(),w=o("div"),K(L.$$.fragment),dt=u(),pe=o("p"),_t=l("Construct a BERT tokenizer for Japanese text, based on a MecabTokenizer."),this.h()},l(e){const r=Kt('[data-svelte="svelte-1phssyn"]',document.head);_=s(r,"META",{name:!0,content:!0}),r.forEach(t),I=f(e),m=s(e,"H1",{class:!0});var $e=n(m);d=s($e,"A",{id:!0,class:!0,href:!0});var vt=n(d);Z=s(vt,"SPAN",{});var bt=n(Z);V(y.$$.fragment,bt),bt.forEach(t),vt.forEach(t),Ce=f($e),ee=s($e,"SPAN",{});var wt=n(ee);Se=i(wt,"BertJapanese"),wt.forEach(t),$e.forEach(t),ce=f(e),k=s(e,"H2",{class:!0});var ye=n(k);g=s(ye,"A",{id:!0,class:!0,href:!0});var gt=n(g);te=s(gt,"SPAN",{});var zt=n(te);V(x.$$.fragment,zt),zt.forEach(t),gt.forEach(t),Le=f(ye),ae=s(ye,"SPAN",{});var Tt=n(ae);Ie=i(Tt,"Overview"),Tt.forEach(t),ye.forEach(t),ue=f(e),N=s(e,"P",{});var jt=n(N);Ne=i(jt,"The BERT models trained on Japanese text."),jt.forEach(t),fe=f(e),R=s(e,"P",{});var Et=n(R);Re=i(Et,"There are models with two different tokenization methods:"),Et.forEach(t),me=f(e),z=s(e,"UL",{});var xe=n(z);v=s(xe,"LI",{});var F=n(v);De=i(F,"Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),q=s(F,"A",{href:!0,rel:!0});var $t=n(q);Oe=i($t,"fugashi"),$t.forEach(t),We=i(F," which is a wrapper around "),A=s(F,"A",{href:!0,rel:!0});var yt=n(A);He=i(yt,"MeCab"),yt.forEach(t),Ue=i(F,"."),F.forEach(t),Fe=f(xe),oe=s(xe,"LI",{});var xt=n(oe);Ke=i(xt,"Tokenize into characters."),xt.forEach(t),xe.forEach(t),he=f(e),h=s(e,"P",{});var $=n(h);Ve=i($,"To use "),se=s($,"EM",{});var qt=n(se);Ge=i(qt,"MecabTokenizer"),qt.forEach(t),Qe=i($,", you should "),re=s($,"CODE",{});var At=n(re);Xe=i(At,'pip install transformers["ja"]'),At.forEach(t),Ye=i($," (or "),ne=s($,"CODE",{});var Bt=n(ne);Ze=i(Bt,'pip install -e .["ja"]'),Bt.forEach(t),et=i($,` if you install
from source) to install dependencies.`),$.forEach(t),de=f(e),T=s(e,"P",{});var qe=n(T);tt=i(qe,"See "),B=s(qe,"A",{href:!0,rel:!0});var Jt=n(B);at=i(Jt,"details on cl-tohoku repository"),Jt.forEach(t),ot=i(qe,"."),qe.forEach(t),_e=f(e),D=s(e,"P",{});var Pt=n(D);st=i(Pt,"Example of using a model with MeCab and WordPiece tokenization:"),Pt.forEach(t),ke=f(e),V(J.$$.fragment,e),ve=f(e),O=s(e,"P",{});var Mt=n(O);rt=i(Mt,"Example of using a model with Character tokenization:"),Mt.forEach(t),be=f(e),V(P.$$.fragment,e),we=f(e),W=s(e,"P",{});var Ct=n(W);nt=i(Ct,"Tips:"),Ct.forEach(t),ge=f(e),H=s(e,"UL",{});var St=n(H);M=s(St,"LI",{});var Ae=n(M);lt=i(Ae,"This implementation is the same as BERT, except for tokenization method. Refer to the "),U=s(Ae,"A",{href:!0});var Lt=n(U);it=i(Lt,"documentation of BERT"),Lt.forEach(t),pt=i(Ae," for more usage examples."),Ae.forEach(t),St.forEach(t),ze=f(e),j=s(e,"P",{});var Be=n(j);ct=i(Be,"This model was contributed by "),C=s(Be,"A",{href:!0,rel:!0});var It=n(C);ut=i(It,"cl-tohoku"),It.forEach(t),ft=i(Be,"."),Be.forEach(t),Te=f(e),b=s(e,"H2",{class:!0});var Je=n(b);E=s(Je,"A",{id:!0,class:!0,href:!0});var Nt=n(E);le=s(Nt,"SPAN",{});var Rt=n(le);V(S.$$.fragment,Rt),Rt.forEach(t),Nt.forEach(t),mt=f(Je),ie=s(Je,"SPAN",{});var Dt=n(ie);ht=i(Dt,"BertJapaneseTokenizer"),Dt.forEach(t),Je.forEach(t),je=f(e),w=s(e,"DIV",{class:!0});var Pe=n(w);V(L.$$.fragment,Pe),dt=f(Pe),pe=s(Pe,"P",{});var Ot=n(pe);_t=i(Ot,"Construct a BERT tokenizer for Japanese text, based on a MecabTokenizer."),Ot.forEach(t),Pe.forEach(t),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(Xt)),c(d,"id","bertjapanese"),c(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(d,"href","#bertjapanese"),c(m,"class","relative group"),c(g,"id","overview"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#overview"),c(k,"class","relative group"),c(q,"href","https://github.com/polm/fugashi"),c(q,"rel","nofollow"),c(A,"href","https://taku910.github.io/mecab/"),c(A,"rel","nofollow"),c(B,"href","https://github.com/cl-tohoku/bert-japanese"),c(B,"rel","nofollow"),c(U,"href","bert"),c(C,"href","https://huggingface.co/cl-tohoku"),c(C,"rel","nofollow"),c(E,"id","transformers.BertJapaneseTokenizer"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#transformers.BertJapaneseTokenizer"),c(b,"class","relative group"),c(w,"class","docstring")},m(e,r){a(document.head,_),p(e,I,r),p(e,m,r),a(m,d),a(d,Z),G(y,Z,null),a(m,Ce),a(m,ee),a(ee,Se),p(e,ce,r),p(e,k,r),a(k,g),a(g,te),G(x,te,null),a(k,Le),a(k,ae),a(ae,Ie),p(e,ue,r),p(e,N,r),a(N,Ne),p(e,fe,r),p(e,R,r),a(R,Re),p(e,me,r),p(e,z,r),a(z,v),a(v,De),a(v,q),a(q,Oe),a(v,We),a(v,A),a(A,He),a(v,Ue),a(z,Fe),a(z,oe),a(oe,Ke),p(e,he,r),p(e,h,r),a(h,Ve),a(h,se),a(se,Ge),a(h,Qe),a(h,re),a(re,Xe),a(h,Ye),a(h,ne),a(ne,Ze),a(h,et),p(e,de,r),p(e,T,r),a(T,tt),a(T,B),a(B,at),a(T,ot),p(e,_e,r),p(e,D,r),a(D,st),p(e,ke,r),G(J,e,r),p(e,ve,r),p(e,O,r),a(O,rt),p(e,be,r),G(P,e,r),p(e,we,r),p(e,W,r),a(W,nt),p(e,ge,r),p(e,H,r),a(H,M),a(M,lt),a(M,U),a(U,it),a(M,pt),p(e,ze,r),p(e,j,r),a(j,ct),a(j,C),a(C,ut),a(j,ft),p(e,Te,r),p(e,b,r),a(b,E),a(E,le),G(S,le,null),a(b,mt),a(b,ie),a(ie,ht),p(e,je,r),p(e,w,r),G(L,w,null),a(w,dt),a(w,pe),a(pe,_t),Ee=!0},p:Vt,i(e){Ee||(Q(y.$$.fragment,e),Q(x.$$.fragment,e),Q(J.$$.fragment,e),Q(P.$$.fragment,e),Q(S.$$.fragment,e),Q(L.$$.fragment,e),Ee=!0)},o(e){X(y.$$.fragment,e),X(x.$$.fragment,e),X(J.$$.fragment,e),X(P.$$.fragment,e),X(S.$$.fragment,e),X(L.$$.fragment,e),Ee=!1},d(e){t(_),e&&t(I),e&&t(m),Y(y),e&&t(ce),e&&t(k),Y(x),e&&t(ue),e&&t(N),e&&t(fe),e&&t(R),e&&t(me),e&&t(z),e&&t(he),e&&t(h),e&&t(de),e&&t(T),e&&t(_e),e&&t(D),e&&t(ke),Y(J,e),e&&t(ve),e&&t(O),e&&t(be),Y(P,e),e&&t(we),e&&t(W),e&&t(ge),e&&t(H),e&&t(ze),e&&t(j),e&&t(Te),e&&t(b),Y(S),e&&t(je),e&&t(w),Y(L)}}}const Xt={local:"bertjapanese",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertJapaneseTokenizer",title:"BertJapaneseTokenizer"}],title:"BertJapanese"};function Yt(Me,_,I){let{fw:m}=_;return Me.$$set=d=>{"fw"in d&&I(0,m=d.fw)},[m]}class sa extends Ht{constructor(_){super();Ut(this,_,Yt,Qt,Ft,{fw:0})}}export{sa as default,Xt as metadata};
