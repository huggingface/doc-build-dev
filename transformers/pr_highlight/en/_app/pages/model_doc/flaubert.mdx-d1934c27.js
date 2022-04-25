import{S as U_,i as R_,s as B_,e as a,k as h,w as v,t as n,M as V_,c as r,d as t,m as u,a as i,x as w,h as s,b as _,F as e,g as b,y as F,q as y,o as $,B as M,v as Y_,L as Fe}from"../../chunks/vendor-6b77c823.js";import{T as qe}from"../../chunks/Tip-39098574.js";import{D as ie}from"../../chunks/Docstring-1088f2fb.js";import{C as ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ue}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as we}from"../../chunks/ExampleCodeBlock-5212b321.js";function K_(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function G_(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function J_(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Z_(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function eb(x){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function tb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function ob(x){let d,g,c,p,k;return p=new ye({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function nb(x){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function sb(x){let d,g,c,p,k;return p=new ye({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ab(x){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function rb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function ib(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function lb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function db(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function cb(x){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function pb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function hb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ub(x){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function mb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function fb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function gb(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),le=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),de=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),ce=n("model(inputs)"),se=n("."),B=h(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=h(),q=a("ul"),j=a("li"),te=n("a single Tensor with "),R=a("code"),ae=n("input_ids"),oe=n(" only and nothing else: "),U=a("code"),pe=n("model(inputs_ids)"),re=h(),L=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),ue=n("model([input_ids, attention_mask])"),me=n(" or "),I=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),N=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var $e=i(k);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=u(V),z=r(V,"LI",{});var ve=i(z);le=s(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var Te=i(H);Z=s(Te,"tf.keras.Model.fit"),Te.forEach(t),de=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var Me=i(Q);ce=s(Me,"model(inputs)"),Me.forEach(t),se=s(P,"."),P.forEach(t),B=u(f),S=r(f,"P",{});var _e=i(S);ee=s(_e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e.forEach(t),K=u(f),q=r(f,"UL",{});var A=i(q);j=r(A,"LI",{});var W=i(j);te=s(W,"a single Tensor with "),R=r(W,"CODE",{});var xe=i(R);ae=s(xe,"input_ids"),xe.forEach(t),oe=s(W," only and nothing else: "),U=r(W,"CODE",{});var Ee=i(U);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),W.forEach(t),re=u(A),L=r(A,"LI",{});var X=i(L);he=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var ze=i(D);ue=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);fe=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),ge=u(A),N=r(A,"LI",{});var be=i(N);G=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(be,"CODE",{});var ke=i(O);ne=s(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),be.forEach(t),A.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,z),e(z,le),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,de),e(C,Q),e(Q,ce),e(C,se),b(f,B,E),b(f,S,E),e(S,ee),b(f,K,E),b(f,q,E),e(q,j),e(j,te),e(j,R),e(R,ae),e(j,oe),e(j,U),e(U,pe),e(q,re),e(q,L),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(q,ge),e(q,N),e(N,G),e(N,O),e(O,ne)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(S),f&&t(K),f&&t(q)}}}function _b(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function bb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function kb(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),le=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),de=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),ce=n("model(inputs)"),se=n("."),B=h(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=h(),q=a("ul"),j=a("li"),te=n("a single Tensor with "),R=a("code"),ae=n("input_ids"),oe=n(" only and nothing else: "),U=a("code"),pe=n("model(inputs_ids)"),re=h(),L=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),ue=n("model([input_ids, attention_mask])"),me=n(" or "),I=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),N=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var $e=i(k);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=u(V),z=r(V,"LI",{});var ve=i(z);le=s(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var Te=i(H);Z=s(Te,"tf.keras.Model.fit"),Te.forEach(t),de=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var Me=i(Q);ce=s(Me,"model(inputs)"),Me.forEach(t),se=s(P,"."),P.forEach(t),B=u(f),S=r(f,"P",{});var _e=i(S);ee=s(_e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e.forEach(t),K=u(f),q=r(f,"UL",{});var A=i(q);j=r(A,"LI",{});var W=i(j);te=s(W,"a single Tensor with "),R=r(W,"CODE",{});var xe=i(R);ae=s(xe,"input_ids"),xe.forEach(t),oe=s(W," only and nothing else: "),U=r(W,"CODE",{});var Ee=i(U);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),W.forEach(t),re=u(A),L=r(A,"LI",{});var X=i(L);he=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var ze=i(D);ue=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);fe=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),ge=u(A),N=r(A,"LI",{});var be=i(N);G=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(be,"CODE",{});var ke=i(O);ne=s(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),be.forEach(t),A.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,z),e(z,le),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,de),e(C,Q),e(Q,ce),e(C,se),b(f,B,E),b(f,S,E),e(S,ee),b(f,K,E),b(f,q,E),e(q,j),e(j,te),e(j,R),e(R,ae),e(j,oe),e(j,U),e(U,pe),e(q,re),e(q,L),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(q,ge),e(q,N),e(N,G),e(N,O),e(O,ne)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(S),f&&t(K),f&&t(q)}}}function Tb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function vb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function wb(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),le=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),de=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),ce=n("model(inputs)"),se=n("."),B=h(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=h(),q=a("ul"),j=a("li"),te=n("a single Tensor with "),R=a("code"),ae=n("input_ids"),oe=n(" only and nothing else: "),U=a("code"),pe=n("model(inputs_ids)"),re=h(),L=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),ue=n("model([input_ids, attention_mask])"),me=n(" or "),I=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),N=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var $e=i(k);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=u(V),z=r(V,"LI",{});var ve=i(z);le=s(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var Te=i(H);Z=s(Te,"tf.keras.Model.fit"),Te.forEach(t),de=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var Me=i(Q);ce=s(Me,"model(inputs)"),Me.forEach(t),se=s(P,"."),P.forEach(t),B=u(f),S=r(f,"P",{});var _e=i(S);ee=s(_e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e.forEach(t),K=u(f),q=r(f,"UL",{});var A=i(q);j=r(A,"LI",{});var W=i(j);te=s(W,"a single Tensor with "),R=r(W,"CODE",{});var xe=i(R);ae=s(xe,"input_ids"),xe.forEach(t),oe=s(W," only and nothing else: "),U=r(W,"CODE",{});var Ee=i(U);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),W.forEach(t),re=u(A),L=r(A,"LI",{});var X=i(L);he=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var ze=i(D);ue=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);fe=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),ge=u(A),N=r(A,"LI",{});var be=i(N);G=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(be,"CODE",{});var ke=i(O);ne=s(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),be.forEach(t),A.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,z),e(z,le),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,de),e(C,Q),e(Q,ce),e(C,se),b(f,B,E),b(f,S,E),e(S,ee),b(f,K,E),b(f,q,E),e(q,j),e(j,te),e(j,R),e(R,ae),e(j,oe),e(j,U),e(U,pe),e(q,re),e(q,L),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(q,ge),e(q,N),e(N,G),e(N,O),e(O,ne)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(S),f&&t(K),f&&t(q)}}}function Fb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function yb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function $b(x){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Mb(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),le=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),de=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),ce=n("model(inputs)"),se=n("."),B=h(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=h(),q=a("ul"),j=a("li"),te=n("a single Tensor with "),R=a("code"),ae=n("input_ids"),oe=n(" only and nothing else: "),U=a("code"),pe=n("model(inputs_ids)"),re=h(),L=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),ue=n("model([input_ids, attention_mask])"),me=n(" or "),I=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),N=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var $e=i(k);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=u(V),z=r(V,"LI",{});var ve=i(z);le=s(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var Te=i(H);Z=s(Te,"tf.keras.Model.fit"),Te.forEach(t),de=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var Me=i(Q);ce=s(Me,"model(inputs)"),Me.forEach(t),se=s(P,"."),P.forEach(t),B=u(f),S=r(f,"P",{});var _e=i(S);ee=s(_e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e.forEach(t),K=u(f),q=r(f,"UL",{});var A=i(q);j=r(A,"LI",{});var W=i(j);te=s(W,"a single Tensor with "),R=r(W,"CODE",{});var xe=i(R);ae=s(xe,"input_ids"),xe.forEach(t),oe=s(W," only and nothing else: "),U=r(W,"CODE",{});var Ee=i(U);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),W.forEach(t),re=u(A),L=r(A,"LI",{});var X=i(L);he=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var ze=i(D);ue=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);fe=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),ge=u(A),N=r(A,"LI",{});var be=i(N);G=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(be,"CODE",{});var ke=i(O);ne=s(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),be.forEach(t),A.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,z),e(z,le),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,de),e(C,Q),e(Q,ce),e(C,se),b(f,B,E),b(f,S,E),e(S,ee),b(f,K,E),b(f,q,E),e(q,j),e(j,te),e(j,R),e(R,ae),e(j,oe),e(j,U),e(U,pe),e(q,re),e(q,L),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(q,ge),e(q,N),e(N,G),e(N,O),e(O,ne)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(S),f&&t(K),f&&t(q)}}}function xb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Eb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function zb(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),le=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),de=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),ce=n("model(inputs)"),se=n("."),B=h(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=h(),q=a("ul"),j=a("li"),te=n("a single Tensor with "),R=a("code"),ae=n("input_ids"),oe=n(" only and nothing else: "),U=a("code"),pe=n("model(inputs_ids)"),re=h(),L=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),ue=n("model([input_ids, attention_mask])"),me=n(" or "),I=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),N=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var $e=i(k);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=u(V),z=r(V,"LI",{});var ve=i(z);le=s(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var Te=i(H);Z=s(Te,"tf.keras.Model.fit"),Te.forEach(t),de=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var Me=i(Q);ce=s(Me,"model(inputs)"),Me.forEach(t),se=s(P,"."),P.forEach(t),B=u(f),S=r(f,"P",{});var _e=i(S);ee=s(_e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e.forEach(t),K=u(f),q=r(f,"UL",{});var A=i(q);j=r(A,"LI",{});var W=i(j);te=s(W,"a single Tensor with "),R=r(W,"CODE",{});var xe=i(R);ae=s(xe,"input_ids"),xe.forEach(t),oe=s(W," only and nothing else: "),U=r(W,"CODE",{});var Ee=i(U);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),W.forEach(t),re=u(A),L=r(A,"LI",{});var X=i(L);he=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var ze=i(D);ue=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);fe=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),ge=u(A),N=r(A,"LI",{});var be=i(N);G=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(be,"CODE",{});var ke=i(O);ne=s(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),be.forEach(t),A.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,z),e(z,le),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,de),e(C,Q),e(Q,ce),e(C,se),b(f,B,E),b(f,S,E),e(S,ee),b(f,K,E),b(f,q,E),e(q,j),e(j,te),e(j,R),e(R,ae),e(j,oe),e(j,U),e(U,pe),e(q,re),e(q,L),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(q,ge),e(q,N),e(N,G),e(N,O),e(O,ne)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(S),f&&t(K),f&&t(q)}}}function Cb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function qb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Lb(x){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function jb(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),le=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),de=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),ce=n("model(inputs)"),se=n("."),B=h(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=h(),q=a("ul"),j=a("li"),te=n("a single Tensor with "),R=a("code"),ae=n("input_ids"),oe=n(" only and nothing else: "),U=a("code"),pe=n("model(inputs_ids)"),re=h(),L=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),ue=n("model([input_ids, attention_mask])"),me=n(" or "),I=a("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),N=a("li"),G=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var $e=i(k);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),m=u(V),z=r(V,"LI",{});var ve=i(z);le=s(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var Te=i(H);Z=s(Te,"tf.keras.Model.fit"),Te.forEach(t),de=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var Me=i(Q);ce=s(Me,"model(inputs)"),Me.forEach(t),se=s(P,"."),P.forEach(t),B=u(f),S=r(f,"P",{});var _e=i(S);ee=s(_e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e.forEach(t),K=u(f),q=r(f,"UL",{});var A=i(q);j=r(A,"LI",{});var W=i(j);te=s(W,"a single Tensor with "),R=r(W,"CODE",{});var xe=i(R);ae=s(xe,"input_ids"),xe.forEach(t),oe=s(W," only and nothing else: "),U=r(W,"CODE",{});var Ee=i(U);pe=s(Ee,"model(inputs_ids)"),Ee.forEach(t),W.forEach(t),re=u(A),L=r(A,"LI",{});var X=i(L);he=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var ze=i(D);ue=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),me=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);fe=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),ge=u(A),N=r(A,"LI",{});var be=i(N);G=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(be,"CODE",{});var ke=i(O);ne=s(ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ke.forEach(t),be.forEach(t),A.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,m),e(p,z),e(z,le),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,de),e(C,Q),e(Q,ce),e(C,se),b(f,B,E),b(f,S,E),e(S,ee),b(f,K,E),b(f,q,E),e(q,j),e(j,te),e(j,R),e(R,ae),e(j,oe),e(j,U),e(U,pe),e(q,re),e(q,L),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(q,ge),e(q,N),e(N,G),e(N,O),e(O,ne)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(S),f&&t(K),f&&t(q)}}}function Pb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Nb(x){let d,g,c,p,k;return p=new ye({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),k=!0},p:Fe,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Sb(x){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:Fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Ab(x){let d,g,c,p,k,l,m,z,le,Y,C,J,H,Z,de,Q,ce,se,B,S,ee,K,q,j,te,R,ae,oe,U,pe,re,L,he,D,ue,me,I,fe,ge,N,G,O,ne,f,E,V,$e,ve,P,Te,Me,_e,A,W,xe,Ee,X,ze,Ce,be,ke,ld,ra,dd,cd,ia,pd,hd,Wi,qt,ho,nr,Tn,ud,sr,md,Xi,et,vn,fd,ar,gd,_d,kt,rr,bd,kd,ir,Td,vd,Tt,wd,lr,Fd,yd,dr,$d,Md,cr,xd,Ed,zd,wn,Cd,pr,qd,Ld,jd,Fn,Pd,la,Nd,Sd,Hi,Lt,uo,hr,yn,Ad,ur,Od,Qi,Re,$n,Dd,mr,Id,Wd,Mn,Xd,da,Hd,Qd,Ud,xn,Rd,En,Bd,Vd,Yd,tt,zn,Kd,jt,Gd,ca,Jd,Zd,fr,ec,tc,oc,mo,nc,fo,Ui,Pt,go,gr,Cn,sc,_r,ac,Ri,je,qn,rc,br,ic,lc,Ln,dc,pa,cc,pc,hc,jn,uc,Pn,mc,fc,gc,Nn,_c,ha,bc,kc,Tc,Be,Sn,vc,Nt,wc,ua,Fc,yc,kr,$c,Mc,xc,_o,Ec,bo,zc,ko,Bi,St,To,Tr,An,Cc,vr,qc,Vi,Pe,On,Lc,wr,jc,Pc,Dn,Nc,ma,Sc,Ac,Oc,In,Dc,Wn,Ic,Wc,Xc,Xn,Hc,fa,Qc,Uc,Rc,Le,Hn,Bc,At,Vc,ga,Yc,Kc,Fr,Gc,Jc,Zc,vo,ep,wo,tp,Fo,op,yo,np,$o,Yi,Ot,Mo,yr,Qn,sp,$r,ap,Ki,Ne,Un,rp,Mr,ip,lp,Rn,dp,_a,cp,pp,hp,Bn,up,Vn,mp,fp,gp,Yn,_p,ba,bp,kp,Tp,ot,Kn,vp,Dt,wp,ka,Fp,yp,xr,$p,Mp,xp,xo,Ep,Eo,Gi,It,zo,Er,Gn,zp,zr,Cp,Ji,Se,Jn,qp,Cr,Lp,jp,Zn,Pp,Ta,Np,Sp,Ap,es,Op,ts,Dp,Ip,Wp,os,Xp,va,Hp,Qp,Up,Ve,ns,Rp,Wt,Bp,wa,Vp,Yp,qr,Kp,Gp,Jp,Co,Zp,qo,eh,Lo,Zi,Xt,jo,Lr,ss,th,jr,oh,el,Ae,as,nh,Ht,sh,Pr,ah,rh,Nr,ih,lh,dh,rs,ch,Fa,ph,hh,uh,is,mh,ls,fh,gh,_h,ds,bh,ya,kh,Th,vh,Ye,cs,wh,Qt,Fh,$a,yh,$h,Sr,Mh,xh,Eh,Po,zh,No,Ch,So,tl,Ut,Ao,Ar,ps,qh,Or,Lh,ol,Oe,hs,jh,Rt,Ph,Dr,Nh,Sh,Ir,Ah,Oh,Dh,us,Ih,Ma,Wh,Xh,Hh,ms,Qh,fs,Uh,Rh,Bh,gs,Vh,xa,Yh,Kh,Gh,nt,_s,Jh,Bt,Zh,Ea,eu,tu,Wr,ou,nu,su,Oo,au,Do,nl,Vt,Io,Xr,bs,ru,Hr,iu,sl,De,ks,lu,Qr,du,cu,Ts,pu,za,hu,uu,mu,vs,fu,ws,gu,_u,bu,Wo,ku,st,Fs,Tu,Yt,vu,Ca,wu,Fu,Ur,yu,$u,Mu,Xo,xu,Ho,al,Kt,Qo,Rr,ys,Eu,Br,zu,rl,Ie,$s,Cu,Vr,qu,Lu,Ms,ju,qa,Pu,Nu,Su,xs,Au,Es,Ou,Du,Iu,Uo,Wu,at,zs,Xu,Gt,Hu,La,Qu,Uu,Yr,Ru,Bu,Vu,Ro,Yu,Bo,il,Jt,Vo,Kr,Cs,Ku,Gr,Gu,ll,We,qs,Ju,Jr,Zu,em,Ls,tm,ja,om,nm,sm,js,am,Ps,rm,im,lm,Yo,dm,Ke,Ns,cm,Zt,pm,Pa,hm,um,Zr,mm,fm,gm,Ko,_m,Go,bm,Jo,dl,eo,Zo,ei,Ss,km,ti,Tm,cl,Xe,As,vm,oi,wm,Fm,Os,ym,Na,$m,Mm,xm,Ds,Em,Is,zm,Cm,qm,en,Lm,rt,Ws,jm,to,Pm,Sa,Nm,Sm,ni,Am,Om,Dm,tn,Im,on,pl,oo,nn,si,Xs,Wm,ai,Xm,hl,He,Hs,Hm,ri,Qm,Um,Qs,Rm,Aa,Bm,Vm,Ym,Us,Km,Rs,Gm,Jm,Zm,sn,ef,Ge,Bs,tf,no,of,Oa,nf,sf,ii,af,rf,lf,an,df,rn,cf,ln,ul,so,dn,li,Vs,pf,di,hf,ml,Qe,Ys,uf,ao,mf,ci,ff,gf,pi,_f,bf,kf,Ks,Tf,Da,vf,wf,Ff,Gs,yf,Js,$f,Mf,xf,cn,Ef,Je,Zs,zf,ro,Cf,Ia,qf,Lf,hi,jf,Pf,Nf,pn,Sf,hn,Af,un,fl;return l=new Ue({}),Z=new Ue({}),f=new Ue({}),Te=new ie({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"layerdrop",val:" = 0.0"},{name:"pre_norm",val:" = False"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/configuration_flaubert.py#L35"}}),Tn=new Ue({}),vn=new ie({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"do_lowercase",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/tokenization_flaubert.py#L79"}}),yn=new Ue({}),$n=new ie({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L134"}}),zn=new ie({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new qe({props:{$$slots:{default:[K_]},$$scope:{ctx:x}}}),fo=new we({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[G_]},$$scope:{ctx:x}}}),Cn=new Ue({}),qn=new ie({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L326"}}),Sn=new ie({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_xlm.py#L709",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new qe({props:{$$slots:{default:[J_]},$$scope:{ctx:x}}}),bo=new we({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[Z_]},$$scope:{ctx:x}}}),ko=new we({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[eb]},$$scope:{ctx:x}}}),An=new Ue({}),On=new ie({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L348"}}),Hn=new ie({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_xlm.py#L789",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new qe({props:{$$slots:{default:[tb]},$$scope:{ctx:x}}}),wo=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[ob]},$$scope:{ctx:x}}}),Fo=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[nb]},$$scope:{ctx:x}}}),yo=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[sb]},$$scope:{ctx:x}}}),$o=new we({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[ab]},$$scope:{ctx:x}}}),Qn=new Ue({}),Un=new ie({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L436"}}),Kn=new ie({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_xlm.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new qe({props:{$$slots:{default:[rb]},$$scope:{ctx:x}}}),Eo=new we({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[ib]},$$scope:{ctx:x}}}),Gn=new Ue({}),Jn=new ie({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L370"}}),ns=new ie({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_xlm.py#L1118",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new qe({props:{$$slots:{default:[lb]},$$scope:{ctx:x}}}),qo=new we({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[db]},$$scope:{ctx:x}}}),Lo=new we({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[cb]},$$scope:{ctx:x}}}),ss=new Ue({}),as=new ie({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L392"}}),cs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_xlm.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new qe({props:{$$slots:{default:[pb]},$$scope:{ctx:x}}}),No=new we({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[hb]},$$scope:{ctx:x}}}),So=new we({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[ub]},$$scope:{ctx:x}}}),ps=new Ue({}),hs=new ie({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_flaubert.py#L414"}}),_s=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_xlm.py#L995",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new qe({props:{$$slots:{default:[mb]},$$scope:{ctx:x}}}),Do=new we({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[fb]},$$scope:{ctx:x}}}),bs=new Ue({}),ks=new ie({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L233"}}),Wo=new qe({props:{$$slots:{default:[gb]},$$scope:{ctx:x}}}),Fs=new ie({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new qe({props:{$$slots:{default:[_b]},$$scope:{ctx:x}}}),Ho=new we({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[bb]},$$scope:{ctx:x}}}),ys=new Ue({}),$s=new ie({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L761"}}),Uo=new qe({props:{$$slots:{default:[kb]},$$scope:{ctx:x}}}),zs=new ie({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L788",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig"
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
`}}),Ro=new qe({props:{$$slots:{default:[Tb]},$$scope:{ctx:x}}}),Bo=new we({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[vb]},$$scope:{ctx:x}}}),Cs=new Ue({}),qs=new ie({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L853"}}),Yo=new qe({props:{$$slots:{default:[wb]},$$scope:{ctx:x}}}),Ns=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_tf_xlm.py#L896",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new qe({props:{$$slots:{default:[Fb]},$$scope:{ctx:x}}}),Go=new we({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[yb]},$$scope:{ctx:x}}}),Jo=new we({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[$b]},$$scope:{ctx:x}}}),Ss=new Ue({}),As=new ie({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L898"}}),en=new qe({props:{$$slots:{default:[Mb]},$$scope:{ctx:x}}}),Ws=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_tf_xlm.py#L1004",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tn=new qe({props:{$$slots:{default:[xb]},$$scope:{ctx:x}}}),on=new we({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[Eb]},$$scope:{ctx:x}}}),Xs=new Ue({}),Hs=new ie({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L883"}}),sn=new qe({props:{$$slots:{default:[zb]},$$scope:{ctx:x}}}),Bs=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_tf_xlm.py#L1129",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new qe({props:{$$slots:{default:[Cb]},$$scope:{ctx:x}}}),rn=new we({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[qb]},$$scope:{ctx:x}}}),ln=new we({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Lb]},$$scope:{ctx:x}}}),Vs=new Ue({}),Ys=new ie({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/flaubert/modeling_tf_flaubert.py#L868"}}),cn=new qe({props:{$$slots:{default:[jb]},$$scope:{ctx:x}}}),Zs=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/xlm/modeling_tf_xlm.py#L1215",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new qe({props:{$$slots:{default:[Pb]},$$scope:{ctx:x}}}),hn=new we({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Nb]},$$scope:{ctx:x}}}),un=new we({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Sb]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=h(),c=a("h1"),p=a("a"),k=a("span"),v(l.$$.fragment),m=h(),z=a("span"),le=n("FlauBERT"),Y=h(),C=a("h2"),J=a("a"),H=a("span"),v(Z.$$.fragment),de=h(),Q=a("span"),ce=n("Overview"),se=h(),B=a("p"),S=n("The FlauBERT model was proposed in the paper "),ee=a("a"),K=n("FlauBERT: Unsupervised Language Model Pre-training for French"),q=n(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),j=h(),te=a("p"),R=n("The abstract from the paper is the following:"),ae=h(),oe=a("p"),U=a("em"),pe=n(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),re=h(),L=a("p"),he=n("This model was contributed by "),D=a("a"),ue=n("formiel"),me=n(". The original code can be found "),I=a("a"),fe=n("here"),ge=n("."),N=h(),G=a("h2"),O=a("a"),ne=a("span"),v(f.$$.fragment),E=h(),V=a("span"),$e=n("FlaubertConfig"),ve=h(),P=a("div"),v(Te.$$.fragment),Me=h(),_e=a("p"),A=n("This is the configuration class to store the configuration of a "),W=a("a"),xe=n("FlaubertModel"),Ee=n(" or a "),X=a("a"),ze=n("TFFlaubertModel"),Ce=n(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.`),be=h(),ke=a("p"),ld=n("Configuration objects inherit from "),ra=a("a"),dd=n("PretrainedConfig"),cd=n(` and can be used to control the model outputs. Read the
documentation from `),ia=a("a"),pd=n("PretrainedConfig"),hd=n(" for more information."),Wi=h(),qt=a("h2"),ho=a("a"),nr=a("span"),v(Tn.$$.fragment),ud=h(),sr=a("span"),md=n("FlaubertTokenizer"),Xi=h(),et=a("div"),v(vn.$$.fragment),fd=h(),ar=a("p"),gd=n("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),_d=h(),kt=a("ul"),rr=a("li"),bd=n("Moses preprocessing and tokenization."),kd=h(),ir=a("li"),Td=n("Normalizing all inputs text."),vd=h(),Tt=a("li"),wd=n("The arguments "),lr=a("code"),Fd=n("special_tokens"),yd=n(" and the function "),dr=a("code"),$d=n("set_special_tokens"),Md=n(`, can be used to add additional symbols (like
\u201D`),cr=a("strong"),xd=n("classify"),Ed=n("\u201D) to a vocabulary."),zd=h(),wn=a("li"),Cd=n("The argument "),pr=a("code"),qd=n("do_lowercase"),Ld=n(" controls lower casing (automatically set for pretrained vocabularies)."),jd=h(),Fn=a("p"),Pd=n("This tokenizer inherits from "),la=a("a"),Nd=n("XLMTokenizer"),Sd=n(`. Please check the superclass for usage examples and documentation
regarding arguments.`),Hi=h(),Lt=a("h2"),uo=a("a"),hr=a("span"),v(yn.$$.fragment),Ad=h(),ur=a("span"),Od=n("FlaubertModel"),Qi=h(),Re=a("div"),v($n.$$.fragment),Dd=h(),mr=a("p"),Id=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Wd=h(),Mn=a("p"),Xd=n("This model inherits from "),da=a("a"),Hd=n("PreTrainedModel"),Qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud=h(),xn=a("p"),Rd=n("This model is also a PyTorch "),En=a("a"),Bd=n("torch.nn.Module"),Vd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yd=h(),tt=a("div"),v(zn.$$.fragment),Kd=h(),jt=a("p"),Gd=n("The "),ca=a("a"),Jd=n("FlaubertModel"),Zd=n(" forward method, overrides the "),fr=a("code"),ec=n("__call__"),tc=n(" special method."),oc=h(),v(mo.$$.fragment),nc=h(),v(fo.$$.fragment),Ui=h(),Pt=a("h2"),go=a("a"),gr=a("span"),v(Cn.$$.fragment),sc=h(),_r=a("span"),ac=n("FlaubertWithLMHeadModel"),Ri=h(),je=a("div"),v(qn.$$.fragment),rc=h(),br=a("p"),ic=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),lc=h(),Ln=a("p"),dc=n("This model inherits from "),pa=a("a"),cc=n("PreTrainedModel"),pc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=h(),jn=a("p"),uc=n("This model is also a PyTorch "),Pn=a("a"),mc=n("torch.nn.Module"),fc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gc=h(),Nn=a("p"),_c=n("This class overrides "),ha=a("a"),bc=n("XLMWithLMHeadModel"),kc=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Tc=h(),Be=a("div"),v(Sn.$$.fragment),vc=h(),Nt=a("p"),wc=n("The "),ua=a("a"),Fc=n("XLMWithLMHeadModel"),yc=n(" forward method, overrides the "),kr=a("code"),$c=n("__call__"),Mc=n(" special method."),xc=h(),v(_o.$$.fragment),Ec=h(),v(bo.$$.fragment),zc=h(),v(ko.$$.fragment),Bi=h(),St=a("h2"),To=a("a"),Tr=a("span"),v(An.$$.fragment),Cc=h(),vr=a("span"),qc=n("FlaubertForSequenceClassification"),Vi=h(),Pe=a("div"),v(On.$$.fragment),Lc=h(),wr=a("p"),jc=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Pc=h(),Dn=a("p"),Nc=n("This model inherits from "),ma=a("a"),Sc=n("PreTrainedModel"),Ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oc=h(),In=a("p"),Dc=n("This model is also a PyTorch "),Wn=a("a"),Ic=n("torch.nn.Module"),Wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc=h(),Xn=a("p"),Hc=n("This class overrides "),fa=a("a"),Qc=n("XLMForSequenceClassification"),Uc=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Rc=h(),Le=a("div"),v(Hn.$$.fragment),Bc=h(),At=a("p"),Vc=n("The "),ga=a("a"),Yc=n("XLMForSequenceClassification"),Kc=n(" forward method, overrides the "),Fr=a("code"),Gc=n("__call__"),Jc=n(" special method."),Zc=h(),v(vo.$$.fragment),ep=h(),v(wo.$$.fragment),tp=h(),v(Fo.$$.fragment),op=h(),v(yo.$$.fragment),np=h(),v($o.$$.fragment),Yi=h(),Ot=a("h2"),Mo=a("a"),yr=a("span"),v(Qn.$$.fragment),sp=h(),$r=a("span"),ap=n("FlaubertForMultipleChoice"),Ki=h(),Ne=a("div"),v(Un.$$.fragment),rp=h(),Mr=a("p"),ip=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lp=h(),Rn=a("p"),dp=n("This model inherits from "),_a=a("a"),cp=n("PreTrainedModel"),pp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp=h(),Bn=a("p"),up=n("This model is also a PyTorch "),Vn=a("a"),mp=n("torch.nn.Module"),fp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp=h(),Yn=a("p"),_p=n("This class overrides "),ba=a("a"),bp=n("XLMForMultipleChoice"),kp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Tp=h(),ot=a("div"),v(Kn.$$.fragment),vp=h(),Dt=a("p"),wp=n("The "),ka=a("a"),Fp=n("XLMForMultipleChoice"),yp=n(" forward method, overrides the "),xr=a("code"),$p=n("__call__"),Mp=n(" special method."),xp=h(),v(xo.$$.fragment),Ep=h(),v(Eo.$$.fragment),Gi=h(),It=a("h2"),zo=a("a"),Er=a("span"),v(Gn.$$.fragment),zp=h(),zr=a("span"),Cp=n("FlaubertForTokenClassification"),Ji=h(),Se=a("div"),v(Jn.$$.fragment),qp=h(),Cr=a("p"),Lp=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jp=h(),Zn=a("p"),Pp=n("This model inherits from "),Ta=a("a"),Np=n("PreTrainedModel"),Sp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap=h(),es=a("p"),Op=n("This model is also a PyTorch "),ts=a("a"),Dp=n("torch.nn.Module"),Ip=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wp=h(),os=a("p"),Xp=n("This class overrides "),va=a("a"),Hp=n("XLMForTokenClassification"),Qp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Up=h(),Ve=a("div"),v(ns.$$.fragment),Rp=h(),Wt=a("p"),Bp=n("The "),wa=a("a"),Vp=n("XLMForTokenClassification"),Yp=n(" forward method, overrides the "),qr=a("code"),Kp=n("__call__"),Gp=n(" special method."),Jp=h(),v(Co.$$.fragment),Zp=h(),v(qo.$$.fragment),eh=h(),v(Lo.$$.fragment),Zi=h(),Xt=a("h2"),jo=a("a"),Lr=a("span"),v(ss.$$.fragment),th=h(),jr=a("span"),oh=n("FlaubertForQuestionAnsweringSimple"),el=h(),Ae=a("div"),v(as.$$.fragment),nh=h(),Ht=a("p"),sh=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=a("code"),ah=n("span start logits"),rh=n(" and "),Nr=a("code"),ih=n("span end logits"),lh=n(")."),dh=h(),rs=a("p"),ch=n("This model inherits from "),Fa=a("a"),ph=n("PreTrainedModel"),hh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh=h(),is=a("p"),mh=n("This model is also a PyTorch "),ls=a("a"),fh=n("torch.nn.Module"),gh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=h(),ds=a("p"),bh=n("This class overrides "),ya=a("a"),kh=n("XLMForQuestionAnsweringSimple"),Th=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),vh=h(),Ye=a("div"),v(cs.$$.fragment),wh=h(),Qt=a("p"),Fh=n("The "),$a=a("a"),yh=n("XLMForQuestionAnsweringSimple"),$h=n(" forward method, overrides the "),Sr=a("code"),Mh=n("__call__"),xh=n(" special method."),Eh=h(),v(Po.$$.fragment),zh=h(),v(No.$$.fragment),Ch=h(),v(So.$$.fragment),tl=h(),Ut=a("h2"),Ao=a("a"),Ar=a("span"),v(ps.$$.fragment),qh=h(),Or=a("span"),Lh=n("FlaubertForQuestionAnswering"),ol=h(),Oe=a("div"),v(hs.$$.fragment),jh=h(),Rt=a("p"),Ph=n(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=a("code"),Nh=n("span start logits"),Sh=n(" and "),Ir=a("code"),Ah=n("span end logits"),Oh=n(")."),Dh=h(),us=a("p"),Ih=n("This model inherits from "),Ma=a("a"),Wh=n("PreTrainedModel"),Xh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=h(),ms=a("p"),Qh=n("This model is also a PyTorch "),fs=a("a"),Uh=n("torch.nn.Module"),Rh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh=h(),gs=a("p"),Vh=n("This class overrides "),xa=a("a"),Yh=n("XLMForQuestionAnswering"),Kh=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Gh=h(),nt=a("div"),v(_s.$$.fragment),Jh=h(),Bt=a("p"),Zh=n("The "),Ea=a("a"),eu=n("XLMForQuestionAnswering"),tu=n(" forward method, overrides the "),Wr=a("code"),ou=n("__call__"),nu=n(" special method."),su=h(),v(Oo.$$.fragment),au=h(),v(Do.$$.fragment),nl=h(),Vt=a("h2"),Io=a("a"),Xr=a("span"),v(bs.$$.fragment),ru=h(),Hr=a("span"),iu=n("TFFlaubertModel"),sl=h(),De=a("div"),v(ks.$$.fragment),lu=h(),Qr=a("p"),du=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),cu=h(),Ts=a("p"),pu=n("This model inherits from "),za=a("a"),hu=n("TFPreTrainedModel"),uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mu=h(),vs=a("p"),fu=n("This model is also a "),ws=a("a"),gu=n("tf.keras.Model"),_u=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu=h(),v(Wo.$$.fragment),ku=h(),st=a("div"),v(Fs.$$.fragment),Tu=h(),Yt=a("p"),vu=n("The "),Ca=a("a"),wu=n("TFFlaubertModel"),Fu=n(" forward method, overrides the "),Ur=a("code"),yu=n("__call__"),$u=n(" special method."),Mu=h(),v(Xo.$$.fragment),xu=h(),v(Ho.$$.fragment),al=h(),Kt=a("h2"),Qo=a("a"),Rr=a("span"),v(ys.$$.fragment),Eu=h(),Br=a("span"),zu=n("TFFlaubertWithLMHeadModel"),rl=h(),Ie=a("div"),v($s.$$.fragment),Cu=h(),Vr=a("p"),qu=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Lu=h(),Ms=a("p"),ju=n("This model inherits from "),qa=a("a"),Pu=n("TFPreTrainedModel"),Nu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Su=h(),xs=a("p"),Au=n("This model is also a "),Es=a("a"),Ou=n("tf.keras.Model"),Du=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu=h(),v(Uo.$$.fragment),Wu=h(),at=a("div"),v(zs.$$.fragment),Xu=h(),Gt=a("p"),Hu=n("The "),La=a("a"),Qu=n("TFFlaubertWithLMHeadModel"),Uu=n(" forward method, overrides the "),Yr=a("code"),Ru=n("__call__"),Bu=n(" special method."),Vu=h(),v(Ro.$$.fragment),Yu=h(),v(Bo.$$.fragment),il=h(),Jt=a("h2"),Vo=a("a"),Kr=a("span"),v(Cs.$$.fragment),Ku=h(),Gr=a("span"),Gu=n("TFFlaubertForSequenceClassification"),ll=h(),We=a("div"),v(qs.$$.fragment),Ju=h(),Jr=a("p"),Zu=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),em=h(),Ls=a("p"),tm=n("This model inherits from "),ja=a("a"),om=n("TFPreTrainedModel"),nm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=h(),js=a("p"),am=n("This model is also a "),Ps=a("a"),rm=n("tf.keras.Model"),im=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lm=h(),v(Yo.$$.fragment),dm=h(),Ke=a("div"),v(Ns.$$.fragment),cm=h(),Zt=a("p"),pm=n("The "),Pa=a("a"),hm=n("TFXLMForSequenceClassification"),um=n(" forward method, overrides the "),Zr=a("code"),mm=n("__call__"),fm=n(" special method."),gm=h(),v(Ko.$$.fragment),_m=h(),v(Go.$$.fragment),bm=h(),v(Jo.$$.fragment),dl=h(),eo=a("h2"),Zo=a("a"),ei=a("span"),v(Ss.$$.fragment),km=h(),ti=a("span"),Tm=n("TFFlaubertForMultipleChoice"),cl=h(),Xe=a("div"),v(As.$$.fragment),vm=h(),oi=a("p"),wm=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Fm=h(),Os=a("p"),ym=n("This model inherits from "),Na=a("a"),$m=n("TFPreTrainedModel"),Mm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xm=h(),Ds=a("p"),Em=n("This model is also a "),Is=a("a"),zm=n("tf.keras.Model"),Cm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qm=h(),v(en.$$.fragment),Lm=h(),rt=a("div"),v(Ws.$$.fragment),jm=h(),to=a("p"),Pm=n("The "),Sa=a("a"),Nm=n("TFXLMForMultipleChoice"),Sm=n(" forward method, overrides the "),ni=a("code"),Am=n("__call__"),Om=n(" special method."),Dm=h(),v(tn.$$.fragment),Im=h(),v(on.$$.fragment),pl=h(),oo=a("h2"),nn=a("a"),si=a("span"),v(Xs.$$.fragment),Wm=h(),ai=a("span"),Xm=n("TFFlaubertForTokenClassification"),hl=h(),He=a("div"),v(Hs.$$.fragment),Hm=h(),ri=a("p"),Qm=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Um=h(),Qs=a("p"),Rm=n("This model inherits from "),Aa=a("a"),Bm=n("TFPreTrainedModel"),Vm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ym=h(),Us=a("p"),Km=n("This model is also a "),Rs=a("a"),Gm=n("tf.keras.Model"),Jm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zm=h(),v(sn.$$.fragment),ef=h(),Ge=a("div"),v(Bs.$$.fragment),tf=h(),no=a("p"),of=n("The "),Oa=a("a"),nf=n("TFXLMForTokenClassification"),sf=n(" forward method, overrides the "),ii=a("code"),af=n("__call__"),rf=n(" special method."),lf=h(),v(an.$$.fragment),df=h(),v(rn.$$.fragment),cf=h(),v(ln.$$.fragment),ul=h(),so=a("h2"),dn=a("a"),li=a("span"),v(Vs.$$.fragment),pf=h(),di=a("span"),hf=n("TFFlaubertForQuestionAnsweringSimple"),ml=h(),Qe=a("div"),v(Ys.$$.fragment),uf=h(),ao=a("p"),mf=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=a("code"),ff=n("span start logits"),gf=n(" and "),pi=a("code"),_f=n("span end logits"),bf=n(")."),kf=h(),Ks=a("p"),Tf=n("This model inherits from "),Da=a("a"),vf=n("TFPreTrainedModel"),wf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=h(),Gs=a("p"),yf=n("This model is also a "),Js=a("a"),$f=n("tf.keras.Model"),Mf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xf=h(),v(cn.$$.fragment),Ef=h(),Je=a("div"),v(Zs.$$.fragment),zf=h(),ro=a("p"),Cf=n("The "),Ia=a("a"),qf=n("TFXLMForQuestionAnsweringSimple"),Lf=n(" forward method, overrides the "),hi=a("code"),jf=n("__call__"),Pf=n(" special method."),Nf=h(),v(pn.$$.fragment),Sf=h(),v(hn.$$.fragment),Af=h(),v(un.$$.fragment),this.h()},l(o){const T=V_('[data-svelte="svelte-1phssyn"]',document.head);d=r(T,"META",{name:!0,content:!0}),T.forEach(t),g=u(o),c=r(o,"H1",{class:!0});var ea=i(c);p=r(ea,"A",{id:!0,class:!0,href:!0});var ui=i(p);k=r(ui,"SPAN",{});var mi=i(k);w(l.$$.fragment,mi),mi.forEach(t),ui.forEach(t),m=u(ea),z=r(ea,"SPAN",{});var fi=i(z);le=s(fi,"FlauBERT"),fi.forEach(t),ea.forEach(t),Y=u(o),C=r(o,"H2",{class:!0});var ta=i(C);J=r(ta,"A",{id:!0,class:!0,href:!0});var gi=i(J);H=r(gi,"SPAN",{});var _i=i(H);w(Z.$$.fragment,_i),_i.forEach(t),gi.forEach(t),de=u(ta),Q=r(ta,"SPAN",{});var bi=i(Q);ce=s(bi,"Overview"),bi.forEach(t),ta.forEach(t),se=u(o),B=r(o,"P",{});var oa=i(B);S=s(oa,"The FlauBERT model was proposed in the paper "),ee=r(oa,"A",{href:!0,rel:!0});var ki=i(ee);K=s(ki,"FlauBERT: Unsupervised Language Model Pre-training for French"),ki.forEach(t),q=s(oa,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),oa.forEach(t),j=u(o),te=r(o,"P",{});var Ti=i(te);R=s(Ti,"The abstract from the paper is the following:"),Ti.forEach(t),ae=u(o),oe=r(o,"P",{});var vi=i(oe);U=r(vi,"EM",{});var wi=i(U);pe=s(wi,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),wi.forEach(t),vi.forEach(t),re=u(o),L=r(o,"P",{});var io=i(L);he=s(io,"This model was contributed by "),D=r(io,"A",{href:!0,rel:!0});var Fi=i(D);ue=s(Fi,"formiel"),Fi.forEach(t),me=s(io,". The original code can be found "),I=r(io,"A",{href:!0,rel:!0});var yi=i(I);fe=s(yi,"here"),yi.forEach(t),ge=s(io,"."),io.forEach(t),N=u(o),G=r(o,"H2",{class:!0});var na=i(G);O=r(na,"A",{id:!0,class:!0,href:!0});var $i=i(O);ne=r($i,"SPAN",{});var Mi=i(ne);w(f.$$.fragment,Mi),Mi.forEach(t),$i.forEach(t),E=u(na),V=r(na,"SPAN",{});var xi=i(V);$e=s(xi,"FlaubertConfig"),xi.forEach(t),na.forEach(t),ve=u(o),P=r(o,"DIV",{class:!0});var lo=i(P);w(Te.$$.fragment,lo),Me=u(lo),_e=r(lo,"P",{});var co=i(_e);A=s(co,"This is the configuration class to store the configuration of a "),W=r(co,"A",{href:!0});var Ei=i(W);xe=s(Ei,"FlaubertModel"),Ei.forEach(t),Ee=s(co," or a "),X=r(co,"A",{href:!0});var zi=i(X);ze=s(zi,"TFFlaubertModel"),zi.forEach(t),Ce=s(co,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.`),co.forEach(t),be=u(lo),ke=r(lo,"P",{});var po=i(ke);ld=s(po,"Configuration objects inherit from "),ra=r(po,"A",{href:!0});var Ci=i(ra);dd=s(Ci,"PretrainedConfig"),Ci.forEach(t),cd=s(po,` and can be used to control the model outputs. Read the
documentation from `),ia=r(po,"A",{href:!0});var qi=i(ia);pd=s(qi,"PretrainedConfig"),qi.forEach(t),hd=s(po," for more information."),po.forEach(t),lo.forEach(t),Wi=u(o),qt=r(o,"H2",{class:!0});var sa=i(qt);ho=r(sa,"A",{id:!0,class:!0,href:!0});var Li=i(ho);nr=r(Li,"SPAN",{});var ji=i(nr);w(Tn.$$.fragment,ji),ji.forEach(t),Li.forEach(t),ud=u(sa),sr=r(sa,"SPAN",{});var Pi=i(sr);md=s(Pi,"FlaubertTokenizer"),Pi.forEach(t),sa.forEach(t),Xi=u(o),et=r(o,"DIV",{class:!0});var vt=i(et);w(vn.$$.fragment,vt),fd=u(vt),ar=r(vt,"P",{});var Ni=i(ar);gd=s(Ni,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Ni.forEach(t),_d=u(vt),kt=r(vt,"UL",{});var wt=i(kt);rr=r(wt,"LI",{});var Si=i(rr);bd=s(Si,"Moses preprocessing and tokenization."),Si.forEach(t),kd=u(wt),ir=r(wt,"LI",{});var Ai=i(ir);Td=s(Ai,"Normalizing all inputs text."),Ai.forEach(t),vd=u(wt),Tt=r(wt,"LI",{});var Ft=i(Tt);wd=s(Ft,"The arguments "),lr=r(Ft,"CODE",{});var Oi=i(lr);Fd=s(Oi,"special_tokens"),Oi.forEach(t),yd=s(Ft," and the function "),dr=r(Ft,"CODE",{});var Di=i(dr);$d=s(Di,"set_special_tokens"),Di.forEach(t),Md=s(Ft,`, can be used to add additional symbols (like
\u201D`),cr=r(Ft,"STRONG",{});var Ii=i(cr);xd=s(Ii,"classify"),Ii.forEach(t),Ed=s(Ft,"\u201D) to a vocabulary."),Ft.forEach(t),zd=u(wt),wn=r(wt,"LI",{});var aa=i(wn);Cd=s(aa,"The argument "),pr=r(aa,"CODE",{});var Of=i(pr);qd=s(Of,"do_lowercase"),Of.forEach(t),Ld=s(aa," controls lower casing (automatically set for pretrained vocabularies)."),aa.forEach(t),wt.forEach(t),jd=u(vt),Fn=r(vt,"P",{});var gl=i(Fn);Pd=s(gl,"This tokenizer inherits from "),la=r(gl,"A",{href:!0});var Df=i(la);Nd=s(Df,"XLMTokenizer"),Df.forEach(t),Sd=s(gl,`. Please check the superclass for usage examples and documentation
regarding arguments.`),gl.forEach(t),vt.forEach(t),Hi=u(o),Lt=r(o,"H2",{class:!0});var _l=i(Lt);uo=r(_l,"A",{id:!0,class:!0,href:!0});var If=i(uo);hr=r(If,"SPAN",{});var Wf=i(hr);w(yn.$$.fragment,Wf),Wf.forEach(t),If.forEach(t),Ad=u(_l),ur=r(_l,"SPAN",{});var Xf=i(ur);Od=s(Xf,"FlaubertModel"),Xf.forEach(t),_l.forEach(t),Qi=u(o),Re=r(o,"DIV",{class:!0});var yt=i(Re);w($n.$$.fragment,yt),Dd=u(yt),mr=r(yt,"P",{});var Hf=i(mr);Id=s(Hf,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Hf.forEach(t),Wd=u(yt),Mn=r(yt,"P",{});var bl=i(Mn);Xd=s(bl,"This model inherits from "),da=r(bl,"A",{href:!0});var Qf=i(da);Hd=s(Qf,"PreTrainedModel"),Qf.forEach(t),Qd=s(bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl.forEach(t),Ud=u(yt),xn=r(yt,"P",{});var kl=i(xn);Rd=s(kl,"This model is also a PyTorch "),En=r(kl,"A",{href:!0,rel:!0});var Uf=i(En);Bd=s(Uf,"torch.nn.Module"),Uf.forEach(t),Vd=s(kl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kl.forEach(t),Yd=u(yt),tt=r(yt,"DIV",{class:!0});var mn=i(tt);w(zn.$$.fragment,mn),Kd=u(mn),jt=r(mn,"P",{});var Wa=i(jt);Gd=s(Wa,"The "),ca=r(Wa,"A",{href:!0});var Rf=i(ca);Jd=s(Rf,"FlaubertModel"),Rf.forEach(t),Zd=s(Wa," forward method, overrides the "),fr=r(Wa,"CODE",{});var Bf=i(fr);ec=s(Bf,"__call__"),Bf.forEach(t),tc=s(Wa," special method."),Wa.forEach(t),oc=u(mn),w(mo.$$.fragment,mn),nc=u(mn),w(fo.$$.fragment,mn),mn.forEach(t),yt.forEach(t),Ui=u(o),Pt=r(o,"H2",{class:!0});var Tl=i(Pt);go=r(Tl,"A",{id:!0,class:!0,href:!0});var Vf=i(go);gr=r(Vf,"SPAN",{});var Yf=i(gr);w(Cn.$$.fragment,Yf),Yf.forEach(t),Vf.forEach(t),sc=u(Tl),_r=r(Tl,"SPAN",{});var Kf=i(_r);ac=s(Kf,"FlaubertWithLMHeadModel"),Kf.forEach(t),Tl.forEach(t),Ri=u(o),je=r(o,"DIV",{class:!0});var it=i(je);w(qn.$$.fragment,it),rc=u(it),br=r(it,"P",{});var Gf=i(br);ic=s(Gf,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Gf.forEach(t),lc=u(it),Ln=r(it,"P",{});var vl=i(Ln);dc=s(vl,"This model inherits from "),pa=r(vl,"A",{href:!0});var Jf=i(pa);cc=s(Jf,"PreTrainedModel"),Jf.forEach(t),pc=s(vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vl.forEach(t),hc=u(it),jn=r(it,"P",{});var wl=i(jn);uc=s(wl,"This model is also a PyTorch "),Pn=r(wl,"A",{href:!0,rel:!0});var Zf=i(Pn);mc=s(Zf,"torch.nn.Module"),Zf.forEach(t),fc=s(wl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wl.forEach(t),gc=u(it),Nn=r(it,"P",{});var Fl=i(Nn);_c=s(Fl,"This class overrides "),ha=r(Fl,"A",{href:!0});var eg=i(ha);bc=s(eg,"XLMWithLMHeadModel"),eg.forEach(t),kc=s(Fl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fl.forEach(t),Tc=u(it),Be=r(it,"DIV",{class:!0});var $t=i(Be);w(Sn.$$.fragment,$t),vc=u($t),Nt=r($t,"P",{});var Xa=i(Nt);wc=s(Xa,"The "),ua=r(Xa,"A",{href:!0});var tg=i(ua);Fc=s(tg,"XLMWithLMHeadModel"),tg.forEach(t),yc=s(Xa," forward method, overrides the "),kr=r(Xa,"CODE",{});var og=i(kr);$c=s(og,"__call__"),og.forEach(t),Mc=s(Xa," special method."),Xa.forEach(t),xc=u($t),w(_o.$$.fragment,$t),Ec=u($t),w(bo.$$.fragment,$t),zc=u($t),w(ko.$$.fragment,$t),$t.forEach(t),it.forEach(t),Bi=u(o),St=r(o,"H2",{class:!0});var yl=i(St);To=r(yl,"A",{id:!0,class:!0,href:!0});var ng=i(To);Tr=r(ng,"SPAN",{});var sg=i(Tr);w(An.$$.fragment,sg),sg.forEach(t),ng.forEach(t),Cc=u(yl),vr=r(yl,"SPAN",{});var ag=i(vr);qc=s(ag,"FlaubertForSequenceClassification"),ag.forEach(t),yl.forEach(t),Vi=u(o),Pe=r(o,"DIV",{class:!0});var lt=i(Pe);w(On.$$.fragment,lt),Lc=u(lt),wr=r(lt,"P",{});var rg=i(wr);jc=s(rg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),rg.forEach(t),Pc=u(lt),Dn=r(lt,"P",{});var $l=i(Dn);Nc=s($l,"This model inherits from "),ma=r($l,"A",{href:!0});var ig=i(ma);Sc=s(ig,"PreTrainedModel"),ig.forEach(t),Ac=s($l,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$l.forEach(t),Oc=u(lt),In=r(lt,"P",{});var Ml=i(In);Dc=s(Ml,"This model is also a PyTorch "),Wn=r(Ml,"A",{href:!0,rel:!0});var lg=i(Wn);Ic=s(lg,"torch.nn.Module"),lg.forEach(t),Wc=s(Ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml.forEach(t),Xc=u(lt),Xn=r(lt,"P",{});var xl=i(Xn);Hc=s(xl,"This class overrides "),fa=r(xl,"A",{href:!0});var dg=i(fa);Qc=s(dg,"XLMForSequenceClassification"),dg.forEach(t),Uc=s(xl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),xl.forEach(t),Rc=u(lt),Le=r(lt,"DIV",{class:!0});var Ze=i(Le);w(Hn.$$.fragment,Ze),Bc=u(Ze),At=r(Ze,"P",{});var Ha=i(At);Vc=s(Ha,"The "),ga=r(Ha,"A",{href:!0});var cg=i(ga);Yc=s(cg,"XLMForSequenceClassification"),cg.forEach(t),Kc=s(Ha," forward method, overrides the "),Fr=r(Ha,"CODE",{});var pg=i(Fr);Gc=s(pg,"__call__"),pg.forEach(t),Jc=s(Ha," special method."),Ha.forEach(t),Zc=u(Ze),w(vo.$$.fragment,Ze),ep=u(Ze),w(wo.$$.fragment,Ze),tp=u(Ze),w(Fo.$$.fragment,Ze),op=u(Ze),w(yo.$$.fragment,Ze),np=u(Ze),w($o.$$.fragment,Ze),Ze.forEach(t),lt.forEach(t),Yi=u(o),Ot=r(o,"H2",{class:!0});var El=i(Ot);Mo=r(El,"A",{id:!0,class:!0,href:!0});var hg=i(Mo);yr=r(hg,"SPAN",{});var ug=i(yr);w(Qn.$$.fragment,ug),ug.forEach(t),hg.forEach(t),sp=u(El),$r=r(El,"SPAN",{});var mg=i($r);ap=s(mg,"FlaubertForMultipleChoice"),mg.forEach(t),El.forEach(t),Ki=u(o),Ne=r(o,"DIV",{class:!0});var dt=i(Ne);w(Un.$$.fragment,dt),rp=u(dt),Mr=r(dt,"P",{});var fg=i(Mr);ip=s(fg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),fg.forEach(t),lp=u(dt),Rn=r(dt,"P",{});var zl=i(Rn);dp=s(zl,"This model inherits from "),_a=r(zl,"A",{href:!0});var gg=i(_a);cp=s(gg,"PreTrainedModel"),gg.forEach(t),pp=s(zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl.forEach(t),hp=u(dt),Bn=r(dt,"P",{});var Cl=i(Bn);up=s(Cl,"This model is also a PyTorch "),Vn=r(Cl,"A",{href:!0,rel:!0});var _g=i(Vn);mp=s(_g,"torch.nn.Module"),_g.forEach(t),fp=s(Cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl.forEach(t),gp=u(dt),Yn=r(dt,"P",{});var ql=i(Yn);_p=s(ql,"This class overrides "),ba=r(ql,"A",{href:!0});var bg=i(ba);bp=s(bg,"XLMForMultipleChoice"),bg.forEach(t),kp=s(ql,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ql.forEach(t),Tp=u(dt),ot=r(dt,"DIV",{class:!0});var fn=i(ot);w(Kn.$$.fragment,fn),vp=u(fn),Dt=r(fn,"P",{});var Qa=i(Dt);wp=s(Qa,"The "),ka=r(Qa,"A",{href:!0});var kg=i(ka);Fp=s(kg,"XLMForMultipleChoice"),kg.forEach(t),yp=s(Qa," forward method, overrides the "),xr=r(Qa,"CODE",{});var Tg=i(xr);$p=s(Tg,"__call__"),Tg.forEach(t),Mp=s(Qa," special method."),Qa.forEach(t),xp=u(fn),w(xo.$$.fragment,fn),Ep=u(fn),w(Eo.$$.fragment,fn),fn.forEach(t),dt.forEach(t),Gi=u(o),It=r(o,"H2",{class:!0});var Ll=i(It);zo=r(Ll,"A",{id:!0,class:!0,href:!0});var vg=i(zo);Er=r(vg,"SPAN",{});var wg=i(Er);w(Gn.$$.fragment,wg),wg.forEach(t),vg.forEach(t),zp=u(Ll),zr=r(Ll,"SPAN",{});var Fg=i(zr);Cp=s(Fg,"FlaubertForTokenClassification"),Fg.forEach(t),Ll.forEach(t),Ji=u(o),Se=r(o,"DIV",{class:!0});var ct=i(Se);w(Jn.$$.fragment,ct),qp=u(ct),Cr=r(ct,"P",{});var yg=i(Cr);Lp=s(yg,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yg.forEach(t),jp=u(ct),Zn=r(ct,"P",{});var jl=i(Zn);Pp=s(jl,"This model inherits from "),Ta=r(jl,"A",{href:!0});var $g=i(Ta);Np=s($g,"PreTrainedModel"),$g.forEach(t),Sp=s(jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl.forEach(t),Ap=u(ct),es=r(ct,"P",{});var Pl=i(es);Op=s(Pl,"This model is also a PyTorch "),ts=r(Pl,"A",{href:!0,rel:!0});var Mg=i(ts);Dp=s(Mg,"torch.nn.Module"),Mg.forEach(t),Ip=s(Pl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pl.forEach(t),Wp=u(ct),os=r(ct,"P",{});var Nl=i(os);Xp=s(Nl,"This class overrides "),va=r(Nl,"A",{href:!0});var xg=i(va);Hp=s(xg,"XLMForTokenClassification"),xg.forEach(t),Qp=s(Nl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Nl.forEach(t),Up=u(ct),Ve=r(ct,"DIV",{class:!0});var Mt=i(Ve);w(ns.$$.fragment,Mt),Rp=u(Mt),Wt=r(Mt,"P",{});var Ua=i(Wt);Bp=s(Ua,"The "),wa=r(Ua,"A",{href:!0});var Eg=i(wa);Vp=s(Eg,"XLMForTokenClassification"),Eg.forEach(t),Yp=s(Ua," forward method, overrides the "),qr=r(Ua,"CODE",{});var zg=i(qr);Kp=s(zg,"__call__"),zg.forEach(t),Gp=s(Ua," special method."),Ua.forEach(t),Jp=u(Mt),w(Co.$$.fragment,Mt),Zp=u(Mt),w(qo.$$.fragment,Mt),eh=u(Mt),w(Lo.$$.fragment,Mt),Mt.forEach(t),ct.forEach(t),Zi=u(o),Xt=r(o,"H2",{class:!0});var Sl=i(Xt);jo=r(Sl,"A",{id:!0,class:!0,href:!0});var Cg=i(jo);Lr=r(Cg,"SPAN",{});var qg=i(Lr);w(ss.$$.fragment,qg),qg.forEach(t),Cg.forEach(t),th=u(Sl),jr=r(Sl,"SPAN",{});var Lg=i(jr);oh=s(Lg,"FlaubertForQuestionAnsweringSimple"),Lg.forEach(t),Sl.forEach(t),el=u(o),Ae=r(o,"DIV",{class:!0});var pt=i(Ae);w(as.$$.fragment,pt),nh=u(pt),Ht=r(pt,"P",{});var Ra=i(Ht);sh=s(Ra,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=r(Ra,"CODE",{});var jg=i(Pr);ah=s(jg,"span start logits"),jg.forEach(t),rh=s(Ra," and "),Nr=r(Ra,"CODE",{});var Pg=i(Nr);ih=s(Pg,"span end logits"),Pg.forEach(t),lh=s(Ra,")."),Ra.forEach(t),dh=u(pt),rs=r(pt,"P",{});var Al=i(rs);ch=s(Al,"This model inherits from "),Fa=r(Al,"A",{href:!0});var Ng=i(Fa);ph=s(Ng,"PreTrainedModel"),Ng.forEach(t),hh=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),uh=u(pt),is=r(pt,"P",{});var Ol=i(is);mh=s(Ol,"This model is also a PyTorch "),ls=r(Ol,"A",{href:!0,rel:!0});var Sg=i(ls);fh=s(Sg,"torch.nn.Module"),Sg.forEach(t),gh=s(Ol,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ol.forEach(t),_h=u(pt),ds=r(pt,"P",{});var Dl=i(ds);bh=s(Dl,"This class overrides "),ya=r(Dl,"A",{href:!0});var Ag=i(ya);kh=s(Ag,"XLMForQuestionAnsweringSimple"),Ag.forEach(t),Th=s(Dl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Dl.forEach(t),vh=u(pt),Ye=r(pt,"DIV",{class:!0});var xt=i(Ye);w(cs.$$.fragment,xt),wh=u(xt),Qt=r(xt,"P",{});var Ba=i(Qt);Fh=s(Ba,"The "),$a=r(Ba,"A",{href:!0});var Og=i($a);yh=s(Og,"XLMForQuestionAnsweringSimple"),Og.forEach(t),$h=s(Ba," forward method, overrides the "),Sr=r(Ba,"CODE",{});var Dg=i(Sr);Mh=s(Dg,"__call__"),Dg.forEach(t),xh=s(Ba," special method."),Ba.forEach(t),Eh=u(xt),w(Po.$$.fragment,xt),zh=u(xt),w(No.$$.fragment,xt),Ch=u(xt),w(So.$$.fragment,xt),xt.forEach(t),pt.forEach(t),tl=u(o),Ut=r(o,"H2",{class:!0});var Il=i(Ut);Ao=r(Il,"A",{id:!0,class:!0,href:!0});var Ig=i(Ao);Ar=r(Ig,"SPAN",{});var Wg=i(Ar);w(ps.$$.fragment,Wg),Wg.forEach(t),Ig.forEach(t),qh=u(Il),Or=r(Il,"SPAN",{});var Xg=i(Or);Lh=s(Xg,"FlaubertForQuestionAnswering"),Xg.forEach(t),Il.forEach(t),ol=u(o),Oe=r(o,"DIV",{class:!0});var ht=i(Oe);w(hs.$$.fragment,ht),jh=u(ht),Rt=r(ht,"P",{});var Va=i(Rt);Ph=s(Va,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=r(Va,"CODE",{});var Hg=i(Dr);Nh=s(Hg,"span start logits"),Hg.forEach(t),Sh=s(Va," and "),Ir=r(Va,"CODE",{});var Qg=i(Ir);Ah=s(Qg,"span end logits"),Qg.forEach(t),Oh=s(Va,")."),Va.forEach(t),Dh=u(ht),us=r(ht,"P",{});var Wl=i(us);Ih=s(Wl,"This model inherits from "),Ma=r(Wl,"A",{href:!0});var Ug=i(Ma);Wh=s(Ug,"PreTrainedModel"),Ug.forEach(t),Xh=s(Wl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wl.forEach(t),Hh=u(ht),ms=r(ht,"P",{});var Xl=i(ms);Qh=s(Xl,"This model is also a PyTorch "),fs=r(Xl,"A",{href:!0,rel:!0});var Rg=i(fs);Uh=s(Rg,"torch.nn.Module"),Rg.forEach(t),Rh=s(Xl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xl.forEach(t),Bh=u(ht),gs=r(ht,"P",{});var Hl=i(gs);Vh=s(Hl,"This class overrides "),xa=r(Hl,"A",{href:!0});var Bg=i(xa);Yh=s(Bg,"XLMForQuestionAnswering"),Bg.forEach(t),Kh=s(Hl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Hl.forEach(t),Gh=u(ht),nt=r(ht,"DIV",{class:!0});var gn=i(nt);w(_s.$$.fragment,gn),Jh=u(gn),Bt=r(gn,"P",{});var Ya=i(Bt);Zh=s(Ya,"The "),Ea=r(Ya,"A",{href:!0});var Vg=i(Ea);eu=s(Vg,"XLMForQuestionAnswering"),Vg.forEach(t),tu=s(Ya," forward method, overrides the "),Wr=r(Ya,"CODE",{});var Yg=i(Wr);ou=s(Yg,"__call__"),Yg.forEach(t),nu=s(Ya," special method."),Ya.forEach(t),su=u(gn),w(Oo.$$.fragment,gn),au=u(gn),w(Do.$$.fragment,gn),gn.forEach(t),ht.forEach(t),nl=u(o),Vt=r(o,"H2",{class:!0});var Ql=i(Vt);Io=r(Ql,"A",{id:!0,class:!0,href:!0});var Kg=i(Io);Xr=r(Kg,"SPAN",{});var Gg=i(Xr);w(bs.$$.fragment,Gg),Gg.forEach(t),Kg.forEach(t),ru=u(Ql),Hr=r(Ql,"SPAN",{});var Jg=i(Hr);iu=s(Jg,"TFFlaubertModel"),Jg.forEach(t),Ql.forEach(t),sl=u(o),De=r(o,"DIV",{class:!0});var ut=i(De);w(ks.$$.fragment,ut),lu=u(ut),Qr=r(ut,"P",{});var Zg=i(Qr);du=s(Zg,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Zg.forEach(t),cu=u(ut),Ts=r(ut,"P",{});var Ul=i(Ts);pu=s(Ul,"This model inherits from "),za=r(Ul,"A",{href:!0});var e_=i(za);hu=s(e_,"TFPreTrainedModel"),e_.forEach(t),uu=s(Ul,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul.forEach(t),mu=u(ut),vs=r(ut,"P",{});var Rl=i(vs);fu=s(Rl,"This model is also a "),ws=r(Rl,"A",{href:!0,rel:!0});var t_=i(ws);gu=s(t_,"tf.keras.Model"),t_.forEach(t),_u=s(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),bu=u(ut),w(Wo.$$.fragment,ut),ku=u(ut),st=r(ut,"DIV",{class:!0});var _n=i(st);w(Fs.$$.fragment,_n),Tu=u(_n),Yt=r(_n,"P",{});var Ka=i(Yt);vu=s(Ka,"The "),Ca=r(Ka,"A",{href:!0});var o_=i(Ca);wu=s(o_,"TFFlaubertModel"),o_.forEach(t),Fu=s(Ka," forward method, overrides the "),Ur=r(Ka,"CODE",{});var n_=i(Ur);yu=s(n_,"__call__"),n_.forEach(t),$u=s(Ka," special method."),Ka.forEach(t),Mu=u(_n),w(Xo.$$.fragment,_n),xu=u(_n),w(Ho.$$.fragment,_n),_n.forEach(t),ut.forEach(t),al=u(o),Kt=r(o,"H2",{class:!0});var Bl=i(Kt);Qo=r(Bl,"A",{id:!0,class:!0,href:!0});var s_=i(Qo);Rr=r(s_,"SPAN",{});var a_=i(Rr);w(ys.$$.fragment,a_),a_.forEach(t),s_.forEach(t),Eu=u(Bl),Br=r(Bl,"SPAN",{});var r_=i(Br);zu=s(r_,"TFFlaubertWithLMHeadModel"),r_.forEach(t),Bl.forEach(t),rl=u(o),Ie=r(o,"DIV",{class:!0});var mt=i(Ie);w($s.$$.fragment,mt),Cu=u(mt),Vr=r(mt,"P",{});var i_=i(Vr);qu=s(i_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),i_.forEach(t),Lu=u(mt),Ms=r(mt,"P",{});var Vl=i(Ms);ju=s(Vl,"This model inherits from "),qa=r(Vl,"A",{href:!0});var l_=i(qa);Pu=s(l_,"TFPreTrainedModel"),l_.forEach(t),Nu=s(Vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vl.forEach(t),Su=u(mt),xs=r(mt,"P",{});var Yl=i(xs);Au=s(Yl,"This model is also a "),Es=r(Yl,"A",{href:!0,rel:!0});var d_=i(Es);Ou=s(d_,"tf.keras.Model"),d_.forEach(t),Du=s(Yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yl.forEach(t),Iu=u(mt),w(Uo.$$.fragment,mt),Wu=u(mt),at=r(mt,"DIV",{class:!0});var bn=i(at);w(zs.$$.fragment,bn),Xu=u(bn),Gt=r(bn,"P",{});var Ga=i(Gt);Hu=s(Ga,"The "),La=r(Ga,"A",{href:!0});var c_=i(La);Qu=s(c_,"TFFlaubertWithLMHeadModel"),c_.forEach(t),Uu=s(Ga," forward method, overrides the "),Yr=r(Ga,"CODE",{});var p_=i(Yr);Ru=s(p_,"__call__"),p_.forEach(t),Bu=s(Ga," special method."),Ga.forEach(t),Vu=u(bn),w(Ro.$$.fragment,bn),Yu=u(bn),w(Bo.$$.fragment,bn),bn.forEach(t),mt.forEach(t),il=u(o),Jt=r(o,"H2",{class:!0});var Kl=i(Jt);Vo=r(Kl,"A",{id:!0,class:!0,href:!0});var h_=i(Vo);Kr=r(h_,"SPAN",{});var u_=i(Kr);w(Cs.$$.fragment,u_),u_.forEach(t),h_.forEach(t),Ku=u(Kl),Gr=r(Kl,"SPAN",{});var m_=i(Gr);Gu=s(m_,"TFFlaubertForSequenceClassification"),m_.forEach(t),Kl.forEach(t),ll=u(o),We=r(o,"DIV",{class:!0});var ft=i(We);w(qs.$$.fragment,ft),Ju=u(ft),Jr=r(ft,"P",{});var f_=i(Jr);Zu=s(f_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),f_.forEach(t),em=u(ft),Ls=r(ft,"P",{});var Gl=i(Ls);tm=s(Gl,"This model inherits from "),ja=r(Gl,"A",{href:!0});var g_=i(ja);om=s(g_,"TFPreTrainedModel"),g_.forEach(t),nm=s(Gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl.forEach(t),sm=u(ft),js=r(ft,"P",{});var Jl=i(js);am=s(Jl,"This model is also a "),Ps=r(Jl,"A",{href:!0,rel:!0});var __=i(Ps);rm=s(__,"tf.keras.Model"),__.forEach(t),im=s(Jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jl.forEach(t),lm=u(ft),w(Yo.$$.fragment,ft),dm=u(ft),Ke=r(ft,"DIV",{class:!0});var Et=i(Ke);w(Ns.$$.fragment,Et),cm=u(Et),Zt=r(Et,"P",{});var Ja=i(Zt);pm=s(Ja,"The "),Pa=r(Ja,"A",{href:!0});var b_=i(Pa);hm=s(b_,"TFXLMForSequenceClassification"),b_.forEach(t),um=s(Ja," forward method, overrides the "),Zr=r(Ja,"CODE",{});var k_=i(Zr);mm=s(k_,"__call__"),k_.forEach(t),fm=s(Ja," special method."),Ja.forEach(t),gm=u(Et),w(Ko.$$.fragment,Et),_m=u(Et),w(Go.$$.fragment,Et),bm=u(Et),w(Jo.$$.fragment,Et),Et.forEach(t),ft.forEach(t),dl=u(o),eo=r(o,"H2",{class:!0});var Zl=i(eo);Zo=r(Zl,"A",{id:!0,class:!0,href:!0});var T_=i(Zo);ei=r(T_,"SPAN",{});var v_=i(ei);w(Ss.$$.fragment,v_),v_.forEach(t),T_.forEach(t),km=u(Zl),ti=r(Zl,"SPAN",{});var w_=i(ti);Tm=s(w_,"TFFlaubertForMultipleChoice"),w_.forEach(t),Zl.forEach(t),cl=u(o),Xe=r(o,"DIV",{class:!0});var gt=i(Xe);w(As.$$.fragment,gt),vm=u(gt),oi=r(gt,"P",{});var F_=i(oi);wm=s(F_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),F_.forEach(t),Fm=u(gt),Os=r(gt,"P",{});var ed=i(Os);ym=s(ed,"This model inherits from "),Na=r(ed,"A",{href:!0});var y_=i(Na);$m=s(y_,"TFPreTrainedModel"),y_.forEach(t),Mm=s(ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ed.forEach(t),xm=u(gt),Ds=r(gt,"P",{});var td=i(Ds);Em=s(td,"This model is also a "),Is=r(td,"A",{href:!0,rel:!0});var $_=i(Is);zm=s($_,"tf.keras.Model"),$_.forEach(t),Cm=s(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(t),qm=u(gt),w(en.$$.fragment,gt),Lm=u(gt),rt=r(gt,"DIV",{class:!0});var kn=i(rt);w(Ws.$$.fragment,kn),jm=u(kn),to=r(kn,"P",{});var Za=i(to);Pm=s(Za,"The "),Sa=r(Za,"A",{href:!0});var M_=i(Sa);Nm=s(M_,"TFXLMForMultipleChoice"),M_.forEach(t),Sm=s(Za," forward method, overrides the "),ni=r(Za,"CODE",{});var x_=i(ni);Am=s(x_,"__call__"),x_.forEach(t),Om=s(Za," special method."),Za.forEach(t),Dm=u(kn),w(tn.$$.fragment,kn),Im=u(kn),w(on.$$.fragment,kn),kn.forEach(t),gt.forEach(t),pl=u(o),oo=r(o,"H2",{class:!0});var od=i(oo);nn=r(od,"A",{id:!0,class:!0,href:!0});var E_=i(nn);si=r(E_,"SPAN",{});var z_=i(si);w(Xs.$$.fragment,z_),z_.forEach(t),E_.forEach(t),Wm=u(od),ai=r(od,"SPAN",{});var C_=i(ai);Xm=s(C_,"TFFlaubertForTokenClassification"),C_.forEach(t),od.forEach(t),hl=u(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(Hs.$$.fragment,_t),Hm=u(_t),ri=r(_t,"P",{});var q_=i(ri);Qm=s(q_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),q_.forEach(t),Um=u(_t),Qs=r(_t,"P",{});var nd=i(Qs);Rm=s(nd,"This model inherits from "),Aa=r(nd,"A",{href:!0});var L_=i(Aa);Bm=s(L_,"TFPreTrainedModel"),L_.forEach(t),Vm=s(nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nd.forEach(t),Ym=u(_t),Us=r(_t,"P",{});var sd=i(Us);Km=s(sd,"This model is also a "),Rs=r(sd,"A",{href:!0,rel:!0});var j_=i(Rs);Gm=s(j_,"tf.keras.Model"),j_.forEach(t),Jm=s(sd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sd.forEach(t),Zm=u(_t),w(sn.$$.fragment,_t),ef=u(_t),Ge=r(_t,"DIV",{class:!0});var zt=i(Ge);w(Bs.$$.fragment,zt),tf=u(zt),no=r(zt,"P",{});var er=i(no);of=s(er,"The "),Oa=r(er,"A",{href:!0});var P_=i(Oa);nf=s(P_,"TFXLMForTokenClassification"),P_.forEach(t),sf=s(er," forward method, overrides the "),ii=r(er,"CODE",{});var N_=i(ii);af=s(N_,"__call__"),N_.forEach(t),rf=s(er," special method."),er.forEach(t),lf=u(zt),w(an.$$.fragment,zt),df=u(zt),w(rn.$$.fragment,zt),cf=u(zt),w(ln.$$.fragment,zt),zt.forEach(t),_t.forEach(t),ul=u(o),so=r(o,"H2",{class:!0});var ad=i(so);dn=r(ad,"A",{id:!0,class:!0,href:!0});var S_=i(dn);li=r(S_,"SPAN",{});var A_=i(li);w(Vs.$$.fragment,A_),A_.forEach(t),S_.forEach(t),pf=u(ad),di=r(ad,"SPAN",{});var O_=i(di);hf=s(O_,"TFFlaubertForQuestionAnsweringSimple"),O_.forEach(t),ad.forEach(t),ml=u(o),Qe=r(o,"DIV",{class:!0});var bt=i(Qe);w(Ys.$$.fragment,bt),uf=u(bt),ao=r(bt,"P",{});var tr=i(ao);mf=s(tr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=r(tr,"CODE",{});var D_=i(ci);ff=s(D_,"span start logits"),D_.forEach(t),gf=s(tr," and "),pi=r(tr,"CODE",{});var I_=i(pi);_f=s(I_,"span end logits"),I_.forEach(t),bf=s(tr,")."),tr.forEach(t),kf=u(bt),Ks=r(bt,"P",{});var rd=i(Ks);Tf=s(rd,"This model inherits from "),Da=r(rd,"A",{href:!0});var W_=i(Da);vf=s(W_,"TFPreTrainedModel"),W_.forEach(t),wf=s(rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd.forEach(t),Ff=u(bt),Gs=r(bt,"P",{});var id=i(Gs);yf=s(id,"This model is also a "),Js=r(id,"A",{href:!0,rel:!0});var X_=i(Js);$f=s(X_,"tf.keras.Model"),X_.forEach(t),Mf=s(id,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),id.forEach(t),xf=u(bt),w(cn.$$.fragment,bt),Ef=u(bt),Je=r(bt,"DIV",{class:!0});var Ct=i(Je);w(Zs.$$.fragment,Ct),zf=u(Ct),ro=r(Ct,"P",{});var or=i(ro);Cf=s(or,"The "),Ia=r(or,"A",{href:!0});var H_=i(Ia);qf=s(H_,"TFXLMForQuestionAnsweringSimple"),H_.forEach(t),Lf=s(or," forward method, overrides the "),hi=r(or,"CODE",{});var Q_=i(hi);jf=s(Q_,"__call__"),Q_.forEach(t),Pf=s(or," special method."),or.forEach(t),Nf=u(Ct),w(pn.$$.fragment,Ct),Sf=u(Ct),w(hn.$$.fragment,Ct),Af=u(Ct),w(un.$$.fragment,Ct),Ct.forEach(t),bt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(Ob)),_(p,"id","flaubert"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#flaubert"),_(c,"class","relative group"),_(J,"id","overview"),_(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(J,"href","#overview"),_(C,"class","relative group"),_(ee,"href","https://arxiv.org/abs/1912.05372"),_(ee,"rel","nofollow"),_(D,"href","https://huggingface.co/formiel"),_(D,"rel","nofollow"),_(I,"href","https://github.com/getalp/Flaubert"),_(I,"rel","nofollow"),_(O,"id","transformers.FlaubertConfig"),_(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(O,"href","#transformers.FlaubertConfig"),_(G,"class","relative group"),_(W,"href","/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertModel"),_(X,"href","/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(ra,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),_(ia,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),_(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ho,"id","transformers.FlaubertTokenizer"),_(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ho,"href","#transformers.FlaubertTokenizer"),_(qt,"class","relative group"),_(la,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMTokenizer"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(uo,"id","transformers.FlaubertModel"),_(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(uo,"href","#transformers.FlaubertModel"),_(Lt,"class","relative group"),_(da,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(En,"rel","nofollow"),_(ca,"href","/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.FlaubertModel"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(go,"id","transformers.FlaubertWithLMHeadModel"),_(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(go,"href","#transformers.FlaubertWithLMHeadModel"),_(Pt,"class","relative group"),_(pa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Pn,"rel","nofollow"),_(ha,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(ua,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(To,"id","transformers.FlaubertForSequenceClassification"),_(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(To,"href","#transformers.FlaubertForSequenceClassification"),_(St,"class","relative group"),_(ma,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Wn,"rel","nofollow"),_(fa,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(ga,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Mo,"id","transformers.FlaubertForMultipleChoice"),_(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Mo,"href","#transformers.FlaubertForMultipleChoice"),_(Ot,"class","relative group"),_(_a,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Vn,"rel","nofollow"),_(ba,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ka,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zo,"id","transformers.FlaubertForTokenClassification"),_(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zo,"href","#transformers.FlaubertForTokenClassification"),_(It,"class","relative group"),_(Ta,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ts,"rel","nofollow"),_(va,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(wa,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(jo,"id","transformers.FlaubertForQuestionAnsweringSimple"),_(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(jo,"href","#transformers.FlaubertForQuestionAnsweringSimple"),_(Xt,"class","relative group"),_(Fa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ls,"rel","nofollow"),_(ya,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_($a,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ao,"id","transformers.FlaubertForQuestionAnswering"),_(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ao,"href","#transformers.FlaubertForQuestionAnswering"),_(Ut,"class","relative group"),_(Ma,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(fs,"rel","nofollow"),_(xa,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(Ea,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Io,"id","transformers.TFFlaubertModel"),_(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Io,"href","#transformers.TFFlaubertModel"),_(Vt,"class","relative group"),_(za,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(ws,"rel","nofollow"),_(Ca,"href","/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qo,"id","transformers.TFFlaubertWithLMHeadModel"),_(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Qo,"href","#transformers.TFFlaubertWithLMHeadModel"),_(Kt,"class","relative group"),_(qa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Es,"rel","nofollow"),_(La,"href","/docs/transformers/pr_highlight/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"id","transformers.TFFlaubertForSequenceClassification"),_(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vo,"href","#transformers.TFFlaubertForSequenceClassification"),_(Jt,"class","relative group"),_(ja,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ps,"rel","nofollow"),_(Pa,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zo,"id","transformers.TFFlaubertForMultipleChoice"),_(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Zo,"href","#transformers.TFFlaubertForMultipleChoice"),_(eo,"class","relative group"),_(Na,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Is,"rel","nofollow"),_(Sa,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(nn,"id","transformers.TFFlaubertForTokenClassification"),_(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(nn,"href","#transformers.TFFlaubertForTokenClassification"),_(oo,"class","relative group"),_(Aa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Rs,"rel","nofollow"),_(Oa,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(dn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),_(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(dn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),_(so,"class","relative group"),_(Da,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Js,"rel","nofollow"),_(Ia,"href","/docs/transformers/pr_highlight/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),b(o,g,T),b(o,c,T),e(c,p),e(p,k),F(l,k,null),e(c,m),e(c,z),e(z,le),b(o,Y,T),b(o,C,T),e(C,J),e(J,H),F(Z,H,null),e(C,de),e(C,Q),e(Q,ce),b(o,se,T),b(o,B,T),e(B,S),e(B,ee),e(ee,K),e(B,q),b(o,j,T),b(o,te,T),e(te,R),b(o,ae,T),b(o,oe,T),e(oe,U),e(U,pe),b(o,re,T),b(o,L,T),e(L,he),e(L,D),e(D,ue),e(L,me),e(L,I),e(I,fe),e(L,ge),b(o,N,T),b(o,G,T),e(G,O),e(O,ne),F(f,ne,null),e(G,E),e(G,V),e(V,$e),b(o,ve,T),b(o,P,T),F(Te,P,null),e(P,Me),e(P,_e),e(_e,A),e(_e,W),e(W,xe),e(_e,Ee),e(_e,X),e(X,ze),e(_e,Ce),e(P,be),e(P,ke),e(ke,ld),e(ke,ra),e(ra,dd),e(ke,cd),e(ke,ia),e(ia,pd),e(ke,hd),b(o,Wi,T),b(o,qt,T),e(qt,ho),e(ho,nr),F(Tn,nr,null),e(qt,ud),e(qt,sr),e(sr,md),b(o,Xi,T),b(o,et,T),F(vn,et,null),e(et,fd),e(et,ar),e(ar,gd),e(et,_d),e(et,kt),e(kt,rr),e(rr,bd),e(kt,kd),e(kt,ir),e(ir,Td),e(kt,vd),e(kt,Tt),e(Tt,wd),e(Tt,lr),e(lr,Fd),e(Tt,yd),e(Tt,dr),e(dr,$d),e(Tt,Md),e(Tt,cr),e(cr,xd),e(Tt,Ed),e(kt,zd),e(kt,wn),e(wn,Cd),e(wn,pr),e(pr,qd),e(wn,Ld),e(et,jd),e(et,Fn),e(Fn,Pd),e(Fn,la),e(la,Nd),e(Fn,Sd),b(o,Hi,T),b(o,Lt,T),e(Lt,uo),e(uo,hr),F(yn,hr,null),e(Lt,Ad),e(Lt,ur),e(ur,Od),b(o,Qi,T),b(o,Re,T),F($n,Re,null),e(Re,Dd),e(Re,mr),e(mr,Id),e(Re,Wd),e(Re,Mn),e(Mn,Xd),e(Mn,da),e(da,Hd),e(Mn,Qd),e(Re,Ud),e(Re,xn),e(xn,Rd),e(xn,En),e(En,Bd),e(xn,Vd),e(Re,Yd),e(Re,tt),F(zn,tt,null),e(tt,Kd),e(tt,jt),e(jt,Gd),e(jt,ca),e(ca,Jd),e(jt,Zd),e(jt,fr),e(fr,ec),e(jt,tc),e(tt,oc),F(mo,tt,null),e(tt,nc),F(fo,tt,null),b(o,Ui,T),b(o,Pt,T),e(Pt,go),e(go,gr),F(Cn,gr,null),e(Pt,sc),e(Pt,_r),e(_r,ac),b(o,Ri,T),b(o,je,T),F(qn,je,null),e(je,rc),e(je,br),e(br,ic),e(je,lc),e(je,Ln),e(Ln,dc),e(Ln,pa),e(pa,cc),e(Ln,pc),e(je,hc),e(je,jn),e(jn,uc),e(jn,Pn),e(Pn,mc),e(jn,fc),e(je,gc),e(je,Nn),e(Nn,_c),e(Nn,ha),e(ha,bc),e(Nn,kc),e(je,Tc),e(je,Be),F(Sn,Be,null),e(Be,vc),e(Be,Nt),e(Nt,wc),e(Nt,ua),e(ua,Fc),e(Nt,yc),e(Nt,kr),e(kr,$c),e(Nt,Mc),e(Be,xc),F(_o,Be,null),e(Be,Ec),F(bo,Be,null),e(Be,zc),F(ko,Be,null),b(o,Bi,T),b(o,St,T),e(St,To),e(To,Tr),F(An,Tr,null),e(St,Cc),e(St,vr),e(vr,qc),b(o,Vi,T),b(o,Pe,T),F(On,Pe,null),e(Pe,Lc),e(Pe,wr),e(wr,jc),e(Pe,Pc),e(Pe,Dn),e(Dn,Nc),e(Dn,ma),e(ma,Sc),e(Dn,Ac),e(Pe,Oc),e(Pe,In),e(In,Dc),e(In,Wn),e(Wn,Ic),e(In,Wc),e(Pe,Xc),e(Pe,Xn),e(Xn,Hc),e(Xn,fa),e(fa,Qc),e(Xn,Uc),e(Pe,Rc),e(Pe,Le),F(Hn,Le,null),e(Le,Bc),e(Le,At),e(At,Vc),e(At,ga),e(ga,Yc),e(At,Kc),e(At,Fr),e(Fr,Gc),e(At,Jc),e(Le,Zc),F(vo,Le,null),e(Le,ep),F(wo,Le,null),e(Le,tp),F(Fo,Le,null),e(Le,op),F(yo,Le,null),e(Le,np),F($o,Le,null),b(o,Yi,T),b(o,Ot,T),e(Ot,Mo),e(Mo,yr),F(Qn,yr,null),e(Ot,sp),e(Ot,$r),e($r,ap),b(o,Ki,T),b(o,Ne,T),F(Un,Ne,null),e(Ne,rp),e(Ne,Mr),e(Mr,ip),e(Ne,lp),e(Ne,Rn),e(Rn,dp),e(Rn,_a),e(_a,cp),e(Rn,pp),e(Ne,hp),e(Ne,Bn),e(Bn,up),e(Bn,Vn),e(Vn,mp),e(Bn,fp),e(Ne,gp),e(Ne,Yn),e(Yn,_p),e(Yn,ba),e(ba,bp),e(Yn,kp),e(Ne,Tp),e(Ne,ot),F(Kn,ot,null),e(ot,vp),e(ot,Dt),e(Dt,wp),e(Dt,ka),e(ka,Fp),e(Dt,yp),e(Dt,xr),e(xr,$p),e(Dt,Mp),e(ot,xp),F(xo,ot,null),e(ot,Ep),F(Eo,ot,null),b(o,Gi,T),b(o,It,T),e(It,zo),e(zo,Er),F(Gn,Er,null),e(It,zp),e(It,zr),e(zr,Cp),b(o,Ji,T),b(o,Se,T),F(Jn,Se,null),e(Se,qp),e(Se,Cr),e(Cr,Lp),e(Se,jp),e(Se,Zn),e(Zn,Pp),e(Zn,Ta),e(Ta,Np),e(Zn,Sp),e(Se,Ap),e(Se,es),e(es,Op),e(es,ts),e(ts,Dp),e(es,Ip),e(Se,Wp),e(Se,os),e(os,Xp),e(os,va),e(va,Hp),e(os,Qp),e(Se,Up),e(Se,Ve),F(ns,Ve,null),e(Ve,Rp),e(Ve,Wt),e(Wt,Bp),e(Wt,wa),e(wa,Vp),e(Wt,Yp),e(Wt,qr),e(qr,Kp),e(Wt,Gp),e(Ve,Jp),F(Co,Ve,null),e(Ve,Zp),F(qo,Ve,null),e(Ve,eh),F(Lo,Ve,null),b(o,Zi,T),b(o,Xt,T),e(Xt,jo),e(jo,Lr),F(ss,Lr,null),e(Xt,th),e(Xt,jr),e(jr,oh),b(o,el,T),b(o,Ae,T),F(as,Ae,null),e(Ae,nh),e(Ae,Ht),e(Ht,sh),e(Ht,Pr),e(Pr,ah),e(Ht,rh),e(Ht,Nr),e(Nr,ih),e(Ht,lh),e(Ae,dh),e(Ae,rs),e(rs,ch),e(rs,Fa),e(Fa,ph),e(rs,hh),e(Ae,uh),e(Ae,is),e(is,mh),e(is,ls),e(ls,fh),e(is,gh),e(Ae,_h),e(Ae,ds),e(ds,bh),e(ds,ya),e(ya,kh),e(ds,Th),e(Ae,vh),e(Ae,Ye),F(cs,Ye,null),e(Ye,wh),e(Ye,Qt),e(Qt,Fh),e(Qt,$a),e($a,yh),e(Qt,$h),e(Qt,Sr),e(Sr,Mh),e(Qt,xh),e(Ye,Eh),F(Po,Ye,null),e(Ye,zh),F(No,Ye,null),e(Ye,Ch),F(So,Ye,null),b(o,tl,T),b(o,Ut,T),e(Ut,Ao),e(Ao,Ar),F(ps,Ar,null),e(Ut,qh),e(Ut,Or),e(Or,Lh),b(o,ol,T),b(o,Oe,T),F(hs,Oe,null),e(Oe,jh),e(Oe,Rt),e(Rt,Ph),e(Rt,Dr),e(Dr,Nh),e(Rt,Sh),e(Rt,Ir),e(Ir,Ah),e(Rt,Oh),e(Oe,Dh),e(Oe,us),e(us,Ih),e(us,Ma),e(Ma,Wh),e(us,Xh),e(Oe,Hh),e(Oe,ms),e(ms,Qh),e(ms,fs),e(fs,Uh),e(ms,Rh),e(Oe,Bh),e(Oe,gs),e(gs,Vh),e(gs,xa),e(xa,Yh),e(gs,Kh),e(Oe,Gh),e(Oe,nt),F(_s,nt,null),e(nt,Jh),e(nt,Bt),e(Bt,Zh),e(Bt,Ea),e(Ea,eu),e(Bt,tu),e(Bt,Wr),e(Wr,ou),e(Bt,nu),e(nt,su),F(Oo,nt,null),e(nt,au),F(Do,nt,null),b(o,nl,T),b(o,Vt,T),e(Vt,Io),e(Io,Xr),F(bs,Xr,null),e(Vt,ru),e(Vt,Hr),e(Hr,iu),b(o,sl,T),b(o,De,T),F(ks,De,null),e(De,lu),e(De,Qr),e(Qr,du),e(De,cu),e(De,Ts),e(Ts,pu),e(Ts,za),e(za,hu),e(Ts,uu),e(De,mu),e(De,vs),e(vs,fu),e(vs,ws),e(ws,gu),e(vs,_u),e(De,bu),F(Wo,De,null),e(De,ku),e(De,st),F(Fs,st,null),e(st,Tu),e(st,Yt),e(Yt,vu),e(Yt,Ca),e(Ca,wu),e(Yt,Fu),e(Yt,Ur),e(Ur,yu),e(Yt,$u),e(st,Mu),F(Xo,st,null),e(st,xu),F(Ho,st,null),b(o,al,T),b(o,Kt,T),e(Kt,Qo),e(Qo,Rr),F(ys,Rr,null),e(Kt,Eu),e(Kt,Br),e(Br,zu),b(o,rl,T),b(o,Ie,T),F($s,Ie,null),e(Ie,Cu),e(Ie,Vr),e(Vr,qu),e(Ie,Lu),e(Ie,Ms),e(Ms,ju),e(Ms,qa),e(qa,Pu),e(Ms,Nu),e(Ie,Su),e(Ie,xs),e(xs,Au),e(xs,Es),e(Es,Ou),e(xs,Du),e(Ie,Iu),F(Uo,Ie,null),e(Ie,Wu),e(Ie,at),F(zs,at,null),e(at,Xu),e(at,Gt),e(Gt,Hu),e(Gt,La),e(La,Qu),e(Gt,Uu),e(Gt,Yr),e(Yr,Ru),e(Gt,Bu),e(at,Vu),F(Ro,at,null),e(at,Yu),F(Bo,at,null),b(o,il,T),b(o,Jt,T),e(Jt,Vo),e(Vo,Kr),F(Cs,Kr,null),e(Jt,Ku),e(Jt,Gr),e(Gr,Gu),b(o,ll,T),b(o,We,T),F(qs,We,null),e(We,Ju),e(We,Jr),e(Jr,Zu),e(We,em),e(We,Ls),e(Ls,tm),e(Ls,ja),e(ja,om),e(Ls,nm),e(We,sm),e(We,js),e(js,am),e(js,Ps),e(Ps,rm),e(js,im),e(We,lm),F(Yo,We,null),e(We,dm),e(We,Ke),F(Ns,Ke,null),e(Ke,cm),e(Ke,Zt),e(Zt,pm),e(Zt,Pa),e(Pa,hm),e(Zt,um),e(Zt,Zr),e(Zr,mm),e(Zt,fm),e(Ke,gm),F(Ko,Ke,null),e(Ke,_m),F(Go,Ke,null),e(Ke,bm),F(Jo,Ke,null),b(o,dl,T),b(o,eo,T),e(eo,Zo),e(Zo,ei),F(Ss,ei,null),e(eo,km),e(eo,ti),e(ti,Tm),b(o,cl,T),b(o,Xe,T),F(As,Xe,null),e(Xe,vm),e(Xe,oi),e(oi,wm),e(Xe,Fm),e(Xe,Os),e(Os,ym),e(Os,Na),e(Na,$m),e(Os,Mm),e(Xe,xm),e(Xe,Ds),e(Ds,Em),e(Ds,Is),e(Is,zm),e(Ds,Cm),e(Xe,qm),F(en,Xe,null),e(Xe,Lm),e(Xe,rt),F(Ws,rt,null),e(rt,jm),e(rt,to),e(to,Pm),e(to,Sa),e(Sa,Nm),e(to,Sm),e(to,ni),e(ni,Am),e(to,Om),e(rt,Dm),F(tn,rt,null),e(rt,Im),F(on,rt,null),b(o,pl,T),b(o,oo,T),e(oo,nn),e(nn,si),F(Xs,si,null),e(oo,Wm),e(oo,ai),e(ai,Xm),b(o,hl,T),b(o,He,T),F(Hs,He,null),e(He,Hm),e(He,ri),e(ri,Qm),e(He,Um),e(He,Qs),e(Qs,Rm),e(Qs,Aa),e(Aa,Bm),e(Qs,Vm),e(He,Ym),e(He,Us),e(Us,Km),e(Us,Rs),e(Rs,Gm),e(Us,Jm),e(He,Zm),F(sn,He,null),e(He,ef),e(He,Ge),F(Bs,Ge,null),e(Ge,tf),e(Ge,no),e(no,of),e(no,Oa),e(Oa,nf),e(no,sf),e(no,ii),e(ii,af),e(no,rf),e(Ge,lf),F(an,Ge,null),e(Ge,df),F(rn,Ge,null),e(Ge,cf),F(ln,Ge,null),b(o,ul,T),b(o,so,T),e(so,dn),e(dn,li),F(Vs,li,null),e(so,pf),e(so,di),e(di,hf),b(o,ml,T),b(o,Qe,T),F(Ys,Qe,null),e(Qe,uf),e(Qe,ao),e(ao,mf),e(ao,ci),e(ci,ff),e(ao,gf),e(ao,pi),e(pi,_f),e(ao,bf),e(Qe,kf),e(Qe,Ks),e(Ks,Tf),e(Ks,Da),e(Da,vf),e(Ks,wf),e(Qe,Ff),e(Qe,Gs),e(Gs,yf),e(Gs,Js),e(Js,$f),e(Gs,Mf),e(Qe,xf),F(cn,Qe,null),e(Qe,Ef),e(Qe,Je),F(Zs,Je,null),e(Je,zf),e(Je,ro),e(ro,Cf),e(ro,Ia),e(Ia,qf),e(ro,Lf),e(ro,hi),e(hi,jf),e(ro,Pf),e(Je,Nf),F(pn,Je,null),e(Je,Sf),F(hn,Je,null),e(Je,Af),F(un,Je,null),fl=!0},p(o,[T]){const ea={};T&2&&(ea.$$scope={dirty:T,ctx:o}),mo.$set(ea);const ui={};T&2&&(ui.$$scope={dirty:T,ctx:o}),fo.$set(ui);const mi={};T&2&&(mi.$$scope={dirty:T,ctx:o}),_o.$set(mi);const fi={};T&2&&(fi.$$scope={dirty:T,ctx:o}),bo.$set(fi);const ta={};T&2&&(ta.$$scope={dirty:T,ctx:o}),ko.$set(ta);const gi={};T&2&&(gi.$$scope={dirty:T,ctx:o}),vo.$set(gi);const _i={};T&2&&(_i.$$scope={dirty:T,ctx:o}),wo.$set(_i);const bi={};T&2&&(bi.$$scope={dirty:T,ctx:o}),Fo.$set(bi);const oa={};T&2&&(oa.$$scope={dirty:T,ctx:o}),yo.$set(oa);const ki={};T&2&&(ki.$$scope={dirty:T,ctx:o}),$o.$set(ki);const Ti={};T&2&&(Ti.$$scope={dirty:T,ctx:o}),xo.$set(Ti);const vi={};T&2&&(vi.$$scope={dirty:T,ctx:o}),Eo.$set(vi);const wi={};T&2&&(wi.$$scope={dirty:T,ctx:o}),Co.$set(wi);const io={};T&2&&(io.$$scope={dirty:T,ctx:o}),qo.$set(io);const Fi={};T&2&&(Fi.$$scope={dirty:T,ctx:o}),Lo.$set(Fi);const yi={};T&2&&(yi.$$scope={dirty:T,ctx:o}),Po.$set(yi);const na={};T&2&&(na.$$scope={dirty:T,ctx:o}),No.$set(na);const $i={};T&2&&($i.$$scope={dirty:T,ctx:o}),So.$set($i);const Mi={};T&2&&(Mi.$$scope={dirty:T,ctx:o}),Oo.$set(Mi);const xi={};T&2&&(xi.$$scope={dirty:T,ctx:o}),Do.$set(xi);const lo={};T&2&&(lo.$$scope={dirty:T,ctx:o}),Wo.$set(lo);const co={};T&2&&(co.$$scope={dirty:T,ctx:o}),Xo.$set(co);const Ei={};T&2&&(Ei.$$scope={dirty:T,ctx:o}),Ho.$set(Ei);const zi={};T&2&&(zi.$$scope={dirty:T,ctx:o}),Uo.$set(zi);const po={};T&2&&(po.$$scope={dirty:T,ctx:o}),Ro.$set(po);const Ci={};T&2&&(Ci.$$scope={dirty:T,ctx:o}),Bo.$set(Ci);const qi={};T&2&&(qi.$$scope={dirty:T,ctx:o}),Yo.$set(qi);const sa={};T&2&&(sa.$$scope={dirty:T,ctx:o}),Ko.$set(sa);const Li={};T&2&&(Li.$$scope={dirty:T,ctx:o}),Go.$set(Li);const ji={};T&2&&(ji.$$scope={dirty:T,ctx:o}),Jo.$set(ji);const Pi={};T&2&&(Pi.$$scope={dirty:T,ctx:o}),en.$set(Pi);const vt={};T&2&&(vt.$$scope={dirty:T,ctx:o}),tn.$set(vt);const Ni={};T&2&&(Ni.$$scope={dirty:T,ctx:o}),on.$set(Ni);const wt={};T&2&&(wt.$$scope={dirty:T,ctx:o}),sn.$set(wt);const Si={};T&2&&(Si.$$scope={dirty:T,ctx:o}),an.$set(Si);const Ai={};T&2&&(Ai.$$scope={dirty:T,ctx:o}),rn.$set(Ai);const Ft={};T&2&&(Ft.$$scope={dirty:T,ctx:o}),ln.$set(Ft);const Oi={};T&2&&(Oi.$$scope={dirty:T,ctx:o}),cn.$set(Oi);const Di={};T&2&&(Di.$$scope={dirty:T,ctx:o}),pn.$set(Di);const Ii={};T&2&&(Ii.$$scope={dirty:T,ctx:o}),hn.$set(Ii);const aa={};T&2&&(aa.$$scope={dirty:T,ctx:o}),un.$set(aa)},i(o){fl||(y(l.$$.fragment,o),y(Z.$$.fragment,o),y(f.$$.fragment,o),y(Te.$$.fragment,o),y(Tn.$$.fragment,o),y(vn.$$.fragment,o),y(yn.$$.fragment,o),y($n.$$.fragment,o),y(zn.$$.fragment,o),y(mo.$$.fragment,o),y(fo.$$.fragment,o),y(Cn.$$.fragment,o),y(qn.$$.fragment,o),y(Sn.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(An.$$.fragment,o),y(On.$$.fragment,o),y(Hn.$$.fragment,o),y(vo.$$.fragment,o),y(wo.$$.fragment,o),y(Fo.$$.fragment,o),y(yo.$$.fragment,o),y($o.$$.fragment,o),y(Qn.$$.fragment,o),y(Un.$$.fragment,o),y(Kn.$$.fragment,o),y(xo.$$.fragment,o),y(Eo.$$.fragment,o),y(Gn.$$.fragment,o),y(Jn.$$.fragment,o),y(ns.$$.fragment,o),y(Co.$$.fragment,o),y(qo.$$.fragment,o),y(Lo.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(cs.$$.fragment,o),y(Po.$$.fragment,o),y(No.$$.fragment,o),y(So.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(_s.$$.fragment,o),y(Oo.$$.fragment,o),y(Do.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(Wo.$$.fragment,o),y(Fs.$$.fragment,o),y(Xo.$$.fragment,o),y(Ho.$$.fragment,o),y(ys.$$.fragment,o),y($s.$$.fragment,o),y(Uo.$$.fragment,o),y(zs.$$.fragment,o),y(Ro.$$.fragment,o),y(Bo.$$.fragment,o),y(Cs.$$.fragment,o),y(qs.$$.fragment,o),y(Yo.$$.fragment,o),y(Ns.$$.fragment,o),y(Ko.$$.fragment,o),y(Go.$$.fragment,o),y(Jo.$$.fragment,o),y(Ss.$$.fragment,o),y(As.$$.fragment,o),y(en.$$.fragment,o),y(Ws.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(Xs.$$.fragment,o),y(Hs.$$.fragment,o),y(sn.$$.fragment,o),y(Bs.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(Vs.$$.fragment,o),y(Ys.$$.fragment,o),y(cn.$$.fragment,o),y(Zs.$$.fragment,o),y(pn.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),fl=!0)},o(o){$(l.$$.fragment,o),$(Z.$$.fragment,o),$(f.$$.fragment,o),$(Te.$$.fragment,o),$(Tn.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(zn.$$.fragment,o),$(mo.$$.fragment,o),$(fo.$$.fragment,o),$(Cn.$$.fragment,o),$(qn.$$.fragment,o),$(Sn.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Hn.$$.fragment,o),$(vo.$$.fragment,o),$(wo.$$.fragment,o),$(Fo.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(Qn.$$.fragment,o),$(Un.$$.fragment,o),$(Kn.$$.fragment,o),$(xo.$$.fragment,o),$(Eo.$$.fragment,o),$(Gn.$$.fragment,o),$(Jn.$$.fragment,o),$(ns.$$.fragment,o),$(Co.$$.fragment,o),$(qo.$$.fragment,o),$(Lo.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(cs.$$.fragment,o),$(Po.$$.fragment,o),$(No.$$.fragment,o),$(So.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(_s.$$.fragment,o),$(Oo.$$.fragment,o),$(Do.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(Wo.$$.fragment,o),$(Fs.$$.fragment,o),$(Xo.$$.fragment,o),$(Ho.$$.fragment,o),$(ys.$$.fragment,o),$($s.$$.fragment,o),$(Uo.$$.fragment,o),$(zs.$$.fragment,o),$(Ro.$$.fragment,o),$(Bo.$$.fragment,o),$(Cs.$$.fragment,o),$(qs.$$.fragment,o),$(Yo.$$.fragment,o),$(Ns.$$.fragment,o),$(Ko.$$.fragment,o),$(Go.$$.fragment,o),$(Jo.$$.fragment,o),$(Ss.$$.fragment,o),$(As.$$.fragment,o),$(en.$$.fragment,o),$(Ws.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(Xs.$$.fragment,o),$(Hs.$$.fragment,o),$(sn.$$.fragment,o),$(Bs.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(Vs.$$.fragment,o),$(Ys.$$.fragment,o),$(cn.$$.fragment,o),$(Zs.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),fl=!1},d(o){t(d),o&&t(g),o&&t(c),M(l),o&&t(Y),o&&t(C),M(Z),o&&t(se),o&&t(B),o&&t(j),o&&t(te),o&&t(ae),o&&t(oe),o&&t(re),o&&t(L),o&&t(N),o&&t(G),M(f),o&&t(ve),o&&t(P),M(Te),o&&t(Wi),o&&t(qt),M(Tn),o&&t(Xi),o&&t(et),M(vn),o&&t(Hi),o&&t(Lt),M(yn),o&&t(Qi),o&&t(Re),M($n),M(zn),M(mo),M(fo),o&&t(Ui),o&&t(Pt),M(Cn),o&&t(Ri),o&&t(je),M(qn),M(Sn),M(_o),M(bo),M(ko),o&&t(Bi),o&&t(St),M(An),o&&t(Vi),o&&t(Pe),M(On),M(Hn),M(vo),M(wo),M(Fo),M(yo),M($o),o&&t(Yi),o&&t(Ot),M(Qn),o&&t(Ki),o&&t(Ne),M(Un),M(Kn),M(xo),M(Eo),o&&t(Gi),o&&t(It),M(Gn),o&&t(Ji),o&&t(Se),M(Jn),M(ns),M(Co),M(qo),M(Lo),o&&t(Zi),o&&t(Xt),M(ss),o&&t(el),o&&t(Ae),M(as),M(cs),M(Po),M(No),M(So),o&&t(tl),o&&t(Ut),M(ps),o&&t(ol),o&&t(Oe),M(hs),M(_s),M(Oo),M(Do),o&&t(nl),o&&t(Vt),M(bs),o&&t(sl),o&&t(De),M(ks),M(Wo),M(Fs),M(Xo),M(Ho),o&&t(al),o&&t(Kt),M(ys),o&&t(rl),o&&t(Ie),M($s),M(Uo),M(zs),M(Ro),M(Bo),o&&t(il),o&&t(Jt),M(Cs),o&&t(ll),o&&t(We),M(qs),M(Yo),M(Ns),M(Ko),M(Go),M(Jo),o&&t(dl),o&&t(eo),M(Ss),o&&t(cl),o&&t(Xe),M(As),M(en),M(Ws),M(tn),M(on),o&&t(pl),o&&t(oo),M(Xs),o&&t(hl),o&&t(He),M(Hs),M(sn),M(Bs),M(an),M(rn),M(ln),o&&t(ul),o&&t(so),M(Vs),o&&t(ml),o&&t(Qe),M(Ys),M(cn),M(Zs),M(pn),M(hn),M(un)}}}const Ob={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Db(x){return Y_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rb extends U_{constructor(d){super();R_(this,d,Db,Ab,B_,{})}}export{Rb as default,Ob as metadata};
