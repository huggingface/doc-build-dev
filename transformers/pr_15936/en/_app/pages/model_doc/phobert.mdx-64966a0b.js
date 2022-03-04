import{S as po,i as ho,s as mo,e as n,k as l,w as v,t as a,M as fo,c as s,d as o,m as c,a as r,x as T,h as i,b as p,F as t,g as m,y as w,L as uo,q as E,o as y,B as P}from"../../chunks/vendor-4833417e.js";import{D as ae}from"../../chunks/Docstring-7b52c3d4.js";import{C as go}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Mt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function _o(Fe){let _,J,u,g,ie,j,We,le,Ue,we,$,z,ce,N,Xe,pe,He,Ee,x,Ge,I,Qe,Ye,ye,K,Je,Pe,Z,de,Ke,$e,ee,Ze,qe,M,ze,k,et,C,tt,ot,O,nt,st,xe,q,A,he,S,rt,me,at,Ae,h,V,it,fe,lt,ct,F,pt,te,dt,ht,mt,L,W,ft,ue,ut,gt,b,U,_t,ge,kt,bt,X,oe,vt,_e,Tt,wt,ne,Et,ke,yt,Pt,D,H,$t,be,qt,zt,B,G,xt,ve,At,Lt,R,Q,Dt,Y,Bt,Te,Rt,jt,Le;return j=new Mt({}),N=new Mt({}),M=new go({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

phobert = AutoModel.from_pretrained("vinai/phobert-base")
tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base")

# INPUT TEXT MUST BE ALREADY WORD-SEGMENTED!
line = "T\xF4i l\xE0 sinh_vi\xEAn tr\u01B0\u1EDDng \u0111\u1EA1i_h\u1ECDc C\xF4ng_ngh\u1EC7 ."

input_ids = torch.tensor([tokenizer.encode(line)])

with torch.no_grad():
    features = phobert(input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
# from transformers import TFAutoModel
# phobert = TFAutoModel.from_pretrained("vinai/phobert-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>phobert = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/phobert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/phobert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># INPUT TEXT MUST BE ALREADY WORD-SEGMENTED!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;T\xF4i l\xE0 sinh_vi\xEAn tr\u01B0\u1EDDng \u0111\u1EA1i_h\u1ECDc C\xF4ng_ngh\u1EC7 .&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(line)])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = phobert(input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># from transformers import TFAutoModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># phobert = TFAutoModel.from_pretrained(&quot;vinai/phobert-base&quot;)</span>`}}),S=new Mt({}),V=new ae({props:{name:"class transformers.PhobertTokenizer",anchor:"transformers.PhobertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/phobert/tokenization_phobert.py#L68",parametersDescription:[{anchor:"transformers.PhobertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.PhobertTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.PhobertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>st</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.PhobertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PhobertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.PhobertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.PhobertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PhobertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PhobertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),W=new ae({props:{name:"add_from_file",anchor:"transformers.PhobertTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/phobert/tokenization_phobert.py#L341"}}),U=new ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PhobertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/phobert/tokenization_phobert.py#L164",parametersDescription:[{anchor:"transformers.PhobertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PhobertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),H=new ae({props:{name:"convert_tokens_to_string",anchor:"transformers.PhobertTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/phobert/tokenization_phobert.py#L311"}}),G=new ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PhobertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/phobert/tokenization_phobert.py#L218",parametersDescription:[{anchor:"transformers.PhobertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.PhobertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Q=new ae({props:{name:"get_special_tokens_mask",anchor:"transformers.PhobertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15936/src/transformers/models/phobert/tokenization_phobert.py#L190",parametersDescription:[{anchor:"transformers.PhobertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.PhobertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.PhobertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){_=n("meta"),J=l(),u=n("h1"),g=n("a"),ie=n("span"),v(j.$$.fragment),We=l(),le=n("span"),Ue=a("PhoBERT"),we=l(),$=n("h2"),z=n("a"),ce=n("span"),v(N.$$.fragment),Xe=l(),pe=n("span"),He=a("Overview"),Ee=l(),x=n("p"),Ge=a("The PhoBERT model was proposed in "),I=n("a"),Qe=a("PhoBERT: Pre-trained language models for Vietnamese"),Ye=a(" by Dat Quoc Nguyen, Anh Tuan Nguyen."),ye=l(),K=n("p"),Je=a("The abstract from the paper is the following:"),Pe=l(),Z=n("p"),de=n("em"),Ke=a(`We present PhoBERT with two versions, PhoBERT-base and PhoBERT-large, the first public large-scale monolingual
language models pre-trained for Vietnamese. Experimental results show that PhoBERT consistently outperforms the recent
best pre-trained multilingual model XLM-R (Conneau et al., 2020) and improves the state-of-the-art in multiple
Vietnamese-specific NLP tasks including Part-of-speech tagging, Dependency parsing, Named-entity recognition and
Natural language inference.`),$e=l(),ee=n("p"),Ze=a("Example of use:"),qe=l(),v(M.$$.fragment),ze=l(),k=n("p"),et=a("This model was contributed by "),C=n("a"),tt=a("dqnguyen"),ot=a(". The original code can be found "),O=n("a"),nt=a("here"),st=a("."),xe=l(),q=n("h2"),A=n("a"),he=n("span"),v(S.$$.fragment),rt=l(),me=n("span"),at=a("PhobertTokenizer"),Ae=l(),h=n("div"),v(V.$$.fragment),it=l(),fe=n("p"),lt=a("Construct a PhoBERT tokenizer. Based on Byte-Pair-Encoding."),ct=l(),F=n("p"),pt=a("This tokenizer inherits from "),te=n("a"),dt=a("PreTrainedTokenizer"),ht=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mt=l(),L=n("div"),v(W.$$.fragment),ft=l(),ue=n("p"),ut=a("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),gt=l(),b=n("div"),v(U.$$.fragment),_t=l(),ge=n("p"),kt=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A PhoBERT sequence has the following format:`),bt=l(),X=n("ul"),oe=n("li"),vt=a("single sequence: "),_e=n("code"),Tt=a("<s> X </s>"),wt=l(),ne=n("li"),Et=a("pair of sequences: "),ke=n("code"),yt=a("<s> A </s></s> B </s>"),Pt=l(),D=n("div"),v(H.$$.fragment),$t=l(),be=n("p"),qt=a("Converts a sequence of tokens (string) in a single string."),zt=l(),B=n("div"),v(G.$$.fragment),xt=l(),ve=n("p"),At=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. PhoBERT does not
make use of token type ids, therefore a list of zeros is returned.`),Lt=l(),R=n("div"),v(Q.$$.fragment),Dt=l(),Y=n("p"),Bt=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Te=n("code"),Rt=a("prepare_for_model"),jt=a(" method."),this.h()},l(e){const d=fo('[data-svelte="svelte-1phssyn"]',document.head);_=s(d,"META",{name:!0,content:!0}),d.forEach(o),J=c(e),u=s(e,"H1",{class:!0});var De=r(u);g=s(De,"A",{id:!0,class:!0,href:!0});var Ct=r(g);ie=s(Ct,"SPAN",{});var Ot=r(ie);T(j.$$.fragment,Ot),Ot.forEach(o),Ct.forEach(o),We=c(De),le=s(De,"SPAN",{});var St=r(le);Ue=i(St,"PhoBERT"),St.forEach(o),De.forEach(o),we=c(e),$=s(e,"H2",{class:!0});var Be=r($);z=s(Be,"A",{id:!0,class:!0,href:!0});var Vt=r(z);ce=s(Vt,"SPAN",{});var Ft=r(ce);T(N.$$.fragment,Ft),Ft.forEach(o),Vt.forEach(o),Xe=c(Be),pe=s(Be,"SPAN",{});var Wt=r(pe);He=i(Wt,"Overview"),Wt.forEach(o),Be.forEach(o),Ee=c(e),x=s(e,"P",{});var Re=r(x);Ge=i(Re,"The PhoBERT model was proposed in "),I=s(Re,"A",{href:!0,rel:!0});var Ut=r(I);Qe=i(Ut,"PhoBERT: Pre-trained language models for Vietnamese"),Ut.forEach(o),Ye=i(Re," by Dat Quoc Nguyen, Anh Tuan Nguyen."),Re.forEach(o),ye=c(e),K=s(e,"P",{});var Xt=r(K);Je=i(Xt,"The abstract from the paper is the following:"),Xt.forEach(o),Pe=c(e),Z=s(e,"P",{});var Ht=r(Z);de=s(Ht,"EM",{});var Gt=r(de);Ke=i(Gt,`We present PhoBERT with two versions, PhoBERT-base and PhoBERT-large, the first public large-scale monolingual
language models pre-trained for Vietnamese. Experimental results show that PhoBERT consistently outperforms the recent
best pre-trained multilingual model XLM-R (Conneau et al., 2020) and improves the state-of-the-art in multiple
Vietnamese-specific NLP tasks including Part-of-speech tagging, Dependency parsing, Named-entity recognition and
Natural language inference.`),Gt.forEach(o),Ht.forEach(o),$e=c(e),ee=s(e,"P",{});var Qt=r(ee);Ze=i(Qt,"Example of use:"),Qt.forEach(o),qe=c(e),T(M.$$.fragment,e),ze=c(e),k=s(e,"P",{});var se=r(k);et=i(se,"This model was contributed by "),C=s(se,"A",{href:!0,rel:!0});var Yt=r(C);tt=i(Yt,"dqnguyen"),Yt.forEach(o),ot=i(se,". The original code can be found "),O=s(se,"A",{href:!0,rel:!0});var Jt=r(O);nt=i(Jt,"here"),Jt.forEach(o),st=i(se,"."),se.forEach(o),xe=c(e),q=s(e,"H2",{class:!0});var je=r(q);A=s(je,"A",{id:!0,class:!0,href:!0});var Kt=r(A);he=s(Kt,"SPAN",{});var Zt=r(he);T(S.$$.fragment,Zt),Zt.forEach(o),Kt.forEach(o),rt=c(je),me=s(je,"SPAN",{});var eo=r(me);at=i(eo,"PhobertTokenizer"),eo.forEach(o),je.forEach(o),Ae=c(e),h=s(e,"DIV",{class:!0});var f=r(h);T(V.$$.fragment,f),it=c(f),fe=s(f,"P",{});var to=r(fe);lt=i(to,"Construct a PhoBERT tokenizer. Based on Byte-Pair-Encoding."),to.forEach(o),ct=c(f),F=s(f,"P",{});var Ne=r(F);pt=i(Ne,"This tokenizer inherits from "),te=s(Ne,"A",{href:!0});var oo=r(te);dt=i(oo,"PreTrainedTokenizer"),oo.forEach(o),ht=i(Ne,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ne.forEach(o),mt=c(f),L=s(f,"DIV",{class:!0});var Ie=r(L);T(W.$$.fragment,Ie),ft=c(Ie),ue=s(Ie,"P",{});var no=r(ue);ut=i(no,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),no.forEach(o),Ie.forEach(o),gt=c(f),b=s(f,"DIV",{class:!0});var re=r(b);T(U.$$.fragment,re),_t=c(re),ge=s(re,"P",{});var so=r(ge);kt=i(so,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A PhoBERT sequence has the following format:`),so.forEach(o),bt=c(re),X=s(re,"UL",{});var Me=r(X);oe=s(Me,"LI",{});var Nt=r(oe);vt=i(Nt,"single sequence: "),_e=s(Nt,"CODE",{});var ro=r(_e);Tt=i(ro,"<s> X </s>"),ro.forEach(o),Nt.forEach(o),wt=c(Me),ne=s(Me,"LI",{});var It=r(ne);Et=i(It,"pair of sequences: "),ke=s(It,"CODE",{});var ao=r(ke);yt=i(ao,"<s> A </s></s> B </s>"),ao.forEach(o),It.forEach(o),Me.forEach(o),re.forEach(o),Pt=c(f),D=s(f,"DIV",{class:!0});var Ce=r(D);T(H.$$.fragment,Ce),$t=c(Ce),be=s(Ce,"P",{});var io=r(be);qt=i(io,"Converts a sequence of tokens (string) in a single string."),io.forEach(o),Ce.forEach(o),zt=c(f),B=s(f,"DIV",{class:!0});var Oe=r(B);T(G.$$.fragment,Oe),xt=c(Oe),ve=s(Oe,"P",{});var lo=r(ve);At=i(lo,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. PhoBERT does not
make use of token type ids, therefore a list of zeros is returned.`),lo.forEach(o),Oe.forEach(o),Lt=c(f),R=s(f,"DIV",{class:!0});var Se=r(R);T(Q.$$.fragment,Se),Dt=c(Se),Y=s(Se,"P",{});var Ve=r(Y);Bt=i(Ve,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Te=s(Ve,"CODE",{});var co=r(Te);Rt=i(co,"prepare_for_model"),co.forEach(o),jt=i(Ve," method."),Ve.forEach(o),Se.forEach(o),f.forEach(o),this.h()},h(){p(_,"name","hf:doc:metadata"),p(_,"content",JSON.stringify(ko)),p(g,"id","phobert"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#phobert"),p(u,"class","relative group"),p(z,"id","overview"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#overview"),p($,"class","relative group"),p(I,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.92.pdf"),p(I,"rel","nofollow"),p(C,"href","https://huggingface.co/dqnguyen"),p(C,"rel","nofollow"),p(O,"href","https://github.com/VinAIResearch/PhoBERT"),p(O,"rel","nofollow"),p(A,"id","transformers.PhobertTokenizer"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#transformers.PhobertTokenizer"),p(q,"class","relative group"),p(te,"href","/docs/transformers/pr_15936/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(L,"class","docstring"),p(b,"class","docstring"),p(D,"class","docstring"),p(B,"class","docstring"),p(R,"class","docstring"),p(h,"class","docstring")},m(e,d){t(document.head,_),m(e,J,d),m(e,u,d),t(u,g),t(g,ie),w(j,ie,null),t(u,We),t(u,le),t(le,Ue),m(e,we,d),m(e,$,d),t($,z),t(z,ce),w(N,ce,null),t($,Xe),t($,pe),t(pe,He),m(e,Ee,d),m(e,x,d),t(x,Ge),t(x,I),t(I,Qe),t(x,Ye),m(e,ye,d),m(e,K,d),t(K,Je),m(e,Pe,d),m(e,Z,d),t(Z,de),t(de,Ke),m(e,$e,d),m(e,ee,d),t(ee,Ze),m(e,qe,d),w(M,e,d),m(e,ze,d),m(e,k,d),t(k,et),t(k,C),t(C,tt),t(k,ot),t(k,O),t(O,nt),t(k,st),m(e,xe,d),m(e,q,d),t(q,A),t(A,he),w(S,he,null),t(q,rt),t(q,me),t(me,at),m(e,Ae,d),m(e,h,d),w(V,h,null),t(h,it),t(h,fe),t(fe,lt),t(h,ct),t(h,F),t(F,pt),t(F,te),t(te,dt),t(F,ht),t(h,mt),t(h,L),w(W,L,null),t(L,ft),t(L,ue),t(ue,ut),t(h,gt),t(h,b),w(U,b,null),t(b,_t),t(b,ge),t(ge,kt),t(b,bt),t(b,X),t(X,oe),t(oe,vt),t(oe,_e),t(_e,Tt),t(X,wt),t(X,ne),t(ne,Et),t(ne,ke),t(ke,yt),t(h,Pt),t(h,D),w(H,D,null),t(D,$t),t(D,be),t(be,qt),t(h,zt),t(h,B),w(G,B,null),t(B,xt),t(B,ve),t(ve,At),t(h,Lt),t(h,R),w(Q,R,null),t(R,Dt),t(R,Y),t(Y,Bt),t(Y,Te),t(Te,Rt),t(Y,jt),Le=!0},p:uo,i(e){Le||(E(j.$$.fragment,e),E(N.$$.fragment,e),E(M.$$.fragment,e),E(S.$$.fragment,e),E(V.$$.fragment,e),E(W.$$.fragment,e),E(U.$$.fragment,e),E(H.$$.fragment,e),E(G.$$.fragment,e),E(Q.$$.fragment,e),Le=!0)},o(e){y(j.$$.fragment,e),y(N.$$.fragment,e),y(M.$$.fragment,e),y(S.$$.fragment,e),y(V.$$.fragment,e),y(W.$$.fragment,e),y(U.$$.fragment,e),y(H.$$.fragment,e),y(G.$$.fragment,e),y(Q.$$.fragment,e),Le=!1},d(e){o(_),e&&o(J),e&&o(u),P(j),e&&o(we),e&&o($),P(N),e&&o(Ee),e&&o(x),e&&o(ye),e&&o(K),e&&o(Pe),e&&o(Z),e&&o($e),e&&o(ee),e&&o(qe),P(M,e),e&&o(ze),e&&o(k),e&&o(xe),e&&o(q),P(S),e&&o(Ae),e&&o(h),P(V),P(W),P(U),P(H),P(G),P(Q)}}}const ko={local:"phobert",sections:[{local:"overview",title:"Overview"},{local:"transformers.PhobertTokenizer",title:"PhobertTokenizer"}],title:"PhoBERT"};function bo(Fe,_,J){let{fw:u}=_;return Fe.$$set=g=>{"fw"in g&&J(0,u=g.fw)},[u]}class Po extends po{constructor(_){super();ho(this,_,bo,_o,mo,{fw:0})}}export{Po as default,ko as metadata};
