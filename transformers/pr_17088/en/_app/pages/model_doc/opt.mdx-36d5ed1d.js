import{S as Hn,i as Vn,s as Gn,e as n,k as u,w as b,t as i,M as Un,c as a,d as o,m as f,a as r,x as P,h as l,b as d,F as t,g as h,y,q as w,o as k,B as $,v as Zn,L as nn}from"../../chunks/vendor-6b77c823.js";import{T as Rn}from"../../chunks/Tip-39098574.js";import{D as Be}from"../../chunks/Docstring-1088f2fb.js";import{C as an}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as He}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as on}from"../../chunks/ExampleCodeBlock-5212b321.js";function Yn(q){let p,v,_,m,T;return m=new an({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),v=i("Example:"),_=u(),b(m.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);v=l(g,"Example:"),g.forEach(o),_=f(s),P(m.$$.fragment,s)},m(s,g){h(s,p,g),t(p,v),h(s,_,g),y(m,s,g),T=!0},p:nn,i(s){T||(w(m.$$.fragment,s),T=!0)},o(s){k(m.$$.fragment,s),T=!1},d(s){s&&o(p),s&&o(_),$(m,s)}}}function Jn(q){let p,v,_,m,T;return{c(){p=n("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){p=a(s,"P",{});var g=r(p);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var H=r(_);m=l(H,"Module"),H.forEach(o),T=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(s,g){h(s,p,g),t(p,v),t(p,_),t(_,m),t(p,T)},d(s){s&&o(p)}}}function Kn(q){let p,v,_,m,T;return m=new an({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=i("Example:"),_=u(),b(m.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);v=l(g,"Example:"),g.forEach(o),_=f(s),P(m.$$.fragment,s)},m(s,g){h(s,p,g),t(p,v),h(s,_,g),y(m,s,g),T=!0},p:nn,i(s){T||(w(m.$$.fragment,s),T=!0)},o(s){k(m.$$.fragment,s),T=!1},d(s){s&&o(p),s&&o(_),$(m,s)}}}function Qn(q){let p,v,_,m,T;return m=new an({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),v=i("Example:"),_=u(),b(m.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);v=l(g,"Example:"),g.forEach(o),_=f(s),P(m.$$.fragment,s)},m(s,g){h(s,p,g),t(p,v),h(s,_,g),y(m,s,g),T=!0},p:nn,i(s){T||(w(m.$$.fragment,s),T=!0)},o(s){k(m.$$.fragment,s),T=!1},d(s){s&&o(p),s&&o(_),$(m,s)}}}function Xn(q){let p,v,_,m,T,s,g,H,At,lt,j,V,Ve,re,It,Ge,Nt,dt,G,St,se,Wt,Dt,ct,ze,Bt,pt,xe,Ue,Ht,ht,Ee,Vt,ut,z,Gt,Ze,Ut,Zt,Re,Rt,Yt,Ye,Jt,Kt,ft,O,Qt,ie,Xt,eo,le,to,oo,de,no,ao,ce,ro,so,mt,L,U,Je,pe,io,Ke,lo,gt,M,he,co,A,po,qe,ho,uo,ue,fo,mo,go,I,_o,Fe,To,vo,je,bo,Po,yo,Z,_t,N,R,Qe,fe,wo,Xe,ko,Tt,C,me,$o,ge,Oo,Le,Mo,Co,zo,_e,xo,Te,Eo,qo,Fo,x,ve,jo,S,Lo,Ae,Ao,Io,et,No,So,Wo,Y,Do,J,vt,W,K,tt,be,Bo,ot,Ho,bt,E,Pe,Vo,ye,Go,Ie,Uo,Zo,Ro,we,Yo,ke,Jo,Ko,Pt,D,Q,nt,$e,Qo,at,Xo,yt,B,Oe,en,X,Me,tn,ee,wt;return s=new He({}),re=new He({}),pe=new He({}),he=new Be({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"max_position_embeddings",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"do_layer_norm_before",val:" = True"},{name:"use_cache",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.OPTConfig.do_layer_norm_before",description:`<strong>do_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/configuration_opt.py#L32"}}),Z=new on({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[Yn]},$$scope:{ctx:q}}}),fe=new He({}),me=new Be({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L759"}}),ve=new Be({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L776",returnDescription:`
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
`}}),Y=new Rn({props:{$$slots:{default:[Jn]},$$scope:{ctx:q}}}),J=new on({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Kn]},$$scope:{ctx:q}}}),be=new He({}),Pe=new Be({props:{name:"class transformers.OPTPretrainedModel",anchor:"transformers.OPTPretrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTPretrainedModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L395"}}),$e=new He({}),Oe=new Be({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L828"}}),Me=new Be({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L859",returnDescription:`
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
`}}),ee=new on({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[Qn]},$$scope:{ctx:q}}}),{c(){p=n("meta"),v=u(),_=n("h1"),m=n("a"),T=n("span"),b(s.$$.fragment),g=u(),H=n("span"),At=i("OPT"),lt=u(),j=n("h2"),V=n("a"),Ve=n("span"),b(re.$$.fragment),It=u(),Ge=n("span"),Nt=i("Overview"),dt=u(),G=n("p"),St=i("The OPT model was proposed in "),se=n("a"),Wt=i("Open Pre-trained Transformer Language Models"),Dt=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),ct=u(),ze=n("p"),Bt=i("The abstract from the paper is the following:"),pt=u(),xe=n("p"),Ue=n("em"),Ht=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),ht=u(),Ee=n("p"),Vt=i("Tips:"),ut=u(),z=n("p"),Gt=i("If you want to use the "),Ze=n("code"),Ut=i("opt-350m"),Zt=i(", you need to set the "),Re=n("code"),Rt=i("do_layer_norm_before"),Yt=i(" parameter to "),Ye=n("code"),Jt=i("False"),Kt=i("."),ft=u(),O=n("p"),Qt=i("This model was contributed by "),ie=n("a"),Xt=i("Arthur Zucker"),eo=i(" and "),le=n("a"),to=i("Younes Belkada"),oo=i(", "),de=n("a"),no=i("Patrick Von Platen"),ao=i(`.
The original code can be found `),ce=n("a"),ro=i("here"),so=i("."),mt=u(),L=n("h2"),U=n("a"),Je=n("span"),b(pe.$$.fragment),io=u(),Ke=n("span"),lo=i("OPTConfig"),gt=u(),M=n("div"),b(he.$$.fragment),co=u(),A=n("p"),po=i("This is the configuration class to store the configuration of a "),qe=n("a"),ho=i("OPTModel"),uo=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),ue=n("a"),fo=i("facebook/opt-large"),mo=i(" architecture."),go=u(),I=n("p"),_o=i("Configuration objects inherit from "),Fe=n("a"),To=i("PretrainedConfig"),vo=i(` and can be used to control the model outputs. Read the
documentation from `),je=n("a"),bo=i("PretrainedConfig"),Po=i(" for more information."),yo=u(),b(Z.$$.fragment),_t=u(),N=n("h2"),R=n("a"),Qe=n("span"),b(fe.$$.fragment),wo=u(),Xe=n("span"),ko=i("OPTModel"),Tt=u(),C=n("div"),b(me.$$.fragment),$o=u(),ge=n("p"),Oo=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Le=n("a"),Mo=i("PreTrainedModel"),Co=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zo=u(),_e=n("p"),xo=i("This model is also a PyTorch "),Te=n("a"),Eo=i("torch.nn.Module"),qo=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fo=u(),x=n("div"),b(ve.$$.fragment),jo=u(),S=n("p"),Lo=i("The "),Ae=n("a"),Ao=i("OPTModel"),Io=i(" forward method, overrides the "),et=n("code"),No=i("__call__"),So=i(" special method."),Wo=u(),b(Y.$$.fragment),Do=u(),b(J.$$.fragment),vt=u(),W=n("h2"),K=n("a"),tt=n("span"),b(be.$$.fragment),Bo=u(),ot=n("span"),Ho=i("OPTPretrainedModel"),bt=u(),E=n("div"),b(Pe.$$.fragment),Vo=u(),ye=n("p"),Go=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ie=n("a"),Uo=i("PreTrainedModel"),Zo=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ro=u(),we=n("p"),Yo=i("This model is also a PyTorch "),ke=n("a"),Jo=i("torch.nn.Module"),Ko=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pt=u(),D=n("h2"),Q=n("a"),nt=n("span"),b($e.$$.fragment),Qo=u(),at=n("span"),Xo=i("OPTForCausalLM"),yt=u(),B=n("div"),b(Oe.$$.fragment),en=u(),X=n("div"),b(Me.$$.fragment),tn=u(),b(ee.$$.fragment),this.h()},l(e){const c=Un('[data-svelte="svelte-1phssyn"]',document.head);p=a(c,"META",{name:!0,content:!0}),c.forEach(o),v=f(e),_=a(e,"H1",{class:!0});var Ce=r(_);m=a(Ce,"A",{id:!0,class:!0,href:!0});var rt=r(m);T=a(rt,"SPAN",{});var st=r(T);P(s.$$.fragment,st),st.forEach(o),rt.forEach(o),g=f(Ce),H=a(Ce,"SPAN",{});var it=r(H);At=l(it,"OPT"),it.forEach(o),Ce.forEach(o),lt=f(e),j=a(e,"H2",{class:!0});var kt=r(j);V=a(kt,"A",{id:!0,class:!0,href:!0});var rn=r(V);Ve=a(rn,"SPAN",{});var sn=r(Ve);P(re.$$.fragment,sn),sn.forEach(o),rn.forEach(o),It=f(kt),Ge=a(kt,"SPAN",{});var ln=r(Ge);Nt=l(ln,"Overview"),ln.forEach(o),kt.forEach(o),dt=f(e),G=a(e,"P",{});var $t=r(G);St=l($t,"The OPT model was proposed in "),se=a($t,"A",{href:!0,rel:!0});var dn=r(se);Wt=l(dn,"Open Pre-trained Transformer Language Models"),dn.forEach(o),Dt=l($t,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),$t.forEach(o),ct=f(e),ze=a(e,"P",{});var cn=r(ze);Bt=l(cn,"The abstract from the paper is the following:"),cn.forEach(o),pt=f(e),xe=a(e,"P",{});var pn=r(xe);Ue=a(pn,"EM",{});var hn=r(Ue);Ht=l(hn,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),hn.forEach(o),pn.forEach(o),ht=f(e),Ee=a(e,"P",{});var un=r(Ee);Vt=l(un,"Tips:"),un.forEach(o),ut=f(e),z=a(e,"P",{});var te=r(z);Gt=l(te,"If you want to use the "),Ze=a(te,"CODE",{});var fn=r(Ze);Ut=l(fn,"opt-350m"),fn.forEach(o),Zt=l(te,", you need to set the "),Re=a(te,"CODE",{});var mn=r(Re);Rt=l(mn,"do_layer_norm_before"),mn.forEach(o),Yt=l(te," parameter to "),Ye=a(te,"CODE",{});var gn=r(Ye);Jt=l(gn,"False"),gn.forEach(o),Kt=l(te,"."),te.forEach(o),ft=f(e),O=a(e,"P",{});var F=r(O);Qt=l(F,"This model was contributed by "),ie=a(F,"A",{href:!0,rel:!0});var _n=r(ie);Xt=l(_n,"Arthur Zucker"),_n.forEach(o),eo=l(F," and "),le=a(F,"A",{href:!0,rel:!0});var Tn=r(le);to=l(Tn,"Younes Belkada"),Tn.forEach(o),oo=l(F,", "),de=a(F,"A",{href:!0,rel:!0});var vn=r(de);no=l(vn,"Patrick Von Platen"),vn.forEach(o),ao=l(F,`.
The original code can be found `),ce=a(F,"A",{href:!0,rel:!0});var bn=r(ce);ro=l(bn,"here"),bn.forEach(o),so=l(F,"."),F.forEach(o),mt=f(e),L=a(e,"H2",{class:!0});var Ot=r(L);U=a(Ot,"A",{id:!0,class:!0,href:!0});var Pn=r(U);Je=a(Pn,"SPAN",{});var yn=r(Je);P(pe.$$.fragment,yn),yn.forEach(o),Pn.forEach(o),io=f(Ot),Ke=a(Ot,"SPAN",{});var wn=r(Ke);lo=l(wn,"OPTConfig"),wn.forEach(o),Ot.forEach(o),gt=f(e),M=a(e,"DIV",{class:!0});var oe=r(M);P(he.$$.fragment,oe),co=f(oe),A=a(oe,"P",{});var Ne=r(A);po=l(Ne,"This is the configuration class to store the configuration of a "),qe=a(Ne,"A",{href:!0});var kn=r(qe);ho=l(kn,"OPTModel"),kn.forEach(o),uo=l(Ne,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),ue=a(Ne,"A",{href:!0,rel:!0});var $n=r(ue);fo=l($n,"facebook/opt-large"),$n.forEach(o),mo=l(Ne," architecture."),Ne.forEach(o),go=f(oe),I=a(oe,"P",{});var Se=r(I);_o=l(Se,"Configuration objects inherit from "),Fe=a(Se,"A",{href:!0});var On=r(Fe);To=l(On,"PretrainedConfig"),On.forEach(o),vo=l(Se,` and can be used to control the model outputs. Read the
documentation from `),je=a(Se,"A",{href:!0});var Mn=r(je);bo=l(Mn,"PretrainedConfig"),Mn.forEach(o),Po=l(Se," for more information."),Se.forEach(o),yo=f(oe),P(Z.$$.fragment,oe),oe.forEach(o),_t=f(e),N=a(e,"H2",{class:!0});var Mt=r(N);R=a(Mt,"A",{id:!0,class:!0,href:!0});var Cn=r(R);Qe=a(Cn,"SPAN",{});var zn=r(Qe);P(fe.$$.fragment,zn),zn.forEach(o),Cn.forEach(o),wo=f(Mt),Xe=a(Mt,"SPAN",{});var xn=r(Xe);ko=l(xn,"OPTModel"),xn.forEach(o),Mt.forEach(o),Tt=f(e),C=a(e,"DIV",{class:!0});var ne=r(C);P(me.$$.fragment,ne),$o=f(ne),ge=a(ne,"P",{});var Ct=r(ge);Oo=l(Ct,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Le=a(Ct,"A",{href:!0});var En=r(Le);Mo=l(En,"PreTrainedModel"),En.forEach(o),Co=l(Ct,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ct.forEach(o),zo=f(ne),_e=a(ne,"P",{});var zt=r(_e);xo=l(zt,"This model is also a PyTorch "),Te=a(zt,"A",{href:!0,rel:!0});var qn=r(Te);Eo=l(qn,"torch.nn.Module"),qn.forEach(o),qo=l(zt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zt.forEach(o),Fo=f(ne),x=a(ne,"DIV",{class:!0});var ae=r(x);P(ve.$$.fragment,ae),jo=f(ae),S=a(ae,"P",{});var We=r(S);Lo=l(We,"The "),Ae=a(We,"A",{href:!0});var Fn=r(Ae);Ao=l(Fn,"OPTModel"),Fn.forEach(o),Io=l(We," forward method, overrides the "),et=a(We,"CODE",{});var jn=r(et);No=l(jn,"__call__"),jn.forEach(o),So=l(We," special method."),We.forEach(o),Wo=f(ae),P(Y.$$.fragment,ae),Do=f(ae),P(J.$$.fragment,ae),ae.forEach(o),ne.forEach(o),vt=f(e),W=a(e,"H2",{class:!0});var xt=r(W);K=a(xt,"A",{id:!0,class:!0,href:!0});var Ln=r(K);tt=a(Ln,"SPAN",{});var An=r(tt);P(be.$$.fragment,An),An.forEach(o),Ln.forEach(o),Bo=f(xt),ot=a(xt,"SPAN",{});var In=r(ot);Ho=l(In,"OPTPretrainedModel"),In.forEach(o),xt.forEach(o),bt=f(e),E=a(e,"DIV",{class:!0});var De=r(E);P(Pe.$$.fragment,De),Vo=f(De),ye=a(De,"P",{});var Et=r(ye);Go=l(Et,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ie=a(Et,"A",{href:!0});var Nn=r(Ie);Uo=l(Nn,"PreTrainedModel"),Nn.forEach(o),Zo=l(Et,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Et.forEach(o),Ro=f(De),we=a(De,"P",{});var qt=r(we);Yo=l(qt,"This model is also a PyTorch "),ke=a(qt,"A",{href:!0,rel:!0});var Sn=r(ke);Jo=l(Sn,"torch.nn.Module"),Sn.forEach(o),Ko=l(qt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qt.forEach(o),De.forEach(o),Pt=f(e),D=a(e,"H2",{class:!0});var Ft=r(D);Q=a(Ft,"A",{id:!0,class:!0,href:!0});var Wn=r(Q);nt=a(Wn,"SPAN",{});var Dn=r(nt);P($e.$$.fragment,Dn),Dn.forEach(o),Wn.forEach(o),Qo=f(Ft),at=a(Ft,"SPAN",{});var Bn=r(at);Xo=l(Bn,"OPTForCausalLM"),Bn.forEach(o),Ft.forEach(o),yt=f(e),B=a(e,"DIV",{class:!0});var jt=r(B);P(Oe.$$.fragment,jt),en=f(jt),X=a(jt,"DIV",{class:!0});var Lt=r(X);P(Me.$$.fragment,Lt),tn=f(Lt),P(ee.$$.fragment,Lt),Lt.forEach(o),jt.forEach(o),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(ea)),d(m,"id","opt"),d(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(m,"href","#opt"),d(_,"class","relative group"),d(V,"id","overview"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#overview"),d(j,"class","relative group"),d(se,"href","https://arxiv.org/pdf/2205.01068"),d(se,"rel","nofollow"),d(ie,"href","https://huggingface.co/ArthurZ"),d(ie,"rel","nofollow"),d(le,"href","https://huggingface.co/ybelkada"),d(le,"rel","nofollow"),d(de,"href","https://huggingface.co/patrickvonplaten"),d(de,"rel","nofollow"),d(ce,"href","https://github.com/facebookresearch/metaseq"),d(ce,"rel","nofollow"),d(U,"id","transformers.OPTConfig"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#transformers.OPTConfig"),d(L,"class","relative group"),d(qe,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(ue,"href","https://huggingface.co/facebook/opt-large"),d(ue,"rel","nofollow"),d(Fe,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(je,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"id","transformers.OPTModel"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#transformers.OPTModel"),d(N,"class","relative group"),d(Le,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),d(Te,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Te,"rel","nofollow"),d(Ae,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(K,"id","transformers.OPTPretrainedModel"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#transformers.OPTPretrainedModel"),d(W,"class","relative group"),d(Ie,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),d(ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ke,"rel","nofollow"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Q,"id","transformers.OPTForCausalLM"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#transformers.OPTForCausalLM"),d(D,"class","relative group"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,p),h(e,v,c),h(e,_,c),t(_,m),t(m,T),y(s,T,null),t(_,g),t(_,H),t(H,At),h(e,lt,c),h(e,j,c),t(j,V),t(V,Ve),y(re,Ve,null),t(j,It),t(j,Ge),t(Ge,Nt),h(e,dt,c),h(e,G,c),t(G,St),t(G,se),t(se,Wt),t(G,Dt),h(e,ct,c),h(e,ze,c),t(ze,Bt),h(e,pt,c),h(e,xe,c),t(xe,Ue),t(Ue,Ht),h(e,ht,c),h(e,Ee,c),t(Ee,Vt),h(e,ut,c),h(e,z,c),t(z,Gt),t(z,Ze),t(Ze,Ut),t(z,Zt),t(z,Re),t(Re,Rt),t(z,Yt),t(z,Ye),t(Ye,Jt),t(z,Kt),h(e,ft,c),h(e,O,c),t(O,Qt),t(O,ie),t(ie,Xt),t(O,eo),t(O,le),t(le,to),t(O,oo),t(O,de),t(de,no),t(O,ao),t(O,ce),t(ce,ro),t(O,so),h(e,mt,c),h(e,L,c),t(L,U),t(U,Je),y(pe,Je,null),t(L,io),t(L,Ke),t(Ke,lo),h(e,gt,c),h(e,M,c),y(he,M,null),t(M,co),t(M,A),t(A,po),t(A,qe),t(qe,ho),t(A,uo),t(A,ue),t(ue,fo),t(A,mo),t(M,go),t(M,I),t(I,_o),t(I,Fe),t(Fe,To),t(I,vo),t(I,je),t(je,bo),t(I,Po),t(M,yo),y(Z,M,null),h(e,_t,c),h(e,N,c),t(N,R),t(R,Qe),y(fe,Qe,null),t(N,wo),t(N,Xe),t(Xe,ko),h(e,Tt,c),h(e,C,c),y(me,C,null),t(C,$o),t(C,ge),t(ge,Oo),t(ge,Le),t(Le,Mo),t(ge,Co),t(C,zo),t(C,_e),t(_e,xo),t(_e,Te),t(Te,Eo),t(_e,qo),t(C,Fo),t(C,x),y(ve,x,null),t(x,jo),t(x,S),t(S,Lo),t(S,Ae),t(Ae,Ao),t(S,Io),t(S,et),t(et,No),t(S,So),t(x,Wo),y(Y,x,null),t(x,Do),y(J,x,null),h(e,vt,c),h(e,W,c),t(W,K),t(K,tt),y(be,tt,null),t(W,Bo),t(W,ot),t(ot,Ho),h(e,bt,c),h(e,E,c),y(Pe,E,null),t(E,Vo),t(E,ye),t(ye,Go),t(ye,Ie),t(Ie,Uo),t(ye,Zo),t(E,Ro),t(E,we),t(we,Yo),t(we,ke),t(ke,Jo),t(we,Ko),h(e,Pt,c),h(e,D,c),t(D,Q),t(Q,nt),y($e,nt,null),t(D,Qo),t(D,at),t(at,Xo),h(e,yt,c),h(e,B,c),y(Oe,B,null),t(B,en),t(B,X),y(Me,X,null),t(X,tn),y(ee,X,null),wt=!0},p(e,[c]){const Ce={};c&2&&(Ce.$$scope={dirty:c,ctx:e}),Z.$set(Ce);const rt={};c&2&&(rt.$$scope={dirty:c,ctx:e}),Y.$set(rt);const st={};c&2&&(st.$$scope={dirty:c,ctx:e}),J.$set(st);const it={};c&2&&(it.$$scope={dirty:c,ctx:e}),ee.$set(it)},i(e){wt||(w(s.$$.fragment,e),w(re.$$.fragment,e),w(pe.$$.fragment,e),w(he.$$.fragment,e),w(Z.$$.fragment,e),w(fe.$$.fragment,e),w(me.$$.fragment,e),w(ve.$$.fragment,e),w(Y.$$.fragment,e),w(J.$$.fragment,e),w(be.$$.fragment,e),w(Pe.$$.fragment,e),w($e.$$.fragment,e),w(Oe.$$.fragment,e),w(Me.$$.fragment,e),w(ee.$$.fragment,e),wt=!0)},o(e){k(s.$$.fragment,e),k(re.$$.fragment,e),k(pe.$$.fragment,e),k(he.$$.fragment,e),k(Z.$$.fragment,e),k(fe.$$.fragment,e),k(me.$$.fragment,e),k(ve.$$.fragment,e),k(Y.$$.fragment,e),k(J.$$.fragment,e),k(be.$$.fragment,e),k(Pe.$$.fragment,e),k($e.$$.fragment,e),k(Oe.$$.fragment,e),k(Me.$$.fragment,e),k(ee.$$.fragment,e),wt=!1},d(e){o(p),e&&o(v),e&&o(_),$(s),e&&o(lt),e&&o(j),$(re),e&&o(dt),e&&o(G),e&&o(ct),e&&o(ze),e&&o(pt),e&&o(xe),e&&o(ht),e&&o(Ee),e&&o(ut),e&&o(z),e&&o(ft),e&&o(O),e&&o(mt),e&&o(L),$(pe),e&&o(gt),e&&o(M),$(he),$(Z),e&&o(_t),e&&o(N),$(fe),e&&o(Tt),e&&o(C),$(me),$(ve),$(Y),$(J),e&&o(vt),e&&o(W),$(be),e&&o(bt),e&&o(E),$(Pe),e&&o(Pt),e&&o(D),$($e),e&&o(yt),e&&o(B),$(Oe),$(Me),$(ee)}}}const ea={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTPretrainedModel",title:"OPTPretrainedModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function ta(q){return Zn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class la extends Hn{constructor(p){super();Vn(this,p,ta,Xn,Gn,{})}}export{la as default,ea as metadata};
