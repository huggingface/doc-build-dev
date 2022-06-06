import{S as Xb,i as Eb,s as qb,e as a,k as m,w,t as n,M as zb,c as r,d as t,m as h,a as i,x as T,h as s,b,G as e,g as _,y,q as M,o as $,B as L,v as Cb,L as ve}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ce}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as we}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function jb(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMConfig, XLMModel

# Initializing a XLM configuration
configuration = XLMConfig()

# Initializing a model from the configuration
model = XLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMConfig, XLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),f=n("Examples:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Examples:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Ob(x){let d,f,c,p,k;return p=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),f=n("pair mask has the following format:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"pair mask has the following format:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Ab(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Pb(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, XLMModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Sb(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Nb(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Db(x){let d,f;return d=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Ib(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Wb(x){let d,f,c,p,k;return p=new we({props:{code:`import torch
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
`}}),{c(){d=a("p"),f=n("Example of single-label classification:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example of single-label classification:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Hb(x){let d,f;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Qb(x){let d,f,c,p,k;return p=new we({props:{code:`import torch
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
`}}),{c(){d=a("p"),f=n("Example of multi-label classification:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Ub(x){let d,f;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Bb(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Rb(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Vb(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Kb(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Yb(x){let d,f;return d=new we({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Gb(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Jb(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Zb(x){let d,f;return d=new we({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function ev(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function tv(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function ov(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),E=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),C=a("li"),Y=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),X=r(V,"LI",{});var Me=i(X);de=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),V.forEach(t),K=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),D=r(j,"CODE",{});var $e=i(D);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),O=r(g,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=h(g),q=r(g,"UL",{});var P=i(q);C=r(P,"LI",{});var N=i(C);Y=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(P),z=r(P,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(P),A=r(P,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);ke=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),P.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,k),e(k,l),e(p,u),e(p,X),e(X,de),_(g,K,F),_(g,E,F),e(E,Z),e(E,D),e(D,ee),e(E,ce),e(E,I),e(I,pe),e(E,re),_(g,R,F),_(g,O,F),e(O,te),_(g,G,F),_(g,q,F),e(q,C),e(C,Y),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,ke)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(K),g&&t(E),g&&t(R),g&&t(O),g&&t(G),g&&t(q)}}}function nv(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function sv(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, TFXLMModel
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function av(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),E=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),C=a("li"),Y=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),X=r(V,"LI",{});var Me=i(X);de=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),V.forEach(t),K=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),D=r(j,"CODE",{});var $e=i(D);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),O=r(g,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=h(g),q=r(g,"UL",{});var P=i(q);C=r(P,"LI",{});var N=i(C);Y=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(P),z=r(P,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(P),A=r(P,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);ke=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),P.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,k),e(k,l),e(p,u),e(p,X),e(X,de),_(g,K,F),_(g,E,F),e(E,Z),e(E,D),e(D,ee),e(E,ce),e(E,I),e(I,pe),e(E,re),_(g,R,F),_(g,O,F),e(O,te),_(g,G,F),_(g,q,F),e(q,C),e(C,Y),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,ke)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(K),g&&t(E),g&&t(R),g&&t(O),g&&t(G),g&&t(q)}}}function rv(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function iv(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, TFXLMWithLMHeadModel
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function lv(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),E=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),C=a("li"),Y=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),X=r(V,"LI",{});var Me=i(X);de=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),V.forEach(t),K=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),D=r(j,"CODE",{});var $e=i(D);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),O=r(g,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=h(g),q=r(g,"UL",{});var P=i(q);C=r(P,"LI",{});var N=i(C);Y=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(P),z=r(P,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(P),A=r(P,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);ke=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),P.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,k),e(k,l),e(p,u),e(p,X),e(X,de),_(g,K,F),_(g,E,F),e(E,Z),e(E,D),e(D,ee),e(E,ce),e(E,I),e(I,pe),e(E,re),_(g,R,F),_(g,O,F),e(O,te),_(g,G,F),_(g,q,F),e(q,C),e(C,Y),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,ke)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(K),g&&t(E),g&&t(R),g&&t(O),g&&t(G),g&&t(q)}}}function dv(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function cv(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function pv(x){let d,f;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function mv(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),E=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),C=a("li"),Y=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),X=r(V,"LI",{});var Me=i(X);de=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),V.forEach(t),K=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),D=r(j,"CODE",{});var $e=i(D);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),O=r(g,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=h(g),q=r(g,"UL",{});var P=i(q);C=r(P,"LI",{});var N=i(C);Y=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(P),z=r(P,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(P),A=r(P,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);ke=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),P.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,k),e(k,l),e(p,u),e(p,X),e(X,de),_(g,K,F),_(g,E,F),e(E,Z),e(E,D),e(D,ee),e(E,ce),e(E,I),e(I,pe),e(E,re),_(g,R,F),_(g,O,F),e(O,te),_(g,G,F),_(g,q,F),e(q,C),e(C,Y),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,ke)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(K),g&&t(E),g&&t(R),g&&t(O),g&&t(G),g&&t(q)}}}function hv(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function uv(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function fv(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),E=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),C=a("li"),Y=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),X=r(V,"LI",{});var Me=i(X);de=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),V.forEach(t),K=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),D=r(j,"CODE",{});var $e=i(D);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),O=r(g,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=h(g),q=r(g,"UL",{});var P=i(q);C=r(P,"LI",{});var N=i(C);Y=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(P),z=r(P,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(P),A=r(P,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);ke=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),P.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,k),e(k,l),e(p,u),e(p,X),e(X,de),_(g,K,F),_(g,E,F),e(E,Z),e(E,D),e(D,ee),e(E,ce),e(E,I),e(I,pe),e(E,re),_(g,R,F),_(g,O,F),e(O,te),_(g,G,F),_(g,q,F),e(q,C),e(C,Y),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,ke)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(K),g&&t(E),g&&t(R),g&&t(O),g&&t(G),g&&t(q)}}}function gv(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function _v(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function kv(x){let d,f;return d=new we({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function bv(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),E=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),C=a("li"),Y=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),X=r(V,"LI",{});var Me=i(X);de=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),V.forEach(t),K=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),D=r(j,"CODE",{});var $e=i(D);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),O=r(g,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=h(g),q=r(g,"UL",{});var P=i(q);C=r(P,"LI",{});var N=i(C);Y=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(P),z=r(P,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(P),A=r(P,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);ke=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),P.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,k),e(k,l),e(p,u),e(p,X),e(X,de),_(g,K,F),_(g,E,F),e(E,Z),e(E,D),e(D,ee),e(E,ce),e(E,I),e(I,pe),e(E,re),_(g,R,F),_(g,O,F),e(O,te),_(g,G,F),_(g,q,F),e(q,C),e(C,Y),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,ke)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(K),g&&t(E),g&&t(R),g&&t(O),g&&t(G),g&&t(q)}}}function vv(x){let d,f,c,p,k;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function wv(x){let d,f,c,p,k;return p=new we({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),w(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),T(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),y(p,l,u),k=!0},p:ve,i(l){k||(M(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Tv(x){let d,f;return d=new we({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,p){y(d,c,p),f=!0},p:ve,i(c){f||(M(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function yv(x){let d,f,c,p,k,l,u,X,de,K,E,Z,D,ee,ce,I,pe,re,R,O,te,G,q,C,Y,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,ke,g,F,V,ye,Me,j,$e,Te,Le,P,N,xe,Fe,B,le,Xe,oe,Ee,oc,Pn,nc,sc,Xl,At,To,Xr,Sn,ac,Er,rc,El,nt,Nn,ic,kt,lc,qa,dc,cc,za,pc,mc,Dn,hc,uc,fc,Pt,gc,Ca,_c,kc,ja,bc,vc,wc,yo,ql,St,Mo,qr,In,Tc,zr,yc,zl,qe,Wn,Mc,Cr,$c,Lc,We,jr,xc,Fc,Or,Xc,Ec,Ar,qc,zc,bt,Cc,Pr,jc,Oc,Sr,Ac,Pc,Nr,Sc,Nc,Dc,Hn,Ic,Dr,Wc,Hc,Qc,Qn,Uc,Ir,Bc,Rc,Vc,Un,Kc,Oa,Yc,Gc,Jc,Tt,Bn,Zc,Wr,ep,tp,Rn,Aa,op,Hr,np,sp,Pa,ap,Qr,rp,ip,$o,Vn,lp,Kn,dp,Ur,cp,pp,mp,st,Yn,hp,Br,up,fp,Lo,gp,Nt,_p,Rr,kp,bp,Vr,vp,wp,Tp,Sa,Gn,Cl,Dt,xo,Kr,Jn,yp,Yr,Mp,jl,It,Zn,$p,es,Lp,Gr,xp,Fp,Ol,Wt,Fo,Jr,ts,Xp,Zr,Ep,Al,He,os,qp,ei,zp,Cp,ns,jp,Na,Op,Ap,Pp,ss,Sp,as,Np,Dp,Ip,at,rs,Wp,Ht,Hp,Da,Qp,Up,ti,Bp,Rp,Vp,Xo,Kp,Eo,Pl,Qt,qo,oi,is,Yp,ni,Gp,Sl,Qe,ls,Jp,si,Zp,em,ds,tm,Ia,om,nm,sm,cs,am,ps,rm,im,lm,Ye,ms,dm,Ut,cm,Wa,pm,mm,ai,hm,um,fm,zo,gm,Co,_m,jo,Nl,Bt,Oo,ri,hs,km,ii,bm,Dl,Ue,us,vm,li,wm,Tm,fs,ym,Ha,Mm,$m,Lm,gs,xm,_s,Fm,Xm,Em,je,ks,qm,Rt,zm,Qa,Cm,jm,di,Om,Am,Pm,Ao,Sm,Po,Nm,So,Dm,No,Im,Do,Il,Vt,Io,ci,bs,Wm,pi,Hm,Wl,Be,vs,Qm,mi,Um,Bm,ws,Rm,Ua,Vm,Km,Ym,Ts,Gm,ys,Jm,Zm,eh,rt,Ms,th,Kt,oh,Ba,nh,sh,hi,ah,rh,ih,Wo,lh,Ho,Hl,Yt,Qo,ui,$s,dh,fi,ch,Ql,Re,Ls,ph,gi,mh,hh,xs,uh,Ra,fh,gh,_h,Fs,kh,Xs,bh,vh,wh,Ge,Es,Th,Gt,yh,Va,Mh,$h,_i,Lh,xh,Fh,Uo,Xh,Bo,Eh,Ro,Ul,Jt,Vo,ki,qs,qh,bi,zh,Bl,Ve,zs,Ch,Zt,jh,vi,Oh,Ah,wi,Ph,Sh,Nh,Cs,Dh,Ka,Ih,Wh,Hh,js,Qh,Os,Uh,Bh,Rh,Je,As,Vh,eo,Kh,Ya,Yh,Gh,Ti,Jh,Zh,eu,Ko,tu,Yo,ou,Go,Rl,to,Jo,yi,Ps,nu,Mi,su,Vl,Ke,Ss,au,oo,ru,$i,iu,lu,Li,du,cu,pu,Ns,mu,Ga,hu,uu,fu,Ds,gu,Is,_u,ku,bu,it,Ws,vu,no,wu,Ja,Tu,yu,xi,Mu,$u,Lu,Zo,xu,en,Kl,so,tn,Fi,Hs,Fu,Xi,Xu,Yl,Ae,Qs,Eu,Ei,qu,zu,Us,Cu,Za,ju,Ou,Au,Bs,Pu,Rs,Su,Nu,Du,on,Iu,lt,Vs,Wu,ao,Hu,er,Qu,Uu,qi,Bu,Ru,Vu,nn,Ku,sn,Gl,ro,an,zi,Ks,Yu,Ci,Gu,Jl,Pe,Ys,Ju,ji,Zu,ef,Gs,tf,tr,of,nf,sf,Js,af,Zs,rf,lf,df,rn,cf,dt,ea,pf,io,mf,or,hf,uf,Oi,ff,gf,_f,ln,kf,dn,Zl,lo,cn,Ai,ta,bf,Pi,vf,ed,Se,oa,wf,Si,Tf,yf,na,Mf,nr,$f,Lf,xf,sa,Ff,aa,Xf,Ef,qf,pn,zf,Ze,ra,Cf,co,jf,sr,Of,Af,Ni,Pf,Sf,Nf,mn,Df,hn,If,un,td,po,fn,Di,ia,Wf,Ii,Hf,od,Ne,la,Qf,Wi,Uf,Bf,da,Rf,ar,Vf,Kf,Yf,ca,Gf,pa,Jf,Zf,eg,gn,tg,ct,ma,og,mo,ng,rr,sg,ag,Hi,rg,ig,lg,_n,dg,kn,nd,ho,bn,Qi,ha,cg,Ui,pg,sd,De,ua,mg,Bi,hg,ug,fa,fg,ir,gg,_g,kg,ga,bg,_a,vg,wg,Tg,vn,yg,et,ka,Mg,uo,$g,lr,Lg,xg,Ri,Fg,Xg,Eg,wn,qg,Tn,zg,yn,ad,fo,Mn,Vi,ba,Cg,Ki,jg,rd,Ie,va,Og,go,Ag,Yi,Pg,Sg,Gi,Ng,Dg,Ig,wa,Wg,dr,Hg,Qg,Ug,Ta,Bg,ya,Rg,Vg,Kg,$n,Yg,tt,Ma,Gg,_o,Jg,cr,Zg,e_,Ji,t_,o_,n_,Ln,s_,xn,a_,Fn,id;return l=new Oe({}),ee=new Oe({}),Sn=new Oe({}),Nn=new J({props:{name:"class transformers.XLMConfig",anchor:"transformers.XLMConfig",parameters:[{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMModel">XLMModel</a> or <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMModel">TFXLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"emb_dim"},{anchor:"transformers.XLMConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.XLMConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.XLMConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention mechanism`,name:"attention_dropout"},{anchor:"transformers.XLMConfig.gelu_activation",description:`<strong>gelu_activation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use <em>gelu</em> for the activations instead of <em>relu</em>.`,name:"gelu_activation"},{anchor:"transformers.XLMConfig.sinusoidal_embeddings",description:`<strong>sinusoidal_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sinusoidal positional embeddings instead of absolute positional embeddings.`,name:"sinusoidal_embeddings"},{anchor:"transformers.XLMConfig.causal",description:`<strong>causal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should behave in a causal manner. Causal models use a triangular attention mask in
order to only attend to the left-side context instead if a bidirectional context.`,name:"causal"},{anchor:"transformers.XLMConfig.asm",description:`<strong>asm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use an adaptive log softmax projection layer instead of a linear layer for the prediction
layer.`,name:"asm"},{anchor:"transformers.XLMConfig.n_langs",description:`<strong>n_langs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of languages the model handles. Set to 1 for monolingual models.`,name:"n_langs"},{anchor:"transformers.XLMConfig.use_lang_emb",description:`<strong>use_lang_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use language embeddings. Some models use additional language embeddings, see <a href="http://huggingface.co/transformers/multilingual.html#xlm-language-embeddings" rel="nofollow">the multilingual
models page</a> for information
on how to use them.`,name:"use_lang_emb"},{anchor:"transformers.XLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMConfig.embed_init_std",description:`<strong>embed_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 2048^-0.5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing the embedding matrices.`,name:"embed_init_std"},{anchor:"transformers.XLMConfig.init_std",description:`<strong>init_std</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices except the
embedding matrices.`,name:"init_std"},{anchor:"transformers.XLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMConfig.bos_index",description:`<strong>bos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the beginning of sentence token in the vocabulary.`,name:"bos_index"},{anchor:"transformers.XLMConfig.eos_index",description:`<strong>eos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The index of the end of sentence token in the vocabulary.`,name:"eos_index"},{anchor:"transformers.XLMConfig.pad_index",description:`<strong>pad_index</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The index of the padding token in the vocabulary.`,name:"pad_index"},{anchor:"transformers.XLMConfig.unk_index",description:`<strong>unk_index</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The index of the unknown token in the vocabulary.`,name:"unk_index"},{anchor:"transformers.XLMConfig.mask_index",description:`<strong>mask_index</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
The index of the masking token in the vocabulary.`,name:"mask_index"},{anchor:"transformers.XLMConfig.is_encoder(bool,",description:`<strong>is_encoder(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the initialized model should be a transformer encoder or decoder as seen in Vaswani et al.`,name:"is_encoder(bool,"},{anchor:"transformers.XLMConfig.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201C;first&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.XLMConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.XLMConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.XLMConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.XLMConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.XLMConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.XLMConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.XLMConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Model agnostic parameter to identify masked tokens when generating text in an MLM context.`,name:"mask_token_id"},{anchor:"transformers.XLMConfig.lang_id",description:`<strong>lang_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/configuration_xlm.py#L40"}}),yo=new be({props:{anchor:"transformers.XLMConfig.example",$$slots:{default:[jb]},$$scope:{ctx:x}}}),In=new Oe({}),Wn=new J({props:{name:"class transformers.XLMTokenizer",anchor:"transformers.XLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"do_lowercase_and_remove_accent",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Merges file.`,name:"merges_file"},{anchor:"transformers.XLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;special1&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;special0&gt;&quot;,&quot;&lt;special1&gt;&quot;,&quot;&lt;special2&gt;&quot;,&quot;&lt;special3&gt;&quot;,&quot;&lt;special4&gt;&quot;,&quot;&lt;special5&gt;&quot;,&quot;&lt;special6&gt;&quot;,&quot;&lt;special7&gt;&quot;,&quot;&lt;special8&gt;&quot;,&quot;&lt;special9&gt;&quot;]</code>) &#x2014;
List of additional special tokens.`,name:"additional_special_tokens"},{anchor:"transformers.XLMTokenizer.lang2id",description:`<strong>lang2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) &#x2014;
Dictionary mapping languages string identifiers to their IDs.`,name:"lang2id"},{anchor:"transformers.XLMTokenizer.id2lang",description:`<strong>id2lang</strong> (<code>Dict[int, str]</code>, <em>optional</em>) &#x2014;
Dictionary mapping language IDs to their string identifiers.`,name:"id2lang"},{anchor:"transformers.XLMTokenizer.do_lowercase_and_remove_accent",description:`<strong>do_lowercase_and_remove_accent</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase and remove accents when tokenizing.`,name:"do_lowercase_and_remove_accent"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/tokenization_xlm.py#L528"}}),Bn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/tokenization_xlm.py#L872",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/tokenization_xlm.py#L899",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/tokenization_xlm.py#L927",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Lo=new be({props:{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ob]},$$scope:{ctx:x}}}),Gn=new J({props:{name:"save_vocabulary",anchor:"transformers.XLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/tokenization_xlm.py#L956"}}),Jn=new Oe({}),Zn=new J({props:{name:"class transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.`,name:"loss"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.start_top_log_probs",description:`<strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_log_probs"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.start_top_index",description:`<strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_index"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.end_top_log_probs",description:`<strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).`,name:"end_top_log_probs"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.end_top_index",description:`<strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).`,name:"end_top_index"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.cls_logits",description:`<strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the <code>is_impossible</code> label of the answers.`,name:"cls_logits"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L264"}}),ts=new Oe({}),os=new J({props:{name:"class transformers.XLMModel",anchor:"transformers.XLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L395"}}),rs=new J({props:{name:"forward",anchor:"transformers.XLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L482",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),Xo=new Ce({props:{$$slots:{default:[Ab]},$$scope:{ctx:x}}}),Eo=new be({props:{anchor:"transformers.XLMModel.forward.example",$$slots:{default:[Pb]},$$scope:{ctx:x}}}),is=new Oe({}),ls=new J({props:{name:"class transformers.XLMWithLMHeadModel",anchor:"transformers.XLMWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L675"}}),ms=new J({props:{name:"forward",anchor:"transformers.XLMWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMWithLMHeadModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMWithLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMWithLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMWithLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMWithLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMWithLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),zo=new Ce({props:{$$slots:{default:[Sb]},$$scope:{ctx:x}}}),Co=new be({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example",$$slots:{default:[Nb]},$$scope:{ctx:x}}}),jo=new be({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example-2",$$slots:{default:[Db]},$$scope:{ctx:x}}}),hs=new Oe({}),us=new J({props:{name:"class transformers.XLMForSequenceClassification",anchor:"transformers.XLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L771"}}),ks=new J({props:{name:"forward",anchor:"transformers.XLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForSequenceClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Ao=new Ce({props:{$$slots:{default:[Ib]},$$scope:{ctx:x}}}),Po=new be({props:{anchor:"transformers.XLMForSequenceClassification.forward.example",$$slots:{default:[Wb]},$$scope:{ctx:x}}}),So=new be({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-2",$$slots:{default:[Hb]},$$scope:{ctx:x}}}),No=new be({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-3",$$slots:{default:[Qb]},$$scope:{ctx:x}}}),Do=new be({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-4",$$slots:{default:[Ub]},$$scope:{ctx:x}}}),bs=new Oe({}),vs=new J({props:{name:"class transformers.XLMForMultipleChoice",anchor:"transformers.XLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L1185"}}),Ms=new J({props:{name:"forward",anchor:"transformers.XLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForMultipleChoice.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Wo=new Ce({props:{$$slots:{default:[Bb]},$$scope:{ctx:x}}}),Ho=new be({props:{anchor:"transformers.XLMForMultipleChoice.forward.example",$$slots:{default:[Rb]},$$scope:{ctx:x}}}),$s=new Oe({}),Ls=new J({props:{name:"class transformers.XLMForTokenClassification",anchor:"transformers.XLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L1100"}}),Es=new J({props:{name:"forward",anchor:"transformers.XLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForTokenClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Uo=new Ce({props:{$$slots:{default:[Vb]},$$scope:{ctx:x}}}),Bo=new be({props:{anchor:"transformers.XLMForTokenClassification.forward.example",$$slots:{default:[Kb]},$$scope:{ctx:x}}}),Ro=new be({props:{anchor:"transformers.XLMForTokenClassification.forward.example-2",$$slots:{default:[Yb]},$$scope:{ctx:x}}}),qs=new Oe({}),zs=new J({props:{name:"class transformers.XLMForQuestionAnsweringSimple",anchor:"transformers.XLMForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L874"}}),As=new J({props:{name:"forward",anchor:"transformers.XLMForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Ko=new Ce({props:{$$slots:{default:[Gb]},$$scope:{ctx:x}}}),Yo=new be({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example",$$slots:{default:[Jb]},$$scope:{ctx:x}}}),Go=new be({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Zb]},$$scope:{ctx:x}}}),Ps=new Oe({}),Ss=new J({props:{name:"class transformers.XLMForQuestionAnswering",anchor:"transformers.XLMForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_xlm.py#L979"}}),Ws=new J({props:{name:"forward",anchor:"transformers.XLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForQuestionAnswering.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForQuestionAnswering.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.XLMForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.XLMForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.XLMForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Zo=new Ce({props:{$$slots:{default:[ev]},$$scope:{ctx:x}}}),en=new be({props:{anchor:"transformers.XLMForQuestionAnswering.forward.example",$$slots:{default:[tv]},$$scope:{ctx:x}}}),Hs=new Oe({}),Qs=new J({props:{name:"class transformers.TFXLMModel",anchor:"transformers.TFXLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L683"}}),on=new Ce({props:{$$slots:{default:[ov]},$$scope:{ctx:x}}}),Vs=new J({props:{name:"call",anchor:"transformers.TFXLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L688",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16658/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),nn=new Ce({props:{$$slots:{default:[nv]},$$scope:{ctx:x}}}),sn=new be({props:{anchor:"transformers.TFXLMModel.call.example",$$slots:{default:[sv]},$$scope:{ctx:x}}}),Ks=new Oe({}),Ys=new J({props:{name:"class transformers.TFXLMWithLMHeadModel",anchor:"transformers.TFXLMWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L796"}}),rn=new Ce({props:{$$slots:{default:[av]},$$scope:{ctx:x}}}),ea=new J({props:{name:"call",anchor:"transformers.TFXLMWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMWithLMHeadModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMWithLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMWithLMHeadModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMWithLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMWithLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMWithLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMWithLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMWithLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L823",returnDescription:`
<p>A <code>transformers.models.xlm.modeling_tf_xlm.TFXLMWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
<p><code>transformers.models.xlm.modeling_tf_xlm.TFXLMWithLMHeadModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Ce({props:{$$slots:{default:[rv]},$$scope:{ctx:x}}}),dn=new be({props:{anchor:"transformers.TFXLMWithLMHeadModel.call.example",$$slots:{default:[iv]},$$scope:{ctx:x}}}),ta=new Oe({}),oa=new J({props:{name:"class transformers.TFXLMForSequenceClassification",anchor:"transformers.TFXLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L887"}}),pn=new Ce({props:{$$slots:{default:[lv]},$$scope:{ctx:x}}}),ra=new J({props:{name:"call",anchor:"transformers.TFXLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),mn=new Ce({props:{$$slots:{default:[dv]},$$scope:{ctx:x}}}),hn=new be({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example",$$slots:{default:[cv]},$$scope:{ctx:x}}}),un=new be({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example-2",$$slots:{default:[pv]},$$scope:{ctx:x}}}),ia=new Oe({}),la=new J({props:{name:"class transformers.TFXLMForMultipleChoice",anchor:"transformers.TFXLMForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L973"}}),gn=new Ce({props:{$$slots:{default:[mv]},$$scope:{ctx:x}}}),ma=new J({props:{name:"call",anchor:"transformers.TFXLMForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
`}}),_n=new Ce({props:{$$slots:{default:[hv]},$$scope:{ctx:x}}}),kn=new be({props:{anchor:"transformers.TFXLMForMultipleChoice.call.example",$$slots:{default:[uv]},$$scope:{ctx:x}}}),ha=new Oe({}),ua=new J({props:{name:"class transformers.TFXLMForTokenClassification",anchor:"transformers.TFXLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L1115"}}),vn=new Ce({props:{$$slots:{default:[fv]},$$scope:{ctx:x}}}),ka=new J({props:{name:"call",anchor:"transformers.TFXLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),wn=new Ce({props:{$$slots:{default:[gv]},$$scope:{ctx:x}}}),Tn=new be({props:{anchor:"transformers.TFXLMForTokenClassification.call.example",$$slots:{default:[_v]},$$scope:{ctx:x}}}),yn=new be({props:{anchor:"transformers.TFXLMForTokenClassification.call.example-2",$$slots:{default:[kv]},$$scope:{ctx:x}}}),ba=new Oe({}),va=new J({props:{name:"class transformers.TFXLMForQuestionAnsweringSimple",anchor:"transformers.TFXLMForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16658/src/transformers/models/xlm/modeling_tf_xlm.py#L1203"}}),$n=new Ce({props:{$$slots:{default:[bv]},$$scope:{ctx:x}}}),Ma=new J({props:{name:"call",anchor:"transformers.TFXLMForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"langs",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"lengths",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cache",val:": typing.Dict[str, tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16658/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16658/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16658/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16658/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Ln=new Ce({props:{$$slots:{default:[vv]},$$scope:{ctx:x}}}),xn=new be({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example",$$slots:{default:[wv]},$$scope:{ctx:x}}}),Fn=new be({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Tv]},$$scope:{ctx:x}}}),{c(){d=a("meta"),f=m(),c=a("h1"),p=a("a"),k=a("span"),w(l.$$.fragment),u=m(),X=a("span"),de=n("XLM"),K=m(),E=a("h2"),Z=a("a"),D=a("span"),w(ee.$$.fragment),ce=m(),I=a("span"),pe=n("Overview"),re=m(),R=a("p"),O=n("The XLM model was proposed in "),te=a("a"),G=n("Cross-lingual Language Model Pretraining"),q=n(` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),C=m(),Y=a("ul"),W=a("li"),me=n("a causal language modeling (CLM) objective (next token prediction),"),he=m(),H=a("li"),ue=n("a masked language modeling (MLM) objective (BERT-like), or"),fe=m(),z=a("li"),ge=n("a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),Q=m(),ne=a("p"),_e=n("The abstract from the paper is the following:"),U=m(),se=a("p"),ae=a("em"),A=n(`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),ie=m(),S=a("p"),ke=n("Tips:"),g=m(),F=a("ul"),V=a("li"),ye=n(`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),Me=m(),j=a("li"),$e=n("XLM has multilingual checkpoints which leverage a specific "),Te=a("code"),Le=n("lang"),P=n(" parameter. Check out the "),N=a("a"),xe=n("multi-lingual"),Fe=n(" page for more information."),B=m(),le=a("p"),Xe=n("This model was contributed by "),oe=a("a"),Ee=n("thomwolf"),oc=n(". The original code can be found "),Pn=a("a"),nc=n("here"),sc=n("."),Xl=m(),At=a("h2"),To=a("a"),Xr=a("span"),w(Sn.$$.fragment),ac=m(),Er=a("span"),rc=n("XLMConfig"),El=m(),nt=a("div"),w(Nn.$$.fragment),ic=m(),kt=a("p"),lc=n("This is the configuration class to store the configuration of a "),qa=a("a"),dc=n("XLMModel"),cc=n(" or a "),za=a("a"),pc=n("TFXLMModel"),mc=n(`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Dn=a("a"),hc=n("xlm-mlm-en-2048"),uc=n(" architecture."),fc=m(),Pt=a("p"),gc=n("Configuration objects inherit from "),Ca=a("a"),_c=n("PretrainedConfig"),kc=n(` and can be used to control the model outputs. Read the
documentation from `),ja=a("a"),bc=n("PretrainedConfig"),vc=n(" for more information."),wc=m(),w(yo.$$.fragment),ql=m(),St=a("h2"),Mo=a("a"),qr=a("span"),w(In.$$.fragment),Tc=m(),zr=a("span"),yc=n("XLMTokenizer"),zl=m(),qe=a("div"),w(Wn.$$.fragment),Mc=m(),Cr=a("p"),$c=n("Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Lc=m(),We=a("ul"),jr=a("li"),xc=n("Moses preprocessing and tokenization for most supported languages."),Fc=m(),Or=a("li"),Xc=n("Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),Ec=m(),Ar=a("li"),qc=n("Optionally lowercases and normalizes all inputs text."),zc=m(),bt=a("li"),Cc=n("The arguments "),Pr=a("code"),jc=n("special_tokens"),Oc=n(" and the function "),Sr=a("code"),Ac=n("set_special_tokens"),Pc=n(`, can be used to add additional symbols (like
\u201D`),Nr=a("strong"),Sc=n("classify"),Nc=n("\u201D) to a vocabulary."),Dc=m(),Hn=a("li"),Ic=n("The "),Dr=a("code"),Wc=n("lang2id"),Hc=n(` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),Qc=m(),Qn=a("li"),Uc=n("The "),Ir=a("code"),Bc=n("id2lang"),Rc=n(" attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),Vc=m(),Un=a("p"),Kc=n("This tokenizer inherits from "),Oa=a("a"),Yc=n("PreTrainedTokenizer"),Gc=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jc=m(),Tt=a("div"),w(Bn.$$.fragment),Zc=m(),Wr=a("p"),ep=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),tp=m(),Rn=a("ul"),Aa=a("li"),op=n("single sequence: "),Hr=a("code"),np=n("<s> X </s>"),sp=m(),Pa=a("li"),ap=n("pair of sequences: "),Qr=a("code"),rp=n("<s> A </s> B </s>"),ip=m(),$o=a("div"),w(Vn.$$.fragment),lp=m(),Kn=a("p"),dp=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ur=a("code"),cp=n("prepare_for_model"),pp=n(" method."),mp=m(),st=a("div"),w(Yn.$$.fragment),hp=m(),Br=a("p"),up=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),fp=m(),w(Lo.$$.fragment),gp=m(),Nt=a("p"),_p=n("If "),Rr=a("code"),kp=n("token_ids_1"),bp=n(" is "),Vr=a("code"),vp=n("None"),wp=n(", this method only returns the first portion of the mask (0s)."),Tp=m(),Sa=a("div"),w(Gn.$$.fragment),Cl=m(),Dt=a("h2"),xo=a("a"),Kr=a("span"),w(Jn.$$.fragment),yp=m(),Yr=a("span"),Mp=n("XLM specific outputs"),jl=m(),It=a("div"),w(Zn.$$.fragment),$p=m(),es=a("p"),Lp=n("Base class for outputs of question answering models using a "),Gr=a("code"),xp=n("SquadHead"),Fp=n("."),Ol=m(),Wt=a("h2"),Fo=a("a"),Jr=a("span"),w(ts.$$.fragment),Xp=m(),Zr=a("span"),Ep=n("XLMModel"),Al=m(),He=a("div"),w(os.$$.fragment),qp=m(),ei=a("p"),zp=n("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Cp=m(),ns=a("p"),jp=n("This model inherits from "),Na=a("a"),Op=n("PreTrainedModel"),Ap=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp=m(),ss=a("p"),Sp=n("This model is also a PyTorch "),as=a("a"),Np=n("torch.nn.Module"),Dp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ip=m(),at=a("div"),w(rs.$$.fragment),Wp=m(),Ht=a("p"),Hp=n("The "),Da=a("a"),Qp=n("XLMModel"),Up=n(" forward method, overrides the "),ti=a("code"),Bp=n("__call__"),Rp=n(" special method."),Vp=m(),w(Xo.$$.fragment),Kp=m(),w(Eo.$$.fragment),Pl=m(),Qt=a("h2"),qo=a("a"),oi=a("span"),w(is.$$.fragment),Yp=m(),ni=a("span"),Gp=n("XLMWithLMHeadModel"),Sl=m(),Qe=a("div"),w(ls.$$.fragment),Jp=m(),si=a("p"),Zp=n(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),em=m(),ds=a("p"),tm=n("This model inherits from "),Ia=a("a"),om=n("PreTrainedModel"),nm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=m(),cs=a("p"),am=n("This model is also a PyTorch "),ps=a("a"),rm=n("torch.nn.Module"),im=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lm=m(),Ye=a("div"),w(ms.$$.fragment),dm=m(),Ut=a("p"),cm=n("The "),Wa=a("a"),pm=n("XLMWithLMHeadModel"),mm=n(" forward method, overrides the "),ai=a("code"),hm=n("__call__"),um=n(" special method."),fm=m(),w(zo.$$.fragment),gm=m(),w(Co.$$.fragment),_m=m(),w(jo.$$.fragment),Nl=m(),Bt=a("h2"),Oo=a("a"),ri=a("span"),w(hs.$$.fragment),km=m(),ii=a("span"),bm=n("XLMForSequenceClassification"),Dl=m(),Ue=a("div"),w(us.$$.fragment),vm=m(),li=a("p"),wm=n(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Tm=m(),fs=a("p"),ym=n("This model inherits from "),Ha=a("a"),Mm=n("PreTrainedModel"),$m=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm=m(),gs=a("p"),xm=n("This model is also a PyTorch "),_s=a("a"),Fm=n("torch.nn.Module"),Xm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Em=m(),je=a("div"),w(ks.$$.fragment),qm=m(),Rt=a("p"),zm=n("The "),Qa=a("a"),Cm=n("XLMForSequenceClassification"),jm=n(" forward method, overrides the "),di=a("code"),Om=n("__call__"),Am=n(" special method."),Pm=m(),w(Ao.$$.fragment),Sm=m(),w(Po.$$.fragment),Nm=m(),w(So.$$.fragment),Dm=m(),w(No.$$.fragment),Im=m(),w(Do.$$.fragment),Il=m(),Vt=a("h2"),Io=a("a"),ci=a("span"),w(bs.$$.fragment),Wm=m(),pi=a("span"),Hm=n("XLMForMultipleChoice"),Wl=m(),Be=a("div"),w(vs.$$.fragment),Qm=m(),mi=a("p"),Um=n(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bm=m(),ws=a("p"),Rm=n("This model inherits from "),Ua=a("a"),Vm=n("PreTrainedModel"),Km=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ym=m(),Ts=a("p"),Gm=n("This model is also a PyTorch "),ys=a("a"),Jm=n("torch.nn.Module"),Zm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh=m(),rt=a("div"),w(Ms.$$.fragment),th=m(),Kt=a("p"),oh=n("The "),Ba=a("a"),nh=n("XLMForMultipleChoice"),sh=n(" forward method, overrides the "),hi=a("code"),ah=n("__call__"),rh=n(" special method."),ih=m(),w(Wo.$$.fragment),lh=m(),w(Ho.$$.fragment),Hl=m(),Yt=a("h2"),Qo=a("a"),ui=a("span"),w($s.$$.fragment),dh=m(),fi=a("span"),ch=n("XLMForTokenClassification"),Ql=m(),Re=a("div"),w(Ls.$$.fragment),ph=m(),gi=a("p"),mh=n(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hh=m(),xs=a("p"),uh=n("This model inherits from "),Ra=a("a"),fh=n("PreTrainedModel"),gh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=m(),Fs=a("p"),kh=n("This model is also a PyTorch "),Xs=a("a"),bh=n("torch.nn.Module"),vh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh=m(),Ge=a("div"),w(Es.$$.fragment),Th=m(),Gt=a("p"),yh=n("The "),Va=a("a"),Mh=n("XLMForTokenClassification"),$h=n(" forward method, overrides the "),_i=a("code"),Lh=n("__call__"),xh=n(" special method."),Fh=m(),w(Uo.$$.fragment),Xh=m(),w(Bo.$$.fragment),Eh=m(),w(Ro.$$.fragment),Ul=m(),Jt=a("h2"),Vo=a("a"),ki=a("span"),w(qs.$$.fragment),qh=m(),bi=a("span"),zh=n("XLMForQuestionAnsweringSimple"),Bl=m(),Ve=a("div"),w(zs.$$.fragment),Ch=m(),Zt=a("p"),jh=n(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vi=a("code"),Oh=n("span start logits"),Ah=n(" and "),wi=a("code"),Ph=n("span end logits"),Sh=n(")."),Nh=m(),Cs=a("p"),Dh=n("This model inherits from "),Ka=a("a"),Ih=n("PreTrainedModel"),Wh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=m(),js=a("p"),Qh=n("This model is also a PyTorch "),Os=a("a"),Uh=n("torch.nn.Module"),Bh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=m(),Je=a("div"),w(As.$$.fragment),Vh=m(),eo=a("p"),Kh=n("The "),Ya=a("a"),Yh=n("XLMForQuestionAnsweringSimple"),Gh=n(" forward method, overrides the "),Ti=a("code"),Jh=n("__call__"),Zh=n(" special method."),eu=m(),w(Ko.$$.fragment),tu=m(),w(Yo.$$.fragment),ou=m(),w(Go.$$.fragment),Rl=m(),to=a("h2"),Jo=a("a"),yi=a("span"),w(Ps.$$.fragment),nu=m(),Mi=a("span"),su=n("XLMForQuestionAnswering"),Vl=m(),Ke=a("div"),w(Ss.$$.fragment),au=m(),oo=a("p"),ru=n(`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),$i=a("code"),iu=n("span start logits"),lu=n(" and "),Li=a("code"),du=n("span end logits"),cu=n(")."),pu=m(),Ns=a("p"),mu=n("This model inherits from "),Ga=a("a"),hu=n("PreTrainedModel"),uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=m(),Ds=a("p"),gu=n("This model is also a PyTorch "),Is=a("a"),_u=n("torch.nn.Module"),ku=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bu=m(),it=a("div"),w(Ws.$$.fragment),vu=m(),no=a("p"),wu=n("The "),Ja=a("a"),Tu=n("XLMForQuestionAnswering"),yu=n(" forward method, overrides the "),xi=a("code"),Mu=n("__call__"),$u=n(" special method."),Lu=m(),w(Zo.$$.fragment),xu=m(),w(en.$$.fragment),Kl=m(),so=a("h2"),tn=a("a"),Fi=a("span"),w(Hs.$$.fragment),Fu=m(),Xi=a("span"),Xu=n("TFXLMModel"),Yl=m(),Ae=a("div"),w(Qs.$$.fragment),Eu=m(),Ei=a("p"),qu=n("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),zu=m(),Us=a("p"),Cu=n("This model inherits from "),Za=a("a"),ju=n("TFPreTrainedModel"),Ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au=m(),Bs=a("p"),Pu=n("This model is also a "),Rs=a("a"),Su=n("tf.keras.Model"),Nu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du=m(),w(on.$$.fragment),Iu=m(),lt=a("div"),w(Vs.$$.fragment),Wu=m(),ao=a("p"),Hu=n("The "),er=a("a"),Qu=n("TFXLMModel"),Uu=n(" forward method, overrides the "),qi=a("code"),Bu=n("__call__"),Ru=n(" special method."),Vu=m(),w(nn.$$.fragment),Ku=m(),w(sn.$$.fragment),Gl=m(),ro=a("h2"),an=a("a"),zi=a("span"),w(Ks.$$.fragment),Yu=m(),Ci=a("span"),Gu=n("TFXLMWithLMHeadModel"),Jl=m(),Pe=a("div"),w(Ys.$$.fragment),Ju=m(),ji=a("p"),Zu=n(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ef=m(),Gs=a("p"),tf=n("This model inherits from "),tr=a("a"),of=n("TFPreTrainedModel"),nf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf=m(),Js=a("p"),af=n("This model is also a "),Zs=a("a"),rf=n("tf.keras.Model"),lf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),df=m(),w(rn.$$.fragment),cf=m(),dt=a("div"),w(ea.$$.fragment),pf=m(),io=a("p"),mf=n("The "),or=a("a"),hf=n("TFXLMWithLMHeadModel"),uf=n(" forward method, overrides the "),Oi=a("code"),ff=n("__call__"),gf=n(" special method."),_f=m(),w(ln.$$.fragment),kf=m(),w(dn.$$.fragment),Zl=m(),lo=a("h2"),cn=a("a"),Ai=a("span"),w(ta.$$.fragment),bf=m(),Pi=a("span"),vf=n("TFXLMForSequenceClassification"),ed=m(),Se=a("div"),w(oa.$$.fragment),wf=m(),Si=a("p"),Tf=n(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),yf=m(),na=a("p"),Mf=n("This model inherits from "),nr=a("a"),$f=n("TFPreTrainedModel"),Lf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=m(),sa=a("p"),Ff=n("This model is also a "),aa=a("a"),Xf=n("tf.keras.Model"),Ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=m(),w(pn.$$.fragment),zf=m(),Ze=a("div"),w(ra.$$.fragment),Cf=m(),co=a("p"),jf=n("The "),sr=a("a"),Of=n("TFXLMForSequenceClassification"),Af=n(" forward method, overrides the "),Ni=a("code"),Pf=n("__call__"),Sf=n(" special method."),Nf=m(),w(mn.$$.fragment),Df=m(),w(hn.$$.fragment),If=m(),w(un.$$.fragment),td=m(),po=a("h2"),fn=a("a"),Di=a("span"),w(ia.$$.fragment),Wf=m(),Ii=a("span"),Hf=n("TFXLMForMultipleChoice"),od=m(),Ne=a("div"),w(la.$$.fragment),Qf=m(),Wi=a("p"),Uf=n(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bf=m(),da=a("p"),Rf=n("This model inherits from "),ar=a("a"),Vf=n("TFPreTrainedModel"),Kf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yf=m(),ca=a("p"),Gf=n("This model is also a "),pa=a("a"),Jf=n("tf.keras.Model"),Zf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eg=m(),w(gn.$$.fragment),tg=m(),ct=a("div"),w(ma.$$.fragment),og=m(),mo=a("p"),ng=n("The "),rr=a("a"),sg=n("TFXLMForMultipleChoice"),ag=n(" forward method, overrides the "),Hi=a("code"),rg=n("__call__"),ig=n(" special method."),lg=m(),w(_n.$$.fragment),dg=m(),w(kn.$$.fragment),nd=m(),ho=a("h2"),bn=a("a"),Qi=a("span"),w(ha.$$.fragment),cg=m(),Ui=a("span"),pg=n("TFXLMForTokenClassification"),sd=m(),De=a("div"),w(ua.$$.fragment),mg=m(),Bi=a("p"),hg=n(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ug=m(),fa=a("p"),fg=n("This model inherits from "),ir=a("a"),gg=n("TFPreTrainedModel"),_g=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kg=m(),ga=a("p"),bg=n("This model is also a "),_a=a("a"),vg=n("tf.keras.Model"),wg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tg=m(),w(vn.$$.fragment),yg=m(),et=a("div"),w(ka.$$.fragment),Mg=m(),uo=a("p"),$g=n("The "),lr=a("a"),Lg=n("TFXLMForTokenClassification"),xg=n(" forward method, overrides the "),Ri=a("code"),Fg=n("__call__"),Xg=n(" special method."),Eg=m(),w(wn.$$.fragment),qg=m(),w(Tn.$$.fragment),zg=m(),w(yn.$$.fragment),ad=m(),fo=a("h2"),Mn=a("a"),Vi=a("span"),w(ba.$$.fragment),Cg=m(),Ki=a("span"),jg=n("TFXLMForQuestionAnsweringSimple"),rd=m(),Ie=a("div"),w(va.$$.fragment),Og=m(),go=a("p"),Ag=n(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Yi=a("code"),Pg=n("span start logits"),Sg=n(" and "),Gi=a("code"),Ng=n("span end logits"),Dg=n(")."),Ig=m(),wa=a("p"),Wg=n("This model inherits from "),dr=a("a"),Hg=n("TFPreTrainedModel"),Qg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=m(),Ta=a("p"),Bg=n("This model is also a "),ya=a("a"),Rg=n("tf.keras.Model"),Vg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kg=m(),w($n.$$.fragment),Yg=m(),tt=a("div"),w(Ma.$$.fragment),Gg=m(),_o=a("p"),Jg=n("The "),cr=a("a"),Zg=n("TFXLMForQuestionAnsweringSimple"),e_=n(" forward method, overrides the "),Ji=a("code"),t_=n("__call__"),o_=n(" special method."),n_=m(),w(Ln.$$.fragment),s_=m(),w(xn.$$.fragment),a_=m(),w(Fn.$$.fragment),this.h()},l(o){const v=zb('[data-svelte="svelte-1phssyn"]',document.head);d=r(v,"META",{name:!0,content:!0}),v.forEach(t),f=h(o),c=r(o,"H1",{class:!0});var $a=i(c);p=r($a,"A",{id:!0,class:!0,href:!0});var Zi=i(p);k=r(Zi,"SPAN",{});var el=i(k);T(l.$$.fragment,el),el.forEach(t),Zi.forEach(t),u=h($a),X=r($a,"SPAN",{});var tl=i(X);de=s(tl,"XLM"),tl.forEach(t),$a.forEach(t),K=h(o),E=r(o,"H2",{class:!0});var La=i(E);Z=r(La,"A",{id:!0,class:!0,href:!0});var ol=i(Z);D=r(ol,"SPAN",{});var nl=i(D);T(ee.$$.fragment,nl),nl.forEach(t),ol.forEach(t),ce=h(La),I=r(La,"SPAN",{});var sl=i(I);pe=s(sl,"Overview"),sl.forEach(t),La.forEach(t),re=h(o),R=r(o,"P",{});var xa=i(R);O=s(xa,"The XLM model was proposed in "),te=r(xa,"A",{href:!0,rel:!0});var al=i(te);G=s(al,"Cross-lingual Language Model Pretraining"),al.forEach(t),q=s(xa,` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),xa.forEach(t),C=h(o),Y=r(o,"UL",{});var ko=i(Y);W=r(ko,"LI",{});var rl=i(W);me=s(rl,"a causal language modeling (CLM) objective (next token prediction),"),rl.forEach(t),he=h(ko),H=r(ko,"LI",{});var il=i(H);ue=s(il,"a masked language modeling (MLM) objective (BERT-like), or"),il.forEach(t),fe=h(ko),z=r(ko,"LI",{});var ll=i(z);ge=s(ll,"a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),ll.forEach(t),ko.forEach(t),Q=h(o),ne=r(o,"P",{});var dl=i(ne);_e=s(dl,"The abstract from the paper is the following:"),dl.forEach(t),U=h(o),se=r(o,"P",{});var cl=i(se);ae=r(cl,"EM",{});var pl=i(ae);A=s(pl,`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),pl.forEach(t),cl.forEach(t),ie=h(o),S=r(o,"P",{});var ml=i(S);ke=s(ml,"Tips:"),ml.forEach(t),g=h(o),F=r(o,"UL",{});var Fa=i(F);V=r(Fa,"LI",{});var hl=i(V);ye=s(hl,`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),hl.forEach(t),Me=h(Fa),j=r(Fa,"LI",{});var bo=i(j);$e=s(bo,"XLM has multilingual checkpoints which leverage a specific "),Te=r(bo,"CODE",{});var ul=i(Te);Le=s(ul,"lang"),ul.forEach(t),P=s(bo," parameter. Check out the "),N=r(bo,"A",{href:!0});var fl=i(N);xe=s(fl,"multi-lingual"),fl.forEach(t),Fe=s(bo," page for more information."),bo.forEach(t),Fa.forEach(t),B=h(o),le=r(o,"P",{});var vo=i(le);Xe=s(vo,"This model was contributed by "),oe=r(vo,"A",{href:!0,rel:!0});var gl=i(oe);Ee=s(gl,"thomwolf"),gl.forEach(t),oc=s(vo,". The original code can be found "),Pn=r(vo,"A",{href:!0,rel:!0});var _l=i(Pn);nc=s(_l,"here"),_l.forEach(t),sc=s(vo,"."),vo.forEach(t),Xl=h(o),At=r(o,"H2",{class:!0});var Xa=i(At);To=r(Xa,"A",{id:!0,class:!0,href:!0});var kl=i(To);Xr=r(kl,"SPAN",{});var bl=i(Xr);T(Sn.$$.fragment,bl),bl.forEach(t),kl.forEach(t),ac=h(Xa),Er=r(Xa,"SPAN",{});var vl=i(Er);rc=s(vl,"XLMConfig"),vl.forEach(t),Xa.forEach(t),El=h(o),nt=r(o,"DIV",{class:!0});var vt=i(nt);T(Nn.$$.fragment,vt),ic=h(vt),kt=r(vt,"P",{});var wt=i(kt);lc=s(wt,"This is the configuration class to store the configuration of a "),qa=r(wt,"A",{href:!0});var wl=i(qa);dc=s(wl,"XLMModel"),wl.forEach(t),cc=s(wt," or a "),za=r(wt,"A",{href:!0});var Tl=i(za);pc=s(Tl,"TFXLMModel"),Tl.forEach(t),mc=s(wt,`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Dn=r(wt,"A",{href:!0,rel:!0});var yl=i(Dn);hc=s(yl,"xlm-mlm-en-2048"),yl.forEach(t),uc=s(wt," architecture."),wt.forEach(t),fc=h(vt),Pt=r(vt,"P",{});var wo=i(Pt);gc=s(wo,"Configuration objects inherit from "),Ca=r(wo,"A",{href:!0});var Ml=i(Ca);_c=s(Ml,"PretrainedConfig"),Ml.forEach(t),kc=s(wo,` and can be used to control the model outputs. Read the
documentation from `),ja=r(wo,"A",{href:!0});var $l=i(ja);bc=s($l,"PretrainedConfig"),$l.forEach(t),vc=s(wo," for more information."),wo.forEach(t),wc=h(vt),T(yo.$$.fragment,vt),vt.forEach(t),ql=h(o),St=r(o,"H2",{class:!0});var Ea=i(St);Mo=r(Ea,"A",{id:!0,class:!0,href:!0});var Ll=i(Mo);qr=r(Ll,"SPAN",{});var xl=i(qr);T(In.$$.fragment,xl),xl.forEach(t),Ll.forEach(t),Tc=h(Ea),zr=r(Ea,"SPAN",{});var Fl=i(zr);yc=s(Fl,"XLMTokenizer"),Fl.forEach(t),Ea.forEach(t),zl=h(o),qe=r(o,"DIV",{class:!0});var ze=i(qe);T(Wn.$$.fragment,ze),Mc=h(ze),Cr=r(ze,"P",{});var l_=i(Cr);$c=s(l_,"Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),l_.forEach(t),Lc=h(ze),We=r(ze,"UL",{});var pt=i(We);jr=r(pt,"LI",{});var d_=i(jr);xc=s(d_,"Moses preprocessing and tokenization for most supported languages."),d_.forEach(t),Fc=h(pt),Or=r(pt,"LI",{});var c_=i(Or);Xc=s(c_,"Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),c_.forEach(t),Ec=h(pt),Ar=r(pt,"LI",{});var p_=i(Ar);qc=s(p_,"Optionally lowercases and normalizes all inputs text."),p_.forEach(t),zc=h(pt),bt=r(pt,"LI",{});var Xn=i(bt);Cc=s(Xn,"The arguments "),Pr=r(Xn,"CODE",{});var m_=i(Pr);jc=s(m_,"special_tokens"),m_.forEach(t),Oc=s(Xn," and the function "),Sr=r(Xn,"CODE",{});var h_=i(Sr);Ac=s(h_,"set_special_tokens"),h_.forEach(t),Pc=s(Xn,`, can be used to add additional symbols (like
\u201D`),Nr=r(Xn,"STRONG",{});var u_=i(Nr);Sc=s(u_,"classify"),u_.forEach(t),Nc=s(Xn,"\u201D) to a vocabulary."),Xn.forEach(t),Dc=h(pt),Hn=r(pt,"LI",{});var ld=i(Hn);Ic=s(ld,"The "),Dr=r(ld,"CODE",{});var f_=i(Dr);Wc=s(f_,"lang2id"),f_.forEach(t),Hc=s(ld,` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),ld.forEach(t),Qc=h(pt),Qn=r(pt,"LI",{});var dd=i(Qn);Uc=s(dd,"The "),Ir=r(dd,"CODE",{});var g_=i(Ir);Bc=s(g_,"id2lang"),g_.forEach(t),Rc=s(dd," attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),dd.forEach(t),pt.forEach(t),Vc=h(ze),Un=r(ze,"P",{});var cd=i(Un);Kc=s(cd,"This tokenizer inherits from "),Oa=r(cd,"A",{href:!0});var __=i(Oa);Yc=s(__,"PreTrainedTokenizer"),__.forEach(t),Gc=s(cd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),cd.forEach(t),Jc=h(ze),Tt=r(ze,"DIV",{class:!0});var pr=i(Tt);T(Bn.$$.fragment,pr),Zc=h(pr),Wr=r(pr,"P",{});var k_=i(Wr);ep=s(k_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),k_.forEach(t),tp=h(pr),Rn=r(pr,"UL",{});var pd=i(Rn);Aa=r(pd,"LI",{});var r_=i(Aa);op=s(r_,"single sequence: "),Hr=r(r_,"CODE",{});var b_=i(Hr);np=s(b_,"<s> X </s>"),b_.forEach(t),r_.forEach(t),sp=h(pd),Pa=r(pd,"LI",{});var i_=i(Pa);ap=s(i_,"pair of sequences: "),Qr=r(i_,"CODE",{});var v_=i(Qr);rp=s(v_,"<s> A </s> B </s>"),v_.forEach(t),i_.forEach(t),pd.forEach(t),pr.forEach(t),ip=h(ze),$o=r(ze,"DIV",{class:!0});var md=i($o);T(Vn.$$.fragment,md),lp=h(md),Kn=r(md,"P",{});var hd=i(Kn);dp=s(hd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ur=r(hd,"CODE",{});var w_=i(Ur);cp=s(w_,"prepare_for_model"),w_.forEach(t),pp=s(hd," method."),hd.forEach(t),md.forEach(t),mp=h(ze),st=r(ze,"DIV",{class:!0});var En=i(st);T(Yn.$$.fragment,En),hp=h(En),Br=r(En,"P",{});var T_=i(Br);up=s(T_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),T_.forEach(t),fp=h(En),T(Lo.$$.fragment,En),gp=h(En),Nt=r(En,"P",{});var mr=i(Nt);_p=s(mr,"If "),Rr=r(mr,"CODE",{});var y_=i(Rr);kp=s(y_,"token_ids_1"),y_.forEach(t),bp=s(mr," is "),Vr=r(mr,"CODE",{});var M_=i(Vr);vp=s(M_,"None"),M_.forEach(t),wp=s(mr,", this method only returns the first portion of the mask (0s)."),mr.forEach(t),En.forEach(t),Tp=h(ze),Sa=r(ze,"DIV",{class:!0});var $_=i(Sa);T(Gn.$$.fragment,$_),$_.forEach(t),ze.forEach(t),Cl=h(o),Dt=r(o,"H2",{class:!0});var ud=i(Dt);xo=r(ud,"A",{id:!0,class:!0,href:!0});var L_=i(xo);Kr=r(L_,"SPAN",{});var x_=i(Kr);T(Jn.$$.fragment,x_),x_.forEach(t),L_.forEach(t),yp=h(ud),Yr=r(ud,"SPAN",{});var F_=i(Yr);Mp=s(F_,"XLM specific outputs"),F_.forEach(t),ud.forEach(t),jl=h(o),It=r(o,"DIV",{class:!0});var fd=i(It);T(Zn.$$.fragment,fd),$p=h(fd),es=r(fd,"P",{});var gd=i(es);Lp=s(gd,"Base class for outputs of question answering models using a "),Gr=r(gd,"CODE",{});var X_=i(Gr);xp=s(X_,"SquadHead"),X_.forEach(t),Fp=s(gd,"."),gd.forEach(t),fd.forEach(t),Ol=h(o),Wt=r(o,"H2",{class:!0});var _d=i(Wt);Fo=r(_d,"A",{id:!0,class:!0,href:!0});var E_=i(Fo);Jr=r(E_,"SPAN",{});var q_=i(Jr);T(ts.$$.fragment,q_),q_.forEach(t),E_.forEach(t),Xp=h(_d),Zr=r(_d,"SPAN",{});var z_=i(Zr);Ep=s(z_,"XLMModel"),z_.forEach(t),_d.forEach(t),Al=h(o),He=r(o,"DIV",{class:!0});var yt=i(He);T(os.$$.fragment,yt),qp=h(yt),ei=r(yt,"P",{});var C_=i(ei);zp=s(C_,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),C_.forEach(t),Cp=h(yt),ns=r(yt,"P",{});var kd=i(ns);jp=s(kd,"This model inherits from "),Na=r(kd,"A",{href:!0});var j_=i(Na);Op=s(j_,"PreTrainedModel"),j_.forEach(t),Ap=s(kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd.forEach(t),Pp=h(yt),ss=r(yt,"P",{});var bd=i(ss);Sp=s(bd,"This model is also a PyTorch "),as=r(bd,"A",{href:!0,rel:!0});var O_=i(as);Np=s(O_,"torch.nn.Module"),O_.forEach(t),Dp=s(bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bd.forEach(t),Ip=h(yt),at=r(yt,"DIV",{class:!0});var qn=i(at);T(rs.$$.fragment,qn),Wp=h(qn),Ht=r(qn,"P",{});var hr=i(Ht);Hp=s(hr,"The "),Da=r(hr,"A",{href:!0});var A_=i(Da);Qp=s(A_,"XLMModel"),A_.forEach(t),Up=s(hr," forward method, overrides the "),ti=r(hr,"CODE",{});var P_=i(ti);Bp=s(P_,"__call__"),P_.forEach(t),Rp=s(hr," special method."),hr.forEach(t),Vp=h(qn),T(Xo.$$.fragment,qn),Kp=h(qn),T(Eo.$$.fragment,qn),qn.forEach(t),yt.forEach(t),Pl=h(o),Qt=r(o,"H2",{class:!0});var vd=i(Qt);qo=r(vd,"A",{id:!0,class:!0,href:!0});var S_=i(qo);oi=r(S_,"SPAN",{});var N_=i(oi);T(is.$$.fragment,N_),N_.forEach(t),S_.forEach(t),Yp=h(vd),ni=r(vd,"SPAN",{});var D_=i(ni);Gp=s(D_,"XLMWithLMHeadModel"),D_.forEach(t),vd.forEach(t),Sl=h(o),Qe=r(o,"DIV",{class:!0});var Mt=i(Qe);T(ls.$$.fragment,Mt),Jp=h(Mt),si=r(Mt,"P",{});var I_=i(si);Zp=s(I_,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),I_.forEach(t),em=h(Mt),ds=r(Mt,"P",{});var wd=i(ds);tm=s(wd,"This model inherits from "),Ia=r(wd,"A",{href:!0});var W_=i(Ia);om=s(W_,"PreTrainedModel"),W_.forEach(t),nm=s(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),sm=h(Mt),cs=r(Mt,"P",{});var Td=i(cs);am=s(Td,"This model is also a PyTorch "),ps=r(Td,"A",{href:!0,rel:!0});var H_=i(ps);rm=s(H_,"torch.nn.Module"),H_.forEach(t),im=s(Td,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td.forEach(t),lm=h(Mt),Ye=r(Mt,"DIV",{class:!0});var $t=i(Ye);T(ms.$$.fragment,$t),dm=h($t),Ut=r($t,"P",{});var ur=i(Ut);cm=s(ur,"The "),Wa=r(ur,"A",{href:!0});var Q_=i(Wa);pm=s(Q_,"XLMWithLMHeadModel"),Q_.forEach(t),mm=s(ur," forward method, overrides the "),ai=r(ur,"CODE",{});var U_=i(ai);hm=s(U_,"__call__"),U_.forEach(t),um=s(ur," special method."),ur.forEach(t),fm=h($t),T(zo.$$.fragment,$t),gm=h($t),T(Co.$$.fragment,$t),_m=h($t),T(jo.$$.fragment,$t),$t.forEach(t),Mt.forEach(t),Nl=h(o),Bt=r(o,"H2",{class:!0});var yd=i(Bt);Oo=r(yd,"A",{id:!0,class:!0,href:!0});var B_=i(Oo);ri=r(B_,"SPAN",{});var R_=i(ri);T(hs.$$.fragment,R_),R_.forEach(t),B_.forEach(t),km=h(yd),ii=r(yd,"SPAN",{});var V_=i(ii);bm=s(V_,"XLMForSequenceClassification"),V_.forEach(t),yd.forEach(t),Dl=h(o),Ue=r(o,"DIV",{class:!0});var Lt=i(Ue);T(us.$$.fragment,Lt),vm=h(Lt),li=r(Lt,"P",{});var K_=i(li);wm=s(K_,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),K_.forEach(t),Tm=h(Lt),fs=r(Lt,"P",{});var Md=i(fs);ym=s(Md,"This model inherits from "),Ha=r(Md,"A",{href:!0});var Y_=i(Ha);Mm=s(Y_,"PreTrainedModel"),Y_.forEach(t),$m=s(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(t),Lm=h(Lt),gs=r(Lt,"P",{});var $d=i(gs);xm=s($d,"This model is also a PyTorch "),_s=r($d,"A",{href:!0,rel:!0});var G_=i(_s);Fm=s(G_,"torch.nn.Module"),G_.forEach(t),Xm=s($d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$d.forEach(t),Em=h(Lt),je=r(Lt,"DIV",{class:!0});var ot=i(je);T(ks.$$.fragment,ot),qm=h(ot),Rt=r(ot,"P",{});var fr=i(Rt);zm=s(fr,"The "),Qa=r(fr,"A",{href:!0});var J_=i(Qa);Cm=s(J_,"XLMForSequenceClassification"),J_.forEach(t),jm=s(fr," forward method, overrides the "),di=r(fr,"CODE",{});var Z_=i(di);Om=s(Z_,"__call__"),Z_.forEach(t),Am=s(fr," special method."),fr.forEach(t),Pm=h(ot),T(Ao.$$.fragment,ot),Sm=h(ot),T(Po.$$.fragment,ot),Nm=h(ot),T(So.$$.fragment,ot),Dm=h(ot),T(No.$$.fragment,ot),Im=h(ot),T(Do.$$.fragment,ot),ot.forEach(t),Lt.forEach(t),Il=h(o),Vt=r(o,"H2",{class:!0});var Ld=i(Vt);Io=r(Ld,"A",{id:!0,class:!0,href:!0});var ek=i(Io);ci=r(ek,"SPAN",{});var tk=i(ci);T(bs.$$.fragment,tk),tk.forEach(t),ek.forEach(t),Wm=h(Ld),pi=r(Ld,"SPAN",{});var ok=i(pi);Hm=s(ok,"XLMForMultipleChoice"),ok.forEach(t),Ld.forEach(t),Wl=h(o),Be=r(o,"DIV",{class:!0});var xt=i(Be);T(vs.$$.fragment,xt),Qm=h(xt),mi=r(xt,"P",{});var nk=i(mi);Um=s(nk,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nk.forEach(t),Bm=h(xt),ws=r(xt,"P",{});var xd=i(ws);Rm=s(xd,"This model inherits from "),Ua=r(xd,"A",{href:!0});var sk=i(Ua);Vm=s(sk,"PreTrainedModel"),sk.forEach(t),Km=s(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Ym=h(xt),Ts=r(xt,"P",{});var Fd=i(Ts);Gm=s(Fd,"This model is also a PyTorch "),ys=r(Fd,"A",{href:!0,rel:!0});var ak=i(ys);Jm=s(ak,"torch.nn.Module"),ak.forEach(t),Zm=s(Fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fd.forEach(t),eh=h(xt),rt=r(xt,"DIV",{class:!0});var zn=i(rt);T(Ms.$$.fragment,zn),th=h(zn),Kt=r(zn,"P",{});var gr=i(Kt);oh=s(gr,"The "),Ba=r(gr,"A",{href:!0});var rk=i(Ba);nh=s(rk,"XLMForMultipleChoice"),rk.forEach(t),sh=s(gr," forward method, overrides the "),hi=r(gr,"CODE",{});var ik=i(hi);ah=s(ik,"__call__"),ik.forEach(t),rh=s(gr," special method."),gr.forEach(t),ih=h(zn),T(Wo.$$.fragment,zn),lh=h(zn),T(Ho.$$.fragment,zn),zn.forEach(t),xt.forEach(t),Hl=h(o),Yt=r(o,"H2",{class:!0});var Xd=i(Yt);Qo=r(Xd,"A",{id:!0,class:!0,href:!0});var lk=i(Qo);ui=r(lk,"SPAN",{});var dk=i(ui);T($s.$$.fragment,dk),dk.forEach(t),lk.forEach(t),dh=h(Xd),fi=r(Xd,"SPAN",{});var ck=i(fi);ch=s(ck,"XLMForTokenClassification"),ck.forEach(t),Xd.forEach(t),Ql=h(o),Re=r(o,"DIV",{class:!0});var Ft=i(Re);T(Ls.$$.fragment,Ft),ph=h(Ft),gi=r(Ft,"P",{});var pk=i(gi);mh=s(pk,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pk.forEach(t),hh=h(Ft),xs=r(Ft,"P",{});var Ed=i(xs);uh=s(Ed,"This model inherits from "),Ra=r(Ed,"A",{href:!0});var mk=i(Ra);fh=s(mk,"PreTrainedModel"),mk.forEach(t),gh=s(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),_h=h(Ft),Fs=r(Ft,"P",{});var qd=i(Fs);kh=s(qd,"This model is also a PyTorch "),Xs=r(qd,"A",{href:!0,rel:!0});var hk=i(Xs);bh=s(hk,"torch.nn.Module"),hk.forEach(t),vh=s(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),wh=h(Ft),Ge=r(Ft,"DIV",{class:!0});var Xt=i(Ge);T(Es.$$.fragment,Xt),Th=h(Xt),Gt=r(Xt,"P",{});var _r=i(Gt);yh=s(_r,"The "),Va=r(_r,"A",{href:!0});var uk=i(Va);Mh=s(uk,"XLMForTokenClassification"),uk.forEach(t),$h=s(_r," forward method, overrides the "),_i=r(_r,"CODE",{});var fk=i(_i);Lh=s(fk,"__call__"),fk.forEach(t),xh=s(_r," special method."),_r.forEach(t),Fh=h(Xt),T(Uo.$$.fragment,Xt),Xh=h(Xt),T(Bo.$$.fragment,Xt),Eh=h(Xt),T(Ro.$$.fragment,Xt),Xt.forEach(t),Ft.forEach(t),Ul=h(o),Jt=r(o,"H2",{class:!0});var zd=i(Jt);Vo=r(zd,"A",{id:!0,class:!0,href:!0});var gk=i(Vo);ki=r(gk,"SPAN",{});var _k=i(ki);T(qs.$$.fragment,_k),_k.forEach(t),gk.forEach(t),qh=h(zd),bi=r(zd,"SPAN",{});var kk=i(bi);zh=s(kk,"XLMForQuestionAnsweringSimple"),kk.forEach(t),zd.forEach(t),Bl=h(o),Ve=r(o,"DIV",{class:!0});var Et=i(Ve);T(zs.$$.fragment,Et),Ch=h(Et),Zt=r(Et,"P",{});var kr=i(Zt);jh=s(kr,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vi=r(kr,"CODE",{});var bk=i(vi);Oh=s(bk,"span start logits"),bk.forEach(t),Ah=s(kr," and "),wi=r(kr,"CODE",{});var vk=i(wi);Ph=s(vk,"span end logits"),vk.forEach(t),Sh=s(kr,")."),kr.forEach(t),Nh=h(Et),Cs=r(Et,"P",{});var Cd=i(Cs);Dh=s(Cd,"This model inherits from "),Ka=r(Cd,"A",{href:!0});var wk=i(Ka);Ih=s(wk,"PreTrainedModel"),wk.forEach(t),Wh=s(Cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd.forEach(t),Hh=h(Et),js=r(Et,"P",{});var jd=i(js);Qh=s(jd,"This model is also a PyTorch "),Os=r(jd,"A",{href:!0,rel:!0});var Tk=i(Os);Uh=s(Tk,"torch.nn.Module"),Tk.forEach(t),Bh=s(jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd.forEach(t),Rh=h(Et),Je=r(Et,"DIV",{class:!0});var qt=i(Je);T(As.$$.fragment,qt),Vh=h(qt),eo=r(qt,"P",{});var br=i(eo);Kh=s(br,"The "),Ya=r(br,"A",{href:!0});var yk=i(Ya);Yh=s(yk,"XLMForQuestionAnsweringSimple"),yk.forEach(t),Gh=s(br," forward method, overrides the "),Ti=r(br,"CODE",{});var Mk=i(Ti);Jh=s(Mk,"__call__"),Mk.forEach(t),Zh=s(br," special method."),br.forEach(t),eu=h(qt),T(Ko.$$.fragment,qt),tu=h(qt),T(Yo.$$.fragment,qt),ou=h(qt),T(Go.$$.fragment,qt),qt.forEach(t),Et.forEach(t),Rl=h(o),to=r(o,"H2",{class:!0});var Od=i(to);Jo=r(Od,"A",{id:!0,class:!0,href:!0});var $k=i(Jo);yi=r($k,"SPAN",{});var Lk=i(yi);T(Ps.$$.fragment,Lk),Lk.forEach(t),$k.forEach(t),nu=h(Od),Mi=r(Od,"SPAN",{});var xk=i(Mi);su=s(xk,"XLMForQuestionAnswering"),xk.forEach(t),Od.forEach(t),Vl=h(o),Ke=r(o,"DIV",{class:!0});var zt=i(Ke);T(Ss.$$.fragment,zt),au=h(zt),oo=r(zt,"P",{});var vr=i(oo);ru=s(vr,`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),$i=r(vr,"CODE",{});var Fk=i($i);iu=s(Fk,"span start logits"),Fk.forEach(t),lu=s(vr," and "),Li=r(vr,"CODE",{});var Xk=i(Li);du=s(Xk,"span end logits"),Xk.forEach(t),cu=s(vr,")."),vr.forEach(t),pu=h(zt),Ns=r(zt,"P",{});var Ad=i(Ns);mu=s(Ad,"This model inherits from "),Ga=r(Ad,"A",{href:!0});var Ek=i(Ga);hu=s(Ek,"PreTrainedModel"),Ek.forEach(t),uu=s(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),fu=h(zt),Ds=r(zt,"P",{});var Pd=i(Ds);gu=s(Pd,"This model is also a PyTorch "),Is=r(Pd,"A",{href:!0,rel:!0});var qk=i(Is);_u=s(qk,"torch.nn.Module"),qk.forEach(t),ku=s(Pd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pd.forEach(t),bu=h(zt),it=r(zt,"DIV",{class:!0});var Cn=i(it);T(Ws.$$.fragment,Cn),vu=h(Cn),no=r(Cn,"P",{});var wr=i(no);wu=s(wr,"The "),Ja=r(wr,"A",{href:!0});var zk=i(Ja);Tu=s(zk,"XLMForQuestionAnswering"),zk.forEach(t),yu=s(wr," forward method, overrides the "),xi=r(wr,"CODE",{});var Ck=i(xi);Mu=s(Ck,"__call__"),Ck.forEach(t),$u=s(wr," special method."),wr.forEach(t),Lu=h(Cn),T(Zo.$$.fragment,Cn),xu=h(Cn),T(en.$$.fragment,Cn),Cn.forEach(t),zt.forEach(t),Kl=h(o),so=r(o,"H2",{class:!0});var Sd=i(so);tn=r(Sd,"A",{id:!0,class:!0,href:!0});var jk=i(tn);Fi=r(jk,"SPAN",{});var Ok=i(Fi);T(Hs.$$.fragment,Ok),Ok.forEach(t),jk.forEach(t),Fu=h(Sd),Xi=r(Sd,"SPAN",{});var Ak=i(Xi);Xu=s(Ak,"TFXLMModel"),Ak.forEach(t),Sd.forEach(t),Yl=h(o),Ae=r(o,"DIV",{class:!0});var mt=i(Ae);T(Qs.$$.fragment,mt),Eu=h(mt),Ei=r(mt,"P",{});var Pk=i(Ei);qu=s(Pk,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Pk.forEach(t),zu=h(mt),Us=r(mt,"P",{});var Nd=i(Us);Cu=s(Nd,"This model inherits from "),Za=r(Nd,"A",{href:!0});var Sk=i(Za);ju=s(Sk,"TFPreTrainedModel"),Sk.forEach(t),Ou=s(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),Au=h(mt),Bs=r(mt,"P",{});var Dd=i(Bs);Pu=s(Dd,"This model is also a "),Rs=r(Dd,"A",{href:!0,rel:!0});var Nk=i(Rs);Su=s(Nk,"tf.keras.Model"),Nk.forEach(t),Nu=s(Dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dd.forEach(t),Du=h(mt),T(on.$$.fragment,mt),Iu=h(mt),lt=r(mt,"DIV",{class:!0});var jn=i(lt);T(Vs.$$.fragment,jn),Wu=h(jn),ao=r(jn,"P",{});var Tr=i(ao);Hu=s(Tr,"The "),er=r(Tr,"A",{href:!0});var Dk=i(er);Qu=s(Dk,"TFXLMModel"),Dk.forEach(t),Uu=s(Tr," forward method, overrides the "),qi=r(Tr,"CODE",{});var Ik=i(qi);Bu=s(Ik,"__call__"),Ik.forEach(t),Ru=s(Tr," special method."),Tr.forEach(t),Vu=h(jn),T(nn.$$.fragment,jn),Ku=h(jn),T(sn.$$.fragment,jn),jn.forEach(t),mt.forEach(t),Gl=h(o),ro=r(o,"H2",{class:!0});var Id=i(ro);an=r(Id,"A",{id:!0,class:!0,href:!0});var Wk=i(an);zi=r(Wk,"SPAN",{});var Hk=i(zi);T(Ks.$$.fragment,Hk),Hk.forEach(t),Wk.forEach(t),Yu=h(Id),Ci=r(Id,"SPAN",{});var Qk=i(Ci);Gu=s(Qk,"TFXLMWithLMHeadModel"),Qk.forEach(t),Id.forEach(t),Jl=h(o),Pe=r(o,"DIV",{class:!0});var ht=i(Pe);T(Ys.$$.fragment,ht),Ju=h(ht),ji=r(ht,"P",{});var Uk=i(ji);Zu=s(Uk,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Uk.forEach(t),ef=h(ht),Gs=r(ht,"P",{});var Wd=i(Gs);tf=s(Wd,"This model inherits from "),tr=r(Wd,"A",{href:!0});var Bk=i(tr);of=s(Bk,"TFPreTrainedModel"),Bk.forEach(t),nf=s(Wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd.forEach(t),sf=h(ht),Js=r(ht,"P",{});var Hd=i(Js);af=s(Hd,"This model is also a "),Zs=r(Hd,"A",{href:!0,rel:!0});var Rk=i(Zs);rf=s(Rk,"tf.keras.Model"),Rk.forEach(t),lf=s(Hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hd.forEach(t),df=h(ht),T(rn.$$.fragment,ht),cf=h(ht),dt=r(ht,"DIV",{class:!0});var On=i(dt);T(ea.$$.fragment,On),pf=h(On),io=r(On,"P",{});var yr=i(io);mf=s(yr,"The "),or=r(yr,"A",{href:!0});var Vk=i(or);hf=s(Vk,"TFXLMWithLMHeadModel"),Vk.forEach(t),uf=s(yr," forward method, overrides the "),Oi=r(yr,"CODE",{});var Kk=i(Oi);ff=s(Kk,"__call__"),Kk.forEach(t),gf=s(yr," special method."),yr.forEach(t),_f=h(On),T(ln.$$.fragment,On),kf=h(On),T(dn.$$.fragment,On),On.forEach(t),ht.forEach(t),Zl=h(o),lo=r(o,"H2",{class:!0});var Qd=i(lo);cn=r(Qd,"A",{id:!0,class:!0,href:!0});var Yk=i(cn);Ai=r(Yk,"SPAN",{});var Gk=i(Ai);T(ta.$$.fragment,Gk),Gk.forEach(t),Yk.forEach(t),bf=h(Qd),Pi=r(Qd,"SPAN",{});var Jk=i(Pi);vf=s(Jk,"TFXLMForSequenceClassification"),Jk.forEach(t),Qd.forEach(t),ed=h(o),Se=r(o,"DIV",{class:!0});var ut=i(Se);T(oa.$$.fragment,ut),wf=h(ut),Si=r(ut,"P",{});var Zk=i(Si);Tf=s(Zk,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Zk.forEach(t),yf=h(ut),na=r(ut,"P",{});var Ud=i(na);Mf=s(Ud,"This model inherits from "),nr=r(Ud,"A",{href:!0});var eb=i(nr);$f=s(eb,"TFPreTrainedModel"),eb.forEach(t),Lf=s(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),xf=h(ut),sa=r(ut,"P",{});var Bd=i(sa);Ff=s(Bd,"This model is also a "),aa=r(Bd,"A",{href:!0,rel:!0});var tb=i(aa);Xf=s(tb,"tf.keras.Model"),tb.forEach(t),Ef=s(Bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bd.forEach(t),qf=h(ut),T(pn.$$.fragment,ut),zf=h(ut),Ze=r(ut,"DIV",{class:!0});var Ct=i(Ze);T(ra.$$.fragment,Ct),Cf=h(Ct),co=r(Ct,"P",{});var Mr=i(co);jf=s(Mr,"The "),sr=r(Mr,"A",{href:!0});var ob=i(sr);Of=s(ob,"TFXLMForSequenceClassification"),ob.forEach(t),Af=s(Mr," forward method, overrides the "),Ni=r(Mr,"CODE",{});var nb=i(Ni);Pf=s(nb,"__call__"),nb.forEach(t),Sf=s(Mr," special method."),Mr.forEach(t),Nf=h(Ct),T(mn.$$.fragment,Ct),Df=h(Ct),T(hn.$$.fragment,Ct),If=h(Ct),T(un.$$.fragment,Ct),Ct.forEach(t),ut.forEach(t),td=h(o),po=r(o,"H2",{class:!0});var Rd=i(po);fn=r(Rd,"A",{id:!0,class:!0,href:!0});var sb=i(fn);Di=r(sb,"SPAN",{});var ab=i(Di);T(ia.$$.fragment,ab),ab.forEach(t),sb.forEach(t),Wf=h(Rd),Ii=r(Rd,"SPAN",{});var rb=i(Ii);Hf=s(rb,"TFXLMForMultipleChoice"),rb.forEach(t),Rd.forEach(t),od=h(o),Ne=r(o,"DIV",{class:!0});var ft=i(Ne);T(la.$$.fragment,ft),Qf=h(ft),Wi=r(ft,"P",{});var ib=i(Wi);Uf=s(ib,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ib.forEach(t),Bf=h(ft),da=r(ft,"P",{});var Vd=i(da);Rf=s(Vd,"This model inherits from "),ar=r(Vd,"A",{href:!0});var lb=i(ar);Vf=s(lb,"TFPreTrainedModel"),lb.forEach(t),Kf=s(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),Yf=h(ft),ca=r(ft,"P",{});var Kd=i(ca);Gf=s(Kd,"This model is also a "),pa=r(Kd,"A",{href:!0,rel:!0});var db=i(pa);Jf=s(db,"tf.keras.Model"),db.forEach(t),Zf=s(Kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kd.forEach(t),eg=h(ft),T(gn.$$.fragment,ft),tg=h(ft),ct=r(ft,"DIV",{class:!0});var An=i(ct);T(ma.$$.fragment,An),og=h(An),mo=r(An,"P",{});var $r=i(mo);ng=s($r,"The "),rr=r($r,"A",{href:!0});var cb=i(rr);sg=s(cb,"TFXLMForMultipleChoice"),cb.forEach(t),ag=s($r," forward method, overrides the "),Hi=r($r,"CODE",{});var pb=i(Hi);rg=s(pb,"__call__"),pb.forEach(t),ig=s($r," special method."),$r.forEach(t),lg=h(An),T(_n.$$.fragment,An),dg=h(An),T(kn.$$.fragment,An),An.forEach(t),ft.forEach(t),nd=h(o),ho=r(o,"H2",{class:!0});var Yd=i(ho);bn=r(Yd,"A",{id:!0,class:!0,href:!0});var mb=i(bn);Qi=r(mb,"SPAN",{});var hb=i(Qi);T(ha.$$.fragment,hb),hb.forEach(t),mb.forEach(t),cg=h(Yd),Ui=r(Yd,"SPAN",{});var ub=i(Ui);pg=s(ub,"TFXLMForTokenClassification"),ub.forEach(t),Yd.forEach(t),sd=h(o),De=r(o,"DIV",{class:!0});var gt=i(De);T(ua.$$.fragment,gt),mg=h(gt),Bi=r(gt,"P",{});var fb=i(Bi);hg=s(fb,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fb.forEach(t),ug=h(gt),fa=r(gt,"P",{});var Gd=i(fa);fg=s(Gd,"This model inherits from "),ir=r(Gd,"A",{href:!0});var gb=i(ir);gg=s(gb,"TFPreTrainedModel"),gb.forEach(t),_g=s(Gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gd.forEach(t),kg=h(gt),ga=r(gt,"P",{});var Jd=i(ga);bg=s(Jd,"This model is also a "),_a=r(Jd,"A",{href:!0,rel:!0});var _b=i(_a);vg=s(_b,"tf.keras.Model"),_b.forEach(t),wg=s(Jd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jd.forEach(t),Tg=h(gt),T(vn.$$.fragment,gt),yg=h(gt),et=r(gt,"DIV",{class:!0});var jt=i(et);T(ka.$$.fragment,jt),Mg=h(jt),uo=r(jt,"P",{});var Lr=i(uo);$g=s(Lr,"The "),lr=r(Lr,"A",{href:!0});var kb=i(lr);Lg=s(kb,"TFXLMForTokenClassification"),kb.forEach(t),xg=s(Lr," forward method, overrides the "),Ri=r(Lr,"CODE",{});var bb=i(Ri);Fg=s(bb,"__call__"),bb.forEach(t),Xg=s(Lr," special method."),Lr.forEach(t),Eg=h(jt),T(wn.$$.fragment,jt),qg=h(jt),T(Tn.$$.fragment,jt),zg=h(jt),T(yn.$$.fragment,jt),jt.forEach(t),gt.forEach(t),ad=h(o),fo=r(o,"H2",{class:!0});var Zd=i(fo);Mn=r(Zd,"A",{id:!0,class:!0,href:!0});var vb=i(Mn);Vi=r(vb,"SPAN",{});var wb=i(Vi);T(ba.$$.fragment,wb),wb.forEach(t),vb.forEach(t),Cg=h(Zd),Ki=r(Zd,"SPAN",{});var Tb=i(Ki);jg=s(Tb,"TFXLMForQuestionAnsweringSimple"),Tb.forEach(t),Zd.forEach(t),rd=h(o),Ie=r(o,"DIV",{class:!0});var _t=i(Ie);T(va.$$.fragment,_t),Og=h(_t),go=r(_t,"P",{});var xr=i(go);Ag=s(xr,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Yi=r(xr,"CODE",{});var yb=i(Yi);Pg=s(yb,"span start logits"),yb.forEach(t),Sg=s(xr," and "),Gi=r(xr,"CODE",{});var Mb=i(Gi);Ng=s(Mb,"span end logits"),Mb.forEach(t),Dg=s(xr,")."),xr.forEach(t),Ig=h(_t),wa=r(_t,"P",{});var ec=i(wa);Wg=s(ec,"This model inherits from "),dr=r(ec,"A",{href:!0});var $b=i(dr);Hg=s($b,"TFPreTrainedModel"),$b.forEach(t),Qg=s(ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ec.forEach(t),Ug=h(_t),Ta=r(_t,"P",{});var tc=i(Ta);Bg=s(tc,"This model is also a "),ya=r(tc,"A",{href:!0,rel:!0});var Lb=i(ya);Rg=s(Lb,"tf.keras.Model"),Lb.forEach(t),Vg=s(tc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc.forEach(t),Kg=h(_t),T($n.$$.fragment,_t),Yg=h(_t),tt=r(_t,"DIV",{class:!0});var Ot=i(tt);T(Ma.$$.fragment,Ot),Gg=h(Ot),_o=r(Ot,"P",{});var Fr=i(_o);Jg=s(Fr,"The "),cr=r(Fr,"A",{href:!0});var xb=i(cr);Zg=s(xb,"TFXLMForQuestionAnsweringSimple"),xb.forEach(t),e_=s(Fr," forward method, overrides the "),Ji=r(Fr,"CODE",{});var Fb=i(Ji);t_=s(Fb,"__call__"),Fb.forEach(t),o_=s(Fr," special method."),Fr.forEach(t),n_=h(Ot),T(Ln.$$.fragment,Ot),s_=h(Ot),T(xn.$$.fragment,Ot),a_=h(Ot),T(Fn.$$.fragment,Ot),Ot.forEach(t),_t.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(Mv)),b(p,"id","xlm"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#xlm"),b(c,"class","relative group"),b(Z,"id","overview"),b(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Z,"href","#overview"),b(E,"class","relative group"),b(te,"href","https://arxiv.org/abs/1901.07291"),b(te,"rel","nofollow"),b(N,"href","../multilingual"),b(oe,"href","https://huggingface.co/thomwolf"),b(oe,"rel","nofollow"),b(Pn,"href","https://github.com/facebookresearch/XLM/"),b(Pn,"rel","nofollow"),b(To,"id","transformers.XLMConfig"),b(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(To,"href","#transformers.XLMConfig"),b(At,"class","relative group"),b(qa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMModel"),b(za,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMModel"),b(Dn,"href","https://huggingface.co/xlm-mlm-en-2048"),b(Dn,"rel","nofollow"),b(Ca,"href","/docs/transformers/pr_16658/en/main_classes/configuration#transformers.PretrainedConfig"),b(ja,"href","/docs/transformers/pr_16658/en/main_classes/configuration#transformers.PretrainedConfig"),b(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Mo,"id","transformers.XLMTokenizer"),b(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Mo,"href","#transformers.XLMTokenizer"),b(St,"class","relative group"),b(Oa,"href","/docs/transformers/pr_16658/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),b(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Sa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xo,"id","transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),b(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(xo,"href","#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),b(Dt,"class","relative group"),b(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Fo,"id","transformers.XLMModel"),b(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Fo,"href","#transformers.XLMModel"),b(Wt,"class","relative group"),b(Na,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(as,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(as,"rel","nofollow"),b(Da,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMModel"),b(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qo,"id","transformers.XLMWithLMHeadModel"),b(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(qo,"href","#transformers.XLMWithLMHeadModel"),b(Qt,"class","relative group"),b(Ia,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ps,"rel","nofollow"),b(Wa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oo,"id","transformers.XLMForSequenceClassification"),b(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Oo,"href","#transformers.XLMForSequenceClassification"),b(Bt,"class","relative group"),b(Ha,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(_s,"rel","nofollow"),b(Qa,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForSequenceClassification"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Io,"id","transformers.XLMForMultipleChoice"),b(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Io,"href","#transformers.XLMForMultipleChoice"),b(Vt,"class","relative group"),b(Ua,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ys,"rel","nofollow"),b(Ba,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForMultipleChoice"),b(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qo,"id","transformers.XLMForTokenClassification"),b(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Qo,"href","#transformers.XLMForTokenClassification"),b(Yt,"class","relative group"),b(Ra,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Xs,"rel","nofollow"),b(Va,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForTokenClassification"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Vo,"id","transformers.XLMForQuestionAnsweringSimple"),b(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Vo,"href","#transformers.XLMForQuestionAnsweringSimple"),b(Jt,"class","relative group"),b(Ka,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Os,"rel","nofollow"),b(Ya,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Jo,"id","transformers.XLMForQuestionAnswering"),b(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Jo,"href","#transformers.XLMForQuestionAnswering"),b(to,"class","relative group"),b(Ga,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.PreTrainedModel"),b(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Is,"rel","nofollow"),b(Ja,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(tn,"id","transformers.TFXLMModel"),b(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(tn,"href","#transformers.TFXLMModel"),b(so,"class","relative group"),b(Za,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),b(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Rs,"rel","nofollow"),b(er,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMModel"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(an,"id","transformers.TFXLMWithLMHeadModel"),b(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(an,"href","#transformers.TFXLMWithLMHeadModel"),b(ro,"class","relative group"),b(tr,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),b(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Zs,"rel","nofollow"),b(or,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMWithLMHeadModel"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(cn,"id","transformers.TFXLMForSequenceClassification"),b(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(cn,"href","#transformers.TFXLMForSequenceClassification"),b(lo,"class","relative group"),b(nr,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),b(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(aa,"rel","nofollow"),b(sr,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(fn,"id","transformers.TFXLMForMultipleChoice"),b(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(fn,"href","#transformers.TFXLMForMultipleChoice"),b(po,"class","relative group"),b(ar,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),b(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(pa,"rel","nofollow"),b(rr,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(bn,"id","transformers.TFXLMForTokenClassification"),b(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(bn,"href","#transformers.TFXLMForTokenClassification"),b(ho,"class","relative group"),b(ir,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),b(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(_a,"rel","nofollow"),b(lr,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Mn,"id","transformers.TFXLMForQuestionAnsweringSimple"),b(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Mn,"href","#transformers.TFXLMForQuestionAnsweringSimple"),b(fo,"class","relative group"),b(dr,"href","/docs/transformers/pr_16658/en/main_classes/model#transformers.TFPreTrainedModel"),b(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(ya,"rel","nofollow"),b(cr,"href","/docs/transformers/pr_16658/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),_(o,f,v),_(o,c,v),e(c,p),e(p,k),y(l,k,null),e(c,u),e(c,X),e(X,de),_(o,K,v),_(o,E,v),e(E,Z),e(Z,D),y(ee,D,null),e(E,ce),e(E,I),e(I,pe),_(o,re,v),_(o,R,v),e(R,O),e(R,te),e(te,G),e(R,q),_(o,C,v),_(o,Y,v),e(Y,W),e(W,me),e(Y,he),e(Y,H),e(H,ue),e(Y,fe),e(Y,z),e(z,ge),_(o,Q,v),_(o,ne,v),e(ne,_e),_(o,U,v),_(o,se,v),e(se,ae),e(ae,A),_(o,ie,v),_(o,S,v),e(S,ke),_(o,g,v),_(o,F,v),e(F,V),e(V,ye),e(F,Me),e(F,j),e(j,$e),e(j,Te),e(Te,Le),e(j,P),e(j,N),e(N,xe),e(j,Fe),_(o,B,v),_(o,le,v),e(le,Xe),e(le,oe),e(oe,Ee),e(le,oc),e(le,Pn),e(Pn,nc),e(le,sc),_(o,Xl,v),_(o,At,v),e(At,To),e(To,Xr),y(Sn,Xr,null),e(At,ac),e(At,Er),e(Er,rc),_(o,El,v),_(o,nt,v),y(Nn,nt,null),e(nt,ic),e(nt,kt),e(kt,lc),e(kt,qa),e(qa,dc),e(kt,cc),e(kt,za),e(za,pc),e(kt,mc),e(kt,Dn),e(Dn,hc),e(kt,uc),e(nt,fc),e(nt,Pt),e(Pt,gc),e(Pt,Ca),e(Ca,_c),e(Pt,kc),e(Pt,ja),e(ja,bc),e(Pt,vc),e(nt,wc),y(yo,nt,null),_(o,ql,v),_(o,St,v),e(St,Mo),e(Mo,qr),y(In,qr,null),e(St,Tc),e(St,zr),e(zr,yc),_(o,zl,v),_(o,qe,v),y(Wn,qe,null),e(qe,Mc),e(qe,Cr),e(Cr,$c),e(qe,Lc),e(qe,We),e(We,jr),e(jr,xc),e(We,Fc),e(We,Or),e(Or,Xc),e(We,Ec),e(We,Ar),e(Ar,qc),e(We,zc),e(We,bt),e(bt,Cc),e(bt,Pr),e(Pr,jc),e(bt,Oc),e(bt,Sr),e(Sr,Ac),e(bt,Pc),e(bt,Nr),e(Nr,Sc),e(bt,Nc),e(We,Dc),e(We,Hn),e(Hn,Ic),e(Hn,Dr),e(Dr,Wc),e(Hn,Hc),e(We,Qc),e(We,Qn),e(Qn,Uc),e(Qn,Ir),e(Ir,Bc),e(Qn,Rc),e(qe,Vc),e(qe,Un),e(Un,Kc),e(Un,Oa),e(Oa,Yc),e(Un,Gc),e(qe,Jc),e(qe,Tt),y(Bn,Tt,null),e(Tt,Zc),e(Tt,Wr),e(Wr,ep),e(Tt,tp),e(Tt,Rn),e(Rn,Aa),e(Aa,op),e(Aa,Hr),e(Hr,np),e(Rn,sp),e(Rn,Pa),e(Pa,ap),e(Pa,Qr),e(Qr,rp),e(qe,ip),e(qe,$o),y(Vn,$o,null),e($o,lp),e($o,Kn),e(Kn,dp),e(Kn,Ur),e(Ur,cp),e(Kn,pp),e(qe,mp),e(qe,st),y(Yn,st,null),e(st,hp),e(st,Br),e(Br,up),e(st,fp),y(Lo,st,null),e(st,gp),e(st,Nt),e(Nt,_p),e(Nt,Rr),e(Rr,kp),e(Nt,bp),e(Nt,Vr),e(Vr,vp),e(Nt,wp),e(qe,Tp),e(qe,Sa),y(Gn,Sa,null),_(o,Cl,v),_(o,Dt,v),e(Dt,xo),e(xo,Kr),y(Jn,Kr,null),e(Dt,yp),e(Dt,Yr),e(Yr,Mp),_(o,jl,v),_(o,It,v),y(Zn,It,null),e(It,$p),e(It,es),e(es,Lp),e(es,Gr),e(Gr,xp),e(es,Fp),_(o,Ol,v),_(o,Wt,v),e(Wt,Fo),e(Fo,Jr),y(ts,Jr,null),e(Wt,Xp),e(Wt,Zr),e(Zr,Ep),_(o,Al,v),_(o,He,v),y(os,He,null),e(He,qp),e(He,ei),e(ei,zp),e(He,Cp),e(He,ns),e(ns,jp),e(ns,Na),e(Na,Op),e(ns,Ap),e(He,Pp),e(He,ss),e(ss,Sp),e(ss,as),e(as,Np),e(ss,Dp),e(He,Ip),e(He,at),y(rs,at,null),e(at,Wp),e(at,Ht),e(Ht,Hp),e(Ht,Da),e(Da,Qp),e(Ht,Up),e(Ht,ti),e(ti,Bp),e(Ht,Rp),e(at,Vp),y(Xo,at,null),e(at,Kp),y(Eo,at,null),_(o,Pl,v),_(o,Qt,v),e(Qt,qo),e(qo,oi),y(is,oi,null),e(Qt,Yp),e(Qt,ni),e(ni,Gp),_(o,Sl,v),_(o,Qe,v),y(ls,Qe,null),e(Qe,Jp),e(Qe,si),e(si,Zp),e(Qe,em),e(Qe,ds),e(ds,tm),e(ds,Ia),e(Ia,om),e(ds,nm),e(Qe,sm),e(Qe,cs),e(cs,am),e(cs,ps),e(ps,rm),e(cs,im),e(Qe,lm),e(Qe,Ye),y(ms,Ye,null),e(Ye,dm),e(Ye,Ut),e(Ut,cm),e(Ut,Wa),e(Wa,pm),e(Ut,mm),e(Ut,ai),e(ai,hm),e(Ut,um),e(Ye,fm),y(zo,Ye,null),e(Ye,gm),y(Co,Ye,null),e(Ye,_m),y(jo,Ye,null),_(o,Nl,v),_(o,Bt,v),e(Bt,Oo),e(Oo,ri),y(hs,ri,null),e(Bt,km),e(Bt,ii),e(ii,bm),_(o,Dl,v),_(o,Ue,v),y(us,Ue,null),e(Ue,vm),e(Ue,li),e(li,wm),e(Ue,Tm),e(Ue,fs),e(fs,ym),e(fs,Ha),e(Ha,Mm),e(fs,$m),e(Ue,Lm),e(Ue,gs),e(gs,xm),e(gs,_s),e(_s,Fm),e(gs,Xm),e(Ue,Em),e(Ue,je),y(ks,je,null),e(je,qm),e(je,Rt),e(Rt,zm),e(Rt,Qa),e(Qa,Cm),e(Rt,jm),e(Rt,di),e(di,Om),e(Rt,Am),e(je,Pm),y(Ao,je,null),e(je,Sm),y(Po,je,null),e(je,Nm),y(So,je,null),e(je,Dm),y(No,je,null),e(je,Im),y(Do,je,null),_(o,Il,v),_(o,Vt,v),e(Vt,Io),e(Io,ci),y(bs,ci,null),e(Vt,Wm),e(Vt,pi),e(pi,Hm),_(o,Wl,v),_(o,Be,v),y(vs,Be,null),e(Be,Qm),e(Be,mi),e(mi,Um),e(Be,Bm),e(Be,ws),e(ws,Rm),e(ws,Ua),e(Ua,Vm),e(ws,Km),e(Be,Ym),e(Be,Ts),e(Ts,Gm),e(Ts,ys),e(ys,Jm),e(Ts,Zm),e(Be,eh),e(Be,rt),y(Ms,rt,null),e(rt,th),e(rt,Kt),e(Kt,oh),e(Kt,Ba),e(Ba,nh),e(Kt,sh),e(Kt,hi),e(hi,ah),e(Kt,rh),e(rt,ih),y(Wo,rt,null),e(rt,lh),y(Ho,rt,null),_(o,Hl,v),_(o,Yt,v),e(Yt,Qo),e(Qo,ui),y($s,ui,null),e(Yt,dh),e(Yt,fi),e(fi,ch),_(o,Ql,v),_(o,Re,v),y(Ls,Re,null),e(Re,ph),e(Re,gi),e(gi,mh),e(Re,hh),e(Re,xs),e(xs,uh),e(xs,Ra),e(Ra,fh),e(xs,gh),e(Re,_h),e(Re,Fs),e(Fs,kh),e(Fs,Xs),e(Xs,bh),e(Fs,vh),e(Re,wh),e(Re,Ge),y(Es,Ge,null),e(Ge,Th),e(Ge,Gt),e(Gt,yh),e(Gt,Va),e(Va,Mh),e(Gt,$h),e(Gt,_i),e(_i,Lh),e(Gt,xh),e(Ge,Fh),y(Uo,Ge,null),e(Ge,Xh),y(Bo,Ge,null),e(Ge,Eh),y(Ro,Ge,null),_(o,Ul,v),_(o,Jt,v),e(Jt,Vo),e(Vo,ki),y(qs,ki,null),e(Jt,qh),e(Jt,bi),e(bi,zh),_(o,Bl,v),_(o,Ve,v),y(zs,Ve,null),e(Ve,Ch),e(Ve,Zt),e(Zt,jh),e(Zt,vi),e(vi,Oh),e(Zt,Ah),e(Zt,wi),e(wi,Ph),e(Zt,Sh),e(Ve,Nh),e(Ve,Cs),e(Cs,Dh),e(Cs,Ka),e(Ka,Ih),e(Cs,Wh),e(Ve,Hh),e(Ve,js),e(js,Qh),e(js,Os),e(Os,Uh),e(js,Bh),e(Ve,Rh),e(Ve,Je),y(As,Je,null),e(Je,Vh),e(Je,eo),e(eo,Kh),e(eo,Ya),e(Ya,Yh),e(eo,Gh),e(eo,Ti),e(Ti,Jh),e(eo,Zh),e(Je,eu),y(Ko,Je,null),e(Je,tu),y(Yo,Je,null),e(Je,ou),y(Go,Je,null),_(o,Rl,v),_(o,to,v),e(to,Jo),e(Jo,yi),y(Ps,yi,null),e(to,nu),e(to,Mi),e(Mi,su),_(o,Vl,v),_(o,Ke,v),y(Ss,Ke,null),e(Ke,au),e(Ke,oo),e(oo,ru),e(oo,$i),e($i,iu),e(oo,lu),e(oo,Li),e(Li,du),e(oo,cu),e(Ke,pu),e(Ke,Ns),e(Ns,mu),e(Ns,Ga),e(Ga,hu),e(Ns,uu),e(Ke,fu),e(Ke,Ds),e(Ds,gu),e(Ds,Is),e(Is,_u),e(Ds,ku),e(Ke,bu),e(Ke,it),y(Ws,it,null),e(it,vu),e(it,no),e(no,wu),e(no,Ja),e(Ja,Tu),e(no,yu),e(no,xi),e(xi,Mu),e(no,$u),e(it,Lu),y(Zo,it,null),e(it,xu),y(en,it,null),_(o,Kl,v),_(o,so,v),e(so,tn),e(tn,Fi),y(Hs,Fi,null),e(so,Fu),e(so,Xi),e(Xi,Xu),_(o,Yl,v),_(o,Ae,v),y(Qs,Ae,null),e(Ae,Eu),e(Ae,Ei),e(Ei,qu),e(Ae,zu),e(Ae,Us),e(Us,Cu),e(Us,Za),e(Za,ju),e(Us,Ou),e(Ae,Au),e(Ae,Bs),e(Bs,Pu),e(Bs,Rs),e(Rs,Su),e(Bs,Nu),e(Ae,Du),y(on,Ae,null),e(Ae,Iu),e(Ae,lt),y(Vs,lt,null),e(lt,Wu),e(lt,ao),e(ao,Hu),e(ao,er),e(er,Qu),e(ao,Uu),e(ao,qi),e(qi,Bu),e(ao,Ru),e(lt,Vu),y(nn,lt,null),e(lt,Ku),y(sn,lt,null),_(o,Gl,v),_(o,ro,v),e(ro,an),e(an,zi),y(Ks,zi,null),e(ro,Yu),e(ro,Ci),e(Ci,Gu),_(o,Jl,v),_(o,Pe,v),y(Ys,Pe,null),e(Pe,Ju),e(Pe,ji),e(ji,Zu),e(Pe,ef),e(Pe,Gs),e(Gs,tf),e(Gs,tr),e(tr,of),e(Gs,nf),e(Pe,sf),e(Pe,Js),e(Js,af),e(Js,Zs),e(Zs,rf),e(Js,lf),e(Pe,df),y(rn,Pe,null),e(Pe,cf),e(Pe,dt),y(ea,dt,null),e(dt,pf),e(dt,io),e(io,mf),e(io,or),e(or,hf),e(io,uf),e(io,Oi),e(Oi,ff),e(io,gf),e(dt,_f),y(ln,dt,null),e(dt,kf),y(dn,dt,null),_(o,Zl,v),_(o,lo,v),e(lo,cn),e(cn,Ai),y(ta,Ai,null),e(lo,bf),e(lo,Pi),e(Pi,vf),_(o,ed,v),_(o,Se,v),y(oa,Se,null),e(Se,wf),e(Se,Si),e(Si,Tf),e(Se,yf),e(Se,na),e(na,Mf),e(na,nr),e(nr,$f),e(na,Lf),e(Se,xf),e(Se,sa),e(sa,Ff),e(sa,aa),e(aa,Xf),e(sa,Ef),e(Se,qf),y(pn,Se,null),e(Se,zf),e(Se,Ze),y(ra,Ze,null),e(Ze,Cf),e(Ze,co),e(co,jf),e(co,sr),e(sr,Of),e(co,Af),e(co,Ni),e(Ni,Pf),e(co,Sf),e(Ze,Nf),y(mn,Ze,null),e(Ze,Df),y(hn,Ze,null),e(Ze,If),y(un,Ze,null),_(o,td,v),_(o,po,v),e(po,fn),e(fn,Di),y(ia,Di,null),e(po,Wf),e(po,Ii),e(Ii,Hf),_(o,od,v),_(o,Ne,v),y(la,Ne,null),e(Ne,Qf),e(Ne,Wi),e(Wi,Uf),e(Ne,Bf),e(Ne,da),e(da,Rf),e(da,ar),e(ar,Vf),e(da,Kf),e(Ne,Yf),e(Ne,ca),e(ca,Gf),e(ca,pa),e(pa,Jf),e(ca,Zf),e(Ne,eg),y(gn,Ne,null),e(Ne,tg),e(Ne,ct),y(ma,ct,null),e(ct,og),e(ct,mo),e(mo,ng),e(mo,rr),e(rr,sg),e(mo,ag),e(mo,Hi),e(Hi,rg),e(mo,ig),e(ct,lg),y(_n,ct,null),e(ct,dg),y(kn,ct,null),_(o,nd,v),_(o,ho,v),e(ho,bn),e(bn,Qi),y(ha,Qi,null),e(ho,cg),e(ho,Ui),e(Ui,pg),_(o,sd,v),_(o,De,v),y(ua,De,null),e(De,mg),e(De,Bi),e(Bi,hg),e(De,ug),e(De,fa),e(fa,fg),e(fa,ir),e(ir,gg),e(fa,_g),e(De,kg),e(De,ga),e(ga,bg),e(ga,_a),e(_a,vg),e(ga,wg),e(De,Tg),y(vn,De,null),e(De,yg),e(De,et),y(ka,et,null),e(et,Mg),e(et,uo),e(uo,$g),e(uo,lr),e(lr,Lg),e(uo,xg),e(uo,Ri),e(Ri,Fg),e(uo,Xg),e(et,Eg),y(wn,et,null),e(et,qg),y(Tn,et,null),e(et,zg),y(yn,et,null),_(o,ad,v),_(o,fo,v),e(fo,Mn),e(Mn,Vi),y(ba,Vi,null),e(fo,Cg),e(fo,Ki),e(Ki,jg),_(o,rd,v),_(o,Ie,v),y(va,Ie,null),e(Ie,Og),e(Ie,go),e(go,Ag),e(go,Yi),e(Yi,Pg),e(go,Sg),e(go,Gi),e(Gi,Ng),e(go,Dg),e(Ie,Ig),e(Ie,wa),e(wa,Wg),e(wa,dr),e(dr,Hg),e(wa,Qg),e(Ie,Ug),e(Ie,Ta),e(Ta,Bg),e(Ta,ya),e(ya,Rg),e(Ta,Vg),e(Ie,Kg),y($n,Ie,null),e(Ie,Yg),e(Ie,tt),y(Ma,tt,null),e(tt,Gg),e(tt,_o),e(_o,Jg),e(_o,cr),e(cr,Zg),e(_o,e_),e(_o,Ji),e(Ji,t_),e(_o,o_),e(tt,n_),y(Ln,tt,null),e(tt,s_),y(xn,tt,null),e(tt,a_),y(Fn,tt,null),id=!0},p(o,[v]){const $a={};v&2&&($a.$$scope={dirty:v,ctx:o}),yo.$set($a);const Zi={};v&2&&(Zi.$$scope={dirty:v,ctx:o}),Lo.$set(Zi);const el={};v&2&&(el.$$scope={dirty:v,ctx:o}),Xo.$set(el);const tl={};v&2&&(tl.$$scope={dirty:v,ctx:o}),Eo.$set(tl);const La={};v&2&&(La.$$scope={dirty:v,ctx:o}),zo.$set(La);const ol={};v&2&&(ol.$$scope={dirty:v,ctx:o}),Co.$set(ol);const nl={};v&2&&(nl.$$scope={dirty:v,ctx:o}),jo.$set(nl);const sl={};v&2&&(sl.$$scope={dirty:v,ctx:o}),Ao.$set(sl);const xa={};v&2&&(xa.$$scope={dirty:v,ctx:o}),Po.$set(xa);const al={};v&2&&(al.$$scope={dirty:v,ctx:o}),So.$set(al);const ko={};v&2&&(ko.$$scope={dirty:v,ctx:o}),No.$set(ko);const rl={};v&2&&(rl.$$scope={dirty:v,ctx:o}),Do.$set(rl);const il={};v&2&&(il.$$scope={dirty:v,ctx:o}),Wo.$set(il);const ll={};v&2&&(ll.$$scope={dirty:v,ctx:o}),Ho.$set(ll);const dl={};v&2&&(dl.$$scope={dirty:v,ctx:o}),Uo.$set(dl);const cl={};v&2&&(cl.$$scope={dirty:v,ctx:o}),Bo.$set(cl);const pl={};v&2&&(pl.$$scope={dirty:v,ctx:o}),Ro.$set(pl);const ml={};v&2&&(ml.$$scope={dirty:v,ctx:o}),Ko.$set(ml);const Fa={};v&2&&(Fa.$$scope={dirty:v,ctx:o}),Yo.$set(Fa);const hl={};v&2&&(hl.$$scope={dirty:v,ctx:o}),Go.$set(hl);const bo={};v&2&&(bo.$$scope={dirty:v,ctx:o}),Zo.$set(bo);const ul={};v&2&&(ul.$$scope={dirty:v,ctx:o}),en.$set(ul);const fl={};v&2&&(fl.$$scope={dirty:v,ctx:o}),on.$set(fl);const vo={};v&2&&(vo.$$scope={dirty:v,ctx:o}),nn.$set(vo);const gl={};v&2&&(gl.$$scope={dirty:v,ctx:o}),sn.$set(gl);const _l={};v&2&&(_l.$$scope={dirty:v,ctx:o}),rn.$set(_l);const Xa={};v&2&&(Xa.$$scope={dirty:v,ctx:o}),ln.$set(Xa);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:o}),dn.$set(kl);const bl={};v&2&&(bl.$$scope={dirty:v,ctx:o}),pn.$set(bl);const vl={};v&2&&(vl.$$scope={dirty:v,ctx:o}),mn.$set(vl);const vt={};v&2&&(vt.$$scope={dirty:v,ctx:o}),hn.$set(vt);const wt={};v&2&&(wt.$$scope={dirty:v,ctx:o}),un.$set(wt);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:o}),gn.$set(wl);const Tl={};v&2&&(Tl.$$scope={dirty:v,ctx:o}),_n.$set(Tl);const yl={};v&2&&(yl.$$scope={dirty:v,ctx:o}),kn.$set(yl);const wo={};v&2&&(wo.$$scope={dirty:v,ctx:o}),vn.$set(wo);const Ml={};v&2&&(Ml.$$scope={dirty:v,ctx:o}),wn.$set(Ml);const $l={};v&2&&($l.$$scope={dirty:v,ctx:o}),Tn.$set($l);const Ea={};v&2&&(Ea.$$scope={dirty:v,ctx:o}),yn.$set(Ea);const Ll={};v&2&&(Ll.$$scope={dirty:v,ctx:o}),$n.$set(Ll);const xl={};v&2&&(xl.$$scope={dirty:v,ctx:o}),Ln.$set(xl);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:o}),xn.$set(Fl);const ze={};v&2&&(ze.$$scope={dirty:v,ctx:o}),Fn.$set(ze)},i(o){id||(M(l.$$.fragment,o),M(ee.$$.fragment,o),M(Sn.$$.fragment,o),M(Nn.$$.fragment,o),M(yo.$$.fragment,o),M(In.$$.fragment,o),M(Wn.$$.fragment,o),M(Bn.$$.fragment,o),M(Vn.$$.fragment,o),M(Yn.$$.fragment,o),M(Lo.$$.fragment,o),M(Gn.$$.fragment,o),M(Jn.$$.fragment,o),M(Zn.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(rs.$$.fragment,o),M(Xo.$$.fragment,o),M(Eo.$$.fragment,o),M(is.$$.fragment,o),M(ls.$$.fragment,o),M(ms.$$.fragment,o),M(zo.$$.fragment,o),M(Co.$$.fragment,o),M(jo.$$.fragment,o),M(hs.$$.fragment,o),M(us.$$.fragment,o),M(ks.$$.fragment,o),M(Ao.$$.fragment,o),M(Po.$$.fragment,o),M(So.$$.fragment,o),M(No.$$.fragment,o),M(Do.$$.fragment,o),M(bs.$$.fragment,o),M(vs.$$.fragment,o),M(Ms.$$.fragment,o),M(Wo.$$.fragment,o),M(Ho.$$.fragment,o),M($s.$$.fragment,o),M(Ls.$$.fragment,o),M(Es.$$.fragment,o),M(Uo.$$.fragment,o),M(Bo.$$.fragment,o),M(Ro.$$.fragment,o),M(qs.$$.fragment,o),M(zs.$$.fragment,o),M(As.$$.fragment,o),M(Ko.$$.fragment,o),M(Yo.$$.fragment,o),M(Go.$$.fragment,o),M(Ps.$$.fragment,o),M(Ss.$$.fragment,o),M(Ws.$$.fragment,o),M(Zo.$$.fragment,o),M(en.$$.fragment,o),M(Hs.$$.fragment,o),M(Qs.$$.fragment,o),M(on.$$.fragment,o),M(Vs.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(Ks.$$.fragment,o),M(Ys.$$.fragment,o),M(rn.$$.fragment,o),M(ea.$$.fragment,o),M(ln.$$.fragment,o),M(dn.$$.fragment,o),M(ta.$$.fragment,o),M(oa.$$.fragment,o),M(pn.$$.fragment,o),M(ra.$$.fragment,o),M(mn.$$.fragment,o),M(hn.$$.fragment,o),M(un.$$.fragment,o),M(ia.$$.fragment,o),M(la.$$.fragment,o),M(gn.$$.fragment,o),M(ma.$$.fragment,o),M(_n.$$.fragment,o),M(kn.$$.fragment,o),M(ha.$$.fragment,o),M(ua.$$.fragment,o),M(vn.$$.fragment,o),M(ka.$$.fragment,o),M(wn.$$.fragment,o),M(Tn.$$.fragment,o),M(yn.$$.fragment,o),M(ba.$$.fragment,o),M(va.$$.fragment,o),M($n.$$.fragment,o),M(Ma.$$.fragment,o),M(Ln.$$.fragment,o),M(xn.$$.fragment,o),M(Fn.$$.fragment,o),id=!0)},o(o){$(l.$$.fragment,o),$(ee.$$.fragment,o),$(Sn.$$.fragment,o),$(Nn.$$.fragment,o),$(yo.$$.fragment,o),$(In.$$.fragment,o),$(Wn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(Yn.$$.fragment,o),$(Lo.$$.fragment,o),$(Gn.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(rs.$$.fragment,o),$(Xo.$$.fragment,o),$(Eo.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ms.$$.fragment,o),$(zo.$$.fragment,o),$(Co.$$.fragment,o),$(jo.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(ks.$$.fragment,o),$(Ao.$$.fragment,o),$(Po.$$.fragment,o),$(So.$$.fragment,o),$(No.$$.fragment,o),$(Do.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(Ms.$$.fragment,o),$(Wo.$$.fragment,o),$(Ho.$$.fragment,o),$($s.$$.fragment,o),$(Ls.$$.fragment,o),$(Es.$$.fragment,o),$(Uo.$$.fragment,o),$(Bo.$$.fragment,o),$(Ro.$$.fragment,o),$(qs.$$.fragment,o),$(zs.$$.fragment,o),$(As.$$.fragment,o),$(Ko.$$.fragment,o),$(Yo.$$.fragment,o),$(Go.$$.fragment,o),$(Ps.$$.fragment,o),$(Ss.$$.fragment,o),$(Ws.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(on.$$.fragment,o),$(Vs.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(Ks.$$.fragment,o),$(Ys.$$.fragment,o),$(rn.$$.fragment,o),$(ea.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(pn.$$.fragment,o),$(ra.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(gn.$$.fragment,o),$(ma.$$.fragment,o),$(_n.$$.fragment,o),$(kn.$$.fragment,o),$(ha.$$.fragment,o),$(ua.$$.fragment,o),$(vn.$$.fragment,o),$(ka.$$.fragment,o),$(wn.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$(ba.$$.fragment,o),$(va.$$.fragment,o),$($n.$$.fragment,o),$(Ma.$$.fragment,o),$(Ln.$$.fragment,o),$(xn.$$.fragment,o),$(Fn.$$.fragment,o),id=!1},d(o){t(d),o&&t(f),o&&t(c),L(l),o&&t(K),o&&t(E),L(ee),o&&t(re),o&&t(R),o&&t(C),o&&t(Y),o&&t(Q),o&&t(ne),o&&t(U),o&&t(se),o&&t(ie),o&&t(S),o&&t(g),o&&t(F),o&&t(B),o&&t(le),o&&t(Xl),o&&t(At),L(Sn),o&&t(El),o&&t(nt),L(Nn),L(yo),o&&t(ql),o&&t(St),L(In),o&&t(zl),o&&t(qe),L(Wn),L(Bn),L(Vn),L(Yn),L(Lo),L(Gn),o&&t(Cl),o&&t(Dt),L(Jn),o&&t(jl),o&&t(It),L(Zn),o&&t(Ol),o&&t(Wt),L(ts),o&&t(Al),o&&t(He),L(os),L(rs),L(Xo),L(Eo),o&&t(Pl),o&&t(Qt),L(is),o&&t(Sl),o&&t(Qe),L(ls),L(ms),L(zo),L(Co),L(jo),o&&t(Nl),o&&t(Bt),L(hs),o&&t(Dl),o&&t(Ue),L(us),L(ks),L(Ao),L(Po),L(So),L(No),L(Do),o&&t(Il),o&&t(Vt),L(bs),o&&t(Wl),o&&t(Be),L(vs),L(Ms),L(Wo),L(Ho),o&&t(Hl),o&&t(Yt),L($s),o&&t(Ql),o&&t(Re),L(Ls),L(Es),L(Uo),L(Bo),L(Ro),o&&t(Ul),o&&t(Jt),L(qs),o&&t(Bl),o&&t(Ve),L(zs),L(As),L(Ko),L(Yo),L(Go),o&&t(Rl),o&&t(to),L(Ps),o&&t(Vl),o&&t(Ke),L(Ss),L(Ws),L(Zo),L(en),o&&t(Kl),o&&t(so),L(Hs),o&&t(Yl),o&&t(Ae),L(Qs),L(on),L(Vs),L(nn),L(sn),o&&t(Gl),o&&t(ro),L(Ks),o&&t(Jl),o&&t(Pe),L(Ys),L(rn),L(ea),L(ln),L(dn),o&&t(Zl),o&&t(lo),L(ta),o&&t(ed),o&&t(Se),L(oa),L(pn),L(ra),L(mn),L(hn),L(un),o&&t(td),o&&t(po),L(ia),o&&t(od),o&&t(Ne),L(la),L(gn),L(ma),L(_n),L(kn),o&&t(nd),o&&t(ho),L(ha),o&&t(sd),o&&t(De),L(ua),L(vn),L(ka),L(wn),L(Tn),L(yn),o&&t(ad),o&&t(fo),L(ba),o&&t(rd),o&&t(Ie),L(va),L($n),L(Ma),L(Ln),L(xn),L(Fn)}}}const Mv={local:"xlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMConfig",title:"XLMConfig"},{local:"transformers.XLMTokenizer",title:"XLMTokenizer"},{local:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",title:"XLM specific outputs"},{local:"transformers.XLMModel",title:"XLMModel"},{local:"transformers.XLMWithLMHeadModel",title:"XLMWithLMHeadModel"},{local:"transformers.XLMForSequenceClassification",title:"XLMForSequenceClassification"},{local:"transformers.XLMForMultipleChoice",title:"XLMForMultipleChoice"},{local:"transformers.XLMForTokenClassification",title:"XLMForTokenClassification"},{local:"transformers.XLMForQuestionAnsweringSimple",title:"XLMForQuestionAnsweringSimple"},{local:"transformers.XLMForQuestionAnswering",title:"XLMForQuestionAnswering"},{local:"transformers.TFXLMModel",title:"TFXLMModel"},{local:"transformers.TFXLMWithLMHeadModel",title:"TFXLMWithLMHeadModel"},{local:"transformers.TFXLMForSequenceClassification",title:"TFXLMForSequenceClassification"},{local:"transformers.TFXLMForMultipleChoice",title:"TFXLMForMultipleChoice"},{local:"transformers.TFXLMForTokenClassification",title:"TFXLMForTokenClassification"},{local:"transformers.TFXLMForQuestionAnsweringSimple",title:"TFXLMForQuestionAnsweringSimple"}],title:"XLM"};function $v(x){return Cb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zv extends Xb{constructor(d){super();Eb(this,d,$v,yv,qb,{})}}export{zv as default,Mv as metadata};
