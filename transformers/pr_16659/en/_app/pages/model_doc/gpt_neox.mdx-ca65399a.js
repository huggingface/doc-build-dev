import{S as kn,i as Nn,s as $n,e as n,k as c,w as _,t as r,M as Gn,c as s,d as t,m as p,a,x as T,h as i,b as d,F as e,g as u,y as v,q as b,o as P,B as y,v as Xn}from"../../chunks/vendor-6b77c823.js";import{T as wn}from"../../chunks/Tip-39098574.js";import{D as no}from"../../chunks/Docstring-17b815d9.js";import{C as No}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ie}from"../../chunks/IconCopyLink-7a11ce68.js";function xn(ke){let h,X,m,w,$;return{c(){h=n("p"),X=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(f){h=s(f,"P",{});var g=a(h);X=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var x=a(m);w=i(x,"Module"),x.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(f,g){u(f,h,g),e(h,X),e(h,m),e(m,w),e(h,$)},d(f){f&&t(h)}}}function Mn(ke){let h,X,m,w,$;return{c(){h=n("p"),X=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(f){h=s(f,"P",{});var g=a(h);X=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var x=a(m);w=i(x,"Module"),x.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(f,g){u(f,h,g),e(h,X),e(h,m),e(m,w),e(h,$)},d(f){f&&t(h)}}}function Cn(ke){let h,X,m,w,$,f,g,x,$o,so,F,V,Se,oe,Go,De,Xo,ao,z,xo,te,Mo,Co,ne,zo,Eo,ro,E,qo,se,jo,Fo,ae,Lo,Ao,io,L,U,We,re,Io,Oe,So,lo,R,Do,Be,Wo,Oo,co,ie,po,A,J,He,de,Bo,Ve,Ho,ho,G,le,Vo,I,Uo,Ne,Ro,Jo,ce,Ko,Qo,Yo,S,Zo,$e,et,ot,Ge,tt,nt,st,pe,uo,D,K,Ue,he,at,Re,rt,mo,M,ue,it,me,dt,fe,lt,ct,pt,k,ge,ht,W,ut,Xe,mt,ft,Je,gt,_t,Tt,Q,vt,Ke,bt,Pt,_e,fo,O,Y,Qe,Te,yt,Ye,wt,go,C,ve,kt,B,Nt,Ze,$t,Gt,be,Xt,xt,Mt,N,Pe,Ct,H,zt,xe,Et,qt,eo,jt,Ft,Lt,Z,At,oo,It,St,ye,_o;return f=new Ie({}),oe=new Ie({}),re=new Ie({}),ie=new No({props:{code:`from transformers import GPTNeoXForCausalLM, GPTNeoXTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),de=new Ie({}),le=new no({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),pe=new No({props:{code:`from transformers import GPTNeoXModel, GPTNeoXConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),he=new Ie({}),ue=new no({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16659/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L410"}}),ge=new no({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/pr_16659/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L428",returnDescription:`
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
`}}),Q=new wn({props:{$$slots:{default:[xn]},$$scope:{ctx:ke}}}),_e=new No({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Te=new Ie({}),ve=new no({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16659/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16659/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L546"}}),Pe=new no({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/pr_16659/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),Z=new wn({props:{$$slots:{default:[Mn]},$$scope:{ctx:ke}}}),ye=new No({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){h=n("meta"),X=c(),m=n("h1"),w=n("a"),$=n("span"),_(f.$$.fragment),g=c(),x=n("span"),$o=r("GPT-NeoX"),so=c(),F=n("h2"),V=n("a"),Se=n("span"),_(oe.$$.fragment),Go=c(),De=n("span"),Xo=r("Overview"),ao=c(),z=n("p"),xo=r("The GPT-NeoX-20B model was released in the "),te=n("a"),Mo=r("EleutherAI/gpt-neox"),Co=r(` repository.
It is a GPT-2 like causal language model trained on the
`),ne=n("a"),zo=r("Pile"),Eo=r(" dataset."),ro=c(),E=n("p"),qo=r("Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with generous the support of "),se=n("a"),jo=r("CoreWeave"),Fo=r(`.
More details about the model can be found in the `),ae=n("a"),Lo=r("manuscript"),Ao=r("."),io=c(),L=n("h3"),U=n("a"),We=n("span"),_(re.$$.fragment),Io=c(),Oe=n("span"),So=r("Generation"),lo=c(),R=n("p"),Do=r("The "),Be=n("code"),Wo=r("generate()"),Oo=r(" method can be used to generate text using GPT Neo model."),co=c(),_(ie.$$.fragment),po=c(),A=n("h2"),J=n("a"),He=n("span"),_(de.$$.fragment),Bo=c(),Ve=n("span"),Ho=r("GPTNeoXConfig"),ho=c(),G=n("div"),_(le.$$.fragment),Vo=c(),I=n("p"),Uo=r("This is the configuration class to store the configuration of a "),Ne=n("a"),Ro=r("~GPTNeoXModel"),Jo=r(`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ce=n("a"),Ko=r("gpt-neox-20b"),Qo=r(" architecture."),Yo=c(),S=n("p"),Zo=r("Configuration objects inherit from "),$e=n("a"),et=r("PretrainedConfig"),ot=r(` and can be used to control the model outputs. Read the
documentation from `),Ge=n("a"),tt=r("PretrainedConfig"),nt=r(" for more information."),st=c(),_(pe.$$.fragment),uo=c(),D=n("h2"),K=n("a"),Ue=n("span"),_(he.$$.fragment),at=c(),Re=n("span"),rt=r("GPTNeoXModel"),mo=c(),M=n("div"),_(ue.$$.fragment),it=c(),me=n("p"),dt=r(`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),fe=n("a"),lt=r("torch.nn.Module"),ct=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pt=c(),k=n("div"),_(ge.$$.fragment),ht=c(),W=n("p"),ut=r("The "),Xe=n("a"),mt=r("GPTNeoXModel"),ft=r(" forward method, overrides the "),Je=n("code"),gt=r("__call__"),_t=r(" special method."),Tt=c(),_(Q.$$.fragment),vt=c(),Ke=n("p"),bt=r("Example:"),Pt=c(),_(_e.$$.fragment),fo=c(),O=n("h2"),Y=n("a"),Qe=n("span"),_(Te.$$.fragment),yt=c(),Ye=n("span"),wt=r("GPTNeoXForCausalLM"),go=c(),C=n("div"),_(ve.$$.fragment),kt=c(),B=n("p"),Nt=r("GPTNeoX Model with a "),Ze=n("code"),$t=r("language modeling"),Gt=r(` head on top for CLM fine-tuning.
This model is a PyTorch `),be=n("a"),Xt=r("torch.nn.Module"),xt=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mt=c(),N=n("div"),_(Pe.$$.fragment),Ct=c(),H=n("p"),zt=r("The "),xe=n("a"),Et=r("GPTNeoXForCausalLM"),qt=r(" forward method, overrides the "),eo=n("code"),jt=r("__call__"),Ft=r(" special method."),Lt=c(),_(Z.$$.fragment),At=c(),oo=n("p"),It=r("Example:"),St=c(),_(ye.$$.fragment),this.h()},l(o){const l=Gn('[data-svelte="svelte-1phssyn"]',document.head);h=s(l,"META",{name:!0,content:!0}),l.forEach(t),X=p(o),m=s(o,"H1",{class:!0});var we=a(m);w=s(we,"A",{id:!0,class:!0,href:!0});var to=a(w);$=s(to,"SPAN",{});var Dt=a($);T(f.$$.fragment,Dt),Dt.forEach(t),to.forEach(t),g=p(we),x=s(we,"SPAN",{});var Wt=a(x);$o=i(Wt,"GPT-NeoX"),Wt.forEach(t),we.forEach(t),so=p(o),F=s(o,"H2",{class:!0});var To=a(F);V=s(To,"A",{id:!0,class:!0,href:!0});var Ot=a(V);Se=s(Ot,"SPAN",{});var Bt=a(Se);T(oe.$$.fragment,Bt),Bt.forEach(t),Ot.forEach(t),Go=p(To),De=s(To,"SPAN",{});var Ht=a(De);Xo=i(Ht,"Overview"),Ht.forEach(t),To.forEach(t),ao=p(o),z=s(o,"P",{});var Me=a(z);xo=i(Me,"The GPT-NeoX-20B model was released in the "),te=s(Me,"A",{href:!0,rel:!0});var Vt=a(te);Mo=i(Vt,"EleutherAI/gpt-neox"),Vt.forEach(t),Co=i(Me,` repository.
It is a GPT-2 like causal language model trained on the
`),ne=s(Me,"A",{href:!0,rel:!0});var Ut=a(ne);zo=i(Ut,"Pile"),Ut.forEach(t),Eo=i(Me," dataset."),Me.forEach(t),ro=p(o),E=s(o,"P",{});var Ce=a(E);qo=i(Ce,"Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with generous the support of "),se=s(Ce,"A",{href:!0,rel:!0});var Rt=a(se);jo=i(Rt,"CoreWeave"),Rt.forEach(t),Fo=i(Ce,`.
More details about the model can be found in the `),ae=s(Ce,"A",{href:!0,rel:!0});var Jt=a(ae);Lo=i(Jt,"manuscript"),Jt.forEach(t),Ao=i(Ce,"."),Ce.forEach(t),io=p(o),L=s(o,"H3",{class:!0});var vo=a(L);U=s(vo,"A",{id:!0,class:!0,href:!0});var Kt=a(U);We=s(Kt,"SPAN",{});var Qt=a(We);T(re.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),Io=p(vo),Oe=s(vo,"SPAN",{});var Yt=a(Oe);So=i(Yt,"Generation"),Yt.forEach(t),vo.forEach(t),lo=p(o),R=s(o,"P",{});var bo=a(R);Do=i(bo,"The "),Be=s(bo,"CODE",{});var Zt=a(Be);Wo=i(Zt,"generate()"),Zt.forEach(t),Oo=i(bo," method can be used to generate text using GPT Neo model."),bo.forEach(t),co=p(o),T(ie.$$.fragment,o),po=p(o),A=s(o,"H2",{class:!0});var Po=a(A);J=s(Po,"A",{id:!0,class:!0,href:!0});var en=a(J);He=s(en,"SPAN",{});var on=a(He);T(de.$$.fragment,on),on.forEach(t),en.forEach(t),Bo=p(Po),Ve=s(Po,"SPAN",{});var tn=a(Ve);Ho=i(tn,"GPTNeoXConfig"),tn.forEach(t),Po.forEach(t),ho=p(o),G=s(o,"DIV",{class:!0});var ee=a(G);T(le.$$.fragment,ee),Vo=p(ee),I=s(ee,"P",{});var ze=a(I);Uo=i(ze,"This is the configuration class to store the configuration of a "),Ne=s(ze,"A",{href:!0});var nn=a(Ne);Ro=i(nn,"~GPTNeoXModel"),nn.forEach(t),Jo=i(ze,`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ce=s(ze,"A",{href:!0,rel:!0});var sn=a(ce);Ko=i(sn,"gpt-neox-20b"),sn.forEach(t),Qo=i(ze," architecture."),ze.forEach(t),Yo=p(ee),S=s(ee,"P",{});var Ee=a(S);Zo=i(Ee,"Configuration objects inherit from "),$e=s(Ee,"A",{href:!0});var an=a($e);et=i(an,"PretrainedConfig"),an.forEach(t),ot=i(Ee,` and can be used to control the model outputs. Read the
documentation from `),Ge=s(Ee,"A",{href:!0});var rn=a(Ge);tt=i(rn,"PretrainedConfig"),rn.forEach(t),nt=i(Ee," for more information."),Ee.forEach(t),st=p(ee),T(pe.$$.fragment,ee),ee.forEach(t),uo=p(o),D=s(o,"H2",{class:!0});var yo=a(D);K=s(yo,"A",{id:!0,class:!0,href:!0});var dn=a(K);Ue=s(dn,"SPAN",{});var ln=a(Ue);T(he.$$.fragment,ln),ln.forEach(t),dn.forEach(t),at=p(yo),Re=s(yo,"SPAN",{});var cn=a(Re);rt=i(cn,"GPTNeoXModel"),cn.forEach(t),yo.forEach(t),mo=p(o),M=s(o,"DIV",{class:!0});var qe=a(M);T(ue.$$.fragment,qe),it=p(qe),me=s(qe,"P",{});var wo=a(me);dt=i(wo,`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),fe=s(wo,"A",{href:!0,rel:!0});var pn=a(fe);lt=i(pn,"torch.nn.Module"),pn.forEach(t),ct=i(wo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wo.forEach(t),pt=p(qe),k=s(qe,"DIV",{class:!0});var q=a(k);T(ge.$$.fragment,q),ht=p(q),W=s(q,"P",{});var je=a(W);ut=i(je,"The "),Xe=s(je,"A",{href:!0});var hn=a(Xe);mt=i(hn,"GPTNeoXModel"),hn.forEach(t),ft=i(je," forward method, overrides the "),Je=s(je,"CODE",{});var un=a(Je);gt=i(un,"__call__"),un.forEach(t),_t=i(je," special method."),je.forEach(t),Tt=p(q),T(Q.$$.fragment,q),vt=p(q),Ke=s(q,"P",{});var mn=a(Ke);bt=i(mn,"Example:"),mn.forEach(t),Pt=p(q),T(_e.$$.fragment,q),q.forEach(t),qe.forEach(t),fo=p(o),O=s(o,"H2",{class:!0});var ko=a(O);Y=s(ko,"A",{id:!0,class:!0,href:!0});var fn=a(Y);Qe=s(fn,"SPAN",{});var gn=a(Qe);T(Te.$$.fragment,gn),gn.forEach(t),fn.forEach(t),yt=p(ko),Ye=s(ko,"SPAN",{});var _n=a(Ye);wt=i(_n,"GPTNeoXForCausalLM"),_n.forEach(t),ko.forEach(t),go=p(o),C=s(o,"DIV",{class:!0});var Fe=a(C);T(ve.$$.fragment,Fe),kt=p(Fe),B=s(Fe,"P",{});var Le=a(B);Nt=i(Le,"GPTNeoX Model with a "),Ze=s(Le,"CODE",{});var Tn=a(Ze);$t=i(Tn,"language modeling"),Tn.forEach(t),Gt=i(Le,` head on top for CLM fine-tuning.
This model is a PyTorch `),be=s(Le,"A",{href:!0,rel:!0});var vn=a(be);Xt=i(vn,"torch.nn.Module"),vn.forEach(t),xt=i(Le,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Le.forEach(t),Mt=p(Fe),N=s(Fe,"DIV",{class:!0});var j=a(N);T(Pe.$$.fragment,j),Ct=p(j),H=s(j,"P",{});var Ae=a(H);zt=i(Ae,"The "),xe=s(Ae,"A",{href:!0});var bn=a(xe);Et=i(bn,"GPTNeoXForCausalLM"),bn.forEach(t),qt=i(Ae," forward method, overrides the "),eo=s(Ae,"CODE",{});var Pn=a(eo);jt=i(Pn,"__call__"),Pn.forEach(t),Ft=i(Ae," special method."),Ae.forEach(t),Lt=p(j),T(Z.$$.fragment,j),At=p(j),oo=s(j,"P",{});var yn=a(oo);It=i(yn,"Example:"),yn.forEach(t),St=p(j),T(ye.$$.fragment,j),j.forEach(t),Fe.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(zn)),d(w,"id","gptneox"),d(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(w,"href","#gptneox"),d(m,"class","relative group"),d(V,"id","overview"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#overview"),d(F,"class","relative group"),d(te,"href","https://github.com/EleutherAI/gpt-neox"),d(te,"rel","nofollow"),d(ne,"href","https://pile.eleuther.ai/"),d(ne,"rel","nofollow"),d(se,"href","https://www.coreweave.com/"),d(se,"rel","nofollow"),d(ae,"href","https://arxiv.org/abs/2204.06745"),d(ae,"rel","nofollow"),d(U,"id","generation"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#generation"),d(L,"class","relative group"),d(J,"id","transformers.GPTNeoXConfig"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#transformers.GPTNeoXConfig"),d(A,"class","relative group"),d(Ne,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),d(ce,"href","https://huggingface.co/gpt-neox-20b"),d(ce,"rel","nofollow"),d($e,"href","/docs/transformers/pr_16659/en/main_classes/configuration#transformers.PretrainedConfig"),d(Ge,"href","/docs/transformers/pr_16659/en/main_classes/configuration#transformers.PretrainedConfig"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(K,"id","transformers.GPTNeoXModel"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#transformers.GPTNeoXModel"),d(D,"class","relative group"),d(fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(fe,"rel","nofollow"),d(Xe,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),d(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Y,"id","transformers.GPTNeoXForCausalLM"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#transformers.GPTNeoXForCausalLM"),d(O,"class","relative group"),d(be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(be,"rel","nofollow"),d(xe,"href","/docs/transformers/pr_16659/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,l){e(document.head,h),u(o,X,l),u(o,m,l),e(m,w),e(w,$),v(f,$,null),e(m,g),e(m,x),e(x,$o),u(o,so,l),u(o,F,l),e(F,V),e(V,Se),v(oe,Se,null),e(F,Go),e(F,De),e(De,Xo),u(o,ao,l),u(o,z,l),e(z,xo),e(z,te),e(te,Mo),e(z,Co),e(z,ne),e(ne,zo),e(z,Eo),u(o,ro,l),u(o,E,l),e(E,qo),e(E,se),e(se,jo),e(E,Fo),e(E,ae),e(ae,Lo),e(E,Ao),u(o,io,l),u(o,L,l),e(L,U),e(U,We),v(re,We,null),e(L,Io),e(L,Oe),e(Oe,So),u(o,lo,l),u(o,R,l),e(R,Do),e(R,Be),e(Be,Wo),e(R,Oo),u(o,co,l),v(ie,o,l),u(o,po,l),u(o,A,l),e(A,J),e(J,He),v(de,He,null),e(A,Bo),e(A,Ve),e(Ve,Ho),u(o,ho,l),u(o,G,l),v(le,G,null),e(G,Vo),e(G,I),e(I,Uo),e(I,Ne),e(Ne,Ro),e(I,Jo),e(I,ce),e(ce,Ko),e(I,Qo),e(G,Yo),e(G,S),e(S,Zo),e(S,$e),e($e,et),e(S,ot),e(S,Ge),e(Ge,tt),e(S,nt),e(G,st),v(pe,G,null),u(o,uo,l),u(o,D,l),e(D,K),e(K,Ue),v(he,Ue,null),e(D,at),e(D,Re),e(Re,rt),u(o,mo,l),u(o,M,l),v(ue,M,null),e(M,it),e(M,me),e(me,dt),e(me,fe),e(fe,lt),e(me,ct),e(M,pt),e(M,k),v(ge,k,null),e(k,ht),e(k,W),e(W,ut),e(W,Xe),e(Xe,mt),e(W,ft),e(W,Je),e(Je,gt),e(W,_t),e(k,Tt),v(Q,k,null),e(k,vt),e(k,Ke),e(Ke,bt),e(k,Pt),v(_e,k,null),u(o,fo,l),u(o,O,l),e(O,Y),e(Y,Qe),v(Te,Qe,null),e(O,yt),e(O,Ye),e(Ye,wt),u(o,go,l),u(o,C,l),v(ve,C,null),e(C,kt),e(C,B),e(B,Nt),e(B,Ze),e(Ze,$t),e(B,Gt),e(B,be),e(be,Xt),e(B,xt),e(C,Mt),e(C,N),v(Pe,N,null),e(N,Ct),e(N,H),e(H,zt),e(H,xe),e(xe,Et),e(H,qt),e(H,eo),e(eo,jt),e(H,Ft),e(N,Lt),v(Z,N,null),e(N,At),e(N,oo),e(oo,It),e(N,St),v(ye,N,null),_o=!0},p(o,[l]){const we={};l&2&&(we.$$scope={dirty:l,ctx:o}),Q.$set(we);const to={};l&2&&(to.$$scope={dirty:l,ctx:o}),Z.$set(to)},i(o){_o||(b(f.$$.fragment,o),b(oe.$$.fragment,o),b(re.$$.fragment,o),b(ie.$$.fragment,o),b(de.$$.fragment,o),b(le.$$.fragment,o),b(pe.$$.fragment,o),b(he.$$.fragment,o),b(ue.$$.fragment,o),b(ge.$$.fragment,o),b(Q.$$.fragment,o),b(_e.$$.fragment,o),b(Te.$$.fragment,o),b(ve.$$.fragment,o),b(Pe.$$.fragment,o),b(Z.$$.fragment,o),b(ye.$$.fragment,o),_o=!0)},o(o){P(f.$$.fragment,o),P(oe.$$.fragment,o),P(re.$$.fragment,o),P(ie.$$.fragment,o),P(de.$$.fragment,o),P(le.$$.fragment,o),P(pe.$$.fragment,o),P(he.$$.fragment,o),P(ue.$$.fragment,o),P(ge.$$.fragment,o),P(Q.$$.fragment,o),P(_e.$$.fragment,o),P(Te.$$.fragment,o),P(ve.$$.fragment,o),P(Pe.$$.fragment,o),P(Z.$$.fragment,o),P(ye.$$.fragment,o),_o=!1},d(o){t(h),o&&t(X),o&&t(m),y(f),o&&t(so),o&&t(F),y(oe),o&&t(ao),o&&t(z),o&&t(ro),o&&t(E),o&&t(io),o&&t(L),y(re),o&&t(lo),o&&t(R),o&&t(co),y(ie,o),o&&t(po),o&&t(A),y(de),o&&t(ho),o&&t(G),y(le),y(pe),o&&t(uo),o&&t(D),y(he),o&&t(mo),o&&t(M),y(ue),y(ge),y(Q),y(_e),o&&t(fo),o&&t(O),y(Te),o&&t(go),o&&t(C),y(ve),y(Pe),y(Z),y(ye)}}}const zn={local:"gptneox",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoXConfig",title:"GPTNeoXConfig"},{local:"transformers.GPTNeoXModel",title:"GPTNeoXModel"},{local:"transformers.GPTNeoXForCausalLM",title:"GPTNeoXForCausalLM"}],title:"GPT-NeoX"};function En(ke){return Xn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class In extends kn{constructor(h){super();Nn(this,h,En,Cn,$n,{})}}export{In as default,zn as metadata};
