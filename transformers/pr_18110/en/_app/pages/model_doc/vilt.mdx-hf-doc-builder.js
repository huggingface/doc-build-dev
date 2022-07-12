import{S as ql,i as Nl,s as Sl,e as s,k as m,w as x,t as a,M as Ol,c as n,d as o,m as p,a as r,x as w,h as i,b as c,N as Dl,G as e,g as _,y as k,q as T,o as y,B as $,v as Wl,L as vo}from"../../chunks/vendor-hf-doc-builder.js";import{T as go}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as bo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _o}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Rl(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViLTModel, ViLTConfig

# Initializing a ViLT dandelin/vilt-b32-mlm style configuration
configuration = ViLTConfig()

# Initializing a model from the dandelin/vilt-b32-mlm style configuration
model = ViLTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViLTModel, ViLTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViLT dandelin/vilt-b32-mlm style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViLTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the dandelin/vilt-b32-mlm style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViLTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=a("Example:"),g=m(),x(h.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Example:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Bl(V){let d,b;return{c(){d=s("p"),b=a(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){d=n(g,"P",{});var h=r(d);b=i(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(g,h){_(g,d,h),e(d,b)},d(g){g&&o(d)}}}function Ql(V){let d,b,g,h,v;return{c(){d=s("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,h),e(d,v)},d(l){l&&o(d)}}}function Ul(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViltProcessor, ViltModel
from PIL import Image
import requests

# prepare image and text
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
text = "hello world"

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-mlm")
model = ViltModel.from_pretrained("dandelin/vilt-b32-mlm")

inputs = processor(image, text, return_tensors="pt")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image and text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltModel.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Hl(V){let d,b,g,h,v;return{c(){d=s("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,h),e(d,v)},d(l){l&&o(d)}}}function Kl(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViltProcessor, ViltForMaskedLM
import requests
from PIL import Image
import re
import torch

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
text = "a bunch of [MASK] laying on a [MASK]."

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-mlm")
model = ViltForMaskedLM.from_pretrained("dandelin/vilt-b32-mlm")

# prepare inputs
encoding = processor(image, text, return_tensors="pt")

# forward pass
outputs = model(**encoding)

tl = len(re.findall("\\[MASK\\]", text))
inferred_token = [text]

# gradually fill in the MASK tokens, one by one
with torch.no_grad():
    for i in range(tl):
        encoded = processor.tokenizer(inferred_token)
        input_ids = torch.tensor(encoded.input_ids)
        encoded = encoded["input_ids"][0][1:-1]
        outputs = model(input_ids=input_ids, pixel_values=encoding.pixel_values)
        mlm_logits = outputs.logits[0]  # shape (seq_len, vocab_size)
        # only take into account text features (minus CLS and SEP token)
        mlm_logits = mlm_logits[1 : input_ids.shape[1] - 1, :]
        mlm_values, mlm_ids = mlm_logits.softmax(dim=-1).max(dim=-1)
        # only take into account text
        mlm_values[torch.tensor(encoded) != 103] = 0
        select = mlm_values.argmax().item()
        encoded[select] = mlm_ids[select].item()
        inferred_token = [processor.decode(encoded)]

selected_token = ""
encoded = processor.tokenizer(inferred_token)
output = processor.decode(encoded.input_ids[0], skip_special_tokens=True)
print(output)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> re
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;a bunch of [MASK] laying on a [MASK].&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForMaskedLM.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>tl = <span class="hljs-built_in">len</span>(re.findall(<span class="hljs-string">&quot;\\[MASK\\]&quot;</span>, text))
<span class="hljs-meta">&gt;&gt;&gt; </span>inferred_token = [text]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># gradually fill in the MASK tokens, one by one</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(tl):
<span class="hljs-meta">... </span>        encoded = processor.tokenizer(inferred_token)
<span class="hljs-meta">... </span>        input_ids = torch.tensor(encoded.input_ids)
<span class="hljs-meta">... </span>        encoded = encoded[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-number">1</span>:-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        outputs = model(input_ids=input_ids, pixel_values=encoding.pixel_values)
<span class="hljs-meta">... </span>        mlm_logits = outputs.logits[<span class="hljs-number">0</span>]  <span class="hljs-comment"># shape (seq_len, vocab_size)</span>
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only take into account text features (minus CLS and SEP token)</span>
<span class="hljs-meta">... </span>        mlm_logits = mlm_logits[<span class="hljs-number">1</span> : input_ids.shape[<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, :]
<span class="hljs-meta">... </span>        mlm_values, mlm_ids = mlm_logits.softmax(dim=-<span class="hljs-number">1</span>).<span class="hljs-built_in">max</span>(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only take into account text</span>
<span class="hljs-meta">... </span>        mlm_values[torch.tensor(encoded) != <span class="hljs-number">103</span>] = <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>        select = mlm_values.argmax().item()
<span class="hljs-meta">... </span>        encoded[select] = mlm_ids[select].item()
<span class="hljs-meta">... </span>        inferred_token = [processor.decode(encoded)]

<span class="hljs-meta">&gt;&gt;&gt; </span>selected_token = <span class="hljs-string">&quot;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded = processor.tokenizer(inferred_token)
<span class="hljs-meta">&gt;&gt;&gt; </span>output = processor.decode(encoded.input_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(output)
a bunch of cats laying on a couch.`}}),{c(){d=s("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Gl(V){let d,b,g,h,v;return{c(){d=s("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,h),e(d,v)},d(l){l&&o(d)}}}function Jl(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViltProcessor, ViltForQuestionAnswering
import requests
from PIL import Image

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
text = "How many cats are there?"

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-vqa")
model = ViltForQuestionAnswering.from_pretrained("dandelin/vilt-b32-finetuned-vqa")

# prepare inputs
encoding = processor(image, text, return_tensors="pt")

# forward pass
outputs = model(**encoding)
logits = outputs.logits
idx = logits.argmax(-1).item()
print("Predicted answer:", model.config.id2label[idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;How many cats are there?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-vqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-vqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer:&quot;</span>, model.config.id2label[idx])
Predicted answer: <span class="hljs-number">2</span>`}}),{c(){d=s("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Xl(V){let d,b,g,h,v;return{c(){d=s("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,h),e(d,v)},d(l){l&&o(d)}}}function Zl(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViltProcessor, ViltForImagesAndTextClassification
import requests
from PIL import Image

image1 = Image.open(requests.get("https://lil.nlp.cornell.edu/nlvr/exs/ex0_0.jpg", stream=True).raw)
image2 = Image.open(requests.get("https://lil.nlp.cornell.edu/nlvr/exs/ex0_1.jpg", stream=True).raw)
text = "The left image contains twice the number of dogs as the right image."

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-nlvr2")
model = ViltForImagesAndTextClassification.from_pretrained("dandelin/vilt-b32-finetuned-nlvr2")

# prepare inputs
encoding = processor([image1, image2], text, return_tensors="pt")

# forward pass
outputs = model(input_ids=encoding.input_ids, pixel_values=encoding.pixel_values.unsqueeze(0))
logits = outputs.logits
idx = logits.argmax(-1).item()
print("Predicted answer:", model.config.id2label[idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForImagesAndTextClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image1 = Image.<span class="hljs-built_in">open</span>(requests.get(<span class="hljs-string">&quot;https://lil.nlp.cornell.edu/nlvr/exs/ex0_0.jpg&quot;</span>, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>image2 = Image.<span class="hljs-built_in">open</span>(requests.get(<span class="hljs-string">&quot;https://lil.nlp.cornell.edu/nlvr/exs/ex0_1.jpg&quot;</span>, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;The left image contains twice the number of dogs as the right image.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-nlvr2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForImagesAndTextClassification.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-nlvr2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor([image1, image2], text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=encoding.input_ids, pixel_values=encoding.pixel_values.unsqueeze(<span class="hljs-number">0</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer:&quot;</span>, model.config.id2label[idx])
Predicted answer: <span class="hljs-literal">True</span>`}}),{c(){d=s("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Yl(V){let d,b,g,h,v;return{c(){d=s("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,d,f),e(d,b),e(d,g),e(g,h),e(d,v)},d(l){l&&o(d)}}}function ed(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViltProcessor, ViltForImageAndTextRetrieval
import requests
from PIL import Image

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
texts = ["An image of two cats chilling on a couch", "A football player scoring a goal"]

processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-coco")
model = ViltForImageAndTextRetrieval.from_pretrained("dandelin/vilt-b32-finetuned-coco")

# forward pass
scores = dict()
for text in texts:
    # prepare inputs
    encoding = processor(image, text, return_tensors="pt")
    outputs = model(**encoding)
    scores[text] = outputs.logits[0, :].item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForImageAndTextRetrieval
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>texts = [<span class="hljs-string">&quot;An image of two cats chilling on a couch&quot;</span>, <span class="hljs-string">&quot;A football player scoring a goal&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-coco&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForImageAndTextRetrieval.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-coco&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> text <span class="hljs-keyword">in</span> texts:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">... </span>    encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">... </span>    outputs = model(**encoding)
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`}}),{c(){d=s("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function td(V){let d,b,g,h,v,l,f,F,cn,xs,J,fe,xo,Ye,mn,wo,pn,ws,ue,hn,et,fn,un,ks,Nt,gn,Ts,St,ko,_n,ys,Ot,vn,$s,C,tt,bn,ot,xn,wn,kn,W,Tn,To,yn,$n,yo,Vn,Fn,Dt,jn,En,Mn,X,Pn,$o,In,zn,Wt,An,Ln,Cn,Vo,qn,Vs,ge,xi,Fs,_e,Nn,Rt,Sn,On,js,U,Dn,st,Wn,Rn,nt,Bn,Qn,Es,Z,ve,Fo,rt,Un,jo,Hn,Ms,M,at,Kn,Y,Gn,Eo,Jn,Xn,it,Zn,Yn,er,ee,tr,Bt,or,sr,Qt,nr,rr,ar,be,Ps,te,xe,Mo,lt,ir,Po,lr,Is,P,dt,dr,Io,cr,mr,ct,pr,Ut,hr,fr,ur,H,mt,gr,zo,_r,vr,we,zs,oe,ke,Ao,pt,br,Lo,xr,As,I,ht,wr,Co,kr,Tr,E,Ht,yr,$r,Kt,Vr,Fr,Gt,jr,Er,ft,qo,Mr,Pr,Ir,No,zr,Ar,Lr,K,ut,Cr,se,qr,Te,Nr,So,Sr,Or,Dr,ye,Wr,Oo,Rr,Br,Qr,Ur,Do,Hr,Ls,ne,$e,Wo,gt,Kr,Ro,Gr,Cs,R,_t,Jr,vt,Xr,Bo,Zr,Yr,ea,q,bt,ta,re,oa,Jt,sa,na,Qo,ra,aa,ia,Ve,la,Fe,qs,ae,je,Uo,xt,da,Ho,ca,Ns,z,wt,ma,Ko,pa,ha,kt,fa,Go,ua,ga,_a,N,Tt,va,ie,ba,Xt,xa,wa,Jo,ka,Ta,ya,Ee,$a,Me,Ss,le,Pe,Xo,yt,Va,Zo,Fa,Os,A,$t,ja,Yo,Ea,Ma,Vt,Pa,es,Ia,za,Aa,S,Ft,La,de,Ca,Zt,qa,Na,ts,Sa,Oa,Da,Ie,Wa,ze,Ds,ce,Ae,os,jt,Ra,ss,Ba,Ws,B,Et,Qa,ns,Ua,Ha,O,Mt,Ka,me,Ga,Yt,Ja,Xa,rs,Za,Ya,ei,Le,ti,Ce,Rs,pe,qe,as,Pt,oi,is,si,Bs,L,It,ni,ls,ri,ai,zt,ii,ds,li,di,ci,D,At,mi,he,pi,eo,hi,fi,cs,ui,gi,_i,Ne,vi,Se,Qs;return l=new G({}),Ye=new G({}),rt=new G({}),at=new j({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the text part of the model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>.`,name:"vocab_size"},{anchor:"transformers.ViltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used when encoding
text.`,name:"type_vocab_size"},{anchor:"transformers.ViltConfig.modality_type_vocab_size",description:`<strong>modality_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the modalities passed when calling <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used after concatening the
embeddings of the text and image modalities.`,name:"modality_type_vocab_size"},{anchor:"transformers.ViltConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The maximum sequence length that this model might ever be used with.`,name:"max_position_embeddings"},{anchor:"transformers.ViltConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViltConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViltConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViltConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViltConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViltConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViltConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViltConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViltConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViltConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViltConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViltConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViltConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViltConfig.max_image_length",description:`<strong>max_image_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The maximum number of patches to take as input for the Transformer encoder. If set to a positive integer,
the encoder will sample <code>max_image_length</code> patches at maximum. If set to -1, will not be taken into
account.`,name:"max_image_length"},{anchor:"transformers.ViltConfig.num_images",description:`<strong>num_images</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of images to use for natural language visual reasoning. If set to a positive integer, will be
used by <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/configuration_vilt.py#L28"}}),be=new _o({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[Rl]},$$scope:{ctx:V}}}),lt=new G({}),dt=new j({props:{name:"class transformers.ViltFeatureExtractor",anchor:"transformers.ViltFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"size_divisor",val:" = 32"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input based on <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViltFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Resize the shorter side of the input to the given size. Should be an integer. The longer side will be
limited to under int((1333 / 800) * size) while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViltFeatureExtractor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided.`,name:"size_divisor"},{anchor:"transformers.ViltFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViltFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViltFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViltFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/feature_extraction_vilt.py#L40"}}),mt=new j({props:{name:"__call__",anchor:"transformers.ViltFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"pad_and_return_pixel_mask",val:": typing.Optional[bool] = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViltFeatureExtractor.__call__.pad_and_return_pixel_mask",description:`<strong>pad_and_return_pixel_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to pad images up to the largest image in a batch and create a pixel mask.</p>
<p>If left to the default, will return a pixel mask that is:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>`,name:"pad_and_return_pixel_mask"},{anchor:"transformers.ViltFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_18110/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/feature_extraction_vilt.py#L181",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18110/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>pixel_mask</strong> \u2014 Pixel mask to be fed to a model (when <code>return_pixel_mask=True</code> or if <em>\u201Cpixel_mask\u201D</em> is
in <code>self.model_input_names</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18110/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),we=new go({props:{warning:!0,$$slots:{default:[Bl]},$$scope:{ctx:V}}}),pt=new G({}),ht=new j({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>ViltFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/processing_vilt.py#L26"}}),ut=new j({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/processing_vilt.py#L46"}}),gt=new G({}),_t=new j({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18110/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L727"}}),bt=new j({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"image_token_type_idx",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltModel.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18110/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L755",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new go({props:{$$slots:{default:[Ql]},$$scope:{ctx:V}}}),Fe=new _o({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[Ul]},$$scope:{ctx:V}}}),xt=new G({}),wt=new j({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18110/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L892"}}),Tt=new j({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForMaskedLM.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18110/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForMaskedLM.forward.labels",description:`<strong>labels</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <em>[-100, 0, &#x2026;,
config.vocab_size]</em> (see <em>input_ids</em> docstring) Tokens with indices set to <em>-100</em> are ignored (masked), the
loss is only computed for the tokens with labels in <em>[0, &#x2026;, config.vocab_size]</em>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L908",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new go({props:{$$slots:{default:[Hl]},$$scope:{ctx:V}}}),Me=new _o({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[Kl]},$$scope:{ctx:V}}}),yt=new G({}),$t=new j({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18110/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L1064"}}),Ft=new j({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForQuestionAnswering.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18110/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the visual question answering loss. This tensor must be either a one-hot encoding of
all answers that are applicable for a given example in the batch, or a soft encoding indicating which
answers are applicable, where 1.0 is the highest score.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L1082",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new go({props:{$$slots:{default:[Gl]},$$scope:{ctx:V}}}),ze=new _o({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[Jl]},$$scope:{ctx:V}}}),jt=new G({}),Et=new j({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_images, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_images, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImagesAndTextClassification.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImagesAndTextClassification.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18110/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L1274"}}),Mt=new j({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18110/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Binary classification labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L1293",returnDescription:`
<p>A <code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>List[tuple(torch.FloatTensor)]</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 List of tuples of <code>torch.FloatTensor</code> (one for each image-text pair, each tuple containing the output of
the embeddings + one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.
Hidden-states of the model at the output of each layer plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>List[tuple(torch.FloatTensor)]</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 List of tuples of <code>torch.FloatTensor</code> (one for each image-text pair, each tuple containing the attention
weights of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the
attention softmax, used to compute the weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new go({props:{$$slots:{default:[Xl]},$$scope:{ctx:V}}}),Ce=new _o({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[Zl]},$$scope:{ctx:V}}}),Pt=new G({}),It=new j({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18110/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L1175"}}),At=new j({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18110/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels are currently not supported.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18110/src/transformers/models/vilt/modeling_vilt.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_18110/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new go({props:{$$slots:{default:[Yl]},$$scope:{ctx:V}}}),Se=new _o({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[ed]},$$scope:{ctx:V}}}),{c(){d=s("meta"),b=m(),g=s("h1"),h=s("a"),v=s("span"),x(l.$$.fragment),f=m(),F=s("span"),cn=a("ViLT"),xs=m(),J=s("h2"),fe=s("a"),xo=s("span"),x(Ye.$$.fragment),mn=m(),wo=s("span"),pn=a("Overview"),ws=m(),ue=s("p"),hn=a("The ViLT model was proposed in "),et=s("a"),fn=a("ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),un=a(`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),ks=m(),Nt=s("p"),gn=a("The abstract from the paper is the following:"),Ts=m(),St=s("p"),ko=s("em"),_n=a(`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),ys=m(),Ot=s("p"),vn=a("Tips:"),$s=m(),C=s("ul"),tt=s("li"),bn=a("The quickest way to get started with ViLT is by checking the "),ot=s("a"),xn=a("example notebooks"),wn=a(`
(which showcase both inference and fine-tuning on custom data).`),kn=m(),W=s("li"),Tn=a("ViLT is a model that takes both "),To=s("code"),yn=a("pixel_values"),$n=a(" and "),yo=s("code"),Vn=a("input_ids"),Fn=a(" as input. One can use "),Dt=s("a"),jn=a("ViltProcessor"),En=a(` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),Mn=m(),X=s("li"),Pn=a(`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),$o=s("code"),In=a("pixel_mask"),zn=a(` that indicates
which pixel values are real and which are padding. `),Wt=s("a"),An=a("ViltProcessor"),Ln=a(" automatically creates this for you."),Cn=m(),Vo=s("li"),qn=a(`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Vs=m(),ge=s("img"),Fs=m(),_e=s("small"),Nn=a("ViLT architecture. Taken from the "),Rt=s("a"),Sn=a("original paper"),On=a("."),js=m(),U=s("p"),Dn=a("This model was contributed by "),st=s("a"),Wn=a("nielsr"),Rn=a(". The original code can be found "),nt=s("a"),Bn=a("here"),Qn=a("."),Es=m(),Z=s("h2"),ve=s("a"),Fo=s("span"),x(rt.$$.fragment),Un=m(),jo=s("span"),Hn=a("ViltConfig"),Ms=m(),M=s("div"),x(at.$$.fragment),Kn=m(),Y=s("p"),Gn=a("This is the configuration class to store the configuration of a "),Eo=s("code"),Jn=a("ViLTModel"),Xn=a(`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),it=s("a"),Zn=a("dandelin/vilt-b32-mlm"),Yn=a(" architecture."),er=m(),ee=s("p"),tr=a("Configuration objects inherit from "),Bt=s("a"),or=a("PretrainedConfig"),sr=a(` and can be used to control the model outputs. Read the
documentation from `),Qt=s("a"),nr=a("PretrainedConfig"),rr=a(" for more information."),ar=m(),x(be.$$.fragment),Ps=m(),te=s("h2"),xe=s("a"),Mo=s("span"),x(lt.$$.fragment),ir=m(),Po=s("span"),lr=a("ViltFeatureExtractor"),Is=m(),P=s("div"),x(dt.$$.fragment),dr=m(),Io=s("p"),cr=a("Constructs a ViLT feature extractor."),mr=m(),ct=s("p"),pr=a("This feature extractor inherits from "),Ut=s("a"),hr=a("FeatureExtractionMixin"),fr=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ur=m(),H=s("div"),x(mt.$$.fragment),gr=m(),zo=s("p"),_r=a("Main method to prepare for the model one or several image(s)."),vr=m(),x(we.$$.fragment),zs=m(),oe=s("h2"),ke=s("a"),Ao=s("span"),x(pt.$$.fragment),br=m(),Lo=s("span"),xr=a("ViltProcessor"),As=m(),I=s("div"),x(ht.$$.fragment),wr=m(),Co=s("p"),kr=a("Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Tr=m(),E=s("p"),Ht=s("a"),yr=a("ViltProcessor"),$r=a(" offers all the functionalities of "),Kt=s("a"),Vr=a("ViltFeatureExtractor"),Fr=a(" and "),Gt=s("a"),jr=a("BertTokenizerFast"),Er=a(`. See the
docstring of `),ft=s("a"),qo=s("strong"),Mr=a("call"),Pr=a("()"),Ir=a(" and "),No=s("code"),zr=a("decode()"),Ar=a(" for more information."),Lr=m(),K=s("div"),x(ut.$$.fragment),Cr=m(),se=s("p"),qr=a("This method uses "),Te=s("a"),Nr=a("ViltFeatureExtractor."),So=s("strong"),Sr=a("call"),Or=a("()"),Dr=a(` method to prepare image(s) for the model, and
`),ye=s("a"),Wr=a("BertTokenizerFast."),Oo=s("strong"),Rr=a("call"),Br=a("()"),Qr=a(" to prepare text for the model."),Ur=m(),Do=s("p"),Hr=a("Please refer to the docstring of the above two methods for more information."),Ls=m(),ne=s("h2"),$e=s("a"),Wo=s("span"),x(gt.$$.fragment),Kr=m(),Ro=s("span"),Gr=a("ViltModel"),Cs=m(),R=s("div"),x(_t.$$.fragment),Jr=m(),vt=s("p"),Xr=a(`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Bo=s("code"),Zr=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Yr=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ea=m(),q=s("div"),x(bt.$$.fragment),ta=m(),re=s("p"),oa=a("The "),Jt=s("a"),sa=a("ViltModel"),na=a(" forward method, overrides the "),Qo=s("code"),ra=a("__call__"),aa=a(" special method."),ia=m(),x(Ve.$$.fragment),la=m(),x(Fe.$$.fragment),qs=m(),ae=s("h2"),je=s("a"),Uo=s("span"),x(xt.$$.fragment),da=m(),Ho=s("span"),ca=a("ViltForMaskedLM"),Ns=m(),z=s("div"),x(wt.$$.fragment),ma=m(),Ko=s("p"),pa=a("ViLT Model with a language modeling head on top as done during pretraining."),ha=m(),kt=s("p"),fa=a("This model is a PyTorch "),Go=s("code"),ua=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ga=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_a=m(),N=s("div"),x(Tt.$$.fragment),va=m(),ie=s("p"),ba=a("The "),Xt=s("a"),xa=a("ViltForMaskedLM"),wa=a(" forward method, overrides the "),Jo=s("code"),ka=a("__call__"),Ta=a(" special method."),ya=m(),x(Ee.$$.fragment),$a=m(),x(Me.$$.fragment),Ss=m(),le=s("h2"),Pe=s("a"),Xo=s("span"),x(yt.$$.fragment),Va=m(),Zo=s("span"),Fa=a("ViltForQuestionAnswering"),Os=m(),A=s("div"),x($t.$$.fragment),ja=m(),Yo=s("p"),Ea=a(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),Ma=m(),Vt=s("p"),Pa=a("This model is a PyTorch "),es=s("code"),Ia=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),za=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Aa=m(),S=s("div"),x(Ft.$$.fragment),La=m(),de=s("p"),Ca=a("The "),Zt=s("a"),qa=a("ViltForQuestionAnswering"),Na=a(" forward method, overrides the "),ts=s("code"),Sa=a("__call__"),Oa=a(" special method."),Da=m(),x(Ie.$$.fragment),Wa=m(),x(ze.$$.fragment),Ds=m(),ce=s("h2"),Ae=s("a"),os=s("span"),x(jt.$$.fragment),Ra=m(),ss=s("span"),Ba=a("ViltForImagesAndTextClassification"),Ws=m(),B=s("div"),x(Et.$$.fragment),Qa=m(),ns=s("p"),Ua=a("Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),Ha=m(),O=s("div"),x(Mt.$$.fragment),Ka=m(),me=s("p"),Ga=a("The "),Yt=s("a"),Ja=a("ViltForImagesAndTextClassification"),Xa=a(" forward method, overrides the "),rs=s("code"),Za=a("__call__"),Ya=a(" special method."),ei=m(),x(Le.$$.fragment),ti=m(),x(Ce.$$.fragment),Rs=m(),pe=s("h2"),qe=s("a"),as=s("span"),x(Pt.$$.fragment),oi=m(),is=s("span"),si=a("ViltForImageAndTextRetrieval"),Bs=m(),L=s("div"),x(It.$$.fragment),ni=m(),ls=s("p"),ri=a(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),ai=m(),zt=s("p"),ii=a("This model is a PyTorch "),ds=s("code"),li=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),di=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ci=m(),D=s("div"),x(At.$$.fragment),mi=m(),he=s("p"),pi=a("The "),eo=s("a"),hi=a("ViltForImageAndTextRetrieval"),fi=a(" forward method, overrides the "),cs=s("code"),ui=a("__call__"),gi=a(" special method."),_i=m(),x(Ne.$$.fragment),vi=m(),x(Se.$$.fragment),this.h()},l(t){const u=Ol('[data-svelte="svelte-1phssyn"]',document.head);d=n(u,"META",{name:!0,content:!0}),u.forEach(o),b=p(t),g=n(t,"H1",{class:!0});var Lt=r(g);h=n(Lt,"A",{id:!0,class:!0,href:!0});var ms=r(h);v=n(ms,"SPAN",{});var ps=r(v);w(l.$$.fragment,ps),ps.forEach(o),ms.forEach(o),f=p(Lt),F=n(Lt,"SPAN",{});var hs=r(F);cn=i(hs,"ViLT"),hs.forEach(o),Lt.forEach(o),xs=p(t),J=n(t,"H2",{class:!0});var Ct=r(J);fe=n(Ct,"A",{id:!0,class:!0,href:!0});var fs=r(fe);xo=n(fs,"SPAN",{});var us=r(xo);w(Ye.$$.fragment,us),us.forEach(o),fs.forEach(o),mn=p(Ct),wo=n(Ct,"SPAN",{});var gs=r(wo);pn=i(gs,"Overview"),gs.forEach(o),Ct.forEach(o),ws=p(t),ue=n(t,"P",{});var qt=r(ue);hn=i(qt,"The ViLT model was proposed in "),et=n(qt,"A",{href:!0,rel:!0});var _s=r(et);fn=i(_s,"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),_s.forEach(o),un=i(qt,`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),qt.forEach(o),ks=p(t),Nt=n(t,"P",{});var vs=r(Nt);gn=i(vs,"The abstract from the paper is the following:"),vs.forEach(o),Ts=p(t),St=n(t,"P",{});var bs=r(St);ko=n(bs,"EM",{});var wi=r(ko);_n=i(wi,`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),wi.forEach(o),bs.forEach(o),ys=p(t),Ot=n(t,"P",{});var ki=r(Ot);vn=i(ki,"Tips:"),ki.forEach(o),$s=p(t),C=n(t,"UL",{});var Oe=r(C);tt=n(Oe,"LI",{});var Us=r(tt);bn=i(Us,"The quickest way to get started with ViLT is by checking the "),ot=n(Us,"A",{href:!0,rel:!0});var Ti=r(ot);xn=i(Ti,"example notebooks"),Ti.forEach(o),wn=i(Us,`
(which showcase both inference and fine-tuning on custom data).`),Us.forEach(o),kn=p(Oe),W=n(Oe,"LI",{});var De=r(W);Tn=i(De,"ViLT is a model that takes both "),To=n(De,"CODE",{});var yi=r(To);yn=i(yi,"pixel_values"),yi.forEach(o),$n=i(De," and "),yo=n(De,"CODE",{});var $i=r(yo);Vn=i($i,"input_ids"),$i.forEach(o),Fn=i(De," as input. One can use "),Dt=n(De,"A",{href:!0});var Vi=r(Dt);jn=i(Vi,"ViltProcessor"),Vi.forEach(o),En=i(De,` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),De.forEach(o),Mn=p(Oe),X=n(Oe,"LI",{});var to=r(X);Pn=i(to,`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),$o=n(to,"CODE",{});var Fi=r($o);In=i(Fi,"pixel_mask"),Fi.forEach(o),zn=i(to,` that indicates
which pixel values are real and which are padding. `),Wt=n(to,"A",{href:!0});var ji=r(Wt);An=i(ji,"ViltProcessor"),ji.forEach(o),Ln=i(to," automatically creates this for you."),to.forEach(o),Cn=p(Oe),Vo=n(Oe,"LI",{});var Ei=r(Vo);qn=i(Ei,`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Ei.forEach(o),Oe.forEach(o),Vs=p(t),ge=n(t,"IMG",{src:!0,alt:!0,width:!0}),Fs=p(t),_e=n(t,"SMALL",{});var Hs=r(_e);Nn=i(Hs,"ViLT architecture. Taken from the "),Rt=n(Hs,"A",{href:!0});var Mi=r(Rt);Sn=i(Mi,"original paper"),Mi.forEach(o),On=i(Hs,"."),Hs.forEach(o),js=p(t),U=n(t,"P",{});var oo=r(U);Dn=i(oo,"This model was contributed by "),st=n(oo,"A",{href:!0,rel:!0});var Pi=r(st);Wn=i(Pi,"nielsr"),Pi.forEach(o),Rn=i(oo,". The original code can be found "),nt=n(oo,"A",{href:!0,rel:!0});var Ii=r(nt);Bn=i(Ii,"here"),Ii.forEach(o),Qn=i(oo,"."),oo.forEach(o),Es=p(t),Z=n(t,"H2",{class:!0});var Ks=r(Z);ve=n(Ks,"A",{id:!0,class:!0,href:!0});var zi=r(ve);Fo=n(zi,"SPAN",{});var Ai=r(Fo);w(rt.$$.fragment,Ai),Ai.forEach(o),zi.forEach(o),Un=p(Ks),jo=n(Ks,"SPAN",{});var Li=r(jo);Hn=i(Li,"ViltConfig"),Li.forEach(o),Ks.forEach(o),Ms=p(t),M=n(t,"DIV",{class:!0});var We=r(M);w(at.$$.fragment,We),Kn=p(We),Y=n(We,"P",{});var so=r(Y);Gn=i(so,"This is the configuration class to store the configuration of a "),Eo=n(so,"CODE",{});var Ci=r(Eo);Jn=i(Ci,"ViLTModel"),Ci.forEach(o),Xn=i(so,`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),it=n(so,"A",{href:!0,rel:!0});var qi=r(it);Zn=i(qi,"dandelin/vilt-b32-mlm"),qi.forEach(o),Yn=i(so," architecture."),so.forEach(o),er=p(We),ee=n(We,"P",{});var no=r(ee);tr=i(no,"Configuration objects inherit from "),Bt=n(no,"A",{href:!0});var Ni=r(Bt);or=i(Ni,"PretrainedConfig"),Ni.forEach(o),sr=i(no,` and can be used to control the model outputs. Read the
documentation from `),Qt=n(no,"A",{href:!0});var Si=r(Qt);nr=i(Si,"PretrainedConfig"),Si.forEach(o),rr=i(no," for more information."),no.forEach(o),ar=p(We),w(be.$$.fragment,We),We.forEach(o),Ps=p(t),te=n(t,"H2",{class:!0});var Gs=r(te);xe=n(Gs,"A",{id:!0,class:!0,href:!0});var Oi=r(xe);Mo=n(Oi,"SPAN",{});var Di=r(Mo);w(lt.$$.fragment,Di),Di.forEach(o),Oi.forEach(o),ir=p(Gs),Po=n(Gs,"SPAN",{});var Wi=r(Po);lr=i(Wi,"ViltFeatureExtractor"),Wi.forEach(o),Gs.forEach(o),Is=p(t),P=n(t,"DIV",{class:!0});var Re=r(P);w(dt.$$.fragment,Re),dr=p(Re),Io=n(Re,"P",{});var Ri=r(Io);cr=i(Ri,"Constructs a ViLT feature extractor."),Ri.forEach(o),mr=p(Re),ct=n(Re,"P",{});var Js=r(ct);pr=i(Js,"This feature extractor inherits from "),Ut=n(Js,"A",{href:!0});var Bi=r(Ut);hr=i(Bi,"FeatureExtractionMixin"),Bi.forEach(o),fr=i(Js,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Js.forEach(o),ur=p(Re),H=n(Re,"DIV",{class:!0});var ro=r(H);w(mt.$$.fragment,ro),gr=p(ro),zo=n(ro,"P",{});var Qi=r(zo);_r=i(Qi,"Main method to prepare for the model one or several image(s)."),Qi.forEach(o),vr=p(ro),w(we.$$.fragment,ro),ro.forEach(o),Re.forEach(o),zs=p(t),oe=n(t,"H2",{class:!0});var Xs=r(oe);ke=n(Xs,"A",{id:!0,class:!0,href:!0});var Ui=r(ke);Ao=n(Ui,"SPAN",{});var Hi=r(Ao);w(pt.$$.fragment,Hi),Hi.forEach(o),Ui.forEach(o),br=p(Xs),Lo=n(Xs,"SPAN",{});var Ki=r(Lo);xr=i(Ki,"ViltProcessor"),Ki.forEach(o),Xs.forEach(o),As=p(t),I=n(t,"DIV",{class:!0});var Be=r(I);w(ht.$$.fragment,Be),wr=p(Be),Co=n(Be,"P",{});var Gi=r(Co);kr=i(Gi,"Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Gi.forEach(o),Tr=p(Be),E=n(Be,"P",{});var Q=r(E);Ht=n(Q,"A",{href:!0});var Ji=r(Ht);yr=i(Ji,"ViltProcessor"),Ji.forEach(o),$r=i(Q," offers all the functionalities of "),Kt=n(Q,"A",{href:!0});var Xi=r(Kt);Vr=i(Xi,"ViltFeatureExtractor"),Xi.forEach(o),Fr=i(Q," and "),Gt=n(Q,"A",{href:!0});var Zi=r(Gt);jr=i(Zi,"BertTokenizerFast"),Zi.forEach(o),Er=i(Q,`. See the
docstring of `),ft=n(Q,"A",{href:!0});var bi=r(ft);qo=n(bi,"STRONG",{});var Yi=r(qo);Mr=i(Yi,"call"),Yi.forEach(o),Pr=i(bi,"()"),bi.forEach(o),Ir=i(Q," and "),No=n(Q,"CODE",{});var el=r(No);zr=i(el,"decode()"),el.forEach(o),Ar=i(Q," for more information."),Q.forEach(o),Lr=p(Be),K=n(Be,"DIV",{class:!0});var ao=r(K);w(ut.$$.fragment,ao),Cr=p(ao),se=n(ao,"P",{});var io=r(se);qr=i(io,"This method uses "),Te=n(io,"A",{href:!0});var Zs=r(Te);Nr=i(Zs,"ViltFeatureExtractor."),So=n(Zs,"STRONG",{});var tl=r(So);Sr=i(tl,"call"),tl.forEach(o),Or=i(Zs,"()"),Zs.forEach(o),Dr=i(io,` method to prepare image(s) for the model, and
`),ye=n(io,"A",{href:!0});var Ys=r(ye);Wr=i(Ys,"BertTokenizerFast."),Oo=n(Ys,"STRONG",{});var ol=r(Oo);Rr=i(ol,"call"),ol.forEach(o),Br=i(Ys,"()"),Ys.forEach(o),Qr=i(io," to prepare text for the model."),io.forEach(o),Ur=p(ao),Do=n(ao,"P",{});var sl=r(Do);Hr=i(sl,"Please refer to the docstring of the above two methods for more information."),sl.forEach(o),ao.forEach(o),Be.forEach(o),Ls=p(t),ne=n(t,"H2",{class:!0});var en=r(ne);$e=n(en,"A",{id:!0,class:!0,href:!0});var nl=r($e);Wo=n(nl,"SPAN",{});var rl=r(Wo);w(gt.$$.fragment,rl),rl.forEach(o),nl.forEach(o),Kr=p(en),Ro=n(en,"SPAN",{});var al=r(Ro);Gr=i(al,"ViltModel"),al.forEach(o),en.forEach(o),Cs=p(t),R=n(t,"DIV",{class:!0});var lo=r(R);w(_t.$$.fragment,lo),Jr=p(lo),vt=n(lo,"P",{});var tn=r(vt);Xr=i(tn,`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Bo=n(tn,"CODE",{});var il=r(Bo);Zr=i(il,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),il.forEach(o),Yr=i(tn,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tn.forEach(o),ea=p(lo),q=n(lo,"DIV",{class:!0});var Qe=r(q);w(bt.$$.fragment,Qe),ta=p(Qe),re=n(Qe,"P",{});var co=r(re);oa=i(co,"The "),Jt=n(co,"A",{href:!0});var ll=r(Jt);sa=i(ll,"ViltModel"),ll.forEach(o),na=i(co," forward method, overrides the "),Qo=n(co,"CODE",{});var dl=r(Qo);ra=i(dl,"__call__"),dl.forEach(o),aa=i(co," special method."),co.forEach(o),ia=p(Qe),w(Ve.$$.fragment,Qe),la=p(Qe),w(Fe.$$.fragment,Qe),Qe.forEach(o),lo.forEach(o),qs=p(t),ae=n(t,"H2",{class:!0});var on=r(ae);je=n(on,"A",{id:!0,class:!0,href:!0});var cl=r(je);Uo=n(cl,"SPAN",{});var ml=r(Uo);w(xt.$$.fragment,ml),ml.forEach(o),cl.forEach(o),da=p(on),Ho=n(on,"SPAN",{});var pl=r(Ho);ca=i(pl,"ViltForMaskedLM"),pl.forEach(o),on.forEach(o),Ns=p(t),z=n(t,"DIV",{class:!0});var Ue=r(z);w(wt.$$.fragment,Ue),ma=p(Ue),Ko=n(Ue,"P",{});var hl=r(Ko);pa=i(hl,"ViLT Model with a language modeling head on top as done during pretraining."),hl.forEach(o),ha=p(Ue),kt=n(Ue,"P",{});var sn=r(kt);fa=i(sn,"This model is a PyTorch "),Go=n(sn,"CODE",{});var fl=r(Go);ua=i(fl,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),fl.forEach(o),ga=i(sn,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sn.forEach(o),_a=p(Ue),N=n(Ue,"DIV",{class:!0});var He=r(N);w(Tt.$$.fragment,He),va=p(He),ie=n(He,"P",{});var mo=r(ie);ba=i(mo,"The "),Xt=n(mo,"A",{href:!0});var ul=r(Xt);xa=i(ul,"ViltForMaskedLM"),ul.forEach(o),wa=i(mo," forward method, overrides the "),Jo=n(mo,"CODE",{});var gl=r(Jo);ka=i(gl,"__call__"),gl.forEach(o),Ta=i(mo," special method."),mo.forEach(o),ya=p(He),w(Ee.$$.fragment,He),$a=p(He),w(Me.$$.fragment,He),He.forEach(o),Ue.forEach(o),Ss=p(t),le=n(t,"H2",{class:!0});var nn=r(le);Pe=n(nn,"A",{id:!0,class:!0,href:!0});var _l=r(Pe);Xo=n(_l,"SPAN",{});var vl=r(Xo);w(yt.$$.fragment,vl),vl.forEach(o),_l.forEach(o),Va=p(nn),Zo=n(nn,"SPAN",{});var bl=r(Zo);Fa=i(bl,"ViltForQuestionAnswering"),bl.forEach(o),nn.forEach(o),Os=p(t),A=n(t,"DIV",{class:!0});var Ke=r(A);w($t.$$.fragment,Ke),ja=p(Ke),Yo=n(Ke,"P",{});var xl=r(Yo);Ea=i(xl,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),xl.forEach(o),Ma=p(Ke),Vt=n(Ke,"P",{});var rn=r(Vt);Pa=i(rn,"This model is a PyTorch "),es=n(rn,"CODE",{});var wl=r(es);Ia=i(wl,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),wl.forEach(o),za=i(rn,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rn.forEach(o),Aa=p(Ke),S=n(Ke,"DIV",{class:!0});var Ge=r(S);w(Ft.$$.fragment,Ge),La=p(Ge),de=n(Ge,"P",{});var po=r(de);Ca=i(po,"The "),Zt=n(po,"A",{href:!0});var kl=r(Zt);qa=i(kl,"ViltForQuestionAnswering"),kl.forEach(o),Na=i(po," forward method, overrides the "),ts=n(po,"CODE",{});var Tl=r(ts);Sa=i(Tl,"__call__"),Tl.forEach(o),Oa=i(po," special method."),po.forEach(o),Da=p(Ge),w(Ie.$$.fragment,Ge),Wa=p(Ge),w(ze.$$.fragment,Ge),Ge.forEach(o),Ke.forEach(o),Ds=p(t),ce=n(t,"H2",{class:!0});var an=r(ce);Ae=n(an,"A",{id:!0,class:!0,href:!0});var yl=r(Ae);os=n(yl,"SPAN",{});var $l=r(os);w(jt.$$.fragment,$l),$l.forEach(o),yl.forEach(o),Ra=p(an),ss=n(an,"SPAN",{});var Vl=r(ss);Ba=i(Vl,"ViltForImagesAndTextClassification"),Vl.forEach(o),an.forEach(o),Ws=p(t),B=n(t,"DIV",{class:!0});var ho=r(B);w(Et.$$.fragment,ho),Qa=p(ho),ns=n(ho,"P",{});var Fl=r(ns);Ua=i(Fl,"Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),Fl.forEach(o),Ha=p(ho),O=n(ho,"DIV",{class:!0});var Je=r(O);w(Mt.$$.fragment,Je),Ka=p(Je),me=n(Je,"P",{});var fo=r(me);Ga=i(fo,"The "),Yt=n(fo,"A",{href:!0});var jl=r(Yt);Ja=i(jl,"ViltForImagesAndTextClassification"),jl.forEach(o),Xa=i(fo," forward method, overrides the "),rs=n(fo,"CODE",{});var El=r(rs);Za=i(El,"__call__"),El.forEach(o),Ya=i(fo," special method."),fo.forEach(o),ei=p(Je),w(Le.$$.fragment,Je),ti=p(Je),w(Ce.$$.fragment,Je),Je.forEach(o),ho.forEach(o),Rs=p(t),pe=n(t,"H2",{class:!0});var ln=r(pe);qe=n(ln,"A",{id:!0,class:!0,href:!0});var Ml=r(qe);as=n(Ml,"SPAN",{});var Pl=r(as);w(Pt.$$.fragment,Pl),Pl.forEach(o),Ml.forEach(o),oi=p(ln),is=n(ln,"SPAN",{});var Il=r(is);si=i(Il,"ViltForImageAndTextRetrieval"),Il.forEach(o),ln.forEach(o),Bs=p(t),L=n(t,"DIV",{class:!0});var Xe=r(L);w(It.$$.fragment,Xe),ni=p(Xe),ls=n(Xe,"P",{});var zl=r(ls);ri=i(zl,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),zl.forEach(o),ai=p(Xe),zt=n(Xe,"P",{});var dn=r(zt);ii=i(dn,"This model is a PyTorch "),ds=n(dn,"CODE",{});var Al=r(ds);li=i(Al,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Al.forEach(o),di=i(dn,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dn.forEach(o),ci=p(Xe),D=n(Xe,"DIV",{class:!0});var Ze=r(D);w(At.$$.fragment,Ze),mi=p(Ze),he=n(Ze,"P",{});var uo=r(he);pi=i(uo,"The "),eo=n(uo,"A",{href:!0});var Ll=r(eo);hi=i(Ll,"ViltForImageAndTextRetrieval"),Ll.forEach(o),fi=i(uo," forward method, overrides the "),cs=n(uo,"CODE",{});var Cl=r(cs);ui=i(Cl,"__call__"),Cl.forEach(o),gi=i(uo," special method."),uo.forEach(o),_i=p(Ze),w(Ne.$$.fragment,Ze),vi=p(Ze),w(Se.$$.fragment,Ze),Ze.forEach(o),Xe.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(od)),c(h,"id","vilt"),c(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(h,"href","#vilt"),c(g,"class","relative group"),c(fe,"id","overview"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#overview"),c(J,"class","relative group"),c(et,"href","https://arxiv.org/abs/2102.03334"),c(et,"rel","nofollow"),c(ot,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT"),c(ot,"rel","nofollow"),c(Dt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltProcessor"),c(Wt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltProcessor"),Dl(ge.src,xi="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||c(ge,"src",xi),c(ge,"alt","drawing"),c(ge,"width","600"),c(Rt,"href","https://arxiv.org/abs/2102.03334"),c(st,"href","https://huggingface.co/nielsr"),c(st,"rel","nofollow"),c(nt,"href","https://github.com/dandelin/ViLT"),c(nt,"rel","nofollow"),c(ve,"id","transformers.ViltConfig"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.ViltConfig"),c(Z,"class","relative group"),c(it,"href","https://huggingface.co/dandelin/vilt-b32-mlm"),c(it,"rel","nofollow"),c(Bt,"href","/docs/transformers/pr_18110/en/main_classes/configuration#transformers.PretrainedConfig"),c(Qt,"href","/docs/transformers/pr_18110/en/main_classes/configuration#transformers.PretrainedConfig"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.ViltFeatureExtractor"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.ViltFeatureExtractor"),c(te,"class","relative group"),c(Ut,"href","/docs/transformers/pr_18110/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ke,"id","transformers.ViltProcessor"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.ViltProcessor"),c(oe,"class","relative group"),c(Ht,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltProcessor"),c(Kt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor"),c(Gt,"href","/docs/transformers/pr_18110/en/model_doc/bert#transformers.BertTokenizerFast"),c(ft,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltProcessor.__call__"),c(Te,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__"),c(ye,"href","/docs/transformers/pr_18110/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.ViltModel"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.ViltModel"),c(ne,"class","relative group"),c(Jt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltModel"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.ViltForMaskedLM"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.ViltForMaskedLM"),c(ae,"class","relative group"),c(Xt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltForMaskedLM"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"id","transformers.ViltForQuestionAnswering"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.ViltForQuestionAnswering"),c(le,"class","relative group"),c(Zt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltForQuestionAnswering"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.ViltForImagesAndTextClassification"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.ViltForImagesAndTextClassification"),c(ce,"class","relative group"),c(Yt,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"id","transformers.ViltForImageAndTextRetrieval"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#transformers.ViltForImageAndTextRetrieval"),c(pe,"class","relative group"),c(eo,"href","/docs/transformers/pr_18110/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),_(t,b,u),_(t,g,u),e(g,h),e(h,v),k(l,v,null),e(g,f),e(g,F),e(F,cn),_(t,xs,u),_(t,J,u),e(J,fe),e(fe,xo),k(Ye,xo,null),e(J,mn),e(J,wo),e(wo,pn),_(t,ws,u),_(t,ue,u),e(ue,hn),e(ue,et),e(et,fn),e(ue,un),_(t,ks,u),_(t,Nt,u),e(Nt,gn),_(t,Ts,u),_(t,St,u),e(St,ko),e(ko,_n),_(t,ys,u),_(t,Ot,u),e(Ot,vn),_(t,$s,u),_(t,C,u),e(C,tt),e(tt,bn),e(tt,ot),e(ot,xn),e(tt,wn),e(C,kn),e(C,W),e(W,Tn),e(W,To),e(To,yn),e(W,$n),e(W,yo),e(yo,Vn),e(W,Fn),e(W,Dt),e(Dt,jn),e(W,En),e(C,Mn),e(C,X),e(X,Pn),e(X,$o),e($o,In),e(X,zn),e(X,Wt),e(Wt,An),e(X,Ln),e(C,Cn),e(C,Vo),e(Vo,qn),_(t,Vs,u),_(t,ge,u),_(t,Fs,u),_(t,_e,u),e(_e,Nn),e(_e,Rt),e(Rt,Sn),e(_e,On),_(t,js,u),_(t,U,u),e(U,Dn),e(U,st),e(st,Wn),e(U,Rn),e(U,nt),e(nt,Bn),e(U,Qn),_(t,Es,u),_(t,Z,u),e(Z,ve),e(ve,Fo),k(rt,Fo,null),e(Z,Un),e(Z,jo),e(jo,Hn),_(t,Ms,u),_(t,M,u),k(at,M,null),e(M,Kn),e(M,Y),e(Y,Gn),e(Y,Eo),e(Eo,Jn),e(Y,Xn),e(Y,it),e(it,Zn),e(Y,Yn),e(M,er),e(M,ee),e(ee,tr),e(ee,Bt),e(Bt,or),e(ee,sr),e(ee,Qt),e(Qt,nr),e(ee,rr),e(M,ar),k(be,M,null),_(t,Ps,u),_(t,te,u),e(te,xe),e(xe,Mo),k(lt,Mo,null),e(te,ir),e(te,Po),e(Po,lr),_(t,Is,u),_(t,P,u),k(dt,P,null),e(P,dr),e(P,Io),e(Io,cr),e(P,mr),e(P,ct),e(ct,pr),e(ct,Ut),e(Ut,hr),e(ct,fr),e(P,ur),e(P,H),k(mt,H,null),e(H,gr),e(H,zo),e(zo,_r),e(H,vr),k(we,H,null),_(t,zs,u),_(t,oe,u),e(oe,ke),e(ke,Ao),k(pt,Ao,null),e(oe,br),e(oe,Lo),e(Lo,xr),_(t,As,u),_(t,I,u),k(ht,I,null),e(I,wr),e(I,Co),e(Co,kr),e(I,Tr),e(I,E),e(E,Ht),e(Ht,yr),e(E,$r),e(E,Kt),e(Kt,Vr),e(E,Fr),e(E,Gt),e(Gt,jr),e(E,Er),e(E,ft),e(ft,qo),e(qo,Mr),e(ft,Pr),e(E,Ir),e(E,No),e(No,zr),e(E,Ar),e(I,Lr),e(I,K),k(ut,K,null),e(K,Cr),e(K,se),e(se,qr),e(se,Te),e(Te,Nr),e(Te,So),e(So,Sr),e(Te,Or),e(se,Dr),e(se,ye),e(ye,Wr),e(ye,Oo),e(Oo,Rr),e(ye,Br),e(se,Qr),e(K,Ur),e(K,Do),e(Do,Hr),_(t,Ls,u),_(t,ne,u),e(ne,$e),e($e,Wo),k(gt,Wo,null),e(ne,Kr),e(ne,Ro),e(Ro,Gr),_(t,Cs,u),_(t,R,u),k(_t,R,null),e(R,Jr),e(R,vt),e(vt,Xr),e(vt,Bo),e(Bo,Zr),e(vt,Yr),e(R,ea),e(R,q),k(bt,q,null),e(q,ta),e(q,re),e(re,oa),e(re,Jt),e(Jt,sa),e(re,na),e(re,Qo),e(Qo,ra),e(re,aa),e(q,ia),k(Ve,q,null),e(q,la),k(Fe,q,null),_(t,qs,u),_(t,ae,u),e(ae,je),e(je,Uo),k(xt,Uo,null),e(ae,da),e(ae,Ho),e(Ho,ca),_(t,Ns,u),_(t,z,u),k(wt,z,null),e(z,ma),e(z,Ko),e(Ko,pa),e(z,ha),e(z,kt),e(kt,fa),e(kt,Go),e(Go,ua),e(kt,ga),e(z,_a),e(z,N),k(Tt,N,null),e(N,va),e(N,ie),e(ie,ba),e(ie,Xt),e(Xt,xa),e(ie,wa),e(ie,Jo),e(Jo,ka),e(ie,Ta),e(N,ya),k(Ee,N,null),e(N,$a),k(Me,N,null),_(t,Ss,u),_(t,le,u),e(le,Pe),e(Pe,Xo),k(yt,Xo,null),e(le,Va),e(le,Zo),e(Zo,Fa),_(t,Os,u),_(t,A,u),k($t,A,null),e(A,ja),e(A,Yo),e(Yo,Ea),e(A,Ma),e(A,Vt),e(Vt,Pa),e(Vt,es),e(es,Ia),e(Vt,za),e(A,Aa),e(A,S),k(Ft,S,null),e(S,La),e(S,de),e(de,Ca),e(de,Zt),e(Zt,qa),e(de,Na),e(de,ts),e(ts,Sa),e(de,Oa),e(S,Da),k(Ie,S,null),e(S,Wa),k(ze,S,null),_(t,Ds,u),_(t,ce,u),e(ce,Ae),e(Ae,os),k(jt,os,null),e(ce,Ra),e(ce,ss),e(ss,Ba),_(t,Ws,u),_(t,B,u),k(Et,B,null),e(B,Qa),e(B,ns),e(ns,Ua),e(B,Ha),e(B,O),k(Mt,O,null),e(O,Ka),e(O,me),e(me,Ga),e(me,Yt),e(Yt,Ja),e(me,Xa),e(me,rs),e(rs,Za),e(me,Ya),e(O,ei),k(Le,O,null),e(O,ti),k(Ce,O,null),_(t,Rs,u),_(t,pe,u),e(pe,qe),e(qe,as),k(Pt,as,null),e(pe,oi),e(pe,is),e(is,si),_(t,Bs,u),_(t,L,u),k(It,L,null),e(L,ni),e(L,ls),e(ls,ri),e(L,ai),e(L,zt),e(zt,ii),e(zt,ds),e(ds,li),e(zt,di),e(L,ci),e(L,D),k(At,D,null),e(D,mi),e(D,he),e(he,pi),e(he,eo),e(eo,hi),e(he,fi),e(he,cs),e(cs,ui),e(he,gi),e(D,_i),k(Ne,D,null),e(D,vi),k(Se,D,null),Qs=!0},p(t,[u]){const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:t}),be.$set(Lt);const ms={};u&2&&(ms.$$scope={dirty:u,ctx:t}),we.$set(ms);const ps={};u&2&&(ps.$$scope={dirty:u,ctx:t}),Ve.$set(ps);const hs={};u&2&&(hs.$$scope={dirty:u,ctx:t}),Fe.$set(hs);const Ct={};u&2&&(Ct.$$scope={dirty:u,ctx:t}),Ee.$set(Ct);const fs={};u&2&&(fs.$$scope={dirty:u,ctx:t}),Me.$set(fs);const us={};u&2&&(us.$$scope={dirty:u,ctx:t}),Ie.$set(us);const gs={};u&2&&(gs.$$scope={dirty:u,ctx:t}),ze.$set(gs);const qt={};u&2&&(qt.$$scope={dirty:u,ctx:t}),Le.$set(qt);const _s={};u&2&&(_s.$$scope={dirty:u,ctx:t}),Ce.$set(_s);const vs={};u&2&&(vs.$$scope={dirty:u,ctx:t}),Ne.$set(vs);const bs={};u&2&&(bs.$$scope={dirty:u,ctx:t}),Se.$set(bs)},i(t){Qs||(T(l.$$.fragment,t),T(Ye.$$.fragment,t),T(rt.$$.fragment,t),T(at.$$.fragment,t),T(be.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(mt.$$.fragment,t),T(we.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(ut.$$.fragment,t),T(gt.$$.fragment,t),T(_t.$$.fragment,t),T(bt.$$.fragment,t),T(Ve.$$.fragment,t),T(Fe.$$.fragment,t),T(xt.$$.fragment,t),T(wt.$$.fragment,t),T(Tt.$$.fragment,t),T(Ee.$$.fragment,t),T(Me.$$.fragment,t),T(yt.$$.fragment,t),T($t.$$.fragment,t),T(Ft.$$.fragment,t),T(Ie.$$.fragment,t),T(ze.$$.fragment,t),T(jt.$$.fragment,t),T(Et.$$.fragment,t),T(Mt.$$.fragment,t),T(Le.$$.fragment,t),T(Ce.$$.fragment,t),T(Pt.$$.fragment,t),T(It.$$.fragment,t),T(At.$$.fragment,t),T(Ne.$$.fragment,t),T(Se.$$.fragment,t),Qs=!0)},o(t){y(l.$$.fragment,t),y(Ye.$$.fragment,t),y(rt.$$.fragment,t),y(at.$$.fragment,t),y(be.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),y(mt.$$.fragment,t),y(we.$$.fragment,t),y(pt.$$.fragment,t),y(ht.$$.fragment,t),y(ut.$$.fragment,t),y(gt.$$.fragment,t),y(_t.$$.fragment,t),y(bt.$$.fragment,t),y(Ve.$$.fragment,t),y(Fe.$$.fragment,t),y(xt.$$.fragment,t),y(wt.$$.fragment,t),y(Tt.$$.fragment,t),y(Ee.$$.fragment,t),y(Me.$$.fragment,t),y(yt.$$.fragment,t),y($t.$$.fragment,t),y(Ft.$$.fragment,t),y(Ie.$$.fragment,t),y(ze.$$.fragment,t),y(jt.$$.fragment,t),y(Et.$$.fragment,t),y(Mt.$$.fragment,t),y(Le.$$.fragment,t),y(Ce.$$.fragment,t),y(Pt.$$.fragment,t),y(It.$$.fragment,t),y(At.$$.fragment,t),y(Ne.$$.fragment,t),y(Se.$$.fragment,t),Qs=!1},d(t){o(d),t&&o(b),t&&o(g),$(l),t&&o(xs),t&&o(J),$(Ye),t&&o(ws),t&&o(ue),t&&o(ks),t&&o(Nt),t&&o(Ts),t&&o(St),t&&o(ys),t&&o(Ot),t&&o($s),t&&o(C),t&&o(Vs),t&&o(ge),t&&o(Fs),t&&o(_e),t&&o(js),t&&o(U),t&&o(Es),t&&o(Z),$(rt),t&&o(Ms),t&&o(M),$(at),$(be),t&&o(Ps),t&&o(te),$(lt),t&&o(Is),t&&o(P),$(dt),$(mt),$(we),t&&o(zs),t&&o(oe),$(pt),t&&o(As),t&&o(I),$(ht),$(ut),t&&o(Ls),t&&o(ne),$(gt),t&&o(Cs),t&&o(R),$(_t),$(bt),$(Ve),$(Fe),t&&o(qs),t&&o(ae),$(xt),t&&o(Ns),t&&o(z),$(wt),$(Tt),$(Ee),$(Me),t&&o(Ss),t&&o(le),$(yt),t&&o(Os),t&&o(A),$($t),$(Ft),$(Ie),$(ze),t&&o(Ds),t&&o(ce),$(jt),t&&o(Ws),t&&o(B),$(Et),$(Mt),$(Le),$(Ce),t&&o(Rs),t&&o(pe),$(Pt),t&&o(Bs),t&&o(L),$(It),$(At),$(Ne),$(Se)}}}const od={local:"vilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViltConfig",title:"ViltConfig"},{local:"transformers.ViltFeatureExtractor",title:"ViltFeatureExtractor"},{local:"transformers.ViltProcessor",title:"ViltProcessor"},{local:"transformers.ViltModel",title:"ViltModel"},{local:"transformers.ViltForMaskedLM",title:"ViltForMaskedLM"},{local:"transformers.ViltForQuestionAnswering",title:"ViltForQuestionAnswering"},{local:"transformers.ViltForImagesAndTextClassification",title:"ViltForImagesAndTextClassification"},{local:"transformers.ViltForImageAndTextRetrieval",title:"ViltForImageAndTextRetrieval"}],title:"ViLT"};function sd(V){return Wl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cd extends ql{constructor(d){super();Nl(this,d,sd,td,Sl,{})}}export{cd as default,od as metadata};
