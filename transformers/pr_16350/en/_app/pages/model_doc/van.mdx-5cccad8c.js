import{S as Uo,i as Go,s as Ko,e as o,k as d,w,t as r,M as Ro,c as n,d as a,m as h,a as s,x as b,h as i,b as l,N as Zo,F as t,g as f,y as $,q as y,o as V,B as A}from"../../chunks/vendor-6b77c823.js";import{T as Wo}from"../../chunks/Tip-39098574.js";import{D as nt}from"../../chunks/Docstring-abef54e3.js";import{C as to}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as st}from"../../chunks/IconCopyLink-7a11ce68.js";function Bo(Y){let p,E,m,u,T;return{c(){p=o("p"),E=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var _=s(p);E=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(_,"CODE",{});var k=s(m);u=i(k,"Module"),k.forEach(a),T=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(a)},m(g,_){f(g,p,_),t(p,E),t(p,m),t(m,u),t(p,T)},d(g){g&&a(p)}}}function Jo(Y){let p,E,m,u,T;return{c(){p=o("p"),E=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var _=s(p);E=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(_,"CODE",{});var k=s(m);u=i(k,"Module"),k.forEach(a),T=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(a)},m(g,_){f(g,p,_),t(p,E),t(p,m),t(m,u),t(p,T)},d(g){g&&a(p)}}}function Qo(Y){let p,E,m,u,T,g,_,k,Ft,rt,q,U,He,ee,Pt,We,It,it,G,qt,te,zt,Lt,lt,xe,Dt,ct,Ce,St,dt,Te,ae,Ot,oe,Ht,Wt,ht,je,Ut,ft,ke,ne,Gt,Ue,Kt,Rt,pt,K,Zt,se,Bt,Jt,mt,re,ao,ut,N,Qt,ie,Xt,Yt,le,ea,ta,gt,z,R,Ge,ce,aa,Ke,oa,_t,v,de,na,L,sa,Me,ra,ia,he,la,ca,da,D,ha,Ne,fa,pa,Fe,ma,ua,ga,Re,_a,va,fe,vt,S,Z,Ze,pe,wa,Be,ba,wt,M,me,$a,ue,ya,ge,Va,Aa,Ea,x,_e,xa,O,Ca,Pe,Ta,ja,Je,ka,Ma,Na,B,Fa,Qe,Pa,Ia,ve,bt,H,J,Xe,we,qa,Ye,za,$t,j,be,La,et,Da,Sa,$e,Oa,ye,Ha,Wa,Ua,C,Ve,Ga,W,Ka,Ie,Ra,Za,tt,Ba,Ja,Qa,Q,Xa,at,Ya,eo,Ae,yt;return g=new st({}),ee=new st({}),ce=new st({}),de=new nt({props:{name:"class transformers.VanConfig",anchor:"transformers.VanConfig",parameters:[{name:"image_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_sizes",val:" = [7, 3, 3, 3]"},{name:"strides",val:" = [4, 2, 2, 2]"},{name:"hidden_sizes",val:" = [64, 128, 320, 512]"},{name:"depths",val:" = [3, 3, 12, 3]"},{name:"mlp_ratios",val:" = [8, 8, 4, 4]"},{name:"hidden_act",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-06"},{name:"layer_scale_init_value",val:" = 0.01"},{name:"drop_path_rate",val:" = 0.0"},{name:"dropout_rate",val:" = 0.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16350/src/transformers/models/van/configuration_van.py#L28",parametersDescription:[{anchor:"transformers.VanConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.VanConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.VanConfig.patch_sizes",description:`<strong>patch_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[7, 3, 3, 3]</code>) &#x2014;
Patch size to use in each stage&#x2019;s embedding layer.`,name:"patch_sizes"},{anchor:"transformers.VanConfig.strides",description:`<strong>strides</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 2, 2]</code>) &#x2014;
Stride size to use in each stage&#x2019;s embedding layer to downsample the input.`,name:"strides"},{anchor:"transformers.VanConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[64, 128, 320, 512]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.VanConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 3, 12, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.VanConfig.mlp_ratios",description:`<strong>mlp_ratios</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[8, 8, 4, 4]</code>) &#x2014;
The expansion ratio for mlp layer at each stage.`,name:"mlp_ratios"},{anchor:"transformers.VanConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in each layer. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VanConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VanConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VanConfig.layer_scale_init_value",description:`<strong>layer_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-2) &#x2014;
The initial value for layer scaling.`,name:"layer_scale_init_value"},{anchor:"transformers.VanConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for stochastic depth.`,name:"drop_path_rate"},{anchor:"transformers.VanConfig.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for dropout.`,name:"dropout_rate"}]}}),fe=new to({props:{code:`from transformers import VanModel, VanConfig

# Initializing a VAN van-base style configuration
configuration = VanConfig()
# Initializing a model from the van-base style configuration
model = VanModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VanModel, VanConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a VAN van-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VanConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the van-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),pe=new st({}),me=new nt({props:{name:"class transformers.VanModel",anchor:"transformers.VanModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16350/src/transformers/models/van/modeling_van.py#L455",parametersDescription:[{anchor:"transformers.VanModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16350/en/model_doc/van#transformers.VanConfig">VanConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16350/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_e=new nt({props:{name:"forward",anchor:"transformers.VanModel.forward",parameters:[{name:"pixel_values",val:""},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16350/src/transformers/models/van/modeling_van.py#L465",parametersDescription:[{anchor:"transformers.VanModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16350/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.VanModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all stages. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VanModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16350/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.van.modeling_van.VanModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16350/en/model_doc/van#transformers.VanConfig"
>VanConfig</a>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Last hidden states (final feature map) of the last stage of the model.</li>
<li><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.hidden_sizes[-1])</code>) \u2014 Global average pooling of the last feature map followed by a layernorm.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.models.van.modeling_van.VanModelOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),B=new Wo({props:{$$slots:{default:[Bo]},$$scope:{ctx:Y}}}),ve=new to({props:{code:`from transformers import AutoFeatureExtractor, VanModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("Visual-Attention-Network/van-base")
model = VanModel.from_pretrained("Visual-Attention-Network/van-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, VanModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanModel.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">512</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),we=new st({}),be=new nt({props:{name:"class transformers.VanForImageClassification",anchor:"transformers.VanForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16350/src/transformers/models/van/modeling_van.py#L506",parametersDescription:[{anchor:"transformers.VanForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16350/en/model_doc/van#transformers.VanConfig">VanConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16350/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ve=new nt({props:{name:"forward",anchor:"transformers.VanForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"labels",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16350/src/transformers/models/van/modeling_van.py#L518",parametersDescription:[{anchor:"transformers.VanForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16350/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.VanForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all stages. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VanForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16350/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VanForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.van.modeling_van.VanClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16350/en/model_doc/van#transformers.VanConfig"
>VanConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.models.van.modeling_van.VanClassifierOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new Wo({props:{$$slots:{default:[Jo]},$$scope:{ctx:Y}}}),Ae=new to({props:{code:`from transformers import AutoFeatureExtractor, VanForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("Visual-Attention-Network/van-base")
model = VanForImageClassification.from_pretrained("Visual-Attention-Network/van-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, VanForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanForImageClassification.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){p=o("meta"),E=d(),m=o("h1"),u=o("a"),T=o("span"),w(g.$$.fragment),_=d(),k=o("span"),Ft=r("VAN"),rt=d(),q=o("h2"),U=o("a"),He=o("span"),w(ee.$$.fragment),Pt=d(),We=o("span"),It=r("Overview"),it=d(),G=o("p"),qt=r("The VAN model was proposed in "),te=o("a"),zt=r("Visual Attention Network"),Lt=r(" by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu."),lt=d(),xe=o("p"),Dt=r("This paper introduces a new attention layer based on convolution operations able to capture both local and distant relationships. This is done by combining normal and large kernel convolution layers. The latter uses a dilated convolution to capture distant correlations."),ct=d(),Ce=o("p"),St=r("The abstract from the paper is the following:"),dt=d(),Te=o("p"),ae=o("em"),Ot=r("While originally designed for natural language processing tasks, the self-attention mechanism has recently taken various computer vision areas by storm. However, the 2D nature of images brings three challenges for applying self-attention in computer vision. (1) Treating images as 1D sequences neglects their 2D structures. (2) The quadratic complexity is too expensive for high-resolution images. (3) It only captures spatial adaptability but ignores channel adaptability. In this paper, we propose a novel large kernel attention (LKA) module to enable self-adaptive and long-range correlations in self-attention while avoiding the above issues. We further introduce a novel neural network based on LKA, namely Visual Attention Network (VAN). While extremely simple, VAN outperforms the state-of-the-art vision transformers and convolutional neural networks with a large margin in extensive experiments, including image classification, object detection, semantic segmentation, instance segmentation, etc. Code is available at "),oe=o("a"),Ht=r("this https URL"),Wt=r("."),ht=d(),je=o("p"),Ut=r("Tips:"),ft=d(),ke=o("ul"),ne=o("li"),Gt=r("VAN does not have an embedding layer, thus the "),Ue=o("code"),Kt=r("hidden_states"),Rt=r(" will have a length equal to the number of stages."),pt=d(),K=o("p"),Zt=r("The figure below illustrates the architecture of a Visual Aattention Layer. Taken from the "),se=o("a"),Bt=r("original paper"),Jt=r("."),mt=d(),re=o("img"),ut=d(),N=o("p"),Qt=r("This model was contributed by "),ie=o("a"),Xt=r("Francesco"),Yt=r(". The original code can be found "),le=o("a"),ea=r("here"),ta=r("."),gt=d(),z=o("h2"),R=o("a"),Ge=o("span"),w(ce.$$.fragment),aa=d(),Ke=o("span"),oa=r("VanConfig"),_t=d(),v=o("div"),w(de.$$.fragment),na=d(),L=o("p"),sa=r("This is the configuration class to store the configuration of a "),Me=o("a"),ra=r("VanModel"),ia=r(`. It is used to instantiate a VAN model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VAN `),he=o("a"),la=r("van-base"),ca=r(`
architecture.`),da=d(),D=o("p"),ha=r("Configuration objects inherit from "),Ne=o("a"),fa=r("PretrainedConfig"),pa=r(` and can be used to control the model outputs. Read the
documentation from `),Fe=o("a"),ma=r("PretrainedConfig"),ua=r(" for more information."),ga=d(),Re=o("p"),_a=r("Example:"),va=d(),w(fe.$$.fragment),vt=d(),S=o("h2"),Z=o("a"),Ze=o("span"),w(pe.$$.fragment),wa=d(),Be=o("span"),ba=r("VanModel"),wt=d(),M=o("div"),w(me.$$.fragment),$a=d(),ue=o("p"),ya=r(`The bare VAN model outputting raw features without any specific head on top. Note, VAN does not have an embedding layer.
This model is a PyTorch `),ge=o("a"),Va=r("torch.nn.Module"),Aa=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ea=d(),x=o("div"),w(_e.$$.fragment),xa=d(),O=o("p"),Ca=r("The "),Pe=o("a"),Ta=r("VanModel"),ja=r(" forward method, overrides the "),Je=o("code"),ka=r("__call__"),Ma=r(" special method."),Na=d(),w(B.$$.fragment),Fa=d(),Qe=o("p"),Pa=r("Example:"),Ia=d(),w(ve.$$.fragment),bt=d(),H=o("h2"),J=o("a"),Xe=o("span"),w(we.$$.fragment),qa=d(),Ye=o("span"),za=r("VanForImageClassification"),$t=d(),j=o("div"),w(be.$$.fragment),La=d(),et=o("p"),Da=r(`VAN Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Sa=d(),$e=o("p"),Oa=r("This model is a PyTorch "),ye=o("a"),Ha=r("torch.nn.Module"),Wa=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ua=d(),C=o("div"),w(Ve.$$.fragment),Ga=d(),W=o("p"),Ka=r("The "),Ie=o("a"),Ra=r("VanForImageClassification"),Za=r(" forward method, overrides the "),tt=o("code"),Ba=r("__call__"),Ja=r(" special method."),Qa=d(),w(Q.$$.fragment),Xa=d(),at=o("p"),Ya=r("Example:"),eo=d(),w(Ae.$$.fragment),this.h()},l(e){const c=Ro('[data-svelte="svelte-1phssyn"]',document.head);p=n(c,"META",{name:!0,content:!0}),c.forEach(a),E=h(e),m=n(e,"H1",{class:!0});var Ee=s(m);u=n(Ee,"A",{id:!0,class:!0,href:!0});var ot=s(u);T=n(ot,"SPAN",{});var oo=s(T);b(g.$$.fragment,oo),oo.forEach(a),ot.forEach(a),_=h(Ee),k=n(Ee,"SPAN",{});var no=s(k);Ft=i(no,"VAN"),no.forEach(a),Ee.forEach(a),rt=h(e),q=n(e,"H2",{class:!0});var Vt=s(q);U=n(Vt,"A",{id:!0,class:!0,href:!0});var so=s(U);He=n(so,"SPAN",{});var ro=s(He);b(ee.$$.fragment,ro),ro.forEach(a),so.forEach(a),Pt=h(Vt),We=n(Vt,"SPAN",{});var io=s(We);It=i(io,"Overview"),io.forEach(a),Vt.forEach(a),it=h(e),G=n(e,"P",{});var At=s(G);qt=i(At,"The VAN model was proposed in "),te=n(At,"A",{href:!0,rel:!0});var lo=s(te);zt=i(lo,"Visual Attention Network"),lo.forEach(a),Lt=i(At," by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu."),At.forEach(a),lt=h(e),xe=n(e,"P",{});var co=s(xe);Dt=i(co,"This paper introduces a new attention layer based on convolution operations able to capture both local and distant relationships. This is done by combining normal and large kernel convolution layers. The latter uses a dilated convolution to capture distant correlations."),co.forEach(a),ct=h(e),Ce=n(e,"P",{});var ho=s(Ce);St=i(ho,"The abstract from the paper is the following:"),ho.forEach(a),dt=h(e),Te=n(e,"P",{});var fo=s(Te);ae=n(fo,"EM",{});var Et=s(ae);Ot=i(Et,"While originally designed for natural language processing tasks, the self-attention mechanism has recently taken various computer vision areas by storm. However, the 2D nature of images brings three challenges for applying self-attention in computer vision. (1) Treating images as 1D sequences neglects their 2D structures. (2) The quadratic complexity is too expensive for high-resolution images. (3) It only captures spatial adaptability but ignores channel adaptability. In this paper, we propose a novel large kernel attention (LKA) module to enable self-adaptive and long-range correlations in self-attention while avoiding the above issues. We further introduce a novel neural network based on LKA, namely Visual Attention Network (VAN). While extremely simple, VAN outperforms the state-of-the-art vision transformers and convolutional neural networks with a large margin in extensive experiments, including image classification, object detection, semantic segmentation, instance segmentation, etc. Code is available at "),oe=n(Et,"A",{href:!0,rel:!0});var po=s(oe);Ht=i(po,"this https URL"),po.forEach(a),Wt=i(Et,"."),Et.forEach(a),fo.forEach(a),ht=h(e),je=n(e,"P",{});var mo=s(je);Ut=i(mo,"Tips:"),mo.forEach(a),ft=h(e),ke=n(e,"UL",{});var uo=s(ke);ne=n(uo,"LI",{});var xt=s(ne);Gt=i(xt,"VAN does not have an embedding layer, thus the "),Ue=n(xt,"CODE",{});var go=s(Ue);Kt=i(go,"hidden_states"),go.forEach(a),Rt=i(xt," will have a length equal to the number of stages."),xt.forEach(a),uo.forEach(a),pt=h(e),K=n(e,"P",{});var Ct=s(K);Zt=i(Ct,"The figure below illustrates the architecture of a Visual Aattention Layer. Taken from the "),se=n(Ct,"A",{href:!0,rel:!0});var _o=s(se);Bt=i(_o,"original paper"),_o.forEach(a),Jt=i(Ct,"."),Ct.forEach(a),mt=h(e),re=n(e,"IMG",{width:!0,src:!0}),ut=h(e),N=n(e,"P",{});var qe=s(N);Qt=i(qe,"This model was contributed by "),ie=n(qe,"A",{href:!0,rel:!0});var vo=s(ie);Xt=i(vo,"Francesco"),vo.forEach(a),Yt=i(qe,". The original code can be found "),le=n(qe,"A",{href:!0,rel:!0});var wo=s(le);ea=i(wo,"here"),wo.forEach(a),ta=i(qe,"."),qe.forEach(a),gt=h(e),z=n(e,"H2",{class:!0});var Tt=s(z);R=n(Tt,"A",{id:!0,class:!0,href:!0});var bo=s(R);Ge=n(bo,"SPAN",{});var $o=s(Ge);b(ce.$$.fragment,$o),$o.forEach(a),bo.forEach(a),aa=h(Tt),Ke=n(Tt,"SPAN",{});var yo=s(Ke);oa=i(yo,"VanConfig"),yo.forEach(a),Tt.forEach(a),_t=h(e),v=n(e,"DIV",{class:!0});var F=s(v);b(de.$$.fragment,F),na=h(F),L=n(F,"P",{});var ze=s(L);sa=i(ze,"This is the configuration class to store the configuration of a "),Me=n(ze,"A",{href:!0});var Vo=s(Me);ra=i(Vo,"VanModel"),Vo.forEach(a),ia=i(ze,`. It is used to instantiate a VAN model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VAN `),he=n(ze,"A",{href:!0,rel:!0});var Ao=s(he);la=i(Ao,"van-base"),Ao.forEach(a),ca=i(ze,`
architecture.`),ze.forEach(a),da=h(F),D=n(F,"P",{});var Le=s(D);ha=i(Le,"Configuration objects inherit from "),Ne=n(Le,"A",{href:!0});var Eo=s(Ne);fa=i(Eo,"PretrainedConfig"),Eo.forEach(a),pa=i(Le,` and can be used to control the model outputs. Read the
documentation from `),Fe=n(Le,"A",{href:!0});var xo=s(Fe);ma=i(xo,"PretrainedConfig"),xo.forEach(a),ua=i(Le," for more information."),Le.forEach(a),ga=h(F),Re=n(F,"P",{});var Co=s(Re);_a=i(Co,"Example:"),Co.forEach(a),va=h(F),b(fe.$$.fragment,F),F.forEach(a),vt=h(e),S=n(e,"H2",{class:!0});var jt=s(S);Z=n(jt,"A",{id:!0,class:!0,href:!0});var To=s(Z);Ze=n(To,"SPAN",{});var jo=s(Ze);b(pe.$$.fragment,jo),jo.forEach(a),To.forEach(a),wa=h(jt),Be=n(jt,"SPAN",{});var ko=s(Be);ba=i(ko,"VanModel"),ko.forEach(a),jt.forEach(a),wt=h(e),M=n(e,"DIV",{class:!0});var De=s(M);b(me.$$.fragment,De),$a=h(De),ue=n(De,"P",{});var kt=s(ue);ya=i(kt,`The bare VAN model outputting raw features without any specific head on top. Note, VAN does not have an embedding layer.
This model is a PyTorch `),ge=n(kt,"A",{href:!0,rel:!0});var Mo=s(ge);Va=i(Mo,"torch.nn.Module"),Mo.forEach(a),Aa=i(kt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kt.forEach(a),Ea=h(De),x=n(De,"DIV",{class:!0});var P=s(x);b(_e.$$.fragment,P),xa=h(P),O=n(P,"P",{});var Se=s(O);Ca=i(Se,"The "),Pe=n(Se,"A",{href:!0});var No=s(Pe);Ta=i(No,"VanModel"),No.forEach(a),ja=i(Se," forward method, overrides the "),Je=n(Se,"CODE",{});var Fo=s(Je);ka=i(Fo,"__call__"),Fo.forEach(a),Ma=i(Se," special method."),Se.forEach(a),Na=h(P),b(B.$$.fragment,P),Fa=h(P),Qe=n(P,"P",{});var Po=s(Qe);Pa=i(Po,"Example:"),Po.forEach(a),Ia=h(P),b(ve.$$.fragment,P),P.forEach(a),De.forEach(a),bt=h(e),H=n(e,"H2",{class:!0});var Mt=s(H);J=n(Mt,"A",{id:!0,class:!0,href:!0});var Io=s(J);Xe=n(Io,"SPAN",{});var qo=s(Xe);b(we.$$.fragment,qo),qo.forEach(a),Io.forEach(a),qa=h(Mt),Ye=n(Mt,"SPAN",{});var zo=s(Ye);za=i(zo,"VanForImageClassification"),zo.forEach(a),Mt.forEach(a),$t=h(e),j=n(e,"DIV",{class:!0});var X=s(j);b(be.$$.fragment,X),La=h(X),et=n(X,"P",{});var Lo=s(et);Da=i(Lo,`VAN Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Lo.forEach(a),Sa=h(X),$e=n(X,"P",{});var Nt=s($e);Oa=i(Nt,"This model is a PyTorch "),ye=n(Nt,"A",{href:!0,rel:!0});var Do=s(ye);Ha=i(Do,"torch.nn.Module"),Do.forEach(a),Wa=i(Nt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nt.forEach(a),Ua=h(X),C=n(X,"DIV",{class:!0});var I=s(C);b(Ve.$$.fragment,I),Ga=h(I),W=n(I,"P",{});var Oe=s(W);Ka=i(Oe,"The "),Ie=n(Oe,"A",{href:!0});var So=s(Ie);Ra=i(So,"VanForImageClassification"),So.forEach(a),Za=i(Oe," forward method, overrides the "),tt=n(Oe,"CODE",{});var Oo=s(tt);Ba=i(Oo,"__call__"),Oo.forEach(a),Ja=i(Oe," special method."),Oe.forEach(a),Qa=h(I),b(Q.$$.fragment,I),Xa=h(I),at=n(I,"P",{});var Ho=s(at);Ya=i(Ho,"Example:"),Ho.forEach(a),eo=h(I),b(Ae.$$.fragment,I),I.forEach(a),X.forEach(a),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Xo)),l(u,"id","van"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#van"),l(m,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(q,"class","relative group"),l(te,"href","https://arxiv.org/abs/2202.09741"),l(te,"rel","nofollow"),l(oe,"href","https://github.com/Visual-Attention-Network/VAN-Classification"),l(oe,"rel","nofollow"),l(se,"href","https://arxiv.org/abs/2202.09741"),l(se,"rel","nofollow"),l(re,"width","600"),Zo(re.src,ao="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/van_architecture.png")||l(re,"src",ao),l(ie,"href","https://huggingface.co/Francesco"),l(ie,"rel","nofollow"),l(le,"href","https://github.com/Visual-Attention-Network/VAN-Classification"),l(le,"rel","nofollow"),l(R,"id","transformers.VanConfig"),l(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(R,"href","#transformers.VanConfig"),l(z,"class","relative group"),l(Me,"href","/docs/transformers/pr_16350/en/model_doc/van#transformers.VanModel"),l(he,"href","https://huggingface.co/van-base"),l(he,"rel","nofollow"),l(Ne,"href","/docs/transformers/pr_16350/en/main_classes/configuration#transformers.PretrainedConfig"),l(Fe,"href","/docs/transformers/pr_16350/en/main_classes/configuration#transformers.PretrainedConfig"),l(v,"class","docstring"),l(Z,"id","transformers.VanModel"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.VanModel"),l(S,"class","relative group"),l(ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ge,"rel","nofollow"),l(Pe,"href","/docs/transformers/pr_16350/en/model_doc/van#transformers.VanModel"),l(x,"class","docstring"),l(M,"class","docstring"),l(J,"id","transformers.VanForImageClassification"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#transformers.VanForImageClassification"),l(H,"class","relative group"),l(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ye,"rel","nofollow"),l(Ie,"href","/docs/transformers/pr_16350/en/model_doc/van#transformers.VanForImageClassification"),l(C,"class","docstring"),l(j,"class","docstring")},m(e,c){t(document.head,p),f(e,E,c),f(e,m,c),t(m,u),t(u,T),$(g,T,null),t(m,_),t(m,k),t(k,Ft),f(e,rt,c),f(e,q,c),t(q,U),t(U,He),$(ee,He,null),t(q,Pt),t(q,We),t(We,It),f(e,it,c),f(e,G,c),t(G,qt),t(G,te),t(te,zt),t(G,Lt),f(e,lt,c),f(e,xe,c),t(xe,Dt),f(e,ct,c),f(e,Ce,c),t(Ce,St),f(e,dt,c),f(e,Te,c),t(Te,ae),t(ae,Ot),t(ae,oe),t(oe,Ht),t(ae,Wt),f(e,ht,c),f(e,je,c),t(je,Ut),f(e,ft,c),f(e,ke,c),t(ke,ne),t(ne,Gt),t(ne,Ue),t(Ue,Kt),t(ne,Rt),f(e,pt,c),f(e,K,c),t(K,Zt),t(K,se),t(se,Bt),t(K,Jt),f(e,mt,c),f(e,re,c),f(e,ut,c),f(e,N,c),t(N,Qt),t(N,ie),t(ie,Xt),t(N,Yt),t(N,le),t(le,ea),t(N,ta),f(e,gt,c),f(e,z,c),t(z,R),t(R,Ge),$(ce,Ge,null),t(z,aa),t(z,Ke),t(Ke,oa),f(e,_t,c),f(e,v,c),$(de,v,null),t(v,na),t(v,L),t(L,sa),t(L,Me),t(Me,ra),t(L,ia),t(L,he),t(he,la),t(L,ca),t(v,da),t(v,D),t(D,ha),t(D,Ne),t(Ne,fa),t(D,pa),t(D,Fe),t(Fe,ma),t(D,ua),t(v,ga),t(v,Re),t(Re,_a),t(v,va),$(fe,v,null),f(e,vt,c),f(e,S,c),t(S,Z),t(Z,Ze),$(pe,Ze,null),t(S,wa),t(S,Be),t(Be,ba),f(e,wt,c),f(e,M,c),$(me,M,null),t(M,$a),t(M,ue),t(ue,ya),t(ue,ge),t(ge,Va),t(ue,Aa),t(M,Ea),t(M,x),$(_e,x,null),t(x,xa),t(x,O),t(O,Ca),t(O,Pe),t(Pe,Ta),t(O,ja),t(O,Je),t(Je,ka),t(O,Ma),t(x,Na),$(B,x,null),t(x,Fa),t(x,Qe),t(Qe,Pa),t(x,Ia),$(ve,x,null),f(e,bt,c),f(e,H,c),t(H,J),t(J,Xe),$(we,Xe,null),t(H,qa),t(H,Ye),t(Ye,za),f(e,$t,c),f(e,j,c),$(be,j,null),t(j,La),t(j,et),t(et,Da),t(j,Sa),t(j,$e),t($e,Oa),t($e,ye),t(ye,Ha),t($e,Wa),t(j,Ua),t(j,C),$(Ve,C,null),t(C,Ga),t(C,W),t(W,Ka),t(W,Ie),t(Ie,Ra),t(W,Za),t(W,tt),t(tt,Ba),t(W,Ja),t(C,Qa),$(Q,C,null),t(C,Xa),t(C,at),t(at,Ya),t(C,eo),$(Ae,C,null),yt=!0},p(e,[c]){const Ee={};c&2&&(Ee.$$scope={dirty:c,ctx:e}),B.$set(Ee);const ot={};c&2&&(ot.$$scope={dirty:c,ctx:e}),Q.$set(ot)},i(e){yt||(y(g.$$.fragment,e),y(ee.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),y(fe.$$.fragment,e),y(pe.$$.fragment,e),y(me.$$.fragment,e),y(_e.$$.fragment,e),y(B.$$.fragment,e),y(ve.$$.fragment,e),y(we.$$.fragment,e),y(be.$$.fragment,e),y(Ve.$$.fragment,e),y(Q.$$.fragment,e),y(Ae.$$.fragment,e),yt=!0)},o(e){V(g.$$.fragment,e),V(ee.$$.fragment,e),V(ce.$$.fragment,e),V(de.$$.fragment,e),V(fe.$$.fragment,e),V(pe.$$.fragment,e),V(me.$$.fragment,e),V(_e.$$.fragment,e),V(B.$$.fragment,e),V(ve.$$.fragment,e),V(we.$$.fragment,e),V(be.$$.fragment,e),V(Ve.$$.fragment,e),V(Q.$$.fragment,e),V(Ae.$$.fragment,e),yt=!1},d(e){a(p),e&&a(E),e&&a(m),A(g),e&&a(rt),e&&a(q),A(ee),e&&a(it),e&&a(G),e&&a(lt),e&&a(xe),e&&a(ct),e&&a(Ce),e&&a(dt),e&&a(Te),e&&a(ht),e&&a(je),e&&a(ft),e&&a(ke),e&&a(pt),e&&a(K),e&&a(mt),e&&a(re),e&&a(ut),e&&a(N),e&&a(gt),e&&a(z),A(ce),e&&a(_t),e&&a(v),A(de),A(fe),e&&a(vt),e&&a(S),A(pe),e&&a(wt),e&&a(M),A(me),A(_e),A(B),A(ve),e&&a(bt),e&&a(H),A(we),e&&a($t),e&&a(j),A(be),A(Ve),A(Q),A(Ae)}}}const Xo={local:"van",sections:[{local:"overview",title:"Overview"},{local:"transformers.VanConfig",title:"VanConfig"},{local:"transformers.VanModel",title:"VanModel"},{local:"transformers.VanForImageClassification",title:"VanForImageClassification"}],title:"VAN"};function Yo(Y,p,E){let{fw:m}=p;return Y.$$set=u=>{"fw"in u&&E(0,m=u.fw)},[m]}class sn extends Uo{constructor(p){super();Go(this,p,Yo,Qo,Ko,{fw:0})}}export{sn as default,Xo as metadata};
