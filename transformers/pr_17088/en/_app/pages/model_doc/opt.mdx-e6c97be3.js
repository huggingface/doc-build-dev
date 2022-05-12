import{S as Ut,i as Yt,s as Jt,e as a,k as f,w as b,t as i,M as Kt,c as s,d as t,m,a as r,x as y,h as l,b as d,F as o,g as u,y as P,q as w,o as k,B as $,v as Qt,L as _t}from"../../chunks/vendor-6b77c823.js";import{T as Xt}from"../../chunks/Tip-39098574.js";import{D as Ge}from"../../chunks/Docstring-1088f2fb.js";import{C as Tt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as He}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as gt}from"../../chunks/ExampleCodeBlock-5212b321.js";function en(C){let c,v,_,h,T;return h=new Tt({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=i("Example:"),_=f(),b(h.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(t),_=m(n),y(h.$$.fragment,n)},m(n,g){u(n,c,g),o(c,v),u(n,_,g),P(h,n,g),T=!0},p:_t,i(n){T||(w(h.$$.fragment,n),T=!0)},o(n){k(h.$$.fragment,n),T=!1},d(n){n&&t(c),n&&t(_),$(h,n)}}}function on(C){let c,v,_,h,T;return{c(){c=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var S=r(_);h=l(S,"Module"),S.forEach(t),T=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(n,g){u(n,c,g),o(c,v),o(c,_),o(_,h),o(c,T)},d(n){n&&t(c)}}}function tn(C){let c,v,_,h,T;return h=new Tt({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=i("Example:"),_=f(),b(h.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(t),_=m(n),y(h.$$.fragment,n)},m(n,g){u(n,c,g),o(c,v),u(n,_,g),P(h,n,g),T=!0},p:_t,i(n){T||(w(h.$$.fragment,n),T=!0)},o(n){k(h.$$.fragment,n),T=!1},d(n){n&&t(c),n&&t(_),$(h,n)}}}function nn(C){let c,v,_,h,T;return h=new Tt({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){c=a("p"),v=i("Example:"),_=f(),b(h.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);v=l(g,"Example:"),g.forEach(t),_=m(n),y(h.$$.fragment,n)},m(n,g){u(n,c,g),o(c,v),u(n,_,g),P(h,n,g),T=!0},p:_t,i(n){T||(w(h.$$.fragment,n),T=!0)},o(n){k(h.$$.fragment,n),T=!1},d(n){n&&t(c),n&&t(_),$(h,n)}}}function an(C){let c,v,_,h,T,n,g,S,fo,Ve,E,D,Ce,ee,mo,qe,go,Ze,B,_o,oe,To,vo,Re,ve,bo,Ue,be,Ee,yo,Ye,ye,Po,Je,O,wo,te,ko,$o,ne,Oo,Mo,ae,zo,xo,se,Co,qo,Ke,F,G,Fe,re,Eo,je,Fo,Qe,M,ie,jo,j,Lo,Pe,Ao,Io,le,No,Wo,So,L,Do,we,Bo,Go,ke,Ho,Vo,Zo,H,Xe,A,V,Le,de,Ro,Ae,Uo,eo,z,ce,Yo,pe,Jo,$e,Ko,Qo,Xo,he,et,ue,ot,tt,nt,x,fe,at,I,st,Oe,rt,it,Ie,lt,dt,ct,Z,pt,R,oo,N,U,Ne,me,ht,We,ut,to,W,ge,ft,Y,_e,mt,J,no;return n=new He({}),ee=new He({}),re=new He({}),ie=new Ge({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"max_position_embeddings",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"do_layer_norm_before",val:" = True"},{name:"use_cache",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
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
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/configuration_opt.py#L32"}}),H=new gt({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[en]},$$scope:{ctx:C}}}),de=new He({}),ce=new Ge({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L748"}}),fe=new Ge({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17088/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_17088/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L765",returnDescription:`
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
`}}),Z=new Xt({props:{$$slots:{default:[on]},$$scope:{ctx:C}}}),R=new gt({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[tn]},$$scope:{ctx:C}}}),me=new He({}),ge=new Ge({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L817"}}),_e=new Ge({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L848",returnDescription:`
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
`}}),J=new gt({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[nn]},$$scope:{ctx:C}}}),{c(){c=a("meta"),v=f(),_=a("h1"),h=a("a"),T=a("span"),b(n.$$.fragment),g=f(),S=a("span"),fo=i("OPT"),Ve=f(),E=a("h2"),D=a("a"),Ce=a("span"),b(ee.$$.fragment),mo=f(),qe=a("span"),go=i("Overview"),Ze=f(),B=a("p"),_o=i("The OPT model was proposed in "),oe=a("a"),To=i("Open Pre-trained Transformer Language Models"),vo=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Re=f(),ve=a("p"),bo=i("The abstract from the paper is the following:"),Ue=f(),be=a("p"),Ee=a("em"),yo=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Ye=f(),ye=a("p"),Po=i("Tips:"),Je=f(),O=a("p"),wo=i("This model was contributed by "),te=a("a"),ko=i("Arthur Zucker"),$o=i(", "),ne=a("a"),Oo=i("Younes Belkada"),Mo=i(", and "),ae=a("a"),zo=i("Patrick Von Platen"),xo=i(`.
The original code can be found `),se=a("a"),Co=i("here"),qo=i("."),Ke=f(),F=a("h2"),G=a("a"),Fe=a("span"),b(re.$$.fragment),Eo=f(),je=a("span"),Fo=i("OPTConfig"),Qe=f(),M=a("div"),b(ie.$$.fragment),jo=f(),j=a("p"),Lo=i("This is the configuration class to store the configuration of a "),Pe=a("a"),Ao=i("OPTModel"),Io=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),le=a("a"),No=i("facebook/opt-350m"),Wo=i(" architecture."),So=f(),L=a("p"),Do=i("Configuration objects inherit from "),we=a("a"),Bo=i("PretrainedConfig"),Go=i(` and can be used to control the model outputs. Read the
documentation from `),ke=a("a"),Ho=i("PretrainedConfig"),Vo=i(" for more information."),Zo=f(),b(H.$$.fragment),Xe=f(),A=a("h2"),V=a("a"),Le=a("span"),b(de.$$.fragment),Ro=f(),Ae=a("span"),Uo=i("OPTModel"),eo=f(),z=a("div"),b(ce.$$.fragment),Yo=f(),pe=a("p"),Jo=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$e=a("a"),Ko=i("PreTrainedModel"),Qo=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xo=f(),he=a("p"),et=i("This model is also a PyTorch "),ue=a("a"),ot=i("torch.nn.Module"),tt=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nt=f(),x=a("div"),b(fe.$$.fragment),at=f(),I=a("p"),st=i("The "),Oe=a("a"),rt=i("OPTModel"),it=i(" forward method, overrides the "),Ie=a("code"),lt=i("__call__"),dt=i(" special method."),ct=f(),b(Z.$$.fragment),pt=f(),b(R.$$.fragment),oo=f(),N=a("h2"),U=a("a"),Ne=a("span"),b(me.$$.fragment),ht=f(),We=a("span"),ut=i("OPTForCausalLM"),to=f(),W=a("div"),b(ge.$$.fragment),ft=f(),Y=a("div"),b(_e.$$.fragment),mt=f(),b(J.$$.fragment),this.h()},l(e){const p=Kt('[data-svelte="svelte-1phssyn"]',document.head);c=s(p,"META",{name:!0,content:!0}),p.forEach(t),v=m(e),_=s(e,"H1",{class:!0});var Te=r(_);h=s(Te,"A",{id:!0,class:!0,href:!0});var Se=r(h);T=s(Se,"SPAN",{});var De=r(T);y(n.$$.fragment,De),De.forEach(t),Se.forEach(t),g=m(Te),S=s(Te,"SPAN",{});var Be=r(S);fo=l(Be,"OPT"),Be.forEach(t),Te.forEach(t),Ve=m(e),E=s(e,"H2",{class:!0});var ao=r(E);D=s(ao,"A",{id:!0,class:!0,href:!0});var vt=r(D);Ce=s(vt,"SPAN",{});var bt=r(Ce);y(ee.$$.fragment,bt),bt.forEach(t),vt.forEach(t),mo=m(ao),qe=s(ao,"SPAN",{});var yt=r(qe);go=l(yt,"Overview"),yt.forEach(t),ao.forEach(t),Ze=m(e),B=s(e,"P",{});var so=r(B);_o=l(so,"The OPT model was proposed in "),oe=s(so,"A",{href:!0,rel:!0});var Pt=r(oe);To=l(Pt,"Open Pre-trained Transformer Language Models"),Pt.forEach(t),vo=l(so,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),so.forEach(t),Re=m(e),ve=s(e,"P",{});var wt=r(ve);bo=l(wt,"The abstract from the paper is the following:"),wt.forEach(t),Ue=m(e),be=s(e,"P",{});var kt=r(be);Ee=s(kt,"EM",{});var $t=r(Ee);yo=l($t,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),$t.forEach(t),kt.forEach(t),Ye=m(e),ye=s(e,"P",{});var Ot=r(ye);Po=l(Ot,"Tips:"),Ot.forEach(t),Je=m(e),O=s(e,"P",{});var q=r(O);wo=l(q,"This model was contributed by "),te=s(q,"A",{href:!0,rel:!0});var Mt=r(te);ko=l(Mt,"Arthur Zucker"),Mt.forEach(t),$o=l(q,", "),ne=s(q,"A",{href:!0,rel:!0});var zt=r(ne);Oo=l(zt,"Younes Belkada"),zt.forEach(t),Mo=l(q,", and "),ae=s(q,"A",{href:!0,rel:!0});var xt=r(ae);zo=l(xt,"Patrick Von Platen"),xt.forEach(t),xo=l(q,`.
The original code can be found `),se=s(q,"A",{href:!0,rel:!0});var Ct=r(se);Co=l(Ct,"here"),Ct.forEach(t),qo=l(q,"."),q.forEach(t),Ke=m(e),F=s(e,"H2",{class:!0});var ro=r(F);G=s(ro,"A",{id:!0,class:!0,href:!0});var qt=r(G);Fe=s(qt,"SPAN",{});var Et=r(Fe);y(re.$$.fragment,Et),Et.forEach(t),qt.forEach(t),Eo=m(ro),je=s(ro,"SPAN",{});var Ft=r(je);Fo=l(Ft,"OPTConfig"),Ft.forEach(t),ro.forEach(t),Qe=m(e),M=s(e,"DIV",{class:!0});var K=r(M);y(ie.$$.fragment,K),jo=m(K),j=s(K,"P",{});var Me=r(j);Lo=l(Me,"This is the configuration class to store the configuration of a "),Pe=s(Me,"A",{href:!0});var jt=r(Pe);Ao=l(jt,"OPTModel"),jt.forEach(t),Io=l(Me,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),le=s(Me,"A",{href:!0,rel:!0});var Lt=r(le);No=l(Lt,"facebook/opt-350m"),Lt.forEach(t),Wo=l(Me," architecture."),Me.forEach(t),So=m(K),L=s(K,"P",{});var ze=r(L);Do=l(ze,"Configuration objects inherit from "),we=s(ze,"A",{href:!0});var At=r(we);Bo=l(At,"PretrainedConfig"),At.forEach(t),Go=l(ze,` and can be used to control the model outputs. Read the
documentation from `),ke=s(ze,"A",{href:!0});var It=r(ke);Ho=l(It,"PretrainedConfig"),It.forEach(t),Vo=l(ze," for more information."),ze.forEach(t),Zo=m(K),y(H.$$.fragment,K),K.forEach(t),Xe=m(e),A=s(e,"H2",{class:!0});var io=r(A);V=s(io,"A",{id:!0,class:!0,href:!0});var Nt=r(V);Le=s(Nt,"SPAN",{});var Wt=r(Le);y(de.$$.fragment,Wt),Wt.forEach(t),Nt.forEach(t),Ro=m(io),Ae=s(io,"SPAN",{});var St=r(Ae);Uo=l(St,"OPTModel"),St.forEach(t),io.forEach(t),eo=m(e),z=s(e,"DIV",{class:!0});var Q=r(z);y(ce.$$.fragment,Q),Yo=m(Q),pe=s(Q,"P",{});var lo=r(pe);Jo=l(lo,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$e=s(lo,"A",{href:!0});var Dt=r($e);Ko=l(Dt,"PreTrainedModel"),Dt.forEach(t),Qo=l(lo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lo.forEach(t),Xo=m(Q),he=s(Q,"P",{});var co=r(he);et=l(co,"This model is also a PyTorch "),ue=s(co,"A",{href:!0,rel:!0});var Bt=r(ue);ot=l(Bt,"torch.nn.Module"),Bt.forEach(t),tt=l(co,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),co.forEach(t),nt=m(Q),x=s(Q,"DIV",{class:!0});var X=r(x);y(fe.$$.fragment,X),at=m(X),I=s(X,"P",{});var xe=r(I);st=l(xe,"The "),Oe=s(xe,"A",{href:!0});var Gt=r(Oe);rt=l(Gt,"OPTModel"),Gt.forEach(t),it=l(xe," forward method, overrides the "),Ie=s(xe,"CODE",{});var Ht=r(Ie);lt=l(Ht,"__call__"),Ht.forEach(t),dt=l(xe," special method."),xe.forEach(t),ct=m(X),y(Z.$$.fragment,X),pt=m(X),y(R.$$.fragment,X),X.forEach(t),Q.forEach(t),oo=m(e),N=s(e,"H2",{class:!0});var po=r(N);U=s(po,"A",{id:!0,class:!0,href:!0});var Vt=r(U);Ne=s(Vt,"SPAN",{});var Zt=r(Ne);y(me.$$.fragment,Zt),Zt.forEach(t),Vt.forEach(t),ht=m(po),We=s(po,"SPAN",{});var Rt=r(We);ut=l(Rt,"OPTForCausalLM"),Rt.forEach(t),po.forEach(t),to=m(e),W=s(e,"DIV",{class:!0});var ho=r(W);y(ge.$$.fragment,ho),ft=m(ho),Y=s(ho,"DIV",{class:!0});var uo=r(Y);y(_e.$$.fragment,uo),mt=m(uo),y(J.$$.fragment,uo),uo.forEach(t),ho.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(sn)),d(h,"id","opt"),d(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(h,"href","#opt"),d(_,"class","relative group"),d(D,"id","overview"),d(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(D,"href","#overview"),d(E,"class","relative group"),d(oe,"href","https://arxiv.org/pdf/2205.01068"),d(oe,"rel","nofollow"),d(te,"href","https://huggingface.co/ArthurZ"),d(te,"rel","nofollow"),d(ne,"href","https://huggingface.co/ybelkada"),d(ne,"rel","nofollow"),d(ae,"href","https://huggingface.co/patrickvonplaten"),d(ae,"rel","nofollow"),d(se,"href","https://github.com/facebookresearch/metaseq"),d(se,"rel","nofollow"),d(G,"id","transformers.OPTConfig"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#transformers.OPTConfig"),d(F,"class","relative group"),d(Pe,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(le,"href","https://huggingface.co/facebook/opt-350m"),d(le,"rel","nofollow"),d(we,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(ke,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"id","transformers.OPTModel"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#transformers.OPTModel"),d(A,"class","relative group"),d($e,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),d(ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ue,"rel","nofollow"),d(Oe,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(U,"id","transformers.OPTForCausalLM"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#transformers.OPTForCausalLM"),d(N,"class","relative group"),d(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,p){o(document.head,c),u(e,v,p),u(e,_,p),o(_,h),o(h,T),P(n,T,null),o(_,g),o(_,S),o(S,fo),u(e,Ve,p),u(e,E,p),o(E,D),o(D,Ce),P(ee,Ce,null),o(E,mo),o(E,qe),o(qe,go),u(e,Ze,p),u(e,B,p),o(B,_o),o(B,oe),o(oe,To),o(B,vo),u(e,Re,p),u(e,ve,p),o(ve,bo),u(e,Ue,p),u(e,be,p),o(be,Ee),o(Ee,yo),u(e,Ye,p),u(e,ye,p),o(ye,Po),u(e,Je,p),u(e,O,p),o(O,wo),o(O,te),o(te,ko),o(O,$o),o(O,ne),o(ne,Oo),o(O,Mo),o(O,ae),o(ae,zo),o(O,xo),o(O,se),o(se,Co),o(O,qo),u(e,Ke,p),u(e,F,p),o(F,G),o(G,Fe),P(re,Fe,null),o(F,Eo),o(F,je),o(je,Fo),u(e,Qe,p),u(e,M,p),P(ie,M,null),o(M,jo),o(M,j),o(j,Lo),o(j,Pe),o(Pe,Ao),o(j,Io),o(j,le),o(le,No),o(j,Wo),o(M,So),o(M,L),o(L,Do),o(L,we),o(we,Bo),o(L,Go),o(L,ke),o(ke,Ho),o(L,Vo),o(M,Zo),P(H,M,null),u(e,Xe,p),u(e,A,p),o(A,V),o(V,Le),P(de,Le,null),o(A,Ro),o(A,Ae),o(Ae,Uo),u(e,eo,p),u(e,z,p),P(ce,z,null),o(z,Yo),o(z,pe),o(pe,Jo),o(pe,$e),o($e,Ko),o(pe,Qo),o(z,Xo),o(z,he),o(he,et),o(he,ue),o(ue,ot),o(he,tt),o(z,nt),o(z,x),P(fe,x,null),o(x,at),o(x,I),o(I,st),o(I,Oe),o(Oe,rt),o(I,it),o(I,Ie),o(Ie,lt),o(I,dt),o(x,ct),P(Z,x,null),o(x,pt),P(R,x,null),u(e,oo,p),u(e,N,p),o(N,U),o(U,Ne),P(me,Ne,null),o(N,ht),o(N,We),o(We,ut),u(e,to,p),u(e,W,p),P(ge,W,null),o(W,ft),o(W,Y),P(_e,Y,null),o(Y,mt),P(J,Y,null),no=!0},p(e,[p]){const Te={};p&2&&(Te.$$scope={dirty:p,ctx:e}),H.$set(Te);const Se={};p&2&&(Se.$$scope={dirty:p,ctx:e}),Z.$set(Se);const De={};p&2&&(De.$$scope={dirty:p,ctx:e}),R.$set(De);const Be={};p&2&&(Be.$$scope={dirty:p,ctx:e}),J.$set(Be)},i(e){no||(w(n.$$.fragment,e),w(ee.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(H.$$.fragment,e),w(de.$$.fragment,e),w(ce.$$.fragment,e),w(fe.$$.fragment,e),w(Z.$$.fragment,e),w(R.$$.fragment,e),w(me.$$.fragment,e),w(ge.$$.fragment,e),w(_e.$$.fragment,e),w(J.$$.fragment,e),no=!0)},o(e){k(n.$$.fragment,e),k(ee.$$.fragment,e),k(re.$$.fragment,e),k(ie.$$.fragment,e),k(H.$$.fragment,e),k(de.$$.fragment,e),k(ce.$$.fragment,e),k(fe.$$.fragment,e),k(Z.$$.fragment,e),k(R.$$.fragment,e),k(me.$$.fragment,e),k(ge.$$.fragment,e),k(_e.$$.fragment,e),k(J.$$.fragment,e),no=!1},d(e){t(c),e&&t(v),e&&t(_),$(n),e&&t(Ve),e&&t(E),$(ee),e&&t(Ze),e&&t(B),e&&t(Re),e&&t(ve),e&&t(Ue),e&&t(be),e&&t(Ye),e&&t(ye),e&&t(Je),e&&t(O),e&&t(Ke),e&&t(F),$(re),e&&t(Qe),e&&t(M),$(ie),$(H),e&&t(Xe),e&&t(A),$(de),e&&t(eo),e&&t(z),$(ce),$(fe),$(Z),$(R),e&&t(oo),e&&t(N),$(me),e&&t(to),e&&t(W),$(ge),$(_e),$(J)}}}const sn={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function rn(C){return Qt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends Ut{constructor(c){super();Yt(this,c,rn,an,Jt,{})}}export{fn as default,sn as metadata};
