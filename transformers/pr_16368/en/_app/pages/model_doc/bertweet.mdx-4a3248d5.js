import{S as zs,i as qs,s as Bs,e as n,k as a,w as u,t as i,M as Ls,c as o,d as s,m as l,a as r,x as g,h as c,b as p,F as e,g as h,y as _,L as xs,q as k,o as w,B as v,v as As}from"../../chunks/vendor-6b77c823.js";import{D as N}from"../../chunks/Docstring-abef54e3.js";import{C as Rs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Jt}from"../../chunks/IconCopyLink-7a11ce68.js";function Ds(Gt){let E,qe,$,q,pe,C,Je,de,Ge,Be,y,B,me,M,Ke,fe,et,Le,L,tt,F,st,nt,xe,se,ot,Ae,ne,he,rt,Re,oe,at,De,O,Pe,b,it,S,lt,ct,V,pt,dt,je,z,x,ue,U,mt,ge,ft,Ie,d,W,ht,_e,ut,gt,H,_t,re,kt,wt,vt,A,X,bt,ke,Tt,Et,T,Q,$t,we,yt,zt,Y,ae,qt,ve,Bt,Lt,ie,xt,be,At,Rt,R,Z,Dt,Te,Pt,jt,D,J,It,Ee,Nt,Ct,P,G,Mt,K,Ft,$e,Ot,St,Vt,j,ee,Ut,ye,Wt,Ht,I,te,Xt,ze,Qt,Ne;return C=new Jt({}),M=new Jt({}),O=new Rs({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bertweet = AutoModel.from_pretrained("vinai/bertweet-base")

# For transformers v4.x+:
tokenizer = AutoTokenizer.from_pretrained("vinai/bertweet-base", use_fast=False)

# For transformers v3.x:
# tokenizer = AutoTokenizer.from_pretrained("vinai/bertweet-base")

# INPUT TWEET IS ALREADY NORMALIZED!
line = "SC has first two presumptive cases of coronavirus , DHEC confirms HTTPURL via @USER :cry:"

input_ids = torch.tensor([tokenizer.encode(line)])

with torch.no_grad():
    features = bertweet(input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
# from transformers import TFAutoModel
# bertweet = TFAutoModel.from_pretrained("vinai/bertweet-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bertweet = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bertweet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For transformers v4.x+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bertweet-base&quot;</span>, use_fast=<span class="hljs-literal">False</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For transformers v3.x:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># tokenizer = AutoTokenizer.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># INPUT TWEET IS ALREADY NORMALIZED!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;SC has first two presumptive cases of coronavirus , DHEC confirms HTTPURL via @USER :cry:&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(line)])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = bertweet(input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># from transformers import TFAutoModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># bertweet = TFAutoModel.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>`}}),U=new Jt({}),W=new N({props:{name:"class transformers.BertweetTokenizer",anchor:"transformers.BertweetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalization",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L68",parametersDescription:[{anchor:"transformers.BertweetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertweetTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BertweetTokenizer.normalization",description:`<strong>normalization</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply a normalization preprocess.`,name:"normalization"},{anchor:"transformers.BertweetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BertweetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BertweetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertweetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertweetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertweetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertweetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),X=new N({props:{name:"add_from_file",anchor:"transformers.BertweetTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L414"}}),Q=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L183",parametersDescription:[{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new N({props:{name:"convert_tokens_to_string",anchor:"transformers.BertweetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L384"}}),J=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L237",parametersDescription:[{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),G=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.BertweetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L209",parametersDescription:[{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new N({props:{name:"normalizeToken",anchor:"transformers.BertweetTokenizer.normalizeToken",parameters:[{name:"token",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L357"}}),te=new N({props:{name:"normalizeTweet",anchor:"transformers.BertweetTokenizer.normalizeTweet",parameters:[{name:"tweet",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16368/src/transformers/models/bertweet/tokenization_bertweet.py#L323"}}),{c(){E=n("meta"),qe=a(),$=n("h1"),q=n("a"),pe=n("span"),u(C.$$.fragment),Je=a(),de=n("span"),Ge=i("BERTweet"),Be=a(),y=n("h2"),B=n("a"),me=n("span"),u(M.$$.fragment),Ke=a(),fe=n("span"),et=i("Overview"),Le=a(),L=n("p"),tt=i("The BERTweet model was proposed in "),F=n("a"),st=i("BERTweet: A pre-trained language model for English Tweets"),nt=i(" by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),xe=a(),se=n("p"),ot=i("The abstract from the paper is the following:"),Ae=a(),ne=n("p"),he=n("em"),rt=i(`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),Re=a(),oe=n("p"),at=i("Example of use:"),De=a(),u(O.$$.fragment),Pe=a(),b=n("p"),it=i("This model was contributed by "),S=n("a"),lt=i("dqnguyen"),ct=i(". The original code can be found "),V=n("a"),pt=i("here"),dt=i("."),je=a(),z=n("h2"),x=n("a"),ue=n("span"),u(U.$$.fragment),mt=a(),ge=n("span"),ft=i("BertweetTokenizer"),Ie=a(),d=n("div"),u(W.$$.fragment),ht=a(),_e=n("p"),ut=i("Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),gt=a(),H=n("p"),_t=i("This tokenizer inherits from "),re=n("a"),kt=i("PreTrainedTokenizer"),wt=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vt=a(),A=n("div"),u(X.$$.fragment),bt=a(),ke=n("p"),Tt=i("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),Et=a(),T=n("div"),u(Q.$$.fragment),$t=a(),we=n("p"),yt=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),zt=a(),Y=n("ul"),ae=n("li"),qt=i("single sequence: "),ve=n("code"),Bt=i("<s> X </s>"),Lt=a(),ie=n("li"),xt=i("pair of sequences: "),be=n("code"),At=i("<s> A </s></s> B </s>"),Rt=a(),R=n("div"),u(Z.$$.fragment),Dt=a(),Te=n("p"),Pt=i("Converts a sequence of tokens (string) in a single string."),jt=a(),D=n("div"),u(J.$$.fragment),It=a(),Ee=n("p"),Nt=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ct=a(),P=n("div"),u(G.$$.fragment),Mt=a(),K=n("p"),Ft=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$e=n("code"),Ot=i("prepare_for_model"),St=i(" method."),Vt=a(),j=n("div"),u(ee.$$.fragment),Ut=a(),ye=n("p"),Wt=i("Normalize tokens in a Tweet"),Ht=a(),I=n("div"),u(te.$$.fragment),Xt=a(),ze=n("p"),Qt=i("Normalize a raw Tweet"),this.h()},l(t){const m=Ls('[data-svelte="svelte-1phssyn"]',document.head);E=o(m,"META",{name:!0,content:!0}),m.forEach(s),qe=l(t),$=o(t,"H1",{class:!0});var Ce=r($);q=o(Ce,"A",{id:!0,class:!0,href:!0});var Kt=r(q);pe=o(Kt,"SPAN",{});var es=r(pe);g(C.$$.fragment,es),es.forEach(s),Kt.forEach(s),Je=l(Ce),de=o(Ce,"SPAN",{});var ts=r(de);Ge=c(ts,"BERTweet"),ts.forEach(s),Ce.forEach(s),Be=l(t),y=o(t,"H2",{class:!0});var Me=r(y);B=o(Me,"A",{id:!0,class:!0,href:!0});var ss=r(B);me=o(ss,"SPAN",{});var ns=r(me);g(M.$$.fragment,ns),ns.forEach(s),ss.forEach(s),Ke=l(Me),fe=o(Me,"SPAN",{});var os=r(fe);et=c(os,"Overview"),os.forEach(s),Me.forEach(s),Le=l(t),L=o(t,"P",{});var Fe=r(L);tt=c(Fe,"The BERTweet model was proposed in "),F=o(Fe,"A",{href:!0,rel:!0});var rs=r(F);st=c(rs,"BERTweet: A pre-trained language model for English Tweets"),rs.forEach(s),nt=c(Fe," by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Fe.forEach(s),xe=l(t),se=o(t,"P",{});var as=r(se);ot=c(as,"The abstract from the paper is the following:"),as.forEach(s),Ae=l(t),ne=o(t,"P",{});var is=r(ne);he=o(is,"EM",{});var ls=r(he);rt=c(ls,`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),ls.forEach(s),is.forEach(s),Re=l(t),oe=o(t,"P",{});var cs=r(oe);at=c(cs,"Example of use:"),cs.forEach(s),De=l(t),g(O.$$.fragment,t),Pe=l(t),b=o(t,"P",{});var le=r(b);it=c(le,"This model was contributed by "),S=o(le,"A",{href:!0,rel:!0});var ps=r(S);lt=c(ps,"dqnguyen"),ps.forEach(s),ct=c(le,". The original code can be found "),V=o(le,"A",{href:!0,rel:!0});var ds=r(V);pt=c(ds,"here"),ds.forEach(s),dt=c(le,"."),le.forEach(s),je=l(t),z=o(t,"H2",{class:!0});var Oe=r(z);x=o(Oe,"A",{id:!0,class:!0,href:!0});var ms=r(x);ue=o(ms,"SPAN",{});var fs=r(ue);g(U.$$.fragment,fs),fs.forEach(s),ms.forEach(s),mt=l(Oe),ge=o(Oe,"SPAN",{});var hs=r(ge);ft=c(hs,"BertweetTokenizer"),hs.forEach(s),Oe.forEach(s),Ie=l(t),d=o(t,"DIV",{class:!0});var f=r(d);g(W.$$.fragment,f),ht=l(f),_e=o(f,"P",{});var us=r(_e);ut=c(us,"Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),us.forEach(s),gt=l(f),H=o(f,"P",{});var Se=r(H);_t=c(Se,"This tokenizer inherits from "),re=o(Se,"A",{href:!0});var gs=r(re);kt=c(gs,"PreTrainedTokenizer"),gs.forEach(s),wt=c(Se,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Se.forEach(s),vt=l(f),A=o(f,"DIV",{class:!0});var Ve=r(A);g(X.$$.fragment,Ve),bt=l(Ve),ke=o(Ve,"P",{});var _s=r(ke);Tt=c(_s,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),_s.forEach(s),Ve.forEach(s),Et=l(f),T=o(f,"DIV",{class:!0});var ce=r(T);g(Q.$$.fragment,ce),$t=l(ce),we=o(ce,"P",{});var ks=r(we);yt=c(ks,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),ks.forEach(s),zt=l(ce),Y=o(ce,"UL",{});var Ue=r(Y);ae=o(Ue,"LI",{});var Yt=r(ae);qt=c(Yt,"single sequence: "),ve=o(Yt,"CODE",{});var ws=r(ve);Bt=c(ws,"<s> X </s>"),ws.forEach(s),Yt.forEach(s),Lt=l(Ue),ie=o(Ue,"LI",{});var Zt=r(ie);xt=c(Zt,"pair of sequences: "),be=o(Zt,"CODE",{});var vs=r(be);At=c(vs,"<s> A </s></s> B </s>"),vs.forEach(s),Zt.forEach(s),Ue.forEach(s),ce.forEach(s),Rt=l(f),R=o(f,"DIV",{class:!0});var We=r(R);g(Z.$$.fragment,We),Dt=l(We),Te=o(We,"P",{});var bs=r(Te);Pt=c(bs,"Converts a sequence of tokens (string) in a single string."),bs.forEach(s),We.forEach(s),jt=l(f),D=o(f,"DIV",{class:!0});var He=r(D);g(J.$$.fragment,He),It=l(He),Ee=o(He,"P",{});var Ts=r(Ee);Nt=c(Ts,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ts.forEach(s),He.forEach(s),Ct=l(f),P=o(f,"DIV",{class:!0});var Xe=r(P);g(G.$$.fragment,Xe),Mt=l(Xe),K=o(Xe,"P",{});var Qe=r(K);Ft=c(Qe,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$e=o(Qe,"CODE",{});var Es=r($e);Ot=c(Es,"prepare_for_model"),Es.forEach(s),St=c(Qe," method."),Qe.forEach(s),Xe.forEach(s),Vt=l(f),j=o(f,"DIV",{class:!0});var Ye=r(j);g(ee.$$.fragment,Ye),Ut=l(Ye),ye=o(Ye,"P",{});var $s=r(ye);Wt=c($s,"Normalize tokens in a Tweet"),$s.forEach(s),Ye.forEach(s),Ht=l(f),I=o(f,"DIV",{class:!0});var Ze=r(I);g(te.$$.fragment,Ze),Xt=l(Ze),ze=o(Ze,"P",{});var ys=r(ze);Qt=c(ys,"Normalize a raw Tweet"),ys.forEach(s),Ze.forEach(s),f.forEach(s),this.h()},h(){p(E,"name","hf:doc:metadata"),p(E,"content",JSON.stringify(Ps)),p(q,"id","bertweet"),p(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(q,"href","#bertweet"),p($,"class","relative group"),p(B,"id","overview"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#overview"),p(y,"class","relative group"),p(F,"href","https://www.aclweb.org/anthology/2020.emnlp-demos.2.pdf"),p(F,"rel","nofollow"),p(S,"href","https://huggingface.co/dqnguyen"),p(S,"rel","nofollow"),p(V,"href","https://github.com/VinAIResearch/BERTweet"),p(V,"rel","nofollow"),p(x,"id","transformers.BertweetTokenizer"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#transformers.BertweetTokenizer"),p(z,"class","relative group"),p(re,"href","/docs/transformers/pr_16368/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(A,"class","docstring"),p(T,"class","docstring"),p(R,"class","docstring"),p(D,"class","docstring"),p(P,"class","docstring"),p(j,"class","docstring"),p(I,"class","docstring"),p(d,"class","docstring")},m(t,m){e(document.head,E),h(t,qe,m),h(t,$,m),e($,q),e(q,pe),_(C,pe,null),e($,Je),e($,de),e(de,Ge),h(t,Be,m),h(t,y,m),e(y,B),e(B,me),_(M,me,null),e(y,Ke),e(y,fe),e(fe,et),h(t,Le,m),h(t,L,m),e(L,tt),e(L,F),e(F,st),e(L,nt),h(t,xe,m),h(t,se,m),e(se,ot),h(t,Ae,m),h(t,ne,m),e(ne,he),e(he,rt),h(t,Re,m),h(t,oe,m),e(oe,at),h(t,De,m),_(O,t,m),h(t,Pe,m),h(t,b,m),e(b,it),e(b,S),e(S,lt),e(b,ct),e(b,V),e(V,pt),e(b,dt),h(t,je,m),h(t,z,m),e(z,x),e(x,ue),_(U,ue,null),e(z,mt),e(z,ge),e(ge,ft),h(t,Ie,m),h(t,d,m),_(W,d,null),e(d,ht),e(d,_e),e(_e,ut),e(d,gt),e(d,H),e(H,_t),e(H,re),e(re,kt),e(H,wt),e(d,vt),e(d,A),_(X,A,null),e(A,bt),e(A,ke),e(ke,Tt),e(d,Et),e(d,T),_(Q,T,null),e(T,$t),e(T,we),e(we,yt),e(T,zt),e(T,Y),e(Y,ae),e(ae,qt),e(ae,ve),e(ve,Bt),e(Y,Lt),e(Y,ie),e(ie,xt),e(ie,be),e(be,At),e(d,Rt),e(d,R),_(Z,R,null),e(R,Dt),e(R,Te),e(Te,Pt),e(d,jt),e(d,D),_(J,D,null),e(D,It),e(D,Ee),e(Ee,Nt),e(d,Ct),e(d,P),_(G,P,null),e(P,Mt),e(P,K),e(K,Ft),e(K,$e),e($e,Ot),e(K,St),e(d,Vt),e(d,j),_(ee,j,null),e(j,Ut),e(j,ye),e(ye,Wt),e(d,Ht),e(d,I),_(te,I,null),e(I,Xt),e(I,ze),e(ze,Qt),Ne=!0},p:xs,i(t){Ne||(k(C.$$.fragment,t),k(M.$$.fragment,t),k(O.$$.fragment,t),k(U.$$.fragment,t),k(W.$$.fragment,t),k(X.$$.fragment,t),k(Q.$$.fragment,t),k(Z.$$.fragment,t),k(J.$$.fragment,t),k(G.$$.fragment,t),k(ee.$$.fragment,t),k(te.$$.fragment,t),Ne=!0)},o(t){w(C.$$.fragment,t),w(M.$$.fragment,t),w(O.$$.fragment,t),w(U.$$.fragment,t),w(W.$$.fragment,t),w(X.$$.fragment,t),w(Q.$$.fragment,t),w(Z.$$.fragment,t),w(J.$$.fragment,t),w(G.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ne=!1},d(t){s(E),t&&s(qe),t&&s($),v(C),t&&s(Be),t&&s(y),v(M),t&&s(Le),t&&s(L),t&&s(xe),t&&s(se),t&&s(Ae),t&&s(ne),t&&s(Re),t&&s(oe),t&&s(De),v(O,t),t&&s(Pe),t&&s(b),t&&s(je),t&&s(z),v(U),t&&s(Ie),t&&s(d),v(W),v(X),v(Q),v(Z),v(J),v(G),v(ee),v(te)}}}const Ps={local:"bertweet",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertweetTokenizer",title:"BertweetTokenizer"}],title:"BERTweet"};function js(Gt){return As(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fs extends zs{constructor(E){super();qs(this,E,js,Ds,Bs,{})}}export{Fs as default,Ps as metadata};
