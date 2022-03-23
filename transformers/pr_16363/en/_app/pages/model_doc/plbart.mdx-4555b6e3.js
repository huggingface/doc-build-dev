import{S as Vd,i as Jd,s as Kd,e as n,k as l,w as m,t as r,M as Qd,c as s,d as o,m as c,a,x as f,h as i,b as d,F as e,g as h,y as g,q as _,o as b,B as k,v as Yd}from"../../chunks/vendor-6b77c823.js";import{T as _i}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-abef54e3.js";import{C as Q}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ue}from"../../chunks/IconCopyLink-7a11ce68.js";function Zd(me){let u,q,v,P,z;return{c(){u=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=s(T,"P",{});var y=a(u);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(y,"CODE",{});var j=a(v);P=i(j,"Module"),j.forEach(o),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,q),e(u,v),e(v,P),e(u,z)},d(T){T&&o(u)}}}function el(me){let u,q,v,P,z;return{c(){u=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=s(T,"P",{});var y=a(u);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(y,"CODE",{});var j=a(v);P=i(j,"Module"),j.forEach(o),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,q),e(u,v),e(v,P),e(u,z)},d(T){T&&o(u)}}}function tl(me){let u,q,v,P,z;return{c(){u=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=s(T,"P",{});var y=a(u);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(y,"CODE",{});var j=a(v);P=i(j,"Module"),j.forEach(o),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,q),e(u,v),e(v,P),e(u,z)},d(T){T&&o(u)}}}function ol(me){let u,q,v,P,z,T,y,j,es,nn,O,ro,ts,os,je,ns,ss,Fe,as,rs,sn,Y,fe,io,Ee,is,lo,ds,an,X,ls,Me,cs,ps,co,hs,us,rn,Et,ms,dn,Mt,po,fs,ln,G,gs,Se,_s,bs,Ae,ks,vs,cn,Z,ge,ho,Ne,Ts,uo,ys,pn,F,ws,mo,Ps,Ls,fo,zs,qs,go,Bs,$s,_o,xs,Cs,hn,_e,js,Ie,Fs,Es,un,R,Ms,Oe,bo,Ss,As,Ns,St,Is,Os,mn,At,ko,Ds,fn,De,gn,Nt,Xe,vo,Xs,Gs,ee,Rs,To,Ws,Hs,yo,Us,Vs,_n,Ge,bn,te,be,wo,Re,Js,Po,Ks,kn,x,We,Qs,oe,Ys,It,Zs,ea,He,ta,oa,na,ne,sa,Ot,aa,ra,Dt,ia,da,la,Lo,ca,pa,Ue,vn,se,ke,zo,Ve,ha,qo,ua,Tn,w,Je,ma,Bo,fa,ga,D,_a,Xt,ba,ka,Gt,va,Ta,Ke,ya,wa,Pa,Qe,La,$o,za,qa,Ba,xo,$a,xa,Ye,Ca,ve,Ze,ja,Co,Fa,Ea,N,et,Ma,tt,Sa,jo,Aa,Na,Ia,ot,nt,Fo,Oa,Da,Eo,Xa,Ga,st,Mo,Ra,Wa,So,Ha,Ua,Ao,Va,yn,ae,Te,No,at,Ja,Io,Ka,wn,S,rt,Qa,it,Ya,Rt,Za,er,tr,dt,or,lt,nr,sr,ar,E,ct,rr,re,ir,Wt,dr,lr,Oo,cr,pr,hr,ye,ur,Do,mr,fr,pt,Pn,ie,we,Xo,ht,gr,Go,_r,Ln,A,ut,br,mt,kr,Ht,vr,Tr,yr,ft,wr,gt,Pr,Lr,zr,M,_t,qr,de,Br,Ut,$r,xr,Ro,Cr,jr,Fr,Pe,Er,Wo,Mr,Sr,bt,zn,le,Le,Ho,kt,Ar,Uo,Nr,qn,C,vt,Ir,Vo,Or,Dr,Tt,Xr,Vt,Gr,Rr,Wr,yt,Hr,wt,Ur,Vr,Jr,L,Pt,Kr,ce,Qr,Jt,Yr,Zr,Jo,ei,ti,oi,ze,ni,Ko,si,ai,Lt,ri,zt,ii,Qo,di,li,qt,Bn,pe,qe,Yo,Bt,ci,Zo,pi,$n,he,$t,hi,W,xt,ui,en,mi,fi,Ct,xn;return T=new ue({}),Ee=new ue({}),Ne=new ue({}),De=new Q({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base", src_lang="en_XX", tgt_lang="python")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]
# forward pass
model(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;python&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),Ge=new Q({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
inputs = tokenizer(example_python_phrase, return_tensors="pt")
model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-python-en_XX")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),Re=new ue({}),We=new I({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/configuration_plbart.py#L32",parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
Vocabulary size of the PLBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartModel">PLBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.PLBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PLBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PLBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PLBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PLBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PLBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PLBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PLBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PLBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PLBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PLBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PLBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PLBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PLBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.PLBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PLBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PLBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ue=new Q({props:{code:`from transformers import PLBartModel, PLBartConfig

# Initializing a PLBART uclanlp/plbart-base style configuration
configuration = PLBartConfig()
# Initializing a model from the uclanlp/plbart-base style configuration
model = PLBartModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartModel, PLBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PLBART uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PLBartConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ve=new ue({}),Je=new I({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/tokenization_plbart.py#L75",parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.PLBartTokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.PLBartTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.PLBartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The start of sequence token.`,name:"bos_token"},{anchor:"transformers.PLBartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.PLBartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.PLBartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The cls token, which is a special token used as the first token for all tasks.`,name:"cls_token"},{anchor:"transformers.PLBartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PLBartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PLBartTokenizer.mask_token(str,",description:`<strong>mask_token(<code>str</code>,</strong> <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masking tasks. This
is only used in the <code>&quot;base&quot;</code> tokenizer type. For <code>&quot;multi&quot;</code> tokenizer, masking is never done for the
downstream tasks.`,name:"mask_token(str,"},{anchor:"transformers.PLBartTokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;base&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;base&quot;</code> or <code>&quot;multi&quot;</code>.`,name:"language_codes"},{anchor:"transformers.PLBartTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:<ul>
<li><code>enable_sampling</code>: Enable subword regularization.</li>
<li><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul></li>
<li><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</li>
</ul>`,name:"sp_model_kwargs"}]}}),Ye=new Q({props:{code:`from transformers import PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Ze=new I({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/tokenization_plbart.py#L422"}}),et=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/tokenization_plbart.py#L302",parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),at=new ue({}),rt=new I({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1110",parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ct=new I({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1136",parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new _i({props:{$$slots:{default:[Zd]},$$scope:{ctx:me}}}),pt=new Q({props:{code:`from transformers import PLBartTokenizer, PLBartModel
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartModel.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ht=new ue({}),ut=new I({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1226",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_t=new I({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1269",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new _i({props:{$$slots:{default:[el]},$$scope:{ctx:me}}}),bt=new Q({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-base")
tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")

# en_XX is the language symbol id <LID> for English
TXT = "<s> Is 0 the <mask> Fibonacci number ? </s> en_XX"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt").input_ids

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># en_XX is the language symbol id &lt;LID&gt; for English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;s&gt; Is 0 the &lt;mask&gt; Fibonacci number ? &lt;/s&gt; en_XX&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),kt=new ue({}),vt=new I({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1395",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pt=new I({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1408",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new _i({props:{$$slots:{default:[tl]},$$scope:{ctx:me}}}),Lt=new Q({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),zt=new Q({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),qt=new Q({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Bt=new ue({}),$t=new I({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1531"}}),xt=new I({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/plbart/modeling_plbart.py#L1562",parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PLBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PLBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PLBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PLBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ct=new Q({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForCausalLM.from_pretrained("uclanlp/plbart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){u=n("meta"),q=l(),v=n("h1"),P=n("a"),z=n("span"),m(T.$$.fragment),y=l(),j=n("span"),es=r("PLBart"),nn=l(),O=n("p"),ro=n("strong"),ts=r("DISCLAIMER:"),os=r(" If you see something strange, file a "),je=n("a"),ns=r("Github Issue"),ss=r(` and assign
`),Fe=n("a"),as=r("@gchhablani"),rs=r("."),sn=l(),Y=n("h2"),fe=n("a"),io=n("span"),m(Ee.$$.fragment),is=l(),lo=n("span"),ds=r("Overview of PLBart"),an=l(),X=n("p"),ls=r("The PLBART model was proposed in "),Me=n("a"),cs=r("Unified Pre-training for Program Understanding and Generation"),ps=r(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),co=n("code"),hs=r("plbart-base"),us=r(` has been trained using multilingual denoising task
on Java, Python and English.`),rn=l(),Et=n("p"),ms=r("According to the abstract"),dn=l(),Mt=n("p"),po=n("em"),fs=r(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),ln=l(),G=n("p"),gs=r("This model was contributed by "),Se=n("a"),_s=r("gchhablani"),bs=r(". The Authors\u2019 code can be found "),Ae=n("a"),ks=r("here"),vs=r("."),cn=l(),Z=n("h3"),ge=n("a"),ho=n("span"),m(Ne.$$.fragment),Ts=l(),uo=n("span"),ys=r("Training of PLBart"),pn=l(),F=n("p"),ws=r(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),mo=n("code"),Ps=r("X [eos, src_lang_code]"),Ls=r(" where "),fo=n("code"),zs=r("X"),qs=r(` is the source text. The
target text format is `),go=n("code"),Bs=r("[tgt_lang_code] X [eos]"),$s=r(". "),_o=n("code"),xs=r("bos"),Cs=r(" is never used."),hn=l(),_e=n("p"),js=r("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ie=n("a"),Fs=r("the paper"),Es=r(" to learn more about this."),un=l(),R=n("p"),Ms=r("In cases where the language code is needed, The regular "),Oe=n("a"),bo=n("strong"),Ss=r("call"),As=r("()"),Ns=r(` will encode source text format, and it should be wrapped
inside the context manager `),St=n("a"),Is=r("as_target_tokenizer()"),Os=r(" to encode target text format."),mn=l(),At=n("ul"),ko=n("li"),Ds=r("Supervised training"),fn=l(),m(De.$$.fragment),gn=l(),Nt=n("ul"),Xe=n("li"),vo=n("p"),Xs=r("Generation"),Gs=l(),ee=n("p"),Rs=r("While generating the target text set the "),To=n("code"),Ws=r("decoder_start_token_id"),Hs=r(` to the target language id. The following
example shows how to translate Python to English using the `),yo=n("code"),Us=r("uclanlp/plbart-python-en_XX"),Vs=r(" model."),_n=l(),m(Ge.$$.fragment),bn=l(),te=n("h2"),be=n("a"),wo=n("span"),m(Re.$$.fragment),Js=l(),Po=n("span"),Ks=r("PLBartConfig"),kn=l(),x=n("div"),m(We.$$.fragment),Qs=l(),oe=n("p"),Ys=r("This is the configuration class to store the configuration of a "),It=n("a"),Zs=r("PLBartModel"),ea=r(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),He=n("a"),ta=r("uclanlp/plbart-base"),oa=r(" architecture."),na=l(),ne=n("p"),sa=r("Configuration objects inherit from "),Ot=n("a"),aa=r("PretrainedConfig"),ra=r(` and can be used to control the model outputs. Read the
documentation from `),Dt=n("a"),ia=r("PretrainedConfig"),da=r(" for more information."),la=l(),Lo=n("p"),ca=r("Example:"),pa=l(),m(Ue.$$.fragment),vn=l(),se=n("h2"),ke=n("a"),zo=n("span"),m(Ve.$$.fragment),ha=l(),qo=n("span"),ua=r("PLBartTokenizer"),Tn=l(),w=n("div"),m(Je.$$.fragment),ma=l(),Bo=n("p"),fa=r("Construct an PLBART tokenizer."),ga=l(),D=n("p"),_a=r("Adapted from "),Xt=n("a"),ba=r("RobertaTokenizer"),ka=r(" and "),Gt=n("a"),va=r("XLNetTokenizer"),Ta=r(`. Based on
`),Ke=n("a"),ya=r("SentencePiece"),wa=r("."),Pa=l(),Qe=n("p"),La=r("The tokenization method is "),$o=n("code"),za=r("<tokens> <eos> <language code>"),qa=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Ba=l(),xo=n("p"),$a=r("Examples:"),xa=l(),m(Ye.$$.fragment),Ca=l(),ve=n("div"),m(Ze.$$.fragment),ja=l(),Co=n("p"),Fa=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Ea=l(),N=n("div"),m(et.$$.fragment),Ma=l(),tt=n("p"),Sa=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=n("code"),Aa=r("X"),Na=r(" represents the sequence:"),Ia=l(),ot=n("ul"),nt=n("li"),Fo=n("code"),Oa=r("input_ids"),Da=r(" (for encoder) "),Eo=n("code"),Xa=r("X [eos, src_lang_code]"),Ga=l(),st=n("li"),Mo=n("code"),Ra=r("decoder_input_ids"),Wa=r(": (for decoder) "),So=n("code"),Ha=r("X [eos, tgt_lang_code]"),Ua=l(),Ao=n("p"),Va=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),yn=l(),ae=n("h2"),Te=n("a"),No=n("span"),m(at.$$.fragment),Ja=l(),Io=n("span"),Ka=r("PLBartModel"),wn=l(),S=n("div"),m(rt.$$.fragment),Qa=l(),it=n("p"),Ya=r(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Rt=n("a"),Za=r("PreTrainedModel"),er=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tr=l(),dt=n("p"),or=r("This model is also a PyTorch "),lt=n("a"),nr=r("torch.nn.Module"),sr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ar=l(),E=n("div"),m(ct.$$.fragment),rr=l(),re=n("p"),ir=r("The "),Wt=n("a"),dr=r("PLBartModel"),lr=r(" forward method, overrides the "),Oo=n("code"),cr=r("__call__"),pr=r(" special method."),hr=l(),m(ye.$$.fragment),ur=l(),Do=n("p"),mr=r("Example:"),fr=l(),m(pt.$$.fragment),Pn=l(),ie=n("h2"),we=n("a"),Xo=n("span"),m(ht.$$.fragment),gr=l(),Go=n("span"),_r=r("PLBartForConditionalGeneration"),Ln=l(),A=n("div"),m(ut.$$.fragment),br=l(),mt=n("p"),kr=r(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Ht=n("a"),vr=r("PreTrainedModel"),Tr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yr=l(),ft=n("p"),wr=r("This model is also a PyTorch "),gt=n("a"),Pr=r("torch.nn.Module"),Lr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=l(),M=n("div"),m(_t.$$.fragment),qr=l(),de=n("p"),Br=r("The "),Ut=n("a"),$r=r("PLBartForConditionalGeneration"),xr=r(" forward method, overrides the "),Ro=n("code"),Cr=r("__call__"),jr=r(" special method."),Fr=l(),m(Pe.$$.fragment),Er=l(),Wo=n("p"),Mr=r("Mask-filling example:"),Sr=l(),m(bt.$$.fragment),zn=l(),le=n("h2"),Le=n("a"),Ho=n("span"),m(kt.$$.fragment),Ar=l(),Uo=n("span"),Nr=r("PLBartForSequenceClassification"),qn=l(),C=n("div"),m(vt.$$.fragment),Ir=l(),Vo=n("p"),Or=r(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Dr=l(),Tt=n("p"),Xr=r("This model inherits from "),Vt=n("a"),Gr=r("PreTrainedModel"),Rr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr=l(),yt=n("p"),Hr=r("This model is also a PyTorch "),wt=n("a"),Ur=r("torch.nn.Module"),Vr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr=l(),L=n("div"),m(Pt.$$.fragment),Kr=l(),ce=n("p"),Qr=r("The "),Jt=n("a"),Yr=r("PLBartForSequenceClassification"),Zr=r(" forward method, overrides the "),Jo=n("code"),ei=r("__call__"),ti=r(" special method."),oi=l(),m(ze.$$.fragment),ni=l(),Ko=n("p"),si=r("Example of single-label classification:"),ai=l(),m(Lt.$$.fragment),ri=l(),m(zt.$$.fragment),ii=l(),Qo=n("p"),di=r("Example of multi-label classification:"),li=l(),m(qt.$$.fragment),Bn=l(),pe=n("h2"),qe=n("a"),Yo=n("span"),m(Bt.$$.fragment),ci=l(),Zo=n("span"),pi=r("PLBartForCausalLM"),$n=l(),he=n("div"),m($t.$$.fragment),hi=l(),W=n("div"),m(xt.$$.fragment),ui=l(),en=n("p"),mi=r("Example:"),fi=l(),m(Ct.$$.fragment),this.h()},l(t){const p=Qd('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(o),q=c(t),v=s(t,"H1",{class:!0});var jt=a(v);P=s(jt,"A",{id:!0,class:!0,href:!0});var tn=a(P);z=s(tn,"SPAN",{});var on=a(z);f(T.$$.fragment,on),on.forEach(o),tn.forEach(o),y=c(jt),j=s(jt,"SPAN",{});var bi=a(j);es=i(bi,"PLBart"),bi.forEach(o),jt.forEach(o),nn=c(t),O=s(t,"P",{});var Ft=a(O);ro=s(Ft,"STRONG",{});var ki=a(ro);ts=i(ki,"DISCLAIMER:"),ki.forEach(o),os=i(Ft," If you see something strange, file a "),je=s(Ft,"A",{href:!0,rel:!0});var vi=a(je);ns=i(vi,"Github Issue"),vi.forEach(o),ss=i(Ft,` and assign
`),Fe=s(Ft,"A",{href:!0,rel:!0});var Ti=a(Fe);as=i(Ti,"@gchhablani"),Ti.forEach(o),rs=i(Ft,"."),Ft.forEach(o),sn=c(t),Y=s(t,"H2",{class:!0});var Cn=a(Y);fe=s(Cn,"A",{id:!0,class:!0,href:!0});var yi=a(fe);io=s(yi,"SPAN",{});var wi=a(io);f(Ee.$$.fragment,wi),wi.forEach(o),yi.forEach(o),is=c(Cn),lo=s(Cn,"SPAN",{});var Pi=a(lo);ds=i(Pi,"Overview of PLBart"),Pi.forEach(o),Cn.forEach(o),an=c(t),X=s(t,"P",{});var Kt=a(X);ls=i(Kt,"The PLBART model was proposed in "),Me=s(Kt,"A",{href:!0,rel:!0});var Li=a(Me);cs=i(Li,"Unified Pre-training for Program Understanding and Generation"),Li.forEach(o),ps=i(Kt,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),co=s(Kt,"CODE",{});var zi=a(co);hs=i(zi,"plbart-base"),zi.forEach(o),us=i(Kt,` has been trained using multilingual denoising task
on Java, Python and English.`),Kt.forEach(o),rn=c(t),Et=s(t,"P",{});var qi=a(Et);ms=i(qi,"According to the abstract"),qi.forEach(o),dn=c(t),Mt=s(t,"P",{});var Bi=a(Mt);po=s(Bi,"EM",{});var $i=a(po);fs=i($i,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),$i.forEach(o),Bi.forEach(o),ln=c(t),G=s(t,"P",{});var Qt=a(G);gs=i(Qt,"This model was contributed by "),Se=s(Qt,"A",{href:!0,rel:!0});var xi=a(Se);_s=i(xi,"gchhablani"),xi.forEach(o),bs=i(Qt,". The Authors\u2019 code can be found "),Ae=s(Qt,"A",{href:!0,rel:!0});var Ci=a(Ae);ks=i(Ci,"here"),Ci.forEach(o),vs=i(Qt,"."),Qt.forEach(o),cn=c(t),Z=s(t,"H3",{class:!0});var jn=a(Z);ge=s(jn,"A",{id:!0,class:!0,href:!0});var ji=a(ge);ho=s(ji,"SPAN",{});var Fi=a(ho);f(Ne.$$.fragment,Fi),Fi.forEach(o),ji.forEach(o),Ts=c(jn),uo=s(jn,"SPAN",{});var Ei=a(uo);ys=i(Ei,"Training of PLBart"),Ei.forEach(o),jn.forEach(o),pn=c(t),F=s(t,"P",{});var H=a(F);ws=i(H,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),mo=s(H,"CODE",{});var Mi=a(mo);Ps=i(Mi,"X [eos, src_lang_code]"),Mi.forEach(o),Ls=i(H," where "),fo=s(H,"CODE",{});var Si=a(fo);zs=i(Si,"X"),Si.forEach(o),qs=i(H,` is the source text. The
target text format is `),go=s(H,"CODE",{});var Ai=a(go);Bs=i(Ai,"[tgt_lang_code] X [eos]"),Ai.forEach(o),$s=i(H,". "),_o=s(H,"CODE",{});var Ni=a(_o);xs=i(Ni,"bos"),Ni.forEach(o),Cs=i(H," is never used."),H.forEach(o),hn=c(t),_e=s(t,"P",{});var Fn=a(_e);js=i(Fn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ie=s(Fn,"A",{href:!0,rel:!0});var Ii=a(Ie);Fs=i(Ii,"the paper"),Ii.forEach(o),Es=i(Fn," to learn more about this."),Fn.forEach(o),un=c(t),R=s(t,"P",{});var Yt=a(R);Ms=i(Yt,"In cases where the language code is needed, The regular "),Oe=s(Yt,"A",{href:!0});var gi=a(Oe);bo=s(gi,"STRONG",{});var Oi=a(bo);Ss=i(Oi,"call"),Oi.forEach(o),As=i(gi,"()"),gi.forEach(o),Ns=i(Yt,` will encode source text format, and it should be wrapped
inside the context manager `),St=s(Yt,"A",{href:!0});var Di=a(St);Is=i(Di,"as_target_tokenizer()"),Di.forEach(o),Os=i(Yt," to encode target text format."),Yt.forEach(o),mn=c(t),At=s(t,"UL",{});var Xi=a(At);ko=s(Xi,"LI",{});var Gi=a(ko);Ds=i(Gi,"Supervised training"),Gi.forEach(o),Xi.forEach(o),fn=c(t),f(De.$$.fragment,t),gn=c(t),Nt=s(t,"UL",{});var Ri=a(Nt);Xe=s(Ri,"LI",{});var En=a(Xe);vo=s(En,"P",{});var Wi=a(vo);Xs=i(Wi,"Generation"),Wi.forEach(o),Gs=c(En),ee=s(En,"P",{});var Zt=a(ee);Rs=i(Zt,"While generating the target text set the "),To=s(Zt,"CODE",{});var Hi=a(To);Ws=i(Hi,"decoder_start_token_id"),Hi.forEach(o),Hs=i(Zt,` to the target language id. The following
example shows how to translate Python to English using the `),yo=s(Zt,"CODE",{});var Ui=a(yo);Us=i(Ui,"uclanlp/plbart-python-en_XX"),Ui.forEach(o),Vs=i(Zt," model."),Zt.forEach(o),En.forEach(o),Ri.forEach(o),_n=c(t),f(Ge.$$.fragment,t),bn=c(t),te=s(t,"H2",{class:!0});var Mn=a(te);be=s(Mn,"A",{id:!0,class:!0,href:!0});var Vi=a(be);wo=s(Vi,"SPAN",{});var Ji=a(wo);f(Re.$$.fragment,Ji),Ji.forEach(o),Vi.forEach(o),Js=c(Mn),Po=s(Mn,"SPAN",{});var Ki=a(Po);Ks=i(Ki,"PLBartConfig"),Ki.forEach(o),Mn.forEach(o),kn=c(t),x=s(t,"DIV",{class:!0});var U=a(x);f(We.$$.fragment,U),Qs=c(U),oe=s(U,"P",{});var eo=a(oe);Ys=i(eo,"This is the configuration class to store the configuration of a "),It=s(eo,"A",{href:!0});var Qi=a(It);Zs=i(Qi,"PLBartModel"),Qi.forEach(o),ea=i(eo,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),He=s(eo,"A",{href:!0,rel:!0});var Yi=a(He);ta=i(Yi,"uclanlp/plbart-base"),Yi.forEach(o),oa=i(eo," architecture."),eo.forEach(o),na=c(U),ne=s(U,"P",{});var to=a(ne);sa=i(to,"Configuration objects inherit from "),Ot=s(to,"A",{href:!0});var Zi=a(Ot);aa=i(Zi,"PretrainedConfig"),Zi.forEach(o),ra=i(to,` and can be used to control the model outputs. Read the
documentation from `),Dt=s(to,"A",{href:!0});var ed=a(Dt);ia=i(ed,"PretrainedConfig"),ed.forEach(o),da=i(to," for more information."),to.forEach(o),la=c(U),Lo=s(U,"P",{});var td=a(Lo);ca=i(td,"Example:"),td.forEach(o),pa=c(U),f(Ue.$$.fragment,U),U.forEach(o),vn=c(t),se=s(t,"H2",{class:!0});var Sn=a(se);ke=s(Sn,"A",{id:!0,class:!0,href:!0});var od=a(ke);zo=s(od,"SPAN",{});var nd=a(zo);f(Ve.$$.fragment,nd),nd.forEach(o),od.forEach(o),ha=c(Sn),qo=s(Sn,"SPAN",{});var sd=a(qo);ua=i(sd,"PLBartTokenizer"),sd.forEach(o),Sn.forEach(o),Tn=c(t),w=s(t,"DIV",{class:!0});var B=a(w);f(Je.$$.fragment,B),ma=c(B),Bo=s(B,"P",{});var ad=a(Bo);fa=i(ad,"Construct an PLBART tokenizer."),ad.forEach(o),ga=c(B),D=s(B,"P",{});var Be=a(D);_a=i(Be,"Adapted from "),Xt=s(Be,"A",{href:!0});var rd=a(Xt);ba=i(rd,"RobertaTokenizer"),rd.forEach(o),ka=i(Be," and "),Gt=s(Be,"A",{href:!0});var id=a(Gt);va=i(id,"XLNetTokenizer"),id.forEach(o),Ta=i(Be,`. Based on
`),Ke=s(Be,"A",{href:!0,rel:!0});var dd=a(Ke);ya=i(dd,"SentencePiece"),dd.forEach(o),wa=i(Be,"."),Be.forEach(o),Pa=c(B),Qe=s(B,"P",{});var An=a(Qe);La=i(An,"The tokenization method is "),$o=s(An,"CODE",{});var ld=a($o);za=i(ld,"<tokens> <eos> <language code>"),ld.forEach(o),qa=i(An," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),An.forEach(o),Ba=c(B),xo=s(B,"P",{});var cd=a(xo);$a=i(cd,"Examples:"),cd.forEach(o),xa=c(B),f(Ye.$$.fragment,B),Ca=c(B),ve=s(B,"DIV",{class:!0});var Nn=a(ve);f(Ze.$$.fragment,Nn),ja=c(Nn),Co=s(Nn,"P",{});var pd=a(Co);Fa=i(pd,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),pd.forEach(o),Nn.forEach(o),Ea=c(B),N=s(B,"DIV",{class:!0});var $e=a(N);f(et.$$.fragment,$e),Ma=c($e),tt=s($e,"P",{});var In=a(tt);Sa=i(In,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=s(In,"CODE",{});var hd=a(jo);Aa=i(hd,"X"),hd.forEach(o),Na=i(In," represents the sequence:"),In.forEach(o),Ia=c($e),ot=s($e,"UL",{});var On=a(ot);nt=s(On,"LI",{});var Dn=a(nt);Fo=s(Dn,"CODE",{});var ud=a(Fo);Oa=i(ud,"input_ids"),ud.forEach(o),Da=i(Dn," (for encoder) "),Eo=s(Dn,"CODE",{});var md=a(Eo);Xa=i(md,"X [eos, src_lang_code]"),md.forEach(o),Dn.forEach(o),Ga=c(On),st=s(On,"LI",{});var Xn=a(st);Mo=s(Xn,"CODE",{});var fd=a(Mo);Ra=i(fd,"decoder_input_ids"),fd.forEach(o),Wa=i(Xn,": (for decoder) "),So=s(Xn,"CODE",{});var gd=a(So);Ha=i(gd,"X [eos, tgt_lang_code]"),gd.forEach(o),Xn.forEach(o),On.forEach(o),Ua=c($e),Ao=s($e,"P",{});var _d=a(Ao);Va=i(_d,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),_d.forEach(o),$e.forEach(o),B.forEach(o),yn=c(t),ae=s(t,"H2",{class:!0});var Gn=a(ae);Te=s(Gn,"A",{id:!0,class:!0,href:!0});var bd=a(Te);No=s(bd,"SPAN",{});var kd=a(No);f(at.$$.fragment,kd),kd.forEach(o),bd.forEach(o),Ja=c(Gn),Io=s(Gn,"SPAN",{});var vd=a(Io);Ka=i(vd,"PLBartModel"),vd.forEach(o),Gn.forEach(o),wn=c(t),S=s(t,"DIV",{class:!0});var xe=a(S);f(rt.$$.fragment,xe),Qa=c(xe),it=s(xe,"P",{});var Rn=a(it);Ya=i(Rn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Rt=s(Rn,"A",{href:!0});var Td=a(Rt);Za=i(Td,"PreTrainedModel"),Td.forEach(o),er=i(Rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rn.forEach(o),tr=c(xe),dt=s(xe,"P",{});var Wn=a(dt);or=i(Wn,"This model is also a PyTorch "),lt=s(Wn,"A",{href:!0,rel:!0});var yd=a(lt);nr=i(yd,"torch.nn.Module"),yd.forEach(o),sr=i(Wn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wn.forEach(o),ar=c(xe),E=s(xe,"DIV",{class:!0});var V=a(E);f(ct.$$.fragment,V),rr=c(V),re=s(V,"P",{});var oo=a(re);ir=i(oo,"The "),Wt=s(oo,"A",{href:!0});var wd=a(Wt);dr=i(wd,"PLBartModel"),wd.forEach(o),lr=i(oo," forward method, overrides the "),Oo=s(oo,"CODE",{});var Pd=a(Oo);cr=i(Pd,"__call__"),Pd.forEach(o),pr=i(oo," special method."),oo.forEach(o),hr=c(V),f(ye.$$.fragment,V),ur=c(V),Do=s(V,"P",{});var Ld=a(Do);mr=i(Ld,"Example:"),Ld.forEach(o),fr=c(V),f(pt.$$.fragment,V),V.forEach(o),xe.forEach(o),Pn=c(t),ie=s(t,"H2",{class:!0});var Hn=a(ie);we=s(Hn,"A",{id:!0,class:!0,href:!0});var zd=a(we);Xo=s(zd,"SPAN",{});var qd=a(Xo);f(ht.$$.fragment,qd),qd.forEach(o),zd.forEach(o),gr=c(Hn),Go=s(Hn,"SPAN",{});var Bd=a(Go);_r=i(Bd,"PLBartForConditionalGeneration"),Bd.forEach(o),Hn.forEach(o),Ln=c(t),A=s(t,"DIV",{class:!0});var Ce=a(A);f(ut.$$.fragment,Ce),br=c(Ce),mt=s(Ce,"P",{});var Un=a(mt);kr=i(Un,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Ht=s(Un,"A",{href:!0});var $d=a(Ht);vr=i($d,"PreTrainedModel"),$d.forEach(o),Tr=i(Un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Un.forEach(o),yr=c(Ce),ft=s(Ce,"P",{});var Vn=a(ft);wr=i(Vn,"This model is also a PyTorch "),gt=s(Vn,"A",{href:!0,rel:!0});var xd=a(gt);Pr=i(xd,"torch.nn.Module"),xd.forEach(o),Lr=i(Vn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vn.forEach(o),zr=c(Ce),M=s(Ce,"DIV",{class:!0});var J=a(M);f(_t.$$.fragment,J),qr=c(J),de=s(J,"P",{});var no=a(de);Br=i(no,"The "),Ut=s(no,"A",{href:!0});var Cd=a(Ut);$r=i(Cd,"PLBartForConditionalGeneration"),Cd.forEach(o),xr=i(no," forward method, overrides the "),Ro=s(no,"CODE",{});var jd=a(Ro);Cr=i(jd,"__call__"),jd.forEach(o),jr=i(no," special method."),no.forEach(o),Fr=c(J),f(Pe.$$.fragment,J),Er=c(J),Wo=s(J,"P",{});var Fd=a(Wo);Mr=i(Fd,"Mask-filling example:"),Fd.forEach(o),Sr=c(J),f(bt.$$.fragment,J),J.forEach(o),Ce.forEach(o),zn=c(t),le=s(t,"H2",{class:!0});var Jn=a(le);Le=s(Jn,"A",{id:!0,class:!0,href:!0});var Ed=a(Le);Ho=s(Ed,"SPAN",{});var Md=a(Ho);f(kt.$$.fragment,Md),Md.forEach(o),Ed.forEach(o),Ar=c(Jn),Uo=s(Jn,"SPAN",{});var Sd=a(Uo);Nr=i(Sd,"PLBartForSequenceClassification"),Sd.forEach(o),Jn.forEach(o),qn=c(t),C=s(t,"DIV",{class:!0});var K=a(C);f(vt.$$.fragment,K),Ir=c(K),Vo=s(K,"P",{});var Ad=a(Vo);Or=i(Ad,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Ad.forEach(o),Dr=c(K),Tt=s(K,"P",{});var Kn=a(Tt);Xr=i(Kn,"This model inherits from "),Vt=s(Kn,"A",{href:!0});var Nd=a(Vt);Gr=i(Nd,"PreTrainedModel"),Nd.forEach(o),Rr=i(Kn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kn.forEach(o),Wr=c(K),yt=s(K,"P",{});var Qn=a(yt);Hr=i(Qn,"This model is also a PyTorch "),wt=s(Qn,"A",{href:!0,rel:!0});var Id=a(wt);Ur=i(Id,"torch.nn.Module"),Id.forEach(o),Vr=i(Qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn.forEach(o),Jr=c(K),L=s(K,"DIV",{class:!0});var $=a(L);f(Pt.$$.fragment,$),Kr=c($),ce=s($,"P",{});var so=a(ce);Qr=i(so,"The "),Jt=s(so,"A",{href:!0});var Od=a(Jt);Yr=i(Od,"PLBartForSequenceClassification"),Od.forEach(o),Zr=i(so," forward method, overrides the "),Jo=s(so,"CODE",{});var Dd=a(Jo);ei=i(Dd,"__call__"),Dd.forEach(o),ti=i(so," special method."),so.forEach(o),oi=c($),f(ze.$$.fragment,$),ni=c($),Ko=s($,"P",{});var Xd=a(Ko);si=i(Xd,"Example of single-label classification:"),Xd.forEach(o),ai=c($),f(Lt.$$.fragment,$),ri=c($),f(zt.$$.fragment,$),ii=c($),Qo=s($,"P",{});var Gd=a(Qo);di=i(Gd,"Example of multi-label classification:"),Gd.forEach(o),li=c($),f(qt.$$.fragment,$),$.forEach(o),K.forEach(o),Bn=c(t),pe=s(t,"H2",{class:!0});var Yn=a(pe);qe=s(Yn,"A",{id:!0,class:!0,href:!0});var Rd=a(qe);Yo=s(Rd,"SPAN",{});var Wd=a(Yo);f(Bt.$$.fragment,Wd),Wd.forEach(o),Rd.forEach(o),ci=c(Yn),Zo=s(Yn,"SPAN",{});var Hd=a(Zo);pi=i(Hd,"PLBartForCausalLM"),Hd.forEach(o),Yn.forEach(o),$n=c(t),he=s(t,"DIV",{class:!0});var Zn=a(he);f($t.$$.fragment,Zn),hi=c(Zn),W=s(Zn,"DIV",{class:!0});var ao=a(W);f(xt.$$.fragment,ao),ui=c(ao),en=s(ao,"P",{});var Ud=a(en);mi=i(Ud,"Example:"),Ud.forEach(o),fi=c(ao),f(Ct.$$.fragment,ao),ao.forEach(o),Zn.forEach(o),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(nl)),d(P,"id","plbart"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#plbart"),d(v,"class","relative group"),d(je,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),d(je,"rel","nofollow"),d(Fe,"href","https://www.github.com/gchhablani"),d(Fe,"rel","nofollow"),d(fe,"id","overview-of-plbart"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#overview-of-plbart"),d(Y,"class","relative group"),d(Me,"href","https://arxiv.org/abs/2103.06333"),d(Me,"rel","nofollow"),d(Se,"href","https://huggingface.co/gchhablani"),d(Se,"rel","nofollow"),d(Ae,"href","https://github.com/wasiahmad/PLBART"),d(Ae,"rel","nofollow"),d(ge,"id","training-of-plbart"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#training-of-plbart"),d(Z,"class","relative group"),d(Ie,"href","https://arxiv.org/abs/2103.06333"),d(Ie,"rel","nofollow"),d(Oe,"href","/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(St,"href","/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),d(be,"id","transformers.PLBartConfig"),d(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(be,"href","#transformers.PLBartConfig"),d(te,"class","relative group"),d(It,"href","/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartModel"),d(He,"href","https://huggingface.co/uclanlp/plbart-base"),d(He,"rel","nofollow"),d(Ot,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),d(Dt,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),d(x,"class","docstring"),d(ke,"id","transformers.PLBartTokenizer"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#transformers.PLBartTokenizer"),d(se,"class","relative group"),d(Xt,"href","/docs/transformers/pr_16363/en/model_doc/roberta#transformers.RobertaTokenizer"),d(Gt,"href","/docs/transformers/pr_16363/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(Ke,"href","https://github.com/google/sentencepiece"),d(Ke,"rel","nofollow"),d(ve,"class","docstring"),d(N,"class","docstring"),d(w,"class","docstring"),d(Te,"id","transformers.PLBartModel"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.PLBartModel"),d(ae,"class","relative group"),d(Rt,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),d(lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lt,"rel","nofollow"),d(Wt,"href","/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartModel"),d(E,"class","docstring"),d(S,"class","docstring"),d(we,"id","transformers.PLBartForConditionalGeneration"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#transformers.PLBartForConditionalGeneration"),d(ie,"class","relative group"),d(Ht,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),d(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(gt,"rel","nofollow"),d(Ut,"href","/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),d(M,"class","docstring"),d(A,"class","docstring"),d(Le,"id","transformers.PLBartForSequenceClassification"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.PLBartForSequenceClassification"),d(le,"class","relative group"),d(Vt,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(Jt,"href","/docs/transformers/pr_16363/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),d(L,"class","docstring"),d(C,"class","docstring"),d(qe,"id","transformers.PLBartForCausalLM"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.PLBartForCausalLM"),d(pe,"class","relative group"),d(W,"class","docstring"),d(he,"class","docstring")},m(t,p){e(document.head,u),h(t,q,p),h(t,v,p),e(v,P),e(P,z),g(T,z,null),e(v,y),e(v,j),e(j,es),h(t,nn,p),h(t,O,p),e(O,ro),e(ro,ts),e(O,os),e(O,je),e(je,ns),e(O,ss),e(O,Fe),e(Fe,as),e(O,rs),h(t,sn,p),h(t,Y,p),e(Y,fe),e(fe,io),g(Ee,io,null),e(Y,is),e(Y,lo),e(lo,ds),h(t,an,p),h(t,X,p),e(X,ls),e(X,Me),e(Me,cs),e(X,ps),e(X,co),e(co,hs),e(X,us),h(t,rn,p),h(t,Et,p),e(Et,ms),h(t,dn,p),h(t,Mt,p),e(Mt,po),e(po,fs),h(t,ln,p),h(t,G,p),e(G,gs),e(G,Se),e(Se,_s),e(G,bs),e(G,Ae),e(Ae,ks),e(G,vs),h(t,cn,p),h(t,Z,p),e(Z,ge),e(ge,ho),g(Ne,ho,null),e(Z,Ts),e(Z,uo),e(uo,ys),h(t,pn,p),h(t,F,p),e(F,ws),e(F,mo),e(mo,Ps),e(F,Ls),e(F,fo),e(fo,zs),e(F,qs),e(F,go),e(go,Bs),e(F,$s),e(F,_o),e(_o,xs),e(F,Cs),h(t,hn,p),h(t,_e,p),e(_e,js),e(_e,Ie),e(Ie,Fs),e(_e,Es),h(t,un,p),h(t,R,p),e(R,Ms),e(R,Oe),e(Oe,bo),e(bo,Ss),e(Oe,As),e(R,Ns),e(R,St),e(St,Is),e(R,Os),h(t,mn,p),h(t,At,p),e(At,ko),e(ko,Ds),h(t,fn,p),g(De,t,p),h(t,gn,p),h(t,Nt,p),e(Nt,Xe),e(Xe,vo),e(vo,Xs),e(Xe,Gs),e(Xe,ee),e(ee,Rs),e(ee,To),e(To,Ws),e(ee,Hs),e(ee,yo),e(yo,Us),e(ee,Vs),h(t,_n,p),g(Ge,t,p),h(t,bn,p),h(t,te,p),e(te,be),e(be,wo),g(Re,wo,null),e(te,Js),e(te,Po),e(Po,Ks),h(t,kn,p),h(t,x,p),g(We,x,null),e(x,Qs),e(x,oe),e(oe,Ys),e(oe,It),e(It,Zs),e(oe,ea),e(oe,He),e(He,ta),e(oe,oa),e(x,na),e(x,ne),e(ne,sa),e(ne,Ot),e(Ot,aa),e(ne,ra),e(ne,Dt),e(Dt,ia),e(ne,da),e(x,la),e(x,Lo),e(Lo,ca),e(x,pa),g(Ue,x,null),h(t,vn,p),h(t,se,p),e(se,ke),e(ke,zo),g(Ve,zo,null),e(se,ha),e(se,qo),e(qo,ua),h(t,Tn,p),h(t,w,p),g(Je,w,null),e(w,ma),e(w,Bo),e(Bo,fa),e(w,ga),e(w,D),e(D,_a),e(D,Xt),e(Xt,ba),e(D,ka),e(D,Gt),e(Gt,va),e(D,Ta),e(D,Ke),e(Ke,ya),e(D,wa),e(w,Pa),e(w,Qe),e(Qe,La),e(Qe,$o),e($o,za),e(Qe,qa),e(w,Ba),e(w,xo),e(xo,$a),e(w,xa),g(Ye,w,null),e(w,Ca),e(w,ve),g(Ze,ve,null),e(ve,ja),e(ve,Co),e(Co,Fa),e(w,Ea),e(w,N),g(et,N,null),e(N,Ma),e(N,tt),e(tt,Sa),e(tt,jo),e(jo,Aa),e(tt,Na),e(N,Ia),e(N,ot),e(ot,nt),e(nt,Fo),e(Fo,Oa),e(nt,Da),e(nt,Eo),e(Eo,Xa),e(ot,Ga),e(ot,st),e(st,Mo),e(Mo,Ra),e(st,Wa),e(st,So),e(So,Ha),e(N,Ua),e(N,Ao),e(Ao,Va),h(t,yn,p),h(t,ae,p),e(ae,Te),e(Te,No),g(at,No,null),e(ae,Ja),e(ae,Io),e(Io,Ka),h(t,wn,p),h(t,S,p),g(rt,S,null),e(S,Qa),e(S,it),e(it,Ya),e(it,Rt),e(Rt,Za),e(it,er),e(S,tr),e(S,dt),e(dt,or),e(dt,lt),e(lt,nr),e(dt,sr),e(S,ar),e(S,E),g(ct,E,null),e(E,rr),e(E,re),e(re,ir),e(re,Wt),e(Wt,dr),e(re,lr),e(re,Oo),e(Oo,cr),e(re,pr),e(E,hr),g(ye,E,null),e(E,ur),e(E,Do),e(Do,mr),e(E,fr),g(pt,E,null),h(t,Pn,p),h(t,ie,p),e(ie,we),e(we,Xo),g(ht,Xo,null),e(ie,gr),e(ie,Go),e(Go,_r),h(t,Ln,p),h(t,A,p),g(ut,A,null),e(A,br),e(A,mt),e(mt,kr),e(mt,Ht),e(Ht,vr),e(mt,Tr),e(A,yr),e(A,ft),e(ft,wr),e(ft,gt),e(gt,Pr),e(ft,Lr),e(A,zr),e(A,M),g(_t,M,null),e(M,qr),e(M,de),e(de,Br),e(de,Ut),e(Ut,$r),e(de,xr),e(de,Ro),e(Ro,Cr),e(de,jr),e(M,Fr),g(Pe,M,null),e(M,Er),e(M,Wo),e(Wo,Mr),e(M,Sr),g(bt,M,null),h(t,zn,p),h(t,le,p),e(le,Le),e(Le,Ho),g(kt,Ho,null),e(le,Ar),e(le,Uo),e(Uo,Nr),h(t,qn,p),h(t,C,p),g(vt,C,null),e(C,Ir),e(C,Vo),e(Vo,Or),e(C,Dr),e(C,Tt),e(Tt,Xr),e(Tt,Vt),e(Vt,Gr),e(Tt,Rr),e(C,Wr),e(C,yt),e(yt,Hr),e(yt,wt),e(wt,Ur),e(yt,Vr),e(C,Jr),e(C,L),g(Pt,L,null),e(L,Kr),e(L,ce),e(ce,Qr),e(ce,Jt),e(Jt,Yr),e(ce,Zr),e(ce,Jo),e(Jo,ei),e(ce,ti),e(L,oi),g(ze,L,null),e(L,ni),e(L,Ko),e(Ko,si),e(L,ai),g(Lt,L,null),e(L,ri),g(zt,L,null),e(L,ii),e(L,Qo),e(Qo,di),e(L,li),g(qt,L,null),h(t,Bn,p),h(t,pe,p),e(pe,qe),e(qe,Yo),g(Bt,Yo,null),e(pe,ci),e(pe,Zo),e(Zo,pi),h(t,$n,p),h(t,he,p),g($t,he,null),e(he,hi),e(he,W),g(xt,W,null),e(W,ui),e(W,en),e(en,mi),e(W,fi),g(Ct,W,null),xn=!0},p(t,[p]){const jt={};p&2&&(jt.$$scope={dirty:p,ctx:t}),ye.$set(jt);const tn={};p&2&&(tn.$$scope={dirty:p,ctx:t}),Pe.$set(tn);const on={};p&2&&(on.$$scope={dirty:p,ctx:t}),ze.$set(on)},i(t){xn||(_(T.$$.fragment,t),_(Ee.$$.fragment,t),_(Ne.$$.fragment,t),_(De.$$.fragment,t),_(Ge.$$.fragment,t),_(Re.$$.fragment,t),_(We.$$.fragment,t),_(Ue.$$.fragment,t),_(Ve.$$.fragment,t),_(Je.$$.fragment,t),_(Ye.$$.fragment,t),_(Ze.$$.fragment,t),_(et.$$.fragment,t),_(at.$$.fragment,t),_(rt.$$.fragment,t),_(ct.$$.fragment,t),_(ye.$$.fragment,t),_(pt.$$.fragment,t),_(ht.$$.fragment,t),_(ut.$$.fragment,t),_(_t.$$.fragment,t),_(Pe.$$.fragment,t),_(bt.$$.fragment,t),_(kt.$$.fragment,t),_(vt.$$.fragment,t),_(Pt.$$.fragment,t),_(ze.$$.fragment,t),_(Lt.$$.fragment,t),_(zt.$$.fragment,t),_(qt.$$.fragment,t),_(Bt.$$.fragment,t),_($t.$$.fragment,t),_(xt.$$.fragment,t),_(Ct.$$.fragment,t),xn=!0)},o(t){b(T.$$.fragment,t),b(Ee.$$.fragment,t),b(Ne.$$.fragment,t),b(De.$$.fragment,t),b(Ge.$$.fragment,t),b(Re.$$.fragment,t),b(We.$$.fragment,t),b(Ue.$$.fragment,t),b(Ve.$$.fragment,t),b(Je.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),b(et.$$.fragment,t),b(at.$$.fragment,t),b(rt.$$.fragment,t),b(ct.$$.fragment,t),b(ye.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(ut.$$.fragment,t),b(_t.$$.fragment,t),b(Pe.$$.fragment,t),b(bt.$$.fragment,t),b(kt.$$.fragment,t),b(vt.$$.fragment,t),b(Pt.$$.fragment,t),b(ze.$$.fragment,t),b(Lt.$$.fragment,t),b(zt.$$.fragment,t),b(qt.$$.fragment,t),b(Bt.$$.fragment,t),b($t.$$.fragment,t),b(xt.$$.fragment,t),b(Ct.$$.fragment,t),xn=!1},d(t){o(u),t&&o(q),t&&o(v),k(T),t&&o(nn),t&&o(O),t&&o(sn),t&&o(Y),k(Ee),t&&o(an),t&&o(X),t&&o(rn),t&&o(Et),t&&o(dn),t&&o(Mt),t&&o(ln),t&&o(G),t&&o(cn),t&&o(Z),k(Ne),t&&o(pn),t&&o(F),t&&o(hn),t&&o(_e),t&&o(un),t&&o(R),t&&o(mn),t&&o(At),t&&o(fn),k(De,t),t&&o(gn),t&&o(Nt),t&&o(_n),k(Ge,t),t&&o(bn),t&&o(te),k(Re),t&&o(kn),t&&o(x),k(We),k(Ue),t&&o(vn),t&&o(se),k(Ve),t&&o(Tn),t&&o(w),k(Je),k(Ye),k(Ze),k(et),t&&o(yn),t&&o(ae),k(at),t&&o(wn),t&&o(S),k(rt),k(ct),k(ye),k(pt),t&&o(Pn),t&&o(ie),k(ht),t&&o(Ln),t&&o(A),k(ut),k(_t),k(Pe),k(bt),t&&o(zn),t&&o(le),k(kt),t&&o(qn),t&&o(C),k(vt),k(Pt),k(ze),k(Lt),k(zt),k(qt),t&&o(Bn),t&&o(pe),k(Bt),t&&o($n),t&&o(he),k($t),k(xt),k(Ct)}}}const nl={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function sl(me){return Yd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cl extends Vd{constructor(u){super();Jd(this,u,sl,ol,Kd,{})}}export{cl as default,nl as metadata};
