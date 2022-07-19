import{S as Zr,i as ei,s as oi,e as a,k as u,w as v,t as d,M as ti,c as r,d as t,m as f,a as i,x as $,h as c,b as h,G as e,g as k,y as w,q as y,o as T,B,v as si,L as X}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xo}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Z}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Q}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ni(F){let n,g,l,m,b;return m=new Z({props:{code:`from transformers import BloomModel, BloomConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){n=a("p"),g=d("Example:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function ai(F){let n,g,l,m,b;return{c(){n=a("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),m=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r(p,"CODE",{});var x=i(l);m=c(x,"Module"),x.forEach(t),b=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){k(s,n,p),e(n,g),e(n,l),e(l,m),e(n,b)},d(s){s&&t(n)}}}function ri(F){let n,g,l,m,b;return m=new Z({props:{code:`from transformers import BloomTokenizerFast, BloomModel
import torch

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-350m")
model = BloomModel.from_pretrained("bigscience/bloom-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=a("p"),g=d("Example:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function ii(F){let n,g,l,m,b;return m=new Z({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){n=a("p"),g=d("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function li(F){let n,g,l,m,b,s,p,x;return{c(){n=a("p"),g=d("When used with "),l=a("code"),m=d("is_split_into_words=True"),b=d(", this tokenizer needs to be instantiated with "),s=a("code"),p=d("add_prefix_space=True"),x=d(".")},l(oe){n=r(oe,"P",{});var S=i(n);g=c(S,"When used with "),l=r(S,"CODE",{});var A=i(l);m=c(A,"is_split_into_words=True"),A.forEach(t),b=c(S,", this tokenizer needs to be instantiated with "),s=r(S,"CODE",{});var V=i(s);p=c(V,"add_prefix_space=True"),V.forEach(t),x=c(S,"."),S.forEach(t)},m(oe,S){k(oe,n,S),e(n,g),e(n,l),e(l,m),e(n,b),e(n,s),e(s,p),e(n,x)},d(oe){oe&&t(n)}}}function di(F){let n,g,l,m,b;return{c(){n=a("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),m=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r(p,"CODE",{});var x=i(l);m=c(x,"Module"),x.forEach(t),b=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){k(s,n,p),e(n,g),e(n,l),e(l,m),e(n,b)},d(s){s&&t(n)}}}function ci(F){let n,g,l,m,b;return m=new Z({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForCausalLM

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-350m")
model = BloomForCausalLM.from_pretrained("bigscience/bloom-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){n=a("p"),g=d("Example:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function mi(F){let n,g,l,m,b;return{c(){n=a("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),m=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r(p,"CODE",{});var x=i(l);m=c(x,"Module"),x.forEach(t),b=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){k(s,n,p),e(n,g),e(n,l),e(l,m),e(n,b)},d(s){s&&t(n)}}}function pi(F){let n,g,l,m,b;return m=new Z({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForPrefixLM

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-350m")
model = BloomForPrefixLM.from_pretrained("bigscience/bloom-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForPrefixLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForPrefixLM.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){n=a("p"),g=d("Example:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function hi(F){let n,g,l,m,b;return{c(){n=a("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),m=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r(p,"CODE",{});var x=i(l);m=c(x,"Module"),x.forEach(t),b=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){k(s,n,p),e(n,g),e(n,l),e(l,m),e(n,b)},d(s){s&&t(n)}}}function ui(F){let n,g,l,m,b;return m=new Z({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForSequenceClassification

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-350m")
model = BloomForSequenceClassification.from_pretrained("bigscience/bloom-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=a("p"),g=d("Example of single-label classification:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example of single-label classification:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function fi(F){let n,g;return n=new Z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained("bigscience/bloom-350m", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(n.$$.fragment)},l(l){$(n.$$.fragment,l)},m(l,m){w(n,l,m),g=!0},p:X,i(l){g||(y(n.$$.fragment,l),g=!0)},o(l){T(n.$$.fragment,l),g=!1},d(l){B(n,l)}}}function gi(F){let n,g,l,m,b;return m=new Z({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForSequenceClassification

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-350m")
model = BloomForSequenceClassification.from_pretrained("bigscience/bloom-350m", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=a("p"),g=d("Example of multi-label classification:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example of multi-label classification:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function _i(F){let n,g;return n=new Z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained(
    "bigscience/bloom-350m", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(n.$$.fragment)},l(l){$(n.$$.fragment,l)},m(l,m){w(n,l,m),g=!0},p:X,i(l){g||(y(n.$$.fragment,l),g=!0)},o(l){T(n.$$.fragment,l),g=!1},d(l){B(n,l)}}}function bi(F){let n,g,l,m,b;return{c(){n=a("p"),g=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),l=a("code"),m=d("Module"),b=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),l=r(p,"CODE",{});var x=i(l);m=c(x,"Module"),x.forEach(t),b=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){k(s,n,p),e(n,g),e(n,l),e(l,m),e(n,b)},d(s){s&&t(n)}}}function ki(F){let n,g,l,m,b;return m=new Z({props:{code:`from transformers import BloomTokenizerFast, BloomForTokenClassification
import torch

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-350m")
model = BloomForTokenClassification.from_pretrained("bigscience/bloom-350m")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-350m&quot;</span>)

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
`}}),{c(){n=a("p"),g=d("Example:"),l=u(),v(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);g=c(p,"Example:"),p.forEach(t),l=f(s),$(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,g),k(s,l,p),w(m,s,p),b=!0},p:X,i(s){b||(y(m.$$.fragment,s),b=!0)},o(s){T(m.$$.fragment,s),b=!1},d(s){s&&t(n),s&&t(l),B(m,s)}}}function vi(F){let n,g;return n=new Z({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(n.$$.fragment)},l(l){$(n.$$.fragment,l)},m(l,m){w(n,l,m),g=!0},p:X,i(l){g||(y(n.$$.fragment,l),g=!0)},o(l){T(n.$$.fragment,l),g=!1},d(l){B(n,l)}}}function $i(F){let n,g,l,m,b,s,p,x,oe,S,A,V,Zo,Ge,ys,et,Ts,Kt,_e,Bs,Ye,Fs,xs,Qt,M,ot,Je,Cs,zs,tt,Ke,Ms,qs,st,Qe,Es,js,nt,Xe,Ps,Ls,at,Ze,Ss,Ns,zo,eo,As,Is,Xt,te,be,rt,oo,Os,it,Ds,Zt,N,to,Ws,se,Hs,Mo,Vs,Us,so,Rs,Gs,Ys,ne,Js,qo,Ks,Qs,Eo,Xs,Zs,en,ke,es,ae,ve,lt,no,on,dt,tn,os,U,ao,sn,ct,nn,an,I,ro,rn,re,ln,jo,dn,cn,mt,mn,pn,hn,$e,un,we,ts,ie,ye,pt,io,fn,ht,gn,ss,C,lo,_n,co,bn,ut,kn,vn,$n,ft,wn,yn,Te,Tn,mo,Bn,gt,Fn,xn,Cn,Be,zn,po,Mn,Po,qn,En,ns,le,Fe,_t,ho,jn,bt,Pn,as,R,uo,Ln,kt,Sn,Nn,O,fo,An,de,In,Lo,On,Dn,vt,Wn,Hn,Vn,xe,Un,Ce,rs,ce,ze,$t,go,Rn,wt,Gn,is,G,_o,Yn,Y,Jn,yt,Kn,Qn,Tt,Xn,Zn,bo,ea,oa,ta,D,ko,sa,me,na,So,aa,ra,Bt,ia,la,da,Me,ca,qe,ls,pe,Ee,Ft,vo,ma,xt,pa,ds,J,$o,ha,q,ua,No,fa,ga,Ct,_a,ba,zt,ka,va,Mt,$a,wa,qt,ya,Ta,Ba,z,wo,Fa,he,xa,Ao,Ca,za,Et,Ma,qa,Ea,je,ja,Pe,Pa,Le,La,Se,Sa,Ne,cs,ue,Ae,jt,yo,Na,Pt,Aa,ms,K,To,Ia,Lt,Oa,Da,j,Bo,Wa,fe,Ha,Io,Va,Ua,St,Ra,Ga,Ya,Ie,Ja,Oe,Ka,De,ps;return s=new ge({}),Ge=new ge({}),oo=new ge({}),to=new H({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"pretraining_tp",val:" = 1"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the Bloom model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BloomConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.BloomConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BloomConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BloomConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BloomConfig.skip_bias_add",description:`<strong>skip_bias_add</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for each linear layer in the transformer blocks`,name:"skip_bias_add"},{anchor:"transformers.BloomConfig.skip_bias_add_qkv",description:`<strong>skip_bias_add_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for the first linear layer in the transformer blocks`,name:"skip_bias_add_qkv"},{anchor:"transformers.BloomConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function on the bias dropout.`,name:"hidden_dropout"},{anchor:"transformers.BloomConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BloomConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.pretraining_tp",description:`<strong>pretraining_tp</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
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
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/configuration_bloom.py#L42"}}),ke=new Q({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[ni]},$$scope:{ctx:F}}}),no=new ge({}),ao=new H({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.This",description:'<strong>This</strong> model inherits from <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the &#x2014;',name:"This"},{anchor:"transformers.BloomModel.library",description:"<strong>library</strong> implements for all its model (such as downloading or saving, resizing the input embeddings etc.) This model &#x2014;",name:"library"},{anchor:"transformers.BloomModel.is",description:"<strong>is</strong> also a PyTorch [torch.nn.Module](https &#x2014;//pytorch.org/docs/stable/nn.html#torch.nn.Module) subclass. Use it as a",name:"is"},{anchor:"transformers.BloomModel.regular",description:`<strong>regular</strong> PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior. &#x2014;
config (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L548"}}),ro=new H({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"causal_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.BloomModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix. If <code>past_key_values</code> is used, optionally only the last
<code>inputs_embeds</code> have to be input (see <code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L605",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig"
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
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Xo({props:{$$slots:{default:[ai]},$$scope:{ctx:F}}}),we=new Q({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[ri]},$$scope:{ctx:F}}}),io=new ge({}),lo=new H({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/tokenization_bloom_fast.py#L49"}}),Te=new Q({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[ii]},$$scope:{ctx:F}}}),Be=new Xo({props:{$$slots:{default:[li]},$$scope:{ctx:F}}}),ho=new ge({}),uo=new H({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.This",description:'<strong>This</strong> model inherits from <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the &#x2014;',name:"This"},{anchor:"transformers.BloomForCausalLM.library",description:"<strong>library</strong> implements for all its model (such as downloading or saving, resizing the input embeddings etc.) This model &#x2014;",name:"library"},{anchor:"transformers.BloomForCausalLM.is",description:"<strong>is</strong> also a PyTorch [torch.nn.Module](https &#x2014;//pytorch.org/docs/stable/nn.html#torch.nn.Module) subclass. Use it as a",name:"is"},{anchor:"transformers.BloomForCausalLM.regular",description:`<strong>regular</strong> PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior. &#x2014;
config (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L750"}}),fo=new H({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"causal_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.BloomForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix. If <code>past_key_values</code> is used, optionally only the last
<code>inputs_embeds</code> have to be input (see <code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L790",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig"
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
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new Xo({props:{$$slots:{default:[di]},$$scope:{ctx:F}}}),Ce=new Q({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[ci]},$$scope:{ctx:F}}}),go=new ge({}),_o=new H({props:{name:"class transformers.BloomForPrefixLM",anchor:"transformers.BloomForPrefixLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForPrefixLM.This",description:'<strong>This</strong> model inherits from <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the &#x2014;',name:"This"},{anchor:"transformers.BloomForPrefixLM.library",description:"<strong>library</strong> implements for all its model (such as downloading or saving, resizing the input embeddings etc.) This model &#x2014;",name:"library"},{anchor:"transformers.BloomForPrefixLM.is",description:"<strong>is</strong> also a PyTorch [torch.nn.Module](https &#x2014;//pytorch.org/docs/stable/nn.html#torch.nn.Module) subclass. Use it as a",name:"is"},{anchor:"transformers.BloomForPrefixLM.regular",description:`<strong>regular</strong> PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior. &#x2014;
config (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L880"}}),ko=new H({props:{name:"forward",anchor:"transformers.BloomForPrefixLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"causal_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"prefix_length",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForPrefixLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForPrefixLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForPrefixLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.BloomForPrefixLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForPrefixLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForPrefixLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix. If <code>past_key_values</code> is used, optionally only the last
<code>inputs_embeds</code> have to be input (see <code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForPrefixLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForPrefixLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForPrefixLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForPrefixLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForPrefixLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L943",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig"
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
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Xo({props:{$$slots:{default:[mi]},$$scope:{ctx:F}}}),qe=new Q({props:{anchor:"transformers.BloomForPrefixLM.forward.example",$$slots:{default:[pi]},$$scope:{ctx:F}}}),vo=new ge({}),$o=new H({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.This",description:'<strong>This</strong> model inherits from <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the &#x2014;',name:"This"},{anchor:"transformers.BloomForSequenceClassification.library",description:"<strong>library</strong> implements for all its model (such as downloading or saving, resizing the input embeddings etc.) This model &#x2014;",name:"library"},{anchor:"transformers.BloomForSequenceClassification.is",description:"<strong>is</strong> also a PyTorch [torch.nn.Module](https &#x2014;//pytorch.org/docs/stable/nn.html#torch.nn.Module) subclass. Use it as a",name:"is"},{anchor:"transformers.BloomForSequenceClassification.regular",description:`<strong>regular</strong> PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior. &#x2014;
config (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1061"}}),wo=new H({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix. If <code>past_key_values</code> is used, optionally only the last
<code>inputs_embeds</code> have to be input (see <code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1073",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig"
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
`}}),je=new Xo({props:{$$slots:{default:[hi]},$$scope:{ctx:F}}}),Pe=new Q({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[ui]},$$scope:{ctx:F}}}),Le=new Q({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[fi]},$$scope:{ctx:F}}}),Se=new Q({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-3",$$slots:{default:[gi]},$$scope:{ctx:F}}}),Ne=new Q({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-4",$$slots:{default:[_i]},$$scope:{ctx:F}}}),yo=new ge({}),To=new H({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.This",description:'<strong>This</strong> model inherits from <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the &#x2014;',name:"This"},{anchor:"transformers.BloomForTokenClassification.library",description:"<strong>library</strong> implements for all its model (such as downloading or saving, resizing the input embeddings etc.) This model &#x2014;",name:"library"},{anchor:"transformers.BloomForTokenClassification.is",description:"<strong>is</strong> also a PyTorch [torch.nn.Module](https &#x2014;//pytorch.org/docs/stable/nn.html#torch.nn.Module) subclass. Use it as a",name:"is"},{anchor:"transformers.BloomForTokenClassification.regular",description:`<strong>regular</strong> PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior. &#x2014;
config (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1182"}}),Bo=new H({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.BloomForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix. If <code>past_key_values</code> is used, optionally only the last
<code>inputs_embeds</code> have to be input (see <code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig"
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
  href="/docs/transformers/pr_17944/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new Xo({props:{$$slots:{default:[bi]},$$scope:{ctx:F}}}),Oe=new Q({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[ki]},$$scope:{ctx:F}}}),De=new Q({props:{anchor:"transformers.BloomForTokenClassification.forward.example-2",$$slots:{default:[vi]},$$scope:{ctx:F}}}),{c(){n=a("meta"),g=u(),l=a("h1"),m=a("a"),b=a("span"),v(s.$$.fragment),p=u(),x=a("span"),oe=d("BLOOM"),S=u(),A=a("h2"),V=a("a"),Zo=a("span"),v(Ge.$$.fragment),ys=u(),et=a("span"),Ts=d("Overview"),Kt=u(),_e=a("p"),Bs=d("The BLOOM model has been proposed with its various versions through the "),Ye=a("a"),Fs=d("BigScience Workshop"),xs=d(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),Qt=u(),M=a("ul"),ot=a("li"),Je=a("a"),Cs=d("bloom-350m"),zs=u(),tt=a("li"),Ke=a("a"),Ms=d("bloom-760m"),qs=u(),st=a("li"),Qe=a("a"),Es=d("bloom-1b3"),js=u(),nt=a("li"),Xe=a("a"),Ps=d("bloom-2b5"),Ls=u(),at=a("li"),Ze=a("a"),Ss=d("bloom-6b3"),Ns=u(),zo=a("li"),eo=a("a"),As=d("bloom"),Is=d(" (175B parameters)"),Xt=u(),te=a("h2"),be=a("a"),rt=a("span"),v(oo.$$.fragment),Os=u(),it=a("span"),Ds=d("BloomConfig"),Zt=u(),N=a("div"),v(to.$$.fragment),Ws=u(),se=a("p"),Hs=d("This is the configuration class to store the configuration of a "),Mo=a("a"),Vs=d("BloomModel"),Us=d(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),so=a("a"),Rs=d("bigscience/bloom"),Gs=d("."),Ys=u(),ne=a("p"),Js=d("Configuration objects inherit from "),qo=a("a"),Ks=d("PretrainedConfig"),Qs=d(` and can be used to control the model outputs. Read the
documentation from `),Eo=a("a"),Xs=d("PretrainedConfig"),Zs=d(" for more information."),en=u(),v(ke.$$.fragment),es=u(),ae=a("h2"),ve=a("a"),lt=a("span"),v(no.$$.fragment),on=u(),dt=a("span"),tn=d("BloomModel"),os=u(),U=a("div"),v(ao.$$.fragment),sn=u(),ct=a("p"),nn=d("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),an=u(),I=a("div"),v(ro.$$.fragment),rn=u(),re=a("p"),ln=d("The "),jo=a("a"),dn=d("BloomModel"),cn=d(" forward method, overrides the "),mt=a("code"),mn=d("__call__"),pn=d(" special method."),hn=u(),v($e.$$.fragment),un=u(),v(we.$$.fragment),ts=u(),ie=a("h2"),ye=a("a"),pt=a("span"),v(io.$$.fragment),fn=u(),ht=a("span"),gn=d("BloomTokenizerFast"),ss=u(),C=a("div"),v(lo.$$.fragment),_n=u(),co=a("p"),bn=d("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),ut=a("em"),kn=d("tokenizers"),vn=d(` library). Based on byte-level
Byte-Pair-Encoding.`),$n=u(),ft=a("p"),wn=d("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),yn=u(),v(Te.$$.fragment),Tn=u(),mo=a("p"),Bn=d("You can get around that behavior by passing "),gt=a("code"),Fn=d("add_prefix_space=True"),xn=d(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Cn=u(),v(Be.$$.fragment),zn=u(),po=a("p"),Mn=d("This tokenizer inherits from "),Po=a("a"),qn=d("PreTrainedTokenizerFast"),En=d(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ns=u(),le=a("h2"),Fe=a("a"),_t=a("span"),v(ho.$$.fragment),jn=u(),bt=a("span"),Pn=d("BloomForCausalLM"),as=u(),R=a("div"),v(uo.$$.fragment),Ln=u(),kt=a("p"),Sn=d(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nn=u(),O=a("div"),v(fo.$$.fragment),An=u(),de=a("p"),In=d("The "),Lo=a("a"),On=d("BloomForCausalLM"),Dn=d(" forward method, overrides the "),vt=a("code"),Wn=d("__call__"),Hn=d(" special method."),Vn=u(),v(xe.$$.fragment),Un=u(),v(Ce.$$.fragment),rs=u(),ce=a("h2"),ze=a("a"),$t=a("span"),v(go.$$.fragment),Rn=u(),wt=a("span"),Gn=d("BloomForPrefixLM"),is=u(),G=a("div"),v(_o.$$.fragment),Yn=u(),Y=a("p"),Jn=d(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings). Uses prefix language modeling (bidirectional attention on inputs to `),yt=a("code"),Kn=d("generate()"),Qn=d(`) and can use an
additional mask passed as `),Tt=a("code"),Xn=d("prefix_mask"),Zn=d(` to override the default prefix LM mask. See
`),bo=a("a"),ea=d("https://arxiv.org/pdf/2204.05832.pdf"),oa=d(" for more details."),ta=u(),D=a("div"),v(ko.$$.fragment),sa=u(),me=a("p"),na=d("The "),So=a("a"),aa=d("BloomForPrefixLM"),ra=d(" forward method, overrides the "),Bt=a("code"),ia=d("__call__"),la=d(" special method."),da=u(),v(Me.$$.fragment),ca=u(),v(qe.$$.fragment),ls=u(),pe=a("h2"),Ee=a("a"),Ft=a("span"),v(vo.$$.fragment),ma=u(),xt=a("span"),pa=d("BloomForSequenceClassification"),ds=u(),J=a("div"),v($o.$$.fragment),ha=u(),q=a("p"),ua=d(`The Bloom Model transformer with a sequence classification head on top (linear layer).
`),No=a("a"),fa=d("BloomForSequenceClassification"),ga=d(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Ct=a("code"),_a=d("pad_token_id"),ba=d(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),zt=a("code"),ka=d("pad_token_id"),va=d(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Mt=a("code"),$a=d("inputs_embeds"),wa=d(" are passed instead of "),qt=a("code"),ya=d("input_ids"),Ta=d(`, it does the same (take the last
value in each row of the batch).`),Ba=u(),z=a("div"),v(wo.$$.fragment),Fa=u(),he=a("p"),xa=d("The "),Ao=a("a"),Ca=d("BloomForSequenceClassification"),za=d(" forward method, overrides the "),Et=a("code"),Ma=d("__call__"),qa=d(" special method."),Ea=u(),v(je.$$.fragment),ja=u(),v(Pe.$$.fragment),Pa=u(),v(Le.$$.fragment),La=u(),v(Se.$$.fragment),Sa=u(),v(Ne.$$.fragment),cs=u(),ue=a("h2"),Ae=a("a"),jt=a("span"),v(yo.$$.fragment),Na=u(),Pt=a("span"),Aa=d("BloomForTokenClassification"),ms=u(),K=a("div"),v(To.$$.fragment),Ia=u(),Lt=a("p"),Oa=d(`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Da=u(),j=a("div"),v(Bo.$$.fragment),Wa=u(),fe=a("p"),Ha=d("The "),Io=a("a"),Va=d("BloomForTokenClassification"),Ua=d(" forward method, overrides the "),St=a("code"),Ra=d("__call__"),Ga=d(" special method."),Ya=u(),v(Ie.$$.fragment),Ja=u(),v(Oe.$$.fragment),Ka=u(),v(De.$$.fragment),this.h()},l(o){const _=ti('[data-svelte="svelte-1phssyn"]',document.head);n=r(_,"META",{name:!0,content:!0}),_.forEach(t),g=f(o),l=r(o,"H1",{class:!0});var Fo=i(l);m=r(Fo,"A",{id:!0,class:!0,href:!0});var Nt=i(m);b=r(Nt,"SPAN",{});var At=i(b);$(s.$$.fragment,At),At.forEach(t),Nt.forEach(t),p=f(Fo),x=r(Fo,"SPAN",{});var It=i(x);oe=c(It,"BLOOM"),It.forEach(t),Fo.forEach(t),S=f(o),A=r(o,"H2",{class:!0});var xo=i(A);V=r(xo,"A",{id:!0,class:!0,href:!0});var Ot=i(V);Zo=r(Ot,"SPAN",{});var Dt=i(Zo);$(Ge.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),ys=f(xo),et=r(xo,"SPAN",{});var Wt=i(et);Ts=c(Wt,"Overview"),Wt.forEach(t),xo.forEach(t),Kt=f(o),_e=r(o,"P",{});var Co=i(_e);Bs=c(Co,"The BLOOM model has been proposed with its various versions through the "),Ye=r(Co,"A",{href:!0,rel:!0});var Ht=i(Ye);Fs=c(Ht,"BigScience Workshop"),Ht.forEach(t),xs=c(Co,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),Co.forEach(t),Qt=f(o),M=r(o,"UL",{});var E=i(M);ot=r(E,"LI",{});var Vt=i(ot);Je=r(Vt,"A",{href:!0,rel:!0});var Ut=i(Je);Cs=c(Ut,"bloom-350m"),Ut.forEach(t),Vt.forEach(t),zs=f(E),tt=r(E,"LI",{});var Rt=i(tt);Ke=r(Rt,"A",{href:!0,rel:!0});var Gt=i(Ke);Ms=c(Gt,"bloom-760m"),Gt.forEach(t),Rt.forEach(t),qs=f(E),st=r(E,"LI",{});var Yt=i(st);Qe=r(Yt,"A",{href:!0,rel:!0});var Jt=i(Qe);Es=c(Jt,"bloom-1b3"),Jt.forEach(t),Yt.forEach(t),js=f(E),nt=r(E,"LI",{});var Xa=i(nt);Xe=r(Xa,"A",{href:!0,rel:!0});var Za=i(Xe);Ps=c(Za,"bloom-2b5"),Za.forEach(t),Xa.forEach(t),Ls=f(E),at=r(E,"LI",{});var er=i(at);Ze=r(er,"A",{href:!0,rel:!0});var or=i(Ze);Ss=c(or,"bloom-6b3"),or.forEach(t),er.forEach(t),Ns=f(E),zo=r(E,"LI",{});var Qa=i(zo);eo=r(Qa,"A",{href:!0,rel:!0});var tr=i(eo);As=c(tr,"bloom"),tr.forEach(t),Is=c(Qa," (175B parameters)"),Qa.forEach(t),E.forEach(t),Xt=f(o),te=r(o,"H2",{class:!0});var hs=i(te);be=r(hs,"A",{id:!0,class:!0,href:!0});var sr=i(be);rt=r(sr,"SPAN",{});var nr=i(rt);$(oo.$$.fragment,nr),nr.forEach(t),sr.forEach(t),Os=f(hs),it=r(hs,"SPAN",{});var ar=i(it);Ds=c(ar,"BloomConfig"),ar.forEach(t),hs.forEach(t),Zt=f(o),N=r(o,"DIV",{class:!0});var We=i(N);$(to.$$.fragment,We),Ws=f(We),se=r(We,"P",{});var Oo=i(se);Hs=c(Oo,"This is the configuration class to store the configuration of a "),Mo=r(Oo,"A",{href:!0});var rr=i(Mo);Vs=c(rr,"BloomModel"),rr.forEach(t),Us=c(Oo,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),so=r(Oo,"A",{href:!0,rel:!0});var ir=i(so);Rs=c(ir,"bigscience/bloom"),ir.forEach(t),Gs=c(Oo,"."),Oo.forEach(t),Ys=f(We),ne=r(We,"P",{});var Do=i(ne);Js=c(Do,"Configuration objects inherit from "),qo=r(Do,"A",{href:!0});var lr=i(qo);Ks=c(lr,"PretrainedConfig"),lr.forEach(t),Qs=c(Do,` and can be used to control the model outputs. Read the
documentation from `),Eo=r(Do,"A",{href:!0});var dr=i(Eo);Xs=c(dr,"PretrainedConfig"),dr.forEach(t),Zs=c(Do," for more information."),Do.forEach(t),en=f(We),$(ke.$$.fragment,We),We.forEach(t),es=f(o),ae=r(o,"H2",{class:!0});var us=i(ae);ve=r(us,"A",{id:!0,class:!0,href:!0});var cr=i(ve);lt=r(cr,"SPAN",{});var mr=i(lt);$(no.$$.fragment,mr),mr.forEach(t),cr.forEach(t),on=f(us),dt=r(us,"SPAN",{});var pr=i(dt);tn=c(pr,"BloomModel"),pr.forEach(t),us.forEach(t),os=f(o),U=r(o,"DIV",{class:!0});var Wo=i(U);$(ao.$$.fragment,Wo),sn=f(Wo),ct=r(Wo,"P",{});var hr=i(ct);nn=c(hr,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),hr.forEach(t),an=f(Wo),I=r(Wo,"DIV",{class:!0});var He=i(I);$(ro.$$.fragment,He),rn=f(He),re=r(He,"P",{});var Ho=i(re);ln=c(Ho,"The "),jo=r(Ho,"A",{href:!0});var ur=i(jo);dn=c(ur,"BloomModel"),ur.forEach(t),cn=c(Ho," forward method, overrides the "),mt=r(Ho,"CODE",{});var fr=i(mt);mn=c(fr,"__call__"),fr.forEach(t),pn=c(Ho," special method."),Ho.forEach(t),hn=f(He),$($e.$$.fragment,He),un=f(He),$(we.$$.fragment,He),He.forEach(t),Wo.forEach(t),ts=f(o),ie=r(o,"H2",{class:!0});var fs=i(ie);ye=r(fs,"A",{id:!0,class:!0,href:!0});var gr=i(ye);pt=r(gr,"SPAN",{});var _r=i(pt);$(io.$$.fragment,_r),_r.forEach(t),gr.forEach(t),fn=f(fs),ht=r(fs,"SPAN",{});var br=i(ht);gn=c(br,"BloomTokenizerFast"),br.forEach(t),fs.forEach(t),ss=f(o),C=r(o,"DIV",{class:!0});var P=i(C);$(lo.$$.fragment,P),_n=f(P),co=r(P,"P",{});var gs=i(co);bn=c(gs,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),ut=r(gs,"EM",{});var kr=i(ut);kn=c(kr,"tokenizers"),kr.forEach(t),vn=c(gs,` library). Based on byte-level
Byte-Pair-Encoding.`),gs.forEach(t),$n=f(P),ft=r(P,"P",{});var vr=i(ft);wn=c(vr,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),vr.forEach(t),yn=f(P),$(Te.$$.fragment,P),Tn=f(P),mo=r(P,"P",{});var _s=i(mo);Bn=c(_s,"You can get around that behavior by passing "),gt=r(_s,"CODE",{});var $r=i(gt);Fn=c($r,"add_prefix_space=True"),$r.forEach(t),xn=c(_s,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),_s.forEach(t),Cn=f(P),$(Be.$$.fragment,P),zn=f(P),po=r(P,"P",{});var bs=i(po);Mn=c(bs,"This tokenizer inherits from "),Po=r(bs,"A",{href:!0});var wr=i(Po);qn=c(wr,"PreTrainedTokenizerFast"),wr.forEach(t),En=c(bs,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),bs.forEach(t),P.forEach(t),ns=f(o),le=r(o,"H2",{class:!0});var ks=i(le);Fe=r(ks,"A",{id:!0,class:!0,href:!0});var yr=i(Fe);_t=r(yr,"SPAN",{});var Tr=i(_t);$(ho.$$.fragment,Tr),Tr.forEach(t),yr.forEach(t),jn=f(ks),bt=r(ks,"SPAN",{});var Br=i(bt);Pn=c(Br,"BloomForCausalLM"),Br.forEach(t),ks.forEach(t),as=f(o),R=r(o,"DIV",{class:!0});var Vo=i(R);$(uo.$$.fragment,Vo),Ln=f(Vo),kt=r(Vo,"P",{});var Fr=i(kt);Sn=c(Fr,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Fr.forEach(t),Nn=f(Vo),O=r(Vo,"DIV",{class:!0});var Ve=i(O);$(fo.$$.fragment,Ve),An=f(Ve),de=r(Ve,"P",{});var Uo=i(de);In=c(Uo,"The "),Lo=r(Uo,"A",{href:!0});var xr=i(Lo);On=c(xr,"BloomForCausalLM"),xr.forEach(t),Dn=c(Uo," forward method, overrides the "),vt=r(Uo,"CODE",{});var Cr=i(vt);Wn=c(Cr,"__call__"),Cr.forEach(t),Hn=c(Uo," special method."),Uo.forEach(t),Vn=f(Ve),$(xe.$$.fragment,Ve),Un=f(Ve),$(Ce.$$.fragment,Ve),Ve.forEach(t),Vo.forEach(t),rs=f(o),ce=r(o,"H2",{class:!0});var vs=i(ce);ze=r(vs,"A",{id:!0,class:!0,href:!0});var zr=i(ze);$t=r(zr,"SPAN",{});var Mr=i($t);$(go.$$.fragment,Mr),Mr.forEach(t),zr.forEach(t),Rn=f(vs),wt=r(vs,"SPAN",{});var qr=i(wt);Gn=c(qr,"BloomForPrefixLM"),qr.forEach(t),vs.forEach(t),is=f(o),G=r(o,"DIV",{class:!0});var Ro=i(G);$(_o.$$.fragment,Ro),Yn=f(Ro),Y=r(Ro,"P",{});var Ue=i(Y);Jn=c(Ue,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings). Uses prefix language modeling (bidirectional attention on inputs to `),yt=r(Ue,"CODE",{});var Er=i(yt);Kn=c(Er,"generate()"),Er.forEach(t),Qn=c(Ue,`) and can use an
additional mask passed as `),Tt=r(Ue,"CODE",{});var jr=i(Tt);Xn=c(jr,"prefix_mask"),jr.forEach(t),Zn=c(Ue,` to override the default prefix LM mask. See
`),bo=r(Ue,"A",{href:!0,rel:!0});var Pr=i(bo);ea=c(Pr,"https://arxiv.org/pdf/2204.05832.pdf"),Pr.forEach(t),oa=c(Ue," for more details."),Ue.forEach(t),ta=f(Ro),D=r(Ro,"DIV",{class:!0});var Re=i(D);$(ko.$$.fragment,Re),sa=f(Re),me=r(Re,"P",{});var Go=i(me);na=c(Go,"The "),So=r(Go,"A",{href:!0});var Lr=i(So);aa=c(Lr,"BloomForPrefixLM"),Lr.forEach(t),ra=c(Go," forward method, overrides the "),Bt=r(Go,"CODE",{});var Sr=i(Bt);ia=c(Sr,"__call__"),Sr.forEach(t),la=c(Go," special method."),Go.forEach(t),da=f(Re),$(Me.$$.fragment,Re),ca=f(Re),$(qe.$$.fragment,Re),Re.forEach(t),Ro.forEach(t),ls=f(o),pe=r(o,"H2",{class:!0});var $s=i(pe);Ee=r($s,"A",{id:!0,class:!0,href:!0});var Nr=i(Ee);Ft=r(Nr,"SPAN",{});var Ar=i(Ft);$(vo.$$.fragment,Ar),Ar.forEach(t),Nr.forEach(t),ma=f($s),xt=r($s,"SPAN",{});var Ir=i(xt);pa=c(Ir,"BloomForSequenceClassification"),Ir.forEach(t),$s.forEach(t),ds=f(o),J=r(o,"DIV",{class:!0});var Yo=i(J);$($o.$$.fragment,Yo),ha=f(Yo),q=r(Yo,"P",{});var W=i(q);ua=c(W,`The Bloom Model transformer with a sequence classification head on top (linear layer).
`),No=r(W,"A",{href:!0});var Or=i(No);fa=c(Or,"BloomForSequenceClassification"),Or.forEach(t),ga=c(W,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Ct=r(W,"CODE",{});var Dr=i(Ct);_a=c(Dr,"pad_token_id"),Dr.forEach(t),ba=c(W,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),zt=r(W,"CODE",{});var Wr=i(zt);ka=c(Wr,"pad_token_id"),Wr.forEach(t),va=c(W,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Mt=r(W,"CODE",{});var Hr=i(Mt);$a=c(Hr,"inputs_embeds"),Hr.forEach(t),wa=c(W," are passed instead of "),qt=r(W,"CODE",{});var Vr=i(qt);ya=c(Vr,"input_ids"),Vr.forEach(t),Ta=c(W,`, it does the same (take the last
value in each row of the batch).`),W.forEach(t),Ba=f(Yo),z=r(Yo,"DIV",{class:!0});var L=i(z);$(wo.$$.fragment,L),Fa=f(L),he=r(L,"P",{});var Jo=i(he);xa=c(Jo,"The "),Ao=r(Jo,"A",{href:!0});var Ur=i(Ao);Ca=c(Ur,"BloomForSequenceClassification"),Ur.forEach(t),za=c(Jo," forward method, overrides the "),Et=r(Jo,"CODE",{});var Rr=i(Et);Ma=c(Rr,"__call__"),Rr.forEach(t),qa=c(Jo," special method."),Jo.forEach(t),Ea=f(L),$(je.$$.fragment,L),ja=f(L),$(Pe.$$.fragment,L),Pa=f(L),$(Le.$$.fragment,L),La=f(L),$(Se.$$.fragment,L),Sa=f(L),$(Ne.$$.fragment,L),L.forEach(t),Yo.forEach(t),cs=f(o),ue=r(o,"H2",{class:!0});var ws=i(ue);Ae=r(ws,"A",{id:!0,class:!0,href:!0});var Gr=i(Ae);jt=r(Gr,"SPAN",{});var Yr=i(jt);$(yo.$$.fragment,Yr),Yr.forEach(t),Gr.forEach(t),Na=f(ws),Pt=r(ws,"SPAN",{});var Jr=i(Pt);Aa=c(Jr,"BloomForTokenClassification"),Jr.forEach(t),ws.forEach(t),ms=f(o),K=r(o,"DIV",{class:!0});var Ko=i(K);$(To.$$.fragment,Ko),Ia=f(Ko),Lt=r(Ko,"P",{});var Kr=i(Lt);Oa=c(Kr,`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kr.forEach(t),Da=f(Ko),j=r(Ko,"DIV",{class:!0});var ee=i(j);$(Bo.$$.fragment,ee),Wa=f(ee),fe=r(ee,"P",{});var Qo=i(fe);Ha=c(Qo,"The "),Io=r(Qo,"A",{href:!0});var Qr=i(Io);Va=c(Qr,"BloomForTokenClassification"),Qr.forEach(t),Ua=c(Qo," forward method, overrides the "),St=r(Qo,"CODE",{});var Xr=i(St);Ra=c(Xr,"__call__"),Xr.forEach(t),Ga=c(Qo," special method."),Qo.forEach(t),Ya=f(ee),$(Ie.$$.fragment,ee),Ja=f(ee),$(Oe.$$.fragment,ee),Ka=f(ee),$(De.$$.fragment,ee),ee.forEach(t),Ko.forEach(t),this.h()},h(){h(n,"name","hf:doc:metadata"),h(n,"content",JSON.stringify(wi)),h(m,"id","bloom"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#bloom"),h(l,"class","relative group"),h(V,"id","overview"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#overview"),h(A,"class","relative group"),h(Ye,"href","https://bigscience.huggingface.co/"),h(Ye,"rel","nofollow"),h(Je,"href","https://huggingface.co/bigscience/bloom-350m"),h(Je,"rel","nofollow"),h(Ke,"href","https://huggingface.co/bigscience/bloom-760m"),h(Ke,"rel","nofollow"),h(Qe,"href","https://huggingface.co/bigscience/bloom-1b3"),h(Qe,"rel","nofollow"),h(Xe,"href","https://huggingface.co/bigscience/bloom-2b5"),h(Xe,"rel","nofollow"),h(Ze,"href","https://huggingface.co/bigscience/bloom-6b3"),h(Ze,"rel","nofollow"),h(eo,"href","https://huggingface.co/bigscience/bloom"),h(eo,"rel","nofollow"),h(be,"id","transformers.BloomConfig"),h(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(be,"href","#transformers.BloomConfig"),h(te,"class","relative group"),h(Mo,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomModel"),h(so,"href","https://huggingface.co/bigscience/bloom"),h(so,"rel","nofollow"),h(qo,"href","/docs/transformers/pr_17944/en/main_classes/configuration#transformers.PretrainedConfig"),h(Eo,"href","/docs/transformers/pr_17944/en/main_classes/configuration#transformers.PretrainedConfig"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"id","transformers.BloomModel"),h(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ve,"href","#transformers.BloomModel"),h(ae,"class","relative group"),h(jo,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomModel"),h(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"id","transformers.BloomTokenizerFast"),h(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ye,"href","#transformers.BloomTokenizerFast"),h(ie,"class","relative group"),h(Po,"href","/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fe,"id","transformers.BloomForCausalLM"),h(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fe,"href","#transformers.BloomForCausalLM"),h(le,"class","relative group"),h(Lo,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForCausalLM"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ze,"id","transformers.BloomForPrefixLM"),h(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ze,"href","#transformers.BloomForPrefixLM"),h(ce,"class","relative group"),h(bo,"href","https://arxiv.org/pdf/2204.05832.pdf"),h(bo,"rel","nofollow"),h(So,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForPrefixLM"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ee,"id","transformers.BloomForSequenceClassification"),h(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ee,"href","#transformers.BloomForSequenceClassification"),h(pe,"class","relative group"),h(No,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForSequenceClassification"),h(Ao,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForSequenceClassification"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"id","transformers.BloomForTokenClassification"),h(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ae,"href","#transformers.BloomForTokenClassification"),h(ue,"class","relative group"),h(Io,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForTokenClassification"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,n),k(o,g,_),k(o,l,_),e(l,m),e(m,b),w(s,b,null),e(l,p),e(l,x),e(x,oe),k(o,S,_),k(o,A,_),e(A,V),e(V,Zo),w(Ge,Zo,null),e(A,ys),e(A,et),e(et,Ts),k(o,Kt,_),k(o,_e,_),e(_e,Bs),e(_e,Ye),e(Ye,Fs),e(_e,xs),k(o,Qt,_),k(o,M,_),e(M,ot),e(ot,Je),e(Je,Cs),e(M,zs),e(M,tt),e(tt,Ke),e(Ke,Ms),e(M,qs),e(M,st),e(st,Qe),e(Qe,Es),e(M,js),e(M,nt),e(nt,Xe),e(Xe,Ps),e(M,Ls),e(M,at),e(at,Ze),e(Ze,Ss),e(M,Ns),e(M,zo),e(zo,eo),e(eo,As),e(zo,Is),k(o,Xt,_),k(o,te,_),e(te,be),e(be,rt),w(oo,rt,null),e(te,Os),e(te,it),e(it,Ds),k(o,Zt,_),k(o,N,_),w(to,N,null),e(N,Ws),e(N,se),e(se,Hs),e(se,Mo),e(Mo,Vs),e(se,Us),e(se,so),e(so,Rs),e(se,Gs),e(N,Ys),e(N,ne),e(ne,Js),e(ne,qo),e(qo,Ks),e(ne,Qs),e(ne,Eo),e(Eo,Xs),e(ne,Zs),e(N,en),w(ke,N,null),k(o,es,_),k(o,ae,_),e(ae,ve),e(ve,lt),w(no,lt,null),e(ae,on),e(ae,dt),e(dt,tn),k(o,os,_),k(o,U,_),w(ao,U,null),e(U,sn),e(U,ct),e(ct,nn),e(U,an),e(U,I),w(ro,I,null),e(I,rn),e(I,re),e(re,ln),e(re,jo),e(jo,dn),e(re,cn),e(re,mt),e(mt,mn),e(re,pn),e(I,hn),w($e,I,null),e(I,un),w(we,I,null),k(o,ts,_),k(o,ie,_),e(ie,ye),e(ye,pt),w(io,pt,null),e(ie,fn),e(ie,ht),e(ht,gn),k(o,ss,_),k(o,C,_),w(lo,C,null),e(C,_n),e(C,co),e(co,bn),e(co,ut),e(ut,kn),e(co,vn),e(C,$n),e(C,ft),e(ft,wn),e(C,yn),w(Te,C,null),e(C,Tn),e(C,mo),e(mo,Bn),e(mo,gt),e(gt,Fn),e(mo,xn),e(C,Cn),w(Be,C,null),e(C,zn),e(C,po),e(po,Mn),e(po,Po),e(Po,qn),e(po,En),k(o,ns,_),k(o,le,_),e(le,Fe),e(Fe,_t),w(ho,_t,null),e(le,jn),e(le,bt),e(bt,Pn),k(o,as,_),k(o,R,_),w(uo,R,null),e(R,Ln),e(R,kt),e(kt,Sn),e(R,Nn),e(R,O),w(fo,O,null),e(O,An),e(O,de),e(de,In),e(de,Lo),e(Lo,On),e(de,Dn),e(de,vt),e(vt,Wn),e(de,Hn),e(O,Vn),w(xe,O,null),e(O,Un),w(Ce,O,null),k(o,rs,_),k(o,ce,_),e(ce,ze),e(ze,$t),w(go,$t,null),e(ce,Rn),e(ce,wt),e(wt,Gn),k(o,is,_),k(o,G,_),w(_o,G,null),e(G,Yn),e(G,Y),e(Y,Jn),e(Y,yt),e(yt,Kn),e(Y,Qn),e(Y,Tt),e(Tt,Xn),e(Y,Zn),e(Y,bo),e(bo,ea),e(Y,oa),e(G,ta),e(G,D),w(ko,D,null),e(D,sa),e(D,me),e(me,na),e(me,So),e(So,aa),e(me,ra),e(me,Bt),e(Bt,ia),e(me,la),e(D,da),w(Me,D,null),e(D,ca),w(qe,D,null),k(o,ls,_),k(o,pe,_),e(pe,Ee),e(Ee,Ft),w(vo,Ft,null),e(pe,ma),e(pe,xt),e(xt,pa),k(o,ds,_),k(o,J,_),w($o,J,null),e(J,ha),e(J,q),e(q,ua),e(q,No),e(No,fa),e(q,ga),e(q,Ct),e(Ct,_a),e(q,ba),e(q,zt),e(zt,ka),e(q,va),e(q,Mt),e(Mt,$a),e(q,wa),e(q,qt),e(qt,ya),e(q,Ta),e(J,Ba),e(J,z),w(wo,z,null),e(z,Fa),e(z,he),e(he,xa),e(he,Ao),e(Ao,Ca),e(he,za),e(he,Et),e(Et,Ma),e(he,qa),e(z,Ea),w(je,z,null),e(z,ja),w(Pe,z,null),e(z,Pa),w(Le,z,null),e(z,La),w(Se,z,null),e(z,Sa),w(Ne,z,null),k(o,cs,_),k(o,ue,_),e(ue,Ae),e(Ae,jt),w(yo,jt,null),e(ue,Na),e(ue,Pt),e(Pt,Aa),k(o,ms,_),k(o,K,_),w(To,K,null),e(K,Ia),e(K,Lt),e(Lt,Oa),e(K,Da),e(K,j),w(Bo,j,null),e(j,Wa),e(j,fe),e(fe,Ha),e(fe,Io),e(Io,Va),e(fe,Ua),e(fe,St),e(St,Ra),e(fe,Ga),e(j,Ya),w(Ie,j,null),e(j,Ja),w(Oe,j,null),e(j,Ka),w(De,j,null),ps=!0},p(o,[_]){const Fo={};_&2&&(Fo.$$scope={dirty:_,ctx:o}),ke.$set(Fo);const Nt={};_&2&&(Nt.$$scope={dirty:_,ctx:o}),$e.$set(Nt);const At={};_&2&&(At.$$scope={dirty:_,ctx:o}),we.$set(At);const It={};_&2&&(It.$$scope={dirty:_,ctx:o}),Te.$set(It);const xo={};_&2&&(xo.$$scope={dirty:_,ctx:o}),Be.$set(xo);const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:o}),xe.$set(Ot);const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:o}),Ce.$set(Dt);const Wt={};_&2&&(Wt.$$scope={dirty:_,ctx:o}),Me.$set(Wt);const Co={};_&2&&(Co.$$scope={dirty:_,ctx:o}),qe.$set(Co);const Ht={};_&2&&(Ht.$$scope={dirty:_,ctx:o}),je.$set(Ht);const E={};_&2&&(E.$$scope={dirty:_,ctx:o}),Pe.$set(E);const Vt={};_&2&&(Vt.$$scope={dirty:_,ctx:o}),Le.$set(Vt);const Ut={};_&2&&(Ut.$$scope={dirty:_,ctx:o}),Se.$set(Ut);const Rt={};_&2&&(Rt.$$scope={dirty:_,ctx:o}),Ne.$set(Rt);const Gt={};_&2&&(Gt.$$scope={dirty:_,ctx:o}),Ie.$set(Gt);const Yt={};_&2&&(Yt.$$scope={dirty:_,ctx:o}),Oe.$set(Yt);const Jt={};_&2&&(Jt.$$scope={dirty:_,ctx:o}),De.$set(Jt)},i(o){ps||(y(s.$$.fragment,o),y(Ge.$$.fragment,o),y(oo.$$.fragment,o),y(to.$$.fragment,o),y(ke.$$.fragment,o),y(no.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y($e.$$.fragment,o),y(we.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(Te.$$.fragment,o),y(Be.$$.fragment,o),y(ho.$$.fragment,o),y(uo.$$.fragment,o),y(fo.$$.fragment,o),y(xe.$$.fragment,o),y(Ce.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(ko.$$.fragment,o),y(Me.$$.fragment,o),y(qe.$$.fragment,o),y(vo.$$.fragment,o),y($o.$$.fragment,o),y(wo.$$.fragment,o),y(je.$$.fragment,o),y(Pe.$$.fragment,o),y(Le.$$.fragment,o),y(Se.$$.fragment,o),y(Ne.$$.fragment,o),y(yo.$$.fragment,o),y(To.$$.fragment,o),y(Bo.$$.fragment,o),y(Ie.$$.fragment,o),y(Oe.$$.fragment,o),y(De.$$.fragment,o),ps=!0)},o(o){T(s.$$.fragment,o),T(Ge.$$.fragment,o),T(oo.$$.fragment,o),T(to.$$.fragment,o),T(ke.$$.fragment,o),T(no.$$.fragment,o),T(ao.$$.fragment,o),T(ro.$$.fragment,o),T($e.$$.fragment,o),T(we.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(Te.$$.fragment,o),T(Be.$$.fragment,o),T(ho.$$.fragment,o),T(uo.$$.fragment,o),T(fo.$$.fragment,o),T(xe.$$.fragment,o),T(Ce.$$.fragment,o),T(go.$$.fragment,o),T(_o.$$.fragment,o),T(ko.$$.fragment,o),T(Me.$$.fragment,o),T(qe.$$.fragment,o),T(vo.$$.fragment,o),T($o.$$.fragment,o),T(wo.$$.fragment,o),T(je.$$.fragment,o),T(Pe.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Ne.$$.fragment,o),T(yo.$$.fragment,o),T(To.$$.fragment,o),T(Bo.$$.fragment,o),T(Ie.$$.fragment,o),T(Oe.$$.fragment,o),T(De.$$.fragment,o),ps=!1},d(o){t(n),o&&t(g),o&&t(l),B(s),o&&t(S),o&&t(A),B(Ge),o&&t(Kt),o&&t(_e),o&&t(Qt),o&&t(M),o&&t(Xt),o&&t(te),B(oo),o&&t(Zt),o&&t(N),B(to),B(ke),o&&t(es),o&&t(ae),B(no),o&&t(os),o&&t(U),B(ao),B(ro),B($e),B(we),o&&t(ts),o&&t(ie),B(io),o&&t(ss),o&&t(C),B(lo),B(Te),B(Be),o&&t(ns),o&&t(le),B(ho),o&&t(as),o&&t(R),B(uo),B(fo),B(xe),B(Ce),o&&t(rs),o&&t(ce),B(go),o&&t(is),o&&t(G),B(_o),B(ko),B(Me),B(qe),o&&t(ls),o&&t(pe),B(vo),o&&t(ds),o&&t(J),B($o),B(wo),B(je),B(Pe),B(Le),B(Se),B(Ne),o&&t(cs),o&&t(ue),B(yo),o&&t(ms),o&&t(K),B(To),B(Bo),B(Ie),B(Oe),B(De)}}}const wi={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"},{local:"transformers.BloomForPrefixLM",title:"BloomForPrefixLM"},{local:"transformers.BloomForSequenceClassification",title:"BloomForSequenceClassification"},{local:"transformers.BloomForTokenClassification",title:"BloomForTokenClassification"}],title:"BLOOM"};function yi(F){return si(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mi extends Zr{constructor(n){super();ei(this,n,yi,$i,oi,{})}}export{Mi as default,wi as metadata};
