import{S as ss,i as as,s as ns,e as s,k as l,w as b,t as o,M as os,c as a,d as r,m as c,a as n,x as w,h as i,b as p,F as e,g as m,y as T,q as z,o as E,B as $,v as is,L as ls}from"../../chunks/vendor-6b77c823.js";import{D as Ne}from"../../chunks/Docstring-1088f2fb.js";import{C as rs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as cs}from"../../chunks/ExampleCodeBlock-5212b321.js";function ps(Ce){let u,x,v,k,y;return k=new rs({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){u=s("p"),x=o("BERT sequence pair mask has the following format:"),v=l(),b(k.$$.fragment)},l(f){u=a(f,"P",{});var H=n(u);x=i(H,"BERT sequence pair mask has the following format:"),H.forEach(r),v=c(f),w(k.$$.fragment,f)},m(f,H){m(f,u,H),e(u,x),m(f,v,H),T(k,f,H),y=!0},p:ls,i(f){y||(z(k.$$.fragment,f),y=!0)},o(f){E(k.$$.fragment,f),y=!1},d(f){f&&r(u),f&&r(v),$(k,f)}}}function ds(Ce){let u,x,v,k,y,f,H,_e,mt,Se,j,F,ge,S,ft,ve,ht,Ue,I,ut,U,kt,_t,Oe,ie,gt,Je,le,be,vt,Ve,ce,bt,Xe,O,Ke,P,wt,J,Tt,zt,V,Et,$t,We,R,M,we,X,yt,Te,Ht,Ge,g,K,Pt,ze,Lt,qt,Ee,Bt,jt,W,$e,ye,Rt,At,He,Pe,xt,Ft,G,It,pe,Mt,Dt,Qe,A,D,Le,Q,Nt,qe,Ct,Ye,h,Y,St,Z,Ut,Be,Ot,Jt,Vt,je,Xt,Kt,Re,Ae,Wt,Gt,ee,Qt,de,Yt,Zt,er,L,te,tr,xe,rr,sr,re,me,ar,Fe,nr,or,fe,ir,Ie,lr,cr,q,se,pr,Me,dr,mr,N,fr,C,ae,hr,ne,ur,De,kr,_r,Ze;return f=new dt({}),S=new dt({}),O=new rs({props:{code:`from transformers import HerbertTokenizer, RobertaModel

tokenizer = HerbertTokenizer.from_pretrained("allegro/herbert-klej-cased-tokenizer-v1")
model = RobertaModel.from_pretrained("allegro/herbert-klej-cased-v1")

encoded_input = tokenizer.encode("Kto ma lepsz\u0105 sztuk\u0119, ma lepszy rz\u0105d \u2013 to jasne.", return_tensors="pt")
outputs = model(encoded_input)

# HerBERT can also be loaded using AutoTokenizer and AutoModel:
import torch
from transformers import AutoModel, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("allegro/herbert-klej-cased-tokenizer-v1")
model = AutoModel.from_pretrained("allegro/herbert-klej-cased-v1")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HerbertTokenizer, RobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = HerbertTokenizer.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-tokenizer-v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_input = tokenizer.encode(<span class="hljs-string">&quot;Kto ma lepsz\u0105 sztuk\u0119, ma lepszy rz\u0105d \u2013 to jasne.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(encoded_input)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># HerBERT can also be loaded using AutoTokenizer and AutoModel:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-tokenizer-v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)`}}),X=new dt({}),K=new Ne({props:{name:"class transformers.HerbertTokenizer",anchor:"transformers.HerbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"do_lowercase_and_remove_accent",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/models/herbert/tokenization_herbert.py#L41"}}),Q=new dt({}),Y=new Ne({props:{name:"class transformers.HerbertTokenizerFast",anchor:"transformers.HerbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.HerbertTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/models/herbert/tokenization_herbert_fast.py#L40"}}),te=new Ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/models/herbert/tokenization_herbert_fast.py#L90",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),se=new Ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/models/herbert/tokenization_herbert_fast.py#L144",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),N=new cs({props:{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[ps]},$$scope:{ctx:Ce}}}),ae=new Ne({props:{name:"get_special_tokens_mask",anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/models/herbert/tokenization_herbert_fast.py#L117",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){u=s("meta"),x=l(),v=s("h1"),k=s("a"),y=s("span"),b(f.$$.fragment),H=l(),_e=s("span"),mt=o("HerBERT"),Se=l(),j=s("h2"),F=s("a"),ge=s("span"),b(S.$$.fragment),ft=l(),ve=s("span"),ht=o("Overview"),Ue=l(),I=s("p"),ut=o("The HerBERT model was proposed in "),U=s("a"),kt=o("KLEJ: Comprehensive Benchmark for Polish Language Understanding"),_t=o(` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Oe=l(),ie=s("p"),gt=o("The abstract from the paper is the following:"),Je=l(),le=s("p"),be=s("em"),vt=o(`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
understanding (NLU) tasks. Such a fast pace of research would not be possible without general NLU benchmarks, which
allow for a fair comparison of the proposed methods. However, such benchmarks are available only for a handful of
languages. To alleviate this issue, we introduce a comprehensive multi-task benchmark for the Polish language
understanding, accompanied by an online leaderboard. It consists of a diverse set of tasks, adopted from existing
datasets for named entity recognition, question-answering, textual entailment, and others. We also introduce a new
sentiment analysis task for the e-commerce domain, named Allegro Reviews (AR). To ensure a common evaluation scheme and
promote models that generalize to different NLU tasks, the benchmark includes datasets from varying domains and
applications. Additionally, we release HerBERT, a Transformer-based model trained specifically for the Polish language,
which has the best average performance and obtains the best results for three out of nine tasks. Finally, we provide an
extensive evaluation, including several standard baselines and recently proposed, multilingual Transformer-based
models.`),Ve=l(),ce=s("p"),bt=o("Examples of use:"),Xe=l(),b(O.$$.fragment),Ke=l(),P=s("p"),wt=o("This model was contributed by "),J=s("a"),Tt=o("rmroczkowski"),zt=o(`. The original code can be found
`),V=s("a"),Et=o("here"),$t=o("."),We=l(),R=s("h2"),M=s("a"),we=s("span"),b(X.$$.fragment),yt=l(),Te=s("span"),Ht=o("HerbertTokenizer"),Ge=l(),g=s("div"),b(K.$$.fragment),Pt=l(),ze=s("p"),Lt=o("Construct a BPE tokenizer for HerBERT."),qt=l(),Ee=s("p"),Bt=o("Peculiarities:"),jt=l(),W=s("ul"),$e=s("li"),ye=s("p"),Rt=o(`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),At=l(),He=s("li"),Pe=s("p"),xt=o("Such pretokenized input is BPE subtokenized"),Ft=l(),G=s("p"),It=o("This tokenizer inherits from "),pe=s("a"),Mt=o("XLMTokenizer"),Dt=o(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),Qe=l(),A=s("h2"),D=s("a"),Le=s("span"),b(Q.$$.fragment),Nt=l(),qe=s("span"),Ct=o("HerbertTokenizerFast"),Ye=l(),h=s("div"),b(Y.$$.fragment),St=l(),Z=s("p"),Ut=o("Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Be=s("em"),Ot=o("tokenizers"),Jt=o(" library)."),Vt=l(),je=s("p"),Xt=o("Peculiarities:"),Kt=l(),Re=s("ul"),Ae=s("li"),Wt=o(`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Gt=l(),ee=s("p"),Qt=o("This tokenizer inherits from "),de=s("a"),Yt=o("PreTrainedTokenizer"),Zt=o(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),er=l(),L=s("div"),b(te.$$.fragment),tr=l(),xe=s("p"),rr=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),sr=l(),re=s("ul"),me=s("li"),ar=o("single sequence: "),Fe=s("code"),nr=o("<s> X </s>"),or=l(),fe=s("li"),ir=o("pair of sequences: "),Ie=s("code"),lr=o("<s> A </s> B </s>"),cr=l(),q=s("div"),b(se.$$.fragment),pr=l(),Me=s("p"),dr=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like"),mr=l(),b(N.$$.fragment),fr=l(),C=s("div"),b(ae.$$.fragment),hr=l(),ne=s("p"),ur=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),De=s("code"),kr=o("prepare_for_model"),_r=o(" method."),this.h()},l(t){const d=os('[data-svelte="svelte-1phssyn"]',document.head);u=a(d,"META",{name:!0,content:!0}),d.forEach(r),x=c(t),v=a(t,"H1",{class:!0});var oe=n(v);k=a(oe,"A",{id:!0,class:!0,href:!0});var br=n(k);y=a(br,"SPAN",{});var wr=n(y);w(f.$$.fragment,wr),wr.forEach(r),br.forEach(r),H=c(oe),_e=a(oe,"SPAN",{});var Tr=n(_e);mt=i(Tr,"HerBERT"),Tr.forEach(r),oe.forEach(r),Se=c(t),j=a(t,"H2",{class:!0});var et=n(j);F=a(et,"A",{id:!0,class:!0,href:!0});var zr=n(F);ge=a(zr,"SPAN",{});var Er=n(ge);w(S.$$.fragment,Er),Er.forEach(r),zr.forEach(r),ft=c(et),ve=a(et,"SPAN",{});var $r=n(ve);ht=i($r,"Overview"),$r.forEach(r),et.forEach(r),Ue=c(t),I=a(t,"P",{});var tt=n(I);ut=i(tt,"The HerBERT model was proposed in "),U=a(tt,"A",{href:!0,rel:!0});var yr=n(U);kt=i(yr,"KLEJ: Comprehensive Benchmark for Polish Language Understanding"),yr.forEach(r),_t=i(tt,` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),tt.forEach(r),Oe=c(t),ie=a(t,"P",{});var Hr=n(ie);gt=i(Hr,"The abstract from the paper is the following:"),Hr.forEach(r),Je=c(t),le=a(t,"P",{});var Pr=n(le);be=a(Pr,"EM",{});var Lr=n(be);vt=i(Lr,`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
understanding (NLU) tasks. Such a fast pace of research would not be possible without general NLU benchmarks, which
allow for a fair comparison of the proposed methods. However, such benchmarks are available only for a handful of
languages. To alleviate this issue, we introduce a comprehensive multi-task benchmark for the Polish language
understanding, accompanied by an online leaderboard. It consists of a diverse set of tasks, adopted from existing
datasets for named entity recognition, question-answering, textual entailment, and others. We also introduce a new
sentiment analysis task for the e-commerce domain, named Allegro Reviews (AR). To ensure a common evaluation scheme and
promote models that generalize to different NLU tasks, the benchmark includes datasets from varying domains and
applications. Additionally, we release HerBERT, a Transformer-based model trained specifically for the Polish language,
which has the best average performance and obtains the best results for three out of nine tasks. Finally, we provide an
extensive evaluation, including several standard baselines and recently proposed, multilingual Transformer-based
models.`),Lr.forEach(r),Pr.forEach(r),Ve=c(t),ce=a(t,"P",{});var qr=n(ce);bt=i(qr,"Examples of use:"),qr.forEach(r),Xe=c(t),w(O.$$.fragment,t),Ke=c(t),P=a(t,"P",{});var he=n(P);wt=i(he,"This model was contributed by "),J=a(he,"A",{href:!0,rel:!0});var Br=n(J);Tt=i(Br,"rmroczkowski"),Br.forEach(r),zt=i(he,`. The original code can be found
`),V=a(he,"A",{href:!0,rel:!0});var jr=n(V);Et=i(jr,"here"),jr.forEach(r),$t=i(he,"."),he.forEach(r),We=c(t),R=a(t,"H2",{class:!0});var rt=n(R);M=a(rt,"A",{id:!0,class:!0,href:!0});var Rr=n(M);we=a(Rr,"SPAN",{});var Ar=n(we);w(X.$$.fragment,Ar),Ar.forEach(r),Rr.forEach(r),yt=c(rt),Te=a(rt,"SPAN",{});var xr=n(Te);Ht=i(xr,"HerbertTokenizer"),xr.forEach(r),rt.forEach(r),Ge=c(t),g=a(t,"DIV",{class:!0});var B=n(g);w(K.$$.fragment,B),Pt=c(B),ze=a(B,"P",{});var Fr=n(ze);Lt=i(Fr,"Construct a BPE tokenizer for HerBERT."),Fr.forEach(r),qt=c(B),Ee=a(B,"P",{});var Ir=n(Ee);Bt=i(Ir,"Peculiarities:"),Ir.forEach(r),jt=c(B),W=a(B,"UL",{});var st=n(W);$e=a(st,"LI",{});var Mr=n($e);ye=a(Mr,"P",{});var Dr=n(ye);Rt=i(Dr,`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),Dr.forEach(r),Mr.forEach(r),At=c(st),He=a(st,"LI",{});var Nr=n(He);Pe=a(Nr,"P",{});var Cr=n(Pe);xt=i(Cr,"Such pretokenized input is BPE subtokenized"),Cr.forEach(r),Nr.forEach(r),st.forEach(r),Ft=c(B),G=a(B,"P",{});var at=n(G);It=i(at,"This tokenizer inherits from "),pe=a(at,"A",{href:!0});var Sr=n(pe);Mt=i(Sr,"XLMTokenizer"),Sr.forEach(r),Dt=i(at,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),at.forEach(r),B.forEach(r),Qe=c(t),A=a(t,"H2",{class:!0});var nt=n(A);D=a(nt,"A",{id:!0,class:!0,href:!0});var Ur=n(D);Le=a(Ur,"SPAN",{});var Or=n(Le);w(Q.$$.fragment,Or),Or.forEach(r),Ur.forEach(r),Nt=c(nt),qe=a(nt,"SPAN",{});var Jr=n(qe);Ct=i(Jr,"HerbertTokenizerFast"),Jr.forEach(r),nt.forEach(r),Ye=c(t),h=a(t,"DIV",{class:!0});var _=n(h);w(Y.$$.fragment,_),St=c(_),Z=a(_,"P",{});var ot=n(Z);Ut=i(ot,"Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Be=a(ot,"EM",{});var Vr=n(Be);Ot=i(Vr,"tokenizers"),Vr.forEach(r),Jt=i(ot," library)."),ot.forEach(r),Vt=c(_),je=a(_,"P",{});var Xr=n(je);Xt=i(Xr,"Peculiarities:"),Xr.forEach(r),Kt=c(_),Re=a(_,"UL",{});var Kr=n(Re);Ae=a(Kr,"LI",{});var Wr=n(Ae);Wt=i(Wr,`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Wr.forEach(r),Kr.forEach(r),Gt=c(_),ee=a(_,"P",{});var it=n(ee);Qt=i(it,"This tokenizer inherits from "),de=a(it,"A",{href:!0});var Gr=n(de);Yt=i(Gr,"PreTrainedTokenizer"),Gr.forEach(r),Zt=i(it,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),it.forEach(r),er=c(_),L=a(_,"DIV",{class:!0});var ue=n(L);w(te.$$.fragment,ue),tr=c(ue),xe=a(ue,"P",{});var Qr=n(xe);rr=i(Qr,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),Qr.forEach(r),sr=c(ue),re=a(ue,"UL",{});var lt=n(re);me=a(lt,"LI",{});var gr=n(me);ar=i(gr,"single sequence: "),Fe=a(gr,"CODE",{});var Yr=n(Fe);nr=i(Yr,"<s> X </s>"),Yr.forEach(r),gr.forEach(r),or=c(lt),fe=a(lt,"LI",{});var vr=n(fe);ir=i(vr,"pair of sequences: "),Ie=a(vr,"CODE",{});var Zr=n(Ie);lr=i(Zr,"<s> A </s> B </s>"),Zr.forEach(r),vr.forEach(r),lt.forEach(r),ue.forEach(r),cr=c(_),q=a(_,"DIV",{class:!0});var ke=n(q);w(se.$$.fragment,ke),pr=c(ke),Me=a(ke,"P",{});var es=n(Me);dr=i(es,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like"),es.forEach(r),mr=c(ke),w(N.$$.fragment,ke),ke.forEach(r),fr=c(_),C=a(_,"DIV",{class:!0});var ct=n(C);w(ae.$$.fragment,ct),hr=c(ct),ne=a(ct,"P",{});var pt=n(ne);ur=i(pt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),De=a(pt,"CODE",{});var ts=n(De);kr=i(ts,"prepare_for_model"),ts.forEach(r),_r=i(pt," method."),pt.forEach(r),ct.forEach(r),_.forEach(r),this.h()},h(){p(u,"name","hf:doc:metadata"),p(u,"content",JSON.stringify(ms)),p(k,"id","herbert"),p(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(k,"href","#herbert"),p(v,"class","relative group"),p(F,"id","overview"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#overview"),p(j,"class","relative group"),p(U,"href","https://www.aclweb.org/anthology/2020.acl-main.111.pdf"),p(U,"rel","nofollow"),p(J,"href","https://huggingface.co/rmroczkowski"),p(J,"rel","nofollow"),p(V,"href","https://github.com/allegro/HerBERT"),p(V,"rel","nofollow"),p(M,"id","transformers.HerbertTokenizer"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#transformers.HerbertTokenizer"),p(R,"class","relative group"),p(pe,"href","/docs/transformers/pr_17063/en/model_doc/xlm#transformers.XLMTokenizer"),p(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(D,"id","transformers.HerbertTokenizerFast"),p(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(D,"href","#transformers.HerbertTokenizerFast"),p(A,"class","relative group"),p(de,"href","/docs/transformers/pr_17063/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,u),m(t,x,d),m(t,v,d),e(v,k),e(k,y),T(f,y,null),e(v,H),e(v,_e),e(_e,mt),m(t,Se,d),m(t,j,d),e(j,F),e(F,ge),T(S,ge,null),e(j,ft),e(j,ve),e(ve,ht),m(t,Ue,d),m(t,I,d),e(I,ut),e(I,U),e(U,kt),e(I,_t),m(t,Oe,d),m(t,ie,d),e(ie,gt),m(t,Je,d),m(t,le,d),e(le,be),e(be,vt),m(t,Ve,d),m(t,ce,d),e(ce,bt),m(t,Xe,d),T(O,t,d),m(t,Ke,d),m(t,P,d),e(P,wt),e(P,J),e(J,Tt),e(P,zt),e(P,V),e(V,Et),e(P,$t),m(t,We,d),m(t,R,d),e(R,M),e(M,we),T(X,we,null),e(R,yt),e(R,Te),e(Te,Ht),m(t,Ge,d),m(t,g,d),T(K,g,null),e(g,Pt),e(g,ze),e(ze,Lt),e(g,qt),e(g,Ee),e(Ee,Bt),e(g,jt),e(g,W),e(W,$e),e($e,ye),e(ye,Rt),e(W,At),e(W,He),e(He,Pe),e(Pe,xt),e(g,Ft),e(g,G),e(G,It),e(G,pe),e(pe,Mt),e(G,Dt),m(t,Qe,d),m(t,A,d),e(A,D),e(D,Le),T(Q,Le,null),e(A,Nt),e(A,qe),e(qe,Ct),m(t,Ye,d),m(t,h,d),T(Y,h,null),e(h,St),e(h,Z),e(Z,Ut),e(Z,Be),e(Be,Ot),e(Z,Jt),e(h,Vt),e(h,je),e(je,Xt),e(h,Kt),e(h,Re),e(Re,Ae),e(Ae,Wt),e(h,Gt),e(h,ee),e(ee,Qt),e(ee,de),e(de,Yt),e(ee,Zt),e(h,er),e(h,L),T(te,L,null),e(L,tr),e(L,xe),e(xe,rr),e(L,sr),e(L,re),e(re,me),e(me,ar),e(me,Fe),e(Fe,nr),e(re,or),e(re,fe),e(fe,ir),e(fe,Ie),e(Ie,lr),e(h,cr),e(h,q),T(se,q,null),e(q,pr),e(q,Me),e(Me,dr),e(q,mr),T(N,q,null),e(h,fr),e(h,C),T(ae,C,null),e(C,hr),e(C,ne),e(ne,ur),e(ne,De),e(De,kr),e(ne,_r),Ze=!0},p(t,[d]){const oe={};d&2&&(oe.$$scope={dirty:d,ctx:t}),N.$set(oe)},i(t){Ze||(z(f.$$.fragment,t),z(S.$$.fragment,t),z(O.$$.fragment,t),z(X.$$.fragment,t),z(K.$$.fragment,t),z(Q.$$.fragment,t),z(Y.$$.fragment,t),z(te.$$.fragment,t),z(se.$$.fragment,t),z(N.$$.fragment,t),z(ae.$$.fragment,t),Ze=!0)},o(t){E(f.$$.fragment,t),E(S.$$.fragment,t),E(O.$$.fragment,t),E(X.$$.fragment,t),E(K.$$.fragment,t),E(Q.$$.fragment,t),E(Y.$$.fragment,t),E(te.$$.fragment,t),E(se.$$.fragment,t),E(N.$$.fragment,t),E(ae.$$.fragment,t),Ze=!1},d(t){r(u),t&&r(x),t&&r(v),$(f),t&&r(Se),t&&r(j),$(S),t&&r(Ue),t&&r(I),t&&r(Oe),t&&r(ie),t&&r(Je),t&&r(le),t&&r(Ve),t&&r(ce),t&&r(Xe),$(O,t),t&&r(Ke),t&&r(P),t&&r(We),t&&r(R),$(X),t&&r(Ge),t&&r(g),$(K),t&&r(Qe),t&&r(A),$(Q),t&&r(Ye),t&&r(h),$(Y),$(te),$(se),$(N),$(ae)}}}const ms={local:"herbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HerbertTokenizer",title:"HerbertTokenizer"},{local:"transformers.HerbertTokenizerFast",title:"HerbertTokenizerFast"}],title:"HerBERT"};function fs(Ce){return is(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vs extends ss{constructor(u){super();as(this,u,fs,ds,ns,{})}}export{vs as default,ms as metadata};
