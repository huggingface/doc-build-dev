import{S as ss,i as as,s as rs,e as n,k as u,w as b,t as i,M as is,c as s,d as o,m as g,a as r,x as $,h as l,b as c,G as t,g as _,y as S,q as y,o as T,B as k,v as ls,L as Bt}from"../../chunks/vendor-hf-doc-builder.js";import{T as $n}from"../../chunks/Tip-hf-doc-builder.js";import{D as Pe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Yt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as et}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Vt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ds(M){let d,w;return d=new Yt({props:{code:`from transformers import Swinv2Model, Swinv2Config

# Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration
configuration = Swinv2Config()

# Initializing a model from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration
model = Swinv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Swinv2Model, Swinv2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Swinv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(p){$(d.$$.fragment,p)},m(p,m){S(d,p,m),w=!0},p:Bt,i(p){w||(y(d.$$.fragment,p),w=!0)},o(p){T(d.$$.fragment,p),w=!1},d(p){k(d,p)}}}function cs(M){let d,w,p,m,v;return{c(){d=n("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var f=r(d);w=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),t(d,w),t(d,p),t(p,m),t(d,v)},d(a){a&&o(d)}}}function ps(M){let d,w,p,m,v;return m=new Yt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2Model
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("nandwalritik/swinv2-tiny-patch4-window8-256")
model = Swinv2Model.from_pretrained("nandwalritik/swinv2-tiny-patch4-window8-256")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;nandwalritik/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model.from_pretrained(<span class="hljs-string">&quot;nandwalritik/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),w=i("Example:"),p=u(),b(m.$$.fragment)},l(a){d=s(a,"P",{});var f=r(d);w=l(f,"Example:"),f.forEach(o),p=g(a),$(m.$$.fragment,a)},m(a,f){_(a,d,f),t(d,w),_(a,p,f),S(m,a,f),v=!0},p:Bt,i(a){v||(y(m.$$.fragment,a),v=!0)},o(a){T(m.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(p),k(m,a)}}}function hs(M){let d,w,p,m,v;return{c(){d=n("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var f=r(d);w=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),t(d,w),t(d,p),t(p,m),t(d,v)},d(a){a&&o(d)}}}function ms(M){let d,w,p,m,v;return m=new Yt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")
model = Swinv2ForMaskedImageModeling.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2ForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),w=i("Examples:"),p=u(),b(m.$$.fragment)},l(a){d=s(a,"P",{});var f=r(d);w=l(f,"Examples:"),f.forEach(o),p=g(a),$(m.$$.fragment,a)},m(a,f){_(a,d,f),t(d,w),_(a,p,f),S(m,a,f),v=!0},p:Bt,i(a){v||(y(m.$$.fragment,a),v=!0)},o(a){T(m.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(p),k(m,a)}}}function fs(M){let d,w,p,m,v;return{c(){d=n("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var f=r(d);w=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),t(d,w),t(d,p),t(p,m),t(d,v)},d(a){a&&o(d)}}}function us(M){let d,w,p,m,v;return m=new Yt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("nandwalritik/swinv2-tiny-patch4-window8-256")
model = Swinv2ForImageClassification.from_pretrained("nandwalritik/swinv2-tiny-patch4-window8-256")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;nandwalritik/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2ForImageClassification.from_pretrained(<span class="hljs-string">&quot;nandwalritik/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=n("p"),w=i("Example:"),p=u(),b(m.$$.fragment)},l(a){d=s(a,"P",{});var f=r(d);w=l(f,"Example:"),f.forEach(o),p=g(a),$(m.$$.fragment,a)},m(a,f){_(a,d,f),t(d,w),_(a,p,f),S(m,a,f),v=!0},p:Bt,i(a){v||(y(m.$$.fragment,a),v=!0)},o(a){T(m.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(p),k(m,a)}}}function gs(M){let d,w,p,m,v,a,f,x,Zt,St,z,Y,tt,pe,Gt,ot,Kt,yt,Z,Jt,he,Xt,Qt,Tt,qe,eo,kt,ze,nt,to,Mt,Oe,oo,xt,Ne,no,Et,q,so,me,ao,ro,fe,io,lo,Ft,O,G,st,ue,co,at,po,jt,E,ge,ho,N,mo,De,fo,uo,_e,go,_o,wo,D,vo,Le,bo,$o,He,So,yo,To,K,Ct,L,J,rt,we,ko,it,Mo,It,A,ve,xo,be,Eo,$e,Fo,jo,Co,j,Se,Io,H,Ao,Re,Po,qo,lt,zo,Oo,No,X,Do,Q,At,R,ee,dt,ye,Lo,ct,Ho,Pt,P,Te,Ro,W,Wo,pt,Uo,Vo,ke,Bo,Yo,Zo,C,Me,Go,U,Ko,We,Jo,Xo,ht,Qo,en,tn,te,on,oe,qt,V,ne,mt,xe,nn,ft,sn,zt,F,Ee,an,ut,rn,ln,Fe,dn,je,cn,pn,hn,I,Ce,mn,B,fn,Ue,un,gn,gt,_n,wn,vn,se,bn,ae,Ot;return a=new et({}),pe=new et({}),ue=new et({}),ge=new Pe({props:{name:"class transformers.Swinv2Config",anchor:"transformers.Swinv2Config",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Swinv2Config.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/configuration_swinv2.py#L30"}}),K=new Vt({props:{anchor:"transformers.Swinv2Config.example",$$slots:{default:[ds]},$$scope:{ctx:M}}}),we=new et({}),ve=new Pe({props:{name:"class transformers.Swinv2Model",anchor:"transformers.Swinv2Model",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.Swinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L954"}}),Se=new Pe({props:{name:"forward",anchor:"transformers.Swinv2Model.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L981",returnDescription:`
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
`}}),X=new $n({props:{$$slots:{default:[cs]},$$scope:{ctx:M}}}),Q=new Vt({props:{anchor:"transformers.Swinv2Model.forward.example",$$slots:{default:[ps]},$$scope:{ctx:M}}}),ye=new et({}),Te=new Pe({props:{name:"class transformers.Swinv2ForMaskedImageModeling",anchor:"transformers.Swinv2ForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1053"}}),Me=new Pe({props:{name:"forward",anchor:"transformers.Swinv2ForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1068",returnDescription:`
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
`}}),te=new $n({props:{$$slots:{default:[hs]},$$scope:{ctx:M}}}),oe=new Vt({props:{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.example",$$slots:{default:[ms]},$$scope:{ctx:M}}}),xe=new et({}),Ee=new Pe({props:{name:"class transformers.Swinv2ForImageClassification",anchor:"transformers.Swinv2ForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1163"}}),Ce=new Pe({props:{name:"forward",anchor:"transformers.Swinv2ForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1178",returnDescription:`
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
`}}),se=new $n({props:{$$slots:{default:[fs]},$$scope:{ctx:M}}}),ae=new Vt({props:{anchor:"transformers.Swinv2ForImageClassification.forward.example",$$slots:{default:[us]},$$scope:{ctx:M}}}),{c(){d=n("meta"),w=u(),p=n("h1"),m=n("a"),v=n("span"),b(a.$$.fragment),f=u(),x=n("span"),Zt=i("Swinv2"),St=u(),z=n("h2"),Y=n("a"),tt=n("span"),b(pe.$$.fragment),Gt=u(),ot=n("span"),Kt=i("Overview"),yt=u(),Z=n("p"),Jt=i("The Swinv2 model was proposed in "),he=n("a"),Xt=i("Swin Transformer V2: Scaling Up Capacity and Resolution"),Qt=i(` by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo.
<INSERT SHORT SUMMARY HERE>`),Tt=u(),qe=n("p"),eo=i("The abstract from the paper is the following:"),kt=u(),ze=n("p"),nt=n("em"),to=i("Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Mt=u(),Oe=n("p"),oo=i("Tips:"),xt=u(),Ne=n("p"),no=i("<INSERT TIPS ABOUT MODEL HERE>"),Et=u(),q=n("p"),so=i("This model was contributed by "),me=n("a"),ao=i("nandwalritik"),ro=i(`.
The original code can be found `),fe=n("a"),io=i("here"),lo=i("."),Ft=u(),O=n("h2"),G=n("a"),st=n("span"),b(ue.$$.fragment),co=u(),at=n("span"),po=i("Swinv2Config"),jt=u(),E=n("div"),b(ge.$$.fragment),ho=u(),N=n("p"),mo=i("This is the configuration class to store the configuration of a "),De=n("a"),fo=i("Swinv2Model"),uo=i(`. It is used to instantiate a Swinv2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swinv2
`),_e=n("a"),go=i("microsoft/swinv2_tiny_patch4_windows8_256"),_o=i(`
architecture.`),wo=u(),D=n("p"),vo=i("Configuration objects inherit from "),Le=n("a"),bo=i("PretrainedConfig"),$o=i(` and can be used to control the model outputs. Read the
documentation from `),He=n("a"),So=i("PretrainedConfig"),yo=i(" for more information."),To=u(),b(K.$$.fragment),Ct=u(),L=n("h2"),J=n("a"),rt=n("span"),b(we.$$.fragment),ko=u(),it=n("span"),Mo=i("Swinv2Model"),It=u(),A=n("div"),b(ve.$$.fragment),xo=u(),be=n("p"),Eo=i(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$e=n("a"),Fo=i("torch.nn.Module"),jo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Co=u(),j=n("div"),b(Se.$$.fragment),Io=u(),H=n("p"),Ao=i("The "),Re=n("a"),Po=i("Swinv2Model"),qo=i(" forward method, overrides the "),lt=n("code"),zo=i("__call__"),Oo=i(" special method."),No=u(),b(X.$$.fragment),Do=u(),b(Q.$$.fragment),At=u(),R=n("h2"),ee=n("a"),dt=n("span"),b(ye.$$.fragment),Lo=u(),ct=n("span"),Ho=i("Swinv2ForMaskedImageModeling"),Pt=u(),P=n("div"),b(Te.$$.fragment),Ro=u(),W=n("p"),Wo=i("Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),pt=n("code"),Uo=i("SimMIM <https://arxiv.org/abs/2111.09886>"),Vo=i(`__.
This model is a PyTorch `),ke=n("a"),Bo=i("torch.nn.Module"),Yo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zo=u(),C=n("div"),b(Me.$$.fragment),Go=u(),U=n("p"),Ko=i("The "),We=n("a"),Jo=i("Swinv2ForMaskedImageModeling"),Xo=i(" forward method, overrides the "),ht=n("code"),Qo=i("__call__"),en=i(" special method."),tn=u(),b(te.$$.fragment),on=u(),b(oe.$$.fragment),qt=u(),V=n("h2"),ne=n("a"),mt=n("span"),b(xe.$$.fragment),nn=u(),ft=n("span"),sn=i("Swinv2ForImageClassification"),zt=u(),F=n("div"),b(Ee.$$.fragment),an=u(),ut=n("p"),rn=i(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),ln=u(),Fe=n("p"),dn=i("This model is a PyTorch "),je=n("a"),cn=i("torch.nn.Module"),pn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hn=u(),I=n("div"),b(Ce.$$.fragment),mn=u(),B=n("p"),fn=i("The "),Ue=n("a"),un=i("Swinv2ForImageClassification"),gn=i(" forward method, overrides the "),gt=n("code"),_n=i("__call__"),wn=i(" special method."),vn=u(),b(se.$$.fragment),bn=u(),b(ae.$$.fragment),this.h()},l(e){const h=is('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),w=g(e),p=s(e,"H1",{class:!0});var Ie=r(p);m=s(Ie,"A",{id:!0,class:!0,href:!0});var _t=r(m);v=s(_t,"SPAN",{});var wt=r(v);$(a.$$.fragment,wt),wt.forEach(o),_t.forEach(o),f=g(Ie),x=s(Ie,"SPAN",{});var vt=r(x);Zt=l(vt,"Swinv2"),vt.forEach(o),Ie.forEach(o),St=g(e),z=s(e,"H2",{class:!0});var Ae=r(z);Y=s(Ae,"A",{id:!0,class:!0,href:!0});var bt=r(Y);tt=s(bt,"SPAN",{});var $t=r(tt);$(pe.$$.fragment,$t),$t.forEach(o),bt.forEach(o),Gt=g(Ae),ot=s(Ae,"SPAN",{});var Sn=r(ot);Kt=l(Sn,"Overview"),Sn.forEach(o),Ae.forEach(o),yt=g(e),Z=s(e,"P",{});var Nt=r(Z);Jt=l(Nt,"The Swinv2 model was proposed in "),he=s(Nt,"A",{href:!0,rel:!0});var yn=r(he);Xt=l(yn,"Swin Transformer V2: Scaling Up Capacity and Resolution"),yn.forEach(o),Qt=l(Nt,` by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo.
<INSERT SHORT SUMMARY HERE>`),Nt.forEach(o),Tt=g(e),qe=s(e,"P",{});var Tn=r(qe);eo=l(Tn,"The abstract from the paper is the following:"),Tn.forEach(o),kt=g(e),ze=s(e,"P",{});var kn=r(ze);nt=s(kn,"EM",{});var Mn=r(nt);to=l(Mn,"Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Mn.forEach(o),kn.forEach(o),Mt=g(e),Oe=s(e,"P",{});var xn=r(Oe);oo=l(xn,"Tips:"),xn.forEach(o),xt=g(e),Ne=s(e,"P",{});var En=r(Ne);no=l(En,"<INSERT TIPS ABOUT MODEL HERE>"),En.forEach(o),Et=g(e),q=s(e,"P",{});var Ve=r(q);so=l(Ve,"This model was contributed by "),me=s(Ve,"A",{href:!0,rel:!0});var Fn=r(me);ao=l(Fn,"nandwalritik"),Fn.forEach(o),ro=l(Ve,`.
The original code can be found `),fe=s(Ve,"A",{href:!0,rel:!0});var jn=r(fe);io=l(jn,"here"),jn.forEach(o),lo=l(Ve,"."),Ve.forEach(o),Ft=g(e),O=s(e,"H2",{class:!0});var Dt=r(O);G=s(Dt,"A",{id:!0,class:!0,href:!0});var Cn=r(G);st=s(Cn,"SPAN",{});var In=r(st);$(ue.$$.fragment,In),In.forEach(o),Cn.forEach(o),co=g(Dt),at=s(Dt,"SPAN",{});var An=r(at);po=l(An,"Swinv2Config"),An.forEach(o),Dt.forEach(o),jt=g(e),E=s(e,"DIV",{class:!0});var re=r(E);$(ge.$$.fragment,re),ho=g(re),N=s(re,"P",{});var Be=r(N);mo=l(Be,"This is the configuration class to store the configuration of a "),De=s(Be,"A",{href:!0});var Pn=r(De);fo=l(Pn,"Swinv2Model"),Pn.forEach(o),uo=l(Be,`. It is used to instantiate a Swinv2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swinv2
`),_e=s(Be,"A",{href:!0,rel:!0});var qn=r(_e);go=l(qn,"microsoft/swinv2_tiny_patch4_windows8_256"),qn.forEach(o),_o=l(Be,`
architecture.`),Be.forEach(o),wo=g(re),D=s(re,"P",{});var Ye=r(D);vo=l(Ye,"Configuration objects inherit from "),Le=s(Ye,"A",{href:!0});var zn=r(Le);bo=l(zn,"PretrainedConfig"),zn.forEach(o),$o=l(Ye,` and can be used to control the model outputs. Read the
documentation from `),He=s(Ye,"A",{href:!0});var On=r(He);So=l(On,"PretrainedConfig"),On.forEach(o),yo=l(Ye," for more information."),Ye.forEach(o),To=g(re),$(K.$$.fragment,re),re.forEach(o),Ct=g(e),L=s(e,"H2",{class:!0});var Lt=r(L);J=s(Lt,"A",{id:!0,class:!0,href:!0});var Nn=r(J);rt=s(Nn,"SPAN",{});var Dn=r(rt);$(we.$$.fragment,Dn),Dn.forEach(o),Nn.forEach(o),ko=g(Lt),it=s(Lt,"SPAN",{});var Ln=r(it);Mo=l(Ln,"Swinv2Model"),Ln.forEach(o),Lt.forEach(o),It=g(e),A=s(e,"DIV",{class:!0});var Ze=r(A);$(ve.$$.fragment,Ze),xo=g(Ze),be=s(Ze,"P",{});var Ht=r(be);Eo=l(Ht,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$e=s(Ht,"A",{href:!0,rel:!0});var Hn=r($e);Fo=l(Hn,"torch.nn.Module"),Hn.forEach(o),jo=l(Ht,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ht.forEach(o),Co=g(Ze),j=s(Ze,"DIV",{class:!0});var ie=r(j);$(Se.$$.fragment,ie),Io=g(ie),H=s(ie,"P",{});var Ge=r(H);Ao=l(Ge,"The "),Re=s(Ge,"A",{href:!0});var Rn=r(Re);Po=l(Rn,"Swinv2Model"),Rn.forEach(o),qo=l(Ge," forward method, overrides the "),lt=s(Ge,"CODE",{});var Wn=r(lt);zo=l(Wn,"__call__"),Wn.forEach(o),Oo=l(Ge," special method."),Ge.forEach(o),No=g(ie),$(X.$$.fragment,ie),Do=g(ie),$(Q.$$.fragment,ie),ie.forEach(o),Ze.forEach(o),At=g(e),R=s(e,"H2",{class:!0});var Rt=r(R);ee=s(Rt,"A",{id:!0,class:!0,href:!0});var Un=r(ee);dt=s(Un,"SPAN",{});var Vn=r(dt);$(ye.$$.fragment,Vn),Vn.forEach(o),Un.forEach(o),Lo=g(Rt),ct=s(Rt,"SPAN",{});var Bn=r(ct);Ho=l(Bn,"Swinv2ForMaskedImageModeling"),Bn.forEach(o),Rt.forEach(o),Pt=g(e),P=s(e,"DIV",{class:!0});var Ke=r(P);$(Te.$$.fragment,Ke),Ro=g(Ke),W=s(Ke,"P",{});var Je=r(W);Wo=l(Je,"Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),pt=s(Je,"CODE",{});var Yn=r(pt);Uo=l(Yn,"SimMIM <https://arxiv.org/abs/2111.09886>"),Yn.forEach(o),Vo=l(Je,`__.
This model is a PyTorch `),ke=s(Je,"A",{href:!0,rel:!0});var Zn=r(ke);Bo=l(Zn,"torch.nn.Module"),Zn.forEach(o),Yo=l(Je,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Je.forEach(o),Zo=g(Ke),C=s(Ke,"DIV",{class:!0});var le=r(C);$(Me.$$.fragment,le),Go=g(le),U=s(le,"P",{});var Xe=r(U);Ko=l(Xe,"The "),We=s(Xe,"A",{href:!0});var Gn=r(We);Jo=l(Gn,"Swinv2ForMaskedImageModeling"),Gn.forEach(o),Xo=l(Xe," forward method, overrides the "),ht=s(Xe,"CODE",{});var Kn=r(ht);Qo=l(Kn,"__call__"),Kn.forEach(o),en=l(Xe," special method."),Xe.forEach(o),tn=g(le),$(te.$$.fragment,le),on=g(le),$(oe.$$.fragment,le),le.forEach(o),Ke.forEach(o),qt=g(e),V=s(e,"H2",{class:!0});var Wt=r(V);ne=s(Wt,"A",{id:!0,class:!0,href:!0});var Jn=r(ne);mt=s(Jn,"SPAN",{});var Xn=r(mt);$(xe.$$.fragment,Xn),Xn.forEach(o),Jn.forEach(o),nn=g(Wt),ft=s(Wt,"SPAN",{});var Qn=r(ft);sn=l(Qn,"Swinv2ForImageClassification"),Qn.forEach(o),Wt.forEach(o),zt=g(e),F=s(e,"DIV",{class:!0});var de=r(F);$(Ee.$$.fragment,de),an=g(de),ut=s(de,"P",{});var es=r(ut);rn=l(es,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),es.forEach(o),ln=g(de),Fe=s(de,"P",{});var Ut=r(Fe);dn=l(Ut,"This model is a PyTorch "),je=s(Ut,"A",{href:!0,rel:!0});var ts=r(je);cn=l(ts,"torch.nn.Module"),ts.forEach(o),pn=l(Ut,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ut.forEach(o),hn=g(de),I=s(de,"DIV",{class:!0});var ce=r(I);$(Ce.$$.fragment,ce),mn=g(ce),B=s(ce,"P",{});var Qe=r(B);fn=l(Qe,"The "),Ue=s(Qe,"A",{href:!0});var os=r(Ue);un=l(os,"Swinv2ForImageClassification"),os.forEach(o),gn=l(Qe," forward method, overrides the "),gt=s(Qe,"CODE",{});var ns=r(gt);_n=l(ns,"__call__"),ns.forEach(o),wn=l(Qe," special method."),Qe.forEach(o),vn=g(ce),$(se.$$.fragment,ce),bn=g(ce),$(ae.$$.fragment,ce),ce.forEach(o),de.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(_s)),c(m,"id","swinv2"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#swinv2"),c(p,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(he,"href","https://arxiv.org/abs/2111.09883"),c(he,"rel","nofollow"),c(me,"href","https://huggingface.co/nandwalritik"),c(me,"rel","nofollow"),c(fe,"href","https://github.com/microsoft/Swin-Transformer"),c(fe,"rel","nofollow"),c(G,"id","transformers.Swinv2Config"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#transformers.Swinv2Config"),c(O,"class","relative group"),c(De,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),c(_e,"href","https://huggingface.co/microsoft/swinv2_tiny_patch4_windows8_256"),c(_e,"rel","nofollow"),c(Le,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),c(He,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"id","transformers.Swinv2Model"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#transformers.Swinv2Model"),c(L,"class","relative group"),c($e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($e,"rel","nofollow"),c(Re,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"id","transformers.Swinv2ForMaskedImageModeling"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#transformers.Swinv2ForMaskedImageModeling"),c(R,"class","relative group"),c(ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ke,"rel","nofollow"),c(We,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForMaskedImageModeling"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ne,"id","transformers.Swinv2ForImageClassification"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#transformers.Swinv2ForImageClassification"),c(V,"class","relative group"),c(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(je,"rel","nofollow"),c(Ue,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForImageClassification"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,h){t(document.head,d),_(e,w,h),_(e,p,h),t(p,m),t(m,v),S(a,v,null),t(p,f),t(p,x),t(x,Zt),_(e,St,h),_(e,z,h),t(z,Y),t(Y,tt),S(pe,tt,null),t(z,Gt),t(z,ot),t(ot,Kt),_(e,yt,h),_(e,Z,h),t(Z,Jt),t(Z,he),t(he,Xt),t(Z,Qt),_(e,Tt,h),_(e,qe,h),t(qe,eo),_(e,kt,h),_(e,ze,h),t(ze,nt),t(nt,to),_(e,Mt,h),_(e,Oe,h),t(Oe,oo),_(e,xt,h),_(e,Ne,h),t(Ne,no),_(e,Et,h),_(e,q,h),t(q,so),t(q,me),t(me,ao),t(q,ro),t(q,fe),t(fe,io),t(q,lo),_(e,Ft,h),_(e,O,h),t(O,G),t(G,st),S(ue,st,null),t(O,co),t(O,at),t(at,po),_(e,jt,h),_(e,E,h),S(ge,E,null),t(E,ho),t(E,N),t(N,mo),t(N,De),t(De,fo),t(N,uo),t(N,_e),t(_e,go),t(N,_o),t(E,wo),t(E,D),t(D,vo),t(D,Le),t(Le,bo),t(D,$o),t(D,He),t(He,So),t(D,yo),t(E,To),S(K,E,null),_(e,Ct,h),_(e,L,h),t(L,J),t(J,rt),S(we,rt,null),t(L,ko),t(L,it),t(it,Mo),_(e,It,h),_(e,A,h),S(ve,A,null),t(A,xo),t(A,be),t(be,Eo),t(be,$e),t($e,Fo),t(be,jo),t(A,Co),t(A,j),S(Se,j,null),t(j,Io),t(j,H),t(H,Ao),t(H,Re),t(Re,Po),t(H,qo),t(H,lt),t(lt,zo),t(H,Oo),t(j,No),S(X,j,null),t(j,Do),S(Q,j,null),_(e,At,h),_(e,R,h),t(R,ee),t(ee,dt),S(ye,dt,null),t(R,Lo),t(R,ct),t(ct,Ho),_(e,Pt,h),_(e,P,h),S(Te,P,null),t(P,Ro),t(P,W),t(W,Wo),t(W,pt),t(pt,Uo),t(W,Vo),t(W,ke),t(ke,Bo),t(W,Yo),t(P,Zo),t(P,C),S(Me,C,null),t(C,Go),t(C,U),t(U,Ko),t(U,We),t(We,Jo),t(U,Xo),t(U,ht),t(ht,Qo),t(U,en),t(C,tn),S(te,C,null),t(C,on),S(oe,C,null),_(e,qt,h),_(e,V,h),t(V,ne),t(ne,mt),S(xe,mt,null),t(V,nn),t(V,ft),t(ft,sn),_(e,zt,h),_(e,F,h),S(Ee,F,null),t(F,an),t(F,ut),t(ut,rn),t(F,ln),t(F,Fe),t(Fe,dn),t(Fe,je),t(je,cn),t(Fe,pn),t(F,hn),t(F,I),S(Ce,I,null),t(I,mn),t(I,B),t(B,fn),t(B,Ue),t(Ue,un),t(B,gn),t(B,gt),t(gt,_n),t(B,wn),t(I,vn),S(se,I,null),t(I,bn),S(ae,I,null),Ot=!0},p(e,[h]){const Ie={};h&2&&(Ie.$$scope={dirty:h,ctx:e}),K.$set(Ie);const _t={};h&2&&(_t.$$scope={dirty:h,ctx:e}),X.$set(_t);const wt={};h&2&&(wt.$$scope={dirty:h,ctx:e}),Q.$set(wt);const vt={};h&2&&(vt.$$scope={dirty:h,ctx:e}),te.$set(vt);const Ae={};h&2&&(Ae.$$scope={dirty:h,ctx:e}),oe.$set(Ae);const bt={};h&2&&(bt.$$scope={dirty:h,ctx:e}),se.$set(bt);const $t={};h&2&&($t.$$scope={dirty:h,ctx:e}),ae.$set($t)},i(e){Ot||(y(a.$$.fragment,e),y(pe.$$.fragment,e),y(ue.$$.fragment,e),y(ge.$$.fragment,e),y(K.$$.fragment,e),y(we.$$.fragment,e),y(ve.$$.fragment,e),y(Se.$$.fragment,e),y(X.$$.fragment,e),y(Q.$$.fragment,e),y(ye.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(xe.$$.fragment,e),y(Ee.$$.fragment,e),y(Ce.$$.fragment,e),y(se.$$.fragment,e),y(ae.$$.fragment,e),Ot=!0)},o(e){T(a.$$.fragment,e),T(pe.$$.fragment,e),T(ue.$$.fragment,e),T(ge.$$.fragment,e),T(K.$$.fragment,e),T(we.$$.fragment,e),T(ve.$$.fragment,e),T(Se.$$.fragment,e),T(X.$$.fragment,e),T(Q.$$.fragment,e),T(ye.$$.fragment,e),T(Te.$$.fragment,e),T(Me.$$.fragment,e),T(te.$$.fragment,e),T(oe.$$.fragment,e),T(xe.$$.fragment,e),T(Ee.$$.fragment,e),T(Ce.$$.fragment,e),T(se.$$.fragment,e),T(ae.$$.fragment,e),Ot=!1},d(e){o(d),e&&o(w),e&&o(p),k(a),e&&o(St),e&&o(z),k(pe),e&&o(yt),e&&o(Z),e&&o(Tt),e&&o(qe),e&&o(kt),e&&o(ze),e&&o(Mt),e&&o(Oe),e&&o(xt),e&&o(Ne),e&&o(Et),e&&o(q),e&&o(Ft),e&&o(O),k(ue),e&&o(jt),e&&o(E),k(ge),k(K),e&&o(Ct),e&&o(L),k(we),e&&o(It),e&&o(A),k(ve),k(Se),k(X),k(Q),e&&o(At),e&&o(R),k(ye),e&&o(Pt),e&&o(P),k(Te),k(Me),k(te),k(oe),e&&o(qt),e&&o(V),k(xe),e&&o(zt),e&&o(F),k(Ee),k(Ce),k(se),k(ae)}}}const _s={local:"swinv2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Swinv2Config",title:"Swinv2Config"},{local:"transformers.Swinv2Model",title:"Swinv2Model"},{local:"transformers.Swinv2ForMaskedImageModeling",title:"Swinv2ForMaskedImageModeling"},{local:"transformers.Swinv2ForImageClassification",title:"Swinv2ForImageClassification"}],title:"Swinv2"};function ws(M){return ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ks extends ss{constructor(d){super();as(this,d,ws,gs,rs,{})}}export{ks as default,_s as metadata};
