import{S as Vn,i as Un,s as Gn,e as s,k as f,w as v,t as d,M as Rn,c as a,d as o,m as u,a as r,x as M,h as l,b as m,F as e,g as O,y as k,q as y,o as w,B as $,v as Yn,L as jt}from"../../chunks/vendor-6b77c823.js";import{T as pn}from"../../chunks/Tip-39098574.js";import{D as Ue}from"../../chunks/Docstring-1088f2fb.js";import{C as Ht}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ge}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as At}from"../../chunks/ExampleCodeBlock-5212b321.js";function Jn(T){let i,b,h,c,_;return c=new Ht({props:{code:`from transformers import BLOOMModel, BLOOMConfig

# Initializing a BLOOM configuration
configuration = BLOOMConfig()

# Initializing a model from the configuration
model = BLOOMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BLOOMModel, BLOOMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BLOOM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BLOOMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BLOOMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){i=s("p"),b=d("Example:"),h=f(),v(c.$$.fragment)},l(n){i=a(n,"P",{});var p=r(i);b=l(p,"Example:"),p.forEach(o),h=u(n),M(c.$$.fragment,n)},m(n,p){O(n,i,p),e(i,b),O(n,h,p),k(c,n,p),_=!0},p:jt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(i),n&&o(h),$(c,n)}}}function Kn(T){let i,b,h,c,_;return{c(){i=s("p"),b=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),c=d("Module"),_=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){i=a(n,"P",{});var p=r(i);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var B=r(h);c=l(B,"Module"),B.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){O(n,i,p),e(i,b),e(i,h),e(h,c),e(i,_)},d(n){n&&o(i)}}}function Qn(T){let i,b,h,c,_;return c=new Ht({props:{code:`from transformers import BLOOMTokenizer, BLOOMModel
import torch

tokenizer = BLOOMTokenizer.from_pretrained("bigscience/BLOOM")
model = BLOOMModel.from_pretrained("bigscience/BLOOM")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BLOOMTokenizer, BLOOMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BLOOMTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/BLOOM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BLOOMModel.from_pretrained(<span class="hljs-string">&quot;bigscience/BLOOM&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){i=s("p"),b=d("Example:"),h=f(),v(c.$$.fragment)},l(n){i=a(n,"P",{});var p=r(i);b=l(p,"Example:"),p.forEach(o),h=u(n),M(c.$$.fragment,n)},m(n,p){O(n,i,p),e(i,b),O(n,h,p),k(c,n,p),_=!0},p:jt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(i),n&&o(h),$(c,n)}}}function Xn(T){let i,b,h,c,_;return c=new Ht({props:{code:`from transformers import BLOOMTokenizerFast
tokenizer = BLOOMTokenizerFast.from_pretrained("bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BLOOMTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BLOOMTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){i=s("p"),b=d("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h=f(),v(c.$$.fragment)},l(n){i=a(n,"P",{});var p=r(i);b=l(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(o),h=u(n),M(c.$$.fragment,n)},m(n,p){O(n,i,p),e(i,b),O(n,h,p),k(c,n,p),_=!0},p:jt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(i),n&&o(h),$(c,n)}}}function Zn(T){let i,b,h,c,_,n,p,B;return{c(){i=s("p"),b=d("When used with "),h=s("code"),c=d("is_split_into_words=True"),_=d(", this tokenizer needs to be instantiated with "),n=s("code"),p=d("add_prefix_space=True"),B=d(".")},l(I){i=a(I,"P",{});var E=r(i);b=l(E,"When used with "),h=a(E,"CODE",{});var P=r(h);c=l(P,"is_split_into_words=True"),P.forEach(o),_=l(E,", this tokenizer needs to be instantiated with "),n=a(E,"CODE",{});var j=r(n);p=l(j,"add_prefix_space=True"),j.forEach(o),B=l(E,"."),E.forEach(o)},m(I,E){O(I,i,E),e(i,b),e(i,h),e(h,c),e(i,_),e(i,n),e(n,p),e(i,B)},d(I){I&&o(i)}}}function es(T){let i,b,h,c,_;return{c(){i=s("p"),b=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),c=d("Module"),_=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){i=a(n,"P",{});var p=r(i);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var B=r(h);c=l(B,"Module"),B.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){O(n,i,p),e(i,b),e(i,h),e(h,c),e(i,_)},d(n){n&&o(i)}}}function ts(T){let i,b,h,c,_;return c=new Ht({props:{code:`import torch
from transformers import BLOOMTokenizer, BLOOMLMHeadModel

tokenizer = BLOOMTokenizer.from_pretrained("bigscience/BLOOM")
model = BLOOMLMHeadModel.from_pretrained("bigscience/BLOOM")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BLOOMTokenizer, BLOOMLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BLOOMTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/BLOOM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BLOOMLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bigscience/BLOOM&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){i=s("p"),b=d("Example:"),h=f(),v(c.$$.fragment)},l(n){i=a(n,"P",{});var p=r(i);b=l(p,"Example:"),p.forEach(o),h=u(n),M(c.$$.fragment,n)},m(n,p){O(n,i,p),e(i,b),O(n,h,p),k(c,n,p),_=!0},p:jt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(i),n&&o(h),$(c,n)}}}function os(T){let i,b,h,c,_,n,p,B,I,E,P,j,Re,le,Nt,Ye,It,ut,Ee,Dt,gt,D,J,Je,ce,St,Ke,Wt,_t,q,pe,Vt,S,Ut,qe,Gt,Rt,he,Yt,Jt,Kt,W,Qt,Pe,Xt,Zt,Fe,eo,to,oo,K,Ot,V,Q,Qe,me,no,Xe,so,bt,z,fe,ao,Ze,ro,io,ue,lo,Ae,co,po,ho,ge,mo,_e,fo,uo,go,F,Oe,_o,U,Oo,je,bo,vo,et,Mo,ko,yo,X,wo,Z,vt,G,ee,tt,be,$o,ot,Lo,Mt,L,ve,To,Me,Bo,nt,zo,xo,Co,st,Eo,qo,te,Po,ke,Fo,at,Ao,jo,Ho,oe,No,ye,Io,He,Do,So,kt,R,ne,rt,we,Wo,it,Vo,yt,x,$e,Uo,dt,Go,Ro,Le,Yo,Ne,Jo,Ko,Qo,Te,Xo,Be,Zo,en,tn,A,ze,on,Y,nn,Ie,sn,an,lt,rn,dn,ln,se,cn,ae,wt;return n=new Ge({}),le=new Ge({}),ce=new Ge({}),pe=new Ue({props:{name:"class transformers.BLOOMConfig",anchor:"transformers.BLOOMConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"seq_length",val:" = 20"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"n_inner",val:" = None"},{name:"masked_softmax_fusion",val:" = True"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"bias_dropout_fusion",val:" = True"},{name:"skip_bias_add",val:" = True"},{name:"skip_bias_add_qkv",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"attention_softmax_in_fp32",val:" = True"},{name:"pretraining_tp",val:" = 1"},{name:"pretraining_pp",val:" = 1"},{name:"dtype",val:" = 'bfloat16'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BLOOMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMModel">BLOOMModel</a>.`,name:"vocab_size"},{anchor:"transformers.BLOOMConfig.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"seq_length"},{anchor:"transformers.BLOOMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BLOOMConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BLOOMConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BLOOMConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times hidden_size`,name:"n_inner"},{anchor:"transformers.BLOOMConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.BLOOMConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.BLOOMConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.BLOOMConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.BLOOMConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BLOOMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BLOOMConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BLOOMConfig.bias_dropout_fusion",description:`<strong>bias_dropout_fusion</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If enabled, apply dropout when adding the attention output together with the attention bias in the
transformer blocks`,name:"bias_dropout_fusion"},{anchor:"transformers.BLOOMConfig.skip_bias_add",description:`<strong>skip_bias_add</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for each linear layer in the transformer blocks`,name:"skip_bias_add"},{anchor:"transformers.BLOOMConfig.skip_bias_add_qkv",description:`<strong>skip_bias_add_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for the first linear layer in the transformer blocks`,name:"skip_bias_add_qkv"},{anchor:"transformers.BLOOMConfig.attention_softmax_in_fp32",description:`<strong>attention_softmax_in_fp32</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code> and the <code>dtype</code> is set to <code>float16</code> it will scale the input of the Softmax function to
<code>fp32</code>`,name:"attention_softmax_in_fp32"},{anchor:"transformers.BLOOMConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function in <code>bias_dropout_fusion</code>`,name:"hidden_dropout"},{anchor:"transformers.BLOOMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BLOOMConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.BLOOMConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BLOOMConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.BLOOMConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/configuration_bloom.py#L35"}}),K=new At({props:{anchor:"transformers.BLOOMConfig.example",$$slots:{default:[Jn]},$$scope:{ctx:T}}}),me=new Ge({}),fe=new Ue({props:{name:"class transformers.BLOOMModel",anchor:"transformers.BLOOMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BLOOMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMConfig">BLOOMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L581"}}),Oe=new Ue({props:{name:"forward",anchor:"transformers.BLOOMModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BLOOMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BLOOMTokenizer</code>. See <a href="/docs/transformers/pr_17202/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17202/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BLOOMModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BLOOMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BLOOMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BLOOMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BLOOMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BLOOMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BLOOMModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BLOOMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BLOOMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BLOOMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17202/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L613",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17202/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMConfig"
>BLOOMConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17202/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new pn({props:{$$slots:{default:[Kn]},$$scope:{ctx:T}}}),Z=new At({props:{anchor:"transformers.BLOOMModel.forward.example",$$slots:{default:[Qn]},$$scope:{ctx:T}}}),be=new Ge({}),ve=new Ue({props:{name:"class transformers.BLOOMTokenizerFast",anchor:"transformers.BLOOMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BLOOMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BLOOMTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BLOOMTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BLOOMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BLOOMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.BLOOMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BLOOMTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BLOOM tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BLOOMTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/tokenization_bloom_fast.py#L54"}}),te=new At({props:{anchor:"transformers.BLOOMTokenizerFast.example",$$slots:{default:[Xn]},$$scope:{ctx:T}}}),oe=new pn({props:{$$slots:{default:[Zn]},$$scope:{ctx:T}}}),we=new Ge({}),$e=new Ue({props:{name:"class transformers.BLOOMLMHeadModel",anchor:"transformers.BLOOMLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BLOOMLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMConfig">BLOOMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L776"}}),ze=new Ue({props:{name:"forward",anchor:"transformers.BLOOMLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BLOOMLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BLOOMTokenizer</code>. See <a href="/docs/transformers/pr_17202/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17202/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BLOOMLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BLOOMLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BLOOMLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BLOOMLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BLOOMLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BLOOMLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BLOOMLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BLOOMLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BLOOMLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BLOOMLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17202/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BLOOMLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L825",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17202/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMConfig"
>BLOOMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_17202/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new pn({props:{$$slots:{default:[es]},$$scope:{ctx:T}}}),ae=new At({props:{anchor:"transformers.BLOOMLMHeadModel.forward.example",$$slots:{default:[ts]},$$scope:{ctx:T}}}),{c(){i=s("meta"),b=f(),h=s("h1"),c=s("a"),_=s("span"),v(n.$$.fragment),p=f(),B=s("span"),I=d("BLOOM"),E=f(),P=s("h2"),j=s("a"),Re=s("span"),v(le.$$.fragment),Nt=f(),Ye=s("span"),It=d("Overview"),ut=f(),Ee=s("p"),Dt=d("TODO!"),gt=f(),D=s("h2"),J=s("a"),Je=s("span"),v(ce.$$.fragment),St=f(),Ke=s("span"),Wt=d("BLOOMConfig"),_t=f(),q=s("div"),v(pe.$$.fragment),Vt=f(),S=s("p"),Ut=d("This is the configuration class to store the configuration of a "),qe=s("a"),Gt=d("BLOOMModel"),Rt=d(`. It is used to instantiate a GPT-2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the BLOOM architecture
`),he=s("a"),Yt=d("bigscience/bloom"),Jt=d("."),Kt=f(),W=s("p"),Qt=d("Configuration objects inherit from "),Pe=s("a"),Xt=d("PretrainedConfig"),Zt=d(` and can be used to control the model outputs. Read the
documentation from `),Fe=s("a"),eo=d("PretrainedConfig"),to=d(" for more information."),oo=f(),v(K.$$.fragment),Ot=f(),V=s("h2"),Q=s("a"),Qe=s("span"),v(me.$$.fragment),no=f(),Xe=s("span"),so=d("BLOOMModel"),bt=f(),z=s("div"),v(fe.$$.fragment),ao=f(),Ze=s("p"),ro=d("The bare BLOOM Model transformer outputting raw hidden-states without any specific head on top."),io=f(),ue=s("p"),lo=d("This model inherits from "),Ae=s("a"),co=d("PreTrainedModel"),po=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ho=f(),ge=s("p"),mo=d("This model is also a PyTorch "),_e=s("a"),fo=d("torch.nn.Module"),uo=d(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),go=f(),F=s("div"),v(Oe.$$.fragment),_o=f(),U=s("p"),Oo=d("The "),je=s("a"),bo=d("BLOOMModel"),vo=d(" forward method, overrides the "),et=s("code"),Mo=d("__call__"),ko=d(" special method."),yo=f(),v(X.$$.fragment),wo=f(),v(Z.$$.fragment),vt=f(),G=s("h2"),ee=s("a"),tt=s("span"),v(be.$$.fragment),$o=f(),ot=s("span"),Lo=d("BLOOMTokenizerFast"),Mt=f(),L=s("div"),v(ve.$$.fragment),To=f(),Me=s("p"),Bo=d("Construct a \u201Cfast\u201D BLOOM tokenizer (backed by HuggingFace\u2019s "),nt=s("em"),zo=d("tokenizers"),xo=d(` library). Based on byte-level
Byte-Pair-Encoding.`),Co=f(),st=s("p"),Eo=d("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),qo=f(),v(te.$$.fragment),Po=f(),ke=s("p"),Fo=d("You can get around that behavior by passing "),at=s("code"),Ao=d("add_prefix_space=True"),jo=d(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ho=f(),v(oe.$$.fragment),No=f(),ye=s("p"),Io=d("This tokenizer inherits from "),He=s("a"),Do=d("PreTrainedTokenizerFast"),So=d(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),kt=f(),R=s("h2"),ne=s("a"),rt=s("span"),v(we.$$.fragment),Wo=f(),it=s("span"),Vo=d("BLOOMLMHeadModel"),yt=f(),x=s("div"),v($e.$$.fragment),Uo=f(),dt=s("p"),Go=d(`The BLOOM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ro=f(),Le=s("p"),Yo=d("This model inherits from "),Ne=s("a"),Jo=d("PreTrainedModel"),Ko=d(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Qo=f(),Te=s("p"),Xo=d("This model is also a PyTorch "),Be=s("a"),Zo=d("torch.nn.Module"),en=d(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn=f(),A=s("div"),v(ze.$$.fragment),on=f(),Y=s("p"),nn=d("The "),Ie=s("a"),sn=d("BLOOMLMHeadModel"),an=d(" forward method, overrides the "),lt=s("code"),rn=d("__call__"),dn=d(" special method."),ln=f(),v(se.$$.fragment),cn=f(),v(ae.$$.fragment),this.h()},l(t){const g=Rn('[data-svelte="svelte-1phssyn"]',document.head);i=a(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),h=a(t,"H1",{class:!0});var xe=r(h);c=a(xe,"A",{id:!0,class:!0,href:!0});var ct=r(c);_=a(ct,"SPAN",{});var pt=r(_);M(n.$$.fragment,pt),pt.forEach(o),ct.forEach(o),p=u(xe),B=a(xe,"SPAN",{});var ht=r(B);I=l(ht,"BLOOM"),ht.forEach(o),xe.forEach(o),E=u(t),P=a(t,"H2",{class:!0});var Ce=r(P);j=a(Ce,"A",{id:!0,class:!0,href:!0});var mt=r(j);Re=a(mt,"SPAN",{});var ft=r(Re);M(le.$$.fragment,ft),ft.forEach(o),mt.forEach(o),Nt=u(Ce),Ye=a(Ce,"SPAN",{});var hn=r(Ye);It=l(hn,"Overview"),hn.forEach(o),Ce.forEach(o),ut=u(t),Ee=a(t,"P",{});var mn=r(Ee);Dt=l(mn,"TODO!"),mn.forEach(o),gt=u(t),D=a(t,"H2",{class:!0});var $t=r(D);J=a($t,"A",{id:!0,class:!0,href:!0});var fn=r(J);Je=a(fn,"SPAN",{});var un=r(Je);M(ce.$$.fragment,un),un.forEach(o),fn.forEach(o),St=u($t),Ke=a($t,"SPAN",{});var gn=r(Ke);Wt=l(gn,"BLOOMConfig"),gn.forEach(o),$t.forEach(o),_t=u(t),q=a(t,"DIV",{class:!0});var re=r(q);M(pe.$$.fragment,re),Vt=u(re),S=a(re,"P",{});var De=r(S);Ut=l(De,"This is the configuration class to store the configuration of a "),qe=a(De,"A",{href:!0});var _n=r(qe);Gt=l(_n,"BLOOMModel"),_n.forEach(o),Rt=l(De,`. It is used to instantiate a GPT-2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the BLOOM architecture
`),he=a(De,"A",{href:!0,rel:!0});var On=r(he);Yt=l(On,"bigscience/bloom"),On.forEach(o),Jt=l(De,"."),De.forEach(o),Kt=u(re),W=a(re,"P",{});var Se=r(W);Qt=l(Se,"Configuration objects inherit from "),Pe=a(Se,"A",{href:!0});var bn=r(Pe);Xt=l(bn,"PretrainedConfig"),bn.forEach(o),Zt=l(Se,` and can be used to control the model outputs. Read the
documentation from `),Fe=a(Se,"A",{href:!0});var vn=r(Fe);eo=l(vn,"PretrainedConfig"),vn.forEach(o),to=l(Se," for more information."),Se.forEach(o),oo=u(re),M(K.$$.fragment,re),re.forEach(o),Ot=u(t),V=a(t,"H2",{class:!0});var Lt=r(V);Q=a(Lt,"A",{id:!0,class:!0,href:!0});var Mn=r(Q);Qe=a(Mn,"SPAN",{});var kn=r(Qe);M(me.$$.fragment,kn),kn.forEach(o),Mn.forEach(o),no=u(Lt),Xe=a(Lt,"SPAN",{});var yn=r(Xe);so=l(yn,"BLOOMModel"),yn.forEach(o),Lt.forEach(o),bt=u(t),z=a(t,"DIV",{class:!0});var H=r(z);M(fe.$$.fragment,H),ao=u(H),Ze=a(H,"P",{});var wn=r(Ze);ro=l(wn,"The bare BLOOM Model transformer outputting raw hidden-states without any specific head on top."),wn.forEach(o),io=u(H),ue=a(H,"P",{});var Tt=r(ue);lo=l(Tt,"This model inherits from "),Ae=a(Tt,"A",{href:!0});var $n=r(Ae);co=l($n,"PreTrainedModel"),$n.forEach(o),po=l(Tt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Tt.forEach(o),ho=u(H),ge=a(H,"P",{});var Bt=r(ge);mo=l(Bt,"This model is also a PyTorch "),_e=a(Bt,"A",{href:!0,rel:!0});var Ln=r(_e);fo=l(Ln,"torch.nn.Module"),Ln.forEach(o),uo=l(Bt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bt.forEach(o),go=u(H),F=a(H,"DIV",{class:!0});var ie=r(F);M(Oe.$$.fragment,ie),_o=u(ie),U=a(ie,"P",{});var We=r(U);Oo=l(We,"The "),je=a(We,"A",{href:!0});var Tn=r(je);bo=l(Tn,"BLOOMModel"),Tn.forEach(o),vo=l(We," forward method, overrides the "),et=a(We,"CODE",{});var Bn=r(et);Mo=l(Bn,"__call__"),Bn.forEach(o),ko=l(We," special method."),We.forEach(o),yo=u(ie),M(X.$$.fragment,ie),wo=u(ie),M(Z.$$.fragment,ie),ie.forEach(o),H.forEach(o),vt=u(t),G=a(t,"H2",{class:!0});var zt=r(G);ee=a(zt,"A",{id:!0,class:!0,href:!0});var zn=r(ee);tt=a(zn,"SPAN",{});var xn=r(tt);M(be.$$.fragment,xn),xn.forEach(o),zn.forEach(o),$o=u(zt),ot=a(zt,"SPAN",{});var Cn=r(ot);Lo=l(Cn,"BLOOMTokenizerFast"),Cn.forEach(o),zt.forEach(o),Mt=u(t),L=a(t,"DIV",{class:!0});var C=r(L);M(ve.$$.fragment,C),To=u(C),Me=a(C,"P",{});var xt=r(Me);Bo=l(xt,"Construct a \u201Cfast\u201D BLOOM tokenizer (backed by HuggingFace\u2019s "),nt=a(xt,"EM",{});var En=r(nt);zo=l(En,"tokenizers"),En.forEach(o),xo=l(xt,` library). Based on byte-level
Byte-Pair-Encoding.`),xt.forEach(o),Co=u(C),st=a(C,"P",{});var qn=r(st);Eo=l(qn,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),qn.forEach(o),qo=u(C),M(te.$$.fragment,C),Po=u(C),ke=a(C,"P",{});var Ct=r(ke);Fo=l(Ct,"You can get around that behavior by passing "),at=a(Ct,"CODE",{});var Pn=r(at);Ao=l(Pn,"add_prefix_space=True"),Pn.forEach(o),jo=l(Ct,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ct.forEach(o),Ho=u(C),M(oe.$$.fragment,C),No=u(C),ye=a(C,"P",{});var Et=r(ye);Io=l(Et,"This tokenizer inherits from "),He=a(Et,"A",{href:!0});var Fn=r(He);Do=l(Fn,"PreTrainedTokenizerFast"),Fn.forEach(o),So=l(Et,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Et.forEach(o),C.forEach(o),kt=u(t),R=a(t,"H2",{class:!0});var qt=r(R);ne=a(qt,"A",{id:!0,class:!0,href:!0});var An=r(ne);rt=a(An,"SPAN",{});var jn=r(rt);M(we.$$.fragment,jn),jn.forEach(o),An.forEach(o),Wo=u(qt),it=a(qt,"SPAN",{});var Hn=r(it);Vo=l(Hn,"BLOOMLMHeadModel"),Hn.forEach(o),qt.forEach(o),yt=u(t),x=a(t,"DIV",{class:!0});var N=r(x);M($e.$$.fragment,N),Uo=u(N),dt=a(N,"P",{});var Nn=r(dt);Go=l(Nn,`The BLOOM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nn.forEach(o),Ro=u(N),Le=a(N,"P",{});var Pt=r(Le);Yo=l(Pt,"This model inherits from "),Ne=a(Pt,"A",{href:!0});var In=r(Ne);Jo=l(In,"PreTrainedModel"),In.forEach(o),Ko=l(Pt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Pt.forEach(o),Qo=u(N),Te=a(N,"P",{});var Ft=r(Te);Xo=l(Ft,"This model is also a PyTorch "),Be=a(Ft,"A",{href:!0,rel:!0});var Dn=r(Be);Zo=l(Dn,"torch.nn.Module"),Dn.forEach(o),en=l(Ft,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ft.forEach(o),tn=u(N),A=a(N,"DIV",{class:!0});var de=r(A);M(ze.$$.fragment,de),on=u(de),Y=a(de,"P",{});var Ve=r(Y);nn=l(Ve,"The "),Ie=a(Ve,"A",{href:!0});var Sn=r(Ie);sn=l(Sn,"BLOOMLMHeadModel"),Sn.forEach(o),an=l(Ve," forward method, overrides the "),lt=a(Ve,"CODE",{});var Wn=r(lt);rn=l(Wn,"__call__"),Wn.forEach(o),dn=l(Ve," special method."),Ve.forEach(o),ln=u(de),M(se.$$.fragment,de),cn=u(de),M(ae.$$.fragment,de),de.forEach(o),N.forEach(o),this.h()},h(){m(i,"name","hf:doc:metadata"),m(i,"content",JSON.stringify(ns)),m(c,"id","bloom"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#bloom"),m(h,"class","relative group"),m(j,"id","overview"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#overview"),m(P,"class","relative group"),m(J,"id","transformers.BLOOMConfig"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#transformers.BLOOMConfig"),m(D,"class","relative group"),m(qe,"href","/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMModel"),m(he,"href","https://huggingface.co/bigscience/bloom"),m(he,"rel","nofollow"),m(Pe,"href","/docs/transformers/pr_17202/en/main_classes/configuration#transformers.PretrainedConfig"),m(Fe,"href","/docs/transformers/pr_17202/en/main_classes/configuration#transformers.PretrainedConfig"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"id","transformers.BLOOMModel"),m(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Q,"href","#transformers.BLOOMModel"),m(V,"class","relative group"),m(Ae,"href","/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel"),m(_e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_e,"rel","nofollow"),m(je,"href","/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMModel"),m(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"id","transformers.BLOOMTokenizerFast"),m(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ee,"href","#transformers.BLOOMTokenizerFast"),m(G,"class","relative group"),m(He,"href","/docs/transformers/pr_17202/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"id","transformers.BLOOMLMHeadModel"),m(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ne,"href","#transformers.BLOOMLMHeadModel"),m(R,"class","relative group"),m(Ne,"href","/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel"),m(Be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Be,"rel","nofollow"),m(Ie,"href","/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BLOOMLMHeadModel"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,i),O(t,b,g),O(t,h,g),e(h,c),e(c,_),k(n,_,null),e(h,p),e(h,B),e(B,I),O(t,E,g),O(t,P,g),e(P,j),e(j,Re),k(le,Re,null),e(P,Nt),e(P,Ye),e(Ye,It),O(t,ut,g),O(t,Ee,g),e(Ee,Dt),O(t,gt,g),O(t,D,g),e(D,J),e(J,Je),k(ce,Je,null),e(D,St),e(D,Ke),e(Ke,Wt),O(t,_t,g),O(t,q,g),k(pe,q,null),e(q,Vt),e(q,S),e(S,Ut),e(S,qe),e(qe,Gt),e(S,Rt),e(S,he),e(he,Yt),e(S,Jt),e(q,Kt),e(q,W),e(W,Qt),e(W,Pe),e(Pe,Xt),e(W,Zt),e(W,Fe),e(Fe,eo),e(W,to),e(q,oo),k(K,q,null),O(t,Ot,g),O(t,V,g),e(V,Q),e(Q,Qe),k(me,Qe,null),e(V,no),e(V,Xe),e(Xe,so),O(t,bt,g),O(t,z,g),k(fe,z,null),e(z,ao),e(z,Ze),e(Ze,ro),e(z,io),e(z,ue),e(ue,lo),e(ue,Ae),e(Ae,co),e(ue,po),e(z,ho),e(z,ge),e(ge,mo),e(ge,_e),e(_e,fo),e(ge,uo),e(z,go),e(z,F),k(Oe,F,null),e(F,_o),e(F,U),e(U,Oo),e(U,je),e(je,bo),e(U,vo),e(U,et),e(et,Mo),e(U,ko),e(F,yo),k(X,F,null),e(F,wo),k(Z,F,null),O(t,vt,g),O(t,G,g),e(G,ee),e(ee,tt),k(be,tt,null),e(G,$o),e(G,ot),e(ot,Lo),O(t,Mt,g),O(t,L,g),k(ve,L,null),e(L,To),e(L,Me),e(Me,Bo),e(Me,nt),e(nt,zo),e(Me,xo),e(L,Co),e(L,st),e(st,Eo),e(L,qo),k(te,L,null),e(L,Po),e(L,ke),e(ke,Fo),e(ke,at),e(at,Ao),e(ke,jo),e(L,Ho),k(oe,L,null),e(L,No),e(L,ye),e(ye,Io),e(ye,He),e(He,Do),e(ye,So),O(t,kt,g),O(t,R,g),e(R,ne),e(ne,rt),k(we,rt,null),e(R,Wo),e(R,it),e(it,Vo),O(t,yt,g),O(t,x,g),k($e,x,null),e(x,Uo),e(x,dt),e(dt,Go),e(x,Ro),e(x,Le),e(Le,Yo),e(Le,Ne),e(Ne,Jo),e(Le,Ko),e(x,Qo),e(x,Te),e(Te,Xo),e(Te,Be),e(Be,Zo),e(Te,en),e(x,tn),e(x,A),k(ze,A,null),e(A,on),e(A,Y),e(Y,nn),e(Y,Ie),e(Ie,sn),e(Y,an),e(Y,lt),e(lt,rn),e(Y,dn),e(A,ln),k(se,A,null),e(A,cn),k(ae,A,null),wt=!0},p(t,[g]){const xe={};g&2&&(xe.$$scope={dirty:g,ctx:t}),K.$set(xe);const ct={};g&2&&(ct.$$scope={dirty:g,ctx:t}),X.$set(ct);const pt={};g&2&&(pt.$$scope={dirty:g,ctx:t}),Z.$set(pt);const ht={};g&2&&(ht.$$scope={dirty:g,ctx:t}),te.$set(ht);const Ce={};g&2&&(Ce.$$scope={dirty:g,ctx:t}),oe.$set(Ce);const mt={};g&2&&(mt.$$scope={dirty:g,ctx:t}),se.$set(mt);const ft={};g&2&&(ft.$$scope={dirty:g,ctx:t}),ae.$set(ft)},i(t){wt||(y(n.$$.fragment,t),y(le.$$.fragment,t),y(ce.$$.fragment,t),y(pe.$$.fragment,t),y(K.$$.fragment,t),y(me.$$.fragment,t),y(fe.$$.fragment,t),y(Oe.$$.fragment,t),y(X.$$.fragment,t),y(Z.$$.fragment,t),y(be.$$.fragment,t),y(ve.$$.fragment,t),y(te.$$.fragment,t),y(oe.$$.fragment,t),y(we.$$.fragment,t),y($e.$$.fragment,t),y(ze.$$.fragment,t),y(se.$$.fragment,t),y(ae.$$.fragment,t),wt=!0)},o(t){w(n.$$.fragment,t),w(le.$$.fragment,t),w(ce.$$.fragment,t),w(pe.$$.fragment,t),w(K.$$.fragment,t),w(me.$$.fragment,t),w(fe.$$.fragment,t),w(Oe.$$.fragment,t),w(X.$$.fragment,t),w(Z.$$.fragment,t),w(be.$$.fragment,t),w(ve.$$.fragment,t),w(te.$$.fragment,t),w(oe.$$.fragment,t),w(we.$$.fragment,t),w($e.$$.fragment,t),w(ze.$$.fragment,t),w(se.$$.fragment,t),w(ae.$$.fragment,t),wt=!1},d(t){o(i),t&&o(b),t&&o(h),$(n),t&&o(E),t&&o(P),$(le),t&&o(ut),t&&o(Ee),t&&o(gt),t&&o(D),$(ce),t&&o(_t),t&&o(q),$(pe),$(K),t&&o(Ot),t&&o(V),$(me),t&&o(bt),t&&o(z),$(fe),$(Oe),$(X),$(Z),t&&o(vt),t&&o(G),$(be),t&&o(Mt),t&&o(L),$(ve),$(te),$(oe),t&&o(kt),t&&o(R),$(we),t&&o(yt),t&&o(x),$($e),$(ze),$(se),$(ae)}}}const ns={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BLOOMConfig",title:"BLOOMConfig"},{local:"transformers.BLOOMModel",title:"BLOOMModel"},{local:"transformers.BLOOMTokenizerFast",title:"BLOOMTokenizerFast"},{local:"transformers.BLOOMLMHeadModel",title:"BLOOMLMHeadModel"}],title:"BLOOM"};function ss(T){return Yn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ps extends Vn{constructor(i){super();Un(this,i,ss,os,Gn,{})}}export{ps as default,ns as metadata};
