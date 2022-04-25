import{S as nM,i as sM,s as rM,e as n,k as p,w as T,t as a,M as aM,c as s,d as t,m as h,a as r,x as y,h as i,b as u,F as e,g as _,y as w,q as $,o as A,B as F,v as iM,L as re}from"../../chunks/vendor-6b77c823.js";import{T as we}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $e}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function lM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertConfig, AlbertModel

# Initializing an ALBERT-xxlarge style configuration
albert_xxlarge_configuration = AlbertConfig()

# Initializing an ALBERT-base style configuration
albert_base_configuration = AlbertConfig(
    hidden_size=768,
    num_attention_heads=12,
    intermediate_size=3072,
)

# Initializing a model from the ALBERT-base style configuration
model = AlbertModel(albert_xxlarge_configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertConfig, AlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-xxlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_xxlarge_configuration = AlbertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_base_configuration = AlbertConfig(
<span class="hljs-meta">... </span>    hidden_size=<span class="hljs-number">768</span>,
<span class="hljs-meta">... </span>    num_attention_heads=<span class="hljs-number">12</span>,
<span class="hljs-meta">... </span>    intermediate_size=<span class="hljs-number">3072</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel(albert_xxlarge_configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function dM(x){let d,g;return d=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cM(x){let d,g;return d=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function pM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function hM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertModel
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function mM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function fM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function uM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function gM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForMaskedLM
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function _M(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function bM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function kM(x){let d,g,c,m,k;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function vM(x){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = AlbertForSequenceClassification.from_pretrained("albert-base-v2", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function TM(x){let d,g,c,m,k;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForSequenceClassification.from_pretrained("albert-base-v2", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function yM(x){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = AlbertForSequenceClassification.from_pretrained("albert-base-v2", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function $M(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function AM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function FM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForTokenClassification.from_pretrained("albert-base-v2")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function xM(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function EM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function MM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForQuestionAnswering.from_pretrained("albert-base-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function zM(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function qM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function PM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function jM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function CM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function IM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function LM(x){let d,g,c,m,k;return m=new ae({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True))[
    None, :
]  # Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function NM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function SM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function DM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMaskedLM
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function OM(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function WM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function UM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function RM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function BM(x){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFAlbertForSequenceClassification.from_pretrained("albert-base-v2", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function HM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function QM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function VM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function KM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function JM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function GM(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForTokenClassification.from_pretrained("albert-base-v2")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function XM(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function YM(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),k=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=p(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),ge=a("model(inputs)"),de=a("."),K=p(),L=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=p(),q=n("ul"),j=n("li"),Z=a("a single Tensor with "),B=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=p(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=p(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=s(v,"UL",{});var J=r(m);k=s(J,"LI",{});var Fe=r(k);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=h(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(C,"CODE",{});var ye=r(R);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=h(v),L=s(v,"P",{});var Ee=r(L);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=h(v),q=s(v,"UL",{});var S=r(q);j=s(S,"LI",{});var O=r(j);Z=i(O,"a single Tensor with "),B=s(O,"CODE",{});var Me=r(B);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=h(S),P=s(S,"LI",{});var W=r(P);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var Pe=r(V);pe=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),W.forEach(t),ne=h(S),N=s(S,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),S.forEach(t)},m(v,M){_(v,d,M),e(d,g),_(v,c,M),_(v,m,M),e(m,k),e(k,l),e(m,f),e(m,E),e(E,fe),_(v,G,M),_(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,R),e(R,ge),e(z,de),_(v,K,M),_(v,L,M),e(L,te),_(v,X,M),_(v,q,M),e(q,j),e(j,Z),e(j,B),e(B,_e),e(j,be),e(j,H),e(H,ke),e(q,ce),e(q,P),e(P,ve),e(P,Q),e(Q,oe),e(P,ie),e(P,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,D),e(D,le)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(L),v&&t(X),v&&t(q)}}}function ZM(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function e4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForQuestionAnswering.from_pretrained("albert-base-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function t4(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function o4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function n4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function s4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function r4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForPreTraining.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function a4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function i4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function l4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function d4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function c4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function p4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function h4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function m4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function f4(x){let d,g,c,m,k;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);m=i(E,"Module"),E.forEach(t),k=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function u4(x){let d,g,c,m,k;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForQuestionAnswering.from_pretrained("albert-base-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){A(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function g4(x){let d,g,c,m,k,l,f,E,fe,G,z,Y,U,ee,ue,R,ge,de,K,L,te,X,q,j,Z,B,_e,be,H,ke,ce,P,ve,Q,oe,ie,V,pe,ne,N,he,D,le,v,M,J,Fe,Ae,C,xe,ye,Ee,S,O,Me,ze,W,qe,Pe,me,Te,wn,Mc,Fr,Tg,zc,yg,rf,bt,xr,wg,Ut,$g,rd,Ag,Fg,ad,xg,Eg,Er,Mg,zg,qg,bo,Pg,id,jg,Cg,ld,Ig,Lg,Ng,$n,af,ko,An,qc,Mr,Sg,Pc,Dg,lf,je,zr,Og,qr,Wg,Pr,Ug,Rg,Bg,jr,Hg,dd,Qg,Vg,Kg,to,Cr,Jg,jc,Gg,Xg,Ir,cd,Yg,Cc,Zg,e_,pd,t_,Ic,o_,n_,Fn,Lr,s_,Nr,r_,Lc,a_,i_,l_,vt,Sr,d_,Nc,c_,p_,xn,h_,vo,m_,Sc,f_,u_,Dc,g_,__,b_,hd,Dr,df,To,En,Oc,Or,k_,Wc,v_,cf,kt,Wr,T_,Rt,y_,Uc,w_,$_,Ur,A_,F_,md,x_,E_,M_,oo,Rr,z_,Rc,q_,P_,Br,fd,j_,Bc,C_,I_,ud,L_,Hc,N_,S_,Tt,Hr,D_,Qc,O_,W_,Mn,U_,Vc,R_,pf,yo,zn,Kc,Qr,B_,Jc,H_,hf,wo,Vr,Q_,Kr,V_,gd,K_,J_,mf,$o,Jr,G_,Gr,X_,_d,Y_,Z_,ff,Ao,qn,Gc,Xr,eb,Xc,tb,uf,Ge,Yr,ob,Yc,nb,sb,Zr,rb,bd,ab,ib,lb,ea,db,ta,cb,pb,hb,yt,oa,mb,Fo,fb,kd,ub,gb,Zc,_b,bb,kb,Pn,vb,jn,gf,xo,Cn,ep,na,Tb,tp,yb,_f,Xe,sa,wb,Eo,$b,op,Ab,Fb,np,xb,Eb,Mb,ra,zb,vd,qb,Pb,jb,aa,Cb,ia,Ib,Lb,Nb,wt,la,Sb,Mo,Db,Td,Ob,Wb,sp,Ub,Rb,Bb,In,Hb,Ln,bf,zo,Nn,rp,da,Qb,ap,Vb,kf,Ye,ca,Kb,pa,Jb,ip,Gb,Xb,Yb,ha,Zb,yd,ek,tk,ok,ma,nk,fa,sk,rk,ak,nt,ua,ik,qo,lk,wd,dk,ck,lp,pk,hk,mk,Sn,fk,Dn,uk,On,vf,Po,Wn,dp,ga,gk,cp,_k,Tf,Ze,_a,bk,pp,kk,vk,ba,Tk,$d,yk,wk,$k,ka,Ak,va,Fk,xk,Ek,We,Ta,Mk,jo,zk,Ad,qk,Pk,hp,jk,Ck,Ik,Un,Lk,Rn,Nk,Bn,Sk,Hn,Dk,Qn,yf,Co,Vn,mp,ya,Ok,fp,Wk,wf,et,wa,Uk,up,Rk,Bk,$a,Hk,Fd,Qk,Vk,Kk,Aa,Jk,Fa,Gk,Xk,Yk,$t,xa,Zk,Io,e1,xd,t1,o1,gp,n1,s1,r1,Kn,a1,Jn,$f,Lo,Gn,_p,Ea,i1,bp,l1,Af,tt,Ma,d1,kp,c1,p1,za,h1,Ed,m1,f1,u1,qa,g1,Pa,_1,b1,k1,st,ja,v1,No,T1,Md,y1,w1,vp,$1,A1,F1,Xn,x1,Yn,E1,Zn,Ff,So,es,Tp,Ca,M1,yp,z1,xf,ot,Ia,q1,Do,P1,wp,j1,C1,$p,I1,L1,N1,La,S1,zd,D1,O1,W1,Na,U1,Sa,R1,B1,H1,rt,Da,Q1,Oo,V1,qd,K1,J1,Ap,G1,X1,Y1,ts,Z1,os,ev,ns,Ef,Wo,ss,Fp,Oa,tv,xp,ov,Mf,Ue,Wa,nv,Ep,sv,rv,Ua,av,Pd,iv,lv,dv,Ra,cv,Ba,pv,hv,mv,rs,fv,At,Ha,uv,Uo,gv,jd,_v,bv,Mp,kv,vv,Tv,as,yv,is,zf,Ro,ls,zp,Qa,wv,qp,$v,qf,Re,Va,Av,Bo,Fv,Pp,xv,Ev,jp,Mv,zv,qv,Ka,Pv,Cd,jv,Cv,Iv,Ja,Lv,Ga,Nv,Sv,Dv,ds,Ov,Ft,Xa,Wv,Ho,Uv,Id,Rv,Bv,Cp,Hv,Qv,Vv,cs,Kv,ps,Pf,Qo,hs,Ip,Ya,Jv,Lp,Gv,jf,Be,Za,Xv,ei,Yv,Np,Zv,eT,tT,ti,oT,Ld,nT,sT,rT,oi,aT,ni,iT,lT,dT,ms,cT,at,si,pT,Vo,hT,Nd,mT,fT,Sp,uT,gT,_T,fs,bT,us,kT,gs,Cf,Ko,_s,Dp,ri,vT,Op,TT,If,He,ai,yT,Wp,wT,$T,ii,AT,Sd,FT,xT,ET,li,MT,di,zT,qT,PT,bs,jT,it,ci,CT,Jo,IT,Dd,LT,NT,Up,ST,DT,OT,ks,WT,vs,UT,Ts,Lf,Go,ys,Rp,pi,RT,Bp,BT,Nf,Qe,hi,HT,Hp,QT,VT,mi,KT,Od,JT,GT,XT,fi,YT,ui,ZT,ey,ty,ws,oy,xt,gi,ny,Xo,sy,Wd,ry,ay,Qp,iy,ly,dy,$s,cy,As,Sf,Yo,Fs,Vp,_i,py,Kp,hy,Df,Ve,bi,my,Jp,fy,uy,ki,gy,Ud,_y,by,ky,vi,vy,Ti,Ty,yy,wy,xs,$y,lt,yi,Ay,Zo,Fy,Rd,xy,Ey,Gp,My,zy,qy,Es,Py,Ms,jy,zs,Of,en,qs,Xp,wi,Cy,Yp,Iy,Wf,Ke,$i,Ly,tn,Ny,Zp,Sy,Dy,eh,Oy,Wy,Uy,Ai,Ry,Bd,By,Hy,Qy,Fi,Vy,xi,Ky,Jy,Gy,Ps,Xy,dt,Ei,Yy,on,Zy,Hd,ew,tw,th,ow,nw,sw,js,rw,Cs,aw,Is,Uf,nn,Ls,oh,Mi,iw,nh,lw,Rf,Ce,zi,dw,sh,cw,pw,qi,hw,Qd,mw,fw,uw,Pi,gw,ji,_w,bw,kw,rh,vw,Tw,Bt,ah,Ci,yw,ww,ih,Ii,$w,Aw,lh,Li,Fw,xw,dh,Ni,Ew,Mw,Et,Si,zw,sn,qw,ch,Pw,jw,ph,Cw,Iw,Lw,Ns,Nw,Ss,Bf,rn,Ds,hh,Di,Sw,mh,Dw,Hf,Ie,Oi,Ow,an,Ww,fh,Uw,Rw,uh,Bw,Hw,Qw,Wi,Vw,Vd,Kw,Jw,Gw,Ui,Xw,Ri,Yw,Zw,e$,gh,t$,o$,Ht,_h,Bi,n$,s$,bh,Hi,r$,a$,kh,Qi,i$,l$,vh,Vi,d$,c$,Mt,Ki,p$,ln,h$,Th,m$,f$,yh,u$,g$,_$,Os,b$,Ws,Qf,dn,Us,wh,Ji,k$,$h,v$,Vf,Le,Gi,T$,Xi,y$,Ah,w$,$$,A$,Yi,F$,Kd,x$,E$,M$,Zi,z$,el,q$,P$,j$,Fh,C$,I$,Qt,xh,tl,L$,N$,Eh,ol,S$,D$,Mh,nl,O$,W$,zh,sl,U$,R$,zt,rl,B$,cn,H$,qh,Q$,V$,Ph,K$,J$,G$,Rs,X$,Bs,Kf,pn,Hs,jh,al,Y$,Ch,Z$,Jf,Ne,il,e2,Ih,t2,o2,ll,n2,Jd,s2,r2,a2,dl,i2,cl,l2,d2,c2,Lh,p2,h2,Vt,Nh,pl,m2,f2,Sh,hl,u2,g2,Dh,ml,_2,b2,Oh,fl,k2,v2,qt,ul,T2,hn,y2,Wh,w2,$2,Uh,A2,F2,x2,Qs,E2,Vs,Gf,mn,Ks,Rh,gl,M2,Bh,z2,Xf,Se,_l,q2,Hh,P2,j2,bl,C2,Gd,I2,L2,N2,kl,S2,vl,D2,O2,W2,Qh,U2,R2,Kt,Vh,Tl,B2,H2,Kh,yl,Q2,V2,Jh,wl,K2,J2,Gh,$l,G2,X2,Pt,Al,Y2,fn,Z2,Xh,eA,tA,Yh,oA,nA,sA,Js,rA,Gs,Yf,un,Xs,Zh,Fl,aA,em,iA,Zf,De,xl,lA,tm,dA,cA,El,pA,Xd,hA,mA,fA,Ml,uA,zl,gA,_A,bA,om,kA,vA,Jt,nm,ql,TA,yA,sm,Pl,wA,$A,rm,jl,AA,FA,am,Cl,xA,EA,jt,Il,MA,gn,zA,im,qA,PA,lm,jA,CA,IA,Ys,LA,Zs,eu,_n,er,dm,Ll,NA,cm,SA,tu,Oe,Nl,DA,bn,OA,pm,WA,UA,hm,RA,BA,HA,Sl,QA,Yd,VA,KA,JA,Dl,GA,Ol,XA,YA,ZA,mm,eF,tF,Gt,fm,Wl,oF,nF,um,Ul,sF,rF,gm,Rl,aF,iF,_m,Bl,lF,dF,Ct,Hl,cF,kn,pF,bm,hF,mF,km,fF,uF,gF,tr,_F,or,ou;return l=new $e({}),ee=new $e({}),Fr=new $e({}),xr=new I({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.AlbertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.AlbertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.AlbertConfig.num_hidden_groups",description:`<strong>num_hidden_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups for the hidden layers, parameters in the same group are shared.`,name:"num_hidden_groups"},{anchor:"transformers.AlbertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.AlbertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.AlbertConfig.inner_group_num",description:`<strong>inner_group_num</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of inner repetition of attention and ffn.`,name:"inner_group_num"},{anchor:"transformers.AlbertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.AlbertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.AlbertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.AlbertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.AlbertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/configuration_albert.py#L36"}}),$n=new se({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[lM]},$$scope:{ctx:x}}}),Mr=new $e({}),zr=new I({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.AlbertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.AlbertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.AlbertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert.py#L59"}}),Cr=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Lr=new I({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sr=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new se({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[dM]},$$scope:{ctx:x}}}),Dr=new I({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert.py#L338"}}),Or=new $e({}),Wr=new I({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.AlbertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Rr=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hr=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mn=new se({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[cM]},$$scope:{ctx:x}}}),Qr=new $e({}),Vr=new I({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L518"}}),Jr=new I({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L635"}}),Xr=new $e({}),Yr=new I({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L621"}}),oa=new I({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L665",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new we({props:{$$slots:{default:[pM]},$$scope:{ctx:x}}}),jn=new se({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[hM]},$$scope:{ctx:x}}}),na=new $e({}),sa=new I({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L751"}}),la=new I({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"sentence_order_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L771",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new we({props:{$$slots:{default:[mM]},$$scope:{ctx:x}}}),Ln=new se({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[fM]},$$scope:{ctx:x}}}),da=new $e({}),ca=new I({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L898"}}),ua=new I({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L920",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new we({props:{$$slots:{default:[uM]},$$scope:{ctx:x}}}),Dn=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[gM]},$$scope:{ctx:x}}}),On=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_M]},$$scope:{ctx:x}}}),ga=new $e({}),_a=new I({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L987"}}),Ta=new I({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1000",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new we({props:{$$slots:{default:[bM]},$$scope:{ctx:x}}}),Rn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[kM]},$$scope:{ctx:x}}}),Bn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[vM]},$$scope:{ctx:x}}}),Hn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[TM]},$$scope:{ctx:x}}}),Qn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[yM]},$$scope:{ctx:x}}}),ya=new $e({}),wa=new I({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1277"}}),xa=new I({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1288",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new we({props:{$$slots:{default:[wM]},$$scope:{ctx:x}}}),Jn=new se({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$M]},$$scope:{ctx:x}}}),Ea=new $e({}),Ma=new I({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1087"}}),ja=new I({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1107",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new we({props:{$$slots:{default:[AM]},$$scope:{ctx:x}}}),Yn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[FM]},$$scope:{ctx:x}}}),Zn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[xM]},$$scope:{ctx:x}}}),Ca=new $e({}),Ia=new I({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1174"}}),Da=new I({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_albert.py#L1188",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new we({props:{$$slots:{default:[EM]},$$scope:{ctx:x}}}),os=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[MM]},$$scope:{ctx:x}}}),ns=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[zM]},$$scope:{ctx:x}}}),Oa=new $e({}),Wa=new I({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L762"}}),rs=new we({props:{$$slots:{default:[qM]},$$scope:{ctx:x}}}),Ha=new I({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L768",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new we({props:{$$slots:{default:[PM]},$$scope:{ctx:x}}}),is=new se({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[jM]},$$scope:{ctx:x}}}),Qa=new $e({}),Va=new I({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L824"}}),ds=new we({props:{$$slots:{default:[CM]},$$scope:{ctx:x}}}),Xa=new I({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L840",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new we({props:{$$slots:{default:[IM]},$$scope:{ctx:x}}}),ps=new se({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[LM]},$$scope:{ctx:x}}}),Ya=new $e({}),Za=new I({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L945"}}),ms=new we({props:{$$slots:{default:[NM]},$$scope:{ctx:x}}}),si=new I({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L958",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fs=new we({props:{$$slots:{default:[SM]},$$scope:{ctx:x}}}),us=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[DM]},$$scope:{ctx:x}}}),gs=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[OM]},$$scope:{ctx:x}}}),ri=new $e({}),ai=new I({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1030"}}),bs=new we({props:{$$slots:{default:[WM]},$$scope:{ctx:x}}}),ci=new I({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1046",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new we({props:{$$slots:{default:[UM]},$$scope:{ctx:x}}}),vs=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[RM]},$$scope:{ctx:x}}}),Ts=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[BM]},$$scope:{ctx:x}}}),pi=new $e({}),hi=new I({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1313"}}),ws=new we({props:{$$slots:{default:[HM]},$$scope:{ctx:x}}}),gi=new I({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1337",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[QM]},$$scope:{ctx:x}}}),As=new se({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[VM]},$$scope:{ctx:x}}}),_i=new $e({}),bi=new I({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1119"}}),xs=new we({props:{$$slots:{default:[KM]},$$scope:{ctx:x}}}),yi=new I({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1140",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new we({props:{$$slots:{default:[JM]},$$scope:{ctx:x}}}),Ms=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[GM]},$$scope:{ctx:x}}}),zs=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[XM]},$$scope:{ctx:x}}}),wi=new $e({}),$i=new I({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1211"}}),Ps=new we({props:{$$slots:{default:[YM]},$$scope:{ctx:x}}}),Ei=new I({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_tf_albert.py#L1225",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),js=new we({props:{$$slots:{default:[ZM]},$$scope:{ctx:x}}}),Cs=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[e4]},$$scope:{ctx:x}}}),Is=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[t4]},$$scope:{ctx:x}}}),Mi=new $e({}),zi=new I({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L667"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new we({props:{$$slots:{default:[o4]},$$scope:{ctx:x}}}),Ss=new se({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[n4]},$$scope:{ctx:x}}}),Di=new $e({}),Oi=new I({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L738"}}),Ki=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new we({props:{$$slots:{default:[s4]},$$scope:{ctx:x}}}),Ws=new se({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[r4]},$$scope:{ctx:x}}}),Ji=new $e({}),Gi=new I({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L821"}}),rl=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new we({props:{$$slots:{default:[a4]},$$scope:{ctx:x}}}),Bs=new se({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[i4]},$$scope:{ctx:x}}}),al=new $e({}),il=new I({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L891"}}),ul=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new we({props:{$$slots:{default:[l4]},$$scope:{ctx:x}}}),Vs=new se({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[d4]},$$scope:{ctx:x}}}),gl=new $e({}),_l=new I({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L965"}}),Al=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new we({props:{$$slots:{default:[c4]},$$scope:{ctx:x}}}),Gs=new se({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[p4]},$$scope:{ctx:x}}}),Fl=new $e({}),xl=new I({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L1039"}}),Il=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[h4]},$$scope:{ctx:x}}}),Zs=new se({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[m4]},$$scope:{ctx:x}}}),Ll=new $e({}),Nl=new I({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L1108"}}),Hl=new I({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/albert/modeling_flax_albert.py#L544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new we({props:{$$slots:{default:[f4]},$$scope:{ctx:x}}}),or=new se({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[u4]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=p(),c=n("h1"),m=n("a"),k=n("span"),T(l.$$.fragment),f=p(),E=n("span"),fe=a("ALBERT"),G=p(),z=n("h2"),Y=n("a"),U=n("span"),T(ee.$$.fragment),ue=p(),R=n("span"),ge=a("Overview"),de=p(),K=n("p"),L=a("The ALBERT model was proposed in "),te=n("a"),X=a("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),q=a(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),j=p(),Z=n("ul"),B=n("li"),_e=a("Splitting the embedding matrix into two smaller matrices."),be=p(),H=n("li"),ke=a("Using repeating layers split among groups."),ce=p(),P=n("p"),ve=a("The abstract from the paper is the following:"),Q=p(),oe=n("p"),ie=n("em"),V=a(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),pe=p(),ne=n("p"),N=a("Tips:"),he=p(),D=n("ul"),le=n("li"),v=a(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),M=p(),J=n("li"),Fe=a(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Ae=p(),C=n("p"),xe=a("This model was contributed by "),ye=n("a"),Ee=a("lysandre"),S=a(`. This model jax version was contributed by
`),O=n("a"),Me=a("kamalkraj"),ze=a(". The original code can be found "),W=n("a"),qe=a("here"),Pe=a("."),me=p(),Te=n("h2"),wn=n("a"),Mc=n("span"),T(Fr.$$.fragment),Tg=p(),zc=n("span"),yg=a("AlbertConfig"),rf=p(),bt=n("div"),T(xr.$$.fragment),wg=p(),Ut=n("p"),$g=a("This is the configuration class to store the configuration of a "),rd=n("a"),Ag=a("AlbertModel"),Fg=a(" or a "),ad=n("a"),xg=a("TFAlbertModel"),Eg=a(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=n("a"),Mg=a("xxlarge"),zg=a(" architecture."),qg=p(),bo=n("p"),Pg=a("Configuration objects inherit from "),id=n("a"),jg=a("PretrainedConfig"),Cg=a(` and can be used to control the model outputs. Read the
documentation from `),ld=n("a"),Ig=a("PretrainedConfig"),Lg=a(" for more information."),Ng=p(),T($n.$$.fragment),af=p(),ko=n("h2"),An=n("a"),qc=n("span"),T(Mr.$$.fragment),Sg=p(),Pc=n("span"),Dg=a("AlbertTokenizer"),lf=p(),je=n("div"),T(zr.$$.fragment),Og=p(),qr=n("p"),Wg=a("Construct an ALBERT tokenizer. Based on "),Pr=n("a"),Ug=a("SentencePiece"),Rg=a("."),Bg=p(),jr=n("p"),Hg=a("This tokenizer inherits from "),dd=n("a"),Qg=a("PreTrainedTokenizer"),Vg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kg=p(),to=n("div"),T(Cr.$$.fragment),Jg=p(),jc=n("p"),Gg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=p(),Ir=n("ul"),cd=n("li"),Yg=a("single sequence: "),Cc=n("code"),Zg=a("[CLS] X [SEP]"),e_=p(),pd=n("li"),t_=a("pair of sequences: "),Ic=n("code"),o_=a("[CLS] A [SEP] B [SEP]"),n_=p(),Fn=n("div"),T(Lr.$$.fragment),s_=p(),Nr=n("p"),r_=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lc=n("code"),a_=a("prepare_for_model"),i_=a(" method."),l_=p(),vt=n("div"),T(Sr.$$.fragment),d_=p(),Nc=n("p"),c_=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),p_=p(),T(xn.$$.fragment),h_=p(),vo=n("p"),m_=a("If "),Sc=n("code"),f_=a("token_ids_1"),u_=a(" is "),Dc=n("code"),g_=a("None"),__=a(", this method only returns the first portion of the mask (0s)."),b_=p(),hd=n("div"),T(Dr.$$.fragment),df=p(),To=n("h2"),En=n("a"),Oc=n("span"),T(Or.$$.fragment),k_=p(),Wc=n("span"),v_=a("AlbertTokenizerFast"),cf=p(),kt=n("div"),T(Wr.$$.fragment),T_=p(),Rt=n("p"),y_=a("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Uc=n("em"),w_=a("tokenizers"),$_=a(` library). Based on
`),Ur=n("a"),A_=a("Unigram"),F_=a(`. This
tokenizer inherits from `),md=n("a"),x_=a("PreTrainedTokenizerFast"),E_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=p(),oo=n("div"),T(Rr.$$.fragment),z_=p(),Rc=n("p"),q_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),P_=p(),Br=n("ul"),fd=n("li"),j_=a("single sequence: "),Bc=n("code"),C_=a("[CLS] X [SEP]"),I_=p(),ud=n("li"),L_=a("pair of sequences: "),Hc=n("code"),N_=a("[CLS] A [SEP] B [SEP]"),S_=p(),Tt=n("div"),T(Hr.$$.fragment),D_=p(),Qc=n("p"),O_=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),W_=p(),T(Mn.$$.fragment),U_=p(),Vc=n("p"),R_=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),pf=p(),yo=n("h2"),zn=n("a"),Kc=n("span"),T(Qr.$$.fragment),B_=p(),Jc=n("span"),H_=a("Albert specific outputs"),hf=p(),wo=n("div"),T(Vr.$$.fragment),Q_=p(),Kr=n("p"),V_=a("Output type of "),gd=n("a"),K_=a("AlbertForPreTraining"),J_=a("."),mf=p(),$o=n("div"),T(Jr.$$.fragment),G_=p(),Gr=n("p"),X_=a("Output type of "),_d=n("a"),Y_=a("TFAlbertForPreTraining"),Z_=a("."),ff=p(),Ao=n("h2"),qn=n("a"),Gc=n("span"),T(Xr.$$.fragment),eb=p(),Xc=n("span"),tb=a("AlbertModel"),uf=p(),Ge=n("div"),T(Yr.$$.fragment),ob=p(),Yc=n("p"),nb=a("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=p(),Zr=n("p"),rb=a("This model inherits from "),bd=n("a"),ab=a("PreTrainedModel"),ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=p(),ea=n("p"),db=a("This model is also a PyTorch "),ta=n("a"),cb=a("torch.nn.Module"),pb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=p(),yt=n("div"),T(oa.$$.fragment),mb=p(),Fo=n("p"),fb=a("The "),kd=n("a"),ub=a("AlbertModel"),gb=a(" forward method, overrides the "),Zc=n("code"),_b=a("__call__"),bb=a(" special method."),kb=p(),T(Pn.$$.fragment),vb=p(),T(jn.$$.fragment),gf=p(),xo=n("h2"),Cn=n("a"),ep=n("span"),T(na.$$.fragment),Tb=p(),tp=n("span"),yb=a("AlbertForPreTraining"),_f=p(),Xe=n("div"),T(sa.$$.fragment),wb=p(),Eo=n("p"),$b=a("Albert Model with two heads on top as done during the pretraining: a "),op=n("code"),Ab=a("masked language modeling"),Fb=a(` head and a
`),np=n("code"),xb=a("sentence order prediction (classification)"),Eb=a(" head."),Mb=p(),ra=n("p"),zb=a("This model inherits from "),vd=n("a"),qb=a("PreTrainedModel"),Pb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jb=p(),aa=n("p"),Cb=a("This model is also a PyTorch "),ia=n("a"),Ib=a("torch.nn.Module"),Lb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=p(),wt=n("div"),T(la.$$.fragment),Sb=p(),Mo=n("p"),Db=a("The "),Td=n("a"),Ob=a("AlbertForPreTraining"),Wb=a(" forward method, overrides the "),sp=n("code"),Ub=a("__call__"),Rb=a(" special method."),Bb=p(),T(In.$$.fragment),Hb=p(),T(Ln.$$.fragment),bf=p(),zo=n("h2"),Nn=n("a"),rp=n("span"),T(da.$$.fragment),Qb=p(),ap=n("span"),Vb=a("AlbertForMaskedLM"),kf=p(),Ye=n("div"),T(ca.$$.fragment),Kb=p(),pa=n("p"),Jb=a("Albert Model with a "),ip=n("code"),Gb=a("language modeling"),Xb=a(" head on top."),Yb=p(),ha=n("p"),Zb=a("This model inherits from "),yd=n("a"),ek=a("PreTrainedModel"),tk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=p(),ma=n("p"),nk=a("This model is also a PyTorch "),fa=n("a"),sk=a("torch.nn.Module"),rk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak=p(),nt=n("div"),T(ua.$$.fragment),ik=p(),qo=n("p"),lk=a("The "),wd=n("a"),dk=a("AlbertForMaskedLM"),ck=a(" forward method, overrides the "),lp=n("code"),pk=a("__call__"),hk=a(" special method."),mk=p(),T(Sn.$$.fragment),fk=p(),T(Dn.$$.fragment),uk=p(),T(On.$$.fragment),vf=p(),Po=n("h2"),Wn=n("a"),dp=n("span"),T(ga.$$.fragment),gk=p(),cp=n("span"),_k=a("AlbertForSequenceClassification"),Tf=p(),Ze=n("div"),T(_a.$$.fragment),bk=p(),pp=n("p"),kk=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),vk=p(),ba=n("p"),Tk=a("This model inherits from "),$d=n("a"),yk=a("PreTrainedModel"),wk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=p(),ka=n("p"),Ak=a("This model is also a PyTorch "),va=n("a"),Fk=a("torch.nn.Module"),xk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=p(),We=n("div"),T(Ta.$$.fragment),Mk=p(),jo=n("p"),zk=a("The "),Ad=n("a"),qk=a("AlbertForSequenceClassification"),Pk=a(" forward method, overrides the "),hp=n("code"),jk=a("__call__"),Ck=a(" special method."),Ik=p(),T(Un.$$.fragment),Lk=p(),T(Rn.$$.fragment),Nk=p(),T(Bn.$$.fragment),Sk=p(),T(Hn.$$.fragment),Dk=p(),T(Qn.$$.fragment),yf=p(),Co=n("h2"),Vn=n("a"),mp=n("span"),T(ya.$$.fragment),Ok=p(),fp=n("span"),Wk=a("AlbertForMultipleChoice"),wf=p(),et=n("div"),T(wa.$$.fragment),Uk=p(),up=n("p"),Rk=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bk=p(),$a=n("p"),Hk=a("This model inherits from "),Fd=n("a"),Qk=a("PreTrainedModel"),Vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk=p(),Aa=n("p"),Jk=a("This model is also a PyTorch "),Fa=n("a"),Gk=a("torch.nn.Module"),Xk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk=p(),$t=n("div"),T(xa.$$.fragment),Zk=p(),Io=n("p"),e1=a("The "),xd=n("a"),t1=a("AlbertForMultipleChoice"),o1=a(" forward method, overrides the "),gp=n("code"),n1=a("__call__"),s1=a(" special method."),r1=p(),T(Kn.$$.fragment),a1=p(),T(Jn.$$.fragment),$f=p(),Lo=n("h2"),Gn=n("a"),_p=n("span"),T(Ea.$$.fragment),i1=p(),bp=n("span"),l1=a("AlbertForTokenClassification"),Af=p(),tt=n("div"),T(Ma.$$.fragment),d1=p(),kp=n("p"),c1=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p1=p(),za=n("p"),h1=a("This model inherits from "),Ed=n("a"),m1=a("PreTrainedModel"),f1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u1=p(),qa=n("p"),g1=a("This model is also a PyTorch "),Pa=n("a"),_1=a("torch.nn.Module"),b1=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),k1=p(),st=n("div"),T(ja.$$.fragment),v1=p(),No=n("p"),T1=a("The "),Md=n("a"),y1=a("AlbertForTokenClassification"),w1=a(" forward method, overrides the "),vp=n("code"),$1=a("__call__"),A1=a(" special method."),F1=p(),T(Xn.$$.fragment),x1=p(),T(Yn.$$.fragment),E1=p(),T(Zn.$$.fragment),Ff=p(),So=n("h2"),es=n("a"),Tp=n("span"),T(Ca.$$.fragment),M1=p(),yp=n("span"),z1=a("AlbertForQuestionAnswering"),xf=p(),ot=n("div"),T(Ia.$$.fragment),q1=p(),Do=n("p"),P1=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=n("code"),j1=a("span start logits"),C1=a(" and "),$p=n("code"),I1=a("span end logits"),L1=a(")."),N1=p(),La=n("p"),S1=a("This model inherits from "),zd=n("a"),D1=a("PreTrainedModel"),O1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W1=p(),Na=n("p"),U1=a("This model is also a PyTorch "),Sa=n("a"),R1=a("torch.nn.Module"),B1=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),H1=p(),rt=n("div"),T(Da.$$.fragment),Q1=p(),Oo=n("p"),V1=a("The "),qd=n("a"),K1=a("AlbertForQuestionAnswering"),J1=a(" forward method, overrides the "),Ap=n("code"),G1=a("__call__"),X1=a(" special method."),Y1=p(),T(ts.$$.fragment),Z1=p(),T(os.$$.fragment),ev=p(),T(ns.$$.fragment),Ef=p(),Wo=n("h2"),ss=n("a"),Fp=n("span"),T(Oa.$$.fragment),tv=p(),xp=n("span"),ov=a("TFAlbertModel"),Mf=p(),Ue=n("div"),T(Wa.$$.fragment),nv=p(),Ep=n("p"),sv=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),rv=p(),Ua=n("p"),av=a("This model inherits from "),Pd=n("a"),iv=a("TFPreTrainedModel"),lv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dv=p(),Ra=n("p"),cv=a("This model is also a "),Ba=n("a"),pv=a("tf.keras.Model"),hv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=p(),T(rs.$$.fragment),fv=p(),At=n("div"),T(Ha.$$.fragment),uv=p(),Uo=n("p"),gv=a("The "),jd=n("a"),_v=a("TFAlbertModel"),bv=a(" forward method, overrides the "),Mp=n("code"),kv=a("__call__"),vv=a(" special method."),Tv=p(),T(as.$$.fragment),yv=p(),T(is.$$.fragment),zf=p(),Ro=n("h2"),ls=n("a"),zp=n("span"),T(Qa.$$.fragment),wv=p(),qp=n("span"),$v=a("TFAlbertForPreTraining"),qf=p(),Re=n("div"),T(Va.$$.fragment),Av=p(),Bo=n("p"),Fv=a("Albert Model with two heads on top for pretraining: a "),Pp=n("code"),xv=a("masked language modeling"),Ev=a(" head and a "),jp=n("code"),Mv=a("sentence order prediction"),zv=a(" (classification) head."),qv=p(),Ka=n("p"),Pv=a("This model inherits from "),Cd=n("a"),jv=a("TFPreTrainedModel"),Cv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iv=p(),Ja=n("p"),Lv=a("This model is also a "),Ga=n("a"),Nv=a("tf.keras.Model"),Sv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv=p(),T(ds.$$.fragment),Ov=p(),Ft=n("div"),T(Xa.$$.fragment),Wv=p(),Ho=n("p"),Uv=a("The "),Id=n("a"),Rv=a("TFAlbertForPreTraining"),Bv=a(" forward method, overrides the "),Cp=n("code"),Hv=a("__call__"),Qv=a(" special method."),Vv=p(),T(cs.$$.fragment),Kv=p(),T(ps.$$.fragment),Pf=p(),Qo=n("h2"),hs=n("a"),Ip=n("span"),T(Ya.$$.fragment),Jv=p(),Lp=n("span"),Gv=a("TFAlbertForMaskedLM"),jf=p(),Be=n("div"),T(Za.$$.fragment),Xv=p(),ei=n("p"),Yv=a("Albert Model with a "),Np=n("code"),Zv=a("language modeling"),eT=a(" head on top."),tT=p(),ti=n("p"),oT=a("This model inherits from "),Ld=n("a"),nT=a("TFPreTrainedModel"),sT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT=p(),oi=n("p"),aT=a("This model is also a "),ni=n("a"),iT=a("tf.keras.Model"),lT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dT=p(),T(ms.$$.fragment),cT=p(),at=n("div"),T(si.$$.fragment),pT=p(),Vo=n("p"),hT=a("The "),Nd=n("a"),mT=a("TFAlbertForMaskedLM"),fT=a(" forward method, overrides the "),Sp=n("code"),uT=a("__call__"),gT=a(" special method."),_T=p(),T(fs.$$.fragment),bT=p(),T(us.$$.fragment),kT=p(),T(gs.$$.fragment),Cf=p(),Ko=n("h2"),_s=n("a"),Dp=n("span"),T(ri.$$.fragment),vT=p(),Op=n("span"),TT=a("TFAlbertForSequenceClassification"),If=p(),He=n("div"),T(ai.$$.fragment),yT=p(),Wp=n("p"),wT=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$T=p(),ii=n("p"),AT=a("This model inherits from "),Sd=n("a"),FT=a("TFPreTrainedModel"),xT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=p(),li=n("p"),MT=a("This model is also a "),di=n("a"),zT=a("tf.keras.Model"),qT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),PT=p(),T(bs.$$.fragment),jT=p(),it=n("div"),T(ci.$$.fragment),CT=p(),Jo=n("p"),IT=a("The "),Dd=n("a"),LT=a("TFAlbertForSequenceClassification"),NT=a(" forward method, overrides the "),Up=n("code"),ST=a("__call__"),DT=a(" special method."),OT=p(),T(ks.$$.fragment),WT=p(),T(vs.$$.fragment),UT=p(),T(Ts.$$.fragment),Lf=p(),Go=n("h2"),ys=n("a"),Rp=n("span"),T(pi.$$.fragment),RT=p(),Bp=n("span"),BT=a("TFAlbertForMultipleChoice"),Nf=p(),Qe=n("div"),T(hi.$$.fragment),HT=p(),Hp=n("p"),QT=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),VT=p(),mi=n("p"),KT=a("This model inherits from "),Od=n("a"),JT=a("TFPreTrainedModel"),GT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),XT=p(),fi=n("p"),YT=a("This model is also a "),ui=n("a"),ZT=a("tf.keras.Model"),ey=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ty=p(),T(ws.$$.fragment),oy=p(),xt=n("div"),T(gi.$$.fragment),ny=p(),Xo=n("p"),sy=a("The "),Wd=n("a"),ry=a("TFAlbertForMultipleChoice"),ay=a(" forward method, overrides the "),Qp=n("code"),iy=a("__call__"),ly=a(" special method."),dy=p(),T($s.$$.fragment),cy=p(),T(As.$$.fragment),Sf=p(),Yo=n("h2"),Fs=n("a"),Vp=n("span"),T(_i.$$.fragment),py=p(),Kp=n("span"),hy=a("TFAlbertForTokenClassification"),Df=p(),Ve=n("div"),T(bi.$$.fragment),my=p(),Jp=n("p"),fy=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uy=p(),ki=n("p"),gy=a("This model inherits from "),Ud=n("a"),_y=a("TFPreTrainedModel"),by=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=p(),vi=n("p"),vy=a("This model is also a "),Ti=n("a"),Ty=a("tf.keras.Model"),yy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy=p(),T(xs.$$.fragment),$y=p(),lt=n("div"),T(yi.$$.fragment),Ay=p(),Zo=n("p"),Fy=a("The "),Rd=n("a"),xy=a("TFAlbertForTokenClassification"),Ey=a(" forward method, overrides the "),Gp=n("code"),My=a("__call__"),zy=a(" special method."),qy=p(),T(Es.$$.fragment),Py=p(),T(Ms.$$.fragment),jy=p(),T(zs.$$.fragment),Of=p(),en=n("h2"),qs=n("a"),Xp=n("span"),T(wi.$$.fragment),Cy=p(),Yp=n("span"),Iy=a("TFAlbertForQuestionAnswering"),Wf=p(),Ke=n("div"),T($i.$$.fragment),Ly=p(),tn=n("p"),Ny=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=n("code"),Sy=a("span start logits"),Dy=a(" and "),eh=n("code"),Oy=a("span end logits"),Wy=a(")."),Uy=p(),Ai=n("p"),Ry=a("This model inherits from "),Bd=n("a"),By=a("TFPreTrainedModel"),Hy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qy=p(),Fi=n("p"),Vy=a("This model is also a "),xi=n("a"),Ky=a("tf.keras.Model"),Jy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gy=p(),T(Ps.$$.fragment),Xy=p(),dt=n("div"),T(Ei.$$.fragment),Yy=p(),on=n("p"),Zy=a("The "),Hd=n("a"),ew=a("TFAlbertForQuestionAnswering"),tw=a(" forward method, overrides the "),th=n("code"),ow=a("__call__"),nw=a(" special method."),sw=p(),T(js.$$.fragment),rw=p(),T(Cs.$$.fragment),aw=p(),T(Is.$$.fragment),Uf=p(),nn=n("h2"),Ls=n("a"),oh=n("span"),T(Mi.$$.fragment),iw=p(),nh=n("span"),lw=a("FlaxAlbertModel"),Rf=p(),Ce=n("div"),T(zi.$$.fragment),dw=p(),sh=n("p"),cw=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),pw=p(),qi=n("p"),hw=a("This model inherits from "),Qd=n("a"),mw=a("FlaxPreTrainedModel"),fw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uw=p(),Pi=n("p"),gw=a("This model is also a Flax Linen "),ji=n("a"),_w=a("flax.linen.Module"),bw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kw=p(),rh=n("p"),vw=a("Finally, this model supports inherent JAX features such as:"),Tw=p(),Bt=n("ul"),ah=n("li"),Ci=n("a"),yw=a("Just-In-Time (JIT) compilation"),ww=p(),ih=n("li"),Ii=n("a"),$w=a("Automatic Differentiation"),Aw=p(),lh=n("li"),Li=n("a"),Fw=a("Vectorization"),xw=p(),dh=n("li"),Ni=n("a"),Ew=a("Parallelization"),Mw=p(),Et=n("div"),T(Si.$$.fragment),zw=p(),sn=n("p"),qw=a("The "),ch=n("code"),Pw=a("FlaxAlbertPreTrainedModel"),jw=a(" forward method, overrides the "),ph=n("code"),Cw=a("__call__"),Iw=a(" special method."),Lw=p(),T(Ns.$$.fragment),Nw=p(),T(Ss.$$.fragment),Bf=p(),rn=n("h2"),Ds=n("a"),hh=n("span"),T(Di.$$.fragment),Sw=p(),mh=n("span"),Dw=a("FlaxAlbertForPreTraining"),Hf=p(),Ie=n("div"),T(Oi.$$.fragment),Ow=p(),an=n("p"),Ww=a("Albert Model with two heads on top as done during the pretraining: a "),fh=n("code"),Uw=a("masked language modeling"),Rw=a(` head and a
`),uh=n("code"),Bw=a("sentence order prediction (classification)"),Hw=a(" head."),Qw=p(),Wi=n("p"),Vw=a("This model inherits from "),Vd=n("a"),Kw=a("FlaxPreTrainedModel"),Jw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gw=p(),Ui=n("p"),Xw=a("This model is also a Flax Linen "),Ri=n("a"),Yw=a("flax.linen.Module"),Zw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e$=p(),gh=n("p"),t$=a("Finally, this model supports inherent JAX features such as:"),o$=p(),Ht=n("ul"),_h=n("li"),Bi=n("a"),n$=a("Just-In-Time (JIT) compilation"),s$=p(),bh=n("li"),Hi=n("a"),r$=a("Automatic Differentiation"),a$=p(),kh=n("li"),Qi=n("a"),i$=a("Vectorization"),l$=p(),vh=n("li"),Vi=n("a"),d$=a("Parallelization"),c$=p(),Mt=n("div"),T(Ki.$$.fragment),p$=p(),ln=n("p"),h$=a("The "),Th=n("code"),m$=a("FlaxAlbertPreTrainedModel"),f$=a(" forward method, overrides the "),yh=n("code"),u$=a("__call__"),g$=a(" special method."),_$=p(),T(Os.$$.fragment),b$=p(),T(Ws.$$.fragment),Qf=p(),dn=n("h2"),Us=n("a"),wh=n("span"),T(Ji.$$.fragment),k$=p(),$h=n("span"),v$=a("FlaxAlbertForMaskedLM"),Vf=p(),Le=n("div"),T(Gi.$$.fragment),T$=p(),Xi=n("p"),y$=a("Albert Model with a "),Ah=n("code"),w$=a("language modeling"),$$=a(" head on top."),A$=p(),Yi=n("p"),F$=a("This model inherits from "),Kd=n("a"),x$=a("FlaxPreTrainedModel"),E$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M$=p(),Zi=n("p"),z$=a("This model is also a Flax Linen "),el=n("a"),q$=a("flax.linen.Module"),P$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),j$=p(),Fh=n("p"),C$=a("Finally, this model supports inherent JAX features such as:"),I$=p(),Qt=n("ul"),xh=n("li"),tl=n("a"),L$=a("Just-In-Time (JIT) compilation"),N$=p(),Eh=n("li"),ol=n("a"),S$=a("Automatic Differentiation"),D$=p(),Mh=n("li"),nl=n("a"),O$=a("Vectorization"),W$=p(),zh=n("li"),sl=n("a"),U$=a("Parallelization"),R$=p(),zt=n("div"),T(rl.$$.fragment),B$=p(),cn=n("p"),H$=a("The "),qh=n("code"),Q$=a("FlaxAlbertPreTrainedModel"),V$=a(" forward method, overrides the "),Ph=n("code"),K$=a("__call__"),J$=a(" special method."),G$=p(),T(Rs.$$.fragment),X$=p(),T(Bs.$$.fragment),Kf=p(),pn=n("h2"),Hs=n("a"),jh=n("span"),T(al.$$.fragment),Y$=p(),Ch=n("span"),Z$=a("FlaxAlbertForSequenceClassification"),Jf=p(),Ne=n("div"),T(il.$$.fragment),e2=p(),Ih=n("p"),t2=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o2=p(),ll=n("p"),n2=a("This model inherits from "),Jd=n("a"),s2=a("FlaxPreTrainedModel"),r2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a2=p(),dl=n("p"),i2=a("This model is also a Flax Linen "),cl=n("a"),l2=a("flax.linen.Module"),d2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c2=p(),Lh=n("p"),p2=a("Finally, this model supports inherent JAX features such as:"),h2=p(),Vt=n("ul"),Nh=n("li"),pl=n("a"),m2=a("Just-In-Time (JIT) compilation"),f2=p(),Sh=n("li"),hl=n("a"),u2=a("Automatic Differentiation"),g2=p(),Dh=n("li"),ml=n("a"),_2=a("Vectorization"),b2=p(),Oh=n("li"),fl=n("a"),k2=a("Parallelization"),v2=p(),qt=n("div"),T(ul.$$.fragment),T2=p(),hn=n("p"),y2=a("The "),Wh=n("code"),w2=a("FlaxAlbertPreTrainedModel"),$2=a(" forward method, overrides the "),Uh=n("code"),A2=a("__call__"),F2=a(" special method."),x2=p(),T(Qs.$$.fragment),E2=p(),T(Vs.$$.fragment),Gf=p(),mn=n("h2"),Ks=n("a"),Rh=n("span"),T(gl.$$.fragment),M2=p(),Bh=n("span"),z2=a("FlaxAlbertForMultipleChoice"),Xf=p(),Se=n("div"),T(_l.$$.fragment),q2=p(),Hh=n("p"),P2=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),j2=p(),bl=n("p"),C2=a("This model inherits from "),Gd=n("a"),I2=a("FlaxPreTrainedModel"),L2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),N2=p(),kl=n("p"),S2=a("This model is also a Flax Linen "),vl=n("a"),D2=a("flax.linen.Module"),O2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),W2=p(),Qh=n("p"),U2=a("Finally, this model supports inherent JAX features such as:"),R2=p(),Kt=n("ul"),Vh=n("li"),Tl=n("a"),B2=a("Just-In-Time (JIT) compilation"),H2=p(),Kh=n("li"),yl=n("a"),Q2=a("Automatic Differentiation"),V2=p(),Jh=n("li"),wl=n("a"),K2=a("Vectorization"),J2=p(),Gh=n("li"),$l=n("a"),G2=a("Parallelization"),X2=p(),Pt=n("div"),T(Al.$$.fragment),Y2=p(),fn=n("p"),Z2=a("The "),Xh=n("code"),eA=a("FlaxAlbertPreTrainedModel"),tA=a(" forward method, overrides the "),Yh=n("code"),oA=a("__call__"),nA=a(" special method."),sA=p(),T(Js.$$.fragment),rA=p(),T(Gs.$$.fragment),Yf=p(),un=n("h2"),Xs=n("a"),Zh=n("span"),T(Fl.$$.fragment),aA=p(),em=n("span"),iA=a("FlaxAlbertForTokenClassification"),Zf=p(),De=n("div"),T(xl.$$.fragment),lA=p(),tm=n("p"),dA=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cA=p(),El=n("p"),pA=a("This model inherits from "),Xd=n("a"),hA=a("FlaxPreTrainedModel"),mA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fA=p(),Ml=n("p"),uA=a("This model is also a Flax Linen "),zl=n("a"),gA=a("flax.linen.Module"),_A=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bA=p(),om=n("p"),kA=a("Finally, this model supports inherent JAX features such as:"),vA=p(),Jt=n("ul"),nm=n("li"),ql=n("a"),TA=a("Just-In-Time (JIT) compilation"),yA=p(),sm=n("li"),Pl=n("a"),wA=a("Automatic Differentiation"),$A=p(),rm=n("li"),jl=n("a"),AA=a("Vectorization"),FA=p(),am=n("li"),Cl=n("a"),xA=a("Parallelization"),EA=p(),jt=n("div"),T(Il.$$.fragment),MA=p(),gn=n("p"),zA=a("The "),im=n("code"),qA=a("FlaxAlbertPreTrainedModel"),PA=a(" forward method, overrides the "),lm=n("code"),jA=a("__call__"),CA=a(" special method."),IA=p(),T(Ys.$$.fragment),LA=p(),T(Zs.$$.fragment),eu=p(),_n=n("h2"),er=n("a"),dm=n("span"),T(Ll.$$.fragment),NA=p(),cm=n("span"),SA=a("FlaxAlbertForQuestionAnswering"),tu=p(),Oe=n("div"),T(Nl.$$.fragment),DA=p(),bn=n("p"),OA=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=n("code"),WA=a("span start logits"),UA=a(" and "),hm=n("code"),RA=a("span end logits"),BA=a(")."),HA=p(),Sl=n("p"),QA=a("This model inherits from "),Yd=n("a"),VA=a("FlaxPreTrainedModel"),KA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),JA=p(),Dl=n("p"),GA=a("This model is also a Flax Linen "),Ol=n("a"),XA=a("flax.linen.Module"),YA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZA=p(),mm=n("p"),eF=a("Finally, this model supports inherent JAX features such as:"),tF=p(),Gt=n("ul"),fm=n("li"),Wl=n("a"),oF=a("Just-In-Time (JIT) compilation"),nF=p(),um=n("li"),Ul=n("a"),sF=a("Automatic Differentiation"),rF=p(),gm=n("li"),Rl=n("a"),aF=a("Vectorization"),iF=p(),_m=n("li"),Bl=n("a"),lF=a("Parallelization"),dF=p(),Ct=n("div"),T(Hl.$$.fragment),cF=p(),kn=n("p"),pF=a("The "),bm=n("code"),hF=a("FlaxAlbertPreTrainedModel"),mF=a(" forward method, overrides the "),km=n("code"),fF=a("__call__"),uF=a(" special method."),gF=p(),T(tr.$$.fragment),_F=p(),T(or.$$.fragment),this.h()},l(o){const b=aM('[data-svelte="svelte-1phssyn"]',document.head);d=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var Ql=r(c);m=s(Ql,"A",{id:!0,class:!0,href:!0});var vm=r(m);k=s(vm,"SPAN",{});var Tm=r(k);y(l.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),f=h(Ql),E=s(Ql,"SPAN",{});var ym=r(E);fe=i(ym,"ALBERT"),ym.forEach(t),Ql.forEach(t),G=h(o),z=s(o,"H2",{class:!0});var Vl=r(z);Y=s(Vl,"A",{id:!0,class:!0,href:!0});var wm=r(Y);U=s(wm,"SPAN",{});var $m=r(U);y(ee.$$.fragment,$m),$m.forEach(t),wm.forEach(t),ue=h(Vl),R=s(Vl,"SPAN",{});var Am=r(R);ge=i(Am,"Overview"),Am.forEach(t),Vl.forEach(t),de=h(o),K=s(o,"P",{});var Kl=r(K);L=i(Kl,"The ALBERT model was proposed in "),te=s(Kl,"A",{href:!0,rel:!0});var Fm=r(te);X=i(Fm,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Fm.forEach(t),q=i(Kl,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),Kl.forEach(t),j=h(o),Z=s(o,"UL",{});var Jl=r(Z);B=s(Jl,"LI",{});var xm=r(B);_e=i(xm,"Splitting the embedding matrix into two smaller matrices."),xm.forEach(t),be=h(Jl),H=s(Jl,"LI",{});var Em=r(H);ke=i(Em,"Using repeating layers split among groups."),Em.forEach(t),Jl.forEach(t),ce=h(o),P=s(o,"P",{});var Mm=r(P);ve=i(Mm,"The abstract from the paper is the following:"),Mm.forEach(t),Q=h(o),oe=s(o,"P",{});var zm=r(oe);ie=s(zm,"EM",{});var qm=r(ie);V=i(qm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),qm.forEach(t),zm.forEach(t),pe=h(o),ne=s(o,"P",{});var Pm=r(ne);N=i(Pm,"Tips:"),Pm.forEach(t),he=h(o),D=s(o,"UL",{});var Gl=r(D);le=s(Gl,"LI",{});var jm=r(le);v=i(jm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),jm.forEach(t),M=h(Gl),J=s(Gl,"LI",{});var Cm=r(J);Fe=i(Cm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Cm.forEach(t),Gl.forEach(t),Ae=h(o),C=s(o,"P",{});var Xt=r(C);xe=i(Xt,"This model was contributed by "),ye=s(Xt,"A",{href:!0,rel:!0});var Im=r(ye);Ee=i(Im,"lysandre"),Im.forEach(t),S=i(Xt,`. This model jax version was contributed by
`),O=s(Xt,"A",{href:!0,rel:!0});var Lm=r(O);Me=i(Lm,"kamalkraj"),Lm.forEach(t),ze=i(Xt,". The original code can be found "),W=s(Xt,"A",{href:!0,rel:!0});var Nm=r(W);qe=i(Nm,"here"),Nm.forEach(t),Pe=i(Xt,"."),Xt.forEach(t),me=h(o),Te=s(o,"H2",{class:!0});var Xl=r(Te);wn=s(Xl,"A",{id:!0,class:!0,href:!0});var Sm=r(wn);Mc=s(Sm,"SPAN",{});var Dm=r(Mc);y(Fr.$$.fragment,Dm),Dm.forEach(t),Sm.forEach(t),Tg=h(Xl),zc=s(Xl,"SPAN",{});var Om=r(zc);yg=i(Om,"AlbertConfig"),Om.forEach(t),Xl.forEach(t),rf=h(o),bt=s(o,"DIV",{class:!0});var Yt=r(bt);y(xr.$$.fragment,Yt),wg=h(Yt),Ut=s(Yt,"P",{});var Zt=r(Ut);$g=i(Zt,"This is the configuration class to store the configuration of a "),rd=s(Zt,"A",{href:!0});var Wm=r(rd);Ag=i(Wm,"AlbertModel"),Wm.forEach(t),Fg=i(Zt," or a "),ad=s(Zt,"A",{href:!0});var Um=r(ad);xg=i(Um,"TFAlbertModel"),Um.forEach(t),Eg=i(Zt,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=s(Zt,"A",{href:!0,rel:!0});var Rm=r(Er);Mg=i(Rm,"xxlarge"),Rm.forEach(t),zg=i(Zt," architecture."),Zt.forEach(t),qg=h(Yt),bo=s(Yt,"P",{});var vn=r(bo);Pg=i(vn,"Configuration objects inherit from "),id=s(vn,"A",{href:!0});var Bm=r(id);jg=i(Bm,"PretrainedConfig"),Bm.forEach(t),Cg=i(vn,` and can be used to control the model outputs. Read the
documentation from `),ld=s(vn,"A",{href:!0});var Hm=r(ld);Ig=i(Hm,"PretrainedConfig"),Hm.forEach(t),Lg=i(vn," for more information."),vn.forEach(t),Ng=h(Yt),y($n.$$.fragment,Yt),Yt.forEach(t),af=h(o),ko=s(o,"H2",{class:!0});var Yl=r(ko);An=s(Yl,"A",{id:!0,class:!0,href:!0});var Qm=r(An);qc=s(Qm,"SPAN",{});var Vm=r(qc);y(Mr.$$.fragment,Vm),Vm.forEach(t),Qm.forEach(t),Sg=h(Yl),Pc=s(Yl,"SPAN",{});var Km=r(Pc);Dg=i(Km,"AlbertTokenizer"),Km.forEach(t),Yl.forEach(t),lf=h(o),je=s(o,"DIV",{class:!0});var Je=r(je);y(zr.$$.fragment,Je),Og=h(Je),qr=s(Je,"P",{});var Zl=r(qr);Wg=i(Zl,"Construct an ALBERT tokenizer. Based on "),Pr=s(Zl,"A",{href:!0,rel:!0});var Jm=r(Pr);Ug=i(Jm,"SentencePiece"),Jm.forEach(t),Rg=i(Zl,"."),Zl.forEach(t),Bg=h(Je),jr=s(Je,"P",{});var ed=r(jr);Hg=i(ed,"This tokenizer inherits from "),dd=s(ed,"A",{href:!0});var Gm=r(dd);Qg=i(Gm,"PreTrainedTokenizer"),Gm.forEach(t),Vg=i(ed,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ed.forEach(t),Kg=h(Je),to=s(Je,"DIV",{class:!0});var Tn=r(to);y(Cr.$$.fragment,Tn),Jg=h(Tn),jc=s(Tn,"P",{});var Xm=r(jc);Gg=i(Xm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xm.forEach(t),Xg=h(Tn),Ir=s(Tn,"UL",{});var td=r(Ir);cd=s(td,"LI",{});var Zd=r(cd);Yg=i(Zd,"single sequence: "),Cc=s(Zd,"CODE",{});var Ym=r(Cc);Zg=i(Ym,"[CLS] X [SEP]"),Ym.forEach(t),Zd.forEach(t),e_=h(td),pd=s(td,"LI",{});var ec=r(pd);t_=i(ec,"pair of sequences: "),Ic=s(ec,"CODE",{});var Zm=r(Ic);o_=i(Zm,"[CLS] A [SEP] B [SEP]"),Zm.forEach(t),ec.forEach(t),td.forEach(t),Tn.forEach(t),n_=h(Je),Fn=s(Je,"DIV",{class:!0});var od=r(Fn);y(Lr.$$.fragment,od),s_=h(od),Nr=s(od,"P",{});var nd=r(Nr);r_=i(nd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lc=s(nd,"CODE",{});var ef=r(Lc);a_=i(ef,"prepare_for_model"),ef.forEach(t),i_=i(nd," method."),nd.forEach(t),od.forEach(t),l_=h(Je),vt=s(Je,"DIV",{class:!0});var eo=r(vt);y(Sr.$$.fragment,eo),d_=h(eo),Nc=s(eo,"P",{});var tf=r(Nc);c_=i(tf,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),tf.forEach(t),p_=h(eo),y(xn.$$.fragment,eo),h_=h(eo),vo=s(eo,"P",{});var yn=r(vo);m_=i(yn,"If "),Sc=s(yn,"CODE",{});var of=r(Sc);f_=i(of,"token_ids_1"),of.forEach(t),u_=i(yn," is "),Dc=s(yn,"CODE",{});var nf=r(Dc);g_=i(nf,"None"),nf.forEach(t),__=i(yn,", this method only returns the first portion of the mask (0s)."),yn.forEach(t),eo.forEach(t),b_=h(Je),hd=s(Je,"DIV",{class:!0});var sf=r(hd);y(Dr.$$.fragment,sf),sf.forEach(t),Je.forEach(t),df=h(o),To=s(o,"H2",{class:!0});var sd=r(To);En=s(sd,"A",{id:!0,class:!0,href:!0});var vF=r(En);Oc=s(vF,"SPAN",{});var TF=r(Oc);y(Or.$$.fragment,TF),TF.forEach(t),vF.forEach(t),k_=h(sd),Wc=s(sd,"SPAN",{});var yF=r(Wc);v_=i(yF,"AlbertTokenizerFast"),yF.forEach(t),sd.forEach(t),cf=h(o),kt=s(o,"DIV",{class:!0});var nr=r(kt);y(Wr.$$.fragment,nr),T_=h(nr),Rt=s(nr,"P",{});var sr=r(Rt);y_=i(sr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Uc=s(sr,"EM",{});var wF=r(Uc);w_=i(wF,"tokenizers"),wF.forEach(t),$_=i(sr,` library). Based on
`),Ur=s(sr,"A",{href:!0,rel:!0});var $F=r(Ur);A_=i($F,"Unigram"),$F.forEach(t),F_=i(sr,`. This
tokenizer inherits from `),md=s(sr,"A",{href:!0});var AF=r(md);x_=i(AF,"PreTrainedTokenizerFast"),AF.forEach(t),E_=i(sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),sr.forEach(t),M_=h(nr),oo=s(nr,"DIV",{class:!0});var tc=r(oo);y(Rr.$$.fragment,tc),z_=h(tc),Rc=s(tc,"P",{});var FF=r(Rc);q_=i(FF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),FF.forEach(t),P_=h(tc),Br=s(tc,"UL",{});var nu=r(Br);fd=s(nu,"LI",{});var bF=r(fd);j_=i(bF,"single sequence: "),Bc=s(bF,"CODE",{});var xF=r(Bc);C_=i(xF,"[CLS] X [SEP]"),xF.forEach(t),bF.forEach(t),I_=h(nu),ud=s(nu,"LI",{});var kF=r(ud);L_=i(kF,"pair of sequences: "),Hc=s(kF,"CODE",{});var EF=r(Hc);N_=i(EF,"[CLS] A [SEP] B [SEP]"),EF.forEach(t),kF.forEach(t),nu.forEach(t),tc.forEach(t),S_=h(nr),Tt=s(nr,"DIV",{class:!0});var rr=r(Tt);y(Hr.$$.fragment,rr),D_=h(rr),Qc=s(rr,"P",{});var MF=r(Qc);O_=i(MF,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),MF.forEach(t),W_=h(rr),y(Mn.$$.fragment,rr),U_=h(rr),Vc=s(rr,"P",{});var zF=r(Vc);R_=i(zF,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),zF.forEach(t),rr.forEach(t),nr.forEach(t),pf=h(o),yo=s(o,"H2",{class:!0});var su=r(yo);zn=s(su,"A",{id:!0,class:!0,href:!0});var qF=r(zn);Kc=s(qF,"SPAN",{});var PF=r(Kc);y(Qr.$$.fragment,PF),PF.forEach(t),qF.forEach(t),B_=h(su),Jc=s(su,"SPAN",{});var jF=r(Jc);H_=i(jF,"Albert specific outputs"),jF.forEach(t),su.forEach(t),hf=h(o),wo=s(o,"DIV",{class:!0});var ru=r(wo);y(Vr.$$.fragment,ru),Q_=h(ru),Kr=s(ru,"P",{});var au=r(Kr);V_=i(au,"Output type of "),gd=s(au,"A",{href:!0});var CF=r(gd);K_=i(CF,"AlbertForPreTraining"),CF.forEach(t),J_=i(au,"."),au.forEach(t),ru.forEach(t),mf=h(o),$o=s(o,"DIV",{class:!0});var iu=r($o);y(Jr.$$.fragment,iu),G_=h(iu),Gr=s(iu,"P",{});var lu=r(Gr);X_=i(lu,"Output type of "),_d=s(lu,"A",{href:!0});var IF=r(_d);Y_=i(IF,"TFAlbertForPreTraining"),IF.forEach(t),Z_=i(lu,"."),lu.forEach(t),iu.forEach(t),ff=h(o),Ao=s(o,"H2",{class:!0});var du=r(Ao);qn=s(du,"A",{id:!0,class:!0,href:!0});var LF=r(qn);Gc=s(LF,"SPAN",{});var NF=r(Gc);y(Xr.$$.fragment,NF),NF.forEach(t),LF.forEach(t),eb=h(du),Xc=s(du,"SPAN",{});var SF=r(Xc);tb=i(SF,"AlbertModel"),SF.forEach(t),du.forEach(t),uf=h(o),Ge=s(o,"DIV",{class:!0});var no=r(Ge);y(Yr.$$.fragment,no),ob=h(no),Yc=s(no,"P",{});var DF=r(Yc);nb=i(DF,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),DF.forEach(t),sb=h(no),Zr=s(no,"P",{});var cu=r(Zr);rb=i(cu,"This model inherits from "),bd=s(cu,"A",{href:!0});var OF=r(bd);ab=i(OF,"PreTrainedModel"),OF.forEach(t),ib=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),lb=h(no),ea=s(no,"P",{});var pu=r(ea);db=i(pu,"This model is also a PyTorch "),ta=s(pu,"A",{href:!0,rel:!0});var WF=r(ta);cb=i(WF,"torch.nn.Module"),WF.forEach(t),pb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),hb=h(no),yt=s(no,"DIV",{class:!0});var ar=r(yt);y(oa.$$.fragment,ar),mb=h(ar),Fo=s(ar,"P",{});var oc=r(Fo);fb=i(oc,"The "),kd=s(oc,"A",{href:!0});var UF=r(kd);ub=i(UF,"AlbertModel"),UF.forEach(t),gb=i(oc," forward method, overrides the "),Zc=s(oc,"CODE",{});var RF=r(Zc);_b=i(RF,"__call__"),RF.forEach(t),bb=i(oc," special method."),oc.forEach(t),kb=h(ar),y(Pn.$$.fragment,ar),vb=h(ar),y(jn.$$.fragment,ar),ar.forEach(t),no.forEach(t),gf=h(o),xo=s(o,"H2",{class:!0});var hu=r(xo);Cn=s(hu,"A",{id:!0,class:!0,href:!0});var BF=r(Cn);ep=s(BF,"SPAN",{});var HF=r(ep);y(na.$$.fragment,HF),HF.forEach(t),BF.forEach(t),Tb=h(hu),tp=s(hu,"SPAN",{});var QF=r(tp);yb=i(QF,"AlbertForPreTraining"),QF.forEach(t),hu.forEach(t),_f=h(o),Xe=s(o,"DIV",{class:!0});var so=r(Xe);y(sa.$$.fragment,so),wb=h(so),Eo=s(so,"P",{});var nc=r(Eo);$b=i(nc,"Albert Model with two heads on top as done during the pretraining: a "),op=s(nc,"CODE",{});var VF=r(op);Ab=i(VF,"masked language modeling"),VF.forEach(t),Fb=i(nc,` head and a
`),np=s(nc,"CODE",{});var KF=r(np);xb=i(KF,"sentence order prediction (classification)"),KF.forEach(t),Eb=i(nc," head."),nc.forEach(t),Mb=h(so),ra=s(so,"P",{});var mu=r(ra);zb=i(mu,"This model inherits from "),vd=s(mu,"A",{href:!0});var JF=r(vd);qb=i(JF,"PreTrainedModel"),JF.forEach(t),Pb=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mu.forEach(t),jb=h(so),aa=s(so,"P",{});var fu=r(aa);Cb=i(fu,"This model is also a PyTorch "),ia=s(fu,"A",{href:!0,rel:!0});var GF=r(ia);Ib=i(GF,"torch.nn.Module"),GF.forEach(t),Lb=i(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),Nb=h(so),wt=s(so,"DIV",{class:!0});var ir=r(wt);y(la.$$.fragment,ir),Sb=h(ir),Mo=s(ir,"P",{});var sc=r(Mo);Db=i(sc,"The "),Td=s(sc,"A",{href:!0});var XF=r(Td);Ob=i(XF,"AlbertForPreTraining"),XF.forEach(t),Wb=i(sc," forward method, overrides the "),sp=s(sc,"CODE",{});var YF=r(sp);Ub=i(YF,"__call__"),YF.forEach(t),Rb=i(sc," special method."),sc.forEach(t),Bb=h(ir),y(In.$$.fragment,ir),Hb=h(ir),y(Ln.$$.fragment,ir),ir.forEach(t),so.forEach(t),bf=h(o),zo=s(o,"H2",{class:!0});var uu=r(zo);Nn=s(uu,"A",{id:!0,class:!0,href:!0});var ZF=r(Nn);rp=s(ZF,"SPAN",{});var e0=r(rp);y(da.$$.fragment,e0),e0.forEach(t),ZF.forEach(t),Qb=h(uu),ap=s(uu,"SPAN",{});var t0=r(ap);Vb=i(t0,"AlbertForMaskedLM"),t0.forEach(t),uu.forEach(t),kf=h(o),Ye=s(o,"DIV",{class:!0});var ro=r(Ye);y(ca.$$.fragment,ro),Kb=h(ro),pa=s(ro,"P",{});var gu=r(pa);Jb=i(gu,"Albert Model with a "),ip=s(gu,"CODE",{});var o0=r(ip);Gb=i(o0,"language modeling"),o0.forEach(t),Xb=i(gu," head on top."),gu.forEach(t),Yb=h(ro),ha=s(ro,"P",{});var _u=r(ha);Zb=i(_u,"This model inherits from "),yd=s(_u,"A",{href:!0});var n0=r(yd);ek=i(n0,"PreTrainedModel"),n0.forEach(t),tk=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),ok=h(ro),ma=s(ro,"P",{});var bu=r(ma);nk=i(bu,"This model is also a PyTorch "),fa=s(bu,"A",{href:!0,rel:!0});var s0=r(fa);sk=i(s0,"torch.nn.Module"),s0.forEach(t),rk=i(bu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bu.forEach(t),ak=h(ro),nt=s(ro,"DIV",{class:!0});var ao=r(nt);y(ua.$$.fragment,ao),ik=h(ao),qo=s(ao,"P",{});var rc=r(qo);lk=i(rc,"The "),wd=s(rc,"A",{href:!0});var r0=r(wd);dk=i(r0,"AlbertForMaskedLM"),r0.forEach(t),ck=i(rc," forward method, overrides the "),lp=s(rc,"CODE",{});var a0=r(lp);pk=i(a0,"__call__"),a0.forEach(t),hk=i(rc," special method."),rc.forEach(t),mk=h(ao),y(Sn.$$.fragment,ao),fk=h(ao),y(Dn.$$.fragment,ao),uk=h(ao),y(On.$$.fragment,ao),ao.forEach(t),ro.forEach(t),vf=h(o),Po=s(o,"H2",{class:!0});var ku=r(Po);Wn=s(ku,"A",{id:!0,class:!0,href:!0});var i0=r(Wn);dp=s(i0,"SPAN",{});var l0=r(dp);y(ga.$$.fragment,l0),l0.forEach(t),i0.forEach(t),gk=h(ku),cp=s(ku,"SPAN",{});var d0=r(cp);_k=i(d0,"AlbertForSequenceClassification"),d0.forEach(t),ku.forEach(t),Tf=h(o),Ze=s(o,"DIV",{class:!0});var io=r(Ze);y(_a.$$.fragment,io),bk=h(io),pp=s(io,"P",{});var c0=r(pp);kk=i(c0,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),c0.forEach(t),vk=h(io),ba=s(io,"P",{});var vu=r(ba);Tk=i(vu,"This model inherits from "),$d=s(vu,"A",{href:!0});var p0=r($d);yk=i(p0,"PreTrainedModel"),p0.forEach(t),wk=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),$k=h(io),ka=s(io,"P",{});var Tu=r(ka);Ak=i(Tu,"This model is also a PyTorch "),va=s(Tu,"A",{href:!0,rel:!0});var h0=r(va);Fk=i(h0,"torch.nn.Module"),h0.forEach(t),xk=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),Ek=h(io),We=s(io,"DIV",{class:!0});var ct=r(We);y(Ta.$$.fragment,ct),Mk=h(ct),jo=s(ct,"P",{});var ac=r(jo);zk=i(ac,"The "),Ad=s(ac,"A",{href:!0});var m0=r(Ad);qk=i(m0,"AlbertForSequenceClassification"),m0.forEach(t),Pk=i(ac," forward method, overrides the "),hp=s(ac,"CODE",{});var f0=r(hp);jk=i(f0,"__call__"),f0.forEach(t),Ck=i(ac," special method."),ac.forEach(t),Ik=h(ct),y(Un.$$.fragment,ct),Lk=h(ct),y(Rn.$$.fragment,ct),Nk=h(ct),y(Bn.$$.fragment,ct),Sk=h(ct),y(Hn.$$.fragment,ct),Dk=h(ct),y(Qn.$$.fragment,ct),ct.forEach(t),io.forEach(t),yf=h(o),Co=s(o,"H2",{class:!0});var yu=r(Co);Vn=s(yu,"A",{id:!0,class:!0,href:!0});var u0=r(Vn);mp=s(u0,"SPAN",{});var g0=r(mp);y(ya.$$.fragment,g0),g0.forEach(t),u0.forEach(t),Ok=h(yu),fp=s(yu,"SPAN",{});var _0=r(fp);Wk=i(_0,"AlbertForMultipleChoice"),_0.forEach(t),yu.forEach(t),wf=h(o),et=s(o,"DIV",{class:!0});var lo=r(et);y(wa.$$.fragment,lo),Uk=h(lo),up=s(lo,"P",{});var b0=r(up);Rk=i(b0,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b0.forEach(t),Bk=h(lo),$a=s(lo,"P",{});var wu=r($a);Hk=i(wu,"This model inherits from "),Fd=s(wu,"A",{href:!0});var k0=r(Fd);Qk=i(k0,"PreTrainedModel"),k0.forEach(t),Vk=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),Kk=h(lo),Aa=s(lo,"P",{});var $u=r(Aa);Jk=i($u,"This model is also a PyTorch "),Fa=s($u,"A",{href:!0,rel:!0});var v0=r(Fa);Gk=i(v0,"torch.nn.Module"),v0.forEach(t),Xk=i($u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u.forEach(t),Yk=h(lo),$t=s(lo,"DIV",{class:!0});var lr=r($t);y(xa.$$.fragment,lr),Zk=h(lr),Io=s(lr,"P",{});var ic=r(Io);e1=i(ic,"The "),xd=s(ic,"A",{href:!0});var T0=r(xd);t1=i(T0,"AlbertForMultipleChoice"),T0.forEach(t),o1=i(ic," forward method, overrides the "),gp=s(ic,"CODE",{});var y0=r(gp);n1=i(y0,"__call__"),y0.forEach(t),s1=i(ic," special method."),ic.forEach(t),r1=h(lr),y(Kn.$$.fragment,lr),a1=h(lr),y(Jn.$$.fragment,lr),lr.forEach(t),lo.forEach(t),$f=h(o),Lo=s(o,"H2",{class:!0});var Au=r(Lo);Gn=s(Au,"A",{id:!0,class:!0,href:!0});var w0=r(Gn);_p=s(w0,"SPAN",{});var $0=r(_p);y(Ea.$$.fragment,$0),$0.forEach(t),w0.forEach(t),i1=h(Au),bp=s(Au,"SPAN",{});var A0=r(bp);l1=i(A0,"AlbertForTokenClassification"),A0.forEach(t),Au.forEach(t),Af=h(o),tt=s(o,"DIV",{class:!0});var co=r(tt);y(Ma.$$.fragment,co),d1=h(co),kp=s(co,"P",{});var F0=r(kp);c1=i(F0,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),F0.forEach(t),p1=h(co),za=s(co,"P",{});var Fu=r(za);h1=i(Fu,"This model inherits from "),Ed=s(Fu,"A",{href:!0});var x0=r(Ed);m1=i(x0,"PreTrainedModel"),x0.forEach(t),f1=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),u1=h(co),qa=s(co,"P",{});var xu=r(qa);g1=i(xu,"This model is also a PyTorch "),Pa=s(xu,"A",{href:!0,rel:!0});var E0=r(Pa);_1=i(E0,"torch.nn.Module"),E0.forEach(t),b1=i(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),k1=h(co),st=s(co,"DIV",{class:!0});var po=r(st);y(ja.$$.fragment,po),v1=h(po),No=s(po,"P",{});var lc=r(No);T1=i(lc,"The "),Md=s(lc,"A",{href:!0});var M0=r(Md);y1=i(M0,"AlbertForTokenClassification"),M0.forEach(t),w1=i(lc," forward method, overrides the "),vp=s(lc,"CODE",{});var z0=r(vp);$1=i(z0,"__call__"),z0.forEach(t),A1=i(lc," special method."),lc.forEach(t),F1=h(po),y(Xn.$$.fragment,po),x1=h(po),y(Yn.$$.fragment,po),E1=h(po),y(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),Ff=h(o),So=s(o,"H2",{class:!0});var Eu=r(So);es=s(Eu,"A",{id:!0,class:!0,href:!0});var q0=r(es);Tp=s(q0,"SPAN",{});var P0=r(Tp);y(Ca.$$.fragment,P0),P0.forEach(t),q0.forEach(t),M1=h(Eu),yp=s(Eu,"SPAN",{});var j0=r(yp);z1=i(j0,"AlbertForQuestionAnswering"),j0.forEach(t),Eu.forEach(t),xf=h(o),ot=s(o,"DIV",{class:!0});var ho=r(ot);y(Ia.$$.fragment,ho),q1=h(ho),Do=s(ho,"P",{});var dc=r(Do);P1=i(dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=s(dc,"CODE",{});var C0=r(wp);j1=i(C0,"span start logits"),C0.forEach(t),C1=i(dc," and "),$p=s(dc,"CODE",{});var I0=r($p);I1=i(I0,"span end logits"),I0.forEach(t),L1=i(dc,")."),dc.forEach(t),N1=h(ho),La=s(ho,"P",{});var Mu=r(La);S1=i(Mu,"This model inherits from "),zd=s(Mu,"A",{href:!0});var L0=r(zd);D1=i(L0,"PreTrainedModel"),L0.forEach(t),O1=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),W1=h(ho),Na=s(ho,"P",{});var zu=r(Na);U1=i(zu,"This model is also a PyTorch "),Sa=s(zu,"A",{href:!0,rel:!0});var N0=r(Sa);R1=i(N0,"torch.nn.Module"),N0.forEach(t),B1=i(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),H1=h(ho),rt=s(ho,"DIV",{class:!0});var mo=r(rt);y(Da.$$.fragment,mo),Q1=h(mo),Oo=s(mo,"P",{});var cc=r(Oo);V1=i(cc,"The "),qd=s(cc,"A",{href:!0});var S0=r(qd);K1=i(S0,"AlbertForQuestionAnswering"),S0.forEach(t),J1=i(cc," forward method, overrides the "),Ap=s(cc,"CODE",{});var D0=r(Ap);G1=i(D0,"__call__"),D0.forEach(t),X1=i(cc," special method."),cc.forEach(t),Y1=h(mo),y(ts.$$.fragment,mo),Z1=h(mo),y(os.$$.fragment,mo),ev=h(mo),y(ns.$$.fragment,mo),mo.forEach(t),ho.forEach(t),Ef=h(o),Wo=s(o,"H2",{class:!0});var qu=r(Wo);ss=s(qu,"A",{id:!0,class:!0,href:!0});var O0=r(ss);Fp=s(O0,"SPAN",{});var W0=r(Fp);y(Oa.$$.fragment,W0),W0.forEach(t),O0.forEach(t),tv=h(qu),xp=s(qu,"SPAN",{});var U0=r(xp);ov=i(U0,"TFAlbertModel"),U0.forEach(t),qu.forEach(t),Mf=h(o),Ue=s(o,"DIV",{class:!0});var It=r(Ue);y(Wa.$$.fragment,It),nv=h(It),Ep=s(It,"P",{});var R0=r(Ep);sv=i(R0,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),R0.forEach(t),rv=h(It),Ua=s(It,"P",{});var Pu=r(Ua);av=i(Pu,"This model inherits from "),Pd=s(Pu,"A",{href:!0});var B0=r(Pd);iv=i(B0,"TFPreTrainedModel"),B0.forEach(t),lv=i(Pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu.forEach(t),dv=h(It),Ra=s(It,"P",{});var ju=r(Ra);cv=i(ju,"This model is also a "),Ba=s(ju,"A",{href:!0,rel:!0});var H0=r(Ba);pv=i(H0,"tf.keras.Model"),H0.forEach(t),hv=i(ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju.forEach(t),mv=h(It),y(rs.$$.fragment,It),fv=h(It),At=s(It,"DIV",{class:!0});var dr=r(At);y(Ha.$$.fragment,dr),uv=h(dr),Uo=s(dr,"P",{});var pc=r(Uo);gv=i(pc,"The "),jd=s(pc,"A",{href:!0});var Q0=r(jd);_v=i(Q0,"TFAlbertModel"),Q0.forEach(t),bv=i(pc," forward method, overrides the "),Mp=s(pc,"CODE",{});var V0=r(Mp);kv=i(V0,"__call__"),V0.forEach(t),vv=i(pc," special method."),pc.forEach(t),Tv=h(dr),y(as.$$.fragment,dr),yv=h(dr),y(is.$$.fragment,dr),dr.forEach(t),It.forEach(t),zf=h(o),Ro=s(o,"H2",{class:!0});var Cu=r(Ro);ls=s(Cu,"A",{id:!0,class:!0,href:!0});var K0=r(ls);zp=s(K0,"SPAN",{});var J0=r(zp);y(Qa.$$.fragment,J0),J0.forEach(t),K0.forEach(t),wv=h(Cu),qp=s(Cu,"SPAN",{});var G0=r(qp);$v=i(G0,"TFAlbertForPreTraining"),G0.forEach(t),Cu.forEach(t),qf=h(o),Re=s(o,"DIV",{class:!0});var Lt=r(Re);y(Va.$$.fragment,Lt),Av=h(Lt),Bo=s(Lt,"P",{});var hc=r(Bo);Fv=i(hc,"Albert Model with two heads on top for pretraining: a "),Pp=s(hc,"CODE",{});var X0=r(Pp);xv=i(X0,"masked language modeling"),X0.forEach(t),Ev=i(hc," head and a "),jp=s(hc,"CODE",{});var Y0=r(jp);Mv=i(Y0,"sentence order prediction"),Y0.forEach(t),zv=i(hc," (classification) head."),hc.forEach(t),qv=h(Lt),Ka=s(Lt,"P",{});var Iu=r(Ka);Pv=i(Iu,"This model inherits from "),Cd=s(Iu,"A",{href:!0});var Z0=r(Cd);jv=i(Z0,"TFPreTrainedModel"),Z0.forEach(t),Cv=i(Iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu.forEach(t),Iv=h(Lt),Ja=s(Lt,"P",{});var Lu=r(Ja);Lv=i(Lu,"This model is also a "),Ga=s(Lu,"A",{href:!0,rel:!0});var ex=r(Ga);Nv=i(ex,"tf.keras.Model"),ex.forEach(t),Sv=i(Lu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lu.forEach(t),Dv=h(Lt),y(ds.$$.fragment,Lt),Ov=h(Lt),Ft=s(Lt,"DIV",{class:!0});var cr=r(Ft);y(Xa.$$.fragment,cr),Wv=h(cr),Ho=s(cr,"P",{});var mc=r(Ho);Uv=i(mc,"The "),Id=s(mc,"A",{href:!0});var tx=r(Id);Rv=i(tx,"TFAlbertForPreTraining"),tx.forEach(t),Bv=i(mc," forward method, overrides the "),Cp=s(mc,"CODE",{});var ox=r(Cp);Hv=i(ox,"__call__"),ox.forEach(t),Qv=i(mc," special method."),mc.forEach(t),Vv=h(cr),y(cs.$$.fragment,cr),Kv=h(cr),y(ps.$$.fragment,cr),cr.forEach(t),Lt.forEach(t),Pf=h(o),Qo=s(o,"H2",{class:!0});var Nu=r(Qo);hs=s(Nu,"A",{id:!0,class:!0,href:!0});var nx=r(hs);Ip=s(nx,"SPAN",{});var sx=r(Ip);y(Ya.$$.fragment,sx),sx.forEach(t),nx.forEach(t),Jv=h(Nu),Lp=s(Nu,"SPAN",{});var rx=r(Lp);Gv=i(rx,"TFAlbertForMaskedLM"),rx.forEach(t),Nu.forEach(t),jf=h(o),Be=s(o,"DIV",{class:!0});var Nt=r(Be);y(Za.$$.fragment,Nt),Xv=h(Nt),ei=s(Nt,"P",{});var Su=r(ei);Yv=i(Su,"Albert Model with a "),Np=s(Su,"CODE",{});var ax=r(Np);Zv=i(ax,"language modeling"),ax.forEach(t),eT=i(Su," head on top."),Su.forEach(t),tT=h(Nt),ti=s(Nt,"P",{});var Du=r(ti);oT=i(Du,"This model inherits from "),Ld=s(Du,"A",{href:!0});var ix=r(Ld);nT=i(ix,"TFPreTrainedModel"),ix.forEach(t),sT=i(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(t),rT=h(Nt),oi=s(Nt,"P",{});var Ou=r(oi);aT=i(Ou,"This model is also a "),ni=s(Ou,"A",{href:!0,rel:!0});var lx=r(ni);iT=i(lx,"tf.keras.Model"),lx.forEach(t),lT=i(Ou,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou.forEach(t),dT=h(Nt),y(ms.$$.fragment,Nt),cT=h(Nt),at=s(Nt,"DIV",{class:!0});var fo=r(at);y(si.$$.fragment,fo),pT=h(fo),Vo=s(fo,"P",{});var fc=r(Vo);hT=i(fc,"The "),Nd=s(fc,"A",{href:!0});var dx=r(Nd);mT=i(dx,"TFAlbertForMaskedLM"),dx.forEach(t),fT=i(fc," forward method, overrides the "),Sp=s(fc,"CODE",{});var cx=r(Sp);uT=i(cx,"__call__"),cx.forEach(t),gT=i(fc," special method."),fc.forEach(t),_T=h(fo),y(fs.$$.fragment,fo),bT=h(fo),y(us.$$.fragment,fo),kT=h(fo),y(gs.$$.fragment,fo),fo.forEach(t),Nt.forEach(t),Cf=h(o),Ko=s(o,"H2",{class:!0});var Wu=r(Ko);_s=s(Wu,"A",{id:!0,class:!0,href:!0});var px=r(_s);Dp=s(px,"SPAN",{});var hx=r(Dp);y(ri.$$.fragment,hx),hx.forEach(t),px.forEach(t),vT=h(Wu),Op=s(Wu,"SPAN",{});var mx=r(Op);TT=i(mx,"TFAlbertForSequenceClassification"),mx.forEach(t),Wu.forEach(t),If=h(o),He=s(o,"DIV",{class:!0});var St=r(He);y(ai.$$.fragment,St),yT=h(St),Wp=s(St,"P",{});var fx=r(Wp);wT=i(fx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fx.forEach(t),$T=h(St),ii=s(St,"P",{});var Uu=r(ii);AT=i(Uu,"This model inherits from "),Sd=s(Uu,"A",{href:!0});var ux=r(Sd);FT=i(ux,"TFPreTrainedModel"),ux.forEach(t),xT=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),ET=h(St),li=s(St,"P",{});var Ru=r(li);MT=i(Ru,"This model is also a "),di=s(Ru,"A",{href:!0,rel:!0});var gx=r(di);zT=i(gx,"tf.keras.Model"),gx.forEach(t),qT=i(Ru,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ru.forEach(t),PT=h(St),y(bs.$$.fragment,St),jT=h(St),it=s(St,"DIV",{class:!0});var uo=r(it);y(ci.$$.fragment,uo),CT=h(uo),Jo=s(uo,"P",{});var uc=r(Jo);IT=i(uc,"The "),Dd=s(uc,"A",{href:!0});var _x=r(Dd);LT=i(_x,"TFAlbertForSequenceClassification"),_x.forEach(t),NT=i(uc," forward method, overrides the "),Up=s(uc,"CODE",{});var bx=r(Up);ST=i(bx,"__call__"),bx.forEach(t),DT=i(uc," special method."),uc.forEach(t),OT=h(uo),y(ks.$$.fragment,uo),WT=h(uo),y(vs.$$.fragment,uo),UT=h(uo),y(Ts.$$.fragment,uo),uo.forEach(t),St.forEach(t),Lf=h(o),Go=s(o,"H2",{class:!0});var Bu=r(Go);ys=s(Bu,"A",{id:!0,class:!0,href:!0});var kx=r(ys);Rp=s(kx,"SPAN",{});var vx=r(Rp);y(pi.$$.fragment,vx),vx.forEach(t),kx.forEach(t),RT=h(Bu),Bp=s(Bu,"SPAN",{});var Tx=r(Bp);BT=i(Tx,"TFAlbertForMultipleChoice"),Tx.forEach(t),Bu.forEach(t),Nf=h(o),Qe=s(o,"DIV",{class:!0});var Dt=r(Qe);y(hi.$$.fragment,Dt),HT=h(Dt),Hp=s(Dt,"P",{});var yx=r(Hp);QT=i(yx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yx.forEach(t),VT=h(Dt),mi=s(Dt,"P",{});var Hu=r(mi);KT=i(Hu,"This model inherits from "),Od=s(Hu,"A",{href:!0});var wx=r(Od);JT=i(wx,"TFPreTrainedModel"),wx.forEach(t),GT=i(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),XT=h(Dt),fi=s(Dt,"P",{});var Qu=r(fi);YT=i(Qu,"This model is also a "),ui=s(Qu,"A",{href:!0,rel:!0});var $x=r(ui);ZT=i($x,"tf.keras.Model"),$x.forEach(t),ey=i(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(t),ty=h(Dt),y(ws.$$.fragment,Dt),oy=h(Dt),xt=s(Dt,"DIV",{class:!0});var pr=r(xt);y(gi.$$.fragment,pr),ny=h(pr),Xo=s(pr,"P",{});var gc=r(Xo);sy=i(gc,"The "),Wd=s(gc,"A",{href:!0});var Ax=r(Wd);ry=i(Ax,"TFAlbertForMultipleChoice"),Ax.forEach(t),ay=i(gc," forward method, overrides the "),Qp=s(gc,"CODE",{});var Fx=r(Qp);iy=i(Fx,"__call__"),Fx.forEach(t),ly=i(gc," special method."),gc.forEach(t),dy=h(pr),y($s.$$.fragment,pr),cy=h(pr),y(As.$$.fragment,pr),pr.forEach(t),Dt.forEach(t),Sf=h(o),Yo=s(o,"H2",{class:!0});var Vu=r(Yo);Fs=s(Vu,"A",{id:!0,class:!0,href:!0});var xx=r(Fs);Vp=s(xx,"SPAN",{});var Ex=r(Vp);y(_i.$$.fragment,Ex),Ex.forEach(t),xx.forEach(t),py=h(Vu),Kp=s(Vu,"SPAN",{});var Mx=r(Kp);hy=i(Mx,"TFAlbertForTokenClassification"),Mx.forEach(t),Vu.forEach(t),Df=h(o),Ve=s(o,"DIV",{class:!0});var Ot=r(Ve);y(bi.$$.fragment,Ot),my=h(Ot),Jp=s(Ot,"P",{});var zx=r(Jp);fy=i(zx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zx.forEach(t),uy=h(Ot),ki=s(Ot,"P",{});var Ku=r(ki);gy=i(Ku,"This model inherits from "),Ud=s(Ku,"A",{href:!0});var qx=r(Ud);_y=i(qx,"TFPreTrainedModel"),qx.forEach(t),by=i(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(t),ky=h(Ot),vi=s(Ot,"P",{});var Ju=r(vi);vy=i(Ju,"This model is also a "),Ti=s(Ju,"A",{href:!0,rel:!0});var Px=r(Ti);Ty=i(Px,"tf.keras.Model"),Px.forEach(t),yy=i(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),wy=h(Ot),y(xs.$$.fragment,Ot),$y=h(Ot),lt=s(Ot,"DIV",{class:!0});var go=r(lt);y(yi.$$.fragment,go),Ay=h(go),Zo=s(go,"P",{});var _c=r(Zo);Fy=i(_c,"The "),Rd=s(_c,"A",{href:!0});var jx=r(Rd);xy=i(jx,"TFAlbertForTokenClassification"),jx.forEach(t),Ey=i(_c," forward method, overrides the "),Gp=s(_c,"CODE",{});var Cx=r(Gp);My=i(Cx,"__call__"),Cx.forEach(t),zy=i(_c," special method."),_c.forEach(t),qy=h(go),y(Es.$$.fragment,go),Py=h(go),y(Ms.$$.fragment,go),jy=h(go),y(zs.$$.fragment,go),go.forEach(t),Ot.forEach(t),Of=h(o),en=s(o,"H2",{class:!0});var Gu=r(en);qs=s(Gu,"A",{id:!0,class:!0,href:!0});var Ix=r(qs);Xp=s(Ix,"SPAN",{});var Lx=r(Xp);y(wi.$$.fragment,Lx),Lx.forEach(t),Ix.forEach(t),Cy=h(Gu),Yp=s(Gu,"SPAN",{});var Nx=r(Yp);Iy=i(Nx,"TFAlbertForQuestionAnswering"),Nx.forEach(t),Gu.forEach(t),Wf=h(o),Ke=s(o,"DIV",{class:!0});var Wt=r(Ke);y($i.$$.fragment,Wt),Ly=h(Wt),tn=s(Wt,"P",{});var bc=r(tn);Ny=i(bc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=s(bc,"CODE",{});var Sx=r(Zp);Sy=i(Sx,"span start logits"),Sx.forEach(t),Dy=i(bc," and "),eh=s(bc,"CODE",{});var Dx=r(eh);Oy=i(Dx,"span end logits"),Dx.forEach(t),Wy=i(bc,")."),bc.forEach(t),Uy=h(Wt),Ai=s(Wt,"P",{});var Xu=r(Ai);Ry=i(Xu,"This model inherits from "),Bd=s(Xu,"A",{href:!0});var Ox=r(Bd);By=i(Ox,"TFPreTrainedModel"),Ox.forEach(t),Hy=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Qy=h(Wt),Fi=s(Wt,"P",{});var Yu=r(Fi);Vy=i(Yu,"This model is also a "),xi=s(Yu,"A",{href:!0,rel:!0});var Wx=r(xi);Ky=i(Wx,"tf.keras.Model"),Wx.forEach(t),Jy=i(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),Gy=h(Wt),y(Ps.$$.fragment,Wt),Xy=h(Wt),dt=s(Wt,"DIV",{class:!0});var _o=r(dt);y(Ei.$$.fragment,_o),Yy=h(_o),on=s(_o,"P",{});var kc=r(on);Zy=i(kc,"The "),Hd=s(kc,"A",{href:!0});var Ux=r(Hd);ew=i(Ux,"TFAlbertForQuestionAnswering"),Ux.forEach(t),tw=i(kc," forward method, overrides the "),th=s(kc,"CODE",{});var Rx=r(th);ow=i(Rx,"__call__"),Rx.forEach(t),nw=i(kc," special method."),kc.forEach(t),sw=h(_o),y(js.$$.fragment,_o),rw=h(_o),y(Cs.$$.fragment,_o),aw=h(_o),y(Is.$$.fragment,_o),_o.forEach(t),Wt.forEach(t),Uf=h(o),nn=s(o,"H2",{class:!0});var Zu=r(nn);Ls=s(Zu,"A",{id:!0,class:!0,href:!0});var Bx=r(Ls);oh=s(Bx,"SPAN",{});var Hx=r(oh);y(Mi.$$.fragment,Hx),Hx.forEach(t),Bx.forEach(t),iw=h(Zu),nh=s(Zu,"SPAN",{});var Qx=r(nh);lw=i(Qx,"FlaxAlbertModel"),Qx.forEach(t),Zu.forEach(t),Rf=h(o),Ce=s(o,"DIV",{class:!0});var pt=r(Ce);y(zi.$$.fragment,pt),dw=h(pt),sh=s(pt,"P",{});var Vx=r(sh);cw=i(Vx,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Vx.forEach(t),pw=h(pt),qi=s(pt,"P",{});var eg=r(qi);hw=i(eg,"This model inherits from "),Qd=s(eg,"A",{href:!0});var Kx=r(Qd);mw=i(Kx,"FlaxPreTrainedModel"),Kx.forEach(t),fw=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),uw=h(pt),Pi=s(pt,"P",{});var tg=r(Pi);gw=i(tg,"This model is also a Flax Linen "),ji=s(tg,"A",{href:!0,rel:!0});var Jx=r(ji);_w=i(Jx,"flax.linen.Module"),Jx.forEach(t),bw=i(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),kw=h(pt),rh=s(pt,"P",{});var Gx=r(rh);vw=i(Gx,"Finally, this model supports inherent JAX features such as:"),Gx.forEach(t),Tw=h(pt),Bt=s(pt,"UL",{});var hr=r(Bt);ah=s(hr,"LI",{});var Xx=r(ah);Ci=s(Xx,"A",{href:!0,rel:!0});var Yx=r(Ci);yw=i(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Xx.forEach(t),ww=h(hr),ih=s(hr,"LI",{});var Zx=r(ih);Ii=s(Zx,"A",{href:!0,rel:!0});var eE=r(Ii);$w=i(eE,"Automatic Differentiation"),eE.forEach(t),Zx.forEach(t),Aw=h(hr),lh=s(hr,"LI",{});var tE=r(lh);Li=s(tE,"A",{href:!0,rel:!0});var oE=r(Li);Fw=i(oE,"Vectorization"),oE.forEach(t),tE.forEach(t),xw=h(hr),dh=s(hr,"LI",{});var nE=r(dh);Ni=s(nE,"A",{href:!0,rel:!0});var sE=r(Ni);Ew=i(sE,"Parallelization"),sE.forEach(t),nE.forEach(t),hr.forEach(t),Mw=h(pt),Et=s(pt,"DIV",{class:!0});var mr=r(Et);y(Si.$$.fragment,mr),zw=h(mr),sn=s(mr,"P",{});var vc=r(sn);qw=i(vc,"The "),ch=s(vc,"CODE",{});var rE=r(ch);Pw=i(rE,"FlaxAlbertPreTrainedModel"),rE.forEach(t),jw=i(vc," forward method, overrides the "),ph=s(vc,"CODE",{});var aE=r(ph);Cw=i(aE,"__call__"),aE.forEach(t),Iw=i(vc," special method."),vc.forEach(t),Lw=h(mr),y(Ns.$$.fragment,mr),Nw=h(mr),y(Ss.$$.fragment,mr),mr.forEach(t),pt.forEach(t),Bf=h(o),rn=s(o,"H2",{class:!0});var og=r(rn);Ds=s(og,"A",{id:!0,class:!0,href:!0});var iE=r(Ds);hh=s(iE,"SPAN",{});var lE=r(hh);y(Di.$$.fragment,lE),lE.forEach(t),iE.forEach(t),Sw=h(og),mh=s(og,"SPAN",{});var dE=r(mh);Dw=i(dE,"FlaxAlbertForPreTraining"),dE.forEach(t),og.forEach(t),Hf=h(o),Ie=s(o,"DIV",{class:!0});var ht=r(Ie);y(Oi.$$.fragment,ht),Ow=h(ht),an=s(ht,"P",{});var Tc=r(an);Ww=i(Tc,"Albert Model with two heads on top as done during the pretraining: a "),fh=s(Tc,"CODE",{});var cE=r(fh);Uw=i(cE,"masked language modeling"),cE.forEach(t),Rw=i(Tc,` head and a
`),uh=s(Tc,"CODE",{});var pE=r(uh);Bw=i(pE,"sentence order prediction (classification)"),pE.forEach(t),Hw=i(Tc," head."),Tc.forEach(t),Qw=h(ht),Wi=s(ht,"P",{});var ng=r(Wi);Vw=i(ng,"This model inherits from "),Vd=s(ng,"A",{href:!0});var hE=r(Vd);Kw=i(hE,"FlaxPreTrainedModel"),hE.forEach(t),Jw=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),Gw=h(ht),Ui=s(ht,"P",{});var sg=r(Ui);Xw=i(sg,"This model is also a Flax Linen "),Ri=s(sg,"A",{href:!0,rel:!0});var mE=r(Ri);Yw=i(mE,"flax.linen.Module"),mE.forEach(t),Zw=i(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),e$=h(ht),gh=s(ht,"P",{});var fE=r(gh);t$=i(fE,"Finally, this model supports inherent JAX features such as:"),fE.forEach(t),o$=h(ht),Ht=s(ht,"UL",{});var fr=r(Ht);_h=s(fr,"LI",{});var uE=r(_h);Bi=s(uE,"A",{href:!0,rel:!0});var gE=r(Bi);n$=i(gE,"Just-In-Time (JIT) compilation"),gE.forEach(t),uE.forEach(t),s$=h(fr),bh=s(fr,"LI",{});var _E=r(bh);Hi=s(_E,"A",{href:!0,rel:!0});var bE=r(Hi);r$=i(bE,"Automatic Differentiation"),bE.forEach(t),_E.forEach(t),a$=h(fr),kh=s(fr,"LI",{});var kE=r(kh);Qi=s(kE,"A",{href:!0,rel:!0});var vE=r(Qi);i$=i(vE,"Vectorization"),vE.forEach(t),kE.forEach(t),l$=h(fr),vh=s(fr,"LI",{});var TE=r(vh);Vi=s(TE,"A",{href:!0,rel:!0});var yE=r(Vi);d$=i(yE,"Parallelization"),yE.forEach(t),TE.forEach(t),fr.forEach(t),c$=h(ht),Mt=s(ht,"DIV",{class:!0});var ur=r(Mt);y(Ki.$$.fragment,ur),p$=h(ur),ln=s(ur,"P",{});var yc=r(ln);h$=i(yc,"The "),Th=s(yc,"CODE",{});var wE=r(Th);m$=i(wE,"FlaxAlbertPreTrainedModel"),wE.forEach(t),f$=i(yc," forward method, overrides the "),yh=s(yc,"CODE",{});var $E=r(yh);u$=i($E,"__call__"),$E.forEach(t),g$=i(yc," special method."),yc.forEach(t),_$=h(ur),y(Os.$$.fragment,ur),b$=h(ur),y(Ws.$$.fragment,ur),ur.forEach(t),ht.forEach(t),Qf=h(o),dn=s(o,"H2",{class:!0});var rg=r(dn);Us=s(rg,"A",{id:!0,class:!0,href:!0});var AE=r(Us);wh=s(AE,"SPAN",{});var FE=r(wh);y(Ji.$$.fragment,FE),FE.forEach(t),AE.forEach(t),k$=h(rg),$h=s(rg,"SPAN",{});var xE=r($h);v$=i(xE,"FlaxAlbertForMaskedLM"),xE.forEach(t),rg.forEach(t),Vf=h(o),Le=s(o,"DIV",{class:!0});var mt=r(Le);y(Gi.$$.fragment,mt),T$=h(mt),Xi=s(mt,"P",{});var ag=r(Xi);y$=i(ag,"Albert Model with a "),Ah=s(ag,"CODE",{});var EE=r(Ah);w$=i(EE,"language modeling"),EE.forEach(t),$$=i(ag," head on top."),ag.forEach(t),A$=h(mt),Yi=s(mt,"P",{});var ig=r(Yi);F$=i(ig,"This model inherits from "),Kd=s(ig,"A",{href:!0});var ME=r(Kd);x$=i(ME,"FlaxPreTrainedModel"),ME.forEach(t),E$=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),M$=h(mt),Zi=s(mt,"P",{});var lg=r(Zi);z$=i(lg,"This model is also a Flax Linen "),el=s(lg,"A",{href:!0,rel:!0});var zE=r(el);q$=i(zE,"flax.linen.Module"),zE.forEach(t),P$=i(lg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lg.forEach(t),j$=h(mt),Fh=s(mt,"P",{});var qE=r(Fh);C$=i(qE,"Finally, this model supports inherent JAX features such as:"),qE.forEach(t),I$=h(mt),Qt=s(mt,"UL",{});var gr=r(Qt);xh=s(gr,"LI",{});var PE=r(xh);tl=s(PE,"A",{href:!0,rel:!0});var jE=r(tl);L$=i(jE,"Just-In-Time (JIT) compilation"),jE.forEach(t),PE.forEach(t),N$=h(gr),Eh=s(gr,"LI",{});var CE=r(Eh);ol=s(CE,"A",{href:!0,rel:!0});var IE=r(ol);S$=i(IE,"Automatic Differentiation"),IE.forEach(t),CE.forEach(t),D$=h(gr),Mh=s(gr,"LI",{});var LE=r(Mh);nl=s(LE,"A",{href:!0,rel:!0});var NE=r(nl);O$=i(NE,"Vectorization"),NE.forEach(t),LE.forEach(t),W$=h(gr),zh=s(gr,"LI",{});var SE=r(zh);sl=s(SE,"A",{href:!0,rel:!0});var DE=r(sl);U$=i(DE,"Parallelization"),DE.forEach(t),SE.forEach(t),gr.forEach(t),R$=h(mt),zt=s(mt,"DIV",{class:!0});var _r=r(zt);y(rl.$$.fragment,_r),B$=h(_r),cn=s(_r,"P",{});var wc=r(cn);H$=i(wc,"The "),qh=s(wc,"CODE",{});var OE=r(qh);Q$=i(OE,"FlaxAlbertPreTrainedModel"),OE.forEach(t),V$=i(wc," forward method, overrides the "),Ph=s(wc,"CODE",{});var WE=r(Ph);K$=i(WE,"__call__"),WE.forEach(t),J$=i(wc," special method."),wc.forEach(t),G$=h(_r),y(Rs.$$.fragment,_r),X$=h(_r),y(Bs.$$.fragment,_r),_r.forEach(t),mt.forEach(t),Kf=h(o),pn=s(o,"H2",{class:!0});var dg=r(pn);Hs=s(dg,"A",{id:!0,class:!0,href:!0});var UE=r(Hs);jh=s(UE,"SPAN",{});var RE=r(jh);y(al.$$.fragment,RE),RE.forEach(t),UE.forEach(t),Y$=h(dg),Ch=s(dg,"SPAN",{});var BE=r(Ch);Z$=i(BE,"FlaxAlbertForSequenceClassification"),BE.forEach(t),dg.forEach(t),Jf=h(o),Ne=s(o,"DIV",{class:!0});var ft=r(Ne);y(il.$$.fragment,ft),e2=h(ft),Ih=s(ft,"P",{});var HE=r(Ih);t2=i(HE,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),HE.forEach(t),o2=h(ft),ll=s(ft,"P",{});var cg=r(ll);n2=i(cg,"This model inherits from "),Jd=s(cg,"A",{href:!0});var QE=r(Jd);s2=i(QE,"FlaxPreTrainedModel"),QE.forEach(t),r2=i(cg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cg.forEach(t),a2=h(ft),dl=s(ft,"P",{});var pg=r(dl);i2=i(pg,"This model is also a Flax Linen "),cl=s(pg,"A",{href:!0,rel:!0});var VE=r(cl);l2=i(VE,"flax.linen.Module"),VE.forEach(t),d2=i(pg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pg.forEach(t),c2=h(ft),Lh=s(ft,"P",{});var KE=r(Lh);p2=i(KE,"Finally, this model supports inherent JAX features such as:"),KE.forEach(t),h2=h(ft),Vt=s(ft,"UL",{});var br=r(Vt);Nh=s(br,"LI",{});var JE=r(Nh);pl=s(JE,"A",{href:!0,rel:!0});var GE=r(pl);m2=i(GE,"Just-In-Time (JIT) compilation"),GE.forEach(t),JE.forEach(t),f2=h(br),Sh=s(br,"LI",{});var XE=r(Sh);hl=s(XE,"A",{href:!0,rel:!0});var YE=r(hl);u2=i(YE,"Automatic Differentiation"),YE.forEach(t),XE.forEach(t),g2=h(br),Dh=s(br,"LI",{});var ZE=r(Dh);ml=s(ZE,"A",{href:!0,rel:!0});var e9=r(ml);_2=i(e9,"Vectorization"),e9.forEach(t),ZE.forEach(t),b2=h(br),Oh=s(br,"LI",{});var t9=r(Oh);fl=s(t9,"A",{href:!0,rel:!0});var o9=r(fl);k2=i(o9,"Parallelization"),o9.forEach(t),t9.forEach(t),br.forEach(t),v2=h(ft),qt=s(ft,"DIV",{class:!0});var kr=r(qt);y(ul.$$.fragment,kr),T2=h(kr),hn=s(kr,"P",{});var $c=r(hn);y2=i($c,"The "),Wh=s($c,"CODE",{});var n9=r(Wh);w2=i(n9,"FlaxAlbertPreTrainedModel"),n9.forEach(t),$2=i($c," forward method, overrides the "),Uh=s($c,"CODE",{});var s9=r(Uh);A2=i(s9,"__call__"),s9.forEach(t),F2=i($c," special method."),$c.forEach(t),x2=h(kr),y(Qs.$$.fragment,kr),E2=h(kr),y(Vs.$$.fragment,kr),kr.forEach(t),ft.forEach(t),Gf=h(o),mn=s(o,"H2",{class:!0});var hg=r(mn);Ks=s(hg,"A",{id:!0,class:!0,href:!0});var r9=r(Ks);Rh=s(r9,"SPAN",{});var a9=r(Rh);y(gl.$$.fragment,a9),a9.forEach(t),r9.forEach(t),M2=h(hg),Bh=s(hg,"SPAN",{});var i9=r(Bh);z2=i(i9,"FlaxAlbertForMultipleChoice"),i9.forEach(t),hg.forEach(t),Xf=h(o),Se=s(o,"DIV",{class:!0});var ut=r(Se);y(_l.$$.fragment,ut),q2=h(ut),Hh=s(ut,"P",{});var l9=r(Hh);P2=i(l9,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),l9.forEach(t),j2=h(ut),bl=s(ut,"P",{});var mg=r(bl);C2=i(mg,"This model inherits from "),Gd=s(mg,"A",{href:!0});var d9=r(Gd);I2=i(d9,"FlaxPreTrainedModel"),d9.forEach(t),L2=i(mg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mg.forEach(t),N2=h(ut),kl=s(ut,"P",{});var fg=r(kl);S2=i(fg,"This model is also a Flax Linen "),vl=s(fg,"A",{href:!0,rel:!0});var c9=r(vl);D2=i(c9,"flax.linen.Module"),c9.forEach(t),O2=i(fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fg.forEach(t),W2=h(ut),Qh=s(ut,"P",{});var p9=r(Qh);U2=i(p9,"Finally, this model supports inherent JAX features such as:"),p9.forEach(t),R2=h(ut),Kt=s(ut,"UL",{});var vr=r(Kt);Vh=s(vr,"LI",{});var h9=r(Vh);Tl=s(h9,"A",{href:!0,rel:!0});var m9=r(Tl);B2=i(m9,"Just-In-Time (JIT) compilation"),m9.forEach(t),h9.forEach(t),H2=h(vr),Kh=s(vr,"LI",{});var f9=r(Kh);yl=s(f9,"A",{href:!0,rel:!0});var u9=r(yl);Q2=i(u9,"Automatic Differentiation"),u9.forEach(t),f9.forEach(t),V2=h(vr),Jh=s(vr,"LI",{});var g9=r(Jh);wl=s(g9,"A",{href:!0,rel:!0});var _9=r(wl);K2=i(_9,"Vectorization"),_9.forEach(t),g9.forEach(t),J2=h(vr),Gh=s(vr,"LI",{});var b9=r(Gh);$l=s(b9,"A",{href:!0,rel:!0});var k9=r($l);G2=i(k9,"Parallelization"),k9.forEach(t),b9.forEach(t),vr.forEach(t),X2=h(ut),Pt=s(ut,"DIV",{class:!0});var Tr=r(Pt);y(Al.$$.fragment,Tr),Y2=h(Tr),fn=s(Tr,"P",{});var Ac=r(fn);Z2=i(Ac,"The "),Xh=s(Ac,"CODE",{});var v9=r(Xh);eA=i(v9,"FlaxAlbertPreTrainedModel"),v9.forEach(t),tA=i(Ac," forward method, overrides the "),Yh=s(Ac,"CODE",{});var T9=r(Yh);oA=i(T9,"__call__"),T9.forEach(t),nA=i(Ac," special method."),Ac.forEach(t),sA=h(Tr),y(Js.$$.fragment,Tr),rA=h(Tr),y(Gs.$$.fragment,Tr),Tr.forEach(t),ut.forEach(t),Yf=h(o),un=s(o,"H2",{class:!0});var ug=r(un);Xs=s(ug,"A",{id:!0,class:!0,href:!0});var y9=r(Xs);Zh=s(y9,"SPAN",{});var w9=r(Zh);y(Fl.$$.fragment,w9),w9.forEach(t),y9.forEach(t),aA=h(ug),em=s(ug,"SPAN",{});var $9=r(em);iA=i($9,"FlaxAlbertForTokenClassification"),$9.forEach(t),ug.forEach(t),Zf=h(o),De=s(o,"DIV",{class:!0});var gt=r(De);y(xl.$$.fragment,gt),lA=h(gt),tm=s(gt,"P",{});var A9=r(tm);dA=i(A9,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A9.forEach(t),cA=h(gt),El=s(gt,"P",{});var gg=r(El);pA=i(gg,"This model inherits from "),Xd=s(gg,"A",{href:!0});var F9=r(Xd);hA=i(F9,"FlaxPreTrainedModel"),F9.forEach(t),mA=i(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),fA=h(gt),Ml=s(gt,"P",{});var _g=r(Ml);uA=i(_g,"This model is also a Flax Linen "),zl=s(_g,"A",{href:!0,rel:!0});var x9=r(zl);gA=i(x9,"flax.linen.Module"),x9.forEach(t),_A=i(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),bA=h(gt),om=s(gt,"P",{});var E9=r(om);kA=i(E9,"Finally, this model supports inherent JAX features such as:"),E9.forEach(t),vA=h(gt),Jt=s(gt,"UL",{});var yr=r(Jt);nm=s(yr,"LI",{});var M9=r(nm);ql=s(M9,"A",{href:!0,rel:!0});var z9=r(ql);TA=i(z9,"Just-In-Time (JIT) compilation"),z9.forEach(t),M9.forEach(t),yA=h(yr),sm=s(yr,"LI",{});var q9=r(sm);Pl=s(q9,"A",{href:!0,rel:!0});var P9=r(Pl);wA=i(P9,"Automatic Differentiation"),P9.forEach(t),q9.forEach(t),$A=h(yr),rm=s(yr,"LI",{});var j9=r(rm);jl=s(j9,"A",{href:!0,rel:!0});var C9=r(jl);AA=i(C9,"Vectorization"),C9.forEach(t),j9.forEach(t),FA=h(yr),am=s(yr,"LI",{});var I9=r(am);Cl=s(I9,"A",{href:!0,rel:!0});var L9=r(Cl);xA=i(L9,"Parallelization"),L9.forEach(t),I9.forEach(t),yr.forEach(t),EA=h(gt),jt=s(gt,"DIV",{class:!0});var wr=r(jt);y(Il.$$.fragment,wr),MA=h(wr),gn=s(wr,"P",{});var Fc=r(gn);zA=i(Fc,"The "),im=s(Fc,"CODE",{});var N9=r(im);qA=i(N9,"FlaxAlbertPreTrainedModel"),N9.forEach(t),PA=i(Fc," forward method, overrides the "),lm=s(Fc,"CODE",{});var S9=r(lm);jA=i(S9,"__call__"),S9.forEach(t),CA=i(Fc," special method."),Fc.forEach(t),IA=h(wr),y(Ys.$$.fragment,wr),LA=h(wr),y(Zs.$$.fragment,wr),wr.forEach(t),gt.forEach(t),eu=h(o),_n=s(o,"H2",{class:!0});var bg=r(_n);er=s(bg,"A",{id:!0,class:!0,href:!0});var D9=r(er);dm=s(D9,"SPAN",{});var O9=r(dm);y(Ll.$$.fragment,O9),O9.forEach(t),D9.forEach(t),NA=h(bg),cm=s(bg,"SPAN",{});var W9=r(cm);SA=i(W9,"FlaxAlbertForQuestionAnswering"),W9.forEach(t),bg.forEach(t),tu=h(o),Oe=s(o,"DIV",{class:!0});var _t=r(Oe);y(Nl.$$.fragment,_t),DA=h(_t),bn=s(_t,"P",{});var xc=r(bn);OA=i(xc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=s(xc,"CODE",{});var U9=r(pm);WA=i(U9,"span start logits"),U9.forEach(t),UA=i(xc," and "),hm=s(xc,"CODE",{});var R9=r(hm);RA=i(R9,"span end logits"),R9.forEach(t),BA=i(xc,")."),xc.forEach(t),HA=h(_t),Sl=s(_t,"P",{});var kg=r(Sl);QA=i(kg,"This model inherits from "),Yd=s(kg,"A",{href:!0});var B9=r(Yd);VA=i(B9,"FlaxPreTrainedModel"),B9.forEach(t),KA=i(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kg.forEach(t),JA=h(_t),Dl=s(_t,"P",{});var vg=r(Dl);GA=i(vg,"This model is also a Flax Linen "),Ol=s(vg,"A",{href:!0,rel:!0});var H9=r(Ol);XA=i(H9,"flax.linen.Module"),H9.forEach(t),YA=i(vg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vg.forEach(t),ZA=h(_t),mm=s(_t,"P",{});var Q9=r(mm);eF=i(Q9,"Finally, this model supports inherent JAX features such as:"),Q9.forEach(t),tF=h(_t),Gt=s(_t,"UL",{});var $r=r(Gt);fm=s($r,"LI",{});var V9=r(fm);Wl=s(V9,"A",{href:!0,rel:!0});var K9=r(Wl);oF=i(K9,"Just-In-Time (JIT) compilation"),K9.forEach(t),V9.forEach(t),nF=h($r),um=s($r,"LI",{});var J9=r(um);Ul=s(J9,"A",{href:!0,rel:!0});var G9=r(Ul);sF=i(G9,"Automatic Differentiation"),G9.forEach(t),J9.forEach(t),rF=h($r),gm=s($r,"LI",{});var X9=r(gm);Rl=s(X9,"A",{href:!0,rel:!0});var Y9=r(Rl);aF=i(Y9,"Vectorization"),Y9.forEach(t),X9.forEach(t),iF=h($r),_m=s($r,"LI",{});var Z9=r(_m);Bl=s(Z9,"A",{href:!0,rel:!0});var eM=r(Bl);lF=i(eM,"Parallelization"),eM.forEach(t),Z9.forEach(t),$r.forEach(t),dF=h(_t),Ct=s(_t,"DIV",{class:!0});var Ar=r(Ct);y(Hl.$$.fragment,Ar),cF=h(Ar),kn=s(Ar,"P",{});var Ec=r(kn);pF=i(Ec,"The "),bm=s(Ec,"CODE",{});var tM=r(bm);hF=i(tM,"FlaxAlbertPreTrainedModel"),tM.forEach(t),mF=i(Ec," forward method, overrides the "),km=s(Ec,"CODE",{});var oM=r(km);fF=i(oM,"__call__"),oM.forEach(t),uF=i(Ec," special method."),Ec.forEach(t),gF=h(Ar),y(tr.$$.fragment,Ar),_F=h(Ar),y(or.$$.fragment,Ar),Ar.forEach(t),_t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_4)),u(m,"id","albert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#albert"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(z,"class","relative group"),u(te,"href","https://arxiv.org/abs/1909.11942"),u(te,"rel","nofollow"),u(ye,"href","https://huggingface.co/lysandre"),u(ye,"rel","nofollow"),u(O,"href","https://huggingface.co/kamalkraj"),u(O,"rel","nofollow"),u(W,"href","https://github.com/google-research/ALBERT"),u(W,"rel","nofollow"),u(wn,"id","transformers.AlbertConfig"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.AlbertConfig"),u(Te,"class","relative group"),u(rd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertModel"),u(ad,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertModel"),u(Er,"href","https://huggingface.co/albert-xxlarge-v2"),u(Er,"rel","nofollow"),u(id,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(ld,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.AlbertTokenizer"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.AlbertTokenizer"),u(ko,"class","relative group"),u(Pr,"href","https://github.com/google/sentencepiece"),u(Pr,"rel","nofollow"),u(dd,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.AlbertTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.AlbertTokenizerFast"),u(To,"class","relative group"),u(Ur,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(Ur,"rel","nofollow"),u(md,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(yo,"class","relative group"),u(gd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_d,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.AlbertModel"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.AlbertModel"),u(Ao,"class","relative group"),u(bd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ta,"rel","nofollow"),u(kd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.AlbertForPreTraining"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.AlbertForPreTraining"),u(xo,"class","relative group"),u(vd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ia,"rel","nofollow"),u(Td,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.AlbertForMaskedLM"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.AlbertForMaskedLM"),u(zo,"class","relative group"),u(yd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fa,"rel","nofollow"),u(wd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.AlbertForSequenceClassification"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.AlbertForSequenceClassification"),u(Po,"class","relative group"),u($d,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(va,"rel","nofollow"),u(Ad,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertForMultipleChoice"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertForMultipleChoice"),u(Co,"class","relative group"),u(Fd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fa,"rel","nofollow"),u(xd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.AlbertForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.AlbertForTokenClassification"),u(Lo,"class","relative group"),u(Ed,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Pa,"rel","nofollow"),u(Md,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForTokenClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForQuestionAnswering"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForQuestionAnswering"),u(So,"class","relative group"),u(zd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sa,"rel","nofollow"),u(qd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFAlbertModel"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFAlbertModel"),u(Wo,"class","relative group"),u(Pd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ba,"rel","nofollow"),u(jd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertModel"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFAlbertForPreTraining"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFAlbertForPreTraining"),u(Ro,"class","relative group"),u(Cd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ga,"rel","nofollow"),u(Id,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.TFAlbertForMaskedLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.TFAlbertForMaskedLM"),u(Qo,"class","relative group"),u(Ld,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(ni,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ni,"rel","nofollow"),u(Nd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.TFAlbertForSequenceClassification"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.TFAlbertForSequenceClassification"),u(Ko,"class","relative group"),u(Sd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(di,"rel","nofollow"),u(Dd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFAlbertForMultipleChoice"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFAlbertForMultipleChoice"),u(Go,"class","relative group"),u(Od,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ui,"rel","nofollow"),u(Wd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.TFAlbertForTokenClassification"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.TFAlbertForTokenClassification"),u(Yo,"class","relative group"),u(Ud,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ti,"rel","nofollow"),u(Rd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFAlbertForQuestionAnswering"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFAlbertForQuestionAnswering"),u(en,"class","relative group"),u(Bd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(xi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xi,"rel","nofollow"),u(Hd,"href","/docs/transformers/pr_16919/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.FlaxAlbertModel"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.FlaxAlbertModel"),u(nn,"class","relative group"),u(Qd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ji,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ji,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ci,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ii,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Li,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ni,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.FlaxAlbertForPreTraining"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.FlaxAlbertForPreTraining"),u(rn,"class","relative group"),u(Vd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ri,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ri,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxAlbertForMaskedLM"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxAlbertForMaskedLM"),u(dn,"class","relative group"),u(Kd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(el,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sl,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxAlbertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxAlbertForSequenceClassification"),u(pn,"class","relative group"),u(Jd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(fl,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxAlbertForMultipleChoice"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxAlbertForMultipleChoice"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vl,"rel","nofollow"),u(Tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Tl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yl,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxAlbertForTokenClassification"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxAlbertForTokenClassification"),u(un,"class","relative group"),u(Xd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(zl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(zl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ql,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Pl,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(jl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Cl,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.FlaxAlbertForQuestionAnswering"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(_n,"class","relative group"),u(Yd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ol,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ol,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wl,"rel","nofollow"),u(Ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ul,"rel","nofollow"),u(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Rl,"rel","nofollow"),u(Bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Bl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,m),e(m,k),w(l,k,null),e(c,f),e(c,E),e(E,fe),_(o,G,b),_(o,z,b),e(z,Y),e(Y,U),w(ee,U,null),e(z,ue),e(z,R),e(R,ge),_(o,de,b),_(o,K,b),e(K,L),e(K,te),e(te,X),e(K,q),_(o,j,b),_(o,Z,b),e(Z,B),e(B,_e),e(Z,be),e(Z,H),e(H,ke),_(o,ce,b),_(o,P,b),e(P,ve),_(o,Q,b),_(o,oe,b),e(oe,ie),e(ie,V),_(o,pe,b),_(o,ne,b),e(ne,N),_(o,he,b),_(o,D,b),e(D,le),e(le,v),e(D,M),e(D,J),e(J,Fe),_(o,Ae,b),_(o,C,b),e(C,xe),e(C,ye),e(ye,Ee),e(C,S),e(C,O),e(O,Me),e(C,ze),e(C,W),e(W,qe),e(C,Pe),_(o,me,b),_(o,Te,b),e(Te,wn),e(wn,Mc),w(Fr,Mc,null),e(Te,Tg),e(Te,zc),e(zc,yg),_(o,rf,b),_(o,bt,b),w(xr,bt,null),e(bt,wg),e(bt,Ut),e(Ut,$g),e(Ut,rd),e(rd,Ag),e(Ut,Fg),e(Ut,ad),e(ad,xg),e(Ut,Eg),e(Ut,Er),e(Er,Mg),e(Ut,zg),e(bt,qg),e(bt,bo),e(bo,Pg),e(bo,id),e(id,jg),e(bo,Cg),e(bo,ld),e(ld,Ig),e(bo,Lg),e(bt,Ng),w($n,bt,null),_(o,af,b),_(o,ko,b),e(ko,An),e(An,qc),w(Mr,qc,null),e(ko,Sg),e(ko,Pc),e(Pc,Dg),_(o,lf,b),_(o,je,b),w(zr,je,null),e(je,Og),e(je,qr),e(qr,Wg),e(qr,Pr),e(Pr,Ug),e(qr,Rg),e(je,Bg),e(je,jr),e(jr,Hg),e(jr,dd),e(dd,Qg),e(jr,Vg),e(je,Kg),e(je,to),w(Cr,to,null),e(to,Jg),e(to,jc),e(jc,Gg),e(to,Xg),e(to,Ir),e(Ir,cd),e(cd,Yg),e(cd,Cc),e(Cc,Zg),e(Ir,e_),e(Ir,pd),e(pd,t_),e(pd,Ic),e(Ic,o_),e(je,n_),e(je,Fn),w(Lr,Fn,null),e(Fn,s_),e(Fn,Nr),e(Nr,r_),e(Nr,Lc),e(Lc,a_),e(Nr,i_),e(je,l_),e(je,vt),w(Sr,vt,null),e(vt,d_),e(vt,Nc),e(Nc,c_),e(vt,p_),w(xn,vt,null),e(vt,h_),e(vt,vo),e(vo,m_),e(vo,Sc),e(Sc,f_),e(vo,u_),e(vo,Dc),e(Dc,g_),e(vo,__),e(je,b_),e(je,hd),w(Dr,hd,null),_(o,df,b),_(o,To,b),e(To,En),e(En,Oc),w(Or,Oc,null),e(To,k_),e(To,Wc),e(Wc,v_),_(o,cf,b),_(o,kt,b),w(Wr,kt,null),e(kt,T_),e(kt,Rt),e(Rt,y_),e(Rt,Uc),e(Uc,w_),e(Rt,$_),e(Rt,Ur),e(Ur,A_),e(Rt,F_),e(Rt,md),e(md,x_),e(Rt,E_),e(kt,M_),e(kt,oo),w(Rr,oo,null),e(oo,z_),e(oo,Rc),e(Rc,q_),e(oo,P_),e(oo,Br),e(Br,fd),e(fd,j_),e(fd,Bc),e(Bc,C_),e(Br,I_),e(Br,ud),e(ud,L_),e(ud,Hc),e(Hc,N_),e(kt,S_),e(kt,Tt),w(Hr,Tt,null),e(Tt,D_),e(Tt,Qc),e(Qc,O_),e(Tt,W_),w(Mn,Tt,null),e(Tt,U_),e(Tt,Vc),e(Vc,R_),_(o,pf,b),_(o,yo,b),e(yo,zn),e(zn,Kc),w(Qr,Kc,null),e(yo,B_),e(yo,Jc),e(Jc,H_),_(o,hf,b),_(o,wo,b),w(Vr,wo,null),e(wo,Q_),e(wo,Kr),e(Kr,V_),e(Kr,gd),e(gd,K_),e(Kr,J_),_(o,mf,b),_(o,$o,b),w(Jr,$o,null),e($o,G_),e($o,Gr),e(Gr,X_),e(Gr,_d),e(_d,Y_),e(Gr,Z_),_(o,ff,b),_(o,Ao,b),e(Ao,qn),e(qn,Gc),w(Xr,Gc,null),e(Ao,eb),e(Ao,Xc),e(Xc,tb),_(o,uf,b),_(o,Ge,b),w(Yr,Ge,null),e(Ge,ob),e(Ge,Yc),e(Yc,nb),e(Ge,sb),e(Ge,Zr),e(Zr,rb),e(Zr,bd),e(bd,ab),e(Zr,ib),e(Ge,lb),e(Ge,ea),e(ea,db),e(ea,ta),e(ta,cb),e(ea,pb),e(Ge,hb),e(Ge,yt),w(oa,yt,null),e(yt,mb),e(yt,Fo),e(Fo,fb),e(Fo,kd),e(kd,ub),e(Fo,gb),e(Fo,Zc),e(Zc,_b),e(Fo,bb),e(yt,kb),w(Pn,yt,null),e(yt,vb),w(jn,yt,null),_(o,gf,b),_(o,xo,b),e(xo,Cn),e(Cn,ep),w(na,ep,null),e(xo,Tb),e(xo,tp),e(tp,yb),_(o,_f,b),_(o,Xe,b),w(sa,Xe,null),e(Xe,wb),e(Xe,Eo),e(Eo,$b),e(Eo,op),e(op,Ab),e(Eo,Fb),e(Eo,np),e(np,xb),e(Eo,Eb),e(Xe,Mb),e(Xe,ra),e(ra,zb),e(ra,vd),e(vd,qb),e(ra,Pb),e(Xe,jb),e(Xe,aa),e(aa,Cb),e(aa,ia),e(ia,Ib),e(aa,Lb),e(Xe,Nb),e(Xe,wt),w(la,wt,null),e(wt,Sb),e(wt,Mo),e(Mo,Db),e(Mo,Td),e(Td,Ob),e(Mo,Wb),e(Mo,sp),e(sp,Ub),e(Mo,Rb),e(wt,Bb),w(In,wt,null),e(wt,Hb),w(Ln,wt,null),_(o,bf,b),_(o,zo,b),e(zo,Nn),e(Nn,rp),w(da,rp,null),e(zo,Qb),e(zo,ap),e(ap,Vb),_(o,kf,b),_(o,Ye,b),w(ca,Ye,null),e(Ye,Kb),e(Ye,pa),e(pa,Jb),e(pa,ip),e(ip,Gb),e(pa,Xb),e(Ye,Yb),e(Ye,ha),e(ha,Zb),e(ha,yd),e(yd,ek),e(ha,tk),e(Ye,ok),e(Ye,ma),e(ma,nk),e(ma,fa),e(fa,sk),e(ma,rk),e(Ye,ak),e(Ye,nt),w(ua,nt,null),e(nt,ik),e(nt,qo),e(qo,lk),e(qo,wd),e(wd,dk),e(qo,ck),e(qo,lp),e(lp,pk),e(qo,hk),e(nt,mk),w(Sn,nt,null),e(nt,fk),w(Dn,nt,null),e(nt,uk),w(On,nt,null),_(o,vf,b),_(o,Po,b),e(Po,Wn),e(Wn,dp),w(ga,dp,null),e(Po,gk),e(Po,cp),e(cp,_k),_(o,Tf,b),_(o,Ze,b),w(_a,Ze,null),e(Ze,bk),e(Ze,pp),e(pp,kk),e(Ze,vk),e(Ze,ba),e(ba,Tk),e(ba,$d),e($d,yk),e(ba,wk),e(Ze,$k),e(Ze,ka),e(ka,Ak),e(ka,va),e(va,Fk),e(ka,xk),e(Ze,Ek),e(Ze,We),w(Ta,We,null),e(We,Mk),e(We,jo),e(jo,zk),e(jo,Ad),e(Ad,qk),e(jo,Pk),e(jo,hp),e(hp,jk),e(jo,Ck),e(We,Ik),w(Un,We,null),e(We,Lk),w(Rn,We,null),e(We,Nk),w(Bn,We,null),e(We,Sk),w(Hn,We,null),e(We,Dk),w(Qn,We,null),_(o,yf,b),_(o,Co,b),e(Co,Vn),e(Vn,mp),w(ya,mp,null),e(Co,Ok),e(Co,fp),e(fp,Wk),_(o,wf,b),_(o,et,b),w(wa,et,null),e(et,Uk),e(et,up),e(up,Rk),e(et,Bk),e(et,$a),e($a,Hk),e($a,Fd),e(Fd,Qk),e($a,Vk),e(et,Kk),e(et,Aa),e(Aa,Jk),e(Aa,Fa),e(Fa,Gk),e(Aa,Xk),e(et,Yk),e(et,$t),w(xa,$t,null),e($t,Zk),e($t,Io),e(Io,e1),e(Io,xd),e(xd,t1),e(Io,o1),e(Io,gp),e(gp,n1),e(Io,s1),e($t,r1),w(Kn,$t,null),e($t,a1),w(Jn,$t,null),_(o,$f,b),_(o,Lo,b),e(Lo,Gn),e(Gn,_p),w(Ea,_p,null),e(Lo,i1),e(Lo,bp),e(bp,l1),_(o,Af,b),_(o,tt,b),w(Ma,tt,null),e(tt,d1),e(tt,kp),e(kp,c1),e(tt,p1),e(tt,za),e(za,h1),e(za,Ed),e(Ed,m1),e(za,f1),e(tt,u1),e(tt,qa),e(qa,g1),e(qa,Pa),e(Pa,_1),e(qa,b1),e(tt,k1),e(tt,st),w(ja,st,null),e(st,v1),e(st,No),e(No,T1),e(No,Md),e(Md,y1),e(No,w1),e(No,vp),e(vp,$1),e(No,A1),e(st,F1),w(Xn,st,null),e(st,x1),w(Yn,st,null),e(st,E1),w(Zn,st,null),_(o,Ff,b),_(o,So,b),e(So,es),e(es,Tp),w(Ca,Tp,null),e(So,M1),e(So,yp),e(yp,z1),_(o,xf,b),_(o,ot,b),w(Ia,ot,null),e(ot,q1),e(ot,Do),e(Do,P1),e(Do,wp),e(wp,j1),e(Do,C1),e(Do,$p),e($p,I1),e(Do,L1),e(ot,N1),e(ot,La),e(La,S1),e(La,zd),e(zd,D1),e(La,O1),e(ot,W1),e(ot,Na),e(Na,U1),e(Na,Sa),e(Sa,R1),e(Na,B1),e(ot,H1),e(ot,rt),w(Da,rt,null),e(rt,Q1),e(rt,Oo),e(Oo,V1),e(Oo,qd),e(qd,K1),e(Oo,J1),e(Oo,Ap),e(Ap,G1),e(Oo,X1),e(rt,Y1),w(ts,rt,null),e(rt,Z1),w(os,rt,null),e(rt,ev),w(ns,rt,null),_(o,Ef,b),_(o,Wo,b),e(Wo,ss),e(ss,Fp),w(Oa,Fp,null),e(Wo,tv),e(Wo,xp),e(xp,ov),_(o,Mf,b),_(o,Ue,b),w(Wa,Ue,null),e(Ue,nv),e(Ue,Ep),e(Ep,sv),e(Ue,rv),e(Ue,Ua),e(Ua,av),e(Ua,Pd),e(Pd,iv),e(Ua,lv),e(Ue,dv),e(Ue,Ra),e(Ra,cv),e(Ra,Ba),e(Ba,pv),e(Ra,hv),e(Ue,mv),w(rs,Ue,null),e(Ue,fv),e(Ue,At),w(Ha,At,null),e(At,uv),e(At,Uo),e(Uo,gv),e(Uo,jd),e(jd,_v),e(Uo,bv),e(Uo,Mp),e(Mp,kv),e(Uo,vv),e(At,Tv),w(as,At,null),e(At,yv),w(is,At,null),_(o,zf,b),_(o,Ro,b),e(Ro,ls),e(ls,zp),w(Qa,zp,null),e(Ro,wv),e(Ro,qp),e(qp,$v),_(o,qf,b),_(o,Re,b),w(Va,Re,null),e(Re,Av),e(Re,Bo),e(Bo,Fv),e(Bo,Pp),e(Pp,xv),e(Bo,Ev),e(Bo,jp),e(jp,Mv),e(Bo,zv),e(Re,qv),e(Re,Ka),e(Ka,Pv),e(Ka,Cd),e(Cd,jv),e(Ka,Cv),e(Re,Iv),e(Re,Ja),e(Ja,Lv),e(Ja,Ga),e(Ga,Nv),e(Ja,Sv),e(Re,Dv),w(ds,Re,null),e(Re,Ov),e(Re,Ft),w(Xa,Ft,null),e(Ft,Wv),e(Ft,Ho),e(Ho,Uv),e(Ho,Id),e(Id,Rv),e(Ho,Bv),e(Ho,Cp),e(Cp,Hv),e(Ho,Qv),e(Ft,Vv),w(cs,Ft,null),e(Ft,Kv),w(ps,Ft,null),_(o,Pf,b),_(o,Qo,b),e(Qo,hs),e(hs,Ip),w(Ya,Ip,null),e(Qo,Jv),e(Qo,Lp),e(Lp,Gv),_(o,jf,b),_(o,Be,b),w(Za,Be,null),e(Be,Xv),e(Be,ei),e(ei,Yv),e(ei,Np),e(Np,Zv),e(ei,eT),e(Be,tT),e(Be,ti),e(ti,oT),e(ti,Ld),e(Ld,nT),e(ti,sT),e(Be,rT),e(Be,oi),e(oi,aT),e(oi,ni),e(ni,iT),e(oi,lT),e(Be,dT),w(ms,Be,null),e(Be,cT),e(Be,at),w(si,at,null),e(at,pT),e(at,Vo),e(Vo,hT),e(Vo,Nd),e(Nd,mT),e(Vo,fT),e(Vo,Sp),e(Sp,uT),e(Vo,gT),e(at,_T),w(fs,at,null),e(at,bT),w(us,at,null),e(at,kT),w(gs,at,null),_(o,Cf,b),_(o,Ko,b),e(Ko,_s),e(_s,Dp),w(ri,Dp,null),e(Ko,vT),e(Ko,Op),e(Op,TT),_(o,If,b),_(o,He,b),w(ai,He,null),e(He,yT),e(He,Wp),e(Wp,wT),e(He,$T),e(He,ii),e(ii,AT),e(ii,Sd),e(Sd,FT),e(ii,xT),e(He,ET),e(He,li),e(li,MT),e(li,di),e(di,zT),e(li,qT),e(He,PT),w(bs,He,null),e(He,jT),e(He,it),w(ci,it,null),e(it,CT),e(it,Jo),e(Jo,IT),e(Jo,Dd),e(Dd,LT),e(Jo,NT),e(Jo,Up),e(Up,ST),e(Jo,DT),e(it,OT),w(ks,it,null),e(it,WT),w(vs,it,null),e(it,UT),w(Ts,it,null),_(o,Lf,b),_(o,Go,b),e(Go,ys),e(ys,Rp),w(pi,Rp,null),e(Go,RT),e(Go,Bp),e(Bp,BT),_(o,Nf,b),_(o,Qe,b),w(hi,Qe,null),e(Qe,HT),e(Qe,Hp),e(Hp,QT),e(Qe,VT),e(Qe,mi),e(mi,KT),e(mi,Od),e(Od,JT),e(mi,GT),e(Qe,XT),e(Qe,fi),e(fi,YT),e(fi,ui),e(ui,ZT),e(fi,ey),e(Qe,ty),w(ws,Qe,null),e(Qe,oy),e(Qe,xt),w(gi,xt,null),e(xt,ny),e(xt,Xo),e(Xo,sy),e(Xo,Wd),e(Wd,ry),e(Xo,ay),e(Xo,Qp),e(Qp,iy),e(Xo,ly),e(xt,dy),w($s,xt,null),e(xt,cy),w(As,xt,null),_(o,Sf,b),_(o,Yo,b),e(Yo,Fs),e(Fs,Vp),w(_i,Vp,null),e(Yo,py),e(Yo,Kp),e(Kp,hy),_(o,Df,b),_(o,Ve,b),w(bi,Ve,null),e(Ve,my),e(Ve,Jp),e(Jp,fy),e(Ve,uy),e(Ve,ki),e(ki,gy),e(ki,Ud),e(Ud,_y),e(ki,by),e(Ve,ky),e(Ve,vi),e(vi,vy),e(vi,Ti),e(Ti,Ty),e(vi,yy),e(Ve,wy),w(xs,Ve,null),e(Ve,$y),e(Ve,lt),w(yi,lt,null),e(lt,Ay),e(lt,Zo),e(Zo,Fy),e(Zo,Rd),e(Rd,xy),e(Zo,Ey),e(Zo,Gp),e(Gp,My),e(Zo,zy),e(lt,qy),w(Es,lt,null),e(lt,Py),w(Ms,lt,null),e(lt,jy),w(zs,lt,null),_(o,Of,b),_(o,en,b),e(en,qs),e(qs,Xp),w(wi,Xp,null),e(en,Cy),e(en,Yp),e(Yp,Iy),_(o,Wf,b),_(o,Ke,b),w($i,Ke,null),e(Ke,Ly),e(Ke,tn),e(tn,Ny),e(tn,Zp),e(Zp,Sy),e(tn,Dy),e(tn,eh),e(eh,Oy),e(tn,Wy),e(Ke,Uy),e(Ke,Ai),e(Ai,Ry),e(Ai,Bd),e(Bd,By),e(Ai,Hy),e(Ke,Qy),e(Ke,Fi),e(Fi,Vy),e(Fi,xi),e(xi,Ky),e(Fi,Jy),e(Ke,Gy),w(Ps,Ke,null),e(Ke,Xy),e(Ke,dt),w(Ei,dt,null),e(dt,Yy),e(dt,on),e(on,Zy),e(on,Hd),e(Hd,ew),e(on,tw),e(on,th),e(th,ow),e(on,nw),e(dt,sw),w(js,dt,null),e(dt,rw),w(Cs,dt,null),e(dt,aw),w(Is,dt,null),_(o,Uf,b),_(o,nn,b),e(nn,Ls),e(Ls,oh),w(Mi,oh,null),e(nn,iw),e(nn,nh),e(nh,lw),_(o,Rf,b),_(o,Ce,b),w(zi,Ce,null),e(Ce,dw),e(Ce,sh),e(sh,cw),e(Ce,pw),e(Ce,qi),e(qi,hw),e(qi,Qd),e(Qd,mw),e(qi,fw),e(Ce,uw),e(Ce,Pi),e(Pi,gw),e(Pi,ji),e(ji,_w),e(Pi,bw),e(Ce,kw),e(Ce,rh),e(rh,vw),e(Ce,Tw),e(Ce,Bt),e(Bt,ah),e(ah,Ci),e(Ci,yw),e(Bt,ww),e(Bt,ih),e(ih,Ii),e(Ii,$w),e(Bt,Aw),e(Bt,lh),e(lh,Li),e(Li,Fw),e(Bt,xw),e(Bt,dh),e(dh,Ni),e(Ni,Ew),e(Ce,Mw),e(Ce,Et),w(Si,Et,null),e(Et,zw),e(Et,sn),e(sn,qw),e(sn,ch),e(ch,Pw),e(sn,jw),e(sn,ph),e(ph,Cw),e(sn,Iw),e(Et,Lw),w(Ns,Et,null),e(Et,Nw),w(Ss,Et,null),_(o,Bf,b),_(o,rn,b),e(rn,Ds),e(Ds,hh),w(Di,hh,null),e(rn,Sw),e(rn,mh),e(mh,Dw),_(o,Hf,b),_(o,Ie,b),w(Oi,Ie,null),e(Ie,Ow),e(Ie,an),e(an,Ww),e(an,fh),e(fh,Uw),e(an,Rw),e(an,uh),e(uh,Bw),e(an,Hw),e(Ie,Qw),e(Ie,Wi),e(Wi,Vw),e(Wi,Vd),e(Vd,Kw),e(Wi,Jw),e(Ie,Gw),e(Ie,Ui),e(Ui,Xw),e(Ui,Ri),e(Ri,Yw),e(Ui,Zw),e(Ie,e$),e(Ie,gh),e(gh,t$),e(Ie,o$),e(Ie,Ht),e(Ht,_h),e(_h,Bi),e(Bi,n$),e(Ht,s$),e(Ht,bh),e(bh,Hi),e(Hi,r$),e(Ht,a$),e(Ht,kh),e(kh,Qi),e(Qi,i$),e(Ht,l$),e(Ht,vh),e(vh,Vi),e(Vi,d$),e(Ie,c$),e(Ie,Mt),w(Ki,Mt,null),e(Mt,p$),e(Mt,ln),e(ln,h$),e(ln,Th),e(Th,m$),e(ln,f$),e(ln,yh),e(yh,u$),e(ln,g$),e(Mt,_$),w(Os,Mt,null),e(Mt,b$),w(Ws,Mt,null),_(o,Qf,b),_(o,dn,b),e(dn,Us),e(Us,wh),w(Ji,wh,null),e(dn,k$),e(dn,$h),e($h,v$),_(o,Vf,b),_(o,Le,b),w(Gi,Le,null),e(Le,T$),e(Le,Xi),e(Xi,y$),e(Xi,Ah),e(Ah,w$),e(Xi,$$),e(Le,A$),e(Le,Yi),e(Yi,F$),e(Yi,Kd),e(Kd,x$),e(Yi,E$),e(Le,M$),e(Le,Zi),e(Zi,z$),e(Zi,el),e(el,q$),e(Zi,P$),e(Le,j$),e(Le,Fh),e(Fh,C$),e(Le,I$),e(Le,Qt),e(Qt,xh),e(xh,tl),e(tl,L$),e(Qt,N$),e(Qt,Eh),e(Eh,ol),e(ol,S$),e(Qt,D$),e(Qt,Mh),e(Mh,nl),e(nl,O$),e(Qt,W$),e(Qt,zh),e(zh,sl),e(sl,U$),e(Le,R$),e(Le,zt),w(rl,zt,null),e(zt,B$),e(zt,cn),e(cn,H$),e(cn,qh),e(qh,Q$),e(cn,V$),e(cn,Ph),e(Ph,K$),e(cn,J$),e(zt,G$),w(Rs,zt,null),e(zt,X$),w(Bs,zt,null),_(o,Kf,b),_(o,pn,b),e(pn,Hs),e(Hs,jh),w(al,jh,null),e(pn,Y$),e(pn,Ch),e(Ch,Z$),_(o,Jf,b),_(o,Ne,b),w(il,Ne,null),e(Ne,e2),e(Ne,Ih),e(Ih,t2),e(Ne,o2),e(Ne,ll),e(ll,n2),e(ll,Jd),e(Jd,s2),e(ll,r2),e(Ne,a2),e(Ne,dl),e(dl,i2),e(dl,cl),e(cl,l2),e(dl,d2),e(Ne,c2),e(Ne,Lh),e(Lh,p2),e(Ne,h2),e(Ne,Vt),e(Vt,Nh),e(Nh,pl),e(pl,m2),e(Vt,f2),e(Vt,Sh),e(Sh,hl),e(hl,u2),e(Vt,g2),e(Vt,Dh),e(Dh,ml),e(ml,_2),e(Vt,b2),e(Vt,Oh),e(Oh,fl),e(fl,k2),e(Ne,v2),e(Ne,qt),w(ul,qt,null),e(qt,T2),e(qt,hn),e(hn,y2),e(hn,Wh),e(Wh,w2),e(hn,$2),e(hn,Uh),e(Uh,A2),e(hn,F2),e(qt,x2),w(Qs,qt,null),e(qt,E2),w(Vs,qt,null),_(o,Gf,b),_(o,mn,b),e(mn,Ks),e(Ks,Rh),w(gl,Rh,null),e(mn,M2),e(mn,Bh),e(Bh,z2),_(o,Xf,b),_(o,Se,b),w(_l,Se,null),e(Se,q2),e(Se,Hh),e(Hh,P2),e(Se,j2),e(Se,bl),e(bl,C2),e(bl,Gd),e(Gd,I2),e(bl,L2),e(Se,N2),e(Se,kl),e(kl,S2),e(kl,vl),e(vl,D2),e(kl,O2),e(Se,W2),e(Se,Qh),e(Qh,U2),e(Se,R2),e(Se,Kt),e(Kt,Vh),e(Vh,Tl),e(Tl,B2),e(Kt,H2),e(Kt,Kh),e(Kh,yl),e(yl,Q2),e(Kt,V2),e(Kt,Jh),e(Jh,wl),e(wl,K2),e(Kt,J2),e(Kt,Gh),e(Gh,$l),e($l,G2),e(Se,X2),e(Se,Pt),w(Al,Pt,null),e(Pt,Y2),e(Pt,fn),e(fn,Z2),e(fn,Xh),e(Xh,eA),e(fn,tA),e(fn,Yh),e(Yh,oA),e(fn,nA),e(Pt,sA),w(Js,Pt,null),e(Pt,rA),w(Gs,Pt,null),_(o,Yf,b),_(o,un,b),e(un,Xs),e(Xs,Zh),w(Fl,Zh,null),e(un,aA),e(un,em),e(em,iA),_(o,Zf,b),_(o,De,b),w(xl,De,null),e(De,lA),e(De,tm),e(tm,dA),e(De,cA),e(De,El),e(El,pA),e(El,Xd),e(Xd,hA),e(El,mA),e(De,fA),e(De,Ml),e(Ml,uA),e(Ml,zl),e(zl,gA),e(Ml,_A),e(De,bA),e(De,om),e(om,kA),e(De,vA),e(De,Jt),e(Jt,nm),e(nm,ql),e(ql,TA),e(Jt,yA),e(Jt,sm),e(sm,Pl),e(Pl,wA),e(Jt,$A),e(Jt,rm),e(rm,jl),e(jl,AA),e(Jt,FA),e(Jt,am),e(am,Cl),e(Cl,xA),e(De,EA),e(De,jt),w(Il,jt,null),e(jt,MA),e(jt,gn),e(gn,zA),e(gn,im),e(im,qA),e(gn,PA),e(gn,lm),e(lm,jA),e(gn,CA),e(jt,IA),w(Ys,jt,null),e(jt,LA),w(Zs,jt,null),_(o,eu,b),_(o,_n,b),e(_n,er),e(er,dm),w(Ll,dm,null),e(_n,NA),e(_n,cm),e(cm,SA),_(o,tu,b),_(o,Oe,b),w(Nl,Oe,null),e(Oe,DA),e(Oe,bn),e(bn,OA),e(bn,pm),e(pm,WA),e(bn,UA),e(bn,hm),e(hm,RA),e(bn,BA),e(Oe,HA),e(Oe,Sl),e(Sl,QA),e(Sl,Yd),e(Yd,VA),e(Sl,KA),e(Oe,JA),e(Oe,Dl),e(Dl,GA),e(Dl,Ol),e(Ol,XA),e(Dl,YA),e(Oe,ZA),e(Oe,mm),e(mm,eF),e(Oe,tF),e(Oe,Gt),e(Gt,fm),e(fm,Wl),e(Wl,oF),e(Gt,nF),e(Gt,um),e(um,Ul),e(Ul,sF),e(Gt,rF),e(Gt,gm),e(gm,Rl),e(Rl,aF),e(Gt,iF),e(Gt,_m),e(_m,Bl),e(Bl,lF),e(Oe,dF),e(Oe,Ct),w(Hl,Ct,null),e(Ct,cF),e(Ct,kn),e(kn,pF),e(kn,bm),e(bm,hF),e(kn,mF),e(kn,km),e(km,fF),e(kn,uF),e(Ct,gF),w(tr,Ct,null),e(Ct,_F),w(or,Ct,null),ou=!0},p(o,[b]){const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:o}),$n.$set(Ql);const vm={};b&2&&(vm.$$scope={dirty:b,ctx:o}),xn.$set(vm);const Tm={};b&2&&(Tm.$$scope={dirty:b,ctx:o}),Mn.$set(Tm);const ym={};b&2&&(ym.$$scope={dirty:b,ctx:o}),Pn.$set(ym);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),jn.$set(Vl);const wm={};b&2&&(wm.$$scope={dirty:b,ctx:o}),In.$set(wm);const $m={};b&2&&($m.$$scope={dirty:b,ctx:o}),Ln.$set($m);const Am={};b&2&&(Am.$$scope={dirty:b,ctx:o}),Sn.$set(Am);const Kl={};b&2&&(Kl.$$scope={dirty:b,ctx:o}),Dn.$set(Kl);const Fm={};b&2&&(Fm.$$scope={dirty:b,ctx:o}),On.$set(Fm);const Jl={};b&2&&(Jl.$$scope={dirty:b,ctx:o}),Un.$set(Jl);const xm={};b&2&&(xm.$$scope={dirty:b,ctx:o}),Rn.$set(xm);const Em={};b&2&&(Em.$$scope={dirty:b,ctx:o}),Bn.$set(Em);const Mm={};b&2&&(Mm.$$scope={dirty:b,ctx:o}),Hn.$set(Mm);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),Qn.$set(zm);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),Kn.$set(qm);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),Jn.$set(Pm);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),Xn.$set(Gl);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),Yn.$set(jm);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),Zn.$set(Cm);const Xt={};b&2&&(Xt.$$scope={dirty:b,ctx:o}),ts.$set(Xt);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),os.$set(Im);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),ns.$set(Lm);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),rs.$set(Nm);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),as.$set(Xl);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),is.$set(Sm);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),ds.$set(Dm);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),cs.$set(Om);const Yt={};b&2&&(Yt.$$scope={dirty:b,ctx:o}),ps.$set(Yt);const Zt={};b&2&&(Zt.$$scope={dirty:b,ctx:o}),ms.$set(Zt);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),fs.$set(Wm);const Um={};b&2&&(Um.$$scope={dirty:b,ctx:o}),us.$set(Um);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),gs.$set(Rm);const vn={};b&2&&(vn.$$scope={dirty:b,ctx:o}),bs.$set(vn);const Bm={};b&2&&(Bm.$$scope={dirty:b,ctx:o}),ks.$set(Bm);const Hm={};b&2&&(Hm.$$scope={dirty:b,ctx:o}),vs.$set(Hm);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),Ts.$set(Yl);const Qm={};b&2&&(Qm.$$scope={dirty:b,ctx:o}),ws.$set(Qm);const Vm={};b&2&&(Vm.$$scope={dirty:b,ctx:o}),$s.$set(Vm);const Km={};b&2&&(Km.$$scope={dirty:b,ctx:o}),As.$set(Km);const Je={};b&2&&(Je.$$scope={dirty:b,ctx:o}),xs.$set(Je);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:o}),Es.$set(Zl);const Jm={};b&2&&(Jm.$$scope={dirty:b,ctx:o}),Ms.$set(Jm);const ed={};b&2&&(ed.$$scope={dirty:b,ctx:o}),zs.$set(ed);const Gm={};b&2&&(Gm.$$scope={dirty:b,ctx:o}),Ps.$set(Gm);const Tn={};b&2&&(Tn.$$scope={dirty:b,ctx:o}),js.$set(Tn);const Xm={};b&2&&(Xm.$$scope={dirty:b,ctx:o}),Cs.$set(Xm);const td={};b&2&&(td.$$scope={dirty:b,ctx:o}),Is.$set(td);const Zd={};b&2&&(Zd.$$scope={dirty:b,ctx:o}),Ns.$set(Zd);const Ym={};b&2&&(Ym.$$scope={dirty:b,ctx:o}),Ss.$set(Ym);const ec={};b&2&&(ec.$$scope={dirty:b,ctx:o}),Os.$set(ec);const Zm={};b&2&&(Zm.$$scope={dirty:b,ctx:o}),Ws.$set(Zm);const od={};b&2&&(od.$$scope={dirty:b,ctx:o}),Rs.$set(od);const nd={};b&2&&(nd.$$scope={dirty:b,ctx:o}),Bs.$set(nd);const ef={};b&2&&(ef.$$scope={dirty:b,ctx:o}),Qs.$set(ef);const eo={};b&2&&(eo.$$scope={dirty:b,ctx:o}),Vs.$set(eo);const tf={};b&2&&(tf.$$scope={dirty:b,ctx:o}),Js.$set(tf);const yn={};b&2&&(yn.$$scope={dirty:b,ctx:o}),Gs.$set(yn);const of={};b&2&&(of.$$scope={dirty:b,ctx:o}),Ys.$set(of);const nf={};b&2&&(nf.$$scope={dirty:b,ctx:o}),Zs.$set(nf);const sf={};b&2&&(sf.$$scope={dirty:b,ctx:o}),tr.$set(sf);const sd={};b&2&&(sd.$$scope={dirty:b,ctx:o}),or.$set(sd)},i(o){ou||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$($n.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Cr.$$.fragment,o),$(Lr.$$.fragment,o),$(Sr.$$.fragment,o),$(xn.$$.fragment,o),$(Dr.$$.fragment,o),$(Or.$$.fragment,o),$(Wr.$$.fragment,o),$(Rr.$$.fragment,o),$(Hr.$$.fragment,o),$(Mn.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Jr.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(oa.$$.fragment,o),$(Pn.$$.fragment,o),$(jn.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(la.$$.fragment,o),$(In.$$.fragment,o),$(Ln.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(On.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Ta.$$.fragment,o),$(Un.$$.fragment,o),$(Rn.$$.fragment,o),$(Bn.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(xa.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ma.$$.fragment,o),$(ja.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Ca.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Oa.$$.fragment,o),$(Wa.$$.fragment,o),$(rs.$$.fragment,o),$(Ha.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(Qa.$$.fragment,o),$(Va.$$.fragment,o),$(ds.$$.fragment,o),$(Xa.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ri.$$.fragment,o),$(ai.$$.fragment,o),$(bs.$$.fragment,o),$(ci.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(pi.$$.fragment,o),$(hi.$$.fragment,o),$(ws.$$.fragment,o),$(gi.$$.fragment,o),$($s.$$.fragment,o),$(As.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(xs.$$.fragment,o),$(yi.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(Ps.$$.fragment,o),$(Ei.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Is.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Si.$$.fragment,o),$(Ns.$$.fragment,o),$(Ss.$$.fragment,o),$(Di.$$.fragment,o),$(Oi.$$.fragment,o),$(Ki.$$.fragment,o),$(Os.$$.fragment,o),$(Ws.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(rl.$$.fragment,o),$(Rs.$$.fragment,o),$(Bs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(ul.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Al.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Fl.$$.fragment,o),$(xl.$$.fragment,o),$(Il.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(Ll.$$.fragment,o),$(Nl.$$.fragment,o),$(Hl.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),ou=!0)},o(o){A(l.$$.fragment,o),A(ee.$$.fragment,o),A(Fr.$$.fragment,o),A(xr.$$.fragment,o),A($n.$$.fragment,o),A(Mr.$$.fragment,o),A(zr.$$.fragment,o),A(Cr.$$.fragment,o),A(Lr.$$.fragment,o),A(Sr.$$.fragment,o),A(xn.$$.fragment,o),A(Dr.$$.fragment,o),A(Or.$$.fragment,o),A(Wr.$$.fragment,o),A(Rr.$$.fragment,o),A(Hr.$$.fragment,o),A(Mn.$$.fragment,o),A(Qr.$$.fragment,o),A(Vr.$$.fragment,o),A(Jr.$$.fragment,o),A(Xr.$$.fragment,o),A(Yr.$$.fragment,o),A(oa.$$.fragment,o),A(Pn.$$.fragment,o),A(jn.$$.fragment,o),A(na.$$.fragment,o),A(sa.$$.fragment,o),A(la.$$.fragment,o),A(In.$$.fragment,o),A(Ln.$$.fragment,o),A(da.$$.fragment,o),A(ca.$$.fragment,o),A(ua.$$.fragment,o),A(Sn.$$.fragment,o),A(Dn.$$.fragment,o),A(On.$$.fragment,o),A(ga.$$.fragment,o),A(_a.$$.fragment,o),A(Ta.$$.fragment,o),A(Un.$$.fragment,o),A(Rn.$$.fragment,o),A(Bn.$$.fragment,o),A(Hn.$$.fragment,o),A(Qn.$$.fragment,o),A(ya.$$.fragment,o),A(wa.$$.fragment,o),A(xa.$$.fragment,o),A(Kn.$$.fragment,o),A(Jn.$$.fragment,o),A(Ea.$$.fragment,o),A(Ma.$$.fragment,o),A(ja.$$.fragment,o),A(Xn.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(Ca.$$.fragment,o),A(Ia.$$.fragment,o),A(Da.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(Oa.$$.fragment,o),A(Wa.$$.fragment,o),A(rs.$$.fragment,o),A(Ha.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(Qa.$$.fragment,o),A(Va.$$.fragment,o),A(ds.$$.fragment,o),A(Xa.$$.fragment,o),A(cs.$$.fragment,o),A(ps.$$.fragment,o),A(Ya.$$.fragment,o),A(Za.$$.fragment,o),A(ms.$$.fragment,o),A(si.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(ri.$$.fragment,o),A(ai.$$.fragment,o),A(bs.$$.fragment,o),A(ci.$$.fragment,o),A(ks.$$.fragment,o),A(vs.$$.fragment,o),A(Ts.$$.fragment,o),A(pi.$$.fragment,o),A(hi.$$.fragment,o),A(ws.$$.fragment,o),A(gi.$$.fragment,o),A($s.$$.fragment,o),A(As.$$.fragment,o),A(_i.$$.fragment,o),A(bi.$$.fragment,o),A(xs.$$.fragment,o),A(yi.$$.fragment,o),A(Es.$$.fragment,o),A(Ms.$$.fragment,o),A(zs.$$.fragment,o),A(wi.$$.fragment,o),A($i.$$.fragment,o),A(Ps.$$.fragment,o),A(Ei.$$.fragment,o),A(js.$$.fragment,o),A(Cs.$$.fragment,o),A(Is.$$.fragment,o),A(Mi.$$.fragment,o),A(zi.$$.fragment,o),A(Si.$$.fragment,o),A(Ns.$$.fragment,o),A(Ss.$$.fragment,o),A(Di.$$.fragment,o),A(Oi.$$.fragment,o),A(Ki.$$.fragment,o),A(Os.$$.fragment,o),A(Ws.$$.fragment,o),A(Ji.$$.fragment,o),A(Gi.$$.fragment,o),A(rl.$$.fragment,o),A(Rs.$$.fragment,o),A(Bs.$$.fragment,o),A(al.$$.fragment,o),A(il.$$.fragment,o),A(ul.$$.fragment,o),A(Qs.$$.fragment,o),A(Vs.$$.fragment,o),A(gl.$$.fragment,o),A(_l.$$.fragment,o),A(Al.$$.fragment,o),A(Js.$$.fragment,o),A(Gs.$$.fragment,o),A(Fl.$$.fragment,o),A(xl.$$.fragment,o),A(Il.$$.fragment,o),A(Ys.$$.fragment,o),A(Zs.$$.fragment,o),A(Ll.$$.fragment,o),A(Nl.$$.fragment,o),A(Hl.$$.fragment,o),A(tr.$$.fragment,o),A(or.$$.fragment,o),ou=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(G),o&&t(z),F(ee),o&&t(de),o&&t(K),o&&t(j),o&&t(Z),o&&t(ce),o&&t(P),o&&t(Q),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(he),o&&t(D),o&&t(Ae),o&&t(C),o&&t(me),o&&t(Te),F(Fr),o&&t(rf),o&&t(bt),F(xr),F($n),o&&t(af),o&&t(ko),F(Mr),o&&t(lf),o&&t(je),F(zr),F(Cr),F(Lr),F(Sr),F(xn),F(Dr),o&&t(df),o&&t(To),F(Or),o&&t(cf),o&&t(kt),F(Wr),F(Rr),F(Hr),F(Mn),o&&t(pf),o&&t(yo),F(Qr),o&&t(hf),o&&t(wo),F(Vr),o&&t(mf),o&&t($o),F(Jr),o&&t(ff),o&&t(Ao),F(Xr),o&&t(uf),o&&t(Ge),F(Yr),F(oa),F(Pn),F(jn),o&&t(gf),o&&t(xo),F(na),o&&t(_f),o&&t(Xe),F(sa),F(la),F(In),F(Ln),o&&t(bf),o&&t(zo),F(da),o&&t(kf),o&&t(Ye),F(ca),F(ua),F(Sn),F(Dn),F(On),o&&t(vf),o&&t(Po),F(ga),o&&t(Tf),o&&t(Ze),F(_a),F(Ta),F(Un),F(Rn),F(Bn),F(Hn),F(Qn),o&&t(yf),o&&t(Co),F(ya),o&&t(wf),o&&t(et),F(wa),F(xa),F(Kn),F(Jn),o&&t($f),o&&t(Lo),F(Ea),o&&t(Af),o&&t(tt),F(Ma),F(ja),F(Xn),F(Yn),F(Zn),o&&t(Ff),o&&t(So),F(Ca),o&&t(xf),o&&t(ot),F(Ia),F(Da),F(ts),F(os),F(ns),o&&t(Ef),o&&t(Wo),F(Oa),o&&t(Mf),o&&t(Ue),F(Wa),F(rs),F(Ha),F(as),F(is),o&&t(zf),o&&t(Ro),F(Qa),o&&t(qf),o&&t(Re),F(Va),F(ds),F(Xa),F(cs),F(ps),o&&t(Pf),o&&t(Qo),F(Ya),o&&t(jf),o&&t(Be),F(Za),F(ms),F(si),F(fs),F(us),F(gs),o&&t(Cf),o&&t(Ko),F(ri),o&&t(If),o&&t(He),F(ai),F(bs),F(ci),F(ks),F(vs),F(Ts),o&&t(Lf),o&&t(Go),F(pi),o&&t(Nf),o&&t(Qe),F(hi),F(ws),F(gi),F($s),F(As),o&&t(Sf),o&&t(Yo),F(_i),o&&t(Df),o&&t(Ve),F(bi),F(xs),F(yi),F(Es),F(Ms),F(zs),o&&t(Of),o&&t(en),F(wi),o&&t(Wf),o&&t(Ke),F($i),F(Ps),F(Ei),F(js),F(Cs),F(Is),o&&t(Uf),o&&t(nn),F(Mi),o&&t(Rf),o&&t(Ce),F(zi),F(Si),F(Ns),F(Ss),o&&t(Bf),o&&t(rn),F(Di),o&&t(Hf),o&&t(Ie),F(Oi),F(Ki),F(Os),F(Ws),o&&t(Qf),o&&t(dn),F(Ji),o&&t(Vf),o&&t(Le),F(Gi),F(rl),F(Rs),F(Bs),o&&t(Kf),o&&t(pn),F(al),o&&t(Jf),o&&t(Ne),F(il),F(ul),F(Qs),F(Vs),o&&t(Gf),o&&t(mn),F(gl),o&&t(Xf),o&&t(Se),F(_l),F(Al),F(Js),F(Gs),o&&t(Yf),o&&t(un),F(Fl),o&&t(Zf),o&&t(De),F(xl),F(Il),F(Ys),F(Zs),o&&t(eu),o&&t(_n),F(Ll),o&&t(tu),o&&t(Oe),F(Nl),F(Hl),F(tr),F(or)}}}const _4={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function b4(x){return iM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class A4 extends nM{constructor(d){super();sM(this,d,b4,g4,rM,{})}}export{A4 as default,_4 as metadata};
