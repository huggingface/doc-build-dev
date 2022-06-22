import{S as P8,i as q8,s as j8,e as n,k as c,w as T,t as r,M as C8,c as s,d as t,m as p,a as i,x as v,h as a,b as u,G as e,g as _,y as w,q as $,o as x,B as F,v as N8,L as ne}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as oe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function O8(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertModel, BertConfig

# Initializing a BERT bert-base-uncased style configuration
configuration = BertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = BertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=r("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function I8(B){let d,b,h,m,g;return m=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),b=r("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function A8(B){let d,b,h,m,g;return m=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),b=r("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function L8(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function D8(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function S8(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function U8(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function W8(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function H8(B){let d,b,h,m,g;return m=new se({props:{code:`import torch
from transformers import BertTokenizer, BertLMHeadModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertLMHeadModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function R8(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function Q8(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function V8(B){let d,b;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function K8(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function J8(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function G8(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function X8(B){let d,b,h,m,g;return m=new se({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("textattack/bert-base-uncased-yelp-polarity")
model = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),b=r("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example of single-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Y8(B){let d,b;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function Z8(B){let d,b,h,m,g;return m=new se({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("textattack/bert-base-uncased-yelp-polarity")
model = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),b=r("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function eO(B){let d,b;return d=new se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BertForSequenceClassification.from_pretrained(
    "textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function tO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function oO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function nO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function sO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = BertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function rO(B){let d,b;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function aO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function iO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("deepset/bert-base-cased-squad2")
model = BertForQuestionAnswering.from_pretrained("deepset/bert-base-cased-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/bert-base-cased-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/bert-base-cased-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function lO(B){let d,b;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function dO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function cO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function pO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function mO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function fO(B){let d,b,h,m,g;return m=new se({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForPreTraining.from_pretrained("bert-base-uncased")
input_ids = tokenizer("Hello, my dog is cute", add_special_tokens=True, return_tensors="tf")
# Batch size 1

outputs = model(input_ids)
prediction_logits, seq_relationship_logits = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=n("p"),b=r("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function uO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertLMHeadModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function _O(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function bO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function kO(B){let d,b;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function yO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function TO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function vO(B){let d,b,h,m,g;return m=new se({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="tf")

logits = model(encoding["input_ids"], token_type_ids=encoding["token_type_ids"])[0]
assert logits[0][0] < logits[0][1]  # the next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=n("p"),b=r("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function wO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function $O(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function xO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity")
model = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function FO(B){let d,b;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function BO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function MO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function EO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function zO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function PO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function qO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = TFBertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function jO(B){let d,b;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function CO(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),g=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),be=r("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=n("p"),ee=r("This second option is useful when using "),L=n("code"),re=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ye=r("model(inputs)"),me=r("."),J=c(),O=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=n("ul"),j=n("li"),ie=r("a single Tensor with "),H=n("code"),fe=r("input_ids"),le=r(" only and nothing else: "),S=n("code"),Te=r("model(inputs_ids)"),ue=c(),q=n("li"),ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),ge=r("model([input_ids, attention_mask])"),de=r(" or "),Q=n("code"),_e=r("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),pe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=s(y,"P",{});var E=i(d);b=a(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=s(y,"UL",{});var K=i(m);g=s(K,"LI",{});var ze=i(g);l=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=s(K,"LI",{});var Be=i(M);be=a(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=s(y,"P",{});var I=i(z);ee=a(I,"This second option is useful when using "),L=s(I,"CODE",{});var Pe=i(L);re=a(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=a(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(I,"CODE",{});var Me=i(D);ye=a(Me,"model(inputs)"),Me.forEach(t),me=a(I,"."),I.forEach(t),J=p(y),O=s(y,"P",{});var qe=i(O);ae=a(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=s(y,"UL",{});var A=i(P);j=s(A,"LI",{});var W=i(j);ie=a(W,"a single Tensor with "),H=s(W,"CODE",{});var xe=i(H);fe=a(xe,"input_ids"),xe.forEach(t),le=a(W," only and nothing else: "),S=s(W,"CODE",{});var Fe=i(S);Te=a(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=s(A,"LI",{});var U=i(q);ce=a(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(U,"CODE",{});var Ee=i(R);ge=a(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=a(U," or "),Q=s(U,"CODE",{});var je=i(Q);_e=a(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(A),N=s(A,"LI",{});var he=i(N);ve=a(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=s(he,"CODE",{});var Ce=i(V);pe=a(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,E){_(y,d,E),e(d,b),_(y,h,E),_(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),_(y,X,E),_(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),_(y,J,E),_(y,O,E),e(O,ae),_(y,Y,E),_(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function NO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function OO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("ydshieh/bert-base-cased-squad2")
model = TFBertForQuestionAnswering.from_pretrained("ydshieh/bert-base-cased-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-cased-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-cased-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function IO(B){let d,b;return d=new se({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),b=!0},p:ne,i(h){b||($(d.$$.fragment,h),b=!0)},o(h){x(d.$$.fragment,h),b=!1},d(h){F(d,h)}}}function AO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function LO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function DO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function SO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function UO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function WO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForCausalLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function HO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function RO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function QO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function VO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="jax")

outputs = model(**encoding)
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function KO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function JO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function GO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function XO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function YO(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function ZO(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function eI(B){let d,b,h,m,g;return{c(){d=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=i(h);m=a(M,"Module"),M.forEach(t),g=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,b),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function tI(B){let d,b,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),b=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=i(d);b=a(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,b),_(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function oI(B){let d,b,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe,y,E,K,ze,Be,I,Pe,Me,qe,A,W,xe,Fe,U,Ee,je,he,Ce,yb,Nt,Ua,By,ho,My,xp,Ey,zy,Fp,Py,qy,Wa,jy,Cy,Ny,Ro,Oy,Bp,Iy,Ay,Mp,Ly,Dy,Sy,ms,Tb,Qo,fs,mm,Ha,Uy,fm,Wy,vb,Ne,Ra,Hy,um,Ry,Qy,Qa,Vy,Ep,Ky,Jy,Gy,Fo,Va,Xy,gm,Yy,Zy,Ka,zp,eT,_m,tT,oT,Pp,nT,bm,sT,rT,us,Ja,aT,Ga,iT,km,lT,dT,cT,It,Xa,pT,ym,hT,mT,gs,fT,Vo,uT,Tm,gT,_T,vm,bT,kT,yT,qp,Ya,wb,Ko,_s,wm,Za,TT,$m,vT,$b,rt,ei,wT,ti,$T,xm,xT,FT,BT,oi,MT,jp,ET,zT,PT,Bo,ni,qT,Fm,jT,CT,si,Cp,NT,Bm,OT,IT,Np,AT,Mm,LT,DT,At,ri,ST,Em,UT,WT,bs,HT,Jo,RT,zm,QT,VT,Pm,KT,JT,xb,Go,ks,qm,ai,GT,jm,XT,Fb,at,ii,YT,Xo,ZT,Cm,ev,tv,Nm,ov,nv,sv,Om,rv,av,ys,li,iv,di,lv,Im,dv,cv,pv,Ts,ci,hv,pi,mv,Am,fv,uv,Bb,Yo,vs,Lm,hi,gv,Dm,_v,Mb,Zo,mi,bv,fi,kv,Op,yv,Tv,Eb,en,ui,vv,gi,wv,Ip,$v,xv,zb,mo,_i,Fv,bi,Bv,Ap,Mv,Ev,zv,ws,ki,Pv,Sm,qv,Pb,tn,$s,Um,yi,jv,Wm,Cv,qb,Oe,Ti,Nv,Hm,Ov,Iv,vi,Av,Lp,Lv,Dv,Sv,wi,Uv,$i,Wv,Hv,Rv,xi,Qv,Fi,Vv,Kv,Jv,Ke,Gv,Rm,Xv,Yv,Qm,Zv,ew,Vm,tw,ow,Km,nw,sw,Jm,rw,aw,Gm,iw,lw,dw,Lt,Bi,cw,on,pw,Dp,hw,mw,Xm,fw,uw,gw,xs,_w,Fs,jb,nn,Bs,Ym,Mi,bw,Zm,kw,Cb,it,Ei,yw,sn,Tw,ef,vw,ww,tf,$w,xw,Fw,zi,Bw,Sp,Mw,Ew,zw,Pi,Pw,qi,qw,jw,Cw,Dt,ji,Nw,rn,Ow,Up,Iw,Aw,of,Lw,Dw,Sw,Ms,Uw,Es,Nb,an,zs,nf,Ci,Ww,sf,Hw,Ob,lt,Ni,Rw,Oi,Qw,rf,Vw,Kw,Jw,Ii,Gw,Wp,Xw,Yw,Zw,Ai,e$,Li,t$,o$,n$,St,Di,s$,ln,r$,Hp,a$,i$,af,l$,d$,c$,Ps,p$,qs,Ib,dn,js,lf,Si,h$,df,m$,Ab,dt,Ui,f$,Wi,u$,cf,g$,_$,b$,Hi,k$,Rp,y$,T$,v$,Ri,w$,Qi,$$,x$,F$,ut,Vi,B$,cn,M$,Qp,E$,z$,pf,P$,q$,j$,Cs,C$,Ns,N$,Os,Lb,pn,Is,hf,Ki,O$,mf,I$,Db,ct,Ji,A$,Gi,L$,ff,D$,S$,U$,Xi,W$,Vp,H$,R$,Q$,Yi,V$,Zi,K$,J$,G$,Ut,el,X$,hn,Y$,Kp,Z$,e0,uf,t0,o0,n0,As,s0,Ls,Sb,mn,Ds,gf,tl,r0,_f,a0,Ub,pt,ol,i0,bf,l0,d0,nl,c0,Jp,p0,h0,m0,sl,f0,rl,u0,g0,_0,Ve,al,b0,fn,k0,Gp,y0,T0,kf,v0,w0,$0,Ss,x0,Us,F0,Ws,B0,Hs,M0,Rs,Wb,un,Qs,yf,il,E0,Tf,z0,Hb,ht,ll,P0,vf,q0,j0,dl,C0,Xp,N0,O0,I0,cl,A0,pl,L0,D0,S0,Wt,hl,U0,gn,W0,Yp,H0,R0,wf,Q0,V0,K0,Vs,J0,Ks,Rb,_n,Js,$f,ml,G0,xf,X0,Qb,mt,fl,Y0,Ff,Z0,e2,ul,t2,Zp,o2,n2,s2,gl,r2,_l,a2,i2,l2,gt,bl,d2,bn,c2,eh,p2,h2,Bf,m2,f2,u2,Gs,g2,Xs,_2,Ys,Vb,kn,Zs,Mf,kl,b2,Ef,k2,Kb,ft,yl,y2,yn,T2,zf,v2,w2,Pf,$2,x2,F2,Tl,B2,th,M2,E2,z2,vl,P2,wl,q2,j2,C2,_t,$l,N2,Tn,O2,oh,I2,A2,qf,L2,D2,S2,er,U2,tr,W2,or,Jb,vn,nr,jf,xl,H2,Cf,R2,Gb,Je,Fl,Q2,Nf,V2,K2,Bl,J2,nh,G2,X2,Y2,Ml,Z2,El,ex,tx,ox,sr,nx,Ht,zl,sx,wn,rx,sh,ax,ix,Of,lx,dx,cx,rr,px,ar,Xb,$n,ir,If,Pl,hx,Af,mx,Yb,Ge,ql,fx,xn,ux,Lf,gx,_x,Df,bx,kx,yx,jl,Tx,rh,vx,wx,$x,Cl,xx,Nl,Fx,Bx,Mx,lr,Ex,Rt,Ol,zx,Fn,Px,ah,qx,jx,Sf,Cx,Nx,Ox,dr,Ix,cr,Zb,Bn,pr,Uf,Il,Ax,Wf,Lx,ek,Mn,Al,Dx,bt,Ll,Sx,Ie,Ux,Hf,Wx,Hx,Rf,Rx,Qx,Qf,Vx,Kx,Vf,Jx,Gx,Kf,Xx,Yx,Jf,Zx,eF,Gf,tF,oF,nF,Dl,Sl,sF,Xf,rF,aF,iF,Ul,lF,Yf,dF,cF,pF,G,hF,Zf,mF,fF,eu,uF,gF,tu,_F,bF,ou,kF,yF,nu,TF,vF,su,wF,$F,ru,xF,FF,au,BF,MF,iu,EF,zF,lu,PF,qF,du,jF,CF,cu,NF,OF,pu,IF,AF,hu,LF,DF,mu,SF,UF,fu,WF,HF,uu,RF,QF,gu,VF,KF,_u,JF,GF,bu,XF,YF,ZF,hr,tk,En,mr,ku,Wl,eB,yu,tB,ok,Xe,Hl,oB,Rl,nB,Tu,sB,rB,aB,Ql,iB,ih,lB,dB,cB,Vl,pB,Kl,hB,mB,fB,fr,uB,kt,Jl,gB,zn,_B,lh,bB,kB,vu,yB,TB,vB,ur,wB,gr,$B,_r,nk,Pn,br,wu,Gl,xB,$u,FB,sk,Ye,Xl,BB,Yl,MB,xu,EB,zB,PB,Zl,qB,dh,jB,CB,NB,ed,OB,td,IB,AB,LB,kr,DB,Qt,od,SB,qn,UB,ch,WB,HB,Fu,RB,QB,VB,yr,KB,Tr,rk,jn,vr,Bu,nd,JB,Mu,GB,ak,Ze,sd,XB,Eu,YB,ZB,rd,e7,ph,t7,o7,n7,ad,s7,id,r7,a7,i7,wr,l7,yt,ld,d7,Cn,c7,hh,p7,h7,zu,m7,f7,u7,$r,g7,xr,_7,Fr,ik,Nn,Br,Pu,dd,b7,qu,k7,lk,et,cd,y7,ju,T7,v7,pd,w7,mh,$7,x7,F7,hd,B7,md,M7,E7,z7,Mr,P7,Vt,fd,q7,On,j7,fh,C7,N7,Cu,O7,I7,A7,Er,L7,zr,dk,In,Pr,Nu,ud,D7,Ou,S7,ck,tt,gd,U7,Iu,W7,H7,_d,R7,uh,Q7,V7,K7,bd,J7,kd,G7,X7,Y7,qr,Z7,Tt,yd,eM,An,tM,gh,oM,nM,Au,sM,rM,aM,jr,iM,Cr,lM,Nr,pk,Ln,Or,Lu,Td,dM,Du,cM,hk,ot,vd,pM,Dn,hM,Su,mM,fM,Uu,uM,gM,_M,wd,bM,_h,kM,yM,TM,$d,vM,xd,wM,$M,xM,Ir,FM,vt,Fd,BM,Sn,MM,bh,EM,zM,Wu,PM,qM,jM,Ar,CM,Lr,NM,Dr,mk,Un,Sr,Hu,Bd,OM,Ru,IM,fk,Ae,Md,AM,Qu,LM,DM,Ed,SM,kh,UM,WM,HM,zd,RM,Pd,QM,VM,KM,Vu,JM,GM,fo,Ku,qd,XM,YM,Ju,jd,ZM,eE,Gu,Cd,tE,oE,Xu,Nd,nE,sE,Kt,Od,rE,Wn,aE,Yu,iE,lE,Zu,dE,cE,pE,Ur,hE,Wr,uk,Hn,Hr,eg,Id,mE,tg,fE,gk,Le,Ad,uE,Rn,gE,og,_E,bE,ng,kE,yE,TE,Ld,vE,yh,wE,$E,xE,Dd,FE,Sd,BE,ME,EE,sg,zE,PE,uo,rg,Ud,qE,jE,ag,Wd,CE,NE,ig,Hd,OE,IE,lg,Rd,AE,LE,Jt,Qd,DE,Qn,SE,dg,UE,WE,cg,HE,RE,QE,Rr,VE,Qr,_k,Vn,Vr,pg,Vd,KE,hg,JE,bk,De,Kd,GE,mg,XE,YE,Jd,ZE,Th,ez,tz,oz,Gd,nz,Xd,sz,rz,az,fg,iz,lz,go,ug,Yd,dz,cz,gg,Zd,pz,hz,_g,ec,mz,fz,bg,tc,uz,gz,Gt,oc,_z,Kn,bz,kg,kz,yz,yg,Tz,vz,wz,Kr,$z,Jr,kk,Jn,Gr,Tg,nc,xz,vg,Fz,yk,Se,sc,Bz,rc,Mz,wg,Ez,zz,Pz,ac,qz,vh,jz,Cz,Nz,ic,Oz,lc,Iz,Az,Lz,$g,Dz,Sz,_o,xg,dc,Uz,Wz,Fg,cc,Hz,Rz,Bg,pc,Qz,Vz,Mg,hc,Kz,Jz,Xt,mc,Gz,Gn,Xz,Eg,Yz,Zz,zg,e4,t4,o4,Xr,n4,Yr,Tk,Xn,Zr,Pg,fc,s4,qg,r4,vk,Ue,uc,a4,gc,i4,jg,l4,d4,c4,_c,p4,wh,h4,m4,f4,bc,u4,kc,g4,_4,b4,Cg,k4,y4,bo,Ng,yc,T4,v4,Og,Tc,w4,$4,Ig,vc,x4,F4,Ag,wc,B4,M4,Yt,$c,E4,Yn,z4,Lg,P4,q4,Dg,j4,C4,N4,ea,O4,ta,wk,Zn,oa,Sg,xc,I4,Ug,A4,$k,We,Fc,L4,Wg,D4,S4,Bc,U4,$h,W4,H4,R4,Mc,Q4,Ec,V4,K4,J4,Hg,G4,X4,ko,Rg,zc,Y4,Z4,Qg,Pc,eP,tP,Vg,qc,oP,nP,Kg,jc,sP,rP,Zt,Cc,aP,es,iP,Jg,lP,dP,Gg,cP,pP,hP,na,mP,sa,xk,ts,ra,Xg,Nc,fP,Yg,uP,Fk,He,Oc,gP,Zg,_P,bP,Ic,kP,xh,yP,TP,vP,Ac,wP,Lc,$P,xP,FP,e_,BP,MP,yo,t_,Dc,EP,zP,o_,Sc,PP,qP,n_,Uc,jP,CP,s_,Wc,NP,OP,eo,Hc,IP,os,AP,r_,LP,DP,a_,SP,UP,WP,aa,HP,ia,Bk,ns,la,i_,Rc,RP,l_,QP,Mk,Re,Qc,VP,d_,KP,JP,Vc,GP,Fh,XP,YP,ZP,Kc,eq,Jc,tq,oq,nq,c_,sq,rq,To,p_,Gc,aq,iq,h_,Xc,lq,dq,m_,Yc,cq,pq,f_,Zc,hq,mq,to,ep,fq,ss,uq,u_,gq,_q,g_,bq,kq,yq,da,Tq,ca,Ek,rs,pa,__,tp,vq,b_,wq,zk,Qe,op,$q,as,xq,k_,Fq,Bq,y_,Mq,Eq,zq,np,Pq,Bh,qq,jq,Cq,sp,Nq,rp,Oq,Iq,Aq,T_,Lq,Dq,vo,v_,ap,Sq,Uq,w_,ip,Wq,Hq,$_,lp,Rq,Qq,x_,dp,Vq,Kq,oo,cp,Jq,is,Gq,F_,Xq,Yq,B_,Zq,ej,tj,ha,oj,ma,Pk;return l=new $e({}),re=new $e({}),Ee=new $e({}),Ua=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/configuration_bert.py#L72"}}),ms=new oe({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[O8]},$$scope:{ctx:B}}}),Ha=new $e({}),Ra=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.BertTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.BertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert.py#L137"}}),Va=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xa=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gs=new oe({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[I8]},$$scope:{ctx:B}}}),Ya=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert.py#L350"}}),Za=new $e({}),ei=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.BertTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.BertTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),ni=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ri=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bs=new oe({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[A8]},$$scope:{ctx:B}}}),ai=new $e({}),ii=new C({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
List containing the vocabulary.`,name:"vocab_list"},{anchor:"transformers.TFBertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TFBertTokenizer.cls_token_id",description:`<strong>cls_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token_id"},{anchor:"transformers.TFBertTokenizer.sep_token_id",description:`<strong>sep_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token_id"},{anchor:"transformers.TFBertTokenizer.pad_token_id",description:`<strong>pad_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token_id"},{anchor:"transformers.TFBertTokenizer.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to truncate the sequence to the maximum length.`,name:"truncation"},{anchor:"transformers.TFBertTokenizer.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>512</code>) &#x2014;
The maximum length of the sequence, used for padding (if <code>padding</code> is &#x201C;max_length&#x201D;) and/or truncation (if
<code>truncation</code> is <code>True</code>).`,name:"max_length"},{anchor:"transformers.TFBertTokenizer.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
If set, the sequence will be padded to a multiple of this value.`,name:"pad_to_multiple_of"},{anchor:"transformers.TFBertTokenizer.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to return token_type_ids.`,name:"return_token_type_ids"},{anchor:"transformers.TFBertTokenizer.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert_tf.py#L12"}}),li=new C({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert_tf.py#L104"}}),ci=new C({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),hi=new $e({}),mi=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L767"}}),ui=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),_i=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L61"}}),ki=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/flax/struct.py#L109"}}),yi=new $e({}),Ti=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L870"}}),Bi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xs=new we({props:{$$slots:{default:[L8]},$$scope:{ctx:B}}}),Fs=new oe({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[D8]},$$scope:{ctx:B}}}),Mi=new $e({}),Ei=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1053"}}),ji=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
next_sentence_label (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>):
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence
pair (see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.
kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new we({props:{$$slots:{default:[S8]},$$scope:{ctx:B}}}),Es=new oe({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[U8]},$$scope:{ctx:B}}}),Ci=new $e({}),Ni=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1157"}}),Di=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BertLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[W8]},$$scope:{ctx:B}}}),qs=new oe({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[H8]},$$scope:{ctx:B}}}),Si=new $e({}),Ui=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1292"}}),Vi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new we({props:{$$slots:{default:[R8]},$$scope:{ctx:B}}}),Ns=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[Q8]},$$scope:{ctx:B}}}),Os=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[V8]},$$scope:{ctx:B}}}),Ki=new $e({}),Ji=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1405"}}),el=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new we({props:{$$slots:{default:[K8]},$$scope:{ctx:B}}}),Ls=new oe({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[J8]},$$scope:{ctx:B}}}),tl=new $e({}),ol=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1510"}}),al=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1526",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new we({props:{$$slots:{default:[G8]},$$scope:{ctx:B}}}),Us=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[X8]},$$scope:{ctx:B}}}),Ws=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[Y8]},$$scope:{ctx:B}}}),Hs=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[Z8]},$$scope:{ctx:B}}}),Rs=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[eO]},$$scope:{ctx:B}}}),il=new $e({}),ll=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1614"}}),hl=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vs=new we({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),Ks=new oe({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),ml=new $e({}),fl=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1709"}}),bl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gs=new we({props:{$$slots:{default:[nO]},$$scope:{ctx:B}}}),Xs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[sO]},$$scope:{ctx:B}}}),Ys=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[rO]},$$scope:{ctx:B}}}),kl=new $e({}),yl=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1796"}}),$l=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_bert.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new we({props:{$$slots:{default:[aO]},$$scope:{ctx:B}}}),tr=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[iO]},$$scope:{ctx:B}}}),or=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[lO]},$$scope:{ctx:B}}}),xl=new $e({}),Fl=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),sr=new we({props:{$$slots:{default:[dO]},$$scope:{ctx:B}}}),zl=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rr=new we({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),ar=new oe({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),Pl=new $e({}),ql=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),lr=new we({props:{$$slots:{default:[hO]},$$scope:{ctx:B}}}),Ol=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForPreTraining.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFBertForPreTraining.call.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.TFBertForPreTraining.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dr=new we({props:{$$slots:{default:[mO]},$$scope:{ctx:B}}}),cr=new oe({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[fO]},$$scope:{ctx:B}}}),Il=new $e({}),Al=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),Ll=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hr=new oe({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[uO]},$$scope:{ctx:B}}}),Wl=new $e({}),Hl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),fr=new we({props:{$$slots:{default:[gO]},$$scope:{ctx:B}}}),Jl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ur=new we({props:{$$slots:{default:[_O]},$$scope:{ctx:B}}}),gr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[bO]},$$scope:{ctx:B}}}),_r=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[kO]},$$scope:{ctx:B}}}),Gl=new $e({}),Xl=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),kr=new we({props:{$$slots:{default:[yO]},$$scope:{ctx:B}}}),od=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForNextSentencePrediction.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yr=new we({props:{$$slots:{default:[TO]},$$scope:{ctx:B}}}),Tr=new oe({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[vO]},$$scope:{ctx:B}}}),nd=new $e({}),sd=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),wr=new we({props:{$$slots:{default:[wO]},$$scope:{ctx:B}}}),ld=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$r=new we({props:{$$slots:{default:[$O]},$$scope:{ctx:B}}}),xr=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[xO]},$$scope:{ctx:B}}}),Fr=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[FO]},$$scope:{ctx:B}}}),dd=new $e({}),cd=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),Mr=new we({props:{$$slots:{default:[BO]},$$scope:{ctx:B}}}),fd=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Er=new we({props:{$$slots:{default:[MO]},$$scope:{ctx:B}}}),zr=new oe({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[EO]},$$scope:{ctx:B}}}),ud=new $e({}),gd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),qr=new we({props:{$$slots:{default:[zO]},$$scope:{ctx:B}}}),yd=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jr=new we({props:{$$slots:{default:[PO]},$$scope:{ctx:B}}}),Cr=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[qO]},$$scope:{ctx:B}}}),Nr=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[jO]},$$scope:{ctx:B}}}),Td=new $e({}),vd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),Ir=new we({props:{$$slots:{default:[CO]},$$scope:{ctx:B}}}),Fd=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ar=new we({props:{$$slots:{default:[NO]},$$scope:{ctx:B}}}),Lr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[OO]},$$scope:{ctx:B}}}),Dr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[IO]},$$scope:{ctx:B}}}),Bd=new $e({}),Md=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L994"}}),Od=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ur=new we({props:{$$slots:{default:[AO]},$$scope:{ctx:B}}}),Wr=new oe({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),Id=new $e({}),Ad=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1067"}}),Qd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
<p><a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rr=new we({props:{$$slots:{default:[DO]},$$scope:{ctx:B}}}),Qr=new oe({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[SO]},$$scope:{ctx:B}}}),Vd=new $e({}),Kd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1605"}}),oc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kr=new we({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Jr=new oe({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),nc=new $e({}),sc=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1152"}}),mc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xr=new we({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),Yr=new oe({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[RO]},$$scope:{ctx:B}}}),fc=new $e({}),uc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1213"}}),$c=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
<p><a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ea=new we({props:{$$slots:{default:[QO]},$$scope:{ctx:B}}}),ta=new oe({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[VO]},$$scope:{ctx:B}}}),xc=new $e({}),Fc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1311"}}),Cc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new we({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),sa=new oe({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[JO]},$$scope:{ctx:B}}}),Nc=new $e({}),Oc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1387"}}),Hc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),aa=new we({props:{$$slots:{default:[GO]},$$scope:{ctx:B}}}),ia=new oe({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[XO]},$$scope:{ctx:B}}}),Rc=new $e({}),Qc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1459"}}),ep=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new we({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),ca=new oe({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),tp=new $e({}),op=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L1526"}}),cp=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17701/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17701/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17701/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17701/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new we({props:{$$slots:{default:[eI]},$$scope:{ctx:B}}}),ma=new oe({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[tI]},$$scope:{ctx:B}}}),{c(){d=n("meta"),b=c(),h=n("h1"),m=n("a"),g=n("span"),T(l.$$.fragment),f=c(),M=n("span"),be=r("BERT"),X=c(),z=n("h2"),ee=n("a"),L=n("span"),T(re.$$.fragment),ke=c(),D=n("span"),ye=r("Overview"),me=c(),J=n("p"),O=r("The BERT model was proposed in "),ae=n("a"),Y=r("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=r(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=n("p"),H=r("The abstract from the paper is the following:"),fe=c(),le=n("p"),S=n("em"),Te=r(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=n("p"),ce=n("em"),R=r(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=n("p"),Q=r("Tips:"),_e=c(),te=n("ul"),N=n("li"),ve=r(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=n("li"),y=r(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=n("p"),ze=r("This model was contributed by "),Be=n("a"),I=r("thomwolf"),Pe=r(". The original code can be found "),Me=n("a"),qe=r("here"),A=r("."),W=c(),xe=n("h2"),Fe=n("a"),U=n("span"),T(Ee.$$.fragment),je=c(),he=n("span"),Ce=r("BertConfig"),yb=c(),Nt=n("div"),T(Ua.$$.fragment),By=c(),ho=n("p"),My=r("This is the configuration class to store the configuration of a "),xp=n("a"),Ey=r("BertModel"),zy=r(" or a "),Fp=n("a"),Py=r("TFBertModel"),qy=r(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Wa=n("a"),jy=r("bert-base-uncased"),Cy=r(" architecture."),Ny=c(),Ro=n("p"),Oy=r("Configuration objects inherit from "),Bp=n("a"),Iy=r("PretrainedConfig"),Ay=r(` and can be used to control the model outputs. Read the
documentation from `),Mp=n("a"),Ly=r("PretrainedConfig"),Dy=r(" for more information."),Sy=c(),T(ms.$$.fragment),Tb=c(),Qo=n("h2"),fs=n("a"),mm=n("span"),T(Ha.$$.fragment),Uy=c(),fm=n("span"),Wy=r("BertTokenizer"),vb=c(),Ne=n("div"),T(Ra.$$.fragment),Hy=c(),um=n("p"),Ry=r("Construct a BERT tokenizer. Based on WordPiece."),Qy=c(),Qa=n("p"),Vy=r("This tokenizer inherits from "),Ep=n("a"),Ky=r("PreTrainedTokenizer"),Jy=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gy=c(),Fo=n("div"),T(Va.$$.fragment),Xy=c(),gm=n("p"),Yy=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Zy=c(),Ka=n("ul"),zp=n("li"),eT=r("single sequence: "),_m=n("code"),tT=r("[CLS] X [SEP]"),oT=c(),Pp=n("li"),nT=r("pair of sequences: "),bm=n("code"),sT=r("[CLS] A [SEP] B [SEP]"),rT=c(),us=n("div"),T(Ja.$$.fragment),aT=c(),Ga=n("p"),iT=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),km=n("code"),lT=r("prepare_for_model"),dT=r(" method."),cT=c(),It=n("div"),T(Xa.$$.fragment),pT=c(),ym=n("p"),hT=r("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),mT=c(),T(gs.$$.fragment),fT=c(),Vo=n("p"),uT=r("If "),Tm=n("code"),gT=r("token_ids_1"),_T=r(" is "),vm=n("code"),bT=r("None"),kT=r(", this method only returns the first portion of the mask (0s)."),yT=c(),qp=n("div"),T(Ya.$$.fragment),wb=c(),Ko=n("h2"),_s=n("a"),wm=n("span"),T(Za.$$.fragment),TT=c(),$m=n("span"),vT=r("BertTokenizerFast"),$b=c(),rt=n("div"),T(ei.$$.fragment),wT=c(),ti=n("p"),$T=r("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),xm=n("em"),xT=r("tokenizers"),FT=r(" library). Based on WordPiece."),BT=c(),oi=n("p"),MT=r("This tokenizer inherits from "),jp=n("a"),ET=r("PreTrainedTokenizerFast"),zT=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),PT=c(),Bo=n("div"),T(ni.$$.fragment),qT=c(),Fm=n("p"),jT=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),CT=c(),si=n("ul"),Cp=n("li"),NT=r("single sequence: "),Bm=n("code"),OT=r("[CLS] X [SEP]"),IT=c(),Np=n("li"),AT=r("pair of sequences: "),Mm=n("code"),LT=r("[CLS] A [SEP] B [SEP]"),DT=c(),At=n("div"),T(ri.$$.fragment),ST=c(),Em=n("p"),UT=r("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),WT=c(),T(bs.$$.fragment),HT=c(),Jo=n("p"),RT=r("If "),zm=n("code"),QT=r("token_ids_1"),VT=r(" is "),Pm=n("code"),KT=r("None"),JT=r(", this method only returns the first portion of the mask (0s)."),xb=c(),Go=n("h2"),ks=n("a"),qm=n("span"),T(ai.$$.fragment),GT=c(),jm=n("span"),XT=r("TFBertTokenizer"),Fb=c(),at=n("div"),T(ii.$$.fragment),YT=c(),Xo=n("p"),ZT=r(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Cm=n("code"),ev=r("from_pretrained()"),tv=r(" method. It can also be initialized with the "),Nm=n("code"),ov=r("from_tokenizer()"),nv=r(`, which imports settings from an
existing standard tokenizer object.`),sv=c(),Om=n("p"),rv=r(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. They have somewhat more limited options than standard
tokenizer classes. They are most useful when you want to create an end-to-end model that goes straight from
tf.string inputs to outputs.`),av=c(),ys=n("div"),T(li.$$.fragment),iv=c(),di=n("p"),lv=r("Instantiate a "),Im=n("code"),dv=r("TFBertTokenizer"),cv=r(" from a pre-trained tokenizer."),pv=c(),Ts=n("div"),T(ci.$$.fragment),hv=c(),pi=n("p"),mv=r("Initialize a "),Am=n("code"),fv=r("TFBertTokenizer"),uv=r(" from an existing Tokenizer."),Bb=c(),Yo=n("h2"),vs=n("a"),Lm=n("span"),T(hi.$$.fragment),gv=c(),Dm=n("span"),_v=r("Bert specific outputs"),Mb=c(),Zo=n("div"),T(mi.$$.fragment),bv=c(),fi=n("p"),kv=r("Output type of "),Op=n("a"),yv=r("BertForPreTraining"),Tv=r("."),Eb=c(),en=n("div"),T(ui.$$.fragment),vv=c(),gi=n("p"),wv=r("Output type of "),Ip=n("a"),$v=r("TFBertForPreTraining"),xv=r("."),zb=c(),mo=n("div"),T(_i.$$.fragment),Fv=c(),bi=n("p"),Bv=r("Output type of "),Ap=n("a"),Mv=r("BertForPreTraining"),Ev=r("."),zv=c(),ws=n("div"),T(ki.$$.fragment),Pv=c(),Sm=n("p"),qv=r("\u201CReturns a new object replacing the specified fields with new values."),Pb=c(),tn=n("h2"),$s=n("a"),Um=n("span"),T(yi.$$.fragment),jv=c(),Wm=n("span"),Cv=r("BertModel"),qb=c(),Oe=n("div"),T(Ti.$$.fragment),Nv=c(),Hm=n("p"),Ov=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Iv=c(),vi=n("p"),Av=r("This model inherits from "),Lp=n("a"),Lv=r("PreTrainedModel"),Dv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sv=c(),wi=n("p"),Uv=r("This model is also a PyTorch "),$i=n("a"),Wv=r("torch.nn.Module"),Hv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rv=c(),xi=n("p"),Qv=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Fi=n("a"),Vv=r(`Attention is
all you need`),Kv=r(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Jv=c(),Ke=n("p"),Gv=r("To behave as an decoder the model needs to be initialized with the "),Rm=n("code"),Xv=r("is_decoder"),Yv=r(` argument of the configuration set
to `),Qm=n("code"),Zv=r("True"),ew=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),Vm=n("code"),tw=r("is_decoder"),ow=r(` argument and
`),Km=n("code"),nw=r("add_cross_attention"),sw=r(" set to "),Jm=n("code"),rw=r("True"),aw=r("; an "),Gm=n("code"),iw=r("encoder_hidden_states"),lw=r(" is then expected as an input to the forward pass."),dw=c(),Lt=n("div"),T(Bi.$$.fragment),cw=c(),on=n("p"),pw=r("The "),Dp=n("a"),hw=r("BertModel"),mw=r(" forward method, overrides the "),Xm=n("code"),fw=r("__call__"),uw=r(" special method."),gw=c(),T(xs.$$.fragment),_w=c(),T(Fs.$$.fragment),jb=c(),nn=n("h2"),Bs=n("a"),Ym=n("span"),T(Mi.$$.fragment),bw=c(),Zm=n("span"),kw=r("BertForPreTraining"),Cb=c(),it=n("div"),T(Ei.$$.fragment),yw=c(),sn=n("p"),Tw=r("Bert Model with two heads on top as done during the pretraining: a "),ef=n("code"),vw=r("masked language modeling"),ww=r(" head and a "),tf=n("code"),$w=r("next sentence prediction (classification)"),xw=r(" head."),Fw=c(),zi=n("p"),Bw=r("This model inherits from "),Sp=n("a"),Mw=r("PreTrainedModel"),Ew=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zw=c(),Pi=n("p"),Pw=r("This model is also a PyTorch "),qi=n("a"),qw=r("torch.nn.Module"),jw=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cw=c(),Dt=n("div"),T(ji.$$.fragment),Nw=c(),rn=n("p"),Ow=r("The "),Up=n("a"),Iw=r("BertForPreTraining"),Aw=r(" forward method, overrides the "),of=n("code"),Lw=r("__call__"),Dw=r(" special method."),Sw=c(),T(Ms.$$.fragment),Uw=c(),T(Es.$$.fragment),Nb=c(),an=n("h2"),zs=n("a"),nf=n("span"),T(Ci.$$.fragment),Ww=c(),sf=n("span"),Hw=r("BertLMHeadModel"),Ob=c(),lt=n("div"),T(Ni.$$.fragment),Rw=c(),Oi=n("p"),Qw=r("Bert Model with a "),rf=n("code"),Vw=r("language modeling"),Kw=r(" head on top for CLM fine-tuning."),Jw=c(),Ii=n("p"),Gw=r("This model inherits from "),Wp=n("a"),Xw=r("PreTrainedModel"),Yw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zw=c(),Ai=n("p"),e$=r("This model is also a PyTorch "),Li=n("a"),t$=r("torch.nn.Module"),o$=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),n$=c(),St=n("div"),T(Di.$$.fragment),s$=c(),ln=n("p"),r$=r("The "),Hp=n("a"),a$=r("BertLMHeadModel"),i$=r(" forward method, overrides the "),af=n("code"),l$=r("__call__"),d$=r(" special method."),c$=c(),T(Ps.$$.fragment),p$=c(),T(qs.$$.fragment),Ib=c(),dn=n("h2"),js=n("a"),lf=n("span"),T(Si.$$.fragment),h$=c(),df=n("span"),m$=r("BertForMaskedLM"),Ab=c(),dt=n("div"),T(Ui.$$.fragment),f$=c(),Wi=n("p"),u$=r("Bert Model with a "),cf=n("code"),g$=r("language modeling"),_$=r(" head on top."),b$=c(),Hi=n("p"),k$=r("This model inherits from "),Rp=n("a"),y$=r("PreTrainedModel"),T$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v$=c(),Ri=n("p"),w$=r("This model is also a PyTorch "),Qi=n("a"),$$=r("torch.nn.Module"),x$=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),F$=c(),ut=n("div"),T(Vi.$$.fragment),B$=c(),cn=n("p"),M$=r("The "),Qp=n("a"),E$=r("BertForMaskedLM"),z$=r(" forward method, overrides the "),pf=n("code"),P$=r("__call__"),q$=r(" special method."),j$=c(),T(Cs.$$.fragment),C$=c(),T(Ns.$$.fragment),N$=c(),T(Os.$$.fragment),Lb=c(),pn=n("h2"),Is=n("a"),hf=n("span"),T(Ki.$$.fragment),O$=c(),mf=n("span"),I$=r("BertForNextSentencePrediction"),Db=c(),ct=n("div"),T(Ji.$$.fragment),A$=c(),Gi=n("p"),L$=r("Bert Model with a "),ff=n("code"),D$=r("next sentence prediction (classification)"),S$=r(" head on top."),U$=c(),Xi=n("p"),W$=r("This model inherits from "),Vp=n("a"),H$=r("PreTrainedModel"),R$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q$=c(),Yi=n("p"),V$=r("This model is also a PyTorch "),Zi=n("a"),K$=r("torch.nn.Module"),J$=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),G$=c(),Ut=n("div"),T(el.$$.fragment),X$=c(),hn=n("p"),Y$=r("The "),Kp=n("a"),Z$=r("BertForNextSentencePrediction"),e0=r(" forward method, overrides the "),uf=n("code"),t0=r("__call__"),o0=r(" special method."),n0=c(),T(As.$$.fragment),s0=c(),T(Ls.$$.fragment),Sb=c(),mn=n("h2"),Ds=n("a"),gf=n("span"),T(tl.$$.fragment),r0=c(),_f=n("span"),a0=r("BertForSequenceClassification"),Ub=c(),pt=n("div"),T(ol.$$.fragment),i0=c(),bf=n("p"),l0=r(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),d0=c(),nl=n("p"),c0=r("This model inherits from "),Jp=n("a"),p0=r("PreTrainedModel"),h0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m0=c(),sl=n("p"),f0=r("This model is also a PyTorch "),rl=n("a"),u0=r("torch.nn.Module"),g0=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_0=c(),Ve=n("div"),T(al.$$.fragment),b0=c(),fn=n("p"),k0=r("The "),Gp=n("a"),y0=r("BertForSequenceClassification"),T0=r(" forward method, overrides the "),kf=n("code"),v0=r("__call__"),w0=r(" special method."),$0=c(),T(Ss.$$.fragment),x0=c(),T(Us.$$.fragment),F0=c(),T(Ws.$$.fragment),B0=c(),T(Hs.$$.fragment),M0=c(),T(Rs.$$.fragment),Wb=c(),un=n("h2"),Qs=n("a"),yf=n("span"),T(il.$$.fragment),E0=c(),Tf=n("span"),z0=r("BertForMultipleChoice"),Hb=c(),ht=n("div"),T(ll.$$.fragment),P0=c(),vf=n("p"),q0=r(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),j0=c(),dl=n("p"),C0=r("This model inherits from "),Xp=n("a"),N0=r("PreTrainedModel"),O0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),I0=c(),cl=n("p"),A0=r("This model is also a PyTorch "),pl=n("a"),L0=r("torch.nn.Module"),D0=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),S0=c(),Wt=n("div"),T(hl.$$.fragment),U0=c(),gn=n("p"),W0=r("The "),Yp=n("a"),H0=r("BertForMultipleChoice"),R0=r(" forward method, overrides the "),wf=n("code"),Q0=r("__call__"),V0=r(" special method."),K0=c(),T(Vs.$$.fragment),J0=c(),T(Ks.$$.fragment),Rb=c(),_n=n("h2"),Js=n("a"),$f=n("span"),T(ml.$$.fragment),G0=c(),xf=n("span"),X0=r("BertForTokenClassification"),Qb=c(),mt=n("div"),T(fl.$$.fragment),Y0=c(),Ff=n("p"),Z0=r(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),e2=c(),ul=n("p"),t2=r("This model inherits from "),Zp=n("a"),o2=r("PreTrainedModel"),n2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),gl=n("p"),r2=r("This model is also a PyTorch "),_l=n("a"),a2=r("torch.nn.Module"),i2=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l2=c(),gt=n("div"),T(bl.$$.fragment),d2=c(),bn=n("p"),c2=r("The "),eh=n("a"),p2=r("BertForTokenClassification"),h2=r(" forward method, overrides the "),Bf=n("code"),m2=r("__call__"),f2=r(" special method."),u2=c(),T(Gs.$$.fragment),g2=c(),T(Xs.$$.fragment),_2=c(),T(Ys.$$.fragment),Vb=c(),kn=n("h2"),Zs=n("a"),Mf=n("span"),T(kl.$$.fragment),b2=c(),Ef=n("span"),k2=r("BertForQuestionAnswering"),Kb=c(),ft=n("div"),T(yl.$$.fragment),y2=c(),yn=n("p"),T2=r(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zf=n("code"),v2=r("span start logits"),w2=r(" and "),Pf=n("code"),$2=r("span end logits"),x2=r(")."),F2=c(),Tl=n("p"),B2=r("This model inherits from "),th=n("a"),M2=r("PreTrainedModel"),E2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z2=c(),vl=n("p"),P2=r("This model is also a PyTorch "),wl=n("a"),q2=r("torch.nn.Module"),j2=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),C2=c(),_t=n("div"),T($l.$$.fragment),N2=c(),Tn=n("p"),O2=r("The "),oh=n("a"),I2=r("BertForQuestionAnswering"),A2=r(" forward method, overrides the "),qf=n("code"),L2=r("__call__"),D2=r(" special method."),S2=c(),T(er.$$.fragment),U2=c(),T(tr.$$.fragment),W2=c(),T(or.$$.fragment),Jb=c(),vn=n("h2"),nr=n("a"),jf=n("span"),T(xl.$$.fragment),H2=c(),Cf=n("span"),R2=r("TFBertModel"),Gb=c(),Je=n("div"),T(Fl.$$.fragment),Q2=c(),Nf=n("p"),V2=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),K2=c(),Bl=n("p"),J2=r("This model inherits from "),nh=n("a"),G2=r("TFPreTrainedModel"),X2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Y2=c(),Ml=n("p"),Z2=r("This model is also a "),El=n("a"),ex=r("tf.keras.Model"),tx=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ox=c(),T(sr.$$.fragment),nx=c(),Ht=n("div"),T(zl.$$.fragment),sx=c(),wn=n("p"),rx=r("The "),sh=n("a"),ax=r("TFBertModel"),ix=r(" forward method, overrides the "),Of=n("code"),lx=r("__call__"),dx=r(" special method."),cx=c(),T(rr.$$.fragment),px=c(),T(ar.$$.fragment),Xb=c(),$n=n("h2"),ir=n("a"),If=n("span"),T(Pl.$$.fragment),hx=c(),Af=n("span"),mx=r("TFBertForPreTraining"),Yb=c(),Ge=n("div"),T(ql.$$.fragment),fx=c(),xn=n("p"),ux=r(`Bert Model with two heads on top as done during the pretraining:
a `),Lf=n("code"),gx=r("masked language modeling"),_x=r(" head and a "),Df=n("code"),bx=r("next sentence prediction (classification)"),kx=r(" head."),yx=c(),jl=n("p"),Tx=r("This model inherits from "),rh=n("a"),vx=r("TFPreTrainedModel"),wx=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$x=c(),Cl=n("p"),xx=r("This model is also a "),Nl=n("a"),Fx=r("tf.keras.Model"),Bx=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mx=c(),T(lr.$$.fragment),Ex=c(),Rt=n("div"),T(Ol.$$.fragment),zx=c(),Fn=n("p"),Px=r("The "),ah=n("a"),qx=r("TFBertForPreTraining"),jx=r(" forward method, overrides the "),Sf=n("code"),Cx=r("__call__"),Nx=r(" special method."),Ox=c(),T(dr.$$.fragment),Ix=c(),T(cr.$$.fragment),Zb=c(),Bn=n("h2"),pr=n("a"),Uf=n("span"),T(Il.$$.fragment),Ax=c(),Wf=n("span"),Lx=r("TFBertModelLMHeadModel"),ek=c(),Mn=n("div"),T(Al.$$.fragment),Dx=c(),bt=n("div"),T(Ll.$$.fragment),Sx=c(),Ie=n("p"),Ux=r("encoder_hidden_states  ("),Hf=n("code"),Wx=r("tf.Tensor"),Hx=r(" of shape "),Rf=n("code"),Rx=r("(batch_size, sequence_length, hidden_size)"),Qx=r(", "),Qf=n("em"),Vx=r("optional"),Kx=r(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Vf=n("code"),Jx=r("tf.Tensor"),Gx=r(" of shape "),Kf=n("code"),Xx=r("(batch_size, sequence_length)"),Yx=r(", "),Jf=n("em"),Zx=r("optional"),eF=r(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Gf=n("code"),tF=r("[0, 1]"),oF=r(":"),nF=c(),Dl=n("ul"),Sl=n("li"),sF=r("1 for tokens that are "),Xf=n("strong"),rF=r("not masked"),aF=r(","),iF=c(),Ul=n("li"),lF=r("0 for tokens that are "),Yf=n("strong"),dF=r("masked"),cF=r("."),pF=c(),G=n("p"),hF=r("past_key_values ("),Zf=n("code"),mF=r("Tuple[Tuple[tf.Tensor]]"),fF=r(" of length "),eu=n("code"),uF=r("config.n_layers"),gF=r(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),tu=n("code"),_F=r("past_key_values"),bF=r(" are used, the user can optionally input only the last "),ou=n("code"),kF=r("decoder_input_ids"),yF=r(` (those that
don\u2019t have their past key value states given to this model) of shape `),nu=n("code"),TF=r("(batch_size, 1)"),vF=r(` instead of all
`),su=n("code"),wF=r("decoder_input_ids"),$F=r(" of shape "),ru=n("code"),xF=r("(batch_size, sequence_length)"),FF=r(`.
use_cache (`),au=n("code"),BF=r("bool"),MF=r(", "),iu=n("em"),EF=r("optional"),zF=r(", defaults to "),lu=n("code"),PF=r("True"),qF=r(`):
If set to `),du=n("code"),jF=r("True"),CF=r(", "),cu=n("code"),NF=r("past_key_values"),OF=r(` key value states are returned and can be used to speed up decoding (see
`),pu=n("code"),IF=r("past_key_values"),AF=r("). Set to "),hu=n("code"),LF=r("False"),DF=r(" during training, "),mu=n("code"),SF=r("True"),UF=r(` during generation
labels (`),fu=n("code"),WF=r("tf.Tensor"),HF=r(" or "),uu=n("code"),RF=r("np.ndarray"),QF=r(" of shape "),gu=n("code"),VF=r("(batch_size, sequence_length)"),KF=r(", "),_u=n("em"),JF=r("optional"),GF=r(`):
Labels for computing the cross entropy classification loss. Indices should be in `),bu=n("code"),XF=r("[0, ..., config.vocab_size - 1]"),YF=r("."),ZF=c(),T(hr.$$.fragment),tk=c(),En=n("h2"),mr=n("a"),ku=n("span"),T(Wl.$$.fragment),eB=c(),yu=n("span"),tB=r("TFBertForMaskedLM"),ok=c(),Xe=n("div"),T(Hl.$$.fragment),oB=c(),Rl=n("p"),nB=r("Bert Model with a "),Tu=n("code"),sB=r("language modeling"),rB=r(" head on top."),aB=c(),Ql=n("p"),iB=r("This model inherits from "),ih=n("a"),lB=r("TFPreTrainedModel"),dB=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cB=c(),Vl=n("p"),pB=r("This model is also a "),Kl=n("a"),hB=r("tf.keras.Model"),mB=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fB=c(),T(fr.$$.fragment),uB=c(),kt=n("div"),T(Jl.$$.fragment),gB=c(),zn=n("p"),_B=r("The "),lh=n("a"),bB=r("TFBertForMaskedLM"),kB=r(" forward method, overrides the "),vu=n("code"),yB=r("__call__"),TB=r(" special method."),vB=c(),T(ur.$$.fragment),wB=c(),T(gr.$$.fragment),$B=c(),T(_r.$$.fragment),nk=c(),Pn=n("h2"),br=n("a"),wu=n("span"),T(Gl.$$.fragment),xB=c(),$u=n("span"),FB=r("TFBertForNextSentencePrediction"),sk=c(),Ye=n("div"),T(Xl.$$.fragment),BB=c(),Yl=n("p"),MB=r("Bert Model with a "),xu=n("code"),EB=r("next sentence prediction (classification)"),zB=r(" head on top."),PB=c(),Zl=n("p"),qB=r("This model inherits from "),dh=n("a"),jB=r("TFPreTrainedModel"),CB=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),NB=c(),ed=n("p"),OB=r("This model is also a "),td=n("a"),IB=r("tf.keras.Model"),AB=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),LB=c(),T(kr.$$.fragment),DB=c(),Qt=n("div"),T(od.$$.fragment),SB=c(),qn=n("p"),UB=r("The "),ch=n("a"),WB=r("TFBertForNextSentencePrediction"),HB=r(" forward method, overrides the "),Fu=n("code"),RB=r("__call__"),QB=r(" special method."),VB=c(),T(yr.$$.fragment),KB=c(),T(Tr.$$.fragment),rk=c(),jn=n("h2"),vr=n("a"),Bu=n("span"),T(nd.$$.fragment),JB=c(),Mu=n("span"),GB=r("TFBertForSequenceClassification"),ak=c(),Ze=n("div"),T(sd.$$.fragment),XB=c(),Eu=n("p"),YB=r(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZB=c(),rd=n("p"),e7=r("This model inherits from "),ph=n("a"),t7=r("TFPreTrainedModel"),o7=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n7=c(),ad=n("p"),s7=r("This model is also a "),id=n("a"),r7=r("tf.keras.Model"),a7=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i7=c(),T(wr.$$.fragment),l7=c(),yt=n("div"),T(ld.$$.fragment),d7=c(),Cn=n("p"),c7=r("The "),hh=n("a"),p7=r("TFBertForSequenceClassification"),h7=r(" forward method, overrides the "),zu=n("code"),m7=r("__call__"),f7=r(" special method."),u7=c(),T($r.$$.fragment),g7=c(),T(xr.$$.fragment),_7=c(),T(Fr.$$.fragment),ik=c(),Nn=n("h2"),Br=n("a"),Pu=n("span"),T(dd.$$.fragment),b7=c(),qu=n("span"),k7=r("TFBertForMultipleChoice"),lk=c(),et=n("div"),T(cd.$$.fragment),y7=c(),ju=n("p"),T7=r(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),v7=c(),pd=n("p"),w7=r("This model inherits from "),mh=n("a"),$7=r("TFPreTrainedModel"),x7=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F7=c(),hd=n("p"),B7=r("This model is also a "),md=n("a"),M7=r("tf.keras.Model"),E7=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z7=c(),T(Mr.$$.fragment),P7=c(),Vt=n("div"),T(fd.$$.fragment),q7=c(),On=n("p"),j7=r("The "),fh=n("a"),C7=r("TFBertForMultipleChoice"),N7=r(" forward method, overrides the "),Cu=n("code"),O7=r("__call__"),I7=r(" special method."),A7=c(),T(Er.$$.fragment),L7=c(),T(zr.$$.fragment),dk=c(),In=n("h2"),Pr=n("a"),Nu=n("span"),T(ud.$$.fragment),D7=c(),Ou=n("span"),S7=r("TFBertForTokenClassification"),ck=c(),tt=n("div"),T(gd.$$.fragment),U7=c(),Iu=n("p"),W7=r(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),H7=c(),_d=n("p"),R7=r("This model inherits from "),uh=n("a"),Q7=r("TFPreTrainedModel"),V7=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K7=c(),bd=n("p"),J7=r("This model is also a "),kd=n("a"),G7=r("tf.keras.Model"),X7=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Y7=c(),T(qr.$$.fragment),Z7=c(),Tt=n("div"),T(yd.$$.fragment),eM=c(),An=n("p"),tM=r("The "),gh=n("a"),oM=r("TFBertForTokenClassification"),nM=r(" forward method, overrides the "),Au=n("code"),sM=r("__call__"),rM=r(" special method."),aM=c(),T(jr.$$.fragment),iM=c(),T(Cr.$$.fragment),lM=c(),T(Nr.$$.fragment),pk=c(),Ln=n("h2"),Or=n("a"),Lu=n("span"),T(Td.$$.fragment),dM=c(),Du=n("span"),cM=r("TFBertForQuestionAnswering"),hk=c(),ot=n("div"),T(vd.$$.fragment),pM=c(),Dn=n("p"),hM=r(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Su=n("code"),mM=r("span start logits"),fM=r(" and "),Uu=n("code"),uM=r("span end logits"),gM=r(")."),_M=c(),wd=n("p"),bM=r("This model inherits from "),_h=n("a"),kM=r("TFPreTrainedModel"),yM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),TM=c(),$d=n("p"),vM=r("This model is also a "),xd=n("a"),wM=r("tf.keras.Model"),$M=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xM=c(),T(Ir.$$.fragment),FM=c(),vt=n("div"),T(Fd.$$.fragment),BM=c(),Sn=n("p"),MM=r("The "),bh=n("a"),EM=r("TFBertForQuestionAnswering"),zM=r(" forward method, overrides the "),Wu=n("code"),PM=r("__call__"),qM=r(" special method."),jM=c(),T(Ar.$$.fragment),CM=c(),T(Lr.$$.fragment),NM=c(),T(Dr.$$.fragment),mk=c(),Un=n("h2"),Sr=n("a"),Hu=n("span"),T(Bd.$$.fragment),OM=c(),Ru=n("span"),IM=r("FlaxBertModel"),fk=c(),Ae=n("div"),T(Md.$$.fragment),AM=c(),Qu=n("p"),LM=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),DM=c(),Ed=n("p"),SM=r("This model inherits from "),kh=n("a"),UM=r("FlaxPreTrainedModel"),WM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),HM=c(),zd=n("p"),RM=r("This model is also a Flax Linen "),Pd=n("a"),QM=r("flax.linen.Module"),VM=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),KM=c(),Vu=n("p"),JM=r("Finally, this model supports inherent JAX features such as:"),GM=c(),fo=n("ul"),Ku=n("li"),qd=n("a"),XM=r("Just-In-Time (JIT) compilation"),YM=c(),Ju=n("li"),jd=n("a"),ZM=r("Automatic Differentiation"),eE=c(),Gu=n("li"),Cd=n("a"),tE=r("Vectorization"),oE=c(),Xu=n("li"),Nd=n("a"),nE=r("Parallelization"),sE=c(),Kt=n("div"),T(Od.$$.fragment),rE=c(),Wn=n("p"),aE=r("The "),Yu=n("code"),iE=r("FlaxBertPreTrainedModel"),lE=r(" forward method, overrides the "),Zu=n("code"),dE=r("__call__"),cE=r(" special method."),pE=c(),T(Ur.$$.fragment),hE=c(),T(Wr.$$.fragment),uk=c(),Hn=n("h2"),Hr=n("a"),eg=n("span"),T(Id.$$.fragment),mE=c(),tg=n("span"),fE=r("FlaxBertForPreTraining"),gk=c(),Le=n("div"),T(Ad.$$.fragment),uE=c(),Rn=n("p"),gE=r("Bert Model with two heads on top as done during the pretraining: a "),og=n("code"),_E=r("masked language modeling"),bE=r(" head and a "),ng=n("code"),kE=r("next sentence prediction (classification)"),yE=r(" head."),TE=c(),Ld=n("p"),vE=r("This model inherits from "),yh=n("a"),wE=r("FlaxPreTrainedModel"),$E=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xE=c(),Dd=n("p"),FE=r("This model is also a Flax Linen "),Sd=n("a"),BE=r("flax.linen.Module"),ME=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),EE=c(),sg=n("p"),zE=r("Finally, this model supports inherent JAX features such as:"),PE=c(),uo=n("ul"),rg=n("li"),Ud=n("a"),qE=r("Just-In-Time (JIT) compilation"),jE=c(),ag=n("li"),Wd=n("a"),CE=r("Automatic Differentiation"),NE=c(),ig=n("li"),Hd=n("a"),OE=r("Vectorization"),IE=c(),lg=n("li"),Rd=n("a"),AE=r("Parallelization"),LE=c(),Jt=n("div"),T(Qd.$$.fragment),DE=c(),Qn=n("p"),SE=r("The "),dg=n("code"),UE=r("FlaxBertPreTrainedModel"),WE=r(" forward method, overrides the "),cg=n("code"),HE=r("__call__"),RE=r(" special method."),QE=c(),T(Rr.$$.fragment),VE=c(),T(Qr.$$.fragment),_k=c(),Vn=n("h2"),Vr=n("a"),pg=n("span"),T(Vd.$$.fragment),KE=c(),hg=n("span"),JE=r("FlaxBertForCausalLM"),bk=c(),De=n("div"),T(Kd.$$.fragment),GE=c(),mg=n("p"),XE=r(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),YE=c(),Jd=n("p"),ZE=r("This model inherits from "),Th=n("a"),ez=r("FlaxPreTrainedModel"),tz=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oz=c(),Gd=n("p"),nz=r("This model is also a Flax Linen "),Xd=n("a"),sz=r("flax.linen.Module"),rz=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),az=c(),fg=n("p"),iz=r("Finally, this model supports inherent JAX features such as:"),lz=c(),go=n("ul"),ug=n("li"),Yd=n("a"),dz=r("Just-In-Time (JIT) compilation"),cz=c(),gg=n("li"),Zd=n("a"),pz=r("Automatic Differentiation"),hz=c(),_g=n("li"),ec=n("a"),mz=r("Vectorization"),fz=c(),bg=n("li"),tc=n("a"),uz=r("Parallelization"),gz=c(),Gt=n("div"),T(oc.$$.fragment),_z=c(),Kn=n("p"),bz=r("The "),kg=n("code"),kz=r("FlaxBertPreTrainedModel"),yz=r(" forward method, overrides the "),yg=n("code"),Tz=r("__call__"),vz=r(" special method."),wz=c(),T(Kr.$$.fragment),$z=c(),T(Jr.$$.fragment),kk=c(),Jn=n("h2"),Gr=n("a"),Tg=n("span"),T(nc.$$.fragment),xz=c(),vg=n("span"),Fz=r("FlaxBertForMaskedLM"),yk=c(),Se=n("div"),T(sc.$$.fragment),Bz=c(),rc=n("p"),Mz=r("Bert Model with a "),wg=n("code"),Ez=r("language modeling"),zz=r(" head on top."),Pz=c(),ac=n("p"),qz=r("This model inherits from "),vh=n("a"),jz=r("FlaxPreTrainedModel"),Cz=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nz=c(),ic=n("p"),Oz=r("This model is also a Flax Linen "),lc=n("a"),Iz=r("flax.linen.Module"),Az=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lz=c(),$g=n("p"),Dz=r("Finally, this model supports inherent JAX features such as:"),Sz=c(),_o=n("ul"),xg=n("li"),dc=n("a"),Uz=r("Just-In-Time (JIT) compilation"),Wz=c(),Fg=n("li"),cc=n("a"),Hz=r("Automatic Differentiation"),Rz=c(),Bg=n("li"),pc=n("a"),Qz=r("Vectorization"),Vz=c(),Mg=n("li"),hc=n("a"),Kz=r("Parallelization"),Jz=c(),Xt=n("div"),T(mc.$$.fragment),Gz=c(),Gn=n("p"),Xz=r("The "),Eg=n("code"),Yz=r("FlaxBertPreTrainedModel"),Zz=r(" forward method, overrides the "),zg=n("code"),e4=r("__call__"),t4=r(" special method."),o4=c(),T(Xr.$$.fragment),n4=c(),T(Yr.$$.fragment),Tk=c(),Xn=n("h2"),Zr=n("a"),Pg=n("span"),T(fc.$$.fragment),s4=c(),qg=n("span"),r4=r("FlaxBertForNextSentencePrediction"),vk=c(),Ue=n("div"),T(uc.$$.fragment),a4=c(),gc=n("p"),i4=r("Bert Model with a "),jg=n("code"),l4=r("next sentence prediction (classification)"),d4=r(" head on top."),c4=c(),_c=n("p"),p4=r("This model inherits from "),wh=n("a"),h4=r("FlaxPreTrainedModel"),m4=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f4=c(),bc=n("p"),u4=r("This model is also a Flax Linen "),kc=n("a"),g4=r("flax.linen.Module"),_4=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b4=c(),Cg=n("p"),k4=r("Finally, this model supports inherent JAX features such as:"),y4=c(),bo=n("ul"),Ng=n("li"),yc=n("a"),T4=r("Just-In-Time (JIT) compilation"),v4=c(),Og=n("li"),Tc=n("a"),w4=r("Automatic Differentiation"),$4=c(),Ig=n("li"),vc=n("a"),x4=r("Vectorization"),F4=c(),Ag=n("li"),wc=n("a"),B4=r("Parallelization"),M4=c(),Yt=n("div"),T($c.$$.fragment),E4=c(),Yn=n("p"),z4=r("The "),Lg=n("code"),P4=r("FlaxBertPreTrainedModel"),q4=r(" forward method, overrides the "),Dg=n("code"),j4=r("__call__"),C4=r(" special method."),N4=c(),T(ea.$$.fragment),O4=c(),T(ta.$$.fragment),wk=c(),Zn=n("h2"),oa=n("a"),Sg=n("span"),T(xc.$$.fragment),I4=c(),Ug=n("span"),A4=r("FlaxBertForSequenceClassification"),$k=c(),We=n("div"),T(Fc.$$.fragment),L4=c(),Wg=n("p"),D4=r(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),S4=c(),Bc=n("p"),U4=r("This model inherits from "),$h=n("a"),W4=r("FlaxPreTrainedModel"),H4=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),R4=c(),Mc=n("p"),Q4=r("This model is also a Flax Linen "),Ec=n("a"),V4=r("flax.linen.Module"),K4=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),J4=c(),Hg=n("p"),G4=r("Finally, this model supports inherent JAX features such as:"),X4=c(),ko=n("ul"),Rg=n("li"),zc=n("a"),Y4=r("Just-In-Time (JIT) compilation"),Z4=c(),Qg=n("li"),Pc=n("a"),eP=r("Automatic Differentiation"),tP=c(),Vg=n("li"),qc=n("a"),oP=r("Vectorization"),nP=c(),Kg=n("li"),jc=n("a"),sP=r("Parallelization"),rP=c(),Zt=n("div"),T(Cc.$$.fragment),aP=c(),es=n("p"),iP=r("The "),Jg=n("code"),lP=r("FlaxBertPreTrainedModel"),dP=r(" forward method, overrides the "),Gg=n("code"),cP=r("__call__"),pP=r(" special method."),hP=c(),T(na.$$.fragment),mP=c(),T(sa.$$.fragment),xk=c(),ts=n("h2"),ra=n("a"),Xg=n("span"),T(Nc.$$.fragment),fP=c(),Yg=n("span"),uP=r("FlaxBertForMultipleChoice"),Fk=c(),He=n("div"),T(Oc.$$.fragment),gP=c(),Zg=n("p"),_P=r(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bP=c(),Ic=n("p"),kP=r("This model inherits from "),xh=n("a"),yP=r("FlaxPreTrainedModel"),TP=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vP=c(),Ac=n("p"),wP=r("This model is also a Flax Linen "),Lc=n("a"),$P=r("flax.linen.Module"),xP=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),FP=c(),e_=n("p"),BP=r("Finally, this model supports inherent JAX features such as:"),MP=c(),yo=n("ul"),t_=n("li"),Dc=n("a"),EP=r("Just-In-Time (JIT) compilation"),zP=c(),o_=n("li"),Sc=n("a"),PP=r("Automatic Differentiation"),qP=c(),n_=n("li"),Uc=n("a"),jP=r("Vectorization"),CP=c(),s_=n("li"),Wc=n("a"),NP=r("Parallelization"),OP=c(),eo=n("div"),T(Hc.$$.fragment),IP=c(),os=n("p"),AP=r("The "),r_=n("code"),LP=r("FlaxBertPreTrainedModel"),DP=r(" forward method, overrides the "),a_=n("code"),SP=r("__call__"),UP=r(" special method."),WP=c(),T(aa.$$.fragment),HP=c(),T(ia.$$.fragment),Bk=c(),ns=n("h2"),la=n("a"),i_=n("span"),T(Rc.$$.fragment),RP=c(),l_=n("span"),QP=r("FlaxBertForTokenClassification"),Mk=c(),Re=n("div"),T(Qc.$$.fragment),VP=c(),d_=n("p"),KP=r(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),JP=c(),Vc=n("p"),GP=r("This model inherits from "),Fh=n("a"),XP=r("FlaxPreTrainedModel"),YP=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ZP=c(),Kc=n("p"),eq=r("This model is also a Flax Linen "),Jc=n("a"),tq=r("flax.linen.Module"),oq=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nq=c(),c_=n("p"),sq=r("Finally, this model supports inherent JAX features such as:"),rq=c(),To=n("ul"),p_=n("li"),Gc=n("a"),aq=r("Just-In-Time (JIT) compilation"),iq=c(),h_=n("li"),Xc=n("a"),lq=r("Automatic Differentiation"),dq=c(),m_=n("li"),Yc=n("a"),cq=r("Vectorization"),pq=c(),f_=n("li"),Zc=n("a"),hq=r("Parallelization"),mq=c(),to=n("div"),T(ep.$$.fragment),fq=c(),ss=n("p"),uq=r("The "),u_=n("code"),gq=r("FlaxBertPreTrainedModel"),_q=r(" forward method, overrides the "),g_=n("code"),bq=r("__call__"),kq=r(" special method."),yq=c(),T(da.$$.fragment),Tq=c(),T(ca.$$.fragment),Ek=c(),rs=n("h2"),pa=n("a"),__=n("span"),T(tp.$$.fragment),vq=c(),b_=n("span"),wq=r("FlaxBertForQuestionAnswering"),zk=c(),Qe=n("div"),T(op.$$.fragment),$q=c(),as=n("p"),xq=r(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),k_=n("code"),Fq=r("span start logits"),Bq=r(" and "),y_=n("code"),Mq=r("span end logits"),Eq=r(")."),zq=c(),np=n("p"),Pq=r("This model inherits from "),Bh=n("a"),qq=r("FlaxPreTrainedModel"),jq=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cq=c(),sp=n("p"),Nq=r("This model is also a Flax Linen "),rp=n("a"),Oq=r("flax.linen.Module"),Iq=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Aq=c(),T_=n("p"),Lq=r("Finally, this model supports inherent JAX features such as:"),Dq=c(),vo=n("ul"),v_=n("li"),ap=n("a"),Sq=r("Just-In-Time (JIT) compilation"),Uq=c(),w_=n("li"),ip=n("a"),Wq=r("Automatic Differentiation"),Hq=c(),$_=n("li"),lp=n("a"),Rq=r("Vectorization"),Qq=c(),x_=n("li"),dp=n("a"),Vq=r("Parallelization"),Kq=c(),oo=n("div"),T(cp.$$.fragment),Jq=c(),is=n("p"),Gq=r("The "),F_=n("code"),Xq=r("FlaxBertPreTrainedModel"),Yq=r(" forward method, overrides the "),B_=n("code"),Zq=r("__call__"),ej=r(" special method."),tj=c(),T(ha.$$.fragment),oj=c(),T(ma.$$.fragment),this.h()},l(o){const k=C8('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),b=p(o),h=s(o,"H1",{class:!0});var pp=i(h);m=s(pp,"A",{id:!0,class:!0,href:!0});var M_=i(m);g=s(M_,"SPAN",{});var E_=i(g);v(l.$$.fragment,E_),E_.forEach(t),M_.forEach(t),f=p(pp),M=s(pp,"SPAN",{});var z_=i(M);be=a(z_,"BERT"),z_.forEach(t),pp.forEach(t),X=p(o),z=s(o,"H2",{class:!0});var hp=i(z);ee=s(hp,"A",{id:!0,class:!0,href:!0});var P_=i(ee);L=s(P_,"SPAN",{});var q_=i(L);v(re.$$.fragment,q_),q_.forEach(t),P_.forEach(t),ke=p(hp),D=s(hp,"SPAN",{});var j_=i(D);ye=a(j_,"Overview"),j_.forEach(t),hp.forEach(t),me=p(o),J=s(o,"P",{});var mp=i(J);O=a(mp,"The BERT model was proposed in "),ae=s(mp,"A",{href:!0,rel:!0});var C_=i(ae);Y=a(C_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),C_.forEach(t),P=a(mp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),mp.forEach(t),j=p(o),ie=s(o,"P",{});var N_=i(ie);H=a(N_,"The abstract from the paper is the following:"),N_.forEach(t),fe=p(o),le=s(o,"P",{});var O_=i(le);S=s(O_,"EM",{});var I_=i(S);Te=a(I_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),I_.forEach(t),O_.forEach(t),ue=p(o),q=s(o,"P",{});var A_=i(q);ce=s(A_,"EM",{});var L_=i(ce);R=a(L_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),L_.forEach(t),A_.forEach(t),ge=p(o),de=s(o,"P",{});var D_=i(de);Q=a(D_,"Tips:"),D_.forEach(t),_e=p(o),te=s(o,"UL",{});var fp=i(te);N=s(fp,"LI",{});var S_=i(N);ve=a(S_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),S_.forEach(t),V=p(fp),pe=s(fp,"LI",{});var U_=i(pe);y=a(U_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),U_.forEach(t),fp.forEach(t),E=p(o),K=s(o,"P",{});var ls=i(K);ze=a(ls,"This model was contributed by "),Be=s(ls,"A",{href:!0,rel:!0});var W_=i(Be);I=a(W_,"thomwolf"),W_.forEach(t),Pe=a(ls,". The original code can be found "),Me=s(ls,"A",{href:!0,rel:!0});var H_=i(Me);qe=a(H_,"here"),H_.forEach(t),A=a(ls,"."),ls.forEach(t),W=p(o),xe=s(o,"H2",{class:!0});var up=i(xe);Fe=s(up,"A",{id:!0,class:!0,href:!0});var R_=i(Fe);U=s(R_,"SPAN",{});var Q_=i(U);v(Ee.$$.fragment,Q_),Q_.forEach(t),R_.forEach(t),je=p(up),he=s(up,"SPAN",{});var V_=i(he);Ce=a(V_,"BertConfig"),V_.forEach(t),up.forEach(t),yb=p(o),Nt=s(o,"DIV",{class:!0});var wo=i(Nt);v(Ua.$$.fragment,wo),By=p(wo),ho=s(wo,"P",{});var $o=i(ho);My=a($o,"This is the configuration class to store the configuration of a "),xp=s($o,"A",{href:!0});var K_=i(xp);Ey=a(K_,"BertModel"),K_.forEach(t),zy=a($o," or a "),Fp=s($o,"A",{href:!0});var J_=i(Fp);Py=a(J_,"TFBertModel"),J_.forEach(t),qy=a($o,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Wa=s($o,"A",{href:!0,rel:!0});var G_=i(Wa);jy=a(G_,"bert-base-uncased"),G_.forEach(t),Cy=a($o," architecture."),$o.forEach(t),Ny=p(wo),Ro=s(wo,"P",{});var ds=i(Ro);Oy=a(ds,"Configuration objects inherit from "),Bp=s(ds,"A",{href:!0});var X_=i(Bp);Iy=a(X_,"PretrainedConfig"),X_.forEach(t),Ay=a(ds,` and can be used to control the model outputs. Read the
documentation from `),Mp=s(ds,"A",{href:!0});var Y_=i(Mp);Ly=a(Y_,"PretrainedConfig"),Y_.forEach(t),Dy=a(ds," for more information."),ds.forEach(t),Sy=p(wo),v(ms.$$.fragment,wo),wo.forEach(t),Tb=p(o),Qo=s(o,"H2",{class:!0});var gp=i(Qo);fs=s(gp,"A",{id:!0,class:!0,href:!0});var Z_=i(fs);mm=s(Z_,"SPAN",{});var eb=i(mm);v(Ha.$$.fragment,eb),eb.forEach(t),Z_.forEach(t),Uy=p(gp),fm=s(gp,"SPAN",{});var tb=i(fm);Wy=a(tb,"BertTokenizer"),tb.forEach(t),gp.forEach(t),vb=p(o),Ne=s(o,"DIV",{class:!0});var nt=i(Ne);v(Ra.$$.fragment,nt),Hy=p(nt),um=s(nt,"P",{});var ob=i(um);Ry=a(ob,"Construct a BERT tokenizer. Based on WordPiece."),ob.forEach(t),Qy=p(nt),Qa=s(nt,"P",{});var _p=i(Qa);Vy=a(_p,"This tokenizer inherits from "),Ep=s(_p,"A",{href:!0});var nb=i(Ep);Ky=a(nb,"PreTrainedTokenizer"),nb.forEach(t),Jy=a(_p,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_p.forEach(t),Gy=p(nt),Fo=s(nt,"DIV",{class:!0});var cs=i(Fo);v(Va.$$.fragment,cs),Xy=p(cs),gm=s(cs,"P",{});var sb=i(gm);Yy=a(sb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),sb.forEach(t),Zy=p(cs),Ka=s(cs,"UL",{});var bp=i(Ka);zp=s(bp,"LI",{});var Mh=i(zp);eT=a(Mh,"single sequence: "),_m=s(Mh,"CODE",{});var rb=i(_m);tT=a(rb,"[CLS] X [SEP]"),rb.forEach(t),Mh.forEach(t),oT=p(bp),Pp=s(bp,"LI",{});var Eh=i(Pp);nT=a(Eh,"pair of sequences: "),bm=s(Eh,"CODE",{});var ab=i(bm);sT=a(ab,"[CLS] A [SEP] B [SEP]"),ab.forEach(t),Eh.forEach(t),bp.forEach(t),cs.forEach(t),rT=p(nt),us=s(nt,"DIV",{class:!0});var kp=i(us);v(Ja.$$.fragment,kp),aT=p(kp),Ga=s(kp,"P",{});var yp=i(Ga);iT=a(yp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),km=s(yp,"CODE",{});var ib=i(km);lT=a(ib,"prepare_for_model"),ib.forEach(t),dT=a(yp," method."),yp.forEach(t),kp.forEach(t),cT=p(nt),It=s(nt,"DIV",{class:!0});var xo=i(It);v(Xa.$$.fragment,xo),pT=p(xo),ym=s(xo,"P",{});var lb=i(ym);hT=a(lb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),lb.forEach(t),mT=p(xo),v(gs.$$.fragment,xo),fT=p(xo),Vo=s(xo,"P",{});var ps=i(Vo);uT=a(ps,"If "),Tm=s(ps,"CODE",{});var db=i(Tm);gT=a(db,"token_ids_1"),db.forEach(t),_T=a(ps," is "),vm=s(ps,"CODE",{});var cb=i(vm);bT=a(cb,"None"),cb.forEach(t),kT=a(ps,", this method only returns the first portion of the mask (0s)."),ps.forEach(t),xo.forEach(t),yT=p(nt),qp=s(nt,"DIV",{class:!0});var pb=i(qp);v(Ya.$$.fragment,pb),pb.forEach(t),nt.forEach(t),wb=p(o),Ko=s(o,"H2",{class:!0});var Tp=i(Ko);_s=s(Tp,"A",{id:!0,class:!0,href:!0});var hb=i(_s);wm=s(hb,"SPAN",{});var mb=i(wm);v(Za.$$.fragment,mb),mb.forEach(t),hb.forEach(t),TT=p(Tp),$m=s(Tp,"SPAN",{});var fb=i($m);vT=a(fb,"BertTokenizerFast"),fb.forEach(t),Tp.forEach(t),$b=p(o),rt=s(o,"DIV",{class:!0});var Ot=i(rt);v(ei.$$.fragment,Ot),wT=p(Ot),ti=s(Ot,"P",{});var vp=i(ti);$T=a(vp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),xm=s(vp,"EM",{});var ub=i(xm);xT=a(ub,"tokenizers"),ub.forEach(t),FT=a(vp," library). Based on WordPiece."),vp.forEach(t),BT=p(Ot),oi=s(Ot,"P",{});var wp=i(oi);MT=a(wp,"This tokenizer inherits from "),jp=s(wp,"A",{href:!0});var gb=i(jp);ET=a(gb,"PreTrainedTokenizerFast"),gb.forEach(t),zT=a(wp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),wp.forEach(t),PT=p(Ot),Bo=s(Ot,"DIV",{class:!0});var hs=i(Bo);v(ni.$$.fragment,hs),qT=p(hs),Fm=s(hs,"P",{});var _b=i(Fm);jT=a(_b,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),_b.forEach(t),CT=p(hs),si=s(hs,"UL",{});var $p=i(si);Cp=s($p,"LI",{});var zh=i(Cp);NT=a(zh,"single sequence: "),Bm=s(zh,"CODE",{});var bb=i(Bm);OT=a(bb,"[CLS] X [SEP]"),bb.forEach(t),zh.forEach(t),IT=p($p),Np=s($p,"LI",{});var Ph=i(Np);AT=a(Ph,"pair of sequences: "),Mm=s(Ph,"CODE",{});var kb=i(Mm);LT=a(kb,"[CLS] A [SEP] B [SEP]"),kb.forEach(t),Ph.forEach(t),$p.forEach(t),hs.forEach(t),DT=p(Ot),At=s(Ot,"DIV",{class:!0});var fa=i(At);v(ri.$$.fragment,fa),ST=p(fa),Em=s(fa,"P",{});var nj=i(Em);UT=a(nj,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),nj.forEach(t),WT=p(fa),v(bs.$$.fragment,fa),HT=p(fa),Jo=s(fa,"P",{});var qh=i(Jo);RT=a(qh,"If "),zm=s(qh,"CODE",{});var sj=i(zm);QT=a(sj,"token_ids_1"),sj.forEach(t),VT=a(qh," is "),Pm=s(qh,"CODE",{});var rj=i(Pm);KT=a(rj,"None"),rj.forEach(t),JT=a(qh,", this method only returns the first portion of the mask (0s)."),qh.forEach(t),fa.forEach(t),Ot.forEach(t),xb=p(o),Go=s(o,"H2",{class:!0});var qk=i(Go);ks=s(qk,"A",{id:!0,class:!0,href:!0});var aj=i(ks);qm=s(aj,"SPAN",{});var ij=i(qm);v(ai.$$.fragment,ij),ij.forEach(t),aj.forEach(t),GT=p(qk),jm=s(qk,"SPAN",{});var lj=i(jm);XT=a(lj,"TFBertTokenizer"),lj.forEach(t),qk.forEach(t),Fb=p(o),at=s(o,"DIV",{class:!0});var Mo=i(at);v(ii.$$.fragment,Mo),YT=p(Mo),Xo=s(Mo,"P",{});var jh=i(Xo);ZT=a(jh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Cm=s(jh,"CODE",{});var dj=i(Cm);ev=a(dj,"from_pretrained()"),dj.forEach(t),tv=a(jh," method. It can also be initialized with the "),Nm=s(jh,"CODE",{});var cj=i(Nm);ov=a(cj,"from_tokenizer()"),cj.forEach(t),nv=a(jh,`, which imports settings from an
existing standard tokenizer object.`),jh.forEach(t),sv=p(Mo),Om=s(Mo,"P",{});var pj=i(Om);rv=a(pj,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. They have somewhat more limited options than standard
tokenizer classes. They are most useful when you want to create an end-to-end model that goes straight from
tf.string inputs to outputs.`),pj.forEach(t),av=p(Mo),ys=s(Mo,"DIV",{class:!0});var jk=i(ys);v(li.$$.fragment,jk),iv=p(jk),di=s(jk,"P",{});var Ck=i(di);lv=a(Ck,"Instantiate a "),Im=s(Ck,"CODE",{});var hj=i(Im);dv=a(hj,"TFBertTokenizer"),hj.forEach(t),cv=a(Ck," from a pre-trained tokenizer."),Ck.forEach(t),jk.forEach(t),pv=p(Mo),Ts=s(Mo,"DIV",{class:!0});var Nk=i(Ts);v(ci.$$.fragment,Nk),hv=p(Nk),pi=s(Nk,"P",{});var Ok=i(pi);mv=a(Ok,"Initialize a "),Am=s(Ok,"CODE",{});var mj=i(Am);fv=a(mj,"TFBertTokenizer"),mj.forEach(t),uv=a(Ok," from an existing Tokenizer."),Ok.forEach(t),Nk.forEach(t),Mo.forEach(t),Bb=p(o),Yo=s(o,"H2",{class:!0});var Ik=i(Yo);vs=s(Ik,"A",{id:!0,class:!0,href:!0});var fj=i(vs);Lm=s(fj,"SPAN",{});var uj=i(Lm);v(hi.$$.fragment,uj),uj.forEach(t),fj.forEach(t),gv=p(Ik),Dm=s(Ik,"SPAN",{});var gj=i(Dm);_v=a(gj,"Bert specific outputs"),gj.forEach(t),Ik.forEach(t),Mb=p(o),Zo=s(o,"DIV",{class:!0});var Ak=i(Zo);v(mi.$$.fragment,Ak),bv=p(Ak),fi=s(Ak,"P",{});var Lk=i(fi);kv=a(Lk,"Output type of "),Op=s(Lk,"A",{href:!0});var _j=i(Op);yv=a(_j,"BertForPreTraining"),_j.forEach(t),Tv=a(Lk,"."),Lk.forEach(t),Ak.forEach(t),Eb=p(o),en=s(o,"DIV",{class:!0});var Dk=i(en);v(ui.$$.fragment,Dk),vv=p(Dk),gi=s(Dk,"P",{});var Sk=i(gi);wv=a(Sk,"Output type of "),Ip=s(Sk,"A",{href:!0});var bj=i(Ip);$v=a(bj,"TFBertForPreTraining"),bj.forEach(t),xv=a(Sk,"."),Sk.forEach(t),Dk.forEach(t),zb=p(o),mo=s(o,"DIV",{class:!0});var Ch=i(mo);v(_i.$$.fragment,Ch),Fv=p(Ch),bi=s(Ch,"P",{});var Uk=i(bi);Bv=a(Uk,"Output type of "),Ap=s(Uk,"A",{href:!0});var kj=i(Ap);Mv=a(kj,"BertForPreTraining"),kj.forEach(t),Ev=a(Uk,"."),Uk.forEach(t),zv=p(Ch),ws=s(Ch,"DIV",{class:!0});var Wk=i(ws);v(ki.$$.fragment,Wk),Pv=p(Wk),Sm=s(Wk,"P",{});var yj=i(Sm);qv=a(yj,"\u201CReturns a new object replacing the specified fields with new values."),yj.forEach(t),Wk.forEach(t),Ch.forEach(t),Pb=p(o),tn=s(o,"H2",{class:!0});var Hk=i(tn);$s=s(Hk,"A",{id:!0,class:!0,href:!0});var Tj=i($s);Um=s(Tj,"SPAN",{});var vj=i(Um);v(yi.$$.fragment,vj),vj.forEach(t),Tj.forEach(t),jv=p(Hk),Wm=s(Hk,"SPAN",{});var wj=i(Wm);Cv=a(wj,"BertModel"),wj.forEach(t),Hk.forEach(t),qb=p(o),Oe=s(o,"DIV",{class:!0});var wt=i(Oe);v(Ti.$$.fragment,wt),Nv=p(wt),Hm=s(wt,"P",{});var $j=i(Hm);Ov=a($j,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),$j.forEach(t),Iv=p(wt),vi=s(wt,"P",{});var Rk=i(vi);Av=a(Rk,"This model inherits from "),Lp=s(Rk,"A",{href:!0});var xj=i(Lp);Lv=a(xj,"PreTrainedModel"),xj.forEach(t),Dv=a(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rk.forEach(t),Sv=p(wt),wi=s(wt,"P",{});var Qk=i(wi);Uv=a(Qk,"This model is also a PyTorch "),$i=s(Qk,"A",{href:!0,rel:!0});var Fj=i($i);Wv=a(Fj,"torch.nn.Module"),Fj.forEach(t),Hv=a(Qk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qk.forEach(t),Rv=p(wt),xi=s(wt,"P",{});var Vk=i(xi);Qv=a(Vk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Fi=s(Vk,"A",{href:!0,rel:!0});var Bj=i(Fi);Vv=a(Bj,`Attention is
all you need`),Bj.forEach(t),Kv=a(Vk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Vk.forEach(t),Jv=p(wt),Ke=s(wt,"P",{});var $t=i(Ke);Gv=a($t,"To behave as an decoder the model needs to be initialized with the "),Rm=s($t,"CODE",{});var Mj=i(Rm);Xv=a(Mj,"is_decoder"),Mj.forEach(t),Yv=a($t,` argument of the configuration set
to `),Qm=s($t,"CODE",{});var Ej=i(Qm);Zv=a(Ej,"True"),Ej.forEach(t),ew=a($t,". To be used in a Seq2Seq model, the model needs to initialized with both "),Vm=s($t,"CODE",{});var zj=i(Vm);tw=a(zj,"is_decoder"),zj.forEach(t),ow=a($t,` argument and
`),Km=s($t,"CODE",{});var Pj=i(Km);nw=a(Pj,"add_cross_attention"),Pj.forEach(t),sw=a($t," set to "),Jm=s($t,"CODE",{});var qj=i(Jm);rw=a(qj,"True"),qj.forEach(t),aw=a($t,"; an "),Gm=s($t,"CODE",{});var jj=i(Gm);iw=a(jj,"encoder_hidden_states"),jj.forEach(t),lw=a($t," is then expected as an input to the forward pass."),$t.forEach(t),dw=p(wt),Lt=s(wt,"DIV",{class:!0});var ua=i(Lt);v(Bi.$$.fragment,ua),cw=p(ua),on=s(ua,"P",{});var Nh=i(on);pw=a(Nh,"The "),Dp=s(Nh,"A",{href:!0});var Cj=i(Dp);hw=a(Cj,"BertModel"),Cj.forEach(t),mw=a(Nh," forward method, overrides the "),Xm=s(Nh,"CODE",{});var Nj=i(Xm);fw=a(Nj,"__call__"),Nj.forEach(t),uw=a(Nh," special method."),Nh.forEach(t),gw=p(ua),v(xs.$$.fragment,ua),_w=p(ua),v(Fs.$$.fragment,ua),ua.forEach(t),wt.forEach(t),jb=p(o),nn=s(o,"H2",{class:!0});var Kk=i(nn);Bs=s(Kk,"A",{id:!0,class:!0,href:!0});var Oj=i(Bs);Ym=s(Oj,"SPAN",{});var Ij=i(Ym);v(Mi.$$.fragment,Ij),Ij.forEach(t),Oj.forEach(t),bw=p(Kk),Zm=s(Kk,"SPAN",{});var Aj=i(Zm);kw=a(Aj,"BertForPreTraining"),Aj.forEach(t),Kk.forEach(t),Cb=p(o),it=s(o,"DIV",{class:!0});var Eo=i(it);v(Ei.$$.fragment,Eo),yw=p(Eo),sn=s(Eo,"P",{});var Oh=i(sn);Tw=a(Oh,"Bert Model with two heads on top as done during the pretraining: a "),ef=s(Oh,"CODE",{});var Lj=i(ef);vw=a(Lj,"masked language modeling"),Lj.forEach(t),ww=a(Oh," head and a "),tf=s(Oh,"CODE",{});var Dj=i(tf);$w=a(Dj,"next sentence prediction (classification)"),Dj.forEach(t),xw=a(Oh," head."),Oh.forEach(t),Fw=p(Eo),zi=s(Eo,"P",{});var Jk=i(zi);Bw=a(Jk,"This model inherits from "),Sp=s(Jk,"A",{href:!0});var Sj=i(Sp);Mw=a(Sj,"PreTrainedModel"),Sj.forEach(t),Ew=a(Jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk.forEach(t),zw=p(Eo),Pi=s(Eo,"P",{});var Gk=i(Pi);Pw=a(Gk,"This model is also a PyTorch "),qi=s(Gk,"A",{href:!0,rel:!0});var Uj=i(qi);qw=a(Uj,"torch.nn.Module"),Uj.forEach(t),jw=a(Gk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gk.forEach(t),Cw=p(Eo),Dt=s(Eo,"DIV",{class:!0});var ga=i(Dt);v(ji.$$.fragment,ga),Nw=p(ga),rn=s(ga,"P",{});var Ih=i(rn);Ow=a(Ih,"The "),Up=s(Ih,"A",{href:!0});var Wj=i(Up);Iw=a(Wj,"BertForPreTraining"),Wj.forEach(t),Aw=a(Ih," forward method, overrides the "),of=s(Ih,"CODE",{});var Hj=i(of);Lw=a(Hj,"__call__"),Hj.forEach(t),Dw=a(Ih," special method."),Ih.forEach(t),Sw=p(ga),v(Ms.$$.fragment,ga),Uw=p(ga),v(Es.$$.fragment,ga),ga.forEach(t),Eo.forEach(t),Nb=p(o),an=s(o,"H2",{class:!0});var Xk=i(an);zs=s(Xk,"A",{id:!0,class:!0,href:!0});var Rj=i(zs);nf=s(Rj,"SPAN",{});var Qj=i(nf);v(Ci.$$.fragment,Qj),Qj.forEach(t),Rj.forEach(t),Ww=p(Xk),sf=s(Xk,"SPAN",{});var Vj=i(sf);Hw=a(Vj,"BertLMHeadModel"),Vj.forEach(t),Xk.forEach(t),Ob=p(o),lt=s(o,"DIV",{class:!0});var zo=i(lt);v(Ni.$$.fragment,zo),Rw=p(zo),Oi=s(zo,"P",{});var Yk=i(Oi);Qw=a(Yk,"Bert Model with a "),rf=s(Yk,"CODE",{});var Kj=i(rf);Vw=a(Kj,"language modeling"),Kj.forEach(t),Kw=a(Yk," head on top for CLM fine-tuning."),Yk.forEach(t),Jw=p(zo),Ii=s(zo,"P",{});var Zk=i(Ii);Gw=a(Zk,"This model inherits from "),Wp=s(Zk,"A",{href:!0});var Jj=i(Wp);Xw=a(Jj,"PreTrainedModel"),Jj.forEach(t),Yw=a(Zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zk.forEach(t),Zw=p(zo),Ai=s(zo,"P",{});var e1=i(Ai);e$=a(e1,"This model is also a PyTorch "),Li=s(e1,"A",{href:!0,rel:!0});var Gj=i(Li);t$=a(Gj,"torch.nn.Module"),Gj.forEach(t),o$=a(e1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),e1.forEach(t),n$=p(zo),St=s(zo,"DIV",{class:!0});var _a=i(St);v(Di.$$.fragment,_a),s$=p(_a),ln=s(_a,"P",{});var Ah=i(ln);r$=a(Ah,"The "),Hp=s(Ah,"A",{href:!0});var Xj=i(Hp);a$=a(Xj,"BertLMHeadModel"),Xj.forEach(t),i$=a(Ah," forward method, overrides the "),af=s(Ah,"CODE",{});var Yj=i(af);l$=a(Yj,"__call__"),Yj.forEach(t),d$=a(Ah," special method."),Ah.forEach(t),c$=p(_a),v(Ps.$$.fragment,_a),p$=p(_a),v(qs.$$.fragment,_a),_a.forEach(t),zo.forEach(t),Ib=p(o),dn=s(o,"H2",{class:!0});var t1=i(dn);js=s(t1,"A",{id:!0,class:!0,href:!0});var Zj=i(js);lf=s(Zj,"SPAN",{});var e3=i(lf);v(Si.$$.fragment,e3),e3.forEach(t),Zj.forEach(t),h$=p(t1),df=s(t1,"SPAN",{});var t3=i(df);m$=a(t3,"BertForMaskedLM"),t3.forEach(t),t1.forEach(t),Ab=p(o),dt=s(o,"DIV",{class:!0});var Po=i(dt);v(Ui.$$.fragment,Po),f$=p(Po),Wi=s(Po,"P",{});var o1=i(Wi);u$=a(o1,"Bert Model with a "),cf=s(o1,"CODE",{});var o3=i(cf);g$=a(o3,"language modeling"),o3.forEach(t),_$=a(o1," head on top."),o1.forEach(t),b$=p(Po),Hi=s(Po,"P",{});var n1=i(Hi);k$=a(n1,"This model inherits from "),Rp=s(n1,"A",{href:!0});var n3=i(Rp);y$=a(n3,"PreTrainedModel"),n3.forEach(t),T$=a(n1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n1.forEach(t),v$=p(Po),Ri=s(Po,"P",{});var s1=i(Ri);w$=a(s1,"This model is also a PyTorch "),Qi=s(s1,"A",{href:!0,rel:!0});var s3=i(Qi);$$=a(s3,"torch.nn.Module"),s3.forEach(t),x$=a(s1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),s1.forEach(t),F$=p(Po),ut=s(Po,"DIV",{class:!0});var qo=i(ut);v(Vi.$$.fragment,qo),B$=p(qo),cn=s(qo,"P",{});var Lh=i(cn);M$=a(Lh,"The "),Qp=s(Lh,"A",{href:!0});var r3=i(Qp);E$=a(r3,"BertForMaskedLM"),r3.forEach(t),z$=a(Lh," forward method, overrides the "),pf=s(Lh,"CODE",{});var a3=i(pf);P$=a(a3,"__call__"),a3.forEach(t),q$=a(Lh," special method."),Lh.forEach(t),j$=p(qo),v(Cs.$$.fragment,qo),C$=p(qo),v(Ns.$$.fragment,qo),N$=p(qo),v(Os.$$.fragment,qo),qo.forEach(t),Po.forEach(t),Lb=p(o),pn=s(o,"H2",{class:!0});var r1=i(pn);Is=s(r1,"A",{id:!0,class:!0,href:!0});var i3=i(Is);hf=s(i3,"SPAN",{});var l3=i(hf);v(Ki.$$.fragment,l3),l3.forEach(t),i3.forEach(t),O$=p(r1),mf=s(r1,"SPAN",{});var d3=i(mf);I$=a(d3,"BertForNextSentencePrediction"),d3.forEach(t),r1.forEach(t),Db=p(o),ct=s(o,"DIV",{class:!0});var jo=i(ct);v(Ji.$$.fragment,jo),A$=p(jo),Gi=s(jo,"P",{});var a1=i(Gi);L$=a(a1,"Bert Model with a "),ff=s(a1,"CODE",{});var c3=i(ff);D$=a(c3,"next sentence prediction (classification)"),c3.forEach(t),S$=a(a1," head on top."),a1.forEach(t),U$=p(jo),Xi=s(jo,"P",{});var i1=i(Xi);W$=a(i1,"This model inherits from "),Vp=s(i1,"A",{href:!0});var p3=i(Vp);H$=a(p3,"PreTrainedModel"),p3.forEach(t),R$=a(i1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i1.forEach(t),Q$=p(jo),Yi=s(jo,"P",{});var l1=i(Yi);V$=a(l1,"This model is also a PyTorch "),Zi=s(l1,"A",{href:!0,rel:!0});var h3=i(Zi);K$=a(h3,"torch.nn.Module"),h3.forEach(t),J$=a(l1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l1.forEach(t),G$=p(jo),Ut=s(jo,"DIV",{class:!0});var ba=i(Ut);v(el.$$.fragment,ba),X$=p(ba),hn=s(ba,"P",{});var Dh=i(hn);Y$=a(Dh,"The "),Kp=s(Dh,"A",{href:!0});var m3=i(Kp);Z$=a(m3,"BertForNextSentencePrediction"),m3.forEach(t),e0=a(Dh," forward method, overrides the "),uf=s(Dh,"CODE",{});var f3=i(uf);t0=a(f3,"__call__"),f3.forEach(t),o0=a(Dh," special method."),Dh.forEach(t),n0=p(ba),v(As.$$.fragment,ba),s0=p(ba),v(Ls.$$.fragment,ba),ba.forEach(t),jo.forEach(t),Sb=p(o),mn=s(o,"H2",{class:!0});var d1=i(mn);Ds=s(d1,"A",{id:!0,class:!0,href:!0});var u3=i(Ds);gf=s(u3,"SPAN",{});var g3=i(gf);v(tl.$$.fragment,g3),g3.forEach(t),u3.forEach(t),r0=p(d1),_f=s(d1,"SPAN",{});var _3=i(_f);a0=a(_3,"BertForSequenceClassification"),_3.forEach(t),d1.forEach(t),Ub=p(o),pt=s(o,"DIV",{class:!0});var Co=i(pt);v(ol.$$.fragment,Co),i0=p(Co),bf=s(Co,"P",{});var b3=i(bf);l0=a(b3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),b3.forEach(t),d0=p(Co),nl=s(Co,"P",{});var c1=i(nl);c0=a(c1,"This model inherits from "),Jp=s(c1,"A",{href:!0});var k3=i(Jp);p0=a(k3,"PreTrainedModel"),k3.forEach(t),h0=a(c1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c1.forEach(t),m0=p(Co),sl=s(Co,"P",{});var p1=i(sl);f0=a(p1,"This model is also a PyTorch "),rl=s(p1,"A",{href:!0,rel:!0});var y3=i(rl);u0=a(y3,"torch.nn.Module"),y3.forEach(t),g0=a(p1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p1.forEach(t),_0=p(Co),Ve=s(Co,"DIV",{class:!0});var xt=i(Ve);v(al.$$.fragment,xt),b0=p(xt),fn=s(xt,"P",{});var Sh=i(fn);k0=a(Sh,"The "),Gp=s(Sh,"A",{href:!0});var T3=i(Gp);y0=a(T3,"BertForSequenceClassification"),T3.forEach(t),T0=a(Sh," forward method, overrides the "),kf=s(Sh,"CODE",{});var v3=i(kf);v0=a(v3,"__call__"),v3.forEach(t),w0=a(Sh," special method."),Sh.forEach(t),$0=p(xt),v(Ss.$$.fragment,xt),x0=p(xt),v(Us.$$.fragment,xt),F0=p(xt),v(Ws.$$.fragment,xt),B0=p(xt),v(Hs.$$.fragment,xt),M0=p(xt),v(Rs.$$.fragment,xt),xt.forEach(t),Co.forEach(t),Wb=p(o),un=s(o,"H2",{class:!0});var h1=i(un);Qs=s(h1,"A",{id:!0,class:!0,href:!0});var w3=i(Qs);yf=s(w3,"SPAN",{});var $3=i(yf);v(il.$$.fragment,$3),$3.forEach(t),w3.forEach(t),E0=p(h1),Tf=s(h1,"SPAN",{});var x3=i(Tf);z0=a(x3,"BertForMultipleChoice"),x3.forEach(t),h1.forEach(t),Hb=p(o),ht=s(o,"DIV",{class:!0});var No=i(ht);v(ll.$$.fragment,No),P0=p(No),vf=s(No,"P",{});var F3=i(vf);q0=a(F3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),F3.forEach(t),j0=p(No),dl=s(No,"P",{});var m1=i(dl);C0=a(m1,"This model inherits from "),Xp=s(m1,"A",{href:!0});var B3=i(Xp);N0=a(B3,"PreTrainedModel"),B3.forEach(t),O0=a(m1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m1.forEach(t),I0=p(No),cl=s(No,"P",{});var f1=i(cl);A0=a(f1,"This model is also a PyTorch "),pl=s(f1,"A",{href:!0,rel:!0});var M3=i(pl);L0=a(M3,"torch.nn.Module"),M3.forEach(t),D0=a(f1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),f1.forEach(t),S0=p(No),Wt=s(No,"DIV",{class:!0});var ka=i(Wt);v(hl.$$.fragment,ka),U0=p(ka),gn=s(ka,"P",{});var Uh=i(gn);W0=a(Uh,"The "),Yp=s(Uh,"A",{href:!0});var E3=i(Yp);H0=a(E3,"BertForMultipleChoice"),E3.forEach(t),R0=a(Uh," forward method, overrides the "),wf=s(Uh,"CODE",{});var z3=i(wf);Q0=a(z3,"__call__"),z3.forEach(t),V0=a(Uh," special method."),Uh.forEach(t),K0=p(ka),v(Vs.$$.fragment,ka),J0=p(ka),v(Ks.$$.fragment,ka),ka.forEach(t),No.forEach(t),Rb=p(o),_n=s(o,"H2",{class:!0});var u1=i(_n);Js=s(u1,"A",{id:!0,class:!0,href:!0});var P3=i(Js);$f=s(P3,"SPAN",{});var q3=i($f);v(ml.$$.fragment,q3),q3.forEach(t),P3.forEach(t),G0=p(u1),xf=s(u1,"SPAN",{});var j3=i(xf);X0=a(j3,"BertForTokenClassification"),j3.forEach(t),u1.forEach(t),Qb=p(o),mt=s(o,"DIV",{class:!0});var Oo=i(mt);v(fl.$$.fragment,Oo),Y0=p(Oo),Ff=s(Oo,"P",{});var C3=i(Ff);Z0=a(C3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),C3.forEach(t),e2=p(Oo),ul=s(Oo,"P",{});var g1=i(ul);t2=a(g1,"This model inherits from "),Zp=s(g1,"A",{href:!0});var N3=i(Zp);o2=a(N3,"PreTrainedModel"),N3.forEach(t),n2=a(g1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g1.forEach(t),s2=p(Oo),gl=s(Oo,"P",{});var _1=i(gl);r2=a(_1,"This model is also a PyTorch "),_l=s(_1,"A",{href:!0,rel:!0});var O3=i(_l);a2=a(O3,"torch.nn.Module"),O3.forEach(t),i2=a(_1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_1.forEach(t),l2=p(Oo),gt=s(Oo,"DIV",{class:!0});var Io=i(gt);v(bl.$$.fragment,Io),d2=p(Io),bn=s(Io,"P",{});var Wh=i(bn);c2=a(Wh,"The "),eh=s(Wh,"A",{href:!0});var I3=i(eh);p2=a(I3,"BertForTokenClassification"),I3.forEach(t),h2=a(Wh," forward method, overrides the "),Bf=s(Wh,"CODE",{});var A3=i(Bf);m2=a(A3,"__call__"),A3.forEach(t),f2=a(Wh," special method."),Wh.forEach(t),u2=p(Io),v(Gs.$$.fragment,Io),g2=p(Io),v(Xs.$$.fragment,Io),_2=p(Io),v(Ys.$$.fragment,Io),Io.forEach(t),Oo.forEach(t),Vb=p(o),kn=s(o,"H2",{class:!0});var b1=i(kn);Zs=s(b1,"A",{id:!0,class:!0,href:!0});var L3=i(Zs);Mf=s(L3,"SPAN",{});var D3=i(Mf);v(kl.$$.fragment,D3),D3.forEach(t),L3.forEach(t),b2=p(b1),Ef=s(b1,"SPAN",{});var S3=i(Ef);k2=a(S3,"BertForQuestionAnswering"),S3.forEach(t),b1.forEach(t),Kb=p(o),ft=s(o,"DIV",{class:!0});var Ao=i(ft);v(yl.$$.fragment,Ao),y2=p(Ao),yn=s(Ao,"P",{});var Hh=i(yn);T2=a(Hh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zf=s(Hh,"CODE",{});var U3=i(zf);v2=a(U3,"span start logits"),U3.forEach(t),w2=a(Hh," and "),Pf=s(Hh,"CODE",{});var W3=i(Pf);$2=a(W3,"span end logits"),W3.forEach(t),x2=a(Hh,")."),Hh.forEach(t),F2=p(Ao),Tl=s(Ao,"P",{});var k1=i(Tl);B2=a(k1,"This model inherits from "),th=s(k1,"A",{href:!0});var H3=i(th);M2=a(H3,"PreTrainedModel"),H3.forEach(t),E2=a(k1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k1.forEach(t),z2=p(Ao),vl=s(Ao,"P",{});var y1=i(vl);P2=a(y1,"This model is also a PyTorch "),wl=s(y1,"A",{href:!0,rel:!0});var R3=i(wl);q2=a(R3,"torch.nn.Module"),R3.forEach(t),j2=a(y1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y1.forEach(t),C2=p(Ao),_t=s(Ao,"DIV",{class:!0});var Lo=i(_t);v($l.$$.fragment,Lo),N2=p(Lo),Tn=s(Lo,"P",{});var Rh=i(Tn);O2=a(Rh,"The "),oh=s(Rh,"A",{href:!0});var Q3=i(oh);I2=a(Q3,"BertForQuestionAnswering"),Q3.forEach(t),A2=a(Rh," forward method, overrides the "),qf=s(Rh,"CODE",{});var V3=i(qf);L2=a(V3,"__call__"),V3.forEach(t),D2=a(Rh," special method."),Rh.forEach(t),S2=p(Lo),v(er.$$.fragment,Lo),U2=p(Lo),v(tr.$$.fragment,Lo),W2=p(Lo),v(or.$$.fragment,Lo),Lo.forEach(t),Ao.forEach(t),Jb=p(o),vn=s(o,"H2",{class:!0});var T1=i(vn);nr=s(T1,"A",{id:!0,class:!0,href:!0});var K3=i(nr);jf=s(K3,"SPAN",{});var J3=i(jf);v(xl.$$.fragment,J3),J3.forEach(t),K3.forEach(t),H2=p(T1),Cf=s(T1,"SPAN",{});var G3=i(Cf);R2=a(G3,"TFBertModel"),G3.forEach(t),T1.forEach(t),Gb=p(o),Je=s(o,"DIV",{class:!0});var no=i(Je);v(Fl.$$.fragment,no),Q2=p(no),Nf=s(no,"P",{});var X3=i(Nf);V2=a(X3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),X3.forEach(t),K2=p(no),Bl=s(no,"P",{});var v1=i(Bl);J2=a(v1,"This model inherits from "),nh=s(v1,"A",{href:!0});var Y3=i(nh);G2=a(Y3,"TFPreTrainedModel"),Y3.forEach(t),X2=a(v1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v1.forEach(t),Y2=p(no),Ml=s(no,"P",{});var w1=i(Ml);Z2=a(w1,"This model is also a "),El=s(w1,"A",{href:!0,rel:!0});var Z3=i(El);ex=a(Z3,"tf.keras.Model"),Z3.forEach(t),tx=a(w1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w1.forEach(t),ox=p(no),v(sr.$$.fragment,no),nx=p(no),Ht=s(no,"DIV",{class:!0});var ya=i(Ht);v(zl.$$.fragment,ya),sx=p(ya),wn=s(ya,"P",{});var Qh=i(wn);rx=a(Qh,"The "),sh=s(Qh,"A",{href:!0});var eC=i(sh);ax=a(eC,"TFBertModel"),eC.forEach(t),ix=a(Qh," forward method, overrides the "),Of=s(Qh,"CODE",{});var tC=i(Of);lx=a(tC,"__call__"),tC.forEach(t),dx=a(Qh," special method."),Qh.forEach(t),cx=p(ya),v(rr.$$.fragment,ya),px=p(ya),v(ar.$$.fragment,ya),ya.forEach(t),no.forEach(t),Xb=p(o),$n=s(o,"H2",{class:!0});var $1=i($n);ir=s($1,"A",{id:!0,class:!0,href:!0});var oC=i(ir);If=s(oC,"SPAN",{});var nC=i(If);v(Pl.$$.fragment,nC),nC.forEach(t),oC.forEach(t),hx=p($1),Af=s($1,"SPAN",{});var sC=i(Af);mx=a(sC,"TFBertForPreTraining"),sC.forEach(t),$1.forEach(t),Yb=p(o),Ge=s(o,"DIV",{class:!0});var so=i(Ge);v(ql.$$.fragment,so),fx=p(so),xn=s(so,"P",{});var Vh=i(xn);ux=a(Vh,`Bert Model with two heads on top as done during the pretraining:
a `),Lf=s(Vh,"CODE",{});var rC=i(Lf);gx=a(rC,"masked language modeling"),rC.forEach(t),_x=a(Vh," head and a "),Df=s(Vh,"CODE",{});var aC=i(Df);bx=a(aC,"next sentence prediction (classification)"),aC.forEach(t),kx=a(Vh," head."),Vh.forEach(t),yx=p(so),jl=s(so,"P",{});var x1=i(jl);Tx=a(x1,"This model inherits from "),rh=s(x1,"A",{href:!0});var iC=i(rh);vx=a(iC,"TFPreTrainedModel"),iC.forEach(t),wx=a(x1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x1.forEach(t),$x=p(so),Cl=s(so,"P",{});var F1=i(Cl);xx=a(F1,"This model is also a "),Nl=s(F1,"A",{href:!0,rel:!0});var lC=i(Nl);Fx=a(lC,"tf.keras.Model"),lC.forEach(t),Bx=a(F1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),F1.forEach(t),Mx=p(so),v(lr.$$.fragment,so),Ex=p(so),Rt=s(so,"DIV",{class:!0});var Ta=i(Rt);v(Ol.$$.fragment,Ta),zx=p(Ta),Fn=s(Ta,"P",{});var Kh=i(Fn);Px=a(Kh,"The "),ah=s(Kh,"A",{href:!0});var dC=i(ah);qx=a(dC,"TFBertForPreTraining"),dC.forEach(t),jx=a(Kh," forward method, overrides the "),Sf=s(Kh,"CODE",{});var cC=i(Sf);Cx=a(cC,"__call__"),cC.forEach(t),Nx=a(Kh," special method."),Kh.forEach(t),Ox=p(Ta),v(dr.$$.fragment,Ta),Ix=p(Ta),v(cr.$$.fragment,Ta),Ta.forEach(t),so.forEach(t),Zb=p(o),Bn=s(o,"H2",{class:!0});var B1=i(Bn);pr=s(B1,"A",{id:!0,class:!0,href:!0});var pC=i(pr);Uf=s(pC,"SPAN",{});var hC=i(Uf);v(Il.$$.fragment,hC),hC.forEach(t),pC.forEach(t),Ax=p(B1),Wf=s(B1,"SPAN",{});var mC=i(Wf);Lx=a(mC,"TFBertModelLMHeadModel"),mC.forEach(t),B1.forEach(t),ek=p(o),Mn=s(o,"DIV",{class:!0});var M1=i(Mn);v(Al.$$.fragment,M1),Dx=p(M1),bt=s(M1,"DIV",{class:!0});var Do=i(bt);v(Ll.$$.fragment,Do),Sx=p(Do),Ie=s(Do,"P",{});var st=i(Ie);Ux=a(st,"encoder_hidden_states  ("),Hf=s(st,"CODE",{});var fC=i(Hf);Wx=a(fC,"tf.Tensor"),fC.forEach(t),Hx=a(st," of shape "),Rf=s(st,"CODE",{});var uC=i(Rf);Rx=a(uC,"(batch_size, sequence_length, hidden_size)"),uC.forEach(t),Qx=a(st,", "),Qf=s(st,"EM",{});var gC=i(Qf);Vx=a(gC,"optional"),gC.forEach(t),Kx=a(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Vf=s(st,"CODE",{});var _C=i(Vf);Jx=a(_C,"tf.Tensor"),_C.forEach(t),Gx=a(st," of shape "),Kf=s(st,"CODE",{});var bC=i(Kf);Xx=a(bC,"(batch_size, sequence_length)"),bC.forEach(t),Yx=a(st,", "),Jf=s(st,"EM",{});var kC=i(Jf);Zx=a(kC,"optional"),kC.forEach(t),eF=a(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Gf=s(st,"CODE",{});var yC=i(Gf);tF=a(yC,"[0, 1]"),yC.forEach(t),oF=a(st,":"),st.forEach(t),nF=p(Do),Dl=s(Do,"UL",{});var E1=i(Dl);Sl=s(E1,"LI",{});var z1=i(Sl);sF=a(z1,"1 for tokens that are "),Xf=s(z1,"STRONG",{});var TC=i(Xf);rF=a(TC,"not masked"),TC.forEach(t),aF=a(z1,","),z1.forEach(t),iF=p(E1),Ul=s(E1,"LI",{});var P1=i(Ul);lF=a(P1,"0 for tokens that are "),Yf=s(P1,"STRONG",{});var vC=i(Yf);dF=a(vC,"masked"),vC.forEach(t),cF=a(P1,"."),P1.forEach(t),E1.forEach(t),pF=p(Do),G=s(Do,"P",{});var Z=i(G);hF=a(Z,"past_key_values ("),Zf=s(Z,"CODE",{});var wC=i(Zf);mF=a(wC,"Tuple[Tuple[tf.Tensor]]"),wC.forEach(t),fF=a(Z," of length "),eu=s(Z,"CODE",{});var $C=i(eu);uF=a($C,"config.n_layers"),$C.forEach(t),gF=a(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),tu=s(Z,"CODE",{});var xC=i(tu);_F=a(xC,"past_key_values"),xC.forEach(t),bF=a(Z," are used, the user can optionally input only the last "),ou=s(Z,"CODE",{});var FC=i(ou);kF=a(FC,"decoder_input_ids"),FC.forEach(t),yF=a(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),nu=s(Z,"CODE",{});var BC=i(nu);TF=a(BC,"(batch_size, 1)"),BC.forEach(t),vF=a(Z,` instead of all
`),su=s(Z,"CODE",{});var MC=i(su);wF=a(MC,"decoder_input_ids"),MC.forEach(t),$F=a(Z," of shape "),ru=s(Z,"CODE",{});var EC=i(ru);xF=a(EC,"(batch_size, sequence_length)"),EC.forEach(t),FF=a(Z,`.
use_cache (`),au=s(Z,"CODE",{});var zC=i(au);BF=a(zC,"bool"),zC.forEach(t),MF=a(Z,", "),iu=s(Z,"EM",{});var PC=i(iu);EF=a(PC,"optional"),PC.forEach(t),zF=a(Z,", defaults to "),lu=s(Z,"CODE",{});var qC=i(lu);PF=a(qC,"True"),qC.forEach(t),qF=a(Z,`):
If set to `),du=s(Z,"CODE",{});var jC=i(du);jF=a(jC,"True"),jC.forEach(t),CF=a(Z,", "),cu=s(Z,"CODE",{});var CC=i(cu);NF=a(CC,"past_key_values"),CC.forEach(t),OF=a(Z,` key value states are returned and can be used to speed up decoding (see
`),pu=s(Z,"CODE",{});var NC=i(pu);IF=a(NC,"past_key_values"),NC.forEach(t),AF=a(Z,"). Set to "),hu=s(Z,"CODE",{});var OC=i(hu);LF=a(OC,"False"),OC.forEach(t),DF=a(Z," during training, "),mu=s(Z,"CODE",{});var IC=i(mu);SF=a(IC,"True"),IC.forEach(t),UF=a(Z,` during generation
labels (`),fu=s(Z,"CODE",{});var AC=i(fu);WF=a(AC,"tf.Tensor"),AC.forEach(t),HF=a(Z," or "),uu=s(Z,"CODE",{});var LC=i(uu);RF=a(LC,"np.ndarray"),LC.forEach(t),QF=a(Z," of shape "),gu=s(Z,"CODE",{});var DC=i(gu);VF=a(DC,"(batch_size, sequence_length)"),DC.forEach(t),KF=a(Z,", "),_u=s(Z,"EM",{});var SC=i(_u);JF=a(SC,"optional"),SC.forEach(t),GF=a(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),bu=s(Z,"CODE",{});var UC=i(bu);XF=a(UC,"[0, ..., config.vocab_size - 1]"),UC.forEach(t),YF=a(Z,"."),Z.forEach(t),ZF=p(Do),v(hr.$$.fragment,Do),Do.forEach(t),M1.forEach(t),tk=p(o),En=s(o,"H2",{class:!0});var q1=i(En);mr=s(q1,"A",{id:!0,class:!0,href:!0});var WC=i(mr);ku=s(WC,"SPAN",{});var HC=i(ku);v(Wl.$$.fragment,HC),HC.forEach(t),WC.forEach(t),eB=p(q1),yu=s(q1,"SPAN",{});var RC=i(yu);tB=a(RC,"TFBertForMaskedLM"),RC.forEach(t),q1.forEach(t),ok=p(o),Xe=s(o,"DIV",{class:!0});var ro=i(Xe);v(Hl.$$.fragment,ro),oB=p(ro),Rl=s(ro,"P",{});var j1=i(Rl);nB=a(j1,"Bert Model with a "),Tu=s(j1,"CODE",{});var QC=i(Tu);sB=a(QC,"language modeling"),QC.forEach(t),rB=a(j1," head on top."),j1.forEach(t),aB=p(ro),Ql=s(ro,"P",{});var C1=i(Ql);iB=a(C1,"This model inherits from "),ih=s(C1,"A",{href:!0});var VC=i(ih);lB=a(VC,"TFPreTrainedModel"),VC.forEach(t),dB=a(C1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C1.forEach(t),cB=p(ro),Vl=s(ro,"P",{});var N1=i(Vl);pB=a(N1,"This model is also a "),Kl=s(N1,"A",{href:!0,rel:!0});var KC=i(Kl);hB=a(KC,"tf.keras.Model"),KC.forEach(t),mB=a(N1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),N1.forEach(t),fB=p(ro),v(fr.$$.fragment,ro),uB=p(ro),kt=s(ro,"DIV",{class:!0});var So=i(kt);v(Jl.$$.fragment,So),gB=p(So),zn=s(So,"P",{});var Jh=i(zn);_B=a(Jh,"The "),lh=s(Jh,"A",{href:!0});var JC=i(lh);bB=a(JC,"TFBertForMaskedLM"),JC.forEach(t),kB=a(Jh," forward method, overrides the "),vu=s(Jh,"CODE",{});var GC=i(vu);yB=a(GC,"__call__"),GC.forEach(t),TB=a(Jh," special method."),Jh.forEach(t),vB=p(So),v(ur.$$.fragment,So),wB=p(So),v(gr.$$.fragment,So),$B=p(So),v(_r.$$.fragment,So),So.forEach(t),ro.forEach(t),nk=p(o),Pn=s(o,"H2",{class:!0});var O1=i(Pn);br=s(O1,"A",{id:!0,class:!0,href:!0});var XC=i(br);wu=s(XC,"SPAN",{});var YC=i(wu);v(Gl.$$.fragment,YC),YC.forEach(t),XC.forEach(t),xB=p(O1),$u=s(O1,"SPAN",{});var ZC=i($u);FB=a(ZC,"TFBertForNextSentencePrediction"),ZC.forEach(t),O1.forEach(t),sk=p(o),Ye=s(o,"DIV",{class:!0});var ao=i(Ye);v(Xl.$$.fragment,ao),BB=p(ao),Yl=s(ao,"P",{});var I1=i(Yl);MB=a(I1,"Bert Model with a "),xu=s(I1,"CODE",{});var e6=i(xu);EB=a(e6,"next sentence prediction (classification)"),e6.forEach(t),zB=a(I1," head on top."),I1.forEach(t),PB=p(ao),Zl=s(ao,"P",{});var A1=i(Zl);qB=a(A1,"This model inherits from "),dh=s(A1,"A",{href:!0});var t6=i(dh);jB=a(t6,"TFPreTrainedModel"),t6.forEach(t),CB=a(A1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A1.forEach(t),NB=p(ao),ed=s(ao,"P",{});var L1=i(ed);OB=a(L1,"This model is also a "),td=s(L1,"A",{href:!0,rel:!0});var o6=i(td);IB=a(o6,"tf.keras.Model"),o6.forEach(t),AB=a(L1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),L1.forEach(t),LB=p(ao),v(kr.$$.fragment,ao),DB=p(ao),Qt=s(ao,"DIV",{class:!0});var va=i(Qt);v(od.$$.fragment,va),SB=p(va),qn=s(va,"P",{});var Gh=i(qn);UB=a(Gh,"The "),ch=s(Gh,"A",{href:!0});var n6=i(ch);WB=a(n6,"TFBertForNextSentencePrediction"),n6.forEach(t),HB=a(Gh," forward method, overrides the "),Fu=s(Gh,"CODE",{});var s6=i(Fu);RB=a(s6,"__call__"),s6.forEach(t),QB=a(Gh," special method."),Gh.forEach(t),VB=p(va),v(yr.$$.fragment,va),KB=p(va),v(Tr.$$.fragment,va),va.forEach(t),ao.forEach(t),rk=p(o),jn=s(o,"H2",{class:!0});var D1=i(jn);vr=s(D1,"A",{id:!0,class:!0,href:!0});var r6=i(vr);Bu=s(r6,"SPAN",{});var a6=i(Bu);v(nd.$$.fragment,a6),a6.forEach(t),r6.forEach(t),JB=p(D1),Mu=s(D1,"SPAN",{});var i6=i(Mu);GB=a(i6,"TFBertForSequenceClassification"),i6.forEach(t),D1.forEach(t),ak=p(o),Ze=s(o,"DIV",{class:!0});var io=i(Ze);v(sd.$$.fragment,io),XB=p(io),Eu=s(io,"P",{});var l6=i(Eu);YB=a(l6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),l6.forEach(t),ZB=p(io),rd=s(io,"P",{});var S1=i(rd);e7=a(S1,"This model inherits from "),ph=s(S1,"A",{href:!0});var d6=i(ph);t7=a(d6,"TFPreTrainedModel"),d6.forEach(t),o7=a(S1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S1.forEach(t),n7=p(io),ad=s(io,"P",{});var U1=i(ad);s7=a(U1,"This model is also a "),id=s(U1,"A",{href:!0,rel:!0});var c6=i(id);r7=a(c6,"tf.keras.Model"),c6.forEach(t),a7=a(U1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),U1.forEach(t),i7=p(io),v(wr.$$.fragment,io),l7=p(io),yt=s(io,"DIV",{class:!0});var Uo=i(yt);v(ld.$$.fragment,Uo),d7=p(Uo),Cn=s(Uo,"P",{});var Xh=i(Cn);c7=a(Xh,"The "),hh=s(Xh,"A",{href:!0});var p6=i(hh);p7=a(p6,"TFBertForSequenceClassification"),p6.forEach(t),h7=a(Xh," forward method, overrides the "),zu=s(Xh,"CODE",{});var h6=i(zu);m7=a(h6,"__call__"),h6.forEach(t),f7=a(Xh," special method."),Xh.forEach(t),u7=p(Uo),v($r.$$.fragment,Uo),g7=p(Uo),v(xr.$$.fragment,Uo),_7=p(Uo),v(Fr.$$.fragment,Uo),Uo.forEach(t),io.forEach(t),ik=p(o),Nn=s(o,"H2",{class:!0});var W1=i(Nn);Br=s(W1,"A",{id:!0,class:!0,href:!0});var m6=i(Br);Pu=s(m6,"SPAN",{});var f6=i(Pu);v(dd.$$.fragment,f6),f6.forEach(t),m6.forEach(t),b7=p(W1),qu=s(W1,"SPAN",{});var u6=i(qu);k7=a(u6,"TFBertForMultipleChoice"),u6.forEach(t),W1.forEach(t),lk=p(o),et=s(o,"DIV",{class:!0});var lo=i(et);v(cd.$$.fragment,lo),y7=p(lo),ju=s(lo,"P",{});var g6=i(ju);T7=a(g6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),g6.forEach(t),v7=p(lo),pd=s(lo,"P",{});var H1=i(pd);w7=a(H1,"This model inherits from "),mh=s(H1,"A",{href:!0});var _6=i(mh);$7=a(_6,"TFPreTrainedModel"),_6.forEach(t),x7=a(H1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H1.forEach(t),F7=p(lo),hd=s(lo,"P",{});var R1=i(hd);B7=a(R1,"This model is also a "),md=s(R1,"A",{href:!0,rel:!0});var b6=i(md);M7=a(b6,"tf.keras.Model"),b6.forEach(t),E7=a(R1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),R1.forEach(t),z7=p(lo),v(Mr.$$.fragment,lo),P7=p(lo),Vt=s(lo,"DIV",{class:!0});var wa=i(Vt);v(fd.$$.fragment,wa),q7=p(wa),On=s(wa,"P",{});var Yh=i(On);j7=a(Yh,"The "),fh=s(Yh,"A",{href:!0});var k6=i(fh);C7=a(k6,"TFBertForMultipleChoice"),k6.forEach(t),N7=a(Yh," forward method, overrides the "),Cu=s(Yh,"CODE",{});var y6=i(Cu);O7=a(y6,"__call__"),y6.forEach(t),I7=a(Yh," special method."),Yh.forEach(t),A7=p(wa),v(Er.$$.fragment,wa),L7=p(wa),v(zr.$$.fragment,wa),wa.forEach(t),lo.forEach(t),dk=p(o),In=s(o,"H2",{class:!0});var Q1=i(In);Pr=s(Q1,"A",{id:!0,class:!0,href:!0});var T6=i(Pr);Nu=s(T6,"SPAN",{});var v6=i(Nu);v(ud.$$.fragment,v6),v6.forEach(t),T6.forEach(t),D7=p(Q1),Ou=s(Q1,"SPAN",{});var w6=i(Ou);S7=a(w6,"TFBertForTokenClassification"),w6.forEach(t),Q1.forEach(t),ck=p(o),tt=s(o,"DIV",{class:!0});var co=i(tt);v(gd.$$.fragment,co),U7=p(co),Iu=s(co,"P",{});var $6=i(Iu);W7=a($6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$6.forEach(t),H7=p(co),_d=s(co,"P",{});var V1=i(_d);R7=a(V1,"This model inherits from "),uh=s(V1,"A",{href:!0});var x6=i(uh);Q7=a(x6,"TFPreTrainedModel"),x6.forEach(t),V7=a(V1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V1.forEach(t),K7=p(co),bd=s(co,"P",{});var K1=i(bd);J7=a(K1,"This model is also a "),kd=s(K1,"A",{href:!0,rel:!0});var F6=i(kd);G7=a(F6,"tf.keras.Model"),F6.forEach(t),X7=a(K1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K1.forEach(t),Y7=p(co),v(qr.$$.fragment,co),Z7=p(co),Tt=s(co,"DIV",{class:!0});var Wo=i(Tt);v(yd.$$.fragment,Wo),eM=p(Wo),An=s(Wo,"P",{});var Zh=i(An);tM=a(Zh,"The "),gh=s(Zh,"A",{href:!0});var B6=i(gh);oM=a(B6,"TFBertForTokenClassification"),B6.forEach(t),nM=a(Zh," forward method, overrides the "),Au=s(Zh,"CODE",{});var M6=i(Au);sM=a(M6,"__call__"),M6.forEach(t),rM=a(Zh," special method."),Zh.forEach(t),aM=p(Wo),v(jr.$$.fragment,Wo),iM=p(Wo),v(Cr.$$.fragment,Wo),lM=p(Wo),v(Nr.$$.fragment,Wo),Wo.forEach(t),co.forEach(t),pk=p(o),Ln=s(o,"H2",{class:!0});var J1=i(Ln);Or=s(J1,"A",{id:!0,class:!0,href:!0});var E6=i(Or);Lu=s(E6,"SPAN",{});var z6=i(Lu);v(Td.$$.fragment,z6),z6.forEach(t),E6.forEach(t),dM=p(J1),Du=s(J1,"SPAN",{});var P6=i(Du);cM=a(P6,"TFBertForQuestionAnswering"),P6.forEach(t),J1.forEach(t),hk=p(o),ot=s(o,"DIV",{class:!0});var po=i(ot);v(vd.$$.fragment,po),pM=p(po),Dn=s(po,"P",{});var em=i(Dn);hM=a(em,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Su=s(em,"CODE",{});var q6=i(Su);mM=a(q6,"span start logits"),q6.forEach(t),fM=a(em," and "),Uu=s(em,"CODE",{});var j6=i(Uu);uM=a(j6,"span end logits"),j6.forEach(t),gM=a(em,")."),em.forEach(t),_M=p(po),wd=s(po,"P",{});var G1=i(wd);bM=a(G1,"This model inherits from "),_h=s(G1,"A",{href:!0});var C6=i(_h);kM=a(C6,"TFPreTrainedModel"),C6.forEach(t),yM=a(G1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G1.forEach(t),TM=p(po),$d=s(po,"P",{});var X1=i($d);vM=a(X1,"This model is also a "),xd=s(X1,"A",{href:!0,rel:!0});var N6=i(xd);wM=a(N6,"tf.keras.Model"),N6.forEach(t),$M=a(X1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X1.forEach(t),xM=p(po),v(Ir.$$.fragment,po),FM=p(po),vt=s(po,"DIV",{class:!0});var Ho=i(vt);v(Fd.$$.fragment,Ho),BM=p(Ho),Sn=s(Ho,"P",{});var tm=i(Sn);MM=a(tm,"The "),bh=s(tm,"A",{href:!0});var O6=i(bh);EM=a(O6,"TFBertForQuestionAnswering"),O6.forEach(t),zM=a(tm," forward method, overrides the "),Wu=s(tm,"CODE",{});var I6=i(Wu);PM=a(I6,"__call__"),I6.forEach(t),qM=a(tm," special method."),tm.forEach(t),jM=p(Ho),v(Ar.$$.fragment,Ho),CM=p(Ho),v(Lr.$$.fragment,Ho),NM=p(Ho),v(Dr.$$.fragment,Ho),Ho.forEach(t),po.forEach(t),mk=p(o),Un=s(o,"H2",{class:!0});var Y1=i(Un);Sr=s(Y1,"A",{id:!0,class:!0,href:!0});var A6=i(Sr);Hu=s(A6,"SPAN",{});var L6=i(Hu);v(Bd.$$.fragment,L6),L6.forEach(t),A6.forEach(t),OM=p(Y1),Ru=s(Y1,"SPAN",{});var D6=i(Ru);IM=a(D6,"FlaxBertModel"),D6.forEach(t),Y1.forEach(t),fk=p(o),Ae=s(o,"DIV",{class:!0});var Ft=i(Ae);v(Md.$$.fragment,Ft),AM=p(Ft),Qu=s(Ft,"P",{});var S6=i(Qu);LM=a(S6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),S6.forEach(t),DM=p(Ft),Ed=s(Ft,"P",{});var Z1=i(Ed);SM=a(Z1,"This model inherits from "),kh=s(Z1,"A",{href:!0});var U6=i(kh);UM=a(U6,"FlaxPreTrainedModel"),U6.forEach(t),WM=a(Z1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Z1.forEach(t),HM=p(Ft),zd=s(Ft,"P",{});var ey=i(zd);RM=a(ey,"This model is also a Flax Linen "),Pd=s(ey,"A",{href:!0,rel:!0});var W6=i(Pd);QM=a(W6,"flax.linen.Module"),W6.forEach(t),VM=a(ey,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ey.forEach(t),KM=p(Ft),Vu=s(Ft,"P",{});var H6=i(Vu);JM=a(H6,"Finally, this model supports inherent JAX features such as:"),H6.forEach(t),GM=p(Ft),fo=s(Ft,"UL",{});var $a=i(fo);Ku=s($a,"LI",{});var R6=i(Ku);qd=s(R6,"A",{href:!0,rel:!0});var Q6=i(qd);XM=a(Q6,"Just-In-Time (JIT) compilation"),Q6.forEach(t),R6.forEach(t),YM=p($a),Ju=s($a,"LI",{});var V6=i(Ju);jd=s(V6,"A",{href:!0,rel:!0});var K6=i(jd);ZM=a(K6,"Automatic Differentiation"),K6.forEach(t),V6.forEach(t),eE=p($a),Gu=s($a,"LI",{});var J6=i(Gu);Cd=s(J6,"A",{href:!0,rel:!0});var G6=i(Cd);tE=a(G6,"Vectorization"),G6.forEach(t),J6.forEach(t),oE=p($a),Xu=s($a,"LI",{});var X6=i(Xu);Nd=s(X6,"A",{href:!0,rel:!0});var Y6=i(Nd);nE=a(Y6,"Parallelization"),Y6.forEach(t),X6.forEach(t),$a.forEach(t),sE=p(Ft),Kt=s(Ft,"DIV",{class:!0});var xa=i(Kt);v(Od.$$.fragment,xa),rE=p(xa),Wn=s(xa,"P",{});var om=i(Wn);aE=a(om,"The "),Yu=s(om,"CODE",{});var Z6=i(Yu);iE=a(Z6,"FlaxBertPreTrainedModel"),Z6.forEach(t),lE=a(om," forward method, overrides the "),Zu=s(om,"CODE",{});var e5=i(Zu);dE=a(e5,"__call__"),e5.forEach(t),cE=a(om," special method."),om.forEach(t),pE=p(xa),v(Ur.$$.fragment,xa),hE=p(xa),v(Wr.$$.fragment,xa),xa.forEach(t),Ft.forEach(t),uk=p(o),Hn=s(o,"H2",{class:!0});var ty=i(Hn);Hr=s(ty,"A",{id:!0,class:!0,href:!0});var t5=i(Hr);eg=s(t5,"SPAN",{});var o5=i(eg);v(Id.$$.fragment,o5),o5.forEach(t),t5.forEach(t),mE=p(ty),tg=s(ty,"SPAN",{});var n5=i(tg);fE=a(n5,"FlaxBertForPreTraining"),n5.forEach(t),ty.forEach(t),gk=p(o),Le=s(o,"DIV",{class:!0});var Bt=i(Le);v(Ad.$$.fragment,Bt),uE=p(Bt),Rn=s(Bt,"P",{});var nm=i(Rn);gE=a(nm,"Bert Model with two heads on top as done during the pretraining: a "),og=s(nm,"CODE",{});var s5=i(og);_E=a(s5,"masked language modeling"),s5.forEach(t),bE=a(nm," head and a "),ng=s(nm,"CODE",{});var r5=i(ng);kE=a(r5,"next sentence prediction (classification)"),r5.forEach(t),yE=a(nm," head."),nm.forEach(t),TE=p(Bt),Ld=s(Bt,"P",{});var oy=i(Ld);vE=a(oy,"This model inherits from "),yh=s(oy,"A",{href:!0});var a5=i(yh);wE=a(a5,"FlaxPreTrainedModel"),a5.forEach(t),$E=a(oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oy.forEach(t),xE=p(Bt),Dd=s(Bt,"P",{});var ny=i(Dd);FE=a(ny,"This model is also a Flax Linen "),Sd=s(ny,"A",{href:!0,rel:!0});var i5=i(Sd);BE=a(i5,"flax.linen.Module"),i5.forEach(t),ME=a(ny,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ny.forEach(t),EE=p(Bt),sg=s(Bt,"P",{});var l5=i(sg);zE=a(l5,"Finally, this model supports inherent JAX features such as:"),l5.forEach(t),PE=p(Bt),uo=s(Bt,"UL",{});var Fa=i(uo);rg=s(Fa,"LI",{});var d5=i(rg);Ud=s(d5,"A",{href:!0,rel:!0});var c5=i(Ud);qE=a(c5,"Just-In-Time (JIT) compilation"),c5.forEach(t),d5.forEach(t),jE=p(Fa),ag=s(Fa,"LI",{});var p5=i(ag);Wd=s(p5,"A",{href:!0,rel:!0});var h5=i(Wd);CE=a(h5,"Automatic Differentiation"),h5.forEach(t),p5.forEach(t),NE=p(Fa),ig=s(Fa,"LI",{});var m5=i(ig);Hd=s(m5,"A",{href:!0,rel:!0});var f5=i(Hd);OE=a(f5,"Vectorization"),f5.forEach(t),m5.forEach(t),IE=p(Fa),lg=s(Fa,"LI",{});var u5=i(lg);Rd=s(u5,"A",{href:!0,rel:!0});var g5=i(Rd);AE=a(g5,"Parallelization"),g5.forEach(t),u5.forEach(t),Fa.forEach(t),LE=p(Bt),Jt=s(Bt,"DIV",{class:!0});var Ba=i(Jt);v(Qd.$$.fragment,Ba),DE=p(Ba),Qn=s(Ba,"P",{});var sm=i(Qn);SE=a(sm,"The "),dg=s(sm,"CODE",{});var _5=i(dg);UE=a(_5,"FlaxBertPreTrainedModel"),_5.forEach(t),WE=a(sm," forward method, overrides the "),cg=s(sm,"CODE",{});var b5=i(cg);HE=a(b5,"__call__"),b5.forEach(t),RE=a(sm," special method."),sm.forEach(t),QE=p(Ba),v(Rr.$$.fragment,Ba),VE=p(Ba),v(Qr.$$.fragment,Ba),Ba.forEach(t),Bt.forEach(t),_k=p(o),Vn=s(o,"H2",{class:!0});var sy=i(Vn);Vr=s(sy,"A",{id:!0,class:!0,href:!0});var k5=i(Vr);pg=s(k5,"SPAN",{});var y5=i(pg);v(Vd.$$.fragment,y5),y5.forEach(t),k5.forEach(t),KE=p(sy),hg=s(sy,"SPAN",{});var T5=i(hg);JE=a(T5,"FlaxBertForCausalLM"),T5.forEach(t),sy.forEach(t),bk=p(o),De=s(o,"DIV",{class:!0});var Mt=i(De);v(Kd.$$.fragment,Mt),GE=p(Mt),mg=s(Mt,"P",{});var v5=i(mg);XE=a(v5,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),v5.forEach(t),YE=p(Mt),Jd=s(Mt,"P",{});var ry=i(Jd);ZE=a(ry,"This model inherits from "),Th=s(ry,"A",{href:!0});var w5=i(Th);ez=a(w5,"FlaxPreTrainedModel"),w5.forEach(t),tz=a(ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry.forEach(t),oz=p(Mt),Gd=s(Mt,"P",{});var ay=i(Gd);nz=a(ay,"This model is also a Flax Linen "),Xd=s(ay,"A",{href:!0,rel:!0});var $5=i(Xd);sz=a($5,"flax.linen.Module"),$5.forEach(t),rz=a(ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ay.forEach(t),az=p(Mt),fg=s(Mt,"P",{});var x5=i(fg);iz=a(x5,"Finally, this model supports inherent JAX features such as:"),x5.forEach(t),lz=p(Mt),go=s(Mt,"UL",{});var Ma=i(go);ug=s(Ma,"LI",{});var F5=i(ug);Yd=s(F5,"A",{href:!0,rel:!0});var B5=i(Yd);dz=a(B5,"Just-In-Time (JIT) compilation"),B5.forEach(t),F5.forEach(t),cz=p(Ma),gg=s(Ma,"LI",{});var M5=i(gg);Zd=s(M5,"A",{href:!0,rel:!0});var E5=i(Zd);pz=a(E5,"Automatic Differentiation"),E5.forEach(t),M5.forEach(t),hz=p(Ma),_g=s(Ma,"LI",{});var z5=i(_g);ec=s(z5,"A",{href:!0,rel:!0});var P5=i(ec);mz=a(P5,"Vectorization"),P5.forEach(t),z5.forEach(t),fz=p(Ma),bg=s(Ma,"LI",{});var q5=i(bg);tc=s(q5,"A",{href:!0,rel:!0});var j5=i(tc);uz=a(j5,"Parallelization"),j5.forEach(t),q5.forEach(t),Ma.forEach(t),gz=p(Mt),Gt=s(Mt,"DIV",{class:!0});var Ea=i(Gt);v(oc.$$.fragment,Ea),_z=p(Ea),Kn=s(Ea,"P",{});var rm=i(Kn);bz=a(rm,"The "),kg=s(rm,"CODE",{});var C5=i(kg);kz=a(C5,"FlaxBertPreTrainedModel"),C5.forEach(t),yz=a(rm," forward method, overrides the "),yg=s(rm,"CODE",{});var N5=i(yg);Tz=a(N5,"__call__"),N5.forEach(t),vz=a(rm," special method."),rm.forEach(t),wz=p(Ea),v(Kr.$$.fragment,Ea),$z=p(Ea),v(Jr.$$.fragment,Ea),Ea.forEach(t),Mt.forEach(t),kk=p(o),Jn=s(o,"H2",{class:!0});var iy=i(Jn);Gr=s(iy,"A",{id:!0,class:!0,href:!0});var O5=i(Gr);Tg=s(O5,"SPAN",{});var I5=i(Tg);v(nc.$$.fragment,I5),I5.forEach(t),O5.forEach(t),xz=p(iy),vg=s(iy,"SPAN",{});var A5=i(vg);Fz=a(A5,"FlaxBertForMaskedLM"),A5.forEach(t),iy.forEach(t),yk=p(o),Se=s(o,"DIV",{class:!0});var Et=i(Se);v(sc.$$.fragment,Et),Bz=p(Et),rc=s(Et,"P",{});var ly=i(rc);Mz=a(ly,"Bert Model with a "),wg=s(ly,"CODE",{});var L5=i(wg);Ez=a(L5,"language modeling"),L5.forEach(t),zz=a(ly," head on top."),ly.forEach(t),Pz=p(Et),ac=s(Et,"P",{});var dy=i(ac);qz=a(dy,"This model inherits from "),vh=s(dy,"A",{href:!0});var D5=i(vh);jz=a(D5,"FlaxPreTrainedModel"),D5.forEach(t),Cz=a(dy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dy.forEach(t),Nz=p(Et),ic=s(Et,"P",{});var cy=i(ic);Oz=a(cy,"This model is also a Flax Linen "),lc=s(cy,"A",{href:!0,rel:!0});var S5=i(lc);Iz=a(S5,"flax.linen.Module"),S5.forEach(t),Az=a(cy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cy.forEach(t),Lz=p(Et),$g=s(Et,"P",{});var U5=i($g);Dz=a(U5,"Finally, this model supports inherent JAX features such as:"),U5.forEach(t),Sz=p(Et),_o=s(Et,"UL",{});var za=i(_o);xg=s(za,"LI",{});var W5=i(xg);dc=s(W5,"A",{href:!0,rel:!0});var H5=i(dc);Uz=a(H5,"Just-In-Time (JIT) compilation"),H5.forEach(t),W5.forEach(t),Wz=p(za),Fg=s(za,"LI",{});var R5=i(Fg);cc=s(R5,"A",{href:!0,rel:!0});var Q5=i(cc);Hz=a(Q5,"Automatic Differentiation"),Q5.forEach(t),R5.forEach(t),Rz=p(za),Bg=s(za,"LI",{});var V5=i(Bg);pc=s(V5,"A",{href:!0,rel:!0});var K5=i(pc);Qz=a(K5,"Vectorization"),K5.forEach(t),V5.forEach(t),Vz=p(za),Mg=s(za,"LI",{});var J5=i(Mg);hc=s(J5,"A",{href:!0,rel:!0});var G5=i(hc);Kz=a(G5,"Parallelization"),G5.forEach(t),J5.forEach(t),za.forEach(t),Jz=p(Et),Xt=s(Et,"DIV",{class:!0});var Pa=i(Xt);v(mc.$$.fragment,Pa),Gz=p(Pa),Gn=s(Pa,"P",{});var am=i(Gn);Xz=a(am,"The "),Eg=s(am,"CODE",{});var X5=i(Eg);Yz=a(X5,"FlaxBertPreTrainedModel"),X5.forEach(t),Zz=a(am," forward method, overrides the "),zg=s(am,"CODE",{});var Y5=i(zg);e4=a(Y5,"__call__"),Y5.forEach(t),t4=a(am," special method."),am.forEach(t),o4=p(Pa),v(Xr.$$.fragment,Pa),n4=p(Pa),v(Yr.$$.fragment,Pa),Pa.forEach(t),Et.forEach(t),Tk=p(o),Xn=s(o,"H2",{class:!0});var py=i(Xn);Zr=s(py,"A",{id:!0,class:!0,href:!0});var Z5=i(Zr);Pg=s(Z5,"SPAN",{});var eN=i(Pg);v(fc.$$.fragment,eN),eN.forEach(t),Z5.forEach(t),s4=p(py),qg=s(py,"SPAN",{});var tN=i(qg);r4=a(tN,"FlaxBertForNextSentencePrediction"),tN.forEach(t),py.forEach(t),vk=p(o),Ue=s(o,"DIV",{class:!0});var zt=i(Ue);v(uc.$$.fragment,zt),a4=p(zt),gc=s(zt,"P",{});var hy=i(gc);i4=a(hy,"Bert Model with a "),jg=s(hy,"CODE",{});var oN=i(jg);l4=a(oN,"next sentence prediction (classification)"),oN.forEach(t),d4=a(hy," head on top."),hy.forEach(t),c4=p(zt),_c=s(zt,"P",{});var my=i(_c);p4=a(my,"This model inherits from "),wh=s(my,"A",{href:!0});var nN=i(wh);h4=a(nN,"FlaxPreTrainedModel"),nN.forEach(t),m4=a(my,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),my.forEach(t),f4=p(zt),bc=s(zt,"P",{});var fy=i(bc);u4=a(fy,"This model is also a Flax Linen "),kc=s(fy,"A",{href:!0,rel:!0});var sN=i(kc);g4=a(sN,"flax.linen.Module"),sN.forEach(t),_4=a(fy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fy.forEach(t),b4=p(zt),Cg=s(zt,"P",{});var rN=i(Cg);k4=a(rN,"Finally, this model supports inherent JAX features such as:"),rN.forEach(t),y4=p(zt),bo=s(zt,"UL",{});var qa=i(bo);Ng=s(qa,"LI",{});var aN=i(Ng);yc=s(aN,"A",{href:!0,rel:!0});var iN=i(yc);T4=a(iN,"Just-In-Time (JIT) compilation"),iN.forEach(t),aN.forEach(t),v4=p(qa),Og=s(qa,"LI",{});var lN=i(Og);Tc=s(lN,"A",{href:!0,rel:!0});var dN=i(Tc);w4=a(dN,"Automatic Differentiation"),dN.forEach(t),lN.forEach(t),$4=p(qa),Ig=s(qa,"LI",{});var cN=i(Ig);vc=s(cN,"A",{href:!0,rel:!0});var pN=i(vc);x4=a(pN,"Vectorization"),pN.forEach(t),cN.forEach(t),F4=p(qa),Ag=s(qa,"LI",{});var hN=i(Ag);wc=s(hN,"A",{href:!0,rel:!0});var mN=i(wc);B4=a(mN,"Parallelization"),mN.forEach(t),hN.forEach(t),qa.forEach(t),M4=p(zt),Yt=s(zt,"DIV",{class:!0});var ja=i(Yt);v($c.$$.fragment,ja),E4=p(ja),Yn=s(ja,"P",{});var im=i(Yn);z4=a(im,"The "),Lg=s(im,"CODE",{});var fN=i(Lg);P4=a(fN,"FlaxBertPreTrainedModel"),fN.forEach(t),q4=a(im," forward method, overrides the "),Dg=s(im,"CODE",{});var uN=i(Dg);j4=a(uN,"__call__"),uN.forEach(t),C4=a(im," special method."),im.forEach(t),N4=p(ja),v(ea.$$.fragment,ja),O4=p(ja),v(ta.$$.fragment,ja),ja.forEach(t),zt.forEach(t),wk=p(o),Zn=s(o,"H2",{class:!0});var uy=i(Zn);oa=s(uy,"A",{id:!0,class:!0,href:!0});var gN=i(oa);Sg=s(gN,"SPAN",{});var _N=i(Sg);v(xc.$$.fragment,_N),_N.forEach(t),gN.forEach(t),I4=p(uy),Ug=s(uy,"SPAN",{});var bN=i(Ug);A4=a(bN,"FlaxBertForSequenceClassification"),bN.forEach(t),uy.forEach(t),$k=p(o),We=s(o,"DIV",{class:!0});var Pt=i(We);v(Fc.$$.fragment,Pt),L4=p(Pt),Wg=s(Pt,"P",{});var kN=i(Wg);D4=a(kN,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),kN.forEach(t),S4=p(Pt),Bc=s(Pt,"P",{});var gy=i(Bc);U4=a(gy,"This model inherits from "),$h=s(gy,"A",{href:!0});var yN=i($h);W4=a(yN,"FlaxPreTrainedModel"),yN.forEach(t),H4=a(gy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gy.forEach(t),R4=p(Pt),Mc=s(Pt,"P",{});var _y=i(Mc);Q4=a(_y,"This model is also a Flax Linen "),Ec=s(_y,"A",{href:!0,rel:!0});var TN=i(Ec);V4=a(TN,"flax.linen.Module"),TN.forEach(t),K4=a(_y,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_y.forEach(t),J4=p(Pt),Hg=s(Pt,"P",{});var vN=i(Hg);G4=a(vN,"Finally, this model supports inherent JAX features such as:"),vN.forEach(t),X4=p(Pt),ko=s(Pt,"UL",{});var Ca=i(ko);Rg=s(Ca,"LI",{});var wN=i(Rg);zc=s(wN,"A",{href:!0,rel:!0});var $N=i(zc);Y4=a($N,"Just-In-Time (JIT) compilation"),$N.forEach(t),wN.forEach(t),Z4=p(Ca),Qg=s(Ca,"LI",{});var xN=i(Qg);Pc=s(xN,"A",{href:!0,rel:!0});var FN=i(Pc);eP=a(FN,"Automatic Differentiation"),FN.forEach(t),xN.forEach(t),tP=p(Ca),Vg=s(Ca,"LI",{});var BN=i(Vg);qc=s(BN,"A",{href:!0,rel:!0});var MN=i(qc);oP=a(MN,"Vectorization"),MN.forEach(t),BN.forEach(t),nP=p(Ca),Kg=s(Ca,"LI",{});var EN=i(Kg);jc=s(EN,"A",{href:!0,rel:!0});var zN=i(jc);sP=a(zN,"Parallelization"),zN.forEach(t),EN.forEach(t),Ca.forEach(t),rP=p(Pt),Zt=s(Pt,"DIV",{class:!0});var Na=i(Zt);v(Cc.$$.fragment,Na),aP=p(Na),es=s(Na,"P",{});var lm=i(es);iP=a(lm,"The "),Jg=s(lm,"CODE",{});var PN=i(Jg);lP=a(PN,"FlaxBertPreTrainedModel"),PN.forEach(t),dP=a(lm," forward method, overrides the "),Gg=s(lm,"CODE",{});var qN=i(Gg);cP=a(qN,"__call__"),qN.forEach(t),pP=a(lm," special method."),lm.forEach(t),hP=p(Na),v(na.$$.fragment,Na),mP=p(Na),v(sa.$$.fragment,Na),Na.forEach(t),Pt.forEach(t),xk=p(o),ts=s(o,"H2",{class:!0});var by=i(ts);ra=s(by,"A",{id:!0,class:!0,href:!0});var jN=i(ra);Xg=s(jN,"SPAN",{});var CN=i(Xg);v(Nc.$$.fragment,CN),CN.forEach(t),jN.forEach(t),fP=p(by),Yg=s(by,"SPAN",{});var NN=i(Yg);uP=a(NN,"FlaxBertForMultipleChoice"),NN.forEach(t),by.forEach(t),Fk=p(o),He=s(o,"DIV",{class:!0});var qt=i(He);v(Oc.$$.fragment,qt),gP=p(qt),Zg=s(qt,"P",{});var ON=i(Zg);_P=a(ON,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ON.forEach(t),bP=p(qt),Ic=s(qt,"P",{});var ky=i(Ic);kP=a(ky,"This model inherits from "),xh=s(ky,"A",{href:!0});var IN=i(xh);yP=a(IN,"FlaxPreTrainedModel"),IN.forEach(t),TP=a(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ky.forEach(t),vP=p(qt),Ac=s(qt,"P",{});var yy=i(Ac);wP=a(yy,"This model is also a Flax Linen "),Lc=s(yy,"A",{href:!0,rel:!0});var AN=i(Lc);$P=a(AN,"flax.linen.Module"),AN.forEach(t),xP=a(yy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yy.forEach(t),FP=p(qt),e_=s(qt,"P",{});var LN=i(e_);BP=a(LN,"Finally, this model supports inherent JAX features such as:"),LN.forEach(t),MP=p(qt),yo=s(qt,"UL",{});var Oa=i(yo);t_=s(Oa,"LI",{});var DN=i(t_);Dc=s(DN,"A",{href:!0,rel:!0});var SN=i(Dc);EP=a(SN,"Just-In-Time (JIT) compilation"),SN.forEach(t),DN.forEach(t),zP=p(Oa),o_=s(Oa,"LI",{});var UN=i(o_);Sc=s(UN,"A",{href:!0,rel:!0});var WN=i(Sc);PP=a(WN,"Automatic Differentiation"),WN.forEach(t),UN.forEach(t),qP=p(Oa),n_=s(Oa,"LI",{});var HN=i(n_);Uc=s(HN,"A",{href:!0,rel:!0});var RN=i(Uc);jP=a(RN,"Vectorization"),RN.forEach(t),HN.forEach(t),CP=p(Oa),s_=s(Oa,"LI",{});var QN=i(s_);Wc=s(QN,"A",{href:!0,rel:!0});var VN=i(Wc);NP=a(VN,"Parallelization"),VN.forEach(t),QN.forEach(t),Oa.forEach(t),OP=p(qt),eo=s(qt,"DIV",{class:!0});var Ia=i(eo);v(Hc.$$.fragment,Ia),IP=p(Ia),os=s(Ia,"P",{});var dm=i(os);AP=a(dm,"The "),r_=s(dm,"CODE",{});var KN=i(r_);LP=a(KN,"FlaxBertPreTrainedModel"),KN.forEach(t),DP=a(dm," forward method, overrides the "),a_=s(dm,"CODE",{});var JN=i(a_);SP=a(JN,"__call__"),JN.forEach(t),UP=a(dm," special method."),dm.forEach(t),WP=p(Ia),v(aa.$$.fragment,Ia),HP=p(Ia),v(ia.$$.fragment,Ia),Ia.forEach(t),qt.forEach(t),Bk=p(o),ns=s(o,"H2",{class:!0});var Ty=i(ns);la=s(Ty,"A",{id:!0,class:!0,href:!0});var GN=i(la);i_=s(GN,"SPAN",{});var XN=i(i_);v(Rc.$$.fragment,XN),XN.forEach(t),GN.forEach(t),RP=p(Ty),l_=s(Ty,"SPAN",{});var YN=i(l_);QP=a(YN,"FlaxBertForTokenClassification"),YN.forEach(t),Ty.forEach(t),Mk=p(o),Re=s(o,"DIV",{class:!0});var jt=i(Re);v(Qc.$$.fragment,jt),VP=p(jt),d_=s(jt,"P",{});var ZN=i(d_);KP=a(ZN,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ZN.forEach(t),JP=p(jt),Vc=s(jt,"P",{});var vy=i(Vc);GP=a(vy,"This model inherits from "),Fh=s(vy,"A",{href:!0});var e8=i(Fh);XP=a(e8,"FlaxPreTrainedModel"),e8.forEach(t),YP=a(vy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vy.forEach(t),ZP=p(jt),Kc=s(jt,"P",{});var wy=i(Kc);eq=a(wy,"This model is also a Flax Linen "),Jc=s(wy,"A",{href:!0,rel:!0});var t8=i(Jc);tq=a(t8,"flax.linen.Module"),t8.forEach(t),oq=a(wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wy.forEach(t),nq=p(jt),c_=s(jt,"P",{});var o8=i(c_);sq=a(o8,"Finally, this model supports inherent JAX features such as:"),o8.forEach(t),rq=p(jt),To=s(jt,"UL",{});var Aa=i(To);p_=s(Aa,"LI",{});var n8=i(p_);Gc=s(n8,"A",{href:!0,rel:!0});var s8=i(Gc);aq=a(s8,"Just-In-Time (JIT) compilation"),s8.forEach(t),n8.forEach(t),iq=p(Aa),h_=s(Aa,"LI",{});var r8=i(h_);Xc=s(r8,"A",{href:!0,rel:!0});var a8=i(Xc);lq=a(a8,"Automatic Differentiation"),a8.forEach(t),r8.forEach(t),dq=p(Aa),m_=s(Aa,"LI",{});var i8=i(m_);Yc=s(i8,"A",{href:!0,rel:!0});var l8=i(Yc);cq=a(l8,"Vectorization"),l8.forEach(t),i8.forEach(t),pq=p(Aa),f_=s(Aa,"LI",{});var d8=i(f_);Zc=s(d8,"A",{href:!0,rel:!0});var c8=i(Zc);hq=a(c8,"Parallelization"),c8.forEach(t),d8.forEach(t),Aa.forEach(t),mq=p(jt),to=s(jt,"DIV",{class:!0});var La=i(to);v(ep.$$.fragment,La),fq=p(La),ss=s(La,"P",{});var cm=i(ss);uq=a(cm,"The "),u_=s(cm,"CODE",{});var p8=i(u_);gq=a(p8,"FlaxBertPreTrainedModel"),p8.forEach(t),_q=a(cm," forward method, overrides the "),g_=s(cm,"CODE",{});var h8=i(g_);bq=a(h8,"__call__"),h8.forEach(t),kq=a(cm," special method."),cm.forEach(t),yq=p(La),v(da.$$.fragment,La),Tq=p(La),v(ca.$$.fragment,La),La.forEach(t),jt.forEach(t),Ek=p(o),rs=s(o,"H2",{class:!0});var $y=i(rs);pa=s($y,"A",{id:!0,class:!0,href:!0});var m8=i(pa);__=s(m8,"SPAN",{});var f8=i(__);v(tp.$$.fragment,f8),f8.forEach(t),m8.forEach(t),vq=p($y),b_=s($y,"SPAN",{});var u8=i(b_);wq=a(u8,"FlaxBertForQuestionAnswering"),u8.forEach(t),$y.forEach(t),zk=p(o),Qe=s(o,"DIV",{class:!0});var Ct=i(Qe);v(op.$$.fragment,Ct),$q=p(Ct),as=s(Ct,"P",{});var pm=i(as);xq=a(pm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),k_=s(pm,"CODE",{});var g8=i(k_);Fq=a(g8,"span start logits"),g8.forEach(t),Bq=a(pm," and "),y_=s(pm,"CODE",{});var _8=i(y_);Mq=a(_8,"span end logits"),_8.forEach(t),Eq=a(pm,")."),pm.forEach(t),zq=p(Ct),np=s(Ct,"P",{});var xy=i(np);Pq=a(xy,"This model inherits from "),Bh=s(xy,"A",{href:!0});var b8=i(Bh);qq=a(b8,"FlaxPreTrainedModel"),b8.forEach(t),jq=a(xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xy.forEach(t),Cq=p(Ct),sp=s(Ct,"P",{});var Fy=i(sp);Nq=a(Fy,"This model is also a Flax Linen "),rp=s(Fy,"A",{href:!0,rel:!0});var k8=i(rp);Oq=a(k8,"flax.linen.Module"),k8.forEach(t),Iq=a(Fy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fy.forEach(t),Aq=p(Ct),T_=s(Ct,"P",{});var y8=i(T_);Lq=a(y8,"Finally, this model supports inherent JAX features such as:"),y8.forEach(t),Dq=p(Ct),vo=s(Ct,"UL",{});var Da=i(vo);v_=s(Da,"LI",{});var T8=i(v_);ap=s(T8,"A",{href:!0,rel:!0});var v8=i(ap);Sq=a(v8,"Just-In-Time (JIT) compilation"),v8.forEach(t),T8.forEach(t),Uq=p(Da),w_=s(Da,"LI",{});var w8=i(w_);ip=s(w8,"A",{href:!0,rel:!0});var $8=i(ip);Wq=a($8,"Automatic Differentiation"),$8.forEach(t),w8.forEach(t),Hq=p(Da),$_=s(Da,"LI",{});var x8=i($_);lp=s(x8,"A",{href:!0,rel:!0});var F8=i(lp);Rq=a(F8,"Vectorization"),F8.forEach(t),x8.forEach(t),Qq=p(Da),x_=s(Da,"LI",{});var B8=i(x_);dp=s(B8,"A",{href:!0,rel:!0});var M8=i(dp);Vq=a(M8,"Parallelization"),M8.forEach(t),B8.forEach(t),Da.forEach(t),Kq=p(Ct),oo=s(Ct,"DIV",{class:!0});var Sa=i(oo);v(cp.$$.fragment,Sa),Jq=p(Sa),is=s(Sa,"P",{});var hm=i(is);Gq=a(hm,"The "),F_=s(hm,"CODE",{});var E8=i(F_);Xq=a(E8,"FlaxBertPreTrainedModel"),E8.forEach(t),Yq=a(hm," forward method, overrides the "),B_=s(hm,"CODE",{});var z8=i(B_);Zq=a(z8,"__call__"),z8.forEach(t),ej=a(hm," special method."),hm.forEach(t),tj=p(Sa),v(ha.$$.fragment,Sa),oj=p(Sa),v(ma.$$.fragment,Sa),Sa.forEach(t),Ct.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(nI)),u(m,"id","bert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(xe,"class","relative group"),u(xp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertModel"),u(Fp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertModel"),u(Wa,"href","https://huggingface.co/bert-base-uncased"),u(Wa,"rel","nofollow"),u(Bp,"href","/docs/transformers/pr_17701/en/main_classes/configuration#transformers.PretrainedConfig"),u(Mp,"href","/docs/transformers/pr_17701/en/main_classes/configuration#transformers.PretrainedConfig"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.BertTokenizer"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.BertTokenizer"),u(Qo,"class","relative group"),u(Ep,"href","/docs/transformers/pr_17701/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertTokenizerFast"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertTokenizerFast"),u(Ko,"class","relative group"),u(jp,"href","/docs/transformers/pr_17701/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFBertTokenizer"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFBertTokenizer"),u(Go,"class","relative group"),u(ys,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vs,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vs,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Yo,"class","relative group"),u(Op,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForPreTraining"),u(Zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ip,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForPreTraining"),u(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ap,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForPreTraining"),u(ws,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.BertModel"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.BertModel"),u(tn,"class","relative group"),u(Lp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u($i,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($i,"rel","nofollow"),u(Fi,"href","https://arxiv.org/abs/1706.03762"),u(Fi,"rel","nofollow"),u(Dp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertModel"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.BertForPreTraining"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.BertForPreTraining"),u(nn,"class","relative group"),u(Sp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qi,"rel","nofollow"),u(Up,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForPreTraining"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.BertLMHeadModel"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.BertLMHeadModel"),u(an,"class","relative group"),u(Wp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(Li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Li,"rel","nofollow"),u(Hp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertLMHeadModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForMaskedLM"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForMaskedLM"),u(dn,"class","relative group"),u(Rp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qi,"rel","nofollow"),u(Qp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForMaskedLM"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertForNextSentencePrediction"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertForNextSentencePrediction"),u(pn,"class","relative group"),u(Vp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Zi,"rel","nofollow"),u(Kp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.BertForSequenceClassification"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.BertForSequenceClassification"),u(mn,"class","relative group"),u(Jp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(rl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(rl,"rel","nofollow"),u(Gp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qs,"id","transformers.BertForMultipleChoice"),u(Qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qs,"href","#transformers.BertForMultipleChoice"),u(un,"class","relative group"),u(Xp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(pl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pl,"rel","nofollow"),u(Yp,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Js,"id","transformers.BertForTokenClassification"),u(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Js,"href","#transformers.BertForTokenClassification"),u(_n,"class","relative group"),u(Zp,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(_l,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_l,"rel","nofollow"),u(eh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForTokenClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.BertForQuestionAnswering"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.BertForQuestionAnswering"),u(kn,"class","relative group"),u(th,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.PreTrainedModel"),u(wl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wl,"rel","nofollow"),u(oh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.TFBertModel"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.TFBertModel"),u(vn,"class","relative group"),u(nh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(El,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(El,"rel","nofollow"),u(sh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertModel"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.TFBertForPreTraining"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.TFBertForPreTraining"),u($n,"class","relative group"),u(rh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(Nl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Nl,"rel","nofollow"),u(ah,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertLMHeadModel"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertLMHeadModel"),u(Bn,"class","relative group"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mr,"id","transformers.TFBertForMaskedLM"),u(mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mr,"href","#transformers.TFBertForMaskedLM"),u(En,"class","relative group"),u(ih,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(Kl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Kl,"rel","nofollow"),u(lh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFBertForNextSentencePrediction"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFBertForNextSentencePrediction"),u(Pn,"class","relative group"),u(dh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(td,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(td,"rel","nofollow"),u(ch,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vr,"id","transformers.TFBertForSequenceClassification"),u(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vr,"href","#transformers.TFBertForSequenceClassification"),u(jn,"class","relative group"),u(ph,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(id,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(id,"rel","nofollow"),u(hh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Br,"id","transformers.TFBertForMultipleChoice"),u(Br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Br,"href","#transformers.TFBertForMultipleChoice"),u(Nn,"class","relative group"),u(mh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(md,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(md,"rel","nofollow"),u(fh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.TFBertForTokenClassification"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.TFBertForTokenClassification"),u(In,"class","relative group"),u(uh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(kd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(kd,"rel","nofollow"),u(gh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Or,"id","transformers.TFBertForQuestionAnswering"),u(Or,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Or,"href","#transformers.TFBertForQuestionAnswering"),u(Ln,"class","relative group"),u(_h,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.TFPreTrainedModel"),u(xd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xd,"rel","nofollow"),u(bh,"href","/docs/transformers/pr_17701/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sr,"id","transformers.FlaxBertModel"),u(Sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sr,"href","#transformers.FlaxBertModel"),u(Un,"class","relative group"),u(kh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Pd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(qd,"rel","nofollow"),u(jd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(jd,"rel","nofollow"),u(Cd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Cd,"rel","nofollow"),u(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Nd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hr,"id","transformers.FlaxBertForPreTraining"),u(Hr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hr,"href","#transformers.FlaxBertForPreTraining"),u(Hn,"class","relative group"),u(yh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Sd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ud,"rel","nofollow"),u(Wd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Wd,"rel","nofollow"),u(Hd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hd,"rel","nofollow"),u(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Rd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.FlaxBertForCausalLM"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.FlaxBertForCausalLM"),u(Vn,"class","relative group"),u(Th,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Xd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Zd,"rel","nofollow"),u(ec,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ec,"rel","nofollow"),u(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(tc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gr,"id","transformers.FlaxBertForMaskedLM"),u(Gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gr,"href","#transformers.FlaxBertForMaskedLM"),u(Jn,"class","relative group"),u(vh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(lc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dc,"rel","nofollow"),u(cc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cc,"rel","nofollow"),u(pc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pc,"rel","nofollow"),u(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zr,"id","transformers.FlaxBertForNextSentencePrediction"),u(Zr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zr,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Xn,"class","relative group"),u(wh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(kc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(kc,"rel","nofollow"),u(yc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(yc,"rel","nofollow"),u(Tc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Tc,"rel","nofollow"),u(vc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(vc,"rel","nofollow"),u(wc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(wc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oa,"id","transformers.FlaxBertForSequenceClassification"),u(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oa,"href","#transformers.FlaxBertForSequenceClassification"),u(Zn,"class","relative group"),u($h,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ec,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(zc,"rel","nofollow"),u(Pc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Pc,"rel","nofollow"),u(qc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(qc,"rel","nofollow"),u(jc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(jc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ra,"id","transformers.FlaxBertForMultipleChoice"),u(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ra,"href","#transformers.FlaxBertForMultipleChoice"),u(ts,"class","relative group"),u(xh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Lc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Dc,"rel","nofollow"),u(Sc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Sc,"rel","nofollow"),u(Uc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Uc,"rel","nofollow"),u(Wc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"id","transformers.FlaxBertForTokenClassification"),u(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(la,"href","#transformers.FlaxBertForTokenClassification"),u(ns,"class","relative group"),u(Fh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gc,"rel","nofollow"),u(Xc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xc,"rel","nofollow"),u(Yc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yc,"rel","nofollow"),u(Zc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zc,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"id","transformers.FlaxBertForQuestionAnswering"),u(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pa,"href","#transformers.FlaxBertForQuestionAnswering"),u(rs,"class","relative group"),u(Bh,"href","/docs/transformers/pr_17701/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rp,"rel","nofollow"),u(ap,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ap,"rel","nofollow"),u(ip,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ip,"rel","nofollow"),u(lp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lp,"rel","nofollow"),u(dp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dp,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,b,k),_(o,h,k),e(h,m),e(m,g),w(l,g,null),e(h,f),e(h,M),e(M,be),_(o,X,k),_(o,z,k),e(z,ee),e(ee,L),w(re,L,null),e(z,ke),e(z,D),e(D,ye),_(o,me,k),_(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),_(o,j,k),_(o,ie,k),e(ie,H),_(o,fe,k),_(o,le,k),e(le,S),e(S,Te),_(o,ue,k),_(o,q,k),e(q,ce),e(ce,R),_(o,ge,k),_(o,de,k),e(de,Q),_(o,_e,k),_(o,te,k),e(te,N),e(N,ve),e(te,V),e(te,pe),e(pe,y),_(o,E,k),_(o,K,k),e(K,ze),e(K,Be),e(Be,I),e(K,Pe),e(K,Me),e(Me,qe),e(K,A),_(o,W,k),_(o,xe,k),e(xe,Fe),e(Fe,U),w(Ee,U,null),e(xe,je),e(xe,he),e(he,Ce),_(o,yb,k),_(o,Nt,k),w(Ua,Nt,null),e(Nt,By),e(Nt,ho),e(ho,My),e(ho,xp),e(xp,Ey),e(ho,zy),e(ho,Fp),e(Fp,Py),e(ho,qy),e(ho,Wa),e(Wa,jy),e(ho,Cy),e(Nt,Ny),e(Nt,Ro),e(Ro,Oy),e(Ro,Bp),e(Bp,Iy),e(Ro,Ay),e(Ro,Mp),e(Mp,Ly),e(Ro,Dy),e(Nt,Sy),w(ms,Nt,null),_(o,Tb,k),_(o,Qo,k),e(Qo,fs),e(fs,mm),w(Ha,mm,null),e(Qo,Uy),e(Qo,fm),e(fm,Wy),_(o,vb,k),_(o,Ne,k),w(Ra,Ne,null),e(Ne,Hy),e(Ne,um),e(um,Ry),e(Ne,Qy),e(Ne,Qa),e(Qa,Vy),e(Qa,Ep),e(Ep,Ky),e(Qa,Jy),e(Ne,Gy),e(Ne,Fo),w(Va,Fo,null),e(Fo,Xy),e(Fo,gm),e(gm,Yy),e(Fo,Zy),e(Fo,Ka),e(Ka,zp),e(zp,eT),e(zp,_m),e(_m,tT),e(Ka,oT),e(Ka,Pp),e(Pp,nT),e(Pp,bm),e(bm,sT),e(Ne,rT),e(Ne,us),w(Ja,us,null),e(us,aT),e(us,Ga),e(Ga,iT),e(Ga,km),e(km,lT),e(Ga,dT),e(Ne,cT),e(Ne,It),w(Xa,It,null),e(It,pT),e(It,ym),e(ym,hT),e(It,mT),w(gs,It,null),e(It,fT),e(It,Vo),e(Vo,uT),e(Vo,Tm),e(Tm,gT),e(Vo,_T),e(Vo,vm),e(vm,bT),e(Vo,kT),e(Ne,yT),e(Ne,qp),w(Ya,qp,null),_(o,wb,k),_(o,Ko,k),e(Ko,_s),e(_s,wm),w(Za,wm,null),e(Ko,TT),e(Ko,$m),e($m,vT),_(o,$b,k),_(o,rt,k),w(ei,rt,null),e(rt,wT),e(rt,ti),e(ti,$T),e(ti,xm),e(xm,xT),e(ti,FT),e(rt,BT),e(rt,oi),e(oi,MT),e(oi,jp),e(jp,ET),e(oi,zT),e(rt,PT),e(rt,Bo),w(ni,Bo,null),e(Bo,qT),e(Bo,Fm),e(Fm,jT),e(Bo,CT),e(Bo,si),e(si,Cp),e(Cp,NT),e(Cp,Bm),e(Bm,OT),e(si,IT),e(si,Np),e(Np,AT),e(Np,Mm),e(Mm,LT),e(rt,DT),e(rt,At),w(ri,At,null),e(At,ST),e(At,Em),e(Em,UT),e(At,WT),w(bs,At,null),e(At,HT),e(At,Jo),e(Jo,RT),e(Jo,zm),e(zm,QT),e(Jo,VT),e(Jo,Pm),e(Pm,KT),e(Jo,JT),_(o,xb,k),_(o,Go,k),e(Go,ks),e(ks,qm),w(ai,qm,null),e(Go,GT),e(Go,jm),e(jm,XT),_(o,Fb,k),_(o,at,k),w(ii,at,null),e(at,YT),e(at,Xo),e(Xo,ZT),e(Xo,Cm),e(Cm,ev),e(Xo,tv),e(Xo,Nm),e(Nm,ov),e(Xo,nv),e(at,sv),e(at,Om),e(Om,rv),e(at,av),e(at,ys),w(li,ys,null),e(ys,iv),e(ys,di),e(di,lv),e(di,Im),e(Im,dv),e(di,cv),e(at,pv),e(at,Ts),w(ci,Ts,null),e(Ts,hv),e(Ts,pi),e(pi,mv),e(pi,Am),e(Am,fv),e(pi,uv),_(o,Bb,k),_(o,Yo,k),e(Yo,vs),e(vs,Lm),w(hi,Lm,null),e(Yo,gv),e(Yo,Dm),e(Dm,_v),_(o,Mb,k),_(o,Zo,k),w(mi,Zo,null),e(Zo,bv),e(Zo,fi),e(fi,kv),e(fi,Op),e(Op,yv),e(fi,Tv),_(o,Eb,k),_(o,en,k),w(ui,en,null),e(en,vv),e(en,gi),e(gi,wv),e(gi,Ip),e(Ip,$v),e(gi,xv),_(o,zb,k),_(o,mo,k),w(_i,mo,null),e(mo,Fv),e(mo,bi),e(bi,Bv),e(bi,Ap),e(Ap,Mv),e(bi,Ev),e(mo,zv),e(mo,ws),w(ki,ws,null),e(ws,Pv),e(ws,Sm),e(Sm,qv),_(o,Pb,k),_(o,tn,k),e(tn,$s),e($s,Um),w(yi,Um,null),e(tn,jv),e(tn,Wm),e(Wm,Cv),_(o,qb,k),_(o,Oe,k),w(Ti,Oe,null),e(Oe,Nv),e(Oe,Hm),e(Hm,Ov),e(Oe,Iv),e(Oe,vi),e(vi,Av),e(vi,Lp),e(Lp,Lv),e(vi,Dv),e(Oe,Sv),e(Oe,wi),e(wi,Uv),e(wi,$i),e($i,Wv),e(wi,Hv),e(Oe,Rv),e(Oe,xi),e(xi,Qv),e(xi,Fi),e(Fi,Vv),e(xi,Kv),e(Oe,Jv),e(Oe,Ke),e(Ke,Gv),e(Ke,Rm),e(Rm,Xv),e(Ke,Yv),e(Ke,Qm),e(Qm,Zv),e(Ke,ew),e(Ke,Vm),e(Vm,tw),e(Ke,ow),e(Ke,Km),e(Km,nw),e(Ke,sw),e(Ke,Jm),e(Jm,rw),e(Ke,aw),e(Ke,Gm),e(Gm,iw),e(Ke,lw),e(Oe,dw),e(Oe,Lt),w(Bi,Lt,null),e(Lt,cw),e(Lt,on),e(on,pw),e(on,Dp),e(Dp,hw),e(on,mw),e(on,Xm),e(Xm,fw),e(on,uw),e(Lt,gw),w(xs,Lt,null),e(Lt,_w),w(Fs,Lt,null),_(o,jb,k),_(o,nn,k),e(nn,Bs),e(Bs,Ym),w(Mi,Ym,null),e(nn,bw),e(nn,Zm),e(Zm,kw),_(o,Cb,k),_(o,it,k),w(Ei,it,null),e(it,yw),e(it,sn),e(sn,Tw),e(sn,ef),e(ef,vw),e(sn,ww),e(sn,tf),e(tf,$w),e(sn,xw),e(it,Fw),e(it,zi),e(zi,Bw),e(zi,Sp),e(Sp,Mw),e(zi,Ew),e(it,zw),e(it,Pi),e(Pi,Pw),e(Pi,qi),e(qi,qw),e(Pi,jw),e(it,Cw),e(it,Dt),w(ji,Dt,null),e(Dt,Nw),e(Dt,rn),e(rn,Ow),e(rn,Up),e(Up,Iw),e(rn,Aw),e(rn,of),e(of,Lw),e(rn,Dw),e(Dt,Sw),w(Ms,Dt,null),e(Dt,Uw),w(Es,Dt,null),_(o,Nb,k),_(o,an,k),e(an,zs),e(zs,nf),w(Ci,nf,null),e(an,Ww),e(an,sf),e(sf,Hw),_(o,Ob,k),_(o,lt,k),w(Ni,lt,null),e(lt,Rw),e(lt,Oi),e(Oi,Qw),e(Oi,rf),e(rf,Vw),e(Oi,Kw),e(lt,Jw),e(lt,Ii),e(Ii,Gw),e(Ii,Wp),e(Wp,Xw),e(Ii,Yw),e(lt,Zw),e(lt,Ai),e(Ai,e$),e(Ai,Li),e(Li,t$),e(Ai,o$),e(lt,n$),e(lt,St),w(Di,St,null),e(St,s$),e(St,ln),e(ln,r$),e(ln,Hp),e(Hp,a$),e(ln,i$),e(ln,af),e(af,l$),e(ln,d$),e(St,c$),w(Ps,St,null),e(St,p$),w(qs,St,null),_(o,Ib,k),_(o,dn,k),e(dn,js),e(js,lf),w(Si,lf,null),e(dn,h$),e(dn,df),e(df,m$),_(o,Ab,k),_(o,dt,k),w(Ui,dt,null),e(dt,f$),e(dt,Wi),e(Wi,u$),e(Wi,cf),e(cf,g$),e(Wi,_$),e(dt,b$),e(dt,Hi),e(Hi,k$),e(Hi,Rp),e(Rp,y$),e(Hi,T$),e(dt,v$),e(dt,Ri),e(Ri,w$),e(Ri,Qi),e(Qi,$$),e(Ri,x$),e(dt,F$),e(dt,ut),w(Vi,ut,null),e(ut,B$),e(ut,cn),e(cn,M$),e(cn,Qp),e(Qp,E$),e(cn,z$),e(cn,pf),e(pf,P$),e(cn,q$),e(ut,j$),w(Cs,ut,null),e(ut,C$),w(Ns,ut,null),e(ut,N$),w(Os,ut,null),_(o,Lb,k),_(o,pn,k),e(pn,Is),e(Is,hf),w(Ki,hf,null),e(pn,O$),e(pn,mf),e(mf,I$),_(o,Db,k),_(o,ct,k),w(Ji,ct,null),e(ct,A$),e(ct,Gi),e(Gi,L$),e(Gi,ff),e(ff,D$),e(Gi,S$),e(ct,U$),e(ct,Xi),e(Xi,W$),e(Xi,Vp),e(Vp,H$),e(Xi,R$),e(ct,Q$),e(ct,Yi),e(Yi,V$),e(Yi,Zi),e(Zi,K$),e(Yi,J$),e(ct,G$),e(ct,Ut),w(el,Ut,null),e(Ut,X$),e(Ut,hn),e(hn,Y$),e(hn,Kp),e(Kp,Z$),e(hn,e0),e(hn,uf),e(uf,t0),e(hn,o0),e(Ut,n0),w(As,Ut,null),e(Ut,s0),w(Ls,Ut,null),_(o,Sb,k),_(o,mn,k),e(mn,Ds),e(Ds,gf),w(tl,gf,null),e(mn,r0),e(mn,_f),e(_f,a0),_(o,Ub,k),_(o,pt,k),w(ol,pt,null),e(pt,i0),e(pt,bf),e(bf,l0),e(pt,d0),e(pt,nl),e(nl,c0),e(nl,Jp),e(Jp,p0),e(nl,h0),e(pt,m0),e(pt,sl),e(sl,f0),e(sl,rl),e(rl,u0),e(sl,g0),e(pt,_0),e(pt,Ve),w(al,Ve,null),e(Ve,b0),e(Ve,fn),e(fn,k0),e(fn,Gp),e(Gp,y0),e(fn,T0),e(fn,kf),e(kf,v0),e(fn,w0),e(Ve,$0),w(Ss,Ve,null),e(Ve,x0),w(Us,Ve,null),e(Ve,F0),w(Ws,Ve,null),e(Ve,B0),w(Hs,Ve,null),e(Ve,M0),w(Rs,Ve,null),_(o,Wb,k),_(o,un,k),e(un,Qs),e(Qs,yf),w(il,yf,null),e(un,E0),e(un,Tf),e(Tf,z0),_(o,Hb,k),_(o,ht,k),w(ll,ht,null),e(ht,P0),e(ht,vf),e(vf,q0),e(ht,j0),e(ht,dl),e(dl,C0),e(dl,Xp),e(Xp,N0),e(dl,O0),e(ht,I0),e(ht,cl),e(cl,A0),e(cl,pl),e(pl,L0),e(cl,D0),e(ht,S0),e(ht,Wt),w(hl,Wt,null),e(Wt,U0),e(Wt,gn),e(gn,W0),e(gn,Yp),e(Yp,H0),e(gn,R0),e(gn,wf),e(wf,Q0),e(gn,V0),e(Wt,K0),w(Vs,Wt,null),e(Wt,J0),w(Ks,Wt,null),_(o,Rb,k),_(o,_n,k),e(_n,Js),e(Js,$f),w(ml,$f,null),e(_n,G0),e(_n,xf),e(xf,X0),_(o,Qb,k),_(o,mt,k),w(fl,mt,null),e(mt,Y0),e(mt,Ff),e(Ff,Z0),e(mt,e2),e(mt,ul),e(ul,t2),e(ul,Zp),e(Zp,o2),e(ul,n2),e(mt,s2),e(mt,gl),e(gl,r2),e(gl,_l),e(_l,a2),e(gl,i2),e(mt,l2),e(mt,gt),w(bl,gt,null),e(gt,d2),e(gt,bn),e(bn,c2),e(bn,eh),e(eh,p2),e(bn,h2),e(bn,Bf),e(Bf,m2),e(bn,f2),e(gt,u2),w(Gs,gt,null),e(gt,g2),w(Xs,gt,null),e(gt,_2),w(Ys,gt,null),_(o,Vb,k),_(o,kn,k),e(kn,Zs),e(Zs,Mf),w(kl,Mf,null),e(kn,b2),e(kn,Ef),e(Ef,k2),_(o,Kb,k),_(o,ft,k),w(yl,ft,null),e(ft,y2),e(ft,yn),e(yn,T2),e(yn,zf),e(zf,v2),e(yn,w2),e(yn,Pf),e(Pf,$2),e(yn,x2),e(ft,F2),e(ft,Tl),e(Tl,B2),e(Tl,th),e(th,M2),e(Tl,E2),e(ft,z2),e(ft,vl),e(vl,P2),e(vl,wl),e(wl,q2),e(vl,j2),e(ft,C2),e(ft,_t),w($l,_t,null),e(_t,N2),e(_t,Tn),e(Tn,O2),e(Tn,oh),e(oh,I2),e(Tn,A2),e(Tn,qf),e(qf,L2),e(Tn,D2),e(_t,S2),w(er,_t,null),e(_t,U2),w(tr,_t,null),e(_t,W2),w(or,_t,null),_(o,Jb,k),_(o,vn,k),e(vn,nr),e(nr,jf),w(xl,jf,null),e(vn,H2),e(vn,Cf),e(Cf,R2),_(o,Gb,k),_(o,Je,k),w(Fl,Je,null),e(Je,Q2),e(Je,Nf),e(Nf,V2),e(Je,K2),e(Je,Bl),e(Bl,J2),e(Bl,nh),e(nh,G2),e(Bl,X2),e(Je,Y2),e(Je,Ml),e(Ml,Z2),e(Ml,El),e(El,ex),e(Ml,tx),e(Je,ox),w(sr,Je,null),e(Je,nx),e(Je,Ht),w(zl,Ht,null),e(Ht,sx),e(Ht,wn),e(wn,rx),e(wn,sh),e(sh,ax),e(wn,ix),e(wn,Of),e(Of,lx),e(wn,dx),e(Ht,cx),w(rr,Ht,null),e(Ht,px),w(ar,Ht,null),_(o,Xb,k),_(o,$n,k),e($n,ir),e(ir,If),w(Pl,If,null),e($n,hx),e($n,Af),e(Af,mx),_(o,Yb,k),_(o,Ge,k),w(ql,Ge,null),e(Ge,fx),e(Ge,xn),e(xn,ux),e(xn,Lf),e(Lf,gx),e(xn,_x),e(xn,Df),e(Df,bx),e(xn,kx),e(Ge,yx),e(Ge,jl),e(jl,Tx),e(jl,rh),e(rh,vx),e(jl,wx),e(Ge,$x),e(Ge,Cl),e(Cl,xx),e(Cl,Nl),e(Nl,Fx),e(Cl,Bx),e(Ge,Mx),w(lr,Ge,null),e(Ge,Ex),e(Ge,Rt),w(Ol,Rt,null),e(Rt,zx),e(Rt,Fn),e(Fn,Px),e(Fn,ah),e(ah,qx),e(Fn,jx),e(Fn,Sf),e(Sf,Cx),e(Fn,Nx),e(Rt,Ox),w(dr,Rt,null),e(Rt,Ix),w(cr,Rt,null),_(o,Zb,k),_(o,Bn,k),e(Bn,pr),e(pr,Uf),w(Il,Uf,null),e(Bn,Ax),e(Bn,Wf),e(Wf,Lx),_(o,ek,k),_(o,Mn,k),w(Al,Mn,null),e(Mn,Dx),e(Mn,bt),w(Ll,bt,null),e(bt,Sx),e(bt,Ie),e(Ie,Ux),e(Ie,Hf),e(Hf,Wx),e(Ie,Hx),e(Ie,Rf),e(Rf,Rx),e(Ie,Qx),e(Ie,Qf),e(Qf,Vx),e(Ie,Kx),e(Ie,Vf),e(Vf,Jx),e(Ie,Gx),e(Ie,Kf),e(Kf,Xx),e(Ie,Yx),e(Ie,Jf),e(Jf,Zx),e(Ie,eF),e(Ie,Gf),e(Gf,tF),e(Ie,oF),e(bt,nF),e(bt,Dl),e(Dl,Sl),e(Sl,sF),e(Sl,Xf),e(Xf,rF),e(Sl,aF),e(Dl,iF),e(Dl,Ul),e(Ul,lF),e(Ul,Yf),e(Yf,dF),e(Ul,cF),e(bt,pF),e(bt,G),e(G,hF),e(G,Zf),e(Zf,mF),e(G,fF),e(G,eu),e(eu,uF),e(G,gF),e(G,tu),e(tu,_F),e(G,bF),e(G,ou),e(ou,kF),e(G,yF),e(G,nu),e(nu,TF),e(G,vF),e(G,su),e(su,wF),e(G,$F),e(G,ru),e(ru,xF),e(G,FF),e(G,au),e(au,BF),e(G,MF),e(G,iu),e(iu,EF),e(G,zF),e(G,lu),e(lu,PF),e(G,qF),e(G,du),e(du,jF),e(G,CF),e(G,cu),e(cu,NF),e(G,OF),e(G,pu),e(pu,IF),e(G,AF),e(G,hu),e(hu,LF),e(G,DF),e(G,mu),e(mu,SF),e(G,UF),e(G,fu),e(fu,WF),e(G,HF),e(G,uu),e(uu,RF),e(G,QF),e(G,gu),e(gu,VF),e(G,KF),e(G,_u),e(_u,JF),e(G,GF),e(G,bu),e(bu,XF),e(G,YF),e(bt,ZF),w(hr,bt,null),_(o,tk,k),_(o,En,k),e(En,mr),e(mr,ku),w(Wl,ku,null),e(En,eB),e(En,yu),e(yu,tB),_(o,ok,k),_(o,Xe,k),w(Hl,Xe,null),e(Xe,oB),e(Xe,Rl),e(Rl,nB),e(Rl,Tu),e(Tu,sB),e(Rl,rB),e(Xe,aB),e(Xe,Ql),e(Ql,iB),e(Ql,ih),e(ih,lB),e(Ql,dB),e(Xe,cB),e(Xe,Vl),e(Vl,pB),e(Vl,Kl),e(Kl,hB),e(Vl,mB),e(Xe,fB),w(fr,Xe,null),e(Xe,uB),e(Xe,kt),w(Jl,kt,null),e(kt,gB),e(kt,zn),e(zn,_B),e(zn,lh),e(lh,bB),e(zn,kB),e(zn,vu),e(vu,yB),e(zn,TB),e(kt,vB),w(ur,kt,null),e(kt,wB),w(gr,kt,null),e(kt,$B),w(_r,kt,null),_(o,nk,k),_(o,Pn,k),e(Pn,br),e(br,wu),w(Gl,wu,null),e(Pn,xB),e(Pn,$u),e($u,FB),_(o,sk,k),_(o,Ye,k),w(Xl,Ye,null),e(Ye,BB),e(Ye,Yl),e(Yl,MB),e(Yl,xu),e(xu,EB),e(Yl,zB),e(Ye,PB),e(Ye,Zl),e(Zl,qB),e(Zl,dh),e(dh,jB),e(Zl,CB),e(Ye,NB),e(Ye,ed),e(ed,OB),e(ed,td),e(td,IB),e(ed,AB),e(Ye,LB),w(kr,Ye,null),e(Ye,DB),e(Ye,Qt),w(od,Qt,null),e(Qt,SB),e(Qt,qn),e(qn,UB),e(qn,ch),e(ch,WB),e(qn,HB),e(qn,Fu),e(Fu,RB),e(qn,QB),e(Qt,VB),w(yr,Qt,null),e(Qt,KB),w(Tr,Qt,null),_(o,rk,k),_(o,jn,k),e(jn,vr),e(vr,Bu),w(nd,Bu,null),e(jn,JB),e(jn,Mu),e(Mu,GB),_(o,ak,k),_(o,Ze,k),w(sd,Ze,null),e(Ze,XB),e(Ze,Eu),e(Eu,YB),e(Ze,ZB),e(Ze,rd),e(rd,e7),e(rd,ph),e(ph,t7),e(rd,o7),e(Ze,n7),e(Ze,ad),e(ad,s7),e(ad,id),e(id,r7),e(ad,a7),e(Ze,i7),w(wr,Ze,null),e(Ze,l7),e(Ze,yt),w(ld,yt,null),e(yt,d7),e(yt,Cn),e(Cn,c7),e(Cn,hh),e(hh,p7),e(Cn,h7),e(Cn,zu),e(zu,m7),e(Cn,f7),e(yt,u7),w($r,yt,null),e(yt,g7),w(xr,yt,null),e(yt,_7),w(Fr,yt,null),_(o,ik,k),_(o,Nn,k),e(Nn,Br),e(Br,Pu),w(dd,Pu,null),e(Nn,b7),e(Nn,qu),e(qu,k7),_(o,lk,k),_(o,et,k),w(cd,et,null),e(et,y7),e(et,ju),e(ju,T7),e(et,v7),e(et,pd),e(pd,w7),e(pd,mh),e(mh,$7),e(pd,x7),e(et,F7),e(et,hd),e(hd,B7),e(hd,md),e(md,M7),e(hd,E7),e(et,z7),w(Mr,et,null),e(et,P7),e(et,Vt),w(fd,Vt,null),e(Vt,q7),e(Vt,On),e(On,j7),e(On,fh),e(fh,C7),e(On,N7),e(On,Cu),e(Cu,O7),e(On,I7),e(Vt,A7),w(Er,Vt,null),e(Vt,L7),w(zr,Vt,null),_(o,dk,k),_(o,In,k),e(In,Pr),e(Pr,Nu),w(ud,Nu,null),e(In,D7),e(In,Ou),e(Ou,S7),_(o,ck,k),_(o,tt,k),w(gd,tt,null),e(tt,U7),e(tt,Iu),e(Iu,W7),e(tt,H7),e(tt,_d),e(_d,R7),e(_d,uh),e(uh,Q7),e(_d,V7),e(tt,K7),e(tt,bd),e(bd,J7),e(bd,kd),e(kd,G7),e(bd,X7),e(tt,Y7),w(qr,tt,null),e(tt,Z7),e(tt,Tt),w(yd,Tt,null),e(Tt,eM),e(Tt,An),e(An,tM),e(An,gh),e(gh,oM),e(An,nM),e(An,Au),e(Au,sM),e(An,rM),e(Tt,aM),w(jr,Tt,null),e(Tt,iM),w(Cr,Tt,null),e(Tt,lM),w(Nr,Tt,null),_(o,pk,k),_(o,Ln,k),e(Ln,Or),e(Or,Lu),w(Td,Lu,null),e(Ln,dM),e(Ln,Du),e(Du,cM),_(o,hk,k),_(o,ot,k),w(vd,ot,null),e(ot,pM),e(ot,Dn),e(Dn,hM),e(Dn,Su),e(Su,mM),e(Dn,fM),e(Dn,Uu),e(Uu,uM),e(Dn,gM),e(ot,_M),e(ot,wd),e(wd,bM),e(wd,_h),e(_h,kM),e(wd,yM),e(ot,TM),e(ot,$d),e($d,vM),e($d,xd),e(xd,wM),e($d,$M),e(ot,xM),w(Ir,ot,null),e(ot,FM),e(ot,vt),w(Fd,vt,null),e(vt,BM),e(vt,Sn),e(Sn,MM),e(Sn,bh),e(bh,EM),e(Sn,zM),e(Sn,Wu),e(Wu,PM),e(Sn,qM),e(vt,jM),w(Ar,vt,null),e(vt,CM),w(Lr,vt,null),e(vt,NM),w(Dr,vt,null),_(o,mk,k),_(o,Un,k),e(Un,Sr),e(Sr,Hu),w(Bd,Hu,null),e(Un,OM),e(Un,Ru),e(Ru,IM),_(o,fk,k),_(o,Ae,k),w(Md,Ae,null),e(Ae,AM),e(Ae,Qu),e(Qu,LM),e(Ae,DM),e(Ae,Ed),e(Ed,SM),e(Ed,kh),e(kh,UM),e(Ed,WM),e(Ae,HM),e(Ae,zd),e(zd,RM),e(zd,Pd),e(Pd,QM),e(zd,VM),e(Ae,KM),e(Ae,Vu),e(Vu,JM),e(Ae,GM),e(Ae,fo),e(fo,Ku),e(Ku,qd),e(qd,XM),e(fo,YM),e(fo,Ju),e(Ju,jd),e(jd,ZM),e(fo,eE),e(fo,Gu),e(Gu,Cd),e(Cd,tE),e(fo,oE),e(fo,Xu),e(Xu,Nd),e(Nd,nE),e(Ae,sE),e(Ae,Kt),w(Od,Kt,null),e(Kt,rE),e(Kt,Wn),e(Wn,aE),e(Wn,Yu),e(Yu,iE),e(Wn,lE),e(Wn,Zu),e(Zu,dE),e(Wn,cE),e(Kt,pE),w(Ur,Kt,null),e(Kt,hE),w(Wr,Kt,null),_(o,uk,k),_(o,Hn,k),e(Hn,Hr),e(Hr,eg),w(Id,eg,null),e(Hn,mE),e(Hn,tg),e(tg,fE),_(o,gk,k),_(o,Le,k),w(Ad,Le,null),e(Le,uE),e(Le,Rn),e(Rn,gE),e(Rn,og),e(og,_E),e(Rn,bE),e(Rn,ng),e(ng,kE),e(Rn,yE),e(Le,TE),e(Le,Ld),e(Ld,vE),e(Ld,yh),e(yh,wE),e(Ld,$E),e(Le,xE),e(Le,Dd),e(Dd,FE),e(Dd,Sd),e(Sd,BE),e(Dd,ME),e(Le,EE),e(Le,sg),e(sg,zE),e(Le,PE),e(Le,uo),e(uo,rg),e(rg,Ud),e(Ud,qE),e(uo,jE),e(uo,ag),e(ag,Wd),e(Wd,CE),e(uo,NE),e(uo,ig),e(ig,Hd),e(Hd,OE),e(uo,IE),e(uo,lg),e(lg,Rd),e(Rd,AE),e(Le,LE),e(Le,Jt),w(Qd,Jt,null),e(Jt,DE),e(Jt,Qn),e(Qn,SE),e(Qn,dg),e(dg,UE),e(Qn,WE),e(Qn,cg),e(cg,HE),e(Qn,RE),e(Jt,QE),w(Rr,Jt,null),e(Jt,VE),w(Qr,Jt,null),_(o,_k,k),_(o,Vn,k),e(Vn,Vr),e(Vr,pg),w(Vd,pg,null),e(Vn,KE),e(Vn,hg),e(hg,JE),_(o,bk,k),_(o,De,k),w(Kd,De,null),e(De,GE),e(De,mg),e(mg,XE),e(De,YE),e(De,Jd),e(Jd,ZE),e(Jd,Th),e(Th,ez),e(Jd,tz),e(De,oz),e(De,Gd),e(Gd,nz),e(Gd,Xd),e(Xd,sz),e(Gd,rz),e(De,az),e(De,fg),e(fg,iz),e(De,lz),e(De,go),e(go,ug),e(ug,Yd),e(Yd,dz),e(go,cz),e(go,gg),e(gg,Zd),e(Zd,pz),e(go,hz),e(go,_g),e(_g,ec),e(ec,mz),e(go,fz),e(go,bg),e(bg,tc),e(tc,uz),e(De,gz),e(De,Gt),w(oc,Gt,null),e(Gt,_z),e(Gt,Kn),e(Kn,bz),e(Kn,kg),e(kg,kz),e(Kn,yz),e(Kn,yg),e(yg,Tz),e(Kn,vz),e(Gt,wz),w(Kr,Gt,null),e(Gt,$z),w(Jr,Gt,null),_(o,kk,k),_(o,Jn,k),e(Jn,Gr),e(Gr,Tg),w(nc,Tg,null),e(Jn,xz),e(Jn,vg),e(vg,Fz),_(o,yk,k),_(o,Se,k),w(sc,Se,null),e(Se,Bz),e(Se,rc),e(rc,Mz),e(rc,wg),e(wg,Ez),e(rc,zz),e(Se,Pz),e(Se,ac),e(ac,qz),e(ac,vh),e(vh,jz),e(ac,Cz),e(Se,Nz),e(Se,ic),e(ic,Oz),e(ic,lc),e(lc,Iz),e(ic,Az),e(Se,Lz),e(Se,$g),e($g,Dz),e(Se,Sz),e(Se,_o),e(_o,xg),e(xg,dc),e(dc,Uz),e(_o,Wz),e(_o,Fg),e(Fg,cc),e(cc,Hz),e(_o,Rz),e(_o,Bg),e(Bg,pc),e(pc,Qz),e(_o,Vz),e(_o,Mg),e(Mg,hc),e(hc,Kz),e(Se,Jz),e(Se,Xt),w(mc,Xt,null),e(Xt,Gz),e(Xt,Gn),e(Gn,Xz),e(Gn,Eg),e(Eg,Yz),e(Gn,Zz),e(Gn,zg),e(zg,e4),e(Gn,t4),e(Xt,o4),w(Xr,Xt,null),e(Xt,n4),w(Yr,Xt,null),_(o,Tk,k),_(o,Xn,k),e(Xn,Zr),e(Zr,Pg),w(fc,Pg,null),e(Xn,s4),e(Xn,qg),e(qg,r4),_(o,vk,k),_(o,Ue,k),w(uc,Ue,null),e(Ue,a4),e(Ue,gc),e(gc,i4),e(gc,jg),e(jg,l4),e(gc,d4),e(Ue,c4),e(Ue,_c),e(_c,p4),e(_c,wh),e(wh,h4),e(_c,m4),e(Ue,f4),e(Ue,bc),e(bc,u4),e(bc,kc),e(kc,g4),e(bc,_4),e(Ue,b4),e(Ue,Cg),e(Cg,k4),e(Ue,y4),e(Ue,bo),e(bo,Ng),e(Ng,yc),e(yc,T4),e(bo,v4),e(bo,Og),e(Og,Tc),e(Tc,w4),e(bo,$4),e(bo,Ig),e(Ig,vc),e(vc,x4),e(bo,F4),e(bo,Ag),e(Ag,wc),e(wc,B4),e(Ue,M4),e(Ue,Yt),w($c,Yt,null),e(Yt,E4),e(Yt,Yn),e(Yn,z4),e(Yn,Lg),e(Lg,P4),e(Yn,q4),e(Yn,Dg),e(Dg,j4),e(Yn,C4),e(Yt,N4),w(ea,Yt,null),e(Yt,O4),w(ta,Yt,null),_(o,wk,k),_(o,Zn,k),e(Zn,oa),e(oa,Sg),w(xc,Sg,null),e(Zn,I4),e(Zn,Ug),e(Ug,A4),_(o,$k,k),_(o,We,k),w(Fc,We,null),e(We,L4),e(We,Wg),e(Wg,D4),e(We,S4),e(We,Bc),e(Bc,U4),e(Bc,$h),e($h,W4),e(Bc,H4),e(We,R4),e(We,Mc),e(Mc,Q4),e(Mc,Ec),e(Ec,V4),e(Mc,K4),e(We,J4),e(We,Hg),e(Hg,G4),e(We,X4),e(We,ko),e(ko,Rg),e(Rg,zc),e(zc,Y4),e(ko,Z4),e(ko,Qg),e(Qg,Pc),e(Pc,eP),e(ko,tP),e(ko,Vg),e(Vg,qc),e(qc,oP),e(ko,nP),e(ko,Kg),e(Kg,jc),e(jc,sP),e(We,rP),e(We,Zt),w(Cc,Zt,null),e(Zt,aP),e(Zt,es),e(es,iP),e(es,Jg),e(Jg,lP),e(es,dP),e(es,Gg),e(Gg,cP),e(es,pP),e(Zt,hP),w(na,Zt,null),e(Zt,mP),w(sa,Zt,null),_(o,xk,k),_(o,ts,k),e(ts,ra),e(ra,Xg),w(Nc,Xg,null),e(ts,fP),e(ts,Yg),e(Yg,uP),_(o,Fk,k),_(o,He,k),w(Oc,He,null),e(He,gP),e(He,Zg),e(Zg,_P),e(He,bP),e(He,Ic),e(Ic,kP),e(Ic,xh),e(xh,yP),e(Ic,TP),e(He,vP),e(He,Ac),e(Ac,wP),e(Ac,Lc),e(Lc,$P),e(Ac,xP),e(He,FP),e(He,e_),e(e_,BP),e(He,MP),e(He,yo),e(yo,t_),e(t_,Dc),e(Dc,EP),e(yo,zP),e(yo,o_),e(o_,Sc),e(Sc,PP),e(yo,qP),e(yo,n_),e(n_,Uc),e(Uc,jP),e(yo,CP),e(yo,s_),e(s_,Wc),e(Wc,NP),e(He,OP),e(He,eo),w(Hc,eo,null),e(eo,IP),e(eo,os),e(os,AP),e(os,r_),e(r_,LP),e(os,DP),e(os,a_),e(a_,SP),e(os,UP),e(eo,WP),w(aa,eo,null),e(eo,HP),w(ia,eo,null),_(o,Bk,k),_(o,ns,k),e(ns,la),e(la,i_),w(Rc,i_,null),e(ns,RP),e(ns,l_),e(l_,QP),_(o,Mk,k),_(o,Re,k),w(Qc,Re,null),e(Re,VP),e(Re,d_),e(d_,KP),e(Re,JP),e(Re,Vc),e(Vc,GP),e(Vc,Fh),e(Fh,XP),e(Vc,YP),e(Re,ZP),e(Re,Kc),e(Kc,eq),e(Kc,Jc),e(Jc,tq),e(Kc,oq),e(Re,nq),e(Re,c_),e(c_,sq),e(Re,rq),e(Re,To),e(To,p_),e(p_,Gc),e(Gc,aq),e(To,iq),e(To,h_),e(h_,Xc),e(Xc,lq),e(To,dq),e(To,m_),e(m_,Yc),e(Yc,cq),e(To,pq),e(To,f_),e(f_,Zc),e(Zc,hq),e(Re,mq),e(Re,to),w(ep,to,null),e(to,fq),e(to,ss),e(ss,uq),e(ss,u_),e(u_,gq),e(ss,_q),e(ss,g_),e(g_,bq),e(ss,kq),e(to,yq),w(da,to,null),e(to,Tq),w(ca,to,null),_(o,Ek,k),_(o,rs,k),e(rs,pa),e(pa,__),w(tp,__,null),e(rs,vq),e(rs,b_),e(b_,wq),_(o,zk,k),_(o,Qe,k),w(op,Qe,null),e(Qe,$q),e(Qe,as),e(as,xq),e(as,k_),e(k_,Fq),e(as,Bq),e(as,y_),e(y_,Mq),e(as,Eq),e(Qe,zq),e(Qe,np),e(np,Pq),e(np,Bh),e(Bh,qq),e(np,jq),e(Qe,Cq),e(Qe,sp),e(sp,Nq),e(sp,rp),e(rp,Oq),e(sp,Iq),e(Qe,Aq),e(Qe,T_),e(T_,Lq),e(Qe,Dq),e(Qe,vo),e(vo,v_),e(v_,ap),e(ap,Sq),e(vo,Uq),e(vo,w_),e(w_,ip),e(ip,Wq),e(vo,Hq),e(vo,$_),e($_,lp),e(lp,Rq),e(vo,Qq),e(vo,x_),e(x_,dp),e(dp,Vq),e(Qe,Kq),e(Qe,oo),w(cp,oo,null),e(oo,Jq),e(oo,is),e(is,Gq),e(is,F_),e(F_,Xq),e(is,Yq),e(is,B_),e(B_,Zq),e(is,ej),e(oo,tj),w(ha,oo,null),e(oo,oj),w(ma,oo,null),Pk=!0},p(o,[k]){const pp={};k&2&&(pp.$$scope={dirty:k,ctx:o}),ms.$set(pp);const M_={};k&2&&(M_.$$scope={dirty:k,ctx:o}),gs.$set(M_);const E_={};k&2&&(E_.$$scope={dirty:k,ctx:o}),bs.$set(E_);const z_={};k&2&&(z_.$$scope={dirty:k,ctx:o}),xs.$set(z_);const hp={};k&2&&(hp.$$scope={dirty:k,ctx:o}),Fs.$set(hp);const P_={};k&2&&(P_.$$scope={dirty:k,ctx:o}),Ms.$set(P_);const q_={};k&2&&(q_.$$scope={dirty:k,ctx:o}),Es.$set(q_);const j_={};k&2&&(j_.$$scope={dirty:k,ctx:o}),Ps.$set(j_);const mp={};k&2&&(mp.$$scope={dirty:k,ctx:o}),qs.$set(mp);const C_={};k&2&&(C_.$$scope={dirty:k,ctx:o}),Cs.$set(C_);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),Ns.$set(N_);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),Os.$set(O_);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),As.$set(I_);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),Ls.$set(A_);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),Ss.$set(L_);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),Us.$set(D_);const fp={};k&2&&(fp.$$scope={dirty:k,ctx:o}),Ws.$set(fp);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Hs.$set(S_);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),Rs.$set(U_);const ls={};k&2&&(ls.$$scope={dirty:k,ctx:o}),Vs.$set(ls);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),Ks.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Gs.$set(H_);const up={};k&2&&(up.$$scope={dirty:k,ctx:o}),Xs.$set(up);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Ys.$set(R_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),er.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),tr.$set(V_);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),or.$set(wo);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),sr.$set($o);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),rr.$set(K_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),ar.$set(J_);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),lr.$set(G_);const ds={};k&2&&(ds.$$scope={dirty:k,ctx:o}),dr.$set(ds);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),cr.$set(X_);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),hr.$set(Y_);const gp={};k&2&&(gp.$$scope={dirty:k,ctx:o}),fr.$set(gp);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:o}),ur.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:o}),gr.$set(eb);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:o}),_r.$set(tb);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),kr.$set(nt);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:o}),yr.$set(ob);const _p={};k&2&&(_p.$$scope={dirty:k,ctx:o}),Tr.$set(_p);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:o}),wr.$set(nb);const cs={};k&2&&(cs.$$scope={dirty:k,ctx:o}),$r.$set(cs);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:o}),xr.$set(sb);const bp={};k&2&&(bp.$$scope={dirty:k,ctx:o}),Fr.$set(bp);const Mh={};k&2&&(Mh.$$scope={dirty:k,ctx:o}),Mr.$set(Mh);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:o}),Er.$set(rb);const Eh={};k&2&&(Eh.$$scope={dirty:k,ctx:o}),zr.$set(Eh);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:o}),qr.$set(ab);const kp={};k&2&&(kp.$$scope={dirty:k,ctx:o}),jr.$set(kp);const yp={};k&2&&(yp.$$scope={dirty:k,ctx:o}),Cr.$set(yp);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:o}),Nr.$set(ib);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),Ir.$set(xo);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:o}),Ar.$set(lb);const ps={};k&2&&(ps.$$scope={dirty:k,ctx:o}),Lr.$set(ps);const db={};k&2&&(db.$$scope={dirty:k,ctx:o}),Dr.$set(db);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:o}),Ur.$set(cb);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:o}),Wr.$set(pb);const Tp={};k&2&&(Tp.$$scope={dirty:k,ctx:o}),Rr.$set(Tp);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:o}),Qr.$set(hb);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:o}),Kr.$set(mb);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:o}),Jr.$set(fb);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:o}),Xr.$set(Ot);const vp={};k&2&&(vp.$$scope={dirty:k,ctx:o}),Yr.$set(vp);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:o}),ea.$set(ub);const wp={};k&2&&(wp.$$scope={dirty:k,ctx:o}),ta.$set(wp);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:o}),na.$set(gb);const hs={};k&2&&(hs.$$scope={dirty:k,ctx:o}),sa.$set(hs);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:o}),aa.$set(_b);const $p={};k&2&&($p.$$scope={dirty:k,ctx:o}),ia.$set($p);const zh={};k&2&&(zh.$$scope={dirty:k,ctx:o}),da.$set(zh);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:o}),ca.$set(bb);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),ha.$set(Ph);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:o}),ma.$set(kb)},i(o){Pk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(Ee.$$.fragment,o),$(Ua.$$.fragment,o),$(ms.$$.fragment,o),$(Ha.$$.fragment,o),$(Ra.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Xa.$$.fragment,o),$(gs.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ei.$$.fragment,o),$(ni.$$.fragment,o),$(ri.$$.fragment,o),$(bs.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(ci.$$.fragment,o),$(hi.$$.fragment,o),$(mi.$$.fragment,o),$(ui.$$.fragment,o),$(_i.$$.fragment,o),$(ki.$$.fragment,o),$(yi.$$.fragment,o),$(Ti.$$.fragment,o),$(Bi.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(Mi.$$.fragment,o),$(Ei.$$.fragment,o),$(ji.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Ci.$$.fragment,o),$(Ni.$$.fragment,o),$(Di.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Si.$$.fragment,o),$(Ui.$$.fragment,o),$(Vi.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(Ki.$$.fragment,o),$(Ji.$$.fragment,o),$(el.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(tl.$$.fragment,o),$(ol.$$.fragment,o),$(al.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(Hs.$$.fragment,o),$(Rs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(hl.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(ml.$$.fragment,o),$(fl.$$.fragment,o),$(bl.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(kl.$$.fragment,o),$(yl.$$.fragment,o),$($l.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(xl.$$.fragment,o),$(Fl.$$.fragment,o),$(sr.$$.fragment,o),$(zl.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(Pl.$$.fragment,o),$(ql.$$.fragment,o),$(lr.$$.fragment,o),$(Ol.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Il.$$.fragment,o),$(Al.$$.fragment,o),$(Ll.$$.fragment,o),$(hr.$$.fragment,o),$(Wl.$$.fragment,o),$(Hl.$$.fragment,o),$(fr.$$.fragment,o),$(Jl.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(kr.$$.fragment,o),$(od.$$.fragment,o),$(yr.$$.fragment,o),$(Tr.$$.fragment,o),$(nd.$$.fragment,o),$(sd.$$.fragment,o),$(wr.$$.fragment,o),$(ld.$$.fragment,o),$($r.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(dd.$$.fragment,o),$(cd.$$.fragment,o),$(Mr.$$.fragment,o),$(fd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(ud.$$.fragment,o),$(gd.$$.fragment,o),$(qr.$$.fragment,o),$(yd.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(Nr.$$.fragment,o),$(Td.$$.fragment,o),$(vd.$$.fragment,o),$(Ir.$$.fragment,o),$(Fd.$$.fragment,o),$(Ar.$$.fragment,o),$(Lr.$$.fragment,o),$(Dr.$$.fragment,o),$(Bd.$$.fragment,o),$(Md.$$.fragment,o),$(Od.$$.fragment,o),$(Ur.$$.fragment,o),$(Wr.$$.fragment,o),$(Id.$$.fragment,o),$(Ad.$$.fragment,o),$(Qd.$$.fragment,o),$(Rr.$$.fragment,o),$(Qr.$$.fragment,o),$(Vd.$$.fragment,o),$(Kd.$$.fragment,o),$(oc.$$.fragment,o),$(Kr.$$.fragment,o),$(Jr.$$.fragment,o),$(nc.$$.fragment,o),$(sc.$$.fragment,o),$(mc.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(fc.$$.fragment,o),$(uc.$$.fragment,o),$($c.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(xc.$$.fragment,o),$(Fc.$$.fragment,o),$(Cc.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(Nc.$$.fragment,o),$(Oc.$$.fragment,o),$(Hc.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(Rc.$$.fragment,o),$(Qc.$$.fragment,o),$(ep.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(tp.$$.fragment,o),$(op.$$.fragment,o),$(cp.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),Pk=!0)},o(o){x(l.$$.fragment,o),x(re.$$.fragment,o),x(Ee.$$.fragment,o),x(Ua.$$.fragment,o),x(ms.$$.fragment,o),x(Ha.$$.fragment,o),x(Ra.$$.fragment,o),x(Va.$$.fragment,o),x(Ja.$$.fragment,o),x(Xa.$$.fragment,o),x(gs.$$.fragment,o),x(Ya.$$.fragment,o),x(Za.$$.fragment,o),x(ei.$$.fragment,o),x(ni.$$.fragment,o),x(ri.$$.fragment,o),x(bs.$$.fragment,o),x(ai.$$.fragment,o),x(ii.$$.fragment,o),x(li.$$.fragment,o),x(ci.$$.fragment,o),x(hi.$$.fragment,o),x(mi.$$.fragment,o),x(ui.$$.fragment,o),x(_i.$$.fragment,o),x(ki.$$.fragment,o),x(yi.$$.fragment,o),x(Ti.$$.fragment,o),x(Bi.$$.fragment,o),x(xs.$$.fragment,o),x(Fs.$$.fragment,o),x(Mi.$$.fragment,o),x(Ei.$$.fragment,o),x(ji.$$.fragment,o),x(Ms.$$.fragment,o),x(Es.$$.fragment,o),x(Ci.$$.fragment,o),x(Ni.$$.fragment,o),x(Di.$$.fragment,o),x(Ps.$$.fragment,o),x(qs.$$.fragment,o),x(Si.$$.fragment,o),x(Ui.$$.fragment,o),x(Vi.$$.fragment,o),x(Cs.$$.fragment,o),x(Ns.$$.fragment,o),x(Os.$$.fragment,o),x(Ki.$$.fragment,o),x(Ji.$$.fragment,o),x(el.$$.fragment,o),x(As.$$.fragment,o),x(Ls.$$.fragment,o),x(tl.$$.fragment,o),x(ol.$$.fragment,o),x(al.$$.fragment,o),x(Ss.$$.fragment,o),x(Us.$$.fragment,o),x(Ws.$$.fragment,o),x(Hs.$$.fragment,o),x(Rs.$$.fragment,o),x(il.$$.fragment,o),x(ll.$$.fragment,o),x(hl.$$.fragment,o),x(Vs.$$.fragment,o),x(Ks.$$.fragment,o),x(ml.$$.fragment,o),x(fl.$$.fragment,o),x(bl.$$.fragment,o),x(Gs.$$.fragment,o),x(Xs.$$.fragment,o),x(Ys.$$.fragment,o),x(kl.$$.fragment,o),x(yl.$$.fragment,o),x($l.$$.fragment,o),x(er.$$.fragment,o),x(tr.$$.fragment,o),x(or.$$.fragment,o),x(xl.$$.fragment,o),x(Fl.$$.fragment,o),x(sr.$$.fragment,o),x(zl.$$.fragment,o),x(rr.$$.fragment,o),x(ar.$$.fragment,o),x(Pl.$$.fragment,o),x(ql.$$.fragment,o),x(lr.$$.fragment,o),x(Ol.$$.fragment,o),x(dr.$$.fragment,o),x(cr.$$.fragment,o),x(Il.$$.fragment,o),x(Al.$$.fragment,o),x(Ll.$$.fragment,o),x(hr.$$.fragment,o),x(Wl.$$.fragment,o),x(Hl.$$.fragment,o),x(fr.$$.fragment,o),x(Jl.$$.fragment,o),x(ur.$$.fragment,o),x(gr.$$.fragment,o),x(_r.$$.fragment,o),x(Gl.$$.fragment,o),x(Xl.$$.fragment,o),x(kr.$$.fragment,o),x(od.$$.fragment,o),x(yr.$$.fragment,o),x(Tr.$$.fragment,o),x(nd.$$.fragment,o),x(sd.$$.fragment,o),x(wr.$$.fragment,o),x(ld.$$.fragment,o),x($r.$$.fragment,o),x(xr.$$.fragment,o),x(Fr.$$.fragment,o),x(dd.$$.fragment,o),x(cd.$$.fragment,o),x(Mr.$$.fragment,o),x(fd.$$.fragment,o),x(Er.$$.fragment,o),x(zr.$$.fragment,o),x(ud.$$.fragment,o),x(gd.$$.fragment,o),x(qr.$$.fragment,o),x(yd.$$.fragment,o),x(jr.$$.fragment,o),x(Cr.$$.fragment,o),x(Nr.$$.fragment,o),x(Td.$$.fragment,o),x(vd.$$.fragment,o),x(Ir.$$.fragment,o),x(Fd.$$.fragment,o),x(Ar.$$.fragment,o),x(Lr.$$.fragment,o),x(Dr.$$.fragment,o),x(Bd.$$.fragment,o),x(Md.$$.fragment,o),x(Od.$$.fragment,o),x(Ur.$$.fragment,o),x(Wr.$$.fragment,o),x(Id.$$.fragment,o),x(Ad.$$.fragment,o),x(Qd.$$.fragment,o),x(Rr.$$.fragment,o),x(Qr.$$.fragment,o),x(Vd.$$.fragment,o),x(Kd.$$.fragment,o),x(oc.$$.fragment,o),x(Kr.$$.fragment,o),x(Jr.$$.fragment,o),x(nc.$$.fragment,o),x(sc.$$.fragment,o),x(mc.$$.fragment,o),x(Xr.$$.fragment,o),x(Yr.$$.fragment,o),x(fc.$$.fragment,o),x(uc.$$.fragment,o),x($c.$$.fragment,o),x(ea.$$.fragment,o),x(ta.$$.fragment,o),x(xc.$$.fragment,o),x(Fc.$$.fragment,o),x(Cc.$$.fragment,o),x(na.$$.fragment,o),x(sa.$$.fragment,o),x(Nc.$$.fragment,o),x(Oc.$$.fragment,o),x(Hc.$$.fragment,o),x(aa.$$.fragment,o),x(ia.$$.fragment,o),x(Rc.$$.fragment,o),x(Qc.$$.fragment,o),x(ep.$$.fragment,o),x(da.$$.fragment,o),x(ca.$$.fragment,o),x(tp.$$.fragment,o),x(op.$$.fragment,o),x(cp.$$.fragment,o),x(ha.$$.fragment,o),x(ma.$$.fragment,o),Pk=!1},d(o){t(d),o&&t(b),o&&t(h),F(l),o&&t(X),o&&t(z),F(re),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t(xe),F(Ee),o&&t(yb),o&&t(Nt),F(Ua),F(ms),o&&t(Tb),o&&t(Qo),F(Ha),o&&t(vb),o&&t(Ne),F(Ra),F(Va),F(Ja),F(Xa),F(gs),F(Ya),o&&t(wb),o&&t(Ko),F(Za),o&&t($b),o&&t(rt),F(ei),F(ni),F(ri),F(bs),o&&t(xb),o&&t(Go),F(ai),o&&t(Fb),o&&t(at),F(ii),F(li),F(ci),o&&t(Bb),o&&t(Yo),F(hi),o&&t(Mb),o&&t(Zo),F(mi),o&&t(Eb),o&&t(en),F(ui),o&&t(zb),o&&t(mo),F(_i),F(ki),o&&t(Pb),o&&t(tn),F(yi),o&&t(qb),o&&t(Oe),F(Ti),F(Bi),F(xs),F(Fs),o&&t(jb),o&&t(nn),F(Mi),o&&t(Cb),o&&t(it),F(Ei),F(ji),F(Ms),F(Es),o&&t(Nb),o&&t(an),F(Ci),o&&t(Ob),o&&t(lt),F(Ni),F(Di),F(Ps),F(qs),o&&t(Ib),o&&t(dn),F(Si),o&&t(Ab),o&&t(dt),F(Ui),F(Vi),F(Cs),F(Ns),F(Os),o&&t(Lb),o&&t(pn),F(Ki),o&&t(Db),o&&t(ct),F(Ji),F(el),F(As),F(Ls),o&&t(Sb),o&&t(mn),F(tl),o&&t(Ub),o&&t(pt),F(ol),F(al),F(Ss),F(Us),F(Ws),F(Hs),F(Rs),o&&t(Wb),o&&t(un),F(il),o&&t(Hb),o&&t(ht),F(ll),F(hl),F(Vs),F(Ks),o&&t(Rb),o&&t(_n),F(ml),o&&t(Qb),o&&t(mt),F(fl),F(bl),F(Gs),F(Xs),F(Ys),o&&t(Vb),o&&t(kn),F(kl),o&&t(Kb),o&&t(ft),F(yl),F($l),F(er),F(tr),F(or),o&&t(Jb),o&&t(vn),F(xl),o&&t(Gb),o&&t(Je),F(Fl),F(sr),F(zl),F(rr),F(ar),o&&t(Xb),o&&t($n),F(Pl),o&&t(Yb),o&&t(Ge),F(ql),F(lr),F(Ol),F(dr),F(cr),o&&t(Zb),o&&t(Bn),F(Il),o&&t(ek),o&&t(Mn),F(Al),F(Ll),F(hr),o&&t(tk),o&&t(En),F(Wl),o&&t(ok),o&&t(Xe),F(Hl),F(fr),F(Jl),F(ur),F(gr),F(_r),o&&t(nk),o&&t(Pn),F(Gl),o&&t(sk),o&&t(Ye),F(Xl),F(kr),F(od),F(yr),F(Tr),o&&t(rk),o&&t(jn),F(nd),o&&t(ak),o&&t(Ze),F(sd),F(wr),F(ld),F($r),F(xr),F(Fr),o&&t(ik),o&&t(Nn),F(dd),o&&t(lk),o&&t(et),F(cd),F(Mr),F(fd),F(Er),F(zr),o&&t(dk),o&&t(In),F(ud),o&&t(ck),o&&t(tt),F(gd),F(qr),F(yd),F(jr),F(Cr),F(Nr),o&&t(pk),o&&t(Ln),F(Td),o&&t(hk),o&&t(ot),F(vd),F(Ir),F(Fd),F(Ar),F(Lr),F(Dr),o&&t(mk),o&&t(Un),F(Bd),o&&t(fk),o&&t(Ae),F(Md),F(Od),F(Ur),F(Wr),o&&t(uk),o&&t(Hn),F(Id),o&&t(gk),o&&t(Le),F(Ad),F(Qd),F(Rr),F(Qr),o&&t(_k),o&&t(Vn),F(Vd),o&&t(bk),o&&t(De),F(Kd),F(oc),F(Kr),F(Jr),o&&t(kk),o&&t(Jn),F(nc),o&&t(yk),o&&t(Se),F(sc),F(mc),F(Xr),F(Yr),o&&t(Tk),o&&t(Xn),F(fc),o&&t(vk),o&&t(Ue),F(uc),F($c),F(ea),F(ta),o&&t(wk),o&&t(Zn),F(xc),o&&t($k),o&&t(We),F(Fc),F(Cc),F(na),F(sa),o&&t(xk),o&&t(ts),F(Nc),o&&t(Fk),o&&t(He),F(Oc),F(Hc),F(aa),F(ia),o&&t(Bk),o&&t(ns),F(Rc),o&&t(Mk),o&&t(Re),F(Qc),F(ep),F(da),F(ca),o&&t(Ek),o&&t(rs),F(tp),o&&t(zk),o&&t(Qe),F(op),F(cp),F(ha),F(ma)}}}const nI={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function sI(B){return N8(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pI extends P8{constructor(d){super();q8(this,d,sI,oI,j8,{})}}export{pI as default,nI as metadata};
