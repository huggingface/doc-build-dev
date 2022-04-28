import{S as Ca,i as Aa,s as Pa,e as s,k as g,w as b,t as i,M as Fa,c as r,d as o,m,a as n,x as $,h as l,b as d,F as t,g as u,y,q as N,o as R,B as x,v as Ia,L as Go}from"../../chunks/vendor-6b77c823.js";import{T as ja}from"../../chunks/Tip-39098574.js";import{D as st}from"../../chunks/Docstring-1088f2fb.js";import{C as Ko}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Vo}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ma(T){let c,w,_,f,v;return f=new Ko({props:{code:`from transformers import RegNetConfig, RegNetModel

# Initializing a RegNet regnet-y-40 style configuration
configuration = RegNetConfig()
# Initializing a model from the regnet-y-40 style configuration
model = RegNetModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RegNetConfig, RegNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RegNet regnet-y-40 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RegNetConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the regnet-y-40 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RegNetModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=s("p"),w=i("Example:"),_=g(),b(f.$$.fragment)},l(a){c=r(a,"P",{});var h=n(c);w=l(h,"Example:"),h.forEach(o),_=m(a),$(f.$$.fragment,a)},m(a,h){u(a,c,h),t(c,w),u(a,_,h),y(f,a,h),v=!0},p:Go,i(a){v||(N(f.$$.fragment,a),v=!0)},o(a){R(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(_),x(f,a)}}}function qa(T){let c,w,_,f,v;return{c(){c=s("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=r(a,"P",{});var h=n(c);w=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var A=n(_);f=l(A,"Module"),A.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){u(a,c,h),t(c,w),t(c,_),t(_,f),t(c,v)},d(a){a&&o(c)}}}function za(T){let c,w,_,f,v;return f=new Ko({props:{code:`from transformers import AutoFeatureExtractor, RegNetModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = RegNetModel.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, RegNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RegNetModel.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">1088</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),{c(){c=s("p"),w=i("Example:"),_=g(),b(f.$$.fragment)},l(a){c=r(a,"P",{});var h=n(c);w=l(h,"Example:"),h.forEach(o),_=m(a),$(f.$$.fragment,a)},m(a,h){u(a,c,h),t(c,w),u(a,_,h),y(f,a,h),v=!0},p:Go,i(a){v||(N(f.$$.fragment,a),v=!0)},o(a){R(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(_),x(f,a)}}}function Da(T){let c,w,_,f,v;return{c(){c=s("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=r(a,"P",{});var h=n(c);w=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var A=n(_);f=l(A,"Module"),A.forEach(o),v=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){u(a,c,h),t(c,w),t(c,_),t(_,f),t(c,v)},d(a){a&&o(c)}}}function Sa(T){let c,w,_,f,v;return f=new Ko({props:{code:`from transformers import AutoFeatureExtractor, RegNetForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = RegNetForImageClassification.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, RegNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RegNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){c=s("p"),w=i("Example:"),_=g(),b(f.$$.fragment)},l(a){c=r(a,"P",{});var h=n(c);w=l(h,"Example:"),h.forEach(o),_=m(a),$(f.$$.fragment,a)},m(a,h){u(a,c,h),t(c,w),u(a,_,h),y(f,a,h),v=!0},p:Go,i(a){v||(N(f.$$.fragment,a),v=!0)},o(a){R(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(_),x(f,a)}}}function Oa(T){let c,w,_,f,v,a,h,A,jt,nt,I,W,We,se,Ct,Ue,At,it,U,Pt,re,Ft,It,lt,Ee,Mt,dt,ke,qt,ct,Te,He,zt,pt,je,Dt,ft,H,ne,St,Ce,Ot,Lt,Wt,B,Ut,ie,Ht,Bt,le,Vt,ht,F,Gt,de,Kt,Jt,ce,Qt,Xt,gt,M,V,Be,pe,Yt,Ve,Zt,mt,E,fe,eo,q,to,Ae,oo,ao,he,so,ro,no,z,io,Pe,lo,co,Fe,po,fo,ho,G,ut,D,K,Ge,ge,go,Ke,mo,_t,P,me,uo,ue,_o,_e,vo,wo,bo,j,ve,$o,S,yo,Ie,No,Ro,Je,xo,Eo,ko,J,To,Q,vt,O,X,Qe,we,jo,Xe,Co,wt,k,be,Ao,Ye,Po,Fo,$e,Io,ye,Mo,qo,zo,C,Ne,Do,L,So,Me,Oo,Lo,Ze,Wo,Uo,Ho,Y,Bo,Z,bt;return a=new rt({}),se=new rt({}),pe=new rt({}),fe=new st({props:{name:"class transformers.RegNetConfig",anchor:"transformers.RegNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 32"},{name:"hidden_sizes",val:" = [128, 192, 512, 1088]"},{name:"depths",val:" = [2, 6, 12, 2]"},{name:"groups_width",val:" = 64"},{name:"layer_type",val:" = 'y'"},{name:"hidden_act",val:" = 'relu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RegNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.RegNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.RegNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.RegNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.RegNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;y&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;x&quot; or </code>&#x201C;y&#x201D;<code>. An </code>x<code>layer is a ResNet&apos;s BottleNeck layer with</code>reduction<code>fixed to</code>1<code>. While a </code>y<code>layer is a</code>x\` but with squeeze and excitation. Please refer to the
paper for a detailed explanation of how these layers were constructed.`,name:"layer_type"},{anchor:"transformers.RegNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.RegNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}],source:"https://github.com/huggingface/transformers/blob/vr_16981/src/transformers/models/regnet/configuration_regnet.py#L28"}}),G=new Vo({props:{anchor:"transformers.RegNetConfig.example",$$slots:{default:[Ma]},$$scope:{ctx:T}}}),ge=new rt({}),me=new st({props:{name:"class transformers.RegNetModel",anchor:"transformers.RegNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RegNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16981/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16981/src/transformers/models/regnet/modeling_regnet.py#L321"}}),ve=new st({props:{name:"forward",anchor:"transformers.RegNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RegNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16981/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16981/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16981/src/transformers/models/regnet/modeling_regnet.py#L331",returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state after a pooling operation on the spatial dimensions.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),J=new ja({props:{$$slots:{default:[qa]},$$scope:{ctx:T}}}),Q=new Vo({props:{anchor:"transformers.RegNetModel.forward.example",$$slots:{default:[za]},$$scope:{ctx:T}}}),we=new rt({}),be=new st({props:{name:"class transformers.RegNetForImageClassification",anchor:"transformers.RegNetForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RegNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16981/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16981/src/transformers/models/regnet/modeling_regnet.py#L376"}}),Ne=new st({props:{name:"forward",anchor:"transformers.RegNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"}],parametersDescription:[{anchor:"transformers.RegNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16981/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16981/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RegNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16981/src/transformers/models/regnet/modeling_regnet.py#L389",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also
called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Y=new ja({props:{$$slots:{default:[Da]},$$scope:{ctx:T}}}),Z=new Vo({props:{anchor:"transformers.RegNetForImageClassification.forward.example",$$slots:{default:[Sa]},$$scope:{ctx:T}}}),{c(){c=s("meta"),w=g(),_=s("h1"),f=s("a"),v=s("span"),b(a.$$.fragment),h=g(),A=s("span"),jt=i("RegNet"),nt=g(),I=s("h2"),W=s("a"),We=s("span"),b(se.$$.fragment),Ct=g(),Ue=s("span"),At=i("Overview"),it=g(),U=s("p"),Pt=i("The RegNet model was proposed in "),re=s("a"),Ft=i("Designing Network Design Spaces"),It=i(" by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),lt=g(),Ee=s("p"),Mt=i("The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),dt=g(),ke=s("p"),qt=i("The abstract from the paper is the following:"),ct=g(),Te=s("p"),He=s("em"),zt=i("In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),pt=g(),je=s("p"),Dt=i("Tips:"),ft=g(),H=s("ul"),ne=s("li"),St=i("One can use "),Ce=s("a"),Ot=i("AutoFeatureExtractor"),Lt=i(" to prepare images for the model."),Wt=g(),B=s("li"),Ut=i("The huge 10B model from "),ie=s("a"),Ht=i("Self-supervised Pretraining of Visual Features in the Wild"),Bt=i(", trained on one billion Instagram images, is available on the "),le=s("a"),Vt=i("hub"),ht=g(),F=s("p"),Gt=i("This model was contributed by "),de=s("a"),Kt=i("Francesco"),Jt=i(`.
The original code can be found `),ce=s("a"),Qt=i("here"),Xt=i("."),gt=g(),M=s("h2"),V=s("a"),Be=s("span"),b(pe.$$.fragment),Yt=g(),Ve=s("span"),Zt=i("RegNetConfig"),mt=g(),E=s("div"),b(fe.$$.fragment),eo=g(),q=s("p"),to=i("This is the configuration class to store the configuration of a "),Ae=s("a"),oo=i("RegNetModel"),ao=i(`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the RegNet
`),he=s("a"),so=i("facebook/regnet-y-040"),ro=i(" architecture."),no=g(),z=s("p"),io=i("Configuration objects inherit from "),Pe=s("a"),lo=i("PretrainedConfig"),co=i(` and can be used to control the model outputs. Read the
documentation from `),Fe=s("a"),po=i("PretrainedConfig"),fo=i(" for more information."),ho=g(),b(G.$$.fragment),ut=g(),D=s("h2"),K=s("a"),Ge=s("span"),b(ge.$$.fragment),go=g(),Ke=s("span"),mo=i("RegNetModel"),_t=g(),P=s("div"),b(me.$$.fragment),uo=g(),ue=s("p"),_o=i(`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),_e=s("a"),vo=i("torch.nn.Module"),wo=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bo=g(),j=s("div"),b(ve.$$.fragment),$o=g(),S=s("p"),yo=i("The "),Ie=s("a"),No=i("RegNetModel"),Ro=i(" forward method, overrides the "),Je=s("code"),xo=i("__call__"),Eo=i(" special method."),ko=g(),b(J.$$.fragment),To=g(),b(Q.$$.fragment),vt=g(),O=s("h2"),X=s("a"),Qe=s("span"),b(we.$$.fragment),jo=g(),Xe=s("span"),Co=i("RegNetForImageClassification"),wt=g(),k=s("div"),b(be.$$.fragment),Ao=g(),Ye=s("p"),Po=i(`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Fo=g(),$e=s("p"),Io=i("This model is a PyTorch "),ye=s("a"),Mo=i("torch.nn.Module"),qo=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo=g(),C=s("div"),b(Ne.$$.fragment),Do=g(),L=s("p"),So=i("The "),Me=s("a"),Oo=i("RegNetForImageClassification"),Lo=i(" forward method, overrides the "),Ze=s("code"),Wo=i("__call__"),Uo=i(" special method."),Ho=g(),b(Y.$$.fragment),Bo=g(),b(Z.$$.fragment),this.h()},l(e){const p=Fa('[data-svelte="svelte-1phssyn"]',document.head);c=r(p,"META",{name:!0,content:!0}),p.forEach(o),w=m(e),_=r(e,"H1",{class:!0});var Re=n(_);f=r(Re,"A",{id:!0,class:!0,href:!0});var et=n(f);v=r(et,"SPAN",{});var tt=n(v);$(a.$$.fragment,tt),tt.forEach(o),et.forEach(o),h=m(Re),A=r(Re,"SPAN",{});var ot=n(A);jt=l(ot,"RegNet"),ot.forEach(o),Re.forEach(o),nt=m(e),I=r(e,"H2",{class:!0});var xe=n(I);W=r(xe,"A",{id:!0,class:!0,href:!0});var Jo=n(W);We=r(Jo,"SPAN",{});var Qo=n(We);$(se.$$.fragment,Qo),Qo.forEach(o),Jo.forEach(o),Ct=m(xe),Ue=r(xe,"SPAN",{});var Xo=n(Ue);At=l(Xo,"Overview"),Xo.forEach(o),xe.forEach(o),it=m(e),U=r(e,"P",{});var $t=n(U);Pt=l($t,"The RegNet model was proposed in "),re=r($t,"A",{href:!0,rel:!0});var Yo=n(re);Ft=l(Yo,"Designing Network Design Spaces"),Yo.forEach(o),It=l($t," by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),$t.forEach(o),lt=m(e),Ee=r(e,"P",{});var Zo=n(Ee);Mt=l(Zo,"The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),Zo.forEach(o),dt=m(e),ke=r(e,"P",{});var ea=n(ke);qt=l(ea,"The abstract from the paper is the following:"),ea.forEach(o),ct=m(e),Te=r(e,"P",{});var ta=n(Te);He=r(ta,"EM",{});var oa=n(He);zt=l(oa,"In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),oa.forEach(o),ta.forEach(o),pt=m(e),je=r(e,"P",{});var aa=n(je);Dt=l(aa,"Tips:"),aa.forEach(o),ft=m(e),H=r(e,"UL",{});var yt=n(H);ne=r(yt,"LI",{});var Nt=n(ne);St=l(Nt,"One can use "),Ce=r(Nt,"A",{href:!0});var sa=n(Ce);Ot=l(sa,"AutoFeatureExtractor"),sa.forEach(o),Lt=l(Nt," to prepare images for the model."),Nt.forEach(o),Wt=m(yt),B=r(yt,"LI",{});var at=n(B);Ut=l(at,"The huge 10B model from "),ie=r(at,"A",{href:!0,rel:!0});var ra=n(ie);Ht=l(ra,"Self-supervised Pretraining of Visual Features in the Wild"),ra.forEach(o),Bt=l(at,", trained on one billion Instagram images, is available on the "),le=r(at,"A",{href:!0,rel:!0});var na=n(le);Vt=l(na,"hub"),na.forEach(o),at.forEach(o),yt.forEach(o),ht=m(e),F=r(e,"P",{});var qe=n(F);Gt=l(qe,"This model was contributed by "),de=r(qe,"A",{href:!0,rel:!0});var ia=n(de);Kt=l(ia,"Francesco"),ia.forEach(o),Jt=l(qe,`.
The original code can be found `),ce=r(qe,"A",{href:!0,rel:!0});var la=n(ce);Qt=l(la,"here"),la.forEach(o),Xt=l(qe,"."),qe.forEach(o),gt=m(e),M=r(e,"H2",{class:!0});var Rt=n(M);V=r(Rt,"A",{id:!0,class:!0,href:!0});var da=n(V);Be=r(da,"SPAN",{});var ca=n(Be);$(pe.$$.fragment,ca),ca.forEach(o),da.forEach(o),Yt=m(Rt),Ve=r(Rt,"SPAN",{});var pa=n(Ve);Zt=l(pa,"RegNetConfig"),pa.forEach(o),Rt.forEach(o),mt=m(e),E=r(e,"DIV",{class:!0});var ee=n(E);$(fe.$$.fragment,ee),eo=m(ee),q=r(ee,"P",{});var ze=n(q);to=l(ze,"This is the configuration class to store the configuration of a "),Ae=r(ze,"A",{href:!0});var fa=n(Ae);oo=l(fa,"RegNetModel"),fa.forEach(o),ao=l(ze,`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the RegNet
`),he=r(ze,"A",{href:!0,rel:!0});var ha=n(he);so=l(ha,"facebook/regnet-y-040"),ha.forEach(o),ro=l(ze," architecture."),ze.forEach(o),no=m(ee),z=r(ee,"P",{});var De=n(z);io=l(De,"Configuration objects inherit from "),Pe=r(De,"A",{href:!0});var ga=n(Pe);lo=l(ga,"PretrainedConfig"),ga.forEach(o),co=l(De,` and can be used to control the model outputs. Read the
documentation from `),Fe=r(De,"A",{href:!0});var ma=n(Fe);po=l(ma,"PretrainedConfig"),ma.forEach(o),fo=l(De," for more information."),De.forEach(o),ho=m(ee),$(G.$$.fragment,ee),ee.forEach(o),ut=m(e),D=r(e,"H2",{class:!0});var xt=n(D);K=r(xt,"A",{id:!0,class:!0,href:!0});var ua=n(K);Ge=r(ua,"SPAN",{});var _a=n(Ge);$(ge.$$.fragment,_a),_a.forEach(o),ua.forEach(o),go=m(xt),Ke=r(xt,"SPAN",{});var va=n(Ke);mo=l(va,"RegNetModel"),va.forEach(o),xt.forEach(o),_t=m(e),P=r(e,"DIV",{class:!0});var Se=n(P);$(me.$$.fragment,Se),uo=m(Se),ue=r(Se,"P",{});var Et=n(ue);_o=l(Et,`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),_e=r(Et,"A",{href:!0,rel:!0});var wa=n(_e);vo=l(wa,"torch.nn.Module"),wa.forEach(o),wo=l(Et,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Et.forEach(o),bo=m(Se),j=r(Se,"DIV",{class:!0});var te=n(j);$(ve.$$.fragment,te),$o=m(te),S=r(te,"P",{});var Oe=n(S);yo=l(Oe,"The "),Ie=r(Oe,"A",{href:!0});var ba=n(Ie);No=l(ba,"RegNetModel"),ba.forEach(o),Ro=l(Oe," forward method, overrides the "),Je=r(Oe,"CODE",{});var $a=n(Je);xo=l($a,"__call__"),$a.forEach(o),Eo=l(Oe," special method."),Oe.forEach(o),ko=m(te),$(J.$$.fragment,te),To=m(te),$(Q.$$.fragment,te),te.forEach(o),Se.forEach(o),vt=m(e),O=r(e,"H2",{class:!0});var kt=n(O);X=r(kt,"A",{id:!0,class:!0,href:!0});var ya=n(X);Qe=r(ya,"SPAN",{});var Na=n(Qe);$(we.$$.fragment,Na),Na.forEach(o),ya.forEach(o),jo=m(kt),Xe=r(kt,"SPAN",{});var Ra=n(Xe);Co=l(Ra,"RegNetForImageClassification"),Ra.forEach(o),kt.forEach(o),wt=m(e),k=r(e,"DIV",{class:!0});var oe=n(k);$(be.$$.fragment,oe),Ao=m(oe),Ye=r(oe,"P",{});var xa=n(Ye);Po=l(xa,`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),xa.forEach(o),Fo=m(oe),$e=r(oe,"P",{});var Tt=n($e);Io=l(Tt,"This model is a PyTorch "),ye=r(Tt,"A",{href:!0,rel:!0});var Ea=n(ye);Mo=l(Ea,"torch.nn.Module"),Ea.forEach(o),qo=l(Tt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tt.forEach(o),zo=m(oe),C=r(oe,"DIV",{class:!0});var ae=n(C);$(Ne.$$.fragment,ae),Do=m(ae),L=r(ae,"P",{});var Le=n(L);So=l(Le,"The "),Me=r(Le,"A",{href:!0});var ka=n(Me);Oo=l(ka,"RegNetForImageClassification"),ka.forEach(o),Lo=l(Le," forward method, overrides the "),Ze=r(Le,"CODE",{});var Ta=n(Ze);Wo=l(Ta,"__call__"),Ta.forEach(o),Uo=l(Le," special method."),Le.forEach(o),Ho=m(ae),$(Y.$$.fragment,ae),Bo=m(ae),$(Z.$$.fragment,ae),ae.forEach(o),oe.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(La)),d(f,"id","regnet"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#regnet"),d(_,"class","relative group"),d(W,"id","overview"),d(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(W,"href","#overview"),d(I,"class","relative group"),d(re,"href","https://arxiv.org/abs/2003.13678"),d(re,"rel","nofollow"),d(Ce,"href","/docs/transformers/pr_16981/en/model_doc/auto#transformers.AutoFeatureExtractor"),d(ie,"href","https://arxiv.org/abs/2103.01988"),d(ie,"rel","nofollow"),d(le,"href","https://huggingface.co/facebook/regnet-y-10b-seer"),d(le,"rel","nofollow"),d(de,"href","https://huggingface.co/Francesco"),d(de,"rel","nofollow"),d(ce,"href","https://github.com/facebookresearch/pycls"),d(ce,"rel","nofollow"),d(V,"id","transformers.RegNetConfig"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#transformers.RegNetConfig"),d(M,"class","relative group"),d(Ae,"href","/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetModel"),d(he,"href","https://huggingface.co/facebook/regnet-y-040"),d(he,"rel","nofollow"),d(Pe,"href","/docs/transformers/pr_16981/en/main_classes/configuration#transformers.PretrainedConfig"),d(Fe,"href","/docs/transformers/pr_16981/en/main_classes/configuration#transformers.PretrainedConfig"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(K,"id","transformers.RegNetModel"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#transformers.RegNetModel"),d(D,"class","relative group"),d(_e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(_e,"rel","nofollow"),d(Ie,"href","/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetModel"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(X,"id","transformers.RegNetForImageClassification"),d(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(X,"href","#transformers.RegNetForImageClassification"),d(O,"class","relative group"),d(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ye,"rel","nofollow"),d(Me,"href","/docs/transformers/pr_16981/en/model_doc/regnet#transformers.RegNetForImageClassification"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,p){t(document.head,c),u(e,w,p),u(e,_,p),t(_,f),t(f,v),y(a,v,null),t(_,h),t(_,A),t(A,jt),u(e,nt,p),u(e,I,p),t(I,W),t(W,We),y(se,We,null),t(I,Ct),t(I,Ue),t(Ue,At),u(e,it,p),u(e,U,p),t(U,Pt),t(U,re),t(re,Ft),t(U,It),u(e,lt,p),u(e,Ee,p),t(Ee,Mt),u(e,dt,p),u(e,ke,p),t(ke,qt),u(e,ct,p),u(e,Te,p),t(Te,He),t(He,zt),u(e,pt,p),u(e,je,p),t(je,Dt),u(e,ft,p),u(e,H,p),t(H,ne),t(ne,St),t(ne,Ce),t(Ce,Ot),t(ne,Lt),t(H,Wt),t(H,B),t(B,Ut),t(B,ie),t(ie,Ht),t(B,Bt),t(B,le),t(le,Vt),u(e,ht,p),u(e,F,p),t(F,Gt),t(F,de),t(de,Kt),t(F,Jt),t(F,ce),t(ce,Qt),t(F,Xt),u(e,gt,p),u(e,M,p),t(M,V),t(V,Be),y(pe,Be,null),t(M,Yt),t(M,Ve),t(Ve,Zt),u(e,mt,p),u(e,E,p),y(fe,E,null),t(E,eo),t(E,q),t(q,to),t(q,Ae),t(Ae,oo),t(q,ao),t(q,he),t(he,so),t(q,ro),t(E,no),t(E,z),t(z,io),t(z,Pe),t(Pe,lo),t(z,co),t(z,Fe),t(Fe,po),t(z,fo),t(E,ho),y(G,E,null),u(e,ut,p),u(e,D,p),t(D,K),t(K,Ge),y(ge,Ge,null),t(D,go),t(D,Ke),t(Ke,mo),u(e,_t,p),u(e,P,p),y(me,P,null),t(P,uo),t(P,ue),t(ue,_o),t(ue,_e),t(_e,vo),t(ue,wo),t(P,bo),t(P,j),y(ve,j,null),t(j,$o),t(j,S),t(S,yo),t(S,Ie),t(Ie,No),t(S,Ro),t(S,Je),t(Je,xo),t(S,Eo),t(j,ko),y(J,j,null),t(j,To),y(Q,j,null),u(e,vt,p),u(e,O,p),t(O,X),t(X,Qe),y(we,Qe,null),t(O,jo),t(O,Xe),t(Xe,Co),u(e,wt,p),u(e,k,p),y(be,k,null),t(k,Ao),t(k,Ye),t(Ye,Po),t(k,Fo),t(k,$e),t($e,Io),t($e,ye),t(ye,Mo),t($e,qo),t(k,zo),t(k,C),y(Ne,C,null),t(C,Do),t(C,L),t(L,So),t(L,Me),t(Me,Oo),t(L,Lo),t(L,Ze),t(Ze,Wo),t(L,Uo),t(C,Ho),y(Y,C,null),t(C,Bo),y(Z,C,null),bt=!0},p(e,[p]){const Re={};p&2&&(Re.$$scope={dirty:p,ctx:e}),G.$set(Re);const et={};p&2&&(et.$$scope={dirty:p,ctx:e}),J.$set(et);const tt={};p&2&&(tt.$$scope={dirty:p,ctx:e}),Q.$set(tt);const ot={};p&2&&(ot.$$scope={dirty:p,ctx:e}),Y.$set(ot);const xe={};p&2&&(xe.$$scope={dirty:p,ctx:e}),Z.$set(xe)},i(e){bt||(N(a.$$.fragment,e),N(se.$$.fragment,e),N(pe.$$.fragment,e),N(fe.$$.fragment,e),N(G.$$.fragment,e),N(ge.$$.fragment,e),N(me.$$.fragment,e),N(ve.$$.fragment,e),N(J.$$.fragment,e),N(Q.$$.fragment,e),N(we.$$.fragment,e),N(be.$$.fragment,e),N(Ne.$$.fragment,e),N(Y.$$.fragment,e),N(Z.$$.fragment,e),bt=!0)},o(e){R(a.$$.fragment,e),R(se.$$.fragment,e),R(pe.$$.fragment,e),R(fe.$$.fragment,e),R(G.$$.fragment,e),R(ge.$$.fragment,e),R(me.$$.fragment,e),R(ve.$$.fragment,e),R(J.$$.fragment,e),R(Q.$$.fragment,e),R(we.$$.fragment,e),R(be.$$.fragment,e),R(Ne.$$.fragment,e),R(Y.$$.fragment,e),R(Z.$$.fragment,e),bt=!1},d(e){o(c),e&&o(w),e&&o(_),x(a),e&&o(nt),e&&o(I),x(se),e&&o(it),e&&o(U),e&&o(lt),e&&o(Ee),e&&o(dt),e&&o(ke),e&&o(ct),e&&o(Te),e&&o(pt),e&&o(je),e&&o(ft),e&&o(H),e&&o(ht),e&&o(F),e&&o(gt),e&&o(M),x(pe),e&&o(mt),e&&o(E),x(fe),x(G),e&&o(ut),e&&o(D),x(ge),e&&o(_t),e&&o(P),x(me),x(ve),x(J),x(Q),e&&o(vt),e&&o(O),x(we),e&&o(wt),e&&o(k),x(be),x(Ne),x(Y),x(Z)}}}const La={local:"regnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.RegNetConfig",title:"RegNetConfig"},{local:"transformers.RegNetModel",title:"RegNetModel"},{local:"transformers.RegNetForImageClassification",title:"RegNetForImageClassification"}],title:"RegNet"};function Wa(T){return Ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ja extends Ca{constructor(c){super();Aa(this,c,Wa,Oa,Pa,{})}}export{Ja as default,La as metadata};
