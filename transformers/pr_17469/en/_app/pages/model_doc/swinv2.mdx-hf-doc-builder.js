import{S as cs,i as ps,s as hs,e as n,k as u,w as b,t as i,M as ms,c as s,d as o,m as g,a,x as $,h as l,b as c,G as t,g as _,y as S,q as y,o as T,B as k,v as fs,L as Gt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xn}from"../../chunks/Tip-hf-doc-builder.js";import{D as ze}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Kt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as nt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Rt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function us(x){let d,w;return d=new Kt({props:{code:`from transformers import Swinv2Config, Swinv2Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(p){$(d.$$.fragment,p)},m(p,m){S(d,p,m),w=!0},p:Gt,i(p){w||(y(d.$$.fragment,p),w=!0)},o(p){T(d.$$.fragment,p),w=!1},d(p){k(d,p)}}}function gs(x){let d,w,p,m,v;return{c(){d=n("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var f=a(d);w=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(f,"CODE",{});var M=a(p);m=l(M,"Module"),M.forEach(o),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(r,f){_(r,d,f),t(d,w),t(d,p),t(p,m),t(d,v)},d(r){r&&o(d)}}}function _s(x){let d,w,p,m,v;return m=new Kt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">64</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),w=i("Example:"),p=u(),b(m.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);w=l(f,"Example:"),f.forEach(o),p=g(r),$(m.$$.fragment,r)},m(r,f){_(r,d,f),t(d,w),_(r,p,f),S(m,r,f),v=!0},p:Gt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){T(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(p),k(m,r)}}}function ws(x){let d,w,p,m,v;return{c(){d=n("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var f=a(d);w=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(f,"CODE",{});var M=a(p);m=l(M,"Module"),M.forEach(o),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(r,f){_(r,d,f),t(d,w),t(d,p),t(p,m),t(d,v)},d(r){r&&o(d)}}}function vs(x){let d,w,p,m,v;return m=new Kt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">256</span>, <span class="hljs-number">256</span>]`}}),{c(){d=n("p"),w=i("Examples:"),p=u(),b(m.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);w=l(f,"Examples:"),f.forEach(o),p=g(r),$(m.$$.fragment,r)},m(r,f){_(r,d,f),t(d,w),_(r,p,f),S(m,r,f),v=!0},p:Gt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){T(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(p),k(m,r)}}}function bs(x){let d,w,p,m,v;return{c(){d=n("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var f=a(d);w=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(f,"CODE",{});var M=a(p);m=l(M,"Module"),M.forEach(o),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(r,f){_(r,d,f),t(d,w),t(d,p),t(p,m),t(d,v)},d(r){r&&o(d)}}}function $s(x){let d,w,p,m,v;return m=new Kt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),w=i("Example:"),p=u(),b(m.$$.fragment)},l(r){d=s(r,"P",{});var f=a(d);w=l(f,"Example:"),f.forEach(o),p=g(r),$(m.$$.fragment,r)},m(r,f){_(r,d,f),t(d,w),_(r,p,f),S(m,r,f),v=!0},p:Gt,i(r){v||(y(m.$$.fragment,r),v=!0)},o(r){T(m.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(p),k(m,r)}}}function Ss(x){let d,w,p,m,v,r,f,M,Jt,Tt,z,Y,st,pe,Xt,at,Qt,kt,R,eo,he,to,oo,xt,Oe,no,Mt,Ne,rt,so,Ft,De,ao,Et,Le,me,ro,We,io,lo,jt,q,co,fe,po,ho,ue,mo,fo,Ct,O,G,it,ge,uo,lt,go,It,F,_e,_o,N,wo,He,vo,bo,we,$o,So,yo,D,To,Ve,ko,xo,Ue,Mo,Fo,Eo,K,At,L,J,dt,ve,jo,ct,Co,Pt,A,be,Io,$e,Ao,Se,Po,qo,zo,j,ye,Oo,W,No,Ze,Do,Lo,pt,Wo,Ho,Vo,X,Uo,Q,qt,H,ee,ht,Te,Zo,mt,Bo,zt,P,ke,Yo,V,Ro,xe,Go,Ko,Me,Jo,Xo,Qo,C,Fe,en,U,tn,Be,on,nn,ft,sn,an,rn,te,ln,oe,Ot,Z,ne,ut,Ee,dn,gt,cn,Nt,E,je,pn,_t,hn,mn,Ce,fn,Ie,un,gn,_n,I,Ae,wn,B,vn,Ye,bn,$n,wt,Sn,yn,Tn,se,kn,ae,Dt;return r=new nt({}),pe=new nt({}),ge=new nt({}),_e=new ze({props:{name:"class transformers.Swinv2Config",anchor:"transformers.Swinv2Config",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Swinv2Config.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.</p>
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/configuration_swinv2.py#L30"}}),K=new Rt({props:{anchor:"transformers.Swinv2Config.example",$$slots:{default:[us]},$$scope:{ctx:x}}}),ve=new nt({}),be=new ze({props:{name:"class transformers.Swinv2Model",anchor:"transformers.Swinv2Model",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.Swinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L989"}}),ye=new ze({props:{name:"forward",anchor:"transformers.Swinv2Model.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),X=new xn({props:{$$slots:{default:[gs]},$$scope:{ctx:x}}}),Q=new Rt({props:{anchor:"transformers.Swinv2Model.forward.example",$$slots:{default:[_s]},$$scope:{ctx:x}}}),Te=new nt({}),ke=new ze({props:{name:"class transformers.Swinv2ForMaskedImageModeling",anchor:"transformers.Swinv2ForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1089"}}),Fe=new ze({props:{name:"forward",anchor:"transformers.Swinv2ForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1106",returnDescription:`
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
`}}),te=new xn({props:{$$slots:{default:[ws]},$$scope:{ctx:x}}}),oe=new Rt({props:{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.example",$$slots:{default:[vs]},$$scope:{ctx:x}}}),Ee=new nt({}),je=new ze({props:{name:"class transformers.Swinv2ForImageClassification",anchor:"transformers.Swinv2ForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1201"}}),Ae=new ze({props:{name:"forward",anchor:"transformers.Swinv2ForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1216",returnDescription:`
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
`}}),se=new xn({props:{$$slots:{default:[bs]},$$scope:{ctx:x}}}),ae=new Rt({props:{anchor:"transformers.Swinv2ForImageClassification.forward.example",$$slots:{default:[$s]},$$scope:{ctx:x}}}),{c(){d=n("meta"),w=u(),p=n("h1"),m=n("a"),v=n("span"),b(r.$$.fragment),f=u(),M=n("span"),Jt=i("Swin Transformer v2"),Tt=u(),z=n("h2"),Y=n("a"),st=n("span"),b(pe.$$.fragment),Xt=u(),at=n("span"),Qt=i("Overview"),kt=u(),R=n("p"),eo=i("The Swin Transformer v2 model was proposed in "),he=n("a"),to=i("Swin Transformer V2: Scaling Up Capacity and Resolution"),oo=i(" by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),xt=u(),Oe=n("p"),no=i("The abstract from the paper is the following:"),Mt=u(),Ne=n("p"),rt=n("em"),so=i("Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Ft=u(),De=n("p"),ao=i("Tips:"),Et=u(),Le=n("ul"),me=n("li"),ro=i("One can use the "),We=n("a"),io=i("AutoFeatureExtractor"),lo=i(" API to prepare images for the model."),jt=u(),q=n("p"),co=i("This model was contributed by "),fe=n("a"),po=i("nandwalritik"),ho=i(`.
The original code can be found `),ue=n("a"),mo=i("here"),fo=i("."),Ct=u(),O=n("h2"),G=n("a"),it=n("span"),b(ge.$$.fragment),uo=u(),lt=n("span"),go=i("Swinv2Config"),It=u(),F=n("div"),b(_e.$$.fragment),_o=u(),N=n("p"),wo=i("This is the configuration class to store the configuration of a "),He=n("a"),vo=i("Swinv2Model"),bo=i(`. It is used to instantiate a Swin
Transformer v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin Transformer v2
`),we=n("a"),$o=i("microsoft/swinv2_tiny_patch4_windows8_256"),So=i(`
architecture.`),yo=u(),D=n("p"),To=i("Configuration objects inherit from "),Ve=n("a"),ko=i("PretrainedConfig"),xo=i(` and can be used to control the model outputs. Read the
documentation from `),Ue=n("a"),Mo=i("PretrainedConfig"),Fo=i(" for more information."),Eo=u(),b(K.$$.fragment),At=u(),L=n("h2"),J=n("a"),dt=n("span"),b(ve.$$.fragment),jo=u(),ct=n("span"),Co=i("Swinv2Model"),Pt=u(),A=n("div"),b(be.$$.fragment),Io=u(),$e=n("p"),Ao=i(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=n("a"),Po=i("torch.nn.Module"),qo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo=u(),j=n("div"),b(ye.$$.fragment),Oo=u(),W=n("p"),No=i("The "),Ze=n("a"),Do=i("Swinv2Model"),Lo=i(" forward method, overrides the "),pt=n("code"),Wo=i("__call__"),Ho=i(" special method."),Vo=u(),b(X.$$.fragment),Uo=u(),b(Q.$$.fragment),qt=u(),H=n("h2"),ee=n("a"),ht=n("span"),b(Te.$$.fragment),Zo=u(),mt=n("span"),Bo=i("Swinv2ForMaskedImageModeling"),zt=u(),P=n("div"),b(ke.$$.fragment),Yo=u(),V=n("p"),Ro=i("Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),xe=n("a"),Go=i("SimMIM"),Ko=i(`.
This model is a PyTorch `),Me=n("a"),Jo=i("torch.nn.Module"),Xo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qo=u(),C=n("div"),b(Fe.$$.fragment),en=u(),U=n("p"),tn=i("The "),Be=n("a"),on=i("Swinv2ForMaskedImageModeling"),nn=i(" forward method, overrides the "),ft=n("code"),sn=i("__call__"),an=i(" special method."),rn=u(),b(te.$$.fragment),ln=u(),b(oe.$$.fragment),Ot=u(),Z=n("h2"),ne=n("a"),ut=n("span"),b(Ee.$$.fragment),dn=u(),gt=n("span"),cn=i("Swinv2ForImageClassification"),Nt=u(),E=n("div"),b(je.$$.fragment),pn=u(),_t=n("p"),hn=i(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),mn=u(),Ce=n("p"),fn=i("This model is a PyTorch "),Ie=n("a"),un=i("torch.nn.Module"),gn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_n=u(),I=n("div"),b(Ae.$$.fragment),wn=u(),B=n("p"),vn=i("The "),Ye=n("a"),bn=i("Swinv2ForImageClassification"),$n=i(" forward method, overrides the "),wt=n("code"),Sn=i("__call__"),yn=i(" special method."),Tn=u(),b(se.$$.fragment),kn=u(),b(ae.$$.fragment),this.h()},l(e){const h=ms('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),w=g(e),p=s(e,"H1",{class:!0});var Pe=a(p);m=s(Pe,"A",{id:!0,class:!0,href:!0});var vt=a(m);v=s(vt,"SPAN",{});var bt=a(v);$(r.$$.fragment,bt),bt.forEach(o),vt.forEach(o),f=g(Pe),M=s(Pe,"SPAN",{});var $t=a(M);Jt=l($t,"Swin Transformer v2"),$t.forEach(o),Pe.forEach(o),Tt=g(e),z=s(e,"H2",{class:!0});var qe=a(z);Y=s(qe,"A",{id:!0,class:!0,href:!0});var St=a(Y);st=s(St,"SPAN",{});var yt=a(st);$(pe.$$.fragment,yt),yt.forEach(o),St.forEach(o),Xt=g(qe),at=s(qe,"SPAN",{});var Mn=a(at);Qt=l(Mn,"Overview"),Mn.forEach(o),qe.forEach(o),kt=g(e),R=s(e,"P",{});var Lt=a(R);eo=l(Lt,"The Swin Transformer v2 model was proposed in "),he=s(Lt,"A",{href:!0,rel:!0});var Fn=a(he);to=l(Fn,"Swin Transformer V2: Scaling Up Capacity and Resolution"),Fn.forEach(o),oo=l(Lt," by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),Lt.forEach(o),xt=g(e),Oe=s(e,"P",{});var En=a(Oe);no=l(En,"The abstract from the paper is the following:"),En.forEach(o),Mt=g(e),Ne=s(e,"P",{});var jn=a(Ne);rt=s(jn,"EM",{});var Cn=a(rt);so=l(Cn,"Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Cn.forEach(o),jn.forEach(o),Ft=g(e),De=s(e,"P",{});var In=a(De);ao=l(In,"Tips:"),In.forEach(o),Et=g(e),Le=s(e,"UL",{});var An=a(Le);me=s(An,"LI",{});var Wt=a(me);ro=l(Wt,"One can use the "),We=s(Wt,"A",{href:!0});var Pn=a(We);io=l(Pn,"AutoFeatureExtractor"),Pn.forEach(o),lo=l(Wt," API to prepare images for the model."),Wt.forEach(o),An.forEach(o),jt=g(e),q=s(e,"P",{});var Re=a(q);co=l(Re,"This model was contributed by "),fe=s(Re,"A",{href:!0,rel:!0});var qn=a(fe);po=l(qn,"nandwalritik"),qn.forEach(o),ho=l(Re,`.
The original code can be found `),ue=s(Re,"A",{href:!0,rel:!0});var zn=a(ue);mo=l(zn,"here"),zn.forEach(o),fo=l(Re,"."),Re.forEach(o),Ct=g(e),O=s(e,"H2",{class:!0});var Ht=a(O);G=s(Ht,"A",{id:!0,class:!0,href:!0});var On=a(G);it=s(On,"SPAN",{});var Nn=a(it);$(ge.$$.fragment,Nn),Nn.forEach(o),On.forEach(o),uo=g(Ht),lt=s(Ht,"SPAN",{});var Dn=a(lt);go=l(Dn,"Swinv2Config"),Dn.forEach(o),Ht.forEach(o),It=g(e),F=s(e,"DIV",{class:!0});var re=a(F);$(_e.$$.fragment,re),_o=g(re),N=s(re,"P",{});var Ge=a(N);wo=l(Ge,"This is the configuration class to store the configuration of a "),He=s(Ge,"A",{href:!0});var Ln=a(He);vo=l(Ln,"Swinv2Model"),Ln.forEach(o),bo=l(Ge,`. It is used to instantiate a Swin
Transformer v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin Transformer v2
`),we=s(Ge,"A",{href:!0,rel:!0});var Wn=a(we);$o=l(Wn,"microsoft/swinv2_tiny_patch4_windows8_256"),Wn.forEach(o),So=l(Ge,`
architecture.`),Ge.forEach(o),yo=g(re),D=s(re,"P",{});var Ke=a(D);To=l(Ke,"Configuration objects inherit from "),Ve=s(Ke,"A",{href:!0});var Hn=a(Ve);ko=l(Hn,"PretrainedConfig"),Hn.forEach(o),xo=l(Ke,` and can be used to control the model outputs. Read the
documentation from `),Ue=s(Ke,"A",{href:!0});var Vn=a(Ue);Mo=l(Vn,"PretrainedConfig"),Vn.forEach(o),Fo=l(Ke," for more information."),Ke.forEach(o),Eo=g(re),$(K.$$.fragment,re),re.forEach(o),At=g(e),L=s(e,"H2",{class:!0});var Vt=a(L);J=s(Vt,"A",{id:!0,class:!0,href:!0});var Un=a(J);dt=s(Un,"SPAN",{});var Zn=a(dt);$(ve.$$.fragment,Zn),Zn.forEach(o),Un.forEach(o),jo=g(Vt),ct=s(Vt,"SPAN",{});var Bn=a(ct);Co=l(Bn,"Swinv2Model"),Bn.forEach(o),Vt.forEach(o),Pt=g(e),A=s(e,"DIV",{class:!0});var Je=a(A);$(be.$$.fragment,Je),Io=g(Je),$e=s(Je,"P",{});var Ut=a($e);Ao=l(Ut,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=s(Ut,"A",{href:!0,rel:!0});var Yn=a(Se);Po=l(Yn,"torch.nn.Module"),Yn.forEach(o),qo=l(Ut,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ut.forEach(o),zo=g(Je),j=s(Je,"DIV",{class:!0});var ie=a(j);$(ye.$$.fragment,ie),Oo=g(ie),W=s(ie,"P",{});var Xe=a(W);No=l(Xe,"The "),Ze=s(Xe,"A",{href:!0});var Rn=a(Ze);Do=l(Rn,"Swinv2Model"),Rn.forEach(o),Lo=l(Xe," forward method, overrides the "),pt=s(Xe,"CODE",{});var Gn=a(pt);Wo=l(Gn,"__call__"),Gn.forEach(o),Ho=l(Xe," special method."),Xe.forEach(o),Vo=g(ie),$(X.$$.fragment,ie),Uo=g(ie),$(Q.$$.fragment,ie),ie.forEach(o),Je.forEach(o),qt=g(e),H=s(e,"H2",{class:!0});var Zt=a(H);ee=s(Zt,"A",{id:!0,class:!0,href:!0});var Kn=a(ee);ht=s(Kn,"SPAN",{});var Jn=a(ht);$(Te.$$.fragment,Jn),Jn.forEach(o),Kn.forEach(o),Zo=g(Zt),mt=s(Zt,"SPAN",{});var Xn=a(mt);Bo=l(Xn,"Swinv2ForMaskedImageModeling"),Xn.forEach(o),Zt.forEach(o),zt=g(e),P=s(e,"DIV",{class:!0});var Qe=a(P);$(ke.$$.fragment,Qe),Yo=g(Qe),V=s(Qe,"P",{});var et=a(V);Ro=l(et,"Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),xe=s(et,"A",{href:!0,rel:!0});var Qn=a(xe);Go=l(Qn,"SimMIM"),Qn.forEach(o),Ko=l(et,`.
This model is a PyTorch `),Me=s(et,"A",{href:!0,rel:!0});var es=a(Me);Jo=l(es,"torch.nn.Module"),es.forEach(o),Xo=l(et,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),et.forEach(o),Qo=g(Qe),C=s(Qe,"DIV",{class:!0});var le=a(C);$(Fe.$$.fragment,le),en=g(le),U=s(le,"P",{});var tt=a(U);tn=l(tt,"The "),Be=s(tt,"A",{href:!0});var ts=a(Be);on=l(ts,"Swinv2ForMaskedImageModeling"),ts.forEach(o),nn=l(tt," forward method, overrides the "),ft=s(tt,"CODE",{});var os=a(ft);sn=l(os,"__call__"),os.forEach(o),an=l(tt," special method."),tt.forEach(o),rn=g(le),$(te.$$.fragment,le),ln=g(le),$(oe.$$.fragment,le),le.forEach(o),Qe.forEach(o),Ot=g(e),Z=s(e,"H2",{class:!0});var Bt=a(Z);ne=s(Bt,"A",{id:!0,class:!0,href:!0});var ns=a(ne);ut=s(ns,"SPAN",{});var ss=a(ut);$(Ee.$$.fragment,ss),ss.forEach(o),ns.forEach(o),dn=g(Bt),gt=s(Bt,"SPAN",{});var as=a(gt);cn=l(as,"Swinv2ForImageClassification"),as.forEach(o),Bt.forEach(o),Nt=g(e),E=s(e,"DIV",{class:!0});var de=a(E);$(je.$$.fragment,de),pn=g(de),_t=s(de,"P",{});var rs=a(_t);hn=l(rs,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),rs.forEach(o),mn=g(de),Ce=s(de,"P",{});var Yt=a(Ce);fn=l(Yt,"This model is a PyTorch "),Ie=s(Yt,"A",{href:!0,rel:!0});var is=a(Ie);un=l(is,"torch.nn.Module"),is.forEach(o),gn=l(Yt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yt.forEach(o),_n=g(de),I=s(de,"DIV",{class:!0});var ce=a(I);$(Ae.$$.fragment,ce),wn=g(ce),B=s(ce,"P",{});var ot=a(B);vn=l(ot,"The "),Ye=s(ot,"A",{href:!0});var ls=a(Ye);bn=l(ls,"Swinv2ForImageClassification"),ls.forEach(o),$n=l(ot," forward method, overrides the "),wt=s(ot,"CODE",{});var ds=a(wt);Sn=l(ds,"__call__"),ds.forEach(o),yn=l(ot," special method."),ot.forEach(o),Tn=g(ce),$(se.$$.fragment,ce),kn=g(ce),$(ae.$$.fragment,ce),ce.forEach(o),de.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(ys)),c(m,"id","swin-transformer-v2"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#swin-transformer-v2"),c(p,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(he,"href","https://arxiv.org/abs/2111.09883"),c(he,"rel","nofollow"),c(We,"href","/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(fe,"href","https://huggingface.co/nandwalritik"),c(fe,"rel","nofollow"),c(ue,"href","https://github.com/microsoft/Swin-Transformer"),c(ue,"rel","nofollow"),c(G,"id","transformers.Swinv2Config"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#transformers.Swinv2Config"),c(O,"class","relative group"),c(He,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),c(we,"href","https://huggingface.co/microsoft/swinv2_tiny_patch4_windows8_256"),c(we,"rel","nofollow"),c(Ve,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ue,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"id","transformers.Swinv2Model"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#transformers.Swinv2Model"),c(L,"class","relative group"),c(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Se,"rel","nofollow"),c(Ze,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"id","transformers.Swinv2ForMaskedImageModeling"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#transformers.Swinv2ForMaskedImageModeling"),c(H,"class","relative group"),c(xe,"href","https://arxiv.org/abs/2111.09886"),c(xe,"rel","nofollow"),c(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Me,"rel","nofollow"),c(Be,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForMaskedImageModeling"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ne,"id","transformers.Swinv2ForImageClassification"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#transformers.Swinv2ForImageClassification"),c(Z,"class","relative group"),c(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ie,"rel","nofollow"),c(Ye,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForImageClassification"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,h){t(document.head,d),_(e,w,h),_(e,p,h),t(p,m),t(m,v),S(r,v,null),t(p,f),t(p,M),t(M,Jt),_(e,Tt,h),_(e,z,h),t(z,Y),t(Y,st),S(pe,st,null),t(z,Xt),t(z,at),t(at,Qt),_(e,kt,h),_(e,R,h),t(R,eo),t(R,he),t(he,to),t(R,oo),_(e,xt,h),_(e,Oe,h),t(Oe,no),_(e,Mt,h),_(e,Ne,h),t(Ne,rt),t(rt,so),_(e,Ft,h),_(e,De,h),t(De,ao),_(e,Et,h),_(e,Le,h),t(Le,me),t(me,ro),t(me,We),t(We,io),t(me,lo),_(e,jt,h),_(e,q,h),t(q,co),t(q,fe),t(fe,po),t(q,ho),t(q,ue),t(ue,mo),t(q,fo),_(e,Ct,h),_(e,O,h),t(O,G),t(G,it),S(ge,it,null),t(O,uo),t(O,lt),t(lt,go),_(e,It,h),_(e,F,h),S(_e,F,null),t(F,_o),t(F,N),t(N,wo),t(N,He),t(He,vo),t(N,bo),t(N,we),t(we,$o),t(N,So),t(F,yo),t(F,D),t(D,To),t(D,Ve),t(Ve,ko),t(D,xo),t(D,Ue),t(Ue,Mo),t(D,Fo),t(F,Eo),S(K,F,null),_(e,At,h),_(e,L,h),t(L,J),t(J,dt),S(ve,dt,null),t(L,jo),t(L,ct),t(ct,Co),_(e,Pt,h),_(e,A,h),S(be,A,null),t(A,Io),t(A,$e),t($e,Ao),t($e,Se),t(Se,Po),t($e,qo),t(A,zo),t(A,j),S(ye,j,null),t(j,Oo),t(j,W),t(W,No),t(W,Ze),t(Ze,Do),t(W,Lo),t(W,pt),t(pt,Wo),t(W,Ho),t(j,Vo),S(X,j,null),t(j,Uo),S(Q,j,null),_(e,qt,h),_(e,H,h),t(H,ee),t(ee,ht),S(Te,ht,null),t(H,Zo),t(H,mt),t(mt,Bo),_(e,zt,h),_(e,P,h),S(ke,P,null),t(P,Yo),t(P,V),t(V,Ro),t(V,xe),t(xe,Go),t(V,Ko),t(V,Me),t(Me,Jo),t(V,Xo),t(P,Qo),t(P,C),S(Fe,C,null),t(C,en),t(C,U),t(U,tn),t(U,Be),t(Be,on),t(U,nn),t(U,ft),t(ft,sn),t(U,an),t(C,rn),S(te,C,null),t(C,ln),S(oe,C,null),_(e,Ot,h),_(e,Z,h),t(Z,ne),t(ne,ut),S(Ee,ut,null),t(Z,dn),t(Z,gt),t(gt,cn),_(e,Nt,h),_(e,E,h),S(je,E,null),t(E,pn),t(E,_t),t(_t,hn),t(E,mn),t(E,Ce),t(Ce,fn),t(Ce,Ie),t(Ie,un),t(Ce,gn),t(E,_n),t(E,I),S(Ae,I,null),t(I,wn),t(I,B),t(B,vn),t(B,Ye),t(Ye,bn),t(B,$n),t(B,wt),t(wt,Sn),t(B,yn),t(I,Tn),S(se,I,null),t(I,kn),S(ae,I,null),Dt=!0},p(e,[h]){const Pe={};h&2&&(Pe.$$scope={dirty:h,ctx:e}),K.$set(Pe);const vt={};h&2&&(vt.$$scope={dirty:h,ctx:e}),X.$set(vt);const bt={};h&2&&(bt.$$scope={dirty:h,ctx:e}),Q.$set(bt);const $t={};h&2&&($t.$$scope={dirty:h,ctx:e}),te.$set($t);const qe={};h&2&&(qe.$$scope={dirty:h,ctx:e}),oe.$set(qe);const St={};h&2&&(St.$$scope={dirty:h,ctx:e}),se.$set(St);const yt={};h&2&&(yt.$$scope={dirty:h,ctx:e}),ae.$set(yt)},i(e){Dt||(y(r.$$.fragment,e),y(pe.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(K.$$.fragment,e),y(ve.$$.fragment,e),y(be.$$.fragment,e),y(ye.$$.fragment,e),y(X.$$.fragment,e),y(Q.$$.fragment,e),y(Te.$$.fragment,e),y(ke.$$.fragment,e),y(Fe.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ae.$$.fragment,e),y(se.$$.fragment,e),y(ae.$$.fragment,e),Dt=!0)},o(e){T(r.$$.fragment,e),T(pe.$$.fragment,e),T(ge.$$.fragment,e),T(_e.$$.fragment,e),T(K.$$.fragment,e),T(ve.$$.fragment,e),T(be.$$.fragment,e),T(ye.$$.fragment,e),T(X.$$.fragment,e),T(Q.$$.fragment,e),T(Te.$$.fragment,e),T(ke.$$.fragment,e),T(Fe.$$.fragment,e),T(te.$$.fragment,e),T(oe.$$.fragment,e),T(Ee.$$.fragment,e),T(je.$$.fragment,e),T(Ae.$$.fragment,e),T(se.$$.fragment,e),T(ae.$$.fragment,e),Dt=!1},d(e){o(d),e&&o(w),e&&o(p),k(r),e&&o(Tt),e&&o(z),k(pe),e&&o(kt),e&&o(R),e&&o(xt),e&&o(Oe),e&&o(Mt),e&&o(Ne),e&&o(Ft),e&&o(De),e&&o(Et),e&&o(Le),e&&o(jt),e&&o(q),e&&o(Ct),e&&o(O),k(ge),e&&o(It),e&&o(F),k(_e),k(K),e&&o(At),e&&o(L),k(ve),e&&o(Pt),e&&o(A),k(be),k(ye),k(X),k(Q),e&&o(qt),e&&o(H),k(Te),e&&o(zt),e&&o(P),k(ke),k(Fe),k(te),k(oe),e&&o(Ot),e&&o(Z),k(Ee),e&&o(Nt),e&&o(E),k(je),k(Ae),k(se),k(ae)}}}const ys={local:"swin-transformer-v2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Swinv2Config",title:"Swinv2Config"},{local:"transformers.Swinv2Model",title:"Swinv2Model"},{local:"transformers.Swinv2ForMaskedImageModeling",title:"Swinv2ForMaskedImageModeling"},{local:"transformers.Swinv2ForImageClassification",title:"Swinv2ForImageClassification"}],title:"Swin Transformer v2"};function Ts(x){return fs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cs extends cs{constructor(d){super();ps(this,d,Ts,Ss,hs,{})}}export{Cs as default,ys as metadata};
