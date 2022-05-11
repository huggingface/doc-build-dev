import{S as Wn,i as Bn,s as Hn,e as n,k as u,w as b,t as i,M as Vn,c as a,d as o,m as f,a as r,x as P,h as l,b as d,F as t,g as h,y,q as w,o as k,B as $,v as Gn,L as on}from"../../chunks/vendor-6b77c823.js";import{T as Un}from"../../chunks/Tip-39098574.js";import{D as Be}from"../../chunks/Docstring-1088f2fb.js";import{C as nn}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as He}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as tn}from"../../chunks/ExampleCodeBlock-5212b321.js";function Zn(q){let p,T,_,m,v;return m=new nn({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),T=i("Example:"),_=u(),b(m.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);T=l(g,"Example:"),g.forEach(o),_=f(s),P(m.$$.fragment,s)},m(s,g){h(s,p,g),t(p,T),h(s,_,g),y(m,s,g),v=!0},p:on,i(s){v||(w(m.$$.fragment,s),v=!0)},o(s){k(m.$$.fragment,s),v=!1},d(s){s&&o(p),s&&o(_),$(m,s)}}}function Rn(q){let p,T,_,m,v;return{c(){p=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){p=a(s,"P",{});var g=r(p);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var H=r(_);m=l(H,"Module"),H.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(s,g){h(s,p,g),t(p,T),t(p,_),t(_,m),t(p,v)},d(s){s&&o(p)}}}function Yn(q){let p,T,_,m,v;return m=new nn({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),T=i("Example:"),_=u(),b(m.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);T=l(g,"Example:"),g.forEach(o),_=f(s),P(m.$$.fragment,s)},m(s,g){h(s,p,g),t(p,T),h(s,_,g),y(m,s,g),v=!0},p:on,i(s){v||(w(m.$$.fragment,s),v=!0)},o(s){k(m.$$.fragment,s),v=!1},d(s){s&&o(p),s&&o(_),$(m,s)}}}function Jn(q){let p,T,_,m,v;return m=new nn({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),T=i("Example:"),_=u(),b(m.$$.fragment)},l(s){p=a(s,"P",{});var g=r(p);T=l(g,"Example:"),g.forEach(o),_=f(s),P(m.$$.fragment,s)},m(s,g){h(s,p,g),t(p,T),h(s,_,g),y(m,s,g),v=!0},p:on,i(s){v||(w(m.$$.fragment,s),v=!0)},o(s){k(m.$$.fragment,s),v=!1},d(s){s&&o(p),s&&o(_),$(m,s)}}}function Kn(q){let p,T,_,m,v,s,g,H,Lt,it,j,V,Ve,re,At,Ge,It,lt,G,Nt,se,St,Dt,dt,ze,Wt,ct,xe,Bt,pt,Ee,Ht,ht,z,Vt,Ue,Gt,Ut,Ze,Zt,Rt,Re,Yt,Jt,ut,O,Kt,ie,Qt,Xt,le,eo,to,de,oo,no,ce,ao,ro,ft,L,U,Ye,pe,so,Je,io,mt,M,he,lo,A,co,qe,po,ho,ue,uo,fo,mo,I,go,Fe,_o,vo,je,To,bo,Po,Z,gt,N,R,Ke,fe,yo,Qe,wo,_t,C,me,ko,ge,$o,Le,Oo,Mo,Co,_e,zo,ve,xo,Eo,qo,x,Te,Fo,S,jo,Ae,Lo,Ao,Xe,Io,No,So,Y,Do,J,vt,D,K,et,be,Wo,tt,Bo,Tt,E,Pe,Ho,ye,Vo,Ie,Go,Uo,Zo,we,Ro,ke,Yo,Jo,bt,W,Q,ot,$e,Ko,nt,Qo,Pt,B,Oe,Xo,X,Me,en,ee,yt;return s=new He({}),re=new He({}),pe=new He({}),he=new Be({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"max_position_embeddings",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 768"},{name:"word_embed_proj_dim",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"share_input_output_embed",val:" = True"},{name:"use_cache",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"output_projection",val:" = True"},{name:"do_layer_norm_before",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/configuration_opt.py#L27"}}),Z=new tn({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[Zn]},$$scope:{ctx:q}}}),fe=new He({}),me=new Be({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L767"}}),Te=new Be({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L786",returnDescription:`
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
`}}),Y=new Un({props:{$$slots:{default:[Rn]},$$scope:{ctx:q}}}),J=new tn({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Yn]},$$scope:{ctx:q}}}),be=new He({}),Pe=new Be({props:{name:"class transformers.OPTPretrainedModel",anchor:"transformers.OPTPretrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTPretrainedModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L402"}}),$e=new He({}),Oe=new Be({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L838"}}),Me=new Be({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L870",returnDescription:`
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
`}}),ee=new tn({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[Jn]},$$scope:{ctx:q}}}),{c(){p=n("meta"),T=u(),_=n("h1"),m=n("a"),v=n("span"),b(s.$$.fragment),g=u(),H=n("span"),Lt=i("OPT"),it=u(),j=n("h2"),V=n("a"),Ve=n("span"),b(re.$$.fragment),At=u(),Ge=n("span"),It=i("Overview"),lt=u(),G=n("p"),Nt=i("The OPT model was proposed in "),se=n("a"),St=i("Open Pre-trained Transformer Language Models"),Dt=i(` by Meta AI.
OPT is a serie of pretrained decoder only LM which perform similarly to GPT3.`),dt=u(),ze=n("p"),Wt=i("The abstract from the paper is the following:"),ct=u(),xe=n("p"),Bt=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),pt=u(),Ee=n("p"),Ht=i("Tips:"),ht=u(),z=n("p"),Vt=i("If you want to use the "),Ue=n("code"),Gt=i("opt-350m"),Ut=i(", you need to set the "),Ze=n("code"),Zt=i("do_layer_norm_before"),Rt=i(" parameter to "),Re=n("code"),Yt=i("False"),Jt=i("."),ut=u(),O=n("p"),Kt=i("This model was contributed by "),ie=n("a"),Qt=i("Patrick Von Platen"),Xt=i(", "),le=n("a"),eo=i("Arthur Zucker"),to=i(" and "),de=n("a"),oo=i("Younes Belkada"),no=i(`,.
The original code can be found `),ce=n("a"),ao=i("here"),ro=i("."),ft=u(),L=n("h2"),U=n("a"),Ye=n("span"),b(pe.$$.fragment),so=u(),Je=n("span"),io=i("OPTConfig"),mt=u(),M=n("div"),b(he.$$.fragment),lo=u(),A=n("p"),co=i("This is the configuration class to store the configuration of a "),qe=n("a"),po=i("OPTModel"),ho=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),ue=n("a"),uo=i("facebook/opt-large"),fo=i(" architecture."),mo=u(),I=n("p"),go=i("Configuration objects inherit from "),Fe=n("a"),_o=i("PretrainedConfig"),vo=i(` and can be used to control the model outputs. Read the
documentation from `),je=n("a"),To=i("PretrainedConfig"),bo=i(" for more information."),Po=u(),b(Z.$$.fragment),gt=u(),N=n("h2"),R=n("a"),Ke=n("span"),b(fe.$$.fragment),yo=u(),Qe=n("span"),wo=i("OPTModel"),_t=u(),C=n("div"),b(me.$$.fragment),ko=u(),ge=n("p"),$o=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Le=n("a"),Oo=i("PreTrainedModel"),Mo=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Co=u(),_e=n("p"),zo=i("This model is also a PyTorch "),ve=n("a"),xo=i("torch.nn.Module"),Eo=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qo=u(),x=n("div"),b(Te.$$.fragment),Fo=u(),S=n("p"),jo=i("The "),Ae=n("a"),Lo=i("OPTModel"),Ao=i(" forward method, overrides the "),Xe=n("code"),Io=i("__call__"),No=i(" special method."),So=u(),b(Y.$$.fragment),Do=u(),b(J.$$.fragment),vt=u(),D=n("h2"),K=n("a"),et=n("span"),b(be.$$.fragment),Wo=u(),tt=n("span"),Bo=i("OPTPretrainedModel"),Tt=u(),E=n("div"),b(Pe.$$.fragment),Ho=u(),ye=n("p"),Vo=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ie=n("a"),Go=i("PreTrainedModel"),Uo=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zo=u(),we=n("p"),Ro=i("This model is also a PyTorch "),ke=n("a"),Yo=i("torch.nn.Module"),Jo=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bt=u(),W=n("h2"),Q=n("a"),ot=n("span"),b($e.$$.fragment),Ko=u(),nt=n("span"),Qo=i("OPTForCausalLM"),Pt=u(),B=n("div"),b(Oe.$$.fragment),Xo=u(),X=n("div"),b(Me.$$.fragment),en=u(),b(ee.$$.fragment),this.h()},l(e){const c=Vn('[data-svelte="svelte-1phssyn"]',document.head);p=a(c,"META",{name:!0,content:!0}),c.forEach(o),T=f(e),_=a(e,"H1",{class:!0});var Ce=r(_);m=a(Ce,"A",{id:!0,class:!0,href:!0});var at=r(m);v=a(at,"SPAN",{});var rt=r(v);P(s.$$.fragment,rt),rt.forEach(o),at.forEach(o),g=f(Ce),H=a(Ce,"SPAN",{});var st=r(H);Lt=l(st,"OPT"),st.forEach(o),Ce.forEach(o),it=f(e),j=a(e,"H2",{class:!0});var wt=r(j);V=a(wt,"A",{id:!0,class:!0,href:!0});var an=r(V);Ve=a(an,"SPAN",{});var rn=r(Ve);P(re.$$.fragment,rn),rn.forEach(o),an.forEach(o),At=f(wt),Ge=a(wt,"SPAN",{});var sn=r(Ge);It=l(sn,"Overview"),sn.forEach(o),wt.forEach(o),lt=f(e),G=a(e,"P",{});var kt=r(G);Nt=l(kt,"The OPT model was proposed in "),se=a(kt,"A",{href:!0,rel:!0});var ln=r(se);St=l(ln,"Open Pre-trained Transformer Language Models"),ln.forEach(o),Dt=l(kt,` by Meta AI.
OPT is a serie of pretrained decoder only LM which perform similarly to GPT3.`),kt.forEach(o),dt=f(e),ze=a(e,"P",{});var dn=r(ze);Wt=l(dn,"The abstract from the paper is the following:"),dn.forEach(o),ct=f(e),xe=a(e,"P",{});var cn=r(xe);Bt=l(cn,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),cn.forEach(o),pt=f(e),Ee=a(e,"P",{});var pn=r(Ee);Ht=l(pn,"Tips:"),pn.forEach(o),ht=f(e),z=a(e,"P",{});var te=r(z);Vt=l(te,"If you want to use the "),Ue=a(te,"CODE",{});var hn=r(Ue);Gt=l(hn,"opt-350m"),hn.forEach(o),Ut=l(te,", you need to set the "),Ze=a(te,"CODE",{});var un=r(Ze);Zt=l(un,"do_layer_norm_before"),un.forEach(o),Rt=l(te," parameter to "),Re=a(te,"CODE",{});var fn=r(Re);Yt=l(fn,"False"),fn.forEach(o),Jt=l(te,"."),te.forEach(o),ut=f(e),O=a(e,"P",{});var F=r(O);Kt=l(F,"This model was contributed by "),ie=a(F,"A",{href:!0,rel:!0});var mn=r(ie);Qt=l(mn,"Patrick Von Platen"),mn.forEach(o),Xt=l(F,", "),le=a(F,"A",{href:!0,rel:!0});var gn=r(le);eo=l(gn,"Arthur Zucker"),gn.forEach(o),to=l(F," and "),de=a(F,"A",{href:!0,rel:!0});var _n=r(de);oo=l(_n,"Younes Belkada"),_n.forEach(o),no=l(F,`,.
The original code can be found `),ce=a(F,"A",{href:!0,rel:!0});var vn=r(ce);ao=l(vn,"here"),vn.forEach(o),ro=l(F,"."),F.forEach(o),ft=f(e),L=a(e,"H2",{class:!0});var $t=r(L);U=a($t,"A",{id:!0,class:!0,href:!0});var Tn=r(U);Ye=a(Tn,"SPAN",{});var bn=r(Ye);P(pe.$$.fragment,bn),bn.forEach(o),Tn.forEach(o),so=f($t),Je=a($t,"SPAN",{});var Pn=r(Je);io=l(Pn,"OPTConfig"),Pn.forEach(o),$t.forEach(o),mt=f(e),M=a(e,"DIV",{class:!0});var oe=r(M);P(he.$$.fragment,oe),lo=f(oe),A=a(oe,"P",{});var Ne=r(A);co=l(Ne,"This is the configuration class to store the configuration of a "),qe=a(Ne,"A",{href:!0});var yn=r(qe);po=l(yn,"OPTModel"),yn.forEach(o),ho=l(Ne,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),ue=a(Ne,"A",{href:!0,rel:!0});var wn=r(ue);uo=l(wn,"facebook/opt-large"),wn.forEach(o),fo=l(Ne," architecture."),Ne.forEach(o),mo=f(oe),I=a(oe,"P",{});var Se=r(I);go=l(Se,"Configuration objects inherit from "),Fe=a(Se,"A",{href:!0});var kn=r(Fe);_o=l(kn,"PretrainedConfig"),kn.forEach(o),vo=l(Se,` and can be used to control the model outputs. Read the
documentation from `),je=a(Se,"A",{href:!0});var $n=r(je);To=l($n,"PretrainedConfig"),$n.forEach(o),bo=l(Se," for more information."),Se.forEach(o),Po=f(oe),P(Z.$$.fragment,oe),oe.forEach(o),gt=f(e),N=a(e,"H2",{class:!0});var Ot=r(N);R=a(Ot,"A",{id:!0,class:!0,href:!0});var On=r(R);Ke=a(On,"SPAN",{});var Mn=r(Ke);P(fe.$$.fragment,Mn),Mn.forEach(o),On.forEach(o),yo=f(Ot),Qe=a(Ot,"SPAN",{});var Cn=r(Qe);wo=l(Cn,"OPTModel"),Cn.forEach(o),Ot.forEach(o),_t=f(e),C=a(e,"DIV",{class:!0});var ne=r(C);P(me.$$.fragment,ne),ko=f(ne),ge=a(ne,"P",{});var Mt=r(ge);$o=l(Mt,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Le=a(Mt,"A",{href:!0});var zn=r(Le);Oo=l(zn,"PreTrainedModel"),zn.forEach(o),Mo=l(Mt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mt.forEach(o),Co=f(ne),_e=a(ne,"P",{});var Ct=r(_e);zo=l(Ct,"This model is also a PyTorch "),ve=a(Ct,"A",{href:!0,rel:!0});var xn=r(ve);xo=l(xn,"torch.nn.Module"),xn.forEach(o),Eo=l(Ct,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ct.forEach(o),qo=f(ne),x=a(ne,"DIV",{class:!0});var ae=r(x);P(Te.$$.fragment,ae),Fo=f(ae),S=a(ae,"P",{});var De=r(S);jo=l(De,"The "),Ae=a(De,"A",{href:!0});var En=r(Ae);Lo=l(En,"OPTModel"),En.forEach(o),Ao=l(De," forward method, overrides the "),Xe=a(De,"CODE",{});var qn=r(Xe);Io=l(qn,"__call__"),qn.forEach(o),No=l(De," special method."),De.forEach(o),So=f(ae),P(Y.$$.fragment,ae),Do=f(ae),P(J.$$.fragment,ae),ae.forEach(o),ne.forEach(o),vt=f(e),D=a(e,"H2",{class:!0});var zt=r(D);K=a(zt,"A",{id:!0,class:!0,href:!0});var Fn=r(K);et=a(Fn,"SPAN",{});var jn=r(et);P(be.$$.fragment,jn),jn.forEach(o),Fn.forEach(o),Wo=f(zt),tt=a(zt,"SPAN",{});var Ln=r(tt);Bo=l(Ln,"OPTPretrainedModel"),Ln.forEach(o),zt.forEach(o),Tt=f(e),E=a(e,"DIV",{class:!0});var We=r(E);P(Pe.$$.fragment,We),Ho=f(We),ye=a(We,"P",{});var xt=r(ye);Vo=l(xt,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ie=a(xt,"A",{href:!0});var An=r(Ie);Go=l(An,"PreTrainedModel"),An.forEach(o),Uo=l(xt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xt.forEach(o),Zo=f(We),we=a(We,"P",{});var Et=r(we);Ro=l(Et,"This model is also a PyTorch "),ke=a(Et,"A",{href:!0,rel:!0});var In=r(ke);Yo=l(In,"torch.nn.Module"),In.forEach(o),Jo=l(Et,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Et.forEach(o),We.forEach(o),bt=f(e),W=a(e,"H2",{class:!0});var qt=r(W);Q=a(qt,"A",{id:!0,class:!0,href:!0});var Nn=r(Q);ot=a(Nn,"SPAN",{});var Sn=r(ot);P($e.$$.fragment,Sn),Sn.forEach(o),Nn.forEach(o),Ko=f(qt),nt=a(qt,"SPAN",{});var Dn=r(nt);Qo=l(Dn,"OPTForCausalLM"),Dn.forEach(o),qt.forEach(o),Pt=f(e),B=a(e,"DIV",{class:!0});var Ft=r(B);P(Oe.$$.fragment,Ft),Xo=f(Ft),X=a(Ft,"DIV",{class:!0});var jt=r(X);P(Me.$$.fragment,jt),en=f(jt),P(ee.$$.fragment,jt),jt.forEach(o),Ft.forEach(o),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(Qn)),d(m,"id","opt"),d(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(m,"href","#opt"),d(_,"class","relative group"),d(V,"id","overview"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#overview"),d(j,"class","relative group"),d(se,"href","https://arxiv.org/pdf/2205.01068"),d(se,"rel","nofollow"),d(ie,"href","https://huggingface.co/patrickvonplaten"),d(ie,"rel","nofollow"),d(le,"href","https://huggingface.co/ArthurZ"),d(le,"rel","nofollow"),d(de,"href","https://huggingface.co/ybelkada"),d(de,"rel","nofollow"),d(ce,"href","https://github.com/facebookresearch/metaseq"),d(ce,"rel","nofollow"),d(U,"id","transformers.OPTConfig"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#transformers.OPTConfig"),d(L,"class","relative group"),d(qe,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(ue,"href","https://huggingface.co/facebook/opt-large"),d(ue,"rel","nofollow"),d(Fe,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(je,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"id","transformers.OPTModel"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#transformers.OPTModel"),d(N,"class","relative group"),d(Le,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),d(ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ve,"rel","nofollow"),d(Ae,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(K,"id","transformers.OPTPretrainedModel"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#transformers.OPTPretrainedModel"),d(D,"class","relative group"),d(Ie,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),d(ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ke,"rel","nofollow"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Q,"id","transformers.OPTForCausalLM"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#transformers.OPTForCausalLM"),d(W,"class","relative group"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,p),h(e,T,c),h(e,_,c),t(_,m),t(m,v),y(s,v,null),t(_,g),t(_,H),t(H,Lt),h(e,it,c),h(e,j,c),t(j,V),t(V,Ve),y(re,Ve,null),t(j,At),t(j,Ge),t(Ge,It),h(e,lt,c),h(e,G,c),t(G,Nt),t(G,se),t(se,St),t(G,Dt),h(e,dt,c),h(e,ze,c),t(ze,Wt),h(e,ct,c),h(e,xe,c),t(xe,Bt),h(e,pt,c),h(e,Ee,c),t(Ee,Ht),h(e,ht,c),h(e,z,c),t(z,Vt),t(z,Ue),t(Ue,Gt),t(z,Ut),t(z,Ze),t(Ze,Zt),t(z,Rt),t(z,Re),t(Re,Yt),t(z,Jt),h(e,ut,c),h(e,O,c),t(O,Kt),t(O,ie),t(ie,Qt),t(O,Xt),t(O,le),t(le,eo),t(O,to),t(O,de),t(de,oo),t(O,no),t(O,ce),t(ce,ao),t(O,ro),h(e,ft,c),h(e,L,c),t(L,U),t(U,Ye),y(pe,Ye,null),t(L,so),t(L,Je),t(Je,io),h(e,mt,c),h(e,M,c),y(he,M,null),t(M,lo),t(M,A),t(A,co),t(A,qe),t(qe,po),t(A,ho),t(A,ue),t(ue,uo),t(A,fo),t(M,mo),t(M,I),t(I,go),t(I,Fe),t(Fe,_o),t(I,vo),t(I,je),t(je,To),t(I,bo),t(M,Po),y(Z,M,null),h(e,gt,c),h(e,N,c),t(N,R),t(R,Ke),y(fe,Ke,null),t(N,yo),t(N,Qe),t(Qe,wo),h(e,_t,c),h(e,C,c),y(me,C,null),t(C,ko),t(C,ge),t(ge,$o),t(ge,Le),t(Le,Oo),t(ge,Mo),t(C,Co),t(C,_e),t(_e,zo),t(_e,ve),t(ve,xo),t(_e,Eo),t(C,qo),t(C,x),y(Te,x,null),t(x,Fo),t(x,S),t(S,jo),t(S,Ae),t(Ae,Lo),t(S,Ao),t(S,Xe),t(Xe,Io),t(S,No),t(x,So),y(Y,x,null),t(x,Do),y(J,x,null),h(e,vt,c),h(e,D,c),t(D,K),t(K,et),y(be,et,null),t(D,Wo),t(D,tt),t(tt,Bo),h(e,Tt,c),h(e,E,c),y(Pe,E,null),t(E,Ho),t(E,ye),t(ye,Vo),t(ye,Ie),t(Ie,Go),t(ye,Uo),t(E,Zo),t(E,we),t(we,Ro),t(we,ke),t(ke,Yo),t(we,Jo),h(e,bt,c),h(e,W,c),t(W,Q),t(Q,ot),y($e,ot,null),t(W,Ko),t(W,nt),t(nt,Qo),h(e,Pt,c),h(e,B,c),y(Oe,B,null),t(B,Xo),t(B,X),y(Me,X,null),t(X,en),y(ee,X,null),yt=!0},p(e,[c]){const Ce={};c&2&&(Ce.$$scope={dirty:c,ctx:e}),Z.$set(Ce);const at={};c&2&&(at.$$scope={dirty:c,ctx:e}),Y.$set(at);const rt={};c&2&&(rt.$$scope={dirty:c,ctx:e}),J.$set(rt);const st={};c&2&&(st.$$scope={dirty:c,ctx:e}),ee.$set(st)},i(e){yt||(w(s.$$.fragment,e),w(re.$$.fragment,e),w(pe.$$.fragment,e),w(he.$$.fragment,e),w(Z.$$.fragment,e),w(fe.$$.fragment,e),w(me.$$.fragment,e),w(Te.$$.fragment,e),w(Y.$$.fragment,e),w(J.$$.fragment,e),w(be.$$.fragment,e),w(Pe.$$.fragment,e),w($e.$$.fragment,e),w(Oe.$$.fragment,e),w(Me.$$.fragment,e),w(ee.$$.fragment,e),yt=!0)},o(e){k(s.$$.fragment,e),k(re.$$.fragment,e),k(pe.$$.fragment,e),k(he.$$.fragment,e),k(Z.$$.fragment,e),k(fe.$$.fragment,e),k(me.$$.fragment,e),k(Te.$$.fragment,e),k(Y.$$.fragment,e),k(J.$$.fragment,e),k(be.$$.fragment,e),k(Pe.$$.fragment,e),k($e.$$.fragment,e),k(Oe.$$.fragment,e),k(Me.$$.fragment,e),k(ee.$$.fragment,e),yt=!1},d(e){o(p),e&&o(T),e&&o(_),$(s),e&&o(it),e&&o(j),$(re),e&&o(lt),e&&o(G),e&&o(dt),e&&o(ze),e&&o(ct),e&&o(xe),e&&o(pt),e&&o(Ee),e&&o(ht),e&&o(z),e&&o(ut),e&&o(O),e&&o(ft),e&&o(L),$(pe),e&&o(mt),e&&o(M),$(he),$(Z),e&&o(gt),e&&o(N),$(fe),e&&o(_t),e&&o(C),$(me),$(Te),$(Y),$(J),e&&o(vt),e&&o(D),$(be),e&&o(Tt),e&&o(E),$(Pe),e&&o(bt),e&&o(W),$($e),e&&o(Pt),e&&o(B),$(Oe),$(Me),$(ee)}}}const Qn={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTPretrainedModel",title:"OPTPretrainedModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function Xn(q){return Gn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Wn{constructor(p){super();Bn(this,p,Xn,Kn,Hn,{})}}export{sa as default,Qn as metadata};
