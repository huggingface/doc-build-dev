import{S as Tn,i as Dn,s as Cn,e as o,k as p,w as m,t as i,M as An,c as r,d as s,m as d,a as n,x as u,h as l,b as a,F as t,g as c,y as f,L as Sn,q as g,o as _,B as k,v as In}from"../../chunks/vendor-6b77c823.js";import{D as q}from"../../chunks/Docstring-abef54e3.js";import{C as It}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as G}from"../../chunks/IconCopyLink-7a11ce68.js";function Fn(Xr){let y,Ft,X,B,it,le,zs,lt,Ts,Gt,j,pt,Ds,Cs,pe,As,Ss,Bt,x,R,dt,de,Is,ht,Fs,Rt,O,Gs,he,Bs,Rs,Ot,Ve,Os,Ht,We,Hs,Vt,Ue,ct,Vs,Wt,H,Ws,ce,Us,Ys,Ut,z,V,mt,me,Js,ut,Qs,Yt,T,ue,Zs,fe,Ks,Ye,eo,to,Jt,D,W,ft,ge,so,gt,oo,Qt,v,_e,ro,M,no,Je,ao,io,Qe,lo,po,ke,ho,co,mo,ve,uo,Ze,fo,go,_o,E,Pe,ko,_t,vo,Po,we,Ke,wo,kt,bo,No,et,$o,vt,Lo,Mo,U,be,qo,Pt,Eo,yo,Y,Ne,Xo,wt,jo,xo,J,$e,zo,Le,To,bt,Do,Co,Zt,C,Q,Nt,Me,Ao,$t,So,Kt,w,qe,Io,Ee,Fo,tt,Go,Bo,Ro,Lt,Oo,Ho,ye,es,A,Z,Mt,Xe,Vo,qt,Wo,ts,b,je,Uo,xe,Yo,st,Jo,Qo,Zo,Et,Ko,er,ze,ss,S,K,yt,Te,tr,Xt,sr,os,N,De,or,Ce,rr,ot,nr,ar,ir,jt,lr,pr,Ae,rs,I,ee,xt,Se,dr,zt,hr,ns,$,Ie,cr,Fe,mr,rt,ur,fr,gr,Tt,_r,kr,Ge,as,F,te,Dt,Be,vr,Ct,Pr,is,L,Re,wr,Oe,br,nt,Nr,$r,Lr,At,Mr,qr,He,ls;return le=new G({}),de=new G({}),me=new G({}),ue=new q({props:{name:"class transformers.XLMProphetNetConfig",anchor:"transformers.XLMProphetNetConfig",parameters:[{name:"activation_dropout",val:" = 0.1"},{name:"activation_function",val:" = 'gelu'"},{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"num_encoder_layers",val:" = 12"},{name:"num_encoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"num_decoder_layers",val:" = 12"},{name:"num_decoder_attention_heads",val:" = 16"},{name:"attention_dropout",val:" = 0.1"},{name:"dropout",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"init_std",val:" = 0.02"},{name:"is_encoder_decoder",val:" = True"},{name:"add_cross_attention",val:" = True"},{name:"decoder_start_token_id",val:" = 0"},{name:"ngram",val:" = 2"},{name:"num_buckets",val:" = 32"},{name:"relative_max_distance",val:" = 128"},{name:"disable_ngram_loss",val:" = False"},{name:"eps",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/configuration_xlm_prophetnet.py#L29"}}),ge=new G({}),_e=new q({props:{name:"class transformers.XLMProphetNetTokenizer",anchor:"transformers.XLMProphetNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '[SEP]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L57",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMProphetNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMProphetNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMProphetNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMProphetNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMProphetNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),Pe=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L314",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),be=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.XLMProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L292"}}),Ne=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L241",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$e=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L213",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Me=new G({}),qe=new q({props:{name:"class transformers.XLMProphetNetModel",anchor:"transformers.XLMProphetNetModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L86"}}),ye=new It({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetModel

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetModel.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state  # main stream hidden states
last_hidden_states_ngram = outputs.last_hidden_state_ngram  # predict hidden states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),Xe=new G({}),je=new q({props:{name:"class transformers.XLMProphetNetEncoder",anchor:"transformers.XLMProphetNetEncoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L38"}}),ze=new It({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetEncoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetEncoder.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetEncoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Te=new G({}),De=new q({props:{name:"class transformers.XLMProphetNetDecoder",anchor:"transformers.XLMProphetNetDecoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L61"}}),Ae=new It({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetDecoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetDecoder.from_pretrained(
    "patrickvonplaten/xprophetnet-large-uncased-standalone", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetDecoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Se=new G({}),Ie=new q({props:{name:"class transformers.XLMProphetNetForConditionalGeneration",anchor:"transformers.XLMProphetNetForConditionalGeneration",parameters:[{name:"config",val:": ProphetNetConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L112"}}),Ge=new It({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetForConditionalGeneration.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

logits_next_token = outputs.logits  # logits to predict next token as usual
logits_ngram_next_tokens = outputs.logits_ngram  # logits to predict 2nd, 3rd, ... next tokens`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),Be=new G({}),Re=new q({props:{name:"class transformers.XLMProphetNetForCausalLM",anchor:"transformers.XLMProphetNetForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L138"}}),He=new It({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForCausalLM
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetForCausalLM.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits

# Model can also be used with EncoderDecoder framework
from transformers import EncoderDecoderModel, XLMProphetNetTokenizer, XLMRobertaTokenizer
import torch

tokenizer_enc = XLMRobertaTokenizer.from_pretrained("xlm-roberta-large")
tokenizer_dec = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "xlm-roberta-large", "microsoft/xprophetnet-large-wiki100-cased"
)

ARTICLE = (
    "the us state department said wednesday it had received no "
    "formal word from bolivia that it was expelling the us ambassador there "
    "but said the charges made against him are \`\` baseless ."
)
input_ids = tokenizer_enc(ARTICLE, return_tensors="pt").input_ids
labels = tokenizer_dec("us rejects charges against its ambassador in bolivia", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-1], labels=labels[:, 1:])

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model can also be used with EncoderDecoder framework</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, XLMProphetNetTokenizer, XLMRobertaTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_enc = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_dec = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-roberta-large&quot;</span>, <span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the us state department said wednesday it had received no &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;formal word from bolivia that it was expelling the us ambassador there &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;but said the charges made against him are \`\` baseless .&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_enc(ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer_dec(<span class="hljs-string">&quot;us rejects charges against its ambassador in bolivia&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){y=o("meta"),Ft=p(),X=o("h1"),B=o("a"),it=o("span"),m(le.$$.fragment),zs=p(),lt=o("span"),Ts=i("XLM-ProphetNet"),Gt=p(),j=o("p"),pt=o("strong"),Ds=i("DISCLAIMER:"),Cs=i(" If you see something strange, file a "),pe=o("a"),As=i("Github Issue"),Ss=i(` and assign
@patrickvonplaten`),Bt=p(),x=o("h2"),R=o("a"),dt=o("span"),m(de.$$.fragment),Is=p(),ht=o("span"),Fs=i("Overview"),Rt=p(),O=o("p"),Gs=i("The XLM-ProphetNet model was proposed in "),he=o("a"),Bs=i("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Rs=i(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),Ot=p(),Ve=o("p"),Os=i(`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),Ht=p(),We=o("p"),Hs=i("The abstract from the paper is the following:"),Vt=p(),Ue=o("p"),ct=o("em"),Vs=i(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Wt=p(),H=o("p"),Ws=i("The Authors\u2019 code can be found "),ce=o("a"),Us=i("here"),Ys=i("."),Ut=p(),z=o("h2"),V=o("a"),mt=o("span"),m(me.$$.fragment),Js=p(),ut=o("span"),Qs=i("XLMProphetNetConfig"),Yt=p(),T=o("div"),m(ue.$$.fragment),Zs=p(),fe=o("p"),Ks=i("This class overrides "),Ye=o("a"),eo=i("ProphetNetConfig"),to=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Jt=p(),D=o("h2"),W=o("a"),ft=o("span"),m(ge.$$.fragment),so=p(),gt=o("span"),oo=i("XLMProphetNetTokenizer"),Qt=p(),v=o("div"),m(_e.$$.fragment),ro=p(),M=o("p"),no=i("Adapted from "),Je=o("a"),ao=i("RobertaTokenizer"),io=i(" and "),Qe=o("a"),lo=i("XLNetTokenizer"),po=i(`. Based on
`),ke=o("a"),ho=i("SentencePiece"),co=i("."),mo=p(),ve=o("p"),uo=i("This tokenizer inherits from "),Ze=o("a"),fo=i("PreTrainedTokenizer"),go=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_o=p(),E=o("div"),m(Pe.$$.fragment),ko=p(),_t=o("p"),vo=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),Po=p(),we=o("ul"),Ke=o("li"),wo=i("single sequence: "),kt=o("code"),bo=i("X [SEP]"),No=p(),et=o("li"),$o=i("pair of sequences: "),vt=o("code"),Lo=i("A [SEP] B [SEP]"),Mo=p(),U=o("div"),m(be.$$.fragment),qo=p(),Pt=o("p"),Eo=i("Converts a sequence of tokens (strings for sub-words) in a single string."),yo=p(),Y=o("div"),m(Ne.$$.fragment),Xo=p(),wt=o("p"),jo=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),xo=p(),J=o("div"),m($e.$$.fragment),zo=p(),Le=o("p"),To=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),bt=o("code"),Do=i("prepare_for_model"),Co=i(" method."),Zt=p(),C=o("h2"),Q=o("a"),Nt=o("span"),m(Me.$$.fragment),Ao=p(),$t=o("span"),So=i("XLMProphetNetModel"),Kt=p(),w=o("div"),m(qe.$$.fragment),Io=p(),Ee=o("p"),Fo=i("This class overrides "),tt=o("a"),Go=i("ProphetNetModel"),Bo=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ro=p(),Lt=o("p"),Oo=i("Example:"),Ho=p(),m(ye.$$.fragment),es=p(),A=o("h2"),Z=o("a"),Mt=o("span"),m(Xe.$$.fragment),Vo=p(),qt=o("span"),Wo=i("XLMProphetNetEncoder"),ts=p(),b=o("div"),m(je.$$.fragment),Uo=p(),xe=o("p"),Yo=i("This class overrides "),st=o("a"),Jo=i("ProphetNetEncoder"),Qo=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Zo=p(),Et=o("p"),Ko=i("Example:"),er=p(),m(ze.$$.fragment),ss=p(),S=o("h2"),K=o("a"),yt=o("span"),m(Te.$$.fragment),tr=p(),Xt=o("span"),sr=i("XLMProphetNetDecoder"),os=p(),N=o("div"),m(De.$$.fragment),or=p(),Ce=o("p"),rr=i("This class overrides "),ot=o("a"),nr=i("ProphetNetDecoder"),ar=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),ir=p(),jt=o("p"),lr=i("Example:"),pr=p(),m(Ae.$$.fragment),rs=p(),I=o("h2"),ee=o("a"),xt=o("span"),m(Se.$$.fragment),dr=p(),zt=o("span"),hr=i("XLMProphetNetForConditionalGeneration"),ns=p(),$=o("div"),m(Ie.$$.fragment),cr=p(),Fe=o("p"),mr=i("This class overrides "),rt=o("a"),ur=i("ProphetNetForConditionalGeneration"),fr=i(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),gr=p(),Tt=o("p"),_r=i("Example:"),kr=p(),m(Ge.$$.fragment),as=p(),F=o("h2"),te=o("a"),Dt=o("span"),m(Be.$$.fragment),vr=p(),Ct=o("span"),Pr=i("XLMProphetNetForCausalLM"),is=p(),L=o("div"),m(Re.$$.fragment),wr=p(),Oe=o("p"),br=i("This class overrides "),nt=o("a"),Nr=i("ProphetNetForCausalLM"),$r=i(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Lr=p(),At=o("p"),Mr=i("Example:"),qr=p(),m(He.$$.fragment),this.h()},l(e){const h=An('[data-svelte="svelte-1phssyn"]',document.head);y=r(h,"META",{name:!0,content:!0}),h.forEach(s),Ft=d(e),X=r(e,"H1",{class:!0});var ps=n(X);B=r(ps,"A",{id:!0,class:!0,href:!0});var jr=n(B);it=r(jr,"SPAN",{});var xr=n(it);u(le.$$.fragment,xr),xr.forEach(s),jr.forEach(s),zs=d(ps),lt=r(ps,"SPAN",{});var zr=n(lt);Ts=l(zr,"XLM-ProphetNet"),zr.forEach(s),ps.forEach(s),Gt=d(e),j=r(e,"P",{});var St=n(j);pt=r(St,"STRONG",{});var Tr=n(pt);Ds=l(Tr,"DISCLAIMER:"),Tr.forEach(s),Cs=l(St," If you see something strange, file a "),pe=r(St,"A",{href:!0,rel:!0});var Dr=n(pe);As=l(Dr,"Github Issue"),Dr.forEach(s),Ss=l(St,` and assign
@patrickvonplaten`),St.forEach(s),Bt=d(e),x=r(e,"H2",{class:!0});var ds=n(x);R=r(ds,"A",{id:!0,class:!0,href:!0});var Cr=n(R);dt=r(Cr,"SPAN",{});var Ar=n(dt);u(de.$$.fragment,Ar),Ar.forEach(s),Cr.forEach(s),Is=d(ds),ht=r(ds,"SPAN",{});var Sr=n(ht);Fs=l(Sr,"Overview"),Sr.forEach(s),ds.forEach(s),Rt=d(e),O=r(e,"P",{});var hs=n(O);Gs=l(hs,"The XLM-ProphetNet model was proposed in "),he=r(hs,"A",{href:!0,rel:!0});var Ir=n(he);Bs=l(Ir,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Ir.forEach(s),Rs=l(hs,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),hs.forEach(s),Ot=d(e),Ve=r(e,"P",{});var Fr=n(Ve);Os=l(Fr,`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),Fr.forEach(s),Ht=d(e),We=r(e,"P",{});var Gr=n(We);Hs=l(Gr,"The abstract from the paper is the following:"),Gr.forEach(s),Vt=d(e),Ue=r(e,"P",{});var Br=n(Ue);ct=r(Br,"EM",{});var Rr=n(ct);Vs=l(Rr,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Rr.forEach(s),Br.forEach(s),Wt=d(e),H=r(e,"P",{});var cs=n(H);Ws=l(cs,"The Authors\u2019 code can be found "),ce=r(cs,"A",{href:!0,rel:!0});var Or=n(ce);Us=l(Or,"here"),Or.forEach(s),Ys=l(cs,"."),cs.forEach(s),Ut=d(e),z=r(e,"H2",{class:!0});var ms=n(z);V=r(ms,"A",{id:!0,class:!0,href:!0});var Hr=n(V);mt=r(Hr,"SPAN",{});var Vr=n(mt);u(me.$$.fragment,Vr),Vr.forEach(s),Hr.forEach(s),Js=d(ms),ut=r(ms,"SPAN",{});var Wr=n(ut);Qs=l(Wr,"XLMProphetNetConfig"),Wr.forEach(s),ms.forEach(s),Yt=d(e),T=r(e,"DIV",{class:!0});var us=n(T);u(ue.$$.fragment,us),Zs=d(us),fe=r(us,"P",{});var fs=n(fe);Ks=l(fs,"This class overrides "),Ye=r(fs,"A",{href:!0});var Ur=n(Ye);eo=l(Ur,"ProphetNetConfig"),Ur.forEach(s),to=l(fs,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),fs.forEach(s),us.forEach(s),Jt=d(e),D=r(e,"H2",{class:!0});var gs=n(D);W=r(gs,"A",{id:!0,class:!0,href:!0});var Yr=n(W);ft=r(Yr,"SPAN",{});var Jr=n(ft);u(ge.$$.fragment,Jr),Jr.forEach(s),Yr.forEach(s),so=d(gs),gt=r(gs,"SPAN",{});var Qr=n(gt);oo=l(Qr,"XLMProphetNetTokenizer"),Qr.forEach(s),gs.forEach(s),Qt=d(e),v=r(e,"DIV",{class:!0});var P=n(v);u(_e.$$.fragment,P),ro=d(P),M=r(P,"P",{});var se=n(M);no=l(se,"Adapted from "),Je=r(se,"A",{href:!0});var Zr=n(Je);ao=l(Zr,"RobertaTokenizer"),Zr.forEach(s),io=l(se," and "),Qe=r(se,"A",{href:!0});var Kr=n(Qe);lo=l(Kr,"XLNetTokenizer"),Kr.forEach(s),po=l(se,`. Based on
`),ke=r(se,"A",{href:!0,rel:!0});var en=n(ke);ho=l(en,"SentencePiece"),en.forEach(s),co=l(se,"."),se.forEach(s),mo=d(P),ve=r(P,"P",{});var _s=n(ve);uo=l(_s,"This tokenizer inherits from "),Ze=r(_s,"A",{href:!0});var tn=n(Ze);fo=l(tn,"PreTrainedTokenizer"),tn.forEach(s),go=l(_s,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_s.forEach(s),_o=d(P),E=r(P,"DIV",{class:!0});var at=n(E);u(Pe.$$.fragment,at),ko=d(at),_t=r(at,"P",{});var sn=n(_t);vo=l(sn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),sn.forEach(s),Po=d(at),we=r(at,"UL",{});var ks=n(we);Ke=r(ks,"LI",{});var Er=n(Ke);wo=l(Er,"single sequence: "),kt=r(Er,"CODE",{});var on=n(kt);bo=l(on,"X [SEP]"),on.forEach(s),Er.forEach(s),No=d(ks),et=r(ks,"LI",{});var yr=n(et);$o=l(yr,"pair of sequences: "),vt=r(yr,"CODE",{});var rn=n(vt);Lo=l(rn,"A [SEP] B [SEP]"),rn.forEach(s),yr.forEach(s),ks.forEach(s),at.forEach(s),Mo=d(P),U=r(P,"DIV",{class:!0});var vs=n(U);u(be.$$.fragment,vs),qo=d(vs),Pt=r(vs,"P",{});var nn=n(Pt);Eo=l(nn,"Converts a sequence of tokens (strings for sub-words) in a single string."),nn.forEach(s),vs.forEach(s),yo=d(P),Y=r(P,"DIV",{class:!0});var Ps=n(Y);u(Ne.$$.fragment,Ps),Xo=d(Ps),wt=r(Ps,"P",{});var an=n(wt);jo=l(an,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),an.forEach(s),Ps.forEach(s),xo=d(P),J=r(P,"DIV",{class:!0});var ws=n(J);u($e.$$.fragment,ws),zo=d(ws),Le=r(ws,"P",{});var bs=n(Le);To=l(bs,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),bt=r(bs,"CODE",{});var ln=n(bt);Do=l(ln,"prepare_for_model"),ln.forEach(s),Co=l(bs," method."),bs.forEach(s),ws.forEach(s),P.forEach(s),Zt=d(e),C=r(e,"H2",{class:!0});var Ns=n(C);Q=r(Ns,"A",{id:!0,class:!0,href:!0});var pn=n(Q);Nt=r(pn,"SPAN",{});var dn=n(Nt);u(Me.$$.fragment,dn),dn.forEach(s),pn.forEach(s),Ao=d(Ns),$t=r(Ns,"SPAN",{});var hn=n($t);So=l(hn,"XLMProphetNetModel"),hn.forEach(s),Ns.forEach(s),Kt=d(e),w=r(e,"DIV",{class:!0});var oe=n(w);u(qe.$$.fragment,oe),Io=d(oe),Ee=r(oe,"P",{});var $s=n(Ee);Fo=l($s,"This class overrides "),tt=r($s,"A",{href:!0});var cn=n(tt);Go=l(cn,"ProphetNetModel"),cn.forEach(s),Bo=l($s,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),$s.forEach(s),Ro=d(oe),Lt=r(oe,"P",{});var mn=n(Lt);Oo=l(mn,"Example:"),mn.forEach(s),Ho=d(oe),u(ye.$$.fragment,oe),oe.forEach(s),es=d(e),A=r(e,"H2",{class:!0});var Ls=n(A);Z=r(Ls,"A",{id:!0,class:!0,href:!0});var un=n(Z);Mt=r(un,"SPAN",{});var fn=n(Mt);u(Xe.$$.fragment,fn),fn.forEach(s),un.forEach(s),Vo=d(Ls),qt=r(Ls,"SPAN",{});var gn=n(qt);Wo=l(gn,"XLMProphetNetEncoder"),gn.forEach(s),Ls.forEach(s),ts=d(e),b=r(e,"DIV",{class:!0});var re=n(b);u(je.$$.fragment,re),Uo=d(re),xe=r(re,"P",{});var Ms=n(xe);Yo=l(Ms,"This class overrides "),st=r(Ms,"A",{href:!0});var _n=n(st);Jo=l(_n,"ProphetNetEncoder"),_n.forEach(s),Qo=l(Ms,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ms.forEach(s),Zo=d(re),Et=r(re,"P",{});var kn=n(Et);Ko=l(kn,"Example:"),kn.forEach(s),er=d(re),u(ze.$$.fragment,re),re.forEach(s),ss=d(e),S=r(e,"H2",{class:!0});var qs=n(S);K=r(qs,"A",{id:!0,class:!0,href:!0});var vn=n(K);yt=r(vn,"SPAN",{});var Pn=n(yt);u(Te.$$.fragment,Pn),Pn.forEach(s),vn.forEach(s),tr=d(qs),Xt=r(qs,"SPAN",{});var wn=n(Xt);sr=l(wn,"XLMProphetNetDecoder"),wn.forEach(s),qs.forEach(s),os=d(e),N=r(e,"DIV",{class:!0});var ne=n(N);u(De.$$.fragment,ne),or=d(ne),Ce=r(ne,"P",{});var Es=n(Ce);rr=l(Es,"This class overrides "),ot=r(Es,"A",{href:!0});var bn=n(ot);nr=l(bn,"ProphetNetDecoder"),bn.forEach(s),ar=l(Es,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Es.forEach(s),ir=d(ne),jt=r(ne,"P",{});var Nn=n(jt);lr=l(Nn,"Example:"),Nn.forEach(s),pr=d(ne),u(Ae.$$.fragment,ne),ne.forEach(s),rs=d(e),I=r(e,"H2",{class:!0});var ys=n(I);ee=r(ys,"A",{id:!0,class:!0,href:!0});var $n=n(ee);xt=r($n,"SPAN",{});var Ln=n(xt);u(Se.$$.fragment,Ln),Ln.forEach(s),$n.forEach(s),dr=d(ys),zt=r(ys,"SPAN",{});var Mn=n(zt);hr=l(Mn,"XLMProphetNetForConditionalGeneration"),Mn.forEach(s),ys.forEach(s),ns=d(e),$=r(e,"DIV",{class:!0});var ae=n($);u(Ie.$$.fragment,ae),cr=d(ae),Fe=r(ae,"P",{});var Xs=n(Fe);mr=l(Xs,"This class overrides "),rt=r(Xs,"A",{href:!0});var qn=n(rt);ur=l(qn,"ProphetNetForConditionalGeneration"),qn.forEach(s),fr=l(Xs,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Xs.forEach(s),gr=d(ae),Tt=r(ae,"P",{});var En=n(Tt);_r=l(En,"Example:"),En.forEach(s),kr=d(ae),u(Ge.$$.fragment,ae),ae.forEach(s),as=d(e),F=r(e,"H2",{class:!0});var js=n(F);te=r(js,"A",{id:!0,class:!0,href:!0});var yn=n(te);Dt=r(yn,"SPAN",{});var Xn=n(Dt);u(Be.$$.fragment,Xn),Xn.forEach(s),yn.forEach(s),vr=d(js),Ct=r(js,"SPAN",{});var jn=n(Ct);Pr=l(jn,"XLMProphetNetForCausalLM"),jn.forEach(s),js.forEach(s),is=d(e),L=r(e,"DIV",{class:!0});var ie=n(L);u(Re.$$.fragment,ie),wr=d(ie),Oe=r(ie,"P",{});var xs=n(Oe);br=l(xs,"This class overrides "),nt=r(xs,"A",{href:!0});var xn=n(nt);Nr=l(xn,"ProphetNetForCausalLM"),xn.forEach(s),$r=l(xs,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),xs.forEach(s),Lr=d(ie),At=r(ie,"P",{});var zn=n(At);Mr=l(zn,"Example:"),zn.forEach(s),qr=d(ie),u(He.$$.fragment,ie),ie.forEach(s),this.h()},h(){a(y,"name","hf:doc:metadata"),a(y,"content",JSON.stringify(Gn)),a(B,"id","xlmprophetnet"),a(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(B,"href","#xlmprophetnet"),a(X,"class","relative group"),a(pe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),a(pe,"rel","nofollow"),a(R,"id","overview"),a(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(R,"href","#overview"),a(x,"class","relative group"),a(he,"href","https://arxiv.org/abs/2001.04063"),a(he,"rel","nofollow"),a(ce,"href","https://github.com/microsoft/ProphetNet"),a(ce,"rel","nofollow"),a(V,"id","transformers.XLMProphetNetConfig"),a(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(V,"href","#transformers.XLMProphetNetConfig"),a(z,"class","relative group"),a(Ye,"href","/docs/transformers/pr_33/en/model_doc/prophetnet#transformers.ProphetNetConfig"),a(T,"class","docstring"),a(W,"id","transformers.XLMProphetNetTokenizer"),a(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(W,"href","#transformers.XLMProphetNetTokenizer"),a(D,"class","relative group"),a(Je,"href","/docs/transformers/pr_33/en/model_doc/roberta#transformers.RobertaTokenizer"),a(Qe,"href","/docs/transformers/pr_33/en/model_doc/xlnet#transformers.XLNetTokenizer"),a(ke,"href","https://github.com/google/sentencepiece"),a(ke,"rel","nofollow"),a(Ze,"href","/docs/transformers/pr_33/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),a(E,"class","docstring"),a(U,"class","docstring"),a(Y,"class","docstring"),a(J,"class","docstring"),a(v,"class","docstring"),a(Q,"id","transformers.XLMProphetNetModel"),a(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(Q,"href","#transformers.XLMProphetNetModel"),a(C,"class","relative group"),a(tt,"href","/docs/transformers/pr_33/en/model_doc/prophetnet#transformers.ProphetNetModel"),a(w,"class","docstring"),a(Z,"id","transformers.XLMProphetNetEncoder"),a(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(Z,"href","#transformers.XLMProphetNetEncoder"),a(A,"class","relative group"),a(st,"href","/docs/transformers/pr_33/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),a(b,"class","docstring"),a(K,"id","transformers.XLMProphetNetDecoder"),a(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(K,"href","#transformers.XLMProphetNetDecoder"),a(S,"class","relative group"),a(ot,"href","/docs/transformers/pr_33/en/model_doc/prophetnet#transformers.ProphetNetDecoder"),a(N,"class","docstring"),a(ee,"id","transformers.XLMProphetNetForConditionalGeneration"),a(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(ee,"href","#transformers.XLMProphetNetForConditionalGeneration"),a(I,"class","relative group"),a(rt,"href","/docs/transformers/pr_33/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration"),a($,"class","docstring"),a(te,"id","transformers.XLMProphetNetForCausalLM"),a(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(te,"href","#transformers.XLMProphetNetForCausalLM"),a(F,"class","relative group"),a(nt,"href","/docs/transformers/pr_33/en/model_doc/prophetnet#transformers.ProphetNetForCausalLM"),a(L,"class","docstring")},m(e,h){t(document.head,y),c(e,Ft,h),c(e,X,h),t(X,B),t(B,it),f(le,it,null),t(X,zs),t(X,lt),t(lt,Ts),c(e,Gt,h),c(e,j,h),t(j,pt),t(pt,Ds),t(j,Cs),t(j,pe),t(pe,As),t(j,Ss),c(e,Bt,h),c(e,x,h),t(x,R),t(R,dt),f(de,dt,null),t(x,Is),t(x,ht),t(ht,Fs),c(e,Rt,h),c(e,O,h),t(O,Gs),t(O,he),t(he,Bs),t(O,Rs),c(e,Ot,h),c(e,Ve,h),t(Ve,Os),c(e,Ht,h),c(e,We,h),t(We,Hs),c(e,Vt,h),c(e,Ue,h),t(Ue,ct),t(ct,Vs),c(e,Wt,h),c(e,H,h),t(H,Ws),t(H,ce),t(ce,Us),t(H,Ys),c(e,Ut,h),c(e,z,h),t(z,V),t(V,mt),f(me,mt,null),t(z,Js),t(z,ut),t(ut,Qs),c(e,Yt,h),c(e,T,h),f(ue,T,null),t(T,Zs),t(T,fe),t(fe,Ks),t(fe,Ye),t(Ye,eo),t(fe,to),c(e,Jt,h),c(e,D,h),t(D,W),t(W,ft),f(ge,ft,null),t(D,so),t(D,gt),t(gt,oo),c(e,Qt,h),c(e,v,h),f(_e,v,null),t(v,ro),t(v,M),t(M,no),t(M,Je),t(Je,ao),t(M,io),t(M,Qe),t(Qe,lo),t(M,po),t(M,ke),t(ke,ho),t(M,co),t(v,mo),t(v,ve),t(ve,uo),t(ve,Ze),t(Ze,fo),t(ve,go),t(v,_o),t(v,E),f(Pe,E,null),t(E,ko),t(E,_t),t(_t,vo),t(E,Po),t(E,we),t(we,Ke),t(Ke,wo),t(Ke,kt),t(kt,bo),t(we,No),t(we,et),t(et,$o),t(et,vt),t(vt,Lo),t(v,Mo),t(v,U),f(be,U,null),t(U,qo),t(U,Pt),t(Pt,Eo),t(v,yo),t(v,Y),f(Ne,Y,null),t(Y,Xo),t(Y,wt),t(wt,jo),t(v,xo),t(v,J),f($e,J,null),t(J,zo),t(J,Le),t(Le,To),t(Le,bt),t(bt,Do),t(Le,Co),c(e,Zt,h),c(e,C,h),t(C,Q),t(Q,Nt),f(Me,Nt,null),t(C,Ao),t(C,$t),t($t,So),c(e,Kt,h),c(e,w,h),f(qe,w,null),t(w,Io),t(w,Ee),t(Ee,Fo),t(Ee,tt),t(tt,Go),t(Ee,Bo),t(w,Ro),t(w,Lt),t(Lt,Oo),t(w,Ho),f(ye,w,null),c(e,es,h),c(e,A,h),t(A,Z),t(Z,Mt),f(Xe,Mt,null),t(A,Vo),t(A,qt),t(qt,Wo),c(e,ts,h),c(e,b,h),f(je,b,null),t(b,Uo),t(b,xe),t(xe,Yo),t(xe,st),t(st,Jo),t(xe,Qo),t(b,Zo),t(b,Et),t(Et,Ko),t(b,er),f(ze,b,null),c(e,ss,h),c(e,S,h),t(S,K),t(K,yt),f(Te,yt,null),t(S,tr),t(S,Xt),t(Xt,sr),c(e,os,h),c(e,N,h),f(De,N,null),t(N,or),t(N,Ce),t(Ce,rr),t(Ce,ot),t(ot,nr),t(Ce,ar),t(N,ir),t(N,jt),t(jt,lr),t(N,pr),f(Ae,N,null),c(e,rs,h),c(e,I,h),t(I,ee),t(ee,xt),f(Se,xt,null),t(I,dr),t(I,zt),t(zt,hr),c(e,ns,h),c(e,$,h),f(Ie,$,null),t($,cr),t($,Fe),t(Fe,mr),t(Fe,rt),t(rt,ur),t(Fe,fr),t($,gr),t($,Tt),t(Tt,_r),t($,kr),f(Ge,$,null),c(e,as,h),c(e,F,h),t(F,te),t(te,Dt),f(Be,Dt,null),t(F,vr),t(F,Ct),t(Ct,Pr),c(e,is,h),c(e,L,h),f(Re,L,null),t(L,wr),t(L,Oe),t(Oe,br),t(Oe,nt),t(nt,Nr),t(Oe,$r),t(L,Lr),t(L,At),t(At,Mr),t(L,qr),f(He,L,null),ls=!0},p:Sn,i(e){ls||(g(le.$$.fragment,e),g(de.$$.fragment,e),g(me.$$.fragment,e),g(ue.$$.fragment,e),g(ge.$$.fragment,e),g(_e.$$.fragment,e),g(Pe.$$.fragment,e),g(be.$$.fragment,e),g(Ne.$$.fragment,e),g($e.$$.fragment,e),g(Me.$$.fragment,e),g(qe.$$.fragment,e),g(ye.$$.fragment,e),g(Xe.$$.fragment,e),g(je.$$.fragment,e),g(ze.$$.fragment,e),g(Te.$$.fragment,e),g(De.$$.fragment,e),g(Ae.$$.fragment,e),g(Se.$$.fragment,e),g(Ie.$$.fragment,e),g(Ge.$$.fragment,e),g(Be.$$.fragment,e),g(Re.$$.fragment,e),g(He.$$.fragment,e),ls=!0)},o(e){_(le.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(Pe.$$.fragment,e),_(be.$$.fragment,e),_(Ne.$$.fragment,e),_($e.$$.fragment,e),_(Me.$$.fragment,e),_(qe.$$.fragment,e),_(ye.$$.fragment,e),_(Xe.$$.fragment,e),_(je.$$.fragment,e),_(ze.$$.fragment,e),_(Te.$$.fragment,e),_(De.$$.fragment,e),_(Ae.$$.fragment,e),_(Se.$$.fragment,e),_(Ie.$$.fragment,e),_(Ge.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(He.$$.fragment,e),ls=!1},d(e){s(y),e&&s(Ft),e&&s(X),k(le),e&&s(Gt),e&&s(j),e&&s(Bt),e&&s(x),k(de),e&&s(Rt),e&&s(O),e&&s(Ot),e&&s(Ve),e&&s(Ht),e&&s(We),e&&s(Vt),e&&s(Ue),e&&s(Wt),e&&s(H),e&&s(Ut),e&&s(z),k(me),e&&s(Yt),e&&s(T),k(ue),e&&s(Jt),e&&s(D),k(ge),e&&s(Qt),e&&s(v),k(_e),k(Pe),k(be),k(Ne),k($e),e&&s(Zt),e&&s(C),k(Me),e&&s(Kt),e&&s(w),k(qe),k(ye),e&&s(es),e&&s(A),k(Xe),e&&s(ts),e&&s(b),k(je),k(ze),e&&s(ss),e&&s(S),k(Te),e&&s(os),e&&s(N),k(De),k(Ae),e&&s(rs),e&&s(I),k(Se),e&&s(ns),e&&s($),k(Ie),k(Ge),e&&s(as),e&&s(F),k(Be),e&&s(is),e&&s(L),k(Re),k(He)}}}const Gn={local:"xlmprophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMProphetNetConfig",title:"XLMProphetNetConfig"},{local:"transformers.XLMProphetNetTokenizer",title:"XLMProphetNetTokenizer"},{local:"transformers.XLMProphetNetModel",title:"XLMProphetNetModel"},{local:"transformers.XLMProphetNetEncoder",title:"XLMProphetNetEncoder"},{local:"transformers.XLMProphetNetDecoder",title:"XLMProphetNetDecoder"},{local:"transformers.XLMProphetNetForConditionalGeneration",title:"XLMProphetNetForConditionalGeneration"},{local:"transformers.XLMProphetNetForCausalLM",title:"XLMProphetNetForCausalLM"}],title:"XLM-ProphetNet"};function Bn(Xr){return In(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wn extends Tn{constructor(y){super();Dn(this,y,Bn,Fn,Cn,{})}}export{Wn as default,Gn as metadata};
