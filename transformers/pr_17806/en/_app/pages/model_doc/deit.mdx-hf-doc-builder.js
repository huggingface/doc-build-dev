import{S as qc,i as zc,s as Ac,e as s,k as f,w as v,t as i,M as Oc,c as r,d as o,m as u,a as n,x as w,h as l,b as m,G as e,g as T,y as $,q as y,o as D,B as k,v as Nc,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ce}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Lc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=s("a"),h=i("Github Issue"),_=i("."),this.h()},l(a){d=r(a,"P",{});var c=n(d);b=l(c,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),p=r(c,"A",{href:!0,rel:!0});var x=n(p);h=l(x,"Github Issue"),x.forEach(o),_=l(c,"."),c.forEach(o),this.h()},h(){m(p,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),m(p,"rel","nofollow")},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Wc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTModel, DeiTConfig

# Initializing a DeiT deit-base-distilled-patch16-224 style configuration
configuration = DeiTConfig()

# Initializing a model from the deit-base-distilled-patch16-224 style configuration
model = DeiTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTModel, DeiTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeiT deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DeiTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Sc(F){let d,b;return{c(){d=s("p"),b=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(p){d=r(p,"P",{});var h=n(d);b=l(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(p,h){T(p,d,h),e(d,b)},d(p){p&&o(d)}}}function Vc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Bc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTModel.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Hc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Uc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForMaskedImageModeling.from_pretrained("facebook/deit-base-distilled-patch16-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Rc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Jc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
import torch
from PIL import Image
import requests

torch.manual_seed(3)
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassification.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Gc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Kc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassificationWithTeacher.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassificationWithTeacher.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Xc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Zc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTModel.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTModel.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function Qc(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function Yc(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTForMaskedImageModeling.from_pretrained("facebook/deit-base-distilled-patch16-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function eh(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function th(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
import torch
from PIL import Image
import requests

torch.manual_seed(3)
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassification.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=s("p"),b=i("Examples:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Examples:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function oh(F){let d,b,p,h,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(c,"CODE",{});var x=n(p);h=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(a,c){T(a,d,c),e(d,b),e(d,p),e(p,h),e(d,_)},d(a){a&&o(d)}}}function ah(F){let d,b,p,h,_;return h=new Ce({props:{code:`from transformers import DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = TFDeiTForImageClassificationWithTeacher.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, TFDeiTForImageClassificationWithTeacher
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDeiTForImageClassificationWithTeacher.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=s("p"),b=i("Example:"),p=f(),v(h.$$.fragment)},l(a){d=r(a,"P",{});var c=n(d);b=l(c,"Example:"),c.forEach(o),p=u(a),w(h.$$.fragment,a)},m(a,c){T(a,d,c),e(d,b),T(a,p,c),$(h,a,c),_=!0},p:je,i(a){_||(y(h.$$.fragment,a),_=!0)},o(a){D(h.$$.fragment,a),_=!1},d(a){a&&o(d),a&&o(p),k(h,a)}}}function sh(F){let d,b,p,h,_,a,c,x,ir,us,Pe,gs,re,qe,ra,wt,lr,na,dr,_s,L,cr,$t,hr,pr,vo,mr,fr,yt,ur,gr,Ts,wo,_r,bs,$o,ia,Tr,vs,yo,br,ws,P,la,vr,wr,ne,$r,Do,yr,Dr,ko,kr,Fr,xr,da,Ir,Mr,ca,Er,jr,I,Cr,Fo,Pr,qr,xo,zr,Ar,ha,Or,Nr,pa,Lr,Wr,ma,Sr,Vr,fa,Br,Hr,Io,Ur,Rr,$s,oe,Jr,Dt,Gr,Kr,kt,Xr,Zr,ys,ie,ze,ua,Ft,Qr,ga,Yr,Ds,q,xt,en,le,tn,Mo,on,an,It,sn,rn,nn,de,ln,Eo,dn,cn,jo,hn,pn,mn,Ae,ks,ce,Oe,_a,Mt,fn,Ta,un,Fs,z,Et,gn,ba,_n,Tn,jt,bn,Co,vn,wn,$n,ae,Ct,yn,va,Dn,kn,Ne,xs,he,Le,wa,Pt,Fn,$a,xn,Is,Z,qt,In,zt,Mn,At,En,jn,Cn,W,Ot,Pn,pe,qn,Po,zn,An,ya,On,Nn,Ln,We,Wn,Se,Ms,me,Ve,Da,Nt,Sn,ka,Vn,Es,Q,Lt,Bn,fe,Hn,Fa,Un,Rn,Wt,Jn,Gn,Kn,S,St,Xn,ue,Zn,qo,Qn,Yn,xa,ei,ti,oi,Be,ai,He,js,ge,Ue,Ia,Vt,si,Ma,ri,Cs,A,Bt,ni,Ea,ii,li,Ht,di,Ut,ci,hi,pi,V,Rt,mi,_e,fi,zo,ui,gi,ja,_i,Ti,bi,Re,vi,Je,Ps,Te,Ge,Ca,Jt,wi,Pa,$i,qs,E,Gt,yi,qa,Di,ki,za,Fi,xi,Aa,Ii,Mi,Kt,Ei,Xt,ji,Ci,Pi,B,Zt,qi,be,zi,Ao,Ai,Oi,Oa,Ni,Li,Wi,Ke,Si,Xe,zs,ve,Ze,Na,Qt,Vi,La,Bi,As,Y,Yt,Hi,eo,Ui,to,Ri,Ji,Gi,H,oo,Ki,we,Xi,Oo,Zi,Qi,Wa,Yi,el,tl,Qe,ol,Ye,Os,$e,et,Sa,ao,al,Va,sl,Ns,ee,so,rl,ye,nl,Ba,il,ll,ro,dl,cl,hl,U,no,pl,De,ml,No,fl,ul,Ha,gl,_l,Tl,tt,bl,ot,Ls,ke,at,Ua,io,vl,Ra,wl,Ws,O,lo,$l,Ja,yl,Dl,co,kl,ho,Fl,xl,Il,R,po,Ml,Fe,El,Lo,jl,Cl,Ga,Pl,ql,zl,st,Al,rt,Ss,xe,nt,Ka,mo,Ol,Xa,Nl,Vs,j,fo,Ll,Za,Wl,Sl,Qa,Vl,Bl,Ya,Hl,Ul,uo,Rl,go,Jl,Gl,Kl,J,_o,Xl,Ie,Zl,Wo,Ql,Yl,es,ed,td,od,it,ad,lt,Bs;return a=new X({}),Pe=new se({props:{$$slots:{default:[Lc]},$$scope:{ctx:F}}}),wt=new X({}),Ft=new X({}),xt=new M({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DeiTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DeiTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DeiTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DeiTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DeiTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DeiTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DeiTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DeiTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DeiTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DeiTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DeiTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DeiTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DeiTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/configuration_deit.py#L37"}}),Ae=new Ee({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[Wc]},$$scope:{ctx:F}}}),Mt=new X({}),Et=new M({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DeiTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DeiTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.DeiTFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.DeiTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.DeiTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DeiTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/feature_extraction_deit.py#L36"}}),Ct=new M({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17806/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/feature_extraction_deit.py#L91",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17806/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17806/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ne=new se({props:{warning:!0,$$slots:{default:[Sc]},$$scope:{ctx:F}}}),Pt=new X({}),qt=new M({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L472"}}),Ot=new M({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L497",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new se({props:{$$slots:{default:[Vc]},$$scope:{ctx:F}}}),Se=new Ee({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[Bc]},$$scope:{ctx:F}}}),Nt=new X({}),Lt=new M({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L577"}}),St=new M({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L591",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new se({props:{$$slots:{default:[Hc]},$$scope:{ctx:F}}}),He=new Ee({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[Uc]},$$scope:{ctx:F}}}),Vt=new X({}),Bt=new M({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L685"}}),Rt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L698",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new se({props:{$$slots:{default:[Rc]},$$scope:{ctx:F}}}),Je=new Ee({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:F}}}),Jt=new X({}),Gt=new M({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L834"}}),Zt=new M({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_deit.py#L852",returnDescription:`
<p>A <code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores as the average of the cls_logits and distillation logits.</li>
<li><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the classification head (i.e. the linear layer on top of the final hidden state of the
class token).</li>
<li><strong>distillation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the distillation head (i.e. the linear layer on top of the final hidden state of the
distillation token).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new se({props:{$$slots:{default:[Gc]},$$scope:{ctx:F}}}),Xe=new Ee({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[Kc]},$$scope:{ctx:F}}}),Qt=new X({}),Yt=new M({props:{name:"class transformers.TFDeiTModel",anchor:"transformers.TFDeiTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L639"}}),oo=new M({props:{name:"call",anchor:"transformers.TFDeiTModel.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L649",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qe=new se({props:{$$slots:{default:[Xc]},$$scope:{ctx:F}}}),Ye=new Ee({props:{anchor:"transformers.TFDeiTModel.call.example",$$slots:{default:[Zc]},$$scope:{ctx:F}}}),ao=new X({}),so=new M({props:{name:"class transformers.TFDeiTForMaskedImageModeling",anchor:"transformers.TFDeiTForMaskedImageModeling",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L771"}}),no=new M({props:{name:"call",anchor:"transformers.TFDeiTForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L778",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_17806/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tt=new se({props:{$$slots:{default:[Qc]},$$scope:{ctx:F}}}),ot=new Ee({props:{anchor:"transformers.TFDeiTForMaskedImageModeling.call.example",$$slots:{default:[Yc]},$$scope:{ctx:F}}}),io=new X({}),lo=new M({props:{name:"class transformers.TFDeiTForImageClassification",anchor:"transformers.TFDeiTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L892"}}),po=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFDeiTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L906",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings, if the model has an embedding layer, + one for
the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states (also called
feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_tf_outputs.TFImageClassifierOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),st=new se({props:{$$slots:{default:[eh]},$$scope:{ctx:F}}}),rt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassification.call.example",$$slots:{default:[th]},$$scope:{ctx:F}}}),mo=new X({}),fo=new M({props:{name:"class transformers.TFDeiTForImageClassificationWithTeacher",anchor:"transformers.TFDeiTForImageClassificationWithTeacher",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17806/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L1025"}}),_o=new M({props:{name:"call",anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call",parameters:[{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17806/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17806/src/transformers/models/deit/modeling_tf_deit.py#L1044",returnDescription:`
<p>A <code>transformers.models.deit.modeling_tf_deit.TFDeiTForImageClassificationWithTeacherOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores as the average of the cls_logits and distillation logits.</li>
<li><strong>cls_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the classification head (i.e. the linear layer on top of the final hidden state of the
class token).</li>
<li><strong>distillation_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the distillation head (i.e. the linear layer on top of the final hidden state of the
distillation token).</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.deit.modeling_tf_deit.TFDeiTForImageClassificationWithTeacherOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new se({props:{$$slots:{default:[oh]},$$scope:{ctx:F}}}),lt=new Ee({props:{anchor:"transformers.TFDeiTForImageClassificationWithTeacher.call.example",$$slots:{default:[ah]},$$scope:{ctx:F}}}),{c(){d=s("meta"),b=f(),p=s("h1"),h=s("a"),_=s("span"),v(a.$$.fragment),c=f(),x=s("span"),ir=i("DeiT"),us=f(),v(Pe.$$.fragment),gs=f(),re=s("h2"),qe=s("a"),ra=s("span"),v(wt.$$.fragment),lr=f(),na=s("span"),dr=i("Overview"),_s=f(),L=s("p"),cr=i("The DeiT model was proposed in "),$t=s("a"),hr=i("Training data-efficient image transformers & distillation through attention"),pr=i(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),vo=s("a"),mr=i("Vision Transformer (ViT)"),fr=i(" introduced in "),yt=s("a"),ur=i("Dosovitskiy et al., 2020"),gr=i(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),Ts=f(),wo=s("p"),_r=i("The abstract from the paper is the following:"),bs=f(),$o=s("p"),ia=s("em"),Tr=i(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),vs=f(),yo=s("p"),br=i("Tips:"),ws=f(),P=s("ul"),la=s("li"),vr=i(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),wr=f(),ne=s("li"),$r=i(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Do=s("a"),yr=i("DeiTForImageClassification"),Dr=i(` and (2) corresponds to
`),ko=s("a"),kr=i("DeiTForImageClassificationWithTeacher"),Fr=i("."),xr=f(),da=s("li"),Ir=i(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Mr=f(),ca=s("li"),Er=i(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),jr=f(),I=s("li"),Cr=i(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Fo=s("a"),Pr=i("ViTModel"),qr=i(" or "),xo=s("a"),zr=i("ViTForImageClassification"),Ar=i(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ha=s("em"),Or=i("facebook/deit-tiny-patch16-224"),Nr=i(", "),pa=s("em"),Lr=i("facebook/deit-small-patch16-224"),Wr=i(", "),ma=s("em"),Sr=i("facebook/deit-base-patch16-224"),Vr=i(` and
`),fa=s("em"),Br=i("facebook/deit-base-patch16-384"),Hr=i(". Note that one should use "),Io=s("a"),Ur=i("DeiTFeatureExtractor"),Rr=i(` in order to
prepare images for the model.`),$s=f(),oe=s("p"),Jr=i("This model was contributed by "),Dt=s("a"),Gr=i("nielsr"),Kr=i(". The TensorFlow version of this model was added by "),kt=s("a"),Xr=i("amyeroberts"),Zr=i("."),ys=f(),ie=s("h2"),ze=s("a"),ua=s("span"),v(Ft.$$.fragment),Qr=f(),ga=s("span"),Yr=i("DeiTConfig"),Ds=f(),q=s("div"),v(xt.$$.fragment),en=f(),le=s("p"),tn=i("This is the configuration class to store the configuration of a "),Mo=s("a"),on=i("DeiTModel"),an=i(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),It=s("a"),sn=i("facebook/deit-base-distilled-patch16-224"),rn=i(`
architecture.`),nn=f(),de=s("p"),ln=i("Configuration objects inherit from "),Eo=s("a"),dn=i("PretrainedConfig"),cn=i(` and can be used to control the model outputs. Read the
documentation from `),jo=s("a"),hn=i("PretrainedConfig"),pn=i(" for more information."),mn=f(),v(Ae.$$.fragment),ks=f(),ce=s("h2"),Oe=s("a"),_a=s("span"),v(Mt.$$.fragment),fn=f(),Ta=s("span"),un=i("DeiTFeatureExtractor"),Fs=f(),z=s("div"),v(Et.$$.fragment),gn=f(),ba=s("p"),_n=i("Constructs a DeiT feature extractor."),Tn=f(),jt=s("p"),bn=i("This feature extractor inherits from "),Co=s("a"),vn=i("FeatureExtractionMixin"),wn=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),$n=f(),ae=s("div"),v(Ct.$$.fragment),yn=f(),va=s("p"),Dn=i("Main method to prepare for the model one or several image(s)."),kn=f(),v(Ne.$$.fragment),xs=f(),he=s("h2"),Le=s("a"),wa=s("span"),v(Pt.$$.fragment),Fn=f(),$a=s("span"),xn=i("DeiTModel"),Is=f(),Z=s("div"),v(qt.$$.fragment),In=f(),zt=s("p"),Mn=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=s("a"),En=i("torch.nn.Module"),jn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cn=f(),W=s("div"),v(Ot.$$.fragment),Pn=f(),pe=s("p"),qn=i("The "),Po=s("a"),zn=i("DeiTModel"),An=i(" forward method, overrides the "),ya=s("code"),On=i("__call__"),Nn=i(" special method."),Ln=f(),v(We.$$.fragment),Wn=f(),v(Se.$$.fragment),Ms=f(),me=s("h2"),Ve=s("a"),Da=s("span"),v(Nt.$$.fragment),Sn=f(),ka=s("span"),Vn=i("DeiTForMaskedImageModeling"),Es=f(),Q=s("div"),v(Lt.$$.fragment),Bn=f(),fe=s("p"),Hn=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Fa=s("code"),Un=i("SimMIM <https://arxiv.org/abs/2111.09886>"),Rn=i(`__.
This model is a PyTorch `),Wt=s("a"),Jn=i("torch.nn.Module"),Gn=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kn=f(),S=s("div"),v(St.$$.fragment),Xn=f(),ue=s("p"),Zn=i("The "),qo=s("a"),Qn=i("DeiTForMaskedImageModeling"),Yn=i(" forward method, overrides the "),xa=s("code"),ei=i("__call__"),ti=i(" special method."),oi=f(),v(Be.$$.fragment),ai=f(),v(He.$$.fragment),js=f(),ge=s("h2"),Ue=s("a"),Ia=s("span"),v(Vt.$$.fragment),si=f(),Ma=s("span"),ri=i("DeiTForImageClassification"),Cs=f(),A=s("div"),v(Bt.$$.fragment),ni=f(),Ea=s("p"),ii=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),li=f(),Ht=s("p"),di=i("This model is a PyTorch "),Ut=s("a"),ci=i("torch.nn.Module"),hi=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi=f(),V=s("div"),v(Rt.$$.fragment),mi=f(),_e=s("p"),fi=i("The "),zo=s("a"),ui=i("DeiTForImageClassification"),gi=i(" forward method, overrides the "),ja=s("code"),_i=i("__call__"),Ti=i(" special method."),bi=f(),v(Re.$$.fragment),vi=f(),v(Je.$$.fragment),Ps=f(),Te=s("h2"),Ge=s("a"),Ca=s("span"),v(Jt.$$.fragment),wi=f(),Pa=s("span"),$i=i("DeiTForImageClassificationWithTeacher"),qs=f(),E=s("div"),v(Gt.$$.fragment),yi=f(),qa=s("p"),Di=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),ki=f(),za=s("p"),Fi=i(".. warning::"),xi=f(),Aa=s("p"),Ii=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Mi=f(),Kt=s("p"),Ei=i("This model is a PyTorch "),Xt=s("a"),ji=i("torch.nn.Module"),Ci=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi=f(),B=s("div"),v(Zt.$$.fragment),qi=f(),be=s("p"),zi=i("The "),Ao=s("a"),Ai=i("DeiTForImageClassificationWithTeacher"),Oi=i(" forward method, overrides the "),Oa=s("code"),Ni=i("__call__"),Li=i(" special method."),Wi=f(),v(Ke.$$.fragment),Si=f(),v(Xe.$$.fragment),zs=f(),ve=s("h2"),Ze=s("a"),Na=s("span"),v(Qt.$$.fragment),Vi=f(),La=s("span"),Bi=i("TFDeiTModel"),As=f(),Y=s("div"),v(Yt.$$.fragment),Hi=f(),eo=s("p"),Ui=i(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),to=s("a"),Ri=i("tf.keras.layers.Layer"),Ji=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Gi=f(),H=s("div"),v(oo.$$.fragment),Ki=f(),we=s("p"),Xi=i("The "),Oo=s("a"),Zi=i("TFDeiTModel"),Qi=i(" forward method, overrides the "),Wa=s("code"),Yi=i("__call__"),el=i(" special method."),tl=f(),v(Qe.$$.fragment),ol=f(),v(Ye.$$.fragment),Os=f(),$e=s("h2"),et=s("a"),Sa=s("span"),v(ao.$$.fragment),al=f(),Va=s("span"),sl=i("TFDeiTForMaskedImageModeling"),Ns=f(),ee=s("div"),v(so.$$.fragment),rl=f(),ye=s("p"),nl=i("DeiT Model with a decoder on top for masked image modeling, as proposed in "),Ba=s("code"),il=i("SimMIM <https://arxiv.org/abs/2111.09886>"),ll=i(`__.
This model is a TensorFlow
`),ro=s("a"),dl=i("tf.keras.layers.Layer"),cl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),hl=f(),U=s("div"),v(no.$$.fragment),pl=f(),De=s("p"),ml=i("The "),No=s("a"),fl=i("TFDeiTForMaskedImageModeling"),ul=i(" forward method, overrides the "),Ha=s("code"),gl=i("__call__"),_l=i(" special method."),Tl=f(),v(tt.$$.fragment),bl=f(),v(ot.$$.fragment),Ls=f(),ke=s("h2"),at=s("a"),Ua=s("span"),v(io.$$.fragment),vl=f(),Ra=s("span"),wl=i("TFDeiTForImageClassification"),Ws=f(),O=s("div"),v(lo.$$.fragment),$l=f(),Ja=s("p"),yl=i(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Dl=f(),co=s("p"),kl=i(`This model is a TensorFlow
`),ho=s("a"),Fl=i("tf.keras.layers.Layer"),xl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Il=f(),R=s("div"),v(po.$$.fragment),Ml=f(),Fe=s("p"),El=i("The "),Lo=s("a"),jl=i("TFDeiTForImageClassification"),Cl=i(" forward method, overrides the "),Ga=s("code"),Pl=i("__call__"),ql=i(" special method."),zl=f(),v(st.$$.fragment),Al=f(),v(rt.$$.fragment),Ss=f(),xe=s("h2"),nt=s("a"),Ka=s("span"),v(mo.$$.fragment),Ol=f(),Xa=s("span"),Nl=i("TFDeiTForImageClassificationWithTeacher"),Vs=f(),j=s("div"),v(fo.$$.fragment),Ll=f(),Za=s("p"),Wl=i(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Sl=f(),Qa=s("p"),Vl=i(".. warning::"),Bl=f(),Ya=s("p"),Hl=i(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ul=f(),uo=s("p"),Rl=i(`This model is a TensorFlow
`),go=s("a"),Jl=i("tf.keras.layers.Layer"),Gl=i(`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),Kl=f(),J=s("div"),v(_o.$$.fragment),Xl=f(),Ie=s("p"),Zl=i("The "),Wo=s("a"),Ql=i("TFDeiTForImageClassificationWithTeacher"),Yl=i(" forward method, overrides the "),es=s("code"),ed=i("__call__"),td=i(" special method."),od=f(),v(it.$$.fragment),ad=f(),v(lt.$$.fragment),this.h()},l(t){const g=Oc('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),p=r(t,"H1",{class:!0});var To=n(p);h=r(To,"A",{id:!0,class:!0,href:!0});var ts=n(h);_=r(ts,"SPAN",{});var os=n(_);w(a.$$.fragment,os),os.forEach(o),ts.forEach(o),c=u(To),x=r(To,"SPAN",{});var as=n(x);ir=l(as,"DeiT"),as.forEach(o),To.forEach(o),us=u(t),w(Pe.$$.fragment,t),gs=u(t),re=r(t,"H2",{class:!0});var bo=n(re);qe=r(bo,"A",{id:!0,class:!0,href:!0});var ss=n(qe);ra=r(ss,"SPAN",{});var rs=n(ra);w(wt.$$.fragment,rs),rs.forEach(o),ss.forEach(o),lr=u(bo),na=r(bo,"SPAN",{});var ns=n(na);dr=l(ns,"Overview"),ns.forEach(o),bo.forEach(o),_s=u(t),L=r(t,"P",{});var te=n(L);cr=l(te,"The DeiT model was proposed in "),$t=r(te,"A",{href:!0,rel:!0});var is=n($t);hr=l(is,"Training data-efficient image transformers & distillation through attention"),is.forEach(o),pr=l(te,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),vo=r(te,"A",{href:!0});var ls=n(vo);mr=l(ls,"Vision Transformer (ViT)"),ls.forEach(o),fr=l(te," introduced in "),yt=r(te,"A",{href:!0,rel:!0});var ds=n(yt);ur=l(ds,"Dosovitskiy et al., 2020"),ds.forEach(o),gr=l(te,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),te.forEach(o),Ts=u(t),wo=r(t,"P",{});var cs=n(wo);_r=l(cs,"The abstract from the paper is the following:"),cs.forEach(o),bs=u(t),$o=r(t,"P",{});var hs=n($o);ia=r(hs,"EM",{});var ps=n(ia);Tr=l(ps,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),ps.forEach(o),hs.forEach(o),vs=u(t),yo=r(t,"P",{});var ms=n(yo);br=l(ms,"Tips:"),ms.forEach(o),ws=u(t),P=r(t,"UL",{});var N=n(P);la=r(N,"LI",{});var fs=n(la);vr=l(fs,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),fs.forEach(o),wr=u(N),ne=r(N,"LI",{});var Me=n(ne);$r=l(Me,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),Do=r(Me,"A",{href:!0});var sd=n(Do);yr=l(sd,"DeiTForImageClassification"),sd.forEach(o),Dr=l(Me,` and (2) corresponds to
`),ko=r(Me,"A",{href:!0});var rd=n(ko);kr=l(rd,"DeiTForImageClassificationWithTeacher"),rd.forEach(o),Fr=l(Me,"."),Me.forEach(o),xr=u(N),da=r(N,"LI",{});var nd=n(da);Ir=l(nd,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),nd.forEach(o),Mr=u(N),ca=r(N,"LI",{});var id=n(ca);Er=l(id,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),id.forEach(o),jr=u(N),I=r(N,"LI",{});var C=n(I);Cr=l(C,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),Fo=r(C,"A",{href:!0});var ld=n(Fo);Pr=l(ld,"ViTModel"),ld.forEach(o),qr=l(C," or "),xo=r(C,"A",{href:!0});var dd=n(xo);zr=l(dd,"ViTForImageClassification"),dd.forEach(o),Ar=l(C,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),ha=r(C,"EM",{});var cd=n(ha);Or=l(cd,"facebook/deit-tiny-patch16-224"),cd.forEach(o),Nr=l(C,", "),pa=r(C,"EM",{});var hd=n(pa);Lr=l(hd,"facebook/deit-small-patch16-224"),hd.forEach(o),Wr=l(C,", "),ma=r(C,"EM",{});var pd=n(ma);Sr=l(pd,"facebook/deit-base-patch16-224"),pd.forEach(o),Vr=l(C,` and
`),fa=r(C,"EM",{});var md=n(fa);Br=l(md,"facebook/deit-base-patch16-384"),md.forEach(o),Hr=l(C,". Note that one should use "),Io=r(C,"A",{href:!0});var fd=n(Io);Ur=l(fd,"DeiTFeatureExtractor"),fd.forEach(o),Rr=l(C,` in order to
prepare images for the model.`),C.forEach(o),N.forEach(o),$s=u(t),oe=r(t,"P",{});var So=n(oe);Jr=l(So,"This model was contributed by "),Dt=r(So,"A",{href:!0,rel:!0});var ud=n(Dt);Gr=l(ud,"nielsr"),ud.forEach(o),Kr=l(So,". The TensorFlow version of this model was added by "),kt=r(So,"A",{href:!0,rel:!0});var gd=n(kt);Xr=l(gd,"amyeroberts"),gd.forEach(o),Zr=l(So,"."),So.forEach(o),ys=u(t),ie=r(t,"H2",{class:!0});var Hs=n(ie);ze=r(Hs,"A",{id:!0,class:!0,href:!0});var _d=n(ze);ua=r(_d,"SPAN",{});var Td=n(ua);w(Ft.$$.fragment,Td),Td.forEach(o),_d.forEach(o),Qr=u(Hs),ga=r(Hs,"SPAN",{});var bd=n(ga);Yr=l(bd,"DeiTConfig"),bd.forEach(o),Hs.forEach(o),Ds=u(t),q=r(t,"DIV",{class:!0});var dt=n(q);w(xt.$$.fragment,dt),en=u(dt),le=r(dt,"P",{});var Vo=n(le);tn=l(Vo,"This is the configuration class to store the configuration of a "),Mo=r(Vo,"A",{href:!0});var vd=n(Mo);on=l(vd,"DeiTModel"),vd.forEach(o),an=l(Vo,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),It=r(Vo,"A",{href:!0,rel:!0});var wd=n(It);sn=l(wd,"facebook/deit-base-distilled-patch16-224"),wd.forEach(o),rn=l(Vo,`
architecture.`),Vo.forEach(o),nn=u(dt),de=r(dt,"P",{});var Bo=n(de);ln=l(Bo,"Configuration objects inherit from "),Eo=r(Bo,"A",{href:!0});var $d=n(Eo);dn=l($d,"PretrainedConfig"),$d.forEach(o),cn=l(Bo,` and can be used to control the model outputs. Read the
documentation from `),jo=r(Bo,"A",{href:!0});var yd=n(jo);hn=l(yd,"PretrainedConfig"),yd.forEach(o),pn=l(Bo," for more information."),Bo.forEach(o),mn=u(dt),w(Ae.$$.fragment,dt),dt.forEach(o),ks=u(t),ce=r(t,"H2",{class:!0});var Us=n(ce);Oe=r(Us,"A",{id:!0,class:!0,href:!0});var Dd=n(Oe);_a=r(Dd,"SPAN",{});var kd=n(_a);w(Mt.$$.fragment,kd),kd.forEach(o),Dd.forEach(o),fn=u(Us),Ta=r(Us,"SPAN",{});var Fd=n(Ta);un=l(Fd,"DeiTFeatureExtractor"),Fd.forEach(o),Us.forEach(o),Fs=u(t),z=r(t,"DIV",{class:!0});var ct=n(z);w(Et.$$.fragment,ct),gn=u(ct),ba=r(ct,"P",{});var xd=n(ba);_n=l(xd,"Constructs a DeiT feature extractor."),xd.forEach(o),Tn=u(ct),jt=r(ct,"P",{});var Rs=n(jt);bn=l(Rs,"This feature extractor inherits from "),Co=r(Rs,"A",{href:!0});var Id=n(Co);vn=l(Id,"FeatureExtractionMixin"),Id.forEach(o),wn=l(Rs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Rs.forEach(o),$n=u(ct),ae=r(ct,"DIV",{class:!0});var Ho=n(ae);w(Ct.$$.fragment,Ho),yn=u(Ho),va=r(Ho,"P",{});var Md=n(va);Dn=l(Md,"Main method to prepare for the model one or several image(s)."),Md.forEach(o),kn=u(Ho),w(Ne.$$.fragment,Ho),Ho.forEach(o),ct.forEach(o),xs=u(t),he=r(t,"H2",{class:!0});var Js=n(he);Le=r(Js,"A",{id:!0,class:!0,href:!0});var Ed=n(Le);wa=r(Ed,"SPAN",{});var jd=n(wa);w(Pt.$$.fragment,jd),jd.forEach(o),Ed.forEach(o),Fn=u(Js),$a=r(Js,"SPAN",{});var Cd=n($a);xn=l(Cd,"DeiTModel"),Cd.forEach(o),Js.forEach(o),Is=u(t),Z=r(t,"DIV",{class:!0});var Uo=n(Z);w(qt.$$.fragment,Uo),In=u(Uo),zt=r(Uo,"P",{});var Gs=n(zt);Mn=l(Gs,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),At=r(Gs,"A",{href:!0,rel:!0});var Pd=n(At);En=l(Pd,"torch.nn.Module"),Pd.forEach(o),jn=l(Gs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gs.forEach(o),Cn=u(Uo),W=r(Uo,"DIV",{class:!0});var ht=n(W);w(Ot.$$.fragment,ht),Pn=u(ht),pe=r(ht,"P",{});var Ro=n(pe);qn=l(Ro,"The "),Po=r(Ro,"A",{href:!0});var qd=n(Po);zn=l(qd,"DeiTModel"),qd.forEach(o),An=l(Ro," forward method, overrides the "),ya=r(Ro,"CODE",{});var zd=n(ya);On=l(zd,"__call__"),zd.forEach(o),Nn=l(Ro," special method."),Ro.forEach(o),Ln=u(ht),w(We.$$.fragment,ht),Wn=u(ht),w(Se.$$.fragment,ht),ht.forEach(o),Uo.forEach(o),Ms=u(t),me=r(t,"H2",{class:!0});var Ks=n(me);Ve=r(Ks,"A",{id:!0,class:!0,href:!0});var Ad=n(Ve);Da=r(Ad,"SPAN",{});var Od=n(Da);w(Nt.$$.fragment,Od),Od.forEach(o),Ad.forEach(o),Sn=u(Ks),ka=r(Ks,"SPAN",{});var Nd=n(ka);Vn=l(Nd,"DeiTForMaskedImageModeling"),Nd.forEach(o),Ks.forEach(o),Es=u(t),Q=r(t,"DIV",{class:!0});var Jo=n(Q);w(Lt.$$.fragment,Jo),Bn=u(Jo),fe=r(Jo,"P",{});var Go=n(fe);Hn=l(Go,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Fa=r(Go,"CODE",{});var Ld=n(Fa);Un=l(Ld,"SimMIM <https://arxiv.org/abs/2111.09886>"),Ld.forEach(o),Rn=l(Go,`__.
This model is a PyTorch `),Wt=r(Go,"A",{href:!0,rel:!0});var Wd=n(Wt);Jn=l(Wd,"torch.nn.Module"),Wd.forEach(o),Gn=l(Go,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Go.forEach(o),Kn=u(Jo),S=r(Jo,"DIV",{class:!0});var pt=n(S);w(St.$$.fragment,pt),Xn=u(pt),ue=r(pt,"P",{});var Ko=n(ue);Zn=l(Ko,"The "),qo=r(Ko,"A",{href:!0});var Sd=n(qo);Qn=l(Sd,"DeiTForMaskedImageModeling"),Sd.forEach(o),Yn=l(Ko," forward method, overrides the "),xa=r(Ko,"CODE",{});var Vd=n(xa);ei=l(Vd,"__call__"),Vd.forEach(o),ti=l(Ko," special method."),Ko.forEach(o),oi=u(pt),w(Be.$$.fragment,pt),ai=u(pt),w(He.$$.fragment,pt),pt.forEach(o),Jo.forEach(o),js=u(t),ge=r(t,"H2",{class:!0});var Xs=n(ge);Ue=r(Xs,"A",{id:!0,class:!0,href:!0});var Bd=n(Ue);Ia=r(Bd,"SPAN",{});var Hd=n(Ia);w(Vt.$$.fragment,Hd),Hd.forEach(o),Bd.forEach(o),si=u(Xs),Ma=r(Xs,"SPAN",{});var Ud=n(Ma);ri=l(Ud,"DeiTForImageClassification"),Ud.forEach(o),Xs.forEach(o),Cs=u(t),A=r(t,"DIV",{class:!0});var mt=n(A);w(Bt.$$.fragment,mt),ni=u(mt),Ea=r(mt,"P",{});var Rd=n(Ea);ii=l(Rd,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Rd.forEach(o),li=u(mt),Ht=r(mt,"P",{});var Zs=n(Ht);di=l(Zs,"This model is a PyTorch "),Ut=r(Zs,"A",{href:!0,rel:!0});var Jd=n(Ut);ci=l(Jd,"torch.nn.Module"),Jd.forEach(o),hi=l(Zs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zs.forEach(o),pi=u(mt),V=r(mt,"DIV",{class:!0});var ft=n(V);w(Rt.$$.fragment,ft),mi=u(ft),_e=r(ft,"P",{});var Xo=n(_e);fi=l(Xo,"The "),zo=r(Xo,"A",{href:!0});var Gd=n(zo);ui=l(Gd,"DeiTForImageClassification"),Gd.forEach(o),gi=l(Xo," forward method, overrides the "),ja=r(Xo,"CODE",{});var Kd=n(ja);_i=l(Kd,"__call__"),Kd.forEach(o),Ti=l(Xo," special method."),Xo.forEach(o),bi=u(ft),w(Re.$$.fragment,ft),vi=u(ft),w(Je.$$.fragment,ft),ft.forEach(o),mt.forEach(o),Ps=u(t),Te=r(t,"H2",{class:!0});var Qs=n(Te);Ge=r(Qs,"A",{id:!0,class:!0,href:!0});var Xd=n(Ge);Ca=r(Xd,"SPAN",{});var Zd=n(Ca);w(Jt.$$.fragment,Zd),Zd.forEach(o),Xd.forEach(o),wi=u(Qs),Pa=r(Qs,"SPAN",{});var Qd=n(Pa);$i=l(Qd,"DeiTForImageClassificationWithTeacher"),Qd.forEach(o),Qs.forEach(o),qs=u(t),E=r(t,"DIV",{class:!0});var G=n(E);w(Gt.$$.fragment,G),yi=u(G),qa=r(G,"P",{});var Yd=n(qa);Di=l(Yd,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Yd.forEach(o),ki=u(G),za=r(G,"P",{});var ec=n(za);Fi=l(ec,".. warning::"),ec.forEach(o),xi=u(G),Aa=r(G,"P",{});var tc=n(Aa);Ii=l(tc,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),tc.forEach(o),Mi=u(G),Kt=r(G,"P",{});var Ys=n(Kt);Ei=l(Ys,"This model is a PyTorch "),Xt=r(Ys,"A",{href:!0,rel:!0});var oc=n(Xt);ji=l(oc,"torch.nn.Module"),oc.forEach(o),Ci=l(Ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys.forEach(o),Pi=u(G),B=r(G,"DIV",{class:!0});var ut=n(B);w(Zt.$$.fragment,ut),qi=u(ut),be=r(ut,"P",{});var Zo=n(be);zi=l(Zo,"The "),Ao=r(Zo,"A",{href:!0});var ac=n(Ao);Ai=l(ac,"DeiTForImageClassificationWithTeacher"),ac.forEach(o),Oi=l(Zo," forward method, overrides the "),Oa=r(Zo,"CODE",{});var sc=n(Oa);Ni=l(sc,"__call__"),sc.forEach(o),Li=l(Zo," special method."),Zo.forEach(o),Wi=u(ut),w(Ke.$$.fragment,ut),Si=u(ut),w(Xe.$$.fragment,ut),ut.forEach(o),G.forEach(o),zs=u(t),ve=r(t,"H2",{class:!0});var er=n(ve);Ze=r(er,"A",{id:!0,class:!0,href:!0});var rc=n(Ze);Na=r(rc,"SPAN",{});var nc=n(Na);w(Qt.$$.fragment,nc),nc.forEach(o),rc.forEach(o),Vi=u(er),La=r(er,"SPAN",{});var ic=n(La);Bi=l(ic,"TFDeiTModel"),ic.forEach(o),er.forEach(o),As=u(t),Y=r(t,"DIV",{class:!0});var Qo=n(Y);w(Yt.$$.fragment,Qo),Hi=u(Qo),eo=r(Qo,"P",{});var tr=n(eo);Ui=l(tr,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a TensorFlow
`),to=r(tr,"A",{href:!0,rel:!0});var lc=n(to);Ri=l(lc,"tf.keras.layers.Layer"),lc.forEach(o),Ji=l(tr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),tr.forEach(o),Gi=u(Qo),H=r(Qo,"DIV",{class:!0});var gt=n(H);w(oo.$$.fragment,gt),Ki=u(gt),we=r(gt,"P",{});var Yo=n(we);Xi=l(Yo,"The "),Oo=r(Yo,"A",{href:!0});var dc=n(Oo);Zi=l(dc,"TFDeiTModel"),dc.forEach(o),Qi=l(Yo," forward method, overrides the "),Wa=r(Yo,"CODE",{});var cc=n(Wa);Yi=l(cc,"__call__"),cc.forEach(o),el=l(Yo," special method."),Yo.forEach(o),tl=u(gt),w(Qe.$$.fragment,gt),ol=u(gt),w(Ye.$$.fragment,gt),gt.forEach(o),Qo.forEach(o),Os=u(t),$e=r(t,"H2",{class:!0});var or=n($e);et=r(or,"A",{id:!0,class:!0,href:!0});var hc=n(et);Sa=r(hc,"SPAN",{});var pc=n(Sa);w(ao.$$.fragment,pc),pc.forEach(o),hc.forEach(o),al=u(or),Va=r(or,"SPAN",{});var mc=n(Va);sl=l(mc,"TFDeiTForMaskedImageModeling"),mc.forEach(o),or.forEach(o),Ns=u(t),ee=r(t,"DIV",{class:!0});var ea=n(ee);w(so.$$.fragment,ea),rl=u(ea),ye=r(ea,"P",{});var ta=n(ye);nl=l(ta,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),Ba=r(ta,"CODE",{});var fc=n(Ba);il=l(fc,"SimMIM <https://arxiv.org/abs/2111.09886>"),fc.forEach(o),ll=l(ta,`__.
This model is a TensorFlow
`),ro=r(ta,"A",{href:!0,rel:!0});var uc=n(ro);dl=l(uc,"tf.keras.layers.Layer"),uc.forEach(o),cl=l(ta,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),ta.forEach(o),hl=u(ea),U=r(ea,"DIV",{class:!0});var _t=n(U);w(no.$$.fragment,_t),pl=u(_t),De=r(_t,"P",{});var oa=n(De);ml=l(oa,"The "),No=r(oa,"A",{href:!0});var gc=n(No);fl=l(gc,"TFDeiTForMaskedImageModeling"),gc.forEach(o),ul=l(oa," forward method, overrides the "),Ha=r(oa,"CODE",{});var _c=n(Ha);gl=l(_c,"__call__"),_c.forEach(o),_l=l(oa," special method."),oa.forEach(o),Tl=u(_t),w(tt.$$.fragment,_t),bl=u(_t),w(ot.$$.fragment,_t),_t.forEach(o),ea.forEach(o),Ls=u(t),ke=r(t,"H2",{class:!0});var ar=n(ke);at=r(ar,"A",{id:!0,class:!0,href:!0});var Tc=n(at);Ua=r(Tc,"SPAN",{});var bc=n(Ua);w(io.$$.fragment,bc),bc.forEach(o),Tc.forEach(o),vl=u(ar),Ra=r(ar,"SPAN",{});var vc=n(Ra);wl=l(vc,"TFDeiTForImageClassification"),vc.forEach(o),ar.forEach(o),Ws=u(t),O=r(t,"DIV",{class:!0});var Tt=n(O);w(lo.$$.fragment,Tt),$l=u(Tt),Ja=r(Tt,"P",{});var wc=n(Ja);yl=l(wc,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wc.forEach(o),Dl=u(Tt),co=r(Tt,"P",{});var sr=n(co);kl=l(sr,`This model is a TensorFlow
`),ho=r(sr,"A",{href:!0,rel:!0});var $c=n(ho);Fl=l($c,"tf.keras.layers.Layer"),$c.forEach(o),xl=l(sr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),sr.forEach(o),Il=u(Tt),R=r(Tt,"DIV",{class:!0});var bt=n(R);w(po.$$.fragment,bt),Ml=u(bt),Fe=r(bt,"P",{});var aa=n(Fe);El=l(aa,"The "),Lo=r(aa,"A",{href:!0});var yc=n(Lo);jl=l(yc,"TFDeiTForImageClassification"),yc.forEach(o),Cl=l(aa," forward method, overrides the "),Ga=r(aa,"CODE",{});var Dc=n(Ga);Pl=l(Dc,"__call__"),Dc.forEach(o),ql=l(aa," special method."),aa.forEach(o),zl=u(bt),w(st.$$.fragment,bt),Al=u(bt),w(rt.$$.fragment,bt),bt.forEach(o),Tt.forEach(o),Ss=u(t),xe=r(t,"H2",{class:!0});var rr=n(xe);nt=r(rr,"A",{id:!0,class:!0,href:!0});var kc=n(nt);Ka=r(kc,"SPAN",{});var Fc=n(Ka);w(mo.$$.fragment,Fc),Fc.forEach(o),kc.forEach(o),Ol=u(rr),Xa=r(rr,"SPAN",{});var xc=n(Xa);Nl=l(xc,"TFDeiTForImageClassificationWithTeacher"),xc.forEach(o),rr.forEach(o),Vs=u(t),j=r(t,"DIV",{class:!0});var K=n(j);w(fo.$$.fragment,K),Ll=u(K),Za=r(K,"P",{});var Ic=n(Za);Wl=l(Ic,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Ic.forEach(o),Sl=u(K),Qa=r(K,"P",{});var Mc=n(Qa);Vl=l(Mc,".. warning::"),Mc.forEach(o),Bl=u(K),Ya=r(K,"P",{});var Ec=n(Ya);Hl=l(Ec,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Ec.forEach(o),Ul=u(K),uo=r(K,"P",{});var nr=n(uo);Rl=l(nr,`This model is a TensorFlow
`),go=r(nr,"A",{href:!0,rel:!0});var jc=n(go);Jl=l(jc,"tf.keras.layers.Layer"),jc.forEach(o),Gl=l(nr,`. Use it as a regular
TensorFlow Module and refer to the TensorFlow documentation for all matter related to general usage and behavior.`),nr.forEach(o),Kl=u(K),J=r(K,"DIV",{class:!0});var vt=n(J);w(_o.$$.fragment,vt),Xl=u(vt),Ie=r(vt,"P",{});var sa=n(Ie);Zl=l(sa,"The "),Wo=r(sa,"A",{href:!0});var Cc=n(Wo);Ql=l(Cc,"TFDeiTForImageClassificationWithTeacher"),Cc.forEach(o),Yl=l(sa," forward method, overrides the "),es=r(sa,"CODE",{});var Pc=n(es);ed=l(Pc,"__call__"),Pc.forEach(o),td=l(sa," special method."),sa.forEach(o),od=u(vt),w(it.$$.fragment,vt),ad=u(vt),w(lt.$$.fragment,vt),vt.forEach(o),K.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(rh)),m(h,"id","deit"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#deit"),m(p,"class","relative group"),m(qe,"id","overview"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#overview"),m(re,"class","relative group"),m($t,"href","https://arxiv.org/abs/2012.12877"),m($t,"rel","nofollow"),m(vo,"href","vit"),m(yt,"href","https://arxiv.org/abs/2010.11929"),m(yt,"rel","nofollow"),m(Do,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTForImageClassification"),m(ko,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(Fo,"href","/docs/transformers/pr_17806/en/model_doc/vit#transformers.ViTModel"),m(xo,"href","/docs/transformers/pr_17806/en/model_doc/vit#transformers.ViTForImageClassification"),m(Io,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTFeatureExtractor"),m(Dt,"href","https://huggingface.co/nielsr"),m(Dt,"rel","nofollow"),m(kt,"href","https://huggingface.co/amyeroberts"),m(kt,"rel","nofollow"),m(ze,"id","transformers.DeiTConfig"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#transformers.DeiTConfig"),m(ie,"class","relative group"),m(Mo,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTModel"),m(It,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),m(It,"rel","nofollow"),m(Eo,"href","/docs/transformers/pr_17806/en/main_classes/configuration#transformers.PretrainedConfig"),m(jo,"href","/docs/transformers/pr_17806/en/main_classes/configuration#transformers.PretrainedConfig"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"id","transformers.DeiTFeatureExtractor"),m(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oe,"href","#transformers.DeiTFeatureExtractor"),m(ce,"class","relative group"),m(Co,"href","/docs/transformers/pr_17806/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),m(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"id","transformers.DeiTModel"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.DeiTModel"),m(he,"class","relative group"),m(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(At,"rel","nofollow"),m(Po,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTModel"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"id","transformers.DeiTForMaskedImageModeling"),m(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ve,"href","#transformers.DeiTForMaskedImageModeling"),m(me,"class","relative group"),m(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Wt,"rel","nofollow"),m(qo,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"id","transformers.DeiTForImageClassification"),m(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ue,"href","#transformers.DeiTForImageClassification"),m(ge,"class","relative group"),m(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ut,"rel","nofollow"),m(zo,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTForImageClassification"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.DeiTForImageClassificationWithTeacher"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.DeiTForImageClassificationWithTeacher"),m(Te,"class","relative group"),m(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Xt,"rel","nofollow"),m(Ao,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"id","transformers.TFDeiTModel"),m(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ze,"href","#transformers.TFDeiTModel"),m(ve,"class","relative group"),m(to,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(to,"rel","nofollow"),m(Oo,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.TFDeiTModel"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"id","transformers.TFDeiTForMaskedImageModeling"),m(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(et,"href","#transformers.TFDeiTForMaskedImageModeling"),m($e,"class","relative group"),m(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ro,"rel","nofollow"),m(No,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.TFDeiTForMaskedImageModeling"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"id","transformers.TFDeiTForImageClassification"),m(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(at,"href","#transformers.TFDeiTForImageClassification"),m(ke,"class","relative group"),m(ho,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(ho,"rel","nofollow"),m(Lo,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.TFDeiTForImageClassification"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"id","transformers.TFDeiTForImageClassificationWithTeacher"),m(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(nt,"href","#transformers.TFDeiTForImageClassificationWithTeacher"),m(xe,"class","relative group"),m(go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer"),m(go,"rel","nofollow"),m(Wo,"href","/docs/transformers/pr_17806/en/model_doc/deit#transformers.TFDeiTForImageClassificationWithTeacher"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,b,g),T(t,p,g),e(p,h),e(h,_),$(a,_,null),e(p,c),e(p,x),e(x,ir),T(t,us,g),$(Pe,t,g),T(t,gs,g),T(t,re,g),e(re,qe),e(qe,ra),$(wt,ra,null),e(re,lr),e(re,na),e(na,dr),T(t,_s,g),T(t,L,g),e(L,cr),e(L,$t),e($t,hr),e(L,pr),e(L,vo),e(vo,mr),e(L,fr),e(L,yt),e(yt,ur),e(L,gr),T(t,Ts,g),T(t,wo,g),e(wo,_r),T(t,bs,g),T(t,$o,g),e($o,ia),e(ia,Tr),T(t,vs,g),T(t,yo,g),e(yo,br),T(t,ws,g),T(t,P,g),e(P,la),e(la,vr),e(P,wr),e(P,ne),e(ne,$r),e(ne,Do),e(Do,yr),e(ne,Dr),e(ne,ko),e(ko,kr),e(ne,Fr),e(P,xr),e(P,da),e(da,Ir),e(P,Mr),e(P,ca),e(ca,Er),e(P,jr),e(P,I),e(I,Cr),e(I,Fo),e(Fo,Pr),e(I,qr),e(I,xo),e(xo,zr),e(I,Ar),e(I,ha),e(ha,Or),e(I,Nr),e(I,pa),e(pa,Lr),e(I,Wr),e(I,ma),e(ma,Sr),e(I,Vr),e(I,fa),e(fa,Br),e(I,Hr),e(I,Io),e(Io,Ur),e(I,Rr),T(t,$s,g),T(t,oe,g),e(oe,Jr),e(oe,Dt),e(Dt,Gr),e(oe,Kr),e(oe,kt),e(kt,Xr),e(oe,Zr),T(t,ys,g),T(t,ie,g),e(ie,ze),e(ze,ua),$(Ft,ua,null),e(ie,Qr),e(ie,ga),e(ga,Yr),T(t,Ds,g),T(t,q,g),$(xt,q,null),e(q,en),e(q,le),e(le,tn),e(le,Mo),e(Mo,on),e(le,an),e(le,It),e(It,sn),e(le,rn),e(q,nn),e(q,de),e(de,ln),e(de,Eo),e(Eo,dn),e(de,cn),e(de,jo),e(jo,hn),e(de,pn),e(q,mn),$(Ae,q,null),T(t,ks,g),T(t,ce,g),e(ce,Oe),e(Oe,_a),$(Mt,_a,null),e(ce,fn),e(ce,Ta),e(Ta,un),T(t,Fs,g),T(t,z,g),$(Et,z,null),e(z,gn),e(z,ba),e(ba,_n),e(z,Tn),e(z,jt),e(jt,bn),e(jt,Co),e(Co,vn),e(jt,wn),e(z,$n),e(z,ae),$(Ct,ae,null),e(ae,yn),e(ae,va),e(va,Dn),e(ae,kn),$(Ne,ae,null),T(t,xs,g),T(t,he,g),e(he,Le),e(Le,wa),$(Pt,wa,null),e(he,Fn),e(he,$a),e($a,xn),T(t,Is,g),T(t,Z,g),$(qt,Z,null),e(Z,In),e(Z,zt),e(zt,Mn),e(zt,At),e(At,En),e(zt,jn),e(Z,Cn),e(Z,W),$(Ot,W,null),e(W,Pn),e(W,pe),e(pe,qn),e(pe,Po),e(Po,zn),e(pe,An),e(pe,ya),e(ya,On),e(pe,Nn),e(W,Ln),$(We,W,null),e(W,Wn),$(Se,W,null),T(t,Ms,g),T(t,me,g),e(me,Ve),e(Ve,Da),$(Nt,Da,null),e(me,Sn),e(me,ka),e(ka,Vn),T(t,Es,g),T(t,Q,g),$(Lt,Q,null),e(Q,Bn),e(Q,fe),e(fe,Hn),e(fe,Fa),e(Fa,Un),e(fe,Rn),e(fe,Wt),e(Wt,Jn),e(fe,Gn),e(Q,Kn),e(Q,S),$(St,S,null),e(S,Xn),e(S,ue),e(ue,Zn),e(ue,qo),e(qo,Qn),e(ue,Yn),e(ue,xa),e(xa,ei),e(ue,ti),e(S,oi),$(Be,S,null),e(S,ai),$(He,S,null),T(t,js,g),T(t,ge,g),e(ge,Ue),e(Ue,Ia),$(Vt,Ia,null),e(ge,si),e(ge,Ma),e(Ma,ri),T(t,Cs,g),T(t,A,g),$(Bt,A,null),e(A,ni),e(A,Ea),e(Ea,ii),e(A,li),e(A,Ht),e(Ht,di),e(Ht,Ut),e(Ut,ci),e(Ht,hi),e(A,pi),e(A,V),$(Rt,V,null),e(V,mi),e(V,_e),e(_e,fi),e(_e,zo),e(zo,ui),e(_e,gi),e(_e,ja),e(ja,_i),e(_e,Ti),e(V,bi),$(Re,V,null),e(V,vi),$(Je,V,null),T(t,Ps,g),T(t,Te,g),e(Te,Ge),e(Ge,Ca),$(Jt,Ca,null),e(Te,wi),e(Te,Pa),e(Pa,$i),T(t,qs,g),T(t,E,g),$(Gt,E,null),e(E,yi),e(E,qa),e(qa,Di),e(E,ki),e(E,za),e(za,Fi),e(E,xi),e(E,Aa),e(Aa,Ii),e(E,Mi),e(E,Kt),e(Kt,Ei),e(Kt,Xt),e(Xt,ji),e(Kt,Ci),e(E,Pi),e(E,B),$(Zt,B,null),e(B,qi),e(B,be),e(be,zi),e(be,Ao),e(Ao,Ai),e(be,Oi),e(be,Oa),e(Oa,Ni),e(be,Li),e(B,Wi),$(Ke,B,null),e(B,Si),$(Xe,B,null),T(t,zs,g),T(t,ve,g),e(ve,Ze),e(Ze,Na),$(Qt,Na,null),e(ve,Vi),e(ve,La),e(La,Bi),T(t,As,g),T(t,Y,g),$(Yt,Y,null),e(Y,Hi),e(Y,eo),e(eo,Ui),e(eo,to),e(to,Ri),e(eo,Ji),e(Y,Gi),e(Y,H),$(oo,H,null),e(H,Ki),e(H,we),e(we,Xi),e(we,Oo),e(Oo,Zi),e(we,Qi),e(we,Wa),e(Wa,Yi),e(we,el),e(H,tl),$(Qe,H,null),e(H,ol),$(Ye,H,null),T(t,Os,g),T(t,$e,g),e($e,et),e(et,Sa),$(ao,Sa,null),e($e,al),e($e,Va),e(Va,sl),T(t,Ns,g),T(t,ee,g),$(so,ee,null),e(ee,rl),e(ee,ye),e(ye,nl),e(ye,Ba),e(Ba,il),e(ye,ll),e(ye,ro),e(ro,dl),e(ye,cl),e(ee,hl),e(ee,U),$(no,U,null),e(U,pl),e(U,De),e(De,ml),e(De,No),e(No,fl),e(De,ul),e(De,Ha),e(Ha,gl),e(De,_l),e(U,Tl),$(tt,U,null),e(U,bl),$(ot,U,null),T(t,Ls,g),T(t,ke,g),e(ke,at),e(at,Ua),$(io,Ua,null),e(ke,vl),e(ke,Ra),e(Ra,wl),T(t,Ws,g),T(t,O,g),$(lo,O,null),e(O,$l),e(O,Ja),e(Ja,yl),e(O,Dl),e(O,co),e(co,kl),e(co,ho),e(ho,Fl),e(co,xl),e(O,Il),e(O,R),$(po,R,null),e(R,Ml),e(R,Fe),e(Fe,El),e(Fe,Lo),e(Lo,jl),e(Fe,Cl),e(Fe,Ga),e(Ga,Pl),e(Fe,ql),e(R,zl),$(st,R,null),e(R,Al),$(rt,R,null),T(t,Ss,g),T(t,xe,g),e(xe,nt),e(nt,Ka),$(mo,Ka,null),e(xe,Ol),e(xe,Xa),e(Xa,Nl),T(t,Vs,g),T(t,j,g),$(fo,j,null),e(j,Ll),e(j,Za),e(Za,Wl),e(j,Sl),e(j,Qa),e(Qa,Vl),e(j,Bl),e(j,Ya),e(Ya,Hl),e(j,Ul),e(j,uo),e(uo,Rl),e(uo,go),e(go,Jl),e(uo,Gl),e(j,Kl),e(j,J),$(_o,J,null),e(J,Xl),e(J,Ie),e(Ie,Zl),e(Ie,Wo),e(Wo,Ql),e(Ie,Yl),e(Ie,es),e(es,ed),e(Ie,td),e(J,od),$(it,J,null),e(J,ad),$(lt,J,null),Bs=!0},p(t,[g]){const To={};g&2&&(To.$$scope={dirty:g,ctx:t}),Pe.$set(To);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:t}),Ae.$set(ts);const os={};g&2&&(os.$$scope={dirty:g,ctx:t}),Ne.$set(os);const as={};g&2&&(as.$$scope={dirty:g,ctx:t}),We.$set(as);const bo={};g&2&&(bo.$$scope={dirty:g,ctx:t}),Se.$set(bo);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:t}),Be.$set(ss);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:t}),He.$set(rs);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:t}),Re.$set(ns);const te={};g&2&&(te.$$scope={dirty:g,ctx:t}),Je.$set(te);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),Ke.$set(is);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Xe.$set(ls);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),Qe.$set(ds);const cs={};g&2&&(cs.$$scope={dirty:g,ctx:t}),Ye.$set(cs);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:t}),tt.$set(hs);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:t}),ot.$set(ps);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:t}),st.$set(ms);const N={};g&2&&(N.$$scope={dirty:g,ctx:t}),rt.$set(N);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),it.$set(fs);const Me={};g&2&&(Me.$$scope={dirty:g,ctx:t}),lt.$set(Me)},i(t){Bs||(y(a.$$.fragment,t),y(Pe.$$.fragment,t),y(wt.$$.fragment,t),y(Ft.$$.fragment,t),y(xt.$$.fragment,t),y(Ae.$$.fragment,t),y(Mt.$$.fragment,t),y(Et.$$.fragment,t),y(Ct.$$.fragment,t),y(Ne.$$.fragment,t),y(Pt.$$.fragment,t),y(qt.$$.fragment,t),y(Ot.$$.fragment,t),y(We.$$.fragment,t),y(Se.$$.fragment,t),y(Nt.$$.fragment,t),y(Lt.$$.fragment,t),y(St.$$.fragment,t),y(Be.$$.fragment,t),y(He.$$.fragment,t),y(Vt.$$.fragment,t),y(Bt.$$.fragment,t),y(Rt.$$.fragment,t),y(Re.$$.fragment,t),y(Je.$$.fragment,t),y(Jt.$$.fragment,t),y(Gt.$$.fragment,t),y(Zt.$$.fragment,t),y(Ke.$$.fragment,t),y(Xe.$$.fragment,t),y(Qt.$$.fragment,t),y(Yt.$$.fragment,t),y(oo.$$.fragment,t),y(Qe.$$.fragment,t),y(Ye.$$.fragment,t),y(ao.$$.fragment,t),y(so.$$.fragment,t),y(no.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(po.$$.fragment,t),y(st.$$.fragment,t),y(rt.$$.fragment,t),y(mo.$$.fragment,t),y(fo.$$.fragment,t),y(_o.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),Bs=!0)},o(t){D(a.$$.fragment,t),D(Pe.$$.fragment,t),D(wt.$$.fragment,t),D(Ft.$$.fragment,t),D(xt.$$.fragment,t),D(Ae.$$.fragment,t),D(Mt.$$.fragment,t),D(Et.$$.fragment,t),D(Ct.$$.fragment,t),D(Ne.$$.fragment,t),D(Pt.$$.fragment,t),D(qt.$$.fragment,t),D(Ot.$$.fragment,t),D(We.$$.fragment,t),D(Se.$$.fragment,t),D(Nt.$$.fragment,t),D(Lt.$$.fragment,t),D(St.$$.fragment,t),D(Be.$$.fragment,t),D(He.$$.fragment,t),D(Vt.$$.fragment,t),D(Bt.$$.fragment,t),D(Rt.$$.fragment,t),D(Re.$$.fragment,t),D(Je.$$.fragment,t),D(Jt.$$.fragment,t),D(Gt.$$.fragment,t),D(Zt.$$.fragment,t),D(Ke.$$.fragment,t),D(Xe.$$.fragment,t),D(Qt.$$.fragment,t),D(Yt.$$.fragment,t),D(oo.$$.fragment,t),D(Qe.$$.fragment,t),D(Ye.$$.fragment,t),D(ao.$$.fragment,t),D(so.$$.fragment,t),D(no.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(io.$$.fragment,t),D(lo.$$.fragment,t),D(po.$$.fragment,t),D(st.$$.fragment,t),D(rt.$$.fragment,t),D(mo.$$.fragment,t),D(fo.$$.fragment,t),D(_o.$$.fragment,t),D(it.$$.fragment,t),D(lt.$$.fragment,t),Bs=!1},d(t){o(d),t&&o(b),t&&o(p),k(a),t&&o(us),k(Pe,t),t&&o(gs),t&&o(re),k(wt),t&&o(_s),t&&o(L),t&&o(Ts),t&&o(wo),t&&o(bs),t&&o($o),t&&o(vs),t&&o(yo),t&&o(ws),t&&o(P),t&&o($s),t&&o(oe),t&&o(ys),t&&o(ie),k(Ft),t&&o(Ds),t&&o(q),k(xt),k(Ae),t&&o(ks),t&&o(ce),k(Mt),t&&o(Fs),t&&o(z),k(Et),k(Ct),k(Ne),t&&o(xs),t&&o(he),k(Pt),t&&o(Is),t&&o(Z),k(qt),k(Ot),k(We),k(Se),t&&o(Ms),t&&o(me),k(Nt),t&&o(Es),t&&o(Q),k(Lt),k(St),k(Be),k(He),t&&o(js),t&&o(ge),k(Vt),t&&o(Cs),t&&o(A),k(Bt),k(Rt),k(Re),k(Je),t&&o(Ps),t&&o(Te),k(Jt),t&&o(qs),t&&o(E),k(Gt),k(Zt),k(Ke),k(Xe),t&&o(zs),t&&o(ve),k(Qt),t&&o(As),t&&o(Y),k(Yt),k(oo),k(Qe),k(Ye),t&&o(Os),t&&o($e),k(ao),t&&o(Ns),t&&o(ee),k(so),k(no),k(tt),k(ot),t&&o(Ls),t&&o(ke),k(io),t&&o(Ws),t&&o(O),k(lo),k(po),k(st),k(rt),t&&o(Ss),t&&o(xe),k(mo),t&&o(Vs),t&&o(j),k(fo),k(_o),k(it),k(lt)}}}const rh={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"},{local:"transformers.TFDeiTModel",title:"TFDeiTModel"},{local:"transformers.TFDeiTForMaskedImageModeling",title:"TFDeiTForMaskedImageModeling"},{local:"transformers.TFDeiTForImageClassification",title:"TFDeiTForImageClassification"},{local:"transformers.TFDeiTForImageClassificationWithTeacher",title:"TFDeiTForImageClassificationWithTeacher"}],title:"DeiT"};function nh(F){return Nc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mh extends qc{constructor(d){super();zc(this,d,nh,sh,Ac,{})}}export{mh as default,rh as metadata};
