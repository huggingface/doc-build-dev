import{S as gs,i as _s,s as vs,e as s,k as p,w as k,t as i,M as bs,c as a,d as t,m as h,a as r,x as y,h as l,b as u,F as e,g as v,y as w,q as $,o as T,B,v as ks,L as Yo}from"../../chunks/vendor-6b77c823.js";import{T as Pn}from"../../chunks/Tip-39098574.js";import{D as Ye}from"../../chunks/Docstring-1088f2fb.js";import{C as Jo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Je}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ro}from"../../chunks/ExampleCodeBlock-5212b321.js";function ys(x){let d,b,f,c,_;return c=new Jo({props:{code:`from transformers import BloomModel, BloomConfig

# Initializing a Bloom configuration
configuration = BloomConfig()

# Initializing a model from the configuration
model = BloomModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomModel, BloomConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bloom configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BloomConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),f=p(),k(c.$$.fragment)},l(n){d=a(n,"P",{});var m=r(d);b=l(m,"Example:"),m.forEach(t),f=h(n),y(c.$$.fragment,n)},m(n,m){v(n,d,m),e(d,b),v(n,f,m),w(c,n,m),_=!0},p:Yo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function ws(x){let d,b,f,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=r(d);b=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(m,"CODE",{});var M=r(f);c=l(M,"Module"),M.forEach(t),_=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){v(n,d,m),e(d,b),e(d,f),e(f,c),e(d,_)},d(n){n&&t(d)}}}function $s(x){let d,b,f,c,_;return c=new Jo({props:{code:`from transformers import BloomTokenizer, BloomModel
import torch

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomModel.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),b=i("Example:"),f=p(),k(c.$$.fragment)},l(n){d=a(n,"P",{});var m=r(d);b=l(m,"Example:"),m.forEach(t),f=h(n),y(c.$$.fragment,n)},m(n,m){v(n,d,m),e(d,b),v(n,f,m),w(c,n,m),_=!0},p:Yo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function Ts(x){let d,b,f,c,_;return c=new Jo({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),b=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=p(),k(c.$$.fragment)},l(n){d=a(n,"P",{});var m=r(d);b=l(m,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m.forEach(t),f=h(n),y(c.$$.fragment,n)},m(n,m){v(n,d,m),e(d,b),v(n,f,m),w(c,n,m),_=!0},p:Yo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function Bs(x){let d,b,f,c,_,n,m,M;return{c(){d=s("p"),b=i("When used with "),f=s("code"),c=i("is_split_into_words=True"),_=i(", this tokenizer needs to be instantiated with "),n=s("code"),m=i("add_prefix_space=True"),M=i(".")},l(O){d=a(O,"P",{});var q=r(d);b=l(q,"When used with "),f=a(q,"CODE",{});var L=r(f);c=l(L,"is_split_into_words=True"),L.forEach(t),_=l(q,", this tokenizer needs to be instantiated with "),n=a(q,"CODE",{});var N=r(n);m=l(N,"add_prefix_space=True"),N.forEach(t),M=l(q,"."),q.forEach(t)},m(O,q){v(O,d,q),e(d,b),e(d,f),e(f,c),e(d,_),e(d,n),e(n,m),e(d,M)},d(O){O&&t(d)}}}function zs(x){let d,b,f,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var m=r(d);b=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(m,"CODE",{});var M=r(f);c=l(M,"Module"),M.forEach(t),_=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(n,m){v(n,d,m),e(d,b),e(d,f),e(f,c),e(d,_)},d(n){n&&t(d)}}}function xs(x){let d,b,f,c,_;return c=new Jo({props:{code:`import torch
from transformers import BloomTokenizer, BloomForCausalLM

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomForCausalLM.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),b=i("Example:"),f=p(),k(c.$$.fragment)},l(n){d=a(n,"P",{});var m=r(d);b=l(m,"Example:"),m.forEach(t),f=h(n),y(c.$$.fragment,n)},m(n,m){v(n,d,m),e(d,b),v(n,f,m),w(c,n,m),_=!0},p:Yo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function Ms(x){let d,b,f,c,_,n,m,M,O,q,L,N,Ke,pe,Ko,Qe,Qo,To,Q,Xo,he,Zo,et,Bo,E,Xe,ot,tt,Ze,nt,st,eo,at,rt,oo,it,lt,to,dt,zo,H,X,no,ue,ct,so,mt,xo,A,fe,pt,U,ht,je,ut,ft,ge,gt,_t,vt,V,bt,Ie,kt,yt,Ne,wt,$t,Tt,Z,Mo,G,ee,ao,_e,Bt,ro,zt,Co,C,ve,xt,io,Mt,Ct,be,Ft,Se,Et,Pt,qt,ke,At,ye,Lt,jt,It,j,we,Nt,R,St,De,Dt,Wt,lo,Ot,Ht,Ut,oe,Vt,te,Fo,Y,ne,co,$e,Gt,mo,Rt,Eo,z,Te,Yt,Be,Jt,po,Kt,Qt,Xt,ho,Zt,en,se,on,ze,tn,uo,nn,sn,an,ae,rn,xe,ln,We,dn,cn,Po,J,re,fo,Me,mn,go,pn,qo,F,Ce,hn,_o,un,fn,Fe,gn,Oe,_n,vn,bn,Ee,kn,Pe,yn,wn,$n,I,qe,Tn,K,Bn,He,zn,xn,vo,Mn,Cn,Fn,ie,En,le,Ao;return n=new Je({}),pe=new Je({}),ue=new Je({}),fe=new Ye({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"seq_length",val:" = 20"},{name:"offset_alibi",val:" = 100"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"n_inner",val:" = None"},{name:"masked_softmax_fusion",val:" = True"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"bias_dropout_fusion",val:" = True"},{name:"skip_bias_add",val:" = True"},{name:"skip_bias_add_qkv",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"attention_softmax_in_fp32",val:" = True"},{name:"pretraining_tp",val:" = 1"},{name:"pretraining_pp",val:" = 1"},{name:"dtype",val:" = 'bfloat16'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"seq_length"},{anchor:"transformers.BloomConfig.offset_alibi",description:`<strong>offset_alibi</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The padding added to the alibi positional embeddings to deal with cached input`,name:"offset_alibi"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BloomConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times hidden_size`,name:"n_inner"},{anchor:"transformers.BloomConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.BloomConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.BloomConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.BloomConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.BloomConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BloomConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BloomConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BloomConfig.bias_dropout_fusion",description:`<strong>bias_dropout_fusion</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If enabled, apply dropout when adding the attention output together with the attention bias in the
transformer blocks`,name:"bias_dropout_fusion"},{anchor:"transformers.BloomConfig.skip_bias_add",description:`<strong>skip_bias_add</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for each linear layer in the transformer blocks`,name:"skip_bias_add"},{anchor:"transformers.BloomConfig.skip_bias_add_qkv",description:`<strong>skip_bias_add_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for the first linear layer in the transformer blocks`,name:"skip_bias_add_qkv"},{anchor:"transformers.BloomConfig.attention_softmax_in_fp32",description:`<strong>attention_softmax_in_fp32</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code> and the <code>dtype</code> is set to <code>float16</code> it will scale the input of the Softmax function to
<code>fp32</code>`,name:"attention_softmax_in_fp32"},{anchor:"transformers.BloomConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function in <code>bias_dropout_fusion</code>`,name:"hidden_dropout"},{anchor:"transformers.BloomConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BloomConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.BloomConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.BloomConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/configuration_bloom.py#L29"}}),Z=new Ro({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[ys]},$$scope:{ctx:x}}}),_e=new Je({}),ve=new Ye({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L650"}}),we=new Ye({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17202/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17202/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BloomModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17202/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L683",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17202/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
`}}),oe=new Pn({props:{$$slots:{default:[ws]},$$scope:{ctx:x}}}),te=new Ro({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[$s]},$$scope:{ctx:x}}}),$e=new Je({}),Te=new Ye({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BloomTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BloomTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BloomTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BloomTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.BloomTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BloomTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Bloom tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BloomTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/tokenization_bloom_fast.py#L54"}}),se=new Ro({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[Ts]},$$scope:{ctx:x}}}),ae=new Pn({props:{$$slots:{default:[Bs]},$$scope:{ctx:x}}}),Me=new Je({}),Ce=new Ye({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L852"}}),qe=new Ye({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17202/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17202/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BloomForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17202/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17202/src/transformers/models/bloom/modeling_bloom.py#L901",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17202/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
`}}),ie=new Pn({props:{$$slots:{default:[zs]},$$scope:{ctx:x}}}),le=new Ro({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[xs]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=p(),f=s("h1"),c=s("a"),_=s("span"),k(n.$$.fragment),m=p(),M=s("span"),O=i("Bloom"),q=p(),L=s("h2"),N=s("a"),Ke=s("span"),k(pe.$$.fragment),Ko=p(),Qe=s("span"),Qo=i("Overview"),To=p(),Q=s("p"),Xo=i("Bloom model has been proposed with its various versions through the "),he=s("a"),Zo=i("BigScience Workshop"),et=i(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of Bloom is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. Bloom is available in the following version:`),Bo=p(),E=s("ul"),Xe=s("li"),ot=i("350M parameters"),tt=p(),Ze=s("li"),nt=i("760M parameters"),st=p(),eo=s("li"),at=i("1B300M parameters"),rt=p(),oo=s("li"),it=i("2B500M parameters"),lt=p(),to=s("li"),dt=i("175B parameters"),zo=p(),H=s("h2"),X=s("a"),no=s("span"),k(ue.$$.fragment),ct=p(),so=s("span"),mt=i("BloomConfig"),xo=p(),A=s("div"),k(fe.$$.fragment),pt=p(),U=s("p"),ht=i("This is the configuration class to store the configuration of a "),je=s("a"),ut=i("BloomModel"),ft=i(`. It is used to instantiate a GPT-2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ge=s("a"),gt=i("bigscience/bloom"),_t=i("."),vt=p(),V=s("p"),bt=i("Configuration objects inherit from "),Ie=s("a"),kt=i("PretrainedConfig"),yt=i(` and can be used to control the model outputs. Read the
documentation from `),Ne=s("a"),wt=i("PretrainedConfig"),$t=i(" for more information."),Tt=p(),k(Z.$$.fragment),Mo=p(),G=s("h2"),ee=s("a"),ao=s("span"),k(_e.$$.fragment),Bt=p(),ro=s("span"),zt=i("BloomModel"),Co=p(),C=s("div"),k(ve.$$.fragment),xt=p(),io=s("p"),Mt=i("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Ct=p(),be=s("p"),Ft=i("This model inherits from "),Se=s("a"),Et=i("PreTrainedModel"),Pt=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),qt=p(),ke=s("p"),At=i("This model is also a PyTorch "),ye=s("a"),Lt=i("torch.nn.Module"),jt=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),It=p(),j=s("div"),k(we.$$.fragment),Nt=p(),R=s("p"),St=i("The "),De=s("a"),Dt=i("BloomModel"),Wt=i(" forward method, overrides the "),lo=s("code"),Ot=i("__call__"),Ht=i(" special method."),Ut=p(),k(oe.$$.fragment),Vt=p(),k(te.$$.fragment),Fo=p(),Y=s("h2"),ne=s("a"),co=s("span"),k($e.$$.fragment),Gt=p(),mo=s("span"),Rt=i("BloomTokenizerFast"),Eo=p(),z=s("div"),k(Te.$$.fragment),Yt=p(),Be=s("p"),Jt=i("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),po=s("em"),Kt=i("tokenizers"),Qt=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Xt=p(),ho=s("p"),Zt=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),en=p(),k(se.$$.fragment),on=p(),ze=s("p"),tn=i("You can get around that behavior by passing "),uo=s("code"),nn=i("add_prefix_space=True"),sn=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),an=p(),k(ae.$$.fragment),rn=p(),xe=s("p"),ln=i("This tokenizer inherits from "),We=s("a"),dn=i("PreTrainedTokenizerFast"),cn=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Po=p(),J=s("h2"),re=s("a"),fo=s("span"),k(Me.$$.fragment),mn=p(),go=s("span"),pn=i("BloomForCausalLM"),qo=p(),F=s("div"),k(Ce.$$.fragment),hn=p(),_o=s("p"),un=i(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fn=p(),Fe=s("p"),gn=i("This model inherits from "),Oe=s("a"),_n=i("PreTrainedModel"),vn=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),bn=p(),Ee=s("p"),kn=i("This model is also a PyTorch "),Pe=s("a"),yn=i("torch.nn.Module"),wn=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$n=p(),I=s("div"),k(qe.$$.fragment),Tn=p(),K=s("p"),Bn=i("The "),He=s("a"),zn=i("BloomForCausalLM"),xn=i(" forward method, overrides the "),vo=s("code"),Mn=i("__call__"),Cn=i(" special method."),Fn=p(),k(ie.$$.fragment),En=p(),k(le.$$.fragment),this.h()},l(o){const g=bs('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(t),b=h(o),f=a(o,"H1",{class:!0});var Ae=r(f);c=a(Ae,"A",{id:!0,class:!0,href:!0});var bo=r(c);_=a(bo,"SPAN",{});var ko=r(_);y(n.$$.fragment,ko),ko.forEach(t),bo.forEach(t),m=h(Ae),M=a(Ae,"SPAN",{});var yo=r(M);O=l(yo,"Bloom"),yo.forEach(t),Ae.forEach(t),q=h(o),L=a(o,"H2",{class:!0});var Le=r(L);N=a(Le,"A",{id:!0,class:!0,href:!0});var wo=r(N);Ke=a(wo,"SPAN",{});var $o=r(Ke);y(pe.$$.fragment,$o),$o.forEach(t),wo.forEach(t),Ko=h(Le),Qe=a(Le,"SPAN",{});var qn=r(Qe);Qo=l(qn,"Overview"),qn.forEach(t),Le.forEach(t),To=h(o),Q=a(o,"P",{});var Lo=r(Q);Xo=l(Lo,"Bloom model has been proposed with its various versions through the "),he=a(Lo,"A",{href:!0,rel:!0});var An=r(he);Zo=l(An,"BigScience Workshop"),An.forEach(t),et=l(Lo,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of Bloom is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. Bloom is available in the following version:`),Lo.forEach(t),Bo=h(o),E=a(o,"UL",{});var S=r(E);Xe=a(S,"LI",{});var Ln=r(Xe);ot=l(Ln,"350M parameters"),Ln.forEach(t),tt=h(S),Ze=a(S,"LI",{});var jn=r(Ze);nt=l(jn,"760M parameters"),jn.forEach(t),st=h(S),eo=a(S,"LI",{});var In=r(eo);at=l(In,"1B300M parameters"),In.forEach(t),rt=h(S),oo=a(S,"LI",{});var Nn=r(oo);it=l(Nn,"2B500M parameters"),Nn.forEach(t),lt=h(S),to=a(S,"LI",{});var Sn=r(to);dt=l(Sn,"175B parameters"),Sn.forEach(t),S.forEach(t),zo=h(o),H=a(o,"H2",{class:!0});var jo=r(H);X=a(jo,"A",{id:!0,class:!0,href:!0});var Dn=r(X);no=a(Dn,"SPAN",{});var Wn=r(no);y(ue.$$.fragment,Wn),Wn.forEach(t),Dn.forEach(t),ct=h(jo),so=a(jo,"SPAN",{});var On=r(so);mt=l(On,"BloomConfig"),On.forEach(t),jo.forEach(t),xo=h(o),A=a(o,"DIV",{class:!0});var de=r(A);y(fe.$$.fragment,de),pt=h(de),U=a(de,"P",{});var Ue=r(U);ht=l(Ue,"This is the configuration class to store the configuration of a "),je=a(Ue,"A",{href:!0});var Hn=r(je);ut=l(Hn,"BloomModel"),Hn.forEach(t),ft=l(Ue,`. It is used to instantiate a GPT-2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ge=a(Ue,"A",{href:!0,rel:!0});var Un=r(ge);gt=l(Un,"bigscience/bloom"),Un.forEach(t),_t=l(Ue,"."),Ue.forEach(t),vt=h(de),V=a(de,"P",{});var Ve=r(V);bt=l(Ve,"Configuration objects inherit from "),Ie=a(Ve,"A",{href:!0});var Vn=r(Ie);kt=l(Vn,"PretrainedConfig"),Vn.forEach(t),yt=l(Ve,` and can be used to control the model outputs. Read the
documentation from `),Ne=a(Ve,"A",{href:!0});var Gn=r(Ne);wt=l(Gn,"PretrainedConfig"),Gn.forEach(t),$t=l(Ve," for more information."),Ve.forEach(t),Tt=h(de),y(Z.$$.fragment,de),de.forEach(t),Mo=h(o),G=a(o,"H2",{class:!0});var Io=r(G);ee=a(Io,"A",{id:!0,class:!0,href:!0});var Rn=r(ee);ao=a(Rn,"SPAN",{});var Yn=r(ao);y(_e.$$.fragment,Yn),Yn.forEach(t),Rn.forEach(t),Bt=h(Io),ro=a(Io,"SPAN",{});var Jn=r(ro);zt=l(Jn,"BloomModel"),Jn.forEach(t),Io.forEach(t),Co=h(o),C=a(o,"DIV",{class:!0});var D=r(C);y(ve.$$.fragment,D),xt=h(D),io=a(D,"P",{});var Kn=r(io);Mt=l(Kn,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Kn.forEach(t),Ct=h(D),be=a(D,"P",{});var No=r(be);Ft=l(No,"This model inherits from "),Se=a(No,"A",{href:!0});var Qn=r(Se);Et=l(Qn,"PreTrainedModel"),Qn.forEach(t),Pt=l(No,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),No.forEach(t),qt=h(D),ke=a(D,"P",{});var So=r(ke);At=l(So,"This model is also a PyTorch "),ye=a(So,"A",{href:!0,rel:!0});var Xn=r(ye);Lt=l(Xn,"torch.nn.Module"),Xn.forEach(t),jt=l(So,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),So.forEach(t),It=h(D),j=a(D,"DIV",{class:!0});var ce=r(j);y(we.$$.fragment,ce),Nt=h(ce),R=a(ce,"P",{});var Ge=r(R);St=l(Ge,"The "),De=a(Ge,"A",{href:!0});var Zn=r(De);Dt=l(Zn,"BloomModel"),Zn.forEach(t),Wt=l(Ge," forward method, overrides the "),lo=a(Ge,"CODE",{});var es=r(lo);Ot=l(es,"__call__"),es.forEach(t),Ht=l(Ge," special method."),Ge.forEach(t),Ut=h(ce),y(oe.$$.fragment,ce),Vt=h(ce),y(te.$$.fragment,ce),ce.forEach(t),D.forEach(t),Fo=h(o),Y=a(o,"H2",{class:!0});var Do=r(Y);ne=a(Do,"A",{id:!0,class:!0,href:!0});var os=r(ne);co=a(os,"SPAN",{});var ts=r(co);y($e.$$.fragment,ts),ts.forEach(t),os.forEach(t),Gt=h(Do),mo=a(Do,"SPAN",{});var ns=r(mo);Rt=l(ns,"BloomTokenizerFast"),ns.forEach(t),Do.forEach(t),Eo=h(o),z=a(o,"DIV",{class:!0});var P=r(z);y(Te.$$.fragment,P),Yt=h(P),Be=a(P,"P",{});var Wo=r(Be);Jt=l(Wo,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),po=a(Wo,"EM",{});var ss=r(po);Kt=l(ss,"tokenizers"),ss.forEach(t),Qt=l(Wo,` library). Based on byte-level
Byte-Pair-Encoding.`),Wo.forEach(t),Xt=h(P),ho=a(P,"P",{});var as=r(ho);Zt=l(as,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),as.forEach(t),en=h(P),y(se.$$.fragment,P),on=h(P),ze=a(P,"P",{});var Oo=r(ze);tn=l(Oo,"You can get around that behavior by passing "),uo=a(Oo,"CODE",{});var rs=r(uo);nn=l(rs,"add_prefix_space=True"),rs.forEach(t),sn=l(Oo,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Oo.forEach(t),an=h(P),y(ae.$$.fragment,P),rn=h(P),xe=a(P,"P",{});var Ho=r(xe);ln=l(Ho,"This tokenizer inherits from "),We=a(Ho,"A",{href:!0});var is=r(We);dn=l(is,"PreTrainedTokenizerFast"),is.forEach(t),cn=l(Ho,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ho.forEach(t),P.forEach(t),Po=h(o),J=a(o,"H2",{class:!0});var Uo=r(J);re=a(Uo,"A",{id:!0,class:!0,href:!0});var ls=r(re);fo=a(ls,"SPAN",{});var ds=r(fo);y(Me.$$.fragment,ds),ds.forEach(t),ls.forEach(t),mn=h(Uo),go=a(Uo,"SPAN",{});var cs=r(go);pn=l(cs,"BloomForCausalLM"),cs.forEach(t),Uo.forEach(t),qo=h(o),F=a(o,"DIV",{class:!0});var W=r(F);y(Ce.$$.fragment,W),hn=h(W),_o=a(W,"P",{});var ms=r(_o);un=l(ms,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ms.forEach(t),fn=h(W),Fe=a(W,"P",{});var Vo=r(Fe);gn=l(Vo,"This model inherits from "),Oe=a(Vo,"A",{href:!0});var ps=r(Oe);_n=l(ps,"PreTrainedModel"),ps.forEach(t),vn=l(Vo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Vo.forEach(t),bn=h(W),Ee=a(W,"P",{});var Go=r(Ee);kn=l(Go,"This model is also a PyTorch "),Pe=a(Go,"A",{href:!0,rel:!0});var hs=r(Pe);yn=l(hs,"torch.nn.Module"),hs.forEach(t),wn=l(Go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Go.forEach(t),$n=h(W),I=a(W,"DIV",{class:!0});var me=r(I);y(qe.$$.fragment,me),Tn=h(me),K=a(me,"P",{});var Re=r(K);Bn=l(Re,"The "),He=a(Re,"A",{href:!0});var us=r(He);zn=l(us,"BloomForCausalLM"),us.forEach(t),xn=l(Re," forward method, overrides the "),vo=a(Re,"CODE",{});var fs=r(vo);Mn=l(fs,"__call__"),fs.forEach(t),Cn=l(Re," special method."),Re.forEach(t),Fn=h(me),y(ie.$$.fragment,me),En=h(me),y(le.$$.fragment,me),me.forEach(t),W.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Cs)),u(c,"id","bloom"),u(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(c,"href","#bloom"),u(f,"class","relative group"),u(N,"id","overview"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#overview"),u(L,"class","relative group"),u(he,"href","https://bigscience.huggingface.co/"),u(he,"rel","nofollow"),u(X,"id","transformers.BloomConfig"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#transformers.BloomConfig"),u(H,"class","relative group"),u(je,"href","/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomModel"),u(ge,"href","https://huggingface.co/bigscience/bloom"),u(ge,"rel","nofollow"),u(Ie,"href","/docs/transformers/pr_17202/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ne,"href","/docs/transformers/pr_17202/en/main_classes/configuration#transformers.PretrainedConfig"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ee,"id","transformers.BloomModel"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#transformers.BloomModel"),u(G,"class","relative group"),u(Se,"href","/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel"),u(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ye,"rel","nofollow"),u(De,"href","/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomModel"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ne,"id","transformers.BloomTokenizerFast"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#transformers.BloomTokenizerFast"),u(Y,"class","relative group"),u(We,"href","/docs/transformers/pr_17202/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(re,"id","transformers.BloomForCausalLM"),u(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(re,"href","#transformers.BloomForCausalLM"),u(J,"class","relative group"),u(Oe,"href","/docs/transformers/pr_17202/en/main_classes/model#transformers.PreTrainedModel"),u(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Pe,"rel","nofollow"),u(He,"href","/docs/transformers/pr_17202/en/model_doc/bloom#transformers.BloomForCausalLM"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),v(o,b,g),v(o,f,g),e(f,c),e(c,_),w(n,_,null),e(f,m),e(f,M),e(M,O),v(o,q,g),v(o,L,g),e(L,N),e(N,Ke),w(pe,Ke,null),e(L,Ko),e(L,Qe),e(Qe,Qo),v(o,To,g),v(o,Q,g),e(Q,Xo),e(Q,he),e(he,Zo),e(Q,et),v(o,Bo,g),v(o,E,g),e(E,Xe),e(Xe,ot),e(E,tt),e(E,Ze),e(Ze,nt),e(E,st),e(E,eo),e(eo,at),e(E,rt),e(E,oo),e(oo,it),e(E,lt),e(E,to),e(to,dt),v(o,zo,g),v(o,H,g),e(H,X),e(X,no),w(ue,no,null),e(H,ct),e(H,so),e(so,mt),v(o,xo,g),v(o,A,g),w(fe,A,null),e(A,pt),e(A,U),e(U,ht),e(U,je),e(je,ut),e(U,ft),e(U,ge),e(ge,gt),e(U,_t),e(A,vt),e(A,V),e(V,bt),e(V,Ie),e(Ie,kt),e(V,yt),e(V,Ne),e(Ne,wt),e(V,$t),e(A,Tt),w(Z,A,null),v(o,Mo,g),v(o,G,g),e(G,ee),e(ee,ao),w(_e,ao,null),e(G,Bt),e(G,ro),e(ro,zt),v(o,Co,g),v(o,C,g),w(ve,C,null),e(C,xt),e(C,io),e(io,Mt),e(C,Ct),e(C,be),e(be,Ft),e(be,Se),e(Se,Et),e(be,Pt),e(C,qt),e(C,ke),e(ke,At),e(ke,ye),e(ye,Lt),e(ke,jt),e(C,It),e(C,j),w(we,j,null),e(j,Nt),e(j,R),e(R,St),e(R,De),e(De,Dt),e(R,Wt),e(R,lo),e(lo,Ot),e(R,Ht),e(j,Ut),w(oe,j,null),e(j,Vt),w(te,j,null),v(o,Fo,g),v(o,Y,g),e(Y,ne),e(ne,co),w($e,co,null),e(Y,Gt),e(Y,mo),e(mo,Rt),v(o,Eo,g),v(o,z,g),w(Te,z,null),e(z,Yt),e(z,Be),e(Be,Jt),e(Be,po),e(po,Kt),e(Be,Qt),e(z,Xt),e(z,ho),e(ho,Zt),e(z,en),w(se,z,null),e(z,on),e(z,ze),e(ze,tn),e(ze,uo),e(uo,nn),e(ze,sn),e(z,an),w(ae,z,null),e(z,rn),e(z,xe),e(xe,ln),e(xe,We),e(We,dn),e(xe,cn),v(o,Po,g),v(o,J,g),e(J,re),e(re,fo),w(Me,fo,null),e(J,mn),e(J,go),e(go,pn),v(o,qo,g),v(o,F,g),w(Ce,F,null),e(F,hn),e(F,_o),e(_o,un),e(F,fn),e(F,Fe),e(Fe,gn),e(Fe,Oe),e(Oe,_n),e(Fe,vn),e(F,bn),e(F,Ee),e(Ee,kn),e(Ee,Pe),e(Pe,yn),e(Ee,wn),e(F,$n),e(F,I),w(qe,I,null),e(I,Tn),e(I,K),e(K,Bn),e(K,He),e(He,zn),e(K,xn),e(K,vo),e(vo,Mn),e(K,Cn),e(I,Fn),w(ie,I,null),e(I,En),w(le,I,null),Ao=!0},p(o,[g]){const Ae={};g&2&&(Ae.$$scope={dirty:g,ctx:o}),Z.$set(Ae);const bo={};g&2&&(bo.$$scope={dirty:g,ctx:o}),oe.$set(bo);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:o}),te.$set(ko);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:o}),se.$set(yo);const Le={};g&2&&(Le.$$scope={dirty:g,ctx:o}),ae.$set(Le);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:o}),ie.$set(wo);const $o={};g&2&&($o.$$scope={dirty:g,ctx:o}),le.$set($o)},i(o){Ao||($(n.$$.fragment,o),$(pe.$$.fragment,o),$(ue.$$.fragment,o),$(fe.$$.fragment,o),$(Z.$$.fragment,o),$(_e.$$.fragment,o),$(ve.$$.fragment,o),$(we.$$.fragment,o),$(oe.$$.fragment,o),$(te.$$.fragment,o),$($e.$$.fragment,o),$(Te.$$.fragment,o),$(se.$$.fragment,o),$(ae.$$.fragment,o),$(Me.$$.fragment,o),$(Ce.$$.fragment,o),$(qe.$$.fragment,o),$(ie.$$.fragment,o),$(le.$$.fragment,o),Ao=!0)},o(o){T(n.$$.fragment,o),T(pe.$$.fragment,o),T(ue.$$.fragment,o),T(fe.$$.fragment,o),T(Z.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(we.$$.fragment,o),T(oe.$$.fragment,o),T(te.$$.fragment,o),T($e.$$.fragment,o),T(Te.$$.fragment,o),T(se.$$.fragment,o),T(ae.$$.fragment,o),T(Me.$$.fragment,o),T(Ce.$$.fragment,o),T(qe.$$.fragment,o),T(ie.$$.fragment,o),T(le.$$.fragment,o),Ao=!1},d(o){t(d),o&&t(b),o&&t(f),B(n),o&&t(q),o&&t(L),B(pe),o&&t(To),o&&t(Q),o&&t(Bo),o&&t(E),o&&t(zo),o&&t(H),B(ue),o&&t(xo),o&&t(A),B(fe),B(Z),o&&t(Mo),o&&t(G),B(_e),o&&t(Co),o&&t(C),B(ve),B(we),B(oe),B(te),o&&t(Fo),o&&t(Y),B($e),o&&t(Eo),o&&t(z),B(Te),B(se),B(ae),o&&t(Po),o&&t(J),B(Me),o&&t(qo),o&&t(F),B(Ce),B(qe),B(ie),B(le)}}}const Cs={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"}],title:"Bloom"};function Fs(x){return ks(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Is extends gs{constructor(d){super();_s(this,d,Fs,Ms,vs,{})}}export{Is as default,Cs as metadata};
