import{S as Pz,i as Az,s as Oz,e as n,k as c,w as y,t as a,M as Lz,c as s,d as t,m as p,a as r,x as b,h as i,b as u,F as e,g as k,y as E,q as w,o as $,B as F,v as Nz,L as de}from"../../chunks/vendor-6b77c823.js";import{T as Ee}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as ce}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $e}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as le}from"../../chunks/ExampleCodeBlock-5212b321.js";function Iz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Sz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Dz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Wz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Uz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Rz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Hz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Qz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Bz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Vz(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Kz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Jz(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
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
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Gz(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Xz(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
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
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Yz(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Zz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function e4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function t4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function o4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function n4(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function s4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function r4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function a4(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function i4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function l4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function d4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function c4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function p4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function h4(x){let d,g,h,m,_;return m=new ce({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function m4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function f4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function u4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function g4(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function _4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function k4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function T4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function v4(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function y4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function b4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function E4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function w4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function $4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function F4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function x4(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function M4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=n("p"),ee=a("This second option is useful when using "),S=n("code"),oe=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=a("model(inputs)"),pe=a("."),K=c(),O=n("p"),ne=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),C=n("ul"),P=n("li"),re=a("a single Tensor with "),R=n("code"),he=a("input_ids"),ae=a(" only and nothing else: "),W=n("code"),_e=a("model(inputs_ids)"),me=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=a("model([input_ids, attention_mask])"),ie=a(" or "),H=n("code"),Te=a("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=r(m);_=s(Y,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=r(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),q=s(v,"P",{});var N=r(q);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=r(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var ye=r(D);ge=i(ye,"model(inputs)"),ye.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var qe=r(O);ne=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),X=p(v),C=s(v,"UL",{});var A=r(C);P=s(A,"LI",{});var B=r(P);re=i(B,"a single Tensor with "),R=s(B,"CODE",{});var Ce=r(R);he=i(Ce,"input_ids"),Ce.forEach(t),ae=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=r(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),j=s(A,"LI",{});var V=r(j);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var je=r(U);te=i(je,"model([input_ids, attention_mask])"),je.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=r(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=r(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var be=r(Q);ve=i(be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),be.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(v,J,z),k(v,q,z),e(q,ee),e(q,S),e(S,oe),e(q,ue),e(q,D),e(D,ge),e(q,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,C,z),e(C,P),e(P,re),e(P,R),e(R,he),e(P,ae),e(P,W),e(W,_e),e(C,me),e(C,j),e(j,ke),e(j,U),e(U,te),e(j,ie),e(j,H),e(H,Te),e(C,G),e(C,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(q),v&&t(K),v&&t(O),v&&t(X),v&&t(C)}}}function z4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function q4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function C4(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function j4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function P4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function A4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function O4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function L4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function N4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function I4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function S4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function D4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function W4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function U4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function R4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function H4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=r(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Q4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),y(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),b(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function B4(x){let d,g,h,m,_,l,f,M,fe,J,q,ee,S,oe,ue,D,ge,pe,K,O,ne,X,C,P,re,R,he,ae,W,_e,me,j,ke,U,te,ie,H,Te,G,L,se,Q,ve,v,z,Y,Fe,ze,N,xe,ye,qe,A,B,Ce,we,V,je,Me,Z,be,fc,br,dg,uc,cg,Qm,vt,Er,pg,Ht,hg,Kl,mg,fg,Jl,ug,gg,wr,_g,kg,Tg,go,vg,Gl,yg,bg,Xl,Eg,wg,$g,kn,Bm,_o,Tn,gc,$r,Fg,_c,xg,Vm,yt,Fr,Mg,kc,zg,qg,vn,Yl,Cg,jg,Zl,Pg,Ag,Og,xr,Lg,ed,Ng,Ig,Km,ko,yn,Tc,Mr,Sg,vc,Dg,Jm,bt,zr,Wg,qr,Ug,yc,Rg,Hg,Qg,bn,td,Bg,Vg,od,Kg,Jg,Gg,Cr,Xg,nd,Yg,Zg,Gm,To,En,bc,jr,e_,Ec,t_,Xm,vo,Pr,o_,Ar,n_,sd,s_,r_,Ym,yo,Or,a_,Lr,i_,rd,l_,d_,Zm,bo,wn,wc,Nr,c_,$c,p_,ef,Ze,Ir,h_,Fc,m_,f_,Sr,u_,ad,g_,__,k_,Dr,T_,Wr,v_,y_,b_,Et,Ur,E_,Eo,w_,id,$_,F_,xc,x_,M_,z_,$n,q_,Fn,tf,wo,xn,Mc,Rr,C_,zc,j_,of,He,Hr,P_,qc,A_,O_,Cc,L_,N_,Qr,I_,ld,S_,D_,W_,Br,U_,Vr,R_,H_,Q_,wt,Kr,B_,$o,V_,dd,K_,J_,jc,G_,X_,Y_,Mn,Z_,zn,nf,Fo,qn,Pc,Jr,ek,Ac,tk,sf,et,Gr,ok,Xr,nk,Oc,sk,rk,ak,Yr,ik,cd,lk,dk,ck,Zr,pk,ea,hk,mk,fk,$t,ta,uk,xo,gk,pd,_k,kk,Lc,Tk,vk,yk,Cn,bk,jn,rf,Mo,Pn,Nc,oa,Ek,Ic,wk,af,Qe,na,$k,Sc,Fk,xk,Dc,Mk,zk,sa,qk,hd,Ck,jk,Pk,ra,Ak,aa,Ok,Lk,Nk,st,ia,Ik,zo,Sk,md,Dk,Wk,Wc,Uk,Rk,Hk,An,Qk,On,Bk,Ln,lf,qo,Nn,Uc,la,Vk,Rc,Kk,df,tt,da,Jk,Hc,Gk,Xk,ca,Yk,fd,Zk,eT,tT,pa,oT,ha,nT,sT,rT,Re,ma,aT,Co,iT,ud,lT,dT,Qc,cT,pT,hT,In,mT,Sn,fT,Dn,uT,Wn,gT,Un,cf,jo,Rn,Bc,fa,_T,Vc,kT,pf,ot,ua,TT,Kc,vT,yT,ga,bT,gd,ET,wT,$T,_a,FT,ka,xT,MT,zT,Ft,Ta,qT,Po,CT,_d,jT,PT,Jc,AT,OT,LT,Hn,NT,Qn,hf,Ao,Bn,Gc,va,IT,Xc,ST,mf,Be,ya,DT,Yc,WT,UT,Zc,RT,HT,ba,QT,kd,BT,VT,KT,Ea,JT,wa,GT,XT,YT,rt,$a,ZT,Oo,ev,Td,tv,ov,ep,nv,sv,rv,Vn,av,Kn,iv,Jn,ff,Lo,Gn,tp,Fa,lv,op,dv,uf,nt,xa,cv,No,pv,np,hv,mv,sp,fv,uv,gv,Ma,_v,vd,kv,Tv,vv,za,yv,qa,bv,Ev,wv,at,Ca,$v,Io,Fv,yd,xv,Mv,rp,zv,qv,Cv,Xn,jv,Yn,Pv,Zn,gf,So,es,ap,ja,Av,ip,Ov,_f,Ve,Pa,Lv,lp,Nv,Iv,Aa,Sv,bd,Dv,Wv,Uv,Oa,Rv,La,Hv,Qv,Bv,ts,Vv,xt,Na,Kv,Do,Jv,Ed,Gv,Xv,dp,Yv,Zv,ey,os,ty,ns,kf,Wo,ss,cp,Ia,oy,pp,ny,Tf,Oe,Sa,sy,hp,ry,ay,mp,iy,ly,Da,dy,wd,cy,py,hy,Wa,my,Ua,fy,uy,gy,rs,_y,Mt,Ra,ky,Uo,Ty,$d,vy,yy,fp,by,Ey,wy,as,$y,is,vf,Ro,ls,up,Ha,Fy,gp,xy,yf,Le,Qa,My,_p,zy,qy,kp,Cy,jy,Ba,Py,Fd,Ay,Oy,Ly,Va,Ny,Ka,Iy,Sy,Dy,ds,Wy,it,Ja,Uy,Ho,Ry,xd,Hy,Qy,Tp,By,Vy,Ky,cs,Jy,ps,Gy,hs,bf,Qo,ms,vp,Ga,Xy,yp,Yy,Ef,Ke,Xa,Zy,bp,eb,tb,Ya,ob,Md,nb,sb,rb,Za,ab,ei,ib,lb,db,fs,cb,lt,ti,pb,Bo,hb,zd,mb,fb,Ep,ub,gb,_b,us,kb,gs,Tb,_s,wf,Vo,ks,wp,oi,vb,$p,yb,$f,Je,ni,bb,Fp,Eb,wb,si,$b,qd,Fb,xb,Mb,ri,zb,ai,qb,Cb,jb,Ts,Pb,zt,ii,Ab,Ko,Ob,Cd,Lb,Nb,xp,Ib,Sb,Db,vs,Wb,ys,Ff,Jo,bs,Mp,li,Ub,zp,Rb,xf,Ne,di,Hb,qp,Qb,Bb,Cp,Vb,Kb,ci,Jb,jd,Gb,Xb,Yb,pi,Zb,hi,eE,tE,oE,Es,nE,dt,mi,sE,Go,rE,Pd,aE,iE,jp,lE,dE,cE,ws,pE,$s,hE,Fs,Mf,Xo,xs,Pp,fi,mE,Ap,fE,zf,Ge,ui,uE,Yo,gE,Op,_E,kE,Lp,TE,vE,yE,gi,bE,Ad,EE,wE,$E,_i,FE,ki,xE,ME,zE,Ms,qE,ct,Ti,CE,Zo,jE,Od,PE,AE,Np,OE,LE,NE,zs,IE,qs,SE,Cs,qf,en,js,Ip,vi,DE,Sp,WE,Cf,Ie,yi,UE,Dp,RE,HE,bi,QE,Ld,BE,VE,KE,Ei,JE,wi,GE,XE,YE,Wp,ZE,ew,Qt,Up,$i,tw,ow,Rp,Fi,nw,sw,Hp,xi,rw,aw,Qp,Mi,iw,lw,qt,zi,dw,tn,cw,Bp,pw,hw,Vp,mw,fw,uw,Ps,gw,As,jf,on,Os,Kp,qi,_w,Jp,kw,Pf,Pe,Ci,Tw,Gp,vw,yw,Xp,bw,Ew,ji,ww,Nd,$w,Fw,xw,Pi,Mw,Ai,zw,qw,Cw,Yp,jw,Pw,Bt,Zp,Oi,Aw,Ow,eh,Li,Lw,Nw,th,Ni,Iw,Sw,oh,Ii,Dw,Ww,Ct,Si,Uw,nn,Rw,nh,Hw,Qw,sh,Bw,Vw,Kw,Ls,Jw,Ns,Af,sn,Is,rh,Di,Gw,ah,Xw,Of,Se,Wi,Yw,Ui,Zw,ih,e$,t$,o$,Ri,n$,Id,s$,r$,a$,Hi,i$,Qi,l$,d$,c$,lh,p$,h$,Vt,dh,Bi,m$,f$,ch,Vi,u$,g$,ph,Ki,_$,k$,hh,Ji,T$,v$,jt,Gi,y$,rn,b$,mh,E$,w$,fh,$$,F$,x$,Ss,M$,Ds,Lf,an,Ws,uh,Xi,z$,gh,q$,Nf,De,Yi,C$,_h,j$,P$,Zi,A$,Sd,O$,L$,N$,el,I$,tl,S$,D$,W$,kh,U$,R$,Kt,Th,ol,H$,Q$,vh,nl,B$,V$,yh,sl,K$,J$,bh,rl,G$,X$,Pt,al,Y$,ln,Z$,Eh,e1,t1,wh,o1,n1,s1,Us,r1,Rs,If,dn,Hs,$h,il,a1,Fh,i1,Sf,We,ll,l1,xh,d1,c1,dl,p1,Dd,h1,m1,f1,cl,u1,pl,g1,_1,k1,Mh,T1,v1,Jt,zh,hl,y1,b1,qh,ml,E1,w1,Ch,fl,$1,F1,jh,ul,x1,M1,At,gl,z1,cn,q1,Ph,C1,j1,Ah,P1,A1,O1,Qs,L1,Bs,Df,pn,Vs,Oh,_l,N1,Lh,I1,Wf,Ae,kl,S1,Nh,D1,W1,Ih,U1,R1,Tl,H1,Wd,Q1,B1,V1,vl,K1,yl,J1,G1,X1,Sh,Y1,Z1,Gt,Dh,bl,eF,tF,Wh,El,oF,nF,Uh,wl,sF,rF,Rh,$l,aF,iF,Ot,Fl,lF,hn,dF,Hh,cF,pF,Qh,hF,mF,fF,Ks,uF,Js,Uf,mn,Gs,Bh,xl,gF,Vh,_F,Rf,Ue,Ml,kF,fn,TF,Kh,vF,yF,Jh,bF,EF,wF,zl,$F,Ud,FF,xF,MF,ql,zF,Cl,qF,CF,jF,Gh,PF,AF,Xt,Xh,jl,OF,LF,Yh,Pl,NF,IF,Zh,Al,SF,DF,em,Ol,WF,UF,Lt,Ll,RF,un,HF,tm,QF,BF,om,VF,KF,JF,Xs,GF,Ys,Hf;return l=new $e({}),oe=new $e({}),br=new $e({}),Er=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/configuration_electra.py#L38"}}),kn=new le({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[Iz]},$$scope:{ctx:x}}}),$r=new $e({}),Fr=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/tokenization_electra.py#L52"}}),Mr=new $e({}),zr=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/tokenization_electra_fast.py#L61"}}),jr=new $e({}),Pr=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L697"}}),Or=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L806"}}),Nr=new $e({}),Ir=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L809"}}),Ur=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L836",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new Ee({props:{$$slots:{default:[Sz]},$$scope:{ctx:x}}}),Fn=new le({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[Dz]},$$scope:{ctx:x}}}),Rr=new $e({}),Hr=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1058"}}),Kr=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1067",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new Ee({props:{$$slots:{default:[Wz]},$$scope:{ctx:x}}}),zn=new le({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[Uz]},$$scope:{ctx:x}}}),Jr=new $e({}),Gr=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1515"}}),ta=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1534",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Ee({props:{$$slots:{default:[Rz]},$$scope:{ctx:x}}}),jn=new le({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[Hz]},$$scope:{ctx:x}}}),oa=new $e({}),na=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1155"}}),ia=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Ee({props:{$$slots:{default:[Qz]},$$scope:{ctx:x}}}),On=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[Bz]},$$scope:{ctx:x}}}),Ln=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[Vz]},$$scope:{ctx:x}}}),la=new $e({}),da=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L961"}}),ma=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new Ee({props:{$$slots:{default:[Kz]},$$scope:{ctx:x}}}),Sn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[Jz]},$$scope:{ctx:x}}}),Dn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[Gz]},$$scope:{ctx:x}}}),Wn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[Xz]},$$scope:{ctx:x}}}),Un=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[Yz]},$$scope:{ctx:x}}}),fa=new $e({}),ua=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1427"}}),Ta=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1438",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new Ee({props:{$$slots:{default:[Zz]},$$scope:{ctx:x}}}),Qn=new le({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[e4]},$$scope:{ctx:x}}}),va=new $e({}),ya=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1242"}}),$a=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1256",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new Ee({props:{$$slots:{default:[t4]},$$scope:{ctx:x}}}),Kn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[o4]},$$scope:{ctx:x}}}),Jn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[n4]},$$scope:{ctx:x}}}),Fa=new $e({}),xa=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1322"}}),Ca=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_electra.py#L1336",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Ee({props:{$$slots:{default:[s4]},$$scope:{ctx:x}}}),Yn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[r4]},$$scope:{ctx:x}}}),Zn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[a4]},$$scope:{ctx:x}}}),ja=new $e({}),Pa=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L926"}}),ts=new Ee({props:{$$slots:{default:[i4]},$$scope:{ctx:x}}}),Na=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L932",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new Ee({props:{$$slots:{default:[l4]},$$scope:{ctx:x}}}),ns=new le({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[d4]},$$scope:{ctx:x}}}),Ia=new $e({}),Sa=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1024"}}),rs=new Ee({props:{$$slots:{default:[c4]},$$scope:{ctx:x}}}),Ra=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new Ee({props:{$$slots:{default:[p4]},$$scope:{ctx:x}}}),is=new le({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[h4]},$$scope:{ctx:x}}}),Ha=new $e({}),Qa=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1140"}}),ds=new Ee({props:{$$slots:{default:[m4]},$$scope:{ctx:x}}}),Ja=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1162",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new Ee({props:{$$slots:{default:[f4]},$$scope:{ctx:x}}}),ps=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[u4]},$$scope:{ctx:x}}}),hs=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[g4]},$$scope:{ctx:x}}}),Ga=new $e({}),Xa=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1265"}}),fs=new Ee({props:{$$slots:{default:[_4]},$$scope:{ctx:x}}}),ti=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1272",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),us=new Ee({props:{$$slots:{default:[k4]},$$scope:{ctx:x}}}),gs=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[T4]},$$scope:{ctx:x}}}),_s=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[v4]},$$scope:{ctx:x}}}),oi=new $e({}),ni=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1343"}}),Ts=new Ee({props:{$$slots:{default:[y4]},$$scope:{ctx:x}}}),ii=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1365",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vs=new Ee({props:{$$slots:{default:[b4]},$$scope:{ctx:x}}}),ys=new le({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[E4]},$$scope:{ctx:x}}}),li=new $e({}),di=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1470"}}),Es=new Ee({props:{$$slots:{default:[w4]},$$scope:{ctx:x}}}),mi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1483",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ws=new Ee({props:{$$slots:{default:[$4]},$$scope:{ctx:x}}}),$s=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[F4]},$$scope:{ctx:x}}}),Fs=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[x4]},$$scope:{ctx:x}}}),fi=new $e({}),ui=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1554"}}),Ms=new Ee({props:{$$slots:{default:[M4]},$$scope:{ctx:x}}}),Ti=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_tf_electra.py#L1564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zs=new Ee({props:{$$slots:{default:[z4]},$$scope:{ctx:x}}}),qs=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[q4]},$$scope:{ctx:x}}}),Cs=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[C4]},$$scope:{ctx:x}}}),vi=new $e({}),yi=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L662"}}),zi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new Ee({props:{$$slots:{default:[j4]},$$scope:{ctx:x}}}),As=new le({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[P4]},$$scope:{ctx:x}}}),qi=new $e({}),Ci=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L811"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
`}}),Ls=new Ee({props:{$$slots:{default:[A4]},$$scope:{ctx:x}}}),Ns=new le({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[O4]},$$scope:{ctx:x}}}),Di=new $e({}),Wi=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L748"}}),Gi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new Ee({props:{$$slots:{default:[L4]},$$scope:{ctx:x}}}),Ds=new le({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[N4]},$$scope:{ctx:x}}}),Xi=new $e({}),Yi=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L1212"}}),al=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new Ee({props:{$$slots:{default:[I4]},$$scope:{ctx:x}}}),Rs=new le({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[S4]},$$scope:{ctx:x}}}),il=new $e({}),ll=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L1048"}}),gl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new Ee({props:{$$slots:{default:[D4]},$$scope:{ctx:x}}}),Bs=new le({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[W4]},$$scope:{ctx:x}}}),_l=new $e({}),kl=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L903"}}),Fl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ks=new Ee({props:{$$slots:{default:[U4]},$$scope:{ctx:x}}}),Js=new le({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[R4]},$$scope:{ctx:x}}}),xl=new $e({}),Ml=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L1121"}}),Ll=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/electra/modeling_flax_electra.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new Ee({props:{$$slots:{default:[H4]},$$scope:{ctx:x}}}),Ys=new le({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[Q4]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),y(l.$$.fragment),f=c(),M=n("span"),fe=a("ELECTRA"),J=c(),q=n("h2"),ee=n("a"),S=n("span"),y(oe.$$.fragment),ue=c(),D=n("span"),ge=a("Overview"),pe=c(),K=n("p"),O=a("The ELECTRA model was proposed in the paper "),ne=n("a"),X=a(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
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
pooled output) e.g. for GLUE tasks.`),Xk=c(),ca=n("p"),Yk=a("This model inherits from "),fd=n("a"),Zk=a("PreTrainedModel"),eT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT=c(),pa=n("p"),oT=a("This model is also a PyTorch "),ha=n("a"),nT=a("torch.nn.Module"),sT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rT=c(),Re=n("div"),y(ma.$$.fragment),aT=c(),Co=n("p"),iT=a("The "),ud=n("a"),lT=a("ElectraForSequenceClassification"),dT=a(" forward method, overrides the "),Qc=n("code"),cT=a("__call__"),pT=a(" special method."),hT=c(),y(In.$$.fragment),mT=c(),y(Sn.$$.fragment),fT=c(),y(Dn.$$.fragment),uT=c(),y(Wn.$$.fragment),gT=c(),y(Un.$$.fragment),cf=c(),jo=n("h2"),Rn=n("a"),Bc=n("span"),y(fa.$$.fragment),_T=c(),Vc=n("span"),kT=a("ElectraForMultipleChoice"),pf=c(),ot=n("div"),y(ua.$$.fragment),TT=c(),Kc=n("p"),vT=a(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yT=c(),ga=n("p"),bT=a("This model inherits from "),gd=n("a"),ET=a("PreTrainedModel"),wT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$T=c(),_a=n("p"),FT=a("This model is also a PyTorch "),ka=n("a"),xT=a("torch.nn.Module"),MT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zT=c(),Ft=n("div"),y(Ta.$$.fragment),qT=c(),Po=n("p"),CT=a("The "),_d=n("a"),jT=a("ElectraForMultipleChoice"),PT=a(" forward method, overrides the "),Jc=n("code"),AT=a("__call__"),OT=a(" special method."),LT=c(),y(Hn.$$.fragment),NT=c(),y(Qn.$$.fragment),hf=c(),Ao=n("h2"),Bn=n("a"),Gc=n("span"),y(va.$$.fragment),IT=c(),Xc=n("span"),ST=a("ElectraForTokenClassification"),mf=c(),Be=n("div"),y(ya.$$.fragment),DT=c(),Yc=n("p"),WT=a("Electra model with a token classification head on top."),UT=c(),Zc=n("p"),RT=a("Both the discriminator and generator may be loaded into this model."),HT=c(),ba=n("p"),QT=a("This model inherits from "),kd=n("a"),BT=a("PreTrainedModel"),VT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),KT=c(),Ea=n("p"),JT=a("This model is also a PyTorch "),wa=n("a"),GT=a("torch.nn.Module"),XT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),YT=c(),rt=n("div"),y($a.$$.fragment),ZT=c(),Oo=n("p"),ev=a("The "),Td=n("a"),tv=a("ElectraForTokenClassification"),ov=a(" forward method, overrides the "),ep=n("code"),nv=a("__call__"),sv=a(" special method."),rv=c(),y(Vn.$$.fragment),av=c(),y(Kn.$$.fragment),iv=c(),y(Jn.$$.fragment),ff=c(),Lo=n("h2"),Gn=n("a"),tp=n("span"),y(Fa.$$.fragment),lv=c(),op=n("span"),dv=a("ElectraForQuestionAnswering"),uf=c(),nt=n("div"),y(xa.$$.fragment),cv=c(),No=n("p"),pv=a(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=n("code"),hv=a("span start logits"),mv=a(" and "),sp=n("code"),fv=a("span end logits"),uv=a(")."),gv=c(),Ma=n("p"),_v=a("This model inherits from "),vd=n("a"),kv=a("PreTrainedModel"),Tv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=c(),za=n("p"),yv=a("This model is also a PyTorch "),qa=n("a"),bv=a("torch.nn.Module"),Ev=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wv=c(),at=n("div"),y(Ca.$$.fragment),$v=c(),Io=n("p"),Fv=a("The "),yd=n("a"),xv=a("ElectraForQuestionAnswering"),Mv=a(" forward method, overrides the "),rp=n("code"),zv=a("__call__"),qv=a(" special method."),Cv=c(),y(Xn.$$.fragment),jv=c(),y(Yn.$$.fragment),Pv=c(),y(Zn.$$.fragment),gf=c(),So=n("h2"),es=n("a"),ap=n("span"),y(ja.$$.fragment),Av=c(),ip=n("span"),Ov=a("TFElectraModel"),_f=c(),Ve=n("div"),y(Pa.$$.fragment),Lv=c(),lp=n("p"),Nv=a("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Iv=c(),Aa=n("p"),Sv=a("This model inherits from "),bd=n("a"),Dv=a("TFPreTrainedModel"),Wv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=c(),Oa=n("p"),Rv=a("This model is also a "),La=n("a"),Hv=a("tf.keras.Model"),Qv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bv=c(),y(ts.$$.fragment),Vv=c(),xt=n("div"),y(Na.$$.fragment),Kv=c(),Do=n("p"),Jv=a("The "),Ed=n("a"),Gv=a("TFElectraModel"),Xv=a(" forward method, overrides the "),dp=n("code"),Yv=a("__call__"),Zv=a(" special method."),ey=c(),y(os.$$.fragment),ty=c(),y(ns.$$.fragment),kf=c(),Wo=n("h2"),ss=n("a"),cp=n("span"),y(Ia.$$.fragment),oy=c(),pp=n("span"),ny=a("TFElectraForPreTraining"),Tf=c(),Oe=n("div"),y(Sa.$$.fragment),sy=c(),hp=n("p"),ry=a("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),ay=c(),mp=n("p"),iy=a(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),ly=c(),Da=n("p"),dy=a("This model inherits from "),wd=n("a"),cy=a("TFPreTrainedModel"),py=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hy=c(),Wa=n("p"),my=a("This model is also a "),Ua=n("a"),fy=a("tf.keras.Model"),uy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gy=c(),y(rs.$$.fragment),_y=c(),Mt=n("div"),y(Ra.$$.fragment),ky=c(),Uo=n("p"),Ty=a("The "),$d=n("a"),vy=a("TFElectraForPreTraining"),yy=a(" forward method, overrides the "),fp=n("code"),by=a("__call__"),Ey=a(" special method."),wy=c(),y(as.$$.fragment),$y=c(),y(is.$$.fragment),vf=c(),Ro=n("h2"),ls=n("a"),up=n("span"),y(Ha.$$.fragment),Fy=c(),gp=n("span"),xy=a("TFElectraForMaskedLM"),yf=c(),Le=n("div"),y(Qa.$$.fragment),My=c(),_p=n("p"),zy=a("Electra model with a language modeling head on top."),qy=c(),kp=n("p"),Cy=a(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),jy=c(),Ba=n("p"),Py=a("This model inherits from "),Fd=n("a"),Ay=a("TFPreTrainedModel"),Oy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ly=c(),Va=n("p"),Ny=a("This model is also a "),Ka=n("a"),Iy=a("tf.keras.Model"),Sy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dy=c(),y(ds.$$.fragment),Wy=c(),it=n("div"),y(Ja.$$.fragment),Uy=c(),Ho=n("p"),Ry=a("The "),xd=n("a"),Hy=a("TFElectraForMaskedLM"),Qy=a(" forward method, overrides the "),Tp=n("code"),By=a("__call__"),Vy=a(" special method."),Ky=c(),y(cs.$$.fragment),Jy=c(),y(ps.$$.fragment),Gy=c(),y(hs.$$.fragment),bf=c(),Qo=n("h2"),ms=n("a"),vp=n("span"),y(Ga.$$.fragment),Xy=c(),yp=n("span"),Yy=a("TFElectraForSequenceClassification"),Ef=c(),Ke=n("div"),y(Xa.$$.fragment),Zy=c(),bp=n("p"),eb=a(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),tb=c(),Ya=n("p"),ob=a("This model inherits from "),Md=n("a"),nb=a("TFPreTrainedModel"),sb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rb=c(),Za=n("p"),ab=a("This model is also a "),ei=n("a"),ib=a("tf.keras.Model"),lb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),db=c(),y(fs.$$.fragment),cb=c(),lt=n("div"),y(ti.$$.fragment),pb=c(),Bo=n("p"),hb=a("The "),zd=n("a"),mb=a("TFElectraForSequenceClassification"),fb=a(" forward method, overrides the "),Ep=n("code"),ub=a("__call__"),gb=a(" special method."),_b=c(),y(us.$$.fragment),kb=c(),y(gs.$$.fragment),Tb=c(),y(_s.$$.fragment),wf=c(),Vo=n("h2"),ks=n("a"),wp=n("span"),y(oi.$$.fragment),vb=c(),$p=n("span"),yb=a("TFElectraForMultipleChoice"),$f=c(),Je=n("div"),y(ni.$$.fragment),bb=c(),Fp=n("p"),Eb=a(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),wb=c(),si=n("p"),$b=a("This model inherits from "),qd=n("a"),Fb=a("TFPreTrainedModel"),xb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mb=c(),ri=n("p"),zb=a("This model is also a "),ai=n("a"),qb=a("tf.keras.Model"),Cb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jb=c(),y(Ts.$$.fragment),Pb=c(),zt=n("div"),y(ii.$$.fragment),Ab=c(),Ko=n("p"),Ob=a("The "),Cd=n("a"),Lb=a("TFElectraForMultipleChoice"),Nb=a(" forward method, overrides the "),xp=n("code"),Ib=a("__call__"),Sb=a(" special method."),Db=c(),y(vs.$$.fragment),Wb=c(),y(ys.$$.fragment),Ff=c(),Jo=n("h2"),bs=n("a"),Mp=n("span"),y(li.$$.fragment),Ub=c(),zp=n("span"),Rb=a("TFElectraForTokenClassification"),xf=c(),Ne=n("div"),y(di.$$.fragment),Hb=c(),qp=n("p"),Qb=a("Electra model with a token classification head on top."),Bb=c(),Cp=n("p"),Vb=a("Both the discriminator and generator may be loaded into this model."),Kb=c(),ci=n("p"),Jb=a("This model inherits from "),jd=n("a"),Gb=a("TFPreTrainedModel"),Xb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yb=c(),pi=n("p"),Zb=a("This model is also a "),hi=n("a"),eE=a("tf.keras.Model"),tE=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oE=c(),y(Es.$$.fragment),nE=c(),dt=n("div"),y(mi.$$.fragment),sE=c(),Go=n("p"),rE=a("The "),Pd=n("a"),aE=a("TFElectraForTokenClassification"),iE=a(" forward method, overrides the "),jp=n("code"),lE=a("__call__"),dE=a(" special method."),cE=c(),y(ws.$$.fragment),pE=c(),y($s.$$.fragment),hE=c(),y(Fs.$$.fragment),Mf=c(),Xo=n("h2"),xs=n("a"),Pp=n("span"),y(fi.$$.fragment),mE=c(),Ap=n("span"),fE=a("TFElectraForQuestionAnswering"),zf=c(),Ge=n("div"),y(ui.$$.fragment),uE=c(),Yo=n("p"),gE=a(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=n("code"),_E=a("span start logits"),kE=a(" and "),Lp=n("code"),TE=a("span end logits"),vE=a(")."),yE=c(),gi=n("p"),bE=a("This model inherits from "),Ad=n("a"),EE=a("TFPreTrainedModel"),wE=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$E=c(),_i=n("p"),FE=a("This model is also a "),ki=n("a"),xE=a("tf.keras.Model"),ME=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zE=c(),y(Ms.$$.fragment),qE=c(),ct=n("div"),y(Ti.$$.fragment),CE=c(),Zo=n("p"),jE=a("The "),Od=n("a"),PE=a("TFElectraForQuestionAnswering"),AE=a(" forward method, overrides the "),Np=n("code"),OE=a("__call__"),LE=a(" special method."),NE=c(),y(zs.$$.fragment),IE=c(),y(qs.$$.fragment),SE=c(),y(Cs.$$.fragment),qf=c(),en=n("h2"),js=n("a"),Ip=n("span"),y(vi.$$.fragment),DE=c(),Sp=n("span"),WE=a("FlaxElectraModel"),Cf=c(),Ie=n("div"),y(yi.$$.fragment),UE=c(),Dp=n("p"),RE=a("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),HE=c(),bi=n("p"),QE=a("This model inherits from "),Ld=n("a"),BE=a("FlaxPreTrainedModel"),VE=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),KE=c(),Ei=n("p"),JE=a(`This model is also a Flax Linen
`),wi=n("a"),GE=a("flax.nn.Module"),XE=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),YE=c(),Wp=n("p"),ZE=a("Finally, this model supports inherent JAX features such as:"),ew=c(),Qt=n("ul"),Up=n("li"),$i=n("a"),tw=a("Just-In-Time (JIT) compilation"),ow=c(),Rp=n("li"),Fi=n("a"),nw=a("Automatic Differentiation"),sw=c(),Hp=n("li"),xi=n("a"),rw=a("Vectorization"),aw=c(),Qp=n("li"),Mi=n("a"),iw=a("Parallelization"),lw=c(),qt=n("div"),y(zi.$$.fragment),dw=c(),tn=n("p"),cw=a("The "),Bp=n("code"),pw=a("FlaxElectraPreTrainedModel"),hw=a(" forward method, overrides the "),Vp=n("code"),mw=a("__call__"),fw=a(" special method."),uw=c(),y(Ps.$$.fragment),gw=c(),y(As.$$.fragment),jf=c(),on=n("h2"),Os=n("a"),Kp=n("span"),y(qi.$$.fragment),_w=c(),Jp=n("span"),kw=a("FlaxElectraForPreTraining"),Pf=c(),Pe=n("div"),y(Ci.$$.fragment),Tw=c(),Gp=n("p"),vw=a("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),yw=c(),Xp=n("p"),bw=a("It is recommended to load the discriminator checkpoint into that model."),Ew=c(),ji=n("p"),ww=a("This model inherits from "),Nd=n("a"),$w=a("FlaxPreTrainedModel"),Fw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xw=c(),Pi=n("p"),Mw=a(`This model is also a Flax Linen
`),Ai=n("a"),zw=a("flax.nn.Module"),qw=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cw=c(),Yp=n("p"),jw=a("Finally, this model supports inherent JAX features such as:"),Pw=c(),Bt=n("ul"),Zp=n("li"),Oi=n("a"),Aw=a("Just-In-Time (JIT) compilation"),Ow=c(),eh=n("li"),Li=n("a"),Lw=a("Automatic Differentiation"),Nw=c(),th=n("li"),Ni=n("a"),Iw=a("Vectorization"),Sw=c(),oh=n("li"),Ii=n("a"),Dw=a("Parallelization"),Ww=c(),Ct=n("div"),y(Si.$$.fragment),Uw=c(),nn=n("p"),Rw=a("The "),nh=n("code"),Hw=a("FlaxElectraPreTrainedModel"),Qw=a(" forward method, overrides the "),sh=n("code"),Bw=a("__call__"),Vw=a(" special method."),Kw=c(),y(Ls.$$.fragment),Jw=c(),y(Ns.$$.fragment),Af=c(),sn=n("h2"),Is=n("a"),rh=n("span"),y(Di.$$.fragment),Gw=c(),ah=n("span"),Xw=a("FlaxElectraForMaskedLM"),Of=c(),Se=n("div"),y(Wi.$$.fragment),Yw=c(),Ui=n("p"),Zw=a("Electra Model with a "),ih=n("code"),e$=a("language modeling"),t$=a(" head on top."),o$=c(),Ri=n("p"),n$=a("This model inherits from "),Id=n("a"),s$=a("FlaxPreTrainedModel"),r$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a$=c(),Hi=n("p"),i$=a(`This model is also a Flax Linen
`),Qi=n("a"),l$=a("flax.nn.Module"),d$=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),c$=c(),lh=n("p"),p$=a("Finally, this model supports inherent JAX features such as:"),h$=c(),Vt=n("ul"),dh=n("li"),Bi=n("a"),m$=a("Just-In-Time (JIT) compilation"),f$=c(),ch=n("li"),Vi=n("a"),u$=a("Automatic Differentiation"),g$=c(),ph=n("li"),Ki=n("a"),_$=a("Vectorization"),k$=c(),hh=n("li"),Ji=n("a"),T$=a("Parallelization"),v$=c(),jt=n("div"),y(Gi.$$.fragment),y$=c(),rn=n("p"),b$=a("The "),mh=n("code"),E$=a("FlaxElectraPreTrainedModel"),w$=a(" forward method, overrides the "),fh=n("code"),$$=a("__call__"),F$=a(" special method."),x$=c(),y(Ss.$$.fragment),M$=c(),y(Ds.$$.fragment),Lf=c(),an=n("h2"),Ws=n("a"),uh=n("span"),y(Xi.$$.fragment),z$=c(),gh=n("span"),q$=a("FlaxElectraForSequenceClassification"),Nf=c(),De=n("div"),y(Yi.$$.fragment),C$=c(),_h=n("p"),j$=a(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),P$=c(),Zi=n("p"),A$=a("This model inherits from "),Sd=n("a"),O$=a("FlaxPreTrainedModel"),L$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),N$=c(),el=n("p"),I$=a(`This model is also a Flax Linen
`),tl=n("a"),S$=a("flax.nn.Module"),D$=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),W$=c(),kh=n("p"),U$=a("Finally, this model supports inherent JAX features such as:"),R$=c(),Kt=n("ul"),Th=n("li"),ol=n("a"),H$=a("Just-In-Time (JIT) compilation"),Q$=c(),vh=n("li"),nl=n("a"),B$=a("Automatic Differentiation"),V$=c(),yh=n("li"),sl=n("a"),K$=a("Vectorization"),J$=c(),bh=n("li"),rl=n("a"),G$=a("Parallelization"),X$=c(),Pt=n("div"),y(al.$$.fragment),Y$=c(),ln=n("p"),Z$=a("The "),Eh=n("code"),e1=a("FlaxElectraPreTrainedModel"),t1=a(" forward method, overrides the "),wh=n("code"),o1=a("__call__"),n1=a(" special method."),s1=c(),y(Us.$$.fragment),r1=c(),y(Rs.$$.fragment),If=c(),dn=n("h2"),Hs=n("a"),$h=n("span"),y(il.$$.fragment),a1=c(),Fh=n("span"),i1=a("FlaxElectraForMultipleChoice"),Sf=c(),We=n("div"),y(ll.$$.fragment),l1=c(),xh=n("p"),d1=a(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),c1=c(),dl=n("p"),p1=a("This model inherits from "),Dd=n("a"),h1=a("FlaxPreTrainedModel"),m1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f1=c(),cl=n("p"),u1=a(`This model is also a Flax Linen
`),pl=n("a"),g1=a("flax.nn.Module"),_1=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),k1=c(),Mh=n("p"),T1=a("Finally, this model supports inherent JAX features such as:"),v1=c(),Jt=n("ul"),zh=n("li"),hl=n("a"),y1=a("Just-In-Time (JIT) compilation"),b1=c(),qh=n("li"),ml=n("a"),E1=a("Automatic Differentiation"),w1=c(),Ch=n("li"),fl=n("a"),$1=a("Vectorization"),F1=c(),jh=n("li"),ul=n("a"),x1=a("Parallelization"),M1=c(),At=n("div"),y(gl.$$.fragment),z1=c(),cn=n("p"),q1=a("The "),Ph=n("code"),C1=a("FlaxElectraPreTrainedModel"),j1=a(" forward method, overrides the "),Ah=n("code"),P1=a("__call__"),A1=a(" special method."),O1=c(),y(Qs.$$.fragment),L1=c(),y(Bs.$$.fragment),Df=c(),pn=n("h2"),Vs=n("a"),Oh=n("span"),y(_l.$$.fragment),N1=c(),Lh=n("span"),I1=a("FlaxElectraForTokenClassification"),Wf=c(),Ae=n("div"),y(kl.$$.fragment),S1=c(),Nh=n("p"),D1=a("Electra model with a token classification head on top."),W1=c(),Ih=n("p"),U1=a("Both the discriminator and generator may be loaded into this model."),R1=c(),Tl=n("p"),H1=a("This model inherits from "),Wd=n("a"),Q1=a("FlaxPreTrainedModel"),B1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V1=c(),vl=n("p"),K1=a(`This model is also a Flax Linen
`),yl=n("a"),J1=a("flax.nn.Module"),G1=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),X1=c(),Sh=n("p"),Y1=a("Finally, this model supports inherent JAX features such as:"),Z1=c(),Gt=n("ul"),Dh=n("li"),bl=n("a"),eF=a("Just-In-Time (JIT) compilation"),tF=c(),Wh=n("li"),El=n("a"),oF=a("Automatic Differentiation"),nF=c(),Uh=n("li"),wl=n("a"),sF=a("Vectorization"),rF=c(),Rh=n("li"),$l=n("a"),aF=a("Parallelization"),iF=c(),Ot=n("div"),y(Fl.$$.fragment),lF=c(),hn=n("p"),dF=a("The "),Hh=n("code"),cF=a("FlaxElectraPreTrainedModel"),pF=a(" forward method, overrides the "),Qh=n("code"),hF=a("__call__"),mF=a(" special method."),fF=c(),y(Ks.$$.fragment),uF=c(),y(Js.$$.fragment),Uf=c(),mn=n("h2"),Gs=n("a"),Bh=n("span"),y(xl.$$.fragment),gF=c(),Vh=n("span"),_F=a("FlaxElectraForQuestionAnswering"),Rf=c(),Ue=n("div"),y(Ml.$$.fragment),kF=c(),fn=n("p"),TF=a(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=n("code"),vF=a("span start logits"),yF=a(" and "),Jh=n("code"),bF=a("span end logits"),EF=a(")."),wF=c(),zl=n("p"),$F=a("This model inherits from "),Ud=n("a"),FF=a("FlaxPreTrainedModel"),xF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),MF=c(),ql=n("p"),zF=a(`This model is also a Flax Linen
`),Cl=n("a"),qF=a("flax.nn.Module"),CF=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jF=c(),Gh=n("p"),PF=a("Finally, this model supports inherent JAX features such as:"),AF=c(),Xt=n("ul"),Xh=n("li"),jl=n("a"),OF=a("Just-In-Time (JIT) compilation"),LF=c(),Yh=n("li"),Pl=n("a"),NF=a("Automatic Differentiation"),IF=c(),Zh=n("li"),Al=n("a"),SF=a("Vectorization"),DF=c(),em=n("li"),Ol=n("a"),WF=a("Parallelization"),UF=c(),Lt=n("div"),y(Ll.$$.fragment),RF=c(),un=n("p"),HF=a("The "),tm=n("code"),QF=a("FlaxElectraPreTrainedModel"),BF=a(" forward method, overrides the "),om=n("code"),VF=a("__call__"),KF=a(" special method."),JF=c(),y(Xs.$$.fragment),GF=c(),y(Ys.$$.fragment),this.h()},l(o){const T=Lz('[data-svelte="svelte-1phssyn"]',document.head);d=s(T,"META",{name:!0,content:!0}),T.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Nl=r(h);m=s(Nl,"A",{id:!0,class:!0,href:!0});var nm=r(m);_=s(nm,"SPAN",{});var sm=r(_);b(l.$$.fragment,sm),sm.forEach(t),nm.forEach(t),f=p(Nl),M=s(Nl,"SPAN",{});var rm=r(M);fe=i(rm,"ELECTRA"),rm.forEach(t),Nl.forEach(t),J=p(o),q=s(o,"H2",{class:!0});var Il=r(q);ee=s(Il,"A",{id:!0,class:!0,href:!0});var am=r(ee);S=s(am,"SPAN",{});var im=r(S);b(oe.$$.fragment,im),im.forEach(t),am.forEach(t),ue=p(Il),D=s(Il,"SPAN",{});var lm=r(D);ge=i(lm,"Overview"),lm.forEach(t),Il.forEach(t),pe=p(o),K=s(o,"P",{});var Sl=r(K);O=i(Sl,"The ELECTRA model was proposed in the paper "),ne=s(Sl,"A",{href:!0,rel:!0});var dm=r(ne);X=i(dm,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
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
pooled output) e.g. for GLUE tasks.`),L2.forEach(t),Xk=p(ao),ca=s(ao,"P",{});var du=r(ca);Yk=i(du,"This model inherits from "),fd=s(du,"A",{href:!0});var N2=r(fd);Zk=i(N2,"PreTrainedModel"),N2.forEach(t),eT=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),tT=p(ao),pa=s(ao,"P",{});var cu=r(pa);oT=i(cu,"This model is also a PyTorch "),ha=s(cu,"A",{href:!0,rel:!0});var I2=r(ha);nT=i(I2,"torch.nn.Module"),I2.forEach(t),sT=i(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(t),rT=p(ao),Re=s(ao,"DIV",{class:!0});var pt=r(Re);b(ma.$$.fragment,pt),aT=p(pt),Co=s(pt,"P",{});var Vd=r(Co);iT=i(Vd,"The "),ud=s(Vd,"A",{href:!0});var S2=r(ud);lT=i(S2,"ElectraForSequenceClassification"),S2.forEach(t),dT=i(Vd," forward method, overrides the "),Qc=s(Vd,"CODE",{});var D2=r(Qc);cT=i(D2,"__call__"),D2.forEach(t),pT=i(Vd," special method."),Vd.forEach(t),hT=p(pt),b(In.$$.fragment,pt),mT=p(pt),b(Sn.$$.fragment,pt),fT=p(pt),b(Dn.$$.fragment,pt),uT=p(pt),b(Wn.$$.fragment,pt),gT=p(pt),b(Un.$$.fragment,pt),pt.forEach(t),ao.forEach(t),cf=p(o),jo=s(o,"H2",{class:!0});var pu=r(jo);Rn=s(pu,"A",{id:!0,class:!0,href:!0});var W2=r(Rn);Bc=s(W2,"SPAN",{});var U2=r(Bc);b(fa.$$.fragment,U2),U2.forEach(t),W2.forEach(t),_T=p(pu),Vc=s(pu,"SPAN",{});var R2=r(Vc);kT=i(R2,"ElectraForMultipleChoice"),R2.forEach(t),pu.forEach(t),pf=p(o),ot=s(o,"DIV",{class:!0});var io=r(ot);b(ua.$$.fragment,io),TT=p(io),Kc=s(io,"P",{});var H2=r(Kc);vT=i(H2,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),H2.forEach(t),yT=p(io),ga=s(io,"P",{});var hu=r(ga);bT=i(hu,"This model inherits from "),gd=s(hu,"A",{href:!0});var Q2=r(gd);ET=i(Q2,"PreTrainedModel"),Q2.forEach(t),wT=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu.forEach(t),$T=p(io),_a=s(io,"P",{});var mu=r(_a);FT=i(mu,"This model is also a PyTorch "),ka=s(mu,"A",{href:!0,rel:!0});var B2=r(ka);xT=i(B2,"torch.nn.Module"),B2.forEach(t),MT=i(mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu.forEach(t),zT=p(io),Ft=s(io,"DIV",{class:!0});var sr=r(Ft);b(Ta.$$.fragment,sr),qT=p(sr),Po=s(sr,"P",{});var Kd=r(Po);CT=i(Kd,"The "),_d=s(Kd,"A",{href:!0});var V2=r(_d);jT=i(V2,"ElectraForMultipleChoice"),V2.forEach(t),PT=i(Kd," forward method, overrides the "),Jc=s(Kd,"CODE",{});var K2=r(Jc);AT=i(K2,"__call__"),K2.forEach(t),OT=i(Kd," special method."),Kd.forEach(t),LT=p(sr),b(Hn.$$.fragment,sr),NT=p(sr),b(Qn.$$.fragment,sr),sr.forEach(t),io.forEach(t),hf=p(o),Ao=s(o,"H2",{class:!0});var fu=r(Ao);Bn=s(fu,"A",{id:!0,class:!0,href:!0});var J2=r(Bn);Gc=s(J2,"SPAN",{});var G2=r(Gc);b(va.$$.fragment,G2),G2.forEach(t),J2.forEach(t),IT=p(fu),Xc=s(fu,"SPAN",{});var X2=r(Xc);ST=i(X2,"ElectraForTokenClassification"),X2.forEach(t),fu.forEach(t),mf=p(o),Be=s(o,"DIV",{class:!0});var St=r(Be);b(ya.$$.fragment,St),DT=p(St),Yc=s(St,"P",{});var Y2=r(Yc);WT=i(Y2,"Electra model with a token classification head on top."),Y2.forEach(t),UT=p(St),Zc=s(St,"P",{});var Z2=r(Zc);RT=i(Z2,"Both the discriminator and generator may be loaded into this model."),Z2.forEach(t),HT=p(St),ba=s(St,"P",{});var uu=r(ba);QT=i(uu,"This model inherits from "),kd=s(uu,"A",{href:!0});var e0=r(kd);BT=i(e0,"PreTrainedModel"),e0.forEach(t),VT=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),KT=p(St),Ea=s(St,"P",{});var gu=r(Ea);JT=i(gu,"This model is also a PyTorch "),wa=s(gu,"A",{href:!0,rel:!0});var t0=r(wa);GT=i(t0,"torch.nn.Module"),t0.forEach(t),XT=i(gu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gu.forEach(t),YT=p(St),rt=s(St,"DIV",{class:!0});var lo=r(rt);b($a.$$.fragment,lo),ZT=p(lo),Oo=s(lo,"P",{});var Jd=r(Oo);ev=i(Jd,"The "),Td=s(Jd,"A",{href:!0});var o0=r(Td);tv=i(o0,"ElectraForTokenClassification"),o0.forEach(t),ov=i(Jd," forward method, overrides the "),ep=s(Jd,"CODE",{});var n0=r(ep);nv=i(n0,"__call__"),n0.forEach(t),sv=i(Jd," special method."),Jd.forEach(t),rv=p(lo),b(Vn.$$.fragment,lo),av=p(lo),b(Kn.$$.fragment,lo),iv=p(lo),b(Jn.$$.fragment,lo),lo.forEach(t),St.forEach(t),ff=p(o),Lo=s(o,"H2",{class:!0});var _u=r(Lo);Gn=s(_u,"A",{id:!0,class:!0,href:!0});var s0=r(Gn);tp=s(s0,"SPAN",{});var r0=r(tp);b(Fa.$$.fragment,r0),r0.forEach(t),s0.forEach(t),lv=p(_u),op=s(_u,"SPAN",{});var a0=r(op);dv=i(a0,"ElectraForQuestionAnswering"),a0.forEach(t),_u.forEach(t),uf=p(o),nt=s(o,"DIV",{class:!0});var co=r(nt);b(xa.$$.fragment,co),cv=p(co),No=s(co,"P",{});var Gd=r(No);pv=i(Gd,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=s(Gd,"CODE",{});var i0=r(np);hv=i(i0,"span start logits"),i0.forEach(t),mv=i(Gd," and "),sp=s(Gd,"CODE",{});var l0=r(sp);fv=i(l0,"span end logits"),l0.forEach(t),uv=i(Gd,")."),Gd.forEach(t),gv=p(co),Ma=s(co,"P",{});var ku=r(Ma);_v=i(ku,"This model inherits from "),vd=s(ku,"A",{href:!0});var d0=r(vd);kv=i(d0,"PreTrainedModel"),d0.forEach(t),Tv=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),vv=p(co),za=s(co,"P",{});var Tu=r(za);yv=i(Tu,"This model is also a PyTorch "),qa=s(Tu,"A",{href:!0,rel:!0});var c0=r(qa);bv=i(c0,"torch.nn.Module"),c0.forEach(t),Ev=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),wv=p(co),at=s(co,"DIV",{class:!0});var po=r(at);b(Ca.$$.fragment,po),$v=p(po),Io=s(po,"P",{});var Xd=r(Io);Fv=i(Xd,"The "),yd=s(Xd,"A",{href:!0});var p0=r(yd);xv=i(p0,"ElectraForQuestionAnswering"),p0.forEach(t),Mv=i(Xd," forward method, overrides the "),rp=s(Xd,"CODE",{});var h0=r(rp);zv=i(h0,"__call__"),h0.forEach(t),qv=i(Xd," special method."),Xd.forEach(t),Cv=p(po),b(Xn.$$.fragment,po),jv=p(po),b(Yn.$$.fragment,po),Pv=p(po),b(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),gf=p(o),So=s(o,"H2",{class:!0});var vu=r(So);es=s(vu,"A",{id:!0,class:!0,href:!0});var m0=r(es);ap=s(m0,"SPAN",{});var f0=r(ap);b(ja.$$.fragment,f0),f0.forEach(t),m0.forEach(t),Av=p(vu),ip=s(vu,"SPAN",{});var u0=r(ip);Ov=i(u0,"TFElectraModel"),u0.forEach(t),vu.forEach(t),_f=p(o),Ve=s(o,"DIV",{class:!0});var Dt=r(Ve);b(Pa.$$.fragment,Dt),Lv=p(Dt),lp=s(Dt,"P",{});var g0=r(lp);Nv=i(g0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),g0.forEach(t),Iv=p(Dt),Aa=s(Dt,"P",{});var yu=r(Aa);Sv=i(yu,"This model inherits from "),bd=s(yu,"A",{href:!0});var _0=r(bd);Dv=i(_0,"TFPreTrainedModel"),_0.forEach(t),Wv=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),Uv=p(Dt),Oa=s(Dt,"P",{});var bu=r(Oa);Rv=i(bu,"This model is also a "),La=s(bu,"A",{href:!0,rel:!0});var k0=r(La);Hv=i(k0,"tf.keras.Model"),k0.forEach(t),Qv=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),Bv=p(Dt),b(ts.$$.fragment,Dt),Vv=p(Dt),xt=s(Dt,"DIV",{class:!0});var rr=r(xt);b(Na.$$.fragment,rr),Kv=p(rr),Do=s(rr,"P",{});var Yd=r(Do);Jv=i(Yd,"The "),Ed=s(Yd,"A",{href:!0});var T0=r(Ed);Gv=i(T0,"TFElectraModel"),T0.forEach(t),Xv=i(Yd," forward method, overrides the "),dp=s(Yd,"CODE",{});var v0=r(dp);Yv=i(v0,"__call__"),v0.forEach(t),Zv=i(Yd," special method."),Yd.forEach(t),ey=p(rr),b(os.$$.fragment,rr),ty=p(rr),b(ns.$$.fragment,rr),rr.forEach(t),Dt.forEach(t),kf=p(o),Wo=s(o,"H2",{class:!0});var Eu=r(Wo);ss=s(Eu,"A",{id:!0,class:!0,href:!0});var y0=r(ss);cp=s(y0,"SPAN",{});var b0=r(cp);b(Ia.$$.fragment,b0),b0.forEach(t),y0.forEach(t),oy=p(Eu),pp=s(Eu,"SPAN",{});var E0=r(pp);ny=i(E0,"TFElectraForPreTraining"),E0.forEach(t),Eu.forEach(t),Tf=p(o),Oe=s(o,"DIV",{class:!0});var ht=r(Oe);b(Sa.$$.fragment,ht),sy=p(ht),hp=s(ht,"P",{});var w0=r(hp);ry=i(w0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),w0.forEach(t),ay=p(ht),mp=s(ht,"P",{});var $0=r(mp);iy=i($0,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),$0.forEach(t),ly=p(ht),Da=s(ht,"P",{});var wu=r(Da);dy=i(wu,"This model inherits from "),wd=s(wu,"A",{href:!0});var F0=r(wd);cy=i(F0,"TFPreTrainedModel"),F0.forEach(t),py=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),hy=p(ht),Wa=s(ht,"P",{});var $u=r(Wa);my=i($u,"This model is also a "),Ua=s($u,"A",{href:!0,rel:!0});var x0=r(Ua);fy=i(x0,"tf.keras.Model"),x0.forEach(t),uy=i($u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$u.forEach(t),gy=p(ht),b(rs.$$.fragment,ht),_y=p(ht),Mt=s(ht,"DIV",{class:!0});var ar=r(Mt);b(Ra.$$.fragment,ar),ky=p(ar),Uo=s(ar,"P",{});var Zd=r(Uo);Ty=i(Zd,"The "),$d=s(Zd,"A",{href:!0});var M0=r($d);vy=i(M0,"TFElectraForPreTraining"),M0.forEach(t),yy=i(Zd," forward method, overrides the "),fp=s(Zd,"CODE",{});var z0=r(fp);by=i(z0,"__call__"),z0.forEach(t),Ey=i(Zd," special method."),Zd.forEach(t),wy=p(ar),b(as.$$.fragment,ar),$y=p(ar),b(is.$$.fragment,ar),ar.forEach(t),ht.forEach(t),vf=p(o),Ro=s(o,"H2",{class:!0});var Fu=r(Ro);ls=s(Fu,"A",{id:!0,class:!0,href:!0});var q0=r(ls);up=s(q0,"SPAN",{});var C0=r(up);b(Ha.$$.fragment,C0),C0.forEach(t),q0.forEach(t),Fy=p(Fu),gp=s(Fu,"SPAN",{});var j0=r(gp);xy=i(j0,"TFElectraForMaskedLM"),j0.forEach(t),Fu.forEach(t),yf=p(o),Le=s(o,"DIV",{class:!0});var mt=r(Le);b(Qa.$$.fragment,mt),My=p(mt),_p=s(mt,"P",{});var P0=r(_p);zy=i(P0,"Electra model with a language modeling head on top."),P0.forEach(t),qy=p(mt),kp=s(mt,"P",{});var A0=r(kp);Cy=i(A0,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),A0.forEach(t),jy=p(mt),Ba=s(mt,"P",{});var xu=r(Ba);Py=i(xu,"This model inherits from "),Fd=s(xu,"A",{href:!0});var O0=r(Fd);Ay=i(O0,"TFPreTrainedModel"),O0.forEach(t),Oy=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),Ly=p(mt),Va=s(mt,"P",{});var Mu=r(Va);Ny=i(Mu,"This model is also a "),Ka=s(Mu,"A",{href:!0,rel:!0});var L0=r(Ka);Iy=i(L0,"tf.keras.Model"),L0.forEach(t),Sy=i(Mu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mu.forEach(t),Dy=p(mt),b(ds.$$.fragment,mt),Wy=p(mt),it=s(mt,"DIV",{class:!0});var ho=r(it);b(Ja.$$.fragment,ho),Uy=p(ho),Ho=s(ho,"P",{});var ec=r(Ho);Ry=i(ec,"The "),xd=s(ec,"A",{href:!0});var N0=r(xd);Hy=i(N0,"TFElectraForMaskedLM"),N0.forEach(t),Qy=i(ec," forward method, overrides the "),Tp=s(ec,"CODE",{});var I0=r(Tp);By=i(I0,"__call__"),I0.forEach(t),Vy=i(ec," special method."),ec.forEach(t),Ky=p(ho),b(cs.$$.fragment,ho),Jy=p(ho),b(ps.$$.fragment,ho),Gy=p(ho),b(hs.$$.fragment,ho),ho.forEach(t),mt.forEach(t),bf=p(o),Qo=s(o,"H2",{class:!0});var zu=r(Qo);ms=s(zu,"A",{id:!0,class:!0,href:!0});var S0=r(ms);vp=s(S0,"SPAN",{});var D0=r(vp);b(Ga.$$.fragment,D0),D0.forEach(t),S0.forEach(t),Xy=p(zu),yp=s(zu,"SPAN",{});var W0=r(yp);Yy=i(W0,"TFElectraForSequenceClassification"),W0.forEach(t),zu.forEach(t),Ef=p(o),Ke=s(o,"DIV",{class:!0});var Wt=r(Ke);b(Xa.$$.fragment,Wt),Zy=p(Wt),bp=s(Wt,"P",{});var U0=r(bp);eb=i(U0,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),U0.forEach(t),tb=p(Wt),Ya=s(Wt,"P",{});var qu=r(Ya);ob=i(qu,"This model inherits from "),Md=s(qu,"A",{href:!0});var R0=r(Md);nb=i(R0,"TFPreTrainedModel"),R0.forEach(t),sb=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),rb=p(Wt),Za=s(Wt,"P",{});var Cu=r(Za);ab=i(Cu,"This model is also a "),ei=s(Cu,"A",{href:!0,rel:!0});var H0=r(ei);ib=i(H0,"tf.keras.Model"),H0.forEach(t),lb=i(Cu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cu.forEach(t),db=p(Wt),b(fs.$$.fragment,Wt),cb=p(Wt),lt=s(Wt,"DIV",{class:!0});var mo=r(lt);b(ti.$$.fragment,mo),pb=p(mo),Bo=s(mo,"P",{});var tc=r(Bo);hb=i(tc,"The "),zd=s(tc,"A",{href:!0});var Q0=r(zd);mb=i(Q0,"TFElectraForSequenceClassification"),Q0.forEach(t),fb=i(tc," forward method, overrides the "),Ep=s(tc,"CODE",{});var B0=r(Ep);ub=i(B0,"__call__"),B0.forEach(t),gb=i(tc," special method."),tc.forEach(t),_b=p(mo),b(us.$$.fragment,mo),kb=p(mo),b(gs.$$.fragment,mo),Tb=p(mo),b(_s.$$.fragment,mo),mo.forEach(t),Wt.forEach(t),wf=p(o),Vo=s(o,"H2",{class:!0});var ju=r(Vo);ks=s(ju,"A",{id:!0,class:!0,href:!0});var V0=r(ks);wp=s(V0,"SPAN",{});var K0=r(wp);b(oi.$$.fragment,K0),K0.forEach(t),V0.forEach(t),vb=p(ju),$p=s(ju,"SPAN",{});var J0=r($p);yb=i(J0,"TFElectraForMultipleChoice"),J0.forEach(t),ju.forEach(t),$f=p(o),Je=s(o,"DIV",{class:!0});var Ut=r(Je);b(ni.$$.fragment,Ut),bb=p(Ut),Fp=s(Ut,"P",{});var G0=r(Fp);Eb=i(G0,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),G0.forEach(t),wb=p(Ut),si=s(Ut,"P",{});var Pu=r(si);$b=i(Pu,"This model inherits from "),qd=s(Pu,"A",{href:!0});var X0=r(qd);Fb=i(X0,"TFPreTrainedModel"),X0.forEach(t),xb=i(Pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu.forEach(t),Mb=p(Ut),ri=s(Ut,"P",{});var Au=r(ri);zb=i(Au,"This model is also a "),ai=s(Au,"A",{href:!0,rel:!0});var Y0=r(ai);qb=i(Y0,"tf.keras.Model"),Y0.forEach(t),Cb=i(Au,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au.forEach(t),jb=p(Ut),b(Ts.$$.fragment,Ut),Pb=p(Ut),zt=s(Ut,"DIV",{class:!0});var ir=r(zt);b(ii.$$.fragment,ir),Ab=p(ir),Ko=s(ir,"P",{});var oc=r(Ko);Ob=i(oc,"The "),Cd=s(oc,"A",{href:!0});var Z0=r(Cd);Lb=i(Z0,"TFElectraForMultipleChoice"),Z0.forEach(t),Nb=i(oc," forward method, overrides the "),xp=s(oc,"CODE",{});var ex=r(xp);Ib=i(ex,"__call__"),ex.forEach(t),Sb=i(oc," special method."),oc.forEach(t),Db=p(ir),b(vs.$$.fragment,ir),Wb=p(ir),b(ys.$$.fragment,ir),ir.forEach(t),Ut.forEach(t),Ff=p(o),Jo=s(o,"H2",{class:!0});var Ou=r(Jo);bs=s(Ou,"A",{id:!0,class:!0,href:!0});var tx=r(bs);Mp=s(tx,"SPAN",{});var ox=r(Mp);b(li.$$.fragment,ox),ox.forEach(t),tx.forEach(t),Ub=p(Ou),zp=s(Ou,"SPAN",{});var nx=r(zp);Rb=i(nx,"TFElectraForTokenClassification"),nx.forEach(t),Ou.forEach(t),xf=p(o),Ne=s(o,"DIV",{class:!0});var ft=r(Ne);b(di.$$.fragment,ft),Hb=p(ft),qp=s(ft,"P",{});var sx=r(qp);Qb=i(sx,"Electra model with a token classification head on top."),sx.forEach(t),Bb=p(ft),Cp=s(ft,"P",{});var rx=r(Cp);Vb=i(rx,"Both the discriminator and generator may be loaded into this model."),rx.forEach(t),Kb=p(ft),ci=s(ft,"P",{});var Lu=r(ci);Jb=i(Lu,"This model inherits from "),jd=s(Lu,"A",{href:!0});var ax=r(jd);Gb=i(ax,"TFPreTrainedModel"),ax.forEach(t),Xb=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Yb=p(ft),pi=s(ft,"P",{});var Nu=r(pi);Zb=i(Nu,"This model is also a "),hi=s(Nu,"A",{href:!0,rel:!0});var ix=r(hi);eE=i(ix,"tf.keras.Model"),ix.forEach(t),tE=i(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(t),oE=p(ft),b(Es.$$.fragment,ft),nE=p(ft),dt=s(ft,"DIV",{class:!0});var fo=r(dt);b(mi.$$.fragment,fo),sE=p(fo),Go=s(fo,"P",{});var nc=r(Go);rE=i(nc,"The "),Pd=s(nc,"A",{href:!0});var lx=r(Pd);aE=i(lx,"TFElectraForTokenClassification"),lx.forEach(t),iE=i(nc," forward method, overrides the "),jp=s(nc,"CODE",{});var dx=r(jp);lE=i(dx,"__call__"),dx.forEach(t),dE=i(nc," special method."),nc.forEach(t),cE=p(fo),b(ws.$$.fragment,fo),pE=p(fo),b($s.$$.fragment,fo),hE=p(fo),b(Fs.$$.fragment,fo),fo.forEach(t),ft.forEach(t),Mf=p(o),Xo=s(o,"H2",{class:!0});var Iu=r(Xo);xs=s(Iu,"A",{id:!0,class:!0,href:!0});var cx=r(xs);Pp=s(cx,"SPAN",{});var px=r(Pp);b(fi.$$.fragment,px),px.forEach(t),cx.forEach(t),mE=p(Iu),Ap=s(Iu,"SPAN",{});var hx=r(Ap);fE=i(hx,"TFElectraForQuestionAnswering"),hx.forEach(t),Iu.forEach(t),zf=p(o),Ge=s(o,"DIV",{class:!0});var Rt=r(Ge);b(ui.$$.fragment,Rt),uE=p(Rt),Yo=s(Rt,"P",{});var sc=r(Yo);gE=i(sc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=s(sc,"CODE",{});var mx=r(Op);_E=i(mx,"span start logits"),mx.forEach(t),kE=i(sc," and "),Lp=s(sc,"CODE",{});var fx=r(Lp);TE=i(fx,"span end logits"),fx.forEach(t),vE=i(sc,")."),sc.forEach(t),yE=p(Rt),gi=s(Rt,"P",{});var Su=r(gi);bE=i(Su,"This model inherits from "),Ad=s(Su,"A",{href:!0});var ux=r(Ad);EE=i(ux,"TFPreTrainedModel"),ux.forEach(t),wE=i(Su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Su.forEach(t),$E=p(Rt),_i=s(Rt,"P",{});var Du=r(_i);FE=i(Du,"This model is also a "),ki=s(Du,"A",{href:!0,rel:!0});var gx=r(ki);xE=i(gx,"tf.keras.Model"),gx.forEach(t),ME=i(Du,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du.forEach(t),zE=p(Rt),b(Ms.$$.fragment,Rt),qE=p(Rt),ct=s(Rt,"DIV",{class:!0});var uo=r(ct);b(Ti.$$.fragment,uo),CE=p(uo),Zo=s(uo,"P",{});var rc=r(Zo);jE=i(rc,"The "),Od=s(rc,"A",{href:!0});var _x=r(Od);PE=i(_x,"TFElectraForQuestionAnswering"),_x.forEach(t),AE=i(rc," forward method, overrides the "),Np=s(rc,"CODE",{});var kx=r(Np);OE=i(kx,"__call__"),kx.forEach(t),LE=i(rc," special method."),rc.forEach(t),NE=p(uo),b(zs.$$.fragment,uo),IE=p(uo),b(qs.$$.fragment,uo),SE=p(uo),b(Cs.$$.fragment,uo),uo.forEach(t),Rt.forEach(t),qf=p(o),en=s(o,"H2",{class:!0});var Wu=r(en);js=s(Wu,"A",{id:!0,class:!0,href:!0});var Tx=r(js);Ip=s(Tx,"SPAN",{});var vx=r(Ip);b(vi.$$.fragment,vx),vx.forEach(t),Tx.forEach(t),DE=p(Wu),Sp=s(Wu,"SPAN",{});var yx=r(Sp);WE=i(yx,"FlaxElectraModel"),yx.forEach(t),Wu.forEach(t),Cf=p(o),Ie=s(o,"DIV",{class:!0});var ut=r(Ie);b(yi.$$.fragment,ut),UE=p(ut),Dp=s(ut,"P",{});var bx=r(Dp);RE=i(bx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),bx.forEach(t),HE=p(ut),bi=s(ut,"P",{});var Uu=r(bi);QE=i(Uu,"This model inherits from "),Ld=s(Uu,"A",{href:!0});var Ex=r(Ld);BE=i(Ex,"FlaxPreTrainedModel"),Ex.forEach(t),VE=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uu.forEach(t),KE=p(ut),Ei=s(ut,"P",{});var Ru=r(Ei);JE=i(Ru,`This model is also a Flax Linen
`),wi=s(Ru,"A",{href:!0,rel:!0});var wx=r(wi);GE=i(wx,"flax.nn.Module"),wx.forEach(t),XE=i(Ru,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ru.forEach(t),YE=p(ut),Wp=s(ut,"P",{});var $x=r(Wp);ZE=i($x,"Finally, this model supports inherent JAX features such as:"),$x.forEach(t),ew=p(ut),Qt=s(ut,"UL",{});var lr=r(Qt);Up=s(lr,"LI",{});var Fx=r(Up);$i=s(Fx,"A",{href:!0,rel:!0});var xx=r($i);tw=i(xx,"Just-In-Time (JIT) compilation"),xx.forEach(t),Fx.forEach(t),ow=p(lr),Rp=s(lr,"LI",{});var Mx=r(Rp);Fi=s(Mx,"A",{href:!0,rel:!0});var zx=r(Fi);nw=i(zx,"Automatic Differentiation"),zx.forEach(t),Mx.forEach(t),sw=p(lr),Hp=s(lr,"LI",{});var qx=r(Hp);xi=s(qx,"A",{href:!0,rel:!0});var Cx=r(xi);rw=i(Cx,"Vectorization"),Cx.forEach(t),qx.forEach(t),aw=p(lr),Qp=s(lr,"LI",{});var jx=r(Qp);Mi=s(jx,"A",{href:!0,rel:!0});var Px=r(Mi);iw=i(Px,"Parallelization"),Px.forEach(t),jx.forEach(t),lr.forEach(t),lw=p(ut),qt=s(ut,"DIV",{class:!0});var dr=r(qt);b(zi.$$.fragment,dr),dw=p(dr),tn=s(dr,"P",{});var ac=r(tn);cw=i(ac,"The "),Bp=s(ac,"CODE",{});var Ax=r(Bp);pw=i(Ax,"FlaxElectraPreTrainedModel"),Ax.forEach(t),hw=i(ac," forward method, overrides the "),Vp=s(ac,"CODE",{});var Ox=r(Vp);mw=i(Ox,"__call__"),Ox.forEach(t),fw=i(ac," special method."),ac.forEach(t),uw=p(dr),b(Ps.$$.fragment,dr),gw=p(dr),b(As.$$.fragment,dr),dr.forEach(t),ut.forEach(t),jf=p(o),on=s(o,"H2",{class:!0});var Hu=r(on);Os=s(Hu,"A",{id:!0,class:!0,href:!0});var Lx=r(Os);Kp=s(Lx,"SPAN",{});var Nx=r(Kp);b(qi.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),_w=p(Hu),Jp=s(Hu,"SPAN",{});var Ix=r(Jp);kw=i(Ix,"FlaxElectraForPreTraining"),Ix.forEach(t),Hu.forEach(t),Pf=p(o),Pe=s(o,"DIV",{class:!0});var Xe=r(Pe);b(Ci.$$.fragment,Xe),Tw=p(Xe),Gp=s(Xe,"P",{});var Sx=r(Gp);vw=i(Sx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Sx.forEach(t),yw=p(Xe),Xp=s(Xe,"P",{});var Dx=r(Xp);bw=i(Dx,"It is recommended to load the discriminator checkpoint into that model."),Dx.forEach(t),Ew=p(Xe),ji=s(Xe,"P",{});var Qu=r(ji);ww=i(Qu,"This model inherits from "),Nd=s(Qu,"A",{href:!0});var Wx=r(Nd);$w=i(Wx,"FlaxPreTrainedModel"),Wx.forEach(t),Fw=i(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qu.forEach(t),xw=p(Xe),Pi=s(Xe,"P",{});var Bu=r(Pi);Mw=i(Bu,`This model is also a Flax Linen
`),Ai=s(Bu,"A",{href:!0,rel:!0});var Ux=r(Ai);zw=i(Ux,"flax.nn.Module"),Ux.forEach(t),qw=i(Bu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bu.forEach(t),Cw=p(Xe),Yp=s(Xe,"P",{});var Rx=r(Yp);jw=i(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(t),Pw=p(Xe),Bt=s(Xe,"UL",{});var cr=r(Bt);Zp=s(cr,"LI",{});var Hx=r(Zp);Oi=s(Hx,"A",{href:!0,rel:!0});var Qx=r(Oi);Aw=i(Qx,"Just-In-Time (JIT) compilation"),Qx.forEach(t),Hx.forEach(t),Ow=p(cr),eh=s(cr,"LI",{});var Bx=r(eh);Li=s(Bx,"A",{href:!0,rel:!0});var Vx=r(Li);Lw=i(Vx,"Automatic Differentiation"),Vx.forEach(t),Bx.forEach(t),Nw=p(cr),th=s(cr,"LI",{});var Kx=r(th);Ni=s(Kx,"A",{href:!0,rel:!0});var Jx=r(Ni);Iw=i(Jx,"Vectorization"),Jx.forEach(t),Kx.forEach(t),Sw=p(cr),oh=s(cr,"LI",{});var Gx=r(oh);Ii=s(Gx,"A",{href:!0,rel:!0});var Xx=r(Ii);Dw=i(Xx,"Parallelization"),Xx.forEach(t),Gx.forEach(t),cr.forEach(t),Ww=p(Xe),Ct=s(Xe,"DIV",{class:!0});var pr=r(Ct);b(Si.$$.fragment,pr),Uw=p(pr),nn=s(pr,"P",{});var ic=r(nn);Rw=i(ic,"The "),nh=s(ic,"CODE",{});var Yx=r(nh);Hw=i(Yx,"FlaxElectraPreTrainedModel"),Yx.forEach(t),Qw=i(ic," forward method, overrides the "),sh=s(ic,"CODE",{});var Zx=r(sh);Bw=i(Zx,"__call__"),Zx.forEach(t),Vw=i(ic," special method."),ic.forEach(t),Kw=p(pr),b(Ls.$$.fragment,pr),Jw=p(pr),b(Ns.$$.fragment,pr),pr.forEach(t),Xe.forEach(t),Af=p(o),sn=s(o,"H2",{class:!0});var Vu=r(sn);Is=s(Vu,"A",{id:!0,class:!0,href:!0});var eM=r(Is);rh=s(eM,"SPAN",{});var tM=r(rh);b(Di.$$.fragment,tM),tM.forEach(t),eM.forEach(t),Gw=p(Vu),ah=s(Vu,"SPAN",{});var oM=r(ah);Xw=i(oM,"FlaxElectraForMaskedLM"),oM.forEach(t),Vu.forEach(t),Of=p(o),Se=s(o,"DIV",{class:!0});var gt=r(Se);b(Wi.$$.fragment,gt),Yw=p(gt),Ui=s(gt,"P",{});var Ku=r(Ui);Zw=i(Ku,"Electra Model with a "),ih=s(Ku,"CODE",{});var nM=r(ih);e$=i(nM,"language modeling"),nM.forEach(t),t$=i(Ku," head on top."),Ku.forEach(t),o$=p(gt),Ri=s(gt,"P",{});var Ju=r(Ri);n$=i(Ju,"This model inherits from "),Id=s(Ju,"A",{href:!0});var sM=r(Id);s$=i(sM,"FlaxPreTrainedModel"),sM.forEach(t),r$=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ju.forEach(t),a$=p(gt),Hi=s(gt,"P",{});var Gu=r(Hi);i$=i(Gu,`This model is also a Flax Linen
`),Qi=s(Gu,"A",{href:!0,rel:!0});var rM=r(Qi);l$=i(rM,"flax.nn.Module"),rM.forEach(t),d$=i(Gu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gu.forEach(t),c$=p(gt),lh=s(gt,"P",{});var aM=r(lh);p$=i(aM,"Finally, this model supports inherent JAX features such as:"),aM.forEach(t),h$=p(gt),Vt=s(gt,"UL",{});var hr=r(Vt);dh=s(hr,"LI",{});var iM=r(dh);Bi=s(iM,"A",{href:!0,rel:!0});var lM=r(Bi);m$=i(lM,"Just-In-Time (JIT) compilation"),lM.forEach(t),iM.forEach(t),f$=p(hr),ch=s(hr,"LI",{});var dM=r(ch);Vi=s(dM,"A",{href:!0,rel:!0});var cM=r(Vi);u$=i(cM,"Automatic Differentiation"),cM.forEach(t),dM.forEach(t),g$=p(hr),ph=s(hr,"LI",{});var pM=r(ph);Ki=s(pM,"A",{href:!0,rel:!0});var hM=r(Ki);_$=i(hM,"Vectorization"),hM.forEach(t),pM.forEach(t),k$=p(hr),hh=s(hr,"LI",{});var mM=r(hh);Ji=s(mM,"A",{href:!0,rel:!0});var fM=r(Ji);T$=i(fM,"Parallelization"),fM.forEach(t),mM.forEach(t),hr.forEach(t),v$=p(gt),jt=s(gt,"DIV",{class:!0});var mr=r(jt);b(Gi.$$.fragment,mr),y$=p(mr),rn=s(mr,"P",{});var lc=r(rn);b$=i(lc,"The "),mh=s(lc,"CODE",{});var uM=r(mh);E$=i(uM,"FlaxElectraPreTrainedModel"),uM.forEach(t),w$=i(lc," forward method, overrides the "),fh=s(lc,"CODE",{});var gM=r(fh);$$=i(gM,"__call__"),gM.forEach(t),F$=i(lc," special method."),lc.forEach(t),x$=p(mr),b(Ss.$$.fragment,mr),M$=p(mr),b(Ds.$$.fragment,mr),mr.forEach(t),gt.forEach(t),Lf=p(o),an=s(o,"H2",{class:!0});var Xu=r(an);Ws=s(Xu,"A",{id:!0,class:!0,href:!0});var _M=r(Ws);uh=s(_M,"SPAN",{});var kM=r(uh);b(Xi.$$.fragment,kM),kM.forEach(t),_M.forEach(t),z$=p(Xu),gh=s(Xu,"SPAN",{});var TM=r(gh);q$=i(TM,"FlaxElectraForSequenceClassification"),TM.forEach(t),Xu.forEach(t),Nf=p(o),De=s(o,"DIV",{class:!0});var _t=r(De);b(Yi.$$.fragment,_t),C$=p(_t),_h=s(_t,"P",{});var vM=r(_h);j$=i(vM,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vM.forEach(t),P$=p(_t),Zi=s(_t,"P",{});var Yu=r(Zi);A$=i(Yu,"This model inherits from "),Sd=s(Yu,"A",{href:!0});var yM=r(Sd);O$=i(yM,"FlaxPreTrainedModel"),yM.forEach(t),L$=i(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yu.forEach(t),N$=p(_t),el=s(_t,"P",{});var Zu=r(el);I$=i(Zu,`This model is also a Flax Linen
`),tl=s(Zu,"A",{href:!0,rel:!0});var bM=r(tl);S$=i(bM,"flax.nn.Module"),bM.forEach(t),D$=i(Zu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zu.forEach(t),W$=p(_t),kh=s(_t,"P",{});var EM=r(kh);U$=i(EM,"Finally, this model supports inherent JAX features such as:"),EM.forEach(t),R$=p(_t),Kt=s(_t,"UL",{});var fr=r(Kt);Th=s(fr,"LI",{});var wM=r(Th);ol=s(wM,"A",{href:!0,rel:!0});var $M=r(ol);H$=i($M,"Just-In-Time (JIT) compilation"),$M.forEach(t),wM.forEach(t),Q$=p(fr),vh=s(fr,"LI",{});var FM=r(vh);nl=s(FM,"A",{href:!0,rel:!0});var xM=r(nl);B$=i(xM,"Automatic Differentiation"),xM.forEach(t),FM.forEach(t),V$=p(fr),yh=s(fr,"LI",{});var MM=r(yh);sl=s(MM,"A",{href:!0,rel:!0});var zM=r(sl);K$=i(zM,"Vectorization"),zM.forEach(t),MM.forEach(t),J$=p(fr),bh=s(fr,"LI",{});var qM=r(bh);rl=s(qM,"A",{href:!0,rel:!0});var CM=r(rl);G$=i(CM,"Parallelization"),CM.forEach(t),qM.forEach(t),fr.forEach(t),X$=p(_t),Pt=s(_t,"DIV",{class:!0});var ur=r(Pt);b(al.$$.fragment,ur),Y$=p(ur),ln=s(ur,"P",{});var dc=r(ln);Z$=i(dc,"The "),Eh=s(dc,"CODE",{});var jM=r(Eh);e1=i(jM,"FlaxElectraPreTrainedModel"),jM.forEach(t),t1=i(dc," forward method, overrides the "),wh=s(dc,"CODE",{});var PM=r(wh);o1=i(PM,"__call__"),PM.forEach(t),n1=i(dc," special method."),dc.forEach(t),s1=p(ur),b(Us.$$.fragment,ur),r1=p(ur),b(Rs.$$.fragment,ur),ur.forEach(t),_t.forEach(t),If=p(o),dn=s(o,"H2",{class:!0});var eg=r(dn);Hs=s(eg,"A",{id:!0,class:!0,href:!0});var AM=r(Hs);$h=s(AM,"SPAN",{});var OM=r($h);b(il.$$.fragment,OM),OM.forEach(t),AM.forEach(t),a1=p(eg),Fh=s(eg,"SPAN",{});var LM=r(Fh);i1=i(LM,"FlaxElectraForMultipleChoice"),LM.forEach(t),eg.forEach(t),Sf=p(o),We=s(o,"DIV",{class:!0});var kt=r(We);b(ll.$$.fragment,kt),l1=p(kt),xh=s(kt,"P",{});var NM=r(xh);d1=i(NM,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),NM.forEach(t),c1=p(kt),dl=s(kt,"P",{});var tg=r(dl);p1=i(tg,"This model inherits from "),Dd=s(tg,"A",{href:!0});var IM=r(Dd);h1=i(IM,"FlaxPreTrainedModel"),IM.forEach(t),m1=i(tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tg.forEach(t),f1=p(kt),cl=s(kt,"P",{});var og=r(cl);u1=i(og,`This model is also a Flax Linen
`),pl=s(og,"A",{href:!0,rel:!0});var SM=r(pl);g1=i(SM,"flax.nn.Module"),SM.forEach(t),_1=i(og,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),og.forEach(t),k1=p(kt),Mh=s(kt,"P",{});var DM=r(Mh);T1=i(DM,"Finally, this model supports inherent JAX features such as:"),DM.forEach(t),v1=p(kt),Jt=s(kt,"UL",{});var gr=r(Jt);zh=s(gr,"LI",{});var WM=r(zh);hl=s(WM,"A",{href:!0,rel:!0});var UM=r(hl);y1=i(UM,"Just-In-Time (JIT) compilation"),UM.forEach(t),WM.forEach(t),b1=p(gr),qh=s(gr,"LI",{});var RM=r(qh);ml=s(RM,"A",{href:!0,rel:!0});var HM=r(ml);E1=i(HM,"Automatic Differentiation"),HM.forEach(t),RM.forEach(t),w1=p(gr),Ch=s(gr,"LI",{});var QM=r(Ch);fl=s(QM,"A",{href:!0,rel:!0});var BM=r(fl);$1=i(BM,"Vectorization"),BM.forEach(t),QM.forEach(t),F1=p(gr),jh=s(gr,"LI",{});var VM=r(jh);ul=s(VM,"A",{href:!0,rel:!0});var KM=r(ul);x1=i(KM,"Parallelization"),KM.forEach(t),VM.forEach(t),gr.forEach(t),M1=p(kt),At=s(kt,"DIV",{class:!0});var _r=r(At);b(gl.$$.fragment,_r),z1=p(_r),cn=s(_r,"P",{});var cc=r(cn);q1=i(cc,"The "),Ph=s(cc,"CODE",{});var JM=r(Ph);C1=i(JM,"FlaxElectraPreTrainedModel"),JM.forEach(t),j1=i(cc," forward method, overrides the "),Ah=s(cc,"CODE",{});var GM=r(Ah);P1=i(GM,"__call__"),GM.forEach(t),A1=i(cc," special method."),cc.forEach(t),O1=p(_r),b(Qs.$$.fragment,_r),L1=p(_r),b(Bs.$$.fragment,_r),_r.forEach(t),kt.forEach(t),Df=p(o),pn=s(o,"H2",{class:!0});var ng=r(pn);Vs=s(ng,"A",{id:!0,class:!0,href:!0});var XM=r(Vs);Oh=s(XM,"SPAN",{});var YM=r(Oh);b(_l.$$.fragment,YM),YM.forEach(t),XM.forEach(t),N1=p(ng),Lh=s(ng,"SPAN",{});var ZM=r(Lh);I1=i(ZM,"FlaxElectraForTokenClassification"),ZM.forEach(t),ng.forEach(t),Wf=p(o),Ae=s(o,"DIV",{class:!0});var Ye=r(Ae);b(kl.$$.fragment,Ye),S1=p(Ye),Nh=s(Ye,"P",{});var ez=r(Nh);D1=i(ez,"Electra model with a token classification head on top."),ez.forEach(t),W1=p(Ye),Ih=s(Ye,"P",{});var tz=r(Ih);U1=i(tz,"Both the discriminator and generator may be loaded into this model."),tz.forEach(t),R1=p(Ye),Tl=s(Ye,"P",{});var sg=r(Tl);H1=i(sg,"This model inherits from "),Wd=s(sg,"A",{href:!0});var oz=r(Wd);Q1=i(oz,"FlaxPreTrainedModel"),oz.forEach(t),B1=i(sg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sg.forEach(t),V1=p(Ye),vl=s(Ye,"P",{});var rg=r(vl);K1=i(rg,`This model is also a Flax Linen
`),yl=s(rg,"A",{href:!0,rel:!0});var nz=r(yl);J1=i(nz,"flax.nn.Module"),nz.forEach(t),G1=i(rg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rg.forEach(t),X1=p(Ye),Sh=s(Ye,"P",{});var sz=r(Sh);Y1=i(sz,"Finally, this model supports inherent JAX features such as:"),sz.forEach(t),Z1=p(Ye),Gt=s(Ye,"UL",{});var kr=r(Gt);Dh=s(kr,"LI",{});var rz=r(Dh);bl=s(rz,"A",{href:!0,rel:!0});var az=r(bl);eF=i(az,"Just-In-Time (JIT) compilation"),az.forEach(t),rz.forEach(t),tF=p(kr),Wh=s(kr,"LI",{});var iz=r(Wh);El=s(iz,"A",{href:!0,rel:!0});var lz=r(El);oF=i(lz,"Automatic Differentiation"),lz.forEach(t),iz.forEach(t),nF=p(kr),Uh=s(kr,"LI",{});var dz=r(Uh);wl=s(dz,"A",{href:!0,rel:!0});var cz=r(wl);sF=i(cz,"Vectorization"),cz.forEach(t),dz.forEach(t),rF=p(kr),Rh=s(kr,"LI",{});var pz=r(Rh);$l=s(pz,"A",{href:!0,rel:!0});var hz=r($l);aF=i(hz,"Parallelization"),hz.forEach(t),pz.forEach(t),kr.forEach(t),iF=p(Ye),Ot=s(Ye,"DIV",{class:!0});var Tr=r(Ot);b(Fl.$$.fragment,Tr),lF=p(Tr),hn=s(Tr,"P",{});var pc=r(hn);dF=i(pc,"The "),Hh=s(pc,"CODE",{});var mz=r(Hh);cF=i(mz,"FlaxElectraPreTrainedModel"),mz.forEach(t),pF=i(pc," forward method, overrides the "),Qh=s(pc,"CODE",{});var fz=r(Qh);hF=i(fz,"__call__"),fz.forEach(t),mF=i(pc," special method."),pc.forEach(t),fF=p(Tr),b(Ks.$$.fragment,Tr),uF=p(Tr),b(Js.$$.fragment,Tr),Tr.forEach(t),Ye.forEach(t),Uf=p(o),mn=s(o,"H2",{class:!0});var ag=r(mn);Gs=s(ag,"A",{id:!0,class:!0,href:!0});var uz=r(Gs);Bh=s(uz,"SPAN",{});var gz=r(Bh);b(xl.$$.fragment,gz),gz.forEach(t),uz.forEach(t),gF=p(ag),Vh=s(ag,"SPAN",{});var _z=r(Vh);_F=i(_z,"FlaxElectraForQuestionAnswering"),_z.forEach(t),ag.forEach(t),Rf=p(o),Ue=s(o,"DIV",{class:!0});var Tt=r(Ue);b(Ml.$$.fragment,Tt),kF=p(Tt),fn=s(Tt,"P",{});var hc=r(fn);TF=i(hc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=s(hc,"CODE",{});var kz=r(Kh);vF=i(kz,"span start logits"),kz.forEach(t),yF=i(hc," and "),Jh=s(hc,"CODE",{});var Tz=r(Jh);bF=i(Tz,"span end logits"),Tz.forEach(t),EF=i(hc,")."),hc.forEach(t),wF=p(Tt),zl=s(Tt,"P",{});var ig=r(zl);$F=i(ig,"This model inherits from "),Ud=s(ig,"A",{href:!0});var vz=r(Ud);FF=i(vz,"FlaxPreTrainedModel"),vz.forEach(t),xF=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),MF=p(Tt),ql=s(Tt,"P",{});var lg=r(ql);zF=i(lg,`This model is also a Flax Linen
`),Cl=s(lg,"A",{href:!0,rel:!0});var yz=r(Cl);qF=i(yz,"flax.nn.Module"),yz.forEach(t),CF=i(lg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lg.forEach(t),jF=p(Tt),Gh=s(Tt,"P",{});var bz=r(Gh);PF=i(bz,"Finally, this model supports inherent JAX features such as:"),bz.forEach(t),AF=p(Tt),Xt=s(Tt,"UL",{});var vr=r(Xt);Xh=s(vr,"LI",{});var Ez=r(Xh);jl=s(Ez,"A",{href:!0,rel:!0});var wz=r(jl);OF=i(wz,"Just-In-Time (JIT) compilation"),wz.forEach(t),Ez.forEach(t),LF=p(vr),Yh=s(vr,"LI",{});var $z=r(Yh);Pl=s($z,"A",{href:!0,rel:!0});var Fz=r(Pl);NF=i(Fz,"Automatic Differentiation"),Fz.forEach(t),$z.forEach(t),IF=p(vr),Zh=s(vr,"LI",{});var xz=r(Zh);Al=s(xz,"A",{href:!0,rel:!0});var Mz=r(Al);SF=i(Mz,"Vectorization"),Mz.forEach(t),xz.forEach(t),DF=p(vr),em=s(vr,"LI",{});var zz=r(em);Ol=s(zz,"A",{href:!0,rel:!0});var qz=r(Ol);WF=i(qz,"Parallelization"),qz.forEach(t),zz.forEach(t),vr.forEach(t),UF=p(Tt),Lt=s(Tt,"DIV",{class:!0});var yr=r(Lt);b(Ll.$$.fragment,yr),RF=p(yr),un=s(yr,"P",{});var mc=r(un);HF=i(mc,"The "),tm=s(mc,"CODE",{});var Cz=r(tm);QF=i(Cz,"FlaxElectraPreTrainedModel"),Cz.forEach(t),BF=i(mc," forward method, overrides the "),om=s(mc,"CODE",{});var jz=r(om);VF=i(jz,"__call__"),jz.forEach(t),KF=i(mc," special method."),mc.forEach(t),JF=p(yr),b(Xs.$$.fragment,yr),GF=p(yr),b(Ys.$$.fragment,yr),yr.forEach(t),Tt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(V4)),u(m,"id","electra"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#electra"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(q,"class","relative group"),u(ne,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),u(ne,"rel","nofollow"),u(se,"href","https://github.com/google-research/electra"),u(se,"rel","nofollow"),u(v,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(Fe,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForPreTraining"),u(A,"href","https://huggingface.co/lysandre"),u(A,"rel","nofollow"),u(we,"href","https://github.com/google-research/electra"),u(we,"rel","nofollow"),u(be,"id","transformers.ElectraConfig"),u(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(be,"href","#transformers.ElectraConfig"),u(Z,"class","relative group"),u(Kl,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraModel"),u(Jl,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraModel"),u(wr,"href","https://huggingface.co/google/electra-small-discriminator"),u(wr,"rel","nofollow"),u(Gl,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),u(Xl,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"id","transformers.ElectraTokenizer"),u(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tn,"href","#transformers.ElectraTokenizer"),u(_o,"class","relative group"),u(Yl,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizer"),u(Zl,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),u(ed,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.ElectraTokenizerFast"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.ElectraTokenizerFast"),u(ko,"class","relative group"),u(td,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraTokenizerFast"),u(od,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizerFast"),u(nd,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizerFast"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(To,"class","relative group"),u(sd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForPreTraining"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.ElectraModel"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.ElectraModel"),u(bo,"class","relative group"),u(ad,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wr,"rel","nofollow"),u(id,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraModel"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.ElectraForPreTraining"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.ElectraForPreTraining"),u(wo,"class","relative group"),u(ld,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vr,"rel","nofollow"),u(dd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.ElectraForCausalLM"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.ElectraForCausalLM"),u(Fo,"class","relative group"),u(cd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ea,"rel","nofollow"),u(pd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForCausalLM"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.ElectraForMaskedLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.ElectraForMaskedLM"),u(Mo,"class","relative group"),u(hd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(aa,"rel","nofollow"),u(md,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.ElectraForSequenceClassification"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.ElectraForSequenceClassification"),u(qo,"class","relative group"),u(fd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ha,"rel","nofollow"),u(ud,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForSequenceClassification"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.ElectraForMultipleChoice"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.ElectraForMultipleChoice"),u(jo,"class","relative group"),u(gd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ka,"rel","nofollow"),u(_d,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForMultipleChoice"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.ElectraForTokenClassification"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.ElectraForTokenClassification"),u(Ao,"class","relative group"),u(kd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wa,"rel","nofollow"),u(Td,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForTokenClassification"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.ElectraForQuestionAnswering"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.ElectraForQuestionAnswering"),u(Lo,"class","relative group"),u(vd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qa,"rel","nofollow"),u(yd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.TFElectraModel"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.TFElectraModel"),u(So,"class","relative group"),u(bd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(La,"rel","nofollow"),u(Ed,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraModel"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFElectraForPreTraining"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFElectraForPreTraining"),u(Wo,"class","relative group"),u(wd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ua,"rel","nofollow"),u($d,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFElectraForMaskedLM"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFElectraForMaskedLM"),u(Ro,"class","relative group"),u(Fd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ka,"rel","nofollow"),u(xd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForMaskedLM"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFElectraForSequenceClassification"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFElectraForSequenceClassification"),u(Qo,"class","relative group"),u(Md,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(zd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFElectraForMultipleChoice"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFElectraForMultipleChoice"),u(Vo,"class","relative group"),u(qd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(Cd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.TFElectraForTokenClassification"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.TFElectraForTokenClassification"),u(Jo,"class","relative group"),u(jd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hi,"rel","nofollow"),u(Pd,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForTokenClassification"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xs,"id","transformers.TFElectraForQuestionAnswering"),u(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xs,"href","#transformers.TFElectraForQuestionAnswering"),u(Xo,"class","relative group"),u(Ad,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ki,"rel","nofollow"),u(Od,"href","/docs/transformers/pr_highlight/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.FlaxElectraModel"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.FlaxElectraModel"),u(en,"class","relative group"),u(Ld,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($i,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Mi,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.FlaxElectraForPreTraining"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.FlaxElectraForPreTraining"),u(on,"class","relative group"),u(Nd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ai,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Oi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ni,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ii,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxElectraForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxElectraForMaskedLM"),u(sn,"class","relative group"),u(Id,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Qi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Vi,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ki,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ji,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxElectraForSequenceClassification"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxElectraForSequenceClassification"),u(an,"class","relative group"),u(Sd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(tl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(rl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxElectraForMultipleChoice"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxElectraForMultipleChoice"),u(dn,"class","relative group"),u(Dd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ul,"rel","nofollow"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.FlaxElectraForTokenClassification"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.FlaxElectraForTokenClassification"),u(pn,"class","relative group"),u(Wd,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(yl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(yl,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(El,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.FlaxElectraForQuestionAnswering"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.FlaxElectraForQuestionAnswering"),u(mn,"class","relative group"),u(Ud,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Cl,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(jl,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Pl,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Al,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ol,"rel","nofollow"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),k(o,g,T),k(o,h,T),e(h,m),e(m,_),E(l,_,null),e(h,f),e(h,M),e(M,fe),k(o,J,T),k(o,q,T),e(q,ee),e(ee,S),E(oe,S,null),e(q,ue),e(q,D),e(D,ge),k(o,pe,T),k(o,K,T),e(K,O),e(K,ne),e(ne,X),e(K,C),k(o,P,T),k(o,re,T),e(re,R),k(o,he,T),k(o,ae,T),e(ae,W),e(W,_e),k(o,me,T),k(o,j,T),e(j,ke),k(o,U,T),k(o,te,T),e(te,ie),e(ie,H),e(te,Te),e(te,G),e(G,L),e(G,se),e(se,Q),e(G,ve),e(G,v),e(v,z),e(G,Y),e(G,Fe),e(Fe,ze),e(G,N),k(o,xe,T),k(o,ye,T),e(ye,qe),e(ye,A),e(A,B),e(ye,Ce),e(ye,we),e(we,V),e(ye,je),k(o,Me,T),k(o,Z,T),e(Z,be),e(be,fc),E(br,fc,null),e(Z,dg),e(Z,uc),e(uc,cg),k(o,Qm,T),k(o,vt,T),E(Er,vt,null),e(vt,pg),e(vt,Ht),e(Ht,hg),e(Ht,Kl),e(Kl,mg),e(Ht,fg),e(Ht,Jl),e(Jl,ug),e(Ht,gg),e(Ht,wr),e(wr,_g),e(Ht,kg),e(vt,Tg),e(vt,go),e(go,vg),e(go,Gl),e(Gl,yg),e(go,bg),e(go,Xl),e(Xl,Eg),e(go,wg),e(vt,$g),E(kn,vt,null),k(o,Bm,T),k(o,_o,T),e(_o,Tn),e(Tn,gc),E($r,gc,null),e(_o,Fg),e(_o,_c),e(_c,xg),k(o,Vm,T),k(o,yt,T),E(Fr,yt,null),e(yt,Mg),e(yt,kc),e(kc,zg),e(yt,qg),e(yt,vn),e(vn,Yl),e(Yl,Cg),e(vn,jg),e(vn,Zl),e(Zl,Pg),e(vn,Ag),e(yt,Og),e(yt,xr),e(xr,Lg),e(xr,ed),e(ed,Ng),e(xr,Ig),k(o,Km,T),k(o,ko,T),e(ko,yn),e(yn,Tc),E(Mr,Tc,null),e(ko,Sg),e(ko,vc),e(vc,Dg),k(o,Jm,T),k(o,bt,T),E(zr,bt,null),e(bt,Wg),e(bt,qr),e(qr,Ug),e(qr,yc),e(yc,Rg),e(qr,Hg),e(bt,Qg),e(bt,bn),e(bn,td),e(td,Bg),e(bn,Vg),e(bn,od),e(od,Kg),e(bn,Jg),e(bt,Gg),e(bt,Cr),e(Cr,Xg),e(Cr,nd),e(nd,Yg),e(Cr,Zg),k(o,Gm,T),k(o,To,T),e(To,En),e(En,bc),E(jr,bc,null),e(To,e_),e(To,Ec),e(Ec,t_),k(o,Xm,T),k(o,vo,T),E(Pr,vo,null),e(vo,o_),e(vo,Ar),e(Ar,n_),e(Ar,sd),e(sd,s_),e(Ar,r_),k(o,Ym,T),k(o,yo,T),E(Or,yo,null),e(yo,a_),e(yo,Lr),e(Lr,i_),e(Lr,rd),e(rd,l_),e(Lr,d_),k(o,Zm,T),k(o,bo,T),e(bo,wn),e(wn,wc),E(Nr,wc,null),e(bo,c_),e(bo,$c),e($c,p_),k(o,ef,T),k(o,Ze,T),E(Ir,Ze,null),e(Ze,h_),e(Ze,Fc),e(Fc,m_),e(Ze,f_),e(Ze,Sr),e(Sr,u_),e(Sr,ad),e(ad,g_),e(Sr,__),e(Ze,k_),e(Ze,Dr),e(Dr,T_),e(Dr,Wr),e(Wr,v_),e(Dr,y_),e(Ze,b_),e(Ze,Et),E(Ur,Et,null),e(Et,E_),e(Et,Eo),e(Eo,w_),e(Eo,id),e(id,$_),e(Eo,F_),e(Eo,xc),e(xc,x_),e(Eo,M_),e(Et,z_),E($n,Et,null),e(Et,q_),E(Fn,Et,null),k(o,tf,T),k(o,wo,T),e(wo,xn),e(xn,Mc),E(Rr,Mc,null),e(wo,C_),e(wo,zc),e(zc,j_),k(o,of,T),k(o,He,T),E(Hr,He,null),e(He,P_),e(He,qc),e(qc,A_),e(He,O_),e(He,Cc),e(Cc,L_),e(He,N_),e(He,Qr),e(Qr,I_),e(Qr,ld),e(ld,S_),e(Qr,D_),e(He,W_),e(He,Br),e(Br,U_),e(Br,Vr),e(Vr,R_),e(Br,H_),e(He,Q_),e(He,wt),E(Kr,wt,null),e(wt,B_),e(wt,$o),e($o,V_),e($o,dd),e(dd,K_),e($o,J_),e($o,jc),e(jc,G_),e($o,X_),e(wt,Y_),E(Mn,wt,null),e(wt,Z_),E(zn,wt,null),k(o,nf,T),k(o,Fo,T),e(Fo,qn),e(qn,Pc),E(Jr,Pc,null),e(Fo,ek),e(Fo,Ac),e(Ac,tk),k(o,sf,T),k(o,et,T),E(Gr,et,null),e(et,ok),e(et,Xr),e(Xr,nk),e(Xr,Oc),e(Oc,sk),e(Xr,rk),e(et,ak),e(et,Yr),e(Yr,ik),e(Yr,cd),e(cd,lk),e(Yr,dk),e(et,ck),e(et,Zr),e(Zr,pk),e(Zr,ea),e(ea,hk),e(Zr,mk),e(et,fk),e(et,$t),E(ta,$t,null),e($t,uk),e($t,xo),e(xo,gk),e(xo,pd),e(pd,_k),e(xo,kk),e(xo,Lc),e(Lc,Tk),e(xo,vk),e($t,yk),E(Cn,$t,null),e($t,bk),E(jn,$t,null),k(o,rf,T),k(o,Mo,T),e(Mo,Pn),e(Pn,Nc),E(oa,Nc,null),e(Mo,Ek),e(Mo,Ic),e(Ic,wk),k(o,af,T),k(o,Qe,T),E(na,Qe,null),e(Qe,$k),e(Qe,Sc),e(Sc,Fk),e(Qe,xk),e(Qe,Dc),e(Dc,Mk),e(Qe,zk),e(Qe,sa),e(sa,qk),e(sa,hd),e(hd,Ck),e(sa,jk),e(Qe,Pk),e(Qe,ra),e(ra,Ak),e(ra,aa),e(aa,Ok),e(ra,Lk),e(Qe,Nk),e(Qe,st),E(ia,st,null),e(st,Ik),e(st,zo),e(zo,Sk),e(zo,md),e(md,Dk),e(zo,Wk),e(zo,Wc),e(Wc,Uk),e(zo,Rk),e(st,Hk),E(An,st,null),e(st,Qk),E(On,st,null),e(st,Bk),E(Ln,st,null),k(o,lf,T),k(o,qo,T),e(qo,Nn),e(Nn,Uc),E(la,Uc,null),e(qo,Vk),e(qo,Rc),e(Rc,Kk),k(o,df,T),k(o,tt,T),E(da,tt,null),e(tt,Jk),e(tt,Hc),e(Hc,Gk),e(tt,Xk),e(tt,ca),e(ca,Yk),e(ca,fd),e(fd,Zk),e(ca,eT),e(tt,tT),e(tt,pa),e(pa,oT),e(pa,ha),e(ha,nT),e(pa,sT),e(tt,rT),e(tt,Re),E(ma,Re,null),e(Re,aT),e(Re,Co),e(Co,iT),e(Co,ud),e(ud,lT),e(Co,dT),e(Co,Qc),e(Qc,cT),e(Co,pT),e(Re,hT),E(In,Re,null),e(Re,mT),E(Sn,Re,null),e(Re,fT),E(Dn,Re,null),e(Re,uT),E(Wn,Re,null),e(Re,gT),E(Un,Re,null),k(o,cf,T),k(o,jo,T),e(jo,Rn),e(Rn,Bc),E(fa,Bc,null),e(jo,_T),e(jo,Vc),e(Vc,kT),k(o,pf,T),k(o,ot,T),E(ua,ot,null),e(ot,TT),e(ot,Kc),e(Kc,vT),e(ot,yT),e(ot,ga),e(ga,bT),e(ga,gd),e(gd,ET),e(ga,wT),e(ot,$T),e(ot,_a),e(_a,FT),e(_a,ka),e(ka,xT),e(_a,MT),e(ot,zT),e(ot,Ft),E(Ta,Ft,null),e(Ft,qT),e(Ft,Po),e(Po,CT),e(Po,_d),e(_d,jT),e(Po,PT),e(Po,Jc),e(Jc,AT),e(Po,OT),e(Ft,LT),E(Hn,Ft,null),e(Ft,NT),E(Qn,Ft,null),k(o,hf,T),k(o,Ao,T),e(Ao,Bn),e(Bn,Gc),E(va,Gc,null),e(Ao,IT),e(Ao,Xc),e(Xc,ST),k(o,mf,T),k(o,Be,T),E(ya,Be,null),e(Be,DT),e(Be,Yc),e(Yc,WT),e(Be,UT),e(Be,Zc),e(Zc,RT),e(Be,HT),e(Be,ba),e(ba,QT),e(ba,kd),e(kd,BT),e(ba,VT),e(Be,KT),e(Be,Ea),e(Ea,JT),e(Ea,wa),e(wa,GT),e(Ea,XT),e(Be,YT),e(Be,rt),E($a,rt,null),e(rt,ZT),e(rt,Oo),e(Oo,ev),e(Oo,Td),e(Td,tv),e(Oo,ov),e(Oo,ep),e(ep,nv),e(Oo,sv),e(rt,rv),E(Vn,rt,null),e(rt,av),E(Kn,rt,null),e(rt,iv),E(Jn,rt,null),k(o,ff,T),k(o,Lo,T),e(Lo,Gn),e(Gn,tp),E(Fa,tp,null),e(Lo,lv),e(Lo,op),e(op,dv),k(o,uf,T),k(o,nt,T),E(xa,nt,null),e(nt,cv),e(nt,No),e(No,pv),e(No,np),e(np,hv),e(No,mv),e(No,sp),e(sp,fv),e(No,uv),e(nt,gv),e(nt,Ma),e(Ma,_v),e(Ma,vd),e(vd,kv),e(Ma,Tv),e(nt,vv),e(nt,za),e(za,yv),e(za,qa),e(qa,bv),e(za,Ev),e(nt,wv),e(nt,at),E(Ca,at,null),e(at,$v),e(at,Io),e(Io,Fv),e(Io,yd),e(yd,xv),e(Io,Mv),e(Io,rp),e(rp,zv),e(Io,qv),e(at,Cv),E(Xn,at,null),e(at,jv),E(Yn,at,null),e(at,Pv),E(Zn,at,null),k(o,gf,T),k(o,So,T),e(So,es),e(es,ap),E(ja,ap,null),e(So,Av),e(So,ip),e(ip,Ov),k(o,_f,T),k(o,Ve,T),E(Pa,Ve,null),e(Ve,Lv),e(Ve,lp),e(lp,Nv),e(Ve,Iv),e(Ve,Aa),e(Aa,Sv),e(Aa,bd),e(bd,Dv),e(Aa,Wv),e(Ve,Uv),e(Ve,Oa),e(Oa,Rv),e(Oa,La),e(La,Hv),e(Oa,Qv),e(Ve,Bv),E(ts,Ve,null),e(Ve,Vv),e(Ve,xt),E(Na,xt,null),e(xt,Kv),e(xt,Do),e(Do,Jv),e(Do,Ed),e(Ed,Gv),e(Do,Xv),e(Do,dp),e(dp,Yv),e(Do,Zv),e(xt,ey),E(os,xt,null),e(xt,ty),E(ns,xt,null),k(o,kf,T),k(o,Wo,T),e(Wo,ss),e(ss,cp),E(Ia,cp,null),e(Wo,oy),e(Wo,pp),e(pp,ny),k(o,Tf,T),k(o,Oe,T),E(Sa,Oe,null),e(Oe,sy),e(Oe,hp),e(hp,ry),e(Oe,ay),e(Oe,mp),e(mp,iy),e(Oe,ly),e(Oe,Da),e(Da,dy),e(Da,wd),e(wd,cy),e(Da,py),e(Oe,hy),e(Oe,Wa),e(Wa,my),e(Wa,Ua),e(Ua,fy),e(Wa,uy),e(Oe,gy),E(rs,Oe,null),e(Oe,_y),e(Oe,Mt),E(Ra,Mt,null),e(Mt,ky),e(Mt,Uo),e(Uo,Ty),e(Uo,$d),e($d,vy),e(Uo,yy),e(Uo,fp),e(fp,by),e(Uo,Ey),e(Mt,wy),E(as,Mt,null),e(Mt,$y),E(is,Mt,null),k(o,vf,T),k(o,Ro,T),e(Ro,ls),e(ls,up),E(Ha,up,null),e(Ro,Fy),e(Ro,gp),e(gp,xy),k(o,yf,T),k(o,Le,T),E(Qa,Le,null),e(Le,My),e(Le,_p),e(_p,zy),e(Le,qy),e(Le,kp),e(kp,Cy),e(Le,jy),e(Le,Ba),e(Ba,Py),e(Ba,Fd),e(Fd,Ay),e(Ba,Oy),e(Le,Ly),e(Le,Va),e(Va,Ny),e(Va,Ka),e(Ka,Iy),e(Va,Sy),e(Le,Dy),E(ds,Le,null),e(Le,Wy),e(Le,it),E(Ja,it,null),e(it,Uy),e(it,Ho),e(Ho,Ry),e(Ho,xd),e(xd,Hy),e(Ho,Qy),e(Ho,Tp),e(Tp,By),e(Ho,Vy),e(it,Ky),E(cs,it,null),e(it,Jy),E(ps,it,null),e(it,Gy),E(hs,it,null),k(o,bf,T),k(o,Qo,T),e(Qo,ms),e(ms,vp),E(Ga,vp,null),e(Qo,Xy),e(Qo,yp),e(yp,Yy),k(o,Ef,T),k(o,Ke,T),E(Xa,Ke,null),e(Ke,Zy),e(Ke,bp),e(bp,eb),e(Ke,tb),e(Ke,Ya),e(Ya,ob),e(Ya,Md),e(Md,nb),e(Ya,sb),e(Ke,rb),e(Ke,Za),e(Za,ab),e(Za,ei),e(ei,ib),e(Za,lb),e(Ke,db),E(fs,Ke,null),e(Ke,cb),e(Ke,lt),E(ti,lt,null),e(lt,pb),e(lt,Bo),e(Bo,hb),e(Bo,zd),e(zd,mb),e(Bo,fb),e(Bo,Ep),e(Ep,ub),e(Bo,gb),e(lt,_b),E(us,lt,null),e(lt,kb),E(gs,lt,null),e(lt,Tb),E(_s,lt,null),k(o,wf,T),k(o,Vo,T),e(Vo,ks),e(ks,wp),E(oi,wp,null),e(Vo,vb),e(Vo,$p),e($p,yb),k(o,$f,T),k(o,Je,T),E(ni,Je,null),e(Je,bb),e(Je,Fp),e(Fp,Eb),e(Je,wb),e(Je,si),e(si,$b),e(si,qd),e(qd,Fb),e(si,xb),e(Je,Mb),e(Je,ri),e(ri,zb),e(ri,ai),e(ai,qb),e(ri,Cb),e(Je,jb),E(Ts,Je,null),e(Je,Pb),e(Je,zt),E(ii,zt,null),e(zt,Ab),e(zt,Ko),e(Ko,Ob),e(Ko,Cd),e(Cd,Lb),e(Ko,Nb),e(Ko,xp),e(xp,Ib),e(Ko,Sb),e(zt,Db),E(vs,zt,null),e(zt,Wb),E(ys,zt,null),k(o,Ff,T),k(o,Jo,T),e(Jo,bs),e(bs,Mp),E(li,Mp,null),e(Jo,Ub),e(Jo,zp),e(zp,Rb),k(o,xf,T),k(o,Ne,T),E(di,Ne,null),e(Ne,Hb),e(Ne,qp),e(qp,Qb),e(Ne,Bb),e(Ne,Cp),e(Cp,Vb),e(Ne,Kb),e(Ne,ci),e(ci,Jb),e(ci,jd),e(jd,Gb),e(ci,Xb),e(Ne,Yb),e(Ne,pi),e(pi,Zb),e(pi,hi),e(hi,eE),e(pi,tE),e(Ne,oE),E(Es,Ne,null),e(Ne,nE),e(Ne,dt),E(mi,dt,null),e(dt,sE),e(dt,Go),e(Go,rE),e(Go,Pd),e(Pd,aE),e(Go,iE),e(Go,jp),e(jp,lE),e(Go,dE),e(dt,cE),E(ws,dt,null),e(dt,pE),E($s,dt,null),e(dt,hE),E(Fs,dt,null),k(o,Mf,T),k(o,Xo,T),e(Xo,xs),e(xs,Pp),E(fi,Pp,null),e(Xo,mE),e(Xo,Ap),e(Ap,fE),k(o,zf,T),k(o,Ge,T),E(ui,Ge,null),e(Ge,uE),e(Ge,Yo),e(Yo,gE),e(Yo,Op),e(Op,_E),e(Yo,kE),e(Yo,Lp),e(Lp,TE),e(Yo,vE),e(Ge,yE),e(Ge,gi),e(gi,bE),e(gi,Ad),e(Ad,EE),e(gi,wE),e(Ge,$E),e(Ge,_i),e(_i,FE),e(_i,ki),e(ki,xE),e(_i,ME),e(Ge,zE),E(Ms,Ge,null),e(Ge,qE),e(Ge,ct),E(Ti,ct,null),e(ct,CE),e(ct,Zo),e(Zo,jE),e(Zo,Od),e(Od,PE),e(Zo,AE),e(Zo,Np),e(Np,OE),e(Zo,LE),e(ct,NE),E(zs,ct,null),e(ct,IE),E(qs,ct,null),e(ct,SE),E(Cs,ct,null),k(o,qf,T),k(o,en,T),e(en,js),e(js,Ip),E(vi,Ip,null),e(en,DE),e(en,Sp),e(Sp,WE),k(o,Cf,T),k(o,Ie,T),E(yi,Ie,null),e(Ie,UE),e(Ie,Dp),e(Dp,RE),e(Ie,HE),e(Ie,bi),e(bi,QE),e(bi,Ld),e(Ld,BE),e(bi,VE),e(Ie,KE),e(Ie,Ei),e(Ei,JE),e(Ei,wi),e(wi,GE),e(Ei,XE),e(Ie,YE),e(Ie,Wp),e(Wp,ZE),e(Ie,ew),e(Ie,Qt),e(Qt,Up),e(Up,$i),e($i,tw),e(Qt,ow),e(Qt,Rp),e(Rp,Fi),e(Fi,nw),e(Qt,sw),e(Qt,Hp),e(Hp,xi),e(xi,rw),e(Qt,aw),e(Qt,Qp),e(Qp,Mi),e(Mi,iw),e(Ie,lw),e(Ie,qt),E(zi,qt,null),e(qt,dw),e(qt,tn),e(tn,cw),e(tn,Bp),e(Bp,pw),e(tn,hw),e(tn,Vp),e(Vp,mw),e(tn,fw),e(qt,uw),E(Ps,qt,null),e(qt,gw),E(As,qt,null),k(o,jf,T),k(o,on,T),e(on,Os),e(Os,Kp),E(qi,Kp,null),e(on,_w),e(on,Jp),e(Jp,kw),k(o,Pf,T),k(o,Pe,T),E(Ci,Pe,null),e(Pe,Tw),e(Pe,Gp),e(Gp,vw),e(Pe,yw),e(Pe,Xp),e(Xp,bw),e(Pe,Ew),e(Pe,ji),e(ji,ww),e(ji,Nd),e(Nd,$w),e(ji,Fw),e(Pe,xw),e(Pe,Pi),e(Pi,Mw),e(Pi,Ai),e(Ai,zw),e(Pi,qw),e(Pe,Cw),e(Pe,Yp),e(Yp,jw),e(Pe,Pw),e(Pe,Bt),e(Bt,Zp),e(Zp,Oi),e(Oi,Aw),e(Bt,Ow),e(Bt,eh),e(eh,Li),e(Li,Lw),e(Bt,Nw),e(Bt,th),e(th,Ni),e(Ni,Iw),e(Bt,Sw),e(Bt,oh),e(oh,Ii),e(Ii,Dw),e(Pe,Ww),e(Pe,Ct),E(Si,Ct,null),e(Ct,Uw),e(Ct,nn),e(nn,Rw),e(nn,nh),e(nh,Hw),e(nn,Qw),e(nn,sh),e(sh,Bw),e(nn,Vw),e(Ct,Kw),E(Ls,Ct,null),e(Ct,Jw),E(Ns,Ct,null),k(o,Af,T),k(o,sn,T),e(sn,Is),e(Is,rh),E(Di,rh,null),e(sn,Gw),e(sn,ah),e(ah,Xw),k(o,Of,T),k(o,Se,T),E(Wi,Se,null),e(Se,Yw),e(Se,Ui),e(Ui,Zw),e(Ui,ih),e(ih,e$),e(Ui,t$),e(Se,o$),e(Se,Ri),e(Ri,n$),e(Ri,Id),e(Id,s$),e(Ri,r$),e(Se,a$),e(Se,Hi),e(Hi,i$),e(Hi,Qi),e(Qi,l$),e(Hi,d$),e(Se,c$),e(Se,lh),e(lh,p$),e(Se,h$),e(Se,Vt),e(Vt,dh),e(dh,Bi),e(Bi,m$),e(Vt,f$),e(Vt,ch),e(ch,Vi),e(Vi,u$),e(Vt,g$),e(Vt,ph),e(ph,Ki),e(Ki,_$),e(Vt,k$),e(Vt,hh),e(hh,Ji),e(Ji,T$),e(Se,v$),e(Se,jt),E(Gi,jt,null),e(jt,y$),e(jt,rn),e(rn,b$),e(rn,mh),e(mh,E$),e(rn,w$),e(rn,fh),e(fh,$$),e(rn,F$),e(jt,x$),E(Ss,jt,null),e(jt,M$),E(Ds,jt,null),k(o,Lf,T),k(o,an,T),e(an,Ws),e(Ws,uh),E(Xi,uh,null),e(an,z$),e(an,gh),e(gh,q$),k(o,Nf,T),k(o,De,T),E(Yi,De,null),e(De,C$),e(De,_h),e(_h,j$),e(De,P$),e(De,Zi),e(Zi,A$),e(Zi,Sd),e(Sd,O$),e(Zi,L$),e(De,N$),e(De,el),e(el,I$),e(el,tl),e(tl,S$),e(el,D$),e(De,W$),e(De,kh),e(kh,U$),e(De,R$),e(De,Kt),e(Kt,Th),e(Th,ol),e(ol,H$),e(Kt,Q$),e(Kt,vh),e(vh,nl),e(nl,B$),e(Kt,V$),e(Kt,yh),e(yh,sl),e(sl,K$),e(Kt,J$),e(Kt,bh),e(bh,rl),e(rl,G$),e(De,X$),e(De,Pt),E(al,Pt,null),e(Pt,Y$),e(Pt,ln),e(ln,Z$),e(ln,Eh),e(Eh,e1),e(ln,t1),e(ln,wh),e(wh,o1),e(ln,n1),e(Pt,s1),E(Us,Pt,null),e(Pt,r1),E(Rs,Pt,null),k(o,If,T),k(o,dn,T),e(dn,Hs),e(Hs,$h),E(il,$h,null),e(dn,a1),e(dn,Fh),e(Fh,i1),k(o,Sf,T),k(o,We,T),E(ll,We,null),e(We,l1),e(We,xh),e(xh,d1),e(We,c1),e(We,dl),e(dl,p1),e(dl,Dd),e(Dd,h1),e(dl,m1),e(We,f1),e(We,cl),e(cl,u1),e(cl,pl),e(pl,g1),e(cl,_1),e(We,k1),e(We,Mh),e(Mh,T1),e(We,v1),e(We,Jt),e(Jt,zh),e(zh,hl),e(hl,y1),e(Jt,b1),e(Jt,qh),e(qh,ml),e(ml,E1),e(Jt,w1),e(Jt,Ch),e(Ch,fl),e(fl,$1),e(Jt,F1),e(Jt,jh),e(jh,ul),e(ul,x1),e(We,M1),e(We,At),E(gl,At,null),e(At,z1),e(At,cn),e(cn,q1),e(cn,Ph),e(Ph,C1),e(cn,j1),e(cn,Ah),e(Ah,P1),e(cn,A1),e(At,O1),E(Qs,At,null),e(At,L1),E(Bs,At,null),k(o,Df,T),k(o,pn,T),e(pn,Vs),e(Vs,Oh),E(_l,Oh,null),e(pn,N1),e(pn,Lh),e(Lh,I1),k(o,Wf,T),k(o,Ae,T),E(kl,Ae,null),e(Ae,S1),e(Ae,Nh),e(Nh,D1),e(Ae,W1),e(Ae,Ih),e(Ih,U1),e(Ae,R1),e(Ae,Tl),e(Tl,H1),e(Tl,Wd),e(Wd,Q1),e(Tl,B1),e(Ae,V1),e(Ae,vl),e(vl,K1),e(vl,yl),e(yl,J1),e(vl,G1),e(Ae,X1),e(Ae,Sh),e(Sh,Y1),e(Ae,Z1),e(Ae,Gt),e(Gt,Dh),e(Dh,bl),e(bl,eF),e(Gt,tF),e(Gt,Wh),e(Wh,El),e(El,oF),e(Gt,nF),e(Gt,Uh),e(Uh,wl),e(wl,sF),e(Gt,rF),e(Gt,Rh),e(Rh,$l),e($l,aF),e(Ae,iF),e(Ae,Ot),E(Fl,Ot,null),e(Ot,lF),e(Ot,hn),e(hn,dF),e(hn,Hh),e(Hh,cF),e(hn,pF),e(hn,Qh),e(Qh,hF),e(hn,mF),e(Ot,fF),E(Ks,Ot,null),e(Ot,uF),E(Js,Ot,null),k(o,Uf,T),k(o,mn,T),e(mn,Gs),e(Gs,Bh),E(xl,Bh,null),e(mn,gF),e(mn,Vh),e(Vh,_F),k(o,Rf,T),k(o,Ue,T),E(Ml,Ue,null),e(Ue,kF),e(Ue,fn),e(fn,TF),e(fn,Kh),e(Kh,vF),e(fn,yF),e(fn,Jh),e(Jh,bF),e(fn,EF),e(Ue,wF),e(Ue,zl),e(zl,$F),e(zl,Ud),e(Ud,FF),e(zl,xF),e(Ue,MF),e(Ue,ql),e(ql,zF),e(ql,Cl),e(Cl,qF),e(ql,CF),e(Ue,jF),e(Ue,Gh),e(Gh,PF),e(Ue,AF),e(Ue,Xt),e(Xt,Xh),e(Xh,jl),e(jl,OF),e(Xt,LF),e(Xt,Yh),e(Yh,Pl),e(Pl,NF),e(Xt,IF),e(Xt,Zh),e(Zh,Al),e(Al,SF),e(Xt,DF),e(Xt,em),e(em,Ol),e(Ol,WF),e(Ue,UF),e(Ue,Lt),E(Ll,Lt,null),e(Lt,RF),e(Lt,un),e(un,HF),e(un,tm),e(tm,QF),e(un,BF),e(un,om),e(om,VF),e(un,KF),e(Lt,JF),E(Xs,Lt,null),e(Lt,GF),E(Ys,Lt,null),Hf=!0},p(o,[T]){const Nl={};T&2&&(Nl.$$scope={dirty:T,ctx:o}),kn.$set(Nl);const nm={};T&2&&(nm.$$scope={dirty:T,ctx:o}),$n.$set(nm);const sm={};T&2&&(sm.$$scope={dirty:T,ctx:o}),Fn.$set(sm);const rm={};T&2&&(rm.$$scope={dirty:T,ctx:o}),Mn.$set(rm);const Il={};T&2&&(Il.$$scope={dirty:T,ctx:o}),zn.$set(Il);const am={};T&2&&(am.$$scope={dirty:T,ctx:o}),Cn.$set(am);const im={};T&2&&(im.$$scope={dirty:T,ctx:o}),jn.$set(im);const lm={};T&2&&(lm.$$scope={dirty:T,ctx:o}),An.$set(lm);const Sl={};T&2&&(Sl.$$scope={dirty:T,ctx:o}),On.$set(Sl);const dm={};T&2&&(dm.$$scope={dirty:T,ctx:o}),Ln.$set(dm);const cm={};T&2&&(cm.$$scope={dirty:T,ctx:o}),In.$set(cm);const pm={};T&2&&(pm.$$scope={dirty:T,ctx:o}),Sn.$set(pm);const hm={};T&2&&(hm.$$scope={dirty:T,ctx:o}),Dn.$set(hm);const mm={};T&2&&(mm.$$scope={dirty:T,ctx:o}),Wn.$set(mm);const Dl={};T&2&&(Dl.$$scope={dirty:T,ctx:o}),Un.$set(Dl);const fm={};T&2&&(fm.$$scope={dirty:T,ctx:o}),Hn.$set(fm);const Yt={};T&2&&(Yt.$$scope={dirty:T,ctx:o}),Qn.$set(Yt);const um={};T&2&&(um.$$scope={dirty:T,ctx:o}),Vn.$set(um);const gm={};T&2&&(gm.$$scope={dirty:T,ctx:o}),Kn.$set(gm);const _m={};T&2&&(_m.$$scope={dirty:T,ctx:o}),Jn.$set(_m);const gn={};T&2&&(gn.$$scope={dirty:T,ctx:o}),Xn.$set(gn);const km={};T&2&&(km.$$scope={dirty:T,ctx:o}),Yn.$set(km);const Tm={};T&2&&(Tm.$$scope={dirty:T,ctx:o}),Zn.$set(Tm);const Wl={};T&2&&(Wl.$$scope={dirty:T,ctx:o}),ts.$set(Wl);const vm={};T&2&&(vm.$$scope={dirty:T,ctx:o}),os.$set(vm);const ym={};T&2&&(ym.$$scope={dirty:T,ctx:o}),ns.$set(ym);const bm={};T&2&&(bm.$$scope={dirty:T,ctx:o}),rs.$set(bm);const Zt={};T&2&&(Zt.$$scope={dirty:T,ctx:o}),as.$set(Zt);const eo={};T&2&&(eo.$$scope={dirty:T,ctx:o}),is.$set(eo);const Em={};T&2&&(Em.$$scope={dirty:T,ctx:o}),ds.$set(Em);const wm={};T&2&&(wm.$$scope={dirty:T,ctx:o}),cs.$set(wm);const $m={};T&2&&($m.$$scope={dirty:T,ctx:o}),ps.$set($m);const _n={};T&2&&(_n.$$scope={dirty:T,ctx:o}),hs.$set(_n);const Fm={};T&2&&(Fm.$$scope={dirty:T,ctx:o}),fs.$set(Fm);const xm={};T&2&&(xm.$$scope={dirty:T,ctx:o}),us.$set(xm);const Ul={};T&2&&(Ul.$$scope={dirty:T,ctx:o}),gs.$set(Ul);const Mm={};T&2&&(Mm.$$scope={dirty:T,ctx:o}),_s.$set(Mm);const zm={};T&2&&(zm.$$scope={dirty:T,ctx:o}),Ts.$set(zm);const qm={};T&2&&(qm.$$scope={dirty:T,ctx:o}),vs.$set(qm);const to={};T&2&&(to.$$scope={dirty:T,ctx:o}),ys.$set(to);const Cm={};T&2&&(Cm.$$scope={dirty:T,ctx:o}),Es.$set(Cm);const Zs={};T&2&&(Zs.$$scope={dirty:T,ctx:o}),ws.$set(Zs);const jm={};T&2&&(jm.$$scope={dirty:T,ctx:o}),$s.$set(jm);const Pm={};T&2&&(Pm.$$scope={dirty:T,ctx:o}),Fs.$set(Pm);const Rl={};T&2&&(Rl.$$scope={dirty:T,ctx:o}),Ms.$set(Rl);const Am={};T&2&&(Am.$$scope={dirty:T,ctx:o}),zs.$set(Am);const Hl={};T&2&&(Hl.$$scope={dirty:T,ctx:o}),qs.$set(Hl);const Om={};T&2&&(Om.$$scope={dirty:T,ctx:o}),Cs.$set(Om);const Lm={};T&2&&(Lm.$$scope={dirty:T,ctx:o}),Ps.$set(Lm);const Nm={};T&2&&(Nm.$$scope={dirty:T,ctx:o}),As.$set(Nm);const oo={};T&2&&(oo.$$scope={dirty:T,ctx:o}),Ls.$set(oo);const Ql={};T&2&&(Ql.$$scope={dirty:T,ctx:o}),Ns.$set(Ql);const Im={};T&2&&(Im.$$scope={dirty:T,ctx:o}),Ss.$set(Im);const er={};T&2&&(er.$$scope={dirty:T,ctx:o}),Ds.$set(er);const Sm={};T&2&&(Sm.$$scope={dirty:T,ctx:o}),Us.$set(Sm);const Dm={};T&2&&(Dm.$$scope={dirty:T,ctx:o}),Rs.$set(Dm);const Bl={};T&2&&(Bl.$$scope={dirty:T,ctx:o}),Qs.$set(Bl);const Wm={};T&2&&(Wm.$$scope={dirty:T,ctx:o}),Bs.$set(Wm);const Vl={};T&2&&(Vl.$$scope={dirty:T,ctx:o}),Ks.$set(Vl);const Um={};T&2&&(Um.$$scope={dirty:T,ctx:o}),Js.$set(Um);const Rm={};T&2&&(Rm.$$scope={dirty:T,ctx:o}),Xs.$set(Rm);const Hm={};T&2&&(Hm.$$scope={dirty:T,ctx:o}),Ys.$set(Hm)},i(o){Hf||(w(l.$$.fragment,o),w(oe.$$.fragment,o),w(br.$$.fragment,o),w(Er.$$.fragment,o),w(kn.$$.fragment,o),w($r.$$.fragment,o),w(Fr.$$.fragment,o),w(Mr.$$.fragment,o),w(zr.$$.fragment,o),w(jr.$$.fragment,o),w(Pr.$$.fragment,o),w(Or.$$.fragment,o),w(Nr.$$.fragment,o),w(Ir.$$.fragment,o),w(Ur.$$.fragment,o),w($n.$$.fragment,o),w(Fn.$$.fragment,o),w(Rr.$$.fragment,o),w(Hr.$$.fragment,o),w(Kr.$$.fragment,o),w(Mn.$$.fragment,o),w(zn.$$.fragment,o),w(Jr.$$.fragment,o),w(Gr.$$.fragment,o),w(ta.$$.fragment,o),w(Cn.$$.fragment,o),w(jn.$$.fragment,o),w(oa.$$.fragment,o),w(na.$$.fragment,o),w(ia.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(Ln.$$.fragment,o),w(la.$$.fragment,o),w(da.$$.fragment,o),w(ma.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(fa.$$.fragment,o),w(ua.$$.fragment,o),w(Ta.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(va.$$.fragment,o),w(ya.$$.fragment,o),w($a.$$.fragment,o),w(Vn.$$.fragment,o),w(Kn.$$.fragment,o),w(Jn.$$.fragment,o),w(Fa.$$.fragment,o),w(xa.$$.fragment,o),w(Ca.$$.fragment,o),w(Xn.$$.fragment,o),w(Yn.$$.fragment,o),w(Zn.$$.fragment,o),w(ja.$$.fragment,o),w(Pa.$$.fragment,o),w(ts.$$.fragment,o),w(Na.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(Ia.$$.fragment,o),w(Sa.$$.fragment,o),w(rs.$$.fragment,o),w(Ra.$$.fragment,o),w(as.$$.fragment,o),w(is.$$.fragment,o),w(Ha.$$.fragment,o),w(Qa.$$.fragment,o),w(ds.$$.fragment,o),w(Ja.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(Ga.$$.fragment,o),w(Xa.$$.fragment,o),w(fs.$$.fragment,o),w(ti.$$.fragment,o),w(us.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(oi.$$.fragment,o),w(ni.$$.fragment,o),w(Ts.$$.fragment,o),w(ii.$$.fragment,o),w(vs.$$.fragment,o),w(ys.$$.fragment,o),w(li.$$.fragment,o),w(di.$$.fragment,o),w(Es.$$.fragment,o),w(mi.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(Fs.$$.fragment,o),w(fi.$$.fragment,o),w(ui.$$.fragment,o),w(Ms.$$.fragment,o),w(Ti.$$.fragment,o),w(zs.$$.fragment,o),w(qs.$$.fragment,o),w(Cs.$$.fragment,o),w(vi.$$.fragment,o),w(yi.$$.fragment,o),w(zi.$$.fragment,o),w(Ps.$$.fragment,o),w(As.$$.fragment,o),w(qi.$$.fragment,o),w(Ci.$$.fragment,o),w(Si.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(Di.$$.fragment,o),w(Wi.$$.fragment,o),w(Gi.$$.fragment,o),w(Ss.$$.fragment,o),w(Ds.$$.fragment,o),w(Xi.$$.fragment,o),w(Yi.$$.fragment,o),w(al.$$.fragment,o),w(Us.$$.fragment,o),w(Rs.$$.fragment,o),w(il.$$.fragment,o),w(ll.$$.fragment,o),w(gl.$$.fragment,o),w(Qs.$$.fragment,o),w(Bs.$$.fragment,o),w(_l.$$.fragment,o),w(kl.$$.fragment,o),w(Fl.$$.fragment,o),w(Ks.$$.fragment,o),w(Js.$$.fragment,o),w(xl.$$.fragment,o),w(Ml.$$.fragment,o),w(Ll.$$.fragment,o),w(Xs.$$.fragment,o),w(Ys.$$.fragment,o),Hf=!0)},o(o){$(l.$$.fragment,o),$(oe.$$.fragment,o),$(br.$$.fragment,o),$(Er.$$.fragment,o),$(kn.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(jr.$$.fragment,o),$(Pr.$$.fragment,o),$(Or.$$.fragment,o),$(Nr.$$.fragment,o),$(Ir.$$.fragment,o),$(Ur.$$.fragment,o),$($n.$$.fragment,o),$(Fn.$$.fragment,o),$(Rr.$$.fragment,o),$(Hr.$$.fragment,o),$(Kr.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(ta.$$.fragment,o),$(Cn.$$.fragment,o),$(jn.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(ia.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Ln.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$(ma.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(fa.$$.fragment,o),$(ua.$$.fragment,o),$(Ta.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(va.$$.fragment,o),$(ya.$$.fragment,o),$($a.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(Ca.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(ja.$$.fragment,o),$(Pa.$$.fragment,o),$(ts.$$.fragment,o),$(Na.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Ia.$$.fragment,o),$(Sa.$$.fragment,o),$(rs.$$.fragment,o),$(Ra.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(Ha.$$.fragment,o),$(Qa.$$.fragment,o),$(ds.$$.fragment,o),$(Ja.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(fs.$$.fragment,o),$(ti.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(Ts.$$.fragment,o),$(ii.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(li.$$.fragment,o),$(di.$$.fragment,o),$(Es.$$.fragment,o),$(mi.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(fi.$$.fragment,o),$(ui.$$.fragment,o),$(Ms.$$.fragment,o),$(Ti.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(vi.$$.fragment,o),$(yi.$$.fragment,o),$(zi.$$.fragment,o),$(Ps.$$.fragment,o),$(As.$$.fragment,o),$(qi.$$.fragment,o),$(Ci.$$.fragment,o),$(Si.$$.fragment,o),$(Ls.$$.fragment,o),$(Ns.$$.fragment,o),$(Di.$$.fragment,o),$(Wi.$$.fragment,o),$(Gi.$$.fragment,o),$(Ss.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(al.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(gl.$$.fragment,o),$(Qs.$$.fragment,o),$(Bs.$$.fragment,o),$(_l.$$.fragment,o),$(kl.$$.fragment,o),$(Fl.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(xl.$$.fragment,o),$(Ml.$$.fragment,o),$(Ll.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),Hf=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(q),F(oe),o&&t(pe),o&&t(K),o&&t(P),o&&t(re),o&&t(he),o&&t(ae),o&&t(me),o&&t(j),o&&t(U),o&&t(te),o&&t(xe),o&&t(ye),o&&t(Me),o&&t(Z),F(br),o&&t(Qm),o&&t(vt),F(Er),F(kn),o&&t(Bm),o&&t(_o),F($r),o&&t(Vm),o&&t(yt),F(Fr),o&&t(Km),o&&t(ko),F(Mr),o&&t(Jm),o&&t(bt),F(zr),o&&t(Gm),o&&t(To),F(jr),o&&t(Xm),o&&t(vo),F(Pr),o&&t(Ym),o&&t(yo),F(Or),o&&t(Zm),o&&t(bo),F(Nr),o&&t(ef),o&&t(Ze),F(Ir),F(Ur),F($n),F(Fn),o&&t(tf),o&&t(wo),F(Rr),o&&t(of),o&&t(He),F(Hr),F(Kr),F(Mn),F(zn),o&&t(nf),o&&t(Fo),F(Jr),o&&t(sf),o&&t(et),F(Gr),F(ta),F(Cn),F(jn),o&&t(rf),o&&t(Mo),F(oa),o&&t(af),o&&t(Qe),F(na),F(ia),F(An),F(On),F(Ln),o&&t(lf),o&&t(qo),F(la),o&&t(df),o&&t(tt),F(da),F(ma),F(In),F(Sn),F(Dn),F(Wn),F(Un),o&&t(cf),o&&t(jo),F(fa),o&&t(pf),o&&t(ot),F(ua),F(Ta),F(Hn),F(Qn),o&&t(hf),o&&t(Ao),F(va),o&&t(mf),o&&t(Be),F(ya),F($a),F(Vn),F(Kn),F(Jn),o&&t(ff),o&&t(Lo),F(Fa),o&&t(uf),o&&t(nt),F(xa),F(Ca),F(Xn),F(Yn),F(Zn),o&&t(gf),o&&t(So),F(ja),o&&t(_f),o&&t(Ve),F(Pa),F(ts),F(Na),F(os),F(ns),o&&t(kf),o&&t(Wo),F(Ia),o&&t(Tf),o&&t(Oe),F(Sa),F(rs),F(Ra),F(as),F(is),o&&t(vf),o&&t(Ro),F(Ha),o&&t(yf),o&&t(Le),F(Qa),F(ds),F(Ja),F(cs),F(ps),F(hs),o&&t(bf),o&&t(Qo),F(Ga),o&&t(Ef),o&&t(Ke),F(Xa),F(fs),F(ti),F(us),F(gs),F(_s),o&&t(wf),o&&t(Vo),F(oi),o&&t($f),o&&t(Je),F(ni),F(Ts),F(ii),F(vs),F(ys),o&&t(Ff),o&&t(Jo),F(li),o&&t(xf),o&&t(Ne),F(di),F(Es),F(mi),F(ws),F($s),F(Fs),o&&t(Mf),o&&t(Xo),F(fi),o&&t(zf),o&&t(Ge),F(ui),F(Ms),F(Ti),F(zs),F(qs),F(Cs),o&&t(qf),o&&t(en),F(vi),o&&t(Cf),o&&t(Ie),F(yi),F(zi),F(Ps),F(As),o&&t(jf),o&&t(on),F(qi),o&&t(Pf),o&&t(Pe),F(Ci),F(Si),F(Ls),F(Ns),o&&t(Af),o&&t(sn),F(Di),o&&t(Of),o&&t(Se),F(Wi),F(Gi),F(Ss),F(Ds),o&&t(Lf),o&&t(an),F(Xi),o&&t(Nf),o&&t(De),F(Yi),F(al),F(Us),F(Rs),o&&t(If),o&&t(dn),F(il),o&&t(Sf),o&&t(We),F(ll),F(gl),F(Qs),F(Bs),o&&t(Df),o&&t(pn),F(_l),o&&t(Wf),o&&t(Ae),F(kl),F(Fl),F(Ks),F(Js),o&&t(Uf),o&&t(mn),F(xl),o&&t(Rf),o&&t(Ue),F(Ml),F(Ll),F(Xs),F(Ys)}}}const V4={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function K4(x){return Nz(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tq extends Pz{constructor(d){super();Az(this,d,K4,B4,Oz,{})}}export{tq as default,V4 as metadata};
