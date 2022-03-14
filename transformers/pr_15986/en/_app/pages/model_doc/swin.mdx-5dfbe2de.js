import{S as fa,i as ua,s as ga,e as n,k as d,w,t as a,M as _a,c as s,d as o,m as c,a as i,x as v,h as r,b as l,N as wa,F as e,g as p,y as b,q as S,o as y,B as $}from"../../chunks/vendor-4833417e.js";import{T as gs}from"../../chunks/Tip-fffd6df1.js";import{D as Le}from"../../chunks/Docstring-4f315ed9.js";import{C as mo}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as lt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function va(H){let m,T,f,_,k;return{c(){m=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=i(m);T=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var M=i(f);_=r(M,"Module"),M.forEach(o),k=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function ba(H){let m,T,f,_,k;return{c(){m=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=i(m);T=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var M=i(f);_=r(M,"Module"),M.forEach(o),k=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Sa(H){let m,T,f,_,k;return{c(){m=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=i(m);T=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var M=i(f);_=r(M,"Module"),M.forEach(o),k=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,T),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function ya(H){let m,T,f,_,k,u,g,M,fo,Ot,W,ee,dt,pe,uo,ct,go,Dt,U,_o,me,wo,vo,bo,Lt,He,So,Ht,We,ht,yo,Wt,Ue,$o,Ut,z,fe,To,Ve,ko,xo,Mo,ue,Eo,pt,Fo,jo,Co,x,Io,mt,Ao,Po,ft,qo,zo,ut,No,Oo,gt,Do,Lo,_t,Ho,Wo,wt,Uo,Vo,Vt,te,_s,Bt,oe,Bo,Be,Ko,Yo,Kt,N,Zo,ge,Ro,Go,_e,Jo,Qo,Yt,V,ne,vt,we,Xo,bt,en,Zt,I,ve,tn,B,on,Ke,nn,sn,be,an,rn,ln,K,dn,Ye,cn,hn,Ze,pn,mn,fn,Se,Rt,Y,se,St,ye,un,yt,gn,Gt,P,$e,_n,Te,wn,ke,vn,bn,Sn,E,xe,yn,Z,$n,Re,Tn,kn,$t,xn,Mn,En,ae,Fn,Tt,jn,Cn,Me,Jt,R,re,kt,Ee,In,xt,An,Qt,q,Fe,Pn,G,qn,Mt,zn,Nn,je,On,Dn,Ln,F,Ce,Hn,J,Wn,Ge,Un,Vn,Et,Bn,Kn,Yn,ie,Zn,Ft,Rn,Gn,Ie,Xt,Q,le,jt,Ae,Jn,Ct,Qn,eo,A,Pe,Xn,It,es,ts,qe,os,ze,ns,ss,as,j,Ne,rs,X,is,Je,ls,ds,At,cs,hs,ps,de,ms,Pt,fs,us,Oe,to;return u=new lt({}),pe=new lt({}),we=new lt({}),ve=new Le({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}]}}),Se=new mo({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ye=new lt({}),$e=new Le({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L891",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15986/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xe=new Le({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L918",parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinModelOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new gs({props:{$$slots:{default:[va]},$$scope:{ctx:H}}}),Me=new mo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),Ee=new lt({}),Fe=new Le({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L989",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15986/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ce=new Le({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L1004",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinMaskedLMOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new gs({props:{$$slots:{default:[ba]},$$scope:{ctx:H}}}),Ie=new mo({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),Ae=new lt({}),Pe=new Le({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L1099",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15986/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ne=new Le({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15986/src/transformers/models/swin/modeling_swin.py#L1114",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new gs({props:{$$slots:{default:[Sa]},$$scope:{ctx:H}}}),Oe=new mo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
tabby, tabby cat`}}),{c(){m=n("meta"),T=d(),f=n("h1"),_=n("a"),k=n("span"),w(u.$$.fragment),g=d(),M=n("span"),fo=a("Swin Transformer"),Ot=d(),W=n("h2"),ee=n("a"),dt=n("span"),w(pe.$$.fragment),uo=d(),ct=n("span"),go=a("Overview"),Dt=d(),U=n("p"),_o=a("The Swin Transformer was proposed in "),me=n("a"),wo=a("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),vo=n("br"),bo=a(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Lt=d(),He=n("p"),So=a("The abstract from the paper is the following:"),Ht=d(),We=n("p"),ht=n("em"),yo=a(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Wt=d(),Ue=n("p"),$o=a("Tips:"),Ut=d(),z=n("ul"),fe=n("li"),To=a("One can use the "),Ve=n("a"),ko=a("AutoFeatureExtractor"),xo=a(" API to prepare images for the model."),Mo=d(),ue=n("li"),Eo=a("Swin pads the inputs supporting any input size (if divisible by "),pt=n("code"),Fo=a("32"),jo=a(")."),Co=d(),x=n("li"),Io=a("Swin can be used as a "),mt=n("em"),Ao=a("backbone"),Po=a(", when when "),ft=n("code"),qo=a("output_hidden_states = True"),zo=a(" it will outputs both "),ut=n("code"),No=a("hidden_states"),Oo=a(" and "),gt=n("code"),Do=a("reshaped_hidden_states"),Lo=a(". "),_t=n("code"),Ho=a("reshaped_hidden_states"),Wo=a(" have a size of "),wt=n("code"),Uo=a("batch, channels, height, width"),Vo=a("."),Vt=d(),te=n("img"),Bt=d(),oe=n("small"),Bo=a("Swin Transformer architecture. Taken from the "),Be=n("a"),Ko=a("original paper"),Yo=a("."),Kt=d(),N=n("p"),Zo=a("This model was contributed by "),ge=n("a"),Ro=a("novice03"),Go=a(". The original code can be found "),_e=n("a"),Jo=a("here"),Qo=a("."),Yt=d(),V=n("h2"),ne=n("a"),vt=n("span"),w(we.$$.fragment),Xo=d(),bt=n("span"),en=a("SwinConfig"),Zt=d(),I=n("div"),w(ve.$$.fragment),tn=d(),B=n("p"),on=a("This is the configuration class to store the configuration of a "),Ke=n("a"),nn=a("SwinModel"),sn=a(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),be=n("a"),an=a("microsoft/swin-tiny-patch4-window7-224"),rn=a(`
architecture.`),ln=d(),K=n("p"),dn=a("Configuration objects inherit from "),Ye=n("a"),cn=a("PretrainedConfig"),hn=a(` and can be used to control the model outputs. Read the
documentation from `),Ze=n("a"),pn=a("PretrainedConfig"),mn=a(" for more information."),fn=d(),w(Se.$$.fragment),Rt=d(),Y=n("h2"),se=n("a"),St=n("span"),w(ye.$$.fragment),un=d(),yt=n("span"),gn=a("SwinModel"),Gt=d(),P=n("div"),w($e.$$.fragment),_n=d(),Te=n("p"),wn=a(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ke=n("a"),vn=a("torch.nn.Module"),bn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sn=d(),E=n("div"),w(xe.$$.fragment),yn=d(),Z=n("p"),$n=a("The "),Re=n("a"),Tn=a("SwinModel"),kn=a(" forward method, overrides the "),$t=n("code"),xn=a("__call__"),Mn=a(" special method."),En=d(),w(ae.$$.fragment),Fn=d(),Tt=n("p"),jn=a("Example:"),Cn=d(),w(Me.$$.fragment),Jt=d(),R=n("h2"),re=n("a"),kt=n("span"),w(Ee.$$.fragment),In=d(),xt=n("span"),An=a("SwinForMaskedImageModeling"),Qt=d(),q=n("div"),w(Fe.$$.fragment),Pn=d(),G=n("p"),qn=a("Swin Model with a decoder on top for masked image modeling, as proposed in "),Mt=n("code"),zn=a("SimMIM <https://arxiv.org/abs/2111.09886>"),Nn=a(`__.
This model is a PyTorch `),je=n("a"),On=a("torch.nn.Module"),Dn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ln=d(),F=n("div"),w(Ce.$$.fragment),Hn=d(),J=n("p"),Wn=a("The "),Ge=n("a"),Un=a("SwinForMaskedImageModeling"),Vn=a(" forward method, overrides the "),Et=n("code"),Bn=a("__call__"),Kn=a(" special method."),Yn=d(),w(ie.$$.fragment),Zn=d(),Ft=n("p"),Rn=a("Examples:"),Gn=d(),w(Ie.$$.fragment),Xt=d(),Q=n("h2"),le=n("a"),jt=n("span"),w(Ae.$$.fragment),Jn=d(),Ct=n("span"),Qn=a("SwinForImageClassification"),eo=d(),A=n("div"),w(Pe.$$.fragment),Xn=d(),It=n("p"),es=a(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ts=d(),qe=n("p"),os=a("This model is a PyTorch "),ze=n("a"),ns=a("torch.nn.Module"),ss=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),as=d(),j=n("div"),w(Ne.$$.fragment),rs=d(),X=n("p"),is=a("The "),Je=n("a"),ls=a("SwinForImageClassification"),ds=a(" forward method, overrides the "),At=n("code"),cs=a("__call__"),hs=a(" special method."),ps=d(),w(de.$$.fragment),ms=d(),Pt=n("p"),fs=a("Example:"),us=d(),w(Oe.$$.fragment),this.h()},l(t){const h=_a('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),T=c(t),f=s(t,"H1",{class:!0});var De=i(f);_=s(De,"A",{id:!0,class:!0,href:!0});var qt=i(_);k=s(qt,"SPAN",{});var zt=i(k);v(u.$$.fragment,zt),zt.forEach(o),qt.forEach(o),g=c(De),M=s(De,"SPAN",{});var ws=i(M);fo=r(ws,"Swin Transformer"),ws.forEach(o),De.forEach(o),Ot=c(t),W=s(t,"H2",{class:!0});var oo=i(W);ee=s(oo,"A",{id:!0,class:!0,href:!0});var vs=i(ee);dt=s(vs,"SPAN",{});var bs=i(dt);v(pe.$$.fragment,bs),bs.forEach(o),vs.forEach(o),uo=c(oo),ct=s(oo,"SPAN",{});var Ss=i(ct);go=r(Ss,"Overview"),Ss.forEach(o),oo.forEach(o),Dt=c(t),U=s(t,"P",{});var Nt=i(U);_o=r(Nt,"The Swin Transformer was proposed in "),me=s(Nt,"A",{href:!0,rel:!0});var ys=i(me);wo=r(ys,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ys.forEach(o),vo=s(Nt,"BR",{}),bo=r(Nt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Nt.forEach(o),Lt=c(t),He=s(t,"P",{});var $s=i(He);So=r($s,"The abstract from the paper is the following:"),$s.forEach(o),Ht=c(t),We=s(t,"P",{});var Ts=i(We);ht=s(Ts,"EM",{});var ks=i(ht);yo=r(ks,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),ks.forEach(o),Ts.forEach(o),Wt=c(t),Ue=s(t,"P",{});var xs=i(Ue);$o=r(xs,"Tips:"),xs.forEach(o),Ut=c(t),z=s(t,"UL",{});var Qe=i(z);fe=s(Qe,"LI",{});var no=i(fe);To=r(no,"One can use the "),Ve=s(no,"A",{href:!0});var Ms=i(Ve);ko=r(Ms,"AutoFeatureExtractor"),Ms.forEach(o),xo=r(no," API to prepare images for the model."),no.forEach(o),Mo=c(Qe),ue=s(Qe,"LI",{});var so=i(ue);Eo=r(so,"Swin pads the inputs supporting any input size (if divisible by "),pt=s(so,"CODE",{});var Es=i(pt);Fo=r(Es,"32"),Es.forEach(o),jo=r(so,")."),so.forEach(o),Co=c(Qe),x=s(Qe,"LI",{});var C=i(x);Io=r(C,"Swin can be used as a "),mt=s(C,"EM",{});var Fs=i(mt);Ao=r(Fs,"backbone"),Fs.forEach(o),Po=r(C,", when when "),ft=s(C,"CODE",{});var js=i(ft);qo=r(js,"output_hidden_states = True"),js.forEach(o),zo=r(C," it will outputs both "),ut=s(C,"CODE",{});var Cs=i(ut);No=r(Cs,"hidden_states"),Cs.forEach(o),Oo=r(C," and "),gt=s(C,"CODE",{});var Is=i(gt);Do=r(Is,"reshaped_hidden_states"),Is.forEach(o),Lo=r(C,". "),_t=s(C,"CODE",{});var As=i(_t);Ho=r(As,"reshaped_hidden_states"),As.forEach(o),Wo=r(C," have a size of "),wt=s(C,"CODE",{});var Ps=i(wt);Uo=r(Ps,"batch, channels, height, width"),Ps.forEach(o),Vo=r(C,"."),C.forEach(o),Qe.forEach(o),Vt=c(t),te=s(t,"IMG",{src:!0,alt:!0,width:!0}),Bt=c(t),oe=s(t,"SMALL",{});var ao=i(oe);Bo=r(ao,"Swin Transformer architecture. Taken from the "),Be=s(ao,"A",{href:!0});var qs=i(Be);Ko=r(qs,"original paper"),qs.forEach(o),Yo=r(ao,"."),ao.forEach(o),Kt=c(t),N=s(t,"P",{});var Xe=i(N);Zo=r(Xe,"This model was contributed by "),ge=s(Xe,"A",{href:!0,rel:!0});var zs=i(ge);Ro=r(zs,"novice03"),zs.forEach(o),Go=r(Xe,". The original code can be found "),_e=s(Xe,"A",{href:!0,rel:!0});var Ns=i(_e);Jo=r(Ns,"here"),Ns.forEach(o),Qo=r(Xe,"."),Xe.forEach(o),Yt=c(t),V=s(t,"H2",{class:!0});var ro=i(V);ne=s(ro,"A",{id:!0,class:!0,href:!0});var Os=i(ne);vt=s(Os,"SPAN",{});var Ds=i(vt);v(we.$$.fragment,Ds),Ds.forEach(o),Os.forEach(o),Xo=c(ro),bt=s(ro,"SPAN",{});var Ls=i(bt);en=r(Ls,"SwinConfig"),Ls.forEach(o),ro.forEach(o),Zt=c(t),I=s(t,"DIV",{class:!0});var ce=i(I);v(ve.$$.fragment,ce),tn=c(ce),B=s(ce,"P",{});var et=i(B);on=r(et,"This is the configuration class to store the configuration of a "),Ke=s(et,"A",{href:!0});var Hs=i(Ke);nn=r(Hs,"SwinModel"),Hs.forEach(o),sn=r(et,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),be=s(et,"A",{href:!0,rel:!0});var Ws=i(be);an=r(Ws,"microsoft/swin-tiny-patch4-window7-224"),Ws.forEach(o),rn=r(et,`
architecture.`),et.forEach(o),ln=c(ce),K=s(ce,"P",{});var tt=i(K);dn=r(tt,"Configuration objects inherit from "),Ye=s(tt,"A",{href:!0});var Us=i(Ye);cn=r(Us,"PretrainedConfig"),Us.forEach(o),hn=r(tt,` and can be used to control the model outputs. Read the
documentation from `),Ze=s(tt,"A",{href:!0});var Vs=i(Ze);pn=r(Vs,"PretrainedConfig"),Vs.forEach(o),mn=r(tt," for more information."),tt.forEach(o),fn=c(ce),v(Se.$$.fragment,ce),ce.forEach(o),Rt=c(t),Y=s(t,"H2",{class:!0});var io=i(Y);se=s(io,"A",{id:!0,class:!0,href:!0});var Bs=i(se);St=s(Bs,"SPAN",{});var Ks=i(St);v(ye.$$.fragment,Ks),Ks.forEach(o),Bs.forEach(o),un=c(io),yt=s(io,"SPAN",{});var Ys=i(yt);gn=r(Ys,"SwinModel"),Ys.forEach(o),io.forEach(o),Gt=c(t),P=s(t,"DIV",{class:!0});var ot=i(P);v($e.$$.fragment,ot),_n=c(ot),Te=s(ot,"P",{});var lo=i(Te);wn=r(lo,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ke=s(lo,"A",{href:!0,rel:!0});var Zs=i(ke);vn=r(Zs,"torch.nn.Module"),Zs.forEach(o),bn=r(lo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lo.forEach(o),Sn=c(ot),E=s(ot,"DIV",{class:!0});var O=i(E);v(xe.$$.fragment,O),yn=c(O),Z=s(O,"P",{});var nt=i(Z);$n=r(nt,"The "),Re=s(nt,"A",{href:!0});var Rs=i(Re);Tn=r(Rs,"SwinModel"),Rs.forEach(o),kn=r(nt," forward method, overrides the "),$t=s(nt,"CODE",{});var Gs=i($t);xn=r(Gs,"__call__"),Gs.forEach(o),Mn=r(nt," special method."),nt.forEach(o),En=c(O),v(ae.$$.fragment,O),Fn=c(O),Tt=s(O,"P",{});var Js=i(Tt);jn=r(Js,"Example:"),Js.forEach(o),Cn=c(O),v(Me.$$.fragment,O),O.forEach(o),ot.forEach(o),Jt=c(t),R=s(t,"H2",{class:!0});var co=i(R);re=s(co,"A",{id:!0,class:!0,href:!0});var Qs=i(re);kt=s(Qs,"SPAN",{});var Xs=i(kt);v(Ee.$$.fragment,Xs),Xs.forEach(o),Qs.forEach(o),In=c(co),xt=s(co,"SPAN",{});var ea=i(xt);An=r(ea,"SwinForMaskedImageModeling"),ea.forEach(o),co.forEach(o),Qt=c(t),q=s(t,"DIV",{class:!0});var st=i(q);v(Fe.$$.fragment,st),Pn=c(st),G=s(st,"P",{});var at=i(G);qn=r(at,"Swin Model with a decoder on top for masked image modeling, as proposed in "),Mt=s(at,"CODE",{});var ta=i(Mt);zn=r(ta,"SimMIM <https://arxiv.org/abs/2111.09886>"),ta.forEach(o),Nn=r(at,`__.
This model is a PyTorch `),je=s(at,"A",{href:!0,rel:!0});var oa=i(je);On=r(oa,"torch.nn.Module"),oa.forEach(o),Dn=r(at,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),at.forEach(o),Ln=c(st),F=s(st,"DIV",{class:!0});var D=i(F);v(Ce.$$.fragment,D),Hn=c(D),J=s(D,"P",{});var rt=i(J);Wn=r(rt,"The "),Ge=s(rt,"A",{href:!0});var na=i(Ge);Un=r(na,"SwinForMaskedImageModeling"),na.forEach(o),Vn=r(rt," forward method, overrides the "),Et=s(rt,"CODE",{});var sa=i(Et);Bn=r(sa,"__call__"),sa.forEach(o),Kn=r(rt," special method."),rt.forEach(o),Yn=c(D),v(ie.$$.fragment,D),Zn=c(D),Ft=s(D,"P",{});var aa=i(Ft);Rn=r(aa,"Examples:"),aa.forEach(o),Gn=c(D),v(Ie.$$.fragment,D),D.forEach(o),st.forEach(o),Xt=c(t),Q=s(t,"H2",{class:!0});var ho=i(Q);le=s(ho,"A",{id:!0,class:!0,href:!0});var ra=i(le);jt=s(ra,"SPAN",{});var ia=i(jt);v(Ae.$$.fragment,ia),ia.forEach(o),ra.forEach(o),Jn=c(ho),Ct=s(ho,"SPAN",{});var la=i(Ct);Qn=r(la,"SwinForImageClassification"),la.forEach(o),ho.forEach(o),eo=c(t),A=s(t,"DIV",{class:!0});var he=i(A);v(Pe.$$.fragment,he),Xn=c(he),It=s(he,"P",{});var da=i(It);es=r(da,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),da.forEach(o),ts=c(he),qe=s(he,"P",{});var po=i(qe);os=r(po,"This model is a PyTorch "),ze=s(po,"A",{href:!0,rel:!0});var ca=i(ze);ns=r(ca,"torch.nn.Module"),ca.forEach(o),ss=r(po,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),po.forEach(o),as=c(he),j=s(he,"DIV",{class:!0});var L=i(j);v(Ne.$$.fragment,L),rs=c(L),X=s(L,"P",{});var it=i(X);is=r(it,"The "),Je=s(it,"A",{href:!0});var ha=i(Je);ls=r(ha,"SwinForImageClassification"),ha.forEach(o),ds=r(it," forward method, overrides the "),At=s(it,"CODE",{});var pa=i(At);cs=r(pa,"__call__"),pa.forEach(o),hs=r(it," special method."),it.forEach(o),ps=c(L),v(de.$$.fragment,L),ms=c(L),Pt=s(L,"P",{});var ma=i(Pt);fs=r(ma,"Example:"),ma.forEach(o),us=c(L),v(Oe.$$.fragment,L),L.forEach(o),he.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify($a)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(f,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(W,"class","relative group"),l(me,"href","https://arxiv.org/abs/2103.14030"),l(me,"rel","nofollow"),l(Ve,"href","/docs/transformers/pr_15986/en/model_doc/auto#transformers.AutoFeatureExtractor"),wa(te.src,_s="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(te,"src",_s),l(te,"alt","drawing"),l(te,"width","600"),l(Be,"href","https://arxiv.org/abs/2102.03334"),l(ge,"href","https://huggingface.co/novice03%3E"),l(ge,"rel","nofollow"),l(_e,"href","https://github.com/microsoft/Swin-Transformer"),l(_e,"rel","nofollow"),l(ne,"id","transformers.SwinConfig"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SwinConfig"),l(V,"class","relative group"),l(Ke,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinModel"),l(be,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(be,"rel","nofollow"),l(Ye,"href","/docs/transformers/pr_15986/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ze,"href","/docs/transformers/pr_15986/en/main_classes/configuration#transformers.PretrainedConfig"),l(I,"class","docstring"),l(se,"id","transformers.SwinModel"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SwinModel"),l(Y,"class","relative group"),l(ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ke,"rel","nofollow"),l(Re,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinModel"),l(E,"class","docstring"),l(P,"class","docstring"),l(re,"id","transformers.SwinForMaskedImageModeling"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SwinForMaskedImageModeling"),l(R,"class","relative group"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(Ge,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(F,"class","docstring"),l(q,"class","docstring"),l(le,"id","transformers.SwinForImageClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SwinForImageClassification"),l(Q,"class","relative group"),l(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ze,"rel","nofollow"),l(Je,"href","/docs/transformers/pr_15986/en/model_doc/swin#transformers.SwinForImageClassification"),l(j,"class","docstring"),l(A,"class","docstring")},m(t,h){e(document.head,m),p(t,T,h),p(t,f,h),e(f,_),e(_,k),b(u,k,null),e(f,g),e(f,M),e(M,fo),p(t,Ot,h),p(t,W,h),e(W,ee),e(ee,dt),b(pe,dt,null),e(W,uo),e(W,ct),e(ct,go),p(t,Dt,h),p(t,U,h),e(U,_o),e(U,me),e(me,wo),e(U,vo),e(U,bo),p(t,Lt,h),p(t,He,h),e(He,So),p(t,Ht,h),p(t,We,h),e(We,ht),e(ht,yo),p(t,Wt,h),p(t,Ue,h),e(Ue,$o),p(t,Ut,h),p(t,z,h),e(z,fe),e(fe,To),e(fe,Ve),e(Ve,ko),e(fe,xo),e(z,Mo),e(z,ue),e(ue,Eo),e(ue,pt),e(pt,Fo),e(ue,jo),e(z,Co),e(z,x),e(x,Io),e(x,mt),e(mt,Ao),e(x,Po),e(x,ft),e(ft,qo),e(x,zo),e(x,ut),e(ut,No),e(x,Oo),e(x,gt),e(gt,Do),e(x,Lo),e(x,_t),e(_t,Ho),e(x,Wo),e(x,wt),e(wt,Uo),e(x,Vo),p(t,Vt,h),p(t,te,h),p(t,Bt,h),p(t,oe,h),e(oe,Bo),e(oe,Be),e(Be,Ko),e(oe,Yo),p(t,Kt,h),p(t,N,h),e(N,Zo),e(N,ge),e(ge,Ro),e(N,Go),e(N,_e),e(_e,Jo),e(N,Qo),p(t,Yt,h),p(t,V,h),e(V,ne),e(ne,vt),b(we,vt,null),e(V,Xo),e(V,bt),e(bt,en),p(t,Zt,h),p(t,I,h),b(ve,I,null),e(I,tn),e(I,B),e(B,on),e(B,Ke),e(Ke,nn),e(B,sn),e(B,be),e(be,an),e(B,rn),e(I,ln),e(I,K),e(K,dn),e(K,Ye),e(Ye,cn),e(K,hn),e(K,Ze),e(Ze,pn),e(K,mn),e(I,fn),b(Se,I,null),p(t,Rt,h),p(t,Y,h),e(Y,se),e(se,St),b(ye,St,null),e(Y,un),e(Y,yt),e(yt,gn),p(t,Gt,h),p(t,P,h),b($e,P,null),e(P,_n),e(P,Te),e(Te,wn),e(Te,ke),e(ke,vn),e(Te,bn),e(P,Sn),e(P,E),b(xe,E,null),e(E,yn),e(E,Z),e(Z,$n),e(Z,Re),e(Re,Tn),e(Z,kn),e(Z,$t),e($t,xn),e(Z,Mn),e(E,En),b(ae,E,null),e(E,Fn),e(E,Tt),e(Tt,jn),e(E,Cn),b(Me,E,null),p(t,Jt,h),p(t,R,h),e(R,re),e(re,kt),b(Ee,kt,null),e(R,In),e(R,xt),e(xt,An),p(t,Qt,h),p(t,q,h),b(Fe,q,null),e(q,Pn),e(q,G),e(G,qn),e(G,Mt),e(Mt,zn),e(G,Nn),e(G,je),e(je,On),e(G,Dn),e(q,Ln),e(q,F),b(Ce,F,null),e(F,Hn),e(F,J),e(J,Wn),e(J,Ge),e(Ge,Un),e(J,Vn),e(J,Et),e(Et,Bn),e(J,Kn),e(F,Yn),b(ie,F,null),e(F,Zn),e(F,Ft),e(Ft,Rn),e(F,Gn),b(Ie,F,null),p(t,Xt,h),p(t,Q,h),e(Q,le),e(le,jt),b(Ae,jt,null),e(Q,Jn),e(Q,Ct),e(Ct,Qn),p(t,eo,h),p(t,A,h),b(Pe,A,null),e(A,Xn),e(A,It),e(It,es),e(A,ts),e(A,qe),e(qe,os),e(qe,ze),e(ze,ns),e(qe,ss),e(A,as),e(A,j),b(Ne,j,null),e(j,rs),e(j,X),e(X,is),e(X,Je),e(Je,ls),e(X,ds),e(X,At),e(At,cs),e(X,hs),e(j,ps),b(de,j,null),e(j,ms),e(j,Pt),e(Pt,fs),e(j,us),b(Oe,j,null),to=!0},p(t,[h]){const De={};h&2&&(De.$$scope={dirty:h,ctx:t}),ae.$set(De);const qt={};h&2&&(qt.$$scope={dirty:h,ctx:t}),ie.$set(qt);const zt={};h&2&&(zt.$$scope={dirty:h,ctx:t}),de.$set(zt)},i(t){to||(S(u.$$.fragment,t),S(pe.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S(Se.$$.fragment,t),S(ye.$$.fragment,t),S($e.$$.fragment,t),S(xe.$$.fragment,t),S(ae.$$.fragment,t),S(Me.$$.fragment,t),S(Ee.$$.fragment,t),S(Fe.$$.fragment,t),S(Ce.$$.fragment,t),S(ie.$$.fragment,t),S(Ie.$$.fragment,t),S(Ae.$$.fragment,t),S(Pe.$$.fragment,t),S(Ne.$$.fragment,t),S(de.$$.fragment,t),S(Oe.$$.fragment,t),to=!0)},o(t){y(u.$$.fragment,t),y(pe.$$.fragment,t),y(we.$$.fragment,t),y(ve.$$.fragment,t),y(Se.$$.fragment,t),y(ye.$$.fragment,t),y($e.$$.fragment,t),y(xe.$$.fragment,t),y(ae.$$.fragment,t),y(Me.$$.fragment,t),y(Ee.$$.fragment,t),y(Fe.$$.fragment,t),y(Ce.$$.fragment,t),y(ie.$$.fragment,t),y(Ie.$$.fragment,t),y(Ae.$$.fragment,t),y(Pe.$$.fragment,t),y(Ne.$$.fragment,t),y(de.$$.fragment,t),y(Oe.$$.fragment,t),to=!1},d(t){o(m),t&&o(T),t&&o(f),$(u),t&&o(Ot),t&&o(W),$(pe),t&&o(Dt),t&&o(U),t&&o(Lt),t&&o(He),t&&o(Ht),t&&o(We),t&&o(Wt),t&&o(Ue),t&&o(Ut),t&&o(z),t&&o(Vt),t&&o(te),t&&o(Bt),t&&o(oe),t&&o(Kt),t&&o(N),t&&o(Yt),t&&o(V),$(we),t&&o(Zt),t&&o(I),$(ve),$(Se),t&&o(Rt),t&&o(Y),$(ye),t&&o(Gt),t&&o(P),$($e),$(xe),$(ae),$(Me),t&&o(Jt),t&&o(R),$(Ee),t&&o(Qt),t&&o(q),$(Fe),$(Ce),$(ie),$(Ie),t&&o(Xt),t&&o(Q),$(Ae),t&&o(eo),t&&o(A),$(Pe),$(Ne),$(de),$(Oe)}}}const $a={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Ta(H,m,T){let{fw:f}=m;return H.$$set=_=>{"fw"in _&&T(0,f=_.fw)},[f]}class Ca extends fa{constructor(m){super();ua(this,m,Ta,ya,ga,{fw:0})}}export{Ca as default,$a as metadata};
