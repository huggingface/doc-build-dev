import{S as Kp,i as Yp,s as Zp,e as a,k as h,w,t as n,M as Qp,c as r,d as t,m as p,a as s,x,h as i,b as d,F as e,g as _,y as $,q as y,o as T,B,v as em,L as xt}from"../../chunks/vendor-6b77c823.js";import{T as vt}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as $t}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as wt}from"../../chunks/ExampleCodeBlock-5212b321.js";function tm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitModel, BeitConfig

# Initializing a BEiT beit-base-patch16-224-in22k style configuration
configuration = BeitConfig()

# Initializing a model from the beit-base-patch16-224-in22k style configuration
model = BeitModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitModel, BeitConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BEiT beit-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BeitConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the beit-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=n("Example:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Example:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function om(F){let c,v;return{c(){c=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=r(u,"P",{});var f=s(c);v=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,c,f),e(c,v)},d(u){u&&t(c)}}}function am(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function rm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),v=n("Example:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Example:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function sm(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function nm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">196</span>, <span class="hljs-number">8192</span>]`}}),{c(){c=a("p"),v=n("Examples:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Examples:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function im(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function lm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForImageClassification
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
tabby, tabby cat`}}),{c(){c=a("p"),v=n("Example:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Example:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function dm(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function cm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = BeitFeatureExtractor.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")
model = BeitForSemanticSegmentation.from_pretrained("microsoft/beit-base-finetuned-ade-640-640")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
# logits are of shape (batch_size, num_labels, height, width)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, BeitForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BeitForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;microsoft/beit-base-finetuned-ade-640-640&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Examples:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function hm(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function pm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),v=n("Examples:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Examples:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function mm(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function fm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, BeitForMaskedImageModeling
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),v=n("Examples:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Examples:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function um(F){let c,v,u,f,b;return{c(){c=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var E=s(u);f=i(E,"Module"),E.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,c,m),e(c,v),e(c,u),e(u,f),e(c,b)},d(l){l&&t(c)}}}function gm(F){let c,v,u,f,b;return f=new $t({props:{code:`from transformers import BeitFeatureExtractor, FlaxBeitForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){c=a("p"),v=n("Example:"),u=h(),w(f.$$.fragment)},l(l){c=r(l,"P",{});var m=s(c);v=i(m,"Example:"),m.forEach(t),u=p(l),x(f.$$.fragment,l)},m(l,m){_(l,c,m),e(c,v),_(l,u,m),$(f,l,m),b=!0},p:xt,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(u),B(f,l)}}}function _m(F){let c,v,u,f,b,l,m,E,Qs,Yr,de,Ce,ja,yt,en,Pa,tn,Zr,V,on,Tt,an,rn,Bt,sn,nn,Ft,ln,dn,Qr,Xo,cn,es,Go,Ca,hn,ts,Ko,pn,os,C,k,mn,Yo,fn,un,Zo,gn,_n,Et,bn,vn,Qo,wn,xn,ea,$n,yn,ta,Tn,Bn,oa,Fn,En,kn,kt,Mn,Mt,In,jn,Pn,It,Cn,aa,zn,An,qn,ce,Ln,za,Sn,Nn,jt,On,Dn,Wn,he,Vn,Pt,Un,Rn,Ct,Hn,Jn,Xn,N,Gn,Aa,Kn,Yn,qa,Zn,Qn,ra,ei,ti,La,oi,ai,as,U,ri,zt,si,ni,At,ii,li,qt,di,ci,rs,pe,ze,Sa,Lt,hi,Na,pi,ss,me,St,mi,Nt,fi,sa,ui,gi,ns,fe,Ot,_i,Dt,bi,na,vi,wi,is,ue,Ae,Oa,Wt,xi,Da,$i,ls,Q,Vt,yi,ge,Ti,ia,Bi,Fi,Ut,Ei,ki,Mi,qe,ds,_e,Le,Wa,Rt,Ii,Va,ji,cs,O,Ht,Pi,Ua,Ci,zi,Jt,Ai,la,qi,Li,Si,ne,Xt,Ni,Ra,Oi,Di,Se,hs,be,Ne,Ha,Gt,Wi,Ja,Vi,ps,ee,Kt,Ui,Yt,Ri,Zt,Hi,Ji,Xi,R,Qt,Gi,ve,Ki,da,Yi,Zi,Xa,Qi,el,tl,Oe,ol,De,ms,we,We,Ga,eo,al,Ka,rl,fs,te,to,sl,oo,nl,ao,il,ll,dl,H,ro,cl,xe,hl,ca,pl,ml,Ya,fl,ul,gl,Ve,_l,Ue,us,$e,Re,Za,so,bl,Qa,vl,gs,D,no,wl,er,xl,$l,io,yl,lo,Tl,Bl,Fl,J,co,El,ye,kl,ha,Ml,Il,tr,jl,Pl,Cl,He,zl,Je,_s,Te,Xe,or,ho,Al,ar,ql,bs,W,po,Ll,rr,Sl,Nl,mo,Ol,fo,Dl,Wl,Vl,X,uo,Ul,Be,Rl,pa,Hl,Jl,sr,Xl,Gl,Kl,Ge,Yl,Ke,vs,Fe,Ye,nr,go,Zl,ir,Ql,ws,M,_o,ed,lr,td,od,bo,ad,ma,rd,sd,nd,vo,id,wo,ld,dd,cd,dr,hd,pd,oe,cr,xo,md,fd,hr,$o,ud,gd,pr,yo,_d,bd,mr,To,vd,wd,G,Bo,xd,Ee,$d,fr,yd,Td,ur,Bd,Fd,Ed,Ze,kd,Qe,xs,ke,et,gr,Fo,Md,_r,Id,$s,I,Eo,jd,br,Pd,Cd,ko,zd,fa,Ad,qd,Ld,Mo,Sd,Io,Nd,Od,Dd,vr,Wd,Vd,ae,wr,jo,Ud,Rd,xr,Po,Hd,Jd,$r,Co,Xd,Gd,yr,zo,Kd,Yd,A,Ao,Zd,Me,Qd,Tr,ec,tc,Br,oc,ac,rc,tt,sc,Ie,nc,Fr,ic,lc,Er,dc,cc,hc,ot,ys,je,at,kr,qo,pc,Mr,mc,Ts,j,Lo,fc,Ir,uc,gc,So,_c,ua,bc,vc,wc,No,xc,Oo,$c,yc,Tc,jr,Bc,Fc,re,Pr,Do,Ec,kc,Cr,Wo,Mc,Ic,zr,Vo,jc,Pc,Ar,Uo,Cc,zc,K,Ro,Ac,Pe,qc,qr,Lc,Sc,Lr,Nc,Oc,Dc,rt,Wc,st,Bs;return l=new Z({}),yt=new Z({}),Lt=new Z({}),St=new P({props:{name:"class transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L68"}}),Ot=new P({props:{name:"class transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"pooler_output",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.`,name:"pooler_output"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L45"}}),Wt=new Z({}),Vt=new P({props:{name:"class transformers.BeitConfig",anchor:"transformers.BeitConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
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
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/configuration_beit.py#L29"}}),qe=new wt({props:{anchor:"transformers.BeitConfig.example",$$slots:{default:[tm]},$$scope:{ctx:F}}}),Rt=new Z({}),Ht=new P({props:{name:"class transformers.BeitFeatureExtractor",anchor:"transformers.BeitFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"reduce_labels",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
background label will be replaced by 255.`,name:"reduce_labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/feature_extraction_beit.py#L36"}}),Xt=new P({props:{name:"__call__",anchor:"transformers.BeitFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"segmentation_maps",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BeitFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.BeitFeatureExtractor.__call__.segmentation_maps",description:`<strong>segmentation_maps</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding semantic segmentation maps with the pixel-wise annotations.`,name:"segmentation_maps"},{anchor:"transformers.BeitFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/feature_extraction_beit.py#L97",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>segmentation_maps</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Se=new vt({props:{warning:!0,$$slots:{default:[om]},$$scope:{ctx:F}}}),Gt=new Z({}),Kt=new P({props:{name:"class transformers.BeitModel",anchor:"transformers.BeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.BeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L629"}}),Qt=new P({props:{name:"forward",anchor:"transformers.BeitModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"
>transformers.models.beit.modeling_beit.BeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new vt({props:{$$slots:{default:[am]},$$scope:{ctx:F}}}),De=new wt({props:{anchor:"transformers.BeitModel.forward.example",$$slots:{default:[rm]},$$scope:{ctx:F}}}),eo=new Z({}),to=new P({props:{name:"class transformers.BeitForMaskedImageModeling",anchor:"transformers.BeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitModel"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L737"}}),ro=new P({props:{name:"forward",anchor:"transformers.BeitForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"},{anchor:"transformers.BeitForMaskedImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L751",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new vt({props:{$$slots:{default:[sm]},$$scope:{ctx:F}}}),Ue=new wt({props:{anchor:"transformers.BeitForMaskedImageModeling.forward.example",$$slots:{default:[nm]},$$scope:{ctx:F}}}),so=new Z({}),no=new P({props:{name:"class transformers.BeitForImageClassification",anchor:"transformers.BeitForImageClassification",parameters:[{name:"config",val:": BeitModel"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L837"}}),co=new P({props:{name:"forward",anchor:"transformers.BeitForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L850",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig"
>BeitConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new vt({props:{$$slots:{default:[im]},$$scope:{ctx:F}}}),Je=new wt({props:{anchor:"transformers.BeitForImageClassification.forward.example",$$slots:{default:[lm]},$$scope:{ctx:F}}}),ho=new Z({}),po=new P({props:{name:"class transformers.BeitForSemanticSegmentation",anchor:"transformers.BeitForSemanticSegmentation",parameters:[{name:"config",val:": BeitConfig"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L1146"}}),uo=new P({props:{name:"forward",anchor:"transformers.BeitForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BeitForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.BeitForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BeitForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BeitForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BeitForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_beit.py#L1190",returnDescription:`
<p>A <code>transformers.modeling_outputs.SemanticSegmentationModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SemanticSegmentationModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new vt({props:{$$slots:{default:[dm]},$$scope:{ctx:F}}}),Ke=new wt({props:{anchor:"transformers.BeitForSemanticSegmentation.forward.example",$$slots:{default:[cm]},$$scope:{ctx:F}}}),go=new Z({}),_o=new P({props:{name:"class transformers.FlaxBeitModel",anchor:"transformers.FlaxBeitModel",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L724"}}),Bo=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L610",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling"
>transformers.models.beit.modeling_flax_beit.FlaxBeitModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new vt({props:{$$slots:{default:[hm]},$$scope:{ctx:F}}}),Qe=new wt({props:{anchor:"transformers.FlaxBeitModel.__call__.example",$$slots:{default:[pm]},$$scope:{ctx:F}}}),Fo=new Z({}),Eo=new P({props:{name:"class transformers.FlaxBeitForMaskedImageModeling",anchor:"transformers.FlaxBeitForMaskedImageModeling",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForMaskedImageModeling.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L808"}}),Ao=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L610",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new vt({props:{$$slots:{default:[mm]},$$scope:{ctx:F}}}),ot=new wt({props:{anchor:"transformers.FlaxBeitForMaskedImageModeling.__call__.example",$$slots:{default:[fm]},$$scope:{ctx:F}}}),qo=new Z({}),Lo=new P({props:{name:"class transformers.FlaxBeitForImageClassification",anchor:"transformers.FlaxBeitForImageClassification",parameters:[{name:"config",val:": BeitConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBeitForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig">BeitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBeitForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L895"}}),Ro=new P({props:{name:"__call__",anchor:"transformers.FlaxBeitForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/beit/modeling_flax_beit.py#L610",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new vt({props:{$$slots:{default:[um]},$$scope:{ctx:F}}}),st=new wt({props:{anchor:"transformers.FlaxBeitForImageClassification.__call__.example",$$slots:{default:[gm]},$$scope:{ctx:F}}}),{c(){c=a("meta"),v=h(),u=a("h1"),f=a("a"),b=a("span"),w(l.$$.fragment),m=h(),E=a("span"),Qs=n("BEiT"),Yr=h(),de=a("h2"),Ce=a("a"),ja=a("span"),w(yt.$$.fragment),en=h(),Pa=a("span"),tn=n("Overview"),Zr=h(),V=a("p"),on=n("The BEiT model was proposed in "),Tt=a("a"),an=n("BEiT: BERT Pre-Training of Image Transformers"),rn=n(` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Bt=a("a"),sn=n("original ViT paper"),nn=n(`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Ft=a("a"),ln=n("DALL-E model"),dn=n(` given masked
patches.`),Qr=h(),Xo=a("p"),cn=n("The abstract from the paper is the following:"),es=h(),Go=a("p"),Ca=a("em"),hn=n(`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),ts=h(),Ko=a("p"),pn=n("Tips:"),os=h(),C=a("ul"),k=a("li"),mn=n(`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Yo=a("a"),fn=n("original model (ViT)"),un=n(" as well as "),Zo=a("a"),gn=n("Data-efficient Image Transformers (DeiT)"),_n=n(` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Et=a("a"),bn=n("here"),vn=n(` (you can just replace
`),Qo=a("a"),wn=n("ViTFeatureExtractor"),xn=n(" by "),ea=a("a"),$n=n("BeitFeatureExtractor"),yn=n(` and
`),ta=a("a"),Tn=n("ViTForImageClassification"),Bn=n(" by "),oa=a("a"),Fn=n("BeitForImageClassification"),En=n(")."),kn=h(),kt=a("li"),Mn=n(`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Mt=a("a"),In=n("here"),jn=n("."),Pn=h(),It=a("li"),Cn=n(`As the BEiT models expect each image to be of the same size (resolution), one can use
`),aa=a("a"),zn=n("BeitFeatureExtractor"),An=n(" to resize (or rescale) and normalize images for the model."),qn=h(),ce=a("li"),Ln=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),za=a("code"),Sn=n("microsoft/beit-base-patch16-224"),Nn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),jt=a("a"),On=n("hub"),Dn=n("."),Wn=h(),he=a("li"),Vn=n("The available checkpoints are either (1) pre-trained on "),Pt=a("a"),Un=n("ImageNet-22k"),Rn=n(` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Ct=a("a"),Hn=n("ImageNet-1k"),Jn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Xn=h(),N=a("li"),Gn=n(`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Aa=a("code"),Kn=n("use_relative_position_bias"),Yn=n(` or the
`),qa=a("code"),Zn=n("use_relative_position_bias"),Qn=n(" attribute of "),ra=a("a"),ei=n("BeitConfig"),ti=n(" to "),La=a("code"),oi=n("True"),ai=n(` in order to add
position embeddings.`),as=h(),U=a("p"),ri=n("This model was contributed by "),zt=a("a"),si=n("nielsr"),ni=n(`. The JAX/FLAX version of this model was
contributed by `),At=a("a"),ii=n("kamalkraj"),li=n(". The original code can be found "),qt=a("a"),di=n("here"),ci=n("."),rs=h(),pe=a("h2"),ze=a("a"),Sa=a("span"),w(Lt.$$.fragment),hi=h(),Na=a("span"),pi=n("BEiT specific outputs"),ss=h(),me=a("div"),w(St.$$.fragment),mi=h(),Nt=a("p"),fi=n("Class for outputs of "),sa=a("a"),ui=n("BeitModel"),gi=n("."),ns=h(),fe=a("div"),w(Ot.$$.fragment),_i=h(),Dt=a("p"),bi=n("Class for outputs of "),na=a("a"),vi=n("FlaxBeitModel"),wi=n("."),is=h(),ue=a("h2"),Ae=a("a"),Oa=a("span"),w(Wt.$$.fragment),xi=h(),Da=a("span"),$i=n("BeitConfig"),ls=h(),Q=a("div"),w(Vt.$$.fragment),yi=h(),ge=a("p"),Ti=n("This is the configuration class to store the configuration of a "),ia=a("a"),Bi=n("BeitModel"),Fi=n(`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ut=a("a"),Ei=n("microsoft/beit-base-patch16-224-in22k"),ki=n(" architecture."),Mi=h(),w(qe.$$.fragment),ds=h(),_e=a("h2"),Le=a("a"),Wa=a("span"),w(Rt.$$.fragment),Ii=h(),Va=a("span"),ji=n("BeitFeatureExtractor"),cs=h(),O=a("div"),w(Ht.$$.fragment),Pi=h(),Ua=a("p"),Ci=n("Constructs a BEiT feature extractor."),zi=h(),Jt=a("p"),Ai=n("This feature extractor inherits from "),la=a("a"),qi=n("FeatureExtractionMixin"),Li=n(` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),Si=h(),ne=a("div"),w(Xt.$$.fragment),Ni=h(),Ra=a("p"),Oi=n("Main method to prepare for the model one or several image(s)."),Di=h(),w(Se.$$.fragment),hs=h(),be=a("h2"),Ne=a("a"),Ha=a("span"),w(Gt.$$.fragment),Wi=h(),Ja=a("span"),Vi=n("BeitModel"),ps=h(),ee=a("div"),w(Kt.$$.fragment),Ui=h(),Yt=a("p"),Ri=n(`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zt=a("a"),Hi=n("torch.nn.Module"),Ji=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi=h(),R=a("div"),w(Qt.$$.fragment),Gi=h(),ve=a("p"),Ki=n("The "),da=a("a"),Yi=n("BeitModel"),Zi=n(" forward method, overrides the "),Xa=a("code"),Qi=n("__call__"),el=n(" special method."),tl=h(),w(Oe.$$.fragment),ol=h(),w(De.$$.fragment),ms=h(),we=a("h2"),We=a("a"),Ga=a("span"),w(eo.$$.fragment),al=h(),Ka=a("span"),rl=n("BeitForMaskedImageModeling"),fs=h(),te=a("div"),w(to.$$.fragment),sl=h(),oo=a("p"),nl=n(`Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens).
This model is a PyTorch `),ao=a("a"),il=n("torch.nn.Module"),ll=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=h(),H=a("div"),w(ro.$$.fragment),cl=h(),xe=a("p"),hl=n("The "),ca=a("a"),pl=n("BeitForMaskedImageModeling"),ml=n(" forward method, overrides the "),Ya=a("code"),fl=n("__call__"),ul=n(" special method."),gl=h(),w(Ve.$$.fragment),_l=h(),w(Ue.$$.fragment),us=h(),$e=a("h2"),Re=a("a"),Za=a("span"),w(so.$$.fragment),bl=h(),Qa=a("span"),vl=n("BeitForImageClassification"),gs=h(),D=a("div"),w(no.$$.fragment),wl=h(),er=a("p"),xl=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),$l=h(),io=a("p"),yl=n("This model is a PyTorch "),lo=a("a"),Tl=n("torch.nn.Module"),Bl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fl=h(),J=a("div"),w(co.$$.fragment),El=h(),ye=a("p"),kl=n("The "),ha=a("a"),Ml=n("BeitForImageClassification"),Il=n(" forward method, overrides the "),tr=a("code"),jl=n("__call__"),Pl=n(" special method."),Cl=h(),w(He.$$.fragment),zl=h(),w(Je.$$.fragment),_s=h(),Te=a("h2"),Xe=a("a"),or=a("span"),w(ho.$$.fragment),Al=h(),ar=a("span"),ql=n("BeitForSemanticSegmentation"),bs=h(),W=a("div"),w(po.$$.fragment),Ll=h(),rr=a("p"),Sl=n("Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Nl=h(),mo=a("p"),Ol=n("This model is a PyTorch "),fo=a("a"),Dl=n("torch.nn.Module"),Wl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=h(),X=a("div"),w(uo.$$.fragment),Ul=h(),Be=a("p"),Rl=n("The "),pa=a("a"),Hl=n("BeitForSemanticSegmentation"),Jl=n(" forward method, overrides the "),sr=a("code"),Xl=n("__call__"),Gl=n(" special method."),Kl=h(),w(Ge.$$.fragment),Yl=h(),w(Ke.$$.fragment),vs=h(),Fe=a("h2"),Ye=a("a"),nr=a("span"),w(go.$$.fragment),Zl=h(),ir=a("span"),Ql=n("FlaxBeitModel"),ws=h(),M=a("div"),w(_o.$$.fragment),ed=h(),lr=a("p"),td=n("The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),od=h(),bo=a("p"),ad=n("This model inherits from "),ma=a("a"),rd=n("FlaxPreTrainedModel"),sd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nd=h(),vo=a("p"),id=n("This model is also a Flax Linen "),wo=a("a"),ld=n("flax.linen.Module"),dd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cd=h(),dr=a("p"),hd=n("Finally, this model supports inherent JAX features such as:"),pd=h(),oe=a("ul"),cr=a("li"),xo=a("a"),md=n("Just-In-Time (JIT) compilation"),fd=h(),hr=a("li"),$o=a("a"),ud=n("Automatic Differentiation"),gd=h(),pr=a("li"),yo=a("a"),_d=n("Vectorization"),bd=h(),mr=a("li"),To=a("a"),vd=n("Parallelization"),wd=h(),G=a("div"),w(Bo.$$.fragment),xd=h(),Ee=a("p"),$d=n("The "),fr=a("code"),yd=n("FlaxBeitPreTrainedModel"),Td=n(" forward method, overrides the "),ur=a("code"),Bd=n("__call__"),Fd=n(" special method."),Ed=h(),w(Ze.$$.fragment),kd=h(),w(Qe.$$.fragment),xs=h(),ke=a("h2"),et=a("a"),gr=a("span"),w(Fo.$$.fragment),Md=h(),_r=a("span"),Id=n("FlaxBeitForMaskedImageModeling"),$s=h(),I=a("div"),w(Eo.$$.fragment),jd=h(),br=a("p"),Pd=n("Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),Cd=h(),ko=a("p"),zd=n("This model inherits from "),fa=a("a"),Ad=n("FlaxPreTrainedModel"),qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ld=h(),Mo=a("p"),Sd=n("This model is also a Flax Linen "),Io=a("a"),Nd=n("flax.linen.Module"),Od=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dd=h(),vr=a("p"),Wd=n("Finally, this model supports inherent JAX features such as:"),Vd=h(),ae=a("ul"),wr=a("li"),jo=a("a"),Ud=n("Just-In-Time (JIT) compilation"),Rd=h(),xr=a("li"),Po=a("a"),Hd=n("Automatic Differentiation"),Jd=h(),$r=a("li"),Co=a("a"),Xd=n("Vectorization"),Gd=h(),yr=a("li"),zo=a("a"),Kd=n("Parallelization"),Yd=h(),A=a("div"),w(Ao.$$.fragment),Zd=h(),Me=a("p"),Qd=n("The "),Tr=a("code"),ec=n("FlaxBeitPreTrainedModel"),tc=n(" forward method, overrides the "),Br=a("code"),oc=n("__call__"),ac=n(" special method."),rc=h(),w(tt.$$.fragment),sc=h(),Ie=a("p"),nc=n("bool_masked_pos ("),Fr=a("code"),ic=n("numpy.ndarray"),lc=n(" of shape "),Er=a("code"),dc=n("(batch_size, num_patches)"),cc=n(`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),hc=h(),w(ot.$$.fragment),ys=h(),je=a("h2"),at=a("a"),kr=a("span"),w(qo.$$.fragment),pc=h(),Mr=a("span"),mc=n("FlaxBeitForImageClassification"),Ts=h(),j=a("div"),w(Lo.$$.fragment),fc=h(),Ir=a("p"),uc=n(`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),gc=h(),So=a("p"),_c=n("This model inherits from "),ua=a("a"),bc=n("FlaxPreTrainedModel"),vc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wc=h(),No=a("p"),xc=n("This model is also a Flax Linen "),Oo=a("a"),$c=n("flax.linen.Module"),yc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tc=h(),jr=a("p"),Bc=n("Finally, this model supports inherent JAX features such as:"),Fc=h(),re=a("ul"),Pr=a("li"),Do=a("a"),Ec=n("Just-In-Time (JIT) compilation"),kc=h(),Cr=a("li"),Wo=a("a"),Mc=n("Automatic Differentiation"),Ic=h(),zr=a("li"),Vo=a("a"),jc=n("Vectorization"),Pc=h(),Ar=a("li"),Uo=a("a"),Cc=n("Parallelization"),zc=h(),K=a("div"),w(Ro.$$.fragment),Ac=h(),Pe=a("p"),qc=n("The "),qr=a("code"),Lc=n("FlaxBeitPreTrainedModel"),Sc=n(" forward method, overrides the "),Lr=a("code"),Nc=n("__call__"),Oc=n(" special method."),Dc=h(),w(rt.$$.fragment),Wc=h(),w(st.$$.fragment),this.h()},l(o){const g=Qp('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(o),u=r(o,"H1",{class:!0});var Ho=s(u);f=r(Ho,"A",{id:!0,class:!0,href:!0});var Sr=s(f);b=r(Sr,"SPAN",{});var Nr=s(b);x(l.$$.fragment,Nr),Nr.forEach(t),Sr.forEach(t),m=p(Ho),E=r(Ho,"SPAN",{});var Or=s(E);Qs=i(Or,"BEiT"),Or.forEach(t),Ho.forEach(t),Yr=p(o),de=r(o,"H2",{class:!0});var Jo=s(de);Ce=r(Jo,"A",{id:!0,class:!0,href:!0});var Dr=s(Ce);ja=r(Dr,"SPAN",{});var Wr=s(ja);x(yt.$$.fragment,Wr),Wr.forEach(t),Dr.forEach(t),en=p(Jo),Pa=r(Jo,"SPAN",{});var Vr=s(Pa);tn=i(Vr,"Overview"),Vr.forEach(t),Jo.forEach(t),Zr=p(o),V=r(o,"P",{});var se=s(V);on=i(se,"The BEiT model was proposed in "),Tt=r(se,"A",{href:!0,rel:!0});var Ur=s(Tt);an=i(Ur,"BEiT: BERT Pre-Training of Image Transformers"),Ur.forEach(t),rn=i(se,` by
Hangbo Bao, Li Dong and Furu Wei. Inspired by BERT, BEiT is the first paper that makes self-supervised pre-training of
Vision Transformers (ViTs) outperform supervised pre-training. Rather than pre-training the model to predict the class
of an image (as done in the `),Bt=r(se,"A",{href:!0,rel:!0});var Rr=s(Bt);sn=i(Rr,"original ViT paper"),Rr.forEach(t),nn=i(se,`), BEiT models are pre-trained to
predict visual tokens from the codebook of OpenAI\u2019s `),Ft=r(se,"A",{href:!0,rel:!0});var Hr=s(Ft);ln=i(Hr,"DALL-E model"),Hr.forEach(t),dn=i(se,` given masked
patches.`),se.forEach(t),Qr=p(o),Xo=r(o,"P",{});var Jr=s(Xo);cn=i(Jr,"The abstract from the paper is the following:"),Jr.forEach(t),es=p(o),Go=r(o,"P",{});var Xr=s(Go);Ca=r(Xr,"EM",{});var Gr=s(Ca);hn=i(Gr,`We introduce a self-supervised vision representation model BEiT, which stands for Bidirectional Encoder representation
from Image Transformers. Following BERT developed in the natural language processing area, we propose a masked image
modeling task to pretrain vision Transformers. Specifically, each image has two views in our pre-training, i.e, image
patches (such as 16x16 pixels), and visual tokens (i.e., discrete tokens). We first \u201Ctokenize\u201D the original image into
visual tokens. Then we randomly mask some image patches and fed them into the backbone Transformer. The pre-training
objective is to recover the original visual tokens based on the corrupted image patches. After pre-training BEiT, we
directly fine-tune the model parameters on downstream tasks by appending task layers upon the pretrained encoder.
Experimental results on image classification and semantic segmentation show that our model achieves competitive results
with previous pre-training methods. For example, base-size BEiT achieves 83.2% top-1 accuracy on ImageNet-1K,
significantly outperforming from-scratch DeiT training (81.8%) with the same setup. Moreover, large-size BEiT obtains
86.3% only using ImageNet-1K, even outperforming ViT-L with supervised pre-training on ImageNet-22K (85.2%).`),Gr.forEach(t),Xr.forEach(t),ts=p(o),Ko=r(o,"P",{});var Kr=s(Ko);pn=i(Kr,"Tips:"),Kr.forEach(t),os=p(o),C=r(o,"UL",{});var Y=s(C);k=r(Y,"LI",{});var z=s(k);mn=i(z,`BEiT models are regular Vision Transformers, but pre-trained in a self-supervised way rather than supervised. They
outperform both the `),Yo=r(z,"A",{href:!0});var Vc=s(Yo);fn=i(Vc,"original model (ViT)"),Vc.forEach(t),un=i(z," as well as "),Zo=r(z,"A",{href:!0});var Uc=s(Zo);gn=i(Uc,"Data-efficient Image Transformers (DeiT)"),Uc.forEach(t),_n=i(z,` when fine-tuned on ImageNet-1K and CIFAR-100. You can check out demo notebooks regarding inference as well as
fine-tuning on custom data `),Et=r(z,"A",{href:!0,rel:!0});var Rc=s(Et);bn=i(Rc,"here"),Rc.forEach(t),vn=i(z,` (you can just replace
`),Qo=r(z,"A",{href:!0});var Hc=s(Qo);wn=i(Hc,"ViTFeatureExtractor"),Hc.forEach(t),xn=i(z," by "),ea=r(z,"A",{href:!0});var Jc=s(ea);$n=i(Jc,"BeitFeatureExtractor"),Jc.forEach(t),yn=i(z,` and
`),ta=r(z,"A",{href:!0});var Xc=s(ta);Tn=i(Xc,"ViTForImageClassification"),Xc.forEach(t),Bn=i(z," by "),oa=r(z,"A",{href:!0});var Gc=s(oa);Fn=i(Gc,"BeitForImageClassification"),Gc.forEach(t),En=i(z,")."),z.forEach(t),kn=p(Y),kt=r(Y,"LI",{});var Fs=s(kt);Mn=i(Fs,`There\u2019s also a demo notebook available which showcases how to combine DALL-E\u2019s image tokenizer with BEiT for
performing masked image modeling. You can find it `),Mt=r(Fs,"A",{href:!0,rel:!0});var Kc=s(Mt);In=i(Kc,"here"),Kc.forEach(t),jn=i(Fs,"."),Fs.forEach(t),Pn=p(Y),It=r(Y,"LI",{});var Es=s(It);Cn=i(Es,`As the BEiT models expect each image to be of the same size (resolution), one can use
`),aa=r(Es,"A",{href:!0});var Yc=s(aa);zn=i(Yc,"BeitFeatureExtractor"),Yc.forEach(t),An=i(Es," to resize (or rescale) and normalize images for the model."),Es.forEach(t),qn=p(Y),ce=r(Y,"LI",{});var ga=s(ce);Ln=i(ga,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),za=r(ga,"CODE",{});var Zc=s(za);Sn=i(Zc,"microsoft/beit-base-patch16-224"),Zc.forEach(t),Nn=i(ga,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),jt=r(ga,"A",{href:!0,rel:!0});var Qc=s(jt);On=i(Qc,"hub"),Qc.forEach(t),Dn=i(ga,"."),ga.forEach(t),Wn=p(Y),he=r(Y,"LI",{});var _a=s(he);Vn=i(_a,"The available checkpoints are either (1) pre-trained on "),Pt=r(_a,"A",{href:!0,rel:!0});var eh=s(Pt);Un=i(eh,"ImageNet-22k"),eh.forEach(t),Rn=i(_a,` (a collection of
14 million images and 22k classes) only, (2) also fine-tuned on ImageNet-22k or (3) also fine-tuned on `),Ct=r(_a,"A",{href:!0,rel:!0});var th=s(Ct);Hn=i(th,"ImageNet-1k"),th.forEach(t),Jn=i(_a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),_a.forEach(t),Xn=p(Y),N=r(Y,"LI",{});var ie=s(N);Gn=i(ie,`BEiT uses relative position embeddings, inspired by the T5 model. During pre-training, the authors shared the
relative position bias among the several self-attention layers. During fine-tuning, each layer\u2019s relative position
bias is initialized with the shared relative position bias obtained after pre-training. Note that, if one wants to
pre-train a model from scratch, one needs to either set the `),Aa=r(ie,"CODE",{});var oh=s(Aa);Kn=i(oh,"use_relative_position_bias"),oh.forEach(t),Yn=i(ie,` or the
`),qa=r(ie,"CODE",{});var ah=s(qa);Zn=i(ah,"use_relative_position_bias"),ah.forEach(t),Qn=i(ie," attribute of "),ra=r(ie,"A",{href:!0});var rh=s(ra);ei=i(rh,"BeitConfig"),rh.forEach(t),ti=i(ie," to "),La=r(ie,"CODE",{});var sh=s(La);oi=i(sh,"True"),sh.forEach(t),ai=i(ie,` in order to add
position embeddings.`),ie.forEach(t),Y.forEach(t),as=p(o),U=r(o,"P",{});var nt=s(U);ri=i(nt,"This model was contributed by "),zt=r(nt,"A",{href:!0,rel:!0});var nh=s(zt);si=i(nh,"nielsr"),nh.forEach(t),ni=i(nt,`. The JAX/FLAX version of this model was
contributed by `),At=r(nt,"A",{href:!0,rel:!0});var ih=s(At);ii=i(ih,"kamalkraj"),ih.forEach(t),li=i(nt,". The original code can be found "),qt=r(nt,"A",{href:!0,rel:!0});var lh=s(qt);di=i(lh,"here"),lh.forEach(t),ci=i(nt,"."),nt.forEach(t),rs=p(o),pe=r(o,"H2",{class:!0});var ks=s(pe);ze=r(ks,"A",{id:!0,class:!0,href:!0});var dh=s(ze);Sa=r(dh,"SPAN",{});var ch=s(Sa);x(Lt.$$.fragment,ch),ch.forEach(t),dh.forEach(t),hi=p(ks),Na=r(ks,"SPAN",{});var hh=s(Na);pi=i(hh,"BEiT specific outputs"),hh.forEach(t),ks.forEach(t),ss=p(o),me=r(o,"DIV",{class:!0});var Ms=s(me);x(St.$$.fragment,Ms),mi=p(Ms),Nt=r(Ms,"P",{});var Is=s(Nt);fi=i(Is,"Class for outputs of "),sa=r(Is,"A",{href:!0});var ph=s(sa);ui=i(ph,"BeitModel"),ph.forEach(t),gi=i(Is,"."),Is.forEach(t),Ms.forEach(t),ns=p(o),fe=r(o,"DIV",{class:!0});var js=s(fe);x(Ot.$$.fragment,js),_i=p(js),Dt=r(js,"P",{});var Ps=s(Dt);bi=i(Ps,"Class for outputs of "),na=r(Ps,"A",{href:!0});var mh=s(na);vi=i(mh,"FlaxBeitModel"),mh.forEach(t),wi=i(Ps,"."),Ps.forEach(t),js.forEach(t),is=p(o),ue=r(o,"H2",{class:!0});var Cs=s(ue);Ae=r(Cs,"A",{id:!0,class:!0,href:!0});var fh=s(Ae);Oa=r(fh,"SPAN",{});var uh=s(Oa);x(Wt.$$.fragment,uh),uh.forEach(t),fh.forEach(t),xi=p(Cs),Da=r(Cs,"SPAN",{});var gh=s(Da);$i=i(gh,"BeitConfig"),gh.forEach(t),Cs.forEach(t),ls=p(o),Q=r(o,"DIV",{class:!0});var ba=s(Q);x(Vt.$$.fragment,ba),yi=p(ba),ge=r(ba,"P",{});var va=s(ge);Ti=i(va,"This is the configuration class to store the configuration of a "),ia=r(va,"A",{href:!0});var _h=s(ia);Bi=i(_h,"BeitModel"),_h.forEach(t),Fi=i(va,`. It is used to instantiate an BEiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BEiT
`),Ut=r(va,"A",{href:!0,rel:!0});var bh=s(Ut);Ei=i(bh,"microsoft/beit-base-patch16-224-in22k"),bh.forEach(t),ki=i(va," architecture."),va.forEach(t),Mi=p(ba),x(qe.$$.fragment,ba),ba.forEach(t),ds=p(o),_e=r(o,"H2",{class:!0});var zs=s(_e);Le=r(zs,"A",{id:!0,class:!0,href:!0});var vh=s(Le);Wa=r(vh,"SPAN",{});var wh=s(Wa);x(Rt.$$.fragment,wh),wh.forEach(t),vh.forEach(t),Ii=p(zs),Va=r(zs,"SPAN",{});var xh=s(Va);ji=i(xh,"BeitFeatureExtractor"),xh.forEach(t),zs.forEach(t),cs=p(o),O=r(o,"DIV",{class:!0});var it=s(O);x(Ht.$$.fragment,it),Pi=p(it),Ua=r(it,"P",{});var $h=s(Ua);Ci=i($h,"Constructs a BEiT feature extractor."),$h.forEach(t),zi=p(it),Jt=r(it,"P",{});var As=s(Jt);Ai=i(As,"This feature extractor inherits from "),la=r(As,"A",{href:!0});var yh=s(la);qi=i(yh,"FeatureExtractionMixin"),yh.forEach(t),Li=i(As,` which contains most of
the main methods. Users should refer to this superclass for more information regarding those methods.`),As.forEach(t),Si=p(it),ne=r(it,"DIV",{class:!0});var wa=s(ne);x(Xt.$$.fragment,wa),Ni=p(wa),Ra=r(wa,"P",{});var Th=s(Ra);Oi=i(Th,"Main method to prepare for the model one or several image(s)."),Th.forEach(t),Di=p(wa),x(Se.$$.fragment,wa),wa.forEach(t),it.forEach(t),hs=p(o),be=r(o,"H2",{class:!0});var qs=s(be);Ne=r(qs,"A",{id:!0,class:!0,href:!0});var Bh=s(Ne);Ha=r(Bh,"SPAN",{});var Fh=s(Ha);x(Gt.$$.fragment,Fh),Fh.forEach(t),Bh.forEach(t),Wi=p(qs),Ja=r(qs,"SPAN",{});var Eh=s(Ja);Vi=i(Eh,"BeitModel"),Eh.forEach(t),qs.forEach(t),ps=p(o),ee=r(o,"DIV",{class:!0});var xa=s(ee);x(Kt.$$.fragment,xa),Ui=p(xa),Yt=r(xa,"P",{});var Ls=s(Yt);Ri=i(Ls,`The bare Beit Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zt=r(Ls,"A",{href:!0,rel:!0});var kh=s(Zt);Hi=i(kh,"torch.nn.Module"),kh.forEach(t),Ji=i(Ls,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(t),Xi=p(xa),R=r(xa,"DIV",{class:!0});var lt=s(R);x(Qt.$$.fragment,lt),Gi=p(lt),ve=r(lt,"P",{});var $a=s(ve);Ki=i($a,"The "),da=r($a,"A",{href:!0});var Mh=s(da);Yi=i(Mh,"BeitModel"),Mh.forEach(t),Zi=i($a," forward method, overrides the "),Xa=r($a,"CODE",{});var Ih=s(Xa);Qi=i(Ih,"__call__"),Ih.forEach(t),el=i($a," special method."),$a.forEach(t),tl=p(lt),x(Oe.$$.fragment,lt),ol=p(lt),x(De.$$.fragment,lt),lt.forEach(t),xa.forEach(t),ms=p(o),we=r(o,"H2",{class:!0});var Ss=s(we);We=r(Ss,"A",{id:!0,class:!0,href:!0});var jh=s(We);Ga=r(jh,"SPAN",{});var Ph=s(Ga);x(eo.$$.fragment,Ph),Ph.forEach(t),jh.forEach(t),al=p(Ss),Ka=r(Ss,"SPAN",{});var Ch=s(Ka);rl=i(Ch,"BeitForMaskedImageModeling"),Ch.forEach(t),Ss.forEach(t),fs=p(o),te=r(o,"DIV",{class:!0});var ya=s(te);x(to.$$.fragment,ya),sl=p(ya),oo=r(ya,"P",{});var Ns=s(oo);nl=i(Ns,`Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens).
This model is a PyTorch `),ao=r(Ns,"A",{href:!0,rel:!0});var zh=s(ao);il=i(zh,"torch.nn.Module"),zh.forEach(t),ll=i(Ns,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ns.forEach(t),dl=p(ya),H=r(ya,"DIV",{class:!0});var dt=s(H);x(ro.$$.fragment,dt),cl=p(dt),xe=r(dt,"P",{});var Ta=s(xe);hl=i(Ta,"The "),ca=r(Ta,"A",{href:!0});var Ah=s(ca);pl=i(Ah,"BeitForMaskedImageModeling"),Ah.forEach(t),ml=i(Ta," forward method, overrides the "),Ya=r(Ta,"CODE",{});var qh=s(Ya);fl=i(qh,"__call__"),qh.forEach(t),ul=i(Ta," special method."),Ta.forEach(t),gl=p(dt),x(Ve.$$.fragment,dt),_l=p(dt),x(Ue.$$.fragment,dt),dt.forEach(t),ya.forEach(t),us=p(o),$e=r(o,"H2",{class:!0});var Os=s($e);Re=r(Os,"A",{id:!0,class:!0,href:!0});var Lh=s(Re);Za=r(Lh,"SPAN",{});var Sh=s(Za);x(so.$$.fragment,Sh),Sh.forEach(t),Lh.forEach(t),bl=p(Os),Qa=r(Os,"SPAN",{});var Nh=s(Qa);vl=i(Nh,"BeitForImageClassification"),Nh.forEach(t),Os.forEach(t),gs=p(o),D=r(o,"DIV",{class:!0});var ct=s(D);x(no.$$.fragment,ct),wl=p(ct),er=r(ct,"P",{});var Oh=s(er);xl=i(Oh,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),Oh.forEach(t),$l=p(ct),io=r(ct,"P",{});var Ds=s(io);yl=i(Ds,"This model is a PyTorch "),lo=r(Ds,"A",{href:!0,rel:!0});var Dh=s(lo);Tl=i(Dh,"torch.nn.Module"),Dh.forEach(t),Bl=i(Ds,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds.forEach(t),Fl=p(ct),J=r(ct,"DIV",{class:!0});var ht=s(J);x(co.$$.fragment,ht),El=p(ht),ye=r(ht,"P",{});var Ba=s(ye);kl=i(Ba,"The "),ha=r(Ba,"A",{href:!0});var Wh=s(ha);Ml=i(Wh,"BeitForImageClassification"),Wh.forEach(t),Il=i(Ba," forward method, overrides the "),tr=r(Ba,"CODE",{});var Vh=s(tr);jl=i(Vh,"__call__"),Vh.forEach(t),Pl=i(Ba," special method."),Ba.forEach(t),Cl=p(ht),x(He.$$.fragment,ht),zl=p(ht),x(Je.$$.fragment,ht),ht.forEach(t),ct.forEach(t),_s=p(o),Te=r(o,"H2",{class:!0});var Ws=s(Te);Xe=r(Ws,"A",{id:!0,class:!0,href:!0});var Uh=s(Xe);or=r(Uh,"SPAN",{});var Rh=s(or);x(ho.$$.fragment,Rh),Rh.forEach(t),Uh.forEach(t),Al=p(Ws),ar=r(Ws,"SPAN",{});var Hh=s(ar);ql=i(Hh,"BeitForSemanticSegmentation"),Hh.forEach(t),Ws.forEach(t),bs=p(o),W=r(o,"DIV",{class:!0});var pt=s(W);x(po.$$.fragment,pt),Ll=p(pt),rr=r(pt,"P",{});var Jh=s(rr);Sl=i(Jh,"Beit Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Jh.forEach(t),Nl=p(pt),mo=r(pt,"P",{});var Vs=s(mo);Ol=i(Vs,"This model is a PyTorch "),fo=r(Vs,"A",{href:!0,rel:!0});var Xh=s(fo);Dl=i(Xh,"torch.nn.Module"),Xh.forEach(t),Wl=i(Vs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vs.forEach(t),Vl=p(pt),X=r(pt,"DIV",{class:!0});var mt=s(X);x(uo.$$.fragment,mt),Ul=p(mt),Be=r(mt,"P",{});var Fa=s(Be);Rl=i(Fa,"The "),pa=r(Fa,"A",{href:!0});var Gh=s(pa);Hl=i(Gh,"BeitForSemanticSegmentation"),Gh.forEach(t),Jl=i(Fa," forward method, overrides the "),sr=r(Fa,"CODE",{});var Kh=s(sr);Xl=i(Kh,"__call__"),Kh.forEach(t),Gl=i(Fa," special method."),Fa.forEach(t),Kl=p(mt),x(Ge.$$.fragment,mt),Yl=p(mt),x(Ke.$$.fragment,mt),mt.forEach(t),pt.forEach(t),vs=p(o),Fe=r(o,"H2",{class:!0});var Us=s(Fe);Ye=r(Us,"A",{id:!0,class:!0,href:!0});var Yh=s(Ye);nr=r(Yh,"SPAN",{});var Zh=s(nr);x(go.$$.fragment,Zh),Zh.forEach(t),Yh.forEach(t),Zl=p(Us),ir=r(Us,"SPAN",{});var Qh=s(ir);Ql=i(Qh,"FlaxBeitModel"),Qh.forEach(t),Us.forEach(t),ws=p(o),M=r(o,"DIV",{class:!0});var q=s(M);x(_o.$$.fragment,q),ed=p(q),lr=r(q,"P",{});var ep=s(lr);td=i(ep,"The bare Beit Model transformer outputting raw hidden-states without any specific head on top."),ep.forEach(t),od=p(q),bo=r(q,"P",{});var Rs=s(bo);ad=i(Rs,"This model inherits from "),ma=r(Rs,"A",{href:!0});var tp=s(ma);rd=i(tp,"FlaxPreTrainedModel"),tp.forEach(t),sd=i(Rs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rs.forEach(t),nd=p(q),vo=r(q,"P",{});var Hs=s(vo);id=i(Hs,"This model is also a Flax Linen "),wo=r(Hs,"A",{href:!0,rel:!0});var op=s(wo);ld=i(op,"flax.linen.Module"),op.forEach(t),dd=i(Hs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hs.forEach(t),cd=p(q),dr=r(q,"P",{});var ap=s(dr);hd=i(ap,"Finally, this model supports inherent JAX features such as:"),ap.forEach(t),pd=p(q),oe=r(q,"UL",{});var ft=s(oe);cr=r(ft,"LI",{});var rp=s(cr);xo=r(rp,"A",{href:!0,rel:!0});var sp=s(xo);md=i(sp,"Just-In-Time (JIT) compilation"),sp.forEach(t),rp.forEach(t),fd=p(ft),hr=r(ft,"LI",{});var np=s(hr);$o=r(np,"A",{href:!0,rel:!0});var ip=s($o);ud=i(ip,"Automatic Differentiation"),ip.forEach(t),np.forEach(t),gd=p(ft),pr=r(ft,"LI",{});var lp=s(pr);yo=r(lp,"A",{href:!0,rel:!0});var dp=s(yo);_d=i(dp,"Vectorization"),dp.forEach(t),lp.forEach(t),bd=p(ft),mr=r(ft,"LI",{});var cp=s(mr);To=r(cp,"A",{href:!0,rel:!0});var hp=s(To);vd=i(hp,"Parallelization"),hp.forEach(t),cp.forEach(t),ft.forEach(t),wd=p(q),G=r(q,"DIV",{class:!0});var ut=s(G);x(Bo.$$.fragment,ut),xd=p(ut),Ee=r(ut,"P",{});var Ea=s(Ee);$d=i(Ea,"The "),fr=r(Ea,"CODE",{});var pp=s(fr);yd=i(pp,"FlaxBeitPreTrainedModel"),pp.forEach(t),Td=i(Ea," forward method, overrides the "),ur=r(Ea,"CODE",{});var mp=s(ur);Bd=i(mp,"__call__"),mp.forEach(t),Fd=i(Ea," special method."),Ea.forEach(t),Ed=p(ut),x(Ze.$$.fragment,ut),kd=p(ut),x(Qe.$$.fragment,ut),ut.forEach(t),q.forEach(t),xs=p(o),ke=r(o,"H2",{class:!0});var Js=s(ke);et=r(Js,"A",{id:!0,class:!0,href:!0});var fp=s(et);gr=r(fp,"SPAN",{});var up=s(gr);x(Fo.$$.fragment,up),up.forEach(t),fp.forEach(t),Md=p(Js),_r=r(Js,"SPAN",{});var gp=s(_r);Id=i(gp,"FlaxBeitForMaskedImageModeling"),gp.forEach(t),Js.forEach(t),$s=p(o),I=r(o,"DIV",{class:!0});var L=s(I);x(Eo.$$.fragment,L),jd=p(L),br=r(L,"P",{});var _p=s(br);Pd=i(_p,"Beit Model transformer with a \u2018language\u2019 modeling head on top (to predict visual tokens)."),_p.forEach(t),Cd=p(L),ko=r(L,"P",{});var Xs=s(ko);zd=i(Xs,"This model inherits from "),fa=r(Xs,"A",{href:!0});var bp=s(fa);Ad=i(bp,"FlaxPreTrainedModel"),bp.forEach(t),qd=i(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xs.forEach(t),Ld=p(L),Mo=r(L,"P",{});var Gs=s(Mo);Sd=i(Gs,"This model is also a Flax Linen "),Io=r(Gs,"A",{href:!0,rel:!0});var vp=s(Io);Nd=i(vp,"flax.linen.Module"),vp.forEach(t),Od=i(Gs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gs.forEach(t),Dd=p(L),vr=r(L,"P",{});var wp=s(vr);Wd=i(wp,"Finally, this model supports inherent JAX features such as:"),wp.forEach(t),Vd=p(L),ae=r(L,"UL",{});var gt=s(ae);wr=r(gt,"LI",{});var xp=s(wr);jo=r(xp,"A",{href:!0,rel:!0});var $p=s(jo);Ud=i($p,"Just-In-Time (JIT) compilation"),$p.forEach(t),xp.forEach(t),Rd=p(gt),xr=r(gt,"LI",{});var yp=s(xr);Po=r(yp,"A",{href:!0,rel:!0});var Tp=s(Po);Hd=i(Tp,"Automatic Differentiation"),Tp.forEach(t),yp.forEach(t),Jd=p(gt),$r=r(gt,"LI",{});var Bp=s($r);Co=r(Bp,"A",{href:!0,rel:!0});var Fp=s(Co);Xd=i(Fp,"Vectorization"),Fp.forEach(t),Bp.forEach(t),Gd=p(gt),yr=r(gt,"LI",{});var Ep=s(yr);zo=r(Ep,"A",{href:!0,rel:!0});var kp=s(zo);Kd=i(kp,"Parallelization"),kp.forEach(t),Ep.forEach(t),gt.forEach(t),Yd=p(L),A=r(L,"DIV",{class:!0});var le=s(A);x(Ao.$$.fragment,le),Zd=p(le),Me=r(le,"P",{});var ka=s(Me);Qd=i(ka,"The "),Tr=r(ka,"CODE",{});var Mp=s(Tr);ec=i(Mp,"FlaxBeitPreTrainedModel"),Mp.forEach(t),tc=i(ka," forward method, overrides the "),Br=r(ka,"CODE",{});var Ip=s(Br);oc=i(Ip,"__call__"),Ip.forEach(t),ac=i(ka," special method."),ka.forEach(t),rc=p(le),x(tt.$$.fragment,le),sc=p(le),Ie=r(le,"P",{});var Ma=s(Ie);nc=i(Ma,"bool_masked_pos ("),Fr=r(Ma,"CODE",{});var jp=s(Fr);ic=i(jp,"numpy.ndarray"),jp.forEach(t),lc=i(Ma," of shape "),Er=r(Ma,"CODE",{});var Pp=s(Er);dc=i(Pp,"(batch_size, num_patches)"),Pp.forEach(t),cc=i(Ma,`):
Boolean masked positions. Indicates which patches are masked (1) and which aren\u2019t (0).`),Ma.forEach(t),hc=p(le),x(ot.$$.fragment,le),le.forEach(t),L.forEach(t),ys=p(o),je=r(o,"H2",{class:!0});var Ks=s(je);at=r(Ks,"A",{id:!0,class:!0,href:!0});var Cp=s(at);kr=r(Cp,"SPAN",{});var zp=s(kr);x(qo.$$.fragment,zp),zp.forEach(t),Cp.forEach(t),pc=p(Ks),Mr=r(Ks,"SPAN",{});var Ap=s(Mr);mc=i(Ap,"FlaxBeitForImageClassification"),Ap.forEach(t),Ks.forEach(t),Ts=p(o),j=r(o,"DIV",{class:!0});var S=s(j);x(Lo.$$.fragment,S),fc=p(S),Ir=r(S,"P",{});var qp=s(Ir);uc=i(qp,`Beit Model transformer with an image classification head on top (a linear layer on top of the average of the final
hidden states of the patch tokens) e.g. for ImageNet.`),qp.forEach(t),gc=p(S),So=r(S,"P",{});var Ys=s(So);_c=i(Ys,"This model inherits from "),ua=r(Ys,"A",{href:!0});var Lp=s(ua);bc=i(Lp,"FlaxPreTrainedModel"),Lp.forEach(t),vc=i(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ys.forEach(t),wc=p(S),No=r(S,"P",{});var Zs=s(No);xc=i(Zs,"This model is also a Flax Linen "),Oo=r(Zs,"A",{href:!0,rel:!0});var Sp=s(Oo);$c=i(Sp,"flax.linen.Module"),Sp.forEach(t),yc=i(Zs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zs.forEach(t),Tc=p(S),jr=r(S,"P",{});var Np=s(jr);Bc=i(Np,"Finally, this model supports inherent JAX features such as:"),Np.forEach(t),Fc=p(S),re=r(S,"UL",{});var _t=s(re);Pr=r(_t,"LI",{});var Op=s(Pr);Do=r(Op,"A",{href:!0,rel:!0});var Dp=s(Do);Ec=i(Dp,"Just-In-Time (JIT) compilation"),Dp.forEach(t),Op.forEach(t),kc=p(_t),Cr=r(_t,"LI",{});var Wp=s(Cr);Wo=r(Wp,"A",{href:!0,rel:!0});var Vp=s(Wo);Mc=i(Vp,"Automatic Differentiation"),Vp.forEach(t),Wp.forEach(t),Ic=p(_t),zr=r(_t,"LI",{});var Up=s(zr);Vo=r(Up,"A",{href:!0,rel:!0});var Rp=s(Vo);jc=i(Rp,"Vectorization"),Rp.forEach(t),Up.forEach(t),Pc=p(_t),Ar=r(_t,"LI",{});var Hp=s(Ar);Uo=r(Hp,"A",{href:!0,rel:!0});var Jp=s(Uo);Cc=i(Jp,"Parallelization"),Jp.forEach(t),Hp.forEach(t),_t.forEach(t),zc=p(S),K=r(S,"DIV",{class:!0});var bt=s(K);x(Ro.$$.fragment,bt),Ac=p(bt),Pe=r(bt,"P",{});var Ia=s(Pe);qc=i(Ia,"The "),qr=r(Ia,"CODE",{});var Xp=s(qr);Lc=i(Xp,"FlaxBeitPreTrainedModel"),Xp.forEach(t),Sc=i(Ia," forward method, overrides the "),Lr=r(Ia,"CODE",{});var Gp=s(Lr);Nc=i(Gp,"__call__"),Gp.forEach(t),Oc=i(Ia," special method."),Ia.forEach(t),Dc=p(bt),x(rt.$$.fragment,bt),Wc=p(bt),x(st.$$.fragment,bt),bt.forEach(t),S.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(bm)),d(f,"id","beit"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#beit"),d(u,"class","relative group"),d(Ce,"id","overview"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#overview"),d(de,"class","relative group"),d(Tt,"href","https://arxiv.org/abs/2106.08254"),d(Tt,"rel","nofollow"),d(Bt,"href","https://arxiv.org/abs/2010.11929"),d(Bt,"rel","nofollow"),d(Ft,"href","https://arxiv.org/abs/2102.12092"),d(Ft,"rel","nofollow"),d(Yo,"href","vit"),d(Zo,"href","deit"),d(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),d(Et,"rel","nofollow"),d(Qo,"href","/docs/transformers/pr_highlight/en/model_doc/vit#transformers.ViTFeatureExtractor"),d(ea,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(ta,"href","/docs/transformers/pr_highlight/en/model_doc/vit#transformers.ViTForImageClassification"),d(oa,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitForImageClassification"),d(Mt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/BEiT"),d(Mt,"rel","nofollow"),d(aa,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitFeatureExtractor"),d(jt,"href","https://huggingface.co/models?search=microsoft/beit"),d(jt,"rel","nofollow"),d(Pt,"href","http://www.image-net.org/"),d(Pt,"rel","nofollow"),d(Ct,"href","http://www.image-net.org/challenges/LSVRC/2012/"),d(Ct,"rel","nofollow"),d(ra,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitConfig"),d(zt,"href","https://huggingface.co/nielsr"),d(zt,"rel","nofollow"),d(At,"href","https://huggingface.co/kamalkraj"),d(At,"rel","nofollow"),d(qt,"href","https://github.com/microsoft/unilm/tree/master/beit"),d(qt,"rel","nofollow"),d(ze,"id","transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.models.beit.modeling_beit.BeitModelOutputWithPooling"),d(pe,"class","relative group"),d(sa,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitModel"),d(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(na,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.FlaxBeitModel"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.BeitConfig"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.BeitConfig"),d(ue,"class","relative group"),d(ia,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitModel"),d(Ut,"href","https://huggingface.co/microsoft/beit-base-patch16-224-in22k"),d(Ut,"rel","nofollow"),d(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"id","transformers.BeitFeatureExtractor"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.BeitFeatureExtractor"),d(_e,"class","relative group"),d(la,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.BeitModel"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.BeitModel"),d(be,"class","relative group"),d(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Zt,"rel","nofollow"),d(da,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitModel"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.BeitForMaskedImageModeling"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.BeitForMaskedImageModeling"),d(we,"class","relative group"),d(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ao,"rel","nofollow"),d(ca,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitForMaskedImageModeling"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.BeitForImageClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.BeitForImageClassification"),d($e,"class","relative group"),d(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lo,"rel","nofollow"),d(ha,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitForImageClassification"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.BeitForSemanticSegmentation"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.BeitForSemanticSegmentation"),d(Te,"class","relative group"),d(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(fo,"rel","nofollow"),d(pa,"href","/docs/transformers/pr_highlight/en/model_doc/beit#transformers.BeitForSemanticSegmentation"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ye,"id","transformers.FlaxBeitModel"),d(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ye,"href","#transformers.FlaxBeitModel"),d(Fe,"class","relative group"),d(ma,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(wo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(wo,"rel","nofollow"),d(xo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(xo,"rel","nofollow"),d($o,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d($o,"rel","nofollow"),d(yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(yo,"rel","nofollow"),d(To,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(To,"rel","nofollow"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(et,"id","transformers.FlaxBeitForMaskedImageModeling"),d(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(et,"href","#transformers.FlaxBeitForMaskedImageModeling"),d(ke,"class","relative group"),d(fa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Io,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Io,"rel","nofollow"),d(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(jo,"rel","nofollow"),d(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Po,"rel","nofollow"),d(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Co,"rel","nofollow"),d(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(zo,"rel","nofollow"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(at,"id","transformers.FlaxBeitForImageClassification"),d(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(at,"href","#transformers.FlaxBeitForImageClassification"),d(je,"class","relative group"),d(ua,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),d(Oo,"rel","nofollow"),d(Do,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Do,"rel","nofollow"),d(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wo,"rel","nofollow"),d(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Vo,"rel","nofollow"),d(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Uo,"rel","nofollow"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,u,g),e(u,f),e(f,b),$(l,b,null),e(u,m),e(u,E),e(E,Qs),_(o,Yr,g),_(o,de,g),e(de,Ce),e(Ce,ja),$(yt,ja,null),e(de,en),e(de,Pa),e(Pa,tn),_(o,Zr,g),_(o,V,g),e(V,on),e(V,Tt),e(Tt,an),e(V,rn),e(V,Bt),e(Bt,sn),e(V,nn),e(V,Ft),e(Ft,ln),e(V,dn),_(o,Qr,g),_(o,Xo,g),e(Xo,cn),_(o,es,g),_(o,Go,g),e(Go,Ca),e(Ca,hn),_(o,ts,g),_(o,Ko,g),e(Ko,pn),_(o,os,g),_(o,C,g),e(C,k),e(k,mn),e(k,Yo),e(Yo,fn),e(k,un),e(k,Zo),e(Zo,gn),e(k,_n),e(k,Et),e(Et,bn),e(k,vn),e(k,Qo),e(Qo,wn),e(k,xn),e(k,ea),e(ea,$n),e(k,yn),e(k,ta),e(ta,Tn),e(k,Bn),e(k,oa),e(oa,Fn),e(k,En),e(C,kn),e(C,kt),e(kt,Mn),e(kt,Mt),e(Mt,In),e(kt,jn),e(C,Pn),e(C,It),e(It,Cn),e(It,aa),e(aa,zn),e(It,An),e(C,qn),e(C,ce),e(ce,Ln),e(ce,za),e(za,Sn),e(ce,Nn),e(ce,jt),e(jt,On),e(ce,Dn),e(C,Wn),e(C,he),e(he,Vn),e(he,Pt),e(Pt,Un),e(he,Rn),e(he,Ct),e(Ct,Hn),e(he,Jn),e(C,Xn),e(C,N),e(N,Gn),e(N,Aa),e(Aa,Kn),e(N,Yn),e(N,qa),e(qa,Zn),e(N,Qn),e(N,ra),e(ra,ei),e(N,ti),e(N,La),e(La,oi),e(N,ai),_(o,as,g),_(o,U,g),e(U,ri),e(U,zt),e(zt,si),e(U,ni),e(U,At),e(At,ii),e(U,li),e(U,qt),e(qt,di),e(U,ci),_(o,rs,g),_(o,pe,g),e(pe,ze),e(ze,Sa),$(Lt,Sa,null),e(pe,hi),e(pe,Na),e(Na,pi),_(o,ss,g),_(o,me,g),$(St,me,null),e(me,mi),e(me,Nt),e(Nt,fi),e(Nt,sa),e(sa,ui),e(Nt,gi),_(o,ns,g),_(o,fe,g),$(Ot,fe,null),e(fe,_i),e(fe,Dt),e(Dt,bi),e(Dt,na),e(na,vi),e(Dt,wi),_(o,is,g),_(o,ue,g),e(ue,Ae),e(Ae,Oa),$(Wt,Oa,null),e(ue,xi),e(ue,Da),e(Da,$i),_(o,ls,g),_(o,Q,g),$(Vt,Q,null),e(Q,yi),e(Q,ge),e(ge,Ti),e(ge,ia),e(ia,Bi),e(ge,Fi),e(ge,Ut),e(Ut,Ei),e(ge,ki),e(Q,Mi),$(qe,Q,null),_(o,ds,g),_(o,_e,g),e(_e,Le),e(Le,Wa),$(Rt,Wa,null),e(_e,Ii),e(_e,Va),e(Va,ji),_(o,cs,g),_(o,O,g),$(Ht,O,null),e(O,Pi),e(O,Ua),e(Ua,Ci),e(O,zi),e(O,Jt),e(Jt,Ai),e(Jt,la),e(la,qi),e(Jt,Li),e(O,Si),e(O,ne),$(Xt,ne,null),e(ne,Ni),e(ne,Ra),e(Ra,Oi),e(ne,Di),$(Se,ne,null),_(o,hs,g),_(o,be,g),e(be,Ne),e(Ne,Ha),$(Gt,Ha,null),e(be,Wi),e(be,Ja),e(Ja,Vi),_(o,ps,g),_(o,ee,g),$(Kt,ee,null),e(ee,Ui),e(ee,Yt),e(Yt,Ri),e(Yt,Zt),e(Zt,Hi),e(Yt,Ji),e(ee,Xi),e(ee,R),$(Qt,R,null),e(R,Gi),e(R,ve),e(ve,Ki),e(ve,da),e(da,Yi),e(ve,Zi),e(ve,Xa),e(Xa,Qi),e(ve,el),e(R,tl),$(Oe,R,null),e(R,ol),$(De,R,null),_(o,ms,g),_(o,we,g),e(we,We),e(We,Ga),$(eo,Ga,null),e(we,al),e(we,Ka),e(Ka,rl),_(o,fs,g),_(o,te,g),$(to,te,null),e(te,sl),e(te,oo),e(oo,nl),e(oo,ao),e(ao,il),e(oo,ll),e(te,dl),e(te,H),$(ro,H,null),e(H,cl),e(H,xe),e(xe,hl),e(xe,ca),e(ca,pl),e(xe,ml),e(xe,Ya),e(Ya,fl),e(xe,ul),e(H,gl),$(Ve,H,null),e(H,_l),$(Ue,H,null),_(o,us,g),_(o,$e,g),e($e,Re),e(Re,Za),$(so,Za,null),e($e,bl),e($e,Qa),e(Qa,vl),_(o,gs,g),_(o,D,g),$(no,D,null),e(D,wl),e(D,er),e(er,xl),e(D,$l),e(D,io),e(io,yl),e(io,lo),e(lo,Tl),e(io,Bl),e(D,Fl),e(D,J),$(co,J,null),e(J,El),e(J,ye),e(ye,kl),e(ye,ha),e(ha,Ml),e(ye,Il),e(ye,tr),e(tr,jl),e(ye,Pl),e(J,Cl),$(He,J,null),e(J,zl),$(Je,J,null),_(o,_s,g),_(o,Te,g),e(Te,Xe),e(Xe,or),$(ho,or,null),e(Te,Al),e(Te,ar),e(ar,ql),_(o,bs,g),_(o,W,g),$(po,W,null),e(W,Ll),e(W,rr),e(rr,Sl),e(W,Nl),e(W,mo),e(mo,Ol),e(mo,fo),e(fo,Dl),e(mo,Wl),e(W,Vl),e(W,X),$(uo,X,null),e(X,Ul),e(X,Be),e(Be,Rl),e(Be,pa),e(pa,Hl),e(Be,Jl),e(Be,sr),e(sr,Xl),e(Be,Gl),e(X,Kl),$(Ge,X,null),e(X,Yl),$(Ke,X,null),_(o,vs,g),_(o,Fe,g),e(Fe,Ye),e(Ye,nr),$(go,nr,null),e(Fe,Zl),e(Fe,ir),e(ir,Ql),_(o,ws,g),_(o,M,g),$(_o,M,null),e(M,ed),e(M,lr),e(lr,td),e(M,od),e(M,bo),e(bo,ad),e(bo,ma),e(ma,rd),e(bo,sd),e(M,nd),e(M,vo),e(vo,id),e(vo,wo),e(wo,ld),e(vo,dd),e(M,cd),e(M,dr),e(dr,hd),e(M,pd),e(M,oe),e(oe,cr),e(cr,xo),e(xo,md),e(oe,fd),e(oe,hr),e(hr,$o),e($o,ud),e(oe,gd),e(oe,pr),e(pr,yo),e(yo,_d),e(oe,bd),e(oe,mr),e(mr,To),e(To,vd),e(M,wd),e(M,G),$(Bo,G,null),e(G,xd),e(G,Ee),e(Ee,$d),e(Ee,fr),e(fr,yd),e(Ee,Td),e(Ee,ur),e(ur,Bd),e(Ee,Fd),e(G,Ed),$(Ze,G,null),e(G,kd),$(Qe,G,null),_(o,xs,g),_(o,ke,g),e(ke,et),e(et,gr),$(Fo,gr,null),e(ke,Md),e(ke,_r),e(_r,Id),_(o,$s,g),_(o,I,g),$(Eo,I,null),e(I,jd),e(I,br),e(br,Pd),e(I,Cd),e(I,ko),e(ko,zd),e(ko,fa),e(fa,Ad),e(ko,qd),e(I,Ld),e(I,Mo),e(Mo,Sd),e(Mo,Io),e(Io,Nd),e(Mo,Od),e(I,Dd),e(I,vr),e(vr,Wd),e(I,Vd),e(I,ae),e(ae,wr),e(wr,jo),e(jo,Ud),e(ae,Rd),e(ae,xr),e(xr,Po),e(Po,Hd),e(ae,Jd),e(ae,$r),e($r,Co),e(Co,Xd),e(ae,Gd),e(ae,yr),e(yr,zo),e(zo,Kd),e(I,Yd),e(I,A),$(Ao,A,null),e(A,Zd),e(A,Me),e(Me,Qd),e(Me,Tr),e(Tr,ec),e(Me,tc),e(Me,Br),e(Br,oc),e(Me,ac),e(A,rc),$(tt,A,null),e(A,sc),e(A,Ie),e(Ie,nc),e(Ie,Fr),e(Fr,ic),e(Ie,lc),e(Ie,Er),e(Er,dc),e(Ie,cc),e(A,hc),$(ot,A,null),_(o,ys,g),_(o,je,g),e(je,at),e(at,kr),$(qo,kr,null),e(je,pc),e(je,Mr),e(Mr,mc),_(o,Ts,g),_(o,j,g),$(Lo,j,null),e(j,fc),e(j,Ir),e(Ir,uc),e(j,gc),e(j,So),e(So,_c),e(So,ua),e(ua,bc),e(So,vc),e(j,wc),e(j,No),e(No,xc),e(No,Oo),e(Oo,$c),e(No,yc),e(j,Tc),e(j,jr),e(jr,Bc),e(j,Fc),e(j,re),e(re,Pr),e(Pr,Do),e(Do,Ec),e(re,kc),e(re,Cr),e(Cr,Wo),e(Wo,Mc),e(re,Ic),e(re,zr),e(zr,Vo),e(Vo,jc),e(re,Pc),e(re,Ar),e(Ar,Uo),e(Uo,Cc),e(j,zc),e(j,K),$(Ro,K,null),e(K,Ac),e(K,Pe),e(Pe,qc),e(Pe,qr),e(qr,Lc),e(Pe,Sc),e(Pe,Lr),e(Lr,Nc),e(Pe,Oc),e(K,Dc),$(rt,K,null),e(K,Wc),$(st,K,null),Bs=!0},p(o,[g]){const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:o}),qe.$set(Ho);const Sr={};g&2&&(Sr.$$scope={dirty:g,ctx:o}),Se.$set(Sr);const Nr={};g&2&&(Nr.$$scope={dirty:g,ctx:o}),Oe.$set(Nr);const Or={};g&2&&(Or.$$scope={dirty:g,ctx:o}),De.$set(Or);const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Ve.$set(Jo);const Dr={};g&2&&(Dr.$$scope={dirty:g,ctx:o}),Ue.$set(Dr);const Wr={};g&2&&(Wr.$$scope={dirty:g,ctx:o}),He.$set(Wr);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),Je.$set(Vr);const se={};g&2&&(se.$$scope={dirty:g,ctx:o}),Ge.$set(se);const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:o}),Ke.$set(Ur);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:o}),Ze.$set(Rr);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),Qe.$set(Hr);const Jr={};g&2&&(Jr.$$scope={dirty:g,ctx:o}),tt.$set(Jr);const Xr={};g&2&&(Xr.$$scope={dirty:g,ctx:o}),ot.$set(Xr);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:o}),rt.$set(Gr);const Kr={};g&2&&(Kr.$$scope={dirty:g,ctx:o}),st.$set(Kr)},i(o){Bs||(y(l.$$.fragment,o),y(yt.$$.fragment,o),y(Lt.$$.fragment,o),y(St.$$.fragment,o),y(Ot.$$.fragment,o),y(Wt.$$.fragment,o),y(Vt.$$.fragment,o),y(qe.$$.fragment,o),y(Rt.$$.fragment,o),y(Ht.$$.fragment,o),y(Xt.$$.fragment,o),y(Se.$$.fragment,o),y(Gt.$$.fragment,o),y(Kt.$$.fragment,o),y(Qt.$$.fragment,o),y(Oe.$$.fragment,o),y(De.$$.fragment,o),y(eo.$$.fragment,o),y(to.$$.fragment,o),y(ro.$$.fragment,o),y(Ve.$$.fragment,o),y(Ue.$$.fragment,o),y(so.$$.fragment,o),y(no.$$.fragment,o),y(co.$$.fragment,o),y(He.$$.fragment,o),y(Je.$$.fragment,o),y(ho.$$.fragment,o),y(po.$$.fragment,o),y(uo.$$.fragment,o),y(Ge.$$.fragment,o),y(Ke.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(Bo.$$.fragment,o),y(Ze.$$.fragment,o),y(Qe.$$.fragment,o),y(Fo.$$.fragment,o),y(Eo.$$.fragment,o),y(Ao.$$.fragment,o),y(tt.$$.fragment,o),y(ot.$$.fragment,o),y(qo.$$.fragment,o),y(Lo.$$.fragment,o),y(Ro.$$.fragment,o),y(rt.$$.fragment,o),y(st.$$.fragment,o),Bs=!0)},o(o){T(l.$$.fragment,o),T(yt.$$.fragment,o),T(Lt.$$.fragment,o),T(St.$$.fragment,o),T(Ot.$$.fragment,o),T(Wt.$$.fragment,o),T(Vt.$$.fragment,o),T(qe.$$.fragment,o),T(Rt.$$.fragment,o),T(Ht.$$.fragment,o),T(Xt.$$.fragment,o),T(Se.$$.fragment,o),T(Gt.$$.fragment,o),T(Kt.$$.fragment,o),T(Qt.$$.fragment,o),T(Oe.$$.fragment,o),T(De.$$.fragment,o),T(eo.$$.fragment,o),T(to.$$.fragment,o),T(ro.$$.fragment,o),T(Ve.$$.fragment,o),T(Ue.$$.fragment,o),T(so.$$.fragment,o),T(no.$$.fragment,o),T(co.$$.fragment,o),T(He.$$.fragment,o),T(Je.$$.fragment,o),T(ho.$$.fragment,o),T(po.$$.fragment,o),T(uo.$$.fragment,o),T(Ge.$$.fragment,o),T(Ke.$$.fragment,o),T(go.$$.fragment,o),T(_o.$$.fragment,o),T(Bo.$$.fragment,o),T(Ze.$$.fragment,o),T(Qe.$$.fragment,o),T(Fo.$$.fragment,o),T(Eo.$$.fragment,o),T(Ao.$$.fragment,o),T(tt.$$.fragment,o),T(ot.$$.fragment,o),T(qo.$$.fragment,o),T(Lo.$$.fragment,o),T(Ro.$$.fragment,o),T(rt.$$.fragment,o),T(st.$$.fragment,o),Bs=!1},d(o){t(c),o&&t(v),o&&t(u),B(l),o&&t(Yr),o&&t(de),B(yt),o&&t(Zr),o&&t(V),o&&t(Qr),o&&t(Xo),o&&t(es),o&&t(Go),o&&t(ts),o&&t(Ko),o&&t(os),o&&t(C),o&&t(as),o&&t(U),o&&t(rs),o&&t(pe),B(Lt),o&&t(ss),o&&t(me),B(St),o&&t(ns),o&&t(fe),B(Ot),o&&t(is),o&&t(ue),B(Wt),o&&t(ls),o&&t(Q),B(Vt),B(qe),o&&t(ds),o&&t(_e),B(Rt),o&&t(cs),o&&t(O),B(Ht),B(Xt),B(Se),o&&t(hs),o&&t(be),B(Gt),o&&t(ps),o&&t(ee),B(Kt),B(Qt),B(Oe),B(De),o&&t(ms),o&&t(we),B(eo),o&&t(fs),o&&t(te),B(to),B(ro),B(Ve),B(Ue),o&&t(us),o&&t($e),B(so),o&&t(gs),o&&t(D),B(no),B(co),B(He),B(Je),o&&t(_s),o&&t(Te),B(ho),o&&t(bs),o&&t(W),B(po),B(uo),B(Ge),B(Ke),o&&t(vs),o&&t(Fe),B(go),o&&t(ws),o&&t(M),B(_o),B(Bo),B(Ze),B(Qe),o&&t(xs),o&&t(ke),B(Fo),o&&t($s),o&&t(I),B(Eo),B(Ao),B(tt),B(ot),o&&t(ys),o&&t(je),B(qo),o&&t(Ts),o&&t(j),B(Lo),B(Ro),B(rt),B(st)}}}const bm={local:"beit",sections:[{local:"overview",title:"Overview"},{local:"transformers.models.beit.modeling_beit.BeitModelOutputWithPooling",title:"BEiT specific outputs"},{local:"transformers.BeitConfig",title:"BeitConfig"},{local:"transformers.BeitFeatureExtractor",title:"BeitFeatureExtractor"},{local:"transformers.BeitModel",title:"BeitModel"},{local:"transformers.BeitForMaskedImageModeling",title:"BeitForMaskedImageModeling"},{local:"transformers.BeitForImageClassification",title:"BeitForImageClassification"},{local:"transformers.BeitForSemanticSegmentation",title:"BeitForSemanticSegmentation"},{local:"transformers.FlaxBeitModel",title:"FlaxBeitModel"},{local:"transformers.FlaxBeitForMaskedImageModeling",title:"FlaxBeitForMaskedImageModeling"},{local:"transformers.FlaxBeitForImageClassification",title:"FlaxBeitForImageClassification"}],title:"BEiT"};function vm(F){return em(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fm extends Kp{constructor(c){super();Yp(this,c,vm,_m,Zp,{})}}export{Fm as default,bm as metadata};
