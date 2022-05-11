import{S as pn,i as hn,s as un,e as a,k as f,w as b,t as i,M as fn,c as s,d as t,m,a as r,x as y,h as l,b as d,F as o,g as u,y as w,q as P,o as k,B as $,v as mn,L as xt}from"../../chunks/vendor-6b77c823.js";import{T as gn}from"../../chunks/Tip-39098574.js";import{D as Ue}from"../../chunks/Docstring-1088f2fb.js";import{C as Et}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ye}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ct}from"../../chunks/ExampleCodeBlock-5212b321.js";function _n(E){let p,v,_,h,T;return h=new Et({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=a("p"),v=i("Example:"),_=f(),b(h.$$.fragment)},l(n){p=s(n,"P",{});var g=r(p);v=l(g,"Example:"),g.forEach(t),_=m(n),y(h.$$.fragment,n)},m(n,g){u(n,p,g),o(p,v),u(n,_,g),w(h,n,g),T=!0},p:xt,i(n){T||(P(h.$$.fragment,n),T=!0)},o(n){k(h.$$.fragment,n),T=!1},d(n){n&&t(p),n&&t(_),$(h,n)}}}function Tn(E){let p,v,_,h,T;return{c(){p=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){p=s(n,"P",{});var g=r(p);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var D=r(_);h=l(D,"Module"),D.forEach(t),T=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(n,g){u(n,p,g),o(p,v),o(p,_),o(_,h),o(p,T)},d(n){n&&t(p)}}}function vn(E){let p,v,_,h,T;return h=new Et({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=i("Example:"),_=f(),b(h.$$.fragment)},l(n){p=s(n,"P",{});var g=r(p);v=l(g,"Example:"),g.forEach(t),_=m(n),y(h.$$.fragment,n)},m(n,g){u(n,p,g),o(p,v),u(n,_,g),w(h,n,g),T=!0},p:xt,i(n){T||(P(h.$$.fragment,n),T=!0)},o(n){k(h.$$.fragment,n),T=!1},d(n){n&&t(p),n&&t(_),$(h,n)}}}function bn(E){let p,v,_,h,T;return h=new Et({props:{code:`from transformers import OPTTokenizer, OPTForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=a("p"),v=i("Example:"),_=f(),b(h.$$.fragment)},l(n){p=s(n,"P",{});var g=r(p);v=l(g,"Example:"),g.forEach(t),_=m(n),y(h.$$.fragment,n)},m(n,g){u(n,p,g),o(p,v),u(n,_,g),w(h,n,g),T=!0},p:xt,i(n){T||(P(h.$$.fragment,n),T=!0)},o(n){k(h.$$.fragment,n),T=!1},d(n){n&&t(p),n&&t(_),$(h,n)}}}function yn(E){let p,v,_,h,T,n,g,D,bo,Je,F,B,qe,te,yo,Fe,wo,Ke,G,Po,ne,ko,$o,Qe,ye,Oo,Xe,we,je,Mo,eo,Pe,zo,oo,C,Co,Le,xo,Eo,Ae,qo,Fo,Ie,jo,Lo,to,O,Ao,ae,Io,No,se,Wo,So,re,Do,Bo,ie,Go,Ho,no,j,H,Ne,le,Vo,We,Zo,ao,M,de,Ro,L,Uo,ke,Yo,Jo,ce,Ko,Qo,Xo,A,et,$e,ot,tt,Oe,nt,at,st,V,so,I,Z,Se,pe,rt,De,it,ro,z,he,lt,ue,dt,Me,ct,pt,ht,fe,ut,me,ft,mt,gt,x,ge,_t,N,Tt,ze,vt,bt,Be,yt,wt,Pt,R,kt,U,io,W,Y,Ge,_e,$t,He,Ot,lo,S,Te,Mt,J,ve,zt,K,co;return n=new Ye({}),te=new Ye({}),le=new Ye({}),de=new Ue({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"max_position_embeddings",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"do_layer_norm_before",val:" = True"},{name:"use_cache",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
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
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/configuration_opt.py#L32"}}),V=new Ct({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[_n]},$$scope:{ctx:E}}}),pe=new Ye({}),he=new Ue({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L750"}}),ge=new Ue({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L767",returnDescription:`
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
`}}),R=new gn({props:{$$slots:{default:[Tn]},$$scope:{ctx:E}}}),U=new Ct({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[vn]},$$scope:{ctx:E}}}),_e=new Ye({}),Te=new Ue({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L819"}}),ve=new Ue({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17088/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17088/src/transformers/models/opt/modeling_opt.py#L850",returnDescription:`
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
`}}),K=new Ct({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[bn]},$$scope:{ctx:E}}}),{c(){p=a("meta"),v=f(),_=a("h1"),h=a("a"),T=a("span"),b(n.$$.fragment),g=f(),D=a("span"),bo=i("OPT"),Je=f(),F=a("h2"),B=a("a"),qe=a("span"),b(te.$$.fragment),yo=f(),Fe=a("span"),wo=i("Overview"),Ke=f(),G=a("p"),Po=i("The OPT model was proposed in "),ne=a("a"),ko=i("Open Pre-trained Transformer Language Models"),$o=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Qe=f(),ye=a("p"),Oo=i("The abstract from the paper is the following:"),Xe=f(),we=a("p"),je=a("em"),Mo=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),eo=f(),Pe=a("p"),zo=i("Tips:"),oo=f(),C=a("p"),Co=i("If you want to use the "),Le=a("code"),xo=i("opt-350m"),Eo=i(", you need to set the "),Ae=a("code"),qo=i("do_layer_norm_before"),Fo=i(" parameter to "),Ie=a("code"),jo=i("False"),Lo=i("."),to=f(),O=a("p"),Ao=i("This model was contributed by "),ae=a("a"),Io=i("Arthur Zucker"),No=i(", "),se=a("a"),Wo=i("Younes Belkada"),So=i(", and "),re=a("a"),Do=i("Patrick Von Platen"),Bo=i(`.
The original code can be found `),ie=a("a"),Go=i("here"),Ho=i("."),no=f(),j=a("h2"),H=a("a"),Ne=a("span"),b(le.$$.fragment),Vo=f(),We=a("span"),Zo=i("OPTConfig"),ao=f(),M=a("div"),b(de.$$.fragment),Ro=f(),L=a("p"),Uo=i("This is the configuration class to store the configuration of a "),ke=a("a"),Yo=i("OPTModel"),Jo=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),ce=a("a"),Ko=i("facebook/opt-350m"),Qo=i(" architecture."),Xo=f(),A=a("p"),et=i("Configuration objects inherit from "),$e=a("a"),ot=i("PretrainedConfig"),tt=i(` and can be used to control the model outputs. Read the
documentation from `),Oe=a("a"),nt=i("PretrainedConfig"),at=i(" for more information."),st=f(),b(V.$$.fragment),so=f(),I=a("h2"),Z=a("a"),Se=a("span"),b(pe.$$.fragment),rt=f(),De=a("span"),it=i("OPTModel"),ro=f(),z=a("div"),b(he.$$.fragment),lt=f(),ue=a("p"),dt=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Me=a("a"),ct=i("PreTrainedModel"),pt=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ht=f(),fe=a("p"),ut=i("This model is also a PyTorch "),me=a("a"),ft=i("torch.nn.Module"),mt=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gt=f(),x=a("div"),b(ge.$$.fragment),_t=f(),N=a("p"),Tt=i("The "),ze=a("a"),vt=i("OPTModel"),bt=i(" forward method, overrides the "),Be=a("code"),yt=i("__call__"),wt=i(" special method."),Pt=f(),b(R.$$.fragment),kt=f(),b(U.$$.fragment),io=f(),W=a("h2"),Y=a("a"),Ge=a("span"),b(_e.$$.fragment),$t=f(),He=a("span"),Ot=i("OPTForCausalLM"),lo=f(),S=a("div"),b(Te.$$.fragment),Mt=f(),J=a("div"),b(ve.$$.fragment),zt=f(),b(K.$$.fragment),this.h()},l(e){const c=fn('[data-svelte="svelte-1phssyn"]',document.head);p=s(c,"META",{name:!0,content:!0}),c.forEach(t),v=m(e),_=s(e,"H1",{class:!0});var be=r(_);h=s(be,"A",{id:!0,class:!0,href:!0});var Ve=r(h);T=s(Ve,"SPAN",{});var Ze=r(T);y(n.$$.fragment,Ze),Ze.forEach(t),Ve.forEach(t),g=m(be),D=s(be,"SPAN",{});var Re=r(D);bo=l(Re,"OPT"),Re.forEach(t),be.forEach(t),Je=m(e),F=s(e,"H2",{class:!0});var po=r(F);B=s(po,"A",{id:!0,class:!0,href:!0});var qt=r(B);qe=s(qt,"SPAN",{});var Ft=r(qe);y(te.$$.fragment,Ft),Ft.forEach(t),qt.forEach(t),yo=m(po),Fe=s(po,"SPAN",{});var jt=r(Fe);wo=l(jt,"Overview"),jt.forEach(t),po.forEach(t),Ke=m(e),G=s(e,"P",{});var ho=r(G);Po=l(ho,"The OPT model was proposed in "),ne=s(ho,"A",{href:!0,rel:!0});var Lt=r(ne);ko=l(Lt,"Open Pre-trained Transformer Language Models"),Lt.forEach(t),$o=l(ho,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),ho.forEach(t),Qe=m(e),ye=s(e,"P",{});var At=r(ye);Oo=l(At,"The abstract from the paper is the following:"),At.forEach(t),Xe=m(e),we=s(e,"P",{});var It=r(we);je=s(It,"EM",{});var Nt=r(je);Mo=l(Nt,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Nt.forEach(t),It.forEach(t),eo=m(e),Pe=s(e,"P",{});var Wt=r(Pe);zo=l(Wt,"Tips:"),Wt.forEach(t),oo=m(e),C=s(e,"P",{});var Q=r(C);Co=l(Q,"If you want to use the "),Le=s(Q,"CODE",{});var St=r(Le);xo=l(St,"opt-350m"),St.forEach(t),Eo=l(Q,", you need to set the "),Ae=s(Q,"CODE",{});var Dt=r(Ae);qo=l(Dt,"do_layer_norm_before"),Dt.forEach(t),Fo=l(Q," parameter to "),Ie=s(Q,"CODE",{});var Bt=r(Ie);jo=l(Bt,"False"),Bt.forEach(t),Lo=l(Q,"."),Q.forEach(t),to=m(e),O=s(e,"P",{});var q=r(O);Ao=l(q,"This model was contributed by "),ae=s(q,"A",{href:!0,rel:!0});var Gt=r(ae);Io=l(Gt,"Arthur Zucker"),Gt.forEach(t),No=l(q,", "),se=s(q,"A",{href:!0,rel:!0});var Ht=r(se);Wo=l(Ht,"Younes Belkada"),Ht.forEach(t),So=l(q,", and "),re=s(q,"A",{href:!0,rel:!0});var Vt=r(re);Do=l(Vt,"Patrick Von Platen"),Vt.forEach(t),Bo=l(q,`.
The original code can be found `),ie=s(q,"A",{href:!0,rel:!0});var Zt=r(ie);Go=l(Zt,"here"),Zt.forEach(t),Ho=l(q,"."),q.forEach(t),no=m(e),j=s(e,"H2",{class:!0});var uo=r(j);H=s(uo,"A",{id:!0,class:!0,href:!0});var Rt=r(H);Ne=s(Rt,"SPAN",{});var Ut=r(Ne);y(le.$$.fragment,Ut),Ut.forEach(t),Rt.forEach(t),Vo=m(uo),We=s(uo,"SPAN",{});var Yt=r(We);Zo=l(Yt,"OPTConfig"),Yt.forEach(t),uo.forEach(t),ao=m(e),M=s(e,"DIV",{class:!0});var X=r(M);y(de.$$.fragment,X),Ro=m(X),L=s(X,"P",{});var Ce=r(L);Uo=l(Ce,"This is the configuration class to store the configuration of a "),ke=s(Ce,"A",{href:!0});var Jt=r(ke);Yo=l(Jt,"OPTModel"),Jt.forEach(t),Jo=l(Ce,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),ce=s(Ce,"A",{href:!0,rel:!0});var Kt=r(ce);Ko=l(Kt,"facebook/opt-350m"),Kt.forEach(t),Qo=l(Ce," architecture."),Ce.forEach(t),Xo=m(X),A=s(X,"P",{});var xe=r(A);et=l(xe,"Configuration objects inherit from "),$e=s(xe,"A",{href:!0});var Qt=r($e);ot=l(Qt,"PretrainedConfig"),Qt.forEach(t),tt=l(xe,` and can be used to control the model outputs. Read the
documentation from `),Oe=s(xe,"A",{href:!0});var Xt=r(Oe);nt=l(Xt,"PretrainedConfig"),Xt.forEach(t),at=l(xe," for more information."),xe.forEach(t),st=m(X),y(V.$$.fragment,X),X.forEach(t),so=m(e),I=s(e,"H2",{class:!0});var fo=r(I);Z=s(fo,"A",{id:!0,class:!0,href:!0});var en=r(Z);Se=s(en,"SPAN",{});var on=r(Se);y(pe.$$.fragment,on),on.forEach(t),en.forEach(t),rt=m(fo),De=s(fo,"SPAN",{});var tn=r(De);it=l(tn,"OPTModel"),tn.forEach(t),fo.forEach(t),ro=m(e),z=s(e,"DIV",{class:!0});var ee=r(z);y(he.$$.fragment,ee),lt=m(ee),ue=s(ee,"P",{});var mo=r(ue);dt=l(mo,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Me=s(mo,"A",{href:!0});var nn=r(Me);ct=l(nn,"PreTrainedModel"),nn.forEach(t),pt=l(mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mo.forEach(t),ht=m(ee),fe=s(ee,"P",{});var go=r(fe);ut=l(go,"This model is also a PyTorch "),me=s(go,"A",{href:!0,rel:!0});var an=r(me);ft=l(an,"torch.nn.Module"),an.forEach(t),mt=l(go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),go.forEach(t),gt=m(ee),x=s(ee,"DIV",{class:!0});var oe=r(x);y(ge.$$.fragment,oe),_t=m(oe),N=s(oe,"P",{});var Ee=r(N);Tt=l(Ee,"The "),ze=s(Ee,"A",{href:!0});var sn=r(ze);vt=l(sn,"OPTModel"),sn.forEach(t),bt=l(Ee," forward method, overrides the "),Be=s(Ee,"CODE",{});var rn=r(Be);yt=l(rn,"__call__"),rn.forEach(t),wt=l(Ee," special method."),Ee.forEach(t),Pt=m(oe),y(R.$$.fragment,oe),kt=m(oe),y(U.$$.fragment,oe),oe.forEach(t),ee.forEach(t),io=m(e),W=s(e,"H2",{class:!0});var _o=r(W);Y=s(_o,"A",{id:!0,class:!0,href:!0});var ln=r(Y);Ge=s(ln,"SPAN",{});var dn=r(Ge);y(_e.$$.fragment,dn),dn.forEach(t),ln.forEach(t),$t=m(_o),He=s(_o,"SPAN",{});var cn=r(He);Ot=l(cn,"OPTForCausalLM"),cn.forEach(t),_o.forEach(t),lo=m(e),S=s(e,"DIV",{class:!0});var To=r(S);y(Te.$$.fragment,To),Mt=m(To),J=s(To,"DIV",{class:!0});var vo=r(J);y(ve.$$.fragment,vo),zt=m(vo),y(K.$$.fragment,vo),vo.forEach(t),To.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(wn)),d(h,"id","opt"),d(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(h,"href","#opt"),d(_,"class","relative group"),d(B,"id","overview"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#overview"),d(F,"class","relative group"),d(ne,"href","https://arxiv.org/pdf/2205.01068"),d(ne,"rel","nofollow"),d(ae,"href","https://huggingface.co/ArthurZ"),d(ae,"rel","nofollow"),d(se,"href","https://huggingface.co/ybelkada"),d(se,"rel","nofollow"),d(re,"href","https://huggingface.co/patrickvonplaten"),d(re,"rel","nofollow"),d(ie,"href","https://github.com/facebookresearch/metaseq"),d(ie,"rel","nofollow"),d(H,"id","transformers.OPTConfig"),d(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(H,"href","#transformers.OPTConfig"),d(j,"class","relative group"),d(ke,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(ce,"href","https://huggingface.co/facebook/opt-350m"),d(ce,"rel","nofollow"),d($e,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(Oe,"href","/docs/transformers/pr_17088/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Z,"id","transformers.OPTModel"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#transformers.OPTModel"),d(I,"class","relative group"),d(Me,"href","/docs/transformers/pr_17088/en/main_classes/model#transformers.PreTrainedModel"),d(me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(me,"rel","nofollow"),d(ze,"href","/docs/transformers/pr_17088/en/model_doc/opt#transformers.OPTModel"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Y,"id","transformers.OPTForCausalLM"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#transformers.OPTForCausalLM"),d(W,"class","relative group"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){o(document.head,p),u(e,v,c),u(e,_,c),o(_,h),o(h,T),w(n,T,null),o(_,g),o(_,D),o(D,bo),u(e,Je,c),u(e,F,c),o(F,B),o(B,qe),w(te,qe,null),o(F,yo),o(F,Fe),o(Fe,wo),u(e,Ke,c),u(e,G,c),o(G,Po),o(G,ne),o(ne,ko),o(G,$o),u(e,Qe,c),u(e,ye,c),o(ye,Oo),u(e,Xe,c),u(e,we,c),o(we,je),o(je,Mo),u(e,eo,c),u(e,Pe,c),o(Pe,zo),u(e,oo,c),u(e,C,c),o(C,Co),o(C,Le),o(Le,xo),o(C,Eo),o(C,Ae),o(Ae,qo),o(C,Fo),o(C,Ie),o(Ie,jo),o(C,Lo),u(e,to,c),u(e,O,c),o(O,Ao),o(O,ae),o(ae,Io),o(O,No),o(O,se),o(se,Wo),o(O,So),o(O,re),o(re,Do),o(O,Bo),o(O,ie),o(ie,Go),o(O,Ho),u(e,no,c),u(e,j,c),o(j,H),o(H,Ne),w(le,Ne,null),o(j,Vo),o(j,We),o(We,Zo),u(e,ao,c),u(e,M,c),w(de,M,null),o(M,Ro),o(M,L),o(L,Uo),o(L,ke),o(ke,Yo),o(L,Jo),o(L,ce),o(ce,Ko),o(L,Qo),o(M,Xo),o(M,A),o(A,et),o(A,$e),o($e,ot),o(A,tt),o(A,Oe),o(Oe,nt),o(A,at),o(M,st),w(V,M,null),u(e,so,c),u(e,I,c),o(I,Z),o(Z,Se),w(pe,Se,null),o(I,rt),o(I,De),o(De,it),u(e,ro,c),u(e,z,c),w(he,z,null),o(z,lt),o(z,ue),o(ue,dt),o(ue,Me),o(Me,ct),o(ue,pt),o(z,ht),o(z,fe),o(fe,ut),o(fe,me),o(me,ft),o(fe,mt),o(z,gt),o(z,x),w(ge,x,null),o(x,_t),o(x,N),o(N,Tt),o(N,ze),o(ze,vt),o(N,bt),o(N,Be),o(Be,yt),o(N,wt),o(x,Pt),w(R,x,null),o(x,kt),w(U,x,null),u(e,io,c),u(e,W,c),o(W,Y),o(Y,Ge),w(_e,Ge,null),o(W,$t),o(W,He),o(He,Ot),u(e,lo,c),u(e,S,c),w(Te,S,null),o(S,Mt),o(S,J),w(ve,J,null),o(J,zt),w(K,J,null),co=!0},p(e,[c]){const be={};c&2&&(be.$$scope={dirty:c,ctx:e}),V.$set(be);const Ve={};c&2&&(Ve.$$scope={dirty:c,ctx:e}),R.$set(Ve);const Ze={};c&2&&(Ze.$$scope={dirty:c,ctx:e}),U.$set(Ze);const Re={};c&2&&(Re.$$scope={dirty:c,ctx:e}),K.$set(Re)},i(e){co||(P(n.$$.fragment,e),P(te.$$.fragment,e),P(le.$$.fragment,e),P(de.$$.fragment,e),P(V.$$.fragment,e),P(pe.$$.fragment,e),P(he.$$.fragment,e),P(ge.$$.fragment,e),P(R.$$.fragment,e),P(U.$$.fragment,e),P(_e.$$.fragment,e),P(Te.$$.fragment,e),P(ve.$$.fragment,e),P(K.$$.fragment,e),co=!0)},o(e){k(n.$$.fragment,e),k(te.$$.fragment,e),k(le.$$.fragment,e),k(de.$$.fragment,e),k(V.$$.fragment,e),k(pe.$$.fragment,e),k(he.$$.fragment,e),k(ge.$$.fragment,e),k(R.$$.fragment,e),k(U.$$.fragment,e),k(_e.$$.fragment,e),k(Te.$$.fragment,e),k(ve.$$.fragment,e),k(K.$$.fragment,e),co=!1},d(e){t(p),e&&t(v),e&&t(_),$(n),e&&t(Je),e&&t(F),$(te),e&&t(Ke),e&&t(G),e&&t(Qe),e&&t(ye),e&&t(Xe),e&&t(we),e&&t(eo),e&&t(Pe),e&&t(oo),e&&t(C),e&&t(to),e&&t(O),e&&t(no),e&&t(j),$(le),e&&t(ao),e&&t(M),$(de),$(V),e&&t(so),e&&t(I),$(pe),e&&t(ro),e&&t(z),$(he),$(ge),$(R),$(U),e&&t(io),e&&t(W),$(_e),e&&t(lo),e&&t(S),$(Te),$(ve),$(K)}}}const wn={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"}],title:"OPT"};function Pn(E){return mn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xn extends pn{constructor(p){super();hn(this,p,Pn,yn,un,{})}}export{xn as default,wn as metadata};
