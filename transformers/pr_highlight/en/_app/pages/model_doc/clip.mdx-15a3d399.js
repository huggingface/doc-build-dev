import{S as K_,i as G_,s as J_,e as s,k as h,w as P,t as i,M as X_,c as r,d as o,m,a,x as $,h as l,b as f,F as e,g as v,y as I,q as T,o as y,B as C,v as Z_,L as S}from"../../chunks/vendor-6b77c823.js";import{T as Z}from"../../chunks/Tip-39098574.js";import{D as k}from"../../chunks/Docstring-1088f2fb.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as D}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as V}from"../../chunks/ExampleCodeBlock-5212b321.js";function Q_(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function Y_(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function ev(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function tv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function ov(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function nv(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function sv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function rv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function av(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function iv(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function lv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function dv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function pv(x){let d,b,g,c,_,n,p,L,mn,Re,z,se,ye,Ce,fn,xe,gn,Dt,Q,Fe,Le,Ot,K,Y,qe,He,At,De,ke,un,Nt,O,re,we,Me,_n,Ee,vn,Vt,ee,bn,Oe,ae;return{c(){d=s("p"),b=i("TF 2.0 models accepts two formats as inputs:"),g=h(),c=s("ul"),_=s("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=h(),L=s("li"),mn=i("having all inputs as a list, tuple or dict in the first positional arguments."),Re=h(),z=s("p"),se=i("This second option is useful when using "),ye=s("code"),Ce=i("tf.keras.Model.fit"),fn=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),xe=s("code"),gn=i("model(inputs)"),Dt=i("."),Q=h(),Fe=s("p"),Le=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ot=h(),K=s("ul"),Y=s("li"),qe=i("a single Tensor with "),He=s("code"),At=i("input_ids"),De=i(" only and nothing else: "),ke=s("code"),un=i("model(input_ids)"),Nt=h(),O=s("li"),re=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s("code"),Me=i("model([input_ids, attention_mask])"),_n=i(" or "),Ee=s("code"),vn=i("model([input_ids, attention_mask, token_type_ids])"),Vt=h(),ee=s("li"),bn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Oe=s("code"),ae=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=r(w,"P",{});var j=a(d);b=l(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),g=m(w),c=r(w,"UL",{});var St=a(c);_=r(St,"LI",{});var nr=a(_);n=l(nr,"having all inputs as keyword arguments (like PyTorch models), or"),nr.forEach(o),p=m(St),L=r(St,"LI",{});var Pn=a(L);mn=l(Pn,"having all inputs as a list, tuple or dict in the first positional arguments."),Pn.forEach(o),St.forEach(o),Re=m(w),z=r(w,"P",{});var M=a(z);se=l(M,"This second option is useful when using "),ye=r(M,"CODE",{});var sr=a(ye);Ce=l(sr,"tf.keras.Model.fit"),sr.forEach(o),fn=l(M,` method which currently requires having all the
tensors in the first argument of the model call function: `),xe=r(M,"CODE",{});var Ke=a(xe);gn=l(Ke,"model(inputs)"),Ke.forEach(o),Dt=l(M,"."),M.forEach(o),Q=m(w),Fe=r(w,"P",{});var rr=a(Fe);Le=l(rr,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),rr.forEach(o),Ot=m(w),K=r(w,"UL",{});var Ae=a(K);Y=r(Ae,"LI",{});var ie=a(Y);qe=l(ie,"a single Tensor with "),He=r(ie,"CODE",{});var ar=a(He);At=l(ar,"input_ids"),ar.forEach(o),De=l(ie," only and nothing else: "),ke=r(ie,"CODE",{});var ir=a(ke);un=l(ir,"model(input_ids)"),ir.forEach(o),ie.forEach(o),Nt=m(Ae),O=r(Ae,"LI",{});var le=a(O);re=l(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=r(le,"CODE",{});var lr=a(we);Me=l(lr,"model([input_ids, attention_mask])"),lr.forEach(o),_n=l(le," or "),Ee=r(le,"CODE",{});var dr=a(Ee);vn=l(dr,"model([input_ids, attention_mask, token_type_ids])"),dr.forEach(o),le.forEach(o),Vt=m(Ae),ee=r(Ae,"LI",{});var Ne=a(ee);bn=l(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Oe=r(Ne,"CODE",{});var pr=a(Oe);ae=l(pr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pr.forEach(o),Ne.forEach(o),Ae.forEach(o)},m(w,j){v(w,d,j),e(d,b),v(w,g,j),v(w,c,j),e(c,_),e(_,n),e(c,p),e(c,L),e(L,mn),v(w,Re,j),v(w,z,j),e(z,se),e(z,ye),e(ye,Ce),e(z,fn),e(z,xe),e(xe,gn),e(z,Dt),v(w,Q,j),v(w,Fe,j),e(Fe,Le),v(w,Ot,j),v(w,K,j),e(K,Y),e(Y,qe),e(Y,He),e(He,At),e(Y,De),e(Y,ke),e(ke,un),e(K,Nt),e(K,O),e(O,re),e(O,we),e(we,Me),e(O,_n),e(O,Ee),e(Ee,vn),e(K,Vt),e(K,ee),e(ee,bn),e(ee,Oe),e(Oe,ae)},d(w){w&&o(d),w&&o(g),w&&o(c),w&&o(Re),w&&o(z),w&&o(Q),w&&o(Fe),w&&o(Ot),w&&o(K)}}}function cv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function hv(x){let d,b,g,c,_;return c=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function mv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function fv(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function gv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function uv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function _v(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function vv(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function bv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function Pv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function $v(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function Iv(x){let d,b,g,c,_;return c=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function Tv(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function yv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Examples:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function Cv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function xv(x){let d,b,g,c,_;return c=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function Lv(x){let d,b,g,c,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(p,"CODE",{});var L=a(g);c=l(L,"Module"),L.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,b),e(d,g),e(g,c),e(d,_)},d(n){n&&o(d)}}}function kv(x){let d,b,g,c,_;return c=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),g=h(),P(c.$$.fragment)},l(n){d=r(n,"P",{});var p=a(d);b=l(p,"Example:"),p.forEach(o),g=m(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,b),v(n,g,p),I(c,n,p),_=!0},p:S,i(n){_||(T(c.$$.fragment,n),_=!0)},o(n){y(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),C(c,n)}}}function wv(x){let d,b,g,c,_,n,p,L,mn,Re,z,se,ye,Ce,fn,xe,gn,Dt,Q,Fe,Le,Ot,K,Y,qe,He,At,De,ke,un,Nt,O,re,we,Me,_n,Ee,vn,Vt,ee,bn,Oe,ae,w,j,St,nr,Pn,M,sr,Ke,rr,Ae,ie,ar,ir,le,lr,dr,Ne,pr,Ld,cr,kd,wd,hr,Md,Ed,tl,$n,ol,Ve,zd,In,jd,Fd,Tn,qd,Dd,nl,Ge,Wt,ma,yn,Od,fa,Ad,sl,te,Cn,Nd,Bt,mr,Vd,Sd,fr,Wd,Bd,Ud,Je,Rd,gr,Hd,Kd,ur,Gd,Jd,Xd,Ut,xn,Zd,Ln,Qd,_r,Yd,ep,rl,Xe,Rt,ga,kn,tp,ua,op,al,oe,wn,np,Ze,sp,vr,rp,ap,Mn,ip,lp,dp,Qe,pp,br,cp,hp,Pr,mp,fp,gp,Ht,il,Ye,Kt,_a,En,up,va,_p,ll,ne,zn,vp,et,bp,$r,Pp,$p,jn,Ip,Tp,yp,tt,Cp,Ir,xp,Lp,Tr,kp,wp,Mp,Gt,dl,ot,Jt,ba,Fn,Ep,Pa,zp,pl,F,qn,jp,$a,Fp,qp,Dn,Dp,yr,Op,Ap,Np,de,On,Vp,Ia,Sp,Wp,Ta,Cr,Bp,ya,Up,Rp,Ca,Hp,Kp,Xt,An,Gp,Nn,Jp,xa,Xp,Zp,Qp,Zt,Vn,Yp,La,ec,tc,xr,Sn,cl,nt,Qt,ka,Wn,oc,wa,nc,hl,B,Bn,sc,Un,rc,Ma,ac,ic,lc,Rn,dc,Lr,pc,cc,hc,pe,Hn,mc,Ea,fc,gc,za,kr,uc,ja,_c,vc,Fa,bc,Pc,Yt,Kn,$c,qa,Ic,ml,st,eo,Da,Gn,Tc,Oa,yc,fl,U,Jn,Cc,Aa,xc,Lc,Xn,kc,wr,wc,Mc,Ec,to,Zn,zc,Qn,jc,Na,Fc,qc,Dc,oo,Yn,Oc,rt,Ac,Va,Nc,Vc,Sa,Sc,Wc,gl,at,no,Wa,es,Bc,Ba,Uc,ul,R,ts,Rc,Ua,Hc,Kc,G,Mr,Gc,Jc,Er,Xc,Zc,zr,Qc,Yc,Ra,eh,th,jr,oh,nh,sh,so,os,rh,ns,ah,Fr,ih,lh,dh,ro,ss,ph,rs,ch,qr,hh,mh,_l,it,ao,Ha,as,fh,Ka,gh,vl,H,is,uh,ls,_h,ds,vh,bh,Ph,ce,ps,$h,lt,Ih,Dr,Th,yh,Ga,Ch,xh,Lh,io,kh,lo,wh,he,cs,Mh,dt,Eh,Or,zh,jh,Ja,Fh,qh,Dh,po,Oh,co,Ah,me,hs,Nh,pt,Vh,Ar,Sh,Wh,Xa,Bh,Uh,Rh,ho,Hh,mo,bl,ct,fo,Za,ms,Kh,Qa,Gh,Pl,ht,fs,Jh,fe,gs,Xh,mt,Zh,Nr,Qh,Yh,Ya,em,tm,om,go,nm,uo,$l,ft,_o,ei,us,sm,ti,rm,Il,gt,_s,am,ge,vs,im,ut,lm,Vr,dm,pm,oi,cm,hm,mm,vo,fm,bo,Tl,_t,Po,ni,bs,gm,si,um,yl,q,Ps,_m,$s,vm,Sr,bm,Pm,$m,Is,Im,Ts,Tm,ym,Cm,$o,xm,ue,ys,Lm,vt,km,Wr,wm,Mm,ri,Em,zm,jm,Io,Fm,To,qm,_e,Cs,Dm,bt,Om,Br,Am,Nm,ai,Vm,Sm,Wm,yo,Bm,Co,Um,ve,xs,Rm,Pt,Hm,Ur,Km,Gm,ii,Jm,Xm,Zm,xo,Qm,Lo,Cl,$t,ko,li,Ls,Ym,di,ef,xl,It,ks,tf,be,ws,of,Tt,nf,Rr,sf,rf,pi,af,lf,df,wo,pf,Mo,Ll,yt,Eo,ci,Ms,cf,hi,hf,kl,Ct,Es,mf,Pe,zs,ff,xt,gf,Hr,uf,_f,mi,vf,bf,Pf,zo,$f,jo,wl,Lt,Fo,fi,js,If,gi,Tf,Ml,E,Fs,yf,qs,Cf,Kr,xf,Lf,kf,Ds,wf,Os,Mf,Ef,zf,ui,jf,Ff,ze,_i,As,qf,Df,vi,Ns,Of,Af,bi,Vs,Nf,Vf,Pi,Ss,Sf,Wf,$e,Ws,Bf,kt,Uf,$i,Rf,Hf,Ii,Kf,Gf,Jf,qo,Xf,Do,Zf,Oo,Bs,Qf,Ao,Yf,No,Us,eg,Vo,El,wt,So,Ti,Rs,tg,yi,og,zl,Mt,Hs,ng,Ie,Ks,sg,Et,rg,Ci,ag,ig,xi,lg,dg,pg,Wo,cg,Bo,jl,zt,Uo,Li,Gs,hg,ki,mg,Fl,jt,Js,fg,Te,Xs,gg,Ft,ug,wi,_g,vg,Mi,bg,Pg,$g,Ro,Ig,Ho,ql;return n=new D({}),Ce=new D({}),Me=new D({}),$n=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),yn=new D({}),Cn=new k({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/configuration_clip.py#L245"}}),xn=new k({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),kn=new D({}),wn=new k({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/configuration_clip.py#L33"}}),Ht=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[Q_]},$$scope:{ctx:x}}}),En=new D({}),zn=new k({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/configuration_clip.py#L141"}}),Gt=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[Y_]},$$scope:{ctx:x}}}),Fn=new D({}),qn=new k({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip.py#L100"}}),On=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),An=new k({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip.py#L213",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip.py#L241",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new k({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip.py#L336"}}),Wn=new D({}),Bn=new k({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip_fast.py#L48"}}),Hn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip_fast.py#L121",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/tokenization_clip_fast.py#L148",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new D({}),Jn=new k({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/feature_extraction_clip.py#L30"}}),Zn=new k({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/feature_extraction_clip.py#L158"}}),Yn=new k({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/feature_extraction_clip.py#L184"}}),es=new D({}),ts=new k({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/processing_clip.py#L22"}}),os=new k({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/processing_clip.py#L95"}}),ss=new k({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/processing_clip.py#L102"}}),as=new D({}),is=new k({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L842"}}),ps=new k({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L957",returnDescription:`
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
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new Z({props:{$$slots:{default:[ev]},$$scope:{ctx:x}}}),lo=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[tv]},$$scope:{ctx:x}}}),cs=new k({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L875",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),po=new Z({props:{$$slots:{default:[ov]},$$scope:{ctx:x}}}),co=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[nv]},$$scope:{ctx:x}}}),hs=new k({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L915",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ho=new Z({props:{$$slots:{default:[sv]},$$scope:{ctx:x}}}),mo=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[rv]},$$scope:{ctx:x}}}),ms=new D({}),fs=new k({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L678"}}),gs=new k({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L693",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new Z({props:{$$slots:{default:[av]},$$scope:{ctx:x}}}),uo=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[iv]},$$scope:{ctx:x}}}),us=new D({}),_s=new k({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L789"}}),vs=new k({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_clip.py#L802",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Z({props:{$$slots:{default:[lv]},$$scope:{ctx:x}}}),bo=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[dv]},$$scope:{ctx:x}}}),bs=new D({}),Ps=new k({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1204"}}),$o=new Z({props:{$$slots:{default:[pv]},$$scope:{ctx:x}}}),ys=new k({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1334",returnDescription:`
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
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Io=new Z({props:{$$slots:{default:[cv]},$$scope:{ctx:x}}}),To=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[hv]},$$scope:{ctx:x}}}),Cs=new k({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1250",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),yo=new Z({props:{$$slots:{default:[mv]},$$scope:{ctx:x}}}),Co=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[fv]},$$scope:{ctx:x}}}),xs=new k({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1291",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),xo=new Z({props:{$$slots:{default:[gv]},$$scope:{ctx:x}}}),Lo=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[uv]},$$scope:{ctx:x}}}),Ls=new D({}),ks=new k({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1041"}}),ws=new k({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new Z({props:{$$slots:{default:[_v]},$$scope:{ctx:x}}}),Mo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[vv]},$$scope:{ctx:x}}}),Ms=new D({}),Es=new k({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1105"}}),zs=new k({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_tf_clip.py#L1146",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Z({props:{$$slots:{default:[bv]},$$scope:{ctx:x}}}),jo=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[Pv]},$$scope:{ctx:x}}}),js=new D({}),Fs=new k({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L1107"}}),Ws=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L736",returnDescription:`
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
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Z({props:{$$slots:{default:[$v]},$$scope:{ctx:x}}}),Do=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[Iv]},$$scope:{ctx:x}}}),Bs=new k({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L781",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ao=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[Tv]},$$scope:{ctx:x}}}),Us=new k({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L848",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Vo=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[yv]},$$scope:{ctx:x}}}),Rs=new D({}),Hs=new k({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L928"}}),Ks=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L603",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new Z({props:{$$slots:{default:[Cv]},$$scope:{ctx:x}}}),Bo=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[xv]},$$scope:{ctx:x}}}),Gs=new D({}),Js=new k({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L981"}}),Xs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/clip/modeling_flax_clip.py#L672",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Z({props:{$$slots:{default:[Lv]},$$scope:{ctx:x}}}),Ho=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[kv]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=h(),g=s("h1"),c=s("a"),_=s("span"),P(n.$$.fragment),p=h(),L=s("span"),mn=i("CLIP"),Re=h(),z=s("h2"),se=s("a"),ye=s("span"),P(Ce.$$.fragment),fn=h(),xe=s("span"),gn=i("Overview"),Dt=h(),Q=s("p"),Fe=i("The CLIP model was proposed in "),Le=s("a"),Ot=i("Learning Transferable Visual Models From Natural Language Supervision"),K=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Y=h(),qe=s("p"),He=i("The abstract from the paper is the following:"),At=h(),De=s("p"),ke=s("em"),un=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Nt=h(),O=s("h2"),re=s("a"),we=s("span"),P(Me.$$.fragment),_n=h(),Ee=s("span"),vn=i("Usage"),Vt=h(),ee=s("p"),bn=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Oe=h(),ae=s("p"),w=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s("a"),St=i("CLIPFeatureExtractor"),nr=i(" can be used to resize (or rescale) and normalize images for the model."),Pn=h(),M=s("p"),sr=i("The "),Ke=s("a"),rr=i("CLIPTokenizer"),Ae=i(" is used to encode the text. The "),ie=s("a"),ar=i("CLIPProcessor"),ir=i(` wraps
`),le=s("a"),lr=i("CLIPFeatureExtractor"),dr=i(" and "),Ne=s("a"),pr=i("CLIPTokenizer"),Ld=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),cr=s("a"),kd=i("CLIPProcessor"),wd=i(" and "),hr=s("a"),Md=i("CLIPModel"),Ed=i("."),tl=h(),P($n.$$.fragment),ol=h(),Ve=s("p"),zd=i("This model was contributed by "),In=s("a"),jd=i("valhalla"),Fd=i(". The original code can be found "),Tn=s("a"),qd=i("here"),Dd=i("."),nl=h(),Ge=s("h2"),Wt=s("a"),ma=s("span"),P(yn.$$.fragment),Od=h(),fa=s("span"),Ad=i("CLIPConfig"),sl=h(),te=s("div"),P(Cn.$$.fragment),Nd=h(),Bt=s("p"),mr=s("a"),Vd=i("CLIPConfig"),Sd=i(" is the configuration class to store the configuration of a "),fr=s("a"),Wd=i("CLIPModel"),Bd=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ud=h(),Je=s("p"),Rd=i("Configuration objects inherit from "),gr=s("a"),Hd=i("PretrainedConfig"),Kd=i(` and can be used to control the model outputs. Read the
documentation from `),ur=s("a"),Gd=i("PretrainedConfig"),Jd=i(" for more information."),Xd=h(),Ut=s("div"),P(xn.$$.fragment),Zd=h(),Ln=s("p"),Qd=i("Instantiate a "),_r=s("a"),Yd=i("CLIPConfig"),ep=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),rl=h(),Xe=s("h2"),Rt=s("a"),ga=s("span"),P(kn.$$.fragment),tp=h(),ua=s("span"),op=i("CLIPTextConfig"),al=h(),oe=s("div"),P(wn.$$.fragment),np=h(),Ze=s("p"),sp=i("This is the configuration class to store the configuration of a "),vr=s("a"),rp=i("CLIPModel"),ap=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Mn=s("a"),ip=i("openai/clip-vit-base-patch32"),lp=i(" architecture."),dp=h(),Qe=s("p"),pp=i("Configuration objects inherit from "),br=s("a"),cp=i("PretrainedConfig"),hp=i(` and can be used to control the model outputs. Read the
documentation from `),Pr=s("a"),mp=i("PretrainedConfig"),fp=i(" for more information."),gp=h(),P(Ht.$$.fragment),il=h(),Ye=s("h2"),Kt=s("a"),_a=s("span"),P(En.$$.fragment),up=h(),va=s("span"),_p=i("CLIPVisionConfig"),ll=h(),ne=s("div"),P(zn.$$.fragment),vp=h(),et=s("p"),bp=i("This is the configuration class to store the configuration of a "),$r=s("a"),Pp=i("CLIPModel"),$p=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),jn=s("a"),Ip=i("openai/clip-vit-base-patch32"),Tp=i(" architecture."),yp=h(),tt=s("p"),Cp=i("Configuration objects inherit from "),Ir=s("a"),xp=i("PretrainedConfig"),Lp=i(` and can be used to control the model outputs. Read the
documentation from `),Tr=s("a"),kp=i("PretrainedConfig"),wp=i(" for more information."),Mp=h(),P(Gt.$$.fragment),dl=h(),ot=s("h2"),Jt=s("a"),ba=s("span"),P(Fn.$$.fragment),Ep=h(),Pa=s("span"),zp=i("CLIPTokenizer"),pl=h(),F=s("div"),P(qn.$$.fragment),jp=h(),$a=s("p"),Fp=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),qp=h(),Dn=s("p"),Dp=i("This tokenizer inherits from "),yr=s("a"),Op=i("PreTrainedTokenizer"),Ap=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np=h(),de=s("div"),P(On.$$.fragment),Vp=h(),Ia=s("p"),Sp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Wp=h(),Ta=s("ul"),Cr=s("li"),Bp=i("single sequence: "),ya=s("code"),Up=i("<|startoftext|> X <|endoftext|>"),Rp=h(),Ca=s("p"),Hp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Kp=h(),Xt=s("div"),P(An.$$.fragment),Gp=h(),Nn=s("p"),Jp=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=s("code"),Xp=i("prepare_for_model"),Zp=i(" method."),Qp=h(),Zt=s("div"),P(Vn.$$.fragment),Yp=h(),La=s("p"),ec=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),tc=h(),xr=s("div"),P(Sn.$$.fragment),cl=h(),nt=s("h2"),Qt=s("a"),ka=s("span"),P(Wn.$$.fragment),oc=h(),wa=s("span"),nc=i("CLIPTokenizerFast"),hl=h(),B=s("div"),P(Bn.$$.fragment),sc=h(),Un=s("p"),rc=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ma=s("em"),ac=i("tokenizers"),ic=i(` library). Based on byte-level
Byte-Pair-Encoding.`),lc=h(),Rn=s("p"),dc=i("This tokenizer inherits from "),Lr=s("a"),pc=i("PreTrainedTokenizerFast"),cc=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hc=h(),pe=s("div"),P(Hn.$$.fragment),mc=h(),Ea=s("p"),fc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),gc=h(),za=s("ul"),kr=s("li"),uc=i("single sequence: "),ja=s("code"),_c=i("<|startoftext|> X <|endoftext|>"),vc=h(),Fa=s("p"),bc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Pc=h(),Yt=s("div"),P(Kn.$$.fragment),$c=h(),qa=s("p"),Ic=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ml=h(),st=s("h2"),eo=s("a"),Da=s("span"),P(Gn.$$.fragment),Tc=h(),Oa=s("span"),yc=i("CLIPFeatureExtractor"),fl=h(),U=s("div"),P(Jn.$$.fragment),Cc=h(),Aa=s("p"),xc=i("Constructs a CLIP feature extractor."),Lc=h(),Xn=s("p"),kc=i("This feature extractor inherits from "),wr=s("a"),wc=i("FeatureExtractionMixin"),Mc=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ec=h(),to=s("div"),P(Zn.$$.fragment),zc=h(),Qn=s("p"),jc=i("Crops "),Na=s("code"),Fc=i("image"),qc=i(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Dc=h(),oo=s("div"),P(Yn.$$.fragment),Oc=h(),rt=s("p"),Ac=i("Resizes "),Va=s("code"),Nc=i("image"),Vc=i(". Note that this will trigger a conversion of "),Sa=s("code"),Sc=i("image"),Wc=i(" to a PIL Image."),gl=h(),at=s("h2"),no=s("a"),Wa=s("span"),P(es.$$.fragment),Bc=h(),Ba=s("span"),Uc=i("CLIPProcessor"),ul=h(),R=s("div"),P(ts.$$.fragment),Rc=h(),Ua=s("p"),Hc=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Kc=h(),G=s("p"),Mr=s("a"),Gc=i("CLIPProcessor"),Jc=i(" offers all the functionalities of "),Er=s("a"),Xc=i("CLIPFeatureExtractor"),Zc=i(" and "),zr=s("a"),Qc=i("CLIPTokenizerFast"),Yc=i(`. See the
`),Ra=s("code"),eh=i("__call__()"),th=i(" and "),jr=s("a"),oh=i("decode()"),nh=i(" for more information."),sh=h(),so=s("div"),P(os.$$.fragment),rh=h(),ns=s("p"),ah=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Fr=s("a"),ih=i("batch_decode()"),lh=i(`. Please
refer to the docstring of this method for more information.`),dh=h(),ro=s("div"),P(ss.$$.fragment),ph=h(),rs=s("p"),ch=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),qr=s("a"),hh=i("decode()"),mh=i(`. Please refer to
the docstring of this method for more information.`),_l=h(),it=s("h2"),ao=s("a"),Ha=s("span"),P(as.$$.fragment),fh=h(),Ka=s("span"),gh=i("CLIPModel"),vl=h(),H=s("div"),P(is.$$.fragment),uh=h(),ls=s("p"),_h=i("This model is a PyTorch "),ds=s("a"),vh=i("torch.nn.Module"),bh=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ph=h(),ce=s("div"),P(ps.$$.fragment),$h=h(),lt=s("p"),Ih=i("The "),Dr=s("a"),Th=i("CLIPModel"),yh=i(" forward method, overrides the "),Ga=s("code"),Ch=i("__call__"),xh=i(" special method."),Lh=h(),P(io.$$.fragment),kh=h(),P(lo.$$.fragment),wh=h(),he=s("div"),P(cs.$$.fragment),Mh=h(),dt=s("p"),Eh=i("The "),Or=s("a"),zh=i("CLIPModel"),jh=i(" forward method, overrides the "),Ja=s("code"),Fh=i("__call__"),qh=i(" special method."),Dh=h(),P(po.$$.fragment),Oh=h(),P(co.$$.fragment),Ah=h(),me=s("div"),P(hs.$$.fragment),Nh=h(),pt=s("p"),Vh=i("The "),Ar=s("a"),Sh=i("CLIPModel"),Wh=i(" forward method, overrides the "),Xa=s("code"),Bh=i("__call__"),Uh=i(" special method."),Rh=h(),P(ho.$$.fragment),Hh=h(),P(mo.$$.fragment),bl=h(),ct=s("h2"),fo=s("a"),Za=s("span"),P(ms.$$.fragment),Kh=h(),Qa=s("span"),Gh=i("CLIPTextModel"),Pl=h(),ht=s("div"),P(fs.$$.fragment),Jh=h(),fe=s("div"),P(gs.$$.fragment),Xh=h(),mt=s("p"),Zh=i("The "),Nr=s("a"),Qh=i("CLIPTextModel"),Yh=i(" forward method, overrides the "),Ya=s("code"),em=i("__call__"),tm=i(" special method."),om=h(),P(go.$$.fragment),nm=h(),P(uo.$$.fragment),$l=h(),ft=s("h2"),_o=s("a"),ei=s("span"),P(us.$$.fragment),sm=h(),ti=s("span"),rm=i("CLIPVisionModel"),Il=h(),gt=s("div"),P(_s.$$.fragment),am=h(),ge=s("div"),P(vs.$$.fragment),im=h(),ut=s("p"),lm=i("The "),Vr=s("a"),dm=i("CLIPVisionModel"),pm=i(" forward method, overrides the "),oi=s("code"),cm=i("__call__"),hm=i(" special method."),mm=h(),P(vo.$$.fragment),fm=h(),P(bo.$$.fragment),Tl=h(),_t=s("h2"),Po=s("a"),ni=s("span"),P(bs.$$.fragment),gm=h(),si=s("span"),um=i("TFCLIPModel"),yl=h(),q=s("div"),P(Ps.$$.fragment),_m=h(),$s=s("p"),vm=i("This model inherits from "),Sr=s("a"),bm=i("TFPreTrainedModel"),Pm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=h(),Is=s("p"),Im=i("This model is also a "),Ts=s("a"),Tm=i("tf.keras.Model"),ym=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm=h(),P($o.$$.fragment),xm=h(),ue=s("div"),P(ys.$$.fragment),Lm=h(),vt=s("p"),km=i("The "),Wr=s("a"),wm=i("TFCLIPModel"),Mm=i(" forward method, overrides the "),ri=s("code"),Em=i("__call__"),zm=i(" special method."),jm=h(),P(Io.$$.fragment),Fm=h(),P(To.$$.fragment),qm=h(),_e=s("div"),P(Cs.$$.fragment),Dm=h(),bt=s("p"),Om=i("The "),Br=s("a"),Am=i("TFCLIPModel"),Nm=i(" forward method, overrides the "),ai=s("code"),Vm=i("__call__"),Sm=i(" special method."),Wm=h(),P(yo.$$.fragment),Bm=h(),P(Co.$$.fragment),Um=h(),ve=s("div"),P(xs.$$.fragment),Rm=h(),Pt=s("p"),Hm=i("The "),Ur=s("a"),Km=i("TFCLIPModel"),Gm=i(" forward method, overrides the "),ii=s("code"),Jm=i("__call__"),Xm=i(" special method."),Zm=h(),P(xo.$$.fragment),Qm=h(),P(Lo.$$.fragment),Cl=h(),$t=s("h2"),ko=s("a"),li=s("span"),P(Ls.$$.fragment),Ym=h(),di=s("span"),ef=i("TFCLIPTextModel"),xl=h(),It=s("div"),P(ks.$$.fragment),tf=h(),be=s("div"),P(ws.$$.fragment),of=h(),Tt=s("p"),nf=i("The "),Rr=s("a"),sf=i("TFCLIPTextModel"),rf=i(" forward method, overrides the "),pi=s("code"),af=i("__call__"),lf=i(" special method."),df=h(),P(wo.$$.fragment),pf=h(),P(Mo.$$.fragment),Ll=h(),yt=s("h2"),Eo=s("a"),ci=s("span"),P(Ms.$$.fragment),cf=h(),hi=s("span"),hf=i("TFCLIPVisionModel"),kl=h(),Ct=s("div"),P(Es.$$.fragment),mf=h(),Pe=s("div"),P(zs.$$.fragment),ff=h(),xt=s("p"),gf=i("The "),Hr=s("a"),uf=i("TFCLIPVisionModel"),_f=i(" forward method, overrides the "),mi=s("code"),vf=i("__call__"),bf=i(" special method."),Pf=h(),P(zo.$$.fragment),$f=h(),P(jo.$$.fragment),wl=h(),Lt=s("h2"),Fo=s("a"),fi=s("span"),P(js.$$.fragment),If=h(),gi=s("span"),Tf=i("FlaxCLIPModel"),Ml=h(),E=s("div"),P(Fs.$$.fragment),yf=h(),qs=s("p"),Cf=i("This model inherits from "),Kr=s("a"),xf=i("FlaxPreTrainedModel"),Lf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kf=h(),Ds=s("p"),wf=i("This model is also a Flax Linen "),Os=s("a"),Mf=i("flax.linen.Module"),Ef=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zf=h(),ui=s("p"),jf=i("Finally, this model supports inherent JAX features such as:"),Ff=h(),ze=s("ul"),_i=s("li"),As=s("a"),qf=i("Just-In-Time (JIT) compilation"),Df=h(),vi=s("li"),Ns=s("a"),Of=i("Automatic Differentiation"),Af=h(),bi=s("li"),Vs=s("a"),Nf=i("Vectorization"),Vf=h(),Pi=s("li"),Ss=s("a"),Sf=i("Parallelization"),Wf=h(),$e=s("div"),P(Ws.$$.fragment),Bf=h(),kt=s("p"),Uf=i("The "),$i=s("code"),Rf=i("FlaxCLIPPreTrainedModel"),Hf=i(" forward method, overrides the "),Ii=s("code"),Kf=i("__call__"),Gf=i(" special method."),Jf=h(),P(qo.$$.fragment),Xf=h(),P(Do.$$.fragment),Zf=h(),Oo=s("div"),P(Bs.$$.fragment),Qf=h(),P(Ao.$$.fragment),Yf=h(),No=s("div"),P(Us.$$.fragment),eg=h(),P(Vo.$$.fragment),El=h(),wt=s("h2"),So=s("a"),Ti=s("span"),P(Rs.$$.fragment),tg=h(),yi=s("span"),og=i("FlaxCLIPTextModel"),zl=h(),Mt=s("div"),P(Hs.$$.fragment),ng=h(),Ie=s("div"),P(Ks.$$.fragment),sg=h(),Et=s("p"),rg=i("The "),Ci=s("code"),ag=i("FlaxCLIPTextPreTrainedModel"),ig=i(" forward method, overrides the "),xi=s("code"),lg=i("__call__"),dg=i(" special method."),pg=h(),P(Wo.$$.fragment),cg=h(),P(Bo.$$.fragment),jl=h(),zt=s("h2"),Uo=s("a"),Li=s("span"),P(Gs.$$.fragment),hg=h(),ki=s("span"),mg=i("FlaxCLIPVisionModel"),Fl=h(),jt=s("div"),P(Js.$$.fragment),fg=h(),Te=s("div"),P(Xs.$$.fragment),gg=h(),Ft=s("p"),ug=i("The "),wi=s("code"),_g=i("FlaxCLIPVisionPreTrainedModel"),vg=i(" forward method, overrides the "),Mi=s("code"),bg=i("__call__"),Pg=i(" special method."),$g=h(),P(Ro.$$.fragment),Ig=h(),P(Ho.$$.fragment),this.h()},l(t){const u=X_('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),b=m(t),g=r(t,"H1",{class:!0});var Zs=a(g);c=r(Zs,"A",{id:!0,class:!0,href:!0});var Ei=a(c);_=r(Ei,"SPAN",{});var zi=a(_);$(n.$$.fragment,zi),zi.forEach(o),Ei.forEach(o),p=m(Zs),L=r(Zs,"SPAN",{});var ji=a(L);mn=l(ji,"CLIP"),ji.forEach(o),Zs.forEach(o),Re=m(t),z=r(t,"H2",{class:!0});var Qs=a(z);se=r(Qs,"A",{id:!0,class:!0,href:!0});var Fi=a(se);ye=r(Fi,"SPAN",{});var qi=a(ye);$(Ce.$$.fragment,qi),qi.forEach(o),Fi.forEach(o),fn=m(Qs),xe=r(Qs,"SPAN",{});var Di=a(xe);gn=l(Di,"Overview"),Di.forEach(o),Qs.forEach(o),Dt=m(t),Q=r(t,"P",{});var Ys=a(Q);Fe=l(Ys,"The CLIP model was proposed in "),Le=r(Ys,"A",{href:!0,rel:!0});var Oi=a(Le);Ot=l(Oi,"Learning Transferable Visual Models From Natural Language Supervision"),Oi.forEach(o),K=l(Ys,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Ys.forEach(o),Y=m(t),qe=r(t,"P",{});var Ai=a(qe);He=l(Ai,"The abstract from the paper is the following:"),Ai.forEach(o),At=m(t),De=r(t,"P",{});var Ni=a(De);ke=r(Ni,"EM",{});var Vi=a(ke);un=l(Vi,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Vi.forEach(o),Ni.forEach(o),Nt=m(t),O=r(t,"H2",{class:!0});var er=a(O);re=r(er,"A",{id:!0,class:!0,href:!0});var Si=a(re);we=r(Si,"SPAN",{});var Wi=a(we);$(Me.$$.fragment,Wi),Wi.forEach(o),Si.forEach(o),_n=m(er),Ee=r(er,"SPAN",{});var Bi=a(Ee);vn=l(Bi,"Usage"),Bi.forEach(o),er.forEach(o),Vt=m(t),ee=r(t,"P",{});var Ui=a(ee);bn=l(Ui,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Ui.forEach(o),Oe=m(t),ae=r(t,"P",{});var tr=a(ae);w=l(tr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=r(tr,"A",{href:!0});var Ri=a(j);St=l(Ri,"CLIPFeatureExtractor"),Ri.forEach(o),nr=l(tr," can be used to resize (or rescale) and normalize images for the model."),tr.forEach(o),Pn=m(t),M=r(t,"P",{});var N=a(M);sr=l(N,"The "),Ke=r(N,"A",{href:!0});var Hi=a(Ke);rr=l(Hi,"CLIPTokenizer"),Hi.forEach(o),Ae=l(N," is used to encode the text. The "),ie=r(N,"A",{href:!0});var Ki=a(ie);ar=l(Ki,"CLIPProcessor"),Ki.forEach(o),ir=l(N,` wraps
`),le=r(N,"A",{href:!0});var Gi=a(le);lr=l(Gi,"CLIPFeatureExtractor"),Gi.forEach(o),dr=l(N," and "),Ne=r(N,"A",{href:!0});var Ji=a(Ne);pr=l(Ji,"CLIPTokenizer"),Ji.forEach(o),Ld=l(N,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),cr=r(N,"A",{href:!0});var Xi=a(cr);kd=l(Xi,"CLIPProcessor"),Xi.forEach(o),wd=l(N," and "),hr=r(N,"A",{href:!0});var Zi=a(hr);Md=l(Zi,"CLIPModel"),Zi.forEach(o),Ed=l(N,"."),N.forEach(o),tl=m(t),$($n.$$.fragment,t),ol=m(t),Ve=r(t,"P",{});var qt=a(Ve);zd=l(qt,"This model was contributed by "),In=r(qt,"A",{href:!0,rel:!0});var Qi=a(In);jd=l(Qi,"valhalla"),Qi.forEach(o),Fd=l(qt,". The original code can be found "),Tn=r(qt,"A",{href:!0,rel:!0});var Yi=a(Tn);qd=l(Yi,"here"),Yi.forEach(o),Dd=l(qt,"."),qt.forEach(o),nl=m(t),Ge=r(t,"H2",{class:!0});var or=a(Ge);Wt=r(or,"A",{id:!0,class:!0,href:!0});var Cg=a(Wt);ma=r(Cg,"SPAN",{});var xg=a(ma);$(yn.$$.fragment,xg),xg.forEach(o),Cg.forEach(o),Od=m(or),fa=r(or,"SPAN",{});var Lg=a(fa);Ad=l(Lg,"CLIPConfig"),Lg.forEach(o),or.forEach(o),sl=m(t),te=r(t,"DIV",{class:!0});var Ko=a(te);$(Cn.$$.fragment,Ko),Nd=m(Ko),Bt=r(Ko,"P",{});var el=a(Bt);mr=r(el,"A",{href:!0});var kg=a(mr);Vd=l(kg,"CLIPConfig"),kg.forEach(o),Sd=l(el," is the configuration class to store the configuration of a "),fr=r(el,"A",{href:!0});var wg=a(fr);Wd=l(wg,"CLIPModel"),wg.forEach(o),Bd=l(el,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),el.forEach(o),Ud=m(Ko),Je=r(Ko,"P",{});var Gr=a(Je);Rd=l(Gr,"Configuration objects inherit from "),gr=r(Gr,"A",{href:!0});var Mg=a(gr);Hd=l(Mg,"PretrainedConfig"),Mg.forEach(o),Kd=l(Gr,` and can be used to control the model outputs. Read the
documentation from `),ur=r(Gr,"A",{href:!0});var Eg=a(ur);Gd=l(Eg,"PretrainedConfig"),Eg.forEach(o),Jd=l(Gr," for more information."),Gr.forEach(o),Xd=m(Ko),Ut=r(Ko,"DIV",{class:!0});var Dl=a(Ut);$(xn.$$.fragment,Dl),Zd=m(Dl),Ln=r(Dl,"P",{});var Ol=a(Ln);Qd=l(Ol,"Instantiate a "),_r=r(Ol,"A",{href:!0});var zg=a(_r);Yd=l(zg,"CLIPConfig"),zg.forEach(o),ep=l(Ol,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ol.forEach(o),Dl.forEach(o),Ko.forEach(o),rl=m(t),Xe=r(t,"H2",{class:!0});var Al=a(Xe);Rt=r(Al,"A",{id:!0,class:!0,href:!0});var jg=a(Rt);ga=r(jg,"SPAN",{});var Fg=a(ga);$(kn.$$.fragment,Fg),Fg.forEach(o),jg.forEach(o),tp=m(Al),ua=r(Al,"SPAN",{});var qg=a(ua);op=l(qg,"CLIPTextConfig"),qg.forEach(o),Al.forEach(o),al=m(t),oe=r(t,"DIV",{class:!0});var Go=a(oe);$(wn.$$.fragment,Go),np=m(Go),Ze=r(Go,"P",{});var Jr=a(Ze);sp=l(Jr,"This is the configuration class to store the configuration of a "),vr=r(Jr,"A",{href:!0});var Dg=a(vr);rp=l(Dg,"CLIPModel"),Dg.forEach(o),ap=l(Jr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Mn=r(Jr,"A",{href:!0,rel:!0});var Og=a(Mn);ip=l(Og,"openai/clip-vit-base-patch32"),Og.forEach(o),lp=l(Jr," architecture."),Jr.forEach(o),dp=m(Go),Qe=r(Go,"P",{});var Xr=a(Qe);pp=l(Xr,"Configuration objects inherit from "),br=r(Xr,"A",{href:!0});var Ag=a(br);cp=l(Ag,"PretrainedConfig"),Ag.forEach(o),hp=l(Xr,` and can be used to control the model outputs. Read the
documentation from `),Pr=r(Xr,"A",{href:!0});var Ng=a(Pr);mp=l(Ng,"PretrainedConfig"),Ng.forEach(o),fp=l(Xr," for more information."),Xr.forEach(o),gp=m(Go),$(Ht.$$.fragment,Go),Go.forEach(o),il=m(t),Ye=r(t,"H2",{class:!0});var Nl=a(Ye);Kt=r(Nl,"A",{id:!0,class:!0,href:!0});var Vg=a(Kt);_a=r(Vg,"SPAN",{});var Sg=a(_a);$(En.$$.fragment,Sg),Sg.forEach(o),Vg.forEach(o),up=m(Nl),va=r(Nl,"SPAN",{});var Wg=a(va);_p=l(Wg,"CLIPVisionConfig"),Wg.forEach(o),Nl.forEach(o),ll=m(t),ne=r(t,"DIV",{class:!0});var Jo=a(ne);$(zn.$$.fragment,Jo),vp=m(Jo),et=r(Jo,"P",{});var Zr=a(et);bp=l(Zr,"This is the configuration class to store the configuration of a "),$r=r(Zr,"A",{href:!0});var Bg=a($r);Pp=l(Bg,"CLIPModel"),Bg.forEach(o),$p=l(Zr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),jn=r(Zr,"A",{href:!0,rel:!0});var Ug=a(jn);Ip=l(Ug,"openai/clip-vit-base-patch32"),Ug.forEach(o),Tp=l(Zr," architecture."),Zr.forEach(o),yp=m(Jo),tt=r(Jo,"P",{});var Qr=a(tt);Cp=l(Qr,"Configuration objects inherit from "),Ir=r(Qr,"A",{href:!0});var Rg=a(Ir);xp=l(Rg,"PretrainedConfig"),Rg.forEach(o),Lp=l(Qr,` and can be used to control the model outputs. Read the
documentation from `),Tr=r(Qr,"A",{href:!0});var Hg=a(Tr);kp=l(Hg,"PretrainedConfig"),Hg.forEach(o),wp=l(Qr," for more information."),Qr.forEach(o),Mp=m(Jo),$(Gt.$$.fragment,Jo),Jo.forEach(o),dl=m(t),ot=r(t,"H2",{class:!0});var Vl=a(ot);Jt=r(Vl,"A",{id:!0,class:!0,href:!0});var Kg=a(Jt);ba=r(Kg,"SPAN",{});var Gg=a(ba);$(Fn.$$.fragment,Gg),Gg.forEach(o),Kg.forEach(o),Ep=m(Vl),Pa=r(Vl,"SPAN",{});var Jg=a(Pa);zp=l(Jg,"CLIPTokenizer"),Jg.forEach(o),Vl.forEach(o),pl=m(t),F=r(t,"DIV",{class:!0});var J=a(F);$(qn.$$.fragment,J),jp=m(J),$a=r(J,"P",{});var Xg=a($a);Fp=l(Xg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Xg.forEach(o),qp=m(J),Dn=r(J,"P",{});var Sl=a(Dn);Dp=l(Sl,"This tokenizer inherits from "),yr=r(Sl,"A",{href:!0});var Zg=a(yr);Op=l(Zg,"PreTrainedTokenizer"),Zg.forEach(o),Ap=l(Sl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sl.forEach(o),Np=m(J),de=r(J,"DIV",{class:!0});var Xo=a(de);$(On.$$.fragment,Xo),Vp=m(Xo),Ia=r(Xo,"P",{});var Qg=a(Ia);Sp=l(Qg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Qg.forEach(o),Wp=m(Xo),Ta=r(Xo,"UL",{});var Yg=a(Ta);Cr=r(Yg,"LI",{});var Tg=a(Cr);Bp=l(Tg,"single sequence: "),ya=r(Tg,"CODE",{});var eu=a(ya);Up=l(eu,"<|startoftext|> X <|endoftext|>"),eu.forEach(o),Tg.forEach(o),Yg.forEach(o),Rp=m(Xo),Ca=r(Xo,"P",{});var tu=a(Ca);Hp=l(tu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),tu.forEach(o),Xo.forEach(o),Kp=m(J),Xt=r(J,"DIV",{class:!0});var Wl=a(Xt);$(An.$$.fragment,Wl),Gp=m(Wl),Nn=r(Wl,"P",{});var Bl=a(Nn);Jp=l(Bl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=r(Bl,"CODE",{});var ou=a(xa);Xp=l(ou,"prepare_for_model"),ou.forEach(o),Zp=l(Bl," method."),Bl.forEach(o),Wl.forEach(o),Qp=m(J),Zt=r(J,"DIV",{class:!0});var Ul=a(Zt);$(Vn.$$.fragment,Ul),Yp=m(Ul),La=r(Ul,"P",{});var nu=a(La);ec=l(nu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),nu.forEach(o),Ul.forEach(o),tc=m(J),xr=r(J,"DIV",{class:!0});var su=a(xr);$(Sn.$$.fragment,su),su.forEach(o),J.forEach(o),cl=m(t),nt=r(t,"H2",{class:!0});var Rl=a(nt);Qt=r(Rl,"A",{id:!0,class:!0,href:!0});var ru=a(Qt);ka=r(ru,"SPAN",{});var au=a(ka);$(Wn.$$.fragment,au),au.forEach(o),ru.forEach(o),oc=m(Rl),wa=r(Rl,"SPAN",{});var iu=a(wa);nc=l(iu,"CLIPTokenizerFast"),iu.forEach(o),Rl.forEach(o),hl=m(t),B=r(t,"DIV",{class:!0});var Se=a(B);$(Bn.$$.fragment,Se),sc=m(Se),Un=r(Se,"P",{});var Hl=a(Un);rc=l(Hl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ma=r(Hl,"EM",{});var lu=a(Ma);ac=l(lu,"tokenizers"),lu.forEach(o),ic=l(Hl,` library). Based on byte-level
Byte-Pair-Encoding.`),Hl.forEach(o),lc=m(Se),Rn=r(Se,"P",{});var Kl=a(Rn);dc=l(Kl,"This tokenizer inherits from "),Lr=r(Kl,"A",{href:!0});var du=a(Lr);pc=l(du,"PreTrainedTokenizerFast"),du.forEach(o),cc=l(Kl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kl.forEach(o),hc=m(Se),pe=r(Se,"DIV",{class:!0});var Zo=a(pe);$(Hn.$$.fragment,Zo),mc=m(Zo),Ea=r(Zo,"P",{});var pu=a(Ea);fc=l(pu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),pu.forEach(o),gc=m(Zo),za=r(Zo,"UL",{});var cu=a(za);kr=r(cu,"LI",{});var yg=a(kr);uc=l(yg,"single sequence: "),ja=r(yg,"CODE",{});var hu=a(ja);_c=l(hu,"<|startoftext|> X <|endoftext|>"),hu.forEach(o),yg.forEach(o),cu.forEach(o),vc=m(Zo),Fa=r(Zo,"P",{});var mu=a(Fa);bc=l(mu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),mu.forEach(o),Zo.forEach(o),Pc=m(Se),Yt=r(Se,"DIV",{class:!0});var Gl=a(Yt);$(Kn.$$.fragment,Gl),$c=m(Gl),qa=r(Gl,"P",{});var fu=a(qa);Ic=l(fu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),fu.forEach(o),Gl.forEach(o),Se.forEach(o),ml=m(t),st=r(t,"H2",{class:!0});var Jl=a(st);eo=r(Jl,"A",{id:!0,class:!0,href:!0});var gu=a(eo);Da=r(gu,"SPAN",{});var uu=a(Da);$(Gn.$$.fragment,uu),uu.forEach(o),gu.forEach(o),Tc=m(Jl),Oa=r(Jl,"SPAN",{});var _u=a(Oa);yc=l(_u,"CLIPFeatureExtractor"),_u.forEach(o),Jl.forEach(o),fl=m(t),U=r(t,"DIV",{class:!0});var We=a(U);$(Jn.$$.fragment,We),Cc=m(We),Aa=r(We,"P",{});var vu=a(Aa);xc=l(vu,"Constructs a CLIP feature extractor."),vu.forEach(o),Lc=m(We),Xn=r(We,"P",{});var Xl=a(Xn);kc=l(Xl,"This feature extractor inherits from "),wr=r(Xl,"A",{href:!0});var bu=a(wr);wc=l(bu,"FeatureExtractionMixin"),bu.forEach(o),Mc=l(Xl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Xl.forEach(o),Ec=m(We),to=r(We,"DIV",{class:!0});var Zl=a(to);$(Zn.$$.fragment,Zl),zc=m(Zl),Qn=r(Zl,"P",{});var Ql=a(Qn);jc=l(Ql,"Crops "),Na=r(Ql,"CODE",{});var Pu=a(Na);Fc=l(Pu,"image"),Pu.forEach(o),qc=l(Ql,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Ql.forEach(o),Zl.forEach(o),Dc=m(We),oo=r(We,"DIV",{class:!0});var Yl=a(oo);$(Yn.$$.fragment,Yl),Oc=m(Yl),rt=r(Yl,"P",{});var Yr=a(rt);Ac=l(Yr,"Resizes "),Va=r(Yr,"CODE",{});var $u=a(Va);Nc=l($u,"image"),$u.forEach(o),Vc=l(Yr,". Note that this will trigger a conversion of "),Sa=r(Yr,"CODE",{});var Iu=a(Sa);Sc=l(Iu,"image"),Iu.forEach(o),Wc=l(Yr," to a PIL Image."),Yr.forEach(o),Yl.forEach(o),We.forEach(o),gl=m(t),at=r(t,"H2",{class:!0});var ed=a(at);no=r(ed,"A",{id:!0,class:!0,href:!0});var Tu=a(no);Wa=r(Tu,"SPAN",{});var yu=a(Wa);$(es.$$.fragment,yu),yu.forEach(o),Tu.forEach(o),Bc=m(ed),Ba=r(ed,"SPAN",{});var Cu=a(Ba);Uc=l(Cu,"CLIPProcessor"),Cu.forEach(o),ed.forEach(o),ul=m(t),R=r(t,"DIV",{class:!0});var Be=a(R);$(ts.$$.fragment,Be),Rc=m(Be),Ua=r(Be,"P",{});var xu=a(Ua);Hc=l(xu,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),xu.forEach(o),Kc=m(Be),G=r(Be,"P",{});var je=a(G);Mr=r(je,"A",{href:!0});var Lu=a(Mr);Gc=l(Lu,"CLIPProcessor"),Lu.forEach(o),Jc=l(je," offers all the functionalities of "),Er=r(je,"A",{href:!0});var ku=a(Er);Xc=l(ku,"CLIPFeatureExtractor"),ku.forEach(o),Zc=l(je," and "),zr=r(je,"A",{href:!0});var wu=a(zr);Qc=l(wu,"CLIPTokenizerFast"),wu.forEach(o),Yc=l(je,`. See the
`),Ra=r(je,"CODE",{});var Mu=a(Ra);eh=l(Mu,"__call__()"),Mu.forEach(o),th=l(je," and "),jr=r(je,"A",{href:!0});var Eu=a(jr);oh=l(Eu,"decode()"),Eu.forEach(o),nh=l(je," for more information."),je.forEach(o),sh=m(Be),so=r(Be,"DIV",{class:!0});var td=a(so);$(os.$$.fragment,td),rh=m(td),ns=r(td,"P",{});var od=a(ns);ah=l(od,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Fr=r(od,"A",{href:!0});var zu=a(Fr);ih=l(zu,"batch_decode()"),zu.forEach(o),lh=l(od,`. Please
refer to the docstring of this method for more information.`),od.forEach(o),td.forEach(o),dh=m(Be),ro=r(Be,"DIV",{class:!0});var nd=a(ro);$(ss.$$.fragment,nd),ph=m(nd),rs=r(nd,"P",{});var sd=a(rs);ch=l(sd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),qr=r(sd,"A",{href:!0});var ju=a(qr);hh=l(ju,"decode()"),ju.forEach(o),mh=l(sd,`. Please refer to
the docstring of this method for more information.`),sd.forEach(o),nd.forEach(o),Be.forEach(o),_l=m(t),it=r(t,"H2",{class:!0});var rd=a(it);ao=r(rd,"A",{id:!0,class:!0,href:!0});var Fu=a(ao);Ha=r(Fu,"SPAN",{});var qu=a(Ha);$(as.$$.fragment,qu),qu.forEach(o),Fu.forEach(o),fh=m(rd),Ka=r(rd,"SPAN",{});var Du=a(Ka);gh=l(Du,"CLIPModel"),Du.forEach(o),rd.forEach(o),vl=m(t),H=r(t,"DIV",{class:!0});var Ue=a(H);$(is.$$.fragment,Ue),uh=m(Ue),ls=r(Ue,"P",{});var ad=a(ls);_h=l(ad,"This model is a PyTorch "),ds=r(ad,"A",{href:!0,rel:!0});var Ou=a(ds);vh=l(Ou,"torch.nn.Module"),Ou.forEach(o),bh=l(ad,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ad.forEach(o),Ph=m(Ue),ce=r(Ue,"DIV",{class:!0});var Qo=a(ce);$(ps.$$.fragment,Qo),$h=m(Qo),lt=r(Qo,"P",{});var ea=a(lt);Ih=l(ea,"The "),Dr=r(ea,"A",{href:!0});var Au=a(Dr);Th=l(Au,"CLIPModel"),Au.forEach(o),yh=l(ea," forward method, overrides the "),Ga=r(ea,"CODE",{});var Nu=a(Ga);Ch=l(Nu,"__call__"),Nu.forEach(o),xh=l(ea," special method."),ea.forEach(o),Lh=m(Qo),$(io.$$.fragment,Qo),kh=m(Qo),$(lo.$$.fragment,Qo),Qo.forEach(o),wh=m(Ue),he=r(Ue,"DIV",{class:!0});var Yo=a(he);$(cs.$$.fragment,Yo),Mh=m(Yo),dt=r(Yo,"P",{});var ta=a(dt);Eh=l(ta,"The "),Or=r(ta,"A",{href:!0});var Vu=a(Or);zh=l(Vu,"CLIPModel"),Vu.forEach(o),jh=l(ta," forward method, overrides the "),Ja=r(ta,"CODE",{});var Su=a(Ja);Fh=l(Su,"__call__"),Su.forEach(o),qh=l(ta," special method."),ta.forEach(o),Dh=m(Yo),$(po.$$.fragment,Yo),Oh=m(Yo),$(co.$$.fragment,Yo),Yo.forEach(o),Ah=m(Ue),me=r(Ue,"DIV",{class:!0});var en=a(me);$(hs.$$.fragment,en),Nh=m(en),pt=r(en,"P",{});var oa=a(pt);Vh=l(oa,"The "),Ar=r(oa,"A",{href:!0});var Wu=a(Ar);Sh=l(Wu,"CLIPModel"),Wu.forEach(o),Wh=l(oa," forward method, overrides the "),Xa=r(oa,"CODE",{});var Bu=a(Xa);Bh=l(Bu,"__call__"),Bu.forEach(o),Uh=l(oa," special method."),oa.forEach(o),Rh=m(en),$(ho.$$.fragment,en),Hh=m(en),$(mo.$$.fragment,en),en.forEach(o),Ue.forEach(o),bl=m(t),ct=r(t,"H2",{class:!0});var id=a(ct);fo=r(id,"A",{id:!0,class:!0,href:!0});var Uu=a(fo);Za=r(Uu,"SPAN",{});var Ru=a(Za);$(ms.$$.fragment,Ru),Ru.forEach(o),Uu.forEach(o),Kh=m(id),Qa=r(id,"SPAN",{});var Hu=a(Qa);Gh=l(Hu,"CLIPTextModel"),Hu.forEach(o),id.forEach(o),Pl=m(t),ht=r(t,"DIV",{class:!0});var ld=a(ht);$(fs.$$.fragment,ld),Jh=m(ld),fe=r(ld,"DIV",{class:!0});var tn=a(fe);$(gs.$$.fragment,tn),Xh=m(tn),mt=r(tn,"P",{});var na=a(mt);Zh=l(na,"The "),Nr=r(na,"A",{href:!0});var Ku=a(Nr);Qh=l(Ku,"CLIPTextModel"),Ku.forEach(o),Yh=l(na," forward method, overrides the "),Ya=r(na,"CODE",{});var Gu=a(Ya);em=l(Gu,"__call__"),Gu.forEach(o),tm=l(na," special method."),na.forEach(o),om=m(tn),$(go.$$.fragment,tn),nm=m(tn),$(uo.$$.fragment,tn),tn.forEach(o),ld.forEach(o),$l=m(t),ft=r(t,"H2",{class:!0});var dd=a(ft);_o=r(dd,"A",{id:!0,class:!0,href:!0});var Ju=a(_o);ei=r(Ju,"SPAN",{});var Xu=a(ei);$(us.$$.fragment,Xu),Xu.forEach(o),Ju.forEach(o),sm=m(dd),ti=r(dd,"SPAN",{});var Zu=a(ti);rm=l(Zu,"CLIPVisionModel"),Zu.forEach(o),dd.forEach(o),Il=m(t),gt=r(t,"DIV",{class:!0});var pd=a(gt);$(_s.$$.fragment,pd),am=m(pd),ge=r(pd,"DIV",{class:!0});var on=a(ge);$(vs.$$.fragment,on),im=m(on),ut=r(on,"P",{});var sa=a(ut);lm=l(sa,"The "),Vr=r(sa,"A",{href:!0});var Qu=a(Vr);dm=l(Qu,"CLIPVisionModel"),Qu.forEach(o),pm=l(sa," forward method, overrides the "),oi=r(sa,"CODE",{});var Yu=a(oi);cm=l(Yu,"__call__"),Yu.forEach(o),hm=l(sa," special method."),sa.forEach(o),mm=m(on),$(vo.$$.fragment,on),fm=m(on),$(bo.$$.fragment,on),on.forEach(o),pd.forEach(o),Tl=m(t),_t=r(t,"H2",{class:!0});var cd=a(_t);Po=r(cd,"A",{id:!0,class:!0,href:!0});var e_=a(Po);ni=r(e_,"SPAN",{});var t_=a(ni);$(bs.$$.fragment,t_),t_.forEach(o),e_.forEach(o),gm=m(cd),si=r(cd,"SPAN",{});var o_=a(si);um=l(o_,"TFCLIPModel"),o_.forEach(o),cd.forEach(o),yl=m(t),q=r(t,"DIV",{class:!0});var X=a(q);$(Ps.$$.fragment,X),_m=m(X),$s=r(X,"P",{});var hd=a($s);vm=l(hd,"This model inherits from "),Sr=r(hd,"A",{href:!0});var n_=a(Sr);bm=l(n_,"TFPreTrainedModel"),n_.forEach(o),Pm=l(hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd.forEach(o),$m=m(X),Is=r(X,"P",{});var md=a(Is);Im=l(md,"This model is also a "),Ts=r(md,"A",{href:!0,rel:!0});var s_=a(Ts);Tm=l(s_,"tf.keras.Model"),s_.forEach(o),ym=l(md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),md.forEach(o),Cm=m(X),$($o.$$.fragment,X),xm=m(X),ue=r(X,"DIV",{class:!0});var nn=a(ue);$(ys.$$.fragment,nn),Lm=m(nn),vt=r(nn,"P",{});var ra=a(vt);km=l(ra,"The "),Wr=r(ra,"A",{href:!0});var r_=a(Wr);wm=l(r_,"TFCLIPModel"),r_.forEach(o),Mm=l(ra," forward method, overrides the "),ri=r(ra,"CODE",{});var a_=a(ri);Em=l(a_,"__call__"),a_.forEach(o),zm=l(ra," special method."),ra.forEach(o),jm=m(nn),$(Io.$$.fragment,nn),Fm=m(nn),$(To.$$.fragment,nn),nn.forEach(o),qm=m(X),_e=r(X,"DIV",{class:!0});var sn=a(_e);$(Cs.$$.fragment,sn),Dm=m(sn),bt=r(sn,"P",{});var aa=a(bt);Om=l(aa,"The "),Br=r(aa,"A",{href:!0});var i_=a(Br);Am=l(i_,"TFCLIPModel"),i_.forEach(o),Nm=l(aa," forward method, overrides the "),ai=r(aa,"CODE",{});var l_=a(ai);Vm=l(l_,"__call__"),l_.forEach(o),Sm=l(aa," special method."),aa.forEach(o),Wm=m(sn),$(yo.$$.fragment,sn),Bm=m(sn),$(Co.$$.fragment,sn),sn.forEach(o),Um=m(X),ve=r(X,"DIV",{class:!0});var rn=a(ve);$(xs.$$.fragment,rn),Rm=m(rn),Pt=r(rn,"P",{});var ia=a(Pt);Hm=l(ia,"The "),Ur=r(ia,"A",{href:!0});var d_=a(Ur);Km=l(d_,"TFCLIPModel"),d_.forEach(o),Gm=l(ia," forward method, overrides the "),ii=r(ia,"CODE",{});var p_=a(ii);Jm=l(p_,"__call__"),p_.forEach(o),Xm=l(ia," special method."),ia.forEach(o),Zm=m(rn),$(xo.$$.fragment,rn),Qm=m(rn),$(Lo.$$.fragment,rn),rn.forEach(o),X.forEach(o),Cl=m(t),$t=r(t,"H2",{class:!0});var fd=a($t);ko=r(fd,"A",{id:!0,class:!0,href:!0});var c_=a(ko);li=r(c_,"SPAN",{});var h_=a(li);$(Ls.$$.fragment,h_),h_.forEach(o),c_.forEach(o),Ym=m(fd),di=r(fd,"SPAN",{});var m_=a(di);ef=l(m_,"TFCLIPTextModel"),m_.forEach(o),fd.forEach(o),xl=m(t),It=r(t,"DIV",{class:!0});var gd=a(It);$(ks.$$.fragment,gd),tf=m(gd),be=r(gd,"DIV",{class:!0});var an=a(be);$(ws.$$.fragment,an),of=m(an),Tt=r(an,"P",{});var la=a(Tt);nf=l(la,"The "),Rr=r(la,"A",{href:!0});var f_=a(Rr);sf=l(f_,"TFCLIPTextModel"),f_.forEach(o),rf=l(la," forward method, overrides the "),pi=r(la,"CODE",{});var g_=a(pi);af=l(g_,"__call__"),g_.forEach(o),lf=l(la," special method."),la.forEach(o),df=m(an),$(wo.$$.fragment,an),pf=m(an),$(Mo.$$.fragment,an),an.forEach(o),gd.forEach(o),Ll=m(t),yt=r(t,"H2",{class:!0});var ud=a(yt);Eo=r(ud,"A",{id:!0,class:!0,href:!0});var u_=a(Eo);ci=r(u_,"SPAN",{});var __=a(ci);$(Ms.$$.fragment,__),__.forEach(o),u_.forEach(o),cf=m(ud),hi=r(ud,"SPAN",{});var v_=a(hi);hf=l(v_,"TFCLIPVisionModel"),v_.forEach(o),ud.forEach(o),kl=m(t),Ct=r(t,"DIV",{class:!0});var _d=a(Ct);$(Es.$$.fragment,_d),mf=m(_d),Pe=r(_d,"DIV",{class:!0});var ln=a(Pe);$(zs.$$.fragment,ln),ff=m(ln),xt=r(ln,"P",{});var da=a(xt);gf=l(da,"The "),Hr=r(da,"A",{href:!0});var b_=a(Hr);uf=l(b_,"TFCLIPVisionModel"),b_.forEach(o),_f=l(da," forward method, overrides the "),mi=r(da,"CODE",{});var P_=a(mi);vf=l(P_,"__call__"),P_.forEach(o),bf=l(da," special method."),da.forEach(o),Pf=m(ln),$(zo.$$.fragment,ln),$f=m(ln),$(jo.$$.fragment,ln),ln.forEach(o),_d.forEach(o),wl=m(t),Lt=r(t,"H2",{class:!0});var vd=a(Lt);Fo=r(vd,"A",{id:!0,class:!0,href:!0});var $_=a(Fo);fi=r($_,"SPAN",{});var I_=a(fi);$(js.$$.fragment,I_),I_.forEach(o),$_.forEach(o),If=m(vd),gi=r(vd,"SPAN",{});var T_=a(gi);Tf=l(T_,"FlaxCLIPModel"),T_.forEach(o),vd.forEach(o),Ml=m(t),E=r(t,"DIV",{class:!0});var W=a(E);$(Fs.$$.fragment,W),yf=m(W),qs=r(W,"P",{});var bd=a(qs);Cf=l(bd,"This model inherits from "),Kr=r(bd,"A",{href:!0});var y_=a(Kr);xf=l(y_,"FlaxPreTrainedModel"),y_.forEach(o),Lf=l(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),kf=m(W),Ds=r(W,"P",{});var Pd=a(Ds);wf=l(Pd,"This model is also a Flax Linen "),Os=r(Pd,"A",{href:!0,rel:!0});var C_=a(Os);Mf=l(C_,"flax.linen.Module"),C_.forEach(o),Ef=l(Pd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pd.forEach(o),zf=m(W),ui=r(W,"P",{});var x_=a(ui);jf=l(x_,"Finally, this model supports inherent JAX features such as:"),x_.forEach(o),Ff=m(W),ze=r(W,"UL",{});var dn=a(ze);_i=r(dn,"LI",{});var L_=a(_i);As=r(L_,"A",{href:!0,rel:!0});var k_=a(As);qf=l(k_,"Just-In-Time (JIT) compilation"),k_.forEach(o),L_.forEach(o),Df=m(dn),vi=r(dn,"LI",{});var w_=a(vi);Ns=r(w_,"A",{href:!0,rel:!0});var M_=a(Ns);Of=l(M_,"Automatic Differentiation"),M_.forEach(o),w_.forEach(o),Af=m(dn),bi=r(dn,"LI",{});var E_=a(bi);Vs=r(E_,"A",{href:!0,rel:!0});var z_=a(Vs);Nf=l(z_,"Vectorization"),z_.forEach(o),E_.forEach(o),Vf=m(dn),Pi=r(dn,"LI",{});var j_=a(Pi);Ss=r(j_,"A",{href:!0,rel:!0});var F_=a(Ss);Sf=l(F_,"Parallelization"),F_.forEach(o),j_.forEach(o),dn.forEach(o),Wf=m(W),$e=r(W,"DIV",{class:!0});var pn=a($e);$(Ws.$$.fragment,pn),Bf=m(pn),kt=r(pn,"P",{});var pa=a(kt);Uf=l(pa,"The "),$i=r(pa,"CODE",{});var q_=a($i);Rf=l(q_,"FlaxCLIPPreTrainedModel"),q_.forEach(o),Hf=l(pa," forward method, overrides the "),Ii=r(pa,"CODE",{});var D_=a(Ii);Kf=l(D_,"__call__"),D_.forEach(o),Gf=l(pa," special method."),pa.forEach(o),Jf=m(pn),$(qo.$$.fragment,pn),Xf=m(pn),$(Do.$$.fragment,pn),pn.forEach(o),Zf=m(W),Oo=r(W,"DIV",{class:!0});var $d=a(Oo);$(Bs.$$.fragment,$d),Qf=m($d),$(Ao.$$.fragment,$d),$d.forEach(o),Yf=m(W),No=r(W,"DIV",{class:!0});var Id=a(No);$(Us.$$.fragment,Id),eg=m(Id),$(Vo.$$.fragment,Id),Id.forEach(o),W.forEach(o),El=m(t),wt=r(t,"H2",{class:!0});var Td=a(wt);So=r(Td,"A",{id:!0,class:!0,href:!0});var O_=a(So);Ti=r(O_,"SPAN",{});var A_=a(Ti);$(Rs.$$.fragment,A_),A_.forEach(o),O_.forEach(o),tg=m(Td),yi=r(Td,"SPAN",{});var N_=a(yi);og=l(N_,"FlaxCLIPTextModel"),N_.forEach(o),Td.forEach(o),zl=m(t),Mt=r(t,"DIV",{class:!0});var yd=a(Mt);$(Hs.$$.fragment,yd),ng=m(yd),Ie=r(yd,"DIV",{class:!0});var cn=a(Ie);$(Ks.$$.fragment,cn),sg=m(cn),Et=r(cn,"P",{});var ca=a(Et);rg=l(ca,"The "),Ci=r(ca,"CODE",{});var V_=a(Ci);ag=l(V_,"FlaxCLIPTextPreTrainedModel"),V_.forEach(o),ig=l(ca," forward method, overrides the "),xi=r(ca,"CODE",{});var S_=a(xi);lg=l(S_,"__call__"),S_.forEach(o),dg=l(ca," special method."),ca.forEach(o),pg=m(cn),$(Wo.$$.fragment,cn),cg=m(cn),$(Bo.$$.fragment,cn),cn.forEach(o),yd.forEach(o),jl=m(t),zt=r(t,"H2",{class:!0});var Cd=a(zt);Uo=r(Cd,"A",{id:!0,class:!0,href:!0});var W_=a(Uo);Li=r(W_,"SPAN",{});var B_=a(Li);$(Gs.$$.fragment,B_),B_.forEach(o),W_.forEach(o),hg=m(Cd),ki=r(Cd,"SPAN",{});var U_=a(ki);mg=l(U_,"FlaxCLIPVisionModel"),U_.forEach(o),Cd.forEach(o),Fl=m(t),jt=r(t,"DIV",{class:!0});var xd=a(jt);$(Js.$$.fragment,xd),fg=m(xd),Te=r(xd,"DIV",{class:!0});var hn=a(Te);$(Xs.$$.fragment,hn),gg=m(hn),Ft=r(hn,"P",{});var ha=a(Ft);ug=l(ha,"The "),wi=r(ha,"CODE",{});var R_=a(wi);_g=l(R_,"FlaxCLIPVisionPreTrainedModel"),R_.forEach(o),vg=l(ha," forward method, overrides the "),Mi=r(ha,"CODE",{});var H_=a(Mi);bg=l(H_,"__call__"),H_.forEach(o),Pg=l(ha," special method."),ha.forEach(o),$g=m(hn),$(Ro.$$.fragment,hn),Ig=m(hn),$(Ho.$$.fragment,hn),hn.forEach(o),xd.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Mv)),f(c,"id","clip"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#clip"),f(g,"class","relative group"),f(se,"id","overview"),f(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(se,"href","#overview"),f(z,"class","relative group"),f(Le,"href","https://arxiv.org/abs/2103.00020"),f(Le,"rel","nofollow"),f(re,"id","usage"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#usage"),f(O,"class","relative group"),f(j,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor"),f(Ke,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer"),f(ie,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPProcessor"),f(le,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor"),f(Ne,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizer"),f(cr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPProcessor"),f(hr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(In,"href","https://huggingface.co/valhalla"),f(In,"rel","nofollow"),f(Tn,"href","https://github.com/openai/CLIP"),f(Tn,"rel","nofollow"),f(Wt,"id","transformers.CLIPConfig"),f(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wt,"href","#transformers.CLIPConfig"),f(Ge,"class","relative group"),f(mr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPConfig"),f(fr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(gr,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(ur,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(_r,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPConfig"),f(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rt,"id","transformers.CLIPTextConfig"),f(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rt,"href","#transformers.CLIPTextConfig"),f(Xe,"class","relative group"),f(vr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(Mn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),f(Mn,"rel","nofollow"),f(br,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(Pr,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"id","transformers.CLIPVisionConfig"),f(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Kt,"href","#transformers.CLIPVisionConfig"),f(Ye,"class","relative group"),f($r,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(jn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),f(jn,"rel","nofollow"),f(Ir,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(Tr,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jt,"id","transformers.CLIPTokenizer"),f(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jt,"href","#transformers.CLIPTokenizer"),f(ot,"class","relative group"),f(yr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qt,"id","transformers.CLIPTokenizerFast"),f(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qt,"href","#transformers.CLIPTokenizerFast"),f(nt,"class","relative group"),f(Lr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(eo,"id","transformers.CLIPFeatureExtractor"),f(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(eo,"href","#transformers.CLIPFeatureExtractor"),f(st,"class","relative group"),f(wr,"href","/docs/transformers/pr_highlight/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(no,"id","transformers.CLIPProcessor"),f(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(no,"href","#transformers.CLIPProcessor"),f(at,"class","relative group"),f(Mr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPProcessor"),f(Er,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPFeatureExtractor"),f(zr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTokenizerFast"),f(jr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPProcessor.decode"),f(Fr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),f(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),f(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ao,"id","transformers.CLIPModel"),f(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ao,"href","#transformers.CLIPModel"),f(it,"class","relative group"),f(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ds,"rel","nofollow"),f(Dr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Or,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ar,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPModel"),f(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fo,"id","transformers.CLIPTextModel"),f(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fo,"href","#transformers.CLIPTextModel"),f(ct,"class","relative group"),f(Nr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPTextModel"),f(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.CLIPVisionModel"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.CLIPVisionModel"),f(ft,"class","relative group"),f(Vr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.CLIPVisionModel"),f(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.TFCLIPModel"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.TFCLIPModel"),f(_t,"class","relative group"),f(Sr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ts,"rel","nofollow"),f(Wr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPModel"),f(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Br,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPModel"),f(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ur,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPModel"),f(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ko,"id","transformers.TFCLIPTextModel"),f(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ko,"href","#transformers.TFCLIPTextModel"),f($t,"class","relative group"),f(Rr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPTextModel"),f(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"id","transformers.TFCLIPVisionModel"),f(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Eo,"href","#transformers.TFCLIPVisionModel"),f(yt,"class","relative group"),f(Hr,"href","/docs/transformers/pr_highlight/en/model_doc/clip#transformers.TFCLIPVisionModel"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.FlaxCLIPModel"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.FlaxCLIPModel"),f(Lt,"class","relative group"),f(Kr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Os,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Os,"rel","nofollow"),f(As,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(As,"rel","nofollow"),f(Ns,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ns,"rel","nofollow"),f(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Vs,"rel","nofollow"),f(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ss,"rel","nofollow"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.FlaxCLIPTextModel"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.FlaxCLIPTextModel"),f(wt,"class","relative group"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.FlaxCLIPVisionModel"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.FlaxCLIPVisionModel"),f(zt,"class","relative group"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),v(t,b,u),v(t,g,u),e(g,c),e(c,_),I(n,_,null),e(g,p),e(g,L),e(L,mn),v(t,Re,u),v(t,z,u),e(z,se),e(se,ye),I(Ce,ye,null),e(z,fn),e(z,xe),e(xe,gn),v(t,Dt,u),v(t,Q,u),e(Q,Fe),e(Q,Le),e(Le,Ot),e(Q,K),v(t,Y,u),v(t,qe,u),e(qe,He),v(t,At,u),v(t,De,u),e(De,ke),e(ke,un),v(t,Nt,u),v(t,O,u),e(O,re),e(re,we),I(Me,we,null),e(O,_n),e(O,Ee),e(Ee,vn),v(t,Vt,u),v(t,ee,u),e(ee,bn),v(t,Oe,u),v(t,ae,u),e(ae,w),e(ae,j),e(j,St),e(ae,nr),v(t,Pn,u),v(t,M,u),e(M,sr),e(M,Ke),e(Ke,rr),e(M,Ae),e(M,ie),e(ie,ar),e(M,ir),e(M,le),e(le,lr),e(M,dr),e(M,Ne),e(Ne,pr),e(M,Ld),e(M,cr),e(cr,kd),e(M,wd),e(M,hr),e(hr,Md),e(M,Ed),v(t,tl,u),I($n,t,u),v(t,ol,u),v(t,Ve,u),e(Ve,zd),e(Ve,In),e(In,jd),e(Ve,Fd),e(Ve,Tn),e(Tn,qd),e(Ve,Dd),v(t,nl,u),v(t,Ge,u),e(Ge,Wt),e(Wt,ma),I(yn,ma,null),e(Ge,Od),e(Ge,fa),e(fa,Ad),v(t,sl,u),v(t,te,u),I(Cn,te,null),e(te,Nd),e(te,Bt),e(Bt,mr),e(mr,Vd),e(Bt,Sd),e(Bt,fr),e(fr,Wd),e(Bt,Bd),e(te,Ud),e(te,Je),e(Je,Rd),e(Je,gr),e(gr,Hd),e(Je,Kd),e(Je,ur),e(ur,Gd),e(Je,Jd),e(te,Xd),e(te,Ut),I(xn,Ut,null),e(Ut,Zd),e(Ut,Ln),e(Ln,Qd),e(Ln,_r),e(_r,Yd),e(Ln,ep),v(t,rl,u),v(t,Xe,u),e(Xe,Rt),e(Rt,ga),I(kn,ga,null),e(Xe,tp),e(Xe,ua),e(ua,op),v(t,al,u),v(t,oe,u),I(wn,oe,null),e(oe,np),e(oe,Ze),e(Ze,sp),e(Ze,vr),e(vr,rp),e(Ze,ap),e(Ze,Mn),e(Mn,ip),e(Ze,lp),e(oe,dp),e(oe,Qe),e(Qe,pp),e(Qe,br),e(br,cp),e(Qe,hp),e(Qe,Pr),e(Pr,mp),e(Qe,fp),e(oe,gp),I(Ht,oe,null),v(t,il,u),v(t,Ye,u),e(Ye,Kt),e(Kt,_a),I(En,_a,null),e(Ye,up),e(Ye,va),e(va,_p),v(t,ll,u),v(t,ne,u),I(zn,ne,null),e(ne,vp),e(ne,et),e(et,bp),e(et,$r),e($r,Pp),e(et,$p),e(et,jn),e(jn,Ip),e(et,Tp),e(ne,yp),e(ne,tt),e(tt,Cp),e(tt,Ir),e(Ir,xp),e(tt,Lp),e(tt,Tr),e(Tr,kp),e(tt,wp),e(ne,Mp),I(Gt,ne,null),v(t,dl,u),v(t,ot,u),e(ot,Jt),e(Jt,ba),I(Fn,ba,null),e(ot,Ep),e(ot,Pa),e(Pa,zp),v(t,pl,u),v(t,F,u),I(qn,F,null),e(F,jp),e(F,$a),e($a,Fp),e(F,qp),e(F,Dn),e(Dn,Dp),e(Dn,yr),e(yr,Op),e(Dn,Ap),e(F,Np),e(F,de),I(On,de,null),e(de,Vp),e(de,Ia),e(Ia,Sp),e(de,Wp),e(de,Ta),e(Ta,Cr),e(Cr,Bp),e(Cr,ya),e(ya,Up),e(de,Rp),e(de,Ca),e(Ca,Hp),e(F,Kp),e(F,Xt),I(An,Xt,null),e(Xt,Gp),e(Xt,Nn),e(Nn,Jp),e(Nn,xa),e(xa,Xp),e(Nn,Zp),e(F,Qp),e(F,Zt),I(Vn,Zt,null),e(Zt,Yp),e(Zt,La),e(La,ec),e(F,tc),e(F,xr),I(Sn,xr,null),v(t,cl,u),v(t,nt,u),e(nt,Qt),e(Qt,ka),I(Wn,ka,null),e(nt,oc),e(nt,wa),e(wa,nc),v(t,hl,u),v(t,B,u),I(Bn,B,null),e(B,sc),e(B,Un),e(Un,rc),e(Un,Ma),e(Ma,ac),e(Un,ic),e(B,lc),e(B,Rn),e(Rn,dc),e(Rn,Lr),e(Lr,pc),e(Rn,cc),e(B,hc),e(B,pe),I(Hn,pe,null),e(pe,mc),e(pe,Ea),e(Ea,fc),e(pe,gc),e(pe,za),e(za,kr),e(kr,uc),e(kr,ja),e(ja,_c),e(pe,vc),e(pe,Fa),e(Fa,bc),e(B,Pc),e(B,Yt),I(Kn,Yt,null),e(Yt,$c),e(Yt,qa),e(qa,Ic),v(t,ml,u),v(t,st,u),e(st,eo),e(eo,Da),I(Gn,Da,null),e(st,Tc),e(st,Oa),e(Oa,yc),v(t,fl,u),v(t,U,u),I(Jn,U,null),e(U,Cc),e(U,Aa),e(Aa,xc),e(U,Lc),e(U,Xn),e(Xn,kc),e(Xn,wr),e(wr,wc),e(Xn,Mc),e(U,Ec),e(U,to),I(Zn,to,null),e(to,zc),e(to,Qn),e(Qn,jc),e(Qn,Na),e(Na,Fc),e(Qn,qc),e(U,Dc),e(U,oo),I(Yn,oo,null),e(oo,Oc),e(oo,rt),e(rt,Ac),e(rt,Va),e(Va,Nc),e(rt,Vc),e(rt,Sa),e(Sa,Sc),e(rt,Wc),v(t,gl,u),v(t,at,u),e(at,no),e(no,Wa),I(es,Wa,null),e(at,Bc),e(at,Ba),e(Ba,Uc),v(t,ul,u),v(t,R,u),I(ts,R,null),e(R,Rc),e(R,Ua),e(Ua,Hc),e(R,Kc),e(R,G),e(G,Mr),e(Mr,Gc),e(G,Jc),e(G,Er),e(Er,Xc),e(G,Zc),e(G,zr),e(zr,Qc),e(G,Yc),e(G,Ra),e(Ra,eh),e(G,th),e(G,jr),e(jr,oh),e(G,nh),e(R,sh),e(R,so),I(os,so,null),e(so,rh),e(so,ns),e(ns,ah),e(ns,Fr),e(Fr,ih),e(ns,lh),e(R,dh),e(R,ro),I(ss,ro,null),e(ro,ph),e(ro,rs),e(rs,ch),e(rs,qr),e(qr,hh),e(rs,mh),v(t,_l,u),v(t,it,u),e(it,ao),e(ao,Ha),I(as,Ha,null),e(it,fh),e(it,Ka),e(Ka,gh),v(t,vl,u),v(t,H,u),I(is,H,null),e(H,uh),e(H,ls),e(ls,_h),e(ls,ds),e(ds,vh),e(ls,bh),e(H,Ph),e(H,ce),I(ps,ce,null),e(ce,$h),e(ce,lt),e(lt,Ih),e(lt,Dr),e(Dr,Th),e(lt,yh),e(lt,Ga),e(Ga,Ch),e(lt,xh),e(ce,Lh),I(io,ce,null),e(ce,kh),I(lo,ce,null),e(H,wh),e(H,he),I(cs,he,null),e(he,Mh),e(he,dt),e(dt,Eh),e(dt,Or),e(Or,zh),e(dt,jh),e(dt,Ja),e(Ja,Fh),e(dt,qh),e(he,Dh),I(po,he,null),e(he,Oh),I(co,he,null),e(H,Ah),e(H,me),I(hs,me,null),e(me,Nh),e(me,pt),e(pt,Vh),e(pt,Ar),e(Ar,Sh),e(pt,Wh),e(pt,Xa),e(Xa,Bh),e(pt,Uh),e(me,Rh),I(ho,me,null),e(me,Hh),I(mo,me,null),v(t,bl,u),v(t,ct,u),e(ct,fo),e(fo,Za),I(ms,Za,null),e(ct,Kh),e(ct,Qa),e(Qa,Gh),v(t,Pl,u),v(t,ht,u),I(fs,ht,null),e(ht,Jh),e(ht,fe),I(gs,fe,null),e(fe,Xh),e(fe,mt),e(mt,Zh),e(mt,Nr),e(Nr,Qh),e(mt,Yh),e(mt,Ya),e(Ya,em),e(mt,tm),e(fe,om),I(go,fe,null),e(fe,nm),I(uo,fe,null),v(t,$l,u),v(t,ft,u),e(ft,_o),e(_o,ei),I(us,ei,null),e(ft,sm),e(ft,ti),e(ti,rm),v(t,Il,u),v(t,gt,u),I(_s,gt,null),e(gt,am),e(gt,ge),I(vs,ge,null),e(ge,im),e(ge,ut),e(ut,lm),e(ut,Vr),e(Vr,dm),e(ut,pm),e(ut,oi),e(oi,cm),e(ut,hm),e(ge,mm),I(vo,ge,null),e(ge,fm),I(bo,ge,null),v(t,Tl,u),v(t,_t,u),e(_t,Po),e(Po,ni),I(bs,ni,null),e(_t,gm),e(_t,si),e(si,um),v(t,yl,u),v(t,q,u),I(Ps,q,null),e(q,_m),e(q,$s),e($s,vm),e($s,Sr),e(Sr,bm),e($s,Pm),e(q,$m),e(q,Is),e(Is,Im),e(Is,Ts),e(Ts,Tm),e(Is,ym),e(q,Cm),I($o,q,null),e(q,xm),e(q,ue),I(ys,ue,null),e(ue,Lm),e(ue,vt),e(vt,km),e(vt,Wr),e(Wr,wm),e(vt,Mm),e(vt,ri),e(ri,Em),e(vt,zm),e(ue,jm),I(Io,ue,null),e(ue,Fm),I(To,ue,null),e(q,qm),e(q,_e),I(Cs,_e,null),e(_e,Dm),e(_e,bt),e(bt,Om),e(bt,Br),e(Br,Am),e(bt,Nm),e(bt,ai),e(ai,Vm),e(bt,Sm),e(_e,Wm),I(yo,_e,null),e(_e,Bm),I(Co,_e,null),e(q,Um),e(q,ve),I(xs,ve,null),e(ve,Rm),e(ve,Pt),e(Pt,Hm),e(Pt,Ur),e(Ur,Km),e(Pt,Gm),e(Pt,ii),e(ii,Jm),e(Pt,Xm),e(ve,Zm),I(xo,ve,null),e(ve,Qm),I(Lo,ve,null),v(t,Cl,u),v(t,$t,u),e($t,ko),e(ko,li),I(Ls,li,null),e($t,Ym),e($t,di),e(di,ef),v(t,xl,u),v(t,It,u),I(ks,It,null),e(It,tf),e(It,be),I(ws,be,null),e(be,of),e(be,Tt),e(Tt,nf),e(Tt,Rr),e(Rr,sf),e(Tt,rf),e(Tt,pi),e(pi,af),e(Tt,lf),e(be,df),I(wo,be,null),e(be,pf),I(Mo,be,null),v(t,Ll,u),v(t,yt,u),e(yt,Eo),e(Eo,ci),I(Ms,ci,null),e(yt,cf),e(yt,hi),e(hi,hf),v(t,kl,u),v(t,Ct,u),I(Es,Ct,null),e(Ct,mf),e(Ct,Pe),I(zs,Pe,null),e(Pe,ff),e(Pe,xt),e(xt,gf),e(xt,Hr),e(Hr,uf),e(xt,_f),e(xt,mi),e(mi,vf),e(xt,bf),e(Pe,Pf),I(zo,Pe,null),e(Pe,$f),I(jo,Pe,null),v(t,wl,u),v(t,Lt,u),e(Lt,Fo),e(Fo,fi),I(js,fi,null),e(Lt,If),e(Lt,gi),e(gi,Tf),v(t,Ml,u),v(t,E,u),I(Fs,E,null),e(E,yf),e(E,qs),e(qs,Cf),e(qs,Kr),e(Kr,xf),e(qs,Lf),e(E,kf),e(E,Ds),e(Ds,wf),e(Ds,Os),e(Os,Mf),e(Ds,Ef),e(E,zf),e(E,ui),e(ui,jf),e(E,Ff),e(E,ze),e(ze,_i),e(_i,As),e(As,qf),e(ze,Df),e(ze,vi),e(vi,Ns),e(Ns,Of),e(ze,Af),e(ze,bi),e(bi,Vs),e(Vs,Nf),e(ze,Vf),e(ze,Pi),e(Pi,Ss),e(Ss,Sf),e(E,Wf),e(E,$e),I(Ws,$e,null),e($e,Bf),e($e,kt),e(kt,Uf),e(kt,$i),e($i,Rf),e(kt,Hf),e(kt,Ii),e(Ii,Kf),e(kt,Gf),e($e,Jf),I(qo,$e,null),e($e,Xf),I(Do,$e,null),e(E,Zf),e(E,Oo),I(Bs,Oo,null),e(Oo,Qf),I(Ao,Oo,null),e(E,Yf),e(E,No),I(Us,No,null),e(No,eg),I(Vo,No,null),v(t,El,u),v(t,wt,u),e(wt,So),e(So,Ti),I(Rs,Ti,null),e(wt,tg),e(wt,yi),e(yi,og),v(t,zl,u),v(t,Mt,u),I(Hs,Mt,null),e(Mt,ng),e(Mt,Ie),I(Ks,Ie,null),e(Ie,sg),e(Ie,Et),e(Et,rg),e(Et,Ci),e(Ci,ag),e(Et,ig),e(Et,xi),e(xi,lg),e(Et,dg),e(Ie,pg),I(Wo,Ie,null),e(Ie,cg),I(Bo,Ie,null),v(t,jl,u),v(t,zt,u),e(zt,Uo),e(Uo,Li),I(Gs,Li,null),e(zt,hg),e(zt,ki),e(ki,mg),v(t,Fl,u),v(t,jt,u),I(Js,jt,null),e(jt,fg),e(jt,Te),I(Xs,Te,null),e(Te,gg),e(Te,Ft),e(Ft,ug),e(Ft,wi),e(wi,_g),e(Ft,vg),e(Ft,Mi),e(Mi,bg),e(Ft,Pg),e(Te,$g),I(Ro,Te,null),e(Te,Ig),I(Ho,Te,null),ql=!0},p(t,[u]){const Zs={};u&2&&(Zs.$$scope={dirty:u,ctx:t}),Ht.$set(Zs);const Ei={};u&2&&(Ei.$$scope={dirty:u,ctx:t}),Gt.$set(Ei);const zi={};u&2&&(zi.$$scope={dirty:u,ctx:t}),io.$set(zi);const ji={};u&2&&(ji.$$scope={dirty:u,ctx:t}),lo.$set(ji);const Qs={};u&2&&(Qs.$$scope={dirty:u,ctx:t}),po.$set(Qs);const Fi={};u&2&&(Fi.$$scope={dirty:u,ctx:t}),co.$set(Fi);const qi={};u&2&&(qi.$$scope={dirty:u,ctx:t}),ho.$set(qi);const Di={};u&2&&(Di.$$scope={dirty:u,ctx:t}),mo.$set(Di);const Ys={};u&2&&(Ys.$$scope={dirty:u,ctx:t}),go.$set(Ys);const Oi={};u&2&&(Oi.$$scope={dirty:u,ctx:t}),uo.$set(Oi);const Ai={};u&2&&(Ai.$$scope={dirty:u,ctx:t}),vo.$set(Ai);const Ni={};u&2&&(Ni.$$scope={dirty:u,ctx:t}),bo.$set(Ni);const Vi={};u&2&&(Vi.$$scope={dirty:u,ctx:t}),$o.$set(Vi);const er={};u&2&&(er.$$scope={dirty:u,ctx:t}),Io.$set(er);const Si={};u&2&&(Si.$$scope={dirty:u,ctx:t}),To.$set(Si);const Wi={};u&2&&(Wi.$$scope={dirty:u,ctx:t}),yo.$set(Wi);const Bi={};u&2&&(Bi.$$scope={dirty:u,ctx:t}),Co.$set(Bi);const Ui={};u&2&&(Ui.$$scope={dirty:u,ctx:t}),xo.$set(Ui);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:t}),Lo.$set(tr);const Ri={};u&2&&(Ri.$$scope={dirty:u,ctx:t}),wo.$set(Ri);const N={};u&2&&(N.$$scope={dirty:u,ctx:t}),Mo.$set(N);const Hi={};u&2&&(Hi.$$scope={dirty:u,ctx:t}),zo.$set(Hi);const Ki={};u&2&&(Ki.$$scope={dirty:u,ctx:t}),jo.$set(Ki);const Gi={};u&2&&(Gi.$$scope={dirty:u,ctx:t}),qo.$set(Gi);const Ji={};u&2&&(Ji.$$scope={dirty:u,ctx:t}),Do.$set(Ji);const Xi={};u&2&&(Xi.$$scope={dirty:u,ctx:t}),Ao.$set(Xi);const Zi={};u&2&&(Zi.$$scope={dirty:u,ctx:t}),Vo.$set(Zi);const qt={};u&2&&(qt.$$scope={dirty:u,ctx:t}),Wo.$set(qt);const Qi={};u&2&&(Qi.$$scope={dirty:u,ctx:t}),Bo.$set(Qi);const Yi={};u&2&&(Yi.$$scope={dirty:u,ctx:t}),Ro.$set(Yi);const or={};u&2&&(or.$$scope={dirty:u,ctx:t}),Ho.$set(or)},i(t){ql||(T(n.$$.fragment,t),T(Ce.$$.fragment,t),T(Me.$$.fragment,t),T($n.$$.fragment,t),T(yn.$$.fragment,t),T(Cn.$$.fragment,t),T(xn.$$.fragment,t),T(kn.$$.fragment,t),T(wn.$$.fragment,t),T(Ht.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(Gt.$$.fragment,t),T(Fn.$$.fragment,t),T(qn.$$.fragment,t),T(On.$$.fragment,t),T(An.$$.fragment,t),T(Vn.$$.fragment,t),T(Sn.$$.fragment,t),T(Wn.$$.fragment,t),T(Bn.$$.fragment,t),T(Hn.$$.fragment,t),T(Kn.$$.fragment,t),T(Gn.$$.fragment,t),T(Jn.$$.fragment,t),T(Zn.$$.fragment,t),T(Yn.$$.fragment,t),T(es.$$.fragment,t),T(ts.$$.fragment,t),T(os.$$.fragment,t),T(ss.$$.fragment,t),T(as.$$.fragment,t),T(is.$$.fragment,t),T(ps.$$.fragment,t),T(io.$$.fragment,t),T(lo.$$.fragment,t),T(cs.$$.fragment,t),T(po.$$.fragment,t),T(co.$$.fragment,t),T(hs.$$.fragment,t),T(ho.$$.fragment,t),T(mo.$$.fragment,t),T(ms.$$.fragment,t),T(fs.$$.fragment,t),T(gs.$$.fragment,t),T(go.$$.fragment,t),T(uo.$$.fragment,t),T(us.$$.fragment,t),T(_s.$$.fragment,t),T(vs.$$.fragment,t),T(vo.$$.fragment,t),T(bo.$$.fragment,t),T(bs.$$.fragment,t),T(Ps.$$.fragment,t),T($o.$$.fragment,t),T(ys.$$.fragment,t),T(Io.$$.fragment,t),T(To.$$.fragment,t),T(Cs.$$.fragment,t),T(yo.$$.fragment,t),T(Co.$$.fragment,t),T(xs.$$.fragment,t),T(xo.$$.fragment,t),T(Lo.$$.fragment,t),T(Ls.$$.fragment,t),T(ks.$$.fragment,t),T(ws.$$.fragment,t),T(wo.$$.fragment,t),T(Mo.$$.fragment,t),T(Ms.$$.fragment,t),T(Es.$$.fragment,t),T(zs.$$.fragment,t),T(zo.$$.fragment,t),T(jo.$$.fragment,t),T(js.$$.fragment,t),T(Fs.$$.fragment,t),T(Ws.$$.fragment,t),T(qo.$$.fragment,t),T(Do.$$.fragment,t),T(Bs.$$.fragment,t),T(Ao.$$.fragment,t),T(Us.$$.fragment,t),T(Vo.$$.fragment,t),T(Rs.$$.fragment,t),T(Hs.$$.fragment,t),T(Ks.$$.fragment,t),T(Wo.$$.fragment,t),T(Bo.$$.fragment,t),T(Gs.$$.fragment,t),T(Js.$$.fragment,t),T(Xs.$$.fragment,t),T(Ro.$$.fragment,t),T(Ho.$$.fragment,t),ql=!0)},o(t){y(n.$$.fragment,t),y(Ce.$$.fragment,t),y(Me.$$.fragment,t),y($n.$$.fragment,t),y(yn.$$.fragment,t),y(Cn.$$.fragment,t),y(xn.$$.fragment,t),y(kn.$$.fragment,t),y(wn.$$.fragment,t),y(Ht.$$.fragment,t),y(En.$$.fragment,t),y(zn.$$.fragment,t),y(Gt.$$.fragment,t),y(Fn.$$.fragment,t),y(qn.$$.fragment,t),y(On.$$.fragment,t),y(An.$$.fragment,t),y(Vn.$$.fragment,t),y(Sn.$$.fragment,t),y(Wn.$$.fragment,t),y(Bn.$$.fragment,t),y(Hn.$$.fragment,t),y(Kn.$$.fragment,t),y(Gn.$$.fragment,t),y(Jn.$$.fragment,t),y(Zn.$$.fragment,t),y(Yn.$$.fragment,t),y(es.$$.fragment,t),y(ts.$$.fragment,t),y(os.$$.fragment,t),y(ss.$$.fragment,t),y(as.$$.fragment,t),y(is.$$.fragment,t),y(ps.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(cs.$$.fragment,t),y(po.$$.fragment,t),y(co.$$.fragment,t),y(hs.$$.fragment,t),y(ho.$$.fragment,t),y(mo.$$.fragment,t),y(ms.$$.fragment,t),y(fs.$$.fragment,t),y(gs.$$.fragment,t),y(go.$$.fragment,t),y(uo.$$.fragment,t),y(us.$$.fragment,t),y(_s.$$.fragment,t),y(vs.$$.fragment,t),y(vo.$$.fragment,t),y(bo.$$.fragment,t),y(bs.$$.fragment,t),y(Ps.$$.fragment,t),y($o.$$.fragment,t),y(ys.$$.fragment,t),y(Io.$$.fragment,t),y(To.$$.fragment,t),y(Cs.$$.fragment,t),y(yo.$$.fragment,t),y(Co.$$.fragment,t),y(xs.$$.fragment,t),y(xo.$$.fragment,t),y(Lo.$$.fragment,t),y(Ls.$$.fragment,t),y(ks.$$.fragment,t),y(ws.$$.fragment,t),y(wo.$$.fragment,t),y(Mo.$$.fragment,t),y(Ms.$$.fragment,t),y(Es.$$.fragment,t),y(zs.$$.fragment,t),y(zo.$$.fragment,t),y(jo.$$.fragment,t),y(js.$$.fragment,t),y(Fs.$$.fragment,t),y(Ws.$$.fragment,t),y(qo.$$.fragment,t),y(Do.$$.fragment,t),y(Bs.$$.fragment,t),y(Ao.$$.fragment,t),y(Us.$$.fragment,t),y(Vo.$$.fragment,t),y(Rs.$$.fragment,t),y(Hs.$$.fragment,t),y(Ks.$$.fragment,t),y(Wo.$$.fragment,t),y(Bo.$$.fragment,t),y(Gs.$$.fragment,t),y(Js.$$.fragment,t),y(Xs.$$.fragment,t),y(Ro.$$.fragment,t),y(Ho.$$.fragment,t),ql=!1},d(t){o(d),t&&o(b),t&&o(g),C(n),t&&o(Re),t&&o(z),C(Ce),t&&o(Dt),t&&o(Q),t&&o(Y),t&&o(qe),t&&o(At),t&&o(De),t&&o(Nt),t&&o(O),C(Me),t&&o(Vt),t&&o(ee),t&&o(Oe),t&&o(ae),t&&o(Pn),t&&o(M),t&&o(tl),C($n,t),t&&o(ol),t&&o(Ve),t&&o(nl),t&&o(Ge),C(yn),t&&o(sl),t&&o(te),C(Cn),C(xn),t&&o(rl),t&&o(Xe),C(kn),t&&o(al),t&&o(oe),C(wn),C(Ht),t&&o(il),t&&o(Ye),C(En),t&&o(ll),t&&o(ne),C(zn),C(Gt),t&&o(dl),t&&o(ot),C(Fn),t&&o(pl),t&&o(F),C(qn),C(On),C(An),C(Vn),C(Sn),t&&o(cl),t&&o(nt),C(Wn),t&&o(hl),t&&o(B),C(Bn),C(Hn),C(Kn),t&&o(ml),t&&o(st),C(Gn),t&&o(fl),t&&o(U),C(Jn),C(Zn),C(Yn),t&&o(gl),t&&o(at),C(es),t&&o(ul),t&&o(R),C(ts),C(os),C(ss),t&&o(_l),t&&o(it),C(as),t&&o(vl),t&&o(H),C(is),C(ps),C(io),C(lo),C(cs),C(po),C(co),C(hs),C(ho),C(mo),t&&o(bl),t&&o(ct),C(ms),t&&o(Pl),t&&o(ht),C(fs),C(gs),C(go),C(uo),t&&o($l),t&&o(ft),C(us),t&&o(Il),t&&o(gt),C(_s),C(vs),C(vo),C(bo),t&&o(Tl),t&&o(_t),C(bs),t&&o(yl),t&&o(q),C(Ps),C($o),C(ys),C(Io),C(To),C(Cs),C(yo),C(Co),C(xs),C(xo),C(Lo),t&&o(Cl),t&&o($t),C(Ls),t&&o(xl),t&&o(It),C(ks),C(ws),C(wo),C(Mo),t&&o(Ll),t&&o(yt),C(Ms),t&&o(kl),t&&o(Ct),C(Es),C(zs),C(zo),C(jo),t&&o(wl),t&&o(Lt),C(js),t&&o(Ml),t&&o(E),C(Fs),C(Ws),C(qo),C(Do),C(Bs),C(Ao),C(Us),C(Vo),t&&o(El),t&&o(wt),C(Rs),t&&o(zl),t&&o(Mt),C(Hs),C(Ks),C(Wo),C(Bo),t&&o(jl),t&&o(zt),C(Gs),t&&o(Fl),t&&o(jt),C(Js),C(Xs),C(Ro),C(Ho)}}}const Mv={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function Ev(x){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Av extends K_{constructor(d){super();G_(this,d,Ev,wv,J_,{})}}export{Av as default,Mv as metadata};
