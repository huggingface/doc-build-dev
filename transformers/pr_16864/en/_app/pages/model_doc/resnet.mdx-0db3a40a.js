import{S as oa,i as sa,s as aa,e as s,k as c,w as b,t as n,M as ra,c as a,d as o,m as h,a as r,x as y,h as i,b as l,N as na,F as e,g as p,y as $,q as N,o as R,B as C,v as ia}from"../../chunks/vendor-6b77c823.js";import{T as ta}from"../../chunks/Tip-39098574.js";import{D as lt}from"../../chunks/Docstring-1088f2fb.js";import{C as cs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";function la(Ce){let f,k,m,_,T;return{c(){f=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),_=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=a(u,"P",{});var g=r(f);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(g,"CODE",{});var A=r(m);_=i(A,"Module"),A.forEach(o),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,f,g),e(f,k),e(f,m),e(m,_),e(f,T)},d(u){u&&o(f)}}}function da(Ce){let f,k,m,_,T;return{c(){f=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),_=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=a(u,"P",{});var g=r(f);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(g,"CODE",{});var A=r(m);_=i(A,"Module"),A.forEach(o),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,f,g),e(f,k),e(f,m),e(m,_),e(f,T)},d(u){u&&o(f)}}}function ca(Ce){let f,k,m,_,T,u,g,A,Pt,ct,S,G,Ve,ee,qt,He,Ot,ht,v,St,te,Dt,zt,oe,Lt,Wt,Ue,Vt,Ht,Ge,Ut,Gt,Be,Bt,Jt,pt,Ee,Kt,ft,xe,Xt,mt,Te,Je,Zt,ut,je,Qt,gt,ke,se,Yt,Ie,eo,to,_t,B,oo,ae,so,ao,vt,re,hs,wt,M,ro,ne,no,io,ie,lo,co,bt,D,J,Ke,le,ho,Xe,po,yt,w,de,fo,z,mo,Ae,uo,go,ce,_o,vo,wo,L,bo,Fe,yo,$o,Me,No,Ro,Co,Ze,Eo,xo,he,$t,W,K,Qe,pe,To,Ye,jo,Nt,F,fe,ko,me,Io,ue,Ao,Fo,Mo,E,ge,Po,V,qo,Pe,Oo,So,et,Do,zo,Lo,X,Wo,tt,Vo,Ho,_e,Rt,H,Z,ot,ve,Uo,st,Go,Ct,j,we,Bo,at,Jo,Ko,be,Xo,ye,Zo,Qo,Yo,x,$e,es,U,ts,qe,os,ss,rt,as,rs,ns,Q,is,nt,ls,ds,Ne,Et;return u=new dt({}),ee=new dt({}),le=new dt({}),de=new lt({props:{name:"class transformers.ResNetConfig",anchor:"transformers.ResNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 64"},{name:"hidden_sizes",val:" = [256, 512, 1024, 2048]"},{name:"depths",val:" = [3, 4, 6, 3]"},{name:"layer_type",val:" = 'bottleneck'"},{name:"hidden_act",val:" = 'relu'"},{name:"downsample_in_first_stage",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ResNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ResNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.ResNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.ResNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.ResNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bottleneck&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;basic&quot;</code> (used for smaller models, like resnet-18 or resnet-34) or
<code>&quot;bottleneck&quot;</code> (used for larger models like resnet-50 and above).`,name:"layer_type"},{anchor:"transformers.ResNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.ResNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}],source:"https://github.com/huggingface/transformers/blob/pr_16864/src/transformers/models/resnet/configuration_resnet.py#L28"}}),he=new cs({props:{code:`from transformers import ResNetConfig, ResNetModel

# Initializing a ResNet resnet-50 style configuration
configuration = ResNetConfig()
# Initializing a model from the resnet-50 style configuration
model = ResNetModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ResNetConfig, ResNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ResNet resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ResNetConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),pe=new dt({}),fe=new lt({props:{name:"class transformers.ResNetModel",anchor:"transformers.ResNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ResNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetConfig">ResNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16864/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16864/src/transformers/models/resnet/modeling_resnet.py#L268"}}),ge=new lt({props:{name:"forward",anchor:"transformers.ResNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ResNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16864/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.ResNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ResNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16864/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16864/src/transformers/models/resnet/modeling_resnet.py#L278",returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetConfig"
>ResNetConfig</a>) and inputs.</p>
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
`}}),X=new ta({props:{$$slots:{default:[la]},$$scope:{ctx:Ce}}}),_e=new cs({props:{code:`from transformers import AutoFeatureExtractor, ResNetModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")
model = ResNetModel.from_pretrained("microsoft/resnet-50")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ResNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2048</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),ve=new dt({}),we=new lt({props:{name:"class transformers.ResNetForImageClassification",anchor:"transformers.ResNetForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ResNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetConfig">ResNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16864/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16864/src/transformers/models/resnet/modeling_resnet.py#L322"}}),$e=new lt({props:{name:"forward",anchor:"transformers.ResNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"}],parametersDescription:[{anchor:"transformers.ResNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16864/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.ResNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ResNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16864/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ResNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16864/src/transformers/models/resnet/modeling_resnet.py#L335",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetConfig"
>ResNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also
called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new ta({props:{$$slots:{default:[da]},$$scope:{ctx:Ce}}}),Ne=new cs({props:{code:`from transformers import AutoFeatureExtractor, ResNetForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")
model = ResNetForImageClassification.from_pretrained("microsoft/resnet-50")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ResNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tiger cat`}}),{c(){f=s("meta"),k=c(),m=s("h1"),_=s("a"),T=s("span"),b(u.$$.fragment),g=c(),A=s("span"),Pt=n("ResNet"),ct=c(),S=s("h2"),G=s("a"),Ve=s("span"),b(ee.$$.fragment),qt=c(),He=s("span"),Ot=n("Overview"),ht=c(),v=s("p"),St=n("The ResNet model was proposed in "),te=s("a"),Dt=n("Deep Residual Learning for Image Recognition"),zt=n(" by Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun. Our implementation follows the small changes made by "),oe=s("a"),Lt=n("Nvidia"),Wt=n(", we apply the "),Ue=s("code"),Vt=n("stride=2"),Ht=n(" for downsampling in bottleneck\u2019s "),Ge=s("code"),Ut=n("3x3"),Gt=n(" conv and not in the first "),Be=s("code"),Bt=n("1x1"),Jt=n(". This is generally known as \u201CResNet v1.5\u201D."),pt=c(),Ee=s("p"),Kt=n("ResNet introduced residual connections, they allow to train networks with an unseen number of layers (up to 1000). ResNet won the 2015 ILSVRC & COCO competition, one important milestone in deep computer vision."),ft=c(),xe=s("p"),Xt=n("The abstract from the paper is the following:"),mt=c(),Te=s("p"),Je=s("em"),Zt=n(`Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers---8x deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers.
The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.`),ut=c(),je=s("p"),Qt=n("Tips:"),gt=c(),ke=s("ul"),se=s("li"),Yt=n("One can use "),Ie=s("a"),eo=n("AutoFeatureExtractor"),to=n(" to prepare images for the model."),_t=c(),B=s("p"),oo=n("The figure below illustrates the architecture of ResNet. Taken from the "),ae=s("a"),so=n("original paper"),ao=n("."),vt=c(),re=s("img"),wt=c(),M=s("p"),ro=n("This model was contributed by "),ne=s("a"),no=n("Francesco"),io=n(". The original code can be found "),ie=s("a"),lo=n("here"),co=n("."),bt=c(),D=s("h2"),J=s("a"),Ke=s("span"),b(le.$$.fragment),ho=c(),Xe=s("span"),po=n("ResNetConfig"),yt=c(),w=s("div"),b(de.$$.fragment),fo=c(),z=s("p"),mo=n("This is the configuration class to store the configuration of a "),Ae=s("a"),uo=n("ResNetModel"),go=n(`. It is used to instantiate an
ResNet model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the
`),ce=s("a"),_o=n("resnet-50"),vo=n(" architecture."),wo=c(),L=s("p"),bo=n("Configuration objects inherit from "),Fe=s("a"),yo=n("PretrainedConfig"),$o=n(` and can be used to control the model outputs. Read the
documentation from `),Me=s("a"),No=n("PretrainedConfig"),Ro=n(" for more information."),Co=c(),Ze=s("p"),Eo=n("Example:"),xo=c(),b(he.$$.fragment),$t=c(),W=s("h2"),K=s("a"),Qe=s("span"),b(pe.$$.fragment),To=c(),Ye=s("span"),jo=n("ResNetModel"),Nt=c(),F=s("div"),b(fe.$$.fragment),ko=c(),me=s("p"),Io=n(`The bare ResNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ue=s("a"),Ao=n("torch.nn.Module"),Fo=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mo=c(),E=s("div"),b(ge.$$.fragment),Po=c(),V=s("p"),qo=n("The "),Pe=s("a"),Oo=n("ResNetModel"),So=n(" forward method, overrides the "),et=s("code"),Do=n("__call__"),zo=n(" special method."),Lo=c(),b(X.$$.fragment),Wo=c(),tt=s("p"),Vo=n("Example:"),Ho=c(),b(_e.$$.fragment),Rt=c(),H=s("h2"),Z=s("a"),ot=s("span"),b(ve.$$.fragment),Uo=c(),st=s("span"),Go=n("ResNetForImageClassification"),Ct=c(),j=s("div"),b(we.$$.fragment),Bo=c(),at=s("p"),Jo=n(`ResNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Ko=c(),be=s("p"),Xo=n("This model is a PyTorch "),ye=s("a"),Zo=n("torch.nn.Module"),Qo=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yo=c(),x=s("div"),b($e.$$.fragment),es=c(),U=s("p"),ts=n("The "),qe=s("a"),os=n("ResNetForImageClassification"),ss=n(" forward method, overrides the "),rt=s("code"),as=n("__call__"),rs=n(" special method."),ns=c(),b(Q.$$.fragment),is=c(),nt=s("p"),ls=n("Example:"),ds=c(),b(Ne.$$.fragment),this.h()},l(t){const d=ra('[data-svelte="svelte-1phssyn"]',document.head);f=a(d,"META",{name:!0,content:!0}),d.forEach(o),k=h(t),m=a(t,"H1",{class:!0});var Re=r(m);_=a(Re,"A",{id:!0,class:!0,href:!0});var it=r(_);T=a(it,"SPAN",{});var ps=r(T);y(u.$$.fragment,ps),ps.forEach(o),it.forEach(o),g=h(Re),A=a(Re,"SPAN",{});var fs=r(A);Pt=i(fs,"ResNet"),fs.forEach(o),Re.forEach(o),ct=h(t),S=a(t,"H2",{class:!0});var xt=r(S);G=a(xt,"A",{id:!0,class:!0,href:!0});var ms=r(G);Ve=a(ms,"SPAN",{});var us=r(Ve);y(ee.$$.fragment,us),us.forEach(o),ms.forEach(o),qt=h(xt),He=a(xt,"SPAN",{});var gs=r(He);Ot=i(gs,"Overview"),gs.forEach(o),xt.forEach(o),ht=h(t),v=a(t,"P",{});var I=r(v);St=i(I,"The ResNet model was proposed in "),te=a(I,"A",{href:!0,rel:!0});var _s=r(te);Dt=i(_s,"Deep Residual Learning for Image Recognition"),_s.forEach(o),zt=i(I," by Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun. Our implementation follows the small changes made by "),oe=a(I,"A",{href:!0,rel:!0});var vs=r(oe);Lt=i(vs,"Nvidia"),vs.forEach(o),Wt=i(I,", we apply the "),Ue=a(I,"CODE",{});var ws=r(Ue);Vt=i(ws,"stride=2"),ws.forEach(o),Ht=i(I," for downsampling in bottleneck\u2019s "),Ge=a(I,"CODE",{});var bs=r(Ge);Ut=i(bs,"3x3"),bs.forEach(o),Gt=i(I," conv and not in the first "),Be=a(I,"CODE",{});var ys=r(Be);Bt=i(ys,"1x1"),ys.forEach(o),Jt=i(I,". This is generally known as \u201CResNet v1.5\u201D."),I.forEach(o),pt=h(t),Ee=a(t,"P",{});var $s=r(Ee);Kt=i($s,"ResNet introduced residual connections, they allow to train networks with an unseen number of layers (up to 1000). ResNet won the 2015 ILSVRC & COCO competition, one important milestone in deep computer vision."),$s.forEach(o),ft=h(t),xe=a(t,"P",{});var Ns=r(xe);Xt=i(Ns,"The abstract from the paper is the following:"),Ns.forEach(o),mt=h(t),Te=a(t,"P",{});var Rs=r(Te);Je=a(Rs,"EM",{});var Cs=r(Je);Zt=i(Cs,`Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers---8x deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers.
The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.`),Cs.forEach(o),Rs.forEach(o),ut=h(t),je=a(t,"P",{});var Es=r(je);Qt=i(Es,"Tips:"),Es.forEach(o),gt=h(t),ke=a(t,"UL",{});var xs=r(ke);se=a(xs,"LI",{});var Tt=r(se);Yt=i(Tt,"One can use "),Ie=a(Tt,"A",{href:!0});var Ts=r(Ie);eo=i(Ts,"AutoFeatureExtractor"),Ts.forEach(o),to=i(Tt," to prepare images for the model."),Tt.forEach(o),xs.forEach(o),_t=h(t),B=a(t,"P",{});var jt=r(B);oo=i(jt,"The figure below illustrates the architecture of ResNet. Taken from the "),ae=a(jt,"A",{href:!0,rel:!0});var js=r(ae);so=i(js,"original paper"),js.forEach(o),ao=i(jt,"."),jt.forEach(o),vt=h(t),re=a(t,"IMG",{width:!0,src:!0}),wt=h(t),M=a(t,"P",{});var Oe=r(M);ro=i(Oe,"This model was contributed by "),ne=a(Oe,"A",{href:!0,rel:!0});var ks=r(ne);no=i(ks,"Francesco"),ks.forEach(o),io=i(Oe,". The original code can be found "),ie=a(Oe,"A",{href:!0,rel:!0});var Is=r(ie);lo=i(Is,"here"),Is.forEach(o),co=i(Oe,"."),Oe.forEach(o),bt=h(t),D=a(t,"H2",{class:!0});var kt=r(D);J=a(kt,"A",{id:!0,class:!0,href:!0});var As=r(J);Ke=a(As,"SPAN",{});var Fs=r(Ke);y(le.$$.fragment,Fs),Fs.forEach(o),As.forEach(o),ho=h(kt),Xe=a(kt,"SPAN",{});var Ms=r(Xe);po=i(Ms,"ResNetConfig"),Ms.forEach(o),kt.forEach(o),yt=h(t),w=a(t,"DIV",{class:!0});var P=r(w);y(de.$$.fragment,P),fo=h(P),z=a(P,"P",{});var Se=r(z);mo=i(Se,"This is the configuration class to store the configuration of a "),Ae=a(Se,"A",{href:!0});var Ps=r(Ae);uo=i(Ps,"ResNetModel"),Ps.forEach(o),go=i(Se,`. It is used to instantiate an
ResNet model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the
`),ce=a(Se,"A",{href:!0,rel:!0});var qs=r(ce);_o=i(qs,"resnet-50"),qs.forEach(o),vo=i(Se," architecture."),Se.forEach(o),wo=h(P),L=a(P,"P",{});var De=r(L);bo=i(De,"Configuration objects inherit from "),Fe=a(De,"A",{href:!0});var Os=r(Fe);yo=i(Os,"PretrainedConfig"),Os.forEach(o),$o=i(De,` and can be used to control the model outputs. Read the
documentation from `),Me=a(De,"A",{href:!0});var Ss=r(Me);No=i(Ss,"PretrainedConfig"),Ss.forEach(o),Ro=i(De," for more information."),De.forEach(o),Co=h(P),Ze=a(P,"P",{});var Ds=r(Ze);Eo=i(Ds,"Example:"),Ds.forEach(o),xo=h(P),y(he.$$.fragment,P),P.forEach(o),$t=h(t),W=a(t,"H2",{class:!0});var It=r(W);K=a(It,"A",{id:!0,class:!0,href:!0});var zs=r(K);Qe=a(zs,"SPAN",{});var Ls=r(Qe);y(pe.$$.fragment,Ls),Ls.forEach(o),zs.forEach(o),To=h(It),Ye=a(It,"SPAN",{});var Ws=r(Ye);jo=i(Ws,"ResNetModel"),Ws.forEach(o),It.forEach(o),Nt=h(t),F=a(t,"DIV",{class:!0});var ze=r(F);y(fe.$$.fragment,ze),ko=h(ze),me=a(ze,"P",{});var At=r(me);Io=i(At,`The bare ResNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ue=a(At,"A",{href:!0,rel:!0});var Vs=r(ue);Ao=i(Vs,"torch.nn.Module"),Vs.forEach(o),Fo=i(At,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),At.forEach(o),Mo=h(ze),E=a(ze,"DIV",{class:!0});var q=r(E);y(ge.$$.fragment,q),Po=h(q),V=a(q,"P",{});var Le=r(V);qo=i(Le,"The "),Pe=a(Le,"A",{href:!0});var Hs=r(Pe);Oo=i(Hs,"ResNetModel"),Hs.forEach(o),So=i(Le," forward method, overrides the "),et=a(Le,"CODE",{});var Us=r(et);Do=i(Us,"__call__"),Us.forEach(o),zo=i(Le," special method."),Le.forEach(o),Lo=h(q),y(X.$$.fragment,q),Wo=h(q),tt=a(q,"P",{});var Gs=r(tt);Vo=i(Gs,"Example:"),Gs.forEach(o),Ho=h(q),y(_e.$$.fragment,q),q.forEach(o),ze.forEach(o),Rt=h(t),H=a(t,"H2",{class:!0});var Ft=r(H);Z=a(Ft,"A",{id:!0,class:!0,href:!0});var Bs=r(Z);ot=a(Bs,"SPAN",{});var Js=r(ot);y(ve.$$.fragment,Js),Js.forEach(o),Bs.forEach(o),Uo=h(Ft),st=a(Ft,"SPAN",{});var Ks=r(st);Go=i(Ks,"ResNetForImageClassification"),Ks.forEach(o),Ft.forEach(o),Ct=h(t),j=a(t,"DIV",{class:!0});var Y=r(j);y(we.$$.fragment,Y),Bo=h(Y),at=a(Y,"P",{});var Xs=r(at);Jo=i(Xs,`ResNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Xs.forEach(o),Ko=h(Y),be=a(Y,"P",{});var Mt=r(be);Xo=i(Mt,"This model is a PyTorch "),ye=a(Mt,"A",{href:!0,rel:!0});var Zs=r(ye);Zo=i(Zs,"torch.nn.Module"),Zs.forEach(o),Qo=i(Mt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mt.forEach(o),Yo=h(Y),x=a(Y,"DIV",{class:!0});var O=r(x);y($e.$$.fragment,O),es=h(O),U=a(O,"P",{});var We=r(U);ts=i(We,"The "),qe=a(We,"A",{href:!0});var Qs=r(qe);os=i(Qs,"ResNetForImageClassification"),Qs.forEach(o),ss=i(We," forward method, overrides the "),rt=a(We,"CODE",{});var Ys=r(rt);as=i(Ys,"__call__"),Ys.forEach(o),rs=i(We," special method."),We.forEach(o),ns=h(O),y(Q.$$.fragment,O),is=h(O),nt=a(O,"P",{});var ea=r(nt);ls=i(ea,"Example:"),ea.forEach(o),ds=h(O),y(Ne.$$.fragment,O),O.forEach(o),Y.forEach(o),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(ha)),l(_,"id","resnet"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#resnet"),l(m,"class","relative group"),l(G,"id","overview"),l(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(G,"href","#overview"),l(S,"class","relative group"),l(te,"href","https://arxiv.org/abs/1512.03385"),l(te,"rel","nofollow"),l(oe,"href","https://catalog.ngc.nvidia.com/orgs/nvidia/resources/resnet_50_v1_5_for_pytorch"),l(oe,"rel","nofollow"),l(Ie,"href","/docs/transformers/pr_16864/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(ae,"href","https://arxiv.org/abs/1512.03385"),l(ae,"rel","nofollow"),l(re,"width","600"),na(re.src,hs="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/resnet_architecture.png")||l(re,"src",hs),l(ne,"href","https://huggingface.co/Francesco"),l(ne,"rel","nofollow"),l(ie,"href","https://github.com/KaimingHe/deep-residual-networks"),l(ie,"rel","nofollow"),l(J,"id","transformers.ResNetConfig"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#transformers.ResNetConfig"),l(D,"class","relative group"),l(Ae,"href","/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetModel"),l(ce,"href","https://huggingface.co/microsoft/resnet-50"),l(ce,"rel","nofollow"),l(Fe,"href","/docs/transformers/pr_16864/en/main_classes/configuration#transformers.PretrainedConfig"),l(Me,"href","/docs/transformers/pr_16864/en/main_classes/configuration#transformers.PretrainedConfig"),l(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"id","transformers.ResNetModel"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.ResNetModel"),l(W,"class","relative group"),l(ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ue,"rel","nofollow"),l(Pe,"href","/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetModel"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"id","transformers.ResNetForImageClassification"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.ResNetForImageClassification"),l(H,"class","relative group"),l(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ye,"rel","nofollow"),l(qe,"href","/docs/transformers/pr_16864/en/model_doc/resnet#transformers.ResNetForImageClassification"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,f),p(t,k,d),p(t,m,d),e(m,_),e(_,T),$(u,T,null),e(m,g),e(m,A),e(A,Pt),p(t,ct,d),p(t,S,d),e(S,G),e(G,Ve),$(ee,Ve,null),e(S,qt),e(S,He),e(He,Ot),p(t,ht,d),p(t,v,d),e(v,St),e(v,te),e(te,Dt),e(v,zt),e(v,oe),e(oe,Lt),e(v,Wt),e(v,Ue),e(Ue,Vt),e(v,Ht),e(v,Ge),e(Ge,Ut),e(v,Gt),e(v,Be),e(Be,Bt),e(v,Jt),p(t,pt,d),p(t,Ee,d),e(Ee,Kt),p(t,ft,d),p(t,xe,d),e(xe,Xt),p(t,mt,d),p(t,Te,d),e(Te,Je),e(Je,Zt),p(t,ut,d),p(t,je,d),e(je,Qt),p(t,gt,d),p(t,ke,d),e(ke,se),e(se,Yt),e(se,Ie),e(Ie,eo),e(se,to),p(t,_t,d),p(t,B,d),e(B,oo),e(B,ae),e(ae,so),e(B,ao),p(t,vt,d),p(t,re,d),p(t,wt,d),p(t,M,d),e(M,ro),e(M,ne),e(ne,no),e(M,io),e(M,ie),e(ie,lo),e(M,co),p(t,bt,d),p(t,D,d),e(D,J),e(J,Ke),$(le,Ke,null),e(D,ho),e(D,Xe),e(Xe,po),p(t,yt,d),p(t,w,d),$(de,w,null),e(w,fo),e(w,z),e(z,mo),e(z,Ae),e(Ae,uo),e(z,go),e(z,ce),e(ce,_o),e(z,vo),e(w,wo),e(w,L),e(L,bo),e(L,Fe),e(Fe,yo),e(L,$o),e(L,Me),e(Me,No),e(L,Ro),e(w,Co),e(w,Ze),e(Ze,Eo),e(w,xo),$(he,w,null),p(t,$t,d),p(t,W,d),e(W,K),e(K,Qe),$(pe,Qe,null),e(W,To),e(W,Ye),e(Ye,jo),p(t,Nt,d),p(t,F,d),$(fe,F,null),e(F,ko),e(F,me),e(me,Io),e(me,ue),e(ue,Ao),e(me,Fo),e(F,Mo),e(F,E),$(ge,E,null),e(E,Po),e(E,V),e(V,qo),e(V,Pe),e(Pe,Oo),e(V,So),e(V,et),e(et,Do),e(V,zo),e(E,Lo),$(X,E,null),e(E,Wo),e(E,tt),e(tt,Vo),e(E,Ho),$(_e,E,null),p(t,Rt,d),p(t,H,d),e(H,Z),e(Z,ot),$(ve,ot,null),e(H,Uo),e(H,st),e(st,Go),p(t,Ct,d),p(t,j,d),$(we,j,null),e(j,Bo),e(j,at),e(at,Jo),e(j,Ko),e(j,be),e(be,Xo),e(be,ye),e(ye,Zo),e(be,Qo),e(j,Yo),e(j,x),$($e,x,null),e(x,es),e(x,U),e(U,ts),e(U,qe),e(qe,os),e(U,ss),e(U,rt),e(rt,as),e(U,rs),e(x,ns),$(Q,x,null),e(x,is),e(x,nt),e(nt,ls),e(x,ds),$(Ne,x,null),Et=!0},p(t,[d]){const Re={};d&2&&(Re.$$scope={dirty:d,ctx:t}),X.$set(Re);const it={};d&2&&(it.$$scope={dirty:d,ctx:t}),Q.$set(it)},i(t){Et||(N(u.$$.fragment,t),N(ee.$$.fragment,t),N(le.$$.fragment,t),N(de.$$.fragment,t),N(he.$$.fragment,t),N(pe.$$.fragment,t),N(fe.$$.fragment,t),N(ge.$$.fragment,t),N(X.$$.fragment,t),N(_e.$$.fragment,t),N(ve.$$.fragment,t),N(we.$$.fragment,t),N($e.$$.fragment,t),N(Q.$$.fragment,t),N(Ne.$$.fragment,t),Et=!0)},o(t){R(u.$$.fragment,t),R(ee.$$.fragment,t),R(le.$$.fragment,t),R(de.$$.fragment,t),R(he.$$.fragment,t),R(pe.$$.fragment,t),R(fe.$$.fragment,t),R(ge.$$.fragment,t),R(X.$$.fragment,t),R(_e.$$.fragment,t),R(ve.$$.fragment,t),R(we.$$.fragment,t),R($e.$$.fragment,t),R(Q.$$.fragment,t),R(Ne.$$.fragment,t),Et=!1},d(t){o(f),t&&o(k),t&&o(m),C(u),t&&o(ct),t&&o(S),C(ee),t&&o(ht),t&&o(v),t&&o(pt),t&&o(Ee),t&&o(ft),t&&o(xe),t&&o(mt),t&&o(Te),t&&o(ut),t&&o(je),t&&o(gt),t&&o(ke),t&&o(_t),t&&o(B),t&&o(vt),t&&o(re),t&&o(wt),t&&o(M),t&&o(bt),t&&o(D),C(le),t&&o(yt),t&&o(w),C(de),C(he),t&&o($t),t&&o(W),C(pe),t&&o(Nt),t&&o(F),C(fe),C(ge),C(X),C(_e),t&&o(Rt),t&&o(H),C(ve),t&&o(Ct),t&&o(j),C(we),C($e),C(Q),C(Ne)}}}const ha={local:"resnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.ResNetConfig",title:"ResNetConfig"},{local:"transformers.ResNetModel",title:"ResNetModel"},{local:"transformers.ResNetForImageClassification",title:"ResNetForImageClassification"}],title:"ResNet"};function pa(Ce){return ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class va extends oa{constructor(f){super();sa(this,f,pa,ca,aa,{})}}export{va as default,ha as metadata};
