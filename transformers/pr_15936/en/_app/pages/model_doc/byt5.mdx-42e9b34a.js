import{S as Mo,i as Go,s as Wo,e as s,k as d,w as k,t as a,M as Uo,c as n,d as o,m as c,a as r,x as g,h as i,b as p,F as t,g as f,y,L as Vo,q as b,o as v,B as w}from"../../chunks/vendor-4833417e.js";import{D as Le}from"../../chunks/Docstring-7b52c3d4.js";import{C as Ro}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as at}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Ho(it){let T,te,u,_,he,F,lt,ue,dt,Ae,x,B,_e,N,ct,ke,pt,je,L,ft,O,mt,ht,De,oe,ut,Pe,se,ge,_t,Ce,$,kt,R,gt,yt,M,bt,vt,Ie,A,wt,ne,Tt,$t,Se,re,qt,Fe,z,j,ye,G,xt,be,zt,Ne,ae,Et,Oe,W,Re,ie,Bt,Me,U,Ge,E,D,ve,V,Lt,we,At,We,m,H,jt,Te,Dt,Pt,X,Ct,le,It,St,Ft,q,K,Nt,$e,Ot,Rt,J,de,Mt,qe,Gt,Wt,ce,Ut,xe,Vt,Ht,P,Q,Xt,ze,Kt,Jt,C,Y,Qt,Ee,Yt,Zt,I,Z,eo,ee,to,Be,oo,so,Ue,S,no,pe,ro,ao,Ve;return F=new at({}),N=new at({}),G=new at({}),W=new Ro({props:{code:`from transformers import T5ForConditionalGeneration
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

loss = model(input_ids, labels=labels).loss  <span class="hljs-comment"># forward pass</span>`}}),U=new Ro({props:{code:`from transformers import T5ForConditionalGeneration, AutoTokenizer

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

loss = model(**model_inputs, labels=labels).loss  <span class="hljs-comment"># forward pass</span>`}}),V=new at({}),H=new Le({props:{name:"class transformers.ByT5Tokenizer",anchor:"transformers.ByT5Tokenizer",parameters:[{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 125"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/byt5/tokenization_byt5.py#L28",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),K=new Le({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/byt5/tokenization_byt5.py#L177",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Q=new Le({props:{name:"convert_tokens_to_string",anchor:"transformers.ByT5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/byt5/tokenization_byt5.py#L228"}}),Y=new Le({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/byt5/tokenization_byt5.py#L155",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new Le({props:{name:"get_special_tokens_mask",anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/byt5/tokenization_byt5.py#L117",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){T=s("meta"),te=d(),u=s("h1"),_=s("a"),he=s("span"),k(F.$$.fragment),lt=d(),ue=s("span"),dt=a("ByT5"),Ae=d(),x=s("h2"),B=s("a"),_e=s("span"),k(N.$$.fragment),ct=d(),ke=s("span"),pt=a("Overview"),je=d(),L=s("p"),ft=a("The ByT5 model was presented in "),O=s("a"),mt=a("ByT5: Towards a token-free future with pre-trained byte-to-byte models"),ht=a(` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),De=d(),oe=s("p"),ut=a("The abstract from the paper is the following:"),Pe=d(),se=s("p"),ge=s("em"),_t=a(`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
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
experiments.`),Ce=d(),$=s("p"),kt=a("This model was contributed by "),R=s("a"),gt=a("patrickvonplaten"),yt=a(`. The original code can be
found `),M=s("a"),bt=a("here"),vt=a("."),Ie=d(),A=s("p"),wt=a("ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),ne=s("a"),Tt=a("T5v1.1\u2019s documentation page"),$t=a(`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Se=d(),re=s("p"),qt=a(`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Fe=d(),z=s("h3"),j=s("a"),ye=s("span"),k(G.$$.fragment),xt=d(),be=s("span"),zt=a("Example"),Ne=d(),ae=s("p"),Et=a("ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Oe=d(),k(W.$$.fragment),Re=d(),ie=s("p"),Bt=a("For batched inference and training it is however recommended to make use of the tokenizer:"),Me=d(),k(U.$$.fragment),Ge=d(),E=s("h2"),D=s("a"),ve=s("span"),k(V.$$.fragment),Lt=d(),we=s("span"),At=a("ByT5Tokenizer"),We=d(),m=s("div"),k(H.$$.fragment),jt=d(),Te=s("p"),Dt=a("Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),Pt=d(),X=s("p"),Ct=a("This tokenizer inherits from "),le=s("a"),It=a("PreTrainedTokenizer"),St=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ft=d(),q=s("div"),k(K.$$.fragment),Nt=d(),$e=s("p"),Ot=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Rt=d(),J=s("ul"),de=s("li"),Mt=a("single sequence: "),qe=s("code"),Gt=a("X </s>"),Wt=d(),ce=s("li"),Ut=a("pair of sequences: "),xe=s("code"),Vt=a("A </s> B </s>"),Ht=d(),P=s("div"),k(Q.$$.fragment),Xt=d(),ze=s("p"),Kt=a("Converts a sequence of tokens (string) in a single string."),Jt=d(),C=s("div"),k(Y.$$.fragment),Qt=d(),Ee=s("p"),Yt=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),Zt=d(),I=s("div"),k(Z.$$.fragment),eo=d(),ee=s("p"),to=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Be=s("code"),oo=a("prepare_for_model"),so=a(" method."),Ue=d(),S=s("p"),no=a("See "),pe=s("a"),ro=a("ByT5Tokenizer"),ao=a(" for all details."),this.h()},l(e){const l=Uo('[data-svelte="svelte-1phssyn"]',document.head);T=n(l,"META",{name:!0,content:!0}),l.forEach(o),te=c(e),u=n(e,"H1",{class:!0});var He=r(u);_=n(He,"A",{id:!0,class:!0,href:!0});var co=r(_);he=n(co,"SPAN",{});var po=r(he);g(F.$$.fragment,po),po.forEach(o),co.forEach(o),lt=c(He),ue=n(He,"SPAN",{});var fo=r(ue);dt=i(fo,"ByT5"),fo.forEach(o),He.forEach(o),Ae=c(e),x=n(e,"H2",{class:!0});var Xe=r(x);B=n(Xe,"A",{id:!0,class:!0,href:!0});var mo=r(B);_e=n(mo,"SPAN",{});var ho=r(_e);g(N.$$.fragment,ho),ho.forEach(o),mo.forEach(o),ct=c(Xe),ke=n(Xe,"SPAN",{});var uo=r(ke);pt=i(uo,"Overview"),uo.forEach(o),Xe.forEach(o),je=c(e),L=n(e,"P",{});var Ke=r(L);ft=i(Ke,"The ByT5 model was presented in "),O=n(Ke,"A",{href:!0,rel:!0});var _o=r(O);mt=i(_o,"ByT5: Towards a token-free future with pre-trained byte-to-byte models"),_o.forEach(o),ht=i(Ke,` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),Ke.forEach(o),De=c(e),oe=n(e,"P",{});var ko=r(oe);ut=i(ko,"The abstract from the paper is the following:"),ko.forEach(o),Pe=c(e),se=n(e,"P",{});var go=r(se);ge=n(go,"EM",{});var yo=r(ge);_t=i(yo,`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
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
experiments.`),yo.forEach(o),go.forEach(o),Ce=c(e),$=n(e,"P",{});var fe=r($);kt=i(fe,"This model was contributed by "),R=n(fe,"A",{href:!0,rel:!0});var bo=r(R);gt=i(bo,"patrickvonplaten"),bo.forEach(o),yt=i(fe,`. The original code can be
found `),M=n(fe,"A",{href:!0,rel:!0});var vo=r(M);bt=i(vo,"here"),vo.forEach(o),vt=i(fe,"."),fe.forEach(o),Ie=c(e),A=n(e,"P",{});var Je=r(A);wt=i(Je,"ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),ne=n(Je,"A",{href:!0});var wo=r(ne);Tt=i(wo,"T5v1.1\u2019s documentation page"),wo.forEach(o),$t=i(Je,`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Je.forEach(o),Se=c(e),re=n(e,"P",{});var To=r(re);qt=i(To,`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),To.forEach(o),Fe=c(e),z=n(e,"H3",{class:!0});var Qe=r(z);j=n(Qe,"A",{id:!0,class:!0,href:!0});var $o=r(j);ye=n($o,"SPAN",{});var qo=r(ye);g(G.$$.fragment,qo),qo.forEach(o),$o.forEach(o),xt=c(Qe),be=n(Qe,"SPAN",{});var xo=r(be);zt=i(xo,"Example"),xo.forEach(o),Qe.forEach(o),Ne=c(e),ae=n(e,"P",{});var zo=r(ae);Et=i(zo,"ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),zo.forEach(o),Oe=c(e),g(W.$$.fragment,e),Re=c(e),ie=n(e,"P",{});var Eo=r(ie);Bt=i(Eo,"For batched inference and training it is however recommended to make use of the tokenizer:"),Eo.forEach(o),Me=c(e),g(U.$$.fragment,e),Ge=c(e),E=n(e,"H2",{class:!0});var Ye=r(E);D=n(Ye,"A",{id:!0,class:!0,href:!0});var Bo=r(D);ve=n(Bo,"SPAN",{});var Lo=r(ve);g(V.$$.fragment,Lo),Lo.forEach(o),Bo.forEach(o),Lt=c(Ye),we=n(Ye,"SPAN",{});var Ao=r(we);At=i(Ao,"ByT5Tokenizer"),Ao.forEach(o),Ye.forEach(o),We=c(e),m=n(e,"DIV",{class:!0});var h=r(m);g(H.$$.fragment,h),jt=c(h),Te=n(h,"P",{});var jo=r(Te);Dt=i(jo,"Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),jo.forEach(o),Pt=c(h),X=n(h,"P",{});var Ze=r(X);Ct=i(Ze,"This tokenizer inherits from "),le=n(Ze,"A",{href:!0});var Do=r(le);It=i(Do,"PreTrainedTokenizer"),Do.forEach(o),St=i(Ze,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ze.forEach(o),Ft=c(h),q=n(h,"DIV",{class:!0});var me=r(q);g(K.$$.fragment,me),Nt=c(me),$e=n(me,"P",{});var Po=r($e);Ot=i(Po,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Po.forEach(o),Rt=c(me),J=n(me,"UL",{});var et=r(J);de=n(et,"LI",{});var io=r(de);Mt=i(io,"single sequence: "),qe=n(io,"CODE",{});var Co=r(qe);Gt=i(Co,"X </s>"),Co.forEach(o),io.forEach(o),Wt=c(et),ce=n(et,"LI",{});var lo=r(ce);Ut=i(lo,"pair of sequences: "),xe=n(lo,"CODE",{});var Io=r(xe);Vt=i(Io,"A </s> B </s>"),Io.forEach(o),lo.forEach(o),et.forEach(o),me.forEach(o),Ht=c(h),P=n(h,"DIV",{class:!0});var tt=r(P);g(Q.$$.fragment,tt),Xt=c(tt),ze=n(tt,"P",{});var So=r(ze);Kt=i(So,"Converts a sequence of tokens (string) in a single string."),So.forEach(o),tt.forEach(o),Jt=c(h),C=n(h,"DIV",{class:!0});var ot=r(C);g(Y.$$.fragment,ot),Qt=c(ot),Ee=n(ot,"P",{});var Fo=r(Ee);Yt=i(Fo,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),Fo.forEach(o),ot.forEach(o),Zt=c(h),I=n(h,"DIV",{class:!0});var st=r(I);g(Z.$$.fragment,st),eo=c(st),ee=n(st,"P",{});var nt=r(ee);to=i(nt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Be=n(nt,"CODE",{});var No=r(Be);oo=i(No,"prepare_for_model"),No.forEach(o),so=i(nt," method."),nt.forEach(o),st.forEach(o),h.forEach(o),Ue=c(e),S=n(e,"P",{});var rt=r(S);no=i(rt,"See "),pe=n(rt,"A",{href:!0});var Oo=r(pe);ro=i(Oo,"ByT5Tokenizer"),Oo.forEach(o),ao=i(rt," for all details."),rt.forEach(o),this.h()},h(){p(T,"name","hf:doc:metadata"),p(T,"content",JSON.stringify(Xo)),p(_,"id","byt5"),p(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_,"href","#byt5"),p(u,"class","relative group"),p(B,"id","overview"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#overview"),p(x,"class","relative group"),p(O,"href","https://arxiv.org/abs/2105.13626"),p(O,"rel","nofollow"),p(R,"href","https://huggingface.co/patrickvonplaten"),p(R,"rel","nofollow"),p(M,"href","https://github.com/google-research/byt5"),p(M,"rel","nofollow"),p(ne,"href","t5v1.1"),p(j,"id","example"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#example"),p(z,"class","relative group"),p(D,"id","transformers.ByT5Tokenizer"),p(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(D,"href","#transformers.ByT5Tokenizer"),p(E,"class","relative group"),p(le,"href","/docs/transformers/pr_15936/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(q,"class","docstring"),p(P,"class","docstring"),p(C,"class","docstring"),p(I,"class","docstring"),p(m,"class","docstring"),p(pe,"href","/docs/transformers/pr_15936/en/model_doc/byt5#transformers.ByT5Tokenizer")},m(e,l){t(document.head,T),f(e,te,l),f(e,u,l),t(u,_),t(_,he),y(F,he,null),t(u,lt),t(u,ue),t(ue,dt),f(e,Ae,l),f(e,x,l),t(x,B),t(B,_e),y(N,_e,null),t(x,ct),t(x,ke),t(ke,pt),f(e,je,l),f(e,L,l),t(L,ft),t(L,O),t(O,mt),t(L,ht),f(e,De,l),f(e,oe,l),t(oe,ut),f(e,Pe,l),f(e,se,l),t(se,ge),t(ge,_t),f(e,Ce,l),f(e,$,l),t($,kt),t($,R),t(R,gt),t($,yt),t($,M),t(M,bt),t($,vt),f(e,Ie,l),f(e,A,l),t(A,wt),t(A,ne),t(ne,Tt),t(A,$t),f(e,Se,l),f(e,re,l),t(re,qt),f(e,Fe,l),f(e,z,l),t(z,j),t(j,ye),y(G,ye,null),t(z,xt),t(z,be),t(be,zt),f(e,Ne,l),f(e,ae,l),t(ae,Et),f(e,Oe,l),y(W,e,l),f(e,Re,l),f(e,ie,l),t(ie,Bt),f(e,Me,l),y(U,e,l),f(e,Ge,l),f(e,E,l),t(E,D),t(D,ve),y(V,ve,null),t(E,Lt),t(E,we),t(we,At),f(e,We,l),f(e,m,l),y(H,m,null),t(m,jt),t(m,Te),t(Te,Dt),t(m,Pt),t(m,X),t(X,Ct),t(X,le),t(le,It),t(X,St),t(m,Ft),t(m,q),y(K,q,null),t(q,Nt),t(q,$e),t($e,Ot),t(q,Rt),t(q,J),t(J,de),t(de,Mt),t(de,qe),t(qe,Gt),t(J,Wt),t(J,ce),t(ce,Ut),t(ce,xe),t(xe,Vt),t(m,Ht),t(m,P),y(Q,P,null),t(P,Xt),t(P,ze),t(ze,Kt),t(m,Jt),t(m,C),y(Y,C,null),t(C,Qt),t(C,Ee),t(Ee,Yt),t(m,Zt),t(m,I),y(Z,I,null),t(I,eo),t(I,ee),t(ee,to),t(ee,Be),t(Be,oo),t(ee,so),f(e,Ue,l),f(e,S,l),t(S,no),t(S,pe),t(pe,ro),t(S,ao),Ve=!0},p:Vo,i(e){Ve||(b(F.$$.fragment,e),b(N.$$.fragment,e),b(G.$$.fragment,e),b(W.$$.fragment,e),b(U.$$.fragment,e),b(V.$$.fragment,e),b(H.$$.fragment,e),b(K.$$.fragment,e),b(Q.$$.fragment,e),b(Y.$$.fragment,e),b(Z.$$.fragment,e),Ve=!0)},o(e){v(F.$$.fragment,e),v(N.$$.fragment,e),v(G.$$.fragment,e),v(W.$$.fragment,e),v(U.$$.fragment,e),v(V.$$.fragment,e),v(H.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),Ve=!1},d(e){o(T),e&&o(te),e&&o(u),w(F),e&&o(Ae),e&&o(x),w(N),e&&o(je),e&&o(L),e&&o(De),e&&o(oe),e&&o(Pe),e&&o(se),e&&o(Ce),e&&o($),e&&o(Ie),e&&o(A),e&&o(Se),e&&o(re),e&&o(Fe),e&&o(z),w(G),e&&o(Ne),e&&o(ae),e&&o(Oe),w(W,e),e&&o(Re),e&&o(ie),e&&o(Me),w(U,e),e&&o(Ge),e&&o(E),w(V),e&&o(We),e&&o(m),w(H),w(K),w(Q),w(Y),w(Z),e&&o(Ue),e&&o(S)}}}const Xo={local:"byt5",sections:[{local:"overview",sections:[{local:"example",title:"Example"}],title:"Overview"},{local:"transformers.ByT5Tokenizer",title:"ByT5Tokenizer"}],title:"ByT5"};function Ko(it,T,te){let{fw:u}=T;return it.$$set=_=>{"fw"in _&&te(0,u=_.fw)},[u]}class ts extends Mo{constructor(T){super();Go(this,T,Ko,Ho,Wo,{fw:0})}}export{ts as default,Xo as metadata};
