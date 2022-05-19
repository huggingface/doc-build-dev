import{S as pv,i as hv,s as mv,e as r,k as h,w as v,t as n,M as fv,c as a,d as t,m,a as i,x as y,h as s,b,F as e,g,y as w,q as M,o as $,B as F,v as uv,L as xe}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as ie}from"../../chunks/Docstring-1088f2fb.js";import{C as ze}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as qe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-5212b321.js";function gv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertModel, MobileBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function _v(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function bv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Tv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function kv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForPreTraining.from_pretrained("google/mobilebert-uncased")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(0)
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function vv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function yv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function wv(E){let d,_;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Mv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function $v(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Fv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Bv(E){let d,_,c,p,T;return p=new ze({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("lordtt13/emo-mobilebert")
model = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ev(E){let d,_;return d=new ze({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function xv(E){let d,_,c,p,T;return p=new ze({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("lordtt13/emo-mobilebert")
model = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function zv(E){let d,_;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MobileBertForSequenceClassification.from_pretrained(
    "lordtt13/emo-mobilebert", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Pv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function qv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Cv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
import torch

tokenizer = MobileBertTokenizer.from_pretrained("mrm8488/mobilebert-finetuned-ner")
model = MobileBertForTokenClassification.from_pretrained("mrm8488/mobilebert-finetuned-ner")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;mrm8488/mobilebert-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;mrm8488/mobilebert-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Nv(E){let d,_;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Ov(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Sv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
import torch

tokenizer = MobileBertTokenizer.from_pretrained("csarron/mobilebert-uncased-squad-v2")
model = MobileBertForQuestionAnswering.from_pretrained("csarron/mobilebert-uncased-squad-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;csarron/mobilebert-uncased-squad-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;csarron/mobilebert-uncased-squad-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Av(E){let d,_;return d=new ze({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.98</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Iv(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Lv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Dv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Wv(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Rv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Uv(E){let d,_,c,p,T;return p=new ze({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Hv(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Qv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Kv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Vv(E){let d,_;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Gv(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Yv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Jv(E){let d,_,c,p,T;return p=new ze({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Zv(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Xv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function ey(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("vumichien/emo-mobilebert")
model = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function ty(E){let d,_;return d=new ze({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function oy(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function ny(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function sy(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function ry(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function ay(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function iy(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("vumichien/mobilebert-finetuned-ner")
model = TFMobileBertForTokenClassification.from_pretrained("vumichien/mobilebert-finetuned-ner")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function ly(E){let d,_;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function dy(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=h(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),f=m(Y),x=a(Y,"LI",{});var $e=i(x);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=m(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),me=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=m(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ye=i(W);ue=s(ye,"model(inputs_ids)"),ye.forEach(t),I.forEach(t),ce=m(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=m(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,he),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,me),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function cy(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function py(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("vumichien/mobilebert-uncased-squad-v2")
model = TFMobileBertForQuestionAnswering.from_pretrained("vumichien/mobilebert-uncased-squad-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-uncased-squad-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-uncased-squad-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=h(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function hy(E){let d,_;return d=new ze({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([12])
target_end_index = tf.constant([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">3.98</span>`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function my(E){let d,_,c,p,T,l,f,x,he,V,z,J,L,X,me,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be,u,B,Y,ve,$e,S,we,Te,ke,C,I,Fe,ye,Q,Me,te,oe,Be,Mt,Ep,ya,xp,zp,wa,Pp,qp,is,jp,Cp,Np,Wt,Op,Ma,Sp,Ap,$a,Ip,Lp,Dp,jo,Wp,qi,Rp,Ad,Rt,Co,ji,ls,Up,Ci,Hp,Id,st,ds,Qp,Ni,Kp,Vp,No,Fa,Gp,Yp,Ba,Jp,Zp,Xp,cs,eh,Ea,th,oh,Ld,Ut,Oo,Oi,ps,nh,Si,sh,Dd,rt,hs,rh,ms,ah,Ai,ih,lh,dh,So,xa,ch,ph,za,hh,mh,fh,fs,uh,Pa,gh,_h,Wd,Ht,Ao,Ii,us,bh,Li,Th,Rd,Qt,gs,kh,_s,vh,qa,yh,wh,Ud,Kt,bs,Mh,Ts,$h,ja,Fh,Bh,Hd,Vt,Io,Di,ks,Eh,Wi,xh,Qd,Ce,vs,zh,Ri,Ph,qh,ys,jh,Ca,Ch,Nh,Oh,ws,Sh,Ms,Ah,Ih,Lh,Ui,$s,Dh,Wh,it,Fs,Rh,Gt,Uh,Na,Hh,Qh,Hi,Kh,Vh,Gh,Lo,Yh,Do,Kd,Yt,Wo,Qi,Bs,Jh,Ki,Zh,Vd,Re,Es,Xh,Jt,em,Vi,tm,om,Gi,nm,sm,rm,xs,am,Oa,im,lm,dm,zs,cm,Ps,pm,hm,mm,lt,qs,fm,Zt,um,Sa,gm,_m,Yi,bm,Tm,km,Ro,vm,Uo,Gd,Xt,Ho,Ji,js,ym,Zi,wm,Yd,Ue,Cs,Mm,Ns,$m,Xi,Fm,Bm,Em,Os,xm,Aa,zm,Pm,qm,Ss,jm,As,Cm,Nm,Om,Ye,Is,Sm,eo,Am,Ia,Im,Lm,el,Dm,Wm,Rm,Qo,Um,Ko,Hm,Vo,Jd,to,Go,tl,Ls,Qm,ol,Km,Zd,He,Ds,Vm,Ws,Gm,nl,Ym,Jm,Zm,Rs,Xm,La,ef,tf,of,Us,nf,Hs,sf,rf,af,dt,Qs,lf,oo,df,Da,cf,pf,sl,hf,mf,ff,Yo,uf,Jo,Xd,no,Zo,rl,Ks,gf,al,_f,ec,Qe,Vs,bf,il,Tf,kf,Gs,vf,Wa,yf,wf,Mf,Ys,$f,Js,Ff,Bf,Ef,je,Zs,xf,so,zf,Ra,Pf,qf,ll,jf,Cf,Nf,Xo,Of,en,Sf,tn,Af,on,If,nn,tc,ro,sn,dl,Xs,Lf,cl,Df,oc,Ke,er,Wf,pl,Rf,Uf,tr,Hf,Ua,Qf,Kf,Vf,or,Gf,nr,Yf,Jf,Zf,ct,sr,Xf,ao,eu,Ha,tu,ou,hl,nu,su,ru,rn,au,an,nc,io,ln,ml,rr,iu,fl,lu,sc,Ve,ar,du,ul,cu,pu,ir,hu,Qa,mu,fu,uu,lr,gu,dr,_u,bu,Tu,Je,cr,ku,lo,vu,Ka,yu,wu,gl,Mu,$u,Fu,dn,Bu,cn,Eu,pn,rc,co,hn,_l,pr,xu,bl,zu,ac,Ge,hr,Pu,po,qu,Tl,ju,Cu,kl,Nu,Ou,Su,mr,Au,Va,Iu,Lu,Du,fr,Wu,ur,Ru,Uu,Hu,Ze,gr,Qu,ho,Ku,Ga,Vu,Gu,vl,Yu,Ju,Zu,mn,Xu,fn,eg,un,ic,mo,gn,yl,_r,tg,wl,og,lc,Ne,br,ng,Ml,sg,rg,Tr,ag,Ya,ig,lg,dg,kr,cg,vr,pg,hg,mg,_n,fg,pt,yr,ug,fo,gg,Ja,_g,bg,$l,Tg,kg,vg,bn,yg,Tn,dc,uo,kn,Fl,wr,wg,Bl,Mg,cc,Oe,Mr,$g,go,Fg,El,Bg,Eg,xl,xg,zg,Pg,$r,qg,Za,jg,Cg,Ng,Fr,Og,Br,Sg,Ag,Ig,vn,Lg,ht,Er,Dg,_o,Wg,Xa,Rg,Ug,zl,Hg,Qg,Kg,yn,Vg,wn,pc,bo,Mn,Pl,xr,Gg,ql,Yg,hc,Se,zr,Jg,Pr,Zg,jl,Xg,e_,t_,qr,o_,ei,n_,s_,r_,jr,a_,Cr,i_,l_,d_,$n,c_,Xe,Nr,p_,To,h_,ti,m_,f_,Cl,u_,g_,__,Fn,b_,Bn,T_,En,mc,ko,xn,Nl,Or,k_,Ol,v_,fc,Ae,Sr,y_,Ar,w_,Sl,M_,$_,F_,Ir,B_,oi,E_,x_,z_,Lr,P_,Dr,q_,j_,C_,zn,N_,mt,Wr,O_,vo,S_,ni,A_,I_,Al,L_,D_,W_,Pn,R_,qn,uc,yo,jn,Il,Rr,U_,Ll,H_,gc,Ie,Ur,Q_,Dl,K_,V_,Hr,G_,si,Y_,J_,Z_,Qr,X_,Kr,eb,tb,ob,Cn,nb,et,Vr,sb,wo,rb,ri,ab,ib,Wl,lb,db,cb,Nn,pb,On,hb,Sn,_c,Mo,An,Rl,Gr,mb,Ul,fb,bc,Le,Yr,ub,Hl,gb,_b,Jr,bb,ai,Tb,kb,vb,Zr,yb,Xr,wb,Mb,$b,In,Fb,ft,ea,Bb,$o,Eb,ii,xb,zb,Ql,Pb,qb,jb,Ln,Cb,Dn,Tc,Fo,Wn,Kl,ta,Nb,Vl,Ob,kc,De,oa,Sb,Gl,Ab,Ib,na,Lb,li,Db,Wb,Rb,sa,Ub,ra,Hb,Qb,Kb,Rn,Vb,tt,aa,Gb,Bo,Yb,di,Jb,Zb,Yl,Xb,eT,tT,Un,oT,Hn,nT,Qn,vc,Eo,Kn,Jl,ia,sT,Zl,rT,yc,We,la,aT,xo,iT,Xl,lT,dT,ed,cT,pT,hT,da,mT,ci,fT,uT,gT,ca,_T,pa,bT,TT,kT,Vn,vT,ot,ha,yT,zo,wT,pi,MT,$T,td,FT,BT,ET,Gn,xT,Yn,zT,Jn,wc;return l=new qe({}),X=new qe({}),I=new qe({}),oe=new ie({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the MobileBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MobileBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or
<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MobileBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/configuration_mobilebert.py#L31"}}),jo=new Ee({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[gv]},$$scope:{ctx:E}}}),ls=new qe({}),ds=new ie({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/tokenization_mobilebert.py#L36"}}),ps=new qe({}),hs=new ie({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L40"}}),us=new qe({}),gs=new ie({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L710"}}),bs=new ie({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L797"}}),ks=new qe({}),vs=new ie({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L813"}}),Fs=new ie({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L843",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
`}}),Lo=new Pe({props:{$$slots:{default:[_v]},$$scope:{ctx:E}}}),Do=new Ee({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[bv]},$$scope:{ctx:E}}}),Bs=new qe({}),Es=new ie({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L927"}}),qs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"return_dict",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MobileBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L950",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Pe({props:{$$slots:{default:[Tv]},$$scope:{ctx:E}}}),Uo=new Ee({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[kv]},$$scope:{ctx:E}}}),js=new qe({}),Cs=new ie({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1033"}}),Is=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1059",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Qo=new Pe({props:{$$slots:{default:[vv]},$$scope:{ctx:E}}}),Ko=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[yv]},$$scope:{ctx:E}}}),Vo=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[wv]},$$scope:{ctx:E}}}),Ls=new qe({}),Ds=new ie({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1135"}}),Qs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>.</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1145",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Pe({props:{$$slots:{default:[Mv]},$$scope:{ctx:E}}}),Jo=new Ee({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[$v]},$$scope:{ctx:E}}}),Ks=new qe({}),Vs=new ie({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1239"}}),Zs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1255",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Xo=new Pe({props:{$$slots:{default:[Fv]},$$scope:{ctx:E}}}),en=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[Bv]},$$scope:{ctx:E}}}),tn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[Ev]},$$scope:{ctx:E}}}),on=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[xv]},$$scope:{ctx:E}}}),nn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[zv]},$$scope:{ctx:E}}}),Xs=new qe({}),er=new ie({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1452"}}),sr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1466",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
`}}),rn=new Pe({props:{$$slots:{default:[Pv]},$$scope:{ctx:E}}}),an=new Ee({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[qv]},$$scope:{ctx:E}}}),rr=new qe({}),ar=new ie({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1550"}}),cr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1568",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),dn=new Pe({props:{$$slots:{default:[jv]},$$scope:{ctx:E}}}),cn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[Cv]},$$scope:{ctx:E}}}),pn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[Nv]},$$scope:{ctx:E}}}),pr=new qe({}),hr=new ie({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1344"}}),gr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_mobilebert.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
`}}),mn=new Pe({props:{$$slots:{default:[Ov]},$$scope:{ctx:E}}}),fn=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[Sv]},$$scope:{ctx:E}}}),un=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[Av]},$$scope:{ctx:E}}}),_r=new qe({}),br=new ie({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L924"}}),_n=new Pe({props:{$$slots:{default:[Iv]},$$scope:{ctx:E}}}),yr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L929",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new Pe({props:{$$slots:{default:[Lv]},$$scope:{ctx:E}}}),Tn=new Ee({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[Dv]},$$scope:{ctx:E}}}),wr=new qe({}),Mr=new ie({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L984"}}),vn=new Pe({props:{$$slots:{default:[Wv]},$$scope:{ctx:E}}}),Er=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L998",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new Pe({props:{$$slots:{default:[Rv]},$$scope:{ctx:E}}}),wn=new Ee({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[Uv]},$$scope:{ctx:E}}}),xr=new qe({}),zr=new ie({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1069"}}),$n=new Pe({props:{$$slots:{default:[Hv]},$$scope:{ctx:E}}}),Nr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Pe({props:{$$slots:{default:[Qv]},$$scope:{ctx:E}}}),Bn=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[Kv]},$$scope:{ctx:E}}}),En=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[Vv]},$$scope:{ctx:E}}}),Or=new qe({}),Sr=new ie({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1170"}}),zn=new Pe({props:{$$slots:{default:[Gv]},$$scope:{ctx:E}}}),Wr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Pe({props:{$$slots:{default:[Yv]},$$scope:{ctx:E}}}),qn=new Ee({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[Jv]},$$scope:{ctx:E}}}),Rr=new qe({}),Ur=new ie({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1262"}}),Cn=new Pe({props:{$$slots:{default:[Zv]},$$scope:{ctx:E}}}),Vr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1285",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new Pe({props:{$$slots:{default:[Xv]},$$scope:{ctx:E}}}),On=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[ey]},$$scope:{ctx:E}}}),Sn=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[ty]},$$scope:{ctx:E}}}),Gr=new qe({}),Yr=new ie({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1469"}}),In=new Pe({props:{$$slots:{default:[oy]},$$scope:{ctx:E}}}),ea=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1498",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new Pe({props:{$$slots:{default:[ny]},$$scope:{ctx:E}}}),Dn=new Ee({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[sy]},$$scope:{ctx:E}}}),ta=new qe({}),oa=new ie({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1603"}}),Rn=new Pe({props:{$$slots:{default:[ry]},$$scope:{ctx:E}}}),aa=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Un=new Pe({props:{$$slots:{default:[ay]},$$scope:{ctx:E}}}),Hn=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[iy]},$$scope:{ctx:E}}}),Qn=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[ly]},$$scope:{ctx:E}}}),ia=new qe({}),la=new ie({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1360"}}),Vn=new Pe({props:{$$slots:{default:[dy]},$$scope:{ctx:E}}}),ha=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1379",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gn=new Pe({props:{$$slots:{default:[cy]},$$scope:{ctx:E}}}),Yn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[py]},$$scope:{ctx:E}}}),Jn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[hy]},$$scope:{ctx:E}}}),{c(){d=r("meta"),_=h(),c=r("h1"),p=r("a"),T=r("span"),v(l.$$.fragment),f=h(),x=r("span"),he=n("MobileBERT"),V=h(),z=r("h2"),J=r("a"),L=r("span"),v(X.$$.fragment),me=h(),D=r("span"),fe=n("Overview"),le=h(),K=r("p"),N=n("The MobileBERT model was proposed in "),ee=r("a"),G=n("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),P=n(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),j=h(),ne=r("p"),U=n("The abstract from the paper is the following:"),de=h(),se=r("p"),W=r("em"),ue=n(`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),ce=h(),q=r("p"),ge=n("Tips:"),R=h(),Z=r("ul"),re=r("li"),H=n(`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),_e=h(),ae=r("li"),O=n(`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),pe=h(),A=r("p"),be=n("This model was contributed by "),u=r("a"),B=n("vshampor"),Y=n(". The original code can be found "),ve=r("a"),$e=n("here"),S=n("."),we=h(),Te=r("h2"),ke=r("a"),C=r("span"),v(I.$$.fragment),Fe=h(),ye=r("span"),Q=n("MobileBertConfig"),Me=h(),te=r("div"),v(oe.$$.fragment),Be=h(),Mt=r("p"),Ep=n("This is the configuration class to store the configuration of a "),ya=r("a"),xp=n("MobileBertModel"),zp=n(" or a "),wa=r("a"),Pp=n("TFMobileBertModel"),qp=n(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),is=r("a"),jp=n("google/mobilebert-uncased"),Cp=n(" architecture."),Np=h(),Wt=r("p"),Op=n("Configuration objects inherit from "),Ma=r("a"),Sp=n("PretrainedConfig"),Ap=n(` and can be used to control the model outputs. Read the
documentation from `),$a=r("a"),Ip=n("PretrainedConfig"),Lp=n(" for more information."),Dp=h(),v(jo.$$.fragment),Wp=h(),qi=r("p"),Rp=n(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Ad=h(),Rt=r("h2"),Co=r("a"),ji=r("span"),v(ls.$$.fragment),Up=h(),Ci=r("span"),Hp=n("MobileBertTokenizer"),Id=h(),st=r("div"),v(ds.$$.fragment),Qp=h(),Ni=r("p"),Kp=n("Construct a MobileBERT tokenizer."),Vp=h(),No=r("p"),Fa=r("a"),Gp=n("MobileBertTokenizer"),Yp=n(" is identical to "),Ba=r("a"),Jp=n("BertTokenizer"),Zp=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Xp=h(),cs=r("p"),eh=n("Refer to superclass "),Ea=r("a"),th=n("BertTokenizer"),oh=n(" for usage examples and documentation concerning parameters."),Ld=h(),Ut=r("h2"),Oo=r("a"),Oi=r("span"),v(ps.$$.fragment),nh=h(),Si=r("span"),sh=n("MobileBertTokenizerFast"),Dd=h(),rt=r("div"),v(hs.$$.fragment),rh=h(),ms=r("p"),ah=n("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ai=r("em"),ih=n("tokenizers"),lh=n(" library)."),dh=h(),So=r("p"),xa=r("a"),ch=n("MobileBertTokenizerFast"),ph=n(" is identical to "),za=r("a"),hh=n("BertTokenizerFast"),mh=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),fh=h(),fs=r("p"),uh=n("Refer to superclass "),Pa=r("a"),gh=n("BertTokenizerFast"),_h=n(" for usage examples and documentation concerning parameters."),Wd=h(),Ht=r("h2"),Ao=r("a"),Ii=r("span"),v(us.$$.fragment),bh=h(),Li=r("span"),Th=n("MobileBert specific outputs"),Rd=h(),Qt=r("div"),v(gs.$$.fragment),kh=h(),_s=r("p"),vh=n("Output type of "),qa=r("a"),yh=n("MobileBertForPreTraining"),wh=n("."),Ud=h(),Kt=r("div"),v(bs.$$.fragment),Mh=h(),Ts=r("p"),$h=n("Output type of "),ja=r("a"),Fh=n("TFMobileBertForPreTraining"),Bh=n("."),Hd=h(),Vt=r("h2"),Io=r("a"),Di=r("span"),v(ks.$$.fragment),Eh=h(),Wi=r("span"),xh=n("MobileBertModel"),Qd=h(),Ce=r("div"),v(vs.$$.fragment),zh=h(),Ri=r("p"),Ph=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),qh=h(),ys=r("p"),jh=n("This model inherits from "),Ca=r("a"),Ch=n("PreTrainedModel"),Nh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=h(),ws=r("p"),Sh=n("This model is also a PyTorch "),Ms=r("a"),Ah=n("torch.nn.Module"),Ih=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lh=h(),Ui=r("p"),$s=r("a"),Dh=n("https://arxiv.org/pdf/2004.02984.pdf"),Wh=h(),it=r("div"),v(Fs.$$.fragment),Rh=h(),Gt=r("p"),Uh=n("The "),Na=r("a"),Hh=n("MobileBertModel"),Qh=n(" forward method, overrides the "),Hi=r("code"),Kh=n("__call__"),Vh=n(" special method."),Gh=h(),v(Lo.$$.fragment),Yh=h(),v(Do.$$.fragment),Kd=h(),Yt=r("h2"),Wo=r("a"),Qi=r("span"),v(Bs.$$.fragment),Jh=h(),Ki=r("span"),Zh=n("MobileBertForPreTraining"),Vd=h(),Re=r("div"),v(Es.$$.fragment),Xh=h(),Jt=r("p"),em=n("MobileBert Model with two heads on top as done during the pretraining: a "),Vi=r("code"),tm=n("masked language modeling"),om=n(` head and a
`),Gi=r("code"),nm=n("next sentence prediction (classification)"),sm=n(" head."),rm=h(),xs=r("p"),am=n("This model inherits from "),Oa=r("a"),im=n("PreTrainedModel"),lm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm=h(),zs=r("p"),cm=n("This model is also a PyTorch "),Ps=r("a"),pm=n("torch.nn.Module"),hm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mm=h(),lt=r("div"),v(qs.$$.fragment),fm=h(),Zt=r("p"),um=n("The "),Sa=r("a"),gm=n("MobileBertForPreTraining"),_m=n(" forward method, overrides the "),Yi=r("code"),bm=n("__call__"),Tm=n(" special method."),km=h(),v(Ro.$$.fragment),vm=h(),v(Uo.$$.fragment),Gd=h(),Xt=r("h2"),Ho=r("a"),Ji=r("span"),v(js.$$.fragment),ym=h(),Zi=r("span"),wm=n("MobileBertForMaskedLM"),Yd=h(),Ue=r("div"),v(Cs.$$.fragment),Mm=h(),Ns=r("p"),$m=n("MobileBert Model with a "),Xi=r("code"),Fm=n("language modeling"),Bm=n(" head on top."),Em=h(),Os=r("p"),xm=n("This model inherits from "),Aa=r("a"),zm=n("PreTrainedModel"),Pm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=h(),Ss=r("p"),jm=n("This model is also a PyTorch "),As=r("a"),Cm=n("torch.nn.Module"),Nm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Om=h(),Ye=r("div"),v(Is.$$.fragment),Sm=h(),eo=r("p"),Am=n("The "),Ia=r("a"),Im=n("MobileBertForMaskedLM"),Lm=n(" forward method, overrides the "),el=r("code"),Dm=n("__call__"),Wm=n(" special method."),Rm=h(),v(Qo.$$.fragment),Um=h(),v(Ko.$$.fragment),Hm=h(),v(Vo.$$.fragment),Jd=h(),to=r("h2"),Go=r("a"),tl=r("span"),v(Ls.$$.fragment),Qm=h(),ol=r("span"),Km=n("MobileBertForNextSentencePrediction"),Zd=h(),He=r("div"),v(Ds.$$.fragment),Vm=h(),Ws=r("p"),Gm=n("MobileBert Model with a "),nl=r("code"),Ym=n("next sentence prediction (classification)"),Jm=n(" head on top."),Zm=h(),Rs=r("p"),Xm=n("This model inherits from "),La=r("a"),ef=n("PreTrainedModel"),tf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of=h(),Us=r("p"),nf=n("This model is also a PyTorch "),Hs=r("a"),sf=n("torch.nn.Module"),rf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),af=h(),dt=r("div"),v(Qs.$$.fragment),lf=h(),oo=r("p"),df=n("The "),Da=r("a"),cf=n("MobileBertForNextSentencePrediction"),pf=n(" forward method, overrides the "),sl=r("code"),hf=n("__call__"),mf=n(" special method."),ff=h(),v(Yo.$$.fragment),uf=h(),v(Jo.$$.fragment),Xd=h(),no=r("h2"),Zo=r("a"),rl=r("span"),v(Ks.$$.fragment),gf=h(),al=r("span"),_f=n("MobileBertForSequenceClassification"),ec=h(),Qe=r("div"),v(Vs.$$.fragment),bf=h(),il=r("p"),Tf=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kf=h(),Gs=r("p"),vf=n("This model inherits from "),Wa=r("a"),yf=n("PreTrainedModel"),wf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mf=h(),Ys=r("p"),$f=n("This model is also a PyTorch "),Js=r("a"),Ff=n("torch.nn.Module"),Bf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ef=h(),je=r("div"),v(Zs.$$.fragment),xf=h(),so=r("p"),zf=n("The "),Ra=r("a"),Pf=n("MobileBertForSequenceClassification"),qf=n(" forward method, overrides the "),ll=r("code"),jf=n("__call__"),Cf=n(" special method."),Nf=h(),v(Xo.$$.fragment),Of=h(),v(en.$$.fragment),Sf=h(),v(tn.$$.fragment),Af=h(),v(on.$$.fragment),If=h(),v(nn.$$.fragment),tc=h(),ro=r("h2"),sn=r("a"),dl=r("span"),v(Xs.$$.fragment),Lf=h(),cl=r("span"),Df=n("MobileBertForMultipleChoice"),oc=h(),Ke=r("div"),v(er.$$.fragment),Wf=h(),pl=r("p"),Rf=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Uf=h(),tr=r("p"),Hf=n("This model inherits from "),Ua=r("a"),Qf=n("PreTrainedModel"),Kf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf=h(),or=r("p"),Gf=n("This model is also a PyTorch "),nr=r("a"),Yf=n("torch.nn.Module"),Jf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zf=h(),ct=r("div"),v(sr.$$.fragment),Xf=h(),ao=r("p"),eu=n("The "),Ha=r("a"),tu=n("MobileBertForMultipleChoice"),ou=n(" forward method, overrides the "),hl=r("code"),nu=n("__call__"),su=n(" special method."),ru=h(),v(rn.$$.fragment),au=h(),v(an.$$.fragment),nc=h(),io=r("h2"),ln=r("a"),ml=r("span"),v(rr.$$.fragment),iu=h(),fl=r("span"),lu=n("MobileBertForTokenClassification"),sc=h(),Ve=r("div"),v(ar.$$.fragment),du=h(),ul=r("p"),cu=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),pu=h(),ir=r("p"),hu=n("This model inherits from "),Qa=r("a"),mu=n("PreTrainedModel"),fu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu=h(),lr=r("p"),gu=n("This model is also a PyTorch "),dr=r("a"),_u=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu=h(),Je=r("div"),v(cr.$$.fragment),ku=h(),lo=r("p"),vu=n("The "),Ka=r("a"),yu=n("MobileBertForTokenClassification"),wu=n(" forward method, overrides the "),gl=r("code"),Mu=n("__call__"),$u=n(" special method."),Fu=h(),v(dn.$$.fragment),Bu=h(),v(cn.$$.fragment),Eu=h(),v(pn.$$.fragment),rc=h(),co=r("h2"),hn=r("a"),_l=r("span"),v(pr.$$.fragment),xu=h(),bl=r("span"),zu=n("MobileBertForQuestionAnswering"),ac=h(),Ge=r("div"),v(hr.$$.fragment),Pu=h(),po=r("p"),qu=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Tl=r("code"),ju=n("span start logits"),Cu=n(" and "),kl=r("code"),Nu=n("span end logits"),Ou=n(")."),Su=h(),mr=r("p"),Au=n("This model inherits from "),Va=r("a"),Iu=n("PreTrainedModel"),Lu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du=h(),fr=r("p"),Wu=n("This model is also a PyTorch "),ur=r("a"),Ru=n("torch.nn.Module"),Uu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu=h(),Ze=r("div"),v(gr.$$.fragment),Qu=h(),ho=r("p"),Ku=n("The "),Ga=r("a"),Vu=n("MobileBertForQuestionAnswering"),Gu=n(" forward method, overrides the "),vl=r("code"),Yu=n("__call__"),Ju=n(" special method."),Zu=h(),v(mn.$$.fragment),Xu=h(),v(fn.$$.fragment),eg=h(),v(un.$$.fragment),ic=h(),mo=r("h2"),gn=r("a"),yl=r("span"),v(_r.$$.fragment),tg=h(),wl=r("span"),og=n("TFMobileBertModel"),lc=h(),Ne=r("div"),v(br.$$.fragment),ng=h(),Ml=r("p"),sg=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),rg=h(),Tr=r("p"),ag=n("This model inherits from "),Ya=r("a"),ig=n("TFPreTrainedModel"),lg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=h(),kr=r("p"),cg=n("This model is also a "),vr=r("a"),pg=n("tf.keras.Model"),hg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mg=h(),v(_n.$$.fragment),fg=h(),pt=r("div"),v(yr.$$.fragment),ug=h(),fo=r("p"),gg=n("The "),Ja=r("a"),_g=n("TFMobileBertModel"),bg=n(" forward method, overrides the "),$l=r("code"),Tg=n("__call__"),kg=n(" special method."),vg=h(),v(bn.$$.fragment),yg=h(),v(Tn.$$.fragment),dc=h(),uo=r("h2"),kn=r("a"),Fl=r("span"),v(wr.$$.fragment),wg=h(),Bl=r("span"),Mg=n("TFMobileBertForPreTraining"),cc=h(),Oe=r("div"),v(Mr.$$.fragment),$g=h(),go=r("p"),Fg=n("MobileBert Model with two heads on top as done during the pretraining: a "),El=r("code"),Bg=n("masked language modeling"),Eg=n(` head and a
`),xl=r("code"),xg=n("next sentence prediction (classification)"),zg=n(" head."),Pg=h(),$r=r("p"),qg=n("This model inherits from "),Za=r("a"),jg=n("TFPreTrainedModel"),Cg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=h(),Fr=r("p"),Og=n("This model is also a "),Br=r("a"),Sg=n("tf.keras.Model"),Ag=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ig=h(),v(vn.$$.fragment),Lg=h(),ht=r("div"),v(Er.$$.fragment),Dg=h(),_o=r("p"),Wg=n("The "),Xa=r("a"),Rg=n("TFMobileBertForPreTraining"),Ug=n(" forward method, overrides the "),zl=r("code"),Hg=n("__call__"),Qg=n(" special method."),Kg=h(),v(yn.$$.fragment),Vg=h(),v(wn.$$.fragment),pc=h(),bo=r("h2"),Mn=r("a"),Pl=r("span"),v(xr.$$.fragment),Gg=h(),ql=r("span"),Yg=n("TFMobileBertForMaskedLM"),hc=h(),Se=r("div"),v(zr.$$.fragment),Jg=h(),Pr=r("p"),Zg=n("MobileBert Model with a "),jl=r("code"),Xg=n("language modeling"),e_=n(" head on top."),t_=h(),qr=r("p"),o_=n("This model inherits from "),ei=r("a"),n_=n("TFPreTrainedModel"),s_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r_=h(),jr=r("p"),a_=n("This model is also a "),Cr=r("a"),i_=n("tf.keras.Model"),l_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d_=h(),v($n.$$.fragment),c_=h(),Xe=r("div"),v(Nr.$$.fragment),p_=h(),To=r("p"),h_=n("The "),ti=r("a"),m_=n("TFMobileBertForMaskedLM"),f_=n(" forward method, overrides the "),Cl=r("code"),u_=n("__call__"),g_=n(" special method."),__=h(),v(Fn.$$.fragment),b_=h(),v(Bn.$$.fragment),T_=h(),v(En.$$.fragment),mc=h(),ko=r("h2"),xn=r("a"),Nl=r("span"),v(Or.$$.fragment),k_=h(),Ol=r("span"),v_=n("TFMobileBertForNextSentencePrediction"),fc=h(),Ae=r("div"),v(Sr.$$.fragment),y_=h(),Ar=r("p"),w_=n("MobileBert Model with a "),Sl=r("code"),M_=n("next sentence prediction (classification)"),$_=n(" head on top."),F_=h(),Ir=r("p"),B_=n("This model inherits from "),oi=r("a"),E_=n("TFPreTrainedModel"),x_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=h(),Lr=r("p"),P_=n("This model is also a "),Dr=r("a"),q_=n("tf.keras.Model"),j_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),C_=h(),v(zn.$$.fragment),N_=h(),mt=r("div"),v(Wr.$$.fragment),O_=h(),vo=r("p"),S_=n("The "),ni=r("a"),A_=n("TFMobileBertForNextSentencePrediction"),I_=n(" forward method, overrides the "),Al=r("code"),L_=n("__call__"),D_=n(" special method."),W_=h(),v(Pn.$$.fragment),R_=h(),v(qn.$$.fragment),uc=h(),yo=r("h2"),jn=r("a"),Il=r("span"),v(Rr.$$.fragment),U_=h(),Ll=r("span"),H_=n("TFMobileBertForSequenceClassification"),gc=h(),Ie=r("div"),v(Ur.$$.fragment),Q_=h(),Dl=r("p"),K_=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V_=h(),Hr=r("p"),G_=n("This model inherits from "),si=r("a"),Y_=n("TFPreTrainedModel"),J_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=h(),Qr=r("p"),X_=n("This model is also a "),Kr=r("a"),eb=n("tf.keras.Model"),tb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ob=h(),v(Cn.$$.fragment),nb=h(),et=r("div"),v(Vr.$$.fragment),sb=h(),wo=r("p"),rb=n("The "),ri=r("a"),ab=n("TFMobileBertForSequenceClassification"),ib=n(" forward method, overrides the "),Wl=r("code"),lb=n("__call__"),db=n(" special method."),cb=h(),v(Nn.$$.fragment),pb=h(),v(On.$$.fragment),hb=h(),v(Sn.$$.fragment),_c=h(),Mo=r("h2"),An=r("a"),Rl=r("span"),v(Gr.$$.fragment),mb=h(),Ul=r("span"),fb=n("TFMobileBertForMultipleChoice"),bc=h(),Le=r("div"),v(Yr.$$.fragment),ub=h(),Hl=r("p"),gb=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_b=h(),Jr=r("p"),bb=n("This model inherits from "),ai=r("a"),Tb=n("TFPreTrainedModel"),kb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=h(),Zr=r("p"),yb=n("This model is also a "),Xr=r("a"),wb=n("tf.keras.Model"),Mb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$b=h(),v(In.$$.fragment),Fb=h(),ft=r("div"),v(ea.$$.fragment),Bb=h(),$o=r("p"),Eb=n("The "),ii=r("a"),xb=n("TFMobileBertForMultipleChoice"),zb=n(" forward method, overrides the "),Ql=r("code"),Pb=n("__call__"),qb=n(" special method."),jb=h(),v(Ln.$$.fragment),Cb=h(),v(Dn.$$.fragment),Tc=h(),Fo=r("h2"),Wn=r("a"),Kl=r("span"),v(ta.$$.fragment),Nb=h(),Vl=r("span"),Ob=n("TFMobileBertForTokenClassification"),kc=h(),De=r("div"),v(oa.$$.fragment),Sb=h(),Gl=r("p"),Ab=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ib=h(),na=r("p"),Lb=n("This model inherits from "),li=r("a"),Db=n("TFPreTrainedModel"),Wb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=h(),sa=r("p"),Ub=n("This model is also a "),ra=r("a"),Hb=n("tf.keras.Model"),Qb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kb=h(),v(Rn.$$.fragment),Vb=h(),tt=r("div"),v(aa.$$.fragment),Gb=h(),Bo=r("p"),Yb=n("The "),di=r("a"),Jb=n("TFMobileBertForTokenClassification"),Zb=n(" forward method, overrides the "),Yl=r("code"),Xb=n("__call__"),eT=n(" special method."),tT=h(),v(Un.$$.fragment),oT=h(),v(Hn.$$.fragment),nT=h(),v(Qn.$$.fragment),vc=h(),Eo=r("h2"),Kn=r("a"),Jl=r("span"),v(ia.$$.fragment),sT=h(),Zl=r("span"),rT=n("TFMobileBertForQuestionAnswering"),yc=h(),We=r("div"),v(la.$$.fragment),aT=h(),xo=r("p"),iT=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=r("code"),lT=n("span start logits"),dT=n(" and "),ed=r("code"),cT=n("span end logits"),pT=n(")."),hT=h(),da=r("p"),mT=n("This model inherits from "),ci=r("a"),fT=n("TFPreTrainedModel"),uT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT=h(),ca=r("p"),_T=n("This model is also a "),pa=r("a"),bT=n("tf.keras.Model"),TT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kT=h(),v(Vn.$$.fragment),vT=h(),ot=r("div"),v(ha.$$.fragment),yT=h(),zo=r("p"),wT=n("The "),pi=r("a"),MT=n("TFMobileBertForQuestionAnswering"),$T=n(" forward method, overrides the "),td=r("code"),FT=n("__call__"),BT=n(" special method."),ET=h(),v(Gn.$$.fragment),xT=h(),v(Yn.$$.fragment),zT=h(),v(Jn.$$.fragment),this.h()},l(o){const k=fv('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=m(o),c=a(o,"H1",{class:!0});var ma=i(c);p=a(ma,"A",{id:!0,class:!0,href:!0});var od=i(p);T=a(od,"SPAN",{});var nd=i(T);y(l.$$.fragment,nd),nd.forEach(t),od.forEach(t),f=m(ma),x=a(ma,"SPAN",{});var sd=i(x);he=s(sd,"MobileBERT"),sd.forEach(t),ma.forEach(t),V=m(o),z=a(o,"H2",{class:!0});var fa=i(z);J=a(fa,"A",{id:!0,class:!0,href:!0});var rd=i(J);L=a(rd,"SPAN",{});var ad=i(L);y(X.$$.fragment,ad),ad.forEach(t),rd.forEach(t),me=m(fa),D=a(fa,"SPAN",{});var id=i(D);fe=s(id,"Overview"),id.forEach(t),fa.forEach(t),le=m(o),K=a(o,"P",{});var ua=i(K);N=s(ua,"The MobileBERT model was proposed in "),ee=a(ua,"A",{href:!0,rel:!0});var ld=i(ee);G=s(ld,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),ld.forEach(t),P=s(ua,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),ua.forEach(t),j=m(o),ne=a(o,"P",{});var dd=i(ne);U=s(dd,"The abstract from the paper is the following:"),dd.forEach(t),de=m(o),se=a(o,"P",{});var cd=i(se);W=a(cd,"EM",{});var pd=i(W);ue=s(pd,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),pd.forEach(t),cd.forEach(t),ce=m(o),q=a(o,"P",{});var hd=i(q);ge=s(hd,"Tips:"),hd.forEach(t),R=m(o),Z=a(o,"UL",{});var ga=i(Z);re=a(ga,"LI",{});var md=i(re);H=s(md,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),md.forEach(t),_e=m(ga),ae=a(ga,"LI",{});var fd=i(ae);O=s(fd,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),fd.forEach(t),ga.forEach(t),pe=m(o),A=a(o,"P",{});var Po=i(A);be=s(Po,"This model was contributed by "),u=a(Po,"A",{href:!0,rel:!0});var ud=i(u);B=s(ud,"vshampor"),ud.forEach(t),Y=s(Po,". The original code can be found "),ve=a(Po,"A",{href:!0,rel:!0});var gd=i(ve);$e=s(gd,"here"),gd.forEach(t),S=s(Po,"."),Po.forEach(t),we=m(o),Te=a(o,"H2",{class:!0});var _a=i(Te);ke=a(_a,"A",{id:!0,class:!0,href:!0});var _d=i(ke);C=a(_d,"SPAN",{});var bd=i(C);y(I.$$.fragment,bd),bd.forEach(t),_d.forEach(t),Fe=m(_a),ye=a(_a,"SPAN",{});var Td=i(ye);Q=s(Td,"MobileBertConfig"),Td.forEach(t),_a.forEach(t),Me=m(o),te=a(o,"DIV",{class:!0});var at=i(te);y(oe.$$.fragment,at),Be=m(at),Mt=a(at,"P",{});var $t=i(Mt);Ep=s($t,"This is the configuration class to store the configuration of a "),ya=a($t,"A",{href:!0});var kd=i(ya);xp=s(kd,"MobileBertModel"),kd.forEach(t),zp=s($t," or a "),wa=a($t,"A",{href:!0});var vd=i(wa);Pp=s(vd,"TFMobileBertModel"),vd.forEach(t),qp=s($t,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),is=a($t,"A",{href:!0,rel:!0});var yd=i(is);jp=s(yd,"google/mobilebert-uncased"),yd.forEach(t),Cp=s($t," architecture."),$t.forEach(t),Np=m(at),Wt=a(at,"P",{});var qo=i(Wt);Op=s(qo,"Configuration objects inherit from "),Ma=a(qo,"A",{href:!0});var wd=i(Ma);Sp=s(wd,"PretrainedConfig"),wd.forEach(t),Ap=s(qo,` and can be used to control the model outputs. Read the
documentation from `),$a=a(qo,"A",{href:!0});var Md=i($a);Ip=s(Md,"PretrainedConfig"),Md.forEach(t),Lp=s(qo," for more information."),qo.forEach(t),Dp=m(at),y(jo.$$.fragment,at),Wp=m(at),qi=a(at,"P",{});var $d=i(qi);Rp=s($d,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),$d.forEach(t),at.forEach(t),Ad=m(o),Rt=a(o,"H2",{class:!0});var ba=i(Rt);Co=a(ba,"A",{id:!0,class:!0,href:!0});var Fd=i(Co);ji=a(Fd,"SPAN",{});var Bd=i(ji);y(ls.$$.fragment,Bd),Bd.forEach(t),Fd.forEach(t),Up=m(ba),Ci=a(ba,"SPAN",{});var Ed=i(Ci);Hp=s(Ed,"MobileBertTokenizer"),Ed.forEach(t),ba.forEach(t),Id=m(o),st=a(o,"DIV",{class:!0});var Ft=i(st);y(ds.$$.fragment,Ft),Qp=m(Ft),Ni=a(Ft,"P",{});var xd=i(Ni);Kp=s(xd,"Construct a MobileBERT tokenizer."),xd.forEach(t),Vp=m(Ft),No=a(Ft,"P",{});var Zn=i(No);Fa=a(Zn,"A",{href:!0});var zd=i(Fa);Gp=s(zd,"MobileBertTokenizer"),zd.forEach(t),Yp=s(Zn," is identical to "),Ba=a(Zn,"A",{href:!0});var Pd=i(Ba);Jp=s(Pd,"BertTokenizer"),Pd.forEach(t),Zp=s(Zn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Zn.forEach(t),Xp=m(Ft),cs=a(Ft,"P",{});var Ta=i(cs);eh=s(Ta,"Refer to superclass "),Ea=a(Ta,"A",{href:!0});var qd=i(Ea);th=s(qd,"BertTokenizer"),qd.forEach(t),oh=s(Ta," for usage examples and documentation concerning parameters."),Ta.forEach(t),Ft.forEach(t),Ld=m(o),Ut=a(o,"H2",{class:!0});var ka=i(Ut);Oo=a(ka,"A",{id:!0,class:!0,href:!0});var jd=i(Oo);Oi=a(jd,"SPAN",{});var Cd=i(Oi);y(ps.$$.fragment,Cd),Cd.forEach(t),jd.forEach(t),nh=m(ka),Si=a(ka,"SPAN",{});var Nd=i(Si);sh=s(Nd,"MobileBertTokenizerFast"),Nd.forEach(t),ka.forEach(t),Dd=m(o),rt=a(o,"DIV",{class:!0});var Bt=i(rt);y(hs.$$.fragment,Bt),rh=m(Bt),ms=a(Bt,"P",{});var va=i(ms);ah=s(va,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ai=a(va,"EM",{});var Od=i(Ai);ih=s(Od,"tokenizers"),Od.forEach(t),lh=s(va," library)."),va.forEach(t),dh=m(Bt),So=a(Bt,"P",{});var Sd=i(So);xa=a(Sd,"A",{href:!0});var PT=i(xa);ch=s(PT,"MobileBertTokenizerFast"),PT.forEach(t),ph=s(Sd," is identical to "),za=a(Sd,"A",{href:!0});var qT=i(za);hh=s(qT,"BertTokenizerFast"),qT.forEach(t),mh=s(Sd,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Sd.forEach(t),fh=m(Bt),fs=a(Bt,"P",{});var Mc=i(fs);uh=s(Mc,"Refer to superclass "),Pa=a(Mc,"A",{href:!0});var jT=i(Pa);gh=s(jT,"BertTokenizerFast"),jT.forEach(t),_h=s(Mc," for usage examples and documentation concerning parameters."),Mc.forEach(t),Bt.forEach(t),Wd=m(o),Ht=a(o,"H2",{class:!0});var $c=i(Ht);Ao=a($c,"A",{id:!0,class:!0,href:!0});var CT=i(Ao);Ii=a(CT,"SPAN",{});var NT=i(Ii);y(us.$$.fragment,NT),NT.forEach(t),CT.forEach(t),bh=m($c),Li=a($c,"SPAN",{});var OT=i(Li);Th=s(OT,"MobileBert specific outputs"),OT.forEach(t),$c.forEach(t),Rd=m(o),Qt=a(o,"DIV",{class:!0});var Fc=i(Qt);y(gs.$$.fragment,Fc),kh=m(Fc),_s=a(Fc,"P",{});var Bc=i(_s);vh=s(Bc,"Output type of "),qa=a(Bc,"A",{href:!0});var ST=i(qa);yh=s(ST,"MobileBertForPreTraining"),ST.forEach(t),wh=s(Bc,"."),Bc.forEach(t),Fc.forEach(t),Ud=m(o),Kt=a(o,"DIV",{class:!0});var Ec=i(Kt);y(bs.$$.fragment,Ec),Mh=m(Ec),Ts=a(Ec,"P",{});var xc=i(Ts);$h=s(xc,"Output type of "),ja=a(xc,"A",{href:!0});var AT=i(ja);Fh=s(AT,"TFMobileBertForPreTraining"),AT.forEach(t),Bh=s(xc,"."),xc.forEach(t),Ec.forEach(t),Hd=m(o),Vt=a(o,"H2",{class:!0});var zc=i(Vt);Io=a(zc,"A",{id:!0,class:!0,href:!0});var IT=i(Io);Di=a(IT,"SPAN",{});var LT=i(Di);y(ks.$$.fragment,LT),LT.forEach(t),IT.forEach(t),Eh=m(zc),Wi=a(zc,"SPAN",{});var DT=i(Wi);xh=s(DT,"MobileBertModel"),DT.forEach(t),zc.forEach(t),Qd=m(o),Ce=a(o,"DIV",{class:!0});var ut=i(Ce);y(vs.$$.fragment,ut),zh=m(ut),Ri=a(ut,"P",{});var WT=i(Ri);Ph=s(WT,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),WT.forEach(t),qh=m(ut),ys=a(ut,"P",{});var Pc=i(ys);jh=s(Pc,"This model inherits from "),Ca=a(Pc,"A",{href:!0});var RT=i(Ca);Ch=s(RT,"PreTrainedModel"),RT.forEach(t),Nh=s(Pc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc.forEach(t),Oh=m(ut),ws=a(ut,"P",{});var qc=i(ws);Sh=s(qc,"This model is also a PyTorch "),Ms=a(qc,"A",{href:!0,rel:!0});var UT=i(Ms);Ah=s(UT,"torch.nn.Module"),UT.forEach(t),Ih=s(qc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qc.forEach(t),Lh=m(ut),Ui=a(ut,"P",{});var HT=i(Ui);$s=a(HT,"A",{href:!0,rel:!0});var QT=i($s);Dh=s(QT,"https://arxiv.org/pdf/2004.02984.pdf"),QT.forEach(t),HT.forEach(t),Wh=m(ut),it=a(ut,"DIV",{class:!0});var Xn=i(it);y(Fs.$$.fragment,Xn),Rh=m(Xn),Gt=a(Xn,"P",{});var hi=i(Gt);Uh=s(hi,"The "),Na=a(hi,"A",{href:!0});var KT=i(Na);Hh=s(KT,"MobileBertModel"),KT.forEach(t),Qh=s(hi," forward method, overrides the "),Hi=a(hi,"CODE",{});var VT=i(Hi);Kh=s(VT,"__call__"),VT.forEach(t),Vh=s(hi," special method."),hi.forEach(t),Gh=m(Xn),y(Lo.$$.fragment,Xn),Yh=m(Xn),y(Do.$$.fragment,Xn),Xn.forEach(t),ut.forEach(t),Kd=m(o),Yt=a(o,"H2",{class:!0});var jc=i(Yt);Wo=a(jc,"A",{id:!0,class:!0,href:!0});var GT=i(Wo);Qi=a(GT,"SPAN",{});var YT=i(Qi);y(Bs.$$.fragment,YT),YT.forEach(t),GT.forEach(t),Jh=m(jc),Ki=a(jc,"SPAN",{});var JT=i(Ki);Zh=s(JT,"MobileBertForPreTraining"),JT.forEach(t),jc.forEach(t),Vd=m(o),Re=a(o,"DIV",{class:!0});var Et=i(Re);y(Es.$$.fragment,Et),Xh=m(Et),Jt=a(Et,"P",{});var mi=i(Jt);em=s(mi,"MobileBert Model with two heads on top as done during the pretraining: a "),Vi=a(mi,"CODE",{});var ZT=i(Vi);tm=s(ZT,"masked language modeling"),ZT.forEach(t),om=s(mi,` head and a
`),Gi=a(mi,"CODE",{});var XT=i(Gi);nm=s(XT,"next sentence prediction (classification)"),XT.forEach(t),sm=s(mi," head."),mi.forEach(t),rm=m(Et),xs=a(Et,"P",{});var Cc=i(xs);am=s(Cc,"This model inherits from "),Oa=a(Cc,"A",{href:!0});var ek=i(Oa);im=s(ek,"PreTrainedModel"),ek.forEach(t),lm=s(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),dm=m(Et),zs=a(Et,"P",{});var Nc=i(zs);cm=s(Nc,"This model is also a PyTorch "),Ps=a(Nc,"A",{href:!0,rel:!0});var tk=i(Ps);pm=s(tk,"torch.nn.Module"),tk.forEach(t),hm=s(Nc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nc.forEach(t),mm=m(Et),lt=a(Et,"DIV",{class:!0});var es=i(lt);y(qs.$$.fragment,es),fm=m(es),Zt=a(es,"P",{});var fi=i(Zt);um=s(fi,"The "),Sa=a(fi,"A",{href:!0});var ok=i(Sa);gm=s(ok,"MobileBertForPreTraining"),ok.forEach(t),_m=s(fi," forward method, overrides the "),Yi=a(fi,"CODE",{});var nk=i(Yi);bm=s(nk,"__call__"),nk.forEach(t),Tm=s(fi," special method."),fi.forEach(t),km=m(es),y(Ro.$$.fragment,es),vm=m(es),y(Uo.$$.fragment,es),es.forEach(t),Et.forEach(t),Gd=m(o),Xt=a(o,"H2",{class:!0});var Oc=i(Xt);Ho=a(Oc,"A",{id:!0,class:!0,href:!0});var sk=i(Ho);Ji=a(sk,"SPAN",{});var rk=i(Ji);y(js.$$.fragment,rk),rk.forEach(t),sk.forEach(t),ym=m(Oc),Zi=a(Oc,"SPAN",{});var ak=i(Zi);wm=s(ak,"MobileBertForMaskedLM"),ak.forEach(t),Oc.forEach(t),Yd=m(o),Ue=a(o,"DIV",{class:!0});var xt=i(Ue);y(Cs.$$.fragment,xt),Mm=m(xt),Ns=a(xt,"P",{});var Sc=i(Ns);$m=s(Sc,"MobileBert Model with a "),Xi=a(Sc,"CODE",{});var ik=i(Xi);Fm=s(ik,"language modeling"),ik.forEach(t),Bm=s(Sc," head on top."),Sc.forEach(t),Em=m(xt),Os=a(xt,"P",{});var Ac=i(Os);xm=s(Ac,"This model inherits from "),Aa=a(Ac,"A",{href:!0});var lk=i(Aa);zm=s(lk,"PreTrainedModel"),lk.forEach(t),Pm=s(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),qm=m(xt),Ss=a(xt,"P",{});var Ic=i(Ss);jm=s(Ic,"This model is also a PyTorch "),As=a(Ic,"A",{href:!0,rel:!0});var dk=i(As);Cm=s(dk,"torch.nn.Module"),dk.forEach(t),Nm=s(Ic,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ic.forEach(t),Om=m(xt),Ye=a(xt,"DIV",{class:!0});var zt=i(Ye);y(Is.$$.fragment,zt),Sm=m(zt),eo=a(zt,"P",{});var ui=i(eo);Am=s(ui,"The "),Ia=a(ui,"A",{href:!0});var ck=i(Ia);Im=s(ck,"MobileBertForMaskedLM"),ck.forEach(t),Lm=s(ui," forward method, overrides the "),el=a(ui,"CODE",{});var pk=i(el);Dm=s(pk,"__call__"),pk.forEach(t),Wm=s(ui," special method."),ui.forEach(t),Rm=m(zt),y(Qo.$$.fragment,zt),Um=m(zt),y(Ko.$$.fragment,zt),Hm=m(zt),y(Vo.$$.fragment,zt),zt.forEach(t),xt.forEach(t),Jd=m(o),to=a(o,"H2",{class:!0});var Lc=i(to);Go=a(Lc,"A",{id:!0,class:!0,href:!0});var hk=i(Go);tl=a(hk,"SPAN",{});var mk=i(tl);y(Ls.$$.fragment,mk),mk.forEach(t),hk.forEach(t),Qm=m(Lc),ol=a(Lc,"SPAN",{});var fk=i(ol);Km=s(fk,"MobileBertForNextSentencePrediction"),fk.forEach(t),Lc.forEach(t),Zd=m(o),He=a(o,"DIV",{class:!0});var Pt=i(He);y(Ds.$$.fragment,Pt),Vm=m(Pt),Ws=a(Pt,"P",{});var Dc=i(Ws);Gm=s(Dc,"MobileBert Model with a "),nl=a(Dc,"CODE",{});var uk=i(nl);Ym=s(uk,"next sentence prediction (classification)"),uk.forEach(t),Jm=s(Dc," head on top."),Dc.forEach(t),Zm=m(Pt),Rs=a(Pt,"P",{});var Wc=i(Rs);Xm=s(Wc,"This model inherits from "),La=a(Wc,"A",{href:!0});var gk=i(La);ef=s(gk,"PreTrainedModel"),gk.forEach(t),tf=s(Wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc.forEach(t),of=m(Pt),Us=a(Pt,"P",{});var Rc=i(Us);nf=s(Rc,"This model is also a PyTorch "),Hs=a(Rc,"A",{href:!0,rel:!0});var _k=i(Hs);sf=s(_k,"torch.nn.Module"),_k.forEach(t),rf=s(Rc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc.forEach(t),af=m(Pt),dt=a(Pt,"DIV",{class:!0});var ts=i(dt);y(Qs.$$.fragment,ts),lf=m(ts),oo=a(ts,"P",{});var gi=i(oo);df=s(gi,"The "),Da=a(gi,"A",{href:!0});var bk=i(Da);cf=s(bk,"MobileBertForNextSentencePrediction"),bk.forEach(t),pf=s(gi," forward method, overrides the "),sl=a(gi,"CODE",{});var Tk=i(sl);hf=s(Tk,"__call__"),Tk.forEach(t),mf=s(gi," special method."),gi.forEach(t),ff=m(ts),y(Yo.$$.fragment,ts),uf=m(ts),y(Jo.$$.fragment,ts),ts.forEach(t),Pt.forEach(t),Xd=m(o),no=a(o,"H2",{class:!0});var Uc=i(no);Zo=a(Uc,"A",{id:!0,class:!0,href:!0});var kk=i(Zo);rl=a(kk,"SPAN",{});var vk=i(rl);y(Ks.$$.fragment,vk),vk.forEach(t),kk.forEach(t),gf=m(Uc),al=a(Uc,"SPAN",{});var yk=i(al);_f=s(yk,"MobileBertForSequenceClassification"),yk.forEach(t),Uc.forEach(t),ec=m(o),Qe=a(o,"DIV",{class:!0});var qt=i(Qe);y(Vs.$$.fragment,qt),bf=m(qt),il=a(qt,"P",{});var wk=i(il);Tf=s(wk,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wk.forEach(t),kf=m(qt),Gs=a(qt,"P",{});var Hc=i(Gs);vf=s(Hc,"This model inherits from "),Wa=a(Hc,"A",{href:!0});var Mk=i(Wa);yf=s(Mk,"PreTrainedModel"),Mk.forEach(t),wf=s(Hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc.forEach(t),Mf=m(qt),Ys=a(qt,"P",{});var Qc=i(Ys);$f=s(Qc,"This model is also a PyTorch "),Js=a(Qc,"A",{href:!0,rel:!0});var $k=i(Js);Ff=s($k,"torch.nn.Module"),$k.forEach(t),Bf=s(Qc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc.forEach(t),Ef=m(qt),je=a(qt,"DIV",{class:!0});var nt=i(je);y(Zs.$$.fragment,nt),xf=m(nt),so=a(nt,"P",{});var _i=i(so);zf=s(_i,"The "),Ra=a(_i,"A",{href:!0});var Fk=i(Ra);Pf=s(Fk,"MobileBertForSequenceClassification"),Fk.forEach(t),qf=s(_i," forward method, overrides the "),ll=a(_i,"CODE",{});var Bk=i(ll);jf=s(Bk,"__call__"),Bk.forEach(t),Cf=s(_i," special method."),_i.forEach(t),Nf=m(nt),y(Xo.$$.fragment,nt),Of=m(nt),y(en.$$.fragment,nt),Sf=m(nt),y(tn.$$.fragment,nt),Af=m(nt),y(on.$$.fragment,nt),If=m(nt),y(nn.$$.fragment,nt),nt.forEach(t),qt.forEach(t),tc=m(o),ro=a(o,"H2",{class:!0});var Kc=i(ro);sn=a(Kc,"A",{id:!0,class:!0,href:!0});var Ek=i(sn);dl=a(Ek,"SPAN",{});var xk=i(dl);y(Xs.$$.fragment,xk),xk.forEach(t),Ek.forEach(t),Lf=m(Kc),cl=a(Kc,"SPAN",{});var zk=i(cl);Df=s(zk,"MobileBertForMultipleChoice"),zk.forEach(t),Kc.forEach(t),oc=m(o),Ke=a(o,"DIV",{class:!0});var jt=i(Ke);y(er.$$.fragment,jt),Wf=m(jt),pl=a(jt,"P",{});var Pk=i(pl);Rf=s(Pk,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Pk.forEach(t),Uf=m(jt),tr=a(jt,"P",{});var Vc=i(tr);Hf=s(Vc,"This model inherits from "),Ua=a(Vc,"A",{href:!0});var qk=i(Ua);Qf=s(qk,"PreTrainedModel"),qk.forEach(t),Kf=s(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),Vf=m(jt),or=a(jt,"P",{});var Gc=i(or);Gf=s(Gc,"This model is also a PyTorch "),nr=a(Gc,"A",{href:!0,rel:!0});var jk=i(nr);Yf=s(jk,"torch.nn.Module"),jk.forEach(t),Jf=s(Gc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gc.forEach(t),Zf=m(jt),ct=a(jt,"DIV",{class:!0});var os=i(ct);y(sr.$$.fragment,os),Xf=m(os),ao=a(os,"P",{});var bi=i(ao);eu=s(bi,"The "),Ha=a(bi,"A",{href:!0});var Ck=i(Ha);tu=s(Ck,"MobileBertForMultipleChoice"),Ck.forEach(t),ou=s(bi," forward method, overrides the "),hl=a(bi,"CODE",{});var Nk=i(hl);nu=s(Nk,"__call__"),Nk.forEach(t),su=s(bi," special method."),bi.forEach(t),ru=m(os),y(rn.$$.fragment,os),au=m(os),y(an.$$.fragment,os),os.forEach(t),jt.forEach(t),nc=m(o),io=a(o,"H2",{class:!0});var Yc=i(io);ln=a(Yc,"A",{id:!0,class:!0,href:!0});var Ok=i(ln);ml=a(Ok,"SPAN",{});var Sk=i(ml);y(rr.$$.fragment,Sk),Sk.forEach(t),Ok.forEach(t),iu=m(Yc),fl=a(Yc,"SPAN",{});var Ak=i(fl);lu=s(Ak,"MobileBertForTokenClassification"),Ak.forEach(t),Yc.forEach(t),sc=m(o),Ve=a(o,"DIV",{class:!0});var Ct=i(Ve);y(ar.$$.fragment,Ct),du=m(Ct),ul=a(Ct,"P",{});var Ik=i(ul);cu=s(Ik,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ik.forEach(t),pu=m(Ct),ir=a(Ct,"P",{});var Jc=i(ir);hu=s(Jc,"This model inherits from "),Qa=a(Jc,"A",{href:!0});var Lk=i(Qa);mu=s(Lk,"PreTrainedModel"),Lk.forEach(t),fu=s(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(t),uu=m(Ct),lr=a(Ct,"P",{});var Zc=i(lr);gu=s(Zc,"This model is also a PyTorch "),dr=a(Zc,"A",{href:!0,rel:!0});var Dk=i(dr);_u=s(Dk,"torch.nn.Module"),Dk.forEach(t),bu=s(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Tu=m(Ct),Je=a(Ct,"DIV",{class:!0});var Nt=i(Je);y(cr.$$.fragment,Nt),ku=m(Nt),lo=a(Nt,"P",{});var Ti=i(lo);vu=s(Ti,"The "),Ka=a(Ti,"A",{href:!0});var Wk=i(Ka);yu=s(Wk,"MobileBertForTokenClassification"),Wk.forEach(t),wu=s(Ti," forward method, overrides the "),gl=a(Ti,"CODE",{});var Rk=i(gl);Mu=s(Rk,"__call__"),Rk.forEach(t),$u=s(Ti," special method."),Ti.forEach(t),Fu=m(Nt),y(dn.$$.fragment,Nt),Bu=m(Nt),y(cn.$$.fragment,Nt),Eu=m(Nt),y(pn.$$.fragment,Nt),Nt.forEach(t),Ct.forEach(t),rc=m(o),co=a(o,"H2",{class:!0});var Xc=i(co);hn=a(Xc,"A",{id:!0,class:!0,href:!0});var Uk=i(hn);_l=a(Uk,"SPAN",{});var Hk=i(_l);y(pr.$$.fragment,Hk),Hk.forEach(t),Uk.forEach(t),xu=m(Xc),bl=a(Xc,"SPAN",{});var Qk=i(bl);zu=s(Qk,"MobileBertForQuestionAnswering"),Qk.forEach(t),Xc.forEach(t),ac=m(o),Ge=a(o,"DIV",{class:!0});var Ot=i(Ge);y(hr.$$.fragment,Ot),Pu=m(Ot),po=a(Ot,"P",{});var ki=i(po);qu=s(ki,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Tl=a(ki,"CODE",{});var Kk=i(Tl);ju=s(Kk,"span start logits"),Kk.forEach(t),Cu=s(ki," and "),kl=a(ki,"CODE",{});var Vk=i(kl);Nu=s(Vk,"span end logits"),Vk.forEach(t),Ou=s(ki,")."),ki.forEach(t),Su=m(Ot),mr=a(Ot,"P",{});var ep=i(mr);Au=s(ep,"This model inherits from "),Va=a(ep,"A",{href:!0});var Gk=i(Va);Iu=s(Gk,"PreTrainedModel"),Gk.forEach(t),Lu=s(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),Du=m(Ot),fr=a(Ot,"P",{});var tp=i(fr);Wu=s(tp,"This model is also a PyTorch "),ur=a(tp,"A",{href:!0,rel:!0});var Yk=i(ur);Ru=s(Yk,"torch.nn.Module"),Yk.forEach(t),Uu=s(tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp.forEach(t),Hu=m(Ot),Ze=a(Ot,"DIV",{class:!0});var St=i(Ze);y(gr.$$.fragment,St),Qu=m(St),ho=a(St,"P",{});var vi=i(ho);Ku=s(vi,"The "),Ga=a(vi,"A",{href:!0});var Jk=i(Ga);Vu=s(Jk,"MobileBertForQuestionAnswering"),Jk.forEach(t),Gu=s(vi," forward method, overrides the "),vl=a(vi,"CODE",{});var Zk=i(vl);Yu=s(Zk,"__call__"),Zk.forEach(t),Ju=s(vi," special method."),vi.forEach(t),Zu=m(St),y(mn.$$.fragment,St),Xu=m(St),y(fn.$$.fragment,St),eg=m(St),y(un.$$.fragment,St),St.forEach(t),Ot.forEach(t),ic=m(o),mo=a(o,"H2",{class:!0});var op=i(mo);gn=a(op,"A",{id:!0,class:!0,href:!0});var Xk=i(gn);yl=a(Xk,"SPAN",{});var e1=i(yl);y(_r.$$.fragment,e1),e1.forEach(t),Xk.forEach(t),tg=m(op),wl=a(op,"SPAN",{});var t1=i(wl);og=s(t1,"TFMobileBertModel"),t1.forEach(t),op.forEach(t),lc=m(o),Ne=a(o,"DIV",{class:!0});var gt=i(Ne);y(br.$$.fragment,gt),ng=m(gt),Ml=a(gt,"P",{});var o1=i(Ml);sg=s(o1,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),o1.forEach(t),rg=m(gt),Tr=a(gt,"P",{});var np=i(Tr);ag=s(np,"This model inherits from "),Ya=a(np,"A",{href:!0});var n1=i(Ya);ig=s(n1,"TFPreTrainedModel"),n1.forEach(t),lg=s(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),dg=m(gt),kr=a(gt,"P",{});var sp=i(kr);cg=s(sp,"This model is also a "),vr=a(sp,"A",{href:!0,rel:!0});var s1=i(vr);pg=s(s1,"tf.keras.Model"),s1.forEach(t),hg=s(sp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sp.forEach(t),mg=m(gt),y(_n.$$.fragment,gt),fg=m(gt),pt=a(gt,"DIV",{class:!0});var ns=i(pt);y(yr.$$.fragment,ns),ug=m(ns),fo=a(ns,"P",{});var yi=i(fo);gg=s(yi,"The "),Ja=a(yi,"A",{href:!0});var r1=i(Ja);_g=s(r1,"TFMobileBertModel"),r1.forEach(t),bg=s(yi," forward method, overrides the "),$l=a(yi,"CODE",{});var a1=i($l);Tg=s(a1,"__call__"),a1.forEach(t),kg=s(yi," special method."),yi.forEach(t),vg=m(ns),y(bn.$$.fragment,ns),yg=m(ns),y(Tn.$$.fragment,ns),ns.forEach(t),gt.forEach(t),dc=m(o),uo=a(o,"H2",{class:!0});var rp=i(uo);kn=a(rp,"A",{id:!0,class:!0,href:!0});var i1=i(kn);Fl=a(i1,"SPAN",{});var l1=i(Fl);y(wr.$$.fragment,l1),l1.forEach(t),i1.forEach(t),wg=m(rp),Bl=a(rp,"SPAN",{});var d1=i(Bl);Mg=s(d1,"TFMobileBertForPreTraining"),d1.forEach(t),rp.forEach(t),cc=m(o),Oe=a(o,"DIV",{class:!0});var _t=i(Oe);y(Mr.$$.fragment,_t),$g=m(_t),go=a(_t,"P",{});var wi=i(go);Fg=s(wi,"MobileBert Model with two heads on top as done during the pretraining: a "),El=a(wi,"CODE",{});var c1=i(El);Bg=s(c1,"masked language modeling"),c1.forEach(t),Eg=s(wi,` head and a
`),xl=a(wi,"CODE",{});var p1=i(xl);xg=s(p1,"next sentence prediction (classification)"),p1.forEach(t),zg=s(wi," head."),wi.forEach(t),Pg=m(_t),$r=a(_t,"P",{});var ap=i($r);qg=s(ap,"This model inherits from "),Za=a(ap,"A",{href:!0});var h1=i(Za);jg=s(h1,"TFPreTrainedModel"),h1.forEach(t),Cg=s(ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap.forEach(t),Ng=m(_t),Fr=a(_t,"P",{});var ip=i(Fr);Og=s(ip,"This model is also a "),Br=a(ip,"A",{href:!0,rel:!0});var m1=i(Br);Sg=s(m1,"tf.keras.Model"),m1.forEach(t),Ag=s(ip,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ip.forEach(t),Ig=m(_t),y(vn.$$.fragment,_t),Lg=m(_t),ht=a(_t,"DIV",{class:!0});var ss=i(ht);y(Er.$$.fragment,ss),Dg=m(ss),_o=a(ss,"P",{});var Mi=i(_o);Wg=s(Mi,"The "),Xa=a(Mi,"A",{href:!0});var f1=i(Xa);Rg=s(f1,"TFMobileBertForPreTraining"),f1.forEach(t),Ug=s(Mi," forward method, overrides the "),zl=a(Mi,"CODE",{});var u1=i(zl);Hg=s(u1,"__call__"),u1.forEach(t),Qg=s(Mi," special method."),Mi.forEach(t),Kg=m(ss),y(yn.$$.fragment,ss),Vg=m(ss),y(wn.$$.fragment,ss),ss.forEach(t),_t.forEach(t),pc=m(o),bo=a(o,"H2",{class:!0});var lp=i(bo);Mn=a(lp,"A",{id:!0,class:!0,href:!0});var g1=i(Mn);Pl=a(g1,"SPAN",{});var _1=i(Pl);y(xr.$$.fragment,_1),_1.forEach(t),g1.forEach(t),Gg=m(lp),ql=a(lp,"SPAN",{});var b1=i(ql);Yg=s(b1,"TFMobileBertForMaskedLM"),b1.forEach(t),lp.forEach(t),hc=m(o),Se=a(o,"DIV",{class:!0});var bt=i(Se);y(zr.$$.fragment,bt),Jg=m(bt),Pr=a(bt,"P",{});var dp=i(Pr);Zg=s(dp,"MobileBert Model with a "),jl=a(dp,"CODE",{});var T1=i(jl);Xg=s(T1,"language modeling"),T1.forEach(t),e_=s(dp," head on top."),dp.forEach(t),t_=m(bt),qr=a(bt,"P",{});var cp=i(qr);o_=s(cp,"This model inherits from "),ei=a(cp,"A",{href:!0});var k1=i(ei);n_=s(k1,"TFPreTrainedModel"),k1.forEach(t),s_=s(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),r_=m(bt),jr=a(bt,"P",{});var pp=i(jr);a_=s(pp,"This model is also a "),Cr=a(pp,"A",{href:!0,rel:!0});var v1=i(Cr);i_=s(v1,"tf.keras.Model"),v1.forEach(t),l_=s(pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pp.forEach(t),d_=m(bt),y($n.$$.fragment,bt),c_=m(bt),Xe=a(bt,"DIV",{class:!0});var At=i(Xe);y(Nr.$$.fragment,At),p_=m(At),To=a(At,"P",{});var $i=i(To);h_=s($i,"The "),ti=a($i,"A",{href:!0});var y1=i(ti);m_=s(y1,"TFMobileBertForMaskedLM"),y1.forEach(t),f_=s($i," forward method, overrides the "),Cl=a($i,"CODE",{});var w1=i(Cl);u_=s(w1,"__call__"),w1.forEach(t),g_=s($i," special method."),$i.forEach(t),__=m(At),y(Fn.$$.fragment,At),b_=m(At),y(Bn.$$.fragment,At),T_=m(At),y(En.$$.fragment,At),At.forEach(t),bt.forEach(t),mc=m(o),ko=a(o,"H2",{class:!0});var hp=i(ko);xn=a(hp,"A",{id:!0,class:!0,href:!0});var M1=i(xn);Nl=a(M1,"SPAN",{});var $1=i(Nl);y(Or.$$.fragment,$1),$1.forEach(t),M1.forEach(t),k_=m(hp),Ol=a(hp,"SPAN",{});var F1=i(Ol);v_=s(F1,"TFMobileBertForNextSentencePrediction"),F1.forEach(t),hp.forEach(t),fc=m(o),Ae=a(o,"DIV",{class:!0});var Tt=i(Ae);y(Sr.$$.fragment,Tt),y_=m(Tt),Ar=a(Tt,"P",{});var mp=i(Ar);w_=s(mp,"MobileBert Model with a "),Sl=a(mp,"CODE",{});var B1=i(Sl);M_=s(B1,"next sentence prediction (classification)"),B1.forEach(t),$_=s(mp," head on top."),mp.forEach(t),F_=m(Tt),Ir=a(Tt,"P",{});var fp=i(Ir);B_=s(fp,"This model inherits from "),oi=a(fp,"A",{href:!0});var E1=i(oi);E_=s(E1,"TFPreTrainedModel"),E1.forEach(t),x_=s(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),z_=m(Tt),Lr=a(Tt,"P",{});var up=i(Lr);P_=s(up,"This model is also a "),Dr=a(up,"A",{href:!0,rel:!0});var x1=i(Dr);q_=s(x1,"tf.keras.Model"),x1.forEach(t),j_=s(up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up.forEach(t),C_=m(Tt),y(zn.$$.fragment,Tt),N_=m(Tt),mt=a(Tt,"DIV",{class:!0});var rs=i(mt);y(Wr.$$.fragment,rs),O_=m(rs),vo=a(rs,"P",{});var Fi=i(vo);S_=s(Fi,"The "),ni=a(Fi,"A",{href:!0});var z1=i(ni);A_=s(z1,"TFMobileBertForNextSentencePrediction"),z1.forEach(t),I_=s(Fi," forward method, overrides the "),Al=a(Fi,"CODE",{});var P1=i(Al);L_=s(P1,"__call__"),P1.forEach(t),D_=s(Fi," special method."),Fi.forEach(t),W_=m(rs),y(Pn.$$.fragment,rs),R_=m(rs),y(qn.$$.fragment,rs),rs.forEach(t),Tt.forEach(t),uc=m(o),yo=a(o,"H2",{class:!0});var gp=i(yo);jn=a(gp,"A",{id:!0,class:!0,href:!0});var q1=i(jn);Il=a(q1,"SPAN",{});var j1=i(Il);y(Rr.$$.fragment,j1),j1.forEach(t),q1.forEach(t),U_=m(gp),Ll=a(gp,"SPAN",{});var C1=i(Ll);H_=s(C1,"TFMobileBertForSequenceClassification"),C1.forEach(t),gp.forEach(t),gc=m(o),Ie=a(o,"DIV",{class:!0});var kt=i(Ie);y(Ur.$$.fragment,kt),Q_=m(kt),Dl=a(kt,"P",{});var N1=i(Dl);K_=s(N1,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),N1.forEach(t),V_=m(kt),Hr=a(kt,"P",{});var _p=i(Hr);G_=s(_p,"This model inherits from "),si=a(_p,"A",{href:!0});var O1=i(si);Y_=s(O1,"TFPreTrainedModel"),O1.forEach(t),J_=s(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),Z_=m(kt),Qr=a(kt,"P",{});var bp=i(Qr);X_=s(bp,"This model is also a "),Kr=a(bp,"A",{href:!0,rel:!0});var S1=i(Kr);eb=s(S1,"tf.keras.Model"),S1.forEach(t),tb=s(bp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bp.forEach(t),ob=m(kt),y(Cn.$$.fragment,kt),nb=m(kt),et=a(kt,"DIV",{class:!0});var It=i(et);y(Vr.$$.fragment,It),sb=m(It),wo=a(It,"P",{});var Bi=i(wo);rb=s(Bi,"The "),ri=a(Bi,"A",{href:!0});var A1=i(ri);ab=s(A1,"TFMobileBertForSequenceClassification"),A1.forEach(t),ib=s(Bi," forward method, overrides the "),Wl=a(Bi,"CODE",{});var I1=i(Wl);lb=s(I1,"__call__"),I1.forEach(t),db=s(Bi," special method."),Bi.forEach(t),cb=m(It),y(Nn.$$.fragment,It),pb=m(It),y(On.$$.fragment,It),hb=m(It),y(Sn.$$.fragment,It),It.forEach(t),kt.forEach(t),_c=m(o),Mo=a(o,"H2",{class:!0});var Tp=i(Mo);An=a(Tp,"A",{id:!0,class:!0,href:!0});var L1=i(An);Rl=a(L1,"SPAN",{});var D1=i(Rl);y(Gr.$$.fragment,D1),D1.forEach(t),L1.forEach(t),mb=m(Tp),Ul=a(Tp,"SPAN",{});var W1=i(Ul);fb=s(W1,"TFMobileBertForMultipleChoice"),W1.forEach(t),Tp.forEach(t),bc=m(o),Le=a(o,"DIV",{class:!0});var vt=i(Le);y(Yr.$$.fragment,vt),ub=m(vt),Hl=a(vt,"P",{});var R1=i(Hl);gb=s(R1,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),R1.forEach(t),_b=m(vt),Jr=a(vt,"P",{});var kp=i(Jr);bb=s(kp,"This model inherits from "),ai=a(kp,"A",{href:!0});var U1=i(ai);Tb=s(U1,"TFPreTrainedModel"),U1.forEach(t),kb=s(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),vb=m(vt),Zr=a(vt,"P",{});var vp=i(Zr);yb=s(vp,"This model is also a "),Xr=a(vp,"A",{href:!0,rel:!0});var H1=i(Xr);wb=s(H1,"tf.keras.Model"),H1.forEach(t),Mb=s(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),$b=m(vt),y(In.$$.fragment,vt),Fb=m(vt),ft=a(vt,"DIV",{class:!0});var as=i(ft);y(ea.$$.fragment,as),Bb=m(as),$o=a(as,"P",{});var Ei=i($o);Eb=s(Ei,"The "),ii=a(Ei,"A",{href:!0});var Q1=i(ii);xb=s(Q1,"TFMobileBertForMultipleChoice"),Q1.forEach(t),zb=s(Ei," forward method, overrides the "),Ql=a(Ei,"CODE",{});var K1=i(Ql);Pb=s(K1,"__call__"),K1.forEach(t),qb=s(Ei," special method."),Ei.forEach(t),jb=m(as),y(Ln.$$.fragment,as),Cb=m(as),y(Dn.$$.fragment,as),as.forEach(t),vt.forEach(t),Tc=m(o),Fo=a(o,"H2",{class:!0});var yp=i(Fo);Wn=a(yp,"A",{id:!0,class:!0,href:!0});var V1=i(Wn);Kl=a(V1,"SPAN",{});var G1=i(Kl);y(ta.$$.fragment,G1),G1.forEach(t),V1.forEach(t),Nb=m(yp),Vl=a(yp,"SPAN",{});var Y1=i(Vl);Ob=s(Y1,"TFMobileBertForTokenClassification"),Y1.forEach(t),yp.forEach(t),kc=m(o),De=a(o,"DIV",{class:!0});var yt=i(De);y(oa.$$.fragment,yt),Sb=m(yt),Gl=a(yt,"P",{});var J1=i(Gl);Ab=s(J1,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),J1.forEach(t),Ib=m(yt),na=a(yt,"P",{});var wp=i(na);Lb=s(wp,"This model inherits from "),li=a(wp,"A",{href:!0});var Z1=i(li);Db=s(Z1,"TFPreTrainedModel"),Z1.forEach(t),Wb=s(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),Rb=m(yt),sa=a(yt,"P",{});var Mp=i(sa);Ub=s(Mp,"This model is also a "),ra=a(Mp,"A",{href:!0,rel:!0});var X1=i(ra);Hb=s(X1,"tf.keras.Model"),X1.forEach(t),Qb=s(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),Kb=m(yt),y(Rn.$$.fragment,yt),Vb=m(yt),tt=a(yt,"DIV",{class:!0});var Lt=i(tt);y(aa.$$.fragment,Lt),Gb=m(Lt),Bo=a(Lt,"P",{});var xi=i(Bo);Yb=s(xi,"The "),di=a(xi,"A",{href:!0});var ev=i(di);Jb=s(ev,"TFMobileBertForTokenClassification"),ev.forEach(t),Zb=s(xi," forward method, overrides the "),Yl=a(xi,"CODE",{});var tv=i(Yl);Xb=s(tv,"__call__"),tv.forEach(t),eT=s(xi," special method."),xi.forEach(t),tT=m(Lt),y(Un.$$.fragment,Lt),oT=m(Lt),y(Hn.$$.fragment,Lt),nT=m(Lt),y(Qn.$$.fragment,Lt),Lt.forEach(t),yt.forEach(t),vc=m(o),Eo=a(o,"H2",{class:!0});var $p=i(Eo);Kn=a($p,"A",{id:!0,class:!0,href:!0});var ov=i(Kn);Jl=a(ov,"SPAN",{});var nv=i(Jl);y(ia.$$.fragment,nv),nv.forEach(t),ov.forEach(t),sT=m($p),Zl=a($p,"SPAN",{});var sv=i(Zl);rT=s(sv,"TFMobileBertForQuestionAnswering"),sv.forEach(t),$p.forEach(t),yc=m(o),We=a(o,"DIV",{class:!0});var wt=i(We);y(la.$$.fragment,wt),aT=m(wt),xo=a(wt,"P",{});var zi=i(xo);iT=s(zi,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=a(zi,"CODE",{});var rv=i(Xl);lT=s(rv,"span start logits"),rv.forEach(t),dT=s(zi," and "),ed=a(zi,"CODE",{});var av=i(ed);cT=s(av,"span end logits"),av.forEach(t),pT=s(zi,")."),zi.forEach(t),hT=m(wt),da=a(wt,"P",{});var Fp=i(da);mT=s(Fp,"This model inherits from "),ci=a(Fp,"A",{href:!0});var iv=i(ci);fT=s(iv,"TFPreTrainedModel"),iv.forEach(t),uT=s(Fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp.forEach(t),gT=m(wt),ca=a(wt,"P",{});var Bp=i(ca);_T=s(Bp,"This model is also a "),pa=a(Bp,"A",{href:!0,rel:!0});var lv=i(pa);bT=s(lv,"tf.keras.Model"),lv.forEach(t),TT=s(Bp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bp.forEach(t),kT=m(wt),y(Vn.$$.fragment,wt),vT=m(wt),ot=a(wt,"DIV",{class:!0});var Dt=i(ot);y(ha.$$.fragment,Dt),yT=m(Dt),zo=a(Dt,"P",{});var Pi=i(zo);wT=s(Pi,"The "),pi=a(Pi,"A",{href:!0});var dv=i(pi);MT=s(dv,"TFMobileBertForQuestionAnswering"),dv.forEach(t),$T=s(Pi," forward method, overrides the "),td=a(Pi,"CODE",{});var cv=i(td);FT=s(cv,"__call__"),cv.forEach(t),BT=s(Pi," special method."),Pi.forEach(t),ET=m(Dt),y(Gn.$$.fragment,Dt),xT=m(Dt),y(Yn.$$.fragment,Dt),zT=m(Dt),y(Jn.$$.fragment,Dt),Dt.forEach(t),wt.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(fy)),b(p,"id","mobilebert"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#mobilebert"),b(c,"class","relative group"),b(J,"id","overview"),b(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(J,"href","#overview"),b(z,"class","relative group"),b(ee,"href","https://arxiv.org/abs/2004.02984"),b(ee,"rel","nofollow"),b(u,"href","https://huggingface.co/vshampor"),b(u,"rel","nofollow"),b(ve,"href","https://github.com/google-research/mobilebert"),b(ve,"rel","nofollow"),b(ke,"id","transformers.MobileBertConfig"),b(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ke,"href","#transformers.MobileBertConfig"),b(Te,"class","relative group"),b(ya,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertModel"),b(wa,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(is,"href","https://huggingface.co/google/mobilebert-uncased"),b(is,"rel","nofollow"),b(Ma,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),b($a,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Co,"id","transformers.MobileBertTokenizer"),b(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Co,"href","#transformers.MobileBertTokenizer"),b(Rt,"class","relative group"),b(Fa,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizer"),b(Ba,"href","/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer"),b(Ea,"href","/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer"),b(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oo,"id","transformers.MobileBertTokenizerFast"),b(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Oo,"href","#transformers.MobileBertTokenizerFast"),b(Ut,"class","relative group"),b(xa,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertTokenizerFast"),b(za,"href","/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizerFast"),b(Pa,"href","/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizerFast"),b(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ao,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ao,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Ht,"class","relative group"),b(qa,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ja,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Io,"id","transformers.MobileBertModel"),b(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Io,"href","#transformers.MobileBertModel"),b(Vt,"class","relative group"),b(Ca,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ms,"rel","nofollow"),b($s,"href","https://arxiv.org/pdf/2004.02984.pdf"),b($s,"rel","nofollow"),b(Na,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertModel"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wo,"id","transformers.MobileBertForPreTraining"),b(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wo,"href","#transformers.MobileBertForPreTraining"),b(Yt,"class","relative group"),b(Oa,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ps,"rel","nofollow"),b(Sa,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ho,"id","transformers.MobileBertForMaskedLM"),b(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ho,"href","#transformers.MobileBertForMaskedLM"),b(Xt,"class","relative group"),b(Aa,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(As,"rel","nofollow"),b(Ia,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Go,"id","transformers.MobileBertForNextSentencePrediction"),b(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Go,"href","#transformers.MobileBertForNextSentencePrediction"),b(to,"class","relative group"),b(La,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Hs,"rel","nofollow"),b(Da,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zo,"id","transformers.MobileBertForSequenceClassification"),b(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Zo,"href","#transformers.MobileBertForSequenceClassification"),b(no,"class","relative group"),b(Wa,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Js,"rel","nofollow"),b(Ra,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(sn,"id","transformers.MobileBertForMultipleChoice"),b(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(sn,"href","#transformers.MobileBertForMultipleChoice"),b(ro,"class","relative group"),b(Ua,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(nr,"rel","nofollow"),b(Ha,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ln,"id","transformers.MobileBertForTokenClassification"),b(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ln,"href","#transformers.MobileBertForTokenClassification"),b(io,"class","relative group"),b(Qa,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(dr,"rel","nofollow"),b(Ka,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(hn,"id","transformers.MobileBertForQuestionAnswering"),b(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(hn,"href","#transformers.MobileBertForQuestionAnswering"),b(co,"class","relative group"),b(Va,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),b(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ur,"rel","nofollow"),b(Ga,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(gn,"id","transformers.TFMobileBertModel"),b(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(gn,"href","#transformers.TFMobileBertModel"),b(mo,"class","relative group"),b(Ya,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(vr,"rel","nofollow"),b(Ja,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(kn,"id","transformers.TFMobileBertForPreTraining"),b(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(kn,"href","#transformers.TFMobileBertForPreTraining"),b(uo,"class","relative group"),b(Za,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Br,"rel","nofollow"),b(Xa,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Mn,"id","transformers.TFMobileBertForMaskedLM"),b(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Mn,"href","#transformers.TFMobileBertForMaskedLM"),b(bo,"class","relative group"),b(ei,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Cr,"rel","nofollow"),b(ti,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xn,"id","transformers.TFMobileBertForNextSentencePrediction"),b(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(xn,"href","#transformers.TFMobileBertForNextSentencePrediction"),b(ko,"class","relative group"),b(oi,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(Dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Dr,"rel","nofollow"),b(ni,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),b(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jn,"id","transformers.TFMobileBertForSequenceClassification"),b(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(jn,"href","#transformers.TFMobileBertForSequenceClassification"),b(yo,"class","relative group"),b(si,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(Kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Kr,"rel","nofollow"),b(ri,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(An,"id","transformers.TFMobileBertForMultipleChoice"),b(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(An,"href","#transformers.TFMobileBertForMultipleChoice"),b(Mo,"class","relative group"),b(ai,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Xr,"rel","nofollow"),b(ii,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),b(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wn,"id","transformers.TFMobileBertForTokenClassification"),b(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wn,"href","#transformers.TFMobileBertForTokenClassification"),b(Fo,"class","relative group"),b(li,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(ra,"rel","nofollow"),b(di,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Kn,"id","transformers.TFMobileBertForQuestionAnswering"),b(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Kn,"href","#transformers.TFMobileBertForQuestionAnswering"),b(Eo,"class","relative group"),b(ci,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),b(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(pa,"rel","nofollow"),b(pi,"href","/docs/transformers/pr_17196/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),g(o,_,k),g(o,c,k),e(c,p),e(p,T),w(l,T,null),e(c,f),e(c,x),e(x,he),g(o,V,k),g(o,z,k),e(z,J),e(J,L),w(X,L,null),e(z,me),e(z,D),e(D,fe),g(o,le,k),g(o,K,k),e(K,N),e(K,ee),e(ee,G),e(K,P),g(o,j,k),g(o,ne,k),e(ne,U),g(o,de,k),g(o,se,k),e(se,W),e(W,ue),g(o,ce,k),g(o,q,k),e(q,ge),g(o,R,k),g(o,Z,k),e(Z,re),e(re,H),e(Z,_e),e(Z,ae),e(ae,O),g(o,pe,k),g(o,A,k),e(A,be),e(A,u),e(u,B),e(A,Y),e(A,ve),e(ve,$e),e(A,S),g(o,we,k),g(o,Te,k),e(Te,ke),e(ke,C),w(I,C,null),e(Te,Fe),e(Te,ye),e(ye,Q),g(o,Me,k),g(o,te,k),w(oe,te,null),e(te,Be),e(te,Mt),e(Mt,Ep),e(Mt,ya),e(ya,xp),e(Mt,zp),e(Mt,wa),e(wa,Pp),e(Mt,qp),e(Mt,is),e(is,jp),e(Mt,Cp),e(te,Np),e(te,Wt),e(Wt,Op),e(Wt,Ma),e(Ma,Sp),e(Wt,Ap),e(Wt,$a),e($a,Ip),e(Wt,Lp),e(te,Dp),w(jo,te,null),e(te,Wp),e(te,qi),e(qi,Rp),g(o,Ad,k),g(o,Rt,k),e(Rt,Co),e(Co,ji),w(ls,ji,null),e(Rt,Up),e(Rt,Ci),e(Ci,Hp),g(o,Id,k),g(o,st,k),w(ds,st,null),e(st,Qp),e(st,Ni),e(Ni,Kp),e(st,Vp),e(st,No),e(No,Fa),e(Fa,Gp),e(No,Yp),e(No,Ba),e(Ba,Jp),e(No,Zp),e(st,Xp),e(st,cs),e(cs,eh),e(cs,Ea),e(Ea,th),e(cs,oh),g(o,Ld,k),g(o,Ut,k),e(Ut,Oo),e(Oo,Oi),w(ps,Oi,null),e(Ut,nh),e(Ut,Si),e(Si,sh),g(o,Dd,k),g(o,rt,k),w(hs,rt,null),e(rt,rh),e(rt,ms),e(ms,ah),e(ms,Ai),e(Ai,ih),e(ms,lh),e(rt,dh),e(rt,So),e(So,xa),e(xa,ch),e(So,ph),e(So,za),e(za,hh),e(So,mh),e(rt,fh),e(rt,fs),e(fs,uh),e(fs,Pa),e(Pa,gh),e(fs,_h),g(o,Wd,k),g(o,Ht,k),e(Ht,Ao),e(Ao,Ii),w(us,Ii,null),e(Ht,bh),e(Ht,Li),e(Li,Th),g(o,Rd,k),g(o,Qt,k),w(gs,Qt,null),e(Qt,kh),e(Qt,_s),e(_s,vh),e(_s,qa),e(qa,yh),e(_s,wh),g(o,Ud,k),g(o,Kt,k),w(bs,Kt,null),e(Kt,Mh),e(Kt,Ts),e(Ts,$h),e(Ts,ja),e(ja,Fh),e(Ts,Bh),g(o,Hd,k),g(o,Vt,k),e(Vt,Io),e(Io,Di),w(ks,Di,null),e(Vt,Eh),e(Vt,Wi),e(Wi,xh),g(o,Qd,k),g(o,Ce,k),w(vs,Ce,null),e(Ce,zh),e(Ce,Ri),e(Ri,Ph),e(Ce,qh),e(Ce,ys),e(ys,jh),e(ys,Ca),e(Ca,Ch),e(ys,Nh),e(Ce,Oh),e(Ce,ws),e(ws,Sh),e(ws,Ms),e(Ms,Ah),e(ws,Ih),e(Ce,Lh),e(Ce,Ui),e(Ui,$s),e($s,Dh),e(Ce,Wh),e(Ce,it),w(Fs,it,null),e(it,Rh),e(it,Gt),e(Gt,Uh),e(Gt,Na),e(Na,Hh),e(Gt,Qh),e(Gt,Hi),e(Hi,Kh),e(Gt,Vh),e(it,Gh),w(Lo,it,null),e(it,Yh),w(Do,it,null),g(o,Kd,k),g(o,Yt,k),e(Yt,Wo),e(Wo,Qi),w(Bs,Qi,null),e(Yt,Jh),e(Yt,Ki),e(Ki,Zh),g(o,Vd,k),g(o,Re,k),w(Es,Re,null),e(Re,Xh),e(Re,Jt),e(Jt,em),e(Jt,Vi),e(Vi,tm),e(Jt,om),e(Jt,Gi),e(Gi,nm),e(Jt,sm),e(Re,rm),e(Re,xs),e(xs,am),e(xs,Oa),e(Oa,im),e(xs,lm),e(Re,dm),e(Re,zs),e(zs,cm),e(zs,Ps),e(Ps,pm),e(zs,hm),e(Re,mm),e(Re,lt),w(qs,lt,null),e(lt,fm),e(lt,Zt),e(Zt,um),e(Zt,Sa),e(Sa,gm),e(Zt,_m),e(Zt,Yi),e(Yi,bm),e(Zt,Tm),e(lt,km),w(Ro,lt,null),e(lt,vm),w(Uo,lt,null),g(o,Gd,k),g(o,Xt,k),e(Xt,Ho),e(Ho,Ji),w(js,Ji,null),e(Xt,ym),e(Xt,Zi),e(Zi,wm),g(o,Yd,k),g(o,Ue,k),w(Cs,Ue,null),e(Ue,Mm),e(Ue,Ns),e(Ns,$m),e(Ns,Xi),e(Xi,Fm),e(Ns,Bm),e(Ue,Em),e(Ue,Os),e(Os,xm),e(Os,Aa),e(Aa,zm),e(Os,Pm),e(Ue,qm),e(Ue,Ss),e(Ss,jm),e(Ss,As),e(As,Cm),e(Ss,Nm),e(Ue,Om),e(Ue,Ye),w(Is,Ye,null),e(Ye,Sm),e(Ye,eo),e(eo,Am),e(eo,Ia),e(Ia,Im),e(eo,Lm),e(eo,el),e(el,Dm),e(eo,Wm),e(Ye,Rm),w(Qo,Ye,null),e(Ye,Um),w(Ko,Ye,null),e(Ye,Hm),w(Vo,Ye,null),g(o,Jd,k),g(o,to,k),e(to,Go),e(Go,tl),w(Ls,tl,null),e(to,Qm),e(to,ol),e(ol,Km),g(o,Zd,k),g(o,He,k),w(Ds,He,null),e(He,Vm),e(He,Ws),e(Ws,Gm),e(Ws,nl),e(nl,Ym),e(Ws,Jm),e(He,Zm),e(He,Rs),e(Rs,Xm),e(Rs,La),e(La,ef),e(Rs,tf),e(He,of),e(He,Us),e(Us,nf),e(Us,Hs),e(Hs,sf),e(Us,rf),e(He,af),e(He,dt),w(Qs,dt,null),e(dt,lf),e(dt,oo),e(oo,df),e(oo,Da),e(Da,cf),e(oo,pf),e(oo,sl),e(sl,hf),e(oo,mf),e(dt,ff),w(Yo,dt,null),e(dt,uf),w(Jo,dt,null),g(o,Xd,k),g(o,no,k),e(no,Zo),e(Zo,rl),w(Ks,rl,null),e(no,gf),e(no,al),e(al,_f),g(o,ec,k),g(o,Qe,k),w(Vs,Qe,null),e(Qe,bf),e(Qe,il),e(il,Tf),e(Qe,kf),e(Qe,Gs),e(Gs,vf),e(Gs,Wa),e(Wa,yf),e(Gs,wf),e(Qe,Mf),e(Qe,Ys),e(Ys,$f),e(Ys,Js),e(Js,Ff),e(Ys,Bf),e(Qe,Ef),e(Qe,je),w(Zs,je,null),e(je,xf),e(je,so),e(so,zf),e(so,Ra),e(Ra,Pf),e(so,qf),e(so,ll),e(ll,jf),e(so,Cf),e(je,Nf),w(Xo,je,null),e(je,Of),w(en,je,null),e(je,Sf),w(tn,je,null),e(je,Af),w(on,je,null),e(je,If),w(nn,je,null),g(o,tc,k),g(o,ro,k),e(ro,sn),e(sn,dl),w(Xs,dl,null),e(ro,Lf),e(ro,cl),e(cl,Df),g(o,oc,k),g(o,Ke,k),w(er,Ke,null),e(Ke,Wf),e(Ke,pl),e(pl,Rf),e(Ke,Uf),e(Ke,tr),e(tr,Hf),e(tr,Ua),e(Ua,Qf),e(tr,Kf),e(Ke,Vf),e(Ke,or),e(or,Gf),e(or,nr),e(nr,Yf),e(or,Jf),e(Ke,Zf),e(Ke,ct),w(sr,ct,null),e(ct,Xf),e(ct,ao),e(ao,eu),e(ao,Ha),e(Ha,tu),e(ao,ou),e(ao,hl),e(hl,nu),e(ao,su),e(ct,ru),w(rn,ct,null),e(ct,au),w(an,ct,null),g(o,nc,k),g(o,io,k),e(io,ln),e(ln,ml),w(rr,ml,null),e(io,iu),e(io,fl),e(fl,lu),g(o,sc,k),g(o,Ve,k),w(ar,Ve,null),e(Ve,du),e(Ve,ul),e(ul,cu),e(Ve,pu),e(Ve,ir),e(ir,hu),e(ir,Qa),e(Qa,mu),e(ir,fu),e(Ve,uu),e(Ve,lr),e(lr,gu),e(lr,dr),e(dr,_u),e(lr,bu),e(Ve,Tu),e(Ve,Je),w(cr,Je,null),e(Je,ku),e(Je,lo),e(lo,vu),e(lo,Ka),e(Ka,yu),e(lo,wu),e(lo,gl),e(gl,Mu),e(lo,$u),e(Je,Fu),w(dn,Je,null),e(Je,Bu),w(cn,Je,null),e(Je,Eu),w(pn,Je,null),g(o,rc,k),g(o,co,k),e(co,hn),e(hn,_l),w(pr,_l,null),e(co,xu),e(co,bl),e(bl,zu),g(o,ac,k),g(o,Ge,k),w(hr,Ge,null),e(Ge,Pu),e(Ge,po),e(po,qu),e(po,Tl),e(Tl,ju),e(po,Cu),e(po,kl),e(kl,Nu),e(po,Ou),e(Ge,Su),e(Ge,mr),e(mr,Au),e(mr,Va),e(Va,Iu),e(mr,Lu),e(Ge,Du),e(Ge,fr),e(fr,Wu),e(fr,ur),e(ur,Ru),e(fr,Uu),e(Ge,Hu),e(Ge,Ze),w(gr,Ze,null),e(Ze,Qu),e(Ze,ho),e(ho,Ku),e(ho,Ga),e(Ga,Vu),e(ho,Gu),e(ho,vl),e(vl,Yu),e(ho,Ju),e(Ze,Zu),w(mn,Ze,null),e(Ze,Xu),w(fn,Ze,null),e(Ze,eg),w(un,Ze,null),g(o,ic,k),g(o,mo,k),e(mo,gn),e(gn,yl),w(_r,yl,null),e(mo,tg),e(mo,wl),e(wl,og),g(o,lc,k),g(o,Ne,k),w(br,Ne,null),e(Ne,ng),e(Ne,Ml),e(Ml,sg),e(Ne,rg),e(Ne,Tr),e(Tr,ag),e(Tr,Ya),e(Ya,ig),e(Tr,lg),e(Ne,dg),e(Ne,kr),e(kr,cg),e(kr,vr),e(vr,pg),e(kr,hg),e(Ne,mg),w(_n,Ne,null),e(Ne,fg),e(Ne,pt),w(yr,pt,null),e(pt,ug),e(pt,fo),e(fo,gg),e(fo,Ja),e(Ja,_g),e(fo,bg),e(fo,$l),e($l,Tg),e(fo,kg),e(pt,vg),w(bn,pt,null),e(pt,yg),w(Tn,pt,null),g(o,dc,k),g(o,uo,k),e(uo,kn),e(kn,Fl),w(wr,Fl,null),e(uo,wg),e(uo,Bl),e(Bl,Mg),g(o,cc,k),g(o,Oe,k),w(Mr,Oe,null),e(Oe,$g),e(Oe,go),e(go,Fg),e(go,El),e(El,Bg),e(go,Eg),e(go,xl),e(xl,xg),e(go,zg),e(Oe,Pg),e(Oe,$r),e($r,qg),e($r,Za),e(Za,jg),e($r,Cg),e(Oe,Ng),e(Oe,Fr),e(Fr,Og),e(Fr,Br),e(Br,Sg),e(Fr,Ag),e(Oe,Ig),w(vn,Oe,null),e(Oe,Lg),e(Oe,ht),w(Er,ht,null),e(ht,Dg),e(ht,_o),e(_o,Wg),e(_o,Xa),e(Xa,Rg),e(_o,Ug),e(_o,zl),e(zl,Hg),e(_o,Qg),e(ht,Kg),w(yn,ht,null),e(ht,Vg),w(wn,ht,null),g(o,pc,k),g(o,bo,k),e(bo,Mn),e(Mn,Pl),w(xr,Pl,null),e(bo,Gg),e(bo,ql),e(ql,Yg),g(o,hc,k),g(o,Se,k),w(zr,Se,null),e(Se,Jg),e(Se,Pr),e(Pr,Zg),e(Pr,jl),e(jl,Xg),e(Pr,e_),e(Se,t_),e(Se,qr),e(qr,o_),e(qr,ei),e(ei,n_),e(qr,s_),e(Se,r_),e(Se,jr),e(jr,a_),e(jr,Cr),e(Cr,i_),e(jr,l_),e(Se,d_),w($n,Se,null),e(Se,c_),e(Se,Xe),w(Nr,Xe,null),e(Xe,p_),e(Xe,To),e(To,h_),e(To,ti),e(ti,m_),e(To,f_),e(To,Cl),e(Cl,u_),e(To,g_),e(Xe,__),w(Fn,Xe,null),e(Xe,b_),w(Bn,Xe,null),e(Xe,T_),w(En,Xe,null),g(o,mc,k),g(o,ko,k),e(ko,xn),e(xn,Nl),w(Or,Nl,null),e(ko,k_),e(ko,Ol),e(Ol,v_),g(o,fc,k),g(o,Ae,k),w(Sr,Ae,null),e(Ae,y_),e(Ae,Ar),e(Ar,w_),e(Ar,Sl),e(Sl,M_),e(Ar,$_),e(Ae,F_),e(Ae,Ir),e(Ir,B_),e(Ir,oi),e(oi,E_),e(Ir,x_),e(Ae,z_),e(Ae,Lr),e(Lr,P_),e(Lr,Dr),e(Dr,q_),e(Lr,j_),e(Ae,C_),w(zn,Ae,null),e(Ae,N_),e(Ae,mt),w(Wr,mt,null),e(mt,O_),e(mt,vo),e(vo,S_),e(vo,ni),e(ni,A_),e(vo,I_),e(vo,Al),e(Al,L_),e(vo,D_),e(mt,W_),w(Pn,mt,null),e(mt,R_),w(qn,mt,null),g(o,uc,k),g(o,yo,k),e(yo,jn),e(jn,Il),w(Rr,Il,null),e(yo,U_),e(yo,Ll),e(Ll,H_),g(o,gc,k),g(o,Ie,k),w(Ur,Ie,null),e(Ie,Q_),e(Ie,Dl),e(Dl,K_),e(Ie,V_),e(Ie,Hr),e(Hr,G_),e(Hr,si),e(si,Y_),e(Hr,J_),e(Ie,Z_),e(Ie,Qr),e(Qr,X_),e(Qr,Kr),e(Kr,eb),e(Qr,tb),e(Ie,ob),w(Cn,Ie,null),e(Ie,nb),e(Ie,et),w(Vr,et,null),e(et,sb),e(et,wo),e(wo,rb),e(wo,ri),e(ri,ab),e(wo,ib),e(wo,Wl),e(Wl,lb),e(wo,db),e(et,cb),w(Nn,et,null),e(et,pb),w(On,et,null),e(et,hb),w(Sn,et,null),g(o,_c,k),g(o,Mo,k),e(Mo,An),e(An,Rl),w(Gr,Rl,null),e(Mo,mb),e(Mo,Ul),e(Ul,fb),g(o,bc,k),g(o,Le,k),w(Yr,Le,null),e(Le,ub),e(Le,Hl),e(Hl,gb),e(Le,_b),e(Le,Jr),e(Jr,bb),e(Jr,ai),e(ai,Tb),e(Jr,kb),e(Le,vb),e(Le,Zr),e(Zr,yb),e(Zr,Xr),e(Xr,wb),e(Zr,Mb),e(Le,$b),w(In,Le,null),e(Le,Fb),e(Le,ft),w(ea,ft,null),e(ft,Bb),e(ft,$o),e($o,Eb),e($o,ii),e(ii,xb),e($o,zb),e($o,Ql),e(Ql,Pb),e($o,qb),e(ft,jb),w(Ln,ft,null),e(ft,Cb),w(Dn,ft,null),g(o,Tc,k),g(o,Fo,k),e(Fo,Wn),e(Wn,Kl),w(ta,Kl,null),e(Fo,Nb),e(Fo,Vl),e(Vl,Ob),g(o,kc,k),g(o,De,k),w(oa,De,null),e(De,Sb),e(De,Gl),e(Gl,Ab),e(De,Ib),e(De,na),e(na,Lb),e(na,li),e(li,Db),e(na,Wb),e(De,Rb),e(De,sa),e(sa,Ub),e(sa,ra),e(ra,Hb),e(sa,Qb),e(De,Kb),w(Rn,De,null),e(De,Vb),e(De,tt),w(aa,tt,null),e(tt,Gb),e(tt,Bo),e(Bo,Yb),e(Bo,di),e(di,Jb),e(Bo,Zb),e(Bo,Yl),e(Yl,Xb),e(Bo,eT),e(tt,tT),w(Un,tt,null),e(tt,oT),w(Hn,tt,null),e(tt,nT),w(Qn,tt,null),g(o,vc,k),g(o,Eo,k),e(Eo,Kn),e(Kn,Jl),w(ia,Jl,null),e(Eo,sT),e(Eo,Zl),e(Zl,rT),g(o,yc,k),g(o,We,k),w(la,We,null),e(We,aT),e(We,xo),e(xo,iT),e(xo,Xl),e(Xl,lT),e(xo,dT),e(xo,ed),e(ed,cT),e(xo,pT),e(We,hT),e(We,da),e(da,mT),e(da,ci),e(ci,fT),e(da,uT),e(We,gT),e(We,ca),e(ca,_T),e(ca,pa),e(pa,bT),e(ca,TT),e(We,kT),w(Vn,We,null),e(We,vT),e(We,ot),w(ha,ot,null),e(ot,yT),e(ot,zo),e(zo,wT),e(zo,pi),e(pi,MT),e(zo,$T),e(zo,td),e(td,FT),e(zo,BT),e(ot,ET),w(Gn,ot,null),e(ot,xT),w(Yn,ot,null),e(ot,zT),w(Jn,ot,null),wc=!0},p(o,[k]){const ma={};k&2&&(ma.$$scope={dirty:k,ctx:o}),jo.$set(ma);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),Lo.$set(od);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),Do.$set(nd);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),Ro.$set(sd);const fa={};k&2&&(fa.$$scope={dirty:k,ctx:o}),Uo.$set(fa);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:o}),Qo.$set(rd);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:o}),Ko.$set(ad);const id={};k&2&&(id.$$scope={dirty:k,ctx:o}),Vo.$set(id);const ua={};k&2&&(ua.$$scope={dirty:k,ctx:o}),Yo.$set(ua);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:o}),Jo.$set(ld);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:o}),Xo.$set(dd);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:o}),en.$set(cd);const pd={};k&2&&(pd.$$scope={dirty:k,ctx:o}),tn.$set(pd);const hd={};k&2&&(hd.$$scope={dirty:k,ctx:o}),on.$set(hd);const ga={};k&2&&(ga.$$scope={dirty:k,ctx:o}),nn.$set(ga);const md={};k&2&&(md.$$scope={dirty:k,ctx:o}),rn.$set(md);const fd={};k&2&&(fd.$$scope={dirty:k,ctx:o}),an.$set(fd);const Po={};k&2&&(Po.$$scope={dirty:k,ctx:o}),dn.$set(Po);const ud={};k&2&&(ud.$$scope={dirty:k,ctx:o}),cn.$set(ud);const gd={};k&2&&(gd.$$scope={dirty:k,ctx:o}),pn.$set(gd);const _a={};k&2&&(_a.$$scope={dirty:k,ctx:o}),mn.$set(_a);const _d={};k&2&&(_d.$$scope={dirty:k,ctx:o}),fn.$set(_d);const bd={};k&2&&(bd.$$scope={dirty:k,ctx:o}),un.$set(bd);const Td={};k&2&&(Td.$$scope={dirty:k,ctx:o}),_n.$set(Td);const at={};k&2&&(at.$$scope={dirty:k,ctx:o}),bn.$set(at);const $t={};k&2&&($t.$$scope={dirty:k,ctx:o}),Tn.$set($t);const kd={};k&2&&(kd.$$scope={dirty:k,ctx:o}),vn.$set(kd);const vd={};k&2&&(vd.$$scope={dirty:k,ctx:o}),yn.$set(vd);const yd={};k&2&&(yd.$$scope={dirty:k,ctx:o}),wn.$set(yd);const qo={};k&2&&(qo.$$scope={dirty:k,ctx:o}),$n.$set(qo);const wd={};k&2&&(wd.$$scope={dirty:k,ctx:o}),Fn.$set(wd);const Md={};k&2&&(Md.$$scope={dirty:k,ctx:o}),Bn.$set(Md);const $d={};k&2&&($d.$$scope={dirty:k,ctx:o}),En.$set($d);const ba={};k&2&&(ba.$$scope={dirty:k,ctx:o}),zn.$set(ba);const Fd={};k&2&&(Fd.$$scope={dirty:k,ctx:o}),Pn.$set(Fd);const Bd={};k&2&&(Bd.$$scope={dirty:k,ctx:o}),qn.$set(Bd);const Ed={};k&2&&(Ed.$$scope={dirty:k,ctx:o}),Cn.$set(Ed);const Ft={};k&2&&(Ft.$$scope={dirty:k,ctx:o}),Nn.$set(Ft);const xd={};k&2&&(xd.$$scope={dirty:k,ctx:o}),On.$set(xd);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Sn.$set(Zn);const zd={};k&2&&(zd.$$scope={dirty:k,ctx:o}),In.$set(zd);const Pd={};k&2&&(Pd.$$scope={dirty:k,ctx:o}),Ln.$set(Pd);const Ta={};k&2&&(Ta.$$scope={dirty:k,ctx:o}),Dn.$set(Ta);const qd={};k&2&&(qd.$$scope={dirty:k,ctx:o}),Rn.$set(qd);const ka={};k&2&&(ka.$$scope={dirty:k,ctx:o}),Un.$set(ka);const jd={};k&2&&(jd.$$scope={dirty:k,ctx:o}),Hn.$set(jd);const Cd={};k&2&&(Cd.$$scope={dirty:k,ctx:o}),Qn.$set(Cd);const Nd={};k&2&&(Nd.$$scope={dirty:k,ctx:o}),Vn.$set(Nd);const Bt={};k&2&&(Bt.$$scope={dirty:k,ctx:o}),Gn.$set(Bt);const va={};k&2&&(va.$$scope={dirty:k,ctx:o}),Yn.$set(va);const Od={};k&2&&(Od.$$scope={dirty:k,ctx:o}),Jn.$set(Od)},i(o){wc||(M(l.$$.fragment,o),M(X.$$.fragment,o),M(I.$$.fragment,o),M(oe.$$.fragment,o),M(jo.$$.fragment,o),M(ls.$$.fragment,o),M(ds.$$.fragment,o),M(ps.$$.fragment,o),M(hs.$$.fragment,o),M(us.$$.fragment,o),M(gs.$$.fragment,o),M(bs.$$.fragment,o),M(ks.$$.fragment,o),M(vs.$$.fragment,o),M(Fs.$$.fragment,o),M(Lo.$$.fragment,o),M(Do.$$.fragment,o),M(Bs.$$.fragment,o),M(Es.$$.fragment,o),M(qs.$$.fragment,o),M(Ro.$$.fragment,o),M(Uo.$$.fragment,o),M(js.$$.fragment,o),M(Cs.$$.fragment,o),M(Is.$$.fragment,o),M(Qo.$$.fragment,o),M(Ko.$$.fragment,o),M(Vo.$$.fragment,o),M(Ls.$$.fragment,o),M(Ds.$$.fragment,o),M(Qs.$$.fragment,o),M(Yo.$$.fragment,o),M(Jo.$$.fragment,o),M(Ks.$$.fragment,o),M(Vs.$$.fragment,o),M(Zs.$$.fragment,o),M(Xo.$$.fragment,o),M(en.$$.fragment,o),M(tn.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M(Xs.$$.fragment,o),M(er.$$.fragment,o),M(sr.$$.fragment,o),M(rn.$$.fragment,o),M(an.$$.fragment,o),M(rr.$$.fragment,o),M(ar.$$.fragment,o),M(cr.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(pn.$$.fragment,o),M(pr.$$.fragment,o),M(hr.$$.fragment,o),M(gr.$$.fragment,o),M(mn.$$.fragment,o),M(fn.$$.fragment,o),M(un.$$.fragment,o),M(_r.$$.fragment,o),M(br.$$.fragment,o),M(_n.$$.fragment,o),M(yr.$$.fragment,o),M(bn.$$.fragment,o),M(Tn.$$.fragment,o),M(wr.$$.fragment,o),M(Mr.$$.fragment,o),M(vn.$$.fragment,o),M(Er.$$.fragment,o),M(yn.$$.fragment,o),M(wn.$$.fragment,o),M(xr.$$.fragment,o),M(zr.$$.fragment,o),M($n.$$.fragment,o),M(Nr.$$.fragment,o),M(Fn.$$.fragment,o),M(Bn.$$.fragment,o),M(En.$$.fragment,o),M(Or.$$.fragment,o),M(Sr.$$.fragment,o),M(zn.$$.fragment,o),M(Wr.$$.fragment,o),M(Pn.$$.fragment,o),M(qn.$$.fragment,o),M(Rr.$$.fragment,o),M(Ur.$$.fragment,o),M(Cn.$$.fragment,o),M(Vr.$$.fragment,o),M(Nn.$$.fragment,o),M(On.$$.fragment,o),M(Sn.$$.fragment,o),M(Gr.$$.fragment,o),M(Yr.$$.fragment,o),M(In.$$.fragment,o),M(ea.$$.fragment,o),M(Ln.$$.fragment,o),M(Dn.$$.fragment,o),M(ta.$$.fragment,o),M(oa.$$.fragment,o),M(Rn.$$.fragment,o),M(aa.$$.fragment,o),M(Un.$$.fragment,o),M(Hn.$$.fragment,o),M(Qn.$$.fragment,o),M(ia.$$.fragment,o),M(la.$$.fragment,o),M(Vn.$$.fragment,o),M(ha.$$.fragment,o),M(Gn.$$.fragment,o),M(Yn.$$.fragment,o),M(Jn.$$.fragment,o),wc=!0)},o(o){$(l.$$.fragment,o),$(X.$$.fragment,o),$(I.$$.fragment,o),$(oe.$$.fragment,o),$(jo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Fs.$$.fragment,o),$(Lo.$$.fragment,o),$(Do.$$.fragment,o),$(Bs.$$.fragment,o),$(Es.$$.fragment,o),$(qs.$$.fragment,o),$(Ro.$$.fragment,o),$(Uo.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Is.$$.fragment,o),$(Qo.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Qs.$$.fragment,o),$(Yo.$$.fragment,o),$(Jo.$$.fragment,o),$(Ks.$$.fragment,o),$(Vs.$$.fragment,o),$(Zs.$$.fragment,o),$(Xo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Xs.$$.fragment,o),$(er.$$.fragment,o),$(sr.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(cr.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(gr.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(un.$$.fragment,o),$(_r.$$.fragment,o),$(br.$$.fragment,o),$(_n.$$.fragment,o),$(yr.$$.fragment,o),$(bn.$$.fragment,o),$(Tn.$$.fragment,o),$(wr.$$.fragment,o),$(Mr.$$.fragment,o),$(vn.$$.fragment,o),$(Er.$$.fragment,o),$(yn.$$.fragment,o),$(wn.$$.fragment,o),$(xr.$$.fragment,o),$(zr.$$.fragment,o),$($n.$$.fragment,o),$(Nr.$$.fragment,o),$(Fn.$$.fragment,o),$(Bn.$$.fragment,o),$(En.$$.fragment,o),$(Or.$$.fragment,o),$(Sr.$$.fragment,o),$(zn.$$.fragment,o),$(Wr.$$.fragment,o),$(Pn.$$.fragment,o),$(qn.$$.fragment,o),$(Rr.$$.fragment,o),$(Ur.$$.fragment,o),$(Cn.$$.fragment,o),$(Vr.$$.fragment,o),$(Nn.$$.fragment,o),$(On.$$.fragment,o),$(Sn.$$.fragment,o),$(Gr.$$.fragment,o),$(Yr.$$.fragment,o),$(In.$$.fragment,o),$(ea.$$.fragment,o),$(Ln.$$.fragment,o),$(Dn.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(Rn.$$.fragment,o),$(aa.$$.fragment,o),$(Un.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Vn.$$.fragment,o),$(ha.$$.fragment,o),$(Gn.$$.fragment,o),$(Yn.$$.fragment,o),$(Jn.$$.fragment,o),wc=!1},d(o){t(d),o&&t(_),o&&t(c),F(l),o&&t(V),o&&t(z),F(X),o&&t(le),o&&t(K),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(R),o&&t(Z),o&&t(pe),o&&t(A),o&&t(we),o&&t(Te),F(I),o&&t(Me),o&&t(te),F(oe),F(jo),o&&t(Ad),o&&t(Rt),F(ls),o&&t(Id),o&&t(st),F(ds),o&&t(Ld),o&&t(Ut),F(ps),o&&t(Dd),o&&t(rt),F(hs),o&&t(Wd),o&&t(Ht),F(us),o&&t(Rd),o&&t(Qt),F(gs),o&&t(Ud),o&&t(Kt),F(bs),o&&t(Hd),o&&t(Vt),F(ks),o&&t(Qd),o&&t(Ce),F(vs),F(Fs),F(Lo),F(Do),o&&t(Kd),o&&t(Yt),F(Bs),o&&t(Vd),o&&t(Re),F(Es),F(qs),F(Ro),F(Uo),o&&t(Gd),o&&t(Xt),F(js),o&&t(Yd),o&&t(Ue),F(Cs),F(Is),F(Qo),F(Ko),F(Vo),o&&t(Jd),o&&t(to),F(Ls),o&&t(Zd),o&&t(He),F(Ds),F(Qs),F(Yo),F(Jo),o&&t(Xd),o&&t(no),F(Ks),o&&t(ec),o&&t(Qe),F(Vs),F(Zs),F(Xo),F(en),F(tn),F(on),F(nn),o&&t(tc),o&&t(ro),F(Xs),o&&t(oc),o&&t(Ke),F(er),F(sr),F(rn),F(an),o&&t(nc),o&&t(io),F(rr),o&&t(sc),o&&t(Ve),F(ar),F(cr),F(dn),F(cn),F(pn),o&&t(rc),o&&t(co),F(pr),o&&t(ac),o&&t(Ge),F(hr),F(gr),F(mn),F(fn),F(un),o&&t(ic),o&&t(mo),F(_r),o&&t(lc),o&&t(Ne),F(br),F(_n),F(yr),F(bn),F(Tn),o&&t(dc),o&&t(uo),F(wr),o&&t(cc),o&&t(Oe),F(Mr),F(vn),F(Er),F(yn),F(wn),o&&t(pc),o&&t(bo),F(xr),o&&t(hc),o&&t(Se),F(zr),F($n),F(Nr),F(Fn),F(Bn),F(En),o&&t(mc),o&&t(ko),F(Or),o&&t(fc),o&&t(Ae),F(Sr),F(zn),F(Wr),F(Pn),F(qn),o&&t(uc),o&&t(yo),F(Rr),o&&t(gc),o&&t(Ie),F(Ur),F(Cn),F(Vr),F(Nn),F(On),F(Sn),o&&t(_c),o&&t(Mo),F(Gr),o&&t(bc),o&&t(Le),F(Yr),F(In),F(ea),F(Ln),F(Dn),o&&t(Tc),o&&t(Fo),F(ta),o&&t(kc),o&&t(De),F(oa),F(Rn),F(aa),F(Un),F(Hn),F(Qn),o&&t(vc),o&&t(Eo),F(ia),o&&t(yc),o&&t(We),F(la),F(Vn),F(ha),F(Gn),F(Yn),F(Jn)}}}const fy={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function uy(E){return uv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yy extends pv{constructor(d){super();hv(this,d,uy,my,mv,{})}}export{yy as default,fy as metadata};
