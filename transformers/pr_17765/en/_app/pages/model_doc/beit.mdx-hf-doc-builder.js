import{S as rh,i as sh,s as nh,e as a,k as p,w,t as n,M as ih,c as r,d as t,m,a as s,x,h as i,b as d,G as e,g as _,y as $,q as y,o as T,B,v as lh,L as yt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xt}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function dh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitModel, BeitConfig

# Initializing a BEiT beit-base-patch16-224-pt22k style configuration
configuration = BeitConfig()

# Initializing a model from the beit-base-patch16-224-pt22k style configuration
model = BeitModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitModel, BeitConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BEiT beit-base-patch16-224-pt22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BeitConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the beit-base-patch16-224-pt22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function ch(F){let c,v;return{c(){c=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=r(u,"P",{});var f=s(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,c,f),e(c,v)},d(u){u&&t(c)}}}function ph(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function mh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k")
model = BeitModel.from_pretrained("microsoft/beit-base-patch16-224-pt22k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitModel.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function hh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function fh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k")
model = BeitForMaskedImageModeling.from_pretrained("microsoft/beit-base-patch16-224-pt22k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, logits = outputs.loss, outputs.logits
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function uh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function gh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224")
model = BeitForImageClassification.from_pretrained("microsoft/beit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function _h(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function bh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import AutoFeatureExtractor, BeitForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")
model = BeitForSemanticSegmentation.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
# logits are of shape (batch_size, num_labels, height, width)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, BeitForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function vh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function wh(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k-ft22k")
model = FlaxBeitModel.from_pretrained("microsoft/beit-base-patch16-224-pt22k-ft22k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, FlaxBeitModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k-ft22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBeitModel.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k-ft22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function xh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function $h(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224-pt22k")
model = BeitForMaskedImageModeling.from_pretrained("microsoft/beit-base-patch16-224-pt22k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224-pt22k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Examples:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function yh(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(h,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function Th(F){let c,v,u,f,b;return f=new Tt({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitForImageClassification
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-patch16-224")
model = FlaxBeitForImageClassification.from_pretrained("microsoft/beit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, FlaxBeitForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBeitForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=n("Example:"),u=p(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var h=s(c);v=i(h,"Example:"),h.forEach(t),u=m(l),x(f.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,u,h),$(f,l,h),b=!0},p:yt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function Bh(F){let c,v,u,f,b,l,h,E,tn,es,ce,ze,za,Bt,on,Aa,an,ts,W,rn,Ft,sn,nn,Et,ln,dn,kt,cn,pn,os,Xo,mn,as,Ko,qa,hn,rs,Yo,fn,ss,C,k,un,Qo,gn,_n,Zo,bn,vn,Mt,wn,xn,ea,$n,yn,ta,Tn,Bn,oa,Fn,En,aa,kn,Mn,In,It,jn,jt,Pn,Cn,zn,Pt,An,ra,qn,Ln,Sn,pe,Nn,La,On,Dn,Ct,Vn,Wn,Un,me,Rn,zt,Hn,Jn,At,Gn,Xn,Kn,N,Yn,Sa,Qn,Zn,Na,ei,ti,sa,oi,ai,Oa,ri,si,ns,U,ni,qt,ii,li,Lt,di,ci,St,pi,mi,is,he,Ae,Da,Nt,hi,Va,fi,ls,fe,Ot,ui,Dt,gi,na,_i,bi,ds,ue,Vt,vi,Wt,wi,ia,xi,$i,cs,ge,qe,Wa,Ut,yi,Ua,Ti,ps,Z,Rt,Bi,_e,Fi,la,Ei,ki,Ht,Mi,Ii,ji,Le,ms,be,Se,Ra,Jt,Pi,Ha,Ci,hs,O,Gt,zi,Ja,Ai,qi,Xt,Li,da,Si,Ni,Oi,ie,Kt,Di,Ga,Vi,Wi,Ne,fs,ve,Oe,Xa,Yt,Ui,Ka,Ri,us,ee,Qt,Hi,Zt,Ji,eo,Gi,Xi,Ki,R,to,Yi,we,Qi,ca,Zi,el,Ya,tl,ol,al,De,rl,Ve,gs,xe,We,Qa,oo,sl,Za,nl,_s,te,ao,il,oe,ll,pa,dl,cl,ma,pl,ml,ro,hl,fl,ul,H,so,gl,$e,_l,ha,bl,vl,er,wl,xl,$l,Ue,yl,Re,bs,ye,He,tr,no,Tl,or,Bl,vs,D,io,Fl,ar,El,kl,lo,Ml,co,Il,jl,Pl,J,po,Cl,Te,zl,fa,Al,ql,rr,Ll,Sl,Nl,Je,Ol,Ge,ws,Be,Xe,sr,mo,Dl,nr,Vl,xs,V,ho,Wl,ir,Ul,Rl,fo,Hl,uo,Jl,Gl,Xl,G,go,Kl,Fe,Yl,ua,Ql,Zl,lr,ed,td,od,Ke,ad,Ye,$s,Ee,Qe,dr,_o,rd,cr,sd,ys,M,bo,nd,pr,id,ld,vo,dd,ga,cd,pd,md,wo,hd,xo,fd,ud,gd,mr,_d,bd,ae,hr,$o,vd,wd,fr,yo,xd,$d,ur,To,yd,Td,gr,Bo,Bd,Fd,X,Fo,Ed,ke,kd,_r,Md,Id,br,jd,Pd,Cd,Ze,zd,et,Ts,Me,tt,vr,Eo,Ad,wr,qd,Bs,I,ko,Ld,xr,Sd,Nd,Mo,Od,_a,Dd,Vd,Wd,Io,Ud,jo,Rd,Hd,Jd,$r,Gd,Xd,re,yr,Po,Kd,Yd,Tr,Co,Qd,Zd,Br,zo,ec,tc,Fr,Ao,oc,ac,A,qo,rc,Ie,sc,Er,nc,ic,kr,lc,dc,cc,ot,pc,je,mc,Mr,hc,fc,Ir,uc,gc,_c,at,Fs,Pe,rt,jr,Lo,bc,Pr,vc,Es,j,So,wc,Cr,xc,$c,No,yc,ba,Tc,Bc,Fc,Oo,Ec,Do,kc,Mc,Ic,zr,jc,Pc,se,Ar,Vo,Cc,zc,qr,Wo,Ac,qc,Lr,Uo,Lc,Sc,Sr,Ro,Nc,Oc,K,Ho,Dc,Ce,Vc,Nr,Wc,Uc,Or,Rc,Hc,Jc,st,Gc,nt,ks;return l=new Q({}),Bt=new Q({}),Nt=new Q({}),Ot=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L69"}}),Vt=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L46"}}),Ut=new Q({}),Rt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
Vocabulary size of the BEiT model. Defines the number of different image tokens that can be used during
pre-training.`,name:"vocab_size"},{anchor:"transformers.BeitConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BeitConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BeitConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BeitConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BeitConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BeitConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BeitConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BeitConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BeitConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BeitConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.BeitConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.BeitConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.BeitConfig.use_mask_token",description:`<strong>use_mask_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a mask token for masked image modeling.`,name:"use_mask_token"},{anchor:"transformers.BeitConfig.use_absolute_position_embeddings",description:`<strong>use_absolute_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use BERT-style absolute position embeddings.`,name:"use_absolute_position_embeddings"},{anchor:"transformers.BeitConfig.use_relative_position_bias",description:`<strong>use_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use T5-style relative position embeddings in the self-attention layers.`,name:"use_relative_position_bias"},{anchor:"transformers.BeitConfig.use_shared_relative_position_bias",description:`<strong>use_shared_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use the same relative position embeddings across all self-attention layers of the Transformer.`,name:"use_shared_relative_position_bias"},{anchor:"transformers.BeitConfig.layer_scale_init_value",description:`<strong>layer_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Scale to use in the self-attention layers. 0.1 for base, 1e-5 for large. Set 0 to disable layer scale.`,name:"layer_scale_init_value"},{anchor:"transformers.BeitConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate per sample (when applied in the main path of residual layers).`,name:"drop_path_rate"},{anchor:"transformers.BeitConfig.use_mean_pooling",description:`<strong>use_mean_pooling</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to mean pool the final hidden states of the patches instead of using the final hidden state of the
CLS token, before applying the classification head.`,name:"use_mean_pooling"},{anchor:"transformers.BeitConfig.out_indices",description:`<strong>out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 5, 7, 11]</code>) &#x2014;
Indices of the feature maps to use for semantic segmentation.`,name:"out_indices"},{anchor:"transformers.BeitConfig.pool_scales",description:`<strong>pool_scales</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 6]</code>) &#x2014;
Pooling scales used in Pooling Pyramid Module applied on the last feature map.`,name:"pool_scales"},{anchor:"transformers.BeitConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.BeitConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.BeitConfig.auxiliary_channels",description:`<strong>auxiliary_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Number of channels to use in the auxiliary head.`,name:"auxiliary_channels"},{anchor:"transformers.BeitConfig.auxiliary_num_convs",description:`<strong>auxiliary_num_convs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of convolutional layers to use in the auxiliary head.`,name:"auxiliary_num_convs"},{anchor:"transformers.BeitConfig.auxiliary_concat_input",description:`<strong>auxiliary_concat_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to concatenate the output of the auxiliary head with the input before the classification layer.`,name:"auxiliary_concat_input"},{anchor:"transformers.BeitConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/configuration_beit.py#L36"}}),Le=new $t({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[dh]},$$scope:{ctx:F}}}),Jt=new Q({}),Gt=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.BeitFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.BeitFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.BeitFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.BeitFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.BeitFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.BeitFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.BeitFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.BeitFeatureExtractor.reduce_labels",description:`<strong>reduce_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to reduce all label values of segmentation maps by 1. Usually used for datasets where 0 is
used for background, and background itself is not included in all classes of a dataset (e.g. ADE20k). The
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Kt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.BeitFeatureExtractor.__call__.segmentation_maps",description:`<strong>segmentation_maps</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding semantic segmentation maps with the pixel-wise annotations.`,name:"segmentation_maps"},{anchor:"transformers.BeitFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17765/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/feature_extraction_beit.py#L97",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>segmentation_maps</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ne=new xt({props:{warning:!0,$$slots:{default:[ch]},$$scope:{ctx:F}}}),Yt=new Q({}),Qt=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L620"}}),to=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17765/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L647",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new xt({props:{$$slots:{default:[ph]},$$scope:{ctx:F}}}),Ve=new $t({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[mh]},$$scope:{ctx:F}}}),oo=new Q({}),ao=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L732"}}),so=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17765/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"},{anchor:"transformers.BeitForMaskedImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new xt({props:{$$slots:{default:[hh]},$$scope:{ctx:F}}}),Re=new $t({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[fh]},$$scope:{ctx:F}}}),no=new Q({}),io=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L832"}}),po=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17765/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L845",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new xt({props:{$$slots:{default:[uh]},$$scope:{ctx:F}}}),Ge=new $t({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[gh]},$$scope:{ctx:F}}}),mo=new Q({}),ho=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L1141"}}),go=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17765/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_beit.py#L1185",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new xt({props:{$$slots:{default:[_h]},$$scope:{ctx:F}}}),Ye=new $t({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[bh]},$$scope:{ctx:F}}}),_o=new Q({}),bo=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L749"}}),Fo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.beit.configuration_beit.BeitConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</li>
<li><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</li>
<li><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new xt({props:{$$slots:{default:[vh]},$$scope:{ctx:F}}}),et=new $t({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[wh]},$$scope:{ctx:F}}}),Eo=new Q({}),ko=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L833"}}),qo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.beit.configuration_beit.BeitConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new xt({props:{$$slots:{default:[xh]},$$scope:{ctx:F}}}),at=new $t({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[$h]},$$scope:{ctx:F}}}),Lo=new Q({}),So=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L920"}}),Ho=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17765/src/transformers/models/beit/modeling_flax_beit.py#L635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.beit.configuration_beit.BeitConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17765/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new xt({props:{$$slots:{default:[yh]},$$scope:{ctx:F}}}),nt=new $t({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[Th]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=p(),u=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),h=p(),E=a("span"),tn=n("BEiT"),es=p(),ce=a("h2"),ze=a("a"),za=a("span"),w(Bt.$$.fragment),on=p(),Aa=a("span"),an=n("Overview"),ts=p(),W=a("p"),rn=n("The BEiT model was proposed in "),Ft=a("a"),sn=n("BEiT: BERT Pre-Training of Image Transformers"),nn=n(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Et=a("a"),ln=n("original ViT paper"),dn=n(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),kt=a("a"),cn=n("DALL-E model"),pn=n(` given masked
patches.`),os=p(),Xo=a("p"),mn=n("The abstract from the paper is the following:"),as=p(),Ko=a("p"),qa=a("em"),hn=n(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),rs=p(),Yo=a("p"),fn=n("Tips:"),ss=p(),C=a("ul"),k=a("li"),un=n(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Qo=a("a"),gn=n("original model (ViT)"),_n=n(" as well as "),Zo=a("a"),bn=n("Data-efficient Image Transformers (DeiT)"),vn=n(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Mt=a("a"),wn=n("here"),xn=n(` (you can just replace
`),ea=a("a"),$n=n("ViTFeatureExtractor"),yn=n(" by "),ta=a("a"),Tn=n("BeitFeatureExtractor"),Bn=n(` and
`),oa=a("a"),Fn=n("ViTForImageClassification"),En=n(" by "),aa=a("a"),kn=n("BeitForImageClassification"),Mn=n(")."),In=p(),It=a("li"),jn=n(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),jt=a("a"),Pn=n("here"),Cn=n("."),zn=p(),Pt=a("li"),An=n(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),ra=a("a"),qn=n("BeitFeatureExtractor"),Ln=n(" to resize (or rescale) and normalize images for the model."),Sn=p(),pe=a("li"),Nn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),La=a("code"),On=n("microsoft/beit-base-patch16-224"),Dn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Ct=a("a"),Vn=n("hub"),Wn=n("."),Un=p(),me=a("li"),Rn=n("The available checkpoints are either (1) pre-trained on "),zt=a("a"),Hn=n("ImageNet-22k"),Jn=n(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),At=a("a"),Gn=n("ImageNet-1k"),Xn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Kn=p(),N=a("li"),Yn=n(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Sa=a("code"),Qn=n("use_relative_position_bias"),Zn=n(` or the
`),Na=a("code"),ei=n("use_relative_position_bias"),ti=n(" attribute of "),sa=a("a"),oi=n("BeitConfig"),ai=n(" to "),Oa=a("code"),ri=n("True"),si=n(` in order to add
position embeddings.`),ns=p(),U=a("p"),ni=n("This model was contributed by "),qt=a("a"),ii=n("nielsr"),li=n(`. The JAX/FLAX version of this model was
contributed by `),Lt=a("a"),di=n("kamalkraj"),ci=n(". The original code can be found "),St=a("a"),pi=n("here"),mi=n("."),is=p(),he=a("h2"),Ae=a("a"),Da=a("span"),w(Nt.$$.fragment),hi=p(),Va=a("span"),fi=n("BEiT specific outputs"),ls=p(),fe=a("div"),w(Ot.$$.fragment),ui=p(),Dt=a("p"),gi=n("Class for outputs of "),na=a("a"),_i=n("BeitModel"),bi=n("."),ds=p(),ue=a("div"),w(Vt.$$.fragment),vi=p(),Wt=a("p"),wi=n("Class for outputs of "),ia=a("a"),xi=n("FlaxBeitModel"),$i=n("."),cs=p(),ge=a("h2"),qe=a("a"),Wa=a("span"),w(Ut.$$.fragment),yi=p(),Ua=a("span"),Ti=n("BeitConfig"),ps=p(),Z=a("div"),w(Rt.$$.fragment),Bi=p(),_e=a("p"),Fi=n("This is the configuration class to store the configuration of a "),la=a("a"),Ei=n("BeitModel"),ki=n(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ht=a("a"),Mi=n("microsoft/beit-base-patch16-224-pt22k"),Ii=n(" architecture."),ji=p(),w(Le.$$.fragment),ms=p(),be=a("h2"),Se=a("a"),Ra=a("span"),w(Jt.$$.fragment),Pi=p(),Ha=a("span"),Ci=n("BeitFeatureExtractor"),hs=p(),O=a("div"),w(Gt.$$.fragment),zi=p(),Ja=a("p"),Ai=n("Constructs a BEiT feature extractor."),qi=p(),Xt=a("p"),Li=n("This feature extractor inherits from "),da=a("a"),Si=n("FeatureExtractionMixin"),Ni=n(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Oi=p(),ie=a("div"),w(Kt.$$.fragment),Di=p(),Ga=a("p"),Vi=n("Main method to prepare for the model one or several image(s)."),Wi=p(),w(Ne.$$.fragment),fs=p(),ve=a("h2"),Oe=a("a"),Xa=a("span"),w(Yt.$$.fragment),Ui=p(),Ka=a("span"),Ri=n("BeitModel"),us=p(),ee=a("div"),w(Qt.$$.fragment),Hi=p(),Zt=a("p"),Ji=n(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),eo=a("a"),Gi=n("torch.nn.Module"),Xi=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ki=p(),R=a("div"),w(to.$$.fragment),Yi=p(),we=a("p"),Qi=n("The "),ca=a("a"),Zi=n("BeitModel"),el=n(" forward method, overrides the "),Ya=a("code"),tl=n("__call__"),ol=n(" special method."),al=p(),w(De.$$.fragment),rl=p(),w(Ve.$$.fragment),gs=p(),xe=a("h2"),We=a("a"),Qa=a("span"),w(oo.$$.fragment),sl=p(),Za=a("span"),nl=n("BeitForMaskedImageModeling"),_s=p(),te=a("div"),w(ao.$$.fragment),il=p(),oe=a("p"),ll=n(`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),pa=a("a"),dl=n("AutoModelForMaskedImageModeling"),cl=n(`, so you
will need to use `),ma=a("a"),pl=n("BeitForMaskedImageModeling"),ml=n(` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),ro=a("a"),hl=n("torch.nn.Module"),fl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul=p(),H=a("div"),w(so.$$.fragment),gl=p(),$e=a("p"),_l=n("The "),ha=a("a"),bl=n("BeitForMaskedImageModeling"),vl=n(" forward method, overrides the "),er=a("code"),wl=n("__call__"),xl=n(" special method."),$l=p(),w(Ue.$$.fragment),yl=p(),w(Re.$$.fragment),bs=p(),ye=a("h2"),He=a("a"),tr=a("span"),w(no.$$.fragment),Tl=p(),or=a("span"),Bl=n("BeitForImageClassification"),vs=p(),D=a("div"),w(io.$$.fragment),Fl=p(),ar=a("p"),El=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),kl=p(),lo=a("p"),Ml=n("This model is a PyTorch "),co=a("a"),Il=n("torch.nn.Module"),jl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pl=p(),J=a("div"),w(po.$$.fragment),Cl=p(),Te=a("p"),zl=n("The "),fa=a("a"),Al=n("BeitForImageClassification"),ql=n(" forward method, overrides the "),rr=a("code"),Ll=n("__call__"),Sl=n(" special method."),Nl=p(),w(Je.$$.fragment),Ol=p(),w(Ge.$$.fragment),ws=p(),Be=a("h2"),Xe=a("a"),sr=a("span"),w(mo.$$.fragment),Dl=p(),nr=a("span"),Vl=n("BeitForSemanticSegmentation"),xs=p(),V=a("div"),w(ho.$$.fragment),Wl=p(),ir=a("p"),Ul=n("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Rl=p(),fo=a("p"),Hl=n("This model is a PyTorch "),uo=a("a"),Jl=n("torch.nn.Module"),Gl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xl=p(),G=a("div"),w(go.$$.fragment),Kl=p(),Fe=a("p"),Yl=n("The "),ua=a("a"),Ql=n("BeitForSemanticSegmentation"),Zl=n(" forward method, overrides the "),lr=a("code"),ed=n("__call__"),td=n(" special method."),od=p(),w(Ke.$$.fragment),ad=p(),w(Ye.$$.fragment),$s=p(),Ee=a("h2"),Qe=a("a"),dr=a("span"),w(_o.$$.fragment),rd=p(),cr=a("span"),sd=n("FlaxBeitModel"),ys=p(),M=a("div"),w(bo.$$.fragment),nd=p(),pr=a("p"),id=n("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),ld=p(),vo=a("p"),dd=n("This model inherits from "),ga=a("a"),cd=n("FlaxPreTrainedModel"),pd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),md=p(),wo=a("p"),hd=n("This model is also a Flax Linen "),xo=a("a"),fd=n("flax.linen.Module"),ud=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gd=p(),mr=a("p"),_d=n("Finally, this model supports inherent JAX features such as:"),bd=p(),ae=a("ul"),hr=a("li"),$o=a("a"),vd=n("Just-In-Time (JIT) compilation"),wd=p(),fr=a("li"),yo=a("a"),xd=n("Automatic Differentiation"),$d=p(),ur=a("li"),To=a("a"),yd=n("Vectorization"),Td=p(),gr=a("li"),Bo=a("a"),Bd=n("Parallelization"),Fd=p(),X=a("div"),w(Fo.$$.fragment),Ed=p(),ke=a("p"),kd=n("The "),_r=a("code"),Md=n("FlaxBeitPreTrainedModel"),Id=n(" forward method, overrides the "),br=a("code"),jd=n("__call__"),Pd=n(" special method."),Cd=p(),w(Ze.$$.fragment),zd=p(),w(et.$$.fragment),Ts=p(),Me=a("h2"),tt=a("a"),vr=a("span"),w(Eo.$$.fragment),Ad=p(),wr=a("span"),qd=n("FlaxBeitForMaskedImageModeling"),Bs=p(),I=a("div"),w(ko.$$.fragment),Ld=p(),xr=a("p"),Sd=n("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Nd=p(),Mo=a("p"),Od=n("This model inherits from "),_a=a("a"),Dd=n("FlaxPreTrainedModel"),Vd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wd=p(),Io=a("p"),Ud=n("This model is also a Flax Linen "),jo=a("a"),Rd=n("flax.linen.Module"),Hd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jd=p(),$r=a("p"),Gd=n("Finally, this model supports inherent JAX features such as:"),Xd=p(),re=a("ul"),yr=a("li"),Po=a("a"),Kd=n("Just-In-Time (JIT) compilation"),Yd=p(),Tr=a("li"),Co=a("a"),Qd=n("Automatic Differentiation"),Zd=p(),Br=a("li"),zo=a("a"),ec=n("Vectorization"),tc=p(),Fr=a("li"),Ao=a("a"),oc=n("Parallelization"),ac=p(),A=a("div"),w(qo.$$.fragment),rc=p(),Ie=a("p"),sc=n("The "),Er=a("code"),nc=n("FlaxBeitPreTrainedModel"),ic=n(" forward method, overrides the "),kr=a("code"),lc=n("__call__"),dc=n(" special method."),cc=p(),w(ot.$$.fragment),pc=p(),je=a("p"),mc=n("bool_masked_pos ("),Mr=a("code"),hc=n("numpy.ndarray"),fc=n(" of shape "),Ir=a("code"),uc=n("(batch_size, num_patches)"),gc=n(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),_c=p(),w(at.$$.fragment),Fs=p(),Pe=a("h2"),rt=a("a"),jr=a("span"),w(Lo.$$.fragment),bc=p(),Pr=a("span"),vc=n("FlaxBeitForImageClassification"),Es=p(),j=a("div"),w(So.$$.fragment),wc=p(),Cr=a("p"),xc=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),$c=p(),No=a("p"),yc=n("This model inherits from "),ba=a("a"),Tc=n("FlaxPreTrainedModel"),Bc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fc=p(),Oo=a("p"),Ec=n("This model is also a Flax Linen "),Do=a("a"),kc=n("flax.linen.Module"),Mc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ic=p(),zr=a("p"),jc=n("Finally, this model supports inherent JAX features such as:"),Pc=p(),se=a("ul"),Ar=a("li"),Vo=a("a"),Cc=n("Just-In-Time (JIT) compilation"),zc=p(),qr=a("li"),Wo=a("a"),Ac=n("Automatic Differentiation"),qc=p(),Lr=a("li"),Uo=a("a"),Lc=n("Vectorization"),Sc=p(),Sr=a("li"),Ro=a("a"),Nc=n("Parallelization"),Oc=p(),K=a("div"),w(Ho.$$.fragment),Dc=p(),Ce=a("p"),Vc=n("The "),Nr=a("code"),Wc=n("FlaxBeitPreTrainedModel"),Uc=n(" forward method, overrides the "),Or=a("code"),Rc=n("__call__"),Hc=n(" special method."),Jc=p(),w(st.$$.fragment),Gc=p(),w(nt.$$.fragment),this.h()},l(o){const g=ih('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(t),v=m(o),u=r(o,"H1",{class:!0});var Jo=s(u);f=r(Jo,"A",{id:!0,class:!0,href:!0});var Dr=s(f);b=r(Dr,"SPAN",{});var Vr=s(b);x(l.$$.fragment,Vr),Vr.forEach(t),Dr.forEach(t),h=m(Jo),E=r(Jo,"SPAN",{});var Wr=s(E);tn=i(Wr,"BEiT"),Wr.forEach(t),Jo.forEach(t),es=m(o),ce=r(o,"H2",{class:!0});var Go=s(ce);ze=r(Go,"A",{id:!0,class:!0,href:!0});var Ur=s(ze);za=r(Ur,"SPAN",{});var Rr=s(za);x(Bt.$$.fragment,Rr),Rr.forEach(t),Ur.forEach(t),on=m(Go),Aa=r(Go,"SPAN",{});var Hr=s(Aa);an=i(Hr,"Overview"),Hr.forEach(t),Go.forEach(t),ts=m(o),W=r(o,"P",{});var ne=s(W);rn=i(ne,"The BEiT model was proposed in "),Ft=r(ne,"A",{href:!0,rel:!0});var Jr=s(Ft);sn=i(Jr,"BEiT: BERT Pre-Training of Image Transformers"),Jr.forEach(t),nn=i(ne,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Et=r(ne,"A",{href:!0,rel:!0});var Gr=s(Et);ln=i(Gr,"original ViT paper"),Gr.forEach(t),dn=i(ne,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),kt=r(ne,"A",{href:!0,rel:!0});var Xr=s(kt);cn=i(Xr,"DALL-E model"),Xr.forEach(t),pn=i(ne,` given masked
patches.`),ne.forEach(t),os=m(o),Xo=r(o,"P",{});var Kr=s(Xo);mn=i(Kr,"The abstract from the paper is the following:"),Kr.forEach(t),as=m(o),Ko=r(o,"P",{});var Yr=s(Ko);qa=r(Yr,"EM",{});var Qr=s(qa);hn=i(Qr,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),Qr.forEach(t),Yr.forEach(t),rs=m(o),Yo=r(o,"P",{});var Zr=s(Yo);fn=i(Zr,"Tips:"),Zr.forEach(t),ss=m(o),C=r(o,"UL",{});var Y=s(C);k=r(Y,"LI",{});var z=s(k);un=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Qo=r(z,"A",{href:!0});var Xc=s(Qo);gn=i(Xc,"original model (ViT)"),Xc.forEach(t),_n=i(z," as well as "),Zo=r(z,"A",{href:!0});var Kc=s(Zo);bn=i(Kc,"Data-efficient Image Transformers (DeiT)"),Kc.forEach(t),vn=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Mt=r(z,"A",{href:!0,rel:!0});var Yc=s(Mt);wn=i(Yc,"here"),Yc.forEach(t),xn=i(z,` (you can just replace
`),ea=r(z,"A",{href:!0});var Qc=s(ea);$n=i(Qc,"ViTFeatureExtractor"),Qc.forEach(t),yn=i(z," by "),ta=r(z,"A",{href:!0});var Zc=s(ta);Tn=i(Zc,"BeitFeatureExtractor"),Zc.forEach(t),Bn=i(z,` and
`),oa=r(z,"A",{href:!0});var ep=s(oa);Fn=i(ep,"ViTForImageClassification"),ep.forEach(t),En=i(z," by "),aa=r(z,"A",{href:!0});var tp=s(aa);kn=i(tp,"BeitForImageClassification"),tp.forEach(t),Mn=i(z,")."),z.forEach(t),In=m(Y),It=r(Y,"LI",{});var Ms=s(It);jn=i(Ms,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),jt=r(Ms,"A",{href:!0,rel:!0});var op=s(jt);Pn=i(op,"here"),op.forEach(t),Cn=i(Ms,"."),Ms.forEach(t),zn=m(Y),Pt=r(Y,"LI",{});var Is=s(Pt);An=i(Is,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),ra=r(Is,"A",{href:!0});var ap=s(ra);qn=i(ap,"BeitFeatureExtractor"),ap.forEach(t),Ln=i(Is," to resize (or rescale) and normalize images for the model."),Is.forEach(t),Sn=m(Y),pe=r(Y,"LI",{});var va=s(pe);Nn=i(va,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),La=r(va,"CODE",{});var rp=s(La);On=i(rp,"microsoft/beit-base-patch16-224"),rp.forEach(t),Dn=i(va,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Ct=r(va,"A",{href:!0,rel:!0});var sp=s(Ct);Vn=i(sp,"hub"),sp.forEach(t),Wn=i(va,"."),va.forEach(t),Un=m(Y),me=r(Y,"LI",{});var wa=s(me);Rn=i(wa,"The available checkpoints are either (1) pre-trained on "),zt=r(wa,"A",{href:!0,rel:!0});var np=s(zt);Hn=i(np,"ImageNet-22k"),np.forEach(t),Jn=i(wa,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),At=r(wa,"A",{href:!0,rel:!0});var ip=s(At);Gn=i(ip,"ImageNet-1k"),ip.forEach(t),Xn=i(wa,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),wa.forEach(t),Kn=m(Y),N=r(Y,"LI",{});var le=s(N);Yn=i(le,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Sa=r(le,"CODE",{});var lp=s(Sa);Qn=i(lp,"use_relative_position_bias"),lp.forEach(t),Zn=i(le,` or the
`),Na=r(le,"CODE",{});var dp=s(Na);ei=i(dp,"use_relative_position_bias"),dp.forEach(t),ti=i(le," attribute of "),sa=r(le,"A",{href:!0});var cp=s(sa);oi=i(cp,"BeitConfig"),cp.forEach(t),ai=i(le," to "),Oa=r(le,"CODE",{});var pp=s(Oa);ri=i(pp,"True"),pp.forEach(t),si=i(le,` in order to add
position embeddings.`),le.forEach(t),Y.forEach(t),ns=m(o),U=r(o,"P",{});var it=s(U);ni=i(it,"This model was contributed by "),qt=r(it,"A",{href:!0,rel:!0});var mp=s(qt);ii=i(mp,"nielsr"),mp.forEach(t),li=i(it,`. The JAX/FLAX version of this model was
contributed by `),Lt=r(it,"A",{href:!0,rel:!0});var hp=s(Lt);di=i(hp,"kamalkraj"),hp.forEach(t),ci=i(it,". The original code can be found "),St=r(it,"A",{href:!0,rel:!0});var fp=s(St);pi=i(fp,"here"),fp.forEach(t),mi=i(it,"."),it.forEach(t),is=m(o),he=r(o,"H2",{class:!0});var js=s(he);Ae=r(js,"A",{id:!0,class:!0,href:!0});var up=s(Ae);Da=r(up,"SPAN",{});var gp=s(Da);x(Nt.$$.fragment,gp),gp.forEach(t),up.forEach(t),hi=m(js),Va=r(js,"SPAN",{});var _p=s(Va);fi=i(_p,"BEiT specific outputs"),_p.forEach(t),js.forEach(t),ls=m(o),fe=r(o,"DIV",{class:!0});var Ps=s(fe);x(Ot.$$.fragment,Ps),ui=m(Ps),Dt=r(Ps,"P",{});var Cs=s(Dt);gi=i(Cs,"Class for outputs of "),na=r(Cs,"A",{href:!0});var bp=s(na);_i=i(bp,"BeitModel"),bp.forEach(t),bi=i(Cs,"."),Cs.forEach(t),Ps.forEach(t),ds=m(o),ue=r(o,"DIV",{class:!0});var zs=s(ue);x(Vt.$$.fragment,zs),vi=m(zs),Wt=r(zs,"P",{});var As=s(Wt);wi=i(As,"Class for outputs of "),ia=r(As,"A",{href:!0});var vp=s(ia);xi=i(vp,"FlaxBeitModel"),vp.forEach(t),$i=i(As,"."),As.forEach(t),zs.forEach(t),cs=m(o),ge=r(o,"H2",{class:!0});var qs=s(ge);qe=r(qs,"A",{id:!0,class:!0,href:!0});var wp=s(qe);Wa=r(wp,"SPAN",{});var xp=s(Wa);x(Ut.$$.fragment,xp),xp.forEach(t),wp.forEach(t),yi=m(qs),Ua=r(qs,"SPAN",{});var $p=s(Ua);Ti=i($p,"BeitConfig"),$p.forEach(t),qs.forEach(t),ps=m(o),Z=r(o,"DIV",{class:!0});var xa=s(Z);x(Rt.$$.fragment,xa),Bi=m(xa),_e=r(xa,"P",{});var $a=s(_e);Fi=i($a,"This is the configuration class to store the configuration of a "),la=r($a,"A",{href:!0});var yp=s(la);Ei=i(yp,"BeitModel"),yp.forEach(t),ki=i($a,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ht=r($a,"A",{href:!0,rel:!0});var Tp=s(Ht);Mi=i(Tp,"microsoft/beit-base-patch16-224-pt22k"),Tp.forEach(t),Ii=i($a," architecture."),$a.forEach(t),ji=m(xa),x(Le.$$.fragment,xa),xa.forEach(t),ms=m(o),be=r(o,"H2",{class:!0});var Ls=s(be);Se=r(Ls,"A",{id:!0,class:!0,href:!0});var Bp=s(Se);Ra=r(Bp,"SPAN",{});var Fp=s(Ra);x(Jt.$$.fragment,Fp),Fp.forEach(t),Bp.forEach(t),Pi=m(Ls),Ha=r(Ls,"SPAN",{});var Ep=s(Ha);Ci=i(Ep,"BeitFeatureExtractor"),Ep.forEach(t),Ls.forEach(t),hs=m(o),O=r(o,"DIV",{class:!0});var lt=s(O);x(Gt.$$.fragment,lt),zi=m(lt),Ja=r(lt,"P",{});var kp=s(Ja);Ai=i(kp,"Constructs a BEiT feature extractor."),kp.forEach(t),qi=m(lt),Xt=r(lt,"P",{});var Ss=s(Xt);Li=i(Ss,"This feature extractor inherits from "),da=r(Ss,"A",{href:!0});var Mp=s(da);Si=i(Mp,"FeatureExtractionMixin"),Mp.forEach(t),Ni=i(Ss,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Ss.forEach(t),Oi=m(lt),ie=r(lt,"DIV",{class:!0});var ya=s(ie);x(Kt.$$.fragment,ya),Di=m(ya),Ga=r(ya,"P",{});var Ip=s(Ga);Vi=i(Ip,"Main method to prepare for the model one or several image(s)."),Ip.forEach(t),Wi=m(ya),x(Ne.$$.fragment,ya),ya.forEach(t),lt.forEach(t),fs=m(o),ve=r(o,"H2",{class:!0});var Ns=s(ve);Oe=r(Ns,"A",{id:!0,class:!0,href:!0});var jp=s(Oe);Xa=r(jp,"SPAN",{});var Pp=s(Xa);x(Yt.$$.fragment,Pp),Pp.forEach(t),jp.forEach(t),Ui=m(Ns),Ka=r(Ns,"SPAN",{});var Cp=s(Ka);Ri=i(Cp,"BeitModel"),Cp.forEach(t),Ns.forEach(t),us=m(o),ee=r(o,"DIV",{class:!0});var Ta=s(ee);x(Qt.$$.fragment,Ta),Hi=m(Ta),Zt=r(Ta,"P",{});var Os=s(Zt);Ji=i(Os,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),eo=r(Os,"A",{href:!0,rel:!0});var zp=s(eo);Gi=i(zp,"torch.nn.Module"),zp.forEach(t),Xi=i(Os,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(t),Ki=m(Ta),R=r(Ta,"DIV",{class:!0});var dt=s(R);x(to.$$.fragment,dt),Yi=m(dt),we=r(dt,"P",{});var Ba=s(we);Qi=i(Ba,"The "),ca=r(Ba,"A",{href:!0});var Ap=s(ca);Zi=i(Ap,"BeitModel"),Ap.forEach(t),el=i(Ba," forward method, overrides the "),Ya=r(Ba,"CODE",{});var qp=s(Ya);tl=i(qp,"__call__"),qp.forEach(t),ol=i(Ba," special method."),Ba.forEach(t),al=m(dt),x(De.$$.fragment,dt),rl=m(dt),x(Ve.$$.fragment,dt),dt.forEach(t),Ta.forEach(t),gs=m(o),xe=r(o,"H2",{class:!0});var Ds=s(xe);We=r(Ds,"A",{id:!0,class:!0,href:!0});var Lp=s(We);Qa=r(Lp,"SPAN",{});var Sp=s(Qa);x(oo.$$.fragment,Sp),Sp.forEach(t),Lp.forEach(t),sl=m(Ds),Za=r(Ds,"SPAN",{});var Np=s(Za);nl=i(Np,"BeitForMaskedImageModeling"),Np.forEach(t),Ds.forEach(t),_s=m(o),te=r(o,"DIV",{class:!0});var Fa=s(te);x(ao.$$.fragment,Fa),il=m(Fa),oe=r(Fa,"P",{});var ct=s(oe);ll=i(ct,`Beit Model transformer with a \u2018language\u2019 modeling head on top. BEiT does masked image modeling by predicting
visual tokens of a Vector-Quantize Variational Autoencoder (VQ-VAE), whereas other vision models like ViT and DeiT
predict RGB pixel values. As a result, this class is incompatible with `),pa=r(ct,"A",{href:!0});var Op=s(pa);dl=i(Op,"AutoModelForMaskedImageModeling"),Op.forEach(t),cl=i(ct,`, so you
will need to use `),ma=r(ct,"A",{href:!0});var Dp=s(ma);pl=i(Dp,"BeitForMaskedImageModeling"),Dp.forEach(t),ml=i(ct,` directly if you wish to do masked image modeling with BEiT.
This model is a PyTorch `),ro=r(ct,"A",{href:!0,rel:!0});var Vp=s(ro);hl=i(Vp,"torch.nn.Module"),Vp.forEach(t),fl=i(ct,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ct.forEach(t),ul=m(Fa),H=r(Fa,"DIV",{class:!0});var pt=s(H);x(so.$$.fragment,pt),gl=m(pt),$e=r(pt,"P",{});var Ea=s($e);_l=i(Ea,"The "),ha=r(Ea,"A",{href:!0});var Wp=s(ha);bl=i(Wp,"BeitForMaskedImageModeling"),Wp.forEach(t),vl=i(Ea," forward method, overrides the "),er=r(Ea,"CODE",{});var Up=s(er);wl=i(Up,"__call__"),Up.forEach(t),xl=i(Ea," special method."),Ea.forEach(t),$l=m(pt),x(Ue.$$.fragment,pt),yl=m(pt),x(Re.$$.fragment,pt),pt.forEach(t),Fa.forEach(t),bs=m(o),ye=r(o,"H2",{class:!0});var Vs=s(ye);He=r(Vs,"A",{id:!0,class:!0,href:!0});var Rp=s(He);tr=r(Rp,"SPAN",{});var Hp=s(tr);x(no.$$.fragment,Hp),Hp.forEach(t),Rp.forEach(t),Tl=m(Vs),or=r(Vs,"SPAN",{});var Jp=s(or);Bl=i(Jp,"BeitForImageClassification"),Jp.forEach(t),Vs.forEach(t),vs=m(o),D=r(o,"DIV",{class:!0});var mt=s(D);x(io.$$.fragment,mt),Fl=m(mt),ar=r(mt,"P",{});var Gp=s(ar);El=i(Gp,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Gp.forEach(t),kl=m(mt),lo=r(mt,"P",{});var Ws=s(lo);Ml=i(Ws,"This model is a PyTorch "),co=r(Ws,"A",{href:!0,rel:!0});var Xp=s(co);Il=i(Xp,"torch.nn.Module"),Xp.forEach(t),jl=i(Ws,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ws.forEach(t),Pl=m(mt),J=r(mt,"DIV",{class:!0});var ht=s(J);x(po.$$.fragment,ht),Cl=m(ht),Te=r(ht,"P",{});var ka=s(Te);zl=i(ka,"The "),fa=r(ka,"A",{href:!0});var Kp=s(fa);Al=i(Kp,"BeitForImageClassification"),Kp.forEach(t),ql=i(ka," forward method, overrides the "),rr=r(ka,"CODE",{});var Yp=s(rr);Ll=i(Yp,"__call__"),Yp.forEach(t),Sl=i(ka," special method."),ka.forEach(t),Nl=m(ht),x(Je.$$.fragment,ht),Ol=m(ht),x(Ge.$$.fragment,ht),ht.forEach(t),mt.forEach(t),ws=m(o),Be=r(o,"H2",{class:!0});var Us=s(Be);Xe=r(Us,"A",{id:!0,class:!0,href:!0});var Qp=s(Xe);sr=r(Qp,"SPAN",{});var Zp=s(sr);x(mo.$$.fragment,Zp),Zp.forEach(t),Qp.forEach(t),Dl=m(Us),nr=r(Us,"SPAN",{});var em=s(nr);Vl=i(em,"BeitForSemanticSegmentation"),em.forEach(t),Us.forEach(t),xs=m(o),V=r(o,"DIV",{class:!0});var ft=s(V);x(ho.$$.fragment,ft),Wl=m(ft),ir=r(ft,"P",{});var tm=s(ir);Ul=i(tm,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),tm.forEach(t),Rl=m(ft),fo=r(ft,"P",{});var Rs=s(fo);Hl=i(Rs,"This model is a PyTorch "),uo=r(Rs,"A",{href:!0,rel:!0});var om=s(uo);Jl=i(om,"torch.nn.Module"),om.forEach(t),Gl=i(Rs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rs.forEach(t),Xl=m(ft),G=r(ft,"DIV",{class:!0});var ut=s(G);x(go.$$.fragment,ut),Kl=m(ut),Fe=r(ut,"P",{});var Ma=s(Fe);Yl=i(Ma,"The "),ua=r(Ma,"A",{href:!0});var am=s(ua);Ql=i(am,"BeitForSemanticSegmentation"),am.forEach(t),Zl=i(Ma," forward method, overrides the "),lr=r(Ma,"CODE",{});var rm=s(lr);ed=i(rm,"__call__"),rm.forEach(t),td=i(Ma," special method."),Ma.forEach(t),od=m(ut),x(Ke.$$.fragment,ut),ad=m(ut),x(Ye.$$.fragment,ut),ut.forEach(t),ft.forEach(t),$s=m(o),Ee=r(o,"H2",{class:!0});var Hs=s(Ee);Qe=r(Hs,"A",{id:!0,class:!0,href:!0});var sm=s(Qe);dr=r(sm,"SPAN",{});var nm=s(dr);x(_o.$$.fragment,nm),nm.forEach(t),sm.forEach(t),rd=m(Hs),cr=r(Hs,"SPAN",{});var im=s(cr);sd=i(im,"FlaxBeitModel"),im.forEach(t),Hs.forEach(t),ys=m(o),M=r(o,"DIV",{class:!0});var q=s(M);x(bo.$$.fragment,q),nd=m(q),pr=r(q,"P",{});var lm=s(pr);id=i(lm,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),lm.forEach(t),ld=m(q),vo=r(q,"P",{});var Js=s(vo);dd=i(Js,"This model inherits from "),ga=r(Js,"A",{href:!0});var dm=s(ga);cd=i(dm,"FlaxPreTrainedModel"),dm.forEach(t),pd=i(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Js.forEach(t),md=m(q),wo=r(q,"P",{});var Gs=s(wo);hd=i(Gs,"This model is also a Flax Linen "),xo=r(Gs,"A",{href:!0,rel:!0});var cm=s(xo);fd=i(cm,"flax.linen.Module"),cm.forEach(t),ud=i(Gs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gs.forEach(t),gd=m(q),mr=r(q,"P",{});var pm=s(mr);_d=i(pm,"Finally, this model supports inherent JAX features such as:"),pm.forEach(t),bd=m(q),ae=r(q,"UL",{});var gt=s(ae);hr=r(gt,"LI",{});var mm=s(hr);$o=r(mm,"A",{href:!0,rel:!0});var hm=s($o);vd=i(hm,"Just-In-Time (JIT) compilation"),hm.forEach(t),mm.forEach(t),wd=m(gt),fr=r(gt,"LI",{});var fm=s(fr);yo=r(fm,"A",{href:!0,rel:!0});var um=s(yo);xd=i(um,"Automatic Differentiation"),um.forEach(t),fm.forEach(t),$d=m(gt),ur=r(gt,"LI",{});var gm=s(ur);To=r(gm,"A",{href:!0,rel:!0});var _m=s(To);yd=i(_m,"Vectorization"),_m.forEach(t),gm.forEach(t),Td=m(gt),gr=r(gt,"LI",{});var bm=s(gr);Bo=r(bm,"A",{href:!0,rel:!0});var vm=s(Bo);Bd=i(vm,"Parallelization"),vm.forEach(t),bm.forEach(t),gt.forEach(t),Fd=m(q),X=r(q,"DIV",{class:!0});var _t=s(X);x(Fo.$$.fragment,_t),Ed=m(_t),ke=r(_t,"P",{});var Ia=s(ke);kd=i(Ia,"The "),_r=r(Ia,"CODE",{});var wm=s(_r);Md=i(wm,"FlaxBeitPreTrainedModel"),wm.forEach(t),Id=i(Ia," forward method, overrides the "),br=r(Ia,"CODE",{});var xm=s(br);jd=i(xm,"__call__"),xm.forEach(t),Pd=i(Ia," special method."),Ia.forEach(t),Cd=m(_t),x(Ze.$$.fragment,_t),zd=m(_t),x(et.$$.fragment,_t),_t.forEach(t),q.forEach(t),Ts=m(o),Me=r(o,"H2",{class:!0});var Xs=s(Me);tt=r(Xs,"A",{id:!0,class:!0,href:!0});var $m=s(tt);vr=r($m,"SPAN",{});var ym=s(vr);x(Eo.$$.fragment,ym),ym.forEach(t),$m.forEach(t),Ad=m(Xs),wr=r(Xs,"SPAN",{});var Tm=s(wr);qd=i(Tm,"FlaxBeitForMaskedImageModeling"),Tm.forEach(t),Xs.forEach(t),Bs=m(o),I=r(o,"DIV",{class:!0});var L=s(I);x(ko.$$.fragment,L),Ld=m(L),xr=r(L,"P",{});var Bm=s(xr);Sd=i(Bm,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Bm.forEach(t),Nd=m(L),Mo=r(L,"P",{});var Ks=s(Mo);Od=i(Ks,"This model inherits from "),_a=r(Ks,"A",{href:!0});var Fm=s(_a);Dd=i(Fm,"FlaxPreTrainedModel"),Fm.forEach(t),Vd=i(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ks.forEach(t),Wd=m(L),Io=r(L,"P",{});var Ys=s(Io);Ud=i(Ys,"This model is also a Flax Linen "),jo=r(Ys,"A",{href:!0,rel:!0});var Em=s(jo);Rd=i(Em,"flax.linen.Module"),Em.forEach(t),Hd=i(Ys,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ys.forEach(t),Jd=m(L),$r=r(L,"P",{});var km=s($r);Gd=i(km,"Finally, this model supports inherent JAX features such as:"),km.forEach(t),Xd=m(L),re=r(L,"UL",{});var bt=s(re);yr=r(bt,"LI",{});var Mm=s(yr);Po=r(Mm,"A",{href:!0,rel:!0});var Im=s(Po);Kd=i(Im,"Just-In-Time (JIT) compilation"),Im.forEach(t),Mm.forEach(t),Yd=m(bt),Tr=r(bt,"LI",{});var jm=s(Tr);Co=r(jm,"A",{href:!0,rel:!0});var Pm=s(Co);Qd=i(Pm,"Automatic Differentiation"),Pm.forEach(t),jm.forEach(t),Zd=m(bt),Br=r(bt,"LI",{});var Cm=s(Br);zo=r(Cm,"A",{href:!0,rel:!0});var zm=s(zo);ec=i(zm,"Vectorization"),zm.forEach(t),Cm.forEach(t),tc=m(bt),Fr=r(bt,"LI",{});var Am=s(Fr);Ao=r(Am,"A",{href:!0,rel:!0});var qm=s(Ao);oc=i(qm,"Parallelization"),qm.forEach(t),Am.forEach(t),bt.forEach(t),ac=m(L),A=r(L,"DIV",{class:!0});var de=s(A);x(qo.$$.fragment,de),rc=m(de),Ie=r(de,"P",{});var ja=s(Ie);sc=i(ja,"The "),Er=r(ja,"CODE",{});var Lm=s(Er);nc=i(Lm,"FlaxBeitPreTrainedModel"),Lm.forEach(t),ic=i(ja," forward method, overrides the "),kr=r(ja,"CODE",{});var Sm=s(kr);lc=i(Sm,"__call__"),Sm.forEach(t),dc=i(ja," special method."),ja.forEach(t),cc=m(de),x(ot.$$.fragment,de),pc=m(de),je=r(de,"P",{});var Pa=s(je);mc=i(Pa,"bool_masked_pos ("),Mr=r(Pa,"CODE",{});var Nm=s(Mr);hc=i(Nm,"numpy.ndarray"),Nm.forEach(t),fc=i(Pa," of shape "),Ir=r(Pa,"CODE",{});var Om=s(Ir);uc=i(Om,"(batch_size, num_patches)"),Om.forEach(t),gc=i(Pa,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Pa.forEach(t),_c=m(de),x(at.$$.fragment,de),de.forEach(t),L.forEach(t),Fs=m(o),Pe=r(o,"H2",{class:!0});var Qs=s(Pe);rt=r(Qs,"A",{id:!0,class:!0,href:!0});var Dm=s(rt);jr=r(Dm,"SPAN",{});var Vm=s(jr);x(Lo.$$.fragment,Vm),Vm.forEach(t),Dm.forEach(t),bc=m(Qs),Pr=r(Qs,"SPAN",{});var Wm=s(Pr);vc=i(Wm,"FlaxBeitForImageClassification"),Wm.forEach(t),Qs.forEach(t),Es=m(o),j=r(o,"DIV",{class:!0});var S=s(j);x(So.$$.fragment,S),wc=m(S),Cr=r(S,"P",{});var Um=s(Cr);xc=i(Um,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Um.forEach(t),$c=m(S),No=r(S,"P",{});var Zs=s(No);yc=i(Zs,"This model inherits from "),ba=r(Zs,"A",{href:!0});var Rm=s(ba);Tc=i(Rm,"FlaxPreTrainedModel"),Rm.forEach(t),Bc=i(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zs.forEach(t),Fc=m(S),Oo=r(S,"P",{});var en=s(Oo);Ec=i(en,"This model is also a Flax Linen "),Do=r(en,"A",{href:!0,rel:!0});var Hm=s(Do);kc=i(Hm,"flax.linen.Module"),Hm.forEach(t),Mc=i(en,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),en.forEach(t),Ic=m(S),zr=r(S,"P",{});var Jm=s(zr);jc=i(Jm,"Finally, this model supports inherent JAX features such as:"),Jm.forEach(t),Pc=m(S),se=r(S,"UL",{});var vt=s(se);Ar=r(vt,"LI",{});var Gm=s(Ar);Vo=r(Gm,"A",{href:!0,rel:!0});var Xm=s(Vo);Cc=i(Xm,"Just-In-Time (JIT) compilation"),Xm.forEach(t),Gm.forEach(t),zc=m(vt),qr=r(vt,"LI",{});var Km=s(qr);Wo=r(Km,"A",{href:!0,rel:!0});var Ym=s(Wo);Ac=i(Ym,"Automatic Differentiation"),Ym.forEach(t),Km.forEach(t),qc=m(vt),Lr=r(vt,"LI",{});var Qm=s(Lr);Uo=r(Qm,"A",{href:!0,rel:!0});var Zm=s(Uo);Lc=i(Zm,"Vectorization"),Zm.forEach(t),Qm.forEach(t),Sc=m(vt),Sr=r(vt,"LI",{});var eh=s(Sr);Ro=r(eh,"A",{href:!0,rel:!0});var th=s(Ro);Nc=i(th,"Parallelization"),th.forEach(t),eh.forEach(t),vt.forEach(t),Oc=m(S),K=r(S,"DIV",{class:!0});var wt=s(K);x(Ho.$$.fragment,wt),Dc=m(wt),Ce=r(wt,"P",{});var Ca=s(Ce);Vc=i(Ca,"The "),Nr=r(Ca,"CODE",{});var oh=s(Nr);Wc=i(oh,"FlaxBeitPreTrainedModel"),oh.forEach(t),Uc=i(Ca," forward method, overrides the "),Or=r(Ca,"CODE",{});var ah=s(Or);Rc=i(ah,"__call__"),ah.forEach(t),Hc=i(Ca," special method."),Ca.forEach(t),Jc=m(wt),x(st.$$.fragment,wt),Gc=m(wt),x(nt.$$.fragment,wt),wt.forEach(t),S.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Fh)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(u,"class","relative group"),d(ze,"id","overview"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#overview"),d(ce,"class","relative group"),d(Ft,"href","https://arxiv.org/abs/2106.08254"),d(Ft,"rel","nofollow"),d(Et,"href","https://arxiv.org/abs/2010.11929"),d(Et,"rel","nofollow"),d(kt,"href","https://arxiv.org/abs/2102.12092"),d(kt,"rel","nofollow"),d(Qo,"href","vit"),d(Zo,"href","deit"),d(Mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(Mt,"rel","nofollow"),d(ea,"href","/docs/transformers/pr_17765/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ta,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(oa,"href","/docs/transformers/pr_17765/en/model_doc/vit#transformers.ViTForImageClassification"),d(aa,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitForImageClassification"),d(jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(jt,"rel","nofollow"),d(ra,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(Ct,"href","https://huggingface.co/models?search=microsoft/beit"),d(Ct,"rel","nofollow"),d(zt,"href","http://www.image-net.org/"),d(zt,"rel","nofollow"),d(At,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(At,"rel","nofollow"),d(sa,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitConfig"),d(qt,"href","https://huggingface.co/nielsr"),d(qt,"rel","nofollow"),d(Lt,"href","https://huggingface.co/kamalkraj"),d(Lt,"rel","nofollow"),d(St,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(St,"rel","nofollow"),d(Ae,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(he,"class","relative group"),d(na,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ia,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.FlaxBeitModel"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qe,"id","transformers.BeitConfig"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.BeitConfig"),d(ge,"class","relative group"),d(la,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitModel"),d(Ht,"href","https://huggingface.co/microsoft/beit-base-patch16-224-pt22k"),d(Ht,"rel","nofollow"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.BeitFeatureExtractor"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.BeitFeatureExtractor"),d(be,"class","relative group"),d(da,"href","/docs/transformers/pr_17765/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"id","transformers.BeitModel"),d(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Oe,"href","#transformers.BeitModel"),d(ve,"class","relative group"),d(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(eo,"rel","nofollow"),d(ca,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitForMaskedImageModeling"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitForMaskedImageModeling"),d(xe,"class","relative group"),d(pa,"href","/docs/transformers/pr_17765/en/model_doc/auto#transformers.AutoModelForMaskedImageModeling"),d(ma,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ro,"rel","nofollow"),d(ha,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.BeitForImageClassification"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.BeitForImageClassification"),d(ye,"class","relative group"),d(co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(co,"rel","nofollow"),d(fa,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForSemanticSegmentation"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForSemanticSegmentation"),d(Be,"class","relative group"),d(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(uo,"rel","nofollow"),d(ua,"href","/docs/transformers/pr_17765/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"id","transformers.FlaxBeitModel"),d(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Qe,"href","#transformers.FlaxBeitModel"),d(Ee,"class","relative group"),d(ga,"href","/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(xo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(xo,"rel","nofollow"),d($o,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d($o,"rel","nofollow"),d(yo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(To,"rel","nofollow"),d(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Bo,"rel","nofollow"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(tt,"id","transformers.FlaxBeitForMaskedImageModeling"),d(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(tt,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(Me,"class","relative group"),d(_a,"href","/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(jo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(jo,"rel","nofollow"),d(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Po,"rel","nofollow"),d(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(zo,"rel","nofollow"),d(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ao,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(rt,"id","transformers.FlaxBeitForImageClassification"),d(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(rt,"href","#transformers.FlaxBeitForImageClassification"),d(Pe,"class","relative group"),d(ba,"href","/docs/transformers/pr_17765/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Do,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Do,"rel","nofollow"),d(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Vo,"rel","nofollow"),d(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Uo,"rel","nofollow"),d(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ro,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,u,g),e(u,f),e(f,b),$(l,b,null),e(u,h),e(u,E),e(E,tn),_(o,es,g),_(o,ce,g),e(ce,ze),e(ze,za),$(Bt,za,null),e(ce,on),e(ce,Aa),e(Aa,an),_(o,ts,g),_(o,W,g),e(W,rn),e(W,Ft),e(Ft,sn),e(W,nn),e(W,Et),e(Et,ln),e(W,dn),e(W,kt),e(kt,cn),e(W,pn),_(o,os,g),_(o,Xo,g),e(Xo,mn),_(o,as,g),_(o,Ko,g),e(Ko,qa),e(qa,hn),_(o,rs,g),_(o,Yo,g),e(Yo,fn),_(o,ss,g),_(o,C,g),e(C,k),e(k,un),e(k,Qo),e(Qo,gn),e(k,_n),e(k,Zo),e(Zo,bn),e(k,vn),e(k,Mt),e(Mt,wn),e(k,xn),e(k,ea),e(ea,$n),e(k,yn),e(k,ta),e(ta,Tn),e(k,Bn),e(k,oa),e(oa,Fn),e(k,En),e(k,aa),e(aa,kn),e(k,Mn),e(C,In),e(C,It),e(It,jn),e(It,jt),e(jt,Pn),e(It,Cn),e(C,zn),e(C,Pt),e(Pt,An),e(Pt,ra),e(ra,qn),e(Pt,Ln),e(C,Sn),e(C,pe),e(pe,Nn),e(pe,La),e(La,On),e(pe,Dn),e(pe,Ct),e(Ct,Vn),e(pe,Wn),e(C,Un),e(C,me),e(me,Rn),e(me,zt),e(zt,Hn),e(me,Jn),e(me,At),e(At,Gn),e(me,Xn),e(C,Kn),e(C,N),e(N,Yn),e(N,Sa),e(Sa,Qn),e(N,Zn),e(N,Na),e(Na,ei),e(N,ti),e(N,sa),e(sa,oi),e(N,ai),e(N,Oa),e(Oa,ri),e(N,si),_(o,ns,g),_(o,U,g),e(U,ni),e(U,qt),e(qt,ii),e(U,li),e(U,Lt),e(Lt,di),e(U,ci),e(U,St),e(St,pi),e(U,mi),_(o,is,g),_(o,he,g),e(he,Ae),e(Ae,Da),$(Nt,Da,null),e(he,hi),e(he,Va),e(Va,fi),_(o,ls,g),_(o,fe,g),$(Ot,fe,null),e(fe,ui),e(fe,Dt),e(Dt,gi),e(Dt,na),e(na,_i),e(Dt,bi),_(o,ds,g),_(o,ue,g),$(Vt,ue,null),e(ue,vi),e(ue,Wt),e(Wt,wi),e(Wt,ia),e(ia,xi),e(Wt,$i),_(o,cs,g),_(o,ge,g),e(ge,qe),e(qe,Wa),$(Ut,Wa,null),e(ge,yi),e(ge,Ua),e(Ua,Ti),_(o,ps,g),_(o,Z,g),$(Rt,Z,null),e(Z,Bi),e(Z,_e),e(_e,Fi),e(_e,la),e(la,Ei),e(_e,ki),e(_e,Ht),e(Ht,Mi),e(_e,Ii),e(Z,ji),$(Le,Z,null),_(o,ms,g),_(o,be,g),e(be,Se),e(Se,Ra),$(Jt,Ra,null),e(be,Pi),e(be,Ha),e(Ha,Ci),_(o,hs,g),_(o,O,g),$(Gt,O,null),e(O,zi),e(O,Ja),e(Ja,Ai),e(O,qi),e(O,Xt),e(Xt,Li),e(Xt,da),e(da,Si),e(Xt,Ni),e(O,Oi),e(O,ie),$(Kt,ie,null),e(ie,Di),e(ie,Ga),e(Ga,Vi),e(ie,Wi),$(Ne,ie,null),_(o,fs,g),_(o,ve,g),e(ve,Oe),e(Oe,Xa),$(Yt,Xa,null),e(ve,Ui),e(ve,Ka),e(Ka,Ri),_(o,us,g),_(o,ee,g),$(Qt,ee,null),e(ee,Hi),e(ee,Zt),e(Zt,Ji),e(Zt,eo),e(eo,Gi),e(Zt,Xi),e(ee,Ki),e(ee,R),$(to,R,null),e(R,Yi),e(R,we),e(we,Qi),e(we,ca),e(ca,Zi),e(we,el),e(we,Ya),e(Ya,tl),e(we,ol),e(R,al),$(De,R,null),e(R,rl),$(Ve,R,null),_(o,gs,g),_(o,xe,g),e(xe,We),e(We,Qa),$(oo,Qa,null),e(xe,sl),e(xe,Za),e(Za,nl),_(o,_s,g),_(o,te,g),$(ao,te,null),e(te,il),e(te,oe),e(oe,ll),e(oe,pa),e(pa,dl),e(oe,cl),e(oe,ma),e(ma,pl),e(oe,ml),e(oe,ro),e(ro,hl),e(oe,fl),e(te,ul),e(te,H),$(so,H,null),e(H,gl),e(H,$e),e($e,_l),e($e,ha),e(ha,bl),e($e,vl),e($e,er),e(er,wl),e($e,xl),e(H,$l),$(Ue,H,null),e(H,yl),$(Re,H,null),_(o,bs,g),_(o,ye,g),e(ye,He),e(He,tr),$(no,tr,null),e(ye,Tl),e(ye,or),e(or,Bl),_(o,vs,g),_(o,D,g),$(io,D,null),e(D,Fl),e(D,ar),e(ar,El),e(D,kl),e(D,lo),e(lo,Ml),e(lo,co),e(co,Il),e(lo,jl),e(D,Pl),e(D,J),$(po,J,null),e(J,Cl),e(J,Te),e(Te,zl),e(Te,fa),e(fa,Al),e(Te,ql),e(Te,rr),e(rr,Ll),e(Te,Sl),e(J,Nl),$(Je,J,null),e(J,Ol),$(Ge,J,null),_(o,ws,g),_(o,Be,g),e(Be,Xe),e(Xe,sr),$(mo,sr,null),e(Be,Dl),e(Be,nr),e(nr,Vl),_(o,xs,g),_(o,V,g),$(ho,V,null),e(V,Wl),e(V,ir),e(ir,Ul),e(V,Rl),e(V,fo),e(fo,Hl),e(fo,uo),e(uo,Jl),e(fo,Gl),e(V,Xl),e(V,G),$(go,G,null),e(G,Kl),e(G,Fe),e(Fe,Yl),e(Fe,ua),e(ua,Ql),e(Fe,Zl),e(Fe,lr),e(lr,ed),e(Fe,td),e(G,od),$(Ke,G,null),e(G,ad),$(Ye,G,null),_(o,$s,g),_(o,Ee,g),e(Ee,Qe),e(Qe,dr),$(_o,dr,null),e(Ee,rd),e(Ee,cr),e(cr,sd),_(o,ys,g),_(o,M,g),$(bo,M,null),e(M,nd),e(M,pr),e(pr,id),e(M,ld),e(M,vo),e(vo,dd),e(vo,ga),e(ga,cd),e(vo,pd),e(M,md),e(M,wo),e(wo,hd),e(wo,xo),e(xo,fd),e(wo,ud),e(M,gd),e(M,mr),e(mr,_d),e(M,bd),e(M,ae),e(ae,hr),e(hr,$o),e($o,vd),e(ae,wd),e(ae,fr),e(fr,yo),e(yo,xd),e(ae,$d),e(ae,ur),e(ur,To),e(To,yd),e(ae,Td),e(ae,gr),e(gr,Bo),e(Bo,Bd),e(M,Fd),e(M,X),$(Fo,X,null),e(X,Ed),e(X,ke),e(ke,kd),e(ke,_r),e(_r,Md),e(ke,Id),e(ke,br),e(br,jd),e(ke,Pd),e(X,Cd),$(Ze,X,null),e(X,zd),$(et,X,null),_(o,Ts,g),_(o,Me,g),e(Me,tt),e(tt,vr),$(Eo,vr,null),e(Me,Ad),e(Me,wr),e(wr,qd),_(o,Bs,g),_(o,I,g),$(ko,I,null),e(I,Ld),e(I,xr),e(xr,Sd),e(I,Nd),e(I,Mo),e(Mo,Od),e(Mo,_a),e(_a,Dd),e(Mo,Vd),e(I,Wd),e(I,Io),e(Io,Ud),e(Io,jo),e(jo,Rd),e(Io,Hd),e(I,Jd),e(I,$r),e($r,Gd),e(I,Xd),e(I,re),e(re,yr),e(yr,Po),e(Po,Kd),e(re,Yd),e(re,Tr),e(Tr,Co),e(Co,Qd),e(re,Zd),e(re,Br),e(Br,zo),e(zo,ec),e(re,tc),e(re,Fr),e(Fr,Ao),e(Ao,oc),e(I,ac),e(I,A),$(qo,A,null),e(A,rc),e(A,Ie),e(Ie,sc),e(Ie,Er),e(Er,nc),e(Ie,ic),e(Ie,kr),e(kr,lc),e(Ie,dc),e(A,cc),$(ot,A,null),e(A,pc),e(A,je),e(je,mc),e(je,Mr),e(Mr,hc),e(je,fc),e(je,Ir),e(Ir,uc),e(je,gc),e(A,_c),$(at,A,null),_(o,Fs,g),_(o,Pe,g),e(Pe,rt),e(rt,jr),$(Lo,jr,null),e(Pe,bc),e(Pe,Pr),e(Pr,vc),_(o,Es,g),_(o,j,g),$(So,j,null),e(j,wc),e(j,Cr),e(Cr,xc),e(j,$c),e(j,No),e(No,yc),e(No,ba),e(ba,Tc),e(No,Bc),e(j,Fc),e(j,Oo),e(Oo,Ec),e(Oo,Do),e(Do,kc),e(Oo,Mc),e(j,Ic),e(j,zr),e(zr,jc),e(j,Pc),e(j,se),e(se,Ar),e(Ar,Vo),e(Vo,Cc),e(se,zc),e(se,qr),e(qr,Wo),e(Wo,Ac),e(se,qc),e(se,Lr),e(Lr,Uo),e(Uo,Lc),e(se,Sc),e(se,Sr),e(Sr,Ro),e(Ro,Nc),e(j,Oc),e(j,K),$(Ho,K,null),e(K,Dc),e(K,Ce),e(Ce,Vc),e(Ce,Nr),e(Nr,Wc),e(Ce,Uc),e(Ce,Or),e(Or,Rc),e(Ce,Hc),e(K,Jc),$(st,K,null),e(K,Gc),$(nt,K,null),ks=!0},p(o,[g]){const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Le.$set(Jo);const Dr={};g&2&&(Dr.$$scope={dirty:g,ctx:o}),Ne.$set(Dr);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),De.$set(Vr);const Wr={};g&2&&(Wr.$$scope={dirty:g,ctx:o}),Ve.$set(Wr);const Go={};g&2&&(Go.$$scope={dirty:g,ctx:o}),Ue.$set(Go);const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:o}),Re.$set(Ur);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:o}),Je.$set(Rr);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),Ge.$set(Hr);const ne={};g&2&&(ne.$$scope={dirty:g,ctx:o}),Ke.$set(ne);const Jr={};g&2&&(Jr.$$scope={dirty:g,ctx:o}),Ye.$set(Jr);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:o}),Ze.$set(Gr);const Xr={};g&2&&(Xr.$$scope={dirty:g,ctx:o}),et.$set(Xr);const Kr={};g&2&&(Kr.$$scope={dirty:g,ctx:o}),ot.$set(Kr);const Yr={};g&2&&(Yr.$$scope={dirty:g,ctx:o}),at.$set(Yr);const Qr={};g&2&&(Qr.$$scope={dirty:g,ctx:o}),st.$set(Qr);const Zr={};g&2&&(Zr.$$scope={dirty:g,ctx:o}),nt.$set(Zr)},i(o){ks||(y(l.$$.fragment,o),y(Bt.$$.fragment,o),y(Nt.$$.fragment,o),y(Ot.$$.fragment,o),y(Vt.$$.fragment,o),y(Ut.$$.fragment,o),y(Rt.$$.fragment,o),y(Le.$$.fragment,o),y(Jt.$$.fragment,o),y(Gt.$$.fragment,o),y(Kt.$$.fragment,o),y(Ne.$$.fragment,o),y(Yt.$$.fragment,o),y(Qt.$$.fragment,o),y(to.$$.fragment,o),y(De.$$.fragment,o),y(Ve.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(so.$$.fragment,o),y(Ue.$$.fragment,o),y(Re.$$.fragment,o),y(no.$$.fragment,o),y(io.$$.fragment,o),y(po.$$.fragment,o),y(Je.$$.fragment,o),y(Ge.$$.fragment,o),y(mo.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(Ke.$$.fragment,o),y(Ye.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(Fo.$$.fragment,o),y(Ze.$$.fragment,o),y(et.$$.fragment,o),y(Eo.$$.fragment,o),y(ko.$$.fragment,o),y(qo.$$.fragment,o),y(ot.$$.fragment,o),y(at.$$.fragment,o),y(Lo.$$.fragment,o),y(So.$$.fragment,o),y(Ho.$$.fragment,o),y(st.$$.fragment,o),y(nt.$$.fragment,o),ks=!0)},o(o){T(l.$$.fragment,o),T(Bt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ot.$$.fragment,o),T(Vt.$$.fragment,o),T(Ut.$$.fragment,o),T(Rt.$$.fragment,o),T(Le.$$.fragment,o),T(Jt.$$.fragment,o),T(Gt.$$.fragment,o),T(Kt.$$.fragment,o),T(Ne.$$.fragment,o),T(Yt.$$.fragment,o),T(Qt.$$.fragment,o),T(to.$$.fragment,o),T(De.$$.fragment,o),T(Ve.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(so.$$.fragment,o),T(Ue.$$.fragment,o),T(Re.$$.fragment,o),T(no.$$.fragment,o),T(io.$$.fragment,o),T(po.$$.fragment,o),T(Je.$$.fragment,o),T(Ge.$$.fragment,o),T(mo.$$.fragment,o),T(ho.$$.fragment,o),T(go.$$.fragment,o),T(Ke.$$.fragment,o),T(Ye.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(Fo.$$.fragment,o),T(Ze.$$.fragment,o),T(et.$$.fragment,o),T(Eo.$$.fragment,o),T(ko.$$.fragment,o),T(qo.$$.fragment,o),T(ot.$$.fragment,o),T(at.$$.fragment,o),T(Lo.$$.fragment,o),T(So.$$.fragment,o),T(Ho.$$.fragment,o),T(st.$$.fragment,o),T(nt.$$.fragment,o),ks=!1},d(o){t(c),o&&t(v),o&&t(u),B(l),o&&t(es),o&&t(ce),B(Bt),o&&t(ts),o&&t(W),o&&t(os),o&&t(Xo),o&&t(as),o&&t(Ko),o&&t(rs),o&&t(Yo),o&&t(ss),o&&t(C),o&&t(ns),o&&t(U),o&&t(is),o&&t(he),B(Nt),o&&t(ls),o&&t(fe),B(Ot),o&&t(ds),o&&t(ue),B(Vt),o&&t(cs),o&&t(ge),B(Ut),o&&t(ps),o&&t(Z),B(Rt),B(Le),o&&t(ms),o&&t(be),B(Jt),o&&t(hs),o&&t(O),B(Gt),B(Kt),B(Ne),o&&t(fs),o&&t(ve),B(Yt),o&&t(us),o&&t(ee),B(Qt),B(to),B(De),B(Ve),o&&t(gs),o&&t(xe),B(oo),o&&t(_s),o&&t(te),B(ao),B(so),B(Ue),B(Re),o&&t(bs),o&&t(ye),B(no),o&&t(vs),o&&t(D),B(io),B(po),B(Je),B(Ge),o&&t(ws),o&&t(Be),B(mo),o&&t(xs),o&&t(V),B(ho),B(go),B(Ke),B(Ye),o&&t($s),o&&t(Ee),B(_o),o&&t(ys),o&&t(M),B(bo),B(Fo),B(Ze),B(et),o&&t(Ts),o&&t(Me),B(Eo),o&&t(Bs),o&&t(I),B(ko),B(qo),B(ot),B(at),o&&t(Fs),o&&t(Pe),B(Lo),o&&t(Es),o&&t(j),B(So),B(Ho),B(st),B(nt)}}}const Fh={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function Eh(F){return lh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zh extends rh{constructor(c){super();sh(this,c,Eh,Bh,nh,{})}}export{zh as default,Fh as metadata};
