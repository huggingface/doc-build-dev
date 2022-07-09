import{S as cr,i as pr,s as fr,e as a,k as m,w as v,t as l,M as gr,c as r,d as o,m as u,a as n,x as $,h as i,b as c,G as e,g as _,y,q as N,o as T,B as x,v as hr,L as Jt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ro}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Kt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function mr(R){let d,b,h,f,w;return f=new Qt({props:{code:`from transformers import RegNetConfig, RegNetModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),b=l("Example:"),h=m(),v(f.$$.fragment)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Example:"),p.forEach(o),h=u(s),$(f.$$.fragment,s)},m(s,p){_(s,d,p),e(d,b),_(s,h,p),y(f,s,p),w=!0},p:Jt,i(s){w||(N(f.$$.fragment,s),w=!0)},o(s){T(f.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),x(f,s)}}}function ur(R){let d,b,h,f,w;return{c(){d=a("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var F=n(h);f=i(F,"Module"),F.forEach(o),w=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){_(s,d,p),e(d,b),e(d,h),e(h,f),e(d,w)},d(s){s&&o(d)}}}function _r(R){let d,b,h,f,w;return f=new Qt({props:{code:`from transformers import AutoFeatureExtractor, RegNetModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">1088</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),{c(){d=a("p"),b=l("Example:"),h=m(),v(f.$$.fragment)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Example:"),p.forEach(o),h=u(s),$(f.$$.fragment,s)},m(s,p){_(s,d,p),e(d,b),_(s,h,p),y(f,s,p),w=!0},p:Jt,i(s){w||(N(f.$$.fragment,s),w=!0)},o(s){T(f.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),x(f,s)}}}function wr(R){let d,b,h,f,w;return{c(){d=a("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var F=n(h);f=i(F,"Module"),F.forEach(o),w=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){_(s,d,p),e(d,b),e(d,h),e(h,f),e(d,w)},d(s){s&&o(d)}}}function br(R){let d,b,h,f,w;return f=new Qt({props:{code:`from transformers import AutoFeatureExtractor, RegNetForImageClassification
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
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){d=a("p"),b=l("Example:"),h=m(),v(f.$$.fragment)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Example:"),p.forEach(o),h=u(s),$(f.$$.fragment,s)},m(s,p){_(s,d,p),e(d,b),_(s,h,p),y(f,s,p),w=!0},p:Jt,i(s){w||(N(f.$$.fragment,s),w=!0)},o(s){T(f.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),x(f,s)}}}function vr(R){let d,b,h,f,w;return{c(){d=a("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var F=n(h);f=i(F,"Module"),F.forEach(o),w=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){_(s,d,p),e(d,b),e(d,h),e(h,f),e(d,w)},d(s){s&&o(d)}}}function $r(R){let d,b,h,f,w;return f=new Qt({props:{code:`from transformers import AutoFeatureExtractor, TFRegNetModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = TFRegNetModel.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFRegNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRegNetModel.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">1088</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),{c(){d=a("p"),b=l("Example:"),h=m(),v(f.$$.fragment)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Example:"),p.forEach(o),h=u(s),$(f.$$.fragment,s)},m(s,p){_(s,d,p),e(d,b),_(s,h,p),y(f,s,p),w=!0},p:Jt,i(s){w||(N(f.$$.fragment,s),w=!0)},o(s){T(f.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),x(f,s)}}}function yr(R){let d,b,h,f,w;return{c(){d=a("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var F=n(h);f=i(F,"Module"),F.forEach(o),w=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){_(s,d,p),e(d,b),e(d,h),e(h,f),e(d,w)},d(s){s&&o(d)}}}function Nr(R){let d,b,h,f,w;return f=new Qt({props:{code:`from transformers import AutoFeatureExtractor, TFRegNetForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = TFRegNetForImageClassification.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFRegNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRegNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){d=a("p"),b=l("Example:"),h=m(),v(f.$$.fragment)},l(s){d=r(s,"P",{});var p=n(d);b=i(p,"Example:"),p.forEach(o),h=u(s),$(f.$$.fragment,s)},m(s,p){_(s,d,p),e(d,b),_(s,h,p),y(f,s,p),w=!0},p:Jt,i(s){w||(N(f.$$.fragment,s),w=!0)},o(s){T(f.$$.fragment,s),w=!1},d(s){s&&o(d),s&&o(h),x(f,s)}}}function Tr(R){let d,b,h,f,w,s,p,F,Fo,Xt,S,Y,$t,ye,Eo,yt,ko,Yt,Z,jo,Ne,Co,Ao,Zt,et,Mo,eo,tt,Io,to,ot,Nt,Po,oo,st,qo,so,ee,Te,zo,at,Do,So,Oo,te,Lo,xe,Wo,Uo,Re,Ho,ao,E,Vo,Fe,Bo,Go,Ee,Ko,Jo,ke,Qo,Xo,je,Yo,Zo,ro,O,oe,Tt,Ce,es,xt,ts,no,k,Ae,os,L,ss,rt,as,rs,Me,ns,ls,is,W,ds,nt,cs,ps,lt,fs,gs,hs,se,lo,U,ae,Rt,Ie,ms,Ft,us,io,P,Pe,_s,qe,ws,ze,bs,vs,$s,C,De,ys,H,Ns,it,Ts,xs,Et,Rs,Fs,Es,re,ks,ne,co,V,le,kt,Se,js,jt,Cs,po,j,Oe,As,Ct,Ms,Is,Le,Ps,We,qs,zs,Ds,A,Ue,Ss,B,Os,dt,Ls,Ws,At,Us,Hs,Vs,ie,Bs,de,fo,G,ce,Mt,He,Gs,It,Ks,go,q,Ve,Js,Pt,Qs,Xs,M,Be,Ys,K,Zs,ct,ea,ta,qt,oa,sa,aa,pe,ra,fe,ho,J,ge,zt,Ge,na,Dt,la,mo,z,Ke,ia,St,da,ca,I,Je,pa,Q,fa,pt,ga,ha,Ot,ma,ua,_a,he,wa,me,uo;return s=new Ze({}),ye=new Ze({}),Ce=new Ze({}),Ae=new X({props:{name:"class transformers.RegNetConfig",anchor:"transformers.RegNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 32"},{name:"hidden_sizes",val:" = [128, 192, 512, 1088]"},{name:"depths",val:" = [2, 6, 12, 2]"},{name:"groups_width",val:" = 64"},{name:"layer_type",val:" = 'y'"},{name:"hidden_act",val:" = 'relu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RegNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.RegNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.RegNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.RegNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.RegNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;y&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;x&quot; or </code>&#x201C;y&#x201D;<code>. An </code>x<code>layer is a ResNet&apos;s BottleNeck layer with</code>reduction<code>fixed to</code>1<code>. While a </code>y<code>layer is a</code>x\` but with squeeze and excitation. Please refer to the
paper for a detailed explanation of how these layers were constructed.`,name:"layer_type"},{anchor:"transformers.RegNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.RegNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/configuration_regnet.py#L28"}}),se=new Kt({props:{anchor:"transformers.RegNetConfig.example",$$slots:{default:[mr]},$$scope:{ctx:R}}}),Ie=new Ze({}),Pe=new X({props:{name:"class transformers.RegNetModel",anchor:"transformers.RegNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RegNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_regnet.py#L332"}}),De=new X({props:{name:"forward",anchor:"transformers.RegNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RegNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_regnet.py#L342",returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig"
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
`}}),re=new Ro({props:{$$slots:{default:[ur]},$$scope:{ctx:R}}}),ne=new Kt({props:{anchor:"transformers.RegNetModel.forward.example",$$slots:{default:[_r]},$$scope:{ctx:R}}}),Se=new Ze({}),Oe=new X({props:{name:"class transformers.RegNetForImageClassification",anchor:"transformers.RegNetForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RegNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_regnet.py#L387"}}),Ue=new X({props:{name:"forward",anchor:"transformers.RegNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"}],parametersDescription:[{anchor:"transformers.RegNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RegNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_regnet.py#L400",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutputWithNoAttention"
>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also
called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutputWithNoAttention"
>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new Ro({props:{$$slots:{default:[wr]},$$scope:{ctx:R}}}),de=new Kt({props:{anchor:"transformers.RegNetForImageClassification.forward.example",$$slots:{default:[br]},$$scope:{ctx:R}}}),He=new Ze({}),Ve=new X({props:{name:"class transformers.TFRegNetModel",anchor:"transformers.TFRegNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRegNetModel.This",description:`<strong>This</strong> model is a Tensorflow &#x2014;
[tf.keras.layers.Layer](https &#x2014;//<a href="http://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">www.tensorflow.org/api_docs/python/tf/keras/layers/Layer</a>) sub-class. Use it as a`,name:"This"},{anchor:"transformers.TFRegNetModel.regular",description:`<strong>regular</strong> Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and &#x2014;
behavior. &#x2014;
config (<a href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_tf_regnet.py#L405"}}),Be=new X({props:{name:"call",anchor:"transformers.TFRegNetModel.call",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFRegNetModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFRegNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRegNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_tf_regnet.py#L410",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndNoAttention</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state after a pooling operation on the spatial dimensions.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings, if the model has an embedding layer, + one for
the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndNoAttention</code> or <code>tuple(tf.Tensor)</code></p>
`}}),pe=new Ro({props:{$$slots:{default:[vr]},$$scope:{ctx:R}}}),fe=new Kt({props:{anchor:"transformers.TFRegNetModel.call.example",$$slots:{default:[$r]},$$scope:{ctx:R}}}),Ge=new Ze({}),Ke=new X({props:{name:"class transformers.TFRegNetForImageClassification",anchor:"transformers.TFRegNetForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRegNetForImageClassification.This",description:`<strong>This</strong> model is a Tensorflow &#x2014;
[tf.keras.layers.Layer](https &#x2014;//<a href="http://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">www.tensorflow.org/api_docs/python/tf/keras/layers/Layer</a>) sub-class. Use it as a`,name:"This"},{anchor:"transformers.TFRegNetForImageClassification.regular",description:`<strong>regular</strong> Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and &#x2014;
behavior. &#x2014;
config (<a href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_tf_regnet.py#L455"}}),Je=new X({props:{name:"call",anchor:"transformers.TFRegNetForImageClassification.call",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFRegNetForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFRegNetForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRegNetForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRegNetForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/regnet/modeling_tf_regnet.py#L466",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),he=new Ro({props:{$$slots:{default:[yr]},$$scope:{ctx:R}}}),me=new Kt({props:{anchor:"transformers.TFRegNetForImageClassification.call.example",$$slots:{default:[Nr]},$$scope:{ctx:R}}}),{c(){d=a("meta"),b=m(),h=a("h1"),f=a("a"),w=a("span"),v(s.$$.fragment),p=m(),F=a("span"),Fo=l("RegNet"),Xt=m(),S=a("h2"),Y=a("a"),$t=a("span"),v(ye.$$.fragment),Eo=m(),yt=a("span"),ko=l("Overview"),Yt=m(),Z=a("p"),jo=l("The RegNet model was proposed in "),Ne=a("a"),Co=l("Designing Network Design Spaces"),Ao=l(" by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),Zt=m(),et=a("p"),Mo=l("The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),eo=m(),tt=a("p"),Io=l("The abstract from the paper is the following:"),to=m(),ot=a("p"),Nt=a("em"),Po=l("In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),oo=m(),st=a("p"),qo=l("Tips:"),so=m(),ee=a("ul"),Te=a("li"),zo=l("One can use "),at=a("a"),Do=l("AutoFeatureExtractor"),So=l(" to prepare images for the model."),Oo=m(),te=a("li"),Lo=l("The huge 10B model from "),xe=a("a"),Wo=l("Self-supervised Pretraining of Visual Features in the Wild"),Uo=l(", trained on one billion Instagram images, is available on the "),Re=a("a"),Ho=l("hub"),ao=m(),E=a("p"),Vo=l("This model was contributed by "),Fe=a("a"),Bo=l("Francesco"),Go=l(`. The TensorFlow version of the model
was contributed by `),Ee=a("a"),Ko=l("sayakpaul"),Jo=l(" and "),ke=a("a"),Qo=l("ariG23498"),Xo=l(`.
The original code can be found `),je=a("a"),Yo=l("here"),Zo=l("."),ro=m(),O=a("h2"),oe=a("a"),Tt=a("span"),v(Ce.$$.fragment),es=m(),xt=a("span"),ts=l("RegNetConfig"),no=m(),k=a("div"),v(Ae.$$.fragment),os=m(),L=a("p"),ss=l("This is the configuration class to store the configuration of a "),rt=a("a"),as=l("RegNetModel"),rs=l(`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the RegNet
`),Me=a("a"),ns=l("facebook/regnet-y-040"),ls=l(" architecture."),is=m(),W=a("p"),ds=l("Configuration objects inherit from "),nt=a("a"),cs=l("PretrainedConfig"),ps=l(` and can be used to control the model outputs. Read the
documentation from `),lt=a("a"),fs=l("PretrainedConfig"),gs=l(" for more information."),hs=m(),v(se.$$.fragment),lo=m(),U=a("h2"),ae=a("a"),Rt=a("span"),v(Ie.$$.fragment),ms=m(),Ft=a("span"),us=l("RegNetModel"),io=m(),P=a("div"),v(Pe.$$.fragment),_s=m(),qe=a("p"),ws=l(`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ze=a("a"),bs=l("torch.nn.Module"),vs=l(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$s=m(),C=a("div"),v(De.$$.fragment),ys=m(),H=a("p"),Ns=l("The "),it=a("a"),Ts=l("RegNetModel"),xs=l(" forward method, overrides the "),Et=a("code"),Rs=l("__call__"),Fs=l(" special method."),Es=m(),v(re.$$.fragment),ks=m(),v(ne.$$.fragment),co=m(),V=a("h2"),le=a("a"),kt=a("span"),v(Se.$$.fragment),js=m(),jt=a("span"),Cs=l("RegNetForImageClassification"),po=m(),j=a("div"),v(Oe.$$.fragment),As=m(),Ct=a("p"),Ms=l(`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Is=m(),Le=a("p"),Ps=l("This model is a PyTorch "),We=a("a"),qs=l("torch.nn.Module"),zs=l(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds=m(),A=a("div"),v(Ue.$$.fragment),Ss=m(),B=a("p"),Os=l("The "),dt=a("a"),Ls=l("RegNetForImageClassification"),Ws=l(" forward method, overrides the "),At=a("code"),Us=l("__call__"),Hs=l(" special method."),Vs=m(),v(ie.$$.fragment),Bs=m(),v(de.$$.fragment),fo=m(),G=a("h2"),ce=a("a"),Mt=a("span"),v(He.$$.fragment),Gs=m(),It=a("span"),Ks=l("TFRegNetModel"),go=m(),q=a("div"),v(Ve.$$.fragment),Js=m(),Pt=a("p"),Qs=l("The bare RegNet model outputting raw features without any specific head on top."),Xs=m(),M=a("div"),v(Be.$$.fragment),Ys=m(),K=a("p"),Zs=l("The "),ct=a("a"),ea=l("TFRegNetModel"),ta=l(" forward method, overrides the "),qt=a("code"),oa=l("__call__"),sa=l(" special method."),aa=m(),v(pe.$$.fragment),ra=m(),v(fe.$$.fragment),ho=m(),J=a("h2"),ge=a("a"),zt=a("span"),v(Ge.$$.fragment),na=m(),Dt=a("span"),la=l("TFRegNetForImageClassification"),mo=m(),z=a("div"),v(Ke.$$.fragment),ia=m(),St=a("p"),da=l(`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),ca=m(),I=a("div"),v(Je.$$.fragment),pa=m(),Q=a("p"),fa=l("The "),pt=a("a"),ga=l("TFRegNetForImageClassification"),ha=l(" forward method, overrides the "),Ot=a("code"),ma=l("__call__"),ua=l(" special method."),_a=m(),v(he.$$.fragment),wa=m(),v(me.$$.fragment),this.h()},l(t){const g=gr('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),h=r(t,"H1",{class:!0});var Qe=n(h);f=r(Qe,"A",{id:!0,class:!0,href:!0});var Lt=n(f);w=r(Lt,"SPAN",{});var Wt=n(w);$(s.$$.fragment,Wt),Wt.forEach(o),Lt.forEach(o),p=u(Qe),F=r(Qe,"SPAN",{});var Ut=n(F);Fo=i(Ut,"RegNet"),Ut.forEach(o),Qe.forEach(o),Xt=u(t),S=r(t,"H2",{class:!0});var Xe=n(S);Y=r(Xe,"A",{id:!0,class:!0,href:!0});var Ht=n(Y);$t=r(Ht,"SPAN",{});var Vt=n($t);$(ye.$$.fragment,Vt),Vt.forEach(o),Ht.forEach(o),Eo=u(Xe),yt=r(Xe,"SPAN",{});var Bt=n(yt);ko=i(Bt,"Overview"),Bt.forEach(o),Xe.forEach(o),Yt=u(t),Z=r(t,"P",{});var Ye=n(Z);jo=i(Ye,"The RegNet model was proposed in "),Ne=r(Ye,"A",{href:!0,rel:!0});var ba=n(Ne);Co=i(ba,"Designing Network Design Spaces"),ba.forEach(o),Ao=i(Ye," by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),Ye.forEach(o),Zt=u(t),et=r(t,"P",{});var va=n(et);Mo=i(va,"The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),va.forEach(o),eo=u(t),tt=r(t,"P",{});var $a=n(tt);Io=i($a,"The abstract from the paper is the following:"),$a.forEach(o),to=u(t),ot=r(t,"P",{});var ya=n(ot);Nt=r(ya,"EM",{});var Na=n(Nt);Po=i(Na,"In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),Na.forEach(o),ya.forEach(o),oo=u(t),st=r(t,"P",{});var Ta=n(st);qo=i(Ta,"Tips:"),Ta.forEach(o),so=u(t),ee=r(t,"UL",{});var _o=n(ee);Te=r(_o,"LI",{});var wo=n(Te);zo=i(wo,"One can use "),at=r(wo,"A",{href:!0});var xa=n(at);Do=i(xa,"AutoFeatureExtractor"),xa.forEach(o),So=i(wo," to prepare images for the model."),wo.forEach(o),Oo=u(_o),te=r(_o,"LI",{});var Gt=n(te);Lo=i(Gt,"The huge 10B model from "),xe=r(Gt,"A",{href:!0,rel:!0});var Ra=n(xe);Wo=i(Ra,"Self-supervised Pretraining of Visual Features in the Wild"),Ra.forEach(o),Uo=i(Gt,", trained on one billion Instagram images, is available on the "),Re=r(Gt,"A",{href:!0,rel:!0});var Fa=n(Re);Ho=i(Fa,"hub"),Fa.forEach(o),Gt.forEach(o),_o.forEach(o),ao=u(t),E=r(t,"P",{});var D=n(E);Vo=i(D,"This model was contributed by "),Fe=r(D,"A",{href:!0,rel:!0});var Ea=n(Fe);Bo=i(Ea,"Francesco"),Ea.forEach(o),Go=i(D,`. The TensorFlow version of the model
was contributed by `),Ee=r(D,"A",{href:!0,rel:!0});var ka=n(Ee);Ko=i(ka,"sayakpaul"),ka.forEach(o),Jo=i(D," and "),ke=r(D,"A",{href:!0,rel:!0});var ja=n(ke);Qo=i(ja,"ariG23498"),ja.forEach(o),Xo=i(D,`.
The original code can be found `),je=r(D,"A",{href:!0,rel:!0});var Ca=n(je);Yo=i(Ca,"here"),Ca.forEach(o),Zo=i(D,"."),D.forEach(o),ro=u(t),O=r(t,"H2",{class:!0});var bo=n(O);oe=r(bo,"A",{id:!0,class:!0,href:!0});var Aa=n(oe);Tt=r(Aa,"SPAN",{});var Ma=n(Tt);$(Ce.$$.fragment,Ma),Ma.forEach(o),Aa.forEach(o),es=u(bo),xt=r(bo,"SPAN",{});var Ia=n(xt);ts=i(Ia,"RegNetConfig"),Ia.forEach(o),bo.forEach(o),no=u(t),k=r(t,"DIV",{class:!0});var ue=n(k);$(Ae.$$.fragment,ue),os=u(ue),L=r(ue,"P",{});var ft=n(L);ss=i(ft,"This is the configuration class to store the configuration of a "),rt=r(ft,"A",{href:!0});var Pa=n(rt);as=i(Pa,"RegNetModel"),Pa.forEach(o),rs=i(ft,`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the RegNet
`),Me=r(ft,"A",{href:!0,rel:!0});var qa=n(Me);ns=i(qa,"facebook/regnet-y-040"),qa.forEach(o),ls=i(ft," architecture."),ft.forEach(o),is=u(ue),W=r(ue,"P",{});var gt=n(W);ds=i(gt,"Configuration objects inherit from "),nt=r(gt,"A",{href:!0});var za=n(nt);cs=i(za,"PretrainedConfig"),za.forEach(o),ps=i(gt,` and can be used to control the model outputs. Read the
documentation from `),lt=r(gt,"A",{href:!0});var Da=n(lt);fs=i(Da,"PretrainedConfig"),Da.forEach(o),gs=i(gt," for more information."),gt.forEach(o),hs=u(ue),$(se.$$.fragment,ue),ue.forEach(o),lo=u(t),U=r(t,"H2",{class:!0});var vo=n(U);ae=r(vo,"A",{id:!0,class:!0,href:!0});var Sa=n(ae);Rt=r(Sa,"SPAN",{});var Oa=n(Rt);$(Ie.$$.fragment,Oa),Oa.forEach(o),Sa.forEach(o),ms=u(vo),Ft=r(vo,"SPAN",{});var La=n(Ft);us=i(La,"RegNetModel"),La.forEach(o),vo.forEach(o),io=u(t),P=r(t,"DIV",{class:!0});var ht=n(P);$(Pe.$$.fragment,ht),_s=u(ht),qe=r(ht,"P",{});var $o=n(qe);ws=i($o,`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ze=r($o,"A",{href:!0,rel:!0});var Wa=n(ze);bs=i(Wa,"torch.nn.Module"),Wa.forEach(o),vs=i($o,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$o.forEach(o),$s=u(ht),C=r(ht,"DIV",{class:!0});var _e=n(C);$(De.$$.fragment,_e),ys=u(_e),H=r(_e,"P",{});var mt=n(H);Ns=i(mt,"The "),it=r(mt,"A",{href:!0});var Ua=n(it);Ts=i(Ua,"RegNetModel"),Ua.forEach(o),xs=i(mt," forward method, overrides the "),Et=r(mt,"CODE",{});var Ha=n(Et);Rs=i(Ha,"__call__"),Ha.forEach(o),Fs=i(mt," special method."),mt.forEach(o),Es=u(_e),$(re.$$.fragment,_e),ks=u(_e),$(ne.$$.fragment,_e),_e.forEach(o),ht.forEach(o),co=u(t),V=r(t,"H2",{class:!0});var yo=n(V);le=r(yo,"A",{id:!0,class:!0,href:!0});var Va=n(le);kt=r(Va,"SPAN",{});var Ba=n(kt);$(Se.$$.fragment,Ba),Ba.forEach(o),Va.forEach(o),js=u(yo),jt=r(yo,"SPAN",{});var Ga=n(jt);Cs=i(Ga,"RegNetForImageClassification"),Ga.forEach(o),yo.forEach(o),po=u(t),j=r(t,"DIV",{class:!0});var we=n(j);$(Oe.$$.fragment,we),As=u(we),Ct=r(we,"P",{});var Ka=n(Ct);Ms=i(Ka,`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Ka.forEach(o),Is=u(we),Le=r(we,"P",{});var No=n(Le);Ps=i(No,"This model is a PyTorch "),We=r(No,"A",{href:!0,rel:!0});var Ja=n(We);qs=i(Ja,"torch.nn.Module"),Ja.forEach(o),zs=i(No,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),No.forEach(o),Ds=u(we),A=r(we,"DIV",{class:!0});var be=n(A);$(Ue.$$.fragment,be),Ss=u(be),B=r(be,"P",{});var ut=n(B);Os=i(ut,"The "),dt=r(ut,"A",{href:!0});var Qa=n(dt);Ls=i(Qa,"RegNetForImageClassification"),Qa.forEach(o),Ws=i(ut," forward method, overrides the "),At=r(ut,"CODE",{});var Xa=n(At);Us=i(Xa,"__call__"),Xa.forEach(o),Hs=i(ut," special method."),ut.forEach(o),Vs=u(be),$(ie.$$.fragment,be),Bs=u(be),$(de.$$.fragment,be),be.forEach(o),we.forEach(o),fo=u(t),G=r(t,"H2",{class:!0});var To=n(G);ce=r(To,"A",{id:!0,class:!0,href:!0});var Ya=n(ce);Mt=r(Ya,"SPAN",{});var Za=n(Mt);$(He.$$.fragment,Za),Za.forEach(o),Ya.forEach(o),Gs=u(To),It=r(To,"SPAN",{});var er=n(It);Ks=i(er,"TFRegNetModel"),er.forEach(o),To.forEach(o),go=u(t),q=r(t,"DIV",{class:!0});var _t=n(q);$(Ve.$$.fragment,_t),Js=u(_t),Pt=r(_t,"P",{});var tr=n(Pt);Qs=i(tr,"The bare RegNet model outputting raw features without any specific head on top."),tr.forEach(o),Xs=u(_t),M=r(_t,"DIV",{class:!0});var ve=n(M);$(Be.$$.fragment,ve),Ys=u(ve),K=r(ve,"P",{});var wt=n(K);Zs=i(wt,"The "),ct=r(wt,"A",{href:!0});var or=n(ct);ea=i(or,"TFRegNetModel"),or.forEach(o),ta=i(wt," forward method, overrides the "),qt=r(wt,"CODE",{});var sr=n(qt);oa=i(sr,"__call__"),sr.forEach(o),sa=i(wt," special method."),wt.forEach(o),aa=u(ve),$(pe.$$.fragment,ve),ra=u(ve),$(fe.$$.fragment,ve),ve.forEach(o),_t.forEach(o),ho=u(t),J=r(t,"H2",{class:!0});var xo=n(J);ge=r(xo,"A",{id:!0,class:!0,href:!0});var ar=n(ge);zt=r(ar,"SPAN",{});var rr=n(zt);$(Ge.$$.fragment,rr),rr.forEach(o),ar.forEach(o),na=u(xo),Dt=r(xo,"SPAN",{});var nr=n(Dt);la=i(nr,"TFRegNetForImageClassification"),nr.forEach(o),xo.forEach(o),mo=u(t),z=r(t,"DIV",{class:!0});var bt=n(z);$(Ke.$$.fragment,bt),ia=u(bt),St=r(bt,"P",{});var lr=n(St);da=i(lr,`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),lr.forEach(o),ca=u(bt),I=r(bt,"DIV",{class:!0});var $e=n(I);$(Je.$$.fragment,$e),pa=u($e),Q=r($e,"P",{});var vt=n(Q);fa=i(vt,"The "),pt=r(vt,"A",{href:!0});var ir=n(pt);ga=i(ir,"TFRegNetForImageClassification"),ir.forEach(o),ha=i(vt," forward method, overrides the "),Ot=r(vt,"CODE",{});var dr=n(Ot);ma=i(dr,"__call__"),dr.forEach(o),ua=i(vt," special method."),vt.forEach(o),_a=u($e),$(he.$$.fragment,$e),wa=u($e),$(me.$$.fragment,$e),$e.forEach(o),bt.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(xr)),c(f,"id","regnet"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#regnet"),c(h,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(S,"class","relative group"),c(Ne,"href","https://arxiv.org/abs/2003.13678"),c(Ne,"rel","nofollow"),c(at,"href","/docs/transformers/pr_18081/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(xe,"href","https://arxiv.org/abs/2103.01988"),c(xe,"rel","nofollow"),c(Re,"href","https://huggingface.co/facebook/regnet-y-10b-seer"),c(Re,"rel","nofollow"),c(Fe,"href","https://huggingface.co/Francesco"),c(Fe,"rel","nofollow"),c(Ee,"href","https://huggingface.com/sayakpaul"),c(Ee,"rel","nofollow"),c(ke,"href","https://huggingface.com/ariG23498"),c(ke,"rel","nofollow"),c(je,"href","https://github.com/facebookresearch/pycls"),c(je,"rel","nofollow"),c(oe,"id","transformers.RegNetConfig"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#transformers.RegNetConfig"),c(O,"class","relative group"),c(rt,"href","/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetModel"),c(Me,"href","https://huggingface.co/facebook/regnet-y-040"),c(Me,"rel","nofollow"),c(nt,"href","/docs/transformers/pr_18081/en/main_classes/configuration#transformers.PretrainedConfig"),c(lt,"href","/docs/transformers/pr_18081/en/main_classes/configuration#transformers.PretrainedConfig"),c(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ae,"id","transformers.RegNetModel"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.RegNetModel"),c(U,"class","relative group"),c(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ze,"rel","nofollow"),c(it,"href","/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetModel"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"id","transformers.RegNetForImageClassification"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#transformers.RegNetForImageClassification"),c(V,"class","relative group"),c(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(We,"rel","nofollow"),c(dt,"href","/docs/transformers/pr_18081/en/model_doc/regnet#transformers.RegNetForImageClassification"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"id","transformers.TFRegNetModel"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.TFRegNetModel"),c(G,"class","relative group"),c(ct,"href","/docs/transformers/pr_18081/en/model_doc/regnet#transformers.TFRegNetModel"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"id","transformers.TFRegNetForImageClassification"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.TFRegNetForImageClassification"),c(J,"class","relative group"),c(pt,"href","/docs/transformers/pr_18081/en/model_doc/regnet#transformers.TFRegNetForImageClassification"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),_(t,b,g),_(t,h,g),e(h,f),e(f,w),y(s,w,null),e(h,p),e(h,F),e(F,Fo),_(t,Xt,g),_(t,S,g),e(S,Y),e(Y,$t),y(ye,$t,null),e(S,Eo),e(S,yt),e(yt,ko),_(t,Yt,g),_(t,Z,g),e(Z,jo),e(Z,Ne),e(Ne,Co),e(Z,Ao),_(t,Zt,g),_(t,et,g),e(et,Mo),_(t,eo,g),_(t,tt,g),e(tt,Io),_(t,to,g),_(t,ot,g),e(ot,Nt),e(Nt,Po),_(t,oo,g),_(t,st,g),e(st,qo),_(t,so,g),_(t,ee,g),e(ee,Te),e(Te,zo),e(Te,at),e(at,Do),e(Te,So),e(ee,Oo),e(ee,te),e(te,Lo),e(te,xe),e(xe,Wo),e(te,Uo),e(te,Re),e(Re,Ho),_(t,ao,g),_(t,E,g),e(E,Vo),e(E,Fe),e(Fe,Bo),e(E,Go),e(E,Ee),e(Ee,Ko),e(E,Jo),e(E,ke),e(ke,Qo),e(E,Xo),e(E,je),e(je,Yo),e(E,Zo),_(t,ro,g),_(t,O,g),e(O,oe),e(oe,Tt),y(Ce,Tt,null),e(O,es),e(O,xt),e(xt,ts),_(t,no,g),_(t,k,g),y(Ae,k,null),e(k,os),e(k,L),e(L,ss),e(L,rt),e(rt,as),e(L,rs),e(L,Me),e(Me,ns),e(L,ls),e(k,is),e(k,W),e(W,ds),e(W,nt),e(nt,cs),e(W,ps),e(W,lt),e(lt,fs),e(W,gs),e(k,hs),y(se,k,null),_(t,lo,g),_(t,U,g),e(U,ae),e(ae,Rt),y(Ie,Rt,null),e(U,ms),e(U,Ft),e(Ft,us),_(t,io,g),_(t,P,g),y(Pe,P,null),e(P,_s),e(P,qe),e(qe,ws),e(qe,ze),e(ze,bs),e(qe,vs),e(P,$s),e(P,C),y(De,C,null),e(C,ys),e(C,H),e(H,Ns),e(H,it),e(it,Ts),e(H,xs),e(H,Et),e(Et,Rs),e(H,Fs),e(C,Es),y(re,C,null),e(C,ks),y(ne,C,null),_(t,co,g),_(t,V,g),e(V,le),e(le,kt),y(Se,kt,null),e(V,js),e(V,jt),e(jt,Cs),_(t,po,g),_(t,j,g),y(Oe,j,null),e(j,As),e(j,Ct),e(Ct,Ms),e(j,Is),e(j,Le),e(Le,Ps),e(Le,We),e(We,qs),e(Le,zs),e(j,Ds),e(j,A),y(Ue,A,null),e(A,Ss),e(A,B),e(B,Os),e(B,dt),e(dt,Ls),e(B,Ws),e(B,At),e(At,Us),e(B,Hs),e(A,Vs),y(ie,A,null),e(A,Bs),y(de,A,null),_(t,fo,g),_(t,G,g),e(G,ce),e(ce,Mt),y(He,Mt,null),e(G,Gs),e(G,It),e(It,Ks),_(t,go,g),_(t,q,g),y(Ve,q,null),e(q,Js),e(q,Pt),e(Pt,Qs),e(q,Xs),e(q,M),y(Be,M,null),e(M,Ys),e(M,K),e(K,Zs),e(K,ct),e(ct,ea),e(K,ta),e(K,qt),e(qt,oa),e(K,sa),e(M,aa),y(pe,M,null),e(M,ra),y(fe,M,null),_(t,ho,g),_(t,J,g),e(J,ge),e(ge,zt),y(Ge,zt,null),e(J,na),e(J,Dt),e(Dt,la),_(t,mo,g),_(t,z,g),y(Ke,z,null),e(z,ia),e(z,St),e(St,da),e(z,ca),e(z,I),y(Je,I,null),e(I,pa),e(I,Q),e(Q,fa),e(Q,pt),e(pt,ga),e(Q,ha),e(Q,Ot),e(Ot,ma),e(Q,ua),e(I,_a),y(he,I,null),e(I,wa),y(me,I,null),uo=!0},p(t,[g]){const Qe={};g&2&&(Qe.$$scope={dirty:g,ctx:t}),se.$set(Qe);const Lt={};g&2&&(Lt.$$scope={dirty:g,ctx:t}),re.$set(Lt);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:t}),ne.$set(Wt);const Ut={};g&2&&(Ut.$$scope={dirty:g,ctx:t}),ie.$set(Ut);const Xe={};g&2&&(Xe.$$scope={dirty:g,ctx:t}),de.$set(Xe);const Ht={};g&2&&(Ht.$$scope={dirty:g,ctx:t}),pe.$set(Ht);const Vt={};g&2&&(Vt.$$scope={dirty:g,ctx:t}),fe.$set(Vt);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),he.$set(Bt);const Ye={};g&2&&(Ye.$$scope={dirty:g,ctx:t}),me.$set(Ye)},i(t){uo||(N(s.$$.fragment,t),N(ye.$$.fragment,t),N(Ce.$$.fragment,t),N(Ae.$$.fragment,t),N(se.$$.fragment,t),N(Ie.$$.fragment,t),N(Pe.$$.fragment,t),N(De.$$.fragment,t),N(re.$$.fragment,t),N(ne.$$.fragment,t),N(Se.$$.fragment,t),N(Oe.$$.fragment,t),N(Ue.$$.fragment,t),N(ie.$$.fragment,t),N(de.$$.fragment,t),N(He.$$.fragment,t),N(Ve.$$.fragment,t),N(Be.$$.fragment,t),N(pe.$$.fragment,t),N(fe.$$.fragment,t),N(Ge.$$.fragment,t),N(Ke.$$.fragment,t),N(Je.$$.fragment,t),N(he.$$.fragment,t),N(me.$$.fragment,t),uo=!0)},o(t){T(s.$$.fragment,t),T(ye.$$.fragment,t),T(Ce.$$.fragment,t),T(Ae.$$.fragment,t),T(se.$$.fragment,t),T(Ie.$$.fragment,t),T(Pe.$$.fragment,t),T(De.$$.fragment,t),T(re.$$.fragment,t),T(ne.$$.fragment,t),T(Se.$$.fragment,t),T(Oe.$$.fragment,t),T(Ue.$$.fragment,t),T(ie.$$.fragment,t),T(de.$$.fragment,t),T(He.$$.fragment,t),T(Ve.$$.fragment,t),T(Be.$$.fragment,t),T(pe.$$.fragment,t),T(fe.$$.fragment,t),T(Ge.$$.fragment,t),T(Ke.$$.fragment,t),T(Je.$$.fragment,t),T(he.$$.fragment,t),T(me.$$.fragment,t),uo=!1},d(t){o(d),t&&o(b),t&&o(h),x(s),t&&o(Xt),t&&o(S),x(ye),t&&o(Yt),t&&o(Z),t&&o(Zt),t&&o(et),t&&o(eo),t&&o(tt),t&&o(to),t&&o(ot),t&&o(oo),t&&o(st),t&&o(so),t&&o(ee),t&&o(ao),t&&o(E),t&&o(ro),t&&o(O),x(Ce),t&&o(no),t&&o(k),x(Ae),x(se),t&&o(lo),t&&o(U),x(Ie),t&&o(io),t&&o(P),x(Pe),x(De),x(re),x(ne),t&&o(co),t&&o(V),x(Se),t&&o(po),t&&o(j),x(Oe),x(Ue),x(ie),x(de),t&&o(fo),t&&o(G),x(He),t&&o(go),t&&o(q),x(Ve),x(Be),x(pe),x(fe),t&&o(ho),t&&o(J),x(Ge),t&&o(mo),t&&o(z),x(Ke),x(Je),x(he),x(me)}}}const xr={local:"regnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.RegNetConfig",title:"RegNetConfig"},{local:"transformers.RegNetModel",title:"RegNetModel"},{local:"transformers.RegNetForImageClassification",title:"RegNetForImageClassification"},{local:"transformers.TFRegNetModel",title:"TFRegNetModel"},{local:"transformers.TFRegNetForImageClassification",title:"TFRegNetForImageClassification"}],title:"RegNet"};function Rr(R){return hr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mr extends cr{constructor(d){super();pr(this,d,Rr,Tr,fr,{})}}export{Mr as default,xr as metadata};
