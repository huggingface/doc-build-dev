import{S as nr,i as sr,s as rr,e as n,k as l,w as g,t as a,M as ar,c as s,d as t,m as c,a as r,x as _,h as i,b as d,F as e,g as m,y as T,q as v,o as b,B as k,v as ir}from"../../chunks/vendor-6b77c823.js";import{T as ds}from"../../chunks/Tip-39098574.js";import{D as Ue}from"../../chunks/Docstring-1088f2fb.js";import{C as Do}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as fe}from"../../chunks/IconCopyLink-7a11ce68.js";function dr(ee){let h,$,f,w,N,u,P,G;return{c(){h=n("p"),$=a("When used with "),f=n("code"),w=a("is_split_into_words=True"),N=a(", this tokenizer needs to be instantiated with "),u=n("code"),P=a("add_prefix_space=True"),G=a(".")},l(W){h=s(W,"P",{});var M=r(h);$=i(M,"When used with "),f=s(M,"CODE",{});var F=r(f);w=i(F,"is_split_into_words=True"),F.forEach(t),N=i(M,", this tokenizer needs to be instantiated with "),u=s(M,"CODE",{});var q=r(u);P=i(q,"add_prefix_space=True"),q.forEach(t),G=i(M,"."),M.forEach(t)},m(W,M){m(W,h,M),e(h,$),e(h,f),e(f,w),e(h,N),e(h,u),e(u,P),e(h,G)},d(W){W&&t(h)}}}function lr(ee){let h,$,f,w,N;return{c(){h=n("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),w=a("Module"),N=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=s(u,"P",{});var P=r(h);$=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(P,"CODE",{});var G=r(f);w=i(G,"Module"),G.forEach(t),N=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(u,P){m(u,h,P),e(h,$),e(h,f),e(f,w),e(h,N)},d(u){u&&t(h)}}}function cr(ee){let h,$,f,w,N;return{c(){h=n("p"),$=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),w=a("Module"),N=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=s(u,"P",{});var P=r(h);$=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(P,"CODE",{});var G=r(f);w=i(G,"Module"),G.forEach(t),N=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(u,P){m(u,h,P),e(h,$),e(h,f),e(f,w),e(h,N)},d(u){u&&t(h)}}}function pr(ee){let h,$,f,w,N,u,P,G,W,M,F,q,ho,ue,gt,mo,_t,So,L,Tt,ge,vt,bt,_e,kt,Pt,Wo,I,wt,Te,yt,Nt,ve,$t,Gt,Oo,O,oe,fo,be,xt,uo,Xt,Bo,te,zt,go,Mt,Et,Ho,ke,Vo,B,ne,_o,Pe,Ct,To,Ft,Uo,E,we,qt,H,jt,Re,At,Lt,ye,It,Dt,St,V,Wt,Ye,Ot,Bt,Je,Ht,Vt,Ut,Ne,Ro,U,se,vo,$e,Rt,bo,Yt,Yo,C,Ge,Jt,ko,Kt,Qt,re,Ke,Zt,en,Qe,on,tn,nn,xe,sn,Po,rn,an,Jo,R,ae,wo,Xe,dn,yo,ln,Ko,y,ze,cn,Me,pn,No,hn,mn,fn,$o,un,gn,Ee,_n,Ce,Tn,Go,vn,bn,kn,ie,Pn,Fe,wn,Ze,yn,Nn,Qo,Y,de,xo,qe,$n,Xo,Gn,Zo,j,je,xn,Ae,Xn,Le,zn,Mn,En,x,Ie,Cn,J,Fn,eo,qn,jn,zo,An,Ln,In,le,Dn,Mo,Sn,Wn,De,et,K,ce,Eo,Se,On,Co,Bn,ot,A,We,Hn,Q,Vn,Fo,Un,Rn,Oe,Yn,Jn,Kn,X,Be,Qn,Z,Zn,oo,es,os,qo,ts,ns,ss,pe,rs,jo,as,is,He,tt;return u=new fe({}),ue=new fe({}),be=new fe({}),ke=new Do({props:{code:`from transformers import GPTNeoXForCausalLM, GPTNeoXTokenizer

model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b")
tokenizer = GPTNeoXTokenizer.from_pretrained("EleutherAI/gpt-neox-20b")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXForCausalLM, GPTNeoXTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),Pe=new fe({}),we=new Ue({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the GPTNeoX model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel">~GPTNeoXModel</a> or <code>~TFGPTNeoXModel</code>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoXConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoXConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GPTNeoXConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GPTNeoXConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoXConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GPTNeoXConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.GPTNeoXConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.GPTNeoXConfig.rotary_pct",description:`<strong>rotary_pct</strong> (<code>float</code>, <em>optional</em>, defaults to 0.25) &#x2014;
percentage of hidden dimensions to allocate to rotary embeddings`,name:"rotary_pct"},{anchor:"transformers.GPTNeoXConfig.rotary_emb_base",description:`<strong>rotary_emb_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
base for computing rotary embeddings frequency`,name:"rotary_emb_base"},{anchor:"transformers.GPTNeoXConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoXConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoXConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GPTNeoXConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),Ne=new Do({props:{code:`from transformers import GPTNeoXModel, GPTNeoXConfig

# Initializing a GPTNeoX gpt-neox-20b style configuration
configuration = GPTNeoXConfig()

# Initializing a model from the gpt-neox-20b style configuration
model = GPTNeoXModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXModel, GPTNeoXConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPTNeoX gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTNeoXConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$e=new fe({}),Ge=new Ue({props:{name:"class transformers.GPTNeoXTokenizer",anchor:"transformers.GPTNeoXTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/tokenization_gpt_neox.py#L38"}}),Xe=new fe({}),ze=new Ue({props:{name:"class transformers.GPTNeoXTokenizerFast",anchor:"transformers.GPTNeoXTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPTNeoXTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPTNeoXTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPTNeoXTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPTNeoXTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPTNeoX tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPTNeoXTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/tokenization_gpt_neox_fast.py#L41"}}),Ee=new Do({props:{code:`from transformers import GPTNeoXTokenizerFast
tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),ie=new ds({props:{$$slots:{default:[dr]},$$scope:{ctx:ee}}}),qe=new fe({}),je=new Ue({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16659/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L408"}}),Ie=new Ue({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXTokenizer">GPTNeoXTokenizer</a>. See <a href="/docs/transformers/pr_16659/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16659/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoXModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16659/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new ds({props:{$$slots:{default:[lr]},$$scope:{ctx:ee}}}),De=new Do({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXModel
import torch

tokenizer = GPTNeoXTokenizer.from_pretrained("gpt-neox-20b")
model = GPTNeoXModel.from_pretrained("gpt-neox-20b")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizer, GPTNeoXModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Se=new fe({}),We=new Ue({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16659/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L546"}}),Be=new Ue({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXTokenizer">GPTNeoXTokenizer</a>. See <a href="/docs/transformers/pr_16659/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16659/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16659/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional tensors are
only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.GPTNeoXForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L565",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16659/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new ds({props:{$$slots:{default:[cr]},$$scope:{ctx:ee}}}),He=new Do({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
import torch

tokenizer = GPTNeoXTokenizer.from_pretrained("gpt-neox-20b")
config = GPTNeoXConfig.from_pretrained("gpt-neox-20b")
config.is_decoder = True
model = GPTNeoXForCausalLM.from_pretrained("gpt-neox-20b", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = GPTNeoXConfig.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){h=n("meta"),$=l(),f=n("h1"),w=n("a"),N=n("span"),g(u.$$.fragment),P=l(),G=n("span"),W=a("GPT-NeoX"),M=l(),F=n("h2"),q=n("a"),ho=n("span"),g(ue.$$.fragment),gt=l(),mo=n("span"),_t=a("Overview"),So=l(),L=n("p"),Tt=a("The GPT-NeoX-20B model was released in the "),ge=n("a"),vt=a("EleutherAI/gpt-neox"),bt=a(` repository.
It is a GPT-2 like causal language model trained on the
`),_e=n("a"),kt=a("Pile"),Pt=a(" dataset."),Wo=l(),I=n("p"),wt=a("Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with generous the support of "),Te=n("a"),yt=a("CoreWeave"),Nt=a(`.
More details about the model can be found in the `),ve=n("a"),$t=a("manuscript"),Gt=a("."),Oo=l(),O=n("h3"),oe=n("a"),fo=n("span"),g(be.$$.fragment),xt=l(),uo=n("span"),Xt=a("Generation"),Bo=l(),te=n("p"),zt=a("The "),go=n("code"),Mt=a("generate()"),Et=a(" method can be used to generate text using GPT Neo model."),Ho=l(),g(ke.$$.fragment),Vo=l(),B=n("h2"),ne=n("a"),_o=n("span"),g(Pe.$$.fragment),Ct=l(),To=n("span"),Ft=a("GPTNeoXConfig"),Uo=l(),E=n("div"),g(we.$$.fragment),qt=l(),H=n("p"),jt=a("This is the configuration class to store the configuration of a "),Re=n("a"),At=a("~GPTNeoXModel"),Lt=a(`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ye=n("a"),It=a("gpt-neox-20b"),Dt=a(" architecture."),St=l(),V=n("p"),Wt=a("Configuration objects inherit from "),Ye=n("a"),Ot=a("PretrainedConfig"),Bt=a(` and can be used to control the model outputs. Read the
documentation from `),Je=n("a"),Ht=a("PretrainedConfig"),Vt=a(" for more information."),Ut=l(),g(Ne.$$.fragment),Ro=l(),U=n("h2"),se=n("a"),vo=n("span"),g($e.$$.fragment),Rt=l(),bo=n("span"),Yt=a("GPTNeoXTokenizer"),Yo=l(),C=n("div"),g(Ge.$$.fragment),Jt=l(),ko=n("p"),Kt=a("Construct a GPTNeoX tokenizer."),Qt=l(),re=n("p"),Ke=n("a"),Zt=a("~GPTNeoXTokenizer"),en=a(" is identical to "),Qe=n("a"),on=a("BartTokenizer"),tn=a(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),nn=l(),xe=n("p"),sn=a("Refer to superclass "),Po=n("code"),rn=a("GPT2Tokenzer"),an=a(" for usage examples and documentation concerning parameters."),Jo=l(),R=n("h2"),ae=n("a"),wo=n("span"),g(Xe.$$.fragment),dn=l(),yo=n("span"),ln=a("GPTNeoXTokenizerFast"),Ko=l(),y=n("div"),g(ze.$$.fragment),cn=l(),Me=n("p"),pn=a("Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),No=n("em"),hn=a("tokenizers"),mn=a(` library). Based on byte-level
Byte-Pair-Encoding.`),fn=l(),$o=n("p"),un=a(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),gn=l(),g(Ee.$$.fragment),_n=l(),Ce=n("p"),Tn=a("You can get around that behavior by passing "),Go=n("code"),vn=a("add_prefix_space=True"),bn=a(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),kn=l(),g(ie.$$.fragment),Pn=l(),Fe=n("p"),wn=a("This tokenizer inherits from "),Ze=n("a"),yn=a("PreTrainedTokenizerFast"),Nn=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qo=l(),Y=n("h2"),de=n("a"),xo=n("span"),g(qe.$$.fragment),$n=l(),Xo=n("span"),Gn=a("GPTNeoXModel"),Zo=l(),j=n("div"),g(je.$$.fragment),xn=l(),Ae=n("p"),Xn=a(`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Le=n("a"),zn=a("torch.nn.Module"),Mn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),En=l(),x=n("div"),g(Ie.$$.fragment),Cn=l(),J=n("p"),Fn=a("The "),eo=n("a"),qn=a("GPTNeoXModel"),jn=a(" forward method, overrides the "),zo=n("code"),An=a("__call__"),Ln=a(" special method."),In=l(),g(le.$$.fragment),Dn=l(),Mo=n("p"),Sn=a("Example:"),Wn=l(),g(De.$$.fragment),et=l(),K=n("h2"),ce=n("a"),Eo=n("span"),g(Se.$$.fragment),On=l(),Co=n("span"),Bn=a("GPTNeoXForCausalLM"),ot=l(),A=n("div"),g(We.$$.fragment),Hn=l(),Q=n("p"),Vn=a("GPTNeoX Model with a "),Fo=n("code"),Un=a("language modeling"),Rn=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),Oe=n("a"),Yn=a("torch.nn.Module"),Jn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kn=l(),X=n("div"),g(Be.$$.fragment),Qn=l(),Z=n("p"),Zn=a("The "),oo=n("a"),es=a("GPTNeoXForCausalLM"),os=a(" forward method, overrides the "),qo=n("code"),ts=a("__call__"),ns=a(" special method."),ss=l(),g(pe.$$.fragment),rs=l(),jo=n("p"),as=a("Example:"),is=l(),g(He.$$.fragment),this.h()},l(o){const p=ar('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),$=c(o),f=s(o,"H1",{class:!0});var Ve=r(f);w=s(Ve,"A",{id:!0,class:!0,href:!0});var Ao=r(w);N=s(Ao,"SPAN",{});var Lo=r(N);_(u.$$.fragment,Lo),Lo.forEach(t),Ao.forEach(t),P=c(Ve),G=s(Ve,"SPAN",{});var ls=r(G);W=i(ls,"GPT-NeoX"),ls.forEach(t),Ve.forEach(t),M=c(o),F=s(o,"H2",{class:!0});var nt=r(F);q=s(nt,"A",{id:!0,class:!0,href:!0});var cs=r(q);ho=s(cs,"SPAN",{});var ps=r(ho);_(ue.$$.fragment,ps),ps.forEach(t),cs.forEach(t),gt=c(nt),mo=s(nt,"SPAN",{});var hs=r(mo);_t=i(hs,"Overview"),hs.forEach(t),nt.forEach(t),So=c(o),L=s(o,"P",{});var to=r(L);Tt=i(to,"The GPT-NeoX-20B model was released in the "),ge=s(to,"A",{href:!0,rel:!0});var ms=r(ge);vt=i(ms,"EleutherAI/gpt-neox"),ms.forEach(t),bt=i(to,` repository.
It is a GPT-2 like causal language model trained on the
`),_e=s(to,"A",{href:!0,rel:!0});var fs=r(_e);kt=i(fs,"Pile"),fs.forEach(t),Pt=i(to," dataset."),to.forEach(t),Wo=c(o),I=s(o,"P",{});var no=r(I);wt=i(no,"Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with generous the support of "),Te=s(no,"A",{href:!0,rel:!0});var us=r(Te);yt=i(us,"CoreWeave"),us.forEach(t),Nt=i(no,`.
More details about the model can be found in the `),ve=s(no,"A",{href:!0,rel:!0});var gs=r(ve);$t=i(gs,"manuscript"),gs.forEach(t),Gt=i(no,"."),no.forEach(t),Oo=c(o),O=s(o,"H3",{class:!0});var st=r(O);oe=s(st,"A",{id:!0,class:!0,href:!0});var _s=r(oe);fo=s(_s,"SPAN",{});var Ts=r(fo);_(be.$$.fragment,Ts),Ts.forEach(t),_s.forEach(t),xt=c(st),uo=s(st,"SPAN",{});var vs=r(uo);Xt=i(vs,"Generation"),vs.forEach(t),st.forEach(t),Bo=c(o),te=s(o,"P",{});var rt=r(te);zt=i(rt,"The "),go=s(rt,"CODE",{});var bs=r(go);Mt=i(bs,"generate()"),bs.forEach(t),Et=i(rt," method can be used to generate text using GPT Neo model."),rt.forEach(t),Ho=c(o),_(ke.$$.fragment,o),Vo=c(o),B=s(o,"H2",{class:!0});var at=r(B);ne=s(at,"A",{id:!0,class:!0,href:!0});var ks=r(ne);_o=s(ks,"SPAN",{});var Ps=r(_o);_(Pe.$$.fragment,Ps),Ps.forEach(t),ks.forEach(t),Ct=c(at),To=s(at,"SPAN",{});var ws=r(To);Ft=i(ws,"GPTNeoXConfig"),ws.forEach(t),at.forEach(t),Uo=c(o),E=s(o,"DIV",{class:!0});var he=r(E);_(we.$$.fragment,he),qt=c(he),H=s(he,"P",{});var so=r(H);jt=i(so,"This is the configuration class to store the configuration of a "),Re=s(so,"A",{href:!0});var ys=r(Re);At=i(ys,"~GPTNeoXModel"),ys.forEach(t),Lt=i(so,`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ye=s(so,"A",{href:!0,rel:!0});var Ns=r(ye);It=i(Ns,"gpt-neox-20b"),Ns.forEach(t),Dt=i(so," architecture."),so.forEach(t),St=c(he),V=s(he,"P",{});var ro=r(V);Wt=i(ro,"Configuration objects inherit from "),Ye=s(ro,"A",{href:!0});var $s=r(Ye);Ot=i($s,"PretrainedConfig"),$s.forEach(t),Bt=i(ro,` and can be used to control the model outputs. Read the
documentation from `),Je=s(ro,"A",{href:!0});var Gs=r(Je);Ht=i(Gs,"PretrainedConfig"),Gs.forEach(t),Vt=i(ro," for more information."),ro.forEach(t),Ut=c(he),_(Ne.$$.fragment,he),he.forEach(t),Ro=c(o),U=s(o,"H2",{class:!0});var it=r(U);se=s(it,"A",{id:!0,class:!0,href:!0});var xs=r(se);vo=s(xs,"SPAN",{});var Xs=r(vo);_($e.$$.fragment,Xs),Xs.forEach(t),xs.forEach(t),Rt=c(it),bo=s(it,"SPAN",{});var zs=r(bo);Yt=i(zs,"GPTNeoXTokenizer"),zs.forEach(t),it.forEach(t),Yo=c(o),C=s(o,"DIV",{class:!0});var me=r(C);_(Ge.$$.fragment,me),Jt=c(me),ko=s(me,"P",{});var Ms=r(ko);Kt=i(Ms,"Construct a GPTNeoX tokenizer."),Ms.forEach(t),Qt=c(me),re=s(me,"P",{});var Io=r(re);Ke=s(Io,"A",{href:!0});var Es=r(Ke);Zt=i(Es,"~GPTNeoXTokenizer"),Es.forEach(t),en=i(Io," is identical to "),Qe=s(Io,"A",{href:!0});var Cs=r(Qe);on=i(Cs,"BartTokenizer"),Cs.forEach(t),tn=i(Io,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Io.forEach(t),nn=c(me),xe=s(me,"P",{});var dt=r(xe);sn=i(dt,"Refer to superclass "),Po=s(dt,"CODE",{});var Fs=r(Po);rn=i(Fs,"GPT2Tokenzer"),Fs.forEach(t),an=i(dt," for usage examples and documentation concerning parameters."),dt.forEach(t),me.forEach(t),Jo=c(o),R=s(o,"H2",{class:!0});var lt=r(R);ae=s(lt,"A",{id:!0,class:!0,href:!0});var qs=r(ae);wo=s(qs,"SPAN",{});var js=r(wo);_(Xe.$$.fragment,js),js.forEach(t),qs.forEach(t),dn=c(lt),yo=s(lt,"SPAN",{});var As=r(yo);ln=i(As,"GPTNeoXTokenizerFast"),As.forEach(t),lt.forEach(t),Ko=c(o),y=s(o,"DIV",{class:!0});var z=r(y);_(ze.$$.fragment,z),cn=c(z),Me=s(z,"P",{});var ct=r(Me);pn=i(ct,"Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),No=s(ct,"EM",{});var Ls=r(No);hn=i(Ls,"tokenizers"),Ls.forEach(t),mn=i(ct,` library). Based on byte-level
Byte-Pair-Encoding.`),ct.forEach(t),fn=c(z),$o=s(z,"P",{});var Is=r($o);un=i(Is,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Is.forEach(t),gn=c(z),_(Ee.$$.fragment,z),_n=c(z),Ce=s(z,"P",{});var pt=r(Ce);Tn=i(pt,"You can get around that behavior by passing "),Go=s(pt,"CODE",{});var Ds=r(Go);vn=i(Ds,"add_prefix_space=True"),Ds.forEach(t),bn=i(pt,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),pt.forEach(t),kn=c(z),_(ie.$$.fragment,z),Pn=c(z),Fe=s(z,"P",{});var ht=r(Fe);wn=i(ht,"This tokenizer inherits from "),Ze=s(ht,"A",{href:!0});var Ss=r(Ze);yn=i(Ss,"PreTrainedTokenizerFast"),Ss.forEach(t),Nn=i(ht,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ht.forEach(t),z.forEach(t),Qo=c(o),Y=s(o,"H2",{class:!0});var mt=r(Y);de=s(mt,"A",{id:!0,class:!0,href:!0});var Ws=r(de);xo=s(Ws,"SPAN",{});var Os=r(xo);_(qe.$$.fragment,Os),Os.forEach(t),Ws.forEach(t),$n=c(mt),Xo=s(mt,"SPAN",{});var Bs=r(Xo);Gn=i(Bs,"GPTNeoXModel"),Bs.forEach(t),mt.forEach(t),Zo=c(o),j=s(o,"DIV",{class:!0});var ao=r(j);_(je.$$.fragment,ao),xn=c(ao),Ae=s(ao,"P",{});var ft=r(Ae);Xn=i(ft,`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Le=s(ft,"A",{href:!0,rel:!0});var Hs=r(Le);zn=i(Hs,"torch.nn.Module"),Hs.forEach(t),Mn=i(ft,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ft.forEach(t),En=c(ao),x=s(ao,"DIV",{class:!0});var D=r(x);_(Ie.$$.fragment,D),Cn=c(D),J=s(D,"P",{});var io=r(J);Fn=i(io,"The "),eo=s(io,"A",{href:!0});var Vs=r(eo);qn=i(Vs,"GPTNeoXModel"),Vs.forEach(t),jn=i(io," forward method, overrides the "),zo=s(io,"CODE",{});var Us=r(zo);An=i(Us,"__call__"),Us.forEach(t),Ln=i(io," special method."),io.forEach(t),In=c(D),_(le.$$.fragment,D),Dn=c(D),Mo=s(D,"P",{});var Rs=r(Mo);Sn=i(Rs,"Example:"),Rs.forEach(t),Wn=c(D),_(De.$$.fragment,D),D.forEach(t),ao.forEach(t),et=c(o),K=s(o,"H2",{class:!0});var ut=r(K);ce=s(ut,"A",{id:!0,class:!0,href:!0});var Ys=r(ce);Eo=s(Ys,"SPAN",{});var Js=r(Eo);_(Se.$$.fragment,Js),Js.forEach(t),Ys.forEach(t),On=c(ut),Co=s(ut,"SPAN",{});var Ks=r(Co);Bn=i(Ks,"GPTNeoXForCausalLM"),Ks.forEach(t),ut.forEach(t),ot=c(o),A=s(o,"DIV",{class:!0});var lo=r(A);_(We.$$.fragment,lo),Hn=c(lo),Q=s(lo,"P",{});var co=r(Q);Vn=i(co,"GPTNeoX Model with a "),Fo=s(co,"CODE",{});var Qs=r(Fo);Un=i(Qs,"language modeling"),Qs.forEach(t),Rn=i(co,` head on top for CLM fine-tuning.
This model is a PyTorch `),Oe=s(co,"A",{href:!0,rel:!0});var Zs=r(Oe);Yn=i(Zs,"torch.nn.Module"),Zs.forEach(t),Jn=i(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(t),Kn=c(lo),X=s(lo,"DIV",{class:!0});var S=r(X);_(Be.$$.fragment,S),Qn=c(S),Z=s(S,"P",{});var po=r(Z);Zn=i(po,"The "),oo=s(po,"A",{href:!0});var er=r(oo);es=i(er,"GPTNeoXForCausalLM"),er.forEach(t),os=i(po," forward method, overrides the "),qo=s(po,"CODE",{});var or=r(qo);ts=i(or,"__call__"),or.forEach(t),ns=i(po," special method."),po.forEach(t),ss=c(S),_(pe.$$.fragment,S),rs=c(S),jo=s(S,"P",{});var tr=r(jo);as=i(tr,"Example:"),tr.forEach(t),is=c(S),_(He.$$.fragment,S),S.forEach(t),lo.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(hr)),d(w,"id","gptneox"),d(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(w,"href","#gptneox"),d(f,"class","relative group"),d(q,"id","overview"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#overview"),d(F,"class","relative group"),d(ge,"href","https://github.com/EleutherAI/gpt-neox"),d(ge,"rel","nofollow"),d(_e,"href","https://pile.eleuther.ai/"),d(_e,"rel","nofollow"),d(Te,"href","https://www.coreweave.com/"),d(Te,"rel","nofollow"),d(ve,"href","https://arxiv.org/abs/2204.06745"),d(ve,"rel","nofollow"),d(oe,"id","generation"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#generation"),d(O,"class","relative group"),d(ne,"id","transformers.GPTNeoXConfig"),d(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ne,"href","#transformers.GPTNeoXConfig"),d(B,"class","relative group"),d(Re,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),d(ye,"href","https://huggingface.co/gpt-neox-20b"),d(ye,"rel","nofollow"),d(Ye,"href","/docs/transformers/pr_16659/en/main_classes/configuration#transformers.PretrainedConfig"),d(Je,"href","/docs/transformers/pr_16659/en/main_classes/configuration#transformers.PretrainedConfig"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"id","transformers.GPTNeoXTokenizer"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#transformers.GPTNeoXTokenizer"),d(U,"class","relative group"),d(Ke,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXTokenizer"),d(Qe,"href","/docs/transformers/pr_16659/en/model_doc/bart#transformers.BartTokenizer"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"id","transformers.GPTNeoXTokenizerFast"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#transformers.GPTNeoXTokenizerFast"),d(R,"class","relative group"),d(Ze,"href","/docs/transformers/pr_16659/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(de,"id","transformers.GPTNeoXModel"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#transformers.GPTNeoXModel"),d(Y,"class","relative group"),d(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Le,"rel","nofollow"),d(eo,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ce,"id","transformers.GPTNeoXForCausalLM"),d(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ce,"href","#transformers.GPTNeoXForCausalLM"),d(K,"class","relative group"),d(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Oe,"rel","nofollow"),d(oo,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,p){e(document.head,h),m(o,$,p),m(o,f,p),e(f,w),e(w,N),T(u,N,null),e(f,P),e(f,G),e(G,W),m(o,M,p),m(o,F,p),e(F,q),e(q,ho),T(ue,ho,null),e(F,gt),e(F,mo),e(mo,_t),m(o,So,p),m(o,L,p),e(L,Tt),e(L,ge),e(ge,vt),e(L,bt),e(L,_e),e(_e,kt),e(L,Pt),m(o,Wo,p),m(o,I,p),e(I,wt),e(I,Te),e(Te,yt),e(I,Nt),e(I,ve),e(ve,$t),e(I,Gt),m(o,Oo,p),m(o,O,p),e(O,oe),e(oe,fo),T(be,fo,null),e(O,xt),e(O,uo),e(uo,Xt),m(o,Bo,p),m(o,te,p),e(te,zt),e(te,go),e(go,Mt),e(te,Et),m(o,Ho,p),T(ke,o,p),m(o,Vo,p),m(o,B,p),e(B,ne),e(ne,_o),T(Pe,_o,null),e(B,Ct),e(B,To),e(To,Ft),m(o,Uo,p),m(o,E,p),T(we,E,null),e(E,qt),e(E,H),e(H,jt),e(H,Re),e(Re,At),e(H,Lt),e(H,ye),e(ye,It),e(H,Dt),e(E,St),e(E,V),e(V,Wt),e(V,Ye),e(Ye,Ot),e(V,Bt),e(V,Je),e(Je,Ht),e(V,Vt),e(E,Ut),T(Ne,E,null),m(o,Ro,p),m(o,U,p),e(U,se),e(se,vo),T($e,vo,null),e(U,Rt),e(U,bo),e(bo,Yt),m(o,Yo,p),m(o,C,p),T(Ge,C,null),e(C,Jt),e(C,ko),e(ko,Kt),e(C,Qt),e(C,re),e(re,Ke),e(Ke,Zt),e(re,en),e(re,Qe),e(Qe,on),e(re,tn),e(C,nn),e(C,xe),e(xe,sn),e(xe,Po),e(Po,rn),e(xe,an),m(o,Jo,p),m(o,R,p),e(R,ae),e(ae,wo),T(Xe,wo,null),e(R,dn),e(R,yo),e(yo,ln),m(o,Ko,p),m(o,y,p),T(ze,y,null),e(y,cn),e(y,Me),e(Me,pn),e(Me,No),e(No,hn),e(Me,mn),e(y,fn),e(y,$o),e($o,un),e(y,gn),T(Ee,y,null),e(y,_n),e(y,Ce),e(Ce,Tn),e(Ce,Go),e(Go,vn),e(Ce,bn),e(y,kn),T(ie,y,null),e(y,Pn),e(y,Fe),e(Fe,wn),e(Fe,Ze),e(Ze,yn),e(Fe,Nn),m(o,Qo,p),m(o,Y,p),e(Y,de),e(de,xo),T(qe,xo,null),e(Y,$n),e(Y,Xo),e(Xo,Gn),m(o,Zo,p),m(o,j,p),T(je,j,null),e(j,xn),e(j,Ae),e(Ae,Xn),e(Ae,Le),e(Le,zn),e(Ae,Mn),e(j,En),e(j,x),T(Ie,x,null),e(x,Cn),e(x,J),e(J,Fn),e(J,eo),e(eo,qn),e(J,jn),e(J,zo),e(zo,An),e(J,Ln),e(x,In),T(le,x,null),e(x,Dn),e(x,Mo),e(Mo,Sn),e(x,Wn),T(De,x,null),m(o,et,p),m(o,K,p),e(K,ce),e(ce,Eo),T(Se,Eo,null),e(K,On),e(K,Co),e(Co,Bn),m(o,ot,p),m(o,A,p),T(We,A,null),e(A,Hn),e(A,Q),e(Q,Vn),e(Q,Fo),e(Fo,Un),e(Q,Rn),e(Q,Oe),e(Oe,Yn),e(Q,Jn),e(A,Kn),e(A,X),T(Be,X,null),e(X,Qn),e(X,Z),e(Z,Zn),e(Z,oo),e(oo,es),e(Z,os),e(Z,qo),e(qo,ts),e(Z,ns),e(X,ss),T(pe,X,null),e(X,rs),e(X,jo),e(jo,as),e(X,is),T(He,X,null),tt=!0},p(o,[p]){const Ve={};p&2&&(Ve.$$scope={dirty:p,ctx:o}),ie.$set(Ve);const Ao={};p&2&&(Ao.$$scope={dirty:p,ctx:o}),le.$set(Ao);const Lo={};p&2&&(Lo.$$scope={dirty:p,ctx:o}),pe.$set(Lo)},i(o){tt||(v(u.$$.fragment,o),v(ue.$$.fragment,o),v(be.$$.fragment,o),v(ke.$$.fragment,o),v(Pe.$$.fragment,o),v(we.$$.fragment,o),v(Ne.$$.fragment,o),v($e.$$.fragment,o),v(Ge.$$.fragment,o),v(Xe.$$.fragment,o),v(ze.$$.fragment,o),v(Ee.$$.fragment,o),v(ie.$$.fragment,o),v(qe.$$.fragment,o),v(je.$$.fragment,o),v(Ie.$$.fragment,o),v(le.$$.fragment,o),v(De.$$.fragment,o),v(Se.$$.fragment,o),v(We.$$.fragment,o),v(Be.$$.fragment,o),v(pe.$$.fragment,o),v(He.$$.fragment,o),tt=!0)},o(o){b(u.$$.fragment,o),b(ue.$$.fragment,o),b(be.$$.fragment,o),b(ke.$$.fragment,o),b(Pe.$$.fragment,o),b(we.$$.fragment,o),b(Ne.$$.fragment,o),b($e.$$.fragment,o),b(Ge.$$.fragment,o),b(Xe.$$.fragment,o),b(ze.$$.fragment,o),b(Ee.$$.fragment,o),b(ie.$$.fragment,o),b(qe.$$.fragment,o),b(je.$$.fragment,o),b(Ie.$$.fragment,o),b(le.$$.fragment,o),b(De.$$.fragment,o),b(Se.$$.fragment,o),b(We.$$.fragment,o),b(Be.$$.fragment,o),b(pe.$$.fragment,o),b(He.$$.fragment,o),tt=!1},d(o){t(h),o&&t($),o&&t(f),k(u),o&&t(M),o&&t(F),k(ue),o&&t(So),o&&t(L),o&&t(Wo),o&&t(I),o&&t(Oo),o&&t(O),k(be),o&&t(Bo),o&&t(te),o&&t(Ho),k(ke,o),o&&t(Vo),o&&t(B),k(Pe),o&&t(Uo),o&&t(E),k(we),k(Ne),o&&t(Ro),o&&t(U),k($e),o&&t(Yo),o&&t(C),k(Ge),o&&t(Jo),o&&t(R),k(Xe),o&&t(Ko),o&&t(y),k(ze),k(Ee),k(ie),o&&t(Qo),o&&t(Y),k(qe),o&&t(Zo),o&&t(j),k(je),k(Ie),k(le),k(De),o&&t(et),o&&t(K),k(Se),o&&t(ot),o&&t(A),k(We),k(Be),k(pe),k(He)}}}const hr={local:"gptneox",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoXConfig",title:"GPTNeoXConfig"},{local:"transformers.GPTNeoXTokenizer",title:"GPTNeoXTokenizer"},{local:"transformers.GPTNeoXTokenizerFast",title:"GPTNeoXTokenizerFast"},{local:"transformers.GPTNeoXModel",title:"GPTNeoXModel"},{local:"transformers.GPTNeoXForCausalLM",title:"GPTNeoXForCausalLM"}],title:"GPT-NeoX"};function mr(ee){return ir(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vr extends nr{constructor(h){super();sr(this,h,mr,pr,rr,{})}}export{vr as default,hr as metadata};
