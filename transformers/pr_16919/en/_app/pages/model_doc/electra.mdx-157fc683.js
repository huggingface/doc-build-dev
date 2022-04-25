import{S as P9,i as A9,s as O9,e as n,k as c,w as y,t as a,M as L9,c as s,d as t,m as p,a as r,x as b,h as i,b as u,F as e,g as k,y as E,q as w,o as $,B as F,v as N9,L as de}from"../../chunks/vendor-6b77c823.js";import{T as Ee}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as ce}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $e}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as le}from"../../chunks/ExampleCodeBlock-5212b321.js";function I9(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraModel, ElectraConfig

# Initializing a ELECTRA electra-base-uncased style configuration
configuration = ElectraConfig()

# Initializing a model from the electra-base-uncased style configuration
model = ElectraModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraModel, ElectraConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ELECTRA electra-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ElectraConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the electra-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function S9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function D9(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraModel
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function W9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function U9(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForPreTraining
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
logits = model(input_ids).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function R9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function H9(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-base-generator")
config = ElectraConfig.from_pretrained("google/electra-base-generator")
config.is_decoder = True
model = ElectraForCausalLM.from_pretrained("google/electra-base-generator", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForCausalLM, ElectraConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = ElectraConfig.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Q9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function B9(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function V9(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function K9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function J9(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
from transformers import ElectraTokenizer, ElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function G9(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function X9(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
from transformers import ElectraTokenizer, ElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Y9(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Z9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function ez(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function tz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function oz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function nz(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function sz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function rz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForQuestionAnswering.from_pretrained("google/electra-small-discriminator")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function az(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function iz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function lz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function dz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function pz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function hz(x){let d,g,h,m,_;return m=new ce({props:{code:`import tensorflow as tf
from transformers import ElectraTokenizer, TFElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForPreTraining.from_pretrained("google/electra-small-discriminator")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute"))[None, :]  # Batch size 1
outputs = model(input_ids)
scores = outputs[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>))[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function mz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function fz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function uz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gz(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function _z(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function kz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Tz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function vz(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function yz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function bz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Ez(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function wz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function $z(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Fz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function xz(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Mz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function zz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function qz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForQuestionAnswering.from_pretrained("google/electra-small-discriminator")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Cz(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function jz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Pz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Az(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Oz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Lz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Nz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Iz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Sz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Dz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Wz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Uz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Rz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Hz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Qz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForQuestionAnswering.from_pretrained("google/electra-small-discriminator")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Bz(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve,v,z,Y,Fe,ze,N,xe,ye,qe,A,B,Ce,we,V,je,Me,Z,be,fc,br,dg,uc,cg,Qm,vt,Er,pg,Ht,hg,Kl,mg,fg,Jl,ug,gg,wr,_g,kg,Tg,go,vg,Gl,yg,bg,Xl,Eg,wg,$g,kn,Bm,_o,Tn,gc,$r,Fg,_c,xg,Vm,yt,Fr,Mg,kc,zg,qg,vn,Yl,Cg,jg,Zl,Pg,Ag,Og,xr,Lg,ed,Ng,Ig,Km,ko,yn,Tc,Mr,Sg,vc,Dg,Jm,bt,zr,Wg,qr,Ug,yc,Rg,Hg,Qg,bn,td,Bg,Vg,od,Kg,Jg,Gg,Cr,Xg,nd,Yg,Zg,Gm,To,En,bc,jr,e_,Ec,t_,Xm,vo,Pr,o_,Ar,n_,sd,s_,r_,Ym,yo,Or,a_,Lr,i_,rd,l_,d_,Zm,bo,wn,wc,Nr,c_,$c,p_,ef,Ze,Ir,h_,Fc,m_,f_,Sr,u_,ad,g_,__,k_,Dr,T_,Wr,v_,y_,b_,Et,Ur,E_,Eo,w_,id,$_,F_,xc,x_,M_,z_,$n,q_,Fn,tf,wo,xn,Mc,Rr,C_,zc,j_,of,He,Hr,P_,qc,A_,O_,Cc,L_,N_,Qr,I_,ld,S_,D_,W_,Br,U_,Vr,R_,H_,Q_,wt,Kr,B_,$o,V_,dd,K_,J_,jc,G_,X_,Y_,Mn,Z_,zn,nf,Fo,qn,Pc,Jr,ek,Ac,tk,sf,et,Gr,ok,Xr,nk,Oc,sk,rk,ak,Yr,ik,cd,lk,dk,ck,Zr,pk,ea,hk,mk,fk,$t,ta,uk,xo,gk,pd,_k,kk,Lc,Tk,vk,yk,Cn,bk,jn,rf,Mo,Pn,Nc,oa,Ek,Ic,wk,af,Qe,na,$k,Sc,Fk,xk,Dc,Mk,zk,sa,qk,hd,Ck,jk,Pk,ra,Ak,aa,Ok,Lk,Nk,st,ia,Ik,zo,Sk,md,Dk,Wk,Wc,Uk,Rk,Hk,An,Qk,On,Bk,Ln,lf,qo,Nn,Uc,la,Vk,Rc,Kk,df,tt,da,Jk,Hc,Gk,Xk,ca,Yk,fd,Zk,e1,t1,pa,o1,ha,n1,s1,r1,Re,ma,a1,Co,i1,ud,l1,d1,Qc,c1,p1,h1,In,m1,Sn,f1,Dn,u1,Wn,g1,Un,cf,jo,Rn,Bc,fa,_1,Vc,k1,pf,ot,ua,T1,Kc,v1,y1,ga,b1,gd,E1,w1,$1,_a,F1,ka,x1,M1,z1,Ft,Ta,q1,Po,C1,_d,j1,P1,Jc,A1,O1,L1,Hn,N1,Qn,hf,Ao,Bn,Gc,va,I1,Xc,S1,mf,Be,ya,D1,Yc,W1,U1,Zc,R1,H1,ba,Q1,kd,B1,V1,K1,Ea,J1,wa,G1,X1,Y1,rt,$a,Z1,Oo,eT,Td,tT,oT,ep,nT,sT,rT,Vn,aT,Kn,iT,Jn,ff,Lo,Gn,tp,Fa,lT,op,dT,uf,nt,xa,cT,No,pT,np,hT,mT,sp,fT,uT,gT,Ma,_T,vd,kT,TT,vT,za,yT,qa,bT,ET,wT,at,Ca,$T,Io,FT,yd,xT,MT,rp,zT,qT,CT,Xn,jT,Yn,PT,Zn,gf,So,es,ap,ja,AT,ip,OT,_f,Ve,Pa,LT,lp,NT,IT,Aa,ST,bd,DT,WT,UT,Oa,RT,La,HT,QT,BT,ts,VT,xt,Na,KT,Do,JT,Ed,GT,XT,dp,YT,ZT,ev,os,tv,ns,kf,Wo,ss,cp,Ia,ov,pp,nv,Tf,Oe,Sa,sv,hp,rv,av,mp,iv,lv,Da,dv,wd,cv,pv,hv,Wa,mv,Ua,fv,uv,gv,rs,_v,Mt,Ra,kv,Uo,Tv,$d,vv,yv,fp,bv,Ev,wv,as,$v,is,vf,Ro,ls,up,Ha,Fv,gp,xv,yf,Le,Qa,Mv,_p,zv,qv,kp,Cv,jv,Ba,Pv,Fd,Av,Ov,Lv,Va,Nv,Ka,Iv,Sv,Dv,ds,Wv,it,Ja,Uv,Ho,Rv,xd,Hv,Qv,Tp,Bv,Vv,Kv,cs,Jv,ps,Gv,hs,bf,Qo,ms,vp,Ga,Xv,yp,Yv,Ef,Ke,Xa,Zv,bp,ey,ty,Ya,oy,Md,ny,sy,ry,Za,ay,ei,iy,ly,dy,fs,cy,lt,ti,py,Bo,hy,zd,my,fy,Ep,uy,gy,_y,us,ky,gs,Ty,_s,wf,Vo,ks,wp,oi,vy,$p,yy,$f,Je,ni,by,Fp,Ey,wy,si,$y,qd,Fy,xy,My,ri,zy,ai,qy,Cy,jy,Ts,Py,zt,ii,Ay,Ko,Oy,Cd,Ly,Ny,xp,Iy,Sy,Dy,vs,Wy,ys,Ff,Jo,bs,Mp,li,Uy,zp,Ry,xf,Ne,di,Hy,qp,Qy,By,Cp,Vy,Ky,ci,Jy,jd,Gy,Xy,Yy,pi,Zy,hi,eb,tb,ob,Es,nb,dt,mi,sb,Go,rb,Pd,ab,ib,jp,lb,db,cb,ws,pb,$s,hb,Fs,Mf,Xo,xs,Pp,fi,mb,Ap,fb,zf,Ge,ui,ub,Yo,gb,Op,_b,kb,Lp,Tb,vb,yb,gi,bb,Ad,Eb,wb,$b,_i,Fb,ki,xb,Mb,zb,Ms,qb,ct,Ti,Cb,Zo,jb,Od,Pb,Ab,Np,Ob,Lb,Nb,zs,Ib,qs,Sb,Cs,qf,en,js,Ip,vi,Db,Sp,Wb,Cf,Ie,yi,Ub,Dp,Rb,Hb,bi,Qb,Ld,Bb,Vb,Kb,Ei,Jb,wi,Gb,Xb,Yb,Wp,Zb,eE,Qt,Up,$i,tE,oE,Rp,Fi,nE,sE,Hp,xi,rE,aE,Qp,Mi,iE,lE,qt,zi,dE,tn,cE,Bp,pE,hE,Vp,mE,fE,uE,Ps,gE,As,jf,on,Os,Kp,qi,_E,Jp,kE,Pf,Pe,Ci,TE,Gp,vE,yE,Xp,bE,EE,ji,wE,Nd,$E,FE,xE,Pi,ME,Ai,zE,qE,CE,Yp,jE,PE,Bt,Zp,Oi,AE,OE,eh,Li,LE,NE,th,Ni,IE,SE,oh,Ii,DE,WE,Ct,Si,UE,nn,RE,nh,HE,QE,sh,BE,VE,KE,Ls,JE,Ns,Af,sn,Is,rh,Di,GE,ah,XE,Of,Se,Wi,YE,Ui,ZE,ih,ew,tw,ow,Ri,nw,Id,sw,rw,aw,Hi,iw,Qi,lw,dw,cw,lh,pw,hw,Vt,dh,Bi,mw,fw,ch,Vi,uw,gw,ph,Ki,_w,kw,hh,Ji,Tw,vw,jt,Gi,yw,rn,bw,mh,Ew,ww,fh,$w,Fw,xw,Ss,Mw,Ds,Lf,an,Ws,uh,Xi,zw,gh,qw,Nf,De,Yi,Cw,_h,jw,Pw,Zi,Aw,Sd,Ow,Lw,Nw,el,Iw,tl,Sw,Dw,Ww,kh,Uw,Rw,Kt,Th,ol,Hw,Qw,vh,nl,Bw,Vw,yh,sl,Kw,Jw,bh,rl,Gw,Xw,Pt,al,Yw,ln,Zw,Eh,e$,t$,wh,o$,n$,s$,Us,r$,Rs,If,dn,Hs,$h,il,a$,Fh,i$,Sf,We,ll,l$,xh,d$,c$,dl,p$,Dd,h$,m$,f$,cl,u$,pl,g$,_$,k$,Mh,T$,v$,Jt,zh,hl,y$,b$,qh,ml,E$,w$,Ch,fl,$$,F$,jh,ul,x$,M$,At,gl,z$,cn,q$,Ph,C$,j$,Ah,P$,A$,O$,Qs,L$,Bs,Df,pn,Vs,Oh,_l,N$,Lh,I$,Wf,Ae,kl,S$,Nh,D$,W$,Ih,U$,R$,Tl,H$,Wd,Q$,B$,V$,vl,K$,yl,J$,G$,X$,Sh,Y$,Z$,Gt,Dh,bl,eF,tF,Wh,El,oF,nF,Uh,wl,sF,rF,Rh,$l,aF,iF,Ot,Fl,lF,hn,dF,Hh,cF,pF,Qh,hF,mF,fF,Ks,uF,Js,Uf,mn,Gs,Bh,xl,gF,Vh,_F,Rf,Ue,Ml,kF,fn,TF,Kh,vF,yF,Jh,bF,EF,wF,zl,$F,Ud,FF,xF,MF,ql,zF,Cl,qF,CF,jF,Gh,PF,AF,Xt,Xh,jl,OF,LF,Yh,Pl,NF,IF,Zh,Al,SF,DF,em,Ol,WF,UF,Lt,Ll,RF,un,HF,tm,QF,BF,om,VF,KF,JF,Xs,GF,Ys,Hf;return l=new $e({}),oe=new $e({}),br=new $e({}),Er=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"embedding_size"},{anchor:"transformers.ElectraConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ElectraConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ElectraConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ElectraConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ElectraConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ElectraConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ElectraConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ElectraConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ElectraConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ElectraConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ElectraConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;first&quot;</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.ElectraConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.ElectraConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;gelu&quot;</code> for a gelu activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.ElectraConfig.summary_last_dropout",description:`<strong>summary_last_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_last_dropout"},{anchor:"transformers.ElectraConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.ElectraConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.ElectraConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/configuration_electra.py#L38"}}),kn=new le({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[I9]},$$scope:{ctx:x}}}),$r=new $e({}),Fr=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/tokenization_electra.py#L52"}}),Mr=new $e({}),zr=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/tokenization_electra_fast.py#L61"}}),jr=new $e({}),Pr=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L697"}}),Or=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L806"}}),Nr=new $e({}),Ir=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L809"}}),Ur=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L836",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new Ee({props:{$$slots:{default:[S9]},$$scope:{ctx:x}}}),Fn=new le({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[D9]},$$scope:{ctx:x}}}),Rr=new $e({}),Hr=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1058"}}),Kr=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForPreTraining.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForPreTraining.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1067",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new Ee({props:{$$slots:{default:[W9]},$$scope:{ctx:x}}}),zn=new le({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[U9]},$$scope:{ctx:x}}}),Jr=new $e({}),Gr=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1515"}}),ta=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.ElectraForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ElectraForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1534",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Ee({props:{$$slots:{default:[R9]},$$scope:{ctx:x}}}),jn=new le({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[H9]},$$scope:{ctx:x}}}),oa=new $e({}),na=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1155"}}),ia=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForMaskedLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForMaskedLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),An=new Ee({props:{$$slots:{default:[Q9]},$$scope:{ctx:x}}}),On=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[B9]},$$scope:{ctx:x}}}),Ln=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[V9]},$$scope:{ctx:x}}}),la=new $e({}),da=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L961"}}),ma=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForSequenceClassification.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForSequenceClassification.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),In=new Ee({props:{$$slots:{default:[K9]},$$scope:{ctx:x}}}),Sn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[J9]},$$scope:{ctx:x}}}),Dn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[G9]},$$scope:{ctx:x}}}),Wn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[X9]},$$scope:{ctx:x}}}),Un=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[Y9]},$$scope:{ctx:x}}}),fa=new $e({}),ua=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1427"}}),Ta=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForMultipleChoice.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForMultipleChoice.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1438",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Hn=new Ee({props:{$$slots:{default:[Z9]},$$scope:{ctx:x}}}),Qn=new le({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[ez]},$$scope:{ctx:x}}}),va=new $e({}),ya=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1242"}}),$a=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForTokenClassification.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForTokenClassification.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1256",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Vn=new Ee({props:{$$slots:{default:[tz]},$$scope:{ctx:x}}}),Kn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[oz]},$$scope:{ctx:x}}}),Jn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[nz]},$$scope:{ctx:x}}}),Fa=new $e({}),xa=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1322"}}),Ca=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForQuestionAnswering.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForQuestionAnswering.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_electra.py#L1336",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Xn=new Ee({props:{$$slots:{default:[sz]},$$scope:{ctx:x}}}),Yn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[rz]},$$scope:{ctx:x}}}),Zn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[az]},$$scope:{ctx:x}}}),ja=new $e({}),Pa=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L926"}}),ts=new Ee({props:{$$slots:{default:[iz]},$$scope:{ctx:x}}}),Na=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFElectraModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFElectraModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFElectraModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L932",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new Ee({props:{$$slots:{default:[lz]},$$scope:{ctx:x}}}),ns=new le({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[dz]},$$scope:{ctx:x}}}),Ia=new $e({}),Sa=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1024"}}),rs=new Ee({props:{$$slots:{default:[cz]},$$scope:{ctx:x}}}),Ra=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new Ee({props:{$$slots:{default:[pz]},$$scope:{ctx:x}}}),is=new le({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[hz]},$$scope:{ctx:x}}}),Ha=new $e({}),Qa=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1140"}}),ds=new Ee({props:{$$slots:{default:[mz]},$$scope:{ctx:x}}}),Ja=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1162",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),cs=new Ee({props:{$$slots:{default:[fz]},$$scope:{ctx:x}}}),ps=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[uz]},$$scope:{ctx:x}}}),hs=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[gz]},$$scope:{ctx:x}}}),Ga=new $e({}),Xa=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1265"}}),fs=new Ee({props:{$$slots:{default:[_z]},$$scope:{ctx:x}}}),ti=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1272",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),us=new Ee({props:{$$slots:{default:[kz]},$$scope:{ctx:x}}}),gs=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[Tz]},$$scope:{ctx:x}}}),_s=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[vz]},$$scope:{ctx:x}}}),oi=new $e({}),ni=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1343"}}),Ts=new Ee({props:{$$slots:{default:[yz]},$$scope:{ctx:x}}}),ii=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1365",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),vs=new Ee({props:{$$slots:{default:[bz]},$$scope:{ctx:x}}}),ys=new le({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[Ez]},$$scope:{ctx:x}}}),li=new $e({}),di=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1470"}}),Es=new Ee({props:{$$slots:{default:[wz]},$$scope:{ctx:x}}}),mi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1483",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ws=new Ee({props:{$$slots:{default:[$z]},$$scope:{ctx:x}}}),$s=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[Fz]},$$scope:{ctx:x}}}),Fs=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[xz]},$$scope:{ctx:x}}}),fi=new $e({}),ui=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1554"}}),Ms=new Ee({props:{$$slots:{default:[Mz]},$$scope:{ctx:x}}}),Ti=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_tf_electra.py#L1564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),zs=new Ee({props:{$$slots:{default:[zz]},$$scope:{ctx:x}}}),qs=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[qz]},$$scope:{ctx:x}}}),Cs=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[Cz]},$$scope:{ctx:x}}}),vi=new $e({}),yi=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L662"}}),zi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new Ee({props:{$$slots:{default:[jz]},$$scope:{ctx:x}}}),As=new le({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[Pz]},$$scope:{ctx:x}}}),qi=new $e({}),Ci=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L811"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
<p><code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new Ee({props:{$$slots:{default:[Az]},$$scope:{ctx:x}}}),Ns=new le({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[Oz]},$$scope:{ctx:x}}}),Di=new $e({}),Wi=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L748"}}),Gi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Ss=new Ee({props:{$$slots:{default:[Lz]},$$scope:{ctx:x}}}),Ds=new le({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[Nz]},$$scope:{ctx:x}}}),Xi=new $e({}),Yi=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L1212"}}),al=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Us=new Ee({props:{$$slots:{default:[Iz]},$$scope:{ctx:x}}}),Rs=new le({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[Sz]},$$scope:{ctx:x}}}),il=new $e({}),ll=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L1048"}}),gl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Qs=new Ee({props:{$$slots:{default:[Dz]},$$scope:{ctx:x}}}),Bs=new le({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[Wz]},$$scope:{ctx:x}}}),_l=new $e({}),kl=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L903"}}),Fl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Ks=new Ee({props:{$$slots:{default:[Uz]},$$scope:{ctx:x}}}),Js=new le({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[Rz]},$$scope:{ctx:x}}}),xl=new $e({}),Ml=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L1121"}}),Ll=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Xs=new Ee({props:{$$slots:{default:[Hz]},$$scope:{ctx:x}}}),Ys=new le({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[Qz]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),y(l.$$.fragment),f=c(),M=n("span"),fe=a("ELECTRA"),J=c(),q=n("h2"),ee=n("a"),S=n("span"),y(oe.$$.fragment),ue=c(),D=n("span"),ge=a("Overview"),pe=c(),K=n("p"),O=a("The ELECTRA model was proposed in the paper "),ne=n("a"),X=a(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),C=a(`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),P=c(),re=n("p"),R=a("The abstract from the paper is the following:"),he=c(),ae=n("p"),W=n("em"),_e=a(`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
and then train a model to reconstruct the original tokens. While they produce good results when transferred to
downstream NLP tasks, they generally require large amounts of compute to be effective. As an alternative, we propose a
more sample-efficient pretraining task called replaced token detection. Instead of masking the input, our approach
corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network. Then, instead
of training a model that predicts the original identities of the corrupted tokens, we train a discriminative model that
predicts whether each token in the corrupted input was replaced by a generator sample or not. Thorough experiments
demonstrate this new pretraining task is more efficient than MLM because the task is defined over all input tokens
rather than just the small subset that was masked out. As a result, the contextual representations learned by our
approach substantially outperform the ones learned by BERT given the same model size, data, and compute. The gains are
particularly strong for small models; for example, we train a model on one GPU for 4 days that outperforms GPT (trained
using 30x more compute) on the GLUE natural language understanding benchmark. Our approach also works well at scale,
where it performs comparably to RoBERTa and XLNet while using less than 1/4 of their compute and outperforms them when
using the same amount of compute.`),me=c(),j=n("p"),ke=a("Tips:"),U=c(),te=n("ul"),ie=n("li"),H=a(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),Te=c(),G=n("li"),L=a("The ELECTRA checkpoints saved using "),se=n("a"),Q=a("Google Research\u2019s implementation"),ve=a(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),v=n("a"),z=a("ElectraForMaskedLM"),Y=a(` model, and the generator may be loaded in the
`),Fe=n("a"),ze=a("ElectraForPreTraining"),N=a(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),xe=c(),ye=n("p"),qe=a("This model was contributed by "),A=n("a"),B=a("lysandre"),Ce=a(". The original code can be found "),we=n("a"),V=a("here"),je=a("."),Me=c(),Z=n("h2"),be=n("a"),fc=n("span"),y(br.$$.fragment),dg=c(),uc=n("span"),cg=a("ElectraConfig"),Qm=c(),vt=n("div"),y(Er.$$.fragment),pg=c(),Ht=n("p"),hg=a("This is the configuration class to store the configuration of a "),Kl=n("a"),mg=a("ElectraModel"),fg=a(" or a "),Jl=n("a"),ug=a("TFElectraModel"),gg=a(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),wr=n("a"),_g=a("google/electra-small-discriminator"),kg=a(" architecture."),Tg=c(),go=n("p"),vg=a("Configuration objects inherit from "),Gl=n("a"),yg=a("PretrainedConfig"),bg=a(` and can be used to control the model outputs. Read the
documentation from `),Xl=n("a"),Eg=a("PretrainedConfig"),wg=a(" for more information."),$g=c(),y(kn.$$.fragment),Bm=c(),_o=n("h2"),Tn=n("a"),gc=n("span"),y($r.$$.fragment),Fg=c(),_c=n("span"),xg=a("ElectraTokenizer"),Vm=c(),yt=n("div"),y(Fr.$$.fragment),Mg=c(),kc=n("p"),zg=a("Construct an ELECTRA tokenizer."),qg=c(),vn=n("p"),Yl=n("a"),Cg=a("ElectraTokenizer"),jg=a(" is identical to "),Zl=n("a"),Pg=a("BertTokenizer"),Ag=a(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Og=c(),xr=n("p"),Lg=a("Refer to superclass "),ed=n("a"),Ng=a("BertTokenizer"),Ig=a(" for usage examples and documentation concerning parameters."),Km=c(),ko=n("h2"),yn=n("a"),Tc=n("span"),y(Mr.$$.fragment),Sg=c(),vc=n("span"),Dg=a("ElectraTokenizerFast"),Jm=c(),bt=n("div"),y(zr.$$.fragment),Wg=c(),qr=n("p"),Ug=a("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),yc=n("em"),Rg=a("tokenizers"),Hg=a(" library)."),Qg=c(),bn=n("p"),td=n("a"),Bg=a("ElectraTokenizerFast"),Vg=a(" is identical to "),od=n("a"),Kg=a("BertTokenizerFast"),Jg=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Gg=c(),Cr=n("p"),Xg=a("Refer to superclass "),nd=n("a"),Yg=a("BertTokenizerFast"),Zg=a(" for usage examples and documentation concerning parameters."),Gm=c(),To=n("h2"),En=n("a"),bc=n("span"),y(jr.$$.fragment),e_=c(),Ec=n("span"),t_=a("Electra specific outputs"),Xm=c(),vo=n("div"),y(Pr.$$.fragment),o_=c(),Ar=n("p"),n_=a("Output type of "),sd=n("a"),s_=a("ElectraForPreTraining"),r_=a("."),Ym=c(),yo=n("div"),y(Or.$$.fragment),a_=c(),Lr=n("p"),i_=a("Output type of "),rd=n("a"),l_=a("TFElectraForPreTraining"),d_=a("."),Zm=c(),bo=n("h2"),wn=n("a"),wc=n("span"),y(Nr.$$.fragment),c_=c(),$c=n("span"),p_=a("ElectraModel"),ef=c(),Ze=n("div"),y(Ir.$$.fragment),h_=c(),Fc=n("p"),m_=a("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),f_=c(),Sr=n("p"),u_=a("This model inherits from "),ad=n("a"),g_=a("PreTrainedModel"),__=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k_=c(),Dr=n("p"),T_=a("This model is also a PyTorch "),Wr=n("a"),v_=a("torch.nn.Module"),y_=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),b_=c(),Et=n("div"),y(Ur.$$.fragment),E_=c(),Eo=n("p"),w_=a("The "),id=n("a"),$_=a("ElectraModel"),F_=a(" forward method, overrides the "),xc=n("code"),x_=a("__call__"),M_=a(" special method."),z_=c(),y($n.$$.fragment),q_=c(),y(Fn.$$.fragment),tf=c(),wo=n("h2"),xn=n("a"),Mc=n("span"),y(Rr.$$.fragment),C_=c(),zc=n("span"),j_=a("ElectraForPreTraining"),of=c(),He=n("div"),y(Hr.$$.fragment),P_=c(),qc=n("p"),A_=a("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),O_=c(),Cc=n("p"),L_=a("It is recommended to load the discriminator checkpoint into that model."),N_=c(),Qr=n("p"),I_=a("This model inherits from "),ld=n("a"),S_=a("PreTrainedModel"),D_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=c(),Br=n("p"),U_=a("This model is also a PyTorch "),Vr=n("a"),R_=a("torch.nn.Module"),H_=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=c(),wt=n("div"),y(Kr.$$.fragment),B_=c(),$o=n("p"),V_=a("The "),dd=n("a"),K_=a("ElectraForPreTraining"),J_=a(" forward method, overrides the "),jc=n("code"),G_=a("__call__"),X_=a(" special method."),Y_=c(),y(Mn.$$.fragment),Z_=c(),y(zn.$$.fragment),nf=c(),Fo=n("h2"),qn=n("a"),Pc=n("span"),y(Jr.$$.fragment),ek=c(),Ac=n("span"),tk=a("ElectraForCausalLM"),sf=c(),et=n("div"),y(Gr.$$.fragment),ok=c(),Xr=n("p"),nk=a("ELECTRA Model with a "),Oc=n("code"),sk=a("language modeling"),rk=a(" head on top for CLM fine-tuning."),ak=c(),Yr=n("p"),ik=a("This model inherits from "),cd=n("a"),lk=a("PreTrainedModel"),dk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ck=c(),Zr=n("p"),pk=a("This model is also a PyTorch "),ea=n("a"),hk=a("torch.nn.Module"),mk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fk=c(),$t=n("div"),y(ta.$$.fragment),uk=c(),xo=n("p"),gk=a("The "),pd=n("a"),_k=a("ElectraForCausalLM"),kk=a(" forward method, overrides the "),Lc=n("code"),Tk=a("__call__"),vk=a(" special method."),yk=c(),y(Cn.$$.fragment),bk=c(),y(jn.$$.fragment),rf=c(),Mo=n("h2"),Pn=n("a"),Nc=n("span"),y(oa.$$.fragment),Ek=c(),Ic=n("span"),wk=a("ElectraForMaskedLM"),af=c(),Qe=n("div"),y(na.$$.fragment),$k=c(),Sc=n("p"),Fk=a("Electra model with a language modeling head on top."),xk=c(),Dc=n("p"),Mk=a(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),zk=c(),sa=n("p"),qk=a("This model inherits from "),hd=n("a"),Ck=a("PreTrainedModel"),jk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pk=c(),ra=n("p"),Ak=a("This model is also a PyTorch "),aa=n("a"),Ok=a("torch.nn.Module"),Lk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nk=c(),st=n("div"),y(ia.$$.fragment),Ik=c(),zo=n("p"),Sk=a("The "),md=n("a"),Dk=a("ElectraForMaskedLM"),Wk=a(" forward method, overrides the "),Wc=n("code"),Uk=a("__call__"),Rk=a(" special method."),Hk=c(),y(An.$$.fragment),Qk=c(),y(On.$$.fragment),Bk=c(),y(Ln.$$.fragment),lf=c(),qo=n("h2"),Nn=n("a"),Uc=n("span"),y(la.$$.fragment),Vk=c(),Rc=n("span"),Kk=a("ElectraForSequenceClassification"),df=c(),tt=n("div"),y(da.$$.fragment),Jk=c(),Hc=n("p"),Gk=a(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xk=c(),ca=n("p"),Yk=a("This model inherits from "),fd=n("a"),Zk=a("PreTrainedModel"),e1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t1=c(),pa=n("p"),o1=a("This model is also a PyTorch "),ha=n("a"),n1=a("torch.nn.Module"),s1=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),r1=c(),Re=n("div"),y(ma.$$.fragment),a1=c(),Co=n("p"),i1=a("The "),ud=n("a"),l1=a("ElectraForSequenceClassification"),d1=a(" forward method, overrides the "),Qc=n("code"),c1=a("__call__"),p1=a(" special method."),h1=c(),y(In.$$.fragment),m1=c(),y(Sn.$$.fragment),f1=c(),y(Dn.$$.fragment),u1=c(),y(Wn.$$.fragment),g1=c(),y(Un.$$.fragment),cf=c(),jo=n("h2"),Rn=n("a"),Bc=n("span"),y(fa.$$.fragment),_1=c(),Vc=n("span"),k1=a("ElectraForMultipleChoice"),pf=c(),ot=n("div"),y(ua.$$.fragment),T1=c(),Kc=n("p"),v1=a(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),y1=c(),ga=n("p"),b1=a("This model inherits from "),gd=n("a"),E1=a("PreTrainedModel"),w1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$1=c(),_a=n("p"),F1=a("This model is also a PyTorch "),ka=n("a"),x1=a("torch.nn.Module"),M1=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z1=c(),Ft=n("div"),y(Ta.$$.fragment),q1=c(),Po=n("p"),C1=a("The "),_d=n("a"),j1=a("ElectraForMultipleChoice"),P1=a(" forward method, overrides the "),Jc=n("code"),A1=a("__call__"),O1=a(" special method."),L1=c(),y(Hn.$$.fragment),N1=c(),y(Qn.$$.fragment),hf=c(),Ao=n("h2"),Bn=n("a"),Gc=n("span"),y(va.$$.fragment),I1=c(),Xc=n("span"),S1=a("ElectraForTokenClassification"),mf=c(),Be=n("div"),y(ya.$$.fragment),D1=c(),Yc=n("p"),W1=a("Electra model with a token classification head on top."),U1=c(),Zc=n("p"),R1=a("Both the discriminator and generator may be loaded into this model."),H1=c(),ba=n("p"),Q1=a("This model inherits from "),kd=n("a"),B1=a("PreTrainedModel"),V1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K1=c(),Ea=n("p"),J1=a("This model is also a PyTorch "),wa=n("a"),G1=a("torch.nn.Module"),X1=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Y1=c(),rt=n("div"),y($a.$$.fragment),Z1=c(),Oo=n("p"),eT=a("The "),Td=n("a"),tT=a("ElectraForTokenClassification"),oT=a(" forward method, overrides the "),ep=n("code"),nT=a("__call__"),sT=a(" special method."),rT=c(),y(Vn.$$.fragment),aT=c(),y(Kn.$$.fragment),iT=c(),y(Jn.$$.fragment),ff=c(),Lo=n("h2"),Gn=n("a"),tp=n("span"),y(Fa.$$.fragment),lT=c(),op=n("span"),dT=a("ElectraForQuestionAnswering"),uf=c(),nt=n("div"),y(xa.$$.fragment),cT=c(),No=n("p"),pT=a(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=n("code"),hT=a("span start logits"),mT=a(" and "),sp=n("code"),fT=a("span end logits"),uT=a(")."),gT=c(),Ma=n("p"),_T=a("This model inherits from "),vd=n("a"),kT=a("PreTrainedModel"),TT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vT=c(),za=n("p"),yT=a("This model is also a PyTorch "),qa=n("a"),bT=a("torch.nn.Module"),ET=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wT=c(),at=n("div"),y(Ca.$$.fragment),$T=c(),Io=n("p"),FT=a("The "),yd=n("a"),xT=a("ElectraForQuestionAnswering"),MT=a(" forward method, overrides the "),rp=n("code"),zT=a("__call__"),qT=a(" special method."),CT=c(),y(Xn.$$.fragment),jT=c(),y(Yn.$$.fragment),PT=c(),y(Zn.$$.fragment),gf=c(),So=n("h2"),es=n("a"),ap=n("span"),y(ja.$$.fragment),AT=c(),ip=n("span"),OT=a("TFElectraModel"),_f=c(),Ve=n("div"),y(Pa.$$.fragment),LT=c(),lp=n("p"),NT=a("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),IT=c(),Aa=n("p"),ST=a("This model inherits from "),bd=n("a"),DT=a("TFPreTrainedModel"),WT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),UT=c(),Oa=n("p"),RT=a("This model is also a "),La=n("a"),HT=a("tf.keras.Model"),QT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),BT=c(),y(ts.$$.fragment),VT=c(),xt=n("div"),y(Na.$$.fragment),KT=c(),Do=n("p"),JT=a("The "),Ed=n("a"),GT=a("TFElectraModel"),XT=a(" forward method, overrides the "),dp=n("code"),YT=a("__call__"),ZT=a(" special method."),ev=c(),y(os.$$.fragment),tv=c(),y(ns.$$.fragment),kf=c(),Wo=n("h2"),ss=n("a"),cp=n("span"),y(Ia.$$.fragment),ov=c(),pp=n("span"),nv=a("TFElectraForPreTraining"),Tf=c(),Oe=n("div"),y(Sa.$$.fragment),sv=c(),hp=n("p"),rv=a("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),av=c(),mp=n("p"),iv=a(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),lv=c(),Da=n("p"),dv=a("This model inherits from "),wd=n("a"),cv=a("TFPreTrainedModel"),pv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hv=c(),Wa=n("p"),mv=a("This model is also a "),Ua=n("a"),fv=a("tf.keras.Model"),uv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gv=c(),y(rs.$$.fragment),_v=c(),Mt=n("div"),y(Ra.$$.fragment),kv=c(),Uo=n("p"),Tv=a("The "),$d=n("a"),vv=a("TFElectraForPreTraining"),yv=a(" forward method, overrides the "),fp=n("code"),bv=a("__call__"),Ev=a(" special method."),wv=c(),y(as.$$.fragment),$v=c(),y(is.$$.fragment),vf=c(),Ro=n("h2"),ls=n("a"),up=n("span"),y(Ha.$$.fragment),Fv=c(),gp=n("span"),xv=a("TFElectraForMaskedLM"),yf=c(),Le=n("div"),y(Qa.$$.fragment),Mv=c(),_p=n("p"),zv=a("Electra model with a language modeling head on top."),qv=c(),kp=n("p"),Cv=a(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),jv=c(),Ba=n("p"),Pv=a("This model inherits from "),Fd=n("a"),Av=a("TFPreTrainedModel"),Ov=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lv=c(),Va=n("p"),Nv=a("This model is also a "),Ka=n("a"),Iv=a("tf.keras.Model"),Sv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv=c(),y(ds.$$.fragment),Wv=c(),it=n("div"),y(Ja.$$.fragment),Uv=c(),Ho=n("p"),Rv=a("The "),xd=n("a"),Hv=a("TFElectraForMaskedLM"),Qv=a(" forward method, overrides the "),Tp=n("code"),Bv=a("__call__"),Vv=a(" special method."),Kv=c(),y(cs.$$.fragment),Jv=c(),y(ps.$$.fragment),Gv=c(),y(hs.$$.fragment),bf=c(),Qo=n("h2"),ms=n("a"),vp=n("span"),y(Ga.$$.fragment),Xv=c(),yp=n("span"),Yv=a("TFElectraForSequenceClassification"),Ef=c(),Ke=n("div"),y(Xa.$$.fragment),Zv=c(),bp=n("p"),ey=a(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ty=c(),Ya=n("p"),oy=a("This model inherits from "),Md=n("a"),ny=a("TFPreTrainedModel"),sy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ry=c(),Za=n("p"),ay=a("This model is also a "),ei=n("a"),iy=a("tf.keras.Model"),ly=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=c(),y(fs.$$.fragment),cy=c(),lt=n("div"),y(ti.$$.fragment),py=c(),Bo=n("p"),hy=a("The "),zd=n("a"),my=a("TFElectraForSequenceClassification"),fy=a(" forward method, overrides the "),Ep=n("code"),uy=a("__call__"),gy=a(" special method."),_y=c(),y(us.$$.fragment),ky=c(),y(gs.$$.fragment),Ty=c(),y(_s.$$.fragment),wf=c(),Vo=n("h2"),ks=n("a"),wp=n("span"),y(oi.$$.fragment),vy=c(),$p=n("span"),yy=a("TFElectraForMultipleChoice"),$f=c(),Je=n("div"),y(ni.$$.fragment),by=c(),Fp=n("p"),Ey=a(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),wy=c(),si=n("p"),$y=a("This model inherits from "),qd=n("a"),Fy=a("TFPreTrainedModel"),xy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),My=c(),ri=n("p"),zy=a("This model is also a "),ai=n("a"),qy=a("tf.keras.Model"),Cy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jy=c(),y(Ts.$$.fragment),Py=c(),zt=n("div"),y(ii.$$.fragment),Ay=c(),Ko=n("p"),Oy=a("The "),Cd=n("a"),Ly=a("TFElectraForMultipleChoice"),Ny=a(" forward method, overrides the "),xp=n("code"),Iy=a("__call__"),Sy=a(" special method."),Dy=c(),y(vs.$$.fragment),Wy=c(),y(ys.$$.fragment),Ff=c(),Jo=n("h2"),bs=n("a"),Mp=n("span"),y(li.$$.fragment),Uy=c(),zp=n("span"),Ry=a("TFElectraForTokenClassification"),xf=c(),Ne=n("div"),y(di.$$.fragment),Hy=c(),qp=n("p"),Qy=a("Electra model with a token classification head on top."),By=c(),Cp=n("p"),Vy=a("Both the discriminator and generator may be loaded into this model."),Ky=c(),ci=n("p"),Jy=a("This model inherits from "),jd=n("a"),Gy=a("TFPreTrainedModel"),Xy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yy=c(),pi=n("p"),Zy=a("This model is also a "),hi=n("a"),eb=a("tf.keras.Model"),tb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ob=c(),y(Es.$$.fragment),nb=c(),dt=n("div"),y(mi.$$.fragment),sb=c(),Go=n("p"),rb=a("The "),Pd=n("a"),ab=a("TFElectraForTokenClassification"),ib=a(" forward method, overrides the "),jp=n("code"),lb=a("__call__"),db=a(" special method."),cb=c(),y(ws.$$.fragment),pb=c(),y($s.$$.fragment),hb=c(),y(Fs.$$.fragment),Mf=c(),Xo=n("h2"),xs=n("a"),Pp=n("span"),y(fi.$$.fragment),mb=c(),Ap=n("span"),fb=a("TFElectraForQuestionAnswering"),zf=c(),Ge=n("div"),y(ui.$$.fragment),ub=c(),Yo=n("p"),gb=a(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=n("code"),_b=a("span start logits"),kb=a(" and "),Lp=n("code"),Tb=a("span end logits"),vb=a(")."),yb=c(),gi=n("p"),bb=a("This model inherits from "),Ad=n("a"),Eb=a("TFPreTrainedModel"),wb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$b=c(),_i=n("p"),Fb=a("This model is also a "),ki=n("a"),xb=a("tf.keras.Model"),Mb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zb=c(),y(Ms.$$.fragment),qb=c(),ct=n("div"),y(Ti.$$.fragment),Cb=c(),Zo=n("p"),jb=a("The "),Od=n("a"),Pb=a("TFElectraForQuestionAnswering"),Ab=a(" forward method, overrides the "),Np=n("code"),Ob=a("__call__"),Lb=a(" special method."),Nb=c(),y(zs.$$.fragment),Ib=c(),y(qs.$$.fragment),Sb=c(),y(Cs.$$.fragment),qf=c(),en=n("h2"),js=n("a"),Ip=n("span"),y(vi.$$.fragment),Db=c(),Sp=n("span"),Wb=a("FlaxElectraModel"),Cf=c(),Ie=n("div"),y(yi.$$.fragment),Ub=c(),Dp=n("p"),Rb=a("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),Hb=c(),bi=n("p"),Qb=a("This model inherits from "),Ld=n("a"),Bb=a("FlaxPreTrainedModel"),Vb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kb=c(),Ei=n("p"),Jb=a(`This model is also a Flax Linen
`),wi=n("a"),Gb=a("flax.nn.Module"),Xb=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yb=c(),Wp=n("p"),Zb=a("Finally, this model supports inherent JAX features such as:"),eE=c(),Qt=n("ul"),Up=n("li"),$i=n("a"),tE=a("Just-In-Time (JIT) compilation"),oE=c(),Rp=n("li"),Fi=n("a"),nE=a("Automatic Differentiation"),sE=c(),Hp=n("li"),xi=n("a"),rE=a("Vectorization"),aE=c(),Qp=n("li"),Mi=n("a"),iE=a("Parallelization"),lE=c(),qt=n("div"),y(zi.$$.fragment),dE=c(),tn=n("p"),cE=a("The "),Bp=n("code"),pE=a("FlaxElectraPreTrainedModel"),hE=a(" forward method, overrides the "),Vp=n("code"),mE=a("__call__"),fE=a(" special method."),uE=c(),y(Ps.$$.fragment),gE=c(),y(As.$$.fragment),jf=c(),on=n("h2"),Os=n("a"),Kp=n("span"),y(qi.$$.fragment),_E=c(),Jp=n("span"),kE=a("FlaxElectraForPreTraining"),Pf=c(),Pe=n("div"),y(Ci.$$.fragment),TE=c(),Gp=n("p"),vE=a("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),yE=c(),Xp=n("p"),bE=a("It is recommended to load the discriminator checkpoint into that model."),EE=c(),ji=n("p"),wE=a("This model inherits from "),Nd=n("a"),$E=a("FlaxPreTrainedModel"),FE=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xE=c(),Pi=n("p"),ME=a(`This model is also a Flax Linen
`),Ai=n("a"),zE=a("flax.nn.Module"),qE=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),CE=c(),Yp=n("p"),jE=a("Finally, this model supports inherent JAX features such as:"),PE=c(),Bt=n("ul"),Zp=n("li"),Oi=n("a"),AE=a("Just-In-Time (JIT) compilation"),OE=c(),eh=n("li"),Li=n("a"),LE=a("Automatic Differentiation"),NE=c(),th=n("li"),Ni=n("a"),IE=a("Vectorization"),SE=c(),oh=n("li"),Ii=n("a"),DE=a("Parallelization"),WE=c(),Ct=n("div"),y(Si.$$.fragment),UE=c(),nn=n("p"),RE=a("The "),nh=n("code"),HE=a("FlaxElectraPreTrainedModel"),QE=a(" forward method, overrides the "),sh=n("code"),BE=a("__call__"),VE=a(" special method."),KE=c(),y(Ls.$$.fragment),JE=c(),y(Ns.$$.fragment),Af=c(),sn=n("h2"),Is=n("a"),rh=n("span"),y(Di.$$.fragment),GE=c(),ah=n("span"),XE=a("FlaxElectraForMaskedLM"),Of=c(),Se=n("div"),y(Wi.$$.fragment),YE=c(),Ui=n("p"),ZE=a("Electra Model with a "),ih=n("code"),ew=a("language modeling"),tw=a(" head on top."),ow=c(),Ri=n("p"),nw=a("This model inherits from "),Id=n("a"),sw=a("FlaxPreTrainedModel"),rw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),aw=c(),Hi=n("p"),iw=a(`This model is also a Flax Linen
`),Qi=n("a"),lw=a("flax.nn.Module"),dw=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),cw=c(),lh=n("p"),pw=a("Finally, this model supports inherent JAX features such as:"),hw=c(),Vt=n("ul"),dh=n("li"),Bi=n("a"),mw=a("Just-In-Time (JIT) compilation"),fw=c(),ch=n("li"),Vi=n("a"),uw=a("Automatic Differentiation"),gw=c(),ph=n("li"),Ki=n("a"),_w=a("Vectorization"),kw=c(),hh=n("li"),Ji=n("a"),Tw=a("Parallelization"),vw=c(),jt=n("div"),y(Gi.$$.fragment),yw=c(),rn=n("p"),bw=a("The "),mh=n("code"),Ew=a("FlaxElectraPreTrainedModel"),ww=a(" forward method, overrides the "),fh=n("code"),$w=a("__call__"),Fw=a(" special method."),xw=c(),y(Ss.$$.fragment),Mw=c(),y(Ds.$$.fragment),Lf=c(),an=n("h2"),Ws=n("a"),uh=n("span"),y(Xi.$$.fragment),zw=c(),gh=n("span"),qw=a("FlaxElectraForSequenceClassification"),Nf=c(),De=n("div"),y(Yi.$$.fragment),Cw=c(),_h=n("p"),jw=a(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Pw=c(),Zi=n("p"),Aw=a("This model inherits from "),Sd=n("a"),Ow=a("FlaxPreTrainedModel"),Lw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nw=c(),el=n("p"),Iw=a(`This model is also a Flax Linen
`),tl=n("a"),Sw=a("flax.nn.Module"),Dw=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ww=c(),kh=n("p"),Uw=a("Finally, this model supports inherent JAX features such as:"),Rw=c(),Kt=n("ul"),Th=n("li"),ol=n("a"),Hw=a("Just-In-Time (JIT) compilation"),Qw=c(),vh=n("li"),nl=n("a"),Bw=a("Automatic Differentiation"),Vw=c(),yh=n("li"),sl=n("a"),Kw=a("Vectorization"),Jw=c(),bh=n("li"),rl=n("a"),Gw=a("Parallelization"),Xw=c(),Pt=n("div"),y(al.$$.fragment),Yw=c(),ln=n("p"),Zw=a("The "),Eh=n("code"),e$=a("FlaxElectraPreTrainedModel"),t$=a(" forward method, overrides the "),wh=n("code"),o$=a("__call__"),n$=a(" special method."),s$=c(),y(Us.$$.fragment),r$=c(),y(Rs.$$.fragment),If=c(),dn=n("h2"),Hs=n("a"),$h=n("span"),y(il.$$.fragment),a$=c(),Fh=n("span"),i$=a("FlaxElectraForMultipleChoice"),Sf=c(),We=n("div"),y(ll.$$.fragment),l$=c(),xh=n("p"),d$=a(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),c$=c(),dl=n("p"),p$=a("This model inherits from "),Dd=n("a"),h$=a("FlaxPreTrainedModel"),m$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f$=c(),cl=n("p"),u$=a(`This model is also a Flax Linen
`),pl=n("a"),g$=a("flax.nn.Module"),_$=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),k$=c(),Mh=n("p"),T$=a("Finally, this model supports inherent JAX features such as:"),v$=c(),Jt=n("ul"),zh=n("li"),hl=n("a"),y$=a("Just-In-Time (JIT) compilation"),b$=c(),qh=n("li"),ml=n("a"),E$=a("Automatic Differentiation"),w$=c(),Ch=n("li"),fl=n("a"),$$=a("Vectorization"),F$=c(),jh=n("li"),ul=n("a"),x$=a("Parallelization"),M$=c(),At=n("div"),y(gl.$$.fragment),z$=c(),cn=n("p"),q$=a("The "),Ph=n("code"),C$=a("FlaxElectraPreTrainedModel"),j$=a(" forward method, overrides the "),Ah=n("code"),P$=a("__call__"),A$=a(" special method."),O$=c(),y(Qs.$$.fragment),L$=c(),y(Bs.$$.fragment),Df=c(),pn=n("h2"),Vs=n("a"),Oh=n("span"),y(_l.$$.fragment),N$=c(),Lh=n("span"),I$=a("FlaxElectraForTokenClassification"),Wf=c(),Ae=n("div"),y(kl.$$.fragment),S$=c(),Nh=n("p"),D$=a("Electra model with a token classification head on top."),W$=c(),Ih=n("p"),U$=a("Both the discriminator and generator may be loaded into this model."),R$=c(),Tl=n("p"),H$=a("This model inherits from "),Wd=n("a"),Q$=a("FlaxPreTrainedModel"),B$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V$=c(),vl=n("p"),K$=a(`This model is also a Flax Linen
`),yl=n("a"),J$=a("flax.nn.Module"),G$=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),X$=c(),Sh=n("p"),Y$=a("Finally, this model supports inherent JAX features such as:"),Z$=c(),Gt=n("ul"),Dh=n("li"),bl=n("a"),eF=a("Just-In-Time (JIT) compilation"),tF=c(),Wh=n("li"),El=n("a"),oF=a("Automatic Differentiation"),nF=c(),Uh=n("li"),wl=n("a"),sF=a("Vectorization"),rF=c(),Rh=n("li"),$l=n("a"),aF=a("Parallelization"),iF=c(),Ot=n("div"),y(Fl.$$.fragment),lF=c(),hn=n("p"),dF=a("The "),Hh=n("code"),cF=a("FlaxElectraPreTrainedModel"),pF=a(" forward method, overrides the "),Qh=n("code"),hF=a("__call__"),mF=a(" special method."),fF=c(),y(Ks.$$.fragment),uF=c(),y(Js.$$.fragment),Uf=c(),mn=n("h2"),Gs=n("a"),Bh=n("span"),y(xl.$$.fragment),gF=c(),Vh=n("span"),_F=a("FlaxElectraForQuestionAnswering"),Rf=c(),Ue=n("div"),y(Ml.$$.fragment),kF=c(),fn=n("p"),TF=a(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=n("code"),vF=a("span start logits"),yF=a(" and "),Jh=n("code"),bF=a("span end logits"),EF=a(")."),wF=c(),zl=n("p"),$F=a("This model inherits from "),Ud=n("a"),FF=a("FlaxPreTrainedModel"),xF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),MF=c(),ql=n("p"),zF=a(`This model is also a Flax Linen
`),Cl=n("a"),qF=a("flax.nn.Module"),CF=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jF=c(),Gh=n("p"),PF=a("Finally, this model supports inherent JAX features such as:"),AF=c(),Xt=n("ul"),Xh=n("li"),jl=n("a"),OF=a("Just-In-Time (JIT) compilation"),LF=c(),Yh=n("li"),Pl=n("a"),NF=a("Automatic Differentiation"),IF=c(),Zh=n("li"),Al=n("a"),SF=a("Vectorization"),DF=c(),em=n("li"),Ol=n("a"),WF=a("Parallelization"),UF=c(),Lt=n("div"),y(Ll.$$.fragment),RF=c(),un=n("p"),HF=a("The "),tm=n("code"),QF=a("FlaxElectraPreTrainedModel"),BF=a(" forward method, overrides the "),om=n("code"),VF=a("__call__"),KF=a(" special method."),JF=c(),y(Xs.$$.fragment),GF=c(),y(Ys.$$.fragment),this.h()},l(o){const T=L9('[data-svelte="svelte-1phssyn"]',document.head);d=s(T,"META",{name:!0,content:!0}),T.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Nl=r(h);m=s(Nl,"A",{id:!0,class:!0,href:!0});var nm=r(m);_=s(nm,"SPAN",{});var sm=r(_);b(l.$$.fragment,sm),sm.forEach(t),nm.forEach(t),f=p(Nl),M=s(Nl,"SPAN",{});var rm=r(M);fe=i(rm,"ELECTRA"),rm.forEach(t),Nl.forEach(t),J=p(o),q=s(o,"H2",{class:!0});var Il=r(q);ee=s(Il,"A",{id:!0,class:!0,href:!0});var am=r(ee);S=s(am,"SPAN",{});var im=r(S);b(oe.$$.fragment,im),im.forEach(t),am.forEach(t),ue=p(Il),D=s(Il,"SPAN",{});var lm=r(D);ge=i(lm,"Overview"),lm.forEach(t),Il.forEach(t),pe=p(o),K=s(o,"P",{});var Sl=r(K);O=i(Sl,"The ELECTRA model was proposed in the paper "),ne=s(Sl,"A",{href:!0,rel:!0});var dm=r(ne);X=i(dm,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),dm.forEach(t),C=i(Sl,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Sl.forEach(t),P=p(o),re=s(o,"P",{});var cm=r(re);R=i(cm,"The abstract from the paper is the following:"),cm.forEach(t),he=p(o),ae=s(o,"P",{});var pm=r(ae);W=s(pm,"EM",{});var hm=r(W);_e=i(hm,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
and then train a model to reconstruct the original tokens. While they produce good results when transferred to
downstream NLP tasks, they generally require large amounts of compute to be effective. As an alternative, we propose a
more sample-efficient pretraining task called replaced token detection. Instead of masking the input, our approach
corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network. Then, instead
of training a model that predicts the original identities of the corrupted tokens, we train a discriminative model that
predicts whether each token in the corrupted input was replaced by a generator sample or not. Thorough experiments
demonstrate this new pretraining task is more efficient than MLM because the task is defined over all input tokens
rather than just the small subset that was masked out. As a result, the contextual representations learned by our
approach substantially outperform the ones learned by BERT given the same model size, data, and compute. The gains are
particularly strong for small models; for example, we train a model on one GPU for 4 days that outperforms GPT (trained
using 30x more compute) on the GLUE natural language understanding benchmark. Our approach also works well at scale,
where it performs comparably to RoBERTa and XLNet while using less than 1/4 of their compute and outperforms them when
using the same amount of compute.`),hm.forEach(t),pm.forEach(t),me=p(o),j=s(o,"P",{});var mm=r(j);ke=i(mm,"Tips:"),mm.forEach(t),U=p(o),te=s(o,"UL",{});var Dl=r(te);ie=s(Dl,"LI",{});var fm=r(ie);H=i(fm,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),fm.forEach(t),Te=p(Dl),G=s(Dl,"LI",{});var Yt=r(G);L=i(Yt,"The ELECTRA checkpoints saved using "),se=s(Yt,"A",{href:!0,rel:!0});var um=r(se);Q=i(um,"Google Research\u2019s implementation"),um.forEach(t),ve=i(Yt,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),v=s(Yt,"A",{href:!0});var gm=r(v);z=i(gm,"ElectraForMaskedLM"),gm.forEach(t),Y=i(Yt,` model, and the generator may be loaded in the
`),Fe=s(Yt,"A",{href:!0});var _m=r(Fe);ze=i(_m,"ElectraForPreTraining"),_m.forEach(t),N=i(Yt,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),Yt.forEach(t),Dl.forEach(t),xe=p(o),ye=s(o,"P",{});var gn=r(ye);qe=i(gn,"This model was contributed by "),A=s(gn,"A",{href:!0,rel:!0});var km=r(A);B=i(km,"lysandre"),km.forEach(t),Ce=i(gn,". The original code can be found "),we=s(gn,"A",{href:!0,rel:!0});var Tm=r(we);V=i(Tm,"here"),Tm.forEach(t),je=i(gn,"."),gn.forEach(t),Me=p(o),Z=s(o,"H2",{class:!0});var Wl=r(Z);be=s(Wl,"A",{id:!0,class:!0,href:!0});var vm=r(be);fc=s(vm,"SPAN",{});var ym=r(fc);b(br.$$.fragment,ym),ym.forEach(t),vm.forEach(t),dg=p(Wl),uc=s(Wl,"SPAN",{});var bm=r(uc);cg=i(bm,"ElectraConfig"),bm.forEach(t),Wl.forEach(t),Qm=p(o),vt=s(o,"DIV",{class:!0});var Zt=r(vt);b(Er.$$.fragment,Zt),pg=p(Zt),Ht=s(Zt,"P",{});var eo=r(Ht);hg=i(eo,"This is the configuration class to store the configuration of a "),Kl=s(eo,"A",{href:!0});var Em=r(Kl);mg=i(Em,"ElectraModel"),Em.forEach(t),fg=i(eo," or a "),Jl=s(eo,"A",{href:!0});var wm=r(Jl);ug=i(wm,"TFElectraModel"),wm.forEach(t),gg=i(eo,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),wr=s(eo,"A",{href:!0,rel:!0});var $m=r(wr);_g=i($m,"google/electra-small-discriminator"),$m.forEach(t),kg=i(eo," architecture."),eo.forEach(t),Tg=p(Zt),go=s(Zt,"P",{});var _n=r(go);vg=i(_n,"Configuration objects inherit from "),Gl=s(_n,"A",{href:!0});var Fm=r(Gl);yg=i(Fm,"PretrainedConfig"),Fm.forEach(t),bg=i(_n,` and can be used to control the model outputs. Read the
documentation from `),Xl=s(_n,"A",{href:!0});var xm=r(Xl);Eg=i(xm,"PretrainedConfig"),xm.forEach(t),wg=i(_n," for more information."),_n.forEach(t),$g=p(Zt),b(kn.$$.fragment,Zt),Zt.forEach(t),Bm=p(o),_o=s(o,"H2",{class:!0});var Ul=r(_o);Tn=s(Ul,"A",{id:!0,class:!0,href:!0});var Mm=r(Tn);gc=s(Mm,"SPAN",{});var zm=r(gc);b($r.$$.fragment,zm),zm.forEach(t),Mm.forEach(t),Fg=p(Ul),_c=s(Ul,"SPAN",{});var qm=r(_c);xg=i(qm,"ElectraTokenizer"),qm.forEach(t),Ul.forEach(t),Vm=p(o),yt=s(o,"DIV",{class:!0});var to=r(yt);b(Fr.$$.fragment,to),Mg=p(to),kc=s(to,"P",{});var Cm=r(kc);zg=i(Cm,"Construct an ELECTRA tokenizer."),Cm.forEach(t),qg=p(to),vn=s(to,"P",{});var Zs=r(vn);Yl=s(Zs,"A",{href:!0});var jm=r(Yl);Cg=i(jm,"ElectraTokenizer"),jm.forEach(t),jg=i(Zs," is identical to "),Zl=s(Zs,"A",{href:!0});var Pm=r(Zl);Pg=i(Pm,"BertTokenizer"),Pm.forEach(t),Ag=i(Zs,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Zs.forEach(t),Og=p(to),xr=s(to,"P",{});var Rl=r(xr);Lg=i(Rl,"Refer to superclass "),ed=s(Rl,"A",{href:!0});var Am=r(ed);Ng=i(Am,"BertTokenizer"),Am.forEach(t),Ig=i(Rl," for usage examples and documentation concerning parameters."),Rl.forEach(t),to.forEach(t),Km=p(o),ko=s(o,"H2",{class:!0});var Hl=r(ko);yn=s(Hl,"A",{id:!0,class:!0,href:!0});var Om=r(yn);Tc=s(Om,"SPAN",{});var Lm=r(Tc);b(Mr.$$.fragment,Lm),Lm.forEach(t),Om.forEach(t),Sg=p(Hl),vc=s(Hl,"SPAN",{});var Nm=r(vc);Dg=i(Nm,"ElectraTokenizerFast"),Nm.forEach(t),Hl.forEach(t),Jm=p(o),bt=s(o,"DIV",{class:!0});var oo=r(bt);b(zr.$$.fragment,oo),Wg=p(oo),qr=s(oo,"P",{});var Ql=r(qr);Ug=i(Ql,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),yc=s(Ql,"EM",{});var Im=r(yc);Rg=i(Im,"tokenizers"),Im.forEach(t),Hg=i(Ql," library)."),Ql.forEach(t),Qg=p(oo),bn=s(oo,"P",{});var er=r(bn);td=s(er,"A",{href:!0});var Sm=r(td);Bg=i(Sm,"ElectraTokenizerFast"),Sm.forEach(t),Vg=i(er," is identical to "),od=s(er,"A",{href:!0});var Dm=r(od);Kg=i(Dm,"BertTokenizerFast"),Dm.forEach(t),Jg=i(er,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),er.forEach(t),Gg=p(oo),Cr=s(oo,"P",{});var Bl=r(Cr);Xg=i(Bl,"Refer to superclass "),nd=s(Bl,"A",{href:!0});var Wm=r(nd);Yg=i(Wm,"BertTokenizerFast"),Wm.forEach(t),Zg=i(Bl," for usage examples and documentation concerning parameters."),Bl.forEach(t),oo.forEach(t),Gm=p(o),To=s(o,"H2",{class:!0});var Vl=r(To);En=s(Vl,"A",{id:!0,class:!0,href:!0});var Um=r(En);bc=s(Um,"SPAN",{});var Rm=r(bc);b(jr.$$.fragment,Rm),Rm.forEach(t),Um.forEach(t),e_=p(Vl),Ec=s(Vl,"SPAN",{});var Hm=r(Ec);t_=i(Hm,"Electra specific outputs"),Hm.forEach(t),Vl.forEach(t),Xm=p(o),vo=s(o,"DIV",{class:!0});var Qf=r(vo);b(Pr.$$.fragment,Qf),o_=p(Qf),Ar=s(Qf,"P",{});var Bf=r(Ar);n_=i(Bf,"Output type of "),sd=s(Bf,"A",{href:!0});var XF=r(sd);s_=i(XF,"ElectraForPreTraining"),XF.forEach(t),r_=i(Bf,"."),Bf.forEach(t),Qf.forEach(t),Ym=p(o),yo=s(o,"DIV",{class:!0});var Vf=r(yo);b(Or.$$.fragment,Vf),a_=p(Vf),Lr=s(Vf,"P",{});var Kf=r(Lr);i_=i(Kf,"Output type of "),rd=s(Kf,"A",{href:!0});var YF=r(rd);l_=i(YF,"TFElectraForPreTraining"),YF.forEach(t),d_=i(Kf,"."),Kf.forEach(t),Vf.forEach(t),Zm=p(o),bo=s(o,"H2",{class:!0});var Jf=r(bo);wn=s(Jf,"A",{id:!0,class:!0,href:!0});var ZF=r(wn);wc=s(ZF,"SPAN",{});var e2=r(wc);b(Nr.$$.fragment,e2),e2.forEach(t),ZF.forEach(t),c_=p(Jf),$c=s(Jf,"SPAN",{});var t2=r($c);p_=i(t2,"ElectraModel"),t2.forEach(t),Jf.forEach(t),ef=p(o),Ze=s(o,"DIV",{class:!0});var no=r(Ze);b(Ir.$$.fragment,no),h_=p(no),Fc=s(no,"P",{});var o2=r(Fc);m_=i(o2,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),o2.forEach(t),f_=p(no),Sr=s(no,"P",{});var Gf=r(Sr);u_=i(Gf,"This model inherits from "),ad=s(Gf,"A",{href:!0});var n2=r(ad);g_=i(n2,"PreTrainedModel"),n2.forEach(t),__=i(Gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf.forEach(t),k_=p(no),Dr=s(no,"P",{});var Xf=r(Dr);T_=i(Xf,"This model is also a PyTorch "),Wr=s(Xf,"A",{href:!0,rel:!0});var s2=r(Wr);v_=i(s2,"torch.nn.Module"),s2.forEach(t),y_=i(Xf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xf.forEach(t),b_=p(no),Et=s(no,"DIV",{class:!0});var tr=r(Et);b(Ur.$$.fragment,tr),E_=p(tr),Eo=s(tr,"P",{});var Rd=r(Eo);w_=i(Rd,"The "),id=s(Rd,"A",{href:!0});var r2=r(id);$_=i(r2,"ElectraModel"),r2.forEach(t),F_=i(Rd," forward method, overrides the "),xc=s(Rd,"CODE",{});var a2=r(xc);x_=i(a2,"__call__"),a2.forEach(t),M_=i(Rd," special method."),Rd.forEach(t),z_=p(tr),b($n.$$.fragment,tr),q_=p(tr),b(Fn.$$.fragment,tr),tr.forEach(t),no.forEach(t),tf=p(o),wo=s(o,"H2",{class:!0});var Yf=r(wo);xn=s(Yf,"A",{id:!0,class:!0,href:!0});var i2=r(xn);Mc=s(i2,"SPAN",{});var l2=r(Mc);b(Rr.$$.fragment,l2),l2.forEach(t),i2.forEach(t),C_=p(Yf),zc=s(Yf,"SPAN",{});var d2=r(zc);j_=i(d2,"ElectraForPreTraining"),d2.forEach(t),Yf.forEach(t),of=p(o),He=s(o,"DIV",{class:!0});var Nt=r(He);b(Hr.$$.fragment,Nt),P_=p(Nt),qc=s(Nt,"P",{});var c2=r(qc);A_=i(c2,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),c2.forEach(t),O_=p(Nt),Cc=s(Nt,"P",{});var p2=r(Cc);L_=i(p2,"It is recommended to load the discriminator checkpoint into that model."),p2.forEach(t),N_=p(Nt),Qr=s(Nt,"P",{});var Zf=r(Qr);I_=i(Zf,"This model inherits from "),ld=s(Zf,"A",{href:!0});var h2=r(ld);S_=i(h2,"PreTrainedModel"),h2.forEach(t),D_=i(Zf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf.forEach(t),W_=p(Nt),Br=s(Nt,"P",{});var eu=r(Br);U_=i(eu,"This model is also a PyTorch "),Vr=s(eu,"A",{href:!0,rel:!0});var m2=r(Vr);R_=i(m2,"torch.nn.Module"),m2.forEach(t),H_=i(eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eu.forEach(t),Q_=p(Nt),wt=s(Nt,"DIV",{class:!0});var or=r(wt);b(Kr.$$.fragment,or),B_=p(or),$o=s(or,"P",{});var Hd=r($o);V_=i(Hd,"The "),dd=s(Hd,"A",{href:!0});var f2=r(dd);K_=i(f2,"ElectraForPreTraining"),f2.forEach(t),J_=i(Hd," forward method, overrides the "),jc=s(Hd,"CODE",{});var u2=r(jc);G_=i(u2,"__call__"),u2.forEach(t),X_=i(Hd," special method."),Hd.forEach(t),Y_=p(or),b(Mn.$$.fragment,or),Z_=p(or),b(zn.$$.fragment,or),or.forEach(t),Nt.forEach(t),nf=p(o),Fo=s(o,"H2",{class:!0});var tu=r(Fo);qn=s(tu,"A",{id:!0,class:!0,href:!0});var g2=r(qn);Pc=s(g2,"SPAN",{});var _2=r(Pc);b(Jr.$$.fragment,_2),_2.forEach(t),g2.forEach(t),ek=p(tu),Ac=s(tu,"SPAN",{});var k2=r(Ac);tk=i(k2,"ElectraForCausalLM"),k2.forEach(t),tu.forEach(t),sf=p(o),et=s(o,"DIV",{class:!0});var so=r(et);b(Gr.$$.fragment,so),ok=p(so),Xr=s(so,"P",{});var ou=r(Xr);nk=i(ou,"ELECTRA Model with a "),Oc=s(ou,"CODE",{});var T2=r(Oc);sk=i(T2,"language modeling"),T2.forEach(t),rk=i(ou," head on top for CLM fine-tuning."),ou.forEach(t),ak=p(so),Yr=s(so,"P",{});var nu=r(Yr);ik=i(nu,"This model inherits from "),cd=s(nu,"A",{href:!0});var v2=r(cd);lk=i(v2,"PreTrainedModel"),v2.forEach(t),dk=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nu.forEach(t),ck=p(so),Zr=s(so,"P",{});var su=r(Zr);pk=i(su,"This model is also a PyTorch "),ea=s(su,"A",{href:!0,rel:!0});var y2=r(ea);hk=i(y2,"torch.nn.Module"),y2.forEach(t),mk=i(su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su.forEach(t),fk=p(so),$t=s(so,"DIV",{class:!0});var nr=r($t);b(ta.$$.fragment,nr),uk=p(nr),xo=s(nr,"P",{});var Qd=r(xo);gk=i(Qd,"The "),pd=s(Qd,"A",{href:!0});var b2=r(pd);_k=i(b2,"ElectraForCausalLM"),b2.forEach(t),kk=i(Qd," forward method, overrides the "),Lc=s(Qd,"CODE",{});var E2=r(Lc);Tk=i(E2,"__call__"),E2.forEach(t),vk=i(Qd," special method."),Qd.forEach(t),yk=p(nr),b(Cn.$$.fragment,nr),bk=p(nr),b(jn.$$.fragment,nr),nr.forEach(t),so.forEach(t),rf=p(o),Mo=s(o,"H2",{class:!0});var ru=r(Mo);Pn=s(ru,"A",{id:!0,class:!0,href:!0});var w2=r(Pn);Nc=s(w2,"SPAN",{});var $2=r(Nc);b(oa.$$.fragment,$2),$2.forEach(t),w2.forEach(t),Ek=p(ru),Ic=s(ru,"SPAN",{});var F2=r(Ic);wk=i(F2,"ElectraForMaskedLM"),F2.forEach(t),ru.forEach(t),af=p(o),Qe=s(o,"DIV",{class:!0});var It=r(Qe);b(na.$$.fragment,It),$k=p(It),Sc=s(It,"P",{});var x2=r(Sc);Fk=i(x2,"Electra model with a language modeling head on top."),x2.forEach(t),xk=p(It),Dc=s(It,"P",{});var M2=r(Dc);Mk=i(M2,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),M2.forEach(t),zk=p(It),sa=s(It,"P",{});var au=r(sa);qk=i(au,"This model inherits from "),hd=s(au,"A",{href:!0});var z2=r(hd);Ck=i(z2,"PreTrainedModel"),z2.forEach(t),jk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),Pk=p(It),ra=s(It,"P",{});var iu=r(ra);Ak=i(iu,"This model is also a PyTorch "),aa=s(iu,"A",{href:!0,rel:!0});var q2=r(aa);Ok=i(q2,"torch.nn.Module"),q2.forEach(t),Lk=i(iu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iu.forEach(t),Nk=p(It),st=s(It,"DIV",{class:!0});var ro=r(st);b(ia.$$.fragment,ro),Ik=p(ro),zo=s(ro,"P",{});var Bd=r(zo);Sk=i(Bd,"The "),md=s(Bd,"A",{href:!0});var C2=r(md);Dk=i(C2,"ElectraForMaskedLM"),C2.forEach(t),Wk=i(Bd," forward method, overrides the "),Wc=s(Bd,"CODE",{});var j2=r(Wc);Uk=i(j2,"__call__"),j2.forEach(t),Rk=i(Bd," special method."),Bd.forEach(t),Hk=p(ro),b(An.$$.fragment,ro),Qk=p(ro),b(On.$$.fragment,ro),Bk=p(ro),b(Ln.$$.fragment,ro),ro.forEach(t),It.forEach(t),lf=p(o),qo=s(o,"H2",{class:!0});var lu=r(qo);Nn=s(lu,"A",{id:!0,class:!0,href:!0});var P2=r(Nn);Uc=s(P2,"SPAN",{});var A2=r(Uc);b(la.$$.fragment,A2),A2.forEach(t),P2.forEach(t),Vk=p(lu),Rc=s(lu,"SPAN",{});var O2=r(Rc);Kk=i(O2,"ElectraForSequenceClassification"),O2.forEach(t),lu.forEach(t),df=p(o),tt=s(o,"DIV",{class:!0});var ao=r(tt);b(da.$$.fragment,ao),Jk=p(ao),Hc=s(ao,"P",{});var L2=r(Hc);Gk=i(L2,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),L2.forEach(t),Xk=p(ao),ca=s(ao,"P",{});var du=r(ca);Yk=i(du,"This model inherits from "),fd=s(du,"A",{href:!0});var N2=r(fd);Zk=i(N2,"PreTrainedModel"),N2.forEach(t),e1=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),t1=p(ao),pa=s(ao,"P",{});var cu=r(pa);o1=i(cu,"This model is also a PyTorch "),ha=s(cu,"A",{href:!0,rel:!0});var I2=r(ha);n1=i(I2,"torch.nn.Module"),I2.forEach(t),s1=i(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(t),r1=p(ao),Re=s(ao,"DIV",{class:!0});var pt=r(Re);b(ma.$$.fragment,pt),a1=p(pt),Co=s(pt,"P",{});var Vd=r(Co);i1=i(Vd,"The "),ud=s(Vd,"A",{href:!0});var S2=r(ud);l1=i(S2,"ElectraForSequenceClassification"),S2.forEach(t),d1=i(Vd," forward method, overrides the "),Qc=s(Vd,"CODE",{});var D2=r(Qc);c1=i(D2,"__call__"),D2.forEach(t),p1=i(Vd," special method."),Vd.forEach(t),h1=p(pt),b(In.$$.fragment,pt),m1=p(pt),b(Sn.$$.fragment,pt),f1=p(pt),b(Dn.$$.fragment,pt),u1=p(pt),b(Wn.$$.fragment,pt),g1=p(pt),b(Un.$$.fragment,pt),pt.forEach(t),ao.forEach(t),cf=p(o),jo=s(o,"H2",{class:!0});var pu=r(jo);Rn=s(pu,"A",{id:!0,class:!0,href:!0});var W2=r(Rn);Bc=s(W2,"SPAN",{});var U2=r(Bc);b(fa.$$.fragment,U2),U2.forEach(t),W2.forEach(t),_1=p(pu),Vc=s(pu,"SPAN",{});var R2=r(Vc);k1=i(R2,"ElectraForMultipleChoice"),R2.forEach(t),pu.forEach(t),pf=p(o),ot=s(o,"DIV",{class:!0});var io=r(ot);b(ua.$$.fragment,io),T1=p(io),Kc=s(io,"P",{});var H2=r(Kc);v1=i(H2,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),H2.forEach(t),y1=p(io),ga=s(io,"P",{});var hu=r(ga);b1=i(hu,"This model inherits from "),gd=s(hu,"A",{href:!0});var Q2=r(gd);E1=i(Q2,"PreTrainedModel"),Q2.forEach(t),w1=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu.forEach(t),$1=p(io),_a=s(io,"P",{});var mu=r(_a);F1=i(mu,"This model is also a PyTorch "),ka=s(mu,"A",{href:!0,rel:!0});var B2=r(ka);x1=i(B2,"torch.nn.Module"),B2.forEach(t),M1=i(mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu.forEach(t),z1=p(io),Ft=s(io,"DIV",{class:!0});var sr=r(Ft);b(Ta.$$.fragment,sr),q1=p(sr),Po=s(sr,"P",{});var Kd=r(Po);C1=i(Kd,"The "),_d=s(Kd,"A",{href:!0});var V2=r(_d);j1=i(V2,"ElectraForMultipleChoice"),V2.forEach(t),P1=i(Kd," forward method, overrides the "),Jc=s(Kd,"CODE",{});var K2=r(Jc);A1=i(K2,"__call__"),K2.forEach(t),O1=i(Kd," special method."),Kd.forEach(t),L1=p(sr),b(Hn.$$.fragment,sr),N1=p(sr),b(Qn.$$.fragment,sr),sr.forEach(t),io.forEach(t),hf=p(o),Ao=s(o,"H2",{class:!0});var fu=r(Ao);Bn=s(fu,"A",{id:!0,class:!0,href:!0});var J2=r(Bn);Gc=s(J2,"SPAN",{});var G2=r(Gc);b(va.$$.fragment,G2),G2.forEach(t),J2.forEach(t),I1=p(fu),Xc=s(fu,"SPAN",{});var X2=r(Xc);S1=i(X2,"ElectraForTokenClassification"),X2.forEach(t),fu.forEach(t),mf=p(o),Be=s(o,"DIV",{class:!0});var St=r(Be);b(ya.$$.fragment,St),D1=p(St),Yc=s(St,"P",{});var Y2=r(Yc);W1=i(Y2,"Electra model with a token classification head on top."),Y2.forEach(t),U1=p(St),Zc=s(St,"P",{});var Z2=r(Zc);R1=i(Z2,"Both the discriminator and generator may be loaded into this model."),Z2.forEach(t),H1=p(St),ba=s(St,"P",{});var uu=r(ba);Q1=i(uu,"This model inherits from "),kd=s(uu,"A",{href:!0});var e0=r(kd);B1=i(e0,"PreTrainedModel"),e0.forEach(t),V1=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),K1=p(St),Ea=s(St,"P",{});var gu=r(Ea);J1=i(gu,"This model is also a PyTorch "),wa=s(gu,"A",{href:!0,rel:!0});var t0=r(wa);G1=i(t0,"torch.nn.Module"),t0.forEach(t),X1=i(gu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gu.forEach(t),Y1=p(St),rt=s(St,"DIV",{class:!0});var lo=r(rt);b($a.$$.fragment,lo),Z1=p(lo),Oo=s(lo,"P",{});var Jd=r(Oo);eT=i(Jd,"The "),Td=s(Jd,"A",{href:!0});var o0=r(Td);tT=i(o0,"ElectraForTokenClassification"),o0.forEach(t),oT=i(Jd," forward method, overrides the "),ep=s(Jd,"CODE",{});var n0=r(ep);nT=i(n0,"__call__"),n0.forEach(t),sT=i(Jd," special method."),Jd.forEach(t),rT=p(lo),b(Vn.$$.fragment,lo),aT=p(lo),b(Kn.$$.fragment,lo),iT=p(lo),b(Jn.$$.fragment,lo),lo.forEach(t),St.forEach(t),ff=p(o),Lo=s(o,"H2",{class:!0});var _u=r(Lo);Gn=s(_u,"A",{id:!0,class:!0,href:!0});var s0=r(Gn);tp=s(s0,"SPAN",{});var r0=r(tp);b(Fa.$$.fragment,r0),r0.forEach(t),s0.forEach(t),lT=p(_u),op=s(_u,"SPAN",{});var a0=r(op);dT=i(a0,"ElectraForQuestionAnswering"),a0.forEach(t),_u.forEach(t),uf=p(o),nt=s(o,"DIV",{class:!0});var co=r(nt);b(xa.$$.fragment,co),cT=p(co),No=s(co,"P",{});var Gd=r(No);pT=i(Gd,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=s(Gd,"CODE",{});var i0=r(np);hT=i(i0,"span start logits"),i0.forEach(t),mT=i(Gd," and "),sp=s(Gd,"CODE",{});var l0=r(sp);fT=i(l0,"span end logits"),l0.forEach(t),uT=i(Gd,")."),Gd.forEach(t),gT=p(co),Ma=s(co,"P",{});var ku=r(Ma);_T=i(ku,"This model inherits from "),vd=s(ku,"A",{href:!0});var d0=r(vd);kT=i(d0,"PreTrainedModel"),d0.forEach(t),TT=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),vT=p(co),za=s(co,"P",{});var Tu=r(za);yT=i(Tu,"This model is also a PyTorch "),qa=s(Tu,"A",{href:!0,rel:!0});var c0=r(qa);bT=i(c0,"torch.nn.Module"),c0.forEach(t),ET=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),wT=p(co),at=s(co,"DIV",{class:!0});var po=r(at);b(Ca.$$.fragment,po),$T=p(po),Io=s(po,"P",{});var Xd=r(Io);FT=i(Xd,"The "),yd=s(Xd,"A",{href:!0});var p0=r(yd);xT=i(p0,"ElectraForQuestionAnswering"),p0.forEach(t),MT=i(Xd," forward method, overrides the "),rp=s(Xd,"CODE",{});var h0=r(rp);zT=i(h0,"__call__"),h0.forEach(t),qT=i(Xd," special method."),Xd.forEach(t),CT=p(po),b(Xn.$$.fragment,po),jT=p(po),b(Yn.$$.fragment,po),PT=p(po),b(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),gf=p(o),So=s(o,"H2",{class:!0});var vu=r(So);es=s(vu,"A",{id:!0,class:!0,href:!0});var m0=r(es);ap=s(m0,"SPAN",{});var f0=r(ap);b(ja.$$.fragment,f0),f0.forEach(t),m0.forEach(t),AT=p(vu),ip=s(vu,"SPAN",{});var u0=r(ip);OT=i(u0,"TFElectraModel"),u0.forEach(t),vu.forEach(t),_f=p(o),Ve=s(o,"DIV",{class:!0});var Dt=r(Ve);b(Pa.$$.fragment,Dt),LT=p(Dt),lp=s(Dt,"P",{});var g0=r(lp);NT=i(g0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),g0.forEach(t),IT=p(Dt),Aa=s(Dt,"P",{});var yu=r(Aa);ST=i(yu,"This model inherits from "),bd=s(yu,"A",{href:!0});var _0=r(bd);DT=i(_0,"TFPreTrainedModel"),_0.forEach(t),WT=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),UT=p(Dt),Oa=s(Dt,"P",{});var bu=r(Oa);RT=i(bu,"This model is also a "),La=s(bu,"A",{href:!0,rel:!0});var k0=r(La);HT=i(k0,"tf.keras.Model"),k0.forEach(t),QT=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),BT=p(Dt),b(ts.$$.fragment,Dt),VT=p(Dt),xt=s(Dt,"DIV",{class:!0});var rr=r(xt);b(Na.$$.fragment,rr),KT=p(rr),Do=s(rr,"P",{});var Yd=r(Do);JT=i(Yd,"The "),Ed=s(Yd,"A",{href:!0});var T0=r(Ed);GT=i(T0,"TFElectraModel"),T0.forEach(t),XT=i(Yd," forward method, overrides the "),dp=s(Yd,"CODE",{});var v0=r(dp);YT=i(v0,"__call__"),v0.forEach(t),ZT=i(Yd," special method."),Yd.forEach(t),ev=p(rr),b(os.$$.fragment,rr),tv=p(rr),b(ns.$$.fragment,rr),rr.forEach(t),Dt.forEach(t),kf=p(o),Wo=s(o,"H2",{class:!0});var Eu=r(Wo);ss=s(Eu,"A",{id:!0,class:!0,href:!0});var y0=r(ss);cp=s(y0,"SPAN",{});var b0=r(cp);b(Ia.$$.fragment,b0),b0.forEach(t),y0.forEach(t),ov=p(Eu),pp=s(Eu,"SPAN",{});var E0=r(pp);nv=i(E0,"TFElectraForPreTraining"),E0.forEach(t),Eu.forEach(t),Tf=p(o),Oe=s(o,"DIV",{class:!0});var ht=r(Oe);b(Sa.$$.fragment,ht),sv=p(ht),hp=s(ht,"P",{});var w0=r(hp);rv=i(w0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),w0.forEach(t),av=p(ht),mp=s(ht,"P",{});var $0=r(mp);iv=i($0,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),$0.forEach(t),lv=p(ht),Da=s(ht,"P",{});var wu=r(Da);dv=i(wu,"This model inherits from "),wd=s(wu,"A",{href:!0});var F0=r(wd);cv=i(F0,"TFPreTrainedModel"),F0.forEach(t),pv=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),hv=p(ht),Wa=s(ht,"P",{});var $u=r(Wa);mv=i($u,"This model is also a "),Ua=s($u,"A",{href:!0,rel:!0});var x0=r(Ua);fv=i(x0,"tf.keras.Model"),x0.forEach(t),uv=i($u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$u.forEach(t),gv=p(ht),b(rs.$$.fragment,ht),_v=p(ht),Mt=s(ht,"DIV",{class:!0});var ar=r(Mt);b(Ra.$$.fragment,ar),kv=p(ar),Uo=s(ar,"P",{});var Zd=r(Uo);Tv=i(Zd,"The "),$d=s(Zd,"A",{href:!0});var M0=r($d);vv=i(M0,"TFElectraForPreTraining"),M0.forEach(t),yv=i(Zd," forward method, overrides the "),fp=s(Zd,"CODE",{});var z0=r(fp);bv=i(z0,"__call__"),z0.forEach(t),Ev=i(Zd," special method."),Zd.forEach(t),wv=p(ar),b(as.$$.fragment,ar),$v=p(ar),b(is.$$.fragment,ar),ar.forEach(t),ht.forEach(t),vf=p(o),Ro=s(o,"H2",{class:!0});var Fu=r(Ro);ls=s(Fu,"A",{id:!0,class:!0,href:!0});var q0=r(ls);up=s(q0,"SPAN",{});var C0=r(up);b(Ha.$$.fragment,C0),C0.forEach(t),q0.forEach(t),Fv=p(Fu),gp=s(Fu,"SPAN",{});var j0=r(gp);xv=i(j0,"TFElectraForMaskedLM"),j0.forEach(t),Fu.forEach(t),yf=p(o),Le=s(o,"DIV",{class:!0});var mt=r(Le);b(Qa.$$.fragment,mt),Mv=p(mt),_p=s(mt,"P",{});var P0=r(_p);zv=i(P0,"Electra model with a language modeling head on top."),P0.forEach(t),qv=p(mt),kp=s(mt,"P",{});var A0=r(kp);Cv=i(A0,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),A0.forEach(t),jv=p(mt),Ba=s(mt,"P",{});var xu=r(Ba);Pv=i(xu,"This model inherits from "),Fd=s(xu,"A",{href:!0});var O0=r(Fd);Av=i(O0,"TFPreTrainedModel"),O0.forEach(t),Ov=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),Lv=p(mt),Va=s(mt,"P",{});var Mu=r(Va);Nv=i(Mu,"This model is also a "),Ka=s(Mu,"A",{href:!0,rel:!0});var L0=r(Ka);Iv=i(L0,"tf.keras.Model"),L0.forEach(t),Sv=i(Mu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mu.forEach(t),Dv=p(mt),b(ds.$$.fragment,mt),Wv=p(mt),it=s(mt,"DIV",{class:!0});var ho=r(it);b(Ja.$$.fragment,ho),Uv=p(ho),Ho=s(ho,"P",{});var ec=r(Ho);Rv=i(ec,"The "),xd=s(ec,"A",{href:!0});var N0=r(xd);Hv=i(N0,"TFElectraForMaskedLM"),N0.forEach(t),Qv=i(ec," forward method, overrides the "),Tp=s(ec,"CODE",{});var I0=r(Tp);Bv=i(I0,"__call__"),I0.forEach(t),Vv=i(ec," special method."),ec.forEach(t),Kv=p(ho),b(cs.$$.fragment,ho),Jv=p(ho),b(ps.$$.fragment,ho),Gv=p(ho),b(hs.$$.fragment,ho),ho.forEach(t),mt.forEach(t),bf=p(o),Qo=s(o,"H2",{class:!0});var zu=r(Qo);ms=s(zu,"A",{id:!0,class:!0,href:!0});var S0=r(ms);vp=s(S0,"SPAN",{});var D0=r(vp);b(Ga.$$.fragment,D0),D0.forEach(t),S0.forEach(t),Xv=p(zu),yp=s(zu,"SPAN",{});var W0=r(yp);Yv=i(W0,"TFElectraForSequenceClassification"),W0.forEach(t),zu.forEach(t),Ef=p(o),Ke=s(o,"DIV",{class:!0});var Wt=r(Ke);b(Xa.$$.fragment,Wt),Zv=p(Wt),bp=s(Wt,"P",{});var U0=r(bp);ey=i(U0,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),U0.forEach(t),ty=p(Wt),Ya=s(Wt,"P",{});var qu=r(Ya);oy=i(qu,"This model inherits from "),Md=s(qu,"A",{href:!0});var R0=r(Md);ny=i(R0,"TFPreTrainedModel"),R0.forEach(t),sy=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),ry=p(Wt),Za=s(Wt,"P",{});var Cu=r(Za);ay=i(Cu,"This model is also a "),ei=s(Cu,"A",{href:!0,rel:!0});var H0=r(ei);iy=i(H0,"tf.keras.Model"),H0.forEach(t),ly=i(Cu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cu.forEach(t),dy=p(Wt),b(fs.$$.fragment,Wt),cy=p(Wt),lt=s(Wt,"DIV",{class:!0});var mo=r(lt);b(ti.$$.fragment,mo),py=p(mo),Bo=s(mo,"P",{});var tc=r(Bo);hy=i(tc,"The "),zd=s(tc,"A",{href:!0});var Q0=r(zd);my=i(Q0,"TFElectraForSequenceClassification"),Q0.forEach(t),fy=i(tc," forward method, overrides the "),Ep=s(tc,"CODE",{});var B0=r(Ep);uy=i(B0,"__call__"),B0.forEach(t),gy=i(tc," special method."),tc.forEach(t),_y=p(mo),b(us.$$.fragment,mo),ky=p(mo),b(gs.$$.fragment,mo),Ty=p(mo),b(_s.$$.fragment,mo),mo.forEach(t),Wt.forEach(t),wf=p(o),Vo=s(o,"H2",{class:!0});var ju=r(Vo);ks=s(ju,"A",{id:!0,class:!0,href:!0});var V0=r(ks);wp=s(V0,"SPAN",{});var K0=r(wp);b(oi.$$.fragment,K0),K0.forEach(t),V0.forEach(t),vy=p(ju),$p=s(ju,"SPAN",{});var J0=r($p);yy=i(J0,"TFElectraForMultipleChoice"),J0.forEach(t),ju.forEach(t),$f=p(o),Je=s(o,"DIV",{class:!0});var Ut=r(Je);b(ni.$$.fragment,Ut),by=p(Ut),Fp=s(Ut,"P",{});var G0=r(Fp);Ey=i(G0,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),G0.forEach(t),wy=p(Ut),si=s(Ut,"P",{});var Pu=r(si);$y=i(Pu,"This model inherits from "),qd=s(Pu,"A",{href:!0});var X0=r(qd);Fy=i(X0,"TFPreTrainedModel"),X0.forEach(t),xy=i(Pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu.forEach(t),My=p(Ut),ri=s(Ut,"P",{});var Au=r(ri);zy=i(Au,"This model is also a "),ai=s(Au,"A",{href:!0,rel:!0});var Y0=r(ai);qy=i(Y0,"tf.keras.Model"),Y0.forEach(t),Cy=i(Au,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au.forEach(t),jy=p(Ut),b(Ts.$$.fragment,Ut),Py=p(Ut),zt=s(Ut,"DIV",{class:!0});var ir=r(zt);b(ii.$$.fragment,ir),Ay=p(ir),Ko=s(ir,"P",{});var oc=r(Ko);Oy=i(oc,"The "),Cd=s(oc,"A",{href:!0});var Z0=r(Cd);Ly=i(Z0,"TFElectraForMultipleChoice"),Z0.forEach(t),Ny=i(oc," forward method, overrides the "),xp=s(oc,"CODE",{});var ex=r(xp);Iy=i(ex,"__call__"),ex.forEach(t),Sy=i(oc," special method."),oc.forEach(t),Dy=p(ir),b(vs.$$.fragment,ir),Wy=p(ir),b(ys.$$.fragment,ir),ir.forEach(t),Ut.forEach(t),Ff=p(o),Jo=s(o,"H2",{class:!0});var Ou=r(Jo);bs=s(Ou,"A",{id:!0,class:!0,href:!0});var tx=r(bs);Mp=s(tx,"SPAN",{});var ox=r(Mp);b(li.$$.fragment,ox),ox.forEach(t),tx.forEach(t),Uy=p(Ou),zp=s(Ou,"SPAN",{});var nx=r(zp);Ry=i(nx,"TFElectraForTokenClassification"),nx.forEach(t),Ou.forEach(t),xf=p(o),Ne=s(o,"DIV",{class:!0});var ft=r(Ne);b(di.$$.fragment,ft),Hy=p(ft),qp=s(ft,"P",{});var sx=r(qp);Qy=i(sx,"Electra model with a token classification head on top."),sx.forEach(t),By=p(ft),Cp=s(ft,"P",{});var rx=r(Cp);Vy=i(rx,"Both the discriminator and generator may be loaded into this model."),rx.forEach(t),Ky=p(ft),ci=s(ft,"P",{});var Lu=r(ci);Jy=i(Lu,"This model inherits from "),jd=s(Lu,"A",{href:!0});var ax=r(jd);Gy=i(ax,"TFPreTrainedModel"),ax.forEach(t),Xy=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Yy=p(ft),pi=s(ft,"P",{});var Nu=r(pi);Zy=i(Nu,"This model is also a "),hi=s(Nu,"A",{href:!0,rel:!0});var ix=r(hi);eb=i(ix,"tf.keras.Model"),ix.forEach(t),tb=i(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(t),ob=p(ft),b(Es.$$.fragment,ft),nb=p(ft),dt=s(ft,"DIV",{class:!0});var fo=r(dt);b(mi.$$.fragment,fo),sb=p(fo),Go=s(fo,"P",{});var nc=r(Go);rb=i(nc,"The "),Pd=s(nc,"A",{href:!0});var lx=r(Pd);ab=i(lx,"TFElectraForTokenClassification"),lx.forEach(t),ib=i(nc," forward method, overrides the "),jp=s(nc,"CODE",{});var dx=r(jp);lb=i(dx,"__call__"),dx.forEach(t),db=i(nc," special method."),nc.forEach(t),cb=p(fo),b(ws.$$.fragment,fo),pb=p(fo),b($s.$$.fragment,fo),hb=p(fo),b(Fs.$$.fragment,fo),fo.forEach(t),ft.forEach(t),Mf=p(o),Xo=s(o,"H2",{class:!0});var Iu=r(Xo);xs=s(Iu,"A",{id:!0,class:!0,href:!0});var cx=r(xs);Pp=s(cx,"SPAN",{});var px=r(Pp);b(fi.$$.fragment,px),px.forEach(t),cx.forEach(t),mb=p(Iu),Ap=s(Iu,"SPAN",{});var hx=r(Ap);fb=i(hx,"TFElectraForQuestionAnswering"),hx.forEach(t),Iu.forEach(t),zf=p(o),Ge=s(o,"DIV",{class:!0});var Rt=r(Ge);b(ui.$$.fragment,Rt),ub=p(Rt),Yo=s(Rt,"P",{});var sc=r(Yo);gb=i(sc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=s(sc,"CODE",{});var mx=r(Op);_b=i(mx,"span start logits"),mx.forEach(t),kb=i(sc," and "),Lp=s(sc,"CODE",{});var fx=r(Lp);Tb=i(fx,"span end logits"),fx.forEach(t),vb=i(sc,")."),sc.forEach(t),yb=p(Rt),gi=s(Rt,"P",{});var Su=r(gi);bb=i(Su,"This model inherits from "),Ad=s(Su,"A",{href:!0});var ux=r(Ad);Eb=i(ux,"TFPreTrainedModel"),ux.forEach(t),wb=i(Su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Su.forEach(t),$b=p(Rt),_i=s(Rt,"P",{});var Du=r(_i);Fb=i(Du,"This model is also a "),ki=s(Du,"A",{href:!0,rel:!0});var gx=r(ki);xb=i(gx,"tf.keras.Model"),gx.forEach(t),Mb=i(Du,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du.forEach(t),zb=p(Rt),b(Ms.$$.fragment,Rt),qb=p(Rt),ct=s(Rt,"DIV",{class:!0});var uo=r(ct);b(Ti.$$.fragment,uo),Cb=p(uo),Zo=s(uo,"P",{});var rc=r(Zo);jb=i(rc,"The "),Od=s(rc,"A",{href:!0});var _x=r(Od);Pb=i(_x,"TFElectraForQuestionAnswering"),_x.forEach(t),Ab=i(rc," forward method, overrides the "),Np=s(rc,"CODE",{});var kx=r(Np);Ob=i(kx,"__call__"),kx.forEach(t),Lb=i(rc," special method."),rc.forEach(t),Nb=p(uo),b(zs.$$.fragment,uo),Ib=p(uo),b(qs.$$.fragment,uo),Sb=p(uo),b(Cs.$$.fragment,uo),uo.forEach(t),Rt.forEach(t),qf=p(o),en=s(o,"H2",{class:!0});var Wu=r(en);js=s(Wu,"A",{id:!0,class:!0,href:!0});var Tx=r(js);Ip=s(Tx,"SPAN",{});var vx=r(Ip);b(vi.$$.fragment,vx),vx.forEach(t),Tx.forEach(t),Db=p(Wu),Sp=s(Wu,"SPAN",{});var yx=r(Sp);Wb=i(yx,"FlaxElectraModel"),yx.forEach(t),Wu.forEach(t),Cf=p(o),Ie=s(o,"DIV",{class:!0});var ut=r(Ie);b(yi.$$.fragment,ut),Ub=p(ut),Dp=s(ut,"P",{});var bx=r(Dp);Rb=i(bx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),bx.forEach(t),Hb=p(ut),bi=s(ut,"P",{});var Uu=r(bi);Qb=i(Uu,"This model inherits from "),Ld=s(Uu,"A",{href:!0});var Ex=r(Ld);Bb=i(Ex,"FlaxPreTrainedModel"),Ex.forEach(t),Vb=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uu.forEach(t),Kb=p(ut),Ei=s(ut,"P",{});var Ru=r(Ei);Jb=i(Ru,`This model is also a Flax Linen
`),wi=s(Ru,"A",{href:!0,rel:!0});var wx=r(wi);Gb=i(wx,"flax.nn.Module"),wx.forEach(t),Xb=i(Ru,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ru.forEach(t),Yb=p(ut),Wp=s(ut,"P",{});var $x=r(Wp);Zb=i($x,"Finally, this model supports inherent JAX features such as:"),$x.forEach(t),eE=p(ut),Qt=s(ut,"UL",{});var lr=r(Qt);Up=s(lr,"LI",{});var Fx=r(Up);$i=s(Fx,"A",{href:!0,rel:!0});var xx=r($i);tE=i(xx,"Just-In-Time (JIT) compilation"),xx.forEach(t),Fx.forEach(t),oE=p(lr),Rp=s(lr,"LI",{});var Mx=r(Rp);Fi=s(Mx,"A",{href:!0,rel:!0});var zx=r(Fi);nE=i(zx,"Automatic Differentiation"),zx.forEach(t),Mx.forEach(t),sE=p(lr),Hp=s(lr,"LI",{});var qx=r(Hp);xi=s(qx,"A",{href:!0,rel:!0});var Cx=r(xi);rE=i(Cx,"Vectorization"),Cx.forEach(t),qx.forEach(t),aE=p(lr),Qp=s(lr,"LI",{});var jx=r(Qp);Mi=s(jx,"A",{href:!0,rel:!0});var Px=r(Mi);iE=i(Px,"Parallelization"),Px.forEach(t),jx.forEach(t),lr.forEach(t),lE=p(ut),qt=s(ut,"DIV",{class:!0});var dr=r(qt);b(zi.$$.fragment,dr),dE=p(dr),tn=s(dr,"P",{});var ac=r(tn);cE=i(ac,"The "),Bp=s(ac,"CODE",{});var Ax=r(Bp);pE=i(Ax,"FlaxElectraPreTrainedModel"),Ax.forEach(t),hE=i(ac," forward method, overrides the "),Vp=s(ac,"CODE",{});var Ox=r(Vp);mE=i(Ox,"__call__"),Ox.forEach(t),fE=i(ac," special method."),ac.forEach(t),uE=p(dr),b(Ps.$$.fragment,dr),gE=p(dr),b(As.$$.fragment,dr),dr.forEach(t),ut.forEach(t),jf=p(o),on=s(o,"H2",{class:!0});var Hu=r(on);Os=s(Hu,"A",{id:!0,class:!0,href:!0});var Lx=r(Os);Kp=s(Lx,"SPAN",{});var Nx=r(Kp);b(qi.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),_E=p(Hu),Jp=s(Hu,"SPAN",{});var Ix=r(Jp);kE=i(Ix,"FlaxElectraForPreTraining"),Ix.forEach(t),Hu.forEach(t),Pf=p(o),Pe=s(o,"DIV",{class:!0});var Xe=r(Pe);b(Ci.$$.fragment,Xe),TE=p(Xe),Gp=s(Xe,"P",{});var Sx=r(Gp);vE=i(Sx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Sx.forEach(t),yE=p(Xe),Xp=s(Xe,"P",{});var Dx=r(Xp);bE=i(Dx,"It is recommended to load the discriminator checkpoint into that model."),Dx.forEach(t),EE=p(Xe),ji=s(Xe,"P",{});var Qu=r(ji);wE=i(Qu,"This model inherits from "),Nd=s(Qu,"A",{href:!0});var Wx=r(Nd);$E=i(Wx,"FlaxPreTrainedModel"),Wx.forEach(t),FE=i(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qu.forEach(t),xE=p(Xe),Pi=s(Xe,"P",{});var Bu=r(Pi);ME=i(Bu,`This model is also a Flax Linen
`),Ai=s(Bu,"A",{href:!0,rel:!0});var Ux=r(Ai);zE=i(Ux,"flax.nn.Module"),Ux.forEach(t),qE=i(Bu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bu.forEach(t),CE=p(Xe),Yp=s(Xe,"P",{});var Rx=r(Yp);jE=i(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(t),PE=p(Xe),Bt=s(Xe,"UL",{});var cr=r(Bt);Zp=s(cr,"LI",{});var Hx=r(Zp);Oi=s(Hx,"A",{href:!0,rel:!0});var Qx=r(Oi);AE=i(Qx,"Just-In-Time (JIT) compilation"),Qx.forEach(t),Hx.forEach(t),OE=p(cr),eh=s(cr,"LI",{});var Bx=r(eh);Li=s(Bx,"A",{href:!0,rel:!0});var Vx=r(Li);LE=i(Vx,"Automatic Differentiation"),Vx.forEach(t),Bx.forEach(t),NE=p(cr),th=s(cr,"LI",{});var Kx=r(th);Ni=s(Kx,"A",{href:!0,rel:!0});var Jx=r(Ni);IE=i(Jx,"Vectorization"),Jx.forEach(t),Kx.forEach(t),SE=p(cr),oh=s(cr,"LI",{});var Gx=r(oh);Ii=s(Gx,"A",{href:!0,rel:!0});var Xx=r(Ii);DE=i(Xx,"Parallelization"),Xx.forEach(t),Gx.forEach(t),cr.forEach(t),WE=p(Xe),Ct=s(Xe,"DIV",{class:!0});var pr=r(Ct);b(Si.$$.fragment,pr),UE=p(pr),nn=s(pr,"P",{});var ic=r(nn);RE=i(ic,"The "),nh=s(ic,"CODE",{});var Yx=r(nh);HE=i(Yx,"FlaxElectraPreTrainedModel"),Yx.forEach(t),QE=i(ic," forward method, overrides the "),sh=s(ic,"CODE",{});var Zx=r(sh);BE=i(Zx,"__call__"),Zx.forEach(t),VE=i(ic," special method."),ic.forEach(t),KE=p(pr),b(Ls.$$.fragment,pr),JE=p(pr),b(Ns.$$.fragment,pr),pr.forEach(t),Xe.forEach(t),Af=p(o),sn=s(o,"H2",{class:!0});var Vu=r(sn);Is=s(Vu,"A",{id:!0,class:!0,href:!0});var eM=r(Is);rh=s(eM,"SPAN",{});var tM=r(rh);b(Di.$$.fragment,tM),tM.forEach(t),eM.forEach(t),GE=p(Vu),ah=s(Vu,"SPAN",{});var oM=r(ah);XE=i(oM,"FlaxElectraForMaskedLM"),oM.forEach(t),Vu.forEach(t),Of=p(o),Se=s(o,"DIV",{class:!0});var gt=r(Se);b(Wi.$$.fragment,gt),YE=p(gt),Ui=s(gt,"P",{});var Ku=r(Ui);ZE=i(Ku,"Electra Model with a "),ih=s(Ku,"CODE",{});var nM=r(ih);ew=i(nM,"language modeling"),nM.forEach(t),tw=i(Ku," head on top."),Ku.forEach(t),ow=p(gt),Ri=s(gt,"P",{});var Ju=r(Ri);nw=i(Ju,"This model inherits from "),Id=s(Ju,"A",{href:!0});var sM=r(Id);sw=i(sM,"FlaxPreTrainedModel"),sM.forEach(t),rw=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ju.forEach(t),aw=p(gt),Hi=s(gt,"P",{});var Gu=r(Hi);iw=i(Gu,`This model is also a Flax Linen
`),Qi=s(Gu,"A",{href:!0,rel:!0});var rM=r(Qi);lw=i(rM,"flax.nn.Module"),rM.forEach(t),dw=i(Gu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gu.forEach(t),cw=p(gt),lh=s(gt,"P",{});var aM=r(lh);pw=i(aM,"Finally, this model supports inherent JAX features such as:"),aM.forEach(t),hw=p(gt),Vt=s(gt,"UL",{});var hr=r(Vt);dh=s(hr,"LI",{});var iM=r(dh);Bi=s(iM,"A",{href:!0,rel:!0});var lM=r(Bi);mw=i(lM,"Just-In-Time (JIT) compilation"),lM.forEach(t),iM.forEach(t),fw=p(hr),ch=s(hr,"LI",{});var dM=r(ch);Vi=s(dM,"A",{href:!0,rel:!0});var cM=r(Vi);uw=i(cM,"Automatic Differentiation"),cM.forEach(t),dM.forEach(t),gw=p(hr),ph=s(hr,"LI",{});var pM=r(ph);Ki=s(pM,"A",{href:!0,rel:!0});var hM=r(Ki);_w=i(hM,"Vectorization"),hM.forEach(t),pM.forEach(t),kw=p(hr),hh=s(hr,"LI",{});var mM=r(hh);Ji=s(mM,"A",{href:!0,rel:!0});var fM=r(Ji);Tw=i(fM,"Parallelization"),fM.forEach(t),mM.forEach(t),hr.forEach(t),vw=p(gt),jt=s(gt,"DIV",{class:!0});var mr=r(jt);b(Gi.$$.fragment,mr),yw=p(mr),rn=s(mr,"P",{});var lc=r(rn);bw=i(lc,"The "),mh=s(lc,"CODE",{});var uM=r(mh);Ew=i(uM,"FlaxElectraPreTrainedModel"),uM.forEach(t),ww=i(lc," forward method, overrides the "),fh=s(lc,"CODE",{});var gM=r(fh);$w=i(gM,"__call__"),gM.forEach(t),Fw=i(lc," special method."),lc.forEach(t),xw=p(mr),b(Ss.$$.fragment,mr),Mw=p(mr),b(Ds.$$.fragment,mr),mr.forEach(t),gt.forEach(t),Lf=p(o),an=s(o,"H2",{class:!0});var Xu=r(an);Ws=s(Xu,"A",{id:!0,class:!0,href:!0});var _M=r(Ws);uh=s(_M,"SPAN",{});var kM=r(uh);b(Xi.$$.fragment,kM),kM.forEach(t),_M.forEach(t),zw=p(Xu),gh=s(Xu,"SPAN",{});var TM=r(gh);qw=i(TM,"FlaxElectraForSequenceClassification"),TM.forEach(t),Xu.forEach(t),Nf=p(o),De=s(o,"DIV",{class:!0});var _t=r(De);b(Yi.$$.fragment,_t),Cw=p(_t),_h=s(_t,"P",{});var vM=r(_h);jw=i(vM,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vM.forEach(t),Pw=p(_t),Zi=s(_t,"P",{});var Yu=r(Zi);Aw=i(Yu,"This model inherits from "),Sd=s(Yu,"A",{href:!0});var yM=r(Sd);Ow=i(yM,"FlaxPreTrainedModel"),yM.forEach(t),Lw=i(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yu.forEach(t),Nw=p(_t),el=s(_t,"P",{});var Zu=r(el);Iw=i(Zu,`This model is also a Flax Linen
`),tl=s(Zu,"A",{href:!0,rel:!0});var bM=r(tl);Sw=i(bM,"flax.nn.Module"),bM.forEach(t),Dw=i(Zu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zu.forEach(t),Ww=p(_t),kh=s(_t,"P",{});var EM=r(kh);Uw=i(EM,"Finally, this model supports inherent JAX features such as:"),EM.forEach(t),Rw=p(_t),Kt=s(_t,"UL",{});var fr=r(Kt);Th=s(fr,"LI",{});var wM=r(Th);ol=s(wM,"A",{href:!0,rel:!0});var $M=r(ol);Hw=i($M,"Just-In-Time (JIT) compilation"),$M.forEach(t),wM.forEach(t),Qw=p(fr),vh=s(fr,"LI",{});var FM=r(vh);nl=s(FM,"A",{href:!0,rel:!0});var xM=r(nl);Bw=i(xM,"Automatic Differentiation"),xM.forEach(t),FM.forEach(t),Vw=p(fr),yh=s(fr,"LI",{});var MM=r(yh);sl=s(MM,"A",{href:!0,rel:!0});var zM=r(sl);Kw=i(zM,"Vectorization"),zM.forEach(t),MM.forEach(t),Jw=p(fr),bh=s(fr,"LI",{});var qM=r(bh);rl=s(qM,"A",{href:!0,rel:!0});var CM=r(rl);Gw=i(CM,"Parallelization"),CM.forEach(t),qM.forEach(t),fr.forEach(t),Xw=p(_t),Pt=s(_t,"DIV",{class:!0});var ur=r(Pt);b(al.$$.fragment,ur),Yw=p(ur),ln=s(ur,"P",{});var dc=r(ln);Zw=i(dc,"The "),Eh=s(dc,"CODE",{});var jM=r(Eh);e$=i(jM,"FlaxElectraPreTrainedModel"),jM.forEach(t),t$=i(dc," forward method, overrides the "),wh=s(dc,"CODE",{});var PM=r(wh);o$=i(PM,"__call__"),PM.forEach(t),n$=i(dc," special method."),dc.forEach(t),s$=p(ur),b(Us.$$.fragment,ur),r$=p(ur),b(Rs.$$.fragment,ur),ur.forEach(t),_t.forEach(t),If=p(o),dn=s(o,"H2",{class:!0});var eg=r(dn);Hs=s(eg,"A",{id:!0,class:!0,href:!0});var AM=r(Hs);$h=s(AM,"SPAN",{});var OM=r($h);b(il.$$.fragment,OM),OM.forEach(t),AM.forEach(t),a$=p(eg),Fh=s(eg,"SPAN",{});var LM=r(Fh);i$=i(LM,"FlaxElectraForMultipleChoice"),LM.forEach(t),eg.forEach(t),Sf=p(o),We=s(o,"DIV",{class:!0});var kt=r(We);b(ll.$$.fragment,kt),l$=p(kt),xh=s(kt,"P",{});var NM=r(xh);d$=i(NM,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),NM.forEach(t),c$=p(kt),dl=s(kt,"P",{});var tg=r(dl);p$=i(tg,"This model inherits from "),Dd=s(tg,"A",{href:!0});var IM=r(Dd);h$=i(IM,"FlaxPreTrainedModel"),IM.forEach(t),m$=i(tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tg.forEach(t),f$=p(kt),cl=s(kt,"P",{});var og=r(cl);u$=i(og,`This model is also a Flax Linen
`),pl=s(og,"A",{href:!0,rel:!0});var SM=r(pl);g$=i(SM,"flax.nn.Module"),SM.forEach(t),_$=i(og,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),og.forEach(t),k$=p(kt),Mh=s(kt,"P",{});var DM=r(Mh);T$=i(DM,"Finally, this model supports inherent JAX features such as:"),DM.forEach(t),v$=p(kt),Jt=s(kt,"UL",{});var gr=r(Jt);zh=s(gr,"LI",{});var WM=r(zh);hl=s(WM,"A",{href:!0,rel:!0});var UM=r(hl);y$=i(UM,"Just-In-Time (JIT) compilation"),UM.forEach(t),WM.forEach(t),b$=p(gr),qh=s(gr,"LI",{});var RM=r(qh);ml=s(RM,"A",{href:!0,rel:!0});var HM=r(ml);E$=i(HM,"Automatic Differentiation"),HM.forEach(t),RM.forEach(t),w$=p(gr),Ch=s(gr,"LI",{});var QM=r(Ch);fl=s(QM,"A",{href:!0,rel:!0});var BM=r(fl);$$=i(BM,"Vectorization"),BM.forEach(t),QM.forEach(t),F$=p(gr),jh=s(gr,"LI",{});var VM=r(jh);ul=s(VM,"A",{href:!0,rel:!0});var KM=r(ul);x$=i(KM,"Parallelization"),KM.forEach(t),VM.forEach(t),gr.forEach(t),M$=p(kt),At=s(kt,"DIV",{class:!0});var _r=r(At);b(gl.$$.fragment,_r),z$=p(_r),cn=s(_r,"P",{});var cc=r(cn);q$=i(cc,"The "),Ph=s(cc,"CODE",{});var JM=r(Ph);C$=i(JM,"FlaxElectraPreTrainedModel"),JM.forEach(t),j$=i(cc," forward method, overrides the "),Ah=s(cc,"CODE",{});var GM=r(Ah);P$=i(GM,"__call__"),GM.forEach(t),A$=i(cc," special method."),cc.forEach(t),O$=p(_r),b(Qs.$$.fragment,_r),L$=p(_r),b(Bs.$$.fragment,_r),_r.forEach(t),kt.forEach(t),Df=p(o),pn=s(o,"H2",{class:!0});var ng=r(pn);Vs=s(ng,"A",{id:!0,class:!0,href:!0});var XM=r(Vs);Oh=s(XM,"SPAN",{});var YM=r(Oh);b(_l.$$.fragment,YM),YM.forEach(t),XM.forEach(t),N$=p(ng),Lh=s(ng,"SPAN",{});var ZM=r(Lh);I$=i(ZM,"FlaxElectraForTokenClassification"),ZM.forEach(t),ng.forEach(t),Wf=p(o),Ae=s(o,"DIV",{class:!0});var Ye=r(Ae);b(kl.$$.fragment,Ye),S$=p(Ye),Nh=s(Ye,"P",{});var e9=r(Nh);D$=i(e9,"Electra model with a token classification head on top."),e9.forEach(t),W$=p(Ye),Ih=s(Ye,"P",{});var t9=r(Ih);U$=i(t9,"Both the discriminator and generator may be loaded into this model."),t9.forEach(t),R$=p(Ye),Tl=s(Ye,"P",{});var sg=r(Tl);H$=i(sg,"This model inherits from "),Wd=s(sg,"A",{href:!0});var o9=r(Wd);Q$=i(o9,"FlaxPreTrainedModel"),o9.forEach(t),B$=i(sg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sg.forEach(t),V$=p(Ye),vl=s(Ye,"P",{});var rg=r(vl);K$=i(rg,`This model is also a Flax Linen
`),yl=s(rg,"A",{href:!0,rel:!0});var n9=r(yl);J$=i(n9,"flax.nn.Module"),n9.forEach(t),G$=i(rg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rg.forEach(t),X$=p(Ye),Sh=s(Ye,"P",{});var s9=r(Sh);Y$=i(s9,"Finally, this model supports inherent JAX features such as:"),s9.forEach(t),Z$=p(Ye),Gt=s(Ye,"UL",{});var kr=r(Gt);Dh=s(kr,"LI",{});var r9=r(Dh);bl=s(r9,"A",{href:!0,rel:!0});var a9=r(bl);eF=i(a9,"Just-In-Time (JIT) compilation"),a9.forEach(t),r9.forEach(t),tF=p(kr),Wh=s(kr,"LI",{});var i9=r(Wh);El=s(i9,"A",{href:!0,rel:!0});var l9=r(El);oF=i(l9,"Automatic Differentiation"),l9.forEach(t),i9.forEach(t),nF=p(kr),Uh=s(kr,"LI",{});var d9=r(Uh);wl=s(d9,"A",{href:!0,rel:!0});var c9=r(wl);sF=i(c9,"Vectorization"),c9.forEach(t),d9.forEach(t),rF=p(kr),Rh=s(kr,"LI",{});var p9=r(Rh);$l=s(p9,"A",{href:!0,rel:!0});var h9=r($l);aF=i(h9,"Parallelization"),h9.forEach(t),p9.forEach(t),kr.forEach(t),iF=p(Ye),Ot=s(Ye,"DIV",{class:!0});var Tr=r(Ot);b(Fl.$$.fragment,Tr),lF=p(Tr),hn=s(Tr,"P",{});var pc=r(hn);dF=i(pc,"The "),Hh=s(pc,"CODE",{});var m9=r(Hh);cF=i(m9,"FlaxElectraPreTrainedModel"),m9.forEach(t),pF=i(pc," forward method, overrides the "),Qh=s(pc,"CODE",{});var f9=r(Qh);hF=i(f9,"__call__"),f9.forEach(t),mF=i(pc," special method."),pc.forEach(t),fF=p(Tr),b(Ks.$$.fragment,Tr),uF=p(Tr),b(Js.$$.fragment,Tr),Tr.forEach(t),Ye.forEach(t),Uf=p(o),mn=s(o,"H2",{class:!0});var ag=r(mn);Gs=s(ag,"A",{id:!0,class:!0,href:!0});var u9=r(Gs);Bh=s(u9,"SPAN",{});var g9=r(Bh);b(xl.$$.fragment,g9),g9.forEach(t),u9.forEach(t),gF=p(ag),Vh=s(ag,"SPAN",{});var _9=r(Vh);_F=i(_9,"FlaxElectraForQuestionAnswering"),_9.forEach(t),ag.forEach(t),Rf=p(o),Ue=s(o,"DIV",{class:!0});var Tt=r(Ue);b(Ml.$$.fragment,Tt),kF=p(Tt),fn=s(Tt,"P",{});var hc=r(fn);TF=i(hc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=s(hc,"CODE",{});var k9=r(Kh);vF=i(k9,"span start logits"),k9.forEach(t),yF=i(hc," and "),Jh=s(hc,"CODE",{});var T9=r(Jh);bF=i(T9,"span end logits"),T9.forEach(t),EF=i(hc,")."),hc.forEach(t),wF=p(Tt),zl=s(Tt,"P",{});var ig=r(zl);$F=i(ig,"This model inherits from "),Ud=s(ig,"A",{href:!0});var v9=r(Ud);FF=i(v9,"FlaxPreTrainedModel"),v9.forEach(t),xF=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),MF=p(Tt),ql=s(Tt,"P",{});var lg=r(ql);zF=i(lg,`This model is also a Flax Linen
`),Cl=s(lg,"A",{href:!0,rel:!0});var y9=r(Cl);qF=i(y9,"flax.nn.Module"),y9.forEach(t),CF=i(lg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lg.forEach(t),jF=p(Tt),Gh=s(Tt,"P",{});var b9=r(Gh);PF=i(b9,"Finally, this model supports inherent JAX features such as:"),b9.forEach(t),AF=p(Tt),Xt=s(Tt,"UL",{});var vr=r(Xt);Xh=s(vr,"LI",{});var E9=r(Xh);jl=s(E9,"A",{href:!0,rel:!0});var w9=r(jl);OF=i(w9,"Just-In-Time (JIT) compilation"),w9.forEach(t),E9.forEach(t),LF=p(vr),Yh=s(vr,"LI",{});var $9=r(Yh);Pl=s($9,"A",{href:!0,rel:!0});var F9=r(Pl);NF=i(F9,"Automatic Differentiation"),F9.forEach(t),$9.forEach(t),IF=p(vr),Zh=s(vr,"LI",{});var x9=r(Zh);Al=s(x9,"A",{href:!0,rel:!0});var M9=r(Al);SF=i(M9,"Vectorization"),M9.forEach(t),x9.forEach(t),DF=p(vr),em=s(vr,"LI",{});var z9=r(em);Ol=s(z9,"A",{href:!0,rel:!0});var q9=r(Ol);WF=i(q9,"Parallelization"),q9.forEach(t),z9.forEach(t),vr.forEach(t),UF=p(Tt),Lt=s(Tt,"DIV",{class:!0});var yr=r(Lt);b(Ll.$$.fragment,yr),RF=p(yr),un=s(yr,"P",{});var mc=r(un);HF=i(mc,"The "),tm=s(mc,"CODE",{});var C9=r(tm);QF=i(C9,"FlaxElectraPreTrainedModel"),C9.forEach(t),BF=i(mc," forward method, overrides the "),om=s(mc,"CODE",{});var j9=r(om);VF=i(j9,"__call__"),j9.forEach(t),KF=i(mc," special method."),mc.forEach(t),JF=p(yr),b(Xs.$$.fragment,yr),GF=p(yr),b(Ys.$$.fragment,yr),yr.forEach(t),Tt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Vz)),u(m,"id","electra"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#electra"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(q,"class","relative group"),u(ne,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),u(ne,"rel","nofollow"),u(se,"href","https://github.com/google-research/electra"),u(se,"rel","nofollow"),u(v,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(Fe,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForPreTraining"),u(A,"href","https://huggingface.co/lysandre"),u(A,"rel","nofollow"),u(we,"href","https://github.com/google-research/electra"),u(we,"rel","nofollow"),u(be,"id","transformers.ElectraConfig"),u(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(be,"href","#transformers.ElectraConfig"),u(Z,"class","relative group"),u(Kl,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraModel"),u(Jl,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraModel"),u(wr,"href","https://huggingface.co/google/electra-small-discriminator"),u(wr,"rel","nofollow"),u(Gl,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(Xl,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"id","transformers.ElectraTokenizer"),u(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tn,"href","#transformers.ElectraTokenizer"),u(_o,"class","relative group"),u(Yl,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizer"),u(Zl,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer"),u(ed,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.ElectraTokenizerFast"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.ElectraTokenizerFast"),u(ko,"class","relative group"),u(td,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraTokenizerFast"),u(od,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizerFast"),u(nd,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizerFast"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(To,"class","relative group"),u(sd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForPreTraining"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.ElectraModel"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.ElectraModel"),u(bo,"class","relative group"),u(ad,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wr,"rel","nofollow"),u(id,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraModel"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.ElectraForPreTraining"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.ElectraForPreTraining"),u(wo,"class","relative group"),u(ld,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vr,"rel","nofollow"),u(dd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.ElectraForCausalLM"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.ElectraForCausalLM"),u(Fo,"class","relative group"),u(cd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ea,"rel","nofollow"),u(pd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForCausalLM"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.ElectraForMaskedLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.ElectraForMaskedLM"),u(Mo,"class","relative group"),u(hd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(aa,"rel","nofollow"),u(md,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.ElectraForSequenceClassification"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.ElectraForSequenceClassification"),u(qo,"class","relative group"),u(fd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ha,"rel","nofollow"),u(ud,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForSequenceClassification"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.ElectraForMultipleChoice"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.ElectraForMultipleChoice"),u(jo,"class","relative group"),u(gd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ka,"rel","nofollow"),u(_d,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForMultipleChoice"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.ElectraForTokenClassification"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.ElectraForTokenClassification"),u(Ao,"class","relative group"),u(kd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wa,"rel","nofollow"),u(Td,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForTokenClassification"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.ElectraForQuestionAnswering"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.ElectraForQuestionAnswering"),u(Lo,"class","relative group"),u(vd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qa,"rel","nofollow"),u(yd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.TFElectraModel"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.TFElectraModel"),u(So,"class","relative group"),u(bd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(La,"rel","nofollow"),u(Ed,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraModel"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFElectraForPreTraining"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFElectraForPreTraining"),u(Wo,"class","relative group"),u(wd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ua,"rel","nofollow"),u($d,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFElectraForMaskedLM"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFElectraForMaskedLM"),u(Ro,"class","relative group"),u(Fd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ka,"rel","nofollow"),u(xd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForMaskedLM"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFElectraForSequenceClassification"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFElectraForSequenceClassification"),u(Qo,"class","relative group"),u(Md,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(zd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFElectraForMultipleChoice"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFElectraForMultipleChoice"),u(Vo,"class","relative group"),u(qd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(Cd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.TFElectraForTokenClassification"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.TFElectraForTokenClassification"),u(Jo,"class","relative group"),u(jd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hi,"rel","nofollow"),u(Pd,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForTokenClassification"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xs,"id","transformers.TFElectraForQuestionAnswering"),u(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xs,"href","#transformers.TFElectraForQuestionAnswering"),u(Xo,"class","relative group"),u(Ad,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ki,"rel","nofollow"),u(Od,"href","/docs/transformers/pr_16919/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.FlaxElectraModel"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.FlaxElectraModel"),u(en,"class","relative group"),u(Ld,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($i,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Mi,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.FlaxElectraForPreTraining"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.FlaxElectraForPreTraining"),u(on,"class","relative group"),u(Nd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ai,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Oi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ni,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ii,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxElectraForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxElectraForMaskedLM"),u(sn,"class","relative group"),u(Id,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Qi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Vi,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ki,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ji,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxElectraForSequenceClassification"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxElectraForSequenceClassification"),u(an,"class","relative group"),u(Sd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(tl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(rl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxElectraForMultipleChoice"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxElectraForMultipleChoice"),u(dn,"class","relative group"),u(Dd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ul,"rel","nofollow"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.FlaxElectraForTokenClassification"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.FlaxElectraForTokenClassification"),u(pn,"class","relative group"),u(Wd,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(yl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(yl,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(El,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.FlaxElectraForQuestionAnswering"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.FlaxElectraForQuestionAnswering"),u(mn,"class","relative group"),u(Ud,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Cl,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(jl,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Pl,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Al,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ol,"rel","nofollow"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),k(o,g,T),k(o,h,T),e(h,m),e(m,_),E(l,_,null),e(h,f),e(h,M),e(M,fe),k(o,J,T),k(o,q,T),e(q,ee),e(ee,S),E(oe,S,null),e(q,ue),e(q,D),e(D,ge),k(o,pe,T),k(o,K,T),e(K,O),e(K,ne),e(ne,X),e(K,C),k(o,P,T),k(o,re,T),e(re,R),k(o,he,T),k(o,ae,T),e(ae,W),e(W,_e),k(o,me,T),k(o,j,T),e(j,ke),k(o,U,T),k(o,te,T),e(te,ie),e(ie,H),e(te,Te),e(te,G),e(G,L),e(G,se),e(se,Q),e(G,ve),e(G,v),e(v,z),e(G,Y),e(G,Fe),e(Fe,ze),e(G,N),k(o,xe,T),k(o,ye,T),e(ye,qe),e(ye,A),e(A,B),e(ye,Ce),e(ye,we),e(we,V),e(ye,je),k(o,Me,T),k(o,Z,T),e(Z,be),e(be,fc),E(br,fc,null),e(Z,dg),e(Z,uc),e(uc,cg),k(o,Qm,T),k(o,vt,T),E(Er,vt,null),e(vt,pg),e(vt,Ht),e(Ht,hg),e(Ht,Kl),e(Kl,mg),e(Ht,fg),e(Ht,Jl),e(Jl,ug),e(Ht,gg),e(Ht,wr),e(wr,_g),e(Ht,kg),e(vt,Tg),e(vt,go),e(go,vg),e(go,Gl),e(Gl,yg),e(go,bg),e(go,Xl),e(Xl,Eg),e(go,wg),e(vt,$g),E(kn,vt,null),k(o,Bm,T),k(o,_o,T),e(_o,Tn),e(Tn,gc),E($r,gc,null),e(_o,Fg),e(_o,_c),e(_c,xg),k(o,Vm,T),k(o,yt,T),E(Fr,yt,null),e(yt,Mg),e(yt,kc),e(kc,zg),e(yt,qg),e(yt,vn),e(vn,Yl),e(Yl,Cg),e(vn,jg),e(vn,Zl),e(Zl,Pg),e(vn,Ag),e(yt,Og),e(yt,xr),e(xr,Lg),e(xr,ed),e(ed,Ng),e(xr,Ig),k(o,Km,T),k(o,ko,T),e(ko,yn),e(yn,Tc),E(Mr,Tc,null),e(ko,Sg),e(ko,vc),e(vc,Dg),k(o,Jm,T),k(o,bt,T),E(zr,bt,null),e(bt,Wg),e(bt,qr),e(qr,Ug),e(qr,yc),e(yc,Rg),e(qr,Hg),e(bt,Qg),e(bt,bn),e(bn,td),e(td,Bg),e(bn,Vg),e(bn,od),e(od,Kg),e(bn,Jg),e(bt,Gg),e(bt,Cr),e(Cr,Xg),e(Cr,nd),e(nd,Yg),e(Cr,Zg),k(o,Gm,T),k(o,To,T),e(To,En),e(En,bc),E(jr,bc,null),e(To,e_),e(To,Ec),e(Ec,t_),k(o,Xm,T),k(o,vo,T),E(Pr,vo,null),e(vo,o_),e(vo,Ar),e(Ar,n_),e(Ar,sd),e(sd,s_),e(Ar,r_),k(o,Ym,T),k(o,yo,T),E(Or,yo,null),e(yo,a_),e(yo,Lr),e(Lr,i_),e(Lr,rd),e(rd,l_),e(Lr,d_),k(o,Zm,T),k(o,bo,T),e(bo,wn),e(wn,wc),E(Nr,wc,null),e(bo,c_),e(bo,$c),e($c,p_),k(o,ef,T),k(o,Ze,T),E(Ir,Ze,null),e(Ze,h_),e(Ze,Fc),e(Fc,m_),e(Ze,f_),e(Ze,Sr),e(Sr,u_),e(Sr,ad),e(ad,g_),e(Sr,__),e(Ze,k_),e(Ze,Dr),e(Dr,T_),e(Dr,Wr),e(Wr,v_),e(Dr,y_),e(Ze,b_),e(Ze,Et),E(Ur,Et,null),e(Et,E_),e(Et,Eo),e(Eo,w_),e(Eo,id),e(id,$_),e(Eo,F_),e(Eo,xc),e(xc,x_),e(Eo,M_),e(Et,z_),E($n,Et,null),e(Et,q_),E(Fn,Et,null),k(o,tf,T),k(o,wo,T),e(wo,xn),e(xn,Mc),E(Rr,Mc,null),e(wo,C_),e(wo,zc),e(zc,j_),k(o,of,T),k(o,He,T),E(Hr,He,null),e(He,P_),e(He,qc),e(qc,A_),e(He,O_),e(He,Cc),e(Cc,L_),e(He,N_),e(He,Qr),e(Qr,I_),e(Qr,ld),e(ld,S_),e(Qr,D_),e(He,W_),e(He,Br),e(Br,U_),e(Br,Vr),e(Vr,R_),e(Br,H_),e(He,Q_),e(He,wt),E(Kr,wt,null),e(wt,B_),e(wt,$o),e($o,V_),e($o,dd),e(dd,K_),e($o,J_),e($o,jc),e(jc,G_),e($o,X_),e(wt,Y_),E(Mn,wt,null),e(wt,Z_),E(zn,wt,null),k(o,nf,T),k(o,Fo,T),e(Fo,qn),e(qn,Pc),E(Jr,Pc,null),e(Fo,ek),e(Fo,Ac),e(Ac,tk),k(o,sf,T),k(o,et,T),E(Gr,et,null),e(et,ok),e(et,Xr),e(Xr,nk),e(Xr,Oc),e(Oc,sk),e(Xr,rk),e(et,ak),e(et,Yr),e(Yr,ik),e(Yr,cd),e(cd,lk),e(Yr,dk),e(et,ck),e(et,Zr),e(Zr,pk),e(Zr,ea),e(ea,hk),e(Zr,mk),e(et,fk),e(et,$t),E(ta,$t,null),e($t,uk),e($t,xo),e(xo,gk),e(xo,pd),e(pd,_k),e(xo,kk),e(xo,Lc),e(Lc,Tk),e(xo,vk),e($t,yk),E(Cn,$t,null),e($t,bk),E(jn,$t,null),k(o,rf,T),k(o,Mo,T),e(Mo,Pn),e(Pn,Nc),E(oa,Nc,null),e(Mo,Ek),e(Mo,Ic),e(Ic,wk),k(o,af,T),k(o,Qe,T),E(na,Qe,null),e(Qe,$k),e(Qe,Sc),e(Sc,Fk),e(Qe,xk),e(Qe,Dc),e(Dc,Mk),e(Qe,zk),e(Qe,sa),e(sa,qk),e(sa,hd),e(hd,Ck),e(sa,jk),e(Qe,Pk),e(Qe,ra),e(ra,Ak),e(ra,aa),e(aa,Ok),e(ra,Lk),e(Qe,Nk),e(Qe,st),E(ia,st,null),e(st,Ik),e(st,zo),e(zo,Sk),e(zo,md),e(md,Dk),e(zo,Wk),e(zo,Wc),e(Wc,Uk),e(zo,Rk),e(st,Hk),E(An,st,null),e(st,Qk),E(On,st,null),e(st,Bk),E(Ln,st,null),k(o,lf,T),k(o,qo,T),e(qo,Nn),e(Nn,Uc),E(la,Uc,null),e(qo,Vk),e(qo,Rc),e(Rc,Kk),k(o,df,T),k(o,tt,T),E(da,tt,null),e(tt,Jk),e(tt,Hc),e(Hc,Gk),e(tt,Xk),e(tt,ca),e(ca,Yk),e(ca,fd),e(fd,Zk),e(ca,e1),e(tt,t1),e(tt,pa),e(pa,o1),e(pa,ha),e(ha,n1),e(pa,s1),e(tt,r1),e(tt,Re),E(ma,Re,null),e(Re,a1),e(Re,Co),e(Co,i1),e(Co,ud),e(ud,l1),e(Co,d1),e(Co,Qc),e(Qc,c1),e(Co,p1),e(Re,h1),E(In,Re,null),e(Re,m1),E(Sn,Re,null),e(Re,f1),E(Dn,Re,null),e(Re,u1),E(Wn,Re,null),e(Re,g1),E(Un,Re,null),k(o,cf,T),k(o,jo,T),e(jo,Rn),e(Rn,Bc),E(fa,Bc,null),e(jo,_1),e(jo,Vc),e(Vc,k1),k(o,pf,T),k(o,ot,T),E(ua,ot,null),e(ot,T1),e(ot,Kc),e(Kc,v1),e(ot,y1),e(ot,ga),e(ga,b1),e(ga,gd),e(gd,E1),e(ga,w1),e(ot,$1),e(ot,_a),e(_a,F1),e(_a,ka),e(ka,x1),e(_a,M1),e(ot,z1),e(ot,Ft),E(Ta,Ft,null),e(Ft,q1),e(Ft,Po),e(Po,C1),e(Po,_d),e(_d,j1),e(Po,P1),e(Po,Jc),e(Jc,A1),e(Po,O1),e(Ft,L1),E(Hn,Ft,null),e(Ft,N1),E(Qn,Ft,null),k(o,hf,T),k(o,Ao,T),e(Ao,Bn),e(Bn,Gc),E(va,Gc,null),e(Ao,I1),e(Ao,Xc),e(Xc,S1),k(o,mf,T),k(o,Be,T),E(ya,Be,null),e(Be,D1),e(Be,Yc),e(Yc,W1),e(Be,U1),e(Be,Zc),e(Zc,R1),e(Be,H1),e(Be,ba),e(ba,Q1),e(ba,kd),e(kd,B1),e(ba,V1),e(Be,K1),e(Be,Ea),e(Ea,J1),e(Ea,wa),e(wa,G1),e(Ea,X1),e(Be,Y1),e(Be,rt),E($a,rt,null),e(rt,Z1),e(rt,Oo),e(Oo,eT),e(Oo,Td),e(Td,tT),e(Oo,oT),e(Oo,ep),e(ep,nT),e(Oo,sT),e(rt,rT),E(Vn,rt,null),e(rt,aT),E(Kn,rt,null),e(rt,iT),E(Jn,rt,null),k(o,ff,T),k(o,Lo,T),e(Lo,Gn),e(Gn,tp),E(Fa,tp,null),e(Lo,lT),e(Lo,op),e(op,dT),k(o,uf,T),k(o,nt,T),E(xa,nt,null),e(nt,cT),e(nt,No),e(No,pT),e(No,np),e(np,hT),e(No,mT),e(No,sp),e(sp,fT),e(No,uT),e(nt,gT),e(nt,Ma),e(Ma,_T),e(Ma,vd),e(vd,kT),e(Ma,TT),e(nt,vT),e(nt,za),e(za,yT),e(za,qa),e(qa,bT),e(za,ET),e(nt,wT),e(nt,at),E(Ca,at,null),e(at,$T),e(at,Io),e(Io,FT),e(Io,yd),e(yd,xT),e(Io,MT),e(Io,rp),e(rp,zT),e(Io,qT),e(at,CT),E(Xn,at,null),e(at,jT),E(Yn,at,null),e(at,PT),E(Zn,at,null),k(o,gf,T),k(o,So,T),e(So,es),e(es,ap),E(ja,ap,null),e(So,AT),e(So,ip),e(ip,OT),k(o,_f,T),k(o,Ve,T),E(Pa,Ve,null),e(Ve,LT),e(Ve,lp),e(lp,NT),e(Ve,IT),e(Ve,Aa),e(Aa,ST),e(Aa,bd),e(bd,DT),e(Aa,WT),e(Ve,UT),e(Ve,Oa),e(Oa,RT),e(Oa,La),e(La,HT),e(Oa,QT),e(Ve,BT),E(ts,Ve,null),e(Ve,VT),e(Ve,xt),E(Na,xt,null),e(xt,KT),e(xt,Do),e(Do,JT),e(Do,Ed),e(Ed,GT),e(Do,XT),e(Do,dp),e(dp,YT),e(Do,ZT),e(xt,ev),E(os,xt,null),e(xt,tv),E(ns,xt,null),k(o,kf,T),k(o,Wo,T),e(Wo,ss),e(ss,cp),E(Ia,cp,null),e(Wo,ov),e(Wo,pp),e(pp,nv),k(o,Tf,T),k(o,Oe,T),E(Sa,Oe,null),e(Oe,sv),e(Oe,hp),e(hp,rv),e(Oe,av),e(Oe,mp),e(mp,iv),e(Oe,lv),e(Oe,Da),e(Da,dv),e(Da,wd),e(wd,cv),e(Da,pv),e(Oe,hv),e(Oe,Wa),e(Wa,mv),e(Wa,Ua),e(Ua,fv),e(Wa,uv),e(Oe,gv),E(rs,Oe,null),e(Oe,_v),e(Oe,Mt),E(Ra,Mt,null),e(Mt,kv),e(Mt,Uo),e(Uo,Tv),e(Uo,$d),e($d,vv),e(Uo,yv),e(Uo,fp),e(fp,bv),e(Uo,Ev),e(Mt,wv),E(as,Mt,null),e(Mt,$v),E(is,Mt,null),k(o,vf,T),k(o,Ro,T),e(Ro,ls),e(ls,up),E(Ha,up,null),e(Ro,Fv),e(Ro,gp),e(gp,xv),k(o,yf,T),k(o,Le,T),E(Qa,Le,null),e(Le,Mv),e(Le,_p),e(_p,zv),e(Le,qv),e(Le,kp),e(kp,Cv),e(Le,jv),e(Le,Ba),e(Ba,Pv),e(Ba,Fd),e(Fd,Av),e(Ba,Ov),e(Le,Lv),e(Le,Va),e(Va,Nv),e(Va,Ka),e(Ka,Iv),e(Va,Sv),e(Le,Dv),E(ds,Le,null),e(Le,Wv),e(Le,it),E(Ja,it,null),e(it,Uv),e(it,Ho),e(Ho,Rv),e(Ho,xd),e(xd,Hv),e(Ho,Qv),e(Ho,Tp),e(Tp,Bv),e(Ho,Vv),e(it,Kv),E(cs,it,null),e(it,Jv),E(ps,it,null),e(it,Gv),E(hs,it,null),k(o,bf,T),k(o,Qo,T),e(Qo,ms),e(ms,vp),E(Ga,vp,null),e(Qo,Xv),e(Qo,yp),e(yp,Yv),k(o,Ef,T),k(o,Ke,T),E(Xa,Ke,null),e(Ke,Zv),e(Ke,bp),e(bp,ey),e(Ke,ty),e(Ke,Ya),e(Ya,oy),e(Ya,Md),e(Md,ny),e(Ya,sy),e(Ke,ry),e(Ke,Za),e(Za,ay),e(Za,ei),e(ei,iy),e(Za,ly),e(Ke,dy),E(fs,Ke,null),e(Ke,cy),e(Ke,lt),E(ti,lt,null),e(lt,py),e(lt,Bo),e(Bo,hy),e(Bo,zd),e(zd,my),e(Bo,fy),e(Bo,Ep),e(Ep,uy),e(Bo,gy),e(lt,_y),E(us,lt,null),e(lt,ky),E(gs,lt,null),e(lt,Ty),E(_s,lt,null),k(o,wf,T),k(o,Vo,T),e(Vo,ks),e(ks,wp),E(oi,wp,null),e(Vo,vy),e(Vo,$p),e($p,yy),k(o,$f,T),k(o,Je,T),E(ni,Je,null),e(Je,by),e(Je,Fp),e(Fp,Ey),e(Je,wy),e(Je,si),e(si,$y),e(si,qd),e(qd,Fy),e(si,xy),e(Je,My),e(Je,ri),e(ri,zy),e(ri,ai),e(ai,qy),e(ri,Cy),e(Je,jy),E(Ts,Je,null),e(Je,Py),e(Je,zt),E(ii,zt,null),e(zt,Ay),e(zt,Ko),e(Ko,Oy),e(Ko,Cd),e(Cd,Ly),e(Ko,Ny),e(Ko,xp),e(xp,Iy),e(Ko,Sy),e(zt,Dy),E(vs,zt,null),e(zt,Wy),E(ys,zt,null),k(o,Ff,T),k(o,Jo,T),e(Jo,bs),e(bs,Mp),E(li,Mp,null),e(Jo,Uy),e(Jo,zp),e(zp,Ry),k(o,xf,T),k(o,Ne,T),E(di,Ne,null),e(Ne,Hy),e(Ne,qp),e(qp,Qy),e(Ne,By),e(Ne,Cp),e(Cp,Vy),e(Ne,Ky),e(Ne,ci),e(ci,Jy),e(ci,jd),e(jd,Gy),e(ci,Xy),e(Ne,Yy),e(Ne,pi),e(pi,Zy),e(pi,hi),e(hi,eb),e(pi,tb),e(Ne,ob),E(Es,Ne,null),e(Ne,nb),e(Ne,dt),E(mi,dt,null),e(dt,sb),e(dt,Go),e(Go,rb),e(Go,Pd),e(Pd,ab),e(Go,ib),e(Go,jp),e(jp,lb),e(Go,db),e(dt,cb),E(ws,dt,null),e(dt,pb),E($s,dt,null),e(dt,hb),E(Fs,dt,null),k(o,Mf,T),k(o,Xo,T),e(Xo,xs),e(xs,Pp),E(fi,Pp,null),e(Xo,mb),e(Xo,Ap),e(Ap,fb),k(o,zf,T),k(o,Ge,T),E(ui,Ge,null),e(Ge,ub),e(Ge,Yo),e(Yo,gb),e(Yo,Op),e(Op,_b),e(Yo,kb),e(Yo,Lp),e(Lp,Tb),e(Yo,vb),e(Ge,yb),e(Ge,gi),e(gi,bb),e(gi,Ad),e(Ad,Eb),e(gi,wb),e(Ge,$b),e(Ge,_i),e(_i,Fb),e(_i,ki),e(ki,xb),e(_i,Mb),e(Ge,zb),E(Ms,Ge,null),e(Ge,qb),e(Ge,ct),E(Ti,ct,null),e(ct,Cb),e(ct,Zo),e(Zo,jb),e(Zo,Od),e(Od,Pb),e(Zo,Ab),e(Zo,Np),e(Np,Ob),e(Zo,Lb),e(ct,Nb),E(zs,ct,null),e(ct,Ib),E(qs,ct,null),e(ct,Sb),E(Cs,ct,null),k(o,qf,T),k(o,en,T),e(en,js),e(js,Ip),E(vi,Ip,null),e(en,Db),e(en,Sp),e(Sp,Wb),k(o,Cf,T),k(o,Ie,T),E(yi,Ie,null),e(Ie,Ub),e(Ie,Dp),e(Dp,Rb),e(Ie,Hb),e(Ie,bi),e(bi,Qb),e(bi,Ld),e(Ld,Bb),e(bi,Vb),e(Ie,Kb),e(Ie,Ei),e(Ei,Jb),e(Ei,wi),e(wi,Gb),e(Ei,Xb),e(Ie,Yb),e(Ie,Wp),e(Wp,Zb),e(Ie,eE),e(Ie,Qt),e(Qt,Up),e(Up,$i),e($i,tE),e(Qt,oE),e(Qt,Rp),e(Rp,Fi),e(Fi,nE),e(Qt,sE),e(Qt,Hp),e(Hp,xi),e(xi,rE),e(Qt,aE),e(Qt,Qp),e(Qp,Mi),e(Mi,iE),e(Ie,lE),e(Ie,qt),E(zi,qt,null),e(qt,dE),e(qt,tn),e(tn,cE),e(tn,Bp),e(Bp,pE),e(tn,hE),e(tn,Vp),e(Vp,mE),e(tn,fE),e(qt,uE),E(Ps,qt,null),e(qt,gE),E(As,qt,null),k(o,jf,T),k(o,on,T),e(on,Os),e(Os,Kp),E(qi,Kp,null),e(on,_E),e(on,Jp),e(Jp,kE),k(o,Pf,T),k(o,Pe,T),E(Ci,Pe,null),e(Pe,TE),e(Pe,Gp),e(Gp,vE),e(Pe,yE),e(Pe,Xp),e(Xp,bE),e(Pe,EE),e(Pe,ji),e(ji,wE),e(ji,Nd),e(Nd,$E),e(ji,FE),e(Pe,xE),e(Pe,Pi),e(Pi,ME),e(Pi,Ai),e(Ai,zE),e(Pi,qE),e(Pe,CE),e(Pe,Yp),e(Yp,jE),e(Pe,PE),e(Pe,Bt),e(Bt,Zp),e(Zp,Oi),e(Oi,AE),e(Bt,OE),e(Bt,eh),e(eh,Li),e(Li,LE),e(Bt,NE),e(Bt,th),e(th,Ni),e(Ni,IE),e(Bt,SE),e(Bt,oh),e(oh,Ii),e(Ii,DE),e(Pe,WE),e(Pe,Ct),E(Si,Ct,null),e(Ct,UE),e(Ct,nn),e(nn,RE),e(nn,nh),e(nh,HE),e(nn,QE),e(nn,sh),e(sh,BE),e(nn,VE),e(Ct,KE),E(Ls,Ct,null),e(Ct,JE),E(Ns,Ct,null),k(o,Af,T),k(o,sn,T),e(sn,Is),e(Is,rh),E(Di,rh,null),e(sn,GE),e(sn,ah),e(ah,XE),k(o,Of,T),k(o,Se,T),E(Wi,Se,null),e(Se,YE),e(Se,Ui),e(Ui,ZE),e(Ui,ih),e(ih,ew),e(Ui,tw),e(Se,ow),e(Se,Ri),e(Ri,nw),e(Ri,Id),e(Id,sw),e(Ri,rw),e(Se,aw),e(Se,Hi),e(Hi,iw),e(Hi,Qi),e(Qi,lw),e(Hi,dw),e(Se,cw),e(Se,lh),e(lh,pw),e(Se,hw),e(Se,Vt),e(Vt,dh),e(dh,Bi),e(Bi,mw),e(Vt,fw),e(Vt,ch),e(ch,Vi),e(Vi,uw),e(Vt,gw),e(Vt,ph),e(ph,Ki),e(Ki,_w),e(Vt,kw),e(Vt,hh),e(hh,Ji),e(Ji,Tw),e(Se,vw),e(Se,jt),E(Gi,jt,null),e(jt,yw),e(jt,rn),e(rn,bw),e(rn,mh),e(mh,Ew),e(rn,ww),e(rn,fh),e(fh,$w),e(rn,Fw),e(jt,xw),E(Ss,jt,null),e(jt,Mw),E(Ds,jt,null),k(o,Lf,T),k(o,an,T),e(an,Ws),e(Ws,uh),E(Xi,uh,null),e(an,zw),e(an,gh),e(gh,qw),k(o,Nf,T),k(o,De,T),E(Yi,De,null),e(De,Cw),e(De,_h),e(_h,jw),e(De,Pw),e(De,Zi),e(Zi,Aw),e(Zi,Sd),e(Sd,Ow),e(Zi,Lw),e(De,Nw),e(De,el),e(el,Iw),e(el,tl),e(tl,Sw),e(el,Dw),e(De,Ww),e(De,kh),e(kh,Uw),e(De,Rw),e(De,Kt),e(Kt,Th),e(Th,ol),e(ol,Hw),e(Kt,Qw),e(Kt,vh),e(vh,nl),e(nl,Bw),e(Kt,Vw),e(Kt,yh),e(yh,sl),e(sl,Kw),e(Kt,Jw),e(Kt,bh),e(bh,rl),e(rl,Gw),e(De,Xw),e(De,Pt),E(al,Pt,null),e(Pt,Yw),e(Pt,ln),e(ln,Zw),e(ln,Eh),e(Eh,e$),e(ln,t$),e(ln,wh),e(wh,o$),e(ln,n$),e(Pt,s$),E(Us,Pt,null),e(Pt,r$),E(Rs,Pt,null),k(o,If,T),k(o,dn,T),e(dn,Hs),e(Hs,$h),E(il,$h,null),e(dn,a$),e(dn,Fh),e(Fh,i$),k(o,Sf,T),k(o,We,T),E(ll,We,null),e(We,l$),e(We,xh),e(xh,d$),e(We,c$),e(We,dl),e(dl,p$),e(dl,Dd),e(Dd,h$),e(dl,m$),e(We,f$),e(We,cl),e(cl,u$),e(cl,pl),e(pl,g$),e(cl,_$),e(We,k$),e(We,Mh),e(Mh,T$),e(We,v$),e(We,Jt),e(Jt,zh),e(zh,hl),e(hl,y$),e(Jt,b$),e(Jt,qh),e(qh,ml),e(ml,E$),e(Jt,w$),e(Jt,Ch),e(Ch,fl),e(fl,$$),e(Jt,F$),e(Jt,jh),e(jh,ul),e(ul,x$),e(We,M$),e(We,At),E(gl,At,null),e(At,z$),e(At,cn),e(cn,q$),e(cn,Ph),e(Ph,C$),e(cn,j$),e(cn,Ah),e(Ah,P$),e(cn,A$),e(At,O$),E(Qs,At,null),e(At,L$),E(Bs,At,null),k(o,Df,T),k(o,pn,T),e(pn,Vs),e(Vs,Oh),E(_l,Oh,null),e(pn,N$),e(pn,Lh),e(Lh,I$),k(o,Wf,T),k(o,Ae,T),E(kl,Ae,null),e(Ae,S$),e(Ae,Nh),e(Nh,D$),e(Ae,W$),e(Ae,Ih),e(Ih,U$),e(Ae,R$),e(Ae,Tl),e(Tl,H$),e(Tl,Wd),e(Wd,Q$),e(Tl,B$),e(Ae,V$),e(Ae,vl),e(vl,K$),e(vl,yl),e(yl,J$),e(vl,G$),e(Ae,X$),e(Ae,Sh),e(Sh,Y$),e(Ae,Z$),e(Ae,Gt),e(Gt,Dh),e(Dh,bl),e(bl,eF),e(Gt,tF),e(Gt,Wh),e(Wh,El),e(El,oF),e(Gt,nF),e(Gt,Uh),e(Uh,wl),e(wl,sF),e(Gt,rF),e(Gt,Rh),e(Rh,$l),e($l,aF),e(Ae,iF),e(Ae,Ot),E(Fl,Ot,null),e(Ot,lF),e(Ot,hn),e(hn,dF),e(hn,Hh),e(Hh,cF),e(hn,pF),e(hn,Qh),e(Qh,hF),e(hn,mF),e(Ot,fF),E(Ks,Ot,null),e(Ot,uF),E(Js,Ot,null),k(o,Uf,T),k(o,mn,T),e(mn,Gs),e(Gs,Bh),E(xl,Bh,null),e(mn,gF),e(mn,Vh),e(Vh,_F),k(o,Rf,T),k(o,Ue,T),E(Ml,Ue,null),e(Ue,kF),e(Ue,fn),e(fn,TF),e(fn,Kh),e(Kh,vF),e(fn,yF),e(fn,Jh),e(Jh,bF),e(fn,EF),e(Ue,wF),e(Ue,zl),e(zl,$F),e(zl,Ud),e(Ud,FF),e(zl,xF),e(Ue,MF),e(Ue,ql),e(ql,zF),e(ql,Cl),e(Cl,qF),e(ql,CF),e(Ue,jF),e(Ue,Gh),e(Gh,PF),e(Ue,AF),e(Ue,Xt),e(Xt,Xh),e(Xh,jl),e(jl,OF),e(Xt,LF),e(Xt,Yh),e(Yh,Pl),e(Pl,NF),e(Xt,IF),e(Xt,Zh),e(Zh,Al),e(Al,SF),e(Xt,DF),e(Xt,em),e(em,Ol),e(Ol,WF),e(Ue,UF),e(Ue,Lt),E(Ll,Lt,null),e(Lt,RF),e(Lt,un),e(un,HF),e(un,tm),e(tm,QF),e(un,BF),e(un,om),e(om,VF),e(un,KF),e(Lt,JF),E(Xs,Lt,null),e(Lt,GF),E(Ys,Lt,null),Hf=!0},p(o,[T]){const Nl={};T&2&&(Nl.$$scope={dirty:T,ctx:o}),kn.$set(Nl);const nm={};T&2&&(nm.$$scope={dirty:T,ctx:o}),$n.$set(nm);const sm={};T&2&&(sm.$$scope={dirty:T,ctx:o}),Fn.$set(sm);const rm={};T&2&&(rm.$$scope={dirty:T,ctx:o}),Mn.$set(rm);const Il={};T&2&&(Il.$$scope={dirty:T,ctx:o}),zn.$set(Il);const am={};T&2&&(am.$$scope={dirty:T,ctx:o}),Cn.$set(am);const im={};T&2&&(im.$$scope={dirty:T,ctx:o}),jn.$set(im);const lm={};T&2&&(lm.$$scope={dirty:T,ctx:o}),An.$set(lm);const Sl={};T&2&&(Sl.$$scope={dirty:T,ctx:o}),On.$set(Sl);const dm={};T&2&&(dm.$$scope={dirty:T,ctx:o}),Ln.$set(dm);const cm={};T&2&&(cm.$$scope={dirty:T,ctx:o}),In.$set(cm);const pm={};T&2&&(pm.$$scope={dirty:T,ctx:o}),Sn.$set(pm);const hm={};T&2&&(hm.$$scope={dirty:T,ctx:o}),Dn.$set(hm);const mm={};T&2&&(mm.$$scope={dirty:T,ctx:o}),Wn.$set(mm);const Dl={};T&2&&(Dl.$$scope={dirty:T,ctx:o}),Un.$set(Dl);const fm={};T&2&&(fm.$$scope={dirty:T,ctx:o}),Hn.$set(fm);const Yt={};T&2&&(Yt.$$scope={dirty:T,ctx:o}),Qn.$set(Yt);const um={};T&2&&(um.$$scope={dirty:T,ctx:o}),Vn.$set(um);const gm={};T&2&&(gm.$$scope={dirty:T,ctx:o}),Kn.$set(gm);const _m={};T&2&&(_m.$$scope={dirty:T,ctx:o}),Jn.$set(_m);const gn={};T&2&&(gn.$$scope={dirty:T,ctx:o}),Xn.$set(gn);const km={};T&2&&(km.$$scope={dirty:T,ctx:o}),Yn.$set(km);const Tm={};T&2&&(Tm.$$scope={dirty:T,ctx:o}),Zn.$set(Tm);const Wl={};T&2&&(Wl.$$scope={dirty:T,ctx:o}),ts.$set(Wl);const vm={};T&2&&(vm.$$scope={dirty:T,ctx:o}),os.$set(vm);const ym={};T&2&&(ym.$$scope={dirty:T,ctx:o}),ns.$set(ym);const bm={};T&2&&(bm.$$scope={dirty:T,ctx:o}),rs.$set(bm);const Zt={};T&2&&(Zt.$$scope={dirty:T,ctx:o}),as.$set(Zt);const eo={};T&2&&(eo.$$scope={dirty:T,ctx:o}),is.$set(eo);const Em={};T&2&&(Em.$$scope={dirty:T,ctx:o}),ds.$set(Em);const wm={};T&2&&(wm.$$scope={dirty:T,ctx:o}),cs.$set(wm);const $m={};T&2&&($m.$$scope={dirty:T,ctx:o}),ps.$set($m);const _n={};T&2&&(_n.$$scope={dirty:T,ctx:o}),hs.$set(_n);const Fm={};T&2&&(Fm.$$scope={dirty:T,ctx:o}),fs.$set(Fm);const xm={};T&2&&(xm.$$scope={dirty:T,ctx:o}),us.$set(xm);const Ul={};T&2&&(Ul.$$scope={dirty:T,ctx:o}),gs.$set(Ul);const Mm={};T&2&&(Mm.$$scope={dirty:T,ctx:o}),_s.$set(Mm);const zm={};T&2&&(zm.$$scope={dirty:T,ctx:o}),Ts.$set(zm);const qm={};T&2&&(qm.$$scope={dirty:T,ctx:o}),vs.$set(qm);const to={};T&2&&(to.$$scope={dirty:T,ctx:o}),ys.$set(to);const Cm={};T&2&&(Cm.$$scope={dirty:T,ctx:o}),Es.$set(Cm);const Zs={};T&2&&(Zs.$$scope={dirty:T,ctx:o}),ws.$set(Zs);const jm={};T&2&&(jm.$$scope={dirty:T,ctx:o}),$s.$set(jm);const Pm={};T&2&&(Pm.$$scope={dirty:T,ctx:o}),Fs.$set(Pm);const Rl={};T&2&&(Rl.$$scope={dirty:T,ctx:o}),Ms.$set(Rl);const Am={};T&2&&(Am.$$scope={dirty:T,ctx:o}),zs.$set(Am);const Hl={};T&2&&(Hl.$$scope={dirty:T,ctx:o}),qs.$set(Hl);const Om={};T&2&&(Om.$$scope={dirty:T,ctx:o}),Cs.$set(Om);const Lm={};T&2&&(Lm.$$scope={dirty:T,ctx:o}),Ps.$set(Lm);const Nm={};T&2&&(Nm.$$scope={dirty:T,ctx:o}),As.$set(Nm);const oo={};T&2&&(oo.$$scope={dirty:T,ctx:o}),Ls.$set(oo);const Ql={};T&2&&(Ql.$$scope={dirty:T,ctx:o}),Ns.$set(Ql);const Im={};T&2&&(Im.$$scope={dirty:T,ctx:o}),Ss.$set(Im);const er={};T&2&&(er.$$scope={dirty:T,ctx:o}),Ds.$set(er);const Sm={};T&2&&(Sm.$$scope={dirty:T,ctx:o}),Us.$set(Sm);const Dm={};T&2&&(Dm.$$scope={dirty:T,ctx:o}),Rs.$set(Dm);const Bl={};T&2&&(Bl.$$scope={dirty:T,ctx:o}),Qs.$set(Bl);const Wm={};T&2&&(Wm.$$scope={dirty:T,ctx:o}),Bs.$set(Wm);const Vl={};T&2&&(Vl.$$scope={dirty:T,ctx:o}),Ks.$set(Vl);const Um={};T&2&&(Um.$$scope={dirty:T,ctx:o}),Js.$set(Um);const Rm={};T&2&&(Rm.$$scope={dirty:T,ctx:o}),Xs.$set(Rm);const Hm={};T&2&&(Hm.$$scope={dirty:T,ctx:o}),Ys.$set(Hm)},i(o){Hf||(w(l.$$.fragment,o),w(oe.$$.fragment,o),w(br.$$.fragment,o),w(Er.$$.fragment,o),w(kn.$$.fragment,o),w($r.$$.fragment,o),w(Fr.$$.fragment,o),w(Mr.$$.fragment,o),w(zr.$$.fragment,o),w(jr.$$.fragment,o),w(Pr.$$.fragment,o),w(Or.$$.fragment,o),w(Nr.$$.fragment,o),w(Ir.$$.fragment,o),w(Ur.$$.fragment,o),w($n.$$.fragment,o),w(Fn.$$.fragment,o),w(Rr.$$.fragment,o),w(Hr.$$.fragment,o),w(Kr.$$.fragment,o),w(Mn.$$.fragment,o),w(zn.$$.fragment,o),w(Jr.$$.fragment,o),w(Gr.$$.fragment,o),w(ta.$$.fragment,o),w(Cn.$$.fragment,o),w(jn.$$.fragment,o),w(oa.$$.fragment,o),w(na.$$.fragment,o),w(ia.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(Ln.$$.fragment,o),w(la.$$.fragment,o),w(da.$$.fragment,o),w(ma.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(fa.$$.fragment,o),w(ua.$$.fragment,o),w(Ta.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(va.$$.fragment,o),w(ya.$$.fragment,o),w($a.$$.fragment,o),w(Vn.$$.fragment,o),w(Kn.$$.fragment,o),w(Jn.$$.fragment,o),w(Fa.$$.fragment,o),w(xa.$$.fragment,o),w(Ca.$$.fragment,o),w(Xn.$$.fragment,o),w(Yn.$$.fragment,o),w(Zn.$$.fragment,o),w(ja.$$.fragment,o),w(Pa.$$.fragment,o),w(ts.$$.fragment,o),w(Na.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(Ia.$$.fragment,o),w(Sa.$$.fragment,o),w(rs.$$.fragment,o),w(Ra.$$.fragment,o),w(as.$$.fragment,o),w(is.$$.fragment,o),w(Ha.$$.fragment,o),w(Qa.$$.fragment,o),w(ds.$$.fragment,o),w(Ja.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(Ga.$$.fragment,o),w(Xa.$$.fragment,o),w(fs.$$.fragment,o),w(ti.$$.fragment,o),w(us.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(oi.$$.fragment,o),w(ni.$$.fragment,o),w(Ts.$$.fragment,o),w(ii.$$.fragment,o),w(vs.$$.fragment,o),w(ys.$$.fragment,o),w(li.$$.fragment,o),w(di.$$.fragment,o),w(Es.$$.fragment,o),w(mi.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(Fs.$$.fragment,o),w(fi.$$.fragment,o),w(ui.$$.fragment,o),w(Ms.$$.fragment,o),w(Ti.$$.fragment,o),w(zs.$$.fragment,o),w(qs.$$.fragment,o),w(Cs.$$.fragment,o),w(vi.$$.fragment,o),w(yi.$$.fragment,o),w(zi.$$.fragment,o),w(Ps.$$.fragment,o),w(As.$$.fragment,o),w(qi.$$.fragment,o),w(Ci.$$.fragment,o),w(Si.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(Di.$$.fragment,o),w(Wi.$$.fragment,o),w(Gi.$$.fragment,o),w(Ss.$$.fragment,o),w(Ds.$$.fragment,o),w(Xi.$$.fragment,o),w(Yi.$$.fragment,o),w(al.$$.fragment,o),w(Us.$$.fragment,o),w(Rs.$$.fragment,o),w(il.$$.fragment,o),w(ll.$$.fragment,o),w(gl.$$.fragment,o),w(Qs.$$.fragment,o),w(Bs.$$.fragment,o),w(_l.$$.fragment,o),w(kl.$$.fragment,o),w(Fl.$$.fragment,o),w(Ks.$$.fragment,o),w(Js.$$.fragment,o),w(xl.$$.fragment,o),w(Ml.$$.fragment,o),w(Ll.$$.fragment,o),w(Xs.$$.fragment,o),w(Ys.$$.fragment,o),Hf=!0)},o(o){$(l.$$.fragment,o),$(oe.$$.fragment,o),$(br.$$.fragment,o),$(Er.$$.fragment,o),$(kn.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(jr.$$.fragment,o),$(Pr.$$.fragment,o),$(Or.$$.fragment,o),$(Nr.$$.fragment,o),$(Ir.$$.fragment,o),$(Ur.$$.fragment,o),$($n.$$.fragment,o),$(Fn.$$.fragment,o),$(Rr.$$.fragment,o),$(Hr.$$.fragment,o),$(Kr.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(ta.$$.fragment,o),$(Cn.$$.fragment,o),$(jn.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(ia.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Ln.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$(ma.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(fa.$$.fragment,o),$(ua.$$.fragment,o),$(Ta.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(va.$$.fragment,o),$(ya.$$.fragment,o),$($a.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(Ca.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(ja.$$.fragment,o),$(Pa.$$.fragment,o),$(ts.$$.fragment,o),$(Na.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Ia.$$.fragment,o),$(Sa.$$.fragment,o),$(rs.$$.fragment,o),$(Ra.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(Ha.$$.fragment,o),$(Qa.$$.fragment,o),$(ds.$$.fragment,o),$(Ja.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(fs.$$.fragment,o),$(ti.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(Ts.$$.fragment,o),$(ii.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(li.$$.fragment,o),$(di.$$.fragment,o),$(Es.$$.fragment,o),$(mi.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(fi.$$.fragment,o),$(ui.$$.fragment,o),$(Ms.$$.fragment,o),$(Ti.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(vi.$$.fragment,o),$(yi.$$.fragment,o),$(zi.$$.fragment,o),$(Ps.$$.fragment,o),$(As.$$.fragment,o),$(qi.$$.fragment,o),$(Ci.$$.fragment,o),$(Si.$$.fragment,o),$(Ls.$$.fragment,o),$(Ns.$$.fragment,o),$(Di.$$.fragment,o),$(Wi.$$.fragment,o),$(Gi.$$.fragment,o),$(Ss.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(al.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(gl.$$.fragment,o),$(Qs.$$.fragment,o),$(Bs.$$.fragment,o),$(_l.$$.fragment,o),$(kl.$$.fragment,o),$(Fl.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(xl.$$.fragment,o),$(Ml.$$.fragment,o),$(Ll.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),Hf=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(q),F(oe),o&&t(pe),o&&t(K),o&&t(P),o&&t(re),o&&t(he),o&&t(ae),o&&t(me),o&&t(j),o&&t(U),o&&t(te),o&&t(xe),o&&t(ye),o&&t(Me),o&&t(Z),F(br),o&&t(Qm),o&&t(vt),F(Er),F(kn),o&&t(Bm),o&&t(_o),F($r),o&&t(Vm),o&&t(yt),F(Fr),o&&t(Km),o&&t(ko),F(Mr),o&&t(Jm),o&&t(bt),F(zr),o&&t(Gm),o&&t(To),F(jr),o&&t(Xm),o&&t(vo),F(Pr),o&&t(Ym),o&&t(yo),F(Or),o&&t(Zm),o&&t(bo),F(Nr),o&&t(ef),o&&t(Ze),F(Ir),F(Ur),F($n),F(Fn),o&&t(tf),o&&t(wo),F(Rr),o&&t(of),o&&t(He),F(Hr),F(Kr),F(Mn),F(zn),o&&t(nf),o&&t(Fo),F(Jr),o&&t(sf),o&&t(et),F(Gr),F(ta),F(Cn),F(jn),o&&t(rf),o&&t(Mo),F(oa),o&&t(af),o&&t(Qe),F(na),F(ia),F(An),F(On),F(Ln),o&&t(lf),o&&t(qo),F(la),o&&t(df),o&&t(tt),F(da),F(ma),F(In),F(Sn),F(Dn),F(Wn),F(Un),o&&t(cf),o&&t(jo),F(fa),o&&t(pf),o&&t(ot),F(ua),F(Ta),F(Hn),F(Qn),o&&t(hf),o&&t(Ao),F(va),o&&t(mf),o&&t(Be),F(ya),F($a),F(Vn),F(Kn),F(Jn),o&&t(ff),o&&t(Lo),F(Fa),o&&t(uf),o&&t(nt),F(xa),F(Ca),F(Xn),F(Yn),F(Zn),o&&t(gf),o&&t(So),F(ja),o&&t(_f),o&&t(Ve),F(Pa),F(ts),F(Na),F(os),F(ns),o&&t(kf),o&&t(Wo),F(Ia),o&&t(Tf),o&&t(Oe),F(Sa),F(rs),F(Ra),F(as),F(is),o&&t(vf),o&&t(Ro),F(Ha),o&&t(yf),o&&t(Le),F(Qa),F(ds),F(Ja),F(cs),F(ps),F(hs),o&&t(bf),o&&t(Qo),F(Ga),o&&t(Ef),o&&t(Ke),F(Xa),F(fs),F(ti),F(us),F(gs),F(_s),o&&t(wf),o&&t(Vo),F(oi),o&&t($f),o&&t(Je),F(ni),F(Ts),F(ii),F(vs),F(ys),o&&t(Ff),o&&t(Jo),F(li),o&&t(xf),o&&t(Ne),F(di),F(Es),F(mi),F(ws),F($s),F(Fs),o&&t(Mf),o&&t(Xo),F(fi),o&&t(zf),o&&t(Ge),F(ui),F(Ms),F(Ti),F(zs),F(qs),F(Cs),o&&t(qf),o&&t(en),F(vi),o&&t(Cf),o&&t(Ie),F(yi),F(zi),F(Ps),F(As),o&&t(jf),o&&t(on),F(qi),o&&t(Pf),o&&t(Pe),F(Ci),F(Si),F(Ls),F(Ns),o&&t(Af),o&&t(sn),F(Di),o&&t(Of),o&&t(Se),F(Wi),F(Gi),F(Ss),F(Ds),o&&t(Lf),o&&t(an),F(Xi),o&&t(Nf),o&&t(De),F(Yi),F(al),F(Us),F(Rs),o&&t(If),o&&t(dn),F(il),o&&t(Sf),o&&t(We),F(ll),F(gl),F(Qs),F(Bs),o&&t(Df),o&&t(pn),F(_l),o&&t(Wf),o&&t(Ae),F(kl),F(Fl),F(Ks),F(Js),o&&t(Uf),o&&t(mn),F(xl),o&&t(Rf),o&&t(Ue),F(Ml),F(Ll),F(Xs),F(Ys)}}}const Vz={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function Kz(x){return N9(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class t4 extends P9{constructor(d){super();A9(this,d,Kz,Bz,O9,{})}}export{t4 as default,Vz as metadata};
