import{S as qi,i as xi,s as $i,e as a,k as i,w as f,t as n,M as ji,c as s,d as o,m as c,a as d,x as u,h as r,b as l,F as e,g as h,y as g,q as _,o as b,B as v,v as Pi}from"../../chunks/vendor-6b77c823.js";import{T as dd}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-abef54e3.js";import{C as Me}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";function Fi(pe){let m,P,y,z,j;return{c(){m=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a("code"),z=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);P=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var F=d(y);z=r(F,"Module"),F.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,P),e(m,y),e(y,z),e(m,j)},d(k){k&&o(m)}}}function Ci(pe){let m,P,y,z,j;return{c(){m=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a("code"),z=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);P=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var F=d(y);z=r(F,"Module"),F.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,P),e(m,y),e(y,z),e(m,j)},d(k){k&&o(m)}}}function Ai(pe){let m,P,y,z,j;return{c(){m=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a("code"),z=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){m=s(k,"P",{});var T=d(m);P=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(T,"CODE",{});var F=d(y);z=r(F,"Module"),F.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(k,T){h(k,m,T),e(m,P),e(m,y),e(y,z),e(m,j)},d(k){k&&o(m)}}}function Si(pe){let m,P,y,z,j,k,T,F,zn,Gt,me,Mn,wo,qn,xn,Ut,he,$n,qe,jn,Pn,Vt,fe,Fn,Eo,Cn,An,Ht,W,Sn,Do,Nn,In,xe,Ln,Bn,Yt,R,On,Qo,Wn,Rn,Xo,Gn,Un,Jt,$e,Zt,G,Vn,je,Hn,Yn,Pe,Jn,Zn,Kt,Q,ue,et,Fe,Kn,ot,Qn,Qt,M,Ce,Xn,ge,zo,er,or,Mo,tr,nr,rr,X,ar,qo,sr,dr,xo,ir,cr,lr,tt,pr,mr,Ae,hr,_e,Se,fr,Ne,ur,$o,gr,_r,br,be,Ie,vr,ee,yr,nt,kr,Tr,rt,wr,Er,Xt,oe,ve,at,Le,Dr,st,zr,en,w,Be,Mr,te,qr,dt,xr,$r,it,jr,Pr,Fr,Oe,Cr,We,Ar,Sr,Nr,ct,Ir,Lr,Re,Br,jo,Or,Wr,Rr,Ge,Gr,Ue,Ur,Vr,Hr,U,Po,Yr,Jr,lt,Zr,Kr,pt,Qr,Xr,ea,C,Ve,oa,ne,ta,Fo,na,ra,mt,aa,sa,da,ye,ia,ht,ca,la,He,pa,A,Ye,ma,ft,ha,fa,re,ua,ut,ga,_a,gt,ba,va,ya,_t,ka,Ta,Je,on,ae,ke,bt,Ze,wa,vt,Ea,tn,E,Ke,Da,se,za,yt,Ma,qa,kt,xa,$a,ja,Qe,Pa,Xe,Fa,Ca,Aa,Tt,Sa,Na,eo,Ia,Co,La,Ba,Oa,oo,Wa,to,Ra,Ga,Ua,V,Ao,Va,Ha,wt,Ya,Ja,Et,Za,Ka,Qa,S,no,Xa,de,es,So,os,ts,Dt,ns,rs,as,Te,ss,zt,ds,is,ro,cs,L,ao,ls,Mt,ps,ms,qt,hs,fs,so,nn,ie,we,xt,io,us,$t,gs,rn,D,co,_s,ce,bs,jt,vs,ys,Pt,ks,Ts,ws,lo,Es,po,Ds,zs,Ms,Ft,qs,xs,mo,$s,No,js,Ps,Fs,ho,Cs,fo,As,Ss,Ns,H,Io,Is,Ls,Ct,Bs,Os,At,Ws,Rs,Gs,N,uo,Us,le,Vs,Lo,Hs,Ys,St,Js,Zs,Ks,Ee,Qs,Nt,Xs,ed,go,od,B,_o,td,It,nd,rd,Lt,ad,sd,bo,an;return k=new Rt({}),$e=new Me({props:{code:`# a workaround to load from pytorch checkpoint
_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")
_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Fe=new Rt({}),Ce=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26",parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_16271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_16271/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),Ae=new Me({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

# Initializing a BERT bert-base-uncased style configuration
config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Bert2Bert model from the bert-base-uncased style configurations
model = EncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = EncoderDecoderConfig.from_pretrained("my-model")
model = EncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bert2Bert model from the bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = EncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),Se=new O({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Ie=new O({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Le=new Rt({}),Be=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ve=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L429",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.EncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.EncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16271/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16271/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new dd({props:{$$slots:{default:[Fi]},$$scope:{ctx:pe}}}),He=new Me({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-base-uncased", "bert-base-uncased"
)  # initialize Bert2Bert from pre-trained checkpoints

# training
model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

input_ids = tokenizer("This is a really long text", return_tensors="pt").input_ids
labels = tokenizer("This is the corresponding summary", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2bert")
model = EncoderDecoderModel.from_pretrained("bert2bert")

# generation
generated = model.generate(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize Bert2Bert from pre-trained checkpoints</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;This is a really long text&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is the corresponding summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),Ye=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L278",parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Je=new Me({props:{code:`from transformers import EncoderDecoderModel

# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),Ze=new Rt({}),Ke=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),no=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L494",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEncoderDecoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16271/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16271/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Te=new dd({props:{$$slots:{default:[Ci]},$$scope:{ctx:pe}}}),ro=new Me({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")

# forward
input_ids = tokenizer.encode(
    "Hello, my dog is cute", add_special_tokens=True, return_tensors="tf"
)  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

# training
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2gpt2")
model = TFEncoderDecoderModel.from_pretrained("bert2gpt2")

# generation
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer.encode(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),ao=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L330",parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),so=new Me({props:{code:`from transformers import TFEncoderDecoderModel

# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),io=new Rt({}),co=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L301",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),uo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L610",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16271/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16271/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.encoder.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16271/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16271/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new dd({props:{$$slots:{default:[Ai]},$$scope:{ctx:pe}}}),go=new Me({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

# load a fine-tuned bert2gpt2 model
model = FlaxEncoderDecoderModel.from_pretrained("patrickvonplaten/bert2gpt2-cnn_dailymail-fp16")
# load input & output tokenizer
tokenizer_input = BertTokenizer.from_pretrained("bert-base-cased")
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

article = '''Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
singing a racist chant. SAE's national chapter suspended the students,
but University of Oklahoma President David Boren took it a step further,
saying the university's affiliation with the fraternity is permanently done.'''

input_ids = tokenizer_input(article, add_special_tokens=True, return_tensors="np").input_ids

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

sequences = model.generate(input_ids, num_beams=4, max_length=12).sequences

summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)[0]
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned bert2gpt2 model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2gpt2-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load input &amp; output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_input = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&#x27;&#x27;&#x27;Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
<span class="hljs-meta">&gt;&gt;&gt; </span>singing a racist chant. SAE&#x27;s national chapter suspended the students,
<span class="hljs-meta">&gt;&gt;&gt; </span>but University of Oklahoma President David Boren took it a step further,
<span class="hljs-meta">&gt;&gt;&gt; </span>saying the university&#x27;s affiliation with the fraternity is permanently done.&#x27;&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_input(article, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),_o=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16271/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L741",parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_16271/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),bo=new Me({props:{code:`from transformers import FlaxEncoderDecoderModel

# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){m=a("meta"),P=i(),y=a("h1"),z=a("a"),j=a("span"),f(k.$$.fragment),T=i(),F=a("span"),zn=n("Encoder Decoder Models"),Gt=i(),me=a("p"),Mn=n("The "),wo=a("a"),qn=n("EncoderDecoderModel"),xn=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Ut=i(),he=a("p"),$n=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),qe=a("a"),jn=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Pn=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Vt=i(),fe=a("p"),Fn=n("After such an "),Eo=a("a"),Cn=n("EncoderDecoderModel"),An=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Ht=i(),W=a("p"),Sn=n("An application of this architecture could be to leverage two pretrained "),Do=a("a"),Nn=n("BertModel"),In=n(` as the encoder
and decoder for a summarization model as was shown in: `),xe=a("a"),Ln=n("Text Summarization with Pretrained Encoders"),Bn=n(" by Yang Liu and Mirella Lapata."),Yt=i(),R=a("p"),On=n("The "),Qo=a("code"),Wn=n("from_pretrained()"),Rn=n(`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Xo=a("code"),Gn=n("from_pt=True"),Un=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Jt=i(),f($e.$$.fragment),Zt=i(),G=a("p"),Vn=n("This model was contributed by "),je=a("a"),Hn=n("thomwolf"),Yn=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=a("a"),Jn=n("ydshieh"),Zn=n("."),Kt=i(),Q=a("h2"),ue=a("a"),et=a("span"),f(Fe.$$.fragment),Kn=i(),ot=a("span"),Qn=n("EncoderDecoderConfig"),Qt=i(),M=a("div"),f(Ce.$$.fragment),Xn=i(),ge=a("p"),zo=a("a"),er=n("EncoderDecoderConfig"),or=n(" is the configuration class to store the configuration of a "),Mo=a("a"),tr=n("EncoderDecoderModel"),nr=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),rr=i(),X=a("p"),ar=n("Configuration objects inherit from "),qo=a("a"),sr=n("PretrainedConfig"),dr=n(` and can be used to control the model outputs. Read the
documentation from `),xo=a("a"),ir=n("PretrainedConfig"),cr=n(" for more information."),lr=i(),tt=a("p"),pr=n("Examples:"),mr=i(),f(Ae.$$.fragment),hr=i(),_e=a("div"),f(Se.$$.fragment),fr=i(),Ne=a("p"),ur=n("Instantiate a "),$o=a("a"),gr=n("EncoderDecoderConfig"),_r=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),br=i(),be=a("div"),f(Ie.$$.fragment),vr=i(),ee=a("p"),yr=n("Serializes this instance to a Python dictionary. Override the default "),nt=a("em"),kr=n("to_dict()"),Tr=n(" from "),rt=a("em"),wr=n("PretrainedConfig"),Er=n("."),Xt=i(),oe=a("h2"),ve=a("a"),at=a("span"),f(Le.$$.fragment),Dr=i(),st=a("span"),zr=n("EncoderDecoderModel"),en=i(),w=a("div"),f(Be.$$.fragment),Mr=i(),te=a("p"),qr=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dt=a("code"),xr=n("from_pretrained()"),$r=n("function and the decoder is loaded via "),it=a("code"),jr=n("from_pretrained()"),Pr=n(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Fr=i(),Oe=a("p"),Cr=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=a("a"),Ar=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Sr=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Nr=i(),ct=a("p"),Ir=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Lr=i(),Re=a("p"),Br=n("This model inherits from "),jo=a("a"),Or=n("PreTrainedModel"),Wr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=i(),Ge=a("p"),Gr=n("This model is also a PyTorch "),Ue=a("a"),Ur=n("torch.nn.Module"),Vr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr=i(),U=a("p"),Po=a("a"),Yr=n("EncoderDecoderModel"),Jr=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),lt=a("em"),Zr=n("~transformers.AutoModel.from_pretrained"),Kr=n(` class method for the encoder and
:meth`),pt=a("em"),Qr=n("~transformers.AutoModelForCausalLM.from_pretrained"),Xr=n(" class method for the decoder."),ea=i(),C=a("div"),f(Ve.$$.fragment),oa=i(),ne=a("p"),ta=n("The "),Fo=a("a"),na=n("EncoderDecoderModel"),ra=n(" forward method, overrides the "),mt=a("code"),aa=n("__call__"),sa=n(" special method."),da=i(),f(ye.$$.fragment),ia=i(),ht=a("p"),ca=n("Examples:"),la=i(),f(He.$$.fragment),pa=i(),A=a("div"),f(Ye.$$.fragment),ma=i(),ft=a("p"),ha=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),fa=i(),re=a("p"),ua=n("The model is set in evaluation mode by default using "),ut=a("code"),ga=n("model.eval()"),_a=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),gt=a("code"),ba=n("model.train()"),va=n("."),ya=i(),_t=a("p"),ka=n("Example:"),Ta=i(),f(Je.$$.fragment),on=i(),ae=a("h2"),ke=a("a"),bt=a("span"),f(Ze.$$.fragment),wa=i(),vt=a("span"),Ea=n("TFEncoderDecoderModel"),tn=i(),E=a("div"),f(Ke.$$.fragment),Da=i(),se=a("p"),za=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),yt=a("code"),Ma=n("from_pretrained()"),qa=n("function and the decoder is loaded via "),kt=a("code"),xa=n("from_pretrained()"),$a=n(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ja=i(),Qe=a("p"),Pa=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=a("a"),Fa=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ca=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Aa=i(),Tt=a("p"),Sa=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Na=i(),eo=a("p"),Ia=n("This model inherits from "),Co=a("a"),La=n("TFPreTrainedModel"),Ba=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oa=i(),oo=a("p"),Wa=n("This model is also a "),to=a("a"),Ra=n("tf.keras.Model"),Ga=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ua=i(),V=a("p"),Ao=a("a"),Va=n("TFEncoderDecoderModel"),Ha=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),wt=a("code"),Ya=n("from_pretrained()"),Ja=n("class method for the encoder and "),Et=a("code"),Za=n("from_pretrained()"),Ka=n(`class
method for the decoder.`),Qa=i(),S=a("div"),f(no.$$.fragment),Xa=i(),de=a("p"),es=n("The "),So=a("a"),os=n("TFEncoderDecoderModel"),ts=n(" forward method, overrides the "),Dt=a("code"),ns=n("__call__"),rs=n(" special method."),as=i(),f(Te.$$.fragment),ss=i(),zt=a("p"),ds=n("Examples:"),is=i(),f(ro.$$.fragment),cs=i(),L=a("div"),f(ao.$$.fragment),ls=i(),Mt=a("p"),ps=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ms=i(),qt=a("p"),hs=n("Example:"),fs=i(),f(so.$$.fragment),nn=i(),ie=a("h2"),we=a("a"),xt=a("span"),f(io.$$.fragment),us=i(),$t=a("span"),gs=n("FlaxEncoderDecoderModel"),rn=i(),D=a("div"),f(co.$$.fragment),_s=i(),ce=a("p"),bs=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),jt=a("code"),vs=n("from_pretrained()"),ys=n("function and the decoder is loaded via "),Pt=a("code"),ks=n("from_pretrained()"),Ts=n(`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ws=i(),lo=a("p"),Es=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=a("a"),Ds=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),zs=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ms=i(),Ft=a("p"),qs=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),xs=i(),mo=a("p"),$s=n("This model inherits from "),No=a("a"),js=n("FlaxPreTrainedModel"),Ps=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fs=i(),ho=a("p"),Cs=n(`This model is also a Flax Linen
`),fo=a("a"),As=n("flax.nn.Module"),Ss=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns=i(),H=a("p"),Io=a("a"),Is=n("FlaxEncoderDecoderModel"),Ls=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Ct=a("em"),Bs=n("~transformers.FlaxAutoModel.from_pretrained"),Os=n(` class method for the
encoder and :meth`),At=a("em"),Ws=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Rs=n(" class method for the decoder."),Gs=i(),N=a("div"),f(uo.$$.fragment),Us=i(),le=a("p"),Vs=n("The "),Lo=a("a"),Hs=n("FlaxEncoderDecoderModel"),Ys=n(" forward method, overrides the "),St=a("code"),Js=n("__call__"),Zs=n(" special method."),Ks=i(),f(Ee.$$.fragment),Qs=i(),Nt=a("p"),Xs=n("Examples:"),ed=i(),f(go.$$.fragment),od=i(),B=a("div"),f(_o.$$.fragment),td=i(),It=a("p"),nd=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),rd=i(),Lt=a("p"),ad=n("Example:"),sd=i(),f(bo.$$.fragment),this.h()},l(t){const p=ji('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),P=c(t),y=s(t,"H1",{class:!0});var vo=d(y);z=s(vo,"A",{id:!0,class:!0,href:!0});var Bt=d(z);j=s(Bt,"SPAN",{});var Ot=d(j);u(k.$$.fragment,Ot),Ot.forEach(o),Bt.forEach(o),T=c(vo),F=s(vo,"SPAN",{});var id=d(F);zn=r(id,"Encoder Decoder Models"),id.forEach(o),vo.forEach(o),Gt=c(t),me=s(t,"P",{});var sn=d(me);Mn=r(sn,"The "),wo=s(sn,"A",{href:!0});var cd=d(wo);qn=r(cd,"EncoderDecoderModel"),cd.forEach(o),xn=r(sn,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),sn.forEach(o),Ut=c(t),he=s(t,"P",{});var dn=d(he);$n=r(dn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),qe=s(dn,"A",{href:!0,rel:!0});var ld=d(qe);jn=r(ld,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ld.forEach(o),Pn=r(dn,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),dn.forEach(o),Vt=c(t),fe=s(t,"P",{});var cn=d(fe);Fn=r(cn,"After such an "),Eo=s(cn,"A",{href:!0});var pd=d(Eo);Cn=r(pd,"EncoderDecoderModel"),pd.forEach(o),An=r(cn,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),cn.forEach(o),Ht=c(t),W=s(t,"P",{});var Bo=d(W);Sn=r(Bo,"An application of this architecture could be to leverage two pretrained "),Do=s(Bo,"A",{href:!0});var md=d(Do);Nn=r(md,"BertModel"),md.forEach(o),In=r(Bo,` as the encoder
and decoder for a summarization model as was shown in: `),xe=s(Bo,"A",{href:!0,rel:!0});var hd=d(xe);Ln=r(hd,"Text Summarization with Pretrained Encoders"),hd.forEach(o),Bn=r(Bo," by Yang Liu and Mirella Lapata."),Bo.forEach(o),Yt=c(t),R=s(t,"P",{});var Oo=d(R);On=r(Oo,"The "),Qo=s(Oo,"CODE",{});var fd=d(Qo);Wn=r(fd,"from_pretrained()"),fd.forEach(o),Rn=r(Oo,`currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),Xo=s(Oo,"CODE",{});var ud=d(Xo);Gn=r(ud,"from_pt=True"),ud.forEach(o),Un=r(Oo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Oo.forEach(o),Jt=c(t),u($e.$$.fragment,t),Zt=c(t),G=s(t,"P",{});var Wo=d(G);Vn=r(Wo,"This model was contributed by "),je=s(Wo,"A",{href:!0,rel:!0});var gd=d(je);Hn=r(gd,"thomwolf"),gd.forEach(o),Yn=r(Wo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Pe=s(Wo,"A",{href:!0,rel:!0});var _d=d(Pe);Jn=r(_d,"ydshieh"),_d.forEach(o),Zn=r(Wo,"."),Wo.forEach(o),Kt=c(t),Q=s(t,"H2",{class:!0});var ln=d(Q);ue=s(ln,"A",{id:!0,class:!0,href:!0});var bd=d(ue);et=s(bd,"SPAN",{});var vd=d(et);u(Fe.$$.fragment,vd),vd.forEach(o),bd.forEach(o),Kn=c(ln),ot=s(ln,"SPAN",{});var yd=d(ot);Qn=r(yd,"EncoderDecoderConfig"),yd.forEach(o),ln.forEach(o),Qt=c(t),M=s(t,"DIV",{class:!0});var I=d(M);u(Ce.$$.fragment,I),Xn=c(I),ge=s(I,"P",{});var Wt=d(ge);zo=s(Wt,"A",{href:!0});var kd=d(zo);er=r(kd,"EncoderDecoderConfig"),kd.forEach(o),or=r(Wt," is the configuration class to store the configuration of a "),Mo=s(Wt,"A",{href:!0});var Td=d(Mo);tr=r(Td,"EncoderDecoderModel"),Td.forEach(o),nr=r(Wt,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Wt.forEach(o),rr=c(I),X=s(I,"P",{});var Ro=d(X);ar=r(Ro,"Configuration objects inherit from "),qo=s(Ro,"A",{href:!0});var wd=d(qo);sr=r(wd,"PretrainedConfig"),wd.forEach(o),dr=r(Ro,` and can be used to control the model outputs. Read the
documentation from `),xo=s(Ro,"A",{href:!0});var Ed=d(xo);ir=r(Ed,"PretrainedConfig"),Ed.forEach(o),cr=r(Ro," for more information."),Ro.forEach(o),lr=c(I),tt=s(I,"P",{});var Dd=d(tt);pr=r(Dd,"Examples:"),Dd.forEach(o),mr=c(I),u(Ae.$$.fragment,I),hr=c(I),_e=s(I,"DIV",{class:!0});var pn=d(_e);u(Se.$$.fragment,pn),fr=c(pn),Ne=s(pn,"P",{});var mn=d(Ne);ur=r(mn,"Instantiate a "),$o=s(mn,"A",{href:!0});var zd=d($o);gr=r(zd,"EncoderDecoderConfig"),zd.forEach(o),_r=r(mn,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),mn.forEach(o),pn.forEach(o),br=c(I),be=s(I,"DIV",{class:!0});var hn=d(be);u(Ie.$$.fragment,hn),vr=c(hn),ee=s(hn,"P",{});var Go=d(ee);yr=r(Go,"Serializes this instance to a Python dictionary. Override the default "),nt=s(Go,"EM",{});var Md=d(nt);kr=r(Md,"to_dict()"),Md.forEach(o),Tr=r(Go," from "),rt=s(Go,"EM",{});var qd=d(rt);wr=r(qd,"PretrainedConfig"),qd.forEach(o),Er=r(Go,"."),Go.forEach(o),hn.forEach(o),I.forEach(o),Xt=c(t),oe=s(t,"H2",{class:!0});var fn=d(oe);ve=s(fn,"A",{id:!0,class:!0,href:!0});var xd=d(ve);at=s(xd,"SPAN",{});var $d=d(at);u(Le.$$.fragment,$d),$d.forEach(o),xd.forEach(o),Dr=c(fn),st=s(fn,"SPAN",{});var jd=d(st);zr=r(jd,"EncoderDecoderModel"),jd.forEach(o),fn.forEach(o),en=c(t),w=s(t,"DIV",{class:!0});var q=d(w);u(Be.$$.fragment,q),Mr=c(q),te=s(q,"P",{});var Uo=d(te);qr=r(Uo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),dt=s(Uo,"CODE",{});var Pd=d(dt);xr=r(Pd,"from_pretrained()"),Pd.forEach(o),$r=r(Uo,"function and the decoder is loaded via "),it=s(Uo,"CODE",{});var Fd=d(it);jr=r(Fd,"from_pretrained()"),Fd.forEach(o),Pr=r(Uo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Uo.forEach(o),Fr=c(q),Oe=s(q,"P",{});var un=d(Oe);Cr=r(un,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),We=s(un,"A",{href:!0,rel:!0});var Cd=d(We);Ar=r(Cd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Cd.forEach(o),Sr=r(un,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),un.forEach(o),Nr=c(q),ct=s(q,"P",{});var Ad=d(ct);Ir=r(Ad,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Ad.forEach(o),Lr=c(q),Re=s(q,"P",{});var gn=d(Re);Br=r(gn,"This model inherits from "),jo=s(gn,"A",{href:!0});var Sd=d(jo);Or=r(Sd,"PreTrainedModel"),Sd.forEach(o),Wr=r(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gn.forEach(o),Rr=c(q),Ge=s(q,"P",{});var _n=d(Ge);Gr=r(_n,"This model is also a PyTorch "),Ue=s(_n,"A",{href:!0,rel:!0});var Nd=d(Ue);Ur=r(Nd,"torch.nn.Module"),Nd.forEach(o),Vr=r(_n,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_n.forEach(o),Hr=c(q),U=s(q,"P",{});var yo=d(U);Po=s(yo,"A",{href:!0});var Id=d(Po);Yr=r(Id,"EncoderDecoderModel"),Id.forEach(o),Jr=r(yo,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),lt=s(yo,"EM",{});var Ld=d(lt);Zr=r(Ld,"~transformers.AutoModel.from_pretrained"),Ld.forEach(o),Kr=r(yo,` class method for the encoder and
:meth`),pt=s(yo,"EM",{});var Bd=d(pt);Qr=r(Bd,"~transformers.AutoModelForCausalLM.from_pretrained"),Bd.forEach(o),Xr=r(yo," class method for the decoder."),yo.forEach(o),ea=c(q),C=s(q,"DIV",{class:!0});var Y=d(C);u(Ve.$$.fragment,Y),oa=c(Y),ne=s(Y,"P",{});var Vo=d(ne);ta=r(Vo,"The "),Fo=s(Vo,"A",{href:!0});var Od=d(Fo);na=r(Od,"EncoderDecoderModel"),Od.forEach(o),ra=r(Vo," forward method, overrides the "),mt=s(Vo,"CODE",{});var Wd=d(mt);aa=r(Wd,"__call__"),Wd.forEach(o),sa=r(Vo," special method."),Vo.forEach(o),da=c(Y),u(ye.$$.fragment,Y),ia=c(Y),ht=s(Y,"P",{});var Rd=d(ht);ca=r(Rd,"Examples:"),Rd.forEach(o),la=c(Y),u(He.$$.fragment,Y),Y.forEach(o),pa=c(q),A=s(q,"DIV",{class:!0});var J=d(A);u(Ye.$$.fragment,J),ma=c(J),ft=s(J,"P",{});var Gd=d(ft);ha=r(Gd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gd.forEach(o),fa=c(J),re=s(J,"P",{});var Ho=d(re);ua=r(Ho,"The model is set in evaluation mode by default using "),ut=s(Ho,"CODE",{});var Ud=d(ut);ga=r(Ud,"model.eval()"),Ud.forEach(o),_a=r(Ho,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),gt=s(Ho,"CODE",{});var Vd=d(gt);ba=r(Vd,"model.train()"),Vd.forEach(o),va=r(Ho,"."),Ho.forEach(o),ya=c(J),_t=s(J,"P",{});var Hd=d(_t);ka=r(Hd,"Example:"),Hd.forEach(o),Ta=c(J),u(Je.$$.fragment,J),J.forEach(o),q.forEach(o),on=c(t),ae=s(t,"H2",{class:!0});var bn=d(ae);ke=s(bn,"A",{id:!0,class:!0,href:!0});var Yd=d(ke);bt=s(Yd,"SPAN",{});var Jd=d(bt);u(Ze.$$.fragment,Jd),Jd.forEach(o),Yd.forEach(o),wa=c(bn),vt=s(bn,"SPAN",{});var Zd=d(vt);Ea=r(Zd,"TFEncoderDecoderModel"),Zd.forEach(o),bn.forEach(o),tn=c(t),E=s(t,"DIV",{class:!0});var x=d(E);u(Ke.$$.fragment,x),Da=c(x),se=s(x,"P",{});var Yo=d(se);za=r(Yo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),yt=s(Yo,"CODE",{});var Kd=d(yt);Ma=r(Kd,"from_pretrained()"),Kd.forEach(o),qa=r(Yo,"function and the decoder is loaded via "),kt=s(Yo,"CODE",{});var Qd=d(kt);xa=r(Qd,"from_pretrained()"),Qd.forEach(o),$a=r(Yo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Yo.forEach(o),ja=c(x),Qe=s(x,"P",{});var vn=d(Qe);Pa=r(vn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Xe=s(vn,"A",{href:!0,rel:!0});var Xd=d(Xe);Fa=r(Xd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Xd.forEach(o),Ca=r(vn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),vn.forEach(o),Aa=c(x),Tt=s(x,"P",{});var ei=d(Tt);Sa=r(ei,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ei.forEach(o),Na=c(x),eo=s(x,"P",{});var yn=d(eo);Ia=r(yn,"This model inherits from "),Co=s(yn,"A",{href:!0});var oi=d(Co);La=r(oi,"TFPreTrainedModel"),oi.forEach(o),Ba=r(yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yn.forEach(o),Oa=c(x),oo=s(x,"P",{});var kn=d(oo);Wa=r(kn,"This model is also a "),to=s(kn,"A",{href:!0,rel:!0});var ti=d(to);Ra=r(ti,"tf.keras.Model"),ti.forEach(o),Ga=r(kn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kn.forEach(o),Ua=c(x),V=s(x,"P",{});var ko=d(V);Ao=s(ko,"A",{href:!0});var ni=d(Ao);Va=r(ni,"TFEncoderDecoderModel"),ni.forEach(o),Ha=r(ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),wt=s(ko,"CODE",{});var ri=d(wt);Ya=r(ri,"from_pretrained()"),ri.forEach(o),Ja=r(ko,"class method for the encoder and "),Et=s(ko,"CODE",{});var ai=d(Et);Za=r(ai,"from_pretrained()"),ai.forEach(o),Ka=r(ko,`class
method for the decoder.`),ko.forEach(o),Qa=c(x),S=s(x,"DIV",{class:!0});var Z=d(S);u(no.$$.fragment,Z),Xa=c(Z),de=s(Z,"P",{});var Jo=d(de);es=r(Jo,"The "),So=s(Jo,"A",{href:!0});var si=d(So);os=r(si,"TFEncoderDecoderModel"),si.forEach(o),ts=r(Jo," forward method, overrides the "),Dt=s(Jo,"CODE",{});var di=d(Dt);ns=r(di,"__call__"),di.forEach(o),rs=r(Jo," special method."),Jo.forEach(o),as=c(Z),u(Te.$$.fragment,Z),ss=c(Z),zt=s(Z,"P",{});var ii=d(zt);ds=r(ii,"Examples:"),ii.forEach(o),is=c(Z),u(ro.$$.fragment,Z),Z.forEach(o),cs=c(x),L=s(x,"DIV",{class:!0});var De=d(L);u(ao.$$.fragment,De),ls=c(De),Mt=s(De,"P",{});var ci=d(Mt);ps=r(ci,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ci.forEach(o),ms=c(De),qt=s(De,"P",{});var li=d(qt);hs=r(li,"Example:"),li.forEach(o),fs=c(De),u(so.$$.fragment,De),De.forEach(o),x.forEach(o),nn=c(t),ie=s(t,"H2",{class:!0});var Tn=d(ie);we=s(Tn,"A",{id:!0,class:!0,href:!0});var pi=d(we);xt=s(pi,"SPAN",{});var mi=d(xt);u(io.$$.fragment,mi),mi.forEach(o),pi.forEach(o),us=c(Tn),$t=s(Tn,"SPAN",{});var hi=d($t);gs=r(hi,"FlaxEncoderDecoderModel"),hi.forEach(o),Tn.forEach(o),rn=c(t),D=s(t,"DIV",{class:!0});var $=d(D);u(co.$$.fragment,$),_s=c($),ce=s($,"P",{});var Zo=d(ce);bs=r(Zo,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),jt=s(Zo,"CODE",{});var fi=d(jt);vs=r(fi,"from_pretrained()"),fi.forEach(o),ys=r(Zo,"function and the decoder is loaded via "),Pt=s(Zo,"CODE",{});var ui=d(Pt);ks=r(ui,"from_pretrained()"),ui.forEach(o),Ts=r(Zo,`function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Zo.forEach(o),ws=c($),lo=s($,"P",{});var wn=d(lo);Es=r(wn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s(wn,"A",{href:!0,rel:!0});var gi=d(po);Ds=r(gi,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),gi.forEach(o),zs=r(wn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wn.forEach(o),Ms=c($),Ft=s($,"P",{});var _i=d(Ft);qs=r(_i,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),_i.forEach(o),xs=c($),mo=s($,"P",{});var En=d(mo);$s=r(En,"This model inherits from "),No=s(En,"A",{href:!0});var bi=d(No);js=r(bi,"FlaxPreTrainedModel"),bi.forEach(o),Ps=r(En,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En.forEach(o),Fs=c($),ho=s($,"P",{});var Dn=d(ho);Cs=r(Dn,`This model is also a Flax Linen
`),fo=s(Dn,"A",{href:!0,rel:!0});var vi=d(fo);As=r(vi,"flax.nn.Module"),vi.forEach(o),Ss=r(Dn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Dn.forEach(o),Ns=c($),H=s($,"P",{});var To=d(H);Io=s(To,"A",{href:!0});var yi=d(Io);Is=r(yi,"FlaxEncoderDecoderModel"),yi.forEach(o),Ls=r(To,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Ct=s(To,"EM",{});var ki=d(Ct);Bs=r(ki,"~transformers.FlaxAutoModel.from_pretrained"),ki.forEach(o),Os=r(To,` class method for the
encoder and :meth`),At=s(To,"EM",{});var Ti=d(At);Ws=r(Ti,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Ti.forEach(o),Rs=r(To," class method for the decoder."),To.forEach(o),Gs=c($),N=s($,"DIV",{class:!0});var K=d(N);u(uo.$$.fragment,K),Us=c(K),le=s(K,"P",{});var Ko=d(le);Vs=r(Ko,"The "),Lo=s(Ko,"A",{href:!0});var wi=d(Lo);Hs=r(wi,"FlaxEncoderDecoderModel"),wi.forEach(o),Ys=r(Ko," forward method, overrides the "),St=s(Ko,"CODE",{});var Ei=d(St);Js=r(Ei,"__call__"),Ei.forEach(o),Zs=r(Ko," special method."),Ko.forEach(o),Ks=c(K),u(Ee.$$.fragment,K),Qs=c(K),Nt=s(K,"P",{});var Di=d(Nt);Xs=r(Di,"Examples:"),Di.forEach(o),ed=c(K),u(go.$$.fragment,K),K.forEach(o),od=c($),B=s($,"DIV",{class:!0});var ze=d(B);u(_o.$$.fragment,ze),td=c(ze),It=s(ze,"P",{});var zi=d(It);nd=r(zi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),zi.forEach(o),rd=c(ze),Lt=s(ze,"P",{});var Mi=d(Lt);ad=r(Mi,"Example:"),Mi.forEach(o),sd=c(ze),u(bo.$$.fragment,ze),ze.forEach(o),$.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Ni)),l(z,"id","encoder-decoder-models"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#encoder-decoder-models"),l(y,"class","relative group"),l(wo,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(qe,"href","https://arxiv.org/abs/1907.12461"),l(qe,"rel","nofollow"),l(Eo,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Do,"href","/docs/transformers/pr_16271/en/model_doc/bert#transformers.BertModel"),l(xe,"href","https://arxiv.org/abs/1908.08345"),l(xe,"rel","nofollow"),l(je,"href","https://github.com/thomwolf"),l(je,"rel","nofollow"),l(Pe,"href","https://github.com/ydshieh"),l(Pe,"rel","nofollow"),l(ue,"id","transformers.EncoderDecoderConfig"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.EncoderDecoderConfig"),l(Q,"class","relative group"),l(zo,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(Mo,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(qo,"href","/docs/transformers/pr_16271/en/main_classes/configuration#transformers.PretrainedConfig"),l(xo,"href","/docs/transformers/pr_16271/en/main_classes/configuration#transformers.PretrainedConfig"),l($o,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(_e,"class","docstring"),l(be,"class","docstring"),l(M,"class","docstring"),l(ve,"id","transformers.EncoderDecoderModel"),l(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ve,"href","#transformers.EncoderDecoderModel"),l(oe,"class","relative group"),l(We,"href","https://arxiv.org/abs/1907.12461"),l(We,"rel","nofollow"),l(jo,"href","/docs/transformers/pr_16271/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ue,"rel","nofollow"),l(Po,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Fo,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(C,"class","docstring"),l(A,"class","docstring"),l(w,"class","docstring"),l(ke,"id","transformers.TFEncoderDecoderModel"),l(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ke,"href","#transformers.TFEncoderDecoderModel"),l(ae,"class","relative group"),l(Xe,"href","https://arxiv.org/abs/1907.12461"),l(Xe,"rel","nofollow"),l(Co,"href","/docs/transformers/pr_16271/en/main_classes/model#transformers.TFPreTrainedModel"),l(to,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(to,"rel","nofollow"),l(Ao,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(So,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(S,"class","docstring"),l(L,"class","docstring"),l(E,"class","docstring"),l(we,"id","transformers.FlaxEncoderDecoderModel"),l(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(we,"href","#transformers.FlaxEncoderDecoderModel"),l(ie,"class","relative group"),l(po,"href","https://arxiv.org/abs/1907.12461"),l(po,"rel","nofollow"),l(No,"href","/docs/transformers/pr_16271/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(fo,"rel","nofollow"),l(Io,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(Lo,"href","/docs/transformers/pr_16271/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(N,"class","docstring"),l(B,"class","docstring"),l(D,"class","docstring")},m(t,p){e(document.head,m),h(t,P,p),h(t,y,p),e(y,z),e(z,j),g(k,j,null),e(y,T),e(y,F),e(F,zn),h(t,Gt,p),h(t,me,p),e(me,Mn),e(me,wo),e(wo,qn),e(me,xn),h(t,Ut,p),h(t,he,p),e(he,$n),e(he,qe),e(qe,jn),e(he,Pn),h(t,Vt,p),h(t,fe,p),e(fe,Fn),e(fe,Eo),e(Eo,Cn),e(fe,An),h(t,Ht,p),h(t,W,p),e(W,Sn),e(W,Do),e(Do,Nn),e(W,In),e(W,xe),e(xe,Ln),e(W,Bn),h(t,Yt,p),h(t,R,p),e(R,On),e(R,Qo),e(Qo,Wn),e(R,Rn),e(R,Xo),e(Xo,Gn),e(R,Un),h(t,Jt,p),g($e,t,p),h(t,Zt,p),h(t,G,p),e(G,Vn),e(G,je),e(je,Hn),e(G,Yn),e(G,Pe),e(Pe,Jn),e(G,Zn),h(t,Kt,p),h(t,Q,p),e(Q,ue),e(ue,et),g(Fe,et,null),e(Q,Kn),e(Q,ot),e(ot,Qn),h(t,Qt,p),h(t,M,p),g(Ce,M,null),e(M,Xn),e(M,ge),e(ge,zo),e(zo,er),e(ge,or),e(ge,Mo),e(Mo,tr),e(ge,nr),e(M,rr),e(M,X),e(X,ar),e(X,qo),e(qo,sr),e(X,dr),e(X,xo),e(xo,ir),e(X,cr),e(M,lr),e(M,tt),e(tt,pr),e(M,mr),g(Ae,M,null),e(M,hr),e(M,_e),g(Se,_e,null),e(_e,fr),e(_e,Ne),e(Ne,ur),e(Ne,$o),e($o,gr),e(Ne,_r),e(M,br),e(M,be),g(Ie,be,null),e(be,vr),e(be,ee),e(ee,yr),e(ee,nt),e(nt,kr),e(ee,Tr),e(ee,rt),e(rt,wr),e(ee,Er),h(t,Xt,p),h(t,oe,p),e(oe,ve),e(ve,at),g(Le,at,null),e(oe,Dr),e(oe,st),e(st,zr),h(t,en,p),h(t,w,p),g(Be,w,null),e(w,Mr),e(w,te),e(te,qr),e(te,dt),e(dt,xr),e(te,$r),e(te,it),e(it,jr),e(te,Pr),e(w,Fr),e(w,Oe),e(Oe,Cr),e(Oe,We),e(We,Ar),e(Oe,Sr),e(w,Nr),e(w,ct),e(ct,Ir),e(w,Lr),e(w,Re),e(Re,Br),e(Re,jo),e(jo,Or),e(Re,Wr),e(w,Rr),e(w,Ge),e(Ge,Gr),e(Ge,Ue),e(Ue,Ur),e(Ge,Vr),e(w,Hr),e(w,U),e(U,Po),e(Po,Yr),e(U,Jr),e(U,lt),e(lt,Zr),e(U,Kr),e(U,pt),e(pt,Qr),e(U,Xr),e(w,ea),e(w,C),g(Ve,C,null),e(C,oa),e(C,ne),e(ne,ta),e(ne,Fo),e(Fo,na),e(ne,ra),e(ne,mt),e(mt,aa),e(ne,sa),e(C,da),g(ye,C,null),e(C,ia),e(C,ht),e(ht,ca),e(C,la),g(He,C,null),e(w,pa),e(w,A),g(Ye,A,null),e(A,ma),e(A,ft),e(ft,ha),e(A,fa),e(A,re),e(re,ua),e(re,ut),e(ut,ga),e(re,_a),e(re,gt),e(gt,ba),e(re,va),e(A,ya),e(A,_t),e(_t,ka),e(A,Ta),g(Je,A,null),h(t,on,p),h(t,ae,p),e(ae,ke),e(ke,bt),g(Ze,bt,null),e(ae,wa),e(ae,vt),e(vt,Ea),h(t,tn,p),h(t,E,p),g(Ke,E,null),e(E,Da),e(E,se),e(se,za),e(se,yt),e(yt,Ma),e(se,qa),e(se,kt),e(kt,xa),e(se,$a),e(E,ja),e(E,Qe),e(Qe,Pa),e(Qe,Xe),e(Xe,Fa),e(Qe,Ca),e(E,Aa),e(E,Tt),e(Tt,Sa),e(E,Na),e(E,eo),e(eo,Ia),e(eo,Co),e(Co,La),e(eo,Ba),e(E,Oa),e(E,oo),e(oo,Wa),e(oo,to),e(to,Ra),e(oo,Ga),e(E,Ua),e(E,V),e(V,Ao),e(Ao,Va),e(V,Ha),e(V,wt),e(wt,Ya),e(V,Ja),e(V,Et),e(Et,Za),e(V,Ka),e(E,Qa),e(E,S),g(no,S,null),e(S,Xa),e(S,de),e(de,es),e(de,So),e(So,os),e(de,ts),e(de,Dt),e(Dt,ns),e(de,rs),e(S,as),g(Te,S,null),e(S,ss),e(S,zt),e(zt,ds),e(S,is),g(ro,S,null),e(E,cs),e(E,L),g(ao,L,null),e(L,ls),e(L,Mt),e(Mt,ps),e(L,ms),e(L,qt),e(qt,hs),e(L,fs),g(so,L,null),h(t,nn,p),h(t,ie,p),e(ie,we),e(we,xt),g(io,xt,null),e(ie,us),e(ie,$t),e($t,gs),h(t,rn,p),h(t,D,p),g(co,D,null),e(D,_s),e(D,ce),e(ce,bs),e(ce,jt),e(jt,vs),e(ce,ys),e(ce,Pt),e(Pt,ks),e(ce,Ts),e(D,ws),e(D,lo),e(lo,Es),e(lo,po),e(po,Ds),e(lo,zs),e(D,Ms),e(D,Ft),e(Ft,qs),e(D,xs),e(D,mo),e(mo,$s),e(mo,No),e(No,js),e(mo,Ps),e(D,Fs),e(D,ho),e(ho,Cs),e(ho,fo),e(fo,As),e(ho,Ss),e(D,Ns),e(D,H),e(H,Io),e(Io,Is),e(H,Ls),e(H,Ct),e(Ct,Bs),e(H,Os),e(H,At),e(At,Ws),e(H,Rs),e(D,Gs),e(D,N),g(uo,N,null),e(N,Us),e(N,le),e(le,Vs),e(le,Lo),e(Lo,Hs),e(le,Ys),e(le,St),e(St,Js),e(le,Zs),e(N,Ks),g(Ee,N,null),e(N,Qs),e(N,Nt),e(Nt,Xs),e(N,ed),g(go,N,null),e(D,od),e(D,B),g(_o,B,null),e(B,td),e(B,It),e(It,nd),e(B,rd),e(B,Lt),e(Lt,ad),e(B,sd),g(bo,B,null),an=!0},p(t,[p]){const vo={};p&2&&(vo.$$scope={dirty:p,ctx:t}),ye.$set(vo);const Bt={};p&2&&(Bt.$$scope={dirty:p,ctx:t}),Te.$set(Bt);const Ot={};p&2&&(Ot.$$scope={dirty:p,ctx:t}),Ee.$set(Ot)},i(t){an||(_(k.$$.fragment,t),_($e.$$.fragment,t),_(Fe.$$.fragment,t),_(Ce.$$.fragment,t),_(Ae.$$.fragment,t),_(Se.$$.fragment,t),_(Ie.$$.fragment,t),_(Le.$$.fragment,t),_(Be.$$.fragment,t),_(Ve.$$.fragment,t),_(ye.$$.fragment,t),_(He.$$.fragment,t),_(Ye.$$.fragment,t),_(Je.$$.fragment,t),_(Ze.$$.fragment,t),_(Ke.$$.fragment,t),_(no.$$.fragment,t),_(Te.$$.fragment,t),_(ro.$$.fragment,t),_(ao.$$.fragment,t),_(so.$$.fragment,t),_(io.$$.fragment,t),_(co.$$.fragment,t),_(uo.$$.fragment,t),_(Ee.$$.fragment,t),_(go.$$.fragment,t),_(_o.$$.fragment,t),_(bo.$$.fragment,t),an=!0)},o(t){b(k.$$.fragment,t),b($e.$$.fragment,t),b(Fe.$$.fragment,t),b(Ce.$$.fragment,t),b(Ae.$$.fragment,t),b(Se.$$.fragment,t),b(Ie.$$.fragment,t),b(Le.$$.fragment,t),b(Be.$$.fragment,t),b(Ve.$$.fragment,t),b(ye.$$.fragment,t),b(He.$$.fragment,t),b(Ye.$$.fragment,t),b(Je.$$.fragment,t),b(Ze.$$.fragment,t),b(Ke.$$.fragment,t),b(no.$$.fragment,t),b(Te.$$.fragment,t),b(ro.$$.fragment,t),b(ao.$$.fragment,t),b(so.$$.fragment,t),b(io.$$.fragment,t),b(co.$$.fragment,t),b(uo.$$.fragment,t),b(Ee.$$.fragment,t),b(go.$$.fragment,t),b(_o.$$.fragment,t),b(bo.$$.fragment,t),an=!1},d(t){o(m),t&&o(P),t&&o(y),v(k),t&&o(Gt),t&&o(me),t&&o(Ut),t&&o(he),t&&o(Vt),t&&o(fe),t&&o(Ht),t&&o(W),t&&o(Yt),t&&o(R),t&&o(Jt),v($e,t),t&&o(Zt),t&&o(G),t&&o(Kt),t&&o(Q),v(Fe),t&&o(Qt),t&&o(M),v(Ce),v(Ae),v(Se),v(Ie),t&&o(Xt),t&&o(oe),v(Le),t&&o(en),t&&o(w),v(Be),v(Ve),v(ye),v(He),v(Ye),v(Je),t&&o(on),t&&o(ae),v(Ze),t&&o(tn),t&&o(E),v(Ke),v(no),v(Te),v(ro),v(ao),v(so),t&&o(nn),t&&o(ie),v(io),t&&o(rn),t&&o(D),v(co),v(uo),v(Ee),v(go),v(_o),v(bo)}}}const Ni={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function Ii(pe){return Pi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gi extends qi{constructor(m){super();xi(this,m,Ii,Si,$i,{})}}export{Gi as default,Ni as metadata};
