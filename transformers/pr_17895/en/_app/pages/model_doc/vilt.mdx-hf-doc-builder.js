import{S as ql,i as Nl,s as Sl,e as n,k as m,w as x,t as a,M as Ol,c as s,d as o,m as p,a as r,x as w,h as i,b as c,N as Dl,G as e,g as _,y as k,q as T,o as y,B as $,v as Bl,L as vo}from"../../chunks/vendor-hf-doc-builder.js";import{T as go}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as bo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _o}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Wl(V){let d,b,g,h,v;return h=new bo({props:{code:`from transformers import ViLTModel, ViLTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=a("Example:"),g=m(),x(h.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Example:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Rl(V){let d,b;return{c(){d=n("p"),b=a(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(g){d=s(g,"P",{});var h=r(d);b=i(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(g,h){_(g,d,h),e(d,b)},d(g){g&&o(d)}}}function Ql(V){let d,b,g,h,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Hl(V){let d,b,g,h,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
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
a bunch of cats laying on a couch.`}}),{c(){d=n("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Gl(V){let d,b,g,h,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
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
Predicted answer: <span class="hljs-number">2</span>`}}),{c(){d=n("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Xl(V){let d,b,g,h,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
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
Predicted answer: <span class="hljs-literal">True</span>`}}),{c(){d=n("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function Yl(V){let d,b,g,h,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),h=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(f,"CODE",{});var F=r(g);h=i(F,"Module"),F.forEach(o),v=i(f,`
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
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`}}),{c(){d=n("p"),b=a("Examples:"),g=m(),x(h.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);b=i(f,"Examples:"),f.forEach(o),g=p(l),w(h.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,g,f),k(h,l,f),v=!0},p:vo,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){y(h.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(g),$(h,l)}}}function td(V){let d,b,g,h,v,l,f,F,cs,wn,J,fe,xo,Ye,ms,wo,ps,kn,ue,hs,et,fs,us,Tn,Nt,gs,yn,St,ko,_s,$n,Ot,vs,Vn,C,tt,bs,ot,xs,ws,ks,B,Ts,To,ys,$s,yo,Vs,Fs,Dt,js,Es,Ms,X,Ps,$o,Is,zs,Bt,As,Ls,Cs,Vo,qs,Fn,ge,xi,jn,_e,Ns,Wt,Ss,Os,En,U,Ds,nt,Bs,Ws,st,Rs,Qs,Mn,Z,ve,Fo,rt,Us,jo,Hs,Pn,M,at,Ks,Y,Gs,Eo,Js,Xs,it,Zs,Ys,er,ee,tr,Rt,or,nr,Qt,sr,rr,ar,be,In,te,xe,Mo,lt,ir,Po,lr,zn,P,dt,dr,Io,cr,mr,ct,pr,Ut,hr,fr,ur,H,mt,gr,zo,_r,vr,we,An,oe,ke,Ao,pt,br,Lo,xr,Ln,I,ht,wr,Co,kr,Tr,E,Ht,yr,$r,Kt,Vr,Fr,Gt,jr,Er,ft,qo,Mr,Pr,Ir,No,zr,Ar,Lr,K,ut,Cr,ne,qr,Te,Nr,So,Sr,Or,Dr,ye,Br,Oo,Wr,Rr,Qr,Ur,Do,Hr,Cn,se,$e,Bo,gt,Kr,Wo,Gr,qn,W,_t,Jr,vt,Xr,Ro,Zr,Yr,ea,q,bt,ta,re,oa,Jt,na,sa,Qo,ra,aa,ia,Ve,la,Fe,Nn,ae,je,Uo,xt,da,Ho,ca,Sn,z,wt,ma,Ko,pa,ha,kt,fa,Go,ua,ga,_a,N,Tt,va,ie,ba,Xt,xa,wa,Jo,ka,Ta,ya,Ee,$a,Me,On,le,Pe,Xo,yt,Va,Zo,Fa,Dn,A,$t,ja,Yo,Ea,Ma,Vt,Pa,en,Ia,za,Aa,S,Ft,La,de,Ca,Zt,qa,Na,tn,Sa,Oa,Da,Ie,Ba,ze,Bn,ce,Ae,on,jt,Wa,nn,Ra,Wn,R,Et,Qa,sn,Ua,Ha,O,Mt,Ka,me,Ga,Yt,Ja,Xa,rn,Za,Ya,ei,Le,ti,Ce,Rn,pe,qe,an,Pt,oi,ln,ni,Qn,L,It,si,dn,ri,ai,zt,ii,cn,li,di,ci,D,At,mi,he,pi,eo,hi,fi,mn,ui,gi,_i,Ne,vi,Se,Un;return l=new G({}),Ye=new G({}),rt=new G({}),at=new j({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the text part of the model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>.`,name:"vocab_size"},{anchor:"transformers.ViltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used when encoding
text.`,name:"type_vocab_size"},{anchor:"transformers.ViltConfig.modality_type_vocab_size",description:`<strong>modality_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the modalities passed when calling <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used after concatening the
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
used by <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/configuration_vilt.py#L28"}}),be=new _o({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[Wl]},$$scope:{ctx:V}}}),lt=new G({}),dt=new j({props:{name:"class transformers.ViltFeatureExtractor",anchor:"transformers.ViltFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"size_divisor",val:" = 32"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/feature_extraction_vilt.py#L40"}}),mt=new j({props:{name:"__call__",anchor:"transformers.ViltFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"pad_and_return_pixel_mask",val:": typing.Optional[bool] = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViltFeatureExtractor.__call__.pad_and_return_pixel_mask",description:`<strong>pad_and_return_pixel_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to pad images up to the largest image in a batch and create a pixel mask.</p>
<p>If left to the default, will return a pixel mask that is:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>`,name:"pad_and_return_pixel_mask"},{anchor:"transformers.ViltFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17895/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/feature_extraction_vilt.py#L181",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17895/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>pixel_mask</strong> \u2014 Pixel mask to be fed to a model (when <code>return_pixel_mask=True</code> or if <em>\u201Cpixel_mask\u201D</em> is
in <code>self.model_input_names</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17895/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),we=new go({props:{warning:!0,$$slots:{default:[Rl]},$$scope:{ctx:V}}}),pt=new G({}),ht=new j({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>ViltFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/processing_vilt.py#L26"}}),ut=new j({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/processing_vilt.py#L46"}}),gt=new G({}),_t=new j({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17895/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L727"}}),bt=new j({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"image_token_type_idx",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17895/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L755",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new go({props:{$$slots:{default:[Ql]},$$scope:{ctx:V}}}),Fe=new _o({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[Ul]},$$scope:{ctx:V}}}),xt=new G({}),wt=new j({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17895/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L892"}}),Tt=new j({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17895/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForMaskedLM.forward.labels",description:`<strong>labels</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <em>[-100, 0, &#x2026;,
config.vocab_size]</em> (see <em>input_ids</em> docstring) Tokens with indices set to <em>-100</em> are ignored (masked), the
loss is only computed for the tokens with labels in <em>[0, &#x2026;, config.vocab_size]</em>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L908",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new go({props:{$$slots:{default:[Hl]},$$scope:{ctx:V}}}),Me=new _o({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[Kl]},$$scope:{ctx:V}}}),yt=new G({}),$t=new j({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17895/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L1064"}}),Ft=new j({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17895/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the visual question answering loss. This tensor must be either a one-hot encoding of
all answers that are applicable for a given example in the batch, or a soft encoding indicating which
answers are applicable, where 1.0 is the highest score.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L1082",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new go({props:{$$slots:{default:[Gl]},$$scope:{ctx:V}}}),ze=new _o({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[Jl]},$$scope:{ctx:V}}}),jt=new G({}),Et=new j({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17895/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L1274"}}),Mt=new j({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17895/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Binary classification labels.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L1293",returnDescription:`
<p>A <code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig"
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
`}}),Le=new go({props:{$$slots:{default:[Xl]},$$scope:{ctx:V}}}),Ce=new _o({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[Zl]},$$scope:{ctx:V}}}),Pt=new G({}),It=new j({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17895/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L1175"}}),At=new j({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"pixel_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"image_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor">ViltFeatureExtractor</a>. See
<a href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__">ViltFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17895/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels are currently not supported.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17895/src/transformers/models/vilt/modeling_vilt.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltConfig"
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
  href="/docs/transformers/pr_17895/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new go({props:{$$slots:{default:[Yl]},$$scope:{ctx:V}}}),Se=new _o({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[ed]},$$scope:{ctx:V}}}),{c(){d=n("meta"),b=m(),g=n("h1"),h=n("a"),v=n("span"),x(l.$$.fragment),f=m(),F=n("span"),cs=a("ViLT"),wn=m(),J=n("h2"),fe=n("a"),xo=n("span"),x(Ye.$$.fragment),ms=m(),wo=n("span"),ps=a("Overview"),kn=m(),ue=n("p"),hs=a("The ViLT model was proposed in "),et=n("a"),fs=a("ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),us=a(`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),Tn=m(),Nt=n("p"),gs=a("The abstract from the paper is the following:"),yn=m(),St=n("p"),ko=n("em"),_s=a(`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),$n=m(),Ot=n("p"),vs=a("Tips:"),Vn=m(),C=n("ul"),tt=n("li"),bs=a("The quickest way to get started with ViLT is by checking the "),ot=n("a"),xs=a("example notebooks"),ws=a(`
(which showcase both inference and fine-tuning on custom data).`),ks=m(),B=n("li"),Ts=a("ViLT is a model that takes both "),To=n("code"),ys=a("pixel_values"),$s=a(" and "),yo=n("code"),Vs=a("input_ids"),Fs=a(" as input. One can use "),Dt=n("a"),js=a("ViltProcessor"),Es=a(` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),Ms=m(),X=n("li"),Ps=a(`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),$o=n("code"),Is=a("pixel_mask"),zs=a(` that indicates
which pixel values are real and which are padding. `),Bt=n("a"),As=a("ViltProcessor"),Ls=a(" automatically creates this for you."),Cs=m(),Vo=n("li"),qs=a(`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Fn=m(),ge=n("img"),jn=m(),_e=n("small"),Ns=a("ViLT architecture. Taken from the "),Wt=n("a"),Ss=a("original paper"),Os=a("."),En=m(),U=n("p"),Ds=a("This model was contributed by "),nt=n("a"),Bs=a("nielsr"),Ws=a(". The original code can be found "),st=n("a"),Rs=a("here"),Qs=a("."),Mn=m(),Z=n("h2"),ve=n("a"),Fo=n("span"),x(rt.$$.fragment),Us=m(),jo=n("span"),Hs=a("ViltConfig"),Pn=m(),M=n("div"),x(at.$$.fragment),Ks=m(),Y=n("p"),Gs=a("This is the configuration class to store the configuration of a "),Eo=n("code"),Js=a("ViLTModel"),Xs=a(`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),it=n("a"),Zs=a("dandelin/vilt-b32-mlm"),Ys=a(" architecture."),er=m(),ee=n("p"),tr=a("Configuration objects inherit from "),Rt=n("a"),or=a("PretrainedConfig"),nr=a(` and can be used to control the model outputs. Read the
documentation from `),Qt=n("a"),sr=a("PretrainedConfig"),rr=a(" for more information."),ar=m(),x(be.$$.fragment),In=m(),te=n("h2"),xe=n("a"),Mo=n("span"),x(lt.$$.fragment),ir=m(),Po=n("span"),lr=a("ViltFeatureExtractor"),zn=m(),P=n("div"),x(dt.$$.fragment),dr=m(),Io=n("p"),cr=a("Constructs a ViLT feature extractor."),mr=m(),ct=n("p"),pr=a("This feature extractor inherits from "),Ut=n("a"),hr=a("FeatureExtractionMixin"),fr=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ur=m(),H=n("div"),x(mt.$$.fragment),gr=m(),zo=n("p"),_r=a("Main method to prepare for the model one or several image(s)."),vr=m(),x(we.$$.fragment),An=m(),oe=n("h2"),ke=n("a"),Ao=n("span"),x(pt.$$.fragment),br=m(),Lo=n("span"),xr=a("ViltProcessor"),Ln=m(),I=n("div"),x(ht.$$.fragment),wr=m(),Co=n("p"),kr=a("Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Tr=m(),E=n("p"),Ht=n("a"),yr=a("ViltProcessor"),$r=a(" offers all the functionalities of "),Kt=n("a"),Vr=a("ViltFeatureExtractor"),Fr=a(" and "),Gt=n("a"),jr=a("BertTokenizerFast"),Er=a(`. See the
docstring of `),ft=n("a"),qo=n("strong"),Mr=a("call"),Pr=a("()"),Ir=a(" and "),No=n("code"),zr=a("decode()"),Ar=a(" for more information."),Lr=m(),K=n("div"),x(ut.$$.fragment),Cr=m(),ne=n("p"),qr=a("This method uses "),Te=n("a"),Nr=a("ViltFeatureExtractor."),So=n("strong"),Sr=a("call"),Or=a("()"),Dr=a(` method to prepare image(s) for the model, and
`),ye=n("a"),Br=a("BertTokenizerFast."),Oo=n("strong"),Wr=a("call"),Rr=a("()"),Qr=a(" to prepare text for the model."),Ur=m(),Do=n("p"),Hr=a("Please refer to the docstring of the above two methods for more information."),Cn=m(),se=n("h2"),$e=n("a"),Bo=n("span"),x(gt.$$.fragment),Kr=m(),Wo=n("span"),Gr=a("ViltModel"),qn=m(),W=n("div"),x(_t.$$.fragment),Jr=m(),vt=n("p"),Xr=a(`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ro=n("code"),Zr=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Yr=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ea=m(),q=n("div"),x(bt.$$.fragment),ta=m(),re=n("p"),oa=a("The "),Jt=n("a"),na=a("ViltModel"),sa=a(" forward method, overrides the "),Qo=n("code"),ra=a("__call__"),aa=a(" special method."),ia=m(),x(Ve.$$.fragment),la=m(),x(Fe.$$.fragment),Nn=m(),ae=n("h2"),je=n("a"),Uo=n("span"),x(xt.$$.fragment),da=m(),Ho=n("span"),ca=a("ViltForMaskedLM"),Sn=m(),z=n("div"),x(wt.$$.fragment),ma=m(),Ko=n("p"),pa=a("ViLT Model with a language modeling head on top as done during pretraining."),ha=m(),kt=n("p"),fa=a("This model is a PyTorch "),Go=n("code"),ua=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),ga=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_a=m(),N=n("div"),x(Tt.$$.fragment),va=m(),ie=n("p"),ba=a("The "),Xt=n("a"),xa=a("ViltForMaskedLM"),wa=a(" forward method, overrides the "),Jo=n("code"),ka=a("__call__"),Ta=a(" special method."),ya=m(),x(Ee.$$.fragment),$a=m(),x(Me.$$.fragment),On=m(),le=n("h2"),Pe=n("a"),Xo=n("span"),x(yt.$$.fragment),Va=m(),Zo=n("span"),Fa=a("ViltForQuestionAnswering"),Dn=m(),A=n("div"),x($t.$$.fragment),ja=m(),Yo=n("p"),Ea=a(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),Ma=m(),Vt=n("p"),Pa=a("This model is a PyTorch "),en=n("code"),Ia=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),za=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Aa=m(),S=n("div"),x(Ft.$$.fragment),La=m(),de=n("p"),Ca=a("The "),Zt=n("a"),qa=a("ViltForQuestionAnswering"),Na=a(" forward method, overrides the "),tn=n("code"),Sa=a("__call__"),Oa=a(" special method."),Da=m(),x(Ie.$$.fragment),Ba=m(),x(ze.$$.fragment),Bn=m(),ce=n("h2"),Ae=n("a"),on=n("span"),x(jt.$$.fragment),Wa=m(),nn=n("span"),Ra=a("ViltForImagesAndTextClassification"),Wn=m(),R=n("div"),x(Et.$$.fragment),Qa=m(),sn=n("p"),Ua=a("Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),Ha=m(),O=n("div"),x(Mt.$$.fragment),Ka=m(),me=n("p"),Ga=a("The "),Yt=n("a"),Ja=a("ViltForImagesAndTextClassification"),Xa=a(" forward method, overrides the "),rn=n("code"),Za=a("__call__"),Ya=a(" special method."),ei=m(),x(Le.$$.fragment),ti=m(),x(Ce.$$.fragment),Rn=m(),pe=n("h2"),qe=n("a"),an=n("span"),x(Pt.$$.fragment),oi=m(),ln=n("span"),ni=a("ViltForImageAndTextRetrieval"),Qn=m(),L=n("div"),x(It.$$.fragment),si=m(),dn=n("p"),ri=a(`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),ai=m(),zt=n("p"),ii=a("This model is a PyTorch "),cn=n("code"),li=a("torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),di=a(`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ci=m(),D=n("div"),x(At.$$.fragment),mi=m(),he=n("p"),pi=a("The "),eo=n("a"),hi=a("ViltForImageAndTextRetrieval"),fi=a(" forward method, overrides the "),mn=n("code"),ui=a("__call__"),gi=a(" special method."),_i=m(),x(Ne.$$.fragment),vi=m(),x(Se.$$.fragment),this.h()},l(t){const u=Ol('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(o),b=p(t),g=s(t,"H1",{class:!0});var Lt=r(g);h=s(Lt,"A",{id:!0,class:!0,href:!0});var pn=r(h);v=s(pn,"SPAN",{});var hn=r(v);w(l.$$.fragment,hn),hn.forEach(o),pn.forEach(o),f=p(Lt),F=s(Lt,"SPAN",{});var fn=r(F);cs=i(fn,"ViLT"),fn.forEach(o),Lt.forEach(o),wn=p(t),J=s(t,"H2",{class:!0});var Ct=r(J);fe=s(Ct,"A",{id:!0,class:!0,href:!0});var un=r(fe);xo=s(un,"SPAN",{});var gn=r(xo);w(Ye.$$.fragment,gn),gn.forEach(o),un.forEach(o),ms=p(Ct),wo=s(Ct,"SPAN",{});var _n=r(wo);ps=i(_n,"Overview"),_n.forEach(o),Ct.forEach(o),kn=p(t),ue=s(t,"P",{});var qt=r(ue);hs=i(qt,"The ViLT model was proposed in "),et=s(qt,"A",{href:!0,rel:!0});var vn=r(et);fs=i(vn,"ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision"),vn.forEach(o),us=i(qt,`
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`),qt.forEach(o),Tn=p(t),Nt=s(t,"P",{});var bn=r(Nt);gs=i(bn,"The abstract from the paper is the following:"),bn.forEach(o),yn=p(t),St=s(t,"P",{});var xn=r(St);ko=s(xn,"EM",{});var wi=r(ko);_s=i(wi,`Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.`),wi.forEach(o),xn.forEach(o),$n=p(t),Ot=s(t,"P",{});var ki=r(Ot);vs=i(ki,"Tips:"),ki.forEach(o),Vn=p(t),C=s(t,"UL",{});var Oe=r(C);tt=s(Oe,"LI",{});var Hn=r(tt);bs=i(Hn,"The quickest way to get started with ViLT is by checking the "),ot=s(Hn,"A",{href:!0,rel:!0});var Ti=r(ot);xs=i(Ti,"example notebooks"),Ti.forEach(o),ws=i(Hn,`
(which showcase both inference and fine-tuning on custom data).`),Hn.forEach(o),ks=p(Oe),B=s(Oe,"LI",{});var De=r(B);Ts=i(De,"ViLT is a model that takes both "),To=s(De,"CODE",{});var yi=r(To);ys=i(yi,"pixel_values"),yi.forEach(o),$s=i(De," and "),yo=s(De,"CODE",{});var $i=r(yo);Vs=i($i,"input_ids"),$i.forEach(o),Fs=i(De," as input. One can use "),Dt=s(De,"A",{href:!0});var Vi=r(Dt);js=i(Vi,"ViltProcessor"),Vi.forEach(o),Es=i(De,` to prepare data for the model.
This processor wraps a feature extractor (for the image modality) and a tokenizer (for the language modality) into one.`),De.forEach(o),Ms=p(Oe),X=s(Oe,"LI",{});var to=r(X);Ps=i(to,`ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a `),$o=s(to,"CODE",{});var Fi=r($o);Is=i(Fi,"pixel_mask"),Fi.forEach(o),zs=i(to,` that indicates
which pixel values are real and which are padding. `),Bt=s(to,"A",{href:!0});var ji=r(Bt);As=i(ji,"ViltProcessor"),ji.forEach(o),Ls=i(to," automatically creates this for you."),to.forEach(o),Cs=p(Oe),Vo=s(Oe,"LI",{});var Ei=r(Vo);qs=i(Ei,`The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.`),Ei.forEach(o),Oe.forEach(o),Fn=p(t),ge=s(t,"IMG",{src:!0,alt:!0,width:!0}),jn=p(t),_e=s(t,"SMALL",{});var Kn=r(_e);Ns=i(Kn,"ViLT architecture. Taken from the "),Wt=s(Kn,"A",{href:!0});var Mi=r(Wt);Ss=i(Mi,"original paper"),Mi.forEach(o),Os=i(Kn,"."),Kn.forEach(o),En=p(t),U=s(t,"P",{});var oo=r(U);Ds=i(oo,"This model was contributed by "),nt=s(oo,"A",{href:!0,rel:!0});var Pi=r(nt);Bs=i(Pi,"nielsr"),Pi.forEach(o),Ws=i(oo,". The original code can be found "),st=s(oo,"A",{href:!0,rel:!0});var Ii=r(st);Rs=i(Ii,"here"),Ii.forEach(o),Qs=i(oo,"."),oo.forEach(o),Mn=p(t),Z=s(t,"H2",{class:!0});var Gn=r(Z);ve=s(Gn,"A",{id:!0,class:!0,href:!0});var zi=r(ve);Fo=s(zi,"SPAN",{});var Ai=r(Fo);w(rt.$$.fragment,Ai),Ai.forEach(o),zi.forEach(o),Us=p(Gn),jo=s(Gn,"SPAN",{});var Li=r(jo);Hs=i(Li,"ViltConfig"),Li.forEach(o),Gn.forEach(o),Pn=p(t),M=s(t,"DIV",{class:!0});var Be=r(M);w(at.$$.fragment,Be),Ks=p(Be),Y=s(Be,"P",{});var no=r(Y);Gs=i(no,"This is the configuration class to store the configuration of a "),Eo=s(no,"CODE",{});var Ci=r(Eo);Js=i(Ci,"ViLTModel"),Ci.forEach(o),Xs=i(no,`. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
`),it=s(no,"A",{href:!0,rel:!0});var qi=r(it);Zs=i(qi,"dandelin/vilt-b32-mlm"),qi.forEach(o),Ys=i(no," architecture."),no.forEach(o),er=p(Be),ee=s(Be,"P",{});var so=r(ee);tr=i(so,"Configuration objects inherit from "),Rt=s(so,"A",{href:!0});var Ni=r(Rt);or=i(Ni,"PretrainedConfig"),Ni.forEach(o),nr=i(so,` and can be used to control the model outputs. Read the
documentation from `),Qt=s(so,"A",{href:!0});var Si=r(Qt);sr=i(Si,"PretrainedConfig"),Si.forEach(o),rr=i(so," for more information."),so.forEach(o),ar=p(Be),w(be.$$.fragment,Be),Be.forEach(o),In=p(t),te=s(t,"H2",{class:!0});var Jn=r(te);xe=s(Jn,"A",{id:!0,class:!0,href:!0});var Oi=r(xe);Mo=s(Oi,"SPAN",{});var Di=r(Mo);w(lt.$$.fragment,Di),Di.forEach(o),Oi.forEach(o),ir=p(Jn),Po=s(Jn,"SPAN",{});var Bi=r(Po);lr=i(Bi,"ViltFeatureExtractor"),Bi.forEach(o),Jn.forEach(o),zn=p(t),P=s(t,"DIV",{class:!0});var We=r(P);w(dt.$$.fragment,We),dr=p(We),Io=s(We,"P",{});var Wi=r(Io);cr=i(Wi,"Constructs a ViLT feature extractor."),Wi.forEach(o),mr=p(We),ct=s(We,"P",{});var Xn=r(ct);pr=i(Xn,"This feature extractor inherits from "),Ut=s(Xn,"A",{href:!0});var Ri=r(Ut);hr=i(Ri,"FeatureExtractionMixin"),Ri.forEach(o),fr=i(Xn,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Xn.forEach(o),ur=p(We),H=s(We,"DIV",{class:!0});var ro=r(H);w(mt.$$.fragment,ro),gr=p(ro),zo=s(ro,"P",{});var Qi=r(zo);_r=i(Qi,"Main method to prepare for the model one or several image(s)."),Qi.forEach(o),vr=p(ro),w(we.$$.fragment,ro),ro.forEach(o),We.forEach(o),An=p(t),oe=s(t,"H2",{class:!0});var Zn=r(oe);ke=s(Zn,"A",{id:!0,class:!0,href:!0});var Ui=r(ke);Ao=s(Ui,"SPAN",{});var Hi=r(Ao);w(pt.$$.fragment,Hi),Hi.forEach(o),Ui.forEach(o),br=p(Zn),Lo=s(Zn,"SPAN",{});var Ki=r(Lo);xr=i(Ki,"ViltProcessor"),Ki.forEach(o),Zn.forEach(o),Ln=p(t),I=s(t,"DIV",{class:!0});var Re=r(I);w(ht.$$.fragment,Re),wr=p(Re),Co=s(Re,"P",{});var Gi=r(Co);kr=i(Gi,"Constructs a ViLT processor which wraps a BERT tokenizer and ViLT feature extractor into a single processor."),Gi.forEach(o),Tr=p(Re),E=s(Re,"P",{});var Q=r(E);Ht=s(Q,"A",{href:!0});var Ji=r(Ht);yr=i(Ji,"ViltProcessor"),Ji.forEach(o),$r=i(Q," offers all the functionalities of "),Kt=s(Q,"A",{href:!0});var Xi=r(Kt);Vr=i(Xi,"ViltFeatureExtractor"),Xi.forEach(o),Fr=i(Q," and "),Gt=s(Q,"A",{href:!0});var Zi=r(Gt);jr=i(Zi,"BertTokenizerFast"),Zi.forEach(o),Er=i(Q,`. See the
docstring of `),ft=s(Q,"A",{href:!0});var bi=r(ft);qo=s(bi,"STRONG",{});var Yi=r(qo);Mr=i(Yi,"call"),Yi.forEach(o),Pr=i(bi,"()"),bi.forEach(o),Ir=i(Q," and "),No=s(Q,"CODE",{});var el=r(No);zr=i(el,"decode()"),el.forEach(o),Ar=i(Q," for more information."),Q.forEach(o),Lr=p(Re),K=s(Re,"DIV",{class:!0});var ao=r(K);w(ut.$$.fragment,ao),Cr=p(ao),ne=s(ao,"P",{});var io=r(ne);qr=i(io,"This method uses "),Te=s(io,"A",{href:!0});var Yn=r(Te);Nr=i(Yn,"ViltFeatureExtractor."),So=s(Yn,"STRONG",{});var tl=r(So);Sr=i(tl,"call"),tl.forEach(o),Or=i(Yn,"()"),Yn.forEach(o),Dr=i(io,` method to prepare image(s) for the model, and
`),ye=s(io,"A",{href:!0});var es=r(ye);Br=i(es,"BertTokenizerFast."),Oo=s(es,"STRONG",{});var ol=r(Oo);Wr=i(ol,"call"),ol.forEach(o),Rr=i(es,"()"),es.forEach(o),Qr=i(io," to prepare text for the model."),io.forEach(o),Ur=p(ao),Do=s(ao,"P",{});var nl=r(Do);Hr=i(nl,"Please refer to the docstring of the above two methods for more information."),nl.forEach(o),ao.forEach(o),Re.forEach(o),Cn=p(t),se=s(t,"H2",{class:!0});var ts=r(se);$e=s(ts,"A",{id:!0,class:!0,href:!0});var sl=r($e);Bo=s(sl,"SPAN",{});var rl=r(Bo);w(gt.$$.fragment,rl),rl.forEach(o),sl.forEach(o),Kr=p(ts),Wo=s(ts,"SPAN",{});var al=r(Wo);Gr=i(al,"ViltModel"),al.forEach(o),ts.forEach(o),qn=p(t),W=s(t,"DIV",{class:!0});var lo=r(W);w(_t.$$.fragment,lo),Jr=p(lo),vt=s(lo,"P",{});var os=r(vt);Xr=i(os,`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ro=s(os,"CODE",{});var il=r(Ro);Zr=i(il,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),il.forEach(o),Yr=i(os,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),os.forEach(o),ea=p(lo),q=s(lo,"DIV",{class:!0});var Qe=r(q);w(bt.$$.fragment,Qe),ta=p(Qe),re=s(Qe,"P",{});var co=r(re);oa=i(co,"The "),Jt=s(co,"A",{href:!0});var ll=r(Jt);na=i(ll,"ViltModel"),ll.forEach(o),sa=i(co," forward method, overrides the "),Qo=s(co,"CODE",{});var dl=r(Qo);ra=i(dl,"__call__"),dl.forEach(o),aa=i(co," special method."),co.forEach(o),ia=p(Qe),w(Ve.$$.fragment,Qe),la=p(Qe),w(Fe.$$.fragment,Qe),Qe.forEach(o),lo.forEach(o),Nn=p(t),ae=s(t,"H2",{class:!0});var ns=r(ae);je=s(ns,"A",{id:!0,class:!0,href:!0});var cl=r(je);Uo=s(cl,"SPAN",{});var ml=r(Uo);w(xt.$$.fragment,ml),ml.forEach(o),cl.forEach(o),da=p(ns),Ho=s(ns,"SPAN",{});var pl=r(Ho);ca=i(pl,"ViltForMaskedLM"),pl.forEach(o),ns.forEach(o),Sn=p(t),z=s(t,"DIV",{class:!0});var Ue=r(z);w(wt.$$.fragment,Ue),ma=p(Ue),Ko=s(Ue,"P",{});var hl=r(Ko);pa=i(hl,"ViLT Model with a language modeling head on top as done during pretraining."),hl.forEach(o),ha=p(Ue),kt=s(Ue,"P",{});var ss=r(kt);fa=i(ss,"This model is a PyTorch "),Go=s(ss,"CODE",{});var fl=r(Go);ua=i(fl,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),fl.forEach(o),ga=i(ss,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ss.forEach(o),_a=p(Ue),N=s(Ue,"DIV",{class:!0});var He=r(N);w(Tt.$$.fragment,He),va=p(He),ie=s(He,"P",{});var mo=r(ie);ba=i(mo,"The "),Xt=s(mo,"A",{href:!0});var ul=r(Xt);xa=i(ul,"ViltForMaskedLM"),ul.forEach(o),wa=i(mo," forward method, overrides the "),Jo=s(mo,"CODE",{});var gl=r(Jo);ka=i(gl,"__call__"),gl.forEach(o),Ta=i(mo," special method."),mo.forEach(o),ya=p(He),w(Ee.$$.fragment,He),$a=p(He),w(Me.$$.fragment,He),He.forEach(o),Ue.forEach(o),On=p(t),le=s(t,"H2",{class:!0});var rs=r(le);Pe=s(rs,"A",{id:!0,class:!0,href:!0});var _l=r(Pe);Xo=s(_l,"SPAN",{});var vl=r(Xo);w(yt.$$.fragment,vl),vl.forEach(o),_l.forEach(o),Va=p(rs),Zo=s(rs,"SPAN",{});var bl=r(Zo);Fa=i(bl,"ViltForQuestionAnswering"),bl.forEach(o),rs.forEach(o),Dn=p(t),A=s(t,"DIV",{class:!0});var Ke=r(A);w($t.$$.fragment,Ke),ja=p(Ke),Yo=s(Ke,"P",{});var xl=r(Yo);Ea=i(xl,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`),xl.forEach(o),Ma=p(Ke),Vt=s(Ke,"P",{});var as=r(Vt);Pa=i(as,"This model is a PyTorch "),en=s(as,"CODE",{});var wl=r(en);Ia=i(wl,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),wl.forEach(o),za=i(as,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),as.forEach(o),Aa=p(Ke),S=s(Ke,"DIV",{class:!0});var Ge=r(S);w(Ft.$$.fragment,Ge),La=p(Ge),de=s(Ge,"P",{});var po=r(de);Ca=i(po,"The "),Zt=s(po,"A",{href:!0});var kl=r(Zt);qa=i(kl,"ViltForQuestionAnswering"),kl.forEach(o),Na=i(po," forward method, overrides the "),tn=s(po,"CODE",{});var Tl=r(tn);Sa=i(Tl,"__call__"),Tl.forEach(o),Oa=i(po," special method."),po.forEach(o),Da=p(Ge),w(Ie.$$.fragment,Ge),Ba=p(Ge),w(ze.$$.fragment,Ge),Ge.forEach(o),Ke.forEach(o),Bn=p(t),ce=s(t,"H2",{class:!0});var is=r(ce);Ae=s(is,"A",{id:!0,class:!0,href:!0});var yl=r(Ae);on=s(yl,"SPAN",{});var $l=r(on);w(jt.$$.fragment,$l),$l.forEach(o),yl.forEach(o),Wa=p(is),nn=s(is,"SPAN",{});var Vl=r(nn);Ra=i(Vl,"ViltForImagesAndTextClassification"),Vl.forEach(o),is.forEach(o),Wn=p(t),R=s(t,"DIV",{class:!0});var ho=r(R);w(Et.$$.fragment,ho),Qa=p(ho),sn=s(ho,"P",{});var Fl=r(sn);Ua=i(Fl,"Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2."),Fl.forEach(o),Ha=p(ho),O=s(ho,"DIV",{class:!0});var Je=r(O);w(Mt.$$.fragment,Je),Ka=p(Je),me=s(Je,"P",{});var fo=r(me);Ga=i(fo,"The "),Yt=s(fo,"A",{href:!0});var jl=r(Yt);Ja=i(jl,"ViltForImagesAndTextClassification"),jl.forEach(o),Xa=i(fo," forward method, overrides the "),rn=s(fo,"CODE",{});var El=r(rn);Za=i(El,"__call__"),El.forEach(o),Ya=i(fo," special method."),fo.forEach(o),ei=p(Je),w(Le.$$.fragment,Je),ti=p(Je),w(Ce.$$.fragment,Je),Je.forEach(o),ho.forEach(o),Rn=p(t),pe=s(t,"H2",{class:!0});var ls=r(pe);qe=s(ls,"A",{id:!0,class:!0,href:!0});var Ml=r(qe);an=s(Ml,"SPAN",{});var Pl=r(an);w(Pt.$$.fragment,Pl),Pl.forEach(o),Ml.forEach(o),oi=p(ls),ln=s(ls,"SPAN",{});var Il=r(ln);ni=i(Il,"ViltForImageAndTextRetrieval"),Il.forEach(o),ls.forEach(o),Qn=p(t),L=s(t,"DIV",{class:!0});var Xe=r(L);w(It.$$.fragment,Xe),si=p(Xe),dn=s(Xe,"P",{});var zl=r(dn);ri=i(zl,`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`),zl.forEach(o),ai=p(Xe),zt=s(Xe,"P",{});var ds=r(zt);ii=i(ds,"This model is a PyTorch "),cn=s(ds,"CODE",{});var Al=r(cn);li=i(Al,"torch.nn.Module <https://pytorch.org/docs/stable/nn.html#torch.nn.Module>"),Al.forEach(o),di=i(ds,`_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ds.forEach(o),ci=p(Xe),D=s(Xe,"DIV",{class:!0});var Ze=r(D);w(At.$$.fragment,Ze),mi=p(Ze),he=s(Ze,"P",{});var uo=r(he);pi=i(uo,"The "),eo=s(uo,"A",{href:!0});var Ll=r(eo);hi=i(Ll,"ViltForImageAndTextRetrieval"),Ll.forEach(o),fi=i(uo," forward method, overrides the "),mn=s(uo,"CODE",{});var Cl=r(mn);ui=i(Cl,"__call__"),Cl.forEach(o),gi=i(uo," special method."),uo.forEach(o),_i=p(Ze),w(Ne.$$.fragment,Ze),vi=p(Ze),w(Se.$$.fragment,Ze),Ze.forEach(o),Xe.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(od)),c(h,"id","vilt"),c(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(h,"href","#vilt"),c(g,"class","relative group"),c(fe,"id","overview"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#overview"),c(J,"class","relative group"),c(et,"href","https://arxiv.org/abs/2102.03334"),c(et,"rel","nofollow"),c(ot,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT"),c(ot,"rel","nofollow"),c(Dt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltProcessor"),c(Bt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltProcessor"),Dl(ge.src,xi="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||c(ge,"src",xi),c(ge,"alt","drawing"),c(ge,"width","600"),c(Wt,"href","https://arxiv.org/abs/2102.03334"),c(nt,"href","https://huggingface.co/nielsr"),c(nt,"rel","nofollow"),c(st,"href","https://github.com/dandelin/ViLT"),c(st,"rel","nofollow"),c(ve,"id","transformers.ViltConfig"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.ViltConfig"),c(Z,"class","relative group"),c(it,"href","https://huggingface.co/dandelin/vilt-b32-mlm"),c(it,"rel","nofollow"),c(Rt,"href","/docs/transformers/pr_17895/en/main_classes/configuration#transformers.PretrainedConfig"),c(Qt,"href","/docs/transformers/pr_17895/en/main_classes/configuration#transformers.PretrainedConfig"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.ViltFeatureExtractor"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.ViltFeatureExtractor"),c(te,"class","relative group"),c(Ut,"href","/docs/transformers/pr_17895/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ke,"id","transformers.ViltProcessor"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.ViltProcessor"),c(oe,"class","relative group"),c(Ht,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltProcessor"),c(Kt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor"),c(Gt,"href","/docs/transformers/pr_17895/en/model_doc/bert#transformers.BertTokenizerFast"),c(ft,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltProcessor.__call__"),c(Te,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltFeatureExtractor.__call__"),c(ye,"href","/docs/transformers/pr_17895/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.ViltModel"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.ViltModel"),c(se,"class","relative group"),c(Jt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltModel"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.ViltForMaskedLM"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.ViltForMaskedLM"),c(ae,"class","relative group"),c(Xt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltForMaskedLM"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"id","transformers.ViltForQuestionAnswering"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.ViltForQuestionAnswering"),c(le,"class","relative group"),c(Zt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltForQuestionAnswering"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.ViltForImagesAndTextClassification"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.ViltForImagesAndTextClassification"),c(ce,"class","relative group"),c(Yt,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"id","transformers.ViltForImageAndTextRetrieval"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#transformers.ViltForImageAndTextRetrieval"),c(pe,"class","relative group"),c(eo,"href","/docs/transformers/pr_17895/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),_(t,b,u),_(t,g,u),e(g,h),e(h,v),k(l,v,null),e(g,f),e(g,F),e(F,cs),_(t,wn,u),_(t,J,u),e(J,fe),e(fe,xo),k(Ye,xo,null),e(J,ms),e(J,wo),e(wo,ps),_(t,kn,u),_(t,ue,u),e(ue,hs),e(ue,et),e(et,fs),e(ue,us),_(t,Tn,u),_(t,Nt,u),e(Nt,gs),_(t,yn,u),_(t,St,u),e(St,ko),e(ko,_s),_(t,$n,u),_(t,Ot,u),e(Ot,vs),_(t,Vn,u),_(t,C,u),e(C,tt),e(tt,bs),e(tt,ot),e(ot,xs),e(tt,ws),e(C,ks),e(C,B),e(B,Ts),e(B,To),e(To,ys),e(B,$s),e(B,yo),e(yo,Vs),e(B,Fs),e(B,Dt),e(Dt,js),e(B,Es),e(C,Ms),e(C,X),e(X,Ps),e(X,$o),e($o,Is),e(X,zs),e(X,Bt),e(Bt,As),e(X,Ls),e(C,Cs),e(C,Vo),e(Vo,qs),_(t,Fn,u),_(t,ge,u),_(t,jn,u),_(t,_e,u),e(_e,Ns),e(_e,Wt),e(Wt,Ss),e(_e,Os),_(t,En,u),_(t,U,u),e(U,Ds),e(U,nt),e(nt,Bs),e(U,Ws),e(U,st),e(st,Rs),e(U,Qs),_(t,Mn,u),_(t,Z,u),e(Z,ve),e(ve,Fo),k(rt,Fo,null),e(Z,Us),e(Z,jo),e(jo,Hs),_(t,Pn,u),_(t,M,u),k(at,M,null),e(M,Ks),e(M,Y),e(Y,Gs),e(Y,Eo),e(Eo,Js),e(Y,Xs),e(Y,it),e(it,Zs),e(Y,Ys),e(M,er),e(M,ee),e(ee,tr),e(ee,Rt),e(Rt,or),e(ee,nr),e(ee,Qt),e(Qt,sr),e(ee,rr),e(M,ar),k(be,M,null),_(t,In,u),_(t,te,u),e(te,xe),e(xe,Mo),k(lt,Mo,null),e(te,ir),e(te,Po),e(Po,lr),_(t,zn,u),_(t,P,u),k(dt,P,null),e(P,dr),e(P,Io),e(Io,cr),e(P,mr),e(P,ct),e(ct,pr),e(ct,Ut),e(Ut,hr),e(ct,fr),e(P,ur),e(P,H),k(mt,H,null),e(H,gr),e(H,zo),e(zo,_r),e(H,vr),k(we,H,null),_(t,An,u),_(t,oe,u),e(oe,ke),e(ke,Ao),k(pt,Ao,null),e(oe,br),e(oe,Lo),e(Lo,xr),_(t,Ln,u),_(t,I,u),k(ht,I,null),e(I,wr),e(I,Co),e(Co,kr),e(I,Tr),e(I,E),e(E,Ht),e(Ht,yr),e(E,$r),e(E,Kt),e(Kt,Vr),e(E,Fr),e(E,Gt),e(Gt,jr),e(E,Er),e(E,ft),e(ft,qo),e(qo,Mr),e(ft,Pr),e(E,Ir),e(E,No),e(No,zr),e(E,Ar),e(I,Lr),e(I,K),k(ut,K,null),e(K,Cr),e(K,ne),e(ne,qr),e(ne,Te),e(Te,Nr),e(Te,So),e(So,Sr),e(Te,Or),e(ne,Dr),e(ne,ye),e(ye,Br),e(ye,Oo),e(Oo,Wr),e(ye,Rr),e(ne,Qr),e(K,Ur),e(K,Do),e(Do,Hr),_(t,Cn,u),_(t,se,u),e(se,$e),e($e,Bo),k(gt,Bo,null),e(se,Kr),e(se,Wo),e(Wo,Gr),_(t,qn,u),_(t,W,u),k(_t,W,null),e(W,Jr),e(W,vt),e(vt,Xr),e(vt,Ro),e(Ro,Zr),e(vt,Yr),e(W,ea),e(W,q),k(bt,q,null),e(q,ta),e(q,re),e(re,oa),e(re,Jt),e(Jt,na),e(re,sa),e(re,Qo),e(Qo,ra),e(re,aa),e(q,ia),k(Ve,q,null),e(q,la),k(Fe,q,null),_(t,Nn,u),_(t,ae,u),e(ae,je),e(je,Uo),k(xt,Uo,null),e(ae,da),e(ae,Ho),e(Ho,ca),_(t,Sn,u),_(t,z,u),k(wt,z,null),e(z,ma),e(z,Ko),e(Ko,pa),e(z,ha),e(z,kt),e(kt,fa),e(kt,Go),e(Go,ua),e(kt,ga),e(z,_a),e(z,N),k(Tt,N,null),e(N,va),e(N,ie),e(ie,ba),e(ie,Xt),e(Xt,xa),e(ie,wa),e(ie,Jo),e(Jo,ka),e(ie,Ta),e(N,ya),k(Ee,N,null),e(N,$a),k(Me,N,null),_(t,On,u),_(t,le,u),e(le,Pe),e(Pe,Xo),k(yt,Xo,null),e(le,Va),e(le,Zo),e(Zo,Fa),_(t,Dn,u),_(t,A,u),k($t,A,null),e(A,ja),e(A,Yo),e(Yo,Ea),e(A,Ma),e(A,Vt),e(Vt,Pa),e(Vt,en),e(en,Ia),e(Vt,za),e(A,Aa),e(A,S),k(Ft,S,null),e(S,La),e(S,de),e(de,Ca),e(de,Zt),e(Zt,qa),e(de,Na),e(de,tn),e(tn,Sa),e(de,Oa),e(S,Da),k(Ie,S,null),e(S,Ba),k(ze,S,null),_(t,Bn,u),_(t,ce,u),e(ce,Ae),e(Ae,on),k(jt,on,null),e(ce,Wa),e(ce,nn),e(nn,Ra),_(t,Wn,u),_(t,R,u),k(Et,R,null),e(R,Qa),e(R,sn),e(sn,Ua),e(R,Ha),e(R,O),k(Mt,O,null),e(O,Ka),e(O,me),e(me,Ga),e(me,Yt),e(Yt,Ja),e(me,Xa),e(me,rn),e(rn,Za),e(me,Ya),e(O,ei),k(Le,O,null),e(O,ti),k(Ce,O,null),_(t,Rn,u),_(t,pe,u),e(pe,qe),e(qe,an),k(Pt,an,null),e(pe,oi),e(pe,ln),e(ln,ni),_(t,Qn,u),_(t,L,u),k(It,L,null),e(L,si),e(L,dn),e(dn,ri),e(L,ai),e(L,zt),e(zt,ii),e(zt,cn),e(cn,li),e(zt,di),e(L,ci),e(L,D),k(At,D,null),e(D,mi),e(D,he),e(he,pi),e(he,eo),e(eo,hi),e(he,fi),e(he,mn),e(mn,ui),e(he,gi),e(D,_i),k(Ne,D,null),e(D,vi),k(Se,D,null),Un=!0},p(t,[u]){const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:t}),be.$set(Lt);const pn={};u&2&&(pn.$$scope={dirty:u,ctx:t}),we.$set(pn);const hn={};u&2&&(hn.$$scope={dirty:u,ctx:t}),Ve.$set(hn);const fn={};u&2&&(fn.$$scope={dirty:u,ctx:t}),Fe.$set(fn);const Ct={};u&2&&(Ct.$$scope={dirty:u,ctx:t}),Ee.$set(Ct);const un={};u&2&&(un.$$scope={dirty:u,ctx:t}),Me.$set(un);const gn={};u&2&&(gn.$$scope={dirty:u,ctx:t}),Ie.$set(gn);const _n={};u&2&&(_n.$$scope={dirty:u,ctx:t}),ze.$set(_n);const qt={};u&2&&(qt.$$scope={dirty:u,ctx:t}),Le.$set(qt);const vn={};u&2&&(vn.$$scope={dirty:u,ctx:t}),Ce.$set(vn);const bn={};u&2&&(bn.$$scope={dirty:u,ctx:t}),Ne.$set(bn);const xn={};u&2&&(xn.$$scope={dirty:u,ctx:t}),Se.$set(xn)},i(t){Un||(T(l.$$.fragment,t),T(Ye.$$.fragment,t),T(rt.$$.fragment,t),T(at.$$.fragment,t),T(be.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(mt.$$.fragment,t),T(we.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(ut.$$.fragment,t),T(gt.$$.fragment,t),T(_t.$$.fragment,t),T(bt.$$.fragment,t),T(Ve.$$.fragment,t),T(Fe.$$.fragment,t),T(xt.$$.fragment,t),T(wt.$$.fragment,t),T(Tt.$$.fragment,t),T(Ee.$$.fragment,t),T(Me.$$.fragment,t),T(yt.$$.fragment,t),T($t.$$.fragment,t),T(Ft.$$.fragment,t),T(Ie.$$.fragment,t),T(ze.$$.fragment,t),T(jt.$$.fragment,t),T(Et.$$.fragment,t),T(Mt.$$.fragment,t),T(Le.$$.fragment,t),T(Ce.$$.fragment,t),T(Pt.$$.fragment,t),T(It.$$.fragment,t),T(At.$$.fragment,t),T(Ne.$$.fragment,t),T(Se.$$.fragment,t),Un=!0)},o(t){y(l.$$.fragment,t),y(Ye.$$.fragment,t),y(rt.$$.fragment,t),y(at.$$.fragment,t),y(be.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),y(mt.$$.fragment,t),y(we.$$.fragment,t),y(pt.$$.fragment,t),y(ht.$$.fragment,t),y(ut.$$.fragment,t),y(gt.$$.fragment,t),y(_t.$$.fragment,t),y(bt.$$.fragment,t),y(Ve.$$.fragment,t),y(Fe.$$.fragment,t),y(xt.$$.fragment,t),y(wt.$$.fragment,t),y(Tt.$$.fragment,t),y(Ee.$$.fragment,t),y(Me.$$.fragment,t),y(yt.$$.fragment,t),y($t.$$.fragment,t),y(Ft.$$.fragment,t),y(Ie.$$.fragment,t),y(ze.$$.fragment,t),y(jt.$$.fragment,t),y(Et.$$.fragment,t),y(Mt.$$.fragment,t),y(Le.$$.fragment,t),y(Ce.$$.fragment,t),y(Pt.$$.fragment,t),y(It.$$.fragment,t),y(At.$$.fragment,t),y(Ne.$$.fragment,t),y(Se.$$.fragment,t),Un=!1},d(t){o(d),t&&o(b),t&&o(g),$(l),t&&o(wn),t&&o(J),$(Ye),t&&o(kn),t&&o(ue),t&&o(Tn),t&&o(Nt),t&&o(yn),t&&o(St),t&&o($n),t&&o(Ot),t&&o(Vn),t&&o(C),t&&o(Fn),t&&o(ge),t&&o(jn),t&&o(_e),t&&o(En),t&&o(U),t&&o(Mn),t&&o(Z),$(rt),t&&o(Pn),t&&o(M),$(at),$(be),t&&o(In),t&&o(te),$(lt),t&&o(zn),t&&o(P),$(dt),$(mt),$(we),t&&o(An),t&&o(oe),$(pt),t&&o(Ln),t&&o(I),$(ht),$(ut),t&&o(Cn),t&&o(se),$(gt),t&&o(qn),t&&o(W),$(_t),$(bt),$(Ve),$(Fe),t&&o(Nn),t&&o(ae),$(xt),t&&o(Sn),t&&o(z),$(wt),$(Tt),$(Ee),$(Me),t&&o(On),t&&o(le),$(yt),t&&o(Dn),t&&o(A),$($t),$(Ft),$(Ie),$(ze),t&&o(Bn),t&&o(ce),$(jt),t&&o(Wn),t&&o(R),$(Et),$(Mt),$(Le),$(Ce),t&&o(Rn),t&&o(pe),$(Pt),t&&o(Qn),t&&o(L),$(It),$(At),$(Ne),$(Se)}}}const od={local:"vilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViltConfig",title:"ViltConfig"},{local:"transformers.ViltFeatureExtractor",title:"ViltFeatureExtractor"},{local:"transformers.ViltProcessor",title:"ViltProcessor"},{local:"transformers.ViltModel",title:"ViltModel"},{local:"transformers.ViltForMaskedLM",title:"ViltForMaskedLM"},{local:"transformers.ViltForQuestionAnswering",title:"ViltForQuestionAnswering"},{local:"transformers.ViltForImagesAndTextClassification",title:"ViltForImagesAndTextClassification"},{local:"transformers.ViltForImageAndTextRetrieval",title:"ViltForImageAndTextRetrieval"}],title:"ViLT"};function nd(V){return Bl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cd extends ql{constructor(d){super();Nl(this,d,nd,td,Sl,{})}}export{cd as default,od as metadata};
