import{S as mn,i as gn,s as _n,e as a,k as u,w as b,t as i,M as Tn,c as s,d as o,m as f,a as r,x as P,h as d,b as l,F as t,g as h,y,q as k,o as w,B as $,v as vn,L as No}from"../../chunks/vendor-6b77c823.js";import{T as bn}from"../../chunks/Tip-39098574.js";import{D as Se}from"../../chunks/Docstring-1088f2fb.js";import{C as Fo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ae}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ro}from"../../chunks/ExampleCodeBlock-5212b321.js";function Pn(z){let p,v,_,m,T;return m=new Fo({props:{code:`from transformers import OPTModel, OPTConfig

# Initializing a OPT facebook/opt-large style configuration
configuration = OPTConfig()

# Initializing a model from the facebook/opt-large style configuration
model = OPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTModel, OPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a OPT facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=a("p"),v=i("Example:"),_=u(),b(m.$$.fragment)},l(n){p=s(n,"P",{});var g=r(p);v=d(g,"Example:"),g.forEach(o),_=f(n),P(m.$$.fragment,n)},m(n,g){h(n,p,g),t(p,v),h(n,_,g),y(m,n,g),T=!0},p:No,i(n){T||(k(m.$$.fragment,n),T=!0)},o(n){w(m.$$.fragment,n),T=!1},d(n){n&&o(p),n&&o(_),$(m,n)}}}function yn(z){let p,v,_,m,T;return{c(){p=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){p=s(n,"P",{});var g=r(p);v=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var L=r(_);m=d(L,"Module"),L.forEach(o),T=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){h(n,p,g),t(p,v),t(p,_),t(_,m),t(p,T)},d(n){n&&o(p)}}}function kn(z){let p,v,_,m,T;return m=new Fo({props:{code:`from transformers import GPT2Tokenizer, OPTModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("")
model = OPTModel.from_pretrained("")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=i("Example:"),_=u(),b(m.$$.fragment)},l(n){p=s(n,"P",{});var g=r(p);v=d(g,"Example:"),g.forEach(o),_=f(n),P(m.$$.fragment,n)},m(n,g){h(n,p,g),t(p,v),h(n,_,g),y(m,n,g),T=!0},p:No,i(n){T||(k(m.$$.fragment,n),T=!0)},o(n){w(m.$$.fragment,n),T=!1},d(n){n&&o(p),n&&o(_),$(m,n)}}}function wn(z){let p,v,_,m,T;return m=new Fo({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

tokenizer = OPTTokenizer.from_pretrained("patrickvonplaten/opt_gpt2_tokenizer")
model = OPTForCausalLM.from_pretrained("ArthurZ/opt-350m")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTTokenizer, OPTForCausalLM
<span class="hljs-comment"># this needs fixing</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OPTTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/opt_gpt2_tokenizer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){p=a("p"),v=i("Example:"),_=u(),b(m.$$.fragment)},l(n){p=s(n,"P",{});var g=r(p);v=d(g,"Example:"),g.forEach(o),_=f(n),P(m.$$.fragment,n)},m(n,g){h(n,p,g),t(p,v),h(n,_,g),y(m,n,g),T=!0},p:No,i(n){T||(k(m.$$.fragment,n),T=!0)},o(n){w(m.$$.fragment,n),T=!1},d(n){n&&o(p),n&&o(_),$(m,n)}}}function $n(z){let p,v,_,m,T,n,g,L,Et,Xe,x,H,Ie,te,Mt,je,Ct,et,Pe,zt,tt,ye,xt,ot,ke,Le,qt,nt,we,Rt,at,$e,Nt,st,D,Ft,oe,St,At,rt,q,W,He,ne,It,De,jt,it,O,ae,Lt,R,Ht,Oe,Dt,Wt,se,Ut,Bt,Vt,N,Gt,Ee,Yt,Kt,Me,Zt,Jt,Qt,U,dt,F,B,We,re,Xt,Ue,eo,lt,E,ie,to,de,oo,Ce,no,ao,so,le,ro,ce,io,lo,co,M,pe,po,S,ho,ze,uo,fo,Be,mo,go,_o,V,To,G,ct,A,Y,Ve,he,vo,Ge,bo,pt,C,ue,Po,fe,yo,xe,ko,wo,$o,me,Oo,ge,Eo,Mo,ht,I,K,Ye,_e,Co,Ke,zo,ut,j,Te,xo,Z,ve,qo,J,ft;return n=new Ae({}),te=new Ae({}),ne=new Ae({}),ae=new Se({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"max_position_embeddings",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 768"},{name:"word_embed_proj_dim",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"share_input_output_embed",val:" = True"},{name:"use_cache",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"output_projection",val:" = True"},{name:"do_layer_norm_before",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.OPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_hidden_layers"},{anchor:"transformers.OPTConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.OPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.OPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.OPTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.OPTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.OPTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/configuration_opt.py#L27"}}),U=new Ro({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[Pn]},$$scope:{ctx:z}}}),re=new Ae({}),ie=new Se({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L761"}}),pe=new Se({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L780",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),V=new bn({props:{$$slots:{default:[yn]},$$scope:{ctx:z}}}),G=new Ro({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[kn]},$$scope:{ctx:z}}}),he=new Ae({}),ue=new Se({props:{name:"class transformers.OPTPretrainedModel",anchor:"transformers.OPTPretrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTPretrainedModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L396"}}),_e=new Ae({}),Te=new Se({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L832"}}),ve=new Se({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17088/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OPTForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.OPTForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.OPTForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L864",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17088/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),J=new Ro({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[wn]},$$scope:{ctx:z}}}),{c(){p=a("meta"),v=u(),_=a("h1"),m=a("a"),T=a("span"),b(n.$$.fragment),g=u(),L=a("span"),Et=i("OPT"),Xe=u(),x=a("h2"),H=a("a"),Ie=a("span"),b(te.$$.fragment),Mt=u(),je=a("span"),Ct=i("Overview"),et=u(),Pe=a("p"),zt=i(`The OPT model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),tt=u(),ye=a("p"),xt=i("The abstract from the paper is the following:"),ot=u(),ke=a("p"),Le=a("em"),qt=i("<INSERT PAPER ABSTRACT HERE>"),nt=u(),we=a("p"),Rt=i("Tips:"),at=u(),$e=a("p"),Nt=i("<INSERT TIPS ABOUT MODEL HERE>"),st=u(),D=a("p"),Ft=i("This model was contributed by [INSERT YOUR HF USERNAME HERE]("),oe=a("a"),St=i("https://huggingface.co/<INSERT"),At=i(` YOUR HF USERNAME HERE>).
The original code can be found [here](<INSERT LINK TO GITHUB REPO HERE>).`),rt=u(),q=a("h2"),W=a("a"),He=a("span"),b(ne.$$.fragment),It=u(),De=a("span"),jt=i("OPTConfig"),it=u(),O=a("div"),b(ae.$$.fragment),Lt=u(),R=a("p"),Ht=i("This is the configuration class to store the configuration of a "),Oe=a("a"),Dt=i("OPTModel"),Wt=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),se=a("a"),Ut=i("facebook/opt-large"),Bt=i(" architecture."),Vt=u(),N=a("p"),Gt=i("Configuration objects inherit from "),Ee=a("a"),Yt=i("PretrainedConfig"),Kt=i(` and can be used to control the model outputs. Read the
documentation from `),Me=a("a"),Zt=i("PretrainedConfig"),Jt=i(" for more information."),Qt=u(),b(U.$$.fragment),dt=u(),F=a("h2"),B=a("a"),We=a("span"),b(re.$$.fragment),Xt=u(),Ue=a("span"),eo=i("OPTModel"),lt=u(),E=a("div"),b(ie.$$.fragment),to=u(),de=a("p"),oo=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ce=a("a"),no=i("PreTrainedModel"),ao=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),so=u(),le=a("p"),ro=i("This model is also a PyTorch "),ce=a("a"),io=i("torch.nn.Module"),lo=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),co=u(),M=a("div"),b(pe.$$.fragment),po=u(),S=a("p"),ho=i("The "),ze=a("a"),uo=i("OPTModel"),fo=i(" forward method, overrides the "),Be=a("code"),mo=i("__call__"),go=i(" special method."),_o=u(),b(V.$$.fragment),To=u(),b(G.$$.fragment),ct=u(),A=a("h2"),Y=a("a"),Ve=a("span"),b(he.$$.fragment),vo=u(),Ge=a("span"),bo=i("OPTPretrainedModel"),pt=u(),C=a("div"),b(ue.$$.fragment),Po=u(),fe=a("p"),yo=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xe=a("a"),ko=i("PreTrainedModel"),wo=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$o=u(),me=a("p"),Oo=i("This model is also a PyTorch "),ge=a("a"),Eo=i("torch.nn.Module"),Mo=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ht=u(),I=a("h2"),K=a("a"),Ye=a("span"),b(_e.$$.fragment),Co=u(),Ke=a("span"),zo=i("OPTForCausalLM"),ut=u(),j=a("div"),b(Te.$$.fragment),xo=u(),Z=a("div"),b(ve.$$.fragment),qo=u(),b(J.$$.fragment),this.h()},l(e){const c=Tn('[data-svelte="svelte-1phssyn"]',document.head);p=s(c,"META",{name:!0,content:!0}),c.forEach(o),v=f(e),_=s(e,"H1",{class:!0});var be=r(_);m=s(be,"A",{id:!0,class:!0,href:!0});var Ze=r(m);T=s(Ze,"SPAN",{});var Je=r(T);P(n.$$.fragment,Je),Je.forEach(o),Ze.forEach(o),g=f(be),L=s(be,"SPAN",{});var Qe=r(L);Et=d(Qe,"OPT"),Qe.forEach(o),be.forEach(o),Xe=f(e),x=s(e,"H2",{class:!0});var mt=r(x);H=s(mt,"A",{id:!0,class:!0,href:!0});var So=r(H);Ie=s(So,"SPAN",{});var Ao=r(Ie);P(te.$$.fragment,Ao),Ao.forEach(o),So.forEach(o),Mt=f(mt),je=s(mt,"SPAN",{});var Io=r(je);Ct=d(Io,"Overview"),Io.forEach(o),mt.forEach(o),et=f(e),Pe=s(e,"P",{});var jo=r(Pe);zt=d(jo,`The OPT model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),jo.forEach(o),tt=f(e),ye=s(e,"P",{});var Lo=r(ye);xt=d(Lo,"The abstract from the paper is the following:"),Lo.forEach(o),ot=f(e),ke=s(e,"P",{});var Ho=r(ke);Le=s(Ho,"EM",{});var Do=r(Le);qt=d(Do,"<INSERT PAPER ABSTRACT HERE>"),Do.forEach(o),Ho.forEach(o),nt=f(e),we=s(e,"P",{});var Wo=r(we);Rt=d(Wo,"Tips:"),Wo.forEach(o),at=f(e),$e=s(e,"P",{});var Uo=r($e);Nt=d(Uo,"<INSERT TIPS ABOUT MODEL HERE>"),Uo.forEach(o),st=f(e),D=s(e,"P",{});var gt=r(D);Ft=d(gt,"This model was contributed by [INSERT YOUR HF USERNAME HERE]("),oe=s(gt,"A",{href:!0,rel:!0});var Bo=r(oe);St=d(Bo,"https://huggingface.co/<INSERT"),Bo.forEach(o),At=d(gt,` YOUR HF USERNAME HERE>).
The original code can be found [here](<INSERT LINK TO GITHUB REPO HERE>).`),gt.forEach(o),rt=f(e),q=s(e,"H2",{class:!0});var _t=r(q);W=s(_t,"A",{id:!0,class:!0,href:!0});var Vo=r(W);He=s(Vo,"SPAN",{});var Go=r(He);P(ne.$$.fragment,Go),Go.forEach(o),Vo.forEach(o),It=f(_t),De=s(_t,"SPAN",{});var Yo=r(De);jt=d(Yo,"OPTConfig"),Yo.forEach(o),_t.forEach(o),it=f(e),O=s(e,"DIV",{class:!0});var Q=r(O);P(ae.$$.fragment,Q),Lt=f(Q),R=s(Q,"P",{});var qe=r(R);Ht=d(qe,"This is the configuration class to store the configuration of a "),Oe=s(qe,"A",{href:!0});var Ko=r(Oe);Dt=d(Ko,"OPTModel"),Ko.forEach(o),Wt=d(qe,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),se=s(qe,"A",{href:!0,rel:!0});var Zo=r(se);Ut=d(Zo,"facebook/opt-large"),Zo.forEach(o),Bt=d(qe," architecture."),qe.forEach(o),Vt=f(Q),N=s(Q,"P",{});var Re=r(N);Gt=d(Re,"Configuration objects inherit from "),Ee=s(Re,"A",{href:!0});var Jo=r(Ee);Yt=d(Jo,"PretrainedConfig"),Jo.forEach(o),Kt=d(Re,` and can be used to control the model outputs. Read the
documentation from `),Me=s(Re,"A",{href:!0});var Qo=r(Me);Zt=d(Qo,"PretrainedConfig"),Qo.forEach(o),Jt=d(Re," for more information."),Re.forEach(o),Qt=f(Q),P(U.$$.fragment,Q),Q.forEach(o),dt=f(e),F=s(e,"H2",{class:!0});var Tt=r(F);B=s(Tt,"A",{id:!0,class:!0,href:!0});var Xo=r(B);We=s(Xo,"SPAN",{});var en=r(We);P(re.$$.fragment,en),en.forEach(o),Xo.forEach(o),Xt=f(Tt),Ue=s(Tt,"SPAN",{});var tn=r(Ue);eo=d(tn,"OPTModel"),tn.forEach(o),Tt.forEach(o),lt=f(e),E=s(e,"DIV",{class:!0});var X=r(E);P(ie.$$.fragment,X),to=f(X),de=s(X,"P",{});var vt=r(de);oo=d(vt,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ce=s(vt,"A",{href:!0});var on=r(Ce);no=d(on,"PreTrainedModel"),on.forEach(o),ao=d(vt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vt.forEach(o),so=f(X),le=s(X,"P",{});var bt=r(le);ro=d(bt,"This model is also a PyTorch "),ce=s(bt,"A",{href:!0,rel:!0});var nn=r(ce);io=d(nn,"torch.nn.Module"),nn.forEach(o),lo=d(bt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bt.forEach(o),co=f(X),M=s(X,"DIV",{class:!0});var ee=r(M);P(pe.$$.fragment,ee),po=f(ee),S=s(ee,"P",{});var Ne=r(S);ho=d(Ne,"The "),ze=s(Ne,"A",{href:!0});var an=r(ze);uo=d(an,"OPTModel"),an.forEach(o),fo=d(Ne," forward method, overrides the "),Be=s(Ne,"CODE",{});var sn=r(Be);mo=d(sn,"__call__"),sn.forEach(o),go=d(Ne," special method."),Ne.forEach(o),_o=f(ee),P(V.$$.fragment,ee),To=f(ee),P(G.$$.fragment,ee),ee.forEach(o),X.forEach(o),ct=f(e),A=s(e,"H2",{class:!0});var Pt=r(A);Y=s(Pt,"A",{id:!0,class:!0,href:!0});var rn=r(Y);Ve=s(rn,"SPAN",{});var dn=r(Ve);P(he.$$.fragment,dn),dn.forEach(o),rn.forEach(o),vo=f(Pt),Ge=s(Pt,"SPAN",{});var ln=r(Ge);bo=d(ln,"OPTPretrainedModel"),ln.forEach(o),Pt.forEach(o),pt=f(e),C=s(e,"DIV",{class:!0});var Fe=r(C);P(ue.$$.fragment,Fe),Po=f(Fe),fe=s(Fe,"P",{});var yt=r(fe);yo=d(yt,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xe=s(yt,"A",{href:!0});var cn=r(xe);ko=d(cn,"PreTrainedModel"),cn.forEach(o),wo=d(yt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yt.forEach(o),$o=f(Fe),me=s(Fe,"P",{});var kt=r(me);Oo=d(kt,"This model is also a PyTorch "),ge=s(kt,"A",{href:!0,rel:!0});var pn=r(ge);Eo=d(pn,"torch.nn.Module"),pn.forEach(o),Mo=d(kt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kt.forEach(o),Fe.forEach(o),ht=f(e),I=s(e,"H2",{class:!0});var wt=r(I);K=s(wt,"A",{id:!0,class:!0,href:!0});var hn=r(K);Ye=s(hn,"SPAN",{});var un=r(Ye);P(_e.$$.fragment,un),un.forEach(o),hn.forEach(o),Co=f(wt),Ke=s(wt,"SPAN",{});var fn=r(Ke);zo=d(fn,"OPTForCausalLM"),fn.forEach(o),wt.forEach(o),ut=f(e),j=s(e,"DIV",{class:!0});var $t=r(j);P(Te.$$.fragment,$t),xo=f($t),Z=s($t,"DIV",{class:!0});var Ot=r(Z);P(ve.$$.fragment,Ot),qo=f(Ot),P(J.$$.fragment,Ot),Ot.forEach(o),$t.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(On)),l(m,"id","opt"),l(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(m,"href","#opt"),l(_,"class","relative group"),l(H,"id","overview"),l(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(H,"href","#overview"),l(x,"class","relative group"),l(oe,"href","https://huggingface.co/<INSERT"),l(oe,"rel","nofollow"),l(W,"id","transformers.OPTConfig"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#transformers.OPTConfig"),l(q,"class","relative group"),l(Oe,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),l(se,"href","https://huggingface.co/facebook/opt-large"),l(se,"rel","nofollow"),l(Ee,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),l(Me,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"id","transformers.OPTModel"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#transformers.OPTModel"),l(F,"class","relative group"),l(Ce,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),l(ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ce,"rel","nofollow"),l(ze,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"id","transformers.OPTPretrainedModel"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#transformers.OPTPretrainedModel"),l(A,"class","relative group"),l(xe,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),l(ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ge,"rel","nofollow"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"id","transformers.OPTForCausalLM"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.OPTForCausalLM"),l(I,"class","relative group"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,p),h(e,v,c),h(e,_,c),t(_,m),t(m,T),y(n,T,null),t(_,g),t(_,L),t(L,Et),h(e,Xe,c),h(e,x,c),t(x,H),t(H,Ie),y(te,Ie,null),t(x,Mt),t(x,je),t(je,Ct),h(e,et,c),h(e,Pe,c),t(Pe,zt),h(e,tt,c),h(e,ye,c),t(ye,xt),h(e,ot,c),h(e,ke,c),t(ke,Le),t(Le,qt),h(e,nt,c),h(e,we,c),t(we,Rt),h(e,at,c),h(e,$e,c),t($e,Nt),h(e,st,c),h(e,D,c),t(D,Ft),t(D,oe),t(oe,St),t(D,At),h(e,rt,c),h(e,q,c),t(q,W),t(W,He),y(ne,He,null),t(q,It),t(q,De),t(De,jt),h(e,it,c),h(e,O,c),y(ae,O,null),t(O,Lt),t(O,R),t(R,Ht),t(R,Oe),t(Oe,Dt),t(R,Wt),t(R,se),t(se,Ut),t(R,Bt),t(O,Vt),t(O,N),t(N,Gt),t(N,Ee),t(Ee,Yt),t(N,Kt),t(N,Me),t(Me,Zt),t(N,Jt),t(O,Qt),y(U,O,null),h(e,dt,c),h(e,F,c),t(F,B),t(B,We),y(re,We,null),t(F,Xt),t(F,Ue),t(Ue,eo),h(e,lt,c),h(e,E,c),y(ie,E,null),t(E,to),t(E,de),t(de,oo),t(de,Ce),t(Ce,no),t(de,ao),t(E,so),t(E,le),t(le,ro),t(le,ce),t(ce,io),t(le,lo),t(E,co),t(E,M),y(pe,M,null),t(M,po),t(M,S),t(S,ho),t(S,ze),t(ze,uo),t(S,fo),t(S,Be),t(Be,mo),t(S,go),t(M,_o),y(V,M,null),t(M,To),y(G,M,null),h(e,ct,c),h(e,A,c),t(A,Y),t(Y,Ve),y(he,Ve,null),t(A,vo),t(A,Ge),t(Ge,bo),h(e,pt,c),h(e,C,c),y(ue,C,null),t(C,Po),t(C,fe),t(fe,yo),t(fe,xe),t(xe,ko),t(fe,wo),t(C,$o),t(C,me),t(me,Oo),t(me,ge),t(ge,Eo),t(me,Mo),h(e,ht,c),h(e,I,c),t(I,K),t(K,Ye),y(_e,Ye,null),t(I,Co),t(I,Ke),t(Ke,zo),h(e,ut,c),h(e,j,c),y(Te,j,null),t(j,xo),t(j,Z),y(ve,Z,null),t(Z,qo),y(J,Z,null),ft=!0},p(e,[c]){const be={};c&2&&(be.$$scope={dirty:c,ctx:e}),U.$set(be);const Ze={};c&2&&(Ze.$$scope={dirty:c,ctx:e}),V.$set(Ze);const Je={};c&2&&(Je.$$scope={dirty:c,ctx:e}),G.$set(Je);const Qe={};c&2&&(Qe.$$scope={dirty:c,ctx:e}),J.$set(Qe)},i(e){ft||(k(n.$$.fragment,e),k(te.$$.fragment,e),k(ne.$$.fragment,e),k(ae.$$.fragment,e),k(U.$$.fragment,e),k(re.$$.fragment,e),k(ie.$$.fragment,e),k(pe.$$.fragment,e),k(V.$$.fragment,e),k(G.$$.fragment,e),k(he.$$.fragment,e),k(ue.$$.fragment,e),k(_e.$$.fragment,e),k(Te.$$.fragment,e),k(ve.$$.fragment,e),k(J.$$.fragment,e),ft=!0)},o(e){w(n.$$.fragment,e),w(te.$$.fragment,e),w(ne.$$.fragment,e),w(ae.$$.fragment,e),w(U.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(pe.$$.fragment,e),w(V.$$.fragment,e),w(G.$$.fragment,e),w(he.$$.fragment,e),w(ue.$$.fragment,e),w(_e.$$.fragment,e),w(Te.$$.fragment,e),w(ve.$$.fragment,e),w(J.$$.fragment,e),ft=!1},d(e){o(p),e&&o(v),e&&o(_),$(n),e&&o(Xe),e&&o(x),$(te),e&&o(et),e&&o(Pe),e&&o(tt),e&&o(ye),e&&o(ot),e&&o(ke),e&&o(nt),e&&o(we),e&&o(at),e&&o($e),e&&o(st),e&&o(D),e&&o(rt),e&&o(q),$(ne),e&&o(it),e&&o(O),$(ae),$(U),e&&o(dt),e&&o(F),$(re),e&&o(lt),e&&o(E),$(ie),$(pe),$(V),$(G),e&&o(ct),e&&o(A),$(he),e&&o(pt),e&&o(C),$(ue),e&&o(ht),e&&o(I),$(_e),e&&o(ut),e&&o(j),$(Te),$(ve),$(J)}}}const On={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTPretrainedModel",title:"OPTPretrainedModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function En(z){return vn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nn extends mn{constructor(p){super();gn(this,p,En,$n,_n,{})}}export{Nn as default,On as metadata};
