import{S as Mo,i as Go,s as Uo,e as s,k as d,w as u,t as a,M as Wo,c as n,d as o,m as c,a as r,x as _,h as i,b as p,F as t,g as f,y as k,L as Vo,q as g,o as y,B as b,v as Ho}from"../../chunks/vendor-6b77c823.js";import{D as Be}from"../../chunks/Docstring-abef54e3.js";import{C as Ro}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as at}from"../../chunks/IconCopyLink-7a11ce68.js";function Xo(lo){let T,Le,$,E,me,F,it,he,lt,Ae,q,B,ue,N,dt,_e,ct,Pe,L,pt,O,ft,mt,je,te,ht,De,oe,ke,ut,Ce,v,_t,R,kt,gt,M,yt,bt,Ie,A,vt,se,wt,Tt,Se,ne,$t,Fe,x,P,ge,G,qt,ye,xt,Ne,re,zt,Oe,U,Re,ae,Et,Me,W,Ge,z,j,be,V,Bt,ve,Lt,Ue,m,H,At,we,Pt,jt,X,Dt,ie,Ct,It,St,w,K,Ft,Te,Nt,Ot,J,le,Rt,$e,Mt,Gt,de,Ut,qe,Wt,Vt,D,Q,Ht,xe,Xt,Kt,C,Y,Jt,ze,Qt,Yt,I,Z,Zt,ee,eo,Ee,to,oo,We,S,so,ce,no,ro,Ve;return F=new at({}),N=new at({}),G=new at({}),U=new Ro({props:{code:`from transformers import T5ForConditionalGeneration
import torch

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")

input_ids = torch.tensor([list("Life is like a box of chocolates.".encode("utf-8"))]) + 3  # add 3 for special tokens
labels = (
    torch.tensor([list("La vie est comme une bo\xEEte de chocolat.".encode("utf-8"))]) + 3
)  # add 3 for special tokens

loss = model(input_ids, labels=labels).loss  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration
<span class="hljs-keyword">import</span> torch

model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

input_ids = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + <span class="hljs-number">3</span>  <span class="hljs-comment"># add 3 for special tokens</span>
labels = (
    torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + <span class="hljs-number">3</span>
)  <span class="hljs-comment"># add 3 for special tokens</span>

loss = model(input_ids, labels=labels).loss  <span class="hljs-comment"># forward pass</span>`}}),W=new Ro({props:{code:`from transformers import T5ForConditionalGeneration, AutoTokenizer

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")
tokenizer = AutoTokenizer.from_pretrained("google/byt5-small")

model_inputs = tokenizer(
    ["Life is like a box of chocolates.", "Today is Monday."], padding="longest", return_tensors="pt"
)
labels = tokenizer(
    ["La vie est comme une bo\xEEte de chocolat.", "Aujourd'hui c'est lundi."], padding="longest", return_tensors="pt"
).input_ids

loss = model(**model_inputs, labels=labels).loss  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, AutoTokenizer

model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

model_inputs = tokenizer(
    [<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>, <span class="hljs-string">&quot;Today is Monday.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)
labels = tokenizer(
    [<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>, <span class="hljs-string">&quot;Aujourd&#x27;hui c&#x27;est lundi.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
).input_ids

loss = model(**model_inputs, labels=labels).loss  <span class="hljs-comment"># forward pass</span>`}}),V=new at({}),H=new Be({props:{name:"class transformers.ByT5Tokenizer",anchor:"transformers.ByT5Tokenizer",parameters:[{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 125"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/byt5/tokenization_byt5.py#L28",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.ByT5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ByT5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ByT5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in ByT5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.ByT5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),K=new Be({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/byt5/tokenization_byt5.py#L177",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Q=new Be({props:{name:"convert_tokens_to_string",anchor:"transformers.ByT5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/byt5/tokenization_byt5.py#L228"}}),Y=new Be({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/byt5/tokenization_byt5.py#L155",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new Be({props:{name:"get_special_tokens_mask",anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/byt5/tokenization_byt5.py#L117",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){T=s("meta"),Le=d(),$=s("h1"),E=s("a"),me=s("span"),u(F.$$.fragment),it=d(),he=s("span"),lt=a("ByT5"),Ae=d(),q=s("h2"),B=s("a"),ue=s("span"),u(N.$$.fragment),dt=d(),_e=s("span"),ct=a("Overview"),Pe=d(),L=s("p"),pt=a("The ByT5 model was presented in "),O=s("a"),ft=a("ByT5: Towards a token-free future with pre-trained byte-to-byte models"),mt=a(` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),je=d(),te=s("p"),ht=a("The abstract from the paper is the following:"),De=d(),oe=s("p"),ke=s("em"),ut=a(`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
Encoding text as a sequence of tokens requires a tokenizer, which is typically created as an independent artifact from
the model. Token-free models that instead operate directly on raw text (bytes or characters) have many benefits: they
can process text in any language out of the box, they are more robust to noise, and they minimize technical debt by
removing complex and error-prone text preprocessing pipelines. Since byte or character sequences are longer than token
sequences, past work on token-free models has often introduced new model architectures designed to amortize the cost of
operating directly on raw text. In this paper, we show that a standard Transformer architecture can be used with
minimal modifications to process byte sequences. We carefully characterize the trade-offs in terms of parameter count,
training FLOPs, and inference speed, and show that byte-level models are competitive with their token-level
counterparts. We also demonstrate that byte-level models are significantly more robust to noise and perform better on
tasks that are sensitive to spelling and pronunciation. As part of our contribution, we release a new set of
pre-trained byte-level Transformer models based on the T5 architecture, as well as all code and data used in our
experiments.`),Ce=d(),v=s("p"),_t=a("This model was contributed by "),R=s("a"),kt=a("patrickvonplaten"),gt=a(`. The original code can be
found `),M=s("a"),yt=a("here"),bt=a("."),Ie=d(),A=s("p"),vt=a("ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),se=s("a"),wt=a("T5v1.1\u2019s documentation page"),Tt=a(`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Se=d(),ne=s("p"),$t=a(`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Fe=d(),x=s("h3"),P=s("a"),ge=s("span"),u(G.$$.fragment),qt=d(),ye=s("span"),xt=a("Example"),Ne=d(),re=s("p"),zt=a("ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Oe=d(),u(U.$$.fragment),Re=d(),ae=s("p"),Et=a("For batched inference and training it is however recommended to make use of the tokenizer:"),Me=d(),u(W.$$.fragment),Ge=d(),z=s("h2"),j=s("a"),be=s("span"),u(V.$$.fragment),Bt=d(),ve=s("span"),Lt=a("ByT5Tokenizer"),Ue=d(),m=s("div"),u(H.$$.fragment),At=d(),we=s("p"),Pt=a("Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),jt=d(),X=s("p"),Dt=a("This tokenizer inherits from "),ie=s("a"),Ct=a("PreTrainedTokenizer"),It=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),St=d(),w=s("div"),u(K.$$.fragment),Ft=d(),Te=s("p"),Nt=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Ot=d(),J=s("ul"),le=s("li"),Rt=a("single sequence: "),$e=s("code"),Mt=a("X </s>"),Gt=d(),de=s("li"),Ut=a("pair of sequences: "),qe=s("code"),Wt=a("A </s> B </s>"),Vt=d(),D=s("div"),u(Q.$$.fragment),Ht=d(),xe=s("p"),Xt=a("Converts a sequence of tokens (string) in a single string."),Kt=d(),C=s("div"),u(Y.$$.fragment),Jt=d(),ze=s("p"),Qt=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),Yt=d(),I=s("div"),u(Z.$$.fragment),Zt=d(),ee=s("p"),eo=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ee=s("code"),to=a("prepare_for_model"),oo=a(" method."),We=d(),S=s("p"),so=a("See "),ce=s("a"),no=a("ByT5Tokenizer"),ro=a(" for all details."),this.h()},l(e){const l=Wo('[data-svelte="svelte-1phssyn"]',document.head);T=n(l,"META",{name:!0,content:!0}),l.forEach(o),Le=c(e),$=n(e,"H1",{class:!0});var He=r($);E=n(He,"A",{id:!0,class:!0,href:!0});var co=r(E);me=n(co,"SPAN",{});var po=r(me);_(F.$$.fragment,po),po.forEach(o),co.forEach(o),it=c(He),he=n(He,"SPAN",{});var fo=r(he);lt=i(fo,"ByT5"),fo.forEach(o),He.forEach(o),Ae=c(e),q=n(e,"H2",{class:!0});var Xe=r(q);B=n(Xe,"A",{id:!0,class:!0,href:!0});var mo=r(B);ue=n(mo,"SPAN",{});var ho=r(ue);_(N.$$.fragment,ho),ho.forEach(o),mo.forEach(o),dt=c(Xe),_e=n(Xe,"SPAN",{});var uo=r(_e);ct=i(uo,"Overview"),uo.forEach(o),Xe.forEach(o),Pe=c(e),L=n(e,"P",{});var Ke=r(L);pt=i(Ke,"The ByT5 model was presented in "),O=n(Ke,"A",{href:!0,rel:!0});var _o=r(O);ft=i(_o,"ByT5: Towards a token-free future with pre-trained byte-to-byte models"),_o.forEach(o),mt=i(Ke,` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),Ke.forEach(o),je=c(e),te=n(e,"P",{});var ko=r(te);ht=i(ko,"The abstract from the paper is the following:"),ko.forEach(o),De=c(e),oe=n(e,"P",{});var go=r(oe);ke=n(go,"EM",{});var yo=r(ke);ut=i(yo,`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
Encoding text as a sequence of tokens requires a tokenizer, which is typically created as an independent artifact from
the model. Token-free models that instead operate directly on raw text (bytes or characters) have many benefits: they
can process text in any language out of the box, they are more robust to noise, and they minimize technical debt by
removing complex and error-prone text preprocessing pipelines. Since byte or character sequences are longer than token
sequences, past work on token-free models has often introduced new model architectures designed to amortize the cost of
operating directly on raw text. In this paper, we show that a standard Transformer architecture can be used with
minimal modifications to process byte sequences. We carefully characterize the trade-offs in terms of parameter count,
training FLOPs, and inference speed, and show that byte-level models are competitive with their token-level
counterparts. We also demonstrate that byte-level models are significantly more robust to noise and perform better on
tasks that are sensitive to spelling and pronunciation. As part of our contribution, we release a new set of
pre-trained byte-level Transformer models based on the T5 architecture, as well as all code and data used in our
experiments.`),yo.forEach(o),go.forEach(o),Ce=c(e),v=n(e,"P",{});var pe=r(v);_t=i(pe,"This model was contributed by "),R=n(pe,"A",{href:!0,rel:!0});var bo=r(R);kt=i(bo,"patrickvonplaten"),bo.forEach(o),gt=i(pe,`. The original code can be
found `),M=n(pe,"A",{href:!0,rel:!0});var vo=r(M);yt=i(vo,"here"),vo.forEach(o),bt=i(pe,"."),pe.forEach(o),Ie=c(e),A=n(e,"P",{});var Je=r(A);vt=i(Je,"ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),se=n(Je,"A",{href:!0});var wo=r(se);wt=i(wo,"T5v1.1\u2019s documentation page"),wo.forEach(o),Tt=i(Je,`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Je.forEach(o),Se=c(e),ne=n(e,"P",{});var To=r(ne);$t=i(To,`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),To.forEach(o),Fe=c(e),x=n(e,"H3",{class:!0});var Qe=r(x);P=n(Qe,"A",{id:!0,class:!0,href:!0});var $o=r(P);ge=n($o,"SPAN",{});var qo=r(ge);_(G.$$.fragment,qo),qo.forEach(o),$o.forEach(o),qt=c(Qe),ye=n(Qe,"SPAN",{});var xo=r(ye);xt=i(xo,"Example"),xo.forEach(o),Qe.forEach(o),Ne=c(e),re=n(e,"P",{});var zo=r(re);zt=i(zo,"ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),zo.forEach(o),Oe=c(e),_(U.$$.fragment,e),Re=c(e),ae=n(e,"P",{});var Eo=r(ae);Et=i(Eo,"For batched inference and training it is however recommended to make use of the tokenizer:"),Eo.forEach(o),Me=c(e),_(W.$$.fragment,e),Ge=c(e),z=n(e,"H2",{class:!0});var Ye=r(z);j=n(Ye,"A",{id:!0,class:!0,href:!0});var Bo=r(j);be=n(Bo,"SPAN",{});var Lo=r(be);_(V.$$.fragment,Lo),Lo.forEach(o),Bo.forEach(o),Bt=c(Ye),ve=n(Ye,"SPAN",{});var Ao=r(ve);Lt=i(Ao,"ByT5Tokenizer"),Ao.forEach(o),Ye.forEach(o),Ue=c(e),m=n(e,"DIV",{class:!0});var h=r(m);_(H.$$.fragment,h),At=c(h),we=n(h,"P",{});var Po=r(we);Pt=i(Po,"Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),Po.forEach(o),jt=c(h),X=n(h,"P",{});var Ze=r(X);Dt=i(Ze,"This tokenizer inherits from "),ie=n(Ze,"A",{href:!0});var jo=r(ie);Ct=i(jo,"PreTrainedTokenizer"),jo.forEach(o),It=i(Ze,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ze.forEach(o),St=c(h),w=n(h,"DIV",{class:!0});var fe=r(w);_(K.$$.fragment,fe),Ft=c(fe),Te=n(fe,"P",{});var Do=r(Te);Nt=i(Do,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Do.forEach(o),Ot=c(fe),J=n(fe,"UL",{});var et=r(J);le=n(et,"LI",{});var ao=r(le);Rt=i(ao,"single sequence: "),$e=n(ao,"CODE",{});var Co=r($e);Mt=i(Co,"X </s>"),Co.forEach(o),ao.forEach(o),Gt=c(et),de=n(et,"LI",{});var io=r(de);Ut=i(io,"pair of sequences: "),qe=n(io,"CODE",{});var Io=r(qe);Wt=i(Io,"A </s> B </s>"),Io.forEach(o),io.forEach(o),et.forEach(o),fe.forEach(o),Vt=c(h),D=n(h,"DIV",{class:!0});var tt=r(D);_(Q.$$.fragment,tt),Ht=c(tt),xe=n(tt,"P",{});var So=r(xe);Xt=i(So,"Converts a sequence of tokens (string) in a single string."),So.forEach(o),tt.forEach(o),Kt=c(h),C=n(h,"DIV",{class:!0});var ot=r(C);_(Y.$$.fragment,ot),Jt=c(ot),ze=n(ot,"P",{});var Fo=r(ze);Qt=i(Fo,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),Fo.forEach(o),ot.forEach(o),Yt=c(h),I=n(h,"DIV",{class:!0});var st=r(I);_(Z.$$.fragment,st),Zt=c(st),ee=n(st,"P",{});var nt=r(ee);eo=i(nt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ee=n(nt,"CODE",{});var No=r(Ee);to=i(No,"prepare_for_model"),No.forEach(o),oo=i(nt," method."),nt.forEach(o),st.forEach(o),h.forEach(o),We=c(e),S=n(e,"P",{});var rt=r(S);so=i(rt,"See "),ce=n(rt,"A",{href:!0});var Oo=r(ce);no=i(Oo,"ByT5Tokenizer"),Oo.forEach(o),ro=i(rt," for all details."),rt.forEach(o),this.h()},h(){p(T,"name","hf:doc:metadata"),p(T,"content",JSON.stringify(Ko)),p(E,"id","byt5"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#byt5"),p($,"class","relative group"),p(B,"id","overview"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#overview"),p(q,"class","relative group"),p(O,"href","https://arxiv.org/abs/2105.13626"),p(O,"rel","nofollow"),p(R,"href","https://huggingface.co/patrickvonplaten"),p(R,"rel","nofollow"),p(M,"href","https://github.com/google-research/byt5"),p(M,"rel","nofollow"),p(se,"href","t5v1.1"),p(P,"id","example"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#example"),p(x,"class","relative group"),p(j,"id","transformers.ByT5Tokenizer"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#transformers.ByT5Tokenizer"),p(z,"class","relative group"),p(ie,"href","/docs/transformers/pr_16653/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(w,"class","docstring"),p(D,"class","docstring"),p(C,"class","docstring"),p(I,"class","docstring"),p(m,"class","docstring"),p(ce,"href","/docs/transformers/pr_16653/en/model_doc/byt5#transformers.ByT5Tokenizer")},m(e,l){t(document.head,T),f(e,Le,l),f(e,$,l),t($,E),t(E,me),k(F,me,null),t($,it),t($,he),t(he,lt),f(e,Ae,l),f(e,q,l),t(q,B),t(B,ue),k(N,ue,null),t(q,dt),t(q,_e),t(_e,ct),f(e,Pe,l),f(e,L,l),t(L,pt),t(L,O),t(O,ft),t(L,mt),f(e,je,l),f(e,te,l),t(te,ht),f(e,De,l),f(e,oe,l),t(oe,ke),t(ke,ut),f(e,Ce,l),f(e,v,l),t(v,_t),t(v,R),t(R,kt),t(v,gt),t(v,M),t(M,yt),t(v,bt),f(e,Ie,l),f(e,A,l),t(A,vt),t(A,se),t(se,wt),t(A,Tt),f(e,Se,l),f(e,ne,l),t(ne,$t),f(e,Fe,l),f(e,x,l),t(x,P),t(P,ge),k(G,ge,null),t(x,qt),t(x,ye),t(ye,xt),f(e,Ne,l),f(e,re,l),t(re,zt),f(e,Oe,l),k(U,e,l),f(e,Re,l),f(e,ae,l),t(ae,Et),f(e,Me,l),k(W,e,l),f(e,Ge,l),f(e,z,l),t(z,j),t(j,be),k(V,be,null),t(z,Bt),t(z,ve),t(ve,Lt),f(e,Ue,l),f(e,m,l),k(H,m,null),t(m,At),t(m,we),t(we,Pt),t(m,jt),t(m,X),t(X,Dt),t(X,ie),t(ie,Ct),t(X,It),t(m,St),t(m,w),k(K,w,null),t(w,Ft),t(w,Te),t(Te,Nt),t(w,Ot),t(w,J),t(J,le),t(le,Rt),t(le,$e),t($e,Mt),t(J,Gt),t(J,de),t(de,Ut),t(de,qe),t(qe,Wt),t(m,Vt),t(m,D),k(Q,D,null),t(D,Ht),t(D,xe),t(xe,Xt),t(m,Kt),t(m,C),k(Y,C,null),t(C,Jt),t(C,ze),t(ze,Qt),t(m,Yt),t(m,I),k(Z,I,null),t(I,Zt),t(I,ee),t(ee,eo),t(ee,Ee),t(Ee,to),t(ee,oo),f(e,We,l),f(e,S,l),t(S,so),t(S,ce),t(ce,no),t(S,ro),Ve=!0},p:Vo,i(e){Ve||(g(F.$$.fragment,e),g(N.$$.fragment,e),g(G.$$.fragment,e),g(U.$$.fragment,e),g(W.$$.fragment,e),g(V.$$.fragment,e),g(H.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),Ve=!0)},o(e){y(F.$$.fragment,e),y(N.$$.fragment,e),y(G.$$.fragment,e),y(U.$$.fragment,e),y(W.$$.fragment,e),y(V.$$.fragment,e),y(H.$$.fragment,e),y(K.$$.fragment,e),y(Q.$$.fragment,e),y(Y.$$.fragment,e),y(Z.$$.fragment,e),Ve=!1},d(e){o(T),e&&o(Le),e&&o($),b(F),e&&o(Ae),e&&o(q),b(N),e&&o(Pe),e&&o(L),e&&o(je),e&&o(te),e&&o(De),e&&o(oe),e&&o(Ce),e&&o(v),e&&o(Ie),e&&o(A),e&&o(Se),e&&o(ne),e&&o(Fe),e&&o(x),b(G),e&&o(Ne),e&&o(re),e&&o(Oe),b(U,e),e&&o(Re),e&&o(ae),e&&o(Me),b(W,e),e&&o(Ge),e&&o(z),b(V),e&&o(Ue),e&&o(m),b(H),b(K),b(Q),b(Y),b(Z),e&&o(We),e&&o(S)}}}const Ko={local:"byt5",sections:[{local:"overview",sections:[{local:"example",title:"Example"}],title:"Overview"},{local:"transformers.ByT5Tokenizer",title:"ByT5Tokenizer"}],title:"ByT5"};function Jo(lo){return Ho(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ts extends Mo{constructor(T){super();Go(this,T,Jo,Xo,Uo,{})}}export{ts as default,Ko as metadata};
