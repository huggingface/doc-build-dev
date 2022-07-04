import{S as Er,i as xr,s as jr,e as n,k as u,w as b,t as l,M as Ir,c as a,d as o,m as g,a as r,x as $,h as d,b as m,G as e,g as _,y as T,q as S,o as y,B as k,v as Cr,L as bt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Jt}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as $t}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as vt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ar(F){let i,v;return i=new $t({props:{code:`from transformers import Swinv2Model, Swinv2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(i.$$.fragment)},l(p){$(i.$$.fragment,p)},m(p,h){T(i,p,h),v=!0},p:bt,i(p){v||(S(i.$$.fragment,p),v=!0)},o(p){y(i.$$.fragment,p),v=!1},d(p){k(i,p)}}}function Pr(F){let i,v,p,h,w;return{c(){i=n("p"),v=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),h=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(c,"CODE",{});var M=r(p);h=d(M,"Module"),M.forEach(o),w=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,i,c),e(i,v),e(i,p),e(p,h),e(i,w)},d(s){s&&o(i)}}}function qr(F){let i,v,p,h,w;return h=new $t({props:{code:`from transformers import AutoFeatureExtractor, Swinv2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){i=n("p"),v=l("Example:"),p=u(),b(h.$$.fragment)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Example:"),c.forEach(o),p=g(s),$(h.$$.fragment,s)},m(s,c){_(s,i,c),e(i,v),_(s,p,c),T(h,s,c),w=!0},p:bt,i(s){w||(S(h.$$.fragment,s),w=!0)},o(s){y(h.$$.fragment,s),w=!1},d(s){s&&o(i),s&&o(p),k(h,s)}}}function zr(F){let i,v,p,h,w;return{c(){i=n("p"),v=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),h=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(c,"CODE",{});var M=r(p);h=d(M,"Module"),M.forEach(o),w=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,i,c),e(i,v),e(i,p),e(p,h),e(i,w)},d(s){s&&o(i)}}}function Or(F){let i,v,p,h,w;return h=new $t({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){i=n("p"),v=l("Examples:"),p=u(),b(h.$$.fragment)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Examples:"),c.forEach(o),p=g(s),$(h.$$.fragment,s)},m(s,c){_(s,i,c),e(i,v),_(s,p,c),T(h,s,c),w=!0},p:bt,i(s){w||(S(h.$$.fragment,s),w=!0)},o(s){y(h.$$.fragment,s),w=!1},d(s){s&&o(i),s&&o(p),k(h,s)}}}function Nr(F){let i,v,p,h,w;return{c(){i=n("p"),v=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),h=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(c,"CODE",{});var M=r(p);h=d(M,"Module"),M.forEach(o),w=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,i,c),e(i,v),e(i,p),e(p,h),e(i,w)},d(s){s&&o(i)}}}function Rr(F){let i,v,p,h,w;return h=new $t({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForImageClassification
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
tabby, tabby cat`}}),{c(){i=n("p"),v=l("Example:"),p=u(),b(h.$$.fragment)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Example:"),c.forEach(o),p=g(s),$(h.$$.fragment,s)},m(s,c){_(s,i,c),e(i,v),_(s,p,c),T(h,s,c),w=!0},p:bt,i(s){w||(S(h.$$.fragment,s),w=!0)},o(s){y(h.$$.fragment,s),w=!1},d(s){s&&o(i),s&&o(p),k(h,s)}}}function Dr(F){let i,v,p,h,w;return{c(){i=n("p"),v=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),h=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(c,"CODE",{});var M=r(p);h=d(M,"Module"),M.forEach(o),w=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,i,c),e(i,v),e(i,p),e(p,h),e(i,w)},d(s){s&&o(i)}}}function Hr(F){let i,v,p,h,w;return h=new $t({props:{code:`from transformers import AutoFeatureExtractor, TFSwinv2Model
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")
model = TFSwinv2Model.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFSwinv2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){i=n("p"),v=l("Example:"),p=u(),b(h.$$.fragment)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Example:"),c.forEach(o),p=g(s),$(h.$$.fragment,s)},m(s,c){_(s,i,c),e(i,v),_(s,p,c),T(h,s,c),w=!0},p:bt,i(s){w||(S(h.$$.fragment,s),w=!0)},o(s){y(h.$$.fragment,s),w=!1},d(s){s&&o(i),s&&o(p),k(h,s)}}}function Lr(F){let i,v,p,h,w;return{c(){i=n("p"),v=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),h=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(c,"CODE",{});var M=r(p);h=d(M,"Module"),M.forEach(o),w=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,i,c),e(i,v),e(i,p),e(p,h),e(i,w)},d(s){s&&o(i)}}}function Ur(F){let i,v,p,h,w;return h=new $t({props:{code:`from transformers import AutoFeatureExtractor, TFSwinv2ForMaskedImageModeling
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")
model = TFSwinv2ForMaskedImageModeling.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="tf").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = tf.random.uniform((1, num_patches)) >= 0.5

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFSwinv2ForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinv2ForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = tf.random.uniform((<span class="hljs-number">1</span>, num_patches)) &gt;= <span class="hljs-number">0.5</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){i=n("p"),v=l("Examples:"),p=u(),b(h.$$.fragment)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Examples:"),c.forEach(o),p=g(s),$(h.$$.fragment,s)},m(s,c){_(s,i,c),e(i,v),_(s,p,c),T(h,s,c),w=!0},p:bt,i(s){w||(S(h.$$.fragment,s),w=!0)},o(s){y(h.$$.fragment,s),w=!1},d(s){s&&o(i),s&&o(p),k(h,s)}}}function Wr(F){let i,v,p,h,w;return{c(){i=n("p"),v=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),h=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(c,"CODE",{});var M=r(p);h=d(M,"Module"),M.forEach(o),w=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(s,c){_(s,i,c),e(i,v),e(i,p),e(p,h),e(i,w)},d(s){s&&o(i)}}}function Br(F){let i,v,p,h,w;return h=new $t({props:{code:`from transformers import AutoFeatureExtractor, TFSwinv2ForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")
model = TFSwinv2ForImageClassification.from_pretrained("microsoft/swinv2_tiny_patch4_windows8_256")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFSwinv2ForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinv2ForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2_tiny_patch4_windows8_256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){i=n("p"),v=l("Example:"),p=u(),b(h.$$.fragment)},l(s){i=a(s,"P",{});var c=r(i);v=d(c,"Example:"),c.forEach(o),p=g(s),$(h.$$.fragment,s)},m(s,c){_(s,i,c),e(i,v),_(s,p,c),T(h,s,c),w=!0},p:bt,i(s){w||(S(h.$$.fragment,s),w=!0)},o(s){y(h.$$.fragment,s),w=!1},d(s){s&&o(i),s&&o(p),k(h,s)}}}function Vr(F){let i,v,p,h,w,s,c,M,gs,zo,L,ie,Qt,Ne,_s,Xt,ws,Oo,Tt,vs,No,St,bs,Ro,yt,Zt,$s,Do,kt,Ts,Ho,Ft,Ss,Lo,le,ys,Re,ks,Fs,Uo,U,de,eo,De,Ms,to,Es,Wo,E,He,xs,W,js,Mt,Is,Cs,Le,As,Ps,qs,B,zs,Et,Os,Ns,xt,Rs,Ds,Hs,ce,Bo,V,pe,oo,Ue,Ls,so,Us,Vo,N,We,Ws,Be,Bs,Ve,Vs,Ys,Ks,C,Ye,Gs,Y,Js,jt,Qs,Xs,no,Zs,en,tn,he,on,me,Yo,K,fe,ao,Ke,sn,ro,nn,Ko,R,Ge,an,G,rn,io,ln,dn,Je,cn,pn,hn,A,Qe,mn,J,fn,It,un,gn,lo,_n,wn,vn,ue,bn,ge,Go,Q,_e,co,Xe,$n,po,Tn,Jo,x,Ze,Sn,ho,yn,kn,et,Fn,tt,Mn,En,xn,P,ot,jn,X,In,Ct,Cn,An,mo,Pn,qn,zn,we,On,ve,Qo,Z,be,fo,st,Nn,uo,Rn,Xo,D,nt,Dn,at,Hn,rt,Ln,Un,Wn,q,it,Bn,ee,Vn,At,Yn,Kn,go,Gn,Jn,Qn,$e,Xn,Te,Zo,te,Se,_o,lt,Zn,wo,ea,es,H,dt,ta,oe,oa,vo,sa,na,ct,aa,ra,ia,z,pt,la,se,da,Pt,ca,pa,bo,ha,ma,fa,ye,ua,ke,ts,ne,Fe,$o,ht,ga,To,_a,os,j,mt,wa,So,va,ba,ft,$a,ut,Ta,Sa,ya,O,gt,ka,ae,Fa,qt,Ma,Ea,yo,xa,ja,Ia,Me,Ca,Ee,ss;return s=new re({}),Ne=new re({}),De=new re({}),He=new I({props:{name:"class transformers.Swinv2Config",anchor:"transformers.Swinv2Config",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Swinv2Config.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/configuration_swinv2.py#L30"}}),ce=new vt({props:{anchor:"transformers.Swinv2Config.example",$$slots:{default:[Ar]},$$scope:{ctx:F}}}),Ue=new re({}),We=new I({props:{name:"class transformers.Swinv2Model",anchor:"transformers.Swinv2Model",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.Swinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L952"}}),Ye=new I({props:{name:"forward",anchor:"transformers.Swinv2Model.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L979",returnDescription:`
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
`}}),he=new Jt({props:{$$slots:{default:[Pr]},$$scope:{ctx:F}}}),me=new vt({props:{anchor:"transformers.Swinv2Model.forward.example",$$slots:{default:[qr]},$$scope:{ctx:F}}}),Ke=new re({}),Ge=new I({props:{name:"class transformers.Swinv2ForMaskedImageModeling",anchor:"transformers.Swinv2ForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1051"}}),Qe=new I({props:{name:"forward",anchor:"transformers.Swinv2ForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1066",returnDescription:`
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
`}}),ue=new Jt({props:{$$slots:{default:[zr]},$$scope:{ctx:F}}}),ge=new vt({props:{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.example",$$slots:{default:[Or]},$$scope:{ctx:F}}}),Xe=new re({}),Ze=new I({props:{name:"class transformers.Swinv2ForImageClassification",anchor:"transformers.Swinv2ForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1161"}}),ot=new I({props:{name:"forward",anchor:"transformers.Swinv2ForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_swinv2.py#L1176",returnDescription:`
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
`}}),we=new Jt({props:{$$slots:{default:[Nr]},$$scope:{ctx:F}}}),ve=new vt({props:{anchor:"transformers.Swinv2ForImageClassification.forward.example",$$slots:{default:[Rr]},$$scope:{ctx:F}}}),st=new re({}),nt=new I({props:{name:"class transformers.TFSwinv2Model",anchor:"transformers.TFSwinv2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_tf_swinv2.py#L1198"}}),it=new I({props:{name:"call",anchor:"transformers.TFSwinv2Model.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinv2Model.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinv2Model.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinv2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinv2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinv2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_tf_swinv2.py#L1206",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_tf_swinv2.TFSwinv2ModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swinv2.modeling_tf_swinv2.TFSwinv2ModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),$e=new Jt({props:{$$slots:{default:[Dr]},$$scope:{ctx:F}}}),Te=new vt({props:{anchor:"transformers.TFSwinv2Model.call.example",$$slots:{default:[Hr]},$$scope:{ctx:F}}}),lt=new re({}),dt=new I({props:{name:"class transformers.TFSwinv2ForMaskedImageModeling",anchor:"transformers.TFSwinv2ForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_tf_swinv2.py#L1300"}}),pt=new I({props:{name:"call",anchor:"transformers.TFSwinv2ForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_tf_swinv2.py#L1308",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_tf_swinv2.TFSwinv2MaskedImageModelingOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) \u2014 Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swinv2.modeling_tf_swinv2.TFSwinv2MaskedImageModelingOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),ye=new Jt({props:{$$slots:{default:[Lr]},$$scope:{ctx:F}}}),ke=new vt({props:{anchor:"transformers.TFSwinv2ForMaskedImageModeling.call.example",$$slots:{default:[Ur]},$$scope:{ctx:F}}}),ht=new re({}),mt=new I({props:{name:"class transformers.TFSwinv2ForImageClassification",anchor:"transformers.TFSwinv2ForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17469/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_tf_swinv2.py#L1412"}}),gt=new I({props:{name:"call",anchor:"transformers.TFSwinv2ForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinv2ForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17469/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinv2ForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinv2ForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinv2ForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinv2ForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17469/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinv2ForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17469/src/transformers/models/swinv2/modeling_tf_swinv2.py#L1426",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_tf_swinv2.TFSwinv2ImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swinv2.modeling_tf_swinv2.TFSwinv2ImageClassifierOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Me=new Jt({props:{$$slots:{default:[Wr]},$$scope:{ctx:F}}}),Ee=new vt({props:{anchor:"transformers.TFSwinv2ForImageClassification.call.example",$$slots:{default:[Br]},$$scope:{ctx:F}}}),{c(){i=n("meta"),v=u(),p=n("h1"),h=n("a"),w=n("span"),b(s.$$.fragment),c=u(),M=n("span"),gs=l("Swinv2"),zo=u(),L=n("h2"),ie=n("a"),Qt=n("span"),b(Ne.$$.fragment),_s=u(),Xt=n("span"),ws=l("Overview"),Oo=u(),Tt=n("p"),vs=l(`The Swinv2 model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),No=u(),St=n("p"),bs=l("The abstract from the paper is the following:"),Ro=u(),yt=n("p"),Zt=n("em"),$s=l("<INSERT PAPER ABSTRACT HERE>"),Do=u(),kt=n("p"),Ts=l("Tips:"),Ho=u(),Ft=n("p"),Ss=l("<INSERT TIPS ABOUT MODEL HERE>"),Lo=u(),le=n("p"),ys=l("This model was contributed by [INSERT YOUR HF USERNAME HERE]("),Re=n("a"),ks=l("https://huggingface.co/<INSERT"),Fs=l(` YOUR HF USERNAME HERE>).
The original code can be found [here](<INSERT LINK TO GITHUB REPO HERE>).`),Uo=u(),U=n("h2"),de=n("a"),eo=n("span"),b(De.$$.fragment),Ms=u(),to=n("span"),Es=l("Swinv2Config"),Wo=u(),E=n("div"),b(He.$$.fragment),xs=u(),W=n("p"),js=l("This is the configuration class to store the configuration of a "),Mt=n("a"),Is=l("Swinv2Model"),Cs=l(`. It is used to instantiate a Swinv2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swinv2
`),Le=n("a"),As=l("microsoft/swinv2_tiny_patch4_windows8_256"),Ps=l(`
architecture.`),qs=u(),B=n("p"),zs=l("Configuration objects inherit from "),Et=n("a"),Os=l("PretrainedConfig"),Ns=l(` and can be used to control the model outputs. Read the
documentation from `),xt=n("a"),Rs=l("PretrainedConfig"),Ds=l(" for more information."),Hs=u(),b(ce.$$.fragment),Bo=u(),V=n("h2"),pe=n("a"),oo=n("span"),b(Ue.$$.fragment),Ls=u(),so=n("span"),Us=l("Swinv2Model"),Vo=u(),N=n("div"),b(We.$$.fragment),Ws=u(),Be=n("p"),Bs=l(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ve=n("a"),Vs=l("torch.nn.Module"),Ys=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ks=u(),C=n("div"),b(Ye.$$.fragment),Gs=u(),Y=n("p"),Js=l("The "),jt=n("a"),Qs=l("Swinv2Model"),Xs=l(" forward method, overrides the "),no=n("code"),Zs=l("__call__"),en=l(" special method."),tn=u(),b(he.$$.fragment),on=u(),b(me.$$.fragment),Yo=u(),K=n("h2"),fe=n("a"),ao=n("span"),b(Ke.$$.fragment),sn=u(),ro=n("span"),nn=l("Swinv2ForMaskedImageModeling"),Ko=u(),R=n("div"),b(Ge.$$.fragment),an=u(),G=n("p"),rn=l("Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),io=n("code"),ln=l("SimMIM <https://arxiv.org/abs/2111.09886>"),dn=l(`__.
This model is a PyTorch `),Je=n("a"),cn=l("torch.nn.Module"),pn=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hn=u(),A=n("div"),b(Qe.$$.fragment),mn=u(),J=n("p"),fn=l("The "),It=n("a"),un=l("Swinv2ForMaskedImageModeling"),gn=l(" forward method, overrides the "),lo=n("code"),_n=l("__call__"),wn=l(" special method."),vn=u(),b(ue.$$.fragment),bn=u(),b(ge.$$.fragment),Go=u(),Q=n("h2"),_e=n("a"),co=n("span"),b(Xe.$$.fragment),$n=u(),po=n("span"),Tn=l("Swinv2ForImageClassification"),Jo=u(),x=n("div"),b(Ze.$$.fragment),Sn=u(),ho=n("p"),yn=l(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),kn=u(),et=n("p"),Fn=l("This model is a PyTorch "),tt=n("a"),Mn=l("torch.nn.Module"),En=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xn=u(),P=n("div"),b(ot.$$.fragment),jn=u(),X=n("p"),In=l("The "),Ct=n("a"),Cn=l("Swinv2ForImageClassification"),An=l(" forward method, overrides the "),mo=n("code"),Pn=l("__call__"),qn=l(" special method."),zn=u(),b(we.$$.fragment),On=u(),b(ve.$$.fragment),Qo=u(),Z=n("h2"),be=n("a"),fo=n("span"),b(st.$$.fragment),Nn=u(),uo=n("span"),Rn=l("TFSwinv2Model"),Xo=u(),D=n("div"),b(nt.$$.fragment),Dn=u(),at=n("p"),Hn=l(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
`),rt=n("a"),Ln=l("tf.keras.layers.Layer"),Un=l(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Wn=u(),q=n("div"),b(it.$$.fragment),Bn=u(),ee=n("p"),Vn=l("The "),At=n("a"),Yn=l("TFSwinv2Model"),Kn=l(" forward method, overrides the "),go=n("code"),Gn=l("__call__"),Jn=l(" special method."),Qn=u(),b($e.$$.fragment),Xn=u(),b(Te.$$.fragment),Zo=u(),te=n("h2"),Se=n("a"),_o=n("span"),b(lt.$$.fragment),Zn=u(),wo=n("span"),ea=l("TFSwinv2ForMaskedImageModeling"),es=u(),H=n("div"),b(dt.$$.fragment),ta=u(),oe=n("p"),oa=l("Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),vo=n("code"),sa=l("SimMIM <https://arxiv.org/abs/2111.09886>"),na=l(`__.
This model is a Tensorflow
`),ct=n("a"),aa=l("tf.keras.layers.Layer"),ra=l(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),ia=u(),z=n("div"),b(pt.$$.fragment),la=u(),se=n("p"),da=l("The "),Pt=n("a"),ca=l("TFSwinv2ForMaskedImageModeling"),pa=l(" forward method, overrides the "),bo=n("code"),ha=l("__call__"),ma=l(" special method."),fa=u(),b(ye.$$.fragment),ua=u(),b(ke.$$.fragment),ts=u(),ne=n("h2"),Fe=n("a"),$o=n("span"),b(ht.$$.fragment),ga=u(),To=n("span"),_a=l("TFSwinv2ForImageClassification"),os=u(),j=n("div"),b(mt.$$.fragment),wa=u(),So=n("p"),va=l(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),ba=u(),ft=n("p"),$a=l(`This model is a Tensorflow
`),ut=n("a"),Ta=l("tf.keras.layers.Layer"),Sa=l(` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),ya=u(),O=n("div"),b(gt.$$.fragment),ka=u(),ae=n("p"),Fa=l("The "),qt=n("a"),Ma=l("TFSwinv2ForImageClassification"),Ea=l(" forward method, overrides the "),yo=n("code"),xa=l("__call__"),ja=l(" special method."),Ia=u(),b(Me.$$.fragment),Ca=u(),b(Ee.$$.fragment),this.h()},l(t){const f=Ir('[data-svelte="svelte-1phssyn"]',document.head);i=a(f,"META",{name:!0,content:!0}),f.forEach(o),v=g(t),p=a(t,"H1",{class:!0});var _t=r(p);h=a(_t,"A",{id:!0,class:!0,href:!0});var ko=r(h);w=a(ko,"SPAN",{});var Fo=r(w);$(s.$$.fragment,Fo),Fo.forEach(o),ko.forEach(o),c=g(_t),M=a(_t,"SPAN",{});var Mo=r(M);gs=d(Mo,"Swinv2"),Mo.forEach(o),_t.forEach(o),zo=g(t),L=a(t,"H2",{class:!0});var wt=r(L);ie=a(wt,"A",{id:!0,class:!0,href:!0});var Eo=r(ie);Qt=a(Eo,"SPAN",{});var xo=r(Qt);$(Ne.$$.fragment,xo),xo.forEach(o),Eo.forEach(o),_s=g(wt),Xt=a(wt,"SPAN",{});var jo=r(Xt);ws=d(jo,"Overview"),jo.forEach(o),wt.forEach(o),Oo=g(t),Tt=a(t,"P",{});var Io=r(Tt);vs=d(Io,`The Swinv2 model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),Io.forEach(o),No=g(t),St=a(t,"P",{});var Co=r(St);bs=d(Co,"The abstract from the paper is the following:"),Co.forEach(o),Ro=g(t),yt=a(t,"P",{});var Ao=r(yt);Zt=a(Ao,"EM",{});var Po=r(Zt);$s=d(Po,"<INSERT PAPER ABSTRACT HERE>"),Po.forEach(o),Ao.forEach(o),Do=g(t),kt=a(t,"P",{});var qo=r(kt);Ts=d(qo,"Tips:"),qo.forEach(o),Ho=g(t),Ft=a(t,"P",{});var Aa=r(Ft);Ss=d(Aa,"<INSERT TIPS ABOUT MODEL HERE>"),Aa.forEach(o),Lo=g(t),le=a(t,"P",{});var ns=r(le);ys=d(ns,"This model was contributed by [INSERT YOUR HF USERNAME HERE]("),Re=a(ns,"A",{href:!0,rel:!0});var Pa=r(Re);ks=d(Pa,"https://huggingface.co/<INSERT"),Pa.forEach(o),Fs=d(ns,` YOUR HF USERNAME HERE>).
The original code can be found [here](<INSERT LINK TO GITHUB REPO HERE>).`),ns.forEach(o),Uo=g(t),U=a(t,"H2",{class:!0});var as=r(U);de=a(as,"A",{id:!0,class:!0,href:!0});var qa=r(de);eo=a(qa,"SPAN",{});var za=r(eo);$(De.$$.fragment,za),za.forEach(o),qa.forEach(o),Ms=g(as),to=a(as,"SPAN",{});var Oa=r(to);Es=d(Oa,"Swinv2Config"),Oa.forEach(o),as.forEach(o),Wo=g(t),E=a(t,"DIV",{class:!0});var xe=r(E);$(He.$$.fragment,xe),xs=g(xe),W=a(xe,"P",{});var zt=r(W);js=d(zt,"This is the configuration class to store the configuration of a "),Mt=a(zt,"A",{href:!0});var Na=r(Mt);Is=d(Na,"Swinv2Model"),Na.forEach(o),Cs=d(zt,`. It is used to instantiate a Swinv2
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swinv2
`),Le=a(zt,"A",{href:!0,rel:!0});var Ra=r(Le);As=d(Ra,"microsoft/swinv2_tiny_patch4_windows8_256"),Ra.forEach(o),Ps=d(zt,`
architecture.`),zt.forEach(o),qs=g(xe),B=a(xe,"P",{});var Ot=r(B);zs=d(Ot,"Configuration objects inherit from "),Et=a(Ot,"A",{href:!0});var Da=r(Et);Os=d(Da,"PretrainedConfig"),Da.forEach(o),Ns=d(Ot,` and can be used to control the model outputs. Read the
documentation from `),xt=a(Ot,"A",{href:!0});var Ha=r(xt);Rs=d(Ha,"PretrainedConfig"),Ha.forEach(o),Ds=d(Ot," for more information."),Ot.forEach(o),Hs=g(xe),$(ce.$$.fragment,xe),xe.forEach(o),Bo=g(t),V=a(t,"H2",{class:!0});var rs=r(V);pe=a(rs,"A",{id:!0,class:!0,href:!0});var La=r(pe);oo=a(La,"SPAN",{});var Ua=r(oo);$(Ue.$$.fragment,Ua),Ua.forEach(o),La.forEach(o),Ls=g(rs),so=a(rs,"SPAN",{});var Wa=r(so);Us=d(Wa,"Swinv2Model"),Wa.forEach(o),rs.forEach(o),Vo=g(t),N=a(t,"DIV",{class:!0});var Nt=r(N);$(We.$$.fragment,Nt),Ws=g(Nt),Be=a(Nt,"P",{});var is=r(Be);Bs=d(is,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ve=a(is,"A",{href:!0,rel:!0});var Ba=r(Ve);Vs=d(Ba,"torch.nn.Module"),Ba.forEach(o),Ys=d(is,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),is.forEach(o),Ks=g(Nt),C=a(Nt,"DIV",{class:!0});var je=r(C);$(Ye.$$.fragment,je),Gs=g(je),Y=a(je,"P",{});var Rt=r(Y);Js=d(Rt,"The "),jt=a(Rt,"A",{href:!0});var Va=r(jt);Qs=d(Va,"Swinv2Model"),Va.forEach(o),Xs=d(Rt," forward method, overrides the "),no=a(Rt,"CODE",{});var Ya=r(no);Zs=d(Ya,"__call__"),Ya.forEach(o),en=d(Rt," special method."),Rt.forEach(o),tn=g(je),$(he.$$.fragment,je),on=g(je),$(me.$$.fragment,je),je.forEach(o),Nt.forEach(o),Yo=g(t),K=a(t,"H2",{class:!0});var ls=r(K);fe=a(ls,"A",{id:!0,class:!0,href:!0});var Ka=r(fe);ao=a(Ka,"SPAN",{});var Ga=r(ao);$(Ke.$$.fragment,Ga),Ga.forEach(o),Ka.forEach(o),sn=g(ls),ro=a(ls,"SPAN",{});var Ja=r(ro);nn=d(Ja,"Swinv2ForMaskedImageModeling"),Ja.forEach(o),ls.forEach(o),Ko=g(t),R=a(t,"DIV",{class:!0});var Dt=r(R);$(Ge.$$.fragment,Dt),an=g(Dt),G=a(Dt,"P",{});var Ht=r(G);rn=d(Ht,"Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),io=a(Ht,"CODE",{});var Qa=r(io);ln=d(Qa,"SimMIM <https://arxiv.org/abs/2111.09886>"),Qa.forEach(o),dn=d(Ht,`__.
This model is a PyTorch `),Je=a(Ht,"A",{href:!0,rel:!0});var Xa=r(Je);cn=d(Xa,"torch.nn.Module"),Xa.forEach(o),pn=d(Ht,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ht.forEach(o),hn=g(Dt),A=a(Dt,"DIV",{class:!0});var Ie=r(A);$(Qe.$$.fragment,Ie),mn=g(Ie),J=a(Ie,"P",{});var Lt=r(J);fn=d(Lt,"The "),It=a(Lt,"A",{href:!0});var Za=r(It);un=d(Za,"Swinv2ForMaskedImageModeling"),Za.forEach(o),gn=d(Lt," forward method, overrides the "),lo=a(Lt,"CODE",{});var er=r(lo);_n=d(er,"__call__"),er.forEach(o),wn=d(Lt," special method."),Lt.forEach(o),vn=g(Ie),$(ue.$$.fragment,Ie),bn=g(Ie),$(ge.$$.fragment,Ie),Ie.forEach(o),Dt.forEach(o),Go=g(t),Q=a(t,"H2",{class:!0});var ds=r(Q);_e=a(ds,"A",{id:!0,class:!0,href:!0});var tr=r(_e);co=a(tr,"SPAN",{});var or=r(co);$(Xe.$$.fragment,or),or.forEach(o),tr.forEach(o),$n=g(ds),po=a(ds,"SPAN",{});var sr=r(po);Tn=d(sr,"Swinv2ForImageClassification"),sr.forEach(o),ds.forEach(o),Jo=g(t),x=a(t,"DIV",{class:!0});var Ce=r(x);$(Ze.$$.fragment,Ce),Sn=g(Ce),ho=a(Ce,"P",{});var nr=r(ho);yn=d(nr,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),nr.forEach(o),kn=g(Ce),et=a(Ce,"P",{});var cs=r(et);Fn=d(cs,"This model is a PyTorch "),tt=a(cs,"A",{href:!0,rel:!0});var ar=r(tt);Mn=d(ar,"torch.nn.Module"),ar.forEach(o),En=d(cs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cs.forEach(o),xn=g(Ce),P=a(Ce,"DIV",{class:!0});var Ae=r(P);$(ot.$$.fragment,Ae),jn=g(Ae),X=a(Ae,"P",{});var Ut=r(X);In=d(Ut,"The "),Ct=a(Ut,"A",{href:!0});var rr=r(Ct);Cn=d(rr,"Swinv2ForImageClassification"),rr.forEach(o),An=d(Ut," forward method, overrides the "),mo=a(Ut,"CODE",{});var ir=r(mo);Pn=d(ir,"__call__"),ir.forEach(o),qn=d(Ut," special method."),Ut.forEach(o),zn=g(Ae),$(we.$$.fragment,Ae),On=g(Ae),$(ve.$$.fragment,Ae),Ae.forEach(o),Ce.forEach(o),Qo=g(t),Z=a(t,"H2",{class:!0});var ps=r(Z);be=a(ps,"A",{id:!0,class:!0,href:!0});var lr=r(be);fo=a(lr,"SPAN",{});var dr=r(fo);$(st.$$.fragment,dr),dr.forEach(o),lr.forEach(o),Nn=g(ps),uo=a(ps,"SPAN",{});var cr=r(uo);Rn=d(cr,"TFSwinv2Model"),cr.forEach(o),ps.forEach(o),Xo=g(t),D=a(t,"DIV",{class:!0});var Wt=r(D);$(nt.$$.fragment,Wt),Dn=g(Wt),at=a(Wt,"P",{});var hs=r(at);Hn=d(hs,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
`),rt=a(hs,"A",{href:!0,rel:!0});var pr=r(rt);Ln=d(pr,"tf.keras.layers.Layer"),pr.forEach(o),Un=d(hs,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),hs.forEach(o),Wn=g(Wt),q=a(Wt,"DIV",{class:!0});var Pe=r(q);$(it.$$.fragment,Pe),Bn=g(Pe),ee=a(Pe,"P",{});var Bt=r(ee);Vn=d(Bt,"The "),At=a(Bt,"A",{href:!0});var hr=r(At);Yn=d(hr,"TFSwinv2Model"),hr.forEach(o),Kn=d(Bt," forward method, overrides the "),go=a(Bt,"CODE",{});var mr=r(go);Gn=d(mr,"__call__"),mr.forEach(o),Jn=d(Bt," special method."),Bt.forEach(o),Qn=g(Pe),$($e.$$.fragment,Pe),Xn=g(Pe),$(Te.$$.fragment,Pe),Pe.forEach(o),Wt.forEach(o),Zo=g(t),te=a(t,"H2",{class:!0});var ms=r(te);Se=a(ms,"A",{id:!0,class:!0,href:!0});var fr=r(Se);_o=a(fr,"SPAN",{});var ur=r(_o);$(lt.$$.fragment,ur),ur.forEach(o),fr.forEach(o),Zn=g(ms),wo=a(ms,"SPAN",{});var gr=r(wo);ea=d(gr,"TFSwinv2ForMaskedImageModeling"),gr.forEach(o),ms.forEach(o),es=g(t),H=a(t,"DIV",{class:!0});var Vt=r(H);$(dt.$$.fragment,Vt),ta=g(Vt),oe=a(Vt,"P",{});var Yt=r(oe);oa=d(Yt,"Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),vo=a(Yt,"CODE",{});var _r=r(vo);sa=d(_r,"SimMIM <https://arxiv.org/abs/2111.09886>"),_r.forEach(o),na=d(Yt,`__.
This model is a Tensorflow
`),ct=a(Yt,"A",{href:!0,rel:!0});var wr=r(ct);aa=d(wr,"tf.keras.layers.Layer"),wr.forEach(o),ra=d(Yt,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),Yt.forEach(o),ia=g(Vt),z=a(Vt,"DIV",{class:!0});var qe=r(z);$(pt.$$.fragment,qe),la=g(qe),se=a(qe,"P",{});var Kt=r(se);da=d(Kt,"The "),Pt=a(Kt,"A",{href:!0});var vr=r(Pt);ca=d(vr,"TFSwinv2ForMaskedImageModeling"),vr.forEach(o),pa=d(Kt," forward method, overrides the "),bo=a(Kt,"CODE",{});var br=r(bo);ha=d(br,"__call__"),br.forEach(o),ma=d(Kt," special method."),Kt.forEach(o),fa=g(qe),$(ye.$$.fragment,qe),ua=g(qe),$(ke.$$.fragment,qe),qe.forEach(o),Vt.forEach(o),ts=g(t),ne=a(t,"H2",{class:!0});var fs=r(ne);Fe=a(fs,"A",{id:!0,class:!0,href:!0});var $r=r(Fe);$o=a($r,"SPAN",{});var Tr=r($o);$(ht.$$.fragment,Tr),Tr.forEach(o),$r.forEach(o),ga=g(fs),To=a(fs,"SPAN",{});var Sr=r(To);_a=d(Sr,"TFSwinv2ForImageClassification"),Sr.forEach(o),fs.forEach(o),os=g(t),j=a(t,"DIV",{class:!0});var ze=r(j);$(mt.$$.fragment,ze),wa=g(ze),So=a(ze,"P",{});var yr=r(So);va=d(yr,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),yr.forEach(o),ba=g(ze),ft=a(ze,"P",{});var us=r(ft);$a=d(us,`This model is a Tensorflow
`),ut=a(us,"A",{href:!0,rel:!0});var kr=r(ut);Ta=d(kr,"tf.keras.layers.Layer"),kr.forEach(o),Sa=d(us,` sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`),us.forEach(o),ya=g(ze),O=a(ze,"DIV",{class:!0});var Oe=r(O);$(gt.$$.fragment,Oe),ka=g(Oe),ae=a(Oe,"P",{});var Gt=r(ae);Fa=d(Gt,"The "),qt=a(Gt,"A",{href:!0});var Fr=r(qt);Ma=d(Fr,"TFSwinv2ForImageClassification"),Fr.forEach(o),Ea=d(Gt," forward method, overrides the "),yo=a(Gt,"CODE",{});var Mr=r(yo);xa=d(Mr,"__call__"),Mr.forEach(o),ja=d(Gt," special method."),Gt.forEach(o),Ia=g(Oe),$(Me.$$.fragment,Oe),Ca=g(Oe),$(Ee.$$.fragment,Oe),Oe.forEach(o),ze.forEach(o),this.h()},h(){m(i,"name","hf:doc:metadata"),m(i,"content",JSON.stringify(Yr)),m(h,"id","swinv2"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#swinv2"),m(p,"class","relative group"),m(ie,"id","overview"),m(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ie,"href","#overview"),m(L,"class","relative group"),m(Re,"href","https://huggingface.co/<INSERT"),m(Re,"rel","nofollow"),m(de,"id","transformers.Swinv2Config"),m(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(de,"href","#transformers.Swinv2Config"),m(U,"class","relative group"),m(Mt,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),m(Le,"href","https://huggingface.co/microsoft/swinv2_tiny_patch4_windows8_256"),m(Le,"rel","nofollow"),m(Et,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),m(xt,"href","/docs/transformers/pr_17469/en/main_classes/configuration#transformers.PretrainedConfig"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"id","transformers.Swinv2Model"),m(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(pe,"href","#transformers.Swinv2Model"),m(V,"class","relative group"),m(Ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ve,"rel","nofollow"),m(jt,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2Model"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"id","transformers.Swinv2ForMaskedImageModeling"),m(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fe,"href","#transformers.Swinv2ForMaskedImageModeling"),m(K,"class","relative group"),m(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Je,"rel","nofollow"),m(It,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForMaskedImageModeling"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_e,"id","transformers.Swinv2ForImageClassification"),m(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_e,"href","#transformers.Swinv2ForImageClassification"),m(Q,"class","relative group"),m(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(tt,"rel","nofollow"),m(Ct,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.Swinv2ForImageClassification"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"id","transformers.TFSwinv2Model"),m(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(be,"href","#transformers.TFSwinv2Model"),m(Z,"class","relative group"),m(rt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(rt,"rel","nofollow"),m(At,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.TFSwinv2Model"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"id","transformers.TFSwinv2ForMaskedImageModeling"),m(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Se,"href","#transformers.TFSwinv2ForMaskedImageModeling"),m(te,"class","relative group"),m(ct,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ct,"rel","nofollow"),m(Pt,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.TFSwinv2ForMaskedImageModeling"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"id","transformers.TFSwinv2ForImageClassification"),m(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fe,"href","#transformers.TFSwinv2ForImageClassification"),m(ne,"class","relative group"),m(ut,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ut,"rel","nofollow"),m(qt,"href","/docs/transformers/pr_17469/en/model_doc/swinv2#transformers.TFSwinv2ForImageClassification"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,i),_(t,v,f),_(t,p,f),e(p,h),e(h,w),T(s,w,null),e(p,c),e(p,M),e(M,gs),_(t,zo,f),_(t,L,f),e(L,ie),e(ie,Qt),T(Ne,Qt,null),e(L,_s),e(L,Xt),e(Xt,ws),_(t,Oo,f),_(t,Tt,f),e(Tt,vs),_(t,No,f),_(t,St,f),e(St,bs),_(t,Ro,f),_(t,yt,f),e(yt,Zt),e(Zt,$s),_(t,Do,f),_(t,kt,f),e(kt,Ts),_(t,Ho,f),_(t,Ft,f),e(Ft,Ss),_(t,Lo,f),_(t,le,f),e(le,ys),e(le,Re),e(Re,ks),e(le,Fs),_(t,Uo,f),_(t,U,f),e(U,de),e(de,eo),T(De,eo,null),e(U,Ms),e(U,to),e(to,Es),_(t,Wo,f),_(t,E,f),T(He,E,null),e(E,xs),e(E,W),e(W,js),e(W,Mt),e(Mt,Is),e(W,Cs),e(W,Le),e(Le,As),e(W,Ps),e(E,qs),e(E,B),e(B,zs),e(B,Et),e(Et,Os),e(B,Ns),e(B,xt),e(xt,Rs),e(B,Ds),e(E,Hs),T(ce,E,null),_(t,Bo,f),_(t,V,f),e(V,pe),e(pe,oo),T(Ue,oo,null),e(V,Ls),e(V,so),e(so,Us),_(t,Vo,f),_(t,N,f),T(We,N,null),e(N,Ws),e(N,Be),e(Be,Bs),e(Be,Ve),e(Ve,Vs),e(Be,Ys),e(N,Ks),e(N,C),T(Ye,C,null),e(C,Gs),e(C,Y),e(Y,Js),e(Y,jt),e(jt,Qs),e(Y,Xs),e(Y,no),e(no,Zs),e(Y,en),e(C,tn),T(he,C,null),e(C,on),T(me,C,null),_(t,Yo,f),_(t,K,f),e(K,fe),e(fe,ao),T(Ke,ao,null),e(K,sn),e(K,ro),e(ro,nn),_(t,Ko,f),_(t,R,f),T(Ge,R,null),e(R,an),e(R,G),e(G,rn),e(G,io),e(io,ln),e(G,dn),e(G,Je),e(Je,cn),e(G,pn),e(R,hn),e(R,A),T(Qe,A,null),e(A,mn),e(A,J),e(J,fn),e(J,It),e(It,un),e(J,gn),e(J,lo),e(lo,_n),e(J,wn),e(A,vn),T(ue,A,null),e(A,bn),T(ge,A,null),_(t,Go,f),_(t,Q,f),e(Q,_e),e(_e,co),T(Xe,co,null),e(Q,$n),e(Q,po),e(po,Tn),_(t,Jo,f),_(t,x,f),T(Ze,x,null),e(x,Sn),e(x,ho),e(ho,yn),e(x,kn),e(x,et),e(et,Fn),e(et,tt),e(tt,Mn),e(et,En),e(x,xn),e(x,P),T(ot,P,null),e(P,jn),e(P,X),e(X,In),e(X,Ct),e(Ct,Cn),e(X,An),e(X,mo),e(mo,Pn),e(X,qn),e(P,zn),T(we,P,null),e(P,On),T(ve,P,null),_(t,Qo,f),_(t,Z,f),e(Z,be),e(be,fo),T(st,fo,null),e(Z,Nn),e(Z,uo),e(uo,Rn),_(t,Xo,f),_(t,D,f),T(nt,D,null),e(D,Dn),e(D,at),e(at,Hn),e(at,rt),e(rt,Ln),e(at,Un),e(D,Wn),e(D,q),T(it,q,null),e(q,Bn),e(q,ee),e(ee,Vn),e(ee,At),e(At,Yn),e(ee,Kn),e(ee,go),e(go,Gn),e(ee,Jn),e(q,Qn),T($e,q,null),e(q,Xn),T(Te,q,null),_(t,Zo,f),_(t,te,f),e(te,Se),e(Se,_o),T(lt,_o,null),e(te,Zn),e(te,wo),e(wo,ea),_(t,es,f),_(t,H,f),T(dt,H,null),e(H,ta),e(H,oe),e(oe,oa),e(oe,vo),e(vo,sa),e(oe,na),e(oe,ct),e(ct,aa),e(oe,ra),e(H,ia),e(H,z),T(pt,z,null),e(z,la),e(z,se),e(se,da),e(se,Pt),e(Pt,ca),e(se,pa),e(se,bo),e(bo,ha),e(se,ma),e(z,fa),T(ye,z,null),e(z,ua),T(ke,z,null),_(t,ts,f),_(t,ne,f),e(ne,Fe),e(Fe,$o),T(ht,$o,null),e(ne,ga),e(ne,To),e(To,_a),_(t,os,f),_(t,j,f),T(mt,j,null),e(j,wa),e(j,So),e(So,va),e(j,ba),e(j,ft),e(ft,$a),e(ft,ut),e(ut,Ta),e(ft,Sa),e(j,ya),e(j,O),T(gt,O,null),e(O,ka),e(O,ae),e(ae,Fa),e(ae,qt),e(qt,Ma),e(ae,Ea),e(ae,yo),e(yo,xa),e(ae,ja),e(O,Ia),T(Me,O,null),e(O,Ca),T(Ee,O,null),ss=!0},p(t,[f]){const _t={};f&2&&(_t.$$scope={dirty:f,ctx:t}),ce.$set(_t);const ko={};f&2&&(ko.$$scope={dirty:f,ctx:t}),he.$set(ko);const Fo={};f&2&&(Fo.$$scope={dirty:f,ctx:t}),me.$set(Fo);const Mo={};f&2&&(Mo.$$scope={dirty:f,ctx:t}),ue.$set(Mo);const wt={};f&2&&(wt.$$scope={dirty:f,ctx:t}),ge.$set(wt);const Eo={};f&2&&(Eo.$$scope={dirty:f,ctx:t}),we.$set(Eo);const xo={};f&2&&(xo.$$scope={dirty:f,ctx:t}),ve.$set(xo);const jo={};f&2&&(jo.$$scope={dirty:f,ctx:t}),$e.$set(jo);const Io={};f&2&&(Io.$$scope={dirty:f,ctx:t}),Te.$set(Io);const Co={};f&2&&(Co.$$scope={dirty:f,ctx:t}),ye.$set(Co);const Ao={};f&2&&(Ao.$$scope={dirty:f,ctx:t}),ke.$set(Ao);const Po={};f&2&&(Po.$$scope={dirty:f,ctx:t}),Me.$set(Po);const qo={};f&2&&(qo.$$scope={dirty:f,ctx:t}),Ee.$set(qo)},i(t){ss||(S(s.$$.fragment,t),S(Ne.$$.fragment,t),S(De.$$.fragment,t),S(He.$$.fragment,t),S(ce.$$.fragment,t),S(Ue.$$.fragment,t),S(We.$$.fragment,t),S(Ye.$$.fragment,t),S(he.$$.fragment,t),S(me.$$.fragment,t),S(Ke.$$.fragment,t),S(Ge.$$.fragment,t),S(Qe.$$.fragment,t),S(ue.$$.fragment,t),S(ge.$$.fragment,t),S(Xe.$$.fragment,t),S(Ze.$$.fragment,t),S(ot.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S(st.$$.fragment,t),S(nt.$$.fragment,t),S(it.$$.fragment,t),S($e.$$.fragment,t),S(Te.$$.fragment,t),S(lt.$$.fragment,t),S(dt.$$.fragment,t),S(pt.$$.fragment,t),S(ye.$$.fragment,t),S(ke.$$.fragment,t),S(ht.$$.fragment,t),S(mt.$$.fragment,t),S(gt.$$.fragment,t),S(Me.$$.fragment,t),S(Ee.$$.fragment,t),ss=!0)},o(t){y(s.$$.fragment,t),y(Ne.$$.fragment,t),y(De.$$.fragment,t),y(He.$$.fragment,t),y(ce.$$.fragment,t),y(Ue.$$.fragment,t),y(We.$$.fragment,t),y(Ye.$$.fragment,t),y(he.$$.fragment,t),y(me.$$.fragment,t),y(Ke.$$.fragment,t),y(Ge.$$.fragment,t),y(Qe.$$.fragment,t),y(ue.$$.fragment,t),y(ge.$$.fragment,t),y(Xe.$$.fragment,t),y(Ze.$$.fragment,t),y(ot.$$.fragment,t),y(we.$$.fragment,t),y(ve.$$.fragment,t),y(st.$$.fragment,t),y(nt.$$.fragment,t),y(it.$$.fragment,t),y($e.$$.fragment,t),y(Te.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),y(pt.$$.fragment,t),y(ye.$$.fragment,t),y(ke.$$.fragment,t),y(ht.$$.fragment,t),y(mt.$$.fragment,t),y(gt.$$.fragment,t),y(Me.$$.fragment,t),y(Ee.$$.fragment,t),ss=!1},d(t){o(i),t&&o(v),t&&o(p),k(s),t&&o(zo),t&&o(L),k(Ne),t&&o(Oo),t&&o(Tt),t&&o(No),t&&o(St),t&&o(Ro),t&&o(yt),t&&o(Do),t&&o(kt),t&&o(Ho),t&&o(Ft),t&&o(Lo),t&&o(le),t&&o(Uo),t&&o(U),k(De),t&&o(Wo),t&&o(E),k(He),k(ce),t&&o(Bo),t&&o(V),k(Ue),t&&o(Vo),t&&o(N),k(We),k(Ye),k(he),k(me),t&&o(Yo),t&&o(K),k(Ke),t&&o(Ko),t&&o(R),k(Ge),k(Qe),k(ue),k(ge),t&&o(Go),t&&o(Q),k(Xe),t&&o(Jo),t&&o(x),k(Ze),k(ot),k(we),k(ve),t&&o(Qo),t&&o(Z),k(st),t&&o(Xo),t&&o(D),k(nt),k(it),k($e),k(Te),t&&o(Zo),t&&o(te),k(lt),t&&o(es),t&&o(H),k(dt),k(pt),k(ye),k(ke),t&&o(ts),t&&o(ne),k(ht),t&&o(os),t&&o(j),k(mt),k(gt),k(Me),k(Ee)}}}const Yr={local:"swinv2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Swinv2Config",title:"Swinv2Config"},{local:"transformers.Swinv2Model",title:"Swinv2Model"},{local:"transformers.Swinv2ForMaskedImageModeling",title:"Swinv2ForMaskedImageModeling"},{local:"transformers.Swinv2ForImageClassification",title:"Swinv2ForImageClassification"},{local:"transformers.TFSwinv2Model",title:"TFSwinv2Model"},{local:"transformers.TFSwinv2ForMaskedImageModeling",title:"TFSwinv2ForMaskedImageModeling"},{local:"transformers.TFSwinv2ForImageClassification",title:"TFSwinv2ForImageClassification"}],title:"Swinv2"};function Kr(F){return Cr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ti extends Er{constructor(i){super();xr(this,i,Kr,Vr,jr,{})}}export{ti as default,Yr as metadata};
