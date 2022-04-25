import{S as iv,i as lv,s as dv,e as r,k as h,w as v,t as n,M as cv,c as a,d as t,m,a as i,x as M,h as s,b,F as e,g,y as $,q as w,o as y,B as F,v as pv,L as ze}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as ie}from"../../chunks/Docstring-1088f2fb.js";import{C as xe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as qe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-5212b321.js";function hv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertModel, MobileBertConfig

# Initializing a MobileBERT configuration
configuration = MobileBertConfig()

# Initializing a model from the configuration above
model = MobileBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertModel, MobileBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MobileBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MobileBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration above</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function mv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function uv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertModel.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertModel.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function fv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function gv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForPreTraining.from_pretrained("google/mobilebert-uncased")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function _v(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function bv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function kv(E){let d,_;return d=new xe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Tv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function vv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForNextSentencePrediction.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Mv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function $v(E){let d,_,c,p,k;return p=new xe({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example of single-label classification:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function wv(E){let d,_;return d=new xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function yv(E){let d,_,c,p,k;return p=new xe({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example of multi-label classification:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Fv(E){let d,_;return d=new xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Bv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Ev(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForMultipleChoice.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function zv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function xv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForTokenClassification.from_pretrained("google/mobilebert-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Pv(E){let d,_;return d=new xe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function qv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Cv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForQuestionAnswering.from_pretrained("google/mobilebert-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jv(E){let d,_;return d=new xe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Nv(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function Sv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Av(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertModel.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertModel.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ov(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function Iv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Dv(E){let d,_,c,p,k;return p=new xe({props:{code:`import tensorflow as tf
from transformers import MobileBertTokenizer, TFMobileBertForPreTraining

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForPreTraining.from_pretrained("google/mobilebert-uncased")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute"))[None, :]  # Batch size 1
outputs = model(input_ids)
prediction_scores, seq_relationship_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>))[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Lv(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function Wv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Rv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Hv(E){let d,_;return d=new xe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Qv(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function Uv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Vv(E){let d,_,c,p,k;return p=new xe({props:{code:`import tensorflow as tf
from transformers import MobileBertTokenizer, TFMobileBertForNextSentencePrediction

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForNextSentencePrediction.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="tf")

logits = model(encoding["input_ids"], token_type_ids=encoding["token_type_ids"])[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Kv(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function Gv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Yv(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Jv(E){let d,_;return d=new xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFMobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Zv(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function Xv(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function eM(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForMultipleChoice.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function tM(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function oM(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function nM(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForTokenClassification.from_pretrained("google/mobilebert-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function sM(E){let d,_;return d=new xe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function rM(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),z=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),x=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);k=a(Y,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(Y),z=a(Y,"LI",{});var ye=i(z);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),x=a(f,"P",{});var A=i(x);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ke=i(L);ue=s(ke,"model(inputs)"),ke.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var Te=i(N);ee=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,k),e(k,l),e(p,u),e(p,z),e(z,he),g(f,K,B),g(f,x,B),e(x,J),e(x,D),e(D,X),e(x,me),e(x,L),e(L,ue),e(x,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(x),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function aM(E){let d,_,c,p,k;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function iM(E){let d,_,c,p,k;return p=new xe({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForQuestionAnswering.from_pretrained("google/mobilebert-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),k=!0},p:ze,i(l){k||(w(p.$$.fragment,l),k=!0)},o(l){y(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function lM(E){let d,_;return d=new xe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:ze,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function dM(E){let d,_,c,p,k,l,u,z,he,K,x,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be,f,B,Y,ve,ye,A,$e,ke,Te,j,I,Fe,Me,U,we,te,oe,Be,Dt,Fp,Ma,Bp,Ep,$a,zp,xp,Pp,Lt,qp,wa,Cp,jp,ya,Np,Sp,Ap,Co,Op,qi,Ip,Sd,Wt,jo,Ci,ls,Dp,ji,Lp,Ad,st,ds,Wp,Ni,Rp,Hp,No,Fa,Qp,Up,Ba,Vp,Kp,Gp,cs,Yp,Ea,Jp,Zp,Od,Rt,So,Si,ps,Xp,Ai,eh,Id,rt,hs,th,ms,oh,Oi,nh,sh,rh,Ao,za,ah,ih,xa,lh,dh,ch,us,ph,Pa,hh,mh,Dd,Ht,Oo,Ii,fs,uh,Di,fh,Ld,Qt,gs,gh,_s,_h,qa,bh,kh,Wd,Ut,bs,Th,ks,vh,Ca,Mh,$h,Rd,Vt,Io,Li,Ts,wh,Wi,yh,Hd,je,vs,Fh,Ri,Bh,Eh,Ms,zh,ja,xh,Ph,qh,$s,Ch,ws,jh,Nh,Sh,Hi,ys,Ah,Oh,it,Fs,Ih,Kt,Dh,Na,Lh,Wh,Qi,Rh,Hh,Qh,Do,Uh,Lo,Qd,Gt,Wo,Ui,Bs,Vh,Vi,Kh,Ud,Re,Es,Gh,Yt,Yh,Ki,Jh,Zh,Gi,Xh,em,tm,zs,om,Sa,nm,sm,rm,xs,am,Ps,im,lm,dm,lt,qs,cm,Jt,pm,Aa,hm,mm,Yi,um,fm,gm,Ro,_m,Ho,Vd,Zt,Qo,Ji,Cs,bm,Zi,km,Kd,He,js,Tm,Ns,vm,Xi,Mm,$m,wm,Ss,ym,Oa,Fm,Bm,Em,As,zm,Os,xm,Pm,qm,Ye,Is,Cm,Xt,jm,Ia,Nm,Sm,el,Am,Om,Im,Uo,Dm,Vo,Lm,Ko,Gd,eo,Go,tl,Ds,Wm,ol,Rm,Yd,Qe,Ls,Hm,Ws,Qm,nl,Um,Vm,Km,Rs,Gm,Da,Ym,Jm,Zm,Hs,Xm,Qs,eu,tu,ou,dt,Us,nu,to,su,La,ru,au,sl,iu,lu,du,Yo,cu,Jo,Jd,oo,Zo,rl,Vs,pu,al,hu,Zd,Ue,Ks,mu,il,uu,fu,Gs,gu,Wa,_u,bu,ku,Ys,Tu,Js,vu,Mu,$u,Ce,Zs,wu,no,yu,Ra,Fu,Bu,ll,Eu,zu,xu,Xo,Pu,en,qu,tn,Cu,on,ju,nn,Xd,so,sn,dl,Xs,Nu,cl,Su,ec,Ve,er,Au,pl,Ou,Iu,tr,Du,Ha,Lu,Wu,Ru,or,Hu,nr,Qu,Uu,Vu,ct,sr,Ku,ro,Gu,Qa,Yu,Ju,hl,Zu,Xu,ef,rn,tf,an,tc,ao,ln,ml,rr,of,ul,nf,oc,Ke,ar,sf,fl,rf,af,ir,lf,Ua,df,cf,pf,lr,hf,dr,mf,uf,ff,Je,cr,gf,io,_f,Va,bf,kf,gl,Tf,vf,Mf,dn,$f,cn,wf,pn,nc,lo,hn,_l,pr,yf,bl,Ff,sc,Ge,hr,Bf,co,Ef,kl,zf,xf,Tl,Pf,qf,Cf,mr,jf,Ka,Nf,Sf,Af,ur,Of,fr,If,Df,Lf,Ze,gr,Wf,po,Rf,Ga,Hf,Qf,vl,Uf,Vf,Kf,mn,Gf,un,Yf,fn,rc,ho,gn,Ml,_r,Jf,$l,Zf,ac,Ne,br,Xf,wl,eg,tg,kr,og,Ya,ng,sg,rg,Tr,ag,vr,ig,lg,dg,_n,cg,pt,Mr,pg,mo,hg,Ja,mg,ug,yl,fg,gg,_g,bn,bg,kn,ic,uo,Tn,Fl,$r,kg,Bl,Tg,lc,Se,wr,vg,fo,Mg,El,$g,wg,zl,yg,Fg,Bg,yr,Eg,Za,zg,xg,Pg,Fr,qg,Br,Cg,jg,Ng,vn,Sg,ht,Er,Ag,go,Og,Xa,Ig,Dg,xl,Lg,Wg,Rg,Mn,Hg,$n,dc,_o,wn,Pl,zr,Qg,ql,Ug,cc,Ae,xr,Vg,Pr,Kg,Cl,Gg,Yg,Jg,qr,Zg,ei,Xg,e_,t_,Cr,o_,jr,n_,s_,r_,yn,a_,Xe,Nr,i_,bo,l_,ti,d_,c_,jl,p_,h_,m_,Fn,u_,Bn,f_,En,pc,ko,zn,Nl,Sr,g_,Sl,__,hc,Oe,Ar,b_,Or,k_,Al,T_,v_,M_,Ir,$_,oi,w_,y_,F_,Dr,B_,Lr,E_,z_,x_,xn,P_,mt,Wr,q_,To,C_,ni,j_,N_,Ol,S_,A_,O_,Pn,I_,qn,mc,vo,Cn,Il,Rr,D_,Dl,L_,uc,Ie,Hr,W_,Ll,R_,H_,Qr,Q_,si,U_,V_,K_,Ur,G_,Vr,Y_,J_,Z_,jn,X_,et,Kr,eb,Mo,tb,ri,ob,nb,Wl,sb,rb,ab,Nn,ib,Sn,lb,An,fc,$o,On,Rl,Gr,db,Hl,cb,gc,De,Yr,pb,Ql,hb,mb,Jr,ub,ai,fb,gb,_b,Zr,bb,Xr,kb,Tb,vb,In,Mb,ut,ea,$b,wo,wb,ii,yb,Fb,Ul,Bb,Eb,zb,Dn,xb,Ln,_c,yo,Wn,Vl,ta,Pb,Kl,qb,bc,Le,oa,Cb,Gl,jb,Nb,na,Sb,li,Ab,Ob,Ib,sa,Db,ra,Lb,Wb,Rb,Rn,Hb,tt,aa,Qb,Fo,Ub,di,Vb,Kb,Yl,Gb,Yb,Jb,Hn,Zb,Qn,Xb,Un,kc,Bo,Vn,Jl,ia,ek,Zl,tk,Tc,We,la,ok,Eo,nk,Xl,sk,rk,ed,ak,ik,lk,da,dk,ci,ck,pk,hk,ca,mk,pa,uk,fk,gk,Kn,_k,ot,ha,bk,zo,kk,pi,Tk,vk,td,Mk,$k,wk,Gn,yk,Yn,Fk,Jn,vc;return l=new qe({}),X=new qe({}),I=new qe({}),oe=new ie({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the MobileBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MobileBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MobileBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MobileBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MobileBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MobileBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MobileBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MobileBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MobileBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MobileBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or
<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MobileBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MobileBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MobileBertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The ID of the token in the word embedding to use as padding.`,name:"pad_token_id"},{anchor:"transformers.MobileBertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The dimension of the word embedding vectors.`,name:"embedding_size"},{anchor:"transformers.MobileBertConfig.trigram_input",description:`<strong>trigram_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Use a convolution of trigram as input.`,name:"trigram_input"},{anchor:"transformers.MobileBertConfig.use_bottleneck",description:`<strong>use_bottleneck</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bottleneck in BERT.`,name:"use_bottleneck"},{anchor:"transformers.MobileBertConfig.intra_bottleneck_size",description:`<strong>intra_bottleneck_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Size of bottleneck layer output.`,name:"intra_bottleneck_size"},{anchor:"transformers.MobileBertConfig.use_bottleneck_attention",description:`<strong>use_bottleneck_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use attention inputs from the bottleneck transformation.`,name:"use_bottleneck_attention"},{anchor:"transformers.MobileBertConfig.key_query_shared_bottleneck",description:`<strong>key_query_shared_bottleneck</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the same linear transformation for query&amp;key in the bottleneck.`,name:"key_query_shared_bottleneck"},{anchor:"transformers.MobileBertConfig.num_feedforward_networks",description:`<strong>num_feedforward_networks</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of FFNs in a block.`,name:"num_feedforward_networks"},{anchor:"transformers.MobileBertConfig.normalization_type",description:`<strong>normalization_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;no_norm&quot;</code>) &#x2014;
The normalization type in MobileBERT.`,name:"normalization_type"},{anchor:"transformers.MobileBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/configuration_mobilebert.py#L28"}}),Co=new Ee({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[hv]},$$scope:{ctx:E}}}),ls=new qe({}),ds=new ie({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/tokenization_mobilebert.py#L36"}}),ps=new qe({}),hs=new ie({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L40"}}),fs=new qe({}),gs=new ie({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L684"}}),bs=new ie({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L779"}}),Ts=new qe({}),vs=new ie({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L787"}}),Fs=new ie({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_attentions",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L817",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Do=new Pe({props:{$$slots:{default:[mv]},$$scope:{ctx:E}}}),Lo=new Ee({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[uv]},$$scope:{ctx:E}}}),Bs=new qe({}),Es=new ie({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L903"}}),qs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MobileBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L926",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Pe({props:{$$slots:{default:[fv]},$$scope:{ctx:E}}}),Ho=new Ee({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[gv]},$$scope:{ctx:E}}}),Cs=new qe({}),js=new ie({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1010"}}),Is=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1036",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Uo=new Pe({props:{$$slots:{default:[_v]},$$scope:{ctx:E}}}),Vo=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[bv]},$$scope:{ctx:E}}}),Ko=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[kv]},$$scope:{ctx:E}}}),Ds=new qe({}),Ls=new ie({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1110"}}),Us=new ie({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>.</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1120",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Pe({props:{$$slots:{default:[Tv]},$$scope:{ctx:E}}}),Jo=new Ee({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[vv]},$$scope:{ctx:E}}}),Vs=new qe({}),Ks=new ie({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1213"}}),Zs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1229",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Xo=new Pe({props:{$$slots:{default:[Mv]},$$scope:{ctx:E}}}),en=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[$v]},$$scope:{ctx:E}}}),tn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[wv]},$$scope:{ctx:E}}}),on=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[yv]},$$scope:{ctx:E}}}),nn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[Fv]},$$scope:{ctx:E}}}),Xs=new qe({}),er=new ie({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1420"}}),sr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1434",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),rn=new Pe({props:{$$slots:{default:[Bv]},$$scope:{ctx:E}}}),an=new Ee({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[Ev]},$$scope:{ctx:E}}}),rr=new qe({}),ar=new ie({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1518"}}),cr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1536",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),dn=new Pe({props:{$$slots:{default:[zv]},$$scope:{ctx:E}}}),cn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[xv]},$$scope:{ctx:E}}}),pn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[Pv]},$$scope:{ctx:E}}}),pr=new qe({}),hr=new ie({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1316"}}),gr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_mobilebert.py#L1330",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),mn=new Pe({props:{$$slots:{default:[qv]},$$scope:{ctx:E}}}),un=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[Cv]},$$scope:{ctx:E}}}),fn=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[jv]},$$scope:{ctx:E}}}),_r=new qe({}),br=new ie({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L906"}}),_n=new Pe({props:{$$slots:{default:[Nv]},$$scope:{ctx:E}}}),Mr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L911",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),bn=new Pe({props:{$$slots:{default:[Sv]},$$scope:{ctx:E}}}),kn=new Ee({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[Av]},$$scope:{ctx:E}}}),$r=new qe({}),wr=new ie({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L967"}}),vn=new Pe({props:{$$slots:{default:[Ov]},$$scope:{ctx:E}}}),Er=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L981",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mn=new Pe({props:{$$slots:{default:[Iv]},$$scope:{ctx:E}}}),$n=new Ee({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[Dv]},$$scope:{ctx:E}}}),zr=new qe({}),xr=new ie({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1053"}}),yn=new Pe({props:{$$slots:{default:[Lv]},$$scope:{ctx:E}}}),Nr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1074",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Fn=new Pe({props:{$$slots:{default:[Wv]},$$scope:{ctx:E}}}),Bn=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[Rv]},$$scope:{ctx:E}}}),En=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[Hv]},$$scope:{ctx:E}}}),Sr=new qe({}),Ar=new ie({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1153"}}),xn=new Pe({props:{$$slots:{default:[Qv]},$$scope:{ctx:E}}}),Wr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1163",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>next_sentence_label</code> is provided) \u2014 Next sentence prediction loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Pe({props:{$$slots:{default:[Uv]},$$scope:{ctx:E}}}),qn=new Ee({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[Vv]},$$scope:{ctx:E}}}),Rr=new qe({}),Hr=new ie({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1246"}}),jn=new Pe({props:{$$slots:{default:[Kv]},$$scope:{ctx:E}}}),Kr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1269",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Nn=new Pe({props:{$$slots:{default:[Gv]},$$scope:{ctx:E}}}),Sn=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[Yv]},$$scope:{ctx:E}}}),An=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[Jv]},$$scope:{ctx:E}}}),Gr=new qe({}),Yr=new ie({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1449"}}),In=new Pe({props:{$$slots:{default:[Zv]},$$scope:{ctx:E}}}),ea=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Dn=new Pe({props:{$$slots:{default:[Xv]},$$scope:{ctx:E}}}),Ln=new Ee({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[eM]},$$scope:{ctx:E}}}),ta=new qe({}),oa=new ie({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1584"}}),Rn=new Pe({props:{$$slots:{default:[tM]},$$scope:{ctx:E}}}),aa=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1608",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Hn=new Pe({props:{$$slots:{default:[oM]},$$scope:{ctx:E}}}),Qn=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[nM]},$$scope:{ctx:E}}}),Un=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[sM]},$$scope:{ctx:E}}}),ia=new qe({}),la=new ie({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1343"}}),Kn=new Pe({props:{$$slots:{default:[rM]},$$scope:{ctx:E}}}),ha=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1362",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Gn=new Pe({props:{$$slots:{default:[aM]},$$scope:{ctx:E}}}),Yn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[iM]},$$scope:{ctx:E}}}),Jn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[lM]},$$scope:{ctx:E}}}),{c(){d=r("meta"),_=h(),c=r("h1"),p=r("a"),k=r("span"),v(l.$$.fragment),u=h(),z=r("span"),he=n("MobileBERT"),K=h(),x=r("h2"),J=r("a"),D=r("span"),v(X.$$.fragment),me=h(),L=r("span"),ue=n("Overview"),le=h(),V=r("p"),N=n("The MobileBERT model was proposed in "),ee=r("a"),G=n("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),P=n(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),C=h(),ne=r("p"),H=n("The abstract from the paper is the following:"),de=h(),se=r("p"),W=r("em"),fe=n(`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
of millions of parameters. However, these models suffer from heavy model sizes and high latency such that they cannot
be deployed to resource-limited mobile devices. In this paper, we propose MobileBERT for compressing and accelerating
the popular BERT model. Like the original BERT, MobileBERT is task-agnostic, that is, it can be generically applied to
various downstream NLP tasks via simple fine-tuning. Basically, MobileBERT is a thin version of BERT_LARGE, while
equipped with bottleneck structures and a carefully designed balance between self-attentions and feed-forward networks.
To train MobileBERT, we first train a specially designed teacher model, an inverted-bottleneck incorporated BERT_LARGE
model. Then, we conduct knowledge transfer from this teacher to MobileBERT. Empirical studies show that MobileBERT is
4.3x smaller and 5.5x faster than BERT_BASE while achieving competitive results on well-known benchmarks. On the
natural language inference tasks of GLUE, MobileBERT achieves a GLUEscore o 77.7 (0.6 lower than BERT_BASE), and 62 ms
latency on a Pixel 4 phone. On the SQuAD v1.1/v2.0 question answering task, MobileBERT achieves a dev F1 score of
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),ce=h(),q=r("p"),ge=n("Tips:"),R=h(),Z=r("ul"),re=r("li"),Q=n(`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),_e=h(),ae=r("li"),S=n(`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),pe=h(),O=r("p"),be=n("This model was contributed by "),f=r("a"),B=n("vshampor"),Y=n(". The original code can be found "),ve=r("a"),ye=n("here"),A=n("."),$e=h(),ke=r("h2"),Te=r("a"),j=r("span"),v(I.$$.fragment),Fe=h(),Me=r("span"),U=n("MobileBertConfig"),we=h(),te=r("div"),v(oe.$$.fragment),Be=h(),Dt=r("p"),Fp=n("This is the configuration class to store the configuration of a "),Ma=r("a"),Bp=n("MobileBertModel"),Ep=n(" or a "),$a=r("a"),zp=n("TFMobileBertModel"),xp=n(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.`),Pp=h(),Lt=r("p"),qp=n("Configuration objects inherit from "),wa=r("a"),Cp=n("PretrainedConfig"),jp=n(` and can be used to control the model outputs. Read the
documentation from `),ya=r("a"),Np=n("PretrainedConfig"),Sp=n(" for more information."),Ap=h(),v(Co.$$.fragment),Op=h(),qi=r("p"),Ip=n(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Sd=h(),Wt=r("h2"),jo=r("a"),Ci=r("span"),v(ls.$$.fragment),Dp=h(),ji=r("span"),Lp=n("MobileBertTokenizer"),Ad=h(),st=r("div"),v(ds.$$.fragment),Wp=h(),Ni=r("p"),Rp=n("Construct a MobileBERT tokenizer."),Hp=h(),No=r("p"),Fa=r("a"),Qp=n("MobileBertTokenizer"),Up=n(" is identical to "),Ba=r("a"),Vp=n("BertTokenizer"),Kp=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Gp=h(),cs=r("p"),Yp=n("Refer to superclass "),Ea=r("a"),Jp=n("BertTokenizer"),Zp=n(" for usage examples and documentation concerning parameters."),Od=h(),Rt=r("h2"),So=r("a"),Si=r("span"),v(ps.$$.fragment),Xp=h(),Ai=r("span"),eh=n("MobileBertTokenizerFast"),Id=h(),rt=r("div"),v(hs.$$.fragment),th=h(),ms=r("p"),oh=n("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Oi=r("em"),nh=n("tokenizers"),sh=n(" library)."),rh=h(),Ao=r("p"),za=r("a"),ah=n("MobileBertTokenizerFast"),ih=n(" is identical to "),xa=r("a"),lh=n("BertTokenizerFast"),dh=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ch=h(),us=r("p"),ph=n("Refer to superclass "),Pa=r("a"),hh=n("BertTokenizerFast"),mh=n(" for usage examples and documentation concerning parameters."),Dd=h(),Ht=r("h2"),Oo=r("a"),Ii=r("span"),v(fs.$$.fragment),uh=h(),Di=r("span"),fh=n("MobileBert specific outputs"),Ld=h(),Qt=r("div"),v(gs.$$.fragment),gh=h(),_s=r("p"),_h=n("Output type of "),qa=r("a"),bh=n("MobileBertForPreTraining"),kh=n("."),Wd=h(),Ut=r("div"),v(bs.$$.fragment),Th=h(),ks=r("p"),vh=n("Output type of "),Ca=r("a"),Mh=n("TFMobileBertForPreTraining"),$h=n("."),Rd=h(),Vt=r("h2"),Io=r("a"),Li=r("span"),v(Ts.$$.fragment),wh=h(),Wi=r("span"),yh=n("MobileBertModel"),Hd=h(),je=r("div"),v(vs.$$.fragment),Fh=h(),Ri=r("p"),Bh=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Eh=h(),Ms=r("p"),zh=n("This model inherits from "),ja=r("a"),xh=n("PreTrainedModel"),Ph=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh=h(),$s=r("p"),Ch=n("This model is also a PyTorch "),ws=r("a"),jh=n("torch.nn.Module"),Nh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sh=h(),Hi=r("p"),ys=r("a"),Ah=n("https://arxiv.org/pdf/2004.02984.pdf"),Oh=h(),it=r("div"),v(Fs.$$.fragment),Ih=h(),Kt=r("p"),Dh=n("The "),Na=r("a"),Lh=n("MobileBertModel"),Wh=n(" forward method, overrides the "),Qi=r("code"),Rh=n("__call__"),Hh=n(" special method."),Qh=h(),v(Do.$$.fragment),Uh=h(),v(Lo.$$.fragment),Qd=h(),Gt=r("h2"),Wo=r("a"),Ui=r("span"),v(Bs.$$.fragment),Vh=h(),Vi=r("span"),Kh=n("MobileBertForPreTraining"),Ud=h(),Re=r("div"),v(Es.$$.fragment),Gh=h(),Yt=r("p"),Yh=n("MobileBert Model with two heads on top as done during the pretraining: a "),Ki=r("code"),Jh=n("masked language modeling"),Zh=n(` head and a
`),Gi=r("code"),Xh=n("next sentence prediction (classification)"),em=n(" head."),tm=h(),zs=r("p"),om=n("This model inherits from "),Sa=r("a"),nm=n("PreTrainedModel"),sm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm=h(),xs=r("p"),am=n("This model is also a PyTorch "),Ps=r("a"),im=n("torch.nn.Module"),lm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm=h(),lt=r("div"),v(qs.$$.fragment),cm=h(),Jt=r("p"),pm=n("The "),Aa=r("a"),hm=n("MobileBertForPreTraining"),mm=n(" forward method, overrides the "),Yi=r("code"),um=n("__call__"),fm=n(" special method."),gm=h(),v(Ro.$$.fragment),_m=h(),v(Ho.$$.fragment),Vd=h(),Zt=r("h2"),Qo=r("a"),Ji=r("span"),v(Cs.$$.fragment),bm=h(),Zi=r("span"),km=n("MobileBertForMaskedLM"),Kd=h(),He=r("div"),v(js.$$.fragment),Tm=h(),Ns=r("p"),vm=n("MobileBert Model with a "),Xi=r("code"),Mm=n("language modeling"),$m=n(" head on top."),wm=h(),Ss=r("p"),ym=n("This model inherits from "),Oa=r("a"),Fm=n("PreTrainedModel"),Bm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Em=h(),As=r("p"),zm=n("This model is also a PyTorch "),Os=r("a"),xm=n("torch.nn.Module"),Pm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qm=h(),Ye=r("div"),v(Is.$$.fragment),Cm=h(),Xt=r("p"),jm=n("The "),Ia=r("a"),Nm=n("MobileBertForMaskedLM"),Sm=n(" forward method, overrides the "),el=r("code"),Am=n("__call__"),Om=n(" special method."),Im=h(),v(Uo.$$.fragment),Dm=h(),v(Vo.$$.fragment),Lm=h(),v(Ko.$$.fragment),Gd=h(),eo=r("h2"),Go=r("a"),tl=r("span"),v(Ds.$$.fragment),Wm=h(),ol=r("span"),Rm=n("MobileBertForNextSentencePrediction"),Yd=h(),Qe=r("div"),v(Ls.$$.fragment),Hm=h(),Ws=r("p"),Qm=n("MobileBert Model with a "),nl=r("code"),Um=n("next sentence prediction (classification)"),Vm=n(" head on top."),Km=h(),Rs=r("p"),Gm=n("This model inherits from "),Da=r("a"),Ym=n("PreTrainedModel"),Jm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=h(),Hs=r("p"),Xm=n("This model is also a PyTorch "),Qs=r("a"),eu=n("torch.nn.Module"),tu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou=h(),dt=r("div"),v(Us.$$.fragment),nu=h(),to=r("p"),su=n("The "),La=r("a"),ru=n("MobileBertForNextSentencePrediction"),au=n(" forward method, overrides the "),sl=r("code"),iu=n("__call__"),lu=n(" special method."),du=h(),v(Yo.$$.fragment),cu=h(),v(Jo.$$.fragment),Jd=h(),oo=r("h2"),Zo=r("a"),rl=r("span"),v(Vs.$$.fragment),pu=h(),al=r("span"),hu=n("MobileBertForSequenceClassification"),Zd=h(),Ue=r("div"),v(Ks.$$.fragment),mu=h(),il=r("p"),uu=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fu=h(),Gs=r("p"),gu=n("This model inherits from "),Wa=r("a"),_u=n("PreTrainedModel"),bu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku=h(),Ys=r("p"),Tu=n("This model is also a PyTorch "),Js=r("a"),vu=n("torch.nn.Module"),Mu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u=h(),Ce=r("div"),v(Zs.$$.fragment),wu=h(),no=r("p"),yu=n("The "),Ra=r("a"),Fu=n("MobileBertForSequenceClassification"),Bu=n(" forward method, overrides the "),ll=r("code"),Eu=n("__call__"),zu=n(" special method."),xu=h(),v(Xo.$$.fragment),Pu=h(),v(en.$$.fragment),qu=h(),v(tn.$$.fragment),Cu=h(),v(on.$$.fragment),ju=h(),v(nn.$$.fragment),Xd=h(),so=r("h2"),sn=r("a"),dl=r("span"),v(Xs.$$.fragment),Nu=h(),cl=r("span"),Su=n("MobileBertForMultipleChoice"),ec=h(),Ve=r("div"),v(er.$$.fragment),Au=h(),pl=r("p"),Ou=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iu=h(),tr=r("p"),Du=n("This model inherits from "),Ha=r("a"),Lu=n("PreTrainedModel"),Wu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru=h(),or=r("p"),Hu=n("This model is also a PyTorch "),nr=r("a"),Qu=n("torch.nn.Module"),Uu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vu=h(),ct=r("div"),v(sr.$$.fragment),Ku=h(),ro=r("p"),Gu=n("The "),Qa=r("a"),Yu=n("MobileBertForMultipleChoice"),Ju=n(" forward method, overrides the "),hl=r("code"),Zu=n("__call__"),Xu=n(" special method."),ef=h(),v(rn.$$.fragment),tf=h(),v(an.$$.fragment),tc=h(),ao=r("h2"),ln=r("a"),ml=r("span"),v(rr.$$.fragment),of=h(),ul=r("span"),nf=n("MobileBertForTokenClassification"),oc=h(),Ke=r("div"),v(ar.$$.fragment),sf=h(),fl=r("p"),rf=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),af=h(),ir=r("p"),lf=n("This model inherits from "),Ua=r("a"),df=n("PreTrainedModel"),cf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf=h(),lr=r("p"),hf=n("This model is also a PyTorch "),dr=r("a"),mf=n("torch.nn.Module"),uf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff=h(),Je=r("div"),v(cr.$$.fragment),gf=h(),io=r("p"),_f=n("The "),Va=r("a"),bf=n("MobileBertForTokenClassification"),kf=n(" forward method, overrides the "),gl=r("code"),Tf=n("__call__"),vf=n(" special method."),Mf=h(),v(dn.$$.fragment),$f=h(),v(cn.$$.fragment),wf=h(),v(pn.$$.fragment),nc=h(),lo=r("h2"),hn=r("a"),_l=r("span"),v(pr.$$.fragment),yf=h(),bl=r("span"),Ff=n("MobileBertForQuestionAnswering"),sc=h(),Ge=r("div"),v(hr.$$.fragment),Bf=h(),co=r("p"),Ef=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),kl=r("code"),zf=n("span start logits"),xf=n(" and "),Tl=r("code"),Pf=n("span end logits"),qf=n(")."),Cf=h(),mr=r("p"),jf=n("This model inherits from "),Ka=r("a"),Nf=n("PreTrainedModel"),Sf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Af=h(),ur=r("p"),Of=n("This model is also a PyTorch "),fr=r("a"),If=n("torch.nn.Module"),Df=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lf=h(),Ze=r("div"),v(gr.$$.fragment),Wf=h(),po=r("p"),Rf=n("The "),Ga=r("a"),Hf=n("MobileBertForQuestionAnswering"),Qf=n(" forward method, overrides the "),vl=r("code"),Uf=n("__call__"),Vf=n(" special method."),Kf=h(),v(mn.$$.fragment),Gf=h(),v(un.$$.fragment),Yf=h(),v(fn.$$.fragment),rc=h(),ho=r("h2"),gn=r("a"),Ml=r("span"),v(_r.$$.fragment),Jf=h(),$l=r("span"),Zf=n("TFMobileBertModel"),ac=h(),Ne=r("div"),v(br.$$.fragment),Xf=h(),wl=r("p"),eg=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),tg=h(),kr=r("p"),og=n("This model inherits from "),Ya=r("a"),ng=n("TFPreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rg=h(),Tr=r("p"),ag=n("This model is also a "),vr=r("a"),ig=n("tf.keras.Model"),lg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dg=h(),v(_n.$$.fragment),cg=h(),pt=r("div"),v(Mr.$$.fragment),pg=h(),mo=r("p"),hg=n("The "),Ja=r("a"),mg=n("TFMobileBertModel"),ug=n(" forward method, overrides the "),yl=r("code"),fg=n("__call__"),gg=n(" special method."),_g=h(),v(bn.$$.fragment),bg=h(),v(kn.$$.fragment),ic=h(),uo=r("h2"),Tn=r("a"),Fl=r("span"),v($r.$$.fragment),kg=h(),Bl=r("span"),Tg=n("TFMobileBertForPreTraining"),lc=h(),Se=r("div"),v(wr.$$.fragment),vg=h(),fo=r("p"),Mg=n("MobileBert Model with two heads on top as done during the pretraining: a "),El=r("code"),$g=n("masked language modeling"),wg=n(` head and a
`),zl=r("code"),yg=n("next sentence prediction (classification)"),Fg=n(" head."),Bg=h(),yr=r("p"),Eg=n("This model inherits from "),Za=r("a"),zg=n("TFPreTrainedModel"),xg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pg=h(),Fr=r("p"),qg=n("This model is also a "),Br=r("a"),Cg=n("tf.keras.Model"),jg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ng=h(),v(vn.$$.fragment),Sg=h(),ht=r("div"),v(Er.$$.fragment),Ag=h(),go=r("p"),Og=n("The "),Xa=r("a"),Ig=n("TFMobileBertForPreTraining"),Dg=n(" forward method, overrides the "),xl=r("code"),Lg=n("__call__"),Wg=n(" special method."),Rg=h(),v(Mn.$$.fragment),Hg=h(),v($n.$$.fragment),dc=h(),_o=r("h2"),wn=r("a"),Pl=r("span"),v(zr.$$.fragment),Qg=h(),ql=r("span"),Ug=n("TFMobileBertForMaskedLM"),cc=h(),Ae=r("div"),v(xr.$$.fragment),Vg=h(),Pr=r("p"),Kg=n("MobileBert Model with a "),Cl=r("code"),Gg=n("language modeling"),Yg=n(" head on top."),Jg=h(),qr=r("p"),Zg=n("This model inherits from "),ei=r("a"),Xg=n("TFPreTrainedModel"),e_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t_=h(),Cr=r("p"),o_=n("This model is also a "),jr=r("a"),n_=n("tf.keras.Model"),s_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),r_=h(),v(yn.$$.fragment),a_=h(),Xe=r("div"),v(Nr.$$.fragment),i_=h(),bo=r("p"),l_=n("The "),ti=r("a"),d_=n("TFMobileBertForMaskedLM"),c_=n(" forward method, overrides the "),jl=r("code"),p_=n("__call__"),h_=n(" special method."),m_=h(),v(Fn.$$.fragment),u_=h(),v(Bn.$$.fragment),f_=h(),v(En.$$.fragment),pc=h(),ko=r("h2"),zn=r("a"),Nl=r("span"),v(Sr.$$.fragment),g_=h(),Sl=r("span"),__=n("TFMobileBertForNextSentencePrediction"),hc=h(),Oe=r("div"),v(Ar.$$.fragment),b_=h(),Or=r("p"),k_=n("MobileBert Model with a "),Al=r("code"),T_=n("next sentence prediction (classification)"),v_=n(" head on top."),M_=h(),Ir=r("p"),$_=n("This model inherits from "),oi=r("a"),w_=n("TFPreTrainedModel"),y_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F_=h(),Dr=r("p"),B_=n("This model is also a "),Lr=r("a"),E_=n("tf.keras.Model"),z_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),x_=h(),v(xn.$$.fragment),P_=h(),mt=r("div"),v(Wr.$$.fragment),q_=h(),To=r("p"),C_=n("The "),ni=r("a"),j_=n("TFMobileBertForNextSentencePrediction"),N_=n(" forward method, overrides the "),Ol=r("code"),S_=n("__call__"),A_=n(" special method."),O_=h(),v(Pn.$$.fragment),I_=h(),v(qn.$$.fragment),mc=h(),vo=r("h2"),Cn=r("a"),Il=r("span"),v(Rr.$$.fragment),D_=h(),Dl=r("span"),L_=n("TFMobileBertForSequenceClassification"),uc=h(),Ie=r("div"),v(Hr.$$.fragment),W_=h(),Ll=r("p"),R_=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),H_=h(),Qr=r("p"),Q_=n("This model inherits from "),si=r("a"),U_=n("TFPreTrainedModel"),V_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K_=h(),Ur=r("p"),G_=n("This model is also a "),Vr=r("a"),Y_=n("tf.keras.Model"),J_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Z_=h(),v(jn.$$.fragment),X_=h(),et=r("div"),v(Kr.$$.fragment),eb=h(),Mo=r("p"),tb=n("The "),ri=r("a"),ob=n("TFMobileBertForSequenceClassification"),nb=n(" forward method, overrides the "),Wl=r("code"),sb=n("__call__"),rb=n(" special method."),ab=h(),v(Nn.$$.fragment),ib=h(),v(Sn.$$.fragment),lb=h(),v(An.$$.fragment),fc=h(),$o=r("h2"),On=r("a"),Rl=r("span"),v(Gr.$$.fragment),db=h(),Hl=r("span"),cb=n("TFMobileBertForMultipleChoice"),gc=h(),De=r("div"),v(Yr.$$.fragment),pb=h(),Ql=r("p"),hb=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),mb=h(),Jr=r("p"),ub=n("This model inherits from "),ai=r("a"),fb=n("TFPreTrainedModel"),gb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_b=h(),Zr=r("p"),bb=n("This model is also a "),Xr=r("a"),kb=n("tf.keras.Model"),Tb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vb=h(),v(In.$$.fragment),Mb=h(),ut=r("div"),v(ea.$$.fragment),$b=h(),wo=r("p"),wb=n("The "),ii=r("a"),yb=n("TFMobileBertForMultipleChoice"),Fb=n(" forward method, overrides the "),Ul=r("code"),Bb=n("__call__"),Eb=n(" special method."),zb=h(),v(Dn.$$.fragment),xb=h(),v(Ln.$$.fragment),_c=h(),yo=r("h2"),Wn=r("a"),Vl=r("span"),v(ta.$$.fragment),Pb=h(),Kl=r("span"),qb=n("TFMobileBertForTokenClassification"),bc=h(),Le=r("div"),v(oa.$$.fragment),Cb=h(),Gl=r("p"),jb=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nb=h(),na=r("p"),Sb=n("This model inherits from "),li=r("a"),Ab=n("TFPreTrainedModel"),Ob=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib=h(),sa=r("p"),Db=n("This model is also a "),ra=r("a"),Lb=n("tf.keras.Model"),Wb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rb=h(),v(Rn.$$.fragment),Hb=h(),tt=r("div"),v(aa.$$.fragment),Qb=h(),Fo=r("p"),Ub=n("The "),di=r("a"),Vb=n("TFMobileBertForTokenClassification"),Kb=n(" forward method, overrides the "),Yl=r("code"),Gb=n("__call__"),Yb=n(" special method."),Jb=h(),v(Hn.$$.fragment),Zb=h(),v(Qn.$$.fragment),Xb=h(),v(Un.$$.fragment),kc=h(),Bo=r("h2"),Vn=r("a"),Jl=r("span"),v(ia.$$.fragment),ek=h(),Zl=r("span"),tk=n("TFMobileBertForQuestionAnswering"),Tc=h(),We=r("div"),v(la.$$.fragment),ok=h(),Eo=r("p"),nk=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=r("code"),sk=n("span start logits"),rk=n(" and "),ed=r("code"),ak=n("span end logits"),ik=n(")."),lk=h(),da=r("p"),dk=n("This model inherits from "),ci=r("a"),ck=n("TFPreTrainedModel"),pk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=h(),ca=r("p"),mk=n("This model is also a "),pa=r("a"),uk=n("tf.keras.Model"),fk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gk=h(),v(Kn.$$.fragment),_k=h(),ot=r("div"),v(ha.$$.fragment),bk=h(),zo=r("p"),kk=n("The "),pi=r("a"),Tk=n("TFMobileBertForQuestionAnswering"),vk=n(" forward method, overrides the "),td=r("code"),Mk=n("__call__"),$k=n(" special method."),wk=h(),v(Gn.$$.fragment),yk=h(),v(Yn.$$.fragment),Fk=h(),v(Jn.$$.fragment),this.h()},l(o){const T=cv('[data-svelte="svelte-1phssyn"]',document.head);d=a(T,"META",{name:!0,content:!0}),T.forEach(t),_=m(o),c=a(o,"H1",{class:!0});var ma=i(c);p=a(ma,"A",{id:!0,class:!0,href:!0});var od=i(p);k=a(od,"SPAN",{});var nd=i(k);M(l.$$.fragment,nd),nd.forEach(t),od.forEach(t),u=m(ma),z=a(ma,"SPAN",{});var sd=i(z);he=s(sd,"MobileBERT"),sd.forEach(t),ma.forEach(t),K=m(o),x=a(o,"H2",{class:!0});var ua=i(x);J=a(ua,"A",{id:!0,class:!0,href:!0});var rd=i(J);D=a(rd,"SPAN",{});var ad=i(D);M(X.$$.fragment,ad),ad.forEach(t),rd.forEach(t),me=m(ua),L=a(ua,"SPAN",{});var id=i(L);ue=s(id,"Overview"),id.forEach(t),ua.forEach(t),le=m(o),V=a(o,"P",{});var fa=i(V);N=s(fa,"The MobileBERT model was proposed in "),ee=a(fa,"A",{href:!0,rel:!0});var ld=i(ee);G=s(ld,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),ld.forEach(t),P=s(fa,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),fa.forEach(t),C=m(o),ne=a(o,"P",{});var dd=i(ne);H=s(dd,"The abstract from the paper is the following:"),dd.forEach(t),de=m(o),se=a(o,"P",{});var cd=i(se);W=a(cd,"EM",{});var pd=i(W);fe=s(pd,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
of millions of parameters. However, these models suffer from heavy model sizes and high latency such that they cannot
be deployed to resource-limited mobile devices. In this paper, we propose MobileBERT for compressing and accelerating
the popular BERT model. Like the original BERT, MobileBERT is task-agnostic, that is, it can be generically applied to
various downstream NLP tasks via simple fine-tuning. Basically, MobileBERT is a thin version of BERT_LARGE, while
equipped with bottleneck structures and a carefully designed balance between self-attentions and feed-forward networks.
To train MobileBERT, we first train a specially designed teacher model, an inverted-bottleneck incorporated BERT_LARGE
model. Then, we conduct knowledge transfer from this teacher to MobileBERT. Empirical studies show that MobileBERT is
4.3x smaller and 5.5x faster than BERT_BASE while achieving competitive results on well-known benchmarks. On the
natural language inference tasks of GLUE, MobileBERT achieves a GLUEscore o 77.7 (0.6 lower than BERT_BASE), and 62 ms
latency on a Pixel 4 phone. On the SQuAD v1.1/v2.0 question answering task, MobileBERT achieves a dev F1 score of
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),pd.forEach(t),cd.forEach(t),ce=m(o),q=a(o,"P",{});var hd=i(q);ge=s(hd,"Tips:"),hd.forEach(t),R=m(o),Z=a(o,"UL",{});var ga=i(Z);re=a(ga,"LI",{});var md=i(re);Q=s(md,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),md.forEach(t),_e=m(ga),ae=a(ga,"LI",{});var ud=i(ae);S=s(ud,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),ud.forEach(t),ga.forEach(t),pe=m(o),O=a(o,"P",{});var xo=i(O);be=s(xo,"This model was contributed by "),f=a(xo,"A",{href:!0,rel:!0});var fd=i(f);B=s(fd,"vshampor"),fd.forEach(t),Y=s(xo,". The original code can be found "),ve=a(xo,"A",{href:!0,rel:!0});var gd=i(ve);ye=s(gd,"here"),gd.forEach(t),A=s(xo,"."),xo.forEach(t),$e=m(o),ke=a(o,"H2",{class:!0});var _a=i(ke);Te=a(_a,"A",{id:!0,class:!0,href:!0});var _d=i(Te);j=a(_d,"SPAN",{});var bd=i(j);M(I.$$.fragment,bd),bd.forEach(t),_d.forEach(t),Fe=m(_a),Me=a(_a,"SPAN",{});var kd=i(Me);U=s(kd,"MobileBertConfig"),kd.forEach(t),_a.forEach(t),we=m(o),te=a(o,"DIV",{class:!0});var at=i(te);M(oe.$$.fragment,at),Be=m(at),Dt=a(at,"P",{});var Po=i(Dt);Fp=s(Po,"This is the configuration class to store the configuration of a "),Ma=a(Po,"A",{href:!0});var Td=i(Ma);Bp=s(Td,"MobileBertModel"),Td.forEach(t),Ep=s(Po," or a "),$a=a(Po,"A",{href:!0});var vd=i($a);zp=s(vd,"TFMobileBertModel"),vd.forEach(t),xp=s(Po,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.`),Po.forEach(t),Pp=m(at),Lt=a(at,"P",{});var qo=i(Lt);qp=s(qo,"Configuration objects inherit from "),wa=a(qo,"A",{href:!0});var Md=i(wa);Cp=s(Md,"PretrainedConfig"),Md.forEach(t),jp=s(qo,` and can be used to control the model outputs. Read the
documentation from `),ya=a(qo,"A",{href:!0});var $d=i(ya);Np=s($d,"PretrainedConfig"),$d.forEach(t),Sp=s(qo," for more information."),qo.forEach(t),Ap=m(at),M(Co.$$.fragment,at),Op=m(at),qi=a(at,"P",{});var wd=i(qi);Ip=s(wd,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),wd.forEach(t),at.forEach(t),Sd=m(o),Wt=a(o,"H2",{class:!0});var ba=i(Wt);jo=a(ba,"A",{id:!0,class:!0,href:!0});var yd=i(jo);Ci=a(yd,"SPAN",{});var Fd=i(Ci);M(ls.$$.fragment,Fd),Fd.forEach(t),yd.forEach(t),Dp=m(ba),ji=a(ba,"SPAN",{});var Bd=i(ji);Lp=s(Bd,"MobileBertTokenizer"),Bd.forEach(t),ba.forEach(t),Ad=m(o),st=a(o,"DIV",{class:!0});var wt=i(st);M(ds.$$.fragment,wt),Wp=m(wt),Ni=a(wt,"P",{});var Ed=i(Ni);Rp=s(Ed,"Construct a MobileBERT tokenizer."),Ed.forEach(t),Hp=m(wt),No=a(wt,"P",{});var Zn=i(No);Fa=a(Zn,"A",{href:!0});var zd=i(Fa);Qp=s(zd,"MobileBertTokenizer"),zd.forEach(t),Up=s(Zn," is identical to "),Ba=a(Zn,"A",{href:!0});var xd=i(Ba);Vp=s(xd,"BertTokenizer"),xd.forEach(t),Kp=s(Zn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Zn.forEach(t),Gp=m(wt),cs=a(wt,"P",{});var ka=i(cs);Yp=s(ka,"Refer to superclass "),Ea=a(ka,"A",{href:!0});var Pd=i(Ea);Jp=s(Pd,"BertTokenizer"),Pd.forEach(t),Zp=s(ka," for usage examples and documentation concerning parameters."),ka.forEach(t),wt.forEach(t),Od=m(o),Rt=a(o,"H2",{class:!0});var Ta=i(Rt);So=a(Ta,"A",{id:!0,class:!0,href:!0});var qd=i(So);Si=a(qd,"SPAN",{});var Cd=i(Si);M(ps.$$.fragment,Cd),Cd.forEach(t),qd.forEach(t),Xp=m(Ta),Ai=a(Ta,"SPAN",{});var jd=i(Ai);eh=s(jd,"MobileBertTokenizerFast"),jd.forEach(t),Ta.forEach(t),Id=m(o),rt=a(o,"DIV",{class:!0});var yt=i(rt);M(hs.$$.fragment,yt),th=m(yt),ms=a(yt,"P",{});var va=i(ms);oh=s(va,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Oi=a(va,"EM",{});var Nd=i(Oi);nh=s(Nd,"tokenizers"),Nd.forEach(t),sh=s(va," library)."),va.forEach(t),rh=m(yt),Ao=a(yt,"P",{});var Xn=i(Ao);za=a(Xn,"A",{href:!0});var Bk=i(za);ah=s(Bk,"MobileBertTokenizerFast"),Bk.forEach(t),ih=s(Xn," is identical to "),xa=a(Xn,"A",{href:!0});var Ek=i(xa);lh=s(Ek,"BertTokenizerFast"),Ek.forEach(t),dh=s(Xn,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Xn.forEach(t),ch=m(yt),us=a(yt,"P",{});var Mc=i(us);ph=s(Mc,"Refer to superclass "),Pa=a(Mc,"A",{href:!0});var zk=i(Pa);hh=s(zk,"BertTokenizerFast"),zk.forEach(t),mh=s(Mc," for usage examples and documentation concerning parameters."),Mc.forEach(t),yt.forEach(t),Dd=m(o),Ht=a(o,"H2",{class:!0});var $c=i(Ht);Oo=a($c,"A",{id:!0,class:!0,href:!0});var xk=i(Oo);Ii=a(xk,"SPAN",{});var Pk=i(Ii);M(fs.$$.fragment,Pk),Pk.forEach(t),xk.forEach(t),uh=m($c),Di=a($c,"SPAN",{});var qk=i(Di);fh=s(qk,"MobileBert specific outputs"),qk.forEach(t),$c.forEach(t),Ld=m(o),Qt=a(o,"DIV",{class:!0});var wc=i(Qt);M(gs.$$.fragment,wc),gh=m(wc),_s=a(wc,"P",{});var yc=i(_s);_h=s(yc,"Output type of "),qa=a(yc,"A",{href:!0});var Ck=i(qa);bh=s(Ck,"MobileBertForPreTraining"),Ck.forEach(t),kh=s(yc,"."),yc.forEach(t),wc.forEach(t),Wd=m(o),Ut=a(o,"DIV",{class:!0});var Fc=i(Ut);M(bs.$$.fragment,Fc),Th=m(Fc),ks=a(Fc,"P",{});var Bc=i(ks);vh=s(Bc,"Output type of "),Ca=a(Bc,"A",{href:!0});var jk=i(Ca);Mh=s(jk,"TFMobileBertForPreTraining"),jk.forEach(t),$h=s(Bc,"."),Bc.forEach(t),Fc.forEach(t),Rd=m(o),Vt=a(o,"H2",{class:!0});var Ec=i(Vt);Io=a(Ec,"A",{id:!0,class:!0,href:!0});var Nk=i(Io);Li=a(Nk,"SPAN",{});var Sk=i(Li);M(Ts.$$.fragment,Sk),Sk.forEach(t),Nk.forEach(t),wh=m(Ec),Wi=a(Ec,"SPAN",{});var Ak=i(Wi);yh=s(Ak,"MobileBertModel"),Ak.forEach(t),Ec.forEach(t),Hd=m(o),je=a(o,"DIV",{class:!0});var ft=i(je);M(vs.$$.fragment,ft),Fh=m(ft),Ri=a(ft,"P",{});var Ok=i(Ri);Bh=s(Ok,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Ok.forEach(t),Eh=m(ft),Ms=a(ft,"P",{});var zc=i(Ms);zh=s(zc,"This model inherits from "),ja=a(zc,"A",{href:!0});var Ik=i(ja);xh=s(Ik,"PreTrainedModel"),Ik.forEach(t),Ph=s(zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc.forEach(t),qh=m(ft),$s=a(ft,"P",{});var xc=i($s);Ch=s(xc,"This model is also a PyTorch "),ws=a(xc,"A",{href:!0,rel:!0});var Dk=i(ws);jh=s(Dk,"torch.nn.Module"),Dk.forEach(t),Nh=s(xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xc.forEach(t),Sh=m(ft),Hi=a(ft,"P",{});var Lk=i(Hi);ys=a(Lk,"A",{href:!0,rel:!0});var Wk=i(ys);Ah=s(Wk,"https://arxiv.org/pdf/2004.02984.pdf"),Wk.forEach(t),Lk.forEach(t),Oh=m(ft),it=a(ft,"DIV",{class:!0});var es=i(it);M(Fs.$$.fragment,es),Ih=m(es),Kt=a(es,"P",{});var hi=i(Kt);Dh=s(hi,"The "),Na=a(hi,"A",{href:!0});var Rk=i(Na);Lh=s(Rk,"MobileBertModel"),Rk.forEach(t),Wh=s(hi," forward method, overrides the "),Qi=a(hi,"CODE",{});var Hk=i(Qi);Rh=s(Hk,"__call__"),Hk.forEach(t),Hh=s(hi," special method."),hi.forEach(t),Qh=m(es),M(Do.$$.fragment,es),Uh=m(es),M(Lo.$$.fragment,es),es.forEach(t),ft.forEach(t),Qd=m(o),Gt=a(o,"H2",{class:!0});var Pc=i(Gt);Wo=a(Pc,"A",{id:!0,class:!0,href:!0});var Qk=i(Wo);Ui=a(Qk,"SPAN",{});var Uk=i(Ui);M(Bs.$$.fragment,Uk),Uk.forEach(t),Qk.forEach(t),Vh=m(Pc),Vi=a(Pc,"SPAN",{});var Vk=i(Vi);Kh=s(Vk,"MobileBertForPreTraining"),Vk.forEach(t),Pc.forEach(t),Ud=m(o),Re=a(o,"DIV",{class:!0});var Ft=i(Re);M(Es.$$.fragment,Ft),Gh=m(Ft),Yt=a(Ft,"P",{});var mi=i(Yt);Yh=s(mi,"MobileBert Model with two heads on top as done during the pretraining: a "),Ki=a(mi,"CODE",{});var Kk=i(Ki);Jh=s(Kk,"masked language modeling"),Kk.forEach(t),Zh=s(mi,` head and a
`),Gi=a(mi,"CODE",{});var Gk=i(Gi);Xh=s(Gk,"next sentence prediction (classification)"),Gk.forEach(t),em=s(mi," head."),mi.forEach(t),tm=m(Ft),zs=a(Ft,"P",{});var qc=i(zs);om=s(qc,"This model inherits from "),Sa=a(qc,"A",{href:!0});var Yk=i(Sa);nm=s(Yk,"PreTrainedModel"),Yk.forEach(t),sm=s(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),rm=m(Ft),xs=a(Ft,"P",{});var Cc=i(xs);am=s(Cc,"This model is also a PyTorch "),Ps=a(Cc,"A",{href:!0,rel:!0});var Jk=i(Ps);im=s(Jk,"torch.nn.Module"),Jk.forEach(t),lm=s(Cc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cc.forEach(t),dm=m(Ft),lt=a(Ft,"DIV",{class:!0});var ts=i(lt);M(qs.$$.fragment,ts),cm=m(ts),Jt=a(ts,"P",{});var ui=i(Jt);pm=s(ui,"The "),Aa=a(ui,"A",{href:!0});var Zk=i(Aa);hm=s(Zk,"MobileBertForPreTraining"),Zk.forEach(t),mm=s(ui," forward method, overrides the "),Yi=a(ui,"CODE",{});var Xk=i(Yi);um=s(Xk,"__call__"),Xk.forEach(t),fm=s(ui," special method."),ui.forEach(t),gm=m(ts),M(Ro.$$.fragment,ts),_m=m(ts),M(Ho.$$.fragment,ts),ts.forEach(t),Ft.forEach(t),Vd=m(o),Zt=a(o,"H2",{class:!0});var jc=i(Zt);Qo=a(jc,"A",{id:!0,class:!0,href:!0});var e1=i(Qo);Ji=a(e1,"SPAN",{});var t1=i(Ji);M(Cs.$$.fragment,t1),t1.forEach(t),e1.forEach(t),bm=m(jc),Zi=a(jc,"SPAN",{});var o1=i(Zi);km=s(o1,"MobileBertForMaskedLM"),o1.forEach(t),jc.forEach(t),Kd=m(o),He=a(o,"DIV",{class:!0});var Bt=i(He);M(js.$$.fragment,Bt),Tm=m(Bt),Ns=a(Bt,"P",{});var Nc=i(Ns);vm=s(Nc,"MobileBert Model with a "),Xi=a(Nc,"CODE",{});var n1=i(Xi);Mm=s(n1,"language modeling"),n1.forEach(t),$m=s(Nc," head on top."),Nc.forEach(t),wm=m(Bt),Ss=a(Bt,"P",{});var Sc=i(Ss);ym=s(Sc,"This model inherits from "),Oa=a(Sc,"A",{href:!0});var s1=i(Oa);Fm=s(s1,"PreTrainedModel"),s1.forEach(t),Bm=s(Sc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sc.forEach(t),Em=m(Bt),As=a(Bt,"P",{});var Ac=i(As);zm=s(Ac,"This model is also a PyTorch "),Os=a(Ac,"A",{href:!0,rel:!0});var r1=i(Os);xm=s(r1,"torch.nn.Module"),r1.forEach(t),Pm=s(Ac,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ac.forEach(t),qm=m(Bt),Ye=a(Bt,"DIV",{class:!0});var Et=i(Ye);M(Is.$$.fragment,Et),Cm=m(Et),Xt=a(Et,"P",{});var fi=i(Xt);jm=s(fi,"The "),Ia=a(fi,"A",{href:!0});var a1=i(Ia);Nm=s(a1,"MobileBertForMaskedLM"),a1.forEach(t),Sm=s(fi," forward method, overrides the "),el=a(fi,"CODE",{});var i1=i(el);Am=s(i1,"__call__"),i1.forEach(t),Om=s(fi," special method."),fi.forEach(t),Im=m(Et),M(Uo.$$.fragment,Et),Dm=m(Et),M(Vo.$$.fragment,Et),Lm=m(Et),M(Ko.$$.fragment,Et),Et.forEach(t),Bt.forEach(t),Gd=m(o),eo=a(o,"H2",{class:!0});var Oc=i(eo);Go=a(Oc,"A",{id:!0,class:!0,href:!0});var l1=i(Go);tl=a(l1,"SPAN",{});var d1=i(tl);M(Ds.$$.fragment,d1),d1.forEach(t),l1.forEach(t),Wm=m(Oc),ol=a(Oc,"SPAN",{});var c1=i(ol);Rm=s(c1,"MobileBertForNextSentencePrediction"),c1.forEach(t),Oc.forEach(t),Yd=m(o),Qe=a(o,"DIV",{class:!0});var zt=i(Qe);M(Ls.$$.fragment,zt),Hm=m(zt),Ws=a(zt,"P",{});var Ic=i(Ws);Qm=s(Ic,"MobileBert Model with a "),nl=a(Ic,"CODE",{});var p1=i(nl);Um=s(p1,"next sentence prediction (classification)"),p1.forEach(t),Vm=s(Ic," head on top."),Ic.forEach(t),Km=m(zt),Rs=a(zt,"P",{});var Dc=i(Rs);Gm=s(Dc,"This model inherits from "),Da=a(Dc,"A",{href:!0});var h1=i(Da);Ym=s(h1,"PreTrainedModel"),h1.forEach(t),Jm=s(Dc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc.forEach(t),Zm=m(zt),Hs=a(zt,"P",{});var Lc=i(Hs);Xm=s(Lc,"This model is also a PyTorch "),Qs=a(Lc,"A",{href:!0,rel:!0});var m1=i(Qs);eu=s(m1,"torch.nn.Module"),m1.forEach(t),tu=s(Lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lc.forEach(t),ou=m(zt),dt=a(zt,"DIV",{class:!0});var os=i(dt);M(Us.$$.fragment,os),nu=m(os),to=a(os,"P",{});var gi=i(to);su=s(gi,"The "),La=a(gi,"A",{href:!0});var u1=i(La);ru=s(u1,"MobileBertForNextSentencePrediction"),u1.forEach(t),au=s(gi," forward method, overrides the "),sl=a(gi,"CODE",{});var f1=i(sl);iu=s(f1,"__call__"),f1.forEach(t),lu=s(gi," special method."),gi.forEach(t),du=m(os),M(Yo.$$.fragment,os),cu=m(os),M(Jo.$$.fragment,os),os.forEach(t),zt.forEach(t),Jd=m(o),oo=a(o,"H2",{class:!0});var Wc=i(oo);Zo=a(Wc,"A",{id:!0,class:!0,href:!0});var g1=i(Zo);rl=a(g1,"SPAN",{});var _1=i(rl);M(Vs.$$.fragment,_1),_1.forEach(t),g1.forEach(t),pu=m(Wc),al=a(Wc,"SPAN",{});var b1=i(al);hu=s(b1,"MobileBertForSequenceClassification"),b1.forEach(t),Wc.forEach(t),Zd=m(o),Ue=a(o,"DIV",{class:!0});var xt=i(Ue);M(Ks.$$.fragment,xt),mu=m(xt),il=a(xt,"P",{});var k1=i(il);uu=s(k1,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),k1.forEach(t),fu=m(xt),Gs=a(xt,"P",{});var Rc=i(Gs);gu=s(Rc,"This model inherits from "),Wa=a(Rc,"A",{href:!0});var T1=i(Wa);_u=s(T1,"PreTrainedModel"),T1.forEach(t),bu=s(Rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rc.forEach(t),ku=m(xt),Ys=a(xt,"P",{});var Hc=i(Ys);Tu=s(Hc,"This model is also a PyTorch "),Js=a(Hc,"A",{href:!0,rel:!0});var v1=i(Js);vu=s(v1,"torch.nn.Module"),v1.forEach(t),Mu=s(Hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc.forEach(t),$u=m(xt),Ce=a(xt,"DIV",{class:!0});var nt=i(Ce);M(Zs.$$.fragment,nt),wu=m(nt),no=a(nt,"P",{});var _i=i(no);yu=s(_i,"The "),Ra=a(_i,"A",{href:!0});var M1=i(Ra);Fu=s(M1,"MobileBertForSequenceClassification"),M1.forEach(t),Bu=s(_i," forward method, overrides the "),ll=a(_i,"CODE",{});var $1=i(ll);Eu=s($1,"__call__"),$1.forEach(t),zu=s(_i," special method."),_i.forEach(t),xu=m(nt),M(Xo.$$.fragment,nt),Pu=m(nt),M(en.$$.fragment,nt),qu=m(nt),M(tn.$$.fragment,nt),Cu=m(nt),M(on.$$.fragment,nt),ju=m(nt),M(nn.$$.fragment,nt),nt.forEach(t),xt.forEach(t),Xd=m(o),so=a(o,"H2",{class:!0});var Qc=i(so);sn=a(Qc,"A",{id:!0,class:!0,href:!0});var w1=i(sn);dl=a(w1,"SPAN",{});var y1=i(dl);M(Xs.$$.fragment,y1),y1.forEach(t),w1.forEach(t),Nu=m(Qc),cl=a(Qc,"SPAN",{});var F1=i(cl);Su=s(F1,"MobileBertForMultipleChoice"),F1.forEach(t),Qc.forEach(t),ec=m(o),Ve=a(o,"DIV",{class:!0});var Pt=i(Ve);M(er.$$.fragment,Pt),Au=m(Pt),pl=a(Pt,"P",{});var B1=i(pl);Ou=s(B1,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),B1.forEach(t),Iu=m(Pt),tr=a(Pt,"P",{});var Uc=i(tr);Du=s(Uc,"This model inherits from "),Ha=a(Uc,"A",{href:!0});var E1=i(Ha);Lu=s(E1,"PreTrainedModel"),E1.forEach(t),Wu=s(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Ru=m(Pt),or=a(Pt,"P",{});var Vc=i(or);Hu=s(Vc,"This model is also a PyTorch "),nr=a(Vc,"A",{href:!0,rel:!0});var z1=i(nr);Qu=s(z1,"torch.nn.Module"),z1.forEach(t),Uu=s(Vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vc.forEach(t),Vu=m(Pt),ct=a(Pt,"DIV",{class:!0});var ns=i(ct);M(sr.$$.fragment,ns),Ku=m(ns),ro=a(ns,"P",{});var bi=i(ro);Gu=s(bi,"The "),Qa=a(bi,"A",{href:!0});var x1=i(Qa);Yu=s(x1,"MobileBertForMultipleChoice"),x1.forEach(t),Ju=s(bi," forward method, overrides the "),hl=a(bi,"CODE",{});var P1=i(hl);Zu=s(P1,"__call__"),P1.forEach(t),Xu=s(bi," special method."),bi.forEach(t),ef=m(ns),M(rn.$$.fragment,ns),tf=m(ns),M(an.$$.fragment,ns),ns.forEach(t),Pt.forEach(t),tc=m(o),ao=a(o,"H2",{class:!0});var Kc=i(ao);ln=a(Kc,"A",{id:!0,class:!0,href:!0});var q1=i(ln);ml=a(q1,"SPAN",{});var C1=i(ml);M(rr.$$.fragment,C1),C1.forEach(t),q1.forEach(t),of=m(Kc),ul=a(Kc,"SPAN",{});var j1=i(ul);nf=s(j1,"MobileBertForTokenClassification"),j1.forEach(t),Kc.forEach(t),oc=m(o),Ke=a(o,"DIV",{class:!0});var qt=i(Ke);M(ar.$$.fragment,qt),sf=m(qt),fl=a(qt,"P",{});var N1=i(fl);rf=s(N1,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),N1.forEach(t),af=m(qt),ir=a(qt,"P",{});var Gc=i(ir);lf=s(Gc,"This model inherits from "),Ua=a(Gc,"A",{href:!0});var S1=i(Ua);df=s(S1,"PreTrainedModel"),S1.forEach(t),cf=s(Gc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc.forEach(t),pf=m(qt),lr=a(qt,"P",{});var Yc=i(lr);hf=s(Yc,"This model is also a PyTorch "),dr=a(Yc,"A",{href:!0,rel:!0});var A1=i(dr);mf=s(A1,"torch.nn.Module"),A1.forEach(t),uf=s(Yc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yc.forEach(t),ff=m(qt),Je=a(qt,"DIV",{class:!0});var Ct=i(Je);M(cr.$$.fragment,Ct),gf=m(Ct),io=a(Ct,"P",{});var ki=i(io);_f=s(ki,"The "),Va=a(ki,"A",{href:!0});var O1=i(Va);bf=s(O1,"MobileBertForTokenClassification"),O1.forEach(t),kf=s(ki," forward method, overrides the "),gl=a(ki,"CODE",{});var I1=i(gl);Tf=s(I1,"__call__"),I1.forEach(t),vf=s(ki," special method."),ki.forEach(t),Mf=m(Ct),M(dn.$$.fragment,Ct),$f=m(Ct),M(cn.$$.fragment,Ct),wf=m(Ct),M(pn.$$.fragment,Ct),Ct.forEach(t),qt.forEach(t),nc=m(o),lo=a(o,"H2",{class:!0});var Jc=i(lo);hn=a(Jc,"A",{id:!0,class:!0,href:!0});var D1=i(hn);_l=a(D1,"SPAN",{});var L1=i(_l);M(pr.$$.fragment,L1),L1.forEach(t),D1.forEach(t),yf=m(Jc),bl=a(Jc,"SPAN",{});var W1=i(bl);Ff=s(W1,"MobileBertForQuestionAnswering"),W1.forEach(t),Jc.forEach(t),sc=m(o),Ge=a(o,"DIV",{class:!0});var jt=i(Ge);M(hr.$$.fragment,jt),Bf=m(jt),co=a(jt,"P",{});var Ti=i(co);Ef=s(Ti,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),kl=a(Ti,"CODE",{});var R1=i(kl);zf=s(R1,"span start logits"),R1.forEach(t),xf=s(Ti," and "),Tl=a(Ti,"CODE",{});var H1=i(Tl);Pf=s(H1,"span end logits"),H1.forEach(t),qf=s(Ti,")."),Ti.forEach(t),Cf=m(jt),mr=a(jt,"P",{});var Zc=i(mr);jf=s(Zc,"This model inherits from "),Ka=a(Zc,"A",{href:!0});var Q1=i(Ka);Nf=s(Q1,"PreTrainedModel"),Q1.forEach(t),Sf=s(Zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zc.forEach(t),Af=m(jt),ur=a(jt,"P",{});var Xc=i(ur);Of=s(Xc,"This model is also a PyTorch "),fr=a(Xc,"A",{href:!0,rel:!0});var U1=i(fr);If=s(U1,"torch.nn.Module"),U1.forEach(t),Df=s(Xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc.forEach(t),Lf=m(jt),Ze=a(jt,"DIV",{class:!0});var Nt=i(Ze);M(gr.$$.fragment,Nt),Wf=m(Nt),po=a(Nt,"P",{});var vi=i(po);Rf=s(vi,"The "),Ga=a(vi,"A",{href:!0});var V1=i(Ga);Hf=s(V1,"MobileBertForQuestionAnswering"),V1.forEach(t),Qf=s(vi," forward method, overrides the "),vl=a(vi,"CODE",{});var K1=i(vl);Uf=s(K1,"__call__"),K1.forEach(t),Vf=s(vi," special method."),vi.forEach(t),Kf=m(Nt),M(mn.$$.fragment,Nt),Gf=m(Nt),M(un.$$.fragment,Nt),Yf=m(Nt),M(fn.$$.fragment,Nt),Nt.forEach(t),jt.forEach(t),rc=m(o),ho=a(o,"H2",{class:!0});var ep=i(ho);gn=a(ep,"A",{id:!0,class:!0,href:!0});var G1=i(gn);Ml=a(G1,"SPAN",{});var Y1=i(Ml);M(_r.$$.fragment,Y1),Y1.forEach(t),G1.forEach(t),Jf=m(ep),$l=a(ep,"SPAN",{});var J1=i($l);Zf=s(J1,"TFMobileBertModel"),J1.forEach(t),ep.forEach(t),ac=m(o),Ne=a(o,"DIV",{class:!0});var gt=i(Ne);M(br.$$.fragment,gt),Xf=m(gt),wl=a(gt,"P",{});var Z1=i(wl);eg=s(Z1,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Z1.forEach(t),tg=m(gt),kr=a(gt,"P",{});var tp=i(kr);og=s(tp,"This model inherits from "),Ya=a(tp,"A",{href:!0});var X1=i(Ya);ng=s(X1,"TFPreTrainedModel"),X1.forEach(t),sg=s(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(t),rg=m(gt),Tr=a(gt,"P",{});var op=i(Tr);ag=s(op,"This model is also a "),vr=a(op,"A",{href:!0,rel:!0});var eT=i(vr);ig=s(eT,"tf.keras.Model"),eT.forEach(t),lg=s(op,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),op.forEach(t),dg=m(gt),M(_n.$$.fragment,gt),cg=m(gt),pt=a(gt,"DIV",{class:!0});var ss=i(pt);M(Mr.$$.fragment,ss),pg=m(ss),mo=a(ss,"P",{});var Mi=i(mo);hg=s(Mi,"The "),Ja=a(Mi,"A",{href:!0});var tT=i(Ja);mg=s(tT,"TFMobileBertModel"),tT.forEach(t),ug=s(Mi," forward method, overrides the "),yl=a(Mi,"CODE",{});var oT=i(yl);fg=s(oT,"__call__"),oT.forEach(t),gg=s(Mi," special method."),Mi.forEach(t),_g=m(ss),M(bn.$$.fragment,ss),bg=m(ss),M(kn.$$.fragment,ss),ss.forEach(t),gt.forEach(t),ic=m(o),uo=a(o,"H2",{class:!0});var np=i(uo);Tn=a(np,"A",{id:!0,class:!0,href:!0});var nT=i(Tn);Fl=a(nT,"SPAN",{});var sT=i(Fl);M($r.$$.fragment,sT),sT.forEach(t),nT.forEach(t),kg=m(np),Bl=a(np,"SPAN",{});var rT=i(Bl);Tg=s(rT,"TFMobileBertForPreTraining"),rT.forEach(t),np.forEach(t),lc=m(o),Se=a(o,"DIV",{class:!0});var _t=i(Se);M(wr.$$.fragment,_t),vg=m(_t),fo=a(_t,"P",{});var $i=i(fo);Mg=s($i,"MobileBert Model with two heads on top as done during the pretraining: a "),El=a($i,"CODE",{});var aT=i(El);$g=s(aT,"masked language modeling"),aT.forEach(t),wg=s($i,` head and a
`),zl=a($i,"CODE",{});var iT=i(zl);yg=s(iT,"next sentence prediction (classification)"),iT.forEach(t),Fg=s($i," head."),$i.forEach(t),Bg=m(_t),yr=a(_t,"P",{});var sp=i(yr);Eg=s(sp,"This model inherits from "),Za=a(sp,"A",{href:!0});var lT=i(Za);zg=s(lT,"TFPreTrainedModel"),lT.forEach(t),xg=s(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(t),Pg=m(_t),Fr=a(_t,"P",{});var rp=i(Fr);qg=s(rp,"This model is also a "),Br=a(rp,"A",{href:!0,rel:!0});var dT=i(Br);Cg=s(dT,"tf.keras.Model"),dT.forEach(t),jg=s(rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rp.forEach(t),Ng=m(_t),M(vn.$$.fragment,_t),Sg=m(_t),ht=a(_t,"DIV",{class:!0});var rs=i(ht);M(Er.$$.fragment,rs),Ag=m(rs),go=a(rs,"P",{});var wi=i(go);Og=s(wi,"The "),Xa=a(wi,"A",{href:!0});var cT=i(Xa);Ig=s(cT,"TFMobileBertForPreTraining"),cT.forEach(t),Dg=s(wi," forward method, overrides the "),xl=a(wi,"CODE",{});var pT=i(xl);Lg=s(pT,"__call__"),pT.forEach(t),Wg=s(wi," special method."),wi.forEach(t),Rg=m(rs),M(Mn.$$.fragment,rs),Hg=m(rs),M($n.$$.fragment,rs),rs.forEach(t),_t.forEach(t),dc=m(o),_o=a(o,"H2",{class:!0});var ap=i(_o);wn=a(ap,"A",{id:!0,class:!0,href:!0});var hT=i(wn);Pl=a(hT,"SPAN",{});var mT=i(Pl);M(zr.$$.fragment,mT),mT.forEach(t),hT.forEach(t),Qg=m(ap),ql=a(ap,"SPAN",{});var uT=i(ql);Ug=s(uT,"TFMobileBertForMaskedLM"),uT.forEach(t),ap.forEach(t),cc=m(o),Ae=a(o,"DIV",{class:!0});var bt=i(Ae);M(xr.$$.fragment,bt),Vg=m(bt),Pr=a(bt,"P",{});var ip=i(Pr);Kg=s(ip,"MobileBert Model with a "),Cl=a(ip,"CODE",{});var fT=i(Cl);Gg=s(fT,"language modeling"),fT.forEach(t),Yg=s(ip," head on top."),ip.forEach(t),Jg=m(bt),qr=a(bt,"P",{});var lp=i(qr);Zg=s(lp,"This model inherits from "),ei=a(lp,"A",{href:!0});var gT=i(ei);Xg=s(gT,"TFPreTrainedModel"),gT.forEach(t),e_=s(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),t_=m(bt),Cr=a(bt,"P",{});var dp=i(Cr);o_=s(dp,"This model is also a "),jr=a(dp,"A",{href:!0,rel:!0});var _T=i(jr);n_=s(_T,"tf.keras.Model"),_T.forEach(t),s_=s(dp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dp.forEach(t),r_=m(bt),M(yn.$$.fragment,bt),a_=m(bt),Xe=a(bt,"DIV",{class:!0});var St=i(Xe);M(Nr.$$.fragment,St),i_=m(St),bo=a(St,"P",{});var yi=i(bo);l_=s(yi,"The "),ti=a(yi,"A",{href:!0});var bT=i(ti);d_=s(bT,"TFMobileBertForMaskedLM"),bT.forEach(t),c_=s(yi," forward method, overrides the "),jl=a(yi,"CODE",{});var kT=i(jl);p_=s(kT,"__call__"),kT.forEach(t),h_=s(yi," special method."),yi.forEach(t),m_=m(St),M(Fn.$$.fragment,St),u_=m(St),M(Bn.$$.fragment,St),f_=m(St),M(En.$$.fragment,St),St.forEach(t),bt.forEach(t),pc=m(o),ko=a(o,"H2",{class:!0});var cp=i(ko);zn=a(cp,"A",{id:!0,class:!0,href:!0});var TT=i(zn);Nl=a(TT,"SPAN",{});var vT=i(Nl);M(Sr.$$.fragment,vT),vT.forEach(t),TT.forEach(t),g_=m(cp),Sl=a(cp,"SPAN",{});var MT=i(Sl);__=s(MT,"TFMobileBertForNextSentencePrediction"),MT.forEach(t),cp.forEach(t),hc=m(o),Oe=a(o,"DIV",{class:!0});var kt=i(Oe);M(Ar.$$.fragment,kt),b_=m(kt),Or=a(kt,"P",{});var pp=i(Or);k_=s(pp,"MobileBert Model with a "),Al=a(pp,"CODE",{});var $T=i(Al);T_=s($T,"next sentence prediction (classification)"),$T.forEach(t),v_=s(pp," head on top."),pp.forEach(t),M_=m(kt),Ir=a(kt,"P",{});var hp=i(Ir);$_=s(hp,"This model inherits from "),oi=a(hp,"A",{href:!0});var wT=i(oi);w_=s(wT,"TFPreTrainedModel"),wT.forEach(t),y_=s(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),F_=m(kt),Dr=a(kt,"P",{});var mp=i(Dr);B_=s(mp,"This model is also a "),Lr=a(mp,"A",{href:!0,rel:!0});var yT=i(Lr);E_=s(yT,"tf.keras.Model"),yT.forEach(t),z_=s(mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mp.forEach(t),x_=m(kt),M(xn.$$.fragment,kt),P_=m(kt),mt=a(kt,"DIV",{class:!0});var as=i(mt);M(Wr.$$.fragment,as),q_=m(as),To=a(as,"P",{});var Fi=i(To);C_=s(Fi,"The "),ni=a(Fi,"A",{href:!0});var FT=i(ni);j_=s(FT,"TFMobileBertForNextSentencePrediction"),FT.forEach(t),N_=s(Fi," forward method, overrides the "),Ol=a(Fi,"CODE",{});var BT=i(Ol);S_=s(BT,"__call__"),BT.forEach(t),A_=s(Fi," special method."),Fi.forEach(t),O_=m(as),M(Pn.$$.fragment,as),I_=m(as),M(qn.$$.fragment,as),as.forEach(t),kt.forEach(t),mc=m(o),vo=a(o,"H2",{class:!0});var up=i(vo);Cn=a(up,"A",{id:!0,class:!0,href:!0});var ET=i(Cn);Il=a(ET,"SPAN",{});var zT=i(Il);M(Rr.$$.fragment,zT),zT.forEach(t),ET.forEach(t),D_=m(up),Dl=a(up,"SPAN",{});var xT=i(Dl);L_=s(xT,"TFMobileBertForSequenceClassification"),xT.forEach(t),up.forEach(t),uc=m(o),Ie=a(o,"DIV",{class:!0});var Tt=i(Ie);M(Hr.$$.fragment,Tt),W_=m(Tt),Ll=a(Tt,"P",{});var PT=i(Ll);R_=s(PT,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),PT.forEach(t),H_=m(Tt),Qr=a(Tt,"P",{});var fp=i(Qr);Q_=s(fp,"This model inherits from "),si=a(fp,"A",{href:!0});var qT=i(si);U_=s(qT,"TFPreTrainedModel"),qT.forEach(t),V_=s(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),K_=m(Tt),Ur=a(Tt,"P",{});var gp=i(Ur);G_=s(gp,"This model is also a "),Vr=a(gp,"A",{href:!0,rel:!0});var CT=i(Vr);Y_=s(CT,"tf.keras.Model"),CT.forEach(t),J_=s(gp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gp.forEach(t),Z_=m(Tt),M(jn.$$.fragment,Tt),X_=m(Tt),et=a(Tt,"DIV",{class:!0});var At=i(et);M(Kr.$$.fragment,At),eb=m(At),Mo=a(At,"P",{});var Bi=i(Mo);tb=s(Bi,"The "),ri=a(Bi,"A",{href:!0});var jT=i(ri);ob=s(jT,"TFMobileBertForSequenceClassification"),jT.forEach(t),nb=s(Bi," forward method, overrides the "),Wl=a(Bi,"CODE",{});var NT=i(Wl);sb=s(NT,"__call__"),NT.forEach(t),rb=s(Bi," special method."),Bi.forEach(t),ab=m(At),M(Nn.$$.fragment,At),ib=m(At),M(Sn.$$.fragment,At),lb=m(At),M(An.$$.fragment,At),At.forEach(t),Tt.forEach(t),fc=m(o),$o=a(o,"H2",{class:!0});var _p=i($o);On=a(_p,"A",{id:!0,class:!0,href:!0});var ST=i(On);Rl=a(ST,"SPAN",{});var AT=i(Rl);M(Gr.$$.fragment,AT),AT.forEach(t),ST.forEach(t),db=m(_p),Hl=a(_p,"SPAN",{});var OT=i(Hl);cb=s(OT,"TFMobileBertForMultipleChoice"),OT.forEach(t),_p.forEach(t),gc=m(o),De=a(o,"DIV",{class:!0});var vt=i(De);M(Yr.$$.fragment,vt),pb=m(vt),Ql=a(vt,"P",{});var IT=i(Ql);hb=s(IT,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),IT.forEach(t),mb=m(vt),Jr=a(vt,"P",{});var bp=i(Jr);ub=s(bp,"This model inherits from "),ai=a(bp,"A",{href:!0});var DT=i(ai);fb=s(DT,"TFPreTrainedModel"),DT.forEach(t),gb=s(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),_b=m(vt),Zr=a(vt,"P",{});var kp=i(Zr);bb=s(kp,"This model is also a "),Xr=a(kp,"A",{href:!0,rel:!0});var LT=i(Xr);kb=s(LT,"tf.keras.Model"),LT.forEach(t),Tb=s(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),vb=m(vt),M(In.$$.fragment,vt),Mb=m(vt),ut=a(vt,"DIV",{class:!0});var is=i(ut);M(ea.$$.fragment,is),$b=m(is),wo=a(is,"P",{});var Ei=i(wo);wb=s(Ei,"The "),ii=a(Ei,"A",{href:!0});var WT=i(ii);yb=s(WT,"TFMobileBertForMultipleChoice"),WT.forEach(t),Fb=s(Ei," forward method, overrides the "),Ul=a(Ei,"CODE",{});var RT=i(Ul);Bb=s(RT,"__call__"),RT.forEach(t),Eb=s(Ei," special method."),Ei.forEach(t),zb=m(is),M(Dn.$$.fragment,is),xb=m(is),M(Ln.$$.fragment,is),is.forEach(t),vt.forEach(t),_c=m(o),yo=a(o,"H2",{class:!0});var Tp=i(yo);Wn=a(Tp,"A",{id:!0,class:!0,href:!0});var HT=i(Wn);Vl=a(HT,"SPAN",{});var QT=i(Vl);M(ta.$$.fragment,QT),QT.forEach(t),HT.forEach(t),Pb=m(Tp),Kl=a(Tp,"SPAN",{});var UT=i(Kl);qb=s(UT,"TFMobileBertForTokenClassification"),UT.forEach(t),Tp.forEach(t),bc=m(o),Le=a(o,"DIV",{class:!0});var Mt=i(Le);M(oa.$$.fragment,Mt),Cb=m(Mt),Gl=a(Mt,"P",{});var VT=i(Gl);jb=s(VT,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),VT.forEach(t),Nb=m(Mt),na=a(Mt,"P",{});var vp=i(na);Sb=s(vp,"This model inherits from "),li=a(vp,"A",{href:!0});var KT=i(li);Ab=s(KT,"TFPreTrainedModel"),KT.forEach(t),Ob=s(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(t),Ib=m(Mt),sa=a(Mt,"P",{});var Mp=i(sa);Db=s(Mp,"This model is also a "),ra=a(Mp,"A",{href:!0,rel:!0});var GT=i(ra);Lb=s(GT,"tf.keras.Model"),GT.forEach(t),Wb=s(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),Rb=m(Mt),M(Rn.$$.fragment,Mt),Hb=m(Mt),tt=a(Mt,"DIV",{class:!0});var Ot=i(tt);M(aa.$$.fragment,Ot),Qb=m(Ot),Fo=a(Ot,"P",{});var zi=i(Fo);Ub=s(zi,"The "),di=a(zi,"A",{href:!0});var YT=i(di);Vb=s(YT,"TFMobileBertForTokenClassification"),YT.forEach(t),Kb=s(zi," forward method, overrides the "),Yl=a(zi,"CODE",{});var JT=i(Yl);Gb=s(JT,"__call__"),JT.forEach(t),Yb=s(zi," special method."),zi.forEach(t),Jb=m(Ot),M(Hn.$$.fragment,Ot),Zb=m(Ot),M(Qn.$$.fragment,Ot),Xb=m(Ot),M(Un.$$.fragment,Ot),Ot.forEach(t),Mt.forEach(t),kc=m(o),Bo=a(o,"H2",{class:!0});var $p=i(Bo);Vn=a($p,"A",{id:!0,class:!0,href:!0});var ZT=i(Vn);Jl=a(ZT,"SPAN",{});var XT=i(Jl);M(ia.$$.fragment,XT),XT.forEach(t),ZT.forEach(t),ek=m($p),Zl=a($p,"SPAN",{});var ev=i(Zl);tk=s(ev,"TFMobileBertForQuestionAnswering"),ev.forEach(t),$p.forEach(t),Tc=m(o),We=a(o,"DIV",{class:!0});var $t=i(We);M(la.$$.fragment,$t),ok=m($t),Eo=a($t,"P",{});var xi=i(Eo);nk=s(xi,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=a(xi,"CODE",{});var tv=i(Xl);sk=s(tv,"span start logits"),tv.forEach(t),rk=s(xi," and "),ed=a(xi,"CODE",{});var ov=i(ed);ak=s(ov,"span end logits"),ov.forEach(t),ik=s(xi,")."),xi.forEach(t),lk=m($t),da=a($t,"P",{});var wp=i(da);dk=s(wp,"This model inherits from "),ci=a(wp,"A",{href:!0});var nv=i(ci);ck=s(nv,"TFPreTrainedModel"),nv.forEach(t),pk=s(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),hk=m($t),ca=a($t,"P",{});var yp=i(ca);mk=s(yp,"This model is also a "),pa=a(yp,"A",{href:!0,rel:!0});var sv=i(pa);uk=s(sv,"tf.keras.Model"),sv.forEach(t),fk=s(yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yp.forEach(t),gk=m($t),M(Kn.$$.fragment,$t),_k=m($t),ot=a($t,"DIV",{class:!0});var It=i(ot);M(ha.$$.fragment,It),bk=m(It),zo=a(It,"P",{});var Pi=i(zo);kk=s(Pi,"The "),pi=a(Pi,"A",{href:!0});var rv=i(pi);Tk=s(rv,"TFMobileBertForQuestionAnswering"),rv.forEach(t),vk=s(Pi," forward method, overrides the "),td=a(Pi,"CODE",{});var av=i(td);Mk=s(av,"__call__"),av.forEach(t),$k=s(Pi," special method."),Pi.forEach(t),wk=m(It),M(Gn.$$.fragment,It),yk=m(It),M(Yn.$$.fragment,It),Fk=m(It),M(Jn.$$.fragment,It),It.forEach(t),$t.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(cM)),b(p,"id","mobilebert"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#mobilebert"),b(c,"class","relative group"),b(J,"id","overview"),b(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(J,"href","#overview"),b(x,"class","relative group"),b(ee,"href","https://arxiv.org/abs/2004.02984"),b(ee,"rel","nofollow"),b(f,"href","https://huggingface.co/vshampor"),b(f,"rel","nofollow"),b(ve,"href","https://github.com/google-research/mobilebert"),b(ve,"rel","nofollow"),b(Te,"id","transformers.MobileBertConfig"),b(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Te,"href","#transformers.MobileBertConfig"),b(ke,"class","relative group"),b(Ma,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertModel"),b($a,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(wa,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),b(ya,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jo,"id","transformers.MobileBertTokenizer"),b(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(jo,"href","#transformers.MobileBertTokenizer"),b(Wt,"class","relative group"),b(Fa,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizer"),b(Ba,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer"),b(Ea,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer"),b(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(So,"id","transformers.MobileBertTokenizerFast"),b(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(So,"href","#transformers.MobileBertTokenizerFast"),b(Rt,"class","relative group"),b(za,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertTokenizerFast"),b(xa,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizerFast"),b(Pa,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizerFast"),b(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oo,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Oo,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Ht,"class","relative group"),b(qa,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ca,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Io,"id","transformers.MobileBertModel"),b(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Io,"href","#transformers.MobileBertModel"),b(Vt,"class","relative group"),b(ja,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ws,"rel","nofollow"),b(ys,"href","https://arxiv.org/pdf/2004.02984.pdf"),b(ys,"rel","nofollow"),b(Na,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertModel"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wo,"id","transformers.MobileBertForPreTraining"),b(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wo,"href","#transformers.MobileBertForPreTraining"),b(Gt,"class","relative group"),b(Sa,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ps,"rel","nofollow"),b(Aa,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qo,"id","transformers.MobileBertForMaskedLM"),b(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Qo,"href","#transformers.MobileBertForMaskedLM"),b(Zt,"class","relative group"),b(Oa,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Os,"rel","nofollow"),b(Ia,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Go,"id","transformers.MobileBertForNextSentencePrediction"),b(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Go,"href","#transformers.MobileBertForNextSentencePrediction"),b(eo,"class","relative group"),b(Da,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Qs,"rel","nofollow"),b(La,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zo,"id","transformers.MobileBertForSequenceClassification"),b(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Zo,"href","#transformers.MobileBertForSequenceClassification"),b(oo,"class","relative group"),b(Wa,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Js,"rel","nofollow"),b(Ra,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),b(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(sn,"id","transformers.MobileBertForMultipleChoice"),b(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(sn,"href","#transformers.MobileBertForMultipleChoice"),b(so,"class","relative group"),b(Ha,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(nr,"rel","nofollow"),b(Qa,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ln,"id","transformers.MobileBertForTokenClassification"),b(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ln,"href","#transformers.MobileBertForTokenClassification"),b(ao,"class","relative group"),b(Ua,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(dr,"rel","nofollow"),b(Va,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(hn,"id","transformers.MobileBertForQuestionAnswering"),b(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(hn,"href","#transformers.MobileBertForQuestionAnswering"),b(lo,"class","relative group"),b(Ka,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),b(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(fr,"rel","nofollow"),b(Ga,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(gn,"id","transformers.TFMobileBertModel"),b(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(gn,"href","#transformers.TFMobileBertModel"),b(ho,"class","relative group"),b(Ya,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(vr,"rel","nofollow"),b(Ja,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Tn,"id","transformers.TFMobileBertForPreTraining"),b(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Tn,"href","#transformers.TFMobileBertForPreTraining"),b(uo,"class","relative group"),b(Za,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Br,"rel","nofollow"),b(Xa,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(wn,"id","transformers.TFMobileBertForMaskedLM"),b(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(wn,"href","#transformers.TFMobileBertForMaskedLM"),b(_o,"class","relative group"),b(ei,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(jr,"rel","nofollow"),b(ti,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(zn,"id","transformers.TFMobileBertForNextSentencePrediction"),b(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(zn,"href","#transformers.TFMobileBertForNextSentencePrediction"),b(ko,"class","relative group"),b(oi,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Lr,"rel","nofollow"),b(ni,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),b(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Cn,"id","transformers.TFMobileBertForSequenceClassification"),b(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Cn,"href","#transformers.TFMobileBertForSequenceClassification"),b(vo,"class","relative group"),b(si,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Vr,"rel","nofollow"),b(ri,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(On,"id","transformers.TFMobileBertForMultipleChoice"),b(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(On,"href","#transformers.TFMobileBertForMultipleChoice"),b($o,"class","relative group"),b(ai,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Xr,"rel","nofollow"),b(ii,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),b(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wn,"id","transformers.TFMobileBertForTokenClassification"),b(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wn,"href","#transformers.TFMobileBertForTokenClassification"),b(yo,"class","relative group"),b(li,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(ra,"rel","nofollow"),b(di,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Vn,"id","transformers.TFMobileBertForQuestionAnswering"),b(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Vn,"href","#transformers.TFMobileBertForQuestionAnswering"),b(Bo,"class","relative group"),b(ci,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),b(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(pa,"rel","nofollow"),b(pi,"href","/docs/transformers/pr_16919/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),g(o,_,T),g(o,c,T),e(c,p),e(p,k),$(l,k,null),e(c,u),e(c,z),e(z,he),g(o,K,T),g(o,x,T),e(x,J),e(J,D),$(X,D,null),e(x,me),e(x,L),e(L,ue),g(o,le,T),g(o,V,T),e(V,N),e(V,ee),e(ee,G),e(V,P),g(o,C,T),g(o,ne,T),e(ne,H),g(o,de,T),g(o,se,T),e(se,W),e(W,fe),g(o,ce,T),g(o,q,T),e(q,ge),g(o,R,T),g(o,Z,T),e(Z,re),e(re,Q),e(Z,_e),e(Z,ae),e(ae,S),g(o,pe,T),g(o,O,T),e(O,be),e(O,f),e(f,B),e(O,Y),e(O,ve),e(ve,ye),e(O,A),g(o,$e,T),g(o,ke,T),e(ke,Te),e(Te,j),$(I,j,null),e(ke,Fe),e(ke,Me),e(Me,U),g(o,we,T),g(o,te,T),$(oe,te,null),e(te,Be),e(te,Dt),e(Dt,Fp),e(Dt,Ma),e(Ma,Bp),e(Dt,Ep),e(Dt,$a),e($a,zp),e(Dt,xp),e(te,Pp),e(te,Lt),e(Lt,qp),e(Lt,wa),e(wa,Cp),e(Lt,jp),e(Lt,ya),e(ya,Np),e(Lt,Sp),e(te,Ap),$(Co,te,null),e(te,Op),e(te,qi),e(qi,Ip),g(o,Sd,T),g(o,Wt,T),e(Wt,jo),e(jo,Ci),$(ls,Ci,null),e(Wt,Dp),e(Wt,ji),e(ji,Lp),g(o,Ad,T),g(o,st,T),$(ds,st,null),e(st,Wp),e(st,Ni),e(Ni,Rp),e(st,Hp),e(st,No),e(No,Fa),e(Fa,Qp),e(No,Up),e(No,Ba),e(Ba,Vp),e(No,Kp),e(st,Gp),e(st,cs),e(cs,Yp),e(cs,Ea),e(Ea,Jp),e(cs,Zp),g(o,Od,T),g(o,Rt,T),e(Rt,So),e(So,Si),$(ps,Si,null),e(Rt,Xp),e(Rt,Ai),e(Ai,eh),g(o,Id,T),g(o,rt,T),$(hs,rt,null),e(rt,th),e(rt,ms),e(ms,oh),e(ms,Oi),e(Oi,nh),e(ms,sh),e(rt,rh),e(rt,Ao),e(Ao,za),e(za,ah),e(Ao,ih),e(Ao,xa),e(xa,lh),e(Ao,dh),e(rt,ch),e(rt,us),e(us,ph),e(us,Pa),e(Pa,hh),e(us,mh),g(o,Dd,T),g(o,Ht,T),e(Ht,Oo),e(Oo,Ii),$(fs,Ii,null),e(Ht,uh),e(Ht,Di),e(Di,fh),g(o,Ld,T),g(o,Qt,T),$(gs,Qt,null),e(Qt,gh),e(Qt,_s),e(_s,_h),e(_s,qa),e(qa,bh),e(_s,kh),g(o,Wd,T),g(o,Ut,T),$(bs,Ut,null),e(Ut,Th),e(Ut,ks),e(ks,vh),e(ks,Ca),e(Ca,Mh),e(ks,$h),g(o,Rd,T),g(o,Vt,T),e(Vt,Io),e(Io,Li),$(Ts,Li,null),e(Vt,wh),e(Vt,Wi),e(Wi,yh),g(o,Hd,T),g(o,je,T),$(vs,je,null),e(je,Fh),e(je,Ri),e(Ri,Bh),e(je,Eh),e(je,Ms),e(Ms,zh),e(Ms,ja),e(ja,xh),e(Ms,Ph),e(je,qh),e(je,$s),e($s,Ch),e($s,ws),e(ws,jh),e($s,Nh),e(je,Sh),e(je,Hi),e(Hi,ys),e(ys,Ah),e(je,Oh),e(je,it),$(Fs,it,null),e(it,Ih),e(it,Kt),e(Kt,Dh),e(Kt,Na),e(Na,Lh),e(Kt,Wh),e(Kt,Qi),e(Qi,Rh),e(Kt,Hh),e(it,Qh),$(Do,it,null),e(it,Uh),$(Lo,it,null),g(o,Qd,T),g(o,Gt,T),e(Gt,Wo),e(Wo,Ui),$(Bs,Ui,null),e(Gt,Vh),e(Gt,Vi),e(Vi,Kh),g(o,Ud,T),g(o,Re,T),$(Es,Re,null),e(Re,Gh),e(Re,Yt),e(Yt,Yh),e(Yt,Ki),e(Ki,Jh),e(Yt,Zh),e(Yt,Gi),e(Gi,Xh),e(Yt,em),e(Re,tm),e(Re,zs),e(zs,om),e(zs,Sa),e(Sa,nm),e(zs,sm),e(Re,rm),e(Re,xs),e(xs,am),e(xs,Ps),e(Ps,im),e(xs,lm),e(Re,dm),e(Re,lt),$(qs,lt,null),e(lt,cm),e(lt,Jt),e(Jt,pm),e(Jt,Aa),e(Aa,hm),e(Jt,mm),e(Jt,Yi),e(Yi,um),e(Jt,fm),e(lt,gm),$(Ro,lt,null),e(lt,_m),$(Ho,lt,null),g(o,Vd,T),g(o,Zt,T),e(Zt,Qo),e(Qo,Ji),$(Cs,Ji,null),e(Zt,bm),e(Zt,Zi),e(Zi,km),g(o,Kd,T),g(o,He,T),$(js,He,null),e(He,Tm),e(He,Ns),e(Ns,vm),e(Ns,Xi),e(Xi,Mm),e(Ns,$m),e(He,wm),e(He,Ss),e(Ss,ym),e(Ss,Oa),e(Oa,Fm),e(Ss,Bm),e(He,Em),e(He,As),e(As,zm),e(As,Os),e(Os,xm),e(As,Pm),e(He,qm),e(He,Ye),$(Is,Ye,null),e(Ye,Cm),e(Ye,Xt),e(Xt,jm),e(Xt,Ia),e(Ia,Nm),e(Xt,Sm),e(Xt,el),e(el,Am),e(Xt,Om),e(Ye,Im),$(Uo,Ye,null),e(Ye,Dm),$(Vo,Ye,null),e(Ye,Lm),$(Ko,Ye,null),g(o,Gd,T),g(o,eo,T),e(eo,Go),e(Go,tl),$(Ds,tl,null),e(eo,Wm),e(eo,ol),e(ol,Rm),g(o,Yd,T),g(o,Qe,T),$(Ls,Qe,null),e(Qe,Hm),e(Qe,Ws),e(Ws,Qm),e(Ws,nl),e(nl,Um),e(Ws,Vm),e(Qe,Km),e(Qe,Rs),e(Rs,Gm),e(Rs,Da),e(Da,Ym),e(Rs,Jm),e(Qe,Zm),e(Qe,Hs),e(Hs,Xm),e(Hs,Qs),e(Qs,eu),e(Hs,tu),e(Qe,ou),e(Qe,dt),$(Us,dt,null),e(dt,nu),e(dt,to),e(to,su),e(to,La),e(La,ru),e(to,au),e(to,sl),e(sl,iu),e(to,lu),e(dt,du),$(Yo,dt,null),e(dt,cu),$(Jo,dt,null),g(o,Jd,T),g(o,oo,T),e(oo,Zo),e(Zo,rl),$(Vs,rl,null),e(oo,pu),e(oo,al),e(al,hu),g(o,Zd,T),g(o,Ue,T),$(Ks,Ue,null),e(Ue,mu),e(Ue,il),e(il,uu),e(Ue,fu),e(Ue,Gs),e(Gs,gu),e(Gs,Wa),e(Wa,_u),e(Gs,bu),e(Ue,ku),e(Ue,Ys),e(Ys,Tu),e(Ys,Js),e(Js,vu),e(Ys,Mu),e(Ue,$u),e(Ue,Ce),$(Zs,Ce,null),e(Ce,wu),e(Ce,no),e(no,yu),e(no,Ra),e(Ra,Fu),e(no,Bu),e(no,ll),e(ll,Eu),e(no,zu),e(Ce,xu),$(Xo,Ce,null),e(Ce,Pu),$(en,Ce,null),e(Ce,qu),$(tn,Ce,null),e(Ce,Cu),$(on,Ce,null),e(Ce,ju),$(nn,Ce,null),g(o,Xd,T),g(o,so,T),e(so,sn),e(sn,dl),$(Xs,dl,null),e(so,Nu),e(so,cl),e(cl,Su),g(o,ec,T),g(o,Ve,T),$(er,Ve,null),e(Ve,Au),e(Ve,pl),e(pl,Ou),e(Ve,Iu),e(Ve,tr),e(tr,Du),e(tr,Ha),e(Ha,Lu),e(tr,Wu),e(Ve,Ru),e(Ve,or),e(or,Hu),e(or,nr),e(nr,Qu),e(or,Uu),e(Ve,Vu),e(Ve,ct),$(sr,ct,null),e(ct,Ku),e(ct,ro),e(ro,Gu),e(ro,Qa),e(Qa,Yu),e(ro,Ju),e(ro,hl),e(hl,Zu),e(ro,Xu),e(ct,ef),$(rn,ct,null),e(ct,tf),$(an,ct,null),g(o,tc,T),g(o,ao,T),e(ao,ln),e(ln,ml),$(rr,ml,null),e(ao,of),e(ao,ul),e(ul,nf),g(o,oc,T),g(o,Ke,T),$(ar,Ke,null),e(Ke,sf),e(Ke,fl),e(fl,rf),e(Ke,af),e(Ke,ir),e(ir,lf),e(ir,Ua),e(Ua,df),e(ir,cf),e(Ke,pf),e(Ke,lr),e(lr,hf),e(lr,dr),e(dr,mf),e(lr,uf),e(Ke,ff),e(Ke,Je),$(cr,Je,null),e(Je,gf),e(Je,io),e(io,_f),e(io,Va),e(Va,bf),e(io,kf),e(io,gl),e(gl,Tf),e(io,vf),e(Je,Mf),$(dn,Je,null),e(Je,$f),$(cn,Je,null),e(Je,wf),$(pn,Je,null),g(o,nc,T),g(o,lo,T),e(lo,hn),e(hn,_l),$(pr,_l,null),e(lo,yf),e(lo,bl),e(bl,Ff),g(o,sc,T),g(o,Ge,T),$(hr,Ge,null),e(Ge,Bf),e(Ge,co),e(co,Ef),e(co,kl),e(kl,zf),e(co,xf),e(co,Tl),e(Tl,Pf),e(co,qf),e(Ge,Cf),e(Ge,mr),e(mr,jf),e(mr,Ka),e(Ka,Nf),e(mr,Sf),e(Ge,Af),e(Ge,ur),e(ur,Of),e(ur,fr),e(fr,If),e(ur,Df),e(Ge,Lf),e(Ge,Ze),$(gr,Ze,null),e(Ze,Wf),e(Ze,po),e(po,Rf),e(po,Ga),e(Ga,Hf),e(po,Qf),e(po,vl),e(vl,Uf),e(po,Vf),e(Ze,Kf),$(mn,Ze,null),e(Ze,Gf),$(un,Ze,null),e(Ze,Yf),$(fn,Ze,null),g(o,rc,T),g(o,ho,T),e(ho,gn),e(gn,Ml),$(_r,Ml,null),e(ho,Jf),e(ho,$l),e($l,Zf),g(o,ac,T),g(o,Ne,T),$(br,Ne,null),e(Ne,Xf),e(Ne,wl),e(wl,eg),e(Ne,tg),e(Ne,kr),e(kr,og),e(kr,Ya),e(Ya,ng),e(kr,sg),e(Ne,rg),e(Ne,Tr),e(Tr,ag),e(Tr,vr),e(vr,ig),e(Tr,lg),e(Ne,dg),$(_n,Ne,null),e(Ne,cg),e(Ne,pt),$(Mr,pt,null),e(pt,pg),e(pt,mo),e(mo,hg),e(mo,Ja),e(Ja,mg),e(mo,ug),e(mo,yl),e(yl,fg),e(mo,gg),e(pt,_g),$(bn,pt,null),e(pt,bg),$(kn,pt,null),g(o,ic,T),g(o,uo,T),e(uo,Tn),e(Tn,Fl),$($r,Fl,null),e(uo,kg),e(uo,Bl),e(Bl,Tg),g(o,lc,T),g(o,Se,T),$(wr,Se,null),e(Se,vg),e(Se,fo),e(fo,Mg),e(fo,El),e(El,$g),e(fo,wg),e(fo,zl),e(zl,yg),e(fo,Fg),e(Se,Bg),e(Se,yr),e(yr,Eg),e(yr,Za),e(Za,zg),e(yr,xg),e(Se,Pg),e(Se,Fr),e(Fr,qg),e(Fr,Br),e(Br,Cg),e(Fr,jg),e(Se,Ng),$(vn,Se,null),e(Se,Sg),e(Se,ht),$(Er,ht,null),e(ht,Ag),e(ht,go),e(go,Og),e(go,Xa),e(Xa,Ig),e(go,Dg),e(go,xl),e(xl,Lg),e(go,Wg),e(ht,Rg),$(Mn,ht,null),e(ht,Hg),$($n,ht,null),g(o,dc,T),g(o,_o,T),e(_o,wn),e(wn,Pl),$(zr,Pl,null),e(_o,Qg),e(_o,ql),e(ql,Ug),g(o,cc,T),g(o,Ae,T),$(xr,Ae,null),e(Ae,Vg),e(Ae,Pr),e(Pr,Kg),e(Pr,Cl),e(Cl,Gg),e(Pr,Yg),e(Ae,Jg),e(Ae,qr),e(qr,Zg),e(qr,ei),e(ei,Xg),e(qr,e_),e(Ae,t_),e(Ae,Cr),e(Cr,o_),e(Cr,jr),e(jr,n_),e(Cr,s_),e(Ae,r_),$(yn,Ae,null),e(Ae,a_),e(Ae,Xe),$(Nr,Xe,null),e(Xe,i_),e(Xe,bo),e(bo,l_),e(bo,ti),e(ti,d_),e(bo,c_),e(bo,jl),e(jl,p_),e(bo,h_),e(Xe,m_),$(Fn,Xe,null),e(Xe,u_),$(Bn,Xe,null),e(Xe,f_),$(En,Xe,null),g(o,pc,T),g(o,ko,T),e(ko,zn),e(zn,Nl),$(Sr,Nl,null),e(ko,g_),e(ko,Sl),e(Sl,__),g(o,hc,T),g(o,Oe,T),$(Ar,Oe,null),e(Oe,b_),e(Oe,Or),e(Or,k_),e(Or,Al),e(Al,T_),e(Or,v_),e(Oe,M_),e(Oe,Ir),e(Ir,$_),e(Ir,oi),e(oi,w_),e(Ir,y_),e(Oe,F_),e(Oe,Dr),e(Dr,B_),e(Dr,Lr),e(Lr,E_),e(Dr,z_),e(Oe,x_),$(xn,Oe,null),e(Oe,P_),e(Oe,mt),$(Wr,mt,null),e(mt,q_),e(mt,To),e(To,C_),e(To,ni),e(ni,j_),e(To,N_),e(To,Ol),e(Ol,S_),e(To,A_),e(mt,O_),$(Pn,mt,null),e(mt,I_),$(qn,mt,null),g(o,mc,T),g(o,vo,T),e(vo,Cn),e(Cn,Il),$(Rr,Il,null),e(vo,D_),e(vo,Dl),e(Dl,L_),g(o,uc,T),g(o,Ie,T),$(Hr,Ie,null),e(Ie,W_),e(Ie,Ll),e(Ll,R_),e(Ie,H_),e(Ie,Qr),e(Qr,Q_),e(Qr,si),e(si,U_),e(Qr,V_),e(Ie,K_),e(Ie,Ur),e(Ur,G_),e(Ur,Vr),e(Vr,Y_),e(Ur,J_),e(Ie,Z_),$(jn,Ie,null),e(Ie,X_),e(Ie,et),$(Kr,et,null),e(et,eb),e(et,Mo),e(Mo,tb),e(Mo,ri),e(ri,ob),e(Mo,nb),e(Mo,Wl),e(Wl,sb),e(Mo,rb),e(et,ab),$(Nn,et,null),e(et,ib),$(Sn,et,null),e(et,lb),$(An,et,null),g(o,fc,T),g(o,$o,T),e($o,On),e(On,Rl),$(Gr,Rl,null),e($o,db),e($o,Hl),e(Hl,cb),g(o,gc,T),g(o,De,T),$(Yr,De,null),e(De,pb),e(De,Ql),e(Ql,hb),e(De,mb),e(De,Jr),e(Jr,ub),e(Jr,ai),e(ai,fb),e(Jr,gb),e(De,_b),e(De,Zr),e(Zr,bb),e(Zr,Xr),e(Xr,kb),e(Zr,Tb),e(De,vb),$(In,De,null),e(De,Mb),e(De,ut),$(ea,ut,null),e(ut,$b),e(ut,wo),e(wo,wb),e(wo,ii),e(ii,yb),e(wo,Fb),e(wo,Ul),e(Ul,Bb),e(wo,Eb),e(ut,zb),$(Dn,ut,null),e(ut,xb),$(Ln,ut,null),g(o,_c,T),g(o,yo,T),e(yo,Wn),e(Wn,Vl),$(ta,Vl,null),e(yo,Pb),e(yo,Kl),e(Kl,qb),g(o,bc,T),g(o,Le,T),$(oa,Le,null),e(Le,Cb),e(Le,Gl),e(Gl,jb),e(Le,Nb),e(Le,na),e(na,Sb),e(na,li),e(li,Ab),e(na,Ob),e(Le,Ib),e(Le,sa),e(sa,Db),e(sa,ra),e(ra,Lb),e(sa,Wb),e(Le,Rb),$(Rn,Le,null),e(Le,Hb),e(Le,tt),$(aa,tt,null),e(tt,Qb),e(tt,Fo),e(Fo,Ub),e(Fo,di),e(di,Vb),e(Fo,Kb),e(Fo,Yl),e(Yl,Gb),e(Fo,Yb),e(tt,Jb),$(Hn,tt,null),e(tt,Zb),$(Qn,tt,null),e(tt,Xb),$(Un,tt,null),g(o,kc,T),g(o,Bo,T),e(Bo,Vn),e(Vn,Jl),$(ia,Jl,null),e(Bo,ek),e(Bo,Zl),e(Zl,tk),g(o,Tc,T),g(o,We,T),$(la,We,null),e(We,ok),e(We,Eo),e(Eo,nk),e(Eo,Xl),e(Xl,sk),e(Eo,rk),e(Eo,ed),e(ed,ak),e(Eo,ik),e(We,lk),e(We,da),e(da,dk),e(da,ci),e(ci,ck),e(da,pk),e(We,hk),e(We,ca),e(ca,mk),e(ca,pa),e(pa,uk),e(ca,fk),e(We,gk),$(Kn,We,null),e(We,_k),e(We,ot),$(ha,ot,null),e(ot,bk),e(ot,zo),e(zo,kk),e(zo,pi),e(pi,Tk),e(zo,vk),e(zo,td),e(td,Mk),e(zo,$k),e(ot,wk),$(Gn,ot,null),e(ot,yk),$(Yn,ot,null),e(ot,Fk),$(Jn,ot,null),vc=!0},p(o,[T]){const ma={};T&2&&(ma.$$scope={dirty:T,ctx:o}),Co.$set(ma);const od={};T&2&&(od.$$scope={dirty:T,ctx:o}),Do.$set(od);const nd={};T&2&&(nd.$$scope={dirty:T,ctx:o}),Lo.$set(nd);const sd={};T&2&&(sd.$$scope={dirty:T,ctx:o}),Ro.$set(sd);const ua={};T&2&&(ua.$$scope={dirty:T,ctx:o}),Ho.$set(ua);const rd={};T&2&&(rd.$$scope={dirty:T,ctx:o}),Uo.$set(rd);const ad={};T&2&&(ad.$$scope={dirty:T,ctx:o}),Vo.$set(ad);const id={};T&2&&(id.$$scope={dirty:T,ctx:o}),Ko.$set(id);const fa={};T&2&&(fa.$$scope={dirty:T,ctx:o}),Yo.$set(fa);const ld={};T&2&&(ld.$$scope={dirty:T,ctx:o}),Jo.$set(ld);const dd={};T&2&&(dd.$$scope={dirty:T,ctx:o}),Xo.$set(dd);const cd={};T&2&&(cd.$$scope={dirty:T,ctx:o}),en.$set(cd);const pd={};T&2&&(pd.$$scope={dirty:T,ctx:o}),tn.$set(pd);const hd={};T&2&&(hd.$$scope={dirty:T,ctx:o}),on.$set(hd);const ga={};T&2&&(ga.$$scope={dirty:T,ctx:o}),nn.$set(ga);const md={};T&2&&(md.$$scope={dirty:T,ctx:o}),rn.$set(md);const ud={};T&2&&(ud.$$scope={dirty:T,ctx:o}),an.$set(ud);const xo={};T&2&&(xo.$$scope={dirty:T,ctx:o}),dn.$set(xo);const fd={};T&2&&(fd.$$scope={dirty:T,ctx:o}),cn.$set(fd);const gd={};T&2&&(gd.$$scope={dirty:T,ctx:o}),pn.$set(gd);const _a={};T&2&&(_a.$$scope={dirty:T,ctx:o}),mn.$set(_a);const _d={};T&2&&(_d.$$scope={dirty:T,ctx:o}),un.$set(_d);const bd={};T&2&&(bd.$$scope={dirty:T,ctx:o}),fn.$set(bd);const kd={};T&2&&(kd.$$scope={dirty:T,ctx:o}),_n.$set(kd);const at={};T&2&&(at.$$scope={dirty:T,ctx:o}),bn.$set(at);const Po={};T&2&&(Po.$$scope={dirty:T,ctx:o}),kn.$set(Po);const Td={};T&2&&(Td.$$scope={dirty:T,ctx:o}),vn.$set(Td);const vd={};T&2&&(vd.$$scope={dirty:T,ctx:o}),Mn.$set(vd);const qo={};T&2&&(qo.$$scope={dirty:T,ctx:o}),$n.$set(qo);const Md={};T&2&&(Md.$$scope={dirty:T,ctx:o}),yn.$set(Md);const $d={};T&2&&($d.$$scope={dirty:T,ctx:o}),Fn.$set($d);const wd={};T&2&&(wd.$$scope={dirty:T,ctx:o}),Bn.$set(wd);const ba={};T&2&&(ba.$$scope={dirty:T,ctx:o}),En.$set(ba);const yd={};T&2&&(yd.$$scope={dirty:T,ctx:o}),xn.$set(yd);const Fd={};T&2&&(Fd.$$scope={dirty:T,ctx:o}),Pn.$set(Fd);const Bd={};T&2&&(Bd.$$scope={dirty:T,ctx:o}),qn.$set(Bd);const wt={};T&2&&(wt.$$scope={dirty:T,ctx:o}),jn.$set(wt);const Ed={};T&2&&(Ed.$$scope={dirty:T,ctx:o}),Nn.$set(Ed);const Zn={};T&2&&(Zn.$$scope={dirty:T,ctx:o}),Sn.$set(Zn);const zd={};T&2&&(zd.$$scope={dirty:T,ctx:o}),An.$set(zd);const xd={};T&2&&(xd.$$scope={dirty:T,ctx:o}),In.$set(xd);const ka={};T&2&&(ka.$$scope={dirty:T,ctx:o}),Dn.$set(ka);const Pd={};T&2&&(Pd.$$scope={dirty:T,ctx:o}),Ln.$set(Pd);const Ta={};T&2&&(Ta.$$scope={dirty:T,ctx:o}),Rn.$set(Ta);const qd={};T&2&&(qd.$$scope={dirty:T,ctx:o}),Hn.$set(qd);const Cd={};T&2&&(Cd.$$scope={dirty:T,ctx:o}),Qn.$set(Cd);const jd={};T&2&&(jd.$$scope={dirty:T,ctx:o}),Un.$set(jd);const yt={};T&2&&(yt.$$scope={dirty:T,ctx:o}),Kn.$set(yt);const va={};T&2&&(va.$$scope={dirty:T,ctx:o}),Gn.$set(va);const Nd={};T&2&&(Nd.$$scope={dirty:T,ctx:o}),Yn.$set(Nd);const Xn={};T&2&&(Xn.$$scope={dirty:T,ctx:o}),Jn.$set(Xn)},i(o){vc||(w(l.$$.fragment,o),w(X.$$.fragment,o),w(I.$$.fragment,o),w(oe.$$.fragment,o),w(Co.$$.fragment,o),w(ls.$$.fragment,o),w(ds.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(fs.$$.fragment,o),w(gs.$$.fragment,o),w(bs.$$.fragment,o),w(Ts.$$.fragment,o),w(vs.$$.fragment,o),w(Fs.$$.fragment,o),w(Do.$$.fragment,o),w(Lo.$$.fragment,o),w(Bs.$$.fragment,o),w(Es.$$.fragment,o),w(qs.$$.fragment,o),w(Ro.$$.fragment,o),w(Ho.$$.fragment,o),w(Cs.$$.fragment,o),w(js.$$.fragment,o),w(Is.$$.fragment,o),w(Uo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w(Ds.$$.fragment,o),w(Ls.$$.fragment,o),w(Us.$$.fragment,o),w(Yo.$$.fragment,o),w(Jo.$$.fragment,o),w(Vs.$$.fragment,o),w(Ks.$$.fragment,o),w(Zs.$$.fragment,o),w(Xo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(Xs.$$.fragment,o),w(er.$$.fragment,o),w(sr.$$.fragment,o),w(rn.$$.fragment,o),w(an.$$.fragment,o),w(rr.$$.fragment,o),w(ar.$$.fragment,o),w(cr.$$.fragment,o),w(dn.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(pr.$$.fragment,o),w(hr.$$.fragment,o),w(gr.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(fn.$$.fragment,o),w(_r.$$.fragment,o),w(br.$$.fragment,o),w(_n.$$.fragment,o),w(Mr.$$.fragment,o),w(bn.$$.fragment,o),w(kn.$$.fragment,o),w($r.$$.fragment,o),w(wr.$$.fragment,o),w(vn.$$.fragment,o),w(Er.$$.fragment,o),w(Mn.$$.fragment,o),w($n.$$.fragment,o),w(zr.$$.fragment,o),w(xr.$$.fragment,o),w(yn.$$.fragment,o),w(Nr.$$.fragment,o),w(Fn.$$.fragment,o),w(Bn.$$.fragment,o),w(En.$$.fragment,o),w(Sr.$$.fragment,o),w(Ar.$$.fragment,o),w(xn.$$.fragment,o),w(Wr.$$.fragment,o),w(Pn.$$.fragment,o),w(qn.$$.fragment,o),w(Rr.$$.fragment,o),w(Hr.$$.fragment,o),w(jn.$$.fragment,o),w(Kr.$$.fragment,o),w(Nn.$$.fragment,o),w(Sn.$$.fragment,o),w(An.$$.fragment,o),w(Gr.$$.fragment,o),w(Yr.$$.fragment,o),w(In.$$.fragment,o),w(ea.$$.fragment,o),w(Dn.$$.fragment,o),w(Ln.$$.fragment,o),w(ta.$$.fragment,o),w(oa.$$.fragment,o),w(Rn.$$.fragment,o),w(aa.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(Un.$$.fragment,o),w(ia.$$.fragment,o),w(la.$$.fragment,o),w(Kn.$$.fragment,o),w(ha.$$.fragment,o),w(Gn.$$.fragment,o),w(Yn.$$.fragment,o),w(Jn.$$.fragment,o),vc=!0)},o(o){y(l.$$.fragment,o),y(X.$$.fragment,o),y(I.$$.fragment,o),y(oe.$$.fragment,o),y(Co.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(gs.$$.fragment,o),y(bs.$$.fragment,o),y(Ts.$$.fragment,o),y(vs.$$.fragment,o),y(Fs.$$.fragment,o),y(Do.$$.fragment,o),y(Lo.$$.fragment,o),y(Bs.$$.fragment,o),y(Es.$$.fragment,o),y(qs.$$.fragment,o),y(Ro.$$.fragment,o),y(Ho.$$.fragment,o),y(Cs.$$.fragment,o),y(js.$$.fragment,o),y(Is.$$.fragment,o),y(Uo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Ds.$$.fragment,o),y(Ls.$$.fragment,o),y(Us.$$.fragment,o),y(Yo.$$.fragment,o),y(Jo.$$.fragment,o),y(Vs.$$.fragment,o),y(Ks.$$.fragment,o),y(Zs.$$.fragment,o),y(Xo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(Xs.$$.fragment,o),y(er.$$.fragment,o),y(sr.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(rr.$$.fragment,o),y(ar.$$.fragment,o),y(cr.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(pn.$$.fragment,o),y(pr.$$.fragment,o),y(hr.$$.fragment,o),y(gr.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(_r.$$.fragment,o),y(br.$$.fragment,o),y(_n.$$.fragment,o),y(Mr.$$.fragment,o),y(bn.$$.fragment,o),y(kn.$$.fragment,o),y($r.$$.fragment,o),y(wr.$$.fragment,o),y(vn.$$.fragment,o),y(Er.$$.fragment,o),y(Mn.$$.fragment,o),y($n.$$.fragment,o),y(zr.$$.fragment,o),y(xr.$$.fragment,o),y(yn.$$.fragment,o),y(Nr.$$.fragment,o),y(Fn.$$.fragment,o),y(Bn.$$.fragment,o),y(En.$$.fragment,o),y(Sr.$$.fragment,o),y(Ar.$$.fragment,o),y(xn.$$.fragment,o),y(Wr.$$.fragment,o),y(Pn.$$.fragment,o),y(qn.$$.fragment,o),y(Rr.$$.fragment,o),y(Hr.$$.fragment,o),y(jn.$$.fragment,o),y(Kr.$$.fragment,o),y(Nn.$$.fragment,o),y(Sn.$$.fragment,o),y(An.$$.fragment,o),y(Gr.$$.fragment,o),y(Yr.$$.fragment,o),y(In.$$.fragment,o),y(ea.$$.fragment,o),y(Dn.$$.fragment,o),y(Ln.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(Rn.$$.fragment,o),y(aa.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Un.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(Kn.$$.fragment,o),y(ha.$$.fragment,o),y(Gn.$$.fragment,o),y(Yn.$$.fragment,o),y(Jn.$$.fragment,o),vc=!1},d(o){t(d),o&&t(_),o&&t(c),F(l),o&&t(K),o&&t(x),F(X),o&&t(le),o&&t(V),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(R),o&&t(Z),o&&t(pe),o&&t(O),o&&t($e),o&&t(ke),F(I),o&&t(we),o&&t(te),F(oe),F(Co),o&&t(Sd),o&&t(Wt),F(ls),o&&t(Ad),o&&t(st),F(ds),o&&t(Od),o&&t(Rt),F(ps),o&&t(Id),o&&t(rt),F(hs),o&&t(Dd),o&&t(Ht),F(fs),o&&t(Ld),o&&t(Qt),F(gs),o&&t(Wd),o&&t(Ut),F(bs),o&&t(Rd),o&&t(Vt),F(Ts),o&&t(Hd),o&&t(je),F(vs),F(Fs),F(Do),F(Lo),o&&t(Qd),o&&t(Gt),F(Bs),o&&t(Ud),o&&t(Re),F(Es),F(qs),F(Ro),F(Ho),o&&t(Vd),o&&t(Zt),F(Cs),o&&t(Kd),o&&t(He),F(js),F(Is),F(Uo),F(Vo),F(Ko),o&&t(Gd),o&&t(eo),F(Ds),o&&t(Yd),o&&t(Qe),F(Ls),F(Us),F(Yo),F(Jo),o&&t(Jd),o&&t(oo),F(Vs),o&&t(Zd),o&&t(Ue),F(Ks),F(Zs),F(Xo),F(en),F(tn),F(on),F(nn),o&&t(Xd),o&&t(so),F(Xs),o&&t(ec),o&&t(Ve),F(er),F(sr),F(rn),F(an),o&&t(tc),o&&t(ao),F(rr),o&&t(oc),o&&t(Ke),F(ar),F(cr),F(dn),F(cn),F(pn),o&&t(nc),o&&t(lo),F(pr),o&&t(sc),o&&t(Ge),F(hr),F(gr),F(mn),F(un),F(fn),o&&t(rc),o&&t(ho),F(_r),o&&t(ac),o&&t(Ne),F(br),F(_n),F(Mr),F(bn),F(kn),o&&t(ic),o&&t(uo),F($r),o&&t(lc),o&&t(Se),F(wr),F(vn),F(Er),F(Mn),F($n),o&&t(dc),o&&t(_o),F(zr),o&&t(cc),o&&t(Ae),F(xr),F(yn),F(Nr),F(Fn),F(Bn),F(En),o&&t(pc),o&&t(ko),F(Sr),o&&t(hc),o&&t(Oe),F(Ar),F(xn),F(Wr),F(Pn),F(qn),o&&t(mc),o&&t(vo),F(Rr),o&&t(uc),o&&t(Ie),F(Hr),F(jn),F(Kr),F(Nn),F(Sn),F(An),o&&t(fc),o&&t($o),F(Gr),o&&t(gc),o&&t(De),F(Yr),F(In),F(ea),F(Dn),F(Ln),o&&t(_c),o&&t(yo),F(ta),o&&t(bc),o&&t(Le),F(oa),F(Rn),F(aa),F(Hn),F(Qn),F(Un),o&&t(kc),o&&t(Bo),F(ia),o&&t(Tc),o&&t(We),F(la),F(Kn),F(ha),F(Gn),F(Yn),F(Jn)}}}const cM={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function pM(E){return pv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bM extends iv{constructor(d){super();lv(this,d,pM,dM,dv,{})}}export{bM as default,cM as metadata};
