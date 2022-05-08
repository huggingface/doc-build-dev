import{S as i2,i as l2,s as d2,e as a,k as p,w as T,t as n,M as c2,c as r,d as t,m as h,a as i,x as w,h as s,b as u,F as e,g as _,y as $,q as y,o as D,B as E,v as p2,L as ve}from"../../chunks/vendor-6b77c823.js";import{T as Be}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Me}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ke}from"../../chunks/ExampleCodeBlock-5212b321.js";function h2(F){let d,g,c,m,k;return m=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function m2(F){let d,g,c,m,k;return m=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function f2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function u2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function g2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),m=n("Module"),k=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function _2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function b2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function k2(F){let d,g;return d=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function v2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function T2(F){let d,g,c,m,k;return m=new Te({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function w2(F){let d,g;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function $2(F){let d,g,c,m,k;return m=new Te({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function y2(F){let d,g;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained(
    "microsoft/deberta-v2-xlarge", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function D2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function E2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function F2(F){let d,g;return d=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function V2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function q2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function x2(F){let d,g;return d=new Te({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function z2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the ["),c=a("em"),m=n("Module"),k=n(`]
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the ["),c=r(f,"EM",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`]
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function M2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMultipleChoice
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMultipleChoice.from_pretrained("microsoft/deberta-v2-xlarge")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function j2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,O,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),O=r(G,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function C2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function P2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function R2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,O,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),O=r(G,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function B2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function A2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function L2(F){let d,g;return d=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function S2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,O,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),O=r(G,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function I2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function N2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function O2(F){let d,g;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function W2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,O,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),O=r(G,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function H2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function U2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function Q2(F){let d,g;return d=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function G2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,O,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),O=r(G,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function K2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function J2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function X2(F){let d,g;return d=new Te({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function Y2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,O,X,ue,P,ge,Q,oe,v,q,K,Ee,De,C,_e,$e,Fe,B,L,Ve,qe,G,we,ye,be,xe,Kd,Ra,Fr,Jd,Xd,Yd,Ba,Vr,Zd,ec,tc,Aa,qr,oc,nc,Vl,nt,sc,Pn,ac,rc,Rn,ic,lc,Bn,dc,cc,ql,Pt,ko,xr,An,pc,zr,hc,xl,ut,Ln,mc,Rt,fc,La,uc,gc,Sn,_c,bc,kc,Bt,vc,Sa,Tc,wc,Ia,$c,yc,zl,At,vo,Mr,In,Dc,jr,Ec,Ml,je,Nn,Fc,On,Vc,Wn,qc,xc,zc,kt,Hn,Mc,Cr,jc,Cc,Un,Pr,Pc,Rc,Rr,Bc,Ac,To,Qn,Lc,Lt,Sc,Br,Ic,Nc,Ar,Oc,Wc,Hc,st,Gn,Uc,Lr,Qc,Gc,wo,Kc,St,Jc,Sr,Xc,Yc,Ir,Zc,ep,tp,Na,Kn,jl,It,$o,Nr,Jn,op,Or,np,Cl,Ye,Xn,sp,Yn,ap,Zn,rp,ip,lp,vt,es,dp,Wr,cp,pp,ts,Hr,hp,mp,Ur,fp,up,at,os,gp,Qr,_p,bp,yo,kp,Nt,vp,Gr,Tp,wp,Kr,$p,yp,Pl,Ot,Do,Jr,ns,Dp,Xr,Ep,Rl,Ze,ss,Fp,as,Vp,rs,qp,xp,zp,is,Mp,ls,jp,Cp,Pp,rt,ds,Rp,Wt,Bp,Oa,Ap,Lp,Yr,Sp,Ip,Np,Eo,Op,Fo,Bl,Ht,Vo,Zr,cs,Wp,ei,Hp,Al,gt,ps,Up,ti,Qp,Gp,it,hs,Kp,oi,Jp,Xp,ni,Yp,Zp,qo,Ll,Ut,xo,si,ms,eh,ai,th,Sl,et,fs,oh,Qt,nh,ri,sh,ah,us,rh,ih,lh,gs,dh,_s,ch,ph,hh,We,bs,mh,Gt,fh,Wa,uh,gh,ii,_h,bh,kh,zo,vh,Mo,Th,jo,Il,Kt,Co,li,ks,wh,di,$h,Nl,Ae,vs,yh,ci,Dh,Eh,Ts,Fh,ws,Vh,qh,xh,$s,zh,ys,Mh,jh,Ch,ze,Ds,Ph,Jt,Rh,Ha,Bh,Ah,pi,Lh,Sh,Ih,Po,Nh,Ro,Oh,Bo,Wh,Ao,Hh,Lo,Ol,Xt,So,hi,Es,Uh,mi,Qh,Wl,Le,Fs,Gh,fi,Kh,Jh,Vs,Xh,qs,Yh,Zh,em,xs,tm,zs,om,nm,sm,He,Ms,am,Yt,rm,Ua,im,lm,ui,dm,cm,pm,Io,hm,No,mm,Oo,Hl,Zt,Wo,gi,js,fm,_i,um,Ul,Se,Cs,gm,eo,_m,bi,bm,km,ki,vm,Tm,wm,Ps,$m,Rs,ym,Dm,Em,Bs,Fm,As,Vm,qm,xm,Ue,Ls,zm,to,Mm,Qa,jm,Cm,vi,Pm,Rm,Bm,Ho,Am,Uo,Lm,Qo,Ql,oo,Go,Ti,Ss,Sm,wi,Im,Gl,Ie,Is,Nm,$i,Om,Wm,Ns,Hm,Os,Um,Qm,Gm,Ws,Km,Hs,Jm,Xm,Ym,lt,Us,Zm,no,ef,yi,tf,of,Di,Ei,nf,sf,af,Ko,rf,Jo,Kl,so,Xo,Fi,Qs,lf,Vi,df,Jl,Ne,Gs,cf,Ks,pf,Js,hf,mf,ff,Xs,uf,Ys,gf,_f,bf,Yo,kf,dt,Zs,vf,ao,Tf,Ga,wf,$f,qi,yf,Df,Ef,Zo,Ff,en,Xl,ro,tn,xi,ea,Vf,zi,qf,Yl,_t,ta,xf,Mi,zf,Mf,ct,oa,jf,ji,Cf,Pf,na,Rf,Ci,Bf,Af,Lf,tt,Sf,Pi,If,Nf,Ri,Of,Wf,Bi,Hf,Uf,Ai,Qf,Gf,Zl,io,on,Li,sa,Kf,Si,Jf,ed,Oe,aa,Xf,lo,Yf,Ii,Zf,eu,ra,tu,ou,nu,ia,su,la,au,ru,iu,nn,lu,Qe,da,du,co,cu,Ka,pu,hu,Ni,mu,fu,uu,sn,gu,an,_u,rn,td,po,ln,Oi,ca,bu,Wi,ku,od,Ce,pa,vu,Hi,Tu,wu,ha,$u,ma,yu,Du,Eu,fa,Fu,ua,Vu,qu,xu,dn,zu,Ge,ga,Mu,ho,ju,Ja,Cu,Pu,Ui,Ru,Bu,Au,cn,Lu,pn,Su,hn,nd,mo,mn,Qi,_a,Iu,Gi,Nu,sd,Pe,ba,Ou,Ki,Wu,Hu,ka,Uu,va,Qu,Gu,Ku,Ta,Ju,wa,Xu,Yu,Zu,fn,eg,Ke,$a,tg,fo,og,Xa,ng,sg,Ji,ag,rg,ig,un,lg,gn,dg,_n,ad,uo,bn,Xi,ya,cg,Yi,pg,rd,Re,Da,hg,go,mg,Zi,fg,ug,el,gg,_g,bg,Ea,kg,Fa,vg,Tg,wg,Va,$g,qa,yg,Dg,Eg,kn,Fg,Je,xa,Vg,_o,qg,Ya,xg,zg,tl,Mg,jg,Cg,vn,Pg,Tn,Rg,wn,id;return l=new Me({}),ee=new Me({}),An=new Me({}),Ln=new N({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17135/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_17135/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31"}}),In=new Me({}),Nn=new N({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53"}}),Hn=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L179",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L203",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wo=new ke({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[h2]},$$scope:{ctx:F}}}),Kn=new N({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L262"}}),Jn=new Me({}),Xn=new N({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2TokenizerFast.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L59"}}),es=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L149",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yo=new ke({props:{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[m2]},$$scope:{ctx:F}}}),ns=new Me({}),ss=new N({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L978"}}),ds=new N({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17135/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1002",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new Be({props:{$$slots:{default:[f2]},$$scope:{ctx:F}}}),Fo=new ke({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[u2]},$$scope:{ctx:F}}}),cs=new Me({}),ps=new N({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L882"}}),hs=new N({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/torch/nn/modules/module.py#L190"}}),qo=new Be({props:{$$slots:{default:[g2]},$$scope:{ctx:F}}}),ms=new Me({}),fs=new N({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1091"}}),bs=new N({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17135/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1110",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new Be({props:{$$slots:{default:[_2]},$$scope:{ctx:F}}}),Mo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[b2]},$$scope:{ctx:F}}}),jo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[k2]},$$scope:{ctx:F}}}),ks=new Me({}),vs=new N({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1227"}}),Ds=new N({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17135/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1252",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Be({props:{$$slots:{default:[v2]},$$scope:{ctx:F}}}),Ro=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[T2]},$$scope:{ctx:F}}}),Bo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[w2]},$$scope:{ctx:F}}}),Ao=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[$2]},$$scope:{ctx:F}}}),Lo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[y2]},$$scope:{ctx:F}}}),Es=new Me({}),Fs=new N({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1347"}}),Ms=new N({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17135/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1361",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Be({props:{$$slots:{default:[D2]},$$scope:{ctx:F}}}),No=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[E2]},$$scope:{ctx:F}}}),Oo=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[F2]},$$scope:{ctx:F}}}),js=new Me({}),Cs=new N({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1424"}}),Ls=new N({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17135/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1437",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Be({props:{$$slots:{default:[V2]},$$scope:{ctx:F}}}),Uo=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[q2]},$$scope:{ctx:F}}}),Qo=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[x2]},$$scope:{ctx:F}}}),Ss=new Me({}),Is=new N({props:{name:"class transformers.DebertaV2ForMultipleChoice",anchor:"transformers.DebertaV2ForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1524"}}),Us=new N({props:{name:"forward",anchor:"transformers.DebertaV2ForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using [<em>DebertaV2Tokenizer</em>]. See [<em>PreTrainedTokenizer.encode</em>] and
[<em>PreTrainedTokenizer.<strong>call</strong></em>] for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<em>torch.FloatTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <em>[0, 1]</em>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <em>[0,
1]</em>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <em>[0,
config.max_position_embeddings - 1]</em>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<em>torch.FloatTensor</em> of shape <em>(batch_size, sequence_length, hidden_size)</em>, <em>optional</em>) &#x2014;
Optionally, instead of passing <em>input_ids</em> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <em>attentions</em> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <em>hidden_states</em> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return a [<em>~utils.ModelOutput</em>] instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1548",returnDescription:`
<p>A [<em>transformers.modeling_outputs.SequenceClassifierOutput</em>] or a tuple of
<em>torch.FloatTensor</em> (if <em>return_dict=False</em> is passed or when <em>config.return_dict=False</em>) comprising various
elements depending on the configuration ([<em>DebertaV2Config</em>]) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>torch.FloatTensor</em> of shape <em>(1,)</em>, <em>optional</em>, returned when <em>labels</em> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<em>torch.FloatTensor</em> of shape <em>(batch_size, config.num_labels)</em>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<em>tuple(torch.FloatTensor)</em>, <em>optional</em>, returned when <em>output_hidden_states=True</em> is passed or when <em>config.output_hidden_states=True</em>) \u2014 Tuple of <em>torch.FloatTensor</em> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <em>(batch_size, sequence_length, hidden_size)</em>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<em>tuple(torch.FloatTensor)</em>, <em>optional</em>, returned when <em>output_attentions=True</em> is passed or when <em>config.output_attentions=True</em>) \u2014 Tuple of <em>torch.FloatTensor</em> (one for each layer) of shape <em>(batch_size, num_heads, sequence_length,
sequence_length)</em>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p>[<em>transformers.modeling_outputs.SequenceClassifierOutput</em>] or <em>tuple(torch.FloatTensor)</em></p>
`}}),Ko=new Be({props:{$$slots:{default:[z2]},$$scope:{ctx:F}}}),Jo=new ke({props:{anchor:"transformers.DebertaV2ForMultipleChoice.forward.example",$$slots:{default:[M2]},$$scope:{ctx:F}}}),Qs=new Me({}),Gs=new N({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1175"}}),Yo=new Be({props:{$$slots:{default:[j2]},$$scope:{ctx:F}}}),Zs=new N({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1181",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zo=new Be({props:{$$slots:{default:[C2]},$$scope:{ctx:F}}}),en=new ke({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[P2]},$$scope:{ctx:F}}}),ea=new Me({}),ta=new N({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1079"}}),oa=new N({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),sa=new Me({}),aa=new N({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1224"}}),nn=new Be({props:{$$slots:{default:[R2]},$$scope:{ctx:F}}}),da=new N({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),sn=new Be({props:{$$slots:{default:[B2]},$$scope:{ctx:F}}}),an=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[A2]},$$scope:{ctx:F}}}),rn=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[L2]},$$scope:{ctx:F}}}),ca=new Me({}),pa=new N({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1308"}}),dn=new Be({props:{$$slots:{default:[S2]},$$scope:{ctx:F}}}),ga=new N({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1326",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new Be({props:{$$slots:{default:[I2]},$$scope:{ctx:F}}}),pn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[N2]},$$scope:{ctx:F}}}),hn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[O2]},$$scope:{ctx:F}}}),_a=new Me({}),ba=new N({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397"}}),fn=new Be({props:{$$slots:{default:[W2]},$$scope:{ctx:F}}}),$a=new N({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),un=new Be({props:{$$slots:{default:[H2]},$$scope:{ctx:F}}}),gn=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[U2]},$$scope:{ctx:F}}}),_n=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[Q2]},$$scope:{ctx:F}}}),ya=new Me({}),Da=new N({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17135/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1476"}}),kn=new Be({props:{$$slots:{default:[G2]},$$scope:{ctx:F}}}),xa=new N({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_17135/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17135/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17135/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1487",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17135/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new Be({props:{$$slots:{default:[K2]},$$scope:{ctx:F}}}),Tn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[J2]},$$scope:{ctx:F}}}),wn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[X2]},$$scope:{ctx:F}}}),{c(){d=a("meta"),g=p(),c=a("h1"),m=a("a"),k=a("span"),T(l.$$.fragment),f=p(),V=a("span"),de=n("DeBERTa-v2"),J=p(),x=a("h2"),Y=a("a"),S=a("span"),T(ee.$$.fragment),ce=p(),I=a("span"),pe=n("Overview"),re=p(),W=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=p(),ne=a("p"),H=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=p(),se=a("p"),U=n("The abstract from the paper is the following:"),le=p(),ae=a("p"),M=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=a("a"),me=n("https://github.com/microsoft/DeBERTa"),fe=n("."),O=p(),X=a("p"),ue=n("The following information is visible directly on the "),P=a("a"),ge=n(`original implementation
repository`),Q=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),v=n("blog"),q=p(),K=a("p"),Ee=n("New in v2:"),De=p(),C=a("ul"),_e=a("li"),$e=a("strong"),Fe=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=a("a"),Ve=n("sentencepiece-based"),qe=n(" tokenizer."),G=p(),we=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),xe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Kd=p(),Ra=a("li"),Fr=a("strong"),Jd=n("Sharing position projection matrix with content projection matrix in attention layer"),Xd=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Yd=p(),Ba=a("li"),Vr=a("strong"),Zd=n("Apply bucket to encode relative positions"),ec=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),tc=p(),Aa=a("li"),qr=a("strong"),oc=n("900M model & 1.5B model"),nc=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Vl=p(),nt=a("p"),sc=n("This model was contributed by "),Pn=a("a"),ac=n("DeBERTa"),rc=n(`. This model TF 2.0 implementation was
contributed by `),Rn=a("a"),ic=n("kamalkraj"),lc=n(". The original code can be found "),Bn=a("a"),dc=n("here"),cc=n("."),ql=p(),Pt=a("h2"),ko=a("a"),xr=a("span"),T(An.$$.fragment),pc=p(),zr=a("span"),hc=n("DebertaV2Config"),xl=p(),ut=a("div"),T(Ln.$$.fragment),mc=p(),Rt=a("p"),fc=n("This is the configuration class to store the configuration of a "),La=a("a"),uc=n("DebertaV2Model"),gc=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Sn=a("a"),_c=n("microsoft/deberta-v2-xlarge"),bc=n(" architecture."),kc=p(),Bt=a("p"),vc=n("Configuration objects inherit from "),Sa=a("a"),Tc=n("PretrainedConfig"),wc=n(` and can be used to control the model outputs. Read the
documentation from `),Ia=a("a"),$c=n("PretrainedConfig"),yc=n(" for more information."),zl=p(),At=a("h2"),vo=a("a"),Mr=a("span"),T(In.$$.fragment),Dc=p(),jr=a("span"),Ec=n("DebertaV2Tokenizer"),Ml=p(),je=a("div"),T(Nn.$$.fragment),Fc=p(),On=a("p"),Vc=n("Constructs a DeBERTa-v2 tokenizer. Based on "),Wn=a("a"),qc=n("SentencePiece"),xc=n("."),zc=p(),kt=a("div"),T(Hn.$$.fragment),Mc=p(),Cr=a("p"),jc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Cc=p(),Un=a("ul"),Pr=a("li"),Pc=n("single sequence: [CLS] X [SEP]"),Rc=p(),Rr=a("li"),Bc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ac=p(),To=a("div"),T(Qn.$$.fragment),Lc=p(),Lt=a("p"),Sc=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Br=a("code"),Ic=n("prepare_for_model"),Nc=n(" or "),Ar=a("code"),Oc=n("encode_plus"),Wc=n(" methods."),Hc=p(),st=a("div"),T(Gn.$$.fragment),Uc=p(),Lr=a("p"),Qc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Gc=p(),T(wo.$$.fragment),Kc=p(),St=a("p"),Jc=n("If "),Sr=a("code"),Xc=n("token_ids_1"),Yc=n(" is "),Ir=a("code"),Zc=n("None"),ep=n(", this method only returns the first portion of the mask (0s)."),tp=p(),Na=a("div"),T(Kn.$$.fragment),jl=p(),It=a("h2"),$o=a("a"),Nr=a("span"),T(Jn.$$.fragment),op=p(),Or=a("span"),np=n("DebertaV2TokenizerFast"),Cl=p(),Ye=a("div"),T(Xn.$$.fragment),sp=p(),Yn=a("p"),ap=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),Zn=a("a"),rp=n("SentencePiece"),ip=n("."),lp=p(),vt=a("div"),T(es.$$.fragment),dp=p(),Wr=a("p"),cp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),pp=p(),ts=a("ul"),Hr=a("li"),hp=n("single sequence: [CLS] X [SEP]"),mp=p(),Ur=a("li"),fp=n("pair of sequences: [CLS] A [SEP] B [SEP]"),up=p(),at=a("div"),T(os.$$.fragment),gp=p(),Qr=a("p"),_p=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),bp=p(),T(yo.$$.fragment),kp=p(),Nt=a("p"),vp=n("If "),Gr=a("code"),Tp=n("token_ids_1"),wp=n(" is "),Kr=a("code"),$p=n("None"),yp=n(", this method only returns the first portion of the mask (0s)."),Pl=p(),Ot=a("h2"),Do=a("a"),Jr=a("span"),T(ns.$$.fragment),Dp=p(),Xr=a("span"),Ep=n("DebertaV2Model"),Rl=p(),Ze=a("div"),T(ss.$$.fragment),Fp=p(),as=a("p"),Vp=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),rs=a("a"),qp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zp=p(),is=a("p"),Mp=n("This model is also a PyTorch "),ls=a("a"),jp=n("torch.nn.Module"),Cp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Pp=p(),rt=a("div"),T(ds.$$.fragment),Rp=p(),Wt=a("p"),Bp=n("The "),Oa=a("a"),Ap=n("DebertaV2Model"),Lp=n(" forward method, overrides the "),Yr=a("code"),Sp=n("__call__"),Ip=n(" special method."),Np=p(),T(Eo.$$.fragment),Op=p(),T(Fo.$$.fragment),Bl=p(),Ht=a("h2"),Vo=a("a"),Zr=a("span"),T(cs.$$.fragment),Wp=p(),ei=a("span"),Hp=n("DebertaV2PreTrainedModel"),Al=p(),gt=a("div"),T(ps.$$.fragment),Up=p(),ti=a("p"),Qp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Gp=p(),it=a("div"),T(hs.$$.fragment),Kp=p(),oi=a("p"),Jp=n("Defines the computation performed at every call."),Xp=p(),ni=a("p"),Yp=n("Should be overridden by all subclasses."),Zp=p(),T(qo.$$.fragment),Ll=p(),Ut=a("h2"),xo=a("a"),si=a("span"),T(ms.$$.fragment),eh=p(),ai=a("span"),th=n("DebertaV2ForMaskedLM"),Sl=p(),et=a("div"),T(fs.$$.fragment),oh=p(),Qt=a("p"),nh=n("DeBERTa Model with a "),ri=a("code"),sh=n("language modeling"),ah=n(` head on top.
The DeBERTa model was proposed in `),us=a("a"),rh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ih=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),lh=p(),gs=a("p"),dh=n("This model is also a PyTorch "),_s=a("a"),ch=n("torch.nn.Module"),ph=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),hh=p(),We=a("div"),T(bs.$$.fragment),mh=p(),Gt=a("p"),fh=n("The "),Wa=a("a"),uh=n("DebertaV2ForMaskedLM"),gh=n(" forward method, overrides the "),ii=a("code"),_h=n("__call__"),bh=n(" special method."),kh=p(),T(zo.$$.fragment),vh=p(),T(Mo.$$.fragment),Th=p(),T(jo.$$.fragment),Il=p(),Kt=a("h2"),Co=a("a"),li=a("span"),T(ks.$$.fragment),wh=p(),di=a("span"),$h=n("DebertaV2ForSequenceClassification"),Nl=p(),Ae=a("div"),T(vs.$$.fragment),yh=p(),ci=a("p"),Dh=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Eh=p(),Ts=a("p"),Fh=n("The DeBERTa model was proposed in "),ws=a("a"),Vh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xh=p(),$s=a("p"),zh=n("This model is also a PyTorch "),ys=a("a"),Mh=n("torch.nn.Module"),jh=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ch=p(),ze=a("div"),T(Ds.$$.fragment),Ph=p(),Jt=a("p"),Rh=n("The "),Ha=a("a"),Bh=n("DebertaV2ForSequenceClassification"),Ah=n(" forward method, overrides the "),pi=a("code"),Lh=n("__call__"),Sh=n(" special method."),Ih=p(),T(Po.$$.fragment),Nh=p(),T(Ro.$$.fragment),Oh=p(),T(Bo.$$.fragment),Wh=p(),T(Ao.$$.fragment),Hh=p(),T(Lo.$$.fragment),Ol=p(),Xt=a("h2"),So=a("a"),hi=a("span"),T(Es.$$.fragment),Uh=p(),mi=a("span"),Qh=n("DebertaV2ForTokenClassification"),Wl=p(),Le=a("div"),T(Fs.$$.fragment),Gh=p(),fi=a("p"),Kh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jh=p(),Vs=a("p"),Xh=n("The DeBERTa model was proposed in "),qs=a("a"),Yh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Zh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),em=p(),xs=a("p"),tm=n("This model is also a PyTorch "),zs=a("a"),om=n("torch.nn.Module"),nm=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sm=p(),He=a("div"),T(Ms.$$.fragment),am=p(),Yt=a("p"),rm=n("The "),Ua=a("a"),im=n("DebertaV2ForTokenClassification"),lm=n(" forward method, overrides the "),ui=a("code"),dm=n("__call__"),cm=n(" special method."),pm=p(),T(Io.$$.fragment),hm=p(),T(No.$$.fragment),mm=p(),T(Oo.$$.fragment),Hl=p(),Zt=a("h2"),Wo=a("a"),gi=a("span"),T(js.$$.fragment),fm=p(),_i=a("span"),um=n("DebertaV2ForQuestionAnswering"),Ul=p(),Se=a("div"),T(Cs.$$.fragment),gm=p(),eo=a("p"),_m=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bi=a("code"),bm=n("span start logits"),km=n(" and "),ki=a("code"),vm=n("span end logits"),Tm=n(")."),wm=p(),Ps=a("p"),$m=n("The DeBERTa model was proposed in "),Rs=a("a"),ym=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Dm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Em=p(),Bs=a("p"),Fm=n("This model is also a PyTorch "),As=a("a"),Vm=n("torch.nn.Module"),qm=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),xm=p(),Ue=a("div"),T(Ls.$$.fragment),zm=p(),to=a("p"),Mm=n("The "),Qa=a("a"),jm=n("DebertaV2ForQuestionAnswering"),Cm=n(" forward method, overrides the "),vi=a("code"),Pm=n("__call__"),Rm=n(" special method."),Bm=p(),T(Ho.$$.fragment),Am=p(),T(Uo.$$.fragment),Lm=p(),T(Qo.$$.fragment),Ql=p(),oo=a("h2"),Go=a("a"),Ti=a("span"),T(Ss.$$.fragment),Sm=p(),wi=a("span"),Im=n("DebertaV2ForMultipleChoice"),Gl=p(),Ie=a("div"),T(Is.$$.fragment),Nm=p(),$i=a("p"),Om=n(`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Wm=p(),Ns=a("p"),Hm=n("The DeBERTa model was proposed in "),Os=a("a"),Um=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gm=p(),Ws=a("p"),Km=n("This model is also a PyTorch "),Hs=a("a"),Jm=n("torch.nn.Module"),Xm=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ym=p(),lt=a("div"),T(Us.$$.fragment),Zm=p(),no=a("p"),ef=n("The ["),yi=a("em"),tf=n("DebertaV2ForMultipleChoice"),of=n("] forward method, overrides the "),Di=a("em"),Ei=a("strong"),nf=n("call"),sf=n(" special method."),af=p(),T(Ko.$$.fragment),rf=p(),T(Jo.$$.fragment),Kl=p(),so=a("h2"),Xo=a("a"),Fi=a("span"),T(Qs.$$.fragment),lf=p(),Vi=a("span"),df=n("TFDebertaV2Model"),Jl=p(),Ne=a("div"),T(Gs.$$.fragment),cf=p(),Ks=a("p"),pf=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Js=a("a"),hf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ff=p(),Xs=a("p"),uf=n("This model is also a "),Ys=a("a"),gf=n("tf.keras.Model"),_f=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bf=p(),T(Yo.$$.fragment),kf=p(),dt=a("div"),T(Zs.$$.fragment),vf=p(),ao=a("p"),Tf=n("The "),Ga=a("a"),wf=n("TFDebertaV2Model"),$f=n(" forward method, overrides the "),qi=a("code"),yf=n("__call__"),Df=n(" special method."),Ef=p(),T(Zo.$$.fragment),Ff=p(),T(en.$$.fragment),Xl=p(),ro=a("h2"),tn=a("a"),xi=a("span"),T(ea.$$.fragment),Vf=p(),zi=a("span"),qf=n("TFDebertaV2PreTrainedModel"),Yl=p(),_t=a("div"),T(ta.$$.fragment),xf=p(),Mi=a("p"),zf=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Mf=p(),ct=a("div"),T(oa.$$.fragment),jf=p(),ji=a("p"),Cf=n("Calls the model on new inputs and returns the outputs as tensors."),Pf=p(),na=a("p"),Rf=n("In this case "),Ci=a("code"),Bf=n("call()"),Af=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Lf=p(),tt=a("p"),Sf=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Pi=a("code"),If=n("tf.keras.Model"),Nf=n(`.
To call a model on an input, always use the `),Ri=a("code"),Of=n("__call__()"),Wf=n(` method,
i.e. `),Bi=a("code"),Hf=n("model(inputs)"),Uf=n(", which relies on the underlying "),Ai=a("code"),Qf=n("call()"),Gf=n(" method."),Zl=p(),io=a("h2"),on=a("a"),Li=a("span"),T(sa.$$.fragment),Kf=p(),Si=a("span"),Jf=n("TFDebertaV2ForMaskedLM"),ed=p(),Oe=a("div"),T(aa.$$.fragment),Xf=p(),lo=a("p"),Yf=n("DeBERTa Model with a "),Ii=a("code"),Zf=n("language modeling"),eu=n(` head on top.
The DeBERTa model was proposed in `),ra=a("a"),tu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ou=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nu=p(),ia=a("p"),su=n("This model is also a "),la=a("a"),au=n("tf.keras.Model"),ru=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iu=p(),T(nn.$$.fragment),lu=p(),Qe=a("div"),T(da.$$.fragment),du=p(),co=a("p"),cu=n("The "),Ka=a("a"),pu=n("TFDebertaV2ForMaskedLM"),hu=n(" forward method, overrides the "),Ni=a("code"),mu=n("__call__"),fu=n(" special method."),uu=p(),T(sn.$$.fragment),gu=p(),T(an.$$.fragment),_u=p(),T(rn.$$.fragment),td=p(),po=a("h2"),ln=a("a"),Oi=a("span"),T(ca.$$.fragment),bu=p(),Wi=a("span"),ku=n("TFDebertaV2ForSequenceClassification"),od=p(),Ce=a("div"),T(pa.$$.fragment),vu=p(),Hi=a("p"),Tu=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wu=p(),ha=a("p"),$u=n("The DeBERTa model was proposed in "),ma=a("a"),yu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Du=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Eu=p(),fa=a("p"),Fu=n("This model is also a "),ua=a("a"),Vu=n("tf.keras.Model"),qu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xu=p(),T(dn.$$.fragment),zu=p(),Ge=a("div"),T(ga.$$.fragment),Mu=p(),ho=a("p"),ju=n("The "),Ja=a("a"),Cu=n("TFDebertaV2ForSequenceClassification"),Pu=n(" forward method, overrides the "),Ui=a("code"),Ru=n("__call__"),Bu=n(" special method."),Au=p(),T(cn.$$.fragment),Lu=p(),T(pn.$$.fragment),Su=p(),T(hn.$$.fragment),nd=p(),mo=a("h2"),mn=a("a"),Qi=a("span"),T(_a.$$.fragment),Iu=p(),Gi=a("span"),Nu=n("TFDebertaV2ForTokenClassification"),sd=p(),Pe=a("div"),T(ba.$$.fragment),Ou=p(),Ki=a("p"),Wu=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Hu=p(),ka=a("p"),Uu=n("The DeBERTa model was proposed in "),va=a("a"),Qu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ku=p(),Ta=a("p"),Ju=n("This model is also a "),wa=a("a"),Xu=n("tf.keras.Model"),Yu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu=p(),T(fn.$$.fragment),eg=p(),Ke=a("div"),T($a.$$.fragment),tg=p(),fo=a("p"),og=n("The "),Xa=a("a"),ng=n("TFDebertaV2ForTokenClassification"),sg=n(" forward method, overrides the "),Ji=a("code"),ag=n("__call__"),rg=n(" special method."),ig=p(),T(un.$$.fragment),lg=p(),T(gn.$$.fragment),dg=p(),T(_n.$$.fragment),ad=p(),uo=a("h2"),bn=a("a"),Xi=a("span"),T(ya.$$.fragment),cg=p(),Yi=a("span"),pg=n("TFDebertaV2ForQuestionAnswering"),rd=p(),Re=a("div"),T(Da.$$.fragment),hg=p(),go=a("p"),mg=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zi=a("code"),fg=n("span start logits"),ug=n(" and "),el=a("code"),gg=n("span end logits"),_g=n(")."),bg=p(),Ea=a("p"),kg=n("The DeBERTa model was proposed in "),Fa=a("a"),vg=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tg=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wg=p(),Va=a("p"),$g=n("This model is also a "),qa=a("a"),yg=n("tf.keras.Model"),Dg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eg=p(),T(kn.$$.fragment),Fg=p(),Je=a("div"),T(xa.$$.fragment),Vg=p(),_o=a("p"),qg=n("The "),Ya=a("a"),xg=n("TFDebertaV2ForQuestionAnswering"),zg=n(" forward method, overrides the "),tl=a("code"),Mg=n("__call__"),jg=n(" special method."),Cg=p(),T(vn.$$.fragment),Pg=p(),T(Tn.$$.fragment),Rg=p(),T(wn.$$.fragment),this.h()},l(o){const b=c2('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var za=i(c);m=r(za,"A",{id:!0,class:!0,href:!0});var ol=i(m);k=r(ol,"SPAN",{});var nl=i(k);w(l.$$.fragment,nl),nl.forEach(t),ol.forEach(t),f=h(za),V=r(za,"SPAN",{});var sl=i(V);de=s(sl,"DeBERTa-v2"),sl.forEach(t),za.forEach(t),J=h(o),x=r(o,"H2",{class:!0});var Ma=i(x);Y=r(Ma,"A",{id:!0,class:!0,href:!0});var al=i(Y);S=r(al,"SPAN",{});var rl=i(S);w(ee.$$.fragment,rl),rl.forEach(t),al.forEach(t),ce=h(Ma),I=r(Ma,"SPAN",{});var il=i(I);pe=s(il,"Overview"),il.forEach(t),Ma.forEach(t),re=h(o),W=r(o,"P",{});var ja=i(W);R=s(ja,"The DeBERTa model was proposed in "),te=r(ja,"A",{href:!0,rel:!0});var ll=i(te);Z=s(ll,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ll.forEach(t),z=s(ja,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ja.forEach(t),j=h(o),ne=r(o,"P",{});var dl=i(ne);H=s(dl,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),dl.forEach(t),ie=h(o),se=r(o,"P",{});var cl=i(se);U=s(cl,"The abstract from the paper is the following:"),cl.forEach(t),le=h(o),ae=r(o,"P",{});var pl=i(ae);M=r(pl,"EM",{});var Ca=i(M);he=s(Ca,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(Ca,"A",{href:!0,rel:!0});var hl=i(A);me=s(hl,"https://github.com/microsoft/DeBERTa"),hl.forEach(t),fe=s(Ca,"."),Ca.forEach(t),pl.forEach(t),O=h(o),X=r(o,"P",{});var $n=i(X);ue=s($n,"The following information is visible directly on the "),P=r($n,"A",{href:!0,rel:!0});var ml=i(P);ge=s(ml,`original implementation
repository`),ml.forEach(t),Q=s($n,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r($n,"A",{href:!0,rel:!0});var fl=i(oe);v=s(fl,"blog"),fl.forEach(t),$n.forEach(t),q=h(o),K=r(o,"P",{});var ul=i(K);Ee=s(ul,"New in v2:"),ul.forEach(t),De=h(o),C=r(o,"UL",{});var ot=i(C);_e=r(ot,"LI",{});var yn=i(_e);$e=r(yn,"STRONG",{});var gl=i($e);Fe=s(gl,"Vocabulary"),gl.forEach(t),B=s(yn,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=r(yn,"A",{href:!0,rel:!0});var _l=i(L);Ve=s(_l,"sentencepiece-based"),_l.forEach(t),qe=s(yn," tokenizer."),yn.forEach(t),G=h(ot),we=r(ot,"LI",{});var Za=i(we);ye=r(Za,"STRONG",{});var bl=i(ye);be=s(bl,"nGiE(nGram Induced Input Encoding)"),bl.forEach(t),xe=s(Za,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Za.forEach(t),Kd=h(ot),Ra=r(ot,"LI",{});var er=i(Ra);Fr=r(er,"STRONG",{});var kl=i(Fr);Jd=s(kl,"Sharing position projection matrix with content projection matrix in attention layer"),kl.forEach(t),Xd=s(er,` Based on previous
experiments, this can save parameters without affecting the performance.`),er.forEach(t),Yd=h(ot),Ba=r(ot,"LI",{});var tr=i(Ba);Vr=r(tr,"STRONG",{});var vl=i(Vr);Zd=s(vl,"Apply bucket to encode relative positions"),vl.forEach(t),ec=s(tr,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),tr.forEach(t),tc=h(ot),Aa=r(ot,"LI",{});var or=i(Aa);qr=r(or,"STRONG",{});var Tl=i(qr);oc=s(Tl,"900M model & 1.5B model"),Tl.forEach(t),nc=s(or,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),or.forEach(t),ot.forEach(t),Vl=h(o),nt=r(o,"P",{});var bt=i(nt);sc=s(bt,"This model was contributed by "),Pn=r(bt,"A",{href:!0,rel:!0});var wl=i(Pn);ac=s(wl,"DeBERTa"),wl.forEach(t),rc=s(bt,`. This model TF 2.0 implementation was
contributed by `),Rn=r(bt,"A",{href:!0,rel:!0});var $l=i(Rn);ic=s($l,"kamalkraj"),$l.forEach(t),lc=s(bt,". The original code can be found "),Bn=r(bt,"A",{href:!0,rel:!0});var yl=i(Bn);dc=s(yl,"here"),yl.forEach(t),cc=s(bt,"."),bt.forEach(t),ql=h(o),Pt=r(o,"H2",{class:!0});var Pa=i(Pt);ko=r(Pa,"A",{id:!0,class:!0,href:!0});var Dl=i(ko);xr=r(Dl,"SPAN",{});var El=i(xr);w(An.$$.fragment,El),El.forEach(t),Dl.forEach(t),pc=h(Pa),zr=r(Pa,"SPAN",{});var Fl=i(zr);hc=s(Fl,"DebertaV2Config"),Fl.forEach(t),Pa.forEach(t),xl=h(o),ut=r(o,"DIV",{class:!0});var bo=i(ut);w(Ln.$$.fragment,bo),mc=h(bo),Rt=r(bo,"P",{});var nr=i(Rt);fc=s(nr,"This is the configuration class to store the configuration of a "),La=r(nr,"A",{href:!0});var Bg=i(La);uc=s(Bg,"DebertaV2Model"),Bg.forEach(t),gc=s(nr,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Sn=r(nr,"A",{href:!0,rel:!0});var Ag=i(Sn);_c=s(Ag,"microsoft/deberta-v2-xlarge"),Ag.forEach(t),bc=s(nr," architecture."),nr.forEach(t),kc=h(bo),Bt=r(bo,"P",{});var sr=i(Bt);vc=s(sr,"Configuration objects inherit from "),Sa=r(sr,"A",{href:!0});var Lg=i(Sa);Tc=s(Lg,"PretrainedConfig"),Lg.forEach(t),wc=s(sr,` and can be used to control the model outputs. Read the
documentation from `),Ia=r(sr,"A",{href:!0});var Sg=i(Ia);$c=s(Sg,"PretrainedConfig"),Sg.forEach(t),yc=s(sr," for more information."),sr.forEach(t),bo.forEach(t),zl=h(o),At=r(o,"H2",{class:!0});var ld=i(At);vo=r(ld,"A",{id:!0,class:!0,href:!0});var Ig=i(vo);Mr=r(Ig,"SPAN",{});var Ng=i(Mr);w(In.$$.fragment,Ng),Ng.forEach(t),Ig.forEach(t),Dc=h(ld),jr=r(ld,"SPAN",{});var Og=i(jr);Ec=s(Og,"DebertaV2Tokenizer"),Og.forEach(t),ld.forEach(t),Ml=h(o),je=r(o,"DIV",{class:!0});var pt=i(je);w(Nn.$$.fragment,pt),Fc=h(pt),On=r(pt,"P",{});var dd=i(On);Vc=s(dd,"Constructs a DeBERTa-v2 tokenizer. Based on "),Wn=r(dd,"A",{href:!0,rel:!0});var Wg=i(Wn);qc=s(Wg,"SentencePiece"),Wg.forEach(t),xc=s(dd,"."),dd.forEach(t),zc=h(pt),kt=r(pt,"DIV",{class:!0});var ar=i(kt);w(Hn.$$.fragment,ar),Mc=h(ar),Cr=r(ar,"P",{});var Hg=i(Cr);jc=s(Hg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Hg.forEach(t),Cc=h(ar),Un=r(ar,"UL",{});var cd=i(Un);Pr=r(cd,"LI",{});var Ug=i(Pr);Pc=s(Ug,"single sequence: [CLS] X [SEP]"),Ug.forEach(t),Rc=h(cd),Rr=r(cd,"LI",{});var Qg=i(Rr);Bc=s(Qg,"pair of sequences: [CLS] A [SEP] B [SEP]"),Qg.forEach(t),cd.forEach(t),ar.forEach(t),Ac=h(pt),To=r(pt,"DIV",{class:!0});var pd=i(To);w(Qn.$$.fragment,pd),Lc=h(pd),Lt=r(pd,"P",{});var rr=i(Lt);Sc=s(rr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Br=r(rr,"CODE",{});var Gg=i(Br);Ic=s(Gg,"prepare_for_model"),Gg.forEach(t),Nc=s(rr," or "),Ar=r(rr,"CODE",{});var Kg=i(Ar);Oc=s(Kg,"encode_plus"),Kg.forEach(t),Wc=s(rr," methods."),rr.forEach(t),pd.forEach(t),Hc=h(pt),st=r(pt,"DIV",{class:!0});var Dn=i(st);w(Gn.$$.fragment,Dn),Uc=h(Dn),Lr=r(Dn,"P",{});var Jg=i(Lr);Qc=s(Jg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Jg.forEach(t),Gc=h(Dn),w(wo.$$.fragment,Dn),Kc=h(Dn),St=r(Dn,"P",{});var ir=i(St);Jc=s(ir,"If "),Sr=r(ir,"CODE",{});var Xg=i(Sr);Xc=s(Xg,"token_ids_1"),Xg.forEach(t),Yc=s(ir," is "),Ir=r(ir,"CODE",{});var Yg=i(Ir);Zc=s(Yg,"None"),Yg.forEach(t),ep=s(ir,", this method only returns the first portion of the mask (0s)."),ir.forEach(t),Dn.forEach(t),tp=h(pt),Na=r(pt,"DIV",{class:!0});var Zg=i(Na);w(Kn.$$.fragment,Zg),Zg.forEach(t),pt.forEach(t),jl=h(o),It=r(o,"H2",{class:!0});var hd=i(It);$o=r(hd,"A",{id:!0,class:!0,href:!0});var e_=i($o);Nr=r(e_,"SPAN",{});var t_=i(Nr);w(Jn.$$.fragment,t_),t_.forEach(t),e_.forEach(t),op=h(hd),Or=r(hd,"SPAN",{});var o_=i(Or);np=s(o_,"DebertaV2TokenizerFast"),o_.forEach(t),hd.forEach(t),Cl=h(o),Ye=r(o,"DIV",{class:!0});var En=i(Ye);w(Xn.$$.fragment,En),sp=h(En),Yn=r(En,"P",{});var md=i(Yn);ap=s(md,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),Zn=r(md,"A",{href:!0,rel:!0});var n_=i(Zn);rp=s(n_,"SentencePiece"),n_.forEach(t),ip=s(md,"."),md.forEach(t),lp=h(En),vt=r(En,"DIV",{class:!0});var lr=i(vt);w(es.$$.fragment,lr),dp=h(lr),Wr=r(lr,"P",{});var s_=i(Wr);cp=s(s_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),s_.forEach(t),pp=h(lr),ts=r(lr,"UL",{});var fd=i(ts);Hr=r(fd,"LI",{});var a_=i(Hr);hp=s(a_,"single sequence: [CLS] X [SEP]"),a_.forEach(t),mp=h(fd),Ur=r(fd,"LI",{});var r_=i(Ur);fp=s(r_,"pair of sequences: [CLS] A [SEP] B [SEP]"),r_.forEach(t),fd.forEach(t),lr.forEach(t),up=h(En),at=r(En,"DIV",{class:!0});var Fn=i(at);w(os.$$.fragment,Fn),gp=h(Fn),Qr=r(Fn,"P",{});var i_=i(Qr);_p=s(i_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),i_.forEach(t),bp=h(Fn),w(yo.$$.fragment,Fn),kp=h(Fn),Nt=r(Fn,"P",{});var dr=i(Nt);vp=s(dr,"If "),Gr=r(dr,"CODE",{});var l_=i(Gr);Tp=s(l_,"token_ids_1"),l_.forEach(t),wp=s(dr," is "),Kr=r(dr,"CODE",{});var d_=i(Kr);$p=s(d_,"None"),d_.forEach(t),yp=s(dr,", this method only returns the first portion of the mask (0s)."),dr.forEach(t),Fn.forEach(t),En.forEach(t),Pl=h(o),Ot=r(o,"H2",{class:!0});var ud=i(Ot);Do=r(ud,"A",{id:!0,class:!0,href:!0});var c_=i(Do);Jr=r(c_,"SPAN",{});var p_=i(Jr);w(ns.$$.fragment,p_),p_.forEach(t),c_.forEach(t),Dp=h(ud),Xr=r(ud,"SPAN",{});var h_=i(Xr);Ep=s(h_,"DebertaV2Model"),h_.forEach(t),ud.forEach(t),Rl=h(o),Ze=r(o,"DIV",{class:!0});var Vn=i(Ze);w(ss.$$.fragment,Vn),Fp=h(Vn),as=r(Vn,"P",{});var gd=i(as);Vp=s(gd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),rs=r(gd,"A",{href:!0,rel:!0});var m_=i(rs);qp=s(m_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),m_.forEach(t),xp=s(gd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gd.forEach(t),zp=h(Vn),is=r(Vn,"P",{});var _d=i(is);Mp=s(_d,"This model is also a PyTorch "),ls=r(_d,"A",{href:!0,rel:!0});var f_=i(ls);jp=s(f_,"torch.nn.Module"),f_.forEach(t),Cp=s(_d," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_d.forEach(t),Pp=h(Vn),rt=r(Vn,"DIV",{class:!0});var qn=i(rt);w(ds.$$.fragment,qn),Rp=h(qn),Wt=r(qn,"P",{});var cr=i(Wt);Bp=s(cr,"The "),Oa=r(cr,"A",{href:!0});var u_=i(Oa);Ap=s(u_,"DebertaV2Model"),u_.forEach(t),Lp=s(cr," forward method, overrides the "),Yr=r(cr,"CODE",{});var g_=i(Yr);Sp=s(g_,"__call__"),g_.forEach(t),Ip=s(cr," special method."),cr.forEach(t),Np=h(qn),w(Eo.$$.fragment,qn),Op=h(qn),w(Fo.$$.fragment,qn),qn.forEach(t),Vn.forEach(t),Bl=h(o),Ht=r(o,"H2",{class:!0});var bd=i(Ht);Vo=r(bd,"A",{id:!0,class:!0,href:!0});var __=i(Vo);Zr=r(__,"SPAN",{});var b_=i(Zr);w(cs.$$.fragment,b_),b_.forEach(t),__.forEach(t),Wp=h(bd),ei=r(bd,"SPAN",{});var k_=i(ei);Hp=s(k_,"DebertaV2PreTrainedModel"),k_.forEach(t),bd.forEach(t),Al=h(o),gt=r(o,"DIV",{class:!0});var pr=i(gt);w(ps.$$.fragment,pr),Up=h(pr),ti=r(pr,"P",{});var v_=i(ti);Qp=s(v_,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),v_.forEach(t),Gp=h(pr),it=r(pr,"DIV",{class:!0});var xn=i(it);w(hs.$$.fragment,xn),Kp=h(xn),oi=r(xn,"P",{});var T_=i(oi);Jp=s(T_,"Defines the computation performed at every call."),T_.forEach(t),Xp=h(xn),ni=r(xn,"P",{});var w_=i(ni);Yp=s(w_,"Should be overridden by all subclasses."),w_.forEach(t),Zp=h(xn),w(qo.$$.fragment,xn),xn.forEach(t),pr.forEach(t),Ll=h(o),Ut=r(o,"H2",{class:!0});var kd=i(Ut);xo=r(kd,"A",{id:!0,class:!0,href:!0});var $_=i(xo);si=r($_,"SPAN",{});var y_=i(si);w(ms.$$.fragment,y_),y_.forEach(t),$_.forEach(t),eh=h(kd),ai=r(kd,"SPAN",{});var D_=i(ai);th=s(D_,"DebertaV2ForMaskedLM"),D_.forEach(t),kd.forEach(t),Sl=h(o),et=r(o,"DIV",{class:!0});var zn=i(et);w(fs.$$.fragment,zn),oh=h(zn),Qt=r(zn,"P",{});var hr=i(Qt);nh=s(hr,"DeBERTa Model with a "),ri=r(hr,"CODE",{});var E_=i(ri);sh=s(E_,"language modeling"),E_.forEach(t),ah=s(hr,` head on top.
The DeBERTa model was proposed in `),us=r(hr,"A",{href:!0,rel:!0});var F_=i(us);rh=s(F_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),F_.forEach(t),ih=s(hr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hr.forEach(t),lh=h(zn),gs=r(zn,"P",{});var vd=i(gs);dh=s(vd,"This model is also a PyTorch "),_s=r(vd,"A",{href:!0,rel:!0});var V_=i(_s);ch=s(V_,"torch.nn.Module"),V_.forEach(t),ph=s(vd," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),vd.forEach(t),hh=h(zn),We=r(zn,"DIV",{class:!0});var Tt=i(We);w(bs.$$.fragment,Tt),mh=h(Tt),Gt=r(Tt,"P",{});var mr=i(Gt);fh=s(mr,"The "),Wa=r(mr,"A",{href:!0});var q_=i(Wa);uh=s(q_,"DebertaV2ForMaskedLM"),q_.forEach(t),gh=s(mr," forward method, overrides the "),ii=r(mr,"CODE",{});var x_=i(ii);_h=s(x_,"__call__"),x_.forEach(t),bh=s(mr," special method."),mr.forEach(t),kh=h(Tt),w(zo.$$.fragment,Tt),vh=h(Tt),w(Mo.$$.fragment,Tt),Th=h(Tt),w(jo.$$.fragment,Tt),Tt.forEach(t),zn.forEach(t),Il=h(o),Kt=r(o,"H2",{class:!0});var Td=i(Kt);Co=r(Td,"A",{id:!0,class:!0,href:!0});var z_=i(Co);li=r(z_,"SPAN",{});var M_=i(li);w(ks.$$.fragment,M_),M_.forEach(t),z_.forEach(t),wh=h(Td),di=r(Td,"SPAN",{});var j_=i(di);$h=s(j_,"DebertaV2ForSequenceClassification"),j_.forEach(t),Td.forEach(t),Nl=h(o),Ae=r(o,"DIV",{class:!0});var wt=i(Ae);w(vs.$$.fragment,wt),yh=h(wt),ci=r(wt,"P",{});var C_=i(ci);Dh=s(C_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),C_.forEach(t),Eh=h(wt),Ts=r(wt,"P",{});var wd=i(Ts);Fh=s(wd,"The DeBERTa model was proposed in "),ws=r(wd,"A",{href:!0,rel:!0});var P_=i(ws);Vh=s(P_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),P_.forEach(t),qh=s(wd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wd.forEach(t),xh=h(wt),$s=r(wt,"P",{});var $d=i($s);zh=s($d,"This model is also a PyTorch "),ys=r($d,"A",{href:!0,rel:!0});var R_=i(ys);Mh=s(R_,"torch.nn.Module"),R_.forEach(t),jh=s($d," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),$d.forEach(t),Ch=h(wt),ze=r(wt,"DIV",{class:!0});var Xe=i(ze);w(Ds.$$.fragment,Xe),Ph=h(Xe),Jt=r(Xe,"P",{});var fr=i(Jt);Rh=s(fr,"The "),Ha=r(fr,"A",{href:!0});var B_=i(Ha);Bh=s(B_,"DebertaV2ForSequenceClassification"),B_.forEach(t),Ah=s(fr," forward method, overrides the "),pi=r(fr,"CODE",{});var A_=i(pi);Lh=s(A_,"__call__"),A_.forEach(t),Sh=s(fr," special method."),fr.forEach(t),Ih=h(Xe),w(Po.$$.fragment,Xe),Nh=h(Xe),w(Ro.$$.fragment,Xe),Oh=h(Xe),w(Bo.$$.fragment,Xe),Wh=h(Xe),w(Ao.$$.fragment,Xe),Hh=h(Xe),w(Lo.$$.fragment,Xe),Xe.forEach(t),wt.forEach(t),Ol=h(o),Xt=r(o,"H2",{class:!0});var yd=i(Xt);So=r(yd,"A",{id:!0,class:!0,href:!0});var L_=i(So);hi=r(L_,"SPAN",{});var S_=i(hi);w(Es.$$.fragment,S_),S_.forEach(t),L_.forEach(t),Uh=h(yd),mi=r(yd,"SPAN",{});var I_=i(mi);Qh=s(I_,"DebertaV2ForTokenClassification"),I_.forEach(t),yd.forEach(t),Wl=h(o),Le=r(o,"DIV",{class:!0});var $t=i(Le);w(Fs.$$.fragment,$t),Gh=h($t),fi=r($t,"P",{});var N_=i(fi);Kh=s(N_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),N_.forEach(t),Jh=h($t),Vs=r($t,"P",{});var Dd=i(Vs);Xh=s(Dd,"The DeBERTa model was proposed in "),qs=r(Dd,"A",{href:!0,rel:!0});var O_=i(qs);Yh=s(O_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),O_.forEach(t),Zh=s(Dd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dd.forEach(t),em=h($t),xs=r($t,"P",{});var Ed=i(xs);tm=s(Ed,"This model is also a PyTorch "),zs=r(Ed,"A",{href:!0,rel:!0});var W_=i(zs);om=s(W_,"torch.nn.Module"),W_.forEach(t),nm=s(Ed," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ed.forEach(t),sm=h($t),He=r($t,"DIV",{class:!0});var yt=i(He);w(Ms.$$.fragment,yt),am=h(yt),Yt=r(yt,"P",{});var ur=i(Yt);rm=s(ur,"The "),Ua=r(ur,"A",{href:!0});var H_=i(Ua);im=s(H_,"DebertaV2ForTokenClassification"),H_.forEach(t),lm=s(ur," forward method, overrides the "),ui=r(ur,"CODE",{});var U_=i(ui);dm=s(U_,"__call__"),U_.forEach(t),cm=s(ur," special method."),ur.forEach(t),pm=h(yt),w(Io.$$.fragment,yt),hm=h(yt),w(No.$$.fragment,yt),mm=h(yt),w(Oo.$$.fragment,yt),yt.forEach(t),$t.forEach(t),Hl=h(o),Zt=r(o,"H2",{class:!0});var Fd=i(Zt);Wo=r(Fd,"A",{id:!0,class:!0,href:!0});var Q_=i(Wo);gi=r(Q_,"SPAN",{});var G_=i(gi);w(js.$$.fragment,G_),G_.forEach(t),Q_.forEach(t),fm=h(Fd),_i=r(Fd,"SPAN",{});var K_=i(_i);um=s(K_,"DebertaV2ForQuestionAnswering"),K_.forEach(t),Fd.forEach(t),Ul=h(o),Se=r(o,"DIV",{class:!0});var Dt=i(Se);w(Cs.$$.fragment,Dt),gm=h(Dt),eo=r(Dt,"P",{});var gr=i(eo);_m=s(gr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bi=r(gr,"CODE",{});var J_=i(bi);bm=s(J_,"span start logits"),J_.forEach(t),km=s(gr," and "),ki=r(gr,"CODE",{});var X_=i(ki);vm=s(X_,"span end logits"),X_.forEach(t),Tm=s(gr,")."),gr.forEach(t),wm=h(Dt),Ps=r(Dt,"P",{});var Vd=i(Ps);$m=s(Vd,"The DeBERTa model was proposed in "),Rs=r(Vd,"A",{href:!0,rel:!0});var Y_=i(Rs);ym=s(Y_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Y_.forEach(t),Dm=s(Vd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vd.forEach(t),Em=h(Dt),Bs=r(Dt,"P",{});var qd=i(Bs);Fm=s(qd,"This model is also a PyTorch "),As=r(qd,"A",{href:!0,rel:!0});var Z_=i(As);Vm=s(Z_,"torch.nn.Module"),Z_.forEach(t),qm=s(qd," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),qd.forEach(t),xm=h(Dt),Ue=r(Dt,"DIV",{class:!0});var Et=i(Ue);w(Ls.$$.fragment,Et),zm=h(Et),to=r(Et,"P",{});var _r=i(to);Mm=s(_r,"The "),Qa=r(_r,"A",{href:!0});var eb=i(Qa);jm=s(eb,"DebertaV2ForQuestionAnswering"),eb.forEach(t),Cm=s(_r," forward method, overrides the "),vi=r(_r,"CODE",{});var tb=i(vi);Pm=s(tb,"__call__"),tb.forEach(t),Rm=s(_r," special method."),_r.forEach(t),Bm=h(Et),w(Ho.$$.fragment,Et),Am=h(Et),w(Uo.$$.fragment,Et),Lm=h(Et),w(Qo.$$.fragment,Et),Et.forEach(t),Dt.forEach(t),Ql=h(o),oo=r(o,"H2",{class:!0});var xd=i(oo);Go=r(xd,"A",{id:!0,class:!0,href:!0});var ob=i(Go);Ti=r(ob,"SPAN",{});var nb=i(Ti);w(Ss.$$.fragment,nb),nb.forEach(t),ob.forEach(t),Sm=h(xd),wi=r(xd,"SPAN",{});var sb=i(wi);Im=s(sb,"DebertaV2ForMultipleChoice"),sb.forEach(t),xd.forEach(t),Gl=h(o),Ie=r(o,"DIV",{class:!0});var Ft=i(Ie);w(Is.$$.fragment,Ft),Nm=h(Ft),$i=r(Ft,"P",{});var ab=i($i);Om=s(ab,`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ab.forEach(t),Wm=h(Ft),Ns=r(Ft,"P",{});var zd=i(Ns);Hm=s(zd,"The DeBERTa model was proposed in "),Os=r(zd,"A",{href:!0,rel:!0});var rb=i(Os);Um=s(rb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rb.forEach(t),Qm=s(zd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zd.forEach(t),Gm=h(Ft),Ws=r(Ft,"P",{});var Md=i(Ws);Km=s(Md,"This model is also a PyTorch "),Hs=r(Md,"A",{href:!0,rel:!0});var ib=i(Hs);Jm=s(ib,"torch.nn.Module"),ib.forEach(t),Xm=s(Md," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Md.forEach(t),Ym=h(Ft),lt=r(Ft,"DIV",{class:!0});var Mn=i(lt);w(Us.$$.fragment,Mn),Zm=h(Mn),no=r(Mn,"P",{});var br=i(no);ef=s(br,"The ["),yi=r(br,"EM",{});var lb=i(yi);tf=s(lb,"DebertaV2ForMultipleChoice"),lb.forEach(t),of=s(br,"] forward method, overrides the "),Di=r(br,"EM",{});var db=i(Di);Ei=r(db,"STRONG",{});var cb=i(Ei);nf=s(cb,"call"),cb.forEach(t),db.forEach(t),sf=s(br," special method."),br.forEach(t),af=h(Mn),w(Ko.$$.fragment,Mn),rf=h(Mn),w(Jo.$$.fragment,Mn),Mn.forEach(t),Ft.forEach(t),Kl=h(o),so=r(o,"H2",{class:!0});var jd=i(so);Xo=r(jd,"A",{id:!0,class:!0,href:!0});var pb=i(Xo);Fi=r(pb,"SPAN",{});var hb=i(Fi);w(Qs.$$.fragment,hb),hb.forEach(t),pb.forEach(t),lf=h(jd),Vi=r(jd,"SPAN",{});var mb=i(Vi);df=s(mb,"TFDebertaV2Model"),mb.forEach(t),jd.forEach(t),Jl=h(o),Ne=r(o,"DIV",{class:!0});var Vt=i(Ne);w(Gs.$$.fragment,Vt),cf=h(Vt),Ks=r(Vt,"P",{});var Cd=i(Ks);pf=s(Cd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Js=r(Cd,"A",{href:!0,rel:!0});var fb=i(Js);hf=s(fb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fb.forEach(t),mf=s(Cd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Cd.forEach(t),ff=h(Vt),Xs=r(Vt,"P",{});var Pd=i(Xs);uf=s(Pd,"This model is also a "),Ys=r(Pd,"A",{href:!0,rel:!0});var ub=i(Ys);gf=s(ub,"tf.keras.Model"),ub.forEach(t),_f=s(Pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pd.forEach(t),bf=h(Vt),w(Yo.$$.fragment,Vt),kf=h(Vt),dt=r(Vt,"DIV",{class:!0});var jn=i(dt);w(Zs.$$.fragment,jn),vf=h(jn),ao=r(jn,"P",{});var kr=i(ao);Tf=s(kr,"The "),Ga=r(kr,"A",{href:!0});var gb=i(Ga);wf=s(gb,"TFDebertaV2Model"),gb.forEach(t),$f=s(kr," forward method, overrides the "),qi=r(kr,"CODE",{});var _b=i(qi);yf=s(_b,"__call__"),_b.forEach(t),Df=s(kr," special method."),kr.forEach(t),Ef=h(jn),w(Zo.$$.fragment,jn),Ff=h(jn),w(en.$$.fragment,jn),jn.forEach(t),Vt.forEach(t),Xl=h(o),ro=r(o,"H2",{class:!0});var Rd=i(ro);tn=r(Rd,"A",{id:!0,class:!0,href:!0});var bb=i(tn);xi=r(bb,"SPAN",{});var kb=i(xi);w(ea.$$.fragment,kb),kb.forEach(t),bb.forEach(t),Vf=h(Rd),zi=r(Rd,"SPAN",{});var vb=i(zi);qf=s(vb,"TFDebertaV2PreTrainedModel"),vb.forEach(t),Rd.forEach(t),Yl=h(o),_t=r(o,"DIV",{class:!0});var vr=i(_t);w(ta.$$.fragment,vr),xf=h(vr),Mi=r(vr,"P",{});var Tb=i(Mi);zf=s(Tb,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Tb.forEach(t),Mf=h(vr),ct=r(vr,"DIV",{class:!0});var Cn=i(ct);w(oa.$$.fragment,Cn),jf=h(Cn),ji=r(Cn,"P",{});var wb=i(ji);Cf=s(wb,"Calls the model on new inputs and returns the outputs as tensors."),wb.forEach(t),Pf=h(Cn),na=r(Cn,"P",{});var Bd=i(na);Rf=s(Bd,"In this case "),Ci=r(Bd,"CODE",{});var $b=i(Ci);Bf=s($b,"call()"),$b.forEach(t),Af=s(Bd,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Bd.forEach(t),Lf=h(Cn),tt=r(Cn,"P",{});var qt=i(tt);Sf=s(qt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Pi=r(qt,"CODE",{});var yb=i(Pi);If=s(yb,"tf.keras.Model"),yb.forEach(t),Nf=s(qt,`.
To call a model on an input, always use the `),Ri=r(qt,"CODE",{});var Db=i(Ri);Of=s(Db,"__call__()"),Db.forEach(t),Wf=s(qt,` method,
i.e. `),Bi=r(qt,"CODE",{});var Eb=i(Bi);Hf=s(Eb,"model(inputs)"),Eb.forEach(t),Uf=s(qt,", which relies on the underlying "),Ai=r(qt,"CODE",{});var Fb=i(Ai);Qf=s(Fb,"call()"),Fb.forEach(t),Gf=s(qt," method."),qt.forEach(t),Cn.forEach(t),vr.forEach(t),Zl=h(o),io=r(o,"H2",{class:!0});var Ad=i(io);on=r(Ad,"A",{id:!0,class:!0,href:!0});var Vb=i(on);Li=r(Vb,"SPAN",{});var qb=i(Li);w(sa.$$.fragment,qb),qb.forEach(t),Vb.forEach(t),Kf=h(Ad),Si=r(Ad,"SPAN",{});var xb=i(Si);Jf=s(xb,"TFDebertaV2ForMaskedLM"),xb.forEach(t),Ad.forEach(t),ed=h(o),Oe=r(o,"DIV",{class:!0});var xt=i(Oe);w(aa.$$.fragment,xt),Xf=h(xt),lo=r(xt,"P",{});var Tr=i(lo);Yf=s(Tr,"DeBERTa Model with a "),Ii=r(Tr,"CODE",{});var zb=i(Ii);Zf=s(zb,"language modeling"),zb.forEach(t),eu=s(Tr,` head on top.
The DeBERTa model was proposed in `),ra=r(Tr,"A",{href:!0,rel:!0});var Mb=i(ra);tu=s(Mb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mb.forEach(t),ou=s(Tr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tr.forEach(t),nu=h(xt),ia=r(xt,"P",{});var Ld=i(ia);su=s(Ld,"This model is also a "),la=r(Ld,"A",{href:!0,rel:!0});var jb=i(la);au=s(jb,"tf.keras.Model"),jb.forEach(t),ru=s(Ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ld.forEach(t),iu=h(xt),w(nn.$$.fragment,xt),lu=h(xt),Qe=r(xt,"DIV",{class:!0});var zt=i(Qe);w(da.$$.fragment,zt),du=h(zt),co=r(zt,"P",{});var wr=i(co);cu=s(wr,"The "),Ka=r(wr,"A",{href:!0});var Cb=i(Ka);pu=s(Cb,"TFDebertaV2ForMaskedLM"),Cb.forEach(t),hu=s(wr," forward method, overrides the "),Ni=r(wr,"CODE",{});var Pb=i(Ni);mu=s(Pb,"__call__"),Pb.forEach(t),fu=s(wr," special method."),wr.forEach(t),uu=h(zt),w(sn.$$.fragment,zt),gu=h(zt),w(an.$$.fragment,zt),_u=h(zt),w(rn.$$.fragment,zt),zt.forEach(t),xt.forEach(t),td=h(o),po=r(o,"H2",{class:!0});var Sd=i(po);ln=r(Sd,"A",{id:!0,class:!0,href:!0});var Rb=i(ln);Oi=r(Rb,"SPAN",{});var Bb=i(Oi);w(ca.$$.fragment,Bb),Bb.forEach(t),Rb.forEach(t),bu=h(Sd),Wi=r(Sd,"SPAN",{});var Ab=i(Wi);ku=s(Ab,"TFDebertaV2ForSequenceClassification"),Ab.forEach(t),Sd.forEach(t),od=h(o),Ce=r(o,"DIV",{class:!0});var ht=i(Ce);w(pa.$$.fragment,ht),vu=h(ht),Hi=r(ht,"P",{});var Lb=i(Hi);Tu=s(Lb,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Lb.forEach(t),wu=h(ht),ha=r(ht,"P",{});var Id=i(ha);$u=s(Id,"The DeBERTa model was proposed in "),ma=r(Id,"A",{href:!0,rel:!0});var Sb=i(ma);yu=s(Sb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sb.forEach(t),Du=s(Id,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Id.forEach(t),Eu=h(ht),fa=r(ht,"P",{});var Nd=i(fa);Fu=s(Nd,"This model is also a "),ua=r(Nd,"A",{href:!0,rel:!0});var Ib=i(ua);Vu=s(Ib,"tf.keras.Model"),Ib.forEach(t),qu=s(Nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nd.forEach(t),xu=h(ht),w(dn.$$.fragment,ht),zu=h(ht),Ge=r(ht,"DIV",{class:!0});var Mt=i(Ge);w(ga.$$.fragment,Mt),Mu=h(Mt),ho=r(Mt,"P",{});var $r=i(ho);ju=s($r,"The "),Ja=r($r,"A",{href:!0});var Nb=i(Ja);Cu=s(Nb,"TFDebertaV2ForSequenceClassification"),Nb.forEach(t),Pu=s($r," forward method, overrides the "),Ui=r($r,"CODE",{});var Ob=i(Ui);Ru=s(Ob,"__call__"),Ob.forEach(t),Bu=s($r," special method."),$r.forEach(t),Au=h(Mt),w(cn.$$.fragment,Mt),Lu=h(Mt),w(pn.$$.fragment,Mt),Su=h(Mt),w(hn.$$.fragment,Mt),Mt.forEach(t),ht.forEach(t),nd=h(o),mo=r(o,"H2",{class:!0});var Od=i(mo);mn=r(Od,"A",{id:!0,class:!0,href:!0});var Wb=i(mn);Qi=r(Wb,"SPAN",{});var Hb=i(Qi);w(_a.$$.fragment,Hb),Hb.forEach(t),Wb.forEach(t),Iu=h(Od),Gi=r(Od,"SPAN",{});var Ub=i(Gi);Nu=s(Ub,"TFDebertaV2ForTokenClassification"),Ub.forEach(t),Od.forEach(t),sd=h(o),Pe=r(o,"DIV",{class:!0});var mt=i(Pe);w(ba.$$.fragment,mt),Ou=h(mt),Ki=r(mt,"P",{});var Qb=i(Ki);Wu=s(Qb,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qb.forEach(t),Hu=h(mt),ka=r(mt,"P",{});var Wd=i(ka);Uu=s(Wd,"The DeBERTa model was proposed in "),va=r(Wd,"A",{href:!0,rel:!0});var Gb=i(va);Qu=s(Gb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gb.forEach(t),Gu=s(Wd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wd.forEach(t),Ku=h(mt),Ta=r(mt,"P",{});var Hd=i(Ta);Ju=s(Hd,"This model is also a "),wa=r(Hd,"A",{href:!0,rel:!0});var Kb=i(wa);Xu=s(Kb,"tf.keras.Model"),Kb.forEach(t),Yu=s(Hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hd.forEach(t),Zu=h(mt),w(fn.$$.fragment,mt),eg=h(mt),Ke=r(mt,"DIV",{class:!0});var jt=i(Ke);w($a.$$.fragment,jt),tg=h(jt),fo=r(jt,"P",{});var yr=i(fo);og=s(yr,"The "),Xa=r(yr,"A",{href:!0});var Jb=i(Xa);ng=s(Jb,"TFDebertaV2ForTokenClassification"),Jb.forEach(t),sg=s(yr," forward method, overrides the "),Ji=r(yr,"CODE",{});var Xb=i(Ji);ag=s(Xb,"__call__"),Xb.forEach(t),rg=s(yr," special method."),yr.forEach(t),ig=h(jt),w(un.$$.fragment,jt),lg=h(jt),w(gn.$$.fragment,jt),dg=h(jt),w(_n.$$.fragment,jt),jt.forEach(t),mt.forEach(t),ad=h(o),uo=r(o,"H2",{class:!0});var Ud=i(uo);bn=r(Ud,"A",{id:!0,class:!0,href:!0});var Yb=i(bn);Xi=r(Yb,"SPAN",{});var Zb=i(Xi);w(ya.$$.fragment,Zb),Zb.forEach(t),Yb.forEach(t),cg=h(Ud),Yi=r(Ud,"SPAN",{});var e2=i(Yi);pg=s(e2,"TFDebertaV2ForQuestionAnswering"),e2.forEach(t),Ud.forEach(t),rd=h(o),Re=r(o,"DIV",{class:!0});var ft=i(Re);w(Da.$$.fragment,ft),hg=h(ft),go=r(ft,"P",{});var Dr=i(go);mg=s(Dr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zi=r(Dr,"CODE",{});var t2=i(Zi);fg=s(t2,"span start logits"),t2.forEach(t),ug=s(Dr," and "),el=r(Dr,"CODE",{});var o2=i(el);gg=s(o2,"span end logits"),o2.forEach(t),_g=s(Dr,")."),Dr.forEach(t),bg=h(ft),Ea=r(ft,"P",{});var Qd=i(Ea);kg=s(Qd,"The DeBERTa model was proposed in "),Fa=r(Qd,"A",{href:!0,rel:!0});var n2=i(Fa);vg=s(n2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),n2.forEach(t),Tg=s(Qd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qd.forEach(t),wg=h(ft),Va=r(ft,"P",{});var Gd=i(Va);$g=s(Gd,"This model is also a "),qa=r(Gd,"A",{href:!0,rel:!0});var s2=i(qa);yg=s(s2,"tf.keras.Model"),s2.forEach(t),Dg=s(Gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gd.forEach(t),Eg=h(ft),w(kn.$$.fragment,ft),Fg=h(ft),Je=r(ft,"DIV",{class:!0});var Ct=i(Je);w(xa.$$.fragment,Ct),Vg=h(Ct),_o=r(Ct,"P",{});var Er=i(_o);qg=s(Er,"The "),Ya=r(Er,"A",{href:!0});var a2=i(Ya);xg=s(a2,"TFDebertaV2ForQuestionAnswering"),a2.forEach(t),zg=s(Er," forward method, overrides the "),tl=r(Er,"CODE",{});var r2=i(tl);Mg=s(r2,"__call__"),r2.forEach(t),jg=s(Er," special method."),Er.forEach(t),Cg=h(Ct),w(vn.$$.fragment,Ct),Pg=h(Ct),w(Tn.$$.fragment,Ct),Rg=h(Ct),w(wn.$$.fragment,Ct),Ct.forEach(t),ft.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Z2)),u(m,"id","debertav2"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#debertav2"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(x,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(A,"href","https://github.com/microsoft/DeBERTa"),u(A,"rel","nofollow"),u(P,"href","https://github.com/microsoft/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(oe,"rel","nofollow"),u(L,"href","https://github.com/google/sentencepiece"),u(L,"rel","nofollow"),u(Pn,"href","https://huggingface.co/DeBERTa"),u(Pn,"rel","nofollow"),u(Rn,"href","https://huggingface.co/kamalkraj"),u(Rn,"rel","nofollow"),u(Bn,"href","https://github.com/microsoft/DeBERTa"),u(Bn,"rel","nofollow"),u(ko,"id","transformers.DebertaV2Config"),u(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ko,"href","#transformers.DebertaV2Config"),u(Pt,"class","relative group"),u(La,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(Sn,"href","https://huggingface.co/microsoft/deberta-v2-xlarge"),u(Sn,"rel","nofollow"),u(Sa,"href","/docs/transformers/pr_17135/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ia,"href","/docs/transformers/pr_17135/en/main_classes/configuration#transformers.PretrainedConfig"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"id","transformers.DebertaV2Tokenizer"),u(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vo,"href","#transformers.DebertaV2Tokenizer"),u(At,"class","relative group"),u(Wn,"href","https://github.com/google/sentencepiece"),u(Wn,"rel","nofollow"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"id","transformers.DebertaV2TokenizerFast"),u($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($o,"href","#transformers.DebertaV2TokenizerFast"),u(It,"class","relative group"),u(Zn,"href","https://github.com/google/sentencepiece"),u(Zn,"rel","nofollow"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"id","transformers.DebertaV2Model"),u(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Do,"href","#transformers.DebertaV2Model"),u(Ot,"class","relative group"),u(rs,"href","https://arxiv.org/abs/2006.03654"),u(rs,"rel","nofollow"),u(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ls,"rel","nofollow"),u(Oa,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"id","transformers.DebertaV2PreTrainedModel"),u(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vo,"href","#transformers.DebertaV2PreTrainedModel"),u(Ht,"class","relative group"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xo,"id","transformers.DebertaV2ForMaskedLM"),u(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xo,"href","#transformers.DebertaV2ForMaskedLM"),u(Ut,"class","relative group"),u(us,"href","https://arxiv.org/abs/2006.03654"),u(us,"rel","nofollow"),u(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_s,"rel","nofollow"),u(Wa,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"id","transformers.DebertaV2ForSequenceClassification"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.DebertaV2ForSequenceClassification"),u(Kt,"class","relative group"),u(ws,"href","https://arxiv.org/abs/2006.03654"),u(ws,"rel","nofollow"),u(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ys,"rel","nofollow"),u(Ha,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"id","transformers.DebertaV2ForTokenClassification"),u(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(So,"href","#transformers.DebertaV2ForTokenClassification"),u(Xt,"class","relative group"),u(qs,"href","https://arxiv.org/abs/2006.03654"),u(qs,"rel","nofollow"),u(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(zs,"rel","nofollow"),u(Ua,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wo,"id","transformers.DebertaV2ForQuestionAnswering"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#transformers.DebertaV2ForQuestionAnswering"),u(Zt,"class","relative group"),u(Rs,"href","https://arxiv.org/abs/2006.03654"),u(Rs,"rel","nofollow"),u(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(As,"rel","nofollow"),u(Qa,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.DebertaV2ForMultipleChoice"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.DebertaV2ForMultipleChoice"),u(oo,"class","relative group"),u(Os,"href","https://arxiv.org/abs/2006.03654"),u(Os,"rel","nofollow"),u(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hs,"rel","nofollow"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xo,"id","transformers.TFDebertaV2Model"),u(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xo,"href","#transformers.TFDebertaV2Model"),u(so,"class","relative group"),u(Js,"href","https://arxiv.org/abs/2006.03654"),u(Js,"rel","nofollow"),u(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ys,"rel","nofollow"),u(Ga,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tn,"id","transformers.TFDebertaV2PreTrainedModel"),u(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tn,"href","#transformers.TFDebertaV2PreTrainedModel"),u(ro,"class","relative group"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(on,"id","transformers.TFDebertaV2ForMaskedLM"),u(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(on,"href","#transformers.TFDebertaV2ForMaskedLM"),u(io,"class","relative group"),u(ra,"href","https://arxiv.org/abs/2006.03654"),u(ra,"rel","nofollow"),u(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(la,"rel","nofollow"),u(Ka,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.TFDebertaV2ForSequenceClassification"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(po,"class","relative group"),u(ma,"href","https://arxiv.org/abs/2006.03654"),u(ma,"rel","nofollow"),u(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ua,"rel","nofollow"),u(Ja,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.TFDebertaV2ForTokenClassification"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.TFDebertaV2ForTokenClassification"),u(mo,"class","relative group"),u(va,"href","https://arxiv.org/abs/2006.03654"),u(va,"rel","nofollow"),u(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(wa,"rel","nofollow"),u(Xa,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(uo,"class","relative group"),u(Fa,"href","https://arxiv.org/abs/2006.03654"),u(Fa,"rel","nofollow"),u(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qa,"rel","nofollow"),u(Ya,"href","/docs/transformers/pr_17135/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,m),e(m,k),$(l,k,null),e(c,f),e(c,V),e(V,de),_(o,J,b),_(o,x,b),e(x,Y),e(Y,S),$(ee,S,null),e(x,ce),e(x,I),e(I,pe),_(o,re,b),_(o,W,b),e(W,R),e(W,te),e(te,Z),e(W,z),_(o,j,b),_(o,ne,b),e(ne,H),_(o,ie,b),_(o,se,b),e(se,U),_(o,le,b),_(o,ae,b),e(ae,M),e(M,he),e(M,A),e(A,me),e(M,fe),_(o,O,b),_(o,X,b),e(X,ue),e(X,P),e(P,ge),e(X,Q),e(X,oe),e(oe,v),_(o,q,b),_(o,K,b),e(K,Ee),_(o,De,b),_(o,C,b),e(C,_e),e(_e,$e),e($e,Fe),e(_e,B),e(_e,L),e(L,Ve),e(_e,qe),e(C,G),e(C,we),e(we,ye),e(ye,be),e(we,xe),e(C,Kd),e(C,Ra),e(Ra,Fr),e(Fr,Jd),e(Ra,Xd),e(C,Yd),e(C,Ba),e(Ba,Vr),e(Vr,Zd),e(Ba,ec),e(C,tc),e(C,Aa),e(Aa,qr),e(qr,oc),e(Aa,nc),_(o,Vl,b),_(o,nt,b),e(nt,sc),e(nt,Pn),e(Pn,ac),e(nt,rc),e(nt,Rn),e(Rn,ic),e(nt,lc),e(nt,Bn),e(Bn,dc),e(nt,cc),_(o,ql,b),_(o,Pt,b),e(Pt,ko),e(ko,xr),$(An,xr,null),e(Pt,pc),e(Pt,zr),e(zr,hc),_(o,xl,b),_(o,ut,b),$(Ln,ut,null),e(ut,mc),e(ut,Rt),e(Rt,fc),e(Rt,La),e(La,uc),e(Rt,gc),e(Rt,Sn),e(Sn,_c),e(Rt,bc),e(ut,kc),e(ut,Bt),e(Bt,vc),e(Bt,Sa),e(Sa,Tc),e(Bt,wc),e(Bt,Ia),e(Ia,$c),e(Bt,yc),_(o,zl,b),_(o,At,b),e(At,vo),e(vo,Mr),$(In,Mr,null),e(At,Dc),e(At,jr),e(jr,Ec),_(o,Ml,b),_(o,je,b),$(Nn,je,null),e(je,Fc),e(je,On),e(On,Vc),e(On,Wn),e(Wn,qc),e(On,xc),e(je,zc),e(je,kt),$(Hn,kt,null),e(kt,Mc),e(kt,Cr),e(Cr,jc),e(kt,Cc),e(kt,Un),e(Un,Pr),e(Pr,Pc),e(Un,Rc),e(Un,Rr),e(Rr,Bc),e(je,Ac),e(je,To),$(Qn,To,null),e(To,Lc),e(To,Lt),e(Lt,Sc),e(Lt,Br),e(Br,Ic),e(Lt,Nc),e(Lt,Ar),e(Ar,Oc),e(Lt,Wc),e(je,Hc),e(je,st),$(Gn,st,null),e(st,Uc),e(st,Lr),e(Lr,Qc),e(st,Gc),$(wo,st,null),e(st,Kc),e(st,St),e(St,Jc),e(St,Sr),e(Sr,Xc),e(St,Yc),e(St,Ir),e(Ir,Zc),e(St,ep),e(je,tp),e(je,Na),$(Kn,Na,null),_(o,jl,b),_(o,It,b),e(It,$o),e($o,Nr),$(Jn,Nr,null),e(It,op),e(It,Or),e(Or,np),_(o,Cl,b),_(o,Ye,b),$(Xn,Ye,null),e(Ye,sp),e(Ye,Yn),e(Yn,ap),e(Yn,Zn),e(Zn,rp),e(Yn,ip),e(Ye,lp),e(Ye,vt),$(es,vt,null),e(vt,dp),e(vt,Wr),e(Wr,cp),e(vt,pp),e(vt,ts),e(ts,Hr),e(Hr,hp),e(ts,mp),e(ts,Ur),e(Ur,fp),e(Ye,up),e(Ye,at),$(os,at,null),e(at,gp),e(at,Qr),e(Qr,_p),e(at,bp),$(yo,at,null),e(at,kp),e(at,Nt),e(Nt,vp),e(Nt,Gr),e(Gr,Tp),e(Nt,wp),e(Nt,Kr),e(Kr,$p),e(Nt,yp),_(o,Pl,b),_(o,Ot,b),e(Ot,Do),e(Do,Jr),$(ns,Jr,null),e(Ot,Dp),e(Ot,Xr),e(Xr,Ep),_(o,Rl,b),_(o,Ze,b),$(ss,Ze,null),e(Ze,Fp),e(Ze,as),e(as,Vp),e(as,rs),e(rs,qp),e(as,xp),e(Ze,zp),e(Ze,is),e(is,Mp),e(is,ls),e(ls,jp),e(is,Cp),e(Ze,Pp),e(Ze,rt),$(ds,rt,null),e(rt,Rp),e(rt,Wt),e(Wt,Bp),e(Wt,Oa),e(Oa,Ap),e(Wt,Lp),e(Wt,Yr),e(Yr,Sp),e(Wt,Ip),e(rt,Np),$(Eo,rt,null),e(rt,Op),$(Fo,rt,null),_(o,Bl,b),_(o,Ht,b),e(Ht,Vo),e(Vo,Zr),$(cs,Zr,null),e(Ht,Wp),e(Ht,ei),e(ei,Hp),_(o,Al,b),_(o,gt,b),$(ps,gt,null),e(gt,Up),e(gt,ti),e(ti,Qp),e(gt,Gp),e(gt,it),$(hs,it,null),e(it,Kp),e(it,oi),e(oi,Jp),e(it,Xp),e(it,ni),e(ni,Yp),e(it,Zp),$(qo,it,null),_(o,Ll,b),_(o,Ut,b),e(Ut,xo),e(xo,si),$(ms,si,null),e(Ut,eh),e(Ut,ai),e(ai,th),_(o,Sl,b),_(o,et,b),$(fs,et,null),e(et,oh),e(et,Qt),e(Qt,nh),e(Qt,ri),e(ri,sh),e(Qt,ah),e(Qt,us),e(us,rh),e(Qt,ih),e(et,lh),e(et,gs),e(gs,dh),e(gs,_s),e(_s,ch),e(gs,ph),e(et,hh),e(et,We),$(bs,We,null),e(We,mh),e(We,Gt),e(Gt,fh),e(Gt,Wa),e(Wa,uh),e(Gt,gh),e(Gt,ii),e(ii,_h),e(Gt,bh),e(We,kh),$(zo,We,null),e(We,vh),$(Mo,We,null),e(We,Th),$(jo,We,null),_(o,Il,b),_(o,Kt,b),e(Kt,Co),e(Co,li),$(ks,li,null),e(Kt,wh),e(Kt,di),e(di,$h),_(o,Nl,b),_(o,Ae,b),$(vs,Ae,null),e(Ae,yh),e(Ae,ci),e(ci,Dh),e(Ae,Eh),e(Ae,Ts),e(Ts,Fh),e(Ts,ws),e(ws,Vh),e(Ts,qh),e(Ae,xh),e(Ae,$s),e($s,zh),e($s,ys),e(ys,Mh),e($s,jh),e(Ae,Ch),e(Ae,ze),$(Ds,ze,null),e(ze,Ph),e(ze,Jt),e(Jt,Rh),e(Jt,Ha),e(Ha,Bh),e(Jt,Ah),e(Jt,pi),e(pi,Lh),e(Jt,Sh),e(ze,Ih),$(Po,ze,null),e(ze,Nh),$(Ro,ze,null),e(ze,Oh),$(Bo,ze,null),e(ze,Wh),$(Ao,ze,null),e(ze,Hh),$(Lo,ze,null),_(o,Ol,b),_(o,Xt,b),e(Xt,So),e(So,hi),$(Es,hi,null),e(Xt,Uh),e(Xt,mi),e(mi,Qh),_(o,Wl,b),_(o,Le,b),$(Fs,Le,null),e(Le,Gh),e(Le,fi),e(fi,Kh),e(Le,Jh),e(Le,Vs),e(Vs,Xh),e(Vs,qs),e(qs,Yh),e(Vs,Zh),e(Le,em),e(Le,xs),e(xs,tm),e(xs,zs),e(zs,om),e(xs,nm),e(Le,sm),e(Le,He),$(Ms,He,null),e(He,am),e(He,Yt),e(Yt,rm),e(Yt,Ua),e(Ua,im),e(Yt,lm),e(Yt,ui),e(ui,dm),e(Yt,cm),e(He,pm),$(Io,He,null),e(He,hm),$(No,He,null),e(He,mm),$(Oo,He,null),_(o,Hl,b),_(o,Zt,b),e(Zt,Wo),e(Wo,gi),$(js,gi,null),e(Zt,fm),e(Zt,_i),e(_i,um),_(o,Ul,b),_(o,Se,b),$(Cs,Se,null),e(Se,gm),e(Se,eo),e(eo,_m),e(eo,bi),e(bi,bm),e(eo,km),e(eo,ki),e(ki,vm),e(eo,Tm),e(Se,wm),e(Se,Ps),e(Ps,$m),e(Ps,Rs),e(Rs,ym),e(Ps,Dm),e(Se,Em),e(Se,Bs),e(Bs,Fm),e(Bs,As),e(As,Vm),e(Bs,qm),e(Se,xm),e(Se,Ue),$(Ls,Ue,null),e(Ue,zm),e(Ue,to),e(to,Mm),e(to,Qa),e(Qa,jm),e(to,Cm),e(to,vi),e(vi,Pm),e(to,Rm),e(Ue,Bm),$(Ho,Ue,null),e(Ue,Am),$(Uo,Ue,null),e(Ue,Lm),$(Qo,Ue,null),_(o,Ql,b),_(o,oo,b),e(oo,Go),e(Go,Ti),$(Ss,Ti,null),e(oo,Sm),e(oo,wi),e(wi,Im),_(o,Gl,b),_(o,Ie,b),$(Is,Ie,null),e(Ie,Nm),e(Ie,$i),e($i,Om),e(Ie,Wm),e(Ie,Ns),e(Ns,Hm),e(Ns,Os),e(Os,Um),e(Ns,Qm),e(Ie,Gm),e(Ie,Ws),e(Ws,Km),e(Ws,Hs),e(Hs,Jm),e(Ws,Xm),e(Ie,Ym),e(Ie,lt),$(Us,lt,null),e(lt,Zm),e(lt,no),e(no,ef),e(no,yi),e(yi,tf),e(no,of),e(no,Di),e(Di,Ei),e(Ei,nf),e(no,sf),e(lt,af),$(Ko,lt,null),e(lt,rf),$(Jo,lt,null),_(o,Kl,b),_(o,so,b),e(so,Xo),e(Xo,Fi),$(Qs,Fi,null),e(so,lf),e(so,Vi),e(Vi,df),_(o,Jl,b),_(o,Ne,b),$(Gs,Ne,null),e(Ne,cf),e(Ne,Ks),e(Ks,pf),e(Ks,Js),e(Js,hf),e(Ks,mf),e(Ne,ff),e(Ne,Xs),e(Xs,uf),e(Xs,Ys),e(Ys,gf),e(Xs,_f),e(Ne,bf),$(Yo,Ne,null),e(Ne,kf),e(Ne,dt),$(Zs,dt,null),e(dt,vf),e(dt,ao),e(ao,Tf),e(ao,Ga),e(Ga,wf),e(ao,$f),e(ao,qi),e(qi,yf),e(ao,Df),e(dt,Ef),$(Zo,dt,null),e(dt,Ff),$(en,dt,null),_(o,Xl,b),_(o,ro,b),e(ro,tn),e(tn,xi),$(ea,xi,null),e(ro,Vf),e(ro,zi),e(zi,qf),_(o,Yl,b),_(o,_t,b),$(ta,_t,null),e(_t,xf),e(_t,Mi),e(Mi,zf),e(_t,Mf),e(_t,ct),$(oa,ct,null),e(ct,jf),e(ct,ji),e(ji,Cf),e(ct,Pf),e(ct,na),e(na,Rf),e(na,Ci),e(Ci,Bf),e(na,Af),e(ct,Lf),e(ct,tt),e(tt,Sf),e(tt,Pi),e(Pi,If),e(tt,Nf),e(tt,Ri),e(Ri,Of),e(tt,Wf),e(tt,Bi),e(Bi,Hf),e(tt,Uf),e(tt,Ai),e(Ai,Qf),e(tt,Gf),_(o,Zl,b),_(o,io,b),e(io,on),e(on,Li),$(sa,Li,null),e(io,Kf),e(io,Si),e(Si,Jf),_(o,ed,b),_(o,Oe,b),$(aa,Oe,null),e(Oe,Xf),e(Oe,lo),e(lo,Yf),e(lo,Ii),e(Ii,Zf),e(lo,eu),e(lo,ra),e(ra,tu),e(lo,ou),e(Oe,nu),e(Oe,ia),e(ia,su),e(ia,la),e(la,au),e(ia,ru),e(Oe,iu),$(nn,Oe,null),e(Oe,lu),e(Oe,Qe),$(da,Qe,null),e(Qe,du),e(Qe,co),e(co,cu),e(co,Ka),e(Ka,pu),e(co,hu),e(co,Ni),e(Ni,mu),e(co,fu),e(Qe,uu),$(sn,Qe,null),e(Qe,gu),$(an,Qe,null),e(Qe,_u),$(rn,Qe,null),_(o,td,b),_(o,po,b),e(po,ln),e(ln,Oi),$(ca,Oi,null),e(po,bu),e(po,Wi),e(Wi,ku),_(o,od,b),_(o,Ce,b),$(pa,Ce,null),e(Ce,vu),e(Ce,Hi),e(Hi,Tu),e(Ce,wu),e(Ce,ha),e(ha,$u),e(ha,ma),e(ma,yu),e(ha,Du),e(Ce,Eu),e(Ce,fa),e(fa,Fu),e(fa,ua),e(ua,Vu),e(fa,qu),e(Ce,xu),$(dn,Ce,null),e(Ce,zu),e(Ce,Ge),$(ga,Ge,null),e(Ge,Mu),e(Ge,ho),e(ho,ju),e(ho,Ja),e(Ja,Cu),e(ho,Pu),e(ho,Ui),e(Ui,Ru),e(ho,Bu),e(Ge,Au),$(cn,Ge,null),e(Ge,Lu),$(pn,Ge,null),e(Ge,Su),$(hn,Ge,null),_(o,nd,b),_(o,mo,b),e(mo,mn),e(mn,Qi),$(_a,Qi,null),e(mo,Iu),e(mo,Gi),e(Gi,Nu),_(o,sd,b),_(o,Pe,b),$(ba,Pe,null),e(Pe,Ou),e(Pe,Ki),e(Ki,Wu),e(Pe,Hu),e(Pe,ka),e(ka,Uu),e(ka,va),e(va,Qu),e(ka,Gu),e(Pe,Ku),e(Pe,Ta),e(Ta,Ju),e(Ta,wa),e(wa,Xu),e(Ta,Yu),e(Pe,Zu),$(fn,Pe,null),e(Pe,eg),e(Pe,Ke),$($a,Ke,null),e(Ke,tg),e(Ke,fo),e(fo,og),e(fo,Xa),e(Xa,ng),e(fo,sg),e(fo,Ji),e(Ji,ag),e(fo,rg),e(Ke,ig),$(un,Ke,null),e(Ke,lg),$(gn,Ke,null),e(Ke,dg),$(_n,Ke,null),_(o,ad,b),_(o,uo,b),e(uo,bn),e(bn,Xi),$(ya,Xi,null),e(uo,cg),e(uo,Yi),e(Yi,pg),_(o,rd,b),_(o,Re,b),$(Da,Re,null),e(Re,hg),e(Re,go),e(go,mg),e(go,Zi),e(Zi,fg),e(go,ug),e(go,el),e(el,gg),e(go,_g),e(Re,bg),e(Re,Ea),e(Ea,kg),e(Ea,Fa),e(Fa,vg),e(Ea,Tg),e(Re,wg),e(Re,Va),e(Va,$g),e(Va,qa),e(qa,yg),e(Va,Dg),e(Re,Eg),$(kn,Re,null),e(Re,Fg),e(Re,Je),$(xa,Je,null),e(Je,Vg),e(Je,_o),e(_o,qg),e(_o,Ya),e(Ya,xg),e(_o,zg),e(_o,tl),e(tl,Mg),e(_o,jg),e(Je,Cg),$(vn,Je,null),e(Je,Pg),$(Tn,Je,null),e(Je,Rg),$(wn,Je,null),id=!0},p(o,[b]){const za={};b&2&&(za.$$scope={dirty:b,ctx:o}),wo.$set(za);const ol={};b&2&&(ol.$$scope={dirty:b,ctx:o}),yo.$set(ol);const nl={};b&2&&(nl.$$scope={dirty:b,ctx:o}),Eo.$set(nl);const sl={};b&2&&(sl.$$scope={dirty:b,ctx:o}),Fo.$set(sl);const Ma={};b&2&&(Ma.$$scope={dirty:b,ctx:o}),qo.$set(Ma);const al={};b&2&&(al.$$scope={dirty:b,ctx:o}),zo.$set(al);const rl={};b&2&&(rl.$$scope={dirty:b,ctx:o}),Mo.$set(rl);const il={};b&2&&(il.$$scope={dirty:b,ctx:o}),jo.$set(il);const ja={};b&2&&(ja.$$scope={dirty:b,ctx:o}),Po.$set(ja);const ll={};b&2&&(ll.$$scope={dirty:b,ctx:o}),Ro.$set(ll);const dl={};b&2&&(dl.$$scope={dirty:b,ctx:o}),Bo.$set(dl);const cl={};b&2&&(cl.$$scope={dirty:b,ctx:o}),Ao.$set(cl);const pl={};b&2&&(pl.$$scope={dirty:b,ctx:o}),Lo.$set(pl);const Ca={};b&2&&(Ca.$$scope={dirty:b,ctx:o}),Io.$set(Ca);const hl={};b&2&&(hl.$$scope={dirty:b,ctx:o}),No.$set(hl);const $n={};b&2&&($n.$$scope={dirty:b,ctx:o}),Oo.$set($n);const ml={};b&2&&(ml.$$scope={dirty:b,ctx:o}),Ho.$set(ml);const fl={};b&2&&(fl.$$scope={dirty:b,ctx:o}),Uo.$set(fl);const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),Qo.$set(ul);const ot={};b&2&&(ot.$$scope={dirty:b,ctx:o}),Ko.$set(ot);const yn={};b&2&&(yn.$$scope={dirty:b,ctx:o}),Jo.$set(yn);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Yo.$set(gl);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),Zo.$set(_l);const Za={};b&2&&(Za.$$scope={dirty:b,ctx:o}),en.$set(Za);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),nn.$set(bl);const er={};b&2&&(er.$$scope={dirty:b,ctx:o}),sn.$set(er);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),an.$set(kl);const tr={};b&2&&(tr.$$scope={dirty:b,ctx:o}),rn.$set(tr);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),dn.$set(vl);const or={};b&2&&(or.$$scope={dirty:b,ctx:o}),cn.$set(or);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),pn.$set(Tl);const bt={};b&2&&(bt.$$scope={dirty:b,ctx:o}),hn.$set(bt);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),fn.$set(wl);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),un.$set($l);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),gn.$set(yl);const Pa={};b&2&&(Pa.$$scope={dirty:b,ctx:o}),_n.$set(Pa);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),kn.$set(Dl);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),vn.$set(El);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),Tn.$set(Fl);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),wn.$set(bo)},i(o){id||(y(l.$$.fragment,o),y(ee.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(In.$$.fragment,o),y(Nn.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(wo.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(es.$$.fragment,o),y(os.$$.fragment,o),y(yo.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(ds.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(qo.$$.fragment,o),y(ms.$$.fragment,o),y(fs.$$.fragment,o),y(bs.$$.fragment,o),y(zo.$$.fragment,o),y(Mo.$$.fragment,o),y(jo.$$.fragment,o),y(ks.$$.fragment,o),y(vs.$$.fragment,o),y(Ds.$$.fragment,o),y(Po.$$.fragment,o),y(Ro.$$.fragment,o),y(Bo.$$.fragment,o),y(Ao.$$.fragment,o),y(Lo.$$.fragment,o),y(Es.$$.fragment,o),y(Fs.$$.fragment,o),y(Ms.$$.fragment,o),y(Io.$$.fragment,o),y(No.$$.fragment,o),y(Oo.$$.fragment,o),y(js.$$.fragment,o),y(Cs.$$.fragment,o),y(Ls.$$.fragment,o),y(Ho.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ss.$$.fragment,o),y(Is.$$.fragment,o),y(Us.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Qs.$$.fragment,o),y(Gs.$$.fragment,o),y(Yo.$$.fragment,o),y(Zs.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(ea.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(sa.$$.fragment,o),y(aa.$$.fragment,o),y(nn.$$.fragment,o),y(da.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ca.$$.fragment,o),y(pa.$$.fragment,o),y(dn.$$.fragment,o),y(ga.$$.fragment,o),y(cn.$$.fragment,o),y(pn.$$.fragment,o),y(hn.$$.fragment,o),y(_a.$$.fragment,o),y(ba.$$.fragment,o),y(fn.$$.fragment,o),y($a.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(ya.$$.fragment,o),y(Da.$$.fragment,o),y(kn.$$.fragment,o),y(xa.$$.fragment,o),y(vn.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),id=!0)},o(o){D(l.$$.fragment,o),D(ee.$$.fragment,o),D(An.$$.fragment,o),D(Ln.$$.fragment,o),D(In.$$.fragment,o),D(Nn.$$.fragment,o),D(Hn.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(wo.$$.fragment,o),D(Kn.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(es.$$.fragment,o),D(os.$$.fragment,o),D(yo.$$.fragment,o),D(ns.$$.fragment,o),D(ss.$$.fragment,o),D(ds.$$.fragment,o),D(Eo.$$.fragment,o),D(Fo.$$.fragment,o),D(cs.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(qo.$$.fragment,o),D(ms.$$.fragment,o),D(fs.$$.fragment,o),D(bs.$$.fragment,o),D(zo.$$.fragment,o),D(Mo.$$.fragment,o),D(jo.$$.fragment,o),D(ks.$$.fragment,o),D(vs.$$.fragment,o),D(Ds.$$.fragment,o),D(Po.$$.fragment,o),D(Ro.$$.fragment,o),D(Bo.$$.fragment,o),D(Ao.$$.fragment,o),D(Lo.$$.fragment,o),D(Es.$$.fragment,o),D(Fs.$$.fragment,o),D(Ms.$$.fragment,o),D(Io.$$.fragment,o),D(No.$$.fragment,o),D(Oo.$$.fragment,o),D(js.$$.fragment,o),D(Cs.$$.fragment,o),D(Ls.$$.fragment,o),D(Ho.$$.fragment,o),D(Uo.$$.fragment,o),D(Qo.$$.fragment,o),D(Ss.$$.fragment,o),D(Is.$$.fragment,o),D(Us.$$.fragment,o),D(Ko.$$.fragment,o),D(Jo.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Yo.$$.fragment,o),D(Zs.$$.fragment,o),D(Zo.$$.fragment,o),D(en.$$.fragment,o),D(ea.$$.fragment,o),D(ta.$$.fragment,o),D(oa.$$.fragment,o),D(sa.$$.fragment,o),D(aa.$$.fragment,o),D(nn.$$.fragment,o),D(da.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ca.$$.fragment,o),D(pa.$$.fragment,o),D(dn.$$.fragment,o),D(ga.$$.fragment,o),D(cn.$$.fragment,o),D(pn.$$.fragment,o),D(hn.$$.fragment,o),D(_a.$$.fragment,o),D(ba.$$.fragment,o),D(fn.$$.fragment,o),D($a.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(ya.$$.fragment,o),D(Da.$$.fragment,o),D(kn.$$.fragment,o),D(xa.$$.fragment,o),D(vn.$$.fragment,o),D(Tn.$$.fragment,o),D(wn.$$.fragment,o),id=!1},d(o){t(d),o&&t(g),o&&t(c),E(l),o&&t(J),o&&t(x),E(ee),o&&t(re),o&&t(W),o&&t(j),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(q),o&&t(K),o&&t(De),o&&t(C),o&&t(Vl),o&&t(nt),o&&t(ql),o&&t(Pt),E(An),o&&t(xl),o&&t(ut),E(Ln),o&&t(zl),o&&t(At),E(In),o&&t(Ml),o&&t(je),E(Nn),E(Hn),E(Qn),E(Gn),E(wo),E(Kn),o&&t(jl),o&&t(It),E(Jn),o&&t(Cl),o&&t(Ye),E(Xn),E(es),E(os),E(yo),o&&t(Pl),o&&t(Ot),E(ns),o&&t(Rl),o&&t(Ze),E(ss),E(ds),E(Eo),E(Fo),o&&t(Bl),o&&t(Ht),E(cs),o&&t(Al),o&&t(gt),E(ps),E(hs),E(qo),o&&t(Ll),o&&t(Ut),E(ms),o&&t(Sl),o&&t(et),E(fs),E(bs),E(zo),E(Mo),E(jo),o&&t(Il),o&&t(Kt),E(ks),o&&t(Nl),o&&t(Ae),E(vs),E(Ds),E(Po),E(Ro),E(Bo),E(Ao),E(Lo),o&&t(Ol),o&&t(Xt),E(Es),o&&t(Wl),o&&t(Le),E(Fs),E(Ms),E(Io),E(No),E(Oo),o&&t(Hl),o&&t(Zt),E(js),o&&t(Ul),o&&t(Se),E(Cs),E(Ls),E(Ho),E(Uo),E(Qo),o&&t(Ql),o&&t(oo),E(Ss),o&&t(Gl),o&&t(Ie),E(Is),E(Us),E(Ko),E(Jo),o&&t(Kl),o&&t(so),E(Qs),o&&t(Jl),o&&t(Ne),E(Gs),E(Yo),E(Zs),E(Zo),E(en),o&&t(Xl),o&&t(ro),E(ea),o&&t(Yl),o&&t(_t),E(ta),E(oa),o&&t(Zl),o&&t(io),E(sa),o&&t(ed),o&&t(Oe),E(aa),E(nn),E(da),E(sn),E(an),E(rn),o&&t(td),o&&t(po),E(ca),o&&t(od),o&&t(Ce),E(pa),E(dn),E(ga),E(cn),E(pn),E(hn),o&&t(nd),o&&t(mo),E(_a),o&&t(sd),o&&t(Pe),E(ba),E(fn),E($a),E(un),E(gn),E(_n),o&&t(ad),o&&t(uo),E(ya),o&&t(rd),o&&t(Re),E(Da),E(kn),E(xa),E(vn),E(Tn),E(wn)}}}const Z2={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.DebertaV2ForMultipleChoice",title:"DebertaV2ForMultipleChoice"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function ek(F){return p2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ik extends i2{constructor(d){super();l2(this,d,ek,Y2,d2,{})}}export{ik as default,Z2 as metadata};
