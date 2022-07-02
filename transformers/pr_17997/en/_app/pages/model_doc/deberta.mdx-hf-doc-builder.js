import{S as Og,i as Ng,s as Wg,e as a,k as h,w,t as n,M as Hg,c as r,d as t,m as f,a as i,x as v,h as s,b as u,G as e,g as _,y as $,q as y,o as D,B as E,v as Qg,L as ye}from"../../chunks/vendor-hf-doc-builder.js";import{T as We}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as De}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ug(F){let l,g,c,p,T;return p=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Gg(F){let l,g,c,p,T;return p=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Kg(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Vg(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Jg(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Xg(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("lsanochkin/deberta-large-feedback")
model = DebertaForMaskedLM.from_pretrained("lsanochkin/deberta-large-feedback")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;lsanochkin/deberta-large-feedback&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;lsanochkin/deberta-large-feedback&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Yg(F){let l,g;return l=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Zg(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function e_(F){let l,g,c,p,T;return p=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta")
model = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of single-label classification:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function t_(F){let l,g;return l=new De({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function o_(F){let l,g,c,p,T;return p=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta")
model = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function n_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-deberta", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function s_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function a_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("dbsamu/deberta-base-finetuned-ner")
model = DebertaForTokenClassification.from_pretrained("dbsamu/deberta-base-finetuned-ner")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;dbsamu/deberta-base-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbsamu/deberta-base-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function r_(F){let l,g;return l=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.04</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function i_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function l_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("Palak/microsoft_deberta-large_squad")
model = DebertaForQuestionAnswering.from_pretrained("Palak/microsoft_deberta-large_squad")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Palak/microsoft_deberta-large_squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;Palak/microsoft_deberta-large_squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function d_(F){let l,g;return l=new De({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.84</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function c_(F){let l,g,c,p,T,d,m,x,he,X,z,Y,S,ee,fe,I,me,le,W,B,te,Z,j,C,ne,H,de,se,Q,ce,ae,M,ue,A,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),x=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),j=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),M=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),x=r(V,"LI",{});var xe=i(x);he=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=f(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=f(b),B=r(b,"P",{});var Ee=i(B);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=f(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(N,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=f(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,x),e(x,he),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,fe),e(z,I),e(I,me),e(z,le),_(b,W,q),_(b,B,q),e(B,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,A),e(A,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(B),b&&t(Z),b&&t(j)}}}function p_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function h_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function f_(F){let l,g,c,p,T,d,m,x,he,X,z,Y,S,ee,fe,I,me,le,W,B,te,Z,j,C,ne,H,de,se,Q,ce,ae,M,ue,A,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),x=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),j=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),M=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),x=r(V,"LI",{});var xe=i(x);he=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=f(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=f(b),B=r(b,"P",{});var Ee=i(B);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=f(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(N,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=f(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,x),e(x,he),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,fe),e(z,I),e(I,me),e(z,le),_(b,W,q),_(b,B,q),e(B,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,A),e(A,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(B),b&&t(Z),b&&t(j)}}}function m_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function u_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function g_(F){let l,g;return l=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function __(F){let l,g,c,p,T,d,m,x,he,X,z,Y,S,ee,fe,I,me,le,W,B,te,Z,j,C,ne,H,de,se,Q,ce,ae,M,ue,A,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),x=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),j=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),M=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),x=r(V,"LI",{});var xe=i(x);he=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=f(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=f(b),B=r(b,"P",{});var Ee=i(B);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=f(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(N,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=f(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,x),e(x,he),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,fe),e(z,I),e(I,me),e(z,le),_(b,W,q),_(b,B,q),e(B,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,A),e(A,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(B),b&&t(Z),b&&t(j)}}}function b_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function k_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function T_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function w_(F){let l,g,c,p,T,d,m,x,he,X,z,Y,S,ee,fe,I,me,le,W,B,te,Z,j,C,ne,H,de,se,Q,ce,ae,M,ue,A,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),x=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),j=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),M=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),x=r(V,"LI",{});var xe=i(x);he=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=f(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=f(b),B=r(b,"P",{});var Ee=i(B);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=f(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(N,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=f(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,x),e(x,he),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,fe),e(z,I),e(I,me),e(z,le),_(b,W,q),_(b,B,q),e(B,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,A),e(A,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(B),b&&t(Z),b&&t(j)}}}function v_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function $_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function y_(F){let l,g;return l=new De({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function D_(F){let l,g,c,p,T,d,m,x,he,X,z,Y,S,ee,fe,I,me,le,W,B,te,Z,j,C,ne,H,de,se,Q,ce,ae,M,ue,A,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),x=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),j=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),M=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),x=r(V,"LI",{});var xe=i(x);he=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=f(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=f(b),B=r(b,"P",{});var Ee=i(B);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=f(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(N,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=f(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,x),e(x,he),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,fe),e(z,I),e(I,me),e(z,le),_(b,W,q),_(b,B,q),e(B,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,A),e(A,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(B),b&&t(Z),b&&t(j)}}}function E_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function F_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),v(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function q_(F){let l,g;return l=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function x_(F){let l,g,c,p,T,d,m,x,he,X,z,Y,S,ee,fe,I,me,le,W,B,te,Z,j,C,ne,H,de,se,Q,ce,ae,M,ue,A,ge,_e,O,K,be,P,ke,U,oe,b,q,V,qe,xe,R,pe,Te,Ee,L,G,Fe,ze,N,re,ve,we,ie,Il,na,Ol,Nl,sa,Wl,Hl,_n,Ql,Ul,Gl,qt,Kl,aa,Vl,Jl,ra,Xl,Yl,qi,xt,co,Aa,bn,Zl,Sa,ed,xi,Me,kn,td,Ia,od,nd,ft,Tn,sd,Oa,ad,rd,wn,Na,id,ld,Wa,dd,cd,po,vn,pd,zt,hd,Ha,fd,md,Qa,ud,gd,_d,ot,$n,bd,Ua,kd,Td,ho,wd,jt,vd,Ga,$d,yd,Ka,Dd,Ed,Fd,ia,yn,zi,Mt,fo,Va,Dn,qd,Ja,xd,ji,Ye,En,zd,Fn,jd,Xa,Md,Cd,Pd,mt,qn,Ld,Ya,Rd,Bd,xn,Za,Ad,Sd,er,Id,Od,nt,zn,Nd,tr,Wd,Hd,mo,Qd,Ct,Ud,or,Gd,Kd,nr,Vd,Jd,Mi,Pt,uo,sr,jn,Xd,ar,Yd,Ci,Ze,Mn,Zd,Cn,ec,Pn,tc,oc,nc,Ln,sc,Rn,ac,rc,ic,st,Bn,lc,Lt,dc,la,cc,pc,rr,hc,fc,mc,go,uc,_o,Pi,Rt,bo,ir,An,gc,lr,_c,Li,Bt,Sn,bc,dr,kc,Ri,At,ko,cr,In,Tc,pr,wc,Bi,et,On,vc,St,$c,hr,yc,Dc,Nn,Ec,Fc,qc,Wn,xc,Hn,zc,jc,Mc,He,Qn,Cc,It,Pc,da,Lc,Rc,fr,Bc,Ac,Sc,To,Ic,wo,Oc,vo,Ai,Ot,$o,mr,Un,Nc,ur,Wc,Si,Be,Gn,Hc,gr,Qc,Uc,Kn,Gc,Vn,Kc,Vc,Jc,Jn,Xc,Xn,Yc,Zc,ep,je,Yn,tp,Nt,op,ca,np,sp,_r,ap,rp,ip,yo,lp,Do,dp,Eo,cp,Fo,pp,qo,Ii,Wt,xo,br,Zn,hp,kr,fp,Oi,Ae,es,mp,Tr,up,gp,ts,_p,os,bp,kp,Tp,ns,wp,ss,vp,$p,yp,Qe,as,Dp,Ht,Ep,pa,Fp,qp,wr,xp,zp,jp,zo,Mp,jo,Cp,Mo,Ni,Qt,Co,vr,rs,Pp,$r,Lp,Wi,Se,is,Rp,Ut,Bp,yr,Ap,Sp,Dr,Ip,Op,Np,ls,Wp,ds,Hp,Qp,Up,cs,Gp,ps,Kp,Vp,Jp,Ue,hs,Xp,Gt,Yp,ha,Zp,eh,Er,th,oh,nh,Po,sh,Lo,ah,Ro,Hi,Kt,Bo,Fr,fs,rh,qr,ih,Qi,Ie,ms,lh,us,dh,gs,ch,ph,hh,_s,fh,bs,mh,uh,gh,Ao,_h,at,ks,bh,Vt,kh,fa,Th,wh,xr,vh,$h,yh,So,Dh,Io,Ui,Jt,Oo,zr,Ts,Eh,jr,Fh,Gi,ct,ws,qh,Mr,xh,zh,rt,vs,jh,Cr,Mh,Ch,$s,Ph,Pr,Lh,Rh,Bh,tt,Ah,Lr,Sh,Ih,Rr,Oh,Nh,Br,Wh,Hh,Ar,Qh,Uh,Ki,Xt,No,Sr,ys,Gh,Ir,Kh,Vi,Oe,Ds,Vh,Yt,Jh,Or,Xh,Yh,Es,Zh,ef,tf,Fs,of,qs,nf,sf,af,Wo,rf,Ge,xs,lf,Zt,df,ma,cf,pf,Nr,hf,ff,mf,Ho,uf,Qo,gf,Uo,Ji,eo,Go,Wr,zs,_f,Hr,bf,Xi,Ce,js,kf,Qr,Tf,wf,Ms,vf,Cs,$f,yf,Df,Ps,Ef,Ls,Ff,qf,xf,Ko,zf,Ke,Rs,jf,to,Mf,ua,Cf,Pf,Ur,Lf,Rf,Bf,Vo,Af,Jo,Sf,Xo,Yi,oo,Yo,Gr,Bs,If,Kr,Of,Zi,Pe,As,Nf,Vr,Wf,Hf,Ss,Qf,Is,Uf,Gf,Kf,Os,Vf,Ns,Jf,Xf,Yf,Zo,Zf,Ve,Ws,em,no,tm,ga,om,nm,Jr,sm,am,rm,en,im,tn,lm,on,el,so,nn,Xr,Hs,dm,Yr,cm,tl,Le,Qs,pm,ao,hm,Zr,fm,mm,ei,um,gm,_m,Us,bm,Gs,km,Tm,wm,Ks,vm,Vs,$m,ym,Dm,sn,Em,Je,Js,Fm,ro,qm,_a,xm,zm,ti,jm,Mm,Cm,an,Pm,rn,Lm,ln,ol;return d=new Re({}),ee=new Re({}),L=new Re({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/configuration_deberta.py#L40"}}),bn=new Re({}),kn=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta.py#L66"}}),Tn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta.py#L137",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vn=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta.py#L162",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$n=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta.py#L189",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ho=new $e({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ug]},$$scope:{ctx:F}}}),yn=new J({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/gpt2/tokenization_gpt2.py#L288"}}),Dn=new Re({}),En=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta_fast.py#L67"}}),qn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta_fast.py#L158",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/tokenization_deberta_fast.py#L183",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mo=new $e({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Gg]},$$scope:{ctx:F}}}),jn=new Re({}),Mn=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L885"}}),Bn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17997/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new We({props:{$$slots:{default:[Kg]},$$scope:{ctx:F}}}),_o=new $e({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[Vg]},$$scope:{ctx:F}}}),An=new Re({}),Sn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L790"}}),In=new Re({}),On=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L997"}}),Qn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17997/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1016",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new We({props:{$$slots:{default:[Jg]},$$scope:{ctx:F}}}),wo=new $e({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[Xg]},$$scope:{ctx:F}}}),vo=new $e({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[Yg]},$$scope:{ctx:F}}}),Un=new Re({}),Gn=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1135"}}),Yn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17997/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1160",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new We({props:{$$slots:{default:[Zg]},$$scope:{ctx:F}}}),Do=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[e_]},$$scope:{ctx:F}}}),Eo=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[t_]},$$scope:{ctx:F}}}),Fo=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[o_]},$$scope:{ctx:F}}}),qo=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[n_]},$$scope:{ctx:F}}}),Zn=new Re({}),es=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1256"}}),as=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17997/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1270",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new We({props:{$$slots:{default:[s_]},$$scope:{ctx:F}}}),jo=new $e({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[a_]},$$scope:{ctx:F}}}),Mo=new $e({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[r_]},$$scope:{ctx:F}}}),rs=new Re({}),is=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1337"}}),hs=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17997/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_deberta.py#L1350",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new We({props:{$$slots:{default:[i_]},$$scope:{ctx:F}}}),Lo=new $e({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[l_]},$$scope:{ctx:F}}}),Ro=new $e({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[d_]},$$scope:{ctx:F}}}),fs=new Re({}),ms=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1079"}}),Ao=new We({props:{$$slots:{default:[c_]},$$scope:{ctx:F}}}),ks=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1085",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),So=new We({props:{$$slots:{default:[p_]},$$scope:{ctx:F}}}),Io=new $e({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[h_]},$$scope:{ctx:F}}}),Ts=new Re({}),ws=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L984"}}),vs=new J({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/keras/engine/training.py#L492",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ys=new Re({}),Ds=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1127"}}),Wo=new We({props:{$$slots:{default:[f_]},$$scope:{ctx:F}}}),xs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1143",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ho=new We({props:{$$slots:{default:[m_]},$$scope:{ctx:F}}}),Qo=new $e({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[u_]},$$scope:{ctx:F}}}),Uo=new $e({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[g_]},$$scope:{ctx:F}}}),zs=new Re({}),js=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1210"}}),Ko=new We({props:{$$slots:{default:[__]},$$scope:{ctx:F}}}),Rs=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1228",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new We({props:{$$slots:{default:[b_]},$$scope:{ctx:F}}}),Jo=new $e({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[k_]},$$scope:{ctx:F}}}),Xo=new $e({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[T_]},$$scope:{ctx:F}}}),Bs=new Re({}),As=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1298"}}),Zo=new We({props:{$$slots:{default:[w_]},$$scope:{ctx:F}}}),Ws=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1310",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new We({props:{$$slots:{default:[v_]},$$scope:{ctx:F}}}),tn=new $e({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[$_]},$$scope:{ctx:F}}}),on=new $e({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[y_]},$$scope:{ctx:F}}}),Hs=new Re({}),Qs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17997/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1376"}}),sn=new We({props:{$$slots:{default:[D_]},$$scope:{ctx:F}}}),Js=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17997/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17997/src/transformers/models/deberta/modeling_tf_deberta.py#L1387",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17997/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new We({props:{$$slots:{default:[E_]},$$scope:{ctx:F}}}),rn=new $e({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[F_]},$$scope:{ctx:F}}}),ln=new $e({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=h(),c=a("h1"),p=a("a"),T=a("span"),w(d.$$.fragment),m=h(),x=a("span"),he=n("DeBERTa"),X=h(),z=a("h2"),Y=a("a"),S=a("span"),w(ee.$$.fragment),fe=h(),I=a("span"),me=n("Overview"),le=h(),W=a("p"),B=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),j=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=h(),ne=a("p"),H=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=h(),se=a("p"),Q=n("The abstract from the paper is the following:"),ce=h(),ae=a("p"),M=a("em"),ue=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),O=h(),K=a("p"),be=n("This model was contributed by "),P=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),b=n("kamalkraj"),q=n(" . The original code can be found "),V=a("a"),qe=n("here"),xe=n("."),R=h(),pe=a("h2"),Te=a("a"),Ee=a("span"),w(L.$$.fragment),G=h(),Fe=a("span"),ze=n("DebertaConfig"),N=h(),re=a("div"),w(ve.$$.fragment),we=h(),ie=a("p"),Il=n("This is the configuration class to store the configuration of a "),na=a("a"),Ol=n("DebertaModel"),Nl=n(" or a "),sa=a("a"),Wl=n("TFDebertaModel"),Hl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),_n=a("a"),Ql=n("microsoft/deberta-base"),Ul=n(" architecture."),Gl=h(),qt=a("p"),Kl=n("Configuration objects inherit from "),aa=a("a"),Vl=n("PretrainedConfig"),Jl=n(` and can be used to control the model outputs. Read the
documentation from `),ra=a("a"),Xl=n("PretrainedConfig"),Yl=n(" for more information."),qi=h(),xt=a("h2"),co=a("a"),Aa=a("span"),w(bn.$$.fragment),Zl=h(),Sa=a("span"),ed=n("DebertaTokenizer"),xi=h(),Me=a("div"),w(kn.$$.fragment),td=h(),Ia=a("p"),od=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),nd=h(),ft=a("div"),w(Tn.$$.fragment),sd=h(),Oa=a("p"),ad=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),rd=h(),wn=a("ul"),Na=a("li"),id=n("single sequence: [CLS] X [SEP]"),ld=h(),Wa=a("li"),dd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),cd=h(),po=a("div"),w(vn.$$.fragment),pd=h(),zt=a("p"),hd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ha=a("code"),fd=n("prepare_for_model"),md=n(" or "),Qa=a("code"),ud=n("encode_plus"),gd=n(" methods."),_d=h(),ot=a("div"),w($n.$$.fragment),bd=h(),Ua=a("p"),kd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Td=h(),w(ho.$$.fragment),wd=h(),jt=a("p"),vd=n("If "),Ga=a("code"),$d=n("token_ids_1"),yd=n(" is "),Ka=a("code"),Dd=n("None"),Ed=n(", this method only returns the first portion of the mask (0s)."),Fd=h(),ia=a("div"),w(yn.$$.fragment),zi=h(),Mt=a("h2"),fo=a("a"),Va=a("span"),w(Dn.$$.fragment),qd=h(),Ja=a("span"),xd=n("DebertaTokenizerFast"),ji=h(),Ye=a("div"),w(En.$$.fragment),zd=h(),Fn=a("p"),jd=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Xa=a("em"),Md=n("tokenizers"),Cd=n(" library."),Pd=h(),mt=a("div"),w(qn.$$.fragment),Ld=h(),Ya=a("p"),Rd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Bd=h(),xn=a("ul"),Za=a("li"),Ad=n("single sequence: [CLS] X [SEP]"),Sd=h(),er=a("li"),Id=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Od=h(),nt=a("div"),w(zn.$$.fragment),Nd=h(),tr=a("p"),Wd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Hd=h(),w(mo.$$.fragment),Qd=h(),Ct=a("p"),Ud=n("If "),or=a("code"),Gd=n("token_ids_1"),Kd=n(" is "),nr=a("code"),Vd=n("None"),Jd=n(", this method only returns the first portion of the mask (0s)."),Mi=h(),Pt=a("h2"),uo=a("a"),sr=a("span"),w(jn.$$.fragment),Xd=h(),ar=a("span"),Yd=n("DebertaModel"),Ci=h(),Ze=a("div"),w(Mn.$$.fragment),Zd=h(),Cn=a("p"),ec=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Pn=a("a"),tc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),oc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nc=h(),Ln=a("p"),sc=n("This model is also a PyTorch "),Rn=a("a"),ac=n("torch.nn.Module"),rc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ic=h(),st=a("div"),w(Bn.$$.fragment),lc=h(),Lt=a("p"),dc=n("The "),la=a("a"),cc=n("DebertaModel"),pc=n(" forward method, overrides the "),rr=a("code"),hc=n("__call__"),fc=n(" special method."),mc=h(),w(go.$$.fragment),uc=h(),w(_o.$$.fragment),Pi=h(),Rt=a("h2"),bo=a("a"),ir=a("span"),w(An.$$.fragment),gc=h(),lr=a("span"),_c=n("DebertaPreTrainedModel"),Li=h(),Bt=a("div"),w(Sn.$$.fragment),bc=h(),dr=a("p"),kc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ri=h(),At=a("h2"),ko=a("a"),cr=a("span"),w(In.$$.fragment),Tc=h(),pr=a("span"),wc=n("DebertaForMaskedLM"),Bi=h(),et=a("div"),w(On.$$.fragment),vc=h(),St=a("p"),$c=n("DeBERTa Model with a "),hr=a("code"),yc=n("language modeling"),Dc=n(` head on top.
The DeBERTa model was proposed in `),Nn=a("a"),Ec=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qc=h(),Wn=a("p"),xc=n("This model is also a PyTorch "),Hn=a("a"),zc=n("torch.nn.Module"),jc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Mc=h(),He=a("div"),w(Qn.$$.fragment),Cc=h(),It=a("p"),Pc=n("The "),da=a("a"),Lc=n("DebertaForMaskedLM"),Rc=n(" forward method, overrides the "),fr=a("code"),Bc=n("__call__"),Ac=n(" special method."),Sc=h(),w(To.$$.fragment),Ic=h(),w(wo.$$.fragment),Oc=h(),w(vo.$$.fragment),Ai=h(),Ot=a("h2"),$o=a("a"),mr=a("span"),w(Un.$$.fragment),Nc=h(),ur=a("span"),Wc=n("DebertaForSequenceClassification"),Si=h(),Be=a("div"),w(Gn.$$.fragment),Hc=h(),gr=a("p"),Qc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uc=h(),Kn=a("p"),Gc=n("The DeBERTa model was proposed in "),Vn=a("a"),Kc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=h(),Jn=a("p"),Xc=n("This model is also a PyTorch "),Xn=a("a"),Yc=n("torch.nn.Module"),Zc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ep=h(),je=a("div"),w(Yn.$$.fragment),tp=h(),Nt=a("p"),op=n("The "),ca=a("a"),np=n("DebertaForSequenceClassification"),sp=n(" forward method, overrides the "),_r=a("code"),ap=n("__call__"),rp=n(" special method."),ip=h(),w(yo.$$.fragment),lp=h(),w(Do.$$.fragment),dp=h(),w(Eo.$$.fragment),cp=h(),w(Fo.$$.fragment),pp=h(),w(qo.$$.fragment),Ii=h(),Wt=a("h2"),xo=a("a"),br=a("span"),w(Zn.$$.fragment),hp=h(),kr=a("span"),fp=n("DebertaForTokenClassification"),Oi=h(),Ae=a("div"),w(es.$$.fragment),mp=h(),Tr=a("p"),up=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gp=h(),ts=a("p"),_p=n("The DeBERTa model was proposed in "),os=a("a"),bp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tp=h(),ns=a("p"),wp=n("This model is also a PyTorch "),ss=a("a"),vp=n("torch.nn.Module"),$p=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),yp=h(),Qe=a("div"),w(as.$$.fragment),Dp=h(),Ht=a("p"),Ep=n("The "),pa=a("a"),Fp=n("DebertaForTokenClassification"),qp=n(" forward method, overrides the "),wr=a("code"),xp=n("__call__"),zp=n(" special method."),jp=h(),w(zo.$$.fragment),Mp=h(),w(jo.$$.fragment),Cp=h(),w(Mo.$$.fragment),Ni=h(),Qt=a("h2"),Co=a("a"),vr=a("span"),w(rs.$$.fragment),Pp=h(),$r=a("span"),Lp=n("DebertaForQuestionAnswering"),Wi=h(),Se=a("div"),w(is.$$.fragment),Rp=h(),Ut=a("p"),Bp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yr=a("code"),Ap=n("span start logits"),Sp=n(" and "),Dr=a("code"),Ip=n("span end logits"),Op=n(")."),Np=h(),ls=a("p"),Wp=n("The DeBERTa model was proposed in "),ds=a("a"),Hp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Up=h(),cs=a("p"),Gp=n("This model is also a PyTorch "),ps=a("a"),Kp=n("torch.nn.Module"),Vp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jp=h(),Ue=a("div"),w(hs.$$.fragment),Xp=h(),Gt=a("p"),Yp=n("The "),ha=a("a"),Zp=n("DebertaForQuestionAnswering"),eh=n(" forward method, overrides the "),Er=a("code"),th=n("__call__"),oh=n(" special method."),nh=h(),w(Po.$$.fragment),sh=h(),w(Lo.$$.fragment),ah=h(),w(Ro.$$.fragment),Hi=h(),Kt=a("h2"),Bo=a("a"),Fr=a("span"),w(fs.$$.fragment),rh=h(),qr=a("span"),ih=n("TFDebertaModel"),Qi=h(),Ie=a("div"),w(ms.$$.fragment),lh=h(),us=a("p"),dh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=a("a"),ch=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ph=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hh=h(),_s=a("p"),fh=n("This model is also a "),bs=a("a"),mh=n("tf.keras.Model"),uh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh=h(),w(Ao.$$.fragment),_h=h(),at=a("div"),w(ks.$$.fragment),bh=h(),Vt=a("p"),kh=n("The "),fa=a("a"),Th=n("TFDebertaModel"),wh=n(" forward method, overrides the "),xr=a("code"),vh=n("__call__"),$h=n(" special method."),yh=h(),w(So.$$.fragment),Dh=h(),w(Io.$$.fragment),Ui=h(),Jt=a("h2"),Oo=a("a"),zr=a("span"),w(Ts.$$.fragment),Eh=h(),jr=a("span"),Fh=n("TFDebertaPreTrainedModel"),Gi=h(),ct=a("div"),w(ws.$$.fragment),qh=h(),Mr=a("p"),xh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),zh=h(),rt=a("div"),w(vs.$$.fragment),jh=h(),Cr=a("p"),Mh=n("Calls the model on new inputs and returns the outputs as tensors."),Ch=h(),$s=a("p"),Ph=n("In this case "),Pr=a("code"),Lh=n("call()"),Rh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Bh=h(),tt=a("p"),Ah=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=a("code"),Sh=n("tf.keras.Model"),Ih=n(`.
To call a model on an input, always use the `),Rr=a("code"),Oh=n("__call__()"),Nh=n(` method,
i.e. `),Br=a("code"),Wh=n("model(inputs)"),Hh=n(", which relies on the underlying "),Ar=a("code"),Qh=n("call()"),Uh=n(" method."),Ki=h(),Xt=a("h2"),No=a("a"),Sr=a("span"),w(ys.$$.fragment),Gh=h(),Ir=a("span"),Kh=n("TFDebertaForMaskedLM"),Vi=h(),Oe=a("div"),w(Ds.$$.fragment),Vh=h(),Yt=a("p"),Jh=n("DeBERTa Model with a "),Or=a("code"),Xh=n("language modeling"),Yh=n(` head on top.
The DeBERTa model was proposed in `),Es=a("a"),Zh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ef=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tf=h(),Fs=a("p"),of=n("This model is also a "),qs=a("a"),nf=n("tf.keras.Model"),sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),af=h(),w(Wo.$$.fragment),rf=h(),Ge=a("div"),w(xs.$$.fragment),lf=h(),Zt=a("p"),df=n("The "),ma=a("a"),cf=n("TFDebertaForMaskedLM"),pf=n(" forward method, overrides the "),Nr=a("code"),hf=n("__call__"),ff=n(" special method."),mf=h(),w(Ho.$$.fragment),uf=h(),w(Qo.$$.fragment),gf=h(),w(Uo.$$.fragment),Ji=h(),eo=a("h2"),Go=a("a"),Wr=a("span"),w(zs.$$.fragment),_f=h(),Hr=a("span"),bf=n("TFDebertaForSequenceClassification"),Xi=h(),Ce=a("div"),w(js.$$.fragment),kf=h(),Qr=a("p"),Tf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wf=h(),Ms=a("p"),vf=n("The DeBERTa model was proposed in "),Cs=a("a"),$f=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Df=h(),Ps=a("p"),Ef=n("This model is also a "),Ls=a("a"),Ff=n("tf.keras.Model"),qf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xf=h(),w(Ko.$$.fragment),zf=h(),Ke=a("div"),w(Rs.$$.fragment),jf=h(),to=a("p"),Mf=n("The "),ua=a("a"),Cf=n("TFDebertaForSequenceClassification"),Pf=n(" forward method, overrides the "),Ur=a("code"),Lf=n("__call__"),Rf=n(" special method."),Bf=h(),w(Vo.$$.fragment),Af=h(),w(Jo.$$.fragment),Sf=h(),w(Xo.$$.fragment),Yi=h(),oo=a("h2"),Yo=a("a"),Gr=a("span"),w(Bs.$$.fragment),If=h(),Kr=a("span"),Of=n("TFDebertaForTokenClassification"),Zi=h(),Pe=a("div"),w(As.$$.fragment),Nf=h(),Vr=a("p"),Wf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Hf=h(),Ss=a("p"),Qf=n("The DeBERTa model was proposed in "),Is=a("a"),Uf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kf=h(),Os=a("p"),Vf=n("This model is also a "),Ns=a("a"),Jf=n("tf.keras.Model"),Xf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yf=h(),w(Zo.$$.fragment),Zf=h(),Ve=a("div"),w(Ws.$$.fragment),em=h(),no=a("p"),tm=n("The "),ga=a("a"),om=n("TFDebertaForTokenClassification"),nm=n(" forward method, overrides the "),Jr=a("code"),sm=n("__call__"),am=n(" special method."),rm=h(),w(en.$$.fragment),im=h(),w(tn.$$.fragment),lm=h(),w(on.$$.fragment),el=h(),so=a("h2"),nn=a("a"),Xr=a("span"),w(Hs.$$.fragment),dm=h(),Yr=a("span"),cm=n("TFDebertaForQuestionAnswering"),tl=h(),Le=a("div"),w(Qs.$$.fragment),pm=h(),ao=a("p"),hm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=a("code"),fm=n("span start logits"),mm=n(" and "),ei=a("code"),um=n("span end logits"),gm=n(")."),_m=h(),Us=a("p"),bm=n("The DeBERTa model was proposed in "),Gs=a("a"),km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wm=h(),Ks=a("p"),vm=n("This model is also a "),Vs=a("a"),$m=n("tf.keras.Model"),ym=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dm=h(),w(sn.$$.fragment),Em=h(),Je=a("div"),w(Js.$$.fragment),Fm=h(),ro=a("p"),qm=n("The "),_a=a("a"),xm=n("TFDebertaForQuestionAnswering"),zm=n(" forward method, overrides the "),ti=a("code"),jm=n("__call__"),Mm=n(" special method."),Cm=h(),w(an.$$.fragment),Pm=h(),w(rn.$$.fragment),Lm=h(),w(ln.$$.fragment),this.h()},l(o){const k=Hg('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=f(o),c=r(o,"H1",{class:!0});var Xs=i(c);p=r(Xs,"A",{id:!0,class:!0,href:!0});var oi=i(p);T=r(oi,"SPAN",{});var ni=i(T);v(d.$$.fragment,ni),ni.forEach(t),oi.forEach(t),m=f(Xs),x=r(Xs,"SPAN",{});var si=i(x);he=s(si,"DeBERTa"),si.forEach(t),Xs.forEach(t),X=f(o),z=r(o,"H2",{class:!0});var Ys=i(z);Y=r(Ys,"A",{id:!0,class:!0,href:!0});var ai=i(Y);S=r(ai,"SPAN",{});var ri=i(S);v(ee.$$.fragment,ri),ri.forEach(t),ai.forEach(t),fe=f(Ys),I=r(Ys,"SPAN",{});var ii=i(I);me=s(ii,"Overview"),ii.forEach(t),Ys.forEach(t),le=f(o),W=r(o,"P",{});var Zs=i(W);B=s(Zs,"The DeBERTa model was proposed in "),te=r(Zs,"A",{href:!0,rel:!0});var li=i(te);Z=s(li,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),li.forEach(t),j=s(Zs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Zs.forEach(t),C=f(o),ne=r(o,"P",{});var di=i(ne);H=s(di,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),di.forEach(t),de=f(o),se=r(o,"P",{});var ci=i(se);Q=s(ci,"The abstract from the paper is the following:"),ci.forEach(t),ce=f(o),ae=r(o,"P",{});var pi=i(ae);M=r(pi,"EM",{});var ea=i(M);ue=s(ea,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(ea,"A",{href:!0,rel:!0});var hi=i(A);ge=s(hi,"https://github.com/microsoft/DeBERTa"),hi.forEach(t),_e=s(ea,"."),ea.forEach(t),pi.forEach(t),O=f(o),K=r(o,"P",{});var pt=i(K);be=s(pt,"This model was contributed by "),P=r(pt,"A",{href:!0,rel:!0});var fi=i(P);ke=s(fi,"DeBERTa"),fi.forEach(t),U=s(pt,`. This model TF 2.0 implementation was
contributed by `),oe=r(pt,"A",{href:!0,rel:!0});var mi=i(oe);b=s(mi,"kamalkraj"),mi.forEach(t),q=s(pt," . The original code can be found "),V=r(pt,"A",{href:!0,rel:!0});var ui=i(V);qe=s(ui,"here"),ui.forEach(t),xe=s(pt,"."),pt.forEach(t),R=f(o),pe=r(o,"H2",{class:!0});var ta=i(pe);Te=r(ta,"A",{id:!0,class:!0,href:!0});var gi=i(Te);Ee=r(gi,"SPAN",{});var _i=i(Ee);v(L.$$.fragment,_i),_i.forEach(t),gi.forEach(t),G=f(ta),Fe=r(ta,"SPAN",{});var bi=i(Fe);ze=s(bi,"DebertaConfig"),bi.forEach(t),ta.forEach(t),N=f(o),re=r(o,"DIV",{class:!0});var io=i(re);v(ve.$$.fragment,io),we=f(io),ie=r(io,"P",{});var ht=i(ie);Il=s(ht,"This is the configuration class to store the configuration of a "),na=r(ht,"A",{href:!0});var ki=i(na);Ol=s(ki,"DebertaModel"),ki.forEach(t),Nl=s(ht," or a "),sa=r(ht,"A",{href:!0});var Ti=i(sa);Wl=s(Ti,"TFDebertaModel"),Ti.forEach(t),Hl=s(ht,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),_n=r(ht,"A",{href:!0,rel:!0});var wi=i(_n);Ql=s(wi,"microsoft/deberta-base"),wi.forEach(t),Ul=s(ht," architecture."),ht.forEach(t),Gl=f(io),qt=r(io,"P",{});var lo=i(qt);Kl=s(lo,"Configuration objects inherit from "),aa=r(lo,"A",{href:!0});var vi=i(aa);Vl=s(vi,"PretrainedConfig"),vi.forEach(t),Jl=s(lo,` and can be used to control the model outputs. Read the
documentation from `),ra=r(lo,"A",{href:!0});var $i=i(ra);Xl=s($i,"PretrainedConfig"),$i.forEach(t),Yl=s(lo," for more information."),lo.forEach(t),io.forEach(t),qi=f(o),xt=r(o,"H2",{class:!0});var oa=i(xt);co=r(oa,"A",{id:!0,class:!0,href:!0});var yi=i(co);Aa=r(yi,"SPAN",{});var Di=i(Aa);v(bn.$$.fragment,Di),Di.forEach(t),yi.forEach(t),Zl=f(oa),Sa=r(oa,"SPAN",{});var Ei=i(Sa);ed=s(Ei,"DebertaTokenizer"),Ei.forEach(t),oa.forEach(t),xi=f(o),Me=r(o,"DIV",{class:!0});var Ne=i(Me);v(kn.$$.fragment,Ne),td=f(Ne),Ia=r(Ne,"P",{});var Fi=i(Ia);od=s(Fi,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Fi.forEach(t),nd=f(Ne),ft=r(Ne,"DIV",{class:!0});var ba=i(ft);v(Tn.$$.fragment,ba),sd=f(ba),Oa=r(ba,"P",{});var Rm=i(Oa);ad=s(Rm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Rm.forEach(t),rd=f(ba),wn=r(ba,"UL",{});var nl=i(wn);Na=r(nl,"LI",{});var Bm=i(Na);id=s(Bm,"single sequence: [CLS] X [SEP]"),Bm.forEach(t),ld=f(nl),Wa=r(nl,"LI",{});var Am=i(Wa);dd=s(Am,"pair of sequences: [CLS] A [SEP] B [SEP]"),Am.forEach(t),nl.forEach(t),ba.forEach(t),cd=f(Ne),po=r(Ne,"DIV",{class:!0});var sl=i(po);v(vn.$$.fragment,sl),pd=f(sl),zt=r(sl,"P",{});var ka=i(zt);hd=s(ka,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ha=r(ka,"CODE",{});var Sm=i(Ha);fd=s(Sm,"prepare_for_model"),Sm.forEach(t),md=s(ka," or "),Qa=r(ka,"CODE",{});var Im=i(Qa);ud=s(Im,"encode_plus"),Im.forEach(t),gd=s(ka," methods."),ka.forEach(t),sl.forEach(t),_d=f(Ne),ot=r(Ne,"DIV",{class:!0});var dn=i(ot);v($n.$$.fragment,dn),bd=f(dn),Ua=r(dn,"P",{});var Om=i(Ua);kd=s(Om,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Om.forEach(t),Td=f(dn),v(ho.$$.fragment,dn),wd=f(dn),jt=r(dn,"P",{});var Ta=i(jt);vd=s(Ta,"If "),Ga=r(Ta,"CODE",{});var Nm=i(Ga);$d=s(Nm,"token_ids_1"),Nm.forEach(t),yd=s(Ta," is "),Ka=r(Ta,"CODE",{});var Wm=i(Ka);Dd=s(Wm,"None"),Wm.forEach(t),Ed=s(Ta,", this method only returns the first portion of the mask (0s)."),Ta.forEach(t),dn.forEach(t),Fd=f(Ne),ia=r(Ne,"DIV",{class:!0});var Hm=i(ia);v(yn.$$.fragment,Hm),Hm.forEach(t),Ne.forEach(t),zi=f(o),Mt=r(o,"H2",{class:!0});var al=i(Mt);fo=r(al,"A",{id:!0,class:!0,href:!0});var Qm=i(fo);Va=r(Qm,"SPAN",{});var Um=i(Va);v(Dn.$$.fragment,Um),Um.forEach(t),Qm.forEach(t),qd=f(al),Ja=r(al,"SPAN",{});var Gm=i(Ja);xd=s(Gm,"DebertaTokenizerFast"),Gm.forEach(t),al.forEach(t),ji=f(o),Ye=r(o,"DIV",{class:!0});var cn=i(Ye);v(En.$$.fragment,cn),zd=f(cn),Fn=r(cn,"P",{});var rl=i(Fn);jd=s(rl,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Xa=r(rl,"EM",{});var Km=i(Xa);Md=s(Km,"tokenizers"),Km.forEach(t),Cd=s(rl," library."),rl.forEach(t),Pd=f(cn),mt=r(cn,"DIV",{class:!0});var wa=i(mt);v(qn.$$.fragment,wa),Ld=f(wa),Ya=r(wa,"P",{});var Vm=i(Ya);Rd=s(Vm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vm.forEach(t),Bd=f(wa),xn=r(wa,"UL",{});var il=i(xn);Za=r(il,"LI",{});var Jm=i(Za);Ad=s(Jm,"single sequence: [CLS] X [SEP]"),Jm.forEach(t),Sd=f(il),er=r(il,"LI",{});var Xm=i(er);Id=s(Xm,"pair of sequences: [CLS] A [SEP] B [SEP]"),Xm.forEach(t),il.forEach(t),wa.forEach(t),Od=f(cn),nt=r(cn,"DIV",{class:!0});var pn=i(nt);v(zn.$$.fragment,pn),Nd=f(pn),tr=r(pn,"P",{});var Ym=i(tr);Wd=s(Ym,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Ym.forEach(t),Hd=f(pn),v(mo.$$.fragment,pn),Qd=f(pn),Ct=r(pn,"P",{});var va=i(Ct);Ud=s(va,"If "),or=r(va,"CODE",{});var Zm=i(or);Gd=s(Zm,"token_ids_1"),Zm.forEach(t),Kd=s(va," is "),nr=r(va,"CODE",{});var eu=i(nr);Vd=s(eu,"None"),eu.forEach(t),Jd=s(va,", this method only returns the first portion of the mask (0s)."),va.forEach(t),pn.forEach(t),cn.forEach(t),Mi=f(o),Pt=r(o,"H2",{class:!0});var ll=i(Pt);uo=r(ll,"A",{id:!0,class:!0,href:!0});var tu=i(uo);sr=r(tu,"SPAN",{});var ou=i(sr);v(jn.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Xd=f(ll),ar=r(ll,"SPAN",{});var nu=i(ar);Yd=s(nu,"DebertaModel"),nu.forEach(t),ll.forEach(t),Ci=f(o),Ze=r(o,"DIV",{class:!0});var hn=i(Ze);v(Mn.$$.fragment,hn),Zd=f(hn),Cn=r(hn,"P",{});var dl=i(Cn);ec=s(dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Pn=r(dl,"A",{href:!0,rel:!0});var su=i(Pn);tc=s(su,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),su.forEach(t),oc=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),nc=f(hn),Ln=r(hn,"P",{});var cl=i(Ln);sc=s(cl,"This model is also a PyTorch "),Rn=r(cl,"A",{href:!0,rel:!0});var au=i(Rn);ac=s(au,"torch.nn.Module"),au.forEach(t),rc=s(cl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),cl.forEach(t),ic=f(hn),st=r(hn,"DIV",{class:!0});var fn=i(st);v(Bn.$$.fragment,fn),lc=f(fn),Lt=r(fn,"P",{});var $a=i(Lt);dc=s($a,"The "),la=r($a,"A",{href:!0});var ru=i(la);cc=s(ru,"DebertaModel"),ru.forEach(t),pc=s($a," forward method, overrides the "),rr=r($a,"CODE",{});var iu=i(rr);hc=s(iu,"__call__"),iu.forEach(t),fc=s($a," special method."),$a.forEach(t),mc=f(fn),v(go.$$.fragment,fn),uc=f(fn),v(_o.$$.fragment,fn),fn.forEach(t),hn.forEach(t),Pi=f(o),Rt=r(o,"H2",{class:!0});var pl=i(Rt);bo=r(pl,"A",{id:!0,class:!0,href:!0});var lu=i(bo);ir=r(lu,"SPAN",{});var du=i(ir);v(An.$$.fragment,du),du.forEach(t),lu.forEach(t),gc=f(pl),lr=r(pl,"SPAN",{});var cu=i(lr);_c=s(cu,"DebertaPreTrainedModel"),cu.forEach(t),pl.forEach(t),Li=f(o),Bt=r(o,"DIV",{class:!0});var hl=i(Bt);v(Sn.$$.fragment,hl),bc=f(hl),dr=r(hl,"P",{});var pu=i(dr);kc=s(pu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),pu.forEach(t),hl.forEach(t),Ri=f(o),At=r(o,"H2",{class:!0});var fl=i(At);ko=r(fl,"A",{id:!0,class:!0,href:!0});var hu=i(ko);cr=r(hu,"SPAN",{});var fu=i(cr);v(In.$$.fragment,fu),fu.forEach(t),hu.forEach(t),Tc=f(fl),pr=r(fl,"SPAN",{});var mu=i(pr);wc=s(mu,"DebertaForMaskedLM"),mu.forEach(t),fl.forEach(t),Bi=f(o),et=r(o,"DIV",{class:!0});var mn=i(et);v(On.$$.fragment,mn),vc=f(mn),St=r(mn,"P",{});var ya=i(St);$c=s(ya,"DeBERTa Model with a "),hr=r(ya,"CODE",{});var uu=i(hr);yc=s(uu,"language modeling"),uu.forEach(t),Dc=s(ya,` head on top.
The DeBERTa model was proposed in `),Nn=r(ya,"A",{href:!0,rel:!0});var gu=i(Nn);Ec=s(gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gu.forEach(t),Fc=s(ya,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ya.forEach(t),qc=f(mn),Wn=r(mn,"P",{});var ml=i(Wn);xc=s(ml,"This model is also a PyTorch "),Hn=r(ml,"A",{href:!0,rel:!0});var _u=i(Hn);zc=s(_u,"torch.nn.Module"),_u.forEach(t),jc=s(ml," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ml.forEach(t),Mc=f(mn),He=r(mn,"DIV",{class:!0});var ut=i(He);v(Qn.$$.fragment,ut),Cc=f(ut),It=r(ut,"P",{});var Da=i(It);Pc=s(Da,"The "),da=r(Da,"A",{href:!0});var bu=i(da);Lc=s(bu,"DebertaForMaskedLM"),bu.forEach(t),Rc=s(Da," forward method, overrides the "),fr=r(Da,"CODE",{});var ku=i(fr);Bc=s(ku,"__call__"),ku.forEach(t),Ac=s(Da," special method."),Da.forEach(t),Sc=f(ut),v(To.$$.fragment,ut),Ic=f(ut),v(wo.$$.fragment,ut),Oc=f(ut),v(vo.$$.fragment,ut),ut.forEach(t),mn.forEach(t),Ai=f(o),Ot=r(o,"H2",{class:!0});var ul=i(Ot);$o=r(ul,"A",{id:!0,class:!0,href:!0});var Tu=i($o);mr=r(Tu,"SPAN",{});var wu=i(mr);v(Un.$$.fragment,wu),wu.forEach(t),Tu.forEach(t),Nc=f(ul),ur=r(ul,"SPAN",{});var vu=i(ur);Wc=s(vu,"DebertaForSequenceClassification"),vu.forEach(t),ul.forEach(t),Si=f(o),Be=r(o,"DIV",{class:!0});var gt=i(Be);v(Gn.$$.fragment,gt),Hc=f(gt),gr=r(gt,"P",{});var $u=i(gr);Qc=s($u,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$u.forEach(t),Uc=f(gt),Kn=r(gt,"P",{});var gl=i(Kn);Gc=s(gl,"The DeBERTa model was proposed in "),Vn=r(gl,"A",{href:!0,rel:!0});var yu=i(Vn);Kc=s(yu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yu.forEach(t),Vc=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Jc=f(gt),Jn=r(gt,"P",{});var _l=i(Jn);Xc=s(_l,"This model is also a PyTorch "),Xn=r(_l,"A",{href:!0,rel:!0});var Du=i(Xn);Yc=s(Du,"torch.nn.Module"),Du.forEach(t),Zc=s(_l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_l.forEach(t),ep=f(gt),je=r(gt,"DIV",{class:!0});var Xe=i(je);v(Yn.$$.fragment,Xe),tp=f(Xe),Nt=r(Xe,"P",{});var Ea=i(Nt);op=s(Ea,"The "),ca=r(Ea,"A",{href:!0});var Eu=i(ca);np=s(Eu,"DebertaForSequenceClassification"),Eu.forEach(t),sp=s(Ea," forward method, overrides the "),_r=r(Ea,"CODE",{});var Fu=i(_r);ap=s(Fu,"__call__"),Fu.forEach(t),rp=s(Ea," special method."),Ea.forEach(t),ip=f(Xe),v(yo.$$.fragment,Xe),lp=f(Xe),v(Do.$$.fragment,Xe),dp=f(Xe),v(Eo.$$.fragment,Xe),cp=f(Xe),v(Fo.$$.fragment,Xe),pp=f(Xe),v(qo.$$.fragment,Xe),Xe.forEach(t),gt.forEach(t),Ii=f(o),Wt=r(o,"H2",{class:!0});var bl=i(Wt);xo=r(bl,"A",{id:!0,class:!0,href:!0});var qu=i(xo);br=r(qu,"SPAN",{});var xu=i(br);v(Zn.$$.fragment,xu),xu.forEach(t),qu.forEach(t),hp=f(bl),kr=r(bl,"SPAN",{});var zu=i(kr);fp=s(zu,"DebertaForTokenClassification"),zu.forEach(t),bl.forEach(t),Oi=f(o),Ae=r(o,"DIV",{class:!0});var _t=i(Ae);v(es.$$.fragment,_t),mp=f(_t),Tr=r(_t,"P",{});var ju=i(Tr);up=s(ju,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ju.forEach(t),gp=f(_t),ts=r(_t,"P",{});var kl=i(ts);_p=s(kl,"The DeBERTa model was proposed in "),os=r(kl,"A",{href:!0,rel:!0});var Mu=i(os);bp=s(Mu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mu.forEach(t),kp=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Tp=f(_t),ns=r(_t,"P",{});var Tl=i(ns);wp=s(Tl,"This model is also a PyTorch "),ss=r(Tl,"A",{href:!0,rel:!0});var Cu=i(ss);vp=s(Cu,"torch.nn.Module"),Cu.forEach(t),$p=s(Tl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Tl.forEach(t),yp=f(_t),Qe=r(_t,"DIV",{class:!0});var bt=i(Qe);v(as.$$.fragment,bt),Dp=f(bt),Ht=r(bt,"P",{});var Fa=i(Ht);Ep=s(Fa,"The "),pa=r(Fa,"A",{href:!0});var Pu=i(pa);Fp=s(Pu,"DebertaForTokenClassification"),Pu.forEach(t),qp=s(Fa," forward method, overrides the "),wr=r(Fa,"CODE",{});var Lu=i(wr);xp=s(Lu,"__call__"),Lu.forEach(t),zp=s(Fa," special method."),Fa.forEach(t),jp=f(bt),v(zo.$$.fragment,bt),Mp=f(bt),v(jo.$$.fragment,bt),Cp=f(bt),v(Mo.$$.fragment,bt),bt.forEach(t),_t.forEach(t),Ni=f(o),Qt=r(o,"H2",{class:!0});var wl=i(Qt);Co=r(wl,"A",{id:!0,class:!0,href:!0});var Ru=i(Co);vr=r(Ru,"SPAN",{});var Bu=i(vr);v(rs.$$.fragment,Bu),Bu.forEach(t),Ru.forEach(t),Pp=f(wl),$r=r(wl,"SPAN",{});var Au=i($r);Lp=s(Au,"DebertaForQuestionAnswering"),Au.forEach(t),wl.forEach(t),Wi=f(o),Se=r(o,"DIV",{class:!0});var kt=i(Se);v(is.$$.fragment,kt),Rp=f(kt),Ut=r(kt,"P",{});var qa=i(Ut);Bp=s(qa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yr=r(qa,"CODE",{});var Su=i(yr);Ap=s(Su,"span start logits"),Su.forEach(t),Sp=s(qa," and "),Dr=r(qa,"CODE",{});var Iu=i(Dr);Ip=s(Iu,"span end logits"),Iu.forEach(t),Op=s(qa,")."),qa.forEach(t),Np=f(kt),ls=r(kt,"P",{});var vl=i(ls);Wp=s(vl,"The DeBERTa model was proposed in "),ds=r(vl,"A",{href:!0,rel:!0});var Ou=i(ds);Hp=s(Ou,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ou.forEach(t),Qp=s(vl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vl.forEach(t),Up=f(kt),cs=r(kt,"P",{});var $l=i(cs);Gp=s($l,"This model is also a PyTorch "),ps=r($l,"A",{href:!0,rel:!0});var Nu=i(ps);Kp=s(Nu,"torch.nn.Module"),Nu.forEach(t),Vp=s($l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),$l.forEach(t),Jp=f(kt),Ue=r(kt,"DIV",{class:!0});var Tt=i(Ue);v(hs.$$.fragment,Tt),Xp=f(Tt),Gt=r(Tt,"P",{});var xa=i(Gt);Yp=s(xa,"The "),ha=r(xa,"A",{href:!0});var Wu=i(ha);Zp=s(Wu,"DebertaForQuestionAnswering"),Wu.forEach(t),eh=s(xa," forward method, overrides the "),Er=r(xa,"CODE",{});var Hu=i(Er);th=s(Hu,"__call__"),Hu.forEach(t),oh=s(xa," special method."),xa.forEach(t),nh=f(Tt),v(Po.$$.fragment,Tt),sh=f(Tt),v(Lo.$$.fragment,Tt),ah=f(Tt),v(Ro.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Hi=f(o),Kt=r(o,"H2",{class:!0});var yl=i(Kt);Bo=r(yl,"A",{id:!0,class:!0,href:!0});var Qu=i(Bo);Fr=r(Qu,"SPAN",{});var Uu=i(Fr);v(fs.$$.fragment,Uu),Uu.forEach(t),Qu.forEach(t),rh=f(yl),qr=r(yl,"SPAN",{});var Gu=i(qr);ih=s(Gu,"TFDebertaModel"),Gu.forEach(t),yl.forEach(t),Qi=f(o),Ie=r(o,"DIV",{class:!0});var wt=i(Ie);v(ms.$$.fragment,wt),lh=f(wt),us=r(wt,"P",{});var Dl=i(us);dh=s(Dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=r(Dl,"A",{href:!0,rel:!0});var Ku=i(gs);ch=s(Ku,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ku.forEach(t),ph=s(Dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dl.forEach(t),hh=f(wt),_s=r(wt,"P",{});var El=i(_s);fh=s(El,"This model is also a "),bs=r(El,"A",{href:!0,rel:!0});var Vu=i(bs);mh=s(Vu,"tf.keras.Model"),Vu.forEach(t),uh=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),gh=f(wt),v(Ao.$$.fragment,wt),_h=f(wt),at=r(wt,"DIV",{class:!0});var un=i(at);v(ks.$$.fragment,un),bh=f(un),Vt=r(un,"P",{});var za=i(Vt);kh=s(za,"The "),fa=r(za,"A",{href:!0});var Ju=i(fa);Th=s(Ju,"TFDebertaModel"),Ju.forEach(t),wh=s(za," forward method, overrides the "),xr=r(za,"CODE",{});var Xu=i(xr);vh=s(Xu,"__call__"),Xu.forEach(t),$h=s(za," special method."),za.forEach(t),yh=f(un),v(So.$$.fragment,un),Dh=f(un),v(Io.$$.fragment,un),un.forEach(t),wt.forEach(t),Ui=f(o),Jt=r(o,"H2",{class:!0});var Fl=i(Jt);Oo=r(Fl,"A",{id:!0,class:!0,href:!0});var Yu=i(Oo);zr=r(Yu,"SPAN",{});var Zu=i(zr);v(Ts.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),Eh=f(Fl),jr=r(Fl,"SPAN",{});var eg=i(jr);Fh=s(eg,"TFDebertaPreTrainedModel"),eg.forEach(t),Fl.forEach(t),Gi=f(o),ct=r(o,"DIV",{class:!0});var ja=i(ct);v(ws.$$.fragment,ja),qh=f(ja),Mr=r(ja,"P",{});var tg=i(Mr);xh=s(tg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),tg.forEach(t),zh=f(ja),rt=r(ja,"DIV",{class:!0});var gn=i(rt);v(vs.$$.fragment,gn),jh=f(gn),Cr=r(gn,"P",{});var og=i(Cr);Mh=s(og,"Calls the model on new inputs and returns the outputs as tensors."),og.forEach(t),Ch=f(gn),$s=r(gn,"P",{});var ql=i($s);Ph=s(ql,"In this case "),Pr=r(ql,"CODE",{});var ng=i(Pr);Lh=s(ng,"call()"),ng.forEach(t),Rh=s(ql,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ql.forEach(t),Bh=f(gn),tt=r(gn,"P",{});var vt=i(tt);Ah=s(vt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=r(vt,"CODE",{});var sg=i(Lr);Sh=s(sg,"tf.keras.Model"),sg.forEach(t),Ih=s(vt,`.
To call a model on an input, always use the `),Rr=r(vt,"CODE",{});var ag=i(Rr);Oh=s(ag,"__call__()"),ag.forEach(t),Nh=s(vt,` method,
i.e. `),Br=r(vt,"CODE",{});var rg=i(Br);Wh=s(rg,"model(inputs)"),rg.forEach(t),Hh=s(vt,", which relies on the underlying "),Ar=r(vt,"CODE",{});var ig=i(Ar);Qh=s(ig,"call()"),ig.forEach(t),Uh=s(vt," method."),vt.forEach(t),gn.forEach(t),ja.forEach(t),Ki=f(o),Xt=r(o,"H2",{class:!0});var xl=i(Xt);No=r(xl,"A",{id:!0,class:!0,href:!0});var lg=i(No);Sr=r(lg,"SPAN",{});var dg=i(Sr);v(ys.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Gh=f(xl),Ir=r(xl,"SPAN",{});var cg=i(Ir);Kh=s(cg,"TFDebertaForMaskedLM"),cg.forEach(t),xl.forEach(t),Vi=f(o),Oe=r(o,"DIV",{class:!0});var $t=i(Oe);v(Ds.$$.fragment,$t),Vh=f($t),Yt=r($t,"P",{});var Ma=i(Yt);Jh=s(Ma,"DeBERTa Model with a "),Or=r(Ma,"CODE",{});var pg=i(Or);Xh=s(pg,"language modeling"),pg.forEach(t),Yh=s(Ma,` head on top.
The DeBERTa model was proposed in `),Es=r(Ma,"A",{href:!0,rel:!0});var hg=i(Es);Zh=s(hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hg.forEach(t),ef=s(Ma,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ma.forEach(t),tf=f($t),Fs=r($t,"P",{});var zl=i(Fs);of=s(zl,"This model is also a "),qs=r(zl,"A",{href:!0,rel:!0});var fg=i(qs);nf=s(fg,"tf.keras.Model"),fg.forEach(t),sf=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),af=f($t),v(Wo.$$.fragment,$t),rf=f($t),Ge=r($t,"DIV",{class:!0});var yt=i(Ge);v(xs.$$.fragment,yt),lf=f(yt),Zt=r(yt,"P",{});var Ca=i(Zt);df=s(Ca,"The "),ma=r(Ca,"A",{href:!0});var mg=i(ma);cf=s(mg,"TFDebertaForMaskedLM"),mg.forEach(t),pf=s(Ca," forward method, overrides the "),Nr=r(Ca,"CODE",{});var ug=i(Nr);hf=s(ug,"__call__"),ug.forEach(t),ff=s(Ca," special method."),Ca.forEach(t),mf=f(yt),v(Ho.$$.fragment,yt),uf=f(yt),v(Qo.$$.fragment,yt),gf=f(yt),v(Uo.$$.fragment,yt),yt.forEach(t),$t.forEach(t),Ji=f(o),eo=r(o,"H2",{class:!0});var jl=i(eo);Go=r(jl,"A",{id:!0,class:!0,href:!0});var gg=i(Go);Wr=r(gg,"SPAN",{});var _g=i(Wr);v(zs.$$.fragment,_g),_g.forEach(t),gg.forEach(t),_f=f(jl),Hr=r(jl,"SPAN",{});var bg=i(Hr);bf=s(bg,"TFDebertaForSequenceClassification"),bg.forEach(t),jl.forEach(t),Xi=f(o),Ce=r(o,"DIV",{class:!0});var it=i(Ce);v(js.$$.fragment,it),kf=f(it),Qr=r(it,"P",{});var kg=i(Qr);Tf=s(kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kg.forEach(t),wf=f(it),Ms=r(it,"P",{});var Ml=i(Ms);vf=s(Ml,"The DeBERTa model was proposed in "),Cs=r(Ml,"A",{href:!0,rel:!0});var Tg=i(Cs);$f=s(Tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tg.forEach(t),yf=s(Ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ml.forEach(t),Df=f(it),Ps=r(it,"P",{});var Cl=i(Ps);Ef=s(Cl,"This model is also a "),Ls=r(Cl,"A",{href:!0,rel:!0});var wg=i(Ls);Ff=s(wg,"tf.keras.Model"),wg.forEach(t),qf=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),xf=f(it),v(Ko.$$.fragment,it),zf=f(it),Ke=r(it,"DIV",{class:!0});var Dt=i(Ke);v(Rs.$$.fragment,Dt),jf=f(Dt),to=r(Dt,"P",{});var Pa=i(to);Mf=s(Pa,"The "),ua=r(Pa,"A",{href:!0});var vg=i(ua);Cf=s(vg,"TFDebertaForSequenceClassification"),vg.forEach(t),Pf=s(Pa," forward method, overrides the "),Ur=r(Pa,"CODE",{});var $g=i(Ur);Lf=s($g,"__call__"),$g.forEach(t),Rf=s(Pa," special method."),Pa.forEach(t),Bf=f(Dt),v(Vo.$$.fragment,Dt),Af=f(Dt),v(Jo.$$.fragment,Dt),Sf=f(Dt),v(Xo.$$.fragment,Dt),Dt.forEach(t),it.forEach(t),Yi=f(o),oo=r(o,"H2",{class:!0});var Pl=i(oo);Yo=r(Pl,"A",{id:!0,class:!0,href:!0});var yg=i(Yo);Gr=r(yg,"SPAN",{});var Dg=i(Gr);v(Bs.$$.fragment,Dg),Dg.forEach(t),yg.forEach(t),If=f(Pl),Kr=r(Pl,"SPAN",{});var Eg=i(Kr);Of=s(Eg,"TFDebertaForTokenClassification"),Eg.forEach(t),Pl.forEach(t),Zi=f(o),Pe=r(o,"DIV",{class:!0});var lt=i(Pe);v(As.$$.fragment,lt),Nf=f(lt),Vr=r(lt,"P",{});var Fg=i(Vr);Wf=s(Fg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fg.forEach(t),Hf=f(lt),Ss=r(lt,"P",{});var Ll=i(Ss);Qf=s(Ll,"The DeBERTa model was proposed in "),Is=r(Ll,"A",{href:!0,rel:!0});var qg=i(Is);Uf=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),Gf=s(Ll,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ll.forEach(t),Kf=f(lt),Os=r(lt,"P",{});var Rl=i(Os);Vf=s(Rl,"This model is also a "),Ns=r(Rl,"A",{href:!0,rel:!0});var xg=i(Ns);Jf=s(xg,"tf.keras.Model"),xg.forEach(t),Xf=s(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),Yf=f(lt),v(Zo.$$.fragment,lt),Zf=f(lt),Ve=r(lt,"DIV",{class:!0});var Et=i(Ve);v(Ws.$$.fragment,Et),em=f(Et),no=r(Et,"P",{});var La=i(no);tm=s(La,"The "),ga=r(La,"A",{href:!0});var zg=i(ga);om=s(zg,"TFDebertaForTokenClassification"),zg.forEach(t),nm=s(La," forward method, overrides the "),Jr=r(La,"CODE",{});var jg=i(Jr);sm=s(jg,"__call__"),jg.forEach(t),am=s(La," special method."),La.forEach(t),rm=f(Et),v(en.$$.fragment,Et),im=f(Et),v(tn.$$.fragment,Et),lm=f(Et),v(on.$$.fragment,Et),Et.forEach(t),lt.forEach(t),el=f(o),so=r(o,"H2",{class:!0});var Bl=i(so);nn=r(Bl,"A",{id:!0,class:!0,href:!0});var Mg=i(nn);Xr=r(Mg,"SPAN",{});var Cg=i(Xr);v(Hs.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),dm=f(Bl),Yr=r(Bl,"SPAN",{});var Pg=i(Yr);cm=s(Pg,"TFDebertaForQuestionAnswering"),Pg.forEach(t),Bl.forEach(t),tl=f(o),Le=r(o,"DIV",{class:!0});var dt=i(Le);v(Qs.$$.fragment,dt),pm=f(dt),ao=r(dt,"P",{});var Ra=i(ao);hm=s(Ra,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=r(Ra,"CODE",{});var Lg=i(Zr);fm=s(Lg,"span start logits"),Lg.forEach(t),mm=s(Ra," and "),ei=r(Ra,"CODE",{});var Rg=i(ei);um=s(Rg,"span end logits"),Rg.forEach(t),gm=s(Ra,")."),Ra.forEach(t),_m=f(dt),Us=r(dt,"P",{});var Al=i(Us);bm=s(Al,"The DeBERTa model was proposed in "),Gs=r(Al,"A",{href:!0,rel:!0});var Bg=i(Gs);km=s(Bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bg.forEach(t),Tm=s(Al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Al.forEach(t),wm=f(dt),Ks=r(dt,"P",{});var Sl=i(Ks);vm=s(Sl,"This model is also a "),Vs=r(Sl,"A",{href:!0,rel:!0});var Ag=i(Vs);$m=s(Ag,"tf.keras.Model"),Ag.forEach(t),ym=s(Sl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sl.forEach(t),Dm=f(dt),v(sn.$$.fragment,dt),Em=f(dt),Je=r(dt,"DIV",{class:!0});var Ft=i(Je);v(Js.$$.fragment,Ft),Fm=f(Ft),ro=r(Ft,"P",{});var Ba=i(ro);qm=s(Ba,"The "),_a=r(Ba,"A",{href:!0});var Sg=i(_a);xm=s(Sg,"TFDebertaForQuestionAnswering"),Sg.forEach(t),zm=s(Ba," forward method, overrides the "),ti=r(Ba,"CODE",{});var Ig=i(ti);jm=s(Ig,"__call__"),Ig.forEach(t),Mm=s(Ba," special method."),Ba.forEach(t),Cm=f(Ft),v(an.$$.fragment,Ft),Pm=f(Ft),v(rn.$$.fragment,Ft),Lm=f(Ft),v(ln.$$.fragment,Ft),Ft.forEach(t),dt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(z_)),u(p,"id","deberta"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#deberta"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(z,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(A,"href","https://github.com/microsoft/DeBERTa"),u(A,"rel","nofollow"),u(P,"href","https://huggingface.co/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://huggingface.co/kamalkraj"),u(oe,"rel","nofollow"),u(V,"href","https://github.com/microsoft/DeBERTa"),u(V,"rel","nofollow"),u(Te,"id","transformers.DebertaConfig"),u(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Te,"href","#transformers.DebertaConfig"),u(pe,"class","relative group"),u(na,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaModel"),u(sa,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaModel"),u(_n,"href","https://huggingface.co/microsoft/deberta-base"),u(_n,"rel","nofollow"),u(aa,"href","/docs/transformers/pr_17997/en/main_classes/configuration#transformers.PretrainedConfig"),u(ra,"href","/docs/transformers/pr_17997/en/main_classes/configuration#transformers.PretrainedConfig"),u(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(co,"id","transformers.DebertaTokenizer"),u(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(co,"href","#transformers.DebertaTokenizer"),u(xt,"class","relative group"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"id","transformers.DebertaTokenizerFast"),u(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fo,"href","#transformers.DebertaTokenizerFast"),u(Mt,"class","relative group"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"id","transformers.DebertaModel"),u(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(uo,"href","#transformers.DebertaModel"),u(Pt,"class","relative group"),u(Pn,"href","https://arxiv.org/abs/2006.03654"),u(Pn,"rel","nofollow"),u(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rn,"rel","nofollow"),u(la,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaModel"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bo,"id","transformers.DebertaPreTrainedModel"),u(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bo,"href","#transformers.DebertaPreTrainedModel"),u(Rt,"class","relative group"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"id","transformers.DebertaForMaskedLM"),u(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ko,"href","#transformers.DebertaForMaskedLM"),u(At,"class","relative group"),u(Nn,"href","https://arxiv.org/abs/2006.03654"),u(Nn,"rel","nofollow"),u(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hn,"rel","nofollow"),u(da,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaForMaskedLM"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"id","transformers.DebertaForSequenceClassification"),u($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($o,"href","#transformers.DebertaForSequenceClassification"),u(Ot,"class","relative group"),u(Vn,"href","https://arxiv.org/abs/2006.03654"),u(Vn,"rel","nofollow"),u(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Xn,"rel","nofollow"),u(ca,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xo,"id","transformers.DebertaForTokenClassification"),u(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xo,"href","#transformers.DebertaForTokenClassification"),u(Wt,"class","relative group"),u(os,"href","https://arxiv.org/abs/2006.03654"),u(os,"rel","nofollow"),u(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ss,"rel","nofollow"),u(pa,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaForTokenClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"id","transformers.DebertaForQuestionAnswering"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.DebertaForQuestionAnswering"),u(Qt,"class","relative group"),u(ds,"href","https://arxiv.org/abs/2006.03654"),u(ds,"rel","nofollow"),u(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ps,"rel","nofollow"),u(ha,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"id","transformers.TFDebertaModel"),u(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bo,"href","#transformers.TFDebertaModel"),u(Kt,"class","relative group"),u(gs,"href","https://arxiv.org/abs/2006.03654"),u(gs,"rel","nofollow"),u(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(bs,"rel","nofollow"),u(fa,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaModel"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"id","transformers.TFDebertaPreTrainedModel"),u(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oo,"href","#transformers.TFDebertaPreTrainedModel"),u(Jt,"class","relative group"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.TFDebertaForMaskedLM"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.TFDebertaForMaskedLM"),u(Xt,"class","relative group"),u(Es,"href","https://arxiv.org/abs/2006.03654"),u(Es,"rel","nofollow"),u(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qs,"rel","nofollow"),u(ma,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.TFDebertaForSequenceClassification"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.TFDebertaForSequenceClassification"),u(eo,"class","relative group"),u(Cs,"href","https://arxiv.org/abs/2006.03654"),u(Cs,"rel","nofollow"),u(Ls,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ls,"rel","nofollow"),u(ua,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yo,"id","transformers.TFDebertaForTokenClassification"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#transformers.TFDebertaForTokenClassification"),u(oo,"class","relative group"),u(Is,"href","https://arxiv.org/abs/2006.03654"),u(Is,"rel","nofollow"),u(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ns,"rel","nofollow"),u(ga,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nn,"id","transformers.TFDebertaForQuestionAnswering"),u(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nn,"href","#transformers.TFDebertaForQuestionAnswering"),u(so,"class","relative group"),u(Gs,"href","https://arxiv.org/abs/2006.03654"),u(Gs,"rel","nofollow"),u(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vs,"rel","nofollow"),u(_a,"href","/docs/transformers/pr_17997/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,l),_(o,g,k),_(o,c,k),e(c,p),e(p,T),$(d,T,null),e(c,m),e(c,x),e(x,he),_(o,X,k),_(o,z,k),e(z,Y),e(Y,S),$(ee,S,null),e(z,fe),e(z,I),e(I,me),_(o,le,k),_(o,W,k),e(W,B),e(W,te),e(te,Z),e(W,j),_(o,C,k),_(o,ne,k),e(ne,H),_(o,de,k),_(o,se,k),e(se,Q),_(o,ce,k),_(o,ae,k),e(ae,M),e(M,ue),e(M,A),e(A,ge),e(M,_e),_(o,O,k),_(o,K,k),e(K,be),e(K,P),e(P,ke),e(K,U),e(K,oe),e(oe,b),e(K,q),e(K,V),e(V,qe),e(K,xe),_(o,R,k),_(o,pe,k),e(pe,Te),e(Te,Ee),$(L,Ee,null),e(pe,G),e(pe,Fe),e(Fe,ze),_(o,N,k),_(o,re,k),$(ve,re,null),e(re,we),e(re,ie),e(ie,Il),e(ie,na),e(na,Ol),e(ie,Nl),e(ie,sa),e(sa,Wl),e(ie,Hl),e(ie,_n),e(_n,Ql),e(ie,Ul),e(re,Gl),e(re,qt),e(qt,Kl),e(qt,aa),e(aa,Vl),e(qt,Jl),e(qt,ra),e(ra,Xl),e(qt,Yl),_(o,qi,k),_(o,xt,k),e(xt,co),e(co,Aa),$(bn,Aa,null),e(xt,Zl),e(xt,Sa),e(Sa,ed),_(o,xi,k),_(o,Me,k),$(kn,Me,null),e(Me,td),e(Me,Ia),e(Ia,od),e(Me,nd),e(Me,ft),$(Tn,ft,null),e(ft,sd),e(ft,Oa),e(Oa,ad),e(ft,rd),e(ft,wn),e(wn,Na),e(Na,id),e(wn,ld),e(wn,Wa),e(Wa,dd),e(Me,cd),e(Me,po),$(vn,po,null),e(po,pd),e(po,zt),e(zt,hd),e(zt,Ha),e(Ha,fd),e(zt,md),e(zt,Qa),e(Qa,ud),e(zt,gd),e(Me,_d),e(Me,ot),$($n,ot,null),e(ot,bd),e(ot,Ua),e(Ua,kd),e(ot,Td),$(ho,ot,null),e(ot,wd),e(ot,jt),e(jt,vd),e(jt,Ga),e(Ga,$d),e(jt,yd),e(jt,Ka),e(Ka,Dd),e(jt,Ed),e(Me,Fd),e(Me,ia),$(yn,ia,null),_(o,zi,k),_(o,Mt,k),e(Mt,fo),e(fo,Va),$(Dn,Va,null),e(Mt,qd),e(Mt,Ja),e(Ja,xd),_(o,ji,k),_(o,Ye,k),$(En,Ye,null),e(Ye,zd),e(Ye,Fn),e(Fn,jd),e(Fn,Xa),e(Xa,Md),e(Fn,Cd),e(Ye,Pd),e(Ye,mt),$(qn,mt,null),e(mt,Ld),e(mt,Ya),e(Ya,Rd),e(mt,Bd),e(mt,xn),e(xn,Za),e(Za,Ad),e(xn,Sd),e(xn,er),e(er,Id),e(Ye,Od),e(Ye,nt),$(zn,nt,null),e(nt,Nd),e(nt,tr),e(tr,Wd),e(nt,Hd),$(mo,nt,null),e(nt,Qd),e(nt,Ct),e(Ct,Ud),e(Ct,or),e(or,Gd),e(Ct,Kd),e(Ct,nr),e(nr,Vd),e(Ct,Jd),_(o,Mi,k),_(o,Pt,k),e(Pt,uo),e(uo,sr),$(jn,sr,null),e(Pt,Xd),e(Pt,ar),e(ar,Yd),_(o,Ci,k),_(o,Ze,k),$(Mn,Ze,null),e(Ze,Zd),e(Ze,Cn),e(Cn,ec),e(Cn,Pn),e(Pn,tc),e(Cn,oc),e(Ze,nc),e(Ze,Ln),e(Ln,sc),e(Ln,Rn),e(Rn,ac),e(Ln,rc),e(Ze,ic),e(Ze,st),$(Bn,st,null),e(st,lc),e(st,Lt),e(Lt,dc),e(Lt,la),e(la,cc),e(Lt,pc),e(Lt,rr),e(rr,hc),e(Lt,fc),e(st,mc),$(go,st,null),e(st,uc),$(_o,st,null),_(o,Pi,k),_(o,Rt,k),e(Rt,bo),e(bo,ir),$(An,ir,null),e(Rt,gc),e(Rt,lr),e(lr,_c),_(o,Li,k),_(o,Bt,k),$(Sn,Bt,null),e(Bt,bc),e(Bt,dr),e(dr,kc),_(o,Ri,k),_(o,At,k),e(At,ko),e(ko,cr),$(In,cr,null),e(At,Tc),e(At,pr),e(pr,wc),_(o,Bi,k),_(o,et,k),$(On,et,null),e(et,vc),e(et,St),e(St,$c),e(St,hr),e(hr,yc),e(St,Dc),e(St,Nn),e(Nn,Ec),e(St,Fc),e(et,qc),e(et,Wn),e(Wn,xc),e(Wn,Hn),e(Hn,zc),e(Wn,jc),e(et,Mc),e(et,He),$(Qn,He,null),e(He,Cc),e(He,It),e(It,Pc),e(It,da),e(da,Lc),e(It,Rc),e(It,fr),e(fr,Bc),e(It,Ac),e(He,Sc),$(To,He,null),e(He,Ic),$(wo,He,null),e(He,Oc),$(vo,He,null),_(o,Ai,k),_(o,Ot,k),e(Ot,$o),e($o,mr),$(Un,mr,null),e(Ot,Nc),e(Ot,ur),e(ur,Wc),_(o,Si,k),_(o,Be,k),$(Gn,Be,null),e(Be,Hc),e(Be,gr),e(gr,Qc),e(Be,Uc),e(Be,Kn),e(Kn,Gc),e(Kn,Vn),e(Vn,Kc),e(Kn,Vc),e(Be,Jc),e(Be,Jn),e(Jn,Xc),e(Jn,Xn),e(Xn,Yc),e(Jn,Zc),e(Be,ep),e(Be,je),$(Yn,je,null),e(je,tp),e(je,Nt),e(Nt,op),e(Nt,ca),e(ca,np),e(Nt,sp),e(Nt,_r),e(_r,ap),e(Nt,rp),e(je,ip),$(yo,je,null),e(je,lp),$(Do,je,null),e(je,dp),$(Eo,je,null),e(je,cp),$(Fo,je,null),e(je,pp),$(qo,je,null),_(o,Ii,k),_(o,Wt,k),e(Wt,xo),e(xo,br),$(Zn,br,null),e(Wt,hp),e(Wt,kr),e(kr,fp),_(o,Oi,k),_(o,Ae,k),$(es,Ae,null),e(Ae,mp),e(Ae,Tr),e(Tr,up),e(Ae,gp),e(Ae,ts),e(ts,_p),e(ts,os),e(os,bp),e(ts,kp),e(Ae,Tp),e(Ae,ns),e(ns,wp),e(ns,ss),e(ss,vp),e(ns,$p),e(Ae,yp),e(Ae,Qe),$(as,Qe,null),e(Qe,Dp),e(Qe,Ht),e(Ht,Ep),e(Ht,pa),e(pa,Fp),e(Ht,qp),e(Ht,wr),e(wr,xp),e(Ht,zp),e(Qe,jp),$(zo,Qe,null),e(Qe,Mp),$(jo,Qe,null),e(Qe,Cp),$(Mo,Qe,null),_(o,Ni,k),_(o,Qt,k),e(Qt,Co),e(Co,vr),$(rs,vr,null),e(Qt,Pp),e(Qt,$r),e($r,Lp),_(o,Wi,k),_(o,Se,k),$(is,Se,null),e(Se,Rp),e(Se,Ut),e(Ut,Bp),e(Ut,yr),e(yr,Ap),e(Ut,Sp),e(Ut,Dr),e(Dr,Ip),e(Ut,Op),e(Se,Np),e(Se,ls),e(ls,Wp),e(ls,ds),e(ds,Hp),e(ls,Qp),e(Se,Up),e(Se,cs),e(cs,Gp),e(cs,ps),e(ps,Kp),e(cs,Vp),e(Se,Jp),e(Se,Ue),$(hs,Ue,null),e(Ue,Xp),e(Ue,Gt),e(Gt,Yp),e(Gt,ha),e(ha,Zp),e(Gt,eh),e(Gt,Er),e(Er,th),e(Gt,oh),e(Ue,nh),$(Po,Ue,null),e(Ue,sh),$(Lo,Ue,null),e(Ue,ah),$(Ro,Ue,null),_(o,Hi,k),_(o,Kt,k),e(Kt,Bo),e(Bo,Fr),$(fs,Fr,null),e(Kt,rh),e(Kt,qr),e(qr,ih),_(o,Qi,k),_(o,Ie,k),$(ms,Ie,null),e(Ie,lh),e(Ie,us),e(us,dh),e(us,gs),e(gs,ch),e(us,ph),e(Ie,hh),e(Ie,_s),e(_s,fh),e(_s,bs),e(bs,mh),e(_s,uh),e(Ie,gh),$(Ao,Ie,null),e(Ie,_h),e(Ie,at),$(ks,at,null),e(at,bh),e(at,Vt),e(Vt,kh),e(Vt,fa),e(fa,Th),e(Vt,wh),e(Vt,xr),e(xr,vh),e(Vt,$h),e(at,yh),$(So,at,null),e(at,Dh),$(Io,at,null),_(o,Ui,k),_(o,Jt,k),e(Jt,Oo),e(Oo,zr),$(Ts,zr,null),e(Jt,Eh),e(Jt,jr),e(jr,Fh),_(o,Gi,k),_(o,ct,k),$(ws,ct,null),e(ct,qh),e(ct,Mr),e(Mr,xh),e(ct,zh),e(ct,rt),$(vs,rt,null),e(rt,jh),e(rt,Cr),e(Cr,Mh),e(rt,Ch),e(rt,$s),e($s,Ph),e($s,Pr),e(Pr,Lh),e($s,Rh),e(rt,Bh),e(rt,tt),e(tt,Ah),e(tt,Lr),e(Lr,Sh),e(tt,Ih),e(tt,Rr),e(Rr,Oh),e(tt,Nh),e(tt,Br),e(Br,Wh),e(tt,Hh),e(tt,Ar),e(Ar,Qh),e(tt,Uh),_(o,Ki,k),_(o,Xt,k),e(Xt,No),e(No,Sr),$(ys,Sr,null),e(Xt,Gh),e(Xt,Ir),e(Ir,Kh),_(o,Vi,k),_(o,Oe,k),$(Ds,Oe,null),e(Oe,Vh),e(Oe,Yt),e(Yt,Jh),e(Yt,Or),e(Or,Xh),e(Yt,Yh),e(Yt,Es),e(Es,Zh),e(Yt,ef),e(Oe,tf),e(Oe,Fs),e(Fs,of),e(Fs,qs),e(qs,nf),e(Fs,sf),e(Oe,af),$(Wo,Oe,null),e(Oe,rf),e(Oe,Ge),$(xs,Ge,null),e(Ge,lf),e(Ge,Zt),e(Zt,df),e(Zt,ma),e(ma,cf),e(Zt,pf),e(Zt,Nr),e(Nr,hf),e(Zt,ff),e(Ge,mf),$(Ho,Ge,null),e(Ge,uf),$(Qo,Ge,null),e(Ge,gf),$(Uo,Ge,null),_(o,Ji,k),_(o,eo,k),e(eo,Go),e(Go,Wr),$(zs,Wr,null),e(eo,_f),e(eo,Hr),e(Hr,bf),_(o,Xi,k),_(o,Ce,k),$(js,Ce,null),e(Ce,kf),e(Ce,Qr),e(Qr,Tf),e(Ce,wf),e(Ce,Ms),e(Ms,vf),e(Ms,Cs),e(Cs,$f),e(Ms,yf),e(Ce,Df),e(Ce,Ps),e(Ps,Ef),e(Ps,Ls),e(Ls,Ff),e(Ps,qf),e(Ce,xf),$(Ko,Ce,null),e(Ce,zf),e(Ce,Ke),$(Rs,Ke,null),e(Ke,jf),e(Ke,to),e(to,Mf),e(to,ua),e(ua,Cf),e(to,Pf),e(to,Ur),e(Ur,Lf),e(to,Rf),e(Ke,Bf),$(Vo,Ke,null),e(Ke,Af),$(Jo,Ke,null),e(Ke,Sf),$(Xo,Ke,null),_(o,Yi,k),_(o,oo,k),e(oo,Yo),e(Yo,Gr),$(Bs,Gr,null),e(oo,If),e(oo,Kr),e(Kr,Of),_(o,Zi,k),_(o,Pe,k),$(As,Pe,null),e(Pe,Nf),e(Pe,Vr),e(Vr,Wf),e(Pe,Hf),e(Pe,Ss),e(Ss,Qf),e(Ss,Is),e(Is,Uf),e(Ss,Gf),e(Pe,Kf),e(Pe,Os),e(Os,Vf),e(Os,Ns),e(Ns,Jf),e(Os,Xf),e(Pe,Yf),$(Zo,Pe,null),e(Pe,Zf),e(Pe,Ve),$(Ws,Ve,null),e(Ve,em),e(Ve,no),e(no,tm),e(no,ga),e(ga,om),e(no,nm),e(no,Jr),e(Jr,sm),e(no,am),e(Ve,rm),$(en,Ve,null),e(Ve,im),$(tn,Ve,null),e(Ve,lm),$(on,Ve,null),_(o,el,k),_(o,so,k),e(so,nn),e(nn,Xr),$(Hs,Xr,null),e(so,dm),e(so,Yr),e(Yr,cm),_(o,tl,k),_(o,Le,k),$(Qs,Le,null),e(Le,pm),e(Le,ao),e(ao,hm),e(ao,Zr),e(Zr,fm),e(ao,mm),e(ao,ei),e(ei,um),e(ao,gm),e(Le,_m),e(Le,Us),e(Us,bm),e(Us,Gs),e(Gs,km),e(Us,Tm),e(Le,wm),e(Le,Ks),e(Ks,vm),e(Ks,Vs),e(Vs,$m),e(Ks,ym),e(Le,Dm),$(sn,Le,null),e(Le,Em),e(Le,Je),$(Js,Je,null),e(Je,Fm),e(Je,ro),e(ro,qm),e(ro,_a),e(_a,xm),e(ro,zm),e(ro,ti),e(ti,jm),e(ro,Mm),e(Je,Cm),$(an,Je,null),e(Je,Pm),$(rn,Je,null),e(Je,Lm),$(ln,Je,null),ol=!0},p(o,[k]){const Xs={};k&2&&(Xs.$$scope={dirty:k,ctx:o}),ho.$set(Xs);const oi={};k&2&&(oi.$$scope={dirty:k,ctx:o}),mo.$set(oi);const ni={};k&2&&(ni.$$scope={dirty:k,ctx:o}),go.$set(ni);const si={};k&2&&(si.$$scope={dirty:k,ctx:o}),_o.$set(si);const Ys={};k&2&&(Ys.$$scope={dirty:k,ctx:o}),To.$set(Ys);const ai={};k&2&&(ai.$$scope={dirty:k,ctx:o}),wo.$set(ai);const ri={};k&2&&(ri.$$scope={dirty:k,ctx:o}),vo.$set(ri);const ii={};k&2&&(ii.$$scope={dirty:k,ctx:o}),yo.$set(ii);const Zs={};k&2&&(Zs.$$scope={dirty:k,ctx:o}),Do.$set(Zs);const li={};k&2&&(li.$$scope={dirty:k,ctx:o}),Eo.$set(li);const di={};k&2&&(di.$$scope={dirty:k,ctx:o}),Fo.$set(di);const ci={};k&2&&(ci.$$scope={dirty:k,ctx:o}),qo.$set(ci);const pi={};k&2&&(pi.$$scope={dirty:k,ctx:o}),zo.$set(pi);const ea={};k&2&&(ea.$$scope={dirty:k,ctx:o}),jo.$set(ea);const hi={};k&2&&(hi.$$scope={dirty:k,ctx:o}),Mo.$set(hi);const pt={};k&2&&(pt.$$scope={dirty:k,ctx:o}),Po.$set(pt);const fi={};k&2&&(fi.$$scope={dirty:k,ctx:o}),Lo.$set(fi);const mi={};k&2&&(mi.$$scope={dirty:k,ctx:o}),Ro.$set(mi);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:o}),Ao.$set(ui);const ta={};k&2&&(ta.$$scope={dirty:k,ctx:o}),So.$set(ta);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:o}),Io.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:o}),Wo.$set(_i);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:o}),Ho.$set(bi);const io={};k&2&&(io.$$scope={dirty:k,ctx:o}),Qo.$set(io);const ht={};k&2&&(ht.$$scope={dirty:k,ctx:o}),Uo.$set(ht);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:o}),Ko.$set(ki);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:o}),Vo.$set(Ti);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:o}),Jo.$set(wi);const lo={};k&2&&(lo.$$scope={dirty:k,ctx:o}),Xo.$set(lo);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:o}),Zo.$set(vi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:o}),en.$set($i);const oa={};k&2&&(oa.$$scope={dirty:k,ctx:o}),tn.$set(oa);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:o}),on.$set(yi);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:o}),sn.$set(Di);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),an.$set(Ei);const Ne={};k&2&&(Ne.$$scope={dirty:k,ctx:o}),rn.$set(Ne);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),ln.$set(Fi)},i(o){ol||(y(d.$$.fragment,o),y(ee.$$.fragment,o),y(L.$$.fragment,o),y(ve.$$.fragment,o),y(bn.$$.fragment,o),y(kn.$$.fragment,o),y(Tn.$$.fragment,o),y(vn.$$.fragment,o),y($n.$$.fragment,o),y(ho.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y(En.$$.fragment,o),y(qn.$$.fragment,o),y(zn.$$.fragment,o),y(mo.$$.fragment,o),y(jn.$$.fragment,o),y(Mn.$$.fragment,o),y(Bn.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(An.$$.fragment,o),y(Sn.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(Qn.$$.fragment,o),y(To.$$.fragment,o),y(wo.$$.fragment,o),y(vo.$$.fragment,o),y(Un.$$.fragment,o),y(Gn.$$.fragment,o),y(Yn.$$.fragment,o),y(yo.$$.fragment,o),y(Do.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(qo.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(as.$$.fragment,o),y(zo.$$.fragment,o),y(jo.$$.fragment,o),y(Mo.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(hs.$$.fragment,o),y(Po.$$.fragment,o),y(Lo.$$.fragment,o),y(Ro.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(Ao.$$.fragment,o),y(ks.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y(vs.$$.fragment,o),y(ys.$$.fragment,o),y(Ds.$$.fragment,o),y(Wo.$$.fragment,o),y(xs.$$.fragment,o),y(Ho.$$.fragment,o),y(Qo.$$.fragment,o),y(Uo.$$.fragment,o),y(zs.$$.fragment,o),y(js.$$.fragment,o),y(Ko.$$.fragment,o),y(Rs.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Bs.$$.fragment,o),y(As.$$.fragment,o),y(Zo.$$.fragment,o),y(Ws.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(Hs.$$.fragment,o),y(Qs.$$.fragment,o),y(sn.$$.fragment,o),y(Js.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),ol=!0)},o(o){D(d.$$.fragment,o),D(ee.$$.fragment,o),D(L.$$.fragment,o),D(ve.$$.fragment,o),D(bn.$$.fragment,o),D(kn.$$.fragment,o),D(Tn.$$.fragment,o),D(vn.$$.fragment,o),D($n.$$.fragment,o),D(ho.$$.fragment,o),D(yn.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D(qn.$$.fragment,o),D(zn.$$.fragment,o),D(mo.$$.fragment,o),D(jn.$$.fragment,o),D(Mn.$$.fragment,o),D(Bn.$$.fragment,o),D(go.$$.fragment,o),D(_o.$$.fragment,o),D(An.$$.fragment,o),D(Sn.$$.fragment,o),D(In.$$.fragment,o),D(On.$$.fragment,o),D(Qn.$$.fragment,o),D(To.$$.fragment,o),D(wo.$$.fragment,o),D(vo.$$.fragment,o),D(Un.$$.fragment,o),D(Gn.$$.fragment,o),D(Yn.$$.fragment,o),D(yo.$$.fragment,o),D(Do.$$.fragment,o),D(Eo.$$.fragment,o),D(Fo.$$.fragment,o),D(qo.$$.fragment,o),D(Zn.$$.fragment,o),D(es.$$.fragment,o),D(as.$$.fragment,o),D(zo.$$.fragment,o),D(jo.$$.fragment,o),D(Mo.$$.fragment,o),D(rs.$$.fragment,o),D(is.$$.fragment,o),D(hs.$$.fragment,o),D(Po.$$.fragment,o),D(Lo.$$.fragment,o),D(Ro.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(Ao.$$.fragment,o),D(ks.$$.fragment,o),D(So.$$.fragment,o),D(Io.$$.fragment,o),D(Ts.$$.fragment,o),D(ws.$$.fragment,o),D(vs.$$.fragment,o),D(ys.$$.fragment,o),D(Ds.$$.fragment,o),D(Wo.$$.fragment,o),D(xs.$$.fragment,o),D(Ho.$$.fragment,o),D(Qo.$$.fragment,o),D(Uo.$$.fragment,o),D(zs.$$.fragment,o),D(js.$$.fragment,o),D(Ko.$$.fragment,o),D(Rs.$$.fragment,o),D(Vo.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Bs.$$.fragment,o),D(As.$$.fragment,o),D(Zo.$$.fragment,o),D(Ws.$$.fragment,o),D(en.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(Hs.$$.fragment,o),D(Qs.$$.fragment,o),D(sn.$$.fragment,o),D(Js.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),ol=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(X),o&&t(z),E(ee),o&&t(le),o&&t(W),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(O),o&&t(K),o&&t(R),o&&t(pe),E(L),o&&t(N),o&&t(re),E(ve),o&&t(qi),o&&t(xt),E(bn),o&&t(xi),o&&t(Me),E(kn),E(Tn),E(vn),E($n),E(ho),E(yn),o&&t(zi),o&&t(Mt),E(Dn),o&&t(ji),o&&t(Ye),E(En),E(qn),E(zn),E(mo),o&&t(Mi),o&&t(Pt),E(jn),o&&t(Ci),o&&t(Ze),E(Mn),E(Bn),E(go),E(_o),o&&t(Pi),o&&t(Rt),E(An),o&&t(Li),o&&t(Bt),E(Sn),o&&t(Ri),o&&t(At),E(In),o&&t(Bi),o&&t(et),E(On),E(Qn),E(To),E(wo),E(vo),o&&t(Ai),o&&t(Ot),E(Un),o&&t(Si),o&&t(Be),E(Gn),E(Yn),E(yo),E(Do),E(Eo),E(Fo),E(qo),o&&t(Ii),o&&t(Wt),E(Zn),o&&t(Oi),o&&t(Ae),E(es),E(as),E(zo),E(jo),E(Mo),o&&t(Ni),o&&t(Qt),E(rs),o&&t(Wi),o&&t(Se),E(is),E(hs),E(Po),E(Lo),E(Ro),o&&t(Hi),o&&t(Kt),E(fs),o&&t(Qi),o&&t(Ie),E(ms),E(Ao),E(ks),E(So),E(Io),o&&t(Ui),o&&t(Jt),E(Ts),o&&t(Gi),o&&t(ct),E(ws),E(vs),o&&t(Ki),o&&t(Xt),E(ys),o&&t(Vi),o&&t(Oe),E(Ds),E(Wo),E(xs),E(Ho),E(Qo),E(Uo),o&&t(Ji),o&&t(eo),E(zs),o&&t(Xi),o&&t(Ce),E(js),E(Ko),E(Rs),E(Vo),E(Jo),E(Xo),o&&t(Yi),o&&t(oo),E(Bs),o&&t(Zi),o&&t(Pe),E(As),E(Zo),E(Ws),E(en),E(tn),E(on),o&&t(el),o&&t(so),E(Hs),o&&t(tl),o&&t(Le),E(Qs),E(sn),E(Js),E(an),E(rn),E(ln)}}}const z_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function j_(F){return Qg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class A_ extends Og{constructor(l){super();Ng(this,l,j_,x_,Wg,{})}}export{A_ as default,z_ as metadata};
