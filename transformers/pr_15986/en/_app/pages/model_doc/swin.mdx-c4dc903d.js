import{S as Os,i as Hs,s as Ws,e as n,k as d,w,t as r,M as Us,c as s,d as o,m as c,a,x as v,h as i,b as l,N as Vs,F as e,g as p,y as b,q as S,o as y,B as $}from"../../chunks/vendor-4833417e.js";import{T as Zn}from"../../chunks/Tip-fffd6df1.js";import{D as De}from"../../chunks/Docstring-4f315ed9.js";import{C as so}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as at}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Bs(D){let m,T,f,_,k;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=a(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var x=a(f);_=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Ks(D){let m,T,f,_,k;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=a(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var x=a(f);_=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Ys(D){let m,T,f,_,k;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=a(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var x=a(f);_=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Zs(D){let m,T,f,_,k,u,g,x,ao,jt,L,J,rt,ce,ro,it,io,Ft,O,lo,he,co,ho,po,Ct,Le,mo,It,Oe,lt,fo,At,He,uo,Pt,Q,pe,go,We,_o,wo,vo,me,bo,dt,So,yo,qt,X,Rn,zt,ee,$o,Ue,To,ko,Nt,P,xo,fe,Mo,Eo,ue,jo,Fo,Dt,H,te,ct,ge,Co,ht,Io,Lt,F,_e,Ao,W,Po,Ve,qo,zo,we,No,Do,Lo,U,Oo,Be,Ho,Wo,Ke,Uo,Vo,Bo,ve,Ot,V,oe,pt,be,Ko,mt,Yo,Ht,I,Se,Zo,ye,Ro,$e,Go,Jo,Qo,M,Te,Xo,B,en,Ye,tn,on,ft,nn,sn,an,ne,rn,ut,ln,dn,ke,Wt,K,se,gt,xe,cn,_t,hn,Ut,A,Me,pn,Y,mn,wt,fn,un,Ee,gn,_n,wn,E,je,vn,Z,bn,Ze,Sn,yn,vt,$n,Tn,kn,ae,xn,bt,Mn,En,Fe,Vt,R,re,St,Ce,jn,yt,Fn,Bt,C,Ie,Cn,$t,In,An,Ae,Pn,Pe,qn,zn,Nn,j,qe,Dn,G,Ln,Re,On,Hn,Tt,Wn,Un,Vn,ie,Bn,kt,Kn,Yn,ze,Kt;return u=new at({}),ce=new at({}),ge=new at({}),_e=new De({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}]}}),ve=new so({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),be=new at({}),Se=new De({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L891",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15986/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Te=new De({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L918",parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15986/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/pr_15986/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig"
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
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`}}),ne=new Zn({props:{$$slots:{default:[Bs]},$$scope:{ctx:D}}}),ke=new so({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),xe=new at({}),Me=new De({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L989",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15986/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),je=new De({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L1004",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15986/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/pr_15986/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinMaskedLMOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig"
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
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`}}),ae=new Zn({props:{$$slots:{default:[Ks]},$$scope:{ctx:D}}}),Fe=new so({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),Ce=new at({}),Ie=new De({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L1099",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15986/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qe=new De({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L1114",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15986/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/pr_15986/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig"
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
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`}}),ie=new Zn({props:{$$slots:{default:[Ys]},$$scope:{ctx:D}}}),ze=new so({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
tabby, tabby cat`}}),{c(){m=n("meta"),T=d(),f=n("h1"),_=n("a"),k=n("span"),w(u.$$.fragment),g=d(),x=n("span"),ao=r("Swin Transformer"),jt=d(),L=n("h2"),J=n("a"),rt=n("span"),w(ce.$$.fragment),ro=d(),it=n("span"),io=r("Overview"),Ft=d(),O=n("p"),lo=r("The Swin Transformer was proposed in "),he=n("a"),co=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ho=n("br"),po=r(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Ct=d(),Le=n("p"),mo=r("The abstract from the paper is the following:"),It=d(),Oe=n("p"),lt=n("em"),fo=r(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),At=d(),He=n("p"),uo=r("Tips:"),Pt=d(),Q=n("ul"),pe=n("li"),go=r("One can use the "),We=n("a"),_o=r("AutoFeatureExtractor"),wo=r(" API to prepare images for the model."),vo=d(),me=n("li"),bo=r("Swin pads the inputs supporting any input size (if divisible by "),dt=n("code"),So=r("32"),yo=r(")."),qt=d(),X=n("img"),zt=d(),ee=n("small"),$o=r("Swin Transformer architecture. Taken from the "),Ue=n("a"),To=r("original paper"),ko=r("."),Nt=d(),P=n("p"),xo=r("This model was contributed by "),fe=n("a"),Mo=r("novice03"),Eo=r(". The original code can be found "),ue=n("a"),jo=r("here"),Fo=r("."),Dt=d(),H=n("h2"),te=n("a"),ct=n("span"),w(ge.$$.fragment),Co=d(),ht=n("span"),Io=r("SwinConfig"),Lt=d(),F=n("div"),w(_e.$$.fragment),Ao=d(),W=n("p"),Po=r("This is the configuration class to store the configuration of a "),Ve=n("a"),qo=r("SwinModel"),zo=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),we=n("a"),No=r("microsoft/swin-tiny-patch4-window7-224"),Do=r(`
architecture.`),Lo=d(),U=n("p"),Oo=r("Configuration objects inherit from "),Be=n("a"),Ho=r("PretrainedConfig"),Wo=r(` and can be used to control the model outputs. Read the
documentation from `),Ke=n("a"),Uo=r("PretrainedConfig"),Vo=r(" for more information."),Bo=d(),w(ve.$$.fragment),Ot=d(),V=n("h2"),oe=n("a"),pt=n("span"),w(be.$$.fragment),Ko=d(),mt=n("span"),Yo=r("SwinModel"),Ht=d(),I=n("div"),w(Se.$$.fragment),Zo=d(),ye=n("p"),Ro=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$e=n("a"),Go=r("torch.nn.Module"),Jo=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qo=d(),M=n("div"),w(Te.$$.fragment),Xo=d(),B=n("p"),en=r("The "),Ye=n("a"),tn=r("SwinModel"),on=r(" forward method, overrides the "),ft=n("code"),nn=r("__call__"),sn=r(" special method."),an=d(),w(ne.$$.fragment),rn=d(),ut=n("p"),ln=r("Example:"),dn=d(),w(ke.$$.fragment),Wt=d(),K=n("h2"),se=n("a"),gt=n("span"),w(xe.$$.fragment),cn=d(),_t=n("span"),hn=r("SwinForMaskedImageModeling"),Ut=d(),A=n("div"),w(Me.$$.fragment),pn=d(),Y=n("p"),mn=r("Swin Model with a decoder on top for masked image modeling, as proposed in "),wt=n("code"),fn=r("SimMIM <https://arxiv.org/abs/2111.09886>"),un=r(`__.
This model is a PyTorch `),Ee=n("a"),gn=r("torch.nn.Module"),_n=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wn=d(),E=n("div"),w(je.$$.fragment),vn=d(),Z=n("p"),bn=r("The "),Ze=n("a"),Sn=r("SwinForMaskedImageModeling"),yn=r(" forward method, overrides the "),vt=n("code"),$n=r("__call__"),Tn=r(" special method."),kn=d(),w(ae.$$.fragment),xn=d(),bt=n("p"),Mn=r("Examples:"),En=d(),w(Fe.$$.fragment),Vt=d(),R=n("h2"),re=n("a"),St=n("span"),w(Ce.$$.fragment),jn=d(),yt=n("span"),Fn=r("SwinForImageClassification"),Bt=d(),C=n("div"),w(Ie.$$.fragment),Cn=d(),$t=n("p"),In=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),An=d(),Ae=n("p"),Pn=r("This model is a PyTorch "),Pe=n("a"),qn=r("torch.nn.Module"),zn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nn=d(),j=n("div"),w(qe.$$.fragment),Dn=d(),G=n("p"),Ln=r("The "),Re=n("a"),On=r("SwinForImageClassification"),Hn=r(" forward method, overrides the "),Tt=n("code"),Wn=r("__call__"),Un=r(" special method."),Vn=d(),w(ie.$$.fragment),Bn=d(),kt=n("p"),Kn=r("Example:"),Yn=d(),w(ze.$$.fragment),this.h()},l(t){const h=Us('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),T=c(t),f=s(t,"H1",{class:!0});var Ne=a(f);_=s(Ne,"A",{id:!0,class:!0,href:!0});var xt=a(_);k=s(xt,"SPAN",{});var Mt=a(k);v(u.$$.fragment,Mt),Mt.forEach(o),xt.forEach(o),g=c(Ne),x=s(Ne,"SPAN",{});var Gn=a(x);ao=i(Gn,"Swin Transformer"),Gn.forEach(o),Ne.forEach(o),jt=c(t),L=s(t,"H2",{class:!0});var Yt=a(L);J=s(Yt,"A",{id:!0,class:!0,href:!0});var Jn=a(J);rt=s(Jn,"SPAN",{});var Qn=a(rt);v(ce.$$.fragment,Qn),Qn.forEach(o),Jn.forEach(o),ro=c(Yt),it=s(Yt,"SPAN",{});var Xn=a(it);io=i(Xn,"Overview"),Xn.forEach(o),Yt.forEach(o),Ft=c(t),O=s(t,"P",{});var Et=a(O);lo=i(Et,"The Swin Transformer was proposed in "),he=s(Et,"A",{href:!0,rel:!0});var es=a(he);co=i(es,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),es.forEach(o),ho=s(Et,"BR",{}),po=i(Et,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Et.forEach(o),Ct=c(t),Le=s(t,"P",{});var ts=a(Le);mo=i(ts,"The abstract from the paper is the following:"),ts.forEach(o),It=c(t),Oe=s(t,"P",{});var os=a(Oe);lt=s(os,"EM",{});var ns=a(lt);fo=i(ns,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),ns.forEach(o),os.forEach(o),At=c(t),He=s(t,"P",{});var ss=a(He);uo=i(ss,"Tips:"),ss.forEach(o),Pt=c(t),Q=s(t,"UL",{});var Zt=a(Q);pe=s(Zt,"LI",{});var Rt=a(pe);go=i(Rt,"One can use the "),We=s(Rt,"A",{href:!0});var as=a(We);_o=i(as,"AutoFeatureExtractor"),as.forEach(o),wo=i(Rt," API to prepare images for the model."),Rt.forEach(o),vo=c(Zt),me=s(Zt,"LI",{});var Gt=a(me);bo=i(Gt,"Swin pads the inputs supporting any input size (if divisible by "),dt=s(Gt,"CODE",{});var rs=a(dt);So=i(rs,"32"),rs.forEach(o),yo=i(Gt,")."),Gt.forEach(o),Zt.forEach(o),qt=c(t),X=s(t,"IMG",{src:!0,alt:!0,width:!0}),zt=c(t),ee=s(t,"SMALL",{});var Jt=a(ee);$o=i(Jt,"Swin Transformer architecture. Taken from the "),Ue=s(Jt,"A",{href:!0});var is=a(Ue);To=i(is,"original paper"),is.forEach(o),ko=i(Jt,"."),Jt.forEach(o),Nt=c(t),P=s(t,"P",{});var Ge=a(P);xo=i(Ge,"This model was contributed by "),fe=s(Ge,"A",{href:!0,rel:!0});var ls=a(fe);Mo=i(ls,"novice03"),ls.forEach(o),Eo=i(Ge,". The original code can be found "),ue=s(Ge,"A",{href:!0,rel:!0});var ds=a(ue);jo=i(ds,"here"),ds.forEach(o),Fo=i(Ge,"."),Ge.forEach(o),Dt=c(t),H=s(t,"H2",{class:!0});var Qt=a(H);te=s(Qt,"A",{id:!0,class:!0,href:!0});var cs=a(te);ct=s(cs,"SPAN",{});var hs=a(ct);v(ge.$$.fragment,hs),hs.forEach(o),cs.forEach(o),Co=c(Qt),ht=s(Qt,"SPAN",{});var ps=a(ht);Io=i(ps,"SwinConfig"),ps.forEach(o),Qt.forEach(o),Lt=c(t),F=s(t,"DIV",{class:!0});var le=a(F);v(_e.$$.fragment,le),Ao=c(le),W=s(le,"P",{});var Je=a(W);Po=i(Je,"This is the configuration class to store the configuration of a "),Ve=s(Je,"A",{href:!0});var ms=a(Ve);qo=i(ms,"SwinModel"),ms.forEach(o),zo=i(Je,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),we=s(Je,"A",{href:!0,rel:!0});var fs=a(we);No=i(fs,"microsoft/swin-tiny-patch4-window7-224"),fs.forEach(o),Do=i(Je,`
architecture.`),Je.forEach(o),Lo=c(le),U=s(le,"P",{});var Qe=a(U);Oo=i(Qe,"Configuration objects inherit from "),Be=s(Qe,"A",{href:!0});var us=a(Be);Ho=i(us,"PretrainedConfig"),us.forEach(o),Wo=i(Qe,` and can be used to control the model outputs. Read the
documentation from `),Ke=s(Qe,"A",{href:!0});var gs=a(Ke);Uo=i(gs,"PretrainedConfig"),gs.forEach(o),Vo=i(Qe," for more information."),Qe.forEach(o),Bo=c(le),v(ve.$$.fragment,le),le.forEach(o),Ot=c(t),V=s(t,"H2",{class:!0});var Xt=a(V);oe=s(Xt,"A",{id:!0,class:!0,href:!0});var _s=a(oe);pt=s(_s,"SPAN",{});var ws=a(pt);v(be.$$.fragment,ws),ws.forEach(o),_s.forEach(o),Ko=c(Xt),mt=s(Xt,"SPAN",{});var vs=a(mt);Yo=i(vs,"SwinModel"),vs.forEach(o),Xt.forEach(o),Ht=c(t),I=s(t,"DIV",{class:!0});var Xe=a(I);v(Se.$$.fragment,Xe),Zo=c(Xe),ye=s(Xe,"P",{});var eo=a(ye);Ro=i(eo,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$e=s(eo,"A",{href:!0,rel:!0});var bs=a($e);Go=i(bs,"torch.nn.Module"),bs.forEach(o),Jo=i(eo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),eo.forEach(o),Qo=c(Xe),M=s(Xe,"DIV",{class:!0});var q=a(M);v(Te.$$.fragment,q),Xo=c(q),B=s(q,"P",{});var et=a(B);en=i(et,"The "),Ye=s(et,"A",{href:!0});var Ss=a(Ye);tn=i(Ss,"SwinModel"),Ss.forEach(o),on=i(et," forward method, overrides the "),ft=s(et,"CODE",{});var ys=a(ft);nn=i(ys,"__call__"),ys.forEach(o),sn=i(et," special method."),et.forEach(o),an=c(q),v(ne.$$.fragment,q),rn=c(q),ut=s(q,"P",{});var $s=a(ut);ln=i($s,"Example:"),$s.forEach(o),dn=c(q),v(ke.$$.fragment,q),q.forEach(o),Xe.forEach(o),Wt=c(t),K=s(t,"H2",{class:!0});var to=a(K);se=s(to,"A",{id:!0,class:!0,href:!0});var Ts=a(se);gt=s(Ts,"SPAN",{});var ks=a(gt);v(xe.$$.fragment,ks),ks.forEach(o),Ts.forEach(o),cn=c(to),_t=s(to,"SPAN",{});var xs=a(_t);hn=i(xs,"SwinForMaskedImageModeling"),xs.forEach(o),to.forEach(o),Ut=c(t),A=s(t,"DIV",{class:!0});var tt=a(A);v(Me.$$.fragment,tt),pn=c(tt),Y=s(tt,"P",{});var ot=a(Y);mn=i(ot,"Swin Model with a decoder on top for masked image modeling, as proposed in "),wt=s(ot,"CODE",{});var Ms=a(wt);fn=i(Ms,"SimMIM <https://arxiv.org/abs/2111.09886>"),Ms.forEach(o),un=i(ot,`__.
This model is a PyTorch `),Ee=s(ot,"A",{href:!0,rel:!0});var Es=a(Ee);gn=i(Es,"torch.nn.Module"),Es.forEach(o),_n=i(ot,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ot.forEach(o),wn=c(tt),E=s(tt,"DIV",{class:!0});var z=a(E);v(je.$$.fragment,z),vn=c(z),Z=s(z,"P",{});var nt=a(Z);bn=i(nt,"The "),Ze=s(nt,"A",{href:!0});var js=a(Ze);Sn=i(js,"SwinForMaskedImageModeling"),js.forEach(o),yn=i(nt," forward method, overrides the "),vt=s(nt,"CODE",{});var Fs=a(vt);$n=i(Fs,"__call__"),Fs.forEach(o),Tn=i(nt," special method."),nt.forEach(o),kn=c(z),v(ae.$$.fragment,z),xn=c(z),bt=s(z,"P",{});var Cs=a(bt);Mn=i(Cs,"Examples:"),Cs.forEach(o),En=c(z),v(Fe.$$.fragment,z),z.forEach(o),tt.forEach(o),Vt=c(t),R=s(t,"H2",{class:!0});var oo=a(R);re=s(oo,"A",{id:!0,class:!0,href:!0});var Is=a(re);St=s(Is,"SPAN",{});var As=a(St);v(Ce.$$.fragment,As),As.forEach(o),Is.forEach(o),jn=c(oo),yt=s(oo,"SPAN",{});var Ps=a(yt);Fn=i(Ps,"SwinForImageClassification"),Ps.forEach(o),oo.forEach(o),Bt=c(t),C=s(t,"DIV",{class:!0});var de=a(C);v(Ie.$$.fragment,de),Cn=c(de),$t=s(de,"P",{});var qs=a($t);In=i(qs,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),qs.forEach(o),An=c(de),Ae=s(de,"P",{});var no=a(Ae);Pn=i(no,"This model is a PyTorch "),Pe=s(no,"A",{href:!0,rel:!0});var zs=a(Pe);qn=i(zs,"torch.nn.Module"),zs.forEach(o),zn=i(no,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),no.forEach(o),Nn=c(de),j=s(de,"DIV",{class:!0});var N=a(j);v(qe.$$.fragment,N),Dn=c(N),G=s(N,"P",{});var st=a(G);Ln=i(st,"The "),Re=s(st,"A",{href:!0});var Ns=a(Re);On=i(Ns,"SwinForImageClassification"),Ns.forEach(o),Hn=i(st," forward method, overrides the "),Tt=s(st,"CODE",{});var Ds=a(Tt);Wn=i(Ds,"__call__"),Ds.forEach(o),Un=i(st," special method."),st.forEach(o),Vn=c(N),v(ie.$$.fragment,N),Bn=c(N),kt=s(N,"P",{});var Ls=a(kt);Kn=i(Ls,"Example:"),Ls.forEach(o),Yn=c(N),v(ze.$$.fragment,N),N.forEach(o),de.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Rs)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(f,"class","relative group"),l(J,"id","overview"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#overview"),l(L,"class","relative group"),l(he,"href","https://arxiv.org/abs/2103.14030"),l(he,"rel","nofollow"),l(We,"href","/docs/transformers/pr_15986/en/model_doc/auto#transformers.AutoFeatureExtractor"),Vs(X.src,Rn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(X,"src",Rn),l(X,"alt","drawing"),l(X,"width","600"),l(Ue,"href","https://arxiv.org/abs/2102.03334"),l(fe,"href","https://huggingface.co/novice03%3E"),l(fe,"rel","nofollow"),l(ue,"href","https://github.com/microsoft/Swin-Transformer"),l(ue,"rel","nofollow"),l(te,"id","transformers.SwinConfig"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.SwinConfig"),l(H,"class","relative group"),l(Ve,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinModel"),l(we,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(we,"rel","nofollow"),l(Be,"href","/docs/transformers/pr_15986/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ke,"href","/docs/transformers/pr_15986/en/main_classes/configuration#transformers.PretrainedConfig"),l(F,"class","docstring"),l(oe,"id","transformers.SwinModel"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.SwinModel"),l(V,"class","relative group"),l($e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l($e,"rel","nofollow"),l(Ye,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinModel"),l(M,"class","docstring"),l(I,"class","docstring"),l(se,"id","transformers.SwinForMaskedImageModeling"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SwinForMaskedImageModeling"),l(K,"class","relative group"),l(Ee,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ee,"rel","nofollow"),l(Ze,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(E,"class","docstring"),l(A,"class","docstring"),l(re,"id","transformers.SwinForImageClassification"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SwinForImageClassification"),l(R,"class","relative group"),l(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Pe,"rel","nofollow"),l(Re,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinForImageClassification"),l(j,"class","docstring"),l(C,"class","docstring")},m(t,h){e(document.head,m),p(t,T,h),p(t,f,h),e(f,_),e(_,k),b(u,k,null),e(f,g),e(f,x),e(x,ao),p(t,jt,h),p(t,L,h),e(L,J),e(J,rt),b(ce,rt,null),e(L,ro),e(L,it),e(it,io),p(t,Ft,h),p(t,O,h),e(O,lo),e(O,he),e(he,co),e(O,ho),e(O,po),p(t,Ct,h),p(t,Le,h),e(Le,mo),p(t,It,h),p(t,Oe,h),e(Oe,lt),e(lt,fo),p(t,At,h),p(t,He,h),e(He,uo),p(t,Pt,h),p(t,Q,h),e(Q,pe),e(pe,go),e(pe,We),e(We,_o),e(pe,wo),e(Q,vo),e(Q,me),e(me,bo),e(me,dt),e(dt,So),e(me,yo),p(t,qt,h),p(t,X,h),p(t,zt,h),p(t,ee,h),e(ee,$o),e(ee,Ue),e(Ue,To),e(ee,ko),p(t,Nt,h),p(t,P,h),e(P,xo),e(P,fe),e(fe,Mo),e(P,Eo),e(P,ue),e(ue,jo),e(P,Fo),p(t,Dt,h),p(t,H,h),e(H,te),e(te,ct),b(ge,ct,null),e(H,Co),e(H,ht),e(ht,Io),p(t,Lt,h),p(t,F,h),b(_e,F,null),e(F,Ao),e(F,W),e(W,Po),e(W,Ve),e(Ve,qo),e(W,zo),e(W,we),e(we,No),e(W,Do),e(F,Lo),e(F,U),e(U,Oo),e(U,Be),e(Be,Ho),e(U,Wo),e(U,Ke),e(Ke,Uo),e(U,Vo),e(F,Bo),b(ve,F,null),p(t,Ot,h),p(t,V,h),e(V,oe),e(oe,pt),b(be,pt,null),e(V,Ko),e(V,mt),e(mt,Yo),p(t,Ht,h),p(t,I,h),b(Se,I,null),e(I,Zo),e(I,ye),e(ye,Ro),e(ye,$e),e($e,Go),e(ye,Jo),e(I,Qo),e(I,M),b(Te,M,null),e(M,Xo),e(M,B),e(B,en),e(B,Ye),e(Ye,tn),e(B,on),e(B,ft),e(ft,nn),e(B,sn),e(M,an),b(ne,M,null),e(M,rn),e(M,ut),e(ut,ln),e(M,dn),b(ke,M,null),p(t,Wt,h),p(t,K,h),e(K,se),e(se,gt),b(xe,gt,null),e(K,cn),e(K,_t),e(_t,hn),p(t,Ut,h),p(t,A,h),b(Me,A,null),e(A,pn),e(A,Y),e(Y,mn),e(Y,wt),e(wt,fn),e(Y,un),e(Y,Ee),e(Ee,gn),e(Y,_n),e(A,wn),e(A,E),b(je,E,null),e(E,vn),e(E,Z),e(Z,bn),e(Z,Ze),e(Ze,Sn),e(Z,yn),e(Z,vt),e(vt,$n),e(Z,Tn),e(E,kn),b(ae,E,null),e(E,xn),e(E,bt),e(bt,Mn),e(E,En),b(Fe,E,null),p(t,Vt,h),p(t,R,h),e(R,re),e(re,St),b(Ce,St,null),e(R,jn),e(R,yt),e(yt,Fn),p(t,Bt,h),p(t,C,h),b(Ie,C,null),e(C,Cn),e(C,$t),e($t,In),e(C,An),e(C,Ae),e(Ae,Pn),e(Ae,Pe),e(Pe,qn),e(Ae,zn),e(C,Nn),e(C,j),b(qe,j,null),e(j,Dn),e(j,G),e(G,Ln),e(G,Re),e(Re,On),e(G,Hn),e(G,Tt),e(Tt,Wn),e(G,Un),e(j,Vn),b(ie,j,null),e(j,Bn),e(j,kt),e(kt,Kn),e(j,Yn),b(ze,j,null),Kt=!0},p(t,[h]){const Ne={};h&2&&(Ne.$$scope={dirty:h,ctx:t}),ne.$set(Ne);const xt={};h&2&&(xt.$$scope={dirty:h,ctx:t}),ae.$set(xt);const Mt={};h&2&&(Mt.$$scope={dirty:h,ctx:t}),ie.$set(Mt)},i(t){Kt||(S(u.$$.fragment,t),S(ce.$$.fragment,t),S(ge.$$.fragment,t),S(_e.$$.fragment,t),S(ve.$$.fragment,t),S(be.$$.fragment,t),S(Se.$$.fragment,t),S(Te.$$.fragment,t),S(ne.$$.fragment,t),S(ke.$$.fragment,t),S(xe.$$.fragment,t),S(Me.$$.fragment,t),S(je.$$.fragment,t),S(ae.$$.fragment,t),S(Fe.$$.fragment,t),S(Ce.$$.fragment,t),S(Ie.$$.fragment,t),S(qe.$$.fragment,t),S(ie.$$.fragment,t),S(ze.$$.fragment,t),Kt=!0)},o(t){y(u.$$.fragment,t),y(ce.$$.fragment,t),y(ge.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(be.$$.fragment,t),y(Se.$$.fragment,t),y(Te.$$.fragment,t),y(ne.$$.fragment,t),y(ke.$$.fragment,t),y(xe.$$.fragment,t),y(Me.$$.fragment,t),y(je.$$.fragment,t),y(ae.$$.fragment,t),y(Fe.$$.fragment,t),y(Ce.$$.fragment,t),y(Ie.$$.fragment,t),y(qe.$$.fragment,t),y(ie.$$.fragment,t),y(ze.$$.fragment,t),Kt=!1},d(t){o(m),t&&o(T),t&&o(f),$(u),t&&o(jt),t&&o(L),$(ce),t&&o(Ft),t&&o(O),t&&o(Ct),t&&o(Le),t&&o(It),t&&o(Oe),t&&o(At),t&&o(He),t&&o(Pt),t&&o(Q),t&&o(qt),t&&o(X),t&&o(zt),t&&o(ee),t&&o(Nt),t&&o(P),t&&o(Dt),t&&o(H),$(ge),t&&o(Lt),t&&o(F),$(_e),$(ve),t&&o(Ot),t&&o(V),$(be),t&&o(Ht),t&&o(I),$(Se),$(Te),$(ne),$(ke),t&&o(Wt),t&&o(K),$(xe),t&&o(Ut),t&&o(A),$(Me),$(je),$(ae),$(Fe),t&&o(Vt),t&&o(R),$(Ce),t&&o(Bt),t&&o(C),$(Ie),$(qe),$(ie),$(ze)}}}const Rs={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Gs(D,m,T){let{fw:f}=m;return D.$$set=_=>{"fw"in _&&T(0,f=_.fw)},[f]}class na extends Os{constructor(m){super();Hs(this,m,Gs,Zs,Ws,{fw:0})}}export{na as default,Rs as metadata};
