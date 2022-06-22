import{S as b_,i as P_,s as $_,e as s,k as m,w as P,t as i,M as T_,c as r,d as o,m as f,a,x as $,h as l,b as h,G as e,g as v,y as T,q as I,o as y,B as C,v as I_,L as S}from"../../chunks/vendor-hf-doc-builder.js";import{T as X}from"../../chunks/Tip-hf-doc-builder.js";import{D as k}from"../../chunks/Docstring-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as D}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function y_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

# Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextModel, CLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function C_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

# Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionModel, CLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function x_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function L_(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function k_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function w_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function M_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function E_(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function j_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function z_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

model = CLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function F_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function q_(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModel

model = CLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function D_(x){let d,b,u,c,_,n,p,L,dn,Ue,j,ne,Ie,ye,pn,Ce,cn,Ft,Z,Fe,xe,qt,H,Q,qe,Re,Dt,De,Le,mn,Ot,O,se,ke,we,fn,Me,hn,At,Y,un,Oe,re;return{c(){d=s("p"),b=i("TF 2.0 models accepts two formats as inputs:"),u=m(),c=s("ul"),_=s("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=m(),L=s("li"),dn=i("having all inputs as a list, tuple or dict in the first positional arguments."),Ue=m(),j=s("p"),ne=i("This second option is useful when using "),Ie=s("code"),ye=i("tf.keras.Model.fit"),pn=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),Ce=s("code"),cn=i("model(inputs)"),Ft=i("."),Z=m(),Fe=s("p"),xe=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qt=m(),H=s("ul"),Q=s("li"),qe=i("a single Tensor with "),Re=s("code"),Dt=i("input_ids"),De=i(" only and nothing else: "),Le=s("code"),mn=i("model(input_ids)"),Ot=m(),O=s("li"),se=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s("code"),we=i("model([input_ids, attention_mask])"),fn=i(" or "),Me=s("code"),hn=i("model([input_ids, attention_mask, token_type_ids])"),At=m(),Y=s("li"),un=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Oe=s("code"),re=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=r(w,"P",{});var z=a(d);b=l(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(o),u=f(w),c=r(w,"UL",{});var Nt=a(c);_=r(Nt,"LI",{});var Xs=a(_);n=l(Xs,"having all inputs as keyword arguments (like PyTorch models), or"),Xs.forEach(o),p=f(Nt),L=r(Nt,"LI",{});var gn=a(L);dn=l(gn,"having all inputs as a list, tuple or dict in the first positional arguments."),gn.forEach(o),Nt.forEach(o),Ue=f(w),j=r(w,"P",{});var M=a(j);ne=l(M,"This second option is useful when using "),Ie=r(M,"CODE",{});var Zs=a(Ie);ye=l(Zs,"tf.keras.Model.fit"),Zs.forEach(o),pn=l(M,` method which currently requires having all the
tensors in the first argument of the model call function: `),Ce=r(M,"CODE",{});var He=a(Ce);cn=l(He,"model(inputs)"),He.forEach(o),Ft=l(M,"."),M.forEach(o),Z=f(w),Fe=r(w,"P",{});var Qs=a(Fe);xe=l(Qs,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Qs.forEach(o),qt=f(w),H=r(w,"UL",{});var Ae=a(H);Q=r(Ae,"LI",{});var ae=a(Q);qe=l(ae,"a single Tensor with "),Re=r(ae,"CODE",{});var Ys=a(Re);Dt=l(Ys,"input_ids"),Ys.forEach(o),De=l(ae," only and nothing else: "),Le=r(ae,"CODE",{});var er=a(Le);mn=l(er,"model(input_ids)"),er.forEach(o),ae.forEach(o),Ot=f(Ae),O=r(Ae,"LI",{});var ie=a(O);se=l(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=r(ie,"CODE",{});var tr=a(ke);we=l(tr,"model([input_ids, attention_mask])"),tr.forEach(o),fn=l(ie," or "),Me=r(ie,"CODE",{});var or=a(Me);hn=l(or,"model([input_ids, attention_mask, token_type_ids])"),or.forEach(o),ie.forEach(o),At=f(Ae),Y=r(Ae,"LI",{});var Ne=a(Y);un=l(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Oe=r(Ne,"CODE",{});var nr=a(Oe);re=l(nr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nr.forEach(o),Ne.forEach(o),Ae.forEach(o)},m(w,z){v(w,d,z),e(d,b),v(w,u,z),v(w,c,z),e(c,_),e(_,n),e(c,p),e(c,L),e(L,dn),v(w,Ue,z),v(w,j,z),e(j,ne),e(j,Ie),e(Ie,ye),e(j,pn),e(j,Ce),e(Ce,cn),e(j,Ft),v(w,Z,z),v(w,Fe,z),e(Fe,xe),v(w,qt,z),v(w,H,z),e(H,Q),e(Q,qe),e(Q,Re),e(Re,Dt),e(Q,De),e(Q,Le),e(Le,mn),e(H,Ot),e(H,O),e(O,se),e(O,ke),e(ke,we),e(O,fn),e(O,Me),e(Me,hn),e(H,At),e(H,Y),e(Y,un),e(Y,Oe),e(Oe,re)},d(w){w&&o(d),w&&o(u),w&&o(c),w&&o(Ue),w&&o(j),w&&o(Z),w&&o(Fe),w&&o(qt),w&&o(H)}}}function O_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function A_(x){let d,b,u,c,_;return c=new A({props:{code:`import tensorflow as tf
from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="tf", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = tf.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function N_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function V_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function S_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function W_(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function B_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function U_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

model = TFCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function R_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function H_(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPVisionModel

model = TFCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function K_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function G_(x){let d,b,u,c,_;return c=new A({props:{code:`import jax
from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="np", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function J_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function X_(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function Z_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function Q_(x){let d,b,u,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

model = FlaxCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function Y_(x){let d,b,u,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(p,"CODE",{});var L=a(u);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,u),e(u,c),e(d,_)},d(n){n&&o(d)}}}function ev(x){let d,b,u,c,_;return c=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPVisionModel

model = FlaxCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),u=f(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,u,p),T(c,n,p),_=!0},p:S,i(n){_||(I(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(c,n)}}}function tv(x){let d,b,u,c,_,n,p,L,dn,Ue,j,ne,Ie,ye,pn,Ce,cn,Ft,Z,Fe,xe,qt,H,Q,qe,Re,Dt,De,Le,mn,Ot,O,se,ke,we,fn,Me,hn,At,Y,un,Oe,re,w,z,Nt,Xs,gn,M,Zs,He,Qs,Ae,ae,Ys,er,ie,tr,or,Ne,nr,hd,sr,ud,gd,rr,_d,vd,Ri,_n,Hi,Ve,bd,vn,Pd,$d,bn,Td,Id,Ki,Ke,Vt,aa,Pn,yd,ia,Cd,Gi,ee,$n,xd,St,ar,Ld,kd,ir,wd,Md,Ed,Ge,jd,lr,zd,Fd,dr,qd,Dd,Od,Wt,Tn,Ad,In,Nd,pr,Vd,Sd,Ji,Je,Bt,la,yn,Wd,da,Bd,Xi,te,Cn,Ud,Xe,Rd,cr,Hd,Kd,xn,Gd,Jd,Xd,Ze,Zd,mr,Qd,Yd,fr,ep,tp,op,Ut,Zi,Qe,Rt,pa,Ln,np,ca,sp,Qi,oe,kn,rp,Ye,ap,hr,ip,lp,wn,dp,pp,cp,et,mp,ur,fp,hp,gr,up,gp,_p,Ht,Yi,tt,Kt,ma,Mn,vp,fa,bp,el,F,En,Pp,ha,$p,Tp,jn,Ip,_r,yp,Cp,xp,le,zn,Lp,ua,kp,wp,ga,vr,Mp,_a,Ep,jp,va,zp,Fp,Gt,Fn,qp,qn,Dp,ba,Op,Ap,Np,Jt,Dn,Vp,Pa,Sp,Wp,br,On,tl,ot,Xt,$a,An,Bp,Ta,Up,ol,B,Nn,Rp,Vn,Hp,Ia,Kp,Gp,Jp,Sn,Xp,Pr,Zp,Qp,Yp,de,Wn,ec,ya,tc,oc,Ca,$r,nc,xa,sc,rc,La,ac,ic,Zt,Bn,lc,ka,dc,nl,nt,Qt,wa,Un,pc,Ma,cc,sl,Ee,Rn,mc,Ea,fc,hc,Hn,uc,Tr,gc,_c,rl,st,Yt,ja,Kn,vc,za,bc,al,U,Gn,Pc,Fa,$c,Tc,K,Ir,Ic,yc,yr,Cc,xc,Cr,Lc,kc,qa,wc,Mc,xr,Ec,jc,zc,eo,Jn,Fc,Xn,qc,Lr,Dc,Oc,Ac,to,Zn,Nc,Qn,Vc,kr,Sc,Wc,il,rt,oo,Da,Yn,Bc,Oa,Uc,ll,R,es,Rc,ts,Hc,os,Kc,Gc,Jc,pe,ns,Xc,at,Zc,wr,Qc,Yc,Aa,em,tm,om,no,nm,so,sm,ce,ss,rm,it,am,Mr,im,lm,Na,dm,pm,cm,ro,mm,ao,fm,me,rs,hm,lt,um,Er,gm,_m,Va,vm,bm,Pm,io,$m,lo,dl,dt,po,Sa,as,Tm,Wa,Im,pl,pt,is,ym,fe,ls,Cm,ct,xm,jr,Lm,km,Ba,wm,Mm,Em,co,jm,mo,cl,mt,fo,Ua,ds,zm,Ra,Fm,ml,ft,ps,qm,he,cs,Dm,ht,Om,zr,Am,Nm,Ha,Vm,Sm,Wm,ho,Bm,uo,fl,ut,go,Ka,ms,Um,Ga,Rm,hl,q,fs,Hm,hs,Km,Fr,Gm,Jm,Xm,us,Zm,gs,Qm,Ym,ef,_o,tf,ue,_s,of,gt,nf,qr,sf,rf,Ja,af,lf,df,vo,pf,bo,cf,ge,vs,mf,_t,ff,Dr,hf,uf,Xa,gf,_f,vf,Po,bf,$o,Pf,_e,bs,$f,vt,Tf,Or,If,yf,Za,Cf,xf,Lf,To,kf,Io,ul,bt,yo,Qa,Ps,wf,Ya,Mf,gl,Pt,$s,Ef,ve,Ts,jf,$t,zf,Ar,Ff,qf,ei,Df,Of,Af,Co,Nf,xo,_l,Tt,Lo,ti,Is,Vf,oi,Sf,vl,It,ys,Wf,be,Cs,Bf,yt,Uf,Nr,Rf,Hf,ni,Kf,Gf,Jf,ko,Xf,wo,bl,Ct,Mo,si,xs,Zf,ri,Qf,Pl,E,Ls,Yf,ks,eh,Vr,th,oh,nh,ws,sh,Ms,rh,ah,ih,ai,lh,dh,je,ii,Es,ph,ch,li,js,mh,fh,di,zs,hh,uh,pi,Fs,gh,_h,Pe,qs,vh,xt,bh,ci,Ph,$h,mi,Th,Ih,yh,Eo,Ch,jo,xh,zo,Ds,Lh,Fo,kh,qo,Os,wh,Do,$l,Lt,Oo,fi,As,Mh,hi,Eh,Tl,kt,Ns,jh,$e,Vs,zh,wt,Fh,ui,qh,Dh,gi,Oh,Ah,Nh,Ao,Vh,No,Il,Mt,Vo,_i,Ss,Sh,vi,Wh,yl,Et,Ws,Bh,Te,Bs,Uh,jt,Rh,bi,Hh,Kh,Pi,Gh,Jh,Xh,So,Zh,Wo,Cl;return n=new D({}),ye=new D({}),we=new D({}),_n=new A({props:{code:`from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Pn=new D({}),$n=new k({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/configuration_clip.py#L245"}}),Tn=new k({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),yn=new D({}),Cn=new k({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CLIPTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/configuration_clip.py#L33"}}),Ut=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[y_]},$$scope:{ctx:x}}}),Ln=new D({}),kn=new k({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.CLIPVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.CLIPVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/configuration_clip.py#L141"}}),Ht=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[C_]},$$scope:{ctx:x}}}),Mn=new D({}),En=new k({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip.py#L100"}}),zn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fn=new k({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip.py#L213",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Dn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip.py#L241",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),On=new k({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip.py#L336"}}),An=new D({}),Nn=new k({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),Wn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new D({}),Rn=new k({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"do_convert_rgb",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.CLIPFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.CLIPFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.CLIPFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.CLIPFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.CLIPFeatureExtractor.convert_rgb",description:`<strong>convert_rgb</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/feature_extraction_clip.py#L30"}}),Kn=new D({}),Gn=new k({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/processing_clip.py#L22"}}),Jn=new k({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/processing_clip.py#L95"}}),Zn=new k({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/processing_clip.py#L102"}}),Yn=new D({}),es=new k({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L849"}}),ns=new k({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L980",returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new X({props:{$$slots:{default:[x_]},$$scope:{ctx:x}}}),so=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[L_]},$$scope:{ctx:x}}}),ss=new k({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L884",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ro=new X({props:{$$slots:{default:[k_]},$$scope:{ctx:x}}}),ao=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[w_]},$$scope:{ctx:x}}}),rs=new k({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L931",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),io=new X({props:{$$slots:{default:[M_]},$$scope:{ctx:x}}}),lo=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[E_]},$$scope:{ctx:x}}}),as=new D({}),is=new k({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L685"}}),ls=new k({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L700",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new X({props:{$$slots:{default:[j_]},$$scope:{ctx:x}}}),mo=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[z_]},$$scope:{ctx:x}}}),ds=new D({}),ps=new k({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L796"}}),cs=new k({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_clip.py#L809",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new X({props:{$$slots:{default:[F_]},$$scope:{ctx:x}}}),uo=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[q_]},$$scope:{ctx:x}}}),ms=new D({}),fs=new k({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1213"}}),_o=new X({props:{$$slots:{default:[D_]},$$scope:{ctx:x}}}),_s=new k({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.call.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.TFCLIPModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1341",returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>tf.Tensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new X({props:{$$slots:{default:[O_]},$$scope:{ctx:x}}}),bo=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[A_]},$$scope:{ctx:x}}}),vs=new k({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1259",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Po=new X({props:{$$slots:{default:[N_]},$$scope:{ctx:x}}}),$o=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[V_]},$$scope:{ctx:x}}}),bs=new k({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1299",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),To=new X({props:{$$slots:{default:[S_]},$$scope:{ctx:x}}}),Io=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[W_]},$$scope:{ctx:x}}}),Ps=new D({}),$s=new k({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1040"}}),Ts=new k({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPTextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPTextModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPTextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPTextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPTextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1048",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new X({props:{$$slots:{default:[B_]},$$scope:{ctx:x}}}),xo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[U_]},$$scope:{ctx:x}}}),Is=new D({}),ys=new k({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1115"}}),Cs=new k({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_tf_clip.py#L1156",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ko=new X({props:{$$slots:{default:[R_]},$$scope:{ctx:x}}}),wo=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[H_]},$$scope:{ctx:x}}}),xs=new D({}),Ls=new k({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17313/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),qs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L777",returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new X({props:{$$slots:{default:[K_]},$$scope:{ctx:x}}}),jo=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[G_]},$$scope:{ctx:x}}}),Ds=new k({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L822",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Fo=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[J_]},$$scope:{ctx:x}}}),Os=new k({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Do=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[X_]},$$scope:{ctx:x}}}),As=new D({}),Ns=new k({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),Vs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPTextModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPTextModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L622",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new X({props:{$$slots:{default:[Z_]},$$scope:{ctx:x}}}),No=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[Q_]},$$scope:{ctx:x}}}),Ss=new D({}),Ws=new k({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),Bs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17313/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17313/src/transformers/models/clip/modeling_flax_clip.py#L702",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_17313/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new X({props:{$$slots:{default:[Y_]},$$scope:{ctx:x}}}),Wo=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[ev]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=m(),u=s("h1"),c=s("a"),_=s("span"),P(n.$$.fragment),p=m(),L=s("span"),dn=i("CLIP"),Ue=m(),j=s("h2"),ne=s("a"),Ie=s("span"),P(ye.$$.fragment),pn=m(),Ce=s("span"),cn=i("Overview"),Ft=m(),Z=s("p"),Fe=i("The CLIP model was proposed in "),xe=s("a"),qt=i("Learning Transferable Visual Models From Natural Language Supervision"),H=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Q=m(),qe=s("p"),Re=i("The abstract from the paper is the following:"),Dt=m(),De=s("p"),Le=s("em"),mn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),Ot=m(),O=s("h2"),se=s("a"),ke=s("span"),P(we.$$.fragment),fn=m(),Me=s("span"),hn=i("Usage"),At=m(),Y=s("p"),un=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Oe=m(),re=s("p"),w=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),z=s("a"),Nt=i("CLIPFeatureExtractor"),Xs=i(" can be used to resize (or rescale) and normalize images for the model."),gn=m(),M=s("p"),Zs=i("The "),He=s("a"),Qs=i("CLIPTokenizer"),Ae=i(" is used to encode the text. The "),ae=s("a"),Ys=i("CLIPProcessor"),er=i(` wraps
`),ie=s("a"),tr=i("CLIPFeatureExtractor"),or=i(" and "),Ne=s("a"),nr=i("CLIPTokenizer"),hd=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),sr=s("a"),ud=i("CLIPProcessor"),gd=i(" and "),rr=s("a"),_d=i("CLIPModel"),vd=i("."),Ri=m(),P(_n.$$.fragment),Hi=m(),Ve=s("p"),bd=i("This model was contributed by "),vn=s("a"),Pd=i("valhalla"),$d=i(". The original code can be found "),bn=s("a"),Td=i("here"),Id=i("."),Ki=m(),Ke=s("h2"),Vt=s("a"),aa=s("span"),P(Pn.$$.fragment),yd=m(),ia=s("span"),Cd=i("CLIPConfig"),Gi=m(),ee=s("div"),P($n.$$.fragment),xd=m(),St=s("p"),ar=s("a"),Ld=i("CLIPConfig"),kd=i(" is the configuration class to store the configuration of a "),ir=s("a"),wd=i("CLIPModel"),Md=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ed=m(),Ge=s("p"),jd=i("Configuration objects inherit from "),lr=s("a"),zd=i("PretrainedConfig"),Fd=i(` and can be used to control the model outputs. Read the
documentation from `),dr=s("a"),qd=i("PretrainedConfig"),Dd=i(" for more information."),Od=m(),Wt=s("div"),P(Tn.$$.fragment),Ad=m(),In=s("p"),Nd=i("Instantiate a "),pr=s("a"),Vd=i("CLIPConfig"),Sd=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ji=m(),Je=s("h2"),Bt=s("a"),la=s("span"),P(yn.$$.fragment),Wd=m(),da=s("span"),Bd=i("CLIPTextConfig"),Xi=m(),te=s("div"),P(Cn.$$.fragment),Ud=m(),Xe=s("p"),Rd=i("This is the configuration class to store the configuration of a "),cr=s("a"),Hd=i("CLIPModel"),Kd=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),xn=s("a"),Gd=i("openai/clip-vit-base-patch32"),Jd=i(" architecture."),Xd=m(),Ze=s("p"),Zd=i("Configuration objects inherit from "),mr=s("a"),Qd=i("PretrainedConfig"),Yd=i(` and can be used to control the model outputs. Read the
documentation from `),fr=s("a"),ep=i("PretrainedConfig"),tp=i(" for more information."),op=m(),P(Ut.$$.fragment),Zi=m(),Qe=s("h2"),Rt=s("a"),pa=s("span"),P(Ln.$$.fragment),np=m(),ca=s("span"),sp=i("CLIPVisionConfig"),Qi=m(),oe=s("div"),P(kn.$$.fragment),rp=m(),Ye=s("p"),ap=i("This is the configuration class to store the configuration of a "),hr=s("a"),ip=i("CLIPModel"),lp=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),wn=s("a"),dp=i("openai/clip-vit-base-patch32"),pp=i(" architecture."),cp=m(),et=s("p"),mp=i("Configuration objects inherit from "),ur=s("a"),fp=i("PretrainedConfig"),hp=i(` and can be used to control the model outputs. Read the
documentation from `),gr=s("a"),up=i("PretrainedConfig"),gp=i(" for more information."),_p=m(),P(Ht.$$.fragment),Yi=m(),tt=s("h2"),Kt=s("a"),ma=s("span"),P(Mn.$$.fragment),vp=m(),fa=s("span"),bp=i("CLIPTokenizer"),el=m(),F=s("div"),P(En.$$.fragment),Pp=m(),ha=s("p"),$p=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Tp=m(),jn=s("p"),Ip=i("This tokenizer inherits from "),_r=s("a"),yp=i("PreTrainedTokenizer"),Cp=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xp=m(),le=s("div"),P(zn.$$.fragment),Lp=m(),ua=s("p"),kp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),wp=m(),ga=s("ul"),vr=s("li"),Mp=i("single sequence: "),_a=s("code"),Ep=i("<|startoftext|> X <|endoftext|>"),jp=m(),va=s("p"),zp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Fp=m(),Gt=s("div"),P(Fn.$$.fragment),qp=m(),qn=s("p"),Dp=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ba=s("code"),Op=i("prepare_for_model"),Ap=i(" method."),Np=m(),Jt=s("div"),P(Dn.$$.fragment),Vp=m(),Pa=s("p"),Sp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Wp=m(),br=s("div"),P(On.$$.fragment),tl=m(),ot=s("h2"),Xt=s("a"),$a=s("span"),P(An.$$.fragment),Bp=m(),Ta=s("span"),Up=i("CLIPTokenizerFast"),ol=m(),B=s("div"),P(Nn.$$.fragment),Rp=m(),Vn=s("p"),Hp=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ia=s("em"),Kp=i("tokenizers"),Gp=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Jp=m(),Sn=s("p"),Xp=i("This tokenizer inherits from "),Pr=s("a"),Zp=i("PreTrainedTokenizerFast"),Qp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yp=m(),de=s("div"),P(Wn.$$.fragment),ec=m(),ya=s("p"),tc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),oc=m(),Ca=s("ul"),$r=s("li"),nc=i("single sequence: "),xa=s("code"),sc=i("<|startoftext|> X <|endoftext|>"),rc=m(),La=s("p"),ac=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),ic=m(),Zt=s("div"),P(Bn.$$.fragment),lc=m(),ka=s("p"),dc=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),nl=m(),nt=s("h2"),Qt=s("a"),wa=s("span"),P(Un.$$.fragment),pc=m(),Ma=s("span"),cc=i("CLIPFeatureExtractor"),sl=m(),Ee=s("div"),P(Rn.$$.fragment),mc=m(),Ea=s("p"),fc=i("Constructs a CLIP feature extractor."),hc=m(),Hn=s("p"),uc=i("This feature extractor inherits from "),Tr=s("a"),gc=i("FeatureExtractionMixin"),_c=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),rl=m(),st=s("h2"),Yt=s("a"),ja=s("span"),P(Kn.$$.fragment),vc=m(),za=s("span"),bc=i("CLIPProcessor"),al=m(),U=s("div"),P(Gn.$$.fragment),Pc=m(),Fa=s("p"),$c=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Tc=m(),K=s("p"),Ir=s("a"),Ic=i("CLIPProcessor"),yc=i(" offers all the functionalities of "),yr=s("a"),Cc=i("CLIPFeatureExtractor"),xc=i(" and "),Cr=s("a"),Lc=i("CLIPTokenizerFast"),kc=i(`. See the
`),qa=s("code"),wc=i("__call__()"),Mc=i(" and "),xr=s("a"),Ec=i("decode()"),jc=i(" for more information."),zc=m(),eo=s("div"),P(Jn.$$.fragment),Fc=m(),Xn=s("p"),qc=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Lr=s("a"),Dc=i("batch_decode()"),Oc=i(`. Please
refer to the docstring of this method for more information.`),Ac=m(),to=s("div"),P(Zn.$$.fragment),Nc=m(),Qn=s("p"),Vc=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),kr=s("a"),Sc=i("decode()"),Wc=i(`. Please refer to
the docstring of this method for more information.`),il=m(),rt=s("h2"),oo=s("a"),Da=s("span"),P(Yn.$$.fragment),Bc=m(),Oa=s("span"),Uc=i("CLIPModel"),ll=m(),R=s("div"),P(es.$$.fragment),Rc=m(),ts=s("p"),Hc=i("This model is a PyTorch "),os=s("a"),Kc=i("torch.nn.Module"),Gc=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jc=m(),pe=s("div"),P(ns.$$.fragment),Xc=m(),at=s("p"),Zc=i("The "),wr=s("a"),Qc=i("CLIPModel"),Yc=i(" forward method, overrides the "),Aa=s("code"),em=i("__call__"),tm=i(" special method."),om=m(),P(no.$$.fragment),nm=m(),P(so.$$.fragment),sm=m(),ce=s("div"),P(ss.$$.fragment),rm=m(),it=s("p"),am=i("The "),Mr=s("a"),im=i("CLIPModel"),lm=i(" forward method, overrides the "),Na=s("code"),dm=i("__call__"),pm=i(" special method."),cm=m(),P(ro.$$.fragment),mm=m(),P(ao.$$.fragment),fm=m(),me=s("div"),P(rs.$$.fragment),hm=m(),lt=s("p"),um=i("The "),Er=s("a"),gm=i("CLIPModel"),_m=i(" forward method, overrides the "),Va=s("code"),vm=i("__call__"),bm=i(" special method."),Pm=m(),P(io.$$.fragment),$m=m(),P(lo.$$.fragment),dl=m(),dt=s("h2"),po=s("a"),Sa=s("span"),P(as.$$.fragment),Tm=m(),Wa=s("span"),Im=i("CLIPTextModel"),pl=m(),pt=s("div"),P(is.$$.fragment),ym=m(),fe=s("div"),P(ls.$$.fragment),Cm=m(),ct=s("p"),xm=i("The "),jr=s("a"),Lm=i("CLIPTextModel"),km=i(" forward method, overrides the "),Ba=s("code"),wm=i("__call__"),Mm=i(" special method."),Em=m(),P(co.$$.fragment),jm=m(),P(mo.$$.fragment),cl=m(),mt=s("h2"),fo=s("a"),Ua=s("span"),P(ds.$$.fragment),zm=m(),Ra=s("span"),Fm=i("CLIPVisionModel"),ml=m(),ft=s("div"),P(ps.$$.fragment),qm=m(),he=s("div"),P(cs.$$.fragment),Dm=m(),ht=s("p"),Om=i("The "),zr=s("a"),Am=i("CLIPVisionModel"),Nm=i(" forward method, overrides the "),Ha=s("code"),Vm=i("__call__"),Sm=i(" special method."),Wm=m(),P(ho.$$.fragment),Bm=m(),P(uo.$$.fragment),fl=m(),ut=s("h2"),go=s("a"),Ka=s("span"),P(ms.$$.fragment),Um=m(),Ga=s("span"),Rm=i("TFCLIPModel"),hl=m(),q=s("div"),P(fs.$$.fragment),Hm=m(),hs=s("p"),Km=i("This model inherits from "),Fr=s("a"),Gm=i("TFPreTrainedModel"),Jm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xm=m(),us=s("p"),Zm=i("This model is also a "),gs=s("a"),Qm=i("tf.keras.Model"),Ym=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ef=m(),P(_o.$$.fragment),tf=m(),ue=s("div"),P(_s.$$.fragment),of=m(),gt=s("p"),nf=i("The "),qr=s("a"),sf=i("TFCLIPModel"),rf=i(" forward method, overrides the "),Ja=s("code"),af=i("__call__"),lf=i(" special method."),df=m(),P(vo.$$.fragment),pf=m(),P(bo.$$.fragment),cf=m(),ge=s("div"),P(vs.$$.fragment),mf=m(),_t=s("p"),ff=i("The "),Dr=s("a"),hf=i("TFCLIPModel"),uf=i(" forward method, overrides the "),Xa=s("code"),gf=i("__call__"),_f=i(" special method."),vf=m(),P(Po.$$.fragment),bf=m(),P($o.$$.fragment),Pf=m(),_e=s("div"),P(bs.$$.fragment),$f=m(),vt=s("p"),Tf=i("The "),Or=s("a"),If=i("TFCLIPModel"),yf=i(" forward method, overrides the "),Za=s("code"),Cf=i("__call__"),xf=i(" special method."),Lf=m(),P(To.$$.fragment),kf=m(),P(Io.$$.fragment),ul=m(),bt=s("h2"),yo=s("a"),Qa=s("span"),P(Ps.$$.fragment),wf=m(),Ya=s("span"),Mf=i("TFCLIPTextModel"),gl=m(),Pt=s("div"),P($s.$$.fragment),Ef=m(),ve=s("div"),P(Ts.$$.fragment),jf=m(),$t=s("p"),zf=i("The "),Ar=s("a"),Ff=i("TFCLIPTextModel"),qf=i(" forward method, overrides the "),ei=s("code"),Df=i("__call__"),Of=i(" special method."),Af=m(),P(Co.$$.fragment),Nf=m(),P(xo.$$.fragment),_l=m(),Tt=s("h2"),Lo=s("a"),ti=s("span"),P(Is.$$.fragment),Vf=m(),oi=s("span"),Sf=i("TFCLIPVisionModel"),vl=m(),It=s("div"),P(ys.$$.fragment),Wf=m(),be=s("div"),P(Cs.$$.fragment),Bf=m(),yt=s("p"),Uf=i("The "),Nr=s("a"),Rf=i("TFCLIPVisionModel"),Hf=i(" forward method, overrides the "),ni=s("code"),Kf=i("__call__"),Gf=i(" special method."),Jf=m(),P(ko.$$.fragment),Xf=m(),P(wo.$$.fragment),bl=m(),Ct=s("h2"),Mo=s("a"),si=s("span"),P(xs.$$.fragment),Zf=m(),ri=s("span"),Qf=i("FlaxCLIPModel"),Pl=m(),E=s("div"),P(Ls.$$.fragment),Yf=m(),ks=s("p"),eh=i("This model inherits from "),Vr=s("a"),th=i("FlaxPreTrainedModel"),oh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nh=m(),ws=s("p"),sh=i("This model is also a Flax Linen "),Ms=s("a"),rh=i("flax.linen.Module"),ah=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ih=m(),ai=s("p"),lh=i("Finally, this model supports inherent JAX features such as:"),dh=m(),je=s("ul"),ii=s("li"),Es=s("a"),ph=i("Just-In-Time (JIT) compilation"),ch=m(),li=s("li"),js=s("a"),mh=i("Automatic Differentiation"),fh=m(),di=s("li"),zs=s("a"),hh=i("Vectorization"),uh=m(),pi=s("li"),Fs=s("a"),gh=i("Parallelization"),_h=m(),Pe=s("div"),P(qs.$$.fragment),vh=m(),xt=s("p"),bh=i("The "),ci=s("code"),Ph=i("FlaxCLIPPreTrainedModel"),$h=i(" forward method, overrides the "),mi=s("code"),Th=i("__call__"),Ih=i(" special method."),yh=m(),P(Eo.$$.fragment),Ch=m(),P(jo.$$.fragment),xh=m(),zo=s("div"),P(Ds.$$.fragment),Lh=m(),P(Fo.$$.fragment),kh=m(),qo=s("div"),P(Os.$$.fragment),wh=m(),P(Do.$$.fragment),$l=m(),Lt=s("h2"),Oo=s("a"),fi=s("span"),P(As.$$.fragment),Mh=m(),hi=s("span"),Eh=i("FlaxCLIPTextModel"),Tl=m(),kt=s("div"),P(Ns.$$.fragment),jh=m(),$e=s("div"),P(Vs.$$.fragment),zh=m(),wt=s("p"),Fh=i("The "),ui=s("code"),qh=i("FlaxCLIPTextPreTrainedModel"),Dh=i(" forward method, overrides the "),gi=s("code"),Oh=i("__call__"),Ah=i(" special method."),Nh=m(),P(Ao.$$.fragment),Vh=m(),P(No.$$.fragment),Il=m(),Mt=s("h2"),Vo=s("a"),_i=s("span"),P(Ss.$$.fragment),Sh=m(),vi=s("span"),Wh=i("FlaxCLIPVisionModel"),yl=m(),Et=s("div"),P(Ws.$$.fragment),Bh=m(),Te=s("div"),P(Bs.$$.fragment),Uh=m(),jt=s("p"),Rh=i("The "),bi=s("code"),Hh=i("FlaxCLIPVisionPreTrainedModel"),Kh=i(" forward method, overrides the "),Pi=s("code"),Gh=i("__call__"),Jh=i(" special method."),Xh=m(),P(So.$$.fragment),Zh=m(),P(Wo.$$.fragment),this.h()},l(t){const g=T_('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),u=r(t,"H1",{class:!0});var Us=a(u);c=r(Us,"A",{id:!0,class:!0,href:!0});var $i=a(c);_=r($i,"SPAN",{});var Ti=a(_);$(n.$$.fragment,Ti),Ti.forEach(o),$i.forEach(o),p=f(Us),L=r(Us,"SPAN",{});var Ii=a(L);dn=l(Ii,"CLIP"),Ii.forEach(o),Us.forEach(o),Ue=f(t),j=r(t,"H2",{class:!0});var Rs=a(j);ne=r(Rs,"A",{id:!0,class:!0,href:!0});var yi=a(ne);Ie=r(yi,"SPAN",{});var Ci=a(Ie);$(ye.$$.fragment,Ci),Ci.forEach(o),yi.forEach(o),pn=f(Rs),Ce=r(Rs,"SPAN",{});var xi=a(Ce);cn=l(xi,"Overview"),xi.forEach(o),Rs.forEach(o),Ft=f(t),Z=r(t,"P",{});var Hs=a(Z);Fe=l(Hs,"The CLIP model was proposed in "),xe=r(Hs,"A",{href:!0,rel:!0});var Li=a(xe);qt=l(Li,"Learning Transferable Visual Models From Natural Language Supervision"),Li.forEach(o),H=l(Hs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Hs.forEach(o),Q=f(t),qe=r(t,"P",{});var ki=a(qe);Re=l(ki,"The abstract from the paper is the following:"),ki.forEach(o),Dt=f(t),De=r(t,"P",{});var wi=a(De);Le=r(wi,"EM",{});var Mi=a(Le);mn=l(Mi,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),Mi.forEach(o),wi.forEach(o),Ot=f(t),O=r(t,"H2",{class:!0});var Ks=a(O);se=r(Ks,"A",{id:!0,class:!0,href:!0});var Ei=a(se);ke=r(Ei,"SPAN",{});var ji=a(ke);$(we.$$.fragment,ji),ji.forEach(o),Ei.forEach(o),fn=f(Ks),Me=r(Ks,"SPAN",{});var zi=a(Me);hn=l(zi,"Usage"),zi.forEach(o),Ks.forEach(o),At=f(t),Y=r(t,"P",{});var Fi=a(Y);un=l(Fi,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Fi.forEach(o),Oe=f(t),re=r(t,"P",{});var Gs=a(re);w=l(Gs,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),z=r(Gs,"A",{href:!0});var qi=a(z);Nt=l(qi,"CLIPFeatureExtractor"),qi.forEach(o),Xs=l(Gs," can be used to resize (or rescale) and normalize images for the model."),Gs.forEach(o),gn=f(t),M=r(t,"P",{});var N=a(M);Zs=l(N,"The "),He=r(N,"A",{href:!0});var Di=a(He);Qs=l(Di,"CLIPTokenizer"),Di.forEach(o),Ae=l(N," is used to encode the text. The "),ae=r(N,"A",{href:!0});var Oi=a(ae);Ys=l(Oi,"CLIPProcessor"),Oi.forEach(o),er=l(N,` wraps
`),ie=r(N,"A",{href:!0});var Ai=a(ie);tr=l(Ai,"CLIPFeatureExtractor"),Ai.forEach(o),or=l(N," and "),Ne=r(N,"A",{href:!0});var Ni=a(Ne);nr=l(Ni,"CLIPTokenizer"),Ni.forEach(o),hd=l(N,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),sr=r(N,"A",{href:!0});var Vi=a(sr);ud=l(Vi,"CLIPProcessor"),Vi.forEach(o),gd=l(N," and "),rr=r(N,"A",{href:!0});var Si=a(rr);_d=l(Si,"CLIPModel"),Si.forEach(o),vd=l(N,"."),N.forEach(o),Ri=f(t),$(_n.$$.fragment,t),Hi=f(t),Ve=r(t,"P",{});var zt=a(Ve);bd=l(zt,"This model was contributed by "),vn=r(zt,"A",{href:!0,rel:!0});var Wi=a(vn);Pd=l(Wi,"valhalla"),Wi.forEach(o),$d=l(zt,". The original code can be found "),bn=r(zt,"A",{href:!0,rel:!0});var Bi=a(bn);Td=l(Bi,"here"),Bi.forEach(o),Id=l(zt,"."),zt.forEach(o),Ki=f(t),Ke=r(t,"H2",{class:!0});var Js=a(Ke);Vt=r(Js,"A",{id:!0,class:!0,href:!0});var eu=a(Vt);aa=r(eu,"SPAN",{});var tu=a(aa);$(Pn.$$.fragment,tu),tu.forEach(o),eu.forEach(o),yd=f(Js),ia=r(Js,"SPAN",{});var ou=a(ia);Cd=l(ou,"CLIPConfig"),ou.forEach(o),Js.forEach(o),Gi=f(t),ee=r(t,"DIV",{class:!0});var Bo=a(ee);$($n.$$.fragment,Bo),xd=f(Bo),St=r(Bo,"P",{});var Ui=a(St);ar=r(Ui,"A",{href:!0});var nu=a(ar);Ld=l(nu,"CLIPConfig"),nu.forEach(o),kd=l(Ui," is the configuration class to store the configuration of a "),ir=r(Ui,"A",{href:!0});var su=a(ir);wd=l(su,"CLIPModel"),su.forEach(o),Md=l(Ui,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ui.forEach(o),Ed=f(Bo),Ge=r(Bo,"P",{});var Sr=a(Ge);jd=l(Sr,"Configuration objects inherit from "),lr=r(Sr,"A",{href:!0});var ru=a(lr);zd=l(ru,"PretrainedConfig"),ru.forEach(o),Fd=l(Sr,` and can be used to control the model outputs. Read the
documentation from `),dr=r(Sr,"A",{href:!0});var au=a(dr);qd=l(au,"PretrainedConfig"),au.forEach(o),Dd=l(Sr," for more information."),Sr.forEach(o),Od=f(Bo),Wt=r(Bo,"DIV",{class:!0});var xl=a(Wt);$(Tn.$$.fragment,xl),Ad=f(xl),In=r(xl,"P",{});var Ll=a(In);Nd=l(Ll,"Instantiate a "),pr=r(Ll,"A",{href:!0});var iu=a(pr);Vd=l(iu,"CLIPConfig"),iu.forEach(o),Sd=l(Ll,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ll.forEach(o),xl.forEach(o),Bo.forEach(o),Ji=f(t),Je=r(t,"H2",{class:!0});var kl=a(Je);Bt=r(kl,"A",{id:!0,class:!0,href:!0});var lu=a(Bt);la=r(lu,"SPAN",{});var du=a(la);$(yn.$$.fragment,du),du.forEach(o),lu.forEach(o),Wd=f(kl),da=r(kl,"SPAN",{});var pu=a(da);Bd=l(pu,"CLIPTextConfig"),pu.forEach(o),kl.forEach(o),Xi=f(t),te=r(t,"DIV",{class:!0});var Uo=a(te);$(Cn.$$.fragment,Uo),Ud=f(Uo),Xe=r(Uo,"P",{});var Wr=a(Xe);Rd=l(Wr,"This is the configuration class to store the configuration of a "),cr=r(Wr,"A",{href:!0});var cu=a(cr);Hd=l(cu,"CLIPModel"),cu.forEach(o),Kd=l(Wr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),xn=r(Wr,"A",{href:!0,rel:!0});var mu=a(xn);Gd=l(mu,"openai/clip-vit-base-patch32"),mu.forEach(o),Jd=l(Wr," architecture."),Wr.forEach(o),Xd=f(Uo),Ze=r(Uo,"P",{});var Br=a(Ze);Zd=l(Br,"Configuration objects inherit from "),mr=r(Br,"A",{href:!0});var fu=a(mr);Qd=l(fu,"PretrainedConfig"),fu.forEach(o),Yd=l(Br,` and can be used to control the model outputs. Read the
documentation from `),fr=r(Br,"A",{href:!0});var hu=a(fr);ep=l(hu,"PretrainedConfig"),hu.forEach(o),tp=l(Br," for more information."),Br.forEach(o),op=f(Uo),$(Ut.$$.fragment,Uo),Uo.forEach(o),Zi=f(t),Qe=r(t,"H2",{class:!0});var wl=a(Qe);Rt=r(wl,"A",{id:!0,class:!0,href:!0});var uu=a(Rt);pa=r(uu,"SPAN",{});var gu=a(pa);$(Ln.$$.fragment,gu),gu.forEach(o),uu.forEach(o),np=f(wl),ca=r(wl,"SPAN",{});var _u=a(ca);sp=l(_u,"CLIPVisionConfig"),_u.forEach(o),wl.forEach(o),Qi=f(t),oe=r(t,"DIV",{class:!0});var Ro=a(oe);$(kn.$$.fragment,Ro),rp=f(Ro),Ye=r(Ro,"P",{});var Ur=a(Ye);ap=l(Ur,"This is the configuration class to store the configuration of a "),hr=r(Ur,"A",{href:!0});var vu=a(hr);ip=l(vu,"CLIPModel"),vu.forEach(o),lp=l(Ur,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),wn=r(Ur,"A",{href:!0,rel:!0});var bu=a(wn);dp=l(bu,"openai/clip-vit-base-patch32"),bu.forEach(o),pp=l(Ur," architecture."),Ur.forEach(o),cp=f(Ro),et=r(Ro,"P",{});var Rr=a(et);mp=l(Rr,"Configuration objects inherit from "),ur=r(Rr,"A",{href:!0});var Pu=a(ur);fp=l(Pu,"PretrainedConfig"),Pu.forEach(o),hp=l(Rr,` and can be used to control the model outputs. Read the
documentation from `),gr=r(Rr,"A",{href:!0});var $u=a(gr);up=l($u,"PretrainedConfig"),$u.forEach(o),gp=l(Rr," for more information."),Rr.forEach(o),_p=f(Ro),$(Ht.$$.fragment,Ro),Ro.forEach(o),Yi=f(t),tt=r(t,"H2",{class:!0});var Ml=a(tt);Kt=r(Ml,"A",{id:!0,class:!0,href:!0});var Tu=a(Kt);ma=r(Tu,"SPAN",{});var Iu=a(ma);$(Mn.$$.fragment,Iu),Iu.forEach(o),Tu.forEach(o),vp=f(Ml),fa=r(Ml,"SPAN",{});var yu=a(fa);bp=l(yu,"CLIPTokenizer"),yu.forEach(o),Ml.forEach(o),el=f(t),F=r(t,"DIV",{class:!0});var G=a(F);$(En.$$.fragment,G),Pp=f(G),ha=r(G,"P",{});var Cu=a(ha);$p=l(Cu,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Cu.forEach(o),Tp=f(G),jn=r(G,"P",{});var El=a(jn);Ip=l(El,"This tokenizer inherits from "),_r=r(El,"A",{href:!0});var xu=a(_r);yp=l(xu,"PreTrainedTokenizer"),xu.forEach(o),Cp=l(El,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),El.forEach(o),xp=f(G),le=r(G,"DIV",{class:!0});var Ho=a(le);$(zn.$$.fragment,Ho),Lp=f(Ho),ua=r(Ho,"P",{});var Lu=a(ua);kp=l(Lu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Lu.forEach(o),wp=f(Ho),ga=r(Ho,"UL",{});var ku=a(ga);vr=r(ku,"LI",{});var Qh=a(vr);Mp=l(Qh,"single sequence: "),_a=r(Qh,"CODE",{});var wu=a(_a);Ep=l(wu,"<|startoftext|> X <|endoftext|>"),wu.forEach(o),Qh.forEach(o),ku.forEach(o),jp=f(Ho),va=r(Ho,"P",{});var Mu=a(va);zp=l(Mu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Mu.forEach(o),Ho.forEach(o),Fp=f(G),Gt=r(G,"DIV",{class:!0});var jl=a(Gt);$(Fn.$$.fragment,jl),qp=f(jl),qn=r(jl,"P",{});var zl=a(qn);Dp=l(zl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ba=r(zl,"CODE",{});var Eu=a(ba);Op=l(Eu,"prepare_for_model"),Eu.forEach(o),Ap=l(zl," method."),zl.forEach(o),jl.forEach(o),Np=f(G),Jt=r(G,"DIV",{class:!0});var Fl=a(Jt);$(Dn.$$.fragment,Fl),Vp=f(Fl),Pa=r(Fl,"P",{});var ju=a(Pa);Sp=l(ju,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ju.forEach(o),Fl.forEach(o),Wp=f(G),br=r(G,"DIV",{class:!0});var zu=a(br);$(On.$$.fragment,zu),zu.forEach(o),G.forEach(o),tl=f(t),ot=r(t,"H2",{class:!0});var ql=a(ot);Xt=r(ql,"A",{id:!0,class:!0,href:!0});var Fu=a(Xt);$a=r(Fu,"SPAN",{});var qu=a($a);$(An.$$.fragment,qu),qu.forEach(o),Fu.forEach(o),Bp=f(ql),Ta=r(ql,"SPAN",{});var Du=a(Ta);Up=l(Du,"CLIPTokenizerFast"),Du.forEach(o),ql.forEach(o),ol=f(t),B=r(t,"DIV",{class:!0});var Se=a(B);$(Nn.$$.fragment,Se),Rp=f(Se),Vn=r(Se,"P",{});var Dl=a(Vn);Hp=l(Dl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ia=r(Dl,"EM",{});var Ou=a(Ia);Kp=l(Ou,"tokenizers"),Ou.forEach(o),Gp=l(Dl,` library). Based on byte-level
Byte-Pair-Encoding.`),Dl.forEach(o),Jp=f(Se),Sn=r(Se,"P",{});var Ol=a(Sn);Xp=l(Ol,"This tokenizer inherits from "),Pr=r(Ol,"A",{href:!0});var Au=a(Pr);Zp=l(Au,"PreTrainedTokenizerFast"),Au.forEach(o),Qp=l(Ol,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ol.forEach(o),Yp=f(Se),de=r(Se,"DIV",{class:!0});var Ko=a(de);$(Wn.$$.fragment,Ko),ec=f(Ko),ya=r(Ko,"P",{});var Nu=a(ya);tc=l(Nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Nu.forEach(o),oc=f(Ko),Ca=r(Ko,"UL",{});var Vu=a(Ca);$r=r(Vu,"LI",{});var Yh=a($r);nc=l(Yh,"single sequence: "),xa=r(Yh,"CODE",{});var Su=a(xa);sc=l(Su,"<|startoftext|> X <|endoftext|>"),Su.forEach(o),Yh.forEach(o),Vu.forEach(o),rc=f(Ko),La=r(Ko,"P",{});var Wu=a(La);ac=l(Wu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Wu.forEach(o),Ko.forEach(o),ic=f(Se),Zt=r(Se,"DIV",{class:!0});var Al=a(Zt);$(Bn.$$.fragment,Al),lc=f(Al),ka=r(Al,"P",{});var Bu=a(ka);dc=l(Bu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Bu.forEach(o),Al.forEach(o),Se.forEach(o),nl=f(t),nt=r(t,"H2",{class:!0});var Nl=a(nt);Qt=r(Nl,"A",{id:!0,class:!0,href:!0});var Uu=a(Qt);wa=r(Uu,"SPAN",{});var Ru=a(wa);$(Un.$$.fragment,Ru),Ru.forEach(o),Uu.forEach(o),pc=f(Nl),Ma=r(Nl,"SPAN",{});var Hu=a(Ma);cc=l(Hu,"CLIPFeatureExtractor"),Hu.forEach(o),Nl.forEach(o),sl=f(t),Ee=r(t,"DIV",{class:!0});var Hr=a(Ee);$(Rn.$$.fragment,Hr),mc=f(Hr),Ea=r(Hr,"P",{});var Ku=a(Ea);fc=l(Ku,"Constructs a CLIP feature extractor."),Ku.forEach(o),hc=f(Hr),Hn=r(Hr,"P",{});var Vl=a(Hn);uc=l(Vl,"This feature extractor inherits from "),Tr=r(Vl,"A",{href:!0});var Gu=a(Tr);gc=l(Gu,"FeatureExtractionMixin"),Gu.forEach(o),_c=l(Vl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Vl.forEach(o),Hr.forEach(o),rl=f(t),st=r(t,"H2",{class:!0});var Sl=a(st);Yt=r(Sl,"A",{id:!0,class:!0,href:!0});var Ju=a(Yt);ja=r(Ju,"SPAN",{});var Xu=a(ja);$(Kn.$$.fragment,Xu),Xu.forEach(o),Ju.forEach(o),vc=f(Sl),za=r(Sl,"SPAN",{});var Zu=a(za);bc=l(Zu,"CLIPProcessor"),Zu.forEach(o),Sl.forEach(o),al=f(t),U=r(t,"DIV",{class:!0});var We=a(U);$(Gn.$$.fragment,We),Pc=f(We),Fa=r(We,"P",{});var Qu=a(Fa);$c=l(Qu,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Qu.forEach(o),Tc=f(We),K=r(We,"P",{});var ze=a(K);Ir=r(ze,"A",{href:!0});var Yu=a(Ir);Ic=l(Yu,"CLIPProcessor"),Yu.forEach(o),yc=l(ze," offers all the functionalities of "),yr=r(ze,"A",{href:!0});var eg=a(yr);Cc=l(eg,"CLIPFeatureExtractor"),eg.forEach(o),xc=l(ze," and "),Cr=r(ze,"A",{href:!0});var tg=a(Cr);Lc=l(tg,"CLIPTokenizerFast"),tg.forEach(o),kc=l(ze,`. See the
`),qa=r(ze,"CODE",{});var og=a(qa);wc=l(og,"__call__()"),og.forEach(o),Mc=l(ze," and "),xr=r(ze,"A",{href:!0});var ng=a(xr);Ec=l(ng,"decode()"),ng.forEach(o),jc=l(ze," for more information."),ze.forEach(o),zc=f(We),eo=r(We,"DIV",{class:!0});var Wl=a(eo);$(Jn.$$.fragment,Wl),Fc=f(Wl),Xn=r(Wl,"P",{});var Bl=a(Xn);qc=l(Bl,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Lr=r(Bl,"A",{href:!0});var sg=a(Lr);Dc=l(sg,"batch_decode()"),sg.forEach(o),Oc=l(Bl,`. Please
refer to the docstring of this method for more information.`),Bl.forEach(o),Wl.forEach(o),Ac=f(We),to=r(We,"DIV",{class:!0});var Ul=a(to);$(Zn.$$.fragment,Ul),Nc=f(Ul),Qn=r(Ul,"P",{});var Rl=a(Qn);Vc=l(Rl,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),kr=r(Rl,"A",{href:!0});var rg=a(kr);Sc=l(rg,"decode()"),rg.forEach(o),Wc=l(Rl,`. Please refer to
the docstring of this method for more information.`),Rl.forEach(o),Ul.forEach(o),We.forEach(o),il=f(t),rt=r(t,"H2",{class:!0});var Hl=a(rt);oo=r(Hl,"A",{id:!0,class:!0,href:!0});var ag=a(oo);Da=r(ag,"SPAN",{});var ig=a(Da);$(Yn.$$.fragment,ig),ig.forEach(o),ag.forEach(o),Bc=f(Hl),Oa=r(Hl,"SPAN",{});var lg=a(Oa);Uc=l(lg,"CLIPModel"),lg.forEach(o),Hl.forEach(o),ll=f(t),R=r(t,"DIV",{class:!0});var Be=a(R);$(es.$$.fragment,Be),Rc=f(Be),ts=r(Be,"P",{});var Kl=a(ts);Hc=l(Kl,"This model is a PyTorch "),os=r(Kl,"A",{href:!0,rel:!0});var dg=a(os);Kc=l(dg,"torch.nn.Module"),dg.forEach(o),Gc=l(Kl,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kl.forEach(o),Jc=f(Be),pe=r(Be,"DIV",{class:!0});var Go=a(pe);$(ns.$$.fragment,Go),Xc=f(Go),at=r(Go,"P",{});var Kr=a(at);Zc=l(Kr,"The "),wr=r(Kr,"A",{href:!0});var pg=a(wr);Qc=l(pg,"CLIPModel"),pg.forEach(o),Yc=l(Kr," forward method, overrides the "),Aa=r(Kr,"CODE",{});var cg=a(Aa);em=l(cg,"__call__"),cg.forEach(o),tm=l(Kr," special method."),Kr.forEach(o),om=f(Go),$(no.$$.fragment,Go),nm=f(Go),$(so.$$.fragment,Go),Go.forEach(o),sm=f(Be),ce=r(Be,"DIV",{class:!0});var Jo=a(ce);$(ss.$$.fragment,Jo),rm=f(Jo),it=r(Jo,"P",{});var Gr=a(it);am=l(Gr,"The "),Mr=r(Gr,"A",{href:!0});var mg=a(Mr);im=l(mg,"CLIPModel"),mg.forEach(o),lm=l(Gr," forward method, overrides the "),Na=r(Gr,"CODE",{});var fg=a(Na);dm=l(fg,"__call__"),fg.forEach(o),pm=l(Gr," special method."),Gr.forEach(o),cm=f(Jo),$(ro.$$.fragment,Jo),mm=f(Jo),$(ao.$$.fragment,Jo),Jo.forEach(o),fm=f(Be),me=r(Be,"DIV",{class:!0});var Xo=a(me);$(rs.$$.fragment,Xo),hm=f(Xo),lt=r(Xo,"P",{});var Jr=a(lt);um=l(Jr,"The "),Er=r(Jr,"A",{href:!0});var hg=a(Er);gm=l(hg,"CLIPModel"),hg.forEach(o),_m=l(Jr," forward method, overrides the "),Va=r(Jr,"CODE",{});var ug=a(Va);vm=l(ug,"__call__"),ug.forEach(o),bm=l(Jr," special method."),Jr.forEach(o),Pm=f(Xo),$(io.$$.fragment,Xo),$m=f(Xo),$(lo.$$.fragment,Xo),Xo.forEach(o),Be.forEach(o),dl=f(t),dt=r(t,"H2",{class:!0});var Gl=a(dt);po=r(Gl,"A",{id:!0,class:!0,href:!0});var gg=a(po);Sa=r(gg,"SPAN",{});var _g=a(Sa);$(as.$$.fragment,_g),_g.forEach(o),gg.forEach(o),Tm=f(Gl),Wa=r(Gl,"SPAN",{});var vg=a(Wa);Im=l(vg,"CLIPTextModel"),vg.forEach(o),Gl.forEach(o),pl=f(t),pt=r(t,"DIV",{class:!0});var Jl=a(pt);$(is.$$.fragment,Jl),ym=f(Jl),fe=r(Jl,"DIV",{class:!0});var Zo=a(fe);$(ls.$$.fragment,Zo),Cm=f(Zo),ct=r(Zo,"P",{});var Xr=a(ct);xm=l(Xr,"The "),jr=r(Xr,"A",{href:!0});var bg=a(jr);Lm=l(bg,"CLIPTextModel"),bg.forEach(o),km=l(Xr," forward method, overrides the "),Ba=r(Xr,"CODE",{});var Pg=a(Ba);wm=l(Pg,"__call__"),Pg.forEach(o),Mm=l(Xr," special method."),Xr.forEach(o),Em=f(Zo),$(co.$$.fragment,Zo),jm=f(Zo),$(mo.$$.fragment,Zo),Zo.forEach(o),Jl.forEach(o),cl=f(t),mt=r(t,"H2",{class:!0});var Xl=a(mt);fo=r(Xl,"A",{id:!0,class:!0,href:!0});var $g=a(fo);Ua=r($g,"SPAN",{});var Tg=a(Ua);$(ds.$$.fragment,Tg),Tg.forEach(o),$g.forEach(o),zm=f(Xl),Ra=r(Xl,"SPAN",{});var Ig=a(Ra);Fm=l(Ig,"CLIPVisionModel"),Ig.forEach(o),Xl.forEach(o),ml=f(t),ft=r(t,"DIV",{class:!0});var Zl=a(ft);$(ps.$$.fragment,Zl),qm=f(Zl),he=r(Zl,"DIV",{class:!0});var Qo=a(he);$(cs.$$.fragment,Qo),Dm=f(Qo),ht=r(Qo,"P",{});var Zr=a(ht);Om=l(Zr,"The "),zr=r(Zr,"A",{href:!0});var yg=a(zr);Am=l(yg,"CLIPVisionModel"),yg.forEach(o),Nm=l(Zr," forward method, overrides the "),Ha=r(Zr,"CODE",{});var Cg=a(Ha);Vm=l(Cg,"__call__"),Cg.forEach(o),Sm=l(Zr," special method."),Zr.forEach(o),Wm=f(Qo),$(ho.$$.fragment,Qo),Bm=f(Qo),$(uo.$$.fragment,Qo),Qo.forEach(o),Zl.forEach(o),fl=f(t),ut=r(t,"H2",{class:!0});var Ql=a(ut);go=r(Ql,"A",{id:!0,class:!0,href:!0});var xg=a(go);Ka=r(xg,"SPAN",{});var Lg=a(Ka);$(ms.$$.fragment,Lg),Lg.forEach(o),xg.forEach(o),Um=f(Ql),Ga=r(Ql,"SPAN",{});var kg=a(Ga);Rm=l(kg,"TFCLIPModel"),kg.forEach(o),Ql.forEach(o),hl=f(t),q=r(t,"DIV",{class:!0});var J=a(q);$(fs.$$.fragment,J),Hm=f(J),hs=r(J,"P",{});var Yl=a(hs);Km=l(Yl,"This model inherits from "),Fr=r(Yl,"A",{href:!0});var wg=a(Fr);Gm=l(wg,"TFPreTrainedModel"),wg.forEach(o),Jm=l(Yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yl.forEach(o),Xm=f(J),us=r(J,"P",{});var ed=a(us);Zm=l(ed,"This model is also a "),gs=r(ed,"A",{href:!0,rel:!0});var Mg=a(gs);Qm=l(Mg,"tf.keras.Model"),Mg.forEach(o),Ym=l(ed,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ed.forEach(o),ef=f(J),$(_o.$$.fragment,J),tf=f(J),ue=r(J,"DIV",{class:!0});var Yo=a(ue);$(_s.$$.fragment,Yo),of=f(Yo),gt=r(Yo,"P",{});var Qr=a(gt);nf=l(Qr,"The "),qr=r(Qr,"A",{href:!0});var Eg=a(qr);sf=l(Eg,"TFCLIPModel"),Eg.forEach(o),rf=l(Qr," forward method, overrides the "),Ja=r(Qr,"CODE",{});var jg=a(Ja);af=l(jg,"__call__"),jg.forEach(o),lf=l(Qr," special method."),Qr.forEach(o),df=f(Yo),$(vo.$$.fragment,Yo),pf=f(Yo),$(bo.$$.fragment,Yo),Yo.forEach(o),cf=f(J),ge=r(J,"DIV",{class:!0});var en=a(ge);$(vs.$$.fragment,en),mf=f(en),_t=r(en,"P",{});var Yr=a(_t);ff=l(Yr,"The "),Dr=r(Yr,"A",{href:!0});var zg=a(Dr);hf=l(zg,"TFCLIPModel"),zg.forEach(o),uf=l(Yr," forward method, overrides the "),Xa=r(Yr,"CODE",{});var Fg=a(Xa);gf=l(Fg,"__call__"),Fg.forEach(o),_f=l(Yr," special method."),Yr.forEach(o),vf=f(en),$(Po.$$.fragment,en),bf=f(en),$($o.$$.fragment,en),en.forEach(o),Pf=f(J),_e=r(J,"DIV",{class:!0});var tn=a(_e);$(bs.$$.fragment,tn),$f=f(tn),vt=r(tn,"P",{});var ea=a(vt);Tf=l(ea,"The "),Or=r(ea,"A",{href:!0});var qg=a(Or);If=l(qg,"TFCLIPModel"),qg.forEach(o),yf=l(ea," forward method, overrides the "),Za=r(ea,"CODE",{});var Dg=a(Za);Cf=l(Dg,"__call__"),Dg.forEach(o),xf=l(ea," special method."),ea.forEach(o),Lf=f(tn),$(To.$$.fragment,tn),kf=f(tn),$(Io.$$.fragment,tn),tn.forEach(o),J.forEach(o),ul=f(t),bt=r(t,"H2",{class:!0});var td=a(bt);yo=r(td,"A",{id:!0,class:!0,href:!0});var Og=a(yo);Qa=r(Og,"SPAN",{});var Ag=a(Qa);$(Ps.$$.fragment,Ag),Ag.forEach(o),Og.forEach(o),wf=f(td),Ya=r(td,"SPAN",{});var Ng=a(Ya);Mf=l(Ng,"TFCLIPTextModel"),Ng.forEach(o),td.forEach(o),gl=f(t),Pt=r(t,"DIV",{class:!0});var od=a(Pt);$($s.$$.fragment,od),Ef=f(od),ve=r(od,"DIV",{class:!0});var on=a(ve);$(Ts.$$.fragment,on),jf=f(on),$t=r(on,"P",{});var ta=a($t);zf=l(ta,"The "),Ar=r(ta,"A",{href:!0});var Vg=a(Ar);Ff=l(Vg,"TFCLIPTextModel"),Vg.forEach(o),qf=l(ta," forward method, overrides the "),ei=r(ta,"CODE",{});var Sg=a(ei);Df=l(Sg,"__call__"),Sg.forEach(o),Of=l(ta," special method."),ta.forEach(o),Af=f(on),$(Co.$$.fragment,on),Nf=f(on),$(xo.$$.fragment,on),on.forEach(o),od.forEach(o),_l=f(t),Tt=r(t,"H2",{class:!0});var nd=a(Tt);Lo=r(nd,"A",{id:!0,class:!0,href:!0});var Wg=a(Lo);ti=r(Wg,"SPAN",{});var Bg=a(ti);$(Is.$$.fragment,Bg),Bg.forEach(o),Wg.forEach(o),Vf=f(nd),oi=r(nd,"SPAN",{});var Ug=a(oi);Sf=l(Ug,"TFCLIPVisionModel"),Ug.forEach(o),nd.forEach(o),vl=f(t),It=r(t,"DIV",{class:!0});var sd=a(It);$(ys.$$.fragment,sd),Wf=f(sd),be=r(sd,"DIV",{class:!0});var nn=a(be);$(Cs.$$.fragment,nn),Bf=f(nn),yt=r(nn,"P",{});var oa=a(yt);Uf=l(oa,"The "),Nr=r(oa,"A",{href:!0});var Rg=a(Nr);Rf=l(Rg,"TFCLIPVisionModel"),Rg.forEach(o),Hf=l(oa," forward method, overrides the "),ni=r(oa,"CODE",{});var Hg=a(ni);Kf=l(Hg,"__call__"),Hg.forEach(o),Gf=l(oa," special method."),oa.forEach(o),Jf=f(nn),$(ko.$$.fragment,nn),Xf=f(nn),$(wo.$$.fragment,nn),nn.forEach(o),sd.forEach(o),bl=f(t),Ct=r(t,"H2",{class:!0});var rd=a(Ct);Mo=r(rd,"A",{id:!0,class:!0,href:!0});var Kg=a(Mo);si=r(Kg,"SPAN",{});var Gg=a(si);$(xs.$$.fragment,Gg),Gg.forEach(o),Kg.forEach(o),Zf=f(rd),ri=r(rd,"SPAN",{});var Jg=a(ri);Qf=l(Jg,"FlaxCLIPModel"),Jg.forEach(o),rd.forEach(o),Pl=f(t),E=r(t,"DIV",{class:!0});var W=a(E);$(Ls.$$.fragment,W),Yf=f(W),ks=r(W,"P",{});var ad=a(ks);eh=l(ad,"This model inherits from "),Vr=r(ad,"A",{href:!0});var Xg=a(Vr);th=l(Xg,"FlaxPreTrainedModel"),Xg.forEach(o),oh=l(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ad.forEach(o),nh=f(W),ws=r(W,"P",{});var id=a(ws);sh=l(id,"This model is also a Flax Linen "),Ms=r(id,"A",{href:!0,rel:!0});var Zg=a(Ms);rh=l(Zg,"flax.linen.Module"),Zg.forEach(o),ah=l(id,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),id.forEach(o),ih=f(W),ai=r(W,"P",{});var Qg=a(ai);lh=l(Qg,"Finally, this model supports inherent JAX features such as:"),Qg.forEach(o),dh=f(W),je=r(W,"UL",{});var sn=a(je);ii=r(sn,"LI",{});var Yg=a(ii);Es=r(Yg,"A",{href:!0,rel:!0});var e_=a(Es);ph=l(e_,"Just-In-Time (JIT) compilation"),e_.forEach(o),Yg.forEach(o),ch=f(sn),li=r(sn,"LI",{});var t_=a(li);js=r(t_,"A",{href:!0,rel:!0});var o_=a(js);mh=l(o_,"Automatic Differentiation"),o_.forEach(o),t_.forEach(o),fh=f(sn),di=r(sn,"LI",{});var n_=a(di);zs=r(n_,"A",{href:!0,rel:!0});var s_=a(zs);hh=l(s_,"Vectorization"),s_.forEach(o),n_.forEach(o),uh=f(sn),pi=r(sn,"LI",{});var r_=a(pi);Fs=r(r_,"A",{href:!0,rel:!0});var a_=a(Fs);gh=l(a_,"Parallelization"),a_.forEach(o),r_.forEach(o),sn.forEach(o),_h=f(W),Pe=r(W,"DIV",{class:!0});var rn=a(Pe);$(qs.$$.fragment,rn),vh=f(rn),xt=r(rn,"P",{});var na=a(xt);bh=l(na,"The "),ci=r(na,"CODE",{});var i_=a(ci);Ph=l(i_,"FlaxCLIPPreTrainedModel"),i_.forEach(o),$h=l(na," forward method, overrides the "),mi=r(na,"CODE",{});var l_=a(mi);Th=l(l_,"__call__"),l_.forEach(o),Ih=l(na," special method."),na.forEach(o),yh=f(rn),$(Eo.$$.fragment,rn),Ch=f(rn),$(jo.$$.fragment,rn),rn.forEach(o),xh=f(W),zo=r(W,"DIV",{class:!0});var ld=a(zo);$(Ds.$$.fragment,ld),Lh=f(ld),$(Fo.$$.fragment,ld),ld.forEach(o),kh=f(W),qo=r(W,"DIV",{class:!0});var dd=a(qo);$(Os.$$.fragment,dd),wh=f(dd),$(Do.$$.fragment,dd),dd.forEach(o),W.forEach(o),$l=f(t),Lt=r(t,"H2",{class:!0});var pd=a(Lt);Oo=r(pd,"A",{id:!0,class:!0,href:!0});var d_=a(Oo);fi=r(d_,"SPAN",{});var p_=a(fi);$(As.$$.fragment,p_),p_.forEach(o),d_.forEach(o),Mh=f(pd),hi=r(pd,"SPAN",{});var c_=a(hi);Eh=l(c_,"FlaxCLIPTextModel"),c_.forEach(o),pd.forEach(o),Tl=f(t),kt=r(t,"DIV",{class:!0});var cd=a(kt);$(Ns.$$.fragment,cd),jh=f(cd),$e=r(cd,"DIV",{class:!0});var an=a($e);$(Vs.$$.fragment,an),zh=f(an),wt=r(an,"P",{});var sa=a(wt);Fh=l(sa,"The "),ui=r(sa,"CODE",{});var m_=a(ui);qh=l(m_,"FlaxCLIPTextPreTrainedModel"),m_.forEach(o),Dh=l(sa," forward method, overrides the "),gi=r(sa,"CODE",{});var f_=a(gi);Oh=l(f_,"__call__"),f_.forEach(o),Ah=l(sa," special method."),sa.forEach(o),Nh=f(an),$(Ao.$$.fragment,an),Vh=f(an),$(No.$$.fragment,an),an.forEach(o),cd.forEach(o),Il=f(t),Mt=r(t,"H2",{class:!0});var md=a(Mt);Vo=r(md,"A",{id:!0,class:!0,href:!0});var h_=a(Vo);_i=r(h_,"SPAN",{});var u_=a(_i);$(Ss.$$.fragment,u_),u_.forEach(o),h_.forEach(o),Sh=f(md),vi=r(md,"SPAN",{});var g_=a(vi);Wh=l(g_,"FlaxCLIPVisionModel"),g_.forEach(o),md.forEach(o),yl=f(t),Et=r(t,"DIV",{class:!0});var fd=a(Et);$(Ws.$$.fragment,fd),Bh=f(fd),Te=r(fd,"DIV",{class:!0});var ln=a(Te);$(Bs.$$.fragment,ln),Uh=f(ln),jt=r(ln,"P",{});var ra=a(jt);Rh=l(ra,"The "),bi=r(ra,"CODE",{});var __=a(bi);Hh=l(__,"FlaxCLIPVisionPreTrainedModel"),__.forEach(o),Kh=l(ra," forward method, overrides the "),Pi=r(ra,"CODE",{});var v_=a(Pi);Gh=l(v_,"__call__"),v_.forEach(o),Jh=l(ra," special method."),ra.forEach(o),Xh=f(ln),$(So.$$.fragment,ln),Zh=f(ln),$(Wo.$$.fragment,ln),ln.forEach(o),fd.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(ov)),h(c,"id","clip"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#clip"),h(u,"class","relative group"),h(ne,"id","overview"),h(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ne,"href","#overview"),h(j,"class","relative group"),h(xe,"href","https://arxiv.org/abs/2103.00020"),h(xe,"rel","nofollow"),h(se,"id","usage"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#usage"),h(O,"class","relative group"),h(z,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(He,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer"),h(ae,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPProcessor"),h(ie,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Ne,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizer"),h(sr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPProcessor"),h(rr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(vn,"href","https://huggingface.co/valhalla"),h(vn,"rel","nofollow"),h(bn,"href","https://github.com/openai/CLIP"),h(bn,"rel","nofollow"),h(Vt,"id","transformers.CLIPConfig"),h(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vt,"href","#transformers.CLIPConfig"),h(Ke,"class","relative group"),h(ar,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPConfig"),h(ir,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(lr,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),h(dr,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),h(pr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPConfig"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bt,"id","transformers.CLIPTextConfig"),h(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bt,"href","#transformers.CLIPTextConfig"),h(Je,"class","relative group"),h(cr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(xn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(xn,"rel","nofollow"),h(mr,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),h(fr,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),h(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"id","transformers.CLIPVisionConfig"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#transformers.CLIPVisionConfig"),h(Qe,"class","relative group"),h(hr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(wn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(wn,"rel","nofollow"),h(ur,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),h(gr,"href","/docs/transformers/pr_17313/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kt,"id","transformers.CLIPTokenizer"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#transformers.CLIPTokenizer"),h(tt,"class","relative group"),h(_r,"href","/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(br,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"id","transformers.CLIPTokenizerFast"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#transformers.CLIPTokenizerFast"),h(ot,"class","relative group"),h(Pr,"href","/docs/transformers/pr_17313/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qt,"id","transformers.CLIPFeatureExtractor"),h(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qt,"href","#transformers.CLIPFeatureExtractor"),h(nt,"class","relative group"),h(Tr,"href","/docs/transformers/pr_17313/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),h(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"id","transformers.CLIPProcessor"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.CLIPProcessor"),h(st,"class","relative group"),h(Ir,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPProcessor"),h(yr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Cr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(xr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Lr,"href","/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(kr,"href","/docs/transformers/pr_17313/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oo,"id","transformers.CLIPModel"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.CLIPModel"),h(rt,"class","relative group"),h(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(os,"rel","nofollow"),h(wr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Er,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPModel"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"id","transformers.CLIPTextModel"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.CLIPTextModel"),h(dt,"class","relative group"),h(jr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPTextModel"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.CLIPVisionModel"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.CLIPVisionModel"),h(mt,"class","relative group"),h(zr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.CLIPVisionModel"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.TFCLIPModel"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.TFCLIPModel"),h(ut,"class","relative group"),h(Fr,"href","/docs/transformers/pr_17313/en/main_classes/model#transformers.TFPreTrainedModel"),h(gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(gs,"rel","nofollow"),h(qr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPModel"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Dr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPModel"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Or,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yo,"id","transformers.TFCLIPTextModel"),h(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yo,"href","#transformers.TFCLIPTextModel"),h(bt,"class","relative group"),h(Ar,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPTextModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.TFCLIPVisionModel"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.TFCLIPVisionModel"),h(Tt,"class","relative group"),h(Nr,"href","/docs/transformers/pr_17313/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"id","transformers.FlaxCLIPModel"),h(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mo,"href","#transformers.FlaxCLIPModel"),h(Ct,"class","relative group"),h(Vr,"href","/docs/transformers/pr_17313/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Ms,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Ms,"rel","nofollow"),h(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Es,"rel","nofollow"),h(js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(js,"rel","nofollow"),h(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(zs,"rel","nofollow"),h(Fs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Fs,"rel","nofollow"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oo,"id","transformers.FlaxCLIPTextModel"),h(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oo,"href","#transformers.FlaxCLIPTextModel"),h(Lt,"class","relative group"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vo,"id","transformers.FlaxCLIPVisionModel"),h(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vo,"href","#transformers.FlaxCLIPVisionModel"),h(Mt,"class","relative group"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,u,g),e(u,c),e(c,_),T(n,_,null),e(u,p),e(u,L),e(L,dn),v(t,Ue,g),v(t,j,g),e(j,ne),e(ne,Ie),T(ye,Ie,null),e(j,pn),e(j,Ce),e(Ce,cn),v(t,Ft,g),v(t,Z,g),e(Z,Fe),e(Z,xe),e(xe,qt),e(Z,H),v(t,Q,g),v(t,qe,g),e(qe,Re),v(t,Dt,g),v(t,De,g),e(De,Le),e(Le,mn),v(t,Ot,g),v(t,O,g),e(O,se),e(se,ke),T(we,ke,null),e(O,fn),e(O,Me),e(Me,hn),v(t,At,g),v(t,Y,g),e(Y,un),v(t,Oe,g),v(t,re,g),e(re,w),e(re,z),e(z,Nt),e(re,Xs),v(t,gn,g),v(t,M,g),e(M,Zs),e(M,He),e(He,Qs),e(M,Ae),e(M,ae),e(ae,Ys),e(M,er),e(M,ie),e(ie,tr),e(M,or),e(M,Ne),e(Ne,nr),e(M,hd),e(M,sr),e(sr,ud),e(M,gd),e(M,rr),e(rr,_d),e(M,vd),v(t,Ri,g),T(_n,t,g),v(t,Hi,g),v(t,Ve,g),e(Ve,bd),e(Ve,vn),e(vn,Pd),e(Ve,$d),e(Ve,bn),e(bn,Td),e(Ve,Id),v(t,Ki,g),v(t,Ke,g),e(Ke,Vt),e(Vt,aa),T(Pn,aa,null),e(Ke,yd),e(Ke,ia),e(ia,Cd),v(t,Gi,g),v(t,ee,g),T($n,ee,null),e(ee,xd),e(ee,St),e(St,ar),e(ar,Ld),e(St,kd),e(St,ir),e(ir,wd),e(St,Md),e(ee,Ed),e(ee,Ge),e(Ge,jd),e(Ge,lr),e(lr,zd),e(Ge,Fd),e(Ge,dr),e(dr,qd),e(Ge,Dd),e(ee,Od),e(ee,Wt),T(Tn,Wt,null),e(Wt,Ad),e(Wt,In),e(In,Nd),e(In,pr),e(pr,Vd),e(In,Sd),v(t,Ji,g),v(t,Je,g),e(Je,Bt),e(Bt,la),T(yn,la,null),e(Je,Wd),e(Je,da),e(da,Bd),v(t,Xi,g),v(t,te,g),T(Cn,te,null),e(te,Ud),e(te,Xe),e(Xe,Rd),e(Xe,cr),e(cr,Hd),e(Xe,Kd),e(Xe,xn),e(xn,Gd),e(Xe,Jd),e(te,Xd),e(te,Ze),e(Ze,Zd),e(Ze,mr),e(mr,Qd),e(Ze,Yd),e(Ze,fr),e(fr,ep),e(Ze,tp),e(te,op),T(Ut,te,null),v(t,Zi,g),v(t,Qe,g),e(Qe,Rt),e(Rt,pa),T(Ln,pa,null),e(Qe,np),e(Qe,ca),e(ca,sp),v(t,Qi,g),v(t,oe,g),T(kn,oe,null),e(oe,rp),e(oe,Ye),e(Ye,ap),e(Ye,hr),e(hr,ip),e(Ye,lp),e(Ye,wn),e(wn,dp),e(Ye,pp),e(oe,cp),e(oe,et),e(et,mp),e(et,ur),e(ur,fp),e(et,hp),e(et,gr),e(gr,up),e(et,gp),e(oe,_p),T(Ht,oe,null),v(t,Yi,g),v(t,tt,g),e(tt,Kt),e(Kt,ma),T(Mn,ma,null),e(tt,vp),e(tt,fa),e(fa,bp),v(t,el,g),v(t,F,g),T(En,F,null),e(F,Pp),e(F,ha),e(ha,$p),e(F,Tp),e(F,jn),e(jn,Ip),e(jn,_r),e(_r,yp),e(jn,Cp),e(F,xp),e(F,le),T(zn,le,null),e(le,Lp),e(le,ua),e(ua,kp),e(le,wp),e(le,ga),e(ga,vr),e(vr,Mp),e(vr,_a),e(_a,Ep),e(le,jp),e(le,va),e(va,zp),e(F,Fp),e(F,Gt),T(Fn,Gt,null),e(Gt,qp),e(Gt,qn),e(qn,Dp),e(qn,ba),e(ba,Op),e(qn,Ap),e(F,Np),e(F,Jt),T(Dn,Jt,null),e(Jt,Vp),e(Jt,Pa),e(Pa,Sp),e(F,Wp),e(F,br),T(On,br,null),v(t,tl,g),v(t,ot,g),e(ot,Xt),e(Xt,$a),T(An,$a,null),e(ot,Bp),e(ot,Ta),e(Ta,Up),v(t,ol,g),v(t,B,g),T(Nn,B,null),e(B,Rp),e(B,Vn),e(Vn,Hp),e(Vn,Ia),e(Ia,Kp),e(Vn,Gp),e(B,Jp),e(B,Sn),e(Sn,Xp),e(Sn,Pr),e(Pr,Zp),e(Sn,Qp),e(B,Yp),e(B,de),T(Wn,de,null),e(de,ec),e(de,ya),e(ya,tc),e(de,oc),e(de,Ca),e(Ca,$r),e($r,nc),e($r,xa),e(xa,sc),e(de,rc),e(de,La),e(La,ac),e(B,ic),e(B,Zt),T(Bn,Zt,null),e(Zt,lc),e(Zt,ka),e(ka,dc),v(t,nl,g),v(t,nt,g),e(nt,Qt),e(Qt,wa),T(Un,wa,null),e(nt,pc),e(nt,Ma),e(Ma,cc),v(t,sl,g),v(t,Ee,g),T(Rn,Ee,null),e(Ee,mc),e(Ee,Ea),e(Ea,fc),e(Ee,hc),e(Ee,Hn),e(Hn,uc),e(Hn,Tr),e(Tr,gc),e(Hn,_c),v(t,rl,g),v(t,st,g),e(st,Yt),e(Yt,ja),T(Kn,ja,null),e(st,vc),e(st,za),e(za,bc),v(t,al,g),v(t,U,g),T(Gn,U,null),e(U,Pc),e(U,Fa),e(Fa,$c),e(U,Tc),e(U,K),e(K,Ir),e(Ir,Ic),e(K,yc),e(K,yr),e(yr,Cc),e(K,xc),e(K,Cr),e(Cr,Lc),e(K,kc),e(K,qa),e(qa,wc),e(K,Mc),e(K,xr),e(xr,Ec),e(K,jc),e(U,zc),e(U,eo),T(Jn,eo,null),e(eo,Fc),e(eo,Xn),e(Xn,qc),e(Xn,Lr),e(Lr,Dc),e(Xn,Oc),e(U,Ac),e(U,to),T(Zn,to,null),e(to,Nc),e(to,Qn),e(Qn,Vc),e(Qn,kr),e(kr,Sc),e(Qn,Wc),v(t,il,g),v(t,rt,g),e(rt,oo),e(oo,Da),T(Yn,Da,null),e(rt,Bc),e(rt,Oa),e(Oa,Uc),v(t,ll,g),v(t,R,g),T(es,R,null),e(R,Rc),e(R,ts),e(ts,Hc),e(ts,os),e(os,Kc),e(ts,Gc),e(R,Jc),e(R,pe),T(ns,pe,null),e(pe,Xc),e(pe,at),e(at,Zc),e(at,wr),e(wr,Qc),e(at,Yc),e(at,Aa),e(Aa,em),e(at,tm),e(pe,om),T(no,pe,null),e(pe,nm),T(so,pe,null),e(R,sm),e(R,ce),T(ss,ce,null),e(ce,rm),e(ce,it),e(it,am),e(it,Mr),e(Mr,im),e(it,lm),e(it,Na),e(Na,dm),e(it,pm),e(ce,cm),T(ro,ce,null),e(ce,mm),T(ao,ce,null),e(R,fm),e(R,me),T(rs,me,null),e(me,hm),e(me,lt),e(lt,um),e(lt,Er),e(Er,gm),e(lt,_m),e(lt,Va),e(Va,vm),e(lt,bm),e(me,Pm),T(io,me,null),e(me,$m),T(lo,me,null),v(t,dl,g),v(t,dt,g),e(dt,po),e(po,Sa),T(as,Sa,null),e(dt,Tm),e(dt,Wa),e(Wa,Im),v(t,pl,g),v(t,pt,g),T(is,pt,null),e(pt,ym),e(pt,fe),T(ls,fe,null),e(fe,Cm),e(fe,ct),e(ct,xm),e(ct,jr),e(jr,Lm),e(ct,km),e(ct,Ba),e(Ba,wm),e(ct,Mm),e(fe,Em),T(co,fe,null),e(fe,jm),T(mo,fe,null),v(t,cl,g),v(t,mt,g),e(mt,fo),e(fo,Ua),T(ds,Ua,null),e(mt,zm),e(mt,Ra),e(Ra,Fm),v(t,ml,g),v(t,ft,g),T(ps,ft,null),e(ft,qm),e(ft,he),T(cs,he,null),e(he,Dm),e(he,ht),e(ht,Om),e(ht,zr),e(zr,Am),e(ht,Nm),e(ht,Ha),e(Ha,Vm),e(ht,Sm),e(he,Wm),T(ho,he,null),e(he,Bm),T(uo,he,null),v(t,fl,g),v(t,ut,g),e(ut,go),e(go,Ka),T(ms,Ka,null),e(ut,Um),e(ut,Ga),e(Ga,Rm),v(t,hl,g),v(t,q,g),T(fs,q,null),e(q,Hm),e(q,hs),e(hs,Km),e(hs,Fr),e(Fr,Gm),e(hs,Jm),e(q,Xm),e(q,us),e(us,Zm),e(us,gs),e(gs,Qm),e(us,Ym),e(q,ef),T(_o,q,null),e(q,tf),e(q,ue),T(_s,ue,null),e(ue,of),e(ue,gt),e(gt,nf),e(gt,qr),e(qr,sf),e(gt,rf),e(gt,Ja),e(Ja,af),e(gt,lf),e(ue,df),T(vo,ue,null),e(ue,pf),T(bo,ue,null),e(q,cf),e(q,ge),T(vs,ge,null),e(ge,mf),e(ge,_t),e(_t,ff),e(_t,Dr),e(Dr,hf),e(_t,uf),e(_t,Xa),e(Xa,gf),e(_t,_f),e(ge,vf),T(Po,ge,null),e(ge,bf),T($o,ge,null),e(q,Pf),e(q,_e),T(bs,_e,null),e(_e,$f),e(_e,vt),e(vt,Tf),e(vt,Or),e(Or,If),e(vt,yf),e(vt,Za),e(Za,Cf),e(vt,xf),e(_e,Lf),T(To,_e,null),e(_e,kf),T(Io,_e,null),v(t,ul,g),v(t,bt,g),e(bt,yo),e(yo,Qa),T(Ps,Qa,null),e(bt,wf),e(bt,Ya),e(Ya,Mf),v(t,gl,g),v(t,Pt,g),T($s,Pt,null),e(Pt,Ef),e(Pt,ve),T(Ts,ve,null),e(ve,jf),e(ve,$t),e($t,zf),e($t,Ar),e(Ar,Ff),e($t,qf),e($t,ei),e(ei,Df),e($t,Of),e(ve,Af),T(Co,ve,null),e(ve,Nf),T(xo,ve,null),v(t,_l,g),v(t,Tt,g),e(Tt,Lo),e(Lo,ti),T(Is,ti,null),e(Tt,Vf),e(Tt,oi),e(oi,Sf),v(t,vl,g),v(t,It,g),T(ys,It,null),e(It,Wf),e(It,be),T(Cs,be,null),e(be,Bf),e(be,yt),e(yt,Uf),e(yt,Nr),e(Nr,Rf),e(yt,Hf),e(yt,ni),e(ni,Kf),e(yt,Gf),e(be,Jf),T(ko,be,null),e(be,Xf),T(wo,be,null),v(t,bl,g),v(t,Ct,g),e(Ct,Mo),e(Mo,si),T(xs,si,null),e(Ct,Zf),e(Ct,ri),e(ri,Qf),v(t,Pl,g),v(t,E,g),T(Ls,E,null),e(E,Yf),e(E,ks),e(ks,eh),e(ks,Vr),e(Vr,th),e(ks,oh),e(E,nh),e(E,ws),e(ws,sh),e(ws,Ms),e(Ms,rh),e(ws,ah),e(E,ih),e(E,ai),e(ai,lh),e(E,dh),e(E,je),e(je,ii),e(ii,Es),e(Es,ph),e(je,ch),e(je,li),e(li,js),e(js,mh),e(je,fh),e(je,di),e(di,zs),e(zs,hh),e(je,uh),e(je,pi),e(pi,Fs),e(Fs,gh),e(E,_h),e(E,Pe),T(qs,Pe,null),e(Pe,vh),e(Pe,xt),e(xt,bh),e(xt,ci),e(ci,Ph),e(xt,$h),e(xt,mi),e(mi,Th),e(xt,Ih),e(Pe,yh),T(Eo,Pe,null),e(Pe,Ch),T(jo,Pe,null),e(E,xh),e(E,zo),T(Ds,zo,null),e(zo,Lh),T(Fo,zo,null),e(E,kh),e(E,qo),T(Os,qo,null),e(qo,wh),T(Do,qo,null),v(t,$l,g),v(t,Lt,g),e(Lt,Oo),e(Oo,fi),T(As,fi,null),e(Lt,Mh),e(Lt,hi),e(hi,Eh),v(t,Tl,g),v(t,kt,g),T(Ns,kt,null),e(kt,jh),e(kt,$e),T(Vs,$e,null),e($e,zh),e($e,wt),e(wt,Fh),e(wt,ui),e(ui,qh),e(wt,Dh),e(wt,gi),e(gi,Oh),e(wt,Ah),e($e,Nh),T(Ao,$e,null),e($e,Vh),T(No,$e,null),v(t,Il,g),v(t,Mt,g),e(Mt,Vo),e(Vo,_i),T(Ss,_i,null),e(Mt,Sh),e(Mt,vi),e(vi,Wh),v(t,yl,g),v(t,Et,g),T(Ws,Et,null),e(Et,Bh),e(Et,Te),T(Bs,Te,null),e(Te,Uh),e(Te,jt),e(jt,Rh),e(jt,bi),e(bi,Hh),e(jt,Kh),e(jt,Pi),e(Pi,Gh),e(jt,Jh),e(Te,Xh),T(So,Te,null),e(Te,Zh),T(Wo,Te,null),Cl=!0},p(t,[g]){const Us={};g&2&&(Us.$$scope={dirty:g,ctx:t}),Ut.$set(Us);const $i={};g&2&&($i.$$scope={dirty:g,ctx:t}),Ht.$set($i);const Ti={};g&2&&(Ti.$$scope={dirty:g,ctx:t}),no.$set(Ti);const Ii={};g&2&&(Ii.$$scope={dirty:g,ctx:t}),so.$set(Ii);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:t}),ro.$set(Rs);const yi={};g&2&&(yi.$$scope={dirty:g,ctx:t}),ao.$set(yi);const Ci={};g&2&&(Ci.$$scope={dirty:g,ctx:t}),io.$set(Ci);const xi={};g&2&&(xi.$$scope={dirty:g,ctx:t}),lo.$set(xi);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:t}),co.$set(Hs);const Li={};g&2&&(Li.$$scope={dirty:g,ctx:t}),mo.$set(Li);const ki={};g&2&&(ki.$$scope={dirty:g,ctx:t}),ho.$set(ki);const wi={};g&2&&(wi.$$scope={dirty:g,ctx:t}),uo.$set(wi);const Mi={};g&2&&(Mi.$$scope={dirty:g,ctx:t}),_o.$set(Mi);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:t}),vo.$set(Ks);const Ei={};g&2&&(Ei.$$scope={dirty:g,ctx:t}),bo.$set(Ei);const ji={};g&2&&(ji.$$scope={dirty:g,ctx:t}),Po.$set(ji);const zi={};g&2&&(zi.$$scope={dirty:g,ctx:t}),$o.$set(zi);const Fi={};g&2&&(Fi.$$scope={dirty:g,ctx:t}),To.$set(Fi);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:t}),Io.$set(Gs);const qi={};g&2&&(qi.$$scope={dirty:g,ctx:t}),Co.$set(qi);const N={};g&2&&(N.$$scope={dirty:g,ctx:t}),xo.$set(N);const Di={};g&2&&(Di.$$scope={dirty:g,ctx:t}),ko.$set(Di);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),wo.$set(Oi);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),Eo.$set(Ai);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),jo.$set(Ni);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),Fo.$set(Vi);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),Do.$set(Si);const zt={};g&2&&(zt.$$scope={dirty:g,ctx:t}),Ao.$set(zt);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),No.$set(Wi);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),So.$set(Bi);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:t}),Wo.$set(Js)},i(t){Cl||(I(n.$$.fragment,t),I(ye.$$.fragment,t),I(we.$$.fragment,t),I(_n.$$.fragment,t),I(Pn.$$.fragment,t),I($n.$$.fragment,t),I(Tn.$$.fragment,t),I(yn.$$.fragment,t),I(Cn.$$.fragment,t),I(Ut.$$.fragment,t),I(Ln.$$.fragment,t),I(kn.$$.fragment,t),I(Ht.$$.fragment,t),I(Mn.$$.fragment,t),I(En.$$.fragment,t),I(zn.$$.fragment,t),I(Fn.$$.fragment,t),I(Dn.$$.fragment,t),I(On.$$.fragment,t),I(An.$$.fragment,t),I(Nn.$$.fragment,t),I(Wn.$$.fragment,t),I(Bn.$$.fragment,t),I(Un.$$.fragment,t),I(Rn.$$.fragment,t),I(Kn.$$.fragment,t),I(Gn.$$.fragment,t),I(Jn.$$.fragment,t),I(Zn.$$.fragment,t),I(Yn.$$.fragment,t),I(es.$$.fragment,t),I(ns.$$.fragment,t),I(no.$$.fragment,t),I(so.$$.fragment,t),I(ss.$$.fragment,t),I(ro.$$.fragment,t),I(ao.$$.fragment,t),I(rs.$$.fragment,t),I(io.$$.fragment,t),I(lo.$$.fragment,t),I(as.$$.fragment,t),I(is.$$.fragment,t),I(ls.$$.fragment,t),I(co.$$.fragment,t),I(mo.$$.fragment,t),I(ds.$$.fragment,t),I(ps.$$.fragment,t),I(cs.$$.fragment,t),I(ho.$$.fragment,t),I(uo.$$.fragment,t),I(ms.$$.fragment,t),I(fs.$$.fragment,t),I(_o.$$.fragment,t),I(_s.$$.fragment,t),I(vo.$$.fragment,t),I(bo.$$.fragment,t),I(vs.$$.fragment,t),I(Po.$$.fragment,t),I($o.$$.fragment,t),I(bs.$$.fragment,t),I(To.$$.fragment,t),I(Io.$$.fragment,t),I(Ps.$$.fragment,t),I($s.$$.fragment,t),I(Ts.$$.fragment,t),I(Co.$$.fragment,t),I(xo.$$.fragment,t),I(Is.$$.fragment,t),I(ys.$$.fragment,t),I(Cs.$$.fragment,t),I(ko.$$.fragment,t),I(wo.$$.fragment,t),I(xs.$$.fragment,t),I(Ls.$$.fragment,t),I(qs.$$.fragment,t),I(Eo.$$.fragment,t),I(jo.$$.fragment,t),I(Ds.$$.fragment,t),I(Fo.$$.fragment,t),I(Os.$$.fragment,t),I(Do.$$.fragment,t),I(As.$$.fragment,t),I(Ns.$$.fragment,t),I(Vs.$$.fragment,t),I(Ao.$$.fragment,t),I(No.$$.fragment,t),I(Ss.$$.fragment,t),I(Ws.$$.fragment,t),I(Bs.$$.fragment,t),I(So.$$.fragment,t),I(Wo.$$.fragment,t),Cl=!0)},o(t){y(n.$$.fragment,t),y(ye.$$.fragment,t),y(we.$$.fragment,t),y(_n.$$.fragment,t),y(Pn.$$.fragment,t),y($n.$$.fragment,t),y(Tn.$$.fragment,t),y(yn.$$.fragment,t),y(Cn.$$.fragment,t),y(Ut.$$.fragment,t),y(Ln.$$.fragment,t),y(kn.$$.fragment,t),y(Ht.$$.fragment,t),y(Mn.$$.fragment,t),y(En.$$.fragment,t),y(zn.$$.fragment,t),y(Fn.$$.fragment,t),y(Dn.$$.fragment,t),y(On.$$.fragment,t),y(An.$$.fragment,t),y(Nn.$$.fragment,t),y(Wn.$$.fragment,t),y(Bn.$$.fragment,t),y(Un.$$.fragment,t),y(Rn.$$.fragment,t),y(Kn.$$.fragment,t),y(Gn.$$.fragment,t),y(Jn.$$.fragment,t),y(Zn.$$.fragment,t),y(Yn.$$.fragment,t),y(es.$$.fragment,t),y(ns.$$.fragment,t),y(no.$$.fragment,t),y(so.$$.fragment,t),y(ss.$$.fragment,t),y(ro.$$.fragment,t),y(ao.$$.fragment,t),y(rs.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(as.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(co.$$.fragment,t),y(mo.$$.fragment,t),y(ds.$$.fragment,t),y(ps.$$.fragment,t),y(cs.$$.fragment,t),y(ho.$$.fragment,t),y(uo.$$.fragment,t),y(ms.$$.fragment,t),y(fs.$$.fragment,t),y(_o.$$.fragment,t),y(_s.$$.fragment,t),y(vo.$$.fragment,t),y(bo.$$.fragment,t),y(vs.$$.fragment,t),y(Po.$$.fragment,t),y($o.$$.fragment,t),y(bs.$$.fragment,t),y(To.$$.fragment,t),y(Io.$$.fragment,t),y(Ps.$$.fragment,t),y($s.$$.fragment,t),y(Ts.$$.fragment,t),y(Co.$$.fragment,t),y(xo.$$.fragment,t),y(Is.$$.fragment,t),y(ys.$$.fragment,t),y(Cs.$$.fragment,t),y(ko.$$.fragment,t),y(wo.$$.fragment,t),y(xs.$$.fragment,t),y(Ls.$$.fragment,t),y(qs.$$.fragment,t),y(Eo.$$.fragment,t),y(jo.$$.fragment,t),y(Ds.$$.fragment,t),y(Fo.$$.fragment,t),y(Os.$$.fragment,t),y(Do.$$.fragment,t),y(As.$$.fragment,t),y(Ns.$$.fragment,t),y(Vs.$$.fragment,t),y(Ao.$$.fragment,t),y(No.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(Bs.$$.fragment,t),y(So.$$.fragment,t),y(Wo.$$.fragment,t),Cl=!1},d(t){o(d),t&&o(b),t&&o(u),C(n),t&&o(Ue),t&&o(j),C(ye),t&&o(Ft),t&&o(Z),t&&o(Q),t&&o(qe),t&&o(Dt),t&&o(De),t&&o(Ot),t&&o(O),C(we),t&&o(At),t&&o(Y),t&&o(Oe),t&&o(re),t&&o(gn),t&&o(M),t&&o(Ri),C(_n,t),t&&o(Hi),t&&o(Ve),t&&o(Ki),t&&o(Ke),C(Pn),t&&o(Gi),t&&o(ee),C($n),C(Tn),t&&o(Ji),t&&o(Je),C(yn),t&&o(Xi),t&&o(te),C(Cn),C(Ut),t&&o(Zi),t&&o(Qe),C(Ln),t&&o(Qi),t&&o(oe),C(kn),C(Ht),t&&o(Yi),t&&o(tt),C(Mn),t&&o(el),t&&o(F),C(En),C(zn),C(Fn),C(Dn),C(On),t&&o(tl),t&&o(ot),C(An),t&&o(ol),t&&o(B),C(Nn),C(Wn),C(Bn),t&&o(nl),t&&o(nt),C(Un),t&&o(sl),t&&o(Ee),C(Rn),t&&o(rl),t&&o(st),C(Kn),t&&o(al),t&&o(U),C(Gn),C(Jn),C(Zn),t&&o(il),t&&o(rt),C(Yn),t&&o(ll),t&&o(R),C(es),C(ns),C(no),C(so),C(ss),C(ro),C(ao),C(rs),C(io),C(lo),t&&o(dl),t&&o(dt),C(as),t&&o(pl),t&&o(pt),C(is),C(ls),C(co),C(mo),t&&o(cl),t&&o(mt),C(ds),t&&o(ml),t&&o(ft),C(ps),C(cs),C(ho),C(uo),t&&o(fl),t&&o(ut),C(ms),t&&o(hl),t&&o(q),C(fs),C(_o),C(_s),C(vo),C(bo),C(vs),C(Po),C($o),C(bs),C(To),C(Io),t&&o(ul),t&&o(bt),C(Ps),t&&o(gl),t&&o(Pt),C($s),C(Ts),C(Co),C(xo),t&&o(_l),t&&o(Tt),C(Is),t&&o(vl),t&&o(It),C(ys),C(Cs),C(ko),C(wo),t&&o(bl),t&&o(Ct),C(xs),t&&o(Pl),t&&o(E),C(Ls),C(qs),C(Eo),C(jo),C(Ds),C(Fo),C(Os),C(Do),t&&o($l),t&&o(Lt),C(As),t&&o(Tl),t&&o(kt),C(Ns),C(Vs),C(Ao),C(No),t&&o(Il),t&&o(Mt),C(Ss),t&&o(yl),t&&o(Et),C(Ws),C(Bs),C(So),C(Wo)}}}const ov={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function nv(x){return I_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pv extends b_{constructor(d){super();P_(this,d,nv,tv,$_,{})}}export{pv as default,ov as metadata};
