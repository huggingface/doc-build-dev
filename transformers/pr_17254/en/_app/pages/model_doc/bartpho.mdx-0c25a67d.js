import{S as to,i as oo,s as so,e as s,k as d,w as B,t as l,M as no,c as n,d as t,m as c,a as r,x as A,h as p,b as h,F as o,g as i,y as $,L as ro,q as x,o as E,B as j,v as ao}from"../../chunks/vendor-6b77c823.js";import{D as Zt}from"../../chunks/Docstring-1088f2fb.js";import{C as eo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ue}from"../../chunks/IconCopyLink-7a11ce68.js";function io(zt){let f,fe,g,T,ne,R,Ve,re,We,ge,k,w,ae,F,Oe,ie,Xe,ke,q,He,P,Ge,Qe,_e,H,Je,be,G,le,Ke,ve,Q,Ye,Te,M,we,J,Ze,qe,K,N,et,Y,tt,ot,ye,S,ze,Z,pe,st,Be,u,nt,L,rt,at,D,it,lt,Ae,_,y,he,C,pt,de,ht,$e,b,I,dt,U,ct,ee,mt,ut,xe,v,z,ce,V,ft,me,gt,Ee,m,W,kt,O,_t,ue,bt,vt,Tt,X,wt,te,qt,yt,je;return R=new Ue({}),F=new Ue({}),M=new eo({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bartpho = AutoModel.from_pretrained("vinai/bartpho-syllable")

tokenizer = AutoTokenizer.from_pretrained("vinai/bartpho-syllable")

line = "Ch\xFAng t\xF4i l\xE0 nh\u1EEFng nghi\xEAn c\u1EE9u vi\xEAn."

input_ids = tokenizer(line, return_tensors="pt")

with torch.no_grad():
    features = bartpho(**input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
from transformers import TFAutoModel

bartpho = TFAutoModel.from_pretrained("vinai/bartpho-syllable")
input_ids = tokenizer(line, return_tensors="tf")
features = bartpho(**input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;Ch\xFAng t\xF4i l\xE0 nh\u1EEFng nghi\xEAn c\u1EE9u vi\xEAn.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = bartpho(**input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>features = bartpho(**input_ids)`}}),S=new eo({props:{code:`from transformers import MBartForConditionalGeneration

bartpho = MBartForConditionalGeneration.from_pretrained("vinai/bartpho-syllable")
TXT = "Ch\xFAng t\xF4i l\xE0 <mask> nghi\xEAn c\u1EE9u vi\xEAn."
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = bartpho(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)
print(tokenizer.decode(predictions).split())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;Ch\xFAng t\xF4i l\xE0 &lt;mask&gt; nghi\xEAn c\u1EE9u vi\xEAn.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = bartpho(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(predictions).split())`}}),C=new Ue({}),I=new Zt({props:{name:"class transformers.BartphoTokenizer",anchor:"transformers.BartphoTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartphoTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartphoTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartphoTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartphoTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartphoTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartphoTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartphoTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartphoTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.BartphoTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.BartphoTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/vr_17254/src/transformers/models/bartpho/tokenization_bartpho.py#L44"}}),V=new Ue({}),W=new Zt({props:{name:"class transformers.BartphoTokenizerFast",anchor:"transformers.BartphoTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartphoTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartphoTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartphoTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartphoTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartphoTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartphoTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartphoTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartphoTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartphoTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17254/src/transformers/models/bartpho/tokenization_bartpho_fast.py#L49"}}),{c(){f=s("meta"),fe=d(),g=s("h1"),T=s("a"),ne=s("span"),B(R.$$.fragment),Ve=d(),re=s("span"),We=l("BARTpho"),ge=d(),k=s("h2"),w=s("a"),ae=s("span"),B(F.$$.fragment),Oe=d(),ie=s("span"),Xe=l("Overview"),ke=d(),q=s("p"),He=l("The BARTpho model was proposed in "),P=s("a"),Ge=l("BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),Qe=l(" by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),_e=d(),H=s("p"),Je=l("The abstract from the paper is the following:"),be=d(),G=s("p"),le=s("em"),Ke=l(`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),ve=d(),Q=s("p"),Ye=l("Example of use:"),Te=d(),B(M.$$.fragment),we=d(),J=s("p"),Ze=l("Tips:"),qe=d(),K=s("ul"),N=s("li"),et=l(`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),Y=s("a"),tt=l("documentation of BART"),ot=l(`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),ye=d(),B(S.$$.fragment),ze=d(),Z=s("ul"),pe=s("li"),st=l("This implementation is only for tokenization."),Be=d(),u=s("p"),nt=l("This model was contributed by "),L=s("a"),rt=l("dqnguyen"),at=l(". The original code can be found "),D=s("a"),it=l("here"),lt=l("."),Ae=d(),_=s("h2"),y=s("a"),he=s("span"),B(C.$$.fragment),pt=d(),de=s("span"),ht=l("BartphoTokenizer"),$e=d(),b=s("div"),B(I.$$.fragment),dt=d(),U=s("p"),ct=l("This tokenizer inherits from "),ee=s("a"),mt=l("XLMRobertaTokenizer"),ut=l(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xe=d(),v=s("h2"),z=s("a"),ce=s("span"),B(V.$$.fragment),ft=d(),me=s("span"),gt=l("BartphoTokenizerFast"),Ee=d(),m=s("div"),B(W.$$.fragment),kt=d(),O=s("p"),_t=l("Construct a \u201Cfast\u201D BARTpho tokenizer (backed by HuggingFace\u2019s "),ue=s("em"),bt=l("tokenizers"),vt=l(" library)."),Tt=d(),X=s("p"),wt=l("This tokenizer inherits from "),te=s("a"),qt=l("XLMRobertaTokenizerFast"),yt=l(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),this.h()},l(e){const a=no('[data-svelte="svelte-1phssyn"]',document.head);f=n(a,"META",{name:!0,content:!0}),a.forEach(t),fe=c(e),g=n(e,"H1",{class:!0});var Re=r(g);T=n(Re,"A",{id:!0,class:!0,href:!0});var Bt=r(T);ne=n(Bt,"SPAN",{});var At=r(ne);A(R.$$.fragment,At),At.forEach(t),Bt.forEach(t),Ve=c(Re),re=n(Re,"SPAN",{});var $t=r(re);We=p($t,"BARTpho"),$t.forEach(t),Re.forEach(t),ge=c(e),k=n(e,"H2",{class:!0});var Fe=r(k);w=n(Fe,"A",{id:!0,class:!0,href:!0});var xt=r(w);ae=n(xt,"SPAN",{});var Et=r(ae);A(F.$$.fragment,Et),Et.forEach(t),xt.forEach(t),Oe=c(Fe),ie=n(Fe,"SPAN",{});var jt=r(ie);Xe=p(jt,"Overview"),jt.forEach(t),Fe.forEach(t),ke=c(e),q=n(e,"P",{});var Pe=r(q);He=p(Pe,"The BARTpho model was proposed in "),P=n(Pe,"A",{href:!0,rel:!0});var Rt=r(P);Ge=p(Rt,"BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),Rt.forEach(t),Qe=p(Pe," by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),Pe.forEach(t),_e=c(e),H=n(e,"P",{});var Ft=r(H);Je=p(Ft,"The abstract from the paper is the following:"),Ft.forEach(t),be=c(e),G=n(e,"P",{});var Pt=r(G);le=n(Pt,"EM",{});var Mt=r(le);Ke=p(Mt,`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),Mt.forEach(t),Pt.forEach(t),ve=c(e),Q=n(e,"P",{});var Nt=r(Q);Ye=p(Nt,"Example of use:"),Nt.forEach(t),Te=c(e),A(M.$$.fragment,e),we=c(e),J=n(e,"P",{});var St=r(J);Ze=p(St,"Tips:"),St.forEach(t),qe=c(e),K=n(e,"UL",{});var Lt=r(K);N=n(Lt,"LI",{});var Me=r(N);et=p(Me,`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),Y=n(Me,"A",{href:!0});var Dt=r(Y);tt=p(Dt,"documentation of BART"),Dt.forEach(t),ot=p(Me,`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Me.forEach(t),Lt.forEach(t),ye=c(e),A(S.$$.fragment,e),ze=c(e),Z=n(e,"UL",{});var Ct=r(Z);pe=n(Ct,"LI",{});var It=r(pe);st=p(It,"This implementation is only for tokenization."),It.forEach(t),Ct.forEach(t),Be=c(e),u=n(e,"P",{});var oe=r(u);nt=p(oe,"This model was contributed by "),L=n(oe,"A",{href:!0,rel:!0});var Ut=r(L);rt=p(Ut,"dqnguyen"),Ut.forEach(t),at=p(oe,". The original code can be found "),D=n(oe,"A",{href:!0,rel:!0});var Vt=r(D);it=p(Vt,"here"),Vt.forEach(t),lt=p(oe,"."),oe.forEach(t),Ae=c(e),_=n(e,"H2",{class:!0});var Ne=r(_);y=n(Ne,"A",{id:!0,class:!0,href:!0});var Wt=r(y);he=n(Wt,"SPAN",{});var Ot=r(he);A(C.$$.fragment,Ot),Ot.forEach(t),Wt.forEach(t),pt=c(Ne),de=n(Ne,"SPAN",{});var Xt=r(de);ht=p(Xt,"BartphoTokenizer"),Xt.forEach(t),Ne.forEach(t),$e=c(e),b=n(e,"DIV",{class:!0});var Se=r(b);A(I.$$.fragment,Se),dt=c(Se),U=n(Se,"P",{});var Le=r(U);ct=p(Le,"This tokenizer inherits from "),ee=n(Le,"A",{href:!0});var Ht=r(ee);mt=p(Ht,"XLMRobertaTokenizer"),Ht.forEach(t),ut=p(Le,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Le.forEach(t),Se.forEach(t),xe=c(e),v=n(e,"H2",{class:!0});var De=r(v);z=n(De,"A",{id:!0,class:!0,href:!0});var Gt=r(z);ce=n(Gt,"SPAN",{});var Qt=r(ce);A(V.$$.fragment,Qt),Qt.forEach(t),Gt.forEach(t),ft=c(De),me=n(De,"SPAN",{});var Jt=r(me);gt=p(Jt,"BartphoTokenizerFast"),Jt.forEach(t),De.forEach(t),Ee=c(e),m=n(e,"DIV",{class:!0});var se=r(m);A(W.$$.fragment,se),kt=c(se),O=n(se,"P",{});var Ce=r(O);_t=p(Ce,"Construct a \u201Cfast\u201D BARTpho tokenizer (backed by HuggingFace\u2019s "),ue=n(Ce,"EM",{});var Kt=r(ue);bt=p(Kt,"tokenizers"),Kt.forEach(t),vt=p(Ce," library)."),Ce.forEach(t),Tt=c(se),X=n(se,"P",{});var Ie=r(X);wt=p(Ie,"This tokenizer inherits from "),te=n(Ie,"A",{href:!0});var Yt=r(te);qt=p(Yt,"XLMRobertaTokenizerFast"),Yt.forEach(t),yt=p(Ie,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ie.forEach(t),se.forEach(t),this.h()},h(){h(f,"name","hf:doc:metadata"),h(f,"content",JSON.stringify(lo)),h(T,"id","bartpho"),h(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(T,"href","#bartpho"),h(g,"class","relative group"),h(w,"id","overview"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#overview"),h(k,"class","relative group"),h(P,"href","https://arxiv.org/abs/2109.09701"),h(P,"rel","nofollow"),h(Y,"href","bart"),h(L,"href","https://huggingface.co/dqnguyen"),h(L,"rel","nofollow"),h(D,"href","https://github.com/VinAIResearch/BARTpho"),h(D,"rel","nofollow"),h(y,"id","transformers.BartphoTokenizer"),h(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(y,"href","#transformers.BartphoTokenizer"),h(_,"class","relative group"),h(ee,"href","/docs/transformers/pr_17254/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer"),h(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(z,"id","transformers.BartphoTokenizerFast"),h(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(z,"href","#transformers.BartphoTokenizerFast"),h(v,"class","relative group"),h(te,"href","/docs/transformers/pr_17254/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),h(m,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,a){o(document.head,f),i(e,fe,a),i(e,g,a),o(g,T),o(T,ne),$(R,ne,null),o(g,Ve),o(g,re),o(re,We),i(e,ge,a),i(e,k,a),o(k,w),o(w,ae),$(F,ae,null),o(k,Oe),o(k,ie),o(ie,Xe),i(e,ke,a),i(e,q,a),o(q,He),o(q,P),o(P,Ge),o(q,Qe),i(e,_e,a),i(e,H,a),o(H,Je),i(e,be,a),i(e,G,a),o(G,le),o(le,Ke),i(e,ve,a),i(e,Q,a),o(Q,Ye),i(e,Te,a),$(M,e,a),i(e,we,a),i(e,J,a),o(J,Ze),i(e,qe,a),i(e,K,a),o(K,N),o(N,et),o(N,Y),o(Y,tt),o(N,ot),i(e,ye,a),$(S,e,a),i(e,ze,a),i(e,Z,a),o(Z,pe),o(pe,st),i(e,Be,a),i(e,u,a),o(u,nt),o(u,L),o(L,rt),o(u,at),o(u,D),o(D,it),o(u,lt),i(e,Ae,a),i(e,_,a),o(_,y),o(y,he),$(C,he,null),o(_,pt),o(_,de),o(de,ht),i(e,$e,a),i(e,b,a),$(I,b,null),o(b,dt),o(b,U),o(U,ct),o(U,ee),o(ee,mt),o(U,ut),i(e,xe,a),i(e,v,a),o(v,z),o(z,ce),$(V,ce,null),o(v,ft),o(v,me),o(me,gt),i(e,Ee,a),i(e,m,a),$(W,m,null),o(m,kt),o(m,O),o(O,_t),o(O,ue),o(ue,bt),o(O,vt),o(m,Tt),o(m,X),o(X,wt),o(X,te),o(te,qt),o(X,yt),je=!0},p:ro,i(e){je||(x(R.$$.fragment,e),x(F.$$.fragment,e),x(M.$$.fragment,e),x(S.$$.fragment,e),x(C.$$.fragment,e),x(I.$$.fragment,e),x(V.$$.fragment,e),x(W.$$.fragment,e),je=!0)},o(e){E(R.$$.fragment,e),E(F.$$.fragment,e),E(M.$$.fragment,e),E(S.$$.fragment,e),E(C.$$.fragment,e),E(I.$$.fragment,e),E(V.$$.fragment,e),E(W.$$.fragment,e),je=!1},d(e){t(f),e&&t(fe),e&&t(g),j(R),e&&t(ge),e&&t(k),j(F),e&&t(ke),e&&t(q),e&&t(_e),e&&t(H),e&&t(be),e&&t(G),e&&t(ve),e&&t(Q),e&&t(Te),j(M,e),e&&t(we),e&&t(J),e&&t(qe),e&&t(K),e&&t(ye),j(S,e),e&&t(ze),e&&t(Z),e&&t(Be),e&&t(u),e&&t(Ae),e&&t(_),j(C),e&&t($e),e&&t(b),j(I),e&&t(xe),e&&t(v),j(V),e&&t(Ee),e&&t(m),j(W)}}}const lo={local:"bartpho",sections:[{local:"overview",title:"Overview"},{local:"transformers.BartphoTokenizer",title:"BartphoTokenizer"},{local:"transformers.BartphoTokenizerFast",title:"BartphoTokenizerFast"}],title:"BARTpho"};function po(zt){return ao(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fo extends to{constructor(f){super();oo(this,f,po,io,so,{})}}export{fo as default,lo as metadata};
