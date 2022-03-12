import{S as Is,i as As,s as Ps,e as n,k as c,w,t as r,M as qs,c as s,d as o,m as h,a,x as v,h as i,b as l,N as zs,F as e,g as p,y as b,q as S,o as $,B as y}from"../../chunks/vendor-4833417e.js";import{T as Dn}from"../../chunks/Tip-fffd6df1.js";import{D as ze}from"../../chunks/Docstring-4f315ed9.js";import{C as eo}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as st}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Ns(O){let m,T,f,_,k;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=a(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var M=a(f);_=i(M,"Module"),M.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Os(O){let m,T,f,_,k;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=a(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var M=a(f);_=i(M,"Module"),M.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Ls(O){let m,T,f,_,k;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=a(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var M=a(f);_=i(M,"Module"),M.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Ds(O){let m,T,f,_,k,u,g,M,to,xt,L,J,at,de,oo,rt,no,Et,D,so,ce,ao,ro,io,jt,Ne,lo,Ft,Oe,it,co,Ct,Le,ho,It,De,he,po,We,mo,fo,At,Q,Wn,Pt,X,uo,He,go,_o,qt,P,wo,pe,vo,bo,me,So,$o,zt,W,ee,lt,fe,yo,dt,To,Nt,F,ue,ko,H,Mo,Be,xo,Eo,ge,jo,Fo,Co,B,Io,Ue,Ao,Po,Ve,qo,zo,No,_e,Ot,U,te,ct,we,Oo,ht,Lo,Lt,I,ve,Do,be,Wo,Se,Ho,Bo,Uo,x,$e,Vo,V,Ko,Ke,Yo,Zo,pt,Ro,Go,Jo,oe,Qo,mt,Xo,en,ye,Dt,K,ne,ft,Te,tn,ut,on,Wt,A,ke,nn,Y,sn,gt,an,rn,Me,ln,dn,cn,E,xe,hn,Z,pn,Ye,mn,fn,_t,un,gn,_n,se,wn,wt,vn,bn,Ee,Ht,R,ae,vt,je,Sn,bt,$n,Bt,C,Fe,yn,St,Tn,kn,Ce,Mn,Ie,xn,En,jn,j,Ae,Fn,G,Cn,Ze,In,An,$t,Pn,qn,zn,re,Nn,yt,On,Ln,Pe,Ut;return u=new st({}),de=new st({}),fe=new st({}),ue=new ze({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.SwinConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.SwinConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.SwinConfig.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.SwinConfig.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [2, 2, 6, 2]) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.SwinConfig.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [3, 6, 12, 24]) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.SwinConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.SwinConfig.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.SwinConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.SwinConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.SwinConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SwinConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.SwinConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SwinConfig.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.SwinConfig.patch_norm",description:`<strong>patch_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not to add layer normalization after patch embedding.`,name:"patch_norm"},{anchor:"transformers.SwinConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SwinConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SwinConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 32) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.</p>
<p>Example &#x2014;`,name:"encoder_stride"}]}}),_e=new eo({props:{code:`from transformers import SwinModel, SwinConfig

# Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration
configuration = SwinConfig()

# Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration
model = SwinModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SwinModel, SwinConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SwinConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),we=new st({}),ve=new ze({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/modeling_swin.py#L684",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16102/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$e=new ze({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/modeling_swin.py#L711",parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16102/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.SwinModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16102/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16102/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16102/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new Dn({props:{$$slots:{default:[Ns]},$$scope:{ctx:O}}}),ye=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinModel.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),Te=new st({}),ke=new ze({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/modeling_swin.py#L778",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16102/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xe=new ze({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/modeling_swin.py#L793",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16102/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.SwinForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16102/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16102/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16102/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new Dn({props:{$$slots:{default:[Os]},$$scope:{ctx:O}}}),Ee=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForMaskedImageModeling.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),je=new st({}),Fe=new ze({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/modeling_swin.py#L887",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16102/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ae=new ze({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16102/src/transformers/models/swin/modeling_swin.py#L902",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16102/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.SwinForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16102/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16102/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16102/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new Dn({props:{$$slots:{default:[Ls]},$$scope:{ctx:O}}}),Pe=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForImageClassification.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){m=n("meta"),T=c(),f=n("h1"),_=n("a"),k=n("span"),w(u.$$.fragment),g=c(),M=n("span"),to=r("Swin Transformer"),xt=c(),L=n("h2"),J=n("a"),at=n("span"),w(de.$$.fragment),oo=c(),rt=n("span"),no=r("Overview"),Et=c(),D=n("p"),so=r("The Swin Transformer was proposed in "),ce=n("a"),ao=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ro=n("br"),io=r(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),jt=c(),Ne=n("p"),lo=r("The abstract from the paper is the following:"),Ft=c(),Oe=n("p"),it=n("em"),co=r(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Ct=c(),Le=n("p"),ho=r("Tips:"),It=c(),De=n("ul"),he=n("li"),po=r("One can use the "),We=n("a"),mo=r("AutoFeatureExtractor"),fo=r(" API to prepare images for the model."),At=c(),Q=n("img"),Pt=c(),X=n("small"),uo=r("Swin Transformer architecture. Taken from the "),He=n("a"),go=r("original paper"),_o=r("."),qt=c(),P=n("p"),wo=r("This model was contributed by "),pe=n("a"),vo=r("novice03"),bo=r(". The original code can be found "),me=n("a"),So=r("here"),$o=r("."),zt=c(),W=n("h2"),ee=n("a"),lt=n("span"),w(fe.$$.fragment),yo=c(),dt=n("span"),To=r("SwinConfig"),Nt=c(),F=n("div"),w(ue.$$.fragment),ko=c(),H=n("p"),Mo=r("This is the configuration class to store the configuration of a "),Be=n("a"),xo=r("SwinModel"),Eo=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ge=n("a"),jo=r("microsoft/swin-tiny-patch4-window7-224"),Fo=r(`
architecture.`),Co=c(),B=n("p"),Io=r("Configuration objects inherit from "),Ue=n("a"),Ao=r("PretrainedConfig"),Po=r(` and can be used to control the model outputs. Read the
documentation from `),Ve=n("a"),qo=r("PretrainedConfig"),zo=r(" for more information."),No=c(),w(_e.$$.fragment),Ot=c(),U=n("h2"),te=n("a"),ct=n("span"),w(we.$$.fragment),Oo=c(),ht=n("span"),Lo=r("SwinModel"),Lt=c(),I=n("div"),w(ve.$$.fragment),Do=c(),be=n("p"),Wo=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=n("a"),Ho=r("torch.nn.Module"),Bo=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uo=c(),x=n("div"),w($e.$$.fragment),Vo=c(),V=n("p"),Ko=r("The "),Ke=n("a"),Yo=r("SwinModel"),Zo=r(" forward method, overrides the "),pt=n("code"),Ro=r("__call__"),Go=r(" special method."),Jo=c(),w(oe.$$.fragment),Qo=c(),mt=n("p"),Xo=r("Example:"),en=c(),w(ye.$$.fragment),Dt=c(),K=n("h2"),ne=n("a"),ft=n("span"),w(Te.$$.fragment),tn=c(),ut=n("span"),on=r("SwinForMaskedImageModeling"),Wt=c(),A=n("div"),w(ke.$$.fragment),nn=c(),Y=n("p"),sn=r("Swin Model with a decoder on top for masked image modeling, as proposed in "),gt=n("code"),an=r("SimMIM <https://arxiv.org/abs/2111.09886>"),rn=r(`__.
This model is a PyTorch `),Me=n("a"),ln=r("torch.nn.Module"),dn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cn=c(),E=n("div"),w(xe.$$.fragment),hn=c(),Z=n("p"),pn=r("The "),Ye=n("a"),mn=r("SwinForMaskedImageModeling"),fn=r(" forward method, overrides the "),_t=n("code"),un=r("__call__"),gn=r(" special method."),_n=c(),w(se.$$.fragment),wn=c(),wt=n("p"),vn=r("Examples:"),bn=c(),w(Ee.$$.fragment),Ht=c(),R=n("h2"),ae=n("a"),vt=n("span"),w(je.$$.fragment),Sn=c(),bt=n("span"),$n=r("SwinForImageClassification"),Bt=c(),C=n("div"),w(Fe.$$.fragment),yn=c(),St=n("p"),Tn=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),kn=c(),Ce=n("p"),Mn=r("This model is a PyTorch "),Ie=n("a"),xn=r("torch.nn.Module"),En=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jn=c(),j=n("div"),w(Ae.$$.fragment),Fn=c(),G=n("p"),Cn=r("The "),Ze=n("a"),In=r("SwinForImageClassification"),An=r(" forward method, overrides the "),$t=n("code"),Pn=r("__call__"),qn=r(" special method."),zn=c(),w(re.$$.fragment),Nn=c(),yt=n("p"),On=r("Example:"),Ln=c(),w(Pe.$$.fragment),this.h()},l(t){const d=qs('[data-svelte="svelte-1phssyn"]',document.head);m=s(d,"META",{name:!0,content:!0}),d.forEach(o),T=h(t),f=s(t,"H1",{class:!0});var qe=a(f);_=s(qe,"A",{id:!0,class:!0,href:!0});var Tt=a(_);k=s(Tt,"SPAN",{});var kt=a(k);v(u.$$.fragment,kt),kt.forEach(o),Tt.forEach(o),g=h(qe),M=s(qe,"SPAN",{});var Hn=a(M);to=i(Hn,"Swin Transformer"),Hn.forEach(o),qe.forEach(o),xt=h(t),L=s(t,"H2",{class:!0});var Vt=a(L);J=s(Vt,"A",{id:!0,class:!0,href:!0});var Bn=a(J);at=s(Bn,"SPAN",{});var Un=a(at);v(de.$$.fragment,Un),Un.forEach(o),Bn.forEach(o),oo=h(Vt),rt=s(Vt,"SPAN",{});var Vn=a(rt);no=i(Vn,"Overview"),Vn.forEach(o),Vt.forEach(o),Et=h(t),D=s(t,"P",{});var Mt=a(D);so=i(Mt,"The Swin Transformer was proposed in "),ce=s(Mt,"A",{href:!0,rel:!0});var Kn=a(ce);ao=i(Kn,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Kn.forEach(o),ro=s(Mt,"BR",{}),io=i(Mt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Mt.forEach(o),jt=h(t),Ne=s(t,"P",{});var Yn=a(Ne);lo=i(Yn,"The abstract from the paper is the following:"),Yn.forEach(o),Ft=h(t),Oe=s(t,"P",{});var Zn=a(Oe);it=s(Zn,"EM",{});var Rn=a(it);co=i(Rn,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Rn.forEach(o),Zn.forEach(o),Ct=h(t),Le=s(t,"P",{});var Gn=a(Le);ho=i(Gn,"Tips:"),Gn.forEach(o),It=h(t),De=s(t,"UL",{});var Jn=a(De);he=s(Jn,"LI",{});var Kt=a(he);po=i(Kt,"One can use the "),We=s(Kt,"A",{href:!0});var Qn=a(We);mo=i(Qn,"AutoFeatureExtractor"),Qn.forEach(o),fo=i(Kt," API to prepare images for the model."),Kt.forEach(o),Jn.forEach(o),At=h(t),Q=s(t,"IMG",{src:!0,alt:!0,width:!0}),Pt=h(t),X=s(t,"SMALL",{});var Yt=a(X);uo=i(Yt,"Swin Transformer architecture. Taken from the "),He=s(Yt,"A",{href:!0});var Xn=a(He);go=i(Xn,"original paper"),Xn.forEach(o),_o=i(Yt,"."),Yt.forEach(o),qt=h(t),P=s(t,"P",{});var Re=a(P);wo=i(Re,"This model was contributed by "),pe=s(Re,"A",{href:!0,rel:!0});var es=a(pe);vo=i(es,"novice03"),es.forEach(o),bo=i(Re,". The original code can be found "),me=s(Re,"A",{href:!0,rel:!0});var ts=a(me);So=i(ts,"here"),ts.forEach(o),$o=i(Re,"."),Re.forEach(o),zt=h(t),W=s(t,"H2",{class:!0});var Zt=a(W);ee=s(Zt,"A",{id:!0,class:!0,href:!0});var os=a(ee);lt=s(os,"SPAN",{});var ns=a(lt);v(fe.$$.fragment,ns),ns.forEach(o),os.forEach(o),yo=h(Zt),dt=s(Zt,"SPAN",{});var ss=a(dt);To=i(ss,"SwinConfig"),ss.forEach(o),Zt.forEach(o),Nt=h(t),F=s(t,"DIV",{class:!0});var ie=a(F);v(ue.$$.fragment,ie),ko=h(ie),H=s(ie,"P",{});var Ge=a(H);Mo=i(Ge,"This is the configuration class to store the configuration of a "),Be=s(Ge,"A",{href:!0});var as=a(Be);xo=i(as,"SwinModel"),as.forEach(o),Eo=i(Ge,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ge=s(Ge,"A",{href:!0,rel:!0});var rs=a(ge);jo=i(rs,"microsoft/swin-tiny-patch4-window7-224"),rs.forEach(o),Fo=i(Ge,`
architecture.`),Ge.forEach(o),Co=h(ie),B=s(ie,"P",{});var Je=a(B);Io=i(Je,"Configuration objects inherit from "),Ue=s(Je,"A",{href:!0});var is=a(Ue);Ao=i(is,"PretrainedConfig"),is.forEach(o),Po=i(Je,` and can be used to control the model outputs. Read the
documentation from `),Ve=s(Je,"A",{href:!0});var ls=a(Ve);qo=i(ls,"PretrainedConfig"),ls.forEach(o),zo=i(Je," for more information."),Je.forEach(o),No=h(ie),v(_e.$$.fragment,ie),ie.forEach(o),Ot=h(t),U=s(t,"H2",{class:!0});var Rt=a(U);te=s(Rt,"A",{id:!0,class:!0,href:!0});var ds=a(te);ct=s(ds,"SPAN",{});var cs=a(ct);v(we.$$.fragment,cs),cs.forEach(o),ds.forEach(o),Oo=h(Rt),ht=s(Rt,"SPAN",{});var hs=a(ht);Lo=i(hs,"SwinModel"),hs.forEach(o),Rt.forEach(o),Lt=h(t),I=s(t,"DIV",{class:!0});var Qe=a(I);v(ve.$$.fragment,Qe),Do=h(Qe),be=s(Qe,"P",{});var Gt=a(be);Wo=i(Gt,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=s(Gt,"A",{href:!0,rel:!0});var ps=a(Se);Ho=i(ps,"torch.nn.Module"),ps.forEach(o),Bo=i(Gt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gt.forEach(o),Uo=h(Qe),x=s(Qe,"DIV",{class:!0});var q=a(x);v($e.$$.fragment,q),Vo=h(q),V=s(q,"P",{});var Xe=a(V);Ko=i(Xe,"The "),Ke=s(Xe,"A",{href:!0});var ms=a(Ke);Yo=i(ms,"SwinModel"),ms.forEach(o),Zo=i(Xe," forward method, overrides the "),pt=s(Xe,"CODE",{});var fs=a(pt);Ro=i(fs,"__call__"),fs.forEach(o),Go=i(Xe," special method."),Xe.forEach(o),Jo=h(q),v(oe.$$.fragment,q),Qo=h(q),mt=s(q,"P",{});var us=a(mt);Xo=i(us,"Example:"),us.forEach(o),en=h(q),v(ye.$$.fragment,q),q.forEach(o),Qe.forEach(o),Dt=h(t),K=s(t,"H2",{class:!0});var Jt=a(K);ne=s(Jt,"A",{id:!0,class:!0,href:!0});var gs=a(ne);ft=s(gs,"SPAN",{});var _s=a(ft);v(Te.$$.fragment,_s),_s.forEach(o),gs.forEach(o),tn=h(Jt),ut=s(Jt,"SPAN",{});var ws=a(ut);on=i(ws,"SwinForMaskedImageModeling"),ws.forEach(o),Jt.forEach(o),Wt=h(t),A=s(t,"DIV",{class:!0});var et=a(A);v(ke.$$.fragment,et),nn=h(et),Y=s(et,"P",{});var tt=a(Y);sn=i(tt,"Swin Model with a decoder on top for masked image modeling, as proposed in "),gt=s(tt,"CODE",{});var vs=a(gt);an=i(vs,"SimMIM <https://arxiv.org/abs/2111.09886>"),vs.forEach(o),rn=i(tt,`__.
This model is a PyTorch `),Me=s(tt,"A",{href:!0,rel:!0});var bs=a(Me);ln=i(bs,"torch.nn.Module"),bs.forEach(o),dn=i(tt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tt.forEach(o),cn=h(et),E=s(et,"DIV",{class:!0});var z=a(E);v(xe.$$.fragment,z),hn=h(z),Z=s(z,"P",{});var ot=a(Z);pn=i(ot,"The "),Ye=s(ot,"A",{href:!0});var Ss=a(Ye);mn=i(Ss,"SwinForMaskedImageModeling"),Ss.forEach(o),fn=i(ot," forward method, overrides the "),_t=s(ot,"CODE",{});var $s=a(_t);un=i($s,"__call__"),$s.forEach(o),gn=i(ot," special method."),ot.forEach(o),_n=h(z),v(se.$$.fragment,z),wn=h(z),wt=s(z,"P",{});var ys=a(wt);vn=i(ys,"Examples:"),ys.forEach(o),bn=h(z),v(Ee.$$.fragment,z),z.forEach(o),et.forEach(o),Ht=h(t),R=s(t,"H2",{class:!0});var Qt=a(R);ae=s(Qt,"A",{id:!0,class:!0,href:!0});var Ts=a(ae);vt=s(Ts,"SPAN",{});var ks=a(vt);v(je.$$.fragment,ks),ks.forEach(o),Ts.forEach(o),Sn=h(Qt),bt=s(Qt,"SPAN",{});var Ms=a(bt);$n=i(Ms,"SwinForImageClassification"),Ms.forEach(o),Qt.forEach(o),Bt=h(t),C=s(t,"DIV",{class:!0});var le=a(C);v(Fe.$$.fragment,le),yn=h(le),St=s(le,"P",{});var xs=a(St);Tn=i(xs,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),xs.forEach(o),kn=h(le),Ce=s(le,"P",{});var Xt=a(Ce);Mn=i(Xt,"This model is a PyTorch "),Ie=s(Xt,"A",{href:!0,rel:!0});var Es=a(Ie);xn=i(Es,"torch.nn.Module"),Es.forEach(o),En=i(Xt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xt.forEach(o),jn=h(le),j=s(le,"DIV",{class:!0});var N=a(j);v(Ae.$$.fragment,N),Fn=h(N),G=s(N,"P",{});var nt=a(G);Cn=i(nt,"The "),Ze=s(nt,"A",{href:!0});var js=a(Ze);In=i(js,"SwinForImageClassification"),js.forEach(o),An=i(nt," forward method, overrides the "),$t=s(nt,"CODE",{});var Fs=a($t);Pn=i(Fs,"__call__"),Fs.forEach(o),qn=i(nt," special method."),nt.forEach(o),zn=h(N),v(re.$$.fragment,N),Nn=h(N),yt=s(N,"P",{});var Cs=a(yt);On=i(Cs,"Example:"),Cs.forEach(o),Ln=h(N),v(Pe.$$.fragment,N),N.forEach(o),le.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Ws)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(f,"class","relative group"),l(J,"id","overview"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#overview"),l(L,"class","relative group"),l(ce,"href","https://arxiv.org/abs/2103.14030"),l(ce,"rel","nofollow"),l(We,"href","/docs/transformers/pr_16102/en/model_doc/auto#transformers.AutoFeatureExtractor"),zs(Q.src,Wn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(Q,"src",Wn),l(Q,"alt","drawing"),l(Q,"width","600"),l(He,"href","https://arxiv.org/abs/2102.03334"),l(pe,"href","https://huggingface.co/novice03%3E"),l(pe,"rel","nofollow"),l(me,"href","https://github.com/microsoft/Swin-Transformer"),l(me,"rel","nofollow"),l(ee,"id","transformers.SwinConfig"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.SwinConfig"),l(W,"class","relative group"),l(Be,"href","/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinModel"),l(ge,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(ge,"rel","nofollow"),l(Ue,"href","/docs/transformers/pr_16102/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ve,"href","/docs/transformers/pr_16102/en/main_classes/configuration#transformers.PretrainedConfig"),l(F,"class","docstring"),l(te,"id","transformers.SwinModel"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.SwinModel"),l(U,"class","relative group"),l(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Se,"rel","nofollow"),l(Ke,"href","/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinModel"),l(x,"class","docstring"),l(I,"class","docstring"),l(ne,"id","transformers.SwinForMaskedImageModeling"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SwinForMaskedImageModeling"),l(K,"class","relative group"),l(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Me,"rel","nofollow"),l(Ye,"href","/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(E,"class","docstring"),l(A,"class","docstring"),l(ae,"id","transformers.SwinForImageClassification"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SwinForImageClassification"),l(R,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(Ze,"href","/docs/transformers/pr_16102/en/model_doc/swin#transformers.SwinForImageClassification"),l(j,"class","docstring"),l(C,"class","docstring")},m(t,d){e(document.head,m),p(t,T,d),p(t,f,d),e(f,_),e(_,k),b(u,k,null),e(f,g),e(f,M),e(M,to),p(t,xt,d),p(t,L,d),e(L,J),e(J,at),b(de,at,null),e(L,oo),e(L,rt),e(rt,no),p(t,Et,d),p(t,D,d),e(D,so),e(D,ce),e(ce,ao),e(D,ro),e(D,io),p(t,jt,d),p(t,Ne,d),e(Ne,lo),p(t,Ft,d),p(t,Oe,d),e(Oe,it),e(it,co),p(t,Ct,d),p(t,Le,d),e(Le,ho),p(t,It,d),p(t,De,d),e(De,he),e(he,po),e(he,We),e(We,mo),e(he,fo),p(t,At,d),p(t,Q,d),p(t,Pt,d),p(t,X,d),e(X,uo),e(X,He),e(He,go),e(X,_o),p(t,qt,d),p(t,P,d),e(P,wo),e(P,pe),e(pe,vo),e(P,bo),e(P,me),e(me,So),e(P,$o),p(t,zt,d),p(t,W,d),e(W,ee),e(ee,lt),b(fe,lt,null),e(W,yo),e(W,dt),e(dt,To),p(t,Nt,d),p(t,F,d),b(ue,F,null),e(F,ko),e(F,H),e(H,Mo),e(H,Be),e(Be,xo),e(H,Eo),e(H,ge),e(ge,jo),e(H,Fo),e(F,Co),e(F,B),e(B,Io),e(B,Ue),e(Ue,Ao),e(B,Po),e(B,Ve),e(Ve,qo),e(B,zo),e(F,No),b(_e,F,null),p(t,Ot,d),p(t,U,d),e(U,te),e(te,ct),b(we,ct,null),e(U,Oo),e(U,ht),e(ht,Lo),p(t,Lt,d),p(t,I,d),b(ve,I,null),e(I,Do),e(I,be),e(be,Wo),e(be,Se),e(Se,Ho),e(be,Bo),e(I,Uo),e(I,x),b($e,x,null),e(x,Vo),e(x,V),e(V,Ko),e(V,Ke),e(Ke,Yo),e(V,Zo),e(V,pt),e(pt,Ro),e(V,Go),e(x,Jo),b(oe,x,null),e(x,Qo),e(x,mt),e(mt,Xo),e(x,en),b(ye,x,null),p(t,Dt,d),p(t,K,d),e(K,ne),e(ne,ft),b(Te,ft,null),e(K,tn),e(K,ut),e(ut,on),p(t,Wt,d),p(t,A,d),b(ke,A,null),e(A,nn),e(A,Y),e(Y,sn),e(Y,gt),e(gt,an),e(Y,rn),e(Y,Me),e(Me,ln),e(Y,dn),e(A,cn),e(A,E),b(xe,E,null),e(E,hn),e(E,Z),e(Z,pn),e(Z,Ye),e(Ye,mn),e(Z,fn),e(Z,_t),e(_t,un),e(Z,gn),e(E,_n),b(se,E,null),e(E,wn),e(E,wt),e(wt,vn),e(E,bn),b(Ee,E,null),p(t,Ht,d),p(t,R,d),e(R,ae),e(ae,vt),b(je,vt,null),e(R,Sn),e(R,bt),e(bt,$n),p(t,Bt,d),p(t,C,d),b(Fe,C,null),e(C,yn),e(C,St),e(St,Tn),e(C,kn),e(C,Ce),e(Ce,Mn),e(Ce,Ie),e(Ie,xn),e(Ce,En),e(C,jn),e(C,j),b(Ae,j,null),e(j,Fn),e(j,G),e(G,Cn),e(G,Ze),e(Ze,In),e(G,An),e(G,$t),e($t,Pn),e(G,qn),e(j,zn),b(re,j,null),e(j,Nn),e(j,yt),e(yt,On),e(j,Ln),b(Pe,j,null),Ut=!0},p(t,[d]){const qe={};d&2&&(qe.$$scope={dirty:d,ctx:t}),oe.$set(qe);const Tt={};d&2&&(Tt.$$scope={dirty:d,ctx:t}),se.$set(Tt);const kt={};d&2&&(kt.$$scope={dirty:d,ctx:t}),re.$set(kt)},i(t){Ut||(S(u.$$.fragment,t),S(de.$$.fragment,t),S(fe.$$.fragment,t),S(ue.$$.fragment,t),S(_e.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S($e.$$.fragment,t),S(oe.$$.fragment,t),S(ye.$$.fragment,t),S(Te.$$.fragment,t),S(ke.$$.fragment,t),S(xe.$$.fragment,t),S(se.$$.fragment,t),S(Ee.$$.fragment,t),S(je.$$.fragment,t),S(Fe.$$.fragment,t),S(Ae.$$.fragment,t),S(re.$$.fragment,t),S(Pe.$$.fragment,t),Ut=!0)},o(t){$(u.$$.fragment,t),$(de.$$.fragment,t),$(fe.$$.fragment,t),$(ue.$$.fragment,t),$(_e.$$.fragment,t),$(we.$$.fragment,t),$(ve.$$.fragment,t),$($e.$$.fragment,t),$(oe.$$.fragment,t),$(ye.$$.fragment,t),$(Te.$$.fragment,t),$(ke.$$.fragment,t),$(xe.$$.fragment,t),$(se.$$.fragment,t),$(Ee.$$.fragment,t),$(je.$$.fragment,t),$(Fe.$$.fragment,t),$(Ae.$$.fragment,t),$(re.$$.fragment,t),$(Pe.$$.fragment,t),Ut=!1},d(t){o(m),t&&o(T),t&&o(f),y(u),t&&o(xt),t&&o(L),y(de),t&&o(Et),t&&o(D),t&&o(jt),t&&o(Ne),t&&o(Ft),t&&o(Oe),t&&o(Ct),t&&o(Le),t&&o(It),t&&o(De),t&&o(At),t&&o(Q),t&&o(Pt),t&&o(X),t&&o(qt),t&&o(P),t&&o(zt),t&&o(W),y(fe),t&&o(Nt),t&&o(F),y(ue),y(_e),t&&o(Ot),t&&o(U),y(we),t&&o(Lt),t&&o(I),y(ve),y($e),y(oe),y(ye),t&&o(Dt),t&&o(K),y(Te),t&&o(Wt),t&&o(A),y(ke),y(xe),y(se),y(Ee),t&&o(Ht),t&&o(R),y(je),t&&o(Bt),t&&o(C),y(Fe),y(Ae),y(re),y(Pe)}}}const Ws={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Hs(O,m,T){let{fw:f}=m;return O.$$set=_=>{"fw"in _&&T(0,f=_.fw)},[f]}class Rs extends Is{constructor(m){super();As(this,m,Hs,Ds,Ps,{fw:0})}}export{Rs as default,Ws as metadata};
