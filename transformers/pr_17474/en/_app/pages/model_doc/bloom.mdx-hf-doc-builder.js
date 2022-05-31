import{S as ks,i as ys,s as ws,e as s,k as m,w as k,t as i,M as $s,c as r,d as t,m as p,a,x as y,h as l,b as u,G as e,g as b,y as w,q as $,o as T,B,v as Ts,L as Jo}from"../../chunks/vendor-hf-doc-builder.js";import{T as An}from"../../chunks/Tip-hf-doc-builder.js";import{D as Ye}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ko}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Yo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Bs(z){let d,v,f,c,_;return c=new Ko({props:{code:`from transformers import BloomModel, BloomConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),v=i("Example:"),f=m(),k(c.$$.fragment)},l(n){d=r(n,"P",{});var h=a(d);v=l(h,"Example:"),h.forEach(t),f=p(n),y(c.$$.fragment,n)},m(n,h){b(n,d,h),e(d,v),b(n,f,h),w(c,n,h),_=!0},p:Jo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function xs(z){let d,v,f,c,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var h=a(d);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var C=a(f);c=l(C,"Module"),C.forEach(t),_=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,d,h),e(d,v),e(d,f),e(f,c),e(d,_)},d(n){n&&t(d)}}}function zs(z){let d,v,f,c,_;return c=new Ko({props:{code:`from transformers import BloomTokenizer, BloomModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),v=i("Example:"),f=m(),k(c.$$.fragment)},l(n){d=r(n,"P",{});var h=a(d);v=l(h,"Example:"),h.forEach(t),f=p(n),y(c.$$.fragment,n)},m(n,h){b(n,d,h),e(d,v),b(n,f,h),w(c,n,h),_=!0},p:Jo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function Ms(z){let d,v,f,c,_;return c=new Ko({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),v=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=m(),k(c.$$.fragment)},l(n){d=r(n,"P",{});var h=a(d);v=l(h,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h.forEach(t),f=p(n),y(c.$$.fragment,n)},m(n,h){b(n,d,h),e(d,v),b(n,f,h),w(c,n,h),_=!0},p:Jo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function Cs(z){let d,v,f,c,_,n,h,C;return{c(){d=s("p"),v=i("When used with "),f=s("code"),c=i("is_split_into_words=True"),_=i(", this tokenizer needs to be instantiated with "),n=s("code"),h=i("add_prefix_space=True"),C=i(".")},l(O){d=r(O,"P",{});var q=a(d);v=l(q,"When used with "),f=r(q,"CODE",{});var A=a(f);c=l(A,"is_split_into_words=True"),A.forEach(t),_=l(q,", this tokenizer needs to be instantiated with "),n=r(q,"CODE",{});var S=a(n);h=l(S,"add_prefix_space=True"),S.forEach(t),C=l(q,"."),q.forEach(t)},m(O,q){b(O,d,q),e(d,v),e(d,f),e(f,c),e(d,_),e(d,n),e(n,h),e(d,C)},d(O){O&&t(d)}}}function Fs(z){let d,v,f,c,_;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var h=a(d);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var C=a(f);c=l(C,"Module"),C.forEach(t),_=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,d,h),e(d,v),e(d,f),e(f,c),e(d,_)},d(n){n&&t(d)}}}function Es(z){let d,v,f,c,_;return c=new Ko({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),v=i("Example:"),f=m(),k(c.$$.fragment)},l(n){d=r(n,"P",{});var h=a(d);v=l(h,"Example:"),h.forEach(t),f=p(n),y(c.$$.fragment,n)},m(n,h){b(n,d,h),e(d,v),b(n,f,h),w(c,n,h),_=!0},p:Jo,i(n){_||($(c.$$.fragment,n),_=!0)},o(n){T(c.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(f),B(c,n)}}}function Ps(z){let d,v,f,c,_,n,h,C,O,q,A,S,Ke,pe,Qo,Qe,Xo,Bo,Q,Zo,he,et,ot,xo,M,Xe,tt,nt,Ze,st,rt,eo,at,it,oo,lt,dt,to,ct,mt,no,pt,zo,H,X,so,ue,ht,ro,ut,Mo,L,fe,ft,U,gt,je,_t,bt,ge,vt,kt,yt,V,wt,Ie,$t,Tt,Ne,Bt,xt,zt,Z,Co,G,ee,ao,_e,Mt,io,Ct,Fo,F,be,Ft,lo,Et,Pt,ve,qt,Se,Lt,At,jt,ke,It,ye,Nt,St,Dt,j,we,Wt,R,Ot,De,Ht,Ut,co,Vt,Gt,Rt,oe,Yt,te,Eo,Y,ne,mo,$e,Jt,po,Kt,Po,x,Te,Qt,Be,Xt,ho,Zt,en,on,uo,tn,nn,se,sn,xe,rn,fo,an,ln,dn,re,cn,ze,mn,We,pn,hn,qo,J,ae,go,Me,un,_o,fn,Lo,E,Ce,gn,bo,_n,bn,Fe,vn,Oe,kn,yn,wn,Ee,$n,Pe,Tn,Bn,xn,I,qe,zn,K,Mn,He,Cn,Fn,vo,En,Pn,qn,ie,Ln,le,Ao;return n=new Je({}),pe=new Je({}),ue=new Je({}),fe=new Ye({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"n_inner",val:" = None"},{name:"masked_softmax_fusion",val:" = True"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"bias_dropout_fusion",val:" = True"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"attention_softmax_in_fp32",val:" = True"},{name:"pretraining_tp",val:" = 1"},{name:"dtype",val:" = 'bfloat16'"},{name:"gradient_checkpointing",val:" = True"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the Bloom model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.dtype",description:`<strong>dtype</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bfloat16&quot;</code>) &#x2014;
Precision that has been used for the model&#x2019;s training in Megatron. Please load the model in the correct
precision by doing <code>model = BloomModel.from_pretrained(model_name, torch_dtype=&quot;auto&quot;)</code>.\``,name:"dtype"},{anchor:"transformers.BloomConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.BloomConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"},{anchor:"transformers.BloomConfig.pretraining_tp",description:`<strong>pretraining_tp</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
Tensor parallelism rank used during pretraining with Megatron. Please refer to <a href="https://huggingface.co/docs/transformers/parallelism" rel="nofollow">this
document</a> to understand more about it. This value is
necessary to ensure exact reproducibility of the pretraining results. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>`,name:"pretraining_tp"},{anchor:"transformers.BloomConfig.gradient_checkpointing",description:`<strong>gradient_checkpointing</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use gradient checkpointing.`,name:"gradient_checkpointing"},{anchor:"transformers.BloomConfig.slow_but_exact",description:`<strong>slow_but_exact</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Experimental feature. Whether to use slow but exact implementation of the attention mechanism. While
merging the TP rank tensors, due to slicing operations the results may be slightly different between the
model trained on Megatron and our model. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. A solution to obtain more accurate results is to
enable this feature. Enabling this will hurt the computational time of the inference. Will be probably
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/vr_17474/src/transformers/models/bloom/configuration_bloom.py#L32"}}),Z=new Yo({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[Bs]},$$scope:{ctx:z}}}),_e=new Je({}),be=new Ye({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17474/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17474/src/transformers/models/bloom/modeling_bloom.py#L675"}}),we=new Ye({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17474/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17474/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17474/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17474/src/transformers/models/bloom/modeling_bloom.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17474/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomConfig"
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
  href="/docs/transformers/pr_17474/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new An({props:{$$slots:{default:[xs]},$$scope:{ctx:z}}}),te=new Yo({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[zs]},$$scope:{ctx:z}}}),$e=new Je({}),Te=new Ye({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_17474/src/transformers/models/bloom/tokenization_bloom_fast.py#L59"}}),se=new Yo({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[Ms]},$$scope:{ctx:z}}}),re=new An({props:{$$slots:{default:[Cs]},$$scope:{ctx:z}}}),Me=new Je({}),Ce=new Ye({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17474/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17474/src/transformers/models/bloom/modeling_bloom.py#L848"}}),qe=new Ye({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17474/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17474/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17474/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17474/src/transformers/models/bloom/modeling_bloom.py#L893",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17474/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomConfig"
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
  href="/docs/transformers/pr_17474/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new An({props:{$$slots:{default:[Fs]},$$scope:{ctx:z}}}),le=new Yo({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[Es]},$$scope:{ctx:z}}}),{c(){d=s("meta"),v=m(),f=s("h1"),c=s("a"),_=s("span"),k(n.$$.fragment),h=m(),C=s("span"),O=i("BLOOM"),q=m(),A=s("h2"),S=s("a"),Ke=s("span"),k(pe.$$.fragment),Qo=m(),Qe=s("span"),Xo=i("Overview"),Bo=m(),Q=s("p"),Zo=i("Bloom model has been proposed with its various versions through the "),he=s("a"),et=i("BigScience Workshop"),ot=i(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of Bloom is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. Bloom is available in the following version:`),xo=m(),M=s("ul"),Xe=s("li"),tt=i("350M parameters"),nt=m(),Ze=s("li"),st=i("760M parameters"),rt=m(),eo=s("li"),at=i("1.3B parameters"),it=m(),oo=s("li"),lt=i("2.5B parameters"),dt=m(),to=s("li"),ct=i("6.3B parameters"),mt=m(),no=s("li"),pt=i("175B parameters"),zo=m(),H=s("h2"),X=s("a"),so=s("span"),k(ue.$$.fragment),ht=m(),ro=s("span"),ut=i("BloomConfig"),Mo=m(),L=s("div"),k(fe.$$.fragment),ft=m(),U=s("p"),gt=i("This is the configuration class to store the configuration of a "),je=s("a"),_t=i("BloomModel"),bt=i(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ge=s("a"),vt=i("bigscience/bloom"),kt=i("."),yt=m(),V=s("p"),wt=i("Configuration objects inherit from "),Ie=s("a"),$t=i("PretrainedConfig"),Tt=i(` and can be used to control the model outputs. Read the
documentation from `),Ne=s("a"),Bt=i("PretrainedConfig"),xt=i(" for more information."),zt=m(),k(Z.$$.fragment),Co=m(),G=s("h2"),ee=s("a"),ao=s("span"),k(_e.$$.fragment),Mt=m(),io=s("span"),Ct=i("BloomModel"),Fo=m(),F=s("div"),k(be.$$.fragment),Ft=m(),lo=s("p"),Et=i("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Pt=m(),ve=s("p"),qt=i("This model inherits from "),Se=s("a"),Lt=i("PreTrainedModel"),At=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),jt=m(),ke=s("p"),It=i("This model is also a PyTorch "),ye=s("a"),Nt=i("torch.nn.Module"),St=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dt=m(),j=s("div"),k(we.$$.fragment),Wt=m(),R=s("p"),Ot=i("The "),De=s("a"),Ht=i("BloomModel"),Ut=i(" forward method, overrides the "),co=s("code"),Vt=i("__call__"),Gt=i(" special method."),Rt=m(),k(oe.$$.fragment),Yt=m(),k(te.$$.fragment),Eo=m(),Y=s("h2"),ne=s("a"),mo=s("span"),k($e.$$.fragment),Jt=m(),po=s("span"),Kt=i("BloomTokenizerFast"),Po=m(),x=s("div"),k(Te.$$.fragment),Qt=m(),Be=s("p"),Xt=i("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),ho=s("em"),Zt=i("tokenizers"),en=i(` library). Based on byte-level
Byte-Pair-Encoding.`),on=m(),uo=s("p"),tn=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),nn=m(),k(se.$$.fragment),sn=m(),xe=s("p"),rn=i("You can get around that behavior by passing "),fo=s("code"),an=i("add_prefix_space=True"),ln=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),dn=m(),k(re.$$.fragment),cn=m(),ze=s("p"),mn=i("This tokenizer inherits from "),We=s("a"),pn=i("PreTrainedTokenizerFast"),hn=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qo=m(),J=s("h2"),ae=s("a"),go=s("span"),k(Me.$$.fragment),un=m(),_o=s("span"),fn=i("BloomForCausalLM"),Lo=m(),E=s("div"),k(Ce.$$.fragment),gn=m(),bo=s("p"),_n=i(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),bn=m(),Fe=s("p"),vn=i("This model inherits from "),Oe=s("a"),kn=i("PreTrainedModel"),yn=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),wn=m(),Ee=s("p"),$n=i("This model is also a PyTorch "),Pe=s("a"),Tn=i("torch.nn.Module"),Bn=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xn=m(),I=s("div"),k(qe.$$.fragment),zn=m(),K=s("p"),Mn=i("The "),He=s("a"),Cn=i("BloomForCausalLM"),Fn=i(" forward method, overrides the "),vo=s("code"),En=i("__call__"),Pn=i(" special method."),qn=m(),k(ie.$$.fragment),Ln=m(),k(le.$$.fragment),this.h()},l(o){const g=$s('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(o),f=r(o,"H1",{class:!0});var Le=a(f);c=r(Le,"A",{id:!0,class:!0,href:!0});var ko=a(c);_=r(ko,"SPAN",{});var yo=a(_);y(n.$$.fragment,yo),yo.forEach(t),ko.forEach(t),h=p(Le),C=r(Le,"SPAN",{});var wo=a(C);O=l(wo,"BLOOM"),wo.forEach(t),Le.forEach(t),q=p(o),A=r(o,"H2",{class:!0});var Ae=a(A);S=r(Ae,"A",{id:!0,class:!0,href:!0});var $o=a(S);Ke=r($o,"SPAN",{});var To=a(Ke);y(pe.$$.fragment,To),To.forEach(t),$o.forEach(t),Qo=p(Ae),Qe=r(Ae,"SPAN",{});var jn=a(Qe);Xo=l(jn,"Overview"),jn.forEach(t),Ae.forEach(t),Bo=p(o),Q=r(o,"P",{});var jo=a(Q);Zo=l(jo,"Bloom model has been proposed with its various versions through the "),he=r(jo,"A",{href:!0,rel:!0});var In=a(he);et=l(In,"BigScience Workshop"),In.forEach(t),ot=l(jo,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of Bloom is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. Bloom is available in the following version:`),jo.forEach(t),xo=p(o),M=r(o,"UL",{});var N=a(M);Xe=r(N,"LI",{});var Nn=a(Xe);tt=l(Nn,"350M parameters"),Nn.forEach(t),nt=p(N),Ze=r(N,"LI",{});var Sn=a(Ze);st=l(Sn,"760M parameters"),Sn.forEach(t),rt=p(N),eo=r(N,"LI",{});var Dn=a(eo);at=l(Dn,"1.3B parameters"),Dn.forEach(t),it=p(N),oo=r(N,"LI",{});var Wn=a(oo);lt=l(Wn,"2.5B parameters"),Wn.forEach(t),dt=p(N),to=r(N,"LI",{});var On=a(to);ct=l(On,"6.3B parameters"),On.forEach(t),mt=p(N),no=r(N,"LI",{});var Hn=a(no);pt=l(Hn,"175B parameters"),Hn.forEach(t),N.forEach(t),zo=p(o),H=r(o,"H2",{class:!0});var Io=a(H);X=r(Io,"A",{id:!0,class:!0,href:!0});var Un=a(X);so=r(Un,"SPAN",{});var Vn=a(so);y(ue.$$.fragment,Vn),Vn.forEach(t),Un.forEach(t),ht=p(Io),ro=r(Io,"SPAN",{});var Gn=a(ro);ut=l(Gn,"BloomConfig"),Gn.forEach(t),Io.forEach(t),Mo=p(o),L=r(o,"DIV",{class:!0});var de=a(L);y(fe.$$.fragment,de),ft=p(de),U=r(de,"P",{});var Ue=a(U);gt=l(Ue,"This is the configuration class to store the configuration of a "),je=r(Ue,"A",{href:!0});var Rn=a(je);_t=l(Rn,"BloomModel"),Rn.forEach(t),bt=l(Ue,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ge=r(Ue,"A",{href:!0,rel:!0});var Yn=a(ge);vt=l(Yn,"bigscience/bloom"),Yn.forEach(t),kt=l(Ue,"."),Ue.forEach(t),yt=p(de),V=r(de,"P",{});var Ve=a(V);wt=l(Ve,"Configuration objects inherit from "),Ie=r(Ve,"A",{href:!0});var Jn=a(Ie);$t=l(Jn,"PretrainedConfig"),Jn.forEach(t),Tt=l(Ve,` and can be used to control the model outputs. Read the
documentation from `),Ne=r(Ve,"A",{href:!0});var Kn=a(Ne);Bt=l(Kn,"PretrainedConfig"),Kn.forEach(t),xt=l(Ve," for more information."),Ve.forEach(t),zt=p(de),y(Z.$$.fragment,de),de.forEach(t),Co=p(o),G=r(o,"H2",{class:!0});var No=a(G);ee=r(No,"A",{id:!0,class:!0,href:!0});var Qn=a(ee);ao=r(Qn,"SPAN",{});var Xn=a(ao);y(_e.$$.fragment,Xn),Xn.forEach(t),Qn.forEach(t),Mt=p(No),io=r(No,"SPAN",{});var Zn=a(io);Ct=l(Zn,"BloomModel"),Zn.forEach(t),No.forEach(t),Fo=p(o),F=r(o,"DIV",{class:!0});var D=a(F);y(be.$$.fragment,D),Ft=p(D),lo=r(D,"P",{});var es=a(lo);Et=l(es,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),es.forEach(t),Pt=p(D),ve=r(D,"P",{});var So=a(ve);qt=l(So,"This model inherits from "),Se=r(So,"A",{href:!0});var os=a(Se);Lt=l(os,"PreTrainedModel"),os.forEach(t),At=l(So,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),So.forEach(t),jt=p(D),ke=r(D,"P",{});var Do=a(ke);It=l(Do,"This model is also a PyTorch "),ye=r(Do,"A",{href:!0,rel:!0});var ts=a(ye);Nt=l(ts,"torch.nn.Module"),ts.forEach(t),St=l(Do,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Do.forEach(t),Dt=p(D),j=r(D,"DIV",{class:!0});var ce=a(j);y(we.$$.fragment,ce),Wt=p(ce),R=r(ce,"P",{});var Ge=a(R);Ot=l(Ge,"The "),De=r(Ge,"A",{href:!0});var ns=a(De);Ht=l(ns,"BloomModel"),ns.forEach(t),Ut=l(Ge," forward method, overrides the "),co=r(Ge,"CODE",{});var ss=a(co);Vt=l(ss,"__call__"),ss.forEach(t),Gt=l(Ge," special method."),Ge.forEach(t),Rt=p(ce),y(oe.$$.fragment,ce),Yt=p(ce),y(te.$$.fragment,ce),ce.forEach(t),D.forEach(t),Eo=p(o),Y=r(o,"H2",{class:!0});var Wo=a(Y);ne=r(Wo,"A",{id:!0,class:!0,href:!0});var rs=a(ne);mo=r(rs,"SPAN",{});var as=a(mo);y($e.$$.fragment,as),as.forEach(t),rs.forEach(t),Jt=p(Wo),po=r(Wo,"SPAN",{});var is=a(po);Kt=l(is,"BloomTokenizerFast"),is.forEach(t),Wo.forEach(t),Po=p(o),x=r(o,"DIV",{class:!0});var P=a(x);y(Te.$$.fragment,P),Qt=p(P),Be=r(P,"P",{});var Oo=a(Be);Xt=l(Oo,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),ho=r(Oo,"EM",{});var ls=a(ho);Zt=l(ls,"tokenizers"),ls.forEach(t),en=l(Oo,` library). Based on byte-level
Byte-Pair-Encoding.`),Oo.forEach(t),on=p(P),uo=r(P,"P",{});var ds=a(uo);tn=l(ds,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ds.forEach(t),nn=p(P),y(se.$$.fragment,P),sn=p(P),xe=r(P,"P",{});var Ho=a(xe);rn=l(Ho,"You can get around that behavior by passing "),fo=r(Ho,"CODE",{});var cs=a(fo);an=l(cs,"add_prefix_space=True"),cs.forEach(t),ln=l(Ho,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ho.forEach(t),dn=p(P),y(re.$$.fragment,P),cn=p(P),ze=r(P,"P",{});var Uo=a(ze);mn=l(Uo,"This tokenizer inherits from "),We=r(Uo,"A",{href:!0});var ms=a(We);pn=l(ms,"PreTrainedTokenizerFast"),ms.forEach(t),hn=l(Uo,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Uo.forEach(t),P.forEach(t),qo=p(o),J=r(o,"H2",{class:!0});var Vo=a(J);ae=r(Vo,"A",{id:!0,class:!0,href:!0});var ps=a(ae);go=r(ps,"SPAN",{});var hs=a(go);y(Me.$$.fragment,hs),hs.forEach(t),ps.forEach(t),un=p(Vo),_o=r(Vo,"SPAN",{});var us=a(_o);fn=l(us,"BloomForCausalLM"),us.forEach(t),Vo.forEach(t),Lo=p(o),E=r(o,"DIV",{class:!0});var W=a(E);y(Ce.$$.fragment,W),gn=p(W),bo=r(W,"P",{});var fs=a(bo);_n=l(fs,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fs.forEach(t),bn=p(W),Fe=r(W,"P",{});var Go=a(Fe);vn=l(Go,"This model inherits from "),Oe=r(Go,"A",{href:!0});var gs=a(Oe);kn=l(gs,"PreTrainedModel"),gs.forEach(t),yn=l(Go,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Go.forEach(t),wn=p(W),Ee=r(W,"P",{});var Ro=a(Ee);$n=l(Ro,"This model is also a PyTorch "),Pe=r(Ro,"A",{href:!0,rel:!0});var _s=a(Pe);Tn=l(_s,"torch.nn.Module"),_s.forEach(t),Bn=l(Ro,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ro.forEach(t),xn=p(W),I=r(W,"DIV",{class:!0});var me=a(I);y(qe.$$.fragment,me),zn=p(me),K=r(me,"P",{});var Re=a(K);Mn=l(Re,"The "),He=r(Re,"A",{href:!0});var bs=a(He);Cn=l(bs,"BloomForCausalLM"),bs.forEach(t),Fn=l(Re," forward method, overrides the "),vo=r(Re,"CODE",{});var vs=a(vo);En=l(vs,"__call__"),vs.forEach(t),Pn=l(Re," special method."),Re.forEach(t),qn=p(me),y(ie.$$.fragment,me),Ln=p(me),y(le.$$.fragment,me),me.forEach(t),W.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(qs)),u(c,"id","bloom"),u(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(c,"href","#bloom"),u(f,"class","relative group"),u(S,"id","overview"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#overview"),u(A,"class","relative group"),u(he,"href","https://bigscience.huggingface.co/"),u(he,"rel","nofollow"),u(X,"id","transformers.BloomConfig"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#transformers.BloomConfig"),u(H,"class","relative group"),u(je,"href","/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomModel"),u(ge,"href","https://huggingface.co/bigscience/bloom"),u(ge,"rel","nofollow"),u(Ie,"href","/docs/transformers/pr_17474/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ne,"href","/docs/transformers/pr_17474/en/main_classes/configuration#transformers.PretrainedConfig"),u(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ee,"id","transformers.BloomModel"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#transformers.BloomModel"),u(G,"class","relative group"),u(Se,"href","/docs/transformers/pr_17474/en/main_classes/model#transformers.PreTrainedModel"),u(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ye,"rel","nofollow"),u(De,"href","/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomModel"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ne,"id","transformers.BloomTokenizerFast"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#transformers.BloomTokenizerFast"),u(Y,"class","relative group"),u(We,"href","/docs/transformers/pr_17474/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ae,"id","transformers.BloomForCausalLM"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#transformers.BloomForCausalLM"),u(J,"class","relative group"),u(Oe,"href","/docs/transformers/pr_17474/en/main_classes/model#transformers.PreTrainedModel"),u(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Pe,"rel","nofollow"),u(He,"href","/docs/transformers/pr_17474/en/model_doc/bloom#transformers.BloomForCausalLM"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),b(o,v,g),b(o,f,g),e(f,c),e(c,_),w(n,_,null),e(f,h),e(f,C),e(C,O),b(o,q,g),b(o,A,g),e(A,S),e(S,Ke),w(pe,Ke,null),e(A,Qo),e(A,Qe),e(Qe,Xo),b(o,Bo,g),b(o,Q,g),e(Q,Zo),e(Q,he),e(he,et),e(Q,ot),b(o,xo,g),b(o,M,g),e(M,Xe),e(Xe,tt),e(M,nt),e(M,Ze),e(Ze,st),e(M,rt),e(M,eo),e(eo,at),e(M,it),e(M,oo),e(oo,lt),e(M,dt),e(M,to),e(to,ct),e(M,mt),e(M,no),e(no,pt),b(o,zo,g),b(o,H,g),e(H,X),e(X,so),w(ue,so,null),e(H,ht),e(H,ro),e(ro,ut),b(o,Mo,g),b(o,L,g),w(fe,L,null),e(L,ft),e(L,U),e(U,gt),e(U,je),e(je,_t),e(U,bt),e(U,ge),e(ge,vt),e(U,kt),e(L,yt),e(L,V),e(V,wt),e(V,Ie),e(Ie,$t),e(V,Tt),e(V,Ne),e(Ne,Bt),e(V,xt),e(L,zt),w(Z,L,null),b(o,Co,g),b(o,G,g),e(G,ee),e(ee,ao),w(_e,ao,null),e(G,Mt),e(G,io),e(io,Ct),b(o,Fo,g),b(o,F,g),w(be,F,null),e(F,Ft),e(F,lo),e(lo,Et),e(F,Pt),e(F,ve),e(ve,qt),e(ve,Se),e(Se,Lt),e(ve,At),e(F,jt),e(F,ke),e(ke,It),e(ke,ye),e(ye,Nt),e(ke,St),e(F,Dt),e(F,j),w(we,j,null),e(j,Wt),e(j,R),e(R,Ot),e(R,De),e(De,Ht),e(R,Ut),e(R,co),e(co,Vt),e(R,Gt),e(j,Rt),w(oe,j,null),e(j,Yt),w(te,j,null),b(o,Eo,g),b(o,Y,g),e(Y,ne),e(ne,mo),w($e,mo,null),e(Y,Jt),e(Y,po),e(po,Kt),b(o,Po,g),b(o,x,g),w(Te,x,null),e(x,Qt),e(x,Be),e(Be,Xt),e(Be,ho),e(ho,Zt),e(Be,en),e(x,on),e(x,uo),e(uo,tn),e(x,nn),w(se,x,null),e(x,sn),e(x,xe),e(xe,rn),e(xe,fo),e(fo,an),e(xe,ln),e(x,dn),w(re,x,null),e(x,cn),e(x,ze),e(ze,mn),e(ze,We),e(We,pn),e(ze,hn),b(o,qo,g),b(o,J,g),e(J,ae),e(ae,go),w(Me,go,null),e(J,un),e(J,_o),e(_o,fn),b(o,Lo,g),b(o,E,g),w(Ce,E,null),e(E,gn),e(E,bo),e(bo,_n),e(E,bn),e(E,Fe),e(Fe,vn),e(Fe,Oe),e(Oe,kn),e(Fe,yn),e(E,wn),e(E,Ee),e(Ee,$n),e(Ee,Pe),e(Pe,Tn),e(Ee,Bn),e(E,xn),e(E,I),w(qe,I,null),e(I,zn),e(I,K),e(K,Mn),e(K,He),e(He,Cn),e(K,Fn),e(K,vo),e(vo,En),e(K,Pn),e(I,qn),w(ie,I,null),e(I,Ln),w(le,I,null),Ao=!0},p(o,[g]){const Le={};g&2&&(Le.$$scope={dirty:g,ctx:o}),Z.$set(Le);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:o}),oe.$set(ko);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:o}),te.$set(yo);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:o}),se.$set(wo);const Ae={};g&2&&(Ae.$$scope={dirty:g,ctx:o}),re.$set(Ae);const $o={};g&2&&($o.$$scope={dirty:g,ctx:o}),ie.$set($o);const To={};g&2&&(To.$$scope={dirty:g,ctx:o}),le.$set(To)},i(o){Ao||($(n.$$.fragment,o),$(pe.$$.fragment,o),$(ue.$$.fragment,o),$(fe.$$.fragment,o),$(Z.$$.fragment,o),$(_e.$$.fragment,o),$(be.$$.fragment,o),$(we.$$.fragment,o),$(oe.$$.fragment,o),$(te.$$.fragment,o),$($e.$$.fragment,o),$(Te.$$.fragment,o),$(se.$$.fragment,o),$(re.$$.fragment,o),$(Me.$$.fragment,o),$(Ce.$$.fragment,o),$(qe.$$.fragment,o),$(ie.$$.fragment,o),$(le.$$.fragment,o),Ao=!0)},o(o){T(n.$$.fragment,o),T(pe.$$.fragment,o),T(ue.$$.fragment,o),T(fe.$$.fragment,o),T(Z.$$.fragment,o),T(_e.$$.fragment,o),T(be.$$.fragment,o),T(we.$$.fragment,o),T(oe.$$.fragment,o),T(te.$$.fragment,o),T($e.$$.fragment,o),T(Te.$$.fragment,o),T(se.$$.fragment,o),T(re.$$.fragment,o),T(Me.$$.fragment,o),T(Ce.$$.fragment,o),T(qe.$$.fragment,o),T(ie.$$.fragment,o),T(le.$$.fragment,o),Ao=!1},d(o){t(d),o&&t(v),o&&t(f),B(n),o&&t(q),o&&t(A),B(pe),o&&t(Bo),o&&t(Q),o&&t(xo),o&&t(M),o&&t(zo),o&&t(H),B(ue),o&&t(Mo),o&&t(L),B(fe),B(Z),o&&t(Co),o&&t(G),B(_e),o&&t(Fo),o&&t(F),B(be),B(we),B(oe),B(te),o&&t(Eo),o&&t(Y),B($e),o&&t(Po),o&&t(x),B(Te),B(se),B(re),o&&t(qo),o&&t(J),B(Me),o&&t(Lo),o&&t(E),B(Ce),B(qe),B(ie),B(le)}}}const qs={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"}],title:"BLOOM"};function Ls(z){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ws extends ks{constructor(d){super();ys(this,d,Ls,Ps,ws,{})}}export{Ws as default,qs as metadata};
