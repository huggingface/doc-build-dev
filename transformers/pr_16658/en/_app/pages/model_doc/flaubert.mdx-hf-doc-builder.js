import{S as K_,i as Y_,s as G_,e as a,k as h,w,t as n,M as J_,c as r,d as t,m as u,a as i,x as y,h as s,b as _,G as e,g as b,y as v,q as F,o as $,B as M,v as Z_,L as ye}from"../../chunks/vendor-hf-doc-builder.js";import{T as qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as de}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as we}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function eb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function tb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ob(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function nb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("The capital of France is <special1>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <special1>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;special1&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;special1&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function sb(x){let d,g;return d=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function ab(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function rb(x){let d,g,c,p,k;return p=new ve({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ib(x){let d,g;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function lb(x){let d,g,c,p,k;return p=new ve({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function db(x){let d,g;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained(
    "xlm-mlm-en-2048", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function cb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function pb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function hb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function ub(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function mb(x){let d,g;return d=new ve({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function fb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function gb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function _b(x){let d,g;return d=new ve({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function bb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function kb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnswering.from_pretrained("xlm-mlm-en-2048")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Tb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),R=h(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),B=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),O=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var Fe=i(k);l=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=u(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),K=u(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),R=u(f),A=r(f,"P",{});var ae=i(A);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Y=u(f),q=r(f,"UL",{});var N=i(q);j=r(N,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),B=r(W,"CODE",{});var Me=i(B);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(N),L=r(N,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=u(N),O=r(N,"LI",{});var te=i(O);G=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(te,"CODE",{});var ze=i(S);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),N.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,C),e(C,ce),b(f,K,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,he),e(z,re),b(f,R,E),b(f,A,E),e(A,ee),b(f,Y,E),b(f,q,E),e(q,j),e(j,oe),e(j,B),e(B,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,O),e(O,G),e(O,S),e(S,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(R),f&&t(A),f&&t(Y),f&&t(q)}}}function wb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function yb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function vb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),R=h(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),B=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),O=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var Fe=i(k);l=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=u(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),K=u(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),R=u(f),A=r(f,"P",{});var ae=i(A);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Y=u(f),q=r(f,"UL",{});var N=i(q);j=r(N,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),B=r(W,"CODE",{});var Me=i(B);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(N),L=r(N,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=u(N),O=r(N,"LI",{});var te=i(O);G=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(te,"CODE",{});var ze=i(S);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),N.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,C),e(C,ce),b(f,K,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,he),e(z,re),b(f,R,E),b(f,A,E),e(A,ee),b(f,Y,E),b(f,q,E),e(q,j),e(j,oe),e(j,B),e(B,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,O),e(O,G),e(O,S),e(S,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(R),f&&t(A),f&&t(Y),f&&t(q)}}}function Fb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function $b(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertWithLMHeadModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Mb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),R=h(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),B=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),O=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var Fe=i(k);l=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=u(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),K=u(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),R=u(f),A=r(f,"P",{});var ae=i(A);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Y=u(f),q=r(f,"UL",{});var N=i(q);j=r(N,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),B=r(W,"CODE",{});var Me=i(B);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(N),L=r(N,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=u(N),O=r(N,"LI",{});var te=i(O);G=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(te,"CODE",{});var ze=i(S);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),N.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,C),e(C,ce),b(f,K,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,he),e(z,re),b(f,R,E),b(f,A,E),e(A,ee),b(f,Y,E),b(f,q,E),e(q,j),e(j,oe),e(j,B),e(B,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,O),e(O,G),e(O,S),e(S,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(R),f&&t(A),f&&t(Y),f&&t(q)}}}function xb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Eb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Cb(x){let d,g;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function zb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),R=h(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),B=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),O=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var Fe=i(k);l=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=u(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),K=u(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),R=u(f),A=r(f,"P",{});var ae=i(A);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Y=u(f),q=r(f,"UL",{});var N=i(q);j=r(N,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),B=r(W,"CODE",{});var Me=i(B);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(N),L=r(N,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=u(N),O=r(N,"LI",{});var te=i(O);G=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(te,"CODE",{});var ze=i(S);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),N.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,C),e(C,ce),b(f,K,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,he),e(z,re),b(f,R,E),b(f,A,E),e(A,ee),b(f,Y,E),b(f,q,E),e(q,j),e(j,oe),e(j,B),e(B,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,O),e(O,G),e(O,S),e(S,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(R),f&&t(A),f&&t(Y),f&&t(q)}}}function qb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Lb(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function jb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),R=h(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),B=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),O=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var Fe=i(k);l=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=u(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),K=u(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),R=u(f),A=r(f,"P",{});var ae=i(A);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Y=u(f),q=r(f,"UL",{});var N=i(q);j=r(N,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),B=r(W,"CODE",{});var Me=i(B);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(N),L=r(N,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=u(N),O=r(N,"LI",{});var te=i(O);G=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(te,"CODE",{});var ze=i(S);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),N.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,C),e(C,ce),b(f,K,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,he),e(z,re),b(f,R,E),b(f,A,E),e(A,ee),b(f,Y,E),b(f,q,E),e(q,j),e(j,oe),e(j,B),e(B,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,O),e(O,G),e(O,S),e(S,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(R),f&&t(A),f&&t(Y),f&&t(q)}}}function Pb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Ob(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Ab(x){let d,g;return d=new ve({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Nb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),R=h(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),B=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),O=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var Fe=i(k);l=s(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=u(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),K=u(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),R=u(f),A=r(f,"P",{});var ae=i(A);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),Y=u(f),q=r(f,"UL",{});var N=i(q);j=r(N,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),B=r(W,"CODE",{});var Me=i(B);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(N),L=r(N,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=u(N),O=r(N,"LI",{});var te=i(O);G=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(te,"CODE",{});var ze=i(S);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),N.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,C),e(C,ce),b(f,K,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,he),e(z,re),b(f,R,E),b(f,A,E),e(A,ee),b(f,Y,E),b(f,q,E),e(q,j),e(j,oe),e(j,B),e(B,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,O),e(O,G),e(O,S),e(S,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(R),f&&t(A),f&&t(Y),f&&t(q)}}}function Sb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Db(x){let d,g,c,p,k;return p=new ve({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),y(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),v(p,l,m),k=!0},p:ye,i(l){k||(F(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Ib(x){let d,g;return d=new ve({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){v(d,c,p),g=!0},p:ye,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Wb(x){let d,g,c,p,k,l,m,C,ce,K,z,J,H,Z,pe,Q,he,re,R,A,ee,Y,q,j,oe,B,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,O,G,S,se,f,E,V,Fe,Te,P,ke,$e,ae,N,W,Me,xe,X,Ee,Ce,te,ze,cd,pd,Lt,hd,ra,ud,md,ia,fd,gd,Xi,jt,uo,nr,wn,_d,sr,bd,Hi,et,yn,kd,ar,Td,wd,kt,rr,yd,vd,ir,Fd,$d,Tt,Md,lr,xd,Ed,dr,Cd,zd,cr,qd,Ld,jd,vn,Pd,pr,Od,Ad,Nd,Fn,Sd,la,Dd,Id,Qi,Pt,mo,hr,$n,Wd,ur,Xd,Ui,Be,Mn,Hd,mr,Qd,Ud,xn,Bd,da,Rd,Vd,Kd,En,Yd,Cn,Gd,Jd,Zd,tt,zn,ec,Ot,tc,ca,oc,nc,fr,sc,ac,rc,fo,ic,go,Bi,At,_o,gr,qn,lc,_r,dc,Ri,je,Ln,cc,br,pc,hc,jn,uc,pa,mc,fc,gc,Pn,_c,On,bc,kc,Tc,An,wc,ha,yc,vc,Fc,Re,Nn,$c,Nt,Mc,ua,xc,Ec,kr,Cc,zc,qc,bo,Lc,ko,jc,To,Vi,St,wo,Tr,Sn,Pc,wr,Oc,Ki,Pe,Dn,Ac,yr,Nc,Sc,In,Dc,ma,Ic,Wc,Xc,Wn,Hc,Xn,Qc,Uc,Bc,Hn,Rc,fa,Vc,Kc,Yc,Le,Qn,Gc,Dt,Jc,ga,Zc,ep,vr,tp,op,np,yo,sp,vo,ap,Fo,rp,$o,ip,Mo,Yi,It,xo,Fr,Un,lp,$r,dp,Gi,Oe,Bn,cp,Mr,pp,hp,Rn,up,_a,mp,fp,gp,Vn,_p,Kn,bp,kp,Tp,Yn,wp,ba,yp,vp,Fp,ot,Gn,$p,Wt,Mp,ka,xp,Ep,xr,Cp,zp,qp,Eo,Lp,Co,Ji,Xt,zo,Er,Jn,jp,Cr,Pp,Zi,Ae,Zn,Op,zr,Ap,Np,es,Sp,Ta,Dp,Ip,Wp,ts,Xp,os,Hp,Qp,Up,ns,Bp,wa,Rp,Vp,Kp,Ve,ss,Yp,Ht,Gp,ya,Jp,Zp,qr,eh,th,oh,qo,nh,Lo,sh,jo,el,Qt,Po,Lr,as,ah,jr,rh,tl,Ne,rs,ih,Ut,lh,Pr,dh,ch,Or,ph,hh,uh,is,mh,va,fh,gh,_h,ls,bh,ds,kh,Th,wh,cs,yh,Fa,vh,Fh,$h,Ke,ps,Mh,Bt,xh,$a,Eh,Ch,Ar,zh,qh,Lh,Oo,jh,Ao,Ph,No,ol,Rt,So,Nr,hs,Oh,Sr,Ah,nl,Se,us,Nh,Vt,Sh,Dr,Dh,Ih,Ir,Wh,Xh,Hh,ms,Qh,Ma,Uh,Bh,Rh,fs,Vh,gs,Kh,Yh,Gh,_s,Jh,xa,Zh,eu,tu,nt,bs,ou,Kt,nu,Ea,su,au,Wr,ru,iu,lu,Do,du,Io,sl,Yt,Wo,Xr,ks,cu,Hr,pu,al,De,Ts,hu,Qr,uu,mu,ws,fu,Ca,gu,_u,bu,ys,ku,vs,Tu,wu,yu,Xo,vu,st,Fs,Fu,Gt,$u,za,Mu,xu,Ur,Eu,Cu,zu,Ho,qu,Qo,rl,Jt,Uo,Br,$s,Lu,Rr,ju,il,Ie,Ms,Pu,Vr,Ou,Au,xs,Nu,qa,Su,Du,Iu,Es,Wu,Cs,Xu,Hu,Qu,Bo,Uu,at,zs,Bu,Zt,Ru,La,Vu,Ku,Kr,Yu,Gu,Ju,Ro,Zu,Vo,ll,eo,Ko,Yr,qs,em,Gr,tm,dl,We,Ls,om,Jr,nm,sm,js,am,ja,rm,im,lm,Ps,dm,Os,cm,pm,hm,Yo,um,Ye,As,mm,to,fm,Pa,gm,_m,Zr,bm,km,Tm,Go,wm,Jo,ym,Zo,cl,oo,en,ei,Ns,vm,ti,Fm,pl,Xe,Ss,$m,oi,Mm,xm,Ds,Em,Oa,Cm,zm,qm,Is,Lm,Ws,jm,Pm,Om,tn,Am,rt,Xs,Nm,no,Sm,Aa,Dm,Im,ni,Wm,Xm,Hm,on,Qm,nn,hl,so,sn,si,Hs,Um,ai,Bm,ul,He,Qs,Rm,ri,Vm,Km,Us,Ym,Na,Gm,Jm,Zm,Bs,ef,Rs,tf,of,nf,an,sf,Ge,Vs,af,ao,rf,Sa,lf,df,ii,cf,pf,hf,rn,uf,ln,mf,dn,ml,ro,cn,li,Ks,ff,di,gf,fl,Qe,Ys,_f,io,bf,ci,kf,Tf,pi,wf,yf,vf,Gs,Ff,Da,$f,Mf,xf,Js,Ef,Zs,Cf,zf,qf,pn,Lf,Je,ea,jf,lo,Pf,Ia,Of,Af,hi,Nf,Sf,Df,hn,If,un,Wf,mn,gl;return l=new Ue({}),Z=new Ue({}),f=new Ue({}),ke=new de({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"layerdrop",val:" = 0.0"},{name:"pre_norm",val:" = False"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"emb_dim"},{anchor:"transformers.FlaubertConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.FlaubertConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.FlaubertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.FlaubertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention mechanism`,name:"attention_dropout"},{anchor:"transformers.FlaubertConfig.gelu_activation",description:`<strong>gelu_activation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a <em>gelu</em> activation instead of <em>relu</em>.`,name:"gelu_activation"},{anchor:"transformers.FlaubertConfig.sinusoidal_embeddings",description:`<strong>sinusoidal_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sinusoidal positional embeddings instead of absolute positional embeddings.`,name:"sinusoidal_embeddings"},{anchor:"transformers.FlaubertConfig.causal",description:`<strong>causal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should behave in a causal manner. Causal models use a triangular attention mask in
order to only attend to the left-side context instead if a bidirectional context.`,name:"causal"},{anchor:"transformers.FlaubertConfig.asm",description:`<strong>asm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use an adaptive log softmax projection layer instead of a linear layer for the prediction
layer.`,name:"asm"},{anchor:"transformers.FlaubertConfig.n_langs",description:`<strong>n_langs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of languages the model handles. Set to 1 for monolingual models.`,name:"n_langs"},{anchor:"transformers.FlaubertConfig.use_lang_emb",description:`<strong>use_lang_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use language embeddings. Some models use additional language embeddings, see <a href="http://huggingface.co/transformers/multilingual.html#xlm-language-embeddings" rel="nofollow">the multilingual
models page</a> for information
on how to use them.`,name:"use_lang_emb"},{anchor:"transformers.FlaubertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FlaubertConfig.embed_init_std",description:`<strong>embed_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 2048^-0.5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing the embedding matrices.`,name:"embed_init_std"},{anchor:"transformers.FlaubertConfig.init_std",description:`<strong>init_std</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices except the
embedding matrices.`,name:"init_std"},{anchor:"transformers.FlaubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FlaubertConfig.bos_index",description:`<strong>bos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the beginning of sentence token in the vocabulary.`,name:"bos_index"},{anchor:"transformers.FlaubertConfig.eos_index",description:`<strong>eos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The index of the end of sentence token in the vocabulary.`,name:"eos_index"},{anchor:"transformers.FlaubertConfig.pad_index",description:`<strong>pad_index</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The index of the padding token in the vocabulary.`,name:"pad_index"},{anchor:"transformers.FlaubertConfig.unk_index",description:`<strong>unk_index</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The index of the unknown token in the vocabulary.`,name:"unk_index"},{anchor:"transformers.FlaubertConfig.mask_index",description:`<strong>mask_index</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
The index of the masking token in the vocabulary.`,name:"mask_index"},{anchor:"transformers.FlaubertConfig.is_encoder(bool,",description:`<strong>is_encoder(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the initialized model should be a transformer encoder or decoder as seen in Vaswani et al.`,name:"is_encoder(bool,"},{anchor:"transformers.FlaubertConfig.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201C;first&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.FlaubertConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.FlaubertConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.FlaubertConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.FlaubertConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.FlaubertConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.FlaubertConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.FlaubertConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Model agnostic parameter to identify masked tokens when generating text in an MLM context.`,name:"mask_token_id"},{anchor:"transformers.FlaubertConfig.lang_id",description:`<strong>lang_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/configuration_flaubert.py#L35"}}),wn=new Ue({}),yn=new de({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"do_lowercase",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/tokenization_flaubert.py#L91"}}),$n=new Ue({}),Mn=new de({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L134"}}),zn=new de({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new qe({props:{$$slots:{default:[eb]},$$scope:{ctx:x}}}),go=new we({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[tb]},$$scope:{ctx:x}}}),qn=new Ue({}),Ln=new de({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L326"}}),Nn=new de({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new qe({props:{$$slots:{default:[ob]},$$scope:{ctx:x}}}),ko=new we({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[nb]},$$scope:{ctx:x}}}),To=new we({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[sb]},$$scope:{ctx:x}}}),Sn=new Ue({}),Dn=new de({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L348"}}),Qn=new de({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new qe({props:{$$slots:{default:[ab]},$$scope:{ctx:x}}}),vo=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:x}}}),Fo=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:x}}}),$o=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[lb]},$$scope:{ctx:x}}}),Mo=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[db]},$$scope:{ctx:x}}}),Un=new Ue({}),Bn=new de({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L436"}}),Gn=new de({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new qe({props:{$$slots:{default:[cb]},$$scope:{ctx:x}}}),Co=new we({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[pb]},$$scope:{ctx:x}}}),Jn=new Ue({}),Zn=new de({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L370"}}),ss=new de({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new qe({props:{$$slots:{default:[hb]},$$scope:{ctx:x}}}),Lo=new we({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[ub]},$$scope:{ctx:x}}}),jo=new we({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[mb]},$$scope:{ctx:x}}}),as=new Ue({}),rs=new de({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L392"}}),ps=new de({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new qe({props:{$$slots:{default:[fb]},$$scope:{ctx:x}}}),Ao=new we({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[gb]},$$scope:{ctx:x}}}),No=new we({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[_b]},$$scope:{ctx:x}}}),hs=new Ue({}),us=new de({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_flaubert.py#L414"}}),bs=new de({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.</p>
</li>
<li>
<p><strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).</p>
</li>
<li>
<p><strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).</p>
</li>
<li>
<p><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the <code>is_impossible</code> label of the answers.</p>
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
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new qe({props:{$$slots:{default:[bb]},$$scope:{ctx:x}}}),Io=new we({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[kb]},$$scope:{ctx:x}}}),ks=new Ue({}),Ts=new de({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L233"}}),Xo=new qe({props:{$$slots:{default:[Tb]},$$scope:{ctx:x}}}),Fs=new de({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ho=new qe({props:{$$slots:{default:[wb]},$$scope:{ctx:x}}}),Qo=new we({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[yb]},$$scope:{ctx:x}}}),$s=new Ue({}),Ms=new de({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L759"}}),Bo=new qe({props:{$$slots:{default:[vb]},$$scope:{ctx:x}}}),zs=new de({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L786",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
<ul>
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
<p><code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new qe({props:{$$slots:{default:[Fb]},$$scope:{ctx:x}}}),Vo=new we({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[$b]},$$scope:{ctx:x}}}),qs=new Ue({}),Ls=new de({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L850"}}),Yo=new qe({props:{$$slots:{default:[Mb]},$$scope:{ctx:x}}}),As=new de({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L895",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new qe({props:{$$slots:{default:[xb]},$$scope:{ctx:x}}}),Jo=new we({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Eb]},$$scope:{ctx:x}}}),Zo=new we({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[Cb]},$$scope:{ctx:x}}}),Ns=new Ue({}),Ss=new de({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L895"}}),tn=new qe({props:{$$slots:{default:[zb]},$$scope:{ctx:x}}}),Xs=new de({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L1002",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new qe({props:{$$slots:{default:[qb]},$$scope:{ctx:x}}}),nn=new we({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[Lb]},$$scope:{ctx:x}}}),Hs=new Ue({}),Qs=new de({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L880"}}),an=new qe({props:{$$slots:{default:[jb]},$$scope:{ctx:x}}}),Vs=new de({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L1126",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rn=new qe({props:{$$slots:{default:[Pb]},$$scope:{ctx:x}}}),ln=new we({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Ob]},$$scope:{ctx:x}}}),dn=new we({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Ab]},$$scope:{ctx:x}}}),Ks=new Ue({}),Ys=new de({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/flaubert/modeling_tf_flaubert.py#L865"}}),pn=new qe({props:{$$slots:{default:[Nb]},$$scope:{ctx:x}}}),ea=new de({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L1211",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new qe({props:{$$slots:{default:[Sb]},$$scope:{ctx:x}}}),un=new we({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Db]},$$scope:{ctx:x}}}),mn=new we({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Ib]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=h(),c=a("h1"),p=a("a"),k=a("span"),w(l.$$.fragment),m=h(),C=a("span"),ce=n("FlauBERT"),K=h(),z=a("h2"),J=a("a"),H=a("span"),w(Z.$$.fragment),pe=h(),Q=a("span"),he=n("Overview"),re=h(),R=a("p"),A=n("The FlauBERT model was proposed in the paper "),ee=a("a"),Y=n("FlauBERT: Unsupervised Language Model Pre-training for French"),q=n(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),j=h(),oe=a("p"),B=n("The abstract from the paper is the following:"),ie=h(),ne=a("p"),U=a("em"),ue=n(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
Processing (NLP) tasks. Leveraging the huge amount of unlabeled texts nowadays available, they provide an efficient way
to pre-train continuous word representations that can be fine-tuned for a downstream task, along with their
contextualization at the sentence level. This has been widely demonstrated for English using contextualized
representations (Dai and Le, 2015; Peters et al., 2018; Howard and Ruder, 2018; Radford et al., 2018; Devlin et al.,
2019; Yang et al., 2019b). In this paper, we introduce and share FlauBERT, a model learned on a very large and
heterogeneous French corpus. Models of different sizes are trained using the new CNRS (French National Centre for
Scientific Research) Jean Zay supercomputer. We apply our French language models to diverse NLP tasks (text
classification, paraphrasing, natural language inference, parsing, word sense disambiguation) and show that most of the
time they outperform other pretraining approaches. Different versions of FlauBERT as well as a unified evaluation
protocol for the downstream tasks, called FLUE (French Language Understanding Evaluation), are shared to the research
community for further reproducible experiments in French NLP.`),le=h(),L=a("p"),me=n("This model was contributed by "),D=a("a"),fe=n("formiel"),ge=n(". The original code can be found "),I=a("a"),_e=n("here"),be=n("."),O=h(),G=a("h2"),S=a("a"),se=a("span"),w(f.$$.fragment),E=h(),V=a("span"),Fe=n("FlaubertConfig"),Te=h(),P=a("div"),w(ke.$$.fragment),$e=h(),ae=a("p"),N=n("This is the configuration class to store the configuration of a "),W=a("a"),Me=n("FlaubertModel"),xe=n(" or a "),X=a("a"),Ee=n("TFFlaubertModel"),Ce=n(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),te=a("a"),ze=n("flaubert/flaubert_base_uncased"),cd=n(" architecture."),pd=h(),Lt=a("p"),hd=n("Configuration objects inherit from "),ra=a("a"),ud=n("PretrainedConfig"),md=n(` and can be used to control the model outputs. Read the
documentation from `),ia=a("a"),fd=n("PretrainedConfig"),gd=n(" for more information."),Xi=h(),jt=a("h2"),uo=a("a"),nr=a("span"),w(wn.$$.fragment),_d=h(),sr=a("span"),bd=n("FlaubertTokenizer"),Hi=h(),et=a("div"),w(yn.$$.fragment),kd=h(),ar=a("p"),Td=n("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),wd=h(),kt=a("ul"),rr=a("li"),yd=n("Moses preprocessing and tokenization."),vd=h(),ir=a("li"),Fd=n("Normalizing all inputs text."),$d=h(),Tt=a("li"),Md=n("The arguments "),lr=a("code"),xd=n("special_tokens"),Ed=n(" and the function "),dr=a("code"),Cd=n("set_special_tokens"),zd=n(`, can be used to add additional symbols (like
\u201D`),cr=a("strong"),qd=n("classify"),Ld=n("\u201D) to a vocabulary."),jd=h(),vn=a("li"),Pd=n("The argument "),pr=a("code"),Od=n("do_lowercase"),Ad=n(" controls lower casing (automatically set for pretrained vocabularies)."),Nd=h(),Fn=a("p"),Sd=n("This tokenizer inherits from "),la=a("a"),Dd=n("XLMTokenizer"),Id=n(`. Please check the superclass for usage examples and documentation
regarding arguments.`),Qi=h(),Pt=a("h2"),mo=a("a"),hr=a("span"),w($n.$$.fragment),Wd=h(),ur=a("span"),Xd=n("FlaubertModel"),Ui=h(),Be=a("div"),w(Mn.$$.fragment),Hd=h(),mr=a("p"),Qd=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Ud=h(),xn=a("p"),Bd=n("This model inherits from "),da=a("a"),Rd=n("PreTrainedModel"),Vd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd=h(),En=a("p"),Yd=n("This model is also a PyTorch "),Cn=a("a"),Gd=n("torch.nn.Module"),Jd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=h(),tt=a("div"),w(zn.$$.fragment),ec=h(),Ot=a("p"),tc=n("The "),ca=a("a"),oc=n("FlaubertModel"),nc=n(" forward method, overrides the "),fr=a("code"),sc=n("__call__"),ac=n(" special method."),rc=h(),w(fo.$$.fragment),ic=h(),w(go.$$.fragment),Bi=h(),At=a("h2"),_o=a("a"),gr=a("span"),w(qn.$$.fragment),lc=h(),_r=a("span"),dc=n("FlaubertWithLMHeadModel"),Ri=h(),je=a("div"),w(Ln.$$.fragment),cc=h(),br=a("p"),pc=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),hc=h(),jn=a("p"),uc=n("This model inherits from "),pa=a("a"),mc=n("PreTrainedModel"),fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=h(),Pn=a("p"),_c=n("This model is also a PyTorch "),On=a("a"),bc=n("torch.nn.Module"),kc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=h(),An=a("p"),wc=n("This class overrides "),ha=a("a"),yc=n("XLMWithLMHeadModel"),vc=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fc=h(),Re=a("div"),w(Nn.$$.fragment),$c=h(),Nt=a("p"),Mc=n("The "),ua=a("a"),xc=n("XLMWithLMHeadModel"),Ec=n(" forward method, overrides the "),kr=a("code"),Cc=n("__call__"),zc=n(" special method."),qc=h(),w(bo.$$.fragment),Lc=h(),w(ko.$$.fragment),jc=h(),w(To.$$.fragment),Vi=h(),St=a("h2"),wo=a("a"),Tr=a("span"),w(Sn.$$.fragment),Pc=h(),wr=a("span"),Oc=n("FlaubertForSequenceClassification"),Ki=h(),Pe=a("div"),w(Dn.$$.fragment),Ac=h(),yr=a("p"),Nc=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Sc=h(),In=a("p"),Dc=n("This model inherits from "),ma=a("a"),Ic=n("PreTrainedModel"),Wc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc=h(),Wn=a("p"),Hc=n("This model is also a PyTorch "),Xn=a("a"),Qc=n("torch.nn.Module"),Uc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bc=h(),Hn=a("p"),Rc=n("This class overrides "),fa=a("a"),Vc=n("XLMForSequenceClassification"),Kc=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Yc=h(),Le=a("div"),w(Qn.$$.fragment),Gc=h(),Dt=a("p"),Jc=n("The "),ga=a("a"),Zc=n("XLMForSequenceClassification"),ep=n(" forward method, overrides the "),vr=a("code"),tp=n("__call__"),op=n(" special method."),np=h(),w(yo.$$.fragment),sp=h(),w(vo.$$.fragment),ap=h(),w(Fo.$$.fragment),rp=h(),w($o.$$.fragment),ip=h(),w(Mo.$$.fragment),Yi=h(),It=a("h2"),xo=a("a"),Fr=a("span"),w(Un.$$.fragment),lp=h(),$r=a("span"),dp=n("FlaubertForMultipleChoice"),Gi=h(),Oe=a("div"),w(Bn.$$.fragment),cp=h(),Mr=a("p"),pp=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),hp=h(),Rn=a("p"),up=n("This model inherits from "),_a=a("a"),mp=n("PreTrainedModel"),fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=h(),Vn=a("p"),_p=n("This model is also a PyTorch "),Kn=a("a"),bp=n("torch.nn.Module"),kp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=h(),Yn=a("p"),wp=n("This class overrides "),ba=a("a"),yp=n("XLMForMultipleChoice"),vp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fp=h(),ot=a("div"),w(Gn.$$.fragment),$p=h(),Wt=a("p"),Mp=n("The "),ka=a("a"),xp=n("XLMForMultipleChoice"),Ep=n(" forward method, overrides the "),xr=a("code"),Cp=n("__call__"),zp=n(" special method."),qp=h(),w(Eo.$$.fragment),Lp=h(),w(Co.$$.fragment),Ji=h(),Xt=a("h2"),zo=a("a"),Er=a("span"),w(Jn.$$.fragment),jp=h(),Cr=a("span"),Pp=n("FlaubertForTokenClassification"),Zi=h(),Ae=a("div"),w(Zn.$$.fragment),Op=h(),zr=a("p"),Ap=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Np=h(),es=a("p"),Sp=n("This model inherits from "),Ta=a("a"),Dp=n("PreTrainedModel"),Ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp=h(),ts=a("p"),Xp=n("This model is also a PyTorch "),os=a("a"),Hp=n("torch.nn.Module"),Qp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up=h(),ns=a("p"),Bp=n("This class overrides "),wa=a("a"),Rp=n("XLMForTokenClassification"),Vp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Kp=h(),Ve=a("div"),w(ss.$$.fragment),Yp=h(),Ht=a("p"),Gp=n("The "),ya=a("a"),Jp=n("XLMForTokenClassification"),Zp=n(" forward method, overrides the "),qr=a("code"),eh=n("__call__"),th=n(" special method."),oh=h(),w(qo.$$.fragment),nh=h(),w(Lo.$$.fragment),sh=h(),w(jo.$$.fragment),el=h(),Qt=a("h2"),Po=a("a"),Lr=a("span"),w(as.$$.fragment),ah=h(),jr=a("span"),rh=n("FlaubertForQuestionAnsweringSimple"),tl=h(),Ne=a("div"),w(rs.$$.fragment),ih=h(),Ut=a("p"),lh=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=a("code"),dh=n("span start logits"),ch=n(" and "),Or=a("code"),ph=n("span end logits"),hh=n(")."),uh=h(),is=a("p"),mh=n("This model inherits from "),va=a("a"),fh=n("PreTrainedModel"),gh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=h(),ls=a("p"),bh=n("This model is also a PyTorch "),ds=a("a"),kh=n("torch.nn.Module"),Th=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh=h(),cs=a("p"),yh=n("This class overrides "),Fa=a("a"),vh=n("XLMForQuestionAnsweringSimple"),Fh=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$h=h(),Ke=a("div"),w(ps.$$.fragment),Mh=h(),Bt=a("p"),xh=n("The "),$a=a("a"),Eh=n("XLMForQuestionAnsweringSimple"),Ch=n(" forward method, overrides the "),Ar=a("code"),zh=n("__call__"),qh=n(" special method."),Lh=h(),w(Oo.$$.fragment),jh=h(),w(Ao.$$.fragment),Ph=h(),w(No.$$.fragment),ol=h(),Rt=a("h2"),So=a("a"),Nr=a("span"),w(hs.$$.fragment),Oh=h(),Sr=a("span"),Ah=n("FlaubertForQuestionAnswering"),nl=h(),Se=a("div"),w(us.$$.fragment),Nh=h(),Vt=a("p"),Sh=n(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=a("code"),Dh=n("span start logits"),Ih=n(" and "),Ir=a("code"),Wh=n("span end logits"),Xh=n(")."),Hh=h(),ms=a("p"),Qh=n("This model inherits from "),Ma=a("a"),Uh=n("PreTrainedModel"),Bh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh=h(),fs=a("p"),Vh=n("This model is also a PyTorch "),gs=a("a"),Kh=n("torch.nn.Module"),Yh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gh=h(),_s=a("p"),Jh=n("This class overrides "),xa=a("a"),Zh=n("XLMForQuestionAnswering"),eu=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),tu=h(),nt=a("div"),w(bs.$$.fragment),ou=h(),Kt=a("p"),nu=n("The "),Ea=a("a"),su=n("XLMForQuestionAnswering"),au=n(" forward method, overrides the "),Wr=a("code"),ru=n("__call__"),iu=n(" special method."),lu=h(),w(Do.$$.fragment),du=h(),w(Io.$$.fragment),sl=h(),Yt=a("h2"),Wo=a("a"),Xr=a("span"),w(ks.$$.fragment),cu=h(),Hr=a("span"),pu=n("TFFlaubertModel"),al=h(),De=a("div"),w(Ts.$$.fragment),hu=h(),Qr=a("p"),uu=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),mu=h(),ws=a("p"),fu=n("This model inherits from "),Ca=a("a"),gu=n("TFPreTrainedModel"),_u=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=h(),ys=a("p"),ku=n("This model is also a "),vs=a("a"),Tu=n("tf.keras.Model"),wu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yu=h(),w(Xo.$$.fragment),vu=h(),st=a("div"),w(Fs.$$.fragment),Fu=h(),Gt=a("p"),$u=n("The "),za=a("a"),Mu=n("TFFlaubertModel"),xu=n(" forward method, overrides the "),Ur=a("code"),Eu=n("__call__"),Cu=n(" special method."),zu=h(),w(Ho.$$.fragment),qu=h(),w(Qo.$$.fragment),rl=h(),Jt=a("h2"),Uo=a("a"),Br=a("span"),w($s.$$.fragment),Lu=h(),Rr=a("span"),ju=n("TFFlaubertWithLMHeadModel"),il=h(),Ie=a("div"),w(Ms.$$.fragment),Pu=h(),Vr=a("p"),Ou=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Au=h(),xs=a("p"),Nu=n("This model inherits from "),qa=a("a"),Su=n("TFPreTrainedModel"),Du=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu=h(),Es=a("p"),Wu=n("This model is also a "),Cs=a("a"),Xu=n("tf.keras.Model"),Hu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu=h(),w(Bo.$$.fragment),Uu=h(),at=a("div"),w(zs.$$.fragment),Bu=h(),Zt=a("p"),Ru=n("The "),La=a("a"),Vu=n("TFFlaubertWithLMHeadModel"),Ku=n(" forward method, overrides the "),Kr=a("code"),Yu=n("__call__"),Gu=n(" special method."),Ju=h(),w(Ro.$$.fragment),Zu=h(),w(Vo.$$.fragment),ll=h(),eo=a("h2"),Ko=a("a"),Yr=a("span"),w(qs.$$.fragment),em=h(),Gr=a("span"),tm=n("TFFlaubertForSequenceClassification"),dl=h(),We=a("div"),w(Ls.$$.fragment),om=h(),Jr=a("p"),nm=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),sm=h(),js=a("p"),am=n("This model inherits from "),ja=a("a"),rm=n("TFPreTrainedModel"),im=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm=h(),Ps=a("p"),dm=n("This model is also a "),Os=a("a"),cm=n("tf.keras.Model"),pm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hm=h(),w(Yo.$$.fragment),um=h(),Ye=a("div"),w(As.$$.fragment),mm=h(),to=a("p"),fm=n("The "),Pa=a("a"),gm=n("TFXLMForSequenceClassification"),_m=n(" forward method, overrides the "),Zr=a("code"),bm=n("__call__"),km=n(" special method."),Tm=h(),w(Go.$$.fragment),wm=h(),w(Jo.$$.fragment),ym=h(),w(Zo.$$.fragment),cl=h(),oo=a("h2"),en=a("a"),ei=a("span"),w(Ns.$$.fragment),vm=h(),ti=a("span"),Fm=n("TFFlaubertForMultipleChoice"),pl=h(),Xe=a("div"),w(Ss.$$.fragment),$m=h(),oi=a("p"),Mm=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xm=h(),Ds=a("p"),Em=n("This model inherits from "),Oa=a("a"),Cm=n("TFPreTrainedModel"),zm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=h(),Is=a("p"),Lm=n("This model is also a "),Ws=a("a"),jm=n("tf.keras.Model"),Pm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Om=h(),w(tn.$$.fragment),Am=h(),rt=a("div"),w(Xs.$$.fragment),Nm=h(),no=a("p"),Sm=n("The "),Aa=a("a"),Dm=n("TFXLMForMultipleChoice"),Im=n(" forward method, overrides the "),ni=a("code"),Wm=n("__call__"),Xm=n(" special method."),Hm=h(),w(on.$$.fragment),Qm=h(),w(nn.$$.fragment),hl=h(),so=a("h2"),sn=a("a"),si=a("span"),w(Hs.$$.fragment),Um=h(),ai=a("span"),Bm=n("TFFlaubertForTokenClassification"),ul=h(),He=a("div"),w(Qs.$$.fragment),Rm=h(),ri=a("p"),Vm=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Km=h(),Us=a("p"),Ym=n("This model inherits from "),Na=a("a"),Gm=n("TFPreTrainedModel"),Jm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=h(),Bs=a("p"),ef=n("This model is also a "),Rs=a("a"),tf=n("tf.keras.Model"),of=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=h(),w(an.$$.fragment),sf=h(),Ge=a("div"),w(Vs.$$.fragment),af=h(),ao=a("p"),rf=n("The "),Sa=a("a"),lf=n("TFXLMForTokenClassification"),df=n(" forward method, overrides the "),ii=a("code"),cf=n("__call__"),pf=n(" special method."),hf=h(),w(rn.$$.fragment),uf=h(),w(ln.$$.fragment),mf=h(),w(dn.$$.fragment),ml=h(),ro=a("h2"),cn=a("a"),li=a("span"),w(Ks.$$.fragment),ff=h(),di=a("span"),gf=n("TFFlaubertForQuestionAnsweringSimple"),fl=h(),Qe=a("div"),w(Ys.$$.fragment),_f=h(),io=a("p"),bf=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=a("code"),kf=n("span start logits"),Tf=n(" and "),pi=a("code"),wf=n("span end logits"),yf=n(")."),vf=h(),Gs=a("p"),Ff=n("This model inherits from "),Da=a("a"),$f=n("TFPreTrainedModel"),Mf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=h(),Js=a("p"),Ef=n("This model is also a "),Zs=a("a"),Cf=n("tf.keras.Model"),zf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=h(),w(pn.$$.fragment),Lf=h(),Je=a("div"),w(ea.$$.fragment),jf=h(),lo=a("p"),Pf=n("The "),Ia=a("a"),Of=n("TFXLMForQuestionAnsweringSimple"),Af=n(" forward method, overrides the "),hi=a("code"),Nf=n("__call__"),Sf=n(" special method."),Df=h(),w(hn.$$.fragment),If=h(),w(un.$$.fragment),Wf=h(),w(mn.$$.fragment),this.h()},l(o){const T=J_('[data-svelte="svelte-1phssyn"]',document.head);d=r(T,"META",{name:!0,content:!0}),T.forEach(t),g=u(o),c=r(o,"H1",{class:!0});var ta=i(c);p=r(ta,"A",{id:!0,class:!0,href:!0});var ui=i(p);k=r(ui,"SPAN",{});var mi=i(k);y(l.$$.fragment,mi),mi.forEach(t),ui.forEach(t),m=u(ta),C=r(ta,"SPAN",{});var fi=i(C);ce=s(fi,"FlauBERT"),fi.forEach(t),ta.forEach(t),K=u(o),z=r(o,"H2",{class:!0});var oa=i(z);J=r(oa,"A",{id:!0,class:!0,href:!0});var gi=i(J);H=r(gi,"SPAN",{});var _i=i(H);y(Z.$$.fragment,_i),_i.forEach(t),gi.forEach(t),pe=u(oa),Q=r(oa,"SPAN",{});var bi=i(Q);he=s(bi,"Overview"),bi.forEach(t),oa.forEach(t),re=u(o),R=r(o,"P",{});var na=i(R);A=s(na,"The FlauBERT model was proposed in the paper "),ee=r(na,"A",{href:!0,rel:!0});var ki=i(ee);Y=s(ki,"FlauBERT: Unsupervised Language Model Pre-training for French"),ki.forEach(t),q=s(na,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),na.forEach(t),j=u(o),oe=r(o,"P",{});var Ti=i(oe);B=s(Ti,"The abstract from the paper is the following:"),Ti.forEach(t),ie=u(o),ne=r(o,"P",{});var wi=i(ne);U=r(wi,"EM",{});var yi=i(U);ue=s(yi,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
Processing (NLP) tasks. Leveraging the huge amount of unlabeled texts nowadays available, they provide an efficient way
to pre-train continuous word representations that can be fine-tuned for a downstream task, along with their
contextualization at the sentence level. This has been widely demonstrated for English using contextualized
representations (Dai and Le, 2015; Peters et al., 2018; Howard and Ruder, 2018; Radford et al., 2018; Devlin et al.,
2019; Yang et al., 2019b). In this paper, we introduce and share FlauBERT, a model learned on a very large and
heterogeneous French corpus. Models of different sizes are trained using the new CNRS (French National Centre for
Scientific Research) Jean Zay supercomputer. We apply our French language models to diverse NLP tasks (text
classification, paraphrasing, natural language inference, parsing, word sense disambiguation) and show that most of the
time they outperform other pretraining approaches. Different versions of FlauBERT as well as a unified evaluation
protocol for the downstream tasks, called FLUE (French Language Understanding Evaluation), are shared to the research
community for further reproducible experiments in French NLP.`),yi.forEach(t),wi.forEach(t),le=u(o),L=r(o,"P",{});var co=i(L);me=s(co,"This model was contributed by "),D=r(co,"A",{href:!0,rel:!0});var vi=i(D);fe=s(vi,"formiel"),vi.forEach(t),ge=s(co,". The original code can be found "),I=r(co,"A",{href:!0,rel:!0});var Fi=i(I);_e=s(Fi,"here"),Fi.forEach(t),be=s(co,"."),co.forEach(t),O=u(o),G=r(o,"H2",{class:!0});var sa=i(G);S=r(sa,"A",{id:!0,class:!0,href:!0});var $i=i(S);se=r($i,"SPAN",{});var Mi=i(se);y(f.$$.fragment,Mi),Mi.forEach(t),$i.forEach(t),E=u(sa),V=r(sa,"SPAN",{});var xi=i(V);Fe=s(xi,"FlaubertConfig"),xi.forEach(t),sa.forEach(t),Te=u(o),P=r(o,"DIV",{class:!0});var po=i(P);y(ke.$$.fragment,po),$e=u(po),ae=r(po,"P",{});var wt=i(ae);N=s(wt,"This is the configuration class to store the configuration of a "),W=r(wt,"A",{href:!0});var Ei=i(W);Me=s(Ei,"FlaubertModel"),Ei.forEach(t),xe=s(wt," or a "),X=r(wt,"A",{href:!0});var Ci=i(X);Ee=s(Ci,"TFFlaubertModel"),Ci.forEach(t),Ce=s(wt,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),te=r(wt,"A",{href:!0,rel:!0});var zi=i(te);ze=s(zi,"flaubert/flaubert_base_uncased"),zi.forEach(t),cd=s(wt," architecture."),wt.forEach(t),pd=u(po),Lt=r(po,"P",{});var ho=i(Lt);hd=s(ho,"Configuration objects inherit from "),ra=r(ho,"A",{href:!0});var qi=i(ra);ud=s(qi,"PretrainedConfig"),qi.forEach(t),md=s(ho,` and can be used to control the model outputs. Read the
documentation from `),ia=r(ho,"A",{href:!0});var Li=i(ia);fd=s(Li,"PretrainedConfig"),Li.forEach(t),gd=s(ho," for more information."),ho.forEach(t),po.forEach(t),Xi=u(o),jt=r(o,"H2",{class:!0});var aa=i(jt);uo=r(aa,"A",{id:!0,class:!0,href:!0});var ji=i(uo);nr=r(ji,"SPAN",{});var Pi=i(nr);y(wn.$$.fragment,Pi),Pi.forEach(t),ji.forEach(t),_d=u(aa),sr=r(aa,"SPAN",{});var Oi=i(sr);bd=s(Oi,"FlaubertTokenizer"),Oi.forEach(t),aa.forEach(t),Hi=u(o),et=r(o,"DIV",{class:!0});var yt=i(et);y(yn.$$.fragment,yt),kd=u(yt),ar=r(yt,"P",{});var Ai=i(ar);Td=s(Ai,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Ai.forEach(t),wd=u(yt),kt=r(yt,"UL",{});var vt=i(kt);rr=r(vt,"LI",{});var Ni=i(rr);yd=s(Ni,"Moses preprocessing and tokenization."),Ni.forEach(t),vd=u(vt),ir=r(vt,"LI",{});var Si=i(ir);Fd=s(Si,"Normalizing all inputs text."),Si.forEach(t),$d=u(vt),Tt=r(vt,"LI",{});var Ft=i(Tt);Md=s(Ft,"The arguments "),lr=r(Ft,"CODE",{});var Di=i(lr);xd=s(Di,"special_tokens"),Di.forEach(t),Ed=s(Ft," and the function "),dr=r(Ft,"CODE",{});var Ii=i(dr);Cd=s(Ii,"set_special_tokens"),Ii.forEach(t),zd=s(Ft,`, can be used to add additional symbols (like
\u201D`),cr=r(Ft,"STRONG",{});var Wi=i(cr);qd=s(Wi,"classify"),Wi.forEach(t),Ld=s(Ft,"\u201D) to a vocabulary."),Ft.forEach(t),jd=u(vt),vn=r(vt,"LI",{});var _l=i(vn);Pd=s(_l,"The argument "),pr=r(_l,"CODE",{});var Xf=i(pr);Od=s(Xf,"do_lowercase"),Xf.forEach(t),Ad=s(_l," controls lower casing (automatically set for pretrained vocabularies)."),_l.forEach(t),vt.forEach(t),Nd=u(yt),Fn=r(yt,"P",{});var bl=i(Fn);Sd=s(bl,"This tokenizer inherits from "),la=r(bl,"A",{href:!0});var Hf=i(la);Dd=s(Hf,"XLMTokenizer"),Hf.forEach(t),Id=s(bl,`. Please check the superclass for usage examples and documentation
regarding arguments.`),bl.forEach(t),yt.forEach(t),Qi=u(o),Pt=r(o,"H2",{class:!0});var kl=i(Pt);mo=r(kl,"A",{id:!0,class:!0,href:!0});var Qf=i(mo);hr=r(Qf,"SPAN",{});var Uf=i(hr);y($n.$$.fragment,Uf),Uf.forEach(t),Qf.forEach(t),Wd=u(kl),ur=r(kl,"SPAN",{});var Bf=i(ur);Xd=s(Bf,"FlaubertModel"),Bf.forEach(t),kl.forEach(t),Ui=u(o),Be=r(o,"DIV",{class:!0});var $t=i(Be);y(Mn.$$.fragment,$t),Hd=u($t),mr=r($t,"P",{});var Rf=i(mr);Qd=s(Rf,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Rf.forEach(t),Ud=u($t),xn=r($t,"P",{});var Tl=i(xn);Bd=s(Tl,"This model inherits from "),da=r(Tl,"A",{href:!0});var Vf=i(da);Rd=s(Vf,"PreTrainedModel"),Vf.forEach(t),Vd=s(Tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl.forEach(t),Kd=u($t),En=r($t,"P",{});var wl=i(En);Yd=s(wl,"This model is also a PyTorch "),Cn=r(wl,"A",{href:!0,rel:!0});var Kf=i(Cn);Gd=s(Kf,"torch.nn.Module"),Kf.forEach(t),Jd=s(wl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wl.forEach(t),Zd=u($t),tt=r($t,"DIV",{class:!0});var fn=i(tt);y(zn.$$.fragment,fn),ec=u(fn),Ot=r(fn,"P",{});var Wa=i(Ot);tc=s(Wa,"The "),ca=r(Wa,"A",{href:!0});var Yf=i(ca);oc=s(Yf,"FlaubertModel"),Yf.forEach(t),nc=s(Wa," forward method, overrides the "),fr=r(Wa,"CODE",{});var Gf=i(fr);sc=s(Gf,"__call__"),Gf.forEach(t),ac=s(Wa," special method."),Wa.forEach(t),rc=u(fn),y(fo.$$.fragment,fn),ic=u(fn),y(go.$$.fragment,fn),fn.forEach(t),$t.forEach(t),Bi=u(o),At=r(o,"H2",{class:!0});var yl=i(At);_o=r(yl,"A",{id:!0,class:!0,href:!0});var Jf=i(_o);gr=r(Jf,"SPAN",{});var Zf=i(gr);y(qn.$$.fragment,Zf),Zf.forEach(t),Jf.forEach(t),lc=u(yl),_r=r(yl,"SPAN",{});var eg=i(_r);dc=s(eg,"FlaubertWithLMHeadModel"),eg.forEach(t),yl.forEach(t),Ri=u(o),je=r(o,"DIV",{class:!0});var it=i(je);y(Ln.$$.fragment,it),cc=u(it),br=r(it,"P",{});var tg=i(br);pc=s(tg,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tg.forEach(t),hc=u(it),jn=r(it,"P",{});var vl=i(jn);uc=s(vl,"This model inherits from "),pa=r(vl,"A",{href:!0});var og=i(pa);mc=s(og,"PreTrainedModel"),og.forEach(t),fc=s(vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vl.forEach(t),gc=u(it),Pn=r(it,"P",{});var Fl=i(Pn);_c=s(Fl,"This model is also a PyTorch "),On=r(Fl,"A",{href:!0,rel:!0});var ng=i(On);bc=s(ng,"torch.nn.Module"),ng.forEach(t),kc=s(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),Tc=u(it),An=r(it,"P",{});var $l=i(An);wc=s($l,"This class overrides "),ha=r($l,"A",{href:!0});var sg=i(ha);yc=s(sg,"XLMWithLMHeadModel"),sg.forEach(t),vc=s($l,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),$l.forEach(t),Fc=u(it),Re=r(it,"DIV",{class:!0});var Mt=i(Re);y(Nn.$$.fragment,Mt),$c=u(Mt),Nt=r(Mt,"P",{});var Xa=i(Nt);Mc=s(Xa,"The "),ua=r(Xa,"A",{href:!0});var ag=i(ua);xc=s(ag,"XLMWithLMHeadModel"),ag.forEach(t),Ec=s(Xa," forward method, overrides the "),kr=r(Xa,"CODE",{});var rg=i(kr);Cc=s(rg,"__call__"),rg.forEach(t),zc=s(Xa," special method."),Xa.forEach(t),qc=u(Mt),y(bo.$$.fragment,Mt),Lc=u(Mt),y(ko.$$.fragment,Mt),jc=u(Mt),y(To.$$.fragment,Mt),Mt.forEach(t),it.forEach(t),Vi=u(o),St=r(o,"H2",{class:!0});var Ml=i(St);wo=r(Ml,"A",{id:!0,class:!0,href:!0});var ig=i(wo);Tr=r(ig,"SPAN",{});var lg=i(Tr);y(Sn.$$.fragment,lg),lg.forEach(t),ig.forEach(t),Pc=u(Ml),wr=r(Ml,"SPAN",{});var dg=i(wr);Oc=s(dg,"FlaubertForSequenceClassification"),dg.forEach(t),Ml.forEach(t),Ki=u(o),Pe=r(o,"DIV",{class:!0});var lt=i(Pe);y(Dn.$$.fragment,lt),Ac=u(lt),yr=r(lt,"P",{});var cg=i(yr);Nc=s(cg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),cg.forEach(t),Sc=u(lt),In=r(lt,"P",{});var xl=i(In);Dc=s(xl,"This model inherits from "),ma=r(xl,"A",{href:!0});var pg=i(ma);Ic=s(pg,"PreTrainedModel"),pg.forEach(t),Wc=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Xc=u(lt),Wn=r(lt,"P",{});var El=i(Wn);Hc=s(El,"This model is also a PyTorch "),Xn=r(El,"A",{href:!0,rel:!0});var hg=i(Xn);Qc=s(hg,"torch.nn.Module"),hg.forEach(t),Uc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),Bc=u(lt),Hn=r(lt,"P",{});var Cl=i(Hn);Rc=s(Cl,"This class overrides "),fa=r(Cl,"A",{href:!0});var ug=i(fa);Vc=s(ug,"XLMForSequenceClassification"),ug.forEach(t),Kc=s(Cl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Cl.forEach(t),Yc=u(lt),Le=r(lt,"DIV",{class:!0});var Ze=i(Le);y(Qn.$$.fragment,Ze),Gc=u(Ze),Dt=r(Ze,"P",{});var Ha=i(Dt);Jc=s(Ha,"The "),ga=r(Ha,"A",{href:!0});var mg=i(ga);Zc=s(mg,"XLMForSequenceClassification"),mg.forEach(t),ep=s(Ha," forward method, overrides the "),vr=r(Ha,"CODE",{});var fg=i(vr);tp=s(fg,"__call__"),fg.forEach(t),op=s(Ha," special method."),Ha.forEach(t),np=u(Ze),y(yo.$$.fragment,Ze),sp=u(Ze),y(vo.$$.fragment,Ze),ap=u(Ze),y(Fo.$$.fragment,Ze),rp=u(Ze),y($o.$$.fragment,Ze),ip=u(Ze),y(Mo.$$.fragment,Ze),Ze.forEach(t),lt.forEach(t),Yi=u(o),It=r(o,"H2",{class:!0});var zl=i(It);xo=r(zl,"A",{id:!0,class:!0,href:!0});var gg=i(xo);Fr=r(gg,"SPAN",{});var _g=i(Fr);y(Un.$$.fragment,_g),_g.forEach(t),gg.forEach(t),lp=u(zl),$r=r(zl,"SPAN",{});var bg=i($r);dp=s(bg,"FlaubertForMultipleChoice"),bg.forEach(t),zl.forEach(t),Gi=u(o),Oe=r(o,"DIV",{class:!0});var dt=i(Oe);y(Bn.$$.fragment,dt),cp=u(dt),Mr=r(dt,"P",{});var kg=i(Mr);pp=s(kg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),kg.forEach(t),hp=u(dt),Rn=r(dt,"P",{});var ql=i(Rn);up=s(ql,"This model inherits from "),_a=r(ql,"A",{href:!0});var Tg=i(_a);mp=s(Tg,"PreTrainedModel"),Tg.forEach(t),fp=s(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),gp=u(dt),Vn=r(dt,"P",{});var Ll=i(Vn);_p=s(Ll,"This model is also a PyTorch "),Kn=r(Ll,"A",{href:!0,rel:!0});var wg=i(Kn);bp=s(wg,"torch.nn.Module"),wg.forEach(t),kp=s(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),Tp=u(dt),Yn=r(dt,"P",{});var jl=i(Yn);wp=s(jl,"This class overrides "),ba=r(jl,"A",{href:!0});var yg=i(ba);yp=s(yg,"XLMForMultipleChoice"),yg.forEach(t),vp=s(jl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),jl.forEach(t),Fp=u(dt),ot=r(dt,"DIV",{class:!0});var gn=i(ot);y(Gn.$$.fragment,gn),$p=u(gn),Wt=r(gn,"P",{});var Qa=i(Wt);Mp=s(Qa,"The "),ka=r(Qa,"A",{href:!0});var vg=i(ka);xp=s(vg,"XLMForMultipleChoice"),vg.forEach(t),Ep=s(Qa," forward method, overrides the "),xr=r(Qa,"CODE",{});var Fg=i(xr);Cp=s(Fg,"__call__"),Fg.forEach(t),zp=s(Qa," special method."),Qa.forEach(t),qp=u(gn),y(Eo.$$.fragment,gn),Lp=u(gn),y(Co.$$.fragment,gn),gn.forEach(t),dt.forEach(t),Ji=u(o),Xt=r(o,"H2",{class:!0});var Pl=i(Xt);zo=r(Pl,"A",{id:!0,class:!0,href:!0});var $g=i(zo);Er=r($g,"SPAN",{});var Mg=i(Er);y(Jn.$$.fragment,Mg),Mg.forEach(t),$g.forEach(t),jp=u(Pl),Cr=r(Pl,"SPAN",{});var xg=i(Cr);Pp=s(xg,"FlaubertForTokenClassification"),xg.forEach(t),Pl.forEach(t),Zi=u(o),Ae=r(o,"DIV",{class:!0});var ct=i(Ae);y(Zn.$$.fragment,ct),Op=u(ct),zr=r(ct,"P",{});var Eg=i(zr);Ap=s(Eg,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Eg.forEach(t),Np=u(ct),es=r(ct,"P",{});var Ol=i(es);Sp=s(Ol,"This model inherits from "),Ta=r(Ol,"A",{href:!0});var Cg=i(Ta);Dp=s(Cg,"PreTrainedModel"),Cg.forEach(t),Ip=s(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),Wp=u(ct),ts=r(ct,"P",{});var Al=i(ts);Xp=s(Al,"This model is also a PyTorch "),os=r(Al,"A",{href:!0,rel:!0});var zg=i(os);Hp=s(zg,"torch.nn.Module"),zg.forEach(t),Qp=s(Al,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Al.forEach(t),Up=u(ct),ns=r(ct,"P",{});var Nl=i(ns);Bp=s(Nl,"This class overrides "),wa=r(Nl,"A",{href:!0});var qg=i(wa);Rp=s(qg,"XLMForTokenClassification"),qg.forEach(t),Vp=s(Nl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Nl.forEach(t),Kp=u(ct),Ve=r(ct,"DIV",{class:!0});var xt=i(Ve);y(ss.$$.fragment,xt),Yp=u(xt),Ht=r(xt,"P",{});var Ua=i(Ht);Gp=s(Ua,"The "),ya=r(Ua,"A",{href:!0});var Lg=i(ya);Jp=s(Lg,"XLMForTokenClassification"),Lg.forEach(t),Zp=s(Ua," forward method, overrides the "),qr=r(Ua,"CODE",{});var jg=i(qr);eh=s(jg,"__call__"),jg.forEach(t),th=s(Ua," special method."),Ua.forEach(t),oh=u(xt),y(qo.$$.fragment,xt),nh=u(xt),y(Lo.$$.fragment,xt),sh=u(xt),y(jo.$$.fragment,xt),xt.forEach(t),ct.forEach(t),el=u(o),Qt=r(o,"H2",{class:!0});var Sl=i(Qt);Po=r(Sl,"A",{id:!0,class:!0,href:!0});var Pg=i(Po);Lr=r(Pg,"SPAN",{});var Og=i(Lr);y(as.$$.fragment,Og),Og.forEach(t),Pg.forEach(t),ah=u(Sl),jr=r(Sl,"SPAN",{});var Ag=i(jr);rh=s(Ag,"FlaubertForQuestionAnsweringSimple"),Ag.forEach(t),Sl.forEach(t),tl=u(o),Ne=r(o,"DIV",{class:!0});var pt=i(Ne);y(rs.$$.fragment,pt),ih=u(pt),Ut=r(pt,"P",{});var Ba=i(Ut);lh=s(Ba,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=r(Ba,"CODE",{});var Ng=i(Pr);dh=s(Ng,"span start logits"),Ng.forEach(t),ch=s(Ba," and "),Or=r(Ba,"CODE",{});var Sg=i(Or);ph=s(Sg,"span end logits"),Sg.forEach(t),hh=s(Ba,")."),Ba.forEach(t),uh=u(pt),is=r(pt,"P",{});var Dl=i(is);mh=s(Dl,"This model inherits from "),va=r(Dl,"A",{href:!0});var Dg=i(va);fh=s(Dg,"PreTrainedModel"),Dg.forEach(t),gh=s(Dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl.forEach(t),_h=u(pt),ls=r(pt,"P",{});var Il=i(ls);bh=s(Il,"This model is also a PyTorch "),ds=r(Il,"A",{href:!0,rel:!0});var Ig=i(ds);kh=s(Ig,"torch.nn.Module"),Ig.forEach(t),Th=s(Il,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il.forEach(t),wh=u(pt),cs=r(pt,"P",{});var Wl=i(cs);yh=s(Wl,"This class overrides "),Fa=r(Wl,"A",{href:!0});var Wg=i(Fa);vh=s(Wg,"XLMForQuestionAnsweringSimple"),Wg.forEach(t),Fh=s(Wl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Wl.forEach(t),$h=u(pt),Ke=r(pt,"DIV",{class:!0});var Et=i(Ke);y(ps.$$.fragment,Et),Mh=u(Et),Bt=r(Et,"P",{});var Ra=i(Bt);xh=s(Ra,"The "),$a=r(Ra,"A",{href:!0});var Xg=i($a);Eh=s(Xg,"XLMForQuestionAnsweringSimple"),Xg.forEach(t),Ch=s(Ra," forward method, overrides the "),Ar=r(Ra,"CODE",{});var Hg=i(Ar);zh=s(Hg,"__call__"),Hg.forEach(t),qh=s(Ra," special method."),Ra.forEach(t),Lh=u(Et),y(Oo.$$.fragment,Et),jh=u(Et),y(Ao.$$.fragment,Et),Ph=u(Et),y(No.$$.fragment,Et),Et.forEach(t),pt.forEach(t),ol=u(o),Rt=r(o,"H2",{class:!0});var Xl=i(Rt);So=r(Xl,"A",{id:!0,class:!0,href:!0});var Qg=i(So);Nr=r(Qg,"SPAN",{});var Ug=i(Nr);y(hs.$$.fragment,Ug),Ug.forEach(t),Qg.forEach(t),Oh=u(Xl),Sr=r(Xl,"SPAN",{});var Bg=i(Sr);Ah=s(Bg,"FlaubertForQuestionAnswering"),Bg.forEach(t),Xl.forEach(t),nl=u(o),Se=r(o,"DIV",{class:!0});var ht=i(Se);y(us.$$.fragment,ht),Nh=u(ht),Vt=r(ht,"P",{});var Va=i(Vt);Sh=s(Va,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=r(Va,"CODE",{});var Rg=i(Dr);Dh=s(Rg,"span start logits"),Rg.forEach(t),Ih=s(Va," and "),Ir=r(Va,"CODE",{});var Vg=i(Ir);Wh=s(Vg,"span end logits"),Vg.forEach(t),Xh=s(Va,")."),Va.forEach(t),Hh=u(ht),ms=r(ht,"P",{});var Hl=i(ms);Qh=s(Hl,"This model inherits from "),Ma=r(Hl,"A",{href:!0});var Kg=i(Ma);Uh=s(Kg,"PreTrainedModel"),Kg.forEach(t),Bh=s(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Rh=u(ht),fs=r(ht,"P",{});var Ql=i(fs);Vh=s(Ql,"This model is also a PyTorch "),gs=r(Ql,"A",{href:!0,rel:!0});var Yg=i(gs);Kh=s(Yg,"torch.nn.Module"),Yg.forEach(t),Yh=s(Ql,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql.forEach(t),Gh=u(ht),_s=r(ht,"P",{});var Ul=i(_s);Jh=s(Ul,"This class overrides "),xa=r(Ul,"A",{href:!0});var Gg=i(xa);Zh=s(Gg,"XLMForQuestionAnswering"),Gg.forEach(t),eu=s(Ul,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Ul.forEach(t),tu=u(ht),nt=r(ht,"DIV",{class:!0});var _n=i(nt);y(bs.$$.fragment,_n),ou=u(_n),Kt=r(_n,"P",{});var Ka=i(Kt);nu=s(Ka,"The "),Ea=r(Ka,"A",{href:!0});var Jg=i(Ea);su=s(Jg,"XLMForQuestionAnswering"),Jg.forEach(t),au=s(Ka," forward method, overrides the "),Wr=r(Ka,"CODE",{});var Zg=i(Wr);ru=s(Zg,"__call__"),Zg.forEach(t),iu=s(Ka," special method."),Ka.forEach(t),lu=u(_n),y(Do.$$.fragment,_n),du=u(_n),y(Io.$$.fragment,_n),_n.forEach(t),ht.forEach(t),sl=u(o),Yt=r(o,"H2",{class:!0});var Bl=i(Yt);Wo=r(Bl,"A",{id:!0,class:!0,href:!0});var e_=i(Wo);Xr=r(e_,"SPAN",{});var t_=i(Xr);y(ks.$$.fragment,t_),t_.forEach(t),e_.forEach(t),cu=u(Bl),Hr=r(Bl,"SPAN",{});var o_=i(Hr);pu=s(o_,"TFFlaubertModel"),o_.forEach(t),Bl.forEach(t),al=u(o),De=r(o,"DIV",{class:!0});var ut=i(De);y(Ts.$$.fragment,ut),hu=u(ut),Qr=r(ut,"P",{});var n_=i(Qr);uu=s(n_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),n_.forEach(t),mu=u(ut),ws=r(ut,"P",{});var Rl=i(ws);fu=s(Rl,"This model inherits from "),Ca=r(Rl,"A",{href:!0});var s_=i(Ca);gu=s(s_,"TFPreTrainedModel"),s_.forEach(t),_u=s(Rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rl.forEach(t),bu=u(ut),ys=r(ut,"P",{});var Vl=i(ys);ku=s(Vl,"This model is also a "),vs=r(Vl,"A",{href:!0,rel:!0});var a_=i(vs);Tu=s(a_,"tf.keras.Model"),a_.forEach(t),wu=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),yu=u(ut),y(Xo.$$.fragment,ut),vu=u(ut),st=r(ut,"DIV",{class:!0});var bn=i(st);y(Fs.$$.fragment,bn),Fu=u(bn),Gt=r(bn,"P",{});var Ya=i(Gt);$u=s(Ya,"The "),za=r(Ya,"A",{href:!0});var r_=i(za);Mu=s(r_,"TFFlaubertModel"),r_.forEach(t),xu=s(Ya," forward method, overrides the "),Ur=r(Ya,"CODE",{});var i_=i(Ur);Eu=s(i_,"__call__"),i_.forEach(t),Cu=s(Ya," special method."),Ya.forEach(t),zu=u(bn),y(Ho.$$.fragment,bn),qu=u(bn),y(Qo.$$.fragment,bn),bn.forEach(t),ut.forEach(t),rl=u(o),Jt=r(o,"H2",{class:!0});var Kl=i(Jt);Uo=r(Kl,"A",{id:!0,class:!0,href:!0});var l_=i(Uo);Br=r(l_,"SPAN",{});var d_=i(Br);y($s.$$.fragment,d_),d_.forEach(t),l_.forEach(t),Lu=u(Kl),Rr=r(Kl,"SPAN",{});var c_=i(Rr);ju=s(c_,"TFFlaubertWithLMHeadModel"),c_.forEach(t),Kl.forEach(t),il=u(o),Ie=r(o,"DIV",{class:!0});var mt=i(Ie);y(Ms.$$.fragment,mt),Pu=u(mt),Vr=r(mt,"P",{});var p_=i(Vr);Ou=s(p_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),p_.forEach(t),Au=u(mt),xs=r(mt,"P",{});var Yl=i(xs);Nu=s(Yl,"This model inherits from "),qa=r(Yl,"A",{href:!0});var h_=i(qa);Su=s(h_,"TFPreTrainedModel"),h_.forEach(t),Du=s(Yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yl.forEach(t),Iu=u(mt),Es=r(mt,"P",{});var Gl=i(Es);Wu=s(Gl,"This model is also a "),Cs=r(Gl,"A",{href:!0,rel:!0});var u_=i(Cs);Xu=s(u_,"tf.keras.Model"),u_.forEach(t),Hu=s(Gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gl.forEach(t),Qu=u(mt),y(Bo.$$.fragment,mt),Uu=u(mt),at=r(mt,"DIV",{class:!0});var kn=i(at);y(zs.$$.fragment,kn),Bu=u(kn),Zt=r(kn,"P",{});var Ga=i(Zt);Ru=s(Ga,"The "),La=r(Ga,"A",{href:!0});var m_=i(La);Vu=s(m_,"TFFlaubertWithLMHeadModel"),m_.forEach(t),Ku=s(Ga," forward method, overrides the "),Kr=r(Ga,"CODE",{});var f_=i(Kr);Yu=s(f_,"__call__"),f_.forEach(t),Gu=s(Ga," special method."),Ga.forEach(t),Ju=u(kn),y(Ro.$$.fragment,kn),Zu=u(kn),y(Vo.$$.fragment,kn),kn.forEach(t),mt.forEach(t),ll=u(o),eo=r(o,"H2",{class:!0});var Jl=i(eo);Ko=r(Jl,"A",{id:!0,class:!0,href:!0});var g_=i(Ko);Yr=r(g_,"SPAN",{});var __=i(Yr);y(qs.$$.fragment,__),__.forEach(t),g_.forEach(t),em=u(Jl),Gr=r(Jl,"SPAN",{});var b_=i(Gr);tm=s(b_,"TFFlaubertForSequenceClassification"),b_.forEach(t),Jl.forEach(t),dl=u(o),We=r(o,"DIV",{class:!0});var ft=i(We);y(Ls.$$.fragment,ft),om=u(ft),Jr=r(ft,"P",{});var k_=i(Jr);nm=s(k_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),k_.forEach(t),sm=u(ft),js=r(ft,"P",{});var Zl=i(js);am=s(Zl,"This model inherits from "),ja=r(Zl,"A",{href:!0});var T_=i(ja);rm=s(T_,"TFPreTrainedModel"),T_.forEach(t),im=s(Zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zl.forEach(t),lm=u(ft),Ps=r(ft,"P",{});var ed=i(Ps);dm=s(ed,"This model is also a "),Os=r(ed,"A",{href:!0,rel:!0});var w_=i(Os);cm=s(w_,"tf.keras.Model"),w_.forEach(t),pm=s(ed,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ed.forEach(t),hm=u(ft),y(Yo.$$.fragment,ft),um=u(ft),Ye=r(ft,"DIV",{class:!0});var Ct=i(Ye);y(As.$$.fragment,Ct),mm=u(Ct),to=r(Ct,"P",{});var Ja=i(to);fm=s(Ja,"The "),Pa=r(Ja,"A",{href:!0});var y_=i(Pa);gm=s(y_,"TFXLMForSequenceClassification"),y_.forEach(t),_m=s(Ja," forward method, overrides the "),Zr=r(Ja,"CODE",{});var v_=i(Zr);bm=s(v_,"__call__"),v_.forEach(t),km=s(Ja," special method."),Ja.forEach(t),Tm=u(Ct),y(Go.$$.fragment,Ct),wm=u(Ct),y(Jo.$$.fragment,Ct),ym=u(Ct),y(Zo.$$.fragment,Ct),Ct.forEach(t),ft.forEach(t),cl=u(o),oo=r(o,"H2",{class:!0});var td=i(oo);en=r(td,"A",{id:!0,class:!0,href:!0});var F_=i(en);ei=r(F_,"SPAN",{});var $_=i(ei);y(Ns.$$.fragment,$_),$_.forEach(t),F_.forEach(t),vm=u(td),ti=r(td,"SPAN",{});var M_=i(ti);Fm=s(M_,"TFFlaubertForMultipleChoice"),M_.forEach(t),td.forEach(t),pl=u(o),Xe=r(o,"DIV",{class:!0});var gt=i(Xe);y(Ss.$$.fragment,gt),$m=u(gt),oi=r(gt,"P",{});var x_=i(oi);Mm=s(x_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x_.forEach(t),xm=u(gt),Ds=r(gt,"P",{});var od=i(Ds);Em=s(od,"This model inherits from "),Oa=r(od,"A",{href:!0});var E_=i(Oa);Cm=s(E_,"TFPreTrainedModel"),E_.forEach(t),zm=s(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(t),qm=u(gt),Is=r(gt,"P",{});var nd=i(Is);Lm=s(nd,"This model is also a "),Ws=r(nd,"A",{href:!0,rel:!0});var C_=i(Ws);jm=s(C_,"tf.keras.Model"),C_.forEach(t),Pm=s(nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nd.forEach(t),Om=u(gt),y(tn.$$.fragment,gt),Am=u(gt),rt=r(gt,"DIV",{class:!0});var Tn=i(rt);y(Xs.$$.fragment,Tn),Nm=u(Tn),no=r(Tn,"P",{});var Za=i(no);Sm=s(Za,"The "),Aa=r(Za,"A",{href:!0});var z_=i(Aa);Dm=s(z_,"TFXLMForMultipleChoice"),z_.forEach(t),Im=s(Za," forward method, overrides the "),ni=r(Za,"CODE",{});var q_=i(ni);Wm=s(q_,"__call__"),q_.forEach(t),Xm=s(Za," special method."),Za.forEach(t),Hm=u(Tn),y(on.$$.fragment,Tn),Qm=u(Tn),y(nn.$$.fragment,Tn),Tn.forEach(t),gt.forEach(t),hl=u(o),so=r(o,"H2",{class:!0});var sd=i(so);sn=r(sd,"A",{id:!0,class:!0,href:!0});var L_=i(sn);si=r(L_,"SPAN",{});var j_=i(si);y(Hs.$$.fragment,j_),j_.forEach(t),L_.forEach(t),Um=u(sd),ai=r(sd,"SPAN",{});var P_=i(ai);Bm=s(P_,"TFFlaubertForTokenClassification"),P_.forEach(t),sd.forEach(t),ul=u(o),He=r(o,"DIV",{class:!0});var _t=i(He);y(Qs.$$.fragment,_t),Rm=u(_t),ri=r(_t,"P",{});var O_=i(ri);Vm=s(O_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O_.forEach(t),Km=u(_t),Us=r(_t,"P",{});var ad=i(Us);Ym=s(ad,"This model inherits from "),Na=r(ad,"A",{href:!0});var A_=i(Na);Gm=s(A_,"TFPreTrainedModel"),A_.forEach(t),Jm=s(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Zm=u(_t),Bs=r(_t,"P",{});var rd=i(Bs);ef=s(rd,"This model is also a "),Rs=r(rd,"A",{href:!0,rel:!0});var N_=i(Rs);tf=s(N_,"tf.keras.Model"),N_.forEach(t),of=s(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),nf=u(_t),y(an.$$.fragment,_t),sf=u(_t),Ge=r(_t,"DIV",{class:!0});var zt=i(Ge);y(Vs.$$.fragment,zt),af=u(zt),ao=r(zt,"P",{});var er=i(ao);rf=s(er,"The "),Sa=r(er,"A",{href:!0});var S_=i(Sa);lf=s(S_,"TFXLMForTokenClassification"),S_.forEach(t),df=s(er," forward method, overrides the "),ii=r(er,"CODE",{});var D_=i(ii);cf=s(D_,"__call__"),D_.forEach(t),pf=s(er," special method."),er.forEach(t),hf=u(zt),y(rn.$$.fragment,zt),uf=u(zt),y(ln.$$.fragment,zt),mf=u(zt),y(dn.$$.fragment,zt),zt.forEach(t),_t.forEach(t),ml=u(o),ro=r(o,"H2",{class:!0});var id=i(ro);cn=r(id,"A",{id:!0,class:!0,href:!0});var I_=i(cn);li=r(I_,"SPAN",{});var W_=i(li);y(Ks.$$.fragment,W_),W_.forEach(t),I_.forEach(t),ff=u(id),di=r(id,"SPAN",{});var X_=i(di);gf=s(X_,"TFFlaubertForQuestionAnsweringSimple"),X_.forEach(t),id.forEach(t),fl=u(o),Qe=r(o,"DIV",{class:!0});var bt=i(Qe);y(Ys.$$.fragment,bt),_f=u(bt),io=r(bt,"P",{});var tr=i(io);bf=s(tr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=r(tr,"CODE",{});var H_=i(ci);kf=s(H_,"span start logits"),H_.forEach(t),Tf=s(tr," and "),pi=r(tr,"CODE",{});var Q_=i(pi);wf=s(Q_,"span end logits"),Q_.forEach(t),yf=s(tr,")."),tr.forEach(t),vf=u(bt),Gs=r(bt,"P",{});var ld=i(Gs);Ff=s(ld,"This model inherits from "),Da=r(ld,"A",{href:!0});var U_=i(Da);$f=s(U_,"TFPreTrainedModel"),U_.forEach(t),Mf=s(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),xf=u(bt),Js=r(bt,"P",{});var dd=i(Js);Ef=s(dd,"This model is also a "),Zs=r(dd,"A",{href:!0,rel:!0});var B_=i(Zs);Cf=s(B_,"tf.keras.Model"),B_.forEach(t),zf=s(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),qf=u(bt),y(pn.$$.fragment,bt),Lf=u(bt),Je=r(bt,"DIV",{class:!0});var qt=i(Je);y(ea.$$.fragment,qt),jf=u(qt),lo=r(qt,"P",{});var or=i(lo);Pf=s(or,"The "),Ia=r(or,"A",{href:!0});var R_=i(Ia);Of=s(R_,"TFXLMForQuestionAnsweringSimple"),R_.forEach(t),Af=s(or," forward method, overrides the "),hi=r(or,"CODE",{});var V_=i(hi);Nf=s(V_,"__call__"),V_.forEach(t),Sf=s(or," special method."),or.forEach(t),Df=u(qt),y(hn.$$.fragment,qt),If=u(qt),y(un.$$.fragment,qt),Wf=u(qt),y(mn.$$.fragment,qt),qt.forEach(t),bt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(Xb)),_(p,"id","flaubert"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#flaubert"),_(c,"class","relative group"),_(J,"id","overview"),_(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(J,"href","#overview"),_(z,"class","relative group"),_(ee,"href","https://arxiv.org/abs/1912.05372"),_(ee,"rel","nofollow"),_(D,"href","https://huggingface.co/formiel"),_(D,"rel","nofollow"),_(I,"href","https://github.com/getalp/Flaubert"),_(I,"rel","nofollow"),_(S,"id","transformers.FlaubertConfig"),_(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(S,"href","#transformers.FlaubertConfig"),_(G,"class","relative group"),_(W,"href","/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertModel"),_(X,"href","/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(te,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),_(te,"rel","nofollow"),_(ra,"href","/docs/transformers/pr_16658/en/main_classes/configuration#transformers.PretrainedConfig"),_(ia,"href","/docs/transformers/pr_16658/en/main_classes/configuration#transformers.PretrainedConfig"),_(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(uo,"id","transformers.FlaubertTokenizer"),_(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(uo,"href","#transformers.FlaubertTokenizer"),_(jt,"class","relative group"),_(la,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(mo,"id","transformers.FlaubertModel"),_(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(mo,"href","#transformers.FlaubertModel"),_(Pt,"class","relative group"),_(da,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Cn,"rel","nofollow"),_(ca,"href","/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.FlaubertModel"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_o,"id","transformers.FlaubertWithLMHeadModel"),_(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_o,"href","#transformers.FlaubertWithLMHeadModel"),_(At,"class","relative group"),_(pa,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(On,"rel","nofollow"),_(ha,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(ua,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wo,"id","transformers.FlaubertForSequenceClassification"),_(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(wo,"href","#transformers.FlaubertForSequenceClassification"),_(St,"class","relative group"),_(ma,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xn,"rel","nofollow"),_(fa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(ga,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(xo,"id","transformers.FlaubertForMultipleChoice"),_(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(xo,"href","#transformers.FlaubertForMultipleChoice"),_(It,"class","relative group"),_(_a,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Kn,"rel","nofollow"),_(ba,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ka,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zo,"id","transformers.FlaubertForTokenClassification"),_(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zo,"href","#transformers.FlaubertForTokenClassification"),_(Xt,"class","relative group"),_(Ta,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(os,"rel","nofollow"),_(wa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(ya,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Po,"id","transformers.FlaubertForQuestionAnsweringSimple"),_(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Po,"href","#transformers.FlaubertForQuestionAnsweringSimple"),_(Qt,"class","relative group"),_(va,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ds,"rel","nofollow"),_(Fa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_($a,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(So,"id","transformers.FlaubertForQuestionAnswering"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#transformers.FlaubertForQuestionAnswering"),_(Rt,"class","relative group"),_(Ma,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),_(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(gs,"rel","nofollow"),_(xa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(Ea,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"id","transformers.TFFlaubertModel"),_(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wo,"href","#transformers.TFFlaubertModel"),_(Yt,"class","relative group"),_(Ca,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),_(vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(vs,"rel","nofollow"),_(za,"href","/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.TFFlaubertWithLMHeadModel"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.TFFlaubertWithLMHeadModel"),_(Jt,"class","relative group"),_(qa,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),_(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Cs,"rel","nofollow"),_(La,"href","/docs/transformers/pr_16658/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"id","transformers.TFFlaubertForSequenceClassification"),_(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ko,"href","#transformers.TFFlaubertForSequenceClassification"),_(eo,"class","relative group"),_(ja,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),_(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Os,"rel","nofollow"),_(Pa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.TFFlaubertForMultipleChoice"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.TFFlaubertForMultipleChoice"),_(oo,"class","relative group"),_(Oa,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ws,"rel","nofollow"),_(Aa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.TFFlaubertForTokenClassification"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.TFFlaubertForTokenClassification"),_(so,"class","relative group"),_(Na,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),_(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Rs,"rel","nofollow"),_(Sa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),_(ro,"class","relative group"),_(Da,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),_(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Zs,"rel","nofollow"),_(Ia,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),b(o,g,T),b(o,c,T),e(c,p),e(p,k),v(l,k,null),e(c,m),e(c,C),e(C,ce),b(o,K,T),b(o,z,T),e(z,J),e(J,H),v(Z,H,null),e(z,pe),e(z,Q),e(Q,he),b(o,re,T),b(o,R,T),e(R,A),e(R,ee),e(ee,Y),e(R,q),b(o,j,T),b(o,oe,T),e(oe,B),b(o,ie,T),b(o,ne,T),e(ne,U),e(U,ue),b(o,le,T),b(o,L,T),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(L,be),b(o,O,T),b(o,G,T),e(G,S),e(S,se),v(f,se,null),e(G,E),e(G,V),e(V,Fe),b(o,Te,T),b(o,P,T),v(ke,P,null),e(P,$e),e(P,ae),e(ae,N),e(ae,W),e(W,Me),e(ae,xe),e(ae,X),e(X,Ee),e(ae,Ce),e(ae,te),e(te,ze),e(ae,cd),e(P,pd),e(P,Lt),e(Lt,hd),e(Lt,ra),e(ra,ud),e(Lt,md),e(Lt,ia),e(ia,fd),e(Lt,gd),b(o,Xi,T),b(o,jt,T),e(jt,uo),e(uo,nr),v(wn,nr,null),e(jt,_d),e(jt,sr),e(sr,bd),b(o,Hi,T),b(o,et,T),v(yn,et,null),e(et,kd),e(et,ar),e(ar,Td),e(et,wd),e(et,kt),e(kt,rr),e(rr,yd),e(kt,vd),e(kt,ir),e(ir,Fd),e(kt,$d),e(kt,Tt),e(Tt,Md),e(Tt,lr),e(lr,xd),e(Tt,Ed),e(Tt,dr),e(dr,Cd),e(Tt,zd),e(Tt,cr),e(cr,qd),e(Tt,Ld),e(kt,jd),e(kt,vn),e(vn,Pd),e(vn,pr),e(pr,Od),e(vn,Ad),e(et,Nd),e(et,Fn),e(Fn,Sd),e(Fn,la),e(la,Dd),e(Fn,Id),b(o,Qi,T),b(o,Pt,T),e(Pt,mo),e(mo,hr),v($n,hr,null),e(Pt,Wd),e(Pt,ur),e(ur,Xd),b(o,Ui,T),b(o,Be,T),v(Mn,Be,null),e(Be,Hd),e(Be,mr),e(mr,Qd),e(Be,Ud),e(Be,xn),e(xn,Bd),e(xn,da),e(da,Rd),e(xn,Vd),e(Be,Kd),e(Be,En),e(En,Yd),e(En,Cn),e(Cn,Gd),e(En,Jd),e(Be,Zd),e(Be,tt),v(zn,tt,null),e(tt,ec),e(tt,Ot),e(Ot,tc),e(Ot,ca),e(ca,oc),e(Ot,nc),e(Ot,fr),e(fr,sc),e(Ot,ac),e(tt,rc),v(fo,tt,null),e(tt,ic),v(go,tt,null),b(o,Bi,T),b(o,At,T),e(At,_o),e(_o,gr),v(qn,gr,null),e(At,lc),e(At,_r),e(_r,dc),b(o,Ri,T),b(o,je,T),v(Ln,je,null),e(je,cc),e(je,br),e(br,pc),e(je,hc),e(je,jn),e(jn,uc),e(jn,pa),e(pa,mc),e(jn,fc),e(je,gc),e(je,Pn),e(Pn,_c),e(Pn,On),e(On,bc),e(Pn,kc),e(je,Tc),e(je,An),e(An,wc),e(An,ha),e(ha,yc),e(An,vc),e(je,Fc),e(je,Re),v(Nn,Re,null),e(Re,$c),e(Re,Nt),e(Nt,Mc),e(Nt,ua),e(ua,xc),e(Nt,Ec),e(Nt,kr),e(kr,Cc),e(Nt,zc),e(Re,qc),v(bo,Re,null),e(Re,Lc),v(ko,Re,null),e(Re,jc),v(To,Re,null),b(o,Vi,T),b(o,St,T),e(St,wo),e(wo,Tr),v(Sn,Tr,null),e(St,Pc),e(St,wr),e(wr,Oc),b(o,Ki,T),b(o,Pe,T),v(Dn,Pe,null),e(Pe,Ac),e(Pe,yr),e(yr,Nc),e(Pe,Sc),e(Pe,In),e(In,Dc),e(In,ma),e(ma,Ic),e(In,Wc),e(Pe,Xc),e(Pe,Wn),e(Wn,Hc),e(Wn,Xn),e(Xn,Qc),e(Wn,Uc),e(Pe,Bc),e(Pe,Hn),e(Hn,Rc),e(Hn,fa),e(fa,Vc),e(Hn,Kc),e(Pe,Yc),e(Pe,Le),v(Qn,Le,null),e(Le,Gc),e(Le,Dt),e(Dt,Jc),e(Dt,ga),e(ga,Zc),e(Dt,ep),e(Dt,vr),e(vr,tp),e(Dt,op),e(Le,np),v(yo,Le,null),e(Le,sp),v(vo,Le,null),e(Le,ap),v(Fo,Le,null),e(Le,rp),v($o,Le,null),e(Le,ip),v(Mo,Le,null),b(o,Yi,T),b(o,It,T),e(It,xo),e(xo,Fr),v(Un,Fr,null),e(It,lp),e(It,$r),e($r,dp),b(o,Gi,T),b(o,Oe,T),v(Bn,Oe,null),e(Oe,cp),e(Oe,Mr),e(Mr,pp),e(Oe,hp),e(Oe,Rn),e(Rn,up),e(Rn,_a),e(_a,mp),e(Rn,fp),e(Oe,gp),e(Oe,Vn),e(Vn,_p),e(Vn,Kn),e(Kn,bp),e(Vn,kp),e(Oe,Tp),e(Oe,Yn),e(Yn,wp),e(Yn,ba),e(ba,yp),e(Yn,vp),e(Oe,Fp),e(Oe,ot),v(Gn,ot,null),e(ot,$p),e(ot,Wt),e(Wt,Mp),e(Wt,ka),e(ka,xp),e(Wt,Ep),e(Wt,xr),e(xr,Cp),e(Wt,zp),e(ot,qp),v(Eo,ot,null),e(ot,Lp),v(Co,ot,null),b(o,Ji,T),b(o,Xt,T),e(Xt,zo),e(zo,Er),v(Jn,Er,null),e(Xt,jp),e(Xt,Cr),e(Cr,Pp),b(o,Zi,T),b(o,Ae,T),v(Zn,Ae,null),e(Ae,Op),e(Ae,zr),e(zr,Ap),e(Ae,Np),e(Ae,es),e(es,Sp),e(es,Ta),e(Ta,Dp),e(es,Ip),e(Ae,Wp),e(Ae,ts),e(ts,Xp),e(ts,os),e(os,Hp),e(ts,Qp),e(Ae,Up),e(Ae,ns),e(ns,Bp),e(ns,wa),e(wa,Rp),e(ns,Vp),e(Ae,Kp),e(Ae,Ve),v(ss,Ve,null),e(Ve,Yp),e(Ve,Ht),e(Ht,Gp),e(Ht,ya),e(ya,Jp),e(Ht,Zp),e(Ht,qr),e(qr,eh),e(Ht,th),e(Ve,oh),v(qo,Ve,null),e(Ve,nh),v(Lo,Ve,null),e(Ve,sh),v(jo,Ve,null),b(o,el,T),b(o,Qt,T),e(Qt,Po),e(Po,Lr),v(as,Lr,null),e(Qt,ah),e(Qt,jr),e(jr,rh),b(o,tl,T),b(o,Ne,T),v(rs,Ne,null),e(Ne,ih),e(Ne,Ut),e(Ut,lh),e(Ut,Pr),e(Pr,dh),e(Ut,ch),e(Ut,Or),e(Or,ph),e(Ut,hh),e(Ne,uh),e(Ne,is),e(is,mh),e(is,va),e(va,fh),e(is,gh),e(Ne,_h),e(Ne,ls),e(ls,bh),e(ls,ds),e(ds,kh),e(ls,Th),e(Ne,wh),e(Ne,cs),e(cs,yh),e(cs,Fa),e(Fa,vh),e(cs,Fh),e(Ne,$h),e(Ne,Ke),v(ps,Ke,null),e(Ke,Mh),e(Ke,Bt),e(Bt,xh),e(Bt,$a),e($a,Eh),e(Bt,Ch),e(Bt,Ar),e(Ar,zh),e(Bt,qh),e(Ke,Lh),v(Oo,Ke,null),e(Ke,jh),v(Ao,Ke,null),e(Ke,Ph),v(No,Ke,null),b(o,ol,T),b(o,Rt,T),e(Rt,So),e(So,Nr),v(hs,Nr,null),e(Rt,Oh),e(Rt,Sr),e(Sr,Ah),b(o,nl,T),b(o,Se,T),v(us,Se,null),e(Se,Nh),e(Se,Vt),e(Vt,Sh),e(Vt,Dr),e(Dr,Dh),e(Vt,Ih),e(Vt,Ir),e(Ir,Wh),e(Vt,Xh),e(Se,Hh),e(Se,ms),e(ms,Qh),e(ms,Ma),e(Ma,Uh),e(ms,Bh),e(Se,Rh),e(Se,fs),e(fs,Vh),e(fs,gs),e(gs,Kh),e(fs,Yh),e(Se,Gh),e(Se,_s),e(_s,Jh),e(_s,xa),e(xa,Zh),e(_s,eu),e(Se,tu),e(Se,nt),v(bs,nt,null),e(nt,ou),e(nt,Kt),e(Kt,nu),e(Kt,Ea),e(Ea,su),e(Kt,au),e(Kt,Wr),e(Wr,ru),e(Kt,iu),e(nt,lu),v(Do,nt,null),e(nt,du),v(Io,nt,null),b(o,sl,T),b(o,Yt,T),e(Yt,Wo),e(Wo,Xr),v(ks,Xr,null),e(Yt,cu),e(Yt,Hr),e(Hr,pu),b(o,al,T),b(o,De,T),v(Ts,De,null),e(De,hu),e(De,Qr),e(Qr,uu),e(De,mu),e(De,ws),e(ws,fu),e(ws,Ca),e(Ca,gu),e(ws,_u),e(De,bu),e(De,ys),e(ys,ku),e(ys,vs),e(vs,Tu),e(ys,wu),e(De,yu),v(Xo,De,null),e(De,vu),e(De,st),v(Fs,st,null),e(st,Fu),e(st,Gt),e(Gt,$u),e(Gt,za),e(za,Mu),e(Gt,xu),e(Gt,Ur),e(Ur,Eu),e(Gt,Cu),e(st,zu),v(Ho,st,null),e(st,qu),v(Qo,st,null),b(o,rl,T),b(o,Jt,T),e(Jt,Uo),e(Uo,Br),v($s,Br,null),e(Jt,Lu),e(Jt,Rr),e(Rr,ju),b(o,il,T),b(o,Ie,T),v(Ms,Ie,null),e(Ie,Pu),e(Ie,Vr),e(Vr,Ou),e(Ie,Au),e(Ie,xs),e(xs,Nu),e(xs,qa),e(qa,Su),e(xs,Du),e(Ie,Iu),e(Ie,Es),e(Es,Wu),e(Es,Cs),e(Cs,Xu),e(Es,Hu),e(Ie,Qu),v(Bo,Ie,null),e(Ie,Uu),e(Ie,at),v(zs,at,null),e(at,Bu),e(at,Zt),e(Zt,Ru),e(Zt,La),e(La,Vu),e(Zt,Ku),e(Zt,Kr),e(Kr,Yu),e(Zt,Gu),e(at,Ju),v(Ro,at,null),e(at,Zu),v(Vo,at,null),b(o,ll,T),b(o,eo,T),e(eo,Ko),e(Ko,Yr),v(qs,Yr,null),e(eo,em),e(eo,Gr),e(Gr,tm),b(o,dl,T),b(o,We,T),v(Ls,We,null),e(We,om),e(We,Jr),e(Jr,nm),e(We,sm),e(We,js),e(js,am),e(js,ja),e(ja,rm),e(js,im),e(We,lm),e(We,Ps),e(Ps,dm),e(Ps,Os),e(Os,cm),e(Ps,pm),e(We,hm),v(Yo,We,null),e(We,um),e(We,Ye),v(As,Ye,null),e(Ye,mm),e(Ye,to),e(to,fm),e(to,Pa),e(Pa,gm),e(to,_m),e(to,Zr),e(Zr,bm),e(to,km),e(Ye,Tm),v(Go,Ye,null),e(Ye,wm),v(Jo,Ye,null),e(Ye,ym),v(Zo,Ye,null),b(o,cl,T),b(o,oo,T),e(oo,en),e(en,ei),v(Ns,ei,null),e(oo,vm),e(oo,ti),e(ti,Fm),b(o,pl,T),b(o,Xe,T),v(Ss,Xe,null),e(Xe,$m),e(Xe,oi),e(oi,Mm),e(Xe,xm),e(Xe,Ds),e(Ds,Em),e(Ds,Oa),e(Oa,Cm),e(Ds,zm),e(Xe,qm),e(Xe,Is),e(Is,Lm),e(Is,Ws),e(Ws,jm),e(Is,Pm),e(Xe,Om),v(tn,Xe,null),e(Xe,Am),e(Xe,rt),v(Xs,rt,null),e(rt,Nm),e(rt,no),e(no,Sm),e(no,Aa),e(Aa,Dm),e(no,Im),e(no,ni),e(ni,Wm),e(no,Xm),e(rt,Hm),v(on,rt,null),e(rt,Qm),v(nn,rt,null),b(o,hl,T),b(o,so,T),e(so,sn),e(sn,si),v(Hs,si,null),e(so,Um),e(so,ai),e(ai,Bm),b(o,ul,T),b(o,He,T),v(Qs,He,null),e(He,Rm),e(He,ri),e(ri,Vm),e(He,Km),e(He,Us),e(Us,Ym),e(Us,Na),e(Na,Gm),e(Us,Jm),e(He,Zm),e(He,Bs),e(Bs,ef),e(Bs,Rs),e(Rs,tf),e(Bs,of),e(He,nf),v(an,He,null),e(He,sf),e(He,Ge),v(Vs,Ge,null),e(Ge,af),e(Ge,ao),e(ao,rf),e(ao,Sa),e(Sa,lf),e(ao,df),e(ao,ii),e(ii,cf),e(ao,pf),e(Ge,hf),v(rn,Ge,null),e(Ge,uf),v(ln,Ge,null),e(Ge,mf),v(dn,Ge,null),b(o,ml,T),b(o,ro,T),e(ro,cn),e(cn,li),v(Ks,li,null),e(ro,ff),e(ro,di),e(di,gf),b(o,fl,T),b(o,Qe,T),v(Ys,Qe,null),e(Qe,_f),e(Qe,io),e(io,bf),e(io,ci),e(ci,kf),e(io,Tf),e(io,pi),e(pi,wf),e(io,yf),e(Qe,vf),e(Qe,Gs),e(Gs,Ff),e(Gs,Da),e(Da,$f),e(Gs,Mf),e(Qe,xf),e(Qe,Js),e(Js,Ef),e(Js,Zs),e(Zs,Cf),e(Js,zf),e(Qe,qf),v(pn,Qe,null),e(Qe,Lf),e(Qe,Je),v(ea,Je,null),e(Je,jf),e(Je,lo),e(lo,Pf),e(lo,Ia),e(Ia,Of),e(lo,Af),e(lo,hi),e(hi,Nf),e(lo,Sf),e(Je,Df),v(hn,Je,null),e(Je,If),v(un,Je,null),e(Je,Wf),v(mn,Je,null),gl=!0},p(o,[T]){const ta={};T&2&&(ta.$$scope={dirty:T,ctx:o}),fo.$set(ta);const ui={};T&2&&(ui.$$scope={dirty:T,ctx:o}),go.$set(ui);const mi={};T&2&&(mi.$$scope={dirty:T,ctx:o}),bo.$set(mi);const fi={};T&2&&(fi.$$scope={dirty:T,ctx:o}),ko.$set(fi);const oa={};T&2&&(oa.$$scope={dirty:T,ctx:o}),To.$set(oa);const gi={};T&2&&(gi.$$scope={dirty:T,ctx:o}),yo.$set(gi);const _i={};T&2&&(_i.$$scope={dirty:T,ctx:o}),vo.$set(_i);const bi={};T&2&&(bi.$$scope={dirty:T,ctx:o}),Fo.$set(bi);const na={};T&2&&(na.$$scope={dirty:T,ctx:o}),$o.$set(na);const ki={};T&2&&(ki.$$scope={dirty:T,ctx:o}),Mo.$set(ki);const Ti={};T&2&&(Ti.$$scope={dirty:T,ctx:o}),Eo.$set(Ti);const wi={};T&2&&(wi.$$scope={dirty:T,ctx:o}),Co.$set(wi);const yi={};T&2&&(yi.$$scope={dirty:T,ctx:o}),qo.$set(yi);const co={};T&2&&(co.$$scope={dirty:T,ctx:o}),Lo.$set(co);const vi={};T&2&&(vi.$$scope={dirty:T,ctx:o}),jo.$set(vi);const Fi={};T&2&&(Fi.$$scope={dirty:T,ctx:o}),Oo.$set(Fi);const sa={};T&2&&(sa.$$scope={dirty:T,ctx:o}),Ao.$set(sa);const $i={};T&2&&($i.$$scope={dirty:T,ctx:o}),No.$set($i);const Mi={};T&2&&(Mi.$$scope={dirty:T,ctx:o}),Do.$set(Mi);const xi={};T&2&&(xi.$$scope={dirty:T,ctx:o}),Io.$set(xi);const po={};T&2&&(po.$$scope={dirty:T,ctx:o}),Xo.$set(po);const wt={};T&2&&(wt.$$scope={dirty:T,ctx:o}),Ho.$set(wt);const Ei={};T&2&&(Ei.$$scope={dirty:T,ctx:o}),Qo.$set(Ei);const Ci={};T&2&&(Ci.$$scope={dirty:T,ctx:o}),Bo.$set(Ci);const zi={};T&2&&(zi.$$scope={dirty:T,ctx:o}),Ro.$set(zi);const ho={};T&2&&(ho.$$scope={dirty:T,ctx:o}),Vo.$set(ho);const qi={};T&2&&(qi.$$scope={dirty:T,ctx:o}),Yo.$set(qi);const Li={};T&2&&(Li.$$scope={dirty:T,ctx:o}),Go.$set(Li);const aa={};T&2&&(aa.$$scope={dirty:T,ctx:o}),Jo.$set(aa);const ji={};T&2&&(ji.$$scope={dirty:T,ctx:o}),Zo.$set(ji);const Pi={};T&2&&(Pi.$$scope={dirty:T,ctx:o}),tn.$set(Pi);const Oi={};T&2&&(Oi.$$scope={dirty:T,ctx:o}),on.$set(Oi);const yt={};T&2&&(yt.$$scope={dirty:T,ctx:o}),nn.$set(yt);const Ai={};T&2&&(Ai.$$scope={dirty:T,ctx:o}),an.$set(Ai);const vt={};T&2&&(vt.$$scope={dirty:T,ctx:o}),rn.$set(vt);const Ni={};T&2&&(Ni.$$scope={dirty:T,ctx:o}),ln.$set(Ni);const Si={};T&2&&(Si.$$scope={dirty:T,ctx:o}),dn.$set(Si);const Ft={};T&2&&(Ft.$$scope={dirty:T,ctx:o}),pn.$set(Ft);const Di={};T&2&&(Di.$$scope={dirty:T,ctx:o}),hn.$set(Di);const Ii={};T&2&&(Ii.$$scope={dirty:T,ctx:o}),un.$set(Ii);const Wi={};T&2&&(Wi.$$scope={dirty:T,ctx:o}),mn.$set(Wi)},i(o){gl||(F(l.$$.fragment,o),F(Z.$$.fragment,o),F(f.$$.fragment,o),F(ke.$$.fragment,o),F(wn.$$.fragment,o),F(yn.$$.fragment,o),F($n.$$.fragment,o),F(Mn.$$.fragment,o),F(zn.$$.fragment,o),F(fo.$$.fragment,o),F(go.$$.fragment,o),F(qn.$$.fragment,o),F(Ln.$$.fragment,o),F(Nn.$$.fragment,o),F(bo.$$.fragment,o),F(ko.$$.fragment,o),F(To.$$.fragment,o),F(Sn.$$.fragment,o),F(Dn.$$.fragment,o),F(Qn.$$.fragment,o),F(yo.$$.fragment,o),F(vo.$$.fragment,o),F(Fo.$$.fragment,o),F($o.$$.fragment,o),F(Mo.$$.fragment,o),F(Un.$$.fragment,o),F(Bn.$$.fragment,o),F(Gn.$$.fragment,o),F(Eo.$$.fragment,o),F(Co.$$.fragment,o),F(Jn.$$.fragment,o),F(Zn.$$.fragment,o),F(ss.$$.fragment,o),F(qo.$$.fragment,o),F(Lo.$$.fragment,o),F(jo.$$.fragment,o),F(as.$$.fragment,o),F(rs.$$.fragment,o),F(ps.$$.fragment,o),F(Oo.$$.fragment,o),F(Ao.$$.fragment,o),F(No.$$.fragment,o),F(hs.$$.fragment,o),F(us.$$.fragment,o),F(bs.$$.fragment,o),F(Do.$$.fragment,o),F(Io.$$.fragment,o),F(ks.$$.fragment,o),F(Ts.$$.fragment,o),F(Xo.$$.fragment,o),F(Fs.$$.fragment,o),F(Ho.$$.fragment,o),F(Qo.$$.fragment,o),F($s.$$.fragment,o),F(Ms.$$.fragment,o),F(Bo.$$.fragment,o),F(zs.$$.fragment,o),F(Ro.$$.fragment,o),F(Vo.$$.fragment,o),F(qs.$$.fragment,o),F(Ls.$$.fragment,o),F(Yo.$$.fragment,o),F(As.$$.fragment,o),F(Go.$$.fragment,o),F(Jo.$$.fragment,o),F(Zo.$$.fragment,o),F(Ns.$$.fragment,o),F(Ss.$$.fragment,o),F(tn.$$.fragment,o),F(Xs.$$.fragment,o),F(on.$$.fragment,o),F(nn.$$.fragment,o),F(Hs.$$.fragment,o),F(Qs.$$.fragment,o),F(an.$$.fragment,o),F(Vs.$$.fragment,o),F(rn.$$.fragment,o),F(ln.$$.fragment,o),F(dn.$$.fragment,o),F(Ks.$$.fragment,o),F(Ys.$$.fragment,o),F(pn.$$.fragment,o),F(ea.$$.fragment,o),F(hn.$$.fragment,o),F(un.$$.fragment,o),F(mn.$$.fragment,o),gl=!0)},o(o){$(l.$$.fragment,o),$(Z.$$.fragment,o),$(f.$$.fragment,o),$(ke.$$.fragment,o),$(wn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(fo.$$.fragment,o),$(go.$$.fragment,o),$(qn.$$.fragment,o),$(Ln.$$.fragment,o),$(Nn.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(To.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Qn.$$.fragment,o),$(yo.$$.fragment,o),$(vo.$$.fragment,o),$(Fo.$$.fragment,o),$($o.$$.fragment,o),$(Mo.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(Gn.$$.fragment,o),$(Eo.$$.fragment,o),$(Co.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ss.$$.fragment,o),$(qo.$$.fragment,o),$(Lo.$$.fragment,o),$(jo.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(ps.$$.fragment,o),$(Oo.$$.fragment,o),$(Ao.$$.fragment,o),$(No.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(bs.$$.fragment,o),$(Do.$$.fragment,o),$(Io.$$.fragment,o),$(ks.$$.fragment,o),$(Ts.$$.fragment,o),$(Xo.$$.fragment,o),$(Fs.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$($s.$$.fragment,o),$(Ms.$$.fragment,o),$(Bo.$$.fragment,o),$(zs.$$.fragment,o),$(Ro.$$.fragment,o),$(Vo.$$.fragment,o),$(qs.$$.fragment,o),$(Ls.$$.fragment,o),$(Yo.$$.fragment,o),$(As.$$.fragment,o),$(Go.$$.fragment,o),$(Jo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ns.$$.fragment,o),$(Ss.$$.fragment,o),$(tn.$$.fragment,o),$(Xs.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(an.$$.fragment,o),$(Vs.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Ks.$$.fragment,o),$(Ys.$$.fragment,o),$(pn.$$.fragment,o),$(ea.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(mn.$$.fragment,o),gl=!1},d(o){t(d),o&&t(g),o&&t(c),M(l),o&&t(K),o&&t(z),M(Z),o&&t(re),o&&t(R),o&&t(j),o&&t(oe),o&&t(ie),o&&t(ne),o&&t(le),o&&t(L),o&&t(O),o&&t(G),M(f),o&&t(Te),o&&t(P),M(ke),o&&t(Xi),o&&t(jt),M(wn),o&&t(Hi),o&&t(et),M(yn),o&&t(Qi),o&&t(Pt),M($n),o&&t(Ui),o&&t(Be),M(Mn),M(zn),M(fo),M(go),o&&t(Bi),o&&t(At),M(qn),o&&t(Ri),o&&t(je),M(Ln),M(Nn),M(bo),M(ko),M(To),o&&t(Vi),o&&t(St),M(Sn),o&&t(Ki),o&&t(Pe),M(Dn),M(Qn),M(yo),M(vo),M(Fo),M($o),M(Mo),o&&t(Yi),o&&t(It),M(Un),o&&t(Gi),o&&t(Oe),M(Bn),M(Gn),M(Eo),M(Co),o&&t(Ji),o&&t(Xt),M(Jn),o&&t(Zi),o&&t(Ae),M(Zn),M(ss),M(qo),M(Lo),M(jo),o&&t(el),o&&t(Qt),M(as),o&&t(tl),o&&t(Ne),M(rs),M(ps),M(Oo),M(Ao),M(No),o&&t(ol),o&&t(Rt),M(hs),o&&t(nl),o&&t(Se),M(us),M(bs),M(Do),M(Io),o&&t(sl),o&&t(Yt),M(ks),o&&t(al),o&&t(De),M(Ts),M(Xo),M(Fs),M(Ho),M(Qo),o&&t(rl),o&&t(Jt),M($s),o&&t(il),o&&t(Ie),M(Ms),M(Bo),M(zs),M(Ro),M(Vo),o&&t(ll),o&&t(eo),M(qs),o&&t(dl),o&&t(We),M(Ls),M(Yo),M(As),M(Go),M(Jo),M(Zo),o&&t(cl),o&&t(oo),M(Ns),o&&t(pl),o&&t(Xe),M(Ss),M(tn),M(Xs),M(on),M(nn),o&&t(hl),o&&t(so),M(Hs),o&&t(ul),o&&t(He),M(Qs),M(an),M(Vs),M(rn),M(ln),M(dn),o&&t(ml),o&&t(ro),M(Ks),o&&t(fl),o&&t(Qe),M(Ys),M(pn),M(ea),M(hn),M(un),M(mn)}}}const Xb={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Hb(x){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yb extends K_{constructor(d){super();Y_(this,d,Hb,Wb,G_,{})}}export{Yb as default,Xb as metadata};
