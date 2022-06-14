import{S as bl,i as vl,s as kl,e as a,k as u,w as k,t as i,M as $l,c as r,d as t,m as f,a as l,x as $,h as d,b as h,G as e,g as v,y as w,q as y,o as T,B,v as wl,L as ee}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ht}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Z}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function yl(C){let n,g,c,p,b;return p=new oe({props:{code:`from transformers import BloomModel, BloomConfig

# Initializing a Bloom configuration
configuration = BloomConfig()

# Initializing a model from the configuration
model = BloomModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomModel, BloomConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bloom configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BloomConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){n=a("p"),g=i("Example:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Example:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function Tl(C){let n,g,c,p,b;return{c(){n=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=l(c);p=d(F,"Module"),F.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(s,m){v(s,n,m),e(n,g),e(n,c),e(c,p),e(n,b)},d(s){s&&t(n)}}}function Bl(C){let n,g,c,p,b;return p=new oe({props:{code:`from transformers import BloomTokenizer, BloomModel
import torch

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomModel.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=a("p"),g=i("Example:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Example:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function Cl(C){let n,g,c,p,b;return p=new oe({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){n=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function Fl(C){let n,g,c,p,b,s,m,F;return{c(){n=a("p"),g=i("When used with "),c=a("code"),p=i("is_split_into_words=True"),b=i(", this tokenizer needs to be instantiated with "),s=a("code"),m=i("add_prefix_space=True"),F=i(".")},l(te){n=r(te,"P",{});var O=l(n);g=d(O,"When used with "),c=r(O,"CODE",{});var H=l(c);p=d(H,"is_split_into_words=True"),H.forEach(t),b=d(O,", this tokenizer needs to be instantiated with "),s=r(O,"CODE",{});var R=l(s);m=d(R,"add_prefix_space=True"),R.forEach(t),F=d(O,"."),O.forEach(t)},m(te,O){v(te,n,O),e(n,g),e(n,c),e(c,p),e(n,b),e(n,s),e(s,m),e(n,F)},d(te){te&&t(n)}}}function zl(C){let n,g,c,p,b;return{c(){n=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=l(c);p=d(F,"Module"),F.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(s,m){v(s,n,m),e(n,g),e(n,c),e(c,p),e(n,b)},d(s){s&&t(n)}}}function xl(C){let n,g,c,p,b;return p=new oe({props:{code:`import torch
from transformers import BloomTokenizer, BloomForCausalLM

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomForCausalLM.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){n=a("p"),g=i("Example:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Example:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function ql(C){let n,g,c,p,b;return{c(){n=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=l(c);p=d(F,"Module"),F.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(s,m){v(s,n,m),e(n,g),e(n,c),e(c,p),e(n,b)},d(s){s&&t(n)}}}function Ml(C){let n,g,c,p,b;return p=new oe({props:{code:`import torch
from transformers import BloomTokenizer, BloomForSequenceClassification

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomForSequenceClassification.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=a("p"),g=i("Example of single-label classification:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Example of single-label classification:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function El(C){let n,g;return n=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained("bigscience/Bloom", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(n.$$.fragment)},l(c){$(n.$$.fragment,c)},m(c,p){w(n,c,p),g=!0},p:ee,i(c){g||(y(n.$$.fragment,c),g=!0)},o(c){T(n.$$.fragment,c),g=!1},d(c){B(n,c)}}}function jl(C){let n,g,c,p,b;return p=new oe({props:{code:`import torch
from transformers import BloomTokenizer, BloomForSequenceClassification

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomForSequenceClassification.from_pretrained("bigscience/Bloom", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=a("p"),g=i("Example of multi-label classification:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Example of multi-label classification:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function Pl(C){let n,g;return n=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained(
    "bigscience/Bloom", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bigscience/Bloom&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(n.$$.fragment)},l(c){$(n.$$.fragment,c)},m(c,p){w(n,c,p),g=!0},p:ee,i(c){g||(y(n.$$.fragment,c),g=!0)},o(c){T(n.$$.fragment,c),g=!1},d(c){B(n,c)}}}function Sl(C){let n,g,c,p,b;return{c(){n=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=l(c);p=d(F,"Module"),F.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(s,m){v(s,n,m),e(n,g),e(n,c),e(c,p),e(n,b)},d(s){s&&t(n)}}}function Al(C){let n,g,c,p,b;return p=new oe({props:{code:`from transformers import BloomTokenizer, BloomForTokenClassification
import torch

tokenizer = BloomTokenizer.from_pretrained("bigscience/Bloom")
model = BloomForTokenClassification.from_pretrained("bigscience/Bloom")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, BloomForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){n=a("p"),g=i("Example:"),c=u(),k(p.$$.fragment)},l(s){n=r(s,"P",{});var m=l(n);g=d(m,"Example:"),m.forEach(t),c=f(s),$(p.$$.fragment,s)},m(s,m){v(s,n,m),e(n,g),v(s,c,m),w(p,s,m),b=!0},p:ee,i(s){b||(y(p.$$.fragment,s),b=!0)},o(s){T(p.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(c),B(p,s)}}}function Il(C){let n,g;return n=new oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(n.$$.fragment)},l(c){$(n.$$.fragment,c)},m(c,p){w(n,c,p),g=!0},p:ee,i(c){g||(y(n.$$.fragment,c),g=!0)},o(c){T(n.$$.fragment,c),g=!1},d(c){B(n,c)}}}function Nl(C){let n,g,c,p,b,s,m,F,te,O,H,R,Xo,De,ws,Zo,ys,Vt,fe,Ts,We,Bs,Cs,Ut,M,et,He,Fs,zs,ot,Ve,xs,qs,tt,Ue,Ms,Es,st,Re,js,Ps,nt,Ge,Ss,As,Mo,Ye,Is,Ns,Rt,se,ge,at,Je,Ls,rt,Os,Gt,D,Ke,Ds,ne,Ws,Eo,Hs,Vs,Qe,Us,Rs,Gs,ae,Ys,jo,Js,Ks,Po,Qs,Xs,Zs,_e,Yt,re,be,lt,Xe,en,it,on,Jt,E,Ze,tn,dt,sn,nn,eo,an,So,rn,ln,dn,oo,cn,to,pn,mn,hn,V,so,un,le,fn,Ao,gn,_n,ct,bn,vn,kn,ve,$n,ke,Kt,ie,$e,pt,no,wn,mt,yn,Qt,z,ao,Tn,ro,Bn,ht,Cn,Fn,zn,ut,xn,qn,we,Mn,lo,En,ft,jn,Pn,Sn,ye,An,io,In,Io,Nn,Ln,Xt,de,Te,gt,co,On,_t,Dn,Zt,j,po,Wn,bt,Hn,Vn,mo,Un,No,Rn,Gn,Yn,ho,Jn,uo,Kn,Qn,Xn,U,fo,Zn,ce,ea,Lo,oa,ta,vt,sa,na,aa,Be,ra,Ce,es,pe,Fe,kt,go,la,$t,ia,os,x,_o,da,wt,ca,pa,Oo,Do,ma,ha,ua,W,fa,yt,ga,_a,Tt,ba,va,Bt,ka,$a,Ct,wa,ya,Ta,bo,Ba,Wo,Ca,Fa,za,vo,xa,ko,qa,Ma,Ea,q,$o,ja,me,Pa,Ho,Sa,Aa,Ft,Ia,Na,La,ze,Oa,xe,Da,qe,Wa,Me,Ha,Ee,ts,he,je,zt,wo,Va,xt,Ua,ss,P,yo,Ra,qt,Ga,Ya,To,Ja,Vo,Ka,Qa,Xa,Bo,Za,Co,er,or,tr,A,Fo,sr,ue,nr,Uo,ar,rr,Mt,lr,ir,dr,Pe,cr,Se,pr,Ae,ns;return s=new Oe({}),De=new Oe({}),Je=new Oe({}),Ke=new X({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"masked_softmax_fusion",val:" = True"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"attention_softmax_in_fp32",val:" = True"},{name:"pretraining_tp",val:" = 1"},{name:"dtype",val:" = 'bfloat16'"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the Bloom model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BloomConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.BloomConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BloomConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BloomConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BloomConfig.skip_bias_add",description:`<strong>skip_bias_add</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for each linear layer in the transformer blocks`,name:"skip_bias_add"},{anchor:"transformers.BloomConfig.skip_bias_add_qkv",description:`<strong>skip_bias_add_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for the first linear layer in the transformer blocks`,name:"skip_bias_add_qkv"},{anchor:"transformers.BloomConfig.attention_softmax_in_fp32",description:`<strong>attention_softmax_in_fp32</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code> and the <code>dtype</code> is set to <code>float16</code> it will scale the input of the Softmax function to
<code>fp32</code>`,name:"attention_softmax_in_fp32"},{anchor:"transformers.BloomConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function on the bias dropout.`,name:"hidden_dropout"},{anchor:"transformers.BloomConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BloomConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.dtype",description:`<strong>dtype</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bfloat16&quot;</code>) &#x2014;
Precision that has been used for the model&#x2019;s training in Megatron. Please load the model in the correct
precision by doing <code>model = BloomModel.from_pretrained(model_name, torch_dtype=&quot;auto&quot;)</code>.\``,name:"dtype"},{anchor:"transformers.BloomConfig.pretraining_tp",description:`<strong>pretraining_tp</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
Experimental feature. Tensor parallelism rank used during pretraining with Megatron. Please refer to <a href="https://huggingface.co/docs/transformers/parallelism" rel="nofollow">this
document</a> to understand more about it. This value is
necessary to ensure exact reproducibility of the pretraining results. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. Note also that this is enabled only when
<code>slow_but_exact=True</code>.`,name:"pretraining_tp"},{anchor:"transformers.BloomConfig.slow_but_exact",description:`<strong>slow_but_exact</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Experimental feature. Whether to use slow but exact implementation of the attention mechanism. While
merging the TP rank tensors, due to slicing operations the results may be slightly different between the
model trained on Megatron and our model. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. A solution to obtain more accurate results is to
enable this feature. Enabling this will hurt the computational time of the inference. Will be probably
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/configuration_bloom.py#L32"}}),_e=new Z({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[yl]},$$scope:{ctx:C}}}),Xe=new Oe({}),Ze=new X({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L686"}}),so=new X({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17625/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17625/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17625/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L715",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17625/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17625/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new Ht({props:{$$slots:{default:[Tl]},$$scope:{ctx:C}}}),ke=new Z({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[Bl]},$$scope:{ctx:C}}}),no=new Oe({}),ao=new X({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BloomTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BloomTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BloomTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BloomTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.BloomTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BloomTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Bloom tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BloomTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/tokenization_bloom_fast.py#L59"}}),we=new Z({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[Cl]},$$scope:{ctx:C}}}),ye=new Ht({props:{$$slots:{default:[Fl]},$$scope:{ctx:C}}}),co=new Oe({}),po=new X({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L849"}}),fo=new X({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17625/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17625/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17625/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17625/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17625/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new Ht({props:{$$slots:{default:[zl]},$$scope:{ctx:C}}}),Ce=new Z({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[xl]},$$scope:{ctx:C}}}),go=new Oe({}),_o=new X({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L984"}}),$o=new X({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17625/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17625/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17625/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L996",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new Ht({props:{$$slots:{default:[ql]},$$scope:{ctx:C}}}),xe=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[Ml]},$$scope:{ctx:C}}}),qe=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[El]},$$scope:{ctx:C}}}),Me=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-3",$$slots:{default:[jl]},$$scope:{ctx:C}}}),Ee=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-4",$$slots:{default:[Pl]},$$scope:{ctx:C}}}),wo=new Oe({}),yo=new X({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L1105"}}),Fo=new X({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17625/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17625/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17625/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17625/src/transformers/models/bloom/modeling_bloom.py#L1125",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17625/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17625/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new Ht({props:{$$slots:{default:[Sl]},$$scope:{ctx:C}}}),Se=new Z({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[Al]},$$scope:{ctx:C}}}),Ae=new Z({props:{anchor:"transformers.BloomForTokenClassification.forward.example-2",$$slots:{default:[Il]},$$scope:{ctx:C}}}),{c(){n=a("meta"),g=u(),c=a("h1"),p=a("a"),b=a("span"),k(s.$$.fragment),m=u(),F=a("span"),te=i("BLOOM"),O=u(),H=a("h2"),R=a("a"),Xo=a("span"),k(De.$$.fragment),ws=u(),Zo=a("span"),ys=i("Overview"),Vt=u(),fe=a("p"),Ts=i("The BLOOM model has been proposed with its various versions through the "),We=a("a"),Bs=i("BigScience Workshop"),Cs=i(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),Ut=u(),M=a("ul"),et=a("li"),He=a("a"),Fs=i("bloom-350m"),zs=u(),ot=a("li"),Ve=a("a"),xs=i("bloom-760m"),qs=u(),tt=a("li"),Ue=a("a"),Ms=i("bloom-1b3"),Es=u(),st=a("li"),Re=a("a"),js=i("bloom-2b5"),Ps=u(),nt=a("li"),Ge=a("a"),Ss=i("bloom-6b3"),As=u(),Mo=a("li"),Ye=a("a"),Is=i("bloom"),Ns=i(" (175B parameters)"),Rt=u(),se=a("h2"),ge=a("a"),at=a("span"),k(Je.$$.fragment),Ls=u(),rt=a("span"),Os=i("BloomConfig"),Gt=u(),D=a("div"),k(Ke.$$.fragment),Ds=u(),ne=a("p"),Ws=i("This is the configuration class to store the configuration of a "),Eo=a("a"),Hs=i("BloomModel"),Vs=i(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),Qe=a("a"),Us=i("bigscience/bloom"),Rs=i("."),Gs=u(),ae=a("p"),Ys=i("Configuration objects inherit from "),jo=a("a"),Js=i("PretrainedConfig"),Ks=i(` and can be used to control the model outputs. Read the
documentation from `),Po=a("a"),Qs=i("PretrainedConfig"),Xs=i(" for more information."),Zs=u(),k(_e.$$.fragment),Yt=u(),re=a("h2"),be=a("a"),lt=a("span"),k(Xe.$$.fragment),en=u(),it=a("span"),on=i("BloomModel"),Jt=u(),E=a("div"),k(Ze.$$.fragment),tn=u(),dt=a("p"),sn=i("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),nn=u(),eo=a("p"),an=i("This model inherits from "),So=a("a"),rn=i("PreTrainedModel"),ln=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),dn=u(),oo=a("p"),cn=i("This model is also a PyTorch "),to=a("a"),pn=i("torch.nn.Module"),mn=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hn=u(),V=a("div"),k(so.$$.fragment),un=u(),le=a("p"),fn=i("The "),Ao=a("a"),gn=i("BloomModel"),_n=i(" forward method, overrides the "),ct=a("code"),bn=i("__call__"),vn=i(" special method."),kn=u(),k(ve.$$.fragment),$n=u(),k(ke.$$.fragment),Kt=u(),ie=a("h2"),$e=a("a"),pt=a("span"),k(no.$$.fragment),wn=u(),mt=a("span"),yn=i("BloomTokenizerFast"),Qt=u(),z=a("div"),k(ao.$$.fragment),Tn=u(),ro=a("p"),Bn=i("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),ht=a("em"),Cn=i("tokenizers"),Fn=i(` library). Based on byte-level
Byte-Pair-Encoding.`),zn=u(),ut=a("p"),xn=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),qn=u(),k(we.$$.fragment),Mn=u(),lo=a("p"),En=i("You can get around that behavior by passing "),ft=a("code"),jn=i("add_prefix_space=True"),Pn=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Sn=u(),k(ye.$$.fragment),An=u(),io=a("p"),In=i("This tokenizer inherits from "),Io=a("a"),Nn=i("PreTrainedTokenizerFast"),Ln=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xt=u(),de=a("h2"),Te=a("a"),gt=a("span"),k(co.$$.fragment),On=u(),_t=a("span"),Dn=i("BloomForCausalLM"),Zt=u(),j=a("div"),k(po.$$.fragment),Wn=u(),bt=a("p"),Hn=i(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Vn=u(),mo=a("p"),Un=i("This model inherits from "),No=a("a"),Rn=i("PreTrainedModel"),Gn=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Yn=u(),ho=a("p"),Jn=i("This model is also a PyTorch "),uo=a("a"),Kn=i("torch.nn.Module"),Qn=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xn=u(),U=a("div"),k(fo.$$.fragment),Zn=u(),ce=a("p"),ea=i("The "),Lo=a("a"),oa=i("BloomForCausalLM"),ta=i(" forward method, overrides the "),vt=a("code"),sa=i("__call__"),na=i(" special method."),aa=u(),k(Be.$$.fragment),ra=u(),k(Ce.$$.fragment),es=u(),pe=a("h2"),Fe=a("a"),kt=a("span"),k(go.$$.fragment),la=u(),$t=a("span"),ia=i("BloomForSequenceClassification"),os=u(),x=a("div"),k(_o.$$.fragment),da=u(),wt=a("p"),ca=i("The Bloom Model transformer with a sequence classification head on top (linear layer)."),pa=u(),Oo=a("p"),Do=a("a"),ma=i("BloomForSequenceClassification"),ha=i(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),ua=u(),W=a("p"),fa=i(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),yt=a("code"),ga=i("pad_token_id"),_a=i(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Tt=a("code"),ba=i("pad_token_id"),va=i(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Bt=a("code"),ka=i("inputs_embeds"),$a=i(" are passed instead of "),Ct=a("code"),wa=i("input_ids"),ya=i(`, it does the same (take the last value in
each row of the batch).`),Ta=u(),bo=a("p"),Ba=i("This model inherits from "),Wo=a("a"),Ca=i("PreTrainedModel"),Fa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),za=u(),vo=a("p"),xa=i("This model is also a PyTorch "),ko=a("a"),qa=i("torch.nn.Module"),Ma=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea=u(),q=a("div"),k($o.$$.fragment),ja=u(),me=a("p"),Pa=i("The "),Ho=a("a"),Sa=i("BloomForSequenceClassification"),Aa=i(" forward method, overrides the "),Ft=a("code"),Ia=i("__call__"),Na=i(" special method."),La=u(),k(ze.$$.fragment),Oa=u(),k(xe.$$.fragment),Da=u(),k(qe.$$.fragment),Wa=u(),k(Me.$$.fragment),Ha=u(),k(Ee.$$.fragment),ts=u(),he=a("h2"),je=a("a"),zt=a("span"),k(wo.$$.fragment),Va=u(),xt=a("span"),Ua=i("BloomForTokenClassification"),ss=u(),P=a("div"),k(yo.$$.fragment),Ra=u(),qt=a("p"),Ga=i(`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ya=u(),To=a("p"),Ja=i("This model inherits from "),Vo=a("a"),Ka=i("PreTrainedModel"),Qa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Xa=u(),Bo=a("p"),Za=i("This model is also a PyTorch "),Co=a("a"),er=i("torch.nn.Module"),or=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tr=u(),A=a("div"),k(Fo.$$.fragment),sr=u(),ue=a("p"),nr=i("The "),Uo=a("a"),ar=i("BloomForTokenClassification"),rr=i(" forward method, overrides the "),Mt=a("code"),lr=i("__call__"),ir=i(" special method."),dr=u(),k(Pe.$$.fragment),cr=u(),k(Se.$$.fragment),pr=u(),k(Ae.$$.fragment),this.h()},l(o){const _=$l('[data-svelte="svelte-1phssyn"]',document.head);n=r(_,"META",{name:!0,content:!0}),_.forEach(t),g=f(o),c=r(o,"H1",{class:!0});var zo=l(c);p=r(zo,"A",{id:!0,class:!0,href:!0});var Et=l(p);b=r(Et,"SPAN",{});var jt=l(b);$(s.$$.fragment,jt),jt.forEach(t),Et.forEach(t),m=f(zo),F=r(zo,"SPAN",{});var Pt=l(F);te=d(Pt,"BLOOM"),Pt.forEach(t),zo.forEach(t),O=f(o),H=r(o,"H2",{class:!0});var xo=l(H);R=r(xo,"A",{id:!0,class:!0,href:!0});var St=l(R);Xo=r(St,"SPAN",{});var At=l(Xo);$(De.$$.fragment,At),At.forEach(t),St.forEach(t),ws=f(xo),Zo=r(xo,"SPAN",{});var It=l(Zo);ys=d(It,"Overview"),It.forEach(t),xo.forEach(t),Vt=f(o),fe=r(o,"P",{});var qo=l(fe);Ts=d(qo,"The BLOOM model has been proposed with its various versions through the "),We=r(qo,"A",{href:!0,rel:!0});var Nt=l(We);Bs=d(Nt,"BigScience Workshop"),Nt.forEach(t),Cs=d(qo,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),qo.forEach(t),Ut=f(o),M=r(o,"UL",{});var S=l(M);et=r(S,"LI",{});var Lt=l(et);He=r(Lt,"A",{href:!0,rel:!0});var Ot=l(He);Fs=d(Ot,"bloom-350m"),Ot.forEach(t),Lt.forEach(t),zs=f(S),ot=r(S,"LI",{});var Dt=l(ot);Ve=r(Dt,"A",{href:!0,rel:!0});var Wt=l(Ve);xs=d(Wt,"bloom-760m"),Wt.forEach(t),Dt.forEach(t),qs=f(S),tt=r(S,"LI",{});var ur=l(tt);Ue=r(ur,"A",{href:!0,rel:!0});var fr=l(Ue);Ms=d(fr,"bloom-1b3"),fr.forEach(t),ur.forEach(t),Es=f(S),st=r(S,"LI",{});var gr=l(st);Re=r(gr,"A",{href:!0,rel:!0});var _r=l(Re);js=d(_r,"bloom-2b5"),_r.forEach(t),gr.forEach(t),Ps=f(S),nt=r(S,"LI",{});var br=l(nt);Ge=r(br,"A",{href:!0,rel:!0});var vr=l(Ge);Ss=d(vr,"bloom-6b3"),vr.forEach(t),br.forEach(t),As=f(S),Mo=r(S,"LI",{});var mr=l(Mo);Ye=r(mr,"A",{href:!0,rel:!0});var kr=l(Ye);Is=d(kr,"bloom"),kr.forEach(t),Ns=d(mr," (175B parameters)"),mr.forEach(t),S.forEach(t),Rt=f(o),se=r(o,"H2",{class:!0});var as=l(se);ge=r(as,"A",{id:!0,class:!0,href:!0});var $r=l(ge);at=r($r,"SPAN",{});var wr=l(at);$(Je.$$.fragment,wr),wr.forEach(t),$r.forEach(t),Ls=f(as),rt=r(as,"SPAN",{});var yr=l(rt);Os=d(yr,"BloomConfig"),yr.forEach(t),as.forEach(t),Gt=f(o),D=r(o,"DIV",{class:!0});var Ie=l(D);$(Ke.$$.fragment,Ie),Ds=f(Ie),ne=r(Ie,"P",{});var Ro=l(ne);Ws=d(Ro,"This is the configuration class to store the configuration of a "),Eo=r(Ro,"A",{href:!0});var Tr=l(Eo);Hs=d(Tr,"BloomModel"),Tr.forEach(t),Vs=d(Ro,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),Qe=r(Ro,"A",{href:!0,rel:!0});var Br=l(Qe);Us=d(Br,"bigscience/bloom"),Br.forEach(t),Rs=d(Ro,"."),Ro.forEach(t),Gs=f(Ie),ae=r(Ie,"P",{});var Go=l(ae);Ys=d(Go,"Configuration objects inherit from "),jo=r(Go,"A",{href:!0});var Cr=l(jo);Js=d(Cr,"PretrainedConfig"),Cr.forEach(t),Ks=d(Go,` and can be used to control the model outputs. Read the
documentation from `),Po=r(Go,"A",{href:!0});var Fr=l(Po);Qs=d(Fr,"PretrainedConfig"),Fr.forEach(t),Xs=d(Go," for more information."),Go.forEach(t),Zs=f(Ie),$(_e.$$.fragment,Ie),Ie.forEach(t),Yt=f(o),re=r(o,"H2",{class:!0});var rs=l(re);be=r(rs,"A",{id:!0,class:!0,href:!0});var zr=l(be);lt=r(zr,"SPAN",{});var xr=l(lt);$(Xe.$$.fragment,xr),xr.forEach(t),zr.forEach(t),en=f(rs),it=r(rs,"SPAN",{});var qr=l(it);on=d(qr,"BloomModel"),qr.forEach(t),rs.forEach(t),Jt=f(o),E=r(o,"DIV",{class:!0});var G=l(E);$(Ze.$$.fragment,G),tn=f(G),dt=r(G,"P",{});var Mr=l(dt);sn=d(Mr,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Mr.forEach(t),nn=f(G),eo=r(G,"P",{});var ls=l(eo);an=d(ls,"This model inherits from "),So=r(ls,"A",{href:!0});var Er=l(So);rn=d(Er,"PreTrainedModel"),Er.forEach(t),ln=d(ls,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ls.forEach(t),dn=f(G),oo=r(G,"P",{});var is=l(oo);cn=d(is,"This model is also a PyTorch "),to=r(is,"A",{href:!0,rel:!0});var jr=l(to);pn=d(jr,"torch.nn.Module"),jr.forEach(t),mn=d(is,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),is.forEach(t),hn=f(G),V=r(G,"DIV",{class:!0});var Ne=l(V);$(so.$$.fragment,Ne),un=f(Ne),le=r(Ne,"P",{});var Yo=l(le);fn=d(Yo,"The "),Ao=r(Yo,"A",{href:!0});var Pr=l(Ao);gn=d(Pr,"BloomModel"),Pr.forEach(t),_n=d(Yo," forward method, overrides the "),ct=r(Yo,"CODE",{});var Sr=l(ct);bn=d(Sr,"__call__"),Sr.forEach(t),vn=d(Yo," special method."),Yo.forEach(t),kn=f(Ne),$(ve.$$.fragment,Ne),$n=f(Ne),$(ke.$$.fragment,Ne),Ne.forEach(t),G.forEach(t),Kt=f(o),ie=r(o,"H2",{class:!0});var ds=l(ie);$e=r(ds,"A",{id:!0,class:!0,href:!0});var Ar=l($e);pt=r(Ar,"SPAN",{});var Ir=l(pt);$(no.$$.fragment,Ir),Ir.forEach(t),Ar.forEach(t),wn=f(ds),mt=r(ds,"SPAN",{});var Nr=l(mt);yn=d(Nr,"BloomTokenizerFast"),Nr.forEach(t),ds.forEach(t),Qt=f(o),z=r(o,"DIV",{class:!0});var I=l(z);$(ao.$$.fragment,I),Tn=f(I),ro=r(I,"P",{});var cs=l(ro);Bn=d(cs,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),ht=r(cs,"EM",{});var Lr=l(ht);Cn=d(Lr,"tokenizers"),Lr.forEach(t),Fn=d(cs,` library). Based on byte-level
Byte-Pair-Encoding.`),cs.forEach(t),zn=f(I),ut=r(I,"P",{});var Or=l(ut);xn=d(Or,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Or.forEach(t),qn=f(I),$(we.$$.fragment,I),Mn=f(I),lo=r(I,"P",{});var ps=l(lo);En=d(ps,"You can get around that behavior by passing "),ft=r(ps,"CODE",{});var Dr=l(ft);jn=d(Dr,"add_prefix_space=True"),Dr.forEach(t),Pn=d(ps,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),ps.forEach(t),Sn=f(I),$(ye.$$.fragment,I),An=f(I),io=r(I,"P",{});var ms=l(io);In=d(ms,"This tokenizer inherits from "),Io=r(ms,"A",{href:!0});var Wr=l(Io);Nn=d(Wr,"PreTrainedTokenizerFast"),Wr.forEach(t),Ln=d(ms,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ms.forEach(t),I.forEach(t),Xt=f(o),de=r(o,"H2",{class:!0});var hs=l(de);Te=r(hs,"A",{id:!0,class:!0,href:!0});var Hr=l(Te);gt=r(Hr,"SPAN",{});var Vr=l(gt);$(co.$$.fragment,Vr),Vr.forEach(t),Hr.forEach(t),On=f(hs),_t=r(hs,"SPAN",{});var Ur=l(_t);Dn=d(Ur,"BloomForCausalLM"),Ur.forEach(t),hs.forEach(t),Zt=f(o),j=r(o,"DIV",{class:!0});var Y=l(j);$(po.$$.fragment,Y),Wn=f(Y),bt=r(Y,"P",{});var Rr=l(bt);Hn=d(Rr,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Rr.forEach(t),Vn=f(Y),mo=r(Y,"P",{});var us=l(mo);Un=d(us,"This model inherits from "),No=r(us,"A",{href:!0});var Gr=l(No);Rn=d(Gr,"PreTrainedModel"),Gr.forEach(t),Gn=d(us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),us.forEach(t),Yn=f(Y),ho=r(Y,"P",{});var fs=l(ho);Jn=d(fs,"This model is also a PyTorch "),uo=r(fs,"A",{href:!0,rel:!0});var Yr=l(uo);Kn=d(Yr,"torch.nn.Module"),Yr.forEach(t),Qn=d(fs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fs.forEach(t),Xn=f(Y),U=r(Y,"DIV",{class:!0});var Le=l(U);$(fo.$$.fragment,Le),Zn=f(Le),ce=r(Le,"P",{});var Jo=l(ce);ea=d(Jo,"The "),Lo=r(Jo,"A",{href:!0});var Jr=l(Lo);oa=d(Jr,"BloomForCausalLM"),Jr.forEach(t),ta=d(Jo," forward method, overrides the "),vt=r(Jo,"CODE",{});var Kr=l(vt);sa=d(Kr,"__call__"),Kr.forEach(t),na=d(Jo," special method."),Jo.forEach(t),aa=f(Le),$(Be.$$.fragment,Le),ra=f(Le),$(Ce.$$.fragment,Le),Le.forEach(t),Y.forEach(t),es=f(o),pe=r(o,"H2",{class:!0});var gs=l(pe);Fe=r(gs,"A",{id:!0,class:!0,href:!0});var Qr=l(Fe);kt=r(Qr,"SPAN",{});var Xr=l(kt);$(go.$$.fragment,Xr),Xr.forEach(t),Qr.forEach(t),la=f(gs),$t=r(gs,"SPAN",{});var Zr=l($t);ia=d(Zr,"BloomForSequenceClassification"),Zr.forEach(t),gs.forEach(t),os=f(o),x=r(o,"DIV",{class:!0});var N=l(x);$(_o.$$.fragment,N),da=f(N),wt=r(N,"P",{});var el=l(wt);ca=d(el,"The Bloom Model transformer with a sequence classification head on top (linear layer)."),el.forEach(t),pa=f(N),Oo=r(N,"P",{});var hr=l(Oo);Do=r(hr,"A",{href:!0});var ol=l(Do);ma=d(ol,"BloomForSequenceClassification"),ol.forEach(t),ha=d(hr,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),hr.forEach(t),ua=f(N),W=r(N,"P",{});var J=l(W);fa=d(J,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),yt=r(J,"CODE",{});var tl=l(yt);ga=d(tl,"pad_token_id"),tl.forEach(t),_a=d(J,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Tt=r(J,"CODE",{});var sl=l(Tt);ba=d(sl,"pad_token_id"),sl.forEach(t),va=d(J,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Bt=r(J,"CODE",{});var nl=l(Bt);ka=d(nl,"inputs_embeds"),nl.forEach(t),$a=d(J," are passed instead of "),Ct=r(J,"CODE",{});var al=l(Ct);wa=d(al,"input_ids"),al.forEach(t),ya=d(J,`, it does the same (take the last value in
each row of the batch).`),J.forEach(t),Ta=f(N),bo=r(N,"P",{});var _s=l(bo);Ba=d(_s,"This model inherits from "),Wo=r(_s,"A",{href:!0});var rl=l(Wo);Ca=d(rl,"PreTrainedModel"),rl.forEach(t),Fa=d(_s,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),_s.forEach(t),za=f(N),vo=r(N,"P",{});var bs=l(vo);xa=d(bs,"This model is also a PyTorch "),ko=r(bs,"A",{href:!0,rel:!0});var ll=l(ko);qa=d(ll,"torch.nn.Module"),ll.forEach(t),Ma=d(bs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bs.forEach(t),Ea=f(N),q=r(N,"DIV",{class:!0});var L=l(q);$($o.$$.fragment,L),ja=f(L),me=r(L,"P",{});var Ko=l(me);Pa=d(Ko,"The "),Ho=r(Ko,"A",{href:!0});var il=l(Ho);Sa=d(il,"BloomForSequenceClassification"),il.forEach(t),Aa=d(Ko," forward method, overrides the "),Ft=r(Ko,"CODE",{});var dl=l(Ft);Ia=d(dl,"__call__"),dl.forEach(t),Na=d(Ko," special method."),Ko.forEach(t),La=f(L),$(ze.$$.fragment,L),Oa=f(L),$(xe.$$.fragment,L),Da=f(L),$(qe.$$.fragment,L),Wa=f(L),$(Me.$$.fragment,L),Ha=f(L),$(Ee.$$.fragment,L),L.forEach(t),N.forEach(t),ts=f(o),he=r(o,"H2",{class:!0});var vs=l(he);je=r(vs,"A",{id:!0,class:!0,href:!0});var cl=l(je);zt=r(cl,"SPAN",{});var pl=l(zt);$(wo.$$.fragment,pl),pl.forEach(t),cl.forEach(t),Va=f(vs),xt=r(vs,"SPAN",{});var ml=l(xt);Ua=d(ml,"BloomForTokenClassification"),ml.forEach(t),vs.forEach(t),ss=f(o),P=r(o,"DIV",{class:!0});var K=l(P);$(yo.$$.fragment,K),Ra=f(K),qt=r(K,"P",{});var hl=l(qt);Ga=d(hl,`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hl.forEach(t),Ya=f(K),To=r(K,"P",{});var ks=l(To);Ja=d(ks,"This model inherits from "),Vo=r(ks,"A",{href:!0});var ul=l(Vo);Ka=d(ul,"PreTrainedModel"),ul.forEach(t),Qa=d(ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ks.forEach(t),Xa=f(K),Bo=r(K,"P",{});var $s=l(Bo);Za=d($s,"This model is also a PyTorch "),Co=r($s,"A",{href:!0,rel:!0});var fl=l(Co);er=d(fl,"torch.nn.Module"),fl.forEach(t),or=d($s,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$s.forEach(t),tr=f(K),A=r(K,"DIV",{class:!0});var Q=l(A);$(Fo.$$.fragment,Q),sr=f(Q),ue=r(Q,"P",{});var Qo=l(ue);nr=d(Qo,"The "),Uo=r(Qo,"A",{href:!0});var gl=l(Uo);ar=d(gl,"BloomForTokenClassification"),gl.forEach(t),rr=d(Qo," forward method, overrides the "),Mt=r(Qo,"CODE",{});var _l=l(Mt);lr=d(_l,"__call__"),_l.forEach(t),ir=d(Qo," special method."),Qo.forEach(t),dr=f(Q),$(Pe.$$.fragment,Q),cr=f(Q),$(Se.$$.fragment,Q),pr=f(Q),$(Ae.$$.fragment,Q),Q.forEach(t),K.forEach(t),this.h()},h(){h(n,"name","hf:doc:metadata"),h(n,"content",JSON.stringify(Ll)),h(p,"id","bloom"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#bloom"),h(c,"class","relative group"),h(R,"id","overview"),h(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(R,"href","#overview"),h(H,"class","relative group"),h(We,"href","https://bigscience.huggingface.co/"),h(We,"rel","nofollow"),h(He,"href","https://huggingface.co/bigscience/bloom-350m"),h(He,"rel","nofollow"),h(Ve,"href","https://huggingface.co/bigscience/bloom-760m"),h(Ve,"rel","nofollow"),h(Ue,"href","https://huggingface.co/bigscience/bloom-1b3"),h(Ue,"rel","nofollow"),h(Re,"href","https://huggingface.co/bigscience/bloom-2b5"),h(Re,"rel","nofollow"),h(Ge,"href","https://huggingface.co/bigscience/bloom-6b3"),h(Ge,"rel","nofollow"),h(Ye,"href","https://huggingface.co/bigscience/bloom"),h(Ye,"rel","nofollow"),h(ge,"id","transformers.BloomConfig"),h(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ge,"href","#transformers.BloomConfig"),h(se,"class","relative group"),h(Eo,"href","/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomModel"),h(Qe,"href","https://huggingface.co/bigscience/bloom"),h(Qe,"rel","nofollow"),h(jo,"href","/docs/transformers/pr_17625/en/main_classes/configuration#transformers.PretrainedConfig"),h(Po,"href","/docs/transformers/pr_17625/en/main_classes/configuration#transformers.PretrainedConfig"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(be,"id","transformers.BloomModel"),h(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(be,"href","#transformers.BloomModel"),h(re,"class","relative group"),h(So,"href","/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel"),h(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(to,"rel","nofollow"),h(Ao,"href","/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomModel"),h(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($e,"id","transformers.BloomTokenizerFast"),h($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($e,"href","#transformers.BloomTokenizerFast"),h(ie,"class","relative group"),h(Io,"href","/docs/transformers/pr_17625/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Te,"id","transformers.BloomForCausalLM"),h(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Te,"href","#transformers.BloomForCausalLM"),h(de,"class","relative group"),h(No,"href","/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel"),h(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(uo,"rel","nofollow"),h(Lo,"href","/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomForCausalLM"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fe,"id","transformers.BloomForSequenceClassification"),h(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fe,"href","#transformers.BloomForSequenceClassification"),h(pe,"class","relative group"),h(Do,"href","/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomForSequenceClassification"),h(Wo,"href","/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel"),h(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ko,"rel","nofollow"),h(Ho,"href","/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomForSequenceClassification"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"id","transformers.BloomForTokenClassification"),h(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(je,"href","#transformers.BloomForTokenClassification"),h(he,"class","relative group"),h(Vo,"href","/docs/transformers/pr_17625/en/main_classes/model#transformers.PreTrainedModel"),h(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Co,"rel","nofollow"),h(Uo,"href","/docs/transformers/pr_17625/en/model_doc/bloom#transformers.BloomForTokenClassification"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,n),v(o,g,_),v(o,c,_),e(c,p),e(p,b),w(s,b,null),e(c,m),e(c,F),e(F,te),v(o,O,_),v(o,H,_),e(H,R),e(R,Xo),w(De,Xo,null),e(H,ws),e(H,Zo),e(Zo,ys),v(o,Vt,_),v(o,fe,_),e(fe,Ts),e(fe,We),e(We,Bs),e(fe,Cs),v(o,Ut,_),v(o,M,_),e(M,et),e(et,He),e(He,Fs),e(M,zs),e(M,ot),e(ot,Ve),e(Ve,xs),e(M,qs),e(M,tt),e(tt,Ue),e(Ue,Ms),e(M,Es),e(M,st),e(st,Re),e(Re,js),e(M,Ps),e(M,nt),e(nt,Ge),e(Ge,Ss),e(M,As),e(M,Mo),e(Mo,Ye),e(Ye,Is),e(Mo,Ns),v(o,Rt,_),v(o,se,_),e(se,ge),e(ge,at),w(Je,at,null),e(se,Ls),e(se,rt),e(rt,Os),v(o,Gt,_),v(o,D,_),w(Ke,D,null),e(D,Ds),e(D,ne),e(ne,Ws),e(ne,Eo),e(Eo,Hs),e(ne,Vs),e(ne,Qe),e(Qe,Us),e(ne,Rs),e(D,Gs),e(D,ae),e(ae,Ys),e(ae,jo),e(jo,Js),e(ae,Ks),e(ae,Po),e(Po,Qs),e(ae,Xs),e(D,Zs),w(_e,D,null),v(o,Yt,_),v(o,re,_),e(re,be),e(be,lt),w(Xe,lt,null),e(re,en),e(re,it),e(it,on),v(o,Jt,_),v(o,E,_),w(Ze,E,null),e(E,tn),e(E,dt),e(dt,sn),e(E,nn),e(E,eo),e(eo,an),e(eo,So),e(So,rn),e(eo,ln),e(E,dn),e(E,oo),e(oo,cn),e(oo,to),e(to,pn),e(oo,mn),e(E,hn),e(E,V),w(so,V,null),e(V,un),e(V,le),e(le,fn),e(le,Ao),e(Ao,gn),e(le,_n),e(le,ct),e(ct,bn),e(le,vn),e(V,kn),w(ve,V,null),e(V,$n),w(ke,V,null),v(o,Kt,_),v(o,ie,_),e(ie,$e),e($e,pt),w(no,pt,null),e(ie,wn),e(ie,mt),e(mt,yn),v(o,Qt,_),v(o,z,_),w(ao,z,null),e(z,Tn),e(z,ro),e(ro,Bn),e(ro,ht),e(ht,Cn),e(ro,Fn),e(z,zn),e(z,ut),e(ut,xn),e(z,qn),w(we,z,null),e(z,Mn),e(z,lo),e(lo,En),e(lo,ft),e(ft,jn),e(lo,Pn),e(z,Sn),w(ye,z,null),e(z,An),e(z,io),e(io,In),e(io,Io),e(Io,Nn),e(io,Ln),v(o,Xt,_),v(o,de,_),e(de,Te),e(Te,gt),w(co,gt,null),e(de,On),e(de,_t),e(_t,Dn),v(o,Zt,_),v(o,j,_),w(po,j,null),e(j,Wn),e(j,bt),e(bt,Hn),e(j,Vn),e(j,mo),e(mo,Un),e(mo,No),e(No,Rn),e(mo,Gn),e(j,Yn),e(j,ho),e(ho,Jn),e(ho,uo),e(uo,Kn),e(ho,Qn),e(j,Xn),e(j,U),w(fo,U,null),e(U,Zn),e(U,ce),e(ce,ea),e(ce,Lo),e(Lo,oa),e(ce,ta),e(ce,vt),e(vt,sa),e(ce,na),e(U,aa),w(Be,U,null),e(U,ra),w(Ce,U,null),v(o,es,_),v(o,pe,_),e(pe,Fe),e(Fe,kt),w(go,kt,null),e(pe,la),e(pe,$t),e($t,ia),v(o,os,_),v(o,x,_),w(_o,x,null),e(x,da),e(x,wt),e(wt,ca),e(x,pa),e(x,Oo),e(Oo,Do),e(Do,ma),e(Oo,ha),e(x,ua),e(x,W),e(W,fa),e(W,yt),e(yt,ga),e(W,_a),e(W,Tt),e(Tt,ba),e(W,va),e(W,Bt),e(Bt,ka),e(W,$a),e(W,Ct),e(Ct,wa),e(W,ya),e(x,Ta),e(x,bo),e(bo,Ba),e(bo,Wo),e(Wo,Ca),e(bo,Fa),e(x,za),e(x,vo),e(vo,xa),e(vo,ko),e(ko,qa),e(vo,Ma),e(x,Ea),e(x,q),w($o,q,null),e(q,ja),e(q,me),e(me,Pa),e(me,Ho),e(Ho,Sa),e(me,Aa),e(me,Ft),e(Ft,Ia),e(me,Na),e(q,La),w(ze,q,null),e(q,Oa),w(xe,q,null),e(q,Da),w(qe,q,null),e(q,Wa),w(Me,q,null),e(q,Ha),w(Ee,q,null),v(o,ts,_),v(o,he,_),e(he,je),e(je,zt),w(wo,zt,null),e(he,Va),e(he,xt),e(xt,Ua),v(o,ss,_),v(o,P,_),w(yo,P,null),e(P,Ra),e(P,qt),e(qt,Ga),e(P,Ya),e(P,To),e(To,Ja),e(To,Vo),e(Vo,Ka),e(To,Qa),e(P,Xa),e(P,Bo),e(Bo,Za),e(Bo,Co),e(Co,er),e(Bo,or),e(P,tr),e(P,A),w(Fo,A,null),e(A,sr),e(A,ue),e(ue,nr),e(ue,Uo),e(Uo,ar),e(ue,rr),e(ue,Mt),e(Mt,lr),e(ue,ir),e(A,dr),w(Pe,A,null),e(A,cr),w(Se,A,null),e(A,pr),w(Ae,A,null),ns=!0},p(o,[_]){const zo={};_&2&&(zo.$$scope={dirty:_,ctx:o}),_e.$set(zo);const Et={};_&2&&(Et.$$scope={dirty:_,ctx:o}),ve.$set(Et);const jt={};_&2&&(jt.$$scope={dirty:_,ctx:o}),ke.$set(jt);const Pt={};_&2&&(Pt.$$scope={dirty:_,ctx:o}),we.$set(Pt);const xo={};_&2&&(xo.$$scope={dirty:_,ctx:o}),ye.$set(xo);const St={};_&2&&(St.$$scope={dirty:_,ctx:o}),Be.$set(St);const At={};_&2&&(At.$$scope={dirty:_,ctx:o}),Ce.$set(At);const It={};_&2&&(It.$$scope={dirty:_,ctx:o}),ze.$set(It);const qo={};_&2&&(qo.$$scope={dirty:_,ctx:o}),xe.$set(qo);const Nt={};_&2&&(Nt.$$scope={dirty:_,ctx:o}),qe.$set(Nt);const S={};_&2&&(S.$$scope={dirty:_,ctx:o}),Me.$set(S);const Lt={};_&2&&(Lt.$$scope={dirty:_,ctx:o}),Ee.$set(Lt);const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:o}),Pe.$set(Ot);const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:o}),Se.$set(Dt);const Wt={};_&2&&(Wt.$$scope={dirty:_,ctx:o}),Ae.$set(Wt)},i(o){ns||(y(s.$$.fragment,o),y(De.$$.fragment,o),y(Je.$$.fragment,o),y(Ke.$$.fragment,o),y(_e.$$.fragment,o),y(Xe.$$.fragment,o),y(Ze.$$.fragment,o),y(so.$$.fragment,o),y(ve.$$.fragment,o),y(ke.$$.fragment,o),y(no.$$.fragment,o),y(ao.$$.fragment,o),y(we.$$.fragment,o),y(ye.$$.fragment,o),y(co.$$.fragment,o),y(po.$$.fragment,o),y(fo.$$.fragment,o),y(Be.$$.fragment,o),y(Ce.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y($o.$$.fragment,o),y(ze.$$.fragment,o),y(xe.$$.fragment,o),y(qe.$$.fragment,o),y(Me.$$.fragment,o),y(Ee.$$.fragment,o),y(wo.$$.fragment,o),y(yo.$$.fragment,o),y(Fo.$$.fragment,o),y(Pe.$$.fragment,o),y(Se.$$.fragment,o),y(Ae.$$.fragment,o),ns=!0)},o(o){T(s.$$.fragment,o),T(De.$$.fragment,o),T(Je.$$.fragment,o),T(Ke.$$.fragment,o),T(_e.$$.fragment,o),T(Xe.$$.fragment,o),T(Ze.$$.fragment,o),T(so.$$.fragment,o),T(ve.$$.fragment,o),T(ke.$$.fragment,o),T(no.$$.fragment,o),T(ao.$$.fragment,o),T(we.$$.fragment,o),T(ye.$$.fragment,o),T(co.$$.fragment,o),T(po.$$.fragment,o),T(fo.$$.fragment,o),T(Be.$$.fragment,o),T(Ce.$$.fragment,o),T(go.$$.fragment,o),T(_o.$$.fragment,o),T($o.$$.fragment,o),T(ze.$$.fragment,o),T(xe.$$.fragment,o),T(qe.$$.fragment,o),T(Me.$$.fragment,o),T(Ee.$$.fragment,o),T(wo.$$.fragment,o),T(yo.$$.fragment,o),T(Fo.$$.fragment,o),T(Pe.$$.fragment,o),T(Se.$$.fragment,o),T(Ae.$$.fragment,o),ns=!1},d(o){t(n),o&&t(g),o&&t(c),B(s),o&&t(O),o&&t(H),B(De),o&&t(Vt),o&&t(fe),o&&t(Ut),o&&t(M),o&&t(Rt),o&&t(se),B(Je),o&&t(Gt),o&&t(D),B(Ke),B(_e),o&&t(Yt),o&&t(re),B(Xe),o&&t(Jt),o&&t(E),B(Ze),B(so),B(ve),B(ke),o&&t(Kt),o&&t(ie),B(no),o&&t(Qt),o&&t(z),B(ao),B(we),B(ye),o&&t(Xt),o&&t(de),B(co),o&&t(Zt),o&&t(j),B(po),B(fo),B(Be),B(Ce),o&&t(es),o&&t(pe),B(go),o&&t(os),o&&t(x),B(_o),B($o),B(ze),B(xe),B(qe),B(Me),B(Ee),o&&t(ts),o&&t(he),B(wo),o&&t(ss),o&&t(P),B(yo),B(Fo),B(Pe),B(Se),B(Ae)}}}const Ll={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"},{local:"transformers.BloomForSequenceClassification",title:"BloomForSequenceClassification"},{local:"transformers.BloomForTokenClassification",title:"BloomForTokenClassification"}],title:"BLOOM"};function Ol(C){return wl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gl extends bl{constructor(n){super();vl(this,n,Ol,Nl,kl,{})}}export{Gl as default,Ll as metadata};
