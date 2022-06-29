import{S as Qi,i as Xi,s as Zi,e as s,k as h,w as k,t as a,M as ed,c as n,d as o,m as f,a as l,x as $,h as r,b as m,G as e,g as v,y as w,q as y,o as T,B,v as od,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as bs}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ne}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function td(C){let d,_,c,p,b;return p=new re({props:{code:`from transformers import BloomModel, BloomConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),_=a("Example:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Example:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function sd(C){let d,_,c,p,b;return{c(){d=s("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=l(c);p=r(x,"Module"),x.forEach(o),b=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){v(i,d,u),e(d,_),e(d,c),e(c,p),e(d,b)},d(i){i&&o(d)}}}function nd(C){let d,_,c,p,b;return p=new re({props:{code:`from transformers import BloomTokenizer, BloomModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=a("Example:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Example:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function ad(C){let d,_,c,p,b;return p=new re({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),_=a("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function rd(C){let d,_,c,p,b,i,u,x;return{c(){d=s("p"),_=a("When used with "),c=s("code"),p=a("is_split_into_words=True"),b=a(", this tokenizer needs to be instantiated with "),i=s("code"),u=a("add_prefix_space=True"),x=a(".")},l(le){d=n(le,"P",{});var H=l(d);_=r(H,"When used with "),c=n(H,"CODE",{});var R=l(c);p=r(R,"is_split_into_words=True"),R.forEach(o),b=r(H,", this tokenizer needs to be instantiated with "),i=n(H,"CODE",{});var K=l(i);u=r(K,"add_prefix_space=True"),K.forEach(o),x=r(H,"."),H.forEach(o)},m(le,H){v(le,d,H),e(d,_),e(d,c),e(c,p),e(d,b),e(d,i),e(i,u),e(d,x)},d(le){le&&o(d)}}}function ld(C){let d,_,c,p,b;return{c(){d=s("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=l(c);p=r(x,"Module"),x.forEach(o),b=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){v(i,d,u),e(d,_),e(d,c),e(c,p),e(d,b)},d(i){i&&o(d)}}}function id(C){let d,_,c,p,b;return p=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),_=a("Example:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Example:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function dd(C){let d,_,c,p,b;return{c(){d=s("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=l(c);p=r(x,"Module"),x.forEach(o),b=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){v(i,d,u),e(d,_),e(d,c),e(c,p),e(d,b)},d(i){i&&o(d)}}}function cd(C){let d,_,c,p,b;return p=new re({props:{code:`import torch
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
`}}),{c(){d=s("p"),_=a("Example of single-label classification:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Example of single-label classification:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function md(C){let d,_;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:ae,i(c){_||(y(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function pd(C){let d,_,c,p,b;return p=new re({props:{code:`import torch
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
`}}),{c(){d=s("p"),_=a("Example of multi-label classification:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Example of multi-label classification:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function hd(C){let d,_;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:ae,i(c){_||(y(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function fd(C){let d,_,c,p,b;return{c(){d=s("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=l(c);p=r(x,"Module"),x.forEach(o),b=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){v(i,d,u),e(d,_),e(d,c),e(c,p),e(d,b)},d(i){i&&o(d)}}}function ud(C){let d,_,c,p,b;return p=new re({props:{code:`from transformers import BloomTokenizer, BloomForTokenClassification
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
`}}),{c(){d=s("p"),_=a("Example:"),c=h(),k(p.$$.fragment)},l(i){d=n(i,"P",{});var u=l(d);_=r(u,"Example:"),u.forEach(o),c=f(i),$(p.$$.fragment,i)},m(i,u){v(i,d,u),e(d,_),v(i,c,u),w(p,i,u),b=!0},p:ae,i(i){b||(y(p.$$.fragment,i),b=!0)},o(i){T(p.$$.fragment,i),b=!1},d(i){i&&o(d),i&&o(c),B(p,i)}}}function gd(C){let d,_;return d=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:ae,i(c){_||(y(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function _d(C){let d,_,c,p,b,i,u,x,le,H,R,K,ut,Ke,sn,gt,nn,vs,we,an,Qe,rn,ln,ks,P,_t,Xe,dn,cn,bt,Ze,mn,pn,vt,eo,hn,fn,kt,oo,un,gn,$t,to,_n,bn,Go,so,vn,kn,$s,ie,ye,wt,no,$n,yt,wn,ws,U,ao,yn,de,Tn,Yo,Bn,Cn,ro,xn,Fn,zn,ce,Mn,Jo,En,qn,Ko,Pn,jn,Sn,Te,ys,me,Be,Tt,lo,Nn,Bt,Ln,Ts,j,io,An,Ct,In,On,co,Dn,Qo,Wn,Hn,Un,mo,Vn,po,Rn,Gn,Yn,G,ho,Jn,pe,Kn,Xo,Qn,Xn,xt,Zn,ea,oa,Ce,ta,xe,Bs,he,Fe,Ft,fo,sa,zt,na,Cs,z,uo,aa,go,ra,Mt,la,ia,da,Et,ca,ma,ze,pa,_o,ha,qt,fa,ua,ga,Me,_a,bo,ba,Zo,va,ka,xs,fe,Ee,Pt,vo,$a,jt,wa,Fs,S,ko,ya,St,Ta,Ba,$o,Ca,et,xa,Fa,za,wo,Ma,yo,Ea,qa,Pa,Y,To,ja,ue,Sa,ot,Na,La,Nt,Aa,Ia,Oa,qe,Da,Pe,zs,ge,je,Lt,Bo,Wa,At,Ha,Ms,N,Co,Ua,Q,Va,It,Ra,Ga,Ot,Ya,Ja,xo,Ka,Qa,Xa,Fo,Za,tt,er,or,tr,zo,sr,Mo,nr,ar,rr,Se,Eo,lr,F,ir,Dt,dr,cr,Wt,mr,pr,Ht,hr,fr,Ut,ur,gr,Vt,_r,br,Rt,vr,kr,Gt,$r,wr,Yt,yr,Es,_e,Ne,Jt,qo,Tr,Kt,Br,qs,M,Po,Cr,Qt,xr,Fr,st,nt,zr,Mr,Er,V,qr,Xt,Pr,jr,Zt,Sr,Nr,es,Lr,Ar,os,Ir,Or,Dr,jo,Wr,at,Hr,Ur,Vr,So,Rr,No,Gr,Yr,Jr,E,Lo,Kr,be,Qr,rt,Xr,Zr,ts,el,ol,tl,Le,sl,Ae,nl,Ie,al,Oe,rl,De,Ps,ve,We,ss,Ao,ll,ns,il,js,L,Io,dl,as,cl,ml,Oo,pl,lt,hl,fl,ul,Do,gl,Wo,_l,bl,vl,I,Ho,kl,ke,$l,it,wl,yl,rs,Tl,Bl,Cl,He,xl,Ue,Fl,Ve,Ss;return i=new $e({}),Ke=new $e({}),no=new $e({}),ao=new J({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"masked_softmax_fusion",val:" = True"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"attention_softmax_in_fp32",val:" = True"},{name:"pretraining_tp",val:" = 1"},{name:"dtype",val:" = 'bfloat16'"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
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
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/configuration_bloom.py#L32"}}),Te=new ne({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[td]},$$scope:{ctx:C}}}),lo=new $e({}),io=new J({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L706"}}),ho=new J({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"prefix_mask",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L735",returnDescription:`
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
`}}),Ce=new bs({props:{$$slots:{default:[sd]},$$scope:{ctx:C}}}),xe=new ne({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[nd]},$$scope:{ctx:C}}}),fo=new $e({}),uo=new J({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/tokenization_bloom_fast.py#L49"}}),ze=new ne({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[ad]},$$scope:{ctx:C}}}),Me=new bs({props:{$$slots:{default:[rd]},$$scope:{ctx:C}}}),vo=new $e({}),ko=new J({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L871"}}),To=new J({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"prefix_mask",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L914",returnDescription:`
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
`}}),qe=new bs({props:{$$slots:{default:[ld]},$$scope:{ctx:C}}}),Pe=new ne({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[id]},$$scope:{ctx:C}}}),Bo=new $e({}),Co=new J({props:{name:"class transformers.BloomForPrefixLM",anchor:"transformers.BloomForPrefixLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForPrefixLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1002"}}),Eo=new J({props:{name:"forward",anchor:"transformers.BloomForPrefixLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"prefix_mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1061"}}),qo=new $e({}),Po=new J({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1150"}}),Lo=new J({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1162",returnDescription:`
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
`}}),Le=new bs({props:{$$slots:{default:[dd]},$$scope:{ctx:C}}}),Ae=new ne({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[cd]},$$scope:{ctx:C}}}),Ie=new ne({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[md]},$$scope:{ctx:C}}}),Oe=new ne({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-3",$$slots:{default:[pd]},$$scope:{ctx:C}}}),De=new ne({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-4",$$slots:{default:[hd]},$$scope:{ctx:C}}}),Ao=new $e({}),Io=new J({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1271"}}),Ho=new J({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17944/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17944/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17944/src/transformers/models/bloom/modeling_bloom.py#L1291",returnDescription:`
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
`}}),He=new bs({props:{$$slots:{default:[fd]},$$scope:{ctx:C}}}),Ue=new ne({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[ud]},$$scope:{ctx:C}}}),Ve=new ne({props:{anchor:"transformers.BloomForTokenClassification.forward.example-2",$$slots:{default:[gd]},$$scope:{ctx:C}}}),{c(){d=s("meta"),_=h(),c=s("h1"),p=s("a"),b=s("span"),k(i.$$.fragment),u=h(),x=s("span"),le=a("BLOOM"),H=h(),R=s("h2"),K=s("a"),ut=s("span"),k(Ke.$$.fragment),sn=h(),gt=s("span"),nn=a("Overview"),vs=h(),we=s("p"),an=a("The BLOOM model has been proposed with its various versions through the "),Qe=s("a"),rn=a("BigScience Workshop"),ln=a(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),ks=h(),P=s("ul"),_t=s("li"),Xe=s("a"),dn=a("bloom-350m"),cn=h(),bt=s("li"),Ze=s("a"),mn=a("bloom-760m"),pn=h(),vt=s("li"),eo=s("a"),hn=a("bloom-1b3"),fn=h(),kt=s("li"),oo=s("a"),un=a("bloom-2b5"),gn=h(),$t=s("li"),to=s("a"),_n=a("bloom-6b3"),bn=h(),Go=s("li"),so=s("a"),vn=a("bloom"),kn=a(" (175B parameters)"),$s=h(),ie=s("h2"),ye=s("a"),wt=s("span"),k(no.$$.fragment),$n=h(),yt=s("span"),wn=a("BloomConfig"),ws=h(),U=s("div"),k(ao.$$.fragment),yn=h(),de=s("p"),Tn=a("This is the configuration class to store the configuration of a "),Yo=s("a"),Bn=a("BloomModel"),Cn=a(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ro=s("a"),xn=a("bigscience/bloom"),Fn=a("."),zn=h(),ce=s("p"),Mn=a("Configuration objects inherit from "),Jo=s("a"),En=a("PretrainedConfig"),qn=a(` and can be used to control the model outputs. Read the
documentation from `),Ko=s("a"),Pn=a("PretrainedConfig"),jn=a(" for more information."),Sn=h(),k(Te.$$.fragment),ys=h(),me=s("h2"),Be=s("a"),Tt=s("span"),k(lo.$$.fragment),Nn=h(),Bt=s("span"),Ln=a("BloomModel"),Ts=h(),j=s("div"),k(io.$$.fragment),An=h(),Ct=s("p"),In=a("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),On=h(),co=s("p"),Dn=a("This model inherits from "),Qo=s("a"),Wn=a("PreTrainedModel"),Hn=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Un=h(),mo=s("p"),Vn=a("This model is also a PyTorch "),po=s("a"),Rn=a("torch.nn.Module"),Gn=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yn=h(),G=s("div"),k(ho.$$.fragment),Jn=h(),pe=s("p"),Kn=a("The "),Xo=s("a"),Qn=a("BloomModel"),Xn=a(" forward method, overrides the "),xt=s("code"),Zn=a("__call__"),ea=a(" special method."),oa=h(),k(Ce.$$.fragment),ta=h(),k(xe.$$.fragment),Bs=h(),he=s("h2"),Fe=s("a"),Ft=s("span"),k(fo.$$.fragment),sa=h(),zt=s("span"),na=a("BloomTokenizerFast"),Cs=h(),z=s("div"),k(uo.$$.fragment),aa=h(),go=s("p"),ra=a("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),Mt=s("em"),la=a("tokenizers"),ia=a(` library). Based on byte-level
Byte-Pair-Encoding.`),da=h(),Et=s("p"),ca=a("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ma=h(),k(ze.$$.fragment),pa=h(),_o=s("p"),ha=a("You can get around that behavior by passing "),qt=s("code"),fa=a("add_prefix_space=True"),ua=a(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),ga=h(),k(Me.$$.fragment),_a=h(),bo=s("p"),ba=a("This tokenizer inherits from "),Zo=s("a"),va=a("PreTrainedTokenizerFast"),ka=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xs=h(),fe=s("h2"),Ee=s("a"),Pt=s("span"),k(vo.$$.fragment),$a=h(),jt=s("span"),wa=a("BloomForCausalLM"),Fs=h(),S=s("div"),k(ko.$$.fragment),ya=h(),St=s("p"),Ta=a(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ba=h(),$o=s("p"),Ca=a("This model inherits from "),et=s("a"),xa=a("PreTrainedModel"),Fa=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),za=h(),wo=s("p"),Ma=a("This model is also a PyTorch "),yo=s("a"),Ea=a("torch.nn.Module"),qa=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pa=h(),Y=s("div"),k(To.$$.fragment),ja=h(),ue=s("p"),Sa=a("The "),ot=s("a"),Na=a("BloomForCausalLM"),La=a(" forward method, overrides the "),Nt=s("code"),Aa=a("__call__"),Ia=a(" special method."),Oa=h(),k(qe.$$.fragment),Da=h(),k(Pe.$$.fragment),zs=h(),ge=s("h2"),je=s("a"),Lt=s("span"),k(Bo.$$.fragment),Wa=h(),At=s("span"),Ha=a("BloomForPrefixLM"),Ms=h(),N=s("div"),k(Co.$$.fragment),Ua=h(),Q=s("p"),Va=a(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings). Uses prefix language modeling (bidirectional attention on inputs to `),It=s("code"),Ra=a("generate()"),Ga=a(") and can use an additional mask passed as "),Ot=s("code"),Ya=a("prefix_mask"),Ja=a(`
to override the default prefix LM mask. See `),xo=s("a"),Ka=a("https://arxiv.org/pdf/2204.05832.pdf"),Qa=a(" for more details."),Xa=h(),Fo=s("p"),Za=a("This model inherits from "),tt=s("a"),er=a("PreTrainedModel"),or=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),tr=h(),zo=s("p"),sr=a("This model is also a PyTorch "),Mo=s("a"),nr=a("torch.nn.Module"),ar=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rr=h(),Se=s("div"),k(Eo.$$.fragment),lr=h(),F=s("p"),ir=a("labels ("),Dt=s("code"),dr=a("torch.LongTensor"),cr=a(" of shape "),Wt=s("code"),mr=a("(batch_size, sequence_length)"),pr=a(", "),Ht=s("em"),hr=a("optional"),fr=a(`):
Labels for language modeling. Note that the labels `),Ut=s("strong"),ur=a("are shifted"),gr=a(` inside the model, i.e. you can set
`),Vt=s("code"),_r=a("labels = input_ids"),br=a(" Indices are selected in "),Rt=s("code"),vr=a("[-100, 0, ..., config.vocab_size]"),kr=a(" All labels set to "),Gt=s("code"),$r=a("-100"),wr=a(`
are ignored (masked), the loss is only computed for labels in `),Yt=s("code"),yr=a("[0, ..., config.vocab_size]"),Es=h(),_e=s("h2"),Ne=s("a"),Jt=s("span"),k(qo.$$.fragment),Tr=h(),Kt=s("span"),Br=a("BloomForSequenceClassification"),qs=h(),M=s("div"),k(Po.$$.fragment),Cr=h(),Qt=s("p"),xr=a("The Bloom Model transformer with a sequence classification head on top (linear layer)."),Fr=h(),st=s("p"),nt=s("a"),zr=a("BloomForSequenceClassification"),Mr=a(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Er=h(),V=s("p"),qr=a(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Xt=s("code"),Pr=a("pad_token_id"),jr=a(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Zt=s("code"),Sr=a("pad_token_id"),Nr=a(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),es=s("code"),Lr=a("inputs_embeds"),Ar=a(" are passed instead of "),os=s("code"),Ir=a("input_ids"),Or=a(`, it does the same (take the last value in
each row of the batch).`),Dr=h(),jo=s("p"),Wr=a("This model inherits from "),at=s("a"),Hr=a("PreTrainedModel"),Ur=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Vr=h(),So=s("p"),Rr=a("This model is also a PyTorch "),No=s("a"),Gr=a("torch.nn.Module"),Yr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr=h(),E=s("div"),k(Lo.$$.fragment),Kr=h(),be=s("p"),Qr=a("The "),rt=s("a"),Xr=a("BloomForSequenceClassification"),Zr=a(" forward method, overrides the "),ts=s("code"),el=a("__call__"),ol=a(" special method."),tl=h(),k(Le.$$.fragment),sl=h(),k(Ae.$$.fragment),nl=h(),k(Ie.$$.fragment),al=h(),k(Oe.$$.fragment),rl=h(),k(De.$$.fragment),Ps=h(),ve=s("h2"),We=s("a"),ss=s("span"),k(Ao.$$.fragment),ll=h(),ns=s("span"),il=a("BloomForTokenClassification"),js=h(),L=s("div"),k(Io.$$.fragment),dl=h(),as=s("p"),cl=a(`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ml=h(),Oo=s("p"),pl=a("This model inherits from "),lt=s("a"),hl=a("PreTrainedModel"),fl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ul=h(),Do=s("p"),gl=a("This model is also a PyTorch "),Wo=s("a"),_l=a("torch.nn.Module"),bl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl=h(),I=s("div"),k(Ho.$$.fragment),kl=h(),ke=s("p"),$l=a("The "),it=s("a"),wl=a("BloomForTokenClassification"),yl=a(" forward method, overrides the "),rs=s("code"),Tl=a("__call__"),Bl=a(" special method."),Cl=h(),k(He.$$.fragment),xl=h(),k(Ue.$$.fragment),Fl=h(),k(Ve.$$.fragment),this.h()},l(t){const g=ed('[data-svelte="svelte-1phssyn"]',document.head);d=n(g,"META",{name:!0,content:!0}),g.forEach(o),_=f(t),c=n(t,"H1",{class:!0});var Uo=l(c);p=n(Uo,"A",{id:!0,class:!0,href:!0});var ls=l(p);b=n(ls,"SPAN",{});var is=l(b);$(i.$$.fragment,is),is.forEach(o),ls.forEach(o),u=f(Uo),x=n(Uo,"SPAN",{});var ds=l(x);le=r(ds,"BLOOM"),ds.forEach(o),Uo.forEach(o),H=f(t),R=n(t,"H2",{class:!0});var Vo=l(R);K=n(Vo,"A",{id:!0,class:!0,href:!0});var cs=l(K);ut=n(cs,"SPAN",{});var ms=l(ut);$(Ke.$$.fragment,ms),ms.forEach(o),cs.forEach(o),sn=f(Vo),gt=n(Vo,"SPAN",{});var ps=l(gt);nn=r(ps,"Overview"),ps.forEach(o),Vo.forEach(o),vs=f(t),we=n(t,"P",{});var Ro=l(we);an=r(Ro,"The BLOOM model has been proposed with its various versions through the "),Qe=n(Ro,"A",{href:!0,rel:!0});var hs=l(Qe);rn=r(hs,"BigScience Workshop"),hs.forEach(o),ln=r(Ro,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),Ro.forEach(o),ks=f(t),P=n(t,"UL",{});var A=l(P);_t=n(A,"LI",{});var fs=l(_t);Xe=n(fs,"A",{href:!0,rel:!0});var us=l(Xe);dn=r(us,"bloom-350m"),us.forEach(o),fs.forEach(o),cn=f(A),bt=n(A,"LI",{});var gs=l(bt);Ze=n(gs,"A",{href:!0,rel:!0});var _s=l(Ze);mn=r(_s,"bloom-760m"),_s.forEach(o),gs.forEach(o),pn=f(A),vt=n(A,"LI",{});var El=l(vt);eo=n(El,"A",{href:!0,rel:!0});var ql=l(eo);hn=r(ql,"bloom-1b3"),ql.forEach(o),El.forEach(o),fn=f(A),kt=n(A,"LI",{});var Pl=l(kt);oo=n(Pl,"A",{href:!0,rel:!0});var jl=l(oo);un=r(jl,"bloom-2b5"),jl.forEach(o),Pl.forEach(o),gn=f(A),$t=n(A,"LI",{});var Sl=l($t);to=n(Sl,"A",{href:!0,rel:!0});var Nl=l(to);_n=r(Nl,"bloom-6b3"),Nl.forEach(o),Sl.forEach(o),bn=f(A),Go=n(A,"LI",{});var zl=l(Go);so=n(zl,"A",{href:!0,rel:!0});var Ll=l(so);vn=r(Ll,"bloom"),Ll.forEach(o),kn=r(zl," (175B parameters)"),zl.forEach(o),A.forEach(o),$s=f(t),ie=n(t,"H2",{class:!0});var Ns=l(ie);ye=n(Ns,"A",{id:!0,class:!0,href:!0});var Al=l(ye);wt=n(Al,"SPAN",{});var Il=l(wt);$(no.$$.fragment,Il),Il.forEach(o),Al.forEach(o),$n=f(Ns),yt=n(Ns,"SPAN",{});var Ol=l(yt);wn=r(Ol,"BloomConfig"),Ol.forEach(o),Ns.forEach(o),ws=f(t),U=n(t,"DIV",{class:!0});var Re=l(U);$(ao.$$.fragment,Re),yn=f(Re),de=n(Re,"P",{});var dt=l(de);Tn=r(dt,"This is the configuration class to store the configuration of a "),Yo=n(dt,"A",{href:!0});var Dl=l(Yo);Bn=r(Dl,"BloomModel"),Dl.forEach(o),Cn=r(dt,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ro=n(dt,"A",{href:!0,rel:!0});var Wl=l(ro);xn=r(Wl,"bigscience/bloom"),Wl.forEach(o),Fn=r(dt,"."),dt.forEach(o),zn=f(Re),ce=n(Re,"P",{});var ct=l(ce);Mn=r(ct,"Configuration objects inherit from "),Jo=n(ct,"A",{href:!0});var Hl=l(Jo);En=r(Hl,"PretrainedConfig"),Hl.forEach(o),qn=r(ct,` and can be used to control the model outputs. Read the
documentation from `),Ko=n(ct,"A",{href:!0});var Ul=l(Ko);Pn=r(Ul,"PretrainedConfig"),Ul.forEach(o),jn=r(ct," for more information."),ct.forEach(o),Sn=f(Re),$(Te.$$.fragment,Re),Re.forEach(o),ys=f(t),me=n(t,"H2",{class:!0});var Ls=l(me);Be=n(Ls,"A",{id:!0,class:!0,href:!0});var Vl=l(Be);Tt=n(Vl,"SPAN",{});var Rl=l(Tt);$(lo.$$.fragment,Rl),Rl.forEach(o),Vl.forEach(o),Nn=f(Ls),Bt=n(Ls,"SPAN",{});var Gl=l(Bt);Ln=r(Gl,"BloomModel"),Gl.forEach(o),Ls.forEach(o),Ts=f(t),j=n(t,"DIV",{class:!0});var X=l(j);$(io.$$.fragment,X),An=f(X),Ct=n(X,"P",{});var Yl=l(Ct);In=r(Yl,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Yl.forEach(o),On=f(X),co=n(X,"P",{});var As=l(co);Dn=r(As,"This model inherits from "),Qo=n(As,"A",{href:!0});var Jl=l(Qo);Wn=r(Jl,"PreTrainedModel"),Jl.forEach(o),Hn=r(As,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),As.forEach(o),Un=f(X),mo=n(X,"P",{});var Is=l(mo);Vn=r(Is,"This model is also a PyTorch "),po=n(Is,"A",{href:!0,rel:!0});var Kl=l(po);Rn=r(Kl,"torch.nn.Module"),Kl.forEach(o),Gn=r(Is,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Is.forEach(o),Yn=f(X),G=n(X,"DIV",{class:!0});var Ge=l(G);$(ho.$$.fragment,Ge),Jn=f(Ge),pe=n(Ge,"P",{});var mt=l(pe);Kn=r(mt,"The "),Xo=n(mt,"A",{href:!0});var Ql=l(Xo);Qn=r(Ql,"BloomModel"),Ql.forEach(o),Xn=r(mt," forward method, overrides the "),xt=n(mt,"CODE",{});var Xl=l(xt);Zn=r(Xl,"__call__"),Xl.forEach(o),ea=r(mt," special method."),mt.forEach(o),oa=f(Ge),$(Ce.$$.fragment,Ge),ta=f(Ge),$(xe.$$.fragment,Ge),Ge.forEach(o),X.forEach(o),Bs=f(t),he=n(t,"H2",{class:!0});var Os=l(he);Fe=n(Os,"A",{id:!0,class:!0,href:!0});var Zl=l(Fe);Ft=n(Zl,"SPAN",{});var ei=l(Ft);$(fo.$$.fragment,ei),ei.forEach(o),Zl.forEach(o),sa=f(Os),zt=n(Os,"SPAN",{});var oi=l(zt);na=r(oi,"BloomTokenizerFast"),oi.forEach(o),Os.forEach(o),Cs=f(t),z=n(t,"DIV",{class:!0});var O=l(z);$(uo.$$.fragment,O),aa=f(O),go=n(O,"P",{});var Ds=l(go);ra=r(Ds,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),Mt=n(Ds,"EM",{});var ti=l(Mt);la=r(ti,"tokenizers"),ti.forEach(o),ia=r(Ds,` library). Based on byte-level
Byte-Pair-Encoding.`),Ds.forEach(o),da=f(O),Et=n(O,"P",{});var si=l(Et);ca=r(si,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),si.forEach(o),ma=f(O),$(ze.$$.fragment,O),pa=f(O),_o=n(O,"P",{});var Ws=l(_o);ha=r(Ws,"You can get around that behavior by passing "),qt=n(Ws,"CODE",{});var ni=l(qt);fa=r(ni,"add_prefix_space=True"),ni.forEach(o),ua=r(Ws,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ws.forEach(o),ga=f(O),$(Me.$$.fragment,O),_a=f(O),bo=n(O,"P",{});var Hs=l(bo);ba=r(Hs,"This tokenizer inherits from "),Zo=n(Hs,"A",{href:!0});var ai=l(Zo);va=r(ai,"PreTrainedTokenizerFast"),ai.forEach(o),ka=r(Hs,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hs.forEach(o),O.forEach(o),xs=f(t),fe=n(t,"H2",{class:!0});var Us=l(fe);Ee=n(Us,"A",{id:!0,class:!0,href:!0});var ri=l(Ee);Pt=n(ri,"SPAN",{});var li=l(Pt);$(vo.$$.fragment,li),li.forEach(o),ri.forEach(o),$a=f(Us),jt=n(Us,"SPAN",{});var ii=l(jt);wa=r(ii,"BloomForCausalLM"),ii.forEach(o),Us.forEach(o),Fs=f(t),S=n(t,"DIV",{class:!0});var Z=l(S);$(ko.$$.fragment,Z),ya=f(Z),St=n(Z,"P",{});var di=l(St);Ta=r(di,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),di.forEach(o),Ba=f(Z),$o=n(Z,"P",{});var Vs=l($o);Ca=r(Vs,"This model inherits from "),et=n(Vs,"A",{href:!0});var ci=l(et);xa=r(ci,"PreTrainedModel"),ci.forEach(o),Fa=r(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Vs.forEach(o),za=f(Z),wo=n(Z,"P",{});var Rs=l(wo);Ma=r(Rs,"This model is also a PyTorch "),yo=n(Rs,"A",{href:!0,rel:!0});var mi=l(yo);Ea=r(mi,"torch.nn.Module"),mi.forEach(o),qa=r(Rs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rs.forEach(o),Pa=f(Z),Y=n(Z,"DIV",{class:!0});var Ye=l(Y);$(To.$$.fragment,Ye),ja=f(Ye),ue=n(Ye,"P",{});var pt=l(ue);Sa=r(pt,"The "),ot=n(pt,"A",{href:!0});var pi=l(ot);Na=r(pi,"BloomForCausalLM"),pi.forEach(o),La=r(pt," forward method, overrides the "),Nt=n(pt,"CODE",{});var hi=l(Nt);Aa=r(hi,"__call__"),hi.forEach(o),Ia=r(pt," special method."),pt.forEach(o),Oa=f(Ye),$(qe.$$.fragment,Ye),Da=f(Ye),$(Pe.$$.fragment,Ye),Ye.forEach(o),Z.forEach(o),zs=f(t),ge=n(t,"H2",{class:!0});var Gs=l(ge);je=n(Gs,"A",{id:!0,class:!0,href:!0});var fi=l(je);Lt=n(fi,"SPAN",{});var ui=l(Lt);$(Bo.$$.fragment,ui),ui.forEach(o),fi.forEach(o),Wa=f(Gs),At=n(Gs,"SPAN",{});var gi=l(At);Ha=r(gi,"BloomForPrefixLM"),gi.forEach(o),Gs.forEach(o),Ms=f(t),N=n(t,"DIV",{class:!0});var ee=l(N);$(Co.$$.fragment,ee),Ua=f(ee),Q=n(ee,"P",{});var Je=l(Q);Va=r(Je,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings). Uses prefix language modeling (bidirectional attention on inputs to `),It=n(Je,"CODE",{});var _i=l(It);Ra=r(_i,"generate()"),_i.forEach(o),Ga=r(Je,") and can use an additional mask passed as "),Ot=n(Je,"CODE",{});var bi=l(Ot);Ya=r(bi,"prefix_mask"),bi.forEach(o),Ja=r(Je,`
to override the default prefix LM mask. See `),xo=n(Je,"A",{href:!0,rel:!0});var vi=l(xo);Ka=r(vi,"https://arxiv.org/pdf/2204.05832.pdf"),vi.forEach(o),Qa=r(Je," for more details."),Je.forEach(o),Xa=f(ee),Fo=n(ee,"P",{});var Ys=l(Fo);Za=r(Ys,"This model inherits from "),tt=n(Ys,"A",{href:!0});var ki=l(tt);er=r(ki,"PreTrainedModel"),ki.forEach(o),or=r(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ys.forEach(o),tr=f(ee),zo=n(ee,"P",{});var Js=l(zo);sr=r(Js,"This model is also a PyTorch "),Mo=n(Js,"A",{href:!0,rel:!0});var $i=l(Mo);nr=r($i,"torch.nn.Module"),$i.forEach(o),ar=r(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(o),rr=f(ee),Se=n(ee,"DIV",{class:!0});var Ks=l(Se);$(Eo.$$.fragment,Ks),lr=f(Ks),F=n(Ks,"P",{});var q=l(F);ir=r(q,"labels ("),Dt=n(q,"CODE",{});var wi=l(Dt);dr=r(wi,"torch.LongTensor"),wi.forEach(o),cr=r(q," of shape "),Wt=n(q,"CODE",{});var yi=l(Wt);mr=r(yi,"(batch_size, sequence_length)"),yi.forEach(o),pr=r(q,", "),Ht=n(q,"EM",{});var Ti=l(Ht);hr=r(Ti,"optional"),Ti.forEach(o),fr=r(q,`):
Labels for language modeling. Note that the labels `),Ut=n(q,"STRONG",{});var Bi=l(Ut);ur=r(Bi,"are shifted"),Bi.forEach(o),gr=r(q,` inside the model, i.e. you can set
`),Vt=n(q,"CODE",{});var Ci=l(Vt);_r=r(Ci,"labels = input_ids"),Ci.forEach(o),br=r(q," Indices are selected in "),Rt=n(q,"CODE",{});var xi=l(Rt);vr=r(xi,"[-100, 0, ..., config.vocab_size]"),xi.forEach(o),kr=r(q," All labels set to "),Gt=n(q,"CODE",{});var Fi=l(Gt);$r=r(Fi,"-100"),Fi.forEach(o),wr=r(q,`
are ignored (masked), the loss is only computed for labels in `),Yt=n(q,"CODE",{});var zi=l(Yt);yr=r(zi,"[0, ..., config.vocab_size]"),zi.forEach(o),q.forEach(o),Ks.forEach(o),ee.forEach(o),Es=f(t),_e=n(t,"H2",{class:!0});var Qs=l(_e);Ne=n(Qs,"A",{id:!0,class:!0,href:!0});var Mi=l(Ne);Jt=n(Mi,"SPAN",{});var Ei=l(Jt);$(qo.$$.fragment,Ei),Ei.forEach(o),Mi.forEach(o),Tr=f(Qs),Kt=n(Qs,"SPAN",{});var qi=l(Kt);Br=r(qi,"BloomForSequenceClassification"),qi.forEach(o),Qs.forEach(o),qs=f(t),M=n(t,"DIV",{class:!0});var D=l(M);$(Po.$$.fragment,D),Cr=f(D),Qt=n(D,"P",{});var Pi=l(Qt);xr=r(Pi,"The Bloom Model transformer with a sequence classification head on top (linear layer)."),Pi.forEach(o),Fr=f(D),st=n(D,"P",{});var Ml=l(st);nt=n(Ml,"A",{href:!0});var ji=l(nt);zr=r(ji,"BloomForSequenceClassification"),ji.forEach(o),Mr=r(Ml,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Ml.forEach(o),Er=f(D),V=n(D,"P",{});var oe=l(V);qr=r(oe,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Xt=n(oe,"CODE",{});var Si=l(Xt);Pr=r(Si,"pad_token_id"),Si.forEach(o),jr=r(oe,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Zt=n(oe,"CODE",{});var Ni=l(Zt);Sr=r(Ni,"pad_token_id"),Ni.forEach(o),Nr=r(oe,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),es=n(oe,"CODE",{});var Li=l(es);Lr=r(Li,"inputs_embeds"),Li.forEach(o),Ar=r(oe," are passed instead of "),os=n(oe,"CODE",{});var Ai=l(os);Ir=r(Ai,"input_ids"),Ai.forEach(o),Or=r(oe,`, it does the same (take the last value in
each row of the batch).`),oe.forEach(o),Dr=f(D),jo=n(D,"P",{});var Xs=l(jo);Wr=r(Xs,"This model inherits from "),at=n(Xs,"A",{href:!0});var Ii=l(at);Hr=r(Ii,"PreTrainedModel"),Ii.forEach(o),Ur=r(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Xs.forEach(o),Vr=f(D),So=n(D,"P",{});var Zs=l(So);Rr=r(Zs,"This model is also a PyTorch "),No=n(Zs,"A",{href:!0,rel:!0});var Oi=l(No);Gr=r(Oi,"torch.nn.Module"),Oi.forEach(o),Yr=r(Zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zs.forEach(o),Jr=f(D),E=n(D,"DIV",{class:!0});var W=l(E);$(Lo.$$.fragment,W),Kr=f(W),be=n(W,"P",{});var ht=l(be);Qr=r(ht,"The "),rt=n(ht,"A",{href:!0});var Di=l(rt);Xr=r(Di,"BloomForSequenceClassification"),Di.forEach(o),Zr=r(ht," forward method, overrides the "),ts=n(ht,"CODE",{});var Wi=l(ts);el=r(Wi,"__call__"),Wi.forEach(o),ol=r(ht," special method."),ht.forEach(o),tl=f(W),$(Le.$$.fragment,W),sl=f(W),$(Ae.$$.fragment,W),nl=f(W),$(Ie.$$.fragment,W),al=f(W),$(Oe.$$.fragment,W),rl=f(W),$(De.$$.fragment,W),W.forEach(o),D.forEach(o),Ps=f(t),ve=n(t,"H2",{class:!0});var en=l(ve);We=n(en,"A",{id:!0,class:!0,href:!0});var Hi=l(We);ss=n(Hi,"SPAN",{});var Ui=l(ss);$(Ao.$$.fragment,Ui),Ui.forEach(o),Hi.forEach(o),ll=f(en),ns=n(en,"SPAN",{});var Vi=l(ns);il=r(Vi,"BloomForTokenClassification"),Vi.forEach(o),en.forEach(o),js=f(t),L=n(t,"DIV",{class:!0});var te=l(L);$(Io.$$.fragment,te),dl=f(te),as=n(te,"P",{});var Ri=l(as);cl=r(Ri,`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ri.forEach(o),ml=f(te),Oo=n(te,"P",{});var on=l(Oo);pl=r(on,"This model inherits from "),lt=n(on,"A",{href:!0});var Gi=l(lt);hl=r(Gi,"PreTrainedModel"),Gi.forEach(o),fl=r(on,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),on.forEach(o),ul=f(te),Do=n(te,"P",{});var tn=l(Do);gl=r(tn,"This model is also a PyTorch "),Wo=n(tn,"A",{href:!0,rel:!0});var Yi=l(Wo);_l=r(Yi,"torch.nn.Module"),Yi.forEach(o),bl=r(tn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn.forEach(o),vl=f(te),I=n(te,"DIV",{class:!0});var se=l(I);$(Ho.$$.fragment,se),kl=f(se),ke=n(se,"P",{});var ft=l(ke);$l=r(ft,"The "),it=n(ft,"A",{href:!0});var Ji=l(it);wl=r(Ji,"BloomForTokenClassification"),Ji.forEach(o),yl=r(ft," forward method, overrides the "),rs=n(ft,"CODE",{});var Ki=l(rs);Tl=r(Ki,"__call__"),Ki.forEach(o),Bl=r(ft," special method."),ft.forEach(o),Cl=f(se),$(He.$$.fragment,se),xl=f(se),$(Ue.$$.fragment,se),Fl=f(se),$(Ve.$$.fragment,se),se.forEach(o),te.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(bd)),m(p,"id","bloom"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#bloom"),m(c,"class","relative group"),m(K,"id","overview"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#overview"),m(R,"class","relative group"),m(Qe,"href","https://bigscience.huggingface.co/"),m(Qe,"rel","nofollow"),m(Xe,"href","https://huggingface.co/bigscience/bloom-350m"),m(Xe,"rel","nofollow"),m(Ze,"href","https://huggingface.co/bigscience/bloom-760m"),m(Ze,"rel","nofollow"),m(eo,"href","https://huggingface.co/bigscience/bloom-1b3"),m(eo,"rel","nofollow"),m(oo,"href","https://huggingface.co/bigscience/bloom-2b5"),m(oo,"rel","nofollow"),m(to,"href","https://huggingface.co/bigscience/bloom-6b3"),m(to,"rel","nofollow"),m(so,"href","https://huggingface.co/bigscience/bloom"),m(so,"rel","nofollow"),m(ye,"id","transformers.BloomConfig"),m(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ye,"href","#transformers.BloomConfig"),m(ie,"class","relative group"),m(Yo,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomModel"),m(ro,"href","https://huggingface.co/bigscience/bloom"),m(ro,"rel","nofollow"),m(Jo,"href","/docs/transformers/pr_17944/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ko,"href","/docs/transformers/pr_17944/en/main_classes/configuration#transformers.PretrainedConfig"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Be,"id","transformers.BloomModel"),m(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Be,"href","#transformers.BloomModel"),m(me,"class","relative group"),m(Qo,"href","/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel"),m(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(po,"rel","nofollow"),m(Xo,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomModel"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"id","transformers.BloomTokenizerFast"),m(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fe,"href","#transformers.BloomTokenizerFast"),m(he,"class","relative group"),m(Zo,"href","/docs/transformers/pr_17944/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"id","transformers.BloomForCausalLM"),m(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ee,"href","#transformers.BloomForCausalLM"),m(fe,"class","relative group"),m(et,"href","/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel"),m(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(yo,"rel","nofollow"),m(ot,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForCausalLM"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"id","transformers.BloomForPrefixLM"),m(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(je,"href","#transformers.BloomForPrefixLM"),m(ge,"class","relative group"),m(xo,"href","https://arxiv.org/pdf/2204.05832.pdf"),m(xo,"rel","nofollow"),m(tt,"href","/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel"),m(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Mo,"rel","nofollow"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"id","transformers.BloomForSequenceClassification"),m(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ne,"href","#transformers.BloomForSequenceClassification"),m(_e,"class","relative group"),m(nt,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForSequenceClassification"),m(at,"href","/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel"),m(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(No,"rel","nofollow"),m(rt,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForSequenceClassification"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.BloomForTokenClassification"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.BloomForTokenClassification"),m(ve,"class","relative group"),m(lt,"href","/docs/transformers/pr_17944/en/main_classes/model#transformers.PreTrainedModel"),m(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Wo,"rel","nofollow"),m(it,"href","/docs/transformers/pr_17944/en/model_doc/bloom#transformers.BloomForTokenClassification"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,_,g),v(t,c,g),e(c,p),e(p,b),w(i,b,null),e(c,u),e(c,x),e(x,le),v(t,H,g),v(t,R,g),e(R,K),e(K,ut),w(Ke,ut,null),e(R,sn),e(R,gt),e(gt,nn),v(t,vs,g),v(t,we,g),e(we,an),e(we,Qe),e(Qe,rn),e(we,ln),v(t,ks,g),v(t,P,g),e(P,_t),e(_t,Xe),e(Xe,dn),e(P,cn),e(P,bt),e(bt,Ze),e(Ze,mn),e(P,pn),e(P,vt),e(vt,eo),e(eo,hn),e(P,fn),e(P,kt),e(kt,oo),e(oo,un),e(P,gn),e(P,$t),e($t,to),e(to,_n),e(P,bn),e(P,Go),e(Go,so),e(so,vn),e(Go,kn),v(t,$s,g),v(t,ie,g),e(ie,ye),e(ye,wt),w(no,wt,null),e(ie,$n),e(ie,yt),e(yt,wn),v(t,ws,g),v(t,U,g),w(ao,U,null),e(U,yn),e(U,de),e(de,Tn),e(de,Yo),e(Yo,Bn),e(de,Cn),e(de,ro),e(ro,xn),e(de,Fn),e(U,zn),e(U,ce),e(ce,Mn),e(ce,Jo),e(Jo,En),e(ce,qn),e(ce,Ko),e(Ko,Pn),e(ce,jn),e(U,Sn),w(Te,U,null),v(t,ys,g),v(t,me,g),e(me,Be),e(Be,Tt),w(lo,Tt,null),e(me,Nn),e(me,Bt),e(Bt,Ln),v(t,Ts,g),v(t,j,g),w(io,j,null),e(j,An),e(j,Ct),e(Ct,In),e(j,On),e(j,co),e(co,Dn),e(co,Qo),e(Qo,Wn),e(co,Hn),e(j,Un),e(j,mo),e(mo,Vn),e(mo,po),e(po,Rn),e(mo,Gn),e(j,Yn),e(j,G),w(ho,G,null),e(G,Jn),e(G,pe),e(pe,Kn),e(pe,Xo),e(Xo,Qn),e(pe,Xn),e(pe,xt),e(xt,Zn),e(pe,ea),e(G,oa),w(Ce,G,null),e(G,ta),w(xe,G,null),v(t,Bs,g),v(t,he,g),e(he,Fe),e(Fe,Ft),w(fo,Ft,null),e(he,sa),e(he,zt),e(zt,na),v(t,Cs,g),v(t,z,g),w(uo,z,null),e(z,aa),e(z,go),e(go,ra),e(go,Mt),e(Mt,la),e(go,ia),e(z,da),e(z,Et),e(Et,ca),e(z,ma),w(ze,z,null),e(z,pa),e(z,_o),e(_o,ha),e(_o,qt),e(qt,fa),e(_o,ua),e(z,ga),w(Me,z,null),e(z,_a),e(z,bo),e(bo,ba),e(bo,Zo),e(Zo,va),e(bo,ka),v(t,xs,g),v(t,fe,g),e(fe,Ee),e(Ee,Pt),w(vo,Pt,null),e(fe,$a),e(fe,jt),e(jt,wa),v(t,Fs,g),v(t,S,g),w(ko,S,null),e(S,ya),e(S,St),e(St,Ta),e(S,Ba),e(S,$o),e($o,Ca),e($o,et),e(et,xa),e($o,Fa),e(S,za),e(S,wo),e(wo,Ma),e(wo,yo),e(yo,Ea),e(wo,qa),e(S,Pa),e(S,Y),w(To,Y,null),e(Y,ja),e(Y,ue),e(ue,Sa),e(ue,ot),e(ot,Na),e(ue,La),e(ue,Nt),e(Nt,Aa),e(ue,Ia),e(Y,Oa),w(qe,Y,null),e(Y,Da),w(Pe,Y,null),v(t,zs,g),v(t,ge,g),e(ge,je),e(je,Lt),w(Bo,Lt,null),e(ge,Wa),e(ge,At),e(At,Ha),v(t,Ms,g),v(t,N,g),w(Co,N,null),e(N,Ua),e(N,Q),e(Q,Va),e(Q,It),e(It,Ra),e(Q,Ga),e(Q,Ot),e(Ot,Ya),e(Q,Ja),e(Q,xo),e(xo,Ka),e(Q,Qa),e(N,Xa),e(N,Fo),e(Fo,Za),e(Fo,tt),e(tt,er),e(Fo,or),e(N,tr),e(N,zo),e(zo,sr),e(zo,Mo),e(Mo,nr),e(zo,ar),e(N,rr),e(N,Se),w(Eo,Se,null),e(Se,lr),e(Se,F),e(F,ir),e(F,Dt),e(Dt,dr),e(F,cr),e(F,Wt),e(Wt,mr),e(F,pr),e(F,Ht),e(Ht,hr),e(F,fr),e(F,Ut),e(Ut,ur),e(F,gr),e(F,Vt),e(Vt,_r),e(F,br),e(F,Rt),e(Rt,vr),e(F,kr),e(F,Gt),e(Gt,$r),e(F,wr),e(F,Yt),e(Yt,yr),v(t,Es,g),v(t,_e,g),e(_e,Ne),e(Ne,Jt),w(qo,Jt,null),e(_e,Tr),e(_e,Kt),e(Kt,Br),v(t,qs,g),v(t,M,g),w(Po,M,null),e(M,Cr),e(M,Qt),e(Qt,xr),e(M,Fr),e(M,st),e(st,nt),e(nt,zr),e(st,Mr),e(M,Er),e(M,V),e(V,qr),e(V,Xt),e(Xt,Pr),e(V,jr),e(V,Zt),e(Zt,Sr),e(V,Nr),e(V,es),e(es,Lr),e(V,Ar),e(V,os),e(os,Ir),e(V,Or),e(M,Dr),e(M,jo),e(jo,Wr),e(jo,at),e(at,Hr),e(jo,Ur),e(M,Vr),e(M,So),e(So,Rr),e(So,No),e(No,Gr),e(So,Yr),e(M,Jr),e(M,E),w(Lo,E,null),e(E,Kr),e(E,be),e(be,Qr),e(be,rt),e(rt,Xr),e(be,Zr),e(be,ts),e(ts,el),e(be,ol),e(E,tl),w(Le,E,null),e(E,sl),w(Ae,E,null),e(E,nl),w(Ie,E,null),e(E,al),w(Oe,E,null),e(E,rl),w(De,E,null),v(t,Ps,g),v(t,ve,g),e(ve,We),e(We,ss),w(Ao,ss,null),e(ve,ll),e(ve,ns),e(ns,il),v(t,js,g),v(t,L,g),w(Io,L,null),e(L,dl),e(L,as),e(as,cl),e(L,ml),e(L,Oo),e(Oo,pl),e(Oo,lt),e(lt,hl),e(Oo,fl),e(L,ul),e(L,Do),e(Do,gl),e(Do,Wo),e(Wo,_l),e(Do,bl),e(L,vl),e(L,I),w(Ho,I,null),e(I,kl),e(I,ke),e(ke,$l),e(ke,it),e(it,wl),e(ke,yl),e(ke,rs),e(rs,Tl),e(ke,Bl),e(I,Cl),w(He,I,null),e(I,xl),w(Ue,I,null),e(I,Fl),w(Ve,I,null),Ss=!0},p(t,[g]){const Uo={};g&2&&(Uo.$$scope={dirty:g,ctx:t}),Te.$set(Uo);const ls={};g&2&&(ls.$$scope={dirty:g,ctx:t}),Ce.$set(ls);const is={};g&2&&(is.$$scope={dirty:g,ctx:t}),xe.$set(is);const ds={};g&2&&(ds.$$scope={dirty:g,ctx:t}),ze.$set(ds);const Vo={};g&2&&(Vo.$$scope={dirty:g,ctx:t}),Me.$set(Vo);const cs={};g&2&&(cs.$$scope={dirty:g,ctx:t}),qe.$set(cs);const ms={};g&2&&(ms.$$scope={dirty:g,ctx:t}),Pe.$set(ms);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:t}),Le.$set(ps);const Ro={};g&2&&(Ro.$$scope={dirty:g,ctx:t}),Ae.$set(Ro);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:t}),Ie.$set(hs);const A={};g&2&&(A.$$scope={dirty:g,ctx:t}),Oe.$set(A);const fs={};g&2&&(fs.$$scope={dirty:g,ctx:t}),De.$set(fs);const us={};g&2&&(us.$$scope={dirty:g,ctx:t}),He.$set(us);const gs={};g&2&&(gs.$$scope={dirty:g,ctx:t}),Ue.$set(gs);const _s={};g&2&&(_s.$$scope={dirty:g,ctx:t}),Ve.$set(_s)},i(t){Ss||(y(i.$$.fragment,t),y(Ke.$$.fragment,t),y(no.$$.fragment,t),y(ao.$$.fragment,t),y(Te.$$.fragment,t),y(lo.$$.fragment,t),y(io.$$.fragment,t),y(ho.$$.fragment,t),y(Ce.$$.fragment,t),y(xe.$$.fragment,t),y(fo.$$.fragment,t),y(uo.$$.fragment,t),y(ze.$$.fragment,t),y(Me.$$.fragment,t),y(vo.$$.fragment,t),y(ko.$$.fragment,t),y(To.$$.fragment,t),y(qe.$$.fragment,t),y(Pe.$$.fragment,t),y(Bo.$$.fragment,t),y(Co.$$.fragment,t),y(Eo.$$.fragment,t),y(qo.$$.fragment,t),y(Po.$$.fragment,t),y(Lo.$$.fragment,t),y(Le.$$.fragment,t),y(Ae.$$.fragment,t),y(Ie.$$.fragment,t),y(Oe.$$.fragment,t),y(De.$$.fragment,t),y(Ao.$$.fragment,t),y(Io.$$.fragment,t),y(Ho.$$.fragment,t),y(He.$$.fragment,t),y(Ue.$$.fragment,t),y(Ve.$$.fragment,t),Ss=!0)},o(t){T(i.$$.fragment,t),T(Ke.$$.fragment,t),T(no.$$.fragment,t),T(ao.$$.fragment,t),T(Te.$$.fragment,t),T(lo.$$.fragment,t),T(io.$$.fragment,t),T(ho.$$.fragment,t),T(Ce.$$.fragment,t),T(xe.$$.fragment,t),T(fo.$$.fragment,t),T(uo.$$.fragment,t),T(ze.$$.fragment,t),T(Me.$$.fragment,t),T(vo.$$.fragment,t),T(ko.$$.fragment,t),T(To.$$.fragment,t),T(qe.$$.fragment,t),T(Pe.$$.fragment,t),T(Bo.$$.fragment,t),T(Co.$$.fragment,t),T(Eo.$$.fragment,t),T(qo.$$.fragment,t),T(Po.$$.fragment,t),T(Lo.$$.fragment,t),T(Le.$$.fragment,t),T(Ae.$$.fragment,t),T(Ie.$$.fragment,t),T(Oe.$$.fragment,t),T(De.$$.fragment,t),T(Ao.$$.fragment,t),T(Io.$$.fragment,t),T(Ho.$$.fragment,t),T(He.$$.fragment,t),T(Ue.$$.fragment,t),T(Ve.$$.fragment,t),Ss=!1},d(t){o(d),t&&o(_),t&&o(c),B(i),t&&o(H),t&&o(R),B(Ke),t&&o(vs),t&&o(we),t&&o(ks),t&&o(P),t&&o($s),t&&o(ie),B(no),t&&o(ws),t&&o(U),B(ao),B(Te),t&&o(ys),t&&o(me),B(lo),t&&o(Ts),t&&o(j),B(io),B(ho),B(Ce),B(xe),t&&o(Bs),t&&o(he),B(fo),t&&o(Cs),t&&o(z),B(uo),B(ze),B(Me),t&&o(xs),t&&o(fe),B(vo),t&&o(Fs),t&&o(S),B(ko),B(To),B(qe),B(Pe),t&&o(zs),t&&o(ge),B(Bo),t&&o(Ms),t&&o(N),B(Co),B(Eo),t&&o(Es),t&&o(_e),B(qo),t&&o(qs),t&&o(M),B(Po),B(Lo),B(Le),B(Ae),B(Ie),B(Oe),B(De),t&&o(Ps),t&&o(ve),B(Ao),t&&o(js),t&&o(L),B(Io),B(Ho),B(He),B(Ue),B(Ve)}}}const bd={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"},{local:"transformers.BloomForPrefixLM",title:"BloomForPrefixLM"},{local:"transformers.BloomForSequenceClassification",title:"BloomForSequenceClassification"},{local:"transformers.BloomForTokenClassification",title:"BloomForTokenClassification"}],title:"BLOOM"};function vd(C){return od(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cd extends Qi{constructor(d){super();Xi(this,d,vd,_d,Zi,{})}}export{Cd as default,bd as metadata};
