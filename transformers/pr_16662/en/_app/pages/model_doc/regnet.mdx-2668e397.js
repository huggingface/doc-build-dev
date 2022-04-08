import{S as Oa,i as La,s as Wa,e as a,k as c,w,t as n,M as Ua,c as s,d as o,m as h,a as r,x as b,h as i,b as l,F as e,g as p,y,q as $,o as N,B as R,v as Ha}from"../../chunks/vendor-6b77c823.js";import{T as Sa}from"../../chunks/Tip-39098574.js";import{D as st}from"../../chunks/Docstring-af1d0ae0.js";import{C as Zo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as rt}from"../../chunks/IconCopyLink-7a11ce68.js";function Ba(Re){let g,j,f,_,k;return{c(){g=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){g=s(m,"P",{});var u=r(g);j=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var C=r(f);_=i(C,"Module"),C.forEach(o),k=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(m,u){p(m,g,u),e(g,j),e(g,f),e(f,_),e(g,k)},d(m){m&&o(g)}}}function Va(Re){let g,j,f,_,k;return{c(){g=a("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){g=s(m,"P",{});var u=r(g);j=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var C=r(f);_=i(C,"Module"),C.forEach(o),k=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(m,u){p(m,g,u),e(g,j),e(g,f),e(f,_),e(g,k)},d(m){m&&o(g)}}}function Ga(Re){let g,j,f,_,k,m,u,C,Ct,nt,q,H,Le,ee,At,We,Pt,it,B,Ft,te,It,Mt,lt,Ee,qt,dt,xe,zt,ct,ke,Ue,Dt,ht,Te,St,pt,V,oe,Ot,je,Lt,Wt,Ut,G,Ht,ae,Bt,Vt,se,Gt,gt,P,Kt,re,Jt,Qt,ne,Xt,Yt,ft,z,K,He,ie,Zt,Be,eo,mt,v,le,to,D,oo,Ce,ao,so,de,ro,no,io,S,lo,Ae,co,ho,Pe,po,go,fo,Ve,mo,uo,ce,ut,O,J,Ge,he,_o,Ke,vo,_t,A,pe,wo,ge,bo,fe,yo,$o,No,E,me,Ro,L,Eo,Fe,xo,ko,Je,To,jo,Co,Q,Ao,Qe,Po,Fo,ue,vt,W,X,Xe,_e,Io,Ye,Mo,wt,T,ve,qo,Ze,zo,Do,we,So,be,Oo,Lo,Wo,x,ye,Uo,U,Ho,Ie,Bo,Vo,et,Go,Ko,Jo,Y,Qo,tt,Xo,Yo,$e,bt;return m=new rt({}),ee=new rt({}),ie=new rt({}),le=new st({props:{name:"class transformers.RegNetConfig",anchor:"transformers.RegNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 32"},{name:"hidden_sizes",val:" = [128, 192, 512, 1088]"},{name:"depths",val:" = [2, 6, 12, 2]"},{name:"groups_width",val:" = 64"},{name:"layer_type",val:" = 'y'"},{name:"hidden_act",val:" = 'relu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16662/src/transformers/models/regnet/configuration_regnet.py#L28",parametersDescription:[{anchor:"transformers.RegNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.RegNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.RegNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.RegNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.RegNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;y&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;x&quot; or </code>&#x201C;y&#x201D;<code>. An </code>x<code>layer is a ResNet&apos;s BottleNeck layer with</code>reduction<code>fixed to</code>1<code>. While a </code>y<code>layer is a</code>x\` but with squeeze and excitation. Please refer to the
paper for a detailed explanation of how these layers were constructed.`,name:"layer_type"},{anchor:"transformers.RegNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.RegNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}]}}),ce=new Zo({props:{code:`from transformers import RegNetConfig, RegNetModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),he=new rt({}),pe=new st({props:{name:"class transformers.RegNetModel",anchor:"transformers.RegNetModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16662/src/transformers/models/regnet/modeling_regnet.py#L321",parametersDescription:[{anchor:"transformers.RegNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16662/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),me=new st({props:{name:"forward",anchor:"transformers.RegNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16662/src/transformers/models/regnet/modeling_regnet.py#L331",parametersDescription:[{anchor:"transformers.RegNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16662/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16662/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetConfig"
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
`}}),Q=new Sa({props:{$$slots:{default:[Ba]},$$scope:{ctx:Re}}}),ue=new Zo({props:{code:`from transformers import AutoFeatureExtractor, RegNetModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">1088</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),_e=new rt({}),ve=new st({props:{name:"class transformers.RegNetForImageClassification",anchor:"transformers.RegNetForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16662/src/transformers/models/regnet/modeling_regnet.py#L376",parametersDescription:[{anchor:"transformers.RegNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16662/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ye=new st({props:{name:"forward",anchor:"transformers.RegNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16662/src/transformers/models/regnet/modeling_regnet.py#L389",parametersDescription:[{anchor:"transformers.RegNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16662/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16662/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RegNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetConfig"
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
`}}),Y=new Sa({props:{$$slots:{default:[Va]},$$scope:{ctx:Re}}}),$e=new Zo({props:{code:`from transformers import AutoFeatureExtractor, RegNetForImageClassification
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
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){g=a("meta"),j=c(),f=a("h1"),_=a("a"),k=a("span"),w(m.$$.fragment),u=c(),C=a("span"),Ct=n("RegNet"),nt=c(),q=a("h2"),H=a("a"),Le=a("span"),w(ee.$$.fragment),At=c(),We=a("span"),Pt=n("Overview"),it=c(),B=a("p"),Ft=n("The RegNet model was proposed in "),te=a("a"),It=n("Designing Network Design Spaces"),Mt=n(" by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),lt=c(),Ee=a("p"),qt=n("The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),dt=c(),xe=a("p"),zt=n("The abstract from the paper is the following:"),ct=c(),ke=a("p"),Ue=a("em"),Dt=n("In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),ht=c(),Te=a("p"),St=n("Tips:"),pt=c(),V=a("ul"),oe=a("li"),Ot=n("One can use "),je=a("a"),Lt=n("AutoFeatureExtractor"),Wt=n(" to prepare images for the model."),Ut=c(),G=a("li"),Ht=n("The huge 10B model from "),ae=a("a"),Bt=n("Self-supervised Pretraining of Visual Features in the Wild"),Vt=n(", trained on one billion Instagram images, is available on the "),se=a("a"),Gt=n("hub"),gt=c(),P=a("p"),Kt=n("This model was contributed by "),re=a("a"),Jt=n("Francesco"),Qt=n(`.
The original code can be found `),ne=a("a"),Xt=n("here"),Yt=n("."),ft=c(),z=a("h2"),K=a("a"),He=a("span"),w(ie.$$.fragment),Zt=c(),Be=a("span"),eo=n("RegNetConfig"),mt=c(),v=a("div"),w(le.$$.fragment),to=c(),D=a("p"),oo=n("This is the configuration class to store the configuration of a "),Ce=a("a"),ao=n("RegNetModel"),so=n(`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the
`),de=a("a"),ro=n("facebook/regnet-y-40"),no=n(" architecture."),io=c(),S=a("p"),lo=n("Configuration objects inherit from "),Ae=a("a"),co=n("PretrainedConfig"),ho=n(` and can be used to control the model outputs. Read the
documentation from `),Pe=a("a"),po=n("PretrainedConfig"),go=n(" for more information."),fo=c(),Ve=a("p"),mo=n("Example:"),uo=c(),w(ce.$$.fragment),ut=c(),O=a("h2"),J=a("a"),Ge=a("span"),w(he.$$.fragment),_o=c(),Ke=a("span"),vo=n("RegNetModel"),_t=c(),A=a("div"),w(pe.$$.fragment),wo=c(),ge=a("p"),bo=n(`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),fe=a("a"),yo=n("torch.nn.Module"),$o=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),No=c(),E=a("div"),w(me.$$.fragment),Ro=c(),L=a("p"),Eo=n("The "),Fe=a("a"),xo=n("RegNetModel"),ko=n(" forward method, overrides the "),Je=a("code"),To=n("__call__"),jo=n(" special method."),Co=c(),w(Q.$$.fragment),Ao=c(),Qe=a("p"),Po=n("Example:"),Fo=c(),w(ue.$$.fragment),vt=c(),W=a("h2"),X=a("a"),Xe=a("span"),w(_e.$$.fragment),Io=c(),Ye=a("span"),Mo=n("RegNetForImageClassification"),wt=c(),T=a("div"),w(ve.$$.fragment),qo=c(),Ze=a("p"),zo=n(`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Do=c(),we=a("p"),So=n("This model is a PyTorch "),be=a("a"),Oo=n("torch.nn.Module"),Lo=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wo=c(),x=a("div"),w(ye.$$.fragment),Uo=c(),U=a("p"),Ho=n("The "),Ie=a("a"),Bo=n("RegNetForImageClassification"),Vo=n(" forward method, overrides the "),et=a("code"),Go=n("__call__"),Ko=n(" special method."),Jo=c(),w(Y.$$.fragment),Qo=c(),tt=a("p"),Xo=n("Example:"),Yo=c(),w($e.$$.fragment),this.h()},l(t){const d=Ua('[data-svelte="svelte-1phssyn"]',document.head);g=s(d,"META",{name:!0,content:!0}),d.forEach(o),j=h(t),f=s(t,"H1",{class:!0});var Ne=r(f);_=s(Ne,"A",{id:!0,class:!0,href:!0});var ot=r(_);k=s(ot,"SPAN",{});var ea=r(k);b(m.$$.fragment,ea),ea.forEach(o),ot.forEach(o),u=h(Ne),C=s(Ne,"SPAN",{});var ta=r(C);Ct=i(ta,"RegNet"),ta.forEach(o),Ne.forEach(o),nt=h(t),q=s(t,"H2",{class:!0});var yt=r(q);H=s(yt,"A",{id:!0,class:!0,href:!0});var oa=r(H);Le=s(oa,"SPAN",{});var aa=r(Le);b(ee.$$.fragment,aa),aa.forEach(o),oa.forEach(o),At=h(yt),We=s(yt,"SPAN",{});var sa=r(We);Pt=i(sa,"Overview"),sa.forEach(o),yt.forEach(o),it=h(t),B=s(t,"P",{});var $t=r(B);Ft=i($t,"The RegNet model was proposed in "),te=s($t,"A",{href:!0,rel:!0});var ra=r(te);It=i(ra,"Designing Network Design Spaces"),ra.forEach(o),Mt=i($t," by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),$t.forEach(o),lt=h(t),Ee=s(t,"P",{});var na=r(Ee);qt=i(na,"The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),na.forEach(o),dt=h(t),xe=s(t,"P",{});var ia=r(xe);zt=i(ia,"The abstract from the paper is the following:"),ia.forEach(o),ct=h(t),ke=s(t,"P",{});var la=r(ke);Ue=s(la,"EM",{});var da=r(Ue);Dt=i(da,"In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),da.forEach(o),la.forEach(o),ht=h(t),Te=s(t,"P",{});var ca=r(Te);St=i(ca,"Tips:"),ca.forEach(o),pt=h(t),V=s(t,"UL",{});var Nt=r(V);oe=s(Nt,"LI",{});var Rt=r(oe);Ot=i(Rt,"One can use "),je=s(Rt,"A",{href:!0});var ha=r(je);Lt=i(ha,"AutoFeatureExtractor"),ha.forEach(o),Wt=i(Rt," to prepare images for the model."),Rt.forEach(o),Ut=h(Nt),G=s(Nt,"LI",{});var at=r(G);Ht=i(at,"The huge 10B model from "),ae=s(at,"A",{href:!0,rel:!0});var pa=r(ae);Bt=i(pa,"Self-supervised Pretraining of Visual Features in the Wild"),pa.forEach(o),Vt=i(at,", trained on one billion Instagram images, is available on the "),se=s(at,"A",{href:!0,rel:!0});var ga=r(se);Gt=i(ga,"hub"),ga.forEach(o),at.forEach(o),Nt.forEach(o),gt=h(t),P=s(t,"P",{});var Me=r(P);Kt=i(Me,"This model was contributed by "),re=s(Me,"A",{href:!0,rel:!0});var fa=r(re);Jt=i(fa,"Francesco"),fa.forEach(o),Qt=i(Me,`.
The original code can be found `),ne=s(Me,"A",{href:!0,rel:!0});var ma=r(ne);Xt=i(ma,"here"),ma.forEach(o),Yt=i(Me,"."),Me.forEach(o),ft=h(t),z=s(t,"H2",{class:!0});var Et=r(z);K=s(Et,"A",{id:!0,class:!0,href:!0});var ua=r(K);He=s(ua,"SPAN",{});var _a=r(He);b(ie.$$.fragment,_a),_a.forEach(o),ua.forEach(o),Zt=h(Et),Be=s(Et,"SPAN",{});var va=r(Be);eo=i(va,"RegNetConfig"),va.forEach(o),Et.forEach(o),mt=h(t),v=s(t,"DIV",{class:!0});var F=r(v);b(le.$$.fragment,F),to=h(F),D=s(F,"P",{});var qe=r(D);oo=i(qe,"This is the configuration class to store the configuration of a "),Ce=s(qe,"A",{href:!0});var wa=r(Ce);ao=i(wa,"RegNetModel"),wa.forEach(o),so=i(qe,`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the
`),de=s(qe,"A",{href:!0,rel:!0});var ba=r(de);ro=i(ba,"facebook/regnet-y-40"),ba.forEach(o),no=i(qe," architecture."),qe.forEach(o),io=h(F),S=s(F,"P",{});var ze=r(S);lo=i(ze,"Configuration objects inherit from "),Ae=s(ze,"A",{href:!0});var ya=r(Ae);co=i(ya,"PretrainedConfig"),ya.forEach(o),ho=i(ze,` and can be used to control the model outputs. Read the
documentation from `),Pe=s(ze,"A",{href:!0});var $a=r(Pe);po=i($a,"PretrainedConfig"),$a.forEach(o),go=i(ze," for more information."),ze.forEach(o),fo=h(F),Ve=s(F,"P",{});var Na=r(Ve);mo=i(Na,"Example:"),Na.forEach(o),uo=h(F),b(ce.$$.fragment,F),F.forEach(o),ut=h(t),O=s(t,"H2",{class:!0});var xt=r(O);J=s(xt,"A",{id:!0,class:!0,href:!0});var Ra=r(J);Ge=s(Ra,"SPAN",{});var Ea=r(Ge);b(he.$$.fragment,Ea),Ea.forEach(o),Ra.forEach(o),_o=h(xt),Ke=s(xt,"SPAN",{});var xa=r(Ke);vo=i(xa,"RegNetModel"),xa.forEach(o),xt.forEach(o),_t=h(t),A=s(t,"DIV",{class:!0});var De=r(A);b(pe.$$.fragment,De),wo=h(De),ge=s(De,"P",{});var kt=r(ge);bo=i(kt,`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),fe=s(kt,"A",{href:!0,rel:!0});var ka=r(fe);yo=i(ka,"torch.nn.Module"),ka.forEach(o),$o=i(kt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kt.forEach(o),No=h(De),E=s(De,"DIV",{class:!0});var I=r(E);b(me.$$.fragment,I),Ro=h(I),L=s(I,"P",{});var Se=r(L);Eo=i(Se,"The "),Fe=s(Se,"A",{href:!0});var Ta=r(Fe);xo=i(Ta,"RegNetModel"),Ta.forEach(o),ko=i(Se," forward method, overrides the "),Je=s(Se,"CODE",{});var ja=r(Je);To=i(ja,"__call__"),ja.forEach(o),jo=i(Se," special method."),Se.forEach(o),Co=h(I),b(Q.$$.fragment,I),Ao=h(I),Qe=s(I,"P",{});var Ca=r(Qe);Po=i(Ca,"Example:"),Ca.forEach(o),Fo=h(I),b(ue.$$.fragment,I),I.forEach(o),De.forEach(o),vt=h(t),W=s(t,"H2",{class:!0});var Tt=r(W);X=s(Tt,"A",{id:!0,class:!0,href:!0});var Aa=r(X);Xe=s(Aa,"SPAN",{});var Pa=r(Xe);b(_e.$$.fragment,Pa),Pa.forEach(o),Aa.forEach(o),Io=h(Tt),Ye=s(Tt,"SPAN",{});var Fa=r(Ye);Mo=i(Fa,"RegNetForImageClassification"),Fa.forEach(o),Tt.forEach(o),wt=h(t),T=s(t,"DIV",{class:!0});var Z=r(T);b(ve.$$.fragment,Z),qo=h(Z),Ze=s(Z,"P",{});var Ia=r(Ze);zo=i(Ia,`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Ia.forEach(o),Do=h(Z),we=s(Z,"P",{});var jt=r(we);So=i(jt,"This model is a PyTorch "),be=s(jt,"A",{href:!0,rel:!0});var Ma=r(be);Oo=i(Ma,"torch.nn.Module"),Ma.forEach(o),Lo=i(jt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jt.forEach(o),Wo=h(Z),x=s(Z,"DIV",{class:!0});var M=r(x);b(ye.$$.fragment,M),Uo=h(M),U=s(M,"P",{});var Oe=r(U);Ho=i(Oe,"The "),Ie=s(Oe,"A",{href:!0});var qa=r(Ie);Bo=i(qa,"RegNetForImageClassification"),qa.forEach(o),Vo=i(Oe," forward method, overrides the "),et=s(Oe,"CODE",{});var za=r(et);Go=i(za,"__call__"),za.forEach(o),Ko=i(Oe," special method."),Oe.forEach(o),Jo=h(M),b(Y.$$.fragment,M),Qo=h(M),tt=s(M,"P",{});var Da=r(tt);Xo=i(Da,"Example:"),Da.forEach(o),Yo=h(M),b($e.$$.fragment,M),M.forEach(o),Z.forEach(o),this.h()},h(){l(g,"name","hf:doc:metadata"),l(g,"content",JSON.stringify(Ka)),l(_,"id","regnet"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#regnet"),l(f,"class","relative group"),l(H,"id","overview"),l(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(H,"href","#overview"),l(q,"class","relative group"),l(te,"href","https://arxiv.org/abs/2003.13678"),l(te,"rel","nofollow"),l(je,"href","/docs/transformers/pr_16662/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(ae,"href","https://arxiv.org/abs/2103.01988"),l(ae,"rel","nofollow"),l(se,"href","https://huggingface.co/facebook/regnet-y-10b-seer"),l(se,"rel","nofollow"),l(re,"href","https://huggingface.co/Francesco"),l(re,"rel","nofollow"),l(ne,"href","https://github.com/facebookresearch/pycls"),l(ne,"rel","nofollow"),l(K,"id","transformers.RegNetConfig"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.RegNetConfig"),l(z,"class","relative group"),l(Ce,"href","/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetModel"),l(de,"href","https://huggingface.co/facebook/regnet-y-40"),l(de,"rel","nofollow"),l(Ae,"href","/docs/transformers/pr_16662/en/main_classes/configuration#transformers.PretrainedConfig"),l(Pe,"href","/docs/transformers/pr_16662/en/main_classes/configuration#transformers.PretrainedConfig"),l(v,"class","docstring"),l(J,"id","transformers.RegNetModel"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#transformers.RegNetModel"),l(O,"class","relative group"),l(fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(fe,"rel","nofollow"),l(Fe,"href","/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetModel"),l(E,"class","docstring"),l(A,"class","docstring"),l(X,"id","transformers.RegNetForImageClassification"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#transformers.RegNetForImageClassification"),l(W,"class","relative group"),l(be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(be,"rel","nofollow"),l(Ie,"href","/docs/transformers/pr_16662/en/model_doc/regnet#transformers.RegNetForImageClassification"),l(x,"class","docstring"),l(T,"class","docstring")},m(t,d){e(document.head,g),p(t,j,d),p(t,f,d),e(f,_),e(_,k),y(m,k,null),e(f,u),e(f,C),e(C,Ct),p(t,nt,d),p(t,q,d),e(q,H),e(H,Le),y(ee,Le,null),e(q,At),e(q,We),e(We,Pt),p(t,it,d),p(t,B,d),e(B,Ft),e(B,te),e(te,It),e(B,Mt),p(t,lt,d),p(t,Ee,d),e(Ee,qt),p(t,dt,d),p(t,xe,d),e(xe,zt),p(t,ct,d),p(t,ke,d),e(ke,Ue),e(Ue,Dt),p(t,ht,d),p(t,Te,d),e(Te,St),p(t,pt,d),p(t,V,d),e(V,oe),e(oe,Ot),e(oe,je),e(je,Lt),e(oe,Wt),e(V,Ut),e(V,G),e(G,Ht),e(G,ae),e(ae,Bt),e(G,Vt),e(G,se),e(se,Gt),p(t,gt,d),p(t,P,d),e(P,Kt),e(P,re),e(re,Jt),e(P,Qt),e(P,ne),e(ne,Xt),e(P,Yt),p(t,ft,d),p(t,z,d),e(z,K),e(K,He),y(ie,He,null),e(z,Zt),e(z,Be),e(Be,eo),p(t,mt,d),p(t,v,d),y(le,v,null),e(v,to),e(v,D),e(D,oo),e(D,Ce),e(Ce,ao),e(D,so),e(D,de),e(de,ro),e(D,no),e(v,io),e(v,S),e(S,lo),e(S,Ae),e(Ae,co),e(S,ho),e(S,Pe),e(Pe,po),e(S,go),e(v,fo),e(v,Ve),e(Ve,mo),e(v,uo),y(ce,v,null),p(t,ut,d),p(t,O,d),e(O,J),e(J,Ge),y(he,Ge,null),e(O,_o),e(O,Ke),e(Ke,vo),p(t,_t,d),p(t,A,d),y(pe,A,null),e(A,wo),e(A,ge),e(ge,bo),e(ge,fe),e(fe,yo),e(ge,$o),e(A,No),e(A,E),y(me,E,null),e(E,Ro),e(E,L),e(L,Eo),e(L,Fe),e(Fe,xo),e(L,ko),e(L,Je),e(Je,To),e(L,jo),e(E,Co),y(Q,E,null),e(E,Ao),e(E,Qe),e(Qe,Po),e(E,Fo),y(ue,E,null),p(t,vt,d),p(t,W,d),e(W,X),e(X,Xe),y(_e,Xe,null),e(W,Io),e(W,Ye),e(Ye,Mo),p(t,wt,d),p(t,T,d),y(ve,T,null),e(T,qo),e(T,Ze),e(Ze,zo),e(T,Do),e(T,we),e(we,So),e(we,be),e(be,Oo),e(we,Lo),e(T,Wo),e(T,x),y(ye,x,null),e(x,Uo),e(x,U),e(U,Ho),e(U,Ie),e(Ie,Bo),e(U,Vo),e(U,et),e(et,Go),e(U,Ko),e(x,Jo),y(Y,x,null),e(x,Qo),e(x,tt),e(tt,Xo),e(x,Yo),y($e,x,null),bt=!0},p(t,[d]){const Ne={};d&2&&(Ne.$$scope={dirty:d,ctx:t}),Q.$set(Ne);const ot={};d&2&&(ot.$$scope={dirty:d,ctx:t}),Y.$set(ot)},i(t){bt||($(m.$$.fragment,t),$(ee.$$.fragment,t),$(ie.$$.fragment,t),$(le.$$.fragment,t),$(ce.$$.fragment,t),$(he.$$.fragment,t),$(pe.$$.fragment,t),$(me.$$.fragment,t),$(Q.$$.fragment,t),$(ue.$$.fragment,t),$(_e.$$.fragment,t),$(ve.$$.fragment,t),$(ye.$$.fragment,t),$(Y.$$.fragment,t),$($e.$$.fragment,t),bt=!0)},o(t){N(m.$$.fragment,t),N(ee.$$.fragment,t),N(ie.$$.fragment,t),N(le.$$.fragment,t),N(ce.$$.fragment,t),N(he.$$.fragment,t),N(pe.$$.fragment,t),N(me.$$.fragment,t),N(Q.$$.fragment,t),N(ue.$$.fragment,t),N(_e.$$.fragment,t),N(ve.$$.fragment,t),N(ye.$$.fragment,t),N(Y.$$.fragment,t),N($e.$$.fragment,t),bt=!1},d(t){o(g),t&&o(j),t&&o(f),R(m),t&&o(nt),t&&o(q),R(ee),t&&o(it),t&&o(B),t&&o(lt),t&&o(Ee),t&&o(dt),t&&o(xe),t&&o(ct),t&&o(ke),t&&o(ht),t&&o(Te),t&&o(pt),t&&o(V),t&&o(gt),t&&o(P),t&&o(ft),t&&o(z),R(ie),t&&o(mt),t&&o(v),R(le),R(ce),t&&o(ut),t&&o(O),R(he),t&&o(_t),t&&o(A),R(pe),R(me),R(Q),R(ue),t&&o(vt),t&&o(W),R(_e),t&&o(wt),t&&o(T),R(ve),R(ye),R(Y),R($e)}}}const Ka={local:"regnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.RegNetConfig",title:"RegNetConfig"},{local:"transformers.RegNetModel",title:"RegNetModel"},{local:"transformers.RegNetForImageClassification",title:"RegNetForImageClassification"}],title:"RegNet"};function Ja(Re){return Ha(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ts extends Oa{constructor(g){super();La(this,g,Ja,Ga,Wa,{})}}export{ts as default,Ka as metadata};
