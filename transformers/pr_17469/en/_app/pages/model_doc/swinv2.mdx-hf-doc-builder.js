import{S as xs,i as Ms,s as Es,e as s,k as u,w as b,t as i,M as Fs,c as a,d as o,m as g,a as r,x as $,h as l,b as c,G as e,g as _,y,q as S,o as T,B as k,v as js,L as oo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Wn}from"../../chunks/Tip-hf-doc-builder.js";import{D as Le}from"../../chunks/Docstring-hf-doc-builder.js";import{C as no}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as to}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Cs(x){let d,v,f,p,w;return p=new no({props:{code:`from transformers import Swinv2Config, Swinv2Model

# Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration
configuration = Swinv2Config()

# Initializing a model from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration
model = Swinv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Swinv2Config, Swinv2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Swinv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),v=i("Example:"),f=u(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Example:"),h.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,h){_(n,d,h),e(d,v),_(n,f,h),y(p,n,h),w=!0},p:oo,i(n){w||(S(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function Is(x){let d,v,f,p,w;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),p=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var M=r(f);p=l(M,"Module"),M.forEach(o),w=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){_(n,d,h),e(d,v),e(d,f),e(f,p),e(d,w)},d(n){n&&o(d)}}}function As(x){let d,v,f,p,w;return p=new no({props:{code:`from transformers import AutoFeatureExtractor, Swinv2Model
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")
model = Swinv2Model.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">64</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),v=i("Example:"),f=u(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Example:"),h.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,h){_(n,d,h),e(d,v),_(n,f,h),y(p,n,h),w=!0},p:oo,i(n){w||(S(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function Ps(x){let d,v,f,p,w;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),p=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var M=r(f);p=l(M,"Module"),M.forEach(o),w=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){_(n,d,h),e(d,v),e(d,f),e(f,p),e(d,w)},d(n){n&&o(d)}}}function qs(x){let d,v,f,p,w;return p=new no({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")
model = Swinv2ForMaskedImageModeling.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2ForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2ForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">256</span>, <span class="hljs-number">256</span>]`}}),{c(){d=s("p"),v=i("Examples:"),f=u(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Examples:"),h.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,h){_(n,d,h),e(d,v),_(n,f,h),y(p,n,h),w=!0},p:oo,i(n){w||(S(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function zs(x){let d,v,f,p,w;return{c(){d=s("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),p=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var M=r(f);p=l(M,"Module"),M.forEach(o),w=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){_(n,d,h),e(d,v),e(d,f),e(f,p),e(d,w)},d(n){n&&o(d)}}}function Os(x){let d,v,f,p,w;return p=new no({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")
model = Swinv2ForImageClassification.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2ForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2ForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=s("p"),v=i("Example:"),f=u(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);v=l(h,"Example:"),h.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,h){_(n,d,h),e(d,v),_(n,f,h),y(p,n,h),w=!0},p:oo,i(n){w||(S(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function Ns(x){let d,v,f,p,w,n,h,M,so,Ft,O,Y,it,he,ao,lt,ro,jt,G,io,me,lo,co,Ct,De,po,It,We,dt,ho,At,He,mo,Pt,q,fe,fo,Ve,uo,go,_o,ue,wo,ct,vo,bo,$o,ge,yo,pt,So,To,qt,z,ko,_e,xo,Mo,we,Eo,Fo,zt,N,K,ht,ve,jo,mt,Co,Ot,E,be,Io,L,Ao,Ue,Po,qo,$e,zo,Oo,No,D,Lo,Ze,Do,Wo,Be,Ho,Vo,Uo,J,Nt,W,X,ft,ye,Zo,ut,Bo,Lt,A,Se,Ro,Te,Yo,ke,Go,Ko,Jo,j,xe,Xo,H,Qo,Re,en,tn,gt,on,nn,sn,Q,an,ee,Dt,V,te,_t,Me,rn,wt,ln,Wt,P,Ee,dn,U,cn,Fe,pn,hn,je,mn,fn,un,C,Ce,gn,Z,_n,Ye,wn,vn,vt,bn,$n,yn,oe,Sn,ne,Ht,B,se,bt,Ie,Tn,$t,kn,Vt,F,Ae,xn,yt,Mn,En,Pe,Fn,qe,jn,Cn,In,I,ze,An,R,Pn,Ge,qn,zn,St,On,Nn,Ln,ae,Dn,re,Ut;return n=new rt({}),he=new rt({}),ve=new rt({}),be=new Le({props:{name:"class transformers.Swinv2Config",anchor:"transformers.Swinv2Config",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Swinv2Config.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.Swinv2Config.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.Swinv2Config.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.Swinv2Config.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.Swinv2Config.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [2, 2, 6, 2]) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.Swinv2Config.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [3, 6, 12, 24]) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.Swinv2Config.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.Swinv2Config.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.Swinv2Config.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.Swinv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.Swinv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.Swinv2Config.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.Swinv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Swinv2Config.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.Swinv2Config.patch_norm",description:`<strong>patch_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not to add layer normalization after patch embedding.`,name:"patch_norm"},{anchor:"transformers.Swinv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Swinv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Swinv2Config.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 32) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/configuration_swinv2.py#L30"}}),J=new to({props:{anchor:"transformers.Swinv2Config.example",$$slots:{default:[Cs]},$$scope:{ctx:x}}}),ye=new rt({}),Se=new Le({props:{name:"class transformers.Swinv2Model",anchor:"transformers.Swinv2Model",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.Swinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L989"}}),xe=new Le({props:{name:"forward",anchor:"transformers.Swinv2Model.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.Swinv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Swinv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Swinv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Swinv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1016",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2ModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swinv2.modeling_swinv2.Swinv2ModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new Wn({props:{$$slots:{default:[Is]},$$scope:{ctx:x}}}),ee=new to({props:{anchor:"transformers.Swinv2Model.forward.example",$$slots:{default:[As]},$$scope:{ctx:x}}}),Me=new rt({}),Ee=new Le({props:{name:"class transformers.Swinv2ForMaskedImageModeling",anchor:"transformers.Swinv2ForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1088"}}),Ce=new Le({props:{name:"forward",anchor:"transformers.Swinv2ForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1103",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2MaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) \u2014 Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swinv2.modeling_swinv2.Swinv2MaskedImageModelingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new Wn({props:{$$slots:{default:[Ps]},$$scope:{ctx:x}}}),ne=new to({props:{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.example",$$slots:{default:[qs]},$$scope:{ctx:x}}}),Ie=new rt({}),Ae=new Le({props:{name:"class transformers.Swinv2ForImageClassification",anchor:"transformers.Swinv2ForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1198"}}),ze=new Le({props:{name:"forward",anchor:"transformers.Swinv2ForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.Swinv2ForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Swinv2ForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Swinv2ForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Swinv2ForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Swinv2ForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1213",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swinv2.modeling_swinv2.Swinv2ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new Wn({props:{$$slots:{default:[zs]},$$scope:{ctx:x}}}),re=new to({props:{anchor:"transformers.Swinv2ForImageClassification.forward.example",$$slots:{default:[Os]},$$scope:{ctx:x}}}),{c(){d=s("meta"),v=u(),f=s("h1"),p=s("a"),w=s("span"),b(n.$$.fragment),h=u(),M=s("span"),so=i("Swinv2"),Ft=u(),O=s("h2"),Y=s("a"),it=s("span"),b(he.$$.fragment),ao=u(),lt=s("span"),ro=i("Overview"),jt=u(),G=s("p"),io=i("The Swinv2 model was proposed in "),me=s("a"),lo=i("Swin Transformer V2: Scaling Up Capacity and Resolution"),co=i(" by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),Ct=u(),De=s("p"),po=i("The abstract from the paper is the following:"),It=u(),We=s("p"),dt=s("em"),ho=i("Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),At=u(),He=s("p"),mo=i("Tips:"),Pt=u(),q=s("ul"),fe=s("li"),fo=i("One can use the "),Ve=s("a"),uo=i("AutoFeatureExtractor"),go=i(" API to prepare images for the model."),_o=u(),ue=s("li"),wo=i("Current implementation has only "),ct=s("strong"),vo=i("Pytorch"),bo=i(" support."),$o=u(),ge=s("li"),yo=i("Current implementation doesn\u2019t support "),pt=s("strong"),So=i("Tensorflow"),To=i("."),qt=u(),z=s("p"),ko=i("This model was contributed by "),_e=s("a"),xo=i("nandwalritik"),Mo=i(`.
The original code can be found `),we=s("a"),Eo=i("here"),Fo=i("."),zt=u(),N=s("h2"),K=s("a"),ht=s("span"),b(ve.$$.fragment),jo=u(),mt=s("span"),Co=i("Swinv2Config"),Ot=u(),E=s("div"),b(be.$$.fragment),Io=u(),L=s("p"),Ao=i("This is the configuration class to store the configuration of a "),Ue=s("a"),Po=i("Swinv2Model"),qo=i(`. It is used to instantiate a
Swin v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin v2
`),$e=s("a"),zo=i("microsoft/swinv2_tiny_patch4_windows8_256"),Oo=i(`
architecture.`),No=u(),D=s("p"),Lo=i("Configuration objects inherit from "),Ze=s("a"),Do=i("PretrainedConfig"),Wo=i(` and can be used to control the model outputs. Read the
documentation from `),Be=s("a"),Ho=i("PretrainedConfig"),Vo=i(" for more information."),Uo=u(),b(J.$$.fragment),Nt=u(),W=s("h2"),X=s("a"),ft=s("span"),b(ye.$$.fragment),Zo=u(),ut=s("span"),Bo=i("Swinv2Model"),Lt=u(),A=s("div"),b(Se.$$.fragment),Ro=u(),Te=s("p"),Yo=i(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ke=s("a"),Go=i("torch.nn.Module"),Ko=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jo=u(),j=s("div"),b(xe.$$.fragment),Xo=u(),H=s("p"),Qo=i("The "),Re=s("a"),en=i("Swinv2Model"),tn=i(" forward method, overrides the "),gt=s("code"),on=i("__call__"),nn=i(" special method."),sn=u(),b(Q.$$.fragment),an=u(),b(ee.$$.fragment),Dt=u(),V=s("h2"),te=s("a"),_t=s("span"),b(Me.$$.fragment),rn=u(),wt=s("span"),ln=i("Swinv2ForMaskedImageModeling"),Wt=u(),P=s("div"),b(Ee.$$.fragment),dn=u(),U=s("p"),cn=i("Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),Fe=s("a"),pn=i("SimMIM"),hn=i(`.
This model is a PyTorch `),je=s("a"),mn=i("torch.nn.Module"),fn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),un=u(),C=s("div"),b(Ce.$$.fragment),gn=u(),Z=s("p"),_n=i("The "),Ye=s("a"),wn=i("Swinv2ForMaskedImageModeling"),vn=i(" forward method, overrides the "),vt=s("code"),bn=i("__call__"),$n=i(" special method."),yn=u(),b(oe.$$.fragment),Sn=u(),b(ne.$$.fragment),Ht=u(),B=s("h2"),se=s("a"),bt=s("span"),b(Ie.$$.fragment),Tn=u(),$t=s("span"),kn=i("Swinv2ForImageClassification"),Vt=u(),F=s("div"),b(Ae.$$.fragment),xn=u(),yt=s("p"),Mn=i(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),En=u(),Pe=s("p"),Fn=i("This model is a PyTorch "),qe=s("a"),jn=i("torch.nn.Module"),Cn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),In=u(),I=s("div"),b(ze.$$.fragment),An=u(),R=s("p"),Pn=i("The "),Ge=s("a"),qn=i("Swinv2ForImageClassification"),zn=i(" forward method, overrides the "),St=s("code"),On=i("__call__"),Nn=i(" special method."),Ln=u(),b(ae.$$.fragment),Dn=u(),b(re.$$.fragment),this.h()},l(t){const m=Fs('[data-svelte="svelte-1phssyn"]',document.head);d=a(m,"META",{name:!0,content:!0}),m.forEach(o),v=g(t),f=a(t,"H1",{class:!0});var Oe=r(f);p=a(Oe,"A",{id:!0,class:!0,href:!0});var Tt=r(p);w=a(Tt,"SPAN",{});var kt=r(w);$(n.$$.fragment,kt),kt.forEach(o),Tt.forEach(o),h=g(Oe),M=a(Oe,"SPAN",{});var xt=r(M);so=l(xt,"Swinv2"),xt.forEach(o),Oe.forEach(o),Ft=g(t),O=a(t,"H2",{class:!0});var Ne=r(O);Y=a(Ne,"A",{id:!0,class:!0,href:!0});var Mt=r(Y);it=a(Mt,"SPAN",{});var Et=r(it);$(he.$$.fragment,Et),Et.forEach(o),Mt.forEach(o),ao=g(Ne),lt=a(Ne,"SPAN",{});var Hn=r(lt);ro=l(Hn,"Overview"),Hn.forEach(o),Ne.forEach(o),jt=g(t),G=a(t,"P",{});var Zt=r(G);io=l(Zt,"The Swinv2 model was proposed in "),me=a(Zt,"A",{href:!0,rel:!0});var Vn=r(me);lo=l(Vn,"Swin Transformer V2: Scaling Up Capacity and Resolution"),Vn.forEach(o),co=l(Zt," by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),Zt.forEach(o),Ct=g(t),De=a(t,"P",{});var Un=r(De);po=l(Un,"The abstract from the paper is the following:"),Un.forEach(o),It=g(t),We=a(t,"P",{});var Zn=r(We);dt=a(Zn,"EM",{});var Bn=r(dt);ho=l(Bn,"Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Bn.forEach(o),Zn.forEach(o),At=g(t),He=a(t,"P",{});var Rn=r(He);mo=l(Rn,"Tips:"),Rn.forEach(o),Pt=g(t),q=a(t,"UL",{});var Ke=r(q);fe=a(Ke,"LI",{});var Bt=r(fe);fo=l(Bt,"One can use the "),Ve=a(Bt,"A",{href:!0});var Yn=r(Ve);uo=l(Yn,"AutoFeatureExtractor"),Yn.forEach(o),go=l(Bt," API to prepare images for the model."),Bt.forEach(o),_o=g(Ke),ue=a(Ke,"LI",{});var Rt=r(ue);wo=l(Rt,"Current implementation has only "),ct=a(Rt,"STRONG",{});var Gn=r(ct);vo=l(Gn,"Pytorch"),Gn.forEach(o),bo=l(Rt," support."),Rt.forEach(o),$o=g(Ke),ge=a(Ke,"LI",{});var Yt=r(ge);yo=l(Yt,"Current implementation doesn\u2019t support "),pt=a(Yt,"STRONG",{});var Kn=r(pt);So=l(Kn,"Tensorflow"),Kn.forEach(o),To=l(Yt,"."),Yt.forEach(o),Ke.forEach(o),qt=g(t),z=a(t,"P",{});var Je=r(z);ko=l(Je,"This model was contributed by "),_e=a(Je,"A",{href:!0,rel:!0});var Jn=r(_e);xo=l(Jn,"nandwalritik"),Jn.forEach(o),Mo=l(Je,`.
The original code can be found `),we=a(Je,"A",{href:!0,rel:!0});var Xn=r(we);Eo=l(Xn,"here"),Xn.forEach(o),Fo=l(Je,"."),Je.forEach(o),zt=g(t),N=a(t,"H2",{class:!0});var Gt=r(N);K=a(Gt,"A",{id:!0,class:!0,href:!0});var Qn=r(K);ht=a(Qn,"SPAN",{});var es=r(ht);$(ve.$$.fragment,es),es.forEach(o),Qn.forEach(o),jo=g(Gt),mt=a(Gt,"SPAN",{});var ts=r(mt);Co=l(ts,"Swinv2Config"),ts.forEach(o),Gt.forEach(o),Ot=g(t),E=a(t,"DIV",{class:!0});var ie=r(E);$(be.$$.fragment,ie),Io=g(ie),L=a(ie,"P",{});var Xe=r(L);Ao=l(Xe,"This is the configuration class to store the configuration of a "),Ue=a(Xe,"A",{href:!0});var os=r(Ue);Po=l(os,"Swinv2Model"),os.forEach(o),qo=l(Xe,`. It is used to instantiate a
Swin v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin v2
`),$e=a(Xe,"A",{href:!0,rel:!0});var ns=r($e);zo=l(ns,"microsoft/swinv2_tiny_patch4_windows8_256"),ns.forEach(o),Oo=l(Xe,`
architecture.`),Xe.forEach(o),No=g(ie),D=a(ie,"P",{});var Qe=r(D);Lo=l(Qe,"Configuration objects inherit from "),Ze=a(Qe,"A",{href:!0});var ss=r(Ze);Do=l(ss,"PretrainedConfig"),ss.forEach(o),Wo=l(Qe,` and can be used to control the model outputs. Read the
documentation from `),Be=a(Qe,"A",{href:!0});var as=r(Be);Ho=l(as,"PretrainedConfig"),as.forEach(o),Vo=l(Qe," for more information."),Qe.forEach(o),Uo=g(ie),$(J.$$.fragment,ie),ie.forEach(o),Nt=g(t),W=a(t,"H2",{class:!0});var Kt=r(W);X=a(Kt,"A",{id:!0,class:!0,href:!0});var rs=r(X);ft=a(rs,"SPAN",{});var is=r(ft);$(ye.$$.fragment,is),is.forEach(o),rs.forEach(o),Zo=g(Kt),ut=a(Kt,"SPAN",{});var ls=r(ut);Bo=l(ls,"Swinv2Model"),ls.forEach(o),Kt.forEach(o),Lt=g(t),A=a(t,"DIV",{class:!0});var et=r(A);$(Se.$$.fragment,et),Ro=g(et),Te=a(et,"P",{});var Jt=r(Te);Yo=l(Jt,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ke=a(Jt,"A",{href:!0,rel:!0});var ds=r(ke);Go=l(ds,"torch.nn.Module"),ds.forEach(o),Ko=l(Jt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jt.forEach(o),Jo=g(et),j=a(et,"DIV",{class:!0});var le=r(j);$(xe.$$.fragment,le),Xo=g(le),H=a(le,"P",{});var tt=r(H);Qo=l(tt,"The "),Re=a(tt,"A",{href:!0});var cs=r(Re);en=l(cs,"Swinv2Model"),cs.forEach(o),tn=l(tt," forward method, overrides the "),gt=a(tt,"CODE",{});var ps=r(gt);on=l(ps,"__call__"),ps.forEach(o),nn=l(tt," special method."),tt.forEach(o),sn=g(le),$(Q.$$.fragment,le),an=g(le),$(ee.$$.fragment,le),le.forEach(o),et.forEach(o),Dt=g(t),V=a(t,"H2",{class:!0});var Xt=r(V);te=a(Xt,"A",{id:!0,class:!0,href:!0});var hs=r(te);_t=a(hs,"SPAN",{});var ms=r(_t);$(Me.$$.fragment,ms),ms.forEach(o),hs.forEach(o),rn=g(Xt),wt=a(Xt,"SPAN",{});var fs=r(wt);ln=l(fs,"Swinv2ForMaskedImageModeling"),fs.forEach(o),Xt.forEach(o),Wt=g(t),P=a(t,"DIV",{class:!0});var ot=r(P);$(Ee.$$.fragment,ot),dn=g(ot),U=a(ot,"P",{});var nt=r(U);cn=l(nt,"Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),Fe=a(nt,"A",{href:!0,rel:!0});var us=r(Fe);pn=l(us,"SimMIM"),us.forEach(o),hn=l(nt,`.
This model is a PyTorch `),je=a(nt,"A",{href:!0,rel:!0});var gs=r(je);mn=l(gs,"torch.nn.Module"),gs.forEach(o),fn=l(nt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nt.forEach(o),un=g(ot),C=a(ot,"DIV",{class:!0});var de=r(C);$(Ce.$$.fragment,de),gn=g(de),Z=a(de,"P",{});var st=r(Z);_n=l(st,"The "),Ye=a(st,"A",{href:!0});var _s=r(Ye);wn=l(_s,"Swinv2ForMaskedImageModeling"),_s.forEach(o),vn=l(st," forward method, overrides the "),vt=a(st,"CODE",{});var ws=r(vt);bn=l(ws,"__call__"),ws.forEach(o),$n=l(st," special method."),st.forEach(o),yn=g(de),$(oe.$$.fragment,de),Sn=g(de),$(ne.$$.fragment,de),de.forEach(o),ot.forEach(o),Ht=g(t),B=a(t,"H2",{class:!0});var Qt=r(B);se=a(Qt,"A",{id:!0,class:!0,href:!0});var vs=r(se);bt=a(vs,"SPAN",{});var bs=r(bt);$(Ie.$$.fragment,bs),bs.forEach(o),vs.forEach(o),Tn=g(Qt),$t=a(Qt,"SPAN",{});var $s=r($t);kn=l($s,"Swinv2ForImageClassification"),$s.forEach(o),Qt.forEach(o),Vt=g(t),F=a(t,"DIV",{class:!0});var ce=r(F);$(Ae.$$.fragment,ce),xn=g(ce),yt=a(ce,"P",{});var ys=r(yt);Mn=l(ys,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),ys.forEach(o),En=g(ce),Pe=a(ce,"P",{});var eo=r(Pe);Fn=l(eo,"This model is a PyTorch "),qe=a(eo,"A",{href:!0,rel:!0});var Ss=r(qe);jn=l(Ss,"torch.nn.Module"),Ss.forEach(o),Cn=l(eo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),eo.forEach(o),In=g(ce),I=a(ce,"DIV",{class:!0});var pe=r(I);$(ze.$$.fragment,pe),An=g(pe),R=a(pe,"P",{});var at=r(R);Pn=l(at,"The "),Ge=a(at,"A",{href:!0});var Ts=r(Ge);qn=l(Ts,"Swinv2ForImageClassification"),Ts.forEach(o),zn=l(at," forward method, overrides the "),St=a(at,"CODE",{});var ks=r(St);On=l(ks,"__call__"),ks.forEach(o),Nn=l(at," special method."),at.forEach(o),Ln=g(pe),$(ae.$$.fragment,pe),Dn=g(pe),$(re.$$.fragment,pe),pe.forEach(o),ce.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Ls)),c(p,"id","swinv2"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#swinv2"),c(f,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(O,"class","relative group"),c(me,"href","https://arxiv.org/abs/2111.09883"),c(me,"rel","nofollow"),c(Ve,"href","/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(_e,"href","https://huggingface.co/nandwalritik"),c(_e,"rel","nofollow"),c(we,"href","https://github.com/microsoft/Swin-Transformer"),c(we,"rel","nofollow"),c(K,"id","transformers.Swinv2Config"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#transformers.Swinv2Config"),c(N,"class","relative group"),c(Ue,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),c($e,"href","https://huggingface.co/microsoft/swinv2_tiny_patch4_windows8_256"),c($e,"rel","nofollow"),c(Ze,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),c(Be,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"id","transformers.Swinv2Model"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#transformers.Swinv2Model"),c(W,"class","relative group"),c(ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ke,"rel","nofollow"),c(Re,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"id","transformers.Swinv2ForMaskedImageModeling"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.Swinv2ForMaskedImageModeling"),c(V,"class","relative group"),c(Fe,"href","https://arxiv.org/abs/2111.09886"),c(Fe,"rel","nofollow"),c(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(je,"rel","nofollow"),c(Ye,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForMaskedImageModeling"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(se,"id","transformers.Swinv2ForImageClassification"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#transformers.Swinv2ForImageClassification"),c(B,"class","relative group"),c(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qe,"rel","nofollow"),c(Ge,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForImageClassification"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,d),_(t,v,m),_(t,f,m),e(f,p),e(p,w),y(n,w,null),e(f,h),e(f,M),e(M,so),_(t,Ft,m),_(t,O,m),e(O,Y),e(Y,it),y(he,it,null),e(O,ao),e(O,lt),e(lt,ro),_(t,jt,m),_(t,G,m),e(G,io),e(G,me),e(me,lo),e(G,co),_(t,Ct,m),_(t,De,m),e(De,po),_(t,It,m),_(t,We,m),e(We,dt),e(dt,ho),_(t,At,m),_(t,He,m),e(He,mo),_(t,Pt,m),_(t,q,m),e(q,fe),e(fe,fo),e(fe,Ve),e(Ve,uo),e(fe,go),e(q,_o),e(q,ue),e(ue,wo),e(ue,ct),e(ct,vo),e(ue,bo),e(q,$o),e(q,ge),e(ge,yo),e(ge,pt),e(pt,So),e(ge,To),_(t,qt,m),_(t,z,m),e(z,ko),e(z,_e),e(_e,xo),e(z,Mo),e(z,we),e(we,Eo),e(z,Fo),_(t,zt,m),_(t,N,m),e(N,K),e(K,ht),y(ve,ht,null),e(N,jo),e(N,mt),e(mt,Co),_(t,Ot,m),_(t,E,m),y(be,E,null),e(E,Io),e(E,L),e(L,Ao),e(L,Ue),e(Ue,Po),e(L,qo),e(L,$e),e($e,zo),e(L,Oo),e(E,No),e(E,D),e(D,Lo),e(D,Ze),e(Ze,Do),e(D,Wo),e(D,Be),e(Be,Ho),e(D,Vo),e(E,Uo),y(J,E,null),_(t,Nt,m),_(t,W,m),e(W,X),e(X,ft),y(ye,ft,null),e(W,Zo),e(W,ut),e(ut,Bo),_(t,Lt,m),_(t,A,m),y(Se,A,null),e(A,Ro),e(A,Te),e(Te,Yo),e(Te,ke),e(ke,Go),e(Te,Ko),e(A,Jo),e(A,j),y(xe,j,null),e(j,Xo),e(j,H),e(H,Qo),e(H,Re),e(Re,en),e(H,tn),e(H,gt),e(gt,on),e(H,nn),e(j,sn),y(Q,j,null),e(j,an),y(ee,j,null),_(t,Dt,m),_(t,V,m),e(V,te),e(te,_t),y(Me,_t,null),e(V,rn),e(V,wt),e(wt,ln),_(t,Wt,m),_(t,P,m),y(Ee,P,null),e(P,dn),e(P,U),e(U,cn),e(U,Fe),e(Fe,pn),e(U,hn),e(U,je),e(je,mn),e(U,fn),e(P,un),e(P,C),y(Ce,C,null),e(C,gn),e(C,Z),e(Z,_n),e(Z,Ye),e(Ye,wn),e(Z,vn),e(Z,vt),e(vt,bn),e(Z,$n),e(C,yn),y(oe,C,null),e(C,Sn),y(ne,C,null),_(t,Ht,m),_(t,B,m),e(B,se),e(se,bt),y(Ie,bt,null),e(B,Tn),e(B,$t),e($t,kn),_(t,Vt,m),_(t,F,m),y(Ae,F,null),e(F,xn),e(F,yt),e(yt,Mn),e(F,En),e(F,Pe),e(Pe,Fn),e(Pe,qe),e(qe,jn),e(Pe,Cn),e(F,In),e(F,I),y(ze,I,null),e(I,An),e(I,R),e(R,Pn),e(R,Ge),e(Ge,qn),e(R,zn),e(R,St),e(St,On),e(R,Nn),e(I,Ln),y(ae,I,null),e(I,Dn),y(re,I,null),Ut=!0},p(t,[m]){const Oe={};m&2&&(Oe.$$scope={dirty:m,ctx:t}),J.$set(Oe);const Tt={};m&2&&(Tt.$$scope={dirty:m,ctx:t}),Q.$set(Tt);const kt={};m&2&&(kt.$$scope={dirty:m,ctx:t}),ee.$set(kt);const xt={};m&2&&(xt.$$scope={dirty:m,ctx:t}),oe.$set(xt);const Ne={};m&2&&(Ne.$$scope={dirty:m,ctx:t}),ne.$set(Ne);const Mt={};m&2&&(Mt.$$scope={dirty:m,ctx:t}),ae.$set(Mt);const Et={};m&2&&(Et.$$scope={dirty:m,ctx:t}),re.$set(Et)},i(t){Ut||(S(n.$$.fragment,t),S(he.$$.fragment,t),S(ve.$$.fragment,t),S(be.$$.fragment,t),S(J.$$.fragment,t),S(ye.$$.fragment,t),S(Se.$$.fragment,t),S(xe.$$.fragment,t),S(Q.$$.fragment,t),S(ee.$$.fragment,t),S(Me.$$.fragment,t),S(Ee.$$.fragment,t),S(Ce.$$.fragment,t),S(oe.$$.fragment,t),S(ne.$$.fragment,t),S(Ie.$$.fragment,t),S(Ae.$$.fragment,t),S(ze.$$.fragment,t),S(ae.$$.fragment,t),S(re.$$.fragment,t),Ut=!0)},o(t){T(n.$$.fragment,t),T(he.$$.fragment,t),T(ve.$$.fragment,t),T(be.$$.fragment,t),T(J.$$.fragment,t),T(ye.$$.fragment,t),T(Se.$$.fragment,t),T(xe.$$.fragment,t),T(Q.$$.fragment,t),T(ee.$$.fragment,t),T(Me.$$.fragment,t),T(Ee.$$.fragment,t),T(Ce.$$.fragment,t),T(oe.$$.fragment,t),T(ne.$$.fragment,t),T(Ie.$$.fragment,t),T(Ae.$$.fragment,t),T(ze.$$.fragment,t),T(ae.$$.fragment,t),T(re.$$.fragment,t),Ut=!1},d(t){o(d),t&&o(v),t&&o(f),k(n),t&&o(Ft),t&&o(O),k(he),t&&o(jt),t&&o(G),t&&o(Ct),t&&o(De),t&&o(It),t&&o(We),t&&o(At),t&&o(He),t&&o(Pt),t&&o(q),t&&o(qt),t&&o(z),t&&o(zt),t&&o(N),k(ve),t&&o(Ot),t&&o(E),k(be),k(J),t&&o(Nt),t&&o(W),k(ye),t&&o(Lt),t&&o(A),k(Se),k(xe),k(Q),k(ee),t&&o(Dt),t&&o(V),k(Me),t&&o(Wt),t&&o(P),k(Ee),k(Ce),k(oe),k(ne),t&&o(Ht),t&&o(B),k(Ie),t&&o(Vt),t&&o(F),k(Ae),k(ze),k(ae),k(re)}}}const Ls={local:"swinv2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Swinv2Config",title:"Swinv2Config"},{local:"transformers.Swinv2Model",title:"Swinv2Model"},{local:"transformers.Swinv2ForMaskedImageModeling",title:"Swinv2ForMaskedImageModeling"},{local:"transformers.Swinv2ForImageClassification",title:"Swinv2ForImageClassification"}],title:"Swinv2"};function Ds(x){return js(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rs extends xs{constructor(d){super();Ms(this,d,Ds,Ns,Es,{})}}export{Rs as default,Ls as metadata};
