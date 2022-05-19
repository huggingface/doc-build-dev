import{S as Gg,i as Yg,s as Zg,e as n,k as m,w as T,t as a,M as e_,c as s,d as t,m as h,a as r,x as M,h as i,b as v,F as e,g as _,y as $,q as w,o as P,B as N,v as t_,L as ve}from"../../chunks/vendor-6b77c823.js";import{T as Fe}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-1088f2fb.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ae}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as be}from"../../chunks/ExampleCodeBlock-5212b321.js";function o_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetModel, MPNetConfig

# Initializing a MPNet mpnet-base style configuration
configuration = MPNetConfig()

# Initializing a model from the mpnet-base style configuration
model = MPNetModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetModel, MPNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MPNet mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MPNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),g=a("Examples:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Examples:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function n_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function s_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetModel
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function r_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function a_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function i_(y){let l,g;return l=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function l_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function d_(y){let l,g,c,p,b;return p=new Te({props:{code:`import torch
from transformers import MPNetTokenizer, MPNetForSequenceClassification

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),g=a("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function c_(y){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function p_(y){let l,g,c,p,b;return p=new Te({props:{code:`import torch
from transformers import MPNetTokenizer, MPNetForSequenceClassification

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),g=a("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function m_(y){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained(
    "microsoft/mpnet-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function h_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function f_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function u_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function g_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function __(y){let l,g;return l=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function k_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function b_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function v_(y){let l,g;return l=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function T_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),b=n("li"),d=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),z=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),E=n("p"),X=a("This second option is useful when using "),D=n("code"),G=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=a("model(inputs)"),se=a("."),U=m(),O=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=m(),q=n("ul"),x=n("li"),Z=a("a single Tensor with "),H=n("code"),re=a("input_ids"),ee=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),te=m(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=r(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=r(p);b=s(K,"LI",{});var _e=r(b);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),z=s(K,"LI",{});var Me=r(z);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),B=h(u),E=s(u,"P",{});var I=r(E);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=r(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=r(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=r(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=h(u),q=s(u,"UL",{});var A=r(q);x=s(A,"LI",{});var S=r(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=r(H);re=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=r(R);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=r(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=r(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=r(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=r(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,b),e(b,d),e(p,f),e(p,z),e(z,le),_(u,B,F),_(u,E,F),e(E,X),e(E,D),e(D,G),e(E,de),e(E,W),e(W,ce),e(E,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,V,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,re),e(x,ee),e(x,R),e(R,ae),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(B),u&&t(E),u&&t(U),u&&t(O),u&&t(V),u&&t(q)}}}function M_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function $_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function w_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),b=n("li"),d=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),z=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),E=n("p"),X=a("This second option is useful when using "),D=n("code"),G=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=a("model(inputs)"),se=a("."),U=m(),O=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=m(),q=n("ul"),x=n("li"),Z=a("a single Tensor with "),H=n("code"),re=a("input_ids"),ee=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),te=m(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=r(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=r(p);b=s(K,"LI",{});var _e=r(b);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),z=s(K,"LI",{});var Me=r(z);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),B=h(u),E=s(u,"P",{});var I=r(E);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=r(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=r(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=r(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=h(u),q=s(u,"UL",{});var A=r(q);x=s(A,"LI",{});var S=r(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=r(H);re=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=r(R);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=r(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=r(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=r(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=r(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,b),e(b,d),e(p,f),e(p,z),e(z,le),_(u,B,F),_(u,E,F),e(E,X),e(E,D),e(D,G),e(E,de),e(E,W),e(W,ce),e(E,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,V,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,re),e(x,ee),e(x,R),e(R,ae),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(B),u&&t(E),u&&t(U),u&&t(O),u&&t(V),u&&t(q)}}}function P_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function N_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function y_(y){let l,g;return l=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function F_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),b=n("li"),d=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),z=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),E=n("p"),X=a("This second option is useful when using "),D=n("code"),G=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=a("model(inputs)"),se=a("."),U=m(),O=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=m(),q=n("ul"),x=n("li"),Z=a("a single Tensor with "),H=n("code"),re=a("input_ids"),ee=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),te=m(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=r(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=r(p);b=s(K,"LI",{});var _e=r(b);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),z=s(K,"LI",{});var Me=r(z);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),B=h(u),E=s(u,"P",{});var I=r(E);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=r(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=r(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=r(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=h(u),q=s(u,"UL",{});var A=r(q);x=s(A,"LI",{});var S=r(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=r(H);re=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=r(R);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=r(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=r(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=r(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=r(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,b),e(b,d),e(p,f),e(p,z),e(z,le),_(u,B,F),_(u,E,F),e(E,X),e(E,D),e(D,G),e(E,de),e(E,W),e(W,ce),e(E,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,V,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,re),e(x,ee),e(x,R),e(R,ae),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(B),u&&t(E),u&&t(U),u&&t(O),u&&t(V),u&&t(q)}}}function z_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function E_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function q_(y){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function x_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),b=n("li"),d=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),z=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),E=n("p"),X=a("This second option is useful when using "),D=n("code"),G=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=a("model(inputs)"),se=a("."),U=m(),O=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=m(),q=n("ul"),x=n("li"),Z=a("a single Tensor with "),H=n("code"),re=a("input_ids"),ee=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),te=m(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=r(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=r(p);b=s(K,"LI",{});var _e=r(b);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),z=s(K,"LI",{});var Me=r(z);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),B=h(u),E=s(u,"P",{});var I=r(E);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=r(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=r(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=r(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=h(u),q=s(u,"UL",{});var A=r(q);x=s(A,"LI",{});var S=r(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=r(H);re=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=r(R);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=r(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=r(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=r(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=r(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,b),e(b,d),e(p,f),e(p,z),e(z,le),_(u,B,F),_(u,E,F),e(E,X),e(E,D),e(D,G),e(E,de),e(E,W),e(W,ce),e(E,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,V,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,re),e(x,ee),e(x,R),e(R,ae),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(B),u&&t(E),u&&t(U),u&&t(O),u&&t(V),u&&t(q)}}}function C_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function j_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function L_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),b=n("li"),d=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),z=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),E=n("p"),X=a("This second option is useful when using "),D=n("code"),G=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=a("model(inputs)"),se=a("."),U=m(),O=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=m(),q=n("ul"),x=n("li"),Z=a("a single Tensor with "),H=n("code"),re=a("input_ids"),ee=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),te=m(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=r(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=r(p);b=s(K,"LI",{});var _e=r(b);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),z=s(K,"LI",{});var Me=r(z);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),B=h(u),E=s(u,"P",{});var I=r(E);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=r(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=r(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=r(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=h(u),q=s(u,"UL",{});var A=r(q);x=s(A,"LI",{});var S=r(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=r(H);re=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=r(R);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=r(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=r(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=r(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=r(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,b),e(b,d),e(p,f),e(p,z),e(z,le),_(u,B,F),_(u,E,F),e(E,X),e(E,D),e(D,G),e(E,de),e(E,W),e(W,ce),e(E,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,V,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,re),e(x,ee),e(x,R),e(R,ae),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(B),u&&t(E),u&&t(U),u&&t(O),u&&t(V),u&&t(q)}}}function A_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function O_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function I_(y){let l,g;return l=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function S_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),b=n("li"),d=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),z=n("li"),le=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),E=n("p"),X=a("This second option is useful when using "),D=n("code"),G=a("tf.keras.Model.fit"),de=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=a("model(inputs)"),se=a("."),U=m(),O=n("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=m(),q=n("ul"),x=n("li"),Z=a("a single Tensor with "),H=n("code"),re=a("input_ids"),ee=a(" only and nothing else: "),R=n("code"),ae=a("model(inputs_ids)"),te=m(),C=n("li"),pe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=a('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=r(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=r(p);b=s(K,"LI",{});var _e=r(b);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),z=s(K,"LI",{});var Me=r(z);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),B=h(u),E=s(u,"P",{});var I=r(E);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=r(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=r(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=r(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=h(u),q=s(u,"UL",{});var A=r(q);x=s(A,"LI",{});var S=r(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=r(H);re=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=r(R);ae=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=r(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=r(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=r(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=r(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,b),e(b,d),e(p,f),e(p,z),e(z,le),_(u,B,F),_(u,E,F),e(E,X),e(E,D),e(D,G),e(E,de),e(E,W),e(W,ce),e(E,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,V,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,re),e(x,ee),e(x,R),e(R,ae),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(B),u&&t(E),u&&t(U),u&&t(O),u&&t(V),u&&t(q)}}}function D_(y){let l,g,c,p,b;return{c(){l=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var z=r(c);p=i(z,"Module"),z.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,b)},d(d){d&&t(l)}}}function W_(y){let l,g,c,p,b;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=n("p"),g=a("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=r(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),b=!0},p:ve,i(d){b||(w(p.$$.fragment,d),b=!0)},o(d){P(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function Q_(y){let l,g;return l=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ve,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function H_(y){let l,g,c,p,b,d,f,z,le,B,E,X,D,G,de,W,ce,se,U,O,Y,V,q,x,Z,H,re,ee,R,ae,te,C,pe,Q,oe,me,L,ne,j,he,u,F,K,_e,Me,I,ke,$e,we,A,S,Pe,ge,fe,Ne,ie,ue,no,Kr,un,Gl,Xr,Yl,qi,Ge,gn,Zl,dt,ed,tr,td,od,or,nd,sd,_n,rd,ad,id,Nt,ld,nr,dd,cd,sr,pd,md,hd,so,xi,yt,ro,Jr,kn,fd,Gr,ud,Ci,ze,bn,gd,vn,_d,rr,kd,bd,vd,ht,Tn,Td,Yr,Md,$d,Mn,ar,wd,Zr,Pd,Nd,ir,yd,ea,Fd,zd,ao,$n,Ed,wn,qd,ta,xd,Cd,jd,io,Pn,Ld,oa,Ad,Od,lr,Nn,ji,Ft,lo,na,yn,Id,sa,Sd,Li,Ye,Fn,Dd,zn,Wd,ra,Qd,Hd,Rd,En,Ud,dr,Bd,Vd,Kd,co,qn,Xd,aa,Jd,Ai,zt,po,ia,xn,Gd,la,Yd,Oi,Oe,Cn,Zd,da,ec,tc,jn,oc,cr,nc,sc,rc,Ln,ac,An,ic,lc,dc,Ze,On,cc,Et,pc,pr,mc,hc,ca,fc,uc,gc,mo,_c,ho,Ii,qt,fo,pa,In,kc,ma,bc,Si,xt,Sn,vc,He,Dn,Tc,Ct,Mc,mr,$c,wc,ha,Pc,Nc,yc,uo,Fc,go,zc,_o,Di,jt,ko,fa,Wn,Ec,ua,qc,Wi,Ie,Qn,xc,ga,Cc,jc,Hn,Lc,hr,Ac,Oc,Ic,Rn,Sc,Un,Dc,Wc,Qc,ye,Bn,Hc,Lt,Rc,fr,Uc,Bc,_a,Vc,Kc,Xc,bo,Jc,vo,Gc,To,Yc,Mo,Zc,$o,Qi,At,wo,ka,Vn,ep,ba,tp,Hi,Se,Kn,op,va,np,sp,Xn,rp,ur,ap,ip,lp,Jn,dp,Gn,cp,pp,mp,et,Yn,hp,Ot,fp,gr,up,gp,Ta,_p,kp,bp,Po,vp,No,Ri,It,yo,Ma,Zn,Tp,$a,Mp,Ui,De,es,$p,wa,wp,Pp,ts,Np,_r,yp,Fp,zp,os,Ep,ns,qp,xp,Cp,Re,ss,jp,St,Lp,kr,Ap,Op,Pa,Ip,Sp,Dp,Fo,Wp,zo,Qp,Eo,Bi,Dt,qo,Na,rs,Hp,ya,Rp,Vi,We,as,Up,Wt,Bp,Fa,Vp,Kp,za,Xp,Jp,Gp,is,Yp,br,Zp,em,tm,ls,om,ds,nm,sm,rm,Ue,cs,am,Qt,im,vr,lm,dm,Ea,cm,pm,mm,xo,hm,Co,fm,jo,Ki,Ht,Lo,qa,ps,um,xa,gm,Xi,Ee,ms,_m,Ca,km,bm,hs,vm,Tr,Tm,Mm,$m,fs,wm,us,Pm,Nm,ym,Ao,Fm,tt,gs,zm,Rt,Em,Mr,qm,xm,ja,Cm,jm,Lm,Oo,Am,Io,Ji,Ut,So,La,_s,Om,Aa,Im,Gi,qe,ks,Sm,bs,Dm,Oa,Wm,Qm,Hm,vs,Rm,$r,Um,Bm,Vm,Ts,Km,Ms,Xm,Jm,Gm,Do,Ym,Be,$s,Zm,Bt,eh,wr,th,oh,Ia,nh,sh,rh,Wo,ah,Qo,ih,Ho,Yi,Vt,Ro,Sa,ws,lh,Da,dh,Zi,xe,Ps,ch,Wa,ph,mh,Ns,hh,Pr,fh,uh,gh,ys,_h,Fs,kh,bh,vh,Uo,Th,Ve,zs,Mh,Kt,$h,Nr,wh,Ph,Qa,Nh,yh,Fh,Bo,zh,Vo,Eh,Ko,el,Xt,Xo,Ha,Es,qh,Ra,xh,tl,Ce,qs,Ch,Ua,jh,Lh,xs,Ah,yr,Oh,Ih,Sh,Cs,Dh,js,Wh,Qh,Hh,Jo,Rh,ot,Ls,Uh,Jt,Bh,Fr,Vh,Kh,Ba,Xh,Jh,Gh,Go,Yh,Yo,ol,Gt,Zo,Va,As,Zh,Ka,ef,nl,je,Os,tf,Xa,of,nf,Is,sf,zr,rf,af,lf,Ss,df,Ds,cf,pf,mf,en,hf,Ke,Ws,ff,Yt,uf,Er,gf,_f,Ja,kf,bf,vf,tn,Tf,on,Mf,nn,sl,Zt,sn,Ga,Qs,$f,Ya,wf,rl,Le,Hs,Pf,eo,Nf,Za,yf,Ff,ei,zf,Ef,qf,Rs,xf,qr,Cf,jf,Lf,Us,Af,Bs,Of,If,Sf,rn,Df,Xe,Vs,Wf,to,Qf,xr,Hf,Rf,ti,Uf,Bf,Vf,an,Kf,ln,Xf,dn,al;return d=new Ae({}),G=new Ae({}),un=new Ae({}),gn=new J({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MPNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MPNetConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MPNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MPNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MPNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MPNetConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MPNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MPNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MPNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MPNetConfig.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),so=new be({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[o_]},$$scope:{ctx:y}}}),kn=new Ae({}),bn=new J({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.MPNetTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.MPNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet.py#L66"}}),Tn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet.py#L231",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$n=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Nn=new J({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),yn=new Ae({}),Fn=new J({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51"}}),qn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L190",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new Ae({}),Cn=new J({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L483"}}),On=new J({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L512",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Fe({props:{$$slots:{default:[n_]},$$scope:{ctx:y}}}),ho=new be({props:{anchor:"transformers.MPNetModel.forward.example",$$slots:{default:[s_]},$$scope:{ctx:y}}}),In=new Ae({}),Sn=new J({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L576"}}),Dn=new J({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L595",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Fe({props:{$$slots:{default:[r_]},$$scope:{ctx:y}}}),go=new be({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[a_]},$$scope:{ctx:y}}}),_o=new be({props:{anchor:"transformers.MPNetForMaskedLM.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:y}}}),Wn=new Ae({}),Qn=new J({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L685"}}),Bn=new J({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L698",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new Fe({props:{$$slots:{default:[l_]},$$scope:{ctx:y}}}),vo=new be({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[d_]},$$scope:{ctx:y}}}),To=new be({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:y}}}),Mo=new be({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-3",$$slots:{default:[p_]},$$scope:{ctx:y}}}),$o=new be({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-4",$$slots:{default:[m_]},$$scope:{ctx:y}}}),Vn=new Ae({}),Kn=new J({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L780"}}),Yn=new J({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Fe({props:{$$slots:{default:[h_]},$$scope:{ctx:y}}}),No=new be({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[f_]},$$scope:{ctx:y}}}),Zn=new Ae({}),es=new J({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L871"}}),ss=new J({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L886",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new Fe({props:{$$slots:{default:[u_]},$$scope:{ctx:y}}}),zo=new be({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[g_]},$$scope:{ctx:y}}}),Eo=new be({props:{anchor:"transformers.MPNetForTokenClassification.forward.example-2",$$slots:{default:[__]},$$scope:{ctx:y}}}),rs=new Ae({}),as=new J({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L971"}}),cs=new J({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_mpnet.py#L985",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new Fe({props:{$$slots:{default:[k_]},$$scope:{ctx:y}}}),Co=new be({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[b_]},$$scope:{ctx:y}}}),jo=new be({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example-2",$$slots:{default:[v_]},$$scope:{ctx:y}}}),ps=new Ae({}),ms=new J({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L664"}}),Ao=new Fe({props:{$$slots:{default:[T_]},$$scope:{ctx:y}}}),gs=new J({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L669",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oo=new Fe({props:{$$slots:{default:[M_]},$$scope:{ctx:y}}}),Io=new be({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[$_]},$$scope:{ctx:y}}}),_s=new Ae({}),ks=new J({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L767"}}),Do=new Fe({props:{$$slots:{default:[w_]},$$scope:{ctx:y}}}),$s=new J({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L784",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wo=new Fe({props:{$$slots:{default:[P_]},$$scope:{ctx:y}}}),Qo=new be({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[N_]},$$scope:{ctx:y}}}),Ho=new be({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[y_]},$$scope:{ctx:y}}}),ws=new Ae({}),Ps=new J({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L878"}}),Uo=new Fe({props:{$$slots:{default:[F_]},$$scope:{ctx:y}}}),zs=new J({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L889",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new Fe({props:{$$slots:{default:[z_]},$$scope:{ctx:y}}}),Vo=new be({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[E_]},$$scope:{ctx:y}}}),Ko=new be({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:y}}}),Es=new Ae({}),qs=new J({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L959"}}),Jo=new Fe({props:{$$slots:{default:[x_]},$$scope:{ctx:y}}}),Ls=new J({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L979",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Fe({props:{$$slots:{default:[C_]},$$scope:{ctx:y}}}),Yo=new be({props:{anchor:"transformers.TFMPNetForMultipleChoice.call.example",$$slots:{default:[j_]},$$scope:{ctx:y}}}),As=new Ae({}),Os=new J({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1076"}}),en=new Fe({props:{$$slots:{default:[L_]},$$scope:{ctx:y}}}),Ws=new J({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tn=new Fe({props:{$$slots:{default:[A_]},$$scope:{ctx:y}}}),on=new be({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[O_]},$$scope:{ctx:y}}}),nn=new be({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[I_]},$$scope:{ctx:y}}}),Qs=new Ae({}),Hs=new J({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1159"}}),rn=new Fe({props:{$$slots:{default:[S_]},$$scope:{ctx:y}}}),Vs=new J({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new Fe({props:{$$slots:{default:[D_]},$$scope:{ctx:y}}}),ln=new be({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[W_]},$$scope:{ctx:y}}}),dn=new be({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[Q_]},$$scope:{ctx:y}}}),{c(){l=n("meta"),g=m(),c=n("h1"),p=n("a"),b=n("span"),T(d.$$.fragment),f=m(),z=n("span"),le=a("MPNet"),B=m(),E=n("h2"),X=n("a"),D=n("span"),T(G.$$.fragment),de=m(),W=n("span"),ce=a("Overview"),se=m(),U=n("p"),O=a("The MPNet model was proposed in "),Y=n("a"),V=a("MPNet: Masked and Permuted Pre-training for Language Understanding"),q=a(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),x=m(),Z=n("p"),H=a(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),re=m(),ee=n("p"),R=a("The abstract from the paper is the following:"),ae=m(),te=n("p"),C=n("em"),pe=a(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),Q=m(),oe=n("p"),me=a("Tips:"),L=m(),ne=n("ul"),j=n("li"),he=a("MPNet doesn\u2019t have "),u=n("code"),F=a("token_type_ids"),K=a(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=n("code"),Me=a("tokenizer.sep_token"),I=a(" (or "),ke=n("code"),$e=a("[sep]"),we=a(")."),A=m(),S=n("p"),Pe=a("The original code can be found "),ge=n("a"),fe=a("here"),Ne=a("."),ie=m(),ue=n("h2"),no=n("a"),Kr=n("span"),T(un.$$.fragment),Gl=m(),Xr=n("span"),Yl=a("MPNetConfig"),qi=m(),Ge=n("div"),T(gn.$$.fragment),Zl=m(),dt=n("p"),ed=a("This is the configuration class to store the configuration of a "),tr=n("a"),td=a("MPNetModel"),od=a(" or a "),or=n("a"),nd=a("TFMPNetModel"),sd=a(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),_n=n("a"),rd=a("microsoft/mpnet-base"),ad=a(" architecture."),id=m(),Nt=n("p"),ld=a("Configuration objects inherit from "),nr=n("a"),dd=a("PretrainedConfig"),cd=a(` and can be used to control the model outputs. Read the
documentation from `),sr=n("a"),pd=a("PretrainedConfig"),md=a(" for more information."),hd=m(),T(so.$$.fragment),xi=m(),yt=n("h2"),ro=n("a"),Jr=n("span"),T(kn.$$.fragment),fd=m(),Gr=n("span"),ud=a("MPNetTokenizer"),Ci=m(),ze=n("div"),T(bn.$$.fragment),gd=m(),vn=n("p"),_d=a("This tokenizer inherits from "),rr=n("a"),kd=a("BertTokenizer"),bd=a(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),vd=m(),ht=n("div"),T(Tn.$$.fragment),Td=m(),Yr=n("p"),Md=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),$d=m(),Mn=n("ul"),ar=n("li"),wd=a("single sequence: "),Zr=n("code"),Pd=a("<s> X </s>"),Nd=m(),ir=n("li"),yd=a("pair of sequences: "),ea=n("code"),Fd=a("<s> A </s></s> B </s>"),zd=m(),ao=n("div"),T($n.$$.fragment),Ed=m(),wn=n("p"),qd=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ta=n("code"),xd=a("prepare_for_model"),Cd=a(" methods."),jd=m(),io=n("div"),T(Pn.$$.fragment),Ld=m(),oa=n("p"),Ad=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Od=m(),lr=n("div"),T(Nn.$$.fragment),ji=m(),Ft=n("h2"),lo=n("a"),na=n("span"),T(yn.$$.fragment),Id=m(),sa=n("span"),Sd=a("MPNetTokenizerFast"),Li=m(),Ye=n("div"),T(Fn.$$.fragment),Dd=m(),zn=n("p"),Wd=a("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),ra=n("em"),Qd=a("tokenizers"),Hd=a(" library). Based on WordPiece."),Rd=m(),En=n("p"),Ud=a("This tokenizer inherits from "),dr=n("a"),Bd=a("PreTrainedTokenizerFast"),Vd=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kd=m(),co=n("div"),T(qn.$$.fragment),Xd=m(),aa=n("p"),Jd=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Ai=m(),zt=n("h2"),po=n("a"),ia=n("span"),T(xn.$$.fragment),Gd=m(),la=n("span"),Yd=a("MPNetModel"),Oi=m(),Oe=n("div"),T(Cn.$$.fragment),Zd=m(),da=n("p"),ec=a("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),tc=m(),jn=n("p"),oc=a("This model inherits from "),cr=n("a"),nc=a("PreTrainedModel"),sc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=m(),Ln=n("p"),ac=a("This model is also a PyTorch "),An=n("a"),ic=a("torch.nn.Module"),lc=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc=m(),Ze=n("div"),T(On.$$.fragment),cc=m(),Et=n("p"),pc=a("The "),pr=n("a"),mc=a("MPNetModel"),hc=a(" forward method, overrides the "),ca=n("code"),fc=a("__call__"),uc=a(" special method."),gc=m(),T(mo.$$.fragment),_c=m(),T(ho.$$.fragment),Ii=m(),qt=n("h2"),fo=n("a"),pa=n("span"),T(In.$$.fragment),kc=m(),ma=n("span"),bc=a("MPNetForMaskedLM"),Si=m(),xt=n("div"),T(Sn.$$.fragment),vc=m(),He=n("div"),T(Dn.$$.fragment),Tc=m(),Ct=n("p"),Mc=a("The "),mr=n("a"),$c=a("MPNetForMaskedLM"),wc=a(" forward method, overrides the "),ha=n("code"),Pc=a("__call__"),Nc=a(" special method."),yc=m(),T(uo.$$.fragment),Fc=m(),T(go.$$.fragment),zc=m(),T(_o.$$.fragment),Di=m(),jt=n("h2"),ko=n("a"),fa=n("span"),T(Wn.$$.fragment),Ec=m(),ua=n("span"),qc=a("MPNetForSequenceClassification"),Wi=m(),Ie=n("div"),T(Qn.$$.fragment),xc=m(),ga=n("p"),Cc=a(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),jc=m(),Hn=n("p"),Lc=a("This model inherits from "),hr=n("a"),Ac=a("PreTrainedModel"),Oc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=m(),Rn=n("p"),Sc=a("This model is also a PyTorch "),Un=n("a"),Dc=a("torch.nn.Module"),Wc=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc=m(),ye=n("div"),T(Bn.$$.fragment),Hc=m(),Lt=n("p"),Rc=a("The "),fr=n("a"),Uc=a("MPNetForSequenceClassification"),Bc=a(" forward method, overrides the "),_a=n("code"),Vc=a("__call__"),Kc=a(" special method."),Xc=m(),T(bo.$$.fragment),Jc=m(),T(vo.$$.fragment),Gc=m(),T(To.$$.fragment),Yc=m(),T(Mo.$$.fragment),Zc=m(),T($o.$$.fragment),Qi=m(),At=n("h2"),wo=n("a"),ka=n("span"),T(Vn.$$.fragment),ep=m(),ba=n("span"),tp=a("MPNetForMultipleChoice"),Hi=m(),Se=n("div"),T(Kn.$$.fragment),op=m(),va=n("p"),np=a(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sp=m(),Xn=n("p"),rp=a("This model inherits from "),ur=n("a"),ap=a("PreTrainedModel"),ip=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=m(),Jn=n("p"),dp=a("This model is also a PyTorch "),Gn=n("a"),cp=a("torch.nn.Module"),pp=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp=m(),et=n("div"),T(Yn.$$.fragment),hp=m(),Ot=n("p"),fp=a("The "),gr=n("a"),up=a("MPNetForMultipleChoice"),gp=a(" forward method, overrides the "),Ta=n("code"),_p=a("__call__"),kp=a(" special method."),bp=m(),T(Po.$$.fragment),vp=m(),T(No.$$.fragment),Ri=m(),It=n("h2"),yo=n("a"),Ma=n("span"),T(Zn.$$.fragment),Tp=m(),$a=n("span"),Mp=a("MPNetForTokenClassification"),Ui=m(),De=n("div"),T(es.$$.fragment),$p=m(),wa=n("p"),wp=a(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pp=m(),ts=n("p"),Np=a("This model inherits from "),_r=n("a"),yp=a("PreTrainedModel"),Fp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp=m(),os=n("p"),Ep=a("This model is also a PyTorch "),ns=n("a"),qp=a("torch.nn.Module"),xp=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp=m(),Re=n("div"),T(ss.$$.fragment),jp=m(),St=n("p"),Lp=a("The "),kr=n("a"),Ap=a("MPNetForTokenClassification"),Op=a(" forward method, overrides the "),Pa=n("code"),Ip=a("__call__"),Sp=a(" special method."),Dp=m(),T(Fo.$$.fragment),Wp=m(),T(zo.$$.fragment),Qp=m(),T(Eo.$$.fragment),Bi=m(),Dt=n("h2"),qo=n("a"),Na=n("span"),T(rs.$$.fragment),Hp=m(),ya=n("span"),Rp=a("MPNetForQuestionAnswering"),Vi=m(),We=n("div"),T(as.$$.fragment),Up=m(),Wt=n("p"),Bp=a(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Fa=n("code"),Vp=a("span start logits"),Kp=a(" and "),za=n("code"),Xp=a("span end logits"),Jp=a(")."),Gp=m(),is=n("p"),Yp=a("This model inherits from "),br=n("a"),Zp=a("PreTrainedModel"),em=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=m(),ls=n("p"),om=a("This model is also a PyTorch "),ds=n("a"),nm=a("torch.nn.Module"),sm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rm=m(),Ue=n("div"),T(cs.$$.fragment),am=m(),Qt=n("p"),im=a("The "),vr=n("a"),lm=a("MPNetForQuestionAnswering"),dm=a(" forward method, overrides the "),Ea=n("code"),cm=a("__call__"),pm=a(" special method."),mm=m(),T(xo.$$.fragment),hm=m(),T(Co.$$.fragment),fm=m(),T(jo.$$.fragment),Ki=m(),Ht=n("h2"),Lo=n("a"),qa=n("span"),T(ps.$$.fragment),um=m(),xa=n("span"),gm=a("TFMPNetModel"),Xi=m(),Ee=n("div"),T(ms.$$.fragment),_m=m(),Ca=n("p"),km=a("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),bm=m(),hs=n("p"),vm=a("This model inherits from "),Tr=n("a"),Tm=a("TFPreTrainedModel"),Mm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=m(),fs=n("p"),wm=a("This model is also a "),us=n("a"),Pm=a("tf.keras.Model"),Nm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ym=m(),T(Ao.$$.fragment),Fm=m(),tt=n("div"),T(gs.$$.fragment),zm=m(),Rt=n("p"),Em=a("The "),Mr=n("a"),qm=a("TFMPNetModel"),xm=a(" forward method, overrides the "),ja=n("code"),Cm=a("__call__"),jm=a(" special method."),Lm=m(),T(Oo.$$.fragment),Am=m(),T(Io.$$.fragment),Ji=m(),Ut=n("h2"),So=n("a"),La=n("span"),T(_s.$$.fragment),Om=m(),Aa=n("span"),Im=a("TFMPNetForMaskedLM"),Gi=m(),qe=n("div"),T(ks.$$.fragment),Sm=m(),bs=n("p"),Dm=a("MPNet Model with a "),Oa=n("code"),Wm=a("language modeling"),Qm=a(" head on top."),Hm=m(),vs=n("p"),Rm=a("This model inherits from "),$r=n("a"),Um=a("TFPreTrainedModel"),Bm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vm=m(),Ts=n("p"),Km=a("This model is also a "),Ms=n("a"),Xm=a("tf.keras.Model"),Jm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gm=m(),T(Do.$$.fragment),Ym=m(),Be=n("div"),T($s.$$.fragment),Zm=m(),Bt=n("p"),eh=a("The "),wr=n("a"),th=a("TFMPNetForMaskedLM"),oh=a(" forward method, overrides the "),Ia=n("code"),nh=a("__call__"),sh=a(" special method."),rh=m(),T(Wo.$$.fragment),ah=m(),T(Qo.$$.fragment),ih=m(),T(Ho.$$.fragment),Yi=m(),Vt=n("h2"),Ro=n("a"),Sa=n("span"),T(ws.$$.fragment),lh=m(),Da=n("span"),dh=a("TFMPNetForSequenceClassification"),Zi=m(),xe=n("div"),T(Ps.$$.fragment),ch=m(),Wa=n("p"),ph=a(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),mh=m(),Ns=n("p"),hh=a("This model inherits from "),Pr=n("a"),fh=a("TFPreTrainedModel"),uh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=m(),ys=n("p"),_h=a("This model is also a "),Fs=n("a"),kh=a("tf.keras.Model"),bh=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vh=m(),T(Uo.$$.fragment),Th=m(),Ve=n("div"),T(zs.$$.fragment),Mh=m(),Kt=n("p"),$h=a("The "),Nr=n("a"),wh=a("TFMPNetForSequenceClassification"),Ph=a(" forward method, overrides the "),Qa=n("code"),Nh=a("__call__"),yh=a(" special method."),Fh=m(),T(Bo.$$.fragment),zh=m(),T(Vo.$$.fragment),Eh=m(),T(Ko.$$.fragment),el=m(),Xt=n("h2"),Xo=n("a"),Ha=n("span"),T(Es.$$.fragment),qh=m(),Ra=n("span"),xh=a("TFMPNetForMultipleChoice"),tl=m(),Ce=n("div"),T(qs.$$.fragment),Ch=m(),Ua=n("p"),jh=a(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Lh=m(),xs=n("p"),Ah=a("This model inherits from "),yr=n("a"),Oh=a("TFPreTrainedModel"),Ih=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh=m(),Cs=n("p"),Dh=a("This model is also a "),js=n("a"),Wh=a("tf.keras.Model"),Qh=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh=m(),T(Jo.$$.fragment),Rh=m(),ot=n("div"),T(Ls.$$.fragment),Uh=m(),Jt=n("p"),Bh=a("The "),Fr=n("a"),Vh=a("TFMPNetForMultipleChoice"),Kh=a(" forward method, overrides the "),Ba=n("code"),Xh=a("__call__"),Jh=a(" special method."),Gh=m(),T(Go.$$.fragment),Yh=m(),T(Yo.$$.fragment),ol=m(),Gt=n("h2"),Zo=n("a"),Va=n("span"),T(As.$$.fragment),Zh=m(),Ka=n("span"),ef=a("TFMPNetForTokenClassification"),nl=m(),je=n("div"),T(Os.$$.fragment),tf=m(),Xa=n("p"),of=a(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nf=m(),Is=n("p"),sf=a("This model inherits from "),zr=n("a"),rf=a("TFPreTrainedModel"),af=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lf=m(),Ss=n("p"),df=a("This model is also a "),Ds=n("a"),cf=a("tf.keras.Model"),pf=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mf=m(),T(en.$$.fragment),hf=m(),Ke=n("div"),T(Ws.$$.fragment),ff=m(),Yt=n("p"),uf=a("The "),Er=n("a"),gf=a("TFMPNetForTokenClassification"),_f=a(" forward method, overrides the "),Ja=n("code"),kf=a("__call__"),bf=a(" special method."),vf=m(),T(tn.$$.fragment),Tf=m(),T(on.$$.fragment),Mf=m(),T(nn.$$.fragment),sl=m(),Zt=n("h2"),sn=n("a"),Ga=n("span"),T(Qs.$$.fragment),$f=m(),Ya=n("span"),wf=a("TFMPNetForQuestionAnswering"),rl=m(),Le=n("div"),T(Hs.$$.fragment),Pf=m(),eo=n("p"),Nf=a(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Za=n("code"),yf=a("span start logits"),Ff=a(" and "),ei=n("code"),zf=a("span end logits"),Ef=a(")."),qf=m(),Rs=n("p"),xf=a("This model inherits from "),qr=n("a"),Cf=a("TFPreTrainedModel"),jf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf=m(),Us=n("p"),Af=a("This model is also a "),Bs=n("a"),Of=a("tf.keras.Model"),If=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sf=m(),T(rn.$$.fragment),Df=m(),Xe=n("div"),T(Vs.$$.fragment),Wf=m(),to=n("p"),Qf=a("The "),xr=n("a"),Hf=a("TFMPNetForQuestionAnswering"),Rf=a(" forward method, overrides the "),ti=n("code"),Uf=a("__call__"),Bf=a(" special method."),Vf=m(),T(an.$$.fragment),Kf=m(),T(ln.$$.fragment),Xf=m(),T(dn.$$.fragment),this.h()},l(o){const k=e_('[data-svelte="svelte-1phssyn"]',document.head);l=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var Ks=r(c);p=s(Ks,"A",{id:!0,class:!0,href:!0});var oi=r(p);b=s(oi,"SPAN",{});var ni=r(b);M(d.$$.fragment,ni),ni.forEach(t),oi.forEach(t),f=h(Ks),z=s(Ks,"SPAN",{});var si=r(z);le=i(si,"MPNet"),si.forEach(t),Ks.forEach(t),B=h(o),E=s(o,"H2",{class:!0});var Xs=r(E);X=s(Xs,"A",{id:!0,class:!0,href:!0});var ri=r(X);D=s(ri,"SPAN",{});var ai=r(D);M(G.$$.fragment,ai),ai.forEach(t),ri.forEach(t),de=h(Xs),W=s(Xs,"SPAN",{});var ii=r(W);ce=i(ii,"Overview"),ii.forEach(t),Xs.forEach(t),se=h(o),U=s(o,"P",{});var Js=r(U);O=i(Js,"The MPNet model was proposed in "),Y=s(Js,"A",{href:!0,rel:!0});var li=r(Y);V=i(li,"MPNet: Masked and Permuted Pre-training for Language Understanding"),li.forEach(t),q=i(Js," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),Js.forEach(t),x=h(o),Z=s(o,"P",{});var di=r(Z);H=i(di,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),di.forEach(t),re=h(o),ee=s(o,"P",{});var ci=r(ee);R=i(ci,"The abstract from the paper is the following:"),ci.forEach(t),ae=h(o),te=s(o,"P",{});var pi=r(te);C=s(pi,"EM",{});var mi=r(C);pe=i(mi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),mi.forEach(t),pi.forEach(t),Q=h(o),oe=s(o,"P",{});var hi=r(oe);me=i(hi,"Tips:"),hi.forEach(t),L=h(o),ne=s(o,"UL",{});var fi=r(ne);j=s(fi,"LI",{});var ct=r(j);he=i(ct,"MPNet doesn\u2019t have "),u=s(ct,"CODE",{});var ui=r(u);F=i(ui,"token_type_ids"),ui.forEach(t),K=i(ct,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=s(ct,"CODE",{});var gi=r(_e);Me=i(gi,"tokenizer.sep_token"),gi.forEach(t),I=i(ct," (or "),ke=s(ct,"CODE",{});var _i=r(ke);$e=i(_i,"[sep]"),_i.forEach(t),we=i(ct,")."),ct.forEach(t),fi.forEach(t),A=h(o),S=s(o,"P",{});var Gs=r(S);Pe=i(Gs,"The original code can be found "),ge=s(Gs,"A",{href:!0,rel:!0});var ki=r(ge);fe=i(ki,"here"),ki.forEach(t),Ne=i(Gs,"."),Gs.forEach(t),ie=h(o),ue=s(o,"H2",{class:!0});var Ys=r(ue);no=s(Ys,"A",{id:!0,class:!0,href:!0});var bi=r(no);Kr=s(bi,"SPAN",{});var vi=r(Kr);M(un.$$.fragment,vi),vi.forEach(t),bi.forEach(t),Gl=h(Ys),Xr=s(Ys,"SPAN",{});var Ti=r(Xr);Yl=i(Ti,"MPNetConfig"),Ti.forEach(t),Ys.forEach(t),qi=h(o),Ge=s(o,"DIV",{class:!0});var pt=r(Ge);M(gn.$$.fragment,pt),Zl=h(pt),dt=s(pt,"P",{});var mt=r(dt);ed=i(mt,"This is the configuration class to store the configuration of a "),tr=s(mt,"A",{href:!0});var Mi=r(tr);td=i(Mi,"MPNetModel"),Mi.forEach(t),od=i(mt," or a "),or=s(mt,"A",{href:!0});var $i=r(or);nd=i($i,"TFMPNetModel"),$i.forEach(t),sd=i(mt,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),_n=s(mt,"A",{href:!0,rel:!0});var wi=r(_n);rd=i(wi,"microsoft/mpnet-base"),wi.forEach(t),ad=i(mt," architecture."),mt.forEach(t),id=h(pt),Nt=s(pt,"P",{});var oo=r(Nt);ld=i(oo,"Configuration objects inherit from "),nr=s(oo,"A",{href:!0});var Pi=r(nr);dd=i(Pi,"PretrainedConfig"),Pi.forEach(t),cd=i(oo,` and can be used to control the model outputs. Read the
documentation from `),sr=s(oo,"A",{href:!0});var Ni=r(sr);pd=i(Ni,"PretrainedConfig"),Ni.forEach(t),md=i(oo," for more information."),oo.forEach(t),hd=h(pt),M(so.$$.fragment,pt),pt.forEach(t),xi=h(o),yt=s(o,"H2",{class:!0});var Zs=r(yt);ro=s(Zs,"A",{id:!0,class:!0,href:!0});var yi=r(ro);Jr=s(yi,"SPAN",{});var Fi=r(Jr);M(kn.$$.fragment,Fi),Fi.forEach(t),yi.forEach(t),fd=h(Zs),Gr=s(Zs,"SPAN",{});var zi=r(Gr);ud=i(zi,"MPNetTokenizer"),zi.forEach(t),Zs.forEach(t),Ci=h(o),ze=s(o,"DIV",{class:!0});var Qe=r(ze);M(bn.$$.fragment,Qe),gd=h(Qe),vn=s(Qe,"P",{});var er=r(vn);_d=i(er,"This tokenizer inherits from "),rr=s(er,"A",{href:!0});var Ei=r(rr);kd=i(Ei,"BertTokenizer"),Ei.forEach(t),bd=i(er,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),er.forEach(t),vd=h(Qe),ht=s(Qe,"DIV",{class:!0});var Cr=r(ht);M(Tn.$$.fragment,Cr),Td=h(Cr),Yr=s(Cr,"P",{});var Yf=r(Yr);Md=i(Yf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Yf.forEach(t),$d=h(Cr),Mn=s(Cr,"UL",{});var il=r(Mn);ar=s(il,"LI",{});var Jf=r(ar);wd=i(Jf,"single sequence: "),Zr=s(Jf,"CODE",{});var Zf=r(Zr);Pd=i(Zf,"<s> X </s>"),Zf.forEach(t),Jf.forEach(t),Nd=h(il),ir=s(il,"LI",{});var Gf=r(ir);yd=i(Gf,"pair of sequences: "),ea=s(Gf,"CODE",{});var eu=r(ea);Fd=i(eu,"<s> A </s></s> B </s>"),eu.forEach(t),Gf.forEach(t),il.forEach(t),Cr.forEach(t),zd=h(Qe),ao=s(Qe,"DIV",{class:!0});var ll=r(ao);M($n.$$.fragment,ll),Ed=h(ll),wn=s(ll,"P",{});var dl=r(wn);qd=i(dl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ta=s(dl,"CODE",{});var tu=r(ta);xd=i(tu,"prepare_for_model"),tu.forEach(t),Cd=i(dl," methods."),dl.forEach(t),ll.forEach(t),jd=h(Qe),io=s(Qe,"DIV",{class:!0});var cl=r(io);M(Pn.$$.fragment,cl),Ld=h(cl),oa=s(cl,"P",{});var ou=r(oa);Ad=i(ou,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),ou.forEach(t),cl.forEach(t),Od=h(Qe),lr=s(Qe,"DIV",{class:!0});var nu=r(lr);M(Nn.$$.fragment,nu),nu.forEach(t),Qe.forEach(t),ji=h(o),Ft=s(o,"H2",{class:!0});var pl=r(Ft);lo=s(pl,"A",{id:!0,class:!0,href:!0});var su=r(lo);na=s(su,"SPAN",{});var ru=r(na);M(yn.$$.fragment,ru),ru.forEach(t),su.forEach(t),Id=h(pl),sa=s(pl,"SPAN",{});var au=r(sa);Sd=i(au,"MPNetTokenizerFast"),au.forEach(t),pl.forEach(t),Li=h(o),Ye=s(o,"DIV",{class:!0});var cn=r(Ye);M(Fn.$$.fragment,cn),Dd=h(cn),zn=s(cn,"P",{});var ml=r(zn);Wd=i(ml,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),ra=s(ml,"EM",{});var iu=r(ra);Qd=i(iu,"tokenizers"),iu.forEach(t),Hd=i(ml," library). Based on WordPiece."),ml.forEach(t),Rd=h(cn),En=s(cn,"P",{});var hl=r(En);Ud=i(hl,"This tokenizer inherits from "),dr=s(hl,"A",{href:!0});var lu=r(dr);Bd=i(lu,"PreTrainedTokenizerFast"),lu.forEach(t),Vd=i(hl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hl.forEach(t),Kd=h(cn),co=s(cn,"DIV",{class:!0});var fl=r(co);M(qn.$$.fragment,fl),Xd=h(fl),aa=s(fl,"P",{});var du=r(aa);Jd=i(du,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),du.forEach(t),fl.forEach(t),cn.forEach(t),Ai=h(o),zt=s(o,"H2",{class:!0});var ul=r(zt);po=s(ul,"A",{id:!0,class:!0,href:!0});var cu=r(po);ia=s(cu,"SPAN",{});var pu=r(ia);M(xn.$$.fragment,pu),pu.forEach(t),cu.forEach(t),Gd=h(ul),la=s(ul,"SPAN",{});var mu=r(la);Yd=i(mu,"MPNetModel"),mu.forEach(t),ul.forEach(t),Oi=h(o),Oe=s(o,"DIV",{class:!0});var ft=r(Oe);M(Cn.$$.fragment,ft),Zd=h(ft),da=s(ft,"P",{});var hu=r(da);ec=i(hu,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),hu.forEach(t),tc=h(ft),jn=s(ft,"P",{});var gl=r(jn);oc=i(gl,"This model inherits from "),cr=s(gl,"A",{href:!0});var fu=r(cr);nc=i(fu,"PreTrainedModel"),fu.forEach(t),sc=i(gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl.forEach(t),rc=h(ft),Ln=s(ft,"P",{});var _l=r(Ln);ac=i(_l,"This model is also a PyTorch "),An=s(_l,"A",{href:!0,rel:!0});var uu=r(An);ic=i(uu,"torch.nn.Module"),uu.forEach(t),lc=i(_l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_l.forEach(t),dc=h(ft),Ze=s(ft,"DIV",{class:!0});var pn=r(Ze);M(On.$$.fragment,pn),cc=h(pn),Et=s(pn,"P",{});var jr=r(Et);pc=i(jr,"The "),pr=s(jr,"A",{href:!0});var gu=r(pr);mc=i(gu,"MPNetModel"),gu.forEach(t),hc=i(jr," forward method, overrides the "),ca=s(jr,"CODE",{});var _u=r(ca);fc=i(_u,"__call__"),_u.forEach(t),uc=i(jr," special method."),jr.forEach(t),gc=h(pn),M(mo.$$.fragment,pn),_c=h(pn),M(ho.$$.fragment,pn),pn.forEach(t),ft.forEach(t),Ii=h(o),qt=s(o,"H2",{class:!0});var kl=r(qt);fo=s(kl,"A",{id:!0,class:!0,href:!0});var ku=r(fo);pa=s(ku,"SPAN",{});var bu=r(pa);M(In.$$.fragment,bu),bu.forEach(t),ku.forEach(t),kc=h(kl),ma=s(kl,"SPAN",{});var vu=r(ma);bc=i(vu,"MPNetForMaskedLM"),vu.forEach(t),kl.forEach(t),Si=h(o),xt=s(o,"DIV",{class:!0});var bl=r(xt);M(Sn.$$.fragment,bl),vc=h(bl),He=s(bl,"DIV",{class:!0});var ut=r(He);M(Dn.$$.fragment,ut),Tc=h(ut),Ct=s(ut,"P",{});var Lr=r(Ct);Mc=i(Lr,"The "),mr=s(Lr,"A",{href:!0});var Tu=r(mr);$c=i(Tu,"MPNetForMaskedLM"),Tu.forEach(t),wc=i(Lr," forward method, overrides the "),ha=s(Lr,"CODE",{});var Mu=r(ha);Pc=i(Mu,"__call__"),Mu.forEach(t),Nc=i(Lr," special method."),Lr.forEach(t),yc=h(ut),M(uo.$$.fragment,ut),Fc=h(ut),M(go.$$.fragment,ut),zc=h(ut),M(_o.$$.fragment,ut),ut.forEach(t),bl.forEach(t),Di=h(o),jt=s(o,"H2",{class:!0});var vl=r(jt);ko=s(vl,"A",{id:!0,class:!0,href:!0});var $u=r(ko);fa=s($u,"SPAN",{});var wu=r(fa);M(Wn.$$.fragment,wu),wu.forEach(t),$u.forEach(t),Ec=h(vl),ua=s(vl,"SPAN",{});var Pu=r(ua);qc=i(Pu,"MPNetForSequenceClassification"),Pu.forEach(t),vl.forEach(t),Wi=h(o),Ie=s(o,"DIV",{class:!0});var gt=r(Ie);M(Qn.$$.fragment,gt),xc=h(gt),ga=s(gt,"P",{});var Nu=r(ga);Cc=i(Nu,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Nu.forEach(t),jc=h(gt),Hn=s(gt,"P",{});var Tl=r(Hn);Lc=i(Tl,"This model inherits from "),hr=s(Tl,"A",{href:!0});var yu=r(hr);Ac=i(yu,"PreTrainedModel"),yu.forEach(t),Oc=i(Tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl.forEach(t),Ic=h(gt),Rn=s(gt,"P",{});var Ml=r(Rn);Sc=i(Ml,"This model is also a PyTorch "),Un=s(Ml,"A",{href:!0,rel:!0});var Fu=r(Un);Dc=i(Fu,"torch.nn.Module"),Fu.forEach(t),Wc=i(Ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml.forEach(t),Qc=h(gt),ye=s(gt,"DIV",{class:!0});var Je=r(ye);M(Bn.$$.fragment,Je),Hc=h(Je),Lt=s(Je,"P",{});var Ar=r(Lt);Rc=i(Ar,"The "),fr=s(Ar,"A",{href:!0});var zu=r(fr);Uc=i(zu,"MPNetForSequenceClassification"),zu.forEach(t),Bc=i(Ar," forward method, overrides the "),_a=s(Ar,"CODE",{});var Eu=r(_a);Vc=i(Eu,"__call__"),Eu.forEach(t),Kc=i(Ar," special method."),Ar.forEach(t),Xc=h(Je),M(bo.$$.fragment,Je),Jc=h(Je),M(vo.$$.fragment,Je),Gc=h(Je),M(To.$$.fragment,Je),Yc=h(Je),M(Mo.$$.fragment,Je),Zc=h(Je),M($o.$$.fragment,Je),Je.forEach(t),gt.forEach(t),Qi=h(o),At=s(o,"H2",{class:!0});var $l=r(At);wo=s($l,"A",{id:!0,class:!0,href:!0});var qu=r(wo);ka=s(qu,"SPAN",{});var xu=r(ka);M(Vn.$$.fragment,xu),xu.forEach(t),qu.forEach(t),ep=h($l),ba=s($l,"SPAN",{});var Cu=r(ba);tp=i(Cu,"MPNetForMultipleChoice"),Cu.forEach(t),$l.forEach(t),Hi=h(o),Se=s(o,"DIV",{class:!0});var _t=r(Se);M(Kn.$$.fragment,_t),op=h(_t),va=s(_t,"P",{});var ju=r(va);np=i(ju,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ju.forEach(t),sp=h(_t),Xn=s(_t,"P",{});var wl=r(Xn);rp=i(wl,"This model inherits from "),ur=s(wl,"A",{href:!0});var Lu=r(ur);ap=i(Lu,"PreTrainedModel"),Lu.forEach(t),ip=i(wl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl.forEach(t),lp=h(_t),Jn=s(_t,"P",{});var Pl=r(Jn);dp=i(Pl,"This model is also a PyTorch "),Gn=s(Pl,"A",{href:!0,rel:!0});var Au=r(Gn);cp=i(Au,"torch.nn.Module"),Au.forEach(t),pp=i(Pl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pl.forEach(t),mp=h(_t),et=s(_t,"DIV",{class:!0});var mn=r(et);M(Yn.$$.fragment,mn),hp=h(mn),Ot=s(mn,"P",{});var Or=r(Ot);fp=i(Or,"The "),gr=s(Or,"A",{href:!0});var Ou=r(gr);up=i(Ou,"MPNetForMultipleChoice"),Ou.forEach(t),gp=i(Or," forward method, overrides the "),Ta=s(Or,"CODE",{});var Iu=r(Ta);_p=i(Iu,"__call__"),Iu.forEach(t),kp=i(Or," special method."),Or.forEach(t),bp=h(mn),M(Po.$$.fragment,mn),vp=h(mn),M(No.$$.fragment,mn),mn.forEach(t),_t.forEach(t),Ri=h(o),It=s(o,"H2",{class:!0});var Nl=r(It);yo=s(Nl,"A",{id:!0,class:!0,href:!0});var Su=r(yo);Ma=s(Su,"SPAN",{});var Du=r(Ma);M(Zn.$$.fragment,Du),Du.forEach(t),Su.forEach(t),Tp=h(Nl),$a=s(Nl,"SPAN",{});var Wu=r($a);Mp=i(Wu,"MPNetForTokenClassification"),Wu.forEach(t),Nl.forEach(t),Ui=h(o),De=s(o,"DIV",{class:!0});var kt=r(De);M(es.$$.fragment,kt),$p=h(kt),wa=s(kt,"P",{});var Qu=r(wa);wp=i(Qu,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qu.forEach(t),Pp=h(kt),ts=s(kt,"P",{});var yl=r(ts);Np=i(yl,"This model inherits from "),_r=s(yl,"A",{href:!0});var Hu=r(_r);yp=i(Hu,"PreTrainedModel"),Hu.forEach(t),Fp=i(yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl.forEach(t),zp=h(kt),os=s(kt,"P",{});var Fl=r(os);Ep=i(Fl,"This model is also a PyTorch "),ns=s(Fl,"A",{href:!0,rel:!0});var Ru=r(ns);qp=i(Ru,"torch.nn.Module"),Ru.forEach(t),xp=i(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),Cp=h(kt),Re=s(kt,"DIV",{class:!0});var bt=r(Re);M(ss.$$.fragment,bt),jp=h(bt),St=s(bt,"P",{});var Ir=r(St);Lp=i(Ir,"The "),kr=s(Ir,"A",{href:!0});var Uu=r(kr);Ap=i(Uu,"MPNetForTokenClassification"),Uu.forEach(t),Op=i(Ir," forward method, overrides the "),Pa=s(Ir,"CODE",{});var Bu=r(Pa);Ip=i(Bu,"__call__"),Bu.forEach(t),Sp=i(Ir," special method."),Ir.forEach(t),Dp=h(bt),M(Fo.$$.fragment,bt),Wp=h(bt),M(zo.$$.fragment,bt),Qp=h(bt),M(Eo.$$.fragment,bt),bt.forEach(t),kt.forEach(t),Bi=h(o),Dt=s(o,"H2",{class:!0});var zl=r(Dt);qo=s(zl,"A",{id:!0,class:!0,href:!0});var Vu=r(qo);Na=s(Vu,"SPAN",{});var Ku=r(Na);M(rs.$$.fragment,Ku),Ku.forEach(t),Vu.forEach(t),Hp=h(zl),ya=s(zl,"SPAN",{});var Xu=r(ya);Rp=i(Xu,"MPNetForQuestionAnswering"),Xu.forEach(t),zl.forEach(t),Vi=h(o),We=s(o,"DIV",{class:!0});var vt=r(We);M(as.$$.fragment,vt),Up=h(vt),Wt=s(vt,"P",{});var Sr=r(Wt);Bp=i(Sr,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Fa=s(Sr,"CODE",{});var Ju=r(Fa);Vp=i(Ju,"span start logits"),Ju.forEach(t),Kp=i(Sr," and "),za=s(Sr,"CODE",{});var Gu=r(za);Xp=i(Gu,"span end logits"),Gu.forEach(t),Jp=i(Sr,")."),Sr.forEach(t),Gp=h(vt),is=s(vt,"P",{});var El=r(is);Yp=i(El,"This model inherits from "),br=s(El,"A",{href:!0});var Yu=r(br);Zp=i(Yu,"PreTrainedModel"),Yu.forEach(t),em=i(El,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),El.forEach(t),tm=h(vt),ls=s(vt,"P",{});var ql=r(ls);om=i(ql,"This model is also a PyTorch "),ds=s(ql,"A",{href:!0,rel:!0});var Zu=r(ds);nm=i(Zu,"torch.nn.Module"),Zu.forEach(t),sm=i(ql,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ql.forEach(t),rm=h(vt),Ue=s(vt,"DIV",{class:!0});var Tt=r(Ue);M(cs.$$.fragment,Tt),am=h(Tt),Qt=s(Tt,"P",{});var Dr=r(Qt);im=i(Dr,"The "),vr=s(Dr,"A",{href:!0});var eg=r(vr);lm=i(eg,"MPNetForQuestionAnswering"),eg.forEach(t),dm=i(Dr," forward method, overrides the "),Ea=s(Dr,"CODE",{});var tg=r(Ea);cm=i(tg,"__call__"),tg.forEach(t),pm=i(Dr," special method."),Dr.forEach(t),mm=h(Tt),M(xo.$$.fragment,Tt),hm=h(Tt),M(Co.$$.fragment,Tt),fm=h(Tt),M(jo.$$.fragment,Tt),Tt.forEach(t),vt.forEach(t),Ki=h(o),Ht=s(o,"H2",{class:!0});var xl=r(Ht);Lo=s(xl,"A",{id:!0,class:!0,href:!0});var og=r(Lo);qa=s(og,"SPAN",{});var ng=r(qa);M(ps.$$.fragment,ng),ng.forEach(t),og.forEach(t),um=h(xl),xa=s(xl,"SPAN",{});var sg=r(xa);gm=i(sg,"TFMPNetModel"),sg.forEach(t),xl.forEach(t),Xi=h(o),Ee=s(o,"DIV",{class:!0});var nt=r(Ee);M(ms.$$.fragment,nt),_m=h(nt),Ca=s(nt,"P",{});var rg=r(Ca);km=i(rg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),rg.forEach(t),bm=h(nt),hs=s(nt,"P",{});var Cl=r(hs);vm=i(Cl,"This model inherits from "),Tr=s(Cl,"A",{href:!0});var ag=r(Tr);Tm=i(ag,"TFPreTrainedModel"),ag.forEach(t),Mm=i(Cl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl.forEach(t),$m=h(nt),fs=s(nt,"P",{});var jl=r(fs);wm=i(jl,"This model is also a "),us=s(jl,"A",{href:!0,rel:!0});var ig=r(us);Pm=i(ig,"tf.keras.Model"),ig.forEach(t),Nm=i(jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl.forEach(t),ym=h(nt),M(Ao.$$.fragment,nt),Fm=h(nt),tt=s(nt,"DIV",{class:!0});var hn=r(tt);M(gs.$$.fragment,hn),zm=h(hn),Rt=s(hn,"P",{});var Wr=r(Rt);Em=i(Wr,"The "),Mr=s(Wr,"A",{href:!0});var lg=r(Mr);qm=i(lg,"TFMPNetModel"),lg.forEach(t),xm=i(Wr," forward method, overrides the "),ja=s(Wr,"CODE",{});var dg=r(ja);Cm=i(dg,"__call__"),dg.forEach(t),jm=i(Wr," special method."),Wr.forEach(t),Lm=h(hn),M(Oo.$$.fragment,hn),Am=h(hn),M(Io.$$.fragment,hn),hn.forEach(t),nt.forEach(t),Ji=h(o),Ut=s(o,"H2",{class:!0});var Ll=r(Ut);So=s(Ll,"A",{id:!0,class:!0,href:!0});var cg=r(So);La=s(cg,"SPAN",{});var pg=r(La);M(_s.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Om=h(Ll),Aa=s(Ll,"SPAN",{});var mg=r(Aa);Im=i(mg,"TFMPNetForMaskedLM"),mg.forEach(t),Ll.forEach(t),Gi=h(o),qe=s(o,"DIV",{class:!0});var st=r(qe);M(ks.$$.fragment,st),Sm=h(st),bs=s(st,"P",{});var Al=r(bs);Dm=i(Al,"MPNet Model with a "),Oa=s(Al,"CODE",{});var hg=r(Oa);Wm=i(hg,"language modeling"),hg.forEach(t),Qm=i(Al," head on top."),Al.forEach(t),Hm=h(st),vs=s(st,"P",{});var Ol=r(vs);Rm=i(Ol,"This model inherits from "),$r=s(Ol,"A",{href:!0});var fg=r($r);Um=i(fg,"TFPreTrainedModel"),fg.forEach(t),Bm=i(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),Vm=h(st),Ts=s(st,"P",{});var Il=r(Ts);Km=i(Il,"This model is also a "),Ms=s(Il,"A",{href:!0,rel:!0});var ug=r(Ms);Xm=i(ug,"tf.keras.Model"),ug.forEach(t),Jm=i(Il,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Il.forEach(t),Gm=h(st),M(Do.$$.fragment,st),Ym=h(st),Be=s(st,"DIV",{class:!0});var Mt=r(Be);M($s.$$.fragment,Mt),Zm=h(Mt),Bt=s(Mt,"P",{});var Qr=r(Bt);eh=i(Qr,"The "),wr=s(Qr,"A",{href:!0});var gg=r(wr);th=i(gg,"TFMPNetForMaskedLM"),gg.forEach(t),oh=i(Qr," forward method, overrides the "),Ia=s(Qr,"CODE",{});var _g=r(Ia);nh=i(_g,"__call__"),_g.forEach(t),sh=i(Qr," special method."),Qr.forEach(t),rh=h(Mt),M(Wo.$$.fragment,Mt),ah=h(Mt),M(Qo.$$.fragment,Mt),ih=h(Mt),M(Ho.$$.fragment,Mt),Mt.forEach(t),st.forEach(t),Yi=h(o),Vt=s(o,"H2",{class:!0});var Sl=r(Vt);Ro=s(Sl,"A",{id:!0,class:!0,href:!0});var kg=r(Ro);Sa=s(kg,"SPAN",{});var bg=r(Sa);M(ws.$$.fragment,bg),bg.forEach(t),kg.forEach(t),lh=h(Sl),Da=s(Sl,"SPAN",{});var vg=r(Da);dh=i(vg,"TFMPNetForSequenceClassification"),vg.forEach(t),Sl.forEach(t),Zi=h(o),xe=s(o,"DIV",{class:!0});var rt=r(xe);M(Ps.$$.fragment,rt),ch=h(rt),Wa=s(rt,"P",{});var Tg=r(Wa);ph=i(Tg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Tg.forEach(t),mh=h(rt),Ns=s(rt,"P",{});var Dl=r(Ns);hh=i(Dl,"This model inherits from "),Pr=s(Dl,"A",{href:!0});var Mg=r(Pr);fh=i(Mg,"TFPreTrainedModel"),Mg.forEach(t),uh=i(Dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl.forEach(t),gh=h(rt),ys=s(rt,"P",{});var Wl=r(ys);_h=i(Wl,"This model is also a "),Fs=s(Wl,"A",{href:!0,rel:!0});var $g=r(Fs);kh=i($g,"tf.keras.Model"),$g.forEach(t),bh=i(Wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl.forEach(t),vh=h(rt),M(Uo.$$.fragment,rt),Th=h(rt),Ve=s(rt,"DIV",{class:!0});var $t=r(Ve);M(zs.$$.fragment,$t),Mh=h($t),Kt=s($t,"P",{});var Hr=r(Kt);$h=i(Hr,"The "),Nr=s(Hr,"A",{href:!0});var wg=r(Nr);wh=i(wg,"TFMPNetForSequenceClassification"),wg.forEach(t),Ph=i(Hr," forward method, overrides the "),Qa=s(Hr,"CODE",{});var Pg=r(Qa);Nh=i(Pg,"__call__"),Pg.forEach(t),yh=i(Hr," special method."),Hr.forEach(t),Fh=h($t),M(Bo.$$.fragment,$t),zh=h($t),M(Vo.$$.fragment,$t),Eh=h($t),M(Ko.$$.fragment,$t),$t.forEach(t),rt.forEach(t),el=h(o),Xt=s(o,"H2",{class:!0});var Ql=r(Xt);Xo=s(Ql,"A",{id:!0,class:!0,href:!0});var Ng=r(Xo);Ha=s(Ng,"SPAN",{});var yg=r(Ha);M(Es.$$.fragment,yg),yg.forEach(t),Ng.forEach(t),qh=h(Ql),Ra=s(Ql,"SPAN",{});var Fg=r(Ra);xh=i(Fg,"TFMPNetForMultipleChoice"),Fg.forEach(t),Ql.forEach(t),tl=h(o),Ce=s(o,"DIV",{class:!0});var at=r(Ce);M(qs.$$.fragment,at),Ch=h(at),Ua=s(at,"P",{});var zg=r(Ua);jh=i(zg,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zg.forEach(t),Lh=h(at),xs=s(at,"P",{});var Hl=r(xs);Ah=i(Hl,"This model inherits from "),yr=s(Hl,"A",{href:!0});var Eg=r(yr);Oh=i(Eg,"TFPreTrainedModel"),Eg.forEach(t),Ih=i(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Sh=h(at),Cs=s(at,"P",{});var Rl=r(Cs);Dh=i(Rl,"This model is also a "),js=s(Rl,"A",{href:!0,rel:!0});var qg=r(js);Wh=i(qg,"tf.keras.Model"),qg.forEach(t),Qh=i(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),Hh=h(at),M(Jo.$$.fragment,at),Rh=h(at),ot=s(at,"DIV",{class:!0});var fn=r(ot);M(Ls.$$.fragment,fn),Uh=h(fn),Jt=s(fn,"P",{});var Rr=r(Jt);Bh=i(Rr,"The "),Fr=s(Rr,"A",{href:!0});var xg=r(Fr);Vh=i(xg,"TFMPNetForMultipleChoice"),xg.forEach(t),Kh=i(Rr," forward method, overrides the "),Ba=s(Rr,"CODE",{});var Cg=r(Ba);Xh=i(Cg,"__call__"),Cg.forEach(t),Jh=i(Rr," special method."),Rr.forEach(t),Gh=h(fn),M(Go.$$.fragment,fn),Yh=h(fn),M(Yo.$$.fragment,fn),fn.forEach(t),at.forEach(t),ol=h(o),Gt=s(o,"H2",{class:!0});var Ul=r(Gt);Zo=s(Ul,"A",{id:!0,class:!0,href:!0});var jg=r(Zo);Va=s(jg,"SPAN",{});var Lg=r(Va);M(As.$$.fragment,Lg),Lg.forEach(t),jg.forEach(t),Zh=h(Ul),Ka=s(Ul,"SPAN",{});var Ag=r(Ka);ef=i(Ag,"TFMPNetForTokenClassification"),Ag.forEach(t),Ul.forEach(t),nl=h(o),je=s(o,"DIV",{class:!0});var it=r(je);M(Os.$$.fragment,it),tf=h(it),Xa=s(it,"P",{});var Og=r(Xa);of=i(Og,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Og.forEach(t),nf=h(it),Is=s(it,"P",{});var Bl=r(Is);sf=i(Bl,"This model inherits from "),zr=s(Bl,"A",{href:!0});var Ig=r(zr);rf=i(Ig,"TFPreTrainedModel"),Ig.forEach(t),af=i(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),lf=h(it),Ss=s(it,"P",{});var Vl=r(Ss);df=i(Vl,"This model is also a "),Ds=s(Vl,"A",{href:!0,rel:!0});var Sg=r(Ds);cf=i(Sg,"tf.keras.Model"),Sg.forEach(t),pf=i(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),mf=h(it),M(en.$$.fragment,it),hf=h(it),Ke=s(it,"DIV",{class:!0});var wt=r(Ke);M(Ws.$$.fragment,wt),ff=h(wt),Yt=s(wt,"P",{});var Ur=r(Yt);uf=i(Ur,"The "),Er=s(Ur,"A",{href:!0});var Dg=r(Er);gf=i(Dg,"TFMPNetForTokenClassification"),Dg.forEach(t),_f=i(Ur," forward method, overrides the "),Ja=s(Ur,"CODE",{});var Wg=r(Ja);kf=i(Wg,"__call__"),Wg.forEach(t),bf=i(Ur," special method."),Ur.forEach(t),vf=h(wt),M(tn.$$.fragment,wt),Tf=h(wt),M(on.$$.fragment,wt),Mf=h(wt),M(nn.$$.fragment,wt),wt.forEach(t),it.forEach(t),sl=h(o),Zt=s(o,"H2",{class:!0});var Kl=r(Zt);sn=s(Kl,"A",{id:!0,class:!0,href:!0});var Qg=r(sn);Ga=s(Qg,"SPAN",{});var Hg=r(Ga);M(Qs.$$.fragment,Hg),Hg.forEach(t),Qg.forEach(t),$f=h(Kl),Ya=s(Kl,"SPAN",{});var Rg=r(Ya);wf=i(Rg,"TFMPNetForQuestionAnswering"),Rg.forEach(t),Kl.forEach(t),rl=h(o),Le=s(o,"DIV",{class:!0});var lt=r(Le);M(Hs.$$.fragment,lt),Pf=h(lt),eo=s(lt,"P",{});var Br=r(eo);Nf=i(Br,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Za=s(Br,"CODE",{});var Ug=r(Za);yf=i(Ug,"span start logits"),Ug.forEach(t),Ff=i(Br," and "),ei=s(Br,"CODE",{});var Bg=r(ei);zf=i(Bg,"span end logits"),Bg.forEach(t),Ef=i(Br,")."),Br.forEach(t),qf=h(lt),Rs=s(lt,"P",{});var Xl=r(Rs);xf=i(Xl,"This model inherits from "),qr=s(Xl,"A",{href:!0});var Vg=r(qr);Cf=i(Vg,"TFPreTrainedModel"),Vg.forEach(t),jf=i(Xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl.forEach(t),Lf=h(lt),Us=s(lt,"P",{});var Jl=r(Us);Af=i(Jl,"This model is also a "),Bs=s(Jl,"A",{href:!0,rel:!0});var Kg=r(Bs);Of=i(Kg,"tf.keras.Model"),Kg.forEach(t),If=i(Jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jl.forEach(t),Sf=h(lt),M(rn.$$.fragment,lt),Df=h(lt),Xe=s(lt,"DIV",{class:!0});var Pt=r(Xe);M(Vs.$$.fragment,Pt),Wf=h(Pt),to=s(Pt,"P",{});var Vr=r(to);Qf=i(Vr,"The "),xr=s(Vr,"A",{href:!0});var Xg=r(xr);Hf=i(Xg,"TFMPNetForQuestionAnswering"),Xg.forEach(t),Rf=i(Vr," forward method, overrides the "),ti=s(Vr,"CODE",{});var Jg=r(ti);Uf=i(Jg,"__call__"),Jg.forEach(t),Bf=i(Vr," special method."),Vr.forEach(t),Vf=h(Pt),M(an.$$.fragment,Pt),Kf=h(Pt),M(ln.$$.fragment,Pt),Xf=h(Pt),M(dn.$$.fragment,Pt),Pt.forEach(t),lt.forEach(t),this.h()},h(){v(l,"name","hf:doc:metadata"),v(l,"content",JSON.stringify(R_)),v(p,"id","mpnet"),v(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(p,"href","#mpnet"),v(c,"class","relative group"),v(X,"id","overview"),v(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(X,"href","#overview"),v(E,"class","relative group"),v(Y,"href","https://arxiv.org/abs/2004.09297"),v(Y,"rel","nofollow"),v(ge,"href","https://github.com/microsoft/MPNet"),v(ge,"rel","nofollow"),v(no,"id","transformers.MPNetConfig"),v(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(no,"href","#transformers.MPNetConfig"),v(ue,"class","relative group"),v(tr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetModel"),v(or,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetModel"),v(_n,"href","https://huggingface.co/microsoft/mpnet-base"),v(_n,"rel","nofollow"),v(nr,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),v(sr,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),v(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ro,"id","transformers.MPNetTokenizer"),v(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(ro,"href","#transformers.MPNetTokenizer"),v(yt,"class","relative group"),v(rr,"href","/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer"),v(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(lr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(lo,"id","transformers.MPNetTokenizerFast"),v(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(lo,"href","#transformers.MPNetTokenizerFast"),v(Ft,"class","relative group"),v(dr,"href","/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),v(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(po,"id","transformers.MPNetModel"),v(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(po,"href","#transformers.MPNetModel"),v(zt,"class","relative group"),v(cr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),v(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(An,"rel","nofollow"),v(pr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetModel"),v(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(fo,"id","transformers.MPNetForMaskedLM"),v(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(fo,"href","#transformers.MPNetForMaskedLM"),v(qt,"class","relative group"),v(mr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),v(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ko,"id","transformers.MPNetForSequenceClassification"),v(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(ko,"href","#transformers.MPNetForSequenceClassification"),v(jt,"class","relative group"),v(hr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),v(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(Un,"rel","nofollow"),v(fr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),v(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(wo,"id","transformers.MPNetForMultipleChoice"),v(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(wo,"href","#transformers.MPNetForMultipleChoice"),v(At,"class","relative group"),v(ur,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),v(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(Gn,"rel","nofollow"),v(gr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),v(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(yo,"id","transformers.MPNetForTokenClassification"),v(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(yo,"href","#transformers.MPNetForTokenClassification"),v(It,"class","relative group"),v(_r,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),v(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(ns,"rel","nofollow"),v(kr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),v(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qo,"id","transformers.MPNetForQuestionAnswering"),v(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(qo,"href","#transformers.MPNetForQuestionAnswering"),v(Dt,"class","relative group"),v(br,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),v(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(ds,"rel","nofollow"),v(vr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),v(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Lo,"id","transformers.TFMPNetModel"),v(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Lo,"href","#transformers.TFMPNetModel"),v(Ht,"class","relative group"),v(Tr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),v(us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(us,"rel","nofollow"),v(Mr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetModel"),v(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(So,"id","transformers.TFMPNetForMaskedLM"),v(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(So,"href","#transformers.TFMPNetForMaskedLM"),v(Ut,"class","relative group"),v($r,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),v(Ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Ms,"rel","nofollow"),v(wr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),v(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ro,"id","transformers.TFMPNetForSequenceClassification"),v(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Ro,"href","#transformers.TFMPNetForSequenceClassification"),v(Vt,"class","relative group"),v(Pr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),v(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Fs,"rel","nofollow"),v(Nr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),v(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Xo,"id","transformers.TFMPNetForMultipleChoice"),v(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Xo,"href","#transformers.TFMPNetForMultipleChoice"),v(Xt,"class","relative group"),v(yr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),v(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(js,"rel","nofollow"),v(Fr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),v(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Zo,"id","transformers.TFMPNetForTokenClassification"),v(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Zo,"href","#transformers.TFMPNetForTokenClassification"),v(Gt,"class","relative group"),v(zr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),v(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Ds,"rel","nofollow"),v(Er,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),v(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(sn,"id","transformers.TFMPNetForQuestionAnswering"),v(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(sn,"href","#transformers.TFMPNetForQuestionAnswering"),v(Zt,"class","relative group"),v(qr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),v(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Bs,"rel","nofollow"),v(xr,"href","/docs/transformers/pr_17196/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),v(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,l),_(o,g,k),_(o,c,k),e(c,p),e(p,b),$(d,b,null),e(c,f),e(c,z),e(z,le),_(o,B,k),_(o,E,k),e(E,X),e(X,D),$(G,D,null),e(E,de),e(E,W),e(W,ce),_(o,se,k),_(o,U,k),e(U,O),e(U,Y),e(Y,V),e(U,q),_(o,x,k),_(o,Z,k),e(Z,H),_(o,re,k),_(o,ee,k),e(ee,R),_(o,ae,k),_(o,te,k),e(te,C),e(C,pe),_(o,Q,k),_(o,oe,k),e(oe,me),_(o,L,k),_(o,ne,k),e(ne,j),e(j,he),e(j,u),e(u,F),e(j,K),e(j,_e),e(_e,Me),e(j,I),e(j,ke),e(ke,$e),e(j,we),_(o,A,k),_(o,S,k),e(S,Pe),e(S,ge),e(ge,fe),e(S,Ne),_(o,ie,k),_(o,ue,k),e(ue,no),e(no,Kr),$(un,Kr,null),e(ue,Gl),e(ue,Xr),e(Xr,Yl),_(o,qi,k),_(o,Ge,k),$(gn,Ge,null),e(Ge,Zl),e(Ge,dt),e(dt,ed),e(dt,tr),e(tr,td),e(dt,od),e(dt,or),e(or,nd),e(dt,sd),e(dt,_n),e(_n,rd),e(dt,ad),e(Ge,id),e(Ge,Nt),e(Nt,ld),e(Nt,nr),e(nr,dd),e(Nt,cd),e(Nt,sr),e(sr,pd),e(Nt,md),e(Ge,hd),$(so,Ge,null),_(o,xi,k),_(o,yt,k),e(yt,ro),e(ro,Jr),$(kn,Jr,null),e(yt,fd),e(yt,Gr),e(Gr,ud),_(o,Ci,k),_(o,ze,k),$(bn,ze,null),e(ze,gd),e(ze,vn),e(vn,_d),e(vn,rr),e(rr,kd),e(vn,bd),e(ze,vd),e(ze,ht),$(Tn,ht,null),e(ht,Td),e(ht,Yr),e(Yr,Md),e(ht,$d),e(ht,Mn),e(Mn,ar),e(ar,wd),e(ar,Zr),e(Zr,Pd),e(Mn,Nd),e(Mn,ir),e(ir,yd),e(ir,ea),e(ea,Fd),e(ze,zd),e(ze,ao),$($n,ao,null),e(ao,Ed),e(ao,wn),e(wn,qd),e(wn,ta),e(ta,xd),e(wn,Cd),e(ze,jd),e(ze,io),$(Pn,io,null),e(io,Ld),e(io,oa),e(oa,Ad),e(ze,Od),e(ze,lr),$(Nn,lr,null),_(o,ji,k),_(o,Ft,k),e(Ft,lo),e(lo,na),$(yn,na,null),e(Ft,Id),e(Ft,sa),e(sa,Sd),_(o,Li,k),_(o,Ye,k),$(Fn,Ye,null),e(Ye,Dd),e(Ye,zn),e(zn,Wd),e(zn,ra),e(ra,Qd),e(zn,Hd),e(Ye,Rd),e(Ye,En),e(En,Ud),e(En,dr),e(dr,Bd),e(En,Vd),e(Ye,Kd),e(Ye,co),$(qn,co,null),e(co,Xd),e(co,aa),e(aa,Jd),_(o,Ai,k),_(o,zt,k),e(zt,po),e(po,ia),$(xn,ia,null),e(zt,Gd),e(zt,la),e(la,Yd),_(o,Oi,k),_(o,Oe,k),$(Cn,Oe,null),e(Oe,Zd),e(Oe,da),e(da,ec),e(Oe,tc),e(Oe,jn),e(jn,oc),e(jn,cr),e(cr,nc),e(jn,sc),e(Oe,rc),e(Oe,Ln),e(Ln,ac),e(Ln,An),e(An,ic),e(Ln,lc),e(Oe,dc),e(Oe,Ze),$(On,Ze,null),e(Ze,cc),e(Ze,Et),e(Et,pc),e(Et,pr),e(pr,mc),e(Et,hc),e(Et,ca),e(ca,fc),e(Et,uc),e(Ze,gc),$(mo,Ze,null),e(Ze,_c),$(ho,Ze,null),_(o,Ii,k),_(o,qt,k),e(qt,fo),e(fo,pa),$(In,pa,null),e(qt,kc),e(qt,ma),e(ma,bc),_(o,Si,k),_(o,xt,k),$(Sn,xt,null),e(xt,vc),e(xt,He),$(Dn,He,null),e(He,Tc),e(He,Ct),e(Ct,Mc),e(Ct,mr),e(mr,$c),e(Ct,wc),e(Ct,ha),e(ha,Pc),e(Ct,Nc),e(He,yc),$(uo,He,null),e(He,Fc),$(go,He,null),e(He,zc),$(_o,He,null),_(o,Di,k),_(o,jt,k),e(jt,ko),e(ko,fa),$(Wn,fa,null),e(jt,Ec),e(jt,ua),e(ua,qc),_(o,Wi,k),_(o,Ie,k),$(Qn,Ie,null),e(Ie,xc),e(Ie,ga),e(ga,Cc),e(Ie,jc),e(Ie,Hn),e(Hn,Lc),e(Hn,hr),e(hr,Ac),e(Hn,Oc),e(Ie,Ic),e(Ie,Rn),e(Rn,Sc),e(Rn,Un),e(Un,Dc),e(Rn,Wc),e(Ie,Qc),e(Ie,ye),$(Bn,ye,null),e(ye,Hc),e(ye,Lt),e(Lt,Rc),e(Lt,fr),e(fr,Uc),e(Lt,Bc),e(Lt,_a),e(_a,Vc),e(Lt,Kc),e(ye,Xc),$(bo,ye,null),e(ye,Jc),$(vo,ye,null),e(ye,Gc),$(To,ye,null),e(ye,Yc),$(Mo,ye,null),e(ye,Zc),$($o,ye,null),_(o,Qi,k),_(o,At,k),e(At,wo),e(wo,ka),$(Vn,ka,null),e(At,ep),e(At,ba),e(ba,tp),_(o,Hi,k),_(o,Se,k),$(Kn,Se,null),e(Se,op),e(Se,va),e(va,np),e(Se,sp),e(Se,Xn),e(Xn,rp),e(Xn,ur),e(ur,ap),e(Xn,ip),e(Se,lp),e(Se,Jn),e(Jn,dp),e(Jn,Gn),e(Gn,cp),e(Jn,pp),e(Se,mp),e(Se,et),$(Yn,et,null),e(et,hp),e(et,Ot),e(Ot,fp),e(Ot,gr),e(gr,up),e(Ot,gp),e(Ot,Ta),e(Ta,_p),e(Ot,kp),e(et,bp),$(Po,et,null),e(et,vp),$(No,et,null),_(o,Ri,k),_(o,It,k),e(It,yo),e(yo,Ma),$(Zn,Ma,null),e(It,Tp),e(It,$a),e($a,Mp),_(o,Ui,k),_(o,De,k),$(es,De,null),e(De,$p),e(De,wa),e(wa,wp),e(De,Pp),e(De,ts),e(ts,Np),e(ts,_r),e(_r,yp),e(ts,Fp),e(De,zp),e(De,os),e(os,Ep),e(os,ns),e(ns,qp),e(os,xp),e(De,Cp),e(De,Re),$(ss,Re,null),e(Re,jp),e(Re,St),e(St,Lp),e(St,kr),e(kr,Ap),e(St,Op),e(St,Pa),e(Pa,Ip),e(St,Sp),e(Re,Dp),$(Fo,Re,null),e(Re,Wp),$(zo,Re,null),e(Re,Qp),$(Eo,Re,null),_(o,Bi,k),_(o,Dt,k),e(Dt,qo),e(qo,Na),$(rs,Na,null),e(Dt,Hp),e(Dt,ya),e(ya,Rp),_(o,Vi,k),_(o,We,k),$(as,We,null),e(We,Up),e(We,Wt),e(Wt,Bp),e(Wt,Fa),e(Fa,Vp),e(Wt,Kp),e(Wt,za),e(za,Xp),e(Wt,Jp),e(We,Gp),e(We,is),e(is,Yp),e(is,br),e(br,Zp),e(is,em),e(We,tm),e(We,ls),e(ls,om),e(ls,ds),e(ds,nm),e(ls,sm),e(We,rm),e(We,Ue),$(cs,Ue,null),e(Ue,am),e(Ue,Qt),e(Qt,im),e(Qt,vr),e(vr,lm),e(Qt,dm),e(Qt,Ea),e(Ea,cm),e(Qt,pm),e(Ue,mm),$(xo,Ue,null),e(Ue,hm),$(Co,Ue,null),e(Ue,fm),$(jo,Ue,null),_(o,Ki,k),_(o,Ht,k),e(Ht,Lo),e(Lo,qa),$(ps,qa,null),e(Ht,um),e(Ht,xa),e(xa,gm),_(o,Xi,k),_(o,Ee,k),$(ms,Ee,null),e(Ee,_m),e(Ee,Ca),e(Ca,km),e(Ee,bm),e(Ee,hs),e(hs,vm),e(hs,Tr),e(Tr,Tm),e(hs,Mm),e(Ee,$m),e(Ee,fs),e(fs,wm),e(fs,us),e(us,Pm),e(fs,Nm),e(Ee,ym),$(Ao,Ee,null),e(Ee,Fm),e(Ee,tt),$(gs,tt,null),e(tt,zm),e(tt,Rt),e(Rt,Em),e(Rt,Mr),e(Mr,qm),e(Rt,xm),e(Rt,ja),e(ja,Cm),e(Rt,jm),e(tt,Lm),$(Oo,tt,null),e(tt,Am),$(Io,tt,null),_(o,Ji,k),_(o,Ut,k),e(Ut,So),e(So,La),$(_s,La,null),e(Ut,Om),e(Ut,Aa),e(Aa,Im),_(o,Gi,k),_(o,qe,k),$(ks,qe,null),e(qe,Sm),e(qe,bs),e(bs,Dm),e(bs,Oa),e(Oa,Wm),e(bs,Qm),e(qe,Hm),e(qe,vs),e(vs,Rm),e(vs,$r),e($r,Um),e(vs,Bm),e(qe,Vm),e(qe,Ts),e(Ts,Km),e(Ts,Ms),e(Ms,Xm),e(Ts,Jm),e(qe,Gm),$(Do,qe,null),e(qe,Ym),e(qe,Be),$($s,Be,null),e(Be,Zm),e(Be,Bt),e(Bt,eh),e(Bt,wr),e(wr,th),e(Bt,oh),e(Bt,Ia),e(Ia,nh),e(Bt,sh),e(Be,rh),$(Wo,Be,null),e(Be,ah),$(Qo,Be,null),e(Be,ih),$(Ho,Be,null),_(o,Yi,k),_(o,Vt,k),e(Vt,Ro),e(Ro,Sa),$(ws,Sa,null),e(Vt,lh),e(Vt,Da),e(Da,dh),_(o,Zi,k),_(o,xe,k),$(Ps,xe,null),e(xe,ch),e(xe,Wa),e(Wa,ph),e(xe,mh),e(xe,Ns),e(Ns,hh),e(Ns,Pr),e(Pr,fh),e(Ns,uh),e(xe,gh),e(xe,ys),e(ys,_h),e(ys,Fs),e(Fs,kh),e(ys,bh),e(xe,vh),$(Uo,xe,null),e(xe,Th),e(xe,Ve),$(zs,Ve,null),e(Ve,Mh),e(Ve,Kt),e(Kt,$h),e(Kt,Nr),e(Nr,wh),e(Kt,Ph),e(Kt,Qa),e(Qa,Nh),e(Kt,yh),e(Ve,Fh),$(Bo,Ve,null),e(Ve,zh),$(Vo,Ve,null),e(Ve,Eh),$(Ko,Ve,null),_(o,el,k),_(o,Xt,k),e(Xt,Xo),e(Xo,Ha),$(Es,Ha,null),e(Xt,qh),e(Xt,Ra),e(Ra,xh),_(o,tl,k),_(o,Ce,k),$(qs,Ce,null),e(Ce,Ch),e(Ce,Ua),e(Ua,jh),e(Ce,Lh),e(Ce,xs),e(xs,Ah),e(xs,yr),e(yr,Oh),e(xs,Ih),e(Ce,Sh),e(Ce,Cs),e(Cs,Dh),e(Cs,js),e(js,Wh),e(Cs,Qh),e(Ce,Hh),$(Jo,Ce,null),e(Ce,Rh),e(Ce,ot),$(Ls,ot,null),e(ot,Uh),e(ot,Jt),e(Jt,Bh),e(Jt,Fr),e(Fr,Vh),e(Jt,Kh),e(Jt,Ba),e(Ba,Xh),e(Jt,Jh),e(ot,Gh),$(Go,ot,null),e(ot,Yh),$(Yo,ot,null),_(o,ol,k),_(o,Gt,k),e(Gt,Zo),e(Zo,Va),$(As,Va,null),e(Gt,Zh),e(Gt,Ka),e(Ka,ef),_(o,nl,k),_(o,je,k),$(Os,je,null),e(je,tf),e(je,Xa),e(Xa,of),e(je,nf),e(je,Is),e(Is,sf),e(Is,zr),e(zr,rf),e(Is,af),e(je,lf),e(je,Ss),e(Ss,df),e(Ss,Ds),e(Ds,cf),e(Ss,pf),e(je,mf),$(en,je,null),e(je,hf),e(je,Ke),$(Ws,Ke,null),e(Ke,ff),e(Ke,Yt),e(Yt,uf),e(Yt,Er),e(Er,gf),e(Yt,_f),e(Yt,Ja),e(Ja,kf),e(Yt,bf),e(Ke,vf),$(tn,Ke,null),e(Ke,Tf),$(on,Ke,null),e(Ke,Mf),$(nn,Ke,null),_(o,sl,k),_(o,Zt,k),e(Zt,sn),e(sn,Ga),$(Qs,Ga,null),e(Zt,$f),e(Zt,Ya),e(Ya,wf),_(o,rl,k),_(o,Le,k),$(Hs,Le,null),e(Le,Pf),e(Le,eo),e(eo,Nf),e(eo,Za),e(Za,yf),e(eo,Ff),e(eo,ei),e(ei,zf),e(eo,Ef),e(Le,qf),e(Le,Rs),e(Rs,xf),e(Rs,qr),e(qr,Cf),e(Rs,jf),e(Le,Lf),e(Le,Us),e(Us,Af),e(Us,Bs),e(Bs,Of),e(Us,If),e(Le,Sf),$(rn,Le,null),e(Le,Df),e(Le,Xe),$(Vs,Xe,null),e(Xe,Wf),e(Xe,to),e(to,Qf),e(to,xr),e(xr,Hf),e(to,Rf),e(to,ti),e(ti,Uf),e(to,Bf),e(Xe,Vf),$(an,Xe,null),e(Xe,Kf),$(ln,Xe,null),e(Xe,Xf),$(dn,Xe,null),al=!0},p(o,[k]){const Ks={};k&2&&(Ks.$$scope={dirty:k,ctx:o}),so.$set(Ks);const oi={};k&2&&(oi.$$scope={dirty:k,ctx:o}),mo.$set(oi);const ni={};k&2&&(ni.$$scope={dirty:k,ctx:o}),ho.$set(ni);const si={};k&2&&(si.$$scope={dirty:k,ctx:o}),uo.$set(si);const Xs={};k&2&&(Xs.$$scope={dirty:k,ctx:o}),go.$set(Xs);const ri={};k&2&&(ri.$$scope={dirty:k,ctx:o}),_o.$set(ri);const ai={};k&2&&(ai.$$scope={dirty:k,ctx:o}),bo.$set(ai);const ii={};k&2&&(ii.$$scope={dirty:k,ctx:o}),vo.$set(ii);const Js={};k&2&&(Js.$$scope={dirty:k,ctx:o}),To.$set(Js);const li={};k&2&&(li.$$scope={dirty:k,ctx:o}),Mo.$set(li);const di={};k&2&&(di.$$scope={dirty:k,ctx:o}),$o.$set(di);const ci={};k&2&&(ci.$$scope={dirty:k,ctx:o}),Po.$set(ci);const pi={};k&2&&(pi.$$scope={dirty:k,ctx:o}),No.$set(pi);const mi={};k&2&&(mi.$$scope={dirty:k,ctx:o}),Fo.$set(mi);const hi={};k&2&&(hi.$$scope={dirty:k,ctx:o}),zo.$set(hi);const fi={};k&2&&(fi.$$scope={dirty:k,ctx:o}),Eo.$set(fi);const ct={};k&2&&(ct.$$scope={dirty:k,ctx:o}),xo.$set(ct);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:o}),Co.$set(ui);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:o}),jo.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:o}),Ao.$set(_i);const Gs={};k&2&&(Gs.$$scope={dirty:k,ctx:o}),Oo.$set(Gs);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:o}),Io.$set(ki);const Ys={};k&2&&(Ys.$$scope={dirty:k,ctx:o}),Do.$set(Ys);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:o}),Wo.$set(bi);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:o}),Qo.$set(vi);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:o}),Ho.$set(Ti);const pt={};k&2&&(pt.$$scope={dirty:k,ctx:o}),Uo.$set(pt);const mt={};k&2&&(mt.$$scope={dirty:k,ctx:o}),Bo.$set(mt);const Mi={};k&2&&(Mi.$$scope={dirty:k,ctx:o}),Vo.$set(Mi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:o}),Ko.$set($i);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:o}),Jo.$set(wi);const oo={};k&2&&(oo.$$scope={dirty:k,ctx:o}),Go.$set(oo);const Pi={};k&2&&(Pi.$$scope={dirty:k,ctx:o}),Yo.$set(Pi);const Ni={};k&2&&(Ni.$$scope={dirty:k,ctx:o}),en.$set(Ni);const Zs={};k&2&&(Zs.$$scope={dirty:k,ctx:o}),tn.$set(Zs);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:o}),on.$set(yi);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),nn.$set(Fi);const zi={};k&2&&(zi.$$scope={dirty:k,ctx:o}),rn.$set(zi);const Qe={};k&2&&(Qe.$$scope={dirty:k,ctx:o}),an.$set(Qe);const er={};k&2&&(er.$$scope={dirty:k,ctx:o}),ln.$set(er);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),dn.$set(Ei)},i(o){al||(w(d.$$.fragment,o),w(G.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(so.$$.fragment,o),w(kn.$$.fragment,o),w(bn.$$.fragment,o),w(Tn.$$.fragment,o),w($n.$$.fragment,o),w(Pn.$$.fragment,o),w(Nn.$$.fragment,o),w(yn.$$.fragment,o),w(Fn.$$.fragment,o),w(qn.$$.fragment,o),w(xn.$$.fragment,o),w(Cn.$$.fragment,o),w(On.$$.fragment,o),w(mo.$$.fragment,o),w(ho.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(uo.$$.fragment,o),w(go.$$.fragment,o),w(_o.$$.fragment,o),w(Wn.$$.fragment,o),w(Qn.$$.fragment,o),w(Bn.$$.fragment,o),w(bo.$$.fragment,o),w(vo.$$.fragment,o),w(To.$$.fragment,o),w(Mo.$$.fragment,o),w($o.$$.fragment,o),w(Vn.$$.fragment,o),w(Kn.$$.fragment,o),w(Yn.$$.fragment,o),w(Po.$$.fragment,o),w(No.$$.fragment,o),w(Zn.$$.fragment,o),w(es.$$.fragment,o),w(ss.$$.fragment,o),w(Fo.$$.fragment,o),w(zo.$$.fragment,o),w(Eo.$$.fragment,o),w(rs.$$.fragment,o),w(as.$$.fragment,o),w(cs.$$.fragment,o),w(xo.$$.fragment,o),w(Co.$$.fragment,o),w(jo.$$.fragment,o),w(ps.$$.fragment,o),w(ms.$$.fragment,o),w(Ao.$$.fragment,o),w(gs.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(_s.$$.fragment,o),w(ks.$$.fragment,o),w(Do.$$.fragment,o),w($s.$$.fragment,o),w(Wo.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(ws.$$.fragment,o),w(Ps.$$.fragment,o),w(Uo.$$.fragment,o),w(zs.$$.fragment,o),w(Bo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w(Es.$$.fragment,o),w(qs.$$.fragment,o),w(Jo.$$.fragment,o),w(Ls.$$.fragment,o),w(Go.$$.fragment,o),w(Yo.$$.fragment,o),w(As.$$.fragment,o),w(Os.$$.fragment,o),w(en.$$.fragment,o),w(Ws.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(Qs.$$.fragment,o),w(Hs.$$.fragment,o),w(rn.$$.fragment,o),w(Vs.$$.fragment,o),w(an.$$.fragment,o),w(ln.$$.fragment,o),w(dn.$$.fragment,o),al=!0)},o(o){P(d.$$.fragment,o),P(G.$$.fragment,o),P(un.$$.fragment,o),P(gn.$$.fragment,o),P(so.$$.fragment,o),P(kn.$$.fragment,o),P(bn.$$.fragment,o),P(Tn.$$.fragment,o),P($n.$$.fragment,o),P(Pn.$$.fragment,o),P(Nn.$$.fragment,o),P(yn.$$.fragment,o),P(Fn.$$.fragment,o),P(qn.$$.fragment,o),P(xn.$$.fragment,o),P(Cn.$$.fragment,o),P(On.$$.fragment,o),P(mo.$$.fragment,o),P(ho.$$.fragment,o),P(In.$$.fragment,o),P(Sn.$$.fragment,o),P(Dn.$$.fragment,o),P(uo.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(Wn.$$.fragment,o),P(Qn.$$.fragment,o),P(Bn.$$.fragment,o),P(bo.$$.fragment,o),P(vo.$$.fragment,o),P(To.$$.fragment,o),P(Mo.$$.fragment,o),P($o.$$.fragment,o),P(Vn.$$.fragment,o),P(Kn.$$.fragment,o),P(Yn.$$.fragment,o),P(Po.$$.fragment,o),P(No.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ss.$$.fragment,o),P(Fo.$$.fragment,o),P(zo.$$.fragment,o),P(Eo.$$.fragment,o),P(rs.$$.fragment,o),P(as.$$.fragment,o),P(cs.$$.fragment,o),P(xo.$$.fragment,o),P(Co.$$.fragment,o),P(jo.$$.fragment,o),P(ps.$$.fragment,o),P(ms.$$.fragment,o),P(Ao.$$.fragment,o),P(gs.$$.fragment,o),P(Oo.$$.fragment,o),P(Io.$$.fragment,o),P(_s.$$.fragment,o),P(ks.$$.fragment,o),P(Do.$$.fragment,o),P($s.$$.fragment,o),P(Wo.$$.fragment,o),P(Qo.$$.fragment,o),P(Ho.$$.fragment,o),P(ws.$$.fragment,o),P(Ps.$$.fragment,o),P(Uo.$$.fragment,o),P(zs.$$.fragment,o),P(Bo.$$.fragment,o),P(Vo.$$.fragment,o),P(Ko.$$.fragment,o),P(Es.$$.fragment,o),P(qs.$$.fragment,o),P(Jo.$$.fragment,o),P(Ls.$$.fragment,o),P(Go.$$.fragment,o),P(Yo.$$.fragment,o),P(As.$$.fragment,o),P(Os.$$.fragment,o),P(en.$$.fragment,o),P(Ws.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(Qs.$$.fragment,o),P(Hs.$$.fragment,o),P(rn.$$.fragment,o),P(Vs.$$.fragment,o),P(an.$$.fragment,o),P(ln.$$.fragment,o),P(dn.$$.fragment,o),al=!1},d(o){t(l),o&&t(g),o&&t(c),N(d),o&&t(B),o&&t(E),N(G),o&&t(se),o&&t(U),o&&t(x),o&&t(Z),o&&t(re),o&&t(ee),o&&t(ae),o&&t(te),o&&t(Q),o&&t(oe),o&&t(L),o&&t(ne),o&&t(A),o&&t(S),o&&t(ie),o&&t(ue),N(un),o&&t(qi),o&&t(Ge),N(gn),N(so),o&&t(xi),o&&t(yt),N(kn),o&&t(Ci),o&&t(ze),N(bn),N(Tn),N($n),N(Pn),N(Nn),o&&t(ji),o&&t(Ft),N(yn),o&&t(Li),o&&t(Ye),N(Fn),N(qn),o&&t(Ai),o&&t(zt),N(xn),o&&t(Oi),o&&t(Oe),N(Cn),N(On),N(mo),N(ho),o&&t(Ii),o&&t(qt),N(In),o&&t(Si),o&&t(xt),N(Sn),N(Dn),N(uo),N(go),N(_o),o&&t(Di),o&&t(jt),N(Wn),o&&t(Wi),o&&t(Ie),N(Qn),N(Bn),N(bo),N(vo),N(To),N(Mo),N($o),o&&t(Qi),o&&t(At),N(Vn),o&&t(Hi),o&&t(Se),N(Kn),N(Yn),N(Po),N(No),o&&t(Ri),o&&t(It),N(Zn),o&&t(Ui),o&&t(De),N(es),N(ss),N(Fo),N(zo),N(Eo),o&&t(Bi),o&&t(Dt),N(rs),o&&t(Vi),o&&t(We),N(as),N(cs),N(xo),N(Co),N(jo),o&&t(Ki),o&&t(Ht),N(ps),o&&t(Xi),o&&t(Ee),N(ms),N(Ao),N(gs),N(Oo),N(Io),o&&t(Ji),o&&t(Ut),N(_s),o&&t(Gi),o&&t(qe),N(ks),N(Do),N($s),N(Wo),N(Qo),N(Ho),o&&t(Yi),o&&t(Vt),N(ws),o&&t(Zi),o&&t(xe),N(Ps),N(Uo),N(zs),N(Bo),N(Vo),N(Ko),o&&t(el),o&&t(Xt),N(Es),o&&t(tl),o&&t(Ce),N(qs),N(Jo),N(Ls),N(Go),N(Yo),o&&t(ol),o&&t(Gt),N(As),o&&t(nl),o&&t(je),N(Os),N(en),N(Ws),N(tn),N(on),N(nn),o&&t(sl),o&&t(Zt),N(Qs),o&&t(rl),o&&t(Le),N(Hs),N(rn),N(Vs),N(an),N(ln),N(dn)}}}const R_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function U_(y){return t_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Y_ extends Gg{constructor(l){super();Yg(this,l,U_,H_,Zg,{})}}export{Y_ as default,R_ as metadata};
