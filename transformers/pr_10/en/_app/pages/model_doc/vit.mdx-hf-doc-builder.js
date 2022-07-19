import{S as Nh,i as Lh,s as Dh,e as a,k as p,w as b,t as n,M as Oh,c as r,d as t,m as h,a as s,x as w,h as i,b as c,G as e,g as _,y as $,q as y,o as x,B as F,v as Sh,L as At}from"../../chunks/vendor-hf-doc-builder.js";import{T as _e}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Pt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Wh(k){let d,T,u,f,v;return{c(){d=a("p"),T=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),u=a("a"),f=n("Github Issue"),v=n("."),this.h()},l(l){d=r(l,"P",{});var m=s(d);T=i(m,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),u=r(m,"A",{href:!0,rel:!0});var V=s(u);f=i(V,"Github Issue"),V.forEach(t),v=i(m,"."),m.forEach(t),this.h()},h(){c(u,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(u,"rel","nofollow")},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function Bh(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Example:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function Uh(k){let d,T;return{c(){d=a("p"),T=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){d=r(u,"P",{});var f=s(d);T=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(t)},m(u,f){_(u,d,f),e(d,T)},d(u){u&&t(d)}}}function Rh(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function Hh(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Example:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function Jh(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function Kh(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=a("p"),T=n("Examples:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Examples:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function Gh(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function Xh(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Example:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function Zh(k){let d,T,u,f,v,l,m,V,pe,R,M,ee,j,U,K,P,he,G;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),u=p(),f=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),V=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=p(),M=a("p"),ee=n("This second option is useful when using "),j=a("code"),U=n("tf.keras.Model.fit"),K=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),he=n("model(inputs)"),G=n(".")},l(E){d=r(E,"P",{});var I=s(d);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=h(E),f=r(E,"UL",{});var z=s(f);v=r(z,"LI",{});var $e=s(v);l=i($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=h(z),V=r(z,"LI",{});var X=s(V);pe=i(X,"having all inputs as a list, tuple or dict in the first positional arguments."),X.forEach(t),z.forEach(t),R=h(E),M=r(E,"P",{});var L=s(M);ee=i(L,"This second option is useful when using "),j=r(L,"CODE",{});var ye=s(j);U=i(ye,"tf.keras.Model.fit"),ye.forEach(t),K=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=r(L,"CODE",{});var Te=s(P);he=i(Te,"model(inputs)"),Te.forEach(t),G=i(L,"."),L.forEach(t)},m(E,I){_(E,d,I),e(d,T),_(E,u,I),_(E,f,I),e(f,v),e(v,l),e(f,m),e(f,V),e(V,pe),_(E,R,I),_(E,M,I),e(M,ee),e(M,j),e(j,U),e(M,K),e(M,P),e(P,he),e(M,G)},d(E){E&&t(d),E&&t(u),E&&t(f),E&&t(R),E&&t(M)}}}function Qh(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function Yh(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Example:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function ef(k){let d,T,u,f,v,l,m,V,pe,R,M,ee,j,U,K,P,he,G;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),u=p(),f=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),V=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=p(),M=a("p"),ee=n("This second option is useful when using "),j=a("code"),U=n("tf.keras.Model.fit"),K=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),he=n("model(inputs)"),G=n(".")},l(E){d=r(E,"P",{});var I=s(d);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=h(E),f=r(E,"UL",{});var z=s(f);v=r(z,"LI",{});var $e=s(v);l=i($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=h(z),V=r(z,"LI",{});var X=s(V);pe=i(X,"having all inputs as a list, tuple or dict in the first positional arguments."),X.forEach(t),z.forEach(t),R=h(E),M=r(E,"P",{});var L=s(M);ee=i(L,"This second option is useful when using "),j=r(L,"CODE",{});var ye=s(j);U=i(ye,"tf.keras.Model.fit"),ye.forEach(t),K=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=r(L,"CODE",{});var Te=s(P);he=i(Te,"model(inputs)"),Te.forEach(t),G=i(L,"."),L.forEach(t)},m(E,I){_(E,d,I),e(d,T),_(E,u,I),_(E,f,I),e(f,v),e(v,l),e(f,m),e(f,V),e(V,pe),_(E,R,I),_(E,M,I),e(M,ee),e(M,j),e(j,U),e(M,K),e(M,P),e(P,he),e(M,G)},d(E){E&&t(d),E&&t(u),E&&t(f),E&&t(R),E&&t(M)}}}function tf(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function of(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Example:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function af(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function rf(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Examples:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Examples:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function sf(k){let d,T,u,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var V=s(u);f=i(V,"Module"),V.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,u),e(u,f),e(d,v)},d(l){l&&t(d)}}}function nf(k){let d,T,u,f,v;return f=new qt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = FlaxViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=a("p"),T=n("Example:"),u=p(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=s(d);T=i(m,"Example:"),m.forEach(t),u=h(l),w(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,u,m),$(f,l,m),v=!0},p:At,i(l){v||(y(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(u),F(f,l)}}}function lf(k){let d,T,u,f,v,l,m,V,pe,R,M,ee,j,U,K,P,he,G,E,I,z,$e,X,L,ye,Te,ta,Ys,ss,oa,Ua,en,ns,aa,tn,is,N,zt,on,Nt,an,rn,sn,Ra,nn,ln,Lt,dn,ra,cn,pn,hn,xe,fn,Ha,mn,un,Dt,gn,_n,vn,Fe,Tn,Ot,bn,wn,St,$n,yn,xn,Ve,Fn,Wt,Vn,kn,Bt,En,Mn,In,Ja,jn,ls,sa,Cn,ds,te,Ka,C,na,Pn,An,ia,qn,zn,la,Nn,Ln,Ga,Dn,On,Xa,Sn,Wn,Za,Bn,Un,Qa,Rn,Hn,da,Jn,Kn,Gn,Ya,ca,pa,Xn,Zn,Qn,er,Ut,Yn,Rt,ei,ti,oi,tr,ha,fa,ai,ri,cs,be,si,Ht,ni,ii,Jt,li,di,ps,He,ci,Kt,pi,hi,hs,ke,Je,or,Gt,fi,ar,mi,fs,Z,Xt,ui,Ee,gi,ma,_i,vi,Zt,Ti,bi,wi,Me,$i,ua,yi,xi,ga,Fi,Vi,ki,Ke,ms,Ie,Ge,rr,Qt,Ei,sr,Mi,us,Q,Yt,Ii,nr,ji,Ci,eo,Pi,_a,Ai,qi,zi,we,to,Ni,ir,Li,Di,Xe,gs,je,Ze,lr,oo,Oi,dr,Si,_s,fe,ao,Wi,ro,Bi,so,Ui,Ri,Hi,oe,no,Ji,Ce,Ki,va,Gi,Xi,cr,Zi,Qi,Yi,Qe,el,Ye,vs,Pe,et,pr,io,tl,hr,ol,Ts,me,lo,al,Ae,rl,co,sl,nl,po,il,ll,dl,ae,ho,cl,qe,pl,Ta,hl,fl,fr,ml,ul,gl,tt,_l,ot,bs,ze,at,mr,fo,vl,ur,Tl,ws,Y,mo,bl,gr,wl,$l,uo,yl,go,xl,Fl,Vl,re,_o,kl,Ne,El,ba,Ml,Il,_r,jl,Cl,Pl,rt,Al,st,$s,Le,nt,vr,vo,ql,Tr,zl,ys,D,To,Nl,br,Ll,Dl,bo,Ol,wa,Sl,Wl,Bl,wo,Ul,$o,Rl,Hl,Jl,it,Kl,se,yo,Gl,De,Xl,$a,Zl,Ql,wr,Yl,ed,td,lt,od,dt,xs,Oe,ct,$r,xo,ad,yr,rd,Fs,O,Fo,sd,xr,nd,id,Vo,ld,ya,dd,cd,pd,ko,hd,Eo,fd,md,ud,pt,gd,ne,Mo,_d,Se,vd,xa,Td,bd,Fr,wd,$d,yd,ht,xd,ft,Vs,We,mt,Vr,Io,Fd,kr,Vd,ks,A,jo,kd,Er,Ed,Md,Co,Id,Fa,jd,Cd,Pd,Po,Ad,Ao,qd,zd,Nd,Mr,Ld,Dd,ue,Ir,qo,Od,Sd,jr,zo,Wd,Bd,Cr,No,Ud,Rd,Pr,Lo,Hd,Jd,ie,Do,Kd,Be,Gd,Ar,Xd,Zd,qr,Qd,Yd,ec,ut,tc,gt,Es,Ue,_t,zr,Oo,oc,Nr,ac,Ms,q,So,rc,Lr,sc,nc,Wo,ic,Va,lc,dc,cc,Bo,pc,Uo,hc,fc,mc,Dr,uc,gc,ge,Or,Ro,_c,vc,Sr,Ho,Tc,bc,Wr,Jo,wc,$c,Br,Ko,yc,xc,le,Go,Fc,Re,Vc,Ur,kc,Ec,Rr,Mc,Ic,jc,vt,Cc,Tt,Is;return l=new ve({}),M=new _e({props:{$$slots:{default:[Wh]},$$scope:{ctx:k}}}),P=new ve({}),Gt=new ve({}),Xt=new B({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/configuration_vit.py#L35"}}),Ke=new Pt({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[Bh]},$$scope:{ctx:k}}}),Qt=new ve({}),Yt=new B({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),to=new B({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_10/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/feature_extraction_vit.py#L82",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_10/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Xe=new _e({props:{warning:!0,$$slots:{default:[Uh]},$$scope:{ctx:k}}}),oo=new ve({}),ao=new B({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_vit.py#L497"}}),no=new B({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_10/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_vit.py#L522",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new _e({props:{$$slots:{default:[Rh]},$$scope:{ctx:k}}}),Ye=new Pt({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[Hh]},$$scope:{ctx:k}}}),io=new ve({}),lo=new B({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_vit.py#L604"}}),ho=new B({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForMaskedImageModeling.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_10/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_vit.py#L622",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tt=new _e({props:{$$slots:{default:[Jh]},$$scope:{ctx:k}}}),ot=new Pt({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[Kh]},$$scope:{ctx:k}}}),fo=new ve({}),mo=new B({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_vit.py#L718"}}),_o=new B({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_10/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_vit.py#L731",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new _e({props:{$$slots:{default:[Gh]},$$scope:{ctx:k}}}),st=new Pt({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[Xh]},$$scope:{ctx:k}}}),vo=new ve({}),To=new B({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_tf_vit.py#L647"}}),it=new _e({props:{$$slots:{default:[Zh]},$$scope:{ctx:k}}}),yo=new B({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTModel.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_10/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_tf_vit.py#L653",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lt=new _e({props:{$$slots:{default:[Qh]},$$scope:{ctx:k}}}),dt=new Pt({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[Yh]},$$scope:{ctx:k}}}),xo=new ve({}),Fo=new B({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_tf_vit.py#L725"}}),pt=new _e({props:{$$slots:{default:[ef]},$$scope:{ctx:k}}}),Mo=new B({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTForImageClassification.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_10/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_tf_vit.py#L739",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new _e({props:{$$slots:{default:[tf]},$$scope:{ctx:k}}}),ft=new Pt({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[of]},$$scope:{ctx:k}}}),Io=new ve({}),jo=new B({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_flax_vit.py#L536"}}),Do=new B({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_flax_vit.py#L451",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new _e({props:{$$slots:{default:[af]},$$scope:{ctx:k}}}),gt=new Pt({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[rf]},$$scope:{ctx:k}}}),Oo=new ve({}),So=new B({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_flax_vit.py#L617"}}),Go=new B({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_10/src/transformers/models/vit/modeling_flax_vit.py#L451",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_10/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new _e({props:{$$slots:{default:[sf]},$$scope:{ctx:k}}}),Tt=new Pt({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[nf]},$$scope:{ctx:k}}}),{c(){d=a("meta"),T=p(),u=a("h1"),f=a("a"),v=a("span"),b(l.$$.fragment),m=p(),V=a("span"),pe=n("Vision Transformer (ViT)"),R=p(),b(M.$$.fragment),ee=p(),j=a("h2"),U=a("a"),K=a("span"),b(P.$$.fragment),he=p(),G=a("span"),E=n("Overview"),I=p(),z=a("p"),$e=n("The Vision Transformer (ViT) model was proposed in "),X=a("a"),L=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),ye=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=p(),ta=a("p"),Ys=n("The abstract from the paper is the following:"),ss=p(),oa=a("p"),Ua=a("em"),en=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ns=p(),aa=a("p"),tn=n("Tips:"),is=p(),N=a("ul"),zt=a("li"),on=n("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Nt=a("a"),an=n("here"),rn=n("."),sn=p(),Ra=a("li"),nn=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),ln=p(),Lt=a("li"),dn=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),ra=a("a"),cn=n("ViTFeatureExtractor"),pn=n(" to resize (or rescale) and normalize images for the model."),hn=p(),xe=a("li"),fn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ha=a("code"),mn=n("google/vit-base-patch16-224"),un=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Dt=a("a"),gn=n("hub"),_n=n("."),vn=p(),Fe=a("li"),Tn=n("The available checkpoints are either (1) pre-trained on "),Ot=a("a"),bn=n("ImageNet-21k"),wn=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),St=a("a"),$n=n("ImageNet"),yn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),xn=p(),Ve=a("li"),Fn=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Wt=a("a"),Vn=n("(Touvron et al., 2019)"),kn=n(", "),Bt=a("a"),En=n(`(Kolesnikov
et al., 2020)`),Mn=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),In=p(),Ja=a("li"),jn=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ls=p(),sa=a("p"),Cn=n("Following the original Vision Transformer, some follow-up works have been made:"),ds=p(),te=a("ul"),Ka=a("li"),C=a("p"),na=a("a"),Pn=n("DeiT"),An=n(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),ia=a("a"),qn=n("ViTModel"),zn=n(` or
`),la=a("a"),Nn=n("ViTForImageClassification"),Ln=n(". There are 4 variants available (in 3 different sizes): "),Ga=a("em"),Dn=n("facebook/deit-tiny-patch16-224"),On=n(`,
`),Xa=a("em"),Sn=n("facebook/deit-small-patch16-224"),Wn=n(", "),Za=a("em"),Bn=n("facebook/deit-base-patch16-224"),Un=n(" and "),Qa=a("em"),Rn=n("facebook/deit-base-patch16-384"),Hn=n(`. Note that one should
use `),da=a("a"),Jn=n("DeiTFeatureExtractor"),Kn=n(" in order to prepare images for the model."),Gn=p(),Ya=a("li"),ca=a("p"),pa=a("a"),Xn=n("BEiT"),Zn=n(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Qn=p(),er=a("li"),Ut=a("p"),Yn=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Rt=a("a"),ei=n("hub"),ti=n("."),oi=p(),tr=a("li"),ha=a("p"),fa=a("a"),ai=n("MAE"),ri=n(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),cs=p(),be=a("p"),si=n("This model was contributed by "),Ht=a("a"),ni=n("nielsr"),ii=n(`. The original code (written in JAX) can be
found `),Jt=a("a"),li=n("here"),di=n("."),ps=p(),He=a("p"),ci=n("Note that we converted the weights from Ross Wightman\u2019s "),Kt=a("a"),pi=n("timm library"),hi=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),hs=p(),ke=a("h2"),Je=a("a"),or=a("span"),b(Gt.$$.fragment),fi=p(),ar=a("span"),mi=n("ViTConfig"),fs=p(),Z=a("div"),b(Xt.$$.fragment),ui=p(),Ee=a("p"),gi=n("This is the configuration class to store the configuration of a "),ma=a("a"),_i=n("ViTModel"),vi=n(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Zt=a("a"),Ti=n("google/vit-base-patch16-224"),bi=n(" architecture."),wi=p(),Me=a("p"),$i=n("Configuration objects inherit from "),ua=a("a"),yi=n("PretrainedConfig"),xi=n(` and can be used to control the model outputs. Read the
documentation from `),ga=a("a"),Fi=n("PretrainedConfig"),Vi=n(" for more information."),ki=p(),b(Ke.$$.fragment),ms=p(),Ie=a("h2"),Ge=a("a"),rr=a("span"),b(Qt.$$.fragment),Ei=p(),sr=a("span"),Mi=n("ViTFeatureExtractor"),us=p(),Q=a("div"),b(Yt.$$.fragment),Ii=p(),nr=a("p"),ji=n("Constructs a ViT feature extractor."),Ci=p(),eo=a("p"),Pi=n("This feature extractor inherits from "),_a=a("a"),Ai=n("FeatureExtractionMixin"),qi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zi=p(),we=a("div"),b(to.$$.fragment),Ni=p(),ir=a("p"),Li=n("Main method to prepare for the model one or several image(s)."),Di=p(),b(Xe.$$.fragment),gs=p(),je=a("h2"),Ze=a("a"),lr=a("span"),b(oo.$$.fragment),Oi=p(),dr=a("span"),Si=n("ViTModel"),_s=p(),fe=a("div"),b(ao.$$.fragment),Wi=p(),ro=a("p"),Bi=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),so=a("a"),Ui=n("torch.nn.Module"),Ri=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hi=p(),oe=a("div"),b(no.$$.fragment),Ji=p(),Ce=a("p"),Ki=n("The "),va=a("a"),Gi=n("ViTModel"),Xi=n(" forward method, overrides the "),cr=a("code"),Zi=n("__call__"),Qi=n(" special method."),Yi=p(),b(Qe.$$.fragment),el=p(),b(Ye.$$.fragment),vs=p(),Pe=a("h2"),et=a("a"),pr=a("span"),b(io.$$.fragment),tl=p(),hr=a("span"),ol=n("ViTForMaskedImageModeling"),Ts=p(),me=a("div"),b(lo.$$.fragment),al=p(),Ae=a("p"),rl=n("ViT Model with a decoder on top for masked image modeling, as proposed in "),co=a("a"),sl=n("SimMIM"),nl=n(`.
This model is a PyTorch `),po=a("a"),il=n("torch.nn.Module"),ll=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=p(),ae=a("div"),b(ho.$$.fragment),cl=p(),qe=a("p"),pl=n("The "),Ta=a("a"),hl=n("ViTForMaskedImageModeling"),fl=n(" forward method, overrides the "),fr=a("code"),ml=n("__call__"),ul=n(" special method."),gl=p(),b(tt.$$.fragment),_l=p(),b(ot.$$.fragment),bs=p(),ze=a("h2"),at=a("a"),mr=a("span"),b(fo.$$.fragment),vl=p(),ur=a("span"),Tl=n("ViTForImageClassification"),ws=p(),Y=a("div"),b(mo.$$.fragment),bl=p(),gr=a("p"),wl=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),$l=p(),uo=a("p"),yl=n("This model is a PyTorch "),go=a("a"),xl=n("torch.nn.Module"),Fl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vl=p(),re=a("div"),b(_o.$$.fragment),kl=p(),Ne=a("p"),El=n("The "),ba=a("a"),Ml=n("ViTForImageClassification"),Il=n(" forward method, overrides the "),_r=a("code"),jl=n("__call__"),Cl=n(" special method."),Pl=p(),b(rt.$$.fragment),Al=p(),b(st.$$.fragment),$s=p(),Le=a("h2"),nt=a("a"),vr=a("span"),b(vo.$$.fragment),ql=p(),Tr=a("span"),zl=n("TFViTModel"),ys=p(),D=a("div"),b(To.$$.fragment),Nl=p(),br=a("p"),Ll=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Dl=p(),bo=a("p"),Ol=n("This model inherits from "),wa=a("a"),Sl=n("TFPreTrainedModel"),Wl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=p(),wo=a("p"),Ul=n("This model is also a "),$o=a("a"),Rl=n("tf.keras.Model"),Hl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jl=p(),b(it.$$.fragment),Kl=p(),se=a("div"),b(yo.$$.fragment),Gl=p(),De=a("p"),Xl=n("The "),$a=a("a"),Zl=n("TFViTModel"),Ql=n(" forward method, overrides the "),wr=a("code"),Yl=n("__call__"),ed=n(" special method."),td=p(),b(lt.$$.fragment),od=p(),b(dt.$$.fragment),xs=p(),Oe=a("h2"),ct=a("a"),$r=a("span"),b(xo.$$.fragment),ad=p(),yr=a("span"),rd=n("TFViTForImageClassification"),Fs=p(),O=a("div"),b(Fo.$$.fragment),sd=p(),xr=a("p"),nd=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),id=p(),Vo=a("p"),ld=n("This model inherits from "),ya=a("a"),dd=n("TFPreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=p(),ko=a("p"),hd=n("This model is also a "),Eo=a("a"),fd=n("tf.keras.Model"),md=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud=p(),b(pt.$$.fragment),gd=p(),ne=a("div"),b(Mo.$$.fragment),_d=p(),Se=a("p"),vd=n("The "),xa=a("a"),Td=n("TFViTForImageClassification"),bd=n(" forward method, overrides the "),Fr=a("code"),wd=n("__call__"),$d=n(" special method."),yd=p(),b(ht.$$.fragment),xd=p(),b(ft.$$.fragment),Vs=p(),We=a("h2"),mt=a("a"),Vr=a("span"),b(Io.$$.fragment),Fd=p(),kr=a("span"),Vd=n("FlaxVitModel"),ks=p(),A=a("div"),b(jo.$$.fragment),kd=p(),Er=a("p"),Ed=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Md=p(),Co=a("p"),Id=n("This model inherits from "),Fa=a("a"),jd=n("FlaxPreTrainedModel"),Cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pd=p(),Po=a("p"),Ad=n("This model is also a Flax Linen "),Ao=a("a"),qd=n("flax.linen.Module"),zd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nd=p(),Mr=a("p"),Ld=n("Finally, this model supports inherent JAX features such as:"),Dd=p(),ue=a("ul"),Ir=a("li"),qo=a("a"),Od=n("Just-In-Time (JIT) compilation"),Sd=p(),jr=a("li"),zo=a("a"),Wd=n("Automatic Differentiation"),Bd=p(),Cr=a("li"),No=a("a"),Ud=n("Vectorization"),Rd=p(),Pr=a("li"),Lo=a("a"),Hd=n("Parallelization"),Jd=p(),ie=a("div"),b(Do.$$.fragment),Kd=p(),Be=a("p"),Gd=n("The "),Ar=a("code"),Xd=n("FlaxViTPreTrainedModel"),Zd=n(" forward method, overrides the "),qr=a("code"),Qd=n("__call__"),Yd=n(" special method."),ec=p(),b(ut.$$.fragment),tc=p(),b(gt.$$.fragment),Es=p(),Ue=a("h2"),_t=a("a"),zr=a("span"),b(Oo.$$.fragment),oc=p(),Nr=a("span"),ac=n("FlaxViTForImageClassification"),Ms=p(),q=a("div"),b(So.$$.fragment),rc=p(),Lr=a("p"),sc=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),nc=p(),Wo=a("p"),ic=n("This model inherits from "),Va=a("a"),lc=n("FlaxPreTrainedModel"),dc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cc=p(),Bo=a("p"),pc=n("This model is also a Flax Linen "),Uo=a("a"),hc=n("flax.linen.Module"),fc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mc=p(),Dr=a("p"),uc=n("Finally, this model supports inherent JAX features such as:"),gc=p(),ge=a("ul"),Or=a("li"),Ro=a("a"),_c=n("Just-In-Time (JIT) compilation"),vc=p(),Sr=a("li"),Ho=a("a"),Tc=n("Automatic Differentiation"),bc=p(),Wr=a("li"),Jo=a("a"),wc=n("Vectorization"),$c=p(),Br=a("li"),Ko=a("a"),yc=n("Parallelization"),xc=p(),le=a("div"),b(Go.$$.fragment),Fc=p(),Re=a("p"),Vc=n("The "),Ur=a("code"),kc=n("FlaxViTPreTrainedModel"),Ec=n(" forward method, overrides the "),Rr=a("code"),Mc=n("__call__"),Ic=n(" special method."),jc=p(),b(vt.$$.fragment),Cc=p(),b(Tt.$$.fragment),this.h()},l(o){const g=Oh('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),T=h(o),u=r(o,"H1",{class:!0});var Xo=s(u);f=r(Xo,"A",{id:!0,class:!0,href:!0});var Hr=s(f);v=r(Hr,"SPAN",{});var Jr=s(v);w(l.$$.fragment,Jr),Jr.forEach(t),Hr.forEach(t),m=h(Xo),V=r(Xo,"SPAN",{});var Kr=s(V);pe=i(Kr,"Vision Transformer (ViT)"),Kr.forEach(t),Xo.forEach(t),R=h(o),w(M.$$.fragment,o),ee=h(o),j=r(o,"H2",{class:!0});var Zo=s(j);U=r(Zo,"A",{id:!0,class:!0,href:!0});var Gr=s(U);K=r(Gr,"SPAN",{});var Xr=s(K);w(P.$$.fragment,Xr),Xr.forEach(t),Gr.forEach(t),he=h(Zo),G=r(Zo,"SPAN",{});var Zr=s(G);E=i(Zr,"Overview"),Zr.forEach(t),Zo.forEach(t),I=h(o),z=r(o,"P",{});var Qo=s(z);$e=i(Qo,"The Vision Transformer (ViT) model was proposed in "),X=r(Qo,"A",{href:!0,rel:!0});var Qr=s(X);L=i(Qr,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Qr.forEach(t),ye=i(Qo,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Qo.forEach(t),Te=h(o),ta=r(o,"P",{});var Yr=s(ta);Ys=i(Yr,"The abstract from the paper is the following:"),Yr.forEach(t),ss=h(o),oa=r(o,"P",{});var es=s(oa);Ua=r(es,"EM",{});var ts=s(Ua);en=i(ts,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ts.forEach(t),es.forEach(t),ns=h(o),aa=r(o,"P",{});var os=s(aa);tn=i(os,"Tips:"),os.forEach(t),is=h(o),N=r(o,"UL",{});var S=s(N);zt=r(S,"LI",{});var Yo=s(zt);on=i(Yo,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Nt=r(Yo,"A",{href:!0,rel:!0});var as=s(Nt);an=i(as,"here"),as.forEach(t),rn=i(Yo,"."),Yo.forEach(t),sn=h(S),Ra=r(S,"LI",{});var rs=s(Ra);nn=i(rs,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),rs.forEach(t),ln=h(S),Lt=r(S,"LI",{});var ea=s(Lt);dn=i(ea,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),ra=r(ea,"A",{href:!0});var qc=s(ra);cn=i(qc,"ViTFeatureExtractor"),qc.forEach(t),pn=i(ea," to resize (or rescale) and normalize images for the model."),ea.forEach(t),hn=h(S),xe=r(S,"LI",{});var ka=s(xe);fn=i(ka,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ha=r(ka,"CODE",{});var zc=s(Ha);mn=i(zc,"google/vit-base-patch16-224"),zc.forEach(t),un=i(ka,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Dt=r(ka,"A",{href:!0,rel:!0});var Nc=s(Dt);gn=i(Nc,"hub"),Nc.forEach(t),_n=i(ka,"."),ka.forEach(t),vn=h(S),Fe=r(S,"LI",{});var Ea=s(Fe);Tn=i(Ea,"The available checkpoints are either (1) pre-trained on "),Ot=r(Ea,"A",{href:!0,rel:!0});var Lc=s(Ot);bn=i(Lc,"ImageNet-21k"),Lc.forEach(t),wn=i(Ea,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),St=r(Ea,"A",{href:!0,rel:!0});var Dc=s(St);$n=i(Dc,"ImageNet"),Dc.forEach(t),yn=i(Ea,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Ea.forEach(t),xn=h(S),Ve=r(S,"LI",{});var Ma=s(Ve);Fn=i(Ma,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Wt=r(Ma,"A",{href:!0,rel:!0});var Oc=s(Wt);Vn=i(Oc,"(Touvron et al., 2019)"),Oc.forEach(t),kn=i(Ma,", "),Bt=r(Ma,"A",{href:!0,rel:!0});var Sc=s(Bt);En=i(Sc,`(Kolesnikov
et al., 2020)`),Sc.forEach(t),Mn=i(Ma,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),Ma.forEach(t),In=h(S),Ja=r(S,"LI",{});var Wc=s(Ja);jn=i(Wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Wc.forEach(t),S.forEach(t),ls=h(o),sa=r(o,"P",{});var Bc=s(sa);Cn=i(Bc,"Following the original Vision Transformer, some follow-up works have been made:"),Bc.forEach(t),ds=h(o),te=r(o,"UL",{});var bt=s(te);Ka=r(bt,"LI",{});var Uc=s(Ka);C=r(Uc,"P",{});var W=s(C);na=r(W,"A",{href:!0});var Rc=s(na);Pn=i(Rc,"DeiT"),Rc.forEach(t),An=i(W,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),ia=r(W,"A",{href:!0});var Hc=s(ia);qn=i(Hc,"ViTModel"),Hc.forEach(t),zn=i(W,` or
`),la=r(W,"A",{href:!0});var Jc=s(la);Nn=i(Jc,"ViTForImageClassification"),Jc.forEach(t),Ln=i(W,". There are 4 variants available (in 3 different sizes): "),Ga=r(W,"EM",{});var Kc=s(Ga);Dn=i(Kc,"facebook/deit-tiny-patch16-224"),Kc.forEach(t),On=i(W,`,
`),Xa=r(W,"EM",{});var Gc=s(Xa);Sn=i(Gc,"facebook/deit-small-patch16-224"),Gc.forEach(t),Wn=i(W,", "),Za=r(W,"EM",{});var Xc=s(Za);Bn=i(Xc,"facebook/deit-base-patch16-224"),Xc.forEach(t),Un=i(W," and "),Qa=r(W,"EM",{});var Zc=s(Qa);Rn=i(Zc,"facebook/deit-base-patch16-384"),Zc.forEach(t),Hn=i(W,`. Note that one should
use `),da=r(W,"A",{href:!0});var Qc=s(da);Jn=i(Qc,"DeiTFeatureExtractor"),Qc.forEach(t),Kn=i(W," in order to prepare images for the model."),W.forEach(t),Uc.forEach(t),Gn=h(bt),Ya=r(bt,"LI",{});var Yc=s(Ya);ca=r(Yc,"P",{});var Pc=s(ca);pa=r(Pc,"A",{href:!0});var ep=s(pa);Xn=i(ep,"BEiT"),ep.forEach(t),Zn=i(Pc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Pc.forEach(t),Yc.forEach(t),Qn=h(bt),er=r(bt,"LI",{});var tp=s(er);Ut=r(tp,"P",{});var js=s(Ut);Yn=i(js,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Rt=r(js,"A",{href:!0,rel:!0});var op=s(Rt);ei=i(op,"hub"),op.forEach(t),ti=i(js,"."),js.forEach(t),tp.forEach(t),oi=h(bt),tr=r(bt,"LI",{});var ap=s(tr);ha=r(ap,"P",{});var Ac=s(ha);fa=r(Ac,"A",{href:!0});var rp=s(fa);ai=i(rp,"MAE"),rp.forEach(t),ri=i(Ac,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Ac.forEach(t),ap.forEach(t),bt.forEach(t),cs=h(o),be=r(o,"P",{});var Ia=s(be);si=i(Ia,"This model was contributed by "),Ht=r(Ia,"A",{href:!0,rel:!0});var sp=s(Ht);ni=i(sp,"nielsr"),sp.forEach(t),ii=i(Ia,`. The original code (written in JAX) can be
found `),Jt=r(Ia,"A",{href:!0,rel:!0});var np=s(Jt);li=i(np,"here"),np.forEach(t),di=i(Ia,"."),Ia.forEach(t),ps=h(o),He=r(o,"P",{});var Cs=s(He);ci=i(Cs,"Note that we converted the weights from Ross Wightman\u2019s "),Kt=r(Cs,"A",{href:!0,rel:!0});var ip=s(Kt);pi=i(ip,"timm library"),ip.forEach(t),hi=i(Cs,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Cs.forEach(t),hs=h(o),ke=r(o,"H2",{class:!0});var Ps=s(ke);Je=r(Ps,"A",{id:!0,class:!0,href:!0});var lp=s(Je);or=r(lp,"SPAN",{});var dp=s(or);w(Gt.$$.fragment,dp),dp.forEach(t),lp.forEach(t),fi=h(Ps),ar=r(Ps,"SPAN",{});var cp=s(ar);mi=i(cp,"ViTConfig"),cp.forEach(t),Ps.forEach(t),fs=h(o),Z=r(o,"DIV",{class:!0});var wt=s(Z);w(Xt.$$.fragment,wt),ui=h(wt),Ee=r(wt,"P",{});var ja=s(Ee);gi=i(ja,"This is the configuration class to store the configuration of a "),ma=r(ja,"A",{href:!0});var pp=s(ma);_i=i(pp,"ViTModel"),pp.forEach(t),vi=i(ja,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Zt=r(ja,"A",{href:!0,rel:!0});var hp=s(Zt);Ti=i(hp,"google/vit-base-patch16-224"),hp.forEach(t),bi=i(ja," architecture."),ja.forEach(t),wi=h(wt),Me=r(wt,"P",{});var Ca=s(Me);$i=i(Ca,"Configuration objects inherit from "),ua=r(Ca,"A",{href:!0});var fp=s(ua);yi=i(fp,"PretrainedConfig"),fp.forEach(t),xi=i(Ca,` and can be used to control the model outputs. Read the
documentation from `),ga=r(Ca,"A",{href:!0});var mp=s(ga);Fi=i(mp,"PretrainedConfig"),mp.forEach(t),Vi=i(Ca," for more information."),Ca.forEach(t),ki=h(wt),w(Ke.$$.fragment,wt),wt.forEach(t),ms=h(o),Ie=r(o,"H2",{class:!0});var As=s(Ie);Ge=r(As,"A",{id:!0,class:!0,href:!0});var up=s(Ge);rr=r(up,"SPAN",{});var gp=s(rr);w(Qt.$$.fragment,gp),gp.forEach(t),up.forEach(t),Ei=h(As),sr=r(As,"SPAN",{});var _p=s(sr);Mi=i(_p,"ViTFeatureExtractor"),_p.forEach(t),As.forEach(t),us=h(o),Q=r(o,"DIV",{class:!0});var $t=s(Q);w(Yt.$$.fragment,$t),Ii=h($t),nr=r($t,"P",{});var vp=s(nr);ji=i(vp,"Constructs a ViT feature extractor."),vp.forEach(t),Ci=h($t),eo=r($t,"P",{});var qs=s(eo);Pi=i(qs,"This feature extractor inherits from "),_a=r(qs,"A",{href:!0});var Tp=s(_a);Ai=i(Tp,"FeatureExtractionMixin"),Tp.forEach(t),qi=i(qs,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),qs.forEach(t),zi=h($t),we=r($t,"DIV",{class:!0});var Pa=s(we);w(to.$$.fragment,Pa),Ni=h(Pa),ir=r(Pa,"P",{});var bp=s(ir);Li=i(bp,"Main method to prepare for the model one or several image(s)."),bp.forEach(t),Di=h(Pa),w(Xe.$$.fragment,Pa),Pa.forEach(t),$t.forEach(t),gs=h(o),je=r(o,"H2",{class:!0});var zs=s(je);Ze=r(zs,"A",{id:!0,class:!0,href:!0});var wp=s(Ze);lr=r(wp,"SPAN",{});var $p=s(lr);w(oo.$$.fragment,$p),$p.forEach(t),wp.forEach(t),Oi=h(zs),dr=r(zs,"SPAN",{});var yp=s(dr);Si=i(yp,"ViTModel"),yp.forEach(t),zs.forEach(t),_s=h(o),fe=r(o,"DIV",{class:!0});var Aa=s(fe);w(ao.$$.fragment,Aa),Wi=h(Aa),ro=r(Aa,"P",{});var Ns=s(ro);Bi=i(Ns,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),so=r(Ns,"A",{href:!0,rel:!0});var xp=s(so);Ui=i(xp,"torch.nn.Module"),xp.forEach(t),Ri=i(Ns,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ns.forEach(t),Hi=h(Aa),oe=r(Aa,"DIV",{class:!0});var yt=s(oe);w(no.$$.fragment,yt),Ji=h(yt),Ce=r(yt,"P",{});var qa=s(Ce);Ki=i(qa,"The "),va=r(qa,"A",{href:!0});var Fp=s(va);Gi=i(Fp,"ViTModel"),Fp.forEach(t),Xi=i(qa," forward method, overrides the "),cr=r(qa,"CODE",{});var Vp=s(cr);Zi=i(Vp,"__call__"),Vp.forEach(t),Qi=i(qa," special method."),qa.forEach(t),Yi=h(yt),w(Qe.$$.fragment,yt),el=h(yt),w(Ye.$$.fragment,yt),yt.forEach(t),Aa.forEach(t),vs=h(o),Pe=r(o,"H2",{class:!0});var Ls=s(Pe);et=r(Ls,"A",{id:!0,class:!0,href:!0});var kp=s(et);pr=r(kp,"SPAN",{});var Ep=s(pr);w(io.$$.fragment,Ep),Ep.forEach(t),kp.forEach(t),tl=h(Ls),hr=r(Ls,"SPAN",{});var Mp=s(hr);ol=i(Mp,"ViTForMaskedImageModeling"),Mp.forEach(t),Ls.forEach(t),Ts=h(o),me=r(o,"DIV",{class:!0});var za=s(me);w(lo.$$.fragment,za),al=h(za),Ae=r(za,"P",{});var Na=s(Ae);rl=i(Na,"ViT Model with a decoder on top for masked image modeling, as proposed in "),co=r(Na,"A",{href:!0,rel:!0});var Ip=s(co);sl=i(Ip,"SimMIM"),Ip.forEach(t),nl=i(Na,`.
This model is a PyTorch `),po=r(Na,"A",{href:!0,rel:!0});var jp=s(po);il=i(jp,"torch.nn.Module"),jp.forEach(t),ll=i(Na,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Na.forEach(t),dl=h(za),ae=r(za,"DIV",{class:!0});var xt=s(ae);w(ho.$$.fragment,xt),cl=h(xt),qe=r(xt,"P",{});var La=s(qe);pl=i(La,"The "),Ta=r(La,"A",{href:!0});var Cp=s(Ta);hl=i(Cp,"ViTForMaskedImageModeling"),Cp.forEach(t),fl=i(La," forward method, overrides the "),fr=r(La,"CODE",{});var Pp=s(fr);ml=i(Pp,"__call__"),Pp.forEach(t),ul=i(La," special method."),La.forEach(t),gl=h(xt),w(tt.$$.fragment,xt),_l=h(xt),w(ot.$$.fragment,xt),xt.forEach(t),za.forEach(t),bs=h(o),ze=r(o,"H2",{class:!0});var Ds=s(ze);at=r(Ds,"A",{id:!0,class:!0,href:!0});var Ap=s(at);mr=r(Ap,"SPAN",{});var qp=s(mr);w(fo.$$.fragment,qp),qp.forEach(t),Ap.forEach(t),vl=h(Ds),ur=r(Ds,"SPAN",{});var zp=s(ur);Tl=i(zp,"ViTForImageClassification"),zp.forEach(t),Ds.forEach(t),ws=h(o),Y=r(o,"DIV",{class:!0});var Ft=s(Y);w(mo.$$.fragment,Ft),bl=h(Ft),gr=r(Ft,"P",{});var Np=s(gr);wl=i(Np,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Np.forEach(t),$l=h(Ft),uo=r(Ft,"P",{});var Os=s(uo);yl=i(Os,"This model is a PyTorch "),go=r(Os,"A",{href:!0,rel:!0});var Lp=s(go);xl=i(Lp,"torch.nn.Module"),Lp.forEach(t),Fl=i(Os,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(t),Vl=h(Ft),re=r(Ft,"DIV",{class:!0});var Vt=s(re);w(_o.$$.fragment,Vt),kl=h(Vt),Ne=r(Vt,"P",{});var Da=s(Ne);El=i(Da,"The "),ba=r(Da,"A",{href:!0});var Dp=s(ba);Ml=i(Dp,"ViTForImageClassification"),Dp.forEach(t),Il=i(Da," forward method, overrides the "),_r=r(Da,"CODE",{});var Op=s(_r);jl=i(Op,"__call__"),Op.forEach(t),Cl=i(Da," special method."),Da.forEach(t),Pl=h(Vt),w(rt.$$.fragment,Vt),Al=h(Vt),w(st.$$.fragment,Vt),Vt.forEach(t),Ft.forEach(t),$s=h(o),Le=r(o,"H2",{class:!0});var Ss=s(Le);nt=r(Ss,"A",{id:!0,class:!0,href:!0});var Sp=s(nt);vr=r(Sp,"SPAN",{});var Wp=s(vr);w(vo.$$.fragment,Wp),Wp.forEach(t),Sp.forEach(t),ql=h(Ss),Tr=r(Ss,"SPAN",{});var Bp=s(Tr);zl=i(Bp,"TFViTModel"),Bp.forEach(t),Ss.forEach(t),ys=h(o),D=r(o,"DIV",{class:!0});var de=s(D);w(To.$$.fragment,de),Nl=h(de),br=r(de,"P",{});var Up=s(br);Ll=i(Up,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Up.forEach(t),Dl=h(de),bo=r(de,"P",{});var Ws=s(bo);Ol=i(Ws,"This model inherits from "),wa=r(Ws,"A",{href:!0});var Rp=s(wa);Sl=i(Rp,"TFPreTrainedModel"),Rp.forEach(t),Wl=i(Ws,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ws.forEach(t),Bl=h(de),wo=r(de,"P",{});var Bs=s(wo);Ul=i(Bs,"This model is also a "),$o=r(Bs,"A",{href:!0,rel:!0});var Hp=s($o);Rl=i(Hp,"tf.keras.Model"),Hp.forEach(t),Hl=i(Bs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bs.forEach(t),Jl=h(de),w(it.$$.fragment,de),Kl=h(de),se=r(de,"DIV",{class:!0});var kt=s(se);w(yo.$$.fragment,kt),Gl=h(kt),De=r(kt,"P",{});var Oa=s(De);Xl=i(Oa,"The "),$a=r(Oa,"A",{href:!0});var Jp=s($a);Zl=i(Jp,"TFViTModel"),Jp.forEach(t),Ql=i(Oa," forward method, overrides the "),wr=r(Oa,"CODE",{});var Kp=s(wr);Yl=i(Kp,"__call__"),Kp.forEach(t),ed=i(Oa," special method."),Oa.forEach(t),td=h(kt),w(lt.$$.fragment,kt),od=h(kt),w(dt.$$.fragment,kt),kt.forEach(t),de.forEach(t),xs=h(o),Oe=r(o,"H2",{class:!0});var Us=s(Oe);ct=r(Us,"A",{id:!0,class:!0,href:!0});var Gp=s(ct);$r=r(Gp,"SPAN",{});var Xp=s($r);w(xo.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),ad=h(Us),yr=r(Us,"SPAN",{});var Zp=s(yr);rd=i(Zp,"TFViTForImageClassification"),Zp.forEach(t),Us.forEach(t),Fs=h(o),O=r(o,"DIV",{class:!0});var ce=s(O);w(Fo.$$.fragment,ce),sd=h(ce),xr=r(ce,"P",{});var Qp=s(xr);nd=i(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),id=h(ce),Vo=r(ce,"P",{});var Rs=s(Vo);ld=i(Rs,"This model inherits from "),ya=r(Rs,"A",{href:!0});var Yp=s(ya);dd=i(Yp,"TFPreTrainedModel"),Yp.forEach(t),cd=i(Rs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rs.forEach(t),pd=h(ce),ko=r(ce,"P",{});var Hs=s(ko);hd=i(Hs,"This model is also a "),Eo=r(Hs,"A",{href:!0,rel:!0});var eh=s(Eo);fd=i(eh,"tf.keras.Model"),eh.forEach(t),md=i(Hs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hs.forEach(t),ud=h(ce),w(pt.$$.fragment,ce),gd=h(ce),ne=r(ce,"DIV",{class:!0});var Et=s(ne);w(Mo.$$.fragment,Et),_d=h(Et),Se=r(Et,"P",{});var Sa=s(Se);vd=i(Sa,"The "),xa=r(Sa,"A",{href:!0});var th=s(xa);Td=i(th,"TFViTForImageClassification"),th.forEach(t),bd=i(Sa," forward method, overrides the "),Fr=r(Sa,"CODE",{});var oh=s(Fr);wd=i(oh,"__call__"),oh.forEach(t),$d=i(Sa," special method."),Sa.forEach(t),yd=h(Et),w(ht.$$.fragment,Et),xd=h(Et),w(ft.$$.fragment,Et),Et.forEach(t),ce.forEach(t),Vs=h(o),We=r(o,"H2",{class:!0});var Js=s(We);mt=r(Js,"A",{id:!0,class:!0,href:!0});var ah=s(mt);Vr=r(ah,"SPAN",{});var rh=s(Vr);w(Io.$$.fragment,rh),rh.forEach(t),ah.forEach(t),Fd=h(Js),kr=r(Js,"SPAN",{});var sh=s(kr);Vd=i(sh,"FlaxVitModel"),sh.forEach(t),Js.forEach(t),ks=h(o),A=r(o,"DIV",{class:!0});var H=s(A);w(jo.$$.fragment,H),kd=h(H),Er=r(H,"P",{});var nh=s(Er);Ed=i(nh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),nh.forEach(t),Md=h(H),Co=r(H,"P",{});var Ks=s(Co);Id=i(Ks,"This model inherits from "),Fa=r(Ks,"A",{href:!0});var ih=s(Fa);jd=i(ih,"FlaxPreTrainedModel"),ih.forEach(t),Cd=i(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ks.forEach(t),Pd=h(H),Po=r(H,"P",{});var Gs=s(Po);Ad=i(Gs,"This model is also a Flax Linen "),Ao=r(Gs,"A",{href:!0,rel:!0});var lh=s(Ao);qd=i(lh,"flax.linen.Module"),lh.forEach(t),zd=i(Gs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gs.forEach(t),Nd=h(H),Mr=r(H,"P",{});var dh=s(Mr);Ld=i(dh,"Finally, this model supports inherent JAX features such as:"),dh.forEach(t),Dd=h(H),ue=r(H,"UL",{});var Mt=s(ue);Ir=r(Mt,"LI",{});var ch=s(Ir);qo=r(ch,"A",{href:!0,rel:!0});var ph=s(qo);Od=i(ph,"Just-In-Time (JIT) compilation"),ph.forEach(t),ch.forEach(t),Sd=h(Mt),jr=r(Mt,"LI",{});var hh=s(jr);zo=r(hh,"A",{href:!0,rel:!0});var fh=s(zo);Wd=i(fh,"Automatic Differentiation"),fh.forEach(t),hh.forEach(t),Bd=h(Mt),Cr=r(Mt,"LI",{});var mh=s(Cr);No=r(mh,"A",{href:!0,rel:!0});var uh=s(No);Ud=i(uh,"Vectorization"),uh.forEach(t),mh.forEach(t),Rd=h(Mt),Pr=r(Mt,"LI",{});var gh=s(Pr);Lo=r(gh,"A",{href:!0,rel:!0});var _h=s(Lo);Hd=i(_h,"Parallelization"),_h.forEach(t),gh.forEach(t),Mt.forEach(t),Jd=h(H),ie=r(H,"DIV",{class:!0});var It=s(ie);w(Do.$$.fragment,It),Kd=h(It),Be=r(It,"P",{});var Wa=s(Be);Gd=i(Wa,"The "),Ar=r(Wa,"CODE",{});var vh=s(Ar);Xd=i(vh,"FlaxViTPreTrainedModel"),vh.forEach(t),Zd=i(Wa," forward method, overrides the "),qr=r(Wa,"CODE",{});var Th=s(qr);Qd=i(Th,"__call__"),Th.forEach(t),Yd=i(Wa," special method."),Wa.forEach(t),ec=h(It),w(ut.$$.fragment,It),tc=h(It),w(gt.$$.fragment,It),It.forEach(t),H.forEach(t),Es=h(o),Ue=r(o,"H2",{class:!0});var Xs=s(Ue);_t=r(Xs,"A",{id:!0,class:!0,href:!0});var bh=s(_t);zr=r(bh,"SPAN",{});var wh=s(zr);w(Oo.$$.fragment,wh),wh.forEach(t),bh.forEach(t),oc=h(Xs),Nr=r(Xs,"SPAN",{});var $h=s(Nr);ac=i($h,"FlaxViTForImageClassification"),$h.forEach(t),Xs.forEach(t),Ms=h(o),q=r(o,"DIV",{class:!0});var J=s(q);w(So.$$.fragment,J),rc=h(J),Lr=r(J,"P",{});var yh=s(Lr);sc=i(yh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yh.forEach(t),nc=h(J),Wo=r(J,"P",{});var Zs=s(Wo);ic=i(Zs,"This model inherits from "),Va=r(Zs,"A",{href:!0});var xh=s(Va);lc=i(xh,"FlaxPreTrainedModel"),xh.forEach(t),dc=i(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zs.forEach(t),cc=h(J),Bo=r(J,"P",{});var Qs=s(Bo);pc=i(Qs,"This model is also a Flax Linen "),Uo=r(Qs,"A",{href:!0,rel:!0});var Fh=s(Uo);hc=i(Fh,"flax.linen.Module"),Fh.forEach(t),fc=i(Qs,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qs.forEach(t),mc=h(J),Dr=r(J,"P",{});var Vh=s(Dr);uc=i(Vh,"Finally, this model supports inherent JAX features such as:"),Vh.forEach(t),gc=h(J),ge=r(J,"UL",{});var jt=s(ge);Or=r(jt,"LI",{});var kh=s(Or);Ro=r(kh,"A",{href:!0,rel:!0});var Eh=s(Ro);_c=i(Eh,"Just-In-Time (JIT) compilation"),Eh.forEach(t),kh.forEach(t),vc=h(jt),Sr=r(jt,"LI",{});var Mh=s(Sr);Ho=r(Mh,"A",{href:!0,rel:!0});var Ih=s(Ho);Tc=i(Ih,"Automatic Differentiation"),Ih.forEach(t),Mh.forEach(t),bc=h(jt),Wr=r(jt,"LI",{});var jh=s(Wr);Jo=r(jh,"A",{href:!0,rel:!0});var Ch=s(Jo);wc=i(Ch,"Vectorization"),Ch.forEach(t),jh.forEach(t),$c=h(jt),Br=r(jt,"LI",{});var Ph=s(Br);Ko=r(Ph,"A",{href:!0,rel:!0});var Ah=s(Ko);yc=i(Ah,"Parallelization"),Ah.forEach(t),Ph.forEach(t),jt.forEach(t),xc=h(J),le=r(J,"DIV",{class:!0});var Ct=s(le);w(Go.$$.fragment,Ct),Fc=h(Ct),Re=r(Ct,"P",{});var Ba=s(Re);Vc=i(Ba,"The "),Ur=r(Ba,"CODE",{});var qh=s(Ur);kc=i(qh,"FlaxViTPreTrainedModel"),qh.forEach(t),Ec=i(Ba," forward method, overrides the "),Rr=r(Ba,"CODE",{});var zh=s(Rr);Mc=i(zh,"__call__"),zh.forEach(t),Ic=i(Ba," special method."),Ba.forEach(t),jc=h(Ct),w(vt.$$.fragment,Ct),Cc=h(Ct),w(Tt.$$.fragment,Ct),Ct.forEach(t),J.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(df)),c(f,"id","vision-transformer-vit"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#vision-transformer-vit"),c(u,"class","relative group"),c(U,"id","overview"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#overview"),c(j,"class","relative group"),c(X,"href","https://arxiv.org/abs/2010.11929"),c(X,"rel","nofollow"),c(Nt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(Nt,"rel","nofollow"),c(ra,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTFeatureExtractor"),c(Dt,"href","https://huggingface.co/models?search=vit"),c(Dt,"rel","nofollow"),c(Ot,"href","http://www.image-net.org/"),c(Ot,"rel","nofollow"),c(St,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(St,"rel","nofollow"),c(Wt,"href","https://arxiv.org/abs/1906.06423"),c(Wt,"rel","nofollow"),c(Bt,"href","https://arxiv.org/abs/1912.11370"),c(Bt,"rel","nofollow"),c(na,"href","deit"),c(ia,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTModel"),c(la,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTForImageClassification"),c(da,"href","/docs/transformers/pr_10/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(pa,"href","beit"),c(Rt,"href","https://huggingface.co/models?other=dino"),c(Rt,"rel","nofollow"),c(fa,"href","vit_mae"),c(Ht,"href","https://huggingface.co/nielsr"),c(Ht,"rel","nofollow"),c(Jt,"href","https://github.com/google-research/vision_transformer"),c(Jt,"rel","nofollow"),c(Kt,"href","https://github.com/rwightman/pytorch-image-models"),c(Kt,"rel","nofollow"),c(Je,"id","transformers.ViTConfig"),c(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Je,"href","#transformers.ViTConfig"),c(ke,"class","relative group"),c(ma,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTModel"),c(Zt,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Zt,"rel","nofollow"),c(ua,"href","/docs/transformers/pr_10/en/main_classes/configuration#transformers.PretrainedConfig"),c(ga,"href","/docs/transformers/pr_10/en/main_classes/configuration#transformers.PretrainedConfig"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.ViTFeatureExtractor"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.ViTFeatureExtractor"),c(Ie,"class","relative group"),c(_a,"href","/docs/transformers/pr_10/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"id","transformers.ViTModel"),c(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ze,"href","#transformers.ViTModel"),c(je,"class","relative group"),c(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(so,"rel","nofollow"),c(va,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTModel"),c(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(et,"id","transformers.ViTForMaskedImageModeling"),c(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(et,"href","#transformers.ViTForMaskedImageModeling"),c(Pe,"class","relative group"),c(co,"href","https://arxiv.org/abs/2111.09886"),c(co,"rel","nofollow"),c(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(po,"rel","nofollow"),c(Ta,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(at,"id","transformers.ViTForImageClassification"),c(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(at,"href","#transformers.ViTForImageClassification"),c(ze,"class","relative group"),c(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(go,"rel","nofollow"),c(ba,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.ViTForImageClassification"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"id","transformers.TFViTModel"),c(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nt,"href","#transformers.TFViTModel"),c(Le,"class","relative group"),c(wa,"href","/docs/transformers/pr_10/en/main_classes/model#transformers.TFPreTrainedModel"),c($o,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($o,"rel","nofollow"),c($a,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.TFViTModel"),c(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ct,"id","transformers.TFViTForImageClassification"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#transformers.TFViTForImageClassification"),c(Oe,"class","relative group"),c(ya,"href","/docs/transformers/pr_10/en/main_classes/model#transformers.TFPreTrainedModel"),c(Eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Eo,"rel","nofollow"),c(xa,"href","/docs/transformers/pr_10/en/model_doc/vit#transformers.TFViTForImageClassification"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(mt,"id","transformers.FlaxViTModel"),c(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mt,"href","#transformers.FlaxViTModel"),c(We,"class","relative group"),c(Fa,"href","/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ao,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ao,"rel","nofollow"),c(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qo,"rel","nofollow"),c(zo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zo,"rel","nofollow"),c(No,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(No,"rel","nofollow"),c(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Lo,"rel","nofollow"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_t,"id","transformers.FlaxViTForImageClassification"),c(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_t,"href","#transformers.FlaxViTForImageClassification"),c(Ue,"class","relative group"),c(Va,"href","/docs/transformers/pr_10/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Uo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Uo,"rel","nofollow"),c(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ro,"rel","nofollow"),c(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ho,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Jo,"rel","nofollow"),c(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ko,"rel","nofollow"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,u,g),e(u,f),e(f,v),$(l,v,null),e(u,m),e(u,V),e(V,pe),_(o,R,g),$(M,o,g),_(o,ee,g),_(o,j,g),e(j,U),e(U,K),$(P,K,null),e(j,he),e(j,G),e(G,E),_(o,I,g),_(o,z,g),e(z,$e),e(z,X),e(X,L),e(z,ye),_(o,Te,g),_(o,ta,g),e(ta,Ys),_(o,ss,g),_(o,oa,g),e(oa,Ua),e(Ua,en),_(o,ns,g),_(o,aa,g),e(aa,tn),_(o,is,g),_(o,N,g),e(N,zt),e(zt,on),e(zt,Nt),e(Nt,an),e(zt,rn),e(N,sn),e(N,Ra),e(Ra,nn),e(N,ln),e(N,Lt),e(Lt,dn),e(Lt,ra),e(ra,cn),e(Lt,pn),e(N,hn),e(N,xe),e(xe,fn),e(xe,Ha),e(Ha,mn),e(xe,un),e(xe,Dt),e(Dt,gn),e(xe,_n),e(N,vn),e(N,Fe),e(Fe,Tn),e(Fe,Ot),e(Ot,bn),e(Fe,wn),e(Fe,St),e(St,$n),e(Fe,yn),e(N,xn),e(N,Ve),e(Ve,Fn),e(Ve,Wt),e(Wt,Vn),e(Ve,kn),e(Ve,Bt),e(Bt,En),e(Ve,Mn),e(N,In),e(N,Ja),e(Ja,jn),_(o,ls,g),_(o,sa,g),e(sa,Cn),_(o,ds,g),_(o,te,g),e(te,Ka),e(Ka,C),e(C,na),e(na,Pn),e(C,An),e(C,ia),e(ia,qn),e(C,zn),e(C,la),e(la,Nn),e(C,Ln),e(C,Ga),e(Ga,Dn),e(C,On),e(C,Xa),e(Xa,Sn),e(C,Wn),e(C,Za),e(Za,Bn),e(C,Un),e(C,Qa),e(Qa,Rn),e(C,Hn),e(C,da),e(da,Jn),e(C,Kn),e(te,Gn),e(te,Ya),e(Ya,ca),e(ca,pa),e(pa,Xn),e(ca,Zn),e(te,Qn),e(te,er),e(er,Ut),e(Ut,Yn),e(Ut,Rt),e(Rt,ei),e(Ut,ti),e(te,oi),e(te,tr),e(tr,ha),e(ha,fa),e(fa,ai),e(ha,ri),_(o,cs,g),_(o,be,g),e(be,si),e(be,Ht),e(Ht,ni),e(be,ii),e(be,Jt),e(Jt,li),e(be,di),_(o,ps,g),_(o,He,g),e(He,ci),e(He,Kt),e(Kt,pi),e(He,hi),_(o,hs,g),_(o,ke,g),e(ke,Je),e(Je,or),$(Gt,or,null),e(ke,fi),e(ke,ar),e(ar,mi),_(o,fs,g),_(o,Z,g),$(Xt,Z,null),e(Z,ui),e(Z,Ee),e(Ee,gi),e(Ee,ma),e(ma,_i),e(Ee,vi),e(Ee,Zt),e(Zt,Ti),e(Ee,bi),e(Z,wi),e(Z,Me),e(Me,$i),e(Me,ua),e(ua,yi),e(Me,xi),e(Me,ga),e(ga,Fi),e(Me,Vi),e(Z,ki),$(Ke,Z,null),_(o,ms,g),_(o,Ie,g),e(Ie,Ge),e(Ge,rr),$(Qt,rr,null),e(Ie,Ei),e(Ie,sr),e(sr,Mi),_(o,us,g),_(o,Q,g),$(Yt,Q,null),e(Q,Ii),e(Q,nr),e(nr,ji),e(Q,Ci),e(Q,eo),e(eo,Pi),e(eo,_a),e(_a,Ai),e(eo,qi),e(Q,zi),e(Q,we),$(to,we,null),e(we,Ni),e(we,ir),e(ir,Li),e(we,Di),$(Xe,we,null),_(o,gs,g),_(o,je,g),e(je,Ze),e(Ze,lr),$(oo,lr,null),e(je,Oi),e(je,dr),e(dr,Si),_(o,_s,g),_(o,fe,g),$(ao,fe,null),e(fe,Wi),e(fe,ro),e(ro,Bi),e(ro,so),e(so,Ui),e(ro,Ri),e(fe,Hi),e(fe,oe),$(no,oe,null),e(oe,Ji),e(oe,Ce),e(Ce,Ki),e(Ce,va),e(va,Gi),e(Ce,Xi),e(Ce,cr),e(cr,Zi),e(Ce,Qi),e(oe,Yi),$(Qe,oe,null),e(oe,el),$(Ye,oe,null),_(o,vs,g),_(o,Pe,g),e(Pe,et),e(et,pr),$(io,pr,null),e(Pe,tl),e(Pe,hr),e(hr,ol),_(o,Ts,g),_(o,me,g),$(lo,me,null),e(me,al),e(me,Ae),e(Ae,rl),e(Ae,co),e(co,sl),e(Ae,nl),e(Ae,po),e(po,il),e(Ae,ll),e(me,dl),e(me,ae),$(ho,ae,null),e(ae,cl),e(ae,qe),e(qe,pl),e(qe,Ta),e(Ta,hl),e(qe,fl),e(qe,fr),e(fr,ml),e(qe,ul),e(ae,gl),$(tt,ae,null),e(ae,_l),$(ot,ae,null),_(o,bs,g),_(o,ze,g),e(ze,at),e(at,mr),$(fo,mr,null),e(ze,vl),e(ze,ur),e(ur,Tl),_(o,ws,g),_(o,Y,g),$(mo,Y,null),e(Y,bl),e(Y,gr),e(gr,wl),e(Y,$l),e(Y,uo),e(uo,yl),e(uo,go),e(go,xl),e(uo,Fl),e(Y,Vl),e(Y,re),$(_o,re,null),e(re,kl),e(re,Ne),e(Ne,El),e(Ne,ba),e(ba,Ml),e(Ne,Il),e(Ne,_r),e(_r,jl),e(Ne,Cl),e(re,Pl),$(rt,re,null),e(re,Al),$(st,re,null),_(o,$s,g),_(o,Le,g),e(Le,nt),e(nt,vr),$(vo,vr,null),e(Le,ql),e(Le,Tr),e(Tr,zl),_(o,ys,g),_(o,D,g),$(To,D,null),e(D,Nl),e(D,br),e(br,Ll),e(D,Dl),e(D,bo),e(bo,Ol),e(bo,wa),e(wa,Sl),e(bo,Wl),e(D,Bl),e(D,wo),e(wo,Ul),e(wo,$o),e($o,Rl),e(wo,Hl),e(D,Jl),$(it,D,null),e(D,Kl),e(D,se),$(yo,se,null),e(se,Gl),e(se,De),e(De,Xl),e(De,$a),e($a,Zl),e(De,Ql),e(De,wr),e(wr,Yl),e(De,ed),e(se,td),$(lt,se,null),e(se,od),$(dt,se,null),_(o,xs,g),_(o,Oe,g),e(Oe,ct),e(ct,$r),$(xo,$r,null),e(Oe,ad),e(Oe,yr),e(yr,rd),_(o,Fs,g),_(o,O,g),$(Fo,O,null),e(O,sd),e(O,xr),e(xr,nd),e(O,id),e(O,Vo),e(Vo,ld),e(Vo,ya),e(ya,dd),e(Vo,cd),e(O,pd),e(O,ko),e(ko,hd),e(ko,Eo),e(Eo,fd),e(ko,md),e(O,ud),$(pt,O,null),e(O,gd),e(O,ne),$(Mo,ne,null),e(ne,_d),e(ne,Se),e(Se,vd),e(Se,xa),e(xa,Td),e(Se,bd),e(Se,Fr),e(Fr,wd),e(Se,$d),e(ne,yd),$(ht,ne,null),e(ne,xd),$(ft,ne,null),_(o,Vs,g),_(o,We,g),e(We,mt),e(mt,Vr),$(Io,Vr,null),e(We,Fd),e(We,kr),e(kr,Vd),_(o,ks,g),_(o,A,g),$(jo,A,null),e(A,kd),e(A,Er),e(Er,Ed),e(A,Md),e(A,Co),e(Co,Id),e(Co,Fa),e(Fa,jd),e(Co,Cd),e(A,Pd),e(A,Po),e(Po,Ad),e(Po,Ao),e(Ao,qd),e(Po,zd),e(A,Nd),e(A,Mr),e(Mr,Ld),e(A,Dd),e(A,ue),e(ue,Ir),e(Ir,qo),e(qo,Od),e(ue,Sd),e(ue,jr),e(jr,zo),e(zo,Wd),e(ue,Bd),e(ue,Cr),e(Cr,No),e(No,Ud),e(ue,Rd),e(ue,Pr),e(Pr,Lo),e(Lo,Hd),e(A,Jd),e(A,ie),$(Do,ie,null),e(ie,Kd),e(ie,Be),e(Be,Gd),e(Be,Ar),e(Ar,Xd),e(Be,Zd),e(Be,qr),e(qr,Qd),e(Be,Yd),e(ie,ec),$(ut,ie,null),e(ie,tc),$(gt,ie,null),_(o,Es,g),_(o,Ue,g),e(Ue,_t),e(_t,zr),$(Oo,zr,null),e(Ue,oc),e(Ue,Nr),e(Nr,ac),_(o,Ms,g),_(o,q,g),$(So,q,null),e(q,rc),e(q,Lr),e(Lr,sc),e(q,nc),e(q,Wo),e(Wo,ic),e(Wo,Va),e(Va,lc),e(Wo,dc),e(q,cc),e(q,Bo),e(Bo,pc),e(Bo,Uo),e(Uo,hc),e(Bo,fc),e(q,mc),e(q,Dr),e(Dr,uc),e(q,gc),e(q,ge),e(ge,Or),e(Or,Ro),e(Ro,_c),e(ge,vc),e(ge,Sr),e(Sr,Ho),e(Ho,Tc),e(ge,bc),e(ge,Wr),e(Wr,Jo),e(Jo,wc),e(ge,$c),e(ge,Br),e(Br,Ko),e(Ko,yc),e(q,xc),e(q,le),$(Go,le,null),e(le,Fc),e(le,Re),e(Re,Vc),e(Re,Ur),e(Ur,kc),e(Re,Ec),e(Re,Rr),e(Rr,Mc),e(Re,Ic),e(le,jc),$(vt,le,null),e(le,Cc),$(Tt,le,null),Is=!0},p(o,[g]){const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:o}),M.$set(Xo);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),Ke.$set(Hr);const Jr={};g&2&&(Jr.$$scope={dirty:g,ctx:o}),Xe.$set(Jr);const Kr={};g&2&&(Kr.$$scope={dirty:g,ctx:o}),Qe.$set(Kr);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:o}),Ye.$set(Zo);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:o}),tt.$set(Gr);const Xr={};g&2&&(Xr.$$scope={dirty:g,ctx:o}),ot.$set(Xr);const Zr={};g&2&&(Zr.$$scope={dirty:g,ctx:o}),rt.$set(Zr);const Qo={};g&2&&(Qo.$$scope={dirty:g,ctx:o}),st.$set(Qo);const Qr={};g&2&&(Qr.$$scope={dirty:g,ctx:o}),it.$set(Qr);const Yr={};g&2&&(Yr.$$scope={dirty:g,ctx:o}),lt.$set(Yr);const es={};g&2&&(es.$$scope={dirty:g,ctx:o}),dt.$set(es);const ts={};g&2&&(ts.$$scope={dirty:g,ctx:o}),pt.$set(ts);const os={};g&2&&(os.$$scope={dirty:g,ctx:o}),ht.$set(os);const S={};g&2&&(S.$$scope={dirty:g,ctx:o}),ft.$set(S);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:o}),ut.$set(Yo);const as={};g&2&&(as.$$scope={dirty:g,ctx:o}),gt.$set(as);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:o}),vt.$set(rs);const ea={};g&2&&(ea.$$scope={dirty:g,ctx:o}),Tt.$set(ea)},i(o){Is||(y(l.$$.fragment,o),y(M.$$.fragment,o),y(P.$$.fragment,o),y(Gt.$$.fragment,o),y(Xt.$$.fragment,o),y(Ke.$$.fragment,o),y(Qt.$$.fragment,o),y(Yt.$$.fragment,o),y(to.$$.fragment,o),y(Xe.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(no.$$.fragment,o),y(Qe.$$.fragment,o),y(Ye.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(ho.$$.fragment,o),y(tt.$$.fragment,o),y(ot.$$.fragment,o),y(fo.$$.fragment,o),y(mo.$$.fragment,o),y(_o.$$.fragment,o),y(rt.$$.fragment,o),y(st.$$.fragment,o),y(vo.$$.fragment,o),y(To.$$.fragment,o),y(it.$$.fragment,o),y(yo.$$.fragment,o),y(lt.$$.fragment,o),y(dt.$$.fragment,o),y(xo.$$.fragment,o),y(Fo.$$.fragment,o),y(pt.$$.fragment,o),y(Mo.$$.fragment,o),y(ht.$$.fragment,o),y(ft.$$.fragment,o),y(Io.$$.fragment,o),y(jo.$$.fragment,o),y(Do.$$.fragment,o),y(ut.$$.fragment,o),y(gt.$$.fragment,o),y(Oo.$$.fragment,o),y(So.$$.fragment,o),y(Go.$$.fragment,o),y(vt.$$.fragment,o),y(Tt.$$.fragment,o),Is=!0)},o(o){x(l.$$.fragment,o),x(M.$$.fragment,o),x(P.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Ke.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(to.$$.fragment,o),x(Xe.$$.fragment,o),x(oo.$$.fragment,o),x(ao.$$.fragment,o),x(no.$$.fragment,o),x(Qe.$$.fragment,o),x(Ye.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(ho.$$.fragment,o),x(tt.$$.fragment,o),x(ot.$$.fragment,o),x(fo.$$.fragment,o),x(mo.$$.fragment,o),x(_o.$$.fragment,o),x(rt.$$.fragment,o),x(st.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(it.$$.fragment,o),x(yo.$$.fragment,o),x(lt.$$.fragment,o),x(dt.$$.fragment,o),x(xo.$$.fragment,o),x(Fo.$$.fragment,o),x(pt.$$.fragment,o),x(Mo.$$.fragment,o),x(ht.$$.fragment,o),x(ft.$$.fragment,o),x(Io.$$.fragment,o),x(jo.$$.fragment,o),x(Do.$$.fragment,o),x(ut.$$.fragment,o),x(gt.$$.fragment,o),x(Oo.$$.fragment,o),x(So.$$.fragment,o),x(Go.$$.fragment,o),x(vt.$$.fragment,o),x(Tt.$$.fragment,o),Is=!1},d(o){t(d),o&&t(T),o&&t(u),F(l),o&&t(R),F(M,o),o&&t(ee),o&&t(j),F(P),o&&t(I),o&&t(z),o&&t(Te),o&&t(ta),o&&t(ss),o&&t(oa),o&&t(ns),o&&t(aa),o&&t(is),o&&t(N),o&&t(ls),o&&t(sa),o&&t(ds),o&&t(te),o&&t(cs),o&&t(be),o&&t(ps),o&&t(He),o&&t(hs),o&&t(ke),F(Gt),o&&t(fs),o&&t(Z),F(Xt),F(Ke),o&&t(ms),o&&t(Ie),F(Qt),o&&t(us),o&&t(Q),F(Yt),F(to),F(Xe),o&&t(gs),o&&t(je),F(oo),o&&t(_s),o&&t(fe),F(ao),F(no),F(Qe),F(Ye),o&&t(vs),o&&t(Pe),F(io),o&&t(Ts),o&&t(me),F(lo),F(ho),F(tt),F(ot),o&&t(bs),o&&t(ze),F(fo),o&&t(ws),o&&t(Y),F(mo),F(_o),F(rt),F(st),o&&t($s),o&&t(Le),F(vo),o&&t(ys),o&&t(D),F(To),F(it),F(yo),F(lt),F(dt),o&&t(xs),o&&t(Oe),F(xo),o&&t(Fs),o&&t(O),F(Fo),F(pt),F(Mo),F(ht),F(ft),o&&t(Vs),o&&t(We),F(Io),o&&t(ks),o&&t(A),F(jo),F(Do),F(ut),F(gt),o&&t(Es),o&&t(Ue),F(Oo),o&&t(Ms),o&&t(q),F(So),F(Go),F(vt),F(Tt)}}}const df={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function cf(k){return Sh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _f extends Nh{constructor(d){super();Lh(this,d,cf,lf,Dh,{})}}export{_f as default,df as metadata};
